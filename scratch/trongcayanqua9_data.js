// trongcayanqua9_data.js - Dữ liệu 8 bài học Công nghệ 9 Mô đun Trồng cây ăn quả

const trongCayLessons = [
  {
    id: "bai-1",
    number: "Bài 1",
    title: "Giới thiệu chung về cây ăn quả",
    sub: "Vai trò kinh tế - sinh thái, đặc điểm thực vật học (rễ, thân cành, lá, hoa, quả hạt), yêu cầu ngoại cảnh và nhóm nghề Holland R.",
    duration: "45 phút",
    diagramKey: "cautaoCay",
    objectives: "Nêu được vai trò, đặc điểm thực vật học của cây ăn quả; phân tích các yêu cầu ngoại cảnh (nhiệt độ, ẩm, mưa, sáng, đất, gió); tìm hiểu đặc trưng nghề nghiệp và tự đánh giá sở thích theo trắc nghiệm Holland (nhóm R).",
    quote: "Cây ăn quả kết tinh tinh hoa đất trời, mang lại vị ngọt lành nuôi dưỡng con người và màu xanh trù phú cho quê hương.",
    sections: [
      {
        title: "1. Vai trò của cây ăn quả trong đời sống và kinh tế",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-2 text-slate-700 dark:text-slate-300">
            <li><strong>Giá trị dinh dưỡng & Sức khoẻ:</strong> Cung cấp nguồn đường tự nhiên (glucose, fructose), acid hữu cơ thanh mát, protein, lipid, khoáng chất vi lượng và dồi dào vitamin (Vitamin C, A, E) nâng cao đề kháng.</li>
            <li><strong>Nguyên liệu công nghiệp chế biến:</strong> Là nguồn nguyên liệu phong phú cho công nghiệp đồ uống giải khát, rượu vang, mứt, ô mai, sấy dẻo và hoa quả đóng hộp xuất khẩu.</li>
            <li><strong>Hiệu quả kinh tế & Xuất khẩu:</strong> Cung cấp nông sản giá trị cao cho thị trường nội địa và xuất khẩu tỉ đô; nâng cao thu nhập cho nông dân.</li>
            <li><strong>Bảo vệ môi trường & Cảnh quan:</strong> Cây thân gỗ lâu năm giúp phủ xanh đất trống, chống xói mòn, giữ ẩm đất, điều hòa tiểu khí hậu và tạo cảnh quan sinh thái, du lịch miệt vườn.</li>
          </ul>
        `
      },
      {
        title: "2. Đặc điểm thực vật học cần nắm vững",
        content: `
          <div class="overflow-x-auto text-xs">
            <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 text-left">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr><th class="p-2 border">Bộ phận</th><th class="p-2 border">Đặc điểm hình thái &amp; Chức năng sinh lí</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td class="p-2 border font-bold text-emerald-700 dark:text-emerald-400">Hệ Rễ</td>
                  <td class="p-2 border">Hệ rễ cọc (cây gieo hạt) ăn sâu giúp cây đứng vững, hoặc rễ chùm (chuối). Rễ bên/rễ tơ phân bố ở tầng mặt nông (0–50 cm) hút nước và dinh dưỡng. Cây giâm/chiết thường ít có rễ cọc sâu.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-amber-700 dark:text-amber-400">Thân, cành</td>
                  <td class="p-2 border">Phần lớn là thân gỗ. Thân chính phân nhánh cấp 1, cấp 2, cấp 3... Các cành ở cấp cao nhận đủ ánh sáng ngoài tán là cành mang hoa và quả. Cắt tỉa cành tăm, cành vượt giúp tán cây nhận đủ ánh sáng và giảm sâu bệnh.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-blue-700 dark:text-blue-400">Lá cây</td>
                  <td class="p-2 border">Gồm lá đơn (xoài, ổi, sầu riêng) hoặc lá kép lông chim (nhãn, vải). Lá thực hiện chức năng quang hợp tổng hợp chất hữu cơ nuôi quả.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-rose-700 dark:text-rose-400">Hoa &amp; Thụ phấn</td>
                  <td class="p-2 border">Có hoa đực, hoa cái và hoa lưỡng tính. Đặc điểm hoa quyết định phương thức tự thụ phấn hay thụ phấn chéo nhờ gió và côn trùng.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-purple-700 dark:text-purple-400">Quả &amp; Hạt</td>
                  <td class="p-2 border">Gồm quả mọng (cam, bưởi, nho) và quả hạch (xoài, mận, đào). Đặc tính quả ảnh hưởng trực tiếp đến kĩ thuật bảo quản và chế biến.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "3. Yêu cầu ngoại cảnh chung của cây ăn quả",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-2">
            <div class="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
              <strong class="text-orange-800 dark:text-orange-300 block mb-1 font-bold"><i class="fa-solid fa-temperature-half"></i> Nhiệt độ &amp; Ánh sáng</strong>
              <p>• Nhiệt độ: Cây nhiệt đới thích hợp 23–35 °C (chuối, sầu riêng, xoài); cây á nhiệt đới cần thời kì lạnh ngắn (nhãn, đào cần lạnh để phân hoá hoa).<br/>
              • Ánh sáng: Đa số là cây ưa sáng trực tiếp; cây có múi ưa sáng tán xạ; dứa và dâu tây chịu bóng tốt.</p>
            </div>
            <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
              <strong class="text-sky-800 dark:text-sky-300 block mb-1 font-bold"><i class="fa-solid fa-cloud-rain"></i> Độ ẩm, Đất &amp; Gió</strong>
              <p>• Lượng mưa 1000–2000 mm/năm, ẩm độ 80–90%; ưa ẩm nhưng tuyệt đối không chịu ngập úng.<br/>
              • Đất: Tầng dày trên 1m, giàu mùn, thoát nước tốt, pH 5,5–6,5.<br/>
              • Gió: Gió nhẹ hỗ trợ thụ phấn; gió bão gây gãy cành, rụng quả non (cần trồng hàng cây chắn gió).</p>
            </div>
          </div>
        `
      },
      {
        title: "4. Định hướng nghề nghiệp & Trắc nghiệm Holland (Nhóm R)",
        content: `
          <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 text-xs">
            <p><strong>Nghề trồng cây ăn quả thuộc nhóm R (Realistic — Người thực tế):</strong> Thích làm việc với thế giới tự nhiên, cây trồng, đất đai, máy móc nông nghiệp, vận động ngoài trời.</p>
            <div class="mt-2 space-y-1">
              <p>• <strong>Công thức mức độ phù hợp về Khả năng (%):</strong> $$\\text{Khả năng} = \\left(\\frac{\\text{Tổng điểm khả năng (tiêu chí 1–5)}}{20}\\right) \\times 100\\%$$</p>
              <p>• <strong>Công thức mức độ phù hợp về Sở thích (%):</strong> $$\\text{Sở thích} = \\left(\\frac{\\text{Tổng điểm sở thích (tiêu chí 6–9)}}{16}\\right) \\times 100\\%$$</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Quan sát một cây ăn quả trong vườn trường/nhà và phân biệt: Rễ, thân chính, cành cấp 1, cành cấp 2 và cành vượt.",
      "Tự chấm điểm bài trắc nghiệm Holland 9 tiêu chí để tính phần trăm độ phù hợp về sở thích và năng lực của bản thân.",
      "Thảo luận nhóm: Vì sao các cây ăn quả nhân giống bằng chiết cành thường nhanh cho quả nhưng tuổi thọ thấp hơn cây gieo hạt?"
    ],
    quizzes: [
      {
        question: "Cây ăn quả nhân giống bằng phương pháp giâm cành hoặc chiết cành có đặc điểm hệ rễ như thế nào so với cây gieo hạt?",
        options: [
          "Có rễ cọc đâm rất sâu trong lòng đất",
          "Hầu như không có rễ cọc sâu rõ rệt, chủ yếu là hệ rễ bên và rễ tơ ăn nông",
          "Có rễ củ phình to chứa tinh bột",
          "Bộ rễ hoàn toàn không có khả năng hút nước"
        ],
        correct: 1,
        explain: "Cây nhân giống vô tính sinh rễ bất định từ cành nên không hình thành rễ cọc đâm sâu như phôi hạt, rễ bên phân bố ở tầng mặt nông."
      },
      {
        question: "Trong cấu trúc cây ăn quả, loại cành nào thường mọc thẳng đứng từ thân chính, tiêu hao nhiều dưỡng chất nhưng không mang quả?",
        options: ["Cành mang quả", "Cành cấp 3", "Cành vượt (chồi nước)", "Cành tăm"],
        correct: 2,
        explain: "Cành vượt sinh trưởng sinh dưỡng quá mức, mọc thẳng, không mang hoa quả và che bóng các cành khác nên cần cắt bỏ."
      },
      {
        question: "Theo lí thuyết mật mã nghề nghiệp Holland, nghề trồng và chăm sóc cây ăn quả gắn liền với nhóm sở thích nào?",
        options: [
          "Nhóm R (Realistic - Người thực tế)",
          "Nhóm A (Artistic - Nghệ thuật)",
          "Nhóm S (Social - Xã hội)",
          "Nhóm C (Conventional - Nghiệp vụ)"
        ],
        correct: 0,
        explain: "Nghề làm vườn, trồng cây ngoài trời gắn liền với nhóm R (Người thực tế - yêu thiên nhiên, thích thao tác thực tế)."
      },
      {
        question: "Vì sao các vườn cây ăn quả lớn thường bố trí hàng cây chắn gió ở hướng gió chính?",
        options: [
          "Để lấy bóng râm mát cho người làm cỏ",
          "Để giảm tốc độ gió bão, ngăn rụng hoa quả non và tránh gãy đổ cây",
          "Để thu hút thêm sâu hại vào hàng cây chắn",
          "Để làm đẹp hàng rào không vì mục đích kĩ thuật"
        ],
        correct: 1,
        explain: "Gió mạnh làm rách lá, gãy cành và rụng hàng loạt hoa/quả non; hàng cây chắn gió giúp giảm áp lực gió bão bảo vệ vườn."
      }
    ]
  },
  {
    id: "bai-2",
    number: "Bài 2",
    title: "Nhân giống vô tính cây ăn quả",
    sub: "Bản chất, ưu nhược điểm, quy trình kĩ thuật thực hành: Giâm cành bánh tẻ, Chiết cành bó bầu, Ghép mắt nhỏ có gỗ và Nuôi cấy mô.",
    duration: "45 phút",
    diagramKey: "nhanGiong",
    objectives: "Nêu được cơ sở khoa học và ưu nhược điểm của 4 phương pháp nhân giống vô tính; thực hiện đúng thao tác kĩ thuật giâm cành, chiết cành và ghép mắt nhỏ có gỗ; tuân thủ an toàn dao kéo và thuốc kích rễ.",
    quote: "Nhân giống vô tính là nghệ thuật nhân bản sự ngọt ngào, gìn giữ trọn vẹn phẩm chất quý giá từ thế hệ cây mẹ đầu dòng.",
    sections: [
      {
        title: "1. So sánh 4 phương pháp nhân giống vô tính",
        content: `
          <div class="overflow-x-auto text-xs">
            <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 text-left">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr><th class="p-2 border">Phương pháp</th><th class="p-2 border">Bản chất</th><th class="p-2 border">Ưu điểm &amp; Thời vụ (SGK)</th><th class="p-2 border">Hạn chế</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td class="p-2 border font-bold text-teal-700 dark:text-teal-400">Giâm cành</td>
                  <td class="p-2 border">Cắt đoạn cành/rễ khỏi cây mẹ, xử lí kích rễ và cắm vào giá thể ẩm.</td>
                  <td class="p-2 border">Đơn giản, hệ số nhân cao. Bắc: tháng 2–4, 8–10; Nam: tháng 4–5.</td>
                  <td class="p-2 border">Bộ rễ ăn nông, dễ truyền bệnh từ cây mẹ nếu cành nhiễm nấm.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-amber-700 dark:text-amber-400">Chiết cành</td>
                  <td class="p-2 border">Khoanh vỏ, bó giá thể kích rễ ngay khi cành còn gắn trên cây mẹ.</td>
                  <td class="p-2 border">Cây con khoẻ, nhanh ra quả. Bắc: tháng 2–4, 8–9; Nam: tháng 4–5.</td>
                  <td class="p-2 border">Hệ số nhân thấp, tốn công, làm hại tán cây mẹ nếu chiết nhiều.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-purple-700 dark:text-purple-400">Ghép cành / Mắt</td>
                  <td class="p-2 border">Gắn mắt/chồi của cây mẹ lên gốc ghép tương hợp cùng họ.</td>
                  <td class="p-2 border">Cây ghép có rễ gốc khoẻ, chống chịu tốt. Thời vụ: tháng 1–4, 8–9.</td>
                  <td class="p-2 border">Đòi hỏi kĩ thuật tay nghề cao, dao ghép sắc bén.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-blue-700 dark:text-blue-400">Nuôi cấy mô</td>
                  <td class="p-2 border">Nhân tế bào/mô trong môi trường dinh dưỡng vô trùng phòng thí nghiệm.</td>
                  <td class="p-2 border">Tạo hàng triệu cây con sạch bệnh, đồng đều, quanh năm (chuối, dứa).</td>
                  <td class="p-2 border">Đòi hỏi phòng lab vô trùng, chi phí đầu tư cao.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "2. Quy trình thực hành Giâm cành chuẩn mực",
        content: `
          <ol class="list-decimal pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Chọn cành:</strong> Chọn cành bánh tẻ khoẻ mạnh, không sâu bệnh, có 2–4 mầm ngủ.</li>
            <li><strong>Cắt cành:</strong> Dùng kéo sắc cắt vát đoạn cành dài 10–15 cm; bỏ ngọn non và cắt bớt 1/2 phiến lá để giảm thoát hơi nước.</li>
            <li><strong>Xử lí thuốc kích rễ:</strong> Nhúng gốc cành sâu 1–2 cm vào dung dịch kích rễ (IBA/NAA) trong 5–10 giây.</li>
            <li><strong>Cắm vào giá thể:</strong> Cắm hơi nghiêng sâu 3–5 cm vào cát sạch hoặc hỗn hợp trấu hun xơ dừa ẩm.</li>
            <li><strong>Chăm sóc:</strong> Che nắng, tưới phun sương giữ ẩm; sau 10–15 ngày rễ chuyển màu vàng ngà thì ra bầu.</li>
          </ol>
        `
      },
      {
        title: "3. Quy trình thực hành Chiết cành bó bầu",
        content: `
          <ol class="list-decimal pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Chọn cành:</strong> Đường kính 1–2 cm ở giữa tán, vươn ra ngoài ánh sáng, cành bánh tẻ khoẻ.</li>
            <li><strong>Khoanh vỏ:</strong> Cách chạc cành 10–15 cm, khoanh 2 đường cách nhau 3–5 cm, bóc sạch vỏ và <em>cạo sạch lớp tượng tầng sát gỗ</em>. Để khô 2–3 ngày.</li>
            <li><strong>Bôi thuốc &amp; Bó bầu:</strong> Bôi thuốc kích rễ ở mép trên vết khoanh; bó bầu đất mùn tơi ẩm (ẩm độ 70–80%), bọc nilon trong và buộc chặt hai đầu.</li>
            <li><strong>Cắt cành chiết:</strong> Sau 30–60 ngày, khi thấy rễ ra nhiều qua màng nilon chuyển sang màu vàng ngà, cắt cành chiết đem giâm trong vườn ươm.</li>
          </ol>
        `
      },
      {
        title: "4. Quy trình thực hành Ghép mắt nhỏ có gỗ",
        content: `
          <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            <p>1. <strong>Cắt mắt ghép:</strong> Lấy phiến mắt dài 1,5–2 cm có mầm ngủ và một lớp gỗ mỏng trên cành cây mẹ đầu dòng.</p>
            <p>2. <strong>Mở miệng gốc ghép:</strong> Cách mặt bầu 15–20 cm trên thân gốc ghép nhẵn, cắt mở một vết tương tự mắt ghép.</p>
            <p>3. <strong>Áp mắt &amp; Buộc dây:</strong> Đặt mắt ghép áp khít vào miệng gốc ghép; dùng nilon tự hoại quấn kín ép chặt cố định.</p>
            <p>4. <strong>Cắt ngọn gốc ghép:</strong> Sau 15–20 ngày khi mắt ghép tiếp hợp, cắt ngọn gốc ghép phía trên mắt ghép 1,5–2 cm để tập trung dinh dưỡng nuôi mầm ghép bật phát triển.</p>
          </div>
        `
      }
    ],
    practiceList: [
      "Thực hành giâm cành rau ngót hoặc cành hoa hồng/chanh trong chậu cát ẩm.",
      "Thực hành thao tác khoanh vỏ cành chiết và cạo sạch tượng tầng trên cành cây ăn quả.",
      "Thực hành ghép mắt nhỏ có gỗ trên cây bưởi hoặc cây chanh tại vườn trường."
    ],
    quizzes: [
      {
        question: "Trong kĩ thuật chiết cành, vì sao sau khi bóc vỏ cần phải dùng sống dao cạo sạch lớp màng trơn nhớt sát phần gỗ?",
        options: [
          "Để làm vết thương sâu vào ruột gỗ",
          "Để loại bỏ hoàn toàn tầng sinh mô (tượng tầng), ngăn chặn vỏ cây tự liền lại mà không chịu sinh rễ",
          "Để cành nhanh bị khô héo gãy",
          "Để tạo màu sắc đẹp cho cành chiết"
        ],
        correct: 1,
        explain: "Lớp tượng tầng nhớt nếu không cạo sạch sẽ nhanh chóng sinh mô sẹo liền vỏ lại, cành không chịu đâm rễ bất định ra ngoài."
      },
      {
        question: "Dấu hiệu nhận biết cành chiết đã đủ tiêu chuẩn để cắt khỏi cây mẹ đem ra vườn giâm ươm là gì?",
        options: [
          "Lá trên cành chiết rụng hết hoàn toàn",
          "Bầu chiết xuất hiện nhiều rễ nhìn thấy qua màng nilon và rễ chuyển từ màu trắng sang màu vàng ngà",
          "Vừa bó bầu được 3 ngày",
          "Cành chiết nở hoa rực rỡ"
        ],
        correct: 1,
        explain: "Khi rễ mọc xum xuê đâm xuyên quanh bầu và chuyển sang màu vàng ngà là rễ đã già dẻo, đủ sức tự hút nước nuôi cành con."
      },
      {
        question: "Sau khi ghép mắt nhỏ có gỗ được 15–20 ngày và mắt ghép đã tiếp hợp xanh tươi, bước kĩ thuật tiếp theo là gì?",
        options: [
          "Nhổ bỏ toàn bộ cây gốc ghép vứt đi",
          "Cắt bỏ phần ngọn của gốc ghép phía trên mắt ghép 1,5–2 cm để dồn dinh dưỡng nuôi mắt ghép bật chồi",
          "Bôi dầu hoả lên mắt ghép để trừ sâu",
          "Đem phơi nắng gắt cả ngày không tưới"
        ],
        correct: 1,
        explain: "Cắt ngọn gốc ghép giúp triệt tiêu ưu thế ngọn của gốc, kích thích mắt ghép bật mầm phát triển thành thân cành mới."
      },
      {
        question: "Phương pháp nhân giống vô tính nào sau đây có khả năng tạo ra số lượng cây giống khổng lồ, đồng đều và hoàn toàn sạch bệnh trong phòng thí nghiệm?",
        options: ["Nuôi cấy mô tế bào (In vitro)", "Chiết cành truyền thống", "Gieo hạt tự nhiên", "Chôn cành dưới đất"],
        correct: 0,
        explain: "Nuôi cấy mô trong môi trường vô trùng nhân nhanh hàng loạt cây giống sạch bệnh, đồng nhất di truyền (rất phổ biến với chuối, dứa, hoa lan)."
      }
    ]
  },
  {
    id: "bai-3",
    number: "Bài 3",
    title: "Kĩ thuật trồng và chăm sóc cây ăn quả có múi",
    sub: "Cam, bưởi, quýt, chanh: Ngoại cảnh tán xạ, đào hố bón lót, 4 đợt bón phân, tưới nước, tạo tán 3 cấp và phòng trừ bệnh Greening, Loét, Ghẻ lồi.",
    duration: "45 phút",
    diagramKey: "cayCoMui",
    objectives: "Nắm vững đặc điểm sinh học và nhu cầu ngoại cảnh của cây có múi; thực hiện đúng kĩ thuật trồng, bón phân 4 đợt, tưới nước và tỉa tạo tán; nhận biết và phòng trừ hiệu quả rầy chổng cánh truyền bệnh vàng lá Greening.",
    quote: "Quả múi mọng ngọt chứa đầy tinh dầu thơm và vitamin C là kết tinh của đất tơi xốp và ánh sáng tán xạ êm đềm.",
    sections: [
      {
        title: "1. Đặc điểm thực vật & Yêu cầu sinh thái",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Bộ rễ:</strong> Rễ cọc; rễ bên và rễ tơ hút dinh dưỡng tập trung mạnh nhất ở tầng đất mặt nông <strong>10–30 cm</strong>. Rễ cực kì mẫn cảm với úng ngập.</li>
            <li><strong>Nhiệt độ &amp; Ánh sáng:</strong> Thích hợp nhất <strong>23–29 °C</strong> (giới hạn 12–39 °C). Ưa <strong>ánh sáng tán xạ</strong> cường độ 10 000–15 000 lux (không ưa nắng gắt chiếu trực diện cả ngày).</li>
            <li><strong>Nước &amp; Đất:</strong> Ẩm độ 70–80%, lượng mưa 900–1200 mm/năm. Đất thịt nhẹ, phù sa, bazan, tầng dày trên 1 m, thoát nước tốt, pH 5,5–6,4.</li>
          </ul>
        `
      },
      {
        title: "2. Kĩ thuật trồng và bón phân theo chu kì",
        content: `
          <div class="space-y-2 text-xs">
            <p>• <strong>Thời vụ &amp; Mật độ:</strong> Vụ xuân (tháng 2–4), vụ thu (tháng 8–10). Bưởi $5 \\times 5$ m hoặc $5 \\times 6$ m; Cam $4 \\times 4$ m hoặc $4 \\times 5$ m; Chanh/quýt $3 \\times 3$ m.</p>
            <p>• <strong>Hố trồng:</strong> $60 \\times 60 \\times 60$ cm. Bón lót: 20–30 kg phân hữu cơ hoai mục + 1–1,5 kg supe lân + 0,5–1 kg kali + 0,5–1 kg vôi khử chua.</p>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1">
              <strong class="text-emerald-800 dark:text-emerald-300 block font-bold">4 Đợt bón phân cho cây thời kì kinh doanh:</strong>
              <p>1. <em>Sau thu hoạch:</em> Bón toàn bộ phân hữu cơ + 100% lân + phần lớn đạm, kali để phục hồi cây.</p>
              <p>2. <em>Bắt đầu ra hoa:</em> Bón thúc đón hoa (bổ sung đạm và kali).</p>
              <p>3. <em>Sau khi đậu quả:</em> Bón thúc nuôi quả lớn nhanh.</p>
              <p>4. <em>Trước thu hoạch 1,5–2 tháng:</em> Bón kali tăng lượng đường và mẫu mã vỏ quả.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Tỉa cành tạo tán & Điều khiển ra hoa",
        content: `
          <p class="mb-2 text-xs text-slate-700 dark:text-slate-300"><strong>Tạo khung tán 3 cấp:</strong> Năm 1 bấm ngọn ở 80 cm $\\rightarrow$ Năm 2 nuôi 3–5 cành cấp 1 đều 4 hướng, bấm ngọn ở 50–60 cm để tạo cành cấp 2 $\\rightarrow$ Năm 3 hình thành cành cấp 3–4 mang quả.</p>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
            <strong class="text-amber-800 dark:text-amber-300 block font-bold mb-1">Xử lí phân hoá mầm hoa:</strong>
            <p>Hạn chế nước tưới vào tháng 11–12 để tạo khô hạn nhân tạo. Khi lộc ngừng sinh trưởng chuyển sang phân hoá mầm hoa; sách nêu dùng Paclobutrazol (tưới gốc hoặc phun lá) kết hợp cắt nước; khi đậu quả non dùng GA3 hoặc Brassinolide chống rụng quả.</p>
          </div>
        `
      },
      {
        title: "4. Quản lí sâu bệnh chính trên cây có múi",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
              <strong class="text-red-800 dark:text-red-300 block font-bold mb-0.5">Vàng lá Greening (Huanglongbing)</strong>
              <p>Nguy hiểm số 1; vi khuẩn do rầy chổng cánh truyền. Lá vàng loang gân xanh; quả nhỏ méo. Phải trồng cây giống sạch bệnh, trừ rầy và nhổ bỏ cây bệnh nặng.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
              <strong class="text-orange-800 dark:text-orange-300 block font-bold mb-0.5">Bệnh Loét &amp; Ghẻ lồi</strong>
              <p>Vết sần nâu gồ ghề trên lá, quả và cành, có quầng vàng xung quanh. Cắt bỏ tiêu huỷ cành bệnh, phun phòng vào đợt lộc non.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800">
              <strong class="text-yellow-800 dark:text-yellow-300 block font-bold mb-0.5">Sâu vẽ bùa</strong>
              <p>Sâu non đục đường ngoằn ngoèo óng ánh trong biểu bì lá non làm lá quăn queo, mở đường cho vi khuẩn gây bệnh loét xâm nhập.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-800 dark:text-blue-300 block font-bold mb-0.5">Sâu đục thân &amp; Rệp sáp</strong>
              <p>Sâu đục vào thân cành làm gãy đổ; rệp sáp chích hút dịch ngọt quả non và thải mật dẫn dụ nấm bồ hóng bám đen vỏ quả.</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Quan sát triệu chứng sâu vẽ bùa và bệnh loét vi khuẩn trên cành lá bưởi/cam.",
      "Thực hành bấm ngọn và tỉa bỏ cành tăm, cành vượt trong lòng tán cây có múi.",
      "Lập lịch trình 4 đợt bón phân cho một vườn bưởi Diễn 5 năm tuổi."
    ],
    quizzes: [
      {
        question: "Côn trùng nào sau đây là môi giới trung gian truyền bệnh vàng lá Greening cực kì nguy hiểm trên cây có múi?",
        options: ["Bọ xít nâu", "Rầy chổng cánh (Diaphorina citri)", "Ruồi đục quả", "Bướm phượng"],
        correct: 1,
        explain: "Rầy chổng cánh chích hút truyền vi khuẩn Liberobacter gây bệnh vàng lá Greening làm cây có múi suy kiệt không thể phục hồi."
      },
      {
        question: "Hệ rễ bên và rễ tơ hút nước, dinh dưỡng của cây có múi phân bố tập trung chủ yếu ở tầng đất sâu bao nhiêu?",
        options: ["Tầng mặt nông 10–30 cm", "Độ sâu 2 đến 3 mét", "Độ sâu trên 5 mét", "Nằm hoàn toàn nổi trên không khí"],
        correct: 0,
        explain: "Rễ tơ của cam, bưởi tập trung dày đặc ở tầng đất mặt 10–30 cm nên rất nhạy cảm với việc xới xáo mạnh và úng nước."
      },
      {
        question: "Cây ăn quả có múi thích hợp nhất với điều kiện ánh sáng nào sau đây?",
        options: [
          "Ánh sáng tán xạ cường độ 10 000–15 000 lux",
          "Ánh sáng nắng gắt chiếu thẳng 100 000 lux cả ngày",
          "Bóng tối hoàn toàn trong hầm kín",
          "Ánh sáng tia hồng ngoại nhân tạo"
        ],
        correct: 0,
        explain: "Cây có múi nguồn gốc rừng nhiệt đới, ưa ánh sáng tán xạ nhẹ nhàng, quang hợp tối ưu ở 10.000 - 15.000 lux."
      },
      {
        question: "Để kích thích cây có múi phân hoá mầm hoa ra hoa đồng loạt, biện pháp canh tác vào cuối năm thường là gì?",
        options: [
          "Bơm ngập nước vườn suốt 1 tháng",
          "Hạn chế nước tưới tạo khô hạn tạm thời và tỉa bỏ cành vô hiệu",
          "Bón thật nhiều phân đạm kích thích ra lá non",
          "Bẻ gãy toàn bộ cành cấp 1"
        ],
        correct: 1,
        explain: "Cắt nước tạo hạn tạm thời làm ngưng sinh trưởng lộc non, thúc đẩy chồi ngủ chuyển sang phân hoá mầm hoa."
      }
    ]
  },
  {
    id: "bai-4",
    number: "Bài 4",
    title: "Kĩ thuật trồng và chăm sóc cây nhãn",
    sub: "Ngoại cảnh 21–27 °C, nhu cầu xử lí lạnh, mật độ 280 cây/ha, kĩ thuật khoanh vỏ tháng 12, phòng trừ bọ xít nâu và bệnh chổi rồng.",
    duration: "45 phút",
    diagramKey: "cayNhan",
    objectives: "Trình bày được đặc tính sinh học của cây nhãn; giải thích vì sao giống nhãn miền Bắc cần mùa đông lạnh 10 °C để ra hoa; thực hiện kĩ thuật khoanh vỏ điều khiển ra hoa; phòng trừ bọ xít nâu và bệnh chổi rồng.",
    quote: "Cùi nhãn lồng trắng trong, ngọt đậm đà hương thơm đồng bằng là kết tinh của những ngày đông rét buốt ủ mầm hoa xuân.",
    sections: [
      {
        title: "1. Đặc điểm sinh học & Ngoại cảnh cây nhãn",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Hình thái:</strong> Cây thân gỗ lớn, lá kép lông chim mọc so le; hoa mọc thành chùm lớn ở đầu cành gồm hoa đực, hoa cái và lưỡng tính. Thụ phấn nhờ côn trùng (ong mật).</li>
            <li><strong>Yêu cầu nhiệt độ &amp; Lạnh hoá mầm hoa:</strong> Thích hợp <strong>21–27 °C</strong>. Giống nhãn miền Bắc bắt buộc cần <em>thời kì lạnh khoảng 10 °C</em> vào tháng 12 – tháng 1 để phân hoá mầm hoa; giống miền Nam cần mùa đông ngắn 17–22 °C kéo dài 8–10 tuần.</li>
            <li><strong>Nước &amp; Đất:</strong> Mưa 1200–1600 mm/năm. Đất phù sa ven sông, cát pha, thoát nước, pH 5,5–6,4.</li>
          </ul>
        `
      },
      {
        title: "2. Quy trình canh tác và bón thúc",
        content: `
          <div class="space-y-2 text-xs">
            <p>• <strong>Khoảng cách trồng:</strong> $6 \\times 6$ m hoặc $7 \\times 7$ m (mật độ khoảng 280 cây/ha). Hố trồng $80 \\times 80 \\times 50$ cm.</p>
            <p>• <strong>Bón phân thời kì kinh doanh (4 đợt):</strong></p>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1 text-xs">
              <p>1. <em>Sau thu hoạch:</em> Bón phục hồi cây (toàn bộ phân chuồng + 50% đạm + 100% lân).</p>
              <p>2. <em>Đầu hoa:</em> Bón nuôi chùm hoa phát triển khoẻ mạnh.</p>
              <p>3. <em>Sau đậu quả:</em> Bón thúc nuôi quả lớn (đạm + kali).</p>
              <p>4. <em>Trước thu hoạch 1 tháng:</em> Bón thúc tích luỹ đường cho cùi dày ngọt.</p>
            </div>
            <p>• <strong>Cách bón:</strong> Đào rãnh sâu 15–20 cm, rộng 20–30 cm theo hình chiếu mép tán, rải phân, lấp đất và tưới đẫm nước.</p>
          </div>
        `
      },
      {
        title: "3. Kĩ thuật khoanh vỏ điều khiển ra hoa",
        content: `
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-1.5">
            <p><strong>Thời điểm:</strong> Thực hiện vào <strong>tháng 12</strong> dương lịch khi lộc thu đã thuần thục chuyển màu xanh đậm.</p>
            <p><strong>Thao tác:</strong> Chọn cành cấp 1 hoặc cấp 2 ở vị trí cao 0,5–1,5 m. Dùng dao khoanh một vòng tròn quanh vỏ cành với độ rộng vết khoanh <strong>0,3–0,5 cm</strong> (chỉ đứt lớp vỏ, không phạm sâu vào gỗ). Cây quá sung sức có thể khoanh lần 2 sau 15–20 ngày (vết 0,1–0,2 cm).</p>
            <p><strong>Tác dụng:</strong> Chặn dòng nhựa luyện vận chuyển xuống rễ, dồn toàn bộ carbohydrate nuôi chồi ngọn bung hoa đồng loạt.</p>
          </div>
        `
      },
      {
        title: "4. Phòng trừ bọ xít nâu và bệnh chổi rồng",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
              <strong class="text-orange-800 dark:text-orange-300 block font-bold mb-1"><i class="fa-solid fa-bug"></i> Bọ xít nâu (Tessaratoma papillosa)</strong>
              <p>Chích hút nhựa lộc non, chùm hoa và quả non làm hoa héo rụng hàng loạt. Phòng trừ: Rung cây bắt bọ xít vào sáng sớm khi cánh ướt sương, ngắt ổ trứng dưới mặt lá, quét vôi gốc cây.</p>
            </div>
            <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <strong class="text-rose-800 dark:text-rose-300 block font-bold mb-1"><i class="fa-solid fa-broom"></i> Bệnh chổi rồng</strong>
              <p>Do nhện lông nhung truyền virus; chồi ngọn mọc thành chùm dày đặc như chổi sể, lá xoăn nhỏ biến dạng, chùm hoa không đậu quả. Phải cắt bỏ tiêu huỷ chồi bệnh và phun thuốc trừ nhện lông nhung.</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Quan sát ổ trứng và bọ xít nâu trên cây nhãn, nhận biết mặt dưới ổ trứng có 14 quả xếp đều.",
      "Thực hành thao tác khoanh vỏ cành nhãn điều khiển ra hoa đạt độ rộng 0,3–0,5 cm.",
      "Nhận dạng cành nhãn bị bệnh chổi rồng và thực hành cắt tỉa vệ sinh cành bệnh."
    ],
    quizzes: [
      {
        question: "Cây nhãn giống miền Bắc đòi hỏi điều kiện thời tiết đặc thù nào vào khoảng tháng 12 – tháng 1 để phân hoá mầm hoa thuận lợi?",
        options: [
          "Mùa đông rét lạnh khoảng 10 °C kéo dài",
          "Nắng nóng gay gắt trên 40 °C",
          "Mưa lũ ngập úng gốc 20 ngày",
          "Độ ẩm không khí 100% kèm sương muối dày đặc"
        ],
        correct: 0,
        explain: "Nhãn miền Bắc bắt buộc cần thời kì lạnh khoảng 10 °C để ngưng lộc dinh dưỡng và chuyển hoá đỉnh sinh trưởng thành mầm hoa."
      },
      {
        question: "Độ rộng của vết khoanh vỏ cành nhãn vào tháng 12 để kích thích ra hoa theo hướng dẫn SGK là bao nhiêu?",
        options: ["0,3 đến 0,5 cm", "5 đến 10 cm", "Khoanh đứt lìa cả cành", "0,01 mm"],
        correct: 0,
        explain: "Vết khoanh chuẩn rộng 0,3–0,5 cm vừa đủ chặn vận chuyển nhựa luyện xuống gốc trong vài tuần, sau đó vỏ sẽ tự liền sẹo sau khi hoa nở."
      },
      {
        question: "Sinh vật nào là môi giới trung gian truyền bệnh chổi rồng gây dị hình chồi ngọn trên cây nhãn?",
        options: ["Nhện lông nhung (Eriophyes dimocarpi)", "Bướm mắt lạc", "Sâu cuốn lá", "Chuột đồng"],
        correct: 0,
        explain: "Nhện lông nhung chích hút chồi non và truyền tác nhân gây bệnh chổi rồng làm chồi ngọn biến dạng như bó chổi."
      },
      {
        question: "Phương pháp thủ công hiệu quả để diệt trừ bọ xít nâu trưởng thành trên cây nhãn vào mùa đông xuân là gì?",
        options: [
          "Rung cành vào buổi sáng sớm khi bọ xít bị ướt sương lạnh khó bay để nhặt gom tiêu huỷ",
          "Đốt lửa thiêu rụi toàn bộ vườn",
          "Dùng búa gõ mạnh vào rễ cây",
          "Tưới nước muối mặn vào gốc cây"
        ],
        correct: 0,
        explain: "Buổi sáng sớm trời lạnh ướt sương bọ xít thường co cụm ít hoạt động; rung cành làm chúng rơi xuống đất để thu gom dễ dàng."
      }
    ]
  },
  {
    id: "bai-5",
    number: "Bài 5",
    title: "Kĩ thuật trồng và chăm sóc cây xoài",
    sub: "Ngoại cảnh 24–27 °C chịu nóng, tạo tán lùn 0.6–0.8m, xử lí Paclobutrazol + KNO3, phòng trừ thán thư, bọ trĩ và ruồi đục quả.",
    duration: "45 phút",
    diagramKey: "cayXoai",
    objectives: "Nêu được đặc điểm sinh học cây xoài; giải thích kĩ thuật bấm ngọn tạo khung tán lùn; trình bày quy trình kích thích ra hoa bằng Paclobutrazol và KNO3; phòng trừ thán thư và ruồi đục quả.",
    quote: "Quả xoài cát ngọt lịm vàng óng là món quà trác tuyệt của vùng đất nhiều nắng ấm và kĩ thuật điều hoà sinh trưởng khoa học.",
    sections: [
      {
        title: "1. Đặc điểm sinh học & Yêu cầu ngoại cảnh",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Hình thái:</strong> Cây thân gỗ lớn, tán rộng rậm rạp; rễ cọc đâm rất sâu; hoa nhỏ màu vàng mọc thành chùm dày đặc ở đầu ngọn cành; quả thịt vàng ngọt, 1 hạt dẹp có xơ.</li>
            <li><strong>Nhiệt độ &amp; Ánh sáng:</strong> Thích hợp <strong>24–27 °C</strong>, chịu nóng rất tốt (lên tới 40–45 °C); rất sợ rét lạnh kéo dài làm rụng lá và hỏng hoa. <strong>Ưa ánh sáng trực tiếp</strong> toàn phần.</li>
            <li><strong>Đất &amp; Thoát nước:</strong> Đất phù sa, thịt pha cát, tầng sâu, pH 5,5–7,0. Vùng trũng Tây Nam Bộ bắt buộc phải đắp ụ, lên liếp cao ráo.</li>
          </ul>
        `
      },
      {
        title: "2. Kĩ thuật bấm ngọn tạo tán lùn tiện chăm sóc",
        content: `
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
            <p><strong>Bấm ngọn năm đầu:</strong> Khi cây con cao 1–1,2 m, tiến hành bấm ngọn thân chính ở độ cao <strong>0,6–0,8 m</strong>.</p>
            <p><strong>Nuôi cành cấp 1:</strong> Giữ lại 2–3 chồi khoẻ mạnh mọc đều về các hướng làm cành cấp 1. Khi cành cấp 1 dài 1–1,2 m thì tiếp tục bấm ngọn tạo cành cấp 2.</p>
            <p><strong>Ý nghĩa:</strong> Khống chế chiều cao cây, tạo tán hình mâm xôi lùn, giúp cây đón nắng tối đa, chống chịu bão gió và cực kì thuận tiện cho việc bao bọc quả và thu hoạch.</p>
          </div>
        `
      },
      {
        title: "3. Điều khiển ra hoa đậu quả bằng Paclobutrazol & KNO3",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>Sách giáo khoa trình bày quy trình công nghệ điều khiển ra hoa trái vụ:</p>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
              <p>• <strong>Bước 1 (Xử lí Paclobutrazol):</strong> Sau thu hoạch khoảng 45 ngày khi cơi đọt thứ hai chuyển màu xanh bánh tẻ, tưới đều dung dịch <em>Paclobutrazol 10%</em> (10–20 g/m đường kính tán) quanh gốc để ức chế sinh trưởng lộc, kích thích mầm hoa.</p>
              <p>• <strong>Bước 2 (Phun kích mầm KNO3):</strong> Sau xử lí Paclo 40–60 ngày, phun dung dịch <em>KNO3 3%</em> lên lá; sau 7 ngày phun tiếp lần 2 với nồng độ <em>1,5%</em> để đánh thức mầm hoa bung nở đồng loạt.</p>
              <p>• <strong>Tăng đậu quả:</strong> Phun GA3 hoặc Axit Boric (Bo) ở giai đoạn hoa nở 30% để tăng sức sống hạt phấn và chống rụng quả non.</p>
            </div>
          </div>
        `
      },
      {
        title: "4. Sâu bệnh chính trên cây xoài",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
              <strong class="text-red-800 dark:text-red-300 block font-bold mb-1">Bệnh Thán thư (Colletotrichum)</strong>
              <p>Đốm đen tròn lan rộng trên lá non, chùm hoa và vỏ quả; làm cháy khô chùm hoa và rụng quả non. Tỉa tán thông thoáng, phun thuốc phòng nấm.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
              <strong class="text-orange-800 dark:text-orange-300 block font-bold mb-1">Ruồi đục quả (Bactrocera)</strong>
              <p>Ruồi cái chích vỏ quả đẻ trứng; dòi non ăn thịt quả làm thối nhũn và rụng. Biện pháp cốt lõi: Dùng túi chuyên dụng <strong>bao bọc quả</strong> khi quả đạt kích thước ngón chân cái.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800">
              <strong class="text-yellow-800 dark:text-yellow-300 block font-bold mb-1">Bọ trĩ &amp; Rầy bông xoài</strong>
              <p>Chích hút nhựa chồi non, cánh hoa và quả non làm lá cong vẹo, vỏ quả bị sần sùi sọc xám (da cóc/da cám), giảm giá trị thương phẩm.</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Thực hành kĩ thuật bao bọc quả xoài bằng túi giấy chuyên dụng chống ruồi đục quả.",
      "Quan sát vết bệnh thán thư trên lá và hoa xoài, phân biệt với vết chích của bọ trĩ.",
      "Vẽ sơ đồ các bước bấm ngọn tạo khung tán lùn cho cây xoài từ năm thứ nhất đến năm thứ ba."
    ],
    quizzes: [
      {
        question: "Biện pháp sinh học và canh tác nào hiệu quả nhất để bảo vệ quả xoài hoàn toàn khỏi ruồi đục quả mà không cần phun thuốc hoá chất trực tiếp lên quả?",
        options: [
          "Bao bọc quả bằng túi giấy chuyên dụng khi quả còn non",
          "Rung cây mỗi ngày cho ruồi bay đi",
          "Tưới đẫm nước lên tán cây liên tục",
          "Chặt bỏ hết lá xung quanh quả"
        ],
        correct: 0,
        explain: "Bao trái bằng túi giấy ngăn chặn tuyệt đối ruồi chích đẻ trứng, đồng thời giúp vỏ quả xoài sáng đẹp, không dính dư lượng thuốc trừ sâu."
      },
      {
        question: "Trong kĩ thuật tạo tán lùn cho cây xoài, khi cây con cao 1–1,2 m người ta bấm ngọn giữ lại thân chính cao bao nhiêu?",
        options: ["0,6 đến 0,8 m", "2 mét", "Chỉ để lại 5 cm", "Không được bấm ngọn"],
        correct: 0,
        explain: "Bấm ngọn ở 0,6–0,8 m giúp hạ thấp trọng tâm cây, kích thích 2-3 cành cấp 1 bung toả đều tạo bộ khung tán lùn vững chãi."
      },
      {
        question: "Hợp chất nào thường được phun lên tán xoài sau khi xử lí Paclobutrazol 40–60 ngày để phá vỡ miên trạng chồi và kích thích hoa nở đồng loạt?",
        options: ["KNO3 (Kali Nitrat)", "Muối ăn NaCl", "Xà phòng giặt", "Nước cốt chanh"],
        correct: 0,
        explain: "Phun KNO3 (3% rồi 1,5%) có tác dụng kích thích mầm hoa đang ngủ bung nở đồng loạt thành các chùm hoa lớn."
      },
      {
        question: "Cây xoài có khả năng thích nghi đặc biệt nào với nhiệt độ môi trường?",
        options: [
          "Chịu nóng rất tốt (lên tới 40–45 °C) nhưng rất sợ rét lạnh kéo dài",
          "Chỉ sống được ở nơi có tuyết rơi",
          "Chết ngay nếu nhiệt độ vượt quá 28 °C",
          "Không cần ánh sáng mặt trời"
        ],
        correct: 0,
        explain: "Xoài là cây nhiệt đới điển hình, chịu được nắng nóng tới 40-45 °C nhưng nhiệt độ lạnh dưới 10 °C kéo dài sẽ làm rụng hoa quả và thui lá."
      }
    ]
  },
  {
    id: "bai-6",
    number: "Bài 6",
    title: "Kĩ thuật trồng và chăm sóc cây sầu riêng",
    sub: "Ngoại cảnh 24–30 °C, ẩm độ 75–80%, tạo tán tháp nhiều tầng, hoa nở ban đêm, thụ phấn bổ sung và phòng bệnh xì mủ thối rễ Phytophthora.",
    duration: "45 phút",
    diagramKey: "caySauRieng",
    objectives: "Mô tả được đặc tính cây sầu riêng (hoa nở ban đêm, rễ sợ úng); trình bày kĩ thuật tạo tán tháp nhiều tầng; nắm vững phương pháp thụ phấn bổ sung bằng tay; phòng trừ hiệu quả bệnh xì mủ do nấm Phytophthora.",
    quote: "Sầu riêng — vua của các loài quả nhiệt đới, đòi hỏi sự chăm sóc tỉ mỉ từ từng tầng tán đến từng đoá hoa nở lúc nửa đêm.",
    sections: [
      {
        title: "1. Đặc điểm sinh học & Ngoại cảnh khắt khe",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Hình thái:</strong> Cây thân gỗ đại thụ, tán hình tháp; hoa lưỡng tính mọc thành chùm trên thân và cành lớn; <strong>hoa nở về ban đêm</strong> (khoảng 19h–22h). Quả có vỏ gai nhọn cứng, cơm vàng béo ngậy.</li>
            <li><strong>Nhiệt độ &amp; Ẩm độ:</strong> Nhiệt độ tối ưu <strong>24–30 °C</strong> (dưới 22 °C hoặc trên 40 °C sinh trưởng bị ức chế). Lượng mưa 1600–4000 mm/năm, ẩm độ 75–80%.</li>
            <li><strong>Mẫn cảm cực lớn với úng ngập:</strong> Cần rất nhiều nước nhưng đất <em>bắt buộc phải thoát nước cực nhanh</em>. Ngập úng rễ quá 48h sẽ tạo điều kiện cho nấm <em>Phytophthora</em> huỷ hoại toàn bộ vườn cây.</li>
          </ul>
        `
      },
      {
        title: "2. Kĩ thuật tạo tán tháp nhiều tầng & Khoảng cách trồng",
        content: `
          <div class="p-3 bg-lime-50 dark:bg-lime-950/40 rounded-xl border border-lime-200 dark:border-lime-800 text-xs space-y-1.5">
            <p>• <strong>Khoảng cách:</strong> 6–8 m (mật độ 125–277 cây/ha). Đất trũng miền Tây bắt buộc phải <em>đắp mô cao</em> (đáy 1–1,5 m, mặt mô 0,7–1 m) và đào mương thoát nước quanh luống.</p>
            <p>• <strong>Cấu trúc tán tháp:</strong></p>
            <p>- Cành cấp 1 ở tầng dưới cùng phải cách mặt đất tối thiểu <strong>1 mét</strong> để tránh nấm từ đất bắn lên cành quả.</p>
            <p>- Mỗi tầng giữ lại 3–4 cành cấp 1 mọc ngang theo các hướng; các tầng cành cách nhau <strong>0,4–0,6 m</strong>.</p>
            <p>- Cành mọc ngang sẽ cho nhiều quả và quả to hơn cành mọc dốc đứng.</p>
          </div>
        `
      },
      {
        title: "3. Kĩ thuật thụ phấn bổ sung ban đêm & Tỉa quả",
        content: `
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
            <p><strong>Hoa nở ban đêm:</strong> Hạt phấn sầu riêng chín và bung nở vào khoảng 19h–22h đêm, trong khi nhụy hoa sẵn sàng tiếp nhận hạt phấn. Tự thụ phấn tự nhiên thường cho quả méo lệch hộc.</p>
            <p><strong>Thao tác thụ phấn bổ sung bằng tay:</strong> Thu thập hạt phấn lúc 18h; đến 19h–21h dùng chổi lông mềm chấm hạt phấn quét nhẹ nhàng đều lên đầu núm nhụy của các hoa ở vị trí giữa cành lớn. Giúp quả tròn đều, đủ 4–5 hộc cơm đầy đặn, không bị sượng vẹo.</p>
            <p><strong>Tỉa quả:</strong> Tỉa bớt quả méo, quả sâu bệnh, chỉ giữ lại số lượng quả vừa sức nuôi của cành (thường 2–4 quả/chùm lớn).</p>
          </div>
        `
      },
      {
        title: "4. Phòng trừ bệnh xì mủ thối rễ (Phytophthora palmivora)",
        content: `
          <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            <p><strong>Mối đe doạ số 1:</strong> Nấm <em>Phytophthora</em> xâm nhập qua vết thương và rễ bị úng nước. Gây thối rễ, thân cây nứt nẻ chảy nhựa mủ màu nâu đen tanh nồng, lá vàng rụng, quả thối nhũn hàng loạt.</p>
            <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
              <strong class="text-red-800 dark:text-red-300 block font-bold mb-1">Giải pháp quản lí tổng hợp:</strong>
              <p>• Xẻ rãnh thoát nước sâu trong mùa mưa, tuyệt đối không để đọng nước quanh gốc sầu riêng.<br/>
              • Quét vôi hoặc thuốc gốc đồng (Mancozeb, Metalaxyl) quanh thân từ mặt đất lên 1m vào đầu mùa mưa.<br/>
              • Cạo sạch vết xì mủ trên thân đến lớp gỗ trắng rồi quét thuốc đặc trị nấm trực tiếp lên vết bệnh.</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Thực hành thao tác làm chổi lông mềm và kĩ thuật quét phấn thụ phấn bổ sung cho hoa sầu riêng.",
      "Quan sát vết xì mủ trên thân cây sầu riêng và thực hành cạo sạch vỏ bệnh quét thuốc sát khuẩn.",
      "Lập kế hoạch đắp mô thoát nước và tạo tán tháp nhiều tầng cho vườn sầu riêng mới trồng."
    ],
    quizzes: [
      {
        question: "Hoa của cây sầu riêng thường nở và giải phóng hạt phấn mạnh mẽ nhất vào thời điểm nào trong ngày?",
        options: [
          "Vào ban đêm (khoảng 19h đến 22h đêm)",
          "Vào lúc giữa trưa 12h trưa nắng gắt",
          "Vào lúc 5h sáng sớm",
          "Vào lúc hoàng hôn 17h chiều"
        ],
        correct: 0,
        explain: "Hoa sầu riêng nở về đêm (19h–22h); do đó kĩ thuật thụ phấn nhân tạo bổ sung bằng tay phải thực hiện vào khung giờ đêm này."
      },
      {
        question: "Trong kĩ thuật tạo tán tháp cho cây sầu riêng, tầng cành cấp 1 dưới cùng nên cách mặt đất tối thiểu bao nhiêu?",
        options: ["Tối thiểu 1 mét", "5 centimet", "5 mét", "Sát sạt mặt đất"],
        correct: 0,
        explain: "Tầng cành dưới cùng cách đất ít nhất 1m để tránh ẩm thấp và ngăn chặn bào tử nấm từ đất bắn lên cành lá khi trời mưa to."
      },
      {
        question: "Mục đích cốt lõi của việc quét phấn thụ phấn bổ sung bằng tay cho hoa sầu riêng là gì?",
        options: [
          "Giúp quả đậu tròn đều, nở đủ các hộc cơm, không bị méo mó lép hộc",
          "Làm cho vỏ quả đổi sang màu đỏ",
          "Làm cho quả không có gai",
          "Làm cho cây rụng hết lá"
        ],
        correct: 0,
        explain: "Hạt phấn được phân bố đều khắp các núm nhụy sẽ giúp các múi bên trong đều được thụ tinh, quả phát triển cân đối và đủ hộc cơm."
      },
      {
        question: "Bệnh hại nguy hiểm nhất làm thối rễ, nứt thân xì mủ nâu đen trên cây sầu riêng do tác nhân nào gây ra?",
        options: [
          "Nấm Phytophthora palmivora",
          "Vi khuẩn lao",
          "Sâu ăn lá",
          "Rầy xanh"
        ],
        correct: 0,
        explain: "Nấm Phytophthora phát triển cực mạnh trong môi trường đất ẩm ướt ngập úng, tấn công rễ và phá hoại mạch dẫn vỏ thân sầu riêng."
      }
    ]
  },
  {
    id: "bai-7",
    number: "Bài 7",
    title: "Kĩ thuật trồng và chăm sóc cây chuối",
    sub: "Rễ chùm nông, thân ngầm & thân giả, mật độ 2000–2500 cây/ha, chống đổ ngã cuống buồng, bệnh đốm lá Sigatoka, héo vàng và chùn đọt BBTV.",
    duration: "45 phút",
    diagramKey: "cayChuoi",
    objectives: "Mô tả được hình thái đặc thù của cây chuối (thân củ ngầm, thân giả); nắm vững quy trình bón phân thúc, kĩ thuật dùng cọc chống buồng; nhận biết và phòng trừ bệnh đốm lá Sigatoka, héo vàng và chùn đọt virus.",
    quote: "Tàu lá chuối xanh che mát vườn quê, buồng chuối trĩu quả mang lại vị ngọt đậm đà và mùa màng bội thu quanh năm.",
    sections: [
      {
        title: "1. Đặc điểm hình thái học & Sinh thái cây chuối",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Hình thái đặc thù:</strong> Rễ chùm phân bố nông (tập trung 0–30 cm). Thân thật là <strong>thân củ (củ chuối)</strong> nằm ngầm dưới đất; phần thân đứng bên trên là <strong>thân giả</strong> cấu tạo từ các bẹ lá úp chặt vào nhau. Cụm hoa trổ ngọn mang hoa cái thành quả.</li>
            <li><strong>Nhiệt độ &amp; Nước:</strong> Thích hợp <strong>25–35 °C</strong> (dưới 16 °C chậm lớn, dưới 12 °C ngừng sinh trưởng). Lượng mưa 1200–2400 mm/năm; nhu cầu nước rất cao nhưng rễ hoàn toàn không chịu ngập úng.</li>
            <li><strong>Nhạy cảm gió bão:</strong> Thân giả mềm xốp, phiến lá rất rộng nên gió mạnh làm rách nát lá và quật gãy đổ thân mang buồng.</li>
          </ul>
        `
      },
      {
        title: "2. Mật độ, hố trồng và bón thúc phân",
        content: `
          <div class="space-y-2 text-xs">
            <p>• <strong>Mật độ trồng:</strong> Chuối tiêu khoảng $2 \\times 2$ m hoặc $2 \\times 2,5$ m (2000–2500 cây/ha); Chuối tây $2 \\times 2,8$ m (1800–2000 cây/ha).</p>
            <p>• <strong>Hố trồng &amp; Lấp đất:</strong> $40 \\times 40 \\times 40$ cm. Đặt cây con thẳng đứng, lấp đất sâu <strong>cao hơn cổ bầu khoảng 5 cm</strong> để gốc vững chắc.</p>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1 text-xs">
              <strong class="text-emerald-800 dark:text-emerald-300 block font-bold">Quy trình bón thúc phân cho chuối:</strong>
              <p>• Vụ 1 chia làm 7 lần bón (bắt đầu sau trồng 1 tháng, định kì 1,5 tháng/lần).</p>
              <p>• Khi cây còn nhỏ bón cách gốc 20–30 cm; khi cây lớn bón cách gốc 30–60 cm (vì rễ tơ ăn lan rộng ra ngoài).</p>
              <p>• Bổ sung NPK và Kali cao vào giai đoạn trổ buồng để nuôi quả mập đẫy đà.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Kĩ thuật tỉa chồi, cắt lá & Cọc chống buồng",
        content: `
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
            <p><strong>Tỉa chồi con:</strong> Mỗi bụi chỉ giữ lại 1 cây mẹ đang mang buồng + 1 cây con kế cận + 1 chồi con gối vụ; tỉa bỏ các chồi yếu để không cạnh tranh ánh sáng và dinh dưỡng.</p>
            <p><strong>Cắt tỉa lá già:</strong> Cắt bỏ lá già úa có diện tích quang hợp dưới 50% hoặc lá nhiễm nấm bệnh, dọn sạch khỏi vườn.</p>
            <p><strong>Chống đổ buồng chuối:</strong> Khi buồng chuối trổ đẫy đà, trọng lượng nặng lệch tâm dễ làm cây bật gốc. Cần dùng <strong>1–2 cây cọc tre/gỗ</strong> bắt chéo hình chữ X hoặc chống thẳng vào cuống buồng, hoặc chằng dây thép cố định thân cây với cọc neo.</p>
          </div>
        `
      },
      {
        title: "4. Sâu bệnh hại chính trên cây chuối",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div class="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
              <strong class="text-orange-800 dark:text-orange-300 block font-bold mb-1">Đốm lá Sigatoka (Mycosphaerella)</strong>
              <p>Đốm nâu bầu dục viền vàng trên phiến lá, lan nhanh làm lá cháy khô rụi sớm, buồng quả nhỏ, quả chín non ép.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
              <strong class="text-red-800 dark:text-red-300 block font-bold mb-1">Bệnh héo vàng (Panama / Fusarium)</strong>
              <p>Lá vàng rũ từ mép vào gân, cuống gãy gục quanh thân giả; mạch dẫn củ chuối chuyển màu nâu đen, cây chết rụi.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-800 dark:text-purple-300 block font-bold mb-1">Bệnh chùn đọt (BBTV Virus)</strong>
              <p>Lá ngọn nhỏ hẹp, dựng đứng và bó cụm lại như hoa hồng; do rầy mềm truyền; cây cằn cỗi không thể trổ buồng, phải nhổ bỏ.</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Thực hành thao tác dựng cọc tre hình chữ X chống đổ cho một cây chuối đang mang buồng quả nặng.",
      "Thực hành nhận biết và tỉa bỏ các chồi chuối con mọc chen chúc trong bụi.",
      "Quan sát phiến lá chuối bị bệnh đốm lá Sigatoka và thực hành cắt tỉa tiêu huỷ lá bệnh."
    ],
    quizzes: [
      {
        question: "Phần thân mọc đứng phía trên mặt đất của cây chuối có bản chất thực vật học là gì?",
        options: [
          "Thân giả cấu tạo do các bẹ lá úp cuộn chặt vào nhau",
          "Thân gỗ cứng có giác lõi",
          "Thân bò sát mặt đất",
          "Một chiếc lá khổng lồ duy nhất"
        ],
        correct: 0,
        explain: "Thân thật của chuối là củ chuối ngầm dưới đất; phần đứng lên trên cao 2–4m là thân giả gồm các bẹ lá xếp khít vào nhau."
      },
      {
        question: "Khi trồng cây chuối con ra vườn, kĩ thuật lấp đất quanh bầu cây nào sau đây là chuẩn xác theo SGK?",
        options: [
          "Lấp đất sâu cao hơn mặt bầu khoảng 5 cm để cây bám đất chắc chắn",
          "Đặt cây nổi hẳn trên mặt cỏ không cần lấp đất",
          "Chôn sâu cả ngọn cây dưới lòng đất 1 mét",
          "Lấp ngập 1/2 phiến lá non"
        ],
        correct: 0,
        explain: "Lấp đất cao hơn mặt bầu 5 cm giúp che kín củ chuối non, giữ ẩm tốt và kích thích rễ mới đâm ngang bám chặt vào đất."
      },
      {
        question: "Biện pháp quan trọng nhất để ngăn chặn buồng chuối nặng làm cây bị bật gốc, gãy đổ khi gặp mưa gió là gì?",
        options: [
          "Dùng 1–2 cọc tre chống đỡ vào cuống buồng và neo chằng thân giả vững chắc",
          "Chặt bỏ toàn bộ rễ cây",
          "Ngắt vứt bỏ buồng quả ngay khi vừa trổ",
          "Tưới ngập nước cho đất nhão ra"
        ],
        correct: 0,
        explain: "Buồng chuối nặng kéo lệch tâm cây, thân giả lại mềm xốp nên bắt buộc phải dùng cọc chống đỡ buồng và chằng dây neo giữ gốc."
      },
      {
        question: "Bệnh chùn đọt chuối (Banana Bunchy Top Virus - BBTV) lây lan chủ yếu qua côn trùng môi giới nào?",
        options: ["Rầy mềm (rệp muội chuối Pentalonia)", "Bọ xít hút máu", "Ruồi giấm", "Kiến vàng"],
        correct: 0,
        explain: "Rệp muội chuối chích hút truyền virus BBTV gây bệnh chùn đọt làm lá dựng đứng bó cụm, cây cằn cỗi không trổ buồng."
      }
    ]
  },
  {
    id: "bai-8",
    number: "Bài 8",
    title: "Dự án: Trồng cây ăn quả",
    sub: "Tiến trình 5 bước dự án: Khảo sát, chọn giống, dự tính chi phí, công thức tính lãi thuần (C1 = B1 - A1 & D = C2 - (A2 + B2)) và thực hành.",
    duration: "45 phút",
    diagramKey: "duAnKinhTe",
    objectives: "Lập được kế hoạch dự án trồng cây ăn quả hoàn chỉnh; áp dụng công thức tính toán chi phí, nguồn thu và lãi thuần kinh tế cho cây hằng năm và cây lâu năm; vận dụng công cụ tính toán động.",
    quote: "Làm vườn thông minh là sự kết hợp hoàn hảo giữa bàn tay lao động khéo léo và tư duy quản trị tài chính minh bạch.",
    sections: [
      {
        title: "1. Mục tiêu và Ý nghĩa của dự án học tập",
        content: `
          <p class="mb-2 text-xs text-slate-700 dark:text-slate-300">Dự án giúp học sinh vận dụng tổng hợp kiến thức sinh học, kĩ thuật canh tác, giáo dục tài chính, tính toán chi phí đầu tư và dự báo nguồn thu nhập, hình thành phẩm chất của người làm vườn hiện đại.</p>
        `
      },
      {
        title: "2. Tiến trình 5 bước thực hiện dự án",
        content: `
          <div class="space-y-2 text-xs">
            <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <div><strong>Thu thập thông tin:</strong> Khảo sát giống cây phù hợp với thổ nhưỡng địa phương, giá cây giống, kĩ thuật, năng suất ước tính và giá bán nông sản trên thị trường.</div>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <div><strong>Chọn cây &amp; Dụng cụ:</strong> Căn cứ vào điều kiện vườn trường hoặc gia đình (chuối, bưởi, ổi, xoài...) và chuẩn bị cuốc, xẻng, bình tưới, cọc chống, phân bón.</div>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
              <div><strong>Dự tính chi phí &amp; Nguồn thu:</strong> Lập bảng kê chi tiết số lượng, đơn giá cây giống, phân bón, thuốc BVTV, nhân công; tách bạch giai đoạn kiến thiết cơ bản và kinh doanh.</div>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
              <div><strong>Tính toán lãi thuần kinh tế:</strong> Áp dụng công thức SGK để tính hiệu quả sinh lời của dự án.</div>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">5</span>
              <div><strong>Thực hành trồng &amp; Chăm sóc:</strong> Tiến hành đào hố, bón lót, đặt cây, cắm cọc, phủ gốc và tưới giữ ẩm theo đúng quy chuẩn kĩ thuật.</div>
            </div>
          </div>
        `
      },
      {
        title: "3. Hai công thức kinh tế cốt lõi (SGK Công nghệ 9)",
        content: `
          <div class="space-y-3 text-xs">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-800 dark:text-emerald-300 block font-bold mb-1">Công thức 1: Cây ăn quả hằng năm (Chuối, Dứa, Dâu tây...)</strong>
              <p class="text-sm font-black text-emerald-700 dark:text-emerald-400 my-1">$$C_1 = B_1 - A_1$$</p>
              <p>• $A_1$: Tổng chi phí đầu tư trong vụ (cây giống, phân bón, thuốc BVTV, tưới, thu hái).<br/>
              • $B_1$: Tổng nguồn thu từ bán quả trong vụ.<br/>
              • $C_1$: Lãi thuần thu được sau một vụ mùa.</p>
            </div>
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-800 dark:text-blue-300 block font-bold mb-1">Công thức 2: Cây ăn quả lâu năm (Tính đến hết 3 năm đầu kinh doanh)</strong>
              <p class="text-sm font-black text-blue-700 dark:text-blue-400 my-1">$$D = C_2 - (A_2 + B_2)$$</p>
              <p>• $A_2$: Chi phí trong toàn bộ thời kì kiến thiết cơ bản (từ khi trồng đến trước vụ quả đầu tiên).<br/>
              • $B_2$: Tổng chi phí sản xuất trong 3 năm đầu kinh doanh.<br/>
              • $C_2$: Tổng nguồn thu từ bán quả trong 3 năm đầu kinh doanh.<br/>
              • $D$: Lãi thuần tích luỹ thu được sau 3 năm đầu kinh doanh (nếu $D > 0$ dự án bắt đầu sinh lãi).</p>
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Sử dụng Bảng tính động bên dưới để lập kế hoạch tài chính cho vườn bưởi quy mô 100 cây.",
      "Thực hành đào một hố trồng cây 60x60x60 cm, trộn đất mặt với phân hữu cơ và lân để bón lót.",
      "Báo cáo thuyết trình dự án trồng cây ăn quả trước lớp với bảng biểu chi phí và thu nhập minh bạch."
    ],
    quizzes: [
      {
        question: "Theo công thức tính lãi thuần của cây ăn quả lâu năm đến hết 3 năm đầu kinh doanh (D = C2 - (A2 + B2)), đại lượng A2 đại diện cho điều gì?",
        options: [
          "Tổng chi phí trong thời kì kiến thiết cơ bản",
          "Tổng nguồn thu bán quả năm đầu tiên",
          "Tiền mua xe vận chuyển quả",
          "Tiền thưởng cuối năm"
        ],
        correct: 0,
        explain: "A2 là toàn bộ chi phí đầu tư từ khi trồng cho đến khi cây bắt đầu cho thu hoạch vụ quả đầu tiên (thời kì kiến thiết cơ bản)."
      },
      {
        question: "Một dự án trồng chuối có tổng chi phí giống, phân bón, công chăm sóc A1 = 20 triệu VNĐ; tổng thu bán buồng chuối B1 = 38 triệu VNĐ. Lãi thuần C1 là bao nhiêu?",
        options: ["18 triệu VNĐ", "58 triệu VNĐ", "20 triệu VNĐ", "38 triệu VNĐ"],
        correct: 0,
        explain: "Áp dụng công thức C1 = B1 - A1 = 38 - 20 = 18 triệu VNĐ."
      },
      {
        question: "Khi tính toán hiệu quả kinh tế của vườn cây lâu năm, vì sao phải tách riêng chi phí thời kì kiến thiết cơ bản (A2) và chi phí thời kì kinh doanh (B2)?",
        options: [
          "Vì thời kì kiến thiết cơ bản cây chỉ sinh trưởng tạo tán chưa cho thu hoạch, chi phí này xem như vốn đầu tư ban đầu dài hạn",
          "Vì để trốn thuế nông nghiệp",
          "Vì cây lâu năm không cần bón phân ở giai đoạn kinh doanh",
          "Không có lí do gì đặc biệt"
        ],
        correct: 0,
        explain: "Giai đoạn kiến thiết cơ bản (2–4 năm đầu) nhà vườn chỉ có chi ra mà chưa có thu, chi phí này phải được phân bổ hoàn vốn dần vào các năm kinh doanh sau."
      },
      {
        question: "Bước đầu tiên trong tiến trình 5 bước thực hiện dự án trồng cây ăn quả là gì?",
        options: [
          "Thu thập thông tin về giống cây, giá cả, yêu cầu ngoại cảnh và thị trường",
          "Ra chợ bán quả trước khi trồng",
          "Đào hố bừa bãi khi chưa chọn cây",
          "Xịt thuốc trừ sâu khắp vườn"
        ],
        correct: 0,
        explain: "Khảo sát và thu thập thông tin là bước nền tảng để lựa chọn giống cây phù hợp với khí hậu, đất đai và nhu cầu tiêu thụ."
      }
    ]
  }
];

module.exports = { trongCayLessons };
