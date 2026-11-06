// Thư viện Công thức, Quy trình kĩ năng và Bộ đề thi Trạng Nguyên 25 câu Địa Lí 10
// SGK Kết nối tri thức với cuộc sống

const formulaTable = `
  <div id="cong-thuc" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-10">
    <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0">
        <i class="fa-solid fa-calculator"></i>
      </div>
      <div>
        <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Học phần kĩ năng tính toán</span>
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Bảng tổng hợp công thức Địa lí 10 thường dùng</h3>
      </div>
    </div>

    <div class="overflow-x-auto text-xs sm:text-sm">
      <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden">
        <thead class="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 font-bold">
          <tr>
            <th class="p-3 text-left border border-slate-200 dark:border-slate-700 w-1/3">Nội dung tính toán</th>
            <th class="p-3 text-left border border-slate-200 dark:border-slate-700 w-1/2">Công thức / Quy tắc tính</th>
            <th class="p-3 text-left border border-slate-200 dark:border-slate-700">Đơn vị</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Khoảng cách thực tế từ bản đồ</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Khoảng cách bản đồ × Mẫu số tỉ lệ (đổi cm ra m hoặc km)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">m hoặc km</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Đổi kinh độ thành giờ</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">15° kinh tuyến = 1 giờ (60 phút); 1° kinh tuyến = 4 phút</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">giờ, phút</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Nhiệt độ theo độ cao (tầng đối lưu)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Lên cao 100 m, nhiệt độ trung bình giảm 0,6°C (giảm 6°C/1000m)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">°C</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Tỉ suất gia tăng tự nhiên (Tg)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Tg = Tỉ suất sinh thô (S) − Tỉ suất tử thô (T)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">‰ (chia 10 thành %)</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Tỉ suất gia tăng cơ học (Gch)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Gch = Tỉ suất nhập cư − Tỉ suất xuất cư</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">‰ hoặc %</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Gia tăng dân số thực tế (Gtt)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Gtt = Gia tăng tự nhiên + Gia tăng cơ học</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">%</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">GDP / GNI bình quân đầu người</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">GDP/người = Tổng GDP ÷ Tổng dân số</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">USD/người</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Tỉ trọng cơ cấu (%)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Tỉ trọng = (Giá trị thành phần ÷ Tổng giá trị) × 100%</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">%</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Góc quạt trên biểu đồ tròn</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Góc quạt (độ) = Tỉ trọng (%) × 3,6° (Tổng 100% = 360°)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">độ (°)</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Lưu lượng sông trung bình năm</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Lưu lượng TB = Tổng lưu lượng 12 tháng ÷ 12</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">m³/s</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Cự li vận chuyển trung bình</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Cự li TB = Khối lượng luân chuyển ÷ Khối lượng vận chuyển</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">km</td>
          </tr>
          <tr>
            <td class="p-3 font-bold border border-slate-200 dark:border-slate-700">Cán cân thương mại</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">Cán cân = Giá trị xuất khẩu − Giá trị nhập khẩu (dương: xuất siêu, âm: nhập siêu)</td>
            <td class="p-3 border border-slate-200 dark:border-slate-700">tỉ USD / triệu USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

const skillsGuide = `
  <div id="quy-trinh-ky-nang" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-10">
    <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-xl shrink-0">
        <i class="fa-solid fa-compass-drafting"></i>
      </div>
      <div>
        <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Học phần phương pháp địa lí</span>
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Quy trình rèn luyện kỹ năng Biểu đồ, Bản đồ &amp; Thuật ngữ cốt lõi</h3>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
      <!-- 1. Quy trình biểu đồ -->
      <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2">
        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-2">
          <i class="fa-solid fa-chart-line"></i> 1. Quy trình xử lí số liệu và Vẽ biểu đồ
        </h4>
        <div>• <strong>Bước 1 - Đọc yêu cầu:</strong> Xác định từ khóa: "cơ cấu/tỉ trọng" (tròn, miền), "tốc độ tăng trưởng" (đường), "quy mô và cơ cấu" (cột chồng hoặc tròn có bán kính R), "so sánh khối lượng" (cột đơn/đôi).</div>
        <div>• <strong>Bước 2 - Tính toán:</strong> Luôn kiểm tra tổng % = 100,0%, làm tròn 1 chữ số thập phân, quy đổi góc cung độ trước khi vẽ.</div>
        <div>• <strong>Bước 3 - Hoàn thiện các yếu tố phụ:</strong> Bắt buộc có: <em>Tên biểu đồ phía trên, Đơn vị trên các trục, Bảng chú giải rõ ràng, Năm và Nguồn số liệu phía dưới</em>.</div>
        <div>• <strong>Bước 4 - Nhận xét logic:</strong> Nhận xét khái quát xu hướng chung → Xác định cực đại, cực tiểu → Phân tích sự thay đổi bằng điểm % hoặc tốc độ tăng → Giải thích nguyên nhân địa lí.</div>
      </div>

      <!-- 2. Quy trình đọc bản đồ -->
      <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2">
        <h4 class="font-bold text-teal-700 dark:text-teal-400 text-sm flex items-center gap-2">
          <i class="fa-solid fa-map"></i> 2. Quy trình đọc và Khai thác Bản đồ/Sơ đồ
        </h4>
        <div>• <strong>Bước 1:</strong> Đọc tên bản đồ để nắm rõ chủ đề thể hiện và phạm vi không gian lãnh thổ.</div>
        <div>• <strong>Bước 2:</strong> Tra cứu bảng chú giải để hiểu ý nghĩa từng kí hiệu hình học, chữ viết, màu sắc, hoa văn, mũi tên chuyển động.</div>
        <div>• <strong>Bước 3:</strong> Xác định phương hướng (kim chỉ Bắc hoặc lưới kinh vĩ tuyến) và đo đạc khoảng cách thực tế dựa vào thước tỉ lệ.</div>
        <div>• <strong>Bước 4:</strong> Kết hợp kiến thức địa lí tự nhiên và kinh tế xã hội để giải thích mối quan hệ nhân quả (Ví dụ: tại sao nhà máy thủy điện tập trung ở miền núi dốc).</div>
      </div>

      <!-- 3. Bảng nhớ nhanh quy luật tự nhiên -->
      <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2">
        <h4 class="font-bold text-blue-700 dark:text-blue-400 text-sm flex items-center gap-2">
          <i class="fa-solid fa-earth-asia"></i> 3. Bảng nhớ nhanh các quy luật tự nhiên
        </h4>
        <div>• <strong>Địa đới:</strong> Do dạng cầu Trái Đất làm góc chiếu bức xạ giảm theo <em>vĩ độ</em> → tạo các vòng đai nhiệt, khí áp, gió, đất, thảm thực vật song song vĩ tuyến.</div>
        <div>• <strong>Địa ô (phi địa đới):</strong> Do phân bố lục địa – đại dương làm ẩm giảm từ biển vào nội địa → phân hóa theo <em>kinh độ</em>.</div>
        <div>• <strong>Đai cao (phi địa đới):</strong> Do nhiệt độ giảm 0,6°C/100m → phân hóa thảm thực vật, thổ nhưỡng theo <em>độ cao</em>.</div>
        <div>• <strong>Thống nhất &amp; Hoàn chỉnh:</strong> Mọi thành phần gắn kết hữu cơ → một yếu tố đổi kéo theo toàn bộ cảnh quan biến đổi dây chuyền.</div>
      </div>

      <!-- 4. Thuật ngữ cần phân biệt -->
      <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2">
        <h4 class="font-bold text-amber-700 dark:text-amber-400 text-sm flex items-center gap-2">
          <i class="fa-solid fa-spell-check"></i> 4. Các cặp thuật ngữ dễ nhầm lẫn
        </h4>
        <div>• <strong>Thời tiết</strong> (ngắn hạn, tức thời tại một nơi) vs <strong>Khí hậu</strong> (quy luật thời tiết lặp đi lặp lại nhiều năm).</div>
        <div>• <strong>GDP</strong> (sản xuất bên trong lãnh thổ) vs <strong>GNI</strong> (thu nhập của công dân quốc gia tạo ra).</div>
        <div>• <strong>Khối lượng vận chuyển</strong> (số tấn/người chở được) vs <strong>Khối lượng luân chuyển</strong> (nhân thêm quãng đường km).</div>
        <div>• <strong>Xuất siêu</strong> (Xuất > Nhập) vs <strong>Nhập siêu</strong> (Xuất < Nhập).</div>
        <div>• <strong>Đô thị hóa</strong> là quá trình kinh tế – xã hội tổng hợp rộng lớn, không chỉ đơn thuần là tăng số lượng dân cư ở phố.</div>
      </div>
    </div>
  </div>
`;

const editorialNotes = `
  <div id="ghi-chu-hoc-lieu" class="scroll-mt-28 bg-slate-50 dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 mb-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-3">
    <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
      <i class="fa-solid fa-circle-info text-emerald-600"></i>
      <span>Thông tin biên soạn &amp; Bản quyền học liệu</span>
    </div>
    <p>
      Nội dung học liệu được chuẩn hóa và số hóa bám sát theo <strong>SGK Địa lí 10 (Bộ sách Kết nối tri thức với cuộc sống — Tái bản lần thứ tư)</strong>. Toàn bộ 13 chương và 40 bài học độc lập đã được tinh giản thành các mục khái niệm, quan hệ nhân quả biện chứng, quy luật địa lí, bảng phân loại và bài tập mini-quiz củng cố.
    </p>
    <p>
      Các số liệu thống kê trong bài (dân số 7,8 tỉ người năm 2020, sản lượng lương thực 3.075,9 triệu tấn năm 2019, khách du lịch 1.460 triệu lượt năm 2019...) được giữ nguyên theo mốc thời gian ghi trong sách giáo khoa hiện hành nhằm bảo đảm tính đồng bộ với các đề kiểm tra chính khóa trên lớp.
    </p>
  </div>
`;

// Bộ đề thi Trạng Nguyên Địa Lí 10 (Chuẩn 25 câu hỏi trắc nghiệm chất lượng cao)
const trangNguyenExamQuestions = [
  {
    q: "Đặc điểm cơ bản nhất thể hiện bản chất của môn Địa lí trong chương trình THPT là gì?",
    options: ["Khoa học tổng hợp kết hợp liên ngành giữa tự nhiên và kinh tế – xã hội", "Chỉ nghiên cứu về các mỏ khoáng sản", "Chỉ nghiên cứu về các hiện tượng thời tiết bão lũ", "Một môn khoa học trừu tượng thuần túy"],
    ans: 0,
    exp: "Địa lí nghiên cứu không gian địa lí, mối quan hệ tương hỗ giữa môi trường thiên nhiên và hoạt động kinh tế của con người."
  },
  {
    q: "Phương pháp bản đồ nào sau đây được sử dụng để biểu hiện các đối tượng định vị tại các điểm cụ thể (như nhà máy thủy điện, cảng biển, mỏ than)?",
    options: ["Phương pháp kí hiệu", "Phương pháp chấm điểm", "Phương pháp đường chuyển động", "Phương pháp đường đẳng trị"],
    ans: 0,
    exp: "Phương pháp kí hiệu (hình học, chữ, tượng hình) biểu hiện các đối tượng định vị tại những vị trí điểm xác định."
  },
  {
    q: "Trên bản đồ tỉ lệ 1:500.000, khoảng cách đo được giữa hai địa điểm là 4 cm. Khoảng cách thực tế giữa hai địa điểm đó ngoài thực địa là:",
    options: ["20 km", "2 km", "200 km", "50 km"],
    ans: 0,
    exp: "Khoảng cách thực tế = 4 cm × 500.000 = 2.000.000 cm = 20.000 m = 20 km."
  },
  {
    q: "Đặc điểm cấu tạo nào sau đây phân biệt rõ rệt giữa Vỏ lục địa và Vỏ đại dương?",
    options: ["Vỏ lục địa dày hơn (35-70 km) và có tầng đá granit; vỏ đại dương mỏng hơn (5-10 km) và hầu như không có tầng granit", "Vỏ đại dương dày hơn vỏ lục địa", "Vỏ đại dương có tầng đá biến chất dày nhất", "Vỏ lục địa hoàn toàn do nước biển tạo thành"],
    ans: 0,
    exp: "Vỏ lục địa có bề dày lớn với 3 tầng (trầm tích, granit, badan); vỏ đại dương mỏng chỉ gồm trầm tích và badan."
  },
  {
    q: "Hệ quả nào sau đây là do chuyển động tự quay quanh trục của Trái Đất sinh ra?",
    options: ["Sự luân phiên ngày đêm, giờ địa phương và lực Coriolis làm lệch hướng chuyển động", "Hiện tượng bốn mùa Xuân, Hạ, Thu, Đông", "Hiện tượng ngày đêm dài ngắn theo mùa", "Chuyển động biểu kiến của Mặt Trời giữa hai chí tuyến"],
    ans: 0,
    exp: "Tự quay quanh trục trong 24 giờ tạo nên nhịp điệu ngày đêm liên tục và sinh ra lực quán tính Coriolis."
  },
  {
    q: "Theo thuyết kiến tạo mảng, khi hai mảng lục địa xô vào nhau (ranh giới hội tụ lục địa – lục địa), hệ quả địa hình là:",
    options: ["Vỏ lục địa bị nén ép, uốn nếp nâng cao tạo thành các dãy núi uốn nếp đồ sộ", "Tạo ra các sống núi ngầm giữa đại dương", "Tạo thành vực biển sâu nhất hành tinh", "Sinh ra các bãi biển bồi tụ phù sa"],
    ans: 0,
    exp: "Va chạm giữa 2 mảng lục địa nén ép vật liệu trồi lên thành núi uốn nếp cao như dãy Himalaya giữa mảng Ấn Độ và Á-Âu."
  },
  {
    q: "Nội lực và ngoại lực trên Trái Đất có mối quan hệ biện chứng với nhau như thế nào?",
    options: ["Diễn ra đồng thời, đối lập nhau: nội lực có xu hướng nâng cao làm gồ ghề địa hình, ngoại lực có xu hướng san bằng bạt thấp", "Hoàn toàn độc lập không tác động nhau", "Nội lực chỉ tác động dưới đáy biển sâu", "Ngoại lực nâng cao các dãy núi"],
    ans: 0,
    exp: "Nội lực và ngoại lực là hai mặt đối lập nhưng thống nhất cùng tạo nên bề mặt địa hình Trái Đất."
  },
  {
    q: "Khu vực nào trên thế giới được mệnh danh là 'Vành đai lửa' tập trung hơn 75% núi lửa và 90% các trận động đất của toàn cầu?",
    options: ["Vành đai Thái Bình Dương", "Vành đai Đại Tây Dương", "Khu vực Bắc Cực", "Vùng nội địa châu Phi"],
    ans: 0,
    exp: "Vành đai lửa Thái Bình Dương bao quanh mép rìa các mảng manti chuyển động hút chìm dữ dội."
  },
  {
    q: "Trong tầng đối lưu của khí quyển, trung bình cứ lên cao thêm 100 mét thì nhiệt độ không khí sẽ biến đổi như thế nào?",
    options: ["Giảm khoảng 0,6°C", "Tăng 0,6°C", "Giảm 6°C", "Không thay đổi nhiệt độ"],
    ans: 0,
    exp: "Càng lên cao không khí càng loãng và xa nguồn nhiệt bức xạ phản hồi từ mặt đất nên nhiệt độ giảm 0,6°C/100m."
  },
  {
    q: "Gió Tín phong (Mậu dịch) trên Trái Đất là loại gió thổi thường xuyên từ:",
    options: ["Các đai áp cao cận chí tuyến về đai áp thấp Xích đạo", "Các đai áp cao cực về áp thấp ôn đới", "Đai áp thấp Xích đạo lên đai áp cao cực", "Đại dương vào đất liền theo mùa"],
    ans: 0,
    exp: "Gió Tín phong thổi liên tục từ 2 đai áp cao 30°B và 30°N về đai áp thấp 0° xích đạo."
  },
  {
    q: "Nhân tố tự nhiên nào đóng vai trò điều tiết dòng chảy lũ, làm chậm tốc độ tập trung nước mặt và bổ sung nước ngầm cho sông?",
    options: ["Lớp phủ thực vật và rừng phòng hộ đầu nguồn", "Độ dốc lòng sông lớn", "Khai thác cát sỏi ồ ạt", "Bê tông hóa bề mặt"],
    ans: 0,
    exp: "Rừng đầu nguồn giữ nước mưa và nhả từ từ vào đất, cắt giảm đỉnh lũ sông hiệu quả."
  },
  {
    q: "Độ muối trung bình của nước biển và đại dương trên thế giới xấp xỉ khoảng bao nhiêu phần nghìn (‰)?",
    options: ["35‰", "15‰", "5‰", "70‰"],
    ans: 0,
    exp: "Nước biển toàn cầu có độ mặn trung bình 35‰ (3,5%)."
  },
  {
    q: "Hiện tượng triều cường xuất hiện vào những thời điểm nào trong tháng âm lịch?",
    options: ["Ngày không trăng (mùng 1) và ngày trăng tròn (ngày 15) khi Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng", "Ngày trăng khuyết (ngày 7-8 và 22-23)", "Vào tất cả các ngày cuối tháng", "Chỉ xuất hiện vào ban đêm mùa đông"],
    ans: 0,
    exp: "Khi thẳng hàng, lực hấp dẫn cộng hưởng tạo nên biên độ triều lớn nhất (triều cường)."
  },
  {
    q: "Đặc trưng cơ bản và quan trọng nhất của đất (thổ nhưỡng) giúp nuôi dưỡng thảm thực vật là gì?",
    options: ["Độ phì nhiêu (khả năng cung cấp nước, chất dinh dưỡng, khí cho cây trồng)", "Khối lượng riêng của đất", "Màu sắc đen hay đỏ", "Độ ẩm 100%"],
    ans: 0,
    exp: "Độ phì nhiêu là thuộc tính sinh học cốt lõi phân biệt đất với đá mẹ."
  },
  {
    q: "Nhân tố tự nhiên nào đóng vai trò tiên quyết cung cấp nhiệt, ánh sáng và nước cho quá trình quang hợp của thực vật trong sinh quyển?",
    options: ["Khí hậu", "Đá mẹ", "Địa chấn", "Thủy triều"],
    ans: 0,
    exp: "Khí hậu quyết định sự sinh trưởng, phân bố và tính chất mùa của thảm thực vật."
  },
  {
    q: "Quy luật thống nhất và hoàn chỉnh của vỏ địa lí khẳng định rằng:",
    options: ["Các thành phần tự nhiên có quan hệ quy định lẫn nhau; nếu một thành phần biến đổi sẽ kéo theo các thành phần khác biến đổi", "Mọi nơi trên Trái Đất đều có khí hậu giống nhau", "Con người có thể phá hủy thiên nhiên mà không gánh chịu hậu quả", "Đất đai không phụ thuộc vào khí hậu"],
    ans: 0,
    exp: "Mối liên hệ nhân quả hữu cơ khiến thiên nhiên là một thể thống nhất không thể tách rời."
  },
  {
    q: "Sự phân bố các đới khí hậu, các nhóm đất và kiểu thảm thực vật song song với các đường vĩ tuyến từ Xích đạo về cực là biểu hiện của:",
    options: ["Quy luật địa đới", "Quy luật địa ô", "Quy luật đai cao", "Quy luật nhịp điệu"],
    ans: 0,
    exp: "Góc chiếu bức xạ mặt trời giảm theo vĩ độ tạo nên tính địa đới song song xích đạo."
  },
  {
    q: "Một quốc gia được xem là bước vào giai đoạn 'Cơ cấu dân số vàng' khi tỉ lệ dân số trong độ tuổi lao động (15 – 64 tuổi) chiếm:",
    options: ["Từ 66% (ít nhất 2/3) tổng dân số trở lên", "Dưới 30%", "Từ 10% đến 20%", "Chỉ cần trên 50%"],
    ans: 0,
    exp: "Dân số vàng là khi 2 người trong độ tuổi lao động chỉ phải gánh tối đa 1 người phụ thuộc."
  },
  {
    q: "Nhân tố nào sau đây giữ vai trò nền tảng quyết định đối với sự phát triển kinh tế lâu dài của một quốc gia?",
    options: ["Nguồn lực bên trong (nội lực quốc gia)", "Vốn đầu tư ODA nước ngoài", "Vay nợ thương mại quốc tế", "Viện trợ nhân đạo"],
    ans: 0,
    exp: "Nội lực gồm lao động, tài nguyên và chính sách tự cường quyết định vận mệnh phát triển quốc gia."
  },
  {
    q: "Chỉ tiêu Tổng sản phẩm trong nước (GDP) khác với Tổng thu nhập quốc gia (GNI) ở điểm mấu chốt nào?",
    options: ["GDP gắn liền với lãnh thổ sản xuất; GNI gắn liền với công dân của quốc gia tạo ra (ở trong và ngoài nước)", "GDP luôn luôn nhỏ hơn GNI", "GDP chỉ tính cho ngành du lịch", "GNI chỉ tính hàng hóa xuất khẩu"],
    ans: 0,
    exp: "GDP đo lường giá trị tạo ra bên trong biên giới địa lí; GNI tính thu nhập thuộc sở hữu công dân."
  },
  {
    q: "Trong sản xuất nông nghiệp, tư liệu sản xuất chủ yếu và không thể thay thế được là:",
    options: ["Đất trồng và mặt nước", "Phân bón vô cơ", "Máy cày máy gặt", "Thuốc bảo vệ thực vật"],
    ans: 0,
    exp: "Đất trồng và mặt nước là không gian sinh thái duy nhất để cây trồng, vật nuôi sinh sống."
  },
  {
    q: "Ba cây lương thực nuôi sống phần lớn nhân loại trên thế giới hiện nay là:",
    options: ["Lúa gạo, lúa mì và ngô", "Khoai tây, khoai lang và sắn", "Mía, củ cải đường và đậu tương", "Cà phê, chè và cao su"],
    ans: 0,
    exp: "Lúa gạo, lúa mì và ngô chiếm hơn 85% tổng sản lượng lương thực toàn cầu."
  },
  {
    q: "Hình thức tổ chức lãnh thổ công nghiệp nào có ranh giới xác định, chuyên sản xuất công nghiệp và dùng chung hệ thống cơ sở hạ tầng kĩ thuật?",
    options: ["Khu công nghiệp", "Điểm công nghiệp", "Vùng nông nghiệp", "Cửa hàng bán lẻ"],
    ans: 0,
    exp: "Khu công nghiệp (KCN) được quy hoạch tập trung đồng bộ điện, nước, xử lí nước thải."
  },
  {
    q: "Để vận chuyển hành khách và hàng hóa có giá trị cao với tốc độ nhanh nhất trên cự li dài xuyên lục địa, ngành vận tải nào chiếm ưu thế hàng đầu?",
    options: ["Đường hàng không", "Đường sắt chở hàng", "Đường sông nội địa", "Đường xe thô sơ"],
    ans: 0,
    exp: "Hàng không có ưu thế vượt trội về tốc độ và khoảng cách kết nối toàn cầu."
  },
  {
    q: "Phát triển bền vững đòi hỏi sự kết hợp hài hòa, đồng bộ giữa ba trụ cột nền tảng nào?",
    options: ["Tăng trưởng kinh tế, công bằng xã hội và bảo vệ môi trường sinh thái", "Kinh tế công nghiệp nặng, quân sự và vũ khí", "Khai thác tối đa tài nguyên dầu khí và khoáng sản", "Chỉ tập trung bảo tồn thiên nhiên mà dừng sản xuất"],
    ans: 0,
    exp: "Ba trụ cột Kinh tế, Xã hội và Môi trường giao nhau chính là cốt lõi của Phát triển bền vững."
  }
];

module.exports = {
  formulaTable,
  skillsGuide,
  editorialNotes,
  trangNguyenExamQuestions
};
