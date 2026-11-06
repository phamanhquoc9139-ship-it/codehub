// Dữ liệu ĐỊA LÍ 10 (SGK Kết nối tri thức với cuộc sống) - PHẦN 1 & PHẦN 2 (Chương 1 - Chương 4)
// Bài 1 đến Bài 10

const chaptersPart1 = [
  // CHƯƠNG 1. SỬ DỤNG BẢN ĐỒ
  {
    partId: "phan-1",
    partTitle: "Phần một — Một số vấn đề chung",
    chapterId: "chuong-1",
    chapterNumber: "Chương 1",
    chapterTitle: "Sử dụng bản đồ",
    badge: "Bài 1 – Bài 3",
    icon: "fa-solid fa-map-location-dot",
    lessons: [
      {
        id: "bai-1",
        number: "Bài 1",
        title: "Môn Địa lí với định hướng nghề nghiệp",
        badge: "Khoa học & Định hướng nghề",
        icon: "fa-solid fa-compass",
        overview: "Địa lí là môn khoa học tổng hợp nghiên cứu tự nhiên và kinh tế - xã hội, rèn luyện tư duy không gian và mở ra các hướng nghề nghiệp chuyên sâu trong thời đại số.",
        sections: [
          {
            title: "1. Đặc điểm và Vai trò của môn Địa lí",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-3">
                <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/60 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1 font-bold text-sm">Khoa học tổng hợp:</strong>
                  Địa lí kết hợp cả tự nhiên và kinh tế – xã hội; có mối liên hệ mật thiết với Toán, Vật lí, Hoá học, Sinh học, Lịch sử, Giáo dục kinh tế và pháp luật.
                </div>
                <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-2xl border border-teal-200/60 dark:border-teal-800">
                  <strong class="text-teal-800 dark:text-teal-300 block mb-1 font-bold text-sm">Năng lực cốt lõi:</strong>
                  Cung cấp tri thức về thiên nhiên, con người, sản xuất và các lãnh thổ; rèn năng lực đọc không gian, khai thác tư liệu, giải thích hiện tượng và thích ứng với biến động môi trường.
                </div>
              </div>
            `
          },
          {
            title: "2. Định hướng nghề nghiệp và Vận dụng thực tiễn",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div>• <strong>Kiến thức địa lí tự nhiên:</strong> Hỗ trợ nông nghiệp, quản lí đất đai và tài nguyên, quy hoạch công trình thủy lợi, địa chất khoáng sản và bảo vệ môi trường.</div>
                <div>• <strong>Kiến thức kinh tế – xã hội:</strong> Hỗ trợ thương mại quốc tế, tài chính, logistics, dịch vụ du lịch, quy hoạch đô thị và quản lí xã hội.</div>
                <div>• <strong>Kỹ năng bản đồ & Công nghệ không gian:</strong> Trắc địa, đo đạc, thành lập bản đồ số, GIS (Hệ thống thông tin địa lí), viễn thám vệ tinh (Remote Sensing).</div>
                <div>• <strong>Vận dụng chọn nghề:</strong> Xác định những hiểu biết địa lí cần cho nghề tương lai (vị trí, địa hình, khí hậu, thị trường, dân cư) để chủ động tích lũy năng lực.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Đặc điểm nổi bật nhất về bản chất của môn Địa lí trong hệ thống các môn học là gì?",
            options: ["Môn khoa học tổng hợp liên kết tự nhiên và kinh tế – xã hội", "Chỉ nghiên cứu về khoáng sản trong lòng đất", "Chỉ là vẽ và đọc bản đồ hành chính", "Một môn khoa học trừu tượng không có ứng dụng thực tế"],
            ans: 0,
            exp: "Địa lí mang tính tích hợp liên ngành sâu sắc giữa khoa học tự nhiên (khí quyển, thạch quyển...) và khoa học xã hội (dân cư, kinh tế...)."
          },
          {
            q: "Nhóm nghề nghiệp nào sau đây ứng dụng trực tiếp công nghệ GIS, định vị GPS và viễn thám vệ tinh?",
            options: ["Trắc địa bản đồ, quy hoạch đô thị và quản lí tài nguyên số", "Dịch thuật văn học cổ điển", "Biểu diễn nghệ thuật sân khấu", "Nấu ăn ẩm thực truyền thống"],
            ans: 0,
            exp: "Kỹ năng bản đồ hiện đại gắn liền với trắc địa, viễn thám vệ tinh, bản đồ số và quản lí quy hoạch lãnh thổ."
          }
        ]
      },
      {
        id: "bai-2",
        number: "Bài 2",
        title: "Một số phương pháp biểu hiện các đối tượng địa lí trên bản đồ",
        badge: "Phương pháp bản đồ",
        icon: "fa-solid fa-layer-group",
        overview: "Nắm vững 8 phương pháp bản đồ tiêu chuẩn: Kí hiệu, Đường chuyển động, Bản đồ - biểu đồ, Chấm điểm, Khoanh vùng, Nền chất lượng, Đường đẳng trị và Biểu đồ định vị.",
        sections: [
          {
            title: "1. Bảng phân loại 8 phương pháp biểu hiện bản đồ",
            content: `
              <div class="overflow-x-auto text-xs">
                <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl overflow-hidden">
                  <thead class="bg-slate-100 dark:bg-slate-700/60 text-slate-900 dark:text-white font-bold">
                    <tr>
                      <th class="p-2.5 text-left border border-slate-200 dark:border-slate-700">Phương pháp</th>
                      <th class="p-2.5 text-left border border-slate-200 dark:border-slate-700">Đối tượng biểu hiện</th>
                      <th class="p-2.5 text-left border border-slate-200 dark:border-slate-700">Cách thể hiện & Thông tin đọc được</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Kí hiệu</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đối tượng định vị tại điểm/diện tích nhỏ (mỏ, cảng, sân bay, nhà máy, thành phố).</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Hình, màu, kích thước thể hiện vị trí, chủng loại, quy mô, chất lượng/số lượng.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Kí hiệu đường chuyển động</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Sự di chuyển: luồng vận tải, gió, dòng biển, đường đi của bão, luồng di cư.</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Mũi tên chỉ hướng; màu/độ rộng/kiểu nét biểu thị cường độ, khối lượng, tần suất.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Bản đồ – biểu đồ</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Tổng giá trị của hiện tượng theo từng đơn vị lãnh thổ hành chính.</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đặt biểu đồ cột, tròn trong đơn vị lãnh thổ để so sánh quy mô, cơ cấu.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Chấm điểm</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đối tượng phân tán, số lượng lớn (dân cư nông thôn, chăn nuôi gia súc).</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Mỗi chấm tương ứng số lượng xác định; mật độ chấm thể hiện mức tập trung.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Khoanh vùng</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đối tượng chỉ có ở một số vùng, không phủ liên tục (rừng đặc dụng, vùng trồng chè).</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Ranh giới, màu, hoa văn nền thể hiện phạm vi phân bố lãnh thổ.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Nền chất lượng</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Hiện tượng liên tục theo vùng (các nhóm đất, đới khí hậu, kiểu thảm thực vật).</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Màu sắc hoặc nền phân cấp cho biết loại hình hoặc cấp độ chất lượng.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Đường đẳng trị</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đại lượng biến thiên liên tục trong không gian (nhiệt độ, khí áp, độ cao, lượng mưa).</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đường nối các điểm có cùng trị số (đẳng nhiệt, đẳng áp, đẳng cao/đường đồng mức).</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Biểu đồ định vị</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Số liệu gắn với các điểm cụ thể (trạm khí tượng, trạm thủy văn).</td>
                      <td class="p-2.5 border border-slate-200 dark:border-slate-700">Đặt biểu đồ tại đúng vị trí trạm để theo dõi diễn biến nhiệt/ẩm/lưu lượng.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `
          },
          {
            title: "2. Kỹ năng khai thác bản đồ chuẩn xác",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Đọc tên bản đồ, chú giải, tỉ lệ, phương hướng, đơn vị và phạm vi số liệu trước khi phân tích. Một bản đồ có thể kết hợp đồng thời nhiều phương pháp biểu hiện khác nhau. Tuyệt đối không suy diễn vượt quá giới hạn chi tiết mà tỉ lệ và bảng chú giải cung cấp.
              </p>
            `
          }
        ],
        quiz: [
          {
            q: "Để thể hiện hướng di chuyển và cường độ của bão trên Biển Đông, người ta sử dụng phương pháp bản đồ nào?",
            options: ["Phương pháp kí hiệu đường chuyển động", "Phương pháp chấm điểm", "Phương pháp đường đẳng trị", "Phương pháp khoanh vùng"],
            ans: 0,
            exp: "Đường chuyển động dùng các mũi tên thể hiện hướng đi, độ lớn nét vẽ thể hiện cấp độ bão."
          },
          {
            q: "Đặc điểm cơ bản của phương pháp đường đẳng trị trên bản đồ khí hậu là gì?",
            options: ["Nối các điểm có cùng một giá trị như cùng nhiệt độ (đẳng nhiệt), cùng khí áp (đẳng áp)", "Dùng các chấm điểm biểu thị dân cư", "Đặt biểu đồ tròn vào từng tỉnh", "Vẽ ranh giới các mỏ khoáng sản"],
            ans: 0,
            exp: "Đường đẳng trị liên kết những điểm có trị số bằng nhau trong không gian liên tục."
          }
        ]
      },
      {
        id: "bai-3",
        number: "Bài 3",
        title: "Sử dụng bản đồ trong học tập và đời sống; một số ứng dụng của GPS và bản đồ số",
        badge: "Đọc bản đồ & GPS",
        icon: "fa-solid fa-satellite",
        overview: "Quy trình khai thác bản đồ, ý nghĩa tỉ lệ bản đồ, độ biến dạng phép chiếu, nguyên lí định vị GPS và các ứng dụng đột phá của bản đồ số trong đời sống.",
        sections: [
          {
            title: "1. Quy trình đọc bản đồ và Tỉ lệ bản đồ",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Quy trình đọc bản đồ chuẩn:</strong>
                  Xác định mục đích/câu hỏi → Chọn bản đồ phù hợp → Đọc tên, phạm vi, thời điểm, phép chiếu và tỉ lệ → Tra cứu chú giải, kí hiệu, phương hướng → Xác định toạ độ và phân bố không gian → So sánh và đối chiếu liên hệ kiến thức để giải thích nguyên nhân.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Tỉ lệ bản đồ &amp; Khoảng cách thực tế:</strong>
                  Tỉ lệ số 1:M có nghĩa 1 cm trên bản đồ tương ứng M cm ngoài thực địa. <br>
                  <em>Công thức:</em> <strong>Khoảng cách thực tế = Khoảng cách trên bản đồ × M</strong> (chú ý đổi về mét hoặc kilômét). Mẫu số M càng nhỏ thì tỉ lệ càng lớn, bản đồ càng chi tiết.
                </div>
              </div>
            `
          },
          {
            title: "2. Phép chiếu bản đồ, Định vị GPS và Bản đồ số",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-blue-600 dark:text-blue-400 block mb-1">Phép chiếu bản đồ:</strong>
                  Chuyển bề mặt cong quả cầu Trái Đất lên mặt phẳng giấy luôn gây biến dạng về diện tích, hình dạng, khoảng cách hoặc góc. Cần chọn phép chiếu phù hợp mục đích sử dụng.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">GPS &amp; Bản đồ số:</strong>
                  - <em>GPS (Mỹ), GLONASS (Nga), Galileo (EU), BeiDou (TQ):</em> Dùng tín hiệu vệ tinh xác định toạ độ kinh-vĩ độ, độ cao và tốc độ di chuyển.<br>
                  - <em>Bản đồ số:</em> Tìm đường, điều hướng giao thông, gọi xe công nghệ, theo dõi đơn hàng logistics và hỗ trợ cứu hộ cứu nạn khẩn cấp.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Trên bản đồ tỉ lệ 1:200.000, khoảng cách đo được giữa hai điểm A và B là 5 cm. Khoảng cách thực tế ngoài thực địa là:",
            options: ["10 km", "1 km", "50 km", "20 km"],
            ans: 0,
            exp: "Khoảng cách thực địa = 5 cm × 200.000 = 1.000.000 cm = 10.000 m = 10 km."
          },
          {
            q: "Nguyên nhân chính dẫn đến mọi bản đồ phẳng đều có độ biến dạng nhất định so với bề mặt thực của Trái Đất là do:",
            options: ["Không thể trải phẳng hoàn toàn một mặt cầu cong lên mặt phẳng giấy mà không làm co giãn", "Do máy in bản đồ bị lỗi", "Do Trái Đất chuyển động quá nhanh", "Do độ dày khí quyển"],
            ans: 0,
            exp: "Hình học không gian chứng minh không thể chiếu bề mặt hình cầu Elipsoid lên mặt phẳng mà bảo toàn tuyệt đối cả diện tích và hình dạng."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 2. TRÁI ĐẤT
  {
    partId: "phan-2",
    partTitle: "Phần hai — Địa lí tự nhiên",
    chapterId: "chuong-2",
    chapterNumber: "Chương 2",
    chapterTitle: "Trái Đất",
    badge: "Bài 4 – Bài 5",
    icon: "fa-solid fa-earth-americas",
    lessons: [
      {
        id: "bai-4",
        number: "Bài 4",
        title: "Sự hình thành Trái Đất, vỏ Trái Đất và vật liệu cấu tạo vỏ Trái Đất",
        badge: "Vỏ Trái Đất & Đá",
        icon: "fa-solid fa-gem",
        overview: "Nguồn gốc hình thành Trái Đất, cấu trúc vỏ lục địa và vỏ đại dương, vòng tuần hoàn biến chuyển giữa ba nhóm đá chính: Magma, Trầm tích và Biến chất.",
        sections: [
          {
            title: "1. Sự hình thành và Cấu trúc vỏ Trái Đất",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Nguồn gốc:</strong>
                  Hình thành cách đây khoảng 4,6 tỉ năm từ đám mây bụi khí ngưng tụ dưới lực hấp dẫn, nhiệt bên trong tăng cao dẫn đến nóng chảy và phân lớp tỉ trọng vật chất.
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1">Vỏ lục địa:</strong>
                    Dày trung bình 35–40 km (vùng núi cao tới 70 km); gồm 3 tầng: trầm tích, granit và badan. Thành phần granit nổi bật, tỉ trọng nhẹ hơn.
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1">Vỏ đại dương:</strong>
                    Mỏng hơn (khoảng 5–10 km); gồm tầng trầm tích mỏng và tầng badan đặc trưng, hầu như không có tầng đá granit, tỉ trọng nặng hơn.
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "2. Ba nhóm đá cấu tạo vỏ Trái Đất & Vòng tuần hoàn đá",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200/60 dark:border-red-800">
                  <strong class="text-red-700 dark:text-red-400 block mb-1">1. Đá Magma (Đá lửa):</strong>
                  Kết tinh khi macma nóng chảy nguội đi. Gồm macma xâm nhập nguội sâu (đá hoa cương/granit) và macma phun trào trên mặt đất (đá badan/basalt).
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200/60 dark:border-amber-800">
                  <strong class="text-amber-700 dark:text-amber-400 block mb-1">2. Đá Trầm tích:</strong>
                  Vật liệu phong hoá được nước/gió vận chuyển lắng đọng ở nơi trũng, bị nén ép gắn kết; thường xếp thành lớp song song, chứa hoá thạch (đá vôi, cát kết, sét).
                </div>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200/60 dark:border-purple-800">
                  <strong class="text-purple-700 dark:text-purple-400 block mb-1">3. Đá Biến chất:</strong>
                  Đá magma hoặc đá trầm tích bị biến đổi cấu trúc do tác động của nhiệt độ cao và áp suất cực lớn trong lòng đất mà không nóng chảy hoàn toàn (đá hoa/marble, đá phiến).
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Đặc điểm khác biệt căn bản giữa vỏ lục địa và vỏ đại dương là gì?",
            options: ["Vỏ lục địa dày hơn và có tầng đá granit nổi bật; vỏ đại dương mỏng hơn và không có tầng granit", "Vỏ lục địa hoàn toàn nằm dưới đáy biển sâu", "Vỏ đại dương có độ dày lên đến 70 km", "Vỏ đại dương chứa toàn bộ khoáng sản than đá"],
            ans: 0,
            exp: "Vỏ lục địa dày 35-70 km gồm tầng trầm tích, granit và badan; vỏ đại dương chỉ dày 5-10 km chủ yếu gồm tầng badan và trầm tích mỏng."
          },
          {
            q: "Loại đá nào sau đây thường có cấu trúc phân lớp song song và có thể chứa di tích hoá thạch sinh vật?",
            options: ["Đá trầm tích (đá vôi, cát kết)", "Đá magma xâm nhập", "Đá magma phun trào", "Đá biến chất"],
            ans: 0,
            exp: "Đá trầm tích hình thành do sự lắng đọng dần dần của các lớp vụn hữu cơ và vô cơ qua thời gian dài."
          }
        ]
      },
      {
        id: "bai-5",
        number: "Bài 5",
        title: "Hệ quả địa lí các chuyển động của Trái Đất",
        badge: "Giờ, Mùa & Ngày đêm",
        icon: "fa-solid fa-arrows-spin",
        overview: "Hệ quả chuyển động tự quay quanh trục (luân phiên ngày đêm, giờ địa phương, lực Coriolis) và chuyển động quanh Mặt Trời (chuyển động biểu kiến, mùa trong năm, ngày đêm dài ngắn theo vĩ độ).",
        sections: [
          {
            title: "1. Hệ quả chuyển động tự quay quanh trục",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-3">
                <div>• Trái Đất tự quay từ tây sang đông quanh trục nghiêng <strong>23°27′ so với đường vuông góc mặt phẳng quỹ đạo</strong> (nghiêng 66°33′ với mặt phẳng quỹ đạo), một vòng hết 24 giờ.</div>
                <div>• <strong>Luân phiên ngày – đêm:</strong> Do Trái Đất dạng hình cầu và tự quay liên tục nên mọi nơi lần lượt được Mặt Trời chiếu sáng rồi chìm vào bóng tối.</div>
                <div>• <strong>Giờ trên Trái Đất:</strong> Trái Đất chia 24 múi giờ (mỗi múi 15° kinh tuyến = 1 giờ; 1° kinh độ = 4 phút). Đi về phía đông cộng thêm giờ, phía tây lùi giờ. Kinh tuyến 180° là <em>Đường đổi ngày quốc tế</em> (từ tây sang đông qua đường này lùi 1 ngày lịch, từ đông sang tây cộng 1 ngày).</div>
                <div>• <strong>Lực Coriolis:</strong> Lực quán tính làm lệch hướng chuyển động: lệch sang <strong>bên phải ở Bắc bán cầu</strong>, lệch sang <strong>bên trái ở Nam bán cầu</strong>; tác động mạnh lên hướng gió và dòng biển.</div>
              </div>
            `
          },
          {
            title: "2. Hệ quả chuyển động quanh Mặt Trời",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-800">
                  <strong class="text-blue-700 dark:text-blue-300 block mb-1">Hiện tượng Mùa trong năm:</strong>
                  Do trục Trái Đất nghiêng và không đổi phương khi chuyển động tịnh tiến quanh Mặt Trời, hai bán cầu lần lượt ngả về phía Mặt Trời nhận lượng nhiệt và góc chiếu sáng khác nhau, tạo nên 4 mùa: Xuân, Hạ, Thu, Đông (hai bán cầu có mùa hoàn toàn trái ngược nhau).
                </div>
                <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200/60 dark:border-amber-800">
                  <strong class="text-amber-700 dark:text-amber-400 block mb-1">Hiện tượng Ngày – Đêm dài ngắn theo mùa và vĩ độ:</strong>
                  - Tại Xích đạo: quanh năm ngày dài bằng đêm (12 giờ ngày, 12 giờ đêm).<br>
                  - Càng xa Xích đạo về hai cực: độ chênh lệch thời gian ngày đêm càng lớn.<br>
                  - Mùa hạ: ngày dài hơn đêm (bán cầu ngả về Mặt Trời); Mùa đông: đêm dài hơn ngày.<br>
                  - Vùng cực (từ 66°33′ đến 90°): có hiện tượng ngày hoặc đêm kéo dài suốt 24 giờ; riêng tại cực có 6 tháng ngày và 6 tháng đêm liên tục.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Do tác động của lực Coriolis, ở bán cầu Bắc, các vật thể chuyển động (như dòng sông, luồng gió) bị lệch theo hướng nào?",
            options: ["Lệch về bên phải so với hướng chuyển động ban đầu", "Lệch về bên trái", "Không bị lệch hướng", "Chỉ lệch khi đi từ Đông sang Tây"],
            ans: 0,
            exp: "Lực Coriolis làm lệch hướng mọi chuyển động tự do: sang phải ở Bắc bán cầu và sang trái ở Nam bán cầu."
          },
          {
            q: "Tại khu vực nào trên Trái Đất quanh năm luôn có hiện tượng ngày dài bằng đêm (12 giờ ngày, 12 giờ đêm)?",
            options: ["Đường Xích đạo (0°)", "Chí tuyến Bắc (23°27'B)", "Vòng cực Bắc (66°33'B)", "Cực Nam (90°N)"],
            ans: 0,
            exp: "Đường phân chia sáng tối luôn đi qua tâm Trái Đất và chia đôi vòng xích đạo thành hai phần bằng nhau quanh năm."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 3. THẠCH QUYỂN
  {
    partId: "phan-2",
    partTitle: "Phần hai — Địa lí tự nhiên",
    chapterId: "chuong-3",
    chapterNumber: "Chương 3",
    chapterTitle: "Thạch quyển",
    badge: "Bài 6 – Bài 8",
    icon: "fa-solid fa-mountain",
    lessons: [
      {
        id: "bai-6",
        number: "Bài 6",
        title: "Thạch quyển, thuyết kiến tạo mảng",
        badge: "Mảng kiến tạo",
        icon: "fa-solid fa-volcano",
        overview: "Khái niệm thạch quyển dày khoảng 100 km, cơ chế dịch chuyển của các mảng kiến tạo trên lớp quánh dẻo asthenosphere và hệ quả tạo nên động đất, núi lửa và uốn nếp uốn lượn.",
        sections: [
          {
            title: "1. Khái niệm Thạch quyển và Thuyết kiến tạo mảng",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs mb-3">
                <strong>Thạch quyển (Lithosphere):</strong> Gồm vỏ Trái Đất và phần trên cùng cứng của lớp manti trên; chiều dày trung bình khoảng <strong>100 km</strong>. Thạch quyển bị phân chia thành nhiều mảng kiến tạo lớn nhỏ nằm nổi trên tầng vật chất quánh dẻo asthenosphere.
              </div>
            `
          },
          {
            title: "2. Ba kiểu tiếp xúc ranh giới mảng kiến tạo",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-700 dark:text-blue-300 block mb-1 font-bold">1. Ranh giới Tách giãn:</strong>
                  Hai mảng chuyển động rời xa nhau; macma nóng trồi lên tạo thành vỏ mới, sinh ra sống núi ngầm giữa đại dương và thung lũng tách giãn lục địa (Đông Phi).
                </div>
                <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-700 dark:text-red-400 block mb-1 font-bold">2. Ranh giới Hội tụ:</strong>
                  Hai mảng xô vào nhau; mảng đại dương nặng hơn bị hút chìm xuống dưới tạo vực biển sâu và cung đảo núi lửa; va chạm hai mảng lục địa nâng cao các dãy núi trẻ uốn nếp khổng lồ (Himalaya).
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-700 dark:text-amber-400 block mb-1 font-bold">3. Ranh giới Trượt ngang:</strong>
                  Hai mảng trượt ngang ngược chiều nhau; tích lũy ứng suất lớn rồi giải phóng đột ngột sinh ra các trận động đất kinh hoàng (đới đứt gãy San Andreas ở California).
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Dãy núi uốn nếp cao nhất thế giới Himalaya được hình thành do kiểu tiếp xúc nào giữa các mảng kiến tạo?",
            options: ["Va chạm hội tụ giữa mảng Ấn Độ – Australia và mảng Á – Âu", "Tách giãn giữa hai mảng đại dương", "Trượt ngang bằng nhau", "Phun trào macma cục bộ"],
            ans: 0,
            exp: "Sự va chạm trực tiếp giữa hai mảng lục địa khổng lồ nén ép các lớp đá trầm tích đáy biển cổ Tethys trồi lên thành dãy Himalaya."
          },
          {
            q: "Tại ranh giới tách giãn giữa hai mảng kiến tạo đại dương, dạng địa hình đặc trưng nào được tạo thành?",
            options: ["Sống núi ngầm giữa đại dương", "Vực biển sâu", "Đồng bằng châu thổ", "Cao nguyên bazan"],
            ans: 0,
            exp: "Khi hai mảng đại dương tách nhau, macma trồi lên đông nguội tạo thành hệ thống sống núi giữa đại dương liên tục dài hàng vạn km."
          }
        ]
      },
      {
        id: "bai-7",
        number: "Bài 7",
        title: "Nội lực và ngoại lực",
        badge: "Tạo lập & Bào mòn",
        icon: "fa-solid fa-shapes",
        overview: "Mối quan hệ đối lập và thống nhất biện chứng giữa Nội lực (nâng cao, tạo địa hình gồ ghề) và Ngoại lực (phong hóa, xâm thực, vận chuyển, bồi tụ san bằng địa hình).",
        sections: [
          {
            title: "1. Tác động của Nội lực",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs mb-3 space-y-1.5">
                <div>• <strong>Khái niệm & Nguồn gốc:</strong> Lực sinh ra bên trong lòng Trái Đất (năng lượng phân rã phóng xạ, phản ứng hóa học, chuyển dịch vật chất).</div>
                <div>• <strong>Vận động nâng hạ:</strong> Vận động theo phương thẳng đứng trên diện rộng dẫn tới hiện tượng biển tiến và biển thoái.</div>
                <div>• <strong>Uốn nếp:</strong> Lực nén ép theo phương ngang làm các tầng đá bị uốn cong thành nếp lồi và nếp lõm, tạo các dãy núi uốn nếp.</div>
                <div>• <strong>Đứt gãy:</strong> Lực kéo dãn hoặc nén ép mạnh làm đất đá bị gãy vỡ dịch chuyển, tạo nên <em>địa hào</em> (vùng sụt trũng) và <em>địa lũy</em> (khối nâng cao).</div>
              </div>
            `
          },
          {
            title: "2. Tác động của Ngoại lực",
            content: `
              <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/60 dark:border-emerald-800 text-xs space-y-2">
                <div>• <strong>Nguồn gốc:</strong> Năng lượng bức xạ Mặt Trời và trọng lực tại bề mặt Trái Đất.</div>
                <div>• <strong>Chu trình 4 khâu:</strong> <strong>Phong hoá → Bóc mòn (xâm thực) → Vận chuyển → Bồi tụ</strong>.</div>
                <div>• <em>Phong hoá:</em> Vật lí (đá nứt vỡ cơ học do nhiệt độ thay đổi), Hoá học (nước và axit hòa tan biến đổi khoáng vật như địa hình Karst đá vôi), Sinh học (rễ cây, vi sinh vật).</div>
                <div>• <em>Bóc mòn:</em> Nước chảy khoét rãnh, sóng biển vỗ vách đá mài mòn, gió thổi mòn tạo nấm đá, băng hà nạo vét thung lũng chữ U.</div>
                <div>• <em>Bồi tụ:</em> Tạo nên các đồng bằng châu thổ phù sa trù phú (sông Hồng, sông Cửu Long, Nile...).</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Địa hình hang động Karst đá vôi nổi tiếng ở Vịnh Hạ Long và Phong Nha – Kẻ Bàng là kết quả điển hình của quá trình nào?",
            options: ["Phong hóa hóa học do nước hòa tan đá vôi", "Phong hóa vật lí do nhiệt độ", "Tác động của dung nham núi lửa", "Gió thổi mòn cát"],
            ans: 0,
            exp: "Nước chứa CO2 hòa tan đá vôi CaCO3 tạo nên hệ thống thạch nhũ và hang động Karst kì vĩ."
          },
          {
            q: "Mối quan hệ biện chứng tổng quát giữa nội lực và ngoại lực trên bề mặt Trái Đất là gì?",
            options: ["Nội lực có xu hướng nâng cao, làm gồ ghề bề mặt; ngoại lực có xu hướng san bằng, bào mòn địa hình", "Hai lực hoàn toàn độc lập không tác động vào nhau", "Nội lực san phẳng mọi ngọn núi", "Ngoại lực nâng cao các lục địa"],
            ans: 0,
            exp: "Nội lực và ngoại lực diễn ra đồng thời, đối lập nhau nhưng cùng kiến tạo nên muôn hình vạn trạng của bề mặt Trái Đất."
          }
        ]
      },
      {
        id: "bai-8",
        number: "Bài 8",
        title: "Thực hành: Sự phân bố các vành đai động đất, núi lửa",
        badge: "Thực hành địa chấn",
        icon: "fa-solid fa-chart-line",
        overview: "Quy trình đối chiếu bản đồ mảng kiến tạo với các vành đai động đất, núi lửa lớn nhất hành tinh (Vành đai lửa Thái Bình Dương, Địa Trung Hải - Himalaya).",
        sections: [
          {
            title: "1. Các bước phân tích bản đồ động đất, núi lửa",
            content: `
              <div class="space-y-2.5 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 1:</strong> Đọc bảng chú giải, nhận diện kí hiệu các tâm động đất, núi lửa đang hoạt động và ranh giới các mảng kiến tạo.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 2:</strong> Nhận xét sự phân bố không gian: Động đất và núi lửa không phân bố đều mà tập trung thành các vành đai hẹp trùng khớp với <strong>ranh giới tiếp xúc giữa các mảng thạch quyển</strong>.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 3 - Hai vành đai lớn nhất:</strong><br>
                  • <em>Vành đai lửa Thái Bình Dương (Pacific Ring of Fire):</em> Chiếm hơn 75% núi lửa và 90% động đất toàn cầu (chạy dài từ New Zealand, Nhật Bản, Alaska xuống bờ tây châu Mỹ).<br>
                  • <em>Vành đai Địa Trung Hải – Himalaya:</em> Đới va chạm giữa mảng Phi, mảng Ấn Độ với mảng Á – Âu.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Khu vực nào trên thế giới tập trung trên 75% số núi lửa hoạt động và khoảng 90% các trận động đất của hành tinh?",
            options: ["Vành đai lửa Thái Bình Dương", "Vành đai Bắc Băng Dương", "Vùng nội địa lục địa Úc", "Khu vực sa mạc Sahara"],
            ans: 0,
            exp: "Vành đai lửa Thái Bình Dương bao quanh mép rìa các mảng kiến tạo vận động liên tục, sinh ra địa chấn dữ dội nhất."
          },
          {
            q: "Nguyên nhân chủ yếu khiến động đất và núi lửa phân bố tập trung thành các dải hẹp là:",
            options: ["Trùng với các đới ranh giới tiếp xúc nơi các mảng thạch quyển va chạm hoặc tách giãn", "Do độ sâu của các dòng sông", "Do ảnh hưởng của sức gió bão", "Do mật độ dân cư tập trung quá đông"],
            ans: 0,
            exp: "Năng lượng kiến tạo tích tụ và giải phóng mạnh nhất tại mép rìa ranh giới các mảng."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 4. KHÍ QUYỂN
  {
    partId: "phan-2",
    partTitle: "Phần hai — Địa lí tự nhiên",
    chapterId: "chuong-4",
    chapterNumber: "Chương 4",
    chapterTitle: "Khí quyển",
    badge: "Bài 9 – Bài 10",
    icon: "fa-solid fa-cloud-sun-rain",
    lessons: [
      {
        id: "bai-9",
        number: "Bài 9",
        title: "Khí quyển, các yếu tố khí hậu",
        badge: "Nhiệt, Khí áp, Gió & Mưa",
        icon: "fa-solid fa-wind",
        overview: "Thành phần khí quyển, các khối khí (A, P, T, E), quy luật phân bố nhiệt độ, sự hình thành các đai khí áp, các loại gió hành tinh và nhân tố quyết định lượng mưa.",
        sections: [
          {
            title: "1. Thành phần khí quyển và Khối khí",
            content: `
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs mb-3">
                - Thành phần không khí: <strong>Nitơ 78,1%</strong>, <strong>Ô-xi 20,9%</strong>, hơi nước, khí carbonic và khí hiếm 1%. Tầng đối lưu chứa 80% khối lượng không khí và toàn bộ hiện tượng thời tiết mây mưa.<br>
                - Bốn khối khí chính: <strong>A</strong> (Bắc cực/Nam cực rất lạnh), <strong>P</strong> (Ôn đới lạnh mát), <strong>T</strong> (Nhiệt đới nóng), <strong>E</strong> (Xích đạo nóng ẩm).
              </div>
            `
          },
          {
            title: "2. Bốn yếu tố khí hậu cốt lõi",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nhiệt độ không khí:</strong>
                  Giảm từ xích đạo về cực; thay đổi giữa bờ đông bờ tây lục địa do dòng biển; trong tầng đối lưu cứ lên cao 100 m nhiệt độ giảm trung bình <strong>0,6°C</strong>.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Khí áp &amp; Các đai gió:</strong>
                  7 đai khí áp xen kẽ: Áp thấp Xích đạo, 2 áp cao Cận chí tuyến, 2 áp thấp Ôn đới, 2 áp cao Cực. Các loại gió: Tín phong (Mậu dịch), Gió Tây ôn đới, Gió Đông cực, Gió mùa và Gió địa phương (gió biển-đất, gió phơn khô nóng).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 sm:col-span-2">
                  <strong class="text-indigo-600 block mb-1">Lượng mưa và Sự phân bố mưa:</strong>
                  Mưa lớn nhất ở vùng áp thấp Xích đạo (đối lưu nhiệt mạnh), mưa nhiều ở đới ôn đới (nơi gặp gỡ frông). Mưa rất ít ở các đai áp cao cận chí tuyến (không khí giáng xuống) và hai cực (quá lạnh, không bốc hơi). Địa hình đón gió mưa nhiều, khuất gió khô hạn.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Trong tầng đối lưu của khí quyển, trung bình cứ lên cao 100 mét thì nhiệt độ không khí sẽ:",
            options: ["Giảm khoảng 0,6°C", "Tăng khoảng 0,6°C", "Không thay đổi", "Giảm 6°C"],
            ans: 0,
            exp: "Càng lên cao không khí càng loãng, mật độ hạt bụi và hơi nước giữ nhiệt ít đi nên nhiệt độ giảm 0,6°C trên 100 m."
          },
          {
            q: "Khu vực vĩ độ nào trên Trái Đất thường có lượng mưa trung bình năm cao nhất hành tinh?",
            options: ["Khu vực áp thấp Xích đạo", "Khu vực áp cao Cận chí tuyến (hoang mạc Sahara)", "Khu vực cực Bắc", "Khu vực cực Nam"],
            ans: 0,
            exp: "Khu vực Xích đạo quanh năm nhận lượng nhiệt lớn, nước bốc hơi mạnh, không khí bốc lên ngưng tụ gây mưa giông đối lưu lớn."
          }
        ]
      },
      {
        id: "bai-10",
        number: "Bài 10",
        title: "Thực hành: Đọc bản đồ các đới và kiểu khí hậu; phân tích biểu đồ khí hậu",
        badge: "Thực hành khí hậu",
        icon: "fa-solid fa-cloud-bolt",
        overview: "Quy chuẩn đọc biểu đồ khí hậu nhiệt độ - lượng mưa (Climograph) 12 tháng, xác định tháng cao nhất/thấp nhất, biên độ nhiệt, mùa mưa và nhận diện đới khí hậu tương ứng.",
        sections: [
          {
            title: "1. Quy trình phân tích biểu đồ khí hậu (Nhiệt độ - Lượng mưa)",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div><strong>1. Phân tích Nhiệt độ (Đường biểu diễn):</strong></div>
                <div class="ml-3">• Xác định tháng có nhiệt độ cao nhất (nhiệt độ bao nhiêu °C, rơi vào tháng mấy).</div>
                <div class="ml-3">• Xác định tháng có nhiệt độ thấp nhất (°C, tháng mấy).</div>
                <div class="ml-3">• Tính <strong>Biên độ nhiệt năm</strong> = Nhiệt độ tháng cao nhất − Nhiệt độ tháng thấp nhất.</div>
                <div><strong>2. Phân tích Lượng mưa (Biểu đồ hình cột):</strong></div>
                <div class="ml-3">• Tính tổng lượng mưa cả năm (cộng lượng mưa 12 tháng, đơn vị mm).</div>
                <div class="ml-3">• Phân định mùa mưa (các tháng mưa > 100 mm) và mùa khô (mưa ít).</div>
                <div><strong>3. Kết luận:</strong> Nhận dạng trạm đó thuộc kiểu khí hậu nào (Nhiệt đới gió mùa, Ôn đới hải dương, Cận nhiệt Địa Trung Hải, Hoang mạc...).</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Trên biểu đồ khí hậu tiêu chuẩn, đường biểu diễn màu đỏ và các cột màu xanh lần lượt thể hiện những đại lượng nào?",
            options: ["Nhiệt độ trung bình các tháng (°C) và Lượng mưa các tháng (mm)", "Độ ẩm (%) và Khí áp (hPa)", "Lượng gió (m/s) và Bức xạ Mặt Trời", "Số giờ nắng và Lượng bốc hơi"],
            ans: 0,
            exp: "Quy ước quốc tế thể hiện nhiệt độ bằng đường cong và lượng mưa bằng cột theo 12 tháng."
          },
          {
            q: "Một trạm khí tượng có nhiệt độ tháng 7 là 28°C, nhiệt độ tháng 1 là 16°C. Biên độ nhiệt độ năm của trạm này là:",
            options: ["12°C", "44°C", "22°C", "8°C"],
            ans: 0,
            exp: "Biên độ nhiệt năm = 28°C - 16°C = 12°C."
          }
        ]
      }
    ]
  }
];

module.exports = { chaptersPart1 };
