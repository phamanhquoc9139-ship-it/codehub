// scratch/sinhhoc11_data_p1.js
// Chương 1 (Bài 1-13) & Chương 2 (Bài 14-18)
// Cấu trúc 7 mục: Mục tiêu - Khái niệm - Sơ đồ/quá trình - Giải thích cơ chế - Vận dụng - Thực hành/quan sát - Câu hỏi tự kiểm tra
// Với bài thực hành (Bài 3, 5, 7, 11, 16): Giả thuyết - Biến - Hóa chất/dụng cụ - Thao tác - Đối chứng & kết quả - Kết luận & an toàn

const p1_lessons = {
  1: {
    num: 1,
    chapter: 1,
    isPractical: false,
    title: "Khái quát về trao đổi chất và chuyển hóa năng lượng",
    subtitle: "Nền tảng duy trì sự sống: Đồng hóa, Dị hóa, ATP và Dòng năng lượng sinh giới",
    objectives: [
      "Trình bày được định nghĩa và vai trò cốt lõi của trao đổi chất và chuyển hóa năng lượng ở sinh vật.",
      "Phân tích được 3 chặng chuyển hóa năng lượng trong sinh giới và vai trò trung tâm của ATP.",
      "So sánh bản chất, mối quan hệ mật thiết giữa đồng hóa và dị hóa, giữa tự dưỡng và dị dưỡng."
    ],
    concepts: [
      {
        term: "Trao đổi chất (Metabolism)",
        def: "Là sự thu nhận các chất từ môi trường xung quanh, biến đổi chúng qua các phản ứng hóa sinh trong cơ thể tế bào, và đào thải các chất cặn bã, độc hại ra bên ngoài."
      },
      {
        term: "Chuyển hóa năng lượng (Energy transformation)",
        def: "Là sự biến đổi năng lượng từ dạng này sang dạng khác trong các hoạt động sống (từ quang năng -> hóa năng tích lũy trong liên kết hóa học -> nhiệt năng và cơ năng)."
      },
      {
        term: "Đồng hóa (Anabolism) vs Dị hóa (Catabolism)",
        def: "Đồng hóa là quá trình tổng hợp các phân tử phức tạp từ các chất đơn giản (tiêu tốn năng lượng ATP); Dị hóa là quá trình phân giải các chất hữu cơ phức tạp thành chất đơn giản (giải phóng năng lượng nạp vào ATP)."
      },
      {
        term: "Đồng tiền năng lượng ATP",
        def: "Adenosine Triphosphate chứa 2 liên kết cao năng phosphate photphoric dễ bị bẻ gãy giải phóng xấp xỉ 30.5 kJ/mol, trực tiếp cung cấp năng lượng cho mọi hoạt động sống của tế bào."
      },
      {
        term: "Tự dưỡng (Autotroph) vs Dị dưỡng (Heterotroph)",
        def: "Tự dưỡng tự tổng hợp chất hữu cơ từ chất vô cơ nhờ năng lượng ánh sáng (quang tự dưỡng) hoặc hóa học (hóa tự dưỡng); Dị dưỡng lấy chất hữu cơ có sẵn làm nguồn vật chất và năng lượng sống."
      }
    ],
    process: {
      title: "Sơ đồ dòng vật chất và 3 chặng chuyển hóa năng lượng trong sinh giới",
      steps: [
        "Chặng 1 - Thu nhận & Tích lũy năng lượng: Thực vật và vi khuẩn quang hợp hấp thụ quang năng mặt trời biến đổi thành hóa năng tích lũy trong carbohydrate.",
        "Chặng 2 - Luân chuyển vật chất & Năng lượng: Các chất hữu cơ được chuyển hóa qua các bậc dinh dưỡng trong chuỗi thức ăn (từ sinh vật sản xuất -> tiêu thụ các cấp).",
        "Chặng 3 - Giải phóng & Huy động: Tế bào phân giải chất hữu cơ (qua hô hấp tế bào), giải phóng năng lượng nạp vào ATP để cung cấp cho sinh trưởng, vận động, vận chuyển chất và thải nhiệt."
      ],
      flowSummary: "Môi trường ngoài → Thu nhận chất & Năng lượng → Đồng hóa & Dị hóa tế bào → ATP + Sinh khối + Nhiệt → Đào thải sản phẩm cặn bã."
    },
    mechanism: "Đồng hóa và dị hóa là hai mặt đối lập nhưng thống nhất của một quá trình sống duy nhất. Dị hóa cung cấp năng lượng ATP và các tiền chất trung gian cho đồng hóa; ngược lại, đồng hóa tạo ra các đại phân tử (protein, enzyme, lipid, carbohydrate) làm nguyên liệu cấu trúc tế bào và enzyme xúc tác cho dị hóa.",
    applications: [
      "Dinh dưỡng hợp lí: Cung cấp đầy đủ năng lượng theo lứa tuổi và cường độ lao động để cân bằng giữa đồng hóa và dị hóa.",
      "Nông nghiệp: Tối ưu mật độ cây trồng, chiếu sáng và phân bón nhằm tối đa hóa quá trình đồng hóa quang hợp, tăng sinh khối nông sản.",
      "Y học: Hiểu rõ rối loạn chuyển hóa (tiểu đường, béo phì, suy kiệt) bắt nguồn từ mất cân bằng nạp và tiêu hao năng lượng."
    ],
    experimentsNote: "Quan sát và đo cường độ trao đổi chất: Đo lượng O₂ tiêu thụ hoặc CO₂ thải ra trên một đơn vị khối lượng cơ thể trong đơn vị thời gian để xác định tốc độ chuyển hóa cơ bản.",
    quiz: [
      {
        q: "Quá trình đồng hóa trong cơ thể sinh vật có đặc điểm nào sau đây?",
        options: [
          "A. Phân giải chất phức tạp thành chất đơn giản và giải phóng năng lượng",
          "B. Tổng hợp chất phức tạp từ chất đơn giản và tích lũy năng lượng",
          "C. Thải các chất cặn bã và chất độc hại ra môi trường ngoài",
          "D. Biến đổi nhiệt năng thành quang năng tích lũy trong chất hữu cơ"
        ],
        answer: 1,
        explain: "Đồng hóa (anabolism) là quá trình tổng hợp các phân tử phức tạp từ các tiền chất đơn giản, đi kèm với sự tiêu tốn và tích lũy năng lượng vào các liên kết hóa học."
      },
      {
        q: "Chất nào sau đây được coi là 'đồng tiền năng lượng' trực tiếp cung cấp cho mọi hoạt động sống của tế bào?",
        options: [
          "A. Glucose",
          "B. Tinh bột",
          "C. ATP",
          "D. Lipid"
        ],
        answer: 2,
        explain: "ATP (Adenosine Triphosphate) chứa các liên kết cao năng phosphate dễ thủy phân giải phóng năng lượng tức thời cho tế bào sử dụng trực tiếp."
      },
      {
        q: "Sinh vật tự dưỡng đóng vai trò cốt lõi nào trong sinh giới?",
        options: [
          "A. Phân hủy toàn bộ xác sinh vật và chất thải hữu cơ",
          "B. Tiêu thụ các động vật ăn cỏ để cân bằng lưới thức ăn",
          "C. Là mắt xích sản xuất sơ cấp tạo sinh khối và cung cấp thức ăn cho sinh giới",
          "D. Hấp thụ trực tiếp chất hữu cơ có sẵn từ môi trường ngoài"
        ],
        answer: 2,
        explain: "Sinh vật tự dưỡng (như thực vật, vi khuẩn lam) tự tổng hợp chất hữu cơ từ CO₂ và H₂O nhờ ánh sáng, tạo nền tảng sinh khối sơ cấp nuôi sống toàn bộ sinh giới."
      }
    ]
  },

  2: {
    num: 2,
    chapter: 1,
    isPractical: false,
    title: "Trao đổi nước và khoáng ở thực vật",
    subtitle: "Dòng mạch gỗ, dòng mạch rây, cơ chế đóng mở khí khổng và dinh dưỡng khoáng thiết yếu",
    objectives: [
      "Trình bày vai trò sinh lí của nước và các nguyên tố khoáng thiết yếu (đa lượng, vi lượng) đối với cây.",
      "Mô tả con đường hấp thụ nước và khoáng từ đất vào mạch gỗ rễ (con đường gian bào và tế bào chất), vai trò đai Caspary.",
      "Giải thích động lực dòng mạch gỗ (áp suất rễ, lực liên kết phân tử nước, lực hút thoát hơi nước) và dòng mạch rây.",
      "Phân tích cơ chế đóng mở khí khổng và các nhân tố ảnh hưởng."
    ],
    concepts: [
      {
        term: "Hấp thụ nước và ion khoáng",
        def: "Nước đi vào lông hút rễ theo cơ chế thẩm thấu (thế nước từ cao đến thấp). Ion khoáng hấp thụ thụ động (theo gradient nồng độ) hoặc chủ động (ngược gradient nồng độ, tiêu tốn ATP nhờ bơm protein màng)."
      },
      {
        term: "Con đường gian bào vs Tế bào chất",
        def: "Con đường gian bào: nước và khoáng đi qua khoảng trống giữa các tế bào và thành tế bào, bị chặn lại bởi đai Caspary không thấm nước ở nội bì để kiểm soát chọn lọc; Con đường tế bào chất: đi xuyên qua màng sinh chất và các cầu sinh chất giữa các tế bào."
      },
      {
        term: "Động lực dòng mạch gỗ (Xylem)",
        def: "Vận chuyển nước và khoáng từ rễ lên lá nhờ: 1. Lực hút do thoát hơi nước ở lá (động lực chính); 2. Lực liên kết giữa các phân tử nước và bám vào thành mạch; 3. Lực đẩy do áp suất rễ (gây hiện tượng rỉ nhựa, ứ giọt)."
      },
      {
        term: "Dòng mạch rây (Phloem)",
        def: "Vận chuyển dịch chứa đường sucrose và chất hữu cơ từ 'nguồn' (lá quang hợp, cơ quan dự trữ) đến 'bồn chứa' (rễ, củ, quả, hạt) theo cơ chế dòng khối áp suất."
      },
      {
        term: "Cơ chế đóng mở khí khổng",
        def: "Tế bào khí khổng có thành trong dày, thành ngoài mỏng. Khi tế bào no nước (trương nước), thành ngoài dãn ra kéo thành trong cong theo -> khí khổng mở. Khi tế bào mất nước -> khí khổng đóng lại."
      }
    ],
    process: {
      title: "Tiến trình vận chuyển nước, khoáng và dòng hữu cơ trong cơ thể thực vật",
      steps: [
        "1. Lông hút rễ hấp thụ nước & khoáng từ dung dịch đất -> đi qua biểu bì, vỏ rễ theo 2 con đường.",
        "2. Đai Caspary ở tầng nội bì kiểm soát chọn lọc trước khi dòng dung dịch đi vào mạch gỗ rễ.",
        "3. Dòng mạch gỗ vận chuyển một chiều từ rễ lên thân và lá nhờ phối hợp 3 động lực vật lí.",
        "4. Thoát hơi nước ở lá qua khí khổng (chiếm >90%) tạo sức hút cực lớn và điều hòa nhiệt độ.",
        "5. Dòng mạch rây vận chuyển đường sucrose từ lá đến các bộ phận tiêu thụ hoặc dự trữ."
      ],
      flowSummary: "Đất → Lông hút → Đai Caspary → Mạch gỗ (đi lên) → Khí khổng thoát hơi nước; Lá (nguồn) → Mạch rây (hai chiều) → Bồn chứa."
    },
    mechanism: "Khí khổng mở khi có ánh sáng: ion K⁺ được bơm chủ động vào tế bào hạt đậu làm tăng áp suất thẩm thấu, nước tràn vào làm trương tế bào -> khe mở. Khi thiếu nước hoặc gặp stress khô hạn, hormone Axit Abscisic (ABA) tăng đột ngột làm ion K⁺ thoát ra, nước thẩm thấu ra ngoài làm tế bào xẹp -> khí khổng đóng nhanh.",
    applications: [
      "Kĩ thuật tưới tiêu hợp lí: Tưới đúng nhu cầu từng giai đoạn phát triển, áp dụng tưới nhỏ giọt tiết kiệm nước.",
      "Bón phân cân đối: Phối hợp N-P-K theo tỉ lệ sinh lí, bón đúng liều lượng tránh gây xót rễ do nồng độ dung dịch đất quá cao.",
      "Nông nghiệp công nghệ cao: Canh tác thủy canh (dung dịch dinh dưỡng tuần hoàn) và khí canh (phun sương dưỡng chất)."
    ],
    experimentsNote: "Quan sát hiện tượng ứ giọt ở mép lá cây một lá mầm (ngô, cỏ) vào sáng sớm khi độ ẩm không khí bão hòa làm thoát hơi nước ngừng trệ nhưng áp suất rễ vẫn đẩy nước lên.",
    quiz: [
      {
        q: "Động lực chính đóng vai trò kéo cột nước và ion khoáng từ rễ lên tận đỉnh lá của cây gỗ cao hàng chục mét là gì?",
        options: [
          "A. Lực đẩy do áp suất rễ (hiện tượng rỉ nhựa)",
          "B. Lực hút do quá trình thoát hơi nước ở lá",
          "C. Lực liên kết tĩnh điện giữa các ion khoáng",
          "D. Lực hút trọng lực từ không khí"
        ],
        answer: 1,
        explain: "Lực hút do thoát hơi nước ở lá tạo ra một lực căng âm cực lớn ở ngọn, là động lực chủ yếu kéo dòng nước mạch gỗ đi lên."
      },
      {
        q: "Cấu tạo nào của tế bào khí khổng quyết định việc khe khí khổng mở ra khi tế bào hút nước căng phồng?",
        options: [
          "A. Thành tế bào đồng đều về độ dày ở mọi phía",
          "B. Thành trong sát khe mỏng hơn thành ngoài",
          "C. Thành trong sát khe dày hơn thành ngoài rất nhiều",
          "D. Không có thành tế bào bao bọc xung quanh"
        ],
        answer: 2,
        explain: "Tế bào hình hạt đậu có mép thành trong rất dày, mép ngoài mỏng. Khi trương nước, mép ngoài mỏng dãn dài ra kéo mép dày uốn cong theo làm mở khe khí khổng."
      },
      {
        q: "Đai Caspary nằm ở lớp tế bào nào của rễ và có vai trò sinh học gì?",
        options: [
          "A. Lớp biểu bì, giúp tăng diện tích tiếp xúc với đất",
          "B. Tầng vỏ, ngăn cản hoàn toàn nước thẩm thấu vào rễ",
          "C. Tầng nội bì, chặn con đường gian bào để kiểm soát chọn lọc dòng chất vào mạch gỗ",
          "D. Mạch rây, giúp vận chuyển đường hữu cơ"
        ],
        answer: 2,
        explain: "Đai Caspary chứa chất bần suberin không thấm nước nằm ở tầng nội bì, chặn đứng con đường gian bào, bắt buộc dòng nước và khoáng phải đi qua màng sinh chất để kiểm soát chọn lọc."
      }
    ]
  },

  3: {
    num: 3,
    chapter: 1,
    isPractical: true,
    title: "Thực hành: Trao đổi nước và khoáng ở thực vật",
    subtitle: "Thí nghiệm chứng minh vận chuyển nước ở thân, thoát hơi nước ở lá và quan sát khí khổng",
    objectives: [
      "Thiết kế và thực hiện thành công thí nghiệm chứng minh sự vận chuyển nước và khoáng trong mạch gỗ bằng dung dịch màu thực phẩm.",
      "Chứng minh hiện tượng thoát hơi nước qua bề mặt lá bằng túi nylon và giấy tẩm CoCl₂.",
      "Làm được tiêu bản tạm thời biểu bì lá và quan sát cấu tạo tế bào khí khổng dưới kính hiển vi quang học.",
      "Nắm vững nguyên lí trồng cây bằng thủy canh và khí canh."
    ],
    hypothesis: "Nước và các chất tan được mạch gỗ rễ hút và vận chuyển thẳng lên thân, cành và lá; phần lớn lượng nước này sau đó thoát ra khí quyển qua các lỗ khí khổng ở lớp biểu bì lá.",
    variables: {
      independent: "Vị trí đặt cành hoa (dung dịch màu vs nước cất đối chứng); bề mặt lá thử nghiệm (mặt trên vs mặt dưới); tình trạng che phủ lá.",
      dependent: "Mức độ đổi màu của cánh hoa/gân lá cần tây; tốc độ đổi màu của giấy CoCl₂ từ xanh sang hồng; lượng giọt nước đọng trong túi nylon.",
      controlled: "Cùng loài cây thí nghiệm, cùng kích thước cành, cùng nhiệt độ phòng, cường độ ánh sáng và thời gian quan sát."
    },
    materials: [
      "Mẫu vật: Cành hoa cúc trắng (hoặc hoa hồng trắng, cọng cần tây tươi), lá thài lài tía (hoặc lá lẻ bạn, lá hành tây).",
      "Hóa chất & Dụng cụ: Dung dịch màu thực phẩm (xanh methylen hoặc mực đỏ), giấy tẩm cobalt chloride (CoCl₂ khô có màu xanh da trời), lam kính, lamen, dao lam sắc, kim mũi mác, kính hiển vi quang học."
    ],
    procedure: [
      "Thí nghiệm 1 (Dòng mạch gỗ): Cắt vát cuống cành hoa trắng dưới nước; cắm một cành vào cốc nước pha màu đỏ, cành đối chứng cắm vào cốc nước cất. Đặt ngoài sáng 1-2 giờ. Quan sát sự đổi màu của gân lá và cánh hoa; cắt lát ngang thân quan sát vòng mạch gỗ nhuộm đỏ.",
      "Thí nghiệm 2 (Thoát hơi nước): Kẹp hai mẩu giấy CoCl₂ khô (màu xanh) vào mặt trên và mặt dưới của cùng một lá cây; dùng kẹp tiêu bản giữ chặt. Quan sát thời gian giấy chuyển sang màu hồng ở mỗi mặt lá.",
      "Thí nghiệm 3 (Quan sát khí khổng): Dùng dao lam khía nhẹ và bóc một lớp biểu bì dưới của lá thài lài tía; đặt lên lam kính có sẵn giọt nước cất, đậy lamen không để bọt khí. Quan sát dưới kính hiển vi ở độ phóng đại 10x rồi 40x."
    ],
    results: [
      "Kết quả TN1: Cánh hoa và gân lá ở cốc màu chuyển sang màu đỏ rực rỡ; lát cắt ngang thân cho thấy chỉ có phần gỗ (xylem) bắt màu mực đỏ, phần vỏ và ruột không nhuộm màu.",
      "Kết quả TN2: Giấy CoCl₂ ở mặt dưới của lá chuyển sang màu hồng nhanh hơn rõ rệt so với mặt trên (do mật độ khí khổng mặt dưới dày đặc hơn).",
      "Kết quả TN3: Dưới kính hiển vi thấy rõ các tế bào biểu bì xếp khít và các cặp tế bào hình hạt đậu chứa hạt lục lạp xanh lục bao quanh khe khí khổng."
    ],
    conclusionAndSafety: [
      "Kết luận: Nước và chất tan di chuyển theo mạch gỗ từ dưới lên trên; khí khổng là cơ quan thoát hơi nước chủ yếu, phân bố nhiều ở mặt dưới lá.",
      "Lưu ý an toàn: Cẩn thận tuyệt đối khi sử dụng dao lam lam sắc bén, luôn gọt/cắt mẫu trên đĩa petri và lia lưỡi dao ra xa hướng ngón tay; không để dung dịch màu vương vào mắt hay quần áo."
    ],
    quiz: [
      {
        q: "Trong thí nghiệm cắm cành hoa cúc trắng vào cốc nước màu mực đỏ, tại sao sau vài giờ cánh hoa lại chuyển sang màu đỏ?",
        options: [
          "A. Màu mực khuếch tán thẩm thấu trực tiếp qua lớp biểu bì vỏ thân",
          "B. Dung dịch màu được mạch rây vận chuyển ngược từ thân lên cánh hoa",
          "C. Nước và màu mực được mạch gỗ hút và vận chuyển thẳng lên gân cánh hoa",
          "D. Do cánh hoa tự tổng hợp sắc tố đỏ khi gặp ánh sáng"
        ],
        answer: 2,
        explain: "Mạch gỗ dẫn nước và các chất hòa tan từ gốc lên lá và cánh hoa; màu mực đóng vai trò chất chỉ thị trực quan đường đi của dòng mạch gỗ."
      },
      {
        q: "Khi dùng giấy tẩm CoCl₂ để kiểm tra tốc độ thoát hơi nước ở hai mặt lá của cây râm bụt, hiện tượng nào chứng tỏ mặt dưới thoát hơi nước nhanh hơn?",
        options: [
          "A. Giấy ở mặt dưới chuyển từ xanh sang hồng nhanh hơn mặt trên",
          "B. Giấy ở mặt trên chuyển từ hồng sang xanh nhanh hơn mặt dưới",
          "C. Giấy ở mặt dưới giữ nguyên màu xanh không đổi",
          "D. Giấy ở cả hai mặt cùng cháy đen"
        ],
        answer: 0,
        explain: "CoCl₂ khan có màu xanh da trời, khi gặp hơi nước sẽ ngậm nước chuyển thành màu hồng. Giấy ở mặt dưới chuyển hồng nhanh hơn chứng tỏ mặt dưới thoát hơi nước mạnh hơn."
      },
      {
        q: "Để bóc được lớp biểu bì mỏng chứa khí khổng làm tiêu bản quan sát dưới kính hiển vi, thao tác nào sau đây là chuẩn kĩ thuật?",
        options: [
          "A. Cắt một lát thân thật dày đặt trực tiếp lên lam kính",
          "B. Dùng dao lam khía nhẹ mặt dưới lá, bẻ gập và kéo nghiêng một màng mỏng trong suốt",
          "C. Giã nát lá trong cối sứ rồi nhỏ cặn lên kính",
          "D. Dùng nhiệt độ cao hơ cháy lá rồi cạo muội than"
        ],
        answer: 1,
        explain: "Khía nhẹ mặt dưới lá rồi gập và tước nghiêng giúp thu được lớp biểu bì trong suốt chỉ dày một lớp tế bào, thuận lợi cho ánh sáng kính hiển vi soi rõ khí khổng."
      }
    ]
  },

  4: {
    num: 4,
    chapter: 1,
    isPractical: false,
    title: "Quang hợp ở thực vật",
    subtitle: "Pha sáng, pha tối (chu trình Calvin), thích nghi C3, C4, CAM và các nhân tố ảnh hưởng",
    objectives: [
      "Viết và giải thích được phương trình tổng quát cùng vai trò sinh thái to lớn của quang hợp.",
      "Phân biệt cấu tạo lục lạp thích nghi chức năng quang hợp; vai trò của hệ sắc tố quang hợp (chlorophyll a, b và carotenoid).",
      "So sánh bản chất pha sáng (màng thylakoid) và pha cố định CO₂ (chất nền stroma).",
      "Phân tích cơ chế thích nghi quang hợp ở thực vật C3, C4 và CAM đối với điều kiện môi trường sống."
    ],
    concepts: [
      {
        term: "Quang hợp (Photosynthesis)",
        def: "Quá trình lục lạp hấp thụ và chuyển hóa năng lượng ánh sáng thành năng lượng hóa học tích lũy trong chất hữu cơ, tổng hợp glucose từ CO₂ và H₂O, đồng thời giải phóng khí O₂."
      },
      {
        term: "Phương trình tổng quát",
        def: "6 CO₂ + 12 H₂O + Năng lượng ánh sáng (Diệp lục) → C₆H₁₂O₆ + 6 O₂ + 6 H₂O (hoặc 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂)."
      },
      {
        term: "Hệ sắc tố quang hợp",
        def: "Chlorophyll a (trực tiếp biến đổi quang năng thành hóa năng ở trung tâm phản ứng), Chlorophyll b và Carotenoid (sắc tố phụ hấp thụ và truyền năng lượng về cho diệp lục a trung tâm)."
      },
      {
        term: "Pha sáng (Màng thylakoid)",
        def: "Diệp lục hấp thụ photon; quang phân li nước tạo H⁺, electron và giải phóng O₂; chuỗi truyền electron tạo ra ATP và NADPH cung cấp cho pha tối."
      },
      {
        term: "Pha tối / Pha cố định CO₂ (Chất nền stroma)",
        def: "Sử dụng ATP và NADPH từ pha sáng để khử CO₂ thành carbohydrate qua chu trình Calvin (C3), chu trình Hatch-Slack (C4), hoặc CAM."
      },
      {
        term: "So sánh C3, C4 và CAM",
        def: "C3: Thực vật ôn đới (lúa, đậu, cam), sản phẩm đầu tiên là 3-PGA, có hiện tượng quang hô hấp; C4: Thực vật nhiệt đới (ngô, mía, kê), tách biệt không gian giữa tế bào mô giậu và bao bó mạch, không có quang hô hấp, năng suất cao; CAM: Xương rồng, dứa, thanh long thích nghi khô hạn cực độ, tách biệt thời gian (mở khí khổng ban đêm để nhận CO₂)."
      }
    ],
    process: {
      title: "Tiến trình hai pha của quang hợp trong bào quan lục lạp",
      steps: [
        "1. Pha sáng: Ánh sáng đập vào hạt grana -> Chlorophyll bị kích động -> Quang phân li H₂O: 2H₂O → 4H⁺ + 4e⁻ + O₂.",
        "2. Tạo năng lượng: Dòng electron chuyển dịch qua chuỗi chuyền trên màng thylakoid tổng hợp ATP và khử NADP⁺ thành NADPH.",
        "3. Pha tối (Calvin): Khí CO₂ khuếch tán vào stroma -> kết hợp hợp chất RuBP nhờ enzyme Rubisco.",
        "4. Giai đoạn khử: Dùng ATP và NADPH từ pha sáng khử hợp chất 3 carbon tạo G3P/triose phosphate.",
        "5. Tái sinh chất nhận & Tổng hợp sản phẩm: Một phần triose phosphate tái sinh RuBP, phần còn lại tổng hợp Glucose, Tinh bột và Sucrose."
      ],
      flowSummary: "Ánh sáng + H₂O → [Thylakoid / Pha sáng] → O₂ + ATP + NADPH → [Stroma / Pha tối Calvin + CO₂] → C₆H₁₂O₆."
    },
    mechanism: "Khí quyển chứa CO₂ nhưng điều kiện nóng khô làm enzyme Rubisco gắn với O₂ gây quang hô hấp lãng phí năng lượng ở thực vật C3. Thực vật C4 giải quyết bằng cách dùng enzyme PEP-carboxylase cố định CO₂ sơ bộ ở tế bào mô giậu tạo hợp chất 4 carbon (axit malic), sau đó vận chuyển vào tế bào bao bó mạch giải phóng nồng độ CO₂ cao cục bộ cho Rubisco, triệt tiêu hoàn toàn quang hô hấp.",
    applications: [
      "Tăng diện tích lá và mật độ gieo trồng hợp lí để hấp thu tối đa quang năng mà không bị che khuất lẫn nhau.",
      "Tăng cường độ quang hợp bằng cách bón phân hữu cơ sinh ra CO₂, chiếu sáng nhân tạo (đèn LED chuyên dụng cho cây trồng trong nhà kính).",
      "Chọn tạo giống cây trồng có hệ sắc tố bền bỉ, chỉ số diện tích lá tối ưu và hoạt tính quang hợp cao."
    ],
    experimentsNote: "Đo cường độ quang hợp bằng phương pháp đo thể tích bọt khí O₂ giải phóng từ cành rong đuôi chó trong dung dịch NaHCO₃ loãng khi thay đổi khoảng cách nguồn sáng.",
    quiz: [
      {
        q: "O₂ giải phóng ra trong quang hợp ở thực vật có nguồn gốc trực tiếp từ phân tử nào sau đây?",
        options: [
          "A. Khí carbon dioxide (CO₂)",
          "B. Phân tử nước (H₂O) qua phản ứng quang phân li",
          "C. Phân tử đường Glucose (C₆H₁₂O₆)",
          "D. Hợp chất cao năng ATP"
        ],
        answer: 1,
        explain: "Nhờ thí nghiệm dùng đồng vị phóng xạ ¹⁸O, các nhà khoa học đã chứng minh toàn bộ khí O₂ giải phóng bắt nguồn từ sự quang phân li phân tử nước ở màng thylakoid trong pha sáng."
      },
      {
        q: "Thực vật CAM (như xương rồng, thanh long, dứa) có đặc điểm thích nghi nào để chống mất nước ở môi trường sa mạc khô hạn?",
        options: [
          "A. Mở khí khổng suốt cả ngày và đóng kín hoàn toàn ban đêm",
          "B. Không quang hợp mà chỉ sống dị dưỡng",
          "C. Mở khí khổng ban đêm để cố định CO₂ và đóng khí khổng vào ban ngày",
          "D. Không có lục lạp trong tế bào lá"
        ],
        answer: 2,
        explain: "Cây CAM tách biệt thời gian: ban đêm mát mẻ khí khổng mở ra hấp thụ CO₂ dự trữ dưới dạng axit malic trong không bào; ban ngày đóng khí khổng chống bốc hơi nước và giải phóng CO₂ cho chu trình Calvin."
      },
      {
        q: "Thực vật C4 (ngô, mía, cỏ lồng vực) có năng suất sinh học cao hơn thực vật C3 chủ yếu nhờ ưu thế nào?",
        options: [
          "A. Có quá trình quang hô hấp mạnh mẽ giải phóng nhiều năng lượng",
          "B. Khí khổng luôn mở 24/24 giờ bất chấp nhiệt độ",
          "C. Không có quang hô hấp nhờ cơ chế tập trung CO₂ tại tế bào bao bó mạch",
          "D. Không cần ánh sáng mặt trời vẫn tiến hành pha sáng bình thường"
        ],
        answer: 2,
        explain: "Thực vật C4 thích nghi khí hậu nhiệt đới nắng gắt, enzyme PEP-carboxylase không liên kết với O₂, giúp loại bỏ hoàn toàn hiện tượng quang hô hấp gây lãng phí 25-50% sản phẩm quang hợp."
      }
    ]
  },

  5: {
    num: 5,
    chapter: 1,
    isPractical: true,
    title: "Thực hành: Quang hợp ở thực vật",
    subtitle: "Tách chiết sắc tố quang hợp bằng sắc kí giấy và thí nghiệm chứng minh sự tạo thành tinh bột, giải phóng O₂",
    objectives: [
      "Chiết rút và tách các phân nhóm sắc tố (chlorophyll và carotenoid) từ lá tươi bằng dung môi hữu cơ.",
      "Chứng minh thực nghiệm sự hình thành tinh bột trong quang hợp bằng thuốc thử dung dịch Lugol / Iodine.",
      "Chứng minh khí oxygen giải phóng trong quang hợp bằng cây thủy sinh (rong đuôi chó) và tàn đóm đỏ."
    ],
    hypothesis: "Lá cây chỉ tổng hợp được tinh bột ở những vùng được chiếu sáng; quá trình quang hợp dưới ánh sáng giải phóng khí oxygen làm bùng cháy que đóm còn tàn than hồng.",
    variables: {
      independent: "Điều kiện chiếu sáng (vùng lá bị che băng giấy đen vs vùng lá để lộ sáng; cành rong để ngoài sáng vs cành rong trong tối).",
      dependent: "Màu sắc xuất hiện khi nhỏ dung dịch iodine (màu xanh tím vs không đổi); số lượng bọt khí thoát ra và phản ứng của tàn đóm đó.",
      controlled: "Cùng một cây thí nghiệm, cùng nhiệt độ nước, cùng thời gian nhúng cồn và dung dịch thuốc thử."
    },
    materials: [
      "Mẫu vật: Cây khoai lang (hoặc dâm bụt) đã để trong bóng tối 2 ngày để tiêu hết tinh bột, cành rong đuôi chó xanh tốt.",
      "Dụng cụ & Hóa chất: Cồn 90°, dung dịch Iodine/Lugol 1%, ống nghiệm, cốc đun cách thủy, đèn cồn, giá đỡ, giấy sắc kí, benzen/ete dầu hỏa, băng giấy đen, que đóm."
    ],
    procedure: [
      "Thí nghiệm 1 (Tách sắc tố): Giã nát 2g lá xanh trong cối sứ với 10ml cồn 90° -> lọc lấy dịch chiết màu xanh lục. Chấm dịch lên đầu giấy sắc kí, đặt đáy giấy vào ống nghiệm chứa dung dịch dung môi -> các vạch sắc tố tách dần từ dưới lên: Chlorophyll b -> Chlorophyll a -> Xanthophyll -> Carotene.",
      "Thí nghiệm 2 (Chứng minh tạo tinh bột): Dán băng giấy đen che một phần cả 2 mặt của chiếc lá; đem cây ra nắng 4-6 giờ. Hái lá, tháo băng đen, đun sôi trong nước 5 phút rồi nhúng vào cồn sôi cách thủy để tẩy hết diệp lục -> rửa nước ấm, trải ra đĩa petri và nhỏ dung dịch Iodine.",
      "Thí nghiệm 3 (Chứng minh giải phóng O₂): Cho cành rong đuôi chó vào phễu thủy tinh úp ngược trong cốc nước; chụp ống nghiệm chứa đầy nước lên cuống phễu; chiếu đèn sáng. Bọt khí đẩy nước trong ống nghiệm xuống; đưa que đóm còn tàn đỏ vào miệng ống nghiệm."
    ],
    results: [
      "Kết quả TN1: Các sắc tố di chuyển với tốc độ khác nhau do độ hòa tan và kích thước phân tử khác biệt, xuất hiện rõ 4 dải màu đặc trưng trên giấy sắc kí.",
      "Kết quả TN2: Vùng lá để trần nhận ánh sáng chuyển sang màu xanh tím đậm đặc trưng (phản ứng tinh bột với Iodine); phần lá bị che băng đen giữ màu trắng ngà do không quang hợp được.",
      "Kết quả TN3: Khí tích tụ ở đầu ống nghiệm làm que đóm bùng cháy sáng bừng trở lại, chứng minh khí tích tụ là Oxygen tinh khiết."
    ],
    conclusionAndSafety: [
      "Kết luận: Ánh sáng là điều kiện bắt buộc để thực vật tổng hợp tinh bột; quang hợp liên tục giải phóng khí oxygen; lá cây chứa hỗn hợp sắc tố chlorophyll và carotenoid.",
      "Lưu ý an toàn tuyệt đối: Cồn và các dung môi hữu cơ cực kì dễ bay hơi và bốc cháy. Bắt buộc phải đun cách thủy trong cốc nước nóng, KHÔNG ĐƯỢC đun trực tiếp ống cồn trên ngọn lửa đèn cồn; dập lửa đèn cồn bằng chụp nắp."
    ],
    quiz: [
      {
        q: "Trước khi tiến hành thí nghiệm chứng minh lá tổng hợp tinh bột khi quang hợp, tại sao phải để chậu cây trong bóng tối từ 24 - 48 giờ?",
        options: [
          "A. Để kích thích khí khổng mở to tối đa",
          "B. Để cây tiêu thụ hết toàn bộ lượng tinh bột đã tích lũy sẵn trong lá từ trước",
          "C. Để làm tăng hàm lượng sắc tố carotene trong tế bào",
          "D. Để làm cho thành tế bào mềm ra dễ thấm cồn"
        ],
        answer: 1,
        explain: "Giai đoạn 'nhịn sáng' giúp tế bào hô hấp tiêu thụ sạch lượng tinh bột dự trữ trước đó, đảm bảo tinh bột phát hiện sau thí nghiệm hoàn toàn do lần chiếu sáng mới tạo ra."
      },
      {
        q: "Tại sao phải đun lá cây thí nghiệm trong cồn sôi cách thủy trước khi nhỏ thuốc thử iodine?",
        options: [
          "A. Để diệt trừ vi khuẩn bám trên mặt lá",
          "B. Để hòa tan và tẩy sạch sắc tố diệp lục màu xanh, giúp quan sát rõ màu xanh tím của phức hệ tinh bột - iodine",
          "C. Để làm biến tính tinh bột thành đường khử",
          "D. Để tăng tốc độ thoát hơi nước của khí khổng"
        ],
        answer: 1,
        explain: "Diệp lục có màu xanh lục sẽ che lấp màu phản ứng; cồn nóng hòa tan sắc tố diệp lục làm lá chuyển sang màu trắng ngà, giúp quan sát phản ứng đổi màu xanh tím cực kì rõ ràng."
      },
      {
        q: "Khi làm thí nghiệm tách chiết sắc tố quang hợp, quy tắc an toàn phòng lab nào sau đây là quan trọng nhất?",
        options: [
          "A. Phải uống nhiều nước trước khi vào phòng",
          "B. Đun trực tiếp cốc cồn trên ngọn lửa đèn cồn không qua đệm nước",
          "C. Tuyệt đối không đun trực tiếp dung môi cồn/ete trên lửa trần vì nguy cơ hỏa hoạn cháy nổ cực kì cao",
          "D. Đóng kín toàn bộ cửa sổ phòng thí nghiệm không cho khí lưu thông"
        ],
        answer: 2,
        explain: "Cồn, benzen và ete dầu hỏa có nhiệt độ sôi thấp và dễ bốc cháy; bắt buộc phải đun cách thủy gián tiếp và thao tác nơi thông gió."
      }
    ]
  },

  6: {
    num: 6,
    chapter: 1,
    isPractical: false,
    title: "Hô hấp ở thực vật",
    subtitle: "Bản chất, 3 giai đoạn hô hấp hiếu khí, lên men và mối quan hệ giữa quang hợp với hô hấp",
    objectives: [
      "Định nghĩa được hô hấp ở thực vật và viết phương trình tổng quát của hô hấp hiếu khí.",
      "Phân tích 3 giai đoạn của hô hấp hiếu khí (đường phân, chu trình Krebs, chuỗi truyền electron).",
      "So sánh hô hấp hiếu khí và lên men kị khí (lên men rượu, axit lactic) khi thiếu oxygen.",
      "Trình bày mối liên hệ chặt chẽ giữa hô hấp với quang hợp và ứng dụng trong bảo quản nông sản."
    ],
    concepts: [
      {
        term: "Hô hấp ở thực vật (Plant respiration)",
        def: "Quá trình phân giải các hợp chất hữu cơ phức tạp (chủ yếu là glucose) thành các chất đơn giản (CO₂ và H₂O), đồng thời giải phóng năng lượng dưới dạng ATP và nhiệt năng."
      },
      {
        term: "Phương trình tổng quát hô hấp hiếu khí",
        def: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Q (~30-32 ATP + Nhiệt)."
      },
      {
        term: "Đường phân (Glycolysis)",
        def: "Diễn ra tại bào tương: 1 phân tử Glucose (6C) bị phân giải thành 2 phân tử Pyruvate (3C), thu được 2 ATP và 2 NADH (không cần O₂)."
      },
      {
        term: "Chu trình Krebs (Citric acid cycle)",
        def: "Diễn ra tại chất nền ti thể: Pyruvate chuyển thành Acetyl-CoA đi vào chu trình Krebs, giải phóng toàn bộ các nguyên tử carbon dưới dạng CO₂, tạo 2 ATP, nhiều NADH và FADH₂."
      },
      {
        term: "Chuỗi truyền electron ti thể & Oxy hóa photphoryl",
        def: "Diễn ra tại màng trong ti thể: NADH và FADH₂ truyền electron cho O₂ (chất nhận electron cuối cùng) để tạo H₂O; năng lượng giải phóng được bơm proton H⁺ tạo dòng gradient tổng hợp khoảng 26-28 ATP."
      },
      {
        term: "Lên men (Fermentation)",
        def: "Xảy ra khi rễ cây bị úng nước thiếu O₂: Pyruvate bị biến đổi thành rượu ethanol hoặc lactic acid, chỉ thu được 2 ATP từ đường phân, sinh độc chất làm chết tế bào rễ."
      }
    ],
    process: {
      title: "Tiến trình phân giải glucose qua 3 chặng hô hấp hiếu khí trong tế bào",
      steps: [
        "1. Đường phân (Bào tương): Glucose (6C) → 2 Pyruvate (3C) + 2 ATP + 2 NADH.",
        "2. Oxy hóa pyruvate & Chu trình Krebs (Chất nền ti thể): 2 Pyruvate → 6 CO₂ + 2 ATP + 8 NADH + 2 FADH₂.",
        "3. Chuỗi chuyền electron & Photphoryl hóa (Màng trong ti thể): NADH và FADH₂ chuyển giao e⁻ qua phức hệ cytochrome đến O₂ → Tạo H₂O và ~26-28 ATP.",
        "4. Tổng hiệu suất: 1 phân tử Glucose oxy hóa hoàn toàn tạo ~30-32 ATP và tỏa một lượng nhiệt đáng kể."
      ],
      flowSummary: "Glucose → [Bào tương: Đường phân] → 2 Pyruvate → [Chất nền ti thể: Krebs] → CO₂ + Coenzyme khử → [Màng trong ti thể + O₂] → H₂O + ~30-32 ATP."
    },
    mechanism: "Quang hợp và hô hấp là hai quá trình sinh lí gắn liền và đối lập nhau. Sản phẩm của quang hợp (glucose, O₂) là nguyên liệu trực tiếp cho hô hấp; ngược lại, sản phẩm của hô hấp (CO₂, H₂O) lại là nguồn nguyên liệu đầu vào cho quang hợp. ATP sinh ra từ hô hấp cung cấp cho mọi hoạt động sinh trưởng, hút khoáng chủ động của rễ và vận chuyển chất trong cây.",
    applications: [
      "Bảo quản hạt giống & nông sản: Giảm độ ẩm (phơi/sấy khô), hạ thấp nhiệt độ (kho lạnh), giảm nồng độ O₂ và tăng nồng độ CO₂ để ức chế hô hấp xuống mức tối thiểu nhằm kéo dài thời gian dự trữ.",
      "Trồng trọt: Xới đất tơi xốp, làm cỏ sục bùn, thoát nước kịp thời khi mưa lớn để tránh úng ngập làm rễ thiếu O₂ chuyển sang lên men gây độc thối rễ."
    ],
    experimentsNote: "Hạt đang nảy mầm có cường độ hô hấp cực kì mạnh, giải phóng lượng nhiệt và CO₂ lớn, là đối tượng lí tưởng cho mọi thí nghiệm hô hấp ở thực vật.",
    quiz: [
      {
        q: "Giai đoạn nào trong quá trình hô hấp hiếu khí ở tế bào thực vật tạo ra nhiều phân tử ATP nhất?",
        options: [
          "A. Giai đoạn đường phân ở tế bào chất",
          "B. Chu trình Krebs trong chất nền ti thể",
          "C. Chuỗi truyền electron hô hấp ở màng trong ti thể",
          "D. Quá trình lên men rượu trong không bào"
        ],
        answer: 2,
        explain: "Chuỗi truyền electron hô hấp trên màng trong ti thể kết hợp hóa thẩm tổng hợp được khoảng 26 đến 28 phân tử ATP trên mỗi phân tử glucose phân giải."
      },
      {
        q: "Khi cây trồng trên cạn bị ngập úng lâu ngày rễ cây thường bị chết và cây héo úa, nguyên nhân sinh học cốt lõi là gì?",
        options: [
          "A. Cây hút quá nhiều nước làm vỡ tế bào lông hút",
          "B. Đất ngập nước thiếu O₂, tế bào rễ chuyển sang lên men tạo ít năng lượng và tích lũy chất độc hại",
          "C. Nước mưa làm trôi sạch toàn bộ các nguyên tố vi lượng",
          "D. Khí khổng mở quá to làm hơi nước thoát ra ồ ạt"
        ],
        answer: 1,
        explain: "Ngập úng làm đất kị khí thiếu O₂ trầm trọng, rễ cây buộc phải lên men chỉ thu được 2 ATP/glucose và tích lũy ethanol độc làm tế bào lông hút bị chết, không hút được nước khiến cây héo."
      },
      {
        q: "Biện pháp nào sau đây KHÔNG phù hợp để bảo quản hạt giống ngũ cốc trong kho dự trữ?",
        options: [
          "A. Phơi hoặc sấy khô hạt đưa độ ẩm về dưới 12 - 13%",
          "B. Bảo quản trong kho lạnh có kiểm soát nhiệt độ thấp",
          "C. Bơm thêm nhiều hơi nước và giữ ấm môi trường kho chứa",
          "D. Tăng nồng độ CO₂ và hút bớt khí O₂ trong kho kín"
        ],
        answer: 2,
        explain: "Độ ẩm và nhiệt độ cao sẽ kích thích hạt nảy mầm và làm tăng vọt cường độ hô hấp, tiêu tốn chất dự trữ và sinh nấm mốc phá hủy hạt giống."
      }
    ]
  },

  7: {
    num: 7,
    chapter: 1,
    isPractical: true,
    title: "Thực hành: Một số thí nghiệm về hô hấp ở thực vật",
    subtitle: "Chứng minh hạt nảy mầm thải khí CO₂, tiêu hao O₂ và tỏa nhiệt năng",
    objectives: [
      "Thiết kế và lắp đặt hệ thống chứng minh sự thải khí CO₂ của hạt đang nảy mầm bằng nước vôi trong Ca(OH)₂.",
      "Chứng minh thực vật hô hấp tiêu thụ khí oxygen bằng que đóm và bình hạt nảy mầm kín.",
      "Đo và chứng minh sự giải phóng nhiệt năng của hạt nảy mầm bằng nhiệt kế trong bình cách nhiệt."
    ],
    hypothesis: "Hạt đang nảy mầm có quá trình hô hấp hiếu khí diễn ra mãnh liệt, liên tục tiêu thụ khí O₂, thải ra khí CO₂ làm đục nước vôi trong và giải phóng nhiệt năng làm tăng nhiệt độ bình.",
    variables: {
      independent: "Trạng thái của hạt (bình hạt sống đang nảy mầm vs bình hạt đã luộc chín làm đối chứng).",
      dependent: "Độ đục của nước vôi trong; que đóm bị tắt khi đưa vào bình; số độ tăng trên nhiệt kế (°C).",
      controlled: "Khối lượng hạt, kích thước bình tam giác, độ kín của nút cao su và nhiệt độ môi trường thử nghiệm."
    },
    materials: [
      "Mẫu vật: 100g hạt đậu xanh (hoặc đậu đen, ngô) đã ngâm nước ấm 2-4 giờ cho nứt nanh nảy mầm; 100g hạt đậu cùng loại đã luộc chín để nguội (mẫu đối chứng).",
      "Dụng cụ & Hóa chất: 2 bình tam giác có nút cao su đục lỗ kèm ống dẫn khí, 2 bình cách nhiệt (phích nhỏ), 2 nhiệt kế chia độ, dung dịch nước vôi trong Ca(OH)₂, nến hoặc que đóm."
    ],
    procedure: [
      "Thí nghiệm 1 (Thải khí CO₂): Cho 100g hạt sống nảy mầm vào bình A, 100g hạt luộc chín vào bình B; đậy nút kín 2 giờ. Sau đó lắp ống dẫn khí từ bình sục vào ống nghiệm chứa nước vôi trong; từ từ mở khóa hoặc bơm nước vào bình để đẩy khí sang ống nghiệm.",
      "Thí nghiệm 2 (Hút khí O₂): Cho hạt nảy mầm vào bình tam giác nút kín để qua đêm. Hôm sau mở nhanh nút bình và đưa que đóm đang cháy vào miệng bình.",
      "Thí nghiệm 3 (Tỏa nhiệt): Cho hạt nảy mầm vào phích A, hạt luộc chín vào phích B; cắm nhiệt kế vào giữa khối hạt trong mỗi phích, nhét bông gòn quanh miệng phích để cách nhiệt. Ghi nhận nhiệt độ ban đầu và sau mỗi 2 giờ."
    ],
    results: [
      "Kết quả TN1: Ống nghiệm dẫn khí từ bình hạt nảy mầm A xuất hiện kết tủa trắng đục CaCO₃ dày đặc; ống nghiệm từ bình hạt luộc chín B vẫn trong suốt.",
      "Kết quả TN2: Que đóm đang cháy khi đưa vào bình hạt sống nảy mầm lập tức bị tắt ngấm ngay lập tức (do lượng O₂ trong bình đã bị hô hấp tiêu thụ cạn kiệt).",
      "Kết quả TN3: Nhiệt độ trong phích A (hạt sống) tăng lên rõ rệt (tăng 3-7°C so với nhiệt độ phòng); phích B (hạt luộc chín) nhiệt độ không tăng hoặc giảm dần."
    ],
    conclusionAndSafety: [
      "Kết luận: Quá trình hô hấp ở thực vật tiêu thụ khí O₂, đồng thời sản sinh ra khí CO₂ và giải phóng một phần năng lượng dưới dạng nhiệt năng.",
      "Lưu ý an toàn: Dung dịch Ca(OH)₂ có tính kiềm, tránh để dính vào mắt hay da; cẩn thận khi sử dụng que đóm và ngọn lửa, thổi tắt và nhúng tàn đóm vào cốc nước sau khi xong thí nghiệm."
    ],
    quiz: [
      {
        q: "Tại sao trong thí nghiệm hô hấp ở hạt nảy mầm, người ta phải chuẩn bị một bình chứa hạt đã luộc chín?",
        options: [
          "A. Để cung cấp thêm chất dinh dưỡng cho hạt sống",
          "B. Làm mẫu đối chứng tiêu chuẩn để khẳng định các biến đổi quan sát được chỉ do hoạt động sống của tế bào hạt gây ra",
          "C. Để làm tăng nhiệt độ chung của phòng thí nghiệm",
          "D. Nhằm mục đích thu hút thêm khí O₂ từ không khí"
        ],
        answer: 1,
        explain: "Hạt luộc chín đã chết hoàn toàn các tế bào và enzyme, đóng vai trò mẫu đối chứng âm (negative control) hoàn hảo chứng minh sự biến đổi chỉ xảy ra khi tế bào còn sống hô hấp."
      },
      {
        q: "Hiện tượng nước vôi trong Ca(OH)₂ bị vẩn đục khi sục khí từ bình hạt nảy mầm sang là do phản ứng tạo thành kết tủa của chất nào?",
        options: [
          "A. CaSO₄",
          "B. CaCO₃",
          "C. Ca(HCO₃)₂",
          "D. CaCl₂"
        ],
        answer: 1,
        explain: "Khí CO₂ do hô hấp sinh ra phản ứng với dung dịch kiềm Ca(OH)₂ tạo thành kết tủa canxi cacbonat không tan màu trắng: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O."
      },
      {
        q: "Khi đưa một que đóm đang cháy vào bình chứa hạt nảy mầm đã đậy kín 12 giờ, que đóm bị tắt ngay lập tức là bằng chứng cho thấy điều gì?",
        options: [
          "A. Hạt nảy mầm đã thải ra một lượng lớn khí độc CO",
          "B. Nồng độ O₂ trong bình đã bị hô hấp tiêu thụ giảm xuống mức không duy trì được sự cháy",
          "C. Độ ẩm trong bình quá khô làm tắt que",
          "D. Nhiệt độ trong bình quá lạnh dập tắt lửa"
        ],
        answer: 1,
        explain: "Sự cháy của que đóm đòi hỏi nồng độ O₂ tối thiểu (~14-16%); hô hấp tế bào của hạt nảy mầm đã sử dụng cạn O₂ trong bình kín làm lửa tắt lập tức."
      }
    ]
  },

  8: {
    num: 8,
    chapter: 1,
    isPractical: false,
    title: "Dinh dưỡng và tiêu hóa ở động vật",
    subtitle: "Tiêu hóa nội bào, ngoại bào, cấu tạo hệ tiêu hóa ở người và các nhóm động vật",
    objectives: [
      "Trình bày các giai đoạn của quá trình dinh dưỡng: Lấy thức ăn, Tiêu hóa, Hấp thụ, Đồng hóa và Thải bã.",
      "Phân biệt hình thức tiêu hóa nội bào (ở động vật đơn bào) và tiêu hóa ngoại bào (túi tiêu hóa, ống tiêu hóa).",
      "Mô tả cấu tạo và chức năng các cơ quan trong ống tiêu hóa ở người cùng các enzyme tiêu hóa chính.",
      "So sánh đặc điểm thích nghi cấu tạo hệ tiêu hóa giữa động vật ăn thịt và động vật ăn thực vật (động vật nhai lại)."
    ],
    concepts: [
      {
        term: "Quá trình dinh dưỡng",
        def: "Gồm 5 bước liên hoàn: Thu nhận thức ăn -> Tiêu hóa (biến đổi cơ học và hóa học) -> Hấp thụ chất dinh dưỡng -> Đồng hóa tế bào -> Thải bã."
      },
      {
        term: "Tiêu hóa nội bào vs Ngoại bào",
        def: "Tiêu hóa nội bào: diễn ra bên trong không bào tiêu hóa của tế bào nhờ enzyme lysosome (Trùng biến hình, Trùng giày); Tiêu hóa ngoại bào: diễn ra trong túi tiêu hóa (Ruột khoang) hoặc ống tiêu hóa hoàn chỉnh (từ giun đất đến động vật có xương sống)."
      },
      {
        term: "Ống tiêu hóa ở người",
        def: "Gồm: Miệng (răng nhai, enzyme amylase nước bọt) -> Thực quản -> Dạ dày (co bóp, HCl, pepsin phân giải protein) -> Ruột non (tiêu hóa và hấp thụ chính nhờ dịch tụy, dịch mật, dịch ruột) -> Ruột già (hấp thụ nước, tạo phân) -> Hậu môn."
      },
      {
        term: "Động vật ăn thực vật vs Ăn thịt",
        def: "Động vật ăn thịt: Răng nanh nhọn sắc, ruột ngắn, manh tràng kém phát triển do thịt mềm giàu dinh dưỡng dễ tiêu; Động vật ăn thực vật (Trâu, bò): Răng hàm phát triển nghiền lá xơ, dạ dày 4 ngăn (dạ cỏ, dạ tổ ong, dạ lá sách, dạ múi khế), ruột rất dài và manh tràng lớn có vi sinh vật cộng sinh phân giải cellulose."
      }
    ],
    process: {
      title: "Tiến trình tiêu hóa và hấp thụ các nhóm chất dinh dưỡng trong ống tiêu hóa ở người",
      steps: [
        "1. Khoang miệng: Nhai nghiền cơ học + Amylase nước bọt biến đổi một phần tinh bột chín thành đường maltose.",
        "2. Dạ dày: Co bóp đảo trộn tạo nhũ trấp + Axit HCl hoạt hóa Pepsinogen thành Pepsin phân giải protein chuỗi dài thành chuỗi polypeptide ngắn.",
        "3. Ruột non: Enzyme tụy (Trypsin, Chymotrypsin, Amylase, Lipase) và dịch mật nhũ tương hóa lipid biến đổi triệt để thành amino acid, đường đơn glucose và axit béo.",
        "4. Hấp thụ tại lông ruột: Glucose, amino acid đi vào mao mạch máu về gan lọc; Axit béo và glycerol hấp thu vào mạch bạch huyết.",
        "5. Ruột già & Thải bã: Tái hấp thu nước, khoáng và cô đặc cặn bã tạo phân đào thải qua hậu môn."
      ],
      flowSummary: "Miệng (tinh bột) → Dạ dày (protein) → Ruột non (tiêu hóa triệt để & vi nhung mao hấp thụ dinh dưỡng) → Ruột già (hút nước) → Hậu môn."
    },
    mechanism: "Dạ dày người tiết ra HCl có pH cực toan (1.5 - 2.0) giúp diệt khuẩn và hoạt hóa enzyme pepsin nhưng không làm loét chính niêm mạc dạ dày nhờ có lớp chất nhầy mucin kiềm dày đặc bao phủ bảo vệ. Ở ruột non, hàng triệu lông ruột và vi nhung mao làm tăng diện tích bề mặt tiếp xúc lên đến hơn 300 m², tối ưu hóa hấp thụ dinh dưỡng theo cơ chế khuếch tán và vận chuyển chủ động.",
    applications: [
      "Xây dựng chế độ ăn uống khoa học: Ăn chín uống sôi, nhai kĩ no lâu giúp enzyme tiếp xúc tốt với thức ăn, giảm gánh nặng cho dạ dày.",
      "Phòng ngừa bệnh tiêu hóa: Bổ sung chất xơ chống táo bón, hạn chế ăn mặn và đồ chua cay giảm nguy cơ viêm loét dạ dày tá tràng.",
      "Chăn nuôi: Phối trộn thức ăn ủ chua vi sinh cho trâu bò giúp tăng cường tiêu hóa cellulose, tăng sản lượng thịt sữa."
    ],
    experimentsNote: "Khảo sát hoạt tính của enzyme amylase trong nước bọt: Nhỏ amylase vào hồ tinh bột ở các nhiệt độ và pH khác nhau, sau đó thử bằng thuốc thử iodine để xác định điều kiện tối ưu (37°C, pH ~6.8).",
    quiz: [
      {
        q: "Trong các nhóm động vật sau đây, nhóm nào có hình thức tiêu hóa thức ăn hoàn toàn bằng tiêu hóa nội bào?",
        options: [
          "A. Thủy tức và San hô (Ruột khoang)",
          "B. Động vật đơn bào như Trùng giày, Trùng biến hình",
          "C. Giun đất và Côn trùng",
          "D. Động vật có xương sống"
        ],
        answer: 1,
        explain: "Động vật đơn bào chưa có khoang cơ thể hay ống tiêu hóa, thức ăn được lấy vào theo lối thực bào và phân giải hoàn toàn bên trong không bào tiêu hóa (tiêu hóa nội bào)."
      },
      {
        q: "Dạ dày của động vật nhai lại (như trâu, bò, dê) gồm 4 ngăn theo thứ tự lần lượt là gì?",
        options: [
          "A. Dạ cỏ → Dạ tổ ong → Dạ lá sách → Dạ múi khế",
          "B. Dạ múi khế → Dạ cỏ → Dạ tổ ong → Dạ lá sách",
          "C. Dạ lá sách → Dạ cỏ → Dạ múi khế → Dạ tổ ong",
          "D. Dạ tổ ong → Dạ cỏ → Dạ múi khế → Dạ lá sách"
        ],
        answer: 0,
        explain: "Thức ăn vào Dạ cỏ (chứa vi sinh vật cộng sinh) -> sang Dạ tổ ong (ợ lên nhai lại) -> sang Dạ lá sách (ép hút bớt nước) -> vào Dạ múi khế (dạ dày thật sự tiết HCl và pepsin)."
      },
      {
        q: "Chất dinh dưỡng sau khi được nhung mao ruột non ở người hấp thụ sẽ được vận chuyển theo hai con đường nào?",
        options: [
          "A. Con đường không khí và con đường dịch ngoại bào",
          "B. Con đường máu (về tĩnh mạch cửa gan) và con đường mạch bạch huyết",
          "C. Con đường tủy sống và con đường dịch não tủy",
          "D. Con đường bài tiết qua thận và qua tuyến mồ hôi"
        ],
        answer: 1,
        explain: "Các chất tan trong nước (đường đơn, amino acid, khoáng) hấp thu vào mao mạch máu về gan; các chất tan trong dầu (axit béo, vitamin A, D, E, K) hấp thu vào mao mạch bạch huyết."
      }
    ]
  },

  9: {
    num: 9,
    chapter: 1,
    isPractical: false,
    title: "Hô hấp ở động vật",
    subtitle: "4 hình thức trao đổi khí: Qua bề mặt cơ thể, hệ thống ống khí, mang và phổi",
    objectives: [
      "Nêu định nghĩa hô hấp ở động vật và phân tích các đặc điểm của bề mặt trao đổi khí hiệu quả.",
      "Mô tả và phân biệt 4 hình thức trao đổi khí chính ở động vật trong sinh giới.",
      "Giải thích hiện tượng dòng chảy song song ngược chiều ở mang cá và cấu tạo túi khí độc đáo ở chim.",
      "Trình bày cơ chế thông khí ở phổi người và các biện pháp bảo vệ hệ hô hấp khỏe mạnh."
    ],
    concepts: [
      {
        term: "Bề mặt trao đổi khí",
        def: "Bộ phận cơ thể tiếp xúc trực tiếp với môi trường để trao đổi O₂ và CO₂; đáp ứng 4 tiêu chuẩn: Diện tích bề mặt lớn, mỏng ướt, mạng lưới mao mạch dày đặc, có sự lưu thông khí liên tục."
      },
      {
        term: "Trao đổi khí qua bề mặt cơ thể",
        def: "Gặp ở Động vật nguyên sinh, Giun tròn, Giun đất, Lưỡng cư; da phải luôn ẩm ướt để khí hòa tan và khuếch tán trực tiếp vào mao mạch dưới da."
      },
      {
        term: "Hệ thống ống khí (Tracheae)",
        def: "Gặp ở Côn trùng; hệ thống phân nhánh từ các lỗ thở dẫn khí O₂ trực tiếp tới từng tế bào cơ thể, không cần hệ tuần hoàn vận chuyển khí."
      },
      {
        term: "Hô hấp bằng mang (Gills)",
        def: "Gặp ở Cá, Thân mềm, Giáp xác; các lá mang có vô số phiến mang mỏng; có cơ chế dòng nước chảy qua mang ngược chiều với dòng máu trong mao mạch (Countercurrent exchange) giúp hấp thụ tới 80-90% O₂ hòa tan trong nước."
      },
      {
        term: "Hô hấp bằng phổi (Lungs)",
        def: "Gặp ở Bò sát, Chim, Thú và Người; cấu tạo từ hàng triệu phế nang có mạng mao mạch bao quanh. Phổi chim gắn liền với hệ thống 9 túi khí, thông khí một chiều liên tục cả khi hít vào lẫn thở ra (hiệu quả hô hấp cao nhất trên cạn)."
      }
    ],
    process: {
      title: "Tiến trình trao đổi khí và cơ chế thông khí phổi ở người",
      steps: [
        "1. Hít vào: Cơ hoành co hạ xuống, cơ liên sườn ngoài co nâng lồng ngực -> Thể tích khoang ngực tăng, áp suất phế nang giảm thấp hơn áp suất khí quyển -> Không khí tràn vào phổi.",
        "2. Trao đổi khí tại phế nang: O₂ khuếch tán từ lòng phế nang (PO₂ ~104 mmHg) vào máu mao mạch (PO₂ ~40 mmHg); CO₂ khuếch tán ngược từ máu (PCO₂ ~45 mmHg) vào phế nang.",
        "3. Vận chuyển khí trong máu: Hồng cầu chứa Hemoglobin (Hb) kết hợp O₂ tạo Oxyhemoglobin (HbO₂) theo hệ tuần hoàn đến các mô tế bào cơ thể.",
        "4. Trao đổi khí tại mô: O₂ rời Hb khuếch tán vào tế bào phục vụ hô hấp; CO₂ từ tế bào khuếch tán vào máu (chủ yếu dưới dạng ion HCO₃⁻).",
        "5. Thở ra: Cơ hoành và cơ liên sườn dãn ra, lồng ngực hạ xuống -> Thể tích giảm, áp suất tăng đẩy khí giàu CO₂ ra ngoài."
      ],
      flowSummary: "Khí quyển → Mũi/Khí quản → Phế nang → [Khuếch tán qua màng phế nang - mao mạch] → Máu (Hemoglobin) → Tế bào mô → CO₂ khuếch tán ngược lại."
    },
    mechanism: "Hiện tượng dòng chảy ngược chiều ở mang cá là sự thích nghi tinh tế: Dòng nước chảy từ trước ra sau qua các phiến mang ngược chiều với dòng máu chảy trong mao mạch mang. Nhờ đó, trên toàn bộ chiều dài tiếp xúc luôn duy trì gradient chênh lệch phân áp O₂ giữa nước và máu, cho phép máu cá lấy được lượng O₂ hòa tan tối đa trong nước.",
    applications: [
      "Không hút thuốc lá và tránh khói thuốc thụ động để bảo vệ tế bào lông rung phế quản và phế nang khỏi bị phá hủy (bệnh phổi tắc nghẽn mãn tính - COPD).",
      "Luyện tập thể dục thể thao, hít thở sâu làm tăng dung tích sống (Vital Capacity) của phổi.",
      "Trong nuôi trồng thủy sản: Bật quạt nước sục khí liên tục vào ban đêm nhằm đảm bảo nồng độ O₂ hòa tan trong ao nuôi tôm, cá."
    ],
    experimentsNote: "Đo dung tích sống của phổi bằng phế dung kế: Hít vào gắng sức hết mức rồi thở ra tối đa qua đầu ngậm vào phế dung kế để xác định dung tích phổi.",
    quiz: [
      {
        q: "Tại sao cá xương có thể lấy được hơn 80% lượng oxygen hòa tan trong nước khi nước chảy qua mang?",
        options: [
          "A. Do mang cá chứa một loại enzyme đặc biệt phân hủy nước thành O₂",
          "B. Do dòng nước chảy qua các phiến mang ngược chiều với dòng máu chảy trong mao mạch mang",
          "C. Do nước chảy qua mang rất chậm giúp cá kịp nuốt nước vào bụng",
          "D. Do cá luôn mở miệng bơi ngược dòng nước"
        ],
        answer: 1,
        explain: "Cơ chế dòng chảy song song ngược chiều (countercurrent exchange) đảm bảo máu luôn gặp dòng nước có phân áp O₂ cao hơn, duy trì gradient khuếch tán trên toàn bộ chiều dài mao mạch mang."
      },
      {
        q: "Hệ thống hô hấp của loài động vật nào sau đây đạt hiệu quả trao đổi khí cao nhất trong các loài động vật sống trên cạn?",
        options: [
          "A. Lưỡng cư (Ếch đồng)",
          "B. Bò sát (Thằn lằn)",
          "C. Lớp Chim (Chim bồ câu)",
          "D. Thú (Chuột, Thỏ)"
        ],
        answer: 2,
        explain: "Phổi chim thông với hệ thống túi khí giúp dòng khí qua phổi luôn là dòng khí giàu O₂ một chiều liên tục trong cả thì hít vào lẫn thì thở ra, không có khí cặn tồn đọng."
      },
      {
        q: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc điểm bắt buộc của một bề mặt trao đổi khí hiệu quả ở động vật?",
        options: [
          "A. Diện tích bề mặt tiếp xúc lớn",
          "B. Bề mặt phải mỏng và luôn ẩm ướt",
          "C. Có mạng lưới mao mạch máu dày đặc (ở động vật có hệ tuần hoàn)",
          "D. Phải có lớp sừng keratin dày bao phủ chống thoát nước"
        ],
        answer: 3,
        explain: "Lớp sừng dày sẽ cản trở hoàn toàn sự khuếch tán của khí; bề mặt trao đổi khí bắt buộc phải mỏng và ẩm ướt để khí dễ hòa tan và thấm qua."
      }
    ]
  },

  10: {
    num: 10,
    chapter: 1,
    isPractical: false,
    title: "Tuần hoàn ở động vật",
    subtitle: "Cấu tạo tim mạch, tuần hoàn hở vs kín, đơn vs kép, huyết áp và hoạt động tự động của tim",
    objectives: [
      "Phân biệt hệ tuần hoàn hở (Chân khớp, Thân mềm) và hệ tuần hoàn kín (Mực ống, Giun đốt, Động vật có xương sống).",
      "So sánh hệ tuần hoàn đơn (Cá) và hệ tuần hoàn kép (Lưỡng cư, Bò sát, Chim, Thú).",
      "Mô tả cấu tạo tim và hệ mạch ở người; giải thích tính tự động của tim nhờ hệ dẫn truyền tim.",
      "Phân tích chu kì hoạt động của tim, huyết áp, vận tốc máu và các yếu tố ảnh hưởng đến huyết áp."
    ],
    concepts: [
      {
        term: "Hệ tuần hoàn hở vs Hệ tuần hoàn kín",
        def: "Tuần hoàn hở: Máu tràn từ động mạch vào khoang cơ thể trộn lẫn dịch mô tạo thành 'hỗn hợp máu - dịch mô', tiếp xúc trực tiếp tế bào, áp lực máu thấp, tốc độ chậm; Tuần hoàn kín: Máu luôn lưu thông liên tục trong lòng mạch kín (động mạch -> mao mạch -> tĩnh mạch), áp lực cao hoặc trung bình, tốc độ nhanh."
      },
      {
        term: "Tuần hoàn đơn vs Kép",
        def: "Tuần hoàn đơn (Cá): Tim 2 ngăn (1 tâm nhĩ, 1 tâm thất), máu chỉ đi qua tim 1 lần trong mỗi vòng tuần hoàn; Tuần hoàn kép (Chim, Thú): Tim 4 ngăn hoàn chỉnh, máu đi qua tim 2 lần gồm Vòng tuần hoàn phổi (nhỏ) và Vòng tuần hoàn hệ thống (lớn), máu đỏ tươi giàu O₂ nuôi cơ thể không bị pha trộn."
      },
      {
        term: "Tính tự động của tim (Heart automaticity)",
        def: "Khả năng tim co bóp nhịp nhàng tự động độc lập nhờ Hệ dẫn truyền tim gồm: Nút xoang nhĩ (phát xung điện nhịp) -> Nút nhĩ thất -> Bó His -> Mạng sợi Purkinje."
      },
      {
        term: "Chu kì hoạt động của tim người",
        def: "Một chu kì tim kéo dài ~0.8 giây ở trạng thái nghỉ ngơi: Pha co tâm nhĩ (0.1s) -> Pha co tâm thất (0.3s) -> Pha dãn chung (0.4s). Nhờ thời gian dãn nghỉ bằng thời gian co nên tim có thể hoạt động bền bỉ suốt cuộc đời."
      },
      {
        term: "Huyết áp & Vận tốc máu",
        def: "Huyết áp là áp lực của máu tác động lên thành mạch (huyết áp tâm thu tối đa lúc tim co ~110-120 mmHg; huyết áp tâm trương tối thiểu lúc dãn ~70-80 mmHg). Huyết áp giảm dần: Động mạch chủ > Mao mạch > Tĩnh mạch chủ; Vận tốc máu chậm nhất ở mao mạch (để trao đổi chất) và nhanh nhất ở động mạch chủ."
      }
    ],
    process: {
      title: "Tiến trình dẫn truyền xung điện tim và hai vòng tuần hoàn kép ở người",
      steps: [
        "1. Phát xung: Nút xoang nhĩ tự động phát xung điện lan truyền khắp hai tâm nhĩ -> Hai tâm nhĩ co (0.1s) đẩy máu xuống thất.",
        "2. Dẫn truyền: Xung điện đến nút nhĩ thất -> truyền xuống Bó His -> tỏa theo mạng Purkinje kích thích hai tâm thất co mạnh (0.3s).",
        "3. Vòng tuần hoàn nhỏ (Phổi): Tâm thất phải co bơm máu giàu CO₂ theo động mạch phổi lên mao mạch phổi nhả CO₂ lấy O₂ -> theo 4 tĩnh mạch phổi về tâm nhĩ trái.",
        "4. Vòng tuần hoàn lớn (Hệ thống): Tâm thất trái co tống máu đỏ tươi giàu O₂ vào động mạch chủ -> phân nhánh mao mạch khắp cơ thể nuôi mô -> thu gom máu đỏ thẫm theo tĩnh mạch chủ trên và dưới đổ về tâm nhĩ phải.",
        "5. Pha dãn chung (0.4s): Toàn bộ cơ tim dãn ra, máu từ tĩnh mạch lại hút đầy vào hai tâm nhĩ chuẩn bị cho chu kì mới."
      ],
      flowSummary: "Thất trái → Động mạch chủ → Cơ quan mô → Tĩnh mạch chủ → Nhĩ phải → Thất phải → Động mạch phổi → Phổi → Tĩnh mạch phổi → Nhĩ trái."
    },
    mechanism: "Huyết áp phụ thuộc vào 3 yếu tố: Lực co bóp của tim và thể tích tâm thu, sức cản ngoại vi của lòng mạch (độ co dãn thành mạch, đường kính lòng mạch), và thể tích tuần hoàn máu trong lòng mạch. Khi ăn mặn, Na⁺ hút nước vào lòng mạch làm tăng thể tích máu dẫn đến tăng huyết áp.",
    applications: [
      "Kiểm soát huyết áp: Hạn chế ăn mặn (<5g muối/ngày), giảm mỡ động vật giàu cholesterol chống xơ vữa động mạch.",
      "Luyện tập thể thao đều đặn giúp tăng thể tích tâm thu, tim đập chậm rãi nhưng hiệu quả hơn, nâng cao sức khỏe tim mạch.",
      "Sơ cứu người bị ngưng tim đột ngột bằng phương pháp ép tim ngoài lồng ngực (CPR) kết hợp hà hơi thổi ngạt."
    ],
    experimentsNote: "Đo huyết áp cánh tay bằng huyết áp kế điện tử hoặc cơ; đếm mạch đập ở cổ tay trong 1 phút ở trạng thái nghỉ ngơi và sau khi vận động mạnh 30 giây (nhảy dây, thụt dầu) để quan sát đáp ứng nhịp tim.",
    quiz: [
      {
        q: "Ở hệ tuần hoàn người, huyết áp đạt giá trị cao nhất tại vị trí nào và thấp nhất tại vị trí nào?",
        options: [
          "A. Cao nhất ở mao mạch và thấp nhất ở động mạch chủ",
          "B. Cao nhất ở động mạch chủ và thấp nhất ở tĩnh mạch chủ",
          "C. Cao nhất ở tĩnh mạch phổi và thấp nhất ở tâm thất trái",
          "D. Bằng nhau ở tất cả mọi đoạn mạch"
        ],
        answer: 1,
        explain: "Huyết áp giảm dần suốt dọc hệ mạch do ma sát: cao nhất ở Động mạch chủ nhận máu trực tiếp từ thất trái (~120 mmHg) và thấp nhất tiệm cận 0 mmHg ở Tĩnh mạch chủ trước khi vào nhĩ phải."
      },
      {
        q: "Đặc điểm nào sau đây giúp tim người có thể hoạt động bền bỉ suốt cả cuộc đời mà không hề mỏi cơ?",
        options: [
          "A. Tim không tiêu tốn năng lượng ATP trong khi co bóp",
          "B. Cứ sau mỗi chu kì hoạt động (co 0.4s) lại có pha dãn chung nghỉ ngơi kéo dài 0.4s đủ phục hồi năng lượng",
          "C. Tim được cấu tạo từ các tế bào xương cứng cáp",
          "D. Cơ tim chỉ co bóp vào ban ngày, ban đêm ngừng hoàn toàn"
        ],
        answer: 1,
        explain: "Trong chu kì 0.8s, tim co 0.4s và dãn nghỉ 0.4s. Thời gian nghỉ ngơi xen kẽ đủ để tế bào cơ tim tái nạp ATP, phục hồi điện thế màng và nhận máu nuôi dưỡng từ động mạch vành."
      },
      {
        q: "Hệ dẫn truyền tim làm cho tim có khả năng tự động co bóp gồm các thành phần theo đúng trình tự là:",
        options: [
          "A. Nút nhĩ thất → Nút xoang nhĩ → Bó His → Mạng Purkinje",
          "B. Nút xoang nhĩ → Nút nhĩ thất → Bó His → Mạng Purkinje",
          "C. Bó His → Mạng Purkinje → Nút xoang nhĩ → Nút nhĩ thất",
          "D. Mạng Purkinje → Bó His → Nút xoang nhĩ → Nút nhĩ thất"
        ],
        answer: 1,
        explain: "Xung điện tự động phát đi từ Nút xoang nhĩ (chủ nhịp) -> lan truyền tới Nút nhĩ thất -> qua Bó His -> phân nhánh vào Mạng Purkinje kích thích tâm thất co đồng bộ."
      }
    ]
  },

  11: {
    num: 11,
    chapter: 1,
    isPractical: true,
    title: "Thực hành: Một số thí nghiệm về hệ tuần hoàn",
    subtitle: "Kĩ thuật đo huyết áp động mạch cánh tay, đếm nhịp tim và quan sát mạch máu ở cá",
    objectives: [
      "Đo được huyết áp động mạch cánh tay đúng tư thế chuẩn y khoa và đọc chính xác huyết áp tâm thu, huyết áp tâm trương.",
      "Đếm và so sánh nhịp mạch đập ở trạng thái nghỉ ngơi với sau khi vận động thể lực.",
      "Quan sát dòng máu chảy trong mao mạch ở đuôi cá sống dưới kính hiển vi quang học."
    ],
    hypothesis: "Vận động thể lực làm tăng nhu cầu cung cấp O₂ và năng lượng cho cơ vân, khiến tim đập nhanh hơn và huyết áp tâm thu tăng tạm thời; trong mao mạch máu chảy thành dòng đơn liên tục từ tiểu động mạch sang tiểu tĩnh mạch.",
    variables: {
      independent: "Trạng thái cơ thể (nghỉ ngơi tĩnh vs sau khi vận động nhảy jumping jack / leo cầu thang 2 phút).",
      dependent: "Chỉ số huyết áp (mmHg) và số nhịp mạch đập trong 1 phút (nhịp/phút).",
      controlled: "Cùng một đối tượng học sinh thử nghiệm, cùng một thiết bị máy đo huyết áp, tư thế ngồi đo chuẩn (ngồi thẳng, tay đặt ngang tầm tim)."
    },
    materials: [
      "Dụng cụ y tế: Máy đo huyết áp điện tử bắp tay (hoặc huyết áp kế thủy ngân/đồng hồ kèm ống nghe y tế), đồng hồ bấm giây.",
      "Mẫu sinh vật (nếu quan sát vi mạch): Cá bảy màu (hoặc cá diếc nhỏ sống), bông ướt thấm nước, lam kính lớn, kính hiển vi quang học."
    ],
    procedure: [
      "Thực hành 1 (Đo nhịp mạch): Học sinh ngồi thư giãn 5 phút. Dùng 2 ngón tay (trỏ và giữa) đặt lên rãnh mạch quay ở cổ tay; đếm số nhịp đập trong 60 giây. Ghi lại chỉ số nghỉ ngơi.",
      "Thực hành 2 (Đo huyết áp): Quấn bao băng quấn quanh bắp tay cách nếp gấp khuỷu tay 2cm, mép dưới ngang mức tim. Bấm nút đo tự động, giữ người bất động và không nói chuyện trong khi máy bơm xả khí. Ghi 2 chỉ số: Tâm thu / Tâm trương.",
      "Thực hành 3 (Thử thách vận động): Học sinh thực hiện động tác nhảy dây hoặc leo cầu thang nhanh trong 2 phút; lập tức đo lại nhịp mạch và chỉ số huyết áp ngay sau khi dừng vận động; đo lại sau 5 phút nghỉ ngơi để xem thời gian hồi phục.",
      "Thực hành 4 (Quan sát mao mạch cá): Quấn thân cá bằng bông ướt (chừa lộ phần vây đuôi), đặt lên lam kính, dùng kẹp giữ nhẹ vây đuôi; soi dưới vật kính 10x thấy rõ dòng hồng cầu di chuyển đơn lẻ qua mao mạch."
    ],
    results: [
      "Kết quả 1: Ở trạng thái nghỉ ngơi, nhịp tim học sinh bình thường dao động 70 - 85 nhịp/phút; huyết áp trung bình đạt khoảng 110/70 mmHg.",
      "Kết quả 2: Ngay sau vận động 2 phút, nhịp tim tăng vọt lên 120 - 150 nhịp/phút; huyết áp tâm thu tăng lên 130 - 145 mmHg (do tăng lực co bóp tâm thu), sau đó giảm dần về mức bình thường sau 5 - 10 phút nghỉ.",
      "Kết quả 3: Dưới kính hiển vi, quan sát thấy rõ tế bào hồng cầu hình bầu dục xếp nối đuôi nhau di chuyển chầm chậm trong lòng mao mạch mỏng manh của vây đuôi cá."
    ],
    conclusionAndSafety: [
      "Kết luận: Tim mạch có khả năng điều hòa tự động thích ứng nhanh nhạy với nhu cầu chuyển hóa của cơ thể; người tập luyện thường xuyên có nhịp tim nghỉ ngơi chậm hơn và thời gian hồi phục sau vận động nhanh hơn.",
      "Lưu ý an toàn: Đảm bảo tư thế ngồi chuẩn khi đo huyết áp (tay ngang tim); không vận động quá sức đối với học sinh có tiền sử bệnh tim mạch hoặc hen suyễn; khi quan sát cá phải luôn giữ ẩm mang bằng nước lạnh và thả cá về bể ngay sau quan sát."
    ],
    quiz: [
      {
        q: "Khi quấn bao đo huyết áp ở bắp tay người, vị trí của bao quấn so với tim cần được đặt như thế nào để kết quả đo chính xác nhất?",
        options: [
          "A. Giơ tay cao hơn đỉnh đầu",
          "B. Đặt ngang tầm với vị trí của tim",
          "C. Để tay buông thõng thấp sát mặt sàn",
          "D. Vị trí nào cũng cho kết quả hoàn toàn giống nhau"
        ],
        answer: 1,
        explain: "Theo nguyên tắc bình thông nhau, bao quấn phải ngang tầm tim để áp suất thủy tĩnh của cột máu không làm sai lệch chỉ số huyết áp đo được."
      },
      {
        q: "Ngay sau khi một người chạy nhanh 100m hết sức, biến đổi sinh lí nào sau đây ở hệ tuần hoàn là đúng?",
        options: [
          "A. Nhịp tim giảm mạnh, huyết áp tâm thu giảm sâu",
          "B. Nhịp tim tăng nhanh và huyết áp tâm thu tăng cao",
          "C. Vận tốc máu trong động mạch giảm về 0",
          "D. Huyết áp tâm trương tăng gấp 5 lần"
        ],
        answer: 1,
        explain: "Vận động mạnh kích thích hệ thần kinh giao cảm làm tim tăng tần số đập và tăng lực co bóp, dẫn đến tăng cung lượng tim và huyết áp tâm thu tăng để kịp cung cấp oxy cho cơ vân."
      },
      {
        q: "Khi quan sát mao mạch ở vây đuôi cá sống dưới kính hiển vi, dấu hiệu nào chứng tỏ đó là mao mạch chứ không phải động mạch?",
        options: [
          "A. Thành mạch rất dày có nhiều lớp cơ co thắt",
          "B. Các tế bào hồng cầu di chuyển chậm chạp và xếp thành hàng một đi qua lòng mạch",
          "C. Máu chảy cuồn cuộn với vận tốc cực kì nhanh",
          "D. Lòng mạch có các van bán nguyệt ngăn dòng chảy ngược"
        ],
        answer: 1,
        explain: "Mao mạch có đường kính lòng mạch siêu nhỏ (chỉ tương đương đường kính hồng cầu) và thành chỉ gồm một lớp tế bào nội mô, khiến hồng cầu phải trườn nối tiếp nhau thành hàng một."
      }
    ]
  },

  12: {
    num: 12,
    chapter: 1,
    isPractical: false,
    title: "Miễn dịch ở người và động vật",
    subtitle: "Miễn dịch không đặc hiệu, miễn dịch đặc hiệu (dịch thể, tế bào), dị ứng và vaccine",
    objectives: [
      "Phân biệt miễn dịch không đặc hiệu (bẩm sinh) và miễn dịch đặc hiệu (thích ứng).",
      "Trình bày các hàng rào bảo vệ tự nhiên của cơ thể (da, niêm mạc, dịch tiết, phản ứng viêm, đại thực bào).",
      "So sánh cơ chế miễn dịch dịch thể (kháng thể do tế bào B tiết) và miễn dịch qua trung gian tế bào (tế bào T độc tiêu diệt tế bào nhiễm).",
      "Giải thích nguyên lí tạo trí nhớ miễn dịch của vaccine, hiện tượng dị ứng và bệnh tự miễn."
    ],
    concepts: [
      {
        term: "Hệ miễn dịch (Immune system)",
        def: "Tập hợp các tế bào (bạch cầu), mô và cơ quan (tủy xương, tuyến ức, hạch bạch huyết, lách) phối hợp nhận diện và tiêu diệt các tác nhân gây bệnh ngoại lai (virus, vi khuẩn, nấm, kí sinh trùng) hoặc tế bào ung thư biến dị."
      },
      {
        term: "Miễn dịch không đặc hiệu (Bẩm sinh)",
        def: "Có sẵn từ khi mới sinh, phản ứng nhanh chống lại mọi mầm bệnh không phân biệt: Hàng rào vật lí/hóa học (da, niêm mạc, lysozyme trong nước mắt, axit dạ dày); Tế bào thực bào (bạch cầu trung tính, đại thực bào) và phản ứng viêm."
      },
      {
        term: "Miễn dịch đặc hiệu (Thích ứng)",
        def: "Phát triển sau khi tiếp xúc với kháng nguyên đặc thù, có tính đặc hiệu cao và khả năng tạo tế bào nhớ (Memory cells): Gồm Miễn dịch dịch thể và Miễn dịch tế bào."
      },
      {
        term: "Miễn dịch dịch thể (Humoral immunity)",
        def: "Do tế bào lympho B đảm nhiệm: Khi được kích hoạt, tế bào B nhân dòng biệt hóa thành Tương bào (Plasma cells) tiết ra hàng triệu phân tử Kháng thể (Antibodies) lưu hành trong dịch tuần hoàn để trung hòa mầm bệnh."
      },
      {
        term: "Miễn dịch tế bào (Cell-mediated immunity)",
        def: "Do tế bào lympho T (chủ yếu là T gây độc CD8⁺) đảm nhiệm: Trực tiếp nhận diện và tiết protein perforin/granzyme đục thủng màng tiêu diệt tế bào cơ thể bị nhiễm virus hoặc tế bào lạ ghép."
      },
      {
        term: "Vaccine & Trí nhớ miễn dịch",
        def: "Chế phẩm chứa kháng nguyên đã làm suy yếu hoặc bất hoạt; tiêm vào cơ thể kích thích tạo đáp ứng miễn dịch nguyên phát sinh ra dòng tế bào nhớ B và T. Khi mầm bệnh thật xâm nhập, đáp ứng miễn dịch thứ phát bùng phát nhanh, mạnh gấp hàng trăm lần để dập tắt bệnh."
      }
    ],
    process: {
      title: "Tiến trình đáp ứng miễn dịch đặc hiệu chống mầm bệnh xâm nhập",
      steps: [
        "1. Nhận diện kháng nguyên: Đại thực bào bắt giữ, xử lí và trình diện phân tử kháng nguyên lên bề mặt (phức hệ MHC-II).",
        "2. Kích hoạt tế bào hỗ trợ: Tế bào T hỗ trợ (TH / CD4⁺) gắn kết kháng nguyên và tiết cytokine (Interleukin) kích hoạt toàn bộ hệ thống.",
        "3. Kích hoạt dòng tế bào B: Tế bào B nhân dòng -> tạo Tương bào tiết kháng thể IgG, IgM đặc hiệu kết tủa mầm bệnh + tạo Tế bào B nhớ.",
        "4. Kích hoạt dòng tế bào T độc (TC / CD8⁺): Nhân dòng và áp sát tế bào nhiễm virus -> phóng hạt perforin đục thủng màng làm tan tế bào nhiễm.",
        "5. Lưu giữ trí nhớ: Các tế bào nhớ (Memory B and T cells) tồn tại kéo dài hàng chục năm trong hạch bạch huyết sẵn sàng cho tái nhiễm."
      ],
      flowSummary: "Mầm bệnh → Đại thực bào trình diện → T hỗ trợ (tiết cytokine) → [Dòng B: Kháng thể dịch thể] & [Dòng T độc: Tiêu diệt tế bào nhiễm] → Tế bào nhớ."
    },
    mechanism: "Kháng thể có cấu trúc hình chữ Y gồm 2 chuỗi nặng và 2 chuỗi nhẹ với vùng biến đổi (Fab) có cấu hình không gian khớp đặc hiệu như 'ổ khóa - chìa khóa' với epitop trên bề mặt kháng nguyên. Sự gắn kết này làm bất hoạt mầm bệnh bằng các cơ chế: Trung hòa độc tố, ngưng kết vi khuẩn, kích hoạt hệ thống bổ thể làm thủng màng vi khuẩn và kích hoạt đại thực bào ăn vật lạ.",
    applications: [
      "Tiêm chủng vaccine đầy đủ và đúng lịch (chương trình tiêm chủng mở rộng quốc gia) nhằm tạo miễn dịch cộng đồng bảo vệ toàn xã hội.",
      "Sử dụng huyết thanh kháng nọc độc rắn hoặc kháng uốn ván (miễn dịch thụ động cấp cứu nhanh).",
      "Tránh lạm dụng thuốc kháng sinh bừa bãi; giữ gìn vệ sinh thân thể, rửa tay thường xuyên bằng xà phòng để củng cố hàng rào phòng ngự bẩm sinh."
    ],
    experimentsNote: "Quan sát hiện tượng ngưng kết kháng nguyên - kháng thể: Nhỏ kháng huyết thanh Anti-A và Anti-B vào giọt máu tươi trên lam kính để xác định nhóm máu hệ ABO dựa trên hiện tượng hồng cầu kết dính thành đám.",
    quiz: [
      {
        q: "Tế bào nào sau đây chịu trách nhiệm sản xuất và tiết ra một lượng lớn các phân tử kháng thể trong đáp ứng miễn dịch dịch thể?",
        options: [
          "A. Hồng cầu không nhân",
          "B. Tương bào (biệt hóa từ tế bào lympho B)",
          "C. Tế bào lympho T gây độc",
          "D. Tiểu cầu"
        ],
        answer: 1,
        explain: "Khi tế bào lympho B nhận diện kháng nguyên tương thích và nhận tín hiệu từ T hỗ trợ, nó nhân dòng và biệt hóa thành tương bào (plasma cell), có thể tiết tới 2000 phân tử kháng thể/giây."
      },
      {
        q: "Cơ chế nào sau đây giải thích tại sao sau khi tiêm vaccine phòng bệnh sởi, đứa trẻ sẽ không bị mắc bệnh sởi trong nhiều năm sau đó?",
        options: [
          "A. Kháng sinh trong vaccine tồn tại vĩnh viễn trong máu",
          "B. Vaccine tiêu diệt toàn bộ các vi khuẩn có ích trong ruột",
          "C. Vaccine kích thích hình thành các tế bào nhớ B và T, giúp đáp ứng miễn dịch thứ phát bùng phát cực nhanh khi virus thật xâm nhập",
          "D. Vaccine làm thay đổi vĩnh viễn cấu trúc gen của người được tiêm"
        ],
        answer: 2,
        explain: "Vaccine tạo ra các tế bào lympho nhớ (memory cells). Khi gặp mầm bệnh thật, các tế bào nhớ nhận diện ngay và sản xuất kháng thể áp đảo trong vòng vài giờ dập tắt mầm bệnh trước khi gây sốt phát ban."
      },
      {
        q: "Hàng rào bảo vệ tự nhiên nào sau đây thuộc cơ chế miễn dịch không đặc hiệu (bẩm sinh)?",
        options: [
          "A. Kháng thể kháng độc tố uốn ván lưu hành trong huyết tương",
          "B. Lớp biểu bì da nguyên vẹn và enzyme lysozyme trong dịch nước mắt",
          "C. Dòng tế bào T gây độc nhận diện mảnh peptide lạ trên MHC-I",
          "D. Các tế bào lympho B nhớ"
        ],
        answer: 1,
        explain: "Da, lớp niêm mạc nhầy, lông rung phế quản, axit dịch vị và lysozyme là các rào cản vật lí - hóa học có sẵn từ khi sinh ra, ngăn chặn mọi mầm bệnh không đặc thù."
      }
    ]
  },

  13: {
    num: 13,
    chapter: 1,
    isPractical: false,
    title: "Bài tiết và cân bằng nội môi",
    subtitle: "Cấu tạo nephron thận, cơ chế lọc máu tạo nước tiểu và hệ thống điều hòa nội môi",
    objectives: [
      "Trình bày khái niệm bài tiết, nội môi và ý nghĩa sống còn của cân bằng nội môi (Homeostasis).",
      "Mô tả cấu tạo đơn vị chức năng của thận (Nephron) và 3 giai đoạn tạo thành nước tiểu (Lọc ở cầu thận, Tái hấp thu, Tiết ở ống thận).",
      "Giải thích cơ chế điều hòa áp suất thẩm thấu máu (vai trò của hormone ADH, Aldosterone, hệ RAA).",
      "Phân tích cơ chế điều hòa nồng độ glucose huyết và cân bằng pH nội môi."
    ],
    concepts: [
      {
        term: "Cân bằng nội môi (Homeostasis)",
        def: "Là sự duy trì ổn định các điều kiện lí - hóa của môi trường trong cơ thể (máu, dịch kẽ, bạch huyết) như: Áp suất thẩm thấu, nồng độ glucose máu (~4.4 - 6.1 mmol/L), pH máu (~7.35 - 7.45), thân nhiệt (~37°C)."
      },
      {
        term: "Đơn vị chức năng thận (Nephron)",
        def: "Mỗi quả thận người chứa khoảng 1 - 1.2 triệu nephron; mỗi nephron gồm Cầu thận (cuộn mao mạch Malpighi nằm trong nang Bowman) và Ống thận (ống lượn gần, quai Henle, ống lượn xa) đổ vào ống góp."
      },
      {
        term: "Cơ chế tạo nước tiểu",
        def: "Gồm 3 quá trình: 1. Quá trình lọc tại cầu thận (tạo ~180 lít nước tiểu đầu mỗi ngày, không có tế bào máu và protein lớn); 2. Quá trình tái hấp thu tại ống thận (hút lại 99% nước, toàn bộ glucose, axit amin, ion); 3. Quá trình tiết tại ống thận (tiết H⁺, K⁺, chất cặn, thuốc thải ra ngoài tạo ~1.5 lít nước tiểu chính thức/ngày)."
      },
      {
        term: "Điều hòa áp suất thẩm thấu máu",
        def: "Khi cơ thể mất nước hoặc ăn mặn -> Áp suất thẩm thấu máu tăng -> Kích thích vùng dưới đồi tiết ADH từ tuyến yên sau, kích thích ống thận tái hấp thu nước; Khi huyết áp giảm -> Thận tiết Renin kích hoạt hệ Renin-Angiotensin-Aldosterone (RAA) giữ Na⁺ và nước."
      },
      {
        term: "Điều hòa đường huyết (Glucose máu)",
        def: "Đảo tụy tiết Insulin khi đường huyết tăng (chuyển glucose thành glycogen dự trữ ở gan và cơ); tiết Glucagon khi đường huyết hạ (phân giải glycogen ở gan thành glucose giải phóng vào máu)."
      }
    ],
    process: {
      title: "Tiến trình lọc máu tạo nước tiểu và hệ thống phản hồi điều hòa nội môi",
      steps: [
        "1. Lọc tại cầu thận: Áp lực máu cao trong mao mạch cầu thận đẩy nước và chất hòa tan qua màng lọc vào nang Bowman tạo Nước tiểu đầu.",
        "2. Tái hấp thu tại ống lượn gần: Tái hấp thu 100% glucose, amino acid và ~65% ion Na⁺, Cl⁻, nước.",
        "3. Cô đặc tại quai Henle & Ống lượn xa: Nhánh xuống quai Henle tái hấp thu nước; nhánh lên tái hấp thu muối NaCl chủ động tạo gradient thẩm thấu.",
        "4. Tiết và hoàn thiện tại ống góp: Dưới tác dụng của hormone ADH, nước được tái hấp thu thêm ở ống góp; nước tiểu chính thức đổ vào bể thận -> niệu quản -> bàng quang.",
        "5. Phản hồi âm (Negative feedback): Khi thông số nội môi lệch chuẩn -> Bộ phận tiếp nhận kích thích gửi tin về Bộ phận điều khiển -> Bộ phận thực hiện đáp ứng đưa chỉ số trở lại trạng thái cân bằng bình thường."
      ],
      flowSummary: "Động mạch thận → Mao mạch cầu thận (Lọc) → Nang Bowman → Ống thận (Tái hấp thu 99% + Tiết chất cặn) → Ống góp → Nước tiểu chính thức."
    },
    mechanism: "Cân bằng pH máu được duy trì nhờ sự phối hợp nhịp nhàng giữa: 1. Hệ đệm hóa học tức thời trong máu (Hệ đệm Bicarbonate H₂CO₃/NaHCO₃, Phosphate, Proteinat/Hemoglobin); 2. Phổi điều hòa tốc độ đào thải khí CO₂ qua thở nhanh hoặc chậm; 3. Thận duy trì pH dài hạn bằng cách tái hấp thu ion kiềm HCO₃⁻ và chủ động bài tiết ion toan H⁺ vào nước tiểu.",
    applications: [
      "Uống đủ nước (1.5 - 2 lít/ngày), không nhịn tiểu để ngăn ngừa kết tinh sỏi thận và nhiễm trùng đường tiết niệu.",
      "Chế độ ăn giảm muối ở người huyết áp cao, hạn chế đường tinh luyện ở người có nguy cơ tiền đái tháo đường.",
      "Thận nhân tạo (chạy thận chu kì): Nguyên lí khuếch tán qua màng bán thấm nhân tạo giúp cứu sống bệnh nhân suy thận giai đoạn cuối."
    ],
    experimentsNote: "Phân tích que thử nước tiểu 10 thông số (urinalysis strip): Nhúng que thử vào mẫu nước tiểu để kiểm tra nhanh sự xuất hiện bất thường của glucose (dấu hiệu tiểu đường) hoặc protein (dấu hiệu tổn thương màng lọc cầu thận).",
    quiz: [
      {
        q: "Ở người khỏe mạnh, tại sao trong nước tiểu đầu chứa lượng glucose tương đương huyết tương nhưng trong nước tiểu chính thức lại hoàn toàn không có glucose?",
        options: [
          "A. Glucose bị vi khuẩn trong bàng quang phân hủy hết",
          "B. 100% glucose đã được tái hấp thu chủ động tại ống lượn gần trở lại máu mao mạch",
          "C. Glucose bị chuyển hóa thành lipid trong nang cầu thận",
          "D. Glucose bị biến đổi thành chất cặn bã ure"
        ],
        answer: 1,
        explain: "Ống lượn gần có các protein đồng vận chuyển Na⁺-Glucose vận chuyển tích cực tái hấp thu 100% glucose trở lại máu, không để lãng phí nguồn năng lượng quý giá này."
      },
      {
        q: "Khi một người leo núi ăn đồ ăn mặn và không uống đủ nước khiến áp suất thẩm thấu của máu tăng cao, tuyến nội tiết nào sẽ tăng cường tiết hormone ADH để giữ nước?",
        options: [
          "A. Tuyến tụy",
          "B. Tuyến giáp",
          "C. Thùy sau tuyến yên (do vùng dưới đồi sản xuất)",
          "D. Tuyến thượng thận"
        ],
        answer: 2,
        explain: "Vùng dưới đồi nhận cảm biến áp suất thẩm thấu kích thích thùy sau tuyến yên phóng thích ADH (Antidiuretic Hormone); ADH làm tăng kênh aquaporin ở ống góp tái hấp thu nước tối đa, làm nước tiểu cô đặc."
      },
      {
        q: "Khi nồng độ glucose trong máu tăng cao sau bữa ăn nhiều tinh bột, tế bào beta của đảo tụy sẽ tiết ra hormone nào để đưa đường huyết trở về mức bình thường?",
        options: [
          "A. Glucagon",
          "B. Adrenaline",
          "C. Insulin",
          "D. Cortisol"
        ],
        answer: 2,
        explain: "Insulin do tế bào beta tụy tiết ra giúp tăng tính thấm của màng tế bào với glucose, kích thích gan và tế bào cơ tăng cường tổng hợp glycogen dự trữ, hạ đường huyết về mức ổn định."
      }
    ]
  },

  // CHƯƠNG 2: CẢM ỨNG Ở SINH VẬT (Bài 14-18)
  14: {
    num: 14,
    chapter: 2,
    isPractical: false,
    title: "Khái quát về cảm ứng ở sinh vật",
    subtitle: "Khái niệm cảm ứng, cơ chế tiếp nhận và đáp ứng kích thích, phân biệt cảm ứng thực vật vs động vật",
    objectives: [
      "Nêu được khái niệm cảm ứng và vai trò sống còn của cảm ứng đối với sự tồn tại, thích nghi của sinh vật.",
      "Mô tả sơ đồ tổng quát của cơ chế cảm ứng: Kích thích -> Tiếp nhận -> Dẫn truyền -> Xử lí -> Đáp ứng.",
      "So sánh đặc điểm cảm ứng ở thực vật (chậm, khó thấy, biến đổi sinh trưởng/sức trương) và động vật (nhanh, linh hoạt nhờ hệ thần kinh)."
    ],
    concepts: [
      {
        term: "Cảm ứng (Irritability / Responsiveness)",
        def: "Khả năng của cơ thể sinh vật tiếp nhận các kích thích từ môi trường (trong hoặc ngoài) và phản ứng trả lời lại các kích thích đó nhằm tồn tại, thích ứng và phát triển."
      },
      {
        term: "Cơ chế cảm ứng tổng quát",
        def: "Kích thích môi trường -> Thụ thể tiếp nhận (Receptor) -> Dẫn truyền thông tin -> Bộ phận xử lí trung ương -> Cơ quan đáp ứng (Effector: cơ vân, tuyến tiết, tế bào khí khổng)."
      },
      {
        term: "Cảm ứng ở Thực vật vs Động vật",
        def: "Thực vật: Chưa có hệ thần kinh, cảm ứng diễn ra chậm chạp dựa trên sự thay đổi sức trương nước tế bào hoặc sự phân bố bất đối xứng của hormone sinh trưởng (Auxin); Động vật: Đã tiến hóa hệ thần kinh và cơ quan thụ cảm, phản ứng nhanh, chính xác, đa dạng và linh hoạt."
      }
    ],
    process: {
      title: "Sơ đồ chuỗi phản ứng cảm ứng sinh học ở sinh vật",
      steps: [
        "1. Kích thích: Xuất hiện tác nhân kích thích lí - hóa (ánh sáng, nhiệt độ, âm thanh, trọng lực, hóa chất, áp suất).",
        "2. Tiếp nhận: Thụ thể cảm giác trên màng tế bào nhận tín hiệu biến đổi thành tín hiệu sinh học.",
        "3. Dẫn truyền & Xử lí: Tín hiệu được truyền dẫn (bằng hormone/dòng ion ở cây; bằng xung điện thần kinh qua neuron ở động vật) đến trung tâm xử lí.",
        "4. Đáp ứng: Cơ quan thực hiện kích hoạt hành động phản hồi (cụp lá, quay hướng sáng, co cơ rút chân, tiết mồ hôi).",
        "5. Phản hồi thích nghi: Cơ thể bảo tồn sự sống, né tránh nguy hiểm hoặc tận dụng tối đa nguồn sống."
      ],
      flowSummary: "Kích thích (Môi trường) → Thụ thể tiếp nhận → Dẫn truyền & Xử lí tín hiệu → Cơ quan thực hiện đáp ứng → Thích nghi."
    },
    mechanism: "Ở cấp độ phân tử, cảm ứng bắt đầu từ việc phân tử tín hiệu gắn đặc hiệu vào protein thụ thể màng, làm thay đổi cấu hình thụ thể và kích hoạt con đường truyền tin nội bào (thông qua chất truyền tin thứ hai như Ca²⁺, cAMP hoặc dòng ion qua kênh màng), dẫn tới việc đóng mở kênh ion hoặc thay đổi phiên mã gen.",
    applications: [
      "Nông nghiệp: Ứng dụng chiếu sáng nhân tạo (quang chu kì) kích thích cây thanh long ra hoa trái vụ; điều chỉnh tưới nước và phân bón theo nhịp cảm ứng của rễ.",
      "Y học: Đo điện não đồ (EEG), điện tim (ECG) và kiểm tra các phản xạ thần kinh cảm giác để chẩn đoán tổn thương hệ thần kinh.",
      "Đời sống: Hiểu phản xạ giúp rèn luyện thói quen tốt, rèn phản xạ lái xe an toàn khi gặp chướng ngại vật bất ngờ."
    ],
    experimentsNote: "Quan sát phản ứng cụp lá của cây trinh nữ (xấu hổ) khi chạm ngón tay vào cuống lá chét: lá cụp lại tức thì trong vòng vài giây do tế bào thể gối ở gốc cuống lá mất nước đột ngột.",
    quiz: [
      {
        q: "Đặc điểm nào sau đây mô tả đúng nhất về cảm ứng ở thực vật so với cảm ứng ở động vật có hệ thần kinh?",
        options: [
          "A. Cảm ứng ở thực vật diễn ra rất nhanh chóng và dễ nhận thấy bằng mắt thường trong từng giây",
          "B. Cảm ứng ở thực vật có sự tham gia điều khiển của các neuron thần kinh tủy sống",
          "C. Cảm ứng ở thực vật thường diễn ra chậm chạp, biểu hiện qua sự biến đổi sinh trưởng hoặc sức trương nước của tế bào",
          "D. Thực vật hoàn toàn không có khả năng cảm ứng trước các biến đổi của môi trường"
        ],
        answer: 2,
        explain: "Vì thực vật không có tế bào thần kinh chuyên hóa nên phản ứng chủ yếu dựa vào dòng vận chuyển chậm của hormone và thay đổi sức trương nước, biểu hiện chậm hơn nhiều so với động vật."
      },
      {
        q: "Thứ tự các khâu trong một cung cảm ứng tổng quát ở sinh vật là gì?",
        options: [
          "A. Cơ quan đáp ứng → Dẫn truyền → Thụ thể tiếp nhận → Kích thích",
          "B. Tác nhân kích thích → Thụ thể tiếp nhận → Dẫn truyền/Xử lí → Cơ quan thực hiện đáp ứng",
          "C. Dẫn truyền → Kích thích → Cơ quan đáp ứng → Thụ thể tiếp nhận",
          "D. Thụ thể tiếp nhận → Cơ quan đáp ứng → Tác nhân kích thích → Xử lí"
        ],
        answer: 1,
        explain: "Một chuỗi cảm ứng chuẩn luôn khởi đầu từ tác nhân kích thích -> thụ thể tiếp nhận -> dẫn truyền và xử lí tín hiệu -> cơ quan thực hiện trả lời."
      },
      {
        q: "Phản ứng cụp lá của cây trinh nữ (Mimosa pudica) khi va chạm cơ học thuộc dạng cảm ứng nào sau đây?",
        options: [
          "A. Hướng trọng lực dương",
          "B. Hóa ứng động sinh trưởng",
          "C. Ứng động không sinh trưởng do biến đổi sức trương nước của tế bào thể gối",
          "D. Phản xạ có điều kiện qua dây thần kinh tủy"
        ],
        answer: 2,
        explain: "Hiện tượng cụp lá ở cây trinh nữ là ứng động không sinh trưởng, xảy ra tức thời do ion K⁺ và nước thoát nhanh khỏi tế bào nửa dưới thể gối làm giảm sức trương nước."
      }
    ]
  },

  15: {
    num: 15,
    chapter: 2,
    isPractical: false,
    title: "Cảm ứng ở thực vật",
    subtitle: "Hướng động (hướng sáng, hướng trọng lực, hướng hóa, hướng tiếp xúc) và Ứng động",
    objectives: [
      "Phân biệt rõ ràng hai hình thức cảm ứng ở thực vật: Hướng động (vận động định hướng) và Ứng động (vận động không định hướng).",
      "Mô tả các kiểu hướng động: Hướng sáng, hướng trọng lực (địa hướng động), hướng hóa, hướng nước, hướng tiếp xúc.",
      "Giải thích vai trò của hormone Auxin trong cơ chế uốn cong của thân và rễ cây.",
      "Phân tích các dạng ứng động: Ứng động sinh trưởng (nở hoa theo nhiệt độ/ánh sáng) và ứng động không sinh trưởng (cụp lá trinh nữ, bắt mồi ở cây nắp ấm)."
    ],
    concepts: [
      {
        term: "Hướng động (Tropism)",
        def: "Hình thức phản ứng của cơ quan thực vật đối với tác nhân kích thích từ một hướng xác định; Hướng động dương (hướng tới nguồn kích thích), Hướng động âm (tránh xa nguồn kích thích)."
      },
      {
        term: "Hướng sáng (Phototropism)",
        def: "Thân và cành có tính hướng sáng dương (uốn cong về phía có ánh sáng); Rễ cây có tính hướng sáng âm (uốn cong tránh xa ánh sáng)."
      },
      {
        term: "Hướng trọng lực / Địa hướng động (Gravitropism)",
        def: "Rễ cây hướng trọng lực dương (mọc đâm sâu xuống lòng đất để giữ cây và tìm nước/khoáng); Ngọn thân hướng trọng lực âm (mọc vươn thẳng lên cao đón nắng)."
      },
      {
        term: "Hướng tiếp xúc & Hướng hóa, Hướng nước",
        def: "Hướng tiếp xúc (Thigmotropism): Tua cuốn (mướp, nho) chạm vào cọc rào uốn cong quấn quanh giá thể; Hướng hóa/Hướng nước: Rễ sinh trưởng hướng về phía có phân bón và nguồn nước."
      },
      {
        term: "Ứng động (Nastic movements)",
        def: "Phản ứng vận động của cây đối với kích thích không định hướng của môi trường: Ứng động sinh trưởng (hoa tuylip, bồ công anh nở/khép theo nhiệt độ và chu kì ngày đêm); Ứng động không sinh trưởng (lá trinh nữ cụp, lá cây gọng vó khép bắt sâu bọ)."
      }
    ],
    process: {
      title: "Cơ chế phân bố Auxin gây uốn cong thân cây về phía nguồn sáng",
      steps: [
        "1. Chiếu sáng đơn hướng: Ánh sáng chiếu lệch từ một phía vào ngọn chồi đỉnh cây non.",
        "2. Vận chuyển Auxin: Hormone Auxin (IAA) tổng hợp ở đỉnh chồi nhạy cảm ánh sáng bị phân hủy một phần và chủ động vận chuyển dịch chuyển sang phía bị che tối.",
        "3. Chênh lệch nồng độ: Phía khuất tối có nồng độ auxin cao hơn rõ rệt so với phía đón sáng.",
        "4. Kéo dài tế bào: Auxin kích hoạt bơm proton làm mềm thành tế bào ở phía tối, kích thích tế bào phía tối dãn dài nhanh hơn tế bào phía sáng.",
        "5. Uốn cong: Do một bên dãn dài nhanh, một bên dãn chậm -> Ngọn cây bị uốn cong chuẩn xác về phía nguồn sáng."
      ],
      flowSummary: "Ánh sáng một phía → Auxin di chuyển sang phía tối → Tế bào phía tối dãn dài nhanh → Ngọn thân uốn cong về phía sáng."
    },
    mechanism: "Tại sao rễ cây uốn cong ngược lại? Tế bào rễ cây nhạy cảm với auxin gấp hàng trăm lần so với tế bào thân. Ở rễ, nồng độ auxin tích tụ cao ở phía tối (hoặc phía dưới khi rễ nằm ngang) lại gây ức chế dãn dài tế bào rễ; ngược lại tế bào phía trên có ít auxin hơn lại dãn dài nhanh hơn -> đẩy chóp rễ uốn cong đâm sâu xuống đất (hướng trọng lực dương).",
    applications: [
      "Bón phân và tưới nước sâu xung quanh gốc cây để kích thích rễ cây ăn sâu và tỏa rộng, giúp cây đứng vững chống bão lốc.",
      "Làm giàn leo vững chắc cho cây họ bầu bí, đậu, mướp, nho tận dụng tính hướng tiếp xúc của tua cuốn để tăng diện tích tán lá đón nắng.",
      "Điều khiển thời điểm nở hoa của cây cảnh (hoa mai, đào, tuylip, cúc) phục vụ dịp Tết bằng cách điều chỉnh nhiệt độ và thời gian chiếu sáng."
    ],
    experimentsNote: "Trồng hạt đậu nảy mầm trong hộp bìa carton kín có khoét một lỗ thủng nhỏ ở một vách bên; sau 3-5 ngày cây đậu sẽ uốn cong ngọn chui chính xác qua lỗ thủng ra nơi có ánh sáng.",
    quiz: [
      {
        q: "Nguyên nhân chính làm cho ngọn cây non uốn cong về phía có nguồn ánh sáng chiếu nghiêng một phía là gì?",
        options: [
          "A. Tế bào ở phía được chiếu sáng phân chia nhanh gấp đôi phía tối",
          "B. Hormone Auxin dịch chuyển phân bố nhiều hơn về phía tối, kích thích các tế bào phía tối kéo dài nhanh hơn",
          "C. Khí khổng ở phía tối thoát hơi nước làm khô teo tế bào",
          "D. Lục lạp ở phía sáng di chuyển hết sang phía tối"
        ],
        answer: 1,
        explain: "Auxin di chuyển né tránh ánh sáng sang phía khuất tối; nồng độ auxin cao tại thân kích thích dãn dài tế bào cực mạnh, làm phía tối phát triển dài hơn phía sáng và uốn cong về nguồn sáng."
      },
      {
        q: "Tua cuốn của cây mướp hoặc đậu Hà Lan quấn quanh cọc rào là ví dụ điển hình của hiện tượng cảm ứng nào?",
        options: [
          "A. Hướng trọng lực âm",
          "B. Hướng tiếp xúc (Thigmotropism)",
          "C. Hóa ứng động không định hướng",
          "D. Hướng nước âm"
        ],
        answer: 1,
        explain: "Khi tua cuốn va chạm cơ học với cọc thể, tế bào ở mặt tiếp xúc chậm kéo dài, tế bào mặt ngoài dãn dài nhanh uốn vòng tròn quấn quanh giá thể (hướng tiếp xúc)."
      },
      {
        q: "Vận động nở hoa theo chu kì ngày đêm của hoa bồ công anh hoặc hoa tuylip thuộc hình thức cảm ứng nào?",
        options: [
          "A. Ứng động sinh trưởng",
          "B. Hướng sáng dương",
          "C. Ứng động không sinh trưởng do mất nước",
          "D. Hướng hóa âm"
        ],
        answer: 0,
        explain: "Hiện tượng nở hoa do sự sinh trưởng dãn dài không đều giữa mặt trên và mặt dưới của cánh hoa dưới tác động của nhiệt độ/ánh sáng luân phiên ngày đêm, thuộc nhóm ứng động sinh trưởng."
      }
    ]
  },

  16: {
    num: 16,
    chapter: 2,
    isPractical: true,
    title: "Thực hành: Cảm ứng ở thực vật",
    subtitle: "Thiết kế thí nghiệm chứng minh tính hướng sáng, hướng trọng lực và hướng hóa của rễ",
    objectives: [
      "Thiết kế và bố trí được thí nghiệm chứng minh tính hướng sáng dương của ngọn thân cây đậu.",
      "Chứng minh tính hướng trọng lực dương của rễ và hướng trọng lực âm của chồi thân khi đặt chậu cây nằm ngang.",
      "Chứng minh tính hướng hóa dương của rễ đối với phân bón khoáng và hướng hóa âm đối với chất độc hại.",
      "Ghi nhận, xử lí số liệu và giải thích chính xác hiện tượng sinh học quan sát được."
    ],
    hypothesis: "Ngọn thân cây sẽ sinh trưởng uốn cong về phía có nguồn ánh sáng và vươn ngược chiều trọng lực; rễ cây luôn uốn cong đâm thẳng xuống theo chiều trọng lực và tỏa nhánh về phía có nguồn dinh dưỡng khoáng.",
    variables: {
      independent: "Hướng chiếu sáng (chiếu đều từ trên cao vs chiếu một bên từ lỗ vách hộp); vị trí đặt chậu cây (đặt đứng vs đặt nằm ngang 90°); vị trí nguồn phân bón trong chậu đất.",
      dependent: "Góc uốn cong của ngọn thân và chóp rễ (°); hướng phân bố và chiều dài của hệ thống rễ cây.",
      controlled: "Cùng loài cây đậu xanh/đậu đen nảy mầm đồng đều 3 ngày tuổi, cùng loại đất ẩm, cùng nhiệt độ phòng."
    },
    materials: [
      "Mẫu cây: Hạt đậu xanh (hoặc ngô) đã ngâm nảy mầm nhú mầm rễ dài 1-2 cm.",
      "Dụng cụ: Hộp carton có nắp đậy khoét lỗ bên hông, chậu nhựa nhỏ trồng cây, bông gòn, đĩa petri, giấy thấm, kim gút, phân bón NPK pha loãng, muối ăn NaCl (chất độc đối chứng)."
    ],
    procedure: [
      "Thí nghiệm 1 (Hướng sáng): Trồng 2 cốc cây đậu non; cốc A đặt trong hộp carton có khoét lỗ bên hông nhận ánh sáng một phía; cốc B đặt trong hộp mở nắp chiếu sáng đều từ trên xuống. Để 3 ngày, quan sát hướng mọc của ngọn cây.",
      "Thí nghiệm 2 (Hướng trọng lực): Đặt một đĩa petri chứa bông ẩm có gắn các hạt đậu đang nảy mầm theo các hướng khác nhau; dựng đĩa thẳng đứng hoặc đặt chậu cây non nằm ngang góc 90° trong tối. Sau 24-48 giờ, đo góc uốn cong của ngọn và rễ.",
      "Thí nghiệm 3 (Hướng hóa): Trồng cây đậu non vào chậu đất; chôn một ống xốp đục lỗ chứa phân bón NPK ở bên trái chậu và một ống chứa muối ăn đặc ở bên phải chậu. Sau 5 ngày bới nhẹ rễ quan sát hướng phân bố của rễ."
    ],
    results: [
      "Kết quả TN1: Cây đậu trong hộp khoét lỗ (cốc A) có thân vươn dài và uốn cong chính xác hướng về phía lỗ sáng; cây cốc B mọc vươn thẳng đứng lên trên.",
      "Kết quả TN2: Ở chậu cây nằm ngang, chỉ sau 24 giờ ngọn thân đã uốn cong góc ~80-90° hướng thẳng lên trời (hướng trọng lực âm), trong khi rễ cây uốn gập góc ~90° đâm thẳng xuống đáy chậu (hướng trọng lực dương).",
      "Kết quả TN3: Rễ cây phân nhánh dày đặc bọc quanh ống phân NPK (hướng hóa dương) và né tránh hoàn toàn, không có rễ nào mọc về phía ống muối mặn (hướng hóa âm)."
    ],
    conclusionAndSafety: [
      "Kết luận: Thân cây có tính hướng sáng dương và hướng trọng lực âm; rễ cây có tính hướng trọng lực dương, hướng nước và hướng hóa dương đối với chất dinh dưỡng.",
      "Lưu ý an toàn: Đảm bảo tưới đủ ẩm vừa phải cho hạt, không tưới sũng nước gây thối mầm mốc hạt; thao tác nhẹ nhàng khi cắm kim gút tránh làm gãy rễ mầm non."
    ],
    quiz: [
      {
        q: "Khi đặt một chậu cây non đang mọc thẳng đứng chuyển sang tư thế nằm ngang trong bóng tối 2 ngày, hiện tượng nào sau đây sẽ xảy ra?",
        options: [
          "A. Cả thân và rễ đều tiếp tục mọc thẳng nằm ngang song song mặt đất",
          "B. Ngọn thân uốn cong hướng lên trên, rễ cây uốn cong đâm xuống dưới",
          "C. Ngọn thân uốn cong đâm xuống dưới, rễ cây uốn cong ngoi lên trên",
          "D. Cây ngừng sinh trưởng và thối rữa ngay lập tức"
        ],
        answer: 1,
        explain: "Do tác động của trọng lực làm auxin tích tụ ở mặt dưới: nồng độ này kích thích thân dãn dài làm ngọn cong lên (hướng trọng lực âm), nhưng ức chế rễ dãn dài làm rễ uốn cong xuống (hướng trọng lực dương)."
      },
      {
        q: "Thí nghiệm khoét một lỗ nhỏ bên vách hộp carton đậy kín cây đậu non nhằm mục đích kiểm soát loại biến số nào?",
        options: [
          "A. Biến độc lập: Hướng tiếp nhận ánh sáng của cây",
          "B. Biến phụ thuộc: Khối lượng hạt đậu nảy mầm",
          "C. Biến kiểm soát: Nồng độ khí oxygen trong hộp",
          "D. Biến ngoại lai không kiểm soát được"
        ],
        answer: 0,
        explain: "Lỗ khoét quy định ánh sáng chỉ được chiếu từ một hướng xác định, đó chính là biến độc lập được người làm thí nghiệm chủ động thao tác thay đổi."
      },
      {
        q: "Hiện tượng rễ cây sinh trưởng tránh xa vùng đất bị nhiễm kim loại nặng hoặc độ mặn cao là biểu hiện của:",
        options: [
          "A. Hướng hóa dương",
          "B. Hướng hóa âm",
          "C. Hướng sáng dương",
          "D. Hướng tiếp xúc âm"
        ],
        answer: 1,
        explain: "Rễ sinh trưởng tránh xa các hóa chất độc hại, nồng độ muối quá cao được gọi là hướng hóa âm (Negative chemotropism), giúp cây bảo vệ các tế bào lông hút non nớt."
      }
    ]
  },

  17: {
    num: 17,
    chapter: 2,
    isPractical: false,
    title: "Cảm ứng ở động vật",
    subtitle: "Cấu tạo neuron, điện thế nghỉ, điện thế hoạt động, truyền tin qua synapse và cung phản xạ",
    objectives: [
      "Mô tả cấu tạo của một neuron điển hình và các dạng hệ thần kinh tiến hóa trong sinh giới (dạng lưới, dạng chuỗi hạch, dạng ống).",
      "Giải thích cơ chế hình thành điện thế nghỉ và điện thế hoạt động (khử cực, đảo cực, tái phân cực).",
      "Trình bày cấu tạo của một synapse hóa học và cơ chế dẫn truyền xung điện qua khe synapse nhờ chất trung gian hóa học.",
      "Phân tích 5 thành phần của một cung phản xạ và phân biệt phản xạ không điều kiện với phản xạ có điều kiện."
    ],
    concepts: [
      {
        term: "Neuron (Tế bào thần kinh)",
        def: "Đơn vị cấu tạo và chức năng của hệ thần kinh gồm: Thân neuron (chứa nhân), các sợi nhánh (Dendrites - thu nhận tín hiệu) và sợi trục (Axon - dẫn truyền xung thần kinh, có bao myelin bọc ngoài ngắt quãng bởi các eo Ranvier)."
      },
      {
        term: "Tiến hóa hệ thần kinh",
        def: "Hệ thần kinh dạng lưới (Ruột khoang: Thủy tức) -> Hệ thần kinh chuỗi hạch (Giun tròn, Giun dẹp, Chân khớp) -> Hệ thần kinh dạng ống (Động vật có xương sống: Não bộ và tủy sống phát triển cao độ)."
      },
      {
        term: "Điện thế nghỉ (Resting potential)",
        def: "Sự chênh lệch điện thế giữa hai bên màng tế bào khi neuron nghỉ ngơi (trong tích điện âm ~ -70 mV, ngoài tích điện dương). Hình thành chủ yếu do: Nồng độ ion K⁺ bên trong cao hơn ngoài, kênh K⁺ rò rỉ mở cho K⁺ thoát ra ngoài mang theo điện tích dương, và hoạt động của Bơm Na⁺-K⁺ ATPase (bơm 3 Na⁺ ra ngoài, 2 K⁺ vào trong)."
      },
      {
        term: "Điện thế hoạt động (Action potential)",
        def: "Khi bị kích thích đạt ngưỡng: Kênh Na⁺ mở ồ ạt làm Na⁺ tràn vào tế bào gây Khử cực (-70mV -> 0mV) -> Đảo cực (+30mV). Sau đó kênh Na⁺ đóng, kênh K⁺ mở cho K⁺ tràn ra ngoài gây Tái phân cực đưa màng về trạng thái âm."
      },
      {
        term: "Synapse (Khớp thần kinh)",
        def: "Diện tiếp xúc giữa đầu tận cùng sợi trục neuron với neuron khác hoặc cơ quan đáp ứng. Gồm: Cúc tận cùng (chứa túi bóng bóng chất trung gian hóa học Acetylcholine / Noradrenaline), Khe synapse và Màng sau synapse (chứa protein thụ thể gắn đặc hiệu)."
      },
      {
        term: "Cung phản xạ (Reflex arc)",
        def: "Gồm 5 khâu: 1. Thụ thể cảm giác -> 2. Neuron hướng tâm (cảm giác) -> 3. Trung ương thần kinh (tủy sống/não) -> 4. Neuron li tâm (vận động) -> 5. Cơ quan đáp ứng (cơ vân/tuyến tiết)."
      }
    ],
    process: {
      title: "Tiến trình truyền tin một chiều qua khe synapse hóa học",
      steps: [
        "1. Xung thần kinh lan truyền đến cúc tận cùng làm mở các kênh ion Ca²⁺ trên màng trước.",
        "2. Dòng ion Ca²⁺ tràn vào cúc kích thích các bóng chứa chất trung gian hóa học (Acetylcholine) hòa màng xuất bào vào khe synapse.",
        "3. Phân tử chất trung gian hóa học khuếch tán qua khe synapse sang gắn vào protein thụ thể đặc hiệu ở màng sau.",
        "4. Kênh ion trên màng sau mở ra (dòng Na⁺ tràn vào) gây xuất hiện điện thế hoạt động lan truyền tiếp ở màng sau.",
        "5. Phân giải & Tái hấp thu: Enzyme Acetylcholinesterase ở khe lập tức thủy phân acetylcholine thành acetate và choline để màng trước tái hấp thu tái tổng hợp."
      ],
      flowSummary: "Xung điện đến cúc tận cùng → Mở kênh Ca²⁺ → Xuất bào Acetylcholine → Khuếch tán qua khe → Gắn thụ thể màng sau → Mở kênh Na⁺ màng sau → Xung điện mới."
    },
    mechanism: "Dẫn truyền xung điện trên sợi trục có bao myelin diễn ra theo lối 'nhảy cóc' (saltatory conduction) từ eo Ranvier này sang eo Ranvier kế tiếp với tốc độ cực nhanh (lên tới 100-120 m/s), tiêu tốn ít năng lượng ATP hơn hàng chục lần so với dẫn truyền liên tục trên sợi không có myelin.",
    applications: [
      "Thuốc gây tê tại chỗ (như Novocaine, Lidocaine) hoạt động bằng cách chẹn các kênh Na⁺ màng tế bào, ngăn cản hình thành điện thế hoạt động dẫn truyền cảm giác đau về não.",
      "Thuốc trừ sâu photpho hữu cơ ức chế enzyme Acetylcholinesterase làm chất dẫn truyền tích tụ liên tục ở synapse, gây co giật cơ liên tục làm côn trùng tử vong.",
      "Hiểu rõ phản xạ có điều kiện (học tập, rèn luyện) để hình thành các thói quen học tập khoa học, kỉ luật bản thân."
    ],
    experimentsNote: "Thử phản xạ giật đầu gối ở người: Dùng búa cao su gõ nhẹ vào gân dưới bánh chè khi ngồi thả lỏng chân; cẳng chân lập tức đá bật ra phía trước do kích hoạt cung phản xạ tủy sống 2 neuron không qua vỏ não.",
    quiz: [
      {
        q: "Điện thế nghỉ ở màng neuron chủ yếu được duy trì nhờ sự khuếch tán ra ngoài của ion nào qua các kênh rò rỉ màng?",
        options: [
          "A. Ion Na⁺",
          "B. Ion K⁺",
          "C. Ion Ca²⁺",
          "D. Ion Cl⁻"
        ],
        answer: 1,
        explain: "Bên trong màng nồng độ K⁺ cao gấp 30 lần bên ngoài; màng nghỉ ngơi có tính thấm chọn lọc cao với K⁺ nên K⁺ khuếch tán ra ngoài kéo theo điện tích dương, làm mặt trong màng tích điện âm so với mặt ngoài."
      },
      {
        q: "Tại sao trong synapse hóa học, xung thần kinh chỉ có thể được truyền dẫn một chiều từ màng trước sang màng sau mà không thể truyền ngược lại?",
        options: [
          "A. Vì khe synapse quá rộng xung điện không thể nhảy ngược",
          "B. Vì chỉ có cúc tận cùng ở màng trước mới chứa túi hóa chất trung gian, và chỉ có màng sau mới có thụ thể tiếp nhận tương ứng",
          "C. Vì màng sau chứa dòng điện âm mạnh đẩy lùi xung điện",
          "D. Vì bao myelin ở màng sau ngăn cản dẫn truyền"
        ],
        answer: 1,
        explain: "Cấu tạo không đối xứng: màng trước mới có bóng chứa chất dẫn truyền (như acetylcholine) và màng sau mới có thụ thể tiếp nhận, do đó dòng truyền tin luôn là một chiều tuyệt đối."
      },
      {
        q: "Đặc điểm nào sau đây phân biệt phản xạ không điều kiện với phản xạ có điều kiện?",
        options: [
          "A. Phản xạ không điều kiện mang tính bẩm sinh, bền vững suốt đời, có tính chất loài và trung ương nằm ở trụ não hoặc tủy sống",
          "B. Phản xạ không điều kiện được hình thành qua học tập rút kinh nghiệm cá thể",
          "C. Phản xạ không điều kiện rất dễ bị mất đi nếu không được củng cố thường xuyên",
          "D. Phản xạ không điều kiện luôn cần sự tham gia điều khiển của vỏ bán cầu đại não"
        ],
        answer: 0,
        explain: "Phản xạ không điều kiện (như rút tay khi chạm lửa, tiết nước bọt khi thức ăn chạm lưỡi) là phản xạ bẩm sinh di truyền theo loài, bền vững và trung khu nằm ở tủy sống/thân não."
      }
    ]
  },

  18: {
    num: 18,
    chapter: 2,
    isPractical: false,
    title: "Tập tính ở động vật",
    subtitle: "Tập tính bẩm sinh vs học được, các dạng tập tính sống và các hình thức học tập",
    objectives: [
      "Định nghĩa tập tính ở động vật và phân biệt tập tính bẩm sinh với tập tính học được.",
      "Trình bày các dạng tập tính phổ biến: Kiếm ăn, bảo vệ lãnh thổ, sinh sản, di cư, xã hội.",
      "Phân tích các hình thức học tập ở động vật: Quen nhờn, in vết, điều kiện hóa đáp ứng (Pavlov), điều kiện hóa hành động (Skinner), học ngầm, học giải quyết vấn đề.",
      "Trình bày các hình thức truyền thông tin tín hiệu (âm thanh, hóa học/pheromone, thị giác, xúc giác) và ứng dụng trong nông nghiệp, huấn luyện."
    ],
    concepts: [
      {
        term: "Tập tính (Animal behavior)",
        def: "Chuỗi các phản ứng trả lời kích thích của môi trường (bên trong hoặc bên ngoài), giúp động vật thích nghi với môi trường sống và tồn tại."
      },
      {
        term: "Tập tính bẩm sinh (Innate behavior)",
        def: "Sinh ra đã có, di truyền từ bố mẹ, mang tính đặc trưng cho loài, mang tính rập khuôn và bền vững (nhện chăng tơ, chim xây tổ, thú mẹ cho con bú)."
      },
      {
        term: "Tập tính học được (Learned behavior)",
        def: "Hình thành trong quá trình sống của cá thể qua học tập, kinh nghiệm và tương tác xã hội; linh hoạt, dễ thay đổi khi môi trường sống biến đổi."
      },
      {
        term: "Các hình thức học tập",
        def: "Quen nhờn (lờ đi kích thích lặp lại vô hại); In vết (gắn bó với vật chuyển động đầu tiên sau sinh ở chim non); Điều kiện hóa cổ điển (kết hợp kích thích có điều kiện và không điều kiện); Điều kiện hóa hành động (thử và sai, khen thưởng và trừng phạt); Học ngầm; Học giải quyết vấn đề (ở linh trưởng và người)."
      },
      {
        term: "Tập tính xã hội (Social behavior)",
        def: "Sống theo bầy đàn có phân hóa thứ bậc (ong, kiến, sư tử, linh cẩu); gồm tập tính vị tha, hợp tác săn mồi và bảo vệ đàn."
      }
    ],
    process: {
      title: "Cơ sở thần kinh của sự hình thành tập tính học được (Điều kiện hóa Pavlov)",
      steps: [
        "1. Kích thích không điều kiện: Thức ăn đưa vào miệng -> Tiết nước bọt (Phản xạ không điều kiện tự nhiên).",
        "2. Kích thích có điều kiện: Tiếng chuông reo đơn lẻ -> Động vật chỉ vểnh tai lắng nghe, không tiết nước bọt.",
        "3. Kết hợp kích thích: Rung chuông rồi lập tức cho ăn; lặp đi lặp lại hàng chục lần quá trình này.",
        "4. Hình thành đường liên hệ thần kinh tạm thời: Vỏ não hình thành mối liên kết giữa trung khu thính giác và trung khu điều khiển tiết nước bọt.",
        "5. Phản xạ có điều kiện hoàn chỉnh: Chỉ cần nghe tiếng chuông reo (dù chưa có thức ăn), con vật đã tự động tiết nước bọt dồi dào."
      ],
      flowSummary: "Kích thích trung tính (Chuông) + Kích thích tự nhiên (Thức ăn) → Lặp lại nhiều lần → Đường liên hệ thần kinh tạm thời ở vỏ não → Tập tính học được."
    },
    mechanism: "Cơ sở phân tử của học tập và trí nhớ là hiện tượng dẻo hóa synapse (synaptic plasticity): Khi một kích thích được lặp đi lặp lại hoặc gắn liền cảm xúc mạnh, số lượng thụ thể màng sau và lượng chất dẫn truyền ở màng trước synapse tăng lên (Long-Term Potentiation - LTP), củng cố đường mòn truyền tin thần kinh bền vững.",
    applications: [
      "Chăn nuôi: Dạy gia súc (bò, cừu, dê) nghe tiếng kẻng, còi hiệu tự động đi về chuồng ăn cỏ sau khi chăn thả ngoài đồng.",
      "An ninh - Quốc phòng: Huấn luyện chó nghiệp vụ đánh hơi ma túy, chất nổ dựa trên tập tính điều kiện hóa hành động.",
      "Bảo vệ mùa màng: Sử dụng bẫy pheromone sinh học quyến rũ côn trùng đực (sâu đục quả, bướm đêm) để tiêu diệt sâu hại mà không dùng hóa chất độc hại."
    ],
    experimentsNote: "Quan sát hiện tượng in vết ở gà/vịt con: Đàn vịt con mới nở 24-48 giờ đầu tiên sẽ tự động coi người nuôi hoặc quả bóng tròn chuyển động là mẹ và lũ lượt bơi/chạy theo khắp nơi.",
    quiz: [
      {
        q: "Hành động nhện chăng tơ với cấu trúc mạng lưới hình học hoàn hảo ngay từ lần đầu tiên mà không cần cá thể mẹ dạy thuộc loại tập tính nào?",
        options: [
          "A. Tập tính học được qua kinh nghiệm thử và sai",
          "B. Tập tính bẩm sinh mang tính bản năng di truyền",
          "C. Tập tính in vết theo vật chuyển động",
          "D. Học giải quyết vấn đề phức tạp"
        ],
        answer: 1,
        explain: "Chăng tơ là chuỗi phản xạ bẩm sinh phức tạp, do gen quy định và có sẵn trong hệ thần kinh của nhện mà không cần qua học tập."
      },
      {
        q: "Thí nghiệm rung chuông trước khi cho chó ăn, sau nhiều lần lặp lại chỉ cần nghe tiếng chuông là chó đã tự động tiết nước bọt là ví dụ kinh điển của hình thức học tập nào?",
        options: [
          "A. Quen nhờn (Habituation)",
          "B. In vết (Imprinting)",
          "C. Điều kiện hóa đáp ứng (Điều kiện hóa cổ điển kiểu Pavlov)",
          "D. Học ngầm không có mục đích"
        ],
        answer: 2,
        explain: "Đây là thí nghiệm nổi tiếng của nhà sinh lí học Ivan Pavlov về điều kiện hóa đáp ứng, hình thành đường liên hệ thần kinh tạm thời giữa kích thích có điều kiện và đáp ứng tự nhiên."
      },
      {
        q: "Trong nông nghiệp hiện đại, người ta dùng pheromone nhân tạo để bẫy và diệt sâu bướm hại cây ăn quả. Ứng dụng này dựa trên hình thức truyền tín hiệu nào ở côn trùng?",
        options: [
          "A. Truyền tin bằng thị giác qua màu sắc cánh",
          "B. Truyền tin bằng sóng âm tần số cao",
          "C. Truyền tin bằng hóa học (mùi hương sinh học kích thích giao phối)",
          "D. Truyền tin bằng xúc giác khi tiếp xúc cơ học"
        ],
        answer: 2,
        explain: "Pheromone là hợp chất hóa học do con cái tiết ra để dẫn dụ con đực giao phối từ khoảng cách hàng cây số; bẫy pheromone thu hút toàn bộ con đực vào bẫy dính để triệt đường sinh sản của sâu hại."
      }
    ]
  }
};

module.exports = p1_lessons;
