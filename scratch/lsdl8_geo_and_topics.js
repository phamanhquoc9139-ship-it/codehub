// scratch/lsdl8_geo_and_topics.js
// Địa lí 8 (Bài 1 - 12) và 2 Chủ đề chung (SGK Kết nối tri thức với cuộc sống)

module.exports = [
  // --- ĐỊA LÍ BÀI 1 ĐẾN 12 ---
  {
    id: "dl-1",
    unitNumber: 20,
    type: "geography",
    chapter: "Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
    title: "Bài 1. Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Xác định tọa độ 4 điểm cực của phần đất liền Việt Nam; nêu phạm vi lãnh thổ (vùng đất, vùng biển, vùng trời); phân tích ý nghĩa tự nhiên và kinh tế - xã hội của vị trí địa lí đối với nước ta.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">TỌA ĐỘ 4 ĐIỂM CỰC PHẦN ĐẤT LIỀN VIỆT NAM</text>

      <!-- 4 Extreme points -->
      <rect x="40" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="73" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">CỰC BẮC (23°23'B)</text>
      <text x="115" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Xã Lũng Cú, Đồng Văn, Hà Giang</text>

      <rect x="210" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="285" y="73" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">CỰC NAM (8°34'B)</text>
      <text x="285" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Xã Đất Mũi, Ngọc Hiển, Cà Mau</text>

      <rect x="40" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="115" y="121" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">CỰC TÂY (102°09'Đ)</text>
      <text x="115" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Xã Sín Thầu, Mường Nhé, Điện Biên</text>

      <rect x="210" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="285" y="121" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">CỰC ĐÔNG (109°28'Đ)</text>
      <text x="285" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Xã Vạn Thạnh, Vạn Ninh, Khánh Hòa</text>

      <!-- Stats bar -->
      <rect x="40" y="154" width="320" height="32" rx="6" fill="#047857" stroke="#10b981"/>
      <text x="200" y="174" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">Diện tích đất liền ~331 nghìn km² • Đường bờ biển dài 3.260 km hình chữ S</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-location-dot text-sky-500"></i> I. Vị trí địa lí & Tọa độ lãnh thổ
          </h5>
          <p>• <strong>Vị trí:</strong> Nằm ở rìa phía đông của bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á; nằm hoàn toàn trong vùng nội chí tuyến Bắc bán cầu, tiếp giáp Biển Đông rộng lớn.<br>
          • <strong>Tọa độ 4 điểm cực phần đất liền:</strong>
            <br>&nbsp;&nbsp;- <em>Cực Bắc:</em> $23^\circ 23'\text{B}$ tại xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang.
            <br>&nbsp;&nbsp;- <em>Cực Nam:</em> $8^\circ 34'\text{B}$ tại xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau.
            <br>&nbsp;&nbsp;- <em>Cực Tây:</em> $102^\circ 09'\text{Đ}$ tại xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên.
            <br>&nbsp;&nbsp;- <em>Cực Đông:</em> $109^\circ 28'\text{Đ}$ tại Mũi Đôi, xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa.<br>
          • Kinh tuyến $105^\circ\text{Đ}$ chạy qua lãnh thổ $\rightarrow$ Nước ta nằm trọn trong <strong>múi giờ thứ 7 (GMT+7)</strong>.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-globe text-teal-500"></i> II. Phạm vi lãnh thổ & Ý nghĩa chiến lược
          </h5>
          <p>• <strong>Phạm vi lãnh thổ:</strong> Gồm 3 bộ phận hợp thành:
            <br>&nbsp;&nbsp;1. <em>Vùng đất:</em> Diện tích đất liền và hải đảo khoảng $331.000\text{ km}^2$. Đường biên giới trên đất liền dài hơn $4.600\text{ km}$ (giáp Trung Quốc, Lào, Campuchia). Đường bờ biển dài $3.260\text{ km}$ uốn lượn hình chữ S.
            <br>&nbsp;&nbsp;2. <em>Vùng biển:</em> Thuộc Biển Đông, diện tích khoảng 1 triệu $\text{km}^2$ với hàng nghìn hòn đảo lớn nhỏ và hai quần đảo thiêng liêng Hoàng Sa, Trường Sa.
            <br>&nbsp;&nbsp;3. <em>Vùng trời:</em> Khoảng không gian bao trùm lên vùng đất và vùng biển quốc gia.<br>
          • <strong>Ý nghĩa tự nhiên & kinh tế:</strong> Nằm trong vành đai sinh khoáng Thái Bình Dương và luồng di cư sinh vật $\rightarrow$ Thiên nhiên nhiệt đới ẩm gió mùa xanh tốt bốn mùa, tài nguyên khoáng sản và sinh vật phong phú; cửa ngõ giao thương hàng hải quốc tế thuận lợi; tuy nhiên phải đối mặt với nhiều thiên tai bão lũ, áp thấp nhiệt đới và thách thức an ninh biển đảo.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-compass-drafting"></i> Phân tích 5 bước hiện tượng địa lí: Vị trí địa lí Việt Nam
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          1. <em>Vị trí:</em> $8^\circ 34'\text{B} \rightarrow 23^\circ 23'\text{B}$, nội chí tuyến Đông Nam Á.<br>
          2. <em>Đặc điểm:</em> Khí hậu không bị khô hạn hoang mạc hóa như Tây Á, Bắc Phi cùng vĩ độ.<br>
          3. <em>Giải thích:</em> Nhờ tiếp giáp Biển Đông rộng lớn và gió mùa châu Á mang ẩm dồi dào.<br>
          4. <em>Tác động:</em> Cây cối xanh tốt quanh năm, phát triển nông nghiệp nhiệt đới, kinh tế biển.<br>
          5. <em>Giải pháp:</em> Xây dựng hệ thống dự báo bão sớm, ứng phó biến đổi khí hậu và bảo vệ an ninh chủ quyền.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn tọa độ cực Đông với cực Nam. Điểm cực Đông (109°28'Đ) nằm tại Mũi Đôi (Khánh Hòa), là nơi đón ánh mặt trời sớm nhất trên đất liền Việt Nam.",
    quiz: {
      q: "Điểm cực Bắc trên phần đất liền của nước ta thuộc địa phận hành chính của tỉnh nào?",
      options: [
        "Tỉnh Cao Bằng",
        "Tỉnh Lạng Sơn",
        "Tỉnh Hà Giang",
        "Tỉnh Lào Cai"
      ],
      ans: 2,
      expl: "Điểm cực Bắc phần đất liền Việt Nam ở vĩ độ 23°23'B tại xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang."
    }
  },
  {
    id: "dl-2",
    unitNumber: 21,
    type: "geography",
    chapter: "Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
    title: "Bài 2. Địa hình Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Trình bày 4 đặc điểm chung của địa hình Việt Nam (đồi núi chiếm 3/4 diện tích, cấu trúc phân bậc, hai hướng chính Tây Bắc - Đông Nam và vòng cung, chịu tác động của khí hậu nhiệt đới ẩm gió mùa và con người); đặc điểm các khu vực địa hình.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">CẤU TRÚC ĐỊA HÌNH VIỆT NAM</text>

      <!-- 3/4 Mountains & 1/4 Plains -->
      <rect x="40" y="58" width="150" height="52" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="115" y="74" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">3/4 ĐỒI NÚI (CHỦ YẾU NÚI THẤP)</text>
      <text x="115" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Địa hình dưới 1000m chiếm 85%</text>
      <text x="115" y="99" fill="#94a3b8" font-size="7" text-anchor="middle">Núi cao trên 2000m chỉ chiếm 1%</text>

      <rect x="210" y="58" width="150" height="52" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="285" y="74" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">1/4 ĐỒNG BẰNG PHÙ SA</text>
      <text x="285" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Đồng bằng sông Hồng (~15.000 km²)</text>
      <text x="285" y="99" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Đồng bằng sông Cửu Long (~40.000 km²)</text>

      <!-- 2 Main directions -->
      <rect x="40" y="118" width="150" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="133" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">HƯỚNG TÂY BẮC - ĐÔNG NAM</text>
      <text x="115" y="146" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Vùng núi Tây Bắc, Trường Sơn Bắc</text>

      <rect x="210" y="118" width="150" height="42" rx="6" fill="#1e293b" stroke="#a855f7"/>
      <text x="285" y="133" fill="#d8b4fe" font-size="8.5" font-weight="bold" text-anchor="middle">HƯỚNG VÒNG CUNG</text>
      <text x="285" y="146" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Vùng núi Đông Bắc (4 cánh cung núi lớn)</text>

      <rect x="40" y="166" width="320" height="22" rx="4" fill="#047857"/>
      <text x="200" y="181" fill="#d1fae5" font-size="7.5" text-anchor="middle">Địa hình phân bậc rõ rệt: Núi cao $\rightarrow$ Đồi trung du $\rightarrow$ Đồng bằng $\rightarrow$ Thềm lục địa</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-mountain text-amber-500"></i> I. Bốn đặc điểm chung của địa hình Việt Nam
          </h5>
          <p>1. <strong>Đồi núi chiếm ưu thế (3/4 diện tích), nhưng chủ yếu là đồi núi thấp:</strong> Địa hình đồi núi chiếm $75\%$ lãnh thổ đất liền. Trong đó, đồi núi thấp dưới $1.000\text{ m}$ chiếm tới $85\%$; núi cao trên $2.000\text{ m}$ chỉ chiếm khoảng $1\%$ (đỉnh Fansipan cao $3.143\text{ m}$ là nóc nhà Đông Dương). Đồng bằng chỉ chiếm $1/4$ diện tích đất liền.<br>
          2. <strong>Cấu trúc địa hình cổ được trẻ lại và phân bậc rõ rệt:</strong> Vận động Tân kiến tạo nâng cao và trẻ lại các khối núi cổ, chia cắt tạo nên các bậc địa hình kế tiếp nhau thấp dần từ nội địa ra biển (núi cao $\rightarrow$ đồi trung du $\rightarrow$ đồng bằng $\rightarrow$ thềm lục địa).<br>
          3. <strong>Địa hình chạy theo hai hướng chính:</strong>
            <br>&nbsp;&nbsp;- <em>Hướng Tây Bắc - Đông Nam:</em> Thể hiện rõ ở vùng núi Tây Bắc (dãy Hoàng Liên Sơn) và vùng núi Trường Sơn Bắc.
            <br>&nbsp;&nbsp;- <em>Hướng vòng cung:</em> Thể hiện rõ ở vùng núi Đông Bắc (4 cánh cung lớn: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều) và vùng núi Trường Sơn Nam.<br>
          4. <strong>Địa hình mang tính chất nhiệt đới ẩm gió mùa:</strong> Quá trình xâm thực, xói mòn mạnh ở miền núi (địa hình karst đá vôi độc đáo, hang động ngầm kì vĩ như Phong Nha - Kẻ Bàng) và quá trình bồi tụ mở rộng nhanh ở các đồng bằng châu thổ.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-layer-group text-teal-500"></i> II. Các khu vực địa hình chính
          </h5>
          <p>• <strong>Khu vực Đồi núi:</strong> Gồm 4 vùng đặc trưng: Đông Bắc (núi thấp vòng cung), Tây Bắc (núi cao hiểm trở Tây Bắc - Đông Nam), Trường Sơn Bắc (dài hẹp, sườn dốc), Trường Sơn Nam (các cao nguyên badan xếp tầng màu mỡ: Pleiku, Đắk Lắk, Lâm Viên, Di Linh).<br>
          • <strong>Khu vực Đồng bằng:</strong> Gồm đồng bằng châu thổ sông Hồng (có hệ thống đê điều ngăn lũ dài hơn $2.700\text{ km}$ chia cắt thành các ô trũng), đồng bằng châu thổ sông Cửu Long (không có đê, mạng lưới kênh rạch chằng chịt, mùa lũ ngập lụt tự nhiên) và dải đồng bằng hẹp ven biển miền Trung (bị cát biển chia cắt thành nhiều đồng bằng nhỏ).<br>
          • <strong>Địa hình bờ biển & thềm lục địa:</strong> Bờ biển mài mòn (vách đá vịnh biển) và bờ biển bồi tụ (rừng ngập mặn, bãi triều rộng mở); thềm lục địa mở rộng ở Bắc Bộ và Nam Bộ, thu hẹp ở Trung Bộ.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-blue-50/70 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-1.5">
        <h6 class="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-code-compare"></i> So sánh địa hình vùng núi Đông Bắc & Tây Bắc
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          • <em>Đông Bắc:</em> Nằm ở tả ngạn sông Hồng; độ cao chủ yếu là núi thấp và đồi; hướng vòng cung với 4 cánh cung núi mở rộng về phía bắc tụ lại ở Tam Đảo, đón gió mùa Đông Bắc lạnh buốt.<br>
          • <em>Tây Bắc:</em> Nằm giữa sông Hồng và sông Cả; địa hình hiểm trở và cao nhất nước với dãy Hoàng Liên Sơn hùng vĩ hướng Tây Bắc - Đông Nam, chắn gió mùa đông.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn 4 cánh cung núi thuộc vùng núi Tây Bắc: 4 cánh cung Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều hoàn toàn thuộc vùng núi Đông Bắc.",
    quiz: {
      q: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc điểm chung của địa hình Việt Nam?",
      options: [
        "Đồi núi chiếm 3/4 diện tích lãnh thổ, nhưng chủ yếu là núi cao trên 2000m",
        "Địa hình được Tân kiến tạo nâng cao và phân bậc rõ rệt",
        "Có hai hướng chính là Tây Bắc - Đông Nam và vòng cung",
        "Địa hình chịu tác động mạnh mẽ của khí hậu nhiệt đới ẩm gió mùa và con người"
      ],
      ans: 0,
      expl: "Địa hình nước ta chủ yếu là đồi núi thấp (dưới 1000m chiếm tới 85%), còn núi cao trên 2000m chỉ chiếm khoảng 1% diện tích lãnh thổ."
    }
  },
  {
    id: "dl-3",
    unitNumber: 22,
    type: "geography",
    chapter: "Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
    title: "Bài 3. Khoáng sản Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Chứng minh tài nguyên khoáng sản nước ta phong phú về loại hình nhưng phần lớn có quy mô vừa và nhỏ; nêu sự phân bố các mỏ khoáng sản chiến lược (than, dầu khí, bô-xít, sắt, a-pa-tít); phân tích vấn đề khai thác hợp lí và bảo vệ tài nguyên.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">PHÂN BỐ CÁC MỎ KHOÁNG SẢN CHIẾN LƯỢC</text>

      <!-- Coal & Oil -->
      <rect x="40" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="73" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">THAN ĐÁ & NĂNG LƯỢNG</text>
      <text x="115" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Bể than Quảng Ninh (trữ lượng lớn nhất)</text>

      <rect x="210" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="73" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">DẦU MỎ & KHÍ TỰ NHIÊN</text>
      <text x="285" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Thềm lục địa Nam Bộ (Bạch Hổ, Lan Đỏ...)</text>

      <!-- Bauxite & Iron -->
      <rect x="40" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="115" y="121" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">BÔ-XÍT (NHÔM)</text>
      <text x="115" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Tây Nguyên (Đắk Nông, Lâm Đồng)</text>

      <rect x="210" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="285" y="121" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">A-PA-TÍT & SẮT</text>
      <text x="285" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Apatit Lào Cai • Quặng sắt Thái Nguyên</text>

      <!-- Sustainable bottom -->
      <rect x="40" y="154" width="320" height="32" rx="6" fill="#064e3b" stroke="#059669"/>
      <text x="200" y="174" fill="#a7f3d0" font-size="8" font-weight="bold" text-anchor="middle">YÊU CẦU: Khai thác tiết kiệm, chế biến sâu, bảo vệ môi trường sinh thái</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-gem text-amber-500"></i> I. Đặc điểm tài nguyên khoáng sản Việt Nam
          </h5>
          <p>• <strong>Đa dạng về chủng loại:</strong> Do vị trí nằm liền kề hai vành đai sinh khoáng lớn của thế giới (Địa Trung Hải và Thái Bình Dương) cùng lịch sử địa chất kiến tạo lâu dài phức tạp, nước ta có hơn 5.000 điểm quặng thuộc hơn 60 loại khoáng sản khác nhau.<br>
          • <strong>Quy mô trữ lượng:</strong> Phần lớn các mỏ có quy mô trữ lượng <em>vừa và nhỏ</em>. Chỉ có một số ít khoáng sản có trữ lượng lớn mang tầm chiến lược quốc gia:
            <br>&nbsp;&nbsp;- <em>Than đá:</em> Tập trung lớn nhất ở bể than Quảng Ninh (trữ lượng hàng tỉ tấn, chất lượng than antraxit cao cấp). Than nâu ở Đồng bằng sông Hồng.
            <br>&nbsp;&nbsp;- <em>Dầu mỏ và khí đốt:</em> Phân bố ở các bể trầm tích thềm lục địa phía Nam (Cửu Long, Nam Côn Sơn...).
            <br>&nbsp;&nbsp;- <em>Bô-xít (quặng nhôm):</em> Trữ lượng khổng lồ phân bố ở Tây Nguyên (Đắk Nông, Lâm Đồng, Gia Lai).
            <br>&nbsp;&nbsp;- <em>Sắt:</em> Quặng sắt Thạch Khê (Hà Tĩnh), Trại Cau (Thái Nguyên).
            <br>&nbsp;&nbsp;- <em>A-pa-tít:</em> Lào Cai (dùng làm nguyên liệu sản xuất phân lân).</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-recycle text-emerald-500"></i> II. Sử dụng hợp lí & Bảo vệ tài nguyên khoáng sản
          </h5>
          <p>• <strong>Thực trạng khai thác:</strong> Khoáng sản là tài nguyên <em>không thể phục hồi</em>. Việc khai thác bừa bãi bằng công nghệ lạc hậu đang gây cạn kiệt nguồn tài nguyên, sạt lở đất đá, ô nhiễm nguồn nước sông suối và hủy hoại cảnh quan rừng.<br>
          • <strong>Biện pháp quản lí bền vững:</strong>
            <br>&nbsp;&nbsp;1. Thực hiện nghiêm túc Luật Khoáng sản, xóa bỏ khai thác trái phép.
            <br>&nbsp;&nbsp;2. Đầu tư công nghệ tiên tiến để khai thác triệt để, tránh lãng phí tài nguyên.
            <br>&nbsp;&nbsp;3. Đẩy mạnh <strong>chế biến sâu</strong> thay vì xuất khẩu quặng thô giá trị thấp.
            <br>&nbsp;&nbsp;4. Phục hồi hoàn nguyên môi trường sau khi đóng cửa mỏ (trồng rừng, xử lí nước thải axit mỏ).</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
        <h6 class="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-magnifying-glass-chart"></i> Phân tích địa lí: Tác động môi trường của việc khai thác than Quảng Ninh
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Khai thác than lộ thiên tạo ra những bãi thải đá xỉ khổng lồ, khi mưa lũ dễ gây sạt lở bùn đất trôi xuống đe dọa khu dân cư; nước thải mỏ có độ pH thấp (axit) và bụi than làm ô nhiễm môi trường nước Vịnh Hạ Long, ảnh hưởng nghiêm trọng đến hệ sinh thái và du lịch biển.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn nơi phân bố của quặng bô-xít với quặng sắt. Bô-xít tập trung nhiều nhất ở các cao nguyên bazan Tây Nguyên, còn quặng sắt tập trung ở vùng núi Đông Bắc và Bắc Trung Bộ.",
    quiz: {
      q: "Khoáng sản năng lượng có trữ lượng lớn nhất và chất lượng cao nhất ở nước ta phân bố chủ yếu ở tỉnh nào?",
      options: [
        "Tỉnh Thái Nguyên",
        "Tỉnh Quảng Ninh",
        "Tỉnh Lào Cai",
        "Tỉnh Hà Tĩnh"
      ],
      ans: 1,
      expl: "Quảng Ninh là vùng có bể than đá antraxit lớn nhất và chất lượng tốt nhất nước ta, trữ lượng chiếm trên 90% cả nước."
    }
  },
  {
    id: "dl-4",
    unitNumber: 23,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 4. Khí hậu Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Chứng minh tính chất nhiệt đới ẩm gió mùa của khí hậu Việt Nam (nhiệt độ, lượng mưa, độ ẩm, hai mùa gió); giải thích sự phân hóa đa dạng của khí hậu theo không gian (Bắc - Nam, Đông - Tây, độ cao) và theo thời gian.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">HAI MÙA GIÓ ĐẶC TRƯNG CỦA KHÍ HẬU NƯỚC TA</text>

      <!-- Monsoon Winter -->
      <rect x="40" y="58" width="150" height="75" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="74" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">GIÓ MÙA ĐÔNG BẮC</text>
      <text x="115" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• Thời gian: Tháng 11 đến tháng 4</text>
      <text x="115" y="99" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Đầu đông: Lạnh khô</text>
      <text x="115" y="110" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Cuối đông: Lạnh ẩm, mưa phùn</text>
      <text x="115" y="124" fill="#93c5fd" font-size="7" font-weight="bold" text-anchor="middle">Tạo nên mùa đông lạnh ở miền Bắc</text>

      <!-- Monsoon Summer -->
      <rect x="210" y="58" width="150" height="75" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="285" y="74" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">GIÓ MÙA TÂY NAM</text>
      <text x="285" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• Thời gian: Tháng 5 đến tháng 10</text>
      <text x="285" y="99" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Nóng ẩm, mưa lớn trên cả nước</text>
      <text x="285" y="110" fill="#fed7aa" font-size="7.5" text-anchor="middle">• Gây hiệu ứng phơn (Gió Lào khô nóng)</text>
      <text x="285" y="124" fill="#fca5a5" font-size="7" font-weight="bold" text-anchor="middle">tại Bắc Trung Bộ & Tây Bắc</text>

      <!-- Stats bar -->
      <rect x="40" y="142" width="320" height="42" rx="6" fill="#1e3a8a" stroke="#2563eb"/>
      <text x="200" y="159" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Nhiệt độ TB năm &gt; 20°C • Số giờ nắng 1.400 - 3.000 giờ/năm</text>
      <text x="200" y="173" fill="#93c5fd" font-size="7.5" text-anchor="middle">Lượng mưa lớn: 1.500 - 2.000 mm/năm • Độ ẩm không khí &gt; 80%</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cloud-sun-rain text-sky-500"></i> I. Tính chất nhiệt đới ẩm gió mùa
          </h5>
          <p>• <strong>Tính chất nhiệt đới:</strong> Nhiệt độ trung bình năm trên cả nước đều vượt $20^\circ\text{C}$ (trừ vùng núi cao), tăng dần từ Bắc vào Nam. Số giờ nắng đạt từ $1.400 - 3.000\text{ giờ/năm}$, cán cân bức xạ luôn dương quanh năm.<br>
          • <strong>Tính chất ẩm:</strong> Lượng mưa trung bình năm rất lớn từ $1.500 - 2.000\text{ mm/năm}$, những nơi sườn đón gió lượng mưa có thể lên tới $3.000 - 4.000\text{ mm}$ (Bạch Mã, Huế; Sa Pa; Móng Cái). Độ ẩm tương đối của không khí luôn cao trên $80\%$.<br>
          • <strong>Tính chất gió mùa:</strong> Hoạt động của hai luồng gió mùa thổi theo mùa đối lập:
            <br>&nbsp;&nbsp;- <em>Gió mùa mùa đông (tháng 11 - 4):</em> Hướng Đông Bắc xuất phát từ áp cao Xi-bia. Nửa đầu mùa gây thời tiết lạnh khô, nửa sau mùa lệch qua biển gây thời tiết lạnh ẩm kèm mưa phùn ở Bắc Bộ và Bắc Trung Bộ. Dãy Bạch Mã ($16^\circ\text{B}$) là ranh giới ngăn chặn gió mùa Đông Bắc tràn sâu vào phương Nam.
            <br>&nbsp;&nbsp;- <em>Gió mùa mùa hạ (tháng 5 - 10):</em> Thổi từ vịnh Bengan và áp cao Nam bán cầu lên theo hướng Tây Nam, mang theo khối khí ẩm gây mưa lớn cho Nam Bộ và Tây Nguyên. Khi vượt qua dãy Trường Sơn, khối khí bị biến tính trở nên khô nóng khốc liệt ở đồng bằng ven biển miền Trung (hiện tượng gió phơn Tây Nam hay "Gió Lào").</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-arrows-split-up-and-left text-teal-500"></i> II. Sự phân hóa sâu sắc của khí hậu Việt Nam
          </h5>
          <p>• <strong>Phân hóa Bắc - Nam:</strong>
            <br>&nbsp;&nbsp;- <em>Miền khí hậu phía Bắc (từ đèo Hải Vân trở ra):</em> Có mùa đông lạnh (2 - 3 tháng nhiệt độ dưới $18^\circ\text{C}$), biên độ nhiệt năm lớn ($9 - 12^\circ\text{C}$).
            <br>&nbsp;&nbsp;- <em>Miền khí hậu phía Nam (từ đèo Hải Vân trở vào):</em> Khí hậu cận xích đạo gió mùa, nóng quanh năm (nhiệt độ trung bình trên $25^\circ\text{C}$), phân thành hai mùa mưa - khô sâu sắc, biên độ nhiệt năm rất nhỏ ($3 - 4^\circ\text{C}$).<br>
          • <strong>Phân hóa theo độ cao:</strong> 3 đai cao khí hậu: Đai nhiệt đới gió mùa chân núi $\rightarrow$ Đai cận nhiệt đới gió mùa trên núi (trồng chè, rau ôn đới) $\rightarrow$ Đai ôn đới gió mùa trên núi (độ cao trên $2.600\text{ m}$ quanh năm lạnh giá).</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1.5">
        <h6 class="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-wind"></i> Giải thích cơ chế hình thành Gió phơn Tây Nam (Gió Lào)
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Gió Tây Nam từ biển thổi vào sườn tây dãy Trường Sơn (phía Lào) bốc lên cao gặp lạnh ngưng tụ gây mưa lớn. Khi vượt qua đỉnh núi sang sườn đông (miền Trung Việt Nam), không khí đã mất hết hơi ẩm và lao xuống thấp theo định luật đoạn nhiệt khô (cứ xuống $100\text{ m}$ nhiệt độ tăng thêm $1^\circ\text{C}$) trở nên cực kì khô và nóng thiêu đốt.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn ranh giới tự nhiên ngăn chặn gió mùa Đông Bắc: Dãy Bạch Mã (vĩ tuyến 16°B, giữa Thừa Thiên Huế và Đà Nẵng) là bức tường tự nhiên chặn đứng gió mùa Đông Bắc, khiến miền Nam không có mùa đông lạnh.",
    quiz: {
      q: "Dãy núi nào được coi là ranh giới tự nhiên ngăn chặn ảnh hưởng của gió mùa Đông Bắc xuống phía Nam nước ta?",
      options: [
        "Dãy Hoàng Liên Sơn",
        "Dãy Hoành Sơn",
        "Dãy Bạch Mã",
        "Dãy Trường Sơn Nam"
      ],
      ans: 2,
      expl: "Dãy Bạch Mã chạy đâm ngang ra biển tại vĩ độ 16°B là ranh giới tự nhiên ngăn luồng gió mùa Đông Bắc, làm cho miền Nam nước ta có nền nhiệt cao quanh năm và không có mùa đông lạnh."
    }
  },
  {
    id: "dl-5",
    unitNumber: 24,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 5. Thực hành: Đọc biểu đồ khí hậu",
    badge: "Kĩ năng Địa lí 8",
    objective: "Nắm vững quy trình 5 bước đọc và phân tích biểu đồ nhiệt độ - lượng mưa của một trạm khí tượng; tính toán biên độ nhiệt năm, tổng lượng mưa năm; xác định mùa mưa, mùa khô và rút ra nhận xét kiểu khí hậu.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">5 BƯỚC ĐỌC BIỂU ĐỒ NHIỆT ĐỘ - LƯỢNG MƯA</text>

      <!-- Step 1 & 2 -->
      <rect x="40" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="73" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">BƯỚC 1: ĐỌC TIÊU ĐỀ & TRỤC</text>
      <text x="115" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Trục trái: Nhiệt độ (°C) • Phải: Mưa (mm)</text>

      <rect x="210" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="73" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">BƯỚC 2: PHÂN TÍCH NHIỆT ĐỘ</text>
      <text x="285" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Đường biểu diễn: Tmax, Tmin, Biên độ</text>

      <!-- Step 3 & 4 -->
      <rect x="40" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="115" y="121" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">BƯỚC 3: PHÂN TÍCH LƯỢNG MƯA</text>
      <text x="115" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Cột màu xanh: Tổng mưa, mùa mưa - khô</text>

      <rect x="210" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="285" y="121" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">BƯỚC 4: TÍNH MÙA & TƯƠNG QUAN</text>
      <text x="285" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Liên hệ nhiệt độ với các tháng mưa lớn</text>

      <!-- Step 5 -->
      <rect x="40" y="154" width="320" height="32" rx="6" fill="#1e3a8a" stroke="#2563eb"/>
      <text x="200" y="174" fill="#dbeafe" font-size="8" font-weight="bold" text-anchor="middle">BƯỚC 5: KẾT LUẬN KIỂU KHÍ HẬU VÀ ĐẶC TRƯNG ĐỊA PHƯƠNG</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-chart-column text-sky-500"></i> I. Công thức & Quy tắc xử lí số liệu khí hậu
          </h5>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Nhiệt độ trung bình năm:</strong> Bằng tổng nhiệt độ 12 tháng chia cho 12 ($^\circ\text{C}$).</li>
            <li><strong>Biên độ nhiệt năm:</strong> Bằng nhiệt độ tháng cao nhất trừ đi nhiệt độ tháng thấp nhất:
              <br>$$\Delta T = T_{\max} - T_{\min}$$
            </li>
            <li><strong>Tổng lượng mưa năm:</strong> Bằng tổng lượng mưa của cả 12 tháng cộng lại ($\text{mm}$):
              <br>$$\sum R = R_1 + R_2 + \dots + R_{12}$$
            </li>
            <li><strong>Quy ước mùa mưa - mùa khô:</strong> Những tháng có lượng mưa $\ge 100\text{ mm}$ được xếp vào mùa mưa; các tháng có lượng mưa $< 100\text{ mm}$ xếp vào mùa khô.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-teal-500"></i> II. So sánh đặc trưng 3 trạm tiêu biểu (Hà Nội, Huế, TP. Hồ Chí Minh)
          </h5>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-300 dark:border-slate-600 font-bold text-teal-900 dark:text-teal-300">
                  <th class="py-1 px-2">Chỉ số</th>
                  <th class="py-1 px-2">Trạm Hà Nội</th>
                  <th class="py-1 px-2">Trạm Huế</th>
                  <th class="py-1 px-2">Trạm TP. Hồ Chí Minh</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td class="py-1 px-2 font-medium">Nhiệt độ TB năm</td>
                  <td class="py-1 px-2">$\sim 23,9^\circ\text{C}$</td>
                  <td class="py-1 px-2">$\sim 25,2^\circ\text{C}$</td>
                  <td class="py-1 px-2">$\sim 27,5^\circ\text{C}$ (rất cao)</td>
                </tr>
                <tr>
                  <td class="py-1 px-2 font-medium">Biên độ nhiệt năm</td>
                  <td class="py-1 px-2">$12,5^\circ\text{C}$ (rất lớn)</td>
                  <td class="py-1 px-2">$9,2^\circ\text{C}$</td>
                  <td class="py-1 px-2">$3,2^\circ\text{C}$ (rất nhỏ)</td>
                </tr>
                <tr>
                  <td class="py-1 px-2 font-medium">Tổng lượng mưa</td>
                  <td class="py-1 px-2">$\sim 1.670\text{ mm}$</td>
                  <td class="py-1 px-2">$\sim 2.890\text{ mm}$ (cực lớn)</td>
                  <td class="py-1 px-2">$\sim 1.930\text{ mm}$</td>
                </tr>
                <tr>
                  <td class="py-1 px-2 font-medium">Đặc điểm mùa mưa</td>
                  <td class="py-1 px-2">Tháng 5 - 10 (mùa hạ)</td>
                  <td class="py-1 px-2">Tháng 9 - 12 (thu đông)</td>
                  <td class="py-1 px-2">Tháng 5 - 11 (mùa hạ)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-umbrella"></i> Vì sao mùa mưa ở Huế lại lệch hẳn về các tháng thu đông (tháng 9 đến 12)?
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Vào mùa thu đông, dải hội tụ nhiệt đới lùi dần về phía nam kết hợp với hoạt động của bão trên Biển Đông và gió mùa Đông Bắc thổi qua vịnh Bắc Bộ mang ẩm gặp bức tường dãy Bạch Mã chắn lại tạo ra lượng mưa cực đại trút xuống Huế và ven biển miền Trung.
        </p>
      </div>
    `,
    commonMistakes: "Tránh đọc nhầm đơn vị giữa hai trục tung: Trục bên trái thường là đơn vị độ C (°C) dành cho đường biểu diễn nhiệt độ; trục bên phải là đơn vị milimet (mm) dành cho các cột lượng mưa.",
    quiz: {
      q: "Tại trạm khí tượng Hà Nội, tháng có nhiệt độ thấp nhất là tháng 1 (16,4°C) và tháng cao nhất là tháng 6 (28,9°C). Biên độ nhiệt năm tại Hà Nội là bao nhiêu?",
      options: [
        "12,5°C",
        "10,5°C",
        "14,2°C",
        "8,4°C"
      ],
      ans: 0,
      expl: "Biên độ nhiệt năm = Tmax - Tmin = 28,9°C - 16,4°C = 12,5°C."
    }
  },
  {
    id: "dl-6",
    unitNumber: 25,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 6. Thủy văn Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu 4 đặc điểm chung của sông ngòi Việt Nam; so sánh chế độ dòng chảy của ba hệ thống sông lớn: sông Hồng, sông Cửu Long và sông ngòi miền Trung; vai trò của hồ đầm và nước ngầm.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">4 ĐẶC ĐIỂM CHUNG CỦA SÔNG NGÒI VIỆT NAM</text>

      <!-- 4 river traits -->
      <rect x="40" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="73" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">1. MẠNG LƯỚI DÀY ĐẶC</text>
      <text x="115" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">2.360 con sông dài trên 10km</text>

      <rect x="210" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="73" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">2. CHỦ YẾU SÔNG NGẮN, DỐC</text>
      <text x="285" y="86" fill="#e2e8f0" font-size="7.5" text-anchor="middle">93% là sông nhỏ diện tích &lt; 500 km²</text>

      <rect x="40" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="115" y="121" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">3. CHẾ ĐỘ NƯỚC THEO MÙA</text>
      <text x="115" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Mùa lũ chiếm 70-80% lượng nước năm</text>

      <rect x="210" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="285" y="121" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">4. HÀM LƯỢNG PHÙ SA LỚN</text>
      <text x="285" y="134" fill="#e2e8f0" font-size="7.5" text-anchor="middle">226 triệu tấn phù sa mỗi năm</text>

      <rect x="40" y="154" width="320" height="32" rx="6" fill="#1e3a8a" stroke="#2563eb"/>
      <text x="200" y="174" fill="#dbeafe" font-size="8" font-weight="bold" text-anchor="middle">Hai hệ thống sông lớn nhất cả nước: Sông Hồng & Sông Cửu Long (Mê Kông)</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-water text-sky-500"></i> I. Bốn đặc điểm cốt lõi của mạng lưới sông ngòi
          </h5>
          <p>1. <strong>Mạng lưới sông ngòi dày đặc:</strong> Nước ta có tới $2.360$ con sông dài từ $10\text{ km}$ trở lên. Dọc bờ biển cứ khoảng $20\text{ km}$ lại có một cửa sông đổ ra biển.<br>
          2. <strong>Sông ngòi chảy theo hai hướng chính:</strong> Hướng Tây Bắc - Đông Nam (sông Hồng, sông Đà, sông Tiền, sông Hậu) và hướng vòng cung (sông Lô, sông Gâm, sông Cầu).<br>
          3. <strong>Sông có chế độ nước theo mùa:</strong> Nhịp điệu dòng chảy gắn chặt với nhịp điệu mưa. Mùa lũ trùng với mùa mưa (chiếm tới $70 - 80\%$ tổng lượng nước cả năm), mùa cạn trùng với mùa khô (lưu lượng nước chỉ chiếm $20 - 30\%$).<br>
          4. <strong>Lượng nước dồi dào, giàu phù sa:</strong> Tổng lượng nước mặt lên tới $839\text{ tỉ m}^3/\text{năm}$ (trong đó hơn $60\%$ bắt nguồn từ ngoài lãnh thổ). Hằng năm sông ngòi vận chuyển khoảng <strong>226 triệu tấn phù sa</strong>, bồi tụ nên các đồng bằng màu mỡ và mở rộng các bãi bồi ven biển.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-code-branch text-teal-500"></i> II. So sánh 3 hệ thống sông lớn
          </h5>
          <p>• <strong>Hệ thống sông Hồng:</strong> Mạng lưới dạng nan quạt hội tụ tại Việt Trì (sông Thao, sông Đà, sông Lô) $\rightarrow$ Lũ lên rất nhanh, đỉnh lũ cao và bất thường, kéo dài từ tháng 6 đến tháng 10.<br>
          • <strong>Hệ thống sông Cửu Long:</strong> Mạng lưới dạng lông chim, phân thành 9 nhánh đổ ra biển qua hai dòng chính sông Tiền và sông Hậu. Có Biển Hồ (Campuchia) điều tiết nước và mạng lưới kênh rạch dày $\rightarrow$ Lũ lên chậm, rút chậm, hiền hòa, đem lại nguồn lợi thủy sản tôm cá và phù sa dồi dào.<br>
          • <strong>Sông ngòi miền Trung:</strong> Địa hình hẹp ngang sườn dốc $\rightarrow$ Sông ngắn, lưu vực nhỏ, lũ lên rất nhanh đột ngột và rút nhanh, dễ gây chia cắt cục bộ.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
        <h6 class="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-shield-halved"></i> Vai trò của hệ thống đê sông Hồng trong lịch sử văn minh Đại Việt
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Do đặc điểm sông Hồng có lũ dồn đột ngột biên độ hàng chục mét, tổ tiên ta từ thời nhà Lý (năm 1108 đắp đê Cơ Xá) đã liên tục quai đê hộ đê. Hệ thống đê điều dài hơn 2.700 km ngày nay đã bảo vệ tính mạng và sinh kế của hàng chục triệu người dân Đồng bằng Bắc Bộ suốt cả ngàn năm.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm sông ngòi nước ta phần lớn lượng nước sinh ra trong nước. Thực chất hơn 60% tổng lượng dòng chảy sông ngòi nước ta bắt nguồn từ lãnh thổ các nước láng giềng (Trung Quốc, Lào, Campuchia) chảy vào.",
    quiz: {
      q: "Đặc điểm chế độ nước của hệ thống sông Cửu Long có điểm gì khác biệt nổi bật so với hệ thống sông Hồng?",
      options: [
        "Lũ lên rất nhanh, đột ngột do hình dạng nan quạt",
        "Lũ lên chậm, rút chậm và được Biển Hồ điều tiết",
        "Mùa lũ diễn ra vào các tháng mùa đông",
        "Không có phù sa bồi đắp hằng năm"
      ],
      ans: 1,
      expl: "Nhờ Biển Hồ (Campuchia) đóng vai trò hồ điều hòa tự nhiên khổng lồ và mạng kênh rạch dày đặc, nước lũ sông Cửu Long lên từ từ và rút từ từ, người dân Nam Bộ quen gọi là 'mùa nước nổi'."
    }
  },
  {
    id: "dl-7",
    unitNumber: 26,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 7. Vai trò của tài nguyên khí hậu và tài nguyên nước đối với phát triển kinh tế – xã hội",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Phân tích giá trị và thuận lợi của tài nguyên khí hậu và tài nguyên nước đối với nông nghiệp, du lịch, công nghiệp năng lượng; các giải pháp sử dụng tổng hợp và bảo vệ bền vững lưu vực sông.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">GIÁ TRỊ KINH TẾ CỦA KHÍ HẬU VÀ NGUỒN NƯỚC</text>

      <!-- Agriculture -->
      <rect x="40" y="58" width="150" height="52" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="115" y="74" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">NÔNG NGHIỆP SINH THÁI</text>
      <text x="115" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Trồng trọt quanh năm, đa vụ, gối vụ</text>
      <text x="115" y="99" fill="#a7f3d0" font-size="7" text-anchor="middle">Cơ cấu cây trồng: Nhiệt đới + Á nhiệt đới</text>

      <!-- Energy & Tourism -->
      <rect x="210" y="58" width="150" height="52" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="74" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">NĂNG LƯỢNG & DU LỊCH</text>
      <text x="285" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Thủy điện (Sơn La, Hòa Bình...)</text>
      <text x="285" y="99" fill="#fde68a" font-size="7" text-anchor="middle">Điện gió, điện mặt trời, du lịch nghỉ dưỡng</text>

      <!-- Solutions -->
      <rect x="40" y="122" width="320" height="58" rx="8" fill="#064e3b" stroke="#34d399"/>
      <text x="200" y="140" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">GIẢI PHÁP SỬ DỤNG TỔNG HỢP & BẢO VỆ LƯU VỰC SÔNG</text>
      <text x="200" y="155" fill="#d1fae5" font-size="7.5" text-anchor="middle">• Xây dựng hồ chứa đa mục tiêu (cắt lũ, phát điện, cấp nước tưới, nuôi thủy sản)</text>
      <text x="200" y="168" fill="#d1fae5" font-size="7.5" text-anchor="middle">• Bảo vệ nghiêm ngặt rừng phòng hộ đầu nguồn, kiểm soát xả thải công nghiệp</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-wheat-awn text-teal-500"></i> I. Vai trò đối với phát triển kinh tế
          </h5>
          <p>• <strong>Đối với nông nghiệp:</strong> Khí hậu nhiệt đới ẩm cho phép cây trồng sinh trưởng quanh năm, thâm canh tăng vụ (2 - 3 vụ lúa/năm). Sự phân hóa khí hậu đa dạng tạo điều kiện phát triển cơ cấu cây trồng phong phú: cây nhiệt đới (lúa, cà phê, cao su, sầu riêng), cây cận nhiệt đới và ôn đới (chè, rau củ quả ôn đới ở Sa Pa, Đà Lạt).<br>
          • <strong>Đối với công nghiệp & năng lượng:</strong> Mạng lưới sông dốc cung cấp tiềm năng thủy điện khổng lồ (thủy điện Sơn La, Hòa Bình trên sông Đà; Trị An trên sông Đồng Nai). Tiềm năng năng lượng tái tạo dồi dào: năng lượng mặt trời (Nam Trung Bộ, Tây Nguyên) và năng lượng gió ven biển.<br>
          • <strong>Đối với du lịch:</strong> Khí hậu phân hóa tạo nên các điểm du lịch nghỉ dưỡng lí tưởng bốn mùa (Sa Pa, Tam Đảo, Bà Nà, Đà Lạt) và các bãi biển du lịch tắm biển quanh năm ở miền Trung và miền Nam.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-faucet-drip text-sky-500"></i> II. Sự cần thiết phải sử dụng tổng hợp lưu vực sông
          </h5>
          <p>• <strong>Khái niệm sử dụng tổng hợp:</strong> Là việc khai thác cùng lúc nhiều mục tiêu trên một dòng sông hoặc hồ chứa: vừa phát điện, vừa cắt lũ trong mùa mưa, xả nước chống hạn mặn trong mùa khô cho hạ du, nuôi trồng thủy sản, giao thông thủy và du lịch sinh thái.<br>
          • <strong>Lợi ích:</strong> Mang lại hiệu quả kinh tế cao nhất, hạn chế lãng phí tài nguyên nước, bảo đảm an ninh nguồn nước quốc gia và cân bằng hệ sinh thái lưu vực sông.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-blue-50/70 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-1.5">
        <h6 class="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-droplet"></i> Ví dụ điển hình: Hồ Thác Bà và Hồ Dầu Tiếng
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Hồ Dầu Tiếng (sông Sài Gòn, Tây Ninh) là hồ thủy nông nhân tạo lớn nhất Đông Nam Á, cung cấp nước tưới cho hơn 100.000 ha đất nông nghiệp Tây Ninh, Bình Dương, đồng thời đẩy mặn cho sông Sài Gòn và cấp nước sinh hoạt cho hàng triệu dân TP. Hồ Chí Minh.
        </p>
      </div>
    `,
    commonMistakes: "Tránh cho rằng việc khai thác thủy điện chỉ có lợi mà không có hại. Nếu xây dựng tràn lan không kiểm soát sẽ gây mất diện tích rừng đầu nguồn, làm gia tăng nguy cơ sạt lở đất và thay đổi dòng chảy hạ du trong mùa khô.",
    quiz: {
      q: "Mục đích quan trọng nhất của việc sử dụng tổng hợp tài nguyên nước ở một lưu vực sông là gì?",
      options: [
        "Chỉ nhằm mục tiêu duy nhất là tối đa hóa sản lượng điện thương phẩm",
        "Đem lại hiệu quả kinh tế cao nhất, sử dụng tiết kiệm và bảo vệ bền vững môi trường nước",
        "Ngăn chặn hoàn toàn không cho nước sông đổ ra biển",
        "Biến toàn bộ lưu vực sông thành khu công nghiệp hóa chất"
      ],
      ans: 1,
      expl: "Sử dụng tổng hợp nước nhằm kết hợp hài hòa các lợi ích kinh tế (thủy điện, tưới tiêu, cấp nước, thủy sản) với việc bảo vệ tài nguyên môi trường và phòng chống thiên tai."
    }
  },
  {
    id: "dl-8",
    unitNumber: 27,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 8. Tác động của biến đổi khí hậu đối với tự nhiên Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu các biểu hiện của biến đổi khí hậu ở Việt Nam (nhiệt độ tăng, thời tiết cực đoan, nước biển dâng); phân tích tác động tiêu cực đến khí hậu, nguồn nước, sinh vật và đất đai; phân biệt các nhóm giải pháp thích ứng và giảm nhẹ biến đổi khí hậu.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">BIẾN ĐỔI KHÍ HẬU VÀ GIẢI PHÁP ỨNG PHÓ</text>

      <!-- Manifestations -->
      <rect x="40" y="58" width="150" height="60" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="115" y="74" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">BIỂU HIỆN CỤ THỂ</text>
      <text x="115" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• Nhiệt độ TB tăng ~0,89°C (1958-2018)</text>
      <text x="115" y="99" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Thiên tai dị thường (bão mạnh, hạn hán)</text>
      <text x="115" y="110" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Mực nước biển dâng cao (~3mm/năm)</text>

      <!-- Vulnerable areas -->
      <rect x="210" y="58" width="150" height="60" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="74" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">VÙNG DỄ TỔN THƯƠNG NHẤT</text>
      <text x="285" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• ĐBSCL: Xâm nhập mặn, sụt lún</text>
      <text x="285" y="99" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Vùng ven biển: Triều cường ngập úng</text>
      <text x="285" y="110" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Miền núi: Lũ quét, sạt lở đất nghiêm trọng</text>

      <!-- Two Solution pillars -->
      <rect x="40" y="128" width="150" height="52" rx="6" fill="#047857" stroke="#10b981"/>
      <text x="115" y="145" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">1. THÍCH ỨNG (ADAPTATION)</text>
      <text x="115" y="160" fill="#ffffff" font-size="7.5" text-anchor="middle">Chuyển đổi mùa vụ, giống chịu mặn</text>
      <text x="115" y="171" fill="#d1fae5" font-size="7" text-anchor="middle">Đê kè chắn sóng, nhà chống ngập</text>

      <rect x="210" y="128" width="150" height="52" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>
      <text x="285" y="145" fill="#93c5fd" font-size="8.5" font-weight="bold" text-anchor="middle">2. GIẢM NHẸ (MITIGATION)</text>
      <text x="285" y="160" fill="#ffffff" font-size="7.5" text-anchor="middle">Giảm phát thải khí nhà kính</text>
      <text x="285" y="171" fill="#bfdbfe" font-size="7" text-anchor="middle">Trồng rừng, dùng năng lượng sạch</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-temperature-arrow-up text-rose-500"></i> I. Biểu hiện & Tác động của Biến đổi khí hậu
          </h5>
          <p>• <strong>Biểu hiện chính:</strong>
            <br>&nbsp;&nbsp;- Nhiệt độ trung bình toàn quốc tăng khoảng $0,89^\circ\text{C}$ giai đoạn 1958 - 2018. Số đợt nắng nóng gay gắt tăng trên diện rộng.
            <br>&nbsp;&nbsp;- Lượng mưa biến động thất thường: mùa mưa mưa cực đoan gây ngập lụt, mùa khô hạn hán kéo dài. Bão mạnh, áp thấp nhiệt đới dị thường xuất hiện trái quy luật.
            <br>&nbsp;&nbsp;- <strong>Mực nước biển dâng:</strong> Trung bình ven biển Việt Nam dâng khoảng $3\text{ mm/năm}$. Nước ta là một trong 5 quốc gia chịu tổn thương nặng nề nhất thế giới do nước biển dâng.<br>
          • <strong>Tác động tới các thành phần tự nhiên:</strong>
            <br>&nbsp;&nbsp;- <em>Thủy văn:</em> Xâm nhập mặn sâu vào đất liền hàng chục km tại Đồng bằng sông Cửu Long, đe dọa nguồn nước ngọt sinh hoạt và tưới tiêu.
            <br>&nbsp;&nbsp;- <em>Đất đai:</em> Gây xói mòn sạt lở đồi núi phía Bắc, hoang mạc hóa đất đai ven biển Nam Trung Bộ, mặn hóa và phèn hóa đồng bằng châu thổ.
            <br>&nbsp;&nbsp;- <em>Sinh thái:</em> Thu hẹp diện tích rừng ngập mặn, tẩy trắng rạn san hô, làm mất nơi cư trú của nhiều loài động vật quý hiếm.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-leaf text-teal-500"></i> II. Phân biệt Giải pháp Thích ứng & Giảm nhẹ
          </h5>
          <p>• <strong>Giải pháp thích ứng (Sống chung an toàn với biến đổi khí hậu):</strong>
            <br>&nbsp;&nbsp;- Xây dựng các công trình cống ngăn mặn, đê biển kè sông, nhà phao chống lũ lụt.
            <br>&nbsp;&nbsp;- Thay đổi lịch thời vụ nông nghiệp, lai tạo giống cây trồng chịu hạn, chịu mặn (mô hình lúa - tôm ở ĐBSCL).
            <br>&nbsp;&nbsp;- Nâng cao năng lực dự báo khí tượng thủy văn sớm.<br>
          • <strong>Giải pháp giảm nhẹ (Tác động vào nguyên nhân gốc rễ):</strong>
            <br>&nbsp;&nbsp;- Cắt giảm phát thải khí nhà kính ($CO_2, CH_4$), cam kết Net Zero vào năm 2050.
            <br>&nbsp;&nbsp;- Trồng rừng phòng hộ và phục hồi rừng ngập mặn (bể chứa cac-bon tự nhiên).
            <br>&nbsp;&nbsp;- Chuyển đổi sang phương tiện giao thông điện và năng lượng tái tạo (gió, mặt trời).</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1.5">
        <h6 class="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-triangle-exclamation"></i> Phân biệt rõ "Thích ứng" và "Giảm nhẹ" biến đổi khí hậu
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          • <em>Thích ứng:</em> Là hành động điều chỉnh cuộc sống con người để thích nghi, hạn chế thiệt hại trước những tác động tiêu cực của BĐKH (Ví dụ: đắp đê ngăn mặn, chuyển đổi cây trồng).<br>
          • <em>Giảm nhẹ:</em> Là hành động cắt giảm lượng khí nhà kính xả vào bầu khí quyển để làm chậm lại đà nóng lên toàn cầu (Ví dụ: tắt bớt điện, trồng cây xanh, đi xe đạp/xe bus).
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm việc trồng rừng chỉ là giảm nhẹ. Thực tế trồng rừng ngập mặn vừa có tác dụng giảm nhẹ (hấp thụ khí CO2) vừa có tác dụng thích ứng (chắn sóng biển bảo vệ đê bờ biển).",
    quiz: {
      q: "Hành động nào sau đây thuộc nhóm giải pháp THÍCH ỨNG với biến đổi khí hậu tại Đồng bằng sông Cửu Long?",
      options: [
        "Cắt giảm lượng khí thải carbon của các nhà máy nhiệt điện than",
        "Chuyển đổi sang mô hình luân canh một vụ lúa - một vụ tôm tại vùng đất bị nhiễm mặn",
        "Sử dụng năng lượng điện mặt trời thay cho than đá",
        "Kí kết công ước cắt giảm khí nhà kính quốc tế"
      ],
      ans: 1,
      expl: "Chuyển đổi sang mô hình nuôi trồng thủy sản chịu mặn (lúa - tôm) là giải pháp thích ứng trực tiếp nhằm sống chung với hiện tượng xâm nhập mặn do biến đổi khí hậu."
    }
  },
  {
    id: "dl-9",
    unitNumber: 28,
    type: "geography",
    chapter: "Chương 3. Thổ nhưỡng và sinh vật Việt Nam",
    title: "Bài 9. Thổ nhưỡng Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Trình bày đặc điểm và sự phân bố của 3 nhóm đất chính (đất feralit, đất phù sa, đất mùn núi cao); phân tích nguyên nhân và các biện pháp chống thoái hóa đất ở nước ta.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">3 NHÓM ĐẤT CHÍNH Ở VIỆT NAM</text>

      <!-- Feralit -->
      <rect x="40" y="58" width="150" height="60" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="115" y="74" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">1. ĐẤT FERALIT (CHIẾM 65%)</text>
      <text x="115" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Phân bố ở đồi núi thấp</text>
      <text x="115" y="99" fill="#fca5a5" font-size="7.5" text-anchor="middle">Tốt nhất: Feralit trên đá badan (Tây Nguyên)</text>
      <text x="115" y="110" fill="#cbd5e1" font-size="7" text-anchor="middle">Trồng cây công nghiệp lâu năm</text>

      <!-- Alluvium -->
      <rect x="210" y="58" width="150" height="60" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="285" y="74" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">2. ĐẤT PHÙ SA (CHIẾM 24%)</text>
      <text x="285" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Phân bố ở các đồng bằng sông</text>
      <text x="285" y="99" fill="#a7f3d0" font-size="7.5" text-anchor="middle">Đất phù sa ngọt phì nhiêu màu mỡ</text>
      <text x="285" y="110" fill="#cbd5e1" font-size="7" text-anchor="middle">Trọng điểm trồng lúa nước & cây ngắn ngày</text>

      <!-- Mountain organic soil & Conservation -->
      <rect x="40" y="128" width="320" height="52" rx="8" fill="#451a03" stroke="#d97706"/>
      <text x="200" y="145" fill="#fef3c7" font-size="8.5" font-weight="bold" text-anchor="middle">3. ĐẤT MÙN NÚI CAO (11%) & BIỆN PHÁP BẢO VỆ CHỐNG THOÁI HÓA</text>
      <text x="200" y="159" fill="#fed7aa" font-size="7.5" text-anchor="middle">Ở độ cao trên 1600m khí hậu mát lạnh, nhiều mùn, thích hợp trồng rừng phòng hộ</text>
      <text x="200" y="171" fill="#fed7aa" font-size="7.5" text-anchor="middle">Biện pháp: Canh tác bậc thang, luân canh, trồng cây phủ đất, bón vôi khử chua, hạn chế hóa chất</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-amber-500"></i> I. Đặc điểm 3 nhóm đất chính
          </h5>
          <p>1. <strong>Nhóm đất feralit (chiếm $65\%$ diện tích đất tự nhiên):</strong>
            <br>&nbsp;&nbsp;- Hình thành ở vùng đồi núi thấp dưới $1.600\text{ m}$ trong điều kiện nhiệt ẩm cao phong hóa mạnh. Đất chua, tích lũy nhiều oxit sắt và oxit nhôm tạo màu đỏ vàng đặc trưng.
            <br>&nbsp;&nbsp;- <em>Đất feralit trên đá bazan và đá vôi:</em> Tầng đất dày, cấu trúc xốp, màu mỡ nhất (phân bố ở Tây Nguyên, Đông Nam Bộ) $\rightarrow$ Vùng chuyên canh cây công nghiệp lâu năm số 1 nước ta (cà phê, cao su, hồ tiêu, chè).<br>
          2. <strong>Nhóm đất phù sa (chiếm $24\%$ diện tích):</strong>
            <br>&nbsp;&nbsp;- Hình thành do phù sa sông biển bồi đắp tại Đồng bằng sông Hồng, Đồng bằng sông Cửu Long và dải ven biển miền Trung.
            <br>&nbsp;&nbsp;- Đất phù sa ngọt có độ phì nhiêu cao nhất, tơi xốp, giữ nước tốt $\rightarrow$ Địa bàn sản xuất lương thực lúa nước, rau màu và cây ăn quả lớn nhất cả nước. Một bộ phận đất bị phèn hóa và mặn hóa.<br>
          3. <strong>Nhóm đất mùn núi cao (chiếm $11\%$ diện tích):</strong>
            <br>&nbsp;&nbsp;- Phân bố ở vùng núi cao trên $1.600\text{ m}$. Do nhiệt độ thấp quá trình phân giải chất hữu cơ chậm nên tích lũy nhiều mùn $\rightarrow$ Thích hợp cho trồng rừng phòng hộ đầu nguồn.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-500"></i> II. Thực trạng thoái hóa đất & Biện pháp cải tạo
          </h5>
          <p>• <strong>Hiện tượng thoái hóa:</strong> Xói mòn rửa trôi trơ sỏi đá ở miền đồi núi dốc do nạn phá rừng; đất bạc màu kiệt quệ dinh dưỡng do lạm dụng phân bón hóa học; nhiễm mặn nhiễm phèn ở đồng bằng do hạn hán và nước biển dâng.<br>
          • <strong>Biện pháp canh tác bền vững:</strong>
            <br>&nbsp;&nbsp;- Miền núi: Trồng rừng giữ đất, làm ruộng bậc thang, đào rãnh theo đường đồng mức, trồng cây họ đậu xen kẽ.
            <br>&nbsp;&nbsp;- Đồng bằng: Bón vôi khử chua, thau chua rửa mặn, bón phân hữu cơ sinh học vi sinh thay thế hóa chất độc hại.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-mortar-pestle"></i> Cơ chế hình thành màu đỏ vàng của đất Feralit
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Trong môi trường nhiệt đới ẩm, mưa nhiều làm các chất kiềm và silic dễ tan bị rửa trôi mạnh; trong khi các hợp chất oxit sắt ($Fe_2O_3$) và oxit nhôm ($Al_2O_3$) khó tan tích tụ lại ở tầng mặt, tạo nên màu sắc đỏ gạch hoặc vàng cam đặc trưng cho đất feralit.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm đất feralit trên đá bazan và đất phù sa sông: Đất feralit bazan tập trung ở vùng đồi núi/cao nguyên thích hợp cây công nghiệp lâu năm, còn đất phù sa tập trung ở đồng bằng bằng phẳng thích hợp cây lúa nước ngắn ngày.",
    quiz: {
      q: "Loại đất nào chiếm diện tích lớn nhất (khoảng 65% diện tích đất tự nhiên) và là nền tảng phát triển cây công nghiệp lâu năm ở nước ta?",
      options: [
        "Đất phù sa ngọt",
        "Đất feralit đồi núi thấp",
        "Đất mùn núi cao",
        "Đất cát pha ven biển"
      ],
      ans: 1,
      expl: "Đất feralit chiếm tới 65% diện tích đất tự nhiên, phân bố phổ biến ở miền đồi núi thấp, đặc biệt là đất feralit trên đá bazan ở Tây Nguyên rất màu mỡ."
    }
  },
  {
    id: "dl-10",
    unitNumber: 29,
    type: "geography",
    chapter: "Chương 3. Thổ nhưỡng và sinh vật Việt Nam",
    title: "Bài 10. Sinh vật Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Chứng minh sự đa dạng sinh học cao của sinh vật Việt Nam (loài, nguồn gen, hệ sinh thái); phân tích nguyên nhân suy giảm và các biện pháp bảo tồn đa dạng sinh học.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">ĐA DẠNG SINH HỌC VIỆT NAM (TOP 16 THẾ GIỚI)</text>

      <!-- 3 aspects -->
      <rect x="40" y="58" width="100" height="60" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="90" y="74" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">ĐA DẠNG HỆ SINH THÁI</text>
      <text x="90" y="88" fill="#e2e8f0" font-size="7" text-anchor="middle">• Rừng nhiệt đới ẩm</text>
      <text x="90" y="99" fill="#e2e8f0" font-size="7" text-anchor="middle">• Rừng ngập mặn</text>
      <text x="90" y="110" fill="#a7f3d0" font-size="7" text-anchor="middle">• Rạn san hô biển</text>

      <rect x="150" y="58" width="100" height="60" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="200" y="74" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">ĐA DẠNG LOÀI</text>
      <text x="200" y="88" fill="#e2e8f0" font-size="7" text-anchor="middle">• &gt;14.000 loài thực vật</text>
      <text x="200" y="99" fill="#e2e8f0" font-size="7" text-anchor="middle">• &gt;11.000 loài động vật</text>
      <text x="200" y="110" fill="#93c5fd" font-size="7" text-anchor="middle">• Nhiều loài quý hiếm</text>

      <rect x="260" y="58" width="100" height="60" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="310" y="74" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">ĐA DẠNG GEN</text>
      <text x="310" y="88" fill="#e2e8f0" font-size="7" text-anchor="middle">• Nguồn giống lúa cổ</text>
      <text x="310" y="99" fill="#e2e8f0" font-size="7" text-anchor="middle">• Cây thuốc quý</text>
      <text x="310" y="110" fill="#fed7aa" font-size="7" text-anchor="middle">• Vật nuôi bản địa</text>

      <!-- Bottom: Conservation -->
      <rect x="40" y="128" width="320" height="52" rx="8" fill="#064e3b" stroke="#059669"/>
      <text x="200" y="145" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">BẢO TỒN: 34 VƯỜN QUỐC GIA & KHU DỰ TRỮ SINH QUYỂN</text>
      <text x="200" y="159" fill="#d1fae5" font-size="7.5" text-anchor="middle">Cúc Phương, Cát Tiên, Ba Bể, Tràm Chim, Phong Nha - Kẻ Bàng...</text>
      <text x="200" y="171" fill="#d1fae5" font-size="7.5" text-anchor="middle">Nghiêm cấm săn bắt, buôn bán động vật hoang dã trái phép trong Sách Đỏ</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-tree text-emerald-500"></i> I. Sự phong phú và đa dạng sinh học
          </h5>
          <p>• Việt Nam nằm trong danh sách 16 quốc gia có tính đa dạng sinh học cao nhất thế giới.<br>
          • <strong>Ba cấp độ đa dạng:</strong>
            <br>&nbsp;&nbsp;1. <em>Đa dạng hệ sinh thái:</em> Hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới, rừng rụng lá theo mùa, rừng trên núi đá vôi, rừng ngập mặn ven biển, các rạn san hô và thảm cỏ biển rực rỡ.
            <br>&nbsp;&nbsp;2. <em>Đa dạng thành phần loài:</em> Hơn $14.000$ loài thực vật, trên $11.000$ loài động vật trên cạn và hàng nghìn loài sinh vật biển. Có nhiều loài đặc hữu quý hiếm được ghi trong Sách Đỏ Việt Nam: sao la (kì lân châu Á), voọc mông trắng, voọc mũi hếch, trầm hương, sâm Ngọc Linh.
            <br>&nbsp;&nbsp;3. <em>Đa dạng nguồn gen:</em> Nguồn gen cây trồng và vật nuôi bản địa dồi dào, có khả năng chống chịu sâu bệnh và thời tiết khắc nghiệt.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shield-cat text-rose-500"></i> II. Vấn đề bảo tồn đa dạng sinh học
          </h5>
          <p>• <strong>Nguyên nhân suy giảm:</strong> Chặt phá rừng bừa bãi làm mất môi trường sống của sinh vật; săn bắt, buôn bán động vật hoang dã trái phép; ô nhiễm môi trường và biến đổi khí hậu.<br>
          • <strong>Biện pháp bảo tồn:</strong>
            <br>&nbsp;&nbsp;- Xây dựng hệ thống các vườn quốc gia và khu bảo tồn thiên nhiên (nước ta có 34 vườn quốc gia, 11 khu dự trữ sinh quyển thế giới được UNESCO công nhận).
            <br>&nbsp;&nbsp;- Ban hành và thực thi nghiêm ngặt <em>Luật Lâm nghiệp</em>, <em>Luật Bảo vệ Môi trường</em>.
            <br>&nbsp;&nbsp;- Thành lập các trung tâm cứu hộ động vật, ngân hàng gen và nâng cao ý thức cộng đồng.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-paw"></i> Ý nghĩa sinh thái của Vườn quốc gia Cúc Phương
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Cúc Phương (thành lập năm 1962) là vườn quốc gia đầu tiên của Việt Nam, lưu giữ hệ sinh thái rừng nhiệt đới trên núi đá vôi nguyên sinh đặc sắc với cây chò ngàn năm tuổi và loài voọc mông trắng quý hiếm bậc nhất thế giới.
        </p>
      </div>
    `,
    commonMistakes: "Tránh quan niệm bảo tồn đa dạng sinh học chỉ là việc cấm chặt cây rừng. Bảo tồn sinh thái là bảo vệ cả sinh cảnh sống tự nhiên, chuỗi thức ăn, nguồn gen và kiểm soát sự xâm lấn của các sinh vật ngoại lai gây hại (như ốc bươu vàng, rùa tai đỏ).",
    quiz: {
      q: "Vườn quốc gia đầu tiên được thành lập tại Việt Nam vào năm 1962 là vườn quốc gia nào?",
      options: [
        "Vườn quốc gia Cát Tiên",
        "Vườn quốc gia Cúc Phương",
        "Vườn quốc gia Ba Bể",
        "Vườn quốc gia Bạch Mã"
      ],
      ans: 1,
      expl: "Vườn quốc gia Cúc Phương (thuộc 3 tỉnh Ninh Bình, Hòa Bình, Thanh Hóa) được thành lập năm 1962 là vườn quốc gia đầu tiên của nước ta."
    }
  },
  {
    id: "dl-11",
    unitNumber: 30,
    type: "geography",
    chapter: "Chương 4. Biển đảo Việt Nam",
    title: "Bài 11. Phạm vi Biển Đông, vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu phạm vi Biển Đông; xác định 5 vùng biển của Việt Nam theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS); phân tích đặc điểm khí hậu, hải văn và địa hình đáy biển vùng biển Việt Nam.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">5 VÙNG BIỂN QUỐC GIA THEO LUẬT BIỂN UNCLOS 1982</text>

      <!-- Baseline and zones -->
      <rect x="35" y="58" width="60" height="90" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="65" y="75" fill="#38bdf8" font-size="7.5" font-weight="bold" text-anchor="middle">NỘI THỦY</text>
      <text x="65" y="95" fill="#cbd5e1" font-size="7" text-anchor="middle">Phía trong</text>
      <text x="65" y="107" fill="#cbd5e1" font-size="7" text-anchor="middle">đường cơ sở</text>
      <text x="65" y="130" fill="#93c5fd" font-size="6.5" text-anchor="middle">Chủ quyền</text>
      <text x="65" y="140" fill="#93c5fd" font-size="6.5" text-anchor="middle">tuyệt đối</text>

      <rect x="100" y="58" width="65" height="90" rx="6" fill="#1e293b" stroke="#3b82f6"/>
      <text x="132" y="75" fill="#93c5fd" font-size="7.5" font-weight="bold" text-anchor="middle">LÃNH HẢI</text>
      <text x="132" y="95" fill="#cbd5e1" font-size="7" text-anchor="middle">Rộng 12 hải lí</text>
      <text x="132" y="107" fill="#cbd5e1" font-size="7" text-anchor="middle">(~22,22 km)</text>
      <text x="132" y="130" fill="#60a5fa" font-size="6.5" text-anchor="middle">Ranh giới</text>
      <text x="132" y="140" fill="#60a5fa" font-size="6.5" text-anchor="middle">quốc gia biển</text>

      <rect x="170" y="58" width="65" height="90" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="202" y="75" fill="#6ee7b7" font-size="7" font-weight="bold" text-anchor="middle">TIẾP GIÁP LH</text>
      <text x="202" y="95" fill="#cbd5e1" font-size="7" text-anchor="middle">Thêm 12 hải lí</text>
      <text x="202" y="107" fill="#cbd5e1" font-size="7" text-anchor="middle">từ lãnh hải</text>
      <text x="202" y="130" fill="#34d399" font-size="6.5" text-anchor="middle">Quyền tài phán</text>
      <text x="202" y="140" fill="#34d399" font-size="6.5" text-anchor="middle">hải quan, thuế</text>

      <rect x="240" y="58" width="60" height="90" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="270" y="75" fill="#fde68a" font-size="7.5" font-weight="bold" text-anchor="middle">ĐẶC QUYỀN KT</text>
      <text x="270" y="95" fill="#cbd5e1" font-size="7" text-anchor="middle">Rộng 200 hải lí</text>
      <text x="270" y="107" fill="#cbd5e1" font-size="7" text-anchor="middle">từ đường cơ sở</text>
      <text x="270" y="130" fill="#fcd34d" font-size="6.5" text-anchor="middle">Quyền khai thác</text>
      <text x="270" y="140" fill="#fcd34d" font-size="6.5" text-anchor="middle">tài nguyên kinh tế</text>

      <rect x="305" y="58" width="60" height="90" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="335" y="75" fill="#f87171" font-size="7.5" font-weight="bold" text-anchor="middle">THỀM LỤC ĐỊA</text>
      <text x="335" y="95" fill="#cbd5e1" font-size="7" text-anchor="middle">Đáy biển mở rộng</text>
      <text x="335" y="107" fill="#cbd5e1" font-size="7" text-anchor="middle">đến 350 hải lí</text>
      <text x="335" y="130" fill="#fca5a5" font-size="6.5" text-anchor="middle">Chủ quyền lòng</text>
      <text x="335" y="140" fill="#fca5a5" font-size="6.5" text-anchor="middle">đất dưới đáy</text>

      <rect x="35" y="156" width="330" height="30" rx="6" fill="#1e3a8a"/>
      <text x="200" y="175" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Biển Đông rộng ~3,44 triệu km² • Vùng biển Việt Nam rộng khoảng 1 triệu km²</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-water text-sky-500"></i> I. Phạm vi Biển Đông & 5 vùng biển Việt Nam
          </h5>
          <p>• <strong>Biển Đông:</strong> Là biển nửa kín có diện tích khoảng $3,447\text{ triệu km}^2$ (lớn thứ hai ở Thái Bình Dương), nằm trải rộng từ chí tuyến Bắc đến xích đạo.<br>
          • <strong>Quy chế 5 vùng biển Việt Nam (theo UNCLOS 1982 & Luật Biển Việt Nam 2012):</strong>
            <br>&nbsp;&nbsp;1. <em>Nội thủy:</em> Vùng nước nằm phía trong đường cơ sở, là bộ phận lãnh thổ quốc gia có chủ quyền hoàn toàn và tuyệt đối như đất liền.
            <br>&nbsp;&nbsp;2. <em>Lãnh hải:</em> Vùng biển có chiều rộng <strong>12 hải lí</strong> (1 hải lí = $1.852\text{ m}$) tính từ đường cơ sở. Ranh giới ngoài của lãnh hải chính là <strong>đường biên giới quốc gia trên biển</strong>.
            <br>&nbsp;&nbsp;3. <em>Vùng tiếp giáp lãnh hải:</em> Vùng biển rộng 12 hải lí tính từ ranh giới ngoài lãnh hải. Nhà nước thực hiện quyền kiểm soát nhằm bảo vệ an ninh, hải quan, thuế khóa, y tế, môi trường.
            <br>&nbsp;&nbsp;4. <em>Vùng đặc quyền kinh tế:</em> Vùng biển mở rộng đến <strong>200 hải lí</strong> tính từ đường cơ sở. Nước ta có chủ quyền hoàn toàn về việc thăm dò, khai thác, bảo tồn tài nguyên sinh vật và phi sinh vật.
            <br>&nbsp;&nbsp;5. <em>Thềm lục địa:</em> Đáy biển và lòng đất dưới đáy biển mở rộng ra ngoài lãnh hải đến rìa ngoài của bờ lục địa (không quá 350 hải lí). Nước ta có quyền chủ quyền đối với tài nguyên khoáng sản, dầu khí trong lòng đất.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cloud-rain text-teal-500"></i> II. Đặc điểm tự nhiên vùng biển đảo
          </h5>
          <p>• <strong>Khí hậu biển:</strong> Mang tính chất nhiệt đới gió mùa đại dương, điều hòa hơn đất liền. Nhiệt độ trung bình nước biển tầng mặt luôn trên $23^\circ\text{C}$. Độ muối trung bình khoảng $30 - 34‰$.<br>
          • <strong>Hải văn:</strong> Dòng biển chảy theo mùa (mùa đông chảy hướng Đông Bắc - Tây Nam, mùa hạ chảy hướng Tây Nam - Đông Bắc). Chế độ nhật triều đều ở Vịnh Bắc Bộ là hiện tượng độc đáo bậc nhất thế giới.<br>
          • <strong>Đảo và quần đảo:</strong> Nước ta có hơn $4.000$ hòn đảo lớn nhỏ. Trong đó có các đảo tiền tiêu quan trọng (Bạch Long Vĩ, Côn Đảo, Phú Quốc) và hai quần đảo xa bờ thiêng liêng là <strong>Hoàng Sa</strong> (Đà Nẵng) và <strong>Trường Sa</strong> (Khánh Hòa).</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-sky-50/70 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-800 text-xs space-y-1.5">
        <h6 class="font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-scale-balanced"></i> Phân biệt "Chủ quyền hoàn toàn" và "Quyền chủ quyền"
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          • <em>Chủ quyền hoàn toàn (Nội thủy & Lãnh hải):</em> Quốc gia ven biển có toàn quyền tối cao tuyệt đối giống như trên đất liền, tàu thuyền nước ngoài muốn vào phải xin phép.<br>
          • <em>Quyền chủ quyền (Đặc quyền kinh tế & Thềm lục địa):</em> Quốc gia chỉ có độc quyền khai thác tài nguyên thiên nhiên (cá, dầu khí), nhưng các nước khác vẫn được quyền tự do hàng hải và đặt cáp ngầm quốc tế.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm ranh giới ngoài của vùng đặc quyền kinh tế với ranh giới quốc gia. Đường biên giới quốc gia trên biển chính là ranh giới ngoài của LÃNH HẢI (cách đường cơ sở 12 hải lí).",
    quiz: {
      q: "Đường biên giới quốc gia trên biển của nước ta là ranh giới bên ngoài của vùng biển nào?",
      options: [
        "Vùng nội thủy",
        "Vùng lãnh hải (12 hải lí)",
        "Vùng tiếp giáp lãnh hải",
        "Vùng đặc quyền kinh tế (200 hải lí)"
      ],
      ans: 1,
      expl: "Theo Luật Biển Việt Nam và UNCLOS 1982, ranh giới ngoài của lãnh hải (cách đường cơ sở 12 hải lí) chính là đường biên giới quốc gia trên biển của Tổ quốc."
    }
  },
  {
    id: "dl-12",
    unitNumber: 31,
    type: "geography",
    chapter: "Chương 4. Biển đảo Việt Nam",
    title: "Bài 12. Môi trường và tài nguyên biển đảo Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu các nguồn tài nguyên quý giá của vùng biển đảo nước ta (sinh vật, khoáng sản, du lịch, giao thông vận tải hàng hải); thực trạng suy thoái môi trường biển và các biện pháp bảo vệ phát triển bền vững kinh tế biển.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">4 TRỤ CỘT KINH TẾ BIỂN & BẢO VỆ MÔI TRƯỜNG</text>

      <!-- 4 pillars -->
      <rect x="40" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="73" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">1. THỦY HẢI SẢN</text>
      <text x="115" y="86" fill="#e2e8f0" font-size="7" text-anchor="middle">Trữ lượng 3 - 4 triệu tấn cá tôm</text>

      <rect x="210" y="58" width="150" height="42" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="73" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">2. DẦU KHÍ & KHOÁNG SẢN</text>
      <text x="285" y="86" fill="#e2e8f0" font-size="7" text-anchor="middle">Khai thác dầu thô, cát thủy tinh, muối</text>

      <rect x="40" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="115" y="121" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">3. DU LỊCH BIỂN ĐẢO</text>
      <text x="115" y="134" fill="#e2e8f0" font-size="7" text-anchor="middle">Hạ Long, Nha Trang, Phú Quốc, Côn Đảo</text>

      <rect x="210" y="106" width="150" height="42" rx="6" fill="#1e293b" stroke="#a855f7"/>
      <text x="285" y="121" fill="#d8b4fe" font-size="8" font-weight="bold" text-anchor="middle">4. GIAO THÔNG HÀNG HẢI</text>
      <text x="285" y="134" fill="#e2e8f0" font-size="7" text-anchor="middle">Cảng nước sâu Cái Mép - Thị Vải, Lạch Huyện</text>

      <!-- Bottom environmental -->
      <rect x="40" y="154" width="320" height="32" rx="6" fill="#450a0a" stroke="#b91c1c"/>
      <text x="200" y="174" fill="#fecaca" font-size="8" font-weight="bold" text-anchor="middle">BẢO VỆ MÔI TRƯỜNG: Chống rác thải nhựa, phục hồi san hô & rừng ngập mặn</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-ship text-sky-500"></i> I. Bốn nguồn tài nguyên kinh tế biển phong phú
          </h5>
          <p>• <strong>Tài nguyên sinh vật biển:</strong> Hơn $2.000$ loài cá (khoảng 110 loài giá trị kinh tế cao như cá ngừ, cá thu, cá trích), hàng chục loài tôm, mực, bào ngư, yến sào. Trữ lượng cá biển khoảng $3,5 - 4\text{ triệu tấn/năm}$.<br>
          • <strong>Tài nguyên khoáng sản:</strong> Trữ lượng dầu khí ước tính hàng tỉ tấn dầu và hàng trăm tỉ mét khối khí. Muối biển sản xuất thuận lợi ở ven biển Nam Trung Bộ (Cà Ná, Sa Huỳnh) do nhiệt độ cao, nắng gắt, ít sông đổ ra biển. Cát thủy tinh ở Khánh Hòa, Quảng Ninh.<br>
          • <strong>Tài nguyên du lịch biển:</strong> Vịnh Hạ Long (di sản thiên nhiên thế giới), Vịnh Nha Trang, Lăng Cô, các đảo du lịch nghỉ dưỡng nổi tiếng (Phú Quốc, Côn Đảo, Cát Bà, Cù Lao Chàm).<br>
          • <strong>Giao thông vận tải biển:</strong> Gần các tuyến hàng hải quốc tế nhộn nhịp nhất thế giới. Nhiều vũng vịnh kín nước xây dựng cảng nước sâu đón tàu tải trọng lớn (Cái Mép - Thị Vải, Lạch Huyện, Cam Ranh, Đà Nẵng).</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-500"></i> II. Thực trạng suy thoái môi trường biển & Biện pháp bảo vệ
          </h5>
          <p>• <strong>Nguy cơ môi trường:</strong> Ô nhiễm rác thải nhựa đại dương; nước thải sinh hoạt và công nghiệp chưa qua xử lí xả ra biển; sự cố tràn dầu; khai thác hải sản tận diệt (dùng chất nổ, kích điện, lưới mắt nhỏ cào đáy) làm hủy hoại các rạn san hô và thảm cỏ biển.<br>
          • <strong>Hành động bảo vệ:</strong>
            <br>&nbsp;&nbsp;1. Kiểm soát nghiêm ngặt các nguồn thải từ đất liền ra biển.
            <br>&nbsp;&nbsp;2. Nghiêm cấm các hình thức đánh bắt tận diệt mang tính hủy diệt sinh thái.
            <br>&nbsp;&nbsp;3. Phục hồi diện tích rừng ngập mặn và thả giống tái tạo nguồn lợi thủy sản.
            <br>&nbsp;&nbsp;4. Phát triển kinh tế biển xanh gắn chặt với củng cố quốc phòng - an ninh trên biển.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-water"></i> Vì sao ven biển Nam Trung Bộ là nơi sản xuất muối tốt nhất cả nước?
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Vùng ven biển Nam Trung Bộ (Ninh Thuận, Bình Thuận) có nền nhiệt độ rất cao, số giờ nắng nhiều quanh năm, độ ẩm thấp, số ngày mưa rất ít và ít có các con sông lớn đổ ra biển làm ngọt hóa nước ven bờ, rất thuận lợi cho việc phơi nước biển làm muối nhanh kết tinh hạt to trắng sạch.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm đánh bắt xa bờ là giải pháp làm cạn kiệt cá. Đánh bắt xa bờ giúp giảm áp lực khai thác quá mức ven bờ, đồng thời sự hiện diện của tàu cá ngư dân là những 'cột mốc sống' khẳng định và bảo vệ chủ quyền biển đảo Tổ quốc.",
    quiz: {
      q: "Vùng ven biển nào ở nước ta có điều kiện tự nhiên thuận lợi nhất để phát triển nghề làm muối (đồng muối Cà Ná, Sa Huỳnh)?",
      options: [
        "Đồng bằng sông Hồng",
        "Ven biển Duyên hải Nam Trung Bộ",
        "Đồng bằng sông Cửu Long",
        "Ven biển Đông Bắc (Quảng Ninh)"
      ],
      ans: 1,
      expl: "Ven biển Nam Trung Bộ có nhiệt độ cao, nắng nhiều, ít mưa và ít cửa sông đổ ra biển, là nơi sản xuất muối lí tưởng nhất cả nước."
    }
  },

  // --- PHẦN III: CHỦ ĐỀ CHUNG 1 & 2 ---
  {
    id: "cd-1",
    unitNumber: 32,
    type: "common",
    chapter: "Chủ đề chung 1",
    title: "Chủ đề chung 1. Văn minh châu thổ sông Hồng và sông Cửu Long",
    badge: "Chủ đề tích hợp Sử - Địa",
    objective: "So sánh quá trình hình thành, điều kiện tự nhiên, cách ứng xử với sông nước và đặc trưng văn hóa giữa hai nền văn minh châu thổ: văn minh sông Hồng (trị thủy, đắp đê, làng xã cổ kính) và văn minh sông Cửu Long (thuận thiên, sống chung với lũ, kênh rạch, chợ nổi).",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">SO SÁNH HAI NỀN VĂN MINH CHÂU THỔ SÔNG NƯỚC</text>

      <!-- Red River -->
      <rect x="40" y="58" width="150" height="95" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="115" y="74" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">CHÂU THỔ SÔNG HỒNG</text>
      <text x="115" y="88" fill="#fca5a5" font-size="7.5" font-weight="bold" text-anchor="middle">"TRỊ THỦY - ĐẮP ĐÊ NGĂN LŨ"</text>
      <text x="115" y="100" fill="#cbd5e1" font-size="7" text-anchor="middle">• Hệ thống đê dài hơn 2.700 km</text>
      <text x="115" y="111" fill="#cbd5e1" font-size="7" text-anchor="middle">• Đất trong đê không bồi đắp hàng năm</text>
      <text x="115" y="122" fill="#cbd5e1" font-size="7" text-anchor="middle">• Làng xã truyền thống, cây đa bến nước</text>
      <text x="115" y="133" fill="#cbd5e1" font-size="7" text-anchor="middle">• Lễ hội phồn thực, cầu mưa, đua thuyền</text>
      <text x="115" y="145" fill="#fde047" font-size="7" font-weight="bold" text-anchor="middle">Cư trú lâu đời ngàn năm văn hiến</text>

      <!-- Mekong River -->
      <rect x="210" y="58" width="150" height="95" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="285" y="74" fill="#6ee7b7" font-size="8.5" font-weight="bold" text-anchor="middle">CHÂU THỔ SÔNG CỬU LONG</text>
      <text x="285" y="88" fill="#a7f3d0" font-size="7.5" font-weight="bold" text-anchor="middle">"THUẬN THIÊN - SỐNG CHUNG VỚI LŨ"</text>
      <text x="285" y="100" fill="#cbd5e1" font-size="7" text-anchor="middle">• Không đắp đê ngăn lũ biển</text>
      <text x="285" y="111" fill="#cbd5e1" font-size="7" text-anchor="middle">• Mạng lưới kênh rạch xẻ ngang xẻ dọc</text>
      <text x="285" y="122" fill="#cbd5e1" font-size="7" text-anchor="middle">• Nhà sàn ven sông, xuồng ba lá, chợ nổi</text>
      <text x="285" y="133" fill="#cbd5e1" font-size="7" text-anchor="middle">• Văn hóa cộng cư hào sảng cởi mở</text>
      <text x="285" y="145" fill="#a7f3d0" font-size="7" font-weight="bold" text-anchor="middle">Vựa lúa & trái cây trù phú phương Nam</text>

      <text x="200" y="180" fill="#fde68a" font-size="8" text-anchor="middle">Bài học kinh nghiệm thích ứng tự nhiên của cha ông trước biến đổi khí hậu hôm nay</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-red-800 dark:text-red-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-landmark text-red-500"></i> I. Văn minh châu thổ sông Hồng: Nghệ thuật trị thủy & Làng xã truyền thống
          </h5>
          <p>• <strong>Điều kiện tự nhiên:</strong> Được bồi đắp bởi hệ thống sông Hồng và sông Thái Bình, diện tích khoảng $15.000\text{ km}^2$. Sông có lượng phù sa khổng lồ nhưng lũ lùa về mùa hạ rất hung dữ.<br>
          • <strong>Phương thức ứng xử với nước:</strong>
            <br>&nbsp;&nbsp;- <em>Trị thủy đắp đê:</em> Ngay từ thời Lý - Trần, triều đình và nhân dân đã kiên trì đắp đê ngăn lũ, tạo nên hệ thống đê kỳ vĩ bậc nhất châu Á dài trên $2.700\text{ km}$. Hệ thống đê chia đồng bằng thành các ô trũng, đất trong đê không còn được phù sa bồi hằng năm trở thành đất bạc màu, đất ngoài đê vẫn màu mỡ.
            <br>&nbsp;&nbsp;- <em>Cư trú & Làng xã:</em> Làng được bao bọc bởi lũy tre xanh khép kín, quần tụ quanh giếng nước, sân đình, cây đa. Tinh thần cộng đồng gắn kết chặt chẽ qua các kì lễ hội cầu mùa, đua thuyền, múa rối nước.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-water text-emerald-500"></i> II. Văn minh châu thổ sông Cửu Long: Thuận thiên & Sống chung với lũ
          </h5>
          <p>• <strong>Điều kiện tự nhiên:</strong> Do sông Tiền và sông Hậu bồi đắp, diện tích khoảng $40.000\text{ km}^2$. Địa hình thấp bằng phẳng, mùa khô bị thủy triều xâm nhập mặn, mùa lũ nước dâng từ từ do Biển Hồ điều tiết.<br>
          • <strong>Phương thức ứng xử với nước:</strong>
            <br>&nbsp;&nbsp;- <em>"Sống chung với lũ":</em> Người dân không đắp đê ngăn nước mà tận dụng nước lũ ("mùa nước nổi") để thau chua rửa mặn, bồi đắp phù sa son và đánh bắt nguồn lợi tôm cá tự nhiên dồi dào.
            <br>&nbsp;&nbsp;- <em>Giao thông & Cư trú sông nước:</em> Đào kênh rạch (kênh Thoại Hà, Vĩnh Tế), nhà cất sàn trên cọc gỗ ven sông, phương tiện đi lại chủ yếu bằng ghe xuồng, sinh hoạt mua bán nhộn nhịp độc đáo tại các <strong>chợ nổi</strong> (Cái Răng, Ngã Bảy, Phong Điền).
            <br>&nbsp;&nbsp;- <em>Văn hóa cộng cư:</em> Sự giao thoa hòa hợp văn hóa giữa 4 dân tộc Việt, Chăm, Khmer, Hoa tạo nên tính cách người Nam Bộ hào sảng, phóng khoáng, trọng nghĩa khí.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs space-y-1.5">
        <h6 class="font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-scale-balanced"></i> So sánh triết lí ứng xử tự nhiên: "Trị thủy" vs "Thuận thiên"
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          • <em>Sông Hồng:</em> Chống lại hiểm họa thiên tai bằng công trình đê điều ngăn chặn lũ tàn phá (tính chất cải tạo tự nhiên quyết liệt).<br>
          • <em>Sông Cửu Long:</em> Nương theo nhịp điệu con nước tự nhiên, đón nhận phù sa và thủy sản của lũ, thích nghi hài hòa (triết lí thuận thiên bền vững).
        </p>
      </div>
    `,
    commonMistakes: "Tránh quan niệm việc không đắp đê ở sông Cửu Long là do người dân lười biếng. Đó là giải pháp khôn ngoan dựa trên đặc tính thủy văn lũ lên chậm hiền hòa và cấu trúc đất đai rộng lớn cần phù sa rửa mặn rửa phèn tự nhiên.",
    quiz: {
      q: "Nét văn hóa giao thương đặc sắc gắn liền với mạng lưới sông rạch chằng chịt ở đồng bằng sông Cửu Long là:",
      options: [
        "Hội chợ trên bờ đê cao",
        "Chợ nổi trên sông bằng ghe xuồng",
        "Chợ phiên trên lưng ngựa",
        "Chợ đêm phố cổ ngõ hẹp"
      ],
      ans: 1,
      expl: "Chợ nổi trên sông (như Cái Răng, Phong Điền) là nét văn minh sông nước đặc sắc tiêu biểu cho phương thức cư trú và giao thương của người dân Nam Bộ."
    }
  },
  {
    id: "cd-2",
    unitNumber: 33,
    type: "common",
    chapter: "Chủ đề chung 2",
    title: "Chủ đề chung 2. Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
    badge: "Chủ đề tích hợp Sử - Địa",
    objective: "Khẳng định cơ sở lịch sử và pháp lí vững chắc về chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa qua các triều đại lịch sử; giá trị của UNCLOS 1982 và Luật Biển Việt Nam 2012; trách nhiệm của công dân học sinh trong bảo vệ chủ quyền biển đảo.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sunVN" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </radialGradient>
      </defs>
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">CHỦ QUYỀN BIỂN ĐẢO: HOÀNG SA & TRƯỜNG SA LÀ CỦA VIỆT NAM</text>

      <!-- Historical evidence -->
      <rect x="40" y="58" width="150" height="95" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="115" y="74" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">1. CƠ SỞ LỊCH SỬ VỮNG CHẮC</text>
      <text x="115" y="88" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Nhà nước chiếm hữu hòa bình</text>
      <text x="115" y="99" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Hải đội Hoàng Sa & Bắc Hải (TK XVII)</text>
      <text x="115" y="110" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Châu bản triều Nguyễn, Mộc bản</text>
      <text x="115" y="121" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Toản tập Thiên Nam tứ chí lộ đồ thư</text>
      <text x="115" y="133" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Bản đồ thế giới phương Tây khẳng định</text>
      <text x="115" y="145" fill="#fde047" font-size="7" font-weight="bold" text-anchor="middle">Thực thi chủ quyền liên tục, hòa bình</text>

      <!-- Legal evidence -->
      <rect x="210" y="58" width="150" height="95" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="285" y="74" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">2. CƠ SỞ PHÁP LÍ QUỐC TẾ</text>
      <text x="285" y="88" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Công ước LHQ về Luật Biển 1982</text>
      <text x="285" y="99" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Luật Biển Việt Nam năm 2012</text>
      <text x="285" y="110" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Tuyên bố DOC năm 2002</text>
      <text x="285" y="121" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Đàm phán Bộ quy tắc COC</text>
      <text x="285" y="133" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Giải quyết hòa bình bằng luật quốc tế</text>
      <text x="285" y="145" fill="#93c5fd" font-size="7" font-weight="bold" text-anchor="middle">Nguyên tắc thượng tôn pháp luật</text>

      <text x="200" y="180" fill="#a7f3d0" font-size="8" text-anchor="middle">Ý chí kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền và toàn vẹn lãnh thổ</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-amber-500"></i> I. Bằng chứng lịch sử & pháp lí xác thực
          </h5>
          <p>• <strong>Nguyên tắc thụ đắc lãnh thổ của luật quốc tế:</strong> Một quốc gia xác lập chủ quyền hợp pháp đối với một vùng lãnh thổ vô chủ khi thực hiện hành vi <em>chiếm hữu và quản lí thực tế, hòa bình, công khai và liên tục</em> nhân danh Nhà nước.<br>
          • <strong>Hệ thống chứng cứ lịch sử đanh thép của Việt Nam:</strong>
            <br>&nbsp;&nbsp;1. Ít nhất từ thế kỉ XVII, các chúa Nguyễn đã thành lập <strong>Đội Hoàng Sa</strong> và sau đó là <strong>Đội Bắc Hải</strong> kiêm quản ra Hoàng Sa và Trường Sa để thu lượm sản vật, đo vẽ hải trình, cứu trợ tàu buôn quốc tế.
            <br>&nbsp;&nbsp;2. Các bộ chính sử và địa chí cổ của Nhà nước phong kiến Việt Nam đều khẳng định chủ quyền: <em>Toản tập Thiên Nam tứ chí lộ đồ thư (1686)</em> của Đỗ Bá, <em>Phủ biên tạp lục (1776)</em> của Lê Quý Đôn, <em>Đại Nam thực lục</em>, <em>Khâm định Việt sử thông giám cương mục</em>.
            <br>&nbsp;&nbsp;3. <em>Châu bản triều Nguyễn</em> (Di sản tư liệu thế giới) lưu giữ hàng loạt chỉ dụ của các vua Gia Long, Minh Mạng về việc phái thủy quân ra Hoàng Sa cắm mốc tiêu, vẽ bản đồ, dựng miếu miếu thờ giữ đảo.
            <br>&nbsp;&nbsp;4. Bản đồ <em>Đại Nam nhất thống toàn đồ (1838)</em> và các bản đồ cổ do chính các nhà hàng hải, giáo sĩ phương Tây vẽ thế kỉ XVII - XIX đều vẽ Hoàng Sa, Trường Sa (Paracel, Spratly) thuộc lãnh thổ Việt Nam.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-flag text-sky-500"></i> II. Trách nhiệm bảo vệ chủ quyền & lợi ích hợp pháp
          </h5>
          <p>• <strong>Quan điểm nhất quán của Đảng và Nhà nước ta:</strong>
            <br>&nbsp;&nbsp;- Kiên quyết, kiên trì đấu tranh bảo vệ vững chắc độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ biển đảo.
            <br>&nbsp;&nbsp;- Giải quyết mọi tranh chấp, bất đồng trên Biển Đông bằng <strong>biện pháp hòa bình</strong> trên cơ sở luật pháp quốc tế, đặc biệt là Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS).
            <br>&nbsp;&nbsp;- Thực hiện nghiêm túc <em>Tuyên bố về ứng xử của các bên ở Biển Đông (DOC)</em> và thúc đẩy xây dựng <em>Bộ Quy tắc ứng xử ở Biển Đông (COC)</em> hiệu lực, thực chất.<br>
          • <strong>Trách nhiệm của thế hệ trẻ học sinh:</strong>
            <br>&nbsp;&nbsp;- Tích cực học tập, nghiên cứu nâng cao hiểu biết pháp luật về biển đảo quê hương.
            <br>&nbsp;&nbsp;- Tuyên truyền, lan tỏa các tư liệu lịch sử chính thống; tỉnh táo đấu tranh phản bác các thông tin sai trái, xuyên tạc về chủ quyền biên giới biển đảo.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1.5">
        <h6 class="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-circle-check"></i> Giá trị pháp lí của Châu bản triều Nguyễn về quần đảo Hoàng Sa
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Châu bản triều Nguyễn là các văn bản hành chính gốc có bút phê trực tiếp bằng mực đỏ của nhà vua phong kiến. Đây là chứng cứ pháp lí lịch sử nguyên bản, vô giá của cấp nhà nước cao nhất, khẳng định sự thực thi chủ quyền liên tục của Việt Nam trước khi thực dân Pháp xâm lược.
        </p>
      </div>
    `,
    commonMistakes: "Tránh suy diễn ranh giới biển từ những bản đồ vẽ minh họa không có tính pháp lí; chỉ căn cứ vào các văn bản quy phạm pháp luật quốc tế (UNCLOS 1982) và Luật Biển Việt Nam 2012.",
    quiz: {
      q: "Đội dân binh nào được các chúa Nguyễn thành lập ít nhất từ thế kỉ XVII để làm nhiệm vụ tuần tra, đo đạc hải trình và khai thác sản vật tại quần đảo Hoàng Sa?",
      options: [
        "Đội Cần Vương",
        "Đội Hoàng Sa và Đội Bắc Hải",
        "Đội Cờ Đen",
        "Đội Nghĩa dũng quân"
      ],
      ans: 1,
      expl: "Từ thế kỉ XVII, chúa Nguyễn đã thành lập Đội Hoàng Sa và Đội Bắc Hải để thực thi việc tuần tra, khai thác và xác lập chủ quyền nhà nước tại quần đảo Hoàng Sa và Trường Sa."
    }
  }
];
