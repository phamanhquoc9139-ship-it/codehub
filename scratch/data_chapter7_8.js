// CHƯƠNG VII (Bài 23, 24, 25) & CHƯƠNG VIII (Bài 26, 27, 28)

const chapters7_8 = [
  {
    chapterId: "chuong-7",
    chapterNumber: "Chương VII",
    chapterTitle: "Trồng trọt công nghệ cao",
    badge: "Bài 23 – Bài 25",
    themeColor: "indigo",
    icon: "fa-solid fa-microchip",
    lessons: [
      {
        id: "bai-23",
        number: "Bài 23",
        title: "Giới thiệu về trồng trọt công nghệ cao",
        badge: "Tổng quan & Mô hình thực tiễn",
        icon: "fa-solid fa-satellite-dish",
        overview: "Trồng trọt công nghệ cao là sự tích hợp đồng bộ công nghệ sinh học, tự động hóa, cảm biến IoT và vật liệu mới nhằm tối ưu hóa hiệu quả kinh tế và hướng tới phát triển nông nghiệp sinh thái bền vững.",
        sections: [
          {
            title: "1. Khái niệm, ưu điểm và hạn chế",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">Ưu điểm vượt trội:</strong>
                  - Tối ưu hóa hiệu suất sử dụng đất; tăng năng suất từ 3 đến 5 lần so với canh tác truyền thống.<br>
                  - Tiết kiệm 40–70% nước tưới và phân bón nhờ châm phân định lượng tự động.<br>
                  - Giảm thiểu tối đa việc sử dụng thuốc bảo vệ thực vật hóa học.<br>
                  - Chủ động kiểm soát tiểu khí hậu, xóa bỏ tính bấp bênh phụ thuộc mùa vụ và thời tiết thiên tai.<br>
                  - Nông sản đạt độ đồng đều cao, đạt chuẩn an toàn vệ sinh thực phẩm (VietGAP, GlobalGAP), tăng sức cạnh tranh xuất khẩu.
                </div>
                <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
                  <strong class="text-rose-800 dark:text-rose-300 block mb-1">Hạn chế & Thách thức:</strong>
                  - Chi phí vốn đầu tư ban đầu rất lớn (xây dựng nhà kính, trang bị cảm biến, hệ thống tưới).<br>
                  - Đòi hỏi đội ngũ kĩ sư và công nhân có trình độ chuyên môn kĩ thuật cao, kỉ luật vận hành nghiêm ngặt.<br>
                  - Nguy cơ rủi ro cao nếu hệ thống điện hoặc mạng lưới cảm biến gặp sự cố kỹ thuật.
                </div>
              </div>
            `
          },
          {
            title: "2. Thực tiễn các mô hình công nghệ cao tại Việt Nam",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Việt Nam đã hình thành các vùng nông nghiệp công nghệ cao trọng điểm:
              </p>
              <ul class="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li><strong>Lâm Đồng (Đà Lạt):</strong> Vựa rau hoa công nghệ cao lớn nhất cả nước với hàng ngàn hecta nhà kính trồng hoa cúc, hoa hồng, dâu tây thủy canh, ớt chuông đạt giá trị sản xuất hàng tỉ đồng/ha/năm.</li>
                <li><strong>Hà Nội & Phú Thọ:</strong> Các khu nông nghiệp ứng dụng công nghệ cao sản xuất rau mầm, dưa lưới vân lưới ruột cam, hoa lan hồ điệp.</li>
                <li><strong>TP. Hồ Chí Minh (Củ Chi):</strong> Khu nông nghiệp công nghệ cao chuyên ươm tạo doanh nghiệp giống cây trồng, sản xuất nấm ăn, nấm dược liệu và chế phẩm sinh học.</li>
              </ul>
            `
          }
        ],
        quiz: [
          {
            q: "Ưu điểm lớn nhất của mô hình trồng trọt công nghệ cao so với trồng trọt truyền thống là:",
            options: ["Nâng cao năng suất và chất lượng, chủ động kiểm soát môi trường và tiết kiệm tài nguyên", "Không bao giờ cần người vận hành", "Hoàn toàn miễn phí chi phí đầu tư ban đầu", "Không cần dùng bất kì năng lượng điện nào"],
            ans: 0,
            exp: "Trồng trọt công nghệ cao làm chủ hoàn toàn các yếu tố môi trường (nhiệt độ, ẩm độ, dinh dưỡng), giúp cây phát triển tối đa tiềm năng sinh học."
          },
          {
            q: "Địa phương nào ở Việt Nam hiện nay được mệnh danh là thủ phủ sản xuất rau, hoa ứng dụng nhà kính công nghệ cao lớn nhất cả nước?",
            options: ["Tỉnh Lâm Đồng (TP. Đà Lạt)", "Tỉnh Cà Mau", "Tỉnh Hưng Yên", "Tỉnh Lai Châu"],
            ans: 0,
            exp: "Đà Lạt (Lâm Đồng) có khí hậu ôn đới quanh năm, là trung tâm sản xuất rau hoa nhà kính công nghệ cao dẫn đầu cả nước."
          }
        ]
      },
      {
        id: "bai-24",
        number: "Bài 24",
        title: "Một số công nghệ cao trong trồng trọt",
        badge: "Nhà kính, Tưới & IoT",
        icon: "fa-solid fa-tower-broadcast",
        overview: "Cấu tạo và ứng dụng của ba loại nhà kính nông nghiệp, ba công nghệ tưới tiết kiệm (nhỏ giọt, phun sương, phun mưa) và nền tảng Internet vạn vật (IoT) trong canh tác chính xác.",
        sections: [
          {
            title: "1. Ba cấp độ nhà kính nông nghiệp",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nhà kính đơn giản:</strong>
                  Khung tre, gỗ hoặc sắt hàn thủ công; lợp màng nilon Polyethylene (PE); chi phí đầu tư thấp; dùng để che mưa đá, cản gió rét; tuổi thọ khoảng <strong>5–10 năm</strong>. Nhược điểm: bí khí và rất nóng vào mùa hè.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nhà kính liên hoàn:</strong>
                  Nhiều nhịp khẩu độ ghép nối liền nhau tạo không gian rộng lớn hàng hecta; tuổi thọ khoảng <strong>10–15 năm</strong>; cơ giới hóa và bán tự động hóa khâu tưới tiêu dễ dàng.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nhà kính hiện đại (Smart):</strong>
                  Khung thép mạ kẽm chịu lực bão lớn; lợp kính cường lực hoặc màng nhựa cao cấp; tuổi thọ <strong>> 15 năm</strong>; tích hợp cảm biến vi khí hậu, lưới cắt nắng tự động, quạt hút thông gió và giàn làm mát pad cooling.
                </div>
              </div>
            `
          },
          {
            title: "2. Ba công nghệ tưới tự động tiết kiệm nước",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 dark:text-teal-400 block mb-1">Tưới nhỏ giọt (Drip Irrigation):</strong>
                  Đưa nước và dinh dưỡng phân bón hòa tan (Fertigation) thấm từng giọt từ từ chính xác vào vùng gốc rễ; tiết kiệm nước tối đa (giảm 50–70% nước), không làm ướt lá giúp ngừa nấm bệnh.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 dark:text-teal-400 block mb-1">Tưới phun sương (Mist):</strong>
                  Tạo hạt sương nước siêu nhỏ bay lơ lửng; chuyên dùng để tăng độ ẩm không khí, hạ nhiệt độ vi khí hậu cho vườn hoa phong lan, nhà giâm cành giống và nấm ăn.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 dark:text-teal-400 block mb-1">Tưới phun mưa (Sprinkler):</strong>
                  Bắn tia nước xoay tròn rơi đều như mưa tự nhiên bao phủ diện tích rộng lớn; phù hợp cho đồi chè, vườn cà phê, bãi cỏ chăn nuôi và rau ăn lá ngoài trời.
                </div>
              </div>
            `
          },
          {
            title: "3. Ứng dụng Internet vạn vật (IoT) và Canh tác chính xác",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                <strong>Internet of Things (IoT)</strong> số hóa toàn bộ chuỗi sản xuất thông qua mạng lưới cảm biến thông minh:
              </p>
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div>- <strong>Cảm biến môi trường:</strong> Cảm biến độ ẩm đất, độ dẫn điện EC, pH dung dịch, cường độ ánh sáng Lux, nồng độ khí $CO_2$ và nhiệt độ không khí liên tục gửi dữ liệu về bộ điều khiển trung tâm (Gateway).</div>
                <div>- <strong>Quyết định tự động:</strong> Khi độ ẩm đất giảm dưới ngưỡng cài đặt, bộ điều khiển tự động kích hoạt van từ mở máy bơm tưới nước; khi trời nắng gắt tự kéo lưới che nắng; khi nồng độ dinh dưỡng tụt tự động hòa phân.</div>
                <div>- <strong>Drone viễn thám & Canh tác chính xác:</strong> Drone chụp ảnh quang phổ lá cây để khoanh vùng chính xác điểm bị sâu bệnh hoặc thiếu đạm, sau đó phun thuốc chính xác theo tọa độ GPS, tiết kiệm 90% lượng thuốc.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Công nghệ tưới nào sau đây đưa nước và dinh dưỡng phân bón chính xác đến từng gốc cây với độ thất thoát nước thấp nhất?",
            options: ["Hệ thống tưới nhỏ giọt (Drip irrigation)", "Tưới ngập rãnh truyền thống", "Tưới tràn bờ", "Tưới té gàu sòng"],
            ans: 0,
            exp: "Tưới nhỏ giọt nhỏ trực tiếp vào vùng rễ tích cực, giảm bốc hơi bề mặt và không bị gió tạt làm bay mất nước."
          },
          {
            q: "Trong mô hình nhà kính thông minh ứng dụng IoT, thiết bị nào đóng vai trò thu thập thông tin về nhiệt độ, độ ẩm đất và ánh sáng?",
            options: ["Hệ thống các cảm biến (Sensors)", "Máy cày bừa", "Ống dẫn nước bằng nhựa", "Tấm bạt nilon che phủ"],
            ans: 0,
            exp: "Các đầu dò cảm biến điện tử liên tục đo đạc thông số vi khí hậu và truyền tín hiệu về vi xử lý trung tâm."
          }
        ]
      },
      {
        id: "bai-25",
        number: "Bài 25",
        title: "Công nghệ trồng cây không dùng đất",
        badge: "Thủy canh & Khí canh",
        icon: "fa-solid fa-faucet-drip",
        overview: "Cơ sở sinh học dinh dưỡng khoáng của cây trồng và hai công nghệ canh tác hiện đại không dùng đất: Công nghệ thủy canh (tĩnh, hồi lưu NFT) và công nghệ khí canh (Aeroponics).",
        sections: [
          {
            title: "1. Cơ sở khoa học của công nghệ trồng không dùng đất",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Cây trồng không bắt buộc phải có đất mới sống được. Thực chất, đất chỉ đóng 2 vai trò cơ bản: (1) Điểm tựa cơ học giữ cây đứng vững và (2) Nơi giữ nước hòa tan các ion khoáng thiết yếu. Do đó, hoàn toàn có thể thay thế đất bằng <strong>giá thể trơ</strong> để giữ rễ và <strong>dung dịch dinh dưỡng khoáng cân đối</strong> để nuôi cây.
              </p>
            `
          },
          {
            title: "2. Công nghệ Thủy canh (Hydroponics)",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Thủy canh tĩnh (Không hồi lưu):</strong>
                  - Cây con đặt trong rọ nhựa có giá thể xơ dừa/sỏi nhẹ, thả nổi trên thùng chứa dung dịch dinh dưỡng.<br>
                  - Rễ cây ngập một phần trong dung dịch, phần trên tiếp xúc không khí để hô hấp.<br>
                  - <em>Đặc điểm:</em> Rẻ tiền, cấu tạo đơn giản, phù hợp quy mô hộ gia đình; nhưng nước dễ bị thiếu oxy nếu không sục khí, dễ mọc rêu tảo.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Thủy canh hồi lưu (Màng dinh dưỡng - NFT):</strong>
                  - Cây trồng trên các máng nhựa dốc nhẹ; máy bơm hẹn giờ bơm dung dịch từ bể chứa tuần hoàn chảy qua rễ rồi thu hồi về bể.<br>
                  - <em>Đặc điểm:</em> Dòng nước mỏng chảy liên tục giúp rễ hấp thu dồi dào oxy hòa tan; dinh dưỡng được tự động điều chỉnh pH và EC, cho năng suất và chất lượng rau ăn lá cực cao.
                </div>
              </div>
            `
          },
          {
            title: "3. Công nghệ Khí canh (Aeroponics)",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Toàn bộ bộ rễ cây được treo lơ lửng hoàn toàn trong khoang kín khí tối; hệ thống vòi phun sương áp lực cao định kì phun dung dịch dinh dưỡng khoáng thành những hạt bụi sương mịn bám vào lông hút rễ:
              </p>
              <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs">
                - <strong>Ưu điểm đỉnh cao:</strong> Tiết kiệm tới 95% nước so với trồng đất; rễ tiếp xúc 100% với oxy tự do trong không khí giúp cây lớn nhanh gấp 1,5–2 lần; sản xuất khoai tây giống siêu nguyên chủng đạt số lượng củ gấp 5–10 lần.<br>
                - <strong>Nhược điểm:</strong> Chi phí lắp đặt và bảo trì rất đắt đỏ; hoàn toàn phụ thuộc vào nguồn điện liên tục (mất điện 30–60 phút rễ cây có thể bị héo khô chết).
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Trong hệ thống khí canh (Aeroponics), bộ rễ của cây trồng được bố trí ở trạng thái nào?",
            options: ["Treo lơ lửng trong khoang tối kín và được phun sương dinh dưỡng định kì", "Ngâm ngập hoàn toàn dưới đáy hồ nước sâu", "Chôn sâu dưới lớp đất thịt dày", "Cắm chặt vào khối bê tông"],
            ans: 0,
            exp: "Khí canh giữ rễ lơ lửng trong không khí tối và dùng vòi phun sương cao áp để rễ hấp thu tối đa cả oxy lẫn dưỡng chất."
          },
          {
            q: "Ưu thế lớn nhất của hệ thống thủy canh màng dinh dưỡng hồi lưu (NFT) so với thủy canh tĩnh là:",
            options: ["Dung dịch chảy tuần hoàn liên tục làm tăng lượng oxy hòa tan cho rễ hô hấp và đồng đều dinh dưỡng", "Không tốn điện chạy máy bơm", "Không bao giờ cần kiểm tra độ pH", "Cây không cần ánh sáng vẫn quang hợp"],
            ans: 0,
            exp: "Dòng nước màng mỏng chảy liên tục tạo sự xáo trộn cuốn theo lượng lớn oxy không khí vào dung dịch, chống nghẹt rễ thối rễ."
          }
        ]
      }
    ]
  },
  {
    chapterId: "chuong-8",
    chapterNumber: "Chương VIII",
    chapterTitle: "Bảo vệ môi trường trong trồng trọt",
    badge: "Bài 26 – Bài 28",
    themeColor: "green",
    icon: "fa-solid fa-leaf",
    lessons: [
      {
        id: "bai-26",
        number: "Bài 26",
        title: "Sự cần thiết phải bảo vệ môi trường trong trồng trọt",
        badge: "Môi trường & Sinh thái",
        icon: "fa-solid fa-earth-americas",
        overview: "Nhận diện các nguyên nhân gây ô nhiễm môi trường nông nghiệp (lạm dụng thuốc BVTV, phân hóa học, đốt rơm rạ bừa bãi) và các giải pháp canh tác tuần hoàn bảo vệ hệ sinh thái.",
        sections: [
          {
            title: "1. Nguyên nhân và tác hại của ô nhiễm môi trường trong trồng trọt",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-red-50/70 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-800 dark:text-red-300 block mb-1">Nguyên nhân chủ yếu:</strong>
                  - Bón quá thừa phân hóa học gốc đạm nitrate, kali làm chua đất, tích tụ kim loại nặng.<br>
                  - Lạm dụng thuốc bảo vệ thực vật hóa học; vứt bừa bãi bao bì, chai lọ thuốc BVTV chưa súc rửa ra bờ kênh, mương nước.<br>
                  - Đốt rơm rạ lộ thiên ngay trên đồng ruộng sau mùa gặt sinh khói bụi mù mịt.<br>
                  - Xả thải nước rửa dụng cụ phun thuốc trực tiếp vào nguồn nước sinh hoạt.
                </div>
                <div class="p-3 bg-red-50/70 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
                  <strong class="text-red-800 dark:text-red-300 block mb-1">Hậu quả nghiêm trọng:</strong>
                  - Đất chai cứng, chua hóa, tiêu diệt giun đất và vi sinh vật có ích.<br>
                  - Ô nhiễm nguồn nước mặt và ngấm sâu làm nhiễm độc nguồn nước ngầm.<br>
                  - Tồn dư hóa chất độc hại trong nông sản gây ung thư, ngộ độc cho người dùng.<br>
                  - Khói đốt rơm rạ gây ô nhiễm bụi mịn $PM_{2.5}$, khí thải nhà kính ($CO_2, CO$), cản trở tầm nhìn giao thông.
                </div>
              </div>
            `
          },
          {
            title: "2. Các giải pháp bảo vệ môi trường và nông nghiệp tuần hoàn",
            content: `
              <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <li>Thực hiện nghiêm ngặt nguyên tắc '4 đúng' trong bón phân và dùng thuốc BVTV; tuân thủ thời gian cách li ghi trên nhãn thuốc.</li>
                <li>Chuyển dịch mạnh mẽ sang dùng phân hữu cơ hoai mục, phân vi sinh và thuốc trừ sâu sinh học (Bt, NPV, nấm đối kháng).</li>
                <li>Xây dựng các bể thu gom bao bì thuốc BVTV có nắp đậy kín ở góc ruộng và vận chuyển đi xử lí tiêu hủy chất thải nguy hại theo quy định.</li>
                <li><strong>Phát triển nông nghiệp tuần hoàn:</strong> Nghiêm cấm đốt rơm rạ; tái sử dụng toàn bộ phụ phẩm nông nghiệp (rơm rạ, thân ngô, vỏ trấu) làm thức ăn ủ chua cho gia súc, làm giá thể trồng nấm hoặc ủ phân hữu cơ vi sinh trả lại độ phì cho đất.</li>
              </ul>
            `
          }
        ],
        quiz: [
          {
            q: "Hành động nào sau đây trong trồng trọt gây hủy hoại môi trường và bị pháp luật nghiêm cấm?",
            options: ["Vứt bỏ bừa bãi chai lọ, bao bì thuốc bảo vệ thực vật chưa súc rửa xuống kênh mương", "Thu gom phụ phẩm rơm rạ để ủ làm phân hữu cơ", "Sử dụng chế phẩm sinh học Bt để trừ sâu", "Trồng xen cây họ Đậu để cải tạo đất"],
            ans: 0,
            exp: "Chai lọ thuốc BVTV là chất thải nguy hại, nếu vứt xuống nguồn nước sẽ làm chết thủy sinh và ngấm độc vào nguồn nước sinh hoạt của con người."
          },
          {
            q: "Biện pháp xử lí phụ phẩm rơm rạ sau mùa gặt lúa khoa học và bảo vệ môi trường nhất là:",
            options: ["Dùng chế phẩm vi sinh để ủ làm phân hữu cơ hoặc làm cơ chất trồng nấm rơm", "Đốt trụi rơm rạ ngay trên đồng ruộng sinh khói mù mịt", "Ném toàn bộ rơm rạ xuống sông ngòi làm tắc dòng chảy", "Đổ rác thải nhựa lẫn vào đống rơm rạ"],
            ans: 0,
            exp: "Tái chế rơm rạ thành nấm ăn và phân hữu cơ vi sinh là mắt xích quan trọng của kinh tế nông nghiệp tuần hoàn không rác thải."
          }
        ]
      },
      {
        id: "bai-27",
        number: "Bài 27",
        title: "Ứng dụng công nghệ vi sinh trong bảo vệ môi trường và xử lí chất thải",
        badge: "Công nghệ xử lí chất thải sinh học",
        icon: "fa-solid fa-recycle",
        overview: "Quy trình công nghệ ủ phân hữu cơ vi sinh từ phụ phẩm rơm rạ và kĩ thuật ủ chua thức ăn thô xanh cho trâu bò dự trữ mùa đông khan hiếm thức ăn.",
        sections: [
          {
            title: "1. Quy trình sản xuất phân hữu cơ vi sinh từ phụ phẩm thực vật",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Bước 1 - Chuẩn bị bãi ủ & Nguyên liệu:</strong> Chọn nền cao ráo, thoát nước tốt, trải bạt nilon; thu gom rơm rạ, vỏ trấu, thân ngô băm nhỏ (loại bỏ nilon, rác vô cơ).</div>
                <div><strong>Bước 2 - Xếp luống ủ:</strong> Rải từng lớp nguyên liệu dày khoảng <strong>20–30 cm</strong>; tưới ẩm đạt 50–60% (nắm chặt tay nước rịn qua kẽ ngón tay); rải men vi sinh phân giải cellulose (<em>Trichoderma</em>, <em>Bacillus</em>) và phân chuồng/vôi bột; tiếp tục xếp các lớp kế tiếp cho đến khi đống ủ cao 1,2–1,5 m rồi trùm kín bạt.</div>
                <div><strong>Bước 3 - Theo dõi & Đảo đống ủ:</strong> Khi nhiệt độ đống ủ tăng lên <strong>40–50 °C</strong> (thậm chí 60 °C), tiến hành đảo đống ủ định kì <strong>7–10 ngày/lần</strong>; đảo từ trong ra ngoài và ngoài vào trong để cung cấp đầy đủ oxy hiếu khí.</div>
                <div><strong>Bước 4 - Thu hoạch:</strong> Sau khoảng <strong>42–45 ngày</strong>, đống ủ hoai mục hoàn toàn chuyển sang màu nâu đen tơi xốp, không còn mùi hôi thối, thành phẩm phân hữu cơ vi sinh chất lượng cao sẵn sàng bón cho cây trồng.</div>
              </div>
            `
          },
          {
            title: "2. Kĩ thuật ủ chua thức ăn thô xanh cho gia súc",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Công thức phối trộn chuẩn SGK:</strong>
                  - <strong>100 kg phụ phẩm</strong> (thân lá ngô tươi, ngọn mía, rơm non) đã băm nhỏ 3–5 cm và phơi héo nhẹ.<br>
                  - <strong>5 kg mật rỉ đường</strong> (hoặc thay thế bằng 5–10 kg cám ngô/cám gạo) làm thức ăn nuôi cấy vi khuẩn lên men lactic ban đầu.<br>
                  - <strong>0,5 – 1 kg muối ăn (NaCl)</strong> để hạn chế vi khuẩn gây thối phát triển.<br>
                  - Men vi sinh ủ chua theo liều lượng hướng dẫn.
                </div>
                <div><strong>Quy trình nạp hố ủ:</strong> Rải từng lớp dày <strong>15–20 cm</strong> vào túi ủ chuyên dụng hoặc hố ủ lót bạt; <strong>dẫm nén thật chặt</strong> để đuổi toàn bộ không khí ra ngoài (tạo môi trường kị khí hoàn hảo); buộc thật kín miệng túi/hố.</div>
                <div><strong>Sử dụng:</strong> Sau khoảng <strong>1 tháng</strong>, quá trình lên men lactic hoàn tất, thức ăn có mùi thơm chua dễ chịu màu vàng sáng; có thể bảo quản sử dụng dự trữ cho trâu bò suốt <strong>3–4 tháng</strong> mùa rét hanh khô.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Khi sản xuất phân hữu cơ vi sinh từ phụ phẩm rơm rạ, thao tác đảo đống ủ định kì 7–10 ngày/lần có tác dụng cốt lõi là gì?",
            options: ["Cung cấp oxy cho các vi sinh vật hiếu khí hoạt động phân giải chất hữu cơ và điều hòa nhiệt ẩm đồng đều", "Làm cho đống phân nguội lạnh hoàn toàn", "Để đuổi sạch vi sinh vật ra khỏi đống phân", "Làm bay hơi hết chất dinh dưỡng"],
            ans: 0,
            exp: "Đảo đống ủ cấp oxy cho nấm và vi khuẩn hiếu khí hô hấp phân hủy nhanh cellulose và lignin, đồng thời kiểm soát nhiệt độ không bị cháy than."
          },
          {
            q: "Yêu cầu kĩ thuật bắt buộc khi nạp nguyên liệu vào hố ủ chua thức ăn cho gia súc là:",
            options: ["Dẫm nén thật chặt từng lớp 15–20 cm và buộc/che kín để đuổi sạch oxy tạo môi trường kị khí cho vi khuẩn lactic", "Xới đống ủ thật xốp và mở toang nắp cho gió thổi vào", "Thêm thật nhiều nước để hố ủ ngập nước lõng bõng", "Để nguyên cây không cần băm nhỏ"],
            ans: 0,
            exp: "Vi khuẩn lactic lên men kị khí; nếu để sót oxy vi khuẩn gây thối Clostridium và nấm mốc sẽ phát triển làm hỏng thối thức ăn."
          }
        ]
      },
      {
        id: "bai-28",
        number: "Bài 28",
        title: "Thực hành: Sử dụng rơm, rạ để trồng nấm rơm",
        badge: "Thực hành quy trình nông nghiệp tuần hoàn",
        icon: "fa-solid fa-bowl-food",
        overview: "Quy trình thực hành 4 bước sử dụng rơm rạ sau mùa gặt lúa để trồng nấm rơm (Volvariella volvacea): xử lí nước vôi, đóng mô cấy giống, chăm sóc giữ ẩm và thu hoạch nấm hình trứng.",
        sections: [
          {
            title: "1. Chuẩn bị vật liệu và dụng cụ",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                - Rơm rạ khô sạch không bị mốc mục, giống meo nấm rơm chất lượng tốt, vôi bột (vôi tôi), nước sạch, bạt nilon che phủ, khuôn gỗ đóng mô (kích thước chuẩn: đáy rộng 0,3–0,4 m, miệng rộng 0,3 m, cao 0,35–0,4 m).<br>
                - Đeo găng tay bảo hộ cao su khi pha và ngâm nước vôi để tránh gây bỏng kiềm rát da tay.
              </p>
            `
          },
          {
            title: "2. Quy trình kĩ thuật trồng nấm rơm 4 bước chuẩn SGK",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-green-600 block mb-1">Bước 1: Xử lí rơm rạ bằng nước vôi</strong>
                  - Pha nước vôi theo tỉ lệ chuẩn SGK: <strong>0,3 kg vôi bột / 100 L nước sạch</strong>.<br>
                  - Cho rơm vào ngâm ngập trong nước vôi từ <strong>20–30 phút</strong> để làm mềm rơm và diệt mầm nấm dại.<br>
                  - Vớt rơm ra để ráo nước, vun thành đống trên bệ cao ráo, phủ bạt kín; <strong>ủ trong 4–6 ngày</strong>, cứ 2–3 ngày đảo đống ủ một lần.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-green-600 block mb-1">Bước 2: Đóng mô và cấy giống nấm (Meo nấm)</strong>
                  - Đặt khuôn gỗ (rộng 0,3–0,4 m, cao 0,35–0,4 m) trên nền sạch có rãnh thoát nước.<br>
                  - Rải một lớp rơm dày <strong>10–12 cm</strong> vào khuôn, nén nhẹ.<br>
                  - Cấy một đường giống nấm dọc theo hai mép khuôn, <strong>cách mép ngoài 4–5 cm</strong> (không cấy sát mép làm nấm bị khô, không cấy vào giữa làm nấm bị bí nóng).<br>
                  - Tiếp tục làm tương tự 3–4 lớp rơm; lớp trên cùng rải đều giống và phủ một lớp rơm mỏng che phủ, nhấc khuôn ra.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-green-600 block mb-1">Bước 3: Chăm sóc mô nấm</strong>
                  - <strong>3–5 ngày đầu:</strong> Tuyệt đối không tưới nước để sợi nấm ăn lan tơ vào cơ chất rơm.<br>
                  - <strong>Ngày thứ 7–8:</strong> Khi nấm con (đầu đinh hương) bắt đầu xuất hiện dày đặc, dùng bình phun sương tưới nhẹ <strong>2–3 lần/ngày</strong> vừa đủ ẩm. <em>Cảnh báo:</em> Tưới thừa nước làm ướt sũng gốc mô sẽ gây thối chân nấm và làm nấm con chết hàng loạt.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-green-600 block mb-1">Bước 4: Thu hoạch nấm rơm</strong>
                  - Thu hái khi quả thể nấm đạt <strong>giai đoạn hình trứng</strong> (chóp nấm tròn căng, chưa nở bung màng bao nấm dù) để nấm đạt trọng lượng, độ ngọt và giá trị dinh dưỡng cao nhất.<br>
                  - Khi hái, cầm nhẹ gốc nấm xoay tròn nhấc lên; thu dọn sạch toàn bộ chân nấm sót lại để tránh thối lây sang lứa nấm tiếp theo; sau đó phủ rơm mặt, ngừng tưới 3–4 ngày rồi tưới lại để thu hoạch đợt 2.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tỉ lệ pha nước vôi chuẩn theo SGK để ngâm xử lí rơm rạ trước khi ủ trồng nấm rơm là:",
            options: ["0,3 kg vôi bột / 100 L nước sạch", "10 kg vôi bột / 100 L nước", "50 kg vôi bột / 1 L nước", "Không cần pha vôi"],
            ans: 0,
            exp: "Nồng độ 0.3 kg vôi tôi / 100 L nước tạo môi trường kiềm nhẹ đủ diệt khuẩn và nấm mốc cạnh tranh, làm mềm rơm mà không gây ức chế sợi nấm rơm."
          },
          {
            q: "Thời điểm thu hái nấm rơm đạt phẩm chất thương phẩm ngon ngọt và giá trị dinh dưỡng cao nhất là khi:",
            options: ["Nấm đạt giai đoạn hình trứng tròn căng, trước khi màng bao nấm nở xòe hình dù", "Nấm đã nở to bung dù xòe rộng hết cỡ", "Khi nấm đã khô héo trên mô", "Khi nấm mới chỉ là sợi tơ trắng"],
            ans: 0,
            exp: "Nấm rơm ở giai đoạn hình trứng (búp nấm) có vị ngọt đậm đà, giòn và giàu acid amin nhất; khi nấm nở dù thịt nấm xốp nhạt và giảm giá trị thương mại."
          }
        ]
      }
    ]
  }
];

module.exports = { chapters7_8 };
