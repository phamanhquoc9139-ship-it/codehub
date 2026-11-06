// hdtn9_data.js - Dữ liệu cốt lõi chuẩn 100% theo Mục Lục SGK Hoạt động trải nghiệm, hướng nghiệp 9 (Kết nối tri thức)

const topicsData = [
  // CHỦ ĐỀ 1 (Trang 4)
  {
    id: 'topic-cd1',
    topicNumber: 1,
    title: 'Chủ đề 1: EM VỚI NHÀ TRƯỜNG',
    page: 'Trang 4',
    badge: 'Trang 4 - 10',
    icon: 'fa-school',
    diagramKey: 'soDoNhaTruong',
    objectives: [
      'Biết tôn trọng sự khác biệt của bạn bè, thầy cô; sống hài hòa trong môi trường học đường.',
      'Hiểu rõ các hình thức bắt nạt và lập kế hoạch truyền thông phòng chống bắt nạt học đường.',
      'Sưu tầm, thiết kế sản phẩm xây dựng truyền thống nhà trường và lập kế hoạch lao động công ích an toàn.'
    ],
    lessons: [
      {
        id: 'hdtn-cd1-hd1',
        lessonTitle: '1. TÔN TRỌNG SỰ KHÁC BIỆT VÀ SỐNG HÀI HOÀ VỚI CÁC BẠN, THẦY CÔ',
        page: 'Trang 5',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div class="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40">
              <strong class="text-indigo-900 dark:text-indigo-300 font-bold block mb-1">
                <i class="fa-solid fa-compass mr-1.5 text-indigo-600"></i> Khám phá – Kết nối (Trang 5):
              </strong>
              Mỗi cá nhân trong tập thể đều có cá tính, sở thích, suy nghĩ, ngoại hình và phong cách riêng. Sống hài hòa là nghệ thuật chấp nhận sự đa dạng, không phán xét và biết hợp tác chân thành.
            </div>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-list-check text-emerald-500"></i> Các biểu hiện cần hình thành:
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Khiêm tốn, kiểm soát cảm xúc:</strong> Không kiêu căng, ngạo mạn khi đạt thành tích; lắng nghe chân thành.</li>
              <li><strong>Chấp nhận sự khác biệt:</strong> Tôn trọng sở thích, cách tư duy, phong cách ăn mặc và cá tính riêng của bạn bè.</li>
              <li><strong>Hợp tác với thầy cô:</strong> Lắng nghe nhận xét, góp ý; hợp tác tích cực thực hiện nhiệm vụ; chấp nhận sự khác nhau trong phong cách dạy của từng thầy cô.</li>
              <li><strong>Chia sẻ năng lượng tích cực:</strong> Sẵn lòng hỗ trợ khi bạn gặp trở ngại; lan tỏa tình đoàn kết trong lớp.</li>
              <li><strong>Nguyên tắc vàng:</strong> Tuyệt đối không so sánh, chế giễu, chỉ trích hay phán xét điểm khác biệt của người khác.</li>
            </ul>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-bolt text-amber-500"></i> Thực hành &amp; Vận dụng:
            </h5>
            <p>Xử lí tình huống bất đồng về sở thích hoặc phương pháp học nhóm; rèn luyện kĩ năng lắng nghe và đối thoại điềm tĩnh.</p>
          </div>
        `
      },
      {
        id: 'hdtn-cd1-hd2',
        lessonTitle: '2. PHÒNG CHỐNG BẮT NẠT HỌC ĐƯỜNG',
        page: 'Trang 6',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-shield-halved text-red-500"></i> Nội dung truyền thông (Trang 6 - 7):
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Các hình thức bắt nạt:</strong> Thể xác (đánh, xô đẩy), lời nói (chế nhạo, miệt thị), quan hệ (cô lập, tẩy chay) và qua mạng (cyberbullying).</li>
              <li><strong>Tác động tiêu cực:</strong> Làm tổn thương tâm lí sâu sắc, suy giảm kết quả học tập và tạo bầu không khí bất an cho tập thể.</li>
              <li><strong>Biện pháp phòng ngừa:</strong> Xây dựng thông điệp không bắt nạt, không cổ vũ, không làm ngơ; tìm kiếm hỗ trợ từ giáo viên và đường dây 111.</li>
            </ul>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project text-blue-500"></i> Quy trình 6 bước lập kế hoạch hoạt động:
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Chọn hình thức:</strong> Diễn đàn lớp, tiểu phẩm, thi vẽ tranh, làm video hoặc cẩm nang.</li>
              <li><strong>Xác định mục tiêu:</strong> Đối tượng, thời gian, địa điểm, nội dung thông điệp chính.</li>
              <li><strong>Phân công:</strong> Người dẫn chương trình (MC), chuẩn bị tài liệu, đạo cụ, phần thưởng.</li>
              <li><strong>Dự kiến kịch bản:</strong> Khai mạc, hoạt động tương tác chính, đúc kết bài học.</li>
              <li><strong>Tiêu chí đánh giá:</strong> Nội dung đầy đủ, sáng tạo, thông điệp rõ ràng, mức độ tham gia tích cực.</li>
              <li><strong>Thực hiện &amp; Đánh giá:</strong> Tổ chức diễn đàn, ghi nhận cam kết hành động thực tế.</li>
            </ol>
          </div>
        `
      },
      {
        id: 'hdtn-cd1-hd3',
        lessonTitle: '3. XÂY DỰNG TRUYỀN THỐNG NHÀ TRƯỜNG VÀ LẬP KẾ HOẠCH LAO ĐỘNG CÔNG ÍCH',
        page: 'Trang 8',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-award text-purple-500"></i> Xây dựng truyền thống nhà trường (Trang 8):
            </h5>
            <p>Sưu tầm hình ảnh, kỷ vật các thế hệ thầy trò; làm video clip ngắn tri ân thành tích nhà trường; xây dựng góc xanh, tủ sách truyền thống.</p>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-broom text-emerald-500"></i> Lập kế hoạch lao động công ích (Trang 9 - 10):
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Chọn việc cụ thể:</strong> Làm sạch sân trường, chăm sóc bồn hoa, vệ sinh phòng truyền thống.</li>
              <li><strong>Chuẩn bị &amp; Phân công:</strong> Dụng cụ an toàn, bảo hộ lao động, phân công nhóm trưởng nghiệm thu.</li>
              <li><strong>Thực hiện:</strong> Tuân thủ an toàn, phát huy tinh thần tự giác, đoàn kết và hoàn thành đúng tiến độ.</li>
            </ul>

            <div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs">
              <strong>Minh chứng:</strong> Kế hoạch phòng chống bắt nạt; bảng phân công lao động công ích; sản phẩm xây dựng truyền thống trường lớp.
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Hành vi nào sau đây thể hiện sự tôn trọng sự khác biệt của bạn bè trong trường học?',
        options: [
          'Chế giễu sở thích âm nhạc khác biệt của một bạn trong lớp',
          'Lắng nghe, chấp nhận sự khác biệt về tính cách và phong cách của bạn mà không phán xét',
          'Cô lập bạn ra khỏi nhóm vì bạn có hoàn cảnh gia đình khó khăn',
          'Yêu cầu bạn phải thay đổi quan điểm cho giống hệt với mình'
        ],
        correct: 1,
        explain: 'Tôn trọng sự khác biệt là biết lắng nghe, chấp nhận suy nghĩ, sở thích và phong cách khác biệt mà không phán xét hay chế giễu (Chủ đề 1 - Trang 5).'
      },
      {
        q: 'Khi xây dựng kế hoạch phòng chống bắt nạt học đường, thứ tự hợp lí của các bước là gì?',
        options: [
          'Phân công việc -> Đánh giá -> Chọn hình thức -> Thực hiện',
          'Chọn hình thức -> Xác định mục tiêu -> Phân công -> Dự kiến kịch bản -> Tiêu chí đánh giá -> Thực hiện',
          'Đánh giá -> Mua quà -> Viết kịch bản -> Tổ chức',
          'Thực hiện ngay -> Phân công -> Báo cáo kết quả'
        ],
        correct: 1,
        explain: 'Quy trình chuẩn 6 bước: Chọn hình thức -> Xác định mục tiêu -> Phân công -> Dự kiến chương trình -> Nêu tiêu chí -> Thực hiện và đánh giá (Chủ đề 1 - Trang 6).'
      },
      {
        q: 'Sản phẩm nào sau đây phù hợp để góp phần xây dựng truyền thống nhà trường?',
        options: [
          'Bộ tranh ảnh, tư liệu về các thế hệ thầy cô và cựu học sinh tiêu biểu',
          'Tờ rơi quảng cáo các sản phẩm điện thoại di động thông minh',
          'Bộ bài kiểm tra bị điểm kém của học sinh trong tháng',
          'Các hình ảnh vui chơi cá nhân ngoài trường không liên quan hoạt động học tập'
        ],
        correct: 0,
        explain: 'Sản phẩm truyền thống trường gồm tranh ảnh, tư liệu, phim ngắn tri ân các thế hệ học sinh và thành tích nổi bật của trường (Chủ đề 1 - Trang 8).'
      },
      {
        q: 'Khi phát hiện một bạn cùng lớp đang bị nhóm học sinh khác đe dọa hoặc cô lập, hành động đúng nhất là gì?',
        options: [
          'Đứng xem và quay video để đăng lên mạng xã hội câu lượt tương tác',
          'Làm ngơ coi như không phải việc của mình để tránh bị liên lụy',
          'Kịp thời báo cáo cho thầy cô giáo, phụ huynh hoặc ban giám hiệu để có biện pháp can thiệp an toàn',
          'Tự một mình xông vào đánh nhau với nhóm bạn đó'
        ],
        correct: 2,
        explain: 'Thông điệp phòng chống bắt nạt: không làm ngơ, không cổ vũ, kịp thời báo người lớn và chuyên gia hỗ trợ để bảo đảm an toàn (Chủ đề 1 - Trang 7).'
      }
    ]
  },

  // CHỦ ĐỀ 2 (Trang 11)
  {
    id: 'topic-cd2',
    topicNumber: 2,
    title: 'Chủ đề 2: KHÁM PHÁ BẢN THÂN',
    page: 'Trang 11',
    badge: 'Trang 11 - 15',
    icon: 'fa-id-card-clip',
    diagramKey: 'soDoKhamPhaBanThan',
    objectives: [
      'Nhận diện các điểm tích cực và điểm chưa tích cực trong hành vi giao tiếp, ứng xử của bản thân.',
      'Khám phá và rèn luyện năng lực thích nghi của bản thân với những thay đổi trong học tập và đời sống.',
      'Lập kế hoạch tự điều chỉnh thói quen giao tiếp để hoàn thiện bản thân.'
    ],
    lessons: [
      {
        id: 'hdtn-cd2-hd1',
        lessonTitle: '1. NHẬN DIỆN ĐIỂM TÍCH CỰC VÀ CHƯA TÍCH CỰC TRONG HÀNH VI GIAO TIẾP, ỨNG XỬ CỦA BẢN THÂN',
        page: 'Trang 12',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <strong class="text-emerald-900 dark:text-emerald-300 font-bold block mb-1">
                  <i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Hành vi tích cực (+):
                </strong>
                <ul class="list-disc pl-4 space-y-0.5 text-xs">
                  <li>Lắng nghe chăm chú khi người khác đang nói.</li>
                  <li>Tuân thủ nghiêm quy tắc nơi công cộng.</li>
                  <li>Giúp đỡ người khó khăn, người cao tuổi, em nhỏ.</li>
                  <li>Biết nói lời cảm ơn, xin lỗi, kiểm soát lời nói.</li>
                </ul>
              </div>

              <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                <strong class="text-rose-900 dark:text-rose-300 font-bold block mb-1">
                  <i class="fa-solid fa-triangle-exclamation text-rose-500 mr-1"></i> Hành vi chưa tích cực (-):
                </strong>
                <ul class="list-disc pl-4 space-y-0.5 text-xs">
                  <li>Ngắt lời người khác mà không xin phép.</li>
                  <li>Dùng lời nói, cử chỉ làm tổn thương bạn bè.</li>
                  <li>Chen lấn, xô đẩy, cười đùa mất trật tự.</li>
                  <li>Thờ ơ, không cảm ơn người hỗ trợ mình.</li>
                </ul>
              </div>
            </div>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2">Cách tự khám phá bản thân:</h5>
            <p>Xem xét lại các tình huống ứng xử hằng ngày; tự đánh giá mức độ biểu hiện; nhận ra điểm mạnh để phát huy và vạch ra giải pháp khắc phục điểm yếu.</p>
          </div>
        `
      },
      {
        id: 'hdtn-cd2-hd2',
        lessonTitle: '2. KHÁM PHÁ KHẢ NĂNG THÍCH NGHI CỦA BẢN THÂN',
        page: 'Trang 13',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Thay đổi có thể liên quan đến nơi ở, quan hệ gia đình, lớp học, thầy cô hoặc cấp học mới. Thích nghi là có những điều chỉnh phù hợp với hoàn cảnh, môi trường mới.</p>

            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-arrows-rotate text-sky-500"></i> 5 Biểu hiện thích nghi của bản thân:
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Chấp nhận sự thay đổi:</strong> Nhận diện cảm xúc của mình một cách tỉnh táo.</li>
              <li><strong>Dự đoán tình huống:</strong> Lường trước các khó khăn có thể phát sinh.</li>
              <li><strong>Chủ động tìm hiểu:</strong> Học hỏi điều mới, cách ứng xử và phương pháp học mới.</li>
              <li><strong>Sẵn sàng điều chỉnh:</strong> Từ bỏ thói quen cũ không còn phù hợp.</li>
              <li><strong>Chủ động kết nối:</strong> Làm quen bạn mới, nhờ trợ giúp và nhận nhiệm vụ vừa sức.</li>
            </ol>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Hành vi giao tiếp nào sau đây là hành vi tích cực cần phát huy?',
        options: [
          'Chen lấn khi xếp hàng mua vé xe buýt để không bị muộn học',
          'Biết nói lời cảm ơn chân thành khi được bạn bè giúp đỡ giải bài tập',
          'Nói to chen ngang lời phát biểu của bạn trong giờ thảo luận',
          'Lảng tránh không xin lỗi khi lỡ làm đổ nước vào sách của bạn'
        ],
        correct: 1,
        explain: 'Hành vi tích cực bao gồm lắng nghe, tuân thủ quy tắc nơi công cộng và biết nói lời cảm ơn, xin lỗi chân thành (Chủ đề 2 - Trang 12).'
      },
      {
        q: 'Khả năng thích nghi của một học sinh lớp 9 thể hiện rõ nhất qua hành động nào?',
        options: [
          'Chán nản, không chịu học khi gặp giáo viên bộ môn có cách dạy khác năm ngoái',
          'Chủ động tìm hiểu phương pháp dạy mới của thầy cô và linh hoạt điều chỉnh cách ôn tập',
          'Bảo lưu quan điểm cũ và từ chối tham gia các hoạt động tập thể mới của trường',
          'Yêu cầu nhà trường phải xếp thời khóa biểu theo đúng sở thích cá nhân mình'
        ],
        correct: 1,
        explain: 'Thích nghi là chấp nhận sự thay đổi, chủ động tìm hiểu cách làm mới và linh hoạt điều chỉnh bản thân để đạt hiệu quả cao (Chủ đề 2 - Trang 13).'
      },
      {
        q: 'Khi nhận ra bản thân có thói quen chưa tích cực là hay ngắt lời người khác, cách khắc phục đúng là gì?',
        options: [
          'Tự nhủ đó là tính cách tự nhiên của mình nên không cần thay đổi',
          'Luyện tập kiên nhẫn lắng nghe hết câu, ghi chú ý kiến ra giấy và xin phép trước khi phát biểu',
          'Không bao giờ tham gia phát biểu thảo luận nhóm nữa',
          'Chỉ lắng nghe người lớn tuổi, còn bạn bè thì vẫn thoải mái ngắt lời'
        ],
        correct: 1,
        explain: 'Khắc phục điểm chưa tích cực đòi hỏi sự tự ý thức, luyện tập thói quen lắng nghe kiên nhẫn và xin phép lịch sự trước khi bày tỏ quan điểm (Chủ đề 2 - Trang 12).'
      },
      {
        q: 'Điều gì sau đây KHÔNG PHẢI là dấu hiệu của người có khả năng thích ứng tốt?',
        options: [
          'Lường trước được những thử thách khi chuẩn bị thi vào lớp 10',
          'Sẵn sàng làm quen với bạn bè mới khi chuyển trường',
          'Luôn lo lắng sợ hãi và từ chối mọi nhiệm vụ mới được phân công',
          'Chủ động tìm kiếm sự giúp đỡ từ thầy cô khi gặp bài học khó'
        ],
        correct: 2,
        explain: 'Luôn lo lắng sợ hãi và từ chối nhiệm vụ là biểu hiện của sự né tránh, thụ động, trái ngược với tinh thần thích ứng linh hoạt (Chủ đề 2 - Trang 13).'
      }
    ]
  },

  // CHỦ ĐỀ 3 (Trang 16)
  {
    id: 'topic-cd3',
    topicNumber: 3,
    title: 'Chủ đề 3: TRÁCH NHIỆM VỚI BẢN THÂN',
    page: 'Trang 16',
    badge: 'Trang 16 - 21',
    icon: 'fa-user-check',
    diagramKey: 'soDoTrachNhiemUngPho',
    objectives: [
      'Thực hiện có trách nhiệm với các nhiệm vụ được giao ở trường, gia đình và cộng đồng.',
      'Nắm vững tiến trình ứng phó với căng thẳng và áp lực học tập cuối cấp THCS.',
      'Xây dựng thời gian biểu cân bằng giữa học tập, rèn luyện thể chất và nghỉ ngơi.'
    ],
    lessons: [
      {
        id: 'hdtn-cd3-hd1',
        lessonTitle: '1. TRÁCH NHIỆM VỚI NHIỆM VỤ ĐƯỢC GIAO',
        page: 'Trang 17',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Nhiệm vụ có thể ở trường/lớp (làm báo tường, nhóm trưởng), trong gia đình (việc nhà) hoặc cộng đồng (tuyên truyền, thiện nguyện).</p>

            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-list-ol text-emerald-500"></i> Cách thực hiện có trách nhiệm (Trang 17 - 18):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Hiểu rõ nhiệm vụ:</strong> Nắm chắc mục tiêu, yêu cầu và trách nhiệm của mình.</li>
              <li><strong>Lập kế hoạch:</strong> Xác định việc cần làm, thời hạn và nguồn lực cần chuẩn bị.</li>
              <li><strong>Cam kết thực hiện:</strong> Dự kiến khó khăn và chuẩn bị sẵn phương án khắc phục.</li>
              <li><strong>Phân công &amp; Đôn đốc:</strong> Nếu làm nhóm, phân công cụ thể, hỗ trợ thành viên kịp thời.</li>
              <li><strong>Theo dõi tiến độ:</strong> Tự kiểm tra chất lượng, chủ động điều chỉnh khi phát sinh vấn đề.</li>
              <li><strong>Kiên trì hoàn thành:</strong> Báo cáo trung thực kết quả và rút kinh nghiệm.</li>
            </ol>
          </div>
        `
      },
      {
        id: 'hdtn-cd3-hd2',
        lessonTitle: '2. ỨNG PHÓ VỚI CĂNG THẲNG VÀ ÁP LỰC',
        page: 'Trang 20',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Căng thẳng xuất hiện khi yêu cầu/tình huống vượt quá khả năng chịu đựng ở thời điểm đó; áp lực có thể đến từ thi cử chuyển cấp, quan hệ bạn bè hoặc kì vọng gia đình.</p>

            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-heart-pulse text-red-500"></i> Tiến trình 6 bước ứng phó (Trang 20 - 21):
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>1. Nhận biết:</strong> Xác định tình huống, dấu hiệu cơ thể và nguyên nhân gây căng thẳng.</li>
              <li><strong>2. Phân định:</strong> Xác định điều gì nằm trong khả năng giải quyết trước mắt của mình.</li>
              <li><strong>3. Lập kế hoạch:</strong> Chia nhỏ việc, chọn phương pháp học tập và làm việc khoa học.</li>
              <li><strong>4. Cân bằng:</strong> Nghỉ ngơi hợp lí, thư giãn bằng hít thở sâu, nghe nhạc, vận động thể thao.</li>
              <li><strong>5. Chia sẻ:</strong> Tâm sự với cha mẹ, bạn bè tin cậy hoặc thầy cô giáo tư vấn tâm lí.</li>
              <li><strong>6. Tìm trợ giúp:</strong> Với bắt nạt hay đe dọa qua mạng, lưu lại bằng chứng và báo người lớn ngay.</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Để hoàn thành một nhiệm vụ được giao với tinh thần trách nhiệm cao nhất, điều đầu tiên cần làm là gì?',
        options: [
          'Bắt tay vào làm ngay mà không cần đọc kĩ yêu cầu',
          'Hiểu rõ mục tiêu, yêu cầu chất lượng và thời hạn cần hoàn thành',
          'Chờ đến sát hạn nộp mới làm để có thêm cảm hứng',
          'Giao lại toàn bộ nhiệm vụ cho bạn khác làm hộ'
        ],
        correct: 1,
        explain: 'Bước đầu tiên để có trách nhiệm là phải hiểu rõ nhiệm vụ, tiêu chuẩn chất lượng và kì hạn bàn giao (Chủ đề 3 - Trang 17).'
      },
      {
        q: 'Khi cảm thấy quá tải và căng thẳng trước kì thi tuyển sinh vào 10, biện pháp nào sau đây là KHÔNG NÊN LÀM?',
        options: [
          'Chia nhỏ thời gian ôn tập và dành thời gian nghỉ ngơi, tập thể dục nhẹ nhàng',
          'Tâm sự với cha mẹ hoặc thầy cô về những khó khăn mình đang gặp phải',
          'Thức thâu đêm nhiều ngày liền, lạm dụng cà phê đặc và tự cô lập bản thân',
          'Thực hành các bài tập hít thở sâu và thư giãn thả lỏng cơ thể'
        ],
        correct: 2,
        explain: 'Thức thâu đêm và lạm dụng chất kích thích gây suy nhược thần kinh trầm trọng, làm căng thẳng gia tăng chứ không giải tỏa được áp lực (Chủ đề 3 - Trang 20).'
      },
      {
        q: 'Khi một thành viên trong nhóm làm việc chung gặp khó khăn và không hoàn thành phần việc đúng hạn, nhóm trưởng nên ứng xử thế nào?',
        options: [
          'Lập tức đuổi thành viên đó ra khỏi nhóm và báo cáo hạ hạnh kiểm bạn',
          'Tìm hiểu lí do, hỗ trợ bạn tháo gỡ khó khăn và điều chỉnh lại tiến độ chung',
          'Đăng bài lên mạng xã hội để chỉ trích bạn cho hả giận',
          'Bỏ mặc dự án và tuyên bố không chịu trách nhiệm nữa'
        ],
        correct: 1,
        explain: 'Trách nhiệm làm việc nhóm đòi hỏi sự đồng cảm, tương trợ và cùng tìm giải pháp khắc phục vấn đề thay vì công kích cá nhân (Chủ đề 3 - Trang 18).'
      },
      {
        q: 'Nếu bị đe dọa hoặc bôi nhọ danh dự trên không gian mạng, hành động tự bảo vệ đúng đắn nhất là gì?',
        options: [
          'Một mình nhắn tin chửi bới trả đũa lại đối tượng đe dọa',
          'Lưu lại hình ảnh chụp màn hình bằng chứng và báo cáo ngay cho cha mẹ, thầy cô hỗ trợ',
          'Tuyệt đối giấu kín không cho ai biết và tự chịu đựng đau khổ',
          'Nghỉ học và khóa mọi tài khoản mạng xã hội vĩnh viễn'
        ],
        correct: 1,
        explain: 'Khi bị bắt nạt trên mạng, cần bình tĩnh lưu lại bằng chứng và nhờ sự can thiệp của người lớn có trách nhiệm (Chủ đề 3 - Trang 21).'
      }
    ]
  },

  // CHỦ ĐỀ 4 (Trang 22)
  {
    id: 'topic-cd4',
    topicNumber: 4,
    title: 'Chủ đề 4: RÈN LUYỆN BẢN THÂN',
    page: 'Trang 22',
    badge: 'Trang 22 - 26',
    icon: 'fa-dumbbell',
    diagramKey: 'soDoNganSachCaNhan',
    objectives: [
      'Biết cách tự tạo động lực nội sinh để vượt khó và duy trì niềm say mê học tập.',
      'Xây dựng và thực hiện được bản ngân sách cá nhân hợp lí (Thu – Chi – Tiết kiệm – Cho/tặng).',
      'Rèn luyện đức tính kỉ luật, tự chủ tài chính và kiên định với mục tiêu.'
    ],
    lessons: [
      {
        id: 'hdtn-cd4-hd1',
        lessonTitle: '1. TẠO ĐỘNG LỰC CHO BẢN THÂN',
        page: 'Trang 23',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Động lực</strong> là yếu tố thúc đẩy hành động để đáp ứng mong muốn, khơi dậy nguồn năng lượng tích cực bên trong mỗi người.</p>

            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-fire text-amber-500"></i> Cách tạo động lực được sách gợi ý (Trang 23):
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Hiểu ý nghĩa, giá trị:</strong> Thấy rõ việc học mang lại tương lai tươi sáng cho mình và gia đình.</li>
              <li><strong>Tìm điểm thú vị:</strong> Khám phá niềm vui sáng tạo trong từng bài tập hay công việc.</li>
              <li><strong>Chia nhỏ nhiệm vụ:</strong> Chia việc lớn thành các bước nhỏ vừa sức để hoàn thành từng bước.</li>
              <li><strong>Tự động viên:</strong> Suy nghĩ tích cực, ghi nhận từng tiến bộ nhỏ của chính mình.</li>
              <li><strong>Môi trường tích cực:</strong> Tham gia nhóm, câu lạc bộ cùng sở thích; tìm sự ủng hộ từ bạn bè.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'hdtn-cd4-hd2',
        lessonTitle: '2. XÂY DỰNG NGÂN SÁCH CÁ NHÂN HỢP LÍ',
        page: 'Trang 24',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Ngân sách cá nhân giúp dự kiến và cân đối <strong>thu – chi – tiết kiệm – cho/tặng</strong>.</p>

            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-coins text-emerald-500"></i> Các bước lập ngân sách cá nhân (Trang 24 - 25):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>1. Liệt kê nguồn thu:</strong> Tiền tiêu vặt, lì xì, tiền thưởng học tập.</li>
              <li><strong>2. Dự kiến chi thiết yếu:</strong> Ăn sáng, tài liệu học tập, xe buýt đến trường (~50%).</li>
              <li><strong>3. Dự kiến chi sở thích &amp; cho tặng:</strong> Sách truyện, quà sinh nhật bạn, từ thiện (~25-30%).</li>
              <li><strong>4. Dự kiến tiết kiệm:</strong> Bỏ heo đất tích lũy (~15-20%).</li>
              <li><strong>5. Cân đối &amp; Định kì xem lại:</strong> Đảm bảo Tổng thu &ge; Tổng chi; điều chỉnh kịp thời.</li>
            </ol>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Đâu là cách tạo động lực học tập xuất phát từ nội sinh bền vững nhất?',
        options: [
          'Chỉ học khi được bố mẹ thưởng tiền mặt hoặc quà đắt tiền',
          'Hiểu rõ ý nghĩa của tri thức đối với ước mơ tương lai và ghi nhận tiến bộ của bản thân',
          'Học để chứng tỏ bản thân vượt trội hơn bạn bè trong lớp',
          'Học đối phó để thầy cô giáo không ghi sổ đầu bài'
        ],
        correct: 1,
        explain: 'Động lực nội sinh xuất phát từ nhận thức sâu sắc về giá trị việc mình làm, niềm vui tiến bộ và ước mơ tương lai (Chủ đề 4 - Trang 23).'
      },
      {
        q: 'Khoản chi nào sau đây thuộc nhóm "Chi thiết yếu" trong ngân sách của học sinh lớp 9?',
        options: [
          'Nạp tiền mua thẻ game trực tuyến cùng bạn',
          'Mua trà sữa và đồ ăn vặt ngoài cổng trường mỗi buổi chiều',
          'Bữa ăn sáng đủ chất dinh dưỡng và tiền mua sách vở, dụng cụ học tập',
          'Mua sắm giày dép thời trang theo trào lưu trên mạng'
        ],
        correct: 2,
        explain: 'Chi thiết yếu là các khoản bắt buộc phục vụ duy trì sức khỏe và nhiệm vụ học tập cơ bản (Chủ đề 4 - Trang 24).'
      },
      {
        q: 'Nếu tổng thu nhập dự kiến của bạn là 400.000 đ/tháng, theo nguyên tắc cân đối tài chính, khoản chi tiêu hợp lí là:',
        options: [
          'Tổng chi và tiết kiệm bằng đúng 400.000 đ (trong đó có khoản tiết kiệm dự phòng)',
          'Chi tiêu hết 600.000 đ và vay nợ bạn bè để bù vào',
          'Dành toàn bộ 400.000 đ mua đồ chơi và nhịn ăn sáng',
          'Không bao giờ chi tiêu đồng nào dù là mua sách vở'
        ],
        correct: 0,
        explain: 'Ngân sách hợp lí phải đảm bảo Tổng chi + tiết kiệm không vượt quá Tổng thu, đồng thời đảm bảo đủ nhu cầu thiết yếu và có tích lũy (Chủ đề 4 - Trang 25).'
      },
      {
        q: 'Ý nghĩa của việc trích một phần tiền tiêu vặt cho mục đích "Cho/tặng" hoặc "Từ thiện" là gì?',
        options: [
          'Để được vinh danh trước toàn trường',
          'Để khoe khoang sự giàu có với bạn bè',
          'Nuôi dưỡng lòng nhân ái, sẻ chia khó khăn và gắn kết trách nhiệm với cộng đồng',
          'Để ép buộc người nhận phải đền đáp lại mình gấp đôi'
        ],
        correct: 2,
        explain: 'Khoản cho/tặng giúp học sinh nuôi dưỡng lòng trắc ẩn, sự đồng cảm và tinh thần tương thân tương ái với mọi người (Chủ đề 4 - Trang 24).'
      }
    ]
  },

  // CHỦ ĐỀ 5 (Trang 27)
  {
    id: 'topic-cd5',
    topicNumber: 5,
    title: 'Chủ đề 5: EM VỚI GIA ĐÌNH',
    page: 'Trang 27',
    badge: 'Trang 27 - 33',
    icon: 'fa-house-chimney-user',
    diagramKey: 'soDoGiaDinh',
    objectives: [
      'Biết cách tạo bầu không khí vui vẻ, yêu thương và giải quyết bất đồng trong gia đình.',
      'Tổ chức, sắp xếp khoa học công việc gia đình, chủ động chia sẻ việc nhà với cha mẹ.',
      'Đề xuất được các biện pháp phát triển kinh tế gia đình phù hợp với điều kiện thực tế.'
    ],
    lessons: [
      {
        id: 'hdtn-cd5-hd1',
        lessonTitle: '1. TẠO BẦU KHÔNG KHÍ VUI VẺ, YÊU THƯƠNG VÀ GIẢI QUYẾT BẤT ĐỒNG TRONG GIA ĐÌNH',
        page: 'Trang 28',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-heart text-pink-500"></i> Tạo không khí tích cực:
            </h5>
            <p>Nói lời tích cực, quan tâm và chăm sóc; an ủi động viên người thân; tổ chức các bữa cơm ấm cúng, ngày kỉ niệm gia đình gắn kết.</p>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-handshake text-blue-500"></i> Giải quyết bất đồng theo các bước (Trang 28 - 29):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Tìm hiểu nguyên nhân:</strong> Lắng nghe từng người bày tỏ suy nghĩ với thái độ điềm tĩnh.</li>
              <li><strong>Nhận diện cảm xúc:</strong> Thấu hiểu mong muốn thực sự; tránh định kiến hay công kích cá nhân.</li>
              <li><strong>Đề xuất giải pháp:</strong> Cùng thống nhất phương án dung hòa lợi ích đôi bên.</li>
              <li><strong>Thực hiện &amp; Trao đổi lại:</strong> Thực hiện giải pháp và duy trì tình yêu thương gắn kết.</li>
            </ol>
          </div>
        `
      },
      {
        id: 'hdtn-cd5-hd2',
        lessonTitle: '2. TỔ CHỨC, SẮP XẾP KHOA HỌC CÔNG VIỆC GIA ĐÌNH',
        page: 'Trang 30',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <ul class="list-disc pl-5 space-y-1">
              <li>Liệt kê những công việc cần làm hằng ngày và hằng tuần.</li>
              <li>Xếp theo mức độ ưu tiên/thời hạn (việc cấp thiết làm trước).</li>
              <li>Phân bổ thời gian, người làm và nguồn lực hợp lí giữa các thành viên.</li>
              <li>Dùng lịch treo tường, thời gian biểu hoặc phiếu nhắc việc.</li>
              <li>Chủ động điều chỉnh linh hoạt khi có việc phát sinh; duy trì nền nếp.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'hdtn-cd5-hd3',
        lessonTitle: '3. BIỆN PHÁP PHÁT TRIỂN KINH TẾ GIA ĐÌNH',
        page: 'Trang 32',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-chart-line text-emerald-500"></i> Các nhóm biện pháp trong sách (Trang 32 - 33):
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Sản xuất:</strong> Chăn nuôi, trồng rau quả sạch, làm đồ thủ công đan lát mây tre.</li>
              <li><strong>Kinh doanh:</strong> Bán hàng ăn sáng, tạp hóa nhỏ, tiêu thụ nông sản địa phương.</li>
              <li><strong>Dịch vụ:</strong> Cho thuê trang phục, cho thuê sách truyện hoặc dịch vụ sửa chữa phù hợp.</li>
            </ul>
            <p class="mt-2">Quy trình đề xuất: Khảo sát nhu cầu địa phương -> Phân tích điều kiện gia đình -> Đề xuất mô hình khả thi -> Thảo luận cùng cha mẹ.</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Khi cha mẹ muốn con dành toàn bộ thời gian học văn hóa, trong khi bạn lại muốn tham gia câu lạc bộ thể thao trường, cách giải quyết tốt nhất là:',
        options: [
          'Tức giận cãi lại và bỏ học để phản đối sự can thiệp của cha mẹ',
          'Bình tĩnh trình bày lợi ích sức khỏe của thể thao, cam kết giữ vững kết quả học tập và cùng cha mẹ lập thời gian biểu khoa học',
          'Lén lút đi tập thể thao và nói dối là đi học thêm',
          'Tuyệt đối từ bỏ đam mê thể thao và rơi vào trạng thái ấm ức, thụ động'
        ],
        correct: 1,
        explain: 'Giải quyết bất đồng đòi hỏi đối thoại bình tĩnh, lắng nghe kì vọng của cha mẹ, đưa ra giải pháp cân bằng thời gian và cam kết thực hiện nghiêm túc (Chủ đề 5 - Trang 28).'
      },
      {
        q: 'Để sắp xếp công việc gia đình một cách khoa học, bước đầu tiên cần thực hiện là gì?',
        options: [
          'Chờ cha mẹ nhắc nhở rồi mới bắt đầu làm việc',
          'Liệt kê toàn bộ các công việc cần làm và xác định mức độ ưu tiên/thời hạn hoàn thành',
          'Chỉ làm những việc mình thích và để lại những việc nặng cho cha mẹ',
          'Thuê người giúp việc ngoài làm thay toàn bộ công việc nhà'
        ],
        correct: 1,
        explain: 'Sắp xếp việc nhà khoa học bắt đầu bằng việc liệt kê, phân loại và xếp thứ tự ưu tiên các đầu việc để phân bổ thời gian hợp lí (Chủ đề 5 - Trang 30).'
      },
      {
        q: 'Biện pháp nào sau đây thuộc nhóm "Hoạt động dịch vụ" trong phát triển kinh tế gia đình?',
        options: [
          'Nuôi gà thả vườn lấy trứng',
          'Trồng rau mầm hữu cơ trong khay xốp',
          'Mở dịch vụ cho thuê sách truyện và trang phục biểu diễn văn nghệ',
          'Làm bánh mì que để bán vào buổi sáng'
        ],
        correct: 2,
        explain: 'Dịch vụ là cung cấp tiện ích phục vụ nhu cầu người dân như cho thuê trang phục, sách báo, vận chuyển nhỏ (Chủ đề 5 - Trang 32).'
      },
      {
        q: 'Khi đề xuất một ý tưởng kinh tế phụ giúp gia đình, học sinh lớp 9 cần cân nhắc yếu tố nào quan trọng nhất?',
        options: [
          'Ý tưởng đó phải mang lại doanh thu hàng trăm triệu đồng ngay lập tức',
          'Phải phù hợp với điều kiện thực tế (vốn, thời gian, mặt bằng) và không làm ảnh hưởng đến việc học',
          'Chỉ cần theo trào lưu trên mạng mà không cần biết địa phương có nhu cầu hay không',
          'Phải nghỉ học hoàn toàn để tập trung làm kinh tế'
        ],
        correct: 1,
        explain: 'Đề xuất kinh tế phải đảm bảo tính khả thi, an toàn tài chính và ưu tiên nhiệm vụ học tập của học sinh (Chủ đề 5 - Trang 33).'
      }
    ]
  },

  // CHỦ ĐỀ 6 (Trang 34)
  {
    id: 'topic-cd6',
    topicNumber: 6,
    title: 'Chủ đề 6: EM VỚI CỘNG ĐỒNG',
    page: 'Trang 34',
    badge: 'Trang 34 - 40',
    icon: 'fa-users',
    diagramKey: 'soDoCongDongMXH',
    objectives: [
      'Xây dựng và phát triển mạng lưới quan hệ cộng đồng tích cực.',
      'Thực hiện thành thạo quy trình khảo sát thực trạng giao tiếp của học sinh trên mạng xã hội.',
      'Thiết kế và triển khai hoạt động truyền thông trong cộng đồng về những vấn đề học đường.'
    ],
    lessons: [
      {
        id: 'hdtn-cd6-hd1',
        lessonTitle: '1. XÂY DỰNG VÀ PHÁT TRIỂN CỘNG ĐỒNG',
        page: 'Trang 35',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Mạng lưới quan hệ cộng đồng</strong> là tập hợp cá nhân có mục đích chung, kết nối và trao đổi để tạo giá trị cho cộng đồng.</p>

            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-network-wired text-blue-500"></i> Quy trình xây dựng mạng lưới (Trang 35):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Xác định hoạt động và mục đích (ví dụ: ngày hội đọc sách, khuyến học).</li>
              <li>Xác định cá nhân/tổ chức tham gia và vai trò của từng bên.</li>
              <li>Kết nối các thành viên qua các buổi gặp gỡ, nhóm trao đổi thông tin.</li>
              <li>Duy trì sự tham gia, phối hợp chặt chẽ và ghi nhận đóng góp.</li>
            </ol>
          </div>
        `
      },
      {
        id: 'hdtn-cd6-hd2',
        lessonTitle: '2. KHẢO SÁT THỰC TRẠNG GIAO TIẾP CỦA HỌC SINH TRÊN MẠNG XÃ HỘI',
        page: 'Trang 36',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-magnifying-glass-chart text-teal-500"></i> Quy trình 6 bước khảo sát (Trang 36 - 38):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Xác định vấn đề:</strong> Mục đích, đối tượng (học sinh THCS), nội dung cần tìm hiểu.</li>
              <li><strong>Lập kế hoạch:</strong> Thời gian, địa điểm, phương pháp và phân công nhóm.</li>
              <li><strong>Thiết kế công cụ:</strong> Phiếu hỏi, câu hỏi phỏng vấn ẩn danh (thời lượng, ứng xử văn minh).</li>
              <li><strong>Thu thập thông tin:</strong> Tôn trọng người dự, không thu thập tài khoản/mật khẩu riêng tư.</li>
              <li><strong>Xử lí số liệu:</strong> Lập bảng, biểu đồ thống kê tỉ lệ % và rút ra nhận xét.</li>
              <li><strong>Báo cáo &amp; Đề xuất:</strong> Báo cáo trước lớp và kiến nghị giải pháp giao tiếp mạng an toàn.</li>
            </ol>
          </div>
        `
      },
      {
        id: 'hdtn-cd6-hd3',
        lessonTitle: '3. TRUYỀN THÔNG TRONG CỘNG ĐỒNG VỀ NHỮNG VẤN ĐỀ HỌC ĐƯỜNG',
        page: 'Trang 39',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Chọn chủ đề nóng: Giao tiếp có văn hóa ở trường/nơi công cộng, áp lực học tập từ cha mẹ, hoặc phòng chống bạo lực học đường.</p>
            <p>Kế hoạch truyền thông: Chủ đề, thông điệp ngắn gọn, hình thức thể hiện (thuyết trình, video ngắn, áp phích), kịch bản và tiêu chí đánh giá mức độ tiếp cận.</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Mạng lưới quan hệ cộng đồng được hình thành dựa trên yếu tố cốt lõi nào?',
        options: [
          'Sự ép buộc mang tính hành chính của cơ quan quản lí',
          'Sự tự nguyện kết nối của các cá nhân, tổ chức có chung mục đích tạo giá trị xã hội',
          'Mối quan hệ trao đổi mua bán kiếm lời về mặt tài chính',
          'Quan hệ huyết thống gia đình dòng họ độc quyền'
        ],
        correct: 1,
        explain: 'Mạng lưới cộng đồng kết nối các thành viên trên tinh thần tự nguyện, đồng lòng vì mục đích chung tốt đẹp (Chủ đề 6 - Trang 35).'
      },
      {
        q: 'Khi thiết kế phiếu hỏi khảo sát về văn hóa mạng xã hội của học sinh, hành vi nào sau đây vi phạm đạo đức khảo sát?',
        options: [
          'Đặt câu hỏi về các nền tảng mạng xã hội mà học sinh hay sử dụng',
          'Đặt câu hỏi khảo sát ẩn danh về thời lượng online mỗi ngày',
          'Yêu cầu người tham gia khảo sát phải ghi rõ họ tên kèm mật khẩu tài khoản mạng xã hội',
          'Hỏi về thái độ của học sinh khi gặp bình luận xúc phạm trên mạng'
        ],
        correct: 2,
        explain: 'Tuyệt đối bảo vệ quyền riêng tư và bảo mật thông tin cá nhân; không bao giờ thu thập mật khẩu hay dữ liệu nhạy cảm (Chủ đề 6 - Trang 37).'
      },
      {
        q: 'Hành động nào sau đây thể hiện văn hóa ứng xử văn minh trên không gian mạng?',
        options: [
          'Chia sẻ ngay lập tức các bài viết giật gân mà chưa kiểm chứng độ chính xác',
          'Dùng ngôn ngữ lịch thiệp, tôn trọng quan điểm của người khác và báo cáo các tài khoản bắt nạt xấu độc',
          'Sử dụng nick ảo để đi bình luận chê bai ngoại hình của người khác',
          'Tham gia các hội nhóm lập ra để tẩy chay một người bạn trong trường'
        ],
        correct: 1,
        explain: 'Văn hóa số văn minh đòi hỏi ngôn từ chuẩn mực, tôn trọng người khác và tích cực đẩy lùi nội dung xấu độc (Chủ đề 6 - Trang 38).'
      },
      {
        q: 'Tiêu chí quan trọng nhất để đánh giá một buổi truyền thông học đường thành công là gì?',
        options: [
          'Chi phí tổ chức thật tốn kém và quà tặng đắt tiền',
          'Mức độ thu hút người tham gia, sự tương tác tích cực và sự thay đổi nhận thức, hành vi thực tế',
          'Thời gian tổ chức càng kéo dài nhiều tiếng đồng hồ càng tốt',
          'Chỉ cần số lượng người dự đông đúc dù không ai chú ý lắng nghe'
        ],
        correct: 1,
        explain: 'Hiệu quả truyền thông được đo lường bằng sự đón nhận, thấu hiểu thông điệp và cam kết hành động tích cực của người tham dự (Chủ đề 6 - Trang 40).'
      }
    ]
  },

  // CHỦ ĐỀ 7 (Trang 41)
  {
    id: 'topic-cd7',
    topicNumber: 7,
    title: 'Chủ đề 7: EM VỚI THIÊN NHIÊN VÀ MÔI TRƯỜNG',
    page: 'Trang 41',
    badge: 'Trang 41 - 47',
    icon: 'fa-seedling',
    diagramKey: 'soDoMoiTruong',
    objectives: [
      'Thiết kế sản phẩm giới thiệu cảnh quan thiên nhiên và tổ chức sự kiện quảng bá "Việt Nam – Tổ quốc tôi".',
      'Khảo sát nguyên nhân ô nhiễm môi trường tại địa phương theo đúng quy trình an toàn và trách nhiệm.',
      'Lập kế hoạch và tham gia các hoạt động bảo vệ môi trường, giảm thiểu chất thải.'
    ],
    lessons: [
      {
        id: 'hdtn-cd7-hd1',
        lessonTitle: '1. VIỆT NAM – TỔ QUỐC TÔI',
        page: 'Trang 42',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-map-location-dot text-indigo-500"></i> Thiết kế sản phẩm giới thiệu cảnh quan (Trang 42):
            </h5>
            <ul class="list-disc pl-5 space-y-1">
              <li>Chọn địa danh, danh lam thắng cảnh đặc sắc của quê hương đất nước.</li>
              <li>Thu thập thông tin chính xác: tên gọi, vị trí, nét đẹp đặc trưng, giá trị sinh thái.</li>
              <li>Chọn cách thể hiện: bài viết, cẩm nang du lịch mini, tờ rơi, mô hình, video clip.</li>
            </ul>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-bullhorn text-amber-500"></i> Tổ chức sự kiện quảng bá (Trang 43):
            </h5>
            <p>Xác định mục đích, đối tượng khách mời, thời gian, địa điểm; chuẩn bị sản phẩm trưng bày; điều hành chương trình từ đón tiếp, khai mạc, giao lưu đến bế mạc.</p>
          </div>
        `
      },
      {
        id: 'hdtn-cd7-hd2',
        lessonTitle: '2. PHÒNG CHỐNG Ô NHIỄM VÀ BẢO VỆ MÔI TRƯỜNG',
        page: 'Trang 44',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-clipboard-check text-emerald-500"></i> Quy trình 7 bước khảo sát nguyên nhân ô nhiễm (Trang 44 - 46):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Xác định mục đích và loại môi trường khảo sát (không khí, đất, nước, tiếng ồn).</li>
              <li>Mô tả thực trạng và nguồn ô nhiễm (sinh hoạt, sản xuất, chăn nuôi, xây dựng).</li>
              <li>Chọn phương pháp: quan sát hiện trường, phỏng vấn, nghiên cứu tư liệu.</li>
              <li>Thiết kế phiếu quan sát/phỏng vấn; chuẩn bị thiết bị ghi nhận.</li>
              <li>Khảo sát đúng thời gian, an toàn tuyệt đối (đi theo nhóm, không chạm chất độc).</li>
              <li>Tổng hợp thông tin, lập bảng/biểu đồ; tách sự việc quan sát khỏi suy đoán chủ quan.</li>
              <li>Lập kế hoạch tuyên truyền và thực hiện biện pháp bảo vệ môi trường.</li>
            </ol>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Để thiết kế một ấn phẩm quảng bá danh lam thắng cảnh Việt Nam đạt chất lượng cao, yếu tố nào cần chú trọng hàng đầu?',
        options: [
          'Chỉ cần sao chép các bài viết không rõ nguồn gốc trên mạng xã hội',
          'Thông tin phải chuẩn xác về vị trí, nét đẹp đặc trưng, giá trị văn hóa và hình ảnh sắc nét',
          'Sử dụng các hình ảnh phóng đại không đúng với thực tế cảnh quan',
          'Chỉ nêu các địa danh ở nước ngoài mà không nói về Việt Nam'
        ],
        correct: 1,
        explain: 'Sản phẩm quảng bá đòi hỏi thông tin chính xác, khách quan về nét đẹp tự nhiên, giá trị lịch sử và thông điệp tự hào quê hương (Chủ đề 7 - Trang 42).'
      },
      {
        q: 'Khi đi khảo sát thực tế tình trạng ô nhiễm nguồn nước tại một con kênh ở địa phương, điều nào sau đây là CẤM KỊ về an toàn?',
        options: [
          'Đi theo nhóm và có sự cho phép, hướng dẫn của thầy cô giáo/người lớn',
          'Sử dụng điện thoại chụp ảnh lại các vị trí có rác thải ùn ứ',
          'Dùng tay không chạm trực tiếp vào nguồn nước có váng hóa chất hoặc lội xuống kênh ô nhiễm',
          'Hỏi thăm người dân sống xung quanh về thời gian xuất hiện mùi hôi'
        ],
        correct: 2,
        explain: 'Nguyên tắc an toàn khảo sát: tuyệt đối không tiếp xúc trực tiếp chất thải độc hại, không lội xuống vùng nước nguy hiểm (Chủ đề 7 - Trang 46).'
      },
      {
        q: 'Hành động thực tế nào của học sinh lớp 9 góp phần bảo vệ môi trường ngay tại trường học?',
        options: [
          'Tiện tay vứt vỏ hộp sữa và túi nilon xuống hộc bàn lớp học',
          'Phân loại rác vô cơ và hữu cơ đúng thùng chứa, hạn chế dùng chai nhựa một lần',
          'Bẻ cành hoa và dẫm đạp lên thảm cỏ trong khuôn viên trường',
          'Để nước vòi xả chảy tràn trề trong nhà vệ sinh mà không khóa lại'
        ],
        correct: 1,
        explain: 'Bảo vệ môi trường bắt đầu từ việc làm nhỏ: phân loại rác tại nguồn, tiết kiệm nước và giảm thiểu rác thải nhựa dùng một lần (Chủ đề 7 - Trang 47).'
      },
      {
        q: 'Trong phiếu khảo sát thực địa môi trường, việc "tách bạch dữ liệu quan sát khách quan với suy đoán chủ quan" có nghĩa là gì?',
        options: [
          'Ghi nhận chính xác những gì nhìn thấy (nước màu đen, mùi hắc) thay vì vội vàng quy kết thủ phạm khi chưa có xét nghiệm',
          'Tự ý điền các số liệu theo ý thích của mình',
          'Bỏ qua những bằng chứng thực tế và chỉ ghi lại lời đồn đại',
          'Không cần ghi chép gì cả mà chỉ phán đoán bằng cảm tính'
        ],
        correct: 0,
        explain: 'Khảo sát khoa học đòi hỏi ghi nhận hiện tượng khách quan trung thực, tránh quy kết chủ quan thiếu căn cứ khoa học (Chủ đề 7 - Trang 46).'
      }
    ]
  },

  // CHỦ ĐỀ 8 (Trang 48)
  {
    id: 'topic-cd8',
    topicNumber: 8,
    title: 'Chủ đề 8: KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP',
    page: 'Trang 48',
    badge: 'Trang 48 - 52',
    icon: 'fa-briefcase',
    diagramKey: 'soDoKhamPhaNgheNghiep',
    objectives: [
      'Tìm hiểu và phân tích được các thông tin nghề nghiệp em quan tâm.',
      'Nắm vững 6 nhóm thông tin: hoạt động chính, trang bị lao động, yêu cầu phẩm chất/năng lực, nguy hiểm nghề nghiệp và cách rèn luyện.',
      'Tự đối chiếu bản thân với yêu cầu của nghề và lập kế hoạch rèn luyện tương ứng.'
    ],
    lessons: [
      {
        id: 'hdtn-cd8-hd1',
        lessonTitle: 'NGHỀ EM QUAN TÂM',
        page: 'Trang 49',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-list-check text-blue-500"></i> 6 Nhóm thông tin nghề cần tìm hiểu (Trang 49 - 50):
            </h5>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Tên nghề và nơi tìm hiểu:</strong> Tra cứu mạng, sách báo, hỏi người làm nghề, trải nghiệm thực tế.</li>
              <li><strong>Hoạt động đặc trưng:</strong> Các nhiệm vụ và công việc chính yếu hằng ngày.</li>
              <li><strong>Trang thiết bị &amp; Dụng cụ:</strong> Máy móc, công cụ lao động và đồ bảo hộ chuyên dụng.</li>
              <li><strong>Phẩm chất &amp; Năng lực:</strong> Yêu cầu thể lực, đạo đức nghề nghiệp, kĩ năng chuyên môn.</li>
              <li><strong>Nguy hiểm nghề nghiệp &amp; An toàn:</strong> Các rủi ro tai nạn, bệnh nghề nghiệp và quy tắc an toàn.</li>
              <li><strong>Cách rèn luyện:</strong> Rèn luyện phẩm chất và năng lực liên quan ngay từ khi còn học phổ thông.</li>
            </ol>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-fire-extinguisher text-red-500"></i> Ví dụ điển hình trong sách: Nghề Cảnh sát cứu hỏa (Trang 50 - 51)
            </h5>
            <ul class="list-disc pl-5 space-y-0.5 text-xs">
              <li><strong>Công việc:</strong> Khống chế dập lửa, sơ tán cứu người và tài sản, tuyên truyền an toàn PCCC.</li>
              <li><strong>Trang bị:</strong> Xe chữa cháy, máy bơm, bình cứu hỏa, vòi phun, bộ đàm, mặt nạ, thang, đồ bảo hộ chịu nhiệt.</li>
              <li><strong>Yêu cầu:</strong> Bình tĩnh, kiên trì, dũng cảm, trách nhiệm, sức khỏe dẻo dai, phản xạ nhanh, làm việc nhóm.</li>
              <li><strong>Nguy cơ:</strong> Bỏng lửa, ngạt khói độc, sập đổ công trình -> Tuân thủ nghiêm quy trình an toàn.</li>
            </ul>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-user-pen text-emerald-500"></i> Tự đánh giá và rèn luyện (Trang 52):
            </h5>
            <p>Đối chiếu phẩm chất/năng lực của nghề với bản thân; chọn điểm cần rèn; lập việc làm cụ thể (rèn tính kiên trì, rèn thể lực, rèn làm việc nhóm).</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Nhóm thông tin nào sau đây là bắt buộc phải tìm hiểu khi nghiên cứu về một ngành nghề?',
        options: [
          'Chỉ cần tìm hiểu người làm nghề đó có nổi tiếng trên mạng xã hội hay không',
          'Công việc chính, trang thiết bị, yêu cầu phẩm chất/năng lực, nguy cơ nghề nghiệp và an toàn',
          'Chỉ cần tìm hiểu trang phục làm việc có hợp xu hướng thời trang không',
          'Chỉ cần biết địa chỉ văn phòng của công ty có gần nhà mình không'
        ],
        correct: 1,
        explain: 'Tìm hiểu nghề toàn diện đòi hỏi nắm vững công việc đặc trưng, công cụ, yêu cầu năng lực, nguy cơ rủi ro và cách rèn luyện (Chủ đề 8 - Trang 49).'
      },
      {
        q: 'Đối với nghề Cảnh sát Phòng cháy chữa cháy và Cứu nạn cứu hộ, phẩm chất nào sau đây là quan trọng hàng đầu?',
        options: [
          'Lòng dũng cảm, sự bình tĩnh, kỉ luật thép và tinh thần trách nhiệm với nhân dân',
          'Sự nóng vội, thích hành động độc lập bất chấp lệnh chỉ huy',
          'Tâm lí e ngại khói bụi và sợ hãi trước hoàn cảnh nguy hiểm',
          'Thích làm các công việc bàn giấy nhẹ nhàng'
        ],
        correct: 0,
        explain: 'Cảnh sát cứu hỏa đối diện với hiểm nguy tính mạng trong đám cháy nên cần lòng dũng cảm, sự điềm tĩnh và tinh thần kỉ luật cao độ (Chủ đề 8 - Trang 50).'
      },
      {
        q: 'Tại sao khi tìm hiểu nghề, chúng ta cần tìm hiểu kĩ về "Nguy cơ nghề nghiệp và biện pháp an toàn"?',
        options: [
          'Để từ bỏ ngay lập tức không bao giờ dám chọn nghề đó nữa',
          'Để hiểu rõ những rủi ro thực tế, từ đó rèn luyện kĩ năng phòng tránh và tuân thủ quy chuẩn an toàn',
          'Để đòi hỏi mức tiền bồi thường cao từ nhà tuyển dụng',
          'Để dọa dẫm bạn bè không nên thi vào ngành đó'
        ],
        correct: 1,
        explain: 'Hiểu nguy cơ giúp người lao động chủ động trang bị kiến thức bảo hộ, tuân thủ quy trình an toàn và giữ gìn sức khỏe lâu dài (Chủ đề 8 - Trang 51).'
      },
      {
        q: 'Để rèn luyện tính kiên trì – một phẩm chất cần thiết cho hầu hết mọi nghề nghiệp, học sinh lớp 9 nên làm gì?',
        options: [
          'Bỏ dở bài tập khó ngay khi đọc đề bài thấy lạ',
          'Chia nhỏ mục tiêu học tập, kiên trì giải bài tập đến cùng và không nản lòng trước thất bại tạm thời',
          'Chép bài giải trên mạng để hoàn thành nhanh nhất',
          'Chỉ làm những việc dễ dàng không cần nỗ lực'
        ],
        correct: 1,
        explain: 'Tính kiên trì được trui rèn qua thói quen đối mặt thử thách, kiên định với mục tiêu và nỗ lực bền bỉ mỗi ngày (Chủ đề 8 - Trang 52).'
      }
    ]
  },

  // CHỦ ĐỀ 9 (Trang 53)
  {
    id: 'topic-cd9',
    topicNumber: 9,
    title: 'Chủ đề 9: HIỂU BẢN THÂN – CHỌN ĐÚNG NGHỀ',
    page: 'Trang 53',
    badge: 'Trang 53 - 60',
    icon: 'fa-compass',
    diagramKey: 'soDoChonNgheSauTHCS',
    objectives: [
      'Nắm vững hệ thống các cơ sở giáo dục nghề nghiệp của Trung ương và địa phương.',
      'Hiểu rõ các con đường học tập, làm việc sau THCS và biết cách tham vấn ý kiến để ra quyết định.',
      'Lập kế hoạch rèn luyện, phát triển bản thân theo yêu cầu của định hướng nghề nghiệp.'
    ],
    lessons: [
      {
        id: 'hdtn-cd9-hd1',
        lessonTitle: '1. HỆ THỐNG CÁC CƠ SỞ GIÁO DỤC NGHỀ NGHIỆP CỦA TRUNG ƯƠNG VÀ ĐỊA PHƯƠNG',
        page: 'Trang 54',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Hệ thống giáo dục nghề nghiệp đào tạo 3 trình độ: <strong>Sơ cấp, Trung cấp và Cao đẳng</strong> (công lập, tư thục hoặc vốn đầu tư nước ngoài).</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Trường Cao đẳng:</strong> Đào tạo kĩ thuật chuyên sâu, có chương trình 9+ tuyển sinh tốt nghiệp THCS.</li>
              <li><strong>Trường Trung cấp:</strong> Đào tạo kĩ năng nghề nghiệp thực tế, học sinh nhận bằng trung cấp ở tuổi 18.</li>
              <li><strong>Trung tâm GDNN – GDTX:</strong> Đào tạo sơ cấp ngắn hạn kết hợp dạy văn hóa bổ túc tại địa phương.</li>
            </ul>
            <p>Khi tìm hiểu cơ sở cần xem: tên trường, ngành nghề, điều kiện tuyển sinh, thời gian đào tạo, học phí và cơ hội việc làm.</p>
          </div>
        `
      },
      {
        id: 'hdtn-cd9-hd2',
        lessonTitle: '2. RÈN LUYỆN, PHÁT TRIỂN BẢN THÂN THEO YÊU CẦU CỦA ĐỊNH HƯỚNG NGHỀ NGHIỆP',
        page: 'Trang 55',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <h5 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-route text-indigo-500"></i> Các con đường học tập sau THCS &amp; Tham vấn (Trang 55 - 57):
            </h5>
            <p>Cân nhắc 3 hướng đi: Học tiếp THPT, Học nghề (Mô hình 9+) hoặc Tham gia lao động. Tham vấn người thân/thầy cô qua 5 bước: Xác định băn khoăn -> Chọn người tin cậy -> Trình bày rõ ràng -> Lắng nghe ghi nhận -> Tự quyết định.</p>

            <h5 class="font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-address-book text-emerald-500"></i> 4 Trụ cột rèn luyện phát triển bản thân (Trang 58 - 60):
            </h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 rounded-lg bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700">
                <strong>1. Ý chí vượt khó:</strong> Đặt mục tiêu cụ thể, kiên trì khắc phục trở ngại, không nản lòng.
              </div>
              <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700">
                <strong>2. Trách nhiệm:</strong> Lập kế hoạch rõ ràng, tập trung, hoàn thành đúng hạn và chất lượng.
              </div>
              <div class="p-2.5 rounded-lg bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700">
                <strong>3. Giao tiếp – Hợp tác:</strong> Lắng nghe, diễn đạt rõ ràng, cởi mở phối hợp cùng người khác.
              </div>
              <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-slate-800 border border-amber-100 dark:border-slate-700">
                <strong>4. Sức khỏe thể chất &amp; tinh thần:</strong> Sắp xếp học - nghỉ ngơi, tập thể thao và điều chỉnh cảm xúc.
              </div>
            </div>

            <div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs">
              <strong>Tự đánh giá:</strong> Tốt (biểu hiện thường xuyên) – Trung bình (chưa thường xuyên) – Chưa tốt (chưa có biểu hiện) để điều chỉnh kế hoạch tiếp tục rèn luyện.
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'Hệ thống các cơ sở giáo dục nghề nghiệp (GDNN) tại Việt Nam theo luật định KHÔNG bao gồm cơ sở nào sau đây?',
        options: [
          'Trường trung cấp',
          'Trường cao đẳng',
          'Trung tâm giáo dục nghề nghiệp – giáo dục thường xuyên',
          'Trường tiểu học công lập'
        ],
        correct: 3,
        explain: 'Cơ sở GDNN gồm trường cao đẳng, trường trung cấp và trung tâm giáo dục nghề nghiệp; trường tiểu học thuộc bậc giáo dục phổ thông (Chủ đề 9 - Trang 54).'
      },
      {
        q: 'Mô hình học nghề 9+ sau tốt nghiệp THCS mang lại lợi thế thiết thực nào cho học sinh?',
        options: [
          'Vừa học nghề vừa học văn hóa, có bằng trung cấp nghề ở tuổi 18 và có thể liên thông cao đẳng/đại học',
          'Được miễn thi tất cả các kì thi tốt nghiệp mà vẫn có bằng tiến sĩ',
          'Không cần học bất kì kiến thức văn hóa nào',
          'Chỉ dành riêng cho những học sinh bị kỉ luật đuổi học'
        ],
        correct: 0,
        explain: 'Mô hình 9+ kết hợp song song giữa đào tạo nghề và hoàn thành văn hóa phổ thông, giúp học sinh sớm có tay nghề và tự lập tài chính (Chủ đề 9 - Trang 55).'
      },
      {
        q: 'Khi tham vấn ý kiến thầy cô và gia đình về việc chọn trường sau lớp 9, vai trò của học sinh là gì?',
        options: [
          'Phó mặc toàn bộ cho cha mẹ quyết định thay và không cần suy nghĩ',
          'Lắng nghe ý kiến tư vấn, đối chiếu với năng lực, sở thích và tự mình quyết định hướng đi',
          'Gạt bỏ mọi lời khuyên của người lớn và chọn trường theo sự rủ rê của bạn bè',
          'Chỉ chọn trường nào có cơ sở vật chất đẹp nhất mà không quan tâm đến học phí'
        ],
        correct: 1,
        explain: 'Ý kiến tham vấn giúp mở rộng góc nhìn, nhưng người quyết định và chịu trách nhiệm cao nhất về tương lai phải là chính học sinh (Chủ đề 9 - Trang 57).'
      },
      {
        q: 'Trong bản kế hoạch phát triển bản thân, biểu hiện nào sau đây thể hiện "Tinh thần trách nhiệm"?',
        options: [
          'Luôn viện cớ đổ lỗi cho hoàn cảnh khi không nộp bài tập đúng hạn',
          'Lập thời gian biểu rõ ràng, tập trung cao độ và hoàn thành bài tập đúng hạn cam kết',
          'Chỉ hoàn thành nhiệm vụ khi bị cha mẹ hay thầy cô nhắc nhở nghiêm khắc',
          'Làm bài qua loa đại khái chỉ để đối phó'
        ],
        correct: 1,
        explain: 'Tinh thần trách nhiệm thể hiện qua sự tự giác, kế hoạch rõ ràng, tập trung và hoàn thành đúng hạn cam kết chất lượng (Chủ đề 9 - Trang 58).'
      }
    ]
  }
];

module.exports = {
  topicsData
};
