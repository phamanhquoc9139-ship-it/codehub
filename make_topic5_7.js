// Lessons 19 to 28: Topic 5 (IT Careers), Topic 6 (IoT & Smart Home), Topic 7 (Web Development Project)
module.exports = [
  // ================= BÀI 19 =================
  {
    num: 19,
    topicNum: 5,
    title: "Bài 19: Nghề phát triển phần mềm và ứng dụng",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Mô tả được các đặc điểm cơ bản của nghề lập trình và phát triển phần mềm; Phân biệt các vị trí chuyên môn: Frontend, Backend, Fullstack, Mobile App Developer; Nhận biết các phẩm chất và kỹ năng cần có của người làm phần mềm.",
    intro: "Từ các ứng dụng đặt xe Grab, giao đồ ăn ShopeeFood đến phần mềm điều hành ngân hàng, tất cả đều do bàn tay và khối óc của các kỹ sư phát triển phần mềm tạo nên. Nghề lập trình có những thử thách và cơ hội gì?",
    sections: [
      {
        title: "1. Tổng quan về nghề phát triển phần mềm",
        content: `
          <p class="mb-3">
            <strong>Kỹ sư phát triển phần mềm (Software Developer / Software Engineer):</strong> Là người nghiên cứu, thiết kế, viết mã lệnh (code), kiểm thử và bảo trì các chương trình ứng dụng hoặc hệ điều hành nhằm giải quyết các bài toán thực tiễn của cuộc sống và tự động hóa sản xuất.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-laptop-code"></i> Frontend Developer (Phát triển giao diện)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Chuyên xây dựng toàn bộ phần giao diện trực quan, hiệu ứng chuyển động và trải nghiệm người dùng (UI/UX) mà khách hàng nhìn thấy và tương tác trực tiếp. Công nghệ then chốt: HTML5, CSS3, JavaScript, React, Vue.js, Tailwind CSS.
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-server"></i> Backend Developer (Phát triển máy chủ)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Chịu trách nhiệm xử lý logic nghiệp vụ ngầm, tính toán bảo mật, xác thực người dùng và giao tiếp với cơ sở dữ liệu (Database). Công nghệ tiêu biểu: Python, Java, Node.js, PHP, C#, SQL, MongoDB.
              </p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-layer-group"></i> Fullstack Developer (Toàn diện)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Lập trình viên có khả năng đảm nhận cả phần giao diện Frontend lẫn hệ thống máy chủ Backend và cơ sở dữ liệu.
              </p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-mobile-screen"></i> Mobile App Developer (Ứng dụng di động)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Chuyên phát triển ứng dụng chạy mượt mà trên hệ điều hành Android và iOS. Công nghệ: Flutter, React Native, Swift, Kotlin.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ năng và phẩm chất cần thiết của lập trình viên",
        content: `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
            <ul class="list-disc pl-5 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
              <li><strong>Tư duy logic và giải quyết vấn đề:</strong> Khả năng chia nhỏ bài toán phức tạp thành các bước thuật toán cụ thể.</li>
              <li><strong>Năng lực tự học liên tục:</strong> Ngành công nghệ thông tin đổi mới từng tháng, lập trình viên phải luôn đọc tài liệu tiếng Anh để làm chủ công nghệ mới.</li>
              <li><strong>Làm việc nhóm (Teamwork) và kiểm soát phiên bản:</strong> Phối hợp cùng các thành viên qua công cụ quản lý mã nguồn Git / GitHub.</li>
              <li><strong>Tính kiên nhẫn và cẩn trọng:</strong> Sẵn sàng dò tìm (debug) từng dòng mã để tìm ra lỗi logic ẩn giấu.</li>
            </ul>
          </div>
        `
      }
    ],
    practice: [
      "Tìm hiểu thông tin tuyển dụng vị trí lập trình viên Frontend trên các website việc làm (VietnamWorks, TopCV) và ghi chép lại các kỹ năng công nghệ yêu cầu.",
      "Thực hiện bài kiểm tra trắc nghiệm tính cách nghề nghiệp Holland trên Internet để đánh giá mức độ phù hợp của bản thân với nhóm ngành Kỹ thuật - Công nghệ.",
      "Thảo luận nhóm: Phân tích vì sao kỹ năng ngoại ngữ (tiếng Anh) lại là yếu tố sống còn đối với một kỹ sư phần mềm trong thời đại số."
    ],
    summary: "Nghề phát triển phần mềm gồm các nhánh chuyên môn: Frontend (giao diện), Backend (máy chủ & CSDL), Fullstack (toàn diện), Mobile App. Đòi hỏi tư duy thuật toán logic, năng lực tự học công nghệ mới, tiếng Anh chuyên ngành và kỹ năng làm việc nhóm.",
    quizzes: [
      {
        q: "Lập trình viên chuyên phụ trách thiết kế giao diện trực quan, hiệu ứng tương tác người dùng (UI/UX) trên trình duyệt được gọi là gì?",
        options: ["Backend Developer", "Frontend Developer", "Database Administrator", "Network Engineer"],
        correctIndex: 1,
        explain: "Frontend Developer chịu trách nhiệm xây dựng giao diện hiển thị mà người dùng tương tác trực tiếp bằng HTML, CSS, JavaScript."
      },
      {
        q: "Vị trí lập trình viên nào có khả năng đảm nhận thành thạo cả phát triển giao diện phía máy khách (Frontend) và xử lý máy chủ (Backend)?",
        options: ["Fullstack Developer", "IT Support", "Hardware Engineer", "Data Entry"],
        correctIndex: 0,
        explain: "Fullstack Developer nắm vững toàn bộ quy trình phát triển từ giao diện người dùng đến hệ thống máy chủ và cơ sở dữ liệu."
      },
      {
        q: "Công cụ nào được xem là tiêu chuẩn công nghiệp toàn cầu giúp các nhóm lập trình viên quản lý phiên bản mã nguồn và cộng tác dự án?",
        options: ["Microsoft Excel", "Git / GitHub", "Photoshop", "Notepad"],
        correctIndex: 1,
        explain: "Git và nền tảng GitHub là hệ thống quản lý phiên bản phân tán (VCS) tiêu chuẩn cho mọi dự án phần mềm trên thế giới."
      },
      {
        q: "Phẩm chất nào sau đây là quan trọng nhất đối với một kỹ sư phần mềm khi đối mặt với công nghệ thông tin liên tục đổi mới từng ngày?",
        options: ["Học thuộc lòng sách giáo khoa", "Khả năng tự nghiên cứu, học tập tài liệu công nghệ mới suốt đời", "Không bao giờ thay đổi thói quen viết code", "Chỉ làm việc một mình không giao tiếp"],
        correctIndex: 1,
        explain: "Năng lực tự học suốt đời là chìa khóa sống còn giúp lập trình viên không bị tụt hậu trước sự phát triển thần tốc của công nghệ."
      }
    ]
  },

  // ================= BÀI 20 =================
  {
    num: 20,
    topicNum: 5,
    title: "Bài 20: Nghề quản trị hệ thống và mạng máy tính",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Mô tả được chức năng và nhiệm vụ của chuyên viên quản trị mạng (Network Administrator) và quản trị hệ thống (System Administrator); Nhận biết tầm quan trọng của việc bảo đảm an ninh mạng và an toàn dữ liệu doanh nghiệp; Tìm hiểu các chứng chỉ nghề quốc tế.",
    intro: "Khi một ngân hàng hay bệnh viện bị sập mạng 1 giờ, thiệt hại có thể lên tới hàng triệu đô la. Ai là người 'gác cổng' đứng sau bảo đảm hệ thống máy chủ luôn hoạt động an toàn 24/7/365?",
    sections: [
      {
        title: "1. Vai trò và Nhiệm vụ của chuyên viên quản trị hệ thống và mạng",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-network-wired"></i> Quản trị mạng (Network Administrator)
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Thiết kế, lắp đặt và cấu hình hệ thống Router, Switch, tường lửa Firewall, Access Point Wi-Fi.</li>
                <li>Phân chia dải mạng con (VLAN, Subnetting), cấp phát địa chỉ IP qua máy chủ DHCP.</li>
                <li>Giám sát lưu lượng băng thông, phát hiện các điểm nghẽn và ngăn chặn các cuộc tấn công từ chối dịch vụ (DDoS).</li>
              </ul>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-server"></i> Quản trị hệ thống (System Administrator - SysAdmin)
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Cài đặt, quản lý hệ điều hành máy chủ Server (Linux Ubuntu/CentOS, Windows Server).</li>
                <li>Quản lý tài khoản người dùng, phân quyền truy cập thư mục và tài nguyên qua Active Directory.</li>
                <li>Lập kế hoạch sao lưu dữ liệu tự động định kỳ (Backup) và phục hồi sau sự cố thảm họa (Disaster Recovery).</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Xu hướng điện toán đám mây và Các chứng chỉ nghề quốc tế",
        content: `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Ngày nay, hạ tầng mạng truyền thống đang chuyển dịch mạnh mẽ sang <strong>Điện toán đám mây (Cloud Computing)</strong> với các nền tảng AWS, Google Cloud, Microsoft Azure. Kỹ sư mạng cần làm chủ các chứng chỉ chuyên nghiệp có giá trị toàn cầu:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-center font-bold">
              <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">Cisco CCNA / CCNP</div>
              <div class="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">CompTIA Network+ / Security+</div>
              <div class="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">AWS Certified Solutions Architect</div>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Vẽ sơ đồ mạng văn phòng đơn giản gồm 1 Router kết nối Internet, 1 Switch, 1 Máy in mạng và 10 máy tính làm việc.",
      "Tìm hiểu thông tin về kỳ thi lấy chứng chỉ quốc tế Cisco CCNA và các nội dung kiến thức trọng tâm của bài thi.",
      "Thảo luận tình huống: Doanh nghiệp bị mã độc tống tiền (Ransomware) mã hóa toàn bộ dữ liệu máy chủ, chuyên viên quản trị hệ thống cần sử dụng bản sao lưu dự phòng (Backup) như thế nào?"
    ],
    summary: "Quản trị mạng và hệ thống chịu trách nhiệm thiết kế hạ tầng, cấu hình máy chủ, bảo đảm kết nối thông suốt và an ninh dữ liệu 24/7. Yêu cầu kiến thức sâu về giao thức TCP/IP, hệ điều hành Linux/Windows Server và các chứng chỉ nghề uy tín như CCNA, Security+.",
    quizzes: [
      {
        q: "Công việc nào sau đây là nhiệm vụ cốt lõi hàng đầu của một chuyên viên Quản trị hệ thống (System Administrator)?",
        options: ["Vẽ tranh hoạt hình bằng Photoshop", "Cài đặt, cấu hình máy chủ Server, quản lý tài khoản và sao lưu dữ liệu tự động", "Bán sim điện thoại", "Giao hàng qua mạng"],
        correctIndex: 1,
        explain: "SysAdmin chịu trách nhiệm bảo đảm máy chủ hoạt động ổn định, phân quyền bảo mật và sao lưu dữ liệu an toàn định kỳ."
      },
      {
        q: "Chứng chỉ quốc tế nào do tập đoàn mạng Cisco cấp được xem là tiêu chuẩn phổ biến nhất đánh giá năng lực cấu hình thiết bị mạng cho kỹ sư?",
        options: ["Adobe Photoshop Expert", "Cisco CCNA (Cisco Certified Network Associate)", "Microsoft Word Specialist", "TOEIC"],
        correctIndex: 1,
        explain: "Cisco CCNA là chứng chỉ mạng uy tín toàn cầu chứng nhận khả năng cài đặt, vận hành và xử lý sự cố mạng doanh nghiệp."
      },
      {
        q: "Quy trình nào giúp doanh nghiệp có thể khôi phục lại toàn bộ dữ liệu máy chủ về trạng thái an toàn sau khi bị virus hoặc thảm họa thiên tai?",
        options: ["Đổi hình nền màn hình", "Sao lưu dự phòng định kỳ (Backup) và kế hoạch phục hồi (Disaster Recovery)", "Tắt màn hình", "Rút dây chuột"],
        correctIndex: 1,
        explain: "Sao lưu dự phòng dữ liệu (Backup) định kỳ và lưu trữ ở nơi an toàn là giải pháp cứu cánh duy nhất khi xảy ra sự cố thảm họa."
      },
      {
        q: "Nền tảng nào sau đây là dịch vụ Điện toán đám mây (Cloud Computing) hàng đầu thế giới mà các chuyên viên hệ thống hiện đại phải làm chủ?",
        options: ["Amazon Web Services (AWS)", "Windows 98", "Cốc Cốc", "Paint"],
        correctIndex: 0,
        explain: "AWS (cùng với Microsoft Azure và Google Cloud) là nhà cung cấp hạ tầng máy chủ đám mây lớn nhất hành tinh hiện nay."
      }
    ]
  },

  // ================= BÀI 21 =================
  {
    num: 21,
    topicNum: 5,
    title: "Bài 21: Nghề bảo trì và hỗ trợ kỹ thuật máy tính",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Mô tả công việc của nhân viên hỗ trợ kỹ thuật IT (IT Support / Helpdesk); Nắm vững quy trình chẩn đoán, phát hiện và khắc phục các sự cố phần cứng, phần mềm thông dụng; Hiểu và thực hiện đạo đức nghề nghiệp về bảo mật thông tin khách hàng.",
    intro: "Máy tính không lên hình, máy in bị kẹt giấy, màn hình xanh chết chóc (BSOD) hay bị nhiễm virus. Ai là 'bác sĩ máy tính' đầu tiên mà mọi nhân viên văn phòng gọi tên?",
    sections: [
      {
        title: "1. Công việc của nhân viên IT Support / Helpdesk",
        content: `
          <p class="mb-3">
            <strong>Nhân viên hỗ trợ kỹ thuật (IT Helpdesk / IT Support):</strong> Là điểm tiếp nhận đầu tiên của doanh nghiệp, có nhiệm vụ giải quyết trực tiếp các khó khăn kỹ thuật cho người dùng nội bộ hoặc khách hàng.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-wrench"></i> Hỗ trợ phần cứng (Hardware Support)
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Lắp ráp, nâng cấp linh kiện máy tính: RAM, ổ cứng SSD, card đồ họa, bộ nguồn.</li>
                <li>Vệ sinh máy tính định kỳ, tra keo tản nhiệt CPU để giảm nhiệt độ máy.</li>
                <li>Bảo dưỡng, thay mực và sửa chữa kẹt giấy cho máy in, máy scan, máy chiếu.</li>
              </ul>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-code-compare"></i> Hỗ trợ phần mềm (Software Support)
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Cài đặt hệ điều hành (Windows, macOS) và các phần mềm văn phòng chuyên dụng.</li>
                <li>Cài đặt, cập nhật phần mềm diệt virus và quét sạch mã độc, phần mềm gián điệp.</li>
                <li>Hỗ trợ từ xa qua các công cụ UltraViewer, AnyDesk, TeamViewer.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Đạo đức nghề nghiệp của kỹ thuật viên máy tính",
        content: `
          <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
            <h5 class="font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-scale-balanced"></i> Quy tắc vàng về bảo mật dữ liệu khách hàng
            </h5>
            <p>1. <strong>Tuyệt đối bảo mật dữ liệu:</strong> Trong quá trình sửa chữa, không được phép xem trộm, sao chép hoặc phát tán hình ảnh, tệp tin riêng tư của khách hàng.</p>
            <p>2. <strong>Trung thực và minh bạch:</strong> Chẩn đoán đúng lỗi, báo đúng giá linh kiện, không tráo đổi linh kiện zin của máy khách hàng.</p>
            <p>3. <strong>Tác phong tôn trọng, kiên nhẫn:</strong> Giải thích lỗi bằng ngôn từ dễ hiểu, không tỏ thái độ khó chịu với người dùng không am hiểu công nghệ.</p>
          </div>
        `
      }
    ],
    practice: [
      "Tìm hiểu ý nghĩa các tiếng bíp (Beep code) của BIOS khi máy tính khởi động bị lỗi RAM (tiếng bíp dài ngắt quãng) hoặc lỗi Card màn hình.",
      "Thực hành tạo một USB cứu hộ Boot máy tính chứa các công cụ kiểm tra ổ cứng (CrystalDiskInfo) và phần mềm sao lưu Ghost/Acronis.",
      "Đóng vai xử lý tình huống: Một nhân viên phòng kế toán báo máy tính bị màn hình xanh chữ trắng (BSOD), em sẽ thực hiện các bước kiểm tra nào?"
    ],
    summary: "Nghề IT Support đòi hỏi kỹ năng chẩn đoán phần cứng, cài đặt phần mềm và hỗ trợ người dùng kiên nhẫn. Đạo đức nghề nghiệp cốt lõi là bảo mật tuyệt đối dữ liệu khách hàng và tác phong làm việc trung thực, tận tâm.",
    quizzes: [
      {
        q: "Công việc nào sau đây thuộc phạm vi trách nhiệm trực tiếp của một nhân viên hỗ trợ kỹ thuật máy tính (IT Support / Helpdesk)?",
        options: ["Lập kế hoạch chiến dịch marketing bán hàng", "Lắp ráp phần cứng, cài đặt Windows, sửa lỗi máy in và hỗ trợ người dùng sử dụng phần mềm", "Thiết kế logo nhận diện thương hiệu", "Viết bài quảng cáo trên Facebook"],
        correctIndex: 1,
        explain: "IT Support là lực lượng chuyên trách giải quyết các trục trặc về phần cứng, phần mềm, mạng và máy in cho người dùng."
      },
      {
        q: "Khi một máy tính bật nguồn quạt vẫn quay nhưng màn hình không lên và phát ra các tiếng kêu 'Bíp' liên tục, nguyên nhân phần cứng phổ biến nhất là gì?",
        options: ["Hỏng bàn phím", "Lỏng hoặc chân cắm thanh RAM bị bám bụi bẩn", "Hỏng chuột quang", "Chưa cài đặt phông chữ tiếng Việt"],
        correctIndex: 1,
        explain: "Tiếng bíp cảnh báo của bo mạch chủ thường chỉ ra sự cố tiếp xúc ở khe cắm RAM hoặc chân tiếp xúc bị oxy hóa bám bụi."
      },
      {
        q: "Phần mềm nào sau đây cho phép nhân viên IT Support điều khiển màn hình máy tính từ xa qua Internet để hỗ trợ sửa lỗi trực tiếp cho người dùng?",
        options: ["UltraViewer / AnyDesk", "VLC Media Player", "Adobe Reader", "Calculator"],
        correctIndex: 0,
        explain: "UltraViewer và AnyDesk là các phần mềm điều khiển màn hình máy tính từ xa phổ biến nhất hiện nay."
      },
      {
        q: "Đạo đức nghề nghiệp tối thượng mà một kỹ thuật viên sửa chữa máy tính bắt buộc phải tuân thủ nghiêm ngặt là gì?",
        options: ["Cố tình báo hỏng linh kiện để thay đồ mới lấy tiền", "Tôn trọng quyền riêng tư, tuyệt đối không xem trộm hay sao chép tệp tin dữ liệu của khách hàng", "Đăng tải ảnh chụp trong máy khách lên mạng xã hội", "Tự ý xóa hết dữ liệu khách hàng mà không hỏi trước"],
        correctIndex: 1,
        explain: "Bảo mật dữ liệu cá nhân của khách hàng là nguyên tắc đạo đức và pháp lý quan trọng nhất của người làm nghề kỹ thuật."
      }
    ]
  },

  // ================= BÀI 22 =================
  {
    num: 22,
    topicNum: 6,
    title: "Bài 22: Thiết bị số thông minh và Internet vạn vật (IoT)",
    badgeColor: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    dotColor: "bg-teal-500",
    time: "45 phút",
    target: "Hiểu được khái niệm Internet vạn vật (IoT); Phân tích kiến trúc của một hệ sinh thái nhà thông minh (Smart Home); Nhận diện các cảm biến và thiết bị chấp hành; Nhận thức các nguy cơ mất an toàn bảo mật trên thiết bị IoT.",
    intro: "Vừa về tới cửa nhà, đèn tự động bật sáng, điều hòa chỉnh về nhiệt độ dễ chịu và rèm cửa tự kéo ra. Công nghệ nào đang biến những ngôi nhà bình thường thành ngôi nhà thông minh?",
    sections: [
      {
        title: "1. Khái niệm Internet vạn vật (IoT - Internet of Things)",
        content: `
          <p class="mb-3">
            <strong>Internet vạn vật (IoT):</strong> Là mạng lưới khổng lồ kết nối hàng tỷ vật thể vật lý ("Things") trong thế giới thực được tích hợp cảm biến, phần mềm xử lý và kết nối mạng (Wi-Fi, Bluetooth, Zigbee) để tự động thu thập và trao đổi dữ liệu với nhau qua Internet mà không cần sự can thiệp trực tiếp của con người.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-microchip"></i> 1. Cảm biến (Sensors - Thu nhận)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Đóng vai trò như các giác quan: Cảm biến nhiệt độ, độ ẩm không khí, cảm biến chuyển động hồng ngoại PIR, cảm biến khói cháy, cảm biến rò rỉ khí gas.
              </p>
            </div>
            <div class="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h5 class="font-bold text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-bolt"></i> 2. Thiết bị chấp hành (Actuators - Thực thi)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Đóng vai trò như tay chân: Đèn thông minh đổi màu, công tắc rơ-le bật tắt bình nóng lạnh, động cơ kéo rèm tự động, khóa cửa điện tử vân tay, van nước tưới cây tự động.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Hệ sinh thái Nhà thông minh (Smart Home) và Nguy cơ bảo mật",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300">
              <strong>Bộ điều khiển trung tâm (Hub / Gateway):</strong> "Bộ não" của ngôi nhà kết nối các thiết bị dùng sóng Zigbee/Z-Wave với mạng Wi-Fi gia đình và đồng bộ lên đám mây, cho phép gia chủ điều khiển toàn bộ ngôi nhà qua ứng dụng di động hoặc giọng nói.
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50 text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <strong class="text-rose-700 dark:text-rose-300 uppercase block mb-1">
                <i class="fa-solid fa-shield-virus"></i> Cảnh báo an toàn thông tin thiết bị IoT
              </strong>
              <p>- Thiết bị IoT giá rẻ thường có bảo mật kém, dễ bị tin tặc tấn công biến thành mạng máy tính ma (Botnet) để thực hiện tấn công mạng DDoS.</p>
              <p>- <strong>Biện pháp phòng ngừa:</strong> Luôn đổi mật khẩu mặc định (admin/admin), cập nhật bản vá Firmware mới nhất và đặt các thiết bị IoT trên một mạng Wi-Fi khách riêng biệt (Guest Wi-Fi).</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Khảo sát các thiết bị số thông minh đang có trong gia đình em (Smart TV, Robot hút bụi, Camera Wi-Fi, Đồng hồ thông minh) và vẽ sơ đồ kết nối của chúng tới Router.",
      "Tìm hiểu cách thiết lập kịch bản thông minh (Scene): 'Nếu phát hiện chuyển động sau 18h thì tự động bật đèn hành lang'.",
      "Thảo luận nguy cơ bảo mật khi người dùng lắp đặt Camera an ninh trong nhà nhưng không đổi mật khẩu mặc định của nhà sản xuất."
    ],
    summary: "IoT là mạng lưới kết nối vạn vật qua cảm biến và Internet. Kiến trúc Smart Home gồm cảm biến (thu nhận thông tin), bộ điều khiển trung tâm Hub (xử lý logic) và thiết bị chấp hành (thực thi hành động). Cần luôn đổi mật khẩu mặc định để bảo vệ an toàn cho ngôi nhà thông minh.",
    quizzes: [
      {
        q: "Thuật ngữ Internet vạn vật (IoT - Internet of Things) đề cập đến điều gì?",
        options: ["Một trang web đọc báo mới", "Mạng lưới kết nối các vật thể vật lý được trang bị cảm biến và phần mềm để tự động trao đổi dữ liệu qua Internet", "Một loại dây cáp mạng mới thay thế cáp quang", "Phần mềm vẽ đồ họa 3D"],
        correctIndex: 1,
        explain: "IoT kết nối mọi đồ vật xung quanh (đèn, xe, cảm biến) vào mạng Internet để trao đổi thông tin tự động."
      },
      {
        q: "Thành phần nào trong hệ thống nhà thông minh đóng vai trò 'giác quan' ghi nhận thông tin nhiệt độ, độ ẩm hoặc chuyển động của môi trường?",
        options: ["Thiết bị chấp hành (Actuators)", "Cảm biến (Sensors)", "Dây nguồn điện", "Bóng đèn sợi đốt"],
        correctIndex: 1,
        explain: "Cảm biến (Sensors) đo lường và chuyển đổi các đại lượng vật lý thành tín hiệu điện tử để gửi về bộ xử lý."
      },
      {
        q: "Hành động nào sau đây là thói quen nguy hiểm nhất làm tăng nguy cơ Camera an ninh gia đình bị tin tặc chiếm quyền kiểm soát?",
        options: ["Lau sạch ống kính camera", "Giữ nguyên mật khẩu mặc định của nhà sản xuất (như admin/123456)", "Cắm dây nguồn cho camera", "Đặt camera ở trên cao"],
        correctIndex: 1,
        explain: "Giữ mật khẩu mặc định khiến tin tặc có thể quét địa chỉ IP và truy cập trực tiếp vào luồng video của camera rất dễ dàng."
      },
      {
        q: "Giao thức truyền thông không dây tầm ngắn, tiêu thụ cực ít năng lượng pin rất phổ biến trong các cảm biến Smart Home là gì?",
        options: ["Zigbee", "HDMI", "VGA", "Cáp quang"],
        correctIndex: 0,
        explain: "Zigbee là giao thức không dây tiêu thụ năng lượng cực thấp, giúp các cảm biến pin chạy liên tục 2-3 năm mà không cần sạc."
      }
    ]
  },

  // ================= BÀI 23 =================
  {
    num: 23,
    topicNum: 7,
    title: "Bài 23: Dự án thiết kế website: Lập kế hoạch và phác thảo wireframe",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Lựa chọn đề tài dự án website thực tế; Xác định mục tiêu và đối tượng độc giả mục tiêu; Xây dựng sơ đồ cấu trúc trang web (Sitemap); Phác thảo bản vẽ cấu trúc giao diện thô (Wireframe) trước khi viết mã.",
    intro: "Trước khi xây dựng một tòa nhà, kiến trúc sư phải vẽ bản vẽ thiết kế chi tiết. Tương tự, một dự án website thành công bắt đầu từ khâu lập kế hoạch và phác thảo Wireframe như thế nào?",
    sections: [
      {
        title: "1. Xác định mục tiêu, đề tài và Sơ đồ trang web (Sitemap)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm mb-1">1. Lựa chọn đề tài dự án</h5>
              <p>- Trang web giới thiệu Trường THPT hoặc Câu lạc bộ Tin học của lớp.</p>
              <p>- Trang web quảng bá du lịch, ẩm thực quê hương.</p>
              <p>- Trang thông tin chia sẻ tài liệu học tập khối 12.</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1">2. Sơ đồ trang web (Sitemap)</h5>
              <p>Mô hình cây phân cấp các trang trong website:</p>
              <p class="font-mono text-blue-600 dark:text-blue-400">Trang chủ (index.html) &rarr; Giới thiệu (about.html), Hoạt động (activities.html), Liên hệ (contact.html).</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Phác thảo giao diện Wireframe",
        content: `
          <p class="mb-2"><strong>Wireframe:</strong> Là bản vẽ đen trắng phác họa bố cục khung xương thô của trang web:</p>
          <div class="p-3.5 bg-gray-900 text-gray-100 rounded-xl font-mono text-xs space-y-1">
            <p>+-------------------------------------------------------------+</p>
            <p>| [LOGO]                MENU ĐIỀU HƯỚNG                [NÚT] |</p>
            <p>+-------------------------------------------------------------+</p>
            <p>|                   BANNER CHÍNH HERO BANNER                  |</p>
            <p>+-------------------------------------------------------------+</p>
            <p>| [Cột Trái: Giới thiệu]   |   [Cột Phải: Tin tức nổi bật]   |</p>
            <p>+-------------------------------------------------------------+</p>
            <p>| FOOTER: THÔNG TIN BẢN QUYỀN, ĐỊA CHỈ & LIÊN HỆ              |</p>
            <p>+-------------------------------------------------------------+</p>
          </div>
        `
      }
    ],
    practice: [
      "Thành lập nhóm dự án (3-4 học sinh) và thống nhất lựa chọn đề tài website cho nhóm.",
      "Vẽ sơ đồ cây Sitemap gồm trang chủ và ít nhất 3 trang phụ trên phần mềm hoặc giấy vẽ A4.",
      "Phác thảo Wireframe chi tiết cho trang chủ phân định rõ ràng các khối Header, Banner, Nội dung 2 cột và Footer."
    ],
    summary: "Thiết kế website bắt đầu bằng việc xác định mục tiêu và đối tượng người dùng, xây dựng sơ đồ phân cấp trang (Sitemap) và phác thảo khung xương giao diện (Wireframe) để định hình cấu trúc trước khi bắt tay viết mã HTML/CSS.",
    quizzes: [
      {
        q: "Bản phác thảo khung xương thô thể hiện cấu trúc bố cục sắp xếp các khối thành phần của trang web (Header, Banner, Cột nội dung, Footer) được gọi là gì?",
        options: ["Source Code", "Bản vẽ Wireframe", "Database", "Log file"],
        correctIndex: 1,
        explain: "Wireframe là bản vẽ kiến trúc giao diện thô giúp các lập trình viên và thiết kế hình dung bố cục trang web trước khi code."
      },
      {
        q: "Tệp tin HTML trang chủ đóng vai trò là cửa ngõ chính của một website luôn được đặt tên theo quy chuẩn mặc định của máy chủ là gì?",
        options: ["<code>home.html</code>", "<code>index.html</code>", "<code>main.html</code>", "<code>start.html</code>"],
        correctIndex: 1,
        explain: "Máy chủ web (Apache, Nginx, GitHub Pages) mặc định tìm kiếm tệp tin <code>index.html</code> để làm trang chủ khi người dùng truy cập."
      },
      {
        q: "Sơ đồ nào thể hiện mối quan hệ liên kết và thứ bậc phân cấp giữa các trang trong một dự án website?",
        options: ["Sơ đồ mạch điện", "Sơ đồ trang web (Sitemap)", "Sơ đồ khối thuật toán Flowchart", "Bảng mã màu"],
        correctIndex: 1,
        explain: "Sitemap mô tả cấu trúc hình cây của toàn bộ các trang con và đường dẫn liên kết trong website."
      },
      {
        q: "Bước đầu tiên quan trọng nhất cần thực hiện trước khi bắt tay vào gõ mã lệnh xây dựng một trang web là gì?",
        options: ["Mua tên miền đắt tiền", "Xác định mục tiêu của website, đối tượng người dùng và lập kế hoạch cấu trúc nội dung", "Cài đặt phần mềm diệt virus", "Thiết kế logo 3D"],
        correctIndex: 1,
        explain: "Khảo sát yêu cầu, xác định rõ đối tượng mục tiêu phục vụ là nền tảng để xây dựng website đúng hướng và hiệu quả."
      }
    ]
  },

  // ================= BÀI 24 =================
  {
    num: 24,
    topicNum: 7,
    title: "Bài 24: Xây dựng cấu trúc HTML cho trang chủ website",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Tạo cấu trúc thư mục dự án chuẩn; Viết mã nguồn HTML5 hoàn chỉnh cho trang chủ `index.html`; Kết hợp chuẩn xác các thẻ ngữ nghĩa `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`; Đặt tên lớp `class` và `id` khoa học.",
    intro: "Bản vẽ Wireframe đã sẵn sàng trên giấy. Giờ là lúc chúng ta chuyển hóa từng nét vẽ thành những khối mã HTML5 ngữ nghĩa vững chắc cho trang chủ.",
    sections: [
      {
        title: "1. Cấu trúc cây thư mục dự án chuyên nghiệp",
        content: `
          <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs my-3 space-y-1">
            <p class="text-amber-400 font-bold">my-website/ &lt;-- Thư mục gốc dự án</p>
            <p>├── <span class="text-blue-400">index.html</span> (Trang chủ chính)</p>
            <p>├── <span class="text-blue-400">about.html</span> (Trang giới thiệu)</p>
            <p>├── <span class="text-emerald-400">css/</span> (Thư mục chứa kiểu dáng)</p>
            <p>│&nbsp;&nbsp; └── style.css</p>
            <p>├── <span class="text-purple-400">images/</span> (Thư mục chứa ảnh)</p>
            <p>│&nbsp;&nbsp; ├── logo.png</p>
            <p>│&nbsp;&nbsp; └── banner.jpg</p>
            <p>└── <span class="text-cyan-400">js/</span> (Thư mục mã JavaScript nếu có)</p>
          </div>
        `
      },
      {
        title: "2. Viết khung HTML5 cho các khối chính của trang",
        content: `
          <p class="mb-2">Mã nguồn tệp <code>index.html</code> sử dụng các thẻ ngữ nghĩa:</p>
          <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
            &lt;header&gt;<br>
            &nbsp;&nbsp;&lt;img src="images/logo.png" alt="Logo" class="logo"&gt;<br>
            &nbsp;&nbsp;&lt;nav&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="index.html" class="active"&gt;Trang chủ&lt;/a&gt;&lt;/li&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="about.html"&gt;Giới thiệu&lt;/a&gt;&lt;/li&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="#contact"&gt;Liên hệ&lt;/a&gt;&lt;/li&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br>
            &nbsp;&nbsp;&lt;/nav&gt;<br>
            &lt;/header&gt;<br><br>
            &lt;main&gt;<br>
            &nbsp;&nbsp;&lt;section class="hero-banner"&gt;...&lt;/section&gt;<br>
            &nbsp;&nbsp;&lt;section class="featured-news"&gt;...&lt;/section&gt;<br>
            &lt;/main&gt;<br><br>
            &lt;footer&gt;<br>
            &nbsp;&nbsp;&lt;p&gt;&amp;copy; 2026 Dự án Tin học 12. Bản quyền thuộc về Nhóm 1.&lt;/p&gt;<br>
            &lt;/footer&gt;
          </div>
        `
      }
    ],
    practice: [
      "Khởi tạo cấu trúc thư mục dự án gồm các thư mục con `css/`, `images/`, `js/` trên máy tính.",
      "Soạn thảo tệp `index.html` hoàn chỉnh có phần Header chứa logo và menu danh sách liên kết `<ul>`, `<li>`, `<a>`.",
      "Kiểm tra tính hợp lệ của mã HTML bằng cách mở tệp trên trình duyệt để kiểm tra cấu trúc hiển thị thô."
    ],
    summary: "Xây dựng website đòi hỏi tổ chức thư mục khoa học (css/, images/, js/). Trang chủ index.html được dựng khung bằng các thẻ ngữ nghĩa chuẩn HTML5 (<header>, <nav>, <main>, <section>, <footer>) cùng hệ thống class/id rõ ràng.",
    quizzes: [
      {
        q: "Thư mục nào sau đây là nơi lưu trữ khoa học nhất dành cho tất cả các bức ảnh, biểu tượng logo của dự án website?",
        options: ["<code>css/</code>", "<code>images/</code>", "<code>temp/</code>", "<code>fonts/</code>"],
        correctIndex: 1,
        explain: "Thư mục <code>images/</code> là thư mục chuẩn được cộng đồng phát triển web quy ước lưu trữ tài nguyên hình ảnh."
      },
      {
        q: "Cặp thẻ nào sau đây được khuyến nghị sử dụng để xây dựng thanh thực đơn điều hướng (Menu bar) trong thẻ <code>&lt;nav&gt;</code>?",
        options: ["<code>&lt;table&gt;</code> và <code>&lt;tr&gt;</code>", "Danh sách không thứ tự <code>&lt;ul&gt;</code> và các thẻ mục <code>&lt;li&gt;</code>", "<code>&lt;h1&gt;</code> đến <code>&lt;h6&gt;</code>", "<code>&lt;form&gt;</code> và <code>&lt;input&gt;</code>"],
        correctIndex: 1,
        explain: "Sử dụng danh sách <code>&lt;ul&gt;</code> và <code>&lt;li&gt;</code> kết hợp với thẻ <code>&lt;a&gt;</code> là cấu trúc chuẩn ngữ nghĩa và dễ tạo kiểu CSS nhất cho menu."
      },
      {
        q: "Đoạn mã khai báo bản quyền đặc biệt <code>&copy;</code> trong HTML sẽ hiển thị biểu tượng nào trên màn hình?",
        options: ["Biểu tượng lá cờ", "Biểu tượng chữ C tròn bản quyền © (Copyright)", "Biểu tượng hình trái tim", "Biểu tượng tiền tệ dollar $"],
        correctIndex: 1,
        explain: "Thực thể HTML <code>&amp;copy;</code> hiển thị biểu tượng bản quyền © tiêu chuẩn ở chân trang web."
      },
      {
        q: "Việc đặt tên <code>class</code> và <code>id</code> cho các phần tử HTML nên tuân theo nguyên tắc nào?",
        options: ["Đặt tên bằng tiếng Việt có dấu và phím cách", "Đặt tên bằng tiếng Anh ngắn gọn, có nghĩa, phân cách bằng dấu gạch ngang (ví dụ: main-header, hero-btn)", "Đặt tên số ngẫu nhiên", "Không cần đặt tên"],
        correctIndex: 1,
        explain: "Quy ước đặt tên chuẩn kebab-case (chữ thường nối bằng gạch ngang) giúp mã nguồn sáng sủa, chuyên nghiệp và dễ viết CSS."
      }
    ]
  },

  // ================= BÀI 25 =================
  {
    num: 25,
    topicNum: 7,
    title: "Bài 25: Thiết kế giao diện CSS hoàn chỉnh cho website",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Áp dụng kỹ thuật CSS Reset; Định dạng hệ thống Typography và phối màu giao diện chuyên nghiệp; Sử dụng kỹ thuật Flexbox để dàn hàng ngang thanh Menu và chia cột nội dung; Thiết lập hiệu ứng chuyển động mượt mà (Transitions) khi rê chuột.",
    intro: "Khung xương HTML đã sẵn sàng, bây giờ chúng ta sẽ 'khoác áo mới' bằng CSS để biến trang web thành một sản phẩm ấn tượng, chuẩn mực như các website chuyên nghiệp.",
    sections: [
      {
        title: "1. Kỹ thuật CSS Reset và Thiết lập biến màu sắc",
        content: `
          <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs my-3 leading-relaxed">
            <span class="text-gray-400">/* 1. Xóa lề mặc định của trình duyệt và cố định box-sizing */</span><br>
            * {<br>
            &nbsp;&nbsp;margin: 0;<br>
            &nbsp;&nbsp;padding: 0;<br>
            &nbsp;&nbsp;box-sizing: border-box;<br>
            }<br><br>
            <span class="text-gray-400">/* 2. Thiết lập phông chữ và màu chữ mặc định cho toàn trang */</span><br>
            body {<br>
            &nbsp;&nbsp;font-family: 'Segoe UI', Arial, sans-serif;<br>
            &nbsp;&nbsp;color: #334155;<br>
            &nbsp;&nbsp;background-color: #f8fafc;<br>
            &nbsp;&nbsp;line-height: 1.6;<br>
            }
          </div>
        `
      },
      {
        title: "2. Dàn hàng ngang thanh Menu với Flexbox",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm">
              Sức mạnh của Flexbox (display: flex)
            </h5>
            <p class="text-xs text-gray-600 dark:text-gray-300">
              Chỉ cần khai báo <code>display: flex</code> ở phần tử cha, các phần tử con sẽ tự động dàn thành một hàng ngang thanh lịch:
            </p>
            <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
              nav ul {<br>
              &nbsp;&nbsp;display: flex; <span class="text-gray-400">/* Dàn hàng ngang */</span><br>
              &nbsp;&nbsp;list-style: none; <span class="text-gray-400">/* Bỏ dấu chấm tròn */</span><br>
              &nbsp;&nbsp;gap: 20px; <span class="text-gray-400">/* Khoảng cách giữa các mục menu */</span><br>
              }
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Tạo tệp `css/style.css` và liên kết với `index.html`.",
      "Thiết lập quy tắc CSS Reset `* { margin: 0; padding: 0; box-sizing: border-box; }`.",
      "Áp dụng `display: flex` cho thanh Menu và thêm hiệu ứng `transition: all 0.3s ease;` đổi màu chữ khi người dùng rê chuột qua liên kết."
    ],
    summary: "CSS hoàn thiện giao diện qua kỹ thuật CSS Reset, Typography, phối màu và Flexbox (display: flex, justify-content, gap). Sử dụng transition tạo hiệu ứng chuyển màu mượt mà khi người dùng tương tác.",
    quizzes: [
      {
        q: "Đoạn mã CSS Reset nào sau đây là tiêu chuẩn vàng giúp loại bỏ lề mặc định của mọi trình duyệt và cố định mô hình hộp?",
        options: ["<code>* { margin: 0; padding: 0; box-sizing: border-box; }</code>", "<code>body { color: black; }</code>", "<code>table { border: 1px; }</code>", "<code>p { font-size: 14px; }</code>"],
        correctIndex: 0,
        explain: "Bộ chọn sao <code>*</code> áp dụng cho tất cả phần tử, đưa margin và padding về 0 và cố định <code>border-box</code>."
      },
      {
        q: "Thuộc tính CSS nào biến một danh sách <code>&lt;ul&gt;</code> từ dạng danh sách dọc mặc định thành một hàng ngang trải dài trên thanh menu?",
        options: ["<code>display: flex;</code>", "<code>position: absolute;</code>", "<code>text-align: right;</code>", "<code>float: none;</code>"],
        correctIndex: 0,
        explain: "<code>display: flex;</code> kích hoạt mô hình Flexible Box, mặc định xếp các phần tử con thành một hàng ngang liên tục."
      },
      {
        q: "Để loại bỏ các dấu chấm tròn đen mặc định ở đầu mỗi mục của danh sách <code>&lt;ul&gt;</code>, ta dùng thuộc tính nào?",
        options: ["<code>bullet: none;</code>", "<code>list-style: none;</code>", "<code>text-decoration: none;</code>", "<code>dot: hidden;</code>"],
        correctIndex: 1,
        explain: "<code>list-style: none;</code> xóa bỏ toàn bộ ký hiệu đánh dấu đầu dòng của danh sách trong CSS."
      },
      {
        q: "Thuộc tính CSS nào tạo ra hiệu ứng đổi màu hoặc biến đổi kích thước diễn ra từ từ, mượt mà thay vì giật cục khi người dùng rê chuột <code>:hover</code>?",
        options: ["<code>transition: all 0.3s ease;</code>", "<code>animation-delay: 5s;</code>", "<code>transform: rotate;</code>", "<code>speed: slow;</code>"],
        correctIndex: 0,
        explain: "<code>transition</code> điều khiển quá trình biến đổi thuộc tính CSS diễn ra mượt mà trong một khoảng thời gian (như 0.3 giây)."
      }
    ]
  },

  // ================= BÀI 26 =================
  {
    num: 26,
    topicNum: 7,
    title: "Bài 26: Tích hợp các thành phần tương tác vào trang web",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Tạo trang 'Liên hệ / Góp ý' với form tương tác; Nhúng biểu mẫu trực tuyến Google Forms để thu thập dữ liệu; Nhúng bản đồ Google Maps tương tác; Nhúng video bài giảng từ YouTube với chế độ hiển thị linh hoạt.",
    intro: "Một trang web hiện đại cần tương tác hai chiều với người đọc. Làm thế nào để học sinh toàn trường có thể gửi ý kiến đóng góp, xem video giới thiệu câu lạc bộ và tìm đường tới trường ngay trên website?",
    sections: [
      {
        title: "1. Nhúng biểu mẫu thu thập thông tin Google Forms",
        content: `
          <p class="mb-3">
            Thay vì phải tự lập trình hệ thống máy chủ Backend phức tạp để lưu dữ liệu, giải pháp tiện lợi và bảo mật là sử dụng <strong>Google Forms</strong>:
          </p>
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
            <p>1. Truy cập <code>forms.google.com</code> và tạo biểu mẫu khảo sát ý kiến.</p>
            <p>2. Nhấn nút <strong>Gửi</strong> (Send) &rarr; Chọn biểu tượng nhúng <code>&lt;&gt;</code> &rarr; Sao chép đoạn mã <code>&lt;iframe&gt;</code>.</p>
            <p>3. Dán đoạn mã iframe vào tệp <code>contact.html</code> của trang web.</p>
          </div>
        `
      },
      {
        title: "2. Tích hợp bản đồ vị trí Google Maps và Video YouTube",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-map-location-dot"></i> Nhúng Google Maps
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Cho phép người dùng phóng to, thu nhỏ, tìm đường tới trường học trực tiếp trên trang web mà không cần rời khỏi trang.
              </p>
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-brands fa-youtube"></i> Nhúng Video YouTube
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Sử dụng hạ tầng lưu trữ tốc độ cao của YouTube giúp trang web tải nhanh và không tốn dung lượng băng thông máy chủ của trường.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Tạo một biểu mẫu Google Form ngắn (3 câu hỏi) khảo sát ý kiến học sinh về hoạt động ngoại khóa.",
      "Lấy mã nhúng `<iframe>` của biểu mẫu Google Form và tích hợp vào trang `contact.html`.",
      "Tìm vị trí trường học trên Google Maps và nhúng bản đồ tương tác vào chân trang của website."
    ],
    summary: "Tích hợp các dịch vụ đám mây thông qua thẻ <iframe> (Google Forms, Google Maps, YouTube) giúp website có tính tương tác cao, giàu nội dung đa phương tiện mà không tốn chi phí lập trình máy chủ phức tạp.",
    quizzes: [
      {
        q: "Công cụ trực tuyến miễn phí nào của Google giúp lập trình viên nhanh chóng thu thập khảo sát, góp ý từ người dùng và tự động lưu vào Google Sheets?",
        options: ["Google Drive", "Google Forms (Biểu mẫu)", "Google Maps", "Google Translate"],
        correctIndex: 1,
        explain: "Google Forms cho phép tạo biểu mẫu khảo sát trực tuyến và tự động đồng bộ kết quả vào trang tính Google Sheets."
      },
      {
        q: "Thẻ HTML nào được sử dụng để tích hợp bản đồ Google Maps hoặc video YouTube vào trang web cá nhân?",
        options: ["<code>&lt;iframe&gt;</code>", "<code>&lt;map&gt;</code>", "<code>&lt;video&gt;</code>", "<code>&lt;link&gt;</code>"],
        correctIndex: 0,
        explain: "Thẻ <code>&lt;iframe&gt;</code> là thẻ chuẩn dùng để nhúng các dịch vụ bên ngoài vào trang web."
      },
      {
        q: "Lợi ích lớn nhất của việc nhúng video giới thiệu trường học từ YouTube thay vì tải trực tiếp tệp video nặng 500MB lên máy chủ web của trường là gì?",
        options: ["Video tự động có phụ đề mọi thứ tiếng", "Tiết kiệm dung lượng lưu trữ máy chủ và tận dụng băng thông truyền tải siêu tốc của YouTube", "Không cần kết nối Internet vẫn xem được", "Video tự biến thành hình vẽ 2D"],
        correctIndex: 1,
        explain: "Nhúng YouTube giúp máy chủ web của bạn nhẹ nhàng, không bị sập băng thông khi có nhiều người cùng xem một lúc."
      },
      {
        q: "Thuộc tính nào của thẻ <code>&lt;iframe&gt;</code> cho phép người dùng mở video YouTube sang chế độ toàn màn hình máy tính?",
        options: ["<code>allowfullscreen</code>", "<code>fullscreen=\"yes\"</code>", "<code>maximized</code>", "<code>screen=\"full\"</code>"],
        correctIndex: 0,
        explain: "Thuộc tính boolean <code>allowfullscreen</code> cấp quyền cho khung iframe mở rộng hiển thị toàn màn hình."
      }
    ]
  },

  // ================= BÀI 27 =================
  {
    num: 27,
    topicNum: 7,
    title: "Bài 27: Kiểm thử, tối ưu và sửa lỗi trang web",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Thực hiện quy trình kiểm thử trang web (Testing); Kiểm tra lỗi cú pháp mã nguồn qua công cụ W3C Validator; Kiểm tra khả năng tương thích trên nhiều trình duyệt khác nhau (Cross-browser); Tối ưu hóa kích thước hình ảnh để tăng tốc độ tải trang.",
    intro: "Một trang web hiển thị đẹp trên máy tính của bạn nhưng khi mở trên điện thoại của bạn bè lại bị vỡ hình, lệch chữ? Làm thế nào để kiểm thử và tối ưu trang web trước khi ra mắt?",
    sections: [
      {
        title: "1. Quy trình kiểm thử trang web toàn diện",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm mb-1">Các hạng mục cần kiểm thử</h5>
              <div>1. <strong>Kiểm tra liên kết gãy (Broken Links):</strong> Đảm bảo tất cả các nút bấm và siêu liên kết đều dẫn đến đúng trang đích, không báo lỗi 404.</div>
              <div>2. <strong>Kiểm tra tính tương thích đa trình duyệt:</strong> Mở trang web trên Google Chrome, Microsoft Edge, Mozilla Firefox và Safari.</div>
              <div>3. <strong>Kiểm tra giao diện di động (Responsive):</strong> Dùng phím F12 trên trình duyệt để giả lập màn hình iPhone, iPad, kiểm tra chữ không bị tràn màn hình.</div>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1">Công cụ kiểm tra chuẩn W3C</h5>
              <p>Truy cập <code>validator.w3.org</code> để quét và phát hiện các lỗi cú pháp thẻ HTML chưa đóng, thuộc tính viết sai chính tả.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Tối ưu hóa tốc độ tải trang web",
        content: `
          <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1">
              Nguyên nhân lớn nhất khiến trang web tải chậm: Hình ảnh quá nặng!
            </h5>
            <p>- Bức ảnh chụp từ điện thoại thường có dung lượng 5MB - 10MB, khiến người dùng 3G/4G phải chờ đợi lâu.</p>
            <p>- <strong>Giải pháp:</strong> Nén ảnh qua các công cụ trực tuyến (như TinyPNG) và chuyển sang định dạng hiện đại <strong>WebP</strong> để giảm 80% dung lượng mà chất lượng hình ảnh vẫn sắc nét.</p>
          </div>
        `
      }
    ],
    practice: [
      "Mở website dự án trên trình duyệt, nhấn phím F12 (hoặc Ctrl + Shift + I) để mở Developer Tools và kích hoạt chế độ xem trên điện thoại di động (Toggle device toolbar).",
      "Rà soát và nhấp thử vào tất cả các liên kết trong thanh menu để đảm bảo không có liên kết nào bị lỗi 404.",
      "Sử dụng công cụ TinyPNG để nén thử 3 bức ảnh trong thư mục `images/` và so sánh dung lượng trước/sau khi nén."
    ],
    summary: "Kiểm thử website gồm kiểm tra liên kết gãy, chuẩn hóa mã nguồn bằng W3C Validator và kiểm thử hiển thị đa thiết bị. Tối ưu dung lượng hình ảnh (nén ảnh WebP) là biện pháp then chốt giúp website tải nhanh và giữ chân người dùng.",
    quizzes: [
      {
        q: "Công cụ Developer Tools tích hợp sẵn trong trình duyệt (Chrome/Edge) có thể được mở nhanh chóng bằng phím tắt nào?",
        options: ["Phím F5", "Phím F12 (hoặc Ctrl + Shift + I)", "Phím Esc", "Phím Alt + F4"],
        correctIndex: 1,
        explain: "Phím F12 mở bảng điều khiển nhà phát triển (DevTools) để kiểm tra mã nguồn, CSS và giả lập giao diện di động."
      },
      {
        q: "Nguyên nhân phổ biến nhất khiến một trang web tải rất chậm và tốn nhiều dung lượng mạng của người dùng là gì?",
        options: ["Có quá nhiều chữ văn bản", "Sử dụng các hình ảnh gốc có kích thước và dung lượng quá lớn (chưa qua nén tối ưu)", "Dùng phông chữ Arial", "Dùng thẻ <h1>"],
        correctIndex: 1,
        explain: "Hình ảnh nặng chưa được nén chiếm đến hơn 80% dung lượng tải về của một trang web thông thường."
      },
      {
        q: "Mã lỗi HTTP nào xuất hiện trên màn hình khi người dùng nhấp vào một siêu liên kết dẫn đến một trang web hoặc tệp tin không tồn tại?",
        options: ["200 OK", "404 Not Found (Không tìm thấy trang)", "500 Internal Error", "301 Redirect"],
        correctIndex: 1,
        explain: "Mã lỗi 404 Not Found báo hiệu máy chủ không tìm thấy tài nguyên ứng với đường dẫn URL được yêu cầu."
      },
      {
        q: "Trang web chính thức của tổ chức tiêu chuẩn mạng W3C cung cấp công cụ kiểm tra lỗi cú pháp HTML trực tuyến miễn phí có địa chỉ là gì?",
        options: ["<code>validator.w3.org</code>", "<code>google.com</code>", "<code>checkcode.vn</code>", "<code>html-fixer.com</code>"],
        correctIndex: 0,
        explain: "<code>validator.w3.org</code> là công cụ chuẩn mực của World Wide Web Consortium (W3C) giúp phát hiện các lỗi sai cú pháp HTML."
      }
    ]
  },

  // ================= BÀI 28 =================
  {
    num: 28,
    topicNum: 7,
    title: "Bài 28: Xuất bản và quản trị trang web trực tuyến",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Hiểu quy trình đưa một trang web từ máy tính cá nhân lên mạng Internet; Đăng ký tài khoản và tạo kho mã nguồn (Repository) trên GitHub; Kích hoạt thành công dịch vụ xuất bản trang web miễn phí GitHub Pages; Lập kế hoạch quản trị và cập nhật website định kỳ.",
    intro: "Trang web của nhóm đã hoàn thành trên máy tính, nhưng làm thế nào để bạn bè ở xa và thầy cô có thể truy cập bằng một đường link Internet công khai 24/24 hoàn toàn miễn phí?",
    sections: [
      {
        title: "1. Các phương thức xuất bản website lên Internet",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-gray-900 dark:text-white mb-1">Web Hosting truyền thống</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Thuê máy chủ lưu trữ (Hosting) và mua tên miền riêng (.com, .vn). Phù hợp cho doanh nghiệp lớn, chi phí duy trì hàng năm.
              </p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-1">Dịch vụ đám mây GitHub Pages</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dịch vụ lưu trữ và xuất bản website tĩnh (HTML, CSS, JS) miễn phí 100% của GitHub. Tốc độ cực nhanh, hỗ trợ chứng chỉ bảo mật HTTPS tự động. Rất lý tưởng cho học sinh, sinh viên.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Hướng dẫn 4 bước xuất bản website với GitHub Pages",
        content: `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-xs text-gray-700 dark:text-gray-300">
            <p><strong>Bước 1:</strong> Đăng ký tài khoản miễn phí tại <code>github.com</code>.</p>
            <p><strong>Bước 2:</strong> Nhấn nút <strong>New Repository</strong> &rarr; Đặt tên kho lưu trữ (ví dụ: <code>du-an-tin-hoc-12</code>) &rarr; Chọn chế độ <em>Public</em>.</p>
            <p><strong>Bước 3:</strong> Tải toàn bộ mã nguồn của dự án (tệp <code>index.html</code> và các thư mục <code>css/</code>, <code>images/</code>) lên kho chứa qua nút <em>Upload files</em>.</p>
            <p><strong>Bước 4:</strong> Vào mục <strong>Settings</strong> của kho lưu trữ &rarr; Chọn thẻ <strong>Pages</strong> ở cột bên trái &rarr; Tại mục <em>Branch</em>, chọn nhánh <strong>main</strong> và thư mục <strong>/ (root)</strong> &rarr; Bấm <strong>Save</strong>.</p>
            <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-semibold mt-2">
              🎉 Sau khoảng 1-2 phút, trang web sẽ chính thức hoạt động tại địa chỉ:<br>
              <code>https://&lt;tên_tài_khoản&gt;.github.io/&lt;tên_kho_chứa&gt;/</code>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Đăng ký một tài khoản cá nhân trên nền tảng GitHub và xác thực email.",
      "Tạo một repository mới trên GitHub và tải toàn bộ mã nguồn website dự án nhóm lên.",
      "Kích hoạt tính năng GitHub Pages, sao chép đường dẫn trực tuyến công khai và gửi cho giáo viên cũng như các bạn trong lớp cùng trải nghiệm sản phẩm."
    ],
    summary: "GitHub Pages là nền tảng đám mây xuất bản website tĩnh miễn phí, tin cậy và có sẵn HTTPS. Quy trình gồm: Tạo tài khoản GitHub -> Tạo Public Repository -> Tải mã nguồn lên nhánh main -> Kích hoạt Pages trong Settings -> Nhận đường link trực tuyến toàn cầu.",
    quizzes: [
      {
        q: "Dịch vụ trực tuyến nào sau đây cung cấp giải pháp lưu trữ và xuất bản trang web tĩnh (HTML/CSS/JS) hoàn toàn miễn phí kèm chứng chỉ bảo mật HTTPS?",
        options: ["GitHub Pages", "Google Translate", "TikTok", "Photoshop Online"],
        correctIndex: 0,
        explain: "GitHub Pages cho phép người dùng đưa các trang web tĩnh lên Internet hoàn toàn miễn phí trực tiếp từ kho lưu trữ GitHub."
      },
      {
        q: "Khi đưa tệp tin lên kho chứa GitHub để chạy GitHub Pages, tệp tin bắt buộc phải nằm ở thư mục gốc để làm trang chủ là gì?",
        options: ["<code>page.html</code>", "<code>index.html</code>", "<code>home.docx</code>", "<code>main.css</code>"],
        correctIndex: 1,
        explain: "GitHub Pages quy định tệp tin <code>index.html</code> nằm tại thư mục gốc của nhánh được chọn sẽ đóng vai trò là trang chủ."
      },
      {
        q: "Đường link truy cập trang web trực tuyến miễn phí do GitHub Pages cung cấp có định dạng chuẩn nào sau đây?",
        options: ["<code>https://username.github.io/repository-name/</code>", "<code>http://facebook.com/username</code>", "<code>ftp://username.com</code>", "<code>https://github.com/pages/</code>"],
        correctIndex: 0,
        explain: "Cấu trúc URL chuẩn của trang web xuất bản qua GitHub Pages là <code>username.github.io/repository-name/</code>."
      },
      {
        q: "Sau khi xuất bản website lên Internet, việc quản trị và bảo trì website cần được thực hiện như thế nào?",
        options: ["Bỏ mặc không bao giờ kiểm tra lại", "Định kỳ cập nhật nội dung tin tức mới, kiểm tra hoạt động của các liên kết và lắng nghe phản hồi của người dùng", "Xóa toàn bộ mã nguồn sau 1 tuần", "Chỉ bật website vào ban ngày, ban đêm tắt đi"],
        correctIndex: 1,
        explain: "Quản trị website đòi hỏi kế hoạch cập nhật nội dung định kỳ và duy trì kỹ thuật để website luôn mới mẻ và hữu ích."
      }
    ]
  }
];
