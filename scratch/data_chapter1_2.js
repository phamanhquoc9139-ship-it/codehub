// CHƯƠNG I (Bài 1, 2) & CHƯƠNG II (Bài 3, 4, 5, 6)

const chapters1_2 = [
  {
    chapterId: "chuong-1",
    chapterNumber: "Chương I",
    chapterTitle: "Giới thiệu chung về trồng trọt",
    badge: "Bài 1 – Bài 2",
    themeColor: "emerald",
    icon: "fa-solid fa-seedling",
    lessons: [
      {
        id: "bai-1",
        number: "Bài 1",
        title: "Giới thiệu về trồng trọt",
        badge: "Tổng quan & Định hướng",
        icon: "fa-solid fa-wheat-awn",
        overview: "Trồng trọt là ngành sản xuất nền tảng cung cấp lương thực, thực phẩm thiết yếu, nguyên liệu cho công nghiệp chế biến và thức ăn chăn nuôi, đồng thời đóng góp tỷ trọng xuất khẩu chủ lực trong nền kinh tế Việt Nam.",
        sections: [
          {
            title: "1. Bốn vai trò cốt lõi của trồng trọt",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800">
                  <div class="flex items-center gap-2 mb-2 font-bold text-emerald-800 dark:text-emerald-300">
                    <i class="fa-solid fa-shield-halved text-emerald-600"></i>
                    <span>Bảo đảm an ninh lương thực quốc gia</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Trồng trọt cung cấp nguồn tinh bột, chất đạm và vitamin thiết yếu (lúa gạo, ngô, khoai tây, sắn, rau đậu). An ninh lương thực bảo đảm nguồn cung dồi dào tại chỗ, hạn chế tối đa nguy cơ thiếu hụt, nạn đói và xóa bỏ sự phụ thuộc vào nhập khẩu lương thực nước ngoài.
                  </p>
                </div>
                <div class="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800">
                  <div class="flex items-center gap-2 mb-2 font-bold text-teal-800 dark:text-teal-300">
                    <i class="fa-solid fa-industry text-teal-600"></i>
                    <span>Thúc đẩy chăn nuôi & công nghiệp</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Cung cấp nguyên liệu chế biến thức ăn chăn nuôi gia súc, gia cầm (ngô, đậu tương, sắn lát) và nguyên liệu cho công nghiệp nhẹ, đặc biệt là công nghiệp chế biến thực phẩm, đồ uống, dệt may (bông sợi, mía đường, chè, cà phê). Chế biến sâu làm tăng giá trị thặng dư và khả năng cạnh tranh quốc tế.
                  </p>
                </div>
                <div class="p-4 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200/60 dark:border-cyan-800">
                  <div class="flex items-center gap-2 mb-2 font-bold text-cyan-800 dark:text-cyan-300">
                    <i class="fa-solid fa-ship text-cyan-600"></i>
                    <span>Tham gia xuất khẩu thu ngoại tệ</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Các mặt hàng nông sản xuất khẩu chủ lực của Việt Nam bao gồm: gạo thơm chất lượng cao, cà phê Robusta (đứng thứ 2 thế giới), hạt điều, hồ tiêu (đứng đầu thế giới), chè, cao su và các loại trái cây nhiệt đới (thanh long, sầu riêng, chuối, xoài), mang về hàng chục tỉ USD mỗi năm.
                  </p>
                </div>
                <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800">
                  <div class="flex items-center gap-2 mb-2 font-bold text-blue-800 dark:text-blue-300">
                    <i class="fa-solid fa-hand-holding-heart text-blue-600"></i>
                    <span>Tạo sinh kế, dược liệu & cảnh quan xanh</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tạo việc làm và thu nhập ổn định cho hàng chục triệu lao động nông thôn, khai thác và bảo tồn nguồn dược liệu quý (quế, hồi, thảo quả, sâm Ngọc Linh), đồng thời phủ xanh đất trống đồi trọc, điều hòa khí hậu và phát triển du lịch sinh thái nông nghiệp.
                  </p>
                </div>
              </div>
            `
          },
          {
            title: "2. Triển vọng và xu thế ứng dụng công nghệ cao (Nông nghiệp 4.0)",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Ứng dụng công nghệ cao là xu hướng tất yếu của nông nghiệp hiện đại nhằm tiết kiệm vật tư đầu vào, tối ưu năng suất và chất lượng, giảm lệ thuộc thời tiết, kiểm soát chi phí và hướng tới phát triển bền vững. Nông nghiệp 4.0 mở rộng quản lí số hóa bằng dữ liệu lớn (Big Data), cảm biến IoT, trí tuệ nhân tạo (AI) và tự động hóa toàn diện.
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">1</span>
                  <div><strong>Cơ giới hóa toàn diện:</strong> Tự động hóa khâu làm đất, gieo cấy hạt giống, chăm sóc, phun thuốc bằng thiết bị bay không người lái (drone) và thu hoạch bằng máy đập liên hợp.</div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">2</span>
                  <div><strong>Canh tác không dùng đất:</strong> Thủy canh (Hydroponics), khí canh (Aeroponics) giúp trồng cây ở vùng đất cằn cỗi, sa mạc hóa, hải đảo hoặc đô thị.</div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">3</span>
                  <div><strong>Hệ thống tưới tự động tiết kiệm:</strong> Tưới nhỏ giọt, phun sương, phun mưa điều khiển qua vi mạch cảm biến độ ẩm đất, tiết kiệm từ 30% đến 60% lượng nước ngọt.</div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">4</span>
                  <div><strong>Mô hình thế giới tiêu biểu:</strong> Nhà máy trồng rau nhiều tầng dùng đèn LED chuyên dụng ở Miyagi (Nhật Bản); Vườn hoa công nghệ cao Keukenhof (Hà Lan); Trang trại tự động cảm biến ở Mỹ; Vườn hoa kỳ quan Dubai dùng tưới nhỏ giọt và tái chế nước ngầm sa mạc.</div>
                </div>
              </div>
            `
          },
          {
            title: "3. Nghề nghiệp trong lĩnh vực trồng trọt",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Yêu cầu đối với người lao động: thể lực tốt, đức tính cần cù, trách nhiệm, am hiểu kiến thức sinh học nông nghiệp, kĩ năng vận hành máy móc thiết bị, tuân thủ an toàn lao động và bảo vệ môi trường sinh thái.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1"><i class="fa-solid fa-user-graduate mr-1"></i> Kĩ sư trồng trọt:</span>
                  Quy hoạch vùng trồng, xây dựng quy trình canh tác, điều phối mùa vụ và quản lý trang trại sản xuất.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1"><i class="fa-solid fa-dna mr-1"></i> Kĩ sư chọn tạo giống:</span>
                  Nghiên cứu lai tạo, chọn lọc, chuyển gene, nuôi cấy mô để tạo các giống cây năng suất cao, kháng bệnh.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1"><i class="fa-solid fa-shield-virus mr-1"></i> Kĩ sư bảo vệ thực vật:</span>
                  Chẩn đoán dịch hại, dự tính dự báo bệnh cây, ứng dụng phòng trừ sinh học và quản lý dịch hại tổng hợp IPM.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1"><i class="fa-solid fa-laptop-code mr-1"></i> Kĩ thuật viên nông nghiệp công nghệ cao:</span>
                  Vận hành hệ thống nhà kính thông minh, điều khiển vi khí hậu, lập trình trạm châm phân tự động và drone nông nghiệp.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm nông sản xuất khẩu chủ lực mang lại giá trị kinh tế hàng tỉ USD của Việt Nam là:",
            options: ["Gạo, cà phê Robusta, hạt điều, hồ tiêu, rau quả tươi", "Lúa mì, lúa mạch, quả oliu, củ cải đường", "Yến mạch, quả việt quất, đậu gà", "Cây lá kim, cây cọ dầu, quả mâm xôi"],
            ans: 0,
            exp: "Việt Nam có thế mạnh khí hậu nhiệt đới gió mùa, đứng hàng đầu thế giới về gạo, hồ tiêu, cà phê Robusta và hạt điều."
          },
          {
            q: "Đặc điểm mang tính bản chất của nền Nông nghiệp 4.0 trong trồng trọt là gì?",
            options: ["Tích hợp dữ liệu số, cảm biến IoT, AI và tự động hóa toàn diện quy trình", "Tăng cường tối đa việc sử dụng lao động thủ công truyền thống", "Chỉ tập trung vào mở rộng diện tích mà không cần cải tiến công nghệ", "Bón thật nhiều phân hóa học để đạt năng suất kỷ lục bất chấp môi trường"],
            ans: 0,
            exp: "Nông nghiệp 4.0 dựa trên nền tảng kỹ thuật số, dữ liệu thông minh và tự động hóa để tối ưu hóa tài nguyên."
          }
        ]
      },
      {
        id: "bai-2",
        number: "Bài 2",
        title: "Cây trồng và các yếu tố chính trong trồng trọt",
        badge: "Sinh học & Môi trường",
        icon: "fa-solid fa-tree",
        overview: "Năng suất và phẩm chất cây trồng là kết quả tác động qua lại biện chứng giữa kiểu gene giống cây với 6 yếu tố ngoại cảnh: ánh sáng, nhiệt độ, nước, đất, dinh dưỡng khoáng và kĩ thuật canh tác.",
        sections: [
          {
            title: "1. Phân loại cây trồng theo các tiêu chí",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Theo nguồn gốc sinh thái khí hậu:</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    <li><strong>Cây ôn đới:</strong> Thích hợp mùa đông lạnh, hè mát; không chịu được nhiệt độ cao kéo dài (khoai tây, táo, lê, cải bắp, lúa mì).</li>
                    <li><strong>Cây nhiệt đới:</strong> Yêu cầu nhiệt độ cao, nóng ẩm quanh năm; không thích nghi với lạnh, băng giá hay sương muối (lúa nước, chuối, xoài, sắn, dừa).</li>
                    <li><strong>Cây á nhiệt đới:</strong> Thích hợp khí hậu trung gian nhiệt đới - ôn đới; thường cần một thời kì tích lũy nhiệt độ thấp để phân hóa mầm hoa (vải, nhãn, cam, quýt, chè).</li>
                  </ul>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Theo đặc tính sinh học & Mục đích sử dụng:</span>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                    - <em>Sinh vật học:</em> Cây hằng năm (vòng đời dưới 1 năm: lúa, ngô) vs Cây lâu năm (vòng đời nhiều năm: cà phê, cao su); Thân thảo vs Thân gỗ; Một lá mầm vs Hai lá mầm.<br>
                    - <em>Mục đích:</em> Cây lương thực, cây thực phẩm (rau, đậu), cây ăn quả, cây công nghiệp (lấy dầu, sợi, đường, đồ uống), cây dược liệu, cây hoa cảnh và cây lấy gỗ. Việc phân loại có tính tương đối vì một loài cây có thể dùng vào nhiều mục đích khác nhau.
                  </p>
                </div>
              </div>
            `
          },
          {
            title: "2. Bảy yếu tố chính chi phối quá trình trồng trọt",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">1. Giống cây trồng:</strong>
                  Quyết định tiềm năng năng suất tối đa, phẩm chất thương phẩm, khả năng chống chịu sâu bệnh và điều kiện ngoại cảnh bất lợi (hạn, mặn, rét).
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">2. Ánh sáng:</strong>
                  Cung cấp năng lượng quang hợp; cường độ chiếu sáng và quang chu kì (độ dài ngày) chi phối trực tiếp sinh trưởng dinh dưỡng, ra hoa, đậu quả và tích lũy chất khô.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">3. Nhiệt độ:</strong>
                  Khoảng thích hợp cho phần lớn cây trồng là <strong>15–40 °C</strong>. Nhiệt độ tác động trực tiếp lên tốc độ hoạt động của enzyme quang hợp, hô hấp, thoát hơi nước và sự hút nước của rễ.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">4. Nước và độ ẩm:</strong>
                  Nước tham gia phản ứng quang hợp, hòa tan và vận chuyển dinh dưỡng khoáng, duy trì sức trương tế bào và điều hòa thân nhiệt qua thoát hơi nước.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">5. Đất trồng:</strong>
                  Điểm tựa cơ học giúp cây đứng vững, môi trường dự trữ và cung cấp nước, oxygen cho hô hấp rễ và kho dinh dưỡng khoáng.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">6. Dinh dưỡng khoáng:</strong>
                  Cần cân đối các nguyên tố đa lượng (N, P, K), trung lượng (Ca, Mg, S) và vi lượng (Fe, Cu, Zn, B, Mo). Thiếu hay thừa đều dẫn tới rối loạn sinh lý.
                </div>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs">
                <strong>7. Kĩ thuật canh tác:</strong> Làm đất, bón phân cân đối, tưới tiêu, luân canh, bố trí thời vụ và mật độ gieo trồng hợp lí. Các yếu tố tác động qua lại mật thiết: giống tốt chỉ phát huy tối đa khi được nuôi dưỡng trong môi trường đất, nước, ánh sáng và chế độ chăm sóc tối ưu.
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm cây trồng nào sau đây thường bắt buộc phải trải qua một thời kì nhiệt độ thấp (chilling) để phân hóa mầm hoa?",
            options: ["Cây á nhiệt đới (vải, nhãn, cam, chè)", "Cây nhiệt đới (chuối, thanh long, sắn)", "Cây ngập mặn (đước, bần, vẹt)", "Cây thủy sinh (hoa sen, súng)"],
            ans: 0,
            exp: "Cây á nhiệt đới cần trải qua mùa đông rét nhẹ để kích thích mầm hoa phân hóa, nếu mùa đông ấm quá cây sẽ ra lộc non thay vì ra hoa."
          },
          {
            q: "Nhiệt độ môi trường thuận lợi nhất cho đại đa số các loài cây trồng nông nghiệp sinh trưởng và quang hợp là:",
            options: ["15 °C đến 40 °C", "0 °C đến 10 °C", "45 °C đến 60 °C", "-5 °C đến 15 °C"],
            ans: 0,
            exp: "Khoảng nhiệt độ từ 15°C đến 40°C đảm bảo hoạt tính tối ưu của bộ enzyme quang hợp và giữ cho màng tế bào thực vật ổn định."
          }
        ]
      }
    ]
  },
  {
    chapterId: "chuong-2",
    chapterNumber: "Chương II",
    chapterTitle: "Đất trồng",
    badge: "Bài 3 – Bài 6",
    themeColor: "amber",
    icon: "fa-solid fa-mountain",
    lessons: [
      {
        id: "bai-3",
        number: "Bài 3",
        title: "Giới thiệu về đất trồng",
        badge: "Thành phần & Keo đất",
        icon: "fa-solid fa-layer-group",
        overview: "Đất trồng là lớp bề mặt tơi xốp của vỏ Trái Đất nơi thực vật sinh sống. Đất gồm 4 thành phần: phần rắn (vô cơ và hữu cơ), dung dịch đất, không khí đất và sinh vật đất.",
        sections: [
          {
            title: "1. Khái niệm, thành phần và vai trò của đất trồng",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Đất trồng hình thành từ đá mẹ dưới sự tác động tổng hợp của khí hậu, địa hình, sinh vật, thời gian và hoạt động canh tác của con người.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-amber-50/70 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1">1. Phần rắn:</strong>
                  Gồm <strong>chất vô cơ (chiếm ~95% phần rắn)</strong> cung cấp khoáng chất và <strong>chất hữu cơ (< 5% phần rắn)</strong> hình thành từ xác sinh vật phân giải tạo mùn. Phần rắn giúp cây đứng vững và dự trữ dinh dưỡng.
                </div>
                <div class="p-3 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-800 dark:text-blue-300 block mb-1">2. Dung dịch đất:</strong>
                  Nước và các chất dinh dưỡng khoáng hòa tan; là môi trường trực tiếp để rễ cây hút chất dinh dưỡng qua lông hút và diễn ra các phản ứng sinh hóa của đất.
                </div>
                <div class="p-3 bg-teal-50/70 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
                  <strong class="text-teal-800 dark:text-teal-300 block mb-1">3. Không khí trong đất:</strong>
                  Nằm trong các khe hở giữa các hạt đất; chứa N2, O2, CO2 và hơi nước. O2 trong đất là điều kiện bắt buộc để lông hút của rễ hô hấp hiếu khí tạo năng lượng hút khoáng.
                </div>
                <div class="p-3 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">4. Sinh vật đất:</strong>
                  Giun đất, vi sinh vật, nấm, tảo; đóng vai trò phân giải tàn dư thực vật, tạo mùn, cố định đạm và chuyển hóa các hợp chất khoáng khó tiêu thành dạng dễ tiêu.
                </div>
              </div>
            `
          },
          {
            title: "2. Cấu tạo và khả năng hấp phụ của keo đất",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                <strong>Keo đất</strong> là những hạt đất có kích thước siêu nhỏ (cỡ khoảng 1 μm), không hòa tan mà lơ lửng trong nước:
              </p>
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Cấu tạo hạt keo:</strong> Gồm <em>nhân keo</em> ở trong cùng và <em>lớp điện kép</em> bao quanh bên ngoài (gồm lớp ion quyết định điện thế và lớp ion bù trừ).</div>
                <div><strong>Phân loại:</strong> Đa số keo đất trong tự nhiên là <em>keo âm</em> (lớp ngoài mang điện tích âm, hấp phụ các cation kim loại dinh dưỡng như K⁺, Ca²⁺, Mg²⁺, NH₄⁺). Một số ít là <em>keo dương</em>.</div>
                <div><strong>Khả năng hấp phụ:</strong> Lớp ion khuếch tán ngoài cùng có thể trao đổi tự do với các ion trong dung dịch đất. Đây chính là cơ sở vật lý - hóa học giúp đất giữ lại phân bón không bị nước mưa rửa trôi và cung cấp dần cho rễ cây.</div>
              </div>
            `
          },
          {
            title: "3. Thành phần cơ giới và phản ứng của đất",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-600 block mb-1">Thành phần cơ giới (Cát, Limon, Sét):</strong>
                  - <strong>Hạt cát (0,02 – 2 mm):</strong> Hạt thô, thoáng khí, thoát nước cực nhanh, giữ phân kém.<br>
                  - <strong>Hạt limon / bột (0,002 – 0,02 mm):</strong> Cỡ hạt trung bình.<br>
                  - <strong>Hạt sét (< 0,002 mm):</strong> Rất mịn, giữ nước và dinh dưỡng tốt nhưng dễ úng ngập, nứt nẻ khi khô.<br>
                  - <em>Đất thịt:</em> Tỉ lệ cát, limon và sét cân đối, thích hợp trồng nhiều loại cây nhất.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-600 block mb-1">Phản ứng của dung dịch đất (pH):</strong>
                  - <strong>Đất chua (Acid):</strong> Nồng độ H⁺ > OH⁻, <strong>pH < 6,6</strong>; ức chế vi sinh vật có ích, gây nghẹt rễ, giải phóng ion độc Al³⁺, Fe³⁺.<br>
                  - <strong>Đất trung tính:</strong> <strong>pH 6,8 – 7,5</strong>; tối ưu nhất cho đại đa số cây trồng.<br>
                  - <strong>Đất kiềm (Alkaline):</strong> Nồng độ OH⁻ > H⁺, <strong>pH > 7,5</strong>; thường gặp ở vùng khô hạn hoặc đất nhiễm mặn kiềm.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Chất vô cơ và chất hữu cơ trong phần rắn của đất trồng thông thường chiếm tỉ lệ lần lượt là:",
            options: ["Khoảng 95% chất vô cơ và dưới 5% chất hữu cơ", "Khoảng 50% chất vô cơ và 50% chất hữu cơ", "Dưới 5% chất vô cơ và 95% chất hữu cơ", "Khoảng 70% chất vô cơ và 30% chất hữu cơ"],
            ans: 0,
            exp: "Theo số liệu chuẩn SGK, chất vô cơ có nguồn gốc từ đá mẹ phong hóa chiếm tới ~95% phần rắn, còn chất hữu cơ mùn thường chỉ chiếm dưới 5%."
          },
          {
            q: "Keo đất có vai trò đặc biệt quan trọng trong đất trồng vì:",
            options: ["Có khả năng hấp phụ và trao đổi ion dinh dưỡng, giữ phân bón không bị rửa trôi", "Hòa tan hoàn toàn trong nước để tạo thành chất lỏng", "Tạo ra các lỗ rỗng lớn làm mất hết nước trong đất", "Tiêu diệt toàn bộ các vi sinh vật sống trong đất"],
            ans: 0,
            exp: "Nhờ lớp điện kép tích điện, keo đất hấp phụ các ion dinh dưỡng (K+, Ca2+, NH4+...) trên bề mặt và trao đổi với dung dịch đất khi cây cần."
          }
        ]
      },
      {
        id: "bai-4",
        number: "Bài 4",
        title: "Sử dụng, cải tạo và bảo vệ đất trồng",
        badge: "Thổ nhưỡng & Canh tác",
        icon: "fa-solid fa-mountain-sun",
        overview: "Biện pháp khoa học nhằm sử dụng hợp lí, thau chua rửa mặn, chống thoái hóa và nâng cao độ phì nhiêu cho các nhóm đất đặc thù: đất chua, đất mặn và đất xám bạc màu.",
        sections: [
          {
            title: "1. Nguyên tắc sử dụng đất hợp lí và bền vững",
            content: `
              <ul class="list-disc list-inside space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li>Bố trí cây trồng phù hợp với đặc tính thổ nhưỡng và điều kiện sinh thái vùng.</li>
                <li>Kết hợp khai thác với bồi dưỡng cải tạo đất; bón phân cân đối N-P-K kết hợp phân hữu cơ và vi sinh.</li>
                <li>Luân canh cây trồng (đặc biệt luân canh lúa nước với cây họ Đậu/cây phân xanh) để cắt nguồn sâu bệnh và cố định đạm sinh học.</li>
                <li>Áp dụng kĩ thuật canh tác bền vững trên đất dốc: làm ruộng bậc thang, trồng băng cây chắn gió/chắn sóng, phủ bạt sinh học để hạn chế xói mòn và rửa trôi tầng mặt.</li>
              </ul>
            `
          },
          {
            title: "2. Cải tạo và sử dụng các loại đất đặc thù",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                  <strong class="text-rose-800 dark:text-rose-300 block mb-1">A. Đất chua (pH < 6,6):</strong>
                  - <em>Đặc điểm:</em> Nồng độ H⁺ cao, nghèo cation kiềm trao đổi, giải phóng ion Al³⁺ và Fe³⁺ tự do gây độc cho rễ.<br>
                  - <em>Biện pháp:</em> <strong>Bón vôi nông nghiệp (CaCO3, CaO)</strong> để trung hòa acid tự do, đẩy H⁺ khỏi keo đất; xây dựng mương tiêu để thau chua; bón phân lân nung chảy (có tính kiềm); trồng cây phân xanh che phủ đất.
                </div>
                <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-800 dark:text-blue-300 block mb-1">B. Đất mặn (Hàm lượng muối hòa tan > 2,56‰):</strong>
                  - <em>Nguyên nhân:</em> Xâm nhập mặn do triều cường, nước biển dâng, vỡ đê biển hoặc nước ngầm mặn mao dẫn lên bề mặt mùa khô.<br>
                  - <em>Biện pháp:</em> Xây dựng đê biển, trồng rừng ngập mặn chắn sóng; đào hệ thống kênh mương tưới tiêu để <strong>thau rửa mặn</strong>; bón vôi kết hợp rửa mặn (đẩy ion Na⁺ ra khỏi keo đất); ưu tiên bón phân hữu cơ; <em>tránh dùng phân bón chứa gốc chloride (KCl) hay sulfate</em>; cày không lật để hạn chế muối mao dẫn lên mặt đất.
                </div>
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1">C. Đất xám bạc màu:</strong>
                  - <em>Đặc điểm:</em> Tầng canh tác rất mỏng, thành phần cơ giới nhẹ (nhiều cát), nghèo mùn và dinh dưỡng, chua, vi sinh vật có ích rất ít do rửa trôi mạnh trên địa hình dốc thoải.<br>
                  - <em>Biện pháp:</em> Bón phân hữu cơ hoai mục với khối lượng lớn, bón vôi cải tạo pH; cày sâu dần từng bước; luân canh, xen canh cây họ Đậu (lạc, đậu tương) để phục hồi đạm và tăng độ phì.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Biện pháp hàng đầu để khử chua, nâng cao độ pH cho đất chua là:",
            options: ["Bón vôi nông nghiệp kết hợp xây mương thoát nước thau chua", "Bón thật nhiều phân đạm ammonium sulfate gây chua", "Tưới nước mặn để trung hòa", "Để đất phơi khô dưới nắng gắt suốt nhiều tháng"],
            ans: 0,
            exp: "Vôi nông nghiệp cung cấp Ca2+ đẩy ion H+ và Al3+ ra khỏi keo đất, làm giảm độ chua và kết tủa các ion độc."
          },
          {
            q: "Ngưỡng hàm lượng muối hòa tan trong đất để phân loại đất mặn theo SGK Công nghệ 10 là:",
            options: ["Trên 2,56 ‰", "Trên 10,5 ‰", "Dưới 0,5 ‰", "Từ 1,0 ‰ đến 1,5 ‰"],
            ans: 0,
            exp: "Theo chuẩn kiến thức SGK Công nghệ 10, đất có hàm lượng muối hòa tan lớn hơn 2,56‰ được xác định là đất mặn."
          }
        ]
      },
      {
        id: "bai-5",
        number: "Bài 5",
        title: "Giá thể trồng cây",
        badge: "Công nghệ vật liệu trồng trọt",
        icon: "fa-solid fa-seedling",
        overview: "Giá thể là vật liệu giữ nước, tạo độ thoáng khí nâng đỡ bộ rễ cây thay thế đất truyền thống, bao gồm giá thể hữu cơ tự nhiên (than bùn, mùn cưa, trấu hun, xơ dừa) và giá thể trơ cứng (perlite, gốm).",
        sections: [
          {
            title: "1. Khái niệm và nhóm giá thể hữu cơ tự nhiên",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Giá thể trồng cây giúp chủ động kiểm soát dinh dưỡng, sạch mầm bệnh, tơi xốp, hỗ trợ rễ phát triển tối đa trong nông nghiệp đô thị và nhà màng:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">1. Than bùn (Peat moss):</strong>
                  Xác thực vật bán phân hủy trong điều kiện yếm khí đầm lầy; xốp, nhẹ, giữ ẩm và trao đổi cation rất cao. Bản thân nghèo khoáng nên cần phối trộn thêm dinh dưỡng.<br>
                  <em>Quy trình:</em> Khai thác $\\rightarrow$ Phơi khô, nghiền $\\rightarrow$ Phối trộn vôi/chế phẩm vi sinh $\\rightarrow$ Ủ, đóng gói.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">2. Mùn cưa:</strong>
                  Phụ phẩm chế biến gỗ; giàu cellulose, giữ ẩm tốt nhưng độ thoáng thấp.<br>
                  <em>Quy trình:</em> Tập kết $\\rightarrow$ Phơi, đảo $\\rightarrow$ Ủ với chế phẩm nấm phân giải cellulose (Trichoderma) để hoai mục và diệt nấm bệnh $\\rightarrow$ Đóng gói.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">3. Trấu hun (Biochar trấu):</strong>
                  Vỏ trấu đốt yếm khí ở nhiệt độ cao; tơi xốp, vô trùng, giàu Kali (K), giữ nước tốt. Nhược điểm: hấp thụ nhiệt mạnh khi trời nắng gắt.<br>
                  <em>Quy trình:</em> Thu trấu $\\rightarrow$ Hun yếm khí $\\rightarrow$ Làm nguội, sàng tạp $\\rightarrow$ Phối trộn phụ gia $\\rightarrow$ Đóng gói.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">4. Mụn xơ dừa (Cocopeat):</strong>
                  Nhẹ, thoáng khí, giữ ẩm xuất sắc. Chứa hợp chất chát <em>tannin và lignin</em> ức chế rễ hút khoáng nên bắt buộc phải xử lí trước khi dùng.<br>
                  <em>Quy trình chuẩn:</em> Vỏ dừa nghiền $\\rightarrow$ <strong>Ngâm nước sạch 2–3 ngày</strong> $\\rightarrow$ <strong>Ngâm nước vôi (2 kg vôi/100 L nước) trong 5–7 ngày</strong> để khử chát tannin $\\rightarrow$ Rửa sạch lại bằng nước ngọt $\\rightarrow$ Ủ vi sinh, đóng gói.
                </div>
              </div>
            `
          },
          {
            title: "2. Nhóm giá thể trơ cứng nhân tạo",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 dark:text-teal-400 block mb-1">1. Đá trân châu Perlite:</strong>
                  Đá nham thạch perlite tự nhiên được nghiền nhỏ (0,2–1 mm) rồi <strong>nung phồng ở 800–850 °C</strong>. Hạt màu trắng, siêu nhẹ, cấu trúc xốp rỗng tổ ong, trơ hóa học, giữ nước và tạo độ thoáng khí tuyệt vời cho rễ lan, hoa kiểng và rau mầm.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 dark:text-teal-400 block mb-1">2. Viên đất nung / Gốm (LECA):</strong>
                  Đất sét hoặc phù sa nghiền mịn, vo viên tròn và <strong>nung ở 1 200–1 300 °C</strong>. Viên gốm cứng bền, trơ, không mục nát, tái sử dụng được nhiều vụ, vô trùng hoàn toàn. Nhược điểm: giữ nước và phân bón kém hơn xơ dừa, nguyên liệu đất sét không tái tạo được.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tại sao mụn xơ dừa thô bắt buộc phải ngâm nước vôi (2 kg vôi/100 L nước) từ 5–7 ngày trước khi đem trồng cây?",
            options: ["Để tẩy rửa và vô hiệu hóa chất chát tannin và lignin gây nghẹt rễ", "Để làm cho xơ dừa có màu đen đẹp mắt", "Để diệt toàn bộ hạt giống cỏ dại có trong dừa", "Để biến xơ dừa thành phân vô cơ tan nhanh"],
            ans: 0,
            exp: "Tannin và lignin trong vỏ dừa thô ngăn cản quá trình hút nước và hấp thu dinh dưỡng của rễ non, do đó phải dùng nước vôi để kết tủa và rửa trôi."
          },
          {
            q: "Nhiệt độ nung đá khoáng Perlite để tạo thành giá thể trân châu siêu nhẹ xốp là:",
            options: ["800 °C – 850 °C", "200 °C – 300 °C", "1 500 °C – 2 000 °C", "50 °C – 100 °C"],
            ans: 0,
            exp: "Ở nhiệt độ 800 - 850°C, nước trong đá perlite hóa hơi làm hạt đá trương nở phồng gấp 10-20 lần thể tích ban đầu."
          }
        ]
      },
      {
        id: "bai-6",
        number: "Bài 6",
        title: "Thực hành: Xác định độ chua và độ mặn của đất",
        badge: "Thực hành phòng lab",
        icon: "fa-solid fa-flask-vial",
        overview: "Quy trình thực hành chuẩn phòng thí nghiệm đo độ chua bằng máy đo pH (pH nước và pH KCl trao đổi) và xác định độ mặn của đất qua độ dẫn điện EC.",
        sections: [
          {
            title: "1. Quy trình A: Xác định độ chua của đất bằng máy đo pH",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Bước 1 - Chuẩn bị mẫu:</strong> Lấy mẫu đất đại diện ngoài ruộng, để khô tự nhiên trong bóng râm, nghiền nhỏ bằng cối chày sứ, rây qua rây mắt 1 mm.</div>
                <div><strong>Bước 2 - Cân mẫu:</strong> Cân chính xác hai mẫu đất, mỗi mẫu 20 g cho vào hai bình tam giác dung tích 100 mL (đánh số Bình 1 và Bình 2).</div>
                <div><strong>Bước 3 - Thêm dung môi:</strong> Thêm 50 mL nước cất vào Bình 1 (đo pH nước); thêm 50 mL dung dịch KCl 1N vào Bình 2 (đo pH trao đổi).</div>
                <div><strong>Bước 4 - Lắc và đo:</strong> Lắc đều trên máy lắc hoặc bằng tay liên tục 15–20 phút. Nhúng điện cực của máy đo pH ngập khoảng 2 cm vào dịch huyền phù, chờ khoảng 30 giây khi số hiển thị ổn định thì đọc và ghi kết quả.</div>
                <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300">
                  <em>Lưu ý khoa học:</em> Giá trị pH đo trong dung dịch KCl luôn luôn nhỏ hơn pH đo trong nước cất do ion K⁺ trong muối KCl đã đẩy các ion H⁺ đang bám chặt trên bề mặt keo đất ra ngoài dung dịch.
                </div>
              </div>
            `
          },
          {
            title: "2. Quy trình B: Xác định độ mặn bằng bút đo độ dẫn điện EC",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Bước 1:</strong> Cân 20 g đất mẫu đã chuẩn bị (khô, nghiền, rây 1 mm) cho vào bình tam giác dung tích 250 mL.</div>
                <div><strong>Bước 2:</strong> Thêm 100 mL nước cất (tỉ lệ đất : nước = 1 : 5); lắc đều liên tục 15–20 phút.</div>
                <div><strong>Bước 3:</strong> Lọc dịch qua phễu có giấy lọc; nếu dịch lọc còn đục thì tiến hành lọc lại để tránh làm hỏng điện cực.</div>
                <div><strong>Bước 4:</strong> Bật bút đo EC, nhúng điện cực ngập sâu khoảng 2 cm vào dung dịch trong, chờ 30 giây cho chỉ số ổn định rồi đọc kết quả (đơn vị mS/cm hoặc dS/m). Đối chiếu bảng tiêu chuẩn để xếp loại đất (đất không mặn, mặn ít, mặn trung bình, mặn nhiều).</div>
              </div>
              <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs">
                <strong>Quy tắc an toàn phòng lab:</strong> Đeo găng tay, áo blouse và kính bảo hộ; tuyệt đối không nếm hoặc ngửi trực tiếp hóa chất; rửa sạch đầu điện cực máy đo bằng nước cất và lau khô bằng giấy mềm chuyên dụng sau mỗi lần đo.
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tại sao khi đo độ chua của cùng một mẫu đất, giá trị pH đo trong dung dịch KCl 1N luôn nhỏ hơn giá trị pH đo trong nước cất?",
            options: ["Vì ion K⁺ trong dung dịch KCl đẩy các ion H⁺ trao đổi trên bề mặt keo đất vào dung dịch", "Vì muối KCl có tính acid rất mạnh", "Vì máy đo pH bị sai lệch khi gặp dung dịch muối", "Vì nước cất làm tăng thêm ion H+ trong dung dịch"],
            ans: 0,
            exp: "Ion K+ có khả năng thế chỗ các cation H+ và Al3+ trên bề mặt keo đất, đẩy chúng vào dung dịch làm nồng độ H+ tăng lên, khiến pHKCl < pHH2O."
          },
          {
            q: "Để đo độ mặn của đất qua độ dẫn điện EC, tỉ lệ pha giữa khối lượng đất (g) và thể tích nước cất (mL) chuẩn theo SGK là:",
            options: ["20 g đất : 100 mL nước cất (tỉ lệ 1 : 5)", "20 g đất : 20 mL nước cất (tỉ lệ 1 : 1)", "100 g đất : 50 mL nước cất (tỉ lệ 2 : 1)", "10 g đất : 500 mL nước cất (tỉ lệ 1 : 50)"],
            ans: 0,
            exp: "Quy chuẩn đo EC nông nghiệp trong SGK dùng 20g mẫu đất khô rây 1mm pha trong 100mL nước cất (tỉ lệ 1:5)."
          }
        ]
      }
    ]
  }
];

module.exports = { chapters1_2 };
