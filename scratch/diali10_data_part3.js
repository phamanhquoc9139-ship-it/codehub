// Dữ liệu ĐỊA LÍ 10 (SGK Kết nối tri thức với cuộc sống) - PHẦN 3 (Chương 10 - Chương 13)
// Bài 23 đến Bài 40

const chaptersPart3 = [
  // CHƯƠNG 10. ĐỊA LÍ NGÀNH NÔNG NGHIỆP, LÂM NGHIỆP, THUỶ SẢN
  {
    partId: "phan-3",
    partTitle: "Phần ba — Địa lí kinh tế – xã hội",
    chapterId: "chuong-10",
    chapterNumber: "Chương 10",
    chapterTitle: "Địa lí ngành nông nghiệp, lâm nghiệp, thuỷ sản",
    badge: "Bài 23 – Bài 27",
    icon: "fa-solid fa-wheat-awn",
    lessons: [
      {
        id: "bai-23",
        number: "Bài 23",
        title: "Vai trò, đặc điểm, nhân tố ảnh hưởng đến nông – lâm – thuỷ sản",
        badge: "Đặc điểm & Nhân tố",
        icon: "fa-solid fa-tractor",
        overview: "Vai trò bảo đảm an ninh lương thực và nguyên liệu, đặc điểm sống còn phụ thuộc vào đất và quy luật sinh học, các nhân tố tự nhiên và kinh tế - xã hội chi phối.",
        sections: [
          {
            title: "1. Vai trò và Đặc điểm chung",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-700 block mb-1">Vai trò thiết yếu:</strong>
                  Cung cấp lương thực, thực phẩm cho con người; cung cấp nguyên liệu cho công nghiệp chế biến; tạo việc làm, thu nhập và xuất khẩu; giữ cân bằng sinh thái.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-700 block mb-1">Đặc điểm ngành:</strong>
                  - Đất trồng và mặt nước là <strong>tư liệu sản xuất chủ yếu và không thể thay thế</strong>.<br>
                  - Đối tượng sản xuất là <strong>sinh vật sống</strong> tuân theo quy luật sinh học.<br>
                  - Sản xuất có tính <strong>mùa vụ</strong> sâu sắc và phân bố trên không gian rộng lớn.<br>
                  - Khoa học công nghệ giúp giảm thiểu phụ thuộc tự nhiên, thúc đẩy nông nghiệp xanh.
                </div>
              </div>
            `
          },
          {
            title: "2. Các nhân tố ảnh hưởng",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Nhân tố tự nhiên:</strong>
                  Đất (diện tích, độ phì), địa hình (độ dốc, mặt bằng), khí hậu (nhiệt, mưa, ánh sáng), nguồn nước và sinh vật giống. Định hướng cơ cấu cây trồng, vật nuôi và mùa vụ.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nhân tố kinh tế – xã hội:</strong>
                  Dân cư và lao động (nguồn lực &amp; thị trường), sở hữu ruộng đất, chính sách nông nghiệp, công nghiệp chế biến, thị trường tiêu thụ và vốn đầu tư công nghệ.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tư liệu sản xuất chủ yếu, đặc thù và không thể thay thế được trong sản xuất nông nghiệp là gì?",
            options: ["Đất trồng và mặt nước nuôi trồng", "Máy gặt đập liên hợp", "Hóa chất bảo vệ thực vật", "Nhà màng ni-lông"],
            ans: 0,
            exp: "Đất đai và mặt nước là môi trường sinh trưởng tự nhiên của cây trồng, vật nuôi."
          },
          {
            q: "Đặc điểm nào của sản xuất nông nghiệp bắt nguồn từ chu kì sinh trưởng của cây trồng và thời tiết khí hậu?",
            options: ["Tính mùa vụ", "Tính tập trung cao độ trong nhà máy", "Không cần diện tích mặt đất", "Chỉ diễn ra ở thành thị"],
            ans: 0,
            exp: "Khí hậu thay đổi theo mùa và chu kì sinh học tạo nên tính mùa vụ trong gieo trồng và thu hoạch."
          }
        ]
      },
      {
        id: "bai-24",
        number: "Bài 24",
        title: "Địa lí ngành nông nghiệp",
        badge: "Trồng trọt & Chăn nuôi",
        icon: "fa-solid fa-cow",
        overview: "Ba cây lương thực trụ cột (lúa gạo, lúa mì, ngô), cây công nghiệp (mía, chè, cà phê, cao su) và các ngành chăn nuôi gia súc lớn, gia súc nhỏ, gia cầm.",
        sections: [
          {
            title: "1. Ba cây lương thực chính trên thế giới",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1 font-bold">1. Lúa gạo:</strong>
                  Ưa nóng ẩm, cần nhiều nước tưới, đất phù sa màu mỡ; phân bố tập trung ở vùng nhiệt đới và cận nhiệt ẩm gió mùa châu Á (Trung Quốc, Ấn Độ, Việt Nam, Thái Lan).
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200/60 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1 font-bold">2. Lúa mì:</strong>
                  Ưa khí hậu ôn đới ấm, khô hơn, chịu được nhiệt độ thấp đầu vụ; phân bố ở vùng ôn đới (Nga, Hoa Kỳ, Canada, Trung Quốc, Pháp, Australia).
                </div>
                <div class="p-3 bg-yellow-50 dark:bg-yellow-950/40 rounded-xl border border-yellow-200/60 dark:border-yellow-800">
                  <strong class="text-yellow-800 dark:text-yellow-300 block mb-1 font-bold">3. Ngô:</strong>
                  Thích nghi rộng với dao động nhiệt độ, cần đất ẩm thoát nước tốt; dùng làm lương thực và thức ăn gia súc (Hoa Kỳ, Trung Quốc, Brazil).
                </div>
              </div>
            `
          },
          {
            title: "2. Cây công nghiệp và Ngành chăn nuôi",
            content: `
              <div class="space-y-2 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Cây công nghiệp:</strong> Mía và cao su (nhiệt đới ẩm); chè (cận nhiệt, mát ẩm); cà phê (nhiệt đới, đất bazan); bông (lấy sợi); củ cải đường (ôn đới).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Chăn nuôi:</strong> Cung cấp đạm thực phẩm và nguyên liệu; phụ thuộc chặt chẽ vào cơ sở thức ăn. Bò sữa/thịt (đồng cỏ lớn hoặc vùng tiêu thụ đô thị), Lợn và Gia cầm (gắn liền với vùng thâm canh hoa màu lương thực).
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Cây lúa gạo đòi hỏi điều kiện sinh thái tự nhiên đặc trưng nào sau đây?",
            options: ["Khí hậu nóng ẩm, lượng mưa lớn và đất phù sa màu mỡ", "Khí hậu ôn đới lạnh khô", "Đồng cỏ hoang mạc khô cằn", "Địa hình núi đá vôi dốc đứng"],
            ans: 0,
            exp: "Lúa gạo là cây lương thực gốc nhiệt đới, ưa ngập nước và nhiệt ẩm cao."
          },
          {
            q: "Ngành chăn nuôi lợn và gia cầm trên thế giới thường phân bố tập trung nhiều nhất ở đâu?",
            options: ["Các vùng đồng bằng thâm canh cây lương thực và ven các đô thị lớn", "Vùng cực Bắc băng giá", "Hoang mạc sâu trong nội địa", "Rừng lá kim ôn đới xa xôi"],
            ans: 0,
            exp: "Lợn và gia cầm cần lượng thức ăn tinh từ hoa màu và có thị trường tiêu thụ thực phẩm khổng lồ tại đô thị."
          }
        ]
      },
      {
        id: "bai-25",
        number: "Bài 25",
        title: "Địa lí ngành lâm nghiệp và ngành thuỷ sản",
        badge: "Rừng & Thủy sản",
        icon: "fa-solid fa-fish",
        overview: "Lâm nghiệp (trồng rừng, khai thác gỗ bền vững, bảo tồn sinh thái) và Thủy sản (khai thác hải sản tự nhiên, nuôi trồng thủy sản nước ngọt - lợ - mặn).",
        sections: [
          {
            title: "1. Ngành Lâm nghiệp",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs mb-3 space-y-1.5">
                <div>• <strong>Vai trò:</strong> Cung cấp gỗ, lâm sản ngoài gỗ, dược liệu; điều hòa nguồn nước ngầm, chống xói mòn lũ lụt, hấp thụ carbon giảm biến đổi khí hậu.</div>
                <div>• <strong>Xu hướng:</strong> Diện tích rừng trồng thế giới tăng mạnh từ 17,8 triệu ha (1980) lên <strong>293,9 triệu ha (2019)</strong>; khai thác gỗ gắn liền với trồng mới và cấp chứng chỉ rừng bền vững (FSC).</div>
              </div>
            `
          },
          {
            title: "2. Ngành Thủy sản",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800">
                  <strong class="text-sky-700 dark:text-sky-300 block mb-1 font-bold">Khai thác thủy sản:</strong>
                  Đánh bắt ở các ngư trường lớn đại dương (cá chiếm 85–90% sản lượng). Thách thức: cạn kiệt nguồn lợi do đánh bắt tận diệt quá mức.
                </div>
                <div class="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
                  <strong class="text-teal-700 dark:text-teal-300 block mb-1 font-bold">Nuôi trồng thủy sản:</strong>
                  Sản lượng tăng nhanh vượt bậc (cá tra, tôm, hải sản); ứng dụng công nghệ lọc nước, truy xuất nguồn gốc và kiểm soát an toàn dịch bệnh.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Để bảo vệ nguồn lợi thủy sản biển và phát triển ngành bền vững, biện pháp nào sau đây là quan trọng nhất?",
            options: ["Cấm đánh bắt bằng chất nổ, lưới mắt nhỏ và đẩy mạnh nuôi trồng công nghệ cao", "Tăng cường đánh bắt ven bờ mùa cá đẻ", "Khai thác tối đa không hạn chế", "Xả nước thải chưa xử lí ra biển"],
            ans: 0,
            exp: "Ngăn chặn đánh bắt hủy diệt và chuyển đổi sang nuôi trồng bền vững giúp bảo vệ đa dạng sinh học biển."
          },
          {
            q: "Diện tích rừng trồng trên thế giới từ năm 1980 đến 2019 có xu hướng biến động như thế nào?",
            options: ["Tăng nhanh từ 17,8 triệu ha lên 293,9 triệu ha", "Giảm gần như biến mất", "Không hề thay đổi", "Biến động thất thường"],
            ans: 0,
            exp: "Nỗ lực phủ xanh đất trống và trồng rừng kinh tế của các quốc gia đã đẩy diện tích rừng trồng tăng gấp hơn 16 lần."
          }
        ]
      },
      {
        id: "bai-26",
        number: "Bài 26",
        title: "Tổ chức lãnh thổ nông nghiệp; nông nghiệp hiện đại và định hướng tương lai",
        badge: "Tổ chức & Nông nghiệp 4.0",
        icon: "fa-solid fa-network-wired",
        overview: "Các hình thức tổ chức lãnh thổ nông nghiệp (Trang trại, Thể tổng hợp nông nghiệp, Vùng nông nghiệp) và xu thế phát triển nông nghiệp 4.0, nông nghiệp xanh hữu cơ.",
        sections: [
          {
            title: "1. Các hình thức tổ chức lãnh thổ nông nghiệp",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-700 block mb-1">Trang trại:</strong>
                  Quy mô vừa và lớn, sản xuất hàng hóa chuyên môn hóa, ứng dụng máy móc hiện đại và thuê mướn lao động.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-700 block mb-1">Thể tổng hợp nông nghiệp:</strong>
                  Liên kết chặt chẽ giữa các trang trại với cơ sở công nghiệp chế biến và tiêu thụ sản phẩm trên cùng một lãnh thổ.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-700 block mb-1">Vùng nông nghiệp:</strong>
                  Hình thức cao nhất trên quy mô rộng lớn, có điều kiện sinh thái tương đồng và hình thành sản phẩm chuyên môn hóa vùng.
                </div>
              </div>
            `
          },
          {
            title: "2. Nông nghiệp hiện đại và Định hướng tương lai",
            content: `
              <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/60 dark:border-emerald-800 text-xs space-y-1.5">
                <div>• <strong>Nông nghiệp 4.0:</strong> Ứng dụng cảm biến IoT, máy bay không người lái (drone) gieo hạt phun thuốc, nhà kính thông minh điều khiển tự động.</div>
                <div>• <strong>Nông nghiệp xanh – sinh thái:</strong> Hạn chế phân bón hóa học, sử dụng chế phẩm sinh học, tuần hoàn phụ phẩm nông nghiệp và thích ứng với biến đổi khí hậu.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Hình thức tổ chức lãnh thổ nông nghiệp nào có quy mô không gian lớn nhất, tập hợp nhiều đơn vị sản xuất có điều kiện sinh thái tương đồng?",
            options: ["Vùng nông nghiệp", "Hộ gia đình", "Trang trại gia đình", "Vườn ươm"],
            ans: 0,
            exp: "Vùng nông nghiệp là hình thức tổ chức lãnh thổ cấp vĩ mô cao nhất với sự phân công chuyên môn hóa sản phẩm."
          },
          {
            q: "Xu hướng phát triển nông nghiệp xanh trong tương lai chú trọng ưu tiên yếu tố nào?",
            options: ["Bảo vệ môi trường, tiết kiệm tài nguyên và tạo nông sản sạch an toàn", "Tăng tối đa lượng thuốc trừ sâu hóa học", "Chặt phá rừng lấy đất trồng trọt", "Chỉ dùng giống biến đổi gen độc quyền"],
            ans: 0,
            exp: "Nông nghiệp xanh hướng tới bảo vệ sức khỏe đất, nước, người sản xuất và người tiêu thụ."
          }
        ]
      },
      {
        id: "bai-27",
        number: "Bài 27",
        title: "Thực hành: Vẽ và nhận xét biểu đồ sản lượng lương thực thế giới",
        badge: "Thực hành cơ cấu",
        icon: "fa-solid fa-chart-pie",
        overview: "Xử lí số liệu tỉ trọng cơ cấu từng loại cây lương thực, quy đổi góc cung độ hình tròn và nhận xét sự tăng trưởng sản lượng lương thực thế giới giai đoạn 2000 – 2019.",
        sections: [
          {
            title: "1. Kỹ năng tính toán cơ cấu và Vẽ biểu đồ tròn",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div><strong>1. Công thức tính tỉ trọng:</strong> <em>Tỉ trọng (%) = (Sản lượng loại cây / Tổng sản lượng) × 100%</em>.</div>
                <div><strong>2. Quy đổi góc quạt:</strong> <em>Số độ góc = Tỉ trọng (%) × 3,6°</em>.</div>
                <div><strong>3. Nhận xét số liệu (2000 vs 2019):</strong></div>
                <div class="ml-3">• Tổng sản lượng lương thực thế giới tăng mạnh từ <strong>2.058,7 triệu tấn</strong> (năm 2000) lên <strong>3.075,9 triệu tấn</strong> (năm 2019), tăng thêm hơn 1 tỉ tấn.</div>
                <div class="ml-3">• Ba cây lúa mì, lúa gạo, ngô luôn chiếm trên 85% tổng sản lượng lương thực toàn cầu.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Để đổi tỉ trọng 25% của một thành phần sang số đo góc trên biểu đồ tròn, ta nhân 25 với hệ số nào?",
            options: ["3,6° (được 90°)", "1,8°", "10°", "360°"],
            ans: 0,
            exp: "Một hình tròn 100% ứng với 360°, do đó 1% ứng với 3,6°."
          },
          {
            q: "Tổng sản lượng lương thực toàn cầu giai đoạn 2000 – 2019 tăng trưởng như thế nào?",
            options: ["Tăng trưởng mạnh từ 2.058,7 lên 3.075,9 triệu tấn", "Giảm sút một nửa", "Giữ nguyên không đổi", "Tăng gấp 10 lần"],
            ans: 0,
            exp: "Nhờ tiến bộ giống và cơ giới hóa, sản lượng lương thực toàn cầu tăng hơn 1 tỉ tấn trong hai thập kỉ."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 11. ĐỊA LÍ NGÀNH CÔNG NGHIỆP
  {
    partId: "phan-3",
    partTitle: "Phần ba — Địa lí kinh tế – xã hội",
    chapterId: "chuong-11",
    chapterNumber: "Chương 11",
    chapterTitle: "Địa lí ngành công nghiệp",
    badge: "Bài 28 – Bài 32",
    icon: "fa-solid fa-industry",
    lessons: [
      {
        id: "bai-28",
        number: "Bài 28",
        title: "Vai trò, đặc điểm, cơ cấu; nhân tố ảnh hưởng đến công nghiệp",
        badge: "Đặc điểm & Cơ cấu CN",
        icon: "fa-solid fa-gears",
        overview: "Vai trò chủ đạo của công nghiệp, đặc điểm cơ giới hóa tự động hóa, phân loại theo nhóm ngành và các nhân tố kinh tế - xã hội giữ vai trò quyết định.",
        sections: [
          {
            title: "1. Vai trò và Đặc điểm của công nghiệp",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Vai trò chủ đạo:</strong>
                  Cung cấp toàn bộ tư liệu sản xuất và máy móc cho nền kinh tế; thúc đẩy đô thị hóa, chuyển dịch cơ cấu ngành và tạo nguồn hàng xuất khẩu lớn.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Đặc điểm sản xuất:</strong>
                  - Sản xuất gồm 2 giai đoạn: Khai thác tài nguyên → Chế biến thành sản phẩm.<br>
                  - Tính chất <strong>tập trung hóa, chuyên môn hóa và hợp tác hóa</strong> rất cao.<br>
                  - Phân bố linh hoạt hơn nông nghiệp, ít phụ thuộc vào điều kiện đất đai khí hậu.
                </div>
              </div>
            `
          },
          {
            title: "2. Cơ cấu ngành và Nhân tố ảnh hưởng",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Cơ cấu ngành công nghiệp:</strong>
                  Khai khoáng; Chế biến, chế tạo (then chốt); Sản xuất và phân phối điện, khí đốt; Quản lí và xử lí chất thải, rác thải.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nhân tố quyết định:</strong>
                  Thị trường tiêu thụ, lực lượng lao động có kĩ năng, tiến bộ khoa học công nghệ, vốn đầu tư và chính sách công nghiệp hóa của Nhà nước.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhân tố nào sau đây giữ vai trò quyết định hàng đầu đối với sự phân bố và chuyển dịch cơ cấu ngành công nghiệp?",
            options: ["Điều kiện kinh tế – xã hội (thị trường, vốn, công nghệ, chính sách)", "Độ ẩm không khí", "Độ dốc địa hình", "Số lượng con sông chảy qua"],
            ans: 0,
            exp: "Yếu tố kinh tế - xã hội quyết định nhu cầu thị trường, hiệu quả đầu tư và trình độ công nghệ sản xuất."
          },
          {
            q: "Điểm khác biệt cơ bản nhất về phân bố không gian giữa công nghiệp và nông nghiệp là:",
            options: ["Công nghiệp phân bố linh hoạt và ít phụ thuộc vào đất đai, khí hậu hơn nông nghiệp", "Công nghiệp bắt buộc phải có mặt nước", "Công nghiệp chỉ làm việc ban ngày", "Nông nghiệp không cần đất"],
            ans: 0,
            exp: "Công nghiệp có thể xây dựng nhà xưởng ở nhiều vị trí địa hình khác nhau nhờ giao thông và logistics."
          }
        ]
      },
      {
        id: "bai-29",
        number: "Bài 29",
        title: "Địa lí một số ngành công nghiệp",
        badge: "Năng lượng & Chế biến",
        icon: "fa-solid fa-bolt",
        overview: "Các ngành công nghiệp trụ cột: Khai thác than, dầu khí, quặng kim loại, điện lực, công nghiệp điện tử - tin học, hàng tiêu dùng và chế biến thực phẩm.",
        sections: [
          {
            title: "1. Công nghiệp năng lượng và Luyện kim",
            content: `
              <div class="space-y-2 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Khai thác than:</strong> Nhiên liệu nhiệt điện và luyện kim. Sản lượng tăng từ 3,7 tỉ tấn (1980) lên <strong>7,9 tỉ tấn (2019)</strong>; đứng đầu là Trung Quốc, Ấn Độ, Hoa Kỳ, Indonesia, Nga.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Dầu khí:</strong> "Vàng đen" của nền kinh tế thế giới; sản lượng khoảng <strong>4,5 tỉ tấn (2019)</strong>; tập trung ở Hoa Kỳ, Nga, Ả-rập Xê-út, Iraq, Iran.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Điện lực:</strong> Thước đo trình độ văn minh; gồm nhiệt điện, thủy điện, điện hạt nhân và năng lượng tái tạo (mặt trời, gió). Các nước phát điện lớn: Trung Quốc, Hoa Kỳ, Ấn Độ.
                </div>
              </div>
            `
          },
          {
            title: "2. Điện tử – Tin học, Hàng tiêu dùng và Thực phẩm",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">Điện tử – Tin học:</strong>
                  Ngành công nghệ cao, giá trị gia tăng lớn, không gây ô nhiễm trực tiếp; đòi hỏi lao động trình độ cao (Hoa Kỳ, Nhật, Hàn Quốc, Đài Loan, Trung Quốc).
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">Hàng tiêu dùng &amp; Thực phẩm:</strong>
                  Vốn đầu tư vừa phải, quay vòng vốn nhanh, tạo nhiều việc làm; phân bố rộng rãi gần nguồn nguyên liệu và thị trường tiêu thụ đông dân.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Ngành công nghiệp nào sau đây được coi là 'thước đo' đánh giá trình độ phát triển kinh tế và văn minh của một quốc gia?",
            options: ["Công nghiệp điện lực", "Công nghiệp sản xuất đồ gốm", "Khai thác than thủ công", "Đóng tàu gỗ"],
            ans: 0,
            exp: "Sản lượng điện bình quân đầu người phản ánh trực tiếp mức độ cơ giới hóa, hiện đại hóa của nền kinh tế."
          },
          {
            q: "Ngành công nghiệp điện tử – tin học có đặc điểm nổi bật nào sau đây?",
            options: ["Giá trị gia tăng cao, tiêu thụ ít nguyên liệu kim loại nặng và cần lao động chuyên môn cao", "Thải ra khối lượng khói bụi lớn nhất", "Chỉ cần lao động cơ bắp không cần đào tạo", "Sản phẩm cồng kềnh khó vận chuyển"],
            ans: 0,
            exp: "Điện tử tin học là ngành công nghệ hàm lượng chất xám cao, sản phẩm tinh xảo, giá trị kinh tế vượt trội."
          }
        ]
      },
      {
        id: "bai-30",
        number: "Bài 30",
        title: "Tổ chức lãnh thổ công nghiệp",
        badge: "Điểm, Khu & Trung tâm CN",
        icon: "fa-solid fa-sitemap",
        overview: "Ba hình thức tổ chức lãnh thổ công nghiệp chủ yếu từ đơn giản đến phức tạp: Điểm công nghiệp, Khu công nghiệp tập trung và Trung tâm công nghiệp hạt nhân vùng.",
        sections: [
          {
            title: "1. Ba cấp độ tổ chức lãnh thổ công nghiệp",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1 font-bold">1. Điểm công nghiệp:</strong>
                  Hình thức đơn giản nhất, gồm 1–2 xí nghiệp đặt gần nguồn nguyên liệu hoặc khu dân cư; không có mối liên hệ sản xuất nội bộ giữa các nhà máy.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1 font-bold">2. Khu công nghiệp:</strong>
                  Khu vực có ranh giới rõ ràng, không có dân cư sinh sống, tập trung nhiều xí nghiệp cùng chia sẻ hạ tầng chung (điện, cấp thoát nước, xử lí thải); hưởng ưu đãi thuế.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1 font-bold">3. Trung tâm công nghiệp:</strong>
                  Gắn liền với các đô thị vừa và lớn; gồm nhiều khu công nghiệp, xí nghiệp hạt nhân và bổ trợ; có sức lan tỏa kinh tế mạnh mẽ cho toàn vùng lãnh thổ.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Hình thức tổ chức lãnh thổ công nghiệp nào có đặc điểm: có ranh giới xác định, chuyên sản xuất công nghiệp, không có dân cư sinh sống và dùng chung hệ thống hạ tầng?",
            options: ["Khu công nghiệp", "Điểm công nghiệp", "Vùng nông nghiệp", "Làng nghề thủ công"],
            ans: 0,
            exp: "Khu công nghiệp (Industrial Zone) được quy hoạch tập trung riêng biệt để tối ưu hóa hạ tầng kỹ thuật và bảo vệ môi trường."
          },
          {
            q: "Trung tâm công nghiệp thường được hình thành và phát triển gắn liền với đối tượng địa lí nào?",
            options: ["Các thành phố, đô thị vừa và lớn", "Vùng rừng sâu hẻo lánh", "Các cù lao biệt lập giữa biển", "Đỉnh núi cao"],
            ans: 0,
            exp: "Đô thị cung cấp cơ sở hạ tầng, mạng lưới giao thông, thị trường và nguồn lao động trình độ cao cho trung tâm công nghiệp."
          }
        ]
      },
      {
        id: "bai-31",
        number: "Bài 31",
        title: "Tác động công nghiệp tới môi trường; năng lượng tái tạo và định hướng tương lai",
        badge: "Môi trường & Năng lượng xanh",
        icon: "fa-solid fa-solar-panel",
        overview: "Tác động môi trường (ô nhiễm khí, nước, chất thải rắn), phát triển các nguồn năng lượng tái tạo (mặt trời, gió, sinh khối) và xu hướng kinh tế tuần hoàn.",
        sections: [
          {
            title: "1. Tác động của công nghiệp và Năng lượng tái tạo",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
                  <strong class="text-rose-700 dark:text-rose-300 block mb-1">Tác động tiêu cực:</strong>
                  Khí thải CO2, SO2 gây hiệu ứng nhà kính và mưa axit; nước thải công nghiệp nhiễm kim loại nặng; rác thải rắn độc hại khó phân hủy làm suy thoái môi trường đất và nước.
                </div>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-800">
                  <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">Năng lượng tái tạo &amp; Kinh tế tuần hoàn:</strong>
                  Chuyển dịch sang điện gió ngoài khơi, pin quang điện mặt trời, địa nhiệt và năng lượng sóng biển; áp dụng mô hình kinh tế tuần hoàn biến chất thải của ngành này thành nguyên liệu đầu vào của ngành khác.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm nguồn năng lượng nào sau đây có khả năng tự phục hồi vô tận và không phát thải khí nhà kính gây ô nhiễm?",
            options: ["Năng lượng mặt trời, năng lượng gió và thủy triều", "Than đá và than nâu", "Dầu mỏ thô", "Khí thiên nhiên"],
            ans: 0,
            exp: "Năng lượng gió, mặt trời, thủy triều là các nguồn năng lượng tái tạo sạch vô tận."
          },
          {
            q: "Nguyên lí cốt lõi của mô hình Kinh tế tuần hoàn (Circular Economy) trong công nghiệp hiện đại là gì?",
            options: ["Tái chế, tái sử dụng chất thải thành nguyên liệu đầu vào, giảm thiểu phát thải về mức tối đa", "Khai thác triệt để tài nguyên càng nhanh càng tốt", "Đốt rác thải lộ thiên ngoài trời", "Chôn lấp chất thải độc hại xuống biển"],
            ans: 0,
            exp: "Kinh tế tuần hoàn khép kín chu trình vật chất để không sinh ra chất thải bỏ đi."
          }
        ]
      },
      {
        id: "bai-32",
        number: "Bài 32",
        title: "Thực hành: Viết báo cáo tìm hiểu một vấn đề công nghiệp",
        badge: "Thực hành báo cáo CN",
        icon: "fa-solid fa-file-lines",
        overview: "Quy trình 4 bước lập đề cương, thu thập xử lí số liệu thống kê đáng tin cậy và viết bài báo cáo địa lí về một ngành hoặc trung tâm công nghiệp.",
        sections: [
          {
            title: "1. Bốn bước viết báo cáo tìm hiểu công nghiệp",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div><strong>Bước 1 - Chọn đề tài:</strong> Ngành công nghiệp thế mạnh, khu công nghiệp tiêu biểu hoặc tác động sinh thái.</div>
                <div><strong>Bước 2 - Lập đề cương:</strong> Đặt câu hỏi nghiên cứu, phân chia các mục logic (Hiện trạng → Phân bố → Nguyên nhân → Giải pháp).</div>
                <div><strong>Bước 3 - Thu thập &amp; Xử lí số liệu:</strong> Lấy nguồn chính thống từ Niên giám thống kê, tổ chức quốc tế; vẽ biểu đồ và lược đồ minh họa.</div>
                <div><strong>Bước 4 - Viết và trình bày báo cáo:</strong> Bố cục mạch lạc, nhận định khách quan kèm trích dẫn số liệu cụ thể.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Khi thu thập tư liệu và số liệu để viết báo cáo địa lí công nghiệp, nguồn nào sau đây có độ tin cậy cao nhất?",
            options: ["Niên giám thống kê chính thống của Tổng cục Thống kê và báo cáo của các tổ chức quốc tế", "Bài đăng không rõ tác giả trên mạng xã hội", "Tin đồn truyền miệng", "Tiểu thuyết giả tưởng"],
            ans: 0,
            exp: "Niên giám thống kê cung cấp dữ liệu định lượng chuẩn xác được kiểm định theo chuẩn thống kê."
          },
          {
            q: "Cấu trúc một bản báo cáo địa lí công nghiệp chuẩn cần tuân theo trình tự hợp lí nào?",
            options: ["Ý nghĩa đề tài → Hiện trạng & Phân bố → Nguyên nhân & Tác động → Giải pháp & Kết luận", "Giải pháp đưa lên đầu rồi mới tìm vấn đề", "Chỉ vẽ tranh không cần số liệu", "Chỉ đưa ra nhận định cá nhân cảm tính"],
            ans: 0,
            exp: "Cấu trúc chuẩn từ thực trạng, phân tích nhân tố nguyên nhân đến đề xuất giải pháp."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 12. ĐỊA LÍ NGÀNH DỊCH VỤ
  {
    partId: "phan-3",
    partTitle: "Phần ba — Địa lí kinh tế – xã hội",
    chapterId: "chuong-12",
    chapterNumber: "Chương 12",
    chapterTitle: "Địa lí ngành dịch vụ",
    badge: "Bài 33 – Bài 38",
    icon: "fa-solid fa-bell-concierge",
    lessons: [
      {
        id: "bai-33",
        number: "Bài 33",
        title: "Cơ cấu, vai trò, đặc điểm và nhân tố ảnh hưởng đến dịch vụ",
        badge: "Tổng quan Dịch vụ",
        icon: "fa-solid fa-handshake",
        overview: "Cơ cấu 3 nhóm ngành dịch vụ (kinh doanh, tiêu dùng, công), sản phẩm vô hình đặc thù và các nhân tố quyết định mạng lưới dịch vụ hiện đại.",
        sections: [
          {
            title: "1. Cơ cấu và Vai trò của ngành Dịch vụ",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Cơ cấu ngành dịch vụ:</strong>
                  - <em>Dịch vụ kinh doanh:</em> Tài chính, ngân hàng, bảo hiểm, vận tải hàng hóa, logistics, thương mại bán buôn bán lẻ.<br>
                  - <em>Dịch vụ tiêu dùng:</em> Du lịch, giáo dục, y tế, văn hóa thể thao, bưu chính viễn thông cá nhân.<br>
                  - <em>Dịch vụ công:</em> Quản lí hành chính nhà nước, an ninh quốc phòng, dịch vụ công ích.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Đặc điểm &amp; Nhân tố:</strong>
                  Sản phẩm phần lớn là <strong>phi vật thể (vô hình)</strong>; quá trình sản xuất và tiêu dùng diễn ra đồng thời; nhân tố kinh tế – xã hội (thu nhập, mật độ dân cư, công nghệ số) giữ vai trò quyết định quy mô mạng lưới.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm dịch vụ nào sau đây bao gồm các hoạt động: tài chính, ngân hàng, bảo hiểm, logistics và bất động sản?",
            options: ["Dịch vụ kinh doanh", "Dịch vụ tiêu dùng", "Dịch vụ công cộng", "Dịch vụ hành chính cá nhân"],
            ans: 0,
            exp: "Dịch vụ kinh doanh phục vụ trực tiếp cho hoạt động vận hành của các doanh nghiệp và thị trường."
          },
          {
            q: "Đặc điểm cơ bản nhất phân biệt sản phẩm của ngành dịch vụ so với nông nghiệp và công nghiệp là gì?",
            options: ["Sản phẩm phần lớn vô hình (phi vật thể), sản xuất và tiêu dùng thường diễn ra đồng thời", "Sản phẩm luôn cân được bằng tấn", "Sản phẩm bắt buộc phải bảo quản trong kho lạnh", "Sản phẩm không có giá trị tiền tệ"],
            ans: 0,
            exp: "Dịch vụ mang lại giá trị tiện ích trải nghiệm phi vật chất cho khách hàng."
          }
        ]
      },
      {
        id: "bai-34",
        number: "Bài 34",
        title: "Địa lí ngành giao thông vận tải",
        badge: "Giao thông vận tải",
        icon: "fa-solid fa-plane-departure",
        overview: "Chỉ tiêu đánh giá (vận chuyển, luân chuyển, cự li bình quân) và ưu nhược điểm của 5 loại hình giao thông: Đường ô tô, Đường sắt, Đường biển, Đường sông hồ và Hàng không.",
        sections: [
          {
            title: "1. Các chỉ tiêu đánh giá ngành giao thông vận tải",
            content: `
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs mb-3 space-y-1">
                <div>• <strong>Khối lượng vận chuyển:</strong> Số lượng hành khách (người) hoặc hàng hóa (tấn) được chở.</div>
                <div>• <strong>Khối lượng luân chuyển:</strong> = Khối lượng vận chuyển × Quãng đường vận chuyển (đơn vị: <em>người.km</em> hoặc <em>tấn.km</em>).</div>
                <div>• <strong>Cự li vận chuyển trung bình:</strong> = Khối lượng luân chuyển / Khối lượng vận chuyển (đơn vị: <em>km</em>).</div>
              </div>
            `
          },
          {
            title: "2. Ưu và nhược điểm của 5 loại hình vận tải",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Đường ô tô &amp; Đường sắt:</strong>
                  - <em>Ô tô:</em> Cơ động, tiện lợi "từ cửa đến cửa", cự li ngắn/vừa; nhược điểm gây ùn tắc, phát thải khí.<br>
                  - <em>Đường sắt:</em> Vận chuyển hàng nặng đường dài an toàn, ổn định, cước rẻ; nhược điểm chỉ chạy trên ray cố định, vốn đầu tư cao.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Đường biển &amp; Hàng không:</strong>
                  - <em>Đường biển:</em> Vận chuyển hàng rời, hàng container quốc tế khối lượng khổng lồ cước rẻ nhất; phụ thuộc thời tiết, tốc độ chậm.<br>
                  - <em>Hàng không:</em> Tốc độ nhanh nhất, cự li dài xuyên lục địa, an toàn cao; cước phí đắt nhất, phụ thuộc sân bay.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Để vận chuyển khối lượng hàng hóa siêu trọng (như dầu thô, quặng sắt, container máy móc) giữa các châu lục, loại hình giao thông nào chiếm ưu thế tuyệt đối?",
            options: ["Đường biển quốc tế", "Đường hàng không", "Đường ô tô", "Đường sắt cao tốc"],
            ans: 0,
            exp: "Đường biển chở được hàng vạn tấn hàng hóa xuyên đại dương với chi phí rẻ nhất."
          },
          {
            q: "Công thức tính cự li vận chuyển trung bình của ngành giao thông vận tải là:",
            options: ["Khối lượng luân chuyển chia cho Khối lượng vận chuyển", "Khối lượng vận chuyển nhân với số xe", "Tổng số hành khách chia cho diện tích đường", "Tốc độ xe chạy nhân thời gian"],
            ans: 0,
            exp: "Cự li bình quân (km) = Khối lượng luân chuyển (tấn.km) / Khối lượng vận chuyển (tấn)."
          }
        ]
      },
      {
        id: "bai-35",
        number: "Bài 35",
        title: "Địa lí ngành bưu chính viễn thông",
        badge: "Bưu chính & Viễn thông",
        icon: "fa-solid fa-tower-broadcast",
        overview: "Cơ cấu bưu chính (vận chuyển bưu phẩm bưu kiện) và viễn thông (truyền dẫn thông tin số), vai trò hạ tầng thông tin số kết nối toàn cầu trong thời đại số.",
        sections: [
          {
            title: "1. Vai trò và Xu hướng Bưu chính viễn thông",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1.5">
                <div>• <strong>Bưu chính:</strong> Vận chuyển thư từ, tài liệu và hàng hóa thương mại điện tử; chuyển dịch sang số hóa, tự động hóa phân loại hàng bằng robot và chuyển phát nhanh.</div>
                <div>• <strong>Viễn thông:</strong> Cung cấp mạng Internet băng rộng, mạng di động 4G/5G, vệ tinh viễn thông, điện toán đám mây và IoT; tạo nền tảng cốt lõi cho kinh tế số và xã hội số toàn cầu.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Sự bùng nổ của mạng Internet tốc độ cao và công nghệ di động 5G là thành tựu nổi bật thuộc lĩnh vực nào?",
            options: ["Ngành Viễn thông", "Ngành Đường sắt", "Ngành Khai khoáng", "Ngành Lâm nghiệp"],
            ans: 0,
            exp: "Viễn thông đảm nhận chức năng truyền dẫn và xử lí thông tin dữ liệu số trên phạm vi toàn cầu."
          },
          {
            q: "Sự phát triển mạnh mẽ của thương mại điện tử (mua sắm online) đã thúc đẩy phân ngành bưu chính phát triển dịch vụ nào mạnh nhất?",
            options: ["Dịch vụ chuyển phát bưu kiện, hàng hóa nhanh (chuyển phát logistics)", "Dịch vụ gửi điện tín mã Morse", "Dịch vụ viết thư tay", "Dịch vụ tem thư bưu ảnh"],
            ans: 0,
            exp: "Mua sắm online bùng nổ kéo theo nhu cầu giao nhận bưu phẩm, bưu kiện hàng hóa tăng vọt."
          }
        ]
      },
      {
        id: "bai-36",
        number: "Bài 36",
        title: "Địa lí ngành du lịch",
        badge: "Du lịch thế giới",
        icon: "fa-solid fa-umbrella-beach",
        overview: "Tài nguyên du lịch tự nhiên và nhân văn, quy mô du lịch quốc tế (1.460 triệu lượt khách, 1.482 tỉ USD doanh thu năm 2019) và xu hướng phát triển du lịch xanh bền vững.",
        sections: [
          {
            title: "1. Tài nguyên du lịch và Xu hướng toàn cầu",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1">Tài nguyên du lịch tự nhiên:</strong>
                    Địa hình thắng cảnh, bãi biển đẹp cát trắng, hang động kì vĩ, khí hậu ôn hòa nghỉ dưỡng, suối khoáng nóng và các vườn quốc gia sinh thái.
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1">Tài nguyên du lịch nhân văn:</strong>
                    Di tích lịch sử văn hóa, di sản kiến trúc nhân loại, lễ hội truyền thống, văn hóa ẩm thực đặc sắc và các làng nghề cổ truyền.
                  </div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong>Số liệu năm 2019:</strong> Khách du lịch quốc tế đạt <strong>1.460 triệu lượt</strong> và doanh thu đạt <strong>1.482 tỉ USD</strong>. Các khu vực dẫn đầu: Châu Âu, Châu Á – Thái Bình Dương, Bắc Mỹ.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Quần thể di tích Cố đô Huế và Phố cổ Hội An của Việt Nam thuộc nhóm tài nguyên du lịch nào?",
            options: ["Tài nguyên du lịch nhân văn", "Tài nguyên du lịch tự nhiên", "Tài nguyên khí hậu", "Tài nguyên khoáng sản"],
            ans: 0,
            exp: "Di tích lịch sử, công trình kiến trúc cổ do con người sáng tạo thuộc tài nguyên du lịch nhân văn."
          },
          {
            q: "Năm 2019 (trước đại dịch Covid-19), số lượng khách du lịch quốc tế trên toàn thế giới đạt mốc xấp xỉ bao nhiêu?",
            options: ["1.460 triệu lượt khách", "50 triệu lượt", "10 tỉ lượt", "300 triệu lượt"],
            ans: 0,
            exp: "Theo số liệu Tổ chức Du lịch Thế giới UNWTO ghi trong SGK, năm 2019 đạt 1.460 triệu lượt khách."
          }
        ]
      },
      {
        id: "bai-37",
        number: "Bài 37",
        title: "Địa lí ngành thương mại và ngành tài chính ngân hàng",
        badge: "Thương mại & Tài chính",
        icon: "fa-solid fa-credit-card",
        overview: "Nội thương và Ngoại thương, cán cân thương mại (xuất siêu, nhập siêu), vai trò huyết mạch của ngành Tài chính – Ngân hàng và các trung tâm tài chính toàn cầu.",
        sections: [
          {
            title: "1. Ngành Thương mại và Cán cân xuất nhập khẩu",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  - <strong>Nội thương:</strong> Trao đổi hàng hóa dịch vụ trong phạm vi quốc gia, tạo thị trường thống nhất.<br>
                  - <strong>Ngoại thương:</strong> Giao thương giữa các quốc gia, mở rộng thị trường và hội nhập kinh tế.<br>
                  - <strong>Cán cân thương mại:</strong> = Giá trị xuất khẩu − Giá trị nhập khẩu.<br>
                  (Nếu <em>Xuất khẩu > Nhập khẩu:</em> <strong>Xuất siêu / Thặng dư</strong>; nếu <em>Xuất khẩu < Nhập khẩu:</em> <strong>Nhập siêu / Thâm hụt</strong>).
                </div>
              </div>
            `
          },
          {
            title: "2. Ngành Tài chính – Ngân hàng",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1.5">
                <div>• Đóng vai trò <strong>huyết mạch lưu chuyển dòng vốn</strong> cho toàn bộ các ngành kinh tế; gồm dịch vụ thanh toán số, tín dụng, đầu tư chứng khoán và bảo hiểm rủi ro.</div>
                <div>• Các trung tâm tài chính quyền lực nhất thế giới: <em>New York, London, Tokyo, Thượng Hải, Singapore, Frankfurt</em>.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Một quốc gia có giá trị xuất khẩu là 350 tỉ USD và giá trị nhập khẩu là 320 tỉ USD. Cán cân thương mại của quốc gia này là:",
            options: ["Xuất siêu 30 tỉ USD (thặng dư thương mại)", "Nhập siêu 30 tỉ USD", "Xuất siêu 670 tỉ USD", "Cân bằng hoàn hảo"],
            ans: 0,
            exp: "Cán cân thương mại = 350 - 320 = +30 tỉ USD (dương là xuất siêu)."
          },
          {
            q: "Thành phố nào sau đây được công nhận là một trong những trung tâm tài chính – ngân hàng hàng đầu thế giới?",
            options: ["New York và London", "Thành phố sa mạc Timbuktu", "Vùng cực Yakutsk", "Đảo Galapagos"],
            ans: 0,
            exp: "New York (phố Wall) và London là hai trung tâm tài chính dịch vụ toàn cầu chi phối dòng vốn quốc tế."
          }
        ]
      },
      {
        id: "bai-38",
        number: "Bài 38",
        title: "Thực hành: Viết báo cáo tìm hiểu một ngành dịch vụ",
        badge: "Thực hành báo cáo Dịch vụ",
        icon: "fa-solid fa-clipboard-question",
        overview: "Quy trình lựa chọn ngành dịch vụ, tra cứu dữ liệu du lịch, thương mại hoặc giao thông vận tải và hoàn thiện bản báo cáo khoa học địa lí.",
        sections: [
          {
            title: "1. Các bước thực hiện báo cáo ngành dịch vụ",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div><strong>1. Xác định ngành:</strong> Lựa chọn ngành dịch vụ cụ thể (Logistics hàng không, Du lịch sinh thái, Thanh toán số điện tử).</div>
                <div><strong>2. Thu thập dữ liệu:</strong> Doanh thu, số lượt khách/giao dịch qua các năm, so sánh thị phần các trung tâm lớn.</div>
                <div><strong>3. Phân tích nhân tố:</strong> Ảnh hưởng của hạ tầng kĩ thuật, chính sách mở cửa, thu nhập dân cư và tác động môi trường.</div>
                <div><strong>4. Kết luận &amp; Đề xuất:</strong> Rút ra nhận định xu thế và giải pháp nâng cao sức cạnh tranh bền vững.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Yếu tố nào sau đây là quan trọng hàng đầu để một bài báo cáo tìm hiểu ngành dịch vụ có sức thuyết phục cao?",
            options: ["Dữ liệu số liệu thống kê có nguồn tin cậy, thời gian rõ ràng và phân tích nhân tố logic", "Dùng nhiều từ ngữ cảm tính không số liệu", "Chỉ sao chép y nguyên trên mạng không kiểm chứng", "Không cần bảng biểu minh họa"],
            ans: 0,
            exp: "Báo cáo khoa học địa lí đòi hỏi số liệu chính xác từ cơ quan thống kê và phương pháp luận rõ ràng."
          },
          {
            q: "Khi phân tích số liệu về ngành du lịch, cần phân biệt rõ ràng giữa hai chỉ tiêu nào để tránh nhầm lẫn?",
            options: ["Số lượt khách du lịch (người) và Doanh thu du lịch (tiền USD/VNĐ)", "Số máy bay và số khách sạn", "Nhiệt độ bãi biển và độ mặn nước biển", "Độ dốc ngọn núi và số xe ô tô"],
            ans: 0,
            exp: "Lượt khách phản ánh quy mô lượng khách, còn doanh thu phản ánh giá trị kinh tế thu được."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 13. PHÁT TRIỂN BỀN VỮNG VÀ TĂNG TRƯỞNG XANH
  {
    partId: "phan-3",
    partTitle: "Phần ba — Địa lí kinh tế – xã hội",
    chapterId: "chuong-13",
    chapterNumber: "Chương 13",
    chapterTitle: "Phát triển bền vững và tăng trưởng xanh",
    badge: "Bài 39 – Bài 40",
    icon: "fa-solid fa-leaf",
    lessons: [
      {
        id: "bai-39",
        number: "Bài 39",
        title: "Môi trường và tài nguyên thiên nhiên",
        badge: "Môi trường & Tài nguyên",
        icon: "fa-solid fa-recycle",
        overview: "Ba dạng môi trường sống (tự nhiên, xã hội, nhân tạo), phân loại tài nguyên (tái tạo, không tái tạo, vô hạn) và mối quan hệ sống còn giữa môi trường và con người.",
        sections: [
          {
            title: "1. Các dạng môi trường sống và Vai trò",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-700 block mb-1">Môi trường tự nhiên:</strong>
                    Nước, không khí, đất đai, sinh vật, khoáng sản... xuất hiện độc lập ngoài ý muốn con người.
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-700 block mb-1">Môi trường nhân tạo:</strong>
                    Nhà xưởng, cầu cống, đường sá, công trình kiến trúc do con người xây dựng nên.
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-700 block mb-1">Môi trường xã hội:</strong>
                    Luật pháp, quy ước, thể chế chính trị, quan hệ sản xuất và đạo đức cộng đồng.
                  </div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong>Vai trò:</strong> Không gian sống; nguồn cung cấp tài nguyên đầu vào; nơi tiếp nhận và đồng hóa chất thải; lưu trữ thông tin tiến hóa.
                </div>
              </div>
            `
          },
          {
            title: "2. Phân loại tài nguyên theo khả năng tái sinh",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-700 dark:text-blue-300 block mb-1 font-bold">1. Tài nguyên vô hạn:</strong>
                  Năng lượng mặt trời, sức gió, thủy triều, sóng biển.
                </div>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-800">
                  <strong class="text-emerald-700 dark:text-emerald-300 block mb-1 font-bold">2. Có thể tái tạo:</strong>
                  Đất, nước ngọt, sinh vật, rừng (nếu khai thác trong ngưỡng phục hồi tự nhiên).
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200/60 dark:border-amber-800">
                  <strong class="text-amber-700 dark:text-amber-400 block mb-1 font-bold">3. Không thể tái tạo:</strong>
                  Khoáng sản than đá, dầu khí, quặng kim loại (mất hàng triệu năm mới hình thành).
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm tài nguyên thiên nhiên nào sau đây thuộc loại tài nguyên KHÔNG THỂ tái tạo?",
            options: ["Khoáng sản kim loại, than đá và dầu mỏ", "Năng lượng gió", "Rừng tự nhiên", "Nước mưa"],
            ans: 0,
            exp: "Khoáng sản hóa thạch mất hàng triệu năm địa chất tích tụ nên sau khi khai thác sẽ cạn kiệt vĩnh viễn."
          },
          {
            q: "Cầu cống, đường sá, tòa nhà chung cư và hệ thống đê điều thuộc thành phần môi trường nào?",
            options: ["Môi trường nhân tạo", "Môi trường tự nhiên", "Môi trường xã hội", "Môi trường chân không"],
            ans: 0,
            exp: "Công trình do con người xây dựng cải tạo bề mặt đất thuộc môi trường nhân tạo."
          }
        ]
      },
      {
        id: "bai-40",
        number: "Bài 40",
        title: "Phát triển bền vững và tăng trưởng xanh",
        badge: "Bền vững & Tăng trưởng xanh",
        icon: "fa-solid fa-seedling",
        overview: "Khái niệm Phát triển bền vững (hài hòa 3 trụ cột: Kinh tế, Xã hội, Môi trường) và Tăng trưởng xanh (giảm phát thải khí nhà kính, kinh tế các-bon thấp, tiêu dùng thông minh).",
        sections: [
          {
            title: "1. Ba trụ cột của Phát triển bền vững",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/60 dark:border-emerald-800">
                  <strong>Khái niệm phát triển bền vững:</strong> Là sự phát triển đáp ứng nhu cầu của thế hệ hiện tại mà <strong>không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ mai sau</strong>.
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-blue-600 block mb-1 font-bold">Trụ cột Kinh tế:</strong>
                    Tăng trưởng GDP ổn định, hiệu quả cao, chuyển dịch cơ cấu hiện đại, không đánh đổi môi trường lấy tăng trưởng nóng.
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-indigo-600 block mb-1 font-bold">Trụ cột Xã hội:</strong>
                    Xóa đói giảm nghèo, bảo đảm công bằng tiếp cận giáo dục y tế, tạo việc làm thỏa đáng, nâng cao chất lượng cuộc sống.
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1 font-bold">Trụ cột Môi trường:</strong>
                    Bảo tồn đa dạng sinh học, giảm thiểu rác thải nhựa, phục hồi rừng, chống biến đổi khí hậu toàn cầu.
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "2. Tăng trưởng xanh (Green Growth)",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div>• <strong>Bản chất:</strong> Thúc đẩy tăng trưởng kinh tế đồng thời bảo tồn tài nguyên thiên nhiên và hệ sinh thái, giảm cường độ phát thải khí nhà kính.</div>
                <div>• <strong>Hành động cụ thể:</strong></div>
                <div class="ml-3">• <em>Sử dụng năng lượng sạch:</em> Điện mặt trời, điện gió, xe điện giao thông công cộng.</div>
                <div class="ml-3">• <em>Tiêu dùng xanh bền vững:</em> Hạn chế đồ nhựa một lần, phân loại rác tại nguồn, ưu tiên nông sản hữu cơ.</div>
                <div class="ml-3">• <em>Đánh giá giải pháp:</em> Một giải pháp chỉ thực sự bền vững khi cân bằng đồng thời cả lợi ích kinh tế, lợi ích xã hội và an toàn sinh thái.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Phát triển bền vững đòi hỏi phải kết hợp hài hòa, đồng bộ giữa ba trụ cột nền tảng nào?",
            options: ["Tăng trưởng kinh tế, công bằng xã hội và bảo vệ môi trường sinh thái", "Chỉ tập trung tăng trưởng GDP bằng mọi giá", "Chỉ bảo vệ động vật hoang dã mà ngừng sản xuất", "Khai thác tối đa tài nguyên dầu khí"],
            ans: 0,
            exp: "Ba trụ cột Kinh tế - Xã hội - Môi trường giao nhau là điều kiện cốt lõi của phát triển bền vững."
          },
          {
            q: "Mục tiêu trọng tâm của chiến lược 'Tăng trưởng xanh' đối với môi trường toàn cầu là:",
            options: ["Giảm cường độ phát thải khí nhà kính và thúc đẩy nền kinh tế các-bon thấp", "Gia tăng lượng khí thải than đá", "Khuyến khích sử dụng túi nilon dùng một lần", "Ngừng toàn bộ các hoạt động thương mại"],
            ans: 0,
            exp: "Tăng trưởng xanh hướng đến giảm phát thải CO2, sử dụng năng lượng tái tạo và bảo vệ hệ sinh thái."
          }
        ]
      }
    ]
  }
];

module.exports = { chaptersPart3 };
