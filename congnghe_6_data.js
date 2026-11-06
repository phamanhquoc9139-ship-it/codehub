// Dữ liệu Khóa học Công Nghệ Lớp 6 - Kết nối tri thức với cuộc sống (GDPT 2018)
// 4 Chương - 14 Bài học - Đầy đủ 7 phần chuẩn mực

const chapters = [
  {
    id: 1,
    name: "Chương I. Nhà ở",
    color: "from-blue-600 via-indigo-600 to-cyan-600",
    border: "border-blue-500",
    desc: "Khái quát vai trò, cấu tạo, kiến trúc đặc trưng của nhà ở; vật liệu và quy trình xây dựng; đặc điểm và xu hướng ngôi nhà thông minh tiết kiệm năng lượng.",
    lessons: [
      {
        id: 1,
        title: "Bài 1. Khái quát về nhà ở",
        pages: "trang 8–11",
        objectives: [
          "Nêu được vai trò quan trọng của nhà ở đối với đời sống con người.",
          "Xác định được các bộ phận cấu tạo chung và sự phân chia khu vực chức năng trong ngôi nhà.",
          "Nhận biết và phân biệt được các kiểu kiến trúc nhà ở đặc trưng tại các vùng miền của Việt Nam."
        ],
        knowledge: `
### 1. Vai trò của nhà ở
Nhà ở là công trình xây dựng kiên cố hoặc bán kiên cố, phục vụ nhu cầu cư trú của con người. Nhà ở có các vai trò cốt lõi:
- **Bảo vệ con người:** Là lá chắn che chở con người trước các tác động khắc nghiệt và bất lợi của thiên nhiên, thời tiết (nắng gắt, mưa bão, gió rét, lũ lụt, tuyết lạnh) cũng như thú dữ, côn trùng và các nguy cơ bên ngoài.
- **Đáp ứng nhu cầu sinh hoạt:** Phục vụ các hoạt động thường nhật thiết yếu như ăn uống, ngủ nghỉ, vệ sinh cá nhân, học tập, lao động sáng tạo, giải trí và tái tạo sức lao động.
- **Gắn kết gia đình:** Là tổ ấm sum vầy, nơi các thế hệ thành viên trong gia đình cùng chung sống, nuôi dưỡng tình cảm, chia sẻ niềm vui, nỗi buồn và lưu giữ những giá trị văn hóa truyền thống tốt đẹp.

### 2. Đặc điểm chung của nhà ở
Mỗi ngôi nhà dù có hình dáng và quy mô khác nhau đều có hai đặc điểm cơ bản:
#### a) Cấu tạo chung của nhà ở
Ngôi nhà thường gồm các phần chính liên kết chặt chẽ với nhau:
- **Móng nhà:** Nằm sâu dưới mặt đất, có nhiệm vụ chịu toàn bộ tải trọng của ngôi nhà và truyền tải trọng đó xuống nền đất vững chắc.
- **Sàn nhà:** Mặt phẳng nằm ngang ngăn cách các tầng hoặc ngăn cách mặt đất với không gian sinh hoạt, chịu lực người và đồ vật bên trên.
- **Khung nhà:** Gồm cột và dầm (thường bằng bê tông cốt thép, thép hoặc gỗ), tạo nên bộ xương chịu lực chính nâng đỡ toàn bộ công trình.
- **Tường nhà:** Bao che xung quanh để ngăn cách không gian trong nhà với môi trường bên ngoài, đồng thời ngăn chia các phòng bên trong.
- **Mái nhà:** Phần trên cùng che chở cho ngôi nhà khỏi nắng, mưa, gió bão; có thể là mái ngói, mái tôn, mái bằng bê tông cốt thép.
- **Cửa ra vào và cửa sổ:** Giúp con người đi lại, đồng thời lấy ánh sáng tự nhiên và thông gió, lưu thông không khí.

#### b) Bố trí không gian chức năng trong nhà
Không gian nhà ở được chia thành các khu vực chức năng hợp lí, thuận tiện cho sinh hoạt:
- **Khu vực sinh hoạt chung:** Phòng khách, nơi cả gia đình sum họp hoặc tiếp đón khách.
- **Khu vực nghỉ ngơi:** Phòng ngủ, cần yên tĩnh, thoáng mát, kín đáo.
- **Khu vực thờ cúng:** Nơi đặt bàn thờ gia tiên, trang nghiêm, thanh tịnh.
- **Khu vực nấu ăn (bếp):** Nơi chế biến thực phẩm, cần thông thoáng, có lối thoát khói, thuận tiện cấp thoát nước.
- **Khu vực vệ sinh:** Nhà tắm, nhà vệ sinh, cần kín đáo, tiện nghi, sạch sẽ và đảm bảo vệ sinh môi trường.
- **Các khu vực khác:** Sân phơi quần áo, nhà để xe, ban công, kho chứa đồ...

### 3. Kiến trúc nhà ở đặc trưng của Việt Nam
Tùy theo điều kiện tự nhiên, địa hình, khí hậu và tập quán sinh hoạt, Việt Nam có các kiểu kiến trúc đặc thù:
- **Nhà ở nông thôn truyền thống:** Thường có kết cấu nhà ngang - nhà bếp, có sân phơi rộng, vườn cây, ao cá hoặc chuồng trại chăn nuôi, gắn liền với sản xuất nông nghiệp.
- **Nhà ở thành thị:**
  + *Nhà mặt phố (nhà ống):* Diện tích mặt tiền hẹp, chiều sâu dài, nhiều tầng, thường kết hợp ở với kinh doanh buôn bán.
  + *Nhà chung cư:* Tòa nhà cao tầng gồm nhiều căn hộ riêng biệt khép kín, sử dụng chung hành lang, thang máy và tiện ích công cộng.
- **Nhà ở vùng đặc thù:**
  + *Nhà sàn:* Phổ biến ở vùng núi cao, vùng trung du (đồng bào Tày, Thái, Mường, Ê Đê, Ba Na). Nhà dựng trên các cột gỗ/bê tông cao hơn mặt đất để tránh thú dữ, ẩm thấp và côn trùng.
  + *Nhà nổi (nhà bè):* Phổ biến ở vùng sông nước đồng bằng sông Cửu Long, vịnh biển, được làm nổi trên bè phao, thùng phi để thích ứng với mùa nước nổi hoặc nghề nuôi trồng thủy hải sản.
`,
        diagramSvg: `
<svg viewBox="0 0 700 360" class="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-blue-200 dark:border-blue-900 p-4 shadow-inner" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#fde047"/>
    </linearGradient>
    <linearGradient id="groundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78716c"/>
      <stop offset="100%" stop-color="#57534e"/>
    </linearGradient>
  </defs>
  <!-- Background ground -->
  <rect x="20" y="300" width="660" height="40" fill="url(#groundGrad)" rx="6"/>
  <text x="350" y="325" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Nền đất tự nhiên chịu lực</text>

  <!-- Móng nhà -->
  <rect x="180" y="270" width="340" height="30" fill="#64748b" stroke="#334155" stroke-width="2" rx="4"/>
  <text x="350" y="290" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. MÓNG NHÀ (Chịu toàn bộ tải trọng công trình)</text>

  <!-- Sàn nhà -->
  <rect x="190" y="255" width="320" height="15" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="140" y="265" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="end">2. SÀN NHÀ →</text>

  <!-- Khung & Tường nhà -->
  <rect x="200" y="110" width="300" height="145" fill="url(#wallGrad)" stroke="#ca8a04" stroke-width="2"/>
  <!-- Cột chịu lực -->
  <rect x="200" y="110" width="25" height="145" fill="#3b82f6" opacity="0.85"/>
  <rect x="475" y="110" width="25" height="145" fill="#3b82f6" opacity="0.85"/>
  <text x="350" y="180" fill="#854d0e" font-size="14" font-weight="bold" text-anchor="middle">3. TƯỜNG VÀ KHUNG NHÀ</text>

  <!-- Cửa chính -->
  <rect x="320" y="175" width="60" height="80" fill="#7c2d12" stroke="#451a03" stroke-width="2" rx="2"/>
  <circle cx="370" cy="215" r="3" fill="#fbbf24"/>
  <text x="350" y="245" fill="#fef08a" font-size="10" text-anchor="middle">Cửa đi</text>

  <!-- Cửa sổ trái & phải -->
  <rect x="240" y="140" width="50" height="50" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
  <line x1="265" y1="140" x2="265" y2="190" stroke="#0284c7" stroke-width="2"/>
  <line x1="240" y1="165" x2="290" y2="165" stroke="#0284c7" stroke-width="2"/>

  <rect x="410" y="140" width="50" height="50" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
  <line x1="435" y1="140" x2="435" y2="190" stroke="#0284c7" stroke-width="2"/>
  <line x1="410" y1="165" x2="460" y2="165" stroke="#0284c7" stroke-width="2"/>

  <!-- Mái nhà -->
  <polygon points="170,110 350,20 530,110" fill="url(#roofGrad)" stroke="#991b1b" stroke-width="2"/>
  <text x="350" y="75" fill="#ffffff" font-size="14" font-weight="black" text-anchor="middle">4. MÁI NHÀ (Che mưa, nắng, bão)</text>

  <!-- Label 5: Cửa sổ & Cửa ra vào -->
  <text x="560" y="165" fill="#0891b2" font-size="11" font-weight="bold">← 5. CỬA SỔ & CỬA ĐI</text>
  <text x="560" y="180" fill="#64748b" font-size="10">(Thông gió & lấy sáng)</text>
</svg>
`,
        memorize: "Nhà ở là nơi cư trú, che chở con người khỏi thiên nhiên, đáp ứng nhu cầu sinh hoạt và gắn kết gia đình. Cấu tạo nhà gồm 6 bộ phận chính: móng, sàn, khung, tường, mái, cửa. Kiến trúc đặc trưng gồm nhà nông thôn, nhà mặt phố, chung cư, nhà sàn và nhà nổi.",
        exercises: [
          "1. Hãy phân tích 3 vai trò chính của nhà ở đối với đời sống con người và nêu ví dụ thực tế.",
          "2. Kể tên các bộ phận cấu tạo chung của ngôi nhà và cho biết bộ phận nào chịu toàn bộ tải trọng công trình?",
          "3. So sánh điểm khác biệt cơ bản giữa kiến trúc nhà sàn vùng cao và nhà nổi vùng sông nước về mục đích thích ứng thiên nhiên."
        ],
        practical: "Khảo sát ngay ngôi nhà em đang sinh sống: Hãy liệt kê các khu vực chức năng (phòng khách, phòng ngủ, bếp, vệ sinh, sân phơi), ước tính diện tích và đánh giá xem việc bố trí các phòng đã hợp lý, thông thoáng và tiện nghi chưa.",
        quiz: {
          q: "Bộ phận nào của ngôi nhà nằm sâu dưới mặt đất, có nhiệm vụ chịu toàn bộ tải trọng của công trình truyền xuống nền đất?",
          options: ["Móng nhà", "Sàn nhà", "Khung nhà", "Mái nhà"],
          ans: 0,
          exp: "Móng nhà nằm sâu dưới mặt đất, là kết cấu chịu lực tiếp nhận toàn bộ tải trọng của ngôi nhà truyền xuống nền đất vững chắc."
        }
      },
      {
        id: 2,
        title: "Bài 2. Xây dựng nhà ở",
        pages: "trang 12–15",
        objectives: [
          "Nhận biết và nêu được công dụng của các loại vật liệu xây dựng phổ biến.",
          "Mô tả được các bước chính trong quy trình xây dựng nhà ở từ thiết kế đến hoàn thiện.",
          "Ý thức được tầm quan trọng của an toàn lao động và bảo vệ môi trường trong xây dựng."
        ],
        knowledge: `
### 1. Vật liệu làm nhà
Vật liệu xây dựng là yếu tố quyết định độ bền vững, tuổi thọ và tính thẩm mĩ của ngôi nhà.
| Vật liệu | Nguồn gốc / Bản chất | Ứng dụng chính trong xây dựng nhà |
| :--- | :--- | :--- |
| **Gỗ** | Tự nhiên (rừng trồng) | Làm khung nhà, cột, xà gồ, sàn gỗ, cửa ra vào, cầu thang và đồ nội thất. |
| **Gạch, ngói** | Đất sét nung hoặc gạch không nung xi măng cốt liệu | Gạch dùng để xây tường bao, tường ngăn; ngói dùng để lợp mái nhà chống nóng, chống dột. |
| **Đá** | Đá tự nhiên khai thác từ mỏ (đá hộc, đá dăm 1x2cm) | Đá hộc xây móng, xây kè; đá dăm kết hợp với cát, xi măng và nước để đổ bê tông móng, cột, dầm, sàn. |
| **Thép** | Hợp kim sắt - cacbon có độ dẻo và chịu lực kéo rất cao | Làm cốt thép kết hợp với bê tông (bê tông cốt thép) tạo khung, cột, dầm chịu lực; làm khung kèo mái. |
| **Cát** | Hạt khoáng tự nhiên (cát vàng, cát đen) | Cát vàng đổ bê tông; cát đen mịn trộn với xi măng và nước tạo thành vữa xây, vữa trát tường. |
| **Xi măng** | Chất kết dính thủy lực nhân tạo dạng bột mịn | Trộn với nước, cát tạo vữa xây trát; trộn với đá, cát, nước tạo bê tông liên kết vững chắc khi đông cứng. |

> **Bê tông & Bê tông cốt thép:** Bê tông chịu nén rất tốt nhưng chịu kéo kém. Khi kết hợp bê tông với các thanh thép chịu lực bên trong, ta được **Bê tông cốt thép** – vật liệu xây dựng hiện đại vừa chịu nén, vừa chịu uốn, chịu kéo cực kỳ hoàn hảo.

### 2. Các bước chính trong quy trình xây dựng nhà ở
Quá trình xây dựng một ngôi nhà kiên cố thường trải qua 3 bước kế tiếp nhau:
1. **Bước 1: Thiết kế (Chuẩn bị)**
   - Khảo sát địa chất khu đất xây dựng, đo đạc kích thước hiện trạng.
   - Xác định nhu cầu sử dụng, số thành viên, số phòng và kinh phí dự trù.
   - Lập bản vẽ thiết kế kiến trúc, bản vẽ kết cấu chịu lực, bản vẽ hệ thống cấp thoát nước, điện chiếu sáng.
   - Xin giấy phép xây dựng theo quy định pháp luật.
2. **Bước 2: Thi công thô (Xây dựng phần thô)**
   - Đào móng, xử lý nền đất (ép cọc bê tông nếu nền yếu).
   - Đổ bê tông móng, xây tường móng, đắp đất nền.
   - Lắp dựng cốt pha, đan sắt thép và đổ bê tông cột, dầm, sàn các tầng.
   - Xây tường bao quanh và tường ngăn chia các phòng bằng gạch và vữa.
   - Đổ bê tông mái hoặc dựng khung vì kèo lợp ngói/tôn.
   - Lắp đặt hệ thống đường ống điện, nước âm tường.
3. **Bước 3: Hoàn thiện ngôi nhà**
   - Trát (tô) vữa xi măng cát phẳng toàn bộ mặt tường trong và ngoài.
   - Cán nền, ốp lát gạch sàn nhà, gạch ốp tường vệ sinh, phòng bếp.
   - Bả matit và sơn nước chống thấm, sơn trang trí nội ngoại thất.
   - Lắp đặt hoàn chỉnh các thiết bị điện (đèn, công tắc, ổ cắm), thiết bị vệ sinh (bồn cầu, lavabo, vòi sen).
   - Lắp đặt cửa đi, cửa sổ, lan can cầu thang và đồ nội thất gắn tường.
   - Dọn dẹp vệ sinh công nghiệp và nghiệm thu bàn giao đưa vào sử dụng.
`,
        diagramSvg: `
<svg viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Step 1 -->
  <g transform="translate(30, 20)">
    <rect width="180" height="170" rx="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="90" cy="45" r="22" fill="#3b82f6"/>
    <text x="90" y="52" fill="#ffffff" font-size="16" font-weight="black" text-anchor="middle">1</text>
    <text x="90" y="90" fill="#1e3a8a" font-size="14" font-weight="bold" text-anchor="middle">BƯỚC 1: THIẾT KẾ</text>
    <text x="90" y="115" fill="#475569" font-size="11" text-anchor="middle">• Khảo sát địa chất</text>
    <text x="90" y="132" fill="#475569" font-size="11" text-anchor="middle">• Lập bản vẽ kiến trúc</text>
    <text x="90" y="149" fill="#475569" font-size="11" text-anchor="middle">• Xin phép xây dựng</text>
  </g>
  <!-- Arrow 1 -->
  <path d="M 225 105 L 255 105" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow)" fill="none"/>
  <polygon points="255,100 265,105 255,110" fill="#3b82f6"/>

  <!-- Step 2 -->
  <g transform="translate(260, 20)">
    <rect width="180" height="170" rx="16" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="90" cy="45" r="22" fill="#f59e0b"/>
    <text x="90" y="52" fill="#ffffff" font-size="16" font-weight="black" text-anchor="middle">2</text>
    <text x="90" y="90" fill="#78350f" font-size="14" font-weight="bold" text-anchor="middle">BƯỚC 2: THI CÔNG THÔ</text>
    <text x="90" y="115" fill="#475569" font-size="11" text-anchor="middle">• Đào móng, đổ bê tông</text>
    <text x="90" y="132" fill="#475569" font-size="11" text-anchor="middle">• Dựng khung cột, sàn</text>
    <text x="90" y="149" fill="#475569" font-size="11" text-anchor="middle">• Xây tường, lợp mái</text>
  </g>
  <!-- Arrow 2 -->
  <polygon points="485,100 495,105 485,110" fill="#10b981"/>

  <!-- Step 3 -->
  <g transform="translate(490, 20)">
    <rect width="180" height="170" rx="16" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <circle cx="90" cy="45" r="22" fill="#10b981"/>
    <text x="90" y="52" fill="#ffffff" font-size="16" font-weight="black" text-anchor="middle">3</text>
    <text x="90" y="90" fill="#064e3b" font-size="14" font-weight="bold" text-anchor="middle">BƯỚC 3: HOÀN THIỆN</text>
    <text x="90" y="115" fill="#475569" font-size="11" text-anchor="middle">• Trát vữa, sơn tường</text>
    <text x="90" y="132" fill="#475569" font-size="11" text-anchor="middle">• Lát gạch, lắp cửa</text>
    <text x="90" y="149" fill="#475569" font-size="11" text-anchor="middle">• Lắp điện nước & nội thất</text>
  </g>
</svg>
`,
        memorize: "Vật liệu xây nhà gồm cát, đá, xi măng, thép, gạch, ngói, gỗ... Trong đó cát + xi măng + nước tạo vữa xây; cát + đá + xi măng + nước tạo bê tông; bê tông bọc thép tạo bê tông cốt thép. Quy trình xây nhà gồm 3 bước: 1. Thiết kế → 2. Thi công thô → 3. Hoàn thiện.",
        exercises: [
          "1. Hãy phân biệt thành phần và công dụng của vữa xây trát và bê tông trong công trình nhà ở.",
          "2. Tại sao người ta lại kết hợp bê tông với cốt thép để tạo thành bê tông cốt thép trong xây dựng các nhà cao tầng?",
          "3. Sắp xếp các công việc sau theo đúng 3 giai đoạn xây nhà: (a) Lát gạch sàn; (b) Lập bản vẽ; (c) Đào móng; (d) Sơn tường; (e) Đổ bê tông cột; (g) Xin giấy phép."
        ],
        practical: "Khi quan sát một công trình đang xây dựng gần nơi em sống, hãy ghi lại 3 biện pháp an toàn lao động và bảo vệ môi trường mà công nhân xây dựng cần tuân thủ (ví dụ: đội mũ bảo hộ, rào chắn lưới chống bụi rơi, tưới nước rửa xe trước khi ra đường).",
        quiz: {
          q: "Thành phần của vữa xây dựng dùng để xây tường gạch và trát tường bao gồm những nguyên liệu nào?",
          options: ["Cát, xi măng và nước", "Cát, đá dăm, xi măng và nước", "Thép, xi măng và đá", "Đá hộc, cát và nước vôi"],
          ans: 0,
          exp: "Vữa xây trát gồm hỗn hợp cát mịn, xi măng và nước trộn đều theo tỉ lệ. Nếu thêm đá dăm vào thì sẽ tạo thành bê tông."
        }
      },
      {
        id: 3,
        title: "Bài 3. Ngôi nhà thông minh",
        pages: "trang 16–19",
        objectives: [
          "Hiểu và trình bày được khái niệm ngôi nhà thông minh (Smart Home).",
          "Kể tên được các hệ thống tự động, bán tự động và nhận diện các đặc điểm ưu việt của nhà thông minh.",
          "Đề xuất được các giải pháp sử dụng năng lượng tiết kiệm và hiệu quả trong gia đình."
        ],
        knowledge: `
### 1. Khái niệm Ngôi nhà thông minh (Smart Home)
Ngôi nhà thông minh là ngôi nhà được trang bị hệ thống điều khiển tự động hoặc bán tự động đối với các thiết bị đồ dùng điện và tiện ích trong nhà; có khả năng kết nối mạng (Internet of Things - IoT), giúp cuộc sống của con người trở nên tiện nghi, an toàn, thoải mái và tiết kiệm năng lượng tối đa.

### 2. Các hệ thống chính trong ngôi nhà thông minh
- **Hệ thống chiếu sáng thông minh:** Đèn tự động bật khi có người bước vào và tự tắt khi người rời đi (dùng cảm biến chuyển động hồng ngoại PIR); tự động điều chỉnh độ sáng theo cường độ ánh sáng môi trường; điều khiển bật/tắt toàn bộ đèn từ xa qua điện thoại thông minh hoặc giọng nói.
- **Hệ thống kiểm soát nhiệt độ:** Điều hòa không khí, máy lọc không khí tự động kích hoạt điều chỉnh nhiệt độ và độ ẩm phòng ở mức lý tưởng (25–26°C); hẹn giờ bật trước khi gia chủ về nhà.
- **Hệ thống an ninh, an toàn và giám sát:**
  + Camera an ninh giám sát 24/7 ghi hình và gửi cảnh báo về điện thoại khi phát hiện chuyển động bất thường.
  + Cửa khóa điện tử mở bằng vân tay, thẻ từ, khuôn mặt (Face ID) hoặc mật mã.
  + Cảm biến khói, cảm biến rò rỉ khí gas tự động hú còi báo động và gửi thông báo khẩn cấp, kích hoạt vòi phun nước dập lửa.
- **Hệ thống điều khiển thiết bị gia dụng:** Rèm cửa tự động đóng/mở theo giờ hoặc thời tiết nắng mưa; robot hút bụi tự động lau dọn sàn nhà theo lịch trình; bình nóng lạnh, nồi cơm điện hẹn giờ nấu từ xa.
- **Hệ thống giải trí thông minh:** Loa thông minh phát nhạc theo yêu cầu bằng giọng nói (tiếng Việt/tiếng Anh); tivi thông minh tự động kết nối và gợi ý chương trình yêu thích.

### 3. Các đặc điểm vượt trội của ngôi nhà thông minh
1. **Tiện ích và hiện đại:** Các thiết bị có thể hoạt động hoàn toàn tự động theo kịch bản cài đặt sẵn, hoặc người dùng dễ dàng điều khiển bằng giọng nói, cử chỉ hoặc từ xa qua ứng dụng di động dù đang ở bất cứ đâu.
2. **An ninh và an toàn cao:** Giúp chủ nhà luôn kiểm soát tình trạng ngôi nhà mọi lúc mọi nơi; tự động ngăn chặn hoặc phát hiện sớm các nguy cơ đột nhập, cháy nổ, ngập nước, chập điện.
3. **Tiết kiệm năng lượng:** Kiểm soát chặt chẽ việc tiêu thụ điện năng; tự động ngắt thiết bị khi không có người sử dụng; tối ưu hóa thời gian hoạt động của máy điều hòa, bình nóng lạnh.

### 4. Sử dụng năng lượng tiết kiệm và hiệu quả trong gia đình
Dù là nhà thông minh hay nhà ở thông thường, việc tiết kiệm năng lượng có ý nghĩa to lớn bảo vệ môi trường và giảm chi phí:
- **Tận dụng nguồn năng lượng tự nhiên:** Thiết kế cửa sổ, giếng trời đón ánh sáng mặt trời ban ngày thay vì bật đèn; bố trí cửa thông gió chéo để đón gió mát tự nhiên, giảm dùng quạt và điều hòa.
- **Lựa chọn thiết bị tiết kiệm điện:** Mua sắm bóng đèn LED, thiết bị có dán nhãn năng lượng hiệu suất cao (nhiều sao, nhãn 5 sao).
- **Thói quen sử dụng thông minh:** Tắt đèn, quạt, tivi khi ra khỏi phòng; rút phích cắm các thiết bị ở chế độ chờ (standby); cài đặt điều hòa ở mức 26–28°C kết hợp quạt gió nhẹ.
- **Ứng dụng năng lượng tái tạo:** Lắp đặt bình nước nóng năng lượng mặt trời (thái dương năng), hệ thống pin năng lượng mặt trời áp mái.
`,
        diagramSvg: `
<svg viewBox="0 0 700 320" class="w-full max-w-2xl mx-auto rounded-2xl bg-slate-900 border border-cyan-500/30 p-4 shadow-xl" xmlns="http://www.w3.org/2000/svg">
  <!-- Center: Smart Hub / Phone -->
  <circle cx="350" cy="160" r="55" fill="#0891b2" stroke="#22d3ee" stroke-width="3" opacity="0.9"/>
  <text x="350" y="155" fill="#ffffff" font-size="14" font-weight="black" text-anchor="middle">SMART HUB</text>
  <text x="350" y="175" fill="#cffafe" font-size="11" text-anchor="middle">Bộ điều khiển trung tâm</text>

  <!-- Node 1: Chiếu sáng -->
  <line x1="350" y1="105" x2="350" y2="45" stroke="#22d3ee" stroke-width="2" stroke-dasharray="4"/>
  <circle cx="350" cy="45" r="32" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
  <text x="350" y="45" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">💡 Đèn LED</text>
  <text x="350" y="60" fill="#94a3b8" font-size="9" text-anchor="middle">Tự động bật/tắt</text>

  <!-- Node 2: Khóa an ninh -->
  <line x1="295" y1="160" x2="160" y2="160" stroke="#22d3ee" stroke-width="2" stroke-dasharray="4"/>
  <circle cx="120" cy="160" r="38" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
  <text x="120" y="155" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">🔒 Khóa thông minh</text>
  <text x="120" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Vân tay / Face ID</text>

  <!-- Node 3: Camera giám sát -->
  <line x1="310" y1="120" x2="190" y2="70" stroke="#22d3ee" stroke-width="2" stroke-dasharray="4"/>
  <circle cx="170" cy="60" r="32" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
  <text x="170" y="60" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">📹 Camera AI</text>
  <text x="170" y="73" fill="#94a3b8" font-size="8" text-anchor="middle">Cảnh báo kẻ gian</text>

  <!-- Node 4: Điều hòa nhiệt độ -->
  <line x1="405" y1="160" x2="540" y2="160" stroke="#22d3ee" stroke-width="2" stroke-dasharray="4"/>
  <circle cx="580" cy="160" r="38" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="580" y="155" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">❄️ Điều hòa tự động</text>
  <text x="580" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Duy trì 26°C</text>

  <!-- Node 5: Cảm biến cháy/khói -->
  <line x1="390" y1="120" x2="510" y2="70" stroke="#22d3ee" stroke-width="2" stroke-dasharray="4"/>
  <circle cx="530" cy="60" r="32" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
  <text x="530" y="60" fill="#fdba74" font-size="10" font-weight="bold" text-anchor="middle">🚨 Báo khói/Gas</text>
  <text x="530" y="73" fill="#94a3b8" font-size="8" text-anchor="middle">Báo động từ xa</text>

  <!-- Node 6: Tiết kiệm năng lượng -->
  <line x1="350" y1="215" x2="350" y2="265" stroke="#22d3ee" stroke-width="2" stroke-dasharray="4"/>
  <rect x="250" y="265" width="200" height="40" rx="10" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
  <text x="350" y="285" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">🌱 TIẾT KIỆM NĂNG LƯỢNG</text>
  <text x="350" y="298" fill="#d1fae5" font-size="9" text-anchor="middle">Tối ưu điện năng tiêu thụ</text>
</svg>
`,
        memorize: "Ngôi nhà thông minh (Smart Home) trang bị các hệ thống điều khiển tự động / bán tự động kết nối mạng. Ba đặc điểm chính: Tiện nghi (điều khiển từ xa, giọng nói), An toàn (giám sát, cảnh báo cháy nổ), Tiết kiệm năng lượng. Luôn kết hợp thiết kế tận dụng ánh sáng và gió tự nhiên.",
        exercises: [
          "1. Nêu khái niệm ngôi nhà thông minh và chỉ ra 3 đặc điểm nổi bật nhất của nó so với ngôi nhà truyền thống.",
          "2. Hãy mô tả hoạt động của hệ thống chiếu sáng thông minh khi có người đi vào hành lang ban đêm.",
          "3. Kể tên 4 thói quen hằng ngày em có thể làm ngay để giúp gia đình tiết kiệm điện năng và bảo vệ môi trường."
        ],
        practical: "Đóng vai một kĩ sư thiết kế: Hãy đề xuất 2 tính năng thông minh đơn giản, chi phí hợp lý mà em muốn lắp đặt cho căn phòng ngủ hoặc phòng học của mình (ví dụ: công tắc hẹn giờ tắt quạt, đèn học tự động bật khi ngồi vào bàn).",
        quiz: {
          q: "Hệ thống chiếu sáng trong ngôi nhà thông minh có khả năng đặc biệt nào sau đây?",
          options: ["Tự động bật đèn khi có người và tự tắt khi người rời đi", "Chỉ bật được khi gạt cầu dao bằng tay", "Phải dùng bật lửa để mồi sáng", "Không thể điều khiển qua điện thoại"],
          ans: 0,
          exp: "Chiếu sáng thông minh sử dụng cảm biến để nhận biết sự hiện diện của con người, tự động bật khi có người và tắt khi không có người, giúp vừa tiện ích vừa tiết kiệm điện."
        }
      }
    ]
  },
  {
    id: 2,
    name: "Chương II. Bảo quản và chế biến thực phẩm",
    color: "from-emerald-600 via-teal-600 to-green-600",
    border: "border-emerald-500",
    desc: "Hiểu giá trị dinh dưỡng của thực phẩm; nguyên tắc ăn uống khoa học; các phương pháp bảo quản và chế biến; thực hành làm món nộm/salad và dự án Bữa ăn kết nối yêu thương.",
    lessons: [
      {
        id: 4,
        title: "Bài 4. Thực phẩm và dinh dưỡng",
        pages: "trang 22–25",
        objectives: [
          "Nhận biết và phân loại được 5 nhóm thực phẩm chính cùng vai trò đối với cơ thể.",
          "Nêu được chức năng của các loại vitamin và chất khoáng thiết yếu.",
          "Trình bày và vận dụng được các nguyên tắc ăn uống khoa học, hợp lý."
        ],
        knowledge: `
### 1. Các nhóm thực phẩm chính và vai trò
Thực phẩm cung cấp các chất dinh dưỡng cần thiết để nuôi dưỡng cơ thể, duy trì sự sống, phát triển thể chất và trí tuệ. Căn cứ vào chất dinh dưỡng chủ yếu, thực phẩm được chia thành 5 nhóm:
| Nhóm thực phẩm | Thực phẩm tiêu biểu | Vai trò chính đối với cơ thể |
| :--- | :--- | :--- |
| **Giàu tinh bột, chất đường và chất xơ** | Gạo, ngô, khoai, sắn, bánh mì, bún, mía, hoa quả ngọt, rau xanh... | - Tinh bột và đường là nguồn cung cấp **năng lượng chính** cho mọi hoạt động thể lực và trí não.<br>- Chất xơ hỗ trợ hệ tiêu hóa hoạt động khỏe mạnh, chống táo bón. |
| **Giàu chất đạm (Protein)** | Thịt bò, lợn, gà, cá, tôm, trứng, sữa, đậu nành, đậu phụ, các loại hạt... | - Là nguyên liệu chính để **xây dựng tế bào, cơ bắp, xương, da**, giúp cơ thể lớn lên và sửa chữa các mô bị tổn thương.<br>- Tạo kháng thể chống bệnh tật. |
| **Giàu chất béo (Lipid)** | Mỡ động vật, dầu mè, dầu đậu nành, dầu hướng dương, bơ, lạc (đậu phộng), vừng... | - Cung cấp và dự trữ **năng lượng đậm đặc** (1g chất béo cung cấp 9 kcal, gấp đôi đạm và bột đường).<br>- Giúp hòa tan và hấp thu các vitamin tan trong dầu (A, D, E, K). |
| **Giàu vitamin** | Rau cải, cà rốt, cà chua, cam, bưởi, chuối, đu đủ, xoài, ớt chuông... | - Tham gia điều hòa các quá trình chuyển hóa sinh học.<br>- Tăng cường sức đề kháng, bảo vệ cơ thể khỏi bệnh tật, làm chậm lão hóa. |
| **Giàu chất khoáng** | Hải sản (tôm, cua, cá, sò), sữa, trứng, rau dền, muối i-ốt, thịt đỏ... | - Tham gia cấu tạo xương, răng, huyết sắc tố trong máu.<br>- Điều hòa nhịp tim, cân bằng nước và áp suất thẩm thấu trong cơ thể. |

### 2. Một số vitamin và chất khoáng thiết yếu
- **Vitamin A:** Giúp mắt sáng khỏe, bảo vệ giác mạc, tăng cường miễn dịch (có nhiều trong gấc, cà rốt, bí đỏ, gan động vật). Thiếu vitamin A gây bệnh quáng gà, khô giác mạc.
- **Vitamin nhóm B (B1, B2, B6, B12):** Tham gia chuyển hóa năng lượng, nuôi dưỡng hệ thần kinh, hỗ trợ tiêu hóa (có trong ngũ cốc nguyên cám, thịt nạc, trứng).
- **Vitamin C:** Tăng sức đề kháng, bền thành mạch máu, hỗ trợ hấp thu sắt, làm lành vết thương (có trong cam, chanh, ổi, kiwi, ớt chuông).
- **Vitamin D:** Giúp cơ thể hấp thu calcium và phospho để phát triển xương, răng (có trong dầu cá, lòng đỏ trứng, cơ thể tự tổng hợp khi tắm nắng sáng sớm). Thiếu vitamin D trẻ em bị còi xương, người già bị loãng xương.
- **Vitamin E:** Chất chống oxy hóa mạnh mẽ, bảo vệ tế bào và làm đẹp da (có trong dầu thực vật, mầm lúa mì, hạt hướng dương).
- **Calcium (Canxi):** Thành phần cốt lõi tạo xương và răng chắc khỏe (có trong cua, tôm tép, sữa, vừng).
- **Sắt (Iron):** Tham gia tạo hemoglobin của hồng cầu vận chuyển oxy nuôi cơ thể (có trong tiết, gan, thịt bò, rau muống). Thiếu sắt gây bệnh thiếu máu, chóng mặt, mệt mỏi.
- **Iodine (I-ốt):** Cần thiết cho tuyến giáp tổng hợp hormone điều hòa phát triển thể chất và trí tuệ (có trong muối i-ốt, hải sản, rong biển). Thiếu i-ốt gây bệnh bướu cổ và suy giảm trí tuệ.

### 3. Nguyên tắc ăn uống khoa học và hợp lí
1. **Ăn đủ bữa, đúng giờ:** Mỗi ngày cần ăn 3 bữa chính (sáng, trưa, tối), không bỏ bữa sáng. Các bữa ăn cách nhau khoảng 4–5 giờ.
2. **Phối hợp đa dạng nhiều loại thực phẩm:** Mỗi bữa ăn cần có đủ đại diện của 4 nhóm chất chính (bột đường, đạm, béo, vitamin & khoáng chất).
3. **Ăn với lượng phù hợp:** Không ăn quá no cũng không để quá đói, cân đối giữa năng lượng nạp vào và năng lượng tiêu hao cho hoạt động thể lực.
4. **Đảm bảo an toàn vệ sinh thực phẩm:** Ăn chín, uống sôi, không ăn thực phẩm ôi thiu, nấm mốc hoặc quá hạn sử dụng.
5. **Uống đủ nước:** Uống từ 1,5 đến 2 lít nước sạch mỗi ngày tùy theo thể trạng và thời tiết.
`,
        diagramSvg: `
<svg viewBox="0 0 700 280" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Tháp dinh dưỡng minh họa -->
  <polygon points="350,20 180,240 520,240" fill="#f8fafc" stroke="#10b981" stroke-width="2"/>
  
  <!-- Tầng 1: Đỉnh tháp - Muối & Đường -->
  <polygon points="350,20 315,70 385,70" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <text x="350" y="50" fill="#7f1d1d" font-size="10" font-weight="bold" text-anchor="middle">ĂN HẠN CHẾ</text>
  <text x="350" y="62" fill="#991b1b" font-size="8" text-anchor="middle">Muối (&lt;5g), Đường (&lt;15g)</text>

  <!-- Tầng 2: Dầu mỡ -->
  <polygon points="315,70 385,70 415,115 285,115" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="350" y="93" fill="#78350f" font-size="10" font-weight="bold" text-anchor="middle">ĂN CÓ MỨC ĐỘ</text>
  <text x="350" y="106" fill="#92400e" font-size="8" text-anchor="middle">Dầu thực vật, mỡ, bơ</text>

  <!-- Tầng 3: Chất đạm -->
  <polygon points="285,115 415,115 450,165 250,165" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <text x="350" y="138" fill="#7c2d12" font-size="11" font-weight="bold" text-anchor="middle">ĂN VỪA PHẢI</text>
  <text x="350" y="152" fill="#9a3412" font-size="9" text-anchor="middle">Thịt, cá, trứng, tôm, sữa, đậu phụ</text>

  <!-- Tầng 4: Rau quả -->
  <polygon points="250,165 450,165 485,210 215,210" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="350" y="185" fill="#14532d" font-size="11" font-weight="bold" text-anchor="middle">ĂN ĐỦ (RAU XANH &amp; HOA QUẢ)</text>
  <text x="350" y="200" fill="#166534" font-size="9" text-anchor="middle">300g rau xanh + 200g trái cây tươi/ngày</text>

  <!-- Tầng 5: Đáy tháp - Lương thực bột đường -->
  <polygon points="215,210 485,210 520,250 180,250" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="350" y="228" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">ĂN ĐỦ (LƯƠNG THỰC CUNG CẤP NĂNG LƯỢNG CHÍNH)</text>
  <text x="350" y="242" fill="#1d4ed8" font-size="9" text-anchor="middle">Gạo, ngô, khoai, bún, mì bánh (khoảng 300g/ngày)</text>

  <text x="350" y="272" fill="#475569" font-size="11" font-weight="bold" text-anchor="middle">💧 Uống đủ 1.5 - 2 lít nước mỗi ngày &amp; Tích cực vận động thể lực</text>
</svg>
`,
        memorize: "Thực phẩm gồm 5 nhóm chính: Bột đường (năng lượng chính), Đạm (phát triển tế bào cơ bắp), Chất béo (năng lượng đậm đặc, hòa tan vitamin), Vitamin và Chất khoáng (điều hòa chuyển hóa). Ăn uống khoa học: đủ 3 bữa, đa dạng thực phẩm, hạn chế muối đường, uống đủ nước.",
        exercises: [
          "1. Nêu vai trò chính của chất đạm và chất bột đường đối với lứa tuổi học sinh THCS (11-12 tuổi).",
          "2. Kể tên các loại vitamin tan trong dầu và giải thích tại sao cần ăn đủ chất béo để cơ thể hấp thu các vitamin này?",
          "3. Thiếu các chất khoáng sau đây sẽ dẫn đến hậu quả gì: Sắt, Canxi, I-ốt?"
        ],
        practical: "Ghi lại thực đơn bữa ăn trưa hôm nay của gia đình em và phân tích xem bữa ăn đã có đủ 4 nhóm chất chính chưa. Nếu thiếu nhóm chất nào, hãy đề xuất 1 món ăn bổ sung phù hợp.",
        quiz: {
          q: "Nhóm thực phẩm nào đóng vai trò là nguồn cung cấp năng lượng chính cho mọi hoạt động thể lực và trí não của con người?",
          options: ["Nhóm giàu tinh bột, chất đường", "Nhóm giàu chất khoáng", "Nhóm giàu vitamin", "Nhóm giàu muối khoáng"],
          ans: 0,
          exp: "Chất bột đường (Glucid/Carbohydrate) chiếm khoảng 60-65% tổng năng lượng khẩu phần ăn hàng ngày của con người."
        }
      },
      {
        id: 5,
        title: "Bài 5. Phương pháp bảo quản và chế biến thực phẩm",
        pages: "trang 26–32",
        objectives: [
          "Trình bày được mục đích và các phương pháp bảo quản thực phẩm phổ biến.",
          "Phân biệt được các phương pháp chế biến thực phẩm có sử dụng nhiệt và không sử dụng nhiệt.",
          "Thực hành đúng quy trình làm món nộm rau muống tôm thịt hoặc salad hoa quả đảm bảo an toàn vệ sinh."
        ],
        knowledge: `
### 1. Phương pháp bảo quản thực phẩm
Bảo quản thực phẩm nhằm ức chế hoạt động của vi sinh vật gây hại và enzyme phân hủy, hạn chế hư hỏng, kéo dài thời gian sử dụng mà vẫn giữ được tối đa chất lượng dinh dưỡng.
Các phương pháp phổ biến:
- **Làm lạnh:** Bảo quản thực phẩm ở nhiệt độ thấp, **khoảng 1°C đến 7°C** (ngăn mát tủ lạnh). Phương pháp này làm chậm tốc độ sinh sản của vi khuẩn, thích hợp cho rau củ quả, trứng, thức ăn chín dùng trong vài ngày.
- **Đông lạnh:** Bảo quản thực phẩm ở nhiệt độ **dưới 0°C** (thường từ -18°C ở ngăn đá). Nhiệt độ này đóng băng nước trong tế bào, ức chế gần như hoàn toàn vi khuẩn, bảo quản thịt, cá, tôm được vài tháng.
- **Làm khô (phơi, sấy):** Làm bay hơi nước trong thực phẩm xuống mức dưới 10–15%, vi khuẩn và nấm mốc không thể phát triển (ví dụ: cá khô, tôm khô, mực khô, nấm hương, măng khô).
- **Ướp (muối hoặc đường):** Sử dụng nồng độ muối cao (ướp muối cá, thịt) hoặc đường cao (làm mứt, hoa quả ngâm đường) để tạo áp suất thẩm thấu cao hút nước từ tế bào vi sinh vật, làm chúng bị mất nước và chết.
- **Hút chân không:** Loại bỏ không khí trong bao bì, ngăn chặn vi khuẩn hiếu khí và quá trình oxy hóa chất béo.

### 2. An toàn vệ sinh thực phẩm trong chế biến
- Lựa chọn thực phẩm tươi sống, có nguồn gốc rõ ràng, không dập nát, ôi thiu.
- Giữ vệ sinh: Rửa sạch tay bằng xà phòng trước khi chế biến; giữ thớt, dao, bát đĩa sạch sẽ.
- Tránh nhiễm khuẩn chéo: Dùng dao thớt riêng biệt cho thực phẩm sống và thực phẩm chín.
- Nấu chín kĩ thực phẩm và ăn ngay sau khi nấu; bảo quản thức ăn thừa trong tủ lạnh không quá 2 ngày và phải đun sôi lại trước khi ăn.

### 3. Phương pháp chế biến thực phẩm có sử dụng nhiệt
- **Luộc:** Làm chín thực phẩm trong môi trường nước sôi ngập. Ưu điểm: đơn giản, giữ hương vị tự nhiên, ít chất béo.
- **Kho:** Làm chín thực phẩm trong lượng nước vừa phải với gia vị mặn ngọt đậm đà, đun nhỏ lửa trong thời gian dài (cá kho, thịt kho tàu).
- **Nướng:** Làm chín thực phẩm bằng sức nóng trực tiếp của nhiệt (than hoa, bếp nướng điện, lò nướng), tạo mùi thơm đặc trưng hấp dẫn.
- **Rán (chiên):** Làm chín thực phẩm trong chất béo (dầu ăn, mỡ) ở nhiệt độ cao (160–180°C), tạo lớp vỏ vàng giòn rụm.

### 4. Phương pháp chế biến thực phẩm không sử dụng nhiệt
- **Trộn hỗn hợp (Nộm / Gỏi / Salad):** Kết hợp các nguyên liệu thực vật (rau củ tươi) và động vật (tôm, thịt luộc xé) đã sơ chế sạch cùng nước sốt chua ngọt (chanh, tỏi, ớt, đường, nước mắm). Món ăn giữ được độ tươi giòn và vitamin.
- **Muối chua (Lên men lactic):** Ngâm rau củ trong dung dịch nước muối loãng có đường để vi khuẩn lactic lên men chuyển hóa đường thành acid lactic, tạo vị chua dịu dễ tiêu hóa (dưa cải muối, cà pháo, kim chi).

### 5. Thực hành: Làm món Nộm rau muống tôm thịt
- **Nguyên liệu:** Rau muống non (1 mớ), tôm sú tươi (200g), thịt ba chỉ (150g), lạc (đậu phộng) rang giã dập, chanh, ớt, tỏi, đường, nước mắm, rau kinh giới.
- **Quy trình 5 bước:**
  1. *Sơ chế:* Rau muống nhặt bỏ lá già, chẻ cọng, ngâm nước muối loãng rồi chần nhanh qua nước sôi, vớt ra ngâm ngay vào nước đá lạnh để giữ màu xanh và độ giòn; tôm thịt luộc chín (thịt thái mỏng, tôm bóc vỏ chẻ đôi).
  2. *Pha nước trộn nộm:* 2 thìa nước mắm + 2 thìa đường + 2 thìa nước cốt chanh + tỏi ớt băm nhỏ, khuấy tan đều vị chua cay mặn ngọt hài hòa.
  3. *Trộn:* Cho rau muống, tôm, thịt vào âu lớn, rưới 2/3 nước trộn, đảo đều nhẹ tay để ngấm 5–10 phút. Chắt bỏ bớt nước tiết ra.
  4. *Trình bày:* Bày nộm ra đĩa, rắc rau thơm và lạc rang vàng lên trên.
  5. *Đánh giá:* Rau muống xanh giòn, tôm thịt ngọt bùi, vị chua cay mặn ngọt cân đối, không bị chảy nước đọng đáy đĩa.
`,
        diagramSvg: `
<svg viewBox="0 0 700 230" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Nhiệt độ bảo quản lạnh -->
  <g transform="translate(40, 20)">
    <rect width="280" height="85" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="20" y="32" fill="#1d4ed8" font-size="13" font-weight="bold">❄️ LÀM LẠNH (Ngăn mát tủ lạnh)</text>
    <text x="20" y="52" fill="#0369a1" font-size="12" font-weight="bold">Nhiệt độ: 1°C đến 7°C</text>
    <text x="20" y="72" fill="#475569" font-size="10">Làm chậm vi khuẩn; dùng cho rau quả, đồ chín ngắn ngày</text>
  </g>

  <!-- Nhiệt độ đông lạnh -->
  <g transform="translate(380, 20)">
    <rect width="280" height="85" rx="12" fill="#ecfeff" stroke="#06b6d4" stroke-width="1.5"/>
    <text x="20" y="32" fill="#0e7490" font-size="13" font-weight="bold">🧊 ĐÔNG LẠNH (Ngăn đá tủ lạnh)</text>
    <text x="20" y="52" fill="#0369a1" font-size="12" font-weight="bold">Nhiệt độ: Dưới 0°C (thường -18°C)</text>
    <text x="20" y="72" fill="#475569" font-size="10">Ức chế hoàn toàn vi sinh vật; bảo quản thịt cá dài ngày</text>
  </g>

  <!-- 4 phương pháp có nhiệt vs không nhiệt -->
  <g transform="translate(40, 125)">
    <rect width="280" height="85" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="20" y="30" fill="#991b1b" font-size="12" font-weight="bold">🔥 CÓ SỬ DỤNG NHIỆT</text>
    <text x="20" y="52" fill="#475569" font-size="11">Luộc (nước) • Kho (nước sền sệt)</text>
    <text x="20" y="72" fill="#475569" font-size="11">Nướng (nhiệt trực tiếp) • Rán (dầu mỡ)</text>
  </g>

  <g transform="translate(380, 125)">
    <rect width="280" height="85" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
    <text x="20" y="30" fill="#14532d" font-size="12" font-weight="bold">🥗 KHÔNG SỬ DỤNG NHIỆT</text>
    <text x="20" y="52" fill="#475569" font-size="11">Trộn hỗn hợp (nộm, gỏi, salad chua ngọt)</text>
    <text x="20" y="72" fill="#475569" font-size="11">Muối chua (dưa cải, cà pháo lên men lactic)</text>
  </g>
</svg>
`,
        memorize: "Bảo quản thực phẩm: Làm lạnh (1–7°C), Đông lạnh (<0°C), Làm khô, Ướp muối/đường. Chế biến có nhiệt: Luộc, kho, nướng, rán. Chế biến không nhiệt: Trộn nộm/salad, muối chua lên men. Nguyên tắc vàng: Tránh nhiễm khuẩn chéo bằng dao thớt riêng cho đồ sống và đồ chín.",
        exercises: [
          "1. Nêu sự khác nhau cơ bản giữa bảo quản làm lạnh và bảo quản đông lạnh về nhiệt độ và thời gian bảo quản.",
          "2. Tại sao khi làm món nộm rau muống, sau khi chần qua nước sôi ta cần ngâm ngay vào bát nước đá lạnh?",
          "3. Nêu 4 biện pháp để phòng tránh nhiễm khuẩn chéo trong gian bếp gia đình."
        ],
        practical: "Thực hành tại nhà: Cùng bố mẹ làm một đĩa salad hoa quả (hoặc đĩa nộm dưa chuột tai heo/thịt luộc), chụp ảnh sản phẩm và ghi lại các bước thực hiện đảm bảo an toàn vệ sinh thực phẩm.",
        quiz: {
          q: "Theo nội dung sách giáo khoa Công nghệ 6, phương pháp bảo quản làm lạnh thực phẩm thường được duy trì ở khoảng nhiệt độ nào?",
          options: ["1°C đến 7°C", "Dưới 0°C", "15°C đến 25°C", "37°C đến 40°C"],
          ans: 0,
          exp: "Bảo quản làm lạnh được duy trì ở nhiệt độ thấp từ 1°C đến 7°C (ngăn mát tủ lạnh), giúp ức chế sự sinh sôi của vi sinh vật."
        }
      },
      {
        id: 6,
        title: "Bài 6. Dự án: Bữa ăn kết nối yêu thương",
        pages: "trang 33–37",
        objectives: [
          "Vận dụng kiến thức dinh dưỡng để thiết kế được một thực đơn bữa ăn hợp lý cho gia đình.",
          "Tính toán được sơ bộ nhu cầu năng lượng (kcal) và ước tính chi phí tài chính cho bữa ăn.",
          "Rèn luyện kỹ năng làm việc nhóm, tinh thần trách nhiệm và gắn kết yêu thương các thành viên gia đình."
        ],
        knowledge: `
### 1. Nhiệm vụ dự án
Thiết kế một thực đơn bữa ăn hoàn chỉnh (bữa trưa hoặc bữa tối) cho các thành viên trong gia đình em, đảm bảo:
- Đầy đủ 4 nhóm chất dinh dưỡng và cân đối năng lượng.
- Phù hợp với sở thích, lứa tuổi và tình trạng sức khỏe của từng thành viên.
- Phù hợp với điều kiện kinh tế và văn hóa ẩm thực gia đình Việt Nam.

### 2. Quy trình thực hiện dự án theo 5 bước chuẩn
1. **Bước 1: Tìm hiểu thông tin gia đình**
   - Số lượng thành viên, giới tính, độ tuổi và mức độ lao động (lao động nhẹ, vừa hay nặng).
   - Xác định nhu cầu năng lượng trung bình:
     + Trẻ em 10–12 tuổi: ~ 2.100 – 2.300 kcal/ngày (bữa chính trưa/tối chiếm khoảng 30–35% = ~700 kcal).
     + Người lớn làm việc văn phòng: ~ 2.000 – 2.400 kcal/ngày.
     + Người cao tuổi: ~ 1.700 – 1.900 kcal/ngày.
2. **Bước 2: Xây dựng thực đơn bữa ăn cân đối**
   - Bữa ăn tiêu chuẩn gồm các món:
     + *Món cung cấp chất bột đường:* Cơm trắng (gạo tẻ).
     + *Món chính giàu đạm & béo:* Thịt kho tàu / cá sốt cà chua / gà rang gừng / tôm rim thịt.
     + *Món rau cung cấp vitamin & khoáng chất:* Rau muống luộc / cải xào nấm / dưa góp.
     + *Món canh giải nhiệt:* Canh cua rau đay / canh sườn nấu sấu / canh chua cá lóc.
     + *Món tráng miệng:* Hoa quả tươi (cam, chuối, dưa hấu).
3. **Bước 3: Xác định khối lượng thực phẩm cần mua (cho 4 người)**
   - Gạo tẻ: 400g (khoảng 3–4 bát cơm đầy).
   - Thịt nạc / cá / tôm: 400g – 500g.
   - Rau củ quả nấu canh & luộc: 500g – 600g.
   - Gia vị: Dầu ăn, nước mắm, hành, tỏi, gừng, muối.
4. **Bước 4: Tính toán năng lượng và dự toán chi phí**
   - Ước tính năng lượng: Cơm (130 kcal/100g chín), Thịt nạc (145 kcal/100g), Cá (100–120 kcal/100g), Rau xanh (20–30 kcal/100g). Tổng bữa ăn khoảng 650–750 kcal/người.
   - Lập bảng dự toán chi phí chi tiết từng món.
5. **Bước 5: Hoàn thiện báo cáo và trình bày thực đơn**
   - Vẽ bảng thực đơn trang trí đẹp mắt, nêu cảm nghĩ về ý nghĩa bữa cơm gia đình sum họp.
`,
        diagramSvg: `
<svg viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Mâm cơm gia đình 4 món chuẩn -->
  <circle cx="350" cy="110" r="95" fill="#f8fafc" stroke="#10b981" stroke-width="4"/>
  <text x="350" y="30" fill="#047857" font-size="12" font-weight="black" text-anchor="middle">MÂM CƠM KẾT NỐI YÊU THƯƠNG (4 MÓN CÂN ĐỐI)</text>
  
  <!-- Bát cơm ở giữa -->
  <circle cx="350" cy="110" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <text x="350" y="113" fill="#854d0e" font-size="10" font-weight="bold" text-anchor="middle">Âu cơm</text>
  <text x="350" y="125" fill="#a16207" font-size="8" text-anchor="middle">(Bột đường)</text>

  <!-- Món đạm trên -->
  <circle cx="350" cy="55" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="350" y="58" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">Thịt kho cá</text>

  <!-- Món xào/luộc trái -->
  <circle cx="290" cy="110" r="22" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="113" fill="#14532d" font-size="9" font-weight="bold" text-anchor="middle">Rau luộc</text>

  <!-- Bát canh phải -->
  <circle cx="410" cy="110" r="22" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="410" y="113" fill="#155e75" font-size="9" font-weight="bold" text-anchor="middle">Bát canh</text>

  <!-- Đĩa hoa quả dưới -->
  <circle cx="350" cy="165" r="20" fill="#ffedd5" stroke="#f97316" stroke-width="1.5"/>
  <text x="350" y="168" fill="#9a3412" font-size="8" font-weight="bold" text-anchor="middle">Hoa quả</text>

  <text x="120" y="110" fill="#64748b" font-size="11" text-anchor="middle">💡 Đủ 4 nhóm chất<br/>Đạm - Bột - Béo - Xơ</text>
  <text x="580" y="110" fill="#64748b" font-size="11" text-anchor="middle">❤️ Không khí đầm ấm<br/>Gắn kết gia đình</text>
</svg>
`,
        memorize: "Dự án Bữa ăn kết nối yêu thương gồm 5 bước: 1. Tìm hiểu gia đình → 2. Xây dựng thực đơn → 3. Xác định khối lượng thực phẩm → 4. Tính năng lượng và chi phí → 5. Hoàn thiện thực đơn. Một bữa ăn chuẩn gồm món cơm, món giàu đạm, món rau, món canh và hoa quả tráng miệng.",
        exercises: [
          "1. Hãy liệt kê 5 bước thực hiện dự án thiết kế bữa ăn cho gia đình.",
          "2. Tại sao trong thực đơn gia đình cần có cả món xào/kho và món canh thanh đạm?",
          "3. Giả sử gia đình có 4 người (bố, mẹ, 2 con), hãy ước tính khối lượng thịt lợn và rau muống cần mua cho một bữa ăn."
        ],
        practical: "Thực hiện dự án: Lập bảng thực đơn bữa cơm chủ nhật cho gia đình em, ghi rõ các món ăn, nguyên liệu, khối lượng và ước tính tổng tiền đi chợ.",
        quiz: {
          q: "Thực đơn một bữa ăn trưa hợp lí và cân đối cho gia đình người Việt Nam thường bao gồm cơ cấu các món nào?",
          options: ["Cơm tẻ, món giàu đạm (kho/rán), món rau luộc/xào, bát canh và món tráng miệng", "Chỉ cần 3 món thịt nướng và khoai tây chiên", "Chỉ uống nước ngọt và ăn bánh kẹo", "Toàn bộ là rau xanh không có chất đạm"],
          ans: 0,
          exp: "Bữa ăn cân đối truyền thống của người Việt gồm: món tinh bột (cơm), món giàu đạm (thịt/cá/trứng), món rau củ, món canh và hoa quả tráng miệng."
        }
      }
    ]
  },
  {
    id: 3,
    name: "Chương III. Trang phục và thời trang",
    color: "from-rose-600 via-pink-600 to-purple-600",
    border: "border-rose-500",
    desc: "Tìm hiểu vai trò, phân loại trang phục; đặc tính các loại vải sợi; kỹ năng phối hợp, sử dụng và bảo quản trang phục; giải mã kí hiệu chăm sóc quần áo và các phong cách thời trang.",
    lessons: [
      {
        id: 7,
        title: "Bài 7. Trang phục trong đời sống",
        pages: "trang 40–43",
        objectives: [
          "Trình bày được vai trò và các cách phân loại trang phục trong đời sống.",
          "Phân tích được 4 đặc điểm cơ bản của trang phục (chất liệu, kiểu dáng, màu sắc, đường nét).",
          "Nhận biết nguồn gốc, tính chất và phân loại các loại vải may mặc thông dụng."
        ],
        knowledge: `
### 1. Vai trò của trang phục
Trang phục bao gồm quần áo và các phụ kiện đi kèm (giày, dép, mũ, nón, khăn, thắt lưng, găng tay...). Trang phục có hai vai trò then chốt:
- **Bảo vệ cơ thể:** Che chở cơ thể tránh các tác hại của môi trường thời tiết (nắng cháy, mưa gió, bụi bẩn, không khí lạnh, tia cực tím); bảo hộ người lao động trước các hóa chất, tia lửa hàn hoặc tai nạn nghề nghiệp.
- **Làm đẹp và thể hiện bản thân:** Tôn vẻ đẹp ngoại hình của con người, thể hiện khiếu thẩm mĩ, cá tính, nghề nghiệp (đồng phục bác sĩ, công an, học sinh), lứa tuổi và bản sắc văn hóa dân tộc.

### 2. Phân loại trang phục
- **Theo thời tiết:** Trang phục mùa hè (thoáng mát, thấm hút mồ hôi), trang phục mùa đông (dày dặn, giữ ấm cơ thể).
- **Theo công dụng:** Trang phục đi học (đồng phục), trang phục lao động (bảo hộ), trang phục thể thao (co giãn, thấm hút), trang phục lễ hội/dạ hội (sang trọng, lịch sự), trang phục ở nhà (thoải mái).
- **Theo lứa tuổi và giới tính:** Trang phục trẻ em, thanh niên, trung niên, người cao tuổi; trang phục nam, trang phục nữ.

### 3. Các đặc điểm của trang phục
1. **Chất liệu:** Độ dày mỏng, mềm mại hay thô cứng, độ co giãn, độ bóng và khả năng giữ nhiệt.
2. **Kiểu dáng:** Hình dáng bên ngoài của trang phục (vừa vặn, ôm sát, rộng rãi, dáng suông, dáng chữ A).
3. **Màu sắc:** Tạo cảm giác thị giác (màu sáng/nóng làm người trông béo hơn; màu tối/lạnh làm người trông thon gọn hơn).
4. **Đường nét và họa tiết:** Đường kẻ sọc dọc (tạo cảm giác cao ráo, thon gọn), kẻ sọc ngang (tạo cảm giác đầy đặn, thấp hơn), hoa văn hoa lá, chấm bi...

### 4. Các loại vải thông dụng trong may mặc
| Loại vải | Nguồn gốc | Đặc tính ưu - nhược điểm |
| :--- | :--- | :--- |
| **Vải sợi thiên nhiên** | - Thực vật: Sợi bông (cotton), sợi lanh, sợi gai.<br>- Động vật: Sợi tơ tằm, sợi len từ lông cừu, dê. | **Ưu điểm:** Hút ẩm cao, thoáng mát, mềm mại, mặc rất dễ chịu, an toàn cho da.<br>**Nhược điểm:** Dễ bị nhàu nát, giặt lâu khô, dễ co rút, độ bền cơ học trung bình, giá thành cao. |
| **Vải sợi hóa học** | Gồm 2 nhóm:<br>1. *Sợi nhân tạo* (viscose, rayon từ tre gỗ qua xử lý hóa học).<br>2. *Sợi tổng hợp* (polyester, nylon, acrylic từ than đá, dầu mỏ). | **Ưu điểm:** Độ bền rất cao, không bị nhàu, mau khô, chống nước tốt, giá rẻ.<br>**Nhược điểm:** Vải sợi tổng hợp hút ẩm kém, mặc bí bách, dễ tĩnh điện dính vào người. |
| **Vải sợi pha** | Kết hợp sợi thiên nhiên với sợi tổng hợp theo tỉ lệ nhất định (ví dụ: Cotton + Polyester, Len + Acrylic). | **Tổng hợp ưu điểm của cả hai:** Vừa thoáng mát, thấm hút mồ hôi tốt của sợi tự nhiên, vừa bền đẹp, ít nhàu, mau khô của sợi tổng hợp. Đây là loại vải may mặc **phổ biến nhất hiện nay**. |
`,
        diagramSvg: `
<svg viewBox="0 0 700 230" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Cây phân loại vải -->
  <rect x="250" y="15" width="200" height="40" rx="10" fill="#f43f5e" stroke="#be123c" stroke-width="2"/>
  <text x="350" y="40" fill="#ffffff" font-size="13" font-weight="black" text-anchor="middle">CÁC LOẠI VẢI MAY MẶC</text>

  <!-- 3 nhánh -->
  <path d="M 350 55 L 350 85 L 120 85 L 120 110" stroke="#f43f5e" stroke-width="2" fill="none"/>
  <path d="M 350 85 L 350 110" stroke="#f43f5e" stroke-width="2" fill="none"/>
  <path d="M 350 85 L 580 85 L 580 110" stroke="#f43f5e" stroke-width="2" fill="none"/>

  <!-- Nhánh 1: Thiên nhiên -->
  <rect x="30" y="110" width="180" height="100" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="120" y="132" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">🌿 VẢI SỢI THIÊN NHIÊN</text>
  <text x="120" y="155" fill="#334155" font-size="10" text-anchor="middle">• Bông, lanh, tơ tằm, len</text>
  <text x="120" y="175" fill="#047857" font-size="10" text-anchor="middle">✓ Mát, hút ẩm cực tốt</text>
  <text x="120" y="195" fill="#b91c1c" font-size="10" text-anchor="middle">✗ Dễ nhàu, giặt lâu khô</text>

  <!-- Nhánh 2: Hóa học -->
  <rect x="260" y="110" width="180" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="350" y="132" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">🧪 VẢI SỢI HÓA HỌC</text>
  <text x="350" y="155" fill="#334155" font-size="10" text-anchor="middle">• Nhân tạo &amp; Tổng hợp</text>
  <text x="350" y="175" fill="#1d4ed8" font-size="10" text-anchor="middle">✓ Bền, không nhàu, rẻ</text>
  <text x="350" y="195" fill="#b91c1c" font-size="10" text-anchor="middle">✗ Hút ẩm kém, bí nóng</text>

  <!-- Nhánh 3: Sợi pha -->
  <rect x="490" y="110" width="180" height="100" rx="12" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="132" fill="#581c87" font-size="11" font-weight="bold" text-anchor="middle">⭐ VẢI SỢI PHA</text>
  <text x="580" y="155" fill="#334155" font-size="10" text-anchor="middle">• Kết hợp TN + Hóa học</text>
  <text x="580" y="175" fill="#7e22ce" font-size="10" text-anchor="middle">✓ Vừa mát vừa bền đẹp</text>
  <text x="580" y="195" fill="#7e22ce" font-size="10" text-anchor="middle">✓ Ít nhàu, giá hợp lý</text>
</svg>
`,
        memorize: "Trang phục bảo vệ cơ thể và làm đẹp con người. Gồm 3 nhóm vải chính: 1. Vải sợi thiên nhiên (thoáng mát, hút ẩm nhưng dễ nhàu); 2. Vải sợi hóa học (bền, không nhàu nhưng bí nóng); 3. Vải sợi pha (kết hợp ưu điểm cả hai, phổ biến nhất). Đường sọc dọc tạo cảm giác thon gọn; sọc ngang tạo cảm giác béo hơn.",
        exercises: [
          "1. Nêu 2 vai trò cơ bản của trang phục và cho ví dụ trang phục bảo hộ trong đời sống.",
          "2. Tại sao vào mùa hè nóng bức người ta thường ưu tiên chọn quần áo may bằng vải sợi bông (cotton) thay vì sợi nylon?",
          "3. Người có vóc dáng thấp và tròn trịa nên chọn trang phục có màu sắc và họa tiết như thế nào để trông thon gọn và cao hơn?"
        ],
        practical: "Kiểm tra nhãn mác (tag) của 3 chiếc áo em hay mặc nhất ở nhà, đọc tỉ lệ phần trăm thành phần sợi vải (ví dụ: 100% Cotton hay 65% Polyester + 35% Cotton) và nhận xét cảm giác khi mặc chiếc áo đó.",
        quiz: {
          q: "Loại vải nào kết hợp được ưu điểm thoáng mát, hút ẩm của sợi thiên nhiên và độ bền, ít nhàu của sợi tổng hợp nên được sử dụng rộng rãi nhất hiện nay?",
          options: ["Vải sợi pha", "Vải 100% tơ tằm", "Vải sợi nilon nguyên chất", "Vải sợi len thô"],
          ans: 0,
          exp: "Vải sợi pha (ví dụ Cotton pha Polyester) kết hợp trọn vẹn ưu điểm của cả sợi thiên nhiên và sợi tổng hợp, khắc phục nhược điểm của từng loại."
        }
      },
      {
        id: 8,
        title: "Bài 8. Sử dụng và bảo quản trang phục",
        pages: "trang 44–50",
        objectives: [
          "Biết cách lựa chọn và phối hợp trang phục phù hợp với hoàn cảnh, vóc dáng và màu sắc.",
          "Nắm vững quy trình bảo quản trang phục đúng kỹ thuật (giặt, phơi, là, cất giữ).",
          "Đọc và hiểu chính xác các ký hiệu giặt là chuẩn quốc tế trên nhãn mác quần áo."
        ],
        knowledge: `
### 1. Lựa chọn và phối hợp trang phục hợp lý
- **Phù hợp hoàn cảnh sử dụng:**
  + Đi học: Mặc đồng phục đúng quy định trường, gọn gàng, lịch sự, đi giày hoặc dép có quai hậu.
  + Đi lao động, dã ngoại: Quần áo tối màu, chất vải bền dai, thấm hút mồ hôi, đội mũ nón.
  + Đi dự lễ hội, tiệc tùng: Trang phục trang trọng, thanh lịch, trang nhã (áo dài, âu phục).
  + Ở nhà: Trang phục rộng rãi, thoải mái, chất vải mềm mại.
- **Quy tắc phối hợp màu sắc và họa tiết:**
  + *Phối màu cùng tông (Monochrome/Tone sur tone):* Kết hợp các sắc độ đậm nhạt của cùng một màu (ví dụ: xanh dương nhạt + xanh navy).
  + *Phối màu tương phản:* Kết hợp 2 màu đối lập tạo điểm nhấn nổi bật (ví dụ: áo trắng + quần đen; vàng + xanh lam).
  + *Phối họa tiết:* Nếu áo có hoa văn/kẻ sọc nổi bật thì quần/váy nên là màu trơn, tránh phối cả cây họa tiết rối mắt.

### 2. Quy trình bảo quản trang phục đúng cách
Bảo quản tốt giúp quần áo giữ được form dáng, màu sắc tươi mới và kéo dài tuổi thọ sử dụng:
1. **Làm sạch (Giặt):**
   - Phân loại quần áo màu trắng riêng với quần áo màu đậm trước khi giặt để tránh bị lem màu.
   - Quần áo bằng len, lụa, tơ tằm nên giặt tay nhẹ nhàng với dầu gội hoặc nước giặt dịu nhẹ, không vắt xoắn mạnh.
2. **Làm khô (Phơi / Sấy):**
   - Phơi mặt trái của quần áo ra ngoài để tránh ánh nắng gắt làm bạc màu sợi vải.
   - Quần áo len, dệt kim cần phơi ngang trên móc hoặc lưới phơi để tránh bị chảy xệ kéo dài sợi.
3. **Làm phẳng (Là / Ủi):**
   - Điều chỉnh nhiệt độ bàn là phù hợp với từng chất liệu:
     + Vải sợi tổng hợp (nylon, polyester): Là ở nhiệt độ thấp (< 120°C).
     + Vải tơ tằm, len: Là ở nhiệt độ trung bình (130–150°C), nên là qua một lớp vải mỏng ẩm.
     + Vải bông, vải lanh (cotton, linen): Là ở nhiệt độ cao (160–200°C) kết hợp phun hơi nước.
4. **Cất giữ:**
   - Treo áo sơ mi, áo khoác, vest lên móc áo chuyên dụng.
   - Gấp gọn quần áo mặc ở nhà, đồ thể thao, xếp vào tủ nơi khô ráo, thoáng khí, tránh ẩm mốc.

### 3. Bộ kí hiệu chăm sóc quần áo chuẩn quốc tế (Care Labels)
Học sinh cần ghi nhớ 5 biểu tượng hình học cơ bản:
1. **Hình chậu nước:** Kí hiệu về **GIẶT (Washing)**.
   - Chậu nước không số: Được giặt nước thông thường.
   - Có số (ví dụ: 30°, 40°): Nhiệt độ nước tối đa cho phép.
   - Có hình bàn tay trong chậu: Chỉ được giặt bằng tay.
   - Dấu gạch chéo chữ X đè lên chậu: Không được giặt bằng nước (phải giặt khô).
2. **Hình tam giác:** Kí hiệu về **TẨY (Bleaching)**.
   - Hình tam giác trống: Được sử dụng mọi chất tẩy.
   - Hình tam giác có 2 đường gạch chéo: Chỉ dùng chất tẩy không chứa clo.
   - Hình tam giác có dấu X gạch chéo: Tuyệt đối không được tẩy.
3. **Hình bàn là:** Kí hiệu về **LÀ / ỦI (Ironing)**.
   - Bàn là 1 chấm tròn: Là ở nhiệt độ thấp (tối đa 110°C).
   - Bàn là 2 chấm tròn: Là ở nhiệt độ trung bình (tối đa 150°C).
   - Bàn là 3 chấm tròn: Là ở nhiệt độ cao (tối đa 200°C).
   - Bàn là có dấu gạch chéo X: Cấm được là/ủi.
4. **Hình vuông:** Kí hiệu về **SẤY VÀ PHƠI KHÔ (Drying)**.
   - Hình vuông có vòng tròn bên trong: Được sấy bằng máy sấy quần áo.
   - Vòng tròn có dấu X: Không được sấy bằng máy.
   - Hình vuông có 1 nét gạch ngang: Phơi khô trải phẳng.
5. **Hình tròn:** Kí hiệu về **GIẶT KHÔ (Dry Cleaning)** chuyên nghiệp tại tiệm giặt.
`,
        diagramSvg: `
<svg viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <text x="350" y="25" fill="#581c87" font-size="13" font-weight="black" text-anchor="middle">5 BIỂU TƯỢNG KÝ HIỆU CHĂM SÓC TRANG PHỤC QUỐC TẾ</text>
  
  <!-- 1. Chậu nước -->
  <g transform="translate(30, 45)">
    <rect width="115" height="150" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <path d="M 25 40 L 35 85 L 80 85 L 90 40 Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
    <path d="M 30 55 Q 57 45 85 55" stroke="#1d4ed8" stroke-width="2" fill="none"/>
    <text x="57" y="115" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">GIẶT NƯỚC</text>
    <text x="57" y="132" fill="#475569" font-size="10" text-anchor="middle">Chậu nước</text>
    <text x="57" y="146" fill="#64748b" font-size="9" text-anchor="middle">Nhiệt độ tối đa</text>
  </g>

  <!-- 2. Tam giác tẩy -->
  <g transform="translate(160, 45)">
    <rect width="115" height="150" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <polygon points="57,40 25,85 90,85" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
    <text x="57" y="115" fill="#7f1d1d" font-size="12" font-weight="bold" text-anchor="middle">CHẤT TẨY</text>
    <text x="57" y="132" fill="#475569" font-size="10" text-anchor="middle">Hình tam giác</text>
    <text x="57" y="146" fill="#64748b" font-size="9" text-anchor="middle">Có được dùng Clo?</text>
  </g>

  <!-- 3. Sấy khô -->
  <g transform="translate(290, 45)">
    <rect width="115" height="150" rx="12" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
    <rect x="30" y="40" width="55" height="50" fill="none" stroke="#a16207" stroke-width="2"/>
    <circle cx="57" cy="65" r="18" fill="#fef08a" stroke="#a16207" stroke-width="1.5"/>
    <text x="57" y="115" fill="#713f12" font-size="12" font-weight="bold" text-anchor="middle">SẤY KHÔ</text>
    <text x="57" y="132" fill="#475569" font-size="10" text-anchor="middle">Vuông + tròn</text>
    <text x="57" y="146" fill="#64748b" font-size="9" text-anchor="middle">Sấy máy / Phơi</text>
  </g>

  <!-- 4. Bàn là -->
  <g transform="translate(420, 45)">
    <rect width="115" height="150" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <path d="M 25 75 L 80 75 Q 90 75 85 55 L 75 50 L 35 50 Q 25 50 25 75 Z" fill="#a7f3d0" stroke="#047857" stroke-width="1.5"/>
    <circle cx="45" cy="65" r="2.5" fill="#047857"/>
    <circle cx="57" cy="65" r="2.5" fill="#047857"/>
    <text x="57" y="115" fill="#064e3b" font-size="12" font-weight="bold" text-anchor="middle">LÀ / ỦI</text>
    <text x="57" y="132" fill="#475569" font-size="10" text-anchor="middle">Hình bàn là</text>
    <text x="57" y="146" fill="#64748b" font-size="9" text-anchor="middle">1• 2•• 3••• chấm</text>
  </g>

  <!-- 5. Giặt khô -->
  <g transform="translate(550, 45)">
    <rect width="115" height="150" rx="12" fill="#fdf4ff" stroke="#c084fc" stroke-width="1.5"/>
    <circle cx="57" cy="65" r="25" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2"/>
    <text x="57" y="70" fill="#6b21a8" font-size="14" font-weight="bold" text-anchor="middle">P</text>
    <text x="57" y="115" fill="#581c87" font-size="12" font-weight="bold" text-anchor="middle">GIẶT KHÔ</text>
    <text x="57" y="132" fill="#475569" font-size="10" text-anchor="middle">Hình tròn</text>
    <text x="57" y="146" fill="#64748b" font-size="9" text-anchor="middle">Tiệm giặt hấp</text>
  </g>
</svg>
`,
        memorize: "Phối hợp trang phục: Phù hợp hoàn cảnh, phối màu hài hòa (cùng tông hoặc tương phản), cân đối họa tiết. Bảo quản 4 bước: Giặt (phân loại trắng/màu) → Phơi (lộn trái) → Là (chọn nhiệt độ theo vải) → Cất giữ. 5 ký hiệu nhãn mác: Chậu nước (giặt), Tam giác (tẩy), Hình vuông (sấy/phơi), Bàn là (ủi), Hình tròn (giặt khô).",
        exercises: [
          "1. Hãy giải thích tại sao cần phân loại riêng quần áo trắng và quần áo màu trước khi giặt?",
          "2. Kí hiệu hình chiếc bàn là có 1 dấu chấm tròn nghĩa là gì? Loại vải nào phù hợp với mức nhiệt này?",
          "3. Nêu nguyên tắc phối màu trang phục theo phong cách tương phản và cho 2 ví dụ cụ thể."
        ],
        practical: "Thực hành gấp và sắp xếp lại toàn bộ tủ quần áo cá nhân của em theo ngăn nắp: ngăn áo sơ mi, ngăn áo phông, ngăn quần dài, ngăn đồ lót tất vớ; kiểm tra một chiếc áo khoác để đọc các ký hiệu giặt là trên nhãn áo.",
        quiz: {
          q: "Kí hiệu hình chiếc chậu nước có bàn tay nhúng vào trên nhãn mác quần áo có ý nghĩa gì?",
          options: ["Chỉ được giặt bằng tay, không được giặt bằng máy", "Tuyệt đối không được giặt", "Phải giặt bằng nước sôi 100°C", "Phải đem ra tiệm giặt khô"],
          ans: 0,
          exp: "Hình bàn tay đặt trong chậu nước là kí hiệu quy định sản phẩm chỉ được giặt nhẹ nhàng bằng tay, giặt máy sẽ làm hỏng form hoặc rách vải."
        }
      },
      {
        id: 9,
        title: "Bài 9. Thời trang",
        pages: "trang 51–52",
        objectives: [
          "Hiểu và phát biểu được khái niệm thời trang và chu kì xu hướng thời trang.",
          "Phân biệt được 4 phong cách thời trang cơ bản (cổ điển, thể thao, dân gian, lãng mạn).",
          "Biết cách định hình phong cách thời trang phù hợp với lứa tuổi học sinh THCS."
        ],
        knowledge: `
### 1. Khái niệm Thời trang
Thời trang là tập hợp những thói quen, cách ăn mặc và kiểu trang phục được số đông trong xã hội ưa chuộng, chấp nhận và sử dụng phổ biến trong một khoảng thời gian nhất định.
Thời trang luôn thay đổi theo thời gian, phản ánh sự phát triển của kinh tế, văn hóa, lối sống và công nghệ dệt may.

### 2. Các phong cách thời trang cơ bản
Phong cách thời trang là cách thể hiện cá tính, gu thẩm mĩ riêng biệt thông qua việc lựa chọn và kết hợp trang phục:
1. **Phong cách Cổ điển (Classic):**
   - *Đặc điểm:* Đơn giản, trang nhã, nghiêm túc, kín đáo và thanh lịch. Kiểu dáng vừa vặn, không quá rộng hay quá chật, ít chi tiết rườm rà. Màu sắc trung tính (đen, trắng, be, ghi xám, xanh navy).
   - *Trang phục tiêu biểu:* Áo sơ mi trắng cổ đức, quần âu ống đứng, áo vest (blazer), đầm suông tối màu. Phong cách này không bao giờ lỗi mốt.
2. **Phong cách Thể thao (Sporty):**
   - *Đặc điểm:* Khỏe khoắn, năng động, tiện lợi và tự do. Tạo sự thoải mái tối đa cho mọi vận động.
   - *Trang phục tiêu biểu:* Áo thun (T-shirt), áo hoodie, quần nỉ bo gấu (jogger), quần shorts, giày thể thao (sneakers), mũ lưỡi trai.
3. **Phong cách Dân gian (Folkloric / Ethnic):**
   - *Đặc điểm:* Khai thác các nét đặc trưng của văn hóa truyền thống, sử dụng hoa văn thổ cẩm, thêu tay, chất liệu tự nhiên (lụa tơ tằm, vải đũi, thổ cẩm dệt tay).
   - *Trang phục tiêu biểu:* Áo dài cách tân, áo bà ba cách điệu, váy yếm thêu hoa, trang phục có họa tiết hoa văn dân tộc thiểu số Tây Bắc, Tây Nguyên.
4. **Phong cách Lãng mạn (Romantic):**
   - *Đặc điểm:* Dịu dàng, mềm mại, nữ tính và bay bổng. Đường nét uốn lượn, có bèo nhún, xếp ly, ren hoặc nơ duyên dáng. Màu sắc tươi sáng, ngọt ngào (hồng phấn, tím nhạt, pastel, kem).
   - *Trang phục tiêu biểu:* Đầm xòe voan hoa nhí, áo blouse cổ bèo viền ren, chân váy xếp ly bồng bềnh.

### 3. Thời trang học đường cho lứa tuổi học sinh THCS
Học sinh lớp 6 nên hướng tới phong cách thời trang:
- Trong sáng, trẻ trung, hồn nhiên, đúng lứa tuổi.
- Gọn gàng, sạch sẽ, lịch sự khi đến trường.
- Thoải mái, dễ vận động khi tham gia các hoạt động ngoại khóa thể dục thể thao.
- Tránh chạy theo các mốt dị hợm, hở hang hoặc quá tốn kém xa xỉ không phù hợp điều kiện gia đình.
`,
        diagramSvg: `
<svg viewBox="0 0 700 200" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- 4 phong cách thời trang -->
  <g transform="translate(30, 20)">
    <rect width="140" height="155" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="70" y="35" fill="#1e3a8a" font-size="12" font-weight="black" text-anchor="middle">👔 CỔ ĐIỂN</text>
    <text x="70" y="60" fill="#475569" font-size="10" text-anchor="middle">• Giản dị, lịch sự</text>
    <text x="70" y="80" fill="#475569" font-size="10" text-anchor="middle">• Nghiêm túc, nhã nhặn</text>
    <text x="70" y="100" fill="#475569" font-size="10" text-anchor="middle">• Áo sơ mi, âu phục</text>
    <text x="70" y="130" fill="#1d4ed8" font-size="10" font-weight="bold" text-anchor="middle">Không lỗi mốt</text>
  </g>

  <g transform="translate(195, 20)">
    <rect width="140" height="155" rx="14" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
    <text x="70" y="35" fill="#14532d" font-size="12" font-weight="black" text-anchor="middle">👟 THỂ THAO</text>
    <text x="70" y="60" fill="#475569" font-size="10" text-anchor="middle">• Năng động, khỏe khoắn</text>
    <text x="70" y="80" fill="#475569" font-size="10" text-anchor="middle">• Tự do, co giãn</text>
    <text x="70" y="100" fill="#475569" font-size="10" text-anchor="middle">• Áo hoodie, jogger</text>
    <text x="70" y="130" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">Rất thoải mái</text>
  </g>

  <g transform="translate(360, 20)">
    <rect width="140" height="155" rx="14" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="35" fill="#78350f" font-size="12" font-weight="black" text-anchor="middle">🏮 DÂN GIAN</text>
    <text x="70" y="60" fill="#475569" font-size="10" text-anchor="middle">• Bản sắc văn hóa</text>
    <text x="70" y="80" fill="#475569" font-size="10" text-anchor="middle">• Thổ cẩm, thêu tay</text>
    <text x="70" y="100" fill="#475569" font-size="10" text-anchor="middle">• Áo dài cách tân</text>
    <text x="70" y="130" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">Độc đáo truyền thống</text>
  </g>

  <g transform="translate(525, 20)">
    <rect width="140" height="155" rx="14" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
    <text x="70" y="35" fill="#831843" font-size="12" font-weight="black" text-anchor="middle">🌸 LÃNG MẠN</text>
    <text x="70" y="60" fill="#475569" font-size="10" text-anchor="middle">• Dịu dàng, nữ tính</text>
    <text x="70" y="80" fill="#475569" font-size="10" text-anchor="middle">• Bèo nhún, ren, nơ</text>
    <text x="70" y="100" fill="#475569" font-size="10" text-anchor="middle">• Váy voan bồng bềnh</text>
    <text x="70" y="130" fill="#be185d" font-size="10" font-weight="bold" text-anchor="middle">Mềm mại ngọt ngào</text>
  </g>
</svg>
`,
        memorize: "Thời trang là kiểu trang phục được sử dụng phổ biến trong một thời điểm. 4 phong cách cơ bản: Cổ điển (nghiêm túc, không lỗi mốt), Thể thao (năng động, khỏe khoắn), Dân gian (thổ cẩm, truyền thống), Lãng mạn (mềm mại, bèo nhún). Học sinh cần mặc lịch sự, đúng lứa tuổi.",
        exercises: [
          "1. Thế nào là thời trang? Cho ví dụ về một xu hướng thời trang đang được nhiều bạn học sinh ưa thích hiện nay.",
          "2. Hãy chỉ ra đặc điểm nhận biết của phong cách thời trang thể thao và giải thích vì sao phong cách này rất được giới trẻ yêu thích.",
          "3. Em hãy tự nhận xét xem phong cách ăn mặc ngày thường của bản thân nghiêng về phong cách nào nhiều nhất?"
        ],
        practical: "Thử tài stylist: Hãy thiết kế (hoặc vẽ phác thảo) một bộ trang phục đi chơi cuối tuần cho bản thân em phù hợp với thời tiết hiện tại và thể hiện được phong cách mà em yêu thích.",
        quiz: {
          q: "Phong cách thời trang nào có đặc điểm giản dị, nghiêm túc, lịch sự, kiểu dáng chuẩn mực và hầu như không bao giờ bị lỗi mốt theo thời gian?",
          options: ["Phong cách Cổ điển (Classic)", "Phong cách Lãng mạn", "Phong cách Thể thao", "Phong cách Dân gian"],
          ans: 0,
          exp: "Phong cách Cổ điển (Classic) với trang phục như áo sơ mi trắng, quần âu, áo blazer luôn mang vẻ đẹp lịch thiệp vượt thời gian."
        }
      }
    ]
  },
  {
    id: 4,
    name: "Chương IV. Đồ dùng điện trong gia đình",
    color: "from-amber-600 via-orange-600 to-yellow-600",
    border: "border-amber-500",
    desc: "Khái quát thông số kỹ thuật điện; cấu tạo và nguyên lí làm việc của đèn điện, nồi cơm điện, bếp hồng ngoại; nguyên tắc an toàn điện và dự án Tiết kiệm điện năng gia đình.",
    lessons: [
      {
        id: 10,
        title: "Bài 10. Khái quát về đồ dùng điện trong gia đình",
        pages: "trang 55–59",
        objectives: [
          "Nêu được khái niệm và vai trò của đồ dùng điện trong gia đình.",
          "Hiểu rõ ý nghĩa các thông số kỹ thuật cơ bản: Điện áp định mức (V) và Công suất định mức (W).",
          "Thực hiện đúng các quy tắc sử dụng đồ dùng điện an toàn và tiết kiệm năng lượng."
        ],
        knowledge: `
### 1. Khái niệm và vai trò của đồ dùng điện
Đồ dùng điện trong gia đình là các thiết bị công nghệ hoạt động bằng năng lượng điện, có chức năng biến đổi điện năng thành các dạng năng lượng khác (quang năng, nhiệt năng, cơ năng) nhằm phục vụ sinh hoạt, nấu nướng, chiếu sáng, làm mát, giải trí và nâng cao chất lượng cuộc sống con người.

### 2. Các thông số kĩ thuật cơ bản ghi trên đồ dùng điện
Trên nhãn của mỗi thiết bị điện đều có các thông số kỹ thuật định mức mà người sử dụng bắt buộc phải nắm vững:
- **Điện áp định mức ($U_{đm}$):** Là mức điện áp quy định để thiết bị hoạt động bình thường, an toàn và đạt tuổi thọ cao nhất.
  + Đơn vị đo: **Vôn (kí hiệu: V)**.
  + Lưới điện sinh hoạt tại Việt Nam là **220 V**. Do đó, các thiết bị điện gia đình tại nước ta thường có điện áp định mức là **220V**. Nếu cắm thiết bị 110V vào điện 220V mà không có máy biến áp sẽ gây cháy nổ lập tức!
- **Công suất định mức ($P_{đm}$):** Là đại lượng biểu thị mức độ tiêu thụ điện năng của thiết bị trong một đơn vị thời gian khi hoạt động ở điện áp định mức.
  + Đơn vị đo: **Oát (kí hiệu: W)** hoặc **Ki-lô-oát (kW)**: $1 kW = 1.000 W$.
  + Thiết bị có công suất càng lớn thì tiêu tốn càng nhiều điện (ví dụ: bóng đèn LED 10W rất tiết kiệm; bình nóng lạnh 2.500W, bếp từ 2.000W tiêu hao nhiều điện).
- **Các thông số khác:** Dung tích (lít - L) của nồi cơm điện, tủ lạnh; kích thước (inch) của màn hình tivi; tốc độ vòng quay (vòng/phút) của quạt máy.

### 3. Tiêu chí lựa chọn đồ dùng điện trong gia đình
- Phù hợp với nhu cầu thực tế của các thành viên gia đình (tránh mua nồi quá to gây lãng phí, hoặc quá nhỏ không đủ dùng).
- Điện áp định mức phải phù hợp với lưới điện gia đình (220V).
- Chọn thiết bị có hiệu suất năng lượng cao, dán **Nhãn năng lượng 5 sao** của Bộ Công Thương.
- Thương hiệu uy tín, chế độ bảo hành rõ ràng, an toàn chống rò rỉ điện.
- Giá thành phù hợp với điều kiện kinh tế gia đình.

### 4. Quy tắc an toàn điện tuyệt đối trong gia đình
1. Không chạm tay ướt vào bất kỳ công tắc, phích cắm hay đồ dùng điện nào (vì nước dẫn điện rất nguy hiểm).
2. Tuyệt đối không chạm vào phần dây dẫn bị hở hoặc các phần mang điện kim loại.
3. Không cắm quá nhiều thiết bị có công suất lớn (bàn là, bếp điện, lò nướng, bình nước nóng) vào chung một ổ cắm điện để tránh quá tải gây chập cháy dây điện.
4. Khi phát hiện thiết bị có mùi khét, phát tia lửa hoặc bốc khói: Ngay lập tức ngắt cầu dao (Aptomat) tổng rồi mới tiến hành kiểm tra.
5. Luôn rút phích cắm điện trước khi lau chùi, vệ sinh hoặc sửa chữa đồ dùng điện.

### 5. Sử dụng điện tiết kiệm và hiệu quả
- Chỉ bật thiết bị khi cần dùng, tắt ngay khi ra khỏi phòng.
- Rút phích cắm khỏi ổ điện khi không sử dụng thời gian dài (tránh điện năng tiêu thụ ngầm standby).
- Thường xuyên vệ sinh, lau bụi màng lọc quạt, điều hòa, bóng đèn để thiết bị tản nhiệt tốt, duy trì hiệu suất cao.
`,
        diagramSvg: `
<svg viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Nhãn thông số kỹ thuật mẫu -->
  <g transform="translate(40, 20)">
    <rect width="280" height="175" rx="14" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
    <rect x="0" y="0" width="280" height="35" rx="14" fill="#f59e0b"/>
    <text x="140" y="24" fill="#ffffff" font-size="13" font-weight="black" text-anchor="middle">BẢNG THÔNG SỐ KỸ THUẬT</text>
    <text x="20" y="60" fill="#78350f" font-size="12" font-weight="bold">Model: CH-2026VN</text>
    <text x="20" y="85" fill="#1e3a8a" font-size="13" font-weight="black">220V ~ 50Hz</text>
    <text x="130" y="85" fill="#475569" font-size="10">(Điện áp định mức)</text>
    <text x="20" y="115" fill="#b91c1c" font-size="13" font-weight="black">1000W</text>
    <text x="80" y="115" fill="#475569" font-size="10">(Công suất định mức)</text>
    <text x="20" y="140" fill="#047857" font-size="12" font-weight="bold">Dung tích: 1.8 Lít</text>
    <text x="20" y="160" fill="#64748b" font-size="10">Sản xuất tại Việt Nam - TCVN</text>
  </g>

  <!-- 3 cảnh báo an toàn -->
  <g transform="translate(360, 20)">
    <rect width="300" height="175" rx="14" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="150" y="30" fill="#991b1b" font-size="13" font-weight="black" text-anchor="middle">⚠️ 4 NGUYÊN TẮC AN TOÀN ĐIỆN</text>
    <text x="20" y="60" fill="#b91c1c" font-size="11" font-weight="bold">1. Không chạm tay ướt vào điện</text>
    <text x="20" y="75" fill="#475569" font-size="10">Nước dẫn điện gây nguy hiểm tính mạng</text>
    <text x="20" y="100" fill="#b91c1c" font-size="11" font-weight="bold">2. Không cắm quá tải một ổ cắm</text>
    <text x="20" y="115" fill="#475569" font-size="10">Tránh sinh nhiệt gây chảy nhựa, chập cháy</text>
    <text x="20" y="140" fill="#b91c1c" font-size="11" font-weight="bold">3. Rút phích cắm khi sửa chữa</text>
    <text x="20" y="155" fill="#475569" font-size="10">Ngắt cầu dao tổng khi có chập cháy khẩn cấp</text>
  </g>
</svg>
`,
        memorize: "Đồ dùng điện biến đổi điện năng thành các dạng năng lượng phục vụ cuộc sống. 2 thông số cốt lõi: Điện áp định mức (V, lưới điện VN là 220V) và Công suất định mức (W hoặc kW, 1kW = 1.000W). Tuyệt đối không thao tác điện bằng tay ướt, không cắm quá tải ổ cắm, ngắt aptomat khi có sự cố.",
        exercises: [
          "1. Hãy giải thích ý nghĩa của dòng chữ số '220V - 1500W' in trên vỏ một chiếc ấm đun nước siêu tốc.",
          "2. Nếu mang một chiếc máy sấy tóc có thông số '110V - 800W' từ Nhật Bản về cắm trực tiếp vào ổ điện 220V ở Việt Nam thì hiện tượng gì sẽ xảy ra? Vì sao?",
          "3. Nêu 3 việc làm cụ thể trong gia đình em giúp tiết kiệm tiền điện mỗi tháng."
        ],
        practical: "Quan sát nhãn mác đằng sau 3 đồ dùng điện trong nhà em (như quạt điện, tivi, nồi cơm điện), ghi lại điện áp định mức (V) và công suất định mức (W) của từng thiết bị vào vở.",
        quiz: {
          q: "Thông số '220V' in trên nhãn của một chiếc quạt điện có ý nghĩa gì?",
          options: ["Điện áp định mức của quạt là 220 Vôn", "Công suất tiêu thụ điện là 220 Oát", "Quạt quay với tốc độ 220 vòng mỗi phút", "Giá tiền của chiếc quạt là 220 nghìn đồng"],
          ans: 0,
          exp: "220V là Điện áp định mức (đơn vị Vôn), mức điện áp quy định để thiết bị hoạt động bình thường và an toàn trên lưới điện Việt Nam."
        }
      },
      {
        id: 11,
        title: "Bài 11. Đèn điện",
        pages: "trang 60–63",
        objectives: [
          "Trình bày được công dụng của đèn điện và phân biệt 4 loại bóng đèn thông dụng.",
          "Mô tả cấu tạo và nguyên lí làm việc của bóng đèn sợi đốt, huỳnh quang và đèn LED.",
          "Lựa chọn được loại bóng đèn phù hợp cho từng không gian học tập và sinh hoạt gia đình."
        ],
        knowledge: `
### 1. Công dụng của đèn điện
Đèn điện là thiết bị biến đổi điện năng thành quang năng (ánh sáng), phục vụ nhu cầu học tập, làm việc, sinh hoạt ban đêm và trang trí thẩm mĩ cho không gian sống.

### 2. So sánh 4 loại bóng đèn thông dụng
| Loại bóng đèn | Cấu tạo cơ bản | Nguyên lí phát quang | Ưu điểm | Nhược điểm |
| :--- | :--- | :--- | :--- | :--- |
| **Đèn sợi đốt (sợi tóc)** | Gồm: Bóng thủy tinh chứa khí trơ, sợi đốt làm bằng kim loại vonfram (wolfram), đuôi đèn (đuôi xoáy hoặc đuôi ngạnh). | Dòng điện chạy qua sợi tóc làm nung nóng sợi tóc đến nhiệt độ rất cao (trên 2.500°C) và phát sáng. | - Ánh sáng liên tục, không nhấp nháy, giá thành rẻ nhất. | - Hiệu suất phát quang rất thấp (chỉ ~5% điện biến thành ánh sáng, 95% tỏa nhiệt làm nóng phòng); tuổi thọ thấp (~1.000 giờ), rất tốn điện. |
| **Đèn huỳnh quang (đèn tuýp)** | Gồm: Ống thủy tinh dài phủ lớp bột huỳnh quang bên trong (chứa hơi thủy ngân & khí trơ), 2 điện cực ở hai đầu. Phải có chấn lưu (tăng phô) và tắc te. | Sự phóng điện giữa 2 điện cực tạo tia tử ngoại (UV), tia UV tác động vào bột huỳnh quang làm phát ra ánh sáng. | - Tiết kiệm điện hơn đèn sợi đốt gấp 4–5 lần, tỏa ít nhiệt hơn, tuổi thọ trung bình (~8.000 giờ). | - Có hiện tượng nhấp nháy theo tần số dòng điện 50Hz gây mỏi mắt; chứa thủy ngân độc hại khi vỡ. |
| **Đèn Compact** | Thực chất là đèn huỳnh quang công suất nhỏ, ống thủy tinh uốn gấp hình chữ U hoặc xoắn ốc, chấn lưu điện tử tích hợp ngay trong đuôi đèn. | Giống nguyên lí đèn huỳnh quang (phóng điện trong hơi thủy ngân kích thích bột huỳnh quang). | - Gọn nhẹ, thay thế dễ dàng vào đui đèn sợi đốt, tiết kiệm điện hơn đèn sợi đốt. | - Chứa thủy ngân, dễ hỏng nếu bật tắt liên tục. |
| **Đèn LED (Đi-ốt phát quang)** | Gồm: Bảng chip LED (chất bán dẫn), mạch điều khiển (Driver/nguồn LED), bộ vỏ tản nhiệt nhôm/nhựa, chao đèn khuếch tán ánh sáng. | Khi có dòng điện một chiều đi qua chất bán dẫn (chip LED), các hạt electron tái hợp giải phóng năng lượng dưới dạng ánh sáng. | - **Tiết kiệm điện nhất hiện nay** (tiết kiệm 80–90% so với sợi đốt).<br>- **Tuổi thọ cực cao** (25.000 – 50.000 giờ).<br>- Ánh sáng ổn định, không nhấp nháy, thân thiện môi trường (không chì, không thủy ngân). | - Chi phí ban đầu cao hơn các loại đèn cũ (nhưng tiết kiệm tiền điện về lâu dài). |

### 3. Thực hành lựa chọn đèn chiếu sáng
- **Chiếu sáng bàn học:** Nên chọn đèn bàn LED chống cận thị, công suất 5W – 8W, chỉ số hoàn màu CRI > 80, ánh sáng vàng ấm (3000K) hoặc trắng tự nhiên (4000K) để bảo vệ mắt, không gây chói lóa.
- **Chiếu sáng phòng khách, phòng ngủ:** Dùng đèn tuýp LED (T8) hoặc đèn LED âm trần (Downlight) để ánh sáng tỏa đều, tiết kiệm điện.
`,
        diagramSvg: `
<svg viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Sợi đốt -->
  <g transform="translate(40, 20)">
    <rect width="180" height="175" rx="14" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="90" cy="55" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 80 50 Q 90 35 100 50" stroke="#b45309" stroke-width="2" fill="none"/>
    <rect x="78" y="85" width="24" height="20" fill="#94a3b8" stroke="#475569"/>
    <text x="90" y="125" fill="#78350f" font-size="12" font-weight="black" text-anchor="middle">ĐÈN SỢI ĐỐT</text>
    <text x="90" y="145" fill="#b91c1c" font-size="10" text-anchor="middle">Tốn điện (95% tỏa nhiệt)</text>
    <text x="90" y="160" fill="#64748b" font-size="9" text-anchor="middle">Tuổi thọ: ~1.000 giờ</text>
  </g>

  <!-- Huỳnh quang / Compact -->
  <g transform="translate(260, 20)">
    <rect width="180" height="175" rx="14" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="75" y="35" width="30" height="50" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
    <rect x="78" y="85" width="24" height="20" fill="#94a3b8" stroke="#475569"/>
    <text x="90" y="125" fill="#134e4a" font-size="12" font-weight="black" text-anchor="middle">ĐÈN COMPACT / HQ</text>
    <text x="90" y="145" fill="#0f766e" font-size="10" text-anchor="middle">Phóng điện bột huỳnh quang</text>
    <text x="90" y="160" fill="#64748b" font-size="9" text-anchor="middle">Tuổi thọ: ~8.000 giờ</text>
  </g>

  <!-- LED -->
  <g transform="translate(480, 20)">
    <rect width="180" height="175" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <path d="M 65 65 A 25 25 0 0 1 115 65 L 110 85 L 70 85 Z" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
    <rect x="78" y="85" width="24" height="20" fill="#94a3b8" stroke="#475569"/>
    <text x="90" y="125" fill="#064e3b" font-size="12" font-weight="black" text-anchor="middle">ĐÈN LED (KHUYÊN DÙNG)</text>
    <text x="90" y="145" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Tiết kiệm điện 80-90%</text>
    <text x="90" y="160" fill="#047857" font-size="9" text-anchor="middle">Tuổi thọ: 30.000 - 50.000 giờ</text>
  </g>
</svg>
`,
        memorize: "Đèn sợi đốt phát sáng do dây tóc vonfram bị nung nóng (tốn điện nhất, tuổi thọ thấp nhất). Đèn huỳnh quang phát sáng nhờ bột huỳnh quang khi có phóng điện. Đèn LED phát sáng nhờ chip bán dẫn đi-ốt, là loại đèn tiết kiệm điện nhất, tuổi thọ cao nhất (tới 50.000 giờ) và thân thiện môi trường nhất hiện nay.",
        exercises: [
          "1. Hãy so sánh ưu và nhược điểm của đèn LED và đèn sợi đốt về khả năng tiết kiệm điện và tuổi thọ.",
          "2. Tại sao đèn huỳnh quang khi vỡ lại có nguy cơ gây độc hại cho sức khỏe con người và môi trường?",
          "3. Khi mua đèn học để chống cận thị, em cần lưu ý những tiêu chí kỹ thuật nào?"
        ],
        practical: "Kiểm tra toàn bộ hệ thống bóng đèn trong ngôi nhà của em: Đếm số lượng bóng sợi đốt, compact, huỳnh quang và LED. Tính tỉ lệ phần trăm bóng đèn LED trong nhà em đã đạt trên 80% chưa.",
        quiz: {
          q: "Loại bóng đèn nào hiện nay có hiệu suất phát quang cao nhất, tiết kiệm điện năng nhất và có tuổi thọ cao nhất lên tới 30.000 – 50.000 giờ?",
          options: ["Đèn LED", "Đèn sợi đốt", "Đèn huỳnh quang tuýp", "Đèn dầu hỏa"],
          ans: 0,
          exp: "Đèn LED sử dụng công nghệ đi-ốt bán dẫn hiện đại, tiết kiệm tới 85% điện năng so với sợi đốt và tuổi thọ vượt trội đến 50.000 giờ."
        }
      },
      {
        id: 12,
        title: "Bài 12. Nồi cơm điện",
        pages: "trang 64–67",
        objectives: [
          "Trình bày được công dụng, cấu tạo gồm 5 bộ phận chính của nồi cơm điện.",
          "Giải thích được nguyên lí làm việc tự động chuyển từ chế độ Nấu sang Giữ ấm.",
          "Thực hiện đúng các thao tác sử dụng và bảo dưỡng nồi cơm điện an toàn, bền lâu."
        ],
        knowledge: `
### 1. Công dụng của nồi cơm điện
Nồi cơm điện là thiết bị nấu cơm tự động nhanh chóng, tiện lợi, cơm chín đều, dẻo ngon; ngoài ra còn có thể dùng để nấu cháo, ninh súp, làm bánh, hấp rau củ hoặc nấu xôi.

### 2. Cấu tạo chi tiết của nồi cơm điện
Nồi cơm điện gồm 5 bộ phận chính:
1. **Nắp nồi:** Đậy kín giữ nhiệt và hơi nước bên trong. Gồm nắp gài (gắn liền thân có gioăng cao su giữ nhiệt) hoặc nắp rời. Trên nắp có van thoát hơi nước chống trào.
2. **Thân nồi:** Vỏ ngoài bằng nhựa cách nhiệt hoặc thép sơn tĩnh điện, bảo vệ các bộ phận bên trong và giữ nhiệt cho nồi nấu.
3. **Nồi nấu (Lòng nồi):** Làm bằng hợp kim nhôm đúc dày, bên trong phủ lớp men chống dính (Teflon hoặc Ceramic) để cơm không bị cháy khét dính đáy nồi.
4. **Bộ phận sinh nhiệt (Mâm nhiệt):** Đĩa kim loại đúc dày đặt ở đáy thân nồi, bên trong chứa dây điện trở nhiệt (dây mayso), có nhiệm vụ truyền nhiệt trực tiếp vào đáy lòng nồi khi được cấp điện.
5. **Bộ phận điều khiển:**
   - *Nồi cơm điện cơ:* Gồm cần gạt chuyển mạch và rơle nhiệt lưỡng kim nam châm ở tâm mâm nhiệt, có 2 đèn báo: Nấu (Cook) và Giữ ấm (Warm).
   - *Nồi cơm điện tử:* Gồm bảng mạch vi xử lý điện tử, màn hình LED hiển thị và các nút bấm chọn nhiều chế độ nấu cài đặt sẵn.

### 3. Nguyên lí làm việc của nồi cơm điện
- **Giai đoạn nấu (Cook):** Khi cắm điện và gạt cần điều khiển xuống nấc 'Cook', rơle nhiệt đóng tiếp điểm cấp điện cho mâm nhiệt. Mâm nhiệt nóng lên truyền nhiệt vào lòng nồi làm sôi nước, làm chín gạo.
- **Giai đoạn chuyển nấc:** Khi gạo hút cạn nước, nhiệt độ đáy nồi tăng nhanh vượt quá 100°C (khoảng 105°C – 115°C). Lúc này, rơle nhiệt (nam châm vĩnh cửu mất từ tính khi quá nhiệt độ Curie) tự động nhả ra, đẩy cần gạt bật lên nấc 'Warm'.
- **Giai đoạn giữ ấm (Warm):** Tiếp điểm nấu ngắt, dòng điện chuyển qua mạch sấy giữ nhiệt công suất nhỏ (khoảng 40–50W), giữ cơm luôn nóng hổi mà không bị khê cháy.

### 4. Quy trình sử dụng và bảo quản an toàn
1. Đong gạo và vo gạo sạch trong rá riêng (không vo trực tiếp trong lòng nồi tránh làm trầy xước men chống dính).
2. Cho nước theo tỷ lệ vừa đủ với từng loại gạo.
3. Lau khô hoàn toàn mặt ngoài và đáy lòng nồi trước khi đặt vào thân nồi.
4. Xoay nhẹ lòng nồi sang trái, sang phải để đáy nồi tiếp xúc khít với mâm nhiệt.
5. Đóng nắp kín, cắm phích điện chắc chắn và gạt nút sang chế độ Cook.
6. Sau khi nồi chuyển sang Warm khoảng 10–15 phút, cơm ủ chín tới là có thể thưởng thức.
7. Vệ sinh lòng nồi bằng miếng bọt biển mềm, không dùng búi sắt cọ xát.
`,
        diagramSvg: `
<svg viewBox="0 0 700 240" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Cấu tạo nồi cơm điện mặt cắt -->
  <!-- Thân ngoài -->
  <rect x="220" y="60" width="260" height="150" rx="20" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
  <text x="140" y="110" fill="#475569" font-size="11" font-weight="bold" text-anchor="end">2. THÂN NỒI →</text>

  <!-- Nắp nồi -->
  <ellipse cx="350" cy="60" rx="130" ry="25" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
  <rect x="335" y="20" width="30" height="20" rx="4" fill="#0284c7"/>
  <circle cx="350" cy="45" r="5" fill="#f97316"/>
  <text x="140" y="45" fill="#0284c7" font-size="11" font-weight="bold" text-anchor="end">1. NẮP &amp; VAN THOÁT HƠI →</text>

  <!-- Lòng nồi (nồi nấu) -->
  <path d="M 250 75 Q 255 170 350 170 Q 445 170 450 75 Z" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <text x="350" y="120" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3. LÒNG NỒI</text>
  <text x="350" y="135" fill="#94a3b8" font-size="9" text-anchor="middle">(Hợp kim nhôm + Men chống dính)</text>

  <!-- Mâm nhiệt -->
  <rect x="270" y="175" width="160" height="15" rx="4" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>
  <text x="560" y="185" fill="#c2410c" font-size="11" font-weight="bold">← 4. MÂM NHIỆT (Đáy nồi)</text>

  <!-- Rơle nhiệt ở giữa mâm -->
  <circle cx="350" cy="182" r="7" fill="#dc2626"/>
  <text x="350" y="205" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Rơ le nhiệt cảm ứng</text>

  <!-- Bộ điều khiển bên ngoài -->
  <rect x="325" y="115" width="50" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="340" cy="127" r="4" fill="#ef4444"/>
  <circle cx="360" cy="127" r="4" fill="#f59e0b"/>
  <rect x="335" y="137" width="30" height="10" rx="3" fill="#64748b"/>
  <text x="560" y="135" fill="#2563eb" font-size="11" font-weight="bold">← 5. NÚT ĐIỀU KHIỂN (Cook / Warm)</text>
</svg>
`,
        memorize: "Nồi cơm điện gồm 5 bộ phận: Nắp nồi, Thân nồi, Lòng nồi chống dính, Mâm nhiệt (sinh nhiệt) và Bộ điều khiển. Nguyên lý: Mâm nhiệt nấu sôi cơm ở chế độ Cook; khi cạn nước nhiệt độ đáy nồi vượt 100°C, rơle nhiệt tự ngắt chuyển sang chế độ Warm ủ ấm. Luôn lau khô đáy nồi trước khi nấu.",
        exercises: [
          "1. Kể tên 5 bộ phận chính của nồi cơm điện và nêu chức năng của mâm nhiệt.",
          "2. Giải thích cơ chế vì sao khi cơm cạn hết nước thì nồi cơm điện lại tự động chuyển từ nút Cook sang nút Warm?",
          "3. Tại sao tuyệt đối không được dùng cọ sắt kim loại để cọ rửa lòng nồi cơm điện?"
        ],
        practical: "Thực hành nấu một bữa cơm hoàn chỉnh cho gia đình bằng nồi cơm điện: Đong gạo, vo gạo, đong nước đúng tỉ lệ, lau khô lòng nồi, cắm điện và ghi lại thời gian từ lúc bấm Cook đến khi nồi chuyển Warm.",
        quiz: {
          q: "Bộ phận nào trong nồi cơm điện có chức năng biến đổi điện năng thành nhiệt năng truyền trực tiếp vào đáy lòng nồi để làm chín gạo?",
          options: ["Mâm nhiệt", "Nắp nồi", "Thân nồi", "Van thoát hơi"],
          ans: 0,
          exp: "Mâm nhiệt nằm ở đáy thân nồi, bên trong đúc dây điện trở nhiệt, có nhiệm vụ sinh nhiệt truyền trực tiếp làm nóng lòng nồi."
        }
      },
      {
        id: 13,
        title: "Bài 13. Bếp hồng ngoại",
        pages: "trang 68–71",
        objectives: [
          "Trình bày được cấu tạo gồm 4 bộ phận chính và nguyên lí hoạt động của bếp hồng ngoại.",
          "Nêu được các ưu điểm vượt trội và tiêu chí lựa chọn bếp hồng ngoại trong gia đình.",
          "Thực hiện thành thạo quy trình sử dụng 4 bước và tuân thủ các quy tắc an toàn nhiệt - điện."
        ],
        knowledge: `
### 1. Cấu tạo của bếp hồng ngoại
Bếp hồng ngoại gồm 4 bộ phận chính:
1. **Mặt bếp:** Làm bằng kính gốm Ceramic hoặc kính cường lực cao cấp, chịu được nhiệt độ cao (lên đến 700–800°C) và sốc nhiệt tốt, cách điện hoàn toàn, dễ dàng lau chùi vệ sinh.
2. **Mâm nhiệt hồng ngoại:** Nằm ngay dưới mặt kính, sử dụng cuộn dây điện trở mayso carbon hoặc bóng đèn halogen phát nhiệt. Khi có điện, mâm nhiệt phát ra năng lượng bức xạ tia hồng ngoại làm nóng mặt kính với hiệu suất cao.
3. **Thân bếp (Vỏ bếp):** Bằng kim loại phủ sơn tĩnh điện hoặc nhựa cao cấp bảo vệ linh kiện bên trong. Dưới đáy thân bếp có quạt tản nhiệt và các khe thông gió để làm mát mạch điện tử.
4. **Bảng điều khiển:** Gồm các phím cảm ứng hoặc nút cơ (Bật/Tắt nguồn On/Off, tăng giảm nhiệt độ/công suất, hẹn giờ, khóa an toàn trẻ em Child Lock, chọn chế độ đun, xào, nấu lẩu).

### 2. Nguyên lí làm việc của bếp hồng ngoại
Khi được cấp điện, dòng điện chạy qua mâm nhiệt làm cuộn dây nóng đỏ, phát ra tia bức xạ hồng ngoại. Tia hồng ngoại truyền qua mặt kính ceramic nung nóng đáy nồi, từ đó truyền nhiệt làm chín thức ăn bên trong nồi.
> **Ưu điểm lớn:** Bếp hồng ngoại **không kén nồi** (sử dụng được với tất cả các loại nồi chảo bằng inox, nhôm, gang, đất nung, thủy tinh chịu nhiệt). Đây là điểm khác biệt lớn so với bếp từ (bếp từ bắt buộc phải dùng nồi có đáy bắt từ tính).

### 3. Quy trình 4 bước sử dụng bếp hồng ngoại an toàn
1. **Bước 1: Chuẩn bị:** Lau sạch mặt bếp và đáy nồi. Đặt nồi nấu có thực phẩm vào chính giữa vùng nhiệt của mặt bếp. Cắm dây nguồn vào ổ điện (nghe tiếng 'bíp').
2. **Bước 2: Bật bếp & Chọn chế độ:** Nhấn phím Bật/Tắt (Power/On-Off). Nhấn phím chọn chế độ nấu (Nấu lẩu, Hầm, Chiên...) hoặc nhấn dấu (+) (-) để tăng giảm công suất phù hợp.
3. **Bước 3: Nấu nướng:** Quan sát thực phẩm chín, có thể cài đặt hẹn giờ nấu. Tuyệt đối không để thức ăn hoặc dầu mỡ trào ra mặt kính.
4. **Bước 4: Tắt bếp an toàn:** Nhấn phím Bật/Tắt để tắt bếp. **Lưu ý quan trọng:** Không được rút phích điện ngay lập tức, mà phải chờ 5–10 phút để quạt tản nhiệt bên dưới ngừng quay hẳn nhằm làm mát linh kiện điện tử bên trong bếp.

### 4. Các lưu ý an toàn tuyệt đối khi sử dụng bếp hồng ngoại
- **Cảnh báo bỏng nhiệt:** Mặt bếp hồng ngoại đạt nhiệt độ rất cao (vùng nấu chuyển màu đỏ rực khi hoạt động). Sau khi tắt bếp, mặt kính vẫn còn rất nóng (đèn cảnh báo chữ 'H' - Hot sáng). Tuyệt đối **không chạm tay vào vùng nấu**!
- Không dùng dụng cụ nấu có đáy gồ ghề, sắc nhọn kéo lê làm xước mặt kính.
- Không để vật dụng bằng nhựa hoặc khăn lau trên mặt bếp vì sẽ bị nóng chảy gây cháy khét.
- Chỉ lau chùi vệ sinh mặt bếp khi bếp đã nguội hoàn toàn.
`,
        diagramSvg: `
<svg viewBox="0 0 700 230" class="w-full max-w-2xl mx-auto rounded-2xl bg-slate-900 border border-red-500/30 p-4 shadow-xl" xmlns="http://www.w3.org/2000/svg">
  <!-- Bếp hồng ngoại nhìn xiên -->
  <rect x="180" y="50" width="340" height="130" rx="14" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
  
  <!-- Vùng nấu hồng ngoại đỏ rực -->
  <circle cx="300" cy="115" r="50" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <circle cx="300" cy="115" r="38" fill="#991b1b" stroke="#f87171" stroke-width="1.5"/>
  <circle cx="300" cy="115" r="22" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
  <circle cx="300" cy="115" r="8" fill="#fef08a"/>
  <text x="300" y="119" fill="#fef08a" font-size="8" font-weight="bold" text-anchor="middle">HOT</text>
  <text x="300" y="180" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">VÙNG MÂM NHIỆT HỒNG NGOẠI</text>

  <!-- Bảng điều khiển cảm ứng bên phải -->
  <rect x="380" y="70" width="120" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <!-- Màn hình LED -->
  <rect x="395" y="80" width="90" height="20" rx="4" fill="#000000"/>
  <text x="440" y="95" fill="#ef4444" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">2000 W</text>
  <!-- Các phím cảm ứng -->
  <circle cx="410" cy="120" r="8" fill="#334155"/><text x="410" y="123" fill="#ffffff" font-size="8" text-anchor="middle">-</text>
  <circle cx="440" cy="120" r="8" fill="#334155"/><text x="440" y="123" fill="#ffffff" font-size="8" text-anchor="middle">+</text>
  <circle cx="470" cy="120" r="8" fill="#ef4444"/><text x="470" y="123" fill="#ffffff" font-size="7" text-anchor="middle">ON</text>
  <text x="440" y="148" fill="#94a3b8" font-size="9" text-anchor="middle">Bảng điều khiển cảm ứng</text>

  <!-- Chú thích ưu điểm -->
  <text x="100" y="95" fill="#22c55e" font-size="12" font-weight="bold">✓ KHÔNG KÉN NỒI</text>
  <text x="100" y="115" fill="#94a3b8" font-size="10">Dùng được mọi loại nồi:</text>
  <text x="100" y="130" fill="#cbd5e1" font-size="10">Inox, nhôm, gang, gốm sứ...</text>

  <!-- Cảnh báo nóng -->
  <text x="590" y="95" fill="#f59e0b" font-size="12" font-weight="bold">⚠️ CẢNH BÁO BỎNG</text>
  <text x="590" y="115" fill="#94a3b8" font-size="10">Mặt kính rất nóng</text>
  <text x="590" y="130" fill="#fca5a5" font-size="10">Không chạm tay khi nấu!</text>
</svg>
`,
        memorize: "Bếp hồng ngoại gồm: Mặt bếp kính Ceramic chịu nhiệt, Mâm nhiệt (dây mayso phát tia hồng ngoại), Thân bếp (có quạt tản nhiệt) và Bảng điều khiển. Ưu điểm nổi bật: Không kén nồi, nấu nhanh. Quy tắc an toàn: Không chạm tay vào mặt kính đang nóng (tránh bỏng nặng), không rút điện ngay sau khi tắt bếp mà chờ quạt làm mát xong.",
        exercises: [
          "1. Nêu 4 bộ phận chính của bếp hồng ngoại và giải thích vì sao bếp hồng ngoại lại không kén dụng cụ nấu như bếp từ?",
          "2. Tại sao sau khi nấu xong và tắt bếp bằng nút Off, chúng ta không được rút ngay phích cắm điện của bếp hồng ngoại khỏi ổ cắm?",
          "3. Kể tên 3 hành vi gây mất an toàn nguy hiểm khi sử dụng bếp hồng ngoại trong gia đình."
        ],
        practical: "Quan sát bảng điều khiển của chiếc bếp hồng ngoại hoặc bếp từ ở nhà em (hoặc tại cửa hàng điện máy): Đọc các biểu tượng chức năng (nút nguồn, hẹn giờ, khóa trẻ em, tăng giảm công suất) và giải thích tác dụng của từng nút.",
        quiz: {
          q: "Vì sao sau khi nhấn nút tắt bếp hồng ngoại, người sử dụng không nên rút ngay phích cắm điện ra khỏi ổ cắm?",
          options: ["Cần để quạt tản nhiệt tiếp tục hoạt động làm mát các linh kiện bên trong", "Để bếp tiếp tục nấu chín thức ăn", "Để tránh làm hỏng nồi nấu", "Vì bếp sẽ phát nổ nếu rút điện ngay"],
          ans: 0,
          exp: "Sau khi tắt bếp, nhiệt độ trong thân bếp còn rất cao, quạt tản nhiệt cần tiếp tục quay từ 3-5 phút để làm mát bo mạch điện tử, bảo vệ tuổi thọ của bếp."
        }
      },
      {
        id: 14,
        title: "Bài 14. Dự án: An toàn và tiết kiệm điện năng trong gia đình",
        pages: "trang 72–73",
        objectives: [
          "Đánh giá được thực trạng sử dụng điện năng tại gia đình và phát hiện các hành vi gây mất an toàn hoặc lãng phí điện.",
          "Áp dụng được công thức tính toán điện năng tiêu thụ $A = P \\times t$ và chi phí tiền điện.",
          "Xây dựng và cam kết thực hiện kế hoạch hành động tiết kiệm điện năng hiệu quả."
        ],
        knowledge: `
### 1. Mục tiêu và ý nghĩa dự án
Điện năng là nguồn năng lượng thiết yếu của xã hội hiện đại nhưng không phải là vô tận. Việc sử dụng điện an toàn và tiết kiệm giúp:
- Giảm thiểu rủi ro tai nạn điện giật và nguy cơ hỏa hoạn cháy nổ gia đình.
- Giảm chi phí hóa đơn tiền điện hằng tháng cho bố mẹ.
- Giảm áp lực lên hệ thống điện quốc gia và giảm phát thải khí nhà kính bảo vệ Trái Đất.

### 2. Công thức tính toán điện năng tiêu thụ
Điện năng tiêu thụ của một đồ dùng điện được tính theo công thức:
\\[A = P \\times t\\]
Trong đó:
- $A$: Điện năng tiêu thụ (đơn vị: **Oát-giờ - Wh** hoặc **Ki-lô-oát-giờ - kWh**, trong đời sống 1 kWh gọi là **1 số điện**).
- $P$: Công suất định mức của thiết bị (đơn vị: **Oát - W** hoặc **kW**; $1 kW = 1.000 W$).
- $t$: Thời gian thiết bị hoạt động (đơn vị: **giờ - h**).
- Đổi đơn vị: $A (kWh) = \\dfrac{P (W) \\times t (h)}{1.000}$.

> **Ví dụ tính toán:** Một gia đình sử dụng 1 chiếc điều hòa nhiệt độ có công suất $1.000 W$ ($1 kW$), mỗi ngày bật 8 giờ trong mùa hè.
> - Điện năng tiêu thụ 1 ngày: $A = 1 kW \\times 8 h = 8 kWh$ (8 số điện).
> - Điện năng tiêu thụ trong 30 ngày (1 tháng): $8 kWh \\times 30 = 240 kWh$.
> - Nếu giá điện trung bình là $2.000 đ/kWh$, số tiền điện phải trả riêng cho chiếc điều hòa đó là: $240 \\times 2.000 = 480.000$ đồng/tháng.

### 3. Quy trình thực hiện dự án điều tra trong gia đình
- **Nhiệm vụ 1: Khảo sát thực trạng**
  + Lập bảng kiểm kê toàn bộ đồ dùng điện trong nhà (bóng đèn, quạt, tivi, tủ lạnh, điều hòa, nồi cơm, bình nóng lạnh).
  + Ghi lại công suất $P$ (W) và thời gian sử dụng ước tính $t$ (h/ngày).
- **Nhiệm vụ 2: Phát hiện lãng phí và nguy cơ mất an toàn**
  + Có bật đèn/quạt khi phòng không có người không?
  + Có để điều hòa nhiệt độ quá thấp (dưới 24°C) không?
  + Có mở tủ lạnh quá lâu hoặc để đồ ăn nóng vào tủ không?
  + Ổ cắm có bị lỏng lẻo, dây điện có bị trầy xước gần nguồn nước không?
- **Nhiệm vụ 3: Đề xuất giải pháp và cam kết hành động**
  + Thay thế bóng đèn sợi đốt/compact cũ bằng bóng đèn LED tiết kiệm điện.
  + Cài đặt điều hòa ở mức 26–28°C kết hợp bật quạt gió nhẹ thoang thoảng.
  + Tắt bình nóng lạnh trước khi tắm, chỉ bật trước 15 phút.
  + Tận dụng tối đa ánh sáng tự nhiên và gió trời ban ngày.

### 4. Kiến thức bổ trợ: Nhãn năng lượng ngôi sao
Theo quy định của Bộ Công Thương và Luật Sử dụng năng lượng tiết kiệm và hiệu quả:
- Các thiết bị điện lưu hành tại Việt Nam (tủ lạnh, máy giặt, điều hòa, quạt) bắt buộc phải dán nhãn năng lượng so sánh từ **1 sao đến 5 sao**.
- **Càng nhiều sao thì thiết bị càng tiết kiệm điện.** Thiết bị đạt cấp 5 sao là thiết bị có hiệu suất năng lượng tối ưu nhất, tiết kiệm điện năng vượt trội nhất.
`,
        diagramSvg: `
<svg viewBox="0 0 700 230" class="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-yellow-200 dark:border-yellow-800 p-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Nhãn năng lượng 5 sao -->
  <g transform="translate(60, 20)">
    <rect width="180" height="185" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
    <rect x="0" y="0" width="180" height="35" rx="12" fill="#059669"/>
    <text x="90" y="22" fill="#ffffff" font-size="11" font-weight="black" text-anchor="middle">BỘ CÔNG THƯƠNG</text>
    <!-- 5 ngôi sao vàng -->
    <text x="90" y="65" fill="#eab308" font-size="20" text-anchor="middle">★ ★ ★ ★ ★</text>
    <text x="90" y="90" fill="#065f46" font-size="12" font-weight="black" text-anchor="middle">TIẾT KIỆM NĂNG LƯỢNG</text>
    <text x="90" y="115" fill="#1e293b" font-size="10" text-anchor="middle">Hiệu suất năng lượng cao</text>
    <rect x="20" y="130" width="140" height="35" rx="6" fill="#10b981"/>
    <text x="90" y="152" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">5 SAO (TỐI ƯU)</text>
  </g>

  <!-- Công thức tính điện năng -->
  <g transform="translate(280, 20)">
    <rect width="360" height="185" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="180" y="32" fill="#1e3a8a" font-size="13" font-weight="black" text-anchor="middle">CÔNG THỨC TÍNH ĐIỆN NĂNG TIÊU THỤ</text>
    <rect x="60" y="45" width="240" height="40" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="180" y="70" fill="#1d4ed8" font-size="16" font-weight="black" text-anchor="middle">A = P × t</text>
    
    <text x="30" y="105" fill="#334155" font-size="11">• <strong>A</strong>: Điện năng tiêu thụ (Wh hoặc kWh / số điện)</text>
    <text x="30" y="125" fill="#334155" font-size="11">• <strong>P</strong>: Công suất thiết bị (W hoặc kW)</text>
    <text x="30" y="145" fill="#334155" font-size="11">• <strong>t</strong>: Thời gian sử dụng (giờ - h)</text>
    <text x="30" y="168" fill="#047857" font-size="11" font-weight="bold">1 kWh = 1.000 Wh = 1 Số điện trên công tơ</text>
  </g>
</svg>
`,
        memorize: "Công thức tính điện năng: A = P × t (trong đó 1 kWh = 1.000 Wh = 1 số điện). Khi chọn mua thiết bị, ưu tiên Nhãn năng lượng 5 sao để tiết kiệm điện nhất. 3 hành động thiết thực: Tắt thiết bị khi không dùng, để điều hòa 26–28°C và tận dụng gió trời tự nhiên.",
        exercises: [
          "1. Viết công thức tính điện năng tiêu thụ và giải thích tên gọi, đơn vị của từng đại lượng trong công thức.",
          "2. Một chiếc quạt máy có công suất 60W, trung bình mỗi ngày chạy 10 giờ. Hãy tính số điện năng (kWh) quạt tiêu thụ trong 30 ngày.",
          "3. Tại sao các thiết bị có dán nhãn năng lượng 5 sao lại được Nhà nước khuyến khích người dân ưu tiên mua sắm và sử dụng?"
        ],
        practical: "Thực hiện dự án kiểm toán năng lượng gia đình: Hãy đọc số tiền và số kWh điện tiêu thụ trên hóa đơn tiền điện tháng gần nhất của gia đình em, sau đó cùng gia đình đề ra 3 biện pháp tiết kiệm điện cụ thể để giảm hóa đơn tháng tới.",
        quiz: {
          q: "Nhãn năng lượng dán trên các thiết bị gia dụng do Bộ Công Thương chứng nhận có cấp độ cao nhất thể hiện mức độ tiết kiệm điện tối ưu nhất là bao nhiêu sao?",
          options: ["5 sao", "3 sao", "1 sao", "10 sao"],
          ans: 0,
          exp: "Nhãn năng lượng hình tam giác của Bộ Công Thương xếp hạng từ 1 sao đến 5 sao. Thiết bị đạt cấp 5 sao có hiệu suất năng lượng cao nhất và tiết kiệm điện tối đa."
        }
      }
    ]
  }
];

// Bộ 25 câu hỏi trắc nghiệm Hội thi Trạng Nguyên Công Nghệ Lớp 6 (60:00)
const trangNguyenQuestions = [
  {
    q: "Nhà ở có vai trò cốt lõi nào đối với đời sống con người?",
    options: ["Bảo vệ trước thiên nhiên, đáp ứng nhu cầu sinh hoạt và gắn kết gia đình", "Chỉ dùng để cất giữ đồ đạc ban đêm", "Chỉ là nơi để ngủ và không cần sinh hoạt", "Chỉ để kinh doanh buôn bán ngoài mặt phố"],
    ans: 0,
    exp: "Nhà ở có 3 vai trò quan trọng: bảo vệ con người trước thiên nhiên, đáp ứng nhu cầu sinh hoạt thường nhật và là nơi gắn kết các thành viên gia đình."
  },
  {
    q: "Bộ phận nào của ngôi nhà nằm sâu dưới mặt đất, có nhiệm vụ chịu toàn bộ tải trọng của công trình truyền xuống nền đất?",
    options: ["Móng nhà", "Sàn nhà", "Mái nhà", "Khung nhà"],
    ans: 0,
    exp: "Móng nhà nằm sâu dưới mặt đất chịu toàn bộ tải trọng của ngôi nhà truyền xuống nền đất vững chắc."
  },
  {
    q: "Kiểu kiến trúc nhà ở phổ biến ở vùng núi cao, được dựng trên các cột cao hơn mặt đất để tránh thú dữ và ẩm thấp là gì?",
    options: ["Nhà sàn", "Nhà nổi", "Nhà ống mặt phố", "Nhà chung cư"],
    ans: 0,
    exp: "Nhà sàn là kiến trúc đặc trưng vùng cao giúp đồng bào tránh ẩm ướt và thú dữ."
  },
  {
    q: "Vật liệu xây dựng nào được tạo thành từ hỗn hợp gồm cát, xi măng và nước?",
    options: ["Vữa xây dựng", "Bê tông cốt thép", "Gạch nung", "Đá hộc"],
    ans: 0,
    exp: "Vữa xây trát gồm cát, xi măng và nước; nếu có thêm đá dăm thì sẽ tạo thành bê tông."
  },
  {
    q: "Quy trình xây dựng một ngôi nhà kiên cố gồm 3 bước tuần tự nào?",
    options: ["Thiết kế → Thi công thô → Hoàn thiện", "Thi công thô → Thiết kế → Hoàn thiện", "Hoàn thiện → Thiết kế → Thi công thô", "Thi công thô → Hoàn thiện → Thiết kế"],
    ans: 0,
    exp: "Quy trình chuẩn gồm 3 bước: 1. Thiết kế (bản vẽ, xin phép) → 2. Thi công thô (móng, khung, tường, mái) → 3. Hoàn thiện (trát, lát, sơn, nội thất)."
  },
  {
    q: "Đặc điểm nổi bật của Ngôi nhà thông minh (Smart Home) là gì?",
    options: ["Trang bị hệ thống điều khiển tự động hoặc bán tự động, tiện nghi, an toàn và tiết kiệm năng lượng", "Làm hoàn toàn bằng vàng và kim cương", "Không có cửa ra vào và cửa sổ", "Không sử dụng năng lượng điện"],
    ans: 0,
    exp: "Ngôi nhà thông minh trang bị hệ thống tự động/bán tự động kết nối mạng giúp nâng cao tiện nghi, an toàn và tiết kiệm điện."
  },
  {
    q: "Nhóm thực phẩm nào là nguồn cung cấp năng lượng chính cho mọi hoạt động thể lực và trí tuệ của con người?",
    options: ["Nhóm giàu tinh bột, chất đường", "Nhóm giàu vitamin", "Nhóm giàu chất khoáng", "Nhóm giàu muối ăn"],
    ans: 0,
    exp: "Tinh bột và chất đường (Carbohydrate) là nguồn cung cấp 60-65% năng lượng chính cho cơ thể."
  },
  {
    q: "Chất đạm (Protein) có vai trò then chốt nào đối với sự phát triển của cơ thể học sinh?",
    options: ["Xây dựng tế bào, cơ bắp, giúp cơ thể lớn lên và sửa chữa tổn thương", "Chỉ làm tăng cảm giác khát nước", "Giúp hòa tan các chất độc hại", "Thay thế hoàn toàn lượng nước uống"],
    ans: 0,
    exp: "Chất đạm là vật liệu cấu tạo nên tế bào, cơ bắp, xương và các cơ quan trong cơ thể."
  },
  {
    q: "Vitamin nào có vai trò quan trọng giúp mắt sáng khỏe và bảo vệ giác mạc?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B1"],
    ans: 0,
    exp: "Vitamin A cần thiết cho thị giác, thiếu vitamin A sẽ dẫn đến bệnh quáng gà và khô mắt."
  },
  {
    q: "Theo SGK Công nghệ 6, phương pháp bảo quản làm lạnh thực phẩm thường được duy trì ở nhiệt độ nào?",
    options: ["Khoảng 1°C đến 7°C", "Dưới 0°C", "Khoảng 15°C đến 25°C", "Trên 60°C"],
    ans: 0,
    exp: "Làm lạnh ở ngăn mát tủ lạnh thường duy trì từ 1°C đến 7°C để kìm hãm vi khuẩn sinh sôi."
  },
  {
    q: "Phương pháp nào sau đây là phương pháp chế biến thực phẩm KHÔNG sử dụng nhiệt?",
    options: ["Trộn hỗn hợp (nộm, salad)", "Luộc trong nước sôi", "Kho thịt cá", "Rán (chiên) trong dầu mỡ"],
    ans: 0,
    exp: "Trộn nộm/gỏi/salad là phương pháp phối trộn rau củ quả sống với nước sốt chua ngọt mà không dùng nhiệt đun nấu."
  },
  {
    q: "Để tránh nhiễm khuẩn chéo trong gian bếp, người nội trợ cần tuân thủ nguyên tắc nào?",
    options: ["Dùng dao và thớt riêng biệt cho thực phẩm sống và thực phẩm chín", "Dùng chung một chiếc thớt cho cả thịt sống và thịt chín", "Thái thịt chín xong thái luôn cá sống", "Không cần rửa dao thớt sau khi dùng"],
    ans: 0,
    exp: "Phải dùng dao thớt riêng cho đồ sống và đồ chín để tránh vi khuẩn từ đồ sống nhiễm sang thức ăn đã nấu chín."
  },
  {
    q: "Loại vải nào có nguồn gốc từ thực vật hoặc động vật, mặc thoáng mát, hút ẩm tốt nhưng dễ bị nhàu?",
    options: ["Vải sợi thiên nhiên (cotton, lanh, tơ tằm)", "Vải sợi nylon tổng hợp", "Vải sợi polyester", "Vải bạt nhựa"],
    ans: 0,
    exp: "Vải sợi thiên nhiên có nguồn gốc từ cây bông, lanh hoặc kén tằm, cừu; mặc rất mát và thấm hút mồ hôi nhưng dễ nhàu nát."
  },
  {
    q: "Người có vóc dáng thấp và tròn trịa nên chọn trang phục có đường nét họa tiết như thế nào?",
    options: ["Kẻ sọc dọc, hoa văn nhỏ, màu sắc tối/trầm", "Kẻ sọc ngang to bản, màu sáng rực rỡ", "Họa tiết hoa to bản toàn thân", "Áo thụng rộng thùng thình nhiều bèo nhún"],
    ans: 0,
    exp: "Đường kẻ sọc dọc và tông màu tối tạo cảm giác thị giác thon gọn, cao ráo hơn."
  },
  {
    q: "Biểu tượng hình chiếc bàn là trên nhãn mác quần áo thể hiện quy định chăm sóc gì?",
    options: ["Quy định về nhiệt độ khi là (ủi) trang phục", "Quy định về cách giặt nước", "Quy định về dùng chất tẩy", "Quy định về phơi ngoài nắng"],
    ans: 0,
    exp: "Hình bàn là là kí hiệu hướng dẫn nhiệt độ an toàn khi là/ủi đồ (1 chấm, 2 chấm hoặc 3 chấm)."
  },
  {
    q: "Phong cách thời trang nào có đặc điểm giản dị, nghiêm túc, lịch sự, ít chi tiết rườm rà và không bao giờ lỗi mốt?",
    options: ["Phong cách Cổ điển (Classic)", "Phong cách Thể thao", "Phong cách Lãng mạn", "Phong cách Dân gian"],
    ans: 0,
    exp: "Phong cách Cổ điển (Classic) mang tính mực thước, thanh lịch vượt thời gian."
  },
  {
    q: "Lưới điện sinh hoạt dân dụng tại Việt Nam hiện nay có cấp điện áp định mức là bao nhiêu?",
    options: ["220 V", "110 V", "380 V", "24 V"],
    ans: 0,
    exp: "Điện áp định mức của lưới điện hạ thế sinh hoạt gia đình Việt Nam là 220 Vôn (tần số 50Hz)."
  },
  {
    q: "Công suất định mức của một đồ dùng điện được đo bằng đơn vị nào?",
    options: ["Oát (W) hoặc Ki-lô-oát (kW)", "Vôn (V)", "Ampe (A)", "Mét (m)"],
    ans: 0,
    exp: "Công suất định mức đo bằng Oát (W) hoặc kW (1kW = 1.000W), thể hiện mức tiêu thụ điện năng."
  },
  {
    q: "Hành động nào sau đây vi phạm nghiêm trọng quy tắc an toàn khi sử dụng đồ dùng điện?",
    options: ["Chạm tay ướt vào công tắc hoặc phích cắm điện", "Rút phích cắm khi không sử dụng thời gian dài", "Ngắt cầu dao trước khi sửa chữa bóng đèn", "Sử dụng phích cắm vừa khít với ổ cắm"],
    ans: 0,
    exp: "Nước dẫn điện rất tốt, chạm tay ướt vào thiết bị điện có nguy cơ bị điện giật đe dọa tính mạng."
  },
  {
    q: "Loại bóng đèn nào hiện nay được khuyến khích sử dụng nhất vì tiết kiệm điện 80–90% và tuổi thọ lên tới 50.000 giờ?",
    options: ["Đèn LED", "Đèn sợi đốt", "Đèn huỳnh quang", "Đèn sợi tóc vonfram"],
    ans: 0,
    exp: "Đèn LED có hiệu suất phát quang cao nhất, tỏa nhiệt ít và tuổi thọ bền bỉ nhất hiện nay."
  },
  {
    q: "Bộ phận nào trong nồi cơm điện có chức năng chuyển điện năng thành nhiệt năng truyền trực tiếp vào đáy lòng nồi?",
    options: ["Mâm nhiệt", "Nắp nồi", "Thân nồi", "Van thoát hơi"],
    ans: 0,
    exp: "Mâm nhiệt ở đáy nồi chứa dây điện trở nhiệt, nung nóng truyền nhiệt làm chín cơm."
  },
  {
    q: "Ưu điểm nổi bật nhất của bếp hồng ngoại so với bếp từ là gì?",
    options: ["Không kén dụng cụ nấu (dùng được nồi thủy tinh, gốm sứ, inox, nhôm, gang)", "Không tỏa nhiệt ra môi trường", "Mặt kính không bao giờ bị nóng", "Không cần sử dụng nguồn điện"],
    ans: 0,
    exp: "Bếp hồng ngoại làm nóng mặt kính nên dùng được với mọi loại chất liệu nồi chảo khác nhau."
  },
  {
    q: "Sau khi bấm tắt bếp hồng ngoại, người sử dụng cần lưu ý điều gì?",
    options: ["Không rút phích cắm ngay để quạt tản nhiệt làm mát linh kiện và không chạm tay vào mặt kính còn nóng", "Rút phích cắm ngay lập tức", "Dùng khăn ướt đắp lên mặt bếp đang nóng", "Chạm tay vào xem bếp đã nguội chưa"],
    ans: 0,
    exp: "Quạt tản nhiệt cần tiếp tục quay làm mát bếp, đồng thời mặt kính còn nhiệt độ rất cao dễ gây bỏng."
  },
  {
    q: "Công thức tính điện năng tiêu thụ $A$ của một đồ dùng điện có công suất $P$ trong thời gian $t$ là gì?",
    options: ["A = P × t", "A = P + t", "A = P : t", "A = P - t"],
    ans: 0,
    exp: "Điện năng tiêu thụ A = P × t (trong đó P là công suất, t là thời gian hoạt động)."
  },
  {
    q: "Một chiếc bóng đèn LED có công suất 10W thắp sáng liên tục trong 100 giờ sẽ tiêu thụ bao nhiêu số điện (kWh)?",
    options: ["1 kWh (1 số điện)", "10 kWh", "100 kWh", "1.000 kWh"],
    ans: 0,
    exp: "A = 10W × 100h = 1.000 Wh = 1 kWh (tương đương đúng 1 số điện)."
  }
];

module.exports = {
  chapters,
  trangNguyenQuestions
};
