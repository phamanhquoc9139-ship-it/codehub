// scratch/sinhhoc11_data_p2.js
// Chương 3 (Bài 19-23), Chương 4 (Bài 24-27), Chương 5 (Bài 28-29)
// 7 Nhóm sơ đồ bắt buộc, Checklist thí nghiệm & an toàn, 20 câu hỏi Đấu trường 45 phút

const p2_lessons = {
  // CHƯƠNG 3: SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT (Bài 19-23)
  19: {
    num: 19,
    chapter: 3,
    isPractical: false,
    title: "Khái quát về sinh trưởng và phát triển ở sinh vật",
    subtitle: "Khái niệm, mối quan hệ giữa sinh trưởng và phát triển, các giai đoạn trong vòng đời",
    objectives: [
      "Phân biệt rõ ràng khái niệm sinh trưởng (tăng kích thước, khối lượng tế bào) và phát triển (phân hóa cấu trúc, phát sinh hình thái, ra hoa kết quả).",
      "Phân tích mối quan hệ biện chứng gắn bó giữa sinh trưởng và phát triển trong chu trình sống.",
      "Mô tả các nhân tố chi phối bên trong (di truyền, hormone) và bên ngoài (nhiệt độ, ánh sáng, nước, dinh dưỡng)."
    ],
    concepts: [
      {
        term: "Sinh trưởng (Growth)",
        def: "Là sự gia tăng kích thước và khối lượng của cơ thể sinh vật do tăng số lượng và kích thước của các tế bào, là biến đổi định lượng không thuận nghịch."
      },
      {
        term: "Phát triển (Development)",
        def: "Là toàn bộ những biến đổi về chất diễn ra trong vòng đời của cá thể, bao gồm 3 quá trình liên quan mật thiết: Sinh trưởng, Phân hóa tế bào (tạo các mô, cơ quan chuyên biệt) và Phát sinh hình thái (hình thành các cơ quan mới như lá, hoa, mầm chồi)."
      },
      {
        term: "Mối quan hệ Sinh trưởng - Phát triển",
        def: "Sinh trưởng là tiền đề cơ sở vật chất cho phát triển; ngược lại, phát triển làm thay đổi tốc độ và chất lượng của quá trình sinh trưởng ở giai đoạn kế tiếp."
      },
      {
        term: "Vòng đời (Life cycle)",
        def: "Khoảng thời gian tính từ khi cá thể được sinh ra (hợp tử hình thành) lớn lên, trưởng thành, sinh sản thế hệ mới cho đến khi chết đi do lão hóa."
      }
    ],
    process: {
      title: "Sơ đồ chuyển tiếp giữa sinh trưởng và phát triển trong vòng đời sinh vật",
      steps: [
        "1. Thụ tinh tạo hợp tử (Zygote) mang bộ gen đặc trưng.",
        "2. Phân chia nguyên phân liên tiếp làm gia tăng số lượng tế bào (Sinh trưởng giai đoạn phôi).",
        "3. Phân hóa tế bào biệt hóa thành các dòng mô chuyên trách (Mô thần kinh, cơ, biểu bì ở động vật; Mô mạch, mô giậu ở thực vật).",
        "4. Phát sinh hình thái tạo các cơ quan chức năng hoàn chỉnh (Cơ thể con non).",
        "5. Sinh trưởng hậu phôi lớn lên đạt kích thước cơ thể trưởng thành.",
        "6. Phát triển thành thục sinh dục: Ra hoa tạo quả ở cây; sinh giao tử và kết đôi sinh sản ở động vật."
      ],
      flowSummary: "Hợp tử → Nguyên phân tăng tế bào (Sinh trưởng) → Phân hóa tế bào → Phát sinh hình thái → Cơ thể trưởng thành → Sinh sản thế hệ mới."
    },
    mechanism: "Sự phân hóa tế bào trong quá trình phát triển không làm mất vật chất di truyền DNA mà do sự biểu hiện gen chọn lọc (differential gene expression): Từng nhóm gen chuyên biệt được bật (kích hoạt phiên mã) trong khi các gen khác bị đóng (bất hoạt) dưới tác động của tín hiệu hormone và vị trí không gian của tế bào trong phôi.",
    applications: [
      "Nông nghiệp: Xác định thời điểm cây tích lũy đủ sinh trưởng để kích thích ra hoa (bằng cách cắt nước, khoanh vỏ hoặc phun kích tố).",
      "Chăn nuôi: Cung cấp dinh dưỡng giàu đạm và canxi tối ưu trong giai đoạn sinh trưởng vỗ béo con non nhằm rút ngắn chu kì xuất chuồng.",
      "Y học: Bổ sung vi chất dinh dưỡng (acid folic, kẽm, sắt, iod) trong giai đoạn mang thai để phôi thai phát triển các cơ quan hoàn hảo, tránh dị tật bẩm sinh."
    ],
    experimentsNote: "Đo tốc độ sinh trưởng của mầm rễ đậu xanh: Đánh dấu các vạch cách nhau 1mm bằng mực không phai trên chóp rễ non; sau 24 giờ đo khoảng cách giữa các vạch để xác định vùng kéo dài sinh trưởng mạnh nhất.",
    quiz: [
      {
        q: "Quá trình nào sau đây là ví dụ điển hình về sự phát triển (biến đổi về chất) ở thực vật có hoa?",
        options: [
          "A. Cây ngô tăng chiều cao thêm 5 cm sau 3 ngày",
          "B. Cây cam bắt đầu phân hóa mầm hoa và nở hoa kết trái",
          "C. Rễ cây tăng thêm 200 lông hút mới",
          "D. Diện tích bề mặt phiến lá rộng thêm 2 cm²"
        ],
        answer: 1,
        explain: "Ra hoa là quá trình phát triển, đánh dấu sự chuyển từ pha sinh trưởng sinh dưỡng sang pha sinh sản và hình thành các cơ quan mới hoàn toàn về chất."
      },
      {
        q: "Hiện tượng nào sau đây phản ánh đúng bản chất của sự phân hóa tế bào trong quá trình phát triển phôi?",
        options: [
          "A. Mỗi tế bào chỉ giữ lại một đoạn nhiễm sắc thể ngắn",
          "B. Tế bào phân chia nhưng không tăng số lượng gen",
          "C. Các gen giống nhau ở mọi tế bào nhưng chỉ có một số gen nhất định được biểu hiện (phiên mã/dịch mã) tùy theo loại mô",
          "D. Tế bào hấp thụ các phân tử protein lạ từ môi trường ngoài"
        ],
        answer: 2,
        explain: "Tất cả các tế bào đều mang hệ gen hoàn chỉnh giống hợp tử gốc; sự phân hóa tế bào xảy ra do cơ chế điều hòa biểu hiện gen sai khác."
      },
      {
        q: "Mối quan hệ giữa sinh trưởng và phát triển được biểu hiện như thế nào?",
        options: [
          "A. Là hai quá trình độc lập hoàn toàn, không liên quan đến nhau",
          "B. Sinh trưởng là nền tảng điều kiện cho phát triển; phát triển định hướng và làm thay đổi tốc độ sinh trưởng",
          "C. Sinh trưởng luôn xảy ra sau khi cơ thể đã hoàn tất phát triển",
          "D. Cơ thể chỉ phát triển khi dừng hẳn toàn bộ mọi quá trình sinh trưởng"
        ],
        answer: 1,
        explain: "Cơ thể phải tích lũy đủ về lượng (kích thước, khối lượng tế bào qua sinh trưởng) mới đạt ngưỡng biến đổi về chất (phát triển); khi đã chuyển pha, phát triển điều hòa lại nhịp sinh trưởng."
      }
    ]
  },

  20: {
    num: 20,
    chapter: 3,
    isPractical: false,
    title: "Sinh trưởng và phát triển ở thực vật",
    subtitle: "Mô phân sinh (đỉnh, bên, lóng), sinh trưởng sơ cấp vs thứ cấp, hệ hormone và quang chu kì",
    objectives: [
      "Phân biệt vị trí và chức năng của các loại mô phân sinh: Mô phân sinh đỉnh, mô phân sinh bên (tầng sinh mạch, tầng sinh bần) và mô phân sinh lóng.",
      "So sánh bản chất của sinh trưởng sơ cấp (tăng chiều dài) và sinh trưởng thứ cấp (tăng đường kính thân ở cây Hai lá mầm).",
      "Trình bày vai trò sinh lí của 5 nhóm hormone thực vật: Nhóm kích thích (Auxin, Gibberellin, Cytokinin) và nhóm ức chế (Abscisic acid - ABA, Ethylene).",
      "Giải thích hiện tượng quang chu kì, vai trò của sắc tố Phitocrom và hiện tượng xuân hóa trong sự ra hoa của cây."
    ],
    concepts: [
      {
        term: "Mô phân sinh (Meristem)",
        def: "Nhóm tế bào chưa phân hóa, duy trì khả năng nguyên phân liên tục trong suốt đời sống của cây: Gồm Mô phân sinh đỉnh (chồi ngọn, chóp rễ), Mô phân sinh lóng (ở cây Một lá mầm như tre, mía) và Mô phân sinh bên (ở thân cây Hai lá mầm)."
      },
      {
        term: "Sinh trưởng sơ cấp vs Thứ cấp",
        def: "Sinh trưởng sơ cấp: Do mô phân sinh đỉnh hoạt động làm dài thân và rễ (có ở cả cây Một lá mầm và Hai lá mầm); Sinh trưởng thứ cấp: Do mô phân sinh bên (tầng phát sinh mạch và tầng sinh bần) hoạt động tạo gỗ thứ cấp và rây thứ cấp, làm to đường kính thân (chỉ có ở cây Hai lá mầm và Hạt trần)."
      },
      {
        term: "Nhóm hormone kích thích sinh trưởng",
        def: "Auxin (kéo dài tế bào, kích thích ra rễ phụ, ưu thế ngọn); Gibberellin - GA (kéo dài lóng thân vươn cao, phá ngủ hạt, kích nở hoa quả không hạt); Cytokinin (kích thích phân chia tế bào, chồi bên phát triển, làm chậm lão hóa lá)."
      },
      {
        term: "Nhóm hormone ức chế sinh trưởng",
        def: "Axit Abscisic - ABA (kích thích đóng khí khổng khi hạn hán, duy trì trạng thái ngủ nghỉ của hạt); Ethylene (hormone khí kích thích quả chín nhanh, rụng lá, rụng hoa và quả)."
      },
      {
        term: "Quang chu kì & Phitocrom",
        def: "Sự ra hoa của cây phụ thuộc vào tương quan độ dài ngày và đêm: Cây ngày ngắn (nở hoa khi đêm dài > đêm tới hạn: lúa, đậu tương, cúc); Cây ngày dài (nở hoa khi đêm ngắn: lúa mì, sen); Cây trung tính (ra hoa phụ thuộc độ tuổi: cà chua, ngô). Sắc tố cảm nhận quang chu kì là Phitocrom (P₆₆₀ và P₇₃₀)."
      }
    ],
    process: {
      title: "Tiến trình hình thành vòng năm gỗ và tác động đối kháng giữa các hormone cây",
      steps: [
        "1. Hoạt động tầng sinh mạch mùa xuân (ấm ẩm): Phân chia mạnh tạo các mạch gỗ to, thành mỏng, màu sáng gọi là gỗ sớm.",
        "2. Hoạt động tầng sinh mạch mùa thu - đông (khô lạnh): Phân chia chậm tạo các tế bào gỗ nhỏ, thành dày, màu sẫm gọi là gỗ muộn.",
        "3. Hình thành vòng năm: Một dải gỗ sáng kết hợp một dải gỗ sẫm tạo nên 1 vòng sinh trưởng năm (Tree ring).",
        "4. Cân bằng Auxin / Cytokinin: Auxin cao ức chế chồi bên (ưu thế ngọn), khi bấm ngọn -> Cytokinin ưu thế kích thích bật nhiều cành nhánh bên.",
        "5. Cân bằng GA / ABA: Mùa mưa ấm GA tăng phá ngủ giúp hạt nảy mầm; mùa đông khô ABA tăng ức chế nảy mầm đưa chồi vào ngủ đông."
      ],
      flowSummary: "Mô phân sinh đỉnh → Dài thân/rễ (Sơ cấp); Tầng sinh mạch → To thân tạo vòng năm gỗ (Thứ cấp); Cân bằng Hormone → Điều tiết nảy mầm, đâm chồi, ra hoa, chín quả."
    },
    mechanism: "Ethylene là một chất khí khuếch tán tự do qua khoảng gian bào. Khi quả bắt đầu già, nồng độ ethylene tăng vọt kích hoạt một loạt gen mã hóa các enzyme thủy phân: Amylase biến tinh bột thành đường ngọt, Pectinase phân giải pectin giữa các thành tế bào làm thịt quả mềm mại, và enzyme phân hủy diệp lục bộc lộ màu sắc chín rực rỡ (vàng, đỏ).",
    applications: [
      "Bấm ngọn tỉa cành: Bấm ngọn cây chè, hoa cúc, ớt để phá ưu thế ngọn giúp cây đâm nhiều chồi nhánh cho năng suất cao.",
      "Xử lí ra hoa trái vụ: Thắp đèn ban đêm ngắt quãng đêm dài ở cây thanh long (cây ngày dài) giúp kích thích ra hoa nghịch vụ bán giá cao.",
      "Giữ hạt giống: Phun ABA bảo quản hạt không bị nảy mầm trên bông khi gặp mưa kéo dài.",
      "Kích quả chín: Dấm chín quả bằng đất đèn (sinh khí axetilen tương tự ethylene) hoặc xếp quả chín cạnh quả xanh."
    ],
    experimentsNote: "Quan sát vòng năm trên thớt gỗ: Đếm số vòng ranh giới màu sẫm - sáng xen kẽ từ tâm ra ngoài vỏ để xác định chính xác tuổi thọ của cây thân gỗ.",
    quiz: [
      {
        q: "Loại mô phân sinh nào sau đây chỉ có ở cây Hai lá mầm và Hạt trần, chịu trách nhiệm làm tăng đường kính của thân cây?",
        options: [
          "A. Mô phân sinh đỉnh ngọn chồi",
          "B. Mô phân sinh đỉnh rễ",
          "C. Mô phân sinh lóng",
          "D. Mô phân sinh bên (Tầng sinh mạch và tầng sinh bần)"
        ],
        answer: 3,
        explain: "Mô phân sinh bên gồm tầng sinh mạch và sinh bần phân chia tạo lớp gỗ thứ cấp và vỏ thứ cấp dày lên hàng năm, là đặc trưng riêng của thực vật Hai lá mầm."
      },
      {
        q: "Khi ta bấm ngọn của một cây hoa cúc hoặc cây ớt, hiện tượng nào sau đây sẽ lập tức xảy ra sau vài ngày?",
        options: [
          "A. Cây lập tức khô héo và chết rụi",
          "B. Phá bỏ ưu thế ngọn, các chồi nách bên được giải phóng đâm nhánh sum suê",
          "C. Rễ cây ngừng hút nước và chất khoáng vĩnh viễn",
          "D. Thân cây teo tóp lại không thể phát triển"
        ],
        answer: 1,
        explain: "Ngọn chồi là nguồn sản xuất chính hormone Auxin gây ưu thế ngọn (ức chế chồi nách). Bấm ngọn làm giảm auxin, tỉ lệ Cytokinin/Auxin tăng cao kích thích bật chồi nách."
      },
      {
        q: "Để kích thích quả chuối xanh hoặc xoài xanh chín đồng loạt và ngọt mềm thơm tho, người ta thường ứng dụng loại hormone thực vật nào?",
        options: [
          "A. Ethylene (dạng khí hoặc chế phẩm giải phóng ethylene)",
          "B. Axit Abscisic (ABA)",
          "C. Auxin liều cao",
          "D. Cytokinin nồng độ đặc"
        ],
        answer: 0,
        explain: "Ethylene là hormone xúc tác quá trình chín ở quả: kích hoạt enzyme thủy phân tinh bột thành đường và enzyme làm mềm thành tế bào quả."
      }
    ]
  },

  21: {
    num: 21,
    chapter: 3,
    isPractical: true,
    title: "Thực hành: Bấm ngọn, tỉa cành; xử lí kích thích tố và tính tuổi cây",
    subtitle: "Kĩ thuật điều tiết ưu thế ngọn, xử lí hormone NAA ra rễ và đếm vòng năm xác định tuổi gỗ",
    objectives: [
      "Thực hiện thành thạo thao tác bấm ngọn và tỉa cành trên cây trồng thực tế; so sánh sinh trưởng cành nhánh sau xử lí.",
      "Khảo sát tác dụng kích thích ra rễ phụ của hormone Auxin tổng hợp (NAA / IBA) trên cành giâm.",
      "Quan sát mặt cắt ngang thân gỗ, phân biệt gỗ lõi, gỗ dác và tính chính xác tuổi thọ của cây dựa trên vòng sinh trưởng năm."
    ],
    hypothesis: "Bấm ngọn đỉnh chồi làm mất ưu thế ngọn, kích thích chồi nách phát triển mạnh; xử lí cành giâm bằng dung dịch Auxin (NAA) nồng độ thích hợp giúp rễ phụ bật nhanh và dày đặc hơn đối chứng; mỗi cặp dải gỗ sớm - muộn tương ứng 1 năm tuổi của cây.",
    variables: {
      independent: "Trạng thái ngọn chồi (bấm ngọn vs giữ nguyên ngọn đối chứng); xử lí dung dịch (ngâm gốc cành giâm vào NAA 50ppm vs nước cất đối chứng).",
      dependent: "Số lượng chồi nách vươn dài (cm); tỉ lệ cành giâm ra rễ và số lượng rễ phụ tạo thành sau 10 ngày.",
      controlled: "Cùng một giống cây trồng (cây đậu, cúc, rau ngót), cùng giá thể đất cát ẩm, cùng nhiệt độ và ánh sáng."
    },
    materials: [
      "Cây thí nghiệm: Chậu cây đậu tương/đậu xanh đang phát triển 4-5 lá thật; các cành rau ngót hoặc hoa hồng bánh tẻ khỏe mạnh.",
      "Hóa chất & Dụng cụ: Kéo tỉa cành chuyên dụng, dao chiết sắc, dung dịch hormone NAA nồng độ 50 ppm, cốc thủy tinh, bình phun sương, các khúc thớt gỗ thân cây mới cưa phẳng mặt."
    ],
    procedure: [
      "Thực hành 1 (Bấm ngọn, tỉa cành): Chọn 10 cây đậu đồng đều; 5 cây dùng kéo bấm bỏ 1cm đỉnh sinh trưởng của chồi ngọn (lô A); 5 cây giữ nguyên ngọn tự nhiên làm đối chứng (lô B). Chăm sóc 7 ngày và đo số lượng chồi nách, chiều dài cành bên.",
      "Thực hành 2 (Xử lí hormone giâm cành): Cắt vát 20 cành rau ngót bánh tẻ dài 15cm; 10 cành nhúng gốc ngập 2cm vào dung dịch NAA 50 ppm trong 15 phút (lô xử lí); 10 cành nhúng vào nước cất (lô đối chứng). Cắm cành vào khay cát ẩm, giữ ẩm hàng ngày. Sau 10-12 ngày nhổ nhẹ quan sát hệ rễ.",
      "Thực hành 3 (Tính tuổi cây): Đặt khúc gỗ cưa ngang dưới nguồn sáng tốt; dùng kính lúp soi từ tâm ruột ra ngoài mép vỏ; đếm lần lượt từng cặp vòng màu sáng (gỗ mùa mưa) và dải màu sẫm hẹp (gỗ mùa khô)."
    ],
    results: [
      "Kết quả TN1: Cây bị bấm ngọn (lô A) ngừng cao ngọn nhưng phát triển trung bình 3-4 cành nách mập mạp dài 8-12 cm; cây đối chứng (lô B) chỉ có 1 thân chính vươn cao, chồi nách hầu như ngủ yên.",
      "Kết quả TN2: Cành xử lí NAA cho tỉ lệ ra rễ đạt 100%, mỗi cành đâm từ 15-25 rễ phụ dài trắng muốt; cành đối chứng chỉ có 30% ra rễ với 2-4 rễ ngắn còi cọc.",
      "Kết quả TN3: Đếm được rõ ràng các vòng đồng tâm trên thớt gỗ, xác định được tuổi thọ của cây cưa gỗ và quan sát thấy các năm hạn hán vòng gỗ hẹp hơn hẳn các năm mưa thuận gió hòa."
    ],
    conclusionAndSafety: [
      "Kết luận: Bấm ngọn giải phóng chồi nách, tăng năng suất cành tán; Auxin NAA kích thích phân hóa tế bào tầng phát sinh thành rễ phụ cực mạnh; vòng năm là chỉ số sinh học chính xác ghi lại tuổi thọ và biến động khí hậu qua các năm của cây gỗ.",
      "Lưu ý an toàn: Kéo tỉa cành và dao cắt rất sắc, luôn lia mũi kéo hướng ra phía ngoài cơ thể, không đùa nghịch; hóa chất hormone thực vật phải đong đo chính xác bằng ống hút tự động, đeo găng tay cao su khi pha chế, không để tiếp xúc da."
    ],
    quiz: [
      {
        q: "Khi giâm cành rau ngót hoặc cành hoa hồng, người ta nhúng gốc cành vào dung dịch hormone Auxin NAA nhằm mục đích chính là gì?",
        options: [
          "A. Tiêu diệt toàn bộ sâu bọ bám trên thân",
          "B. Kích thích sự phân hóa tế bào nhu mô tạo cụm rễ bất định phụ nhanh chóng và dồi dào",
          "C. Làm cho lá cành giâm lập tức rụng hết",
          "D. Làm cho cành nở hoa ngay ngày hôm sau"
        ],
        answer: 1,
        explain: "Auxin kích thích sự khử phân hóa và tái phân hóa của các tế bào mô liên kết ở vết cắt thành mô rễ phụ (rễ bất định), giúp cành giâm bén rễ nhanh và tỉ lệ sống sót cao."
      },
      {
        q: "Một vòng năm sinh trưởng của cây thân gỗ nhiệt đới hoàn chỉnh được cấu tạo bởi những dải nào?",
        options: [
          "A. Một dải vỏ bần bên ngoài và một dải tế bào mạch rây bên trong",
          "B. Một dải gỗ sáng màu (hình thành vào mùa ấm ẩm sinh trưởng nhanh) kết hợp với một dải gỗ sẫm màu (hình thành vào mùa khô lạnh sinh trưởng chậm)",
          "C. Hai dải tế bào ruột không bào",
          "D. Ba dải tế bào biểu bì sừng hóa"
        ],
        answer: 1,
        explain: "Một năm sinh trưởng tạo 1 tầng gỗ sớm (màu sáng, mạch to) và 1 tầng gỗ muộn (màu sẫm, mạch nhỏ thành dày ép chặt), tạo thành một ranh giới rõ rệt gọi là vòng năm."
      },
      {
        q: "Khi đếm vòng năm trên một khúc gỗ cắt ngang, người ta đếm được 18 dải màu sẫm hẹp đồng tâm. Cây gỗ này có tuổi đời xấp xỉ bao nhiêu năm?",
        options: [
          "A. 9 năm",
          "B. 18 năm",
          "C. 36 năm",
          "D. 72 năm"
        ],
        answer: 1,
        explain: "Mỗi dải gỗ sẫm đánh dấu sự kết thúc của một chu kì sinh trưởng năm, do đó 18 dải gỗ sẫm tương ứng với khoảng 18 năm tuổi của cây."
      }
    ]
  },

  22: {
    num: 22,
    chapter: 3,
    isPractical: false,
    title: "Sinh trưởng và phát triển ở động vật",
    subtitle: "Biến thái hoàn toàn, không hoàn toàn, không qua biến thái và các hormone điều hòa",
    objectives: [
      "Phân biệt 3 hình thức phát triển ở động vật: Phát triển không qua biến thái, phát triển qua biến thái hoàn toàn và phát triển qua biến thái không hoàn toàn.",
      "Phân tích vai trò của các hormone điều hòa sinh trưởng ở động vật có xương sống (GH, Thyroxine, Estrogen, Testosterone).",
      "Trình bày tác dụng phối hợp của hormone Ecdysone và Juvenile trong quá trình lột xác và biến thái ở côn trùng.",
      "Nêu các nhân tố môi trường ảnh hưởng đến sinh trưởng phát triển và biện pháp phòng chống suy dinh dưỡng ở trẻ em."
    ],
    concepts: [
      {
        term: "Biến thái (Metamorphosis)",
        def: "Sự thay đổi đột ngột về hình thái, cấu tạo và sinh lí của con non sau khi sinh ra hoặc nở từ trứng để chuyển thành con trưởng thành."
      },
      {
        term: "Phát triển không qua biến thái",
        def: "Con non mới sinh có hình thái, cấu tạo tương tự con trưởng thành (chỉ nhỏ hơn về kích thước, chưa hoàn thiện sinh dục); Gặp ở Đa số động vật có xương sống: Cá, Bò sát, Chim, Thú và Con người."
      },
      {
        term: "Biến thái hoàn toàn (Holometabolous)",
        def: "Ấu trùng có hình dạng, cấu tạo và lối sống hoàn toàn khác biệt với con trưởng thành; phải trải qua giai đoạn trung gian là Nhộng (Pupa) để tái cấu trúc cơ thể; Gặp ở Bướm, Tằm, Ruồi, Muỗi, Bọ cánh cứng, Ếch nhái (nòng nọc có đuôi thở bằng mang chuyển thành ếch thở bằng phổi và da)."
      },
      {
        term: "Biến thái không hoàn toàn (Hemimetabolous)",
        def: "Ấu trùng (con non/thiếu trùng) có hình thái gần giống con trưởng thành nhưng chưa có cánh hoặc cơ quan sinh sản hoàn chỉnh; trải qua nhiều lần lột xác để lớn dần thành con trưởng thành, KHÔNG qua giai đoạn nhộng; Gặp ở Cào cào, Châu chấu, Gián, Ve sầu, Tôm, Cua."
      },
      {
        term: "Hormone điều hòa ở động vật có xương sống",
        def: "GH (Tuyến yên: kích thích phân chia tế bào, kéo dài xương cơ); Thyroxine (Tuyến giáp: chứa iod, kích thích chuyển hóa sinh nhiệt và biến thái nòng nọc thành ếch); Testosterone (Tinh hoàn: tăng cơ bắp, đặc tính sinh dục phụ nam); Estrogen (Buồng trứng: tích mỡ, phát triển tuyến vú, đặc tính nữ)."
      },
      {
        term: "Hormone điều hòa ở côn trùng",
        def: "Ecdysone (Tuyến ngực: kích thích lột xác biến thái sâu thành nhộng và bướm); Juvenile (Thể allata: duy trì trạng thái ấu trùng sâu non, ức chế biến thái thành nhộng)."
      }
    ],
    process: {
      title: "Tiến trình biến thái ở Bướm và cơ chế tương tác hormone Ecdysone vs Juvenile",
      steps: [
        "1. Trứng nở thành Sâu bướm (Ấu trùng): Sâu ăn lá cây liên tục, sinh trưởng lớn nhanh về kích thước qua 4-5 lần lột xác nhờ nồng độ Juvenile cao phối hợp với Ecdysone.",
        "2. Hóa Nhộng: Khi sâu đẫy sức, thể allata ngừng tiết Juvenile (chỉ còn Ecdysone chiếm ưu thế) -> Sâu nhả tơ đóng kén hóa thành Nhộng.",
        "3. Tái cấu trúc trong kén: Dưới tác dụng của Ecdysone, toàn bộ các mô sâu bị tiêu hủy và các mầm tế bào mầm cánh, chân dài, vòi hút được biệt hóa mới hoàn toàn.",
        "4. Vũ hóa thành Bướm trưởng thành: Nhộng cắn kén chui ra thành bướm có đôi cánh rực rỡ, hút mật hoa và kết đôi sinh sản.",
        "5. Ở Động vật có xương sống: Tuyến yên tiết GH kích thích xương sụn phát triển; thiếu GH lúc nhỏ gây người lùn cân đối, thừa GH gây người khổng lồ."
      ],
      flowSummary: "Trứng → Sâu non (Juvenile + Ecdysone) → Nhộng (Chỉ còn Ecdysone) → Bướm trưởng thành (Vũ hóa sinh sản)."
    },
    mechanism: "Ở nòng nọc, hormone Thyroxine do tuyến giáp tiết ra gắn vào thụ thể nhân tế bào, kích hoạt gen mã hóa enzyme tiêu biến đuôi (chết theo chương trình apoptosis của tế bào đuôi), tiêu biến mang và kích hoạt mầm chi phát triển thành 4 chân cùng hệ hô hấp phổi thích nghi đời sống trên cạn.",
    applications: [
      "Trồng dâu nuôi tằm: Phun chất tương tự Juvenile ở giai đoạn sâu non tuổi cuối nhằm kéo dài thời gian ăn lá dâu của sâu non để nhả được kén tơ to và sợi tơ dài hơn.",
      "Diệt muỗi truyền bệnh: Phun chất ức chế lột xác làm ấu trùng bọ gậy không thể hóa nhộng và muỗi trưởng thành.",
      "Y tế: Bổ sung muối iod vào bữa ăn hàng ngày để phòng bệnh bướu cổ và hội chứng đần độn chậm phát triển trí tuệ ở trẻ nhỏ."
    ],
    experimentsNote: "Cắt bỏ tuyến giáp của nòng nọc hoặc nuôi nòng nọc trong nước không có nguyên tố iod: Nòng nọc không biến thái thành ếch được mà tiếp tục lớn lên thành một con nòng nọc khổng lồ có đuôi.",
    quiz: [
      {
        q: "Quá trình phát triển của loài động vật nào sau đây thuộc kiểu phát triển qua biến thái hoàn toàn?",
        options: [
          "A. Châu chấu và Cào cào",
          "B. Bướm tằm và Ếch đồng",
          "C. Thỏ và Bồ câu",
          "D. Cá chép và Thằn lằn"
        ],
        answer: 1,
        explain: "Bướm (sâu -> nhộng -> bướm) và Ếch (nòng nọc thở mang có đuôi -> ếch thở phổi 4 chân) đều có ấu trùng khác biệt hoàn toàn về cấu tạo và sinh lí so với con trưởng thành."
      },
      {
        q: "Ở côn trùng, hormone nào sau đây có tác dụng kích thích lột xác sâu non nhưng lại DUY TRÌ trạng thái ấu trùng, ức chế biến thái thành nhộng?",
        options: [
          "A. Ecdysone",
          "B. Thyroxine",
          "C. Juvenile (hormone tuổi non)",
          "D. Insulin"
        ],
        answer: 2,
        explain: "Juvenile (do thể allata tiết ra) giữ cho côn trùng duy trì trạng thái sâu non; chỉ khi nồng độ Juvenile giảm thấp thì Ecdysone mới kích thích sâu non biến đổi thành nhộng."
      },
      {
        q: "Thiếu nguyên tố vi lượng nào sau đây trong thức ăn sẽ dẫn đến giảm tổng hợp hormone Thyroxine, khiến trẻ em bị bệnh bướu cổ và thiểu năng trí tuệ?",
        options: [
          "A. Sắt (Fe)",
          "B. Iod (I)",
          "C. Canxi (Ca)",
          "D. Phốt pho (P)"
        ],
        answer: 1,
        explain: "Iod là thành phần cấu tạo bắt buộc của hormone tuyến giáp Thyroxine (T3, T4); thiếu iod tuyến giáp phì đại tạo bướu cổ và làm chậm phát triển trí tuệ trẻ em."
      }
    ]
  },

  23: {
    num: 23,
    chapter: 3,
    isPractical: true,
    title: "Thực hành: Quan sát sinh trưởng và phát triển ở động vật",
    subtitle: "Khảo sát các giai đoạn vòng đời biến thái của Tằm (hoặc Sâu bướm) và Ếch đồng",
    objectives: [
      "Nhận biết và mô tả được đặc điểm hình thái các giai đoạn trong vòng đời biến thái hoàn toàn ở bướm/tằm (Trứng -> Sâu non -> Nhộng -> Bướm trưởng thành).",
      "Quan sát các biến đổi giải phẫu trong quá trình biến thái ở ếch đồng (Nòng nọc -> Nòng nọc mọc chân -> Rụng đuôi -> Ếch con).",
      "Vẽ sơ đồ vòng đời và phân tích ý nghĩa thích nghi sinh thái của từng giai đoạn phát triển."
    ],
    hypothesis: "Giai đoạn ấu trùng và con trưởng thành ở động vật biến thái hoàn toàn có sự phân công chức năng sinh thái rõ rệt: con non chuyên trách tích lũy dinh dưỡng và sinh trưởng; con trưởng thành chuyên trách phát tán và duy trì nòi giống.",
    variables: {
      independent: "Giai đoạn phát triển cá thể trong vòng đời sinh học.",
      dependent: "Kích thước cơ thể, cấu tạo cơ quan hô hấp (mang vs phổi), cơ quan di chuyển (vây đuôi vs 4 chi có màng bơi), tập tính dinh dưỡng (ăn lá xơ vs hút mật hoa; ăn thực vật thủy sinh vs ăn thịt sống).",
      controlled: "Mẫu vật quan sát đúng loài, tiêu bản mẫu chuẩn hoặc bể nuôi quan sát trực quan sống."
    },
    materials: [
      "Mẫu sống / Tiêu bản: Hộp nuôi tằm sống đủ 4 lứa tuổi (hoặc tiêu bản ngâm bướm các giai đoạn), bể kính nuôi nòng nọc ếch ở các lứa tuổi khác nhau.",
      "Dụng cụ: Đĩa petri, kính lúp cầm tay, thước dây đo li, kẹp panh nhựa đầu tù, thức ăn thích hợp (lá dâu bánh tẻ cho tằm, rong đuôi chó cho nòng nọc)."
    ],
    procedure: [
      "Thực hành 1 (Vòng đời Tằm): Quan sát trứng tằm dưới kính lúp -> Đo kích thước và đếm số đốt của sâu non tuổi 1 đến tuổi 5 -> Quan sát sâu nhả tơ đóng kén vàng -> Cắt nhẹ một kén xem nhộng màu nâu sẫm bên trong -> Quan sát bướm ngài vũ hóa chui ra khỏi kén.",
      "Thực hành 2 (Biến thái ở Ếch): Nuôi một ổ trứng ếch trong chậu nước -> Theo dõi trứng nở thành nòng nọc có mang ngoài -> Mang ngoài tiêu biến thành mang trong -> Nòng nọc mọc 2 chân sau -> Mọc 2 chân trước -> Đuôi ngắn dần do tế bào đuôi tự tiêu hủy -> Ếch con nhảy lên cạn thở bằng phổi.",
      "Thực hành 3 (Lập bảng so sánh): Ghi chép đối chiếu các chỉ số kích thước, cơ quan vận động, thức ăn giữa sâu non và bướm; giữa nòng nọc và ếch."
    ],
    results: [
      "Kết quả 1: Sâu tằm có miệng kiểu nghiền ăn lá dữ dội, không có cánh, cơ thể mềm phân đốt; ngài tằm có cánh vảy phấn, miệng thoái hóa không ăn, chỉ đẻ trứng rồi chết sau vài ngày.",
      "Kết quả 2: Nòng nọc dài ~2.5cm có vây đuôi dẹp bơi dưới nước, ruột xoắn ốc rất dài ăn tảo vụn; ếch trưởng thành không đuôi, 4 chi khỏe nhảy xa, lưỡi dính phóng bắt côn trùng, ruột ngắn lại.",
      "Kết quả 3: Vẽ hoàn thiện sơ đồ 2 vòng đời biến thái với đầy đủ các nhãn chú thích khoa học."
    ],
    conclusionAndSafety: [
      "Kết luận: Biến thái hoàn toàn giúp động vật tránh sự cạnh tranh thức ăn và môi trường sống gay gắt giữa thế hệ con non và con trưởng thành, tối ưu hóa sự sống còn của loài.",
      "Lưu ý an toàn: Động vật quan sát phải được chăm sóc nhân đạo, thao tác gắp nhẹ nhàng bằng chổi lông hoặc panh bọc cao su; rửa sạch tay bằng xà phòng sau khi tiếp xúc với mẫu vật sống."
    ],
    quiz: [
      {
        q: "Trong vòng đời của loài Bướm, giai đoạn nào gây hại mùa màng nặng nề nhất cho cây trồng nông nghiệp?",
        options: [
          "A. Giai đoạn Trứng",
          "B. Giai đoạn Sâu non (ấu trùng)",
          "C. Giai đoạn Nhộng trong kén",
          "D. Giai đoạn Bướm trưởng thành"
        ],
        answer: 1,
        explain: "Sâu non có cơ quan miệng kiểu gặm nghiền khỏe mạnh và nhu cầu dinh dưỡng cực lớn để tích lũy sinh khối cho giai đoạn hóa nhộng, do đó cắn phá tan hoang lá cây trồng."
      },
      {
        q: "Ý nghĩa sinh học quan trọng nhất của sự khác biệt hoàn toàn về môi trường sống và thức ăn giữa Nòng nọc (dưới nước, ăn rêu tảo) và Ếch đồng (trên cạn, ăn côn trùng) là gì?",
        options: [
          "A. Giúp con non học được nhiều kĩ năng bơi lội",
          "B. Giảm thiểu tối đa sự cạnh tranh thức ăn và không gian sống giữa con non và con trưởng thành",
          "C. Làm cho ếch mẹ không phải đi tìm thức ăn",
          "D. Giúp ếch đẻ được nhiều trứng hơn"
        ],
        answer: 1,
        explain: "Ấu trùng và trưởng thành có ổ sinh thái khác biệt giúp loài khai thác được nhiều nguồn tài nguyên thiên nhiên khác nhau và tránh triệt để sự cạnh tranh nội bộ thế hệ."
      },
      {
        q: "Quá trình teo biến đuôi của nòng nọc để chuyển thành ếch con không đuôi là kết quả của cơ chế sinh học nào?",
        options: [
          "A. Đuôi bị các động vật ăn thịt cắn đứt",
          "B. Đuôi rụng ra do khô hạn",
          "C. Quá trình chết theo chương trình của tế bào (Apoptosis) dưới tác động của hormone Thyroxine",
          "D. Do nòng nọc cọ xát vào bùn đất đáy ao"
        ],
        answer: 2,
        explain: "Các tế bào đuôi kích hoạt chương trình tự hủy tế bào (apoptosis) dưới sự điều hòa của Thyroxine, các chất dinh dưỡng từ mô đuôi được tái hấp thu nuôi cơ thể phát triển 4 chi."
      }
    ]
  },

  // CHƯƠNG 4: SINH SẢN Ở SINH VẬT (Bài 24-27)
  24: {
    num: 24,
    chapter: 4,
    isPractical: false,
    title: "Khái quát về sinh sản ở sinh vật",
    subtitle: "Khái niệm, dấu hiệu đặc trưng và so sánh sinh sản vô tính vs sinh sản hữu tính",
    objectives: [
      "Nêu định nghĩa sinh sản và vai trò cốt lõi của sinh sản trong việc duy trì nòi giống qua các thế hệ.",
      "So sánh bản chất, cơ chế di truyền, ưu điểm và nhược điểm của sinh sản vô tính và sinh sản hữu tính.",
      "Phân tích ý nghĩa tiến hóa của sinh sản hữu tính đối với sự đa dạng sinh học và thích nghi trước biến đổi môi trường."
    ],
    concepts: [
      {
        term: "Sinh sản (Reproduction)",
        def: "Quá trình cơ thể sinh vật tạo ra các cá thể mới mang đặc điểm đặc trưng của loài, đảm bảo cho sự tiếp nối và trường tồn của nòi giống."
      },
      {
        term: "Sinh sản vô tính (Asexual reproduction)",
        def: "Hình thức sinh sản không có sự hợp nhất giữa giao tử đực và giao tử cái; cơ thể con hình thành từ một phần cơ thể mẹ qua nguyên phân, mang bộ gen giống hệt mẹ (Bào tử, Phân đôi, Nảy chồi, Tái sinh, Giâm cành)."
      },
      {
        term: "Sinh sản hữu tính (Sexual reproduction)",
        def: "Hình thức sinh sản luôn có sự kết hợp giữa giao tử đực (tinh trùng/tinh tử, đơn bội n) và giao tử cái (trứng/noãn cầu, đơn bội n) qua thụ tinh tạo thành hợp tử (lưỡng bội 2n) phát triển thành cá thể mới."
      },
      {
        term: "Cơ chế di truyền của sinh sản hữu tính",
        def: "Dựa trên sự phối hợp 3 quá trình sinh học nền tảng: Giảm phân (tạo giao tử n phong phú nhờ trao đổi chéo và phân li độc lập) -> Thụ tinh (tổ hợp ngẫu nhiên các bộ gen tạo vô số biến dị tổ hợp) -> Nguyên phân (duy trì bộ gen qua phát triển phôi)."
      }
    ],
    process: {
      title: "So sánh cơ chế sinh sản vô tính vs hữu tính trong tiến hóa sinh giới",
      steps: [
        "1. Sinh sản vô tính: Cơ thể mẹ (2n) -> Nguyên phân thuần túy -> Cơ thể con (2n) đồng nhất kiểu gen.",
        "2. Ưu thế vô tính: Nhanh chóng nhân đôi số lượng cá thể trong môi trường sống ổn định, bảo tồn nguyên vẹn các tính trạng tốt của mẹ.",
        "3. Hạn chế vô tính: Kém thích nghi khi môi trường sống thay đổi đột ngột hoặc xuất hiện dịch bệnh (dễ bị tiêu diệt hàng loạt).",
        "4. Sinh sản hữu tính: Cơ thể bố (2n) và mẹ (2n) qua Giảm phân tạo vô số giao tử (n) mang biến dị tổ hợp.",
        "5. Thụ tinh ngẫu nhiên: Hợp tử (2n) sở hữu hệ gen mới độc đáo, tạo tiềm năng thích nghi to lớn trước chọn lọc tự nhiên."
      ],
      flowSummary: "Vô tính: Nguyên phân → Con giống mẹ; Hữu tính: Giảm phân + Thụ tinh + Nguyên phân → Đa dạng kiểu gen & biến dị tổ hợp."
    },
    mechanism: "Sinh sản hữu tính là động lực chính của tiến hóa sinh giới. Sự tiếp hợp và trao đổi chéo ở kì đầu giảm phân I cùng sự phân li độc lập của các cặp nhiễm sắc thể tương đồng ở kì sau giảm phân I tạo ra hàng triệu loại giao tử khác nhau về mặt di truyền, làm nguồn nguyên liệu sơ cấp phong phú cho chọn lọc tự nhiên.",
    applications: [
      "Nhân giống vô tính cây trồng (nuôi cấy mô, giâm, chiết cành) nhằm nhân nhanh các giống cây ăn quả đặc sản, cây hoa quý giữ nguyên phẩm chất tốt của cây mẹ.",
      "Lai hữu tính (chọn tạo giống): Lai các dòng bố mẹ khác nhau để tạo ưu thế lai ở thế hệ F1 (cây trồng chống chịu sâu bệnh, gia súc lớn nhanh cho năng suất cao).",
      "Bảo tồn đa dạng di truyền: Duy trì nguồn gen quý hiếm trong các ngân hàng hạt giống và vườn quốc gia thông qua sinh sản hữu tính."
    ],
    experimentsNote: "Quan sát nảy chồi ở nấm men bánh mì (Saccharomyces cerevisiae): Nhỏ một giọt dịch nấm men pha đường lên lam kính, soi kính hiển vi thấy rõ các chồi con nhú ra từ thành tế bào mẹ.",
    quiz: [
      {
        q: "Ưu thế nổi trội nhất của sinh sản hữu tính so với sinh sản vô tính về mặt tiến hóa và chọn lọc tự nhiên là gì?",
        options: [
          "A. Sinh sản rất nhanh và không tiêu tốn năng lượng của cơ thể bố mẹ",
          "B. Tạo ra nguồn biến dị tổ hợp phong phú, giúp sinh vật thích nghi tốt hơn trước điều kiện môi trường sống biến đổi",
          "C. Cơ thể con sinh ra luôn luôn giống hệt mẹ về mọi đặc điểm sinh lí",
          "D. Không cần phải tìm kiếm và kết đôi bạn tình"
        ],
        answer: 1,
        explain: "Nhờ giảm phân và thụ tinh ngẫu nhiên, sinh sản hữu tính tạo ra các thế hệ con có kiểu gen đa dạng, mang lại khả năng chống chịu và tiềm năng thích nghi vượt trội khi môi trường thay đổi."
      },
      {
        q: "Hình thức sinh sản nào sau đây thuộc kiểu sinh sản vô tính ở sinh vật?",
        options: [
          "A. Sự thụ phấn và thụ tinh kép ở hoa hồng",
          "B. Sự nảy chồi ở Thủy tức và nhân giống bằng giâm cành ở khoai lang",
          "C. Sự đẻ con và cho con bú ở thú",
          "D. Sự kết hợp giữa tinh trùng và trứng ở ếch"
        ],
        answer: 1,
        explain: "Nảy chồi ở thủy tức và giâm cành khoai lang không có sự tham gia của giao tử đực và cái, cá thể mới sinh ra từ tế bào sinh dưỡng của mẹ qua nguyên phân."
      },
      {
        q: "Bộ ba quá trình sinh học tế bào nào là nền tảng cơ chế di truyền duy trì bộ nhiễm sắc thể đặc trưng của loài qua các thế hệ trong sinh sản hữu tính?",
        options: [
          "A. Nguyên phân - Lên men - Hô hấp tế bào",
          "B. Giảm phân - Thụ tinh - Nguyên phân",
          "C. Dịch mã - Phiên mã - Tái bản DNA",
          "D. Thoát hơi nước - Quang hợp - Hô hấp"
        ],
        answer: 1,
        explain: "Giảm phân giảm bộ NST 2n xuống n trong giao tử; Thụ tinh khôi phục bộ NST lưỡng bội 2n trong hợp tử; Nguyên phân duy trì bộ NST 2n trong mọi tế bào soma của cơ thể phát triển."
      }
    ]
  },

  25: {
    num: 25,
    chapter: 4,
    isPractical: false,
    title: "Sinh sản ở thực vật",
    subtitle: "Sinh sản sinh dưỡng, cấu tạo hoa, hình thành hạt phấn - túi phôi và hiện tượng thụ tinh kép",
    objectives: [
      "Mô tả các hình thức sinh sản sinh dưỡng tự nhiên (thân bò, củ, thân rễ, lá) và nhân tạo (giâm, chiết, ghép cành, nuôi cấy mô).",
      "Mô tả cấu tạo hoa lưỡng tính; quá trình hình thành hạt phấn (giao tử tử đực) và túi phôi (giao tử cái).",
      "Phân biệt thụ phấn tự tụy và thụ phấn chéo; các tác nhân thụ phấn (gió, côn trùng, nước, người).",
      "Phân tích bản chất và ý nghĩa sinh học kì diệu của hiện tượng THỤ TINH KÉP ở thực vật hạt kín."
    ],
    concepts: [
      {
        term: "Sinh sản sinh dưỡng (Vegetative reproduction)",
        def: "Cơ thể mới hình thành từ một phần cơ quan sinh dưỡng của cây mẹ (thân bò ở rau má, củ ở khoai tây, thân rễ ở gừng, lá ở cây thuốc bỏng)."
      },
      {
        term: "Cấu tạo hoa lưỡng tính",
        def: "Đài hoa, Tràng hoa (cánh hoa rực rỡ); Nhị hoa (cơ quan sinh dục đực gồm chỉ nhị và bao phấn chứa hạt phấn); Nhụy hoa (cơ quan sinh dục cái gồm đầu nhụy, vòi nhụy và bầu nhụy chứa noãn)."
      },
      {
        term: "Hạt phấn & Túi phôi",
        def: "Hạt phấn (thể giao tử đực): Chứa 1 tế bào ống phấn và 1 tế bào sinh sản (sau phân chia thành 2 tinh tử đơn bội n); Túi phôi (thể giao tử cái): Gồm 7 tế bào với 8 nhân đơn bội, gồm 1 noãn cầu (trứng, n), 2 tế bào kèm, 3 tế bào đối cực và 1 tế bào trung tâm chứa nhân cực (2n)."
      },
      {
        term: "Thụ tinh kép (Double fertilization)",
        def: "Hiện tượng đặc trưng riêng có ở Thực vật Hạt kín: Cả hai tinh tử (giao tử đực, n) cùng tham gia thụ tinh: Tinh tử 1 (n) + Noãn cầu (n) → Hợp tử (2n) phát triển thành Phôi; Tinh tử 2 (n) + Nhân cực (2n) → Tế bào tam bội (3n) phát triển thành Nội nhũ (phôi nhũ) chứa chất dự trữ nuôi phôi."
      },
      {
        term: "Hình thành Hạt & Quả",
        def: "Noãn sau thụ tinh biến đổi thành Hạt; Bầu nhụy dày lên phát triển thành Quả bảo vệ hạt và giúp phát tán hạt."
      }
    ],
    process: {
      title: "Tiến trình thụ tinh kép và biến đổi hoa thành quả ở thực vật hạt kín",
      steps: [
        "1. Thụ phấn: Hạt phấn rơi lên đầu nhụy tiếp nhận dính chất nhầy.",
        "2. Nảy mầm ống phấn: Ống phấn mọc dài xuyên qua vòi nhụy dẫn 2 tinh tử tiến thẳng vào lỗ noãn.",
        "3. Thụ tinh kép đồng thời: Ống phấn vỡ giải phóng 2 tinh tử: Tinh tử 1 kết hợp trứng tạo hợp tử 2n; Tinh tử 2 kết hợp nhân lưỡng bội tạo tế bào 3n.",
        "4. Phát triển phôi & nội nhũ: Hợp tử nguyên phân thành phôi (mầm rễ, mầm chồi, lá mầm); tế bào 3n phân chia tích lũy tinh bột/lipid thành nội nhũ.",
        "5. Vỏ noãn hóa thành vỏ hạt; Bầu nhụy phì đại dưới kích thích của auxin/gibberellin từ hạt phát triển thành Quả mọng hoặc quả khô."
      ],
      flowSummary: "Hạt phấn + Đầu nhụy → Ống phấn dẫn 2 tinh tử → [Tinh tử 1 + Trứng = Hợp tử 2n] & [Tinh tử 2 + Nhân cực = Nội nhũ 3n] → Hạt & Quả."
    },
    mechanism: "Ý nghĩa tiến hóa của thụ tinh kép: Cây không tiêu tốn vật chất dự trữ để hình thành nội nhũ nuôi phôi từ trước; chỉ khi quá trình thụ tinh tạo phôi thành công thì nội nhũ 3n mới bắt đầu được hình thành và tích lũy dinh dưỡng, giúp cây tiết kiệm tối đa năng lượng sinh học.",
    applications: [
      "Nuôi cấy mô tế bào thực vật (In vitro): Tận dụng tính toàn năng của tế bào thực vật để nhân hàng triệu cây giống sạch bệnh đồng đều (lan kim tuyến, chuối cấy mô, khoai tây giống).",
      "Thụ phấn nhân tạo bổ sung cho ngô, thanh long, dưa hấu giúp tăng tỉ lệ đậu quả và quả tròn đều không bị méo mó lép hạt.",
      "Tạo quả không hạt bằng cách xử lí hormone auxin hoặc gibberellin lên bầu hoa chưa thụ phấn (dưa hấu không hạt, nho không hạt)."
    ],
    experimentsNote: "Quan sát sự nảy mầm của hạt phấn dưới kính hiển vi: Rắc hạt phấn hoa dâm bụt vào giọt dung dịch đường sucrose 10% trên lam kính; sau 30-45 phút soi kính hiển vi thấy rõ ống phấn mọc dài ra như chiếc vòi.",
    quiz: [
      {
        q: "Ở thực vật hạt kín, hiện tượng 'thụ tinh kép' có bản chất là:",
        options: [
          "A. Cùng lúc có hai hạt phấn cùng nảy mầm thụ tinh cho một noãn cầu",
          "B. Một tinh tử thụ tinh với trứng tạo hợp tử (2n), và một tinh tử kết hợp với nhân lưỡng bội (2n) tạo nội nhũ tam bội (3n)",
          "C. Quá trình thụ tinh diễn ra hai lần liên tiếp vào ban ngày và ban đêm",
          "D. Hợp tử phân chia hai lần nguyên phân ngay sau khi thụ tinh"
        ],
        answer: 1,
        explain: "Đây là định nghĩa chuẩn của thụ tinh kép: tinh tử thứ nhất tạo phôi (2n) và tinh tử thứ hai tạo nội nhũ (3n) giàu dinh dưỡng."
      },
      {
        q: "Sau khi thụ tinh kép hoàn thành, noãn đã thụ tinh sẽ phát triển thành bộ phận nào, và bầu nhụy sẽ biến đổi thành bộ phận nào?",
        options: [
          "A. Noãn phát triển thành Quả, bầu nhụy phát triển thành Hạt",
          "B. Noãn phát triển thành Cánh hoa, bầu nhụy rụng đi",
          "C. Noãn phát triển thành Hạt, bầu nhụy phát triển thành Quả",
          "D. Noãn tiêu biến hoàn toàn, bầu nhụy phát triển thành Đài hoa"
        ],
        answer: 2,
        explain: "Noãn chứa phôi và nội nhũ sẽ biến đổi thành hạt; toàn bộ thành bầu nhụy bao bọc xung quanh sẽ dày lên biến thành vỏ quả và thịt quả."
      },
      {
        q: "Hình thức sinh sản sinh dưỡng nào sau đây được con người ứng dụng để bảo tồn nguyên vẹn các tính trạng ngon quý của cây ăn quả thân gỗ lâu năm?",
        options: [
          "A. Gieo hạt thu từ quả chín",
          "B. Chiết cành và Ghép cành bánh tẻ",
          "C. Để cây tự thụ phấn bắt buộc qua nhiều đời",
          "D. Chờ rễ cây mọc tự nhiên từ hạt rơi vãi"
        ],
        answer: 1,
        explain: "Chiết cành và ghép cành giữ nguyên hệ gen của cây mẹ, giúp cây con mau ra hoa kết trái và giữ nguyên hương vị thơm ngon ban đầu mà không bị phân li tính trạng như gieo hạt."
      }
    ]
  },

  26: {
    num: 26,
    chapter: 4,
    isPractical: true,
    title: "Thực hành: Nhân giống vô tính và thụ phấn cho cây",
    subtitle: "Kĩ thuật chiết cành, giâm cành, ghép mắt và thụ phấn nhân tạo cho cây thụ phấn chéo",
    objectives: [
      "Thực hiện đúng quy trình kĩ thuật chiết cành trên cây ăn quả (khoanh vỏ, cạo sạch tầng sinh gỗ, bọc bầu đất mùn ẩm).",
      "Thực hiện thành thạo thao tác ghép mắt (ghép chữ T hoặc ghép nêm) trên gốc ghép.",
      "Thao tác thụ phấn bổ sung nhân tạo cho cây họ bầu bí (mướp/ngô) nhằm tăng tỉ lệ đậu quả."
    ],
    hypothesis: "Khoanh vỏ cắt đứt dòng mạch rây làm ứ đọng chất hữu cơ và auxin ở mép cắt trên, kích thích ra rễ trong bầu đất ẩm; thụ phấn bổ sung đưa hạt phấn trực tiếp lên đầu nhụy nâng cao tối đa tỉ lệ đậu hạt và đậu quả.",
    variables: {
      independent: "Kĩ thuật can thiệp (chiết cành có cạo sạch tượng tầng vs không cạo sạch; hoa được thụ phấn bổ sung nhân tạo vs hoa để tự nhiên).",
      dependent: "Thời gian xuất hiện rễ và số lượng rễ cành chiết; tỉ lệ hoa cái đậu quả non (%).",
      controlled: "Cùng loài cây bưởi/chanh/hoa hồng, cùng kích thước cành bánh tẻ, độ ẩm bầu đất và thời tiết thực hiện."
    },
    materials: [
      "Dụng cụ: Dao chiết cành sắc bén, kéo cắt cành, nilon trong suốt, dây buộc lạt mềm/dây nilon, bút lông mềm, bao phấn chín thu từ hoa đực.",
      "Vật liệu: Cành bưởi/cam/chanh hoặc hoa hồng bánh tẻ khỏe mạnh, đất giá thể ẩm (hỗn hợp đất màu băm nhỏ + mùn xơ dừa ẩm + rơm rạ mục)."
    ],
    procedure: [
      "Thực hành 1 (Kĩ thuật Chiết cành): Chọn cành bánh tẻ đường kính 1-1.5cm; dùng dao khoanh 2 vòng cách nhau 2-3cm, rạch dọc và bóc bỏ lớp vỏ; cạo sạch lớp nhờn (tượng tầng tầng sinh mạch) quanh gỗ để tránh liền vỏ; để khô 1-2 ngày; đắp bầu đất ẩm quanh vết cắt và bọc nilon trong suốt cột chặt hai đầu.",
      "Thực hành 2 (Kĩ thuật Ghép mắt): Trên gốc ghép rạch vỏ hình chữ T; trên cành ghép dùng dao gọt một mắt ngủ kèm mẩu vỏ mỏng hình khiên; lách mắt ghép khít vào chữ T trên gốc ghép, dùng băng nilon quấn chặt chừa lộ đỉnh mắt ngủ.",
      "Thực hành 3 (Thụ phấn nhân tạo): Chọn buổi sáng nắng ráo (7-9h); ngắt hoa đực mướp vừa nở, vặt bỏ cánh hoa để lộ bao phấn vàng; quét nhẹ bao phấn lên đầu nhụy hoa cái có núm nhầy (hoặc dùng bút lông chấm hạt phấn ngô quét lên râu ngô non)."
    ],
    results: [
      "Kết quả 1: Sau 3-4 tuần, qua lớp nilon trong suốt nhìn thấy rõ các rễ non màu trắng sau chuyển màu vàng nâu mọc tua tủa từ mép vỏ phía trên của vết khoanh.",
      "Kết quả 2: Mắt ghép xanh tươi bám dính chắc chắn vào gốc ghép; sau 2-3 tuần bắt đầu nứt mầm vươn chồi mới.",
      "Kết quả 3: Các hoa cái mướp/bắp ngô được thụ phấn nhân tạo cho tỉ lệ đậu quả đạt >90%, quả to đều thẳng đẹp; hoa đối chứng tự nhiên chỉ đạt ~40-50% đậu quả."
    ],
    conclusionAndSafety: [
      "Kết luận: Nhân giống vô tính nhân nhanh cây giống giữ nguyên phẩm chất tốt; thụ phấn nhân tạo chủ động khắc phục hạn chế thiếu hụt côn trùng thụ phấn tự nhiên trong mùa vụ.",
      "Lưu ý an toàn: Dao chiết và kéo rất bén, thao tác dứt khoát và đưa lưỡi dao ra xa hướng người; buộc chặt bầu chiết để nước mưa không ngấm gây thối nhũn bầu đất rễ non."
    ],
    quiz: [
      {
        q: "Trong kĩ thuật chiết cành, tại sao sau khi bóc lớp vỏ thân cây người ta bắt buộc phải dùng sống dao cạo sạch lớp nhờn bao quanh phần gỗ?",
        options: [
          "A. Để diệt trừ nấm mốc kí sinh trên vỏ gỗ",
          "B. Để cạo bỏ tầng sinh mạch (tượng tầng), ngăn cản vỏ cây tái sinh liền sẹo trở lại làm hỏng sự kích thích ra rễ",
          "C. Để làm cho cành cây khô nhanh hơn",
          "D. Để hút hết dịch nhựa mạch gỗ bên trong"
        ],
        answer: 1,
        explain: "Nếu không cạo sạch tầng sinh mạch còn sót lại trên bề mặt gỗ, các tế bào này sẽ phân chia nối liền hai mép vỏ bị cắt, dòng mạch rây lưu thông trở lại và cành sẽ không bật rễ trong bầu đất."
      },
      {
        q: "Tại sao ở vết khoanh vỏ chiết cành, các chùm rễ phụ mới lại luôn mọc ra từ mép vỏ phía trên vết cắt chứ không mọc từ mép dưới?",
        options: [
          "A. Do mép trên nhận được nhiều ánh sáng mặt trời hơn mép dưới",
          "B. Do chất hữu cơ và hormone Auxin từ lá theo mạch rây đi xuống bị tắc nghẽn ứ đọng lại ở mép trên, kích thích tế bào phân chia tạo rễ phụ",
          "C. Do nước từ mạch gỗ chỉ phun ra ở mép trên",
          "D. Do trọng lực trái đất hút các tế bào dồn lên trên"
        ],
        answer: 1,
        explain: "Dòng mạch rây vận chuyển đường và auxin từ lá đi xuống gốc; việc bóc vỏ chặn đứng dòng chảy làm auxin dồn ứ cục bộ tại mép cắt trên, tạo nồng độ cao kích thích mô sẹo bật rễ bất định."
      },
      {
        q: "Thời điểm lý tưởng nhất trong ngày để tiến hành thụ phấn nhân tạo bổ sung cho hoa ngô hoặc dưa chuột, mướp là khi nào?",
        options: [
          "A. Buổi trưa nắng gắt (12h - 13h) khi nhiệt độ cao nhất",
          "B. Buổi sáng sớm mát mẻ có nắng nhẹ (khoảng 7h - 9h sáng) khi bao phấn vừa chín nứt hạt và đầu nhụy còn dính chất nhầy đón phấn",
          "C. Buổi chiều tối muộn khi sương đêm bắt đầu rơi",
          "D. Vào lúc trời mưa rào to"
        ],
        answer: 1,
        explain: "Sáng sớm từ 7-9h hạt phấn đạt sức sống cao nhất, bao phấn nứt tung hạt phấn khô tơi và đầu nhụy tiết nhiều dịch nhầy dính, tạo điều kiện thụ phấn và nảy mầm ống phấn đạt hiệu quả cao nhất."
      }
    ]
  },

  27: {
    num: 27,
    chapter: 4,
    isPractical: false,
    title: "Sinh sản ở động vật",
    subtitle: "Sinh sản vô tính, hữu tính, thụ tinh trong vs ngoài, điều hòa sinh sản và kế hoạch hóa gia đình",
    objectives: [
      "Phân biệt các hình thức sinh sản vô tính ở động vật: Phân đôi, nảy chồi, phân mảnh, trinh sinh.",
      "Mô tả cấu tạo hệ sinh dục nam và nữ ở người; quá trình sinh tinh và sinh trứng.",
      "So sánh thụ tinh ngoài (trong môi trường nước: cá, ếch) và thụ tinh trong (trong đường sinh dục cái: bò sát, chim, thú); đẻ trứng vs đẻ con (nuôi thai qua nhau thai).",
      "Trình bày cơ chế điều hòa sinh tinh và sinh trứng bằng cơ chế điều hòa ngược (Feedback loop); các biện pháp tránh thai và kế hoạch hóa gia đình."
    ],
    concepts: [
      {
        term: "Sinh sản vô tính ở động vật",
        def: "Phân đôi (Trùng biến hình, Hải quỳ); Nảy chồi (Thủy tức, Bọt biển); Phân mảnh (Giun dẹp, Sao biển); Trinh sinh (Trứng không qua thụ tinh phát triển thành cá thể đực đơn bội ở Ong, Kiến hoặc thằn lằn trinh sinh)."
      },
      {
        term: "Sinh sản hữu tính ở động vật",
        def: "Động vật đơn tính (cá thể đực riêng, cá thể cái riêng) hoặc lưỡng tính (ốc sên, giun đất có cả hai tuyến nhưng thụ tinh chéo); Thụ tinh ngoài (hiệu suất thấp, cần nhiều trứng) và Thụ tinh trong (hiệu suất cao, bảo vệ hợp tử tốt hơn)."
      },
      {
        term: "Quá trình sinh tinh (Spermatogenesis)",
        def: "Diễn ra tại ống sinh tinh của tinh hoàn: Tinh nguyên bào (2n) -> Tinh bào bậc 1 -> Giảm phân tạo 4 Tinh trùng (n) có đuôi roi chuyển động linh hoạt."
      },
      {
        term: "Quá trình sinh trứng (Oogenesis)",
        def: "Diễn ra tại buồng trứng: Noãn nguyên bào (2n) -> Noãn bào bậc 1 -> Giảm phân tạo 1 Tế bào trứng (n) kích thước lớn giàu noãn hoàng và 3 Thể cực nhỏ bé (sau tiêu biến)."
      },
      {
        term: "Trục điều hòa nội tiết sinh sản",
        def: "Vùng dưới đồi tiết GnRH -> kích thích Tuyến yên trước tiết FSH và LH: Ở nam, FSH kích thích tạo tinh trùng, LH kích thích tế bào kẽ Leydig tiết Testosterone; Ở nữ, FSH kích thích nang trứng phát triển tiết Estrogen, LH gây rụng trứng và hình thành Thể vàng tiết Progesterone."
      },
      {
        term: "Biện pháp tránh thai & Kế hoạch hóa",
        def: "Nguyên lí: Ngăn tinh trùng gặp trứng (Bao cao su, màng ngăn); Ngăn rụng trứng (Thuốc tránh thai chứa estrogen/progesterone ức chế FSH/LH tuyến yên); Ngăn làm tổ (Đặt vòng tránh thai); Triệt sản vĩnh viễn (Thắt ống dẫn tinh, thắt ống dẫn trứng)."
      }
    ],
    process: {
      title: "Cơ chế điều hòa ngược (Feedback) trong chu kì kinh nguyệt và rụng trứng ở phụ nữ",
      steps: [
        "1. Pha nang trứng: Vùng dưới đồi tiết GnRH -> Tuyến yên tiết FSH kích thích nang trứng phát triển lớn lên.",
        "2. Nang trứng tiết Estrogen tăng dần làm niêm mạc tử cung dày lên, tăng sinh mạch máu chuẩn bị đón thai.",
        "3. Đỉnh LH gây rụng trứng: Khi estrogen đạt ngưỡng cao kích thích ngược dương tính làm Tuyến yên phóng thích ồ ạt hormone LH -> Trứng chín rụng vào khoảng ngày thứ 14.",
        "4. Pha thể vàng: Vỏ nang trứng biến thành Thể vàng tiết Progesterone và Estrogen làm niêm mạc tử cung xốp mềm nuôi phôi.",
        "5. Phản hồi âm & Hành kinh: Nồng độ Progesterone cao ức chế ngược vùng dưới đồi làm giảm FSH/LH; nếu không thụ tinh, thể vàng teo biến -> Progesterone tụt dốc -> Niêm mạc tử cung bong ra kèm máu tạo hiện tượng Hành kinh."
      ],
      flowSummary: "GnRH → [Tuyến yên: FSH + LH] → [Buồng trứng: Nang trứng chín tiết Estrogen] → Đỉnh LH gây rụng trứng → Thể vàng tiết Progesterone → Phản hồi âm."
    },
    mechanism: "Thuốc tránh thai dạng viên uống hàng ngày chứa hỗn hợp Progesterone và Estrogen tổng hợp nồng độ ổn định. Lượng hormone ngoại sinh này liên tục gây phản hồi âm lên vùng dưới đồi và tuyến yên, ức chế hoàn toàn việc tiết FSH và LH, khiến nang trứng không phát triển và trứng không thể rụng, do đó không thể thụ thai.",
    applications: [
      "Thụ tinh trong ống nghiệm (IVF): Hỗ trợ các cặp vợ chồng hiếm muộn lấy trứng và tinh trùng thụ tinh bên ngoài phòng lab rồi cấy phôi vào buồng tử cung mẹ.",
      "Sử dụng bao cao su đúng cách: Biện pháp kép vừa tránh mang thai ngoài ý muốn vừa bảo vệ phòng chống các bệnh lây truyền qua đường tình dục (HIV/AIDS, lậu, giang mai).",
      "Tiêm hormone kích thích rụng trứng và sinh sản đồng loạt cho cá basa, cá tra giống trong nuôi trồng thủy sản."
    ],
    experimentsNote: "Quan sát tinh trùng người hoặc tinh trùng động vật dưới kính hiển vi: Nhỏ một giọt tinh dịch pha loãng lên lam kính đậy lamen, soi ở độ phóng đại 40x thấy rõ tinh trùng có đầu hình bầu dục và đuôi roi quẫy sóng bơi liên tục với tốc độ cao.",
    quiz: [
      {
        q: "Hình thức sinh sản trinh sinh (Parthenogenesis) ở loài Ong mật tạo ra những cá thể nào?",
        options: [
          "A. Toàn bộ ong chúa màu vàng",
          "B. Trứng không thụ tinh phát triển thành các con Ong đực mang bộ nhiễm sắc thể đơn bội (n)",
          "C. Trứng thụ tinh phát triển thành các con Ong thợ vô sinh",
          "D. Trinh sinh không thể tạo ra cá thể sống sót"
        ],
        answer: 1,
        explain: "Ở ong mật, ong chúa đẻ trứng: trứng được thụ tinh phát triển thành ong cái (ong chúa hoặc ong thợ, 2n); trứng không thụ tinh phát triển theo lối trinh sinh thành ong đực (n)."
      },
      {
        q: "Viên thuốc tránh thai hàng ngày dành cho phụ nữ chứa hormone sinh dục nữ (estrogen và progesterone) có tác dụng ngăn cản thụ thai nhờ cơ chế nào?",
        options: [
          "A. Tiêu diệt toàn bộ tinh trùng ngay khi vừa vào âm đạo",
          "B. Ức chế tuyến yên tiết hormone FSH và LH qua cơ chế phản hồi âm, ngăn cản hoàn toàn sự phát triển và rụng trứng",
          "C. Làm teo nhỏ hai buồng trứng vĩnh viễn",
          "D. Làm tăng đột biến nồng độ hormone sinh trưởng GH"
        ],
        answer: 1,
        explain: "Progesterone và Estrogen nồng độ cao trong thuốc duy trì phản hồi âm lên tuyến yên, ức chế tiết FSH (trứng không lớn) và LH (trứng không rụng), làm mất khả năng thụ thai tự nhiên."
      },
      {
        q: "Phương pháp tránh thai nào sau đây có hiệu quả vừa ngăn ngừa có thai ngoài ý muốn, vừa phòng tránh lây nhiễm các bệnh qua đường tình dục (STDs/HIV)?",
        options: [
          "A. Tính ngày rụng trứng theo chu kì kinh nguyệt",
          "B. Đặt vòng tránh thai vào buồng tử cung",
          "C. Sử dụng bao cao su đúng cách khi quan hệ tình dục",
          "D. Uống thuốc tránh thai khẩn cấp"
        ],
        answer: 2,
        explain: "Bao cao su là biện pháp rào cản cơ học duy nhất ngăn cách dịch cơ thể tiếp xúc, ngăn ngừa cả việc mang thai lẫn các mầm bệnh lây qua đường tình dục như HIV, HPV, giang mai."
      }
    ]
  },

  // CHƯƠNG 5: QUAN HỆ CÁC QUÁ TRÌNH SINH LÍ & NGHỀ LIÊN QUAN (Bài 28-29)
  28: {
    num: 28,
    chapter: 5,
    isPractical: false,
    title: "Mối quan hệ giữa các quá trình sinh lí trong cơ thể sinh vật",
    subtitle: "Cơ thể là một hệ thống mở, tự điều chỉnh và thống nhất toàn vẹn",
    objectives: [
      "Chứng minh cơ thể sinh vật (thực vật và động vật) là một hệ thống mở và có khả năng tự điều chỉnh.",
      "Phân tích mối liên hệ tương tác qua lại mật thiết giữa các quá trình sinh lí trong cây (hút nước rễ - quang hợp lá - thoát hơi nước - hô hấp tế bào).",
      "Phân tích sự phối hợp đồng bộ giữa các hệ cơ quan trong cơ thể động vật (tiêu hóa, hô hấp, tuần hoàn, bài tiết, thần kinh và nội tiết) dưới sự điều hòa chung."
    ],
    concepts: [
      {
        term: "Hệ thống mở (Open system)",
        def: "Cơ thể sinh vật liên tục trao đổi vật chất và năng lượng với môi trường xung quanh: Lấy thức ăn, nước, khí O₂/CO₂, ánh sáng từ môi trường và thải nhiệt, chất cặn bã, khí CO₂/O₂ trở lại môi trường."
      },
      {
        term: "Hệ thống tự điều chỉnh (Self-regulating system)",
        def: "Khả năng tự động duy trì cân bằng động của hệ thống nội môi và các hoạt động chức năng trước các biến động của môi trường thông qua cơ chế điều hòa ngược (Feedback)."
      },
      {
        term: "Tính thống nhất ở Thực vật",
        def: "Rễ hút nước và khoáng cung cấp cho lá quang hợp; Lá quang hợp tạo đường vận chuyển nuôi rễ và thân; Thoát hơi nước tạo động lực kéo dòng mạch gỗ; Hô hấp cung cấp năng lượng ATP cho rễ hút khoáng chủ động."
      },
      {
        term: "Tính thống nhất ở Động vật",
        def: "Hệ tiêu hóa cung cấp chất dinh dưỡng -> Hệ tuần hoàn vận chuyển đến tế bào; Hệ hô hấp lấy O₂ thải CO₂; Hệ bài tiết thải chất độc; Hệ thần kinh và nội tiết chỉ huy, điều hòa toàn bộ hoạt động nhịp nhàng theo nhu cầu cơ thể."
      }
    ],
    process: {
      title: "Sơ đồ mạng lưới tương tác giữa các hệ cơ quan trong cơ thể người",
      steps: [
        "1. Hệ tiêu hóa: Nghiền nhỏ thức ăn, phân giải hóa học thành glucose, amino acid, lipid -> Hấp thụ vào máu.",
        "2. Hệ hô hấp: Hít khí O₂ vào phế nang -> Khuếch tán vào máu mao mạch phổi; tiếp nhận CO₂ từ máu thở ra ngoài.",
        "3. Hệ tuần hoàn: Tim bơm máu mang chất dinh dưỡng và O₂ đến từng tế bào; thu gom chất cặn chuyển hóa và CO₂.",
        "4. Tế bào: Tiến hành đồng hóa và dị hóa, dùng O₂ oxy hóa glucose tạo ATP duy trì sự sống và thải ure, CO₂.",
        "5. Hệ bài tiết (Thận): Lọc máu loại bỏ ure, acid uric, duy trì cân bằng nước và ion khoáng trong dịch tuần hoàn.",
        "6. Hệ thần kinh & Thể dịch: Tiếp nhận cảm giác biến động, tiết xung thần kinh và hormone điều phối hoạt động tất cả các hệ."
      ],
      flowSummary: "Môi trường ngoài ⇄ [Tiêu hóa + Hô hấp + Bài tiết] ⇄ [Hệ tuần hoàn máu] ⇄ Môi trường trong ⇄ Tế bào mô (Được Thần kinh & Thể dịch chỉ huy)."
    },
    mechanism: "Nguyên lí phản hồi âm là chìa khóa của tự điều chỉnh: Khi một thông số sinh lí (ví dụ nồng độ CO₂ trong máu) tăng cao do vận động thể lực, trung khu hô hấp ở hành não lập tức gửi xung thần kinh kích thích cơ hoành co nhanh và sâu hơn, tăng thông khí phổi đào thải CO₂ ra ngoài, đưa pH và nồng độ khí máu trở lại mức hằng định bình thường.",
    applications: [
      "Chăm sóc sức khỏe toàn diện: Một bệnh lí ở cơ quan này (suy tim) sẽ kéo theo suy giảm chức năng ở các cơ quan khác (ứ trệ tuần hoàn phổi gây khó thở, giảm tưới máu thận gây suy thận).",
      "Nông nghiệp tổng hợp: Muốn cây có năng suất cao phải chăm sóc đồng bộ: bón phân hợp lí cho rễ kết hợp tỉa cành tạo tán đón nắng cho lá và tưới nước giữ ẩm.",
      "Luyện tập thể thao: Rèn luyện giúp nâng cao năng lực phối hợp nhịp nhàng giữa hệ vận động, tuần hoàn và hô hấp."
    ],
    experimentsNote: "Mô hình tương tác sinh lí: Thử nghiệm nín thở trong 30-40 giây; sự tích tụ khí CO₂ trong máu sẽ tự động kích thích xung thần kinh ép lồng ngực phải hít thở sâu dữ dội bất chấp ý chí chủ quan, chứng minh tính tự điều chỉnh sống còn của cơ thể.",
    quiz: [
      {
        q: "Tại sao nói cơ thể sinh vật là một hệ thống mở?",
        options: [
          "A. Vì cơ thể sinh vật có nhiều lỗ thở và lỗ khí khổng thông ra ngoài",
          "B. Vì cơ thể luôn luôn diễn ra quá trình trao đổi vật chất và năng lượng không ngừng với môi trường xung quanh",
          "C. Vì cấu tạo giải phẫu của cơ thể sinh vật không có lớp da bao bọc",
          "D. Vì cơ thể có thể tự do biến đổi thành bất kì loài sinh vật nào khác"
        ],
        answer: 1,
        explain: "Một hệ thống mở trong nhiệt động lực học và sinh thái học là hệ thống thường xuyên thu nhận vật chất, năng lượng từ môi trường ngoài và thải trả các sản phẩm chuyển hóa ra môi trường."
      },
      {
        q: "Mối quan hệ hỗ trợ qua lại giữa rễ cây và lá cây trong cơ thể thực vật thể hiện qua điểm nào sau đây?",
        options: [
          "A. Rễ và lá cạnh tranh nước gay gắt với nhau",
          "B. Rễ cung cấp nước và ion khoáng cho lá quang hợp; ngược lại, lá cung cấp chất hữu cơ và tạo lực hút thoát hơi nước kéo dòng dịch rễ đi lên",
          "C. Lá cây hấp thụ chất dinh dưỡng từ đất rồi truyền xuống rễ",
          "D. Rễ cây làm nhiệm vụ quang hợp chính thay thế cho lá"
        ],
        answer: 1,
        explain: "Đây là mối liên hệ khép kín: rễ hút nước/khoáng nuôi lá, lá quang hợp tạo đường nuôi rễ và thoát hơi nước tạo sức hút kéo nước lên ngọn cây."
      },
      {
        q: "Khi một người lao động nặng nhọc, sự phối hợp giữa các hệ cơ quan trong cơ thể diễn ra như thế nào?",
        options: [
          "A. Hệ tiêu hóa ngừng hoạt động hoàn toàn, tim đập chậm lại",
          "B. Hệ tuần hoàn tăng nhịp tim, hệ hô hấp thở nhanh sâu, tuyến mồ hôi tăng tiết để thải nhiệt và giữ ổn định thân nhiệt",
          "C. Thận bài tiết nước tiểu gấp 10 lần bình thường",
          "D. Hệ thần kinh ngắt toàn bộ liên lạc giữa các cơ quan"
        ],
        answer: 1,
        explain: "Lao động nặng đòi hỏi tăng cung cấp O₂ và năng lượng cho cơ bắp, tim đập nhanh và phổi thở gấp tăng trao đổi khí, mồ hôi bay hơi giúp làm mát chống quá nhiệt cơ thể."
      }
    ]
  },

  29: {
    num: 29,
    chapter: 5,
    isPractical: false,
    title: "Một số ngành nghề liên quan đến sinh học cơ thể",
    subtitle: "Y - Dược học, Nông - Lâm - Thủy sản, Công nghệ sinh học và định hướng nghề nghiệp tương lai",
    objectives: [
      "Kể tên và phân tích các ngành nghề trong xã hội hiện đại ứng dụng kiến thức sinh học cơ thể.",
      "Trình bày vai trò ứng dụng của sinh học cơ thể trong Y học (chẩn đoán, điều trị, cấy ghép tạng, tế bào gốc) và Dược học (chiết xuất dược liệu, sản xuất vaccine, kháng thể đơn dòng).",
      "Trình bày vai trò trong Nông - Lâm - Thủy sản (giống cây trồng, vật nuôi năng suất cao, kĩ thuật canh tác bền vững) và Công nghệ sinh học.",
      "Xác định các phẩm chất, kĩ năng cần thiết và xây dựng định hướng nghề nghiệp tương lai cho bản thân."
    ],
    concepts: [
      {
        term: "Nhóm ngành Y học & Chăm sóc sức khỏe",
        def: "Bác sĩ đa khoa, Bác sĩ chuyên khoa, Điều dưỡng, Kĩ thuật viên xét nghiệm y học, Chuyên gia phục hồi chức năng: Ứng dụng giải phẫu, sinh lí học người để chẩn đoán, điều trị bệnh và nâng cao sức khỏe cộng đồng."
      },
      {
        term: "Nhóm ngành Dược học & Dược liệu",
        def: "Dược sĩ nghiên cứu, Bào chế thuốc, Kiểm nghiệm dược phẩm: Nghiên cứu các hoạt chất sinh học tự nhiên từ động, thực vật để sản xuất thuốc kháng sinh, thuốc điều trị ung thư, vaccine sinh học."
      },
      {
        term: "Nhóm ngành Nông - Lâm - Thủy sản",
        def: "Kĩ sư Nông học, Chăn nuôi thú y, Quản lí tài nguyên rừng, Nuôi trồng thủy sản: Ứng dụng sinh lí sinh trưởng, sinh sản và dinh dưỡng cây trồng vật nuôi để tối ưu hóa sản lượng lương thực, thực phẩm an toàn."
      },
      {
        term: "Nhóm ngành Công nghệ sinh học (Biotechnology)",
        def: "Kĩ sư công nghệ di truyền, Công nghệ vi sinh, Công nghệ tế bào: Tạo ra các giống sinh vật biến đổi gen (GMO), vi sinh vật sản xuất enzyme công nghiệp, xử lí ô nhiễm môi trường."
      },
      {
        term: "Năng lực & Đạo đức nghề nghiệp",
        def: "Đòi hỏi tư duy khoa học thực nghiệm, kĩ năng thao tác phòng thí nghiệm chuẩn xác, sự say mê thiên nhiên và tuân thủ đạo đức sinh học (Bioethics: tôn trọng quyền sống của động vật, đạo đức thử nghiệm lâm sàng, an toàn sinh học)."
      }
    ],
    process: {
      title: "Tiến trình định hướng và phát triển nghề nghiệp thuộc lĩnh vực Sinh học cơ thể",
      steps: [
        "1. Khám phá sở thích & Năng lực bản thân: Yêu thích tìm hiểu thế giới sống, tỉ mỉ, khả năng quan sát và tư duy logic.",
        "2. Nắm vững kiến thức nền tảng: Học tốt các môn Khoa học tự nhiên (Sinh học, Hóa học, Vật lí, Toán học) và Tiếng Anh chuyên ngành.",
        "3. Trải nghiệm thực tế: Tham gia câu lạc bộ STEM, thực hành thí nghiệm trường học, tham quan viện nghiên cứu, bệnh viện, nông trại công nghệ cao.",
        "4. Lựa chọn bậc đào tạo: Đại học, Cao đẳng hoặc Trung cấp chuyên nghiệp theo các chuyên ngành Y, Dược, Nông sinh học, Môi trường.",
        "5. Rèn luyện kĩ năng thế kỉ 21: Kĩ năng làm việc nhóm, giao tiếp khoa học, sử dụng công nghệ số và cập nhật công nghệ sinh học thế giới."
      ],
      flowSummary: "Đam mê & Năng lực → Học tập cốt lõi STEM → Trải nghiệm thực tế phòng thí nghiệm → Đào tạo chuyên ngành → Cống hiến xã hội & Đạo đức sinh học."
    },
    mechanism: "Sinh học cơ thể là cầu nối trung tâm giữa Sinh học phân tử (ở cấp độ gen, protein) với Sinh thái học (ở cấp độ quần xã, hệ sinh thái). Mọi ứng dụng công nghệ gene hay phát triển thuốc mới cuối cùng đều phải được thử nghiệm và đánh giá mức độ an toàn, hiệu quả sinh học trên cơ thể sinh vật sống hoàn chỉnh.",
    applications: [
      "Trị liệu bằng liệu pháp Tế bào gốc (Stem cell therapy): Biệt hóa tế bào gốc thành tế bào cơ tim, tế bào thần kinh để thay thế các mô bị tổn thương.",
      "Nông nghiệp hữu cơ tuần hoàn: Tái sử dụng phụ phẩm nông nghiệp, dùng chế phẩm vi sinh bản địa (IMO) xử lí chuồng trại chăn nuôi không mùi hôi.",
      "Bảo tồn đa dạng sinh học các loài động thực vật quý hiếm trong Sách Đỏ Việt Nam (sao la, vượn đen má hung, sâm Ngọc Linh)."
    ],
    experimentsNote: "Tìm hiểu thông tin nghề nghiệp: Khảo sát các trang web tuyển dụng khoa học sự sống, phỏng vấn một bác sĩ hoặc kĩ sư nông nghiệp về công việc thực tế hàng ngày và những phẩm chất cần có.",
    quiz: [
      {
        q: "Ngành nghề nào sau đây ứng dụng trực tiếp nhất kiến thức về sinh lí dinh dưỡng và sinh lí sinh sản của vật nuôi?",
        options: [
          "A. Lập trình viên phần mềm trí tuệ nhân tạo",
          "B. Kĩ sư chăn nuôi thú y",
          "C. Kiến trúc sư xây dựng cầu đường",
          "D. Hướng dẫn viên du lịch lịch sử"
        ],
        answer: 1,
        explain: "Kĩ sư chăn nuôi thú y phải am hiểu sâu sắc về sinh lí tiêu hóa để phối trộn khẩu phần ăn và sinh lí sinh sản để thụ tinh nhân tạo, nâng cao năng suất đàn gia súc gia cầm."
      },
      {
        q: "Trong sản xuất dược phẩm hiện đại, công nghệ nào ứng dụng tế bào thực vật để sản xuất các hoạt chất chữa bệnh quý hiếm mà không cần khai thác cạn kiệt cây rừng tự nhiên?",
        options: [
          "A. Khai thác gỗ đốt lấy than hoạt tính",
          "B. Nuôi cấy huyền phù tế bào thực vật trong các bình phản ứng sinh học (Bioreactor) để chiết xuất hoạt chất saponin, paclitaxel",
          "C. Đốt cây lấy tro làm phân bón hóa học",
          "D. Phun thuốc trừ sâu hàng loạt vào rừng sâu"
        ],
        answer: 1,
        explain: "Nuôi cấy tế bào thực vật trong bình phản ứng bioreactor quy mô công nghiệp cho phép thu hoạt chất sinh học quý (như saponin từ sâm Ngọc Linh, chất chữa ung thư taxol) quanh năm mà bảo vệ được thảm thực vật tự nhiên."
      },
      {
        q: "Nguyên tắc nào sau đây là nguyên tắc ĐẠO ĐỨC SINH HỌC (Bioethics) bắt buộc phải tuân thủ trong các nghiên cứu khoa học sự sống trên động vật?",
        options: [
          "A. Làm thí nghiệm trên càng nhiều cá thể động vật quý hiếm càng tốt",
          "B. Nguyên tắc 3R: Thay thế (Replace), Giảm thiểu (Reduce) và Tinh chế/nhân đạo (Refine) để hạn chế tối đa đau đớn cho động vật thí nghiệm",
          "C. Không cần phải xin phép khi thử nghiệm hóa chất mới trên động vật",
          "D. Vứt bỏ xác động vật thí nghiệm trực tiếp ra nguồn nước sinh hoạt công cộng"
        ],
        answer: 1,
        explain: "Nguyên tắc 3R (Replacement, Reduction, Refinement) là tiêu chuẩn đạo đức quốc tế bắt buộc: tìm giải pháp thay thế khi có thể, giảm số lượng mẫu tối thiểu, và chăm sóc nhân đạo giảm đau đớn cho vật thí nghiệm."
      }
    ]
  }
};

// 7 Nhóm sơ đồ bắt buộc nên giữ khi làm nội dung số
const diagramGroupsInfo = [
  {
    id: "nhom-1",
    num: 1,
    title: "Nhóm 1. Trao đổi chất: Đồng hóa – Dị hóa – ATP; Tự dưỡng / Dị dưỡng và Dòng năng lượng",
    desc: "Khái quát bản chất của sự sống: Mối quan hệ tương hỗ giữa đồng hóa (tổng hợp, tích lũy năng lượng) và dị hóa (phân giải, nạp ATP); Dòng năng lượng một chiều từ quang năng mặt trời qua sinh vật tự dưỡng (sản xuất sơ cấp) sang sinh vật dị dưỡng qua các bậc dinh dưỡng và thoát nhiệt.",
    keywords: ["Đồng hóa", "Dị hóa", "ATP", "Tự dưỡng", "Dị dưỡng", "Dòng năng lượng sinh giới"],
    svgId: "svg-nhom-1"
  },
  {
    id: "nhom-2",
    num: 2,
    title: "Nhóm 2. Sinh lí Thực vật: Hấp thụ Nước & Khoáng, Thoát hơi nước; Quang hợp C3/C4/CAM & Hô hấp",
    desc: "Toàn bộ chuỗi sinh lí ở cây xanh: Lông hút rễ hấp thụ theo con đường gian bào (đai Caspary) & tế bào chất -> Dòng mạch gỗ đi lên nhờ sức hút thoát hơi nước khí khổng -> Lục lạp quang hợp (pha sáng thylakoid tạo ATP/NADPH + chu trình Calvin stroma cố định CO₂ ở C3/C4/CAM) -> Hô hấp ti thể (đường phân, chu trình Krebs, chuỗi truyền electron tạo ~30-32 ATP) cung cấp cho sinh trưởng.",
    keywords: ["Mạch gỗ", "Mạch rây", "Khí khổng", "Lục lạp", "Pha sáng", "Calvin", "C3/C4/CAM", "Đường phân", "Krebs", "Chuỗi electron"],
    svgId: "svg-nhom-2"
  },
  {
    id: "nhom-3",
    num: 3,
    title: "Nhóm 3. Sinh lí Động vật: Tiêu hóa, Trao đổi khí, Tuần hoàn & Cân bằng nội môi (Nephron)",
    desc: "Sự phối hợp hoàn hảo của 4 hệ cơ quan chính: Ống tiêu hóa người phân giải và hấp thụ dinh dưỡng lông ruột -> Bề mặt trao đổi khí phế nang mỏng ẩm đưa O₂ vào máu nhả CO₂ -> Tim 4 ngăn bơm máu trong hệ tuần hoàn kép kín -> Đơn vị thận Nephron (nang Bowman, ống lượn, quai Henle) lọc máu tạo nước tiểu, phối hợp với hệ thần kinh và hormone (Insulin, ADH) duy trì ổn định nội môi.",
    keywords: ["Tiêu hóa người", "Phế nang", "Tim 4 ngăn", "Tuần hoàn kép", "Nephron", "Lọc máu", "ADH", "Cân bằng nội môi"],
    svgId: "svg-nhom-3"
  },
  {
    id: "nhom-4",
    num: 4,
    title: "Nhóm 4. Cảm ứng: Cung phản xạ, Neuron, Khe Synapse, Hướng động / Ứng động & Tập tính",
    desc: "Cơ chế đáp ứng thích nghi: Ở thực vật gồm Hướng động (uốn cong ngọn/rễ do phân bố Auxin bất đối xứng) và Ứng động (thay đổi sức trương nước); Ở động vật gồm Cung phản xạ 5 khâu, Neuron phát điện thế hoạt động nhảy cóc eo Ranvier, dẫn truyền 1 chiều qua khe Synapse hóa học bằng Acetylcholine, và các dạng tập tính bẩm sinh / học được (Pavlov, Skinner).",
    keywords: ["Auxin hướng sáng", "Ứng động", "Neuron", "Điện thế màng", "Khe Synapse", "Cung phản xạ", "Tập tính Pavlov"],
    svgId: "svg-nhom-4"
  },
  {
    id: "nhom-5",
    num: 5,
    title: "Nhóm 5. Sinh trưởng & Phát triển: Mô phân sinh, Hormone cây; Vòng đời Biến thái ở Động vật",
    desc: "Tiến trình lớn lên và biệt hóa: Ở cây gồm Mô phân sinh đỉnh (sơ cấp dài thân) + Mô phân sinh bên (thứ cấp tạo vòng năm gỗ), hệ hormone tương tác Auxin/GA/Cytokinin (kích thích) vs ABA/Ethylene (ức chế); Ở động vật gồm 3 kiểu phát triển: Không qua biến thái (người, thú), Biến thái hoàn toàn (Bướm, Tằm: Sâu - Nhộng - Bướm; Ếch) và Biến thái không hoàn toàn (Châu chấu), dưới sự điều hòa của hormone GH, Thyroxine, Ecdysone và Juvenile.",
    keywords: ["Mô phân sinh", "Vòng năm gỗ", "Auxin/GA/ABA/Ethylene", "Biến thái hoàn toàn", "Nhộng", "Thyroxine", "Ecdysone & Juvenile"],
    svgId: "svg-nhom-5"
  },
  {
    id: "nhom-6",
    num: 6,
    title: "Nhóm 6. Sinh sản: Cấu tạo Hoa, Thụ phấn – Thụ tinh kép, Sinh sản vô tính & hữu tính ở Động vật",
    desc: "Sự tiếp nối thế hệ: Ở thực vật hạt kín gồm Cấu tạo hoa, Hạt phấn (2 tinh tử) + Túi phôi (trứng n + cực 2n), Hiện tượng THỤ TINH KÉP tạo hợp tử 2n và nội nhũ 3n biến đổi thành Hạt và Quả; Ở động vật gồm Sinh sản vô tính (nảy chồi, trinh sinh), Quá trình sinh tinh/sinh trứng, Cơ chế điều hòa ngược hormon sinh dục (FSH, LH, Testosterone, Estrogen, Progesterone) và Kế hoạch hóa gia đình.",
    keywords: ["Cấu tạo hoa", "Thụ tinh kép", "Hợp tử 2n", "Nội nhũ 3n", "Sinh tinh", "Sinh trứng", "Trục dưới đồi-yên-sinh dục", "Kế hoạch hóa"],
    svgId: "svg-nhom-6"
  },
  {
    id: "nhom-7",
    num: 7,
    title: "Nhóm 7. Tích hợp: Sơ đồ liên hệ các quá trình sinh lí trong cơ thể sinh vật và Ngành nghề liên quan",
    desc: "Cơ thể sinh vật là một hệ thống mở, tự điều chỉnh và thống nhất toàn vẹn: Sự liên hoàn mật thiết giữa Rễ - Thân - Lá ở cây xanh; Sự hiệp đồng giữa Tiêu hóa - Hô hấp - Tuần hoàn - Bài tiết dưới sự điều hòa của Hệ thần kinh và Thể dịch ở người; Định hướng nghề nghiệp tương lai trong các lĩnh vực Y học, Dược học, Nông - Lâm - Thủy sản và Công nghệ sinh học.",
    keywords: ["Hệ thống mở", "Tự điều chỉnh", "Thống nhất cơ thể", "Y - Dược học", "Nông nghiệp công nghệ cao", "Công nghệ sinh học", "Bioethics"],
    svgId: "svg-nhom-7"
  }
];

// Checklist thí nghiệm, thực hành và an toàn Sinh học 11
const labChecklist = [
  {
    lessonNum: 3,
    title: "Bài 3. Trao đổi nước và khoáng ở thực vật",
    coreSteps: "Cắt vát cuống cành hoa trắng dưới nước; cắm vào cốc mực đỏ và nước cất đối chứng; kẹp giấy tẩm CoCl₂ xanh vào 2 mặt lá; bóc biểu bì dưới lá thài lài soi khí khổng.",
    controlSetup: "Cốc nước cất không pha màu; mặt trên của lá (ít khí khổng) đối chứng với mặt dưới; đĩa petri kiểm soát bay hơi nước bề mặt.",
    safetyRules: "Cẩn thận khi thao tác dao lam sắc bén, luôn lia lưỡi dao ra xa hướng ngón tay; không để hóa chất màu dính vào mắt hay quần áo."
  },
  {
    lessonNum: 5,
    title: "Bài 5. Quang hợp ở thực vật",
    coreSteps: "Tách chiết sắc tố bằng cồn 90°, chấm giấy sắc kí; Thử tinh bột: để cây trong tối 48h, che băng giấy đen 1 phần lá, chiếu sáng, đun sôi cách thủy trong cồn tẩy diệp lục, nhỏ thuốc thử Iodine; Thử O₂: cành rong đuôi chó trong phễu hứng bọt khí thử tàn đóm.",
    controlSetup: "Lá nhịn sáng tiêu hết tinh bột trước TN; phần lá không bị che băng đen làm đối chứng dương; ống nghiệm cây rong để trong bóng tối không sinh bọt khí.",
    safetyRules: "Cồn và dung môi hữu cơ cực kì dễ bốc cháy: BẮT BUỘC ĐUN CÁCH THỦY trong cốc nước nóng, TUYỆT ĐỐI KHÔNG đun trực tiếp ống cồn trên ngọn lửa đèn cồn; dập đèn cồn bằng nắp chụp."
  },
  {
    lessonNum: 7,
    title: "Bài 7. Hô hấp ở thực vật",
    coreSteps: "100g hạt đậu nảy mầm trong bình kín sục khí vào nước vôi trong Ca(OH)₂; đo nhiệt độ trong bình cách nhiệt cắm nhiệt kế; đưa que đóm đang cháy vào bình hạt nảy mầm kín 12h.",
    controlSetup: "Bình chứa hạt cùng loại đã luộc chín hoàn toàn làm mẫu đối chứng âm chuẩn xác.",
    safetyRules: "Nước vôi trong có tính kiềm kích ứng da/mắt, tránh văng bắn; que đóm sau khi thử nghiệm phải nhúng vào cốc nước tắt hẳn tàn than trước khi bỏ vào sọt rác."
  },
  {
    lessonNum: 11,
    title: "Bài 11. Một số thí nghiệm về hệ tuần hoàn",
    coreSteps: "Đo huyết áp động mạch cánh tay bằng máy đo điện tử đúng tư thế; đếm mạch đập cổ tay trong 60s ở trạng thái nghỉ ngơi và sau vận động 2 phút; soi mao mạch vây đuôi cá sống dưới kính hiển vi.",
    controlSetup: "Chỉ số huyết áp và nhịp tim lúc nghỉ ngơi tĩnh làm giá trị đối chứng chuẩn cho từng cá nhân.",
    safetyRules: "Tư thế đo chuẩn: ngồi thẳng, cánh tay đặt ngang tầm tim; không thử vận động quá sức đối với học sinh có tiền sử bệnh tim hay hen; luôn giữ ẩm mang cá bằng bông ướt và thả về bể ngay sau quan sát."
  },
  {
    lessonNum: 16,
    title: "Bài 16. Cảm ứng ở thực vật",
    coreSteps: "Trồng mầm đậu trong hộp carton khoét lỗ bên hông (hướng sáng 1 phía); đặt chậu cây con nằm ngang 90° trong bóng tối (hướng trọng lực); chôn ống xốp phân NPK và ống muối mặn ở 2 bên gốc (hướng hóa).",
    controlSetup: "Hộp mở nắp chiếu sáng đều từ trên cao; chậu cây đặt thẳng đứng bình thường; đất không bón hóa chất ở giữa làm đối chứng.",
    safetyRules: "Đảm bảo độ ẩm đất vừa phải tránh úng thối mầm; cắm que và dùng kim cố định nhẹ nhàng không làm gãy dập rễ mầm non nớt."
  },
  {
    lessonNum: 21,
    title: "Bài 21. Bấm ngọn, tỉa cành; xử lí hormone và tính tuổi cây",
    coreSteps: "Bấm 1cm ngọn chồi chính cây đậu; nhúng gốc cành giâm vào dung dịch Auxin NAA 50ppm trong 15 phút rồi cắm vào cát ẩm; dùng kính lúp đếm các dải gỗ sáng - sẫm trên thớt gỗ cưa ngang.",
    controlSetup: "Lô cây giữ nguyên ngọn chồi mọc tự nhiên; lô cành giâm ngâm nước cất không bổ sung hormone.",
    safetyRules: "Kéo tỉa cành rất sắc, luôn hướng mũi ra ngoài; hóa chất NAA phải đong chính xác bằng pipet tự động, đeo găng tay bảo hộ không để dính vào da."
  },
  {
    lessonNum: 23,
    title: "Bài 23. Quan sát sinh trưởng và phát triển ở động vật",
    coreSteps: "Theo dõi 4 giai đoạn vòng đời của tằm (trứng -> sâu non 5 tuổi -> kén nhộng -> ngài tằm); quan sát các giai đoạn biến thái ở ếch (trứng -> nòng nọc mang ngoài -> mọc chân sau/trước -> tiêu biến đuôi -> ếch con lên cạn).",
    controlSetup: "So sánh hình thái, cơ quan hô hấp, cách di chuyển và khẩu phần thức ăn giữa con non và con trưởng thành.",
    safetyRules: "Đối xử nhân đạo với động vật sống, thao tác nhẹ nhàng bằng chổi lông mềm hoặc panh bọc cao su; rửa sạch tay bằng xà phòng sau khi thực hành."
  },
  {
    lessonNum: 26,
    title: "Bài 26. Nhân giống vô tính và thụ phấn cho cây",
    coreSteps: "Khoanh vỏ cành chiết, cạo sạch tầng sinh mạch quanh lõi gỗ, bọc bầu mùn xơ dừa ẩm bằng nilon trong; Ghép mắt chữ T trên gốc ghép; Dùng bút lông quét hạt phấn hoa đực lên núm nhầy đầu nhụy hoa cái cây bầu bí vào sáng sớm.",
    controlSetup: "Cành chiết không cạo tầng sinh mạch; hoa cái để thụ phấn tự nhiên nhờ gió và côn trùng ngẫu nhiên.",
    safetyRules: "Dao chiết cành cực sắc bén, thao tác chuẩn xác tránh trượt tay; buộc chặt hai đầu nilon bầu chiết ngăn nước mưa ứ đọng gây thối rễ non."
  }
];

// 20 câu hỏi Đấu trường trắc nghiệm 45 phút chuẩn khảo thí bao quát cả 5 chương
const arenaQuestions = [
  {
    id: 1,
    chapter: 1,
    q: "Quá trình đồng hóa trong trao đổi chất ở cơ thể sinh vật có bản chất là:",
    options: [
      "A. Phân giải chất hữu cơ phức tạp thành chất đơn giản và giải phóng năng lượng ATP",
      "B. Tổng hợp các phân tử phức tạp từ các tiền chất đơn giản và tích lũy năng lượng",
      "C. Đào thải các chất cặn bã và độc hại ra môi trường ngoài qua hệ bài tiết",
      "D. Chuyển hóa nhiệt năng thành cơ năng phục vụ hoạt động co cơ"
    ],
    answer: 1,
    explain: "Đồng hóa (Anabolism) là quá trình tổng hợp các phân tử phức tạp từ các chất đơn giản, đi kèm với sự tiêu tốn và tích lũy năng lượng hóa học trong các liên kết."
  },
  {
    id: 2,
    chapter: 1,
    q: "Động lực chính đóng vai trò quyết định kéo cột nước và ion khoáng từ rễ lên đỉnh các tán cây gỗ cao hàng chục mét là gì?",
    options: [
      "A. Lực đẩy do áp suất rễ (hiện tượng rỉ nhựa)",
      "B. Lực hút do quá trình thoát hơi nước ở lá cây",
      "C. Lực liên kết tĩnh điện giữa các ion khoáng với thành mạch gỗ",
      "D. Lực hút trọng lực từ khí quyển"
    ],
    answer: 1,
    explain: "Thoát hơi nước qua khí khổng tạo một lực căng âm cực lớn ở lá, kéo toàn bộ cột nước liên tục từ rễ qua thân lên tận đỉnh cây."
  },
  {
    id: 3,
    chapter: 1,
    q: "Sản phẩm O₂ được giải phóng trong quang hợp ở thực vật có nguồn gốc trực tiếp từ phân tử nào sau đây?",
    options: [
      "A. Khí carbon dioxide (CO₂)",
      "B. Phân tử nước (H₂O) qua quá trình quang phân li tại màng thylakoid",
      "C. Phân tử đường Glucose (C₆H₁₂O₆)",
      "D. Hợp chất cao năng ATP"
    ],
    answer: 1,
    explain: "Trong pha sáng tại màng thylakoid, ánh sáng kích thích quang phân li nước: 2H₂O → 4H⁺ + 4e⁻ + O₂."
  },
  {
    id: 4,
    chapter: 1,
    q: "Thực vật CAM (xương rồng, dứa, thanh long) thích nghi với môi trường khô hạn sa mạc bằng cách nào?",
    options: [
      "A. Mở khí khổng ban đêm để hấp thụ và cố định CO₂, đóng khí khổng vào ban ngày để chống mất nước",
      "B. Mở khí khổng cả ngày lẫn đêm để tối đa hóa quang hợp",
      "C. Không tiến hành chu trình Calvin cố định carbon",
      "D. Tiêu giảm hoàn toàn bào quan lục lạp"
    ],
    answer: 0,
    explain: "Thực vật CAM tách biệt thời gian: ban đêm mở khí khổng nhận CO₂ dự trữ dưới dạng axit malic; ban ngày đóng kín khí khổng chống thoát hơi nước."
  },
  {
    id: 5,
    chapter: 1,
    q: "Giai đoạn nào trong quá trình hô hấp hiếu khí ở tế bào thực vật tạo ra nhiều phân tử ATP nhất?",
    options: [
      "A. Đường phân tại bào tương",
      "B. Chu trình Krebs trong chất nền ti thể",
      "C. Chuỗi truyền electron hô hấp và oxy hóa photphoryl ở màng trong ti thể",
      "D. Quá trình lên men rượu trong không bào"
    ],
    answer: 2,
    explain: "Chuỗi truyền electron hô hấp trên màng trong ti thể tổng hợp được ~26 - 28 ATP trên tổng số ~30-32 ATP của toàn bộ quá trình hô hấp tế bào."
  },
  {
    id: 6,
    chapter: 1,
    q: "Ở người, sự tiêu hóa hóa học các phân tử protein chuỗi dài bắt đầu diễn ra tại cơ quan nào nhờ enzyme nào?",
    options: [
      "A. Khoang miệng nhờ enzyme Amylase",
      "B. Dạ dày nhờ enzyme Pepsin trong môi trường axit HCl",
      "C. Thực quản nhờ chất nhầy mucin",
      "D. Ruột già nhờ vi khuẩn cộng sinh"
    ],
    answer: 1,
    explain: "Axit HCl trong dịch vị hoạt hóa Pepsinogen thành Pepsin, bắt đầu cắt các phân tử protein dài thành chuỗi polypeptide ngắn tại dạ dày."
  },
  {
    id: 7,
    chapter: 1,
    q: "Cơ chế 'dòng chảy song song ngược chiều' giữa nước và máu ở mang cá xương mang lại ưu thế sinh học nào?",
    options: [
      "A. Giúp cá bơi nhanh hơn trong dòng nước xoáy",
      "B. Giúp máu lấy được hơn 80% lượng O₂ hòa tan trong nước nhờ luôn duy trì gradient chênh lệch phân áp",
      "C. Ngăn cản hoàn toàn muối khoáng xâm nhập vào cơ thể",
      "D. Giúp mang cá không bị khô ráo khi lên cạn"
    ],
    answer: 1,
    explain: "Dòng nước và máu chảy ngược chiều giúp trên toàn bộ chiều dài mao mạch mang, máu luôn gặp nước có phân áp O₂ cao hơn, tối ưu hóa khuếch tán O₂."
  },
  {
    id: 8,
    chapter: 1,
    q: "Tính tự động của tim (khả năng co bóp tự động theo nhịp của tim) là do bộ phận nào quy định?",
    options: [
      "A. Hệ dẫn truyền tim (Nút xoang nhĩ, nút nhĩ thất, bó His, mạng Purkinje)",
      "B. Xung thần kinh liên tục từ tủy sống gửi xuống",
      "C. Áp lực của dòng máu đẩy từ tĩnh mạch chủ về",
      "D. Nồng độ hormone insulin trong huyết tương"
    ],
    answer: 0,
    explain: "Hệ dẫn truyền tim, khởi đầu từ nút xoang nhĩ có khả năng tự động phát xung điện nhịp nhàng lan truyền kích thích cơ tim co bóp."
  },
  {
    id: 9,
    chapter: 1,
    q: "Tế bào nào sau đây chịu trách nhiệm sản xuất và tiết ra một lượng lớn các phân tử kháng thể trong miễn dịch dịch thể?",
    options: [
      "A. Tương bào (biệt hóa từ tế bào lympho B)",
      "B. Tế bào lympho T gây độc (CD8⁺)",
      "C. Hồng cầu",
      "D. Tiểu cầu"
    ],
    answer: 0,
    explain: "Tế bào lympho B sau khi nhận diện kháng nguyên đặc thù sẽ nhân dòng và biệt hóa thành tương bào (plasma cells) tiết hàng nghìn phân tử kháng thể mỗi giây."
  },
  {
    id: 10,
    chapter: 1,
    q: "Khi cơ thể bị mất nước do tiêu chảy hoặc toát nhiều mồ hôi làm tăng áp suất thẩm thấu máu, tuyến nội tiết nào sẽ tăng cường tiết hormone ADH để giữ nước?",
    options: [
      "A. Tuyến tụy",
      "B. Thùy sau tuyến yên (hormone do vùng dưới đồi sản xuất)",
      "C. Tuyến giáp",
      "D. Tuyến ức"
    ],
    answer: 1,
    explain: "Vùng dưới đồi kích thích thùy sau tuyến yên giải phóng ADH (Vasopressin) làm tăng tái hấp thu nước ở ống thận, giúp giảm mất nước qua nước tiểu."
  },
  {
    id: 11,
    chapter: 2,
    q: "Nguyên nhân chính làm ngọn cây non uốn cong về phía có nguồn ánh sáng chiếu nghiêng một phía là:",
    options: [
      "A. Tế bào ở phía được chiếu sáng phân chia nhanh gấp đôi",
      "B. Hormone Auxin dịch chuyển phân bố dồn về phía khuất tối, kích thích tế bào phía tối kéo dài nhanh hơn",
      "C. Khí khổng ở phía tối mở to hơn phía sáng",
      "D. Lục lạp ở phía sáng tiêu biến hết"
    ],
    answer: 1,
    explain: "Auxin di chuyển tránh sáng sang phía tối; nồng độ auxin cao ở thân kích thích tế bào phía tối kéo dài mạnh mẽ hơn làm ngọn uốn cong về nguồn sáng."
  },
  {
    id: 12,
    chapter: 2,
    q: "Trong một synapse hóa học điển hình, điện thế hoạt động chỉ có thể truyền một chiều từ màng trước sang màng sau vì lí do cốt lõi nào?",
    options: [
      "A. Chỉ có cúc tận cùng màng trước mới chứa bóng chất trung gian hóa học và chỉ màng sau mới có thụ thể tiếp nhận tương ứng",
      "B. Màng sau có dòng điện âm mạnh đẩy lùi xung điện",
      "C. Khe synapse có van ngăn dòng điện chảy ngược",
      "D. Bao myelin ngăn cản xung điện truyền lùi"
    ],
    answer: 0,
    explain: "Cấu tạo bất đối xứng của synapse: túi chứa hóa chất trung gian (acetylcholine) chỉ có ở cúc tận cùng màng trước và thụ thể tiếp nhận chỉ nằm ở màng sau."
  },
  {
    id: 13,
    chapter: 2,
    q: "Thí nghiệm rung chuông trước khi cho chó ăn, lặp lại nhiều lần đến khi chỉ cần nghe tiếng chuông chó đã tiết nước bọt thuộc hình thức học tập nào?",
    options: [
      "A. In vết (Imprinting)",
      "B. Điều kiện hóa đáp ứng kiểu Pavlov (Điều kiện hóa cổ điển)",
      "C. Quen nhờn (Habituation)",
      "D. Học giải quyết vấn đề"
    ],
    answer: 1,
    explain: "Thí nghiệm nổi tiếng của I. Pavlov chứng minh sự hình thành đường liên hệ thần kinh tạm thời giữa kích thích có điều kiện (tiếng chuông) và đáp ứng tự nhiên."
  },
  {
    id: 14,
    chapter: 3,
    q: "Mô phân sinh bên (gồm tầng sinh mạch và tầng sinh bần) có vai trò sinh học nào đối với thực vật Hai lá mầm?",
    options: [
      "A. Làm cho ngọn thân và chóp rễ dài ra",
      "B. Làm tăng đường kính của thân và rễ (sinh trưởng thứ cấp hình thành vòng năm gỗ)",
      "C. Giúp lá cây hấp thụ nhiều khí CO₂ hơn",
      "D. Kích thích sự nảy mầm của hạt"
    ],
    answer: 1,
    explain: "Mô phân sinh bên phân chia liên tục tạo tầng gỗ thứ cấp và vỏ thứ cấp dày lên hàng năm, là bản chất của sinh trưởng thứ cấp."
  },
  {
    id: 15,
    chapter: 3,
    q: "Ở côn trùng, hormone nào sau đây có vai trò kích thích lột xác biến thái sâu non thành nhộng và bướm trưởng thành?",
    options: [
      "A. Ecdysone",
      "B. Juvenile",
      "C. Thyroxine",
      "D. Insulin"
    ],
    answer: 0,
    explain: "Ecdysone do tuyến ngực tiết ra kích thích lột xác và biến thái; khi nồng độ Juvenile giảm thấp, Ecdysone xúc tác sâu hóa nhộng và vũ hóa thành bướm."
  },
  {
    id: 16,
    chapter: 3,
    q: "Loài động vật nào sau đây có hình thức phát triển qua biến thái hoàn toàn trong chu trình sống?",
    options: [
      "A. Bướm tằm và Ếch đồng",
      "B. Cào cào và Gián nhà",
      "C. Thỏ và Bồ câu",
      "D. Cá chép và Thằn lằn"
    ],
    answer: 0,
    explain: "Bướm (trứng -> sâu -> nhộng -> bướm) và ếch (trứng -> nòng nọc -> ếch) có con non hoàn toàn khác biệt về cấu tạo và sinh lí so với con trưởng thành."
  },
  {
    id: 17,
    chapter: 4,
    q: "Trong quá trình thụ tinh kép ở thực vật hạt kín, tinh tử thứ nhất thụ tinh với trứng tạo hợp tử (2n), còn tinh tử thứ hai sẽ kết hợp với cấu trúc nào?",
    options: [
      "A. Tế bào kèm (n)",
      "B. Nhân lưỡng bội ở tế bào trung tâm (2n) để tạo tế bào tam bội (3n) phát triển thành nội nhũ",
      "C. Tế bào đối cực",
      "D. Vỏ bao noãn"
    ],
    answer: 1,
    explain: "Tinh tử thứ hai kết hợp với nhân cực 2n tạo tế bào 3n phát triển thành phôi nhũ (nội nhũ) giàu dưỡng chất nuôi phôi."
  },
  {
    id: 18,
    chapter: 4,
    q: "Sau khi thụ tinh kép thành công, noãn đã thụ tinh sẽ phát triển thành cấu trúc nào và bầu nhụy sẽ biến đổi thành cấu trúc nào?",
    options: [
      "A. Noãn thành Quả, bầu nhụy thành Hạt",
      "B. Noãn thành Hạt, bầu nhụy thành Quả",
      "C. Noãn tiêu biến, bầu nhụy thành Cánh hoa",
      "D. Cả hai cùng tiêu biến"
    ],
    answer: 1,
    explain: "Noãn chứa hợp tử phát triển thành Hạt; bầu nhụy phì đại chứa hạt phát triển thành Quả bảo vệ và phát tán giống."
  },
  {
    id: 19,
    chapter: 4,
    q: "Viên thuốc tránh thai hàng ngày dành cho phụ nữ chứa hormone estrogen và progesterone có tác dụng ngăn cản thụ thai nhờ cơ chế sinh học nào?",
    options: [
      "A. Diệt sạch toàn bộ tinh trùng ngay khi vào tử cung",
      "B. Phản hồi âm lên vùng dưới đồi và tuyến yên, ức chế tiết FSH và LH khiến nang trứng không phát triển và không rụng trứng",
      "C. Làm teo nhỏ hai buồng trứng vĩnh viễn",
      "D. Làm tắc ống dẫn trứng tạm thời"
    ],
    answer: 1,
    explain: "Hormone sinh dục ngoại sinh nồng độ ổn định tạo phản hồi âm ức chế tiết FSH (trứng không chín) và LH (trứng không rụng), ngăn chặn thụ thai an toàn."
  },
  {
    id: 20,
    chapter: 5,
    q: "Nguyên tắc Đạo đức sinh học (Bioethics) chuẩn quốc tế 3R trong nghiên cứu thực nghiệm trên động vật gồm những tiêu chí nào?",
    options: [
      "A. Tái tạo, Rửa sạch, Rút kinh nghiệm",
      "B. Thay thế (Replacement), Giảm thiểu (Reduction), và Tinh chế/nhân đạo (Refinement)",
      "C. Rẻ tiền, Nhanh chóng, Rộng khắp",
      "D. Ràng buộc, Răn đe, Rút gọn"
    ],
    answer: 1,
    explain: "3R (Replacement, Reduction, Refinement) là nguyên tắc đạo đức bắt buộc: Tìm phương pháp thay thế động vật khi có thể, giảm thiểu số lượng cá thể sử dụng, và tinh chế quy trình giảm đau đớn cho động vật."
  }
];

module.exports = {
  p2_lessons,
  diagramGroupsInfo,
  labChecklist,
  arenaQuestions
};
