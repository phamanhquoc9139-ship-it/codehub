// KHTN 7 - Part 4: Sinh học (Chương VIII: Cảm ứng, Chương IX: Sinh trưởng & phát triển, Chương X: Sinh sản)
// Bài 33 đến Bài 42

module.exports = [
  // ==================== BÀI 33 ====================
  {
    id: "bai-33",
    num: "Bài 33",
    chapter: "CHƯƠNG VIII: CẢM ỨNG Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 33. Cảm ứng ở sinh vật và tập tính ở động vật",
    pages: "SGK tr. 138–140",
    objective: "Nêu khái niệm cảm ứng ở sinh vật; các hình thức cảm ứng ở thực vật (hướng sáng, hướng nước, hướng tiếp xúc); phân biệt tập tính bẩm sinh và tập tính học được ở động vật.",
    mindmap: [
      { title: "CẢM ỨNG Ở THỰC VẬT", desc: "Phản ứng trước kích thích: Hướng sáng (thân cong về phía sáng), Hướng nước (rễ vươn tới nguồn ẩm), Hướng tiếp xúc (tua cuốn).", color: "#059669" },
      { title: "TẬP TÍNH BẨM SINH", desc: "Sinh ra đã có, di truyền từ bố mẹ, đặc trưng cho loài. Vd: Nhện chăng tơ, ong xây tổ, chim di cư, gà con theo mẹ.", color: "#2563eb" },
      { title: "TẬP TÍNH HỌC ĐƯỢC", desc: "Hình thành qua học tập và kinh nghiệm sống, không di truyền. Vd: Khỉ dùng gậy khều thức ăn, người dừng đèn đỏ.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm cảm ứng và các dạng cảm ứng ở thực vật",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Cảm ứng:</strong> Là khả năng cơ thể sinh vật tiếp nhận và phản ứng lại các kích thích từ môi trường (ánh sáng, nhiệt độ, nước, va chạm) để thích nghi và tồn tại.</li>
            <li><strong>Cảm ứng ở thực vật:</strong> Phản ứng diễn ra chậm, thường biểu hiện qua sự biến đổi hình thái sinh trưởng:
              <br>• <em>Hướng sáng:</em> Ngọn và thân cây cong về phía có nguồn ánh sáng.
              <br>• <em>Hướng nước & Hướng chất dinh dưỡng:</em> Rễ cây luôn vươn dài về phía có nguồn nước và phân bón màu mỡ.
              <br>• <em>Hướng tiếp xúc:</em> Tua cuốn của các cây thân leo (mướp, bầu, bí, đậu cove) khi chạm vào cọc rào sẽ quấn chặt quanh giá thể.
              <br>• <em>Ứng động không sinh trưởng:</em> Lá cây trinh nữ (xấu hổ) cụp nhanh lại khi bị chạm vào do sự thay đổi áp suất trương nước ở cuống lá.
            </li>
          </ul>
        `
      },
      {
        title: "2. Tập tính ở động vật: Bẩm sinh và Học được",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Tập tính</strong> là chuỗi phản ứng của động vật trả lời lại các kích thích từ môi trường bên trong hoặc bên ngoài, giúp động vật thích nghi, sinh tồn và phát triển nòi giống.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">Tập tính bẩm sinh:</strong>
              Sinh ra đã có sẵn, do gen di truyền từ đời trước quy định, mang tính bền vững và đặc trưng cho loài.
              <br><em>Ví dụ:</em> Ve sầu kêu vào mùa hè, nhện giăng lưới tơ bắt mồi, chim mẹ ấp trứng và mớm mồi cho con non, ong làm tổ hình lục giác.
            </div>
            <div class="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">Tập tính học được:</strong>
              Được hình thành trong quá trình sống thông qua học tập, rèn luyện và tích lũy kinh nghiệm cá nhân; có thể thay đổi linh hoạt.
              <br><em>Ví dụ:</em> Chuột nghe tiếng mèo chạy trốn; người tham gia giao thông thấy đèn đỏ thì dừng lại; cá heo làm xiếc theo lệnh còi huấn luyện viên.
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-sun"></i> Thí Nghiệm Tính Hướng Sáng Của Ngọn Cây & Hướng Nước Của Rễ</span>
          <span class="text-[10px] text-gray-400">Sinh học 7</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 120" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Box with window on left -->
            <rect x="60" y="20" width="130" height="90" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
            <rect x="60" y="30" width="10" height="25" fill="#facc15"/>
            <!-- Plant bending towards window -->
            <path d="M 125 100 Q 125 65 80 45" fill="none" stroke="#22c55e" stroke-width="3"/>
            <circle cx="75" cy="42" r="6" fill="#16a34a"/>
            <circle cx="85" cy="40" r="5" fill="#16a34a"/>
            <text x="125" y="118" fill="#cbd5e1" font-size="9" text-anchor="middle">HƯỚNG SÁNG (Ngọn cong về ánh sáng)</text>
            <!-- Root bending towards water drop -->
            <g transform="translate(240, 20)">
              <rect x="20" y="0" width="140" height="90" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
              <circle cx="130" cy="50" r="8" fill="#38bdf8"/>
              <text x="130" y="40" fill="#38bdf8" font-size="8" text-anchor="middle">Nguồn ẩm</text>
              <path d="M 50 15 Q 60 50 115 50" fill="none" stroke="#d97706" stroke-width="2.5"/>
              <text x="90" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">HƯỚNG NƯỚC (Rễ vươn tới nguồn ẩm)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Hành động nào sau đây của động vật là tập tính học được?",
        options: [
          "Ong thợ xây các ô tổ hình lục giác bằng sáp",
          "Mèo mẹ sinh con ra biết liếm lông và cho con bú",
          "Khỉ biết dùng hòn đá để đập vỡ vỏ hạt cứng lấy nhân ăn",
          "Nhện con vừa nở ra đã biết chăng lưới bắt mồi"
        ],
        answer: 2,
        explain: "Khỉ dùng đá đập hạt là tập tính thông minh học được qua quá trình quan sát, bắt chước và thử sai trong tự nhiên."
      },
      {
        question: "Hiện tượng lá cây trinh nữ (cây xấu hổ) cụp nhanh lại khi có giọt mưa hay tay người chạm vào thuộc dạng cảm ứng nào?",
        options: [
          "Tính hướng sáng của chồi ngọn",
          "Ứng động sức trương nước do va chạm cơ học",
          "Tính hướng đất của rễ cây",
          "Tập tính học được của thực vật"
        ],
        answer: 1,
        explain: "Khi chạm vào, các tế bào thể gối ở gốc cuống lá trinh nữ bị mất nước đột ngột làm cuống lá cụp nhanh xuống."
      }
    ],
    checklist: [
      "Định nghĩa được cảm ứng ở sinh vật và tập tính ở động vật.",
      "Phân biệt được tập tính bẩm sinh và tập tính học được kèm ví dụ minh họa.",
      "Mô tả được các dạng cảm ứng hướng sáng, hướng nước, hướng tiếp xúc ở cây."
    ]
  },

  // ==================== BÀI 34 ====================
  {
    id: "bai-34",
    num: "Bài 34",
    chapter: "CHƯƠNG VIII: CẢM ỨNG Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 34. Vận dụng cảm ứng vào thực tiễn",
    pages: "SGK tr. 141–144",
    objective: "Vận dụng tính cảm ứng của thực vật trong trồng trọt (làm giàn leo, thắp đèn, tưới bón); khai thác tập tính động vật trong chăn nuôi và phòng trừ sâu hại; hình thành thói quen tốt trong học tập.",
    mindmap: [
      { title: "ỨNG DỤNG TRỒNG TRỌT", desc: "Làm giàn leo cho mướp, bầu, bí; thắp đèn kích thích cây quang hợp/ra hoa; bón phân sâu dưới rễ.", color: "#059669" },
      { title: "CHĂN NUÔI & DIỆT SÂU", desc: "Tập tính học được: Gõ kẻng gọi trâu bò về chuồng, bật đèn bắt bướm rầy đêm, làm bù nhìn xua chim.", color: "#2563eb" },
      { title: "RÈN LUYỆN BẢN THÂN", desc: "Thành lập phản xạ có điều kiện: Giờ giấc học tập, đọc sách, tập thể dục đều đặn hình thành thói quen tích cực.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Vận dụng cảm ứng của thực vật trong nông nghiệp",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Làm giàn và cọc chống:</strong> Khai thác <em>tính hướng tiếp xúc</em> của các cây thân leo (bầu, bí, mướp, dưa chuột, chanh leo, hồ tiêu) giúp cây vươn cao, đón nhiều ánh sáng và cho năng suất quả cao.</li>
            <li><strong>Điều khiển ánh sáng:</strong> Bố trí mật độ trồng phù hợp để tránh che bóng; thắp đèn sợi đốt cho thanh long kích thích ra hoa trái vụ; thắp đèn cúc để kiểm soát thời điểm nở hoa đón Tết.</li>
            <li><strong>Khai thác tính hướng nước và hướng hoá:</strong> Tưới nước vào rãnh đất và bón phân lót sâu dưới tầng đất mặt để kích thích rễ cây ăn sâu và lan rộng, giúp cây bám chắc, chống đổ ngã.</li>
          </ul>
        `
      },
      {
        title: "2. Vận dụng tập tính động vật và rèn luyện thói quen học tập",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Chăn nuôi gia súc, gia cầm:</strong> Huấn luyện thú nuôi bằng hiệu lệnh lặp lại kết hợp cho ăn (gõ mõ gọi lợn ăn, bấm chuông gọi cá nổi lên ăn, huấn luyện chó chăn cừu).</li>
            <li><strong>Phòng trừ sâu bọ hại mùa màng:</strong> Khai thác tập tính hướng sáng của nhiều loài côn trùng gây hại bằng cách <em>dùng bẫy đèn</em> vào ban đêm để dẫn dụ bướm sâu đục thân, rầy nâu rơi vào bẫy; đặt bù nhìn rơm xua đuổi chim ăn hạt.</li>
            <li><strong>Rèn luyện bản thân:</strong> Não bộ con người hình thành thói quen qua sự lặp đi lặp lại. Duy trì thời gian biểu học bài đúng giờ, dậy sớm tập thể dục, đọc sách mỗi ngày sẽ biến hành động có ý thức thành thói quen tốt suốt đời.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-lightbulb"></i> Các Biện Pháp Vận Dụng Cảm Ứng & Tập Tính Vào Sản Xuất</span>
          <span class="text-[10px] text-gray-400">Trồng trọt & Chăn nuôi</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="87" y="42" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">LÀM GIÀN LEO</text>
            <text x="87" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Bầu, bí, mướp tiếp xúc</text>

            <rect x="175" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#f59e0b"/>
            <text x="242" y="42" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">THẮP ĐÈN ĐÊM</text>
            <text x="242" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Thanh long ra hoa trái vụ</text>

            <rect x="330" y="20" width="145" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="402" y="42" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">BẪY ĐÈN DIỆT BƯỚM</text>
            <text x="402" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tập tính hướng sáng côn trùng</text>

            <rect x="495" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#a855f7"/>
            <text x="562" y="42" fill="#d8b4fe" font-size="10" font-weight="bold" text-anchor="middle">HIỆU LỆNH GÕ MÕ</text>
            <text x="562" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tập tính gọi cá/trâu bò ăn</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Biện pháp làm giàn cho cây mướp, bầu, bí leo lên trong vườn nhà được ứng dụng dựa trên hiện tượng cảm ứng nào?",
        options: ["Tính hướng nước", "Tính hướng tiếp xúc", "Tính hướng hóa", "Ứng động nở hoa"],
        answer: 1,
        explain: "Cây thân leo có các tua cuốn hướng tiếp xúc bám chặt vào giàn để vươn cao đón nhận ánh sáng mặt trời."
      },
      {
        question: "Người nông dân dùng bẫy đèn thắp sáng trên ruộng lúa vào ban đêm nhằm mục đích gì?",
        options: [
          "Để lúa quang hợp vào ban đêm",
          "Lợi dụng tập tính hướng sáng của sâu bướm hại lúa để bắt và tiêu diệt chúng",
          "Để soi đường đi thăm đồng",
          "Để xua đuổi chuột"
        ],
        answer: 1,
        explain: "Nhiều loài bướm sâu hại lúa có tập tính hướng sáng mạnh vào ban đêm, dùng bẫy đèn giúp bắt sâu hại hiệu quả."
      }
    ],
    checklist: [
      "Kể tên ít nhất 3 ứng dụng của cảm ứng thực vật trong kĩ thuật trồng trọt.",
      "Giải thích được nguyên lý huấn luyện tập tính có điều kiện ở vật nuôi.",
      "Xây dựng kế hoạch hình thành 1 thói quen học tập tốt cho bản thân."
    ]
  },

  // ==================== BÀI 35 ====================
  {
    id: "bai-35",
    num: "Bài 35",
    chapter: "CHƯƠNG VIII: CẢM ỨNG Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 35. Thực hành: Cảm ứng ở sinh vật",
    pages: "SGK tr. 145–147",
    objective: "Thiết kế và thực hiện thí nghiệm chứng minh tính hướng sáng và tính hướng nước ở cây đậu; quan sát và ghi chép tập tính động vật (kiếm ăn, chăm sóc con, tự vệ).",
    mindmap: [
      { title: "TN HƯỚNG SÁNG", desc: "Hộp carton khoét lỗ một bên -> đặt chậu cây đậu mầm -> sau 3-5 ngày thân cây cong hẳn về phía lỗ khoét.", color: "#059669" },
      { title: "TN HƯỚNG NƯỚC", desc: "Chậu đất gieo hạt đậu, đặt bình nước rỉ chậm một phía -> sau vài ngày nhổ cây thấy rễ uốn cong về phía rỉ nước.", color: "#2563eb" },
      { title: "GHI NHẬN TẬP TÍNH", desc: "Quan sát video/thực địa: Nhận diện tác nhân kích thích -> Chuỗi hành vi phản ứng -> Ý nghĩa thích nghi sinh tồn.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Thí nghiệm chứng minh tính hướng sáng và hướng nước",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Thí nghiệm hướng sáng:</strong>
              <br>• Gieo các hạt đỗ xanh vào hai chậu đất ẩm A và B.
              <br>• Dùng hộp carton kín chụp lên chậu A, trên thành hộp khoét một lỗ nhỏ phía cạnh bên; chậu B chụp hộp khoét lỗ trên đỉnh nắp (đối chứng).
              <br>• Sau 3 - 5 ngày: Cây ở chậu A có <strong>thân và ngọn uốn cong rõ rệt về phía lỗ khoét bên hông</strong> để đón ánh sáng; cây ở chậu B mọc thẳng đứng.
            </li>
            <li><strong>Thí nghiệm hướng nước:</strong>
              <br>• Trồng cây đậu vào chậu đất có đặt một bình gốm rỉ nước rỉ rả ở một bên thành chậu.
              <br>• Sau 5 ngày đào nhẹ bộ rễ quan sát: <strong>Hệ thống rễ cây uốn cong và phân nhánh dày đặc về phía bình nước rỉ</strong> $\\rightarrow$ Chứng minh tính hướng nước dương của rễ.
            </li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-vial"></i> Mô Hình Hộp Carton Thí Nghiệm Tính Hướng Sáng Ở Cây Đậu</span>
          <span class="text-[10px] text-gray-400">Lỗ hông vs Lỗ đỉnh</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 120" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(60, 15)">
              <rect x="0" y="0" width="120" height="90" fill="#334155" stroke="#94a3b8"/>
              <rect x="0" y="25" width="8" height="20" fill="#facc15"/>
              <path d="M 60 85 Q 60 55 15 35" fill="none" stroke="#22c55e" stroke-width="3"/>
              <circle cx="10" cy="32" r="5" fill="#15803d"/>
              <text x="60" y="105" fill="#fde68a" font-size="9" text-anchor="middle">Chậu A (Lỗ khoét bên)</text>
            </g>
            <g transform="translate(260, 15)">
              <rect x="0" y="0" width="120" height="90" fill="#334155" stroke="#94a3b8"/>
              <rect x="50" y="0" width="20" height="8" fill="#facc15"/>
              <line x1="60" y1="85" x2="60" y2="15" stroke="#22c55e" stroke-width="3"/>
              <circle cx="60" cy="12" r="5" fill="#15803d"/>
              <text x="60" y="105" fill="#cbd5e1" font-size="9" text-anchor="middle">Chậu B (Lỗ đỉnh trên)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Trong thí nghiệm chứng minh tính hướng sáng, tại sao chúng ta không được xoay chậu cây trong suốt quá trình theo dõi?",
        options: [
          "Vì xoay chậu sẽ làm đổ đất ra ngoài",
          "Vì xoay chậu sẽ làm đổi hướng chiếu sáng liên tục, làm sai lệch kết quả thí nghiệm",
          "Vì rễ cây sẽ bị đứt",
          "Vì hạt đỗ sẽ không nảy mầm"
        ],
        answer: 1,
        explain: "Xoay chậu sẽ làm thay đổi hướng tới của ánh sáng, khiến ngọn cây không thể hiện rõ sự uốn cong về một phía."
      },
      {
        question: "Kết quả thí nghiệm nào chứng minh rễ cây có tính hướng nước dương?",
        options: [
          "Rễ cây mọc thẳng đứng xuống đáy chậu",
          "Rễ cây uốn cong về phía có nguồn nước rỉ ẩm",
          "Rễ cây mọc trồi lên khỏi mặt đất",
          "Rễ cây co ngắn lại"
        ],
        answer: 1,
        explain: "Rễ cây uốn cong về phía nguồn ẩm chứng minh tính hướng nước giúp cây chủ động tìm kiếm nguồn nước sinh tồn."
      }
    ],
    checklist: [
      "Tự thiết kế được hộp thí nghiệm hướng sáng với chậu đối chứng.",
      "Mô tả được thao tác nhổ cây an toàn kiểm tra tính hướng nước của rễ.",
      "Viết báo cáo thực hành mô tả hiện tượng và giải thích cơ chế sinh học."
    ]
  },

  // ==================== BÀI 36 ====================
  {
    id: "bai-36",
    num: "Bài 36",
    chapter: "CHƯƠNG IX: SINH TRƯỞNG & PHÁT TRIỂN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 36. Khái quát sinh trưởng và phát triển ở sinh vật",
    pages: "SGK tr. 148–150",
    objective: "Phân biệt sinh trưởng (tăng kích thước/khối lượng) và phát triển (phân hóa chức năng, hình thành cơ quan); vòng đời sinh vật; vai trò của mô phân sinh đỉnh và mô phân sinh bên ở thực vật.",
    mindmap: [
      { title: "SINH TRƯỞNG", desc: "Sự tăng lên về kích thước và khối lượng của cơ thể do sự tăng số lượng và kích thước tế bào.", color: "#059669" },
      { title: "PHÁT TRIỂN", desc: "Gồm sinh trưởng, phân hoá tế bào, phát sinh hình thái và hình thành các cơ quan mới (ra hoa, tạo quả).", color: "#2563eb" },
      { title: "MÔ PHÂN SINH", desc: "Mô phân sinh đỉnh (ngọn thân, chóp rễ) làm cây dài ra; Mô phân sinh bên làm thân cây to ra (tăng đường kính).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Phân biệt Sinh trưởng và Phát triển",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 text-sm block mb-1">SINH TRƯỞNG</strong>
              <p class="text-gray-700 dark:text-gray-300">Là sự <strong>tăng lên về kích thước và khối lượng</strong> của cơ thể sinh vật do tăng số lượng và kích thước của các tế bào.</p>
              <p class="text-gray-600 dark:text-gray-400 mt-1"><em>Ví dụ:</em> Cây ngô cao thêm 20 cm, em bé tăng thêm 2 kg, con nòng nọc lớn thêm 1 cm.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 text-sm block mb-1">PHÁT TRIỂN</strong>
              <p class="text-gray-700 dark:text-gray-300">Bao gồm <strong>sinh trưởng, phân hoá tế bào, phát sinh hình thái cơ quan</strong> và tạo nên các chức năng sinh lí mới.</p>
              <p class="text-gray-600 dark:text-gray-400 mt-1"><em>Ví dụ:</em> Hạt nảy mầm thành cây con, cây bưởi ra hoa kết trái, nòng nọc rụng đuôi mọc 4 chân thành ếch.</p>
            </div>
          </div>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            <strong>Mối quan hệ:</strong> Sinh trưởng và phát triển là hai quá trình đan xen mật thiết trong <strong>vòng đời</strong> của sinh vật. Sinh trưởng là tiền đề cơ sở vật chất cho phát triển; phát triển lại làm thay đổi tốc độ sinh trưởng.
          </p>
        `
      },
      {
        title: "2. Mô phân sinh ở thực vật",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Mô phân sinh:</strong> Là nhóm các tế bào chưa phân hoá, có khả năng phân chia nguyên phân liên tục để tạo ra các tế bào mới cho cây.</li>
            <li><strong>Mô phân sinh đỉnh:</strong> Nằm ở đỉnh ngọn thân, cành và chóp rễ, giúp <strong>thân và rễ cây dài ra</strong> về chiều cao và chiều sâu.</li>
            <li><strong>Mô phân sinh bên:</strong> Nằm ở phần vỏ và trụ mạch của thân, cành (ở cây hai lá mầm), giúp <strong>thân cây to ra về bề ngang (tăng đường kính)</strong>.</li>
            <li><strong>Mô phân sinh lóng:</strong> Có ở cây một lá mầm (như tre, nứa, mía) giúp các dóng thân dài nhanh chóng.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-chart-simple"></i> Vị Trí Mô Phân Sinh Đỉnh (Dài Ra) Và Mô Phân Sinh Bên (To Ra) Ở Thực Vật</span>
          <span class="text-[10px] text-gray-400">Sinh trưởng thực vật</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 350 140" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Stem -->
            <rect x="150" y="30" width="50" height="90" fill="#1e293b" stroke="#16a34a" stroke-width="2"/>
            <!-- Apical meristem (top) -->
            <polygon points="175,10 160,30 190,30" fill="#ef4444"/>
            <text x="200" y="22" fill="#fda4af" font-size="9" font-weight="bold">&larr; Mô phân sinh đỉnh (Thân cao lên)</text>
            <!-- Lateral meristem (sides) -->
            <line x1="155" y1="35" x2="155" y2="115" stroke="#38bdf8" stroke-width="3" stroke-dasharray="2"/>
            <line x1="195" y1="35" x2="195" y2="115" stroke="#38bdf8" stroke-width="3" stroke-dasharray="2"/>
            <text x="140" y="75" fill="#7dd3fc" font-size="8.5" font-weight="bold" text-anchor="end">Mô phân sinh bên &rarr;</text>
            <text x="140" y="88" fill="#cbd5e1" font-size="7.5" text-anchor="end">(Tăng đường kính)</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Hiện tượng nào sau đây là biểu hiện của sự PHÁT TRIỂN ở sinh vật?",
        options: [
          "Cây ngô tăng chiều cao từ 50 cm lên 120 cm",
          "Con gà con tăng cân nặng từ 100g lên 500g",
          "Cây cam bắt đầu ra hoa và hình thành quả non",
          "Số lượng tế bào da tăng lên làm vết thương mau lành"
        ],
        answer: 2,
        explain: "Cây ra hoa kết quả là sự phát sinh hình thái cơ quan sinh sản mới, biểu hiện của sự phát triển sinh học."
      },
      {
        question: "Bộ phận nào giúp cây bạch đàn hoặc cây xà cừ thân gỗ to ra về bề ngang (tăng đường kính)?",
        options: ["Mô phân sinh đỉnh chồi", "Mô phân sinh bên", "Mô phân sinh đỉnh rễ", "Khí khổng"],
        answer: 1,
        explain: "Mô phân sinh bên phân chia tạo ra các lớp vỏ và mạch gỗ thứ cấp giúp thân cây to ra theo thời gian."
      }
    ],
    checklist: [
      "Phân biệt rõ ràng giữa sinh trưởng và phát triển kèm ví dụ thực tế.",
      "Vẽ sơ đồ vòng đời của một loài sinh vật (cây có hoa, ếch nhái hoặc bướm).",
      "Chỉ ra được vị trí và vai trò của mô phân sinh đỉnh và mô phân sinh bên."
    ]
  },

  // ==================== BÀI 37 ====================
  {
    id: "bai-37",
    num: "Bài 37",
    chapter: "CHƯƠNG IX: SINH TRƯỞNG & PHÁT TRIỂN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 37. Ứng dụng sinh trưởng và phát triển trong thực tiễn",
    pages: "SGK tr. 151–155",
    objective: "Phân tích các nhân tố môi trường tác động đến sinh trưởng; ứng dụng chất điều hòa sinh trưởng, tỉa cành, bấm ngọn; tiêu diệt sâu hại dựa vào các giai đoạn trong vòng đời.",
    mindmap: [
      { title: "CÁC NHÂN TỐ ẢNH HƯỞNG", desc: "Nhiệt độ, Ánh sáng, Nước, Dinh dưỡng và Hormone điều hòa bên trong cơ thể.", color: "#059669" },
      { title: "ỨNG DỤNG NÔNG NGHIỆP", desc: "Bấm ngọn kích thích phân cành (cà chua, bầu); Tỉa cành lấy gỗ thẳng; Dùng chất kích thích ra rễ, ra hoa.", color: "#2563eb" },
      { title: "DIỆT SÂU THEO VÒNG ĐỜI", desc: "Tiêu diệt sâu bướm ở giai đoạn sâu non (giai đoạn phá hoại mạnh nhất); diệt bọ gậy/loăng quăng để trừ muỗi.", color: "#dc2626" }
    ],
    sections: [
      {
        title: "1. Các nhân tố ảnh hưởng đến sinh trưởng và phát triển",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Nhiệt độ:</strong> Mỗi loài có một ngưỡng nhiệt độ tối ưu. Động vật biến nhiệt (ếch, thằn lằn, cá) phụ thuộc lớn vào môi trường; động vật hằng nhiệt (chim, thú) tiêu tốn năng lượng để duy trì thân nhiệt ổn định.</li>
            <li><strong>Ánh sáng:</strong> Quyết định quang hợp ở thực vật và điều tiết thời điểm ra hoa. Ở động vật, ánh sáng giúp tổng hợp vitamin D chống còi xương và điều hòa nhịp sinh học.</li>
            <li><strong>Nước & Dinh dưỡng:</strong> Thiếu nước hoặc thiếu hụt protein, vitamin, khoáng chất làm sinh vật còi cọc, chậm lớn, suy giảm miễn dịch.</li>
          </ul>
        `
      },
      {
        title: "2. Ứng dụng trong trồng trọt và phòng trừ sinh vật hại",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Bấm ngọn, tỉa cành:</strong>
              <br>• Cây lấy quả, ngọn (bầu, bí, mướp, chè): <em>Bấm ngọn chính</em> để kích thích chồi nách phát triển, tăng số cành nhánh và sai quả.
              <br>• Cây lấy gỗ, lấy sợi (bạch đàn, đay): <em>Tỉa bỏ cành nhánh bên</em> để dồn chất dinh dưỡng phát triển thân chính thẳng dài.
            </li>
            <li><strong>Ứng dụng chất điều hoà sinh trưởng:</strong> Dùng hormone kích thích ra rễ nhanh khi giâm cành, kích thích ra hoa đồng loạt, làm quả chín sớm hoặc kìm hãm nảy mầm củ khoai tây trong kho.</li>
            <li><strong>Tiêu diệt sâu hại theo vòng đời:</strong>
              <br>• <em>Vòng đời của muỗi:</em> Trứng $\\rightarrow$ Bọ gậy (loăng quăng) $\\rightarrow$ Nhộng $\\rightarrow$ Muỗi trưởng thành. Tiêu diệt dễ nhất ở giai đoạn <strong>bọ gậy</strong> (thả cá bảy màu vào bể nước, lật úp các chum vại đọng nước mưa).
              <br>• <em>Vòng đời sâu bướm:</em> Giai đoạn <strong>sâu non</strong> ăn lá phá hoại mùa màng mạnh nhất $\\rightarrow$ cần tập trung phun trừ sinh học ở giai đoạn này.
            </li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-shield-virus"></i> Phòng Trừ Dịch Bệnh: Tiêu Diệt Bọ Gậy Cắt Đứt Vòng Đời Của Muỗi</span>
          <span class="text-[10px] text-gray-400">Vòng đời muỗi</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#64748b"/>
            <text x="85" y="42" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">1. TRỨNG MUỖI</text>
            <text x="85" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Đẻ trên mặt nước đọng</text>

            <path d="M 150 45 L 180 45" stroke="#ef4444" stroke-width="2"/>

            <rect x="180" y="20" width="150" height="50" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
            <text x="255" y="42" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">2. BỌ GẬY (LOĂNG QUĂNG)</text>
            <text x="255" y="58" fill="#fecaca" font-size="9" font-weight="bold" text-anchor="middle">TIÊU DIỆT TẬN GỐC!</text>

            <path d="M 330 45 L 360 45" stroke="#64748b" stroke-width="2"/>

            <rect x="360" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#64748b"/>
            <text x="425" y="42" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">3. CON NHỘNG</text>
            <text x="425" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Biến đổi hình thái</text>

            <path d="M 490 45 L 520 45" stroke="#64748b" stroke-width="2"/>

            <rect x="520" y="20" width="115" height="50" rx="8" fill="#1e293b" stroke="#64748b"/>
            <text x="577" y="42" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">4. MUỖI TRƯỞNG THÀNH</text>
            <text x="577" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Hút máu truyền bệnh</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Muốn cây cà chua hoặc cây mướp phân nhiều cành nhánh để cho nhiều quả, người trồng vườn thường áp dụng biện pháp kĩ thuật nào?",
        options: ["Tỉa bỏ toàn bộ lá dưới gốc", "Bấm ngọn chính của cây", "Tỉa bỏ hết các chồi nách", "Cắt tỉa bộ rễ"],
        answer: 1,
        explain: "Bấm ngọn chính làm mất ưu thế ngọn, giải phóng các chồi nách phát triển thành nhiều cành nhánh sai hoa trái."
      },
      {
        question: "Trong vòng đời của muỗi vằn truyền bệnh sốt xuất huyết, giai đoạn nào dễ tiêu diệt nhất để cắt đứt nguồn lây bệnh?",
        options: ["Giai đoạn trứng", "Giai đoạn bọ gậy (loăng quăng)", "Giai đoạn nhộng trong vỏ", "Giai đoạn muỗi bay trên không"],
        answer: 1,
        explain: "Giai đoạn bọ gậy sống trong các vũng nước đọng dễ bị tiêu diệt triệt để bằng cách thả cá hoặc đậy kín dụng cụ chứa nước."
      }
    ],
    checklist: [
      "Giải thích được nguyên lý kĩ thuật bấm ngọn và tỉa cành ở cây trồng.",
      "Nêu được các ứng dụng của hormone điều hòa sinh trưởng trong nông nghiệp.",
      "Xác định được giai đoạn dễ tác động nhất để tiêu diệt sâu bệnh hại mùa màng."
    ]
  },

  // ==================== BÀI 38 ====================
  {
    id: "bai-38",
    num: "Bài 38",
    chapter: "CHƯƠNG IX: SINH TRƯỞNG & PHÁT TRIỂN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 38. Thực hành: Quan sát sinh trưởng và phát triển ở sinh vật",
    pages: "SGK tr. 156–157",
    objective: "Gieo hạt đậu, đo đạc và ghi nhận sự tăng trưởng chiều cao cây, kích thước lá theo ngày; quan sát sơ đồ vòng đời của một số động vật (ếch, bướm, gà).",
    mindmap: [
      { title: "THEO DÕI CÂY ĐẬU", desc: "Gieo hạt đỗ -> Đo chiều cao thân (cm), đếm số lá, đo kích thước phiến lá từ ngày 1 đến ngày 7.", color: "#059669" },
      { title: "VÒNG ĐỜI BIẾN THÁI", desc: "Ếch: Trứng -> Nòng nọc (thở mang) -> Ếch con (mọc chân, rụng đuôi) -> Ếch trưởng thành (thở phổi + da).", color: "#2563eb" },
      { title: "VÒNG ĐỜI KHÔNG BIẾN THÁI", desc: "Gà: Trứng có phôi -> Ấp nở ra gà con -> Gà trưởng thành (hình thái gà con tương tự gà lớn).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Thực hành theo dõi sinh trưởng của cây đậu mầm",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Ngâm hạt đậu trong nước ấm ($35 - 40^\\circ\\text{C}$) khoảng 6 giờ rồi đem gieo vào chậu đất ẩm.</li>
            <li>Đặt chậu cây nơi đủ ánh sáng, tưới nước ẩm đều đặn mỗi sáng.</li>
            <li>Lập bảng theo dõi trong 7 ngày liên tiếp:
              <br>• Ngày 2: Hạt nứt nanh, rễ mầm đâm xuống đất.
              <br>• Ngày 3: Thân mầm đội vỏ chui lên khỏi mặt đất, xuất hiện 2 lá mầm.
              <br>• Ngày 5: Chiều cao thân đạt $4 - 6\\text{ cm}$, xuất hiện 2 lá thật đầu tiên màu xanh lục.
              <br>• Ngày 7: Chiều cao thân đạt $10 - 12\\text{ cm}$, lá thật xòe to.
            </li>
          </ul>
        `
      },
      {
        title: "2. Quan sát vòng đời phát triển của một số loài động vật",
        content: `
          <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border text-xs text-gray-700 dark:text-gray-300">
            <p><strong>Vòng đời của ếch đồng (Biến thái hoàn toàn):</strong></p>
            <p class="font-semibold text-emerald-600 dark:text-emerald-400">Trứng $\\rightarrow$ Nòng nọc (sống dưới nước, thở bằng mang, có đuôi) $\\rightarrow$ Nòng nọc mọc 2 chân sau, 2 chân trước $\\rightarrow$ Đuôi tiêu biến $\\rightarrow$ Ếch trưởng thành (lên cạn, thở bằng phổi và da).</p>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              *Nhận xét:* Ấu trùng (nòng nọc) có hình thái, cấu tạo và môi trường sống hoàn toàn khác biệt với con ếch trưởng thành.
            </p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-frog"></i> Sơ Đồ Vòng Đời Phát Triển Biến Thái Của Ếch Đồng</span>
          <span class="text-[10px] text-gray-400">Trứng &rarr; Nòng nọc &rarr; Ếch con &rarr; Ếch trưởng thành</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="85" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">1. TRỨNG ẾCH</text>
            <text x="85" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Đẻ trong bọc nhầy</text>

            <path d="M 150 45 L 180 45" stroke="#3b82f6" stroke-width="2"/>

            <rect x="180" y="20" width="140" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="250" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">2. NÒNG NỌC</text>
            <text x="250" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Bơi nước, có đuôi</text>

            <path d="M 320 45 L 350 45" stroke="#3b82f6" stroke-width="2"/>

            <rect x="350" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="415" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">3. ẾCH CON</text>
            <text x="415" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Mọc 4 chân, rụng đuôi</text>

            <path d="M 480 45 L 510 45" stroke="#3b82f6" stroke-width="2"/>

            <rect x="510" y="20" width="120" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="570" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">4. ẾCH TRƯỞNG THÀNH</text>
            <text x="570" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Lên cạn, sinh sản</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Đặc điểm cơ quan hô hấp của ấu trùng nòng nọc khi còn bơi lội dưới nước là gì?",
        options: ["Thở bằng hai lá phổi hoàn chỉnh", "Thở bằng mang ngoài và mang trong", "Thở bằng lỗ thở trên lưng", "Thở bằng ống khí"],
        answer: 1,
        explain: "Nòng nọc sống hoàn toàn dưới nước nên hô hấp bằng mang; khi biến thái thành ếch mới chuyển sang thở bằng phổi và da."
      },
      {
        question: "Số liệu đo chiều cao thân cây đỗ tăng lên từ ngày 1 đến ngày 7 là minh chứng khoa học chứng minh quá trình nào?",
        options: ["Quá trình cảm ứng", "Quá trình sinh trưởng", "Quá trình sinh sản", "Quá trình đột biến gen"],
        answer: 1,
        explain: "Sự tăng lên về chiều cao và khối lượng theo thời gian là minh chứng thực nghiệm của quá trình sinh trưởng."
      }
    ],
    checklist: [
      "Thực hiện đo đạc và lập bảng ghi chép sự sinh trưởng của cây đậu mầm.",
      "Vẽ sơ đồ và trình bày các giai đoạn phát triển trong vòng đời của ếch.",
      "Phân biệt được động vật biến thái hoàn toàn và không biến thái."
    ]
  },

  // ==================== BÀI 39 ====================
  {
    id: "bai-39",
    num: "Bài 39",
    chapter: "CHƯƠNG X: SINH SẢN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 39. Sinh sản vô tính ở sinh vật",
    pages: "SGK tr. 158–163",
    objective: "Nêu khái niệm sinh sản vô tính (không có sự kết hợp giao tử đực và cái); các hình thức ở thực vật (sinh dưỡng) và động vật (nảy chồi, phân mảnh, trinh sản); 4 phương pháp nhân giống sinh dưỡng (giâm cành, chiết cành, ghép cành, nuôi cấy mô).",
    mindmap: [
      { title: "BẢN CHẤT VÔ TÍNH", desc: "Không có sự kết hợp giao tử đực và cái; cá thể con sinh ra từ 1 phần cơ thể mẹ, mang đặc tính giống hệt mẹ.", color: "#059669" },
      { title: "HÌNH THỨC Ở ĐỘNG VẬT", desc: "Nảy chồi (thuỷ tức, san hô); Phân mảnh (giun dẹp, sao biển); Trinh sản (ong đực phát triển từ trứng không thụ tinh).", color: "#2563eb" },
      { title: "4 KĨ THUẬT NHÂN GIỐNG", desc: "1. Giâm cành (mía, sắn, hồng); 2. Chiết cành (cam, bưởi); 3. Ghép mắt/cành; 4. Nuôi cấy mô tế bào vô trùng.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm và các hình thức sinh sản vô tính",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Sinh sản vô tính:</strong> Là hình thức sinh sản mà cơ thể mới được hình thành <strong>không có sự kết hợp của giao tử đực và giao tử cái</strong>. Cá thể con phát triển từ một phần của cơ thể mẹ nên có kiểu gen và đặc tính giống hệt cơ thể mẹ.</li>
            <li><strong>Ở thực vật:</strong>
              <br>• <em>Sinh sản sinh dưỡng:</em> Cơ thể mới mọc lên từ các cơ quan sinh dưỡng như thân rễ (gừng, cỏ tranh), thân bò (rau má, dâu tây), thân củ (khoai tây), củ (hành, tỏi), rễ củ (khoai lang) hoặc từ lá (cây thuốc bỏng).
              <br>• <em>Sinh sản bằng bào tử:</em> Ở rêu, dương xỉ.
            </li>
            <li><strong>Ở động vật:</strong>
              <br>• <em>Nảy chồi:</em> Chồi mọc ra từ cơ thể mẹ, lớn dần rồi tách ra thành cá thể độc lập (thủy tức, san hô).
              <br>• <em>Phân mảnh:</em> Cơ thể mẹ phân chia thành nhiều mảnh, mỗi mảnh tái sinh thành một cơ thể hoàn chỉnh (giun dẹp, hải quỳ, sao biển).
              <br>• <em>Trinh sản (Trinh sinh):</em> Trứng không qua thụ tinh vẫn phát triển thành cơ thể mới (ở ong, kiến, rệp; ví dụ ở ong, trứng không thụ tinh nở thành <em>ong đực</em>).
            </li>
          </ul>
        `
      },
      {
        title: "2. Các phương pháp nhân giống sinh dưỡng nhân tạo",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">1. Giâm cành:</strong>
              Cắt một đoạn cành bánh tẻ có mắt chồi cắm vào đất ẩm; cành ra rễ mầm phát triển thành cây mới (mía, sắn, rau ngót, hoa hồng).
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">2. Chiết cành:</strong>
              Bóc một khoanh vỏ trên cành bánh tẻ, bó đất mùn giữ ẩm quanh vết cắt; khi cành ra rễ thì cắt rời đem trồng (cam, bưởi, nhãn, vải).
            </div>
            <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">3. Ghép cành/Ghép mắt:</strong>
              Lấy một mắt hoặc cành ghép của cây giống quý gắn vào gốc của cây gốc ghép có bộ rễ khoẻ mạnh để kết hợp ưu thế của cả hai.
            </div>
            <div class="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-700 dark:text-purple-300 block mb-1">4. Nuôi cấy mô tế bào:</strong>
              Tách mô hoặc tế bào nuôi cấy trong ống nghiệm chứa môi trường dinh dưỡng vô trùng; nhân bản hàng loạt cây con sạch bệnh, đồng đều di truyền (lan phi điệp, khoai tây, chuối).
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-scissors"></i> 4 Phương Pháp Nhân Giống Vô Tính Cây Trồng Phổ Biến</span>
          <span class="text-[10px] text-gray-400">Giâm - Chiết - Ghép - Nuôi cấy mô</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="87" y="42" fill="#6ee7b7" font-size="10.5" font-weight="bold" text-anchor="middle">1. GIÂM CÀNH</text>
            <text x="87" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Hoa hồng, sắn, mía</text>

            <rect x="175" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="242" y="42" fill="#93c5fd" font-size="10.5" font-weight="bold" text-anchor="middle">2. CHIẾT CÀNH</text>
            <text x="242" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Cam, bưởi, nhãn</text>

            <rect x="330" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#f59e0b"/>
            <text x="397" y="42" fill="#fde68a" font-size="10.5" font-weight="bold" text-anchor="middle">3. GHÉP CÀNH</text>
            <text x="397" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Kết hợp mắt ghép & gốc</text>

            <rect x="485" y="20" width="145" height="50" rx="8" fill="#1e293b" stroke="#a855f7"/>
            <text x="557" y="42" fill="#d8b4fe" font-size="10.5" font-weight="bold" text-anchor="middle">4. NUÔI CẤY MÔ</text>
            <text x="557" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Ống nghiệm vô trùng</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Đặc điểm nổi bật nhất của hình thức sinh sản vô tính là gì?",
        options: [
          "Bắt buộc phải có sự thụ tinh giữa trứng và tinh trùng",
          "Con sinh ra có biến dị di truyền rất phong phú",
          "Không có sự kết hợp giao tử đực và cái, con sinh ra mang đặc tính giống hệt mẹ",
          "Chỉ xảy ra ở các loài thực vật bậc cao"
        ],
        answer: 2,
        explain: "Sinh sản vô tính không qua thụ tinh, cá thể con sinh ra từ phân chia nguyên phân của cơ thể mẹ nên có bộ gen giống hệt mẹ."
      },
      {
        question: "Cây lá bỏng (thuốc bỏng) có thể sinh sản sinh dưỡng tự nhiên tạo thành nhiều cây con mọc ra từ bộ phận nào?",
        options: ["Từ mép của lá già rơi xuống đất ẩm", "Từ rễ củ dưới đất", "Từ quả chín rụng", "Từ hoa thụ phấn"],
        answer: 0,
        explain: "Lá cây thuốc bỏng rơi xuống đất ẩm thì ở các mép lá sẽ tự mọc ra nhiều chồi cây con mới."
      }
    ],
    checklist: [
      "Nêu được khái niệm sinh sản vô tính ở sinh vật.",
      "Kể tên các hình thức sinh sản sinh dưỡng ở thực vật và vô tính ở động vật.",
      "Phân biệt quy trình của 4 phương pháp nhân giống: giâm, chiết, ghép, nuôi cấy mô."
    ]
  },

  // ==================== BÀI 40 ====================
  {
    id: "bai-40",
    num: "Bài 40",
    chapter: "CHƯƠNG X: SINH SẢN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 40. Sinh sản hữu tính ở sinh vật",
    pages: "SGK tr. 164–168",
    objective: "Nêu khái niệm sinh sản hữu tính (kết hợp giao tử đực và cái tạo hợp tử); cấu tạo hoa (nhị, nhụy); phân biệt thụ phấn và thụ tinh; quả và hạt; sinh sản hữu tính ở động vật.",
    mindmap: [
      { title: "BẢN CHẤT HỮU TÍNH", desc: "Sự kết hợp giữa giao tử đực (tinh trùng/hạt phấn) và giao tử cái (trứng/noãn) tạo thành hợp tử -> phát triển thành con mới.", color: "#059669" },
      { title: "HOA LÀ CƠ QUAN SS", desc: "Nhị: chứa hạt phấn (giao tử đực). Nhụy: bầu chứa noãn (giao tử cái). Thụ phấn -> Thụ tinh -> Hợp tử thành phôi, noãn thành hạt, bầu thành quả.", color: "#2563eb" },
      { title: "ĐỘNG VẬT HỮU TÍNH", desc: "Thụ tinh ngoài (cá, ếch nhái đẻ trứng trong nước); Thụ tinh trong (bò sát, chim, thú/người; đẻ trứng hoặc đẻ con nuôi bằng sữa).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Sinh sản hữu tính ở thực vật có hoa",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Hoa là cơ quan sinh sản:</strong>
              <br>• <strong>Nhị hoa (bộ phận sinh dục đực):</strong> Gồm chỉ nhị và bao phấn chứa các <em>hạt phấn</em> mang giao tử đực.
              <br>• <strong>Nhụy hoa (bộ phận sinh dục cái):</strong> Gồm đầu nhụy, vòi nhụy và <em>bầu nhụy chứa noãn</em> mang tế bào trứng (giao tử cái).
              <br>• <em>Hoa lưỡng tính:</em> Có cả nhị và nhụy trên cùng một bông hoa (hoa bưởi, hoa cải, hoa huệ).
              <br>• <em>Hoa đơn tính:</em> Chỉ có nhị (hoa đực) hoặc chỉ có nhụy (hoa cái) (hoa mướp, hoa ngô, hoa dưa hấu).
            </li>
            <li><strong>Trình tự sinh sản hữu tính ở cây có hoa:</strong>
              <br>1. <strong>Thụ phấn:</strong> Hiện tượng hạt phấn từ bao phấn tiếp xúc và bám dính vào đầu nhụy (nhờ gió, côn trùng hoặc nhân tạo).
              <br>2. <strong>Thụ tinh:</strong> Hạt phấn nảy mầm mọc ống phấn chui qua vòi nhụy vào noãn. Tế bào sinh dục đực kết hợp với tế bào trứng tạo thành <strong>hợp tử</strong>.
              <br>3. <strong>Tạo quả và hạt:</strong> Hợp tử phát triển thành <em>phôi</em>; noãn biến đổi thành <em>hạt</em>; bầu nhụy phát triển phình to thành <em>quả</em> bảo vệ hạt.
            </li>
          </ul>
        `
      },
      {
        title: "2. Sinh sản hữu tính ở động vật",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Gồm 3 giai đoạn: Hình thành trứng và tinh trùng $\\rightarrow$ Thụ tinh tạo hợp tử $\\rightarrow$ Phát triển phôi thành con non.</li>
            <li><strong>Hình thức thụ tinh:</strong>
              <br>• <em>Thụ tinh ngoài:</em> Trứng thụ tinh trong môi trường nước bên ngoài cơ thể mẹ (cá chép, ếch đồng).
              <br>• <em>Thụ tinh trong:</em> Tinh trùng gặp và thụ tinh với trứng ngay trong ống dẫn trứng của cơ thể mẹ (bò sát, chim, thú, người).
            </li>
            <li><strong>Ưu thế của sinh sản hữu tính:</strong> Tạo ra các thế hệ con lai mang nguồn biến dị tổ hợp phong phú, giúp sinh vật có khả năng thích nghi cao trước sự thay đổi của môi trường sống.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-venus-mars"></i> Trình Tự: Thụ Phấn &rarr; Thụ Tinh &rarr; Tạo Quả Và Hạt Ở Thực Vật</span>
          <span class="text-[10px] text-gray-400">Hoa có hoa</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#f59e0b"/>
            <text x="85" y="42" fill="#fde68a" font-size="10.5" font-weight="bold" text-anchor="middle">1. THỤ PHẤN</text>
            <text x="85" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Hạt phấn &rarr; Đầu nhụy</text>

            <path d="M 150 45 L 180 45" stroke="#f59e0b" stroke-width="2"/>

            <rect x="180" y="20" width="140" height="50" rx="8" fill="#1e293b" stroke="#ec4899"/>
            <text x="250" y="42" fill="#f472b6" font-size="10.5" font-weight="bold" text-anchor="middle">2. THỤ TINH</text>
            <text x="250" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Tinh tử + Trứng &rarr; Hợp tử</text>

            <path d="M 320 45 L 350 45" stroke="#ec4899" stroke-width="2"/>

            <rect x="350" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="415" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">3. TẠO HẠT</text>
            <text x="415" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Noãn &rarr; Hạt chứa phôi</text>

            <path d="M 480 45 L 510 45" stroke="#3b82f6" stroke-width="2"/>

            <rect x="510" y="20" width="120" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="570" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">4. TẠO QUẢ</text>
            <text x="570" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Bầu nhụy phát triển</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Sau khi thụ tinh xảy ra, bộ phận nào của hoa sẽ phát triển phình to thành quả?",
        options: ["Bao phấn của nhị", "Đầu nhụy", "Bầu nhụy", "Cánh hoa"],
        answer: 2,
        explain: "Sau khi thụ tinh, noãn biến đổi thành hạt còn bầu nhụy phình to phát triển thành quả chứa hạt bên trong."
      },
      {
        question: "Hiện tượng thụ tinh ngoài (tinh trùng thụ tinh với trứng trong môi trường nước) là hình thức sinh sản đặc trưng của loài nào?",
        options: ["Chim bồ câu", "Cá chép và ếch đồng", "Chó và mèo", "Rắn và thằn lằn"],
        answer: 1,
        explain: "Cá chép và ếch đồng đẻ trứng và thụ tinh hoàn toàn trong môi trường nước bên ngoài cơ thể mẹ."
      }
    ],
    checklist: [
      "Mô tả cấu tạo hoa lưỡng tính (nhị, nhụy, bao phấn, noãn).",
      "Phân biệt được hai quá trình thụ phấn và thụ tinh.",
      "So sánh ưu thế của sinh sản hữu tính so với sinh sản vô tính."
    ]
  },

  // ==================== BÀI 41 ====================
  {
    id: "bai-41",
    num: "Bài 41",
    chapter: "CHƯƠNG X: SINH SẢN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 41. Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật",
    pages: "SGK tr. 169–172",
    objective: "Nêu các yếu tố bên trong (di truyền, hormone, tuổi) và bên ngoài (nhiệt độ, ánh sáng, dinh dưỡng) ảnh hưởng đến sinh sản; biện pháp điều khiển sinh sản ở thực vật và vật nuôi.",
    mindmap: [
      { title: "YẾU TỐ ẢNH HƯỞNG", desc: "Bên trong: Hormone, tuổi thành thục, di truyền. Bên ngoài: Nhiệt độ, ánh sáng, chế độ dinh dưỡng.", color: "#059669" },
      { title: "ĐIỀU KHIỂN Ở CÂY TRỒNG", desc: "Thụ phấn nhân tạo, thắp đèn điều khiển ra hoa trái vụ, xử lí hormone tạo quả không hạt (dưa hấu, nho).", color: "#2563eb" },
      { title: "ĐIỀU KHIỂN Ở VẬT NUÔI", desc: "Thụ tinh nhân tạo, dùng hormone kích thích đẻ trứng đồng loạt (cá tra, cá mè), điều chỉnh số con.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Các yếu tố ảnh hưởng đến sinh sản ở sinh vật",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Yếu tố bên trong:</strong>
              <br>• <em>Đặc điểm di truyền:</em> Quy định độ tuổi bắt đầu sinh sản, số lượng trứng hoặc con mỗi lứa.
              <br>• <em>Hormone sinh sản:</em> Điều hòa sự chín và rụng trứng ở con cái, sự sinh tinh ở con đực (ở người, hormone $FSH$ và $LH$ tuyến yên điều khiển chu kì sinh sản).
            </li>
            <li><strong>Yếu tố bên ngoài:</strong>
              <br>• <em>Nhiệt độ:</em> Quá nóng hoặc quá lạnh làm giảm tỉ lệ thụ phấn, làm rụng hoa/quả non hoặc cản trở cá đẻ trứng.
              <br>• <em>Ánh sáng:</em> Cây ngày dài cần chiếu sáng kéo dài mới ra hoa; cây ngày ngắn (cúc, mía) ra hoa khi đêm dài.
              <br>• <em>Dinh dưỡng:</em> Chế độ ăn uống đầy đủ dưỡng chất giúp tăng chất lượng giao tử và tăng tỉ lệ phôi sống sót.
            </li>
          </ul>
        `
      },
      {
        title: "2. Ứng dụng điều hòa và điều khiển sinh sản",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Trong trồng trọt:</strong>
              <br>• <em>Thụ phấn nhân tạo:</em> Dùng chổi lông mềm quét hạt phấn của hoa đực sang đầu nhụy hoa cái cho ngô, bầu, bí để tăng tỉ lệ đậu quả.
              <br>• <em>Điều khiển ra hoa trái vụ:</em> Thắp đèn ban đêm cho vườn thanh long kích thích ra hoa sớm; xiết nước tạo khô hạn cho cây có múi ra hoa đồng loạt.
              <br>• <em>Xử lí tạo quả không hạt:</em> Dùng chất điều hoà sinh trưởng (auxin, gibberellin) phun lên bầu nhụy để bầu phát triển thành quả mà không cần qua thụ tinh (nho, dưa hấu không hạt).
            </li>
            <li><strong>Trong chăn nuôi:</strong>
              <br>• Tiêm dịch chiết tuyến yên hoặc hormone kích dục kích thích cá mè, cá trê, cá ba sa đẻ trứng nhân tạo và phóng tinh đồng loạt trong bể nuôi.
              <br>• Ứng dụng thụ tinh nhân tạo và cấy truyền phôi bò sữa cao sản để nhân nhanh đàn giống chất lượng cao.
            </li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-wand-magic-sparkles"></i> 4 Kĩ Thuật Điều Khiển Sinh Sản Được Ứng Dụng Rộng Rãi</span>
          <span class="text-[10px] text-gray-400">Ứng dụng thực tiễn</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="87" y="42" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">THỤ PHẤN NHÂN TẠO</text>
            <text x="87" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ngô, dưa hấu, bầu bí</text>

            <rect x="175" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#f59e0b"/>
            <text x="242" y="42" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">THẮP ĐÈN RA HOA</text>
            <text x="242" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Thanh long trái vụ</text>

            <rect x="330" y="20" width="135" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="397" y="42" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">TIÊM HORMONE CÁ</text>
            <text x="397" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Kích thích đẻ nhân tạo</text>

            <rect x="485" y="20" width="145" height="50" rx="8" fill="#1e293b" stroke="#a855f7"/>
            <text x="557" y="42" fill="#d8b4fe" font-size="10" font-weight="bold" text-anchor="middle">CẤY TRUYỀN PHÔI</text>
            <text x="557" y="58" fill="#94a3b8" font-size="8.5" text-anchor="middle">Nhân giống bò sữa tốt</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Biện pháp thụ phấn nhân tạo cho cây ngô hoặc dưa hấu đem lại lợi ích trực tiếp nào sau đây?",
        options: [
          "Làm cho cây mọc cao thêm",
          "Tăng tỉ lệ thụ tinh, bắp ngô không bị khuyết hạt, quả tròn đều",
          "Làm cho rễ cây ăn sâu hơn",
          "Giúp diệt sâu đục thân"
        ],
        answer: 1,
        explain: "Thụ phấn nhân tạo đảm bảo lượng hạt phấn phủ kín đầu nhụy, khắc phục tình trạng thiếu gió hoặc côn trùng, giúp bắp ngô chắc mẩy đầy hạt."
      },
      {
        question: "Tại các trang trại nuôi cá đẻ nhân tạo, người ta thường tiêm dịch chiết tuyến yên vào cơ thể cá bố mẹ nhằm mục đích:",
        options: [
          "Làm cá lớn nhanh hơn",
          "Kích thích trứng và tinh trùng chín, rụng và phóng giao tử đồng loạt",
          "Chữa bệnh nhiễm khuẩn cho cá",
          "Giúp cá bơi khỏe hơn"
        ],
        answer: 1,
        explain: "Dịch chiết tuyến yên chứa các hormone sinh dục kích thích cá chín sinh dục và phóng trứng/tinh trùng nhân tạo đồng loạt."
      }
    ],
    checklist: [
      "Liệt kê các nhân tố bên trong và bên ngoài ảnh hưởng đến sinh sản.",
      "Trình bày các kĩ thuật điều khiển sinh sản ở cây trồng (thụ phấn nhân tạo, thắp đèn).",
      "Nêu ứng dụng hormone kích dục và cấy truyền phôi trong chăn nuôi."
    ]
  },

  // ==================== BÀI 42 ====================
  {
    id: "bai-42",
    num: "Bài 42",
    chapter: "CHƯƠNG X: SINH SẢN Ở SINH VẬT",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 42. Cơ thể sinh vật là một thể thống nhất",
    pages: "SGK tr. 173–174",
    objective: "Chứng minh cơ thể sinh vật là một thể thống nhất từ cấp độ tế bào đến cơ thể và môi trường; các quá trình sống (TĐC, sinh trưởng, cảm ứng, sinh sản) liên hệ qua lại mật thiết.",
    mindmap: [
      { title: "CẤP ĐỘ CẤU TẠO", desc: "Tế bào (đơn vị cơ bản) -> Mô -> Cơ quan -> Hệ cơ quan -> Cơ thể hoàn chỉnh. Hoạt động tế bào là cơ sở của cơ thể.", color: "#059669" },
      { title: "MÔI TRƯỜNG & CƠ THỂ", desc: "Môi trường cung cấp vật chất & năng lượng (nước, thức ăn, O2, CO2) cho cơ thể trao đổi chất liên tục.", color: "#2563eb" },
      { title: "LIÊN HỆ QUẢN LÝ", desc: "TĐC & Năng lượng <-> Sinh trưởng & Phát triển <-> Cảm ứng & Vận động <-> Sinh sản. Bất kì rối loạn nào cũng ảnh hưởng toàn thể.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Thống nhất về cấu trúc và chức năng",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Mọi cơ thể sinh vật đều được cấu tạo từ <strong>đơn vị cơ bản là tế bào</strong>.</li>
            <li>Ở sinh vật đa bào: Các tế bào tập hợp thành <em>mô</em>, các mô phối hợp tạo thành <em>cơ quan</em>, các cơ quan hợp tác tạo thành <em>hệ cơ quan</em> và tổng thể tạo nên <strong>cơ thể hoàn chỉnh</strong>.</li>
            <li>Hoạt động của các tế bào là nền tảng cơ sở cho hoạt động của toàn bộ cơ thể; ngược lại, hoạt động thống nhất của cơ thể điều hoà và cung cấp môi trường sống cho từng tế bào.</li>
          </ul>
        `
      },
      {
        title: "2. Mối liên hệ mật thiết giữa các quá trình sống",
        content: `
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5">Sơ đồ tổng quát thể thống nhất:</h5>
            <div class="p-2 rounded bg-white dark:bg-gray-800 font-bold text-center text-xs text-emerald-700 dark:text-emerald-300 border mb-2">
              Môi trường &nbsp;&harr;&nbsp; Cơ thể &nbsp;&harr;&nbsp; Tế bào
            </div>
            <ul class="space-y-1 list-disc pl-4">
              <li><strong>Trao đổi chất & Chuyển hoá năng lượng:</strong> Là quá trình trung tâm, cung cấp vật chất và năng lượng ATP cho sinh trưởng, cảm ứng và sinh sản.</li>
              <li><strong>Sinh trưởng & Phát triển:</strong> Tạo nên vóc dáng, các cơ quan mới; làm biến đổi nhu cầu trao đổi chất của cơ thể.</li>
              <li><strong>Cảm ứng & Vận động:</strong> Giúp cơ thể định hướng tìm kiếm thức ăn, nước uống, tránh xa nguy hiểm.</li>
              <li><strong>Sinh sản:</strong> Duy trì sự tiếp nối thế hệ; hoạt động sinh sản lại phụ thuộc trực tiếp vào mức độ sinh trưởng và trạng thái trao đổi chất.</li>
            </ul>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              *Kết luận:* Nếu một cơ quan hoặc một quá trình sống bị tổn thương hay rối loạn thì toàn bộ hoạt động sống của cơ thể sẽ bị ảnh hưởng theo.
            </p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-atom"></i> Vòng Tròn Thống Nhất Giữa 4 Hoạt Động Sống Cốt Lõi</span>
          <span class="text-[10px] text-gray-400">Tế bào &bull; Cơ thể &bull; Môi trường</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 450 140" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <circle cx="225" cy="70" r="60" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3"/>
            <!-- Center Node -->
            <rect x="160" y="52" width="130" height="36" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <text x="225" y="74" fill="#a7f3d0" font-size="10.5" font-weight="900" text-anchor="middle">CƠ THỂ THỐNG NHẤT</text>
            <!-- 4 Outer Nodes -->
            <rect x="155" y="5" width="140" height="26" rx="4" fill="#1e293b" stroke="#3b82f6"/>
            <text x="225" y="22" fill="#60a5fa" font-size="9.5" font-weight="bold" text-anchor="middle">Trao đổi chất &amp; Năng lượng</text>

            <rect x="305" y="57" width="135" height="26" rx="4" fill="#1e293b" stroke="#f59e0b"/>
            <text x="372" y="74" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">Sinh trưởng &amp; Phát triển</text>

            <rect x="155" y="108" width="140" height="26" rx="4" fill="#1e293b" stroke="#ec4899"/>
            <text x="225" y="125" fill="#f472b6" font-size="9.5" font-weight="bold" text-anchor="middle">Sinh sản duy trì nòi giống</text>

            <rect x="10" y="57" width="135" height="26" rx="4" fill="#1e293b" stroke="#34d399"/>
            <text x="77" y="74" fill="#a7f3d0" font-size="9.5" font-weight="bold" text-anchor="middle">Cảm ứng &amp; Thích nghi</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Quá trình sống nào sau đây đóng vai trò trung tâm cung cấp vật chất và năng lượng ATP cho mọi hoạt động sống khác của cơ thể?",
        options: [
          "Quá trình cảm ứng",
          "Quá trình sinh sản",
          "Quá trình trao đổi chất và chuyển hoá năng lượng",
          "Quá trình phân chia mô phân sinh"
        ],
        answer: 2,
        explain: "Trao đổi chất và chuyển hóa năng lượng cung cấp nguyên liệu kiến tạo tế bào và năng lượng ATP cho sinh trưởng, cảm ứng và sinh sản."
      },
      {
        question: "Cơ thể sinh vật được xem là một thể thống nhất vì:",
        options: [
          "Mọi tế bào và cơ quan hoạt động hoàn toàn độc lập không liên quan gì nhau",
          "Các cơ quan phối hợp nhịp nhàng, hoạt động của cơ quan này ảnh hưởng trực tiếp đến cơ quan khác",
          "Cơ thể không cần trao đổi chất với môi trường",
          "Sinh vật chỉ có duy nhất một tế bào"
        ],
        answer: 1,
        explain: "Mọi bộ phận, cơ quan trong cơ thể đều có sự liên kết chặt chẽ và phối hợp nhịp nhàng dưới sự điều hòa chung."
      }
    ],
    checklist: [
      "Chứng minh được tính thống nhất về cấu trúc từ tế bào đến cơ thể.",
      "Giải thích được mối quan hệ hai chiều giữa tế bào, cơ thể và môi trường.",
      "Phân tích được mối liên hệ phụ thuộc giữa trao đổi chất, sinh trưởng, cảm ứng và sinh sản."
    ]
  }
];
