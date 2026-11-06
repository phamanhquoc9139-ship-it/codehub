// scratch/lsdl8_exact_geo_and_topics.js
// Địa lí 8 (Bài 1 - 12) và 2 Chủ đề chung chuẩn nội dung SGK Kết nối tri thức với cuộc sống

module.exports = [
  // --- ĐỊA LÍ BÀI 1 ĐẾN 12 ---
  {
    id: "dl-1",
    unitNumber: 20,
    type: "geography",
    chapter: "Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
    title: "Bài 1. Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Xác định vị trí, tọa độ cực phần đất liền, 3 bộ phận lãnh thổ (đất, biển, trời), chiều dài bờ biển 3.260 km, diện tích 331 nghìn km²; ảnh hưởng của vị trí địa lí đối với thiên nhiên và kinh tế.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Việt Nam nằm ở rìa phía đông bán đảo Đông Dương, gần trung tâm Đông Nam Á, trong khu vực nội chí tuyến Bắc bán cầu và gắn với Biển Đông.</p>
        <p>• Phần đất liền kéo dài theo chiều Bắc–Nam; điểm cực Bắc khoảng $23^\circ 23'\text{B}$, cực Nam khoảng $8^\circ 34'\text{B}$, cực Tây khoảng $102^\circ 09'\text{Đ}$, cực Đông khoảng $109^\circ 28'\text{Đ}$ (theo tọa độ/địa danh trong SGK).</p>
        <p>• Lãnh thổ gồm vùng đất (đất liền và đảo), vùng biển và vùng trời; diện tích đất liền theo sách khoảng 331 nghìn $\text{km}^2$, bờ biển dài khoảng $3.260\text{ km}$. Biên giới đất liền tiếp giáp Trung Quốc, Lào và Campuchia.</p>
        <p>• Vùng biển Việt Nam thuộc Biển Đông; các quần đảo Hoàng Sa và Trường Sa có vị trí quan trọng về chủ quyền, quốc phòng, giao thông và tài nguyên.</p>
        <p>• <strong>Ảnh hưởng:</strong> Thiên nhiên nhiệt đới gió mùa, chịu ảnh hưởng của biển; tài nguyên và sinh vật đa dạng; thuận lợi giao lưu đường biển/đường bộ và phát triển kinh tế biển; đồng thời phải ứng phó thiên tai, bão, xâm nhập mặn, tranh chấp và bảo vệ chủ quyền.</p>
        <div class="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200">
          <strong>Lưu ý kĩ năng:</strong> Khi dùng bản đồ, căn cứ lưới kinh/vĩ tuyến, chú giải và phạm vi lãnh thổ; số tỉnh/thành trong bảng của sách phản ánh thời điểm biên soạn bản đồ, cần kiểm tra lại nếu dùng cho tra cứu hiện hành.
        </div>
      </div>
    `,
    commonMistakes: "Tránh nhầm tọa độ điểm cực Đông (109°28'Đ) với các tỉnh lân cận; cực Đông nằm tại Khánh Hòa.",
    quiz: {
      q: "Điểm cực Bắc trên phần đất liền của nước ta nằm ở vĩ độ nào theo SGK?",
      options: [
        "23°23'B",
        "8°34'B",
        "102°09'Đ",
        "109°28'Đ"
      ],
      ans: 0,
      expl: "Điểm cực Bắc phần đất liền nước ta ở vĩ độ khoảng 23°23'B (xã Lũng Cú, Đồng Văn, Hà Giang)."
    }
  },
  {
    id: "dl-2",
    unitNumber: 21,
    type: "geography",
    chapter: "Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
    title: "Bài 2. Địa hình Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nắm vững tỉ lệ 3/4 đồi núi (chủ yếu núi thấp), 1/4 đồng bằng; 2 hướng chính (Tây Bắc - Đông Nam và vòng cung); tính phân bậc; tác động đối với kinh tế và dân cư.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Địa hình đồi núi chiếm khoảng 3/4 diện tích đất liền, nhưng chủ yếu là đồi núi thấp; đồng bằng chiếm khoảng 1/4.</p>
        <p>• Hai hướng chính: Tây Bắc–Đông Nam và hướng vòng cung (thể hiện rõ ở vùng núi Đông Bắc). Địa hình có tính phân bậc và thấp dần từ nội địa ra biển.</p>
        <p>• <strong>Các khu vực:</strong> Đông Bắc, Tây Bắc, Trường Sơn Bắc, Trường Sơn Nam; các đồng bằng sông Hồng, sông Cửu Long, đồng bằng ven biển miền Trung; vùng biển và thềm lục địa.</p>
        <p>• Địa hình nhiệt đới ẩm gió mùa bị xâm thực, bồi tụ mạnh; có karst, cao nguyên bazan, thung lũng sông, cồn cát và bãi bồi.</p>
        <p>• <strong>Tác động:</strong> Ảnh hưởng phân bố dân cư, giao thông, nông nghiệp, thủy điện, khoáng sản và du lịch; miền núi dễ sạt lở/lũ quét, đồng bằng có nguy cơ ngập và xâm nhập mặn.</p>
        <div class="p-2.5 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200">
          <strong>Kĩ năng bản đồ:</strong> Đọc bản đồ địa hình bằng màu độ cao, đường bình độ, hướng sườn/sông và chú giải; xác định vùng núi/đồng bằng trước khi giải thích phân bố kinh tế.
        </div>
      </div>
    `,
    commonMistakes: "Tránh nhầm 3/4 diện tích đồi núi là núi cao; thực chất chủ yếu là đồi núi thấp dưới 1000m.",
    quiz: {
      q: "Hai hướng chính của địa hình Việt Nam là:",
      options: [
        "Bắc - Nam và Đông - Tây",
        "Tây Bắc - Đông Nam và hướng vòng cung",
        "Đông Bắc - Tây Nam và hướng vòng cung",
        "Tây - Đông và vòng cung"
      ],
      ans: 1,
      expl: "Địa hình nước ta chạy theo hai hướng chính là hướng Tây Bắc - Đông Nam và hướng vòng cung."
    }
  },
  {
    id: "dl-3",
    unitNumber: 22,
    type: "geography",
    chapter: "Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
    title: "Bài 3. Khoáng sản Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu tính đa dạng khoáng sản; sự phân bố không đều (than Quảng Ninh, dầu khí thềm lục địa phía Nam, bô-xít Tây Nguyên, a-pa-tít Lào Cai...); tác động khai thác và nguyên tắc sử dụng hợp lí.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Việt Nam có tài nguyên khoáng sản đa dạng do lịch sử địa chất lâu dài; có khoáng sản năng lượng, kim loại, phi kim và vật liệu xây dựng.</p>
        <p>• <strong>Phân bố không đều:</strong> Than tập trung ở Quảng Ninh; dầu khí ở thềm lục địa phía Nam; bauxite ở Tây Nguyên; apatit ở Lào Cai; sắt, đồng, thiếc, đá vôi phân bố theo các vùng địa chất.</p>
        <p>• Khoáng sản có vai trò cung cấp nguyên liệu/năng lượng, thúc đẩy công nghiệp, việc làm và xuất khẩu; nhiều loại là tài nguyên hữu hạn, trữ lượng và chất lượng khác nhau.</p>
        <p>• Khai thác thiếu quy hoạch gây cạn kiệt, sạt lở, ô nhiễm nước/đất/không khí, ảnh hưởng hệ sinh thái và cộng đồng.</p>
        <p>• <strong>Sử dụng hợp lí:</strong> Điều tra trữ lượng; khai thác tiết kiệm, công nghệ phù hợp; chế biến sâu/tái chế; phục hồi môi trường sau khai thác; tuân thủ quy định và giám sát tác động.</p>
      </div>
    `,
    commonMistakes: "Tránh hiểu khoáng sản là tài nguyên vô tận; khoáng sản là tài nguyên không thể phục hồi nên phải sử dụng tiết kiệm và chế biến sâu.",
    quiz: {
      q: "Bể than đá có trữ lượng lớn nhất và chất lượng cao nhất ở nước ta tập trung ở tỉnh nào?",
      options: [
        "Thái Nguyên",
        "Quảng Ninh",
        "Lào Cai",
        "Hà Tĩnh"
      ],
      ans: 1,
      expl: "Than đá tập trung nhiều nhất ở bể than Quảng Ninh."
    }
  },
  {
    id: "dl-4",
    unitNumber: 23,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 4. Khí hậu Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Chứng minh tính chất nhiệt đới ẩm gió mùa (nhiệt độ > 20°C, mưa ẩm dồi dào, gió mùa đông và gió mùa hạ); sự phân hóa khí hậu Bắc - Nam, Đông - Tây, ven biển/nội địa và độ cao; tác động thực tế.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Khí hậu mang tính <strong>nhiệt đới ẩm gió mùa</strong>: Nhiệt độ trung bình năm phần lớn trên 20°C (trừ vùng núi cao), lượng mưa và độ ẩm tương đối lớn; có gió mùa và chịu ảnh hưởng địa hình/biển.</p>
        <p>• <strong>Gió mùa mùa đông:</strong> Chủ yếu gió mùa Đông Bắc, ảnh hưởng rõ ở miền Bắc; đầu mùa thường lạnh khô, cuối mùa lạnh ẩm/mưa phùn; dãy Bạch Mã là ranh giới tương đối về ảnh hưởng gió mùa đông.</p>
        <p>• <strong>Gió mùa mùa hạ:</strong> Gió mùa Tây Nam và các hướng gió liên quan mang ẩm, gây mưa rộng; hiệu ứng phơn có thể làm khô nóng một số khu vực Trung Bộ.</p>
        <p>• <strong>Khí hậu phân hóa</strong> theo Bắc–Nam (miền Bắc có mùa đông lạnh hơn; miền Nam nóng quanh năm, hai mùa mưa–khô rõ); theo Đông–Tây, ven biển/nội địa và theo độ cao.</p>
        <p>• Phân hóa ảnh hưởng mùa vụ nông nghiệp, cơ cấu cây trồng, sinh hoạt, du lịch, năng lượng và nguy cơ bão/hạn/lũ.</p>
      </div>
    `,
    commonMistakes: "Tránh nhầm ranh giới ngăn gió mùa Đông Bắc: dãy Bạch Mã là ranh giới tự nhiên tương đối phía nam của gió mùa mùa đông.",
    quiz: {
      q: "Dãy núi nào là ranh giới tự nhiên ngăn cản tương đối ảnh hưởng của gió mùa Đông Bắc xuống phía Nam nước ta?",
      options: [
        "Dãy Hoàng Liên Sơn",
        "Dãy Hoành Sơn",
        "Dãy Bạch Mã",
        "Dãy Trường Sơn Nam"
      ],
      ans: 2,
      expl: "Dãy Bạch Mã đâm ngang ra biển ngăn cản gió mùa Đông Bắc thổi sâu vào phương Nam."
    }
  },
  {
    id: "dl-5",
    unitNumber: 24,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 5. Thực hành: Đọc biểu đồ khí hậu",
    badge: "Kĩ năng Địa lí 8",
    objective: "Thực hiện thành thạo 5 bước đọc biểu đồ khí hậu (xác định trạm/trục, đọc nhiệt độ Tmax/Tmin và tính biên độ nhiệt năm, tính tổng lượng mưa, xác định mùa mưa mùa khô, nhận xét kiểu khí hậu).",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>Đọc tên/trạm và đơn vị:</strong> Xác định trục ngang là tháng (1 - 12), cột là lượng mưa (mm), đường là nhiệt độ (°C) theo chú giải.</li>
          <li><strong>Đọc nhiệt độ:</strong> Đọc nhiệt độ cao nhất/thấp nhất và tháng xuất hiện; tính <em>biên độ nhiệt năm = nhiệt độ cao nhất trừ thấp nhất</em>.</li>
          <li><strong>Tính lượng mưa:</strong> Tính tổng lượng mưa năm bằng tổng 12 tháng; xác định tháng/mùa mưa và mùa khô theo biểu đồ.</li>
          <li><strong>So sánh tương quan:</strong> So sánh đường nhiệt và cột mưa để nhận xét tính mùa, mối liên hệ nhiệt–mưa; dùng số liệu cụ thể làm chứng cứ.</li>
          <li><strong>Rút ra kết luận:</strong> Từ biểu đồ, nhận xét kiểu khí hậu ở mức phù hợp; không suy rộng từ một trạm đại diện cho toàn bộ vùng.</li>
        </ol>
      </div>
    `,
    commonMistakes: "Tránh suy rộng kết quả từ một trạm khí tượng đơn lẻ ra toàn bộ vùng khí hậu rộng lớn.",
    quiz: {
      q: "Công thức tính biên độ nhiệt độ năm của một trạm khí tượng là gì?",
      options: [
        "Nhiệt độ tháng cao nhất cộng nhiệt độ tháng thấp nhất",
        "Nhiệt độ tháng cao nhất trừ đi nhiệt độ tháng thấp nhất",
        "Tổng nhiệt độ 12 tháng chia cho 12",
        "Nhiệt độ tháng 7 trừ nhiệt độ tháng 1"
      ],
      ans: 1,
      expl: "Biên độ nhiệt độ năm = Nhiệt độ tháng cao nhất - Nhiệt độ tháng thấp nhất."
    }
  },
  {
    id: "dl-6",
    unitNumber: 25,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 6. Thủy văn Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu đặc điểm mạng lưới sông ngòi dày đặc; chế độ nước theo mùa; hệ thống sông Hồng, sông Cửu Long, sông miền Trung; vai trò của hồ đầm và nước ngầm.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Mạng lưới sông ngòi dày đặc; nhiều sông ngắn, dốc ở miền Trung và các lưu vực miền núi; hai hệ thống lớn là sông Hồng và sông Cửu Long.</p>
        <p>• Sông có lượng nước và phù sa lớn nhưng chế độ theo mùa: mùa lũ thường trùng mùa mưa, mùa cạn kéo dài; thời gian lũ khác nhau giữa Bắc Bộ, Trung Bộ và Nam Bộ.</p>
        <p>• Hệ thống sông Hồng có lũ mùa hạ, biến động mạnh; sông Cửu Long chịu lũ từ thượng nguồn và ảnh hưởng thủy triều; nhiều sông miền Trung lũ lên nhanh.</p>
        <p>• Hồ tự nhiên, hồ chứa, nước ngầm và vùng đất ngập nước bổ sung nguồn nước và điều tiết dòng chảy; sử dụng nước cần cân nhắc theo lưu vực và mùa.</p>
        <p>• <strong>Tác động:</strong> Cung cấp nước, phù sa, thủy sản, giao thông và thủy điện; đồng thời gây lũ, hạn, sạt lở, xâm nhập mặn và thiếu nước nếu quản lí kém.</p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn thời gian mùa lũ: mùa lũ ở sông ngòi Bắc Bộ và Nam Bộ diễn ra vào mùa hạ, trong khi sông ngòi Trung Bộ lũ dồn vào các tháng thu đông.",
    quiz: {
      q: "Hai hệ thống sông lớn nhất và có vai trò quan trọng bậc nhất đối với hai đồng bằng châu thổ nước ta là:",
      options: [
        "Sông Mã và Sông Cả",
        "Sông Hồng và Sông Cửu Long",
        "Sông Đồng Nai và Sông Thu Bồn",
        "Sông Thái Bình và Sông Ba"
      ],
      ans: 1,
      expl: "Sông Hồng và Sông Cửu Long là hai hệ thống sông lớn nhất bồi đắp hai vựa lúa lớn nhất nước ta."
    }
  },
  {
    id: "dl-7",
    unitNumber: 26,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 7. Vai trò của tài nguyên khí hậu và tài nguyên nước đối với phát triển kinh tế – xã hội",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Phân tích giá trị của tài nguyên khí hậu và nước cho nông, lâm, thủy sản, năng lượng, du lịch; yêu cầu sử dụng tổng hợp và tiết kiệm nguồn nước.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Khí hậu và nước là nguồn lực cho nông nghiệp, lâm nghiệp, thủy sản, công nghiệp, năng lượng, giao thông, du lịch và sinh hoạt.</p>
        <p>• Khí hậu nóng ẩm, mùa mưa/mùa khô và phân hóa vùng tạo điều kiện cho cơ cấu cây trồng đa dạng nhưng cũng làm sản xuất phụ thuộc thời vụ, tưới tiêu, bão/lũ/hạn.</p>
        <p>• Tài nguyên nước mặt/nước ngầm hỗ trợ tưới, thủy điện, công nghiệp và đô thị; lượng nước, chất lượng, mùa vụ và phân bố không đều đặt ra yêu cầu điều tiết, bảo vệ lưu vực.</p>
        <p>• <strong>Cần sử dụng tổng hợp và tiết kiệm:</strong> Bảo vệ rừng đầu nguồn, hồ/đầm lầy, giảm ô nhiễm, phối hợp liên tỉnh/lưu vực, dự trữ và phân bổ nước; cân bằng nhu cầu sinh hoạt, sản xuất và hệ sinh thái.</p>
      </div>
    `,
    commonMistakes: "Tránh coi việc khai thác tài nguyên nước chỉ phục vụ một ngành đơn lẻ (như chỉ làm thủy điện); cần kết hợp đa mục tiêu cắt lũ, tưới tiêu và cấp nước sinh hoạt.",
    quiz: {
      q: "Giải pháp quan trọng hàng đầu trong việc quản lí và sử dụng bền vững tài nguyên nước ở các lưu vực sông là gì?",
      options: [
        "Xây dựng đập chắn kín toàn bộ cửa sông",
        "Sử dụng tổng hợp và tiết kiệm, bảo vệ rừng đầu nguồn và giảm ô nhiễm",
        "Khai thác cạn kiệt nước ngầm để tưới cây",
        "Chỉ ưu tiên cấp nước cho công nghiệp hóa chất"
      ],
      ans: 1,
      expl: "Sử dụng tổng hợp và tiết kiệm nước gắn với bảo vệ rừng đầu nguồn là yêu cầu cấp thiết."
    }
  },
  {
    id: "dl-8",
    unitNumber: 27,
    type: "geography",
    chapter: "Chương 2. Khí hậu và thủy văn Việt Nam",
    title: "Bài 8. Tác động của biến đổi khí hậu đối với tự nhiên Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu các biểu hiện của biến đổi khí hậu; tác động đến khí hậu, nguồn nước, đất, sinh vật; các vùng dễ bị tổn thương (ĐBSCL, ven biển, miền núi); phân biệt giải pháp thích ứng và giảm nhẹ.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Biến đổi khí hậu thể hiện qua xu hướng nhiệt độ tăng, thay đổi lượng/mùa mưa, mực nước biển dâng và gia tăng/biến đổi một số hiện tượng cực đoan.</p>
        <p>• <strong>Tác động đến tự nhiên:</strong> Đến <em>khí hậu</em>: nắng nóng, hạn, mưa lớn, bão và thời tiết bất thường; đến <em>nước</em>: lũ, thiếu nước, xâm nhập mặn; đến <em>địa hình/đất</em>: xói lở bờ biển, sạt lở, thoái hóa đất; đến <em>hệ sinh thái</em>: thay đổi sinh cảnh, suy giảm đa dạng sinh học.</p>
        <p>• Đồng bằng sông Cửu Long và vùng ven biển dễ bị ảnh hưởng bởi nước biển dâng, xâm nhập mặn/sụt lún; miền núi chịu nguy cơ lũ quét/sạt lở; đô thị đối mặt ngập và nắng nóng.</p>
        <p>• <strong>Thích ứng:</strong> Cảnh báo sớm, quy hoạch an toàn, công trình/giải pháp dựa vào tự nhiên, giống cây/vật nuôi phù hợp, tiết kiệm và trữ nước, bảo vệ rừng/ngập mặn.</p>
        <p>• <strong>Giảm nhẹ:</strong> Tiết kiệm năng lượng, tăng năng lượng sạch, giao thông ít phát thải, bảo vệ/tăng độ che phủ rừng và quản lí chất thải.</p>
        <div class="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200">
          <strong>Lưu ý:</strong> Phân biệt giảm nhẹ phát thải khí nhà kính với thích ứng trước tác động của biến đổi khí hậu.
        </div>
      </div>
    `,
    commonMistakes: "Tránh nhầm giải pháp giảm nhẹ với giải pháp thích ứng: giảm nhẹ là giảm phát thải khí nhà kính; thích ứng là điều chỉnh cuộc sống để sống chung giảm thiểu rủi ro.",
    quiz: {
      q: "Vùng nào ở nước ta chịu tác động nặng nề nhất của hiện tượng nước biển dâng và xâm nhập mặn do biến đổi khí hậu?",
      options: [
        "Vùng núi Tây Bắc",
        "Đồng bằng sông Cửu Long",
        "Vùng Trung du Bắc Bộ",
        "Vùng Tây Nguyên"
      ],
      ans: 1,
      expl: "Đồng bằng sông Cửu Long có địa hình thấp trũng nên chịu ảnh hưởng sâu sắc nhất của nước biển dâng và xâm nhập mặn."
    }
  },
  {
    id: "dl-9",
    unitNumber: 28,
    type: "geography",
    chapter: "Chương 3. Thổ nhưỡng và sinh vật Việt Nam",
    title: "Bài 9. Thổ nhưỡng Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu các nhân tố hình thành đất; đặc điểm đất feralit và đất phù sa; các nguyên nhân thoái hóa đất và biện pháp cải tạo bảo vệ.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Thổ nhưỡng hình thành do đá mẹ, khí hậu, sinh vật, địa hình, thời gian và hoạt động con người; sự khác nhau giữa các yếu tố tạo nên các loại đất và đặc tính riêng.</p>
        <p>• <strong>Đất feralit</strong> chiếm diện tích lớn ở miền đồi núi; thường chua, nghèo mùn/dinh dưỡng nếu bị rửa trôi, nhưng có thể thích hợp cây công nghiệp/cây ăn quả khi sử dụng và cải tạo hợp lí.</p>
        <p>• <strong>Đất phù sa</strong> phân bố ở đồng bằng sông Hồng, sông Cửu Long và các đồng bằng ven biển; tương đối màu mỡ, thuận lợi trồng lúa/hoa màu nhưng có nơi bị nhiễm mặn/phèn.</p>
        <p>• Đất mùn núi cao và các nhóm đất khác phân bố theo độ cao, khí hậu, đá mẹ và chế độ nước.</p>
        <p>• <strong>Thoái hóa đất:</strong> Xói mòn/rửa trôi, bạc màu, mặn hóa, phèn hóa, ô nhiễm, sạt lở; nguyên nhân gồm phá rừng, canh tác không hợp lí, tưới tiêu kém và hoạt động sản xuất.</p>
        <p>• <strong>Biện pháp:</strong> Bảo vệ rừng và đất dốc, canh tác theo đường đồng mức/bậc thang, luân canh, tăng hữu cơ, cải tạo đất phù hợp, quản lí nước và hạn chế ô nhiễm.</p>
      </div>
    `,
    commonMistakes: "Tránh nhầm đất feralit và đất phù sa: đất feralit ở miền đồi núi dốc, đất phù sa ở các đồng bằng bằng phẳng.",
    quiz: {
      q: "Nhóm đất nào chiếm diện tích lớn nhất ở miền đồi núi nước ta và rất thích hợp trồng cây công nghiệp lâu năm?",
      options: [
        "Đất phù sa",
        "Đất feralit",
        "Đất mùn núi cao",
        "Đất cát ven biển"
      ],
      ans: 1,
      expl: "Đất feralit chiếm diện tích lớn nhất ở miền đồi núi nước ta."
    }
  },
  {
    id: "dl-10",
    unitNumber: 29,
    type: "geography",
    chapter: "Chương 3. Thổ nhưỡng và sinh vật Việt Nam",
    title: "Bài 10. Sinh vật Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Chứng minh sự đa dạng sinh học cao (loài, gen, hệ sinh thái); vai trò của rừng và biển; nguy cơ suy giảm và các biện pháp bảo tồn.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Việt Nam có đa dạng sinh học cao về loài, nguồn gen và hệ sinh thái; vị trí nhiệt đới gió mùa, địa hình/khí hậu phân hóa và lịch sử sinh vật góp phần tạo nên sự phong phú.</p>
        <p>• <strong>Hệ sinh thái</strong> gồm rừng nhiệt đới, rừng núi cao, rừng ngập mặn, đất ngập nước, sông hồ, biển và đảo; sinh vật phân bố theo khí hậu, độ cao và môi trường.</p>
        <p>• Rừng cung cấp gỗ/lâm sản, giữ đất và nước, điều hòa khí hậu; sinh vật biển hỗ trợ thủy sản, du lịch và cân bằng sinh thái.</p>
        <p>• <strong>Nguy cơ suy giảm:</strong> Mất/chia cắt sinh cảnh, khai thác và buôn bán trái phép, ô nhiễm, cháy rừng, loài ngoại lai và biến đổi khí hậu.</p>
        <p>• <strong>Bảo tồn:</strong> Vườn quốc gia/khu bảo tồn, bảo vệ loài quý hiếm và sinh cảnh, phục hồi rừng, khai thác bền vững, kiểm soát buôn bán động vật hoang dã và nâng cao nhận thức cộng đồng.</p>
      </div>
    `,
    commonMistakes: "Tránh hiểu lầm đa dạng sinh học chỉ là số lượng loài cây; đa dạng sinh học gồm 3 cấp độ: hệ sinh thái, thành phần loài và nguồn gen.",
    quiz: {
      q: "Biện pháp quan trọng hàng đầu trong việc bảo vệ các loài động thực vật quý hiếm và sinh cảnh tự nhiên ở nước ta là:",
      options: [
        "Khai thác tối đa rừng tự nhiên",
        "Xây dựng và quản lí hệ thống các vườn quốc gia, khu bảo tồn thiên nhiên",
        "Nhập khẩu nhiều loài sinh vật ngoại lai",
        "Chuyển toàn bộ rừng tự nhiên sang trồng cây ăn quả"
      ],
      ans: 1,
      expl: "Thành lập và bảo vệ hệ thống các vườn quốc gia, khu bảo tồn thiên nhiên là giải pháp cốt lõi."
    }
  },
  {
    id: "dl-11",
    unitNumber: 30,
    type: "geography",
    chapter: "Chương 4. Biển đảo Việt Nam",
    title: "Bài 11. Phạm vi Biển Đông, vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu phạm vi Biển Đông; các vùng biển theo UNCLOS (nội thủy, lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế, thềm lục địa); đường bờ biển 3.260 km; Hoàng Sa, Trường Sa; tự nhiên biển và lưu ý đọc bản đồ.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Biển Đông là biển nửa kín ở rìa tây Thái Bình Dương, nối với các biển/đại dương qua eo biển; nhiều quốc gia có bờ biển/đảo trong khu vực.</p>
        <p>• <strong>Vùng biển Việt Nam</strong> gồm nội thủy, lãnh hải, vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế và thềm lục địa theo quy định pháp luật quốc tế/Việt Nam; các vùng có quy chế và quyền chủ quyền/quyền tài phán khác nhau.</p>
        <p>• Bờ biển Việt Nam dài khoảng $3.260\text{ km}$; có nhiều đảo/quần đảo, vịnh, đầm phá và bãi biển. Hoàng Sa và Trường Sa có vị trí quan trọng về địa lí, lịch sử, kinh tế và quốc phòng.</p>
        <p>• <strong>Tự nhiên:</strong> Biển nhiệt đới gió mùa; nhiệt độ nước tương đối cao; thủy triều và dòng biển biến đổi theo vùng/mùa; bão, áp thấp nhiệt đới, sóng lớn và xói lở là các nguy cơ.</p>
        <p>• <strong>Địa hình đáy biển</strong> đa dạng: Thềm lục địa, sườn lục địa, bồn trũng, đảo/quần đảo và rãnh sâu; hình dạng đáy biển và dòng biển tác động hệ sinh thái, hàng hải và khai thác.</p>
        <div class="p-2.5 bg-sky-50 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-800 text-sky-950 dark:text-sky-200">
          <strong>Lưu ý kĩ năng:</strong> Khi đọc bản đồ Biển Đông, phân biệt đường bờ, đảo/quần đảo, đường cơ sở, các vùng biển và chú giải; không đồng nhất mọi vùng biển với lãnh hải.
        </div>
      </div>
    `,
    commonMistakes: "Tránh đồng nhất mọi vùng biển thuộc quyền tài phán của Việt Nam với vùng lãnh hải 12 hải lí.",
    quiz: {
      q: "Khi đọc bản đồ Biển Đông, cần lưu ý điều gì về mặt pháp lí để không bị nhầm lẫn?",
      options: [
        "Đồng nhất mọi vùng biển với lãnh hải",
        "Phân biệt rõ đường bờ, đường cơ sở, các vùng biển khác nhau và chú giải",
        "Bỏ qua quy chế của vùng đặc quyền kinh tế",
        "Xem vùng trời không thuộc phạm vi chủ quyền"
      ],
      ans: 1,
      expl: "Cần phân biệt rõ ràng giữa đường bờ, đường cơ sở, lãnh hải 12 hải lí và các vùng biển khác."
    }
  },
  {
    id: "dl-12",
    unitNumber: 31,
    type: "geography",
    chapter: "Chương 4. Biển đảo Việt Nam",
    title: "Bài 12. Môi trường và tài nguyên biển đảo Việt Nam",
    badge: "Địa lí Tự nhiên Việt Nam",
    objective: "Nêu thành phần môi trường biển; các nguồn tài nguyên (thủy sản, dầu khí, muối, du lịch, hàng hải, năng lượng biển); nguyên nhân suy thoái và các biện pháp bảo vệ phát triển bền vững.",
    exactText: `
      <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>• Môi trường biển gồm nước biển, đáy biển, bờ biển, đảo, sinh vật và các hệ sinh thái liên hệ; chất lượng môi trường phụ thuộc tự nhiên và hoạt động con người.</p>
        <p>• <strong>Tài nguyên:</strong> Sinh vật biển/thủy sản; dầu khí, khoáng sản; muối; cảnh quan/du lịch; giao thông hàng hải; tiềm năng gió, sóng và năng lượng biển.</p>
        <p>• <strong>Suy thoái/ô nhiễm</strong> do rác nhựa, nước thải, tràn dầu, khai thác quá mức, phá rừng ngập mặn/rạn san hô, du lịch thiếu kiểm soát và tác động khí hậu; hệ quả ảnh hưởng sinh kế, sức khỏe, đa dạng sinh học và an toàn bờ biển.</p>
        <p>• <strong>Bảo vệ:</strong> Kiểm soát nguồn thải, giảm nhựa, xử lí nước thải, phục hồi hệ sinh thái, bảo vệ khu sinh sản và loài quý hiếm, khai thác theo hạn mức/mùa, du lịch có trách nhiệm, giám sát và phối hợp giữa cộng đồng–doanh nghiệp–nhà nước.</p>
        <p>• Bảo vệ chủ quyền và phát triển bền vững cần đi cùng bảo vệ môi trường, sử dụng tài nguyên hợp lí, bảo đảm sinh kế và tuân thủ pháp luật.</p>
      </div>
    `,
    commonMistakes: "Tránh cho rằng việc bảo vệ môi trường biển chỉ là trách nhiệm của ngư dân; đây là trách nhiệm tổng hợp của cả cộng đồng, doanh nghiệp du lịch, công nghiệp và quản lí nhà nước.",
    quiz: {
      q: "Nguyên nhân chính dẫn đến sự suy thoái môi trường và suy giảm nguồn lợi sinh vật biển hiện nay là gì?",
      options: [
        "Do nhiệt độ nước biển luôn ấm quanh năm",
        "Rác thải nhựa, nước thải chưa xử lí, tràn dầu và đánh bắt khai thác quá mức",
        "Do hoạt động làm muối ở ven biển",
        "Do chế độ nhật triều biến đổi tự nhiên"
      ],
      ans: 1,
      expl: "Rác thải nhựa, nước thải ô nhiễm, sự cố tràn dầu và khai thác tận diệt là nguyên nhân chính."
    }
  },

  // --- PHẦN III: 2 CHỦ ĐỀ CHUNG ---
  {
    id: "cd-1",
    unitNumber: 32,
    type: "common",
    chapter: "Chủ đề chung 1",
    title: "Chủ đề chung 1. Văn minh châu thổ sông Hồng và sông Cửu Long",
    badge: "Chủ đề tích hợp Sử - Địa",
    objective: "So sánh quá trình hình thành, đặc điểm châu thổ, cách cư trú sản xuất, ứng xử với sông nước và những thách thức môi trường hiện nay giữa châu thổ sông Hồng và sông Cửu Long.",
    exactText: `
      <div class="space-y-4 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1.5">
          <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-water text-amber-500"></i> Quá trình hình thành và đặc điểm châu thổ
          </h5>
          <p>• Châu thổ hình thành do sông mang phù sa bồi đắp ở vùng cửa sông/ven biển trong thời gian dài; địa hình thấp, tương đối bằng phẳng, mạng lưới sông/kênh rạch dày.</p>
          <p>• <strong>Châu thổ sông Hồng:</strong> Diện tích nhỏ hơn, hình thành trong điều kiện sông có đê; cư dân lâu đời, mật độ cao, hệ thống đê điều và thủy lợi quan trọng.</p>
          <p>• <strong>Châu thổ sông Cửu Long:</strong> Diện tích rộng, địa hình thấp, nhiều sông nhánh/kênh rạch; chế độ lũ, thủy triều và xâm nhập mặn ảnh hưởng mạnh; có vùng đất phèn/mặn và sinh thái ngập nước.</p>
        </div>

        <div class="p-3.5 bg-teal-50/70 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1.5">
          <h5 class="font-bold text-teal-900 dark:text-teal-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-landmark text-teal-500"></i> Cư trú, sản xuất và văn minh sông nước
          </h5>
          <p>• Đất phù sa, nguồn nước và giao thông sông tạo nền tảng cho trồng lúa, vườn cây, nuôi thủy sản, làng nghề và giao thương.</p>
          <p>• Văn minh sông Hồng gắn với cư trú lâu đời, canh tác lúa nước, trị thủy/đắp đê, làng xã và di sản văn hóa; văn minh sông Cửu Long gắn với khai khẩn vùng đất mới, sông rạch, chợ/đô thị ven sông, giao lưu nhiều cộng đồng.</p>
          <p>• Cư dân thích nghi với nước qua đê, kênh mương, cống, nhà cửa/sinh hoạt phù hợp mùa lũ, lịch mùa vụ, phương tiện đường thủy và tri thức bản địa.</p>
          <p>• <strong>Thách thức hiện nay:</strong> Lũ/ngập, sụt lún, xâm nhập mặn, sạt lở, thiếu phù sa, biến đổi khí hậu và cạnh tranh nguồn nước; giải pháp cần phối hợp theo lưu vực, bảo vệ hệ sinh thái và sinh kế.</p>
          <div class="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-teal-200 dark:border-teal-900">
            <strong>Tiêu chí so sánh:</strong> So sánh hai châu thổ theo: <em>diện tích/địa hình, mạng sông, chế độ nước, cách cư trú–sản xuất, công trình trị thủy, văn hóa và thách thức</em>.
          </div>
        </div>
      </div>
    `,
    commonMistakes: "Tránh đánh giá một bên tốt hơn bên kia; mỗi châu thổ có điều kiện tự nhiên riêng dẫn đến cách ứng xử văn hóa thích nghi khác nhau (sông Hồng đắp đê ngăn lũ, sông Cửu Long thích nghi sống chung với lũ).",
    quiz: {
      q: "Điểm khác biệt nổi bật về công trình ứng xử với sông nước giữa cư dân châu thổ sông Hồng và châu thổ sông Cửu Long là gì?",
      options: [
        "Sông Hồng quai đê trị thủy bảo vệ làng; sông Cửu Long không đắp đê mà đào kênh rạch thích nghi mùa lũ",
        "Cả hai châu thổ đều xây dựng hệ thống đê điều khổng lồ ngăn lũ",
        "Sông Hồng không có hệ thống thủy nông",
        "Sông Cửu Long di dời hoàn toàn khỏi vùng ngập nước"
      ],
      ans: 0,
      expl: "Văn minh sông Hồng gắn với trị thủy đắp đê ngăn lũ, còn văn minh sông Cửu Long gắn với mạng lưới kênh rạch thích nghi con nước lũ."
    }
  },
  {
    id: "cd-2",
    unitNumber: 33,
    type: "common",
    chapter: "Chủ đề chung 2",
    title: "Chủ đề chung 2. Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
    badge: "Chủ đề tích hợp Sử - Địa",
    objective: "Phân tích ý nghĩa Biển Đông; cơ sở lịch sử thực thi chủ quyền Hoàng Sa, Trường Sa; cơ sở pháp lí UNCLOS 1982; thách thức và trách nhiệm công dân.",
    exactText: `
      <div class="space-y-4 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <div class="p-3.5 bg-sky-50/70 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-800 space-y-1.5">
          <h5 class="font-bold text-sky-900 dark:text-sky-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-anchor text-sky-500"></i> Ý nghĩa của Biển Đông và các vùng biển Việt Nam
          </h5>
          <p>• Biển Đông có vị trí chiến lược trên tuyến giao thông quốc tế; giàu tiềm năng thủy sản, dầu khí, khoáng sản, du lịch và năng lượng biển.</p>
          <p>• Biển đảo gắn với quốc phòng–an ninh, giao lưu, sinh kế cộng đồng ven biển và bảo tồn đa dạng sinh học.</p>
          <p>• Cần phân biệt <strong>chủ quyền</strong> đối với lãnh thổ/đảo với <strong>quyền chủ quyền và quyền tài phán</strong> đối với vùng đặc quyền kinh tế/thềm lục địa theo luật biển.</p>
        </div>

        <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1.5">
          <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-amber-500"></i> Cơ sở lịch sử và pháp lí
          </h5>
          <p>• Sách trình bày quá trình các nhà nước Việt Nam qua nhiều thời kì tổ chức hoạt động ở Hoàng Sa và Trường Sa: khai thác, đo đạc, thu lượm sản vật, cứu hộ tàu thuyền, cắm mốc/khảo sát và quản lí hành chính; triều Nguyễn có đội Hoàng Sa, Bắc Hải và hoạt động thực thi chủ quyền.</p>
          <p>• Tư liệu lịch sử cần được xem xét về nguồn gốc, niên đại, nội dung và tính liên tục; bản đồ, văn bản hành chính, ghi chép và hoạt động quản lí là các dạng chứng cứ cần đối chiếu.</p>
          <p>• <strong>Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS)</strong> quy định khung pháp lí về các vùng biển, quyền và nghĩa vụ của quốc gia ven biển; việc giải quyết bất đồng cần dựa trên luật pháp quốc tế và biện pháp hòa bình.</p>
          <div class="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200 dark:border-amber-900">
            <strong>Nguyên tắc biên soạn:</strong> Khi biên soạn nội dung giáo dục, trình bày chính xác thuật ngữ và phân biệt nguồn lịch sử với quy định pháp lí; dẫn nguồn chính thống và không suy diễn ranh giới chỉ từ một bản đồ minh họa.
          </div>
        </div>

        <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
          <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-emerald-500"></i> Khai thác, thách thức và bảo vệ
          </h5>
          <p>• <strong>Cơ hội:</strong> Giao thông biển, thủy sản, năng lượng, khoáng sản, du lịch và nghiên cứu khoa học.</p>
          <p>• <strong>Thách thức:</strong> Tranh chấp, cạnh tranh chiến lược, tai nạn hàng hải, khai thác quá mức, ô nhiễm, suy giảm hệ sinh thái và thiên tai.</p>
          <p>• <strong>Bảo vệ quyền/lợi ích hợp pháp:</strong> Củng cố tư liệu và hiểu biết pháp luật; phát triển kinh tế biển gắn với quốc phòng, an ninh và môi trường; bảo đảm an toàn cho ngư dân; tăng hợp tác và giải quyết tranh chấp bằng biện pháp hòa bình trên cơ sở luật pháp quốc tế.</p>
          <p>• <strong>Trách nhiệm công dân:</strong> Công dân có thể tìm hiểu nguồn tin chính thống, ứng xử có trách nhiệm khi chia sẻ nội dung về biển đảo và tham gia bảo vệ môi trường biển; tránh phát tán bản đồ/tin chưa kiểm chứng.</p>
        </div>
      </div>
    `,
    commonMistakes: "Tránh phát tán hoặc suy diễn ranh giới biển đảo từ các bản đồ chưa được kiểm chứng; luôn đối chiếu với các nguồn chính thống và văn bản pháp lí quốc tế (UNCLOS 1982, Luật Biển Việt Nam 2012).",
    quiz: {
      q: "Văn bản pháp lí quốc tế quan trọng nhất hiện nay quy định khung pháp lí toàn diện về các vùng biển, quyền và nghĩa vụ của quốc gia ven biển là:",
      options: [
        "Hiệp ước Paris 1783",
        "Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS)",
        "Tuyên ngôn Độc lập Hoa Kỳ",
        "Hiệp định Giơ-ne-vơ 1954"
      ],
      ans: 1,
      expl: "Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS) là văn kiện pháp lí tối cao điều chỉnh mọi hoạt động trên biển và đại dương."
    }
  }
];
