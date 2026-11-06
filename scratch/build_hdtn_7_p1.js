// Builder script for Hoạt Động Trải Nghiệm, Hướng Nghiệp 7 (HDTN 7)
// Nguồn: SGK Hoạt động trải nghiệm, hướng nghiệp 7 - Kết nối tri thức với cuộc sống (Mã G3HH7Q001a26)
const fs = require('fs');
const path = require('path');

console.log("Generating Hoat Dong Trai Nghiem, Huong Nghiep 7...");

// Topics Data covering 9 topics + Review
const topicsData = [
  // ==================== CHỦ ĐỀ 1 ====================
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
        { title: "LỚP HỌC HẠNH PHÚC", desc: "2 Tiêu chí cốt lõi: YÊU THƯƠNG (chia sẻ, giúp đỡ) & TÔN TRỌNG (lắng nghe, chấp nhận khác biệt)", color: "#059669" },
        { title: "TRUYỀN THỐNG TRƯỜNG", desc: "Lịch sử, thành tích, thiện nguyện, Đội TNTP; đa dạng hình thức giới thiệu", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA CHỦ ĐỀ 1: 5 BƯỚC HỢP TÁC NHÓM & TIÊU CHÍ LỚP HỌC HẠNH PHÚC -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-school"></i> Hình 1: Quy Trình 5 Bước Hợp Tác Nhóm &amp; 2 Trụ Cột Lớp Học Hạnh Phúc
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 5–10</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 190" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="160" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">5 BƯỚC LÀM VIỆC NHÓM HIỆU QUẢ &amp; TIÊU CHÍ LỚP HỌC HẠNH PHÚC</text>

            <g transform="translate(30, 60)">
              <!-- Step 1 -->
              <rect x="0" y="0" width="95" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="47" y="20" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="900">1. THỐNG NHẤT</text>
              <text x="6" y="45" fill="#cbd5e1" font-size="7.5">&bull; Xác định mục tiêu</text>
              <text x="6" y="60" fill="#cbd5e1" font-size="7.5">&bull; Lập kế hoạch chung</text>
              <text x="6" y="75" fill="#cbd5e1" font-size="7.5">&bull; Thống nhất thời hạn</text>

              <!-- Step 2 -->
              <rect x="105" y="0" width="95" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="152" y="20" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="900">2. PHÂN CÔNG</text>
              <text x="111" y="45" fill="#cbd5e1" font-size="7.5">&bull; Rõ người rõ việc</text>
              <text x="111" y="60" fill="#cbd5e1" font-size="7.5">&bull; Hợp với khả năng</text>
              <text x="111" y="75" fill="#cbd5e1" font-size="7.5">&bull; Có mốc thời gian</text>

              <!-- Step 3 -->
              <rect x="210" y="0" width="95" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="257" y="20" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="900">3. LẮNG NGHE</text>
              <text x="216" y="45" fill="#cbd5e1" font-size="7.5">&bull; Tôn trọng ý kiến</text>
              <text x="216" y="60" fill="#cbd5e1" font-size="7.5">&bull; Hỗ trợ thành viên</text>
              <text x="216" y="75" fill="#cbd5e1" font-size="7.5">&bull; Chia sẻ khó khăn</text>

              <!-- Step 4 -->
              <rect x="315" y="0" width="95" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="362" y="20" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="900">4. THÁO GỠ</text>
              <text x="321" y="45" fill="#cbd5e1" font-size="7.5">&bull; Báo thầy cô</text>
              <text x="321" y="60" fill="#cbd5e1" font-size="7.5">&bull; Xin hướng dẫn</text>
              <text x="321" y="75" fill="#cbd5e1" font-size="7.5">&bull; Điều chỉnh kịp thời</text>

              <!-- Step 5 -->
              <rect x="420" y="0" width="95" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="467" y="20" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="900">5. ĐÁNH GIÁ</text>
              <text x="426" y="45" fill="#cbd5e1" font-size="7.5">&bull; Nghiệm thu việc</text>
              <text x="426" y="60" fill="#cbd5e1" font-size="7.5">&bull; Tự đánh giá công tâm</text>
              <text x="426" y="75" fill="#cbd5e1" font-size="7.5">&bull; Rút kinh nghiệm</text>

              <!-- 2 Trụ cột Lớp học hạnh phúc -->
              <rect x="530" y="0" width="230" height="100" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="645" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">2 TRỤ CỘT LỚP HỌC HẠNH PHÚC</text>
              <text x="540" y="45" fill="#fde68a" font-size="8.5" font-weight="800">&bull; YÊU THƯƠNG:</text>
              <text x="540" y="60" fill="#cbd5e1" font-size="7.5">Chia sẻ, giúp bạn tiến bộ, cởi mở chào đón bạn mới.</text>
              <text x="540" y="78" fill="#a7f3d0" font-size="8.5" font-weight="800">&bull; TÔN TRỌNG:</text>
              <text x="540" y="93" fill="#cbd5e1" font-size="7.5">Lắng nghe khác biệt, không cô lập, giải quyết bằng đối thoại.</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Phát triển quan hệ hòa đồng và hợp tác giải quyết vấn đề",
        content: `
          <p><strong>Bản chất của sự hòa đồng:</strong> Được xây dựng trên nền tảng của sự thân thiện, chân thành, cởi mở, tôn trọng và quan tâm lẫn nhau trong cuộc sống học đường hằng ngày. Học sinh chủ động trò chuyện, chia sẻ khó khăn với thầy cô; cùng học tập, cùng vui chơi với bạn bè; chủ động chào hỏi, hỗ trợ và nhiệt tình đón nhận thành viên mới hòa nhập vào tập thể.</p>
          <p class="mt-2 font-bold text-gray-900 dark:text-white">Quy trình 5 bước khi thực hiện nhiệm vụ chung của nhóm/lớp:</p>
          <ol class="list-decimal pl-5 space-y-1 text-xs">
            <li><strong>Thống nhất mục tiêu và lập kế hoạch:</strong> Cùng nhau thảo luận để hiểu rõ yêu cầu, xác định sản phẩm cần đạt và vạch ra lộ trình thực hiện.</li>
            <li><strong>Phân công nhiệm vụ rõ ràng:</strong> Phân chia công việc cụ thể cho từng thành viên dựa trên sở trường, nêu rõ thời hạn hoàn thành (deadline) và người chịu trách nhiệm chính.</li>
            <li><strong>Lắng nghe và tương trợ:</strong> Lắng nghe, tôn trọng ý kiến khác biệt; chủ động hỗ trợ bạn khi bạn gặp trở ngại kĩ thuật hay sức khỏe.</li>
            <li><strong>Chủ động xin hướng dẫn:</strong> Khi có vướng mắc hoặc mâu thuẫn nội bộ không tự giải quyết được, bình tĩnh báo cáo giáo viên để xin chỉ dẫn.</li>
            <li><strong>Điều chỉnh và nghiệm thu:</strong> Cùng rà soát, hoàn thiện sản phẩm và đánh giá công tâm kết quả đóng góp của từng người.</li>
          </ol>
          <div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs mt-2 space-y-1">
            <strong>Kĩ năng ứng xử tình huống nhóm:</strong>
            <p>&bull; <em>Khi thành viên không làm việc:</em> Bình tĩnh trao đổi riêng để tìm hiểu nguyên nhân (do chưa hiểu việc, thiếu phương tiện hay bận việc riêng) rồi hỗ trợ hoặc phân công lại hợp lí.</p>
            <p>&bull; <em>Khi thành viên bị ốm/sự cố:</em> Các bạn còn lại chủ động chia sẻ gánh vác phần việc và báo cáo thầy cô, không chỉ trích.</p>
            <p>&bull; <em>Với bạn học sinh mới:</em> Chủ động bắt chuyện làm quen, mời bạn ngồi cùng nhóm, hướng dẫn nội quy trường lớp với thái độ thân thiện, không gây áp lực.</p>
          </div>
        `
      },
      {
        heading: "2. Xây dựng mô hình 'Lớp học hạnh phúc'",
        content: `
          <p>Hai tiêu chí cốt lõi tạo nên lớp học hạnh phúc theo SGK Kết nối tri thức:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2 text-xs">
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
              <span class="font-bold text-emerald-800 dark:text-emerald-300 block text-sm mb-1"><i class="fa-solid fa-heart text-rose-500 mr-1"></i> TIÊU CHÍ YÊU THƯƠNG</span>
              Quan tâm chia sẻ, động viên bạn bè khi gặp chuyện buồn; kèm cặp giúp đỡ bạn học yếu cùng tiến bộ; không nói xấu sau lưng; luôn mỉm cười và chào hỏi cởi mở.
            </div>
            <div class="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-800">
              <span class="font-bold text-teal-800 dark:text-teal-300 block text-sm mb-1"><i class="fa-solid fa-handshake text-blue-500 mr-1"></i> TIÊU CHÍ TÔN TRỌNG</span>
              Biết lắng nghe ý kiến của tất cả mọi người; tôn trọng sự khác biệt về ngoại hình, giọng nói, hoàn cảnh; giữ đúng lời hứa; giải quyết bất đồng bằng đối thoại hòa bình, tuyệt đối không cô lập hay dùng bạo lực học đường.
            </div>
          </div>
        `
      },
      {
        heading: "3. Tự hào và phát huy truyền thống nhà trường",
        content: `
          <p class="text-xs"><strong>Các nội dung cần tìm hiểu:</strong> Lịch sử thành lập trường; các thế hệ thầy cô giáo tâm huyết; thành tích học sinh giỏi văn hóa, giải thưởng thể dục thể thao, văn nghệ; các phong trào thiện nguyện vì cộng đồng; hoạt động Đội TNTP Hồ Chí Minh và những tấm gương học sinh nghèo vượt khó vươn lên.</p>
          <p class="text-xs mt-1"><strong>Hình thức giới thiệu sáng tạo:</strong> Sản xuất video phóng sự ngắn, làm tập san báo tường, vẽ áp phích/poster, triển lãm ảnh, sáng tác thơ/văn, dàn dựng tiểu phẩm kịch hoặc làm mô hình trường học xanh &ndash; sạch &ndash; đẹp.</p>
          <p class="text-xs mt-1"><strong>Hành động phát huy:</strong> Nỗ lực học tập tốt, rèn luyện chăm ngoan, giữ gìn tài sản chung của trường và xây dựng kế hoạch rèn luyện bản thân mỗi ngày.</p>
        `
      }
    ],
    selfEval: {
      checklist: [
        "Nêu được ít nhất 5 cách cụ thể để phát triển quan hệ hòa đồng với thầy cô và bạn bè.",
        "Thực hiện thành thạo quy trình 5 bước hợp tác làm việc nhóm và giải quyết mâu thuẫn.",
        "Chủ động thực hiện các hành vi yêu thương và tôn trọng để xây dựng Lớp học hạnh phúc.",
        "Giới thiệu được ít nhất 5 nét nổi bật hoặc thành tích đáng tự hào của trường/Đội TNTP.",
        "Tự xây dựng và kiên trì thực hiện kế hoạch rèn luyện phát huy truyền thống nhà trường."
      ]
    },
    quizzes: [
      {
        q: "Hai tiêu chí cốt lõi hàng đầu để xây dựng một 'Lớp học hạnh phúc' theo SGK là gì?",
        opts: ["Yêu thương và Tôn trọng", "Thi đua điểm số và Kỉ luật thép", "Im lặng tuyệt đối và Cạnh tranh cá nhân", "Chỉ chơi với bạn cùng sở thích"],
        ans: 0,
        explain: "Yêu thương (chia sẻ, giúp đỡ) và Tôn trọng (lắng nghe, chấp nhận khác biệt) là 2 giá trị nền tảng tạo nên lớp học hạnh phúc."
      },
      {
        q: "Trong quá trình làm việc nhóm, nếu một thành viên bị ốm đột xuất, nhóm nên xử lí như thế nào là văn minh?",
        opts: ["Thăm hỏi, cùng nhau chia sẻ phần việc của bạn và báo cáo giáo viên", "Loại tên bạn ra khỏi nhóm ngay lập tức", "Để mặc công việc dở dang không làm tiếp", "Yêu cầu bạn ốm vẫn phải hoàn thành đúng hạn"],
        ans: 0,
        explain: "Tinh thần hợp tác đòi hỏi sự cảm thông và tương trợ lẫn nhau khi đồng đội gặp sự cố bất khả kháng."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 2 ====================
  {
    id: "chu-de-2",
    num: "Chủ đề 2",
    title: "Chủ đề 2. Khám phá bản thân",
    pages: "SGK tr. 11–18",
    circuit: "Hướng vào bản thân",
    circuitTag: "BẢN THÂN",
    circuitColor: "bg-purple-600",
    objective: "Nhận diện điểm mạnh, điểm hạn chế trong học tập và cuộc sống; tự đánh giá qua trải nghiệm và lắng nghe phản hồi; lập kế hoạch tự hoàn thiện; nhận biết, kiểm soát và giải tỏa cảm xúc tiêu cực.",
    mindmap: {
      nodes: [
        { title: "ĐIỂM MẠNH & HẠN CHẾ", desc: "4 bước nhận diện: Trải nghiệm &rarr; Tự đánh giá &rarr; Lắng nghe phản hồi &rarr; Đối chiếu", color: "#9333ea" },
        { title: "KẾ HOẠCH HOÀN THIỆN", desc: "Mục tiêu cụ thể &bull; Biện pháp &bull; Thời gian &bull; Kết quả mong đợi", color: "#2563eb" },
        { title: "KIỂM SOÁT CẢM XÚC", desc: "Gọi tên cảm xúc &bull; Hít thở sâu &bull; Thể thao/nghỉ ngơi &bull; Giải quyết nguyên nhân bình tĩnh", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA CHỦ ĐỀ 2: 4 BƯỚC KHÁM PHÁ BẢN THÂN & BÌNH TĨNH KIỂM SOÁT CẢM XÚC -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-purple-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-purple-500/20">
          <span class="text-xs font-bold text-purple-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-user-astronaut"></i> Hình 2: 4 Bước Nhận Diện Bản Thân &amp; Kĩ Thuật Hạ Hỏa Cảm Xúc Tiêu Cực
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 11–18</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 190" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="160" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#581c87"/>
            <text x="410" y="41" text-anchor="middle" fill="#f3e8ff" font-size="11" font-weight="900">4 BƯỚC KHÁM PHÁ ĐIỂM MẠNH/HẠN CHẾ &amp; QUY TRÌNH HẠ HỎA CẢM XÚC</text>

            <g transform="translate(30, 60)">
              <!-- 4 Bước nhận diện -->
              <rect x="0" y="0" width="115" height="100" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
              <text x="57" y="20" text-anchor="middle" fill="#d8b4fe" font-size="9" font-weight="900">1. TRẢI NGHIỆM</text>
              <text x="8" y="45" fill="#cbd5e1" font-size="7.5">&bull; Tham gia học tập</text>
              <text x="8" y="60" fill="#cbd5e1" font-size="7.5">&bull; Hoạt động lao động</text>
              <text x="8" y="75" fill="#cbd5e1" font-size="7.5">&bull; Giao tiếp xã hội</text>

              <rect x="125" y="0" width="115" height="100" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
              <text x="182" y="20" text-anchor="middle" fill="#d8b4fe" font-size="9" font-weight="900">2. TỰ ĐÁNH GIÁ</text>
              <text x="133" y="45" fill="#cbd5e1" font-size="7.5">&bull; Xem lại kết quả</text>
              <text x="133" y="60" fill="#cbd5e1" font-size="7.5">&bull; Nhận diện cảm xúc</text>
              <text x="133" y="75" fill="#cbd5e1" font-size="7.5">&bull; Thói quen bản thân</text>

              <rect x="250" y="0" width="115" height="100" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
              <text x="307" y="20" text-anchor="middle" fill="#d8b4fe" font-size="9" font-weight="900">3. LẮNG NGHE</text>
              <text x="258" y="45" fill="#cbd5e1" font-size="7.5">&bull; Nhận xét của bạn bè</text>
              <text x="258" y="60" fill="#cbd5e1" font-size="7.5">&bull; Góp ý từ thầy cô</text>
              <text x="258" y="75" fill="#cbd5e1" font-size="7.5">&bull; Nhận xét từ cha mẹ</text>

              <rect x="375" y="0" width="115" height="100" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
              <text x="432" y="20" text-anchor="middle" fill="#d8b4fe" font-size="9" font-weight="900">4. ĐỐI CHIẾU</text>
              <text x="383" y="45" fill="#cbd5e1" font-size="7.5">&bull; So sánh các góc nhìn</text>
              <text x="383" y="60" fill="#cbd5e1" font-size="7.5">&bull; Xác định điểm mạnh</text>
              <text x="383" y="75" fill="#cbd5e1" font-size="7.5">&bull; Nhận diện hạn chế</text>

              <!-- Kĩ thuật kiểm soát cảm xúc -->
              <rect x="505" y="0" width="255" height="100" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="632" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">KĨ THUẬT GIẢI TỎA CẢM XÚC TIÊU CỰC</text>
              <text x="515" y="42" fill="#fde68a" font-size="8">&bull; Bước 1: DỪNG LẠI &bull; Gọi tên cảm xúc (giận, buồn, sợ)</text>
              <text x="515" y="58" fill="#cbd5e1" font-size="8">&bull; Bước 2: Hít sâu thở chậm trong 3 &ndash; 5 nhịp thở</text>
              <text x="515" y="74" fill="#cbd5e1" font-size="8">&bull; Bước 3: Đi dạo, uống nước mát hoặc chơi thể thao</text>
              <text x="515" y="90" fill="#a7f3d0" font-size="8">&bull; Bước 4: Khi đã bình tĩnh &rarr; Trực tiếp đối thoại giải quyết</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Nhận diện điểm mạnh và điểm hạn chế của bản thân",
        content: `
          <p><strong>Khái niệm:</strong> <em>Điểm mạnh</em> là những phẩm chất, thói quen tốt hoặc năng lực nổi trội hỗ trợ tích cực cho việc học tập và sinh hoạt (ví dụ: trung thực, cẩn thận, biết lắng nghe, kiên trì). <em>Điểm hạn chế</em> là những thói quen xấu, điểm yếu cần rèn luyện khắc phục (ví dụ: hay đi học muộn, chưa ngăn nắp góc học tập, nhút nhát chưa dám phát biểu).</p>
          <p class="mt-2 font-bold text-gray-900 dark:text-white">Quy trình 4 bước nhận diện khoa học:</p>
          <ol class="list-decimal pl-5 space-y-1 text-xs">
            <li>Tích cực tham gia các hoạt động học tập, lao động, câu lạc bộ và giao lưu tập thể để bộc lộ rõ khả năng và tính cách.</li>
            <li>Tự nhìn nhận, đánh giá lại kết quả công việc, phản ứng cảm xúc và hành vi ứng xử của chính mình.</li>
            <li>Chân thành lắng nghe nhận xét, góp ý từ thầy cô, bạn bè thân thiết và người thân trong gia đình.</li>
            <li>So sánh, đối chiếu giữa ý kiến của người khác với nhận định của bản thân; bình tĩnh suy ngẫm để đúc kết danh sách điểm mạnh và điểm cần cải thiện.</li>
          </ol>
          <p class="text-xs text-purple-700 dark:text-purple-300 italic mt-1.5">Nguyên tắc tiếp nhận phản hồi: Bình tĩnh lắng nghe, không vội vàng nổi nóng phủ nhận hay tự ti mặc cảm; cân nhắc các ví dụ cụ thể để hoàn thiện mình.</p>
        `
      },
      {
        heading: "2. Xây dựng kế hoạch tự hoàn thiện bản thân",
        content: `
          <p class="text-xs">Để khắc phục điểm hạn chế, cần lập bảng kế hoạch hành động cụ thể:</p>
          <div class="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs space-y-1 mt-1">
            <p><strong>Cấu trúc kế hoạch:</strong> Điểm hạn chế cần khắc phục &rarr; Mục tiêu cụ thể &rarr; Biện pháp hành động &rarr; Thời gian thực hiện &rarr; Người hỗ trợ &rarr; Kết quả mong đợi.</p>
            <p>&bull; <em>Ví dụ 1: Đi học muộn</em> &rarr; Mục tiêu: Đến trường trước giờ vào lớp 15 phút &rarr; Biện pháp: Soạn sách vở và ủi đồng phục từ tối hôm trước, đi ngủ lúc 22h, đặt 2 lần báo thức sáng &rarr; Nhờ mẹ nhắc nhở.</p>
            <p>&bull; <em>Ví dụ 2: Nhút nhát khi thuyết trình</em> &rarr; Biện pháp: Luyện tập nói trước gương mỗi ngày 10 phút, xung phong phát biểu ít nhất 1 lần trong mỗi tiết học.</p>
          </div>
        `
      },
      {
        heading: "3. Kĩ năng nhận diện và kiểm soát cảm xúc tiêu cực",
        content: `
          <p class="text-xs">Cảm xúc tiêu cực (tức giận, ghen tị, buồn bã, lo âu, thất vọng) là phản ứng tâm lí tự nhiên. Tuy nhiên nếu bộc phát thiếu kiểm soát (quát mắng, đập phá đồ đạc, nói lời xúc phạm, đăng bài kích động lên mạng xã hội) sẽ làm tổn thương các mối quan hệ và chính bản thân.</p>
          <ul class="list-disc pl-5 space-y-1 text-xs mt-1">
            <li><strong>Nhận diện &amp; Gọi tên:</strong> Tự nói với bản thân "Mình đang rất tức giận/buồn bã" để kéo lí trí quay trở lại.</li>
            <li><strong>Hạ hỏa an toàn:</strong> Thực hiện kĩ thuật hít thở sâu (hít vào bằng mũi phình bụng, thở ra từ từ bằng miệng); uống một cốc nước mát; rời khỏi không gian căng thẳng để đi dạo; nghe nhạc nhẹ hoặc chơi thể thao để giải phóng năng lượng ức chế.</li>
            <li><strong>Đối thoại trực tiếp:</strong> Khi đã hoàn toàn bình tĩnh, gặp riêng đối phương để nói rõ cảm xúc của mình và cùng thảo luận giải pháp tháo gỡ hiểu lầm, tôn trọng ranh giới của nhau.</li>
          </ul>
        `
      }
    ],
    selfEval: {
      checklist: [
        "Chỉ ra được ít nhất 5 điểm mạnh và 5 điểm hạn chế của bản thân trong học tập/cuộc sống.",
        "Biết lắng nghe góp ý từ người khác với thái độ bình tĩnh, cầu thị.",
        "Lập và kiên trì thực hiện kế hoạch tự hoàn thiện một điểm hạn chế cụ thể.",
        "Biết gọi tên cảm xúc và thực hành thành thạo kĩ thuật hít thở sâu để giải tỏa cơn nóng giận.",
        "Không dùng bạo lực, xúc phạm hay đập phá khi đối diện với tình huống gây bực bội."
      ]
    },
    quizzes: [
      {
        q: "Khi nhận được lời góp ý từ bạn bè về một điểm hạn chế của mình, thái độ ứng xử đúng đắn là gì?",
        opts: ["Bình tĩnh lắng nghe, suy nghĩ đối chiếu để tự hoàn thiện mình", "Nổi giận và cãi lại ngay lập tức", "Cắt đứt quan hệ bạn bè", "Đăng bài lên mạng để nói xấu lại bạn"],
        ans: 0,
        explain: "Thái độ bình tĩnh lắng nghe và tự đối chiếu giúp chúng ta nhận ra điểm khiếm khuyết để tiến bộ hơn mỗi ngày."
      },
      {
        q: "Biện pháp giải tỏa cảm xúc tức giận nào sau đây là AN TOÀN và lành mạnh?",
        opts: ["Dừng lại, hít thở sâu, uống nước mát hoặc chơi thể thao", "Hét to vào mặt bạn bè xung quanh", "Đập vỡ bàn ghế hoặc đồ đạc", "Giữ ấm ức trong lòng và không nói chuyện với ai"],
        ans: 0,
        explain: "Hít thở sâu, vận động thể thao giúp cơ thể hạ hormone căng thẳng và lấy lại sự bình tĩnh sáng suốt."
      }
    ]
  }
];

console.log("Topics part 1 ready. Length:", topicsData.length);
