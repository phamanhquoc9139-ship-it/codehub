// Dữ liệu ĐỊA LÍ 10 (SGK Kết nối tri thức với cuộc sống) - PHẦN 2 & PHẦN 3 (Chương 5 - Chương 9)
// Bài 11 đến Bài 22

const chaptersPart2 = [
  // CHƯƠNG 5. THUỶ QUYỂN
  {
    partId: "phan-2",
    partTitle: "Phần hai — Địa lí tự nhiên",
    chapterId: "chuong-5",
    chapterNumber: "Chương 5",
    chapterTitle: "Thuỷ quyển",
    badge: "Bài 11 – Bài 13",
    icon: "fa-solid fa-water",
    lessons: [
      {
        id: "bai-11",
        number: "Bài 11",
        title: "Thuỷ quyển, nước trên lục địa",
        badge: "Sông, Hồ & Nước ngầm",
        icon: "fa-solid fa-droplet",
        overview: "Cấu trúc thủy quyển, mạng lưới sông ngòi, chế độ dòng chảy (mùa lũ, mùa cạn), các nguồn gốc hồ, băng tuyết và tầng nước ngầm quý giá.",
        sections: [
          {
            title: "1. Khái niệm Thủy quyển và Chế độ nước sông",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Thủy quyển:</strong>
                  Lớp vỏ lỏng liên tục bao quanh Trái Đất gồm nước trong đại dương, biển, sông, hồ, băng tuyết, nước ngầm và hơi nước trong khí quyển.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Chế độ nước sông và các nhân tố chi phối:</strong>
                  - <em>Chế độ nước:</em> Sự thay đổi lưu lượng dòng chảy (m³/s) theo các tháng trong năm (mùa lũ và mùa cạn).<br>
                  - <em>Nhân tố ảnh hưởng:</em> Chế độ mưa (yếu tố quyết định nhất với sông nhiệt đới), băng tuyết tan (sông vùng hàn đới, ôn đới), thảm thực vật và rừng đầu nguồn (giữ nước, điều tiết lũ), hồ đầm (điều hòa dòng chảy), độ dốc lòng sông và đặc điểm thổ nhưỡng.
                </div>
              </div>
            `
          },
          {
            title: "2. Hồ, Băng tuyết và Nước ngầm",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1 font-bold">Nguồn gốc Hồ:</strong>
                  Hồ móng ngựa (vết tích khúc uốn sông cũ), hồ kiến tạo (sụt lún đứt gãy như hồ Baikal), hồ núi lửa (miệng núi lửa đã tắt như Biển Hồ Gia Lai), hồ nhân tạo thủy điện.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1 font-bold">Băng tuyết:</strong>
                  Chiếm phần lớn lượng nước ngọt thể rắn toàn cầu; tập trung ở châu Nam Cực, đảo Greenland và các đỉnh núi cao; cung cấp nước cho sông lớn vào mùa xuân hè.
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1 font-bold">Nước ngầm:</strong>
                  Nước thấm trong các khe nứt, lỗ rỗng đất đá; cung cấp nước sạch sinh hoạt, ổn định nền đất; cần khai thác hợp lí tránh hạ mực nước ngầm và sụt lún đô thị.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhân tố nào đóng vai trò điều tiết, làm chậm tốc độ dòng chảy lũ mặt đất và tăng cường bổ sung nguồn nước ngầm cho lưu vực sông?",
            options: ["Lớp phủ thực vật và rừng đầu nguồn", "Độ dốc lòng sông lớn", "Khai thác cát sông ồ ạt", "Xây dựng bê tông hóa đô thị"],
            ans: 0,
            exp: "Tán cây và thảm mùn hữu cơ giữ nước mưa, giảm xói mòn và điều hòa lưu lượng sông lũ một cách tự nhiên."
          },
          {
            q: "Hồ Baikal ở Nga là hồ nước ngọt sâu nhất thế giới, được hình thành từ nguồn gốc tự nhiên nào?",
            options: ["Vùng đứt gãy sụt lún kiến tạo", "Miệng núi lửa đã tắt", "Khúc uốn sông bị tách rời (hồ móng ngựa)", "Băng hà đào bới"],
            ans: 0,
            exp: "Hồ Baikal nằm trên đới tách giãn lục địa sâu, tạo nên lòng hồ sâu hơn 1600 mét."
          }
        ]
      },
      {
        id: "bai-12",
        number: "Bài 12",
        title: "Nước biển và đại dương",
        badge: "Sóng, Triều & Dòng biển",
        icon: "fa-solid fa-ship",
        overview: "Đặc tính vật lí của nước biển (độ muối 35‰, nhiệt độ 17°C) và 3 chuyển động cơ bản của biển: Sóng biển, Thủy triều (triều cường, triều kém) và các Dòng hải lưu.",
        sections: [
          {
            title: "1. Độ muối và Nhiệt độ nước biển",
            content: `
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs mb-3 space-y-1.5">
                <div>• Biển và đại dương chứa tới <strong>97,5% tổng lượng nước</strong> trên hành tinh.</div>
                <div>• <strong>Độ muối trung bình:</strong> Khoảng <strong>35‰</strong> (35 phần nghìn); thay đổi tùy thuộc vào lượng mưa, lượng bốc hơi và lượng nước sông đổ vào. Vùng biển kín bốc hơi mạnh (biển Đỏ lên tới 41‰), vùng mưa nhiều và cửa sông độ muối thấp hơn (biển Ban-tích 10–15‰).</div>
                <div>• <strong>Nhiệt độ nước biển:</strong> Trung bình bề mặt khoảng <strong>17°C</strong>; giảm dần từ xích đạo về hai cực và giảm theo độ sâu.</div>
              </div>
            `
          },
          {
            title: "2. Ba hình thức vận động của nước biển",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800">
                  <strong class="text-sky-700 dark:text-sky-300 block mb-1 font-bold">1. Sóng biển:</strong>
                  Dao động của các phần tử nước chủ yếu theo phương thẳng đứng do gió truyền năng lượng. Động đất hoặc phun trào núi lửa dưới đáy biển sinh ra <em>Sóng thần (Tsunami)</em> di chuyển với tốc độ hàng trăm km/h, tàn phá bờ biển.
                </div>
                <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <strong class="text-indigo-700 dark:text-indigo-300 block mb-1 font-bold">2. Thủy triều:</strong>
                  Hiện tượng nước dâng lên và hạ xuống định kì theo chu kì ngày/nửa ngày do lực hấp dẫn của Mặt Trăng và Mặt Trời.<br>
                  - <em>Triều cường:</em> Khi Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng (ngày 1 và 15 âm lịch / không trăng &amp; trăng tròn).<br>
                  - <em>Triều kém:</em> Khi tạo góc vuông (ngày 7–8 và 22–23 âm lịch / trăng khuyết).
                </div>
                <div class="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
                  <strong class="text-teal-700 dark:text-teal-300 block mb-1 font-bold">3. Dòng biển (Hải lưu):</strong>
                  Các dòng chảy di chuyển có hướng xác định trong đại dương do các hệ thống gió thường xuyên (Tín phong, gió Tây ôn đới). Phân thành dòng biển nóng và dòng biển lạnh, điều hòa sâu sắc khí hậu các vùng bờ lục địa lân cận.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Hiện tượng triều cường (mực nước triều dâng cao nhất và hạ sâu nhất) xảy ra khi vị trí tương đối giữa Mặt Trời, Mặt Trăng và Trái Đất như thế nào?",
            options: ["Nằm thẳng hàng với nhau (ngày trăng non hoặc trăng tròn)", "Tạo thành một góc vuông 90°", "Mặt Trời nằm giữa Trái Đất và Mặt Trăng", "Mặt Trăng đi vào vùng bóng tối"],
            ans: 0,
            exp: "Khi thẳng hàng, lực hấp dẫn của Mặt Trăng và Mặt Trời cộng hưởng tạo nên lực hút lớn nhất, sinh ra triều cường."
          },
          {
            q: "Độ muối trung bình của nước biển và đại dương trên thế giới xấp xỉ khoảng:",
            options: ["35‰ (35 phần nghìn)", "10‰", "75‰", "3,5‰"],
            ans: 0,
            exp: "Độ muối trung bình đại dương toàn cầu là 35‰ (trong 1000g nước biển có khoảng 35g muối khoáng hòa tan, chủ yếu là NaCl)."
          }
        ]
      },
      {
        id: "bai-13",
        number: "Bài 13",
        title: "Thực hành: Phân tích chế độ nước sông Hồng",
        badge: "Thực hành lưu lượng",
        icon: "fa-solid fa-chart-column",
        overview: "Kỹ năng tính toán lưu lượng trung bình năm, xác định các tháng mùa lũ, mùa cạn của sông Hồng và phân tích mối liên hệ tương ứng với chế độ mưa mùa hạ.",
        sections: [
          {
            title: "1. Quy trình tính toán và Phân định mùa lũ – cạn sông Hồng",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div><strong>Bước 1:</strong> Tính lưu lượng trung bình năm = (Tổng lưu lượng 12 tháng) / 12 (đơn vị m³/s).</div>
                <div><strong>Bước 2:</strong> So sánh lưu lượng từng tháng với lưu lượng trung bình năm:</div>
                <div class="ml-3">• <em>Mùa lũ:</em> Các tháng có lưu lượng <strong>lớn hơn</strong> lưu lượng trung bình năm (sông Hồng thường lũ từ tháng 6 đến tháng 10, đỉnh lũ cực đại vào tháng 8).</div>
                <div class="ml-3">• <em>Mùa cạn:</em> Các tháng có lưu lượng <strong>nhỏ hơn</strong> mức trung bình năm (từ tháng 11 đến tháng 5 năm sau, cạn nhất tháng 3).</div>
                <div><strong>Bước 3:</strong> Giải thích: Chế độ nước sông Hồng ăn khớp chặt chẽ với chế độ mưa của khí hậu nhiệt đới gió mùa miền Bắc; mùa lũ chiếm 75–80% tổng lượng nước cả năm.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tại lưu vực sông Hồng, mùa lũ thường kéo dài trong khoảng thời gian nào và đỉnh lũ rơi vào tháng mấy?",
            options: ["Kéo dài từ tháng 6 đến tháng 10, đỉnh lũ vào tháng 8", "Kéo dài từ tháng 1 đến tháng 5, đỉnh lũ tháng 3", "Kéo dài quanh năm không đổi", "Chỉ có lũ vào mùa đông"],
            ans: 0,
            exp: "Mùa lũ sông Hồng kéo dài 5 tháng (tháng 6 - 10) tương ứng với mùa mưa bão lớn nhất ở miền Bắc, đỉnh cao nhất tháng 8."
          },
          {
            q: "Quy ước để xác định một tháng thuộc vào mùa lũ của sông trong bài thực hành là:",
            options: ["Tháng có lưu lượng dòng chảy lớn hơn lưu lượng trung bình tháng của cả năm", "Tháng có nhiệt độ cao nhất", "Tháng có bão đổ bộ", "Tháng có mực nước sông cạn nhất"],
            ans: 0,
            exp: "Theo chuẩn phương pháp địa lí, tháng có lưu lượng lớn hơn mức trung bình 12 tháng được phân loại vào mùa lũ."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 6. SINH QUYỂN
  {
    partId: "phan-2",
    partTitle: "Phần hai — Địa lí tự nhiên",
    chapterId: "chuong-6",
    chapterNumber: "Chương 6",
    chapterTitle: "Sinh quyển",
    badge: "Bài 14 – Bài 16",
    icon: "fa-solid fa-seedling",
    lessons: [
      {
        id: "bai-14",
        number: "Bài 14",
        title: "Đất trên Trái Đất",
        badge: "Thổ nhưỡng & Độ phì",
        icon: "fa-solid fa-layer-group",
        overview: "Khái niệm đất, độ phì nhiêu, cấu trúc phẫu diện và 5 nhân tố tự nhiên hình thành đất: Đá mẹ, Khí hậu, Sinh vật, Địa hình, Thời gian cùng vai trò của Con người.",
        sections: [
          {
            title: "1. Khái niệm Đất và Độ phì nhiêu",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs mb-3">
                <strong>Đất (Thổ nhưỡng):</strong> Là lớp vật chất tơi xốp mỏng bao phủ bề mặt lục địa và đảo, được tạo thành do quá trình phong hoá đá kết hợp hoạt động sinh học.<br>
                <em>Đặc trưng cơ bản nhất của đất:</em> <strong>Độ phì nhiêu</strong> — khả năng cung cấp nước, chất dinh dưỡng khoáng, không khí và nhiệt cho thực vật sinh trưởng và phát triển.
              </div>
            `
          },
          {
            title: "2. Năm nhân tố tự nhiên hình thành đất",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-700 block mb-1">1. Đá mẹ:</strong>
                  Cung cấp vật chất vô cơ, quyết định thành phần khoáng vật và tính chất cơ lí ban đầu của đất (đá bazan cho đất đỏ màu mỡ, cát kết cho đất pha cát nghèo mùn).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-700 block mb-1">2. Khí hậu (Nhiệt &amp; Ẩm):</strong>
                  Quyết định tốc độ phong hóa đá, quá trình rửa trôi khoáng và phân giải xác sinh vật tích lũy mùn.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-700 block mb-1">3. Sinh vật:</strong>
                  Thực vật cung cấp chất hữu cơ; vi sinh vật phân giải chất hữu cơ thành mùn dinh dưỡng; động vật đất (giun dế) làm tơi xốp đất.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-amber-700 block mb-1">4. Địa hình:</strong>
                  Độ cao làm thay đổi nhiệt ẩm; độ dốc quyết định mức độ xói mòn (dốc thì tầng đất mỏng, đồng bằng phẳng tầng đất dày tích tụ).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 sm:col-span-2 md:col-span-1">
                  <strong class="text-amber-700 block mb-1">5. Thời gian &amp; Con người:</strong>
                  Thời gian là tuổi của đất. Con người có thể bón phân thâm canh làm tăng độ phì, nhưng nếu phá rừng lạm dụng hóa chất sẽ gây thoái hóa, bạc màu, xói mòn.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Đặc tính quan trọng nhất phân biệt lớp đất (thổ nhưỡng) với lớp đá mẹ bên dưới là gì?",
            options: ["Độ phì nhiêu (khả năng cung cấp dưỡng chất, nước, khí cho cây trồng)", "Khối lượng riêng của đất", "Màu sắc đen hoặc vàng", "Độ cứng cơ học"],
            ans: 0,
            exp: "Độ phì nhiêu là thuộc tính sinh học sống còn của đất, quyết định năng suất thảm thực vật."
          },
          {
            q: "Nhân tố tự nhiên nào quyết định thành phần chất khoáng vô cơ ban đầu của đất?",
            options: ["Đá mẹ", "Khí hậu", "Sinh vật", "Thời gian"],
            ans: 0,
            exp: "Đá mẹ bị phong hóa vỡ vụn là nguồn cung cấp trực tiếp 100% khoáng vô cơ cho đất."
          }
        ]
      },
      {
        id: "bai-15",
        number: "Bài 15",
        title: "Sinh quyển",
        badge: "Sự sống & Thảm thực vật",
        icon: "fa-solid fa-tree",
        overview: "Giới hạn sinh quyển (đối lưu, thủy quyển, vỏ phong hóa), đặc điểm quang hợp chuyển hóa năng lượng và các nhân tố quyết định sự phân bố sinh vật trên Trái Đất.",
        sections: [
          {
            title: "1. Giới hạn và Đặc điểm Sinh quyển",
            content: `
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs mb-3 space-y-1.5">
                <div>• <strong>Giới hạn:</strong> Toàn bộ nơi có sinh vật sinh sống — gồm phần dưới khí quyển (tầng đối lưu), toàn bộ thủy quyển đến rãnh biển sâu hàng vạn mét, và phần trên thạch quyển (lớp vỏ phong hóa và đất).</div>
                <div>• <strong>Đặc điểm:</strong> Khối lượng nhỏ nhất so với các quyển khác nhưng có vai trò chuyển hóa năng lượng mặt trời thông qua quá trình <em>quang hợp của cây xanh</em>, liên kết vật chất giữa các quyển.</div>
              </div>
            `
          },
          {
            title: "2. Các nhân tố ảnh hưởng đến sự phân bố sinh vật",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Khí hậu (Nhiệt, Ánh sáng, Nước):</strong>
                  Nhân tố quyết định nhất; ánh sáng cho quang hợp, nhiệt và độ ẩm quy định ranh giới sinh thái (rừng mưa nhiệt đới rậm rạp vs hoang mạc trơ trụi).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Đất &amp; Địa hình:</strong>
                  Cấu trúc đất nuôi dưỡng hệ thực vật; độ cao địa hình tạo nên các vành đai sinh vật theo đai cao tương tự như thay đổi từ xích đạo về cực.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 sm:col-span-2">
                  <strong class="text-emerald-600 block mb-1">Tác động của con người:</strong>
                  Mở rộng vùng phân bố cây trồng vật nuôi, lập khu bảo tồn; đồng thời phá rừng, săn bắn và ô nhiễm đang làm suy giảm báo động đa dạng sinh học toàn cầu.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhân tố tự nhiên nào đóng vai trò hàng đầu, chi phối trực tiếp đến sự phân bố của các đới thảm thực vật trên Trái Đất?",
            options: ["Khí hậu (nhiệt độ và độ ẩm / lượng mưa)", "Độ cao của sóng biển", "Áp suất tâm Trái Đất", "Sự di chuyển của các mảng kiến tạo"],
            ans: 0,
            exp: "Khí hậu cung cấp nhiệt, ánh sáng và nước - ba điều kiện tiên quyết cho sự sống và quang hợp của thực vật."
          },
          {
            q: "Quá trình sinh học nào của sinh quyển có khả năng hấp thụ khí carbonic (CO2) và giải phóng khí oxy (O2) điều hòa khí quyển?",
            options: ["Quá trình quang hợp của thực vật có diệp lục", "Quá trình hô hấp của động vật", "Quá trình lên men của vi khuẩn", "Quá trình phong hóa đá"],
            ans: 0,
            exp: "Thực vật thông qua quang hợp biến đổi năng lượng mặt trời thành năng lượng hóa học, tạo oxy duy trì sự sống."
          }
        ]
      },
      {
        id: "bai-16",
        number: "Bài 16",
        title: "Thực hành: Tìm hiểu sự phân bố đất và sinh vật trên Trái Đất",
        badge: "Thực hành thảm thực vật",
        icon: "fa-solid fa-globe",
        overview: "Phân tích bản đồ đất và thảm thực vật thế giới theo vĩ độ (từ đài nguyên cực đến rừng nhiệt đới xích đạo) và phân tích các vành đai sinh thái theo độ cao.",
        sections: [
          {
            title: "1. Sự phân bố đất và sinh vật theo vĩ độ",
            content: `
              <div class="overflow-x-auto text-xs mb-3">
                <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl">
                  <thead class="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold">
                    <tr>
                      <th class="p-2 border border-slate-200 dark:border-slate-700">Đới khí hậu / Vĩ độ</th>
                      <th class="p-2 border border-slate-200 dark:border-slate-700">Kiểu thảm thực vật</th>
                      <th class="p-2 border border-slate-200 dark:border-slate-700">Nhóm đất tương ứng</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td class="p-2 font-bold text-blue-600 border border-slate-200 dark:border-slate-700">Cực &amp; Cận cực</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Đài nguyên (Tundra - rêu, địa y)</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Đất đài nguyên glây</td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-indigo-600 border border-slate-200 dark:border-slate-700">Ôn đới lạnh</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Rừng lá kim (Taiga - thông, linh sam)</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Đất pốt-dôn</td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-emerald-600 border border-slate-200 dark:border-slate-700">Ôn đới lục địa</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Thảo nguyên ôn đới (cỏ thấp)</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Đất đen thảo nguyên màu mỡ</td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-amber-600 border border-slate-200 dark:border-slate-700">Cận nhiệt &amp; Nhiệt đới khô</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Xa van và hoang mạc cây bụi gai</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Đất đỏ nâu xa van, đất xám hoang mạc</td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-rose-600 border border-slate-200 dark:border-slate-700">Nhiệt đới ẩm &amp; Xích đạo</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Rừng nhiệt đới gió mùa, rừng mưa xích đạo</td>
                      <td class="p-2 border border-slate-200 dark:border-slate-700">Đất đỏ vàng feralit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm đất đen thảo nguyên nổi tiếng vì độ phì nhiêu màu mỡ cao nhất thế giới được hình thành dưới kiểu thảm thực vật nào?",
            options: ["Thảo nguyên ôn đới", "Rừng lá kim taiga", "Đài nguyên cực", "Rừng mưa nhiệt đới"],
            ans: 0,
            exp: "Khí hậu ôn đới lục địa với sinh khối cỏ thảo nguyên chết đi để lại tầng mùn hữu cơ dày đặc tạo nên đất đen."
          },
          {
            q: "Ở vùng nhiệt đới ẩm gió mùa (như phần lớn lãnh thổ Việt Nam), nhóm đất chiếm diện tích lớn nhất là:",
            options: ["Đất đỏ vàng feralit", "Đất pốt-dôn", "Đất đài nguyên", "Đất xám hoang mạc"],
            ans: 0,
            exp: "Nhiệt ẩm cao làm quá trình phong hóa diễn ra sâu, rửa trôi bazơ và tích tụ oxit sắt, nhôm tạo thành đất feralit đỏ vàng."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 7. MỘT SỐ QUY LUẬT CỦA VỎ ĐỊA LÍ
  {
    partId: "phan-2",
    partTitle: "Phần hai — Địa lí tự nhiên",
    chapterId: "chuong-7",
    chapterNumber: "Chương 7",
    chapterTitle: "Một số quy luật của vỏ địa lí",
    badge: "Bài 17 – Bài 18",
    icon: "fa-solid fa-arrows-to-circle",
    lessons: [
      {
        id: "bai-17",
        number: "Bài 17",
        title: "Vỏ địa lí, quy luật thống nhất và hoàn chỉnh của vỏ địa lí",
        badge: "Quy luật thống nhất",
        icon: "fa-solid fa-circle-nodes",
        overview: "Khái niệm vỏ địa lí dày 30–35 km và quy luật thống nhất - hoàn chỉnh: mối quan hệ quy định lẫn nhau giữa các thành phần tự nhiên; một thành phần biến đổi kéo theo sự biến đổi dây chuyền.",
        sections: [
          {
            title: "1. Khái niệm Vỏ địa lí (Vỏ cảnh quan)",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs mb-3">
                <strong>Vỏ địa lí:</strong> Là lớp vỏ Trái Đất nơi các quyển (thạch quyển, khí quyển, thủy quyển, sinh quyển và thổ nhưỡng) xâm nhập và tương tác qua lại mật thiết với nhau; chiều dày khoảng <strong>30–35 km</strong> (từ tầng ô-dôn đến đáy vực thẳm đại dương và đáy lớp vỏ phong hóa).
              </div>
            `
          },
          {
            title: "2. Quy luật Thống nhất và Hoàn chỉnh",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Nội dung quy luật:</strong>
                  Mọi thành phần của vỏ địa lí không tồn tại biệt lập mà luôn tác động trao đổi vật chất và năng lượng gắn kết chặt chẽ. <strong>Nếu một thành phần bị thay đổi sẽ kéo theo sự biến đổi của tất cả các thành phần còn lại</strong> và toàn bộ cảnh quan lãnh thổ.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 block mb-1">Ví dụ thực tế:</strong>
                  Khi rừng đầu nguồn bị tàn phá → Lượng nước mặt bốc hơi và chảy tràn tăng mạnh → Đất bị xói mòn trơ sỏi đá → Mực nước sông mùa kiệt cạn trơ đáy, mùa mưa lũ quét ngập lụt kinh hoàng → Khí hậu khô hạn, động thực vật biến mất.
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1 font-bold">Ý nghĩa thực tiễn:</strong>
                  Trước khi khai thác hoặc can thiệp cải tạo tự nhiên (xây đập thủy điện, khai mỏ, chặt cây), con người bắt buộc phải khảo sát tổng hợp và đánh giá tác động môi trường toàn diện để lường trước các biến đổi liên đới tiêu cực.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Hệ quả nào sau đây là minh chứng rõ rệt nhất cho quy luật thống nhất và hoàn chỉnh của vỏ địa lí khi rừng đầu nguồn bị chặt phá?",
            options: ["Dòng chảy mặt tăng gây xói mòn đất, mực nước ngầm hạ thấp và lũ quét mùa mưa gia tăng", "Không có bất kì ảnh hưởng nào đến khí hậu", "Nhiệt độ không khí giảm đi", "Lượng nước ngầm tăng vọt"],
            ans: 0,
            exp: "Rừng bị phá kéo theo sự suy giảm chất lượng đất, biến đổi chế độ nước sông và vi khí hậu khu vực."
          },
          {
            q: "Chiều dày giới hạn của Vỏ địa lí (khoảng 30 – 35 km) được xác định từ:",
            options: ["Từ tầng ô-dôn trong khí quyển xuống đến đáy lớp vỏ phong hóa và đáy vực biển sâu", "Từ bề mặt đất xuống tâm Trái Đất", "Chỉ tính riêng tầng đối lưu", "Chỉ tính độ sâu của các đại dương"],
            ans: 0,
            exp: "Vỏ địa lí bao gồm nơi giao thoa của 5 quyển, giới hạn trên là tầng ô-dôn bảo vệ và dưới là đáy vỏ phong hóa."
          }
        ]
      },
      {
        id: "bai-18",
        number: "Bài 18",
        title: "Quy luật địa đới và quy luật phi địa đới",
        badge: "Địa đới & Phi địa đới",
        icon: "fa-solid fa-arrows-split-up-and-left",
        overview: "So sánh Quy luật Địa đới (thay đổi theo vĩ độ do góc chiếu bức xạ mặt trời) và Quy luật Phi địa đới (thay đổi theo kinh độ / lục địa - đại dương gọi là địa ô, và theo độ cao gọi là đai cao).",
        sections: [
          {
            title: "1. Quy luật Địa đới",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs mb-3 space-y-1.5">
                <div>• <strong>Nguyên nhân:</strong> Do Trái Đất hình cầu và chuyển động quanh Mặt Trời khiến góc chiếu của tia sáng Mặt Trời giảm dần từ Xích đạo về hai cực.</div>
                <div>• <strong>Biểu hiện:</strong> Các vòng đai nhiệt, các đai khí áp và gió hành tinh, các đới khí hậu, các nhóm đất và kiểu thảm thực vật phân bố song song theo các vĩ tuyến.</div>
              </div>
            `
          },
          {
            title: "2. Quy luật Phi địa đới (Địa ô và Đai cao)",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Quy luật Địa ô:</strong>
                  Sự phân hóa cảnh quan theo <strong>kinh độ</strong> (từ duyên hải ven biển vào sâu trong nội địa) do sự phân bố không đều giữa lục địa và đại dương cùng địa hình núi chắn ẩm (bờ đông ẩm ướt, sâu trong lục địa khô cằn hình thành hoang mạc).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Quy luật Đai cao:</strong>
                  Sự thay đổi có quy luật của các thành phần tự nhiên theo <strong>độ cao địa hình</strong> do nhiệt độ và độ ẩm biến đổi theo độ cao (chân núi rừng lá rộng → sườn núi rừng hỗn hợp, lá kim → đỉnh núi đồng cỏ núi cao, băng tuyết vĩnh cửu).
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nguyên nhân gốc rễ sinh ra Quy luật Địa đới trên Trái Đất là do:",
            options: ["Dạng hình cầu của Trái Đất làm cho góc chiếu của tia sáng Mặt Trời giảm dần từ xích đạo về cực", "Ảnh hưởng của các dòng biển nóng", "Độ dốc của các ngọn núi", "Sự phân bố của các mảng kiến tạo"],
            ans: 0,
            exp: "Dạng cầu làm lượng bức xạ mặt trời phân bố giảm dần theo vĩ độ, tạo nên các đới tự nhiên song song với xích đạo."
          },
          {
            q: "Sự phân hóa của thảm thực vật từ chân núi Fansipan lên đến đỉnh cao 3.143m là biểu hiện đặc trưng của quy luật nào?",
            options: ["Quy luật đai cao (thuộc nhóm phi địa đới)", "Quy luật địa ô", "Quy luật địa đới", "Quy luật nhịp điệu"],
            ans: 0,
            exp: "Càng lên cao nhiệt độ càng giảm và ẩm biến đổi tạo ra các đai sinh vật phân tầng rõ rệt theo độ cao."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 8. ĐỊA LÍ DÂN CƯ
  {
    partId: "phan-3",
    partTitle: "Phần ba — Địa lí kinh tế – xã hội",
    chapterId: "chuong-8",
    chapterNumber: "Chương 8",
    chapterTitle: "Địa lí dân cư",
    badge: "Bài 19 – Bài 20",
    icon: "fa-solid fa-users",
    lessons: [
      {
        id: "bai-19",
        number: "Bài 19",
        title: "Quy mô dân số, gia tăng dân số và cơ cấu dân số thế giới",
        badge: "Dân số & Tháp tuổi",
        icon: "fa-solid fa-people-group",
        overview: "Quy mô dân số thế giới (7,8 tỉ người năm 2020), phân biệt gia tăng tự nhiên và gia tăng cơ học, cơ cấu dân số theo tuổi/giới tính và cơ cấu dân số vàng.",
        sections: [
          {
            title: "1. Quy mô và Gia tăng dân số",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">Quy mô dân số:</strong>
                  Tổng số người sinh sống trên một lãnh thổ tại một thời điểm. Dân số thế giới tăng nhanh từ giữa TK XX và đạt 7,8 tỉ người vào năm 2020.
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1">Gia tăng tự nhiên (Tg):</strong>
                    = Tỉ suất sinh thô (S) − Tỉ suất tử thô (T). Là động lực chính làm tăng dân số toàn cầu.
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                    <strong class="text-emerald-600 block mb-1">Gia tăng cơ học:</strong>
                    = Tỉ suất nhập cư − Tỉ suất xuất cư. Làm thay đổi dân số từng quốc gia nhưng không ảnh hưởng tổng dân số thế giới.
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "2. Cơ cấu dân số & Tháp dân số",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div>• <strong>Cơ cấu sinh học:</strong> Theo giới tính (tỉ số giới tính) và theo độ tuổi:</div>
                <div class="ml-3">• <em>Nhóm dưới tuổi lao động (0–14 tuổi)</em></div>
                <div class="ml-3">• <em>Nhóm trong độ tuổi lao động (15–64 tuổi)</em></div>
                <div class="ml-3">• <em>Nhóm trên tuổi lao động (65 tuổi trở lên)</em></div>
                <div>• <strong>Dân số già:</strong> Khi nhóm 65+ tuổi chiếm > 14% tổng dân số. <strong>Dân số vàng:</strong> Khi nhóm 15–64 tuổi chiếm ít nhất 2/3 (trên 66%) tổng dân số.</div>
                <div>• <strong>Tháp dân số:</strong> Đáy rộng thu hẹp nhanh (tháp trẻ mở rộng), đáy hẹp phình to ở giữa/trên (tháp già hóa thu hẹp).</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Một quốc gia được coi là bước vào thời kì 'Cơ cấu dân số già' khi tỉ lệ người từ 65 tuổi trở lên chiếm:",
            options: ["Trên 14% tổng dân số", "Dưới 5%", "Từ 1% đến 3%", "Trên 50%"],
            ans: 0,
            exp: "Theo chuẩn Liên Hợp Quốc, ngưỡng 7% là già hóa và trên 14% là dân số già."
          },
          {
            q: "Gia tăng dân số thực tế của một quốc gia được tính bằng tổng của:",
            options: ["Gia tăng tự nhiên và gia tăng cơ học", "Tỉ suất sinh thô trừ đi nhập cư", "Số người kết hôn cộng số người đi học", "Tỉ suất tử thô cộng với xuất cư"],
            ans: 0,
            exp: "Gia tăng thực tế = (Sinh - Tử) + (Nhập cư - Xuất cư)."
          }
        ]
      },
      {
        id: "bai-20",
        number: "Bài 20",
        title: "Phân bố dân cư và đô thị hoá trên thế giới",
        badge: "Mật độ & Đô thị hóa",
        icon: "fa-solid fa-city",
        overview: "Đặc điểm phân bố dân cư không đồng đều trên Trái Đất, các nhân tố chi phối (tự nhiên, kinh tế) và bản chất, tác động hai mặt của quá trình đô thị hóa toàn cầu.",
        sections: [
          {
            title: "1. Sự phân bố dân cư thế giới",
            content: `
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs mb-3 space-y-1.5">
                <div>• <strong>Phân bố không đều:</strong> Tập trung rất đông ở Nam Á, Đông Á, Đông Nam Á, Tây Âu và ven biển đồng bằng châu thổ. Thưa thớt ở vùng cực băng giá, hoang mạc khô cằn và núi cao hiểm trở.</div>
                <div>• <strong>Nhân tố chi phối:</strong> Tự nhiên (khí hậu, nguồn nước, địa hình thuận lợi) và Kinh tế – xã hội (trình độ phát triển sản xuất, lịch sử khai thác lãnh thổ, mạng lưới giao thông đô thị).</div>
              </div>
            `
          },
          {
            title: "2. Bản chất và Tác động của Đô thị hóa",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Khái niệm &amp; Tác động tích cực:</strong>
                  Quá trình tập trung dân cư vào các đô thị, tăng tỉ lệ dân thành thị và lan tỏa lối sống văn minh đô thị. Thúc đẩy công nghiệp hóa, tạo việc làm, chuyển dịch cơ cấu kinh tế và đổi mới sáng tạo.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">Thách thức khi đô thị hóa tự phát:</strong>
                  Áp lực nhà ở, khu ổ chuột, tắc nghẽn giao thông, ô nhiễm không khí rác thải, thiếu nước sạch, tệ nạn xã hội và bất bình đẳng giữa nông thôn - thành thị.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhân tố kinh tế – xã hội nào đóng vai trò quyết định nhất đến sự phân bố dân cư và mức độ tập trung mật độ dân số?",
            options: ["Trình độ phát triển của lực lượng sản xuất và tính chất của nền kinh tế", "Số lượng con sông chảy qua", "Màu sắc của đất trồng", "Độ dốc của địa hình"],
            ans: 0,
            exp: "Nơi nào có nền kinh tế phát triển, nhiều việc làm và hạ tầng tốt thì dân cư tự nhiên tụ hội đông đúc."
          },
          {
            q: "Hậu quả tiêu cực thường thấy của quá trình đô thị hóa tự phát, không đi kèm quy hoạch bền vững là gì?",
            options: ["Ùn tắc giao thông, ô nhiễm môi trường và thiếu hụt nhà ở, việc làm", "Dân số nông thôn tăng vọt", "Diện tích rừng tự nhiên tăng nhanh", "Tất cả mọi người đều trở nên giàu có"],
            ans: 0,
            exp: "Đô thị hóa tự phát gây quá tải nghiêm trọng cho hệ thống hạ tầng đô thị."
          }
        ]
      }
    ]
  },

  // CHƯƠNG 9. CÁC NGUỒN LỰC & TIÊU CHÍ PHÁT TRIỂN KINH TẾ
  {
    partId: "phan-3",
    partTitle: "Phần ba — Địa lí kinh tế – xã hội",
    chapterId: "chuong-9",
    chapterNumber: "Chương 9",
    chapterTitle: "Các nguồn lực, một số tiêu chí đánh giá sự phát triển kinh tế",
    badge: "Bài 21 – Bài 22",
    icon: "fa-solid fa-chart-pie",
    lessons: [
      {
        id: "bai-21",
        number: "Bài 21",
        title: "Các nguồn lực phát triển kinh tế",
        badge: "Nguồn lực kinh tế",
        icon: "fa-solid fa-coins",
        overview: "Khái niệm nguồn lực, phân loại theo nguồn gốc (vị trí địa lí, tự nhiên, kinh tế-xã hội), phạm vi (bên trong nền tảng, bên ngoài hỗ trợ) và cách thức kết hợp tối ưu.",
        sections: [
          {
            title: "1. Khái niệm và Phân loại nguồn lực",
            content: `
              <div class="space-y-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong>Nguồn lực:</strong> Tổng thể các yếu tố (vị trí, tài nguyên, lao động, vốn, công nghệ, chính sách) có thể khai thác và huy động nhằm phục vụ phát triển kinh tế của một lãnh thổ.
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                    <strong class="text-indigo-600 block mb-1">Nguồn lực bên trong (Nội lực):</strong>
                    Vị trí địa lí, tài nguyên thiên nhiên, nguồn lao động dồi dào, vốn tích lũy, cơ sở hạ tầng, đường lối chính sách. Giữ vai trò <strong>nền tảng quyết định</strong>.
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                    <strong class="text-indigo-600 block mb-1">Nguồn lực bên ngoài (Ngoại lực):</strong>
                    Vốn đầu tư FDI, công nghệ tiên tiến chuyển giao, kinh nghiệm quản lí quốc tế, thị trường xuất khẩu. Giữ vai trò <strong>quan trọng, tạo bước đột phá</strong>.
                  </div>
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Trong quá trình phát triển kinh tế của một quốc gia, nguồn lực nào giữ vai trò quyết định, là cơ sở nền tảng lâu dài?",
            options: ["Nguồn lực bên trong (nội lực quốc gia)", "Vốn vay nợ từ nước ngoài", "Viện trợ không hoàn lại", "Thị trường nhập khẩu"],
            ans: 0,
            exp: "Nội lực (lao động, tài nguyên, chính sách trong nước) quyết định tính tự chủ và bền vững của nền kinh tế."
          },
          {
            q: "Vốn đầu tư trực tiếp nước ngoài (FDI) và công nghệ chuyển giao từ các tập đoàn đa quốc gia thuộc nhóm nguồn lực nào?",
            options: ["Nguồn lực bên ngoài (ngoại lực)", "Nguồn lực tự nhiên", "Nguồn lực vị trí địa lí", "Nội lực truyền thống"],
            ans: 0,
            exp: "FDI và công nghệ cao nhập khẩu từ nước ngoài là nguồn lực ngoại sinh quan trọng thúc đẩy công nghiệp hóa."
          }
        ]
      },
      {
        id: "bai-22",
        number: "Bài 22",
        title: "Cơ cấu kinh tế, tổng sản phẩm trong nước và tổng thu nhập quốc gia",
        badge: "GDP, GNI & Cơ cấu",
        icon: "fa-solid fa-scale-balanced",
        overview: "Cơ cấu kinh tế (ngành, thành phần, lãnh thổ), phân biệt bản chất giữa GDP (sản xuất trong lãnh thổ) và GNI (thu nhập của công dân), ý nghĩa GDP/người.",
        sections: [
          {
            title: "1. Ba bộ phận hợp thành Cơ cấu kinh tế",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">1. Cơ cấu ngành:</strong>
                  Gồm Nông – Lâm – Thủy sản; Công nghiệp – Xây dựng; Dịch vụ. Xu hướng hiện đại: giảm tỉ trọng nông nghiệp, tăng dịch vụ và công nghệ cao.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">2. Cơ cấu thành phần:</strong>
                  Kinh tế Nhà nước (chủ đạo), kinh tế ngoài Nhà nước (tư nhân, tập thể) và kinh tế có vốn đầu tư nước ngoài (FDI).
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-blue-600 block mb-1">3. Cơ cấu lãnh thổ:</strong>
                  Các vùng kinh tế trọng điểm, khu chế xuất, hành lang kinh tế, đô thị và nông thôn.
                </div>
              </div>
            `
          },
          {
            title: "2. Phân biệt chỉ tiêu GDP và GNI",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1 font-bold">Tổng sản phẩm trong nước (GDP):</strong>
                  Tổng giá trị thị trường của toàn bộ hàng hóa và dịch vụ cuối cùng được sản xuất ra <strong>bên trong phạm vi lãnh thổ quốc gia</strong> trong một năm (không phân biệt do người trong nước hay người nước ngoài tạo ra).
                </div>
                <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200/60 dark:border-indigo-800">
                  <strong class="text-indigo-800 dark:text-indigo-300 block mb-1 font-bold">Tổng thu nhập quốc gia (GNI):</strong>
                  Tổng thu nhập do <strong>công dân và thể nhân của quốc gia đó tạo ra</strong> trong một năm (bất kể làm ra ở trong nước hay ở nước ngoài gửi về). <br>
                  <em>Chỉ tiêu bình quân:</em> <strong>GDP/người = GDP / Tổng dân số</strong>.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Chỉ tiêu Tổng sản phẩm trong nước (GDP) đo lường giá trị hàng hóa và dịch vụ cuối cùng được tạo ra ở đâu?",
            options: ["Bên trong ranh giới lãnh thổ quốc gia (không phân biệt chủ thể trong hay ngoài nước)", "Chỉ tính của công dân sinh sống ở nước ngoài", "Chỉ tính của các doanh nghiệp nhà nước", "Chỉ tính hàng xuất khẩu"],
            ans: 0,
            exp: "GDP (Gross Domestic Product) gắn liền với phạm vi địa lí lãnh thổ sản xuất."
          },
          {
            q: "Để so sánh mức sống vật chất trung bình giữa dân cư các nước trên thế giới, người ta thường dùng chỉ tiêu nào?",
            options: ["GDP bình quân đầu người (hoặc GNI/người)", "Tổng diện tích đất đai", "Số lượng ngân hàng", "Khối lượng vàng dự trữ"],
            ans: 0,
            exp: "GDP/người chia quy mô kinh tế cho tổng dân số, phản ánh mức sản phẩm bình quân một người dân thụ hưởng."
          }
        ]
      }
    ]
  }
];

module.exports = { chaptersPart2 };
