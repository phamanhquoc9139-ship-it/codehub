// Topic 1 to 5 data for HDTN 7
module.exports = [
  // Chủ đề 1
  {
    id: "chu-de-1",
    num: "Chủ đề 1",
    title: "Chủ đề 1. Em với nhà trường",
    pages: "SGK tr. 5–10",
    circuit: "Hướng đến xã hội",
    circuitTag: "XÃ HỘI",
    circuitColor: "bg-blue-600",
    objective: "Phát triển quan hệ hòa đồng với thầy cô, bạn bè; hợp tác để hoàn thành nhiệm vụ và giải quyết vấn đề; tìm hiểu, giới thiệu truyền thống đáng tự hào của nhà trường; góp phần xây dựng lớp học hạnh phúc.",
    mindmap: {
      nodes: [
        { title: "HÒA ĐỒNG & HỢP TÁC", desc: "5 bước làm nhiệm vụ chung; hỗ trợ bạn mới, chia sẻ khi bạn ốm", color: "#2563eb" },
        { title: "LỚP HỌC HẠNH PHÚC", desc: "2 Tiêu chí: YÊU THƯƠNG (chia sẻ, tương trợ) & TÔN TRỌNG (chấp nhận khác biệt)", color: "#059669" },
        { title: "TRUYỀN THỐNG TRƯỜNG", desc: "Lịch sử vẻ vang, thành tích dạy - học, hoạt động Đội TNTP và phong trào thiện nguyện", color: "#d97706" }
      ]
    },
    sections: [
      {
        title: "1. Quan hệ hòa đồng và hợp tác với thầy cô, bạn bè",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Quan hệ hòa đồng được xây dựng bằng sự thân thiện, cởi mở, tôn trọng và quan tâm chân thành lẫn nhau trong môi trường học đường.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1.5 flex items-center gap-2">
                <i class="fa-solid fa-hand-holding-heart text-blue-600"></i> Biểu hiện hòa đồng cụ thể
              </h5>
              <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4">
                <li>Chủ động chào hỏi lễ phép với thầy cô; niềm nở, hòa nhã với bạn bè.</li>
                <li>Sẵn sàng tâm sự, chia sẻ khó khăn trong học tập và sinh hoạt.</li>
                <li>Chủ động giúp đỡ bạn mới chuyển trường làm quen với thầy cô, lớp học.</li>
                <li>Chép bài, giảng lại bài giúp bạn khi bạn không may bị ốm phải nghỉ học.</li>
              </ul>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5 flex items-center gap-2">
                <i class="fa-solid fa-users-gear text-emerald-600"></i> Quy trình 5 bước hợp tác nhóm
              </h5>
              <ol class="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-decimal pl-4">
                <li><strong>Xác định mục tiêu:</strong> Thống nhất kết quả cần đạt và thời hạn.</li>
                <li><strong>Phân công nhiệm vụ:</strong> Phù hợp khả năng và sở trường của từng thành viên.</li>
                <li><strong>Lắng nghe & phản hồi:</strong> Tôn trọng ý kiến khác biệt, thảo luận trên tinh thần xây dựng.</li>
                <li><strong>Tương trợ kịp thời:</strong> Sẵn sàng san sẻ khi bạn cùng nhóm gặp trở ngại.</li>
                <li><strong>Đánh giá & chia sẻ:</strong> Tổng kết bài học và chúc mừng thành công chung.</li>
              </ol>
            </div>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 italic">
            *Lưu ý ứng xử:* Khi xảy ra bất đồng trong nhóm, cần bình tĩnh lắng nghe người khác trình bày hết ý kiến, không ngắt lời, dùng lời nói lịch sự và biểu cảm hòa nhã để cùng tìm tiếng nói chung.
          </p>
        `
      },
      {
        title: "2. Tự hào và gìn giữ truyền thống nhà trường",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Mỗi ngôi trường đều có bề dày lịch sử và truyền thống quý báu được vun đắp qua nhiều thế hệ thầy trò. Học sinh lớp 7 cần chủ động tìm hiểu và lan tỏa những giá trị tốt đẹp đó.
          </p>
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-3">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
              <i class="fa-solid fa-landmark text-amber-600"></i> 4 Kênh khám phá truyền thống trường
            </h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
              <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-amber-100 dark:border-gray-700">
                <strong>1. Phòng truyền thống / Thư viện:</strong> Tra cứu ảnh tư liệu, cờ thi đua, bảng vàng lưu danh các thế hệ thầy cô và học sinh ưu tú.
              </div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-amber-100 dark:border-gray-700">
                <strong>2. Website & Kỷ yếu trường:</strong> Đọc các bài viết lịch sử thành lập trường, các mốc son đổi mới và thành tích thi đua dạy tốt - học tốt.
              </div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-amber-100 dark:border-gray-700">
                <strong>3. Giao lưu nhân chứng:</strong> Phỏng vấn thầy cô giáo cựu giáo chức, các thế hệ cựu học sinh thành đạt về trường xưa.
              </div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-amber-100 dark:border-gray-700">
                <strong>4. Phong trào Đội & Thiện nguyện:</strong> Tìm hiểu các hoạt động đền ơn đáp nghĩa, đôi bạn cùng tiến, phong trào bảo vệ môi trường trường học.
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            <strong>Hình thức giới thiệu:</strong> Tự làm tập san, video clip ngắn, bài thuyết trình kèm infographic, tranh vẽ hoặc bưu thiếp gửi đến các bạn học sinh mới.
          </p>
        `
      },
      {
        title: "3. Xây dựng lớp học hạnh phúc: Yêu thương & Tôn trọng",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Lớp học hạnh phúc là nơi mỗi học sinh đều cảm nhận được sự an toàn, thân thương và được khích lệ phát triển năng lực cá nhân một cách tốt nhất.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-900 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
                <i class="fa-solid fa-heart text-rose-500"></i> Tiêu chí 1: YÊU THƯƠNG
              </h5>
              <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4">
                <li>Biết lắng nghe, thấu hiểu và sẻ chia niềm vui, nỗi buồn cùng các bạn.</li>
                <li>Không bạo lực, không dùng từ ngữ gây tổn thương hay xúc phạm người khác.</li>
                <li>Tổ chức thăm hỏi, động viên bạn bè khi gặp hoàn cảnh ốm đau, hoạn nạn.</li>
                <li>Cùng nhau làm việc thiện, xây dựng tinh thần tương thân tương ái.</li>
              </ul>
            </div>
            <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-2 flex items-center gap-2">
                <i class="fa-solid fa-scale-balanced text-indigo-500"></i> Tiêu chí 2: TÔN TRỌNG
              </h5>
              <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4">
                <li>Tôn trọng sự khác biệt về sở thích, ngoại hình, hoàn cảnh gia đình và học lực.</li>
                <li>Không đặt biệt danh tiêu cực, không trêu chọc ác ý hay cô lập bạn.</li>
                <li>Chấp hành nghiêm nội quy lớp học và nền nếp kỷ cương nhà trường.</li>
                <li>Công bằng, dân chủ trong phân công công việc và bình bầu biểu dương.</li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project"></i> Sơ Đồ Trực Quan: 5 Bước Hợp Tác & 2 Trụ Cột Lớp Học Hạnh Phúc
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">SGK KNTT Tr. 5-10</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 800 240" class="w-full min-w-[700px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- 5 Steps Flow -->
            <rect x="20" y="20" width="130" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="85" y="45" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 1</text>
            <text x="85" y="65" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Mục tiêu chung</text>

            <path d="M 150 55 L 175 55" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow-blue)"/>

            <rect x="175" y="20" width="130" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="240" y="45" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 2</text>
            <text x="240" y="65" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Phân công việc</text>

            <path d="M 305 55 L 330 55" stroke="#60a5fa" stroke-width="2"/>

            <rect x="330" y="20" width="130" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="395" y="45" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 3</text>
            <text x="395" y="65" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Lắng nghe tôn trọng</text>

            <path d="M 460 55 L 485 55" stroke="#60a5fa" stroke-width="2"/>

            <rect x="485" y="20" width="130" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="550" y="45" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 4</text>
            <text x="550" y="65" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Tương trợ chia sẻ</text>

            <path d="M 615 55 L 640 55" stroke="#60a5fa" stroke-width="2"/>

            <rect x="640" y="20" width="140" height="70" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
            <text x="710" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 5</text>
            <text x="710" y="65" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Đánh giá & Tri ân</text>

            <!-- 2 Pillars -->
            <rect x="60" y="125" width="310" height="95" rx="12" fill="#881337" fill-opacity="0.3" stroke="#f43f5e" stroke-width="2"/>
            <circle cx="100" cy="155" r="20" fill="#f43f5e"/>
            <text x="100" y="161" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">❤</text>
            <text x="135" y="152" fill="#fda4af" font-size="13" font-weight="bold">TRỤ CỘT 1: YÊU THƯƠNG</text>
            <text x="135" y="175" fill="#fecdd3" font-size="10.5">Thấu hiểu, quan tâm, giúp đỡ chân thành</text>
            <text x="135" y="195" fill="#fecdd3" font-size="10.5">Không bạo lực ngôn từ & thể xác</text>

            <rect x="430" y="125" width="310" height="95" rx="12" fill="#312e81" fill-opacity="0.3" stroke="#6366f1" stroke-width="2"/>
            <circle cx="470" cy="155" r="20" fill="#6366f1"/>
            <text x="470" y="161" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">⚖</text>
            <text x="505" y="152" fill="#c7d2fe" font-size="13" font-weight="bold">TRỤ CỘT 2: TÔN TRỌNG</text>
            <text x="505" y="175" fill="#e0e7ff" font-size="10.5">Tôn trọng cá tính & hoàn cảnh khác biệt</text>
            <text x="505" y="195" fill="#e0e7ff" font-size="10.5">Lắng nghe ý kiến trái chiều, không cô lập</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Đâu là biểu hiện chuẩn mực của học sinh khi tham gia làm việc nhóm xây dựng lớp học hạnh phúc?",
        options: [
          "Chỉ nhận phần việc đơn giản và để các bạn khá giỏi làm phần khó khăn",
          "Tự ý quyết định mọi công việc mà không cần thông qua ý kiến cả nhóm",
          "Tôn trọng phân công, chủ động hoàn thành việc đúng hạn và hỗ trợ bạn khi cần",
          "Chỉ trích gay gắt khi bạn trong nhóm đưa ra ý tưởng chưa hoàn thiện"
        ],
        answer: 2,
        explain: "Hợp tác hiệu quả đòi hỏi sự chủ động, tôn trọng thỏa thuận chung, hoàn thành trách nhiệm và tương trợ lẫn nhau trên tinh thần cầu thị."
      },
      {
        question: "Hai tiêu chí cốt lõi để kiến tạo 'Lớp học hạnh phúc' theo SGK Hoạt động trải nghiệm 7 là gì?",
        options: [
          "Thành tích cao và Thi đua sôi nổi",
          "Yêu thương và Tôn trọng",
          "Trật tự tuyệt đối và Kỷ luật nghiêm",
          "Tranh biện sôi nổi và Phản biện cá nhân"
        ],
        answer: 1,
        explain: "SGK xác định hai trụ cột nền tảng của Lớp học hạnh phúc là YÊU THƯƠNG (sẻ chia, nâng đỡ) và TÔN TRỌNG (chấp nhận sự khác biệt, bình đẳng)."
      }
    ],
    checklist: [
      "Chủ động chào hỏi, lắng nghe và hòa đồng với thầy cô, bạn bè mới.",
      "Thực hiện đầy đủ 5 bước khi làm việc nhóm và hoàn thành nhiệm vụ được giao.",
      "Có sản phẩm cụ thể (bài viết/tranh vẽ/video) giới thiệu truyền thống trường.",
      "Thực hành ít nhất 2 hành vi thể hiện sự yêu thương và tôn trọng trong lớp học."
    ]
  },

  // Chủ đề 2
  {
    id: "chu-de-2",
    num: "Chủ đề 2",
    title: "Chủ đề 2. Khám phá bản thân",
    pages: "SGK tr. 10–17",
    circuit: "Hướng vào bản thân",
    circuitTag: "BẢN THÂN",
    circuitColor: "bg-purple-600",
    objective: "Nhận diện được điểm mạnh, điểm hạn chế trong học tập và sinh hoạt; lập kế hoạch tự hoàn thiện bản thân; rèn luyện kĩ năng kiểm soát cảm xúc trong các tình huống thực tế.",
    mindmap: {
      nodes: [
        { title: "ĐIỂM MẠNH & HẠN CHẾ", desc: "Tự soi rọi qua 4 lĩnh vực: học tập, kỹ năng, thói quen sinh hoạt, giao tiếp", color: "#9333ea" },
        { title: "KẾ HOẠCH HOÀN THIỆN", desc: "Mục tiêu SMART, việc cụ thể từng ngày, mốc thời gian và người đồng hành", color: "#059669" },
        { title: "KIỂM SOÁT CẢM XÚC", desc: "Quy tắc 4 bước: Nhận diện -> Hít thở sâu -> Tạm rời đi -> Giải tỏa lành mạnh", color: "#dc2626" }
      ]
    },
    sections: [
      {
        title: "1. Nhận diện điểm mạnh và điểm cần hoàn thiện của bản thân",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Để trưởng thành, mỗi học sinh cần dũng cảm nhìn nhận chân thực về chính mình thông qua hai phương pháp: <strong>Tự đánh giá bản thân</strong> và <strong>Lắng nghe góp ý từ người xung quanh</strong> (cha mẹ, thầy cô, bạn bè thân thiết).
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-900 dark:text-purple-300 text-sm mb-1.5 flex items-center gap-2">
                <i class="fa-solid fa-star text-purple-600"></i> Các lĩnh vực nhận diện điểm mạnh
              </h5>
              <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li><strong>Năng lực học tập:</strong> Tư duy toán tốt, ghi nhớ nhanh, thích đọc sách, ngoại ngữ khá...</li>
                <li><strong>Kỹ năng sống:</strong> Giao tiếp tự tin, biết nấu ăn đơn giản, thích nghi nhanh với môi trường mới.</li>
                <li><strong>Năng khiếu cá nhân:</strong> Hội họa, ca hát, chơi cờ vua, chơi thể thao (bóng đá, cầu lông).</li>
                <li><strong>Phẩm chất tốt:</strong> Trung thực, biết quan tâm người khác, có trách nhiệm với lời hứa.</li>
              </ul>
            </div>
            <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-900 dark:text-rose-300 text-sm mb-1.5 flex items-center gap-2">
                <i class="fa-solid fa-triangle-exclamation text-rose-600"></i> Các điểm hạn chế thường gặp
              </h5>
              <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Dễ nổi nóng hoặc rụt rè, thiếu tự tin khi phát biểu trước đám đông.</li>
                <li>Thói quen trì hoãn, để bài tập dồn ứ đến phút chót mới làm.</li>
                <li>Sử dụng điện thoại/mạng xã hội quá nhiều, lơ là giờ giấc ngủ nghỉ.</li>
                <li>Chưa biết cách sắp xếp góc học tập và phòng ngủ ngăn nắp.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Lập và thực hiện kế hoạch tự hoàn thiện bản thân",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Biết điểm yếu là chưa đủ, điều quyết định sự tiến bộ là biến nhận thức thành bản kế hoạch hành động cụ thể với 4 yếu tố trọng tâm:
          </p>
          <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-2 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <div class="flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-purple-600 text-white font-bold text-[11px]">1. Mục tiêu:</span>
              <span>Cụ thể, đo lường được (Ví dụ: "Mỗi tối đọc 15 trang sách và đi ngủ trước 22h30", không nói chung chung "Sẽ học giỏi hơn").</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-purple-600 text-white font-bold text-[11px]">2. Hành động:</span>
              <span>Chia nhỏ công việc thành các bước dễ thực hiện hàng ngày (đặt báo thức, lập thời gian biểu dán bàn học).</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-purple-600 text-white font-bold text-[11px]">3. Thời hạn:</span>
              <span>Định rõ thời gian thực hiện liên tục (21 ngày để hình thành một thói quen tích cực mới).</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-purple-600 text-white font-bold text-[11px]">4. Hỗ trợ:</span>
              <span>Nhờ mẹ nhắc nhở hoặc rủ bạn thân cùng lập cam kết đồng hành giám sát lẫn nhau.</span>
            </div>
          </div>
        `
      },
      {
        title: "3. Kỹ năng kiểm soát cảm xúc tiêu cực",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Ở lứa tuổi dậy thì lớp 7, cảm xúc biến đổi nhanh chóng (dễ tức giận, thất vọng, lo âu). Kỹ năng làm chủ cảm xúc giúp em tránh khỏi những hành vi bộc phát gây hậu quả đáng tiếc.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div class="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <div class="w-8 h-8 mx-auto mb-1.5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">1</div>
              <strong class="text-red-700 dark:text-red-300 block mb-1">Nhận diện</strong>
              <span class="text-gray-600 dark:text-gray-400">Gọi tên cảm xúc: Mình đang giận, đang ghen tị hay đang lo sợ?</span>
            </div>
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <div class="w-8 h-8 mx-auto mb-1.5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">2</div>
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">Hít thở sâu</strong>
              <span class="text-gray-600 dark:text-gray-400">Hít vào 4 giây, giữ 2 giây, thở ra từ từ 6 giây. Đếm thầm từ 1 đến 10.</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div class="w-8 h-8 mx-auto mb-1.5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">Tạm dừng lại</strong>
              <span class="text-gray-600 dark:text-gray-400">Rời khỏi nơi căng thẳng, uống một ngụm nước mát, không nói lời lúc giận.</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <div class="w-8 h-8 mx-auto mb-1.5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">4</div>
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">Giải tỏa tích cực</strong>
              <span class="text-gray-600 dark:text-gray-400">Tập thể thao, viết nhật ký, nghe bản nhạc êm dịu hoặc tâm sự cùng mẹ.</span>
            </div>
          </div>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-purple-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-purple-500/20">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-heart-pulse"></i> Quy Trình 4 Bước Kiểm Soát Cảm Xúc Tiêu Cực
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">KNTT Tr. 10-17</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 180" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="160" height="110" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
            <circle cx="100" cy="55" r="16" fill="#818cf8"/>
            <text x="100" y="60" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1</text>
            <text x="100" y="90" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">NHẬN DIỆN CẢM XÚC</text>
            <text x="100" y="110" fill="#e0e7ff" font-size="10" text-anchor="middle">Gọi đúng tên: Giận / Buồn</text>
            <text x="100" y="125" fill="#a5b4fc" font-size="9" text-anchor="middle">Chấp nhận trạng thái cảm xúc</text>

            <path d="M 180 85 L 210 85" stroke="#818cf8" stroke-width="2"/>

            <rect x="210" y="30" width="160" height="110" rx="12" fill="#311042" stroke="#c084fc" stroke-width="2"/>
            <circle cx="290" cy="55" r="16" fill="#c084fc"/>
            <text x="290" y="60" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2</text>
            <text x="290" y="90" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">HÍT THỞ SÂU 4-2-6</text>
            <text x="290" y="110" fill="#f3e8ff" font-size="10" text-anchor="middle">Hạ nhịp tim, đếm 1 đến 10</text>
            <text x="290" y="125" fill="#d8b4fe" font-size="9" text-anchor="middle">Não bộ lấy lại oxy cân bằng</text>

            <path d="M 370 85 L 400 85" stroke="#c084fc" stroke-width="2"/>

            <rect x="400" y="30" width="160" height="110" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <circle cx="480" cy="55" r="16" fill="#38bdf8"/>
            <text x="480" y="60" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3</text>
            <text x="480" y="90" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">TẠM RỜI KHỎI NƠI ĐÓ</text>
            <text x="480" y="110" fill="#e0f2fe" font-size="10" text-anchor="middle">Uống nước mát, im lặng</text>
            <text x="480" y="125" fill="#7dd3fc" font-size="9" text-anchor="middle">Không ra quyết định bốc đồng</text>

            <path d="M 560 85 L 590 85" stroke="#38bdf8" stroke-width="2"/>

            <rect x="590" y="30" width="150" height="110" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <circle cx="665" cy="55" r="16" fill="#34d399"/>
            <text x="665" y="60" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">4</text>
            <text x="665" y="90" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GIẢI TỎA TÍCH CỰC</text>
            <text x="665" y="110" fill="#d1fae5" font-size="10" text-anchor="middle">Chạy bộ, vẽ tranh, tâm sự</text>
            <text x="665" y="125" fill="#6ee7b7" font-size="9" text-anchor="middle">Chuyển hóa năng lượng tiêu cực</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khi bạn vô tình làm đổ nước lên vở bài tập của em khiến em rất tức giận, phản ứng nào sau đây thể hiện khả năng kiểm soát cảm xúc tốt nhất?",
        options: [
          "Lập tức hất nước lại vào vở của bạn để trả đũa công bằng",
          "Hét lớn và đập bàn để mọi người trong lớp đều nhìn thấy",
          "Dừng lại vài giây hít thở sâu, cùng bạn lấy khăn lau khô và nhẹ nhàng nhắc bạn cẩn thận hơn",
          "Ôm mặt khóc nức nở và tuyệt giao không nói chuyện với bạn nữa"
        ],
        answer: 2,
        explain: "Tạm dừng vài giây hít thở sâu giúp kiểm soát cơn giận bộc phát, xử lý sự cố bình tĩnh và giữ gìn tình bạn."
      },
      {
        question: "Một mục tiêu trong kế hoạch tự hoàn thiện bản thân được xem là rõ ràng và hiệu quả khi nào?",
        options: [
          "Có tính cụ thể, có thời gian thực hiện rõ ràng và đo lường được",
          "Càng rộng lớn, tham vọng và khó đạt càng tốt",
          "Chỉ cần suy nghĩ trong đầu mà không cần ghi chép ra giấy",
          "Chỉ tập trung vào việc che giấu đi các khuyết điểm của bản thân"
        ],
        answer: 0,
        explain: "Mục tiêu hiệu quả phải cụ thể, khả thi, đo lường được kết quả và có mốc thời gian hoàn thành rõ ràng."
      }
    ],
    checklist: [
      "Liệt kê được ít nhất 3 điểm mạnh và 2 điểm còn hạn chế của bản thân.",
      "Xây dựng được 1 bản kế hoạch tự rèn luyện khắc phục thói quen chưa tốt trong 2 tuần.",
      "Áp dụng thành công kĩ thuật hít thở sâu 4-2-6 khi gặp tình huống bực bội.",
      "Lắng nghe chân thành góp ý từ bố mẹ hoặc thầy cô mà không tự ái hay bao biện."
    ]
  },

  // Chủ đề 3
  {
    id: "chu-de-3",
    num: "Chủ đề 3",
    title: "Chủ đề 3. Trách nhiệm với bản thân",
    pages: "SGK tr. 18–24",
    circuit: "Hướng vào bản thân",
    circuitTag: "BẢN THÂN",
    circuitColor: "bg-purple-600",
    objective: "Thể hiện trách nhiệm với bản thân thông qua ý thức tự giác, vượt qua khó khăn trong học tập và cuộc sống; trang bị kĩ năng tự bảo vệ an toàn trước các tình huống rủi ro, nguy hiểm.",
    mindmap: {
      nodes: [
        { title: "VƯỢT QUA KHÓ KHĂN", desc: "Xác định rõ nguyên nhân, tìm kiếm phương án giải quyết và kiên trì rèn luyện", color: "#9333ea" },
        { title: "TỰ BẢO VỆ AN TOÀN", desc: "4 Tình huống: Bạo lực học đường, Xâm hại cơ thể, An toàn mạng, Tai nạn thương tích", color: "#dc2626" },
        { title: "TÌM KIẾM HỖ TRỢ", desc: "Nhận biết người đáng tin cậy: Cha mẹ, thầy cô, tổng đài bảo vệ trẻ em 111", color: "#2563eb" }
      ]
    },
    sections: [
      {
        title: "1. Vượt qua khó khăn trong học tập và sinh hoạt",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Trách nhiệm với bản thân bắt đầu từ việc không buông xuôi, không đổ lỗi cho hoàn cảnh khi gặp trở ngại, mà chủ động tìm giải pháp vượt qua.
          </p>
          <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 mb-3">
            <h5 class="font-bold text-purple-900 dark:text-purple-300 text-sm mb-2 flex items-center gap-2">
              <i class="fa-solid fa-mountain text-purple-600"></i> Quy trình 4 bước vượt khó
            </h5>
            <ol class="text-xs text-gray-700 dark:text-gray-300 space-y-2 list-decimal pl-4">
              <li><strong>Đối diện thực tế:</strong> Không né tránh; chỉ rõ khó khăn là gì (Ví dụ: điểm Tiếng Anh tụt dốc, hay sức khỏe yếu do ít vận động).</li>
              <li><strong>Phân tích nguyên nhân:</strong> Khách quan (bài khó) hay chủ quan (thiếu từ vựng, chưa chăm chỉ, phương pháp học sai)?</li>
              <li><strong>Lập kế hoạch hành động khắc phục:</strong> Tăng thời gian ôn bài 30 phút mỗi ngày, học từ mới theo flashcard, nhờ thầy cô giải đáp khúc mắc.</li>
              <li><strong>Kiên trì và không nản lòng:</strong> Kết quả không đến sau một đêm, đòi hỏi sự bền bỉ qua từng tuần.</li>
            </ol>
          </div>
        `
      },
      {
        title: "2. Kỹ năng tự bảo vệ trong các tình huống nguy hiểm",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Mỗi học sinh cần nâng cao cảnh giác, nắm vững các quy tắc an toàn để tự bảo vệ tính mạng, nhân phẩm và tài sản của mình.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <strong class="text-red-700 dark:text-red-300 block mb-1">
                <i class="fa-solid fa-shield-virus mr-1"></i> Phòng tránh xâm hại thân thể
              </strong>
              <p class="text-gray-700 dark:text-gray-300">
                Ghi nhớ <strong>Quy tắc đồ lót / Bàn tay 5 ngón</strong>: Tuyệt đối không để ai nhìn thấy hoặc chạm vào vùng nhạy cảm; không đi một mình nơi vắng vẻ với người lạ; la lớn "Cứu tôi với!" và chạy đến nơi đông người khi bị đe dọa.
              </p>
            </div>
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">
                <i class="fa-solid fa-user-shield mr-1"></i> Phòng chống bạo lực học đường
              </strong>
              <p class="text-gray-700 dark:text-gray-300">
                Không tham gia khiêu khích, bè phái; khi bị đe dọa hoặc thấy bạn bị bắt nạt, báo ngay cho giáo viên chủ nhiệm, giám thị, bảo vệ hoặc cha mẹ; tuyệt đối không tự mình đi "hẹn đánh nhau".
              </p>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">
                <i class="fa-solid fa-lock mr-1"></i> An toàn không gian mạng
              </strong>
              <p class="text-gray-700 dark:text-gray-300">
                Không chia sẻ mật khẩu tài khoản, số điện thoại, địa chỉ nhà lên mạng xã hội; không bấm vào đường link lạ; không nhận lời gặp mặt riêng ngoài đời với người quen qua mạng.
              </p>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">
                <i class="fa-solid fa-phone-volume mr-1"></i> Các đường dây nóng cứu nạn
              </strong>
              <p class="text-gray-700 dark:text-gray-300">
                <strong>111:</strong> Tổng đài Quốc gia Bảo vệ Trẻ em (miễn cước 24/7).<br>
                <strong>113:</strong> Cảnh sát phản ứng nhanh.<br>
                <strong>114:</strong> Cứu hỏa và cứu nạn cứu hộ.<br>
                <strong>115:</strong> Cấp cứu y tế.
              </p>
            </div>
          </div>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-purple-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-purple-500/20">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-shield-halved"></i> 4 Lá Chắn An Toàn Bảo Vệ Bản Thân
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">KNTT Tr. 18-24</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 170" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <rect width="165" height="130" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
              <circle cx="82" cy="40" r="18" fill="#f43f5e"/>
              <text x="82" y="46" fill="#fff" font-size="16" text-anchor="middle">🛡</text>
              <text x="82" y="75" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">XÂM HẠI THÂN THỂ</text>
              <text x="82" y="95" fill="#fecdd3" font-size="9" text-anchor="middle">Quy tắc đồ lót</text>
              <text x="82" y="110" fill="#fecdd3" font-size="9" text-anchor="middle">Nói "KHÔNG" & bỏ chạy</text>
              <text x="82" y="125" fill="#fecdd3" font-size="9" text-anchor="middle">Kể ngay với bố mẹ</text>
            </g>
            <g transform="translate(210, 20)">
              <rect width="165" height="130" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
              <circle cx="82" cy="40" r="18" fill="#f59e0b"/>
              <text x="82" y="46" fill="#fff" font-size="16" text-anchor="middle">🏫</text>
              <text x="82" y="75" fill="#fcd34d" font-size="11" font-weight="bold" text-anchor="middle">BẠO LỰC HỌC ĐƯỜNG</text>
              <text x="82" y="95" fill="#fef3c7" font-size="9" text-anchor="middle">Không khiêu khích bè phái</text>
              <text x="82" y="110" fill="#fef3c7" font-size="9" text-anchor="middle">Báo thầy cô, giám thị</text>
              <text x="82" y="125" fill="#fef3c7" font-size="9" text-anchor="middle">Không đi một mình góc vắng</text>
            </g>
            <g transform="translate(400, 20)">
              <rect width="165" height="130" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
              <circle cx="82" cy="40" r="18" fill="#38bdf8"/>
              <text x="82" y="46" fill="#fff" font-size="16" text-anchor="middle">💻</text>
              <text x="82" y="75" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">AN TOÀN MẠNG</text>
              <text x="82" y="95" fill="#e0f2fe" font-size="9" text-anchor="middle">Bảo mật mật khẩu riêng</text>
              <text x="82" y="110" fill="#e0f2fe" font-size="9" text-anchor="middle">Không hẹn gặp người lạ</text>
              <text x="82" y="125" fill="#e0f2fe" font-size="9" text-anchor="middle">Không click link độc hại</text>
            </g>
            <g transform="translate(590, 20)">
              <rect width="150" height="130" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
              <circle cx="75" cy="40" r="18" fill="#10b981"/>
              <text x="75" y="46" fill="#fff" font-size="16" text-anchor="middle">📞</text>
              <text x="75" y="75" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">ĐƯỜNG DÂY NÓNG</text>
              <text x="75" y="95" fill="#d1fae5" font-size="11" font-weight="bold" text-anchor="middle">111 (Trẻ em)</text>
              <text x="75" y="110" fill="#d1fae5" font-size="9" text-anchor="middle">113 (Cảnh sát)</text>
              <text x="75" y="125" fill="#d1fae5" font-size="9" text-anchor="middle">115 (Cấp cứu y tế)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Số điện thoại tổng đài quốc gia nào dưới đây chuyên trách tiếp nhận và bảo vệ trẻ em 24/7 hoàn toàn miễn cước?",
        options: ["113", "114", "111", "115"],
        answer: 2,
        explain: "111 là Tổng đài Quốc gia Bảo vệ Trẻ em tại Việt Nam, hoạt động 24/7 và hoàn toàn miễn phí cước gọi."
      },
      {
        question: "Một người quen qua mạng xã hội đề nghị gửi quà và rủ em đến một quán cà phê vắng gặp riêng. Em nên xử lí thế nào?",
        options: [
          "Lén đi một mình đến gặp để nhận quà miễn phí",
          "Rủ thêm em nhỏ đi cùng cho vui",
          "Từ chối dứt khoát và chia sẻ ngay sự việc với cha mẹ hoặc thầy cô",
          "Cho địa chỉ nhà riêng để người đó ship quà tới"
        ],
        answer: 2,
        explain: "Tuyệt đối không gặp mặt riêng người lạ trên mạng; luôn trao đổi với phụ huynh để được hướng dẫn và bảo vệ an toàn."
      }
    ],
    checklist: [
      "Ghi nhớ chính xác số điện thoại khẩn cấp 111, 113, 114, 115.",
      "Thực hiện nghiêm túc quy tắc đồ lót và tự bảo vệ thân thể.",
      "Không bao giờ chia sẻ thông tin cá nhân hay mật khẩu cho người lạ trên mạng.",
      "Có phương án cụ thể để khắc phục một môn học hoặc kỹ năng còn yếu."
    ]
  },

  // Chủ đề 4
  {
    id: "chu-de-4",
    num: "Chủ đề 4",
    title: "Chủ đề 4. Rèn luyện bản thân",
    pages: "SGK tr. 25–31",
    circuit: "Hướng vào bản thân",
    circuitTag: "BẢN THÂN",
    circuitColor: "bg-purple-600",
    objective: "Hình thành và duy trì nếp sống ngăn nắp, gọn gàng, khoa học; rèn luyện đức tính kiên trì và chăm chỉ; biết quản lí chi tiêu cá nhân hợp lí và tiết kiệm.",
    mindmap: {
      nodes: [
        { title: "NẾP SỐNG GỌN GÀNG", desc: "Sắp xếp đồ dùng học tập, phòng ngủ khoa học; lập và tuân thủ thời gian biểu", color: "#9333ea" },
        { title: "KIÊN TRÌ & CHĂM CHỈ", desc: "Vượt qua sự lười biếng, làm việc đến cùng dù gặp khó khăn, không bỏ dở giữa chừng", color: "#d97706" },
        { title: "QUẢN LÍ CHI TIÊU", desc: "Phân biệt Nhu cầu thiết yếu vs Mong muốn; áp dụng quy tắc tiết kiệm cho học sinh", color: "#059669" }
      ]
    },
    sections: [
      {
        title: "1. Nếp sống ngăn nắp, gọn gàng, khoa học",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Nếp sống ngăn nắp giúp em tiết kiệm thời gian tìm kiếm đồ dùng, giữ tinh thần luôn minh mẫn, tăng hiệu suất học tập và rèn luyện tính kỷ luật tự giác.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-900 dark:text-purple-300 text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-broom text-purple-600"></i> Không gian học tập & sinh hoạt
              </h5>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Gấp chăn màn ngay sau khi thức dậy; quần áo treo/xếp gọn đúng ngăn tủ.</li>
                <li>Bàn học chỉ để sách vở môn đang học; phân loại bút, thước vào hộp.</li>
                <li>Soạn sách vở vào cặp đúng thời khóa biểu từ tối hôm trước.</li>
                <li>Lau dọn góc học tập định kỳ vào cuối tuần.</li>
              </ul>
            </div>
            <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-clock text-indigo-600"></i> Quản lí thời gian khoa học
              </h5>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Lập thời gian biểu hàng ngày: Giờ thức dậy, giờ học, thể thao, ngủ.</li>
                <li>Ưu tiên việc quan trọng và khẩn cấp làm trước.</li>
                <li>Áp dụng kỹ thuật Pomodoro: Học tập trung 25 phút, nghỉ giải lao 5 phút.</li>
                <li>Đi ngủ đúng giờ (trước 22h30) để đảm bảo sức khỏe và trí tuệ tỉnh táo.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Rèn luyện tính kiên trì và chăm chỉ",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Thiên tài chỉ có 1% là cảm hứng, 99% còn lại là mồ hôi và sự kiên trì. Kiên trì là năng lực tiếp tục theo đuổi mục tiêu dù gặp muôn vàn khó khăn thử thách.
          </p>
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-3">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5 flex items-center gap-2">
              <i class="fa-solid fa-fire text-amber-600"></i> Biện pháp chiến thắng thói lười biếng
            </h5>
            <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4">
              <li><strong>Quy tắc 5 phút:</strong> Khi ngại làm việc gì (làm toán, dọn phòng), hãy cam kết chỉ làm trong 5 phút. Sau 5 phút, đà quán tính sẽ giúp em làm tiếp đến khi hoàn thành.</li>
              <li><strong>Tách điện thoại ra xa:</strong> Để điện thoại ở phòng khác khi ngồi vào bàn học để không bị xao nhãng bởi thông báo game, tin nhắn mạng xã hội.</li>
              <li><strong>Tự thưởng cho bản thân:</strong> Tự thưởng 15 phút nghe nhạc hoặc chơi đá bóng sau khi giải xong bài tập khó.</li>
            </ul>
          </div>
        `
      },
      {
        title: "3. Quản lí chi tiêu cá nhân hợp lí và tiết kiệm",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Kĩ năng tài chính cá nhân cần được rèn luyện từ sớm. Học sinh cần phân biệt rõ giữa <strong>Nhu cầu thiết yếu</strong> (cần để sống, học tập) và <strong>Mong muốn nhất thời</strong> (sở thích giải trí).
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-center">
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <span class="text-emerald-700 dark:text-emerald-300 font-bold text-base block mb-1">50% THIẾT YẾU</span>
              <p class="text-gray-600 dark:text-gray-400">Ăn sáng, vé xe buýt, dụng cụ học tập (vở, bút), tài liệu bắt buộc.</p>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <span class="text-blue-700 dark:text-blue-300 font-bold text-base block mb-1">30% HỌC TẬP & VUI CHƠI</span>
              <p class="text-gray-600 dark:text-gray-400">Sách tham khảo yêu thích, sinh nhật bạn, đồ chơi lành mạnh.</p>
            </div>
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <span class="text-amber-700 dark:text-amber-300 font-bold text-base block mb-1">20% TIẾT KIỆM</span>
              <p class="text-gray-600 dark:text-gray-400">Bỏ heo đất dự phòng ốm đau, mua món đồ giá trị lớn hoặc giúp bạn nghèo.</p>
            </div>
          </div>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-purple-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-purple-500/20">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-piggy-bank"></i> Mô Hình Quản Lí Chi Tiêu Học Sinh (Quy Tắc 50/30/20)
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">KNTT Tr. 25-31</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 160" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="210" height="100" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <text x="135" y="60" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">50% THIẾT YẾU</text>
            <text x="135" y="85" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Ăn sáng, đồ dùng học tập</text>
            <text x="135" y="105" fill="#a7f3d0" font-size="9.5" text-anchor="middle">Không thể cắt giảm</text>

            <rect x="275" y="30" width="210" height="100" rx="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
            <text x="380" y="60" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">30% MONG MUỐN</text>
            <text x="380" y="85" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Truyện tranh, sinh nhật bạn</text>
            <text x="380" y="105" fill="#93c5fd" font-size="9.5" text-anchor="middle">Cần cân nhắc trước khi mua</text>

            <rect x="520" y="30" width="210" height="100" rx="12" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
            <text x="625" y="60" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">20% TIẾT KIỆM</text>
            <text x="625" y="85" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Heo đất, quỹ khẩn cấp</text>
            <text x="625" y="105" fill="#fde68a" font-size="9.5" text-anchor="middle">Tích lũy cho tương lai</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khoản chi tiêu nào sau đây thuộc nhóm 'Nhu cầu thiết yếu' của học sinh lớp 7?",
        options: [
          "Mua thẻ nạp game online",
          "Mua trà sữa cùng nhóm bạn mỗi ngày",
          "Mua vở ghi và bút mực để phục vụ học tập",
          "Mua đồ chơi mô hình đắt tiền mới ra mắt"
        ],
        answer: 2,
        explain: "Vở ghi và bút viết là dụng cụ học tập thiết yếu, phục vụ trực tiếp việc học, khác với nhu cầu giải trí hay mong muốn nhất thời."
      },
      {
        question: "Hành động nào sau đây giúp rèn luyện đức tính kiên trì hiệu quả nhất khi gặp một bài toán hình học hóc búa?",
        options: [
          "Bỏ cuộc ngay sau 2 phút và mở sách giải chép vào vở",
          "Kiên nhẫn vẽ lại hình, đọc lại định lý liên quan, thử vẽ thêm đường phụ và hỏi thầy cô nếu vẫn chưa ra",
          "Đóng sách lại xem phim hoạt hình cho đỡ nhức đầu",
          "Chờ đến sáng hôm sau đến lớp chép bài của bạn"
        ],
        answer: 1,
        explain: "Kiên trì thể hiện qua việc không buông xuôi, chịu khó suy ngẫm, thử nhiều góc độ giải quyết và tích cực tìm kiếm hướng dẫn từ thầy cô."
      }
    ],
    checklist: [
      "Tự giác gấp chăn màn và dọn bàn học gọn gàng mỗi ngày.",
      "Lập thời gian biểu cá nhân và thực hiện đúng ít nhất 80% kế hoạch trong tuần.",
      "Không bỏ dở giữa chừng bài tập khó hoặc việc nhà được giao.",
      "Ghi chép sổ tay thu - chi cá nhân và duy trì việc bỏ heo đất tiết kiệm."
    ]
  },

  // Chủ đề 5
  {
    id: "chu-de-5",
    num: "Chủ đề 5",
    title: "Chủ đề 5. Em với gia đình",
    pages: "SGK tr. 32–38",
    circuit: "Hướng đến xã hội",
    circuitTag: "XÃ HỘI",
    circuitColor: "bg-blue-600",
    objective: "Thể hiện sự quan tâm, chăm sóc người thân khi bị ốm; chủ động lập kế hoạch và tham gia lao động giúp đỡ gia đình; rèn luyện kĩ năng lắng nghe tích cực trong quan hệ gia đình.",
    mindmap: {
      nodes: [
        { title: "CHĂM SÓC NGƯỜI THÂN", desc: "Hỏi han ân cần, nấu cháo, pha thuốc đúng chỉ dẫn bác sĩ, tạo không gian yên tĩnh", color: "#2563eb" },
        { title: "LAO ĐỘNG GIA ĐÌNH", desc: "Lập danh sách việc nhà phù hợp lứa tuổi, phân bổ thời gian hợp lí, tự giác hoàn thành", color: "#059669" },
        { title: "LẮNG NGHE TÍCH CỰC", desc: "Loại bỏ xao nhãng, kiên nhẫn lắng nghe cha mẹ, chia sẻ quan điểm trên tinh thần tôn trọng", color: "#d97706" }
      ]
    },
    sections: [
      {
        title: "1. Kĩ năng chăm sóc người thân khi bị ốm",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Khi ông bà, cha mẹ hoặc anh chị em trong nhà bị ốm, sự quan tâm chăm sóc chu đáo của em chính là liều thuốc tinh thần vô giá giúp người thân mau hồi phục sức khỏe.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-800 dark:text-blue-300 block mb-1">
                <i class="fa-solid fa-bed-pulse mr-1"></i> Chăm sóc về mặt thể chất
              </strong>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Đo nhiệt độ, chườm ấm trán khi người thân sốt cao.</li>
                <li>Nấu cháo hành/cháo tía tô, bóc cam hoặc pha nước ấm có chanh mật ong.</li>
                <li>Lấy thuốc đúng liều lượng theo đơn hướng dẫn của bác sĩ chuyên khoa.</li>
                <li>Mở cửa sổ cho thoáng khí, dọn dẹp phòng sạch sẽ, tạo không gian yên tĩnh nghỉ ngơi.</li>
              </ul>
            </div>
            <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
              <strong class="text-rose-800 dark:text-rose-300 block mb-1">
                <i class="fa-solid fa-hand-holding-heart mr-1"></i> Nâng đỡ về mặt tinh thần
              </strong>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Hỏi thăm ân cần bằng giọng nói dịu dàng: "Mẹ thấy trong người đỡ mệt chưa ạ?".</li>
                <li>Bóp tay chân, đấm lưng nhẹ nhàng cho ông bà.</li>
                <li>Đọc một mẩu tin vui hoặc câu chuyện hay cho người bệnh nghe.</li>
                <li>Tự giác làm việc nhà và chăm sóc bản thân để bố mẹ yên tâm tĩnh dưỡng.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Lập kế hoạch và tham gia công việc gia đình",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Lao động gia đình là trách nhiệm và niềm vui của mỗi người con. Cần lập kế hoạch công việc rõ ràng để không làm ảnh hưởng đến thời gian học tập.
          </p>
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5">
              <i class="fa-solid fa-list-check text-emerald-600 mr-1"></i> Các việc nhà vừa sức học sinh lớp 7
            </h5>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mt-2">
              <div class="p-2 rounded bg-white dark:bg-gray-800 border">Quét nhà & Lau nhà</div>
              <div class="p-2 rounded bg-white dark:bg-gray-800 border">Rửa bát đũa & Phơi đồ</div>
              <div class="p-2 rounded bg-white dark:bg-gray-800 border">Cắm cơm & Nhặt rau</div>
              <div class="p-2 rounded bg-white dark:bg-gray-800 border">Tưới cây & Cho thú cưng ăn</div>
            </div>
          </div>
        `
      },
      {
        title: "3. Lắng nghe tích cực trong gia đình",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Nhiều bất hòa trong gia đình xuất phát từ việc thiếu lắng nghe. Lắng nghe tích cực là lắng nghe bằng cả tai, mắt và trái tim.
          </p>
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-ear-listen text-amber-600"></i> 4 Nguyên tắc vàng khi trò chuyện cùng cha mẹ
            </h5>
            <ul class="space-y-1 list-disc pl-4">
              <li><strong>Tập trung tuyệt đối:</strong> Đặt điện thoại xuống, không vừa nghe bố mẹ nói vừa nhìn vào màn hình máy tính hay TV.</li>
              <li><strong>Giao tiếp ánh mắt & cử chỉ:</strong> Nhìn thẳng vào mắt cha mẹ, gật đầu nhẹ để thể hiện mình đang hiểu và tiếp thu.</li>
              <li><strong>Không cướp lời:</strong> Hãy để bố mẹ nói hết ý trước khi giải thích; dùng đại từ xưng hô lễ phép.</li>
              <li><strong>Trình bày bình tĩnh:</strong> Nếu quan điểm khác cha mẹ, hãy dùng lời nói nhã nhặn: "Con hiểu mong muốn của mẹ, nhưng con xin phép được chia sẻ thêm suy nghĩ của con...".</li>
            </ul>
          </div>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-house-chimney-heart"></i> Tam Giác Gắn Kết Yêu Thương Gia Đình
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">KNTT Tr. 32-38</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 170" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(40, 25)">
              <rect width="200" height="120" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
              <circle cx="100" cy="40" r="16" fill="#3b82f6"/>
              <text x="100" y="46" fill="#fff" font-size="14" text-anchor="middle">🍵</text>
              <text x="100" y="72" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">CHĂM SÓC NGƯỜI ỐM</text>
              <text x="100" y="92" fill="#cbd5e1" font-size="10" text-anchor="middle">Nấu cháo, lấy thuốc theo đơn</text>
              <text x="100" y="108" fill="#94a3b8" font-size="9" text-anchor="middle">Tạo không gian yên tĩnh</text>
            </g>
            <g transform="translate(280, 25)">
              <rect width="200" height="120" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
              <circle cx="100" cy="40" r="16" fill="#10b981"/>
              <text x="100" y="46" fill="#fff" font-size="14" text-anchor="middle">🧹</text>
              <text x="100" y="72" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">LAO ĐỘNG VỪA SỨC</text>
              <text x="100" y="92" fill="#cbd5e1" font-size="10" text-anchor="middle">Rửa bát, quét nhà, nấu cơm</text>
              <text x="100" y="108" fill="#94a3b8" font-size="9" text-anchor="middle">San sẻ trách nhiệm với cha mẹ</text>
            </g>
            <g transform="translate(520, 25)">
              <rect width="200" height="120" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
              <circle cx="100" cy="40" r="16" fill="#f59e0b"/>
              <text x="100" y="46" fill="#fff" font-size="14" text-anchor="middle">👂</text>
              <text x="100" y="72" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">LẮNG NGHE TÍCH CỰC</text>
              <text x="100" y="92" fill="#cbd5e1" font-size="10" text-anchor="middle">Tập trung, không cướp lời</text>
              <text x="100" y="108" fill="#94a3b8" font-size="9" text-anchor="middle">Thấu hiểu và sẻ chia cảm xúc</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khi người thân trong gia đình bị sốt cao, việc làm nào sau đây của em là ĐÚNG ĐẮN và an toàn?",
        options: [
          "Tự ý ra hiệu thuốc mua thuốc kháng sinh mạnh về bắt người thân uống ngay",
          "Chườm nước đá lạnh ngắt lên người để hạ nhiệt nhanh",
          "Báo người lớn đưa đi khám, chườm khăn ấm, cho uống nhiều nước ấm và uống thuốc đúng đơn bác sĩ",
          "Đóng chặt kín mít mọi cửa sổ phòng và bắt đắp thật nhiều chăn dày"
        ],
        answer: 2,
        explain: "Chườm ấm giúp giãn mạch hạ nhiệt an toàn, bù nước ấm và tuân thủ hướng dẫn bác sĩ chuyên khoa là quy trình chăm sóc chuẩn y tế."
      },
      {
        question: "Biểu hiện nào sau đây chứng tỏ em đang thực hành lắng nghe tích cực khi cha mẹ góp ý?",
        options: [
          "Vừa đeo tai nghe nhạc vừa gật đầu cho qua chuyện",
          "Nhìn thẳng vào mắt cha mẹ, im lặng lắng nghe hết câu rồi mới giải thích lễ phép",
          "Cãi lại ngay lập tức khi cha mẹ vừa nhắc đến khuyết điểm của mình",
          "Bỏ vào phòng riêng đóng sập cửa lại"
        ],
        answer: 1,
        explain: "Lắng nghe tích cực đòi hỏi sự tập trung, giao tiếp ánh mắt, tôn trọng người nói và phản hồi bình tĩnh, lễ độ."
      }
    ],
    checklist: [
      "Biết cách pha nước chanh ấm hoặc nấu cháo dinh dưỡng chăm sóc người thân bị ốm.",
      "Tự giác thực hiện ít nhất 2 việc nhà mỗi ngày mà không cần bố mẹ nhắc nhở.",
      "Không sử dụng điện thoại khi đang trò chuyện hoặc ăn cơm cùng gia đình.",
      "Chủ động hỏi han, tâm sự với ông bà, cha mẹ về những niềm vui trong ngày."
    ]
  }
];
