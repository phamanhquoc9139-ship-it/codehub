// chebienthucpham9_data.js - Dữ liệu 2 chương, 7 bài học Công nghệ 9 Chế biến thực phẩm

const chebienChapters = [
  {
    id: "chuong-1",
    title: "Chương I — Dinh dưỡng và thực phẩm",
    desc: "Cung cấp nền tảng khoa học dinh dưỡng, các nhóm chất sinh năng lượng, cách lựa chọn, bảo tồn vi chất và tìm hiểu các ngành nghề trong chuỗi giá trị ẩm thực.",
    badge: "3 Bài học",
    lessons: [
      {
        id: "bai-1",
        number: "Bài 1",
        title: "Thành phần dinh dưỡng trong thực phẩm",
        sub: "Khám phá 3 nhóm sinh năng lượng (Protein, Lipid, Carbohydrate), vi chất (Vitamin, Khoáng chất), chất xơ, nước và vai trò của Chuyên viên Dinh dưỡng.",
        duration: "45 phút",
        diagramKey: "dinhDuong",
        objectives: "Nêu được vai trò, nguồn cung cấp và nhu cầu của protein, lipid, carbohydrate, vitamin, chất khoáng, chất xơ và nước trong đời sống; phân biệt được protein chuẩn và amino acid thiết yếu; nhận thức giá trị năng lượng sinh học (4-9-4 kcal/g).",
        quote: "Vạn vật là thuốc hay thức ăn tuỳ thuộc vào cách ta hiểu và phối hợp dinh dưỡng mỗi ngày.",
        sections: [
          {
            title: "1. Protein (Chất đạm) & Amino Acid thiết yếu",
            content: `
              <p class="mb-3"><strong>Bản chất & Cấu trúc:</strong> Protein là hợp chất hữu cơ chứa nitrogen cấu tạo từ các chuỗi amino acid. Trong 22 amino acid thường gặp trong thức ăn, có <strong>9 amino acid thiết yếu</strong> mà cơ thể người trưởng thành không tự tổng hợp được, bắt buộc phải hấp thu qua thức ăn.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs">
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1 font-bold"><i class="fa-solid fa-egg"></i> Nguồn động vật & Protein chuẩn</strong>
                  <p>Thịt, cá, trứng, sữa, hải sản. Cung cấp đầy đủ và cân đối tỉ lệ các amino acid thiết yếu. Protein trong lòng trắng trứng và sữa được xem là <em>“protein chuẩn”</em>.</p>
                </div>
                <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1 font-bold"><i class="fa-solid fa-seedling"></i> Nguồn thực vật & Phối hợp</strong>
                  <p>Đậu nành, đỗ xanh, hạt ngũ cốc nguyên cám, nấm. Thường thiếu một vài amino acid nhất định; cần phối hợp đa dạng (như cơm gạo lứt ăn kèm đỗ hoặc lạc vừng) để bổ khuyết lẫn nhau.</p>
                </div>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300"><strong>Giá trị năng lượng & Vai trò:</strong> 1 g protein khi phân giải giải phóng khoảng <strong>4 kcal</strong>. Protein là vật liệu kiến tạo tế bào, cơ bắp, kháng thể miễn dịch và enzyme chuyển hoá.</p>
            `
          },
          {
            title: "2. Lipid (Chất béo) & Năng lượng đậm đặc",
            content: `
              <p class="mb-3"><strong>Giá trị năng lượng cao nhất:</strong> 1 g lipid cung cấp đậm đặc tới <strong>9 kcal</strong> (gấp hơn 2 lần đạm và đường bột). Lipid cấu tạo màng tế bào, mô mỡ đệm chống sốc nhiệt và chấn thương cơ học.</p>
              <div class="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800 text-xs mb-3 space-y-1.5">
                <p><strong>Nguồn gốc:</strong> Mỡ động vật (lợn, gà, bò, cá ba sa...), dầu thực vật (dầu mè, dầu phộng, dầu ôliu, dầu hạt cải), bơ, phô mai.</p>
                <p><strong>Dung môi hoà tan sinh học:</strong> Lipid là môi trường bắt buộc để cơ thể hấp thu 4 loại vitamin tan trong dầu cốt lõi: <strong>Vitamin A, D, E và K</strong>. Bữa ăn thiếu chất béo sẽ gây suy giảm thị lực, loãng xương và giảm đông máu.</p>
              </div>
            `
          },
          {
            title: "3. Carbohydrate (Chất bột đường) — Nguồn nhiên liệu chính",
            content: `
              <p class="mb-3"><strong>Nguồn cung năng lượng chủ yếu:</strong> Cung cấp <strong>58% – 70% tổng năng lượng</strong> hằng ngày cho người Việt Nam. 1 g carbohydrate sinh ra <strong>4 kcal</strong> năng lượng sạch, dễ chuyển hoá trực tiếp cho não bộ và cơ bắp hoạt động.</p>
              <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                <li><strong>Nguồn dồi dào:</strong> Lúa gạo, ngô, khoai lang, sắn, bột mì, yến mạch, đường mía, hoa quả ngọt.</li>
                <li><strong>Cân bằng chỉ số đường huyết (GI):</strong> Nên ưu tiên các loại ngũ cốc nguyên hạt, gạo lứt hoặc khoai củ có nhiều tinh bột phức giải phóng chậm, tránh lạm dụng đường tinh luyện dễ gây tiểu đường và béo phì.</li>
              </ul>
            `
          },
          {
            title: "4. Vitamin, Chất khoáng, Chất xơ và Nước",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-700 dark:text-blue-300 block mb-1 font-bold"><i class="fa-solid fa-capsules"></i> Vitamin (Tan trong nước & Tan trong dầu)</strong>
                  <p>• <em>Tan trong nước:</em> Vitamin nhóm B (B1, B2, B6, B12), Vitamin C. Rất dễ bị phân huỷ bởi nhiệt độ cao hoặc rửa trôi khi ngâm nước lâu.<br/>
                  • <em>Tan trong chất béo:</em> Vitamin A (sáng mắt, biểu mô), D (hấp thu calci), E (chống oxy hoá), K (đông máu). Bền nhiệt hơn nhưng cần chất béo để hấp thu.</p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-teal-700 dark:text-teal-300 block mb-1 font-bold"><i class="fa-solid fa-gem"></i> Chất khoáng & Vi chất vi lượng</strong>
                  <p>Calci và Phosphor (xương và răng), Sắt (cấu tạo hemoglobin hồng cầu chống thiếu máu), Iodine (hormone tuyến giáp phòng bướu cổ), Kẽm (tăng trưởng và miễn dịch).</p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-700 dark:text-emerald-300 block mb-1 font-bold"><i class="fa-solid fa-leaf"></i> Chất xơ & Nước — Cân bằng nội môi</strong>
                  <p>Chất xơ không sinh năng lượng nhưng kích thích nhu động ruột, ngừa táo bón, quét sạch cholesterol xấu. Nước chiếm 60–70% khối lượng cơ thể, là môi trường cho mọi phản ứng trao đổi chất sinh tồn.</p>
                </div>
              </div>
            `
          },
          {
            title: "5. Kết nối nghề nghiệp: Chuyên viên Dinh dưỡng (Dietitian)",
            content: `
              <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs">
                <p><strong>Nhiệm vụ chính:</strong> Tính toán định mức dinh dưỡng, xây dựng thực đơn khoa học cho trường học, bệnh viện, vận động viên thể thao và các cơ sở sản xuất suất ăn công nghiệp.</p>
                <p class="mt-1"><strong>Yêu cầu năng lực:</strong> Nắm vững sinh hoá chuyển hoá, tháp dinh dưỡng theo từng lứa tuổi, kĩ năng giao tiếp, cẩn trọng và kiên nhẫn.</p>
              </div>
            `
          }
        ],
        practiceList: [
          "Lập bảng phân loại các món ăn trong một ngày của bản thân thành 3 nhóm: Giàu đạm, Giàu béo và Giàu tinh bột.",
          "Tính toán tổng năng lượng ước tính của một bữa ăn gồm 100g cơm gạo (carbohydrate), 50g thịt nạc (protein) và 10g dầu xào (lipid).",
          "Thảo luận nhóm về thói quen ăn uống lành mạnh: Vì sao ăn quá nhiều đồ ngọt và thức ăn nhanh chiên ngập dầu lại gây hại tim mạch?"
        ],
        quizzes: [
          {
            question: "Một gam Lipid khi phân giải hoàn toàn trong cơ thể giải phóng khoảng bao nhiêu năng lượng?",
            options: ["4 kcal", "9 kcal", "12 kcal", "2 kcal"],
            correct: 1,
            explain: "1 g Lipid cung cấp đậm đặc khoảng 9 kcal; trong khi 1 g Protein và 1 g Carbohydrate cung cấp khoảng 4 kcal."
          },
          {
            question: "Những loại vitamin nào sau đây thuộc nhóm tan trong chất béo (cần lipid để hấp thụ)?",
            options: ["Vitamin B1, B6, C", "Vitamin A, D, E, K", "Vitamin B12, C, Axit Folic", "Tất cả các loại vitamin"],
            correct: 1,
            explain: "Nhóm vitamin tan trong dầu gồm có Vitamin A, D, E và K. Chúng cần có mặt của chất béo trong khẩu phần ăn để ruột non hấp thụ."
          },
          {
            question: "Protein trong thực phẩm nào sau đây được xem là 'protein chuẩn' nhờ tỉ lệ amino acid cân đối nhất?",
            options: ["Thịt bò hun khói", "Đậu tương lên men", "Trứng và sữa", "Ngô và khoai lang"],
            correct: 2,
            explain: "Theo sách giáo khoa, protein trong trứng và sữa có thành phần amino acid thiết yếu đầy đủ và cân đối nhất với cơ thể người nên gọi là 'protein chuẩn'."
          },
          {
            question: "Chất nào sau đây không sinh năng lượng nhưng giữ vai trò quan trọng kích thích nhu động ruột và chống táo bón?",
            options: ["Carbohydrate", "Lipid", "Protein", "Chất xơ (Dietary Fiber)"],
            correct: 3,
            explain: "Chất xơ không tiêu hoá để sinh năng lượng nhưng giúp tạo khối phân, kích thích nhu động ruột và đào thải cholesterol dư thừa."
          }
        ]
      },
      {
        id: "bai-2",
        number: "Bài 2",
        title: "Lựa chọn và bảo quản thực phẩm",
        sub: "5 nhóm dinh dưỡng theo độ tươi ngon, phương pháp bảo quản hiện đại (lạnh, đông, nhiệt, khô, lên men) và kĩ thuật bảo toàn vi chất khi đun nấu.",
        duration: "45 phút",
        diagramKey: "baoQuan", // or specialized
        objectives: "Nắm vững tiêu chí chọn thực phẩm tươi ngon, an toàn; hiểu rõ cơ chế và ngưỡng nhiệt độ bảo quản lạnh (1–7°C), đông đá (<0°C), phơi sấy khô và lên men; biết kĩ thuật hạn chế hao hụt vitamin khi chế biến.",
        quote: "Bảo quản đúng cách là kéo dài tuổi thọ của thực phẩm và giữ trọn dưỡng chất tinh khiết của thiên nhiên.",
        sections: [
          {
            title: "1. Nguyên tắc lựa chọn 5 nhóm thực phẩm an toàn",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
                <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
                  <strong class="text-rose-800 dark:text-rose-300 font-bold block mb-1">Thịt gia súc, gia cầm tươi</strong>
                  <p>Màng ngoài khô ráo, không nhớt; cơ thịt có màu đỏ hồng tươi đặc trưng; thớ thịt săn chắc, ấn vào có độ đàn hồi nhanh, không có mùi lạ hay đốm gạo (ấu trùng sán).</p>
                </div>
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block mb-1">Cá và thuỷ hải sản tươi</strong>
                  <p>Mắt trong veo lồi tự nhiên, mang đỏ tươi bám chặt, vảy óng ánh bám chắc vào thân; thịt chắc đàn hồi, hậu môn thụt sâu trắng hồng; không bị mềm nhũn hoặc mùi ươn ươn tanh nồng.</p>
                </div>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">Rau xanh, củ và hoa quả</strong>
                  <p>Rau tươi nguyên vẹn cuống lá, không dập nát, màu xanh tự nhiên (không bóng mượt bất thường do kích thích); hoa quả căng mọng, cầm chắc tay, không nhũn mốc.</p>
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">Trứng, sữa và đồ đóng hộp</strong>
                  <p>Trứng vỏ nhám mịn tự nhiên, lắc không thấy tiếng óc; đồ hộp nguyên vẹn nắp đáy phẳng hoặc hơi lõm, tuyệt đối không dùng hộp phồng rộp biến dạng hoặc quá hạn sử dụng.</p>
                </div>
              </div>
            `
          },
          {
            title: "2. Các phương pháp bảo quản thực phẩm phổ biến",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800">
                  <strong class="text-sky-800 dark:text-sky-300 block mb-1 font-bold"><i class="fa-solid fa-snowflake"></i> Bảo quản lạnh (1 °C – 7 °C) & Bảo quản đông (< 0 °C, thường -18 °C)</strong>
                  <p>• <em>Bảo quản lạnh:</em> Làm chậm quá trình sinh sản của vi sinh vật và enzyme phân huỷ, thích hợp giữ rau quả, sữa, thức ăn thừa trong vài ngày.<br/>
                  • <em>Bảo quản đông lạnh:</em> Nước trong tế bào đóng băng, ức chế hầu như hoàn toàn hoạt động của vi sinh vật, bảo quản thịt cá trong nhiều tháng.</p>
                </div>
                <div class="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
                  <strong class="text-orange-800 dark:text-orange-300 block mb-1 font-bold"><i class="fa-solid fa-sun"></i> Phơi sấy khô & Rút ẩm</strong>
                  <p>Hạ hàm lượng nước tự do trong thực phẩm xuống dưới mức vi sinh vật có thể sống được (thóc ngô, cá khô, mực khô, hoa quả sấy dẻo).</p>
                </div>
                <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-800 dark:text-red-300 block mb-1 font-bold"><i class="fa-solid fa-fire-burner"></i> Thanh trùng nhiệt & Đóng hộp tiệt trùng</strong>
                  <p>Dùng nhiệt độ cao để tiêu diệt vi khuẩn và đóng kín chân không ngăn tái nhiễm (sữa tươi thanh trùng, cá hộp, pate đóng hộp).</p>
                </div>
              </div>
            `
          },
          {
            title: "3. Kĩ thuật bảo toàn chất dinh dưỡng khi sơ chế và chế biến",
            content: `
              <ul class="list-disc pl-5 text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Không ngâm rau củ sau khi đã thái nhỏ:</strong> Luôn rửa sạch nguyên củ/nhánh rau dưới vòi nước chảy trước rồi mới thái, tránh làm hoà tan và rửa trôi Vitamin C và vitamin nhóm B.</li>
                <li><strong>Đun nước sôi bùng mới thả rau vào luộc:</strong> Cho chút muối, đậy vung kín để nhiệt độ tăng nhanh, giữ màu xanh diệp lục và rút ngắn thời gian tiếp xúc nhiệt.</li>
                <li><strong>Không ninh nấu thức ăn quá nhừ nhiều lần:</strong> Hâm đi hâm lại nhiều lần phá huỷ cấu trúc protein và làm mất tới 80% các vitamin nhạy cảm.</li>
              </ul>
            `
          },
          {
            title: "4. Kết nối nghề nghiệp: Kĩ sư Công nghệ thực phẩm (Food Technologist)",
            content: `
              <div class="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs">
                <p><strong>Vị trí việc làm:</strong> Làm việc tại các nhà máy chế biến thực phẩm, phòng R&D nghiên cứu sản phẩm mới, phòng QA/QC kiểm định chất lượng an toàn vệ sinh thực phẩm.</p>
                <p class="mt-1"><strong>Nhiệm vụ:</strong> Thiết kế quy trình chế biến công nghiệp, công nghệ sấy thăng hoa, chiếu xạ thực phẩm, kéo dài hạn sử dụng tự nhiên.</p>
              </div>
            `
          }
        ],
        practiceList: [
          "Quan sát và thực hành phân biệt miếng thịt tươi và miếng thịt ươn/đông lạnh nhiều ngày khi đi chợ cùng gia đình.",
          "Thực hiện sắp xếp tủ lạnh gia đình: Ngăn đông, ngăn mát trên (thức ăn chín), ngăn mát dưới (thực phẩm sống bao gói kín), ngăn hộc rau củ.",
          "Làm thí nghiệm so sánh màu sắc và độ giòn của rau muống luộc khi đậy vung nước sôi bùng so với luộc nước lạnh mở vung kéo dài."
        ],
        quizzes: [
          {
            question: "Nhiệt độ tối ưu thường được thiết lập cho ngăn mát tủ lạnh để bảo quản thực phẩm ngắn ngày là bao nhiêu?",
            options: ["1 °C đến 7 °C", "10 °C đến 25 °C", "-5 °C đến 0 °C", "37 °C"],
            correct: 0,
            explain: "Ngăn mát tủ lạnh duy trì từ 1 °C đến 7 °C giúp làm chậm sự phát triển của vi sinh vật gây ôi thiu."
          },
          {
            question: "Để hạn chế thất thoát vitamin tan trong nước (như Vitamin C, B), thao tác sơ chế rau nào sau đây là ĐÚNG?",
            options: [
              "Thái nhỏ thật mỏng rồi ngâm vào chậu nước muối 30 phút",
              "Rửa sạch rau nguyên cây/cành trước dưới vòi nước rồi mới thái nhỏ",
              "Ngâm rau trong nước ấm trước khi nấu",
              "Bào vỏ củ gọt vỏ rồi ngâm nước qua đêm"
            ],
            correct: 1,
            explain: "Luôn phải rửa sạch rau nguyên củ/nhánh trước, sau đó mới thái để tránh hòa tan và rửa trôi các vitamin tan trong nước."
          },
          {
            question: "Đặc điểm nào sau đây KHÔNG PHẢI là dấu hiệu của một miếng thịt lợn tươi ngon?",
            options: [
              "Màng ngoài khô ráo, thớ thịt đỏ hồng tự nhiên",
              "Ấn ngón tay vào có độ đàn hồi nhanh, không để lại vết lõm",
              "Bề mặt nhớt dính tay, có mùi ôi nhẹ và thớ thịt nhão xám",
              "Mỡ có màu trắng trong, không có đốm xuất huyết"
            ],
            correct: 2,
            explain: "Bề mặt nhớt dính tay, thịt đổi màu xám và có mùi lạ là biểu hiện rõ rệt của thịt ươn đã bị vi khuẩn phân huỷ."
          },
          {
            question: "Kĩ sư công nghệ thực phẩm làm việc chủ yếu trong lĩnh vực nào sau đây?",
            options: [
              "Nghiên cứu công thức chế biến công nghiệp, bảo quản và kiểm soát chất lượng thực phẩm",
              "Trực tiếp lái xe giao hàng thực phẩm siêu thị",
              "Kê đơn thuốc điều trị bệnh nhân tại bệnh viện",
              "Sửa chữa động cơ ô tô tải vận chuyển gạo"
            ],
            correct: 0,
            explain: "Kĩ sư công nghệ thực phẩm chịu trách nhiệm nghiên cứu sản phẩm mới, cải tiến công nghệ đóng gói bảo quản và kiểm nghiệm an toàn thực phẩm."
          }
        ]
      },
      {
        id: "bai-3",
        number: "Bài 3",
        title: "Một số ngành nghề liên quan đến chế biến thực phẩm",
        sub: "Hồ sơ nghề nghiệp: Thợ chế biến thực phẩm, Thợ vận hành máy sản xuất, Đầu bếp trưởng (Executive Chef), Nhân viên chuẩn bị đồ ăn nhanh và bảng tự đánh giá năng lực.",
        duration: "45 phút",
        diagramKey: "ngheNghiep",
        objectives: "Mô tả được đặc điểm công việc, môi trường làm việc, yêu cầu kiến thức, kĩ năng và phẩm chất của các nghề trong lĩnh vực ẩm thực; tự đánh giá mức độ phù hợp bản thân với nhóm nghề chế biến thực phẩm.",
        quote: "Nghề làm bếp là sự thăng hoa của tình yêu thương, tính kỉ luật và niềm đam mê sáng tạo từng hương vị thơm ngon.",
        sections: [
          {
            title: "1. Thợ chế biến thực phẩm (Food Processing Worker)",
            content: `
              <p class="mb-2"><strong>Mô tả công việc:</strong> Thực hiện các công đoạn phân loại, sơ chế, tẩm ướp, làm sạch, đóng gói và bảo quản tại các cơ sở chế biến nông sản, thuỷ hải sản hoặc bếp ăn tập thể.</p>
              <p class="text-xs text-slate-700 dark:text-slate-300"><strong>Yêu cầu:</strong> Sức khoẻ tốt, dẻo dai, chịu được môi trường nhiệt độ lạnh hoặc ẩm ướt; tuân thủ nghiêm ngặt quy trình vệ sinh an toàn và thao tác dùng dao kéo chuyên nghiệp.</p>
            `
          },
          {
            title: "2. Thợ vận hành máy chế biến thực phẩm (Food Machinery Operator)",
            content: `
              <p class="mb-2"><strong>Mô tả công việc:</strong> Vận hành, điều khiển, giám sát các dây chuyền máy móc tự động và bán tự động: máy đóng gói, máy chiết rót đồ uống, lò sấy công nghiệp, hệ thống thanh trùng tiệt trùng.</p>
              <p class="text-xs text-slate-700 dark:text-slate-300"><strong>Yêu cầu:</strong> Am hiểu thông số kĩ thuật máy móc, quy trình kiểm soát nhiệt độ, áp suất; có kĩ năng phản ứng nhanh khi có sự cố dây chuyền và tính kỉ luật an toàn lao động cao.</p>
            `
          },
          {
            title: "3. Đầu bếp và Bếp trưởng (Chef / Executive Chef)",
            content: `
              <p class="mb-2"><strong>Mô tả công việc:</strong> Lên thực đơn, tuyển chọn nguyên liệu cao cấp, tính toán định lượng chi phí món ăn, trực tiếp chế biến và điều hành toàn bộ đội ngũ phụ bếp trong nhà hàng, khách sạn.</p>
              <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1">
                <p><strong>Yêu cầu chuyên môn cao:</strong> Vị giác và khứu giác tinh tế; đôi tay khéo léo; thẩm mĩ trình bày đĩa ăn đỉnh cao; khả năng chịu áp lực thời gian cực lớn trong giờ cao điểm của nhà hàng.</p>
              </div>
            `
          },
          {
            title: "4. Nhân viên chuẩn bị thức ăn nhanh (Fast Food Attendant)",
            content: `
              <p class="mb-2"><strong>Mô tả công việc:</strong> Chế biến các món ăn nhanh theo công thức chuẩn hoá định lượng sẵn (burger, gà rán, khoai tây chiên, pizza), phục vụ khách hàng tại quầy và vệ sinh trang thiết bị.</p>
              <p class="text-xs text-slate-700 dark:text-slate-300"><strong>Yêu cầu:</strong> Tốc độ thao tác nhanh chóng, chính xác; thái độ giao tiếp thân thiện, niềm nở; chấp hành định lượng đồng nhất trên toàn chuỗi cửa hàng.</p>
            `
          },
          {
            title: "5. Bảng tự đánh giá mức độ phù hợp với nghề Chế biến thực phẩm",
            content: `
              <div class="overflow-x-auto text-xs">
                <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 text-left">
                  <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                    <tr><th class="p-2 border">Tiêu chí phẩm chất / Năng lực</th><th class="p-2 border">Biểu hiện thực tế</th><th class="p-2 border">Mức độ tự chấm (1-5 sao)</th></tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr><td class="p-2 border font-medium">Sở thích nấu nướng</td><td class="p-2 border">Thích thử món mới, tò mò về nguyên liệu và gia vị</td><td class="p-2 border text-amber-500">★★★★☆</td></tr>
                    <tr><td class="p-2 border font-medium">Vệ sinh và kỉ luật</td><td class="p-2 border">Luôn rửa tay sạch sẽ, giữ gian bếp gọn gàng</td><td class="p-2 border text-amber-500">★★★★★</td></tr>
                    <tr><td class="p-2 border font-medium">Khéo tay & Cảm vị giác</td><td class="p-2 border">Cắt thái đều đặn, nêm nếm gia vị hài hoà</td><td class="p-2 border text-amber-500">★★★★☆</td></tr>
                    <tr><td class="p-2 border font-medium">Sức khoẻ & Chịu áp lực</td><td class="p-2 border">Đứng lâu trong bếp nóng mà không nản chí</td><td class="p-2 border text-amber-500">★★★☆☆</td></tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ],
        practiceList: [
          "Phỏng vấn một người thân hoặc thợ làm bánh, đầu bếp quen biết về một ngày làm việc điển hình.",
          "Điền bảng tự đánh giá 4 tiêu chí năng lực của bản thân để xem mình có tiềm năng trở thành đầu bếp hay kĩ sư thực phẩm không.",
          "Thảo luận về cơ hội việc làm của ngành dịch vụ ăn uống và du lịch ẩm thực Việt Nam trong xu thế hội nhập quốc tế."
        ],
        quizzes: [
          {
            question: "Nhiệm vụ nào sau đây là trọng tâm công việc của một Bếp trưởng (Executive Chef)?",
            options: [
              "Thiết kế thực đơn, sáng tạo món ăn, kiểm soát chất lượng và điều hành hoạt động của bếp",
              "Sửa chữa máy phát điện và đường ống nước của khách sạn",
              "Lái xe đưa đón thực khách về nhà sau bữa tiệc",
              "In ấn tờ rơi quảng cáo khuyến mãi ngoài đường phố"
            ],
            correct: 0,
            explain: "Bếp trưởng chịu trách nhiệm linh hồn cho thực đơn ẩm thực, quản lý nhân sự bếp, sáng tạo món mới và kiểm soát chi phí thực phẩm."
          },
          {
            question: "Đặc điểm nào là yêu cầu then chốt đối với Nhân viên chuẩn bị đồ ăn nhanh (Fast Food)?",
            options: [
              "Mỗi ngày nấu một công thức tự do không cần định lượng",
              "Thao tác nhanh, tuân thủ đúng định lượng chuẩn mực của chuỗi cửa hàng và giao tiếp niềm nở",
              "Chỉ làm việc khi có sự giám sát trực tiếp của kĩ sư thực phẩm",
              "Phải biết sáng tác nhạc nền cho quán ăn"
            ],
            correct: 1,
            explain: "Ngành thức ăn nhanh yêu cầu sự chuẩn hoá nghiêm ngặt về thời gian chiên rán, định lượng sốt, quy trình vệ sinh và phong cách phục vụ nhanh chóng."
          },
          {
            question: "Thợ vận hành máy chế biến thực phẩm làm việc chủ yếu tại môi trường nào?",
            options: [
              "Văn phòng luật sư tư vấn",
              "Các nhà máy sản xuất, nhà máy đóng hộp và dây chuyền chế biến nông sản thực phẩm",
              "Phòng thu âm phát thanh truyền hình",
              "Trên các tàu đánh bắt cá ngoài khơi xa"
            ],
            correct: 1,
            explain: "Họ vận hành các cỗ máy chiết rót, đóng gói, sấy công nghiệp trong các nhà xưởng, nhà máy chế biến thực phẩm hiện đại."
          },
          {
            question: "Khi tự đánh giá mức độ phù hợp với nghề đầu bếp, yếu tố nào sau đây là quan trọng nhất?",
            options: [
              "Niềm đam mê ẩm thực, sự khéo léo, tính kỉ luật vệ sinh và khả năng chịu áp lực bền bỉ",
              "Khả năng thuộc lòng tất cả các bài thơ cổ",
              "Khả năng chạy bộ marathon 42 km",
              "Sở hữu nhiều trang phục dạ hội đẹp"
            ],
            correct: 0,
            explain: "Nghề bếp đòi hỏi đam mê vị giác, sự tinh tế khéo léo, tôn trọng an toàn vệ sinh và thể lực dẻo dai chịu nhiệt độ nóng của bếp lửa."
          }
        ]
      }
    ]
  },
  {
    id: "chuong-2",
    title: "Chương II — Tổ chức và chế biến món ăn",
    desc: "Quy trình thiết kế nhà bếp chuẩn Tam giác hoạt động, 10 quy tắc vàng an toàn thực phẩm WHO, dự án tính chi phí thực đơn và toàn bộ phương pháp chế biến có nhiệt & không sử dụng nhiệt.",
    badge: "4 Bài học",
    lessons: [
      {
        id: "bai-4",
        number: "Bài 4",
        title: "An toàn lao động và an toàn vệ sinh thực phẩm",
        sub: "Nhận diện nguy cơ bếp (cháy, bỏng, điện, ngã, đứt tay), bảo dưỡng dụng cụ và 10 quy tắc vàng WHO cùng nguyên lí Tam giác hoạt động.",
        duration: "45 phút",
        diagramKey: "tamGiacBep",
        objectives: "Nhận biết các mối nguy hiểm trong không gian bếp; áp dụng quy tắc an toàn khi sử dụng gas, điện, dao kéo và dụng cụ kim loại/thuỷ tinh; ghi nhớ 10 quy tắc vàng an toàn thực phẩm; giải thích nguyên lí Tam giác hoạt động.",
        quote: "Bếp an toàn là khởi đầu của món ăn ngon và sức khoẻ trọn vẹn của cả gia đình.",
        sections: [
          {
            title: "1. Nhận diện các mối nguy hiểm tiềm ẩn trong nhà bếp",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
                <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-800 dark:text-red-300 font-bold block mb-1"><i class="fa-solid fa-fire"></i> Bỏng & Cháy nổ bếp gas, dầu mỡ</strong>
                  <p>Mỡ sôi bắn ra ngoài, quên khoá van bình gas, để khăn lau bén lửa gần bếp, dùng nước dập đám cháy dầu mỡ (tuyệt đối cấm - phải dùng nắp vung hoặc chăn ẩm trùm kín).</p>
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1"><i class="fa-solid fa-scissors"></i> Vết cắt do dao kéo & Thuỷ tinh vỡ</strong>
                  <p>Dùng dao cùn trượt lưỡi cắt vào tay, để dao lộn xộn trong chậu rửa đầy bọt xà phòng, mảnh bát vỡ sắc nhọn gây rách sâu.</p>
                </div>
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block mb-1"><i class="fa-solid fa-bolt"></i> Điện giật & Ngã trượt sàn ướt</strong>
                  <p>Tay ướt cắm phích điện nồi chiên không dầu/ấm siêu tốc, dây điện bị chuột cắn hở; sàn nhà dính mỡ trơn trượt không lau khô kịp thời.</p>
                </div>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
                  <strong class="text-purple-800 dark:text-purple-300 font-bold block mb-1"><i class="fa-solid fa-biohazard"></i> Ngộ độc chéo vi khuẩn (Cross-contamination)</strong>
                  <p>Dùng chung một thớt thái thịt sống sang thái hoa quả hoặc giò chả ăn ngay; không rửa sạch tay sau khi chạm vào cá sống.</p>
                </div>
              </div>
            `
          },
          {
            title: "2. Quy tắc sử dụng dụng cụ nhà bếp an toàn",
            content: `
              <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                <li><strong>Thớt gỗ / Thớt nhựa:</strong> Phải dùng riêng biệt 2 chiếc thớt: Một thớt chuyên cắt thái <em>thực phẩm sống</em> và một thớt chuyên cắt thái <em>thực phẩm chín ăn liền</em>. Rửa sạch, dựng nghiêng cho khô ráo, định kì thay thớt khi có vết nứt sâu chứa ẩm mốc.</li>
                <li><strong>Đồ thuỷ tinh & Gốm sứ:</strong> Tránh sốc nhiệt đột ngột (không đưa đĩa thuỷ tinh đang lạnh trong tủ đá vào thẳng lò nướng đang đỏ lửa).</li>
                <li><strong>Dụng cụ kim loại & Chảo chống dính:</strong> Không dùng thìa sắt cạo mạnh đáy chảo chống dính; không để thức ăn có tính acid cao (chanh, giấm, măng chua) lưu cữu nhiều ngày trong đồ nhôm/gang không tráng men.</li>
              </ul>
            `
          },
          {
            title: "3. Nguyên lí Tam giác hoạt động nhà bếp (Kitchen Work Triangle)",
            content: `
              <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs mb-3">
                <p><strong>3 Đỉnh cốt lõi:</strong> Gồm <strong>Tủ lạnh</strong> (Lưu trữ nguyên liệu) $\rightarrow$ <strong>Bồn rửa</strong> (Sơ chế, làm sạch) $\rightarrow$ <strong>Bếp nấu</strong> (Gia nhiệt, hoàn thiện).</p>
                <p class="mt-1"><strong>Ý nghĩa:</strong> Bố trí hợp lí giúp người nấu di chuyển ngắn nhất, trôi chảy một chiều, không va chạm chéo giữa thực phẩm bẩn và thực phẩm chín, tiết kiệm tối đa thời gian và công sức.</p>
              </div>
            `
          },
          {
            title: "4. Mười quy tắc vàng an toàn thực phẩm của WHO",
            content: `
              <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <p>1. Chọn thực phẩm tươi sạch, có nguồn gốc rõ ràng, không dập nát hôi thối.</p>
                <p>2. Nấu chín kĩ thức ăn (đảm bảo nhiệt độ tâm thực phẩm đạt tối thiểu <strong>70 °C</strong>).</p>
                <p>3. Ăn ngay khi thức ăn vừa nấu chín còn nóng sốt.</p>
                <p>4. Bảo quản cẩn thận thức ăn đã nấu chín (giữ nóng trên 60 °C hoặc làm lạnh dưới 10 °C).</p>
                <p>5. Đun sôi lại thức ăn thật kĩ trước khi dùng lại (đạt trên 70 °C).</p>
                <p>6. Tránh tiếp xúc chéo giữa thức ăn sống và thức ăn đã chín.</p>
                <p>7. Rửa tay thật sạch bằng xà phòng trước khi chế biến và sau mỗi lần gián đoạn.</p>
                <p>8. Giữ cho bề mặt gian bếp, dụng cụ, khăn lau luôn khô ráo, sạch khuẩn.</p>
                <p>9. Che đậy kín thực phẩm để tránh côn trùng, gián, chuột xâm nhập.</p>
                <p>10. Sử dụng nguồn nước sạch an toàn tuyệt đối trong chế biến và nấu nướng.</p>
              </div>
            `
          }
        ],
        practiceList: [
          "Thực hành vệ sinh khử khuẩn bàn bếp và thớt sau khi sơ chế cá sống.",
          "Vẽ sơ đồ bố trí bếp nhà mình và kiểm tra xem có tạo thành Tam giác hoạt động thuận tiện không.",
          "Tập xử lí tình huống giả định: Khi phát hiện chảo dầu bốc khói đen và bén lửa thì cần làm những bước nào?"
        ],
        quizzes: [
          {
            question: "Khi chảo dầu mỡ trên bếp bất ngờ bén lửa bùng cháy dữ dội, hành động nào sau đây là TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM?",
            options: [
              "Hắt một gáo nước lạnh vào chảo dầu",
              "Tắt ngay nguồn lửa hoặc khoá van bếp",
              "Dùng nắp vung kim loại đậy kín miệng chảo để dập tắt oxy",
              "Trùm một chiếc khăn dày đã vắt ẩm lên trên chảo"
            ],
            correct: 0,
            explain: "Hắt nước vào dầu sôi sẽ khiến nước bốc hơi cực nhanh làm dầu bắn tung toé ra xung quanh, gây ngọn lửa bùng phát lớn hơn và gây bỏng nghiêm trọng."
          },
          {
            question: "Nhiệt độ tâm thực phẩm an toàn tối thiểu theo khuyến cáo để tiêu diệt mầm bệnh khi nấu chín là bao nhiêu?",
            options: ["40 °C", "50 °C", "70 °C", "100 °C"],
            correct: 2,
            explain: "WHO và tài liệu hướng dẫn nhiệt độ tại tâm dày nhất của thực phẩm phải đạt tối thiểu 70 °C để đảm bảo tiêu diệt vi khuẩn gây ngộ độc."
          },
          {
            question: "Ba đỉnh của 'Tam giác hoạt động nhà bếp' (Kitchen Work Triangle) gồm những khu vực nào?",
            options: [
              "Bàn ăn, Cửa sổ, Tủ rượu",
              "Tủ lạnh (Lưu trữ), Bồn rửa (Sơ chế), Bếp nấu (Gia nhiệt)",
              "Bàn làm việc, Thùng rác, Máy giặt",
              "Kệ gia vị, Máy hút mùi, Lò vi sóng"
            ],
            correct: 1,
            explain: "Tam giác vàng nhà bếp kết nối 3 trạm công việc cốt lõi: Tủ lạnh $\\rightarrow$ Bồn rửa $\\rightarrow$ Bếp đun, tạo chu trình di chuyển liền mạch và an toàn."
          },
          {
            question: "Để phòng tránh nhiễm khuẩn chéo trong nhà bếp, biện pháp cơ bản nhất là gì?",
            options: [
              "Dùng chung một con dao và thớt cho cả thịt sống lẫn giò chả chín",
              "Sử dụng dao thớt riêng biệt cho thực phẩm sống và thực phẩm chín",
              "Chỉ rửa dao thớt một lần vào cuối tuần",
              "Để thịt sống trên cùng ngăn với bánh kem trong tủ lạnh"
            ],
            correct: 1,
            explain: "Cần tách bạch hoàn toàn dụng cụ (dao, thớt) cho đồ sống và đồ chín để ngăn chặn vi khuẩn từ thực phẩm sống lây nhiễm sang thức ăn ăn liền."
          }
        ]
      },
      {
        id: "bai-5",
        number: "Bài 5",
        title: "Dự án: Tính toán chi phí bữa ăn theo thực đơn",
        sub: "Tiến trình dự án 7 bước: Lên thực đơn, tính định lượng, tra cứu đơn giá, quy đổi g/kg, công thức tổng chi phí và widget thực hành tính toán động.",
        duration: "45 phút",
        diagramKey: "quyTrinhChiPhi", // or calculator below
        objectives: "Nêu được các bước tính toán chi phí một bữa ăn gia đình; nắm vững công thức quy đổi khối lượng và giá thành; hoàn thành dự án tính chi phí thực tế cho gia đình 4 người với số liệu minh bạch.",
        quote: "Khéo ăn thì no, khéo co thì ấm — tính toán chi tiêu thông minh là phẩm chất của người nội trợ hiện đại.",
        sections: [
          {
            title: "1. Mục tiêu và Ý nghĩa của việc tính toán chi phí bữa ăn",
            content: `
              <p class="mb-2">Biết tính toán chi phí giúp học sinh chủ động quản lí ngân sách gia đình, tránh lãng phí dư thừa thực phẩm, đảm bảo bữa ăn vừa ngon miệng, đủ dinh dưỡng mà vẫn phù hợp với điều kiện kinh tế.</p>
            `
          },
          {
            title: "2. Quy trình 7 bước thực hiện dự án",
            content: `
              <div class="space-y-2 text-xs">
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <div><strong>Xác định đối tượng & Số lượng người ăn:</strong> Ví dụ: Bữa cơm trưa cho gia đình 4 người (2 người lớn, 2 học sinh).</div>
                </div>
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <div><strong>Xây dựng thực đơn cân đối 4 nhóm dinh dưỡng:</strong> Gồm món chính (thịt/cá), món phụ (đậu/trứng), món canh rau, món tráng miệng và gia vị.</div>
                </div>
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                  <div><strong>Lập danh mục nguyên liệu & Ước tính định lượng:</strong> Xác định cụ thể khối lượng cần mua (ví dụ: 400g thịt, 1 mớ rau, 4 quả trứng).</div>
                </div>
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
                  <div><strong>Khảo sát và thu thập đơn giá thực tế:</strong> Khảo sát giá tại chợ dân sinh hoặc siêu thị theo đơn vị tính (đồng/kg, đồng/quả).</div>
                </div>
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">5</span>
                  <div><strong>Quy đổi đơn vị và tính chi phí từng món:</strong> Áp dụng công thức quy đổi $1\\text{ kg} = 1000\\text{ g}$ để tính thành tiền từng nguyên liệu.</div>
                </div>
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">6</span>
                  <div><strong>Cộng tổng chi phí & Tính chi phí bình quân một suất:</strong> Chia tổng số tiền cho số lượng người ăn để kiểm tra tính hợp lí.</div>
                </div>
                <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">7</span>
                  <div><strong>Báo cáo, đánh giá và điều chỉnh thực tế:</strong> Thay đổi món đắt bằng món kinh tế hơn nếu vượt quá hạn mức chi tiêu.</div>
                </div>
              </div>
            `
          },
          {
            title: "3. Công thức tính toán cốt lõi",
            content: `
              <div class="p-3 bg-amber-100/70 dark:bg-amber-950/60 rounded-xl border border-amber-300 dark:border-amber-800 text-xs space-y-2">
                <p>• <strong>Nguyên liệu tính theo gam (g):</strong><br/>
                $$\\text{Chi phí (VNĐ)} = \\frac{\\text{Khối lượng (g)}}{1000} \\times \\text{Đơn giá (VNĐ/kg)}$$</p>
                <p>• <strong>Nguyên liệu tính theo cái / quả / mớ:</strong><br/>
                $$\\text{Chi phí (VNĐ)} = \\text{Số lượng} \\times \\text{Đơn giá (VNĐ/đơn vị)}$$</p>
                <p>• <strong>Chi phí bình quân 1 người ăn:</strong><br/>
                $$\\text{Chi phí / người} = \\frac{\\text{Tổng chi phí bữa ăn}}{\\text{Số người ăn}}$$</p>
              </div>
            `
          }
        ],
        practiceList: [
          "Sử dụng Bảng tính động bên dưới để lập chi phí bữa cơm trưa ngày Chủ nhật của gia đình em.",
          "So sánh giá thành khi tự đi chợ mua nấu tại nhà so với đi ăn suất cơm văn phòng hoặc nhà hàng cùng lượng món.",
          "Đề xuất 2 giải pháp giảm bớt chi phí bữa ăn mà vẫn giữ nguyên giá trị dinh dưỡng (ví dụ: ăn thực phẩm theo đúng mùa vụ)."
        ],
        quizzes: [
          {
            question: "Nếu mua 500 gam thịt nạc thăn với đơn giá 130.000 VNĐ/kg, số tiền phải trả là bao nhiêu?",
            options: ["65.000 VNĐ", "130.000 VNĐ", "50.000 VNĐ", "75.000 VNĐ"],
            correct: 0,
            explain: "Áp dụng công thức: (500 / 1000) * 130.000 = 0.5 * 130.000 = 65.000 VNĐ."
          },
          {
            question: "Một bữa ăn cho 5 người có tổng chi phí nguyên liệu là 150.000 VNĐ. Chi phí bình quân cho mỗi khẩu phần là bao nhiêu?",
            options: ["25.000 VNĐ/người", "30.000 VNĐ/người", "35.000 VNĐ/người", "50.000 VNĐ/người"],
            correct: 1,
            explain: "Chi phí mỗi người = 150.000 / 5 = 30.000 VNĐ/người."
          },
          {
            question: "Hành động nào sau đây giúp tiết kiệm chi phí bữa ăn một cách thông minh mà không làm suy giảm chất lượng dinh dưỡng?",
            options: [
              "Bỏ hẳn món đạm thịt cá trong cả tuần",
              "Chọn mua rau củ quả theo đúng mùa vụ tự nhiên thay vì mua hàng trái mùa đắt đỏ",
              "Mua thực phẩm cận date ôi thiu giảm giá sâu",
              "Cắt giảm nước sạch khi nấu ăn"
            ],
            correct: 1,
            explain: "Thực phẩm chính vụ luôn dồi dào, tươi ngon nhất, giá thành rẻ nhất và ít dư lượng thuốc bảo vệ thực vật hơn hàng trái vụ."
          },
          {
            question: "Bước đầu tiên trong tiến trình 7 bước tính chi phí bữa ăn theo dự án SGK là gì?",
            options: [
              "Ra chợ mua hết đồ rồi về cộng hoá đơn",
              "Xác định đối tượng và số lượng người ăn",
              "Đem đồ ăn ra nấu chín",
              "Thu tiền từng thành viên trong nhà"
            ],
            correct: 1,
            explain: "Phải xác định rõ số người ăn và đặc điểm đối tượng (trẻ em, người lớn, người già) để lên định lượng và ngân sách phù hợp."
          }
        ]
      },
      {
        id: "bai-6",
        number: "Bài 6",
        title: "Chế biến thực phẩm có sử dụng nhiệt",
        sub: "Phân loại 4 nhóm truyền nhiệt: Dùng nước nóng (luộc, nấu, kho), Dùng hơi nước (hấp), Nướng không khí nóng và Dùng dầu mỡ nóng (rán, rang, xào) cùng tiêu chí đánh giá kĩ thuật.",
        duration: "45 phút",
        diagramKey: "cheBienNhiet",
        objectives: "Phân biệt được nguyên lí, ưu nhược điểm của các phương pháp làm chín bằng nước, hơi nước, không khí nóng và chất béo; thực hiện đúng quy trình kĩ thuật và đạt tiêu chí cảm quan.",
        quote: "Nhiệt độ là cây cọ diệu kì biến đổi kết cấu, đánh thức mùi thơm quyến rũ của vạn vật trên bếp.",
        sections: [
          {
            title: "1. Phương pháp làm chín bằng nước nóng (Luộc, Nấu canh, Kho)",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block mb-1">Luộc (Boiling)</strong>
                  <p>Làm chín thực phẩm trong môi trường nước sôi ngập. Nước luộc giữ được vị ngọt thanh tự nhiên; thích hợp cho thịt gà, thịt lợn, rau xanh, củ cải. Yêu cầu: Thịt chín tới không đỏ xương, rau xanh giòn không úa vàng.</p>
                </div>
                <div class="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
                  <strong class="text-teal-800 dark:text-teal-300 font-bold block mb-1">Nấu canh (Soup making)</strong>
                  <p>Phối hợp nguyên liệu động vật (tôm, cua, sườn) với rau củ trong lượng nước vừa ăn, nêm gia vị vừa miệng. Nước canh trong, hương vị ngọt dịu hài hoà.</p>
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">Kho (Stewing / Braising)</strong>
                  <p>Làm chín thực phẩm (cá, thịt) với lượng nước ít, đậm đà vị mặn ngọt của nước hàng (caramel) và nước mắm, đun nhỏ lửa trong thời gian dài. Thành phẩm mềm rục, đậm vị, nước kho sánh màu cánh gián bắt mắt.</p>
                </div>
              </div>
            `
          },
          {
            title: "2. Phương pháp làm chín bằng hơi nước nóng: Hấp (Steaming)",
            content: `
              <p class="mb-2"><strong>Nguyên lí:</strong> Đặt thực phẩm trên xửng/chõ kín, dùng sức nóng của hơi nước bốc lên từ nồi đáy sôi sùng sục để làm chín thức ăn.</p>
              <p class="text-xs text-slate-700 dark:text-slate-300"><strong>Ưu điểm vượt trội:</strong> Không ngập trong nước nên hạn chế tối đa việc thôi nhiễm chất ngọt và vitamin tan trong nước ra ngoài; giữ trọn hình dáng nguyên vẹn và vị ngọt nguyên bản tinh khiết (cá hấp gừng hành, xôi, bánh bao).</p>
            `
          },
          {
            title: "3. Phương pháp làm chín bằng không khí nóng: Nướng (Roasting / Baking / Grilling)",
            content: `
              <p class="mb-2"><strong>Nguyên lí:</strong> Dùng sức nóng bức xạ của than hồng hoặc thanh nhiệt điện/lò nướng đối lưu tiếp xúc trực tiếp hoặc gián tiếp lên bề mặt thực phẩm ở 160 °C – 220 °C.</p>
              <p class="text-xs text-slate-700 dark:text-slate-300"><strong>Phản ứng Maillard & Mùi thơm:</strong> Tạo lớp vỏ ngoài vàng rụm, mùi thơm ngậy đặc trưng. Cần lưu ý không để cháy xém đen (than hoá sinh chất amin dị vòng gây hại sức khoẻ).</p>
            `
          },
          {
            title: "4. Phương pháp làm chín bằng chất béo nóng (Rán/Chiên, Rang, Xào)",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div class="p-2.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
                  <strong class="text-orange-800 dark:text-orange-300 font-bold block mb-1">Rán / Chiên (Deep/Pan frying)</strong>
                  <p>Làm chín trong lượng dầu ngập hoặc vừa ngập ở 140–180 °C. Lớp vỏ ngoài vàng giòn rụm, nhân trong mềm thơm chín tới (nem rán, khoai tây chiên, cá rán).</p>
                </div>
                <div class="p-2.5 bg-yellow-50 dark:bg-yellow-950/40 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <strong class="text-yellow-800 dark:text-yellow-300 font-bold block mb-1">Xào (Stir-frying)</strong>
                  <p>Làm chín thực phẩm với lửa lớn, lượng dầu ít, đảo nhanh tay trong chảo sâu lòng. Rau xào giữ độ giòn sần sật, màu xanh bóng đẹp, thịt xào chín mềm không dai.</p>
                </div>
                <div class="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">Rang (Roasting in pan)</strong>
                  <p>Đảo thực phẩm trong chảo nóng với rất ít hoặc không có dầu (tôm rang thịt cháy cạnh, rang đậu phộng/lạc). Thực phẩm săn chắc, dậy mùi thơm.</p>
                </div>
              </div>
            `
          }
        ],
        practiceList: [
          "Thực hành luộc rau muống đạt chuẩn: Nước sôi bùng thả rau ngập nước, luộc chín giòn, vớt ra đĩa màu xanh tươi mướt.",
          "Thực hành rán nem (chả giò) đạt độ giòn rụm màu vàng kim mà không bị vỡ vỏ hay cháy khét.",
          "So sánh hàm lượng chất béo và calo giữa món cá hấp cuốn bánh tráng và món cá tẩm bột chiên giòn."
        ],
        quizzes: [
          {
            question: "Phương pháp chế biến nào sau đây dùng hơi nước nóng để làm chín, giúp giữ lại lượng vitamin và chất ngọt tự nhiên cao nhất?",
            options: ["Hấp (Steaming)", "Ninh nhừ nhiều giờ", "Chiên ngập dầu", "Nướng trực tiếp trên than củi"],
            correct: 0,
            explain: "Hấp giữ cho thực phẩm không tiếp xúc trực tiếp với nước nên không bị hoà tan chất ngọt và vitamin vào nước như luộc."
          },
          {
            question: "Khi thực hiện món xào (stir-fry), kĩ thuật nhiệt độ và thời gian nào sau đây là chuẩn xác nhất?",
            options: [
              "Dùng lửa thật nhỏ, đảo đều trong 1 tiếng đồng hồ",
              "Dùng lửa to, dầu nóng già, đảo nhanh tay trong thời gian ngắn để rau giữ màu xanh giòn",
              "Cho thật nhiều nước lạnh vào hầm cùng dầu mỡ",
              "Đậy vung kín đun 30 phút rồi mới mở"
            ],
            correct: 1,
            explain: "Xào cần nhiệt độ lớn, đảo nhanh tay liên tục để nguyên liệu chín tới mà giữ trọn độ giòn sần sật và sắc xanh tươi mướt."
          },
          {
            question: "Hiện tượng cháy xém đen bám trên bề mặt thịt khi nướng than ở nhiệt độ quá cao có nguy cơ gì?",
            options: [
              "Làm tăng thêm hàm lượng vitamin C",
              "Sản sinh các hợp chất amin dị vòng và hydrocarbon thơm có nguy cơ gây hại sức khoẻ",
              "Giúp thịt tiêu hoá nhanh hơn bình thường",
              "Không gây bất kì ảnh hưởng nào"
            ],
            correct: 1,
            explain: "Thực phẩm bị cháy than hoá sinh ra các hợp chất độc hại, cần cắt bỏ phần cháy xém trước khi ăn để bảo vệ đường tiêu hoá."
          },
          {
            question: "Đặc điểm thành phẩm nào sau đây là tiêu chí kĩ thuật của món thịt kho tàu / kho thịt cá đạt chuẩn?",
            options: [
              "Nước kho trong veo như nước lọc, thịt dai cứng",
              "Miếng thịt mềm rục, đậm đà vị mặn ngọt hài hoà, màu nâu cánh gián bóng đẹp",
              "Thịt bị cháy đắng khét đen đáy nồi",
              "Thịt còn đỏ sống bên trong"
            ],
            correct: 1,
            explain: "Món kho đạt chuẩn phải có màu cánh gián óng ả, nước kho sền sệt, thớ thịt ngấm sâu gia vị và mềm ngọt tự nhiên."
          }
        ]
      },
      {
        id: "bai-7",
        number: "Bài 7",
        title: "Chế biến thực phẩm không sử dụng nhiệt",
        sub: "Kĩ thuật trộn dầu giấm, trộn hỗn hợp nộm/gỏi và lên men lactic vi sinh (muối dưa, muối cà) cùng quy tắc an toàn thực phẩm sống.",
        duration: "45 phút",
        diagramKey: "cheBienKhongNhiet",
        objectives: "Nắm vững bản chất và các bước chế biến món trộn dầu giấm, món nộm (gỏi) và lên men lactic muối dưa cải/cà pháo; đảm bảo tuyệt đối an toàn vệ sinh khi không qua gia nhiệt diệt khuẩn.",
        quote: "Chế biến không nhiệt là khúc ca tôn vinh độ tươi giòn, thanh mát và men sống diệu kì của ẩm thực dân gian.",
        sections: [
          {
            title: "1. Bản chất và Thách thức của chế biến không sử dụng nhiệt",
            content: `
              <p class="mb-2"><strong>Đặc điểm:</strong> Món ăn giữ được trọn vẹn màu sắc, độ giòn sần sật và hầu như toàn bộ 100% vitamin tan trong nước không bị nhiệt độ phân huỷ.</p>
              <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs mb-3">
                <strong class="text-rose-800 dark:text-rose-300 font-bold block mb-1"><i class="fa-solid fa-shield-virus"></i> Thách thức an toàn vệ sinh tối thượng:</strong>
                <p>Do không trải qua đun sôi khử khuẩn, toàn bộ nguyên liệu rau củ phải được rửa thật sạch nhiều lần dưới vòi nước chảy, ngâm nước muối loãng, người chế biến phải mang găng tay y tế tiệt trùng và dùng dụng cụ sạch 100%.</p>
              </div>
            `
          },
          {
            title: "2. Món trộn dầu giấm (Salad dressing)",
            content: `
              <p class="mb-2"><strong>Nguyên lí:</strong> Làm cho rau quả giảm bớt mùi hăng nồng, ngấm đều vị chua ngọt dịu béo ngậy của hỗn hợp nước sốt pha chế từ giấm gạo, đường, muối, tiêu và dầu ăn thực vật.</p>
              <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                <li><strong>Nguyên liệu thường gặp:</strong> Xà lách, cà chua, dưa chuột, hành tây thái mỏng ngâm đá giòn.</li>
                <li><strong>Quy tắc thời điểm trộn:</strong> Chỉ rưới và trộn đều nước sốt trước khi ăn khoảng <strong>5 – 10 phút</strong> để rau không bị tiết nước ỉu xìu.</li>
              </ul>
            `
          },
          {
            title: "3. Món trộn hỗn hợp (Nộm / Gỏi)",
            content: `
              <p class="mb-2"><strong>Đặc trưng ẩm thực Việt:</strong> Phối hợp hài hoà giữa nguyên liệu thực vật giòn dai (đu đủ xanh, hoa chuối, ngó sen, cà rốt) với nguyên liệu động vật đã được làm chín (tai heo luộc giòn, tôm thịt luộc xé nhỏ, ức gà).</p>
              <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
                <p><strong>Nước mắm chua ngọt linh hồn:</strong> Pha chế từ nước mắm nguyên chất, đường cát, nước cốt chanh/quất, tỏi ớt băm nhỏ theo tỉ lệ cân bằng “Chua – Cay – Mặn – Ngọt”.</p>
                <p><strong>Rau thơm & Đậu phộng rang:</strong> Rắc lạc rang giã dập và rau răm, húng quế lên mặt đĩa ngay khi dọn bàn để tạo độ bùi ngậy và mùi thơm quyến rũ.</p>
              </div>
            `
          },
          {
            title: "4. Phương pháp lên men Lactic (Muối chua dưa cải, Cà pháo)",
            content: `
              <div class="space-y-2 text-xs">
                <p><strong>Cơ chế sinh học:</strong> Trong điều kiện yếm khí nhẹ và nồng độ muối thích hợp (dung dịch nước muối ấm 3–5%), vi khuẩn <em>Lactobacillus</em> sẽ chuyển hoá lượng đường tự nhiên có sẵn trong rau cải thành <strong>Acid Lactic</strong>.</p>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">Dấu hiệu nhận biết dưa muối an toàn:</strong>
                  <p>• <em>Dưa chín ngon:</em> Màu vàng tươi đều, mùi thơm chua dịu thanh khiết, cọng dưa giòn sần sật, nước dưa trong.<br/>
                  • <em>Cảnh báo dưa khú:</em> Dưa bị nổi váng mốc trắng/đen, nhớt dính, ủng rục thối rữa sinh độc tố mycotoxin – Tuyệt đối không được ăn!</p>
                </div>
              </div>
            `
          }
        ],
        practiceList: [
          "Thực hành pha chế một bát nước chấm nộm chua cay mặn ngọt chuẩn vị theo tỉ lệ: 2 mắm : 2 đường : 2 cốt chanh : 4 nước lọc.",
          "Thực hành làm món Nộm dưa chuột cà rốt tai heo hoặc Nộm hoa chuối tai giòn cùng nhóm bạn.",
          "Quan sát hũ dưa cải muối chua sau 2 ngày: Đo độ chua, quan sát sự chuyển màu từ xanh lá sang vàng rơm của dưa."
        ],
        quizzes: [
          {
            question: "Vì sao món xà lách trộn dầu giấm chỉ nên trộn trước khi ăn khoảng 5 đến 10 phút?",
            options: [
              "Để rau kịp đông cứng lại",
              "Để rau ngấm gia vị mà không bị thoát nước tế bào làm rau ỉu xìu, mất độ giòn",
              "Để giấm bốc hơi hết mùi chua",
              "Để vi khuẩn lên men phân huỷ rau"
            ],
            correct: 1,
            explain: "Áp suất thẩm thấu của muối và đường trong sốt sẽ hút nước từ tế bào rau ra ngoài; nếu trộn quá sớm rau sẽ chảy nước và mất độ giòn tươi."
          },
          {
            question: "Trong quá trình muối chua dưa cải, loại vi sinh vật nào đóng vai trò chuyển hoá đường thành acid lactic tạo vị chua thơm?",
            options: ["Nấm mốc đen", "Vi khuẩn Lactic (Lactic Acid Bacteria)", "Bào tử nấm men rượu", "Vi khuẩn gây thối Clostridium"],
            correct: 1,
            explain: "Vi khuẩn lactic sinh sôi trong môi trường nước muối yếm khí chuyển hoá đường thành acid lactic, ức chế vi khuẩn có hại."
          },
          {
            question: "Nguyên liệu động vật dùng trong các món nộm (như tai heo, thịt ba chỉ, tôm nõn) phải tuân thủ yêu cầu chế biến nào?",
            options: [
              "Phải được làm chín kĩ trước khi đem thái mỏng trộn cùng rau củ",
              "Để sống nguyên chất cho thơm ngọt tự nhiên",
              "Chỉ cần ngâm qua giấm 1 phút là ăn được",
              "Xay nhuyễn sống rồi trộn thẳng vào rau"
            ],
            correct: 0,
            explain: "Thịt và hải sản bắt buộc phải luộc chín kĩ hoàn toàn để tiêu diệt giun sán và vi khuẩn trước khi đem phối trộn cùng nộm."
          },
          {
            question: "Khi thấy hũ dưa muối xuất hiện váng mốc xám đen, cọng dưa bị nhớt dính và mùi ủng khó chịu thì cần xử lí thế nào?",
            options: [
              "Rửa qua nước rồi ăn bình thường",
              "Đem kho lại ăn tiếp",
              "Bỏ đi hoàn toàn vì dưa đã bị nhiễm nấm mốc sinh độc tố nguy hại",
              "Vớt váng ra rồi tiếp tục muối thêm muối"
            ],
            correct: 2,
            explain: "Dưa khú hỏng bị nấm mốc xâm lấn có thể chứa độc tố nấm men gây hại gan và tiêu hoá, cần loại bỏ ngay lập tức."
          }
        ]
      }
    ]
  }
];

module.exports = { chebienChapters };
