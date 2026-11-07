// scratch/sinhhoc12_data_p2.js
// Dữ liệu Sinh học 12 - Bộ Kết nối tri thức: Chương 4 đến Chương 8 (Bài 18 -> 35), Bảng công thức, Sơ đồ tổng kết, Đấu trường

const lessonsP2 = {
  // ===================== CHƯƠNG 4. DI TRUYỀN QUẦN THỂ =====================
  18: {
    num: 18,
    chapter: 4,
    isPractical: false,
    title: "Di truyền học quần thể",
    subtitle: "Vốn gene, tần số allele, định luật trạng thái cân bằng Hardy – Weinberg và các nhân tố tiến hóa",
    objectives: "Nêu khái niệm vốn gene, tần số allele và tần số kiểu gene; phát biểu định luật Hardy – Weinberg và điều kiện nghiệm đúng ($p^2+2pq+q^2=1$); phân tích tác động của 5 nhân tố tiến hóa làm biến đổi cấu trúc di truyền quần thể.",
    sections: [
      {
        title: "1. Vốn gene và cấu trúc di truyền của quần thể",
        badge: "Tần số allele & Kiểu gene",
        points: [
          "**Khái niệm quần thể:** Là một tập hợp các cá thể cùng loài, cùng sinh sống trong một khoảng không gian xác định, vào một thời điểm nhất định, có khả năng giao phối tự do sinh ra đời con hữu thụ.",
          "**Vốn gene (Gene pool):** Là toàn bộ các allele của tất cả các gene có trong quần thể tại một thời điểm xác định. Đặc trưng qua **tần số allele** và **tần số kiểu gene**.",
          "**Công thức tính:** Với một gene gồm 2 allele (A và a) trong quần thể lưỡng bội:",
          "• Tần số allele A ($p$) = $\frac{2 \times N_{AA} + N_{Aa}}{2N} = f(AA) + \frac{1}{2}f(Aa)$.",
          "• Tần số allele a ($q$) = $\frac{2 \times N_{aa} + N_{Aa}}{2N} = f(aa) + \frac{1}{2}f(Aa)$.",
          "• Luôn có: **$p + q = 1$** và **$f(AA) + f(Aa) + f(aa) = 1$**."
        ]
      },
      {
        title: "2. Định luật trạng thái cân bằng Hardy – Weinberg",
        badge: "Đẳng thức: $p^2 + 2pq + q^2 = 1$",
        points: [
          "**Nội dung định luật:** Trong một quần thể ngẫu phối có kích thước lớn, nếu không có các nhân tố làm biến đổi tần số allele thì thành phần kiểu gene và tần số các allele của quần thể sẽ được duy trì ổn định không đổi qua các thế hệ theo đẳng thức:",
          "$$p^2 AA + 2pq Aa + q^2 aa = 1$$",
          "Trong đó: $p^2$ là tần số kiểu gene đồng hợp trội AA; $2pq$ là tần số kiểu gene dị hợp tử Aa; $q^2$ là tần số kiểu gene đồng hợp lặn aa.",
          "**5 Điều kiện nghiệm đúng khắt khe:** (1) Quần thể có kích thước vô cùng lớn; (2) Các cá thể giao phối hoàn toàn ngẫu nhiên; (3) Không xảy ra đột biến (hoặc tần số đột biến thuận bằng nghịch); (4) Không có sự di nhập gene (quần thể cách li); (5) Không có tác động của chọn lọc tự nhiên (mọi kiểu gene có sức sống và khả năng sinh sản ngang nhau).",
          "**Ứng dụng tính nhanh:** Trong quần thể cân bằng, nếu biết tỉ lệ kiểu hình lặn (aa) $\to q = \sqrt{q^2} \to p = 1 - q \to$ tính được tỉ lệ người mang gene dị hợp ($2pq$)."
        ]
      },
      {
        title: "3. Các nhân tố làm biến đổi vốn gene của quần thể",
        badge: "5 Nhân tố tiến hóa",
        points: [
          "• **Đột biến:** Tạo ra các allele mới, làm thay đổi tần số allele và thành phần kiểu gene vô cùng chậm chạp ($10^{-6} - 10^{-4}$), là nguồn nguyên liệu sơ cấp.",
          "• **Di - nhập gene (Gene flow):** Sự trao đổi cá thể/giao tử giữa các quần thể. Có thể mang vào allele mới hoặc làm thay đổi tần số allele nhanh chóng, làm giảm sự khác biệt di truyền giữa các quần thể.",
          "• **Chọn lọc tự nhiên (CLTN):** Nhân tố quy định **chiều hướng và nhịp điệu** tiến hóa; tác động trực tiếp lên kiểu hình, qua đó gián tiếp đào thải các allele bất lợi và nhân rộng các allele có lợi.",
          "• **Các yếu tố ngẫu nhiên (Phiêu bạt di truyền / Genetic drift):** Thiên tai, dịch bệnh bất ngờ làm giảm mạnh kích thước quần thể (hiệu ứng thắt cổ chai, hiệu ứng kẻ sáng lập), có thể đào thải hoàn toàn một allele có lợi hoặc cố định một allele có hại; tác động cực mạnh ở quần thể nhỏ.",
          "• **Giao phối không ngẫu nhiên (Tự phối, giao phối cận huyết):** Làm tăng dần tỉ lệ đồng hợp tử ($AA, aa$), giảm dần tỉ lệ dị hợp tử ($Aa$), làm biến đổi cấu trúc kiểu gene nhưng tự nó **không làm thay đổi tần số allele** của quần thể."
        ]
      }
    ],
    summaryDiagram: "Quần thể cân bằng: $p^2 AA + 2pq Aa + q^2 aa = 1$. 5 Nhân tố tiến hóa: Đột biến (tạo allele mới) | Di nhập gene | CLTN (định hướng) | Yếu tố ngẫu nhiên (quần thể nhỏ) | Giao phối không ngẫu nhiên (tăng đồng hợp).",
    quizzes: [
      {
        q: "Một quần thể thực vật ở trạng thái cân bằng di truyền Hardy – Weinberg có 16% số cây có kiểu hình hoa trắng do allele lặn a quy định. Tần số của allele A và allele a trong quần thể này lần lượt là bao nhiêu?",
        options: [
          "A. $p(A) = 0,6$ và $q(a) = 0,4$",
          "B. $p(A) = 0,84$ và $q(a) = 0,16$",
          "C. $p(A) = 0,4$ và $q(a) = 0,6$",
          "D. $p(A) = 0,5$ và $q(a) = 0,5$"
        ],
        answer: 0,
        explain: "Vì quần thể cân bằng di truyền nên tần số kiểu gene lặn $aa = q^2 = 0,16 \to q(a) = \sqrt{0,16} = 0,4$. Do đó $p(A) = 1 - 0,4 = 0,6$."
      },
      {
        q: "Nhân tố tiến hóa nào sau đây có thể làm thay đổi thành phần kiểu gene của quần thể theo hướng tăng dần tỉ lệ đồng hợp tử và giảm dần tỉ lệ dị hợp tử nhưng không làm thay đổi tần số allele?",
        options: [
          "A. Chọn lọc tự nhiên",
          "B. Giao phối không ngẫu nhiên (tự thụ phấn, giao phối cận huyết)",
          "C. Di - nhập gene",
          "D. Đột biến gene"
        ],
        answer: 1,
        explain: "Giao phối không ngẫu nhiên (như tự phối qua nhiều thế hệ) làm phân hóa quần thể thành các dòng thuần đồng hợp tử ($AA$ và $aa$), làm tiêu giảm thể dị hợp $Aa$, nhưng không làm mất mát hay thêm mới allele nên tần số allele $p, q$ không đổi."
      },
      {
        q: "Hiện tượng nào sau đây có thể làm thay đổi đột ngột tần số allele của quần thể một cách ngẫu nhiên và vô hướng, ngay cả khi allele đó đang rất có lợi cho sinh vật?",
        options: [
          "A. Chọn lọc tự nhiên phân hóa",
          "B. Tác động của các yếu tố ngẫu nhiên (phiêu bạt di truyền do thiên tai, dịch bệnh bão lụt)",
          "C. Quá trình ngẫu phối kéo dài qua nhiều thế hệ",
          "D. Hiện tượng ưu thế lai"
        ],
        answer: 1,
        explain: "Các yếu tố ngẫu nhiên (thiên tai, bão lụt, cháy rừng, dịch bệnh) xảy ra bất ngờ có thể giết chết hàng loạt cá thể không phụ thuộc vào giá trị thích nghi của kiểu gene, làm thay đổi ngẫu nhiên vốn gene."
      }
    ]
  },

  // ===================== CHƯƠNG 5. TIẾN HÓA =====================
  19: {
    num: 19,
    chapter: 5,
    isPractical: false,
    title: "Các bằng chứng tiến hóa",
    subtitle: "Bằng chứng hóa thạch, giải phẫu so sánh, phôi sinh học, địa lí sinh vật và sinh học phân tử",
    objectives: "Phân biệt bằng chứng trực tiếp (hóa thạch) và bằng chứng gián tiếp; phân tích cơ quan tương đồng, tương tự, thoái hóa; giải thích sự tương đồng về trình tự DNA/protein chứng minh nguồn gốc chung.",
    sections: [
      {
        title: "1. Bằng chứng trực tiếp: Hóa thạch",
        badge: "Di tích lịch sử sinh giới",
        points: [
          "**Khái niệm:** Hóa thạch là di tích của các sinh vật sống trong các thời đại địa chất trước đây để lại trong các lớp đất đá của vỏ Trái Đất (xương, vỏ sò ốc hóa đá, dấu chân, xác côn trùng trong hổ phách, xác voi ma mút trong băng tuyết).",
          "**Ý nghĩa:** Là bằng chứng trực tiếp và tin cậy nhất xác định loài nào xuất hiện trước, loài nào xuất hiện sau; xác định tuổi tuyệt đối nhờ đồng vị phóng xạ ($^{14}C, ^{238}U$)."
        ]
      },
      {
        title: "2. Bằng chứng giải phẫu so sánh",
        badge: "Tương đồng, Tương tự & Thoái hóa",
        points: [
          "• **Cơ quan tương đồng (Homologous):** Là những cơ quan có **cùng nguồn gốc phát sinh từ một tổ tiên** nhưng tiến hóa theo các hướng khác nhau để thích nghi với các chức năng khác nhau (**tiến hóa phân li**). Ví dụ: Chi trước của mèo, tay người, cánh dơi, vây ngực cá voi có cùng kiểu cấu tạo xương cơ bản.",
          "• **Cơ quan tương tự (Analogous):** Là những cơ quan có **nguồn gốc phát sinh hoàn toàn khác nhau** nhưng thực hiện các chức năng giống nhau nên có hình thái tương tự (**tiến hóa đồng quy / hội tụ**). Ví dụ: Cánh sâu bọ (nguồn gốc từ lớp biểu bì ngoài) và cánh chim (chi trước biến đổi).",
          "• **Cơ quan thoái hóa (Vestigial):** Là cơ quan tương đồng nhưng bị tiêu giảm chỉ còn lại vết tích và không còn giữ chức năng nguyên thủy (Ví dụ: Ruột thừa, xương cụt, răng khôn ở người)."
        ]
      },
      {
        title: "3. Bằng chứng tế bào học và Sinh học phân tử",
        badge: "Mã di truyền & Trình tự DNA",
        points: [
          "**Bằng chứng tế bào học:** Mọi sinh vật từ vi khuẩn đến người đều được cấu tạo từ tế bào; tế bào đều có màng sinh chất, tế bào chất và vật chất di truyền DNA.",
          "**Bằng chứng phân tử (Bằng chứng chính xác nhất):** Toàn bộ sinh giới đều sử dụng chung một bộ mã di truyền; đều cấu tạo protein từ 20 loại amino acid cùng cấu hình không gian; đều có DNA cấu tạo từ 4 loại nucleotide. Mức độ giống nhau về trình tự nucleotide trong DNA hoặc chuỗi amino acid trong protein (như Cytochrome c, Hemoglobin) phản ánh mức độ quan hệ họ hàng gần hay xa giữa các loài."
        ]
      }
    ],
    summaryDiagram: "Hóa thạch: Bằng chứng trực tiếp. Cơ quan tương đồng (cùng gốc, khác chức năng) $\to$ Tiến hóa phân li. Cơ quan tương tự (khác gốc, cùng chức năng) $\to$ Tiến hóa đồng quy. Sinh học phân tử: Trình tự DNA/protein giống nhau $\to$ Nguồn gốc chung.",
    quizzes: [
      {
        q: "Cặp cơ quan nào sau đây là ví dụ điển hình về cơ quan tương đồng?",
        options: [
          "A. Cánh dơi và cánh bướm",
          "B. Gai xương rồng (biến dạng của lá) và gai hoa hồng (do biểu bì thân phát triển)",
          "C. Tay người và chi trước của mèo",
          "D. Mang cá chép và mang tôm sông"
        ],
        answer: 2,
        explain: "Tay người và chi trước của mèo có cùng nguồn gốc giải phẫu từ chi trước của tổ tiên động vật bốn chân (có cùng các phần xương cánh tay, cẳng tay, cổ tay, bàn tay), dù thực hiện chức năng cầm nắm và di chuyển khác nhau."
      },
      {
        q: "Cơ quan thoái hóa (như ruột thừa, xương cùng ở người) thực chất thuộc loại cơ quan nào?",
        options: [
          "A. Cơ quan tương tự",
          "B. Cơ quan tương đồng với cơ quan chức năng của các loài động vật khác",
          "C. Đột biến dị bội",
          "D. Dị đa bội"
        ],
        answer: 1,
        explain: "Cơ quan thoái hóa là cơ quan tương đồng với một cơ quan đang hoạt động ở các loài tổ tiên hoặc họ hàng, nhưng trong quá trình tiến hóa chức năng của nó không còn cần thiết nên bị tiêu giảm thu nhỏ lại."
      },
      {
        q: "Bằng chứng tiến hóa nào sau đây được coi là có độ chính xác cao nhất để xác định mối quan hệ họ hàng phát sinh chủng loại giữa các loài sinh vật hiện đại?",
        options: [
          "A. Giải phẫu so sánh kích thước hộp sọ",
          "B. Bằng chứng sinh học phân tử (so sánh trình tự nucleotide của DNA và amino acid của protein)",
          "C. So sánh tập tính săn mồi",
          "D. Địa lí sinh vật học"
        ],
        answer: 1,
        explain: "So sánh phân tử định lượng chính xác tỉ lệ phần trăm sai khác về trình tự DNA hay protein, từ đó xây dựng cây phát sinh chủng loại với độ tin cậy và khách quan cao nhất."
      }
    ]
  },

  20: {
    num: 20,
    chapter: 5,
    isPractical: false,
    title: "Quan niệm của Darwin về chọn lọc tự nhiên và hình thành loài",
    subtitle: "Biến dị cá thể, đấu tranh sinh tồn, vai trò của chọn lọc tự nhiên và sự hình thành loài mới",
    objectives: "Trình bày luận điểm cốt lõi của Darwin về biến dị cá thể và đấu tranh sinh tồn; giải thích cơ chế tác động của chọn lọc tự nhiên đào thải biến dị có hại, tích lũy biến dị có lợi; phân tích quá trình hình thành đặc điểm thích nghi.",
    sections: [
      {
        title: "1. Biến dị cá thể và Đấu tranh sinh tồn",
        badge: "Quan sát của Darwin",
        points: [
          "**Biến dị cá thể:** Darwin nhận thấy các cá thể trong cùng một lứa con sinh ra không hoàn toàn giống hệt nhau mà luôn xuất hiện những sai khác cá biệt nhỏ nhặt, và phần lớn các biến dị này có khả năng di truyền cho đời sau.",
          "**Tiềm năng sinh sản và Đấu tranh sinh tồn:** Tất cả các loài sinh vật đều có xu hướng sinh ra số lượng con cái nhiều hơn rất nhiều so với số lượng có thể sống sót tới tuổi sinh sản. Do nguồn sống (thức ăn, nơi ở, ánh sáng) trong tự nhiên luôn có hạn, dẫn đến cuộc đấu tranh sinh tồn quyết liệt giữa các cá thể."
        ]
      },
      {
        title: "2. Chọn lọc tự nhiên theo Darwin",
        badge: "Sống sót của cá thể thích nghi",
        points: [
          "**Khái niệm:** Chọn lọc tự nhiên là quá trình phân hóa khả năng sống sót và sinh sản của các cá thể trong quần thể. Những cá thể mang biến dị cá thể có lợi giúp chúng thích nghi tốt hơn với môi trường sẽ có cơ hội sống sót cao hơn và để lại nhiều con cái hơn cho thế hệ sau.",
          "**Bản chất:** CLTN tác động lên từng cá thể riêng lẻ nhưng kết quả dẫn đến sự biến đổi của toàn bộ quần thể. CLTN không chủ động tạo ra biến dị theo nhu cầu của sinh vật, mà chỉ đóng vai trò là chiếc 'màng lọc' sàng lọc những biến dị đã có sẵn.",
          "**Hình thành loài mới:** Dưới tác động phân hóa của chọn lọc tự nhiên trong các điều kiện môi trường sống khác nhau, từ một loài tổ tiên ban đầu dần dần phân li thành nhiều nhánh thích nghi khác nhau (**phân li tính trạng**), tạo nên các loài mới."
        ]
      }
    ],
    summaryDiagram: "Sinh sản quá mức + Nguồn sống có hạn $\to$ Đấu tranh sinh tồn $\to$ CLTN giữ lại cá thể thích nghi $\to$ Phân li tính trạng $\to$ Loài mới.",
    quizzes: [
      {
        q: "Theo quan niệm của Charles Darwin, đối tượng trực tiếp tác động của chọn lọc tự nhiên là gì?",
        options: [
          "A. Quần xã sinh vật",
          "B. Từng cá thể sinh vật riêng lẻ",
          "C. Hệ sinh thái rừng nhiệt đới",
          "D. Các cặp nucleotide trong phân tử DNA"
        ],
        answer: 1,
        explain: "Darwin cho rằng chọn lọc tự nhiên tác động trực tiếp lên từng cá thể riêng lẻ thông qua sự sống sót và sinh sản ưu thế của những cá thể mang biến dị thích nghi."
      },
      {
        q: "Đóng góp vĩ đại nhất của Darwin cho khoa học sinh học tiến hóa là gì?",
        options: [
          "A. Phát hiện ra cấu trúc xoắn kép của DNA",
          "B. Phát hiện ra quy luật phân li độc lập của gene",
          "C. Đưa ra học thuyết chọn lọc tự nhiên để giải thích sự hình thành các đặc điểm thích nghi và sự đa dạng của sinh giới",
          "D. Chứng minh sự di truyền tế bào chất qua dòng mẹ"
        ],
        answer: 2,
        explain: "Darwin là người đầu tiên đặt nền móng khoa học vững chắc giải thích sự tiến hóa thông qua cơ chế chọn lọc tự nhiên, bác bỏ các quan điểm thần quyền về sự bất biến của loài."
      },
      {
        q: "Hạn chế lớn nhất trong học thuyết tiến hóa của Darwin vào thời đại của ông là gì?",
        options: [
          "A. Chưa giải thích được nguyên nhân phát sinh biến dị và cơ chế di truyền các biến dị từ thế hệ này sang thế hệ khác",
          "B. Không thừa nhận vai trò của đấu tranh sinh tồn",
          "C. Cho rằng loài sinh vật không bao giờ biến đổi",
          "D. Bác bỏ hoàn toàn vai trò của các biến dị cá thể"
        ],
        answer: 0,
        explain: "Vào thời đại của Darwin, khoa học di truyền học tế bào và phân tử chưa ra đời nên ông chưa thể hiểu được bản chất vật chất di truyền (gene/DNA) và nguyên nhân phát sinh đột biến."
      }
    ]
  },

  21: {
    num: 21,
    chapter: 5,
    isPractical: false,
    title: "Học thuyết tiến hóa tổng hợp hiện đại",
    subtitle: "Tiến hóa nhỏ, tiến hóa lớn, các hình thức cách li và cơ chế hình thành loài mới",
    objectives: "Phân biệt tiến hóa nhỏ và tiến hóa lớn; nêu vai trò của các cơ chế cách li sinh sản (cách li trước và sau hợp tử); giải thích con đường hình thành loài khác khu vực địa lí và cùng khu vực địa lí.",
    sections: [
      {
        title: "1. Tiến hóa nhỏ và Tiến hóa lớn",
        badge: "Đơn vị tiến hóa cơ sở",
        points: [
          "**Tiến hóa nhỏ:** Là quá trình biến đổi tần số allele và thành phần kiểu gene của **quần thể** qua các thế hệ dưới tác động của các nhân tố tiến hóa, dẫn tới sự hình thành loài mới. Quần thể là đơn vị tiến hóa cơ sở nhỏ nhất (cá thể không thể tiến hóa).",
          "**Tiến hóa lớn:** Là quá trình tiến hóa hình thành nên các nhóm phân loại trên loài (chi, họ, bộ, lớp, ngành) diễn ra trong quy mô không gian rộng lớn và thời gian địa chất hàng triệu năm."
        ]
      },
      {
        title: "2. Các cơ chế cách li sinh sản",
        badge: "Bảo toàn nòi giống riêng",
        points: [
          "**Cách li trước hợp tử (Ngăn cản thụ tinh):**",
          "• *Cách li nơi ở / sinh thái:* Sống ở các sinh cảnh khác nhau nên không gặp gỡ.",
          "• *Cách li tập tính:* Tập tính ve vãn, vũ điệu giao hoan, âm thanh gọi bạn tình khác biệt.",
          "• *Cách li thời gian (mùa vụ):* Mùa sinh sản hoặc thời gian nở hoa khác nhau.",
          "• *Cách li cơ học:* Cấu tạo cơ quan sinh sản không tương thích.",
          "**Cách li sau hợp tử:** Hợp tử tạo thành bị chết non, hoặc con lai sinh ra bị bất thụ không có khả năng sinh sản (Ví dụ: Lai ngựa cái với lừa đực sinh ra con La bất thụ do không giảm phân được)."
        ]
      },
      {
        title: "3. Các con đường hình thành loài mới",
        badge: "Khác khu vs Cùng khu vực",
        points: [
          "• **Hình thành loài bằng con đường cách li địa lí:** Chướng ngại địa lí (sông sâu, núi cao, biển lớn) ngăn cách dòng gene giữa các quần thể $\to$ CLTN và biến động di truyền tích lũy sai khác $\to$ Hình thành cách li sinh sản $\to$ Loài mới. Quá trình chậm chạp qua nhiều triệu năm.",
          "• **Hình thành loài cùng khu vực địa lí:** Diễn ra nhanh chóng qua các con đường: Cách li sinh thái, Cách li tập tính, và đặc biệt là con đường **Lai xa kèm đa bội hóa (Dị đa bội)** phổ biến ở thực vật."
        ]
      }
    ],
    summaryDiagram: "Quần thể ban đầu $\to$ Cách li địa lí / sinh thái / tập tính $\to$ Tích lũy sai khác di truyền $\to$ Cách li sinh sản $\to$ Loài mới hình thành.",
    quizzes: [
      {
        q: "Theo thuyết tiến hóa tổng hợp hiện đại, đơn vị nhỏ nhất có thể tiến hóa trong tự nhiên là gì?",
        options: [
          "A. Cá thể sinh vật",
          "B. Quần thể",
          "C. Quần xã",
          "D. Hệ sinh thái"
        ],
        answer: 1,
        explain: "Cá thể không thể biến đổi vốn gene trong đời sống; chỉ có quần thể với sự biến động tần số allele và thành phần kiểu gene qua các thế hệ mới là đơn vị cơ sở tiến hóa."
      },
      {
        q: "Hiện tượng con La sinh ra từ phép lai giữa ngựa cái và lừa đực bị bất thụ (không có khả năng sinh sản) là ví dụ minh họa cho cơ chế cách li nào?",
        options: [
          "A. Cách li tập tính",
          "B. Cách li thời gian (mùa vụ)",
          "C. Cách li cơ học",
          "D. Cách li sau hợp tử"
        ],
        answer: 3,
        explain: "Hai loài đã giao phối và tạo hợp tử phát triển thành con lai sống sót, nhưng con lai bất thụ không truyền gene tiếp được $\to$ Cách li sau hợp tử."
      },
      {
        q: "Con đường hình thành loài mới nào diễn ra nhanh nhất và phổ biến nhất ở giới thực vật?",
        options: [
          "A. Hình thành loài bằng cách li địa lí",
          "B. Hình thành loài bằng con đường lai xa và đa bội hóa",
          "C. Hình thành loài bằng đột biến nhân tạo",
          "D. Hình thành loài do biến đổi khí hậu toàn cầu"
        ],
        answer: 1,
        explain: "Lai xa kèm đa bội hóa tạo ra thể dị đa bội có bộ NST lưỡng bội kép ngay lập tức cách li sinh sản với bố mẹ, tạo nên loài mới chỉ sau 1 vài thế hệ (chiếm khoảng 75% loài thực vật có hoa)."
      }
    ]
  },

  22: {
    num: 22,
    chapter: 5,
    isPractical: false,
    title: "Tiến hóa lớn và quá trình phát sinh chủng loại",
    subtitle: "Cây phát sinh chủng loại (Phylogeny), các đại địa chất và những đợt đại tuyệt chủng",
    objectives: "Hiểu bản chất của tiến hóa lớn; đọc và phân tích cây phát sinh chủng loại; tóm tắt các mốc sự kiện lớn trong lịch sử sự sống qua các đại địa chất; nêu nguyên nhân và ý nghĩa của các đợt đại tuyệt chủng.",
    sections: [
      {
        title: "1. Tiến hóa lớn và Cây phát sinh chủng loại",
        badge: "Quan hệ họ hàng sinh giới",
        points: [
          "**Bản chất:** Tiến hóa lớn nghiên cứu các biến đổi hình thành nên các đơn vị phân loại trên loài (chi, họ, bộ...). Thường gắn liền với các đổi mới tiến hóa lớn (như sự xuất hiện của màng nhân, sự tiến hóa từ đơn bào lên đa bào, sự chuyển từ đời sống dưới nước lên cạn).",
          "**Cây phát sinh chủng loại (Phylogenetic tree):** Là sơ đồ phân nhánh biểu thị giả thuyết khoa học về các mối quan hệ họ hàng phát sinh chủng loại giữa các nhóm loài dựa trên dữ liệu giải phẫu, hóa thạch và trình tự phân tử DNA. Các loài cùng chia sẻ một nút phân nhánh gần nhất sẽ có quan hệ họ hàng gần gũi nhất."
        ]
      },
      {
        title: "2. Lịch sử sự sống qua các đại địa chất",
        badge: "Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh",
        points: [
          "• **Đại Thái cổ (Archean):** Xuất hiện sự sống đầu tiên (tế bào nhân sơ cổ nhất, vi khuẩn lam kị khí).",
          "• **Đại Nguyên sinh (Proterozoic):** Xuất hiện sinh vật nhân thực, tảo đơn bào và động vật đa bào không xương sống dưới biển; tích tụ oxy trong khí quyển.",
          "• **Đại Cổ sinh (Paleozoic):** 'Bùng nổ kỷ Cambri'; sinh vật chinh phục cạn (thực vật có mạch lên cạn, lưỡng cư, bò sát cổ); phát triển rừng dương xỉ khổng lồ hóa đá thành than đá.",
          "• **Đại Trung sinh (Mesozoic):** 'Thời đại của Bò sát và Khủng long'; hạt trần thống trị; xuất hiện chim, thú cổ và thực vật hạt kín.",
          "• **Đại Tân sinh (Cenozoic):** 'Thời đại của Thực vật có hoa, Thú và Chim'; xuất hiện loài người ở kỉ Đệ tứ (Quaternary)."
        ]
      },
      {
        title: "3. Các đợt đại tuyệt chủng",
        badge: "Tái tạo & Phân nhánh thích nghi",
        points: [
          "Lịch sử Trái Đất đã trải qua **5 đợt đại tuyệt chủng lớn** (nổi tiếng nhất là tuyệt chủng cuối kỉ Permi xóa sổ 95% loài biển, và tuyệt chủng cuối kỉ Creta cách đây 66 triệu năm làm tuyệt diệt khủng long do tiểu hành tinh va chạm). Tuyệt chủng dọn sạch không gian sinh thái cũ, mở đường cho sự bùng nổ đa dạng hóa của các nhóm loài mới (như động vật có vú sau kỉ Creta)."
        ]
      }
    ],
    summaryDiagram: "Đại Thái cổ (Nhân sơ) $\to$ Nguyên sinh (Nhân thực đa bào) $\to$ Cổ sinh (Lên cạn, lưỡng cư) $\to$ Trung sinh (Bò sát, hạt trần) $\to$ Tân sinh (Hạt kín, thú, người).",
    quizzes: [
      {
        q: "Thực vật có hoa (hạt kín) và động vật có vú (thú) tiến hóa phát triển thịnh vượng nhất vào đại địa chất nào sau đây?",
        options: [
          "A. Đại Cổ sinh",
          "B. Đại Trung sinh",
          "C. Đại Tân sinh",
          "D. Đại Nguyên sinh"
        ],
        answer: 2,
        explain: "Đại Tân sinh (đại hiện đại đang tiếp diễn) được mệnh danh là thời đại của thực vật hạt kín, chim và động vật có vú."
      },
      {
        q: "Sự kiện tiến hóa nào sau đây đánh dấu bước ngoặt quyết định cho sự sống chinh phục cạn thành công?",
        options: [
          "A. Sự xuất hiện của vi khuẩn cổ kị khí",
          "B. Sự tích tụ khí oxy trong khí quyển tạo tầng ozone chắn tia tử ngoại và sự xuất hiện rễ cành mạch dẫn ở thực vật",
          "C. Sự tuyệt chủng hoàn toàn của loài bò sát khổng lồ",
          "D. Sự hình thành các mỏ than đá"
        ],
        answer: 1,
        explain: "Nhờ quang hợp giải phóng $O_2$ hình thành tầng ozon lọc tia cực tím UV gây hại, các loài sinh vật mới có thể an toàn rời khỏi môi trường nước để thích nghi lên môi trường cạn."
      },
      {
        q: "Trên cây phát sinh chủng loại, hai loài cùng chia sẻ một nút phân nhánh gần nhất có mối quan hệ như thế nào?",
        options: [
          "A. Không có quan hệ họ hàng gì với nhau",
          "B. Có quan hệ họ hàng phát sinh rất gần gũi và có tổ tiên chung gần nhất",
          "C. Một loài chắc chắn là tổ tiên trực tiếp đẻ ra loài kia",
          "D. Hai loài có cấu tạo giải phẫu hoàn toàn khác biệt"
        ],
        answer: 1,
        explain: "Nút phân nhánh trên cây chủng loại đại diện cho tổ tiên chung gần nhất của hai nhánh xuất phát từ nút đó. Hai nhánh càng tách ra từ một nút gần thì quan hệ họ hàng càng gần."
      }
    ]
  },

  // ===================== CHƯƠNG 6. MÔI TRƯỜNG VÀ QUẦN THỂ =====================
  23: {
    num: 23,
    chapter: 6,
    isPractical: false,
    title: "Môi trường và các nhân tố sinh thái",
    subtitle: "Nhân tố vô sinh, hữu sinh, giới hạn sinh thái, khoảng thuận lợi và các quy luật thích nghi",
    objectives: "Phân loại các nhân tố sinh thái; vẽ và giải thích sơ đồ giới hạn sinh thái; phân tích quy luật tác động tổng hợp của các nhân tố; nêu các đặc điểm thích nghi hình thái, sinh lí và tập tính.",
    sections: [
      {
        title: "1. Môi trường sống và các nhóm nhân tố sinh thái",
        badge: "Vô sinh & Hữu sinh",
        points: [
          "**Khái niệm môi trường:** Là phần không gian bao quanh sinh vật, gồm tất cả các yếu tố tác động trực tiếp hoặc gián tiếp đến sự sinh trưởng, phát triển và sinh sản của sinh vật. Gồm 4 môi trường chính: môi trường đất, môi trường nước, môi trường trên cạn (không khí) và môi trường sinh vật.",
          "**Phân loại nhân tố sinh thái:**",
          "• **Nhân tố vô sinh (vật lí, hóa học):** Ánh sáng, nhiệt độ, độ ẩm, lượng mưa, không khí, gió, nồng độ muối, pH đất...",
          "• **Nhân tố hữu sinh:** Các sinh vật khác sống xung quanh (thực vật, động vật, vi sinh vật...) và đặc biệt là **nhân tố con người** (có khả năng tác động mạnh mẽ và định hướng tới sinh giới)."
        ]
      },
      {
        title: "2. Giới hạn sinh thái và Khoảng thuận lợi",
        badge: "Sơ đồ giới hạn sinh thái",
        points: [
          "**Giới hạn sinh thái:** Là khoảng giá trị xác định của một nhân tố sinh thái mà trong đó sinh vật có thể tồn tại và phát triển ổn định theo thời gian. Nằm ngoài giới hạn này, sinh vật sẽ chết.",
          "• **Khoảng thuận lợi (Optimum):** Vùng nhân tố sinh thái ở mức độ phù hợp nhất, giúp sinh vật thực hiện các chức năng sống tối ưu, sinh trưởng nhanh nhất.",
          "• **Khoảng chống chịu:** Khoảng nhân tố sinh thái gây ức chế hoạt động sinh lí của sinh vật.",
          "• **Điểm giới hạn dưới và trên:** Hai điểm tới hạn, vượt qua nó sinh vật sẽ bị chết.",
          "• **Quy luật:** Loài nào có giới hạn sinh thái càng rộng với nhiều nhân tố thì có vùng phân bố địa lí càng rộng (loài rộng nhiệt, rộng muối)."
        ]
      }
    ],
    summaryDiagram: "Giới hạn sinh thái = [ Điểm chết dưới — Khoảng chống chịu dưới — Khoảng thuận lợi (cực thuận) — Khoảng chống chịu trên — Điểm chết trên ].",
    quizzes: [
      {
        q: "Khoảng giá trị của một nhân tố sinh thái mà ở đó sinh vật thực hiện các chức năng sống tốt nhất, sinh trưởng và phát triển nhanh nhất được gọi là gì?",
        options: [
          "A. Giới hạn chịu đựng",
          "B. Khoảng chống chịu dưới",
          "C. Khoảng thuận lợi (vùng cực thuận)",
          "D. Ổ sinh thái"
        ],
        answer: 2,
        explain: "Khoảng thuận lợi là vùng giá trị tối ưu của nhân tố môi trường giúp các hoạt động sinh lí hóa sinh diễn ra hoàn hảo nhất."
      },
      {
        q: "Cá rô phi nuôi ở Việt Nam có giới hạn chịu nhiệt từ $5,6^\circ\text{C}$ đến $42^\circ\text{C}$, khoảng thuận lợi từ $20^\circ\text{C}$ đến $35^\circ\text{C}$. Nhiệt độ $5,6^\circ\text{C}$ được gọi là gì?",
        options: [
          "A. Điểm cực thuận",
          "B. Điểm giới hạn dưới",
          "C. Điểm giới hạn trên",
          "D. Khoảng chống chịu trên"
        ],
        answer: 1,
        explain: "$5,6^\circ\text{C}$ là điểm nhiệt độ thấp nhất mà cá rô phi còn chịu đựng được, dưới ngưỡng này cá sẽ chết $\to$ Điểm giới hạn dưới."
      },
      {
        q: "Nhân tố sinh thái nào sau đây thuộc nhóm nhân tố sinh thái hữu sinh?",
        options: [
          "A. Nhiệt độ của nước biển",
          "B. Vi khuẩn cộng sinh trong nốt sần rễ cây họ Đậu",
          "C. Lượng ánh sáng mặt trời chiếu xuống mặt đất",
          "D. Độ ẩm tương đối của không khí"
        ],
        answer: 1,
        explain: "Vi khuẩn nốt sần là sinh vật sống tác động tương tác với cây $\to$ thuộc nhóm nhân tố hữu sinh."
      }
    ]
  },

  24: {
    num: 24,
    chapter: 6,
    isPractical: false,
    title: "Sinh thái học quần thể",
    subtitle: "Kích thước, mật độ, cấu trúc tuổi, kiểu phân bố, tăng trưởng số lượng và sức chứa môi trường (K)",
    objectives: "Nêu các đặc trưng cơ bản của quần thể sinh vật; phân tích 3 kiểu phân bố cá thể; phân biệt đường cong tăng trưởng chữ J và chữ S; giải thích cơ chế điều hòa mật độ phụ thuộc và không phụ thuộc mật độ.",
    sections: [
      {
        title: "1. Các đặc trưng cơ bản của quần thể",
        badge: "Mật độ, Tỉ lệ giới tính & Cấu trúc tuổi",
        points: [
          "• **Tỉ lệ giới tính:** Tỉ lệ giữa số lượng cá thể đực / cá thể cái, thường xấp xỉ 1:1 ở giai đoạn non, đảm bảo hiệu quả thụ tinh.",
          "• **Cấu trúc tuổi:** Gồm nhóm tuổi trước sinh sản, nhóm tuổi sinh sản và sau sinh sản. Thể hiện qua **tháp tuổi**: Tháp phát triển (đáy rộng, dân số trẻ đang tăng), Tháp ổn định (đáy vừa phải), Tháp suy thoái (đáy hẹp, quần thể già hóa).",
          "• **Mật độ cá thể (Đặc trưng quan trọng nhất):** Số lượng cá thể hoặc sinh khối trên một đơn vị diện tích hay thể tích ($cá thể/m^2$, $cá thể/m^3$). Chi phối mức độ cạnh tranh, khả năng tìm kiếm thức ăn, dịch bệnh và tỉ lệ sinh sản - tử vong.",
          "• **3 kiểu phân bố không gian:** **Phân bố theo nhóm** (phổ biến nhất, gặp khi môi trường không đồng đều, cá thể tụ họp hỗ trợ nhau); **Phân bố đồng đều** (gặp khi môi trường đồng nhất, các cá thể cạnh tranh gay gắt hoặc có tập tính lãnh thổ); **Phân bố ngẫu nhiên** (môi trường đồng nhất, không có cạnh tranh gay gắt)."
        ]
      },
      {
        title: "2. Tăng trưởng kích thước quần thể",
        badge: "Đường cong chữ J vs chữ S",
        points: [
          "• **Tăng trưởng theo tiềm năng sinh học (Đường cong chữ J):** Xảy ra khi nguồn sống môi trường hoàn toàn không giới hạn, không bị thiên địch kìm hãm; quần thể tăng trưởng theo hàm số mũ nhanh chóng.",
          "• **Tăng trưởng thực tế / Logistic (Đường cong chữ S):** Trong tự nhiên, nguồn sống luôn bị giới hạn. Ban đầu tăng nhanh, sau đó tốc độ chậm dần và đạt trạng thái cân bằng dao động quanh **sức chứa tối đa của môi trường (K)**.",
          "• **Yếu tố chi phối kích thước:** Tỉ lệ sinh sản ($B$), Tỉ lệ tử vong ($D$), Tỉ lệ nhập cư ($I$), Tỉ lệ xuất cư ($E$). Công thức biến động: $\Delta N = (B + I) - (D + E)$."
        ]
      }
    ],
    summaryDiagram: "Đặc trưng: Mật độ, Giới tính, Tuổi (Tháp tuổi), Phân bố (Nhóm / Đồng đều / Ngẫu nhiên). Tăng trưởng: Chữ J (Vô hạn) vs Chữ S (Giới hạn bởi sức chứa K).",
    quizzes: [
      {
        q: "Đặc trưng nào sau đây được coi là đặc trưng quan trọng nhất của quần thể sinh vật, ảnh hưởng trực tiếp đến mức độ sử dụng nguồn sống và khả năng sinh sản, tử vong của quần thể?",
        options: [
          "A. Cấu trúc giới tính",
          "B. Mật độ cá thể của quần thể",
          "C. Nhóm tuổi sau sinh sản",
          "D. Tốc độ di cư"
        ],
        answer: 1,
        explain: "Mật độ là đặc trưng trung tâm, vì mật độ quyết định mức độ cạnh tranh gay gắt hay hỗ trợ nhau giữa các cá thể, quyết định khả năng lây lan dịch bệnh và điều hòa kích thước quần thể."
      },
      {
        q: "Kiểu phân bố cá thể nào là phổ biến nhất trong tự nhiên, giúp các sinh vật tận dụng nguồn sống tốt nhất và hỗ trợ nhau chống chọi với kẻ thù?",
        options: [
          "A. Phân bố ngẫu nhiên",
          "B. Phân bố đồng đều",
          "C. Phân bố theo nhóm (cụm)",
          "D. Phân bố thẳng đứng"
        ],
        answer: 2,
        explain: "Phân bố theo nhóm là phổ biến nhất do điều kiện môi trường phân bố không đều (nơi có thức ăn, nguồn nước) và các cá thể có tập tính bầy đàn để tự vệ, săn mồi."
      },
      {
        q: "Trong điều kiện môi trường bị giới hạn về thức ăn và không gian sống, đường cong tăng trưởng của quần thể sinh vật có hình dạng như thế nào?",
        options: [
          "A. Đường cong hình chữ J tăng liên tục",
          "B. Đường cong hình chữ S (tăng trưởng logistic tiệm cận sức chứa K)",
          "C. Đường thẳng dốc đứng",
          "D. Đường parabol úp ngược"
        ],
        answer: 1,
        explain: "Môi trường có giới hạn sẽ kìm hãm tốc độ sinh trưởng khi mật độ cao, tạo ra đường cong chữ S uốn lượn ổn định dần tiệm cận với sức chứa môi trường K."
      }
    ]
  },

  25: {
    num: 25,
    chapter: 6,
    isPractical: true,
    title: "Thực hành: Xác định một số đặc trưng của quần thể",
    subtitle: "Phương pháp ô tiêu chuẩn xác định mật độ thực vật và phương pháp bắt - đánh dấu - bắt lại (Lincoln-Petersen)",
    objectives: "Sử dụng thành thạo phương pháp ô tiêu chuẩn để đếm và tính mật độ thực vật/động vật ít di chuyển; áp dụng công thức Lincoln-Petersen ước tính số lượng cá thể quần thể động vật di chuyển; vẽ tháp tuổi.",
    sections: [
      {
        title: "1. Phương pháp Ô tiêu chuẩn (Quadrat sampling)",
        badge: "Thực vật & Động vật ít di chuyển",
        points: [
          "**Ứng dụng:** Đo mật độ cỏ, cây thân thảo, ốc sên, giun đất trong một khu vực.",
          "**Cách thực hiện:** Dùng khung gỗ/dây hình vuông kích thước chuẩn ($1m \times 1m = 1m^2$). Thả ngẫu nhiên khung tại 5–10 vị trí khác nhau trong bãi cỏ $\to$ Đếm số lượng cá thể trong từng ô tiêu chuẩn $\to$ Tính mật độ trung bình: $\bar{D} = \frac{\sum N_i}{k \times S_{ô}}$ ($cá thể/m^2$)."
        ]
      },
      {
        title: "2. Phương pháp Bắt – Đánh dấu – Bắt lại (Mark - Recapture)",
        badge: "Công thức Lincoln - Petersen",
        points: [
          "**Ứng dụng:** Ước tính kích thước quần thể ($N$) động vật di động nhanh (cá trong hồ, cào cào, chim, chuột).",
          "**Công thức ước tính:**",
          "$$N \approx \frac{M \times n}{R}$$",
          "Trong đó: $M$ là số cá thể bắt và được đánh dấu ở lần 1 rồi thả lại; $n$ là tổng số cá thể bắt được ở lần 2; $R$ là số cá thể có dấu gặp lại trong lần bắt thứ 2.",
          "**Giả định khoa học:** Quần thể kín (không có sinh, tử, xuất nhập cư lớn trong thời gian làm thí nghiệm); dấu đánh dấu không bị rơi rụng và không ảnh hưởng đến khả năng sống sót hay khả năng bị bắt lại của con vật; các cá thể đánh dấu phân bố hòa nhập đều vào quần thể."
        ]
      }
    ],
    summaryDiagram: "Ô tiêu chuẩn ($1m^2$): Đếm $\to$ Trung bình mật độ. Đánh dấu - Bắt lại: $N = \frac{M \times n}{R}$ (Bắt lần 1 đánh dấu $M$, lần 2 bắt $n$ thấy $R$ có dấu).",
    quizzes: [
      {
        q: "Người ta bắt 100 con cá chép trong một hồ nước nhân tạo, bấm dấu vào vây rồi thả lại vào hồ ($M=100$). Một tuần sau, người ta kéo lưới bắt được 120 con cá chép ($n=120$), trong đó đếm được 15 con có vết bấm dấu ($R=15$). Ước tính kích thước quần thể cá chép ($N$) trong hồ là khoảng bao nhiêu con?",
        options: [
          "A. 1500 con",
          "B. 800 con",
          "C. 1800 con",
          "D. 450 con"
        ],
        answer: 1,
        explain: "Áp dụng công thức Lincoln - Petersen: $N = \frac{M \times n}{R} = \frac{100 \times 120}{15} = 800$ con cá chép."
      },
      {
        q: "Điều kiện giả định nào sau đây là BẮT BUỘC để kết quả ước tính số lượng cá thể bằng phương pháp đánh dấu - bắt lại có độ tin cậy cao?",
        options: [
          "A. Các cá thể mang dấu phải bơi nhanh gấp đôi các cá thể bình thường",
          "B. Dấu đánh dấu phải tồn tại bền vững, không làm thay đổi hành vi và cơ hội bị bắt lại của con vật",
          "C. Quần thể phải mở liên tục với tốc độ nhập cư cực lớn",
          "D. Lần bắt thứ hai phải bắt được toàn bộ số cá thể của hồ"
        ],
        answer: 1,
        explain: "Nếu vết dấu bị rơi mất hoặc vết dấu làm con vật yếu đi dễ bị bắt thì tỉ lệ $R$ bị sai lệch, dẫn tới ước tính kích thước $N$ hoàn toàn không chính xác."
      },
      {
        q: "Để xác định mật độ cây hoa cúc dại trong một cánh đồng cỏ rộng lớn, phương pháp nào sau đây là khả thi và chính xác nhất?",
        options: [
          "A. Bắt - đánh dấu - bắt lại",
          "B. Đếm toàn bộ từng cây trên cả cánh đồng",
          "C. Phương pháp đặt các ô tiêu chuẩn ngẫu nhiên và tính mật độ trung bình",
          "D. Đo nồng độ oxy hòa tan trong đất"
        ],
        answer: 2,
        explain: "Với thực vật đứng yên, phương pháp chọn ngẫu nhiên các ô tiêu chuẩn đại diện ($1m \times 1m$) rồi lấy trung bình là phương pháp khoa học chuẩn mực và tiết kiệm thời gian nhất."
      }
    ]
  },

  // ===================== CHƯƠNG 7. SINH THÁI HỌC QUẦN XÃ =====================
  26: {
    num: 26,
    chapter: 7,
    isPractical: false,
    title: "Quần xã sinh vật",
    subtitle: "Cấu trúc thành phần loài, phân tầng thẳng đứng, các mối quan hệ hỗ trợ và đối kháng giữa các loài",
    objectives: "Nêu khái niệm và các đặc trưng cơ bản của quần xã; phân biệt loài ưu thế và loài đặc trưng; phân tích các mối quan hệ sinh thái khác loài (hỗ trợ vs đối kháng); giải thích hiện tượng khống chế sinh học.",
    sections: [
      {
        title: "1. Khái niệm và đặc trưng thành phần loài",
        badge: "Đa dạng & Cấu trúc không gian",
        points: [
          "**Khái niệm:** Quần xã sinh vật là tập hợp các quần thể sinh vật thuộc nhiều loài khác nhau, cùng sống trong một không gian và thời gian xác định, gắn bó với nhau như một thể thống nhất qua các mối quan hệ sinh thái tương hỗ.",
          "• **Loài ưu thế:** Là loài có số lượng cá thể nhiều, sinh khối lớn, hoạt động mạnh chi phối môi trường (Ví dụ: Cây lúa trong ruộng lúa, cây thông trong rừng thông).",
          "• **Loài đặc trưng:** Là loài chỉ có ở một quần xã nào đó hoặc có số lượng nhiều hơn hẳn các loài khác (Ví dụ: Cá cóc ở Tam Đảo, cây tràm ở rừng U Minh).",
          "• **Cấu trúc không gian:** Phân bố thẳng đứng (phân tầng thực vật rừng mưa nhiệt đới giúp tận dụng tối đa ánh sáng mặt trời); Phân bố theo chiều ngang (thay đổi từ bờ vào sâu đất liền)."
        ]
      },
      {
        title: "2. Các mối quan hệ khác loài trong quần xã",
        badge: "Hỗ trợ (+) vs Đối kháng (-)",
        points: [
          "**Quan hệ hỗ trợ (Ít nhất 1 bên có lợi, không bên nào bị hại):**",
          "• **Cộng sinh (+/+):** Hai loài sống gắn bó chặt chẽ bắt buộc, cùng có lợi (Ví dụ: Địa y giữa nấm và tảo lam; vi khuẩn Rhizobium trong nốt sần rễ đậu; hải quỳ và cua ký cư).",
          "• **Hợp tác (+/+):** Hai loài cùng có lợi nhưng không bắt buộc (Ví dụ: Chim sáo bắt ve trên lưng trâu rừng; cá nhỏ dọn dẹp kí sinh trên miệng cá lớn).",
          "• **Hội sinh (+/0):** Một bên có lợi, bên kia không lợi cũng không hại (Ví dụ: Cây phong lan bám thân gỗ lớn; cá ép bám trên mai rùa biển).",
          "**Quan hệ đối kháng (Ít nhất 1 bên bị hại):**",
          "• **Cạnh tranh (-/-):** Các loài tranh giành nguồn sống, dẫn tới phân li ổ sinh thái.",
          "• **Kí sinh (+/-):** Sinh vật kí sinh lấy chất dinh dưỡng từ vật chủ (Giun sán kí sinh ruột người, cây tơ hồng kí sinh thân cây).",
          "• **Sinh vật ăn sinh vật khác (+/-):** Động vật ăn thực vật, thú ăn thịt săn con mồi, cây bắt mồi.",
          "• **Ức chế - cảm nhiễm (0/-):** Một loài vô tình tiết chất độc kìm hãm loài khác (Tảo giáp nở hoa gây 'thủy triều đỏ' tiết độc tố giết chết tôm cá; nấm Penicillium tiết kháng sinh diệt vi khuẩn)."
        ]
      },
      {
        title: "3. Hiện tượng khống chế sinh học",
        badge: "Cân bằng sinh học & Nông nghiệp sạch",
        points: [
          "Hiện tượng số lượng cá thể của một loài bị kìm chế ở một mức độ nhất định bởi mối quan hệ với loài khác. Ứng dụng dùng thiên địch tiêu diệt sâu bọ có hại trong nông nghiệp (nuôi ong mắt đỏ diệt sâu đục thân, nuôi kiến vàng bảo vệ vườn cam) thay thế thuốc trừ sâu hóa học."
        ]
      }
    ],
    summaryDiagram: "Quan hệ khác loài: Hỗ trợ (Cộng sinh +/+, Hợp tác +/+, Hội sinh +/0) | Đối kháng (Cạnh tranh -/-, Kí sinh +/-, Ăn thịt +/-, Ức chế - cảm nhiễm 0/-).",
    quizzes: [
      {
        q: "Mối quan hệ giữa nấm và vi khuẩn lam tạo thành cơ thể Địa y là ví dụ điển hình của mối quan hệ sinh thái nào?",
        options: [
          "A. Hội sinh",
          "B. Hợp tác",
          "C. Cộng sinh",
          "D. Kí sinh"
        ],
        answer: 2,
        explain: "Trong địa y, nấm hút nước và khoáng cung cấp cho tảo, tảo quang hợp cung cấp chất hữu cơ nuôi nấm. Hai bên gắn bó chặt chẽ bắt buộc, tách rời nhau cả hai đều chết $\to$ Cộng sinh (+/+)."
      },
      {
        q: "Hiện tượng tảo giáp nở hoa sinh sản quá mức gây hiện tượng 'thủy triều đỏ' tiết ra chất độc gây chết hàng loạt tôm cá xung quanh là mối quan hệ gì?",
        options: [
          "A. Cạnh tranh cùng loài",
          "B. Quan hệ ức chế - cảm nhiễm",
          "C. Kí sinh",
          "D. Động vật ăn thịt con mồi"
        ],
        answer: 1,
        explain: "Tảo giáp vô tình tiết chất độc trong quá trình sống làm hại các loài sinh vật khác mà bản thân tảo không thu được lợi lộc dinh dưỡng gì từ xác cá chết $\to$ Quan hệ ức chế - cảm nhiễm (0/-)."
      },
      {
        q: "Ý nghĩa thực tiễn to lớn nhất của hiện tượng khống chế sinh học trong nông nghiệp là gì?",
        options: [
          "A. Giúp tăng diện tích đất canh tác",
          "B. Sử dụng thiên địch tự nhiên để phòng trừ sâu hại cây trồng thay thế thuốc hóa học độc hại",
          "C. Tạo ra các giống cây trồng biến đổi gene",
          "D. Làm tăng độ ẩm đất canh tác"
        ],
        answer: 1,
        explain: "Khống chế sinh học là nền tảng của nông nghiệp hữu cơ sạch, sử dụng sinh vật thiên địch (như ong mắt đỏ, bọ rùa) khống chế số lượng sâu hại mà không gây ô nhiễm môi trường."
      }
    ]
  },

  27: {
    num: 27,
    chapter: 7,
    isPractical: true,
    title: "Thực hành: Tìm hiểu cấu trúc dinh dưỡng của quần xã trong tự nhiên",
    subtitle: "Xây dựng chuỗi thức ăn, lưới thức ăn và xác định các bậc dinh dưỡng ngoài thực địa",
    objectives: "Quan sát và thu thập thông tin về các loài sinh vật trong một hệ sinh thái cụ thể; thiết lập các chuỗi thức ăn và ghép thành lưới thức ăn hoàn chỉnh; xác định chính xác các bậc dinh dưỡng.",
    sections: [
      {
        title: "1. Nguyên tắc thiết lập chuỗi và lưới thức ăn",
        badge: "Quy ước mũi tên dòng năng lượng",
        points: [
          "**Quy ước chiều mũi tên:** Mũi tên luôn chỉ từ **Sinh vật bị ăn $\to$ Sinh vật ăn** (chỉ chiều dòng vật chất và năng lượng được vận chuyển).",
          "**Các thành phần dinh dưỡng:**",
          "• **Sinh vật sản xuất (Producer):** Sinh vật tự dưỡng quang hợp (cây cỏ, tảo) tích lũy năng lượng sơ cấp.",
          "• **Sinh vật tiêu thụ bậc 1 (Primary Consumer):** Động vật ăn thực vật (cào cào, sâu, thỏ, chuột).",
          "• **Sinh vật tiêu thụ bậc 2 (Secondary Consumer):** Động vật ăn thịt ăn động vật tiêu thụ bậc 1 (ếch, chim sâu, rắn).",
          "• **Sinh vật tiêu thụ bậc cao nhất (Apex Predator):** Động vật ăn thịt đầu bảng (đại bàng, hổ, sư tử).",
          "• **Sinh vật phân giải (Decomposer):** Nấm, vi khuẩn phân hủy chất hữu cơ thành khoáng trả về môi trường.",
          "**Bậc dinh dưỡng:** Sinh vật sản xuất là **Bậc dinh dưỡng cấp 1 ($T_1$)**; Sinh vật tiêu thụ bậc 1 là **Bậc dinh dưỡng cấp 2 ($T_2$)**; Sinh vật tiêu thụ bậc 2 là **Bậc dinh dưỡng cấp 3 ($T_3$)**..."
        ]
      },
      {
        title: "2. Quy trình thực hiện ngoài thực địa",
        badge: "Quan sát & Báo cáo lưới",
        points: [
          "**Bước 1:** Khảo sát một khu vực tự nhiên (ao nước, vườn trường, bãi đất hoang). Ghi nhận danh mục các loài sinh vật bắt gặp.",
          "**Bước 2:** Xác định mối quan hệ dinh dưỡng (ai ăn ai).",
          "**Bước 3:** Lập các chuỗi thức ăn độc lập, sau đó tìm các mắt xích chung (loài tham gia vào nhiều chuỗi) để liên kết lại thành một **lưới thức ăn** hoàn chỉnh."
        ]
      }
    ],
    summaryDiagram: "Cỏ ($T_1$) $\to$ Cào cào (Tiêu thụ 1, $T_2$) $\to$ Ếch (Tiêu thụ 2, $T_3$) $\to$ Rắn (Tiêu thụ 3, $T_4$) $\to$ Vi sinh vật phân giải.",
    quizzes: [
      {
        q: "Trong một chuỗi thức ăn: Cây ngô $\to$ Sâu ăn lá ngô $\to$ Bọ ngựa $\to$ Chim sâu, sinh vật nào thuộc bậc dinh dưỡng cấp 3 ($T_3$)?",
        options: [
          "A. Cây ngô",
          "B. Sâu ăn lá ngô",
          "C. Bọ ngựa",
          "D. Chim sâu"
        ],
        answer: 2,
        explain: "Cây ngô là $T_1$ (sản xuất); Sâu ăn lá là $T_2$ (tiêu thụ bậc 1); Bọ ngựa là $T_3$ (tiêu thụ bậc 2); Chim sâu là $T_4$ (tiêu thụ bậc 3)."
      },
      {
        q: "Trong sơ đồ lưới thức ăn, chiều của mũi tên nối giữa hai loài sinh vật thể hiện điều gì?",
        options: [
          "A. Thể hiện loài nào có kích thước cơ thể lớn hơn",
          "B. Chiều vận chuyển của dòng vật chất và năng lượng từ con mồi sang vật ăn thịt",
          "C. Thứ tự tiến hóa phát sinh chủng loại giữa hai loài",
          "D. Mức độ cạnh tranh giữa hai loài"
        ],
        answer: 1,
        explain: "Mũi tên trong chuỗi thức ăn quy ước chỉ từ sinh vật bị ăn sang sinh vật sử dụng nó làm thức ăn, biểu thị hướng đi của vật chất và năng lượng."
      },
      {
        q: "Nếu một quần xã có lưới thức ăn càng phức tạp và có nhiều mắt xích chung thì quần xã đó sẽ có đặc điểm nào sau đây?",
        options: [
          "A. Kém ổn định và dễ bị sụp đổ",
          "B. Độ ổn định sinh thái càng cao và khả năng tự điều chỉnh càng mạnh",
          "C. Không có sinh vật phân giải",
          "D. Không có dòng năng lượng đi qua"
        ],
        answer: 1,
        explain: "Lưới thức ăn càng nhiều mắt xích và phức tạp thì khi một loài bị suy giảm, các loài ăn thịt có thể linh hoạt chuyển sang sử dụng loài khác thay thế, giúp quần xã duy trì sự ổn định cao."
      }
    ]
  },

  28: {
    num: 28,
    chapter: 7,
    isPractical: false,
    title: "Hệ sinh thái",
    subtitle: "Cấu trúc hệ sinh thái, thành phần hữu sinh và vô sinh, phân loại hệ sinh thái tự nhiên và nhân tạo",
    objectives: "Nêu khái niệm hệ sinh thái; phân tích cấu trúc gồm thành phần vô sinh (sinh cảnh) và hữu sinh; so sánh hệ sinh thái tự nhiên và nhân tạo; giải thích khả năng tự điều chỉnh của hệ sinh thái.",
    sections: [
      {
        title: "1. Khái niệm và cấu trúc hoàn chỉnh của Hệ sinh thái",
        badge: "Hệ thống mở & Tự điều chỉnh",
        points: [
          "**Khái niệm:** Hệ sinh thái gồm quần xã sinh vật và sinh cảnh vô sinh (môi trường sống) của nó. Trong hệ sinh thái, các sinh vật luôn tác động qua lại với nhau và tác động qua lại với các thành phần của sinh cảnh để tạo thành một hệ thống chức năng hoàn chỉnh và tương đối ổn định.",
          "**Cấu trúc 2 thành phần chính:**",
          "• **Thành phần vô sinh (Sinh cảnh - Biotope):** Nước, đất, đá, không khí, nhiệt độ, ánh sáng, các chất khoáng vô cơ ($C, N, P, O_2, CO_2$) và các hợp chất hữu cơ mùn.",
          "• **Thành phần hữu sinh (Quần xã sinh vật - Biocenosis):** Sinh vật sản xuất (thực vật, vi khuẩn quang hợp, hóa tổng hợp); Sinh vật tiêu thụ (động vật ăn cỏ, động vật ăn thịt); Sinh vật phân giải (vi khuẩn, nấm hoại sinh, giun đất)."
        ]
      },
      {
        title: "2. Phân loại hệ sinh thái",
        badge: "Tự nhiên vs Nhân tạo",
        points: [
          "• **Hệ sinh thái tự nhiên:**",
          "  - Trên cạn: Rừng mưa nhiệt đới, xa van, hoang mạc, rừng lá kim (Taiga), đài nguyên (Tundra).",
          "  - Dưới nước: Nước ngọt (sông, suối, hồ, đầm lầy); Nước mặn (vùng biển ven bờ, rạn san hô, rừng ngập mặn, biển khơi).",
          "• **Hệ sinh thái nhân tạo (Đồng ruộng, ao nuôi cá, đô thị):** Do con người tạo ra và quản lí. Đặc điểm: Thành phần loài nghèo nàn, chuỗi thức ăn ngắn, tính ổn định thấp; **bắt buộc phải có sự bổ sung năng lượng và vật chất của con người** (phân bón, thức ăn, năng lượng điện, thủy lợi) thì hệ mới duy trì ổn định được."
        ]
      }
    ],
    summaryDiagram: "Hệ sinh thái = Quần xã (Sản xuất + Tiêu thụ + Phân giải) + Sinh cảnh (Đất, nước, khí hậu, khoáng). Trao đổi vật chất tuần hoàn, năng lượng một chiều.",
    quizzes: [
      {
        q: "Điểm khác biệt cơ bản nhất giữa hệ sinh thái nhân tạo (như ruộng lúa, bể cá cảnh) so với hệ sinh thái tự nhiên là gì?",
        options: [
          "A. Hệ sinh thái nhân tạo không có chuỗi thức ăn",
          "B. Hệ sinh thái nhân tạo có độ ổn định sinh thái rất thấp và luôn cần con người bổ sung vật chất và năng lượng",
          "C. Hệ sinh thái nhân tạo không có sinh vật sản xuất",
          "D. Hệ sinh thái nhân tạo có số lượng loài phong phú hơn rừng mưa nhiệt đới"
        ],
        answer: 1,
        explain: "Hệ sinh thái nhân tạo có tính đa dạng loài thấp, lưới thức ăn đơn giản, nếu không có sự can thiệp bổ sung năng lượng (phân bón, thuốc trừ sâu, tưới tiêu) của con người thì hệ sẽ nhanh chóng bị biến đổi hoặc thoái hóa."
      },
      {
        q: "Thành phần sinh vật nào trong hệ sinh thái đóng vai trò chủ đạo trong việc chuyển hóa các hợp chất hữu cơ từ xác động thực vật và chất bài tiết thành các chất khoáng vô cơ đơn giản?",
        options: [
          "A. Sinh vật sản xuất",
          "B. Sinh vật tiêu thụ bậc 1",
          "C. Sinh vật phân giải (vi khuẩn, nấm hoại sinh)",
          "D. Sinh vật tiêu thụ bậc cao nhất"
        ],
        answer: 2,
        explain: "Sinh vật phân giải khép kín vòng tuần hoàn vật chất bằng cách phân hủy xác hữu cơ thành khoáng chất vô cơ để cây hấp thu trở lại."
      },
      {
        q: "Rừng mưa nhiệt đới thuộc loại hệ sinh thái nào sau đây?",
        options: [
          "A. Hệ sinh thái nhân tạo",
          "B. Hệ sinh thái tự nhiên trên cạn",
          "C. Hệ sinh thái nước mặn",
          "D. Hệ sinh thái nước ngọt"
        ],
        answer: 1,
        explain: "Rừng mưa nhiệt đới là một trong những hệ sinh thái tự nhiên trên cạn rộng lớn và có mức độ đa dạng sinh học cao nhất trên Trái Đất."
      }
    ]
  },

  29: {
    num: 29,
    chapter: 7,
    isPractical: false,
    title: "Trao đổi vật chất và chuyển hóa năng lượng trong hệ sinh thái",
    subtitle: "Dòng năng lượng 1 chiều, hiệu suất sinh thái, các chu trình sinh địa hóa (C, N, H2O, P) và tháp sinh thái",
    objectives: "Mô tả dòng năng lượng một chiều qua các bậc dinh dưỡng; tính hiệu suất sinh thái; phân biệt năng suất sơ cấp thô và năng suất sơ cấp tinh; trình bày các chu trình sinh địa hóa carbon, nitrogen, nước.",
    sections: [
      {
        title: "1. Dòng năng lượng trong hệ sinh thái",
        badge: "Dòng 1 chiều & Hiệu suất sinh thái",
        points: [
          "**Nguồn gốc:** Năng lượng mặt trời đi vào hệ sinh thái qua sinh vật sản xuất (quang hợp chỉ sử dụng khoảng $0,2–0,5\%$ tổng năng lượng chiếu xuống), sau đó truyền qua các bậc dinh dưỡng và cuối cùng tiêu hao dần dưới dạng **nhiệt năng** tỏa ra môi trường.",
          "**Quy luật dòng năng lượng:** **Năng lượng truyền theo một chiều từ sinh vật sản xuất lên các bậc cao hơn và KHÔNG tuần hoàn trở lại**.",
          "**Tiêu hao năng lượng:** Qua mỗi bậc dinh dưỡng, có tới khoảng **90%** năng lượng bị mất mát qua hô hấp tế bào ($70\%$), bài tiết, rơi rụng chất thải ($10\%$) và phần chưa sử dụng ($10\%$); chỉ có khoảng **10%** năng lượng được tích lũy chuyển tiếp lên bậc kế tiếp.",
          "**Hiệu suất sinh thái:** Là tỉ lệ phần trăm chuyển hóa năng lượng giữa các bậc dinh dưỡng kế tiếp nhau trong hệ sinh thái: $Eff = \frac{E_{n+1}}{E_n} \times 100\%$."
        ]
      },
      {
        title: "2. Năng suất sinh học và Tháp sinh thái",
        badge: "Năng suất sơ cấp & Tháp sinh khối",
        points: [
          "• **Năng suất sơ cấp thô (GPP - Gross Primary Productivity):** Tổng lượng chất hữu cơ do sinh vật sản xuất tạo ra qua quang hợp.",
          "• **Năng suất sơ cấp tinh (NPP - Net Primary Productivity):** Phần chất hữu cơ tích lũy thành sinh khối mới của cây sau khi đã trừ đi lượng tiêu hao cho hô hấp của chính cây: **$NPP = GPP - R$** ($R$ là hô hấp).",
          "• **3 loại Tháp sinh thái:** Tháp số lượng, Tháp sinh khối và **Tháp năng lượng** (Tháp năng lượng **luôn có dạng chuẩn đáy rộng - ngọn hẹp**, không bao giờ bị đảo ngược)."
        ]
      },
      {
        title: "3. Chu trình sinh - địa - hóa (Biogeochemical cycles)",
        badge: "Tuần hoàn vật chất",
        points: [
          "Khác với năng lượng, **vật chất trong hệ sinh thái vận động tuần hoàn khép kín** giữa sinh cảnh và sinh vật:",
          "• **Chu trình Carbon:** $CO_2$ khí quyển $\to$ Quang hợp thành chất hữu cơ $\to$ Ăn thịt $\to$ Trả lại khí quyển qua hô hấp, phân giải xác và đốt nhiên liệu hóa thạch.",
          "• **Chu trình Nitrogen:** Khí $N_2$ trơ được cố định bởi vi khuẩn nốt sần (*Rhizobium*) hoặc sấm sét $\to$ Biến thành $NH_4^+, NO_3^-$ cho rễ hấp thu $\to$ Tổng hợp amino acid protein $\to$ Trả lại $N_2$ nhờ vi khuẩn phản nitrat hóa.",
          "• **Chu trình Nước:** Bốc hơi từ biển/hồ và thoát hơi nước ở lá $\to$ Mây $\to$ Mưa rơi xuống đất ngấm thành nước ngầm và chảy ra sông biển."
        ]
      }
    ],
    summaryDiagram: "Năng lượng: Mặt trời $\to$ Cây $\to$ Động vật $\to$ Nhiệt tỏa ra ngoài (MỘT CHIỀU). Vật chất: Môi trường $\leftrightarrow$ Sinh vật (TUẦN HOÀN KHÉP KÍN). $NPP = GPP - R$.",
    quizzes: [
      {
        q: "Điểm khác biệt căn bản nhất giữa dòng năng lượng và chu trình vật chất trong hệ sinh thái là gì?",
        options: [
          "A. Năng lượng tuần hoàn lặp lại vô tận, còn vật chất bị tiêu hao mất hoàn toàn",
          "B. Năng lượng truyền một chiều từ sinh vật sản xuất qua các bậc dinh dưỡng rồi thoát ra môi trường dưới dạng nhiệt, trong khi vật chất tuần hoàn khép kín",
          "C. Năng lượng chỉ đi qua các sinh vật phân giải",
          "D. Không có điểm khác biệt, cả hai đều vận động tuần hoàn như nhau"
        ],
        answer: 1,
        explain: "Vật chất được tái sử dụng liên tục theo các chu trình sinh địa hóa, còn năng lượng đi vào hệ qua quang hợp và dần dần thoát ra ngoài vũ trụ dưới dạng nhiệt, không tái sử dụng được."
      },
      {
        q: "Một hệ sinh thái nhận được năng lượng mặt trời tích lũy ở sinh vật sản xuất là $2 \times 10^6 \text{ kcal}$. Năng lượng tích lũy ở sinh vật tiêu thụ bậc 1 là $2 \times 10^5 \text{ kcal}$. Hiệu suất sinh thái giữa hai bậc dinh dưỡng này là bao nhiêu?",
        options: [
          "A. 1%",
          "B. 10%",
          "C. 20%",
          "D. 0,1%"
        ],
        answer: 1,
        explain: "Hiệu suất sinh thái: $Eff = \frac{2 \times 10^5}{2 \times 10^6} \times 100\% = 10\%$."
      },
      {
        q: "Loại tháp sinh thái nào sau đây LUÔN CÓ DẠNG ĐÁY RỘNG ĐỈNH HẸP (không bao giờ bị đảo ngược) trong mọi hệ sinh thái tự nhiên?",
        options: [
          "A. Tháp số lượng",
          "B. Tháp sinh khối",
          "C. Tháp năng lượng",
          "D. Tháp tuổi"
        ],
        answer: 2,
        explain: "Theo quy luật nhiệt động lực học và hiệu suất truyền năng lượng qua các bậc dinh dưỡng, năng lượng ở bậc sau luôn luôn nhỏ hơn bậc trước do tiêu hao hô hấp $\to$ Tháp năng lượng luôn đáy rộng ngọn hẹp."
      }
    ]
  },

  30: {
    num: 30,
    chapter: 7,
    isPractical: false,
    title: "Diễn thế sinh thái",
    subtitle: "Diễn thế nguyên sinh, diễn thế thứ sinh, nguyên nhân biến đổi và ý nghĩa phục hồi hệ sinh thái",
    objectives: "Nêu khái niệm diễn thế sinh thái; phân biệt chi tiết diễn thế nguyên sinh và thứ sinh; giải thích nguyên nhân bên trong và bên ngoài; nêu ý nghĩa thực tiễn trong lâm nghiệp và phục hồi môi trường.",
    sections: [
      {
        title: "1. Khái niệm và các loại diễn thế sinh thái",
        badge: "Nguyên sinh vs Thứ sinh",
        points: [
          "**Khái niệm:** Diễn thế sinh thái là quá trình biến đổi tuần tự của quần xã sinh vật qua các giai đoạn khác nhau, tương ứng với sự biến đổi của môi trường sống, thay thế quần xã này bằng quần xã khác.",
          "**Diễn thế nguyên sinh:**",
          "• **Khởi đầu:** Bắt đầu từ môi trường **hoàn toàn trống trơn, chưa từng có sự sống** (đảo tro tàn núi lửa mới phun, đụn cát mới bồi, bãi đá trần).",
          "• **Giai đoạn tiên phong:** Sinh vật tiên phong đến định cư (địa y, rêu bám đá tích tụ mùn).",
          "• **Giai đoạn trung gian:** Các quần xã thực vật thân thảo, cây bụi, cây gỗ nhỏ kế tiếp nhau.",
          "• **Kết quả:** Hình thành **quần xã đỉnh cực (quần xã ổn định)** tương đối lâu dài.",
          "**Diễn thế thứ sinh:**",
          "• **Khởi đầu:** Xuất hiện ở môi trường **đã từng có một quần xã sinh vật sinh sống**, nhưng do hỏa hoạn, lũ lụt hoặc con người chặt phá làm quần xã ban đầu bị hủy hoại hoàn toàn, đất vẫn còn chứa hạt giống, chất hữu cơ và vi sinh vật.",
          "• **Kết quả:** Dưới tác động tự nhiên hoặc phục hồi, có thể hình thành quần xã đỉnh cực phục hồi; nhưng nếu bị tàn phá liên tục sẽ dẫn tới **quần xã thoái hóa nghèo nàn**."
        ]
      },
      {
        title: "2. Nguyên nhân và Ý nghĩa thực tiễn",
        badge: "Nguyên nhân & Dự báo phục hồi",
        points: [
          "• **Nguyên nhân bên ngoài:** Do biến đổi khí hậu khắc nghiệt, bão lũ, núi lửa, hỏa hoạn, động đất, ô nhiễm môi trường do con người gây ra.",
          "• **Nguyên nhân bên trong:** Cạnh tranh gay gắt giữa các loài trong quần xã; hoạt động sống của quần xã làm biến đổi sâu sắc điều kiện môi trường sống (sinh cảnh), vô tình tạo điều kiện thuận lợi cho loài khác đến thay thế chính mình.",
          "• **Ý nghĩa thực tiễn:** Nắm được quy luật diễn thế giúp con người chủ động **dự đoán xu hướng biến đổi của thảm thực vật**, lên kế hoạch khai thác tài nguyên rừng hợp lí, khoanh nuôi tái sinh rừng ngập mặn và phục hồi đất thoái hóa."
        ]
      }
    ],
    summaryDiagram: "Nguyên sinh: Môi trường trống rỗng $\to$ Tiên phong $\to$ Trung gian $\to$ Đỉnh cực. Thứ sinh: Quần xã cũ bị phá $\to$ Đất còn tàn tích $\to$ Trung gian $\to$ Đỉnh cực hoặc Thoái hóa.",
    quizzes: [
      {
        q: "Quá trình diễn thế sinh thái diễn ra trên một hòn đảo mới hình thành do dung nham núi lửa vừa nguội lạnh được xếp vào loại diễn thế nào?",
        options: [
          "A. Diễn thế thứ sinh",
          "B. Diễn thế nguyên sinh",
          "C. Diễn thế thoái hóa",
          "D. Diễn thế chu kì mùa"
        ],
        answer: 1,
        explain: "Bắt đầu từ môi trường hoàn toàn trống trơn chưa hề có mầm mống sự sống hay chất đất hữu cơ (như tro nham núi lửa) là diễn thế nguyên sinh."
      },
      {
        q: "Quá trình diễn thế thứ sinh có đặc điểm khởi đầu nào sau đây?",
        options: [
          "A. Bắt đầu từ bãi đá trần hoàn toàn chưa có sinh vật",
          "B. Bắt đầu từ môi trường đã từng có quần xã sinh vật phát triển nhưng bị hủy hoại, đất đai vẫn còn tàn dư hữu cơ và hạt giống",
          "C. Luôn kết thúc bằng một sa mạc khô cằn",
          "D. Diễn ra nhanh gấp nghìn lần so với tiến hóa phân tử"
        ],
        answer: 1,
        explain: "Diễn thế thứ sinh khởi đầu trên nền tảng đất đã từng có sinh vật sinh sống trước đó (sau cháy rừng, sau chặt phá nương rẫy), đất vẫn còn hệ vi sinh vật và ngân hàng hạt giống ngủ."
      },
      {
        q: "Nguyên nhân bên trong sâu xa thúc đẩy quá trình diễn thế sinh thái diễn ra liên tục là gì?",
        options: [
          "A. Hoạt động khai thác than đá của con người",
          "B. Sự cạnh tranh giữa các loài và hoạt động sống của chính quần xã làm biến đổi môi trường sống",
          "C. Sự quay quanh trục của Trái Đất",
          "D. Sự trôi dạt của các mảng kiến tạo"
        ],
        answer: 1,
        explain: "Sinh vật sống biến đổi môi trường của chính nó (như cây rụng lá tạo mùn, che bóng râm), tạo điều kiện cho các loài ưa bóng khác xâm nhập cạnh tranh và thay thế loài tiên phong."
      }
    ]
  },

  31: {
    num: 31,
    chapter: 7,
    isPractical: false,
    title: "Sinh quyển, khu sinh học và chu trình sinh–địa–hóa",
    subtitle: "Cấu trúc sinh quyển, các khu sinh học (Biomes) trên cạn, dưới nước và cân bằng sinh thái toàn cầu",
    objectives: "Nêu giới hạn của sinh quyển; phân loại các khu sinh học (Biomes) trên cạn từ cực đến xích đạo và các khu sinh học dưới nước; giải thích tác động của con người tới chu trình sinh địa hóa toàn cầu.",
    sections: [
      {
        title: "1. Sinh quyển (Biosphere)",
        badge: "Giới hạn sự sống",
        points: [
          "**Khái niệm:** Sinh quyển là hệ sinh thái lớn nhất hành tinh, bao gồm toàn bộ các sinh vật sống cùng với các nhân tố vô sinh tương tác với chúng trên Trái Đất.",
          "**Giới hạn:** Chiều dày khoảng 20 km, gồm tầng đối lưu của khí quyển (cao đến 8–10 km), toàn bộ thủy quyển (sâu tới 11 km tại rãnh Mariana) và phần trên của thạch quyển (sâu vài mét tới vài km trong đất đá)."
        ]
      },
      {
        title: "2. Các Khu sinh học (Biomes) trên Trái Đất",
        badge: "Biomes trên cạn & Dưới nước",
        points: [
          "**Các khu sinh học trên cạn (Phân bố theo vĩ độ và nhiệt độ, lượng mưa):**",
          "• **Đồng rêu hàn đới (Đài nguyên - Tundra):** Cực Bắc lạnh giá, tầng đất mặt bị đóng băng vĩnh cửu, thực vật chủ yếu là rêu, địa y.",
          "• **Rừng lá kim phương Bắc (Taiga):** Khí hậu lạnh, thực vật chủ yếu là cây lá kim (thông, tùng, linh sam).",
          "• **Rừng rụng lá ôn đới:** Khí hậu ôn hòa 4 mùa rõ rệt, cây rụng lá vào mùa thu (sồi, dẻ).",
          "• **Thảo nguyên (Steppe / Prairie):** Lượng mưa trung bình, ưu thế cỏ thấp, động vật móng guốc chạy nhanh.",
          "• **Rừng mưa nhiệt đới:** Quanh xích đạo nhiệt độ cao, mưa nhiều quanh năm, độ đa dạng sinh học cao nhất hành tinh.",
          "• **Hoang mạc và sa mạc:** Khô hạn cùng cực, lượng mưa $<250\text{ mm/năm}$, thực vật mọng nước (xương rồng).",
          "**Các khu sinh học dưới nước:** Khu sinh học nước ngọt (nước đứng: hồ, ao; nước chảy: sông, suối); Khu sinh học nước mặn (vùng ven bờ, rạn san hô nhiệt đới, vùng khơi đại dương)."
        ]
      },
      {
        title: "3. Tác động của con người tới chu trình toàn cầu",
        badge: "Biến đổi khí hậu & Ô nhiễm",
        points: [
          "Đốt cháy ồ ạt nhiên liệu hóa thạch và phá rừng thải ra hàng chục tỉ tấn $CO_2$ mỗi năm, gây **hiệu ứng nhà kính** làm biến đổi khí hậu toàn cầu, băng tan và nước biển dâng; lạm dụng phân bón hóa học gây phú dưỡng nguồn nước ngọt và hủy hoại đất trồng."
        ]
      }
    ],
    summaryDiagram: "Sinh quyển = Khí quyển + Thủy quyển + Thạch quyển. Biomes: Đài nguyên $\to$ Rừng Taiga $\to$ Rừng ôn đới $\to$ Thảo nguyên $\to$ Rừng mưa nhiệt đới $\to$ Sa mạc.",
    quizzes: [
      {
        q: "Khu sinh học (Biome) nào sau đây trên cạn có mức độ đa dạng sinh học phong phú nhất và sinh khối sinh vật cao nhất trên Trái Đất?",
        options: [
          "A. Đài nguyên phương Bắc (Tundra)",
          "B. Rừng mưa nhiệt đới",
          "C. Hoang mạc Sahara",
          "D. Rừng lá kim Taiga"
        ],
        answer: 1,
        explain: "Rừng mưa nhiệt đới nằm gần xích đạo với nền nhiệt độ cao ổn định và lượng mưa dồi dào quanh năm, cung cấp điều kiện tối ưu cho hàng triệu loài sinh vật phát triển."
      },
      {
        q: "Khu sinh học nào có đặc điểm thảm thực vật chủ yếu là rêu, địa y và tầng đất mặt bị đóng băng vĩnh cửu quanh năm?",
        options: [
          "A. Rừng lá kim (Taiga)",
          "B. Đài nguyên (Đồng rêu hàn đới)",
          "C. Thảo nguyên ôn đới",
          "D. Rừng rụng lá ôn đới"
        ],
        answer: 1,
        explain: "Đài nguyên (Tundra) nằm ở vùng cực Bắc có mùa đông băng giá khắc nghiệt kéo dài, đất đóng băng sâu nên chỉ rêu và địa y mới sống được."
      },
      {
        q: "Hoạt động nào của con người là nguyên nhân trực tiếp lớn nhất gây gia tăng nồng độ khí $CO_2$ trong khí quyển làm biến đổi khí hậu toàn cầu?",
        options: [
          "A. Đốt cháy than đá, dầu mỏ và phá rừng tự nhiên quy mô lớn",
          "B. Nuôi trồng thủy sản nước ngọt",
          "C. Trồng cây xanh trên đồi trọc",
          "D. Sử dụng xe đạp thay cho xe máy"
        ],
        answer: 0,
        explain: "Đốt cháy nhiên liệu hóa thạch (than, dầu, khí) giải phóng lượng carbon bị chôn vùi hàng triệu năm vào khí quyển, kết hợp nạn phá rừng làm giảm khả năng hấp thu $CO_2$."
      }
    ]
  },

  32: {
    num: 32,
    chapter: 7,
    isPractical: true,
    title: "Thực hành: Thiết kế một hệ sinh thái nhân tạo",
    subtitle: "Thiết kế, lắp đặt và theo dõi sự cân bằng sinh thái của một bể thủy sinh / terrarium kín",
    objectives: "Vận dụng kiến thức về chu trình vật chất và dòng năng lượng để thiết kế mô hình hệ sinh thái thu nhỏ (bể thủy sinh hoặc terrarium kín); theo dõi các chỉ số sinh thái và điều chỉnh cân bằng.",
    sections: [
      {
        title: "1. Nguyên lí thiết kế hệ sinh thái thu nhỏ",
        badge: "Thành phần cân đối",
        points: [
          "**Bình chứa và Nguồn năng lượng:** Bình thủy tinh trong suốt cho phép ánh sáng mặt trời hoặc đèn led chiếu qua để sinh vật sản xuất quang hợp.",
          "**Lớp nền (Substrate):** Đất dinh dưỡng, sỏi lọc, than hoạt tính (hút độc tố và nấm mốc).",
          "**Sinh vật sản xuất:** Cây thủy sinh dễ sống (rong đuôi chó, rêu javan, trầu bà, rêu cạn).",
          "**Sinh vật tiêu thụ:** Ốc cảnh, tép thủy sinh ăn rêu cặn, cá bảy màu nhỏ.",
          "**Sinh vật phân giải:** Vi sinh vật hiếu khí và kị khí trong lớp sỏi nền phân hủy chất thải cá tép thành khoáng chất cho rêu cây hấp thụ lại."
        ]
      },
      {
        title: "2. Lắp đặt và Theo dõi cân bằng sinh thái",
        badge: "Các bước lắp ráp & Chỉ số",
        points: [
          "**Bước 1:** Rải lớp sỏi lót đáy $\to$ rải than hoạt tính $\to$ phủ đất dinh dưỡng.",
          "**Bước 2:** Trồng cây xanh cố định rễ $\to$ cho nước sạch từ từ vào bình.",
          "**Bước 3:** Đậy kín nắp (với terrarium) hoặc lắp lọc nhỏ (với bể thủy sinh).",
          "**Theo dõi 2–4 tuần:** Ghi chép độ trong của nước, màu sắc lá cây, khả năng bơi lội của cá tép. Nếu nước đục có mùi tanh: dấu hiệu cá quá đông gây thừa thức ăn phân hủy $\to$ cần giảm lượng cá hoặc thay bớt nước."
        ]
      }
    ],
    summaryDiagram: "Ánh sáng $\to$ Cây thủy sinh ($O_2$, chất hữu cơ) $\leftrightarrow$ Cá, tép ($CO_2$, chất thải) $\leftrightarrow$ Vi sinh vật nền (khoáng hóa) $\to$ Vòng tuần hoàn kín.",
    quizzes: [
      {
        q: "Trong mô hình bể thủy sinh mini tự cân bằng, vai trò chính của lớp than hoạt tính đặt dưới đáy nền là gì?",
        options: [
          "A. Cung cấp năng lượng ánh sáng cho cây quang hợp",
          "B. Hấp phụ các chất độc hại, khí hôi và ngăn ngừa nấm mốc phát triển",
          "C. Tiêu diệt toàn bộ vi khuẩn có lợi trong bể",
          "D. Làm tăng độ chua của nước lên mức tối đa"
        ],
        answer: 1,
        explain: "Than hoạt tính có diện tích bề mặt xốp khổng lồ, hấp phụ các phân tử mùi, độc tố hữu cơ và giữ cho môi trường nước/đất trong sạch."
      },
      {
        q: "Hiện tượng nào sau đây cho thấy hệ sinh thái terrarium kín đang gặp tình trạng mất cân bằng sinh thái?",
        options: [
          "A. Thành bình có hơi nước ngưng tụ vào buổi sáng và bốc hơi khô vào trưa",
          "B. Cây cối xanh tốt mọc thêm chồi non mới",
          "C. Xuất hiện nấm mốc trắng lan rộng, lá cây bị rữa thối và có mùi hôi hám",
          "D. Đất ẩm đều đặn"
        ],
        answer: 2,
        explain: "Cây bị úng thối, mốc trắng bùng phát và có mùi hôi chứng tỏ hệ thống bị ứ đọng độ ẩm quá mức, thiếu oxy và mất cân bằng sinh thái nghiêm trọng."
      },
      {
        q: "Tại sao một hệ sinh thái nhân tạo thu nhỏ (như terrarium kín) vẫn bắt buộc phải nhận được ánh sáng từ bên ngoài môi trường chiếu vào?",
        options: [
          "A. Vì năng lượng không thể tự tuần hoàn mà phải liên tục được cung cấp từ bên ngoài để thực vật quang hợp",
          "B. Vì các vi khuẩn phân giải cần ánh sáng để nhân đôi",
          "C. Để làm nóng nước tới nhiệt độ sôi",
          "D. Vì đất sẽ bị biến mất nếu không có ánh sáng"
        ],
        answer: 0,
        explain: "Năng lượng sinh học truyền một chiều và tiêu hao dần thành nhiệt. Muốn hệ duy trì, cây xanh bắt buộc phải liên tục nhận năng lượng ánh sáng bên ngoài để quang hợp nạp năng lượng mới."
      }
    ]
  },

  // ===================== CHƯƠNG 8. PHỤC HỒI & BẢO TỒN =====================
  33: {
    num: 33,
    chapter: 8,
    isPractical: false,
    title: "Sinh thái học phục hồi và bảo tồn đa dạng sinh vật",
    subtitle: "3 cấp độ đa dạng sinh học, nguyên nhân suy thoái, bảo tồn tại chỗ (In-situ) và chuyển chỗ (Ex-situ)",
    objectives: "Nêu 3 cấp độ đa dạng sinh học; phân tích nguyên nhân làm suy giảm đa dạng sinh học; phân biệt bảo tồn tại chỗ (in-situ) và chuyển chỗ (ex-situ); nắm các nguyên lí phục hồi hệ sinh thái suy thoái.",
    sections: [
      {
        title: "1. Ba cấp độ của Đa dạng sinh học",
        badge: "Gene, Loài & Hệ sinh thái",
        points: [
          "• **Đa dạng di truyền (đa dạng gene):** Sự phong phú về số lượng và tổ hợp các allele trong vốn gene của loài.",
          "• **Đa dạng loài:** Số lượng loài và số cá thể của mỗi loài trong quần xã.",
          "• **Đa dạng hệ sinh thái:** Sự phong phú của các kiểu hệ sinh thái tự nhiên và nhân tạo trên Trái Đất."
        ]
      },
      {
        title: "2. Nguyên nhân suy giảm và Chiến lược bảo tồn",
        badge: "In-situ vs Ex-situ",
        points: [
          "**Nguyên nhân đe dọa đa dạng sinh học:** Mất và phân mảnh sinh cảnh sống (phá rừng, đô thị hóa); Khai thác cạn kiệt quá mức (săn bắt trái phép, đánh cá tận diệt bằng xung điện); Ô nhiễm môi trường và biến đổi khí hậu; Sự xâm lấn của các sinh vật ngoại lai (ốc bươu vàng, rùa tai đỏ, cây mai dương).",
          "**Hai chiến lược bảo tồn:**",
          "• **Bảo tồn tại chỗ (In-situ conservation):** Bảo vệ các loài trong chính sinh cảnh tự nhiên của chúng (Thành lập các Vườn quốc gia như Cúc Phương, Cát Tiên, Phong Nha - Kẻ Bàng; Khu dự trữ sinh quyển; Khu bảo tồn thiên nhiên biển). Đây là biện pháp bảo tồn hiệu quả và bền vững nhất.",
          "• **Bảo tồn chuyển chỗ (Ex-situ conservation):** Đưa sinh vật ra khỏi sinh cảnh tự nhiên đang bị đe dọa để nuôi dưỡng, bảo tồn tại vườn thực vật, thảo cầm viên, trung tâm cứu hộ động vật hoang dã, ngân hàng hạt giống đông lạnh, ngân hàng gene tinh trùng - phôi."
        ]
      },
      {
        title: "3. Sinh thái học phục hồi",
        badge: "Tái tạo cân bằng sinh thái",
        points: [
          "Khoa học nghiên cứu khôi phục các hệ sinh thái đã bị thoái hóa, hư hỏng hoặc phá hủy hoàn toàn. Các biện pháp: Trồng rừng ngập mặn chắn sóng; Phủ xanh đồi trọc bằng các loài cây bản địa tiên phong cải tạo đất; Xử lí ô nhiễm sinh học (dùng vi sinh vật và thực vật hấp phụ kim loại nặng)."
        ]
      }
    ],
    summaryDiagram: "Đa dạng: Gene, Loài, Hệ sinh thái. Bảo tồn Tại chỗ (In-situ: Vườn quốc gia) vs Chuyển chỗ (Ex-situ: Ngân hàng gene, Vườn thú). Phục hồi: Trồng rừng bản địa, xử lí ô nhiễm.",
    quizzes: [
      {
        q: "Việc xây dựng Vườn quốc gia Cúc Phương và Khu dự trữ sinh quyển Cần Giờ thuộc hình thức bảo tồn nào sau đây?",
        options: [
          "A. Bảo tồn chuyển chỗ (Ex-situ)",
          "B. Bảo tồn tại chỗ (In-situ)",
          "C. Bảo tồn qua ngân hàng gene lạnh",
          "D. Đa bội hóa nhân tạo"
        ],
        answer: 1,
        explain: "Bảo tồn tại chỗ (In-situ) là bảo vệ các loài sinh vật trực tiếp ngay trong môi trường sống tự nhiên vốn có của chúng."
      },
      {
        q: "Ví dụ nào sau đây là hình thức bảo tồn chuyển chỗ (Ex-situ)?",
        options: [
          "A. Xây dựng khu bảo tồn rùa biển Côn Đảo",
          "B. Lưu trữ các mẫu hạt giống lúa quý hiếm trong ngân hàng gene lạnh âm sâu",
          "C. Thành lập Vườn quốc gia Phong Nha - Kẻ Bàng",
          "D. Cấm săn bắt voi rừng ở Đắk Lắk"
        ],
        answer: 1,
        explain: "Đưa mẫu vật di truyền ra khỏi tự nhiên để cất giữ trong các cơ sở nghiên cứu nhân tạo (ngân hàng hạt giống, thảo cầm viên) là bảo tồn chuyển chỗ."
      },
      {
        q: "Loài sinh vật nào sau đây là ví dụ điển hình về loài ngoại lai xâm hại gây tàn phá nghiêm trọng mùa màng nông nghiệp tại Việt Nam?",
        options: [
          "A. Cá chép sông Hồng",
          "B. Ốc bươu vàng",
          "C. Cây lúa nước ST25",
          "D. Ong mật nội địa"
        ],
        answer: 1,
        explain: "Ốc bươu vàng nhập khẩu từ Nam Mỹ nhanh chóng thoát ra tự nhiên, ăn phá chồi lúa non hàng loạt, trở thành sinh vật ngoại lai xâm hại nguy hiểm."
      }
    ]
  },

  34: {
    num: 34,
    chapter: 8,
    isPractical: false,
    title: "Phát triển bền vững",
    subtitle: "3 trụ cột của phát triển bền vững, kinh tế tuần hoàn, năng lượng xanh và đánh giá tác động môi trường",
    objectives: "Nêu khái niệm phát triển bền vững; phân tích mối quan hệ hữu cơ giữa 3 trụ cột (kinh tế, xã hội, môi trường); giải thích mô hình kinh tế tuần hoàn và sử dụng năng lượng tái tạo.",
    sections: [
      {
        title: "1. Khái niệm và 3 trụ cột của Phát triển bền vững",
        badge: "Kinh tế - Xã hội - Môi trường",
        points: [
          "**Định nghĩa chuẩn (Ủy ban Brundtland):** Phát triển bền vững là sự phát triển nhằm đáp ứng những nhu cầu của thế hệ hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu đó của các thế hệ tương lai.",
          "**3 Trụ cột gắn kết chặt chẽ:**",
          "• **Bền vững kinh tế:** Tăng trưởng kinh tế ổn định, hiệu quả, tiết kiệm tài nguyên thiên nhiên.",
          "• **Bền vững xã hội:** Đảm bảo công bằng xã hội, xóa đói giảm nghèo, chăm sóc sức khỏe, bình đẳng giáo dục và việc làm.",
          "• **Bền vững môi trường:** Bảo vệ và tái tạo tài nguyên, ngăn chặn ô nhiễm, bảo tồn đa dạng sinh học và đối phó biến đổi khí hậu."
        ]
      },
      {
        title: "2. Kinh tế tuần hoàn và Năng lượng tái tạo",
        badge: "Zero Waste & Năng lượng xanh",
        points: [
          "• **Kinh tế tuần hoàn (Circular Economy):** Thay thế mô hình kinh tế tuyến tính truyền thống ('Khai thác $\to$ Sản xuất $\to$ Tiêu dùng $\to$ Thải bỏ'). Mô hình tuần hoàn hướng tới thiết kế sản phẩm có thể tái sử dụng, tái chế tối đa, biến chất thải của quy trình này thành nguyên liệu đầu vào của quy trình khác, hướng tới mục tiêu không rác thải (Zero Waste).",
          "• **Chuyển dịch năng lượng xanh:** Thay thế nhiên liệu hóa thạch gây ô nhiễm bằng các nguồn năng lượng tái tạo sạch vô tận: năng lượng mặt trời, năng lượng gió, thủy điện nhỏ, sinh khối và địa nhiệt."
        ]
      }
    ],
    summaryDiagram: "Phát triển bền vững = Cân bằng 3 trụ cột (Kinh tế + Xã hội + Môi trường). Chuyển dịch: Kinh tế tuyến tính $\to$ Kinh tế tuần hoàn (Tái chế rác) + Năng lượng tái tạo.",
    quizzes: [
      {
        q: "Theo định nghĩa của Liên Hợp Quốc, phát triển bền vững đòi hỏi phải dung hòa và phát triển đồng bộ ba trụ cột nào sau đây?",
        options: [
          "A. Kinh tế - Quân sự - Ngoại giao",
          "B. Kinh tế - Xã hội - Môi trường",
          "C. Nông nghiệp - Công nghiệp - Dịch vụ",
          "D. Đô thị - Nông thôn - Hải đảo"
        ],
        answer: 1,
        explain: "3 trụ cột cốt lõi của phát triển bền vững là Kinh tế vững mạnh, Xã hội công bằng văn minh và Môi trường sinh thái được bảo vệ an toàn."
      },
      {
        q: "Mô hình kinh tế nào sau đây hướng tới mục tiêu kéo dài vòng đời của sản phẩm, tận dụng chất thải của ngành này làm nguyên liệu đầu vào cho ngành khác nhằm giảm thiểu rác thải ra tự nhiên?",
        options: [
          "A. Kinh tế khai thác tận diệt",
          "B. Kinh tế tuần hoàn (Circular economy)",
          "C. Kinh tế tuyến tính truyền thống",
          "D. Kinh tế tiêu dùng dùng một lần"
        ],
        answer: 1,
        explain: "Kinh tế tuần hoàn tái sử dụng tài nguyên liên tục trong một vòng tuần hoàn khép kín, biến rác thải thành tài nguyên mới."
      },
      {
        q: "Nguồn năng lượng nào sau đây được coi là năng lượng tái tạo thân thiện với môi trường?",
        options: [
          "A. Năng lượng từ than đá",
          "B. Năng lượng dầu mỏ",
          "C. Năng lượng mặt trời và năng lượng gió",
          "D. Khí đốt tự nhiên hóa lỏng"
        ],
        answer: 2,
        explain: "Năng lượng gió và mặt trời là nguồn năng lượng tái tạo vô tận, trong quá trình vận hành phát điện không phát thải khí nhà kính $CO_2$."
      }
    ]
  },

  35: {
    num: 35,
    chapter: 8,
    isPractical: true,
    title: "Dự án: Tìm hiểu thực trạng bảo tồn hệ sinh thái tại địa phương và đề xuất giải pháp",
    subtitle: "Quy trình 5 bước khảo sát thực địa, phỏng vấn, đánh giá nguyên nhân suy thoái và lập kế hoạch hành động",
    objectives: "Nắm vững quy trình 5 bước triển khai dự án nghiên cứu môi trường; thực hiện điều tra thực địa an toàn và đạo đức; phân tích số liệu và đề xuất giải pháp bảo tồn hệ sinh thái địa phương có tính khả thi.",
    sections: [
      {
        title: "1. Quy trình 5 bước thực hiện dự án",
        badge: "Phương pháp dự án khoa học",
        points: [
          "• **Bước 1 - Xác định vấn đề và mục tiêu:** Chọn một hệ sinh thái cụ thể tại địa phương đang bị suy thoái (ví dụ: dòng sông chảy qua thị trấn bị ô nhiễm nước thải, đồi rừng bị khai thác quá mức, ao làng bị bèo tây phủ kín). Đặt tên dự án và phân công nhiệm vụ nhóm.",
          "• **Bước 2 - Lập kế hoạch thu thập dữ liệu:** Chuẩn bị bảng hỏi phỏng vấn người dân; phiếu khảo sát thực địa; thiết bị chụp ảnh, đo pH nước, đo nhiệt độ.",
          "• **Bước 3 - Tiến hành điều tra thực địa:** Quan sát hiện trạng sinh vật, nguồn xả thải; phỏng vấn người dân và cán bộ phụ trách môi trường xã/phường.",
          "• **Bước 4 - Xử lí dữ liệu và Đề xuất giải pháp:** Tổng hợp nguyên nhân chính; xây dựng giải pháp khả thi (tuyên truyền cộng đồng, nạo vét lòng sông, trồng cây bờ kè, phân loại rác tại nguồn).",
          "• **Bước 5 - Báo cáo và Đánh giá:** Trình bày báo cáo dưới dạng bài thuyết trình đa phương tiện, poster khoa học hoặc video ngắn; tiếp thu phản hồi phản biện."
        ]
      },
      {
        title: "2. Quy tắc an toàn và Đạo đức nghiên cứu",
        badge: "Đạo đức khoa học & An toàn",
        points: [
          "Tuyệt đối không tự ý lấy mẫu nước thải công nghiệp độc hại hay tiếp xúc trực tiếp chất thải nguy hại; tuân thủ quy tắc an toàn khi đi gần sông hồ vực sâu; tôn trọng quyền riêng tư khi phỏng vấn người dân (chỉ ghi hình khi được đồng ý); số liệu báo cáo phải trung thực khách quan, không ngụy tạo kết quả."
        ]
      }
    ],
    summaryDiagram: "Quy trình dự án: 1. Chọn vấn đề $\to$ 2. Lập kế hoạch $\to$ 3. Điều tra thực địa $\to$ 4. Đề xuất giải pháp $\to$ 5. Báo cáo & Đánh giá.",
    quizzes: [
      {
        q: "Bước đầu tiên và quan trọng nhất khi bắt đầu triển khai một dự án tìm hiểu thực trạng bảo tồn hệ sinh thái tại địa phương là gì?",
        options: [
          "A. Làm poster báo cáo kết quả ngay",
          "B. Xác định rõ đối tượng hệ sinh thái cần nghiên cứu và đặt ra mục tiêu, câu hỏi nghiên cứu cụ thể",
          "C. Thu tiền đóng góp của người dân địa phương",
          "D. Đăng tải thông tin lên mạng xã hội"
        ],
        answer: 1,
        explain: "Bước 1 luôn là xác định rõ vấn đề thực tiễn, chọn địa điểm nghiên cứu và đặt ra mục tiêu đo lường được để định hướng toàn bộ kế hoạch hành động."
      },
      {
        q: "Khi đi khảo sát thực địa gần khu vực sông hồ hoặc bãi rác để thu thập số liệu dự án, nguyên tắc an toàn nào sau đây là quan trọng nhất?",
        options: [
          "A. Luôn đi một mình để giữ bí mật số liệu",
          "B. Luôn đi theo nhóm, có trang bị găng tay bảo hộ, ủng cao su và không tiếp xúc trực tiếp bằng tay trần với nguồn nước ô nhiễm độc hại",
          "C. Nếm thử vị của nước sông để kiểm tra nồng độ muối",
          "D. Không cần thông báo lịch trình cho giáo viên hướng dẫn"
        ],
        answer: 1,
        explain: "An toàn phòng thí nghiệm và thực địa đòi hỏi làm việc theo nhóm, có bảo hộ đầy đủ và tuyệt đối không tiếp xúc da hay nếm nguồn nước bẩn ô nhiễm hóa chất."
      },
      {
        q: "Một giải pháp bảo tồn hệ sinh thái địa phương được đánh giá là xuất sắc khi đáp ứng tiêu chí cốt lõi nào?",
        options: [
          "A. Đòi hỏi kinh phí hàng nghìn tỉ đồng",
          "B. Có tính khả thi cao, huy động được sự tham gia của cộng đồng địa phương và có kế hoạch theo dõi đánh giá hiệu quả lâu dài",
          "C. Chỉ thực hiện một lần trong một ngày rồi dừng hẳn",
          "D. Di dời toàn bộ người dân đi nơi khác sống"
        ],
        answer: 1,
        explain: "Giải pháp môi trường tốt phải khả thi, phù hợp nguồn lực thực tế, gắn liền với nâng cao ý thức của cộng đồng tại chỗ và có lộ trình giám sát duy trì kết quả."
      }
    ]
  }
};

// BẢNG CÔNG THỨC VÀ SƠ ĐỒ TRỌNG TÂM
const formulaTable = [
  { topic: "Bổ sung DNA", formula: "A–T; G–C", note: "Hai mạch DNA ngược chiều nhau" },
  { topic: "Tổng hợp DNA/RNA", formula: "Mạch mới kéo dài theo chiều 5′→3′", note: "DNA polymerase cần mồi; nucleotide bổ sung với khuôn" },
  { topic: "Lai một gene (Mendel)", formula: "P: AA × aa → F₁: Aa → F₂: 1 AA : 2 Aa : 1 aa (3 trội : 1 lặn)", note: "Trội lặn hoàn toàn, phân li bình thường" },
  { topic: "Lai hai gene độc lập", formula: "AaBb × AaBb → F₂: 9 A-B- : 3 A-bb : 3 aaB- : 1 aabb", note: "Trội hoàn toàn, phân li độc lập, không tương tác làm đổi tỉ lệ" },
  { topic: "Tần số hoán vị gene (f)", formula: "f = (Số cá thể tái tổ hợp / Tổng số cá thể) × 100%", note: "f ≤ 50%; bản đồ gene ngắn: 1% hoán vị ≈ 1 cM" },
  { topic: "Cân bằng Hardy – Weinberg", formula: "p + q = 1 ; p² AA + 2pq Aa + q² aa = 1", note: "Quần thể cân bằng ngẫu phối, hai allele A/a" },
  { topic: "Mật độ quần thể", formula: "D = Số lượng cá thể / Diện tích (hoặc Thể tích)", note: "Cần nêu rõ đơn vị, thời điểm và phương pháp lấy mẫu" },
  { topic: "Bắt – Đánh dấu – Bắt lại", formula: "N ≈ (M × n) / R", note: "M: đánh dấu lần 1; n: tổng bắt lần 2; R: có dấu gặp lại lần 2" },
  { topic: "Hiệu suất sinh thái", formula: "Eff = (Năng lượng bậc n+1 / Năng lượng bậc n) × 100%", note: "Năng lượng tiêu hao ~90% qua các bậc dinh dưỡng" },
  { topic: "Năng suất sơ cấp tinh (NPP)", formula: "NPP = GPP − R", note: "GPP: năng suất sơ cấp thô; R: năng lượng hô hấp của thực vật" },
  { topic: "Dòng thông tin di truyền trung tâm", formula: "DNA —(phiên mã)→ RNA —(dịch mã)→ Protein → Tính trạng", note: "Một số virus có enzyme phiên mã ngược tổng hợp DNA từ RNA" }
];

// SƠ ĐỒ TỔNG KẾT MÔN HỌC (3 TRỤ CỘT)
const subjectSummaryCards = [
  {
    title: "Trụ cột 1: DI TRUYỀN HỌC (Genetics)",
    icon: "fa-dna",
    color: "emerald",
    summary: "DNA → Gene → RNA/Protein → Tính trạng; gene nằm trên NST trong nhân hoặc bào quan ngoài nhân (ti thể, lục lạp); allele truyền qua giao tử theo quy luật phân li, phân li độc lập hoặc liên kết hoán vị; tạo biến dị tổ hợp phong phú; trong quần thể vốn gene biến đổi tần số allele qua các thế hệ dưới tác động của các nhân tố tiến hóa."
  },
  {
    title: "Trụ cột 2: TIẾN HÓA HỌC (Evolution)",
    icon: "fa-tree",
    color: "indigo",
    summary: "Biến dị di truyền (đột biến, biến dị tổ hợp) + 5 nhân tố tiến hóa (đột biến, di nhập gene, chọn lọc tự nhiên, yếu tố ngẫu nhiên, giao phối không ngẫu nhiên) → Thay đổi vốn gene của quần thể (tiến hóa nhỏ) → Phân hóa và cách li sinh sản → Hình thành loài mới và các bậc phân loại trên loài (tiến hóa lớn); cây phát sinh chủng loại phản ánh lịch sử sự sống qua các đại địa chất."
  },
  {
    title: "Trụ cột 3: SINH THÁI HỌC (Ecology)",
    icon: "fa-earth-americas",
    color: "teal",
    summary: "Hệ thống phân cấp sống: Cá thể ↔ Quần thể ↔ Quần xã ↔ Hệ sinh thái ↔ Sinh quyển; vật chất tuần hoàn khép kín theo các chu trình sinh địa hóa; năng lượng đi một chiều và tiêu hao dần thành nhiệt; sinh thái học phục hồi và bảo tồn duy trì đa dạng sinh học, cân bằng môi trường và bảo đảm phát triển bền vững cho tương lai."
  }
];

// NGÂN HÀNG CÂU HỎI ĐẤU TRƯỜNG SINH HỌC 12 (TRẠNG NGUYÊN 20 CÂU 45 PHÚT)
const arenaBank = [
  {
    q: "Trong quá trình tự sao chép DNA, enzyme nào sau đây có nhiệm vụ nối các đoạn Okazaki lại với nhau thành mạch hoàn chỉnh?",
    options: ["A. DNA polymerase", "B. RNA primase", "C. DNA ligase", "D. Helicase"],
    ans: 2,
    explain: "DNA ligase xúc tác hình thành liên kết phosphodiester giữa các đoạn Okazaki."
  },
  {
    q: "Codon nào sau đây trên phân tử mRNA đóng vai trò là codon mở đầu quy định amino acid methionine ở sinh vật nhân thực?",
    options: ["A. UAA", "B. AUG", "C. UGA", "D. UAG"],
    ans: 1,
    explain: "AUG là codon mở đầu duy nhất trên mRNA."
  },
  {
    q: "Trong mô hình Operon Lac ở vi khuẩn E. coli, khi môi trường có lactose, chất nào sau đây liên kết với protein ức chế làm nó mất khả năng gắn vào operator?",
    options: ["A. Glucose", "B. Lactose (allolactose)", "C. RNA polymerase", "D. Galactose"],
    ans: 1,
    explain: "Lactose là chất cảm ứng gắn vào protein ức chế làm biến đổi cấu hình không gian của nó."
  },
  {
    q: "Dạng đột biến điểm nào sau đây KHÔNG làm thay đổi số lượng liên kết hydrogen của phân tử DNA?",
    options: ["A. Thay thế cặp A–T bằng cặp T–A", "B. Thay thế cặp A–T bằng cặp G–C", "C. Mất một cặp A–T", "D. Thêm một cặp G–C"],
    ans: 0,
    explain: "Thay thế A–T bằng T–A vẫn giữ nguyên 2 liên kết hydrogen giữa cặp base."
  },
  {
    q: "Trong kĩ thuật tạo DNA tái tổ hợp, thể truyền (vector) thường được sử dụng phổ biến nhất là gì?",
    options: ["A. Nhiễm sắc thể nhân", "B. Plasmid của vi khuẩn hoặc DNA thực khuẩn thể", "C. Màng sinh chất", "D. Lưới nội chất"],
    ans: 1,
    explain: "Plasmid là phân tử DNA vòng nhỏ ngoài nhân của vi khuẩn, dễ xâm nhập và nhân bản độc lập."
  },
  {
    q: "Bộ NST của người mắc hội chứng Turner có công thức số lượng là gì?",
    options: ["A. $44A + XXY$", "B. $44A + XO$", "C. $45A + XX$", "D. $44A + XXX$"],
    ans: 1,
    explain: "Hội chứng Turner là thể một ở cặp NST giới tính: $44A + XO$ (tổng số 45 chiếc)."
  },
  {
    q: "Theo quy luật phân li độc lập của Mendel, phép lai $AaBb \times AaBb$ cho tỉ lệ kiểu hình ở đời con là gì (biết các gene trội lặn hoàn toàn)?",
    options: ["A. 3 : 1", "B. 9 : 3 : 3 : 1", "C. 1 : 2 : 1", "D. 9 : 7"],
    ans: 1,
    explain: "Lai hai cặp tính trạng độc lập phân li cho tỉ lệ $(3:1)(3:1) = 9:3:3:1$."
  },
  {
    q: "Hiện tượng di truyền chéo (ông ngoại truyền tính trạng cho cháu trai qua con gái dị hợp) là đặc trưng của gene nằm ở đâu?",
    options: ["A. Trên vùng không tương đồng của NST X", "B. Trên vùng không tương đồng của NST Y", "C. Trong ti thể", "D. Trên NST thường"],
    ans: 0,
    explain: "Gene lặn trên vùng không tương đồng của X di truyền chéo từ bố sang con gái rồi sang cháu trai."
  },
  {
    q: "Tần số hoán vị gene ($f$) tối đa trong tự nhiên không vượt quá bao nhiêu phần trăm?",
    options: ["A. 100%", "B. 25%", "C. 50%", "D. 75%"],
    ans: 2,
    explain: "Tần số hoán vị gene $f \le 50\%$ do trao đổi chéo chỉ xảy ra giữa 2 trong 4 chromatid của cặp tương đồng."
  },
  {
    q: "Thành phần cấu trúc gồm 8 phân tử protein histone được quấn quanh bởi $1\frac{3}{4}$ vòng xoắn DNA trong nhân tế bào nhân thực được gọi là gì?",
    options: ["A. Centromere", "B. Nucleosome", "C. Chromatid", "D. Telomere"],
    ans: 1,
    explain: "Nucleosome là đơn vị cơ bản cấu tạo nên chất nhiễm sắc."
  },
  {
    q: "Đặc điểm nào sau đây chứng minh tính trạng do gene trong tế bào chất (ngoài nhân) quy định?",
    options: ["A. Lai thuận nghịch cho kết quả giống nhau", "B. Con luôn mang kiểu hình giống cơ thể mẹ trong mọi phép lai", "C. Tính trạng chỉ biểu hiện ở con đực", "D. Tỉ lệ đời con luôn là 3:1"],
    ans: 1,
    explain: "Di truyền tế bào chất là di truyền theo dòng mẹ, đời con luôn biểu hiện kiểu hình của mẹ."
  },
  {
    q: "Một quần thể cân bằng di truyền có tần số allele $A = 0,7$ và $a = 0,3$. Tỉ lệ cá thể dị hợp tử $Aa$ trong quần thể là bao nhiêu?",
    options: ["A. 0,49", "B. 0,09", "C. 0,42", "D. 0,21"],
    ans: 2,
    explain: "Tỉ lệ kiểu gene dị hợp tử $2pq = 2 \times 0,7 \times 0,3 = 0,42$ (42%)."
  },
  {
    q: "Cánh dơi và vây ngực cá voi là ví dụ về cơ quan gì?",
    options: ["A. Cơ quan tương tự", "B. Cơ quan tương đồng", "C. Cơ quan thoái hóa", "D. Đột biến cấu trúc"],
    ans: 1,
    explain: "Cùng nguồn gốc từ chi trước của động vật có vú $\to$ Cơ quan tương đồng (tiến hóa phân li)."
  },
  {
    q: "Theo thuyết tiến hóa tổng hợp hiện đại, nhân tố tiến hóa duy nhất nào quy định chiều hướng và nhịp điệu của quá trình tiến hóa?",
    options: ["A. Đột biến gene", "B. Chọn lọc tự nhiên", "C. Các yếu tố ngẫu nhiên", "D. Di nhập gene"],
    ans: 1,
    explain: "Chọn lọc tự nhiên định hướng tiến hóa bằng cách giữ lại và nhân rộng kiểu hình thích nghi."
  },
  {
    q: "Sinh vật nào sau đây thuộc bậc dinh dưỡng cấp 1 ($T_1$) trong hệ sinh thái trên cạn?",
    options: ["A. Bò ăn cỏ", "B. Sư tử săn mồi", "C. Cây cỏ tự dưỡng quang hợp", "D. Giun đất phân giải"],
    ans: 2,
    explain: "Bậc dinh dưỡng cấp 1 ($T_1$) luôn là sinh vật sản xuất (thực vật, tảo tự dưỡng)."
  },
  {
    q: "Quá trình diễn thế sinh thái khởi đầu từ bãi cát mới bồi hoặc tro tàn núi lửa chưa hề có sinh vật được gọi là gì?",
    options: ["A. Diễn thế thứ sinh", "B. Diễn thế nguyên sinh", "C. Diễn thế nhân tạo", "D. Diễn thế thoái hóa"],
    ans: 1,
    explain: "Khởi đầu từ môi trường trống trơn chưa từng có sinh vật sống là diễn thế nguyên sinh."
  },
  {
    q: "Hiệu suất sinh thái trung bình chuyển giao năng lượng giữa các bậc dinh dưỡng kế tiếp nhau trong hệ sinh thái khoảng bao nhiêu?",
    options: ["A. 50%", "B. 10%", "C. 90%", "D. 1%"],
    ans: 1,
    explain: "Hiệu suất sinh thái trung bình xấp xỉ 10%, khoảng 90% còn lại bị tiêu hao do hô hấp và chất thải."
  },
  {
    q: "Việc bảo tồn loài gấu trúc trong trung tâm bảo tồn cứu hộ nhân giống nhân tạo thuộc chiến lược bảo tồn nào?",
    options: ["A. Bảo tồn tại chỗ (In-situ)", "B. Bảo tồn chuyển chỗ (Ex-situ)", "C. Đa dạng gene", "D. Sinh thái học quần xã"],
    ans: 1,
    explain: "Đưa sinh vật ra khỏi tự nhiên để chăm sóc trong các vườn thú, trung tâm nhân giống là bảo tồn chuyển chỗ."
  },
  {
    q: "Công thức nào sau đây thể hiện mối quan hệ giữa năng suất sơ cấp tinh (NPP) và năng suất sơ cấp thô (GPP)?",
    options: ["A. $NPP = GPP + R$", "B. $NPP = GPP - R$", "C. $NPP = GPP \times R$", "D. $NPP = R - GPP$"],
    ans: 1,
    explain: "Năng suất sơ cấp tinh là lượng chất hữu cơ tích lũy sau khi trừ đi hô hấp: $NPP = GPP - R$."
  },
  {
    q: "Mô hình kinh tế nào hướng tới việc tái sử dụng rác thải làm nguyên liệu đầu vào, giảm phát thải ô nhiễm và bảo vệ tài nguyên thiên nhiên?",
    options: ["A. Kinh tế tuyến tính", "B. Kinh tế tuần hoàn (Circular Economy)", "C. Kinh tế tiêu dùng một lần", "D. Kinh tế khai khoáng sâu"],
    ans: 1,
    explain: "Kinh tế tuần hoàn tái chế và tái sử dụng triệt để mọi nguyên liệu, hướng tới mục tiêu phát triển bền vững."
  }
];

module.exports = {
  lessonsP2,
  formulaTable,
  subjectSummaryCards,
  arenaBank
};
