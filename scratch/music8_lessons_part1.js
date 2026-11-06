// Lessons 1 to 8 for Am Nhac 8 (Topics 1 to 4)

const lessonsPart1 = [
  // BÀI 1
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    title: "Bài 1: Hát bài 'Chào năm học mới' & Nghe nhạc 'Bay lên nhé nụ cười'",
    tag: "Hát & Nghe nhạc",
    objectives: [
      "Hát đúng giai điệu, lời ca, nhịp độ và sắc thái vui tươi, rộn ràng của bài hát 'Chào năm học mới'.",
      "Biết lấy hơi đúng chỗ theo câu nhạc, phát âm rõ lời, hòa giọng nhịp nhàng cùng tập thể.",
      "Nghe ca khúc 'Bay lên nhé nụ cười', nhận biết tính chất âm nhạc vui tươi, tiết tấu sôi nổi và thông điệp tích cực.",
      "Luyện tập hát kết hợp vỗ tay/gõ đệm theo phách, vận động cơ thể (body percussion) và tự tin biểu diễn nhóm."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#f3e8ff"/>
      <text x="55" y="67" text-anchor="middle" font-size="22" fill="#7e22ce"><tspan font-family="FontAwesome">&#xf001;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#581c87">HÁT: CHÀO NĂM HỌC MỚI (Phạm Tuyên)</text>
      <text x="100" y="65" font-size="11" fill="#6b21a8">• Giọng Đô trưởng, nhịp 2/4 rộn rã, bước chân tựu trường</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#059669">NGHE NHẠC: BAY LÊN NHÉ NỤ CƯỜI • Thông điệp ước mơ tuổi thơ</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-microphone-lines text-purple-600"></i>
            1. Học hát: "Chào năm học mới" (Nhạc &amp; lời: Phạm Tuyên)
          </h4>
          <p>• <strong>Tác giả:</strong> Nhạc sĩ Phạm Tuyên – cây đại thụ của nền âm nhạc Việt Nam với hàng trăm ca khúc tuổi thơ bất hủ (<em>Chiếc đèn ông sao, Tiến lên đoàn viên, Cánh én tuổi thơ...</em>).</p>
          <p class="mt-1">• <strong>Tính chất &amp; Sắc thái:</strong> Bài hát viết ở nhịp 2/4, tốc độ vừa phải, rộn ràng, tươi vui; diễn tả khí thế hân hoan, rạo rực của ngày khai trường đón chào năm học mới.</p>
          <p class="mt-1">• <strong>Yêu cầu kĩ thuật hát:</strong> Lấy hơi sâu đầu mỗi câu hát, nhả chữ rõ ràng, tươi tắn; giữ đúng cao độ và trường độ ở các nốt móc đơn và nốt đen; kết hợp gõ đệm theo phách (Phách 1 mạnh - Phách 2 nhẹ).</p>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-headphones text-blue-600"></i>
            2. Nghe nhạc: "Bay lên nhé nụ cười"
          </h4>
          <p>• <strong>Cảm nhận tác phẩm:</strong> Ca khúc mang âm hưởng tươi sáng, nhịp điệu trẻ trung, truyền cảm hứng về tình bạn trong sáng, niềm tin yêu cuộc sống và khát vọng vươn tới tương lai tươi đẹp.</p>
          <p class="mt-1">• <strong>Hoạt động tiếp nhận:</strong> Lắng nghe giai điệu kết hợp vận động cơ thể nhịp nhàng hoặc dùng nhạc cụ gõ đệm (thanh phách, xúc xắc, trống con) tạo không khí sôi động.</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-lightbulb text-emerald-600"></i> Vận dụng &amp; Sáng tạo:
          </h4>
          <p>Chia sẻ cảm nghĩ về ngày khai trường đầu tiên của năm học lớp 8. Thử sáng tạo động tác phụ họa hoặc kết hợp bộ gõ cơ thể (vỗ tay, giậm chân, búng tay) khi hát lại điệp khúc bài <em>Chào năm học mới</em>.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Bài hát 'Chào năm học mới' do nhạc sĩ nào sáng tác?",
        options: ["(Recommended) Phạm Tuyên", "Trịnh Công Sơn", "Hoàng Vân", "Phan Huỳnh Điểu"],
        ans: 0,
        expl: "Bài hát 'Chào năm học mới' là một sáng tác nổi tiếng của Nhạc sĩ Phạm Tuyên viết cho lứa tuổi học trò ngày tựu trường."
      },
      {
        q: "Sắc thái chủ đạo của bài hát 'Chào năm học mới' là gì?",
        options: ["(Recommended) Rộn ràng, vui tươi, phấn khởi", "Trầm lắng, tha thiết", "Hùng tráng, uy nghiêm", "Mượt mà, êm đềm"],
        ans: 0,
        expl: "Giai điệu nhịp 2/4 rộn rã thể hiện niềm vui háo hức, phấn khởi bước vào năm học mới."
      },
      {
        q: "Khi hát tập thể bài hát 'Chào năm học mới', kĩ thuật lấy hơi cần chú ý điều gì?",
        options: ["(Recommended) Lấy hơi theo câu nhạc, phát âm rõ lời và hòa giọng nhịp nhàng", "Hát càng to càng tốt bất kể câu nhạc", "Không cần lấy hơi ở các dấu lặng", "Hát tự do không theo nhịp độ"],
        ans: 0,
        expl: "Hát tập thể đòi hỏi lấy hơi đồng bộ theo dấu câu, phát âm chuẩn xác và điều chỉnh âm lượng hòa quyện với cả lớp."
      },
      {
        q: "Ca khúc 'Bay lên nhé nụ cười' mang thông điệp ý nghĩa nào?",
        options: ["(Recommended) Tình bạn trong sáng, niềm lạc quan và khát vọng tuổi trẻ", "Nỗi buồn chia tay mùa hè", "Lòng dũng cảm trong chiến đấu", "Vẻ đẹp của thiên nhiên mùa đông"],
        ans: 0,
        expl: "Ca khúc truyền tải năng lượng tích cực, nụ cười hồn nhiên và những ước mơ bay cao của tuổi học trò."
      }
    ]
  },

  // BÀI 2
  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    title: "Bài 2: Lý thuyết âm nhạc: Gam trưởng, giọng trưởng, giọng Đô trưởng & Đọc nhạc số 1",
    tag: "Lí thuyết & Đọc nhạc",
    objectives: [
      "Hiểu rõ khái niệm gam trưởng, giọng trưởng, âm chủ và cấu trúc cung / nửa cung của gam trưởng.",
      "Nhận biết giọng Đô trưởng (C-dur / C Major), âm chủ Đô, hóa biểu không có dấu thăng (#) hoặc giáng (b).",
      "Đọc đúng tên nốt, cao độ, trường độ bài đọc nhạc số 1 ở nhịp 2/4 kết hợp gõ phách hoặc đánh nhịp.",
      "Vận dụng nhận diện tính chất vui tươi, trong sáng đặc trưng của giọng trưởng trong các tác phẩm âm nhạc."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cấu trúc Gam Đô trưởng: C - D - E - F - G - A - B - C -->
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">CẤU TRÚC GAM TRƯỞNG: 1 – 1 – 1/2 – 1 – 1 – 1 – 1/2</text>
      <!-- Nốt nhạc -->
      <g transform="translate(35, 45)" font-size="13" font-weight="bold" text-anchor="middle">
        <circle cx="20" cy="20" r="14" fill="#3b82f6"/><text x="20" y="25" fill="#fff">Đô</text>
        <circle cx="75" cy="20" r="14" fill="#3b82f6"/><text x="75" y="25" fill="#fff">Rê</text>
        <circle cx="130" cy="20" r="14" fill="#3b82f6"/><text x="130" y="25" fill="#fff">Mi</text>
        <circle cx="185" cy="20" r="14" fill="#ef4444"/><text x="185" y="25" fill="#fff">Fa</text>
        <circle cx="240" cy="20" r="14" fill="#3b82f6"/><text x="240" y="25" fill="#fff">Sol</text>
        <circle cx="295" cy="20" r="14" fill="#3b82f6"/><text x="295" y="25" fill="#fff">La</text>
        <circle cx="350" cy="20" r="14" fill="#3b82f6"/><text x="350" y="25" fill="#fff">Si</text>
        <circle cx="405" cy="20" r="14" fill="#ef4444"/><text x="405" y="25" fill="#fff">Đô</text>
      </g>
      <!-- Cung và nửa cung -->
      <g transform="translate(35, 90)" font-size="11" font-weight="bold" text-anchor="middle" fill="#475569">
        <text x="47" y="10">1c</text><text x="102" y="10">1c</text>
        <text x="157" y="10" fill="#dc2626">1/2c</text>
        <text x="212" y="10">1c</text><text x="267" y="10">1c</text><text x="322" y="10">1c</text>
        <text x="377" y="10" fill="#dc2626">1/2c</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shapes text-blue-600"></i>
            1. Gam trưởng, giọng trưởng và giọng Đô trưởng
          </h4>
          <p>• <strong>Gam trưởng:</strong> Là hệ thống gồm 7 bậc âm được sắp xếp liền bậc từ âm chủ (bậc I) lên âm chủ quãng tám (bậc VIII). Cấu trúc cung và nửa cung:</p>
          <div class="p-2 my-2 bg-white dark:bg-gray-800 rounded-lg text-center font-bold text-blue-700 dark:text-blue-300 tracking-wider">
            Bậc I <span class="text-gray-400">—1c—</span> Bậc II <span class="text-gray-400">—1c—</span> Bậc III <span class="text-red-500">—½c—</span> Bậc IV <span class="text-gray-400">—1c—</span> Bậc V <span class="text-gray-400">—1c—</span> Bậc VI <span class="text-gray-400">—1c—</span> Bậc VII <span class="text-red-500">—½c—</span> Bậc VIII
          </div>
          <p>• Nửa cung nằm giữa: <strong>Bậc III – Bậc IV</strong> và <strong>Bậc VII – Bậc VIII</strong>.</p>
          <p class="mt-1">• <strong>Giọng trưởng:</strong> Hình thành khi các bậc âm của gam trưởng dùng để xây dựng một tác phẩm âm nhạc (âm chủ là trung tâm ổn định nhất). Tính chất thường tươi sáng, vui tươi, khỏe khoắn.</p>
          <p class="mt-1">• <strong>Giọng Đô trưởng (C-dur / C Major):</strong> Có âm chủ là <strong>Đô (C)</strong>. Thang âm: Đô – Rê – Mi – Fa – Sol – La – Si – (Đô). <em>Hóa biểu hoàn toàn không có dấu thăng hoặc giáng.</em></p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-indigo-600"></i>
            2. Thực hành: Bài đọc nhạc số 1
          </h4>
          <p>• Viết ở giọng <strong>Đô trưởng</strong>, nhịp <strong>2/4</strong>.</p>
          <p class="mt-1">• <strong>Các bước luyện tập:</strong></p>
          <p class="pl-4">1. Đọc gam Đô trưởng (đi lên và đi xuống) để củng cố cao độ chuẩn.</p>
          <p class="pl-4">2. Gõ tiết tấu riêng: Nốt đen, nốt móc đơn, dấu lặng đen.</p>
          <p class="pl-4">3. Ghép cao độ từng câu nhạc với tốc độ vừa phải.</p>
          <p class="pl-4">4. Đọc cả bài kết hợp đánh nhịp 2/4 (Phách 1 tay đưa xuống, Phách 2 tay hất lên).</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Cấu trúc cung và nửa cung của gam trưởng gồm các khoảng cách nào?",
        options: ["(Recommended) 1 – 1 – 1/2 – 1 – 1 – 1 – 1/2", "1 – 1/2 – 1 – 1 – 1/2 – 1 – 1", "1 – 1 – 1 – 1/2 – 1 – 1 – 1/2", "1/2 – 1 – 1 – 1 – 1/2 – 1 – 1"],
        ans: 0,
        expl: "Gam trưởng có khoảng cách nửa cung (1/2c) nằm giữa bậc III - IV và bậc VII - VIII: 1 - 1 - 1/2 - 1 - 1 - 1 - 1/2."
      },
      {
        q: "Hóa biểu của giọng Đô trưởng (C-dur) có đặc điểm gì?",
        options: ["(Recommended) Không có dấu thăng (#) hoặc dấu giáng (b)", "Có 1 dấu thăng (Fa#)", "Có 1 dấu giáng (Sib)", "Có 2 dấu thăng (Fa#, Đô#)"],
        ans: 0,
        expl: "Giọng Đô trưởng tự nhiên có hóa biểu trống, không chứa bất kì dấu thăng hay dấu giáng nào."
      },
      {
        q: "Khoảng cách nửa cung trong gam Đô trưởng rơi vào các cặp nốt nào?",
        options: ["(Recommended) Mi – Fa và Si – Đô", "Đô – Rê và Sol – La", "Rê – Mi và La – Si", "Fa – Sol và Đô – Rê"],
        ans: 0,
        expl: "Trong thang âm tự nhiên, Mi - Fa (bậc III - IV) và Si - Đô (bậc VII - VIII) cách nhau nửa cung."
      },
      {
        q: "Tính chất cảm xúc đặc trưng của các tác phẩm viết ở giọng trưởng thường là gì?",
        options: ["(Recommended) Tươi sáng, vui tươi, trong trẻo, lạc quan", "Trầm buồn, u tối, sầu muộn", "Bí ẩn, ma quái", "Nặng nề, u sầu"],
        ans: 0,
        expl: "Giọng trưởng mang màu sắc âm thanh hòa âm tươi sáng, phấn khởi, tràn đầy năng lượng tích cực."
      }
    ]
  },

  // BÀI 3
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Tôi yêu Việt Nam",
    title: "Bài 3: Hát bài 'Việt Nam ơi' & Nghe nhạc 'Ngàn ước mơ Việt Nam'",
    tag: "Hát & Nghe nhạc",
    objectives: [
      "Hát đúng giai điệu, lời ca bài hát 'Việt Nam ơi', thể hiện trọn vẹn tình cảm yêu quê hương, đất nước và niềm tự hào dân tộc.",
      "Nghe ca khúc 'Ngàn ước mơ Việt Nam', cảm nhận khát vọng vươn mình của thế hệ trẻ dựng xây non sông.",
      "Thực hành hát kết hợp gõ đệm tiết tấu, vận động phụ họa cơ thể hoặc trình diễn tốp ca sôi nổi.",
      "Liên hệ hình ảnh đất nước trong âm nhạc với cảnh sắc, con người và truyền thống lịch sử hào hùng."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#ffe4e6"/>
      <text x="55" y="68" text-anchor="middle" font-size="22" fill="#e11d48"><tspan font-family="FontAwesome">&#xf024;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#9f1239">HÁT: VIỆT NAM ƠI (Bùi Minh Tấn)</text>
      <text x="100" y="65" font-size="11" fill="#be123c">• Hào sảng, sôi động, khơi dậy tình yêu Tổ quốc</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#047857">NGHE: NGÀN ƯỚC MƠ VIỆT NAM (Nguyễn Hồng Thuận) • Khát vọng tuổi trẻ</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-flag text-rose-600"></i>
            1. Học hát: "Việt Nam ơi" (Nhạc &amp; lời: Bùi Minh Tấn)
          </h4>
          <p>• <strong>Bối cảnh &amp; Ý nghĩa:</strong> Ca khúc ra đời như một khúc khải hoàn tràn đầy năng lượng tuổi trẻ, thường vang lên cổ vũ trong các sự kiện thể thao lớn, ngày hội thanh niên và lễ kỷ niệm quốc gia.</p>
          <p class="mt-1">• <strong>Đặc điểm âm nhạc:</strong> Nhịp điệu sôi nổi, tiết tấu dồn dập, ca từ ngắn gọn, giàu hình ảnh và tinh thần tự hào: <em>"Từ nơi đồng xanh thơm hương lúa... Việt Nam hỡi, Việt Nam ơi, tự hào hát mãi lên Việt Nam ơi!"</em>.</p>
          <p class="mt-1">• <strong>Yêu cầu biểu diễn:</strong> Hát với phong thái tự tin, ngực mở rộng, giọng vang, tràn đầy nhiệt huyết; nhấn mạnh vào các phách mạnh của ô nhịp.</p>
        </div>

        <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-headphones text-teal-600"></i>
            2. Nghe nhạc: "Ngàn ước mơ Việt Nam" (Sáng tác: Nguyễn Hồng Thuận)
          </h4>
          <p>• <strong>Nội dung:</strong> Khắc họa bức tranh đất nước Việt Nam đổi mới, triệu trái tim cùng chung khát vọng đưa đất nước vươn tầm thế giới.</p>
          <p class="mt-1">• <strong>Cảm nhận:</strong> Giai điệu trữ tình ở đoạn đầu rồi bùng cháy mạnh mẽ, truyền cảm hứng sống cống hiến cho thế hệ học sinh.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Ca khúc 'Việt Nam ơi' của nhạc sĩ Bùi Minh Tấn thể hiện nội dung chủ đạo nào?",
        options: ["(Recommended) Lòng tự hào dân tộc, tình yêu quê hương và tinh thần đoàn kết", "Nỗi buồn hoài niệm quê xưa", "Cảnh thanh bình nơi thôn quê vắng vẻ", "Tình bạn tuổi thơ bên mái trường"],
        ans: 0,
        expl: "'Việt Nam ơi' khơi dậy ngọn lửa nhiệt huyết yêu nước và niềm tự hào dân tộc sâu sắc."
      },
      {
        q: "Sắc thái thể hiện phù hợp nhất khi hát bài 'Việt Nam ơi' là:",
        options: ["(Recommended) Tự hào, sôi nổi, hào hùng, tràn đầy nhiệt huyết", "Êm dịu, nhẹ nhàng, du dương", "Trầm ngâm, sâu lắng", "U sầu, tiếc nuối"],
        ans: 0,
        expl: "Bài hát đòi hỏi sự sôi động, hào sảng và tràn ngập niềm tin yêu tự hào."
      },
      {
        q: "Ca khúc 'Ngàn ước mơ Việt Nam' do nhạc sĩ nào sáng tác?",
        options: ["(Recommended) Nguyễn Hồng Thuận", "Nguyễn Văn Chung", "Vũ Cát Tường", "Khắc Hưng"],
        ans: 0,
        expl: "Ca khúc 'Ngàn ước mơ Việt Nam' do nhạc sĩ Nguyễn Hồng Thuận sáng tác."
      },
      {
        q: "Khi gõ đệm cho bài hát 'Việt Nam ơi', nên sử dụng loại nhạc cụ gõ nào để tạo không khí hào hùng?",
        options: ["(Recommended) Trống con, thanh phách, chuông lắc", "Đàn bầu", "Sáo trúc", "Đàn tam thập lục"],
        ans: 0,
        expl: "Bộ gõ giữ nhịp như trống con, thanh phách tạo nên tiết tấu dồn dập, tiếp thêm ngọn lửa hào khí cho bài hát."
      }
    ]
  },

  // BÀI 4
  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Tôi yêu Việt Nam",
    title: "Bài 4: Nhạc cụ: Recorder hoặc Kèn phím & Thưởng thức Dân ca Quan họ Bắc Ninh",
    tag: "Nhạc cụ & Thường thức",
    objectives: [
      "Thực hành Recorder: cầm đúng tư thế, luồng hơi ổn định, bịt kín lỗ bấm tạo âm thanh trong trẻo.",
      "Thực hành Kèn phím: nhận diện thế bấm bàn phím, điều phối số ngón tay (1, 2, 3, 4, 5) và luồng hơi thổi.",
      "Hiểu biết về Dân ca Quan họ Bắc Ninh: lề lối hát đối đáp giao duyên, kĩ thuật Vang - Rền - Nền - Nảy.",
      "Tự hào về Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO ghi danh năm 2009."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="225" height="90" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="127" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">NHẠC CỤ THỰC HÀNH</text>
      <text x="127" y="65" text-anchor="middle" font-size="11" fill="#065f46">• Recorder (Sáo dọc Soprano)</text>
      <text x="127" y="85" text-anchor="middle" font-size="11" fill="#065f46">• Melodica (Kèn phím thổi hơi)</text>

      <rect x="260" y="15" width="225" height="90" rx="12" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="372" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#a16207">QUAN HỌ BẮC NINH</text>
      <text x="372" y="65" text-anchor="middle" font-size="11" fill="#854d0e">• Di sản UNESCO (2009)</text>
      <text x="372" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Vang – Rền – Nền – Nảy</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-guitar text-emerald-600"></i>
            1. Thực hành nhạc cụ: Recorder hoặc Kèn phím (Melodica)
          </h4>
          <p>• <strong>Sáo Recorder (Soprano):</strong> Tay trái ở trên (ngón cái bịt lỗ số 0 phía sau, các ngón 1, 2, 3 bịt lỗ 1, 2, 3), tay phải ở dưới (các ngón 1, 2, 3, 4 bịt lỗ 4, 5, 6, 7). Lưu ý dùng phần thịt đầu ngón tay khép kín lỗ, luồng hơi vừa phải, phát âm <em>"tu"</em> êm dịu.</p>
          <p class="mt-1">• <strong>Kèn phím Melodica:</strong> Tư thế ngồi thẳng lưng, tay phải giữ vị trí phím tự nhiên hình vòm cung; điều hòa luồng hơi đều đặn kết hợp nhấn ngón dứt khoát.</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-landmark text-amber-600"></i>
            2. Thưởng thức âm nhạc: Dân ca Quan họ Bắc Ninh
          </h4>
          <p>• <strong>Khái quát:</strong> Là loại hình dân ca tiêu biểu của vùng châu thổ sông Hồng (vùng Kinh Bắc gồm Bắc Ninh và Bắc Giang), gắn với hội xuân, hát đối đáp giao duyên giữa các <em>liền anh</em> (áo the, khăn xếp, ô đen) và <em>liền chị</em> (áo tứ thân, nón quai thao).</p>
          <p class="mt-1">• <strong>Kĩ thuật hát đặc trưng:</strong> Quy chuẩn khắt khe <strong>Vang – Rền – Nền – Nảy</strong> (hát vang xa, rền giọng hòa quyện, giữ chắc nền âm thanh, luyến láy nảy hạt điêu luyện).</p>
          <p class="mt-1">• <strong>Vinh danh quốc tế:</strong> Năm 2009, UNESCO chính thức ghi danh Dân ca Quan họ Bắc Ninh là <em>Di sản văn hóa phi vật thể đại diện của nhân loại</em>.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Dân ca Quan họ Bắc Ninh được UNESCO ghi danh là Di sản văn hóa phi vật thể vào năm nào?",
        options: ["(Recommended) Năm 2009", "Năm 2003", "Năm 2015", "Năm 2018"],
        ans: 0,
        expl: "Dân ca Quan họ Bắc Ninh được UNESCO vinh danh ngày 30 tháng 9 năm 2009."
      },
      {
        q: "Bốn tiêu chuẩn kĩ thuật hát khắt khe trong nghệ thuật Quan họ Bắc Ninh là gì?",
        options: ["(Recommended) Vang – Rền – Nền – Nảy", "To – Nhỏ – Nhanh – Chậm", "Trầm – Bổng – Luyến – Lá", "Mạnh – Nhẹ – Ngân – Nghỉ"],
        ans: 0,
        expl: "Vang (tiếng phát ra xa), Rền (hòa quyện), Nền (vững chãi), Nảy (hạt âm luyến láy tinh tế) là 4 tiêu chuẩn vàng của Quan họ."
      },
      {
        q: "Khi bấm các nốt trên sáo Recorder, yêu cầu quan trọng nhất để âm thanh không bị rè, xì là gì?",
        options: ["(Recommended) Dùng phần thịt mềm đầu ngón tay bịt thật kín các lỗ bấm và thổi hơi đều", "Thổi luồng hơi thật mạnh và gấp", "Dùng móng tay bấm chặt vào lỗ", "Cầm sáo sát vào người"],
        ans: 0,
        expl: "Bịt kín tuyệt đối các lỗ sáo và duy trì hơi ấm, nhẹ nhàng giúp âm thanh recorder tròn tiếng và vang chuẩn cao độ."
      },
      {
        q: "Trang phục truyền thống của các Liền chị khi hát Quan họ thường gắn liền với hình ảnh nào?",
        options: ["(Recommended) Áo tứ thân mớ ba mớ bảy, nón quai thao", "Áo dài cách tân, mũ miện", "Váy xòe thổ cẩm, khăn piêu", "Áo bà ba, khăn rằn"],
        ans: 0,
        expl: "Áo tứ thân nhiều lớp mớ ba mớ bảy cùng chiếc nón quai thao duyên dáng là nét đặc trưng của các liền chị Kinh Bắc."
      }
    ]
  },

  // BÀI 5
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Hòa ca",
    title: "Bài 5: Hát bài 'Ngàn ước mơ Việt Nam' & Tìm hiểu Thể loại Hợp xướng",
    tag: "Hát & Thường thức",
    objectives: [
      "Hát bài 'Ngàn ước mơ Việt Nam' giữ đúng nhịp, phối hợp giọng hát tập thể tạo sự hòa quyện âm thanh.",
      "Hiểu rõ khái niệm Thể loại Hợp xướng (Choir / Chorus), nhận biết 4 loại giọng chuẩn SATB.",
      "Phân biệt rõ ràng giữa hát đồng thanh (hát cùng giai điệu) với hát hợp xướng nhiều bè.",
      "Vận dụng chia nhóm hát bè hoặc giả lập hòa thanh nhiều lớp âm thanh đơn giản."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="250" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">4 BÈ CHÍNH TRONG DÀN HỢP XƯỚNG HỖN HỢP (SATB)</text>
      <!-- 4 Box SATB -->
      <g transform="translate(30, 42)" text-anchor="middle">
        <rect x="0" y="0" width="95" height="58" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
        <text x="47" y="24" font-size="12" font-weight="bold" fill="#1e40af">SOPRANO</text>
        <text x="47" y="42" font-size="10.5" fill="#1d4ed8">Nữ cao</text>

        <rect x="115" y="0" width="95" height="58" rx="8" fill="#e0e7ff" stroke="#6366f1"/>
        <text x="162" y="24" font-size="12" font-weight="bold" fill="#3730a3">ALTO</text>
        <text x="162" y="42" font-size="10.5" fill="#4338ca">Nữ trầm</text>

        <rect x="230" y="0" width="95" height="58" rx="8" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="277" y="24" font-size="12" font-weight="bold" fill="#92400e">TENOR</text>
        <text x="277" y="42" font-size="10.5" fill="#b45309">Nam cao</text>

        <rect x="345" y="0" width="95" height="58" rx="8" fill="#fee2e2" stroke="#ef4444"/>
        <text x="392" y="24" font-size="12" font-weight="bold" fill="#991b1b">BASS</text>
        <text x="392" y="42" font-size="10.5" fill="#b91c1c">Nam trầm</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-users text-blue-600"></i>
            1. Học hát: "Ngàn ước mơ Việt Nam" (Phong cách Hòa ca)
          </h4>
          <p>• <strong>Luyện hát tập thể:</strong> Chú ý nghe bè bạn bên cạnh để điều chỉnh âm lượng cân bằng, không hát phô chênh hoặc lấn át giọng người khác.</p>
          <p class="mt-1">• <strong>Tập chia nhóm bè:</strong> Một nhóm hát giai điệu chính, một nhóm hát đuổi bè hoặc ngân nốt đệm bè trầm (vocal background) tạo hiệu ứng hòa ca phong phú.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-layer-group text-indigo-600"></i>
            2. Tìm hiểu thể loại âm nhạc: Hợp xướng (Chorus / Choir)
          </h4>
          <p>• <strong>Khái niệm:</strong> Hợp xướng là thể loại thanh nhạc quy mô lớn gồm nhiều bè hát cùng hòa quyện, mỗi bè do một nhóm người cùng loại giọng đảm nhận dưới sự chỉ huy của nhạc trưởng.</p>
          <p class="mt-1">• <strong>Các loại dàn hợp xướng:</strong> Dàn hợp xướng hỗn hợp (nam và nữ), hợp xướng giọng nữ, hợp xướng giọng nam, hợp xướng thiếu nhi.</p>
          <p class="mt-1">• <strong>Bốn loại giọng chính (SATB):</strong></p>
          <p class="pl-4">1. <strong>Soprano:</strong> Giọng nữ cao (thanh thoát, bay bổng, thường lĩnh xướng giai điệu chính).</p>
          <p class="pl-4">2. <strong>Alto:</strong> Giọng nữ trầm (ấm áp, đằm thắm, làm dày bè hòa âm trung).</p>
          <p class="pl-4">3. <strong>Tenor:</strong> Giọng nam cao (sáng, hào sảng, âm vang).</p>
          <p class="pl-4">4. <strong>Bass:</strong> Giọng nam trầm (sâu thẳm, làm nền tảng âm trầm vững chãi cho toàn dàn).</p>
          <p class="mt-1">• <strong>Hát A cappella:</strong> Là hình thức hợp xướng không có bất kì nhạc cụ nào đệm theo, hoàn toàn dựa vào sự hòa âm chuẩn xác và điêu luyện của các giọng người.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Dàn hợp xướng hỗn hợp tiêu chuẩn (SATB) bao gồm 4 loại giọng nào?",
        options: ["(Recommended) Soprano (Nữ cao), Alto (Nữ trầm), Tenor (Nam cao), Bass (Nam trầm)", "Soprano, Mezzo-soprano, Baritone, Bass", "Alto, Tenor, Baritone, Contralto", "Nữ cao, Nữ trung, Nam trung, Nam trầm"],
        ans: 0,
        expl: "Bốn bè chuẩn quốc tế của dàn hợp xướng hỗn hợp là SATB: Soprano, Alto, Tenor, Bass."
      },
      {
        q: "Điểm khác biệt cơ bản nhất giữa Hát hợp xướng và Hát đồng thanh là gì?",
        options: ["(Recommended) Hợp xướng có nhiều bè độc lập hòa quyện; Đồng thanh mọi người hát cùng một giai điệu", "Hợp xướng chỉ dành cho người lớn", "Hát đồng thanh phải có nhạc trưởng chỉ huy", "Hát hợp xướng không bao giờ có nhạc đệm"],
        ans: 0,
        expl: "Hát đồng thanh là hát cùng 1 cao độ/giai điệu (unison), còn hợp xướng là sự hòa hợp phức điệu nhiều tầng của các bè khác nhau."
      },
      {
        q: "Thuật ngữ âm nhạc 'A cappella' dùng để chỉ hình thức biểu diễn nào?",
        options: ["(Recommended) Hát hợp xướng mộc, hoàn toàn không có nhạc cụ đệm", "Hát kết hợp dàn nhạc giao hưởng lớn", "Hát đơn ca có nhạc sĩ đệm đàn guitar", "Độc tấu đàn piano"],
        ans: 0,
        expl: "A cappella nghĩa là hát chay, các giọng hát tự mô phỏng giai điệu và phần đệm hòa thanh mà không cần nhạc cụ."
      },
      {
        q: "Người đóng vai trò điều khiển, giữ nhịp và cân bằng âm lượng cho toàn dàn hợp xướng gọi là:",
        options: ["(Recommended) Nhạc trưởng (Chỉ huy)", "Ca sĩ chính", "Nhạc công đệm đàn", "Người dẫn chương trình"],
        ans: 0,
        expl: "Nhạc trưởng chỉ huy dàn hợp xướng bằng đôi tay và đũa chỉ huy để giữ nhịp độ và sắc thái biểu cảm."
      }
    ]
  },

  // BÀI 6
  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Hòa ca",
    title: "Bài 6: Lý thuyết âm nhạc: Nhịp 3/8 & Bài đọc nhạc số 2",
    tag: "Lí thuyết & Đọc nhạc",
    objectives: [
      "Hiểu rõ bản chất nhịp 3/8: mỗi ô nhịp có 3 phách, mỗi phách có giá trị bằng một nốt móc đơn.",
      "So sánh, phân biệt nhịp 3/8 và nhịp 3/4: số lượng phách giống nhau nhưng đơn vị phách khác nhau.",
      "Thực hiện chính xác sơ đồ đánh nhịp 3/8 theo hình tam giác: Phách 1 xuống, phách 2 sang, phách 3 lên.",
      "Đọc đúng cao độ, trường độ, nhịp và dấu hóa của Bài đọc nhạc số 2."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Sơ đồ đánh nhịp 3/8 & 3/4 -->
      <rect x="15" y="10" width="225" height="105" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="127" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">NHỊP 3/8 (MÓC ĐƠN)</text>
      <text x="127" y="55" text-anchor="middle" font-size="11" fill="#6b21a8">• 3 phách / ô nhịp</text>
      <text x="127" y="73" text-anchor="middle" font-size="11" fill="#6b21a8">• 1 phách = 1 nốt móc đơn (♪)</text>
      <text x="127" y="95" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">Phách 1 mạnh – 2, 3 nhẹ</text>

      <rect x="260" y="10" width="225" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="372" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">SO SÁNH VỚI NHỊP 3/4</text>
      <text x="372" y="55" text-anchor="middle" font-size="11" fill="#1e40af">• 3/4: 1 phách = 1 nốt đen (♩)</text>
      <text x="372" y="75" text-anchor="middle" font-size="11" fill="#1e40af">• 3/8: Cảm giác nhanh, linh hoạt,</text>
      <text x="372" y="95" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">gọn gàng, uyển chuyển hơn</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-clock text-purple-600"></i>
            1. Lí thuyết âm nhạc: Nhịp 3/8 và so sánh với Nhịp 3/4
          </h4>
          <p>• <strong>Định nghĩa nhịp 3/8:</strong> Số 3 ở trên chỉ mỗi ô nhịp có <strong>3 phách</strong>; số 8 ở dưới quy định giá trị mỗi phách bằng <strong>một nốt móc đơn</strong> (bằng 1/8 nốt tròn). Phách 1 mạnh, phách 2 và phách 3 nhẹ.</p>
          <p class="mt-1">• <strong>So sánh 3/8 và 3/4:</strong></p>
          <div class="p-2.5 my-2 bg-white dark:bg-gray-800 rounded-lg text-xs space-y-1">
            <p>• <em>Giống nhau:</em> Đều có 3 phách trong mỗi ô nhịp; quy luật phách: Phách 1 mạnh, phách 2 và 3 nhẹ; chung sơ đồ đánh nhịp 3 điểm (xuống - sang - lên).</p>
            <p>• <em>Khác nhau:</em> Nhịp 3/4 mỗi phách là 1 nốt đen (♩), nhịp 3/8 mỗi phách là 1 nốt móc đơn (♪). Nhịp 3/8 thường mang lại nhịp điệu nhanh, nhẹ nhàng, sinh động và thanh thoát hơn.</p>
          </div>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-blue-600"></i>
            2. Thực hành: Bài đọc nhạc số 2
          </h4>
          <p>• Viết ở giọng <strong>Đô trưởng</strong>, nhịp <strong>3/8</strong>.</p>
          <p class="mt-1">• Luyện đọc đúng các hình nốt: nốt móc đơn (1 phách), nốt đen (2 phách), nốt đen chấm dôi (3 phách = hết 1 ô nhịp).</p>
          <p class="mt-1">• Thực hành gõ phách 1 nhấn mạnh vào nốt đầu ô nhịp; kết hợp đánh nhịp 3 tay.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Trong số chỉ nhịp 3/8, giá trị thời gian của mỗi phách tương đương với:",
        options: ["(Recommended) Một nốt móc đơn", "Một nốt đen", "Một nốt trắng", "Một nốt móc kép"],
        ans: 0,
        expl: "Số 8 ở dưới biểu thị đơn vị phách là 1/8 nốt tròn, tức là một nốt móc đơn."
      },
      {
        q: "Quy luật trọng âm của nhịp 3/8 trong mỗi ô nhịp diễn ra như thế nào?",
        options: ["(Recommended) Phách 1 mạnh, phách 2 và 3 nhẹ", "Phách 1 nhẹ, phách 2 mạnh, phách 3 nhẹ", "Cả 3 phách đều mạnh", "Phách 1 và 3 mạnh, phách 2 nhẹ"],
        ans: 0,
        expl: "Tương tự nhịp 3 phách, nhịp 3/8 có phách 1 mạnh, hai phách sau nhẹ."
      },
      {
        q: "Một nốt đen chấm dôi trong nhịp 3/8 có giá trị ngân dài bằng bao nhiêu phách?",
        options: ["(Recommended) 3 phách (bằng cả một ô nhịp)", "2 phách", "1 phách", "1,5 phách"],
        ans: 0,
        expl: "Trong nhịp 3/8: 1 nốt móc đơn = 1 phách, nốt đen = 2 phách, dấu chấm dôi thêm 1 phách -> Nốt đen chấm dôi = 3 phách."
      },
      {
        q: "Sơ đồ đánh tay chuẩn của nhịp 3/8 gồm 3 hướng chuyển động nào?",
        options: ["(Recommended) Phách 1 đưa xuống, phách 2 đưa sang bên, phách 3 hất lên", "Phách 1 đưa lên, phách 2 sang trái, phách 3 xuống", "Phách 1 sang phải, phách 2 sang trái, phách 3 lên", "Phách 1 xuống, phách 2 xuống, phách 3 lên"],
        ans: 0,
        expl: "Sơ đồ hình tam giác 3 điểm: 1 xuống (trọng âm mạnh), 2 sang ngang, 3 hất lên chuẩn bị cho ô tiếp theo."
      }
    ]
  },

  // BÀI 7
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Biển đảo quê hương",
    title: "Bài 7: Hát bài 'Nơi ấy Trường Sa' & Nghe nhạc 'Nơi đảo xa'",
    tag: "Hát & Nghe nhạc",
    objectives: [
      "Hát bài 'Nơi ấy Trường Sa' đúng giai điệu, lời ca; thể hiện cảm xúc tha thiết, thiêng liêng hướng về biển đảo Tổ quốc.",
      "Nghe tác phẩm kinh điển 'Nơi đảo xa' của nhạc sĩ Thế Song, nhận xét tính chất giai điệu, hình tượng người chiến sĩ hải quân kiên trung.",
      "Rèn luyện kĩ năng lấy hơi sâu, chia câu hợp lý, kết hợp gõ đệm phách hoặc đánh nhịp.",
      "Bồi đắp tình yêu quê hương đất nước, lòng biết ơn sâu sắc đối với những người lính đang ngày đêm canh giữ chủ quyền biển đảo."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#ccfbf1"/>
      <text x="55" y="68" text-anchor="middle" font-size="22" fill="#0f766e"><tspan font-family="FontAwesome">&#xf773;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#134e4a">HÁT: NƠI ẤY TRƯỜNG SA (Kim Long)</text>
      <text x="100" y="65" font-size="11" fill="#115e59">• Tha thiết, tự hào, hướng về quần đảo thiêng liêng</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#0284c7">NGHE: NƠI ĐẢO XA (Thế Song) • Tượng đài âm nhạc người lính biển</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-anchor text-teal-600"></i>
            1. Học hát: "Nơi ấy Trường Sa" (Nhạc &amp; lời: Kim Long)
          </h4>
          <p>• <strong>Ý nghĩa ca khúc:</strong> Gửi gắm tình cảm yêu thương, sự gắn kết keo sơn giữa đất liền với các chiến sĩ và đồng bào nơi đầu sóng ngọn gió quần đảo Trường Sa.</p>
          <p class="mt-1">• <strong>Đặc điểm giai điệu:</strong> Đoạn 1 mở đầu êm ả như sóng biển vỗ bờ, đoạn 2 âm hưởng dâng trào mạnh mẽ, khẳng định chủ quyền toàn vẹn lãnh thổ thiêng liêng của Tổ quốc.</p>
          <p class="mt-1">• <strong>Kĩ thuật hát:</strong> Giữ hơi thở ổn định để thể hiện trọn vẹn những nốt ngân dài; sắc thái tha thiết, trang nghiêm và tự hào.</p>
        </div>

        <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-water text-sky-600"></i>
            2. Nghe nhạc: "Nơi đảo xa" (Sáng tác: Nhạc sĩ Thế Song)
          </h4>
          <p>• <strong>Kiệt tác bất hủ:</strong> Ra đời năm 1979 sau chuyến đi thực tế của nhạc sĩ tại các đồn biên phòng và bờ biển Quảng Ninh. Bài hát đã trở thành ca khúc kinh điển lay động hàng triệu trái tim người Việt: <em>"Nơi anh đến là biển xa, nơi anh đến là đảo xa..."</em>.</p>
          <p class="mt-1">• <strong>Hình tượng nghệ thuật:</strong> Người lính biển tay cầm chắc cây súng đứng gác giữa muôn trùng sóng gió, nhưng trong tim luôn dạt dào tình yêu gia đình, quê hương và đôi mắt sáng ngời niềm tin.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Ca khúc kinh điển 'Nơi đảo xa' là sáng tác của nhạc sĩ nào?",
        options: ["(Recommended) Thế Song", "Kim Long", "An Thuyên", "Trần Long Ẩn"],
        ans: 0,
        expl: "'Nơi đảo xa' là kiệt tác để đời của cố Nhạc sĩ Thế Song sáng tác năm 1979."
      },
      {
        q: "Hình tượng trung tâm được khắc họa sâu sắc trong bài hát 'Nơi đảo xa' là:",
        options: ["(Recommended) Người chiến sĩ hải quân kiên cường bảo vệ biển trời Tổ quốc", "Người ngư dân đánh bắt cá", "Những cánh chim hải âu", "Ngọn hải đăng trên biển"],
        ans: 0,
        expl: "Tác phẩm tôn vinh vẻ đẹp bình dị, can trường và tình cảm thủy chung của người chiến sĩ nơi đảo xa."
      },
      {
        q: "Sắc thái tình cảm chủ đạo khi thể hiện bài hát 'Nơi ấy Trường Sa' là gì?",
        options: ["(Recommended) Tha thiết, trang nghiêm, xúc động và tự hào", "Hài hước, dí dỏm", "Trầm buồn, bi lụy", "Sôi động, dồn dập nhảy múa"],
        ans: 0,
        expl: "Bài hát thể hiện sự tri ân tha thiết, tự hào hướng về Trường Sa thân yêu."
      },
      {
        q: "Khi hát những nốt nhạc ngân dài trong bài hát về biển đảo, người hát cần chú ý điều gì?",
        options: ["(Recommended) Lấy hơi sâu từ cơ hoành, giữ cột hơi đều đặn đến hết trường độ", "Hát ngắt quãng từng nốt", "Thở ra thật nhanh rồi dừng", "Hát to dần không kiểm soát"],
        ans: 0,
        expl: "Lấy hơi sâu và nén hơi cơ hoành giúp ngân dài nốt nhạc mượt mà, đầy đặn cảm xúc."
      }
    ]
  },

  // BÀI 8
  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Biển đảo quê hương",
    title: "Bài 8: Thường thức: Đàn Guitar & Đàn Ukulele; Thực hành Nhạc cụ",
    tag: "Thường thức & Nhạc cụ",
    objectives: [
      "Nhận biết đặc điểm cấu tạo, hình dáng, cách tạo âm và âm sắc của Đàn Guitar và Đàn Ukulele.",
      "Phân biệt rõ Đàn Guitar (6 dây, âm vực rộng, trầm ấm) và Đàn Ukulele (4 dây, nhỏ gọn, âm sắc trong trẻo).",
      "Tiếp tục thực hành bài luyện trên Recorder / Kèn phím Melodica theo đúng tư thế, số ngón và tiết tấu.",
      "Lựa chọn nhạc cụ phù hợp với giai điệu và tham gia hòa tấu âm nhạc theo nhóm."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- So sánh Đàn Guitar và Ukulele -->
      <rect x="15" y="10" width="225" height="105" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="127" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">ĐÀN GUITAR</text>
      <text x="127" y="55" text-anchor="middle" font-size="11" fill="#78350f">• 6 dây (E - A - D - G - B - E)</text>
      <text x="127" y="75" text-anchor="middle" font-size="11" fill="#78350f">• Thùng đàn to, âm trầm ấm</text>
      <text x="127" y="95" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Đệm hát, độc tấu, cổ điển</text>

      <rect x="260" y="10" width="225" height="105" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="372" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">ĐÀN UKULELE</text>
      <text x="372" y="55" text-anchor="middle" font-size="11" fill="#166534">• 4 dây (G - C - E - A)</text>
      <text x="372" y="75" text-anchor="middle" font-size="11" fill="#166534">• Nhỏ gọn, xuất xứ Hawaii</text>
      <text x="372" y="95" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">Âm sắc trong, vang, vui nhộn</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-guitar text-amber-600"></i>
            1. Thường thức âm nhạc: Đàn Guitar và Đàn Ukulele
          </h4>
          <p>• <strong>Đàn Guitar:</strong> Nhạc cụ dây gảy phổ biến nhất trên thế giới. Gồm cần đàn có các phím ngăn và thùng đàn rỗng khuếch đại âm thanh. Đàn guitar tiêu chuẩn có <strong>6 dây</strong> (từ trầm đến bổng: Mì - Là - Rê - Sol - Si - Mí). Có các dòng chính: Guitar cổ điển (Classical - dây nylon), Guitar đệm hát (Acoustic - dây kim loại), và Guitar điện (Electric guitar).</p>
          <p class="mt-1">• <strong>Đàn Ukulele:</strong> Nhạc cụ dây gảy có nguồn gốc từ vùng đảo Hawaii (Mỹ). Hình dáng thu nhỏ như một cây guitar mini nhưng chỉ có <strong>4 dây</strong> (Sol - Đô - Mi - La). Âm sắc sáng, lảnh lót, vui tươi, rất dễ học và tiện lợi mang theo dã ngoại.</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-emerald-600"></i>
            2. Thực hành nhạc cụ: Recorder và Kèn phím Melodica
          </h4>
          <p>• Luyện bài hòa tấu chủ đề <em>Biển đảo quê hương</em>: Phối hợp bè giai điệu chính trên Recorder và bè đệm hợp âm hoặc giữ nhịp trên Kèn phím.</p>
          <p class="mt-1">• Đảm bảo nhịp độ ổn định, âm lượng hai nhạc cụ hòa quyện, không bị át tiếng.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Đàn Ukulele tiêu chuẩn có bao nhiêu dây đàn và xuất xứ nổi tiếng từ đâu?",
        options: ["(Recommended) 4 dây – Xuất xứ từ quần đảo Hawaii", "6 dây – Xuất xứ từ Tây Ban Nha", "5 dây – Xuất xứ từ Ý", "3 dây – Xuất xứ từ Nga"],
        ans: 0,
        expl: "Ukulele là cây đàn 4 dây đặc trưng của vùng biển nhiệt đới Hawaii."
      },
      {
        q: "Đàn Guitar tiêu chuẩn thông thường có bao nhiêu dây đàn?",
        options: ["(Recommended) 6 dây", "4 dây", "5 dây", "8 dây"],
        ans: 0,
        expl: "Đàn Guitar tiêu chuẩn (cả cổ điển và acoustic) có 6 dây tương ứng các nốt E-A-D-G-B-E."
      },
      {
        q: "Điểm khác biệt rõ rệt về âm sắc giữa đàn Guitar và đàn Ukulele là gì?",
        options: ["(Recommended) Guitar có âm vực rộng, trầm ấm; Ukulele âm sắc trong trẻo, vui tươi, lảnh lót", "Ukulele trầm hơn đàn Guitar", "Hai đàn có âm thanh hoàn toàn giống hệt nhau", "Guitar chỉ chơi được nhạc buồn"],
        ans: 0,
        expl: "Thùng đàn to và 6 dây giúp Guitar có dải âm rộng trầm bổng, còn Ukulele nhỏ nhắn phát ra tiếng nhạc vui tươi, rộn rã."
      },
      {
        q: "Dây đàn của đàn Guitar cổ điển (Classical Guitar) thường được làm bằng chất liệu gì?",
        options: ["(Recommended) Dây nilon (nylon)", "Dây thép kim loại", "Dây đồng đỏ", "Dây tơ tằm"],
        ans: 0,
        expl: "Guitar cổ điển sử dụng dây nilon mềm mại, tạo nên âm sắc êm dịu, ấm áp đặc trưng."
      }
    ]
  }
];

module.exports = { lessonsPart1 };
