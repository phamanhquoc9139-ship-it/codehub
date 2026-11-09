// scratch/generate_sinh10_data.js
// Comprehensive dataset for Chuyên Đề Học Tập Sinh Học 10 - Kết nối tri thức với cuộc sống (3 Chuyên đề, 12 Bài)

const fs = require('fs');
const path = require('path');

const chuyendeList = [
  {
    id: 1,
    title: "Chuyên đề 1. Công nghệ tế bào và một số thành tựu",
    desc: "Cơ sở khoa học về tính toàn năng, công nghệ tế bào thực vật (vi nhân giống, chuyển gene), công nghệ tế bào gốc và công nghệ tế bào động vật (nhân bản vô tính, liệu pháp gene, liệu pháp tế bào gốc).",
    lessons: [
      {
        id: 1,
        title: "Bài 1. Công nghệ tế bào thực vật và thành tựu",
        subtitle: "Tính toàn năng, quy trình vi nhân giống mô sẹo và thành tựu cây chuyển gene, dòng đơn bội",
        pillars: [
          {
            title: "Tính toàn năng của tế bào thực vật",
            icon: "fa-dna",
            desc: "Khả năng của tế bào phân chia, biệt hóa thành các loại tế bào khác nhau và tái sinh thành cơ thể hoàn chỉnh khi gặp điều kiện thích hợp.",
            points: [
              "Mỗi tế bào chuyên hóa vẫn chứa trọn vẹn hệ gene với đầy đủ thông tin di truyền của cả cơ thể thực vật.",
              "Trong điều kiện nuôi cấy nhân tạo thích hợp, tế bào có thể được cảm ứng để **giải biệt hóa** (quay về trạng thái phôi sinh), phân chia tạo mô sẹo rồi **tái biệt hóa** thành rễ, chồi và cơ thể hoàn chỉnh.",
              "Cơ sở di truyền học chứng minh mọi tế bào sinh dưỡng đều có tiềm năng phát triển như một hợp tử ban đầu."
            ]
          },
          {
            title: "Quy trình công nghệ vi nhân giống (4 giai đoạn)",
            icon: "fa-flask-vial",
            desc: "Nuôi cấy mô/tế bào trên môi trường dinh dưỡng nhân tạo trong điều kiện vô trùng nghiêm ngặt để tạo số lượng lớn cây con đồng nhất.",
            points: [
              "**1. Chuẩn bị môi trường:** Môi trường MS chứa khoáng đa lượng, vi lượng, đường sucrose, vitamin và tỉ lệ hormone thích hợp (Auxin kích thích tạo rễ, Cytokinin kích thích tạo chồi; tỉ lệ cân bằng tạo mô sẹo). Khử trùng ở nồi hấp 121°C, 1 atm.",
              "**2. Khử trùng mẫu:** Lấy mô phân sinh đỉnh chồi/lá non từ cây mẹ khỏe mạnh, khử trùng bề mặt bằng dung dịch sát khuẩn (NaOCl, $H_2O_2$) rồi rửa sạch bằng nước cất vô trùng.",
              "**3. Nuôi cấy và tái sinh:** Đặt mẫu vào bình vô trùng dưới quang chu kì (16h sáng/8h tối, 25°C). Mẫu giải biệt hóa tạo **mô sẹo (callus)**, sau đó tái biệt hóa phân hóa thành chồi và rễ tạo cây con hoàn chỉnh.",
              "**4. Thuần hóa cây con:** Chuyển cây con ra giá thể đất/vườn ươm mái che để thích nghi dần với môi trường tự nhiên trước khi đưa vào sản xuất đại trà (thời gian chu trình 6–8 tuần)."
            ]
          },
          {
            title: "Thành tựu chọn tạo giống & Chuyển gene",
            icon: "fa-seedling",
            desc: "Ứng dụng đột phá trong bảo tồn nguồn gene quý, nhân nhanh cây giống sạch bệnh và tạo cây trồng chuyển gene.",
            points: [
              "**Bảo tồn & nhân nhanh giống quý:** Nhân giống vô tính sâm Ngọc Linh, lan rừng quý hiếm, duy trì các giống cây ăn quả sạch bệnh virus (chuối, khoai tây, dâu tây).",
              "**Cây chuyển gene (GMO):** Đưa gene mong muốn vào tế bào cây qua vector plasmid *Agrobacterium tumefaciens*, súng bắn gene hoặc vi tiêm $\to$ tái sinh cây chuyển gene.",
              "**Ví dụ tiêu biểu:** Bông mang gene $Bt$ kháng sâu bệnh, đậu tương kháng thuốc diệt cỏ glyphosate, 'Gạo Vàng' (Golden Rice) tổng hợp tiền chất beta-carotene (vitamin A).",
              "**Nuôi cấy hạt phấn:** Nuôi cấy bao phấn/hạt phấn tạo cây đơn bội ($n$), sau đó lưỡng bội hóa bằng colchicine tạo dòng thuần chủng lưỡng bội đồng hợp tử tuyệt đối ($2n$)."
            ]
          },
          {
            title: "Triển vọng phát triển nông nghiệp công nghệ cao",
            icon: "fa-chart-line",
            desc: "Kết hợp công nghệ tế bào với công nghệ chỉnh sửa gene để nâng cao năng suất và giá trị dược liệu.",
            points: [
              "Nhân sinh khối tế bào trong nồi lên men bioreactor để thu nhận các hoạt chất sinh học quý (ginsenoside từ sâm, taxol trị ung thư từ thông đỏ).",
              "Chương trình lúa C4: chuyển các enzyme quang hợp chu trình C4 vào lúa nước C3 để tăng hiệu suất sử dụng ánh sáng, nước và dinh dưỡng.",
              "Nhân giống quy mô công nghiệp phục vụ tái sinh rừng và xuất khẩu nông sản sạch bệnh."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Quy trình vi nhân giống & Chuyển gene thực vật",
          steps: [
            "Mô phân sinh sạch bệnh",
            "Khử trùng mẫu mô & Cấy lên môi trường MS",
            "Cảm ứng tạo mô sẹo (Callus)",
            "Tái biệt hóa: Tỉ lệ Auxin/Cytokinin $\to$ Tạo chồi & Tạo rễ",
            "Cây con hoàn chỉnh $\to$ Thuần hóa vườn ươm $\to$ Trồng đại trà"
          ]
        },
        caseStudy: {
          title: "Nhân giống vô tính bảo tồn nguồn gene quý sâm Ngọc Linh",
          context: "Sâm Ngọc Linh là quốc bảo dược liệu của Việt Nam, chứa hàm lượng saponin cực cao nhưng sinh trưởng rất chậm và hạt khó nảy mầm trong tự nhiên.",
          solution: "1. Tách mô phân sinh chồi ngủ từ củ sâm khỏe mạnh không sâu bệnh.\n2. Khử trùng bề mặt bằng dung dịch javel loãng và cấy vào môi trường thạch MS bổ sung NAA (auxin) và BAP (cytokinin).\n3. Nuôi cấy tạo mô sẹo phôi hóa trong phòng lạnh 20–22°C, độ ẩm 75%.\n4. Cảm ứng biệt hóa chồi và kích thích ra rễ bằng IBA; chuyển cây con ra giá thể xơ dừa mùn núi Ngọc Linh để thuần hóa trước khi đưa về rừng nguyên sinh.\n5. Kết quả thu được hàng vạn cây giống đồng đều, sạch bệnh, giữ nguyên 100% đặc tính di truyền quý giá.",
          tip: "Bí quyết thành công là kiểm soát vô trùng nghiêm ngặt và tỉ lệ hormone thích hợp ở từng giai đoạn để ngăn hiện tượng chai hóa mô sẹo."
        },
        quizzes: [
          {
            q: "Tính toàn năng của tế bào thực vật được hiểu là khả năng nào sau đây?",
            opts: [
              "Tế bào có thể phân chia vô hạn trong cơ thể mà không bao giờ già cỗi",
              "Tế bào chứa đủ hệ gene, có thể giải biệt hóa và tái sinh thành cơ thể hoàn chỉnh",
              "Tế bào có khả năng tự tổng hợp tất cả các chất hữu cơ từ chất vô cơ",
              "Tế bào có thể kết hợp với mọi tế bào khác để tạo hợp tử mới"
            ],
            correct: 1,
            explain: "Tính toàn năng là khả năng tế bào sinh dưỡng chứa trọn vẹn thông tin di truyền của loài, có thể giải biệt hóa và tái biệt hóa để phát triển thành một cơ thể hoàn chỉnh khi có điều kiện nuôi cấy thích hợp."
          },
          {
            q: "Trong môi trường nuôi cấy mô thực vật, để kích thích mô sẹo tái biệt hóa tạo chồi, người ta điều chỉnh tỉ lệ hormone như thế nào?",
            opts: [
              "Tăng nồng độ Auxin cao hơn nhiều so với Cytokinin",
              "Tăng nồng độ Cytokinin cao hơn so với Auxin",
              "Duy trì tỉ lệ Auxin và Cytokinin hoàn toàn bằng nhau",
              "Loại bỏ cả Auxin và Cytokinin ra khỏi môi trường"
            ],
            correct: 1,
            explain: "Trong công nghệ tế bào thực vật: Tỉ lệ Cytokinin > Auxin kích thích tái sinh chồi; Tỉ lệ Auxin > Cytokinin kích thích ra rễ; Tỉ lệ cân bằng duy trì mô sẹo tiếp tục phân chia."
          },
          {
            q: "Đặc điểm nổi bật của các cây con được tạo ra bằng phương pháp vi nhân giống là gì?",
            opts: [
              "Có kiểu gene đa dạng và khả năng thích nghi mới vượt trội",
              "Có kiểu gene giống hệt cây mẹ ban đầu và đồng nhất về mặt di truyền",
              "Mang bộ nhiễm sắc thể đơn bội n cần phải thụ tinh nhân tạo",
              "Luôn có năng suất tăng gấp đôi so với cây trồng bình thường"
            ],
            correct: 1,
            explain: "Vi nhân giống dựa trên cơ sở nguyên phân, do đó tất cả các cây con tạo ra đều mang kiểu gene giống hệt nhau và giống hệt cây mẹ ban đầu."
          }
        ]
      },
      {
        id: 2,
        title: "Bài 2. Tế bào gốc và một số thành tựu",
        subtitle: "Phân loại tiềm năng biệt hóa, tế bào gốc cảm ứng iPSC và ứng dụng trong y học tái tạo",
        pillars: [
          {
            title: "Khái niệm và hai đặc tính cơ bản của tế bào gốc",
            icon: "fa-microscope",
            desc: "Tế bào chưa biệt hóa, có khả năng tự đổi mới và biệt hóa thành các dòng tế bào chuyên hóa chức năng.",
            points: [
              "**Khả năng tự làm mới (Self-renewal):** Phân chia nguyên phân liên tục để duy trì quần thể tế bào gốc mà không mất đi tính chưa chuyên hóa.",
              "**Tiềm năng biệt hóa (Differentiation):** Khi nhận tín hiệu kích thích thích hợp, tế bào gốc chuyển hóa thành các loại tế bào chuyên hóa (tế bào thần kinh, tế bào cơ tim, hồng cầu, tế bào gan...).",
              "Vai trò sinh học tự nhiên: thay thế các tế bào già cỗi, bị tổn thương hoặc chết đi trong các mô cơ quan."
            ]
          },
          {
            title: "Phân loại tế bào gốc theo tiềm năng biệt hóa",
            icon: "fa-sitemap",
            desc: "Bốn cấp độ tiềm năng giảm dần từ giai đoạn phôi sơ khai đến cơ thể trưởng thành.",
            points: [
              "**1. Toàn năng (Totipotent):** Có thể tạo ra mọi loại tế bào cơ thể VÀ mô ngoài phôi (nhau thai, dây rốn). Ví dụ: hợp tử và phôi dâu giai đoạn 2–8 tế bào.",
              "**2. Vạn năng (Pluripotent):** Biệt hóa thành mọi loại tế bào thuộc 3 lá phôi (ngoại bì, trung bì, nội bì) nhưng không tạo mô ngoài phôi. Ví dụ: khối tế bào trong (ICM) của phôi nang (Blastocyst).",
              "**3. Đa tiềm năng (Multipotent):** Biệt hóa thành một số loại tế bào chuyên hóa trong cùng một nhóm mô liên quan. Ví dụ: tế bào gốc tạo máu tủy xương (sinh hồng cầu, bạch cầu, tiểu cầu), tế bào gốc trung mô.",
              "**4. Đơn năng (Unipotent):** Chỉ biệt hóa thành một loại tế bào chuyên hóa duy nhất nhưng có khả năng tự làm mới (ví dụ: tế bào gốc sinh tinh tạo tinh trùng)."
            ]
          },
          {
            title: "Tế bào gốc cảm ứng (iPSC) & Đột phá y học",
            icon: "fa-award",
            desc: "Tái lập trình tế bào sinh dưỡng trưởng thành quay trở lại trạng thái vạn năng tương đương tế bào gốc phôi.",
            points: [
              "Năm 2006, Shinya Yamanaka phát hiện 4 yếu tố phiên mã (Oct4, Sox2, Klf4, c-Myc) giúp 'cải lão hoàn đồng' nguyên bào sợi da chuột và người thành tế bào gốc vạn năng cảm ứng (**iPSC**).",
              "**Ưu điểm vượt bậc:** Tránh được vấn đề đạo đức phá hủy phôi người; Cho phép sử dụng tế bào tự thân của chính bệnh nhân để tái tạo mô, loại bỏ hoàn toàn nguy cơ thải ghép miễn dịch.",
              "Tạo mô hình phế nang, cơ tim thu nhỏ (**Organoid**) trong ống nghiệm để nghiên cứu cơ chế bệnh lí và thử nghiệm thuốc an toàn."
            ]
          },
          {
            title: "Thách thức & Vấn đề đạo đức sinh học",
            icon: "fa-scale-balanced",
            desc: "Kiểm soát an toàn sinh học và sự đồng thuận trước khi áp dụng đại trà.",
            points: [
              "Nguy cơ hình thành khối u quái (Teratoma) nếu tế bào gốc cấy ghép phân chia mất kiểm soát.",
              "Tranh luận đạo đức gay gắt xung quanh việc thu nhận tế bào gốc phôi từ phôi thai thụ tinh trong ống nghiệm dư thừa.",
              "Yêu cầu pháp lí nghiêm ngặt: thử nghiệm lâm sàng nhiều giai đoạn, chỉ định chuyên khoa và không được thương mại hóa trái phép."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Thang tiềm năng tế bào gốc & Tái lập trình iPSC",
          steps: [
            "Hợp tử (Tế bào gốc toàn năng)",
            "Khối tế bào trong phôi nang (Tế bào gốc vạn năng ESC)",
            "Tế bào gốc trưởng thành (Đa tiềm năng: Tủy xương, Dây rốn)",
            "Tế bào chuyên hóa (Tế bào da, tế bào thần kinh, tế bào cơ)",
            "Tái lập trình bằng 4 yếu tố Yamanaka $\to$ Tế bào gốc cảm ứng (iPSC)"
          ]
        },
        caseStudy: {
          title: "Ứng dụng ghép tế bào gốc tạo máu tự thân trong điều trị ung thư máu",
          context: "Bệnh nhân mắc bệnh đa u tủy xương hoặc ung thư hạch bạch huyết cần xạ trị và hóa trị liều cao, điều này sẽ tiêu diệt tế bào ung thư nhưng đồng thời phá hủy hoàn toàn tủy xương lành.",
          solution: "1. Trước khi hóa trị liều cao, tiến hành huy động và thu gom tế bào gốc tạo máu ($CD34^+$) từ máu ngoại vi hoặc tủy xương của bệnh nhân.\n2. Bảo quản đông lạnh tế bào gốc ở nhiệt độ -196°C trong nitơ lỏng có chất bảo quản DMSO.\n3. Tiến hành phác đồ hóa trị liều cực cao để quét sạch tế bào ác tính trong cơ thể.\n4. Rã đông và truyền tế bào gốc tự thân trở lại vào tĩnh mạch người bệnh.\n5. Các tế bào gốc tự định vị về tủy xương (homing), tăng sinh và tái thiết lập toàn bộ hệ thống tạo máu và miễn dịch mới sau 2–3 tuần.",
          tip: "Liệu pháp tế bào gốc tự thân giúp bệnh nhân chịu được liều hóa trị tối đa mà không lo biến chứng đào thải ghép dị thân."
        },
        quizzes: [
          {
            q: "Loại tế bào gốc nào có khả năng biệt hóa thành tất cả các loại tế bào của cơ thể và cả các mô ngoài phôi (như màng ối, nhau thai)?",
            opts: [
              "Tế bào gốc vạn năng (Pluripotent)",
              "Tế bào gốc toàn năng (Totipotent)",
              "Tế bào gốc đa tiềm năng (Multipotent)",
              "Tế bào gốc đơn năng (Unipotent)"
            ],
            correct: 1,
            explain: "Tế bào gốc toàn năng (Totipotent) như hợp tử hay phôi giai đoạn đầu có tiềm năng cao nhất, tạo ra toàn bộ các mô trong cơ thể lẫn mô ngoài phôi (nhau thai, dây rốn)."
          },
          {
            q: "Đột phá lớn nhất của công nghệ tạo tế bào gốc vạn năng cảm ứng (iPSC) của Shinya Yamanaka là gì?",
            opts: [
              "Nhân bản vô tính thành công cừu Dolly từ tế bào tuyến vú",
              "Biến tế bào sinh dưỡng trưởng thành thành tế bào gốc vạn năng mà không cần phá hủy phôi",
              "Tạo ra cây trồng biến đổi gene kháng mọi loại sâu bệnh",
              "Cố định enzyme trên chất mang rắn để tái sử dụng nhiều lần"
            ],
            correct: 1,
            explain: "iPSC cho phép đưa 4 yếu tố phiên mã vào tế bào sinh dưỡng trưởng thành (như tế bào da) để tái lập trình chúng thành tế bào gốc vạn năng, giải quyết triệt để rào cản đạo đức phá hủy phôi thai."
          },
          {
            q: "Tế bào gốc tạo máu trong tủy xương thuộc nhóm tiềm năng biệt hóa nào?",
            opts: [
              "Tế bào gốc toàn năng",
              "Tế bào gốc đa tiềm năng",
              "Tế bào gốc đơn năng",
              "Tế bào gốc phôi sơ khai"
            ],
            correct: 1,
            explain: "Tế bào gốc tạo máu là tế bào gốc đa tiềm năng (Multipotent), có thể biệt hóa thành nhiều loại tế bào máu chuyên hóa khác nhau như hồng cầu, bạch cầu lympho, bạch cầu hạt, tiểu cầu."
          }
        ]
      },
      {
        id: 3,
        title: "Bài 3. Công nghệ tế bào động vật và thành tựu",
        subtitle: "Quy trình nuôi cấy, nhân bản vô tính SCNT (cừu Dolly), liệu pháp tế bào và liệu pháp gene",
        pillars: [
          {
            title: "Quy trình nuôi cấy tế bào động vật",
            icon: "fa-vial",
            desc: "Nuôi cấy tế bào động vật trong điều kiện vô trùng nhân tạo nhằm duy trì sinh trưởng hoặc thu nhận sản phẩm sinh học.",
            points: [
              "**Khác biệt với thực vật:** Tế bào động vật không có vách cellulose, đòi hỏi môi trường nuôi cấy phức tạp hơn (huyết thanh bê FBS, acid amin thiết yếu, vitamin, nồng độ $CO_2$ 5% để đệm pH).",
              "Đa số tế bào bình thường có giới hạn phân chia Hayflick (khoảng 40–60 lần phân bào rồi lão hóa và chết).",
              "**Dòng tế bào bất tử:** Tế bào ung thư như HeLa (tách từ Henrietta Lacks năm 1951) có khả năng phân chia vô hạn trong nuôi cấy, là công cụ then chốt trong nghiên cứu vaccine, thuốc và di truyền học."
            ]
          },
          {
            title: "Nhân bản vô tính bằng chuyển nhân soma (SCNT)",
            icon: "fa-clone",
            desc: "Tạo ra cá thể động vật mang bộ gene nhân giống hệt cá thể cho nhân mà không trải qua thụ tinh hữu tính.",
            points: [
              "**Quy trình nhân bản cừu Dolly (1996):**\n- Bước 1: Tách tế bào tuyến vú của cừu mặt trắng (cho nhân), nuôi đói dinh dưỡng để đồng bộ chu kì tế bào về pha $G_0$.\n- Bước 2: Tách tế bào trứng của cừu mặt đen (cho trứng), dùng vi kim hút bỏ nhân ($n$).\n- Bước 3: Chuyển nhân tế bào soma vào trứng đã mất nhân, kích thích bằng xung điện để dung hợp và kích hoạt phân chia tạo phôi.\n- Bước 4: Nuôi phôi sớm trong ống nghiệm vài ngày rồi cấy vào tử cung cừu mẹ mang thai hộ.\n- Bước 5: Cừu con Dolly sinh ra mang kiểu hình và bộ gene nhân giống hệt cừu cho nhân.",
              "**Hạn chế:** Hiệu suất thành công rất thấp (< 1–2%), động vật nhân bản dễ mắc bệnh tật bẩm sinh, lão hóa sớm do lỗi tái lập trình biểu sinh (epigenetic)."
            ]
          },
          {
            title: "Liệu pháp tế bào và Liệu pháp gene",
            icon: "fa-syringe",
            desc: "Can thiệp ở mức độ tế bào và phân tử DNA để điều trị tận gốc các bệnh nan y di truyền.",
            points: [
              "**Liệu pháp tế bào:** Đưa tế bào lành/tế bào gốc được định hướng vào cơ thể để sửa chữa mô tổn thương (ví dụ thay thế tế bào beta đảo tụy trị tiểu đường type 1, tái tạo biểu mô giác mạc).",
              "**Liệu pháp gene:** Đưa gene chức năng bình thường vào tế bào đích để bù đắp hoặc thay thế gene đột biến gây bệnh.",
              "**Phân biệt liệu pháp soma vs liệu pháp tế bào mầm:**\n- *Tế bào soma:* Chỉnh sửa tế bào cơ thể (tủy xương, phổi, gan) $\to$ biến đổi chỉ tồn tại ở người bệnh, KHÔNG di truyền cho thế hệ sau.\n- *Tế bào mầm:* Chỉnh sửa tế bào sinh dục hoặc hợp tử $\to$ biến đổi DI TRUYỀN cho mọi thế hệ sau $\to$ nguy cơ khôn lường và bị nghiêm cấm trên người ở hầu hết quốc gia.",
              "**Công nghệ CRISPR/Cas9:** Kéo cắt phân tử RNA dẫn đường ($sgRNA$) nhận diện chính xác trình tự DNA đích và enzyme Cas9 cắt đứt đôi sợi DNA để chèn hoặc sửa chữa gene với độ chính xác cao."
            ]
          },
          {
            title: "Triển vọng ứng dụng tương lai",
            icon: "fa-rocket",
            desc: "Mở ra kỉ nguyên y học chính xác và sản xuất thực phẩm nhân tạo bền vững.",
            points: [
              "Tạo động vật chuyển gene làm 'nhà máy sinh học' (pharming) tiết protein trị liệu người (yếu tố đông máu, kháng thể) trong sữa dê, cừu.",
              "Thịt nuôi cấy từ tế bào (Cultivated meat): nuôi sinh khối tế bào cơ động vật trong bioreactor mà không cần chăn nuôi giết mổ gia súc, giảm phát thải khí nhà kính.",
              "Ghép dị chủng (Xenotransplantation): chỉnh sửa gene heo để vô hiệu hóa kháng nguyên đào thải và retrovirus nội sinh, mở ra nguồn nội tạng (tim, thận) hiến tặng dồi dào."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Quy trình chuyển nhân tế bào soma (SCNT - Cừu Dolly)",
          steps: [
            "Cừu cho nhân (mặt trắng): Tách tế bào tuyến vú $\to$ Đưa về pha $G_0$",
            "Cừu cho trứng (mặt đen): Hút bỏ nhân tế bào trứng",
            "Dung hợp nhân soma vào trứng không nhân bằng xung điện cao tần",
            "Kích hoạt phôi phân chia in-vitro $\to$ Phôi sớm (Blastocyst)",
            "Cấy phôi vào tử cung cừu mẹ mang thai hộ $\to$ Cừu Dolly ra đời"
          ]
        },
        caseStudy: {
          title: "Liệu pháp gene điều trị bệnh suy giảm miễn dịch kết hợp trầm trọng (SCID)",
          context: "Trẻ em mắc hội chứng SCID (em bé trong bong bóng) bị đột biến gene ADA dẫn đến thiếu hụt enzyme adenosine deaminase, làm tế bào lympho T và B bị tiêu diệt hoàn toàn.",
          solution: "1. Tách tế bào gốc tạo máu hoặc tế bào lympho T từ tủy xương của bệnh nhi.\n2. Thiết kế vector virus retrovirus đã bị vô hiệu hóa độc tính, mang gene ADA bình thường của người lành.\n3. Cho vector virus lây nhiễm vào tế bào của bệnh nhi trong phòng thí nghiệm để chuyển gene ADA vào bộ máy di truyền.\n4. Chọn lọc và nuôi cấy tăng sinh các tế bào đã tích hợp thành công gene lành.\n5. Truyền các tế bào đã chỉnh sửa gene trở lại cơ thể bệnh nhi.\n6. Tế bào bắt đầu sản xuất enzyme ADA ổn định, phục hồi chức năng miễn dịch giúp trẻ có thể sống cuộc sống bình thường.",
          tip: "Cần sàng lọc vị trí chèn gene của retrovirus để tránh kích hoạt các proto-oncogene lân cận có thể gây bệnh bạch cầu."
        },
        quizzes: [
          {
            q: "Trong thí nghiệm nhân bản vô tính cừu Dolly, cừu con Dolly sinh ra mang bộ gene trong nhân tế bào chủ yếu từ cá thể nào?",
            opts: [
              "Cừu cho tế bào trứng đã bị hút bỏ nhân",
              "Cừu cho nhân tế bào soma tuyến vú",
              "Cừu mang thai hộ",
              "Tổ hợp ngẫu nhiên 50% từ cừu cho trứng và 50% từ cừu cho nhân"
            ],
            correct: 1,
            explain: "Nhân bản vô tính cừu Dolly sử dụng kĩ thuật chuyển nhân soma (SCNT). Toàn bộ vật chất di truyền trong nhân tế bào của cừu Dolly được thừa hưởng từ cá thể cừu cho nhân (cừu mặt trắng)."
          },
          {
            q: "Điểm khác biệt căn bản giữa liệu pháp gene tế bào soma và liệu pháp gene tế bào mầm là gì?",
            opts: [
              "Liệu pháp tế bào soma dùng vector virus, còn tế bào mầm không thể dùng vector",
              "Liệu pháp tế bào soma không di truyền cho đời sau, còn tế bào mầm có thể di truyền cho các thế hệ tương lai",
              "Liệu pháp tế bào soma chỉ chữa bệnh truyền nhiễm, còn tế bào mầm chữa bệnh tim mạch",
              "Liệu pháp tế bào mầm có chi phí thấp và được khuyến khích áp dụng rộng rãi"
            ],
            correct: 1,
            explain: "Chỉnh sửa gene ở tế bào soma chỉ ảnh hưởng đến cá thể điều trị và không truyền lại cho con cháu; trong khi chỉnh sửa ở tế bào mầm (hợp tử, giao tử) sẽ đi vào dòng tế bào sinh dục và di truyền cho muôn đời sau."
          },
          {
            q: "Dòng tế bào động vật HeLa nổi tiếng trong nghiên cứu sinh học có đặc tính nổi trội nào?",
            opts: [
              "Là tế bào thực vật lai dung hợp với tế bào nấm men",
              "Là dòng tế bào ung thư bất tử, có khả năng phân chia liên tục vô hạn trong nuôi cấy",
              "Chỉ phân chia được đúng 50 lần rồi tự động chết theo chương trình",
              "Hoàn toàn không cần cung cấp chất dinh dưỡng vẫn có thể tồn tại"
            ],
            correct: 1,
            explain: "Dòng tế bào HeLa (tách từ khối u ung thư cổ tử cung của Henrietta Lacks năm 1951) là dòng tế bào người bất tử đầu tiên, có hoạt tính enzyme telomerase vĩnh cửu giúp phân chia không ngừng trong điều kiện phòng thí nghiệm."
          }
        ]
      },
      {
        id: 4,
        title: "Bài 4. Dự án: Tìm hiểu về một số thành tựu công nghệ tế bào",
        subtitle: "Phương pháp thiết kế dự án học tập, thu thập số liệu và tranh biện khoa học về công nghệ tế bào",
        pillars: [
          {
            title: "Mục tiêu dự án & Lựa chọn chủ đề nghiên cứu",
            icon: "fa-clipboard-list",
            desc: "Vận dụng kiến thức lí thuyết vào việc khảo sát các thành tựu công nghệ tế bào đang làm thay đổi thế giới.",
            points: [
              "**Chủ đề y học:** Đánh giá triển vọng và thách thức của liệu pháp tế bào gốc trong điều trị tổn thương cột sống / ung thư máu.",
              "**Chủ đề nông nghiệp:** Điều tra quy trình vi nhân giống hoa lan, chuối cấy mô hoặc sâm Ngọc Linh tại các trung tâm giống địa phương.",
              "**Chủ đề thực phẩm tương lai:** Nghiên cứu cơ sở sinh học và thái độ người tiêu dùng đối với thịt nuôi cấy trong ống nghiệm (Cultivated meat)."
            ]
          },
          {
            title: "Quy trình 6 bước triển khai dự án khoa học",
            icon: "fa-list-check",
            desc: "Phương pháp luận chuẩn mực từ khâu xây dựng câu hỏi đến khâu báo cáo đánh giá.",
            points: [
              "**Bước 1 - Xác định mục tiêu:** Xây dựng câu hỏi nghiên cứu, phân công nhóm trưởng, lập tiêu chí đánh giá sản phẩm (Rubric).",
              "**Bước 2 - Lập kế hoạch:** Phân chia nhiệm vụ tra cứu tài liệu, thiết kế bảng hỏi phỏng vấn chuyên gia, ấn định mốc thời gian (deadline).",
              "**Bước 3 - Thu thập dữ liệu:** Khảo sát thực tế cơ sở nuôi cấy mô, phỏng vấn kĩ sư sinh học, trích xuất số liệu từ các bài báo khoa học uy tín.",
              "**Bước 4 - Phân tích & Đối chiếu:** Phân biệt rành mạch giữa chứng cứ khoa học đã kiểm chứng và các thông tin quảng cáo thương mại thái quá.",
              "**Bước 5 - Tổng hợp & Thảo luận:** Đánh giá đa chiều giữa hiệu quả kinh tế - kĩ thuật với các rào cản pháp lí và đạo đức sinh học.",
              "**Bước 6 - Báo cáo & Phản biện:** Trình bày sản phẩm dưới dạng Poster khoa học, tập san báo chí hoặc bài thuyết trình đa phương tiện."
            ]
          },
          {
            title: "Rèn luyện tư duy phản biện & Đạo đức khoa học",
            icon: "fa-comments",
            desc: "Phân biệt luận điểm khoa học dựa trên bằng chứng với các thiên kiến xã hội.",
            points: [
              "Tôn trọng quyền sở hữu trí tuệ, trích dẫn nguồn tài liệu tham khảo chính xác.",
              "Lắng nghe và phản biện văn minh đối với các ý kiến trái chiều về sinh vật biến đổi gene (GMO) và nhân bản vô tính.",
              "Nhận thức đúng đắn: thành tựu nghiên cứu trong phòng thí nghiệm cần qua nhiều giai đoạn thử nghiệm an toàn trước khi được cấp phép đại trà."
            ]
          },
          {
            title: "Tiêu chí đánh giá sản phẩm học tập",
            icon: "fa-star",
            desc: "Thước đo chất lượng báo cáo theo chuẩn giáo dục định hướng năng lực GDPT 2018.",
            points: [
              "**Nội dung (40%):** Tính chính xác khoa học, cấu trúc logic, làm rõ cơ chế công nghệ tế bào.",
              "**Hình thức (30%):** Trực quan, sơ đồ quy trình mạch lạc, hình ảnh minh họa chân thực, bố cục thẩm mĩ.",
              "**Thuyết trình & Tranh biện (30%):** Trả lời lưu loát các câu hỏi phản biện, tự tin làm chủ kiến thức."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Quy trình 6 bước thực hiện dự án công nghệ tế bào",
          steps: [
            "1. Xác định câu hỏi nghiên cứu & Tiêu chí sản phẩm",
            "2. Lập kế hoạch chi tiết & Phân công nhiệm vụ thành viên",
            "3. Thu thập dữ liệu, bài báo khoa học & Khảo sát thực địa",
            "4. Phân tích số liệu & Sàng lọc nguồn tin cậy",
            "5. Tổng hợp báo cáo, thảo luận vấn đề đạo đức sinh học",
            "6. Báo cáo sản phẩm (Poster/Tập san) & Tự đánh giá"
          ]
        },
        caseStudy: {
          title: "Thiết kế Poster khoa học: 'Thịt nhân tạo nuôi cấy từ tế bào – Tương lai an ninh lương thực?'",
          context: "Nhóm học sinh lớp 10 lựa chọn chủ đề thịt nuôi cấy trong phòng thí nghiệm để làm bài thuyết trình dự án trước toàn trường.",
          solution: "1. Đặt câu hỏi nghiên cứu: Cơ chế sinh học tạo thịt nhân tạo là gì và liệu có giảm phát thải khí nhà kính so với chăn nuôi bò truyền thống?\n2. Thu thập dữ liệu: Tìm hiểu quy trình tách tế bào gốc cơ (myosatellite cells), nuôi tăng sinh trên khung đỡ sinh học collagen trong bioreactor dinh dưỡng.\n3. Trình bày số liệu đối chiếu: Tiết kiệm 95% diện tích đất nông nghiệp, giảm 80% lượng nước tiêu thụ và cắt giảm 90% phát thải methane.\n4. Đưa ra mặt trái phản biện: Chi phí môi trường nuôi cấy còn cao, cảm quan mùi vị chưa hoàn toàn giống thịt tự nhiên và thách thức đón nhận của người tiêu dùng.\n5. Báo cáo đạt giải xuất sắc nhờ số liệu minh bạch và hình ảnh sơ đồ hóa rõ ràng.",
          tip: "Một poster dự án xuất sắc phải có sự cân bằng giữa số liệu định lượng, sơ đồ trực quan và phần kết luận mở cho người xem thảo luận."
        },
        quizzes: [
          {
            q: "Bước nào sau đây là bước then chốt đầu tiên khi bắt đầu triển khai một dự án tìm hiểu khoa học?",
            opts: [
              "In ấn poster và gửi thư mời các đại biểu tham dự",
              "Xác định câu hỏi nghiên cứu, mục tiêu, sản phẩm dự kiến và tiêu chí đánh giá",
              "Viết ngay bản kết luận cuối cùng của đề tài",
              "Phê bình các thành viên làm việc chưa đạt yêu cầu"
            ],
            correct: 1,
            explain: "Bước đầu tiên của mọi dự án nghiên cứu khoa học là phải xác định rõ ràng câu hỏi nghiên cứu, mục tiêu cần đạt, hình thức sản phẩm đầu ra và các tiêu chí đánh giá chất lượng."
          },
          {
            q: "Khi tìm hiểu về các liệu pháp tế bào gốc thương mại trên mạng xã hội, thái độ khoa học đúng đắn nhất là gì?",
            opts: [
              "Tin tưởng tuyệt đối vào mọi lời quảng cáo chữa bách bệnh",
              "Đối chiếu nguồn gốc thông tin, phân biệt rõ giữa bằng chứng thử nghiệm lâm sàng uy tín với quảng cáo thương mại chưa kiểm chứng",
              "Phủ nhận sạch trơn toàn bộ các thành tựu y học hiện đại",
              "Tự ý mua các chế phẩm tế bào gốc trôi nổi về sử dụng thử"
            ],
            correct: 1,
            explain: "Tư duy phản biện khoa học đòi hỏi học sinh phải biết đối chiếu thông tin từ các tạp chí y khoa/cơ quan y tế chính thống, phân biệt giữa nghiên cứu lâm sàng đã được cấp phép với các chiêu trò thương mại hóa chưa kiểm chứng."
          },
          {
            q: "Một sản phẩm dự án học tập về công nghệ tế bào được đánh giá cao khi đáp ứng tiêu chuẩn nào?",
            opts: [
              "Chỉ cần thật dài và chép nguyên văn sách giáo khoa",
              "Nội dung khoa học chuẩn xác, sơ đồ hóa quy trình trực quan, có liên hệ thực tiễn và tư duy phản biện đa chiều",
              "Không cần trích dẫn bất kì nguồn tài liệu tham khảo nào",
              "Tránh nhắc đến các khó khăn và hạn chế của công nghệ"
            ],
            correct: 1,
            explain: "Tiêu chuẩn đánh giá năng lực yêu cầu sản phẩm phải chính xác về mặt học thuật, trực quan, có tư duy phản biện, nêu rõ ưu - nhược điểm và trung thực trong trích dẫn tài liệu."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Chuyên đề 2. Công nghệ enzyme và ứng dụng",
    desc: "Bản chất xúc tác sinh học của enzyme, trung tâm hoạt động và điều hòa dị lập thể; Quy trình 3 giai đoạn sản xuất enzyme; Ứng dụng đa ngành trong thực phẩm, y dược, di truyền và Dự án làm mạch nha từ lúa nếp.",
    lessons: [
      {
        id: 5,
        title: "Bài 5. Khái quát về công nghệ enzyme",
        subtitle: "Bản chất protein, cơ chế giảm năng lượng hoạt hóa, trung tâm hoạt động và điều hòa dị lập thể",
        pillars: [
          {
            title: "Bản chất và các giai đoạn phát triển công nghệ enzyme",
            icon: "fa-bolt",
            desc: "Chất xúc tác sinh học đặc hiệu cao do tế bào tổng hợp, làm tăng tốc độ phản ứng trong điều kiện sinh lí ôn hòa.",
            points: [
              "Hầu hết enzyme có bản chất là protein (một số ít là RNA xúc tác gọi là ribozyme), không bị tiêu hao hay biến đổi vĩnh viễn sau phản ứng.",
              "**3 giai đoạn phát triển:**\n- *Giai đoạn kinh nghiệm:* Lên men rượu, làm phô mai, dùng nhựa đu đủ (chứa papain) làm mềm thịt trước khi hiểu bản chất sinh hóa.\n- *Giai đoạn nhận diện sinh học (TK XIX – đầu XX):* Tách chiết amylase, protease thô dạng bột; khám phá tinh thể enzyme urease của Sumner (1926).\n- *Giai đoạn công nghệ enzyme hiện đại (1930 đến nay):* Ứng dụng kĩ thuật di truyền để sản xuất enzyme tái tổ hợp quy mô công nghiệp, cải biến enzyme theo định hướng protein engineering."
            ]
          },
          {
            title: "Cơ chế giảm năng lượng hoạt hóa ($E_a$)",
            icon: "fa-chart-area",
            desc: "Tăng tốc độ phản ứng lên hàng triệu lần mà không cần tăng nhiệt độ hay áp suất môi trường.",
            points: [
              "Enzyme liên kết với cơ chất ($S$) tại trung tâm hoạt động tạo phức hệ $[ES]$.",
              "Tại đây, enzyme đưa các cơ chất lại gần nhau theo hướng không gian thuận lợi nhất, làm căng và biến dạng các liên kết hóa học, hạ thấp rào cản năng lượng hoạt hóa ($E_a$).",
              "Phản ứng xảy ra biến đổi cơ chất thành sản phẩm ($P$), phức hệ $[EP]$ phân li giải phóng enzyme tự do nguyên vẹn để tiếp tục chu kì xúc tác mới."
            ]
          },
          {
            title: "Trung tâm hoạt động & Tính đặc hiệu xúc tác",
            icon: "fa-key",
            desc: "Cấu trúc khe/hốc không gian đặc thù phù hợp chính xác với cơ chất.",
            points: [
              "**Mô hình 'Ổ khóa – Chìa khóa' (Emil Fischer, 1894):** Trung tâm hoạt động có cấu hình cứng nhắc, tương thích tuyệt đối với hình dạng cơ chất.",
              "**Mô hình 'Phù hợp cảm ứng' (Daniel Koshland, 1958):** Trung tâm hoạt động có tính linh hoạt; khi cơ chất tiến vào tiếp xúc, enzyme thay đổi nhẹ cấu hình không gian để ôm khít cơ chất.",
              "**Tính đặc hiệu cao:** Enzyme chỉ tác dụng lên một loại cơ chất nhất định (đặc hiệu tuyệt đối như Urease chỉ thủy phân urea) hoặc một kiểu liên kết hóa học nhất định (đặc hiệu tương đối như Protease cắt liên kết peptide)."
            ]
          },
          {
            title: "Điều hòa dị lập thể & Các yếu tố ảnh hưởng",
            icon: "fa-sliders",
            desc: "Kiểm soát hoạt tính xúc tác linh hoạt theo nhu cầu chuyển hóa năng lượng của tế bào.",
            points: [
              "**Vị trí dị lập thể (Allosteric site):** Vùng liên kết nằm ngoài trung tâm hoạt động. Khi chất điều hòa gắn vào, cấu hình enzyme bị biến đổi làm tăng (chất hoạt hóa) hoặc giảm (chất ức chế) ái lực với cơ chất.",
              "Ví dụ điển hình: Enzyme *phosphofructokinase-1* trong đường phân bị ức chế bởi ATP/citrate khi tế bào dư thừa năng lượng, và được hoạt hóa bởi AMP khi tế bào thiếu hụt năng lượng.",
              "**Yếu tố môi trường:** Mỗi enzyme có nhiệt độ tối ưu (thường 30–50°C) và pH tối ưu xác định. Vượt quá ngưỡng tới hạn, enzyme bị biến tính mất hoạt tính sinh học vĩnh viễn."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Động học xúc tác enzyme & Điều hòa dị lập thể",
          steps: [
            "Enzyme tự do ($E$) + Cơ chất ($S$)",
            "Gắn kết tại Trung tâm hoạt động $\to$ Phức hệ $[ES]$ (Phù hợp cảm ứng)",
            "Hạ thấp năng lượng hoạt hóa ($E_a$) $\to$ Phản ứng chuyển hóa liên kết",
            "Tạo phức hệ $[EP]$ $\to$ Giải phóng Sản phẩm ($P$) + Tái tạo Enzyme ($E$)",
            "Chất điều hòa gắn vị trí dị lập thể $\to$ Bật / Tắt hoạt tính xúc tác"
          ]
        },
        caseStudy: {
          title: "Giải thích cơ chế ức chế dị lập thể ngược (Feedback Inhibition) trong tế bào",
          context: "Trong con đường sinh tổng hợp acid amin isoleucine từ threonine qua 5 phản ứng enzyme liên tiếp, làm sao tế bào tránh lãng phí năng lượng khi lượng isoleucine đã tích lũy đủ?",
          solution: "1. Enzyme đầu tiên của chuỗi phản ứng là threonine deaminase.\n2. Khi nồng độ isoleucine trong tế bào tăng cao vượt ngưỡng nhu cầu, các phân tử isoleucine đóng vai trò là chất ức chế dị lập thể âm.\n3. Isoleucine gắn đặc hiệu vào vị trí dị lập thể của enzyme threonine deaminase, làm biến đổi cấu hình trung tâm hoạt động khiến threonine không thể gắn vào được nữa.\n4. Toàn bộ con đường tổng hợp lập tức dừng lại, ngăn ngừa lãng phí cơ chất và năng lượng ATP.\n5. Khi tế bào sử dụng hết isoleucine, nồng độ giảm xuống khiến isoleucine rời khỏi vị trí dị lập thể $\to$ enzyme lấy lại cấu hình hoạt động ban đầu.",
          tip: "Ức chế ngược dị lập thể là cơ chế điều hòa tinh vi và tự động bậc nhất giúp duy trì cân bằng nội môi tế bào."
        },
        quizzes: [
          {
            q: "Bản chất tác dụng xúc tác của enzyme trong các phản ứng sinh hóa là gì?",
            opts: [
              "Làm tăng nhiệt độ và áp suất của hệ phản ứng để các chất va chạm mạnh hơn",
              "Làm giảm năng lượng hoạt hóa của phản ứng, giúp phản ứng diễn ra nhanh hơn ở điều kiện ôn hòa",
              "Bổ sung thêm năng lượng ATP trực tiếp vào các liên kết của cơ chất",
              "Biến đổi vĩnh viễn cấu trúc của enzyme để hòa tan vào sản phẩm"
            ],
            correct: 1,
            explain: "Enzyme tăng tốc độ phản ứng sinh học bằng cách làm giảm năng lượng hoạt hóa ($E_a$) cần thiết để đưa các phân tử cơ chất vào trạng thái chuyển tiếp, giúp phản ứng xảy ra nhanh chóng trong điều kiện sinh lí bình thường."
          },
          {
            q: "Theo mô hình 'Phù hợp cảm ứng' (Induced Fit) của Daniel Koshland, trung tâm hoạt động của enzyme có đặc điểm nào?",
            opts: [
              "Hoàn toàn cố định cứng nhắc như một ổ khóa kim loại cổ điển",
              "Có tính linh động, thay đổi nhẹ cấu hình không gian khi cơ chất tiếp xúc để gắn kết chặt chẽ",
              "Có thể gắn kết với bất kì phân tử hóa học nào mà không phân biệt hình dạng",
              "Bị phá hủy sau mỗi lần tiếp xúc với phân tử cơ chất"
            ],
            correct: 1,
            explain: "Mô hình phù hợp cảm ứng chỉ ra rằng trung tâm hoạt động không cố định cứng nhắc mà có khả năng biến đổi linh hoạt về mặt không gian khi cơ chất tiếp cận để tạo thành phức hệ enzyme - cơ chất tối ưu nhất."
          },
          {
            q: "Chất điều hòa dị lập thể tác động lên enzyme bằng cách liên kết vào vị trí nào?",
            opts: [
              "Gắn cạnh tranh trực tiếp vào chính giữa trung tâm hoạt động của enzyme",
              "Gắn vào vị trí dị lập thể nằm ngoài trung tâm hoạt động, gây biến đổi cấu hình không gian của enzyme",
              "Cắt đứt liên kết peptide của chuỗi polypeptide enzyme",
              "Gắn vào phân tử nước trong môi trường để thay đổi pH"
            ],
            correct: 1,
            explain: "Vị trí dị lập thể (allosteric site) là vùng đặc thù nằm ngoài trung tâm hoạt động; khi chất điều hòa gắn vào đây sẽ làm thay đổi cấu hình không gian của enzyme, từ đó làm tăng hoặc giảm hoạt tính xúc tác."
          }
        ]
      },
      {
        id: 6,
        title: "Bài 6. Quy trình công nghệ sản xuất enzyme",
        subtitle: "3 giai đoạn công nghệ: Tạo nguồn, tách chiết tinh sạch và tạo chế phẩm bảo quản",
        pillars: [
          {
            title: "Giai đoạn 1: Tuyển chọn nguồn giống & Nuôi cấy",
            icon: "fa-bacteria",
            desc: "Lựa chọn chủng sinh vật có hoạt lực cao và tối ưu hóa điều kiện nuôi cấy quy mô công nghiệp.",
            points: [
              "**Ưu thế của vi sinh vật:** Tốc độ sinh sản cực nhanh, chu kì ngắn, dễ nuôi cấy trên môi trường phế phụ phẩm nông nghiệp rẻ tiền (cám, rỉ đường, bã ngô), có thể tái tổ hợp gene để siêu sản xuất.",
              "**Nuôi cấy bề mặt (nuôi nổi):** Vi sinh vật phát triển trên môi trường rắn ẩm (cám mì, cám gạo). Ưu điểm: thu chế phẩm thô hoạt tính cao, thiết bị đơn giản; Nhược điểm: tốn diện tích, khó tự động hóa.",
              "**Nuôi cấy bề sâu (nuôi chìm):** Vi sinh vật phát triển trong môi trường lỏng có sục khí oxy và cánh khuấy liên tục trong nồi lên men (fermenter). Dễ kiểm soát nhiệt độ, pH, DO và tự động hóa hoàn toàn."
            ]
          },
          {
            title: "Giai đoạn 2: Tách chiết & Tinh sạch enzyme",
            icon: "fa-filter",
            desc: "Giải phóng enzyme khỏi tế bào và loại bỏ tạp chất protein không mong muốn.",
            points: [
              "**Enzyme ngoại bào:** Thu hồi trực tiếp dịch nuôi cấy bằng cách li tâm hoặc lọc bỏ xác vi sinh vật.",
              "**Enzyme nội bào:** Cần phá vỡ màng/thành tế bào bằng phương pháp cơ học (nghiền bi, máy đồng hóa áp lực cao), vật lí (sóng siêu âm) hoặc hóa sinh (dùng enzyme lysozyme).",
              "**Chiết tách ở nhiệt độ thấp:** Luôn thao tác trong dung dịch đệm lạnh (3–5°C) để chống biến tính và ngăn chặn protease nội tại phân hủy enzyme mục tiêu.",
              "**Tinh sạch chọn lọc:** Dùng muối trung tính $(NH_4)_2SO_4$ hoặc dung môi hữu cơ lạnh (ethanol, acetone) để kết tủa phân đoạn enzyme; sau đó thẩm tích loại muối và sắc kí cột (trao đổi ion, lọc gel, ái lực) để đạt độ tinh khiết cao."
            ]
          },
          {
            title: "Giai đoạn 3: Tạo chế phẩm & Bảo quản ổn định",
            icon: "fa-box-archive",
            desc: "Định hình dạng thương phẩm và bổ sung chất phụ gia giữ hoạt tính lâu dài.",
            points: [
              "**Dạng chế phẩm lỏng:** Hòa tan trong dung dịch có bổ sung glycerol, sorbitol hoặc muối kháng khuẩn để ổn định cấu hình. Nhược điểm: cồng kềnh, hạn sử dụng ngắn.",
              "**Dạng chế phẩm khô (bột/viên):** Dùng phương pháp sấy phun hoặc sấy thăng hoa (đông khô) dưới áp suất chân không để nước thăng hoa ở nhiệt độ âm mà không làm biến tính enzyme.",
              "Phối trộn với chất mang trơ bảo vệ: tinh bột, lactose, dextrin, carboxymethyl cellulose (CMC) để dễ đóng gói, vận chuyển và bảo quản ở nhiệt độ phòng."
            ]
          },
          {
            title: "Ba quy trình công nghệ sản xuất điển hình",
            icon: "fa-industry",
            desc: "Thực tiễn sản xuất amylase, protease và urease theo chuẩn giáo khoa.",
            points: [
              "**Amylase từ nấm mốc *Aspergillus oryzae* (nuôi nổi):** Cấy nấm trên cám mì $\to$ chiết nước lạnh $\to$ kết tủa bằng ethanol 65–70% ở pH 5,5 $\to$ li tâm thu kết tủa $\to$ sấy khô.",
              "**Protease từ nấm *Aspergillus niger* (nuôi chìm):** Lên men bề sâu môi trường rỉ đường $\to$ li tâm tách sinh khối $\to$ kết tủa cồn $\to$ tinh sạch qua màng siêu lọc.",
              "**Urease từ hạt đậu rựa (nguồn thực vật):** Nghiền hạt trong HCl 0,4% có chất tạo phức $\to$ xử lí nhiệt 60°C loại tạp protein $\to$ kết tủa acetone lạnh $\to$ sắc kí trao đổi ion $\to$ đông khô thu urease siêu sạch."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: 3 Giai đoạn công nghệ sản xuất chế phẩm enzyme",
          steps: [
            "GĐ 1: Tuyển chọn chủng VSV $\to$ Lên men nuôi cấy (Bề mặt hoặc Bề sâu)",
            "GĐ 2: Thu dịch nuôi (hoặc Phá tế bào thu enzyme nội bào)",
            "Tách chiết bằng dung dịch đệm lạnh (3–5°C) $\to$ Li tâm loại bỏ cặn",
            "Kết tủa phân đoạn (Muối cồn/Acetone) $\to$ Thẩm tích & Sắc kí tinh sạch",
            "GĐ 3: Phối trộn chất mang trơ $\to$ Sấy thăng hoa $\to$ Chế phẩm bột/viên"
          ]
        },
        caseStudy: {
          title: "Khắc phục hiện tượng enzyme bị mất hoạt tính trong quá trình tách chiết công nghiệp",
          context: "Một nhà máy sản xuất enzyme bromelain từ phế phụ phẩm dứa bị sụt giảm hơn 60% hoạt tính sau công đoạn nghiền và ép lấy nước cốt ở nhiệt độ phòng.",
          solution: "1. Nguyên nhân: Khi phá vỡ tế bào quả dứa, enzyme polyphenol oxidase bị kích hoạt gây sẫm màu và sinh ra các gốc tự do làm oxy hóa cầu disulfua của bromelain; đồng thời nhiệt độ phòng 30°C kích hoạt protease tự phân hủy lẫn nhau.\n2. Biện pháp cải tiến: Tiến hành làm lạnh toàn bộ nguyên liệu dứa xuống 4°C trước khi ép.\n3. Bổ sung chất chống oxy hóa (acid ascorbic 0,1%) và chất tạo phức chelate EDTA vào dung dịch chiết để khóa các ion kim loại nặng.\n4. Thực hiện kết tủa nhanh bằng cồn lạnh -20°C ngay sau khi lọc tách bã.\n5. Kết quả: Hoạt tính riêng của chế phẩm bromelain thu hồi đạt trên 88% và màu sắc chế phẩm trắng ngà đạt chuẩn xuất khẩu.",
          tip: "Nguyên tắc vàng trong công nghệ enzyme: Nhiệt độ thấp (3–5°C) và thao tác nhanh chóng là điều kiện tiên quyết để giữ toàn vẹn cấu trúc bậc 3, bậc 4 của protein enzyme."
        },
        quizzes: [
          {
            q: "Tại sao vi sinh vật là nguồn nguyên liệu được ưa chuộng hàng đầu trong công nghiệp sản xuất enzyme?",
            opts: [
              "Vì enzyme vi sinh vật không bao giờ bị biến tính bởi nhiệt độ",
              "Vì vi sinh vật có tốc độ sinh trưởng nhanh, chu kì ngắn và dễ nuôi cấy quy mô công nghiệp trên phế phẩm rẻ tiền",
              "Vì chỉ có vi sinh vật mới có khả năng tổng hợp được enzyme",
              "Vì chi phí tinh sạch enzyme vi sinh vật luôn bằng không"
            ],
            correct: 1,
            explain: "Vi sinh vật có tốc độ sinh sản cực kì nhanh, chu kì sinh trưởng tính bằng giờ, hàm lượng enzyme nội bào và ngoại bào dồi dào, có thể nuôi cấy trong các nồi lên men hàng chục nghìn lít bằng các phế phẩm nông nghiệp giá rẻ."
          },
          {
            q: "Trong quá trình tách chiết và thu hồi enzyme, tại sao các thao tác thường bắt buộc phải tiến hành ở nhiệt độ thấp (khoảng 3–5°C)?",
            opts: [
              "Để enzyme kết tinh thành các khối đá lớn dễ vớt ra",
              "Để duy trì cấu hình không gian bền vững của enzyme và ức chế các enzyme phân giải protein (protease) phá hủy mẫu",
              "Để làm đông cứng các phân tử cơ chất không cho phản ứng xảy ra",
              "Để tiêu diệt toàn bộ vi khuẩn tạp nhiễm trong dung dịch"
            ],
            correct: 1,
            explain: "Enzyme là protein rất dễ bị biến tính hoặc bị phân hủy bởi các protease nội sinh. Nhiệt độ thấp (3–5°C) kìm hãm hoạt tính tự tiêu của protease và giữ cho liên kết hydro/cầu disulfua của enzyme mục tiêu được ổn định."
          },
          {
            q: "Phương pháp làm khô hiện đại nào thường được ứng dụng để tạo chế phẩm enzyme dạng bột mà không làm biến tính protein?",
            opts: [
              "Đun sôi ở áp suất khí quyển",
              "Sấy thăng hoa (đông khô) dưới áp suất chân không ở nhiệt độ âm",
              "Rang trên chảo gang nhiệt độ cao",
              "Phơi nắng trực tiếp ngoài trời nhiều ngày"
            ],
            correct: 1,
            explain: "Sấy thăng hoa (đông khô - Lyophilization) làm đông lạnh mẫu rồi hạ áp suất chân không để băng thăng hoa trực tiếp thành thể khí mà không qua thể lỏng, bảo toàn 100% hoạt tính sinh học của protein enzyme nhạy cảm với nhiệt."
          }
        ]
      },
      {
        id: 7,
        title: "Bài 7. Ứng dụng của enzyme",
        subtitle: "Đột phá trong công nghiệp thực phẩm, y dược chẩn đoán, kĩ thuật di truyền PCR & CRISPR",
        pillars: [
          {
            title: "Ứng dụng trong công nghiệp chế biến thực phẩm",
            icon: "fa-utensils",
            desc: "Nâng cao giá trị dinh dưỡng, cải thiện hương vị, màu sắc và tối ưu hóa hiệu suất thu hồi sản phẩm.",
            points: [
              "**Protease (Papain, Bromelain):** Thủy phân một phần liên kết peptide làm mềm thịt cá đóng hộp, sản xuất nước mắm ngắn ngày, chế biến thức ăn dặm giàu đạm dễ tiêu cho trẻ em.",
              "**Amylase & Glucoamylase:** Chuyển hóa tinh bột thành đường maltose/glucose; tăng độ xốp, màu vàng cánh gián và hương thơm của bánh mì; đường hóa tinh bột trong nấu bia và rượu vang.",
              "**Pectinase:** Thủy phân pectin liên kết thành tế bào thực vật, giúp dịch quả thoát ra nhanh chóng, làm trong nước ép trái cây, chống đục và tăng hiệu suất thu hồi dịch chiết lên 15–25%.",
              "**Cellulase:** Phá vỡ vỏ hạt đại mạch trong sản xuất bia, làm mềm xơ thực vật trong chế biến rau quả đóng hộp.",
              "**Rennet (chứa Rennin/Chymosin):** Làm đông tụ protein casein trong sữa để tách phần khối đông (curd) khỏi phần nước sữa (whey) trong quy trình sản xuất phô mai."
            ]
          },
          {
            title: "Ứng dụng trong y – dược học hiện đại",
            icon: "fa-stethoscope",
            desc: "Chẩn đoán bệnh sớm ở mức phân tử, điều trị đặc hiệu và sản xuất dược phẩm sinh học.",
            points: [
              "**Chẩn đoán định lượng:** Sử dụng enzyme *glucose oxidase* trên que thử đường huyết cá nhân để định lượng glucose chẩn đoán bệnh tiểu đường; dùng *uricase* đo acid uric chẩn đoán bệnh gút.",
              "**Điều trị lâm sàng:** Enzyme *penicillinase* dùng giải mẫn cảm/cấp cứu bệnh nhân dị ứng kháng sinh penicillin; Các protease như *trypsin*, *chymotrypsin* dùng kháng viêm dạng ngậm, làm sạch mô hoại tử vết loét bỏng theo chỉ định y khoa.",
              "Sản xuất sinh dược: Sử dụng hệ enzyme cố định để tổng hợp kháng sinh bán tổng hợp (ampicillin, amoxicillin), hormone insulin và kháng thể đơn dòng."
            ]
          },
          {
            title: "Công cụ cốt lõi trong kĩ thuật di truyền",
            icon: "fa-dna",
            desc: "Bộ công cụ phân tử không thể thay thế trong công nghệ sinh học DNA tái tổ hợp.",
            points: [
              "**Taq Polymerase:** Enzyme DNA polymerase chịu nhiệt độ sôi (tách từ vi khuẩn suối nước nóng *Thermus aquaticus*), xúc tác kéo dài chuỗi DNA trong kĩ thuật khuếch đại gene PCR.",
              "**Restriction Enzyme (Enzyme cắt giới hạn - RE):** Cắt phân tử DNA tại các trình tự nucleotide đặc hiệu (ví dụ *EcoRI*, *BamHI*), tạo ra các 'đầu dính' hoặc 'đầu tù' tương thích.",
              "**DNA Ligase:** Enzyme hàn nối liên kết phosphodiester giữa các đoạn DNA, gắn gene ngoại lai vào thể truyền plasmid tạo phân tử DNA tái tổ hợp hoàn chỉnh.",
              "**Cas9:** Enzyme endonuclease kết hợp RNA dẫn đường trong công nghệ CRISPR/Cas9 để định vị và cắt chính xác vị trí mục tiêu trên hệ gene."
            ]
          },
          {
            title: "Triển vọng công nghiệp xanh & Xử lí môi trường",
            icon: "fa-leaf",
            desc: "Xúc tác sinh học thay thế các hóa chất độc hại, hướng tới nền kinh tế tuần hoàn.",
            points: [
              "Enzyme *PETase* phân giải rác thải nhựa polyethylene terephthalate (PET) thành các monomer có thể tái chế vô hạn.",
              "Sản xuất nhiên liệu sinh học bioethanol thế hệ 2 từ phụ phẩm rơm rạ nhờ cocktail enzyme cellulase/hemicellulase siêu hoạt lực.",
              "Ứng dụng trong công nghiệp dệt (tẩy màu sinh học vải denim), công nghiệp giấy (tẩy trắng bột gỗ sinh học bằng xylanase không dùng clo độc hại), chất tẩy rửa sinh học (lipase, protease trong bột giặt sinh học)."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Quy trình sản xuất phô mai truyền thống nhờ Enzyme Rennet",
          steps: [
            "Khử trùng sữa tươi $\to$ Bổ sung vi khuẩn Lactic ($Lactobacillus$)",
            "Lên men tạo acid lactic $\to$ Hạ pH sữa về 6.0 – 6.4",
            "Bổ sung chế phẩm Enzyme Rennet (Chymosin) $\to$ Ủ ở 32–35°C",
            "Đông tụ protein Casein thành khối đông (Curd)",
            "Cắt khối đông $\to$ Tách phần nước whey $\to$ Ép khuôn $\to$ Muối & Ủ chín"
          ]
        },
        caseStudy: {
          title: "Ứng dụng enzyme Pectinase làm trong nước ép táo xuất khẩu",
          context: "Dịch ép táo tươi sau khi nghiền bị đục quánh, nhớt cao và rất khó lọc qua màng, hiệu suất thu hồi dịch chỉ đạt 65%.",
          solution: "1. Nguyên nhân: Thành tế bào táo chứa hàm lượng pectin cao đóng vai trò là chất keo ưa nước giữ lơ lửng các hạt cặn cellulose mịn.\n2. Xử lí: Bổ sung chế phẩm enzyme pectinase với tỉ lệ 0,05% vào bồn ủ dịch táo ở nhiệt độ 45°C trong 90 phút.\n3. Cơ chế: Pectinase thủy phân cắt đứt các liên kết $\\alpha-1,4-glycosidic$ của mạch polygalacturonic acid trong pectin.\n4. Kết quả: Mạng lưới keo bị phá vỡ, các hạt huyền phù mất điện tích và liên kết tụ lại thành bông cặn lớn tự lắng xuống đáy bồn.\n5. Dịch táo sau lọc qua vải lọc trở nên trong vắt, độ nhớt giảm 80% và hiệu suất thu hồi nước ép tăng vọt lên 85–88%.",
          tip: "Pectinase không chỉ làm trong nước quả mà còn giúp giải phóng tối đa các hợp chất chống oxy hóa polyphenol quý giá trong vỏ quả."
        },
        quizzes: [
          {
            q: "Enzyme nào đóng vai trò chìa khóa giúp nhân bản hàng triệu bản sao DNA trong kĩ thuật phản ứng chuỗi polymerase (PCR)?",
            opts: [
              "Enzyme Pepsin từ dạ dày lợn",
              "Enzyme Taq polymerase chịu nhiệt từ vi khuẩn suối nước nóng",
              "Enzyme Cellulase từ nấm sợi",
              "Enzyme Rennet từ dạ múi khế bê"
            ],
            correct: 1,
            explain: "Taq polymerase (tách từ vi khuẩn chịu nhiệt *Thermus aquaticus*) có khả năng hoạt động tối ưu ở 72°C và không bị biến tính ở bước tách mạch 95°C trong chu trình nhiệt PCR."
          },
          {
            q: "Trong sản xuất phô mai, vai trò chủ yếu của enzyme Rennet (chứa chymosin) là gì?",
            opts: [
              "Lên men đường lactose thành khí $CO_2$ làm phô mai phồng to",
              "Cắt đặc hiệu liên kết của protein $\\kappa-casein$, làm đông tụ sữa thành khối đông",
              "Phân giải hoàn toàn protein thành các acid amin tự do hòa tan",
              "Tiêu diệt tất cả các vi khuẩn có lợi trong sữa tươi"
            ],
            correct: 1,
            explain: "Chymosin trong rennet thủy phân chọn lọc liên kết peptide Phe105-Met106 của $\\kappa-casein$, làm mất tính ưa nước bề mặt của mixen casein khiến chúng tụ họp đông kết lại thành khối curd phô mai."
          },
          {
            q: "Tại sao trong công nghiệp chế biến nước ép trái cây, người ta thường bổ sung enzyme Pectinase?",
            opts: [
              "Để làm tăng độ chua gắt của nước trái cây",
              "Để thủy phân phân tử pectin, làm giảm độ nhớt và làm trong suốt dịch quả ép",
              "Để chuyển hóa toàn bộ đường thành cồn rượu vang",
              "Để bảo quản nước ép không bị đông đá ở nhiệt độ âm"
            ],
            correct: 1,
            explain: "Pectinase phân cắt liên kết chuỗi pectin trong vách tế bào thực vật, giải phóng triệt để dịch bào, giảm độ nhớt và loại bỏ độ đục lơ lửng, giúp nước ép quả trong vắt và dễ lọc."
          }
        ]
      },
      {
        id: 8,
        title: "Bài 8. Dự án: Tìm hiểu về ứng dụng của enzyme",
        subtitle: "Quy trình thực nghiệm làm mạch nha từ lúa nếp và sản xuất chế phẩm enzyme sinh học",
        pillars: [
          {
            title: "Mục tiêu và lựa chọn mô hình thực nghiệm",
            icon: "fa-flask",
            desc: "Trực tiếp thực hành ứng dụng enzyme amylase mầm thóc trong công nghệ làm mạch nha truyền thống.",
            points: [
              "Mạch nha là sản phẩm đường hóa tự nhiên giàu maltose, có vị ngọt thanh dịu và giá trị dinh dưỡng cao.",
              "Nguyên lí khoa học: Trong quá trình hạt lúa nếp nảy mầm, phôi hạt kích hoạt tổng hợp enzyme $\\alpha-amylase$ và $\\beta-amylase$ với hoạt tính cực mạnh để thủy phân tinh bột dự trữ trong nội nhũ.",
              "Vận dụng enzyme mầm thóc (mộng lúa) để đường hóa xôi nếp nấu chín thành dịch đường mạch nha."
            ]
          },
          {
            title: "Quy trình thực hành làm mạch nha (6 bước)",
            icon: "fa-wheat-awn",
            desc: "Chuẩn hóa quy trình từ khâu ủ mộng mầm thóc đến khâu cô đặc thành phẩm.",
            points: [
              "**Bước 1 - Chọn hạt & Ngâm:** Chọn lúa nếp hạt mẩy, ngâm trong nước sạch 24 giờ, thay nước mỗi 6 giờ để loại bỏ chua và độc tố nấm mốc.",
              "**Bước 2 - Ủ nảy mầm:** Vớt ra để ráo, ủ trong bóng tối 1 ngày cho nứt nanh, chuyển sang khay phủ khăn ẩm ủ 5–7 ngày, tưới nước định kì mỗi 8 giờ cho mầm dài 5–7 cm.",
              "**Bước 3 - Thu nhận mộng mầm:** Phơi hoặc sấy mầm thóc ở nhiệt độ phòng (tránh phơi nắng gắt làm mất hoạt tính enzyme), cắt nhỏ hoặc giã nhuyễn thành bột mầm mộng thóc.",
              "**Bước 4 - Nấu cơm xôi & Phối trộn:** Nấu gạo nếp thành cơm xôi dẻo; để nguội khoảng 55–60°C rồi trộn theo tỉ lệ 5 phần xôi nếp : 1 phần bột mầm mộng thóc; châm thêm nước ấm ngập gấp đôi hỗn hợp.",
              "**Bước 5 - Ủ thủy phân:** Đậy kín ủ ấm ở nhiệt độ 55–60°C trong 13–15 giờ (nhiệt độ tối ưu cho amylase hoạt động, ngăn chặn vi khuẩn lên men chua).",
              "**Bước 6 - Lọc & Cô đặc:** Vắt lọc lấy dịch ngọt, bỏ bã xác thóc; đun sôi rồi hạ nhỏ lửa khuấy đều tay cô đặc đến khi dịch sánh đặc, màu vàng hổ phách kéo sợi là mạch nha đạt chuẩn."
            ]
          },
          {
            title: "Cơ sở sinh hóa & Các lưu ý an toàn then chốt",
            icon: "fa-temperature-arrow-up",
            desc: "Kiểm soát nhiệt độ ủ đường hóa và vệ sinh an toàn thực phẩm.",
            points: [
              "$\\alpha-amylase$ cắt ngẫu nhiên liên kết $\\alpha-1,4-glycosidic$ tạo dextrin; $\\beta-amylase$ cắt từng đôi đường từ đầu khử tạo đường maltose ngọt dịu.",
              "Nhiệt độ ủ bắt buộc duy trì trong khoảng **55–60°C**: nếu $< 50°C$ vi khuẩn lên men lactic gây chua hỏng dịch; nếu $> 68°C$ enzyme amylase bị biến tính mất hoạt tính.",
              "An toàn thực phẩm: Loại bỏ hạt lúa bị mốc đen (nguy cơ độc tố nấm aflatoxin), cẩn thận tránh bỏng khi cô đặc dịch đường sôi."
            ]
          },
          {
            title: "Mở rộng: Chế phẩm Eco-Enzyme tẩy rửa sinh học",
            icon: "fa-recycle",
            desc: "Tận dụng rác thải hữu cơ vỏ trái cây để sản xuất chất tẩy rửa sinh học an toàn.",
            points: [
              "Công thức phối trộn tỉ lệ vàng: **1 phần đường nâu/mật rỉ : 3 phần vỏ dứa/cam/chanh : 10 phần nước sạch**.",
              "Ủ kín yếm khí trong thùng nhựa có van xả khí gas trong thời gian 3 tháng.",
              "Hệ vi sinh vật lên men tiết protease, lipase và acid hữu cơ biến dịch ủ thành nước tẩy rửa sinh học thơm mát, phân hủy mỡ và lau sàn diệt khuẩn thân thiện môi trường."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: 6 Bước công nghệ sản xuất Mạch Nha truyền thống",
          steps: [
            "1. Ngâm lúa nếp 24h $\to$ Ủ nảy mầm 5–7 ngày (Tổng hợp Amylase)",
            "2. Sấy mầm ở nhiệt độ mát $\to$ Cắt nhỏ giã thành bột mầm",
            "3. Nấu xôi gạo nếp chín dẻo $\to$ Để nguội về 55–60°C",
            "4. Trộn tỉ lệ 5 xôi : 1 mầm + nước ấm ngập hỗn hợp",
            "5. Ủ ấm 55–60°C trong 13–15h (Amylase thủy phân tinh bột $\to$ Maltose)",
            "6. Ép lọc bỏ bã $\to$ Đun cô đặc lửa nhỏ $\to$ Mạch nha vàng dẻo"
          ]
        },
        caseStudy: {
          title: "Khắc phục mẻ mạch nha bị chua và loãng không đông kết",
          context: "Nhóm học sinh thực hành làm mạch nha tại gia đình, sau khi ủ 14 tiếng mở nắp nồi thì dịch bị bốc mùi chua nồng và nếm không có vị ngọt.",
          solution: "1. Phân tích lỗi kĩ thuật: Nhóm đã để nồi ủ ở nhiệt độ phòng (28°C) thay vì duy trì nhiệt độ ủ ấm 55–60°C.\n2. Hậu quả: Ở nhiệt độ 28°C, enzyme amylase hoạt động rất yếu không kịp cắt tinh bột; đồng thời đây là nhiệt độ lí tưởng cho vi khuẩn lên men lactic hoang dại phát triển chuyển hóa đường thành acid lactic gây chua thiu.\n3. Biện pháp sửa chữa cho mẻ sau: Sử dụng nồi cơm điện bật chế độ 'Keep Warm' (khoảng 58°C) hoặc dùng thùng xốp bọc chăn giữ nhiệt ấm và dùng nhiệt kế đo chuẩn xác 55–60°C trước khi đậy nắp.\n4. Kết quả mẻ sau: Dịch ủ sau 14 tiếng thơm ngọt ngào mùi mộng lúa, không có vị chua, cô đặc thành mạch nha dẻo quánh tuyệt hảo.",
          tip: "Nhiệt độ 55–60°C vừa là nhiệt độ tối ưu của amylase mầm lúa, vừa là hàng rào nhiệt tiêu diệt hầu hết vi sinh vật gây chua hỏng thực phẩm."
        },
        quizzes: [
          {
            q: "Trong quá trình làm mạch nha truyền thống, enzyme amylase có nguồn gốc từ đâu?",
            opts: [
              "Được tổng hợp tự nhiên trong phôi hạt lúa nếp khi nảy mầm",
              "Do vi khuẩn lactic tiết ra trong quá trình ủ chua",
              "Có sẵn trong hạt gạo nếp đã xay xát trắng",
              "Phải mua hóa chất enzyme công nghiệp tổng hợp bổ sung vào"
            ],
            correct: 0,
            explain: "Khi hạt thóc nếp nảy mầm, hormone gibberellin kích thích lớp aleurone và phôi tổng hợp lượng lớn enzyme amylase để phân giải tinh bột dự trữ nuôi mầm cây."
          },
          {
            q: "Tại sao trong công đoạn đường hóa (ủ cơm xôi với bột mầm), nhiệt độ bắt buộc phải duy trì trong khoảng 55–60°C?",
            opts: [
              "Để hạt gạo nếp tiếp tục nở to hơn",
              "Vì đây là nhiệt độ tối ưu cho enzyme amylase hoạt động mạnh và ngăn chặn vi khuẩn lên men chua",
              "Để làm đông cứng đường mạch nha thành bánh",
              "Để kích thích hạt thóc tiếp tục nảy mầm trong nồi"
            ],
            correct: 1,
            explain: "Nhiệt độ 55–60°C là khoảng nhiệt độ tối ưu của amylase thực vật, đồng thời ức chế sự sinh trưởng của vi khuẩn lên men thiu chua, giúp dịch đường hóa đạt độ ngọt tối đa."
          },
          {
            q: "Công thức phối trộn chuẩn để lên men Eco-Enzyme tẩy rửa sinh học từ rác thải nhà bếp là gì?",
            opts: [
              "1 phần đường : 3 phần rác vỏ quả : 10 phần nước sạch",
              "10 phần đường : 1 phần rác vỏ quả : 3 phần nước sạch",
              "1 phần đường : 1 phần rác vỏ quả : 1 phần nước sạch",
              "5 phần đường : 5 phần rác vỏ quả : không dùng nước"
            ],
            correct: 0,
            explain: "Tỉ lệ vàng kinh điển để ủ rác thải vỏ hoa quả thành Eco-Enzyme là 1 phần đường nâu (hoặc rỉ đường) : 3 phần rác hữu cơ thực vật tươi : 10 phần nước sạch, ủ kín trong 3 tháng."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Chuyên đề 3. Công nghệ vi sinh vật trong xử lí ô nhiễm môi trường",
    desc: "Cơ chế xử lí ô nhiễm kim loại nặng và chất thải hữu cơ; Phân giải hiếu khí (bùn hoạt tính), kị khí (Biogas), sản xuất cồn sinh học và xử lí Xenobiotics; Công nghệ ủ phân composting và Dự án điều tra thực tế tại địa phương.",
    lessons: [
      {
        id: 9,
        title: "Bài 9. Vai trò của vi sinh vật trong xử lí ô nhiễm môi trường",
        subtitle: "Cơ chế hấp phụ kim loại nặng, phân giải chất thải hữu cơ và chu trình sinh địa hóa",
        pillars: [
          {
            title: "Nguy cơ từ ô nhiễm kim loại nặng & Cơ chế xử lí sinh học",
            icon: "fa-skull-crossbones",
            desc: "Kim loại nặng tích lũy sinh học qua chuỗi thức ăn gây nhiễm độc thần kinh và ung thư cho con người.",
            points: [
              "**Các kim loại độc hại phổ biến:** As (thạch tín), Pb (chì), Cd (cadmium), Hg (thủy ngân), Cr (chromium), Cu, Zn phát thải từ xi mạ, pin ắc quy, hóa chất nông nghiệp.",
              "**Hấp phụ sinh học (Biosorption):** Màng nhầy ngoại bào (EPS) giàu nhóm chức tích điện âm ($-COOH, -OH, -PO_4^{3-}$) liên kết và giữ chặt các ion kim loại nặng trên vách tế bào.",
              "**Tích lũy & Chuyển hóa nội bào:** Protein metallothionein liên kết vô hiệu hóa kim loại; hoặc chuyển hóa trạng thái hóa trị (ví dụ chuyển $Cr^{6+}$ độc tính cao thành $Cr^{3+}$ ít tan ít độc hơn).",
              "**Các chủng vi sinh vật tiêu biểu:** *Bacillus cereus*, *Enterobacter cloacae*, *Thiobacillus ferrooxidans*, nấm sợi *Aspergillus niger*, *Penicillium chrysogenum*."
            ]
          },
          {
            title: "Xử lí chất thải hữu cơ nông nghiệp & Đô thị",
            icon: "fa-recycle",
            desc: "Tuần hoàn sinh khối phế thải thành phân bón hữu cơ và nhiên liệu sạch.",
            points: [
              "Rơm rạ, bã mía, mùn cưa, bã sắn và phân chuồng gia súc nếu không xử lí sẽ phát sinh mùi hôi thối, ô nhiễm nguồn nước ngầm và phát thải khí nhà kính.",
              "Hệ vi sinh vật tiết các enzyme ngoại bào mạnh mẽ (cellulase, hemicellulase, lignin peroxidase, protease) cắt các polymer cao phân tử thành đường đơn và amino acid.",
              "Chuyển hóa carbon và dinh dưỡng thành sinh khối vi sinh vật, phân bón hữu cơ vi sinh giàu mùn hoặc chuyển hóa yếm khí thành khí sinh học Biogas."
            ]
          },
          {
            title: "Khôi phục hệ sinh thái & Chu trình sinh địa hóa",
            icon: "fa-earth-americas",
            desc: "Mắt xích phân hủy không thể thay thế trong chu trình tuần hoàn vật chất tự nhiên.",
            points: [
              "Vi sinh vật đóng vai trò sinh vật phân giải (decomposer), khép kín chu trình carbon, nitrogen, phosphorus và lưu huỳnh trong sinh quyển.",
              "Xử lí sinh học tại chỗ (In-situ Bioremediation) giúp phục hồi độ phì nhiêu của đất thoái hóa mà không làm đảo lộn cấu trúc tự nhiên của đất.",
              "Giải pháp xanh bền vững thay thế hoàn toàn tập quán đốt rơm rạ gây ô nhiễm bụi mịn $PM_{2.5}$ hoặc chôn lấp rác thải quá tải."
            ]
          },
          {
            title: "Các yếu tố ảnh hưởng đến hiệu suất xử lí sinh học",
            icon: "fa-gauge-high",
            desc: "Kiểm soát điều kiện môi trường để vi sinh vật phát huy tối đa công năng chuyển hóa.",
            points: [
              "**Oxy hòa tan (DO):** Cực kì quan trọng đối với các quá trình hiếu khí xử lí chất hữu cơ nhanh.",
              "**Độ pH & Nhiệt độ:** Hầu hết chủng vi sinh vật hoạt động tối ưu ở pH 6.5–8.0 và nhiệt độ 25–37°C.",
              "**Tỉ lệ dinh dưỡng $C:N:P$:** Tỉ lệ vàng tối ưu cho xử lí hiếu khí thường là $100:5:1$; tỉ lệ cho ủ phân compost là $C/N \\approx 25–30:1$."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: 3 Cơ chế vi sinh vật xử lí kim loại nặng trong nước & đất",
          steps: [
            "Kim loại nặng hòa tan trong môi trường ($As, Pb, Cd, Hg, Cr^{6+}$)",
            "Cơ chế 1: Hấp phụ bề mặt trên màng nhầy EPS & Vách tế bào",
            "Cơ chế 2: Vận chuyển vào tế bào $\to$ Tích lũy liên kết protein Metallothionein",
            "Cơ chế 3: Biến đổi hóa trị ($Cr^{6+} \\to Cr^{3+}$ kết tủa không độc)",
            "Thu gom sinh khối vi sinh vật lắng tụ $\to$ Tách kim loại ra khỏi môi trường"
          ]
        },
        caseStudy: {
          title: "Ứng dụng vi khuẩn *Thiobacillus* xử lí đất nhiễm kim loại nặng sau khai thác khoáng sản",
          context: "Đất xung quanh khu mỏ đồng bị ô nhiễm đồng ($Cu$) và sắt ($Fe$), đất bị chua hóa cực đoan với pH < 3.5 khiến không một loại cây trồng nào sống được.",
          solution: "1. Tuyển chọn chủng vi khuẩn hóa tự dưỡng *Thiobacillus ferrooxidans* bản địa có khả năng sống sót ở pH cực thấp.\n2. Bổ sung chế phẩm vi sinh vào bãi quặng đuôi kết hợp tưới ẩm định kì.\n3. Vi khuẩn oxy hóa quặng sulfide thành sulfate hòa tan, giải phóng ion kim loại ra dung dịch chiết (bioleaching).\n4. Dẫn dung dịch thu gom vào bể lắng nhân tạo và bổ sung vi khuẩn khử sulfate (*Desulfovibrio*) trong điều kiện kị khí.\n5. Vi khuẩn khử sulfate tạo khí $H_2S$, phản ứng với ion $Cu^{2+}$ tạo kết tủa đồng sulfide ($CuS$) lắng xuống đáy bể, dễ dàng thu gom tái chế kim loại và làm sạch nguồn nước ngầm.",
          tip: "Kết hợp vi sinh vật oxy hóa hòa tan và vi sinh vật khử kết tủa là giải pháp công nghệ tuần hoàn khép kín tối ưu cho các khu mỏ."
        },
        quizzes: [
          {
            q: "Cơ chế nào giúp màng nhầy ngoại bào (EPS) của vi sinh vật có thể giữ chặt các ion kim loại nặng trong nước thải?",
            opts: [
              "Các nhóm chức tích điện âm trên EPS hấp phụ tĩnh điện với các ion kim loại mang điện tích dương",
              "Vi sinh vật ăn các khối kim loại lớn vào không bào tiêu hóa",
              "Enzyme của vi sinh vật phân hủy kim loại nặng thành khí oxy",
              "Vi sinh vật biến kim loại thành phân tử nước"
            ],
            correct: 0,
            explain: "Màng nhầy ngoại bào EPS chứa nhiều phân tử polymer tích điện âm (như carboxyl, hydroxyl, phosphate), do đó có khả năng hấp phụ tĩnh điện cực mạnh các ion kim loại nặng tích điện dương như $Pb^{2+}, Cd^{2+}, Cu^{2+}$."
          },
          {
            q: "Ưu điểm lớn nhất của phương pháp xử lí chất thải hữu cơ bằng công nghệ vi sinh vật so với chôn lấp hoặc thiêu đốt là gì?",
            opts: [
              "Thời gian xử lí chỉ mất vài giây",
              "Thân thiện môi trường, giảm phát thải khói bụi độc hại và tái chế chất thải thành sản phẩm hữu ích (phân bón, năng lượng)",
              "Không đòi hỏi bất kì sự kiểm soát kĩ thuật nào",
              "Tiêu diệt hoàn toàn mọi sinh vật trong khu vực"
            ],
            correct: 1,
            explain: "Chuyển hóa sinh học nhờ vi sinh vật không sinh khói bụi ô nhiễm không khí như thiêu đốt, không làm quá tải bãi rác như chôn lấp, đồng thời tái chế carbon hữu cơ thành phân compost giàu mùn và khí đốt biogas."
          },
          {
            q: "Để vi sinh vật hiếu khí phân giải chất thải hữu cơ đạt hiệu suất cao nhất trong bể xử lí, thông số nào bắt buộc phải duy trì liên tục?",
            opts: [
              "Độ tối tuyệt đối và cắt đứt nguồn oxy",
              "Sục khí cung cấp oxy hòa tan (DO) liên tục và kiểm soát pH thích hợp",
              "Đun sôi nước thải ở 100°C liên tục",
              "Thêm thật nhiều hóa chất tẩy javel sát trùng"
            ],
            correct: 1,
            explain: "Vi sinh vật hiếu khí bắt buộc phải có oxy phân tử làm chất nhận electron cuối cùng trong chuỗi hô hấp để oxy hóa triệt để chất hữu cơ thành $CO_2$ và $H_2O$, do đó hệ thống sục khí duy trì DO > 2 mg/L là điều kiện sống còn."
          }
        ]
      },
      {
        id: 10,
        title: "Bài 10. Vi sinh vật trong phân giải các hợp chất làm ô nhiễm môi trường",
        subtitle: "Phân giải hiếu khí (bể Aerotank), kị khí (bể UASB), sản xuất bio-ethanol và phân hủy xenobiotics",
        pillars: [
          {
            title: "Quá trình phân giải hiếu khí & Bùn hoạt tính (Activated Sludge)",
            icon: "fa-wind",
            desc: "Ứng dụng oxy sinh học để oxy hóa triệt để tải lượng hữu cơ trong nước thải đô thị và công nghiệp.",
            points: [
              "Trong bể Aerotank, vi sinh vật hiếu khí (*Zoogloea ramigera*, *Pseudomonas*, nấm men, nguyên sinh động vật) kết hợp thành các hạt bông bùn hoạt tính lơ lửng.",
              "Vi sinh vật oxy hóa hợp chất hữu cơ ($C, H, O, N$) thành $CO_2, H_2O, NH_4^+, NO_3^-$ và sinh khối mới.",
              "Quá trình Nitrat hóa (vi khuẩn *Nitrosomonas* chuyển $NH_4^+ \to NO_2^-$; *Nitrobacter* chuyển $NO_2^- \to NO_3^-$) kết hợp khử Nitrat kị khí giúp loại bỏ triệt để ô nhiễm đạm gây phú dưỡng hóa nguồn nước."
            ]
          },
          {
            title: "Quá trình phân giải kị khí & 4 giai đoạn sinh học",
            icon: "fa-fire-flame-simple",
            desc: "Xử lí nước thải nồng độ hữu cơ đậm đặc và thu hồi năng lượng tái tạo.",
            points: [
              "**Giai đoạn 1 - Thủy phân (Hydrolysis):** Vi khuẩn tiết enzyme phân cắt polymer (tinh bột, protein, lipid) thành monomer (glucose, acid amin, acid béo).",
              "**Giai đoạn 2 - Acid hóa (Acidogenesis):** Vi khuẩn lên men chuyển hóa monomer thành các acid hữu cơ mạch ngắn (acid propionic, butyric), ethanol, $H_2, CO_2$.",
              "**Giai đoạn 3 - Acetate hóa (Acetogenesis):** Vi khuẩn chuyển hóa acid hữu cơ thành acid acetic ($CH_3COOH$), $CO_2$ và $H_2$.",
              "**Giai đoạn 4 - Methane hóa (Methanogenesis):** Cổ khuẩn sinh methane (*Methanobacterium*, *Methanococcus*) sử dụng acetate hoặc $H_2 + CO_2$ để tổng hợp khí methane ($CH_4$)."
            ]
          },
          {
            title: "Lên men sinh khối sản xuất cồn sinh học (Bioethanol)",
            icon: "fa-gas-pump",
            desc: "Nhiên liệu sinh học tái tạo thay thế xăng dầu hóa thạch từ phế phẩm rơm rạ, ngô.",
            points: [
              "**Chuỗi công đoạn công nghệ:**\nPhế phẩm nông nghiệp (lignocellulose) $\to$ Tiền xử lí hóa lí (phá vỡ cấu trúc lignin) $\to$ Thủy phân bằng enzyme cellulase thu đường glucose $\to$ Lên men bằng nấm men (*Saccharomyces cerevisiae*) thu ethanol $\to$ Chưng cất và tách nước tuyệt đối.",
              "Pha trộn ethanol sinh học vào xăng khoáng theo tỉ lệ 5% (xăng $E_5$) hoặc 10% (xăng $E_{10}$) giúp giảm phát thải khí độc $CO$ và hydrocarbon thơm vào không khí."
            ]
          },
          {
            title: "Phục hồi sinh học & Phân giải hợp chất nhân tạo (Xenobiotics)",
            icon: "fa-shield-halved",
            desc: "Tuyển chọn các chủng vi sinh vật siêu năng lực phân hủy hóa chất bảo vệ thực vật và chất độc dioxin.",
            points: [
              "**Hợp chất lạ (Xenobiotics):** Các hợp chất nhân tạo tổng hợp xa lạ với sinh giới tự nhiên, có cấu trúc vòng thơm phức tạp khó phân hủy (thuốc trừ sâu DDT, 2,4-D, hydrocarbon thơm đa vòng PAH, dioxin, nhựa tổng hợp).",
              "Vi sinh vật tiến hóa các con đường trao đổi chất đặc biệt nhờ enzyme oxygenase để bẻ gãy vòng benzen.",
              "Quy trình phân lập: Lấy mẫu đất tại vùng nhiễm độc lâu năm $\to$ Nuôi cấy chọn lọc trên môi trường có nồng độ chất độc tăng dần $\to$ Giải mã gene tìm cụm gene phân hủy $\to$ Nhân sinh khối để phun xử lí đất nhiễm độc."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: 4 Giai đoạn phân giải kị khí tạo khí Methane (Biogas)",
          steps: [
            "Chất thải hữu cơ phức tạp (Cellulose, Protein, Lipid)",
            "Giai đoạn 1: Thủy phân (Enzyme ngoại bào) $\to$ Monomer (Đường, Amino acid)",
            "Giai đoạn 2: Lên men Acid hóa $\to$ Acid hữu cơ, Cồn, $H_2, CO_2$",
            "Giai đoạn 3: Acetate hóa $\to$ Tạo $CH_3COOH$ + $H_2$ + $CO_2$",
            "Giai đoạn 4: Methane hóa (Cổ khuẩn Methanogen) $\to$ Khí Methane ($CH_4$)"
          ]
        },
        caseStudy: {
          title: "Xử lí ô nhiễm dầu tràn trên bờ biển bằng kĩ thuật kích thích sinh học (Biostimulation)",
          context: "Một sự cố tràn dầu ven biển làm dải cát bờ biển bị bao phủ bởi lớp dầu thô đen quánh chứa hàm lượng cao hydrocarbon thơm độc hại.",
          solution: "1. Đánh giá hiện trạng: Trong cát bờ biển đã có sẵn quần thể vi khuẩn bản địa ăn dầu (*Alcanivorax borkumensis*, *Pseudomonas*), tuy nhiên mật độ và tốc độ phân hủy dầu rất chậm do thiếu hụt nghiêm trọng dinh dưỡng Nitrogen và Phosphorus.\n2. Can thiệp kích thích sinh học (Biostimulation): Phun dung dịch phân bón vô cơ chứa đạm chậm tan và phosphate tan trong chất béo lên toàn bộ bãi cát bị nhiễm dầu.\n3. Xới xáo cơ học cát để cung cấp oxy hòa tan dồi dào.\n4. Kết quả: Sau 2 tuần, mật độ vi khuẩn ăn dầu tăng sinh gấp 10.000 lần, enzyme alkane hydroxylase của vi khuẩn bẻ gãy các mạch hydrocarbon thành $CO_2$ và sinh khối vô hại.\n5. Hơn 85% lượng dầu bám dính được làm sạch mà không cần dùng hóa chất tẩy rửa độc hại đối với sinh vật biển.",
          tip: "Kích thích vi sinh vật bản địa bằng cách bổ sung dinh dưỡng $N, P$ (Biostimulation) an toàn và hiệu quả hơn nhiều so với việc cấy vi sinh vật ngoại lai vào môi trường tự nhiên."
        },
        quizzes: [
          {
            q: "Nhóm sinh vật nào thực hiện công đoạn cuối cùng trong quá trình phân giải kị khí để sinh ra khí methane ($CH_4$)?",
            opts: [
              "Nấm mốc sợi hiếu khí",
              "Cổ khuẩn sinh methane (Methanogenic Archaea)",
              "Tảo lục đơn bào quang dưỡng",
              "Vi khuẩn cố định đạm rễ nốt sần"
            ],
            correct: 1,
            explain: "Công đoạn methane hóa ở giai đoạn 4 của quá trình phân giải kị khí được thực hiện độc quyền bởi nhóm Cổ khuẩn sinh methane (Methanogens) thuộc giới Archaea, sử dụng acetate hoặc $H_2 + CO_2$ để tạo thành khí $CH_4$."
          },
          {
            q: "Thuật ngữ 'Xenobiotics' dùng trong công nghệ môi trường để chỉ nhóm chất nào sau đây?",
            opts: [
              "Các chất hữu cơ tự nhiên dễ dàng phân hủy trong vài giờ",
              "Các hợp chất nhân tạo xa lạ với sinh giới tự nhiên, có cấu trúc bền vững và khó phân hủy (thuốc trừ sâu, dioxin, nhựa)",
              "Các loại vitamin và khoáng chất thiết yếu cho vi khuẩn",
              "Khí oxy hòa tan trong nước ngầm"
            ],
            correct: 1,
            explain: "Xenobiotics là các hợp chất hóa học do con người tổng hợp nhân tạo không có sẵn trong tự nhiên (như thuốc trừ sâu clo hữu cơ, dioxin, PAH, nhựa tổng hợp), sinh vật khó có enzyme sẵn có để bẻ gãy nên chúng tồn lưu rất lâu trong môi trường."
          },
          {
            q: "Sơ đồ công nghệ sản xuất cồn sinh học Bioethanol từ phế phẩm rơm rạ theo trình tự nào sau đây là chính xác?",
            opts: [
              "Phế phẩm hữu cơ $\to$ Chưng cất cồn $\to$ Thủy phân $\to$ Lên men",
              "Phế phẩm rơm rạ $\to$ Tiền xử lí & Thủy phân thành đường $\to$ Lên men nấm men $\to$ Chưng cất cồn",
              "Lên men $\to$ Tiền xử lí $\to$ Đường hóa $\to$ Ép lấy bã",
              "Chưng cất $\to$ Lên men $\to$ Thủy phân $\to$ Trồng lúa"
            ],
            correct: 1,
            explain: "Trình tự chuẩn: Sinh khối giàu cellulose $\to$ Tiền xử lí phá cấu trúc lignin $\to$ Thủy phân enzyme thu đường đơn $\to$ Lên men nấm men chuyển đường thành ethanol $\to$ Chưng cất tinh chế cồn sinh học."
          }
        ]
      },
      {
        id: 11,
        title: "Bài 11. Công nghệ ứng dụng vi sinh vật trong xử lí ô nhiễm môi trường",
        subtitle: "Xử lí đất, nước thải màng sinh học, công nghệ thu nhận Biogas và ủ phân hữu cơ Composting",
        pillars: [
          {
            title: "Công nghệ xử lí đất ô nhiễm tại chỗ (In-situ)",
            icon: "fa-mountain-sun",
            desc: "Khử độc đất nhiễm thuốc bảo vệ thực vật và kim loại nặng mà không cần đào xới vận chuyển tốn kém.",
            points: [
              "**4 bước xử lí chuẩn:**\n1. Khảo sát đo đạc bản đồ nồng độ và phạm vi chất ô nhiễm.\n2. Tuyển chọn chủng vi sinh vật phù hợp (không mang mầm bệnh, không sinh độc tố phụ).\n3. Bơm ép dinh dưỡng (N, P), chất nhận electron và sục khí ngầm (bioventing) tạo môi trường tối ưu cho vi sinh vật.\n4. Quan trắc định kì mật độ vi sinh vật và sự suy giảm nồng độ chất ô nhiễm.",
              "Kết hợp thực vật và vi sinh vật vùng rễ (Rhizoremediation): rễ cây tiết dịch kích thích vi khuẩn đất phát triển mạnh phân hủy hóa chất."
            ]
          },
          {
            title: "Xử lí nước thải bằng công nghệ màng sinh học (Biofilm)",
            icon: "fa-water",
            desc: "Cố định quần thể vi sinh vật trên giá thể để nâng cao mật độ và hiệu quả làm sạch nước.",
            points: [
              "Vi sinh vật tiết chất kết dính tạo thành lớp màng sinh học mỏng dính bám trên bề mặt các vật liệu giá thể (đá dăm, vòng nhựa MBBR).",
              "Nước thải chảy qua bề mặt màng sinh học: lớp ngoài cùng tiếp xúc oxy diễn ra quá trình oxy hóa hiếu khí chất hữu cơ và nitrat hóa; lớp trong cùng sát giá thể thiếu oxy diễn ra quá trình khử nitrat kị khí.",
              "Khả năng chịu tải lượng ô nhiễm biến động cao và bùn sinh học già cỗi tự bong tróc lắng xuống bể lắng."
            ]
          },
          {
            title: "Công nghệ hầm Biogas & An toàn năng lượng sinh học",
            icon: "fa-fire",
            desc: "Biến chất thải chăn nuôi lợn, bò thành nguồn khí đốt năng lượng tái tạo sạch.",
            points: [
              "**Thành phần khí Biogas:** Khí methane ($CH_4$) chiếm **58–75%**, khí carbon dioxide ($CO_2$) chiếm **25–42%**, cùng lượng nhỏ khí độc $H_2S$, hơi nước.",
              "**Cấu tạo hầm biogas:** Bể nạp nguyên liệu $\to$ Bể phân giải kị khí ngầm kín $\to$ Bể chứa khí áp lực $\to$ Bể điều áp và đường xả phân nước đã xử lí.",
              "Nước thải sau hầm biogas đã giảm 80–90% $BOD/COD$, có thể sử dụng tưới cây trồng hoặc nuôi cá.",
              "**Quy tắc an toàn sống còn:** Methane dễ gây nổ khi trộn với không khí theo tỉ lệ 5–15%; Khí $H_2S$ cực kì độc và gây ngạt khí $\to$ Tuyệt đối không châm lửa gần hầm, không tự ý chui vào hầm kín khi chưa thông gió kiểm tra an toàn."
            ]
          },
          {
            title: "Quy trình ủ phân hữu cơ hiếu khí (Composting)",
            icon: "fa-seedling",
            desc: "Tận dụng rác thải hữu cơ sinh hoạt và phân gia súc tạo phân mùn hữu cơ sinh học chất lượng cao.",
            points: [
              "**Quy trình 6 bước:** Phân loại rác $\to$ Nghiền nhỏ kích thước $\to$ Phối trộn tỉ lệ $C/N$ thích hợp (25–30:1) $\to$ Đánh đống ủ $\to$ Cấp khí/đảo trộn duy trì độ ẩm 50–60% $\to$ Theo dõi nhiệt độ ủ chín.",
              "**Diễn thế nhiệt độ và quần thể vi sinh vật qua 4 pha:**\n- *1. Pha ưa ấm ban đầu (20–40°C):* Vi khuẩn ưa ấm phân giải đường đơn, giải phóng nhiệt lượng làm đống ủ nóng lên nhanh chóng.\n- *2. Pha chịu nhiệt (40–60°C):* Vi sinh vật chịu nhiệt tiếp tục oxy hóa protein và tinh bột.\n- *3. Pha ưa nhiệt đỉnh cao (60–80°C):* Nhiệt độ cao tiêu diệt hoàn toàn trứng giun sán, hạt cỏ dại và vi khuẩn gây bệnh ($Salmonella, E. coli$); nấm và xạ khuẩn ưa nhiệt phân hủy cellulose/lignin.\n- *4. Pha hạ nhiệt & ủ chín (< 40°C):* Đống ủ nguội dần, vi sinh vật ưa ấm tái xâm nhập hoàn tất quá trình mùn hóa tạo phân compost tơi xốp giàu dinh dưỡng."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: Diễn thế 4 pha nhiệt độ trong quy trình ủ phân hữu cơ (Compost)",
          steps: [
            "Pha 1 (20–40°C): VSV ưa ấm phân giải đường dễ tiêu $\to$ Đống ủ nóng lên",
            "Pha 2 (40–60°C): VSV chịu nhiệt tăng sinh phân hủy protein & tinh bột",
            "Pha 3 (60–80°C): VSV ưa nhiệt đỉnh cao $\to$ Diệt hạt cỏ dại, mầm bệnh",
            "Pha 4 (< 40°C): Đống ủ nguội dần $\to$ Xạ khuẩn mùn hóa tạo phân chín"
          ]
        },
        caseStudy: {
          title: "Mô hình xử lí chất thải chăn nuôi lợn khép kín bằng hầm Biogas kết hợp ủ phân vi sinh",
          context: "Một trang trại nuôi 1.000 con lợn thịt mỗi ngày thải ra hơn 2 tấn phân và hàng chục mét khối nước rửa chuồng, gây khiếu kiện gay gắt vì mùi hôi và ô nhiễm nguồn nước mặt.",
          solution: "1. Tách phân rắn: Sử dụng máy ép tách phân để tách 80% lượng phân đặc ra khỏi dòng nước thải chuồng.\n2. Xử lí nước thải phân lỏng: Dẫn dòng nước thải vào hệ thống hầm Biogas HDPE kị khí thể tích 500 $m^3$.\n3. Thu hồi khí sinh học: Khí Biogas sinh ra được dẫn qua bình lọc khử khí $H_2S$ bằng quặng sắt, sau đó cấp cho máy phát điện chạy biogas cung cấp điện chiếu sáng và quạt mát toàn trang trại.\n4. Xử lí phân rắn bằng ủ compost: Lượng phân đặc ép khô được phối trộn với mùn cưa và chế phẩm nấm đối kháng *Trichoderma*, đảo trộn hiếu khí trong 35 ngày.\n5. Nhiệt độ đống ủ đạt 68°C tiêu diệt sạch mầm bệnh, thu được phân hữu cơ vi sinh đóng bao bán cho các vườn sầu riêng mang lại doanh thu hàng trăm triệu đồng mỗi năm.",
          tip: "Mô hình kinh tế tuần hoàn nông nghiệp: Phân lợn $\to$ Biogas phát điện + Phân bón hữu cơ compost $\to$ Không phát thải chất thải ra môi trường."
        },
        quizzes: [
          {
            q: "Trong quá trình ủ phân hữu cơ hiếu khí (composting), giai đoạn nhiệt độ đống ủ tăng lên đến 60–80°C có ý nghĩa sinh học quan trọng nào?",
            opts: [
              "Làm cho đống phân bắt lửa tự cháy thành than",
              "Tiêu diệt các mầm bệnh nguy hiểm, trứng giun sán và làm mất khả năng nảy mầm của các hạt cỏ dại",
              "Biến toàn bộ đống phân thành thể lỏng",
              "Làm cho tất cả vi sinh vật trong đống ủ chết sạch và quá trình phân hủy dừng lại vĩnh viễn"
            ],
            correct: 1,
            explain: "Pha ưa nhiệt cao (60–80°C) sinh ra từ quá trình hô hấp hiếu khí mãnh liệt của vi sinh vật có tác dụng tiệt trùng sinh học tự nhiên: tiêu diệt vi khuẩn gây bệnh ($Salmonella$, vi khuẩn thương hàn), trứng giun sán và làm ung thối hạt cỏ dại lẫn trong phân."
          },
          {
            q: "Thành phần khí cháy chiếm tỉ lệ thể tích lớn nhất (khoảng 58–75%) trong khí sinh học Biogas là khí gì?",
            opts: [
              "Khí Carbon dioxide ($CO_2$)",
              "Khí Methane ($CH_4$)",
              "Khí Hydrogen sulfide ($H_2S$)",
              "Khí Nitrogen ($N_2$)"
            ],
            correct: 1,
            explain: "Khí Methane ($CH_4$) chiếm tỉ lệ 58–75% thể tích khí Biogas, đây là thành phần khí nhiên liệu cháy sinh nhiệt năng cao được ứng dụng làm khí đun nấu và chạy máy phát điện."
          },
          {
            q: "Để tránh nguy cơ ngộ độc khí và cháy nổ nguy hiểm liên quan đến hệ thống hầm Biogas, điều nào sau đây là BẮT BUỘC?",
            opts: [
              "Châm lửa soi vào cửa hầm kiểm tra xem mực nước phân đầy hay chưa",
              "Đóng chặt kín toàn bộ phòng máy phát điện không cho không khí lưu thông",
              "Không đưa ngọn lửa trần đến gần khu vực chứa khí và phải thông gió kiểm tra nồng độ khí trước khi bảo trì",
              "Tháo bỏ toàn bộ van xả an toàn của đường ống dẫn khí"
            ],
            correct: 2,
            explain: "Methane ($CH_4$) cực kì dễ cháy nổ khi tiếp xúc tia lửa, đồng thời khí $H_2S$ trong biogas là khí kịch độc gây ức chế hô hấp tử vong nhanh chóng; do đó cấm lửa trần và bắt buộc phải thông khí, đeo mặt nạ dưỡng khí khi kiểm tra bảo trì hầm biogas."
          }
        ]
      },
      {
        id: 12,
        title: "Bài 12. Dự án: Điều tra công nghệ ứng dụng vi sinh vật trong xử lí ô nhiễm môi trường tại địa phương",
        subtitle: "Phương pháp điều tra thực địa, khảo sát mô hình xử lí rác thải/nước thải bằng vi sinh vật",
        pillars: [
          {
            title: "Mục tiêu & Xác định bài toán ô nhiễm địa phương",
            icon: "fa-map-location-dot",
            desc: "Nhận diện các vấn đề nhức nhối về môi trường tại khu dân cư hoặc cơ sở sản xuất tại địa bàn sinh sống.",
            points: [
              "**Khảo sát nguồn phát thải:** Nước thải sinh hoạt xả trực tiếp ra mương kênh; Phân chuồng chăn nuôi gia súc bốc mùi; Rác thải chợ dân sinh hữu cơ chưa phân loại; Rơm rạ sau vụ gặt bị đốt bỏ gây khói mù.",
              "Xác định giải pháp sinh học đang hoặc có thể ứng dụng: Hầm biogas hộ gia đình; Chế phẩm vi sinh EM xử lí mùi hôi chuồng trại; Mô hình ủ rác hữu cơ tại hộ gia đình; Trạm xử lí nước thải tập trung."
            ]
          },
          {
            title: "Kế hoạch điều tra thực địa 5 bước an toàn",
            icon: "fa-shield-halved",
            desc: "Bảo đảm tính xác thực của dữ liệu đồng thời tuân thủ quy tắc an toàn bảo hộ.",
            points: [
              "**Bước 1 - Lập kế hoạch:** Thiết kế bảng câu hỏi phỏng vấn các hộ gia đình hoặc ban quản lí trang trại/nhà máy.",
              "**Bước 2 - Thu thập thông tin:** Chụp ảnh hiện trạng, phỏng vấn thực tế, thu thập số liệu về lưu lượng chất thải, chủng loại chế phẩm vi sinh đang dùng, chi phí vận hành.",
              "**QUY TẮC AN TOÀN BẮT BUỘC:** Tuyệt đối không tiếp xúc tay trần với mẫu nước thải bẩn, rác nguy hại; Mang găng tay y tế, khẩu trang than hoạt tính và giày bảo hộ; Không tự ý chui vào cống rãnh ngầm hay hầm biogas kín.",
              "**Bước 3 - Xử lí & Đánh giá số liệu:** Lập bảng thống kê nồng độ ô nhiễm trước và sau xử lí, phân tích hiệu quả kinh tế và rào cản nhân rộng.",
              "**Bước 4 - Thảo luận & Đề xuất giải pháp:** Đề xuất cải tiến kĩ thuật hoặc tuyên truyền nâng cao ý thức phân loại rác tại nguồn.",
              "**Bước 5 - Báo cáo tổng kết:** Trình bày báo cáo dự án trước tập thể lớp bằng bài thuyết trình trực quan."
            ]
          },
          {
            title: "Cấu trúc hồ sơ báo cáo điều tra môi trường",
            icon: "fa-folder-open",
            desc: "Chuẩn hóa hồ sơ nghiệm thu dự án học tập chuyên đề Sinh học 10.",
            points: [
              "**Phần 1 - Đặt vấn đề:** Thực trạng ô nhiễm tại địa bàn khảo sát và lí do lựa chọn đề tài.",
              "**Phần 2 - Cơ sở khoa học:** Nêu rõ các chủng vi sinh vật tham gia chuyển hóa và cơ chế sinh học phân giải.",
              "**Phần 3 - Quy trình công nghệ:** Sơ đồ hóa từng bước xử lí, thông số vận hành (thời gian ủ, nhiệt độ, tỉ lệ phối trộn chế phẩm vi sinh).",
              "**Phần 4 - Đánh giá & Khuyến nghị:** Phân tích ưu nhược điểm của mô hình và đề xuất kiến nghị với chính quyền địa phương."
            ]
          },
          {
            title: "Hành động trách nhiệm công dân vì môi trường xanh",
            icon: "fa-hand-holding-heart",
            desc: "Từ nhận thức lí thuyết chuyển hóa thành thói quen sống xanh và lan tỏa cộng đồng.",
            points: [
              "Chủ động thực hiện phân loại rác thải tại nguồn (tách rác hữu cơ dễ phân hủy khỏi rác tái chế và rác vô cơ) ngay tại gia đình và lớp học.",
              "Tuyên truyền vận động người thân không đốt rơm rạ ngoài đồng ruộng mà tận dụng ủ chế phẩm *Trichoderma* làm phân bón hữu cơ.",
              "Lan tỏa mô hình sử dụng Eco-Enzyme và chế phẩm vi sinh bản địa an toàn cho sức khỏe gia đình."
            ]
          }
        ],
        process: {
          title: "Sơ đồ cốt lõi: 5 Bước tiến hành dự án điều tra môi trường tại địa phương",
          steps: [
            "1. Lập kế hoạch: Chọn địa bàn khảo sát & Lập bảng hỏi",
            "2. Khảo sát thực địa an toàn (Mang bảo hộ: Găng tay, Khẩu trang)",
            "3. Thu thập số liệu: Loại ô nhiễm, Quy trình xử lí, Chủng VSV",
            "4. Xử lí số liệu & Phân tích hiệu quả kinh tế - sinh thái",
            "5. Hoàn thiện báo cáo, đề xuất giải pháp & Thuyết trình"
          ]
        },
        caseStudy: {
          title: "Báo cáo điều tra mô hình xử lí rơm rạ bằng chế phẩm vi sinh *Trichoderma* tại xã nông thôn",
          context: "Tại địa phương sau mỗi vụ gặt lúa, nông dân có thói quen đốt rơm rạ ngay trên đồng gây khói mù mịt làm cản trở giao thông và tiêu diệt hệ vi sinh vật đất màu mỡ.",
          solution: "1. Nhóm học sinh điều tra thực địa: Gặp gỡ 20 hộ nông dân và cán bộ khuyến nông xã để tìm hiểu nguyên nhân (do áp lực cày cấy vụ mùa tiếp theo quá gấp gáp, rơm không kịp mục nát tự nhiên).\n2. Khảo sát mô hình điểm: Trạm khuyến nông hỗ trợ chế phẩm nấm đối kháng *Trichoderma* và vi khuẩn phân giải cellulose phun trực tiếp lên rơm rạ trên ruộng sau khi gặt rồi cày lật đất ngâm nước.\n3. Kết quả ghi nhận: Chỉ sau 7–10 ngày, toàn bộ rơm rạ mềm nhũn, phân hủy hoàn toàn thành phân xanh hữu cơ mà không phát sinh khí độc $H_2S$ gây ngộ độc nghẹt rễ lúa.\n4. Đánh giá kinh tế: Nông dân tiết kiệm được 30% lượng phân bón hóa học NPK, năng suất lúa vụ sau tăng 10% và không còn tình trạng đốt rơm gây ô nhiễm khói bụi.\n5. Đề xuất: Đề nghị Hợp tác xã nhân rộng cấp phát chế phẩm vi sinh đại trà cho toàn bộ cánh đồng trong xã.",
          tip: "Một đề tài điều tra thực địa có giá trị cao nhất khi đưa ra được những giải pháp thực tế, chi phí thấp mà bà con nông dân có thể dễ dàng áp dụng ngay."
        },
        quizzes: [
          {
            q: "Khi đi khảo sát và điều tra thực địa tại các khu vực nước thải ô nhiễm hoặc bãi rác chăn nuôi, quy tắc an toàn bắt buộc nào phải tuân thủ nghiêm ngặt?",
            opts: [
              "Nếm thử nước thải để đánh giá độ mặn và độ chua",
              "Sử dụng đầy đủ trang bị bảo hộ (găng tay cao su, khẩu trang hoạt tính, ủng) và không tiếp xúc trực tiếp tay trần với nguồn ô nhiễm",
              "Tự ý tháo mở các van bình chứa khí gas của hầm biogas để ngửi mùi",
              "Không cần mang bất kì dụng cụ bảo hộ nào"
            ],
            correct: 1,
            explain: "An toàn sinh học là nguyên tắc tối thượng trong nghiên cứu thực địa; bắt buộc phải trang bị đồ bảo hộ (khẩu trang, găng tay, ủng bảo hộ) để ngăn ngừa nguy cơ nhiễm trùng, vi khuẩn gây bệnh và khí độc."
          },
          {
            q: "Ứng dụng chế phẩm vi sinh chứa nấm đối kháng *Trichoderma* để xử lí rơm rạ ngay trên đồng ruộng mang lại lợi ích nổi bật nào?",
            opts: [
              "Biến rơm rạ thành các thanh sắt xây dựng",
              "Phân giải nhanh chóng cellulose thành mùn hữu cơ, tránh đốt rơm gây khói bụi và hạn chế bệnh ngộ độc hữu cơ cho rễ lúa",
              "Làm cho toàn bộ cánh đồng bị ngập lụt",
              "Diệt sạch mọi loài chim bay qua đồng ruộng"
            ],
            correct: 1,
            explain: "Nấm *Trichoderma* tiết enzyme cellulase cực mạnh giúp rơm rạ hoai mục nhanh chóng thành mùn giàu dinh dưỡng chỉ sau 7–10 ngày, chấm dứt tập quán đốt rơm gây ô nhiễm và phòng chống bệnh nghẹt rễ lúa do ngộ độc hữu cơ."
          },
          {
            q: "Để một dự án điều tra môi trường địa phương có tính thuyết phục cao nhất, phần báo cáo cần phải có yếu tố then chốt nào?",
            opts: [
              "Chỉ nêu chung chung các khẩu hiệu tuyên truyền không có số liệu",
              "Số liệu khảo sát thực tế minh bạch, hình ảnh minh chứng chân thực, phân tích cơ chế vi sinh vật rõ ràng và giải pháp khả thi",
              "Chép lại toàn bộ bài viết trên mạng internet không ghi nguồn",
              "Chỉ trích dẫn các tài liệu từ nước ngoài mà không khảo sát thực tế địa phương"
            ],
            correct: 1,
            explain: "Báo cáo khoa học xuất sắc cần có số liệu điều tra thực chứng, ảnh chụp hiện trạng, đối chiếu khoa học, phân tích cơ chế sinh học chính xác và các đề xuất giải pháp phù hợp với điều kiện thực tế của địa phương."
          }
        ]
      }
    ]
  }
];

const processSummaryTable = [
  {
    name: "Vi nhân giống cây trồng",
    steps: "Môi trường vô trùng + hormone (Auxin, Cytokinin) $\\to$ Khử trùng mẫu mô $\\to$ Cảm ứng tạo mô sẹo (Callus) $\\to$ Tái biệt hóa tạo rễ/chồi $\\to$ Cây con hoàn chỉnh $\\to$ Thuần hóa vườn ươm",
    keyFactor: "Điều kiện vô trùng tuyệt đối; Tỉ lệ Cytokinin/Auxin điều khiển hướng tạo chồi hay tạo rễ."
  },
  {
    name: "Nhân bản vô tính động vật (SCNT)",
    steps: "Tế bào soma tuyến vú (đưa về pha $G_0$) + Trứng loại bỏ nhân $\\to$ Dung hợp tế bào bằng xung điện $\\to$ Kích thích phân chia tạo phôi $\\to$ Cấy tử cung con mang thai hộ $\\to$ Cá thể con",
    keyFactor: "Đồng bộ chu kì tế bào cho nhân về pha $G_0$; Tái lập trình biểu sinh của nhân soma trong tế bào chất trứng."
  },
  {
    name: "Liệu pháp gene tế bào soma",
    steps: "Tách tế bào bệnh nhân $\\to$ Chuyển gene lành vào vector virus an toàn $\\to$ Chuyển gene vào tế bào đích $\\to$ Chọn lọc & Nuôi cấy tăng sinh $\\to$ Truyền tế bào lành trở lại người bệnh",
    keyFactor: "Vector chuyển gene an toàn không sinh u; Chỉ sửa tế bào soma nên biến đổi không di truyền cho thế hệ sau."
  },
  {
    name: "Sản xuất chế phẩm enzyme",
    steps: "Tuyển chọn giống VSV $\\to$ Nuôi cấy lên men (nổi/chìm) $\\to$ Thu dịch/Phá tế bào $\\to$ Tách chiết bằng đệm lạnh (3–5°C) $\\to$ Kết tủa muối/cồn $\\to$ Tinh sạch $\\to$ Sấy thăng hoa/tạo hạt",
    keyFactor: "Nhiệt độ thấp 3–5°C trong suốt quá trình chiết tách để tránh biến tính protein và ức chế protease tự phân hủy."
  },
  {
    name: "Sản xuất khí sinh học Biogas",
    steps: "Phân gia súc & chất thải hữu cơ $\\to$ Thủy phân polymer $\\to$ Lên men acid hóa $\\to$ Acetate hóa ($CH_3COOH$) $\\to$ Methane hóa nhờ Cổ khuẩn sinh methane (Methanogen) $\\to$ Khí $CH_4$",
    keyFactor: "Kị khí hoàn toàn; Cân bằng pH 6.8–7.4; Tỉ lệ methane chiếm 58–75% thể tích khí."
  },
  {
    name: "Ủ phân hữu cơ hiếu khí (Compost)",
    steps: "Phân loại rác hữu cơ $\\to$ Nghiền nhỏ $\\to$ Phối trộn tỉ lệ $C/N \\approx 25–30:1$ $\\to$ Đánh đống ủ $\\to$ Cấp khí/đảo trộn $\\to$ Pha ưa nhiệt (60–80°C) diệt mầm bệnh $\\to$ Hạ nhiệt ủ chín",
    keyFactor: "Thông khí đảo trộn định kì và độ ẩm 50–60%; Pha nhiệt 60–80°C tiệt trùng mầm bệnh và hạt cỏ dại tự nhiên."
  },
  {
    name: "Quy trình dự án học tập sinh học",
    steps: "1. Xác định mục tiêu & Tiêu chí $\\to$ 2. Lập kế hoạch phân công $\\to$ 3. Thu thập dữ liệu thực tế $\\to$ 4. Phân tích đối chiếu $\\to$ 5. Thảo luận đạo đức $\\to$ 6. Báo cáo & Đánh giá",
    keyFactor: "An toàn thực địa; Phân biệt chứng cứ khoa học với quảng cáo thương mại; Trích dẫn nguồn trung thực."
  }
];

const lessonOverviewTable = [
  { stt: 1, name: "Bài 1. Công nghệ tế bào thực vật và thành tựu", cd: "Chuyên đề 1", concept: "Tính toàn năng, giải biệt hóa và tái biệt hóa tế bào", process: "Vi nhân giống 4 bước qua mô sẹo; chuyển gene plasmid", app: "Bảo tồn sâm Ngọc Linh, nhân giống sạch bệnh, lúa vàng, lúa C4" },
  { stt: 2, name: "Bài 2. Tế bào gốc và một số thành tựu", cd: "Chuyên đề 1", concept: "Tiềm năng: Toàn năng, vạn năng, đa tiềm năng, đơn năng", process: "Tái lập trình tế bào da thành iPSC bằng 4 yếu tố Yamanaka", app: "Ghép tủy trị ung thư máu, tiểu đường type 1, mô hình organoid" },
  { stt: 3, name: "Bài 3. Công nghệ tế bào động vật và thành tựu", cd: "Chuyên đề 1", concept: "Nuôi cấy tế bào động vật, dòng HeLa, liệu pháp gene soma/mầm", process: "SCNT chuyển nhân soma cừu Dolly; CRISPR/Cas9 cắt dán DNA", app: "Nhân bản gia súc, động vật chuyển gene tiết dược phẩm, thịt nhân tạo" },
  { stt: 4, name: "Bài 4. Dự án: Thành tựu công nghệ tế bào", cd: "Chuyên đề 1", concept: "Phương pháp luận nghiên cứu, bằng chứng khoa học vs quảng cáo", process: "Quy trình 6 bước: mục tiêu $\\to$ kế hoạch $\\to$ thu thập $\\to$ báo cáo", app: "Poster khoa học, tập san về thịt nuôi cấy và liệu pháp tế bào gốc" },
  { stt: 5, name: "Bài 5. Khái quát về công nghệ enzyme", cd: "Chuyên đề 2", concept: "Xúc tác sinh học, giảm năng lượng hoạt hóa $E_a$, đặc hiệu", process: "Mô hình phù hợp cảm ứng Koshland; điều hòa dị lập thể", app: "Tối ưu hóa phản ứng sinh hóa, kiểm soát chuyển hóa tế bào" },
  { stt: 6, name: "Bài 6. Quy trình công nghệ sản xuất enzyme", cd: "Chuyên đề 2", concept: "Nuôi cấy bề mặt (nổi) vs nuôi cấy bề sâu (chìm); enzyme nội/ngoại bào", process: "3 giai đoạn: tạo nguồn $\\to$ tách chiết đệm lạnh (3–5°C) $\\to$ đông khô", app: "Sản xuất amylase từ nấm mốc, protease nuôi chìm, urease hạt đậu" },
  { stt: 7, name: "Bài 7. Ứng dụng của enzyme", cd: "Chuyên đề 2", concept: "Đa ngành: thực phẩm, y dược, sinh học phân tử, môi trường", process: "Cắt liên kết đặc hiệu: protease, amylase, pectinase, Taq, ligase", app: "Làm mềm thịt, trong nước táo, sản xuất phô mai, xét nghiệm PCR" },
  { stt: 8, name: "Bài 8. Dự án: Ứng dụng của enzyme", cd: "Chuyên đề 2", concept: "Amylase mầm thóc thủy phân tinh bột; Eco-enzyme từ rác vỏ quả", process: "Ủ mầm lúa 5–7 ngày $\\to$ trộn cơm xôi 55–60°C trong 14h $\\to$ cô mạch nha", app: "Sản xuất mạch nha nếp dẻo thơm, làm nước tẩy rửa enzyme sinh học" },
  { stt: 9, name: "Bài 9. Vai trò của vi sinh vật trong xử lí ô nhiễm", cd: "Chuyên đề 3", concept: "Hấp phụ kim loại nặng màng nhầy EPS, phân giải polymer rác", process: "Tích lũy nội bào, biến đổi hóa trị $Cr^{6+} \\to Cr^{3+}$ kết tủa", app: "Xử lí nước rỉ rác, nước thải xi mạ kim loại, bảo vệ chuỗi thức ăn" },
  { stt: 10, name: "Bài 10. Phân giải các hợp chất làm ô nhiễm", cd: "Chuyên đề 3", concept: "Hiếu khí (bùn hoạt tính), kị khí 4 pha, xenobiotics khó tan", process: "Ủ bùn Aerotank; 4 pha biogas; thủy phân enzym $\\to$ cồn bio-ethanol", app: "Xử lí nước thải đô thị, cồn sinh học $E_5$, phục hồi đất nhiễm dầu" },
  { stt: 11, name: "Bài 11. Công nghệ ứng dụng vi sinh vật môi trường", cd: "Chuyên đề 3", concept: "In-situ Bioremediation, màng sinh học biofilm, phân bón compost", process: "Hầm Biogas tạo $CH_4$ (58–75%); diễn thế 4 pha nhiệt độ ủ phân 60–80°C", app: "Hầm Biogas chăn nuôi phát điện, ủ rác hữu cơ thành phân bón vi sinh" },
  { stt: 12, name: "Bài 12. Dự án: Điều tra vi sinh vật môi trường địa phương", cd: "Chuyên đề 3", concept: "Nhận diện điểm nóng ô nhiễm, phân loại rác, an toàn thực địa", process: "5 bước khảo sát an toàn: kế hoạch $\\to$ thực địa $\\to$ xử lí $\\to$ báo cáo", app: "Báo cáo điều tra mô hình hầm biogas, ủ rơm rạ bằng *Trichoderma*" }
];

const arenaQuestions = [
  {
    q: "Câu 1: Cơ sở sinh học tế bào giúp tế bào thực vật chuyên hóa có thể phát triển thành một cơ thể hoàn chỉnh trong môi trường nuôi cấy nhân tạo là gì?",
    options: [
      "A. Tính toàn năng của tế bào và khả năng giải biệt hóa",
      "B. Khả năng tự thụ phấn liên tục của tế bào sinh dưỡng",
      "C. Sự biến đổi tế bào soma thành giao tử đơn bội",
      "D. Tế bào thực vật không chứa nhân tế bào"
    ],
    correct: 0,
    explain: "Mỗi tế bào thực vật chứa trọn vẹn thông tin di truyền của cơ thể (tính toàn năng). Khi được cảm ứng thích hợp, chúng có thể giải biệt hóa quay về trạng thái phôi sinh (mô sẹo) rồi tái biệt hóa thành cây hoàn chỉnh."
  },
  {
    q: "Câu 2: Trong nuôi cấy mô sẹo thực vật, tỉ lệ hormone nào sau đây kích thích sự hình thành và phát triển của chồi cây?",
    options: [
      "A. Tỉ lệ Auxin cao hơn nhiều so với Cytokinin",
      "B. Tỉ lệ Cytokinin cao hơn so với Auxin",
      "C. Tỉ lệ Auxin và Cytokinin hoàn toàn bằng nhau",
      "D. Chỉ bổ sung hormone Ethylene và Axit Abscisic"
    ],
    correct: 1,
    explain: "Trong công nghệ tế bào thực vật: Cytokinin > Auxin kích thích ra chồi; Auxin > Cytokinin kích thích ra rễ; Auxin = Cytokinin kích thích phân chia duy trì mô sẹo."
  },
  {
    q: "Câu 3: Đột phá quan trọng nhất của công nghệ tế bào gốc vạn năng cảm ứng (iPSC) do Shinya Yamanaka phát minh là gì?",
    options: [
      "A. Tái lập trình tế bào sinh dưỡng trưởng thành thành tế bào gốc vạn năng mà không phá hủy phôi",
      "B. Nhân bản thành công động vật có vú đầu tiên trên thế giới",
      "C. Sản xuất vaccine mRNA kháng virus corona",
      "D. Chuyển gene kháng sâu từ vi khuẩn vào cây bông"
    ],
    correct: 0,
    explain: "Công nghệ iPSC đưa 4 yếu tố phiên mã (Oct4, Sox2, Klf4, c-Myc) vào tế bào sinh dưỡng trưởng thành để chuyển hóa thành tế bào gốc vạn năng, loại bỏ hoàn toàn rào cản đạo đức phá hủy phôi thai người."
  },
  {
    q: "Câu 4: Trong quy trình nhân bản vô tính cừu Dolly, tế bào cho nhân (tuyến vú) được xử lí ở trạng thái sinh lí nào trước khi chuyển nhân?",
    options: [
      "A. Đang ở kì giữa của quá trình nguyên phân",
      "B. Đồng bộ chu kì tế bào về trạng thái nghỉ pha G0 bằng phương pháp nuôi đói dinh dưỡng",
      "C. Đang ở kì sau của quá trình giảm phân II",
      "D. Đang nhân đôi DNA ở pha S"
    ],
    correct: 1,
    explain: "Tế bào tuyến vú của cừu cho nhân được nuôi cấy trong môi trường nghèo dinh dưỡng để làm chậm quá trình trao đổi chất, đồng bộ hóa chu kì tế bào về pha G0 trước khi chuyển vào trứng đã hút bỏ nhân."
  },
  {
    q: "Câu 5: Điểm khác biệt mấu chốt giữa liệu pháp gene ở tế bào soma và liệu pháp gene ở tế bào mầm là gì?",
    options: [
      "A. Liệu pháp tế bào soma dùng vector virus, còn tế bào mầm không thể dùng vector",
      "B. Biến đổi di truyền ở tế bào soma không truyền cho đời sau, còn ở tế bào mầm có thể di truyền cho các thế hệ tương lai",
      "C. Liệu pháp tế bào mầm chỉ áp dụng cho người già",
      "D. Liệu pháp tế bào soma có thể chữa khỏi mọi bệnh ung thư di truyền"
    ],
    correct: 1,
    explain: "Liệu pháp gene tế bào soma chỉ sửa chữa các tế bào sinh dưỡng của người bệnh nên không di truyền cho con cháu; trong khi liệu pháp tế bào mầm can thiệp vào giao tử/hợp tử nên sẽ di truyền cho muôn đời sau, tiềm ẩn nguy cơ đạo đức lớn."
  },
  {
    q: "Câu 6: Vai trò xúc tác của enzyme trong các phản ứng chuyển hóa sinh học là gì?",
    options: [
      "A. Làm tăng nhiệt độ và áp suất của hệ phản ứng",
      "B. Làm giảm năng lượng hoạt hóa (Ea) của phản ứng, giúp phản ứng xảy ra nhanh ở điều kiện sinh lí ôn hòa",
      "C. Làm biến đổi trạng thái cân bằng của phản ứng thuận nghịch",
      "D. Cung cấp năng lượng ATP trực tiếp để biến đổi cơ chất"
    ],
    correct: 1,
    explain: "Enzyme đóng vai trò chất xúc tác sinh học làm giảm năng lượng hoạt hóa ($E_a$), tạo điều kiện cho các phân tử cơ chất đạt trạng thái chuyển tiếp và phản ứng xảy ra nhanh chóng trong điều kiện cơ thể sống."
  },
  {
    q: "Câu 7: Theo mô hình 'Phù hợp cảm ứng' (Induced Fit) của Koshland, khi cơ chất tiếp cận trung tâm hoạt động thì điều gì sẽ xảy ra?",
    options: [
      "A. Trung tâm hoạt động hoàn toàn cố định như chìa khóa tra vào ổ khóa",
      "B. Cấu hình không gian của trung tâm hoạt động biến đổi linh hoạt để ôm khít cơ chất",
      "C. Phân tử enzyme bị phân rã hoàn toàn thành các acid amin tự do",
      "D. Cơ chất bị đẩy văng ra khỏi bề mặt enzyme"
    ],
    correct: 1,
    explain: "Mô hình phù hợp cảm ứng khẳng định trung tâm hoạt động có tính linh động; khi tiếp xúc với cơ chất, enzyme cảm ứng thay đổi nhẹ cấu hình không gian để gắn kết tối ưu với cơ chất."
  },
  {
    q: "Câu 8: Trong quá trình sản xuất enzyme công nghiệp, tại sao công đoạn tách chiết bắt buộc phải thao tác trong dung dịch đệm lạnh (khoảng 3–5°C)?",
    options: [
      "A. Để làm đóng băng cơ chất không cho phản ứng xảy ra",
      "B. Để giữ ổn định cấu hình không gian bậc 3, bậc 4 của enzyme và kìm hãm hoạt tính phá hủy của protease nội sinh",
      "C. Để tiêu diệt toàn bộ vi khuẩn tạp nhiễm trong dung dịch",
      "D. Để enzyme kết tủa ngay lập tức mà không cần hóa chất"
    ],
    correct: 1,
    explain: "Nhiệt độ thấp 3–5°C giúp bảo tồn các liên kết yếu (liên kết hydro, tương tác kị nước) duy trì cấu hình hoạt tính của enzyme, đồng thời kìm hãm hoạt tính của enzyme protease nội bào tránh làm hỏng enzyme mục tiêu."
  },
  {
    q: "Câu 9: Phương pháp làm khô nào được ưu tiên ứng dụng để tạo chế phẩm enzyme dạng bột tinh khiết mà không làm mất hoạt tính protein?",
    options: [
      "A. Đun sôi ở áp suất thường",
      "B. Sấy thăng hoa (đông khô) dưới áp suất chân không ở nhiệt độ âm",
      "C. Phơi trực tiếp dưới ánh nắng mặt trời gắt",
      "D. Rang sấy trong lò vi sóng công suất lớn"
    ],
    correct: 1,
    explain: "Sấy thăng hoa (đông khô) làm nước đá chuyển trực tiếp từ thể rắn sang thể khí dưới áp suất chân không ở nhiệt độ âm, loại bỏ hoàn toàn nước mà không gây biến tính nhiệt đối với protein enzyme."
  },
  {
    q: "Câu 10: Enzyme Taq polymerase được ứng dụng làm chất xúc tác then chốt trong kĩ thuật di truyền nào sau đây?",
    options: [
      "A. Nhân bản vô tính động vật có vú",
      "B. Phản ứng chuỗi trùng hợp khuếch đại DNA (PCR)",
      "C. Thủy phân tinh bột làm phô mai",
      "D. Chuyển gene bằng súng bắn gene"
    ],
    correct: 1,
    explain: "Taq polymerase (tách từ vi khuẩn chịu nhiệt *Thermus aquaticus*) chịu được nhiệt độ cao 95°C trong chu trình nhiệt của phản ứng PCR để kéo dài chuỗi tổng hợp bản sao DNA."
  },
  {
    q: "Câu 11: Trong công nghiệp chế biến sữa, enzyme Rennet (chứa Chymosin) được sử dụng nhằm mục đích gì?",
    options: [
      "A. Lên men đường lactose thành rượu vang",
      "B. Thủy phân chọn lọc kappa-casein để làm đông tụ protein sữa sản xuất phô mai",
      "C. Tiệt trùng sữa tươi thay thế đun sôi",
      "D. Tẩy trắng màu vàng của mỡ sữa"
    ],
    correct: 1,
    explain: "Chymosin trong enzyme rennet cắt đặc hiệu liên kết peptide của $\\kappa-casein$, phá vỡ lớp vỏ ưa nước bảo vệ của mixen sữa làm protein đông tụ thành khối curd để sản xuất phô mai."
  },
  {
    q: "Câu 12: Trong quy trình làm mạch nha truyền thống, enzyme amylase thủy phân tinh bột nếp thành đường maltose có nguồn gốc từ đâu?",
    options: [
      "A. Tổng hợp tự nhiên trong mầm hạt lúa nếp khi nảy mầm",
      "B. Do vi khuẩn lactic tiết ra trong quá trình lên men chua",
      "C. Chiết xuất từ tuyến nước bọt của động vật",
      "D. Có sẵn trong hạt gạo nếp đã xay xát trắng"
    ],
    correct: 0,
    explain: "Khi hạt thóc nếp nảy mầm (mộng lúa), phôi hạt kích hoạt tổng hợp lượng lớn enzyme $\\alpha-amylase$ và $\\beta-amylase$ để thủy phân tinh bột dự trữ trong nội nhũ thành đường nuôi cây mầm."
  },
  {
    q: "Câu 13: Khi ủ cơm xôi nếp với bột mầm lúa để làm mạch nha, nhiệt độ ủ tối ưu cần kiểm soát nghiêm ngặt là bao nhiêu?",
    options: [
      "A. 15–20°C (nhiệt độ tủ lạnh)",
      "B. 55–60°C (nhiệt độ tối ưu cho amylase và ngăn ngừa lên men chua)",
      "C. 85–90°C (nhiệt độ gần sôi)",
      "D. 100°C (nhiệt độ sôi)"
    ],
    correct: 1,
    explain: "Nhiệt độ 55–60°C là khoảng nhiệt độ tối ưu của enzyme amylase mầm lúa, đồng thời kìm hãm tiêu diệt các vi khuẩn lên men chua hoang dại, đảm bảo dịch mạch nha ngọt thanh và không bị thiu."
  },
  {
    q: "Câu 14: Cơ chế nào giúp màng nhầy ngoại bào (EPS) của vi sinh vật có thể hấp phụ và giữ chặt các ion kim loại nặng trong nước thải?",
    options: [
      "A. Các nhóm chức tích điện âm (carboxyl, phosphate) tạo liên kết tĩnh điện với cation kim loại nặng tích điện dương",
      "B. Vi sinh vật thực bào nuốt các hạt kim loại lớn vào không bào",
      "C. Enzyme của vi sinh vật quang hợp biến kim loại thành khí oxy",
      "D. Màng nhầy biến kim loại nặng thành chất phóng xạ"
    ],
    correct: 0,
    explain: "Màng nhầy ngoại bào EPS chứa các nhóm chức mang điện tích âm ($-COO^-, -PO_4^{3-}$) tương tác tĩnh điện và liên kết phối trí với các cation kim loại nặng ($Pb^{2+}, Cd^{2+}, Cu^{2+}$) giúp cố định và lắng tụ chúng."
  },
  {
    q: "Câu 15: Trong công nghệ xử lí nước thải bằng bùn hoạt tính (bể Aerotank), điều kiện bắt buộc nào phải được duy trì liên tục?",
    options: [
      "A. Cắt đứt hoàn toàn nguồn oxy và che tối tuyệt đối",
      "B. Sục khí cung cấp oxy hòa tan (DO) liên tục cho vi sinh vật hiếu khí",
      "C. Đun sôi nước thải liên tục ở 100°C",
      "D. Bổ sung hóa chất javel khử trùng toàn bộ bể"
    ],
    correct: 1,
    explain: "Bùn hoạt tính trong bể Aerotank bao gồm tập đoàn vi sinh vật hiếu khí; chúng bắt buộc cần oxy hòa tan làm chất nhận electron để oxy hóa các chất hữu cơ gây ô nhiễm thành $CO_2$ và nước."
  },
  {
    q: "Câu 16: Nhóm sinh vật nào thực hiện giai đoạn cuối cùng trong quá trình phân giải kị khí để sinh ra khí đốt Methane (CH4)?",
    options: [
      "A. Nấm sợi men bia",
      "B. Cổ khuẩn sinh methane (Methanogenic Archaea)",
      "C. Tảo lục đơn bào",
      "D. Vi khuẩn lam cố định đạm"
    ],
    correct: 1,
    explain: "Giai đoạn 4 (Methane hóa) trong hầm biogas được xúc tác độc quyền bởi nhóm Cổ khuẩn sinh methane (Methanogens thuộc giới Archaea), chuyển hóa acetate và $H_2 + CO_2$ thành khí $CH_4$."
  },
  {
    q: "Câu 17: Thuật ngữ 'Xenobiotics' dùng trong công nghệ xử lí môi trường để chỉ nhóm chất nào sau đây?",
    options: [
      "A. Các hợp chất hữu cơ dễ phân hủy sinh học như glucose và acid amin",
      "B. Các hợp chất tổng hợp nhân tạo xa lạ với sinh giới tự nhiên, cấu trúc bền vững khó phân giải (thuốc trừ sâu, dioxin, nhựa PET)",
      "C. Các vitamin và khoáng chất thiết yếu trong đất",
      "D. Nước mưa tự nhiên vùng đồng bằng"
    ],
    correct: 1,
    explain: "Xenobiotics là các chất hóa học do con người tổng hợp nhân tạo (thuốc trừ sâu clo hữu cơ, dioxin, PAH, nhựa tổng hợp) không tồn tại tự nhiên trong sinh giới, có cấu trúc bền vững và tích lũy sinh học độc hại."
  },
  {
    q: "Câu 18: Khí Methane (CH4) chiếm khoảng bao nhiêu phần trăm thể tích trong hỗn hợp khí sinh học Biogas tiêu chuẩn?",
    options: [
      "A. 10–20%",
      "B. 58–75%",
      "C. 95–99%",
      "D. Dưới 5%"
    ],
    correct: 1,
    explain: "Khí Biogas tiêu chuẩn chứa khoảng 58–75% khí methane ($CH_4$), 25–42% $CO_2$, và một lượng nhỏ hơi nước cùng khí độc $H_2S$."
  },
  {
    q: "Câu 19: Trong quá trình ủ phân hữu cơ hiếu khí (composting), pha nhiệt độ đỉnh cao đạt 60–80°C có tác dụng sinh học tối quan trọng nào?",
    options: [
      "A. Tiêu diệt hoàn toàn các mầm bệnh, vi khuẩn có hại, trứng giun sán và làm ung thối hạt cỏ dại",
      "B. Làm đống phân bốc cháy thành than hoạt tính",
      "C. Làm đông cứng đống phân thành tảng đá",
      "D. Tiêu diệt toàn bộ vi sinh vật có lợi khiến phân không thể hoai mục"
    ],
    correct: 0,
    explain: "Nhiệt độ 60–80°C do vi sinh vật hô hấp tỏa ra có tác dụng tiệt trùng sinh học tự nhiên: tiêu diệt vi khuẩn gây bệnh ($Salmonella, E. coli$), trứng giun sán và làm mất khả năng nảy mầm của hạt cỏ dại lẫn trong phân rác."
  },
  {
    q: "Câu 20: Ứng dụng nấm đối kháng *Trichoderma* để xử lí rơm rạ sau thu hoạch ngay trên đồng ruộng mang lại lợi ích nổi bật nào?",
    options: [
      "A. Tiêu diệt toàn bộ các loài động vật thủy sinh trong ruộng",
      "B. Phân giải nhanh rơm rạ thành mùn hữu cơ, tránh đốt rơm gây ô nhiễm khói bụi và phòng ngừa ngộ độc hữu cơ cho rễ lúa",
      "C. Làm biến đổi cây lúa thành cây ngô",
      "D. Làm tăng lượng phát thải khí nhà kính gấp đôi"
    ],
    correct: 1,
    explain: "Nấm *Trichoderma* tiết enzyme cellulase cực mạnh giúp rơm rạ hoai mục thành phân bón hữu cơ chỉ sau 7–10 ngày cày lật đất, chấm dứt tập quán đốt rơm rạ gây ô nhiễm bụi mịn và phòng chống ngộ độc hữu cơ nghẹt rễ cho vụ mùa kế tiếp."
  }
];

const outData = {
  chuyendeList,
  processSummaryTable,
  lessonOverviewTable,
  arenaQuestions
};

fs.writeFileSync(path.join(__dirname, 'sinh10_data.json'), JSON.stringify(outData, null, 2), 'utf8');
console.log('Successfully generated scratch/sinh10_data.json!');
