// Dữ liệu CHƯƠNG I. ĐẠI CƯƠNG VỀ CÔNG NGHỆ (Bài 1 – Bài 7)
// SGK Công nghệ 10: Thiết kế và Công nghệ – Bộ Kết nối tri thức với cuộc sống

const chapter1 = {
  chapterId: "chuong-1",
  chapterNumber: "Chương I",
  chapterTitle: "Đại cương về công nghệ",
  badge: "Bài 1 – Bài 7",
  themeColor: "indigo",
  icon: "fa-solid fa-microchip",
  lessons: [
    {
      id: "bai-1",
      number: "Bài 1",
      title: "Công nghệ và đời sống",
      badge: "Khoa học, Kĩ thuật & Công nghệ",
      icon: "fa-solid fa-atom",
      overview: "Làm rõ bản chất của khoa học, kĩ thuật, công nghệ, mối quan hệ tương hỗ hai chiều và tác động đa chiều của công nghệ đối với tự nhiên, con người và sự biến đổi xã hội.",
      sections: [
        {
          title: "1. Khái niệm Khoa học, Kĩ thuật và Công nghệ",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
              <div class="p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-2xl border border-blue-200/60 dark:border-blue-800">
                <strong class="text-blue-800 dark:text-blue-300 block mb-1.5 font-black text-sm">Khoa học (Science):</strong>
                Hệ thống tri thức về sự vật, hiện tượng và các quy luật vận động khách quan của tự nhiên, xã hội và tư duy. Khoa học tự nhiên quan sát, mô tả, giải thích và dự đoán tự nhiên dựa trên bằng chứng và thực nghiệm; gồm vật lí học, hoá học, sinh học, thiên văn học và khoa học Trái Đất.
              </div>
              <div class="p-3.5 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-2xl border border-indigo-200/60 dark:border-indigo-800">
                <strong class="text-indigo-800 dark:text-indigo-300 block mb-1.5 font-black text-sm">Kĩ thuật (Engineering):</strong>
                Việc ứng dụng các nguyên lí khoa học để thiết kế, chế tạo, vận hành máy móc, thiết bị, công trình, quy trình và hệ thống một cách hiệu quả và tối ưu kinh tế nhất nhằm giải quyết các bài toán thực tiễn.
              </div>
              <div class="p-3.5 bg-teal-50/70 dark:bg-teal-950/40 rounded-2xl border border-teal-200/60 dark:border-teal-800">
                <strong class="text-teal-800 dark:text-teal-300 block mb-1.5 font-black text-sm">Công nghệ (Technology):</strong>
                Giải pháp, quy trình, bí quyết kĩ thuật có hoặc không kèm công cụ/phương tiện, dùng để biến đổi nguồn lực (vật liệu, năng lượng, thông tin) thành sản phẩm hay dịch vụ. Công nghệ là kết quả của hoạt động kĩ thuật, có tính chuyển giao và liên tục đổi mới.
              </div>
            </div>
          `
        },
        {
          title: "2. Mối liên hệ biện chứng Khoa học – Kĩ thuật – Công nghệ",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Khoa học, kĩ thuật và công nghệ có mối liên hệ hai chiều khăng khít, thúc đẩy lẫn nhau phát triển:
            </p>
            <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
              <div>• <strong>Khoa học thúc đẩy Kĩ thuật & Công nghệ:</strong> Khoa học cung cấp tri thức nền tảng và nguyên lí định luật; kĩ thuật vận dụng các nguyên lí đó để giải quyết bài toán thực tế, sáng tạo ra công nghệ mới.</div>
              <div>• <strong>Công nghệ cung cấp phương tiện cho Khoa học:</strong> Công nghệ hiện có tạo ra kính thiên văn vũ trụ, kính hiển vi điện tử quét, máy gia tốc hạt, siêu máy tính... giúp các nhà khoa học quan sát sâu hơn vào thế giới vi mô và vũ trụ, đo lường chính xác và khám phá quy luật mới.</div>
            </div>
          `
        },
        {
          title: "3. Tác động của công nghệ đối với tự nhiên, con người và xã hội",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-emerald-600 block mb-1">Với Tự nhiên:</strong>
                Giúp khám phá, khai thác năng lượng sạch, xử lí chất thải, dự báo thiên tai; nhưng nếu lạm dụng sẽ gây cạn kiệt tài nguyên, ô nhiễm và biến đổi khí hậu.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-emerald-600 block mb-1">Với Con người:</strong>
                Nâng cao năng suất lao động, tiện nghi cuộc sống, chăm sóc sức khỏe; nhưng có nguy cơ gây lệ thuộc công nghệ, lười vận động và thay thế việc làm thủ công.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-emerald-600 block mb-1">Với Xã hội:</strong>
                Thúc đẩy tăng trưởng kinh tế, số hóa quản lí hành chính, kết nối toàn cầu; đồng thời làm biến đổi văn hóa, quan hệ ứng xử và an ninh mạng.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Nhận định nào sau đây phân biệt chính xác nhất bản chất giữa Khoa học và Kĩ thuật?",
          options: ["Khoa học khám phá và giải thích các quy luật tự nhiên, còn Kĩ thuật ứng dụng các quy luật đó để tạo ra sản phẩm thực tiễn", "Khoa học là chế tạo máy móc, còn kĩ thuật là nghiên cứu lí thuyết", "Khoa học và kĩ thuật là một khái niệm hoàn toàn trùng nhau", "Khoa học chỉ xuất hiện trong phòng thí nghiệm, còn kĩ thuật chỉ có ngoài đồng ruộng"],
          ans: 0,
          exp: "Khoa học trả lời câu hỏi 'Tại sao?' (khám phá quy luật), Kĩ thuật trả lời câu hỏi 'Làm thế nào?' (ứng dụng nguyên lí giải quyết vấn đề)."
        },
        {
          q: "Mối quan hệ giữa Khoa học, Kĩ thuật và Công nghệ là mối quan hệ:",
          options: ["Tương hỗ hai chiều, thúc đẩy và làm nền tảng tiền đề cho nhau cùng phát triển", "Hoàn toàn độc lập, không liên quan gì đến nhau", "Một chiều duy nhất từ khoa học ra công nghệ mà không có chiều ngược lại", "Loại trừ lẫn nhau trong nền kinh tế"],
          ans: 0,
          exp: "Khoa học cung cấp tri thức cho kĩ thuật tạo công nghệ, công nghệ lại cung cấp thiết bị máy móc tinh vi để khoa học khám phá quy luật mới."
        }
      ]
    },
    {
      id: "bai-2",
      number: "Bài 2",
      title: "Hệ thống kĩ thuật",
      badge: "Cấu trúc & Phân loại",
      icon: "fa-solid fa-diagram-project",
      overview: "Hệ thống kĩ thuật gồm 3 phần tử cốt lõi: Đầu vào – Bộ phận xử lí – Đầu ra. Phân biệt hệ thống mạch hở và hệ thống mạch kín có phản hồi điều khiển tự động.",
      sections: [
        {
          title: "1. Khái niệm và cấu trúc hệ thống kĩ thuật",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              <strong>Hệ thống kĩ thuật</strong> là một tập hợp các phần tử liên kết chặt chẽ với nhau theo quy luật nhất định nhằm biến đổi đầu vào thành đầu ra mong muốn:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold mx-auto mb-2">IN</span>
                <strong>ĐẦU VÀO (Input)</strong>
                <p class="text-slate-500 mt-1">Vật liệu, năng lượng hoặc thông tin/tín hiệu cần xử lí.</p>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center font-bold mx-auto mb-2">PROC</span>
                <strong>BỘ PHẬN XỬ LÍ</strong>
                <p class="text-slate-500 mt-1">Biến đổi, vận chuyển, lưu trữ vật liệu, năng lượng, thông tin.</p>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold mx-auto mb-2">OUT</span>
                <strong>ĐẦU RA (Output)</strong>
                <p class="text-slate-500 mt-1">Sản phẩm vật liệu, năng lượng hay thông tin đã được hoàn thiện.</p>
              </div>
            </div>
          `
        },
        {
          title: "2. Phân loại hệ thống: Mạch hở vs Mạch kín (Có phản hồi)",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Hệ thống kĩ thuật mạch hở:</strong>
                Đầu ra không được đo lường đưa ngược lại để điều chỉnh hoạt động của hệ thống. Hoạt động theo quy trình cài đặt cố định sẵn (ví dụ: máy sấy tóc bật nấc nóng liên tục, ấm nước thường đun không tự ngắt).
              </div>
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Hệ thống kĩ thuật mạch kín (Mạch điều khiển có phản hồi):</strong>
                Có <strong>tín hiệu phản hồi (Feedback)</strong> từ đầu ra hoặc môi trường thực tế đưa ngược về bộ điều khiển. Bộ điều khiển so sánh tín hiệu phản hồi với giá trị đặt để tự động tinh chỉnh (ví dụ: bàn là điện có rơ-le nhiệt tự ngắt khi đủ nóng, điều hòa tự giữ nhiệt độ phòng, đèn cảm biến tự bật khi trời tối).
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Điểm khác biệt bản chất giữa hệ thống kĩ thuật mạch kín và hệ thống kĩ thuật mạch hở là gì?",
          options: ["Hệ thống mạch kín có tín hiệu phản hồi từ đầu ra về bộ điều khiển để tự động điều chỉnh", "Hệ thống mạch kín không bao giờ sử dụng năng lượng điện", "Hệ thống mạch hở luôn có máy tính điều khiển", "Hệ thống mạch kín chỉ dùng trong các nhà máy lớn"],
          ans: 0,
          exp: "Phản hồi (Feedback) là đặc trưng của hệ thống mạch kín, cho phép hệ thống tự kiểm tra sai số đầu ra để tự động điều chỉnh ổn định."
        },
        {
          q: "Trong chiếc bàn là điện tự động ngắt điện khi đạt nhiệt độ cài đặt, rơ-le nhiệt đóng vai trò là phần tử nào?",
          options: ["Bộ phận cảm biến phản hồi nhiệt độ", "Nguồn năng lượng đầu vào", "Sản phẩm đầu ra", "Vỏ bảo vệ cơ học"],
          ans: 0,
          exp: "Rơ-le nhiệt cảm nhận nhiệt độ đế bàn là, khi quá ngưỡng sẽ uốn cong ngắt mạch, đó chính là khâu phản hồi điều khiển."
        }
      ]
    },
    {
      id: "bai-3",
      number: "Bài 3",
      title: "Công nghệ phổ biến",
      badge: "Cơ khí & Điện - Điện tử",
      icon: "fa-solid fa-gears",
      overview: "Hệ thống hóa các công nghệ cơ khí truyền thống (luyện kim, đúc, gia công cắt gọt, gia công áp lực, hàn) và công nghệ điện – điện tử (sản xuất điện, điện-quang, điện-cơ, điều khiển tự động hóa, truyền thông không dây).",
      sections: [
        {
          title: "1. Các công nghệ cơ khí cốt lõi",
          content: `
            <div class="space-y-2.5 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600">Luyện kim:</strong> Điều chế kim loại từ quặng; <em>Luyện kim đen</em> tạo gang và thép; <em>Luyện kim màu</em> tạo đồng, nhôm, titan, vàng... Cung cấp phôi và vật liệu nền tảng.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600">Công nghệ Đúc:</strong> Nấu chảy kim loại rót vào lòng khuôn có hình dáng chi tiết; sau khi đông đặc thu được vật đúc (đúc khuôn cát, khuôn kim loại, đúc áp lực, đúc li tâm).
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600">Gia công cắt gọt (Gọt phoi):</strong> Dùng dao cắt hớt bỏ lớp kim loại thừa dưới dạng phoi để đạt kích thước và độ nhẵn bóng cao (tiện, phay, bào, mài, khoan, khoét, doa; gia công tia lửa điện EDM, tia nước, laser).
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600">Gia công áp lực:</strong> Dùng ngoại lực làm biến dạng dẻo kim loại ở thể nóng hoặc nguội (cán tạo tấm/thanh ray, kéo sợi kim loại qua lỗ khuôn, rèn tự do/khuôn, dập tấm vỏ ô tô).
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600">Công nghệ Hàn:</strong> Nối các chi tiết kim loại thành liên kết không thể tháo rời bằng cách nung chảy cục bộ chỗ nối (hàn hồ quang, hàn hơi, hàn TIG/MIG) hoặc nung dẻo kết hợp ép lực (hàn tiếp xúc/hàn điểm).
              </div>
            </div>
          `
        },
        {
          title: "2. Các công nghệ Điện – Điện tử phổ biến",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-teal-600 dark:text-teal-400 block mb-1">Điện – Quang:</strong>
                Biến đổi điện năng thành ánh sáng; tiến hóa từ đèn sợi đốt (điện → nhiệt → quang, hiệu suất thấp) đến đèn phóng điện huỳnh quang và đèn LED (hiệu suất phát quang cao, tiết kiệm 80% điện).
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-teal-600 dark:text-teal-400 block mb-1">Điện – Cơ:</strong>
                Biến điện năng thành cơ năng chuyển động quay (động cơ điện, quạt máy, máy bơm) hoặc chuyển động tịnh tiến (van điện từ solenoids, rơ-le điện từ).
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-teal-600 dark:text-teal-400 block mb-1">Điều khiển & Tự động hóa:</strong>
                Ứng dụng PLC, vi điều khiển, cảm biến và robot công nghiệp vận hành dây chuyền sản xuất tự động liên hoàn.
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-teal-600 dark:text-teal-400 block mb-1">Truyền thông không dây:</strong>
                Truyền tải tín hiệu dữ liệu âm thanh, hình ảnh qua sóng điện từ không cần dây dẫn (Wi-Fi, Bluetooth, 4G/5G, vệ tinh GPS).
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Phương pháp gia công cơ khí nào sau đây tạo ra hình dạng chi tiết bằng cách hớt bỏ lớp kim loại thừa dưới dạng phoi?",
          options: ["Gia công cắt gọt (tiện, phay, bào, mài)", "Gia công áp lực (rèn, dập)", "Công nghệ đúc", "Công nghệ hàn nóng chảy"],
          ans: 0,
          exp: "Gia công cắt gọt dùng dụng cụ cắt gọt phoi để đạt độ chính xác kích thước và độ nhẵn bề mặt cao nhất."
        },
        {
          q: "Ưu điểm vượt trội nhất của đèn chiếu sáng công nghệ LED so với đèn sợi đốt truyền thống là:",
          options: ["Hiệu suất phát quang cao, tỏa rất ít nhiệt, tiết kiệm điện năng và tuổi thọ bền bỉ hàng chục ngàn giờ", "Có dây tóc kim loại vonfram dễ đứt", "Phát ra lượng nhiệt sưởi ấm cực lớn", "Giá thành rẻ nhất trong lịch sử"],
          ans: 0,
          exp: "Đèn LED biến đổi trực tiếp năng lượng điện tử thành photon ánh sáng, hiệu suất năng lượng cao và tuổi thọ vượt trội."
        }
      ]
    },
    {
      id: "bai-4",
      number: "Bài 4",
      title: "Một số công nghệ mới",
      badge: "Công nghệ đột phá",
      icon: "fa-solid fa-wand-magic-sparkles",
      overview: "Tìm hiểu 7 trụ cột công nghệ mới định hình tương lai: Công nghệ Nano, Chuỗi CAD/CAM/CNC, In 3D (Additive Manufacturing), Năng lượng tái tạo, Trí tuệ nhân tạo (AI), Internet vạn vật (IoT) và Robot thông minh.",
      sections: [
        {
          title: "1. Bảy trụ cột công nghệ mới tiêu biểu",
          content: `
            <div class="space-y-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">1. Công nghệ Nano (Nanotechnology):</strong>
                Nghiên cứu, chế tạo và thao tác trên cấu trúc vật chất ở thang đo nano mét (<strong>1 – 100 nm</strong>). Vật liệu nano sở hữu tính chất cơ, lí, hóa đặc biệt (nhẹ hơn, bền gấp 10 lần thép, dẫn điện siêu việt, diệt khuẩn).
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">2. Chuỗi công nghệ tích hợp CAD / CAM / CNC:</strong>
                Sơ đồ khép kín: <strong>CAD</strong> (Thiết kế mô hình 3D trên máy tính) → <strong>CAM</strong> (Lập trình đường chạy dao và tạo mã lệnh gia công G-code) → <strong>CNC</strong> (Máy công cụ điều khiển số tự động cắt gọt) → <strong>Chi tiết hoàn thiện</strong> với độ chính xác micron.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">3. Công nghệ In 3D (Sản xuất đắp lớp - Additive Manufacturing):</strong>
                Chia mô hình 3D số thành hàng ngàn lát cắt 2D siêu mỏng, sau đó đầu in đắp vật liệu (nhựa, kim loại, gốm, tế bào sinh học) tuần tự từng lớp chồng lên nhau. Cho phép tạo ra các chi tiết rỗng phức tạp mà phương pháp cắt gọt truyền thống không thể làm được.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">4. Công nghệ Năng lượng tái tạo:</strong>
                Khai thác các nguồn năng lượng tự nhiên vô tận không phát thải khí nhà kính: pin mặt trời quang điện, tuabin điện gió, thủy triều, sóng biển và địa nhiệt.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">5. Trí tuệ nhân tạo (AI) &amp; 6. Internet vạn vật (IoT) &amp; 7. Robot thông minh:</strong>
                AI mô phỏng năng lực nhận thức, học máy và ra quyết định; IoT kết nối hàng tỉ thiết bị cảm biến truyền dữ liệu qua Internet; Robot tự hành AI thực hiện các công việc phức tạp trong môi trường nguy hiểm hoặc dây chuyền lắp ráp ô tô chính xác tuyệt đối.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Thứ tự các công đoạn trong chuỗi sản xuất cơ khí chính xác hiện đại tích hợp máy tính là:",
          options: ["CAD (Thiết kế) -> CAM (Lập trình gia công) -> CNC (Máy cắt gọt tự động)", "CNC -> CAM -> CAD", "CAM -> CAD -> CNC", "CAD -> CNC -> CAM"],
          ans: 0,
          exp: "Bắt đầu từ bản vẽ 3D trên CAD, xuất sang phần mềm CAM lập trình đường chạy dao, nạp mã lệnh vào máy CNC gia công chi tiết."
        },
        {
          q: "Công nghệ In 3D (Additive Manufacturing) tạo ra vật thể bằng nguyên lí cốt lõi nào?",
          options: ["Đắp vật liệu tuần tự từng lớp 2D siêu mỏng chồng lên nhau theo mô hình số", "Cắt gọt đục đẽo bớt vật liệu từ một khối phôi thô lớn", "Rót kim loại lỏng vào khuôn cát", "Dập biến dạng dẻo tấm kim loại mỏng"],
          ans: 0,
          exp: "In 3D là phương pháp cộng (đắp dần từng lớp vật liệu), trái ngược với phương pháp gia công trừ (gọt phoi bỏ bớt vật liệu)."
        }
      ]
    },
    {
      id: "bai-5",
      number: "Bài 5",
      title: "Đánh giá công nghệ",
      badge: "Tiêu chí & Ra quyết định",
      icon: "fa-solid fa-scale-balanced",
      overview: "Hệ thống tiêu chí đánh giá công nghệ (hiệu quả, độ tin cậy, kinh tế, môi trường) và tiêu chí đánh giá sản phẩm công nghệ nhằm đưa ra quyết định lựa chọn giải pháp tối ưu.",
      sections: [
        {
          title: "1. Bốn tiêu chí cốt lõi đánh giá công nghệ",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">1. Tiêu chí Hiệu quả:</strong>
                Năng suất gia công, tốc độ chu kì, mức độ ổn định chất lượng và tính thẩm mĩ của sản phẩm hoàn thiện.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">2. Tiêu chí Độ tin cậy:</strong>
                Độ chính xác kích thước, tuổi thọ máy móc, tỉ lệ phát sinh phế phẩm và khả năng hoạt động ổn định lâu dài.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">3. Tiêu chí Kinh tế:</strong>
                Tổng chi phí đầu tư thiết bị ban đầu (CAPEX), chi phí vận hành (OPEX), giá thành trên từng đơn vị sản phẩm và thời gian thu hồi vốn.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">4. Tiêu chí Môi trường:</strong>
                Mức độ phát thải khí độc, nước thải hóa chất, tiếng ồn, rung chấn và khả năng tái chế phế liệu.
              </div>
            </div>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs">
              <strong>Ví dụ so sánh SGK:</strong> Công nghệ <em>ép phun nhựa (Plastic Injection)</em> đòi hỏi làm khuôn mẫu thép rất đắt tiền nên chỉ hiệu quả khi sản xuất hàng loạt số lượng cực lớn (hàng triệu chiếc); ngược lại, <em>In 3D</em> phù hợp cho sản xuất đơn chiếc, tạo mẫu thử nghiệm nhanh mà không cần khuôn.
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Khi cần sản xuất thử nghiệm một nguyên mẫu vỏ robot duy nhất để kiểm tra tính năng, công nghệ nào sau đây là lựa chọn kinh tế và tối ưu nhất?",
          options: ["Công nghệ In 3D tạo mẫu nhanh", "Chế tạo bộ khuôn thép đắt tiền để ép nhựa hàng loạt", "Đúc khuôn kim loại áp lực cao", "Cán nóng kim loại tấm"],
          ans: 0,
          exp: "In 3D không tốn chi phí làm khuôn mẫu ban đầu, in trực tiếp từ tệp 3D nên tối ưu cho sản phẩm đơn chiếc."
        },
        {
          q: "Nhóm tiêu chí cốt lõi khi tiến hành thẩm định và đánh giá một công nghệ mới là:",
          options: ["Hiệu quả, độ tin cậy, kinh tế và tác động môi trường", "Chỉ cần công nghệ đó có tên gọi thật hiện đại", "Chỉ xem xét công nghệ đó có giá bán cao nhất hay không", "Chỉ xem xét màu sắc của máy móc"],
          ans: 0,
          exp: "Bốn trụ cột đánh giá công nghệ toàn diện gồm: Hiệu quả kĩ thuật, Độ tin cậy, Tính khả thi kinh tế và Thân thiện môi trường."
        }
      ]
    },
    {
      id: "bai-6",
      number: "Bài 6",
      title: "Cách mạng công nghiệp",
      badge: "Lịch sử & Xu thế CMCN 4.0",
      icon: "fa-solid fa-industry",
      overview: "Bốn cuộc cách mạng công nghiệp trong lịch sử nhân loại, đặc trưng công nghệ bản lề và những tác động sâu sắc đến cơ cấu việc làm, quản trị số và nền kinh tế thông minh.",
      sections: [
        {
          title: "1. Bảng đối chiếu 4 cuộc cách mạng công nghiệp",
          content: `
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-xs border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                  <tr>
                    <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Cuộc CMCN</th>
                    <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Thời gian &amp; Đặc trưng</th>
                    <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Thành tựu mang tính bước ngoặt</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-2.5 font-bold text-indigo-600">CMCN Lần 1</td>
                    <td class="p-2.5">Cuối thế kỉ XVIII — Động cơ hơi nước &amp; Cơ giới hóa</td>
                    <td class="p-2.5">Máy hơi nước James Watt, máy dệt cơ khí, luyện kim than đá; mở đầu kỉ nguyên công nghiệp hóa.</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-2.5 font-bold text-indigo-600">CMCN Lần 2</td>
                    <td class="p-2.5">Cuối thế kỉ XIX — Điện năng &amp; Sản xuất hàng loạt</td>
                    <td class="p-2.5">Nhà máy điện, động cơ đốt trong, dây chuyền băng chuyền Henry Ford, luyện thép lò cao.</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-2.5 font-bold text-indigo-600">CMCN Lần 3</td>
                    <td class="p-2.5">Thập niên 1970 — Máy tính, Bán dẫn &amp; Tự động hóa</td>
                    <td class="p-2.5">Bóng bán dẫn, máy vi tính, Internet, bộ điều khiển PLC, robot công nghiệp cánh tay đơn.</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-2.5 font-bold text-indigo-600">CMCN Lần 4</td>
                    <td class="p-2.5">Từ năm 2011 — Công nghệ số, AI, IoT &amp; Hệ thống CPS</td>
                    <td class="p-2.5">Trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data), điện toán đám mây, in 3D, xe tự hành, nhà máy thông minh.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Phát minh công nghệ nào đánh dấu bước ngoặt khởi đầu cho cuộc Cách mạng công nghiệp lần thứ nhất?",
          options: ["Động cơ hơi nước của James Watt", "Bóng bán dẫn transistor", "Mạng máy tính Internet", "Động cơ điện xoay chiều"],
          ans: 0,
          exp: "Động cơ hơi nước giải phóng sức lao động cơ bắp của con người và động vật, mở ra kỉ nguyên cơ giới hóa sản xuất."
        },
        {
          q: "Đặc trưng cốt lõi của cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) là sự kết hợp giữa:",
          options: ["Hệ thống vật lí không gian mạng (CPS), Trí tuệ nhân tạo (AI), IoT và Dữ liệu lớn (Big Data)", "Động cơ hơi nước và than đá", "Nến thắp sáng và xe ngựa", "Lao động thủ công gia đình"],
          ans: 0,
          exp: "CMCN 4.0 xóa nhòa ranh giới giữa thế giới vật lí, sinh học và thế giới số thông qua kết nối vạn vật và trí tuệ nhân tạo."
        }
      ]
    },
    {
      id: "bai-7",
      number: "Bài 7",
      title: "Ngành nghề kĩ thuật, công nghệ",
      badge: "Hướng nghiệp kĩ thuật",
      icon: "fa-solid fa-user-gear",
      overview: "Tìm hiểu đặc trưng nghề nghiệp, môi trường làm việc và yêu cầu phẩm chất của hai nhóm ngành lớn: Cơ khí chế tạo và Điện – Điện tử – Viễn thông; phương pháp tự định hướng nghề nghiệp.",
      sections: [
        {
          title: "1. Các nhóm ngành nghề kĩ thuật công nghệ tiêu biểu",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Ngành Cơ khí:</strong>
                Thiết kế, chế tạo, gia công chi tiết, lắp ráp, vận hành và bảo trì máy móc, robot, ô tô, thiết bị áp lực. Yêu cầu: đọc hiểu bản vẽ kĩ thuật thành thạo, tư duy không gian tốt, sử dụng thành thạo phần mềm CAD/CAM, tính cẩn trọng và kỉ luật an toàn lao động cao.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Ngành Điện, Điện tử &amp; Viễn thông:</strong>
                Thiết kế mạch điện tử, lập trình nhúng, lắp đặt và vận hành hệ thống điện thông minh, hạ tầng mạng truyền dẫn 5G, trạm biến áp, tự động hóa PLC. Yêu cầu: tư duy logic toán học, khả năng phân tích sơ đồ mạch và vận hành máy đo hiện sóng, đồng hồ đo điện.
              </div>
            </div>
          `
        },
        {
          title: "2. Ba câu hỏi đối chiếu khi lựa chọn nghề nghiệp kĩ thuật",
          content: `
            <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
              <div><strong>1. Bản thân là ai?</strong> Sở thích cá nhân, năng lực tư duy kĩ thuật, tính cách cẩn thận tỉ mỉ và giá trị nghề nghiệp hướng tới.</div>
              <div><strong>2. Ngành nghề đang cần gì?</strong> Nhu cầu nhân lực của thị trường lao động trong nước và quốc tế, môi trường làm việc, cơ hội thăng tiến.</div>
              <div><strong>3. Cần chuẩn bị những gì?</strong> Lộ trình học tập, rèn luyện ngoại ngữ, kĩ năng công nghệ thông tin và tinh thần kỉ luật lao động chuyên nghiệp.</div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Kĩ năng nào sau đây là kĩ năng chuyên môn cơ bản bắt buộc đối với một kĩ sư ngành Cơ khí chế tạo máy?",
          options: ["Đọc hiểu và lập bản vẽ kĩ thuật, vận hành phần mềm CAD/CAM", "Kĩ năng cắm hoa nghệ thuật", "Kĩ năng sáng tác thơ ca", "Kĩ năng biểu diễn nhạc cụ"],
          ans: 0,
          exp: "Bản vẽ kĩ thuật được coi là 'ngôn ngữ của kĩ thuật', mọi kĩ sư cơ khí đều phải đọc hiểu và sử dụng thành thạo bản vẽ."
        },
        {
          q: "Khi lựa chọn nghề nghiệp thuộc lĩnh vực kĩ thuật - công nghệ, học sinh cần đối chiếu giữa 3 yếu tố cốt lõi nào?",
          options: ["Năng lực sở thích bản thân – Yêu cầu của thị trường lao động – Sự chuẩn bị về kĩ năng học tập", "Chỉ chọn nghề có thu nhập cao nhất mà không cần năng lực", "Chỉ chọn nghề theo ý thích nhất thời", "Chọn nghề hoàn toàn ngẫu nhiên"],
          ans: 0,
          exp: "Định hướng nghề nghiệp khoa học là sự giao thoa giữa: Bản thân mình là ai, Xã hội đang cần gì, và Mình cần chuẩn bị hành trang gì."
        }
      ]
    }
  ]
};

module.exports = { chapter1 };
