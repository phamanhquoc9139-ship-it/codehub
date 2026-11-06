// CHƯƠNG V (Bài 15, 16, 17, 18) & CHƯƠNG VI (Bài 19, 20, 21, 22)

const chapters5_6 = [
  {
    chapterId: "chuong-5",
    chapterNumber: "Chương V",
    chapterTitle: "Phòng trừ sâu, bệnh hại cây trồng",
    badge: "Bài 15 – Bài 18",
    themeColor: "red",
    icon: "fa-solid fa-shield-virus",
    lessons: [
      {
        id: "bai-15",
        number: "Bài 15",
        title: "Sâu, bệnh hại cây trồng và ý nghĩa của việc phòng trừ",
        badge: "Khái niệm & Chiến lược IPM",
        icon: "fa-solid fa-bug",
        overview: "Khái niệm sâu hại, bệnh hại và 5 nhóm biện pháp phòng trừ (canh tác, cơ giới/vật lí, sinh học, hóa học và quản lý dịch hại tổng hợp IPM).",
        sections: [
          {
            title: "1. Khái niệm sâu hại và bệnh hại",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-red-50/70 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-800 dark:text-red-300 block mb-1">Sâu hại:</strong>
                  Các loài côn trùng, nhện cắn phá hoặc chích hút các bộ phận của cây trồng (thân, lá, hoa, quả, rễ) làm khuyết thủng, cuốn lá, gãy cành, thối rễ, truyền virus gây hại.
                </div>
                <div class="p-3 bg-red-50/70 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-800 dark:text-red-300 block mb-1">Bệnh hại:</strong>
                  Trạng thái bất thường về hình thái, giải phẫu sinh lí của cây do vi sinh vật gây bệnh (nấm, vi khuẩn, virus, tuyến trùng) hoặc do điều kiện phi sinh học bất lợi (úng, hạn, rét, ngộ độc phân).
                </div>
              </div>
            `
          },
          {
            title: "2. Năm nhóm biện pháp phòng trừ dịch hại",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">1. Biện pháp canh tác (Phòng là chính):</strong>
                  Vệ sinh đồng ruộng, cày lật phơi đất diệt nhộng, luân canh cây trồng (đặc biệt luân canh với lúa nước), chọn giống kháng, gieo đúng lịch thời vụ, bón phân cân đối không bón thừa đạm.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">2. Biện pháp cơ giới, vật lí:</strong>
                  Dùng bẫy đèn, bẫy dính màu vàng/xanh, bẫy pheromone dẫn dụ con đực, bắt sâu bằng tay, ngắt bỏ ổ trứng, dùng vợt bắt rầy, bao bọc quả non bằng túi chuyên dụng.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">3. Biện pháp sinh học:</strong>
                  Bảo vệ và thả thiên địch (bọ rùa ăn rệp, nhện bắt mồi, bọ xít ăn sâu, ong mắt đỏ kí sinh trứng sâu); dùng chế phẩm vi sinh (Bt, NPV, nấm xanh <em>Metarhizium</em>, nấm trắng <em>Beauveria</em>, nấm đối kháng <em>Trichoderma</em>). An toàn, bền vững, không gây kháng thuốc.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">4. Biện pháp hóa học (Chỉ dùng khi cần thiết):</strong>
                  Dùng thuốc BVTV hóa học. Hiệu lực nhanh, dập dịch tức thời; nhưng có nhược điểm diệt cả thiên địch, tồn dư hóa chất độc hại, gây ô nhiễm đất/nước và làm sâu kháng thuốc.
                </div>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">5. Quản lí dịch hại tổng hợp (IPM - Integrated Pest Management):</strong>
                  Kết hợp hài hòa các biện pháp trên một cách thông minh, ưu tiên biện pháp sinh học, nhằm giữ mật độ sâu hại <strong>dưới ngưỡng gây thiệt hại kinh tế</strong> (ET - Economic Threshold), bảo vệ tối đa hệ sinh thái và sức khỏe con người.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nguyên lí cốt lõi của chiến lược Quản lí dịch hại tổng hợp (IPM) trong nông nghiệp hiện đại là gì?",
            options: ["Phối hợp các biện pháp để giữ mật độ sâu hại dưới ngưỡng gây thiệt hại kinh tế, ưu tiên biện pháp sinh học", "Phun thuốc hóa học liên tục hằng ngày để tận diệt 100% mọi loài côn trùng", "Không can thiệp gì để mặc sâu hại phá hoại", "Chỉ dùng duy nhất một loại thuốc trừ sâu hóa học cho mọi loại cây"],
            ans: 0,
            exp: "IPM không đặt mục tiêu tận diệt côn trùng (vì sẽ làm sụp đổ chuỗi thức ăn sinh thái) mà giữ sâu bệnh dưới ngưỡng thiệt hại kinh tế bằng cách ưu tiên thiên địch và canh tác sạch."
          },
          {
            q: "Nhóm loài sinh vật nào sau đây được xem là thiên địch có ích trên đồng ruộng cần được bảo vệ?",
            options: ["Bọ rùa ăn rệp, nhện bắt mồi, ong mắt đỏ kí sinh", "Sâu tơ, rầy nâu, sâu cuốn lá", "Chuột đồng, ốc bươu vàng", "Ruồi đục quả, bướm đêm sâu keo"],
            ans: 0,
            exp: "Bọ rùa, nhện bắt mồi và ong kí sinh tiêu diệt sâu hại tự nhiên mà không gây hại cho cây trồng và con người."
          }
        ]
      },
      {
        id: "bai-16",
        number: "Bài 16",
        title: "Một số sâu hại thường gặp và biện pháp phòng trừ",
        badge: "Côn trùng học nông nghiệp",
        icon: "fa-solid fa-locust",
        overview: "Nhận biết hình thái, chu kì vòng đời và biện pháp phòng trừ 4 loài sâu hại nghiêm trọng nhất: Sâu tơ hại rau cải, Rầy nâu hại lúa, Sâu keo mùa thu hại ngô và Ruồi đục quả.",
        sections: [
          {
            title: "1. Bốn loài sâu hại cây trồng điển hình",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-red-600 block mb-1">1. Sâu tơ hại rau cải (<em>Plutella xylostella</em>):</strong>
                  - <em>Đặc điểm:</em> Sâu non màu xanh nhạt, khi bị động co giật hoặc nhả tơ buông mình rơi xuống; tuổi nhỏ gặm biểu bì dưới tạo vết màng trong mỏng, tuổi lớn ăn thủng lá chỉ chừa lại gân lá.<br>
                  - <em>Phòng trừ:</em> Luân canh với lúa nước hoặc cây họ Hành tỏi; thả ong kí sinh; phun chế phẩm vi khuẩn Bt khi sâu mới nở.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-red-600 block mb-1">2. Rầy nâu hại lúa (<em>Nilaparvata lugens</em>):</strong>
                  - <em>Đặc điểm:</em> Rầy trưởng thành và rầy non chích hút nhựa bẹ lúa làm cây khô héo, bông lép, gây hiện tượng <strong>'cháy rầy'</strong> thành từng chòm; đồng thời là véc-tơ truyền virus bệnh vàng lùn và lùn xoắn lá.<br>
                  - <em>Phòng trừ:</em> Dùng giống lúa kháng rầy; gieo cấy đồng loạt né rầy; bón phân cân đối, bảo vệ nhện bắt mồi và bọ xít nước; chỉ phun thuốc khi mật độ rầy vượt ngưỡng an toàn.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-red-600 block mb-1">3. Sâu keo mùa thu (<em>Spodoptera frugiperda</em>):</strong>
                  - <em>Đặc điểm:</em> Phá hoại chủ yếu cây ngô; sâu non ăn thủng phiến lá, cắn đứt bao phấn cờ và đục sâu vào bắp non; đầu sâu có vân hình chữ Y ngược màu trắng rõ rệt.<br>
                  - <em>Phòng trừ:</em> Cày lật đất diệt nhộng; bẫy bướm bằng bẫy bả chua ngọt; ngắt ổ trứng; phun chế phẩm nấm xanh <em>Metarhizium</em> hoặc virus NPV.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-red-600 block mb-1">4. Ruồi đục quả (<em>Bactrocera spp.</em>):</strong>
                  - <em>Đặc điểm:</em> Ruồi cái dùng máng đẻ trứng cắm sâu vào vỏ quả chín/bánh tẻ (xoài, cam, ổi, mướp); dòi nở ra ăn thối rữa thịt quả làm quả rụng hàng loạt.<br>
                  - <em>Phòng trừ:</em> <strong>Bao bọc quả non bằng túi chuyên dụng</strong>; vệ sinh thu gom tiêu hủy toàn bộ quả rụng; dùng bẫy pheromone dẫn dụ và tiêu diệt ruồi đực.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Loài sâu hại nào gây ra hiện tượng 'cháy rầy' và là véc-tơ truyền bệnh vàng lùn, lùn xoắn lá trên cây lúa?",
            options: ["Rầy nâu (Nilaparvata lugens)", "Sâu đục thân bướm hai chấm", "Bọ trĩ", "Sâu cuốn lá nhỏ"],
            ans: 0,
            exp: "Rầy nâu chích hút nhựa ở gốc lúa gây cháy rầy thành mảng lớn và mang virus gây bệnh vàng lùn, lùn xoắn lá nan y."
          },
          {
            q: "Biện pháp phòng ngừa ruồi đục quả (Bactrocera spp.) trên cây ăn quả an toàn sinh học và hiệu quả nhất là:",
            options: ["Bao bọc quả non bằng túi chuyên dụng và đặt bẫy pheromone dẫn dụ ruồi đực", "Phun thuốc trừ sâu cực độc trực tiếp lên quả chín", "Chặt phá toàn bộ cây ăn quả", "Tưới ngập gốc cây suốt cả năm"],
            ans: 0,
            exp: "Bao trái ngăn chặn tuyệt đối ruồi cái tiếp cận đẻ trứng vào vỏ quả, kết hợp bẫy pheromone tiêu diệt ruồi đực để cắt đứt chu kì sinh sản."
          }
        ]
      },
      {
        id: "bai-17",
        number: "Bài 17",
        title: "Một số bệnh hại thường gặp và biện pháp phòng trừ",
        badge: "Bệnh học thực vật",
        icon: "fa-solid fa-virus",
        overview: "Triệu chứng điển hình, tác nhân sinh học và giải pháp phòng trị 4 bệnh hại nguy hiểm: Bệnh thán thư, Vàng lá greening cây có múi, Đạo ôn lúa và Bệnh héo xanh vi khuẩn.",
        sections: [
          {
            title: "1. Bốn bệnh hại phổ biến trên cây trồng",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">1. Bệnh thán thư (Nấm <em>Colletotrichum spp.</em>):</strong>
                  - <em>Triệu chứng:</em> Gây hại trên lá, cành, hoa và quả (xoài, ớt, thanh long). Trên lá vết bệnh đốm tròn màu nâu có viền sẫm lan rộng đồng tâm; trên quả tạo các vết lõm tròn màu nâu đen có vòng chấm đen li ti, làm hoa quả rụng sớm.<br>
                  - <em>Phòng trừ:</em> Cắt tỉa cành thông thoáng, thoát nước tốt, bón cân đối N-P-K (tránh thừa đạm); phun phòng thuốc gốc đồng hoặc hoạt chất diệt nấm khi ẩm độ cao.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">2. Bệnh vàng lá greening hại cây có múi (Vi khuẩn <em>Candidatus Liberibacter asiaticus</em>):</strong>
                  - <em>Triệu chứng:</em> Lá bị loang lổ vàng xanh (gân lá sưng xanh, thịt lá vàng), lá nhỏ hẹp đứng thẳng; quả nhỏ, méo mó, lệch tâm, tép quả chai sượng đắng.<br>
                  - <em>Đặc điểm sống còn:</em> Do rầy chổng cánh (<em>Diaphorina citri</em>) truyền bệnh. <strong>Hiện nay chưa có thuốc hóa học đặc trị</strong>; phòng trừ là chính bằng cách: dùng cây giống sạch bệnh nuôi cấy đỉnh sinh trưởng, phun trừ rầy chổng cánh và đào tiêu hủy ngay cây nhiễm bệnh.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">3. Bệnh đạo ôn lúa (Nấm <em>Pyricularia oryzae</em>):</strong>
                  - <em>Triệu chứng:</em> Vết bệnh trên phiến lá có <strong>hình thoi đặc trưng</strong> (ở giữa màu xám tro, viền màu nâu đậm, ngoài cùng có quầng vàng); bệnh ở cổ bông làm cổ bông teo thắt, gãy gục khiến bông lúa bạc trắng lép lửng.<br>
                  - <em>Phòng trừ:</em> Dùng giống kháng; xử lí hạt giống; khi chớm xuất hiện vết bệnh lập tức ngừng bón đạm, giữ mực nước ruộng và phun thuốc đặc trị nấm đạo ôn.
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">4. Bệnh héo xanh vi khuẩn (<em>Pseudomonas solanacearum</em>):</strong>
                  - <em>Triệu chứng:</em> Thường gặp ở cây họ Cà (cà chua, khoai tây, ớt). Cây đang xanh tốt bỗng héo rũ đột ngột vào ban ngày; khi cắt ngang gốc thân nhúng vào cốc nước trong sẽ thấy <strong>dòng dịch nhờn vi khuẩn màu trắng sữa chảy ra</strong> từ bó mạch.<br>
                  - <em>Phòng trừ:</em> Luân canh lúa nước (ngâm nước 15–30 ngày để diệt vi khuẩn hiếu khí); phơi ải đất; bón chế phẩm nấm đối kháng <em>Trichoderma</em> hoặc vi khuẩn <em>Bacillus subtilis</em>.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Đặc điểm vết bệnh trên phiến lá điển hình của bệnh đạo ôn hại lúa (do nấm Pyricularia oryzae) là:",
            options: ["Vết bệnh hình con thoi, tâm màu xám tro, viền nâu đậm có quầng vàng", "Vết bệnh hình sao màu đỏ tươi", "Toàn bộ lá bị biến thành màu tím ngắt", "Lá bị thủng lỗ tròn như viên đạn"],
            ans: 0,
            exp: "Vết bệnh đạo ôn chuẩn mực trên phiến lá lúa luôn có hình thoi hai đầu nhọn, tâm xám tro viền nâu."
          },
          {
            q: "Đối với bệnh Vàng lá greening trên cây có múi (cam, bưởi, quýt), phương châm phòng trừ bắt buộc là gì?",
            options: ["Phòng bệnh là chính, dùng giống sạch bệnh, diệt rầy chổng cánh và chặt bỏ cây bệnh vì chưa có thuốc đặc trị", "Chỉ cần phun thuốc kháng sinh liều cao là khỏi hoàn toàn", "Bón thật nhiều phân đạm để cây tự lành", "Tưới nước muối quanh gốc"],
            ans: 0,
            exp: "Vi khuẩn greening cư trú sâu trong mạch libe của cây có múi, hiện nay khoa học nông nghiệp thế giới chưa tìm ra thuốc hóa học đặc trị hữu hiệu."
          }
        ]
      },
      {
        id: "bai-18",
        number: "Bài 18",
        title: "Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh",
        badge: "Chế phẩm sinh học BVTV",
        icon: "fa-solid fa-shield-cat",
        overview: "Cơ chế tác động và quy trình công nghệ sản xuất các chế phẩm vi khuẩn trừ sâu Bt, chế phẩm virus NPV và nấm đối kháng phòng trừ sâu bệnh thân thiện môi trường.",
        sections: [
          {
            title: "1. Ba dòng chế phẩm sinh học BVTV hàng đầu",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">Chế phẩm vi khuẩn Bt (<em>Bacillus thuringiensis</em>):</strong>
                  Khi hình thành bào tử, vi khuẩn sinh ra <em>tinh thể protein độc dạng kim cương</em> (Endotoxin). Khi sâu non ăn phải, tinh thể protein tan trong dịch ruột kiềm tính của sâu làm thủng vách ruột $\\rightarrow$ Sâu ngừng ăn lập tức và chết sau <strong>2–4 ngày</strong>.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">Chế phẩm virus đa diện tử (NPV):</strong>
                  Virus kí sinh nội bào chuyên biệt trên sâu xanh da láng, sâu keo. Khi sâu ăn phải bào tử bọc, virus nhân lên làm vỡ tế bào nội quan, sâu treo ngược mình trên cành cây chết và nhũn ra sau <strong>2–5 ngày</strong>, phát tán dịch bệnh lây lan khắp ruộng.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">Chế phẩm nấm có ích:</strong>
                  - <em>Nấm kí sinh trừ sâu:</em> Nấm trắng (<em>Beauveria bassiana</em>), nấm xanh (<em>Metarhizium anisopliae</em>) mọc sợi nấm đâm thủng vỏ kitin của sâu bọ, hút cạn dịch cơ thể sâu.<br>
                  - <em>Nấm đối kháng trừ bệnh:</em> Nấm <em>Trichoderma spp.</em> cạnh tranh dinh dưỡng và tiết enzyme tiêu diệt nấm bệnh trong đất.
                </div>
              </div>
            `
          },
          {
            title: "2. Ưu và nhược điểm của thuốc BVTV sinh học",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">Ưu điểm:</strong>
                  An toàn tuyệt đối cho người sản xuất, người tiêu dùng và động vật máu nóng; không gây tồn dư độc tố trong nông sản; không làm suy thoái đất/nước; bảo tồn đa dạng thiên địch và không tạo tính kháng thuốc ở sâu hại.
                </div>
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1">Hạn chế:</strong>
                  Tác động chậm (sâu chết sau 2–5 ngày chứ không chết ngay tại chỗ); hiệu lực chịu ảnh hưởng lớn của thời tiết nắng gắt hoặc mưa to; hạn sử dụng ngắn hơn thuốc hóa học; không thích hợp để dập dịch quy mô cực lớn tức thời.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Cơ chế tiêu diệt sâu hại của chế phẩm vi khuẩn Bt (Bacillus thuringiensis) là gì?",
            options: ["Tinh thể protein độc hòa tan trong ruột kiềm làm thủng thành ruột, sâu ngừng ăn và chết sau 2–4 ngày", "Làm đông cứng lớp vỏ kitin ngoài của sâu", "Phát ra sóng siêu âm làm sâu điếc tai", "Làm biến đổi sâu non thành bướm ngay lập tức"],
            ans: 0,
            exp: "Endotoxin của vi khuẩn Bt chỉ hoạt hóa trong môi trường kiềm ruột côn trùng, an toàn tuyệt đối với động vật dạ dày acid như người."
          },
          {
            q: "Chủng nấm đối kháng sinh học nổi tiếng nào sau đây được ứng dụng rộng rãi để trộn vào phân hữu cơ nhằm tiêu diệt các loại nấm thối rễ trong đất?",
            options: ["Trichoderma spp.", "Nấm mốc đen Aspergillus", "Nấm men bia Saccharomyces", "Nấm rơm Volvariella"],
            ans: 0,
            exp: "Nấm Trichoderma tiết enzyme phân giải thành tế bào của các nấm gây bệnh (Fusarium, Rhizoctonia, Phytophthora) trong đất."
          }
        ]
      }
    ]
  },
  {
    chapterId: "chuong-6",
    chapterNumber: "Chương VI",
    chapterTitle: "Kĩ thuật trồng trọt",
    badge: "Bài 19 – Bài 22",
    themeColor: "blue",
    icon: "fa-solid fa-tractor",
    lessons: [
      {
        id: "bai-19",
        number: "Bài 19",
        title: "Quy trình trồng trọt và cơ giới hoá",
        badge: "Quy trình chuẩn & Cơ giới hóa",
        icon: "fa-solid fa-gears",
        overview: "Quy trình 4 bước chuẩn của trồng trọt nông nghiệp (làm đất bón lót, gieo trồng, chăm sóc phòng trừ, thu hoạch) và ứng dụng cơ giới hóa đồng bộ.",
        sections: [
          {
            title: "1. Bốn bước cơ bản của quy trình trồng trọt",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Bước 1: Làm đất, bón lót</strong>
                  Cày ải, bừa nhỏ, đập tơi xốp đất, san phẳng mặt ruộng, lên luống hoặc đào hố quy cách; làm sạch cỏ dại và diệt mầm sâu bệnh. Bón lót sâu phân hữu cơ hoai mục và phân lân trước khi gieo trồng.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Bước 2: Gieo hạt hoặc trồng cây con</strong>
                  Xử lí hạt giống (ngâm ủ kích mầm) hoặc ươm bầu cây giống đạt chuẩn xuất vườn; gieo cấy đúng khung thời vụ, đúng khoảng cách hàng và mật độ cây.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Bước 3: Chăm sóc và phòng trừ dịch hại</strong>
                  Tưới nước hợp lí (giữ ẩm), tỉa dặm cây con, vun gốc, bón phân thúc đúng kì, tạo tán tỉa cành, điều khiển phân hóa mầm hoa; theo dõi dự tính dự báo phòng trừ sâu bệnh theo IPM.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Bước 4: Thu hoạch</strong>
                  Thu hoạch đúng độ chín kĩ thuật/thương phẩm, đúng phương pháp (cắt, hái nhẹ nhàng), thao tác nhanh gọn trong điều kiện thời tiết khô ráo để tránh thất thoát và dập nát nông sản.
                </div>
              </div>
            `
          },
          {
            title: "2. Cơ giới hóa đồng bộ trong trồng trọt",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Cơ giới hóa thay thế sức lao động thủ công bằng máy nông nghiệp ở tất cả các khâu: máy cày bừa công suất lớn, máy lên luống tự động, máy gieo hạt chính xác, máy cấy lúa khay mạ, máy bay không người lái (drone) rải phân bón và phun thuốc BVTV, máy gặt đập liên hợp (Combine Harvester).
              </p>
              <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
                <strong>Lợi ích:</strong> Giảm 80% công lao động nặng nhọc, đẩy nhanh tiến độ đảm bảo thời vụ nghiêm ngặt, hạ giá thành sản xuất, giảm thất thoát hạt sau thu hoạch từ 15% xuống dưới 3%.
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Bước đầu tiên trong quy trình kĩ thuật trồng trọt nông nghiệp là:",
            options: ["Làm đất và bón lót", "Gieo hạt giống", "Bón thúc phân đạm", "Thu hoạch sản phẩm"],
            ans: 0,
            exp: "Khâu làm đất và bón lót tạo môi trường đất tơi xốp, sạch cỏ dại và cung cấp nguồn dinh dưỡng nền tảng ban đầu cho cây con."
          },
          {
            q: "Việc ứng dụng máy gặt đập liên hợp (Combine Harvester) mang lại lợi ích nổi bật nào sau đây?",
            options: ["Kết hợp đồng thời gặt lúa, đập tách hạt, làm sạch trấu và đóng bao ngay trên ruộng, giảm tối đa thất thoát", "Tự động chế biến gạo thành bánh kẹo ngay trên ruộng", "Làm lúa chín nhanh gấp 10 lần", "Làm cho lúa không bao giờ bị đổ rạp"],
            ans: 0,
            exp: "Máy gặt đập liên hợp tích hợp gặt - đập - sàng - đóng bao liên hoàn giúp thu hoạch thần tốc và giảm thất thoát sau thu hoạch."
          }
        ]
      },
      {
        id: "bai-20",
        number: "Bài 20",
        title: "Công nghệ cao trong thu hoạch và bảo quản",
        badge: "Công nghệ sau thu hoạch",
        icon: "fa-solid fa-boxes-stacked",
        overview: "Các công nghệ bảo quản nông sản tiên tiến hàng đầu thế giới: Robot thu hoạch tự động, Kho silo thông minh, Kho lạnh nhiệt độ thấp, Chiếu xạ thực phẩm, Khí quyển điều chỉnh (CA) và Công nghệ plasma lạnh.",
        sections: [
          {
            title: "1. Các công nghệ bảo quản sau thu hoạch tiên tiến",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">1. Robot thu hoạch tự động:</strong>
                  Sử dụng cảm biến camera đa phổ kết hợp AI nhận diện chính xác độ chín và vị trí quả, cánh tay robot mềm hái quả nhẹ nhàng không làm trầy xước vỏ.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">2. Hệ thống kho Silo trữ hạt:</strong>
                  Tháp hình trụ thép khổng lồ chuyên chứa hạt khô (thóc, ngô, đỗ); tích hợp hệ thống kiểm soát nhiệt ẩm và quạt thông gió tự động, ngăn chuột bọ, bảo quản hàng ngàn tấn hạt nhiều năm liền.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">3. Bảo quản lạnh (Cold Storage):</strong>
                  Duy trì nhiệt độ <strong>0–5 °C</strong> làm chậm quá trình hô hấp tế bào và ức chế sinh sản của vi sinh vật; kéo dài độ tươi ngon của rau, hoa tươi, quả mọng.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">4. Công nghệ chiếu xạ thực phẩm:</strong>
                  Dùng tia gamma ($\gamma$), tia X hoặc chùm electron năng lượng cao xuyên qua sản phẩm đóng gói để tiêu diệt ấu trùng ruồi giấm, vi khuẩn gây thối; tiêu chuẩn bắt buộc cho nông sản xuất khẩu sang Mỹ, Úc.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">5. Bảo quản trong khí quyển điều chỉnh (CA - Controlled Atmosphere):</strong>
                  Chủ động điều chỉnh nồng độ các chất khí trong kho kín: <strong>hạ nồng độ $O_2$ xuống thấp (1–3%)</strong> và <strong>tăng nồng độ $CO_2$ (1–5%)</strong> để giảm tối đa cường độ hô hấp của quả mà không gây ngạt; quả giữ độ tươi giòn suốt 6–12 tháng.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">6. Công nghệ Plasma lạnh (Cold Plasma):</strong>
                  Khử trùng vi sinh vật trên bề mặt vỏ quả ở nhiệt độ phòng mà hoàn toàn không dùng nhiệt độ cao hay hóa chất độc hại, giữ nguyên hương vị tự nhiên.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nguyên lí bảo quản quả tươi trong công nghệ Khí quyển điều chỉnh (CA) là gì?",
            options: ["Chủ động giảm nồng độ oxy (O2) và tăng nồng độ CO2 trong kho kín để hạ thấp cường độ hô hấp của quả", "Hút sạch 100% không khí biến kho thành môi trường chân không tuyệt đối", "Bơm khí độc clo vào kho", "Tăng nhiệt độ kho lên 100 °C"],
            ans: 0,
            exp: "Hạ O2 xuống 1-3% và nâng CO2 lên 2-5% làm chậm quá trình hô hấp hiếu khí của quả, làm quả 'ngủ đông' mà không bị hỏng."
          },
          {
            q: "Hệ thống kho Silo hình trụ thép cao tầng thường được dùng chuyên dụng để bảo quản nông sản nào?",
            options: ["Các loại hạt ngũ cốc khô (thóc, ngô, đậu nành, lúa mì)", "Rau xà lách tươi", "Hoa hồng cành", "Quả chuối chín mềm"],
            ans: 0,
            exp: "Kho silo chuyên dụng cho hạt khô nông nghiệp với sức chứa hàng ngàn tấn, bảo đảm khô ráo và tự động xuất nhập liệu."
          }
        ]
      },
      {
        id: "bai-21",
        number: "Bài 21",
        title: "Chế biến sản phẩm trồng trọt",
        badge: "Công nghệ chế biến & Thực hành",
        icon: "fa-solid fa-jar",
        overview: "Các phương pháp chế biến nông sản (sấy khô, sấy lạnh, áp suất cao HPP, chiên chân không) và quy trình thực hành làm xirô quả tươi.",
        sections: [
          {
            title: "1. Các phương pháp chế biến hiện đại",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-600 block mb-1">Sấy lạnh (Freeze/Heat pump drying):</strong>
                  Dùng không khí khô ở dải nhiệt độ <strong>10–65 °C</strong>, độ ẩm không khí <strong>< 40%</strong> để hút ẩm từ từ. Giữ nguyên màu sắc tươi sáng, hương thơm tinh dầu và các vitamin nhạy cảm với nhiệt độ.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-600 block mb-1">Chế biến bằng áp suất cao (HPP):</strong>
                  Đặt sản phẩm vào môi trường nước có áp suất cực cao (3 000–6 000 bar) ở nhiệt độ <strong>4–10 °C</strong>. Bất hoạt toàn bộ vi khuẩn, nấm men gây hư hỏng mà không làm biến tính protein và hương vị nước ép quả.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-600 block mb-1">Chiên chân không nhiệt thấp:</strong>
                  Chiên nông sản trong bồn chân không ở nhiệt độ dầu thấp (khoảng 80–90 °C); tạo độ giòn rụm (mít sấy, chuối sấy) mà không bị cháy khét hay ngậm dầu.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-600 block mb-1">Phương pháp truyền thống:</strong>
                  Phơi sấy tự nhiên, nghiền tinh bột (bột sắn, bột gạo), muối chua lên men lactic (dưa cải, cà muối).
                </div>
              </div>
            `
          },
          {
            title: "2. Quy trình thực hành: Làm xirô quả (Fruit Syrup)",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Bước 1 - Lựa chọn nguyên liệu:</strong> Chọn 1 kg quả tươi nguyên vẹn, chín tới, không dập nát (dâu tây, mận, mơ, atiso đỏ); rửa sạch, để ráo nước hoàn toàn.</div>
                <div><strong>Bước 2 - Sơ chế quả:</strong> Khía nhẹ vỏ hoặc cắt lát mỏng (tùy loại quả) để dịch quả dễ chiết xuất ra ngoài.</div>
                <div><strong>Bước 3 - Xếp lớp với đường:</strong> Dùng lọ thủy tinh sạch khô; rải xen kẽ một lớp quả và một lớp đường cát trắng (tỉ lệ chuẩn SGK: <strong>1 kg quả dùng 1 – 1,5 kg đường</strong>); lớp đường phủ dày trên cùng; có thể thêm chút muối hạt.</div>
                <div><strong>Bước 4 - Đậy nắp bảo quản:</strong> <strong>Không đậy nắp quá kín khít</strong> (để hở nhẹ vì quá trình chiết dịch có sinh khí lên men nhẹ); để khoảng trống cách miệng lọ 5–10 cm.</div>
                <div><strong>Bước 5 - Thu hoạch:</strong> Sau <strong>20–30 ngày</strong>, đường tan hết, dịch quả chiết ra tạo thành dung dịch xirô sánh đỏ đậm đà; lọc lấy nước xirô cho vào chai bảo quản.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tỉ lệ khối lượng chuẩn giữa quả tươi và đường cát trắng theo hướng dẫn thực hành làm xirô quả trong SGK là:",
            options: ["1 kg quả : 1 đến 1,5 kg đường cát trắng", "1 kg quả : 100 g đường", "1 kg quả : 5 kg đường", "10 kg quả : 100 g đường"],
            ans: 0,
            exp: "Tỉ lệ 1 kg quả với 1-1.5 kg đường tạo áp suất thẩm thấu cao rút kiệt nước từ tế bào quả và ngăn chặn sự phát triển của vi khuẩn hư hỏng."
          },
          {
            q: "Tại sao khi ngâm xirô quả trong lọ thủy tinh, ta không nên đậy nắp quá kín chặt chẽ tuyệt đối?",
            options: ["Vì quá trình chiết dịch tế bào và lên men tự nhiên có sinh khí, đậy quá kín có thể gây nổ nứt lọ", "Để cho kiến và ruồi bay vào", "Để đường bay hơi bớt", "Để hút thêm bụi bẩn vào lọ"],
            ans: 0,
            exp: "Áp suất khí CO2 tích tụ trong bình kín có thể làm bật nắp hoặc nổ lọ thủy tinh, do đó cần vặn nắp vừa phải để thoát khí nhẹ."
          }
        ]
      },
      {
        id: "bai-22",
        number: "Bài 22",
        title: "Dự án: Trồng hoa trong chậu",
        badge: "Dự án STEM trồng trọt",
        icon: "fa-solid fa-seedling",
        overview: "Quy trình thực hiện dự án STEM trồng hoa trong chậu cảnh: lập kế hoạch, dự toán vật tư, phối trộn giá thể, kĩ thuật gieo trồng, chăm sóc và hạch toán kinh tế.",
        sections: [
          {
            title: "1. Các bước thực hiện dự án trồng hoa",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 1 - Lập kế hoạch & Khảo sát:</strong> Tra cứu đặc điểm sinh thái loài hoa dự định trồng (hoa dạ yến thảo, hoa đồng tiền, hoa cúc, hoa mười giờ); xác định vị trí đặt chậu (ban công, sân trường); lập dự toán chi phí mua chậu, giá thể, giống hoa và phân bón.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 2 - Phối trộn giá thể trồng:</strong> Phối trộn giá thể theo tỉ lệ tơi xốp, thoát nước tốt (ví dụ: 30% xơ dừa đã xử lí + 30% trấu hun + 20% đất thịt sạch + 20% phân trùn quế hữu cơ).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 3 - Trồng cây:</strong> Cho giá thể vào 2/3 chậu, đặt cây giống vào giữa chậu thẳng đứng, bổ sung giá thể quanh gốc cách miệng chậu 2–3 cm, ấn nhẹ tay và tưới đẫm nước.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Bước 4 - Chăm sóc & Báo cáo:</strong> Tưới nước đều đặn vào sáng sớm hoặc chiều mát; bón thúc phân vi lượng định kì; ngắt tỉa lá già, bấm ngọn kích thích phân cành nhánh; ghi chép nhật kí sinh trưởng và tính toán hiệu quả kinh tế của dự án.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Thời điểm tưới nước thích hợp và khoa học nhất cho cây hoa trồng trong chậu cảnh là:",
            options: ["Vào sáng sớm hoặc chiều mát khi mặt trời đã lặn", "Vào giữa trưa nắng gắt 12 giờ trưa", "Tưới ban đêm lúc 12 giờ đêm ngập úng", "Chỉ tưới một lần duy nhất khi trồng"],
            ans: 0,
            exp: "Tưới lúc trưa nắng gây sốc nhiệt và giọt nước đọng hoạt động như thấu kính hội tụ làm cháy lá; tưới sáng sớm hoặc chiều mát giúp rễ hấp thu trọn vẹn nước."
          },
          {
            q: "Mục đích chính của thao tác bấm ngọn (ngắt búp đỉnh) trong kĩ thuật chăm sóc hoa chậu là gì?",
            options: ["Phá bỏ ưu thế ngọn để kích thích cây phát triển nhiều cành nhánh bên và sai hoa", "Làm cho cây ngừng phát triển hẳn", "Để cây không bao giờ nở hoa", "Làm cho rễ cây bị teo lại"],
            ans: 0,
            exp: "Bấm ngọn loại bỏ hormone auxin ở đỉnh chồi, kích thích các chồi nách bật mạnh tạo tán tròn sum suê và trổ nhiều nụ hoa rực rỡ."
          }
        ]
      }
    ]
  }
];

module.exports = { chapters5_6 };
