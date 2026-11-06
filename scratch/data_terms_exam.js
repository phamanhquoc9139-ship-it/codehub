// Bảng tra cứu nhanh, Ghi chú biên soạn và Đề thi Trạng Nguyên 25 câu hỏi chuẩn SGK

const quickLookupTable = [
  { topic: "7 Yếu tố chính trong trồng trọt", keywords: "Giống – Ánh sáng – Nhiệt độ (15–40°C) – Nước & ẩm – Đất trồng – Dinh dưỡng khoáng – Kĩ thuật canh tác" },
  { topic: "Quy trình 4 bước trồng trọt", keywords: "Làm đất/bón lót → Gieo hạt/trồng cây con → Chăm sóc/phòng trừ → Thu hoạch đúng độ chín" },
  { topic: "3 Nhóm phân bón", keywords: "Hoá học (đạm urea 46% N, kali KCl 58-62% K2O, lân chậm tan) – Hữu cơ (khoáng hoá chậm, mùn) – Vi sinh (cố định đạm, chuyển hoá lân, phân giải hữu cơ)" },
  { topic: "5 Nhóm biện pháp phòng trừ dịch hại", keywords: "Canh tác (phòng ngừa) – Cơ giới/vật lí (bẫy, bắt) – Sinh học (thiên địch, chế phẩm Bt, NPV, nấm đối kháng) – Hoá học (thuốc BVTV) – Quản lí dịch hại tổng hợp (IPM giữ dưới ngưỡng thiệt hại)" },
  { topic: "Nhân giống cây trồng", keywords: "Hạt (hữu tính); Vô tính: Giâm cành – Chiết cành – Ghép cành/chữ T – Nuôi cấy mô tế bào in vitro" },
  { topic: "3 Công nghệ tưới tiết kiệm", keywords: "Tưới nhỏ giọt (vào rễ, tiết kiệm nhất) – Phun sương (hạ nhiệt, tạo ẩm) – Phun mưa (bao phủ diện rộng)" },
  { topic: "Trồng cây không dùng đất", keywords: "Thuỷ canh tĩnh – Thuỷ canh hồi lưu (NFT) – Khí canh (Aeroponics phun sương áp lực vào rễ lơ lửng)" },
  { topic: "Bảo vệ môi trường & Kinh tế tuần hoàn", keywords: "Nguyên tắc 4 đúng – Thu gom vỏ bao thuốc BVTV – Không đốt rơm rạ – Tái chế phụ phẩm ủ phân hữu cơ vi sinh, ủ chua thức ăn gia súc, trồng nấm rơm" }
];

const editorialNotes = `
  <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
    <h4 class="font-bold text-sm mb-2 flex items-center gap-2">
      <i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Ghi chú quy chuẩn biên soạn và An toàn thực hành
    </h4>
    <p class="mb-2">
      1. Tài liệu hệ thống hóa toàn diện kiến thức cốt lõi theo sách giáo khoa <em>Công nghệ 10 – Công nghệ trồng trọt (bộ Kết nối tri thức với cuộc sống)</em>, phục vụ trực tiếp cho việc học tập, tra cứu và kiểm tra đánh giá trên nền tảng web.
    </p>
    <p class="mb-2">
      2. Tài liệu không thay thế cho nhãn hướng dẫn sử dụng thuốc bảo vệ thực vật, danh mục phân bón lưu hành của Bộ Nông nghiệp và PTNT, các quy chuẩn kĩ thuật quốc gia (QCVN) về an toàn hóa chất phòng thí nghiệm hay các chỉ dẫn hiện trường trực tiếp của giáo viên bộ môn.
    </p>
    <p>
      3. Các thông số kĩ thuật thực hành (nồng độ dung dịch chuẩn độ chua/mặn, tỉ lệ nước vôi khử chát xơ dừa 2 kg/100 L, ngâm rơm nấm 0,3 kg/100 L, tỉ lệ ngâm xirô 1 kg quả : 1–1,5 kg đường, tỉ lệ ủ chua 100 kg : 5 kg mật rỉ : 1 kg muối) phải được vận dụng chuẩn xác theo đúng loại vật tư và điều kiện phòng thực hành tại nhà trường.
    </p>
  </div>
`;

const trangNguyenExamQuestions = [
  {
    q: "Nhóm mặt hàng nông sản xuất khẩu nào của Việt Nam luôn nằm trong top đầu về sản lượng và giá trị trên thị trường thế giới?",
    options: ["Gạo, cà phê Robusta, hồ tiêu, hạt điều, rau quả nhiệt đới", "Lúa mì, lúa mạch, quả oliu, củ cải đường", "Hạt yến mạch, củ cải trắng, quả việt quất", "Cây lá kim, cây cọ dầu, cỏ khô linh lăng"],
    ans: 0,
    exp: "Việt Nam có lợi thế nhiệt đới gió mùa, đứng đầu thế giới về hồ tiêu, hạt điều và top 2 về gạo, cà phê Robusta."
  },
  {
    q: "Đặc điểm bản chất mang tính cách mạng của nền Nông nghiệp 4.0 trong trồng trọt là:",
    options: ["Tích hợp dữ liệu số, cảm biến IoT, AI, tự động hóa và quản lí chuỗi giá trị", "Tăng cường tối đa sử dụng nhân công cuốc xẻng thủ công", "Bón thật nhiều phân hóa học để đạt năng suất cực đại bất chấp môi trường", "Chỉ phụ thuộc hoàn toàn vào nước mưa tự nhiên"],
    ans: 0,
    exp: "Nông nghiệp 4.0 số hóa toàn diện quy trình sản xuất qua cảm biến vi khí hậu, Internet vạn vật và tự động hóa khép kín."
  },
  {
    q: "Nhóm cây trồng nào sau đây có nguồn gốc thích nghi cần một thời kì tích lũy nhiệt độ thấp để phân hóa mầm hoa?",
    options: ["Cây á nhiệt đới (vải, nhãn, cam, quýt, chè)", "Cây nhiệt đới (chuối, thanh long, sắn, dừa)", "Cây ngập mặn (đước, bần, vẹt)", "Cây thủy sinh hồ ao (sen, súng)"],
    ans: 0,
    exp: "Cây á nhiệt đới cần trải qua thời gian lạnh mùa đông (chilling requirements) để chuyển pha từ sinh trưởng sinh dưỡng sang ra hoa."
  },
  {
    q: "Khoảng nhiệt độ tối ưu cho sinh trưởng dinh dưỡng và quang hợp của phần lớn cây trồng nông nghiệp là:",
    options: ["15 °C đến 40 °C", "0 °C đến 10 °C", "45 °C đến 60 °C", "-5 °C đến 15 °C"],
    ans: 0,
    exp: "Dưới 15°C enzyme quang hợp bị đình trệ, trên 40°C protein màng tế bào bị biến tính, khoảng 15-40°C là tối ưu nhất."
  },
  {
    q: "Trong phần rắn của đất trồng thông thường, chất vô cơ có nguồn gốc từ đá mẹ phong hóa chiếm tỉ lệ khoảng bao nhiêu?",
    options: ["Khoảng 95% phần rắn", "Khoảng 50% phần rắn", "Dưới 5% phần rắn", "Khoảng 20% phần rắn"],
    ans: 0,
    exp: "Theo số liệu SGK, chất vô cơ khoáng chiếm khoảng 95% phần rắn của đất, còn chất hữu cơ mùn thường chỉ chiếm dưới 5%."
  },
  {
    q: "Keo đất có vai trò vật lý - hóa học tối quan trọng đối với độ phì nhiêu của đất trồng vì:",
    options: ["Có lớp điện kép mang khả năng hấp phụ và trao đổi cation dinh dưỡng, giữ phân bón không bị rửa trôi", "Hòa tan hoàn toàn tạo ra thể lỏng", "Tạo ra các lỗ rỗng lớn làm mất hết nước", "Tiêu diệt toàn bộ vi sinh vật có trong đất"],
    ans: 0,
    exp: "Keo âm đất giữ các cation dinh dưỡng (K+, Ca2+, Mg2+, NH4+) trên bề mặt và nhả dần vào dung dịch đất khi rễ cây cần."
  },
  {
    q: "Khoảng pH của dung dịch đất được xếp loại là đất chua (acid) theo quy chuẩn SGK là:",
    options: ["pH dưới 6,6", "pH từ 6,8 đến 7,5", "pH trên 7,5", "pH từ 8,0 đến 10,0"],
    ans: 0,
    exp: "Đất có nồng độ H+ cao hơn OH-, giá trị pH < 6,6 được định nghĩa là đất chua, cần bón vôi để cải tạo."
  },
  {
    q: "Biện pháp hàng đầu vừa khử chua vừa giải phóng độc tố ion Al³⁺, Fe³⁺ trong đất chua là:",
    options: ["Bón vôi nông nghiệp (CaCO3, CaO) kết hợp mương tiêu thau chua", "Bón thật nhiều phân đạm ammonium sulfate gây chua", "Tưới nước mặn để cân bằng", "Phơi khô đất liên tục suốt mùa mưa"],
    ans: 0,
    exp: "Ion Ca2+ trong vôi đẩy H+ và Al3+ ra khỏi keo đất, trung hòa acid tự do và kết tủa nhôm độc thành dạng không tan."
  },
  {
    q: "Ngưỡng hàm lượng muối hòa tan trong đất để xếp vào loại đất mặn theo chuẩn kiến thức SGK Công nghệ 10 là:",
    options: ["Lớn hơn 2,56 ‰", "Lớn hơn 15 ‰", "Dưới 0,5 ‰", "Từ 0,8 ‰ đến 1,2 ‰"],
    ans: 0,
    exp: "Đất có tổng lượng muối tan vượt ngưỡng 2,56‰ gây áp suất thẩm thấu cao cản trở rễ hút nước, được xác định là đất mặn."
  },
  {
    q: "Mụn xơ dừa thô bắt buộc phải ngâm trong nước vôi (2 kg vôi/100 L nước) từ 5–7 ngày nhằm mục đích gì?",
    options: ["Khử sạch và trung hòa hợp chất chát tannin và lignin gây nghẹt rễ cây", "Làm cho mụn xơ dừa có màu đen óng ánh", "Biến xơ dừa thành phân vô cơ tan nhanh", "Diệt sạch toàn bộ các chất xơ"],
    ans: 0,
    exp: "Tannin và lignin trong vỏ dừa thô gây chát, làm se màng rễ non và ngăn cản cây hút dinh dưỡng nên phải tẩy bằng nước vôi."
  },
  {
    q: "Đá trân châu Perlite tự nhiên được nung ở nhiệt độ nào để tạo thành hạt giá thể xốp nhẹ màu trắng?",
    options: ["800 °C – 850 °C", "200 °C – 300 °C", "1 500 °C – 2 000 °C", "100 °C – 150 °C"],
    ans: 0,
    exp: "Ở dải nhiệt độ 800 - 850°C, các phân tử nước bên trong đá perlite hóa hơi làm hạt đá phồng xốp gấp hàng chục lần."
  },
  {
    q: "Hàm lượng dinh dưỡng đạm nguyên chất (% N) có trong phân đạm Urea CO(NH2)2 chuẩn là:",
    options: ["Khoảng 46% N", "Khoảng 16% N", "Khoảng 80% N", "Khoảng 25% N"],
    ans: 0,
    exp: "Phân urea là loại phân đạm có tỉ lệ nitrogen hữu hiệu cao nhất trong số các phân đạm rắn hiện nay, đạt khoảng 46% N."
  },
  {
    q: "Nhóm phân bón nào sau đây khó tan trong nước nên bắt buộc phải bón lót sâu vào đất trước khi gieo trồng?",
    options: ["Phân lân (Supephosphate, Lân nung chảy) và phân hữu cơ hoai mục", "Phân đạm urea", "Phân kali chloride (KCl)", "Phân bón lá vi lượng"],
    ans: 0,
    exp: "Phân lân và phân hữu cơ khoáng hóa chậm, cần thời gian phân giải nên phải bón lót sâu vào đáy rãnh/hố trồng."
  },
  {
    q: "Vi khuẩn nào sau đây có khả năng sống cộng sinh trong nốt sần rễ cây họ Đậu để cố định đạm từ khí trời?",
    options: ["Rhizobium / Bradyrhizobium", "Escherichia coli", "Lactobacillus bulgaricus", "Streptomyces"],
    ans: 0,
    exp: "Rhizobium cộng sinh với rễ cây họ Đậu cung cấp đạm NH4+ cho cây và nhận lại đường carbohydrate từ quang hợp."
  },
  {
    q: "Phương pháp tạo giống cây trồng nào sau đây sử dụng các tác nhân vật lí (tia phóng xạ gamma) hoặc hóa học (EMS)?",
    options: ["Gây đột biến nhân tạo", "Chọn lọc cá thể truyền thống", "Ghép mắt chữ T", "Chiết cành"],
    ans: 0,
    exp: "Tác nhân lí hóa gây đột biến làm đứt gãy hoặc thay thế cặp nucleotide trong ADN tạo ra các đột biến hình thái có lợi."
  },
  {
    q: "Hạt giống của các giống ưu thế lai F1 không được dùng làm giống tiếp cho vụ sau vì lí do khoa học nào?",
    options: ["Thế hệ F2 sẽ xảy ra hiện tượng phân ly di truyền làm giảm sút nghiêm trọng năng suất và phẩm chất", "Hạt F1 hoàn toàn bất thụ không thể nảy mầm", "Cây F2 sẽ sinh ra độc tố nguy hiểm", "Cây F2 biến thành cỏ dại"],
    ans: 0,
    exp: "Ưu thế lai bộc lộ mạnh nhất ở F1 dị hợp; sang thế hệ F2 phân ly tạo các kiểu gene đồng hợp lặn làm thoái hóa giống."
  },
  {
    q: "Yếu tố kĩ thuật mang tính quyết định để vết ghép cành liền mô và sinh trưởng thành công là:",
    options: ["Tầng sinh mô (tầng phát sinh libe-gỗ) của cành ghép và gốc ghép phải áp khít vào nhau", "Buộc thật lỏng lẻo cho thoáng khí", "Tưới thật nhiều nước trực tiếp vào vết cắt", "Để vết cắt hở phơi nắng to"],
    ans: 0,
    exp: "Tầng sinh mô là mô phân sinh phân chia tế bào liên tục; hai tầng sinh mô áp khít mới tạo được cầu nối mạch dẫn nuôi cành."
  },
  {
    q: "Mục tiêu hàng đầu của chiến lược Quản lí dịch hại tổng hợp (IPM) trên đồng ruộng là:",
    options: ["Giữ mật độ sâu bệnh dưới ngưỡng gây thiệt hại kinh tế, ưu tiên biện pháp sinh học bảo vệ môi trường", "Phun thuốc hóa học liên tục hằng ngày để tận diệt mọi loài côn trùng", "Để mặc cho sâu bọ phá hoại không cần can thiệp", "Chỉ dùng duy nhất thuốc trừ sâu cực độc"],
    ans: 0,
    exp: "IPM bảo tồn cân bằng sinh thái, coi trọng thiên địch và chỉ dùng thuốc hóa học khi mật số sâu vượt ngưỡng thiệt hại kinh tế."
  },
  {
    q: "Cơ chế tiêu diệt sâu hại của chế phẩm thuốc trừ sâu vi khuẩn Bt (Bacillus thuringiensis) là:",
    options: ["Tinh thể protein độc hòa tan trong dịch ruột kiềm làm thủng vách ruột, sâu ngừng ăn và chết sau 2–4 ngày", "Đông cứng lớp vỏ ngoài của sâu bọ", "Làm sâu bị mù mắt", "Tạo ra mùi thơm thu hút sâu đi nơi khác"],
    ans: 0,
    exp: "Endotoxin của Bt chỉ hòa tan trong ruột kiềm của ấu trùng miệng nhai làm tê liệt hệ tiêu hóa của sâu non."
  },
  {
    q: "Bệnh hại cây trồng nào sau đây do vi khuẩn gây ra trên cây có múi, lây truyền qua rầy chổng cánh và hiện chưa có thuốc đặc trị?",
    options: ["Bệnh vàng lá greening (Candidatus Liberibacter asiaticus)", "Bệnh đạo ôn lúa", "Bệnh thán thư xoài", "Bệnh đốm lá ngô"],
    ans: 0,
    exp: "Vi khuẩn greening cư trú trong bó mạch libe cây có múi, hiện chưa có thuốc đặc trị hữu hiệu, phòng bệnh bằng giống sạch là cốt lõi."
  },
  {
    q: "Nguyên lí bảo quản quả tươi trong công nghệ Khí quyển điều chỉnh (CA - Controlled Atmosphere) là:",
    options: ["Chủ động hạ nồng độ O2 (xuống 1–3%) và tăng nồng độ CO2 trong kho kín để làm chậm quá trình hô hấp của quả", "Hút sạch không khí tạo chân không tuyệt đối", "Bơm khí amoniac vào kho", "Chiếu đèn nhiệt độ 100 °C liên tục"],
    ans: 0,
    exp: "Giảm O2 và tăng CO2 kiểm soát cường độ hô hấp của quả, giữ quả tươi giòn suốt nhiều tháng mà không bị thối nhũn."
  },
  {
    q: "Tỉ lệ khối lượng chuẩn giữa quả tươi và đường cát trắng khi thực hành làm xirô quả theo SGK là:",
    options: ["1 kg quả tươi : 1 đến 1,5 kg đường cát trắng", "1 kg quả tươi : 100 g đường", "1 kg quả tươi : 10 kg đường", "5 kg quả tươi : 200 g đường"],
    ans: 0,
    exp: "Tỉ lệ 1 kg quả với 1-1.5 kg đường tạo áp suất thẩm thấu cao rút kiệt dịch quả và ức chế nấm khuẩn gây thối."
  },
  {
    q: "Trong hệ thống khí canh (Aeroponics), bộ rễ cây trồng sinh trưởng ở trạng thái nào?",
    options: ["Treo lơ lửng hoàn toàn trong khoang tối và được vòi phun sương dinh dưỡng định kì", "Ngập chìm hoàn toàn dưới đáy bể nước sâu", "Chôn chặt trong khối bê tông", "Cắm sâu dưới lớp bùn ao"],
    ans: 0,
    exp: "Khí canh giữ rễ lơ lửng trong không khí tối, giúp rễ hấp thụ tối đa oxy và dinh dưỡng dạng hạt sương áp lực."
  },
  {
    q: "Công thức phối trộn nguyên liệu chuẩn để ủ chua thức ăn thô xanh cho gia súc theo SGK gồm:",
    options: ["100 kg phụ phẩm xanh băm nhỏ : 5 kg mật rỉ đường : 0,5–1 kg muối ăn và men vi sinh", "100 kg rơm khô : 50 kg vôi bột : 10 kg thuốc trừ sâu", "1 kg cỏ : 100 kg muối ăn", "10 kg rau muống : 10 kg phân đạm urea"],
    ans: 0,
    exp: "100kg thức ăn thô xanh phối hợp 5kg rỉ mật (cung cấp đường) và 0.5-1kg muối (ức chế khuẩn thối) giúp vi khuẩn lactic lên men chua hoàn hảo."
  },
  {
    q: "Thời điểm thu hái nấm rơm (Volvariella volvacea) đạt phẩm chất ngon ngọt, chắc thịt và dinh dưỡng tối đa là:",
    options: ["Khi quả thể nấm đạt giai đoạn hình trứng tròn căng, trước khi màng bao nấm nở dù", "Khi nấm đã nở to bung xòe hết cỡ hình chiếc ô", "Khi nấm đã héo khô và rữa đen", "Khi nấm vừa mới nhú sợi tơ màu trắng"],
    ans: 0,
    exp: "Nấm rơm ở giai đoạn búp hình trứng chứa hàm lượng acid amin, đường khử cao nhất và kết cấu thịt nấm giòn ngọt nhất."
  }
];

module.exports = { quickLookupTable, editorialNotes, trangNguyenExamQuestions };
