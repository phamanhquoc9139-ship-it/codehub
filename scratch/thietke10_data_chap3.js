// Dữ liệu CHƯƠNG III. THIẾT KẾ KĨ THUẬT (Bài 17 – Bài 22)
// SGK Công nghệ 10: Thiết kế và Công nghệ – Bộ Kết nối tri thức với cuộc sống

const chapter3 = {
  chapterId: "chuong-3",
  chapterNumber: "Chương III",
  chapterTitle: "Thiết kế kĩ thuật",
  badge: "Bài 17 – Bài 22",
  themeColor: "purple",
  icon: "fa-solid fa-lightbulb",
  lessons: [
    {
      id: "bai-17",
      number: "Bài 17",
      title: "Khái quát về thiết kế kĩ thuật",
      badge: "Bản chất & Nghề nghiệp",
      icon: "fa-solid fa-pencil",
      overview: "Thiết kế kĩ thuật là hoạt động sáng tạo giải quyết vấn đề thực tiễn bằng cách vận dụng toán học, khoa học và công nghệ; vai trò phát triển sản phẩm mới và các nghề nghiệp thiết kế.",
      sections: [
        {
          title: "1. Khái niệm và Mục tiêu của Thiết kế kĩ thuật",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              <strong>Thiết kế kĩ thuật (Engineering Design)</strong> là hoạt động sáng tạo đặc thù nhằm phát hiện và giải quyết vấn đề hoặc đáp ứng nhu cầu thực tiễn của con người bằng cách vận dụng tri thức toán học, khoa học tự nhiên và công nghệ.
            </p>
            <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
              <div>• <strong>Sản phẩm đầu ra:</strong> Bản vẽ thiết kế, mô hình tính toán, nguyên mẫu thử nghiệm và bộ hồ sơ kĩ thuật để đưa vào sản xuất hàng loạt.</div>
              <div>• <strong>Đặc điểm:</strong> Quá trình mang tính lặp đi lặp lại (thử nghiệm → sai sót → tinh chỉnh cải tiến); luôn phải cân bằng hài hòa giữa các yếu tố kĩ thuật, chi phí tài chính, thẩm mĩ và bảo vệ môi trường.</div>
            </div>
          `
        },
        {
          title: "2. Vai trò và Các ngành nghề liên quan",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Vai trò thúc đẩy xã hội:</strong>
                Phát triển sản phẩm mới đáp ứng tiện nghi; cải tiến nâng cao chất lượng sản phẩm hiện có; biến tri thức nghiên cứu thành giải pháp sản xuất thực tiễn; nâng cao năng lực cạnh tranh quốc gia.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Các nghề nghiệp tiêu biểu:</strong>
                Kiến trúc sư công trình / quy hoạch cảnh quan, kĩ sư thiết kế cơ khí chế tạo máy, nhà thiết kế nội thất, thiết kế sản phẩm công nghiệp (Industrial Designer), kĩ sư thiết kế vi mạch điện tử, nhà thiết kế thời trang.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Bản chất của hoạt động Thiết kế kĩ thuật trong đời sống là gì?",
          options: ["Hoạt động sáng tạo nhằm phát hiện và giải quyết vấn đề thực tiễn bằng tri thức khoa học và công nghệ", "Chỉ là vẽ tranh nghệ thuật đơn thuần", "Chỉ là sao chép lại nguyên văn sản phẩm của người khác", "Chỉ làm theo cảm tính mà không cần tính toán khoa học"],
          ans: 0,
          exp: "Thiết kế kĩ thuật là cầu nối biến các nguyên lí khoa học tự nhiên và công nghệ thành giải pháp sản phẩm hữu hình phục vụ con người."
        },
        {
          q: "Người làm nghề thiết kế kĩ thuật cần hội tụ những năng lực phẩm chất nào sau đây?",
          options: ["Tư duy hình học không gian, tư duy logic, sáng tạo, thẩm mĩ và sử dụng thành thạo phần mềm thiết kế", "Chỉ cần biết vẽ tranh biếm họa", "Chỉ cần có sức khỏe cơ bắp tốt", "Không cần kiến thức toán học"],
          ans: 0,
          exp: "Thiết kế đòi hỏi sự kết hợp giữa tư duy khoa học chính xác (toán, kĩ thuật) và cảm thụ nghệ thuật thẩm mĩ cùng công cụ số."
        }
      ]
    },
    {
      id: "bai-18",
      number: "Bài 18",
      title: "Quy trình thiết kế kĩ thuật",
      badge: "Quy trình chuẩn 7 bước",
      icon: "fa-solid fa-list-check",
      overview: "Quy trình 7 bước chuẩn của thiết kế kĩ thuật: từ xác định vấn đề, tìm hiểu tổng quan, xác định yêu cầu, đề xuất giải pháp, xây dựng nguyên mẫu đến kiểm chứng và lập hồ sơ kĩ thuật.",
      sections: [
        {
          title: "1. Bảy bước chuẩn của Quy trình thiết kế kĩ thuật",
          content: `
            <div class="space-y-2.5 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">1</span>
                <div><strong>Bước 1 - Xác định vấn đề:</strong> Phát hiện nhu cầu thực tế cần giải quyết (Ai gặp vấn đề? Ở đâu? Tại sao cần giải quyết? Mục đích là gì?).</div>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">2</span>
                <div><strong>Bước 2 - Tìm hiểu tổng quan:</strong> Thu thập thông tin, nghiên cứu các giải pháp/sản phẩm đã có trên thị trường, tra cứu kiến thức khoa học liên quan để kế thừa điểm mạnh và tránh lặp lại sai lầm.</div>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">3</span>
                <div><strong>Bước 3 - Xác định yêu cầu (Tiêu chí thiết kế):</strong> Thiết lập bảng thông số kĩ thuật cụ thể: chức năng bắt buộc, kích thước, khối lượng, độ an toàn, chi phí ngân sách, thẩm mĩ và tác động môi trường.</div>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">4</span>
                <div><strong>Bước 4 - Đề xuất, đánh giá và lựa chọn giải pháp:</strong> Dùng kĩ thuật động não đưa ra nhiều phương án sơ bộ; so sánh đối chiếu với bảng tiêu chuẩn để chọn phương án tối ưu nhất.</div>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">5</span>
                <div><strong>Bước 5 - Xây dựng nguyên mẫu (Prototype):</strong> Lập bản vẽ thiết kế chi tiết và chế tạo một phiên bản sản phẩm thử nghiệm hoạt động thực tế (có thể dùng vật liệu mô phỏng như gỗ, mica, in 3D).</div>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">6</span>
                <div><strong>Bước 6 - Thử nghiệm và đánh giá:</strong> Vận hành thử nghiệm nguyên mẫu trong điều kiện thực tế hoặc mô phỏng số; đo đạc thông số, ghi nhận lỗi sai sót. <em>Nếu không đạt yêu cầu → quay lại bước 4 hoặc bước 5 để cải tiến</em>.</div>
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0">7</span>
                <div><strong>Bước 7 - Lập hồ sơ kĩ thuật:</strong> Hoàn thiện bộ tài liệu thuyết minh, bản vẽ lắp, bản vẽ chi tiết, quy trình công nghệ chế tạo, hướng dẫn sử dụng và đăng kí bảo hộ sở hữu trí tuệ (nếu có).</div>
              </div>
            </div>
            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
              <strong>Bản chất lặp của quy trình:</strong> Thiết kế không bao giờ là đường thẳng một chiều mà là một <em>vòng lặp phản hồi liên tục</em> giữa bước thử nghiệm kiểm chứng và bước đề xuất cải tiến nguyên mẫu cho đến khi đạt chuẩn hoàn hảo.
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Sau khi chế tạo nguyên mẫu (Prototype) và tiến hành thử nghiệm, nếu kết quả đo đạc không đạt yêu cầu đề ra thì người thiết kế cần phải làm gì?",
          options: ["Quay lại bước đề xuất giải pháp hoặc hiệu chỉnh nguyên mẫu để thử nghiệm lại (tính chất lặp)", "Hủy bỏ toàn bộ và không làm thiết kế nữa", "Bỏ qua lỗi và đưa sản phẩm vào sản xuất hàng loạt ngay", "Sửa đổi số liệu đo đạc cho khớp với yêu cầu"],
          ans: 0,
          exp: "Tính lặp lại (iteration) là bản chất của thiết kế kĩ thuật; phát hiện sai sót để quay lại điều chỉnh phương án cho đến khi đạt chất lượng tối ưu."
        },
        {
          q: "Mục đích chính của bước 'Tìm hiểu tổng quan' trong quy trình thiết kế kĩ thuật là:",
          options: ["Nghiên cứu các giải pháp đã có, nhu cầu người dùng và kiến thức liên quan để kế thừa và tránh sai lầm", "Chế tạo ngay sản phẩm thật", "Vẽ khung tên cho bản vẽ", "Bán sản phẩm ra thị trường"],
          ans: 0,
          exp: "Tìm hiểu tổng quan giúp người thiết kế không phải 'phát minh lại bánh xe' mà kế thừa tri thức nhân loại và thấu cảm người dùng."
        }
      ]
    },
    {
      id: "bai-19",
      number: "Bài 19",
      title: "Những yếu tố ảnh hưởng đến thiết kế kĩ thuật",
      badge: "Sản phẩm & Nguồn lực",
      icon: "fa-solid fa-sliders",
      overview: "Phân tích các yếu tố ảnh hưởng từ phía sản phẩm (thẩm mĩ, nhân trắc học Ergonomics, an toàn, năng lượng, vòng đời sản phẩm LCA, phát triển bền vững) và các yếu tố nguồn lực (tài chính, công nghệ).",
      sections: [
        {
          title: "1. Các yếu tố thuộc về Sản phẩm",
          content: `
            <div class="space-y-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Thẩm mĩ công nghiệp (Aesthetics):</strong>
                Đường nét hình khối hài hòa, tỉ lệ vàng cân đối, phối màu sắc tinh tế, xử lí bề mặt tạo cảm xúc thị giác và xúc giác tích cực cho người sử dụng.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Nhân trắc học (Ergonomics):</strong>
                Sự tương thích hoàn hảo giữa kích thước, tư thế chuyển động của cơ thể người với sản phẩm. <em>Nguyên tắc:</em> Thiết kế tư thế làm việc trung tính, nút bấm nằm trong tầm với tự nhiên, không bắt cơ thể cúi gập quá mức, loại bỏ cạnh sắc nhọn gây tì đè tổn thương mô cơ.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Yếu tố An toàn:</strong>
                Cách điện, cách nhiệt, phòng chống cháy nổ, bảo vệ các bộ phận chuyển động nguy hiểm; quy ước mã màu an toàn: <strong>Màu đỏ</strong> báo nguy hiểm/dừng khẩn cấp, <strong>Màu vàng/hổ phách</strong> cảnh báo thận trọng, <strong>Màu xanh</strong> an toàn/cho phép hoạt động.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Vòng đời sản phẩm (LCA) &amp; Phát triển bền vững:</strong>
                Đánh giá toàn diện từ khâu khai thác nguyên liệu → Chế tạo → Sử dụng → Thải bỏ tái chế; tiết kiệm năng lượng, không dùng hóa chất độc hại, thiết kế dễ tháo lắp để tái chế.
              </div>
            </div>
          `
        },
        {
          title: "2. Các yếu tố thuộc về Nguồn lực",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Nguồn lực Tài chính:</strong>
                Ngân sách dự án giới hạn; phải cân đối tối ưu giữa chi phí sản xuất và giá bán thương mại để đảm bảo tính cạnh tranh trên thị trường.
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Nguồn lực Công nghệ &amp; Nhân lực:</strong>
                Trình độ máy móc thiết bị hiện có quyết định độ chính xác gia công, vật liệu chế tạo khả thi và giới hạn hình dạng kết cấu sản phẩm.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Nhân trắc học (Ergonomics) trong thiết kế kĩ thuật nghiên cứu mối quan hệ cốt lõi giữa:",
          options: ["Đặc điểm kích thước giải phẫu, tầm với và chuyển động cơ thể người với sản phẩm để tạo sự thoải mái, an toàn tối đa", "Giá thành của sản phẩm với thị trường", "Màu sắc của bao bì đóng gói", "Tốc độ chạy của máy tính"],
          ans: 0,
          exp: "Ergonomics nghiên cứu để thiết kế sản phẩm vừa vặn với kích thước cơ thể con người, tránh mệt mỏi và chấn thương cơ xương khớp."
        },
        {
          q: "Trong quy ước màu sắc an toàn công nghiệp trên các nút bấm máy móc thiết bị, màu ĐỎ mang ý nghĩa gì?",
          options: ["Cảnh báo nguy hiểm, nút dừng khẩn cấp (Emergency Stop)", "Báo trạng thái an toàn bình thường", "Báo máy đang chạy tốt", "Nút bật nguồn máy"],
          ans: 0,
          exp: "Màu đỏ luôn quy ước cho tình trạng nguy hiểm, cảnh báo cháy và nút dừng ngắt khẩn cấp để mắt người nhận diện ngay lập tức."
        }
      ]
    },
    {
      id: "bai-20",
      number: "Bài 20",
      title: "Nguyên tắc thiết kế kĩ thuật",
      badge: "Nguyên tắc Tối ưu & 6R",
      icon: "fa-solid fa-compass",
      overview: "Bốn nguyên tắc tối ưu hóa thiết kế (lặp đi lặp lại, đơn giản hóa, giải pháp tối ưu trong ràng buộc, tối thiểu tài chính) và nguyên tắc phát triển bền vững 6R bảo vệ môi trường.",
      sections: [
        {
          title: "1. Bốn nguyên tắc Tối ưu trong thiết kế",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">1. Nguyên tắc lặp đi lặp lại:</strong>
                Không ngừng thử nghiệm, thu thập phản hồi của người dùng và điều chỉnh qua từng chu kì để đưa sản phẩm tiệm cận mức hoàn hảo.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">2. Nguyên tắc đơn giản hóa:</strong>
                'Đơn giản là đỉnh cao của sự tinh tế' (KISS - Keep It Simple, Stupid). Giảm bớt các chi tiết thừa thãi giúp giảm chi phí sản xuất, dễ lắp ráp, dễ sử dụng và ít bị hỏng hóc.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">3. Giải pháp tối ưu trong ràng buộc:</strong>
                Không có giải pháp hoàn hảo tuyệt đối mà chỉ có giải pháp <em>phù hợp nhất</em> cân bằng hài hòa giữa các ràng buộc về thời gian, tiền bạc, công nghệ và tính năng.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">4. Nguyên tắc tối thiểu chi phí tài chính:</strong>
                Đạt được mọi yêu cầu kĩ thuật đặt ra với mức chi phí sản xuất thấp nhất hợp lí để tối đa hóa hiệu quả kinh tế.
              </div>
            </div>
          `
        },
        {
          title: "2. Nguyên tắc Phát triển bền vững và Nhóm nguyên tắc 6R",
          content: `
            <div class="p-4 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/60 dark:border-emerald-800 text-xs space-y-1.5 text-emerald-900 dark:text-emerald-200">
              <strong class="text-emerald-800 dark:text-emerald-300 block mb-2 font-bold text-sm">Hệ nguyên tắc 6R trong thiết kế sinh thái (Ecodesign):</strong>
              <div>• <strong>Rethink (Suy nghĩ lại):</strong> Đổi mới tư duy thiết kế, xem xét liệu sản phẩm có thực sự cần thiết hay có thể thay thế bằng dịch vụ chia sẻ.</div>
              <div>• <strong>Refuse (Từ chối):</strong> Kiên quyết từ chối sử dụng các vật liệu độc hại không thể tái chế (nhựa dùng một lần, hóa chất độc).</div>
              <div>• <strong>Reduce (Giảm thiểu):</strong> Cắt giảm lượng vật liệu và năng lượng tiêu hao trong quá trình chế tạo và sử dụng.</div>
              <div>• <strong>Reuse (Tái sử dụng):</strong> Thiết kế các module chi tiết có thể tháo rời và tái sử dụng cho các mục đích khác.</div>
              <div>• <strong>Repair (Sửa chữa):</strong> Thiết kế kết cấu mở, linh kiện tiêu chuẩn để người dùng dễ dàng tự sửa chữa và thay thế khi hỏng hóc.</div>
              <div>• <strong>Recycle (Tái chế):</strong> Ưu tiên dùng vật liệu có khả năng tái chế 100% khi hết vòng đời sản phẩm.</div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Nguyên tắc 'Đơn giản hóa' trong thiết kế kĩ thuật mang lại lợi ích nổi bật nào sau đây?",
          options: ["Giảm chi phí chế tạo, giảm tỉ lệ hỏng hóc và giúp người dùng dễ vận hành, bảo dưỡng", "Làm cho sản phẩm trở nên xấu xí", "Làm tăng số lượng linh kiện lên gấp đôi", "Làm cho sản phẩm bán đắt tiền hơn"],
          ans: 0,
          exp: "Cấu trúc càng đơn giản thì càng ít điểm lỗi cơ học, chi phí gia công chế tạo càng thấp và độ tin cậy càng cao."
        },
        {
          q: "Chữ cái 'R' đầu tiên trong nhóm nguyên tắc thiết kế bền vững 6R có ý nghĩa nhắc nhở người thiết kế xem xét lại bản chất nhu cầu là:",
          options: ["Rethink (Suy nghĩ lại)", "Run (Chạy trốn)", "Read (Đọc sách)", "Redo (Làm lại)"],
          ans: 0,
          exp: "Rethink là tư duy thiết kế sinh thái, xem xét lại toàn bộ mô hình sản phẩm để tìm giải pháp căn cơ giảm thiểu rác thải từ gốc."
        }
      ]
    },
    {
      id: "bai-21",
      number: "Bài 21",
      title: "Phương pháp, phương tiện hỗ trợ thiết kế kĩ thuật",
      badge: "Kĩ thuật sáng tạo & Công cụ",
      icon: "fa-solid fa-toolbox",
      overview: "Bộ công cụ tư duy sáng tạo đỉnh cao: Động não (Brainstorming), Sơ đồ tư duy (Mindmap), Kĩ thuật 5W1H, Kĩ thuật SCAMPER, Bảng điểm PMI và ma trận đánh giá Rubric.",
      sections: [
        {
          title: "1. Các phương pháp tư duy sáng tạo trong thiết kế",
          content: `
            <div class="space-y-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">1. Động não (Brainstorming):</strong>
                Kĩ thuật huy động tối đa số lượng ý tưởng trong thời gian ngắn từ nhóm thiết kế. <em>Quy tắc vàng:</em> <strong>Tuyệt đối không chỉ trích, phán xét ý tưởng của người khác trong lúc động não</strong>; khuyến khích các ý tưởng táo bạo, kì lạ; sau đó mới phân loại và chọn lọc.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">2. Kĩ thuật 5W1H (Hệ thống câu hỏi đào sâu):</strong>
                - <strong>What:</strong> Sản phẩm là cái gì? Chức năng cốt lõi là gì?<br>
                - <strong>Who:</strong> Ai là đối tượng người dùng mục tiêu?<br>
                - <strong>Where:</strong> Sản phẩm được sử dụng ở đâu (trong nhà, ngoài trời, dưới nước)?<br>
                - <strong>When:</strong> Khi nào sản phẩm được sử dụng?<br>
                - <strong>Why:</strong> Tại sao khách hàng lại cần sản phẩm này?<br>
                - <strong>How:</strong> Sản phẩm hoạt động như thế nào? Chi phí chế tạo bao nhiêu?
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">3. Kĩ thuật kích thích sáng tạo SCAMPER:</strong>
                - <strong>S - Substitute:</strong> Thay thế vật liệu, linh kiện khác?<br>
                - <strong>C - Combine:</strong> Kết hợp tính năng của 2 sản phẩm lại với nhau?<br>
                - <strong>A - Adapt:</strong> Thích nghi tính năng từ tự nhiên vào sản phẩm (mô phỏng sinh học)?<br>
                - <strong>M - Modify / Magnify / Minify:</strong> Thay đổi hình dạng, phóng to hoặc thu nhỏ lại?<br>
                - <strong>P - Put to other uses:</strong> Sử dụng vào mục đích khác?<br>
                - <strong>E - Eliminate:</strong> Loại bỏ các chi tiết phức tạp không cần thiết?<br>
                - <strong>R - Reverse / Rearrange:</strong> Đảo ngược trật tự hoặc cấu trúc sắp xếp?
              </div>
            </div>
          `
        },
        {
          title: "2. Phương tiện hỗ trợ và Công cụ đánh giá",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Bảng đánh giá PMI &amp; Ma trận Rubric:</strong>
                - <strong>PMI:</strong> Đánh giá một phương án dựa trên điểm Cộng (Plus), điểm Trừ (Minus) và điểm Thú vị (Interesting).<br>
                - <strong>Rubric:</strong> Bảng ma trận chấm điểm phân cấp theo từng tiêu chí kĩ thuật định lượng cụ thể.
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Phương tiện kĩ thuật hỗ trợ:</strong>
                Phần mềm CAD 2D/3D (AutoCAD, SolidWorks, Tinkercad), phần mềm mô phỏng động học/khí động học, máy in 3D tạo mẫu nhanh, máy cắt laser CNC, dụng cụ đo đạc kiểm tra cơ khí (thước kẹp panme, đồng hồ so).
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Nguyên tắc quan trọng nhất bắt buộc phải tuân thủ trong giai đoạn Động não (Brainstorming) tìm ý tưởng là gì?",
          options: ["Tuyệt đối không chỉ trích, phán xét hoặc gạt bỏ bất kì ý tưởng nào của thành viên trong nhóm", "Phải lập tức bác bỏ những ý tưởng kì lạ khác người", "Chỉ người trưởng nhóm mới được phát biểu", "Chỉ chọn đúng 1 ý tưởng đầu tiên"],
          ans: 0,
          exp: "Brainstorming tập trung vào số lượng ý tưởng; phán xét sớm sẽ bóp nghẹt sự sáng tạo và làm các thành viên e ngại đóng góp."
        },
        {
          q: "Trong kĩ thuật SCAMPER, chữ cái 'C' đại diện cho hành động sáng tạo nào?",
          options: ["Combine (Kết hợp các bộ phận, chức năng lại với nhau)", "Cancel (Hủy bỏ dự án)", "Copy (Sao chép y hệt)", "Cry (Khóc than)"],
          ans: 0,
          exp: "Combine (kết hợp) kích thích tư duy ghép nối các công nghệ hoặc tính năng độc lập lại để tạo ra sản phẩm tích hợp tiện ích mới."
        }
      ]
    },
    {
      id: "bai-22",
      number: "Bài 22",
      title: "Dự án: Thiết kế sản phẩm đơn giản (Thiết bị lọc nước)",
      badge: "Dự án STEM thực chiến",
      icon: "fa-solid fa-filter-circle-dollar",
      overview: "Thực hành trọn vẹn quy trình thiết kế kĩ thuật qua Dự án STEM chế tạo Cột lọc nước sinh hoạt đơn giản từ vật liệu lọc nhiều tầng, kiểm tra đánh giá chỉ số nước và an toàn sức khỏe.",
      sections: [
        {
          title: "1. Nhiệm vụ và Cơ sở khoa học của các tầng lọc",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Vận dụng kiến thức khoa học tự nhiên và kĩ thuật để thiết kế, chế tạo một thiết bị lọc nước mini xử lí nguồn nước ô nhiễm đục (nước suối, nước ao hồ, nước giếng khoan) thành nước sinh hoạt trong suốt:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Phương pháp cơ học:</strong>
                - <em>Lớp sỏi cuội to &amp; sỏi nhỏ:</em> Giữ lại rác thô, cành lá, sinh vật thủy sinh.<br>
                - <em>Lớp cát thạch anh mịn:</em> Lọc giữ bùn đất, phù sa lơ lửng làm nước trong vắt.<br>
                - <em>Lớp bông gòn / vải lọc:</em> Ngăn chặn bụi mịn và giữ các hạt vật liệu lọc không bị lọt xuống dưới.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 block mb-1">Phương pháp hóa – lí học:</strong>
                - <em>Than hoạt tính (Activated Carbon):</em> Có diện tích bề mặt tiếp xúc khổng lồ, cấu trúc vi xốp hấp phụ màu, mùi tanh hôi, độc tố hữu cơ và dư lượng thuốc trừ sâu.<br>
                - <em>Hạt mangan / cát mangan:</em> Oxy hóa và khử kết tủa kim loại nặng (sắt Fe, mangan Mn).<br>
                - <em>Hạt nhựa trao đổi ion (Cation):</em> Làm mềm nước cứng (loại bỏ ion Ca²⁺, Mg²⁺).
              </div>
            </div>
          `
        },
        {
          title: "2. Quy trình chế tạo nguyên mẫu và Thử nghiệm đánh giá",
          content: `
            <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
              <div><strong>Bước 1 - Lắp ráp cột lọc:</strong> Dùng vỏ bình nhựa hình trụ; bố trí các lớp vật liệu lọc theo thứ tự từ dưới lên trên: Bông gòn → Lưới lọc → Sỏi nhỏ → Than hoạt tính → Cát mịn → Sỏi to trên cùng.</div>
              <div><strong>Bước 2 - Thử nghiệm dòng chảy:</strong> Đổ nước đục mẫu vào miệng cột lọc; đo tốc độ dòng chảy (lưu lượng mL/phút); quan sát độ trong suốt của nước đầu ra.</div>
              <div><strong>Bước 3 - Đo đạc chỉ số bằng thiết bị:</strong> Dùng bút đo TDS (tổng chất rắn hòa tan), đo pH và độ dẫn điện trước và sau khi lọc để đánh giá định lượng hiệu quả xử lí của cột lọc.</div>
              <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200">
                <strong>CẢNH BÁO AN TOÀN QUAN TRỌNG TRONG SGK:</strong> Nước sau khi lọc qua mô hình tự chế dù có trong và hết mùi tanh cũng <strong>tuyệt đối không được uống trực tiếp ngay</strong>; vì thiết bị lọc cơ học đơn giản chưa thể tiêu diệt được vi khuẩn, virus siêu vi (muốn uống phải đun sôi hoặc lọc qua màng thẩm thấu ngược RO/chiếu tia cực tím UV và được kiểm nghiệm theo quy chuẩn QCVN của Bộ Y tế).
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Trong cột lọc nước đa tầng, lớp vật liệu 'Than hoạt tính' đóng vai trò then chốt gì?",
          options: ["Hấp phụ màu, khử mùi tanh hôi, clo dư và các chất hữu cơ độc hại", "Làm nước có vị ngọt như đường", "Lọc rác to như cành cây", "Làm cho nước đông đặc thành đá"],
          ans: 0,
          exp: "Than hoạt tính có cấu trúc xốp rỗng hàng triệu lỗ vi mô, có khả năng hấp phụ mạnh mẽ các phân tử mùi, màu và độc tố hòa tan."
        },
        {
          q: "Theo cảnh báo an toàn bắt buộc trong SGK Công nghệ 10, nước lọc qua mô hình thiết bị lọc tự chế tại lớp học:",
          options: ["Tuyệt đối không được uống trực tiếp vì chưa loại bỏ hoàn toàn vi khuẩn, virus gây bệnh", "Có thể uống thoải mái không cần đun sôi", "Sạch hơn nước khoáng đóng chai", "Chỉ dùng để tưới cây chứ không được chạm tay vào"],
          ans: 0,
          exp: "Hệ thống lọc vật liệu tự chế chỉ làm trong nước cơ học; các vi khuẩn gây bệnh đường ruột chỉ bị tiêu diệt khi đun sôi hoặc qua màng lọc RO/tia UV."
        }
      ]
    }
  ]
};

module.exports = { chapter3 };
