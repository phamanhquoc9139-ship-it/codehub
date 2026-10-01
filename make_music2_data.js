// make_music2_data.js
// 16 Detailed Lessons with 64 Interactive Quizzes for Âm Nhạc Lớp 2 (SGK Kết nối tri thức với cuộc sống - GDPT 2018)

const lessons = [
  // ==========================================
  // CHỦ ĐỀ 1: SẮC MÀU ÂM THANH
  // ==========================================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Sắc màu âm thanh",
    tag: "Học hát & Gõ đệm",
    title: "Bài 1: Học hát bài 'Dàn nhạc trong vườn' (Tô Đông Hải) & Gõ đệm theo phách",
    objectives: [
      "Hát đúng cao độ, trường độ và giai điệu trong sáng, vui tươi của bài hát Dàn nhạc trong vườn.",
      "Biết cảm nhận âm thanh muôn loài trong thiên nhiên (tiếng chim hót líu lo, tiếng suối reo).",
      "Thực hành gõ đệm thanh phách hoặc vỗ tay chuẩn xác theo phách nhịp nhàng.",
      "Phát triển thói quen yêu thiên nhiên, trân trọng vẻ đẹp của môi trường xung quanh."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-music text-orange-600"></i> Giới thiệu bài hát "Dàn nhạc trong vườn"
          </h4>
          <p>
            Bài hát <strong>"Dàn nhạc trong vườn"</strong> do nhạc sĩ <strong>Tô Đông Hải</strong> sáng tác với giai điệu rộn ràng, vui tươi mô tả bức tranh thiên nhiên buổi sáng tuyệt đẹp, nơi các chú chim cất tiếng hót líu lo tựa như một dàn nhạc hòa tấu sinh động.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-feather text-orange-500"></i> Lời ca rộn ràng của bài hát
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif italic text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <p>Kìa con chim gáy: Cúc cu... đố la!</p>
              <p>Kìa chú vàng anh: Líu lo líu lo!</p>
              <p>Kìa chim chích chòe: Chích chòe... thoắt thoắt!</p>
              <p>Một dàn nhạc cùng hòa vang trong vườn xinh!</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-drum text-amber-500"></i> Kỹ thuật hát và gõ đệm theo phách
            </h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Trong bài hát, mỗi phách được gõ đều đặn tương ứng với bước đi nhịp nhàng của âm nhạc.
            </p>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Tư thế hát:</strong> Đứng thẳng, hai vai thả lỏng tự nhiên, miệng mở tròn vành rõ chữ.</li>
              <li><strong>Lấy hơi:</strong> Hít sâu bằng mũi và miệng ở cuối mỗi câu hát ngắn.</li>
              <li><strong>Gõ đệm:</strong> Dùng thanh phách hoặc vỗ hai lòng bàn tay vào các tiếng rơi đúng trọng âm phách.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping"></i> Hoạt động thực hành & Trò chơi âm nhạc
        </h4>
        <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>1. Trò chơi "Tiếng chim hót":</strong> Chia lớp làm 3 nhóm chim (Chim gáy: Cúc cu; Vàng anh: Líu lo; Chích chòe: Thoắt thoắt). Khi cô giáo chỉ tay về nhóm nào, nhóm đó hòa giọng mô phỏng tiếng hót.</p>
          <p><strong>2. Vận động theo nhạc:</strong> Vừa hát vừa làm động tác đôi tay đập nhẹ như cánh chim đang bay lượn trong vườn hoa.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Dàn nhạc trong vườn' của nhạc sĩ Tô Đông Hải mang tính chất vui tươi, trong sáng; học sinh tập lấy hơi đều, hát tròn vành rõ chữ và kết hợp gõ đệm theo phách nhịp nhàng.",
    quizzes: [
      {
        question: "Bài hát 'Dàn nhạc trong vườn' là sáng tác của nhạc sĩ nào?",
        options: ["Nhạc sĩ Tô Đông Hải", "Nhạc sĩ Văn Cao", "Nhạc sĩ Bùi Đình Thảo", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Bài hát 'Dàn nhạc trong vườn' là một tác phẩm quen thuộc dành cho lứa tuổi lớp 2 của nhạc sĩ Tô Đông Hải."
      },
      {
        question: "Trong lời bài hát 'Dàn nhạc trong vườn', chú chim vàng anh hót những âm thanh như thế nào?",
        options: ["Líu lo líu lo", "Cúc cu cúc cu", "Chích chòe thoắt thoắt", "Quang quác quang quác"],
        correct: 0,
        explanation: "Lời bài hát viết: 'Kìa chú vàng anh: Líu lo líu lo!'."
      },
      {
        question: "Khi thực hành gõ đệm theo phách cho bài hát, em cần thực hiện như thế nào?",
        options: [
          "Gõ đều đặn, nhịp nhàng theo từng phách của bài hát",
          "Gõ thật nhanh bất cứ lúc nào thích",
          "Chỉ gõ một tiếng duy nhất ở cuối bài",
          "Không cần gõ chỉ đứng yên lắng nghe"
        ],
        correct: 0,
        explanation: "Gõ theo phách là gõ đều đặn theo nhịp đập cơ bản xuyên suốt bài hát."
      },
      {
        question: "Giai điệu của bài hát 'Dàn nhạc trong vườn' mang tính chất tình cảm như thế nào?",
        options: ["Vui tươi, trong sáng, rộn ràng", "Buồn bã, chậm chạp", "Hùng tráng, nghiêm trang", "Gắt gỏng, đáng sợ"],
        correct: 0,
        explanation: "Bài hát miêu tả khu vườn thiên nhiên tươi đẹp với tiếng chim ca nên giai điệu rất trong sáng, rộn ràng và vui tươi."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Sắc màu âm thanh",
    tag: "Đọc nhạc & Thường thức",
    title: "Bài 2: Đọc nhạc: Bài số 1 (Đô - Rê - Mi) & Thường thức: Câu chuyện 'Ước mơ của bạn Đô'",
    objectives: [
      "Nhận biết và đọc đúng cao độ 3 nốt nhạc cơ bản: Đô - Rê - Mi.",
      "Thực hiện chuẩn xác ký hiệu bàn tay (Hand Signs) cho các nốt Đô, Rê, Mi.",
      "Lắng nghe câu chuyện 'Ước mơ của bạn Đô', cảm nhận niềm yêu thích khám phá thế giới âm thanh.",
      "Thực hành đọc nhạc kết hợp gõ đệm theo hình tiết tấu đơn giản."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-music text-orange-600"></i> Bài đọc nhạc số 1: Ba nốt Đô - Rê - Mi
          </h4>
          <p>
            Ba nốt nhạc đầu tiên tạo thành bậc thang âm thanh đi lên từ thấp đến cao:
            <strong>Đô</strong> (trầm nhất) &rarr; <strong>Rê</strong> (ở giữa) &rarr; <strong>Mi</strong> (cao nhất trong ba nốt).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-3.5 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <div class="w-10 h-10 mx-auto rounded-full bg-orange-100 dark:bg-orange-950 text-orange-600 font-bold flex items-center justify-center text-base mb-2">
              Đô
            </div>
            <h5 class="font-bold text-xs text-gray-900 dark:text-white mb-1">Nốt Đô</h5>
            <p class="text-xs text-gray-500 dark:text-gray-400">Nắm chặt hai bàn tay úp xuống phía trước bụng.</p>
          </div>
          <div class="p-3.5 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <div class="w-10 h-10 mx-auto rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 font-bold flex items-center justify-center text-base mb-2">
              Rê
            </div>
            <h5 class="font-bold text-xs text-gray-900 dark:text-white mb-1">Nốt Rê</h5>
            <p class="text-xs text-gray-500 dark:text-gray-400">Bàn tay duỗi thẳng nghiêng chếch góc 45 độ lên cao.</p>
          </div>
          <div class="p-3.5 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <div class="w-10 h-10 mx-auto rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 font-bold flex items-center justify-center text-base mb-2">
              Mi
            </div>
            <h5 class="font-bold text-xs text-gray-900 dark:text-white mb-1">Nốt Mi</h5>
            <p class="text-xs text-gray-500 dark:text-gray-400">Hai bàn tay mở phẳng song song trước ngực.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-book-open text-orange-500"></i> Thường thức âm nhạc: Câu chuyện "Ước mơ của bạn Đô"
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Bạn Đô là một nốt nhạc nhỏ bé nhưng mang trong mình ước mơ to lớn: được cùng các bạn Rê, Mi, Son hòa vang lên những khúc ca tuyệt vời mang lại niềm vui cho mọi người khắp thế giới. Câu chuyện khuyên các em hãy chăm chỉ luyện tập, yêu thương bạn bè và nuôi dưỡng ước mơ đẹp đẽ.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-chalkboard-user"></i> Luyện tập đọc nhạc theo ký hiệu bàn tay
        </h4>
        <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>1. Thang âm đi lên:</strong> Đô - Rê - Mi (thực hiện bàn tay từ dưới bụng nâng dần lên ngực).</p>
          <p><strong>2. Thang âm đi xuống:</strong> Mi - Rê - Đô (hạ dần vị trí bàn tay theo đúng cao độ).</p>
          <p><strong>3. Luyện đọc giai điệu:</strong> Đô - Mi - Rê - Mi - Đô (kết hợp gõ thanh phách).</p>
        </div>
      </div>
    `,
    summary: "Ba nốt Đô - Rê - Mi là những bậc thang âm thanh đầu tiên; việc kết hợp đọc nốt với ký hiệu bàn tay giúp học sinh ghi nhớ chính xác cao độ từ trầm đến bổng.",
    quizzes: [
      {
        question: "Trong 3 nốt Đô, Rê, Mi, nốt nhạc nào có cao độ trầm (thấp) nhất?",
        options: ["Nốt Đô", "Nốt Rê", "Nốt Mi", "Cả ba nốt bằng nhau"],
        correct: 0,
        explanation: "Nốt Đô là bậc âm trầm nhất trong chuỗi Đô - Rê - Mi."
      },
      {
        question: "Khi thực hiện ký hiệu bàn tay cho nốt Đô, bàn tay em để ở tư thế nào?",
        options: [
          "Nắm tay úp xuống đặt trước bụng",
          "Bàn tay phẳng song song trước ngực",
          "Bàn tay duỗi nghiêng 45 độ",
          "Giơ hai tay lên cao quá đầu"
        ],
        correct: 0,
        explanation: "Ký hiệu nốt Đô (theo hệ thống Curwen) là nắm bàn tay khép lại hướng xuống phía trước bụng."
      },
      {
        question: "Thứ tự cao độ từ thấp lên cao của Bài đọc nhạc số 1 là gì?",
        options: ["Đô - Rê - Mi", "Mi - Rê - Đô", "Rê - Mi - Đô", "Đô - Mi - Rê"],
        correct: 0,
        explanation: "Chiều cao độ đi lên từ thấp đến cao là Đô &rarr; Rê &rarr; Mi."
      },
      {
        question: "Ước mơ của bạn Đô trong câu chuyện thường thức âm nhạc là gì?",
        options: [
          "Cùng các bạn nốt nhạc hòa vang mang lại niềm vui cho mọi người",
          "Chỉ muốn hát một mình không cần ai",
          "Muốn ngủ suốt ngày không tập hát",
          "Muốn biến thành chiếc máy tính bảng"
        ],
        correct: 0,
        explanation: "Bạn Đô ước mơ được hòa giọng cùng các bạn nốt nhạc tạo nên những bài ca tươi đẹp cho cuộc đời."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 2: EM YÊU LÀN ĐIỆU DÂN CA
  // ==========================================
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Em yêu làn điệu dân ca",
    tag: "Học hát & Vận động",
    title: "Bài 3: Học hát bài 'Con chim chích chòe' (Dân ca Nam Bộ - Lời mới: Việt Anh)",
    objectives: [
      "Hát đúng giai điệu, lời ca hồn nhiên, dí dỏm của bài hát Con chim chích chòe.",
      "Biết bài hát được viết theo giai điệu bài dân ca Bắc kim thang quen thuộc của miền Nam.",
      "Thể hiện được tình cảm yêu quý loài chim nhỏ và cảnh quan thiên nhiên thôn quê.",
      "Vừa hát vừa thực hiện động tác vận động phụ họa nghiêng đầu, vỗ tay nhịp nhàng."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-crow text-orange-600"></i> Xuất xứ bài hát "Con chim chích chòe"
          </h4>
          <p>
            Bài hát <strong>"Con chim chích chòe"</strong> là sáng tác lời mới của tác giả <strong>Việt Anh</strong> dựa trên giai điệu bài <em>Bắc kim thang</em> - một làn điệu dân ca Nam Bộ vô cùng quen thuộc và ngộ nghĩnh của thiếu nhi Việt Nam.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca hóm hỉnh bài hát
          </h5>
          <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Có con chim chích chòe, trưa nắng nó đi câu.</p>
            <p>Nó đi câu con cá bống, nó bắt con cá trê.</p>
            <p>Ôi con chim chích chòe, chân bước thấp bước cao.</p>
            <p>Bắt con cá trê nó kẹp, kẹp cái đuôi chích chòe!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Lưu ý khi tập hát:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hát với tâm trạng vui tươi, rộn rã, thể hiện sự tinh nghịch ở câu kết: <em>"Bắt con cá trê nó kẹp, kẹp cái đuôi chích chòe!"</em>.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-person-walking"></i> Hát kết hợp vận động cơ thể (Body Percussion)
        </h4>
        <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Động tác 1:</strong> Hai tay vỗ nhẹ vào đùi theo nhịp từng câu hát.</p>
          <p><strong>Động tác 2:</strong> Đến câu "chân bước thấp bước cao", nhún chân nhịp nhàng nghiêng sang trái, sang phải.</p>
          <p><strong>Động tác 3:</strong> Câu "kẹp cái đuôi chích chòe", hai tay đưa ra sau vỗ nhẹ làm chiếc đuôi ngoe nguẩy ngộ nghĩnh.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Con chim chích chòe' mang âm hưởng dân ca Nam Bộ hóm hỉnh; rèn luyện khả năng hát rõ lời, vận động vui tươi và biểu cảm tự nhiên.",
    quizzes: [
      {
        question: "Bài hát 'Con chim chích chòe' được viết lời mới dựa trên làn điệu dân ca nào?",
        options: ["Dân ca Nam Bộ (Bắc kim thang)", "Dân ca Quan họ Bắc Ninh", "Dân ca Tây Nguyên", "Dân ca Thái"],
        correct: 0,
        explanation: "Bài hát 'Con chim chích chòe' do tác giả Việt Anh đặt lời mới trên nền giai điệu dân ca Nam Bộ bài Bắc kim thang."
      },
      {
        question: "Ai là tác giả viết phần lời mới cho bài hát 'Con chim chích chòe'?",
        options: ["Việt Anh", "Hoàng Long", "Trần Kiết Tường", "Phan Huỳnh Điểu"],
        correct: 0,
        explanation: "Tác giả Việt Anh là người viết lời mới rất hóm hỉnh và gần gũi cho bài hát."
      },
      {
        question: "Trong bài hát, chú chim chích chòe đi câu vào lúc nào?",
        options: ["Buổi trưa nắng", "Buổi sáng sớm", "Buổi chiều tà", "Đêm khuya thanh vắng"],
        correct: 0,
        explanation: "Lời bài hát bắt đầu bằng câu: 'Có con chim chích chòe, trưa nắng nó đi câu'."
      },
      {
        question: "Khi thể hiện bài hát 'Con chim chích chòe', giọng hát và nét mặt của em nên thế nào?",
        options: ["Vui vẻ, hóm hỉnh, hồn nhiên tươi tắn", "Căng thẳng, nghiêm nghị", "Sợ hãi, khóc lóc", "Buồn rầu, ngáp ngủ"],
        correct: 0,
        explanation: "Tính chất bài hát là ngộ nghĩnh, vui vẻ nên khuôn mặt và giọng hát cần hồn nhiên, tươi tắn."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Em yêu làn điệu dân ca",
    tag: "Nhạc cụ & Thường thức",
    title: "Bài 4: Nhạc cụ dân tộc: Song loan & Thường thức âm nhạc: Cây Đàn Bầu Việt Nam",
    objectives: [
      "Nhận biết hình dáng, cấu tạo và âm thanh đanh giòn đặc trưng của nhạc cụ Song loan.",
      "Biết cách cầm và gõ đệm Song loan đúng tư thế để giữ nhịp cho bài hát.",
      "Tìm hiểu cây Đàn Bầu (Độc huyền cầm) - niềm tự hào âm nhạc truyền thống độc nhất vô nhị của dân tộc Việt Nam.",
      "Bồi dưỡng tình yêu và ý thức giữ gìn di sản nhạc cụ dân tộc truyền thống."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Nhạc cụ Song Loan -->
          <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
            <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-drum text-orange-600"></i> Nhạc cụ gõ: Song loan
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Song loan (hay Song lang) là một loại nhạc cụ gõ bằng gỗ hình tròn dẹt, có gắn một cần gõ bằng thanh kim loại mềm hoặc sừng uốn cong có đầu bọc quả tròn.
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
              <li><strong>Âm thanh:</strong> Đanh, gọn, vang giòn dứt khoát.</li>
              <li><strong>Cách chơi:</strong> Đặt trong lòng bàn tay hoặc dưới sàn, dùng ngón chân hoặc bàn tay ấn mạnh vào cần gõ để dùi gõ đập vào mặt gỗ.</li>
              <li><strong>Vai trò:</strong> Dùng giữ nhịp trong dàn nhạc Đờn ca tài tử và Cải lương Nam Bộ.</li>
            </ul>
          </div>

          <!-- Thường thức Đàn Bầu -->
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
            <h4 class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-guitar text-amber-600"></i> Cây Đàn Bầu (Độc huyền cầm)
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Đàn Bầu là cây đàn vô cùng độc đáo chỉ có <strong>duy nhất 1 dây đàn</strong> nhưng phát ra âm thanh nỉ non, truyền cảm như tiếng mẹ ru ngọt ngào.
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
              <li><strong>Cấu tạo:</strong> Thân đàn bằng gỗ dài, một đầu cắm chiếc cần đàn mềm mại xuyên qua quả bầu khô (hoặc mô phỏng quả bầu).</li>
              <li><strong>Kỹ thuật chơi:</strong> Tay phải dùng que gảy tạo âm bội, tay trái uốn cần đàn để đổi cao độ mượt mà.</li>
              <li><strong>Câu thơ nổi tiếng:</strong> <em>"Đàn bầu ai gảy nấy nghe / Làm thân con gái chớ nghe đàn bầu"</em>.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-music"></i> Thực hành gõ Song loan đệm bài hát
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Tập cầm Song loan và gõ điểm vào phách mạnh ở câu hát:</p>
          <p class="italic text-orange-700 dark:text-orange-300 font-medium">"Có con chim chích <strong>chòe</strong> (Gõ Song loan) / Trưa nắng nó đi <strong>câu</strong> (Gõ Song loan)"</p>
        </div>
      </div>
    `,
    summary: "Song loan là nhạc cụ gõ bằng gỗ giữ nhịp tiêu biểu của Nam Bộ; Đàn Bầu là nhạc cụ dân tộc độc đáo của Việt Nam chỉ có 1 dây nhưng diễn tả muôn vàn sắc thái tình cảm.",
    quizzes: [
      {
        question: "Cây Đàn Bầu của Việt Nam có bao nhiêu dây đàn?",
        options: ["Duy nhất 1 dây đàn", "2 dây đàn", "4 dây đàn", "16 dây đàn"],
        correct: 0,
        explanation: "Đàn Bầu còn có tên chữ là 'Độc huyền cầm' - nghĩa là cây đàn chỉ có đúng 1 dây."
      },
      {
        question: "Nhạc cụ Song loan được làm chủ yếu bằng chất liệu gì?",
        options: ["Bằng gỗ", "Bằng kim loại nhôm", "Bằng nhựa dẻo", "Bằng đá tự nhiên"],
        correct: 0,
        explanation: "Song loan có thân tròn dẹt tiện bằng gỗ cứng, âm thanh phát ra đanh gọn và vang."
      },
      {
        question: "Người nghệ sĩ biểu diễn Đàn Bầu uốn cần đàn bằng tay nào để thay đổi cao độ?",
        options: ["Bằng tay trái", "Bằng tay phải", "Bằng ngón chân", "Dùng cằm ép vào cần"],
        correct: 0,
        explanation: "Tay phải gảy dây đàn, tay trái uốn cần đàn sang trái/phải để làm căng hoặc chùng dây, tạo các nốt luyến láy."
      },
      {
        question: "Trong dàn nhạc Đờn ca tài tử và Cải lương Nam Bộ, Song loan đóng vai trò gì?",
        options: ["Giữ nhịp điệu chính cho cả dàn nhạc", "Thổi giai điệu chính", "Hát bè đệm", "Không có tác dụng gì"],
        correct: 0,
        explanation: "Song loan là 'linh hồn' giữ nhịp, báo hiệu điểm rơi phách nhịp quan trọng cho ca sĩ và nhạc công."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 3: MÁI TRƯỜNG THÂN YÊU
  // ==========================================
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Mái trường thân yêu",
    tag: "Học hát & Biểu cảm",
    title: "Bài 5: Học hát bài 'Học sinh lớp Hai chăm ngoan' & Vận động nhịp nhàng",
    objectives: [
      "Hát đúng cao độ, trường độ và lời ca tươi sáng của bài hát Học sinh lớp Hai chăm ngoan.",
      "Cảm nhận niềm tự hào, hân hoan khi bước vào năm học lớp 2 đầy tự tin và tiến bộ.",
      "Biết hát kết hợp vỗ tay theo nhịp hoặc nhún chân nhịp nhàng.",
      "Hình thành thái độ chăm ngoan, kính thầy yêu bạn, tích cực trong học tập."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-graduation-cap text-orange-600"></i> Bài hát truyền cảm hứng học tập
          </h4>
          <p>
            Bước lên lớp 2, các em đã quen thuộc với mái trường, thầy cô và nền nếp học tập. Bài hát <strong>"Học sinh lớp Hai chăm ngoan"</strong> mang giai điệu rộn ràng như bước chân vui tươi của các bạn nhỏ tung tăng đến lớp mỗi sớm mai.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca bài hát đầy tự hào
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1">
            <p>Hôm nay em lên lớp Hai rồi, trường em đẹp đẽ rạng ngời.</p>
            <p>Thầy cô yêu thương, bạn bè mến thương, cùng nhau thi đua học chăm ngoan.</p>
            <p>Em yêu trường em, em yêu lớp em, xứng danh là trò ngoan trò giỏi!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Kỹ năng hát tập thể:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hát đều giọng cùng cả lớp, không hát quá to hoặc gào thét; lắng nghe tiếng hát của các bạn xung quanh để hòa chung một nhịp điệu rộn ràng.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-users"></i> Hát đối đáp theo tổ nhóm
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Tổ 1 & Tổ 2:</strong> Hát câu 1 (Hôm nay em lên lớp Hai rồi...).</p>
          <p><strong>Tổ 3 & Tổ 4:</strong> Hát câu 2 (Thầy cô yêu thương, bạn bè mến thương...).</p>
          <p><strong>Cả lớp:</strong> Hát vang điệp khúc câu 3 kết hợp vỗ tay giòn giã.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Học sinh lớp Hai chăm ngoan' ca ngợi tình yêu mái trường, thầy cô; giáo dục tinh thần tự giác rèn luyện trở thành con ngoan trò giỏi.",
    quizzes: [
      {
        question: "Nội dung bài hát 'Học sinh lớp Hai chăm ngoan' thể hiện tình cảm gì của học sinh?",
        options: [
          "Niềm vui hân hoan khi lên lớp 2, yêu quý trường lớp và quyết tâm học chăm ngoan",
          "Nỗi buồn bã khi phải đi học",
          "Mong muốn được ở nhà xem tivi",
          "Muốn chuyển sang trường học khác"
        ],
        correct: 0,
        explanation: "Bài hát thể hiện sự phấn khởi, tự hào của học sinh khi lên lớp Hai và quyết tâm chăm ngoan rèn luyện."
      },
      {
        question: "Khi hát tập thể bài hát cùng cả lớp, em cần lưu ý điều gì?",
        options: [
          "Hát đều giọng, hòa nhịp cùng cả lớp, không gào to át tiếng bạn",
          "Cố gắng hét thật to để chỉ nghe thấy tiếng mình",
          "Chỉ đứng nhép miệng không phát ra tiếng",
          "Hát nhanh hơn các bạn một nhịp"
        ],
        correct: 0,
        explanation: "Hát đồng ca đòi hỏi sự hòa âm, lắng nghe các bạn để giọng hát hòa quyện đồng đều."
      },
      {
        question: "Động tác phụ họa nào phù hợp nhất khi hát bài 'Học sinh lớp Hai chăm ngoan'?",
        options: [
          "Vỗ tay nhịp nhàng và nhún chân tự nhiên",
          "Ngồi im không cử động",
          "Chạy nhảy xô đẩy bạn",
          "Nằm gục xuống bàn"
        ],
        correct: 0,
        explanation: "Vỗ tay theo nhịp và nhún chân nhẹ nhàng giúp bài hát thêm sinh động và tươi vui."
      },
      {
        question: "Từ nào sau đây thể hiện phẩm chất tốt đẹp của người học sinh trong bài hát?",
        options: ["Chăm ngoan", "Lười biếng", "Quậy phá", "Bỏ bài"],
        correct: 0,
        explanation: "Phẩm chất 'Chăm ngoan' là cốt lõi được bài hát nhắc nhở các em rèn luyện mỗi ngày."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Mái trường thân yêu",
    tag: "Đọc nhạc & Nghe nhạc",
    title: "Bài 6: Đọc nhạc: Bài số 2 (Đô - Rê - Mi - Son) & Nghe nhạc: 'Vui đến trường'",
    objectives: [
      "Nhận biết và đọc đúng cao độ 4 nốt nhạc: Đô - Rê - Mi - Son.",
      "Thực hiện thành thạo ký hiệu bàn tay cho nốt Son (bàn tay mở phẳng hướng vào người).",
      "Lắng nghe và cảm nhận giai điệu rộn ràng của ca khúc 'Vui đến trường'.",
      "Thực hành ứng dụng đọc nhạc kết hợp vỗ đệm theo tiết tấu."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-music text-orange-600"></i> Bài đọc nhạc số 2: Bốn nốt Đô - Rê - Mi - Son
          </h4>
          <p>
            Sau khi đã nắm vững 3 nốt Đô, Rê, Mi, các em làm quen thêm một nốt nhạc mới có cao độ cao hơn hẳn: <strong>Nốt Son</strong>.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-600 font-bold inline-flex items-center justify-center text-xs mb-1">Đô</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Nắm tay úp bụng</p>
          </div>
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 font-bold inline-flex items-center justify-center text-xs mb-1">Rê</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Tay nghiêng chếch</p>
          </div>
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 font-bold inline-flex items-center justify-center text-xs mb-1">Mi</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Tay phẳng trước ngực</p>
          </div>
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950 text-red-600 font-bold inline-flex items-center justify-center text-xs mb-1">Son</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Lòng bàn tay hướng vào</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-headphones text-orange-500"></i> Nghe nhạc: Ca khúc "Vui đến trường"
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Giai điệu ca khúc vui tươi rộn rã khắc họa hình ảnh đàn em nhỏ tung tăng cắp sách tới trường trong ánh nắng mai rực rỡ, chim hót ríu rít hai bên đường làng quê thanh bình.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hand"></i> Luyện tập ký hiệu bàn tay nốt Son
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Thực hành chuỗi nốt:</strong> Đô - Mi - Son - Mi - Đô.</p>
          <p><strong>Trò chơi "Nốt nhạc bí mật":</strong> Giáo viên làm ký hiệu bàn tay của một nốt bất kỳ trong 4 nốt (Đô, Rê, Mi, Son), học sinh quan sát và đọc to tên nốt đó.</p>
        </div>
      </div>
    `,
    summary: "Nốt Son mang cao độ sáng, bay bổng; Bài đọc nhạc số 2 giúp các em mở rộng thang âm 4 nốt Đô - Rê - Mi - Son và phát triển khả năng nghe nhạc cảm thụ.",
    quizzes: [
      {
        question: "Trong 4 nốt Đô, Rê, Mi, Son, nốt nhạc nào có cao độ cao nhất?",
        options: ["Nốt Son", "Nốt Đô", "Nốt Rê", "Nốt Mi"],
        correct: 0,
        explanation: "Trong 4 nốt Đô - Rê - Mi - Son, nốt Son đứng ở vị trí cao độ cao nhất."
      },
      {
        question: "Ký hiệu bàn tay của nốt Son được thực hiện như thế nào?",
        options: [
          "Bàn tay mở phẳng ngang tầm ngực, lòng bàn tay hướng vào phía trong người",
          "Nắm chặt tay để sát bụng",
          "Giơ ngón trỏ chỉ lên trời",
          "Hai tay chắp lại trước ngực"
        ],
        correct: 0,
        explanation: "Ký hiệu Curwen cho nốt Son là mở rộng bàn tay, 4 ngón khép tự nhiên và lòng bàn tay quay về phía cơ thể."
      },
      {
        question: "Thứ tự cao độ đi từ thấp lên cao của 4 nốt trong bài học là gì?",
        options: ["Đô - Rê - Mi - Son", "Son - Mi - Rê - Đô", "Đô - Son - Mi - Rê", "Rê - Mi - Đô - Son"],
        correct: 0,
        explanation: "Thứ tự từ thấp đến cao chính xác là: Đô &rarr; Rê &rarr; Mi &rarr; Son."
      },
      {
        question: "Khi lắng nghe ca khúc 'Vui đến trường', cảm xúc chung của bài hát mang lại là gì?",
        options: ["Rộn ràng, háo hức, vui tươi", "Sợ sệt, lo lắng", "U ám, buồn bã", "Ngái ngủ, mệt mỏi"],
        correct: 0,
        explanation: "Ca khúc 'Vui đến trường' có giai điệu rất rộn ràng, háo hức khích lệ các em học sinh yêu thích tới trường."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 4: TUỔI THƠ
  // ==========================================
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Tuổi thơ",
    tag: "Học hát & Vận động",
    title: "Bài 7: Học hát bài 'Chú chim nhỏ dễ thương' (Nhạc Pháp - Lời Việt) & Gõ đệm",
    objectives: [
      "Hát đúng giai điệu và lời ca ngộ nghĩnh, nhí nhảnh của bài hát Chú chim nhỏ dễ thương.",
      "Biết bài hát có nguồn gốc từ nền âm nhạc nước Pháp với giai điệu nổi tiếng toàn thế giới.",
      "Thực hành gõ đệm bằng thanh phách hoặc vỗ tay theo tiết tấu lời ca.",
      "Yêu thích động vật, phát triển cảm xúc thẩm mỹ âm nhạc phương Tây trong sáng."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-dove text-orange-600"></i> Xuất xứ bài hát "Chú chim nhỏ dễ thương"
          </h4>
          <p>
            Bài hát <strong>"Chú chim nhỏ dễ thương"</strong> là một giai điệu thiếu nhi nổi tiếng của nước <strong>Pháp</strong> được dịch sang lời Việt. Giai điệu bài hát mô tả điệu nhảy vui nhộn của chú chim non đáng yêu với đôi chân nhảy nhót trên cành cây.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca rộn ràng của bài hát
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5">
            <p>Lại đây hỡi chú chim nhỏ xinh dễ thương này!</p>
            <p>Lại đây hỡi chú chim nhỏ xinh dễ thương!</p>
            <p>Cất tiếng hót líu lo, cất tiếng hót véo von,</p>
            <p>Đem lại muôn niềm vui cho muôn người khắp nơi nơi!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Phương pháp gõ đệm theo tiết tấu lời ca:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hát đến từ nào thì gõ đúng một tiếng vào từ đó: <em>Lại (gõ) đây (gõ) hỡi (gõ) chú (gõ) chim (gõ) nhỏ (gõ) xinh (gõ)...</em>
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-drum"></i> Thực hành đệm thanh phách & Điệu nhảy chim non
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Động tác nhảy:</strong> Hai tay khum cong đặt dưới nách làm cánh chim vỗ nhẹ, nhún chân nhảy chân sáo theo nhịp bài hát.</p>
          <p><strong>Hòa tấu:</strong> Một nhóm hát, một nhóm gõ thanh phách theo tiết tấu lời ca.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Chú chim nhỏ dễ thương' (Nhạc Pháp) mang nét đẹp nhí nhảnh, vui tươi; rèn luyện kỹ năng gõ đệm tiết tấu lời ca và kết hợp múa mô phỏng hình tượng chim non.",
    quizzes: [
      {
        question: "Bài hát 'Chú chim nhỏ dễ thương' có xuất xứ giai điệu từ quốc gia nào?",
        options: ["Nước Pháp", "Nước Nga", "Nước Nhật Bản", "Nước Đức"],
        correct: 0,
        explanation: "Bài hát là giai điệu thiếu nhi nổi tiếng của nước Pháp, được đặt lời Việt rất được trẻ em yêu thích."
      },
      {
        question: "Khi gõ đệm theo tiết tấu lời ca, em thực hiện gõ như thế nào?",
        options: [
          "Mỗi tiếng hát phát ra tương ứng với một tiếng gõ đệm",
          "Chỉ gõ khi kết thúc toàn bộ bài hát",
          "Gõ thật chậm không cần nghe tiếng hát",
          "Gõ liên tục không ngừng nghỉ"
        ],
        correct: 0,
        explanation: "Gõ theo tiết tấu lời ca nghĩa là lời hát phát ra chữ nào thì tay gõ đúng chữ đó."
      },
      {
        question: "Tính chất giai điệu của bài hát 'Chú chim nhỏ dễ thương' là gì?",
        options: ["Nhí nhảnh, vui nhộn, tươi sáng", "U sầu, ảo não", "Buồn bã, nặng nề", "Hùng tráng, uy nghiêm"],
        correct: 0,
        explanation: "Bài hát có giai điệu vô cùng nhí nhảnh, hồn nhiên và rộn rã."
      },
      {
        question: "Tiếng hót của chú chim trong bài hát đem lại điều gì cho mọi người?",
        options: ["Đem lại muôn niềm vui cho khắp nơi", "Đem lại nỗi sợ hãi", "Làm cho mọi người ngủ thiếp đi", "Không đem lại điều gì"],
        correct: 0,
        explanation: "Lời bài hát viết: 'Đem lại muôn niềm vui cho muôn người khắp nơi nơi!'."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Tuổi thơ",
    tag: "Nhạc cụ & Nghe nhạc",
    title: "Bài 8: Nhạc cụ gõ: Thanh phách & Triangle; Nghe nhạc: 'Múa sư tử thật là vui'",
    objectives: [
      "Nhận biết và phân biệt âm thanh mộc mạc của Thanh phách và âm thanh kim loại leng keng của Triangle.",
      "Thực hành gõ hòa tấu kết hợp hai nhạc cụ Thanh phách và Triangle theo hình tiết tấu.",
      "Lắng nghe tác phẩm âm nhạc 'Múa sư tử thật là vui' rộn rã tiếng trống hội đêm rằm Trung thu.",
      "Ôn tập và đánh giá kiến thức âm nhạc học kì I."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Thanh phách -->
          <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
            <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-bars text-orange-600"></i> Thanh phách (Nhạc cụ tre/gỗ)
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Gồm 2 thanh tre (hoặc gỗ) dẹt. Khi gõ hai thanh vào nhau phát ra âm thanh giòn giã, vang chắc nịch.
            </p>
            <p class="text-xs text-orange-700 dark:text-orange-300 font-semibold">
              Kỹ thuật: Tay trái cầm một thanh ngửa lên, tay phải cầm thanh thứ hai gõ chéo góc xuống thanh kia.
            </p>
          </div>

          <!-- Triangle -->
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
            <h4 class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-play text-amber-600"></i> Triangle (Thanh tam giác)
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Là thanh kim loại uốn thành hình tam giác hở ở một góc, treo bằng dây dù nhỏ.
            </p>
            <p class="text-xs text-amber-700 dark:text-amber-300 font-semibold">
              Âm thanh: Leng keng, trong suốt, ngân dài như tiếng chuông bạc lấp lánh.
            </p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-bell text-orange-500"></i> Nghe nhạc: "Múa sư tử thật là vui"
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Tác phẩm gợi lại không khí tưng bừng của đêm hội Trăng rằm Trung thu với tiếng trống lân "Tùng cắc tùng tùng cắc", tiếng chũm chọe rộn rã và tiếng cười đùa rộn rã của trẻ thơ quanh ông Địa phúc hậu.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-drum"></i> Hòa tấu tiết tấu hai nhạc cụ
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Thanh phách gõ phách:</strong> Cốc - Cốc - Cốc - Cốc (đều đặn).</p>
          <p><strong>Triangle gõ phách cuối:</strong> Nghỉ - Nghỉ - Nghỉ - Keng! (ngân vang).</p>
          <p>Hai nhóm phối hợp nhịp nhàng tạo nên âm hưởng sinh động như một dàn nhạc mini.</p>
        </div>
      </div>
    `,
    summary: "Thanh phách (chất liệu gỗ/tre) và Triangle (chất liệu kim loại) là hai nhạc cụ gõ tương phản về âm sắc; hòa tấu giúp học sinh rèn luyện khả năng phối hợp nhịp nhàng.",
    quizzes: [
      {
        question: "Nhạc cụ Triangle (thanh tam giác) được chế tạo từ chất liệu gì?",
        options: ["Kim loại thép", "Gỗ tre", "Nhựa mica", "Đất nung"],
        correct: 0,
        explanation: "Triangle được làm từ kim loại uốn thành hình tam giác hở ở một đỉnh, khi gõ phát ra âm thanh leng keng ngân vang."
      },
      {
        question: "Âm thanh của nhạc cụ Triangle có đặc tính gì nổi bật?",
        options: [
          "Leng keng, trong trẻo, ngân vang",
          "Trầm đục như tiếng sấm",
          "Rè rè và ồn ào",
          "Không phát ra âm thanh gì"
        ],
        correct: 0,
        explanation: "Chất liệu kim loại tạo cho Triangle âm sắc leng keng, trong vắt và ngân vang lâu."
      },
      {
        question: "Khi cầm nhạc cụ Triangle để biểu diễn, em cầm như thế nào là đúng cách?",
        options: [
          "Cầm vào sợi dây treo, tay kia cầm que kim loại gõ nhẹ",
          "Cầm chặt hai bàn tay bóp chặt vào thanh kim loại",
          "Đặt thanh kim loại xuống đất rồi lấy chân dẫm",
          "Cầm que gõ đập mạnh hết sức"
        ],
        correct: 0,
        explanation: "Phải cầm vào dây treo để thanh tam giác được tự do rung động và ngân vang trọn vẹn."
      },
      {
        question: "Tác phẩm nghe nhạc 'Múa sư tử thật là vui' tái hiện không khí ngày tết nào của thiếu nhi?",
        options: ["Tết Trung thu rằm tháng Tám", "Tết Hàn thực", "Tết Đoan ngọ", "Tết Trùng cửu"],
        correct: 0,
        explanation: "Múa sư tử (múa lân) là hoạt động lễ hội truyền thống rộn ràng nhất của thiếu nhi trong dịp Tết Trung thu."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 5: MÙA XUÂN
  // ==========================================
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Mùa xuân",
    tag: "Học hát & Múa minh họa",
    title: "Bài 9: Học hát bài 'Hoa lá mùa xuân' (Hoàng Hà) & Múa minh họa",
    objectives: [
      "Hát đúng giai điệu, lời ca rộn rã, tươi tắn của bài hát Hoa lá mùa xuân do nhạc sĩ Hoàng Hà sáng tác.",
      "Cảm nhận vẻ đẹp tràn đầy sức sống của thiên nhiên cây cỏ khi mùa xuân về.",
      "Vừa hát vừa thực hiện các động tác múa hoa xòe tay, nhún chân theo nhịp 2/4.",
      "Bồi dưỡng tình yêu quê hương đất nước trong ngày xuân đổi mới."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-seedling text-orange-600"></i> Bài hát "Hoa lá mùa xuân" của nhạc sĩ Hoàng Hà
          </h4>
          <p>
            Nhạc sĩ <strong>Hoàng Hà</strong> đã sáng tác ca khúc <strong>"Hoa lá mùa xuân"</strong> với giai điệu bay bổng, rộn ràng. Bài hát như lời mời gọi hoa lá thức giấc đón chào những tia nắng ấm áp đầu xuân.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca ngập tràn sắc xuân
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Tôi là lá, tôi là hoa, tôi là hoa lá hoa mùa xuân.</p>
            <p>Tôi cùng múa, tôi cùng ca, tôi cùng ca múa mừng xuân sang.</p>
            <p>Xuân vừa đến trên cành cao, cho ngàn hoa lá đua màu tươi.</p>
            <p>Cho người muôn sắc yêu đời, cho bài ca đón xuân rạng ngời!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Cảm xúc thể hiện:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Giọng hát cần trong trẻo, tươi vui, phát âm nhẹ nhàng thanh thoát như làn gió xuân đung đưa cành lá non.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-person-walking"></i> Động tác múa minh họa "Hoa xuân xòe cánh"
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Câu 1:</strong> Đưa hai tay lên ngang ngực, cổ tay chạm nhau và mười ngón tay mở xòe như đóa hoa đang nở rộ.</p>
          <p><strong>Câu 2:</strong> Nghiêng người sang trái, sang phải theo từng phách nhịp của bài hát.</p>
          <p><strong>Câu 3:</strong> Vòng tay lên cao đón lấy ánh nắng mùa xuân rực rỡ.</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Hoa lá mùa xuân' của Hoàng Hà là khúc ca đón xuân tươi vui rạng rỡ; học sinh biết hát tròn tiếng kết hợp múa minh họa hoa xuân duyên dáng.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác bài hát 'Hoa lá mùa xuân'?",
        options: ["Nhạc sĩ Hoàng Hà", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Bài hát 'Hoa lá mùa xuân' là sáng tác quen thuộc của nhạc sĩ Hoàng Hà."
      },
      {
        question: "Lời mở đầu của bài hát 'Hoa lá mùa xuân' là câu nào?",
        options: [
          "Tôi là lá, tôi là hoa, tôi là hoa lá hoa mùa xuân",
          "Mùa xuân đã về trên quê hương ta",
          "Tết tết tết đến rồi",
          "Cùng múa vui nào các bạn ơi"
        ],
        correct: 0,
        explanation: "Lời ca mở đầu hồn nhiên: 'Tôi là lá, tôi là hoa, tôi là hoa lá hoa mùa xuân'."
      },
      {
        question: "Tính chất giai điệu của bài hát 'Hoa lá mùa xuân' như thế nào?",
        options: ["Tươi vui, rộn ràng, tràn đầy sức sống", "U sầu, lạnh lẽo", "Chậm chạp, buồn bã", "Hùng tráng, dồn dập"],
        correct: 0,
        explanation: "Mùa xuân đem lại sự sinh sôi nảy nở nên bài hát có giai điệu tươi sáng và tràn đầy sức sống."
      },
      {
        question: "Khi thực hiện động tác múa hoa xòe cánh, bàn tay em tạo hình thế nào?",
        options: [
          "Cổ tay chạm nhau, mười đầu ngón tay mở xòe uốn nhẹ như cánh hoa",
          "Nắm chặt hai bàn tay thành nắm đấm",
          "Giấu hai tay sau lưng",
          "Vung vẩy hai tay lung tung"
        ],
        correct: 0,
        explanation: "Động tác xòe ngón tay mềm mại mô phỏng cánh hoa đang bừng nở trong gió xuân."
      }
    ]
  },

  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Mùa xuân",
    tag: "Đọc nhạc & Thường thức",
    title: "Bài 10: Đọc nhạc: Bài số 3 (Rê - Mi - Son - La) & Thường thức: Chuyện bài hát 'Chú voi con ở Bản Đôn'",
    objectives: [
      "Nhận biết và đọc đúng cao độ 4 nốt nhạc: Rê - Mi - Son - La.",
      "Thực hiện chuẩn xác ký hiệu bàn tay nốt La (bàn tay khum hình chiếc bát úp mềm mại).",
      "Lắng nghe câu chuyện cảm động và thú vị về hoàn cảnh ra đời của bài hát 'Chú voi con ở Bản Đôn' (Phạm Tuyên).",
      "Thực hành đọc nhạc kết hợp gõ đệm nhạc cụ gõ theo tiết tấu."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-music text-orange-600"></i> Bài đọc nhạc số 3: Bốn nốt Rê - Mi - Son - La
          </h4>
          <p>
            Trong bài đọc nhạc số 3, các em làm quen với <strong>Nốt La</strong> - một nốt nhạc cao vút, thanh thoát đứng liền kề phía trên nốt Son.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 font-bold inline-flex items-center justify-center text-xs mb-1">Rê</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Bàn tay chếch lên</p>
          </div>
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 font-bold inline-flex items-center justify-center text-xs mb-1">Mi</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Bàn tay phẳng ngang</p>
          </div>
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950 text-red-600 font-bold inline-flex items-center justify-center text-xs mb-1">Son</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Lòng bàn tay hướng vào</p>
          </div>
          <div class="p-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl text-center">
            <span class="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-600 font-bold inline-flex items-center justify-center text-xs mb-1">La</span>
            <p class="text-xs text-gray-600 dark:text-gray-400">Bàn tay khum vòm úp</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-book-open text-orange-500"></i> Thường thức âm nhạc: Chuyện về bài hát "Chú voi con ở Bản Đôn"
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Năm 1983, khi đến thăm Bản Đôn (Đắk Lắk), nhạc sĩ <strong>Phạm Tuyên</strong> nhìn thấy một chú voi con mới sinh thật dễ thương đang tung tăng vẫy đuôi đùa nghịch với các bạn nhỏ Tây Nguyên. Xúc động trước cảnh tượng thanh bình ấy, ông đã viết nên bài hát <em>"Chú voi con ở Bản Đôn, chưa có ngà nên còn trẻ con..."</em> sống mãi cùng bao thế hệ tuổi thơ.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hand-peace"></i> Luyện tập đọc nhạc thang âm 4 nốt
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>1. Thang âm đi lên:</strong> Rê - Mi - Son - La (kết hợp ký hiệu bàn tay nâng dần từ ngực lên cằm).</p>
          <p><strong>2. Thang âm đi xuống:</strong> La - Son - Mi - Rê.</p>
          <p><strong>3. Giai điệu ngắn:</strong> Son - La - Son - Mi - Rê.</p>
        </div>
      </div>
    `,
    summary: "Nốt La có cao độ thanh cao, ký hiệu bàn tay khum vòm; câu chuyện về 'Chú voi con ở Bản Đôn' của nhạc sĩ Phạm Tuyên nhắc nhở tình yêu thương động vật và núi rừng Tây Nguyên.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc bất hủ 'Chú voi con ở Bản Đôn'?",
        options: ["Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Long", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Nhạc sĩ Phạm Tuyên sáng tác bài hát này trong chuyến đi thực tế tại vùng Bản Đôn (tỉnh Đắk Lắk)."
      },
      {
        question: "Trong bài đọc nhạc số 3 (Rê - Mi - Son - La), nốt nhạc nào có cao độ cao nhất?",
        options: ["Nốt La", "Nốt Son", "Nốt Mi", "Nốt Rê"],
        correct: 0,
        explanation: "Thứ tự cao độ tăng dần là Rê &rarr; Mi &rarr; Son &rarr; La, do đó nốt La cao nhất."
      },
      {
        question: "Ký hiệu bàn tay của nốt La được thực hiện như thế nào?",
        options: [
          "Bàn tay khum cong thả lỏng hình vòm úp xuống phía trước",
          "Nắm chặt bàn tay lại",
          "Bàn tay duỗi thẳng góc 45 độ",
          "Hai ngón tay giơ chữ V"
        ],
        correct: 0,
        explanation: "Ký hiệu bàn tay cho nốt La là bàn tay khum cong hình chiếc vòm (hoặc chiếc bát úp) nhẹ nhàng."
      },
      {
        question: "Chú voi con trong bài hát ở Bản Đôn có đặc điểm gì ngộ nghĩnh?",
        options: [
          "Chưa có ngà nên còn trẻ con, rất ham ăn với lại ham chơi",
          "Đã có ngà rất dài và hung dữ",
          "Chỉ biết ngủ không chịu đi lại",
          "Biết bay lên bầu trời"
        ],
        correct: 0,
        explanation: "Lời bài hát viết: 'Chú voi con ở Bản Đôn, chưa có ngà nên còn trẻ con, từ rừng già chú đến với người, rất ham ăn với lại ham chơi'."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 6: GIA ĐÌNH YÊU THƯƠNG
  // ==========================================
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Gia đình yêu thương",
    tag: "Học hát & Tình cảm",
    title: "Bài 11: Học hát bài 'Mẹ ơi có biết' (Nguyễn Văn Chung) & Cảm thụ tình cảm gia đình",
    objectives: [
      "Hát đúng giai điệu, lời ca tha thiết, ấm áp của bài hát Mẹ ơi có biết của nhạc sĩ Nguyễn Văn Chung.",
      "Biết thể hiện lòng biết ơn, tình yêu thương sâu sắc đối với công ơn trời biển của người mẹ.",
      "Thực hành hát kết hợp vỗ tay đệm nhịp nhẹ nhàng hoặc biểu cảm ánh mắt nụ cười.",
      "Phát triển phẩm chất hiếu thảo, gắn kết các thành viên trong gia đình."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-heart text-orange-600"></i> Ca khúc ngọt ngào về mẹ
          </h4>
          <p>
            Nhạc sĩ <strong>Nguyễn Văn Chung</strong> - tác giả của bài hát <em>Nhật ký của mẹ</em> - đã viết ca khúc thiếu nhi <strong>"Mẹ ơi có biết"</strong> vô cùng xúc động, như lời thủ thỉ chân thành của con thơ gửi đến người mẹ kính yêu.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca đong đầy yêu thương
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Mẹ ơi có biết con thương mẹ nhiều!</p>
            <p>Cứ muốn ôm mẹ và cười thật tươi.</p>
            <p>Mẹ là tổ ấm chở che cuộc đời,</p>
            <p>Cho con ấm êm từng ngày lớn khôn.</p>
            <p>Mẹ ơi có biết con yêu mẹ nhiều!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Hướng dẫn cách lấy hơi và nhả chữ:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hát với giọng nhẹ nhàng, êm dịu. Nhả chữ mềm mại ở từ "Mẹ ơi", tránh hát giật cục hoặc gắt giọng.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-microphone"></i> Biểu diễn bài hát dành tặng mẹ
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Động tác biểu cảm:</strong> Hai tay ôm nhẹ trước ngực ở câu "Cứ muốn ôm mẹ và cười thật tươi", ánh mắt trìu mến hướng về mẹ.</p>
          <p><strong>Lời nhắn nhủ:</strong> Về nhà, các em hãy hát tặng ca khúc này cho mẹ cùng một cái ôm thật ấm áp nhé!</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Mẹ ơi có biết' của Nguyễn Văn Chung dạy các em tình yêu thương, lòng biết ơn sâu sắc đối với người mẹ; luyện tập hát tình cảm, êm ái.",
    quizzes: [
      {
        question: "Ai là nhạc sĩ sáng tác ca khúc thiếu nhi ấm áp 'Mẹ ơi có biết'?",
        options: ["Nhạc sĩ Nguyễn Văn Chung", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Phan Huỳnh Điểu", "Nhạc sĩ Văn Cao"],
        correct: 0,
        explanation: "Nhạc sĩ Nguyễn Văn Chung là tác giả sáng tác ca khúc giàu tình cảm 'Mẹ ơi có biết'."
      },
      {
        question: "Giai điệu và tình cảm của bài hát 'Mẹ ơi có biết' cần được thể hiện như thế nào?",
        options: [
          "Tha thiết, ấm áp, nhẹ nhàng và trìu mến",
          "Hùng hổ, mạnh bạo, gắt gỏng",
          "Rộn ràng như đi hành quân",
          "Nhanh như một cơn lốc"
        ],
        correct: 0,
        explanation: "Bài hát dành cho mẹ nên cần sự tha thiết, ấm áp và đong đầy tình cảm yêu thương."
      },
      {
        question: "Hình ảnh người mẹ trong bài hát được ví như điều gì che chở cho con?",
        options: ["Tổ ấm chở che cuộc đời", "Cơn gió mát", "Ngọn đuốc sáng", "Ngôi sao xa"],
        correct: 0,
        explanation: "Lời ca viết: 'Mẹ là tổ ấm chở che cuộc đời, cho con ấm êm từng ngày lớn khôn'."
      },
      {
        question: "Hành động nào sau đây thể hiện tình cảm hiếu thảo của con đối với mẹ?",
        options: [
          "Chăm ngoan học giỏi, vâng lời và giúp đỡ mẹ việc nhà",
          "Vòi vĩnh đòi mua đồ chơi đắt tiền",
          "Cãi lời khi mẹ nhắc nhở",
          "Chỉ lo chơi game không chịu học bài"
        ],
        correct: 0,
        explanation: "Chăm ngoan, vâng lời và biết đỡ đần mẹ là cách bày tỏ tình yêu thương chân thành nhất của học sinh lớp 2."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Gia đình yêu thương",
    tag: "Nhạc cụ & Nghe nhạc",
    title: "Bài 12: Nhạc cụ Ma-ra-cát (Maracas) & Nghe nhạc: Điệu hát ru 'Ru con' (Dân ca Nam Bộ)",
    objectives: [
      "Nhận biết hình dáng quả chuông lắc có cán cầm và âm thanh xào xạc vui tai của nhạc cụ Ma-ra-cát (Maracas).",
      "Biết cách cầm hai quả Maracas rung lắc đều đặn theo nhịp điệu bài hát.",
      "Lắng nghe và cảm thụ làn điệu dân ca Nam Bộ êm đềm 'Ru con' (Gió mùa thu mẹ ru con ngủ...).",
      "Nhận biết sự khác biệt giữa âm thanh rộn rã của nhạc cụ gõ và giai điệu ru êm ái, mượt mà."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Nhạc cụ Maracas -->
          <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
            <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-shapes text-orange-600"></i> Nhạc cụ Ma-ra-cát (Maracas)
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Ma-ra-cát gồm một cặp bầu rỗng bằng gỗ hoặc nhựa có gắn tay cầm, bên trong chứa các hạt sỏi hoặc hạt cườm nhỏ.
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
              <li><strong>Âm thanh:</strong> Xào xạc, rào rào vui nhộn như tiếng mưa rào nhẹ.</li>
              <li><strong>Cách chơi:</strong> Cầm hai tay hai quả lắc, vung nhẹ cổ tay theo nhịp phách.</li>
            </ul>
          </div>

          <!-- Nghe nhạc: Ru con -->
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
            <h4 class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-moon text-amber-600"></i> Dân ca Nam Bộ: "Ru con"
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Điệu hát ru con ngọt ngào miền sông nước Cửu Long với câu hát da diết:
            </p>
            <p class="p-2 bg-white dark:bg-gray-900 rounded font-serif italic text-xs text-gray-700 dark:text-gray-300">
              "Gió mùa thu mẹ ru con ngủ, năm canh chày thức đủ vừa năm..."
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Giai điệu êm ái đưa con vào giấc ngủ say nồng bên cánh võng trưa hè.
            </p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-music"></i> Thực hành lắc Ma-ra-cát & Cảm thụ nhịp điệu
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Lắc nhịp 1 - 2:</strong> Lắc tay phải (xạc) &rarr; Lắc tay trái (xạc) đều đặn theo nhịp đếm.</p>
          <p><strong>Rung liên tục (Roll):</strong> Lắc cổ tay thật nhanh tạo âm thanh rào rào kéo dài báo hiệu đoạn điệp khúc.</p>
        </div>
      </div>
    `,
    summary: "Ma-ra-cát (Maracas) tạo âm thanh xào xạc vui tai; điệu hát 'Ru con' Nam Bộ đưa lại cảm xúc êm đềm, sâu lắng về tình mẫu tử thiêng liêng.",
    quizzes: [
      {
        question: "Bên trong quả nhạc cụ Ma-ra-cát (Maracas) chứa những hạt gì để phát ra tiếng kêu?",
        options: ["Các hạt nhỏ (hạt nhựa, sỏi nhỏ, hạt cườm)", "Nước đầy bên trong", "Một sợi dây đàn", "Khối sắt lớn"],
        correct: 0,
        explanation: "Khi lắc, các hạt nhỏ bên trong va chạm vào thành bầu rỗng tạo ra âm thanh xào xạc giòn giã."
      },
      {
        question: "Âm thanh của nhạc cụ Ma-ra-cát gợi cho em liên tưởng đến hiện tượng nào trong tự nhiên?",
        options: ["Tiếng lá cây xào xạc hoặc tiếng mưa rào nhẹ", "Tiếng sấm sét nổ to", "Tiếng còi tàu hỏa", "Tiếng máy bay gầm rú"],
        correct: 0,
        explanation: "Âm sắc rào rào của Maracas rất giống tiếng gió thổi qua vòm lá xào xạc hoặc tiếng mưa rơi tí tách."
      },
      {
        question: "Bài hát 'Ru con' (Gió mùa thu mẹ ru con ngủ...) thuộc thể loại dân ca của vùng miền nào?",
        options: ["Dân ca Nam Bộ", "Dân ca Tây Bắc", "Dân ca Đồng bằng Bắc Bộ", "Dân ca Miền Trung"],
        correct: 0,
        explanation: "Bài 'Ru con' là một điệu ru nổi tiếng và tiêu biểu của dân ca miền Nam Bộ."
      },
      {
        question: "Tính chất giai điệu của các bài hát ru truyền thống thường như thế nào?",
        options: ["Êm ái, mượt mà, chậm rãi và tha thiết", "Ồn ào, giật gân", "Hét to để đánh thức mọi người", "Nhanh như bước chạy"],
        correct: 0,
        explanation: "Hát ru cần giai điệu êm ả, mượt mà và dịu dàng để vỗ về các em bé ngủ ngon."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 7: NHỮNG CON VẬT QUANH EM
  // ==========================================
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Những con vật quanh em",
    tag: "Học hát & Mô phỏng",
    title: "Bài 13: Học hát bài 'Trang trại vui vẻ' (Old MacDonald Had a Farm - Lời Việt)",
    objectives: [
      "Hát đúng giai điệu, lời ca rộn ràng, hài hước của bài hát thiếu nhi quốc tế Trang trại vui vẻ.",
      "Biết mô phỏng các âm thanh tiếng kêu sống động của các con vật nuôi (vịt quạc quạc, bò ò he, gà cục tác).",
      "Vừa hát vừa đóng vai các con vật trong nông trại vui nhộn.",
      "Hình thành tình cảm yêu quý, bảo vệ và chăm sóc các con vật nuôi trong gia đình."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-cow text-orange-600"></i> Bài hát quốc tế quen thuộc "Trang trại vui vẻ"
          </h4>
          <p>
            Được phỏng dịch từ ca khúc thiếu nhi kinh điển thế giới <em>Old MacDonald Had a Farm</em>, bài hát <strong>"Trang trại vui vẻ"</strong> đưa các em đến thăm một trang trại đầy ắp tiếng cười cùng các bạn vật nuôi đáng yêu.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca mô phỏng tiếng kêu ngộ nghĩnh
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Trang trại xinh vui tươi biết bao: I - a - i - a - ô!</p>
            <p>Trong trại nuôi bao nhiêu chú vịt: I - a - i - a - ô!</p>
            <p>Chỗ này kêu quạc quạc! Chỗ kia kêu quạc quạc!</p>
            <p>Chỗ nào cũng quạc quạc, vui ơi là vui!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Mẹo diễn xuất biểu cảm:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Khi phát âm câu điệp khúc <em>"I - a - i - a - ô!"</em>, các em hãy mở to mắt, cười tươi và vỗ tay theo từng phách nhịp!
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-masks-theater"></i> Trò chơi đóng vai "Dàn đồng ca nông trại"
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Nhóm Vịt con:</strong> Kêu "Quạc quạc" kèm động tác vỗ cánh.</p>
          <p><strong>Nhóm Bò sữa:</strong> Kêu "Ò he" kèm động tác lắc đầu.</p>
          <p><strong>Nhóm Mèo ngoan:</strong> Kêu "Meo meo" kèm động tác vuốt râu.</p>
          <p>Cả lớp hòa thành bản giao hưởng nông trại tưng bừng rực rỡ sắc màu.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Trang trại vui vẻ' mang lại tiếng cười sảng khoái; rèn luyện khả năng phát âm mô phỏng âm thanh tự nhiên và phản xạ nhịp điệu nhanh nhạy.",
    quizzes: [
      {
        question: "Bài hát 'Trang trại vui vẻ' được dịch từ bài hát thiếu nhi quốc tế nổi tiếng nào?",
        options: ["Old MacDonald Had a Farm", "Twinkle Twinkle Little Star", "Happy Birthday", "Jingle Bells"],
        correct: 0,
        explanation: "Bài hát gốc tiếng Anh là 'Old MacDonald Had a Farm' rất phổ biến ở các trường mầm non và tiểu học trên toàn cầu."
      },
      {
        question: "Đoạn điệp khúc quen thuộc trong bài hát có giai điệu được hát như thế nào?",
        options: ["I - a - i - a - ô!", "La - la - la - la - la!", "Cúc - cu - cúc - cu - cu!", "Tùng - cắc - tùng - tùng - cắc!"],
        correct: 0,
        explanation: "Điệp khúc vang lên rộn rã: 'I - a - i - a - ô!'."
      },
      {
        question: "Ý nghĩa giáo dục nổi bật của bài hát 'Trang trại vui vẻ' là gì?",
        options: [
          "Bồi dưỡng tình yêu và thái độ đối xử nhân ái với các loài vật nuôi",
          "Dạy cách săn bắn động vật",
          "Khuyên không nên đến trang trại",
          "Dạy cách ngủ nướng"
        ],
        correct: 0,
        explanation: "Bài hát giúp các em gắn bó, yêu mến thiên nhiên và các con vật gần gũi quanh mình."
      },
      {
        question: "Khi hát bài hát này, các bạn nhỏ nên kết hợp hoạt động gì để bài hát thêm sinh động?",
        options: [
          "Làm động tác đóng vai và bắt chước tiếng kêu của các con vật",
          "Ngồi im khoanh tay cúi đầu",
          "Đeo tai nghe bịt kín tai",
          "Đọc bài tập đọc tiếng Việt"
        ],
        correct: 0,
        explanation: "Vừa hát vừa làm cử chỉ mô phỏng động tác chim, vịt, bò... giúp tiết học luôn tràn ngập tiếng cười."
      }
    ]
  },

  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Những con vật quanh em",
    tag: "Đọc nhạc & Nhạc cụ",
    title: "Bài 14: Đọc nhạc: Bài số 4 (Đô - Rê - Mi - Son - La) & Thực hành gõ đệm Song loan",
    objectives: [
      "Nhận biết và đọc trôi chảy thang âm ngũ âm cơ bản 5 nốt: Đô - Rê - Mi - Son - La.",
      "Thực hiện chuẩn xác và linh hoạt ký hiệu bàn tay cho toàn bộ 5 nốt nhạc đã học.",
      "Thực hành dùng nhạc cụ gõ Song loan hoặc thanh phách gõ đệm cho Bài đọc nhạc số 4.",
      "Phát triển tai nghe cao độ và khả năng cảm nhận hòa thanh truyền thống Việt Nam."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-music text-orange-600"></i> Bài đọc nhạc số 4: Thang âm năm nốt ngũ cung
          </h4>
          <p>
            Đây là cột mốc quan trọng của chương trình Âm nhạc 2: các em làm chủ trọn vẹn <strong>5 nốt nhạc</strong> nền tảng của âm nhạc dân ca Việt Nam:
            <strong>Đô - Rê - Mi - Son - La</strong>.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 text-sm">Bậc thang cao độ hoàn chỉnh:</h5>
          <div class="flex items-center justify-between text-center gap-2 py-3 px-2 bg-gray-50 dark:bg-gray-900 rounded-xl overflow-x-auto">
            <div class="px-3 py-2 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-bold text-xs">
              1. Đô<br><span class="text-[10px] font-normal">Trầm nhất</span>
            </div>
            <i class="fa-solid fa-arrow-right text-gray-300 text-xs"></i>
            <div class="px-3 py-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-xs">
              2. Rê<br><span class="text-[10px] font-normal">Bậc hai</span>
            </div>
            <i class="fa-solid fa-arrow-right text-gray-300 text-xs"></i>
            <div class="px-3 py-2 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold text-xs">
              3. Mi<br><span class="text-[10px] font-normal">Bậc ba</span>
            </div>
            <i class="fa-solid fa-arrow-right text-gray-300 text-xs"></i>
            <div class="px-3 py-2 rounded-lg bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-xs">
              4. Son<br><span class="text-[10px] font-normal">Bậc bốn</span>
            </div>
            <i class="fa-solid fa-arrow-right text-gray-300 text-xs"></i>
            <div class="px-3 py-2 rounded-lg bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 font-bold text-xs">
              5. La<br><span class="text-[10px] font-normal">Cao nhất</span>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Gõ đệm Song loan:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Dùng ngón tay cái hoặc lòng bàn chân nhấn cần gõ Song loan vào đúng các phách trọng âm của bài đọc nhạc để giữ nhịp độ ổn định.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hand"></i> Luyện tập đọc nhạc Bài số 4
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Giai điệu mẫu câu 1:</strong> Đô - Rê - Mi - Son | La - Son - Mi - Rê ||</p>
          <p><strong>Giai điệu mẫu câu 2:</strong> Mi - Son - La - Son | Mi - Rê - Đô - Đô ||</p>
          <p>Luyện tập theo nhóm: Một nửa lớp làm ký hiệu bàn tay và đọc nhạc, một nửa lớp gõ đệm Song loan.</p>
        </div>
      </div>
    `,
    summary: "Năm nốt nhạc Đô - Rê - Mi - Son - La tạo nên hệ thống ngũ cung đậm đà bản sắc dân tộc; kết hợp ký hiệu bàn tay và nhạc cụ Song loan giúp học sinh khắc sâu kiến thức.",
    quizzes: [
      {
        question: "Bài đọc nhạc số 4 bao gồm tập hợp 5 nốt nhạc nào sau đây?",
        options: [
          "Đô - Rê - Mi - Son - La",
          "Đô - Rê - Mi - Pha - Son",
          "Mi - Son - La - Si - Đố",
          "Đô - Mi - Son - Si - Rê"
        ],
        correct: 0,
        explanation: "Bài đọc nhạc số 4 xây dựng trên hệ thống 5 nốt nhạc ngũ cung: Đô, Rê, Mi, Son, La."
      },
      {
        question: "Trong chuỗi nốt Đô - Rê - Mi - Son - La, nốt nào đứng liền kề ngay phía trước nốt Son?",
        options: ["Nốt Mi", "Nốt Đô", "Nốt Rê", "Nốt La"],
        correct: 0,
        explanation: "Thứ tự đi lên là Đô &rarr; Rê &rarr; Mi &rarr; Son &rarr; La, nốt đứng ngay trước Son là nốt Mi."
      },
      {
        question: "Khi kết hợp đọc nhạc với nhạc cụ Song loan, Song loan có tác dụng gì?",
        options: [
          "Giữ nhịp điệu đều đặn và báo điểm phách mạnh",
          "Đọc tên nốt nhạc thay cho học sinh",
          "Tự động hát ra lời bài hát",
          "Làm cho giai điệu biến mất"
        ],
        correct: 0,
        explanation: "Song loan là nhạc cụ gõ giúp định hình và duy trì tốc độ, nhịp phách vững vàng khi đọc nhạc."
      },
      {
        question: "Ký hiệu bàn tay (hệ thống Curwen) có lợi ích lớn nhất là gì đối với người học?",
        options: [
          "Giúp hình dung trực quan và ghi nhớ chính xác độ cao của từng nốt nhạc",
          "Thay thế hoàn toàn việc phải hát",
          "Để tập thể dục cho ngón tay",
          "Để biểu diễn xiếc ảo thuật"
        ],
        correct: 0,
        explanation: "Ký hiệu bàn tay liên kết trực tiếp cử chỉ tay với độ cao âm thanh, giúp học sinh cảm nhận cao độ chuẩn xác."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 8: MÙA HÈ VUI
  // ==========================================
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Mùa hè vui",
    tag: "Học hát & Nghe nhạc",
    title: "Bài 15: Học hát bài 'Ngày hè vui' & Nghe nhạc: 'Mùa hè ước mong'",
    objectives: [
      "Hát đúng cao độ, trường độ và giai điệu rộn ràng, háo hức của bài hát Ngày hè vui.",
      "Cảm nhận niềm vui ngập tràn khi một năm học thành công khép lại và mùa hè bổ ích mở ra.",
      "Lắng nghe tác phẩm âm nhạc thiếu nhi 'Mùa hè ước mong' với tiếng ve râm ran và cánh phượng hồng rực rỡ.",
      "Vừa hát vừa thực hiện động tác vỗ tay, nhún nhảy chào đón mùa hè."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-sun text-orange-600"></i> Ca khúc rộn rã đón chào kỳ nghỉ hè
          </h4>
          <p>
            Mùa hè mang theo tiếng ve ngân, hoa phượng nở đỏ rực sân trường và những chuyến đi trải nghiệm lý thú. Bài hát <strong>"Ngày hè vui"</strong> tràn ngập không khí vui tươi, phấn khởi chào đón những ngày nghỉ hè bổ ích của các bạn nhỏ lớp 2.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-orange-500"></i> Lời ca háo hức mùa hè
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Hè về rộn rã tiếng ve ngân vang, phượng hồng khoe sắc thắm tươi sân trường.</p>
            <p>Chào mùa hè vui, bao niềm mơ ước, cùng bạn bè vui bước trên đường thênh thang!</p>
            <p>Ta cùng múa, ta cùng ca, đón chào mùa hè tươi xinh chan hòa!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-headphones text-orange-500"></i> Nghe nhạc: "Mùa hè ước mong"
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Tác phẩm mở ra bức tranh thiên nhiên mùa hè với biển xanh cát trắng, những buổi thả diều vi vu trên đồng quê và lời chúc các bạn nhỏ có kỳ nghỉ hè an toàn, khỏe mạnh.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-users"></i> Hát kết hợp vận động vẫy tay chào hè
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Câu 1:</strong> Hai tay đưa lên cao vẫy nhẹ sang trái, sang phải như những cành phượng đung đưa trong gió hè.</p>
          <p><strong>Câu 2:</strong> Vỗ tay giòn giã theo từng phách nhịp.</p>
          <p><strong>Câu điệp khúc:</strong> Nắm tay bạn bên cạnh tạo thành vòng tròn múa hát rộn ràng.</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Ngày hè vui' đem lại năng lượng tích cực chào đón mùa hè; giúp học sinh thể hiện niềm hân hoan, rèn luyện sự tự tin khi biểu diễn tập thể.",
    quizzes: [
      {
        question: "Những tín hiệu âm thanh và hình ảnh đặc trưng nào báo hiệu mùa hè đến trong bài hát?",
        options: ["Tiếng ve ngân vang và hoa phượng đỏ rực", "Hoa đào hoa mai nở rộ", "Gió mùa đông bắc lạnh giá", "Lá vàng rơi rụng đầy sân"],
        correct: 0,
        explanation: "Tiếng ve sầu kêu râm ran và hoa phượng đỏ rực rỡ là hai dấu hiệu tiêu biểu nhất của mùa hè học trò."
      },
      {
        question: "Cảm xúc bao trùm bài hát 'Ngày hè vui' là gì?",
        options: ["Hân hoan, rộn rã, tràn đầy niềm vui và háo hức", "Lo âu, căng thẳng", "Buồn bã, nuối tiếc", "Sợ hãi, rụt rè"],
        correct: 0,
        explanation: "Được nghỉ hè sau một năm học chăm chỉ đem lại niềm vui sướng và hân hoan cho tất cả học sinh."
      },
      {
        question: "Khi nghe bài hát 'Mùa hè ước mong', các em mong muốn kỳ nghỉ hè của mình như thế nào?",
        options: [
          "Bổ ích, an toàn, vui tươi và có nhiều trải nghiệm ý nghĩa",
          "Chỉ ngồi trong phòng bật điều hòa chơi điện tử cả ngày",
          "Thức thâu đêm không chịu ngủ",
          "Không cần trò chuyện với ai"
        ],
        correct: 0,
        explanation: "Một kỳ nghỉ hè tuyệt vời là kỳ nghỉ an toàn, lành mạnh, rèn luyện thể thao và gắn kết với thiên nhiên, gia đình."
      },
      {
        question: "Trong câu hát 'Chào mùa hè vui, bao niềm mơ ước...', từ nào thể hiện khát khao tuổi thơ?",
        options: ["Niềm mơ ước", "Tiếng ve", "Sân trường", "Hè về"],
        correct: 0,
        explanation: "Từ 'Niềm mơ ước' nói lên những ước mơ tươi sáng, trong trẻo của các bạn nhỏ khi mùa hè đến."
      }
    ]
  },

  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Mùa hè vui",
    tag: "Tổng kết & Dự án",
    title: "Bài 16: Ôn tập tổng kết cuối năm Lớp 2 & Dự án: 'Ngày hội âm nhạc Mùa hè tuổi thơ'",
    objectives: [
      "Hệ thống hóa toàn bộ các bài hát, bài đọc nhạc và nhạc cụ đã học trong suốt năm học Lớp 2.",
      "Tự tin biểu diễn đơn ca, song ca hoặc tốp ca các bài hát yêu thích trước tập thể lớp.",
      "Tham gia tích cực vào Dự án học tập 'Ngày hội âm nhạc Mùa hè tuổi thơ' với tinh thần đoàn kết.",
      "Đánh giá năng lực cảm thụ âm nhạc toàn diện chuẩn bị hành trang vững vàng bước vào Lớp 3."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-award text-orange-600"></i> Nhìn lại hành trình Âm nhạc Lớp 2
          </h4>
          <p>
            Trải qua 8 chủ đề thú vị, các em học sinh Lớp 2 đã tích lũy được một kho tàng âm nhạc phong phú gồm những bài hát thiếu nhi trong sáng, làn điệu dân ca ngọt ngào, các nốt nhạc ngũ cung và nhiều nhạc cụ gõ độc đáo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
              <i class="fa-solid fa-music text-orange-500"></i> Các bài hát trọng tâm cả năm:
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Dàn nhạc trong vườn (Tô Đông Hải)</li>
              <li>Con chim chích chòe (Dân ca Nam Bộ - Lời: Việt Anh)</li>
              <li>Học sinh lớp Hai chăm ngoan</li>
              <li>Chú chim nhỏ dễ thương (Nhạc Pháp)</li>
              <li>Hoa lá mùa xuân (Hoàng Hà)</li>
              <li>Mẹ ơi có biết (Nguyễn Văn Chung)</li>
              <li>Trang trại vui vẻ (Old MacDonald)</li>
              <li>Ngày hè vui</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
              <i class="fa-solid fa-guitar text-amber-500"></i> Nhạc lí & Nhạc cụ đã khám phá:
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>5 nốt nhạc:</strong> Đô - Rê - Mi - Son - La</li>
              <li><strong>Ký hiệu bàn tay:</strong> Curwen Hand Signs</li>
              <li><strong>Nhạc cụ gõ:</strong> Thanh phách, Song loan, Triangle, Maracas</li>
              <li><strong>Nhạc cụ dân tộc:</strong> Cây Đàn Bầu Việt Nam</li>
              <li><strong>Thường thức:</strong> Ước mơ bạn Đô, Chú voi con ở Bản Đôn, Hát ru Nam Bộ</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 border border-orange-200/80 dark:border-orange-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-star"></i> Dự án biểu diễn "Ngày hội âm nhạc Mùa hè tuổi thơ"
        </h4>
        <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Tiết mục 1:</strong> Tốp ca biểu diễn liên khúc Mùa xuân - Mùa hè (kết hợp múa phụ họa).</p>
          <p><strong>Tiết mục 2:</strong> Hòa tấu nhạc cụ gõ: Thanh phách, Song loan, Triangle và Maracas đệm cho ca khúc quốc tế Trang trại vui vẻ.</p>
          <p><strong>Tiết mục 3:</strong> Hội thi "Ai nhớ nhanh nốt nhạc": Đọc giai điệu 5 nốt ngũ cung Đô - Rê - Mi - Son - La theo ký hiệu bàn tay.</p>
        </div>
      </div>
    `,
    summary: "Năm học Âm nhạc 2 hoàn thành rực rỡ, trang bị cho học sinh năng lực cảm thụ âm nhạc, kỹ năng hát, đọc nhạc và sử dụng nhạc cụ gõ tự tin, sẵn sàng bước vào chương trình Lớp 3.",
    quizzes: [
      {
        question: "Cả năm học Âm nhạc 2 (Kết nối tri thức), các em đã làm quen với bao nhiêu chủ đề lớn?",
        options: ["8 chủ đề", "4 chủ đề", "10 chủ đề", "12 chủ đề"],
        correct: 0,
        explanation: "Chương trình sách giáo khoa Âm nhạc 2 Kết nối tri thức được thiết kế chuẩn mực thành 8 chủ đề học tập."
      },
      {
        question: "Nhạc cụ nào sau đây là nhạc cụ dân tộc độc đáo chỉ có 1 dây được giới thiệu trong chương trình Lớp 2?",
        options: ["Đàn Bầu", "Đàn Nhị", "Đàn Tranh", "Đàn Guitar"],
        correct: 0,
        explanation: "Cây Đàn Bầu (Độc huyền cầm) với 1 dây duy nhất là niềm tự hào được giới thiệu trong chương trình Lớp 2."
      },
      {
        question: "Hệ thống 5 nốt nhạc ngũ cung mà các em đã làm chủ trong chương trình Lớp 2 là gì?",
        options: [
          "Đô - Rê - Mi - Son - La",
          "Đô - Rê - Mi - Pha - Son",
          "Đô - Mi - Son - Si - Đố",
          "Rê - Pha - La - Đô - Mi"
        ],
        correct: 0,
        explanation: "Các em đã được học trọn vẹn 5 nốt nhạc ngũ cung: Đô, Rê, Mi, Son, La."
      },
      {
        question: "Mục đích lớn nhất của việc tham gia dự án âm nhạc biểu diễn cuối năm là gì?",
        options: [
          "Giúp các em tự tin, gắn kết bạn bè và thể hiện niềm vui âm nhạc",
          "Để xếp hạng thắng thua gay gắt",
          "Để chấm điểm phạt các bạn",
          "Chỉ dành riêng cho một bạn hát hay nhất"
        ],
        correct: 0,
        explanation: "Ngày hội âm nhạc là sân chơi bổ ích giúp tất cả học sinh phát huy niềm say mê, rèn luyện sự tự tin và đoàn kết tập thể."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons;
}
