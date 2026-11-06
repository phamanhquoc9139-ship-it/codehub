// Dữ liệu môn Hoạt Động Trải Nghiệm, Hướng Nghiệp 8 - Kết nối tri thức với cuộc sống
// Gồm 9 Chủ đề, 19 bài học chi tiết, 19 hình SVG minh họa từng bài và 19 câu trắc nghiệm thực hành

const topicsData = [
  { id: 1, title: "Chủ đề 1. Em với nhà trường", desc: "Xây dựng tình bạn, phòng tránh bắt nạt học đường và phát huy truyền thống nhà trường", color: "pink", icon: "fa-school" },
  { id: 2, title: "Chủ đề 2. Khám phá bản thân", desc: "Nhận diện nét tính cách, điều chỉnh cảm xúc tích cực và rèn luyện kĩ năng tranh biện, thuyết phục", color: "rose", icon: "fa-user-astronaut" },
  { id: 3, title: "Chủ đề 3. Trách nhiệm với bản thân", desc: "Sống có trách nhiệm, giữ gìn cam kết và kĩ năng từ chối an toàn, dứt khoát", color: "purple", icon: "fa-shield-heart" },
  { id: 4, title: "Chủ đề 4. Rèn luyện bản thân", desc: "Người tiêu dùng thông thái, lập kế hoạch kinh doanh nhỏ và rèn luyện sự tự chủ", color: "amber", icon: "fa-cart-shopping" },
  { id: 5, title: "Chủ đề 5. Em với gia đình", desc: "Ứng xử tôn trọng, thuyết phục người thân và chia sẻ công việc, tiết kiệm trong gia đình", color: "emerald", icon: "fa-house-chimney-user" },
  { id: 6, title: "Chủ đề 6. Em với cộng đồng", desc: "Hoạt động giáo dục truyền thống, phát triển cộng đồng và kế hoạch thiện nguyện nhân ái", color: "teal", icon: "fa-hands-holding-heart" },
  { id: 7, title: "Chủ đề 7. Em với thiên nhiên và môi trường", desc: "Bảo tồn cảnh quan thiên nhiên quê hương và truyền thông phòng giảm nhẹ rủi ro thiên tai", color: "cyan", icon: "fa-leaf" },
  { id: 8, title: "Chủ đề 8. Khám phá thế giới nghề nghiệp", desc: "Tìm hiểu nhóm nghề phổ biến trong xã hội hiện đại, yêu cầu năng lực và thách thức nghề", color: "blue", icon: "fa-briefcase" },
  { id: 9, title: "Chủ đề 9. Hiểu bản thân – chọn đúng nghề", desc: "Khám phá hứng thú nghề nghiệp, lập kế hoạch rèn luyện và học tập theo định hướng nghề", color: "indigo", icon: "fa-compass" }
];

const lessonsData = [
  // ==================== CHỦ ĐỀ 1: EM VỚI NHÀ TRƯỜNG ====================
  {
    topicId: 1,
    id: "hdtn-1-1",
    num: "1",
    title: "Xây dựng và giữ gìn tình bạn",
    desc: "Nuôi dưỡng tình bạn chân thành, tin cậy, tôn trọng, biết lắng nghe, chia sẻ và giúp nhau cùng tiến bộ.",
    keyPoints: [
      "Tình bạn bền vững được xây dựng trên sự chân thành, tin cậy, tôn trọng, lắng nghe, giữ lời hứa và cùng giúp nhau tiến bộ.",
      "Chủ động làm quen, quan tâm và tham gia các hoạt động tập thể; chia sẻ niềm vui, nỗi buồn vừa phải; không chế giễu, ép buộc bạn bè.",
      "Khi có bất đồng: Giữ bình tĩnh, lắng nghe bạn nói, nêu rõ cảm xúc và sự việc cụ thể, cùng tìm giải pháp công bằng; sẵn sàng xin lỗi và sửa sai.",
      "Giữ tình bạn lành mạnh không đồng nghĩa với việc bao che hành vi sai trái; dũng cảm tìm sự hỗ trợ của thầy cô, cha mẹ khi cần thiết."
    ],
    skills: [
      "1. Chủ động mỉm cười và chào hỏi, quan sát khi bạn cần giúp đỡ.",
      "2. Thực hiện nguyên tắc 'Lắng nghe tích cực': Không ngắt lời, nhìn vào bạn, gật đầu thấu hiểu.",
      "3. Ứng xử khi bất đồng: Dùng câu nói bắt đầu bằng 'Mình cảm thấy...' thay vì 'Bạn luôn luôn...'."
    ],
    practice: "Chọn một việc làm nhỏ trong tuần để thể hiện sự quan tâm bạn bè (hỏi thăm khi bạn ốm, cùng ôn bài khó, giữ lời hứa cho mượn sách).",
    evaluation: "Đạt: Biết cách duy trì tình bạn đẹp, biết hòa giải bất đồng và không bao che khuyết điểm.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="460" height="80" rx="12" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
      <g transform="translate(50, 30)">
        <circle cx="30" cy="20" r="16" fill="#fbcfe8"/><text x="30" y="25" text-anchor="middle" font-size="14">🤝</text>
        <text x="30" y="52" text-anchor="middle" font-size="9.5" font-bold fill="#9d174d">Chân thành</text>
      </g>
      <path d="M 125 50 L 155 50" stroke="#f472b6" stroke-width="2" stroke-dasharray="3,3"/>
      <g transform="translate(170, 30)">
        <circle cx="30" cy="20" r="16" fill="#fbcfe8"/><text x="30" y="25" text-anchor="middle" font-size="14">👂</text>
        <text x="30" y="52" text-anchor="middle" font-size="9.5" font-bold fill="#9d174d">Lắng nghe</text>
      </g>
      <path d="M 245 50 L 275 50" stroke="#f472b6" stroke-width="2" stroke-dasharray="3,3"/>
      <g transform="translate(290, 30)">
        <circle cx="30" cy="20" r="16" fill="#fbcfe8"/><text x="30" y="25" text-anchor="middle" font-size="14">⚖️</text>
        <text x="30" y="52" text-anchor="middle" font-size="9.5" font-bold fill="#9d174d">Tôn trọng</text>
      </g>
      <path d="M 365 50 L 395 50" stroke="#f472b6" stroke-width="2" stroke-dasharray="3,3"/>
      <g transform="translate(410, 30)">
        <circle cx="30" cy="20" r="16" fill="#fbcfe8"/><text x="30" y="25" text-anchor="middle" font-size="14">🌱</text>
        <text x="30" y="52" text-anchor="middle" font-size="9.5" font-bold fill="#9d174d">Cùng tiến bộ</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây thể hiện một tình bạn chân thành và đúng đắn nhất?",
      options: ["(Recommended) Thẳng thắn góp ý khi bạn mắc lỗi và cùng bạn sửa chữa", "Bao che cho bạn khi bạn vi phạm nội quy trường học", "Chỉ chơi với bạn khi bạn có nhiều đồ chơi và tiền bạc", "Bắt ép bạn phải làm theo mọi sở thích cá nhân của mình"],
      ans: 0,
      expl: "Tình bạn đích thực luôn tôn trọng, giúp đỡ nhau nhận ra khuyết điểm để cùng tiến bộ, không bao che việc sai trái."
    }
  },
  {
    topicId: 1,
    id: "hdtn-1-2",
    num: "2",
    title: "Phòng, tránh bắt nạt học đường",
    desc: "Nhận diện các hình thức bắt nạt, kĩ năng tự bảo vệ, tìm sự hỗ trợ và xây dựng môi trường lớp học an toàn.",
    keyPoints: [
      "Bắt nạt học đường gồm: Lời nói xúc phạm, cô lập tẩy chay, đe dọa, bạo lực thể xác, phá hoại đồ đạc và bắt nạt qua không gian mạng.",
      "Phân biệt mâu thuẫn nhất thời với bắt nạt: Bắt nạt có tính lặp lại, cố ý và tạo sự chênh lệch quyền lực khiến nạn nhân khó tự vệ.",
      "Dấu hiệu cảnh báo: Lo sợ đến trường, buồn bã, vết bầm tím bất thường, đồ dùng bị hư hỏng, kết quả học tập sút giảm đột ngột.",
      "5 bước xử lí khi chứng kiến hoặc bị bắt nạt: Không hùa theo -> Rời khỏi nguy cơ an toàn -> Báo người lớn tin cậy -> Lưu giữ bằng chứng -> Đồng hành hỗ trợ bạn."
    ],
    skills: [
      "1. Kĩ năng từ chối & thoát hiểm: Giữ bình tĩnh, nói to rõ ràng 'Dừng lại ngay!', di chuyển về nơi đông người/phòng giám thị.",
      "2. Bắt nạt trên mạng: Chụp màn hình bằng chứng, chặn tài khoản bắt nạt, báo cáo quản trị viên và nói với cha mẹ.",
      "3. Xây dựng 'Hộp thư điều em muốn nói' tại lớp để học sinh báo tin kín đáo, an toàn."
    ],
    practice: "Thảo luận nhóm xây dựng 'Bản quy ước văn hóa lớp học không bạo lực' với 5 điều cam kết tôn trọng lẫn nhau.",
    evaluation: "Đạt: Nhận diện được hành vi bắt nạt, biết cách phòng ngừa và tìm kiếm sự trợ giúp đúng địa chỉ tin cậy.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="130" height="80" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="90" y="38" text-anchor="middle" font-size="10" font-bold fill="#991b1b">1. KHÔNG HÙA THEO</text>
      <text x="90" y="58" text-anchor="middle" font-size="8.5" fill="#7f1d1d">Không quay clip phát tán</text>
      <text x="90" y="75" text-anchor="middle" font-size="8" font-bold fill="#dc2626">Lên tiếng phản đối</text>

      <rect x="185" y="15" width="130" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="250" y="38" text-anchor="middle" font-size="10" font-bold fill="#92400e">2. THOÁT HIỂM AN TOÀN</text>
      <text x="250" y="58" text-anchor="middle" font-size="8.5" fill="#78350f">Rời khỏi nơi nguy hiểm</text>
      <text x="250" y="75" text-anchor="middle" font-size="8" font-bold fill="#d97706">Đến nơi đông người</text>

      <rect x="345" y="15" width="130" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="410" y="38" text-anchor="middle" font-size="10" font-bold fill="#1e40af">3. BÁO NGƯỜI LỚN</text>
      <text x="410" y="58" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Thầy cô, cha mẹ, giám thị</text>
      <text x="410" y="75" text-anchor="middle" font-size="8" font-bold fill="#2563eb">Lưu giữ bằng chứng</text>
    </svg>`,
    quiz: {
      q: "Khi chứng kiến một bạn trong lớp bị nhóm học sinh khác cô lập và đe dọa, em nên làm gì?",
      options: ["(Recommended) Báo ngay với thầy cô giáo chủ nhiệm hoặc người lớn đáng tin cậy", "Đứng xem và quay video đăng lên mạng xã hội để câu like", "Lấy làm trò cười và hùa theo nhóm bạn bắt nạt", "Im lặng hoàn toàn vì nghĩ đó không phải là việc của mình"],
      ans: 0,
      expl: "Kịp thời thông báo cho thầy cô giúp ngăn chặn bạo lực học đường và bảo vệ sự an toàn cho nạn nhân."
    }
  },
  {
    topicId: 1,
    id: "hdtn-1-3",
    num: "3",
    title: "Xây dựng truyền thống nhà trường",
    desc: "Tìm hiểu lịch sử, phát huy nét đẹp truyền thống và thực hiện các sản phẩm truyền thông giới thiệu trường học.",
    keyPoints: [
      "Truyền thống nhà trường được hình thành qua lịch sử, thành tích dạy - học, tấm gương thầy trò, hoạt động xã hội và các giá trị văn hóa tốt đẹp.",
      "Khai thác thông tin từ các nguồn xác thực: Phòng truyền thống, website nhà trường, kỉ yếu, thầy cô giáo kì cựu và cựu học sinh.",
      "Hình thức lan tỏa truyền thống: Tập san, video ngắn, áp phích triển lãm, bài thuyết trình trong giờ sinh hoạt dưới cờ.",
      "Trách nhiệm của học sinh: Nỗ lực học tập, rèn luyện đạo đức, giữ gìn cơ sở vật chất, bảo vệ môi trường và giữ gìn danh dự nhà trường."
    ],
    skills: [
      "1. Phỏng vấn thu thập thông tin: Chuẩn bị câu hỏi ngắn gọn, lịch sự, lắng nghe và ghi chép trung thực.",
      "2. Thiết kế sản phẩm truyền thông: Đảm bảo tính xác thực, thẩm mỹ, nêu bật thông điệp tự hào về mái trường.",
      "3. Hành động nhỏ thiết thực: Giữ gìn bàn ghế sạch sẽ, chăm sóc bồn hoa cây cảnh trong khuôn viên trường."
    ],
    practice: "Thiết kế một tờ rơi (brochure) hoặc áp phích infographic giới thiệu 'Nét đẹp trường em' theo nhóm 4-5 bạn.",
    evaluation: "Đạt: Nắm rõ truyền thống nhà trường, có sản phẩm giới thiệu sáng tạo và tích cực tham gia phong trào thi đua.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="460" height="80" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">🏛️</text>
        <text x="25" y="52" text-anchor="middle" font-size="9" font-bold fill="#6b21a8">Lịch sử trường</text>
      </g>
      <path d="M 140 45 L 180 45" stroke="#c084fc" stroke-width="2"/>
      <g transform="translate(200, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">🏆</text>
        <text x="25" y="52" text-anchor="middle" font-size="9" font-bold fill="#6b21a8">Thành tích &amp; Tấm gương</text>
      </g>
      <path d="M 280 45 L 320 45" stroke="#c084fc" stroke-width="2"/>
      <g transform="translate(340, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">🎨</text>
        <text x="25" y="52" text-anchor="middle" font-size="9" font-bold fill="#6b21a8">Lan tỏa giá trị</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây của học sinh trực tiếp góp phần phát huy truyền thống tốt đẹp của nhà trường?",
      options: ["(Recommended) Tích cực học tập, lễ phép với thầy cô và giữ gìn khuôn viên trường xanh sạch đẹp", "Viết vẽ bậy lên tường lớp học và bàn ghế", "Thờ ơ không tham gia các hoạt động tập thể do trường phát động", "Làm hỏng các thiết bị đồ dùng trong phòng thí nghiệm"],
      ans: 0,
      expl: "Học tập tốt, rèn luyện nếp sống văn minh và giữ gìn tài sản chung là cách thiết thực nhất để làm rạng danh nhà trường."
    }
  },

  // ==================== CHỦ ĐỀ 2: KHÁM PHÁ BẢN THÂN ====================
  {
    topicId: 2,
    id: "hdtn-2-1",
    num: "1",
    title: "Tính cách và cảm xúc của tôi",
    desc: "Nhận diện nét tính cách, gọi tên cảm xúc và thực hành quy trình 5 bước điều chỉnh cảm xúc tích cực.",
    keyPoints: [
      "Tính cách thể hiện qua suy nghĩ, cảm nhận và cách ứng xử ổn định; mỗi người đều có thế mạnh riêng và điểm cần hoàn thiện.",
      "Cảm xúc (vui, buồn, tức giận, lo âu, thất vọng) là phản ứng tự nhiên; hành vi thể hiện cảm xúc cần an toàn và có kiểm soát.",
      "Quy trình 5 bước điều chỉnh cảm xúc: Gọi tên cảm xúc -> Dừng lại hít thở sâu -> Nhận diện suy nghĩ gây bức xúc -> Chọn cách giải tỏa an toàn -> Trao đổi khi bình tĩnh.",
      "Biện pháp giải tỏa an toàn: Nghe nhạc nhẹ, hít thở sâu, tập thể dục nhẹ nhàng, viết nhật kí hoặc tâm sự với người tin cậy."
    ],
    skills: [
      "1. Kĩ thuật dừng lại 5 giây: Khi giận dữ, nhẩm đếm từ 1 đến 5 và hít thở sâu bằng bụng trước khi nói.",
      "2. Tránh các hành vi tiêu cực: Đập phá đồ đạc, tự làm đau bản thân hoặc trút giận lên người khác.",
      "3. Chuyển hóa suy nghĩ: Thay vì 'Mọi việc hỏng hết rồi' hãy nghĩ 'Mình sẽ tìm cách sửa chữa từng bước'."
    ],
    practice: "Ghi lại nhật kí cảm xúc trong 1 ngày: Ghi lại tình huống làm em xúc động, cách em phản ứng và tự rút kinh nghiệm.",
    evaluation: "Đạt: Nhận diện được nét tính cách cá nhân và biết áp dụng quy trình kiểm soát cơn tức giận an toàn.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="85" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899"/>
      <text x="57" y="38" text-anchor="middle" font-size="8.5" font-bold fill="#be185d">1. Gọi tên</text>
      <text x="57" y="58" text-anchor="middle" font-size="14">🏷️</text>
      <text x="57" y="75" text-anchor="middle" font-size="7.5" fill="#64748b">Biết mình đang giận</text>

      <rect x="110" y="15" width="85" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="152" y="38" text-anchor="middle" font-size="8.5" font-bold fill="#1d4ed8">2. Dừng lại</text>
      <text x="152" y="58" text-anchor="middle" font-size="14">⏸️</text>
      <text x="152" y="75" text-anchor="middle" font-size="7.5" fill="#64748b">Hít thở sâu 5s</text>

      <rect x="205" y="15" width="85" height="80" rx="10" fill="#fefce8" stroke="#eab308"/>
      <text x="247" y="38" text-anchor="middle" font-size="8.5" font-bold fill="#a16207">3. Suy ngẫm</text>
      <text x="247" y="58" text-anchor="middle" font-size="14">🤔</text>
      <text x="247" y="75" text-anchor="middle" font-size="7.5" fill="#64748b">Đổi góc nhìn</text>

      <rect x="300" y="15" width="85" height="80" rx="10" fill="#ecfdf5" stroke="#10b981"/>
      <text x="342" y="38" text-anchor="middle" font-size="8.5" font-bold fill="#047857">4. Giải tỏa</text>
      <text x="342" y="58" text-anchor="middle" font-size="14">🎵</text>
      <text x="342" y="75" text-anchor="middle" font-size="7.5" fill="#64748b">Nghe nhạc, đi dạo</text>

      <rect x="395" y="15" width="90" height="80" rx="10" fill="#faf5ff" stroke="#a855f7"/>
      <text x="440" y="38" text-anchor="middle" font-size="8.5" font-bold fill="#7e22ce">5. Trao đổi</text>
      <text x="440" y="58" text-anchor="middle" font-size="14">💬</text>
      <text x="440" y="75" text-anchor="middle" font-size="7.5" fill="#64748b">Khi đã bình tĩnh</text>
    </svg>`,
    quiz: {
      q: "Khi bực bội vì một hiểu lầm với bạn cùng lớp, cách ứng xử văn minh và tích cực nhất là:",
      options: ["(Recommended) Dừng lại hít thở sâu, đợi khi cả hai bình tĩnh rồi gặp riêng trao đổi", "La hét và xúc phạm bạn trước mặt cả lớp", "Đăng bài nói xấu bạn lên mạng xã hội để giải tỏa", "Tẩy chay và rủ các bạn khác không chơi với bạn"],
      ans: 0,
      expl: "Bình tĩnh hít thở và gặp riêng trao đổi giúp làm sáng tỏ hiểu lầm mà không làm tổn thương mối quan hệ."
    }
  },
  {
    topicId: 2,
    id: "hdtn-2-2",
    num: "2",
    title: "Khả năng tranh biện, thuyết phục của tôi",
    desc: "Kĩ năng bảo vệ quan điểm dựa trên lí lẽ và bằng chứng, lắng nghe tôn trọng và thuyết phục người khác.",
    keyPoints: [
      "Tranh biện là trao đổi các quan điểm khác nhau dựa trên lí lẽ và bằng chứng xác thực nhằm làm sáng tỏ chân lí, không công kích cá nhân.",
      "Thuyết phục là trình bày lí lẽ, thông tin thực tế và cách diễn đạt hòa nhã để người nghe hiểu và đồng thuận với quan điểm.",
      "Cấu trúc luận điểm thuyết phục: Nêu quan điểm rõ ràng -> Đưa ra 2-3 lí lẽ thuyết phục -> Minh chứng/ví dụ thực tế -> Kết luận súc tích.",
      "Văn hóa tranh biện: Lắng nghe không ngắt lời, tôn trọng sự khác biệt, dùng ngôn từ lịch sự và biết tiếp thu góp ý đúng đắn."
    ],
    skills: [
      "1. Phân biệt sự thật (Fact) và ý kiến cá nhân (Opinion) khi thu thập tài liệu tranh biện.",
      "2. Sử dụng ánh mắt tự tin, giọng nói vừa phải, dõng dạc và thái độ cầu thị.",
      "3. Kĩ thuật phản biện văn minh: 'Tôi hiểu quan điểm của bạn, tuy nhiên số liệu thực tế cho thấy...'."
    ],
    practice: "Tập tranh biện theo cặp về chủ đề: 'Học sinh lớp 8 có nên sử dụng điện thoại thông minh phục vụ học tập?'.",
    evaluation: "Đạt: Trình bày được luận điểm có dẫn chứng, biết lắng nghe và tôn trọng người có ý kiến trái chiều.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="210" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="130" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">TRANH BIỆN VĂN MINH</text>
      <text x="130" y="58" text-anchor="middle" font-size="9" fill="#1e40af">• Lí lẽ logic &amp; Dẫn chứng xác thực</text>
      <text x="130" y="75" text-anchor="middle" font-size="8.5" font-bold fill="#2563eb">Làm sáng tỏ vấn đề - Không công kích</text>

      <rect x="265" y="15" width="210" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="370" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">NGHỆ THUẬT THUYẾT PHỤC</text>
      <text x="370" y="58" text-anchor="middle" font-size="9" fill="#166534">• Giọng nói hòa nhã, tôn trọng người nghe</text>
      <text x="370" y="75" text-anchor="middle" font-size="8.5" font-bold fill="#16a34a">Cầu thị &amp; Không áp đặt ép buộc</text>
    </svg>`,
    quiz: {
      q: "Mục đích chân chính của hoạt động tranh biện học đường là gì?",
      options: ["(Recommended) Cùng làm sáng tỏ vấn đề bằng lí lẽ và dẫn chứng thuyết phục", "Đánh bại và làm bẽ mặt người có quan điểm khác mình", "Chứng tỏ bản thân luôn luôn đúng trong mọi trường hợp", "Ngắt lời đối phương để không cho họ có cơ hội trình bày"],
      ans: 0,
      expl: "Tranh biện là để mở rộng góc nhìn, học hỏi lẫn nhau và tìm ra giải pháp tối ưu thông qua lí lẽ logic."
    }
  },

  // ==================== CHỦ ĐỀ 3: TRÁCH NHIỆM VỚI BẢN THÂN ====================
  {
    topicId: 3,
    id: "hdtn-3-1",
    num: "1",
    title: "Sống có trách nhiệm",
    desc: "Chủ động thực hiện bổn phận, giữ gìn cam kết, chịu trách nhiệm về hành vi và khắc phục sai sót.",
    keyPoints: [
      "Sống có trách nhiệm là chủ động hoàn thành bổn phận của mình, cân nhắc hậu quả trước khi hành động và dũng cảm nhận lỗi khi làm sai.",
      "Trách nhiệm với bản thân: Chăm sóc sức khỏe, học tập tự giác, quản lí thời gian, bảo vệ an toàn trên không gian mạng và đời thực.",
      "Trách nhiệm với tập thể: Giữ lời hứa, hoàn thành nhiệm vụ nhóm đúng hạn, hỗ trợ đồng đội và không đùn đẩy trách nhiệm.",
      "5 bước biến cam kết thành hành động: Xác định mục tiêu -> Chia nhỏ việc cần làm -> Lập thời gian biểu -> Theo dõi tiến độ -> Tự đánh giá."
    ],
    skills: [
      "1. Lập ma trận thời gian ưu tiên việc 'Quan trọng & Khẩn cấp' trước các hoạt động giải trí.",
      "2. Nhận lỗi chân thành: 'Mình nhận trách nhiệm vì đã nộp bài muộn, mình sẽ hoàn thành bù trước 17h'.",
      "3. Không đổ lỗi cho hoàn cảnh hay người khác khi kết quả chưa như mong muốn."
    ],
    practice: "Thiết lập 'Bảng cam kết trách nhiệm cá nhân trong tuần' về việc tự giác học tập và làm việc nhà.",
    evaluation: "Đạt: Tự giác hoàn thành các nhiệm vụ được giao, biết giữ lời hứa và chịu trách nhiệm về lời nói, hành động.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="460" height="80" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <g transform="translate(50, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">🎯</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#6b21a8">1. Tự giác học</text>
      </g>
      <path d="M 125 45 L 155 45" stroke="#c084fc" stroke-width="2"/>
      <g transform="translate(170, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">⏰</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#6b21a8">2. Đúng giờ</text>
      </g>
      <path d="M 245 45 L 275 45" stroke="#c084fc" stroke-width="2"/>
      <g transform="translate(290, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">🤝</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#6b21a8">3. Giữ lời hứa</text>
      </g>
      <path d="M 365 45 L 395 45" stroke="#c084fc" stroke-width="2"/>
      <g transform="translate(410, 25)">
        <circle cx="25" cy="20" r="16" fill="#f3e8ff"/><text x="25" y="25" text-anchor="middle" font-size="14">🛡️</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#6b21a8">4. Sửa sai sót</text>
      </g>
    </svg>`,
    quiz: {
      q: "Khi nhận nhiệm vụ chuẩn bị slide thuyết trình cho nhóm nhưng gặp sự cố máy tính hỏng, em nên xử lí như thế nào?",
      options: ["(Recommended) Thông báo sớm cho nhóm trưởng và cùng các bạn tìm phương án mượn máy khác hoàn thành", "Im lặng đến giờ học rồi nói không làm được do máy tính hỏng", "Bỏ mặc bài tập nhóm vì đó là sự cố ngoài ý muốn", "Đổ lỗi cho bạn phụ trách nội dung gửi tài liệu muộn"],
      ans: 0,
      expl: "Người có trách nhiệm luôn chủ động báo sớm và nỗ lực tìm giải pháp khắc phục khó khăn để không ảnh hưởng tập thể."
    }
  },
  {
    topicId: 3,
    id: "hdtn-3-2",
    num: "2",
    title: "Kĩ năng từ chối an toàn",
    desc: "Thiết lập ranh giới cá nhân, nhận biết tình huống nguy hiểm và kĩ năng nói 'KHÔNG' dứt khoát.",
    keyPoints: [
      "Từ chối là quyền tự bảo vệ ranh giới cá nhân khi gặp lời rủ rê nguy hiểm, vi phạm pháp luật, trái đạo đức hoặc vượt quá năng lực.",
      "Tình huống cần từ chối: Rủ rê hút thuốc lá điện tử, trốn học chơi game, chia sẻ mật khẩu cá nhân, gian lận thi cử hoặc đi chơi xa không xin phép cha mẹ.",
      "Nguyên tắc 4 bước từ chối an toàn: Nói 'KHÔNG' dứt khoát -> Nêu lí do ngắn gọn -> Đề xuất phương án thay thế an toàn -> Rời khỏi tình huống nếu bị ép buộc.",
      "Không sợ mất lòng: Người bạn tốt thực sự sẽ tôn trọng ranh giới và sự từ chối chính đáng của em."
    ],
    skills: [
      "1. Ngôn ngữ cơ thể khi từ chối: Đứng thẳng, nhìn thẳng vào mắt đối phương, nét mặt nghiêm túc, giọng nói rõ ràng.",
      "2. Mẫu câu từ chối mẫu: 'Không, mình không tham gia việc đó vì rất nguy hiểm và vi phạm nội quy'.",
      "3. Kĩ thuật thoát hiểm: Tạo cớ rời đi ngay (ví dụ: 'Mẹ đang đợi mình về nấu cơm, mình phải về ngay')."
    ],
    practice: "Đóng vai xử lí tình huống: Từ chối lời mời thử hút thuốc lá điện tử từ một nhóm bạn quen.",
    evaluation: "Đạt: Biết nói 'Không' dứt khoát trước cám dỗ nguy hiểm và biết cách rời khỏi tình huống an toàn.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="105" height="80" rx="10" fill="#fee2e2" stroke="#ef4444"/>
      <text x="77" y="38" text-anchor="middle" font-size="9" font-bold fill="#991b1b">1. NÓI "KHÔNG"</text>
      <text x="77" y="58" text-anchor="middle" font-size="14">🚫</text>
      <text x="77" y="75" text-anchor="middle" font-size="7.5" fill="#7f1d1d">Dứt khoát, rõ ràng</text>

      <rect x="145" y="15" width="105" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b"/>
      <text x="197" y="38" text-anchor="middle" font-size="9" font-bold fill="#92400e">2. NÊU LÍ DO</text>
      <text x="197" y="58" text-anchor="middle" font-size="14">⚖️</text>
      <text x="197" y="75" text-anchor="middle" font-size="7.5" fill="#78350f">Ngắn gọn, kiên định</text>

      <rect x="265" y="15" width="105" height="80" rx="10" fill="#ecfdf5" stroke="#10b981"/>
      <text x="317" y="38" text-anchor="middle" font-size="9" font-bold fill="#047857">3. ĐỔI LỰA CHỌN</text>
      <text x="317" y="58" text-anchor="middle" font-size="14">🔄</text>
      <text x="317" y="75" text-anchor="middle" font-size="7.5" fill="#065f46">Phương án an toàn</text>

      <rect x="385" y="15" width="95" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="432" y="38" text-anchor="middle" font-size="9" font-bold fill="#1e40af">4. RỜI ĐI</text>
      <text x="432" y="58" text-anchor="middle" font-size="14">🏃</text>
      <text x="432" y="75" text-anchor="middle" font-size="7.5" fill="#1e3a8a">Nếu tiếp tục bị ép</text>
    </svg>`,
    quiz: {
      q: "Khi bị bạn thân rủ trốn tiết học buổi chiều để đi chơi điện tử, phản ứng nào là phù hợp nhất?",
      options: ["(Recommended) Từ chối dứt khoát, giải thích việc trốn học vi phạm nội quy và khuyên bạn vào lớp học", "Đồng ý đi cùng vì sợ bạn giận và nghỉ chơi", "Trốn học một buổi rồi hôm sau nói dối cô giáo bị ốm", "Im lặng đi theo nhưng trong lòng lo sợ"],
      ans: 0,
      expl: "Từ chối kiên định trước hành vi sai trái và khuyên bạn học tập là biểu hiện của người có bản lĩnh và tình bạn chân chính."
    }
  },

  // ==================== CHỦ ĐỀ 4: RÈN LUYỆN BẢN THÂN ====================
  {
    topicId: 4,
    id: "hdtn-4-1",
    num: "1",
    title: "Người tiêu dùng thông thái",
    desc: "Nhận biết tác động của tiếp thị quảng cáo, phân biệt 'Nhu cầu' và 'Mong muốn', chi tiêu thông minh.",
    keyPoints: [
      "Quyết định mua sắm thường bị ảnh hưởng bởi: Quảng cáo trên mạng, người nổi tiếng (KOLs), bạn bè, chiêu trò giảm giá sốc.",
      "Phân biệt 'Cần' (Needs - thiết yếu cho sinh hoạt, học tập) và 'Muốn' (Wants - sở thích nhất thời, có thể hoãn lại).",
      "Quy trình 5 bước mua sắm thông thái: Xác định nhu cầu thật -> So sánh giá & chất lượng -> Đọc kĩ đánh giá & hạn dùng -> Cân nhắc ngân sách -> Quyết định mua.",
      "Cảnh giác mua sắm trực tuyến: Không cung cấp thông tin cá nhân/mã OTP, xin ý kiến cha mẹ trước khi đặt hàng qua mạng."
    ],
    skills: [
      "1. Nguyên tắc 'Chờ 24 giờ': Khi muốn mua một món đồ không thiết yếu, hãy chờ 24h để xem mình có thực sự cần nó không.",
      "2. Đọc kĩ nhãn mác: Hạn sử dụng, xuất xứ nguồn gốc, thành phần dinh dưỡng và hướng dẫn an toàn.",
      "3. Lập danh sách mua sắm trước khi đi siêu thị để tránh mua theo cảm xúc."
    ],
    practice: "Phân tích một mẩu quảng cáo trên mạng xã hội: Chỉ ra điểm thực tế và điểm được phóng đại thổi phồng.",
    evaluation: "Đạt: Phân biệt được nhu cầu thực tế và sở thích nhất thời, có thói quen kiểm tra thông tin trước khi mua hàng.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="210" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="130" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">NHU CẦU THỰC SỰ (NEEDS)</text>
      <text x="130" y="58" text-anchor="middle" font-size="8.5" fill="#14532d">• Sách vở, đồ dùng học tập thiết yếu</text>
      <text x="130" y="73" text-anchor="middle" font-size="8.5" fill="#14532d">• Thức ăn dinh dưỡng, thuốc men</text>

      <rect x="265" y="15" width="210" height="80" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="370" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#b91c1c">MONG MUỐN NHẤT THỜI (WANTS)</text>
      <text x="370" y="58" text-anchor="middle" font-size="8.5" fill="#7f1d1d">• Đồ chơi theo trào lưu trên mạng</text>
      <text x="370" y="73" text-anchor="middle" font-size="8.5" fill="#7f1d1d">• Mua chỉ vì thấy 'Giảm giá 50%'</text>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây chứng tỏ một người tiêu dùng thông thái?",
      options: ["(Recommended) So sánh giá cả, chất lượng và kiểm tra hạn sử dụng trước khi quyết định mua", "Mua ngay lập tức vì thấy người nổi tiếng quảng cáo hay", "Cứ thấy hàng giảm giá là mua thật nhiều dù không dùng tới", "Mua đồ đắt tiền chỉ để khoe khoang với bạn bè"],
      ans: 0,
      expl: "Người tiêu dùng thông thái luôn cân nhắc kĩ lưỡng về chất lượng, giá trị sử dụng và ngân sách trước khi mua."
    }
  },
  {
    topicId: 4,
    id: "hdtn-4-2",
    num: "2",
    title: "Nhà kinh doanh nhỏ",
    desc: "Ý tưởng khởi nghiệp phù hợp lứa tuổi, các bước lập kế hoạch kinh doanh đơn giản và tính toán chi phí – lợi nhuận.",
    keyPoints: [
      "Ý tưởng kinh doanh nhỏ phù hợp lứa tuổi: Làm đồ handmade, vẽ tranh thiệp, tái chế rác thải, làm bánh hoặc phụ kiện thủ công.",
      "Cấu trúc kế hoạch kinh doanh: Tên dự án -> Khách hàng mục tiêu -> Nguồn lực & vốn -> Kế hoạch sản xuất & bán hàng -> Dự toán thu/chi & lợi nhuận.",
      "Phân biệt Doanh thu và Lợi nhuận: Doanh thu = Tổng số tiền bán được; Lợi nhuận = Doanh thu trừ đi toàn bộ Chi phí nguyên vật liệu.",
      "Nguyên tắc an toàn: Không tự ý huy động vốn lớn, đảm bảo vệ sinh an toàn thực phẩm và có sự hướng dẫn của cha mẹ/thầy cô."
    ],
    skills: [
      "1. Khảo sát nhu cầu khách hàng: Hỏi bạn bè xem họ sẵn sàng chi bao nhiêu tiền cho một chiếc móc khóa handmade.",
      "2. Tính giá bán hợp lí: Giá bán = Chi phí làm ra sản phẩm + Một phần lợi nhuận xứng đáng công sức.",
      "3. Giới thiệu sản phẩm trung thực, không quảng cáo sai sự thật."
    ],
    practice: "Lập bảng kế hoạch kinh doanh nhỏ 'Hội chợ xuân của lớp': Dự toán vốn 100.000đ làm vòng tay may mắn.",
    evaluation: "Đạt: Lập được bản kế hoạch kinh doanh nhỏ đơn giản, phân biệt được doanh thu và lợi nhuận.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="460" height="80" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <circle cx="25" cy="20" r="16" fill="#fef3c7"/><text x="25" y="25" text-anchor="middle" font-size="14">💡</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#b45309">1. Ý tưởng</text>
      </g>
      <path d="M 120 45 L 145 45" stroke="#fcd34d" stroke-width="2"/>
      <g transform="translate(155, 25)">
        <circle cx="25" cy="20" r="16" fill="#fef3c7"/><text x="25" y="25" text-anchor="middle" font-size="14">📊</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#b45309">2. Khảo sát</text>
      </g>
      <path d="M 230 45 L 255 45" stroke="#fcd34d" stroke-width="2"/>
      <g transform="translate(265, 25)">
        <circle cx="25" cy="20" r="16" fill="#fef3c7"/><text x="25" y="25" text-anchor="middle" font-size="14">💰</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#b45309">3. Tính chi phí</text>
      </g>
      <path d="M 340 45 L 365 45" stroke="#fcd34d" stroke-width="2"/>
      <g transform="translate(375, 25)">
        <circle cx="25" cy="20" r="16" fill="#fef3c7"/><text x="25" y="25" text-anchor="middle" font-size="14">📈</text>
        <text x="25" y="52" text-anchor="middle" font-size="8.5" font-bold fill="#b45309">4. Đánh giá lời/lỗ</text>
      </g>
    </svg>`,
    quiz: {
      q: "Em làm 10 chiếc kẹp tóc hết 50.000đ tiền nguyên liệu, bán được cả 10 chiếc với giá 8.000đ/chiếc. Lợi nhuận của em là:",
      options: ["(Recommended) 30.000 đồng", "80.000 đồng", "50.000 đồng", "130.000 đồng"],
      ans: 0,
      expl: "Doanh thu = 10 x 8.000 = 80.000đ. Lợi nhuận = Doanh thu - Chi phí = 80.000 - 50.000 = 30.000 đồng."
    }
  },
  {
    topicId: 4,
    id: "hdtn-4-3",
    num: "3",
    title: "Rèn luyện sự tự chủ",
    desc: "Làm chủ suy nghĩ, cảm xúc và hành vi; giữ vững bản lĩnh trước cám dỗ trên không gian mạng và đời sống.",
    keyPoints: [
      "Tự chủ là khả năng làm chủ bản thân: Không hành động bốc đồng theo cảm xúc nhất thời, kiên định với mục tiêu đúng đắn.",
      "Biểu hiện trực tiếp: Bình tĩnh khi gặp bất hòa, tự tin nêu chính kiến, không ùa theo đám đông, kiên trì vượt khó khăn.",
      "Tự chủ trên mạng xã hội: Kiểm chứng thông tin trước khi chia sẻ, không bình luận ác ý, quản lí thời gian lướt mạng, bảo mật thông tin cá nhân.",
      "Rèn luyện thói quen tự chủ: Đặt ra giới hạn (ví dụ: dùng điện thoại tối đa 45 phút/ngày), ghi nhật kí tự theo dõi và điều chỉnh."
    ],
    skills: [
      "1. Nguyên tắc 'Suy nghĩ trước khi đăng': Tự hỏi 'Bài đăng này có đúng sự thật không? Có làm tổn thương ai không?'.",
      "2. Kĩ năng tập trung: Tắt thông báo điện thoại khi đang ngồi vào bàn học tập.",
      "3. Tự chịu trách nhiệm: Dám đối diện với hậu quả việc mình làm, không bao biện."
    ],
    practice: "Thực hiện thử thách '1 tuần tự chủ công nghệ': Giảm 50% thời gian chơi game/lướt mạng xã hội và tăng thời gian đọc sách.",
    evaluation: "Đạt: Thể hiện được sự tự chủ trong sinh hoạt, học tập và ứng xử văn minh trên không gian mạng.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="210" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
      <text x="130" y="38" text-anchor="middle" font-size="10" font-bold fill="#be185d">TỰ CHỦ TRONG ĐỜI THƯỜNG</text>
      <text x="130" y="58" text-anchor="middle" font-size="8.5" fill="#831843">• Bình tĩnh trước xung đột</text>
      <text x="130" y="73" text-anchor="middle" font-size="8.5" fill="#831843">• Kiên trì thực hiện mục tiêu</text>

      <rect x="265" y="15" width="210" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="370" y="38" text-anchor="middle" font-size="10" font-bold fill="#1d4ed8">TỰ CHỦ TRÊN MẠNG XÃ HỘI</text>
      <text x="370" y="58" text-anchor="middle" font-size="8.5" fill="#1e3a8a">• Kiểm chứng tin đồn giả mạo</text>
      <text x="370" y="73" text-anchor="middle" font-size="8.5" fill="#1e3a8a">• Quản lí thời gian online hợp lí</text>
    </svg>`,
    quiz: {
      q: "Thấy một trào lưu (trend) nguy hiểm đang rầm rộ trên mạng xã hội, người có tính tự chủ sẽ:",
      options: ["(Recommended) Không bắt chước làm theo và cảnh báo các bạn bè về sự nguy hiểm của nó", "Lập tức quay video làm theo để tăng lượt theo dõi (follow)", "Rủ rê các bạn cùng tham gia thử thách mạo hiểm", "Chia sẻ rộng rãi lên trang cá nhân mà không cần suy nghĩ"],
      ans: 0,
      expl: "Người tự chủ có bản lĩnh phân biệt đúng sai, không chạy theo trào lưu độc hại gây tổn hại sức khỏe và an toàn."
    }
  },

  // ==================== CHỦ ĐỀ 5: EM VỚI GIA ĐÌNH ====================
  {
    topicId: 5,
    id: "hdtn-5-1",
    num: "1",
    title: "Tôn trọng, thuyết phục và ứng xử để người thân hài lòng",
    desc: "Giao tiếp tôn trọng với ông bà, cha mẹ; thấu hiểu khoảng cách thế hệ và kĩ năng bày tỏ nguyện vọng thuyết phục.",
    keyPoints: [
      "Tôn trọng người thân thể hiện qua: Lắng nghe chân thành, thưa gửi lễ phép, quan tâm sức khỏe và thực hiện lời hứa.",
      "Thấu hiểu khoảng cách thế hệ: Ông bà, cha mẹ có kinh nghiệm sống và quan niệm khác; cần lắng nghe bằng sự tôn trọng và chia sẻ cởi mở.",
      "Kĩ năng thuyết phục cha mẹ: Chọn thời điểm thích hợp (khi cha mẹ thảnh thơi) -> Nêu rõ nguyện vọng & lí do chính đáng -> Đưa kế hoạch đảm bảo việc học -> Lắng nghe lo lắng của cha mẹ.",
      "Ứng xử làm cha mẹ hài lòng: Tự giác học tập, chủ động làm việc nhà, quan tâm hỏi han và chia sẻ những câu chuyện ở trường."
    ],
    skills: [
      "1. Sử dụng lời nói lịch sự: 'Con thưa bố mẹ...', 'Bố mẹ cho con xin phép được trình bày ý kiến...'.",
      "2. Không cãi vã, đóng sầm cửa hay giận dỗi im lặng khi cha mẹ chưa đồng ý.",
      "3. Thể hiện lòng biết ơn qua những hành động cụ thể: Rót nước cho bố mẹ khi đi làm về, xoa bóp vai cho ông bà."
    ],
    practice: "Thực hành một cuộc trò chuyện chia sẻ với cha mẹ về nguyện vọng tham gia câu lạc bộ năng khiếu ở trường.",
    evaluation: "Đạt: Biết lắng nghe tôn trọng người thân và có kĩ năng trình bày nguyện vọng cá nhân lễ phép, thuyết phục.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="130" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e"/>
      <text x="90" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#15803d">1. LẮNG NGHE</text>
      <text x="90" y="58" text-anchor="middle" font-size="14">👂</text>
      <text x="90" y="75" text-anchor="middle" font-size="8" fill="#14532d">Tôn trọng người lớn</text>

      <rect x="185" y="15" width="130" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="250" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">2. CHIA SẺ</text>
      <text x="250" y="58" text-anchor="middle" font-size="14">💬</text>
      <text x="250" y="75" text-anchor="middle" font-size="8" fill="#1e3a8a">Bày tỏ nguyện vọng lễ phép</text>

      <rect x="345" y="15" width="130" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899"/>
      <text x="410" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#be185d">3. QUAN TÂM</text>
      <text x="410" y="58" text-anchor="middle" font-size="14">❤️</text>
      <text x="410" y="75" text-anchor="middle" font-size="8" fill="#831843">Gia đình ấm áp, hòa thuận</text>
    </svg>`,
    quiz: {
      q: "Khi muốn xin phép bố mẹ tham gia chuyến dã ngoại cùng lớp vào cuối tuần, cách ứng xử nào là đúng đắn nhất?",
      options: ["(Recommended) Chọn lúc bố mẹ vui vẻ, thưa gửi rõ lịch trình, mục đích dã ngoại và cam kết an toàn", "Vùng vằng dọa bỏ ăn nếu bố mẹ không cho đi", "Tự ý đi dã ngoại mà không xin phép trước", "Đòi bố mẹ phải cho tiền thật nhiều để tiêu xài"],
      ans: 0,
      expl: "Trình bày rõ ràng, lễ phép và cam kết an toàn sẽ giúp cha mẹ yên tâm và tin tưởng cho phép em tham gia."
    }
  },
  {
    topicId: 5,
    id: "hdtn-5-2",
    num: "2",
    title: "Tiết kiệm và thực hiện công việc gia đình",
    desc: "Lập kế hoạch phân công việc nhà, tiết kiệm điện nước, chi tiêu hợp lí để san sẻ gánh nặng với cha mẹ.",
    keyPoints: [
      "Chia sẻ việc nhà là trách nhiệm và tình yêu thương của mỗi thành viên: Quét dọn, nấu cơm, rửa bát, chăm sóc cây cảnh/vật nuôi.",
      "Quy trình lập kế hoạch việc nhà: Liệt kê công việc -> Phân công phù hợp khả năng và thời gian biểu -> Thực hiện tự giác -> Đánh giá cùng nhau.",
      "Tiết kiệm trong gia đình: Tắt điện và quạt khi ra khỏi phòng, dùng nước rửa rau để tưới cây, bảo quản đồ dùng cẩn thận, không lãng phí thức ăn.",
      "An toàn khi làm việc nhà: Không tự ý sửa chữa thiết bị điện, cẩn trọng khi dùng bếp ga, dao kéo và chất tẩy rửa hóa học."
    ],
    skills: [
      "1. Kĩ thuật dọn dẹp khoa học: Dọn từ trên cao xuống dưới thấp, từ trong ra ngoài.",
      "2. Thực hành tiết kiệm điện: Sử dụng ánh sáng tự nhiên vào ban ngày, bảo dưỡng quạt sạch bụi.",
      "3. Tự giác chuẩn bị góc học tập ngăn nắp, quần áo gấp gọn gàng."
    ],
    practice: "Lập bảng phân công công việc gia đình trong 1 tuần và tự giác hoàn thành tốt nhiệm vụ được giao.",
    evaluation: "Đạt: Tự giác làm việc nhà đỡ đần cha mẹ và có ý thức thực hành tiết kiệm điện, nước trong gia đình.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="210" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="130" y="38" text-anchor="middle" font-size="10" font-bold fill="#15803d">CHIA SẺ VIỆC NHÀ</text>
      <text x="130" y="58" text-anchor="middle" font-size="8.5" fill="#14532d">• Nấu cơm, rửa bát, quét dọn</text>
      <text x="130" y="73" text-anchor="middle" font-size="8.5" fill="#14532d">• Tự gấp quần áo, xếp góc học tập</text>

      <rect x="265" y="15" width="210" height="80" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
      <text x="370" y="38" text-anchor="middle" font-size="10" font-bold fill="#a16207">TIẾT KIỆM CHO GIA ĐÌNH</text>
      <text x="370" y="58" text-anchor="middle" font-size="8.5" fill="#713f12">• Tắt điện quạt khi rời phòng</text>
      <text x="370" y="73" text-anchor="middle" font-size="8.5" fill="#713f12">• Tiết kiệm nước &amp; Không bỏ phí thức ăn</text>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây thể hiện việc tiết kiệm điện nước thiết thực nhất trong gia đình?",
      options: ["(Recommended) Tắt đèn và điều hòa khi ra khỏi phòng; khóa vòi nước khi đang xát xà phòng", "Bật tivi cả ngày dù không có ai xem", "Xả vòi nước chảy tự do trong lúc đánh răng", "Bật đèn sáng khắp nhà vào ban ngày"],
      ans: 0,
      expl: "Tắt thiết bị khi không dùng và khóa vòi nước giúp giảm hóa đơn tiền điện nước và bảo vệ tài nguyên môi trường."
    }
  },

  // ==================== CHỦ ĐỀ 6: EM VỚI CỘNG ĐỒNG ====================
  {
    topicId: 6,
    id: "hdtn-6-1",
    num: "1",
    title: "Hoạt động giáo dục truyền thống và phát triển cộng đồng",
    desc: "Tìm hiểu di tích lịch sử địa phương, thăm hỏi Mẹ Việt Nam Anh hùng, tham gia vệ sinh bảo vệ môi trường khu dân cư.",
    keyPoints: [
      "Hoạt động cộng đồng gồm: Chăm sóc di tích lịch sử, dâng hương nghĩa trang liệt sĩ, giao lưu nhân chứng lịch sử, tham gia ngày Chủ nhật xanh.",
      "Ý nghĩa: Bồi dưỡng lòng yêu nước, biết ơn thế hệ đi trước, tăng tính gắn kết tình làng nghĩa xóm và trách nhiệm xã hội.",
      "Nguyên tắc khi tham gia: Tìm hiểu trước nội dung, chấp hành quy định nơi công cộng, ăn mặc trang nghiêm, giữ gìn trật tự và vệ sinh.",
      "Tôn trọng cộng đồng: Không tự ý chụp hình, quay phim và đăng tải hình ảnh đời tư của người khác lên mạng xã hội khi chưa được phép."
    ],
    skills: [
      "1. Tác phong chuẩn mực khi viếng nghĩa trang liệt sĩ hoặc di tích lịch sử: Đi nhẹ, nói khẽ, trang phục chỉnh tề.",
      "2. Kĩ năng làm việc nhóm tình nguyện: Phân công nhóm dọn rác, nhóm quét dọn, nhóm thu gom phế liệu.",
      "3. Viết bài thu hoạch chia sẻ cảm xúc sau chuyến đi thực tế."
    ],
    practice: "Tham gia một buổi dọn vệ sinh đường làng ngõ xóm hoặc chăm sóc đài tưởng niệm liệt sĩ tại địa phương.",
    evaluation: "Đạt: Tích cực tham gia hoạt động cộng đồng với tinh thần trách nhiệm, lễ phép và tôn trọng môi trường xung quanh.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="210" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="130" y="38" text-anchor="middle" font-size="10" font-bold fill="#1d4ed8">ĐỀN ƠN ĐÁP NGHĨA</text>
      <text x="130" y="58" text-anchor="middle" font-size="8.5" fill="#1e3a8a">• Thăm Mẹ Việt Nam Anh hùng</text>
      <text x="130" y="73" text-anchor="middle" font-size="8.5" fill="#1e3a8a">• Chăm sóc nghĩa trang liệt sĩ</text>

      <rect x="265" y="15" width="210" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="370" y="38" text-anchor="middle" font-size="10" font-bold fill="#15803d">PHÁT TRIỂN CỘNG ĐỒNG</text>
      <text x="370" y="58" text-anchor="middle" font-size="8.5" fill="#14532d">• Ngày Chủ nhật xanh dọn vệ sinh</text>
      <text x="370" y="73" text-anchor="middle" font-size="8.5" fill="#14532d">• Tuyên truyền nếp sống văn minh</text>
    </svg>`,
    quiz: {
      q: "Khi đến thăm một di tích lịch sử hoặc nghĩa trang liệt sĩ ở địa phương, học sinh cần chú ý điều gì nhất?",
      options: ["(Recommended) Mặc trang phục chỉnh tề, giữ thái độ tôn nghiêm, không cười đùa và giữ gìn vệ sinh", "Chạy nhảy nô đùa và hò hét ầm ĩ", "Bẻ cành cây, khắc tên mình lên bia đá di tích", "Vứt rác bừa bãi xung quanh khu di tích"],
      ans: 0,
      expl: "Thái độ trang nghiêm, ăn mặc lịch sự thể hiện sự thành kính và lòng biết ơn sâu sắc đối với các anh hùng liệt sĩ."
    }
  },
  {
    topicId: 6,
    id: "hdtn-6-2",
    num: "2",
    title: "Lập và thực hiện kế hoạch hoạt động thiện nguyện",
    desc: "Quy trình tổ chức phong trào quyên góp sách vở, quần áo ấm hỗ trợ học sinh vùng khó khăn một cách minh bạch.",
    keyPoints: [
      "Hoạt động thiện nguyện là sự sẻ chia xuất phát từ tấm lòng nhân ái, hỗ trợ đúng người, đúng nhu cầu thực tế.",
      "6 bước tổ chức thiện nguyện: Khảo sát nhu cầu thật -> Đặt mục tiêu vừa sức -> Lập kế hoạch chi tiết -> Xin ý kiến nhà trường -> Thực hiện minh bạch -> Báo cáo công khai.",
      "Tôn trọng phẩm giá người nhận: 'Của cho không bằng cách cho' - quần áo, sách vở quyên góp phải sạch sẽ, lành lặn và được trao gửi trân trọng.",
      "Minh bạch tài chính & an toàn: Học sinh không tự ý quyên góp tiền mặt lớn; mọi đóng góp phải có sổ ghi chép và người lớn giám sát."
    ],
    skills: [
      "1. Phân loại và đóng gói quà tặng: Bọc sách vở cẩn thận, giặt sạch và gấp gọn quần áo trước khi gửi tặng.",
      "2. Kĩ năng truyền thông kêu gọi: Nêu rõ mục đích, danh mục đồ cần nhận và thời gian tiếp nhận quyên góp.",
      "3. Công khai danh sách ủng hộ trên bảng tin của lớp học."
    ],
    practice: "Tham gia phong trào 'Tủ sách yêu thương': Quyên góp sách truyện cũ còn tốt để gửi tặng điểm trường vùng cao.",
    evaluation: "Đạt: Biết cách lập kế hoạch thiện nguyện nhỏ, thể hiện tinh thần sẻ chia và bảo đảm tính trung thực, minh bạch.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="460" height="80" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <circle cx="25" cy="20" r="16" fill="#d1fae5"/><text x="25" y="25" text-anchor="middle" font-size="14">🔍</text>
        <text x="25" y="52" text-anchor="middle" font-size="8" font-bold fill="#065f46">1. Nhu cầu thật</text>
      </g>
      <path d="M 120 45 L 145 45" stroke="#34d399" stroke-width="2"/>
      <g transform="translate(155, 25)">
        <circle cx="25" cy="20" r="16" fill="#d1fae5"/><text x="25" y="25" text-anchor="middle" font-size="14">📋</text>
        <text x="25" y="52" text-anchor="middle" font-size="8" font-bold fill="#065f46">2. Lập kế hoạch</text>
      </g>
      <path d="M 230 45 L 255 45" stroke="#34d399" stroke-width="2"/>
      <g transform="translate(265, 25)">
        <circle cx="25" cy="20" r="16" fill="#d1fae5"/><text x="25" y="25" text-anchor="middle" font-size="14">📦</text>
        <text x="25" y="52" text-anchor="middle" font-size="8" font-bold fill="#065f46">3. Quyên góp sạch</text>
      </g>
      <path d="M 340 45 L 365 45" stroke="#34d399" stroke-width="2"/>
      <g transform="translate(375, 25)">
        <circle cx="25" cy="20" r="16" fill="#d1fae5"/><text x="25" y="25" text-anchor="middle" font-size="14">🤝</text>
        <text x="25" y="52" text-anchor="middle" font-size="8" font-bold fill="#065f46">4. Trao tận tay</text>
      </g>
    </svg>`,
    quiz: {
      q: "Khi tham gia quyên góp quần áo ủng hộ các bạn học sinh vùng bị bão lũ, tiêu chuẩn quan trọng nhất là:",
      options: ["(Recommended) Quần áo còn lành lặn, sạch sẽ, được giặt phơi và gấp gọn gàng", "Quần áo rách nát, ố bẩn không dùng được nữa thì đem cho", "Chỉ quyên góp đồ hiệu thật đắt tiền", "Bỏ tất cả quần áo lộn xộn vào bao tải rách"],
      ans: 0,
      expl: "'Của cho không bằng cách cho', đồ dùng thiện nguyện sạch sẽ, lành lặn thể hiện sự tôn trọng chân thành tới người nhận."
    }
  },

  // ==================== CHỦ ĐỀ 7: EM VỚI THIÊN NHIÊN VÀ MÔI TRƯỜNG ====================
  {
    topicId: 7,
    id: "hdtn-7-1",
    num: "1",
    title: "Cảnh quan thiên nhiên quê hương tôi",
    desc: "Khám phá danh lam thắng cảnh địa phương, nhận diện nguy cơ ô nhiễm và các hành động bảo tồn thiết thực.",
    keyPoints: [
      "Cảnh quan thiên nhiên (núi non, sông hồ, bãi biển, rừng ngập mặn) tạo nên vẻ đẹp quê hương, có giá trị sinh thái, du lịch và văn hóa.",
      "Thực trạng và nguy cơ: Rác thải nhựa du lịch, ô nhiễm nguồn nước, khai thác cát trái phép, phá rừng phòng hộ làm xói mòn đất.",
      "Hành động bảo tồn thiết thực: Không vứt rác bừa bãi khi đi tham quan, tham gia trồng cây xanh, tuyên truyền du lịch xanh không rác thải nhựa.",
      "Thiết kế sản phẩm truyền thông: Vẽ tranh cổ động, làm video ngắn giới thiệu cảnh đẹp quê hương và lời kêu gọi bảo vệ môi trường."
    ],
    skills: [
      "1. Thực hiện nguyên tắc 'Không để lại gì ngoài những dấu chân, không lấy đi gì ngoài những bức ảnh'.",
      "2. Phân loại rác hữu cơ và rác vô cơ khi cắm trại, dã ngoại ngoài thiên nhiên.",
      "3. Kịp thời báo cho người lớn khi phát hiện hành vi chặt phá cây xanh hoặc xả thải trái phép."
    ],
    practice: "Thiết kế một tấm thiệp hoặc bài viết ngắn giới thiệu về một danh lam thắng cảnh ở địa phương em.",
    evaluation: "Đạt: Hiểu được giá trị cảnh quan quê hương và có hành vi bảo vệ môi trường trong sinh hoạt hàng ngày.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="210" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="130" y="38" text-anchor="middle" font-size="10" font-bold fill="#047857">GIÁ TRỊ CẢNH QUAN</text>
      <text x="130" y="58" text-anchor="middle" font-size="8.5" fill="#065f46">• Cân bằng sinh thái &amp; Đa dạng sinh học</text>
      <text x="130" y="73" text-anchor="middle" font-size="8.5" fill="#065f46">• Phát triển du lịch &amp; Tự hào quê hương</text>

      <rect x="265" y="15" width="210" height="80" rx="10" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5"/>
      <text x="370" y="38" text-anchor="middle" font-size="10" font-bold fill="#0369a1">HÀNH ĐỘNG BẢO TỒN</text>
      <text x="370" y="58" text-anchor="middle" font-size="8.5" fill="#0c4a6e">• Không xả rác nhựa tại điểm du lịch</text>
      <text x="370" y="73" text-anchor="middle" font-size="8.5" fill="#0c4a6e">• Trồng cây &amp; Tuyên truyền du lịch xanh</text>
    </svg>`,
    quiz: {
      q: "Khi đi dã ngoại tham quan một khu rừng sinh thái hoặc bãi biển đẹp, hành vi nào sau đây là văn minh nhất?",
      options: ["(Recommended) Thu gom toàn bộ rác thải của mình bỏ vào thùng rác hoặc mang về nhà xử lí", "Vứt vỏ chai nhựa và túi ni lông xuống suối hoặc bụi cây", "Bẻ các nhánh cây quý để mang về làm kỉ niệm", "Đốt lửa trại sát gốc cây cổ thụ và bỏ đi khi than chưa tắt"],
      ans: 0,
      expl: "Thu gom rác mang về là quy tắc ứng xử văn minh hàng đầu để giữ gìn nguyên vẹn vẻ đẹp thiên nhiên."
    }
  },
  {
    topicId: 7,
    id: "hdtn-7-2",
    num: "2",
    title: "Truyền thông phòng, giảm nhẹ rủi ro thiên tai ở địa phương",
    desc: "Tìm hiểu các loại thiên tai thường gặp (bão, lũ, lở đất, giông sét), kĩ năng ứng phó an toàn và lập kế hoạch truyền thông.",
    keyPoints: [
      "Các loại thiên tai phổ biến ở Việt Nam: Bão, áp thấp nhiệt đới, lũ lụt, lũ quét, sạt lở đất, giông lốc, sét đánh và hạn hán.",
      "Nguyên tắc vàng: Đặt an toàn tính mạng lên hàng đầu; chuẩn bị túi đồ khẩn cấp (đèn pin, nước uống, lương khô, thuốc men cá nhân, còi cứu hộ).",
      "Kĩ năng khi có bão lũ: Chằng chống nhà cửa, ngắt cầu dao điện, theo dõi bản tin dự báo thời tiết, sơ tán theo hướng dẫn của chính quyền.",
      "Tuyệt đối an toàn: Không lội qua ngầm tràn khi nước chảy xiết, không đứng dưới cây to hoặc cột điện khi có sấm sét, không chụp ảnh check-in bão lũ."
    ],
    skills: [
      "1. Nhớ các số điện thoại khẩn cấp: 112 (Tìm kiếm cứu nạn), 114 (Cứu hỏa/Cứu nạn), 115 (Cấp cứu).",
      "2. Kĩ năng tránh sét ngoài trời: Ngồi xổm nhón chân, chụm hai gót chân vào nhau, đầu cúi thấp, tránh xa đồ vật bằng kim loại.",
      "3. Thiết kế poster infographic hướng dẫn các bước sơ tán an toàn khi có thông báo lũ lụt."
    ],
    practice: "Thực hành diễn tập tình huống: Chuẩn bị chiếc 'Balo thoát hiểm gia đình' trong vòng 10 phút khi có lệnh sơ tán bão.",
    evaluation: "Đạt: Nắm rõ cách phòng tránh thiên tai tại địa phương và biết cách truyền thông thông điệp an toàn cho gia đình.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="130" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b"/>
      <text x="90" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#92400e">TRƯỚC THIÊN TAI</text>
      <text x="90" y="58" text-anchor="middle" font-size="8.5" fill="#78350f">• Nghe dự báo bão</text>
      <text x="90" y="73" text-anchor="middle" font-size="8.5" fill="#78350f">• Chuẩn bị túi khẩn cấp</text>

      <rect x="185" y="15" width="130" height="80" rx="10" fill="#fee2e2" stroke="#ef4444"/>
      <text x="250" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#991b1b">TRONG THIÊN TAI</text>
      <text x="250" y="58" text-anchor="middle" font-size="8.5" fill="#7f1d1d">• Không lội nước xiết</text>
      <text x="250" y="73" text-anchor="middle" font-size="8.5" fill="#7f1d1d">• Ngắt nguồn điện gia đình</text>

      <rect x="345" y="15" width="130" height="80" rx="10" fill="#ecfdf5" stroke="#10b981"/>
      <text x="410" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#047857">SAU THIÊN TAI</text>
      <text x="410" y="58" text-anchor="middle" font-size="8.5" fill="#065f46">• Cẩn thận rắn rết, dịch bệnh</text>
      <text x="410" y="73" text-anchor="middle" font-size="8.5" fill="#065f46">• Dọn vệ sinh nguồn nước</text>
    </svg>`,
    quiz: {
      q: "Khi đang trên đường đi học về mà gặp trời mưa to, sấm chớp dữ dội, hành động nào sau đây là AN TOÀN nhất?",
      options: ["(Recommended) Tìm nơi trú ẩn kiên cố an toàn (nhà dân, trường học); tránh xa gốc cây to và cột điện", "Đứng trú mưa ngay dưới gốc cây cổ thụ to nhất ven đường", "Tiếp tục che ô (dù) bằng kim loại đứng ở giữa bãi đất trống", "Lội qua con suối hoặc đường ngầm đang có nước chảy xiết"],
      ans: 0,
      expl: "Cây to và vật kim loại dễ dẫn sét đánh; ngầm tràn nước xiết có nguy cơ cuốn trôi rất nguy hiểm."
    }
  },

  // ==================== CHỦ ĐỀ 8: KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP ====================
  {
    topicId: 8,
    id: "hdtn-8-1",
    num: "1",
    title: "Nghề phổ biến trong xã hội hiện đại",
    desc: "Tìm hiểu các nhóm nghề xã hội (nông nghiệp công nghệ cao, kĩ thuật, y tế, giáo dục, IT), yêu cầu và thách thức.",
    keyPoints: [
      "Thế giới nghề nghiệp đa dạng và không ngừng biến đổi: Nông - lâm - thủy sản, Sản xuất công nghiệp, Y tế & Chăm sóc sức khỏe, Giáo dục, Công nghệ thông tin & Dịch vụ.",
      "Yêu cầu của nghề hiện đại: Không chỉ kiến thức chuyên môn mà đòi hỏi kĩ năng mềm (giao tiếp, làm việc nhóm, tư duy phản biện, ngoại ngữ và tin học).",
      "Khung tìm hiểu một nghề nghiệp: Tên nghề -> Công việc chính -> Phẩm chất & kĩ năng cần có -> Môi trường làm việc -> Cơ hội và thách thức phát triển.",
      "Nguồn thông tin đáng tin cậy: Cổng thông tin hướng nghiệp quốc gia, các trường đại học/cao đẳng nghề, phỏng vấn trực tiếp người đang làm nghề."
    ],
    skills: [
      "1. Kĩ năng phỏng vấn nghề nghiệp: Chuẩn bị bảng hỏi về thời gian làm việc, niềm vui và áp lực của nghề.",
      "2. Xây dựng 'Hồ sơ nghề nghiệp' (Career Profile) cho một nghề em yêu thích.",
      "3. Nhận diện tác động của công nghệ và trí tuệ nhân tạo (AI) đối với các nghề trong tương lai."
    ],
    practice: "Lập hồ sơ tìm hiểu về nghề Kĩ sư phần mềm (Lập trình viên) hoặc Bác sĩ đa khoa theo nhóm.",
    evaluation: "Đạt: Trình bày được đặc điểm, yêu cầu và thách thức của một số nghề phổ biến trong xã hội hiện đại.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="105" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="67" y="38" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">CÔNG NGHỆ</text>
      <text x="67" y="58" text-anchor="middle" font-size="14">💻</text>
      <text x="67" y="75" text-anchor="middle" font-size="7.5" fill="#1e3a8a">Lập trình, AI, An ninh mạng</text>

      <rect x="135" y="15" width="105" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e"/>
      <text x="187" y="38" text-anchor="middle" font-size="9" font-bold fill="#15803d">Y TẾ - CHĂM SÓC</text>
      <text x="187" y="58" text-anchor="middle" font-size="14">🩺</text>
      <text x="187" y="75" text-anchor="middle" font-size="7.5" fill="#14532d">Bác sĩ, Dược sĩ, Điều dưỡng</text>

      <rect x="255" y="15" width="105" height="80" rx="10" fill="#fefce8" stroke="#eab308"/>
      <text x="307" y="38" text-anchor="middle" font-size="9" font-bold fill="#a16207">KĨ THUẬT - CƠ KHÍ</text>
      <text x="307" y="58" text-anchor="middle" font-size="14">⚙️</text>
      <text x="307" y="75" text-anchor="middle" font-size="7.5" fill="#713f12">Tự động hóa, Điện tử, Xây dựng</text>

      <rect x="375" y="15" width="110" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899"/>
      <text x="430" y="38" text-anchor="middle" font-size="9" font-bold fill="#be185d">NÔNG NGHIỆP CỦA AI</text>
      <text x="430" y="58" text-anchor="middle" font-size="14">🌾</text>
      <text x="430" y="75" text-anchor="middle" font-size="7.5" fill="#831843">Nông nghiệp công nghệ cao</text>
    </svg>`,
    quiz: {
      q: "Yếu tố nào sau đây là quan trọng hàng đầu khi tìm hiểu về một ngành nghề trong xã hội hiện đại?",
      options: ["(Recommended) Yêu cầu về kiến thức, kĩ năng, phẩm chất đạo đức và điều kiện làm việc thực tế", "Chỉ cần biết nghề đó có được nổi tiếng trên mạng xã hội hay không", "Chỉ quan tâm đến mức lương đồn thổi mà bỏ qua năng lực cá nhân", "Chọn nghề chỉ vì thấy bạn bè xung quanh ai cũng chọn"],
      ans: 0,
      expl: "Tìm hiểu toàn diện về yêu cầu năng lực và môi trường làm việc giúp học sinh định hướng nghề nghiệp đúng đắn."
    }
  },

  // ==================== CHỦ ĐỀ 9: HIỂU BẢN THÂN – CHỌN ĐÚNG NGHỀ ====================
  {
    topicId: 9,
    id: "hdtn-9-1",
    num: "1",
    title: "Hứng thú nghề nghiệp",
    desc: "Khám phá sở thích, đam mê cá nhân đối chiếu với năng lực thực tế, xây dựng phiếu khảo sát hứng thú nghề.",
    keyPoints: [
      "Hứng thú nghề nghiệp là niềm yêu thích, say mê tương đối ổn định với một lĩnh vực hoạt động nhất định, tạo động lực học hỏi.",
      "Khám phá hứng thú qua: Các môn học yêu thích, hoạt động ngoại khóa say mê, việc làm tự nguyện khi rảnh rỗi và khả năng bộc lộ qua trải nghiệm.",
      "Nguyên tắc cân bằng chọn nghề: Chọn nghề là sự giao thoa giữa: 'Điều em thích' (Hứng thú) + 'Điều em làm giỏi' (Năng lực) + 'Điều xã hội cần' (Nhu cầu thị trường).",
      "Tránh sai lầm: Chọn nghề theo cảm tính nhất thời, theo trào lưu của bạn bè hoặc chỉ dựa vào sự hào nhoáng bên ngoài."
    ],
    skills: [
      "1. Làm bài trắc nghiệm sở thích nghề nghiệp theo các nhóm (Kĩ thuật, Nghiên cứu, Nghệ thuật, Xã hội, Quản lí, Nghiệp vụ).",
      "2. Lập danh sách 3 môn học em học tốt nhất và các nhóm ngành liên quan.",
      "3. Thiết kế bảng khảo sát hứng thú nghề nghiệp của học sinh trong lớp."
    ],
    practice: "Tự viết bài chia sẻ: 'Ước mơ nghề nghiệp tương lai của tôi và những phẩm chất tôi đang có'.",
    evaluation: "Đạt: Nhận biết được sở thích, hứng thú nghề nghiệp của bản thân và biết đối chiếu với năng lực học tập thực tế.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- 3 vòng tròn giao thoa IKIGAI / Định hướng nghề -->
      <circle cx="210" cy="55" r="42" fill="#dbeafe" fill-opacity="0.6" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="185" y="45" font-size="9" font-bold fill="#1e40af">ĐIỀU EM THÍCH</text>
      <text x="185" y="58" font-size="7.5" fill="#1e3a8a">(Hứng thú, đam mê)</text>

      <circle cx="290" cy="55" r="42" fill="#dcfce7" fill-opacity="0.6" stroke="#22c55e" stroke-width="1.5"/>
      <text x="315" y="45" font-size="9" font-bold fill="#15803d">ĐIỀU EM GIỎI</text>
      <text x="315" y="58" font-size="7.5" fill="#14532d">(Năng lực, thế mạnh)</text>

      <circle cx="250" cy="85" r="35" fill="#fef3c7" fill-opacity="0.6" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="250" y="105" text-anchor="middle" font-size="8.5" font-bold fill="#b45309">XÃ HỘI CẦN</text>

      <!-- Tâm điểm -->
      <circle cx="250" cy="62" r="10" fill="#ec4899"/>
      <text x="250" y="66" text-anchor="middle" font-size="8" font-bold fill="#fff">NGHỀ</text>
    </svg>`,
    quiz: {
      q: "Khi lựa chọn định hướng nghề nghiệp tương lai, yếu tố quan trọng nhất cần cân nhắc là:",
      options: ["(Recommended) Sự phù hợp giữa hứng thú, năng lực bản thân và nhu cầu của xã hội", "Chỉ chọn nghề có thu nhập cao nhất mà không quan tâm mình có làm được không", "Chọn theo số đông bạn bè trong lớp để cùng học cho vui", "Phó mặc hoàn toàn cho sự may rủi không cần tìm hiểu"],
      ans: 0,
      expl: "Nghề nghiệp phù hợp nhất là khi em vừa yêu thích, vừa có đủ năng lực làm tốt và xã hội có nhu cầu tuyển dụng."
    }
  },
  {
    topicId: 9,
    id: "hdtn-9-2",
    num: "2",
    title: "Rèn luyện, học tập theo định hướng nghề nghiệp",
    desc: "Xây dựng kế hoạch rèn luyện phẩm chất và năng lực, lựa chọn môn học thế mạnh và tôn trọng mọi người lao động.",
    keyPoints: [
      "Mọi nghề nghiệp chân chính trong xã hội đều đáng quý và đáng được tôn trọng như nhau.",
      "Các phẩm chất chung cần rèn luyện ngay từ ghế nhà trường: Chăm chỉ, trung thực, trách nhiệm, kiên trì, kỉ luật và khả năng tự học.",
      "Các năng lực then chốt: Năng lực số (tin học), giao tiếp, hợp tác nhóm, giải quyết vấn đề và thích ứng với thay đổi.",
      "Kế hoạch rèn luyện cá nhân: Chọn lĩnh vực nghề quan tâm -> Xác định yêu cầu cần rèn -> Lập thời gian biểu rèn luyện phẩm chất -> Đánh giá định kì hàng tháng."
    ],
    skills: [
      "1. Tập trung học tốt các môn học làm nền tảng cho ngành nghề mục tiêu (Toán, Tin, Ngoại ngữ, Khoa học tự nhiên/xã hội).",
      "2. Rèn luyện thói quen kiên trì: Không bỏ cuộc khi gặp một bài toán khó hoặc một dự án nhóm phức tạp.",
      "3. Thái độ biết ơn và tôn trọng đối với người lao động quét rác, bác bảo vệ, cô lao công trong trường."
    ],
    practice: "Lập 'Bản kế hoạch hành động rèn luyện bản thân theo định hướng nghề nghiệp tương lai' trong năm học lớp 8.",
    evaluation: "Đạt: Có kế hoạch học tập, rèn luyện phẩm chất cụ thể và luôn thể hiện thái độ tôn trọng mọi người lao động.",
    svg: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="130" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="90" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">1. PHẨM CHẤT</text>
      <text x="90" y="58" text-anchor="middle" font-size="8.5" fill="#1e3a8a">• Chăm chỉ, trung thực</text>
      <text x="90" y="73" text-anchor="middle" font-size="8.5" fill="#1e3a8a">• Trách nhiệm, kỉ luật</text>

      <rect x="185" y="15" width="130" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e"/>
      <text x="250" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#15803d">2. NĂNG LỰC</text>
      <text x="250" y="58" text-anchor="middle" font-size="8.5" fill="#14532d">• Tự học, làm việc nhóm</text>
      <text x="250" y="73" text-anchor="middle" font-size="8.5" fill="#14532d">• Ngoại ngữ, công nghệ</text>

      <rect x="345" y="15" width="130" height="80" rx="10" fill="#faf5ff" stroke="#a855f7"/>
      <text x="410" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#7e22ce">3. TÔN TRỌNG NGHỀ</text>
      <text x="410" y="58" text-anchor="middle" font-size="8.5" fill="#581c87">• Mọi nghề đều vinh quang</text>
      <text x="410" y="73" text-anchor="middle" font-size="8.5" fill="#581c87">• Trân trọng người lao động</text>
    </svg>`,
    quiz: {
      q: "Thái độ đúng đắn nhất của học sinh đối với các cô bác lao công, công nhân vệ sinh môi trường là:",
      options: ["(Recommended) Luôn lễ phép chào hỏi, biết ơn và giữ gìn vệ sinh chung để đỡ đần vất vả cho cô bác", "Xem thường vì cho rằng đó là công việc chân tay vất vả", "Cố tình xả rác bừa bãi vì nghĩ đã có người dọn", "Tránh xa và tỏ thái độ kì thị"],
      ans: 0,
      expl: "Mọi công việc lao động chân chính đều tạo ra giá trị cho xã hội và xứng đáng nhận được sự tôn trọng, biết ơn."
    }
  }
];

module.exports = { topicsData, lessonsData };
