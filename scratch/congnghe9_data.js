// congnghe9_data.js - Dữ liệu 5 bài học Công nghệ 9 Định hướng nghề nghiệp

const congnghe9Lessons = [
  {
    id: "bai-1",
    num: 1,
    title: "Bài 1 — Nghề nghiệp trong lĩnh vực kĩ thuật và công nghệ",
    time: "45 phút",
    target: "Nắm vững khái niệm nghề nghiệp, phân biệt được nghề nghiệp và việc làm thời vụ; hiểu rõ vai trò và ý nghĩa của việc chọn nghề phù hợp đối với cá nhân, gia đình và xã hội; nhận diện đặc điểm lao động và các yêu cầu chung về năng lực, phẩm chất, sức khỏe đối với người lao động kĩ thuật, công nghệ qua ví dụ nghề Lập trình viên.",
    intro: "Mỗi con người khi trưởng thành đều cần một nghề nghiệp để tự nuôi sống bản thân, khẳng định giá trị và cống hiến cho xã hội. Trong kỉ nguyên số và cách mạng công nghiệp 4.0, các ngành kĩ thuật, công nghệ đang mở ra cánh cửa tương lai đầy triển vọng.",
    sections: [
      {
        title: "1. Khái niệm nghề nghiệp và phân biệt với việc làm",
        icon: "fa-briefcase",
        content: `
          <p class="mb-3">
            <strong>Nghề nghiệp</strong> là một tập hợp các công việc chuyên môn được xã hội thừa nhận. Thông qua quá trình đào tạo bài bản và thực hành, người lao động có được năng lực, tri thức và kĩ năng nghề nghiệp để tạo ra các sản phẩm vật chất hoặc tinh thần, đáp ứng nhu cầu phát triển của xã hội, đồng thời mang lại nguồn thu nhập và giá trị phát triển bản thân.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs">
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-900 dark:text-blue-200 block mb-1 font-bold"><i class="fa-solid fa-certificate"></i> Đặc trưng của Nghề nghiệp:</strong>
              <p>Có tính ổn định, gắn bó lâu dài, đòi hỏi quá trình đào tạo và cấp bằng/chứng chỉ chuyên môn; có cơ hội thăng tiến và đóng góp tích cực cho cộng đồng.</p>
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <strong class="text-slate-900 dark:text-slate-200 block mb-1 font-bold"><i class="fa-solid fa-clock"></i> Phân biệt với Việc làm:</strong>
              <p>Việc làm là công việc được giao và được trả thù lao. Một việc làm thời vụ, tạm thời để kiếm sống trước mắt không mặc nhiên được coi là một nghề nghiệp vững chắc.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Tầm quan trọng và ý nghĩa của việc chọn nghề phù hợp",
        icon: "fa-heart",
        content: `
          <div class="space-y-2.5 text-xs sm:text-sm">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">• Đối với Cá nhân:</strong>
              Tạo ra nguồn thu nhập nuôi sống bản thân; tạo động lực học tập suốt đời; giúp phát huy tối đa sở trường, năng lực và năng khiếu; mang lại niềm vui, sự hài lòng và cảm xúc hạnh phúc trong lao động; đảm bảo an toàn lao động.
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">• Đối với Gia đình:</strong>
              Mang lại nguồn thu nhập kinh tế ổn định, nâng cao đời sống; chia sẻ gánh nặng tài chính với cha mẹ; giúp gia đình yên tâm và tự hào về sự trưởng thành của con cái.
            </div>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <strong class="text-indigo-800 dark:text-indigo-300 font-bold block mb-1">• Đối với Xã hội:</strong>
              Tạo ra nhiều của cải vật chất và dịch vụ hiện đại; thúc đẩy tăng trưởng kinh tế bền vững; giảm thiểu tỉ lệ thất nghiệp và lãng phí nguồn lực đào tạo do làm trái ngành; tối ưu hoá công tác quy hoạch nguồn nhân lực quốc gia.
            </div>
          </div>
        `
      },
      {
        title: "3. Đặc điểm nghề nghiệp trong lĩnh vực kĩ thuật, công nghệ",
        icon: "fa-microchip",
        content: `
          <p class="mb-2">Lĩnh vực kĩ thuật và công nghệ có các đặc trưng lao động nổi bật sau:</p>
          <ul class="space-y-2 text-xs sm:text-sm">
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-gear text-blue-500 mt-1 shrink-0"></i>
              <span><strong>Sản phẩm lao động:</strong> Các chi tiết máy, máy móc cơ khí, thiết bị điện – điện tử, vi mạch, hệ thống tự động hóa điều khiển, dây chuyền sản xuất thông minh, các phần mềm và ứng dụng số phục vụ đời sống.</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-laptop-code text-blue-500 mt-1 shrink-0"></i>
              <span><strong>Đối tượng và hoạt động lao động:</strong> Vận dụng các định luật toán học, khoa học tự nhiên, nguyên lí kĩ thuật vào nghiên cứu, thiết kế bản vẽ, chế tạo phôi, gia công, lắp ráp, vận hành, bảo trì và tối ưu hoá hệ thống kĩ thuật.</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-building-circle-check text-blue-500 mt-1 shrink-0"></i>
              <span><strong>Môi trường làm việc:</strong> Năng động, đổi mới sáng tạo liên tục với tốc độ vũ bão; thường xuyên tiếp xúc với máy móc hiện đại và công nghệ số; có áp lực về tiến độ, chất lượng và đòi hỏi tuân thủ nghiêm ngặt quy định an toàn lao động.</span>
            </li>
          </ul>
        `
      },
      {
        title: "4. Yêu cầu chung đối với người lao động kĩ thuật, công nghệ",
        icon: "fa-user-gear",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-800 dark:text-purple-300 font-bold block mb-1.5"><i class="fa-solid fa-brain"></i> Về Năng lực:</strong>
              <ul class="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Hiểu rõ các nguyên lí khoa học – kĩ thuật cơ bản.</li>
                <li>Thao tác, vận hành thiết bị, máy móc an toàn và hiệu quả.</li>
                <li>Năng lực làm việc độc lập kết hợp làm việc nhóm hiệu quả.</li>
                <li>Khả năng tự học, cập nhật công nghệ mới, giỏi tin học và ngoại ngữ chuyên ngành.</li>
                <li>Sức khỏe phù hợp với yêu cầu đặc thù của từng ngành nghề cụ thể.</li>
              </ul>
            </div>
            <div class="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
              <strong class="text-teal-800 dark:text-teal-300 font-bold block mb-1.5"><i class="fa-solid fa-award"></i> Về Phẩm chất:</strong>
              <ul class="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Tính kỉ luật cao, tuân thủ quy trình kĩ thuật và quy tắc bảo hộ.</li>
                <li>Cần cù, chăm chỉ, tỉ mỉ, trung thực, tinh thần trách nhiệm cao.</li>
                <li>Có ý thức bảo vệ môi trường lao động và tiết kiệm tài nguyên.</li>
                <li>Khả năng kiên trì giải quyết sự cố và chịu được áp lực tiến độ công việc.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "5. Điển hình nghề nghiệp: Nghề Lập trình viên (Software Developer)",
        icon: "fa-code",
        content: `
          <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 text-xs sm:text-sm leading-relaxed">
            <p><strong>Nhiệm vụ chính:</strong> Sử dụng các ngôn ngữ lập trình (Python, JavaScript, C++, Java...) để viết mã nguồn, thiết kế tính năng, kiểm thử lỗi (testing/debugging), bảo trì và nâng cấp các phần mềm máy tính, ứng dụng di động, hệ thống web và trí tuệ nhân tạo.</p>
            <p class="mt-2"><strong>Yêu cầu then chốt:</strong> Tư duy logic chặt chẽ, đam mê công nghệ thông tin, năng lực tự học cao để bắt kịp các công nghệ mới ra đời mỗi ngày; khả năng tập trung làm việc độc lập và phối hợp nhịp nhàng trong nhóm phát triển dự án Agile/Scrum.</p>
          </div>
        `
      }
    ],
    practice: [
      "Lập bảng so sánh giữa một 'Việc làm bán thời gian' (như phục vụ quán nước hè) với một 'Nghề nghiệp chuyên môn' (như Kĩ sư tự động hóa).",
      "Phỏng vấn người thân hoặc thầy cô về con đường lập nghiệp và các yêu cầu phẩm chất cần có trong công việc hiện tại.",
      "Tìm hiểu các yêu cầu tuyển dụng thực tế của vị trí Lập trình viên mới tốt nghiệp trên các website tuyển dụng uy tín."
    ],
    summary: "Nghề nghiệp là tập hợp công việc chuyên môn được đào tạo, có tính ổn định và đóng góp cho xã hội. Chọn nghề phù hợp mang lại hạnh phúc cho cá nhân, ấm no cho gia đình và phồn vinh cho xã hội. Người lao động kĩ thuật, công nghệ cần trang bị tư duy logic, kỉ luật quy trình, năng lực tự học và khả năng thích ứng công nghệ.",
    quiz: [
      {
        q: "Theo SGK Công nghệ 9, thế nào là một 'nghề nghiệp'?",
        opts: [
          "Bất kì công việc tạm thời nào tạo ra tiền công trong ngày",
          "Tập hợp các công việc được xã hội công nhận, qua đào tạo người lao động có năng lực/kĩ năng tạo ra sản phẩm và thu nhập",
          "Chỉ những công việc làm việc trong các cơ quan nhà nước",
          "Công việc chỉ đòi hỏi sức khỏe cơ bắp không cần qua trường lớp"
        ],
        ans: 1,
        explain: "Nghề nghiệp là tập hợp công việc được xã hội thừa nhận, đòi hỏi qua đào tạo chuyên môn để có năng lực tạo ra sản phẩm và giá trị."
      },
      {
        q: "Ý nghĩa lớn nhất của việc chọn nghề phù hợp đối với bản thân người học là gì?",
        opts: [
          "Để khoe khoang với bạn bè cùng trang lứa",
          "Phát huy tối đa năng lực sở trường, tạo nguồn thu nhập ổn định và cảm nhận niềm vui, hạnh phúc trong công việc",
          "Không bao giờ phải học tập thêm sau khi ra trường",
          "Được làm công việc nhàn rỗi không có áp lực"
        ],
        ans: 1,
        explain: "Chọn đúng nghề giúp phát triển nhân cách, sở trường, đem lại thu nhập bền vững và sự hài lòng trong cuộc sống."
      },
      {
        q: "Đặc điểm môi trường làm việc đặc trưng của lĩnh vực kĩ thuật và công nghệ là gì?",
        opts: [
          "Hoàn toàn bất biến, không bao giờ thay đổi công nghệ",
          "Năng động, thay đổi nhanh chóng, tiếp xúc nhiều với máy móc công nghệ hiện đại và có thử thách",
          "Chỉ làm việc hoàn toàn bằng tay chân ngoài trời không có quy trình",
          "Không yêu cầu bất kì quy tắc an toàn lao động nào"
        ],
        ans: 1,
        explain: "Lĩnh vực kĩ thuật công nghệ luôn thay đổi vũ bão, máy móc hiện đại và đòi hỏi an toàn kĩ thuật khắt khe."
      },
      {
        q: "Đối với nghề Lập trình viên, yêu cầu nào sau đây đóng vai trò quyết định hàng đầu?",
        opts: [
          "Chỉ cần gõ bàn phím thật nhanh không cần hiểu thuật toán",
          "Hiểu và vận dụng thành thạo ngôn ngữ lập trình, có tư duy logic và năng lực tự học liên tục",
          "Phải có giọng hát truyền cảm và tài năng hội họa",
          "Chỉ làm việc một mình, cấm tuyệt đối trao đổi nhóm"
        ],
        ans: 1,
        explain: "Lập trình viên cần tư duy logic, nắm vững ngôn ngữ lập trình, liên tục tự cập nhật kiến thức mới và phối hợp nhóm."
      }
    ]
  },

  {
    id: "bai-2",
    num: 2,
    title: "Bài 2 — Cơ cấu hệ thống giáo dục quốc dân",
    time: "45 phút",
    target: "Nắm vững khung cơ cấu hệ thống giáo dục quốc dân Việt Nam; hiểu rõ bản chất của phân luồng giáo dục sau THCS và sau THPT; nắm bắt các hướng đi sau lớp 9 gồm học THPT, học nghề mô hình 9+, học GDTX; xác định các hướng học cụ thể để theo đuổi các ngành kĩ thuật, công nghệ.",
    intro: "Tốt nghiệp lớp 9 là một dấu mốc bước ngoặt cuộc đời. Bạn sẽ chọn thi vào trường THPT, chọn học nghề theo mô hình 9+, hay vừa học văn hóa vừa học nghề tại trung tâm GDTX? Hiểu rõ bản đồ giáo dục giúp bạn chọn đúng bệ phóng cho tương lai.",
    sections: [
      {
        title: "1. Cơ cấu hệ thống giáo dục quốc dân Việt Nam",
        icon: "fa-sitemap",
        content: `
          <p class="mb-3">
            Hệ thống giáo dục quốc dân bao gồm <strong>giáo dục chính quy</strong> và <strong>giáo dục thường xuyên</strong>, với 4 cấp học và trình độ đào tạo cốt lõi:
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <div class="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
              <strong>• Giáo dục mầm non:</strong> Nhà trẻ (từ 3 đến 36 tháng tuổi) và Mẫu giáo (từ 3 đến 5 tuổi).
            </div>
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <strong>• Giáo dục phổ thông:</strong> Tiểu học (Lớp 1–5), Trung học cơ sở (Lớp 6–9) và Trung học phổ thông (Lớp 10–12).
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <strong>• Giáo dục nghề nghiệp:</strong> Đào tạo Sơ cấp (3 tháng đến dưới 1 năm); Trung cấp (2–3 năm cho học sinh tốt nghiệp THCS hoặc 1–2 năm cho tốt nghiệp THPT); Cao đẳng (2–3 năm với đầu vào THPT hoặc 1–2 năm liên thông).
            </div>
            <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <strong>• Giáo dục đại học:</strong> Đại học (3–5 năm tùy ngành); Thạc sĩ (1–2 năm); Tiến sĩ (3–4 năm nghiên cứu chuyên sâu).
            </div>
            <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong>• Giáo dục thường xuyên:</strong> Tạo cơ hội học tập suốt đời cho mọi lứa tuổi, bồi dưỡng nâng cao chuyên môn, chuyển đổi ngành nghề hoặc tự tạo việc làm.
            </div>
          </div>
        `
      },
      {
        title: "2. Phân luồng giáo dục và các hướng đi sau THCS",
        icon: "fa-arrows-split-up-and-left",
        content: `
          <p class="mb-3">
            <strong>Phân luồng giáo dục</strong> là việc tổ chức, định hướng người học sau mỗi cấp học (hai thời điểm vàng: sau THCS và sau THPT) nhằm giúp người học lựa chọn con đường tiếp tục học lên cao, học nghề hoặc tham gia lao động phù hợp năng lực, điều kiện kinh tế gia đình và nhu cầu nhân lực xã hội.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 my-3 text-xs">
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <strong class="text-indigo-900 dark:text-indigo-200 block mb-1 font-bold">Hướng 1: Học THPT</strong>
              <p>Học tiếp lớp 10–12 theo chương trình GDPT 2018; chọn tổ hợp môn định hướng KHTN/Công nghệ; chuẩn bị thi đại học, cao đẳng.</p>
            </div>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-900 dark:text-emerald-200 block mb-1 font-bold">Hướng 2: Mô hình 9+</strong>
              <p>Học nghề Trung cấp song song với học văn hóa THPT hệ GDTX tại các trường Cao đẳng/Trung cấp nghề. 18 tuổi có cả bằng nghề và bằng THPT!</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-900 dark:text-amber-200 block mb-1 font-bold">Hướng 3: Sơ cấp / GDTX</strong>
              <p>Học nghề sơ cấp (dưới 1 năm) để đi làm sớm, hoặc học tại Trung tâm GDNN – GDTX kết hợp rèn luyện kĩ năng thực hành.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Hướng học để theo đuổi các nghề kĩ thuật, công nghệ",
        icon: "fa-compass",
        content: `
          <p class="mb-2">Để trở thành chuyên gia, kĩ sư, kĩ thuật viên trong lĩnh vực kĩ thuật, công nghệ:</p>
          <ul class="space-y-1.5 text-xs sm:text-sm list-disc list-inside">
            <li><strong>Sau THCS:</strong> Có thể chọn vào trường nghề học ngay các ngành nghề thực hành cao như Kĩ thuật sửa chữa ô tô, Điện dân dụng, Lắp ráp điện tử, Cắt gọt kim loại CNC, Quản trị mạng; hoặc vào THPT chú trọng các môn Toán, Vật lí, Hóa học, Tin học, Công nghệ.</li>
            <li><strong>Sau THPT:</strong> Đăng kí xét tuyển vào các trường Đại học, Cao đẳng kĩ thuật hàng đầu theo các nhóm ngành:
              <span class="block pl-4 mt-1 text-xs text-blue-700 dark:text-blue-300 font-semibold">
                • Công nghệ thông tin & Trí tuệ nhân tạo (AI)<br>
                • An toàn thông tin, Mạng máy tính & Dữ liệu lớn<br>
                • Cơ khí chế tạo máy, Cơ điện tử & Robotics<br>
                • Kĩ thuật Điện – Điện tử – Viễn thông & Vi mạch bán dẫn<br>
                • Kĩ thuật Ô tô, Kĩ thuật Hàng không & Tàu thủy<br>
                • Kĩ thuật Xây dựng, Cầu đường & Kiến trúc
              </span>
            </li>
          </ul>
        `
      }
    ],
    practice: [
      "Vẽ sơ đồ tư duy mô tả các hướng rẽ học tập của bản thân sau khi hoàn thành kì thi tuyển sinh lớp 9.",
      "Tìm hiểu thông tin tuyển sinh của 1 trường THPT và 1 trường Cao đẳng nghề đào tạo mô hình 9+ tại địa phương em.",
      "Phân tích ưu điểm và nhược điểm của lộ trình học nghề 9+ so với lộ trình học THPT rồi thi đại học."
    ],
    summary: "Hệ thống giáo dục quốc dân gồm Mầm non, Phổ thông, Giáo dục nghề nghiệp (Sơ cấp, Trung cấp, Cao đẳng), Đại học và GDTX. Sau THCS có 3 hướng phân luồng chính: học THPT, học nghề mô hình 9+, hoặc học GDTX/sơ cấp. Tùy theo năng lực học tập và điều kiện gia đình, học sinh có thể chọn lộ trình phù hợp để chạm tới nghề nghiệp kĩ thuật mơ ước.",
    quiz: [
      {
        q: "Theo Luật Giáo dục và khung hệ thống giáo dục quốc dân, cấp học Trung học cơ sở gồm những lớp nào?",
        opts: [
          "Lớp 1 đến lớp 5",
          "Lớp 6 đến lớp 9",
          "Lớp 10 đến lớp 12",
          "Lớp 6 đến lớp 12"
        ],
        ans: 1,
        explain: "Cấp Trung học cơ sở (THCS) gồm 4 năm học từ lớp 6 đến hết lớp 9."
      },
      {
        q: "Bản chất của hoạt động 'phân luồng giáo dục' là gì?",
        opts: [
          "Bắt buộc tất cả học sinh phải đi làm công nhân ngay sau lớp 9",
          "Tổ chức các hướng học tập (học lên, học nghề hoặc đi làm) phù hợp năng lực, điều kiện cá nhân và nhu cầu xã hội",
          "Ngăn cấm học sinh nông thôn vào học đại học",
          "Loại bỏ các trường trung cấp nghề khỏi hệ thống giáo dục"
        ],
        ans: 1,
        explain: "Phân luồng giúp định hướng học sinh lựa chọn con đường học tiếp hoặc học nghề phù hợp với năng lực và hoàn cảnh."
      },
      {
        q: "Mô hình giáo dục '9+' được sách mô tả có đặc điểm gì nổi bật?",
        opts: [
          "Chỉ dành riêng cho học sinh đã tốt nghiệp đại học",
          "Học sinh tốt nghiệp THCS học song song chương trình văn hóa GDTX cấp THPT kết hợp học nghề trung cấp",
          "Chương trình học kéo dài đúng 9 năm mới được ra trường",
          "Chỉ học duy nhất môn Giáo dục thể chất không học nghề"
        ],
        ans: 1,
        explain: "Mô hình 9+ đào tạo học sinh tốt nghiệp THCS vừa học văn hóa THPT vừa học nghề trung cấp tại cơ sở giáo dục nghề nghiệp."
      },
      {
        q: "Học sinh đam mê lập trình phần mềm và an toàn thông tin sau khi tốt nghiệp THPT nên định hướng bậc học nào?",
        opts: [
          "Chỉ cần ở nhà tự chơi game không cần đào tạo",
          "Học đại học hoặc cao đẳng chuyên ngành Công nghệ thông tin, Kĩ thuật phần mềm, An toàn thông tin",
          "Đi học nghề làm vườn truyền thống",
          "Chờ đợi các công ty đến tuyển dụng mà không cần kiến thức"
        ],
        ans: 1,
        explain: "Để làm chuyên gia phần mềm/an ninh mạng, người học nên học các chương trình Cao đẳng hoặc Đại học ngành CNTT."
      }
    ]
  },

  {
    id: "bai-3",
    num: 3,
    title: "Bài 3 — Thị trường lao động kĩ thuật, công nghệ tại Việt Nam",
    time: "45 phút",
    target: "Hiểu bản chất của thị trường lao động, phân biệt cung lao động và cầu lao động; nắm bắt các yếu tố then chốt tác động đến thị trường lao động; nhận biết vai trò của thông tin thị trường đối với định hướng nghề nghiệp; vận dụng thành thạo quy trình 4 bước tìm kiếm thông tin việc làm và tuyển dụng.",
    intro: "Một nghề nghiệp dù bạn rất yêu thích nhưng xã hội không có nhu cầu tuyển dụng thì cơ hội có việc làm sẽ vô cùng mong manh. Hiểu rõ 'quy luật cung - cầu' của thị trường lao động chính là chiếc chìa khóa giúp bạn chọn nghề đón đầu xu thế.",
    sections: [
      {
        title: "1. Khái niệm thị trường lao động và Cung – Cầu lao động",
        icon: "fa-scale-balanced",
        content: `
          <p class="mb-3">
            <strong>Thị trường lao động</strong> là nơi diễn ra sự thỏa thuận, trao đổi giữa người lao động (người bán sức lao động) và người sử dụng lao động (người thuê lao động) về tiền lương, thời gian làm việc và các điều kiện phúc lợi.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
              <strong class="text-teal-900 dark:text-teal-200 block mb-1 font-bold"><i class="fa-solid fa-users"></i> Cung lao động:</strong>
              <p>Khả năng và số lượng người lao động sẵn sàng làm việc tại các mức lương thỏa thuận trên thị trường.</p>
            </div>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <strong class="text-indigo-900 dark:text-indigo-200 block mb-1 font-bold"><i class="fa-solid fa-building"></i> Cầu lao động:</strong>
              <p>Nhu cầu của các doanh nghiệp, nhà máy, cơ quan cần thuê mướn số lượng lao động với trình độ chuyên môn nhất định.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Các yếu tố tác động đến thị trường lao động kĩ thuật, công nghệ",
        icon: "fa-chart-line",
        content: `
          <ul class="space-y-2 text-xs sm:text-sm">
            <li><strong>• Cách mạng Khoa học – Công nghệ:</strong> Sự trỗi dậy của Trí tuệ nhân tạo (AI), Tự động hóa, Internet vạn vật (IoT) làm biến mất các công việc chân tay giản đơn và bùng nổ nhu cầu nhân lực chất lượng cao biết vận hành công nghệ mới.</li>
            <li><strong>• Chuyển dịch cơ cấu kinh tế:</strong> Việt Nam chuyển dịch mạnh mẽ từ nông nghiệp sang công nghiệp chế biến, chế tạo, công nghệ cao và dịch vụ số.</li>
            <li><strong>• Chính sách phát triển của Nhà nước:</strong> Các chiến lược quốc gia về Chuyển đổi số, Công nghiệp bán dẫn, Năng lượng xanh và Đổi mới sáng tạo thúc đẩy hàng triệu việc làm kĩ thuật mới.</li>
            <li><strong>• Quy mô và chất lượng nguồn cung:</strong> Cơ cấu dân số vàng và nhu cầu nâng cao tỉ lệ lao động qua đào tạo có chứng chỉ nghề nghiệp.</li>
          </ul>
        `
      },
      {
        title: "3. Thực trạng và xu hướng thị trường lao động kĩ thuật tại Việt Nam",
        icon: "fa-triangle-exclamation",
        content: `
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs sm:text-sm space-y-2">
            <p><strong>Thách thức thực tế:</strong> Lực lượng lao động phổ thông dồi dào nhưng tỉ lệ lao động có chứng chỉ chuyên môn kĩ thuật cao còn hạn chế; hiện tượng 'thừa thầy thiếu thợ' hoặc sinh viên tốt nghiệp thiếu kĩ năng thực hành, ngoại ngữ và kĩ năng mềm.</p>
            <p><strong>Xu hướng tuyển dụng hiện đại:</strong> Doanh nghiệp ưu tiên tuyển dụng người có năng lực làm việc thực tế, có khả năng tự học thích ứng nhanh với công nghệ, giỏi ngoại ngữ và làm việc nhóm hiệu quả.</p>
          </div>
        `
      },
      {
        title: "4. Quy trình 4 bước tìm kiếm thông tin thị trường lao động",
        icon: "fa-magnifying-glass-chart",
        content: `
          <div class="space-y-2 text-xs sm:text-sm">
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
              <div><strong>Xác định mục tiêu:</strong> Lựa chọn ngành/nghề muốn tìm hiểu; đặt ra các câu hỏi: Công việc làm gì? Nhu cầu tuyển ở đâu? Mức lương bao nhiêu? Nơi nào đào tạo tốt?</div>
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
              <div><strong>Xác định nguồn thông tin tin cậy:</strong> Báo cáo của Tổng cục Thống kê, Bộ LĐ-TB&XH; trang web tuyển dụng chính thống (VietnamWorks, TopCV, CareerBuilder...); đề án tuyển sinh của các trường.</div>
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
              <div><strong>Chọn công cụ tìm kiếm:</strong> Sử dụng công cụ Google Search, mạng xã hội chuyên nghiệp LinkedIn, hội chợ việc làm với các từ khóa chính xác theo tên vị trí và địa phương.</div>
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">4</span>
              <div><strong>Thu thập, so sánh và tổng hợp:</strong> Lập bảng tổng hợp các thông tin về mô tả công việc, mức lương trung bình, kĩ năng bắt buộc; luôn ghi rõ thời điểm số liệu để đảm bảo tính thời sự.</div>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành tìm kiếm thông tin tuyển dụng của nghề 'Kĩ thuật viên bảo dưỡng ô tô' trên một website việc làm uy tín và ghi lại các tiêu chuẩn tuyển dụng.",
      "Lập danh sách 3 ngành kĩ thuật công nghệ đang có nhu cầu tuyển dụng lớn nhất tại địa phương em sinh sống.",
      "Phỏng vấn một anh/chị sinh viên mới ra trường về những khó khăn khi tìm kiếm việc làm đầu tiên."
    ],
    summary: "Thị trường lao động là nơi cung và cầu sức lao động gặp nhau. Sự phát triển vũ bão của khoa học công nghệ làm tăng nhu cầu nhân lực kĩ thuật số chất lượng cao. Nắm vững 4 bước tìm kiếm thông tin thị trường giúp học sinh chủ động đón đầu cơ hội việc làm, tránh nguy cơ học xong bị thất nghiệp do trái ngành.",
    quiz: [
      {
        q: "Trong thị trường lao động, khái niệm 'Cầu lao động' phản ánh điều gì?",
        opts: [
          "Số lượng người lao động đi tìm việc làm mỗi ngày",
          "Nhu cầu thuê mướn sức lao động của các doanh nghiệp, tổ chức trong một thời kì xác định",
          "Số lượng máy vi tính được bán ra thị trường",
          "Mức tiền lương tối thiểu do công đoàn đề xuất"
        ],
        ans: 1,
        explain: "Cầu lao động là nhu cầu tuyển dụng, sử dụng sức lao động của các đơn vị sử dụng lao động trong nền kinh tế."
      },
      {
        q: "Yếu tố nào sau đây đóng vai trò then chốt làm thay đổi cơ cấu ngành nghề và yêu cầu kĩ năng lao động hiện đại?",
        opts: [
          "Sự phát triển đột phá của khoa học và công nghệ (AI, Tự động hóa)",
          "Sở thích chơi trò chơi điện tử của giới trẻ",
          "Thời tiết bốn mùa trong năm",
          "Việc thay đổi đồng phục của học sinh"
        ],
        ans: 0,
        explain: "Khoa học công nghệ thay đổi cách thức sản xuất, xóa bỏ công việc thủ công giản đơn và mở ra nhiều việc làm công nghệ cao."
      },
      {
        q: "Thực trạng nguồn nhân lực lao động kĩ thuật công nghệ tại Việt Nam được SGK nêu là gì?",
        opts: [
          "Dư thừa nghiêm trọng lao động trình độ cao, thiếu hụt lao động không có bằng cấp",
          "Lao động có trình độ chuyên môn kĩ thuật cao còn thiếu hụt, còn mất cân đối giữa các ngành và vùng miền",
          "Tất cả người lao động đều sử dụng thành thạo 3 ngoại ngữ",
          "Các doanh nghiệp không còn nhu cầu tuyển dụng bất kì ngành nghề nào"
        ],
        ans: 1,
        explain: "Việt Nam đang khan hiếm nhân lực kĩ thuật công nghệ trình độ cao, chất lượng chưa đồng đều giữa các khu vực."
      },
      {
        q: "Bước đầu tiên trong quy trình tìm kiếm thông tin thị trường lao động chuẩn là gì?",
        opts: [
          "Nộp hồ sơ xin việc ngay lập tức",
          "Xác định rõ mục tiêu: Chọn ngành/nghề cần tìm hiểu và các câu hỏi trọng tâm",
          "Đến phỏng vấn thử việc mà không cần chuẩn bị",
          "Chờ đợi các trường đại học gửi thư mời"
        ],
        ans: 1,
        explain: "Bước 1 là xác định mục tiêu rõ ràng: ngành nghề cần tìm hiểu, vị trí việc làm, địa bàn và mức lương mong muốn."
      }
    ]
  },

  {
    id: "bai-4",
    num: 4,
    title: "Bài 4 — Quy trình lựa chọn nghề nghiệp",
    time: "45 phút",
    target: "Hiểu sâu sắc các lí thuyết hướng nghiệp kinh điển: Mật mã Holland (RIASEC), Lí thuyết Cây nghề nghiệp và Triết lí Ikigai; thực hiện quy trình 3 bước chọn nghề chuẩn khoa học (Đánh giá bản thân -> Tìm hiểu thị trường -> Ra quyết định); nhận diện các yếu tố chủ quan và khách quan ảnh hưởng đến việc chọn nghề.",
    intro: "Chọn nghề là quyết định quan trọng bậc nhất của đời người. Chọn sai nghề dẫn đến chán nản, lãng phí thời gian và tiền bạc. Nhưng chọn đúng nghề sẽ mở ra một cuộc đời tràn đầy hứng khởi, thành công và hạnh phúc.",
    sections: [
      {
        title: "1. Lí thuyết Mật mã Holland (RIASEC)",
        icon: "fa-shapes",
        content: `
          <p class="mb-3">
            Tiến sĩ John Holland khẳng định: Khi tính cách của một người phù hợp với môi trường làm việc, người đó sẽ dễ dàng thích ứng, làm việc đam mê, đạt năng suất cao và gắn bó lâu dài. Mô hình chia làm 6 nhóm:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
              <strong class="text-red-900 dark:text-red-200 font-bold">R - Kĩ thuật (Realistic):</strong> Thực tế, khéo léo, thích máy móc thiết bị, cơ khí, điện tử, xây dựng.
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-900 dark:text-blue-200 font-bold">I - Nghiên cứu (Investigative):</strong> Tư duy logic, thích phân tích, giải quyết bài toán phức tạp, lập trình, khoa học.
            </div>
            <div class="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-900 dark:text-purple-200 font-bold">A - Nghệ thuật (Artistic):</strong> Giàu tưởng tượng, sáng tạo tự do, yêu cái đẹp, thiết kế đồ họa, UI/UX, kiến trúc.
            </div>
            <div class="p-2.5 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800">
              <strong class="text-green-900 dark:text-green-200 font-bold">S - Xã hội (Social):</strong> Thích giúp đỡ, chia sẻ, lắng nghe, chăm sóc, sư phạm, hoạt động cộng đồng.
            </div>
            <div class="p-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
              <strong class="text-orange-900 dark:text-orange-200 font-bold">E - Quản lí (Enterprising):</strong> Quyết đoán, năng động, thích lãnh đạo, thuyết phục, kinh doanh, quản trị dự án.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700">
              <strong class="text-slate-900 dark:text-slate-200 font-bold">C - Nghiệp vụ (Conventional):</strong> Tỉ mỉ, cẩn thận, ngăn nắp, tuân thủ quy trình, kiểm thử phần mềm, kế toán.
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-2 italic">* Mỗi người thường là sự kết hợp của 2 hoặc 3 nhóm tính cách (ví dụ nhóm RIA, RIC, IRE...).</p>
        `
      },
      {
        title: "2. Lí thuyết Cây Nghề Nghiệp: Gốc rễ quyết định quả ngọt",
        icon: "fa-tree",
        content: `
          <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm leading-relaxed space-y-2">
            <p><strong>Phần Gốc Rễ (Căn cứ cốt lõi):</strong> Đại diện cho Sở thích, Năng lực (điểm mạnh), Cá tính và Giá trị nghề nghiệp mong muốn. Đây là yếu tố quyết định sức sống và sự vững vàng của cây nghề nghiệp.</p>
            <p><strong>Phần Quả Ngọt (Mục tiêu đạt được):</strong> Đại diện cho Thu nhập cao, Môi trường làm việc tốt, Cơ hội thăng tiến, Sự ổn định và Được xã hội tôn trọng.</p>
            <p class="text-emerald-800 dark:text-emerald-300 font-bold">⚠️ Bài học cốt lõi: Chọn nghề phải bắt đầu từ GỐC RỄ. Nếu chỉ chăm chăm nhìn vào quả ngọt (thấy nghề nào lương cao, bạn bè theo đông mà bản thân không có năng lực) thì cây sẽ sớm khô héo và thất bại.</p>
          </div>
        `
      },
      {
        title: "3. Triết lí Ikigai: Bốn câu hỏi tìm lẽ sống nghề nghiệp",
        icon: "fa-bullseye",
        content: `
          <p class="mb-2">Nghề nghiệp lí tưởng nhất nằm ở điểm giao thoa giữa 4 câu hỏi:</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-bold">
            <div class="p-2 rounded-lg bg-rose-100 text-rose-800">1. Điều bạn THÍCH<br>(Đam mê)</div>
            <div class="p-2 rounded-lg bg-blue-100 text-blue-800">2. Điều bạn GIỎI<br>(Chuyên môn)</div>
            <div class="p-2 rounded-lg bg-emerald-100 text-emerald-800">3. Xã hội CẦN<br>(Sứ mệnh)</div>
            <div class="p-2 rounded-lg bg-amber-100 text-amber-800">4. Được TRẢ TIỀN<br>(Sự nghiệp)</div>
          </div>
        `
      },
      {
        title: "4. Quy trình 3 bước lựa chọn nghề nghiệp chuẩn khoa học",
        icon: "fa-list-check",
        content: `
          <div class="space-y-2.5 text-xs sm:text-sm">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-blue-500 border border-gray-200 dark:border-gray-700">
              <strong class="text-blue-600 dark:text-blue-400 font-bold block mb-1">Bước 1 — Đánh giá bản thân (Hiểu mình):</strong>
              Tự đánh giá sở thích, năng lực học tập, cá tính, tình trạng sức khỏe, điều kiện kinh tế gia đình và các giá trị mong muốn.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-amber-500 border border-gray-200 dark:border-gray-700">
              <strong class="text-amber-600 dark:text-amber-400 font-bold block mb-1">Bước 2 — Tìm hiểu thị trường lao động (Hiểu nghề):</strong>
              Thu thập thông tin về danh sách các nghề quan tâm: nhiệm vụ cụ thể, yêu cầu năng lực/phẩm chất, môi trường làm việc, nhu cầu xã hội, mức lương và cơ sở đào tạo uy tín.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-emerald-500 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Bước 3 — Ra quyết định (Đối chiếu & Quyết định):</strong>
              So sánh độ trùng khớp giữa đặc điểm bản thân với yêu cầu nghề; lựa chọn hướng nghề phù hợp nhất và xây dựng kế hoạch học tập, rèn luyện cụ thể.
            </div>
          </div>
        `
      },
      {
        title: "5. Các yếu tố ảnh hưởng và lưu ý khi chọn nghề",
        icon: "fa-shield-halved",
        content: `
          <ul class="space-y-1.5 text-xs sm:text-sm">
            <li><strong>Yếu tố chủ quan:</strong> Năng lực, sở thích, tính cách, tình trạng sức khỏe của bản thân.</li>
            <li><strong>Yếu tố khách quan:</strong> Gia đình (kì vọng, điều kiện tài chính), nhà trường, thị trường lao động, nhóm bạn bè.</li>
            <li><strong>Lời khuyên vàng:</strong> Lắng nghe ý kiến tư vấn của cha mẹ, thầy cô nhưng <em>tuyệt đối không chọn nghề theo trào lưu, a dua theo bạn bè hoặc để người khác áp đặt</em> mà bỏ qua năng lực thực tế của chính mình.</li>
          </ul>
        `
      }
    ],
    practice: [
      "Làm bài trắc nghiệm nhanh 6 nhóm tính cách Holland và xác định mã 3 chữ cái đặc trưng nhất của bản thân.",
      "Vẽ sơ đồ Ikigai cá nhân và điền các câu trả lời vào 4 vòng tròn để tìm giao điểm nghề nghiệp ước mơ.",
      "Thảo luận nhóm về tình huống: 'Bạn Nam thích vẽ đồ họa nhưng gia đình bắt ép thi vào ngành kế toán thì nên giải quyết thế nào?'."
    ],
    summary: "Quy trình chọn nghề chuẩn khoa học gồm 3 bước: Hiểu mình -> Hiểu nghề -> Ra quyết định. Mật mã Holland phân loại 6 nhóm tính cách RIASEC; Cây nghề nghiệp nhắc nhở phải bắt đầu từ GỐC RỄ (năng lực, sở thích, cá tính) để gặt hái QUẢ NGỌT (thu nhập, cơ hội); Triết lí Ikigai dẫn lối tới nghề nghiệp hạnh phúc và có ích cho đời.",
    quiz: [
      {
        q: "Theo lí thuyết Mật mã Holland, nhóm tính cách 'Kĩ thuật' (Realistic) có đặc điểm nổi bật nào?",
        opts: [
          "Thực tế, thích làm việc với công cụ, máy móc, thiết bị, đồ vật hoặc hoạt động ngoài trời",
          "Chỉ thích sáng tác thơ văn và biểu diễn ca nhạc",
          "Thích nghiên cứu lí thuyết triết học trừu tượng",
          "Thích thuyết trình trước đám đông để bán hàng"
        ],
        ans: 0,
        explain: "Nhóm Realistic (R) là người thực tế, hành động, thích tiếp xúc máy móc kĩ thuật và thao tác tay chân khéo léo."
      },
      {
        q: "Trong lí thuyết 'Cây nghề nghiệp', bộ phận nào đóng vai trò nền tảng quyết định sự thành công lâu dài?",
        opts: [
          "Phần quả ngọt (Lương cao, dễ xin việc)",
          "Phần gốc rễ (Sở thích, Năng lực, Cá tính và Giá trị bản thân)",
          "Phần lá cây xanh tốt che bóng mát",
          "Các loại thuốc trừ sâu hóa học phun lên cây"
        ],
        ans: 1,
        explain: "Gốc rễ (sở thích, năng lực, cá tính) là nền tảng cốt lõi giúp cá nhân học tập tốt, vượt qua thử thách và phát triển bền vững."
      },
      {
        q: "Triết lí Ikigai của Nhật Bản định vị nghề nghiệp lí tưởng là điểm giao thoa của mấy yếu tố?",
        opts: [
          "Chỉ 1 yếu tố: Nghề có nhiều tiền nhất",
          "2 yếu tố: Điều mình thích và bạn bè rủ",
          "4 yếu tố: Điều mình thích, Điều mình giỏi, Điều xã hội cần và Điều được trả công",
          "10 yếu tố ngẫu nhiên do bốc thăm may rủi"
        ],
        ans: 2,
        explain: "Ikigai là điểm giao hòa trọn vẹn giữa: Thích (Đam mê), Giỏi (Chuyên môn), Xã hội cần (Sứ mệnh), Được trả tiền (Sự nghiệp)."
      },
      {
        q: "Lời khuyên nào sau đây là ĐÚNG ĐẮN NHẤT khi chọn nghề nghiệp tương lai?",
        opts: [
          "Chọn nghề hoàn toàn theo sự áp đặt của người khác dù mình không thích",
          "Chỉ cần nghề nào đang 'hot' trên mạng xã hội là nộp đơn ngay",
          "Tham khảo ý kiến chuyên gia/gia đình, nhưng phải tự đối chiếu trung thực với năng lực, sở thích và điều kiện bản thân",
          "Chọn theo nhóm bạn thân để được học cùng lớp dù mình học kém môn đó"
        ],
        ans: 2,
        explain: "Cần tham khảo thông tin định hướng nhưng quyết định phải dựa trên sự tự đánh giá trung thực về bản thân."
      }
    ]
  },

  {
    id: "bai-5",
    num: 5,
    title: "Bài 5 — Dự án: Tự đánh giá mức độ phù hợp của bản thân",
    time: "45 phút",
    target: "Biết cách vận dụng bảng đối chiếu 10 nội dung đánh giá nghề nghiệp chuẩn SGK; hoàn thành dự án tự đánh giá mức độ phù hợp nghề nghiệp của bản thân với một ngành nghề kĩ thuật, công nghệ cụ thể; tính điểm và kết luận xếp loại (Không phù hợp: 1–3đ, Phù hợp một phần: 4–6đ, Phù hợp hoàn toàn: 7–10đ); tự tin thuyết trình về kế hoạch học tập, rèn luyện tương lai.",
    intro: "Lí thuyết chỉ thực sự có giá trị khi được soi chiếu vào thực tế bản thân. Trong bài học dự án này, bạn sẽ đóng vai một nhà tư vấn hướng nghiệp cho chính mình thông qua Bảng đối chiếu 10 tiêu chí khoa học.",
    sections: [
      {
        title: "1. Mục tiêu và sản phẩm của Dự án",
        icon: "fa-bullseye",
        content: `
          <p class="mb-3">
            <strong>Mục tiêu:</strong> Tự đánh giá năng lực, sở thích, cá tính và hoàn cảnh gia đình so với yêu cầu thực tế của một ngành nghề kĩ thuật, công nghệ mà em quan tâm; từ đó đưa ra kết luận mức độ phù hợp và định hình kế hoạch học tập.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-900 dark:text-emerald-200 block mb-1 font-bold"><i class="fa-solid fa-table-list"></i> Sản phẩm 1: Bảng đánh giá</strong>
              <p>Bảng đối chiếu 10 tiêu chí hoàn chỉnh giữa đặc điểm bản thân và yêu cầu nghề nghiệp, có chấm điểm và phân loại.</p>
            </div>
            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-900 dark:text-purple-200 block mb-1 font-bold"><i class="fa-solid fa-chalkboard-user"></i> Sản phẩm 2: Bài thuyết trình</strong>
              <p>Báo cáo (trên giấy, poster hoặc slide PowerPoint) trình bày về con đường nghề nghiệp đã chọn và kế hoạch rèn luyện sau lớp 9.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Tiến trình 5 bước thực hiện dự án",
        icon: "fa-stairs",
        content: `
          <div class="space-y-2 text-xs sm:text-sm">
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong>Bước 1 — Đánh giá bản thân:</strong> Liệt kê trung thực năng lực học tập, điểm mạnh, điểm yếu, tính cách và hoàn cảnh gia đình.
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong>Bước 2 — Tìm hiểu nhóm nghề:</strong> Tìm hiểu chi tiết nghề nghiệp lựa chọn (mô tả công việc, môi trường làm việc, yêu cầu năng lực/phẩm chất, học ở đâu, học phí bao nhiêu).
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong>Bước 3 — Lập bảng đối chiếu 10 tiêu chí:</strong> So khớp từng mục giữa bản thân (Cột 1) với yêu cầu nghề (Cột 2); đánh dấu Trùng khớp hoặc Không trùng khớp.
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong>Bước 4 — Tính điểm và kết luận:</strong> Mỗi mục trùng khớp được 1 điểm; tính tổng điểm và xếp loại theo thang điểm của SGK.
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong>Bước 5 — Báo cáo & Lập kế hoạch:</strong> Thuyết trình trước lớp về kết quả đối chiếu và các giải pháp bồi dưỡng những điểm còn yếu.
            </div>
          </div>
        `
      },
      {
        title: "3. Mười nội dung đối chiếu trong Bảng tự đánh giá",
        icon: "fa-list-ol",
        content: `
          <div class="overflow-x-auto text-xs">
            <table class="w-full border-collapse border border-gray-200 dark:border-gray-700 text-left">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <th class="p-2 border border-gray-200 dark:border-gray-700 w-24">Nhóm tiêu chí</th>
                  <th class="p-2 border border-gray-200 dark:border-gray-700">Nội dung đối chiếu chuẩn SGK</th>
                  <th class="p-2 border border-gray-200 dark:border-gray-700 w-24">Điểm tối đa</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td rowspan="5" class="p-2 border border-gray-200 dark:border-gray-700 font-bold bg-blue-50/50 dark:bg-blue-950/20">Năng lực<br>(5 tiêu chí)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">1. Hiểu biết cơ bản về lĩnh vực kĩ thuật, công nghệ quan tâm</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">2. Kĩ năng chuyên môn nổi trội phù hợp với nghề</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">3. Khả năng làm việc độc lập và làm việc nhóm</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">4. Năng lực học tập các môn liên quan (Toán, Tin, Công nghệ, Ngoại ngữ)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">5. Tinh thần tự học, tự nghiên cứu và đổi mới sáng tạo</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td rowspan="3" class="p-2 border border-gray-200 dark:border-gray-700 font-bold bg-amber-50/50 dark:bg-amber-950/20">Sở thích<br>(3 tiêu chí)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">6. Yêu thích loại hình công việc đặc thù của nghề</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">7. Yêu thích đối tượng lao động (máy móc, phần mềm, bản vẽ...)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">8. Yêu thích môi trường làm việc đặc trưng của nghề</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 font-bold bg-purple-50/50 dark:bg-purple-950/20">Cá tính<br>(1 tiêu chí)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">9. Nét tính cách phù hợp phẩm chất nghề (kiên trì, kỉ luật, tỉ mỉ, trách nhiệm)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 font-bold bg-rose-50/50 dark:bg-rose-950/20">Bối cảnh<br>(1 tiêu chí)</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700">10. Điều kiện gia đình có thể hỗ trợ thời gian và kinh phí đào tạo</td>
                  <td class="p-2 border border-gray-200 dark:border-gray-700 text-center font-bold">1đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "4. Thang điểm đánh giá và Xếp loại mức độ phù hợp",
        icon: "fa-award",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-2 text-xs text-center">
            <div class="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-200 text-rose-900">1 – 3 ĐIỂM</span>
              <h4 class="font-black text-sm text-rose-800 dark:text-rose-300 mt-2 mb-1">KHÔNG PHÙ HỢP</h4>
              <p class="text-gray-600 dark:text-gray-400">Nên cân nhắc chuyển hướng sang ngành nghề khác phù hợp hơn với sở trường và hoàn cảnh.</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">4 – 6 ĐIỂM</span>
              <h4 class="font-black text-sm text-amber-800 dark:text-amber-300 mt-2 mb-1">PHÙ HỢP MỘT PHẦN</h4>
              <p class="text-gray-600 dark:text-gray-400">Có tiềm năng nhưng cần nỗ lực bồi dưỡng thêm các kĩ năng, kiến thức còn thiếu hụt.</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">7 – 10 ĐIỂM</span>
              <h4 class="font-black text-sm text-emerald-800 dark:text-emerald-300 mt-2 mb-1">PHÙ HỢP HOÀN TOÀN</h4>
              <p class="text-gray-600 dark:text-gray-400">Ngành nghề rất lí tưởng! Hãy kiên định lập kế hoạch học tập, thi tuyển và rèn luyện.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Thực hiện bảng tự đánh giá trực tuyến bên dưới với nghề 'Kĩ sư An toàn thông tin' hoặc một nghề em yêu thích.",
      "Lập kế hoạch 3 bước hành động cụ thể để cải thiện những tiêu chí em đánh giá 'Chưa đạt' trong bảng.",
      "Thiết kế 1 slide trình bày ngắn (3 phút) giới thiệu nghề nghiệp em muốn theo đuổi sau khi tốt nghiệp THCS."
    ],
    summary: "Dự án tự đánh giá mức độ phù hợp nghề nghiệp sử dụng bảng đối chiếu 10 tiêu chí khoa học (5 năng lực, 3 sở thích, 1 cá tính, 1 hoàn cảnh). Thang điểm 7-10 điểm là phù hợp hoàn toàn, 4-6 điểm phù hợp một phần, 1-3 điểm không phù hợp. Kết quả giúp học sinh có cái nhìn khách quan, chủ động lập kế hoạch bồi dưỡng năng lực để tự tin bước vào đời.",
    quiz: [
      {
        q: "Bảng tự đánh giá mức độ phù hợp nghề nghiệp trong SGK Công nghệ 9 gồm bao nhiêu nội dung đối chiếu?",
        opts: [
          "5 nội dung",
          "10 nội dung (gồm 5 năng lực, 3 sở thích, 1 cá tính, 1 bối cảnh)",
          "20 nội dung",
          "100 câu hỏi trắc nghiệm"
        ],
        ans: 1,
        explain: "Bảng đối chiếu chuẩn SGK gồm đúng 10 tiêu chí chia làm 4 nhóm: Năng lực (5), Sở thích (3), Cá tính (1) và Bối cảnh (1)."
      },
      {
        q: "Theo thang điểm xếp loại của SGK, một học sinh đạt 8/10 điểm trùng khớp thì được xếp vào mức độ nào?",
        opts: [
          "Không phù hợp",
          "Phù hợp một phần",
          "Phù hợp hoàn toàn với ngành nghề đã chọn",
          "Phải làm lại bảng đánh giá từ đầu"
        ],
        ans: 2,
        explain: "Từ 7 đến 10 điểm được xếp loại Phù hợp hoàn toàn."
      },
      {
        q: "Nếu một học sinh đạt kết quả 'Phù hợp một phần' (5 điểm) với nghề Lập trình viên, bạn ấy nên làm gì?",
        opts: [
          "Bỏ học ngay lập tức",
          "Chỉ ra những mục chưa trùng khớp (như môn Toán hoặc tiếng Anh còn yếu) và lập kế hoạch rèn luyện, bồi dưỡng thêm",
          "Mặc kệ không cần quan tâm đến điểm số",
          "Đổi sang nghề khác mà không cần suy nghĩ"
        ],
        ans: 1,
        explain: "Phù hợp một phần là cơ sở để học sinh biết điểm hạn chế của mình và chủ động bồi dưỡng khắc phục."
      },
      {
        q: "Hai sản phẩm chính cần hoàn thành trong dự án Bài 5 là gì?",
        opts: [
          "Một con robot tự chế và một bài thơ ca ngợi",
          "Bảng đánh giá mức độ phù hợp nghề nghiệp và Bài thuyết trình về kết quả tự đánh giá",
          "Một bài thi học kì và một bức tranh phong cảnh",
          "Hợp đồng lao động chính thức với doanh nghiệp"
        ],
        ans: 1,
        explain: "Sản phẩm của bài học dự án gồm Bảng tự đánh giá 10 tiêu chí và Bài thuyết trình báo cáo."
      }
    ]
  }
];

module.exports = congnghe9Lessons;
