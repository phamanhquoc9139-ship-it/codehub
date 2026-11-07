// scratch/hoahoc11_data_p2.js
// Chương 3 (Bài 10-14) và Chương 4 (Bài 15-18) - Hoá học 11 KNTT

module.exports = {
  10: {
    num: 10,
    chapter: 3,
    chapterTitle: "Chương 3. Đại cương hoá học hữu cơ",
    title: "Hợp chất hữu cơ và hoá học hữu cơ",
    badge: "Lí thuyết đại cương",
    summary: "Khái niệm hợp chất hữu cơ, đặc điểm chung về liên kết và tính chất, phân loại hydrocarbon và dẫn xuất, nhóm chức và phương pháp phổ hồng ngoại (IR) nhận biết nhóm chức.",
    objectives: [
      "Nắm vững định nghĩa hợp chất hữu cơ và phân biệt với các hợp chất vô cơ của carbon (CO, CO2, muối carbonate, cyanide, carbide).",
      "Nêu đặc điểm chung về thành phần, liên kết hoá học, tính chất vật lí và tính chất hoá học của hợp chất hữu cơ.",
      "Phân loại hợp chất hữu cơ thành hydrocarbon và dẫn xuất của hydrocarbon.",
      "Xác định nhóm chức quyết định tính chất hoá học đặc trưng và sử dụng số sóng hấp thụ đặc trưng trên phổ hồng ngoại (IR) để nhận diện nhóm chức."
    ],
    sections: [
      {
        heading: "1. Khái niệm & Đặc điểm chung của Hợp chất hữu cơ",
        type: "list",
        items: [
          {
            title: "Khái niệm Hợp chất hữu cơ",
            desc: "Hợp chất hữu cơ là hợp chất của carbon (trừ một số hợp chất đơn giản như oxide của carbon: CO, CO2; muối carbonate: Na2CO3, CaCO3; cyanide: NaCN; carbide: CaC2, Al4C3...). Hoá học hữu cơ là ngành hoá học nghiên cứu về cấu trúc, tính chất, phương pháp điều chế và ứng dụng của các hợp chất hữu cơ."
          },
          {
            title: "Đặc điểm cấu tạo & Liên kết",
            desc: "• Nguyên tố: Luôn chứa carbon, thường có hydrogen, hay gặp oxygen, nitrogen, halogen, sulfur, phosphorus.\n• Liên kết hoá học: Chủ yếu là liên kết cộng hoá trị (liên kết cộng hoá trị phân cực và không phân cực).\n• Mạch carbon: Các nguyên tử carbon có khả năng liên kết trực tiếp với nhau tạo thành các dạng mạch: mạch hở không phân nhánh, mạch hở phân nhánh và mạch vòng."
          },
          {
            title: "Tính chất vật lí & Hoá học chung",
            desc: "• Tính chất vật lí: Đa số có nhiệt độ nóng chảy và nhiệt độ sôi thấp (dễ bay hơi), phần lớn không tan hoặc ít tan trong nước nhưng tan tốt trong các dung môi hữu cơ (xăng, ether, chloroform, benzene).\n• Tính chất hoá học: Đa số các hợp chất hữu cơ dễ cháy, kém bền với nhiệt. Phản ứng hoá học của hợp chất hữu cơ thường diễn ra chậm, không hoàn toàn, cần đun nóng hoặc có chất xúc tác và thường sinh ra hỗn hợp nhiều sản phẩm phụ phức tạp."
          }
        ]
      },
      {
        heading: "2. Phân loại & Nhóm chức trong Hoá học hữu cơ",
        type: "grid",
        items: [
          {
            badge: "Phân loại cơ bản",
            title: "Hydrocarbon & Dẫn xuất",
            points: [
              "Hydrocarbon: Phân tử chỉ được cấu tạo từ hai nguyên tố là Carbon và Hydrogen (gồm hydrocarbon no: alkane; không no: alkene, alkyne; thơm: arene).",
              "Dẫn xuất của hydrocarbon: Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng các nguyên tử hoặc nhóm nguyên tử khác (chứa O, N, halogen...).",
              "Các loại dẫn xuất phổ biến: Dẫn xuất halogen (R-X), alcohol (R-OH), phenol (Ar-OH), ether (R-O-R'), aldehyde (R-CHO), ketone (R-CO-R'), carboxylic acid (R-COOH), ester (R-COO-R'), amine (R-NH2)."
            ]
          },
          {
            badge: "Nhóm chức",
            title: "Khái niệm & Vai trò",
            points: [
              "Nhóm chức là nguyên tử hoặc nhóm nguyên tử xuất hiện trong phân tử quyết định các tính chất hoá học đặc trưng nhất của hợp chất hữu cơ đó.",
              "Nhóm hydroxyl: -OH (đặc trưng cho alcohol và phenol).",
              "Nhóm carbonyl: >C=O (đặc trưng cho aldehyde -CHO và ketone >C=O).",
              "Nhóm carboxyl: -COOH (đặc trưng cho carboxylic acid).",
              "Nhóm ester: -COO- (đặc trưng cho ester)."
            ]
          }
        ]
      },
      {
        heading: "3. Phương pháp Phổ hồng ngoại (Infrared Spectroscopy - IR)",
        type: "list",
        items: [
          {
            title: "Nguyên lí phổ hồng ngoại",
            desc: "Khi chiếu chùm tia hồng ngoại qua mẫu chất hữu cơ, các liên kết cộng hoá trị trong phân tử hấp thụ năng lượng bức xạ hồng ngoại đặc trưng để thực hiện các dao động (dao động co dãn, dao động uốn). Phổ hồng ngoại biểu diễn độ truyền qua (%) theo số sóng (cm^-1), giúp nhận diện nhanh chóng các nhóm chức có mặt trong phân tử."
          },
          {
            title: "Bảng số sóng hấp thụ đặc trưng của các nhóm chức (cm^-1)",
            desc: "• Liên kết O-H (alcohol, phenol): Dải hấp thụ rộng (broad) ở vùng 3500 - 3200 cm^-1.\n• Liên kết O-H (carboxylic acid): Dải hấp thụ rất rộng ở vùng 3300 - 2500 cm^-1.\n• Liên kết C=O (carbonyl trong aldehyde): Tín hiệu nhọn, mạnh ở vùng 1740 - 1685 cm^-1 (kèm 2 peak C-H aldehyde ở 2830 - 2695 cm^-1).\n• Liên kết C=O (carbonyl trong ketone): Tín hiệu mạnh ở vùng 1715 - 1666 cm^-1.\n• Liên kết C=O (trong carboxylic acid): Tín hiệu mạnh ở vùng 1760 - 1690 cm^-1.\n• Liên kết C=O (trong ester): Tín hiệu mạnh ở vùng 1750 - 1715 cm^-1.\n• Liên kết C=C (alkene): Tín hiệu ở vùng 1680 - 1600 cm^-1; C≡C (alkyne): Tín hiệu ở 2260 - 2100 cm^-1."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Chất nào sau đây là hợp chất hữu cơ?",
        options: [
          "CaCO3",
          "CH3COONa",
          "CO2",
          "NaCN"
        ],
        ans: 1,
        explain: "CH3COONa (sodium acetate) là muối hữu cơ chứa liên kết C-C và C-H. CaCO3, CO2, NaCN là các hợp chất vô cơ của carbon."
      },
      {
        q: "Hợp chất hữu cơ X có phổ hồng ngoại IR xuất hiện một dải hấp thụ rất rộng ở vùng 3350 cm^-1. Nhóm chức nào sau đây chắc chắn có trong phân tử X?",
        options: [
          "Nhóm carbonyl (>C=O)",
          "Nhóm halogen (-Cl)",
          "Nhóm hydroxyl (-OH)",
          "Nhóm ester (-COO-)"
        ],
        ans: 2,
        explain: "Dải hấp thụ mạnh và rộng ở vùng 3500 - 3200 cm^-1 là tín hiệu dao động co dãn đặc trưng của liên kết O-H (alcohol/phenol)."
      },
      {
        q: "Đặc điểm chung nào sau đây là ĐÚNG với đa số hợp chất hữu cơ?",
        options: [
          "Có nhiệt độ nóng chảy và nhiệt độ sôi rất cao.",
          "Tan rất tốt trong nước và không tan trong dung môi hữu cơ.",
          "Liên kết hoá học chủ yếu là liên kết ion bền vững.",
          "Dễ cháy, kém bền với nhiệt độ và phản ứng thường chậm, tạo hỗn hợp sản phẩm."
        ],
        ans: 3,
        explain: "Hợp chất hữu cơ chủ yếu có liên kết cộng hoá trị nên nhiệt độ sôi thấp, dễ cháy và phản ứng diễn ra chậm, tạo nhiều sản phẩm phụ."
      }
    ]
  },

  11: {
    num: 11,
    chapter: 3,
    chapterTitle: "Chương 3. Đại cương hoá học hữu cơ",
    title: "Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
    badge: "Thực nghiệm & Kĩ thuật",
    summary: "Nghiên cứu nguyên tắc, cơ sở phân tách, dụng cụ và ứng dụng thực tiễn của 7 phương pháp tách biệt tinh chế: chưng cất thường, chưng cất phân đoạn, lôi cuốn hơi nước, chiết lỏng-lỏng, chiết lỏng-rắn, kết tinh và sắc kí cột.",
    objectives: [
      "Trình bày nguyên tắc và trường hợp áp dụng của các phương pháp: chưng cất, chiết, kết tinh và sắc kí cột.",
      "Lựa chọn phương pháp tách biệt và tinh chế phù hợp dựa vào trạng thái, độ tan, nhiệt độ sôi và độ bền nhiệt của các chất.",
      "Mô tả quy trình thực hiện an toàn trên phễu chiết, bình chưng cất và hệ thống làm lạnh.",
      "Liên hệ các ứng dụng thực tế trong đời sống: nấu rượu truyền thống, chưng cất tinh dầu sả bưởi, ngâm rượu thuốc, tinh luyện đường."
    ],
    sections: [
      {
        heading: "1. Các phương pháp Chưng cất (Distillation)",
        type: "list",
        items: [
          {
            title: "Chưng cất thường (Simple Distillation)",
            desc: "• Cơ sở: Dựa trên sự khác nhau rõ rệt về nhiệt độ sôi của các chất lỏng trong hỗn hợp ở cùng áp suất (nhiệt độ sôi chênh lệch nhau từ 20-30°C trở lên), hoặc tách chất lỏng dễ bay hơi ra khỏi tạp chất không bay hơi.\n• Cơ chế: Đun sôi hỗn hợp, chất có nhiệt độ sôi thấp hơn sẽ chuyển thành hơi trước, hơi đi qua ống sinh hàn được làm lạnh ngưng tụ thành chất lỏng gọi là dịch chưng cất.\n• Ứng dụng: Chưng cất cồn ethanol từ dịch lên men tinh bột trong nấu rượu thủ công."
          },
          {
            title: "Chưng cất phân đoạn (Fractional Distillation)",
            desc: "• Cơ sở: Áp dụng khi hỗn hợp gồm hai hay nhiều chất lỏng hoà tan vào nhau có nhiệt độ sôi gần nhau (chênh lệch dưới 20°C).\n• Đặc điểm: Bình chưng cất được gắn thêm một cột phân đoạn có chứa các đĩa hoặc vật liệu nhồi nhằm tăng cường sự trao đổi nhiệt và tiếp xúc giữa pha hơi bốc lên và pha lỏng chảy xuống, giúp tách riêng từng phân đoạn một cách triệt để.\n• Ứng dụng: Chưng cất dầu mỏ thành các phân đoạn xăng, dầu hoả, diesel; tách methanol ra khỏi hỗn hợp với ethanol."
          },
          {
            title: "Chưng cất lôi cuốn hơi nước (Steam Distillation)",
            desc: "• Cơ sở: Áp dụng để tách các chất hữu cơ có nhiệt độ sôi cao, dễ bị nhiệt phân huỷ ở nhiệt độ sôi của nó, nhưng không tan trong nước và có thể bay hơi cùng với hơi nước.\n• Ứng dụng thực tế: Chưng cất tinh dầu thiên nhiên từ thảo mộc (tinh dầu sả, tinh dầu vỏ bưởi, quế, tràm, bạc hà)."
          }
        ]
      },
      {
        heading: "2. Các phương pháp Chiết & Kết tinh (Extraction & Crystallization)",
        type: "grid",
        items: [
          {
            badge: "Phương pháp Chiết",
            title: "Chiết lỏng - lỏng & Chiết lỏng - rắn",
            points: [
              "Chiết lỏng - lỏng: Dựa vào độ tan khác nhau của một chất trong hai dung môi không trộn lẫn vào nhau (thường là nước và dung môi hữu cơ như diethyl ether, hexane, dichloromethane).",
              "Dụng cụ: Phễu chiết quả lê. Lắc đều, định kì mở khoá xả áp suất, để yên cho 2 lớp chất lỏng phân tách hoàn toàn rồi mở khoá thu lớp dưới và tách lớp trên.",
              "Chiết lỏng - rắn: Dùng dung môi thích hợp hoà tan chọn lọc một chất hữu cơ ra khỏi hỗn hợp chất rắn.",
              "Ứng dụng: Ngâm rượu thuốc (nhân sâm, thảo dược), hãm trà, chiết màu thực phẩm tự nhiên từ quả dành dành, lá dứa."
            ]
          },
          {
            badge: "Phương pháp Kết tinh",
            title: "Tách chất rắn theo độ tan",
            points: [
              "Cơ sở: Dựa vào độ tan của chất rắn thay đổi rõ rệt theo nhiệt độ, hoặc khác biệt độ tan giữa chất cần lấy và tạp chất.",
              "Quy trình 4 bước: (1) Hoà tan chất rắn vào dung môi thích hợp ở nhiệt độ sôi để tạo dung dịch bão hoà nóng; (2) Lọc nóng qua phễu để loại bỏ tạp chất không tan; (3) Để nguội hoặc làm lạnh từ từ để chất tinh khiết kết tinh trở lại; (4) Lọc hút lấy tinh thể rắn, rửa bằng dung môi lạnh và sấy khô.",
              "Ứng dụng: Tinh luyện đường mía (saccharose), sản xuất muối tinh khiết, dược phẩm dạng viên nén."
            ]
          }
        ]
      },
      {
        heading: "3. Sắc kí cột (Column Chromatography)",
        type: "list",
        items: [
          {
            title: "Nguyên lí & Ứng dụng của sắc kí cột",
            desc: "• Cơ sở phân tách: Dựa trên sự phân bố khác nhau của các chất giữa hai pha: Pha tĩnh (chất rắn hấp phụ xốp nhồi trong cột, thường là silica gel SiO2 hoặc alumina Al2O3) và Pha động (dung môi hữu cơ lỏng rửa giải chảy qua cột).\n• Cơ chế: Các chất trong hỗn hợp có ái lực hấp phụ khác nhau với pha tĩnh. Chất nào bị hấp phụ yếu hơn sẽ di chuyển nhanh hơn theo dòng dung môi và đi ra khỏi cột trước; chất nào bị hấp phụ mạnh hơn sẽ di chuyển chậm và ra sau.\n• Ứng dụng: Tách riêng các hợp chất có cấu trúc rất giống nhau trong nghiên cứu tổng hợp hữu cơ, tách chiết hoạt chất sinh học, tinh chế chất màu thực vật (chlorophyll, carotenoid)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để thu hồi tinh dầu sả từ củ sả tươi trong phòng thí nghiệm, phương pháp tách biệt thích hợp nhất là:",
        options: [
          "Chưng cất phân đoạn",
          "Chưng cất lôi cuốn hơi nước",
          "Kết tinh phân đoạn",
          "Sắc kí cột"
        ],
        ans: 1,
        explain: "Tinh dầu thảo mộc có nhiệt độ sôi cao, dễ bị nhiệt phân huỷ nhưng không tan trong nước và bay hơi cùng hơi nước nên dùng phương pháp chưng cất lôi cuốn hơi nước."
      },
      {
        q: "Dụng cụ thuỷ tinh chuyên dụng dùng để thực hiện phương pháp chiết lỏng - lỏng trong phòng thí nghiệm là:",
        options: [
          "Bình cầu đáy tròn",
          "Phễu chiết quả lê",
          "Burette chia vạch",
          "Bình tam giác"
        ],
        ans: 1,
        explain: "Phễu chiết (quả lê) có khoá ở cuống dùng để phân tách hai pha chất lỏng không trộn lẫn vào nhau."
      },
      {
        q: "Phương pháp nào sau đây dựa trên sự khác nhau về độ tan của chất rắn trong dung môi ở các nhiệt độ khác nhau?",
        options: [
          "Chưng cất",
          "Chiết",
          "Kết tinh",
          "Sắc kí"
        ],
        ans: 2,
        explain: "Kết tinh là phương pháp hoà tan chất rắn ở nhiệt độ cao rồi làm lạnh để chất rắn kết tinh lại dựa trên độ tan giảm theo nhiệt độ."
      }
    ]
  },

  12: {
    num: 12,
    chapter: 3,
    chapterTitle: "Chương 3. Đại cương hoá học hữu cơ",
    title: "Công thức phân tử hợp chất hữu cơ",
    badge: "Tính toán & Phổ MS",
    summary: "Phân biệt công thức tổng quát, công thức đơn giản nhất (CTĐGN) và công thức phân tử (CTPT). Sử dụng phổ khối lượng (MS) để xác định phân tử khối và thiết lập CTPT từ thành phần phần trăm khối lượng.",
    objectives: [
      "Phân biệt ý nghĩa của công thức thực nghiệm (đơn giản nhất) và công thức phân tử.",
      "Đọc phổ khối lượng (MS), xác định ion phân tử [M]+ và giá trị phân tử khối m/z.",
      "Thiết lập công thức đơn giản nhất từ % khối lượng các nguyên tố.",
      "Xác định công thức phân tử của hợp chất hữu cơ dựa vào CTĐGN và phân tử khối."
    ],
    sections: [
      {
        heading: "1. Khái niệm các loại Công thức",
        type: "list",
        items: [
          {
            title: "Công thức tổng quát (CTTQ) & Công thức đơn giản nhất (CTĐGN)",
            desc: "• Công thức tổng quát: Cho biết thành phần định tính các nguyên tố cấu thành phân tử (ví dụ: CxHyOz).\n• Công thức đơn giản nhất (công thức thực nghiệm): Cho biết tỉ lệ số nguyên tử của các nguyên tố có trong phân tử bằng các số nguyên tối giản nhất (ví dụ: C2H5O)."
          },
          {
            title: "Công thức phân tử (CTPT)",
            desc: "• Công thức phân tử: Cho biết chính xác số lượng nguyên tử của mỗi nguyên tố có trong một phân tử hợp chất hữu cơ.\n• Mối quan hệ: CTPT = (CTĐGN)n, trong đó n là số nguyên dương (n >= 1).\n• Phân tử khối: M = n * M(CTĐGN) => Biết được M sẽ tính được n và xác định chính xác CTPT."
          }
        ]
      },
      {
        heading: "2. Xác định Phân tử khối bằng Phổ khối lượng (MS)",
        type: "grid",
        items: [
          {
            badge: "Nguyên lí Phổ MS",
            title: "Mass Spectrometry",
            points: [
              "Nguyên tắc: Mẫu chất bị bắn phá bởi chùm electron mang năng lượng cao tạo thành các mảnh ion, trong đó ion phân tử mang điện tích dương [M]+ sinh ra khi phân tử mất đi 1 electron: M + e -> [M]+ + 2e.",
              "Các ion được phân tách dựa trên tỉ số khối lượng trên điện tích (m/z). Do z thường bằng 1 nên giá trị m/z của ion phân tử [M]+ chính bằng phân tử khối (M) của chất.",
              "Đọc phổ: Peak ion phân tử [M]+ thường là peak có giá trị m/z lớn nhất xuất hiện trên phổ khối lượng của các hợp chất đơn giản."
            ]
          },
          {
            badge: "Ví dụ đọc phổ",
            title: "Xác định M từ phổ MS",
            points: [
              "Ví dụ 1: Phổ MS của acetone cho peak ion phân tử ở m/z = 58 => Phân tử khối M = 58 g/mol.",
              "Ví dụ 2: Phổ MS của acetic acid cho peak ion phân tử ở m/z = 60 => M = 60 g/mol.",
              "Ví dụ 3: Phổ MS của benzene cho peak có cường độ tương đối lớn nhất ở m/z = 78 => M = 78 g/mol."
            ]
          }
        ]
      },
      {
        heading: "3. Các bước thiết lập Công thức phân tử từ % nguyên tố",
        type: "list",
        items: [
          {
            title: "Quy trình thiết lập CTPT",
            desc: "Bước 1: Tính % khối lượng nguyên tố O (nếu có): %O = 100% - (%C + %H + %N...).\nBước 2: Tìm tỉ lệ mol các nguyên tố: nC : nH : nO = (%C / 12) : (%H / 1) : (%O / 16) = p : q : r.\nBước 3: Chia tỉ lệ cho số nhỏ nhất trong các giá trị để quy về tỉ số các số nguyên tối giản => Lập công thức đơn giản nhất (CpHqOr).\nBước 4: Sử dụng phân tử khối M xác định từ phổ MS để tìm hệ số n: n = M / M(CpHqOr) => Thiết lập CTPT."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Một hợp chất hữu cơ X có công thức đơn giản nhất là CH2O và có phân tử khối M = 60 g/mol xác định từ phổ MS. Công thức phân tử của X là:",
        options: [
          "CH2O",
          "C2H4O2",
          "C3H6O3",
          "C4H8O4"
        ],
        ans: 1,
        explain: "Khối lượng công thức đơn giản nhất M(CH2O) = 12 + 2 + 16 = 30 g/mol => Hệ số n = 60 / 30 = 2 => CTPT là (CH2O)2 = C2H4O2."
      },
      {
        q: "Trên phổ khối lượng (MS) của ethanol (C2H5OH), tín hiệu m/z của ion phân tử [M]+ xuất hiện ở giá trị nào?",
        options: [
          "29",
          "31",
          "45",
          "46"
        ],
        ans: 3,
        explain: "Phân tử khối của C2H5OH là M = 12*2 + 6*1 + 16 = 46 g/mol, do đó peak ion phân tử [M]+ có m/z = 46."
      },
      {
        q: "Đốt cháy hoàn toàn một hydrocarbon X thu được số mol CO2 bằng số mol H2O. Công thức đơn giản nhất của X là:",
        options: [
          "CH",
          "CH2",
          "CH3",
          "C2H5"
        ],
        ans: 1,
        explain: "n(CO2) = n(H2O) => nC : nH = n(CO2) : (2 * n(H2O)) = 1 : 2 => CTĐGN là CH2."
      }
    ]
  },

  13: {
    num: 13,
    chapter: 3,
    chapterTitle: "Chương 3. Đại cương hoá học hữu cơ",
    title: "Cấu tạo hoá học hợp chất hữu cơ",
    badge: "Lí thuyết & Cấu trúc",
    summary: "Thuyết cấu tạo hoá học Butlerov, công thức cấu tạo (đầy đủ, thu gọn, khung phân tử), đồng đẳng, đồng phân cấu tạo và đồng phân hình học cis - trans.",
    objectives: [
      "Trình bày 3 luận điểm cốt lõi của thuyết cấu tạo hoá học Butlerov.",
      "Biểu diễn công thức cấu tạo của hợp chất hữu cơ dưới các dạng: đầy đủ, thu gọn và công thức khung phân tử.",
      "Giải thích hiện tượng đồng đẳng và lập dãy đồng đẳng.",
      "Phân biệt các loại đồng phân: đồng phân cấu tạo (mạch C, vị trí nhóm chức, loại nhóm chức) và đồng phân hình học cis - trans."
    ],
    sections: [
      {
        heading: "1. Thuyết cấu tạo hoá học Butlerov (1861)",
        type: "list",
        items: [
          {
            title: "Luận điểm 1: Hoá trị & Trật tự liên kết",
            desc: "Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng hoá trị và theo một trật tự nhất định. Trật tự liên kết này được gọi là cấu tạo hoá học. Carbon luôn có hoá trị IV, oxygen hoá trị II, hydrogen và halogen hoá trị I, nitrogen hoá trị III. Sự thay đổi trật tự liên kết sẽ tạo ra chất mới có tính chất hoàn toàn khác biệt.\n• Ví dụ C2H6O: CH3-CH2-OH (ethanol, chất lỏng, tan vô hạn trong nước, phản ứng với Na) khác biệt hoàn toàn với CH3-O-CH3 (dimethyl ether, chất khí, ít tan, không phản ứng với Na)."
          },
          {
            title: "Luận điểm 2: Mạch Carbon",
            desc: "Các nguyên tử carbon không chỉ liên kết với nguyên tử của các nguyên tố khác mà còn có khả năng liên kết trực tiếp với nhau tạo thành các mạch carbon đa dạng: mạch hở không phân nhánh, mạch hở phân nhánh và mạch vòng."
          },
          {
            title: "Luận điểm 3: Sự ảnh hưởng qua lại giữa các nguyên tử",
            desc: "Tính chất của các chất phụ thuộc vào thành phần phân tử (bản chất các nguyên tố) và cấu tạo hoá học (trật tự liên kết). Đồng thời, các nguyên tử trong phân tử luôn có sự ảnh hưởng qua lại lẫn nhau.\n• Ví dụ: Nhóm -OH trong phenol gắn trực tiếp vào vòng benzene làm cho nguyên tử H của nhóm -OH linh động hơn hẳn so với trong alcohol (phenol tác dụng được với NaOH, alcohol thì không)."
          }
        ]
      },
      {
        heading: "2. Đồng đẳng & Đồng phân",
        type: "grid",
        items: [
          {
            badge: "Hiện tượng Đồng đẳng",
            title: "Cùng dãy đồng đẳng",
            points: [
              "Định nghĩa: Những hợp chất có thành phần phân tử hơn kém nhau một hay nhiều nhóm methylene (-CH2-) nhưng có cấu tạo hoá học tương tự nhau nên có tính chất hoá học tương tự nhau được gọi là các chất đồng đẳng của nhau, hợp thành một dãy đồng đẳng.",
              "Ví dụ: Dãy đồng đẳng alkane: CH4, C2H6, C3H8, C4H10...; dãy đồng đẳng alcohol no đơn chức: CH3OH, C2H5OH, C3H7OH..."
            ]
          },
          {
            badge: "Hiện tượng Đồng phân",
            title: "Cùng CTPT, khác cấu tạo",
            points: [
              "Định nghĩa: Những chất khác nhau nhưng có cùng công thức phân tử được gọi là các chất đồng phân của nhau.",
              "Đồng phân cấu tạo gồm: Đồng phân mạch carbon (mạch thẳng, nhánh); Đồng phân vị trí nhóm chức hoặc liên kết bội (but-1-ene và but-2-ene); Đồng phân nhóm chức (alcohol và ether; aldehyde và ketone; carboxylic acid và ester)."
            ]
          }
        ]
      },
      {
        heading: "3. Đồng phân hình học (Cis - Trans)",
        type: "list",
        items: [
          {
            title: "Điều kiện xuất hiện đồng phân hình học",
            desc: "Đồng phân cis - trans xảy ra khi phân tử có cấu trúc liên kết đôi C=C (do liên kết đôi ngăn cản sự quay tự do quanh trục liên kết) và mỗi nguyên tử carbon của liên kết đôi phải liên kết với hai nguyên tử hoặc nhóm nguyên tử khác nhau: abC=Ccd (với a ≠ b và c ≠ d).\n• Dạng cis: Hai nhóm thế có độ ưu tiên lớn hơn hoặc hai nhóm giống nhau nằm về cùng một phía của mặt phẳng liên kết đôi C=C.\n• Dạng trans: Hai nhóm thế có độ ưu tiên lớn hơn hoặc hai nhóm giống nhau nằm về hai phía khác nhau của mặt phẳng liên kết đôi C=C.\n• Ví dụ but-2-ene: cis-but-2-ene và trans-but-2-ene."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Chất nào sau đây có đồng phân hình học cis - trans?",
        options: [
          "Propene (CH2=CH-CH3)",
          "But-1-ene (CH2=CH-CH2-CH3)",
          "But-2-ene (CH3-CH=CH-CH3)",
          "2-Methylpropene (CH2=C(CH3)2)"
        ],
        ans: 2,
        explain: "But-2-ene có dạng abC=Ccd với mỗi C nối đôi đều gắn 1 nhóm -H và 1 nhóm -CH3 (khác nhau), thoả mãn điều kiện có đồng phân cis - trans."
      },
      {
        q: "Ethanol (CH3CH2OH) và Dimethyl ether (CH3OCH3) là ví dụ điển hình của loại đồng phân nào?",
        options: [
          "Đồng phân mạch carbon",
          "Đồng phân vị trí liên kết đôi",
          "Đồng phân nhóm chức",
          "Đồng phân hình học"
        ],
        ans: 2,
        explain: "Cùng có CTPT là C2H6O nhưng một chất có nhóm chức alcohol (-OH), chất kia có nhóm chức ether (-O-) nên là đồng phân nhóm chức."
      },
      {
        q: "Số lượng đồng phân cấu tạo ứng với công thức phân tử C4H10 là:",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        ans: 1,
        explain: "C4H10 có 2 đồng phân cấu tạo mạch carbon: Butane (CH3-CH2-CH2-CH3) và 2-Methylpropane (CH3-CH(CH3)-CH3)."
      }
    ]
  },

  14: {
    num: 14,
    chapter: 3,
    chapterTitle: "Chương 3. Đại cương hoá học hữu cơ",
    title: "Ôn tập chương 3",
    badge: "Hệ thống & Bài tập",
    summary: "Tổng kết toàn bộ kiến thức Chương 3: Khái niệm hợp chất hữu cơ, phổ IR, các phương pháp tách tinh chế, thiết lập CTPT từ % nguyên tố và phổ MS, viết đồng phân cấu tạo và đồng phân cis - trans.",
    objectives: [
      "Hệ thống hoá mối quan hệ từ thành phần nguyên tố, phân tích phổ (IR, MS) đến thiết lập CTPT và biểu diễn cấu tạo.",
      "Phân biệt và lựa chọn chính xác phương pháp tách biệt, tinh chế cho từng hỗn hợp thực tế.",
      "Viết thành thạo tất cả các đồng phân cấu tạo và đồng phân hình học của các hợp chất hữu cơ đơn giản."
    ],
    sections: [
      {
        heading: "1. Sơ đồ tư duy Đại cương Hoá học hữu cơ",
        type: "grid",
        items: [
          {
            badge: "Nhánh Phân tích",
            title: "Từ thực nghiệm đến CTPT",
            points: [
              "Phân tích định tính: Xác định sự có mặt của C (tạo CO2 làm đục nước vôi), H (tạo H2O hoá xanh CuSO4 khan), N, halogen.",
              "Phân tích định lượng: Tính % khối lượng nguyên tố => Lập CTĐGN.",
              "Phổ MS: Peak [M]+ có m/z lớn nhất cho biết Phân tử khối M.",
              "Phổ IR: Xác định các nhóm chức đặc trưng (-OH, >C=O, -COOH, -COO-)."
            ]
          },
          {
            badge: "Nhánh Cấu tạo & Tách chất",
            title: "Cấu tạo & Tinh chế",
            points: [
              "Tách chất: Chưng cất (khác nhiệt độ sôi), Chiết (khác độ tan), Kết tinh (độ tan theo nhiệt độ), Sắc kí cột (ái lực hấp phụ).",
              "Thuyết Butlerov: Carbon hoá trị IV, liên kết đúng trật tự tạo mạch C.",
              "Đồng đẳng: Hơn kém nhóm -CH2-, cấu tạo tương tự.",
              "Đồng phân: Mạch C, vị trí nhóm chức, loại nhóm chức và hình học cis/trans."
            ]
          }
        ]
      },
      {
        heading: "2. Các bài tập rèn luyện kĩ năng Chương 3",
        type: "list",
        items: [
          {
            title: "Dạng bài lập CTPT kết hợp phổ MS",
            desc: "Đề bài: Hợp chất hữu cơ X chứa 40,0% C; 6,7% H và 53,3% O về khối lượng. Trên phổ MS của X xuất hiện peak ion phân tử [M]+ tại m/z = 60. Xác định CTPT của X.\n• Tỉ lệ nC : nH : nO = (40,0/12) : (6,7/1) : (53,3/16) = 3,33 : 6,70 : 3,33 = 1 : 2 : 1 => CTĐGN là CH2O.\n• CTPT có dạng (CH2O)n. Ta có M = 30n = 60 => n = 2 => CTPT của X là C2H4O2."
          },
          {
            title: "Dạng bài viết đồng phân và xác định đồng phân cis - trans",
            desc: "Ứng với công thức phân tử C4H8 có 5 đồng phân (gồm 3 đồng phân cấu tạo mạch hở, 2 đồng phân vòng và 1 cặp đồng phân hình học):\n• Mạch hở: CH2=CH-CH2-CH3 (but-1-ene); CH3-CH=CH-CH3 (but-2-ene, có 2 đồng phân cis và trans); CH2=C(CH3)2 (2-methylpropene).\n• Mạch vòng: cyclobutane và methylcyclopropane."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hợp chất hữu cơ Y có công thức phân tử C3H8O. Số lượng đồng phân cấu tạo alcohol ứng với Y là:",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        ans: 1,
        explain: "C3H8O có 2 đồng phân alcohol: Propan-1-ol (CH3-CH2-CH2-OH) và Propan-2-ol (CH3-CH(OH)-CH3)."
      },
      {
        q: "Hỗn hợp lỏng gồm benzene (sôi ở 80,1°C) và toluene (sôi ở 110,6°C) có thể được tách biệt tốt nhất bằng phương pháp nào?",
        options: [
          "Chiết lỏng - lỏng",
          "Chưng cất phân đoạn",
          "Kết tinh",
          "Chưng cất lôi cuốn hơi nước"
        ],
        ans: 1,
        explain: "Benzene và toluene là hai chất lỏng tan vô hạn vào nhau có nhiệt độ sôi chênh lệch khoảng 30°C nên dùng phương pháp chưng cất phân đoạn."
      },
      {
        q: "Cho các chất: (1) but-1-ene, (2) but-2-ene, (3) 1,2-dichloroethene, (4) propene. Những chất có đồng phân hình học cis - trans là:",
        options: [
          "(1) và (2)",
          "(2) và (3)",
          "(1) và (4)",
          "(2) và (4)"
        ],
        ans: 1,
        explain: "(2) but-2-ene và (3) 1,2-dichloroethene thoả mãn điều kiện mỗi nguyên tử carbon nối đôi liên kết với 2 nhóm nguyên tử khác nhau."
      }
    ]
  },

  15: {
    num: 15,
    chapter: 4,
    chapterTitle: "Chương 4. Hydrocarbon",
    title: "Alkane",
    badge: "Hydrocarbon no",
    summary: "Dãy đồng đẳng alkane CnH2n+2, danh pháp IUPAC, cấu trúc tứ diện, tính chất vật lí, phản ứng thế halogen, cracking, reforming, phản ứng cháy và an toàn sử dụng nhiên liệu.",
    objectives: [
      "Nêu định nghĩa alkane, viết công thức chung CnH2n+2 (n >= 1) và gọi tên theo danh pháp thay thế IUPAC.",
      "Mô tả cấu trúc không gian tứ diện của methane (góc liên kết 109,5°) và tính chất vật lí theo chiều tăng phân tử khối.",
      "Viết phương trình phản ứng thế halogen (chiếu sáng), cracking, reforming và phản ứng cháy toả nhiệt.",
      "Giải thích ứng dụng của alkane làm nhiên liệu khí đốt (LPG), xăng xe và các biện pháp giảm thiểu ô nhiễm từ khí thải động cơ."
    ],
    sections: [
      {
        heading: "1. Đồng đẳng & Danh pháp IUPAC của Alkane",
        type: "list",
        items: [
          {
            title: "Dãy đồng đẳng Alkane (Paraffin)",
            desc: "Alkane là những hydrocarbon no mạch hở, trong phân tử chỉ chứa các liên kết đơn C-C và C-H. Công thức chung: CnH2n+2 (n >= 1).\n• Tên 10 alkane mạch thẳng đầu dãy: C1: methane, C2: ethane, C3: propane, C4: butane, C5: pentane, C6: hexane, C7: heptane, C8: octane, C9: nonane, C10: decane (Mẹo nhớ: Mẹ Em Phải Bón Phân Hoá Học Ở Ngoài Đồng)."
          },
          {
            title: "Quy tắc gọi tên theo danh pháp thay thế (IUPAC)",
            desc: "Tên Alkane = [Số chỉ vị trí nhánh] + [-] + [Tên nhánh alkyl] + [Tên mạch chính] + [ane]\n• Bước 1: Chọn mạch chính là mạch carbon dài nhất và có chứa nhiều nhánh nhất.\n• Bước 2: Đánh số thứ tự các nguyên tử carbon trên mạch chính từ đầu gần nhánh hơn sao cho tổng số chỉ vị trí nhánh là nhỏ nhất.\n• Bước 3: Đọc tên: Nếu có nhiều nhánh giống nhau, dùng tiếp đầu ngữ di- (2), tri- (3), tetra- (4); nếu có nhiều nhánh khác nhau thì xếp theo thứ tự bảng chữ cái (ethyl trước methyl).\n• Ví dụ: CH3-CH(CH3)-CH2-CH3 gọi là 2-methylbutane; CH3-C(CH3)2-CH3 gọi là 2,2-dimethylpropane (neopentane)."
          }
        ]
      },
      {
        heading: "2. Tính chất vật lí & Cấu trúc",
        type: "grid",
        items: [
          {
            badge: "Hình học phân tử",
            title: "Cấu trúc tứ diện của Methane",
            points: [
              "Nguyên tử C ở trạng thái lai hoá sp3.",
              "Phân tử CH4 có dạng hình tứ diện đều, nguyên tử C ở tâm, 4 nguyên tử H ở 4 đỉnh tứ diện.",
              "Góc liên kết H-C-H bằng 109,5°.",
              "Liên kết C-H và C-C không phân cực hoặc phân cực rất yếu => Phân tử alkane không phân cực."
            ]
          },
          {
            badge: "Tính chất vật lí",
            title: "Trạng thái & Nhiệt độ sôi",
            points: [
              "Trạng thái: Ở điều kiện thường, C1 đến C4 và neopentane là chất khí; C5 đến C17 là chất lỏng; từ C18 trở đi là chất rắn dạng sáp.",
              "Nhiệt độ sôi và nhiệt độ nóng chảy tăng dần theo chiều tăng của phân tử khối do lực tương tác Van der Waals tăng.",
              "Đồng phân mạch nhánh có nhiệt độ sôi thấp hơn đồng phân mạch thẳng cùng số C (do diện tích tiếp xúc phân tử giảm).",
              "Độ tan & Khối lượng riêng: Alkane không tan trong nước, nhẹ hơn nước; tan tốt trong dung môi hữu cơ."
            ]
          }
        ]
      },
      {
        heading: "3. Tính chất hoá học của Alkane",
        type: "list",
        items: [
          {
            title: "Phản ứng thế Halogen (Phản ứng đặc trưng)",
            desc: "Khi chiếu sáng (as) hoặc đun nóng, các nguyên tử H trong phân tử alkane lần lượt bị thay thế bởi nguyên tử halogen (Cl2, Br2):\n• Phản ứng thế của methane với chlorine:\n  CH4 + Cl2 --(as)-> CH3Cl (chloromethane) + HCl\n  CH3Cl + Cl2 --(as)-> CH2Cl2 (dichloromethane) + HCl\n  CH2Cl2 + Cl2 --(as)-> CHCl3 (chloroform) + HCl\n  CHCl3 + Cl2 --(as)-> CCl4 (carbon tetrachloride) + HCl\n• Quy tắc thế: Nguyên tử halogen ưu tiên thế vào nguyên tử hydrogen ở carbon bậc cao hơn (tạo sản phẩm chính bền hơn).\n• Ví dụ propane: CH3-CH2-CH3 + Cl2 --(as, 1:1)-> CH3-CHCl-CH3 (2-chloropropane, sản phẩm chính 57%) + CH3-CH2-CH2Cl (1-chloropropane, sản phẩm phụ 43%)."
          },
          {
            title: "Phản ứng Cracking & Reforming trong lọc dầu",
            desc: "• Phản ứng Cracking: Dưới tác dụng của nhiệt độ và xúc tác, các alkane mạch dài bị bẻ gãy liên kết C-C tạo thành hỗn hợp các hydrocarbon mạch ngắn hơn gồm alkane và alkene:\n  C16H34 --(t°, xt)-> C8H18 (octane) + C8H16 (octene).\n• Phản ứng Reforming: Là quá trình biến đổi cấu trúc mạch carbon từ mạch thẳng không phân nhánh thành mạch nhánh, mạch vòng hoặc arene (hydrocarbon thơm) mà không làm thay đổi số nguyên tử carbon trong phân tử:\n  CH3-(CH2)4-CH3 (hexane) --(t°, xt)-> Benzene + 4H2.\n  Ý nghĩa: Quá trình cracking giúp tăng sản lượng xăng từ dầu mỏ; quá trình reforming giúp tăng mạnh chỉ số octane, chống kích nổ cho động cơ xăng."
          },
          {
            title: "Phản ứng oxi hoá (Cháy toả nhiệt lớn)",
            desc: "• Phản ứng cháy hoàn toàn: CnH2n+2 + (3n+1)/2 O2 --(t°)-> nCO2 + (n+1)H2O, toả lượng nhiệt cực lớn (Delta H < 0).\n  Đặc điểm: Luôn có n(H2O) > n(CO2) và n(alkane) = n(H2O) - n(CO2).\n• Cháy không hoàn toàn (thiếu oxygen): Sinh ra khí độc CO và muội than C gây ô nhiễm môi trường."
          }
        ]
      },
      {
        heading: "4. Ứng dụng & An toàn sử dụng nhiên liệu",
        type: "list",
        items: [
          {
            title: "Ứng dụng thực tế",
            desc: "• Khí hoá lỏng thương phẩm (LPG - Liquefied Petroleum Gas): Chủ yếu gồm propane (C3H8) và butane (C4H10) nén trong bình gas gia đình.\n• Nhiên liệu lỏng: Xăng xe (hỗn hợp C7-C9), dầu hoả, dầu diesel.\n• Sáp paraffin, vaseline: Dùng làm nến, kem dưỡng ẩm trong y tế và mỹ phẩm."
          },
          {
            title: "An toàn sử dụng & Giảm thiểu ô nhiễm",
            desc: "• An toàn cháy nổ: Khí gas và hơi xăng dầu rất dễ bắt lửa khi gặp tia lửa điện. Người ta thường pha thêm một lượng nhỏ chất có mùi nồng đặc trưng (như ethanethiol C2H5SH) vào bình gas để dễ phát hiện rò rỉ. Khi phát hiện mùi gas: Tuyệt đối không bật/tắt công tắc điện, không bật quẹt, lập tức khoá van gas và mở toang tất cả các cửa cho thông thoáng khí.\n• Giảm ô nhiễm khí thải: Sử dụng xăng sinh học E5, E10 (chứa 5-10% bio-ethanol), lắp đặt bộ chuyển đổi xúc tác khí thải (catalytic converter) trên xe máy và ô tô để biến CO, NOx, hydrocarbon chưa cháy hết thành CO2, N2, H2O không độc."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Tên gọi thay thế theo danh pháp IUPAC của hợp chất (CH3)2CH-CH2-CH3 là:",
        options: [
          "2-Methylbutane",
          "3-Methylbutane",
          "Pentane",
          "Dimethylpropane"
        ],
        ans: 0,
        explain: "Mạch chính dài nhất có 4 carbon (butane), đánh số từ trái sang để nhánh ở vị trí số 2 => 2-methylbutane."
      },
      {
        q: "Khi cho 2-methylbutane tác dụng với Cl2 (tỉ lệ mol 1:1, có ánh sáng), sản phẩm chính thu được là:",
        options: [
          "1-Chloro-2-methylbutane",
          "2-Chloro-2-methylbutane",
          "2-Chloro-3-methylbutane",
          "1-Chloro-3-methylbutane"
        ],
        ans: 1,
        explain: "Quy tắc thế: Halogen ưu tiên thế vào carbon bậc cao hơn. Ở 2-methylbutane, C ở vị trí số 2 là carbon bậc 3 (bậc cao nhất) nên sản phẩm chính là 2-chloro-2-methylbutane."
      },
      {
        q: "Thành phần chính của khí dầu mỏ hoá lỏng (LPG) dùng làm gas đun nấu trong sinh hoạt gia đình là:",
        options: [
          "Methane và Ethane",
          "Propane và Butane",
          "Hexane và Heptane",
          "Ethylene và Acetylene"
        ],
        ans: 1,
        explain: "LPG (Liquefied Petroleum Gas) chủ yếu là hỗn hợp propane (C3H8) và butane (C4H10) được nén hoá lỏng ở áp suất cao."
      }
    ]
  },

  16: {
    num: 16,
    chapter: 4,
    chapterTitle: "Chương 4. Hydrocarbon",
    title: "Hydrocarbon không no",
    badge: "Alkene & Alkyne",
    summary: "Nghiên cứu alkene CnH2n và alkyne CnH2n-2, liên kết pi (π), phản ứng cộng (H2, Br2, HX) theo quy tắc Markovnikov, phản ứng trùng hợp tạo polymer, phản ứng của alk-1-yne với AgNO3/NH3, oxi hoá KMnO4 và ứng dụng.",
    objectives: [
      "Viết công thức tổng quát của alkene (CnH2n, n >= 2) và alkyne (CnH2n-2, n >= 2), gọi tên theo IUPAC.",
      "Mô tả cấu trúc phẳng của ethylene (góc 120°) và cấu trúc thẳng của acetylene (góc 180°).",
      "Viết phương trình phản ứng cộng H2, Br2, HX, H2O và vận dụng chính xác quy tắc cộng Markovnikov.",
      "Viết phương trình phản ứng trùng hợp của ethylene, propylene và phản ứng thế ion kim loại bạc của alk-1-yne.",
      "Trình bày các phương pháp điều chế và ứng dụng của ethylene kích thích quả chín, hàn cắt kim loại bằng acetylene."
    ],
    sections: [
      {
        heading: "1. Khái niệm, Cấu tạo & Danh pháp IUPAC",
        type: "grid",
        items: [
          {
            badge: "Alkene (Olefin)",
            title: "CnH2n (n >= 2)",
            points: [
              "Đặc điểm: Hydrocarbon mạch hở chứa 1 liên kết đôi C=C (gồm 1 liên kết sigma bền và 1 liên kết pi kém bền).",
              "Ethylene (C2H4): Phân tử phẳng, các góc liên kết H-C-H và H-C=C xấp xỉ 120° (lai hoá sp2).",
              "Tên IUPAC: [Vị trí nhánh] + [Tên nhánh] + [Tên mạch chính chứa C=C] + [Vị trí C=C] + [ene].",
              "Ví dụ: CH2=CH2 (ethene/ethylene), CH2=CH-CH3 (propene), CH2=CH-CH2-CH3 (but-1-ene), CH3-CH=CH-CH3 (but-2-ene)."
            ]
          },
          {
            badge: "Alkyne",
            title: "CnH2n-2 (n >= 2)",
            points: [
              "Đặc điểm: Hydrocarbon mạch hở chứa 1 liên kết ba C≡C (gồm 1 liên kết sigma bền và 2 liên kết pi kém bền).",
              "Acetylene (C2H2): Phân tử dạng đường thẳng, góc liên kết H-C≡C bằng 180° (lai hoá sp).",
              "Tên IUPAC: Tương tự alkene nhưng thay đuôi -ene bằng đuôi -yne.",
              "Ví dụ: CH≡CH (ethyne/acetylene), CH≡C-CH3 (propyne), CH≡C-CH2-CH3 (but-1-yne), CH3-C≡C-CH3 (but-2-yne)."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Alkene và Alkyne",
        type: "list",
        items: [
          {
            title: "Phản ứng cộng Hydrogen (H2)",
            desc: "• Alkene cộng H2 (xúc tác Ni, t°) tạo alkane: CH2=CH2 + H2 --(Ni, t°)-> CH3-CH3.\n• Alkyne cộng H2 với xúc tác Ni, đun nóng tạo alkane: CH≡CH + 2H2 --(Ni, t°)-> CH3-CH3.\n• Muốn dừng lại ở giai đoạn tạo alkene: Sử dụng xúc tác Lindlar hoặc Pd/PbCO3: CH≡CH + H2 --(Pd/PbCO3, t°)-> CH2=CH2."
          },
          {
            title: "Phản ứng cộng Halogen (Nước Bromine) - Phản ứng nhận biết",
            desc: "Liên kết pi kém bền dễ bị bẻ gãy khi sục khí vào dung dịch nước bromine, làm mất màu nâu đỏ của nước bromine ngay ở nhiệt độ thường:\n• CH2=CH2 + Br2 (nâu đỏ) -> CH2Br-CH2Br (1,2-dibromoethane, không màu).\n• CH≡CH + 2Br2 -> CHBr2-CHBr2 (1,1,2,2-tetrabromoethane, không màu)."
          },
          {
            title: "Phản ứng cộng Hydrogen Halide (HX) & Nước (H2O) - Quy tắc Markovnikov",
            desc: "• Quy tắc Markovnikov: Khi cộng HX (hoặc H2O) vào liên kết bội của alkene/alkyne bất đối xứng, nguyên tử H ưu tiên cộng vào nguyên tử carbon mang nhiều hydrogen hơn (carbon bậc thấp hơn), còn nguyên tử X (hoặc nhóm -OH) cộng vào nguyên tử carbon mang ít hydrogen hơn (carbon bậc cao hơn) tạo sản phẩm chính.\n• Ví dụ với propene:\n  CH2=CH-CH3 + HBr -> CH3-CHBr-CH3 (2-bromopropane, sản phẩm chính) + CH2Br-CH2-CH3 (1-bromopropane, sản phẩm phụ).\n  CH2=CH-CH3 + H2O --(H2SO4, t°)-> CH3-CH(OH)-CH3 (propan-2-ol, sản phẩm chính).\n• Phản ứng cộng nước của alkyne: CH≡CH + H2O --(HgSO4, 80°C, H2SO4)-> [CH2=CH-OH] không bền chuyển vị thành CH3-CHO (acetaldehyde)."
          },
          {
            title: "Phản ứng trùng hợp (Polymerisation)",
            desc: "Dưới tác dụng của nhiệt độ, áp suất và chất xúc tác thích hợp, các phân tử alkene liên kết với nhau bằng cách bẻ gãy liên kết pi tạo thành hợp chất phân tử khối khổng lồ (polymer):\n• n CH2=CH2 --(t°, p, xt)-> (-CH2-CH2-)n (Polyethylene - PE, màng nilon, bao bì).\n• n CH2=CH(CH3) --(t°, p, xt)-> (-CH2-CH(CH3)-)n (Polypropylene - PP, đồ gia dụng, bao bì dệt)."
          },
          {
            title: "Phản ứng thế ion kim loại của Alk-1-yne (Nối ba đầu mạch)",
            desc: "Nguyên tử H liên kết trực tiếp với carbon nối ba đầu mạch (-C≡C-H) có tính linh động, dễ bị thay thế bởi cation kim loại bạc (Ag+) trong môi trường kiềm ammonia tạo kết tủa màu vàng nhạt đặc trưng:\n• CH≡CH + 2[Ag(NH3)2]OH -> AgC≡CAg↓ (bạc acetylide, kết tủa vàng nhạt) + 4NH3 + 2H2O.\n• CH≡C-CH3 + [Ag(NH3)2]OH -> AgC≡C-CH3↓ (vàng nhạt) + 2NH3 + H2O.\n• Đây là phản ứng đặc trưng dùng để phân biệt alk-1-yne với alkene và các alkyne khác (như but-2-yne không có phản ứng này)."
          },
          {
            title: "Phản ứng oxi hoá",
            desc: "• Oxi hoá không hoàn toàn: Cả alkene và alkyne đều làm mất màu tím dung dịch thuốc tím KMnO4 ngay nhiệt độ thường (dùng nhận biết liên kết bội):\n  3CH2=CH2 + 2KMnO4 + 4H2O -> 3CH2(OH)-CH2(OH) (ethylene glycol) + 2MnO2↓ nâu đen + 2KOH.\n• Oxi hoá hoàn toàn (cháy): Toả nhiều nhiệt. Đặc biệt, ngọn lửa đèn hàn oxy - acetylene có nhiệt độ lên tới trên 3000°C dùng để hàn cắt kim loại."
          }
        ]
      },
      {
        heading: "3. Điều chế & Ứng dụng thực tế",
        type: "list",
        items: [
          {
            title: "Phương pháp điều chế",
            desc: "• Trong phòng thí nghiệm: Tách nước ethanol ở 170°C có H2SO4 đặc: C2H5OH --(H2SO4 đặc, 170°C)-> C2H4 + H2O; Điều chế acetylene từ đất đèn (canxi cacbua): CaC2 + 2H2O -> C2H2↑ + Ca(OH)2.\n• Trong công nghiệp: Cracking dầu mỏ thu ethene, propene; Nhiệt phân nhanh methane ở 1500°C làm lạnh nhanh: 2CH4 --(1500°C, lln)-> C2H2 + 3H2."
          },
          {
            title: "Ứng dụng thực tế",
            desc: "• Ethylene: Kích thích quả mau chín (xếp chuối, cà chua cùng quả chín giải phóng ethylene); là nguyên liệu chủ chốt sản xuất nhựa PE, PVC, ethylene glycol, acetic acid.\n• Acetylene: Dùng trong mỏ đèn hàn gió đá hàn cắt kim loại; sản xuất tơ sợi tổng hợp, da nhân tạo."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Chất nào sau đây tác dụng với dung dịch AgNO3 trong NH3 sinh ra kết tủa màu vàng nhạt?",
        options: [
          "But-2-yne",
          "But-1-yne",
          "But-2-ene",
          "Butane"
        ],
        ans: 1,
        explain: "Chỉ có các alk-1-yne có liên kết ba đầu mạch (-C≡C-H) như but-1-yne mới tác dụng được với AgNO3/NH3 tạo kết tủa bạc acetylide vàng nhạt."
      },
      {
        q: "Sản phẩm chính của phản ứng cộng giữa propene (CH2=CH-CH3) với dung dịch HBr là:",
        options: [
          "CH3-CH2-CH2Br",
          "CH3-CHBr-CH3",
          "CH2Br-CH2-CH2Br",
          "CH3-CBr2-CH3"
        ],
        ans: 1,
        explain: "Theo quy tắc Markovnikov, nguyên tử H cộng vào carbon mang nhiều H hơn (CH2), còn Br cộng vào carbon mang ít H hơn (CH) tạo sản phẩm chính 2-bromopropane (CH3-CHBr-CH3)."
      },
      {
        q: "Hiện tượng quan sát được khi sục khí ethylene vào ống nghiệm chứa dung dịch thuốc tím (KMnO4) là:",
        options: [
          "Dung dịch chuyển sang màu xanh thẫm.",
          "Dung dịch bị mất màu tím và xuất hiện kết tủa màu nâu đen.",
          "Xuất hiện kết tủa màu trắng.",
          "Không có hiện tượng gì xảy ra."
        ],
        ans: 1,
        explain: "Ethylene khử KMnO4 làm mất màu tím và tạo kết tủa MnO2 màu nâu đen: 3C2H4 + 2KMnO4 + 4H2O -> 3C2H4(OH)2 + 2MnO2↓ + 2KOH."
      }
    ]
  },

  17: {
    num: 17,
    chapter: 4,
    chapterTitle: "Chương 4. Hydrocarbon",
    title: "Arene",
    badge: "Hydrocarbon thơm",
    summary: "Dãy đồng đẳng benzene CnH2n-6, cấu trúc lục giác đều phẳng, phản ứng thế electrophile vào vòng benzene (halogen hoá, nitro hoá) theo quy tắc nhóm thế, phản ứng cộng, phản ứng oxi hoá mạch nhánh và độc tính benzene.",
    objectives: [
      "Mô tả cấu trúc lục giác đều, phẳng và hệ liên kết pi liên hợp bền vững của phân tử benzene.",
      "Viết công thức cấu tạo và gọi tên các arene phổ biến: benzene, toluene, xylene, styrene, naphthalene.",
      "Viết phương trình phản ứng thế vào nhân thơm (bromine hoá có FeBr3, nitro hoá có H2SO4 đặc) và vận dụng quy tắc thế định hướng ortho/para của nhóm alkyl.",
      "Phân biệt phản ứng oxi hoá mạch nhánh của toluene bằng KMnO4 với tính trơ của benzene.",
      "Nêu ứng dụng công nghiệp, nguồn thu nhận (BTX) và cảnh báo nguy cơ nhiễm độc, gây ung thư máu của benzene."
    ],
    sections: [
      {
        heading: "1. Cấu trúc & Dãy đồng đẳng của Arene",
        type: "grid",
        items: [
          {
            badge: "Cấu trúc vòng Benzene",
            title: "Hệ liên kết pi liên hợp kín",
            points: [
              "Công thức phân tử C6H6. Phân tử có cấu tạo lục giác đều, phẳng, 6 nguyên tử C và 6 nguyên tử H đều nằm trên một mặt phẳng.",
              "Các góc liên kết C-C-C và C-C-H đều bằng 120°.",
              "Độ dài liên kết C-C hoàn toàn bằng nhau (139 pm), trung gian giữa liên kết đơn C-C (154 pm) và liên kết đôi C=C (134 pm).",
              "Hệ 6 electron pi giải toả đều trên cả 6 nguyên tử carbon tạo thành hệ thơm vô cùng bền vững (đặc trưng thơm: dễ thế, khó cộng, bền với chất oxi hoá)."
            ]
          },
          {
            badge: "Dãy đồng đẳng Benzene",
            title: "CnH2n-6 (n >= 6)",
            points: [
              "Benzene: C6H6",
              "Toluene (methylbenzene): C6H5-CH3",
              "Ethylbenzene: C6H5-CH2-CH3",
              "Xylene (dimethylbenzene): có 3 đồng phân ortho-xylene (1,2-), meta-xylene (1,3-), para-xylene (1,4-).",
              "Một số arene khác: Styrene (C6H5-CH=CH2), Naphthalene (C10H8, băng phiến có 2 vòng benzene ngưng tụ)."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Arene",
        type: "list",
        items: [
          {
            title: "Phản ứng thế ở nhân thơm (Halogen hoá)",
            desc: "• Benzene phản ứng với bromine khan có xúc tác mạt sắt (thực chất là FeBr3): C6H6 + Br2 --(FeBr3, t°)-> C6H5Br (bromobenzene) + HBr↑.\n• Quy tắc thế ở vòng benzene: Khi vòng benzene đã có sẵn nhóm alkyl (nhóm đẩy electron như -CH3, -C2H5), phản ứng thế nguyên tử H diễn ra dễ dàng hơn so với benzene và ưu tiên định hướng thế vào các vị trí ortho (vị trí 2, 6) và para (vị trí 4).\n• Ví dụ toluene: Toluene phản ứng với Br2 (xúc tác Fe) tạo hỗn hợp o-bromotoluene và p-bromotoluene.\n• Lưu ý: Nếu đun nóng toluene với Br2 có chiếu sáng (không có xúc tác Fe), phản ứng thế xảy ra ở nhánh alkyl: C6H5CH3 + Br2 --(as, t°)-> C6H5CH2Br (benzyl bromide) + HBr."
          },
          {
            title: "Phản ứng Nitro hoá (Tác dụng với HNO3 đặc / H2SO4 đặc)",
            desc: "• Nitro hoá benzene: C6H6 + HNO3 (đặc) --(H2SO4 đặc, <=50°C)-> C6H5NO2 (nitrobenzene, chất lỏng màu vàng nhạt, mùi hạnh nhân đắng) + H2O.\n• Nitro hoá toluene: Toluene phản ứng dễ dàng hơn tạo hỗn hợp ortho- và para-nitrotoluene; khi nitro hoá mãnh liệt tạo 2,4,6-trinitrotoluene (thuốc nổ TNT): C6H5CH3 + 3HNO3 --(H2SO4 đặc, t°)-> C6H2(NO2)3CH3 (TNT) + 3H2O."
          },
          {
            title: "Phản ứng cộng vào nhân thơm (Điều kiện khắc nghiệt)",
            desc: "• Cộng chlorine dưới ánh sáng mặt trời/tia UV: C6H6 + 3Cl2 --(as UV)-> C6H6Cl6 (1,2,3,4,5,6-hexachlorocyclohexane, thuốc trừ sâu 666 từng dùng trước đây, nay bị cấm vì tồn lưu độc tính sinh học cao).\n• Cộng hydrogen ở nhiệt độ và áp suất cao: C6H6 + 3H2 --(Ni, t°, p)-> C6H12 (cyclohexane)."
          },
          {
            title: "Phản ứng oxi hoá",
            desc: "• Oxi hoá hoàn toàn: Các arene cháy toả nhiều nhiệt, do hàm lượng C cao nên khi cháy trong không khí thường sinh ra nhiều muội than khói đen.\n• Oxi hoá không hoàn toàn với dung dịch KMnO4: Benzene không làm mất màu KMnO4 ngay cả khi đun nóng; Toluene không phản ứng ở nhiệt độ thường nhưng làm mất màu thuốc tím khi đun nóng do oxi hoá nhóm methyl: C6H5CH3 + 2KMnO4 --(t°)-> C6H5COOK (potassium benzoate) + 2MnO2↓ + KOH + H2O. Sau đó acid hoá thu được benzoic acid (C6H5COOH kết tủa trắng)."
          }
        ]
      },
      {
        heading: "3. Nguồn cung, Ứng dụng & Cảnh báo an toàn",
        type: "list",
        items: [
          {
            title: "Nguồn thu nhận BTX & Ứng dụng",
            desc: "• Nguồn gốc: Phân đoạn BTX (Benzene - Toluene - Xylene) được sản xuất chủ yếu bằng quá trình reforming xúc tác naphtha dầu mỏ hoặc chưng cất nhựa than đá.\n• Ứng dụng: Dung môi hoà tan sơn, chất béo, cao su; Nguyên liệu điều chế polymer quan trọng: benzene + ethylene -> ethylbenzene -> styrene -> nhựa Polystyrene (nhựa xốp PS); Toluene sản xuất thuốc nổ TNT, phẩm nhuộm, benzoic acid."
          },
          {
            title: "Độc tính & Cảnh báo an toàn sức khoẻ",
            desc: "• Benzene là chất độc nguy hiểm: Có thể gây nhiễm độc cấp tính (chóng mặt, nhức đầu, bất tỉnh); nhiễm độc mãn tính gây tổn thương tuỷ xương, giảm hồng cầu và bạch cầu, làm tăng nguy cơ mắc bệnh ung thư máu (leukemia).\n• Biện pháp: Hạn chế tối đa tiếp xúc trực tiếp, thao tác hoá chất trong tủ hút chân không có thông gió, không dùng benzene làm dung môi tẩy rửa thông thường (thay thế bằng toluene hoặc dung môi an toàn hơn)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Thuốc thử nào sau đây dùng để phân biệt hai chất lỏng không màu: benzene và toluene?",
        options: [
          "Dung dịch nước bromine ở nhiệt độ thường",
          "Dung dịch KMnO4 đun nóng",
          "Dung dịch NaOH",
          "Dung dịch AgNO3 trong NH3"
        ],
        ans: 1,
        explain: "Benzene không làm mất màu KMnO4 kể cả khi đun nóng; toluene làm mất màu dung dịch KMnO4 khi đun nóng do nhóm methyl bị oxi hoá."
      },
      {
        q: "Khi nitro hoá toluene bằng hỗn hợp HNO3 đặc và H2SO4 đặc, sản phẩm thế ưu tiên định hướng vào các vị trí nào trên vòng benzene?",
        options: [
          "Vị trí meta (vị trí số 3)",
          "Vị trí ortho (vị trí số 2) và para (vị trí số 4)",
          "Chỉ thế vào vị trí meta",
          "Chỉ thế vào nhánh methyl"
        ],
        ans: 1,
        explain: "Nhóm -CH3 là nhóm đẩy electron, làm tăng mật độ điện tích âm ở các vị trí ortho và para, do đó phản ứng thế ưu tiên xảy ra tại vị trí ortho và para."
      },
      {
        q: "Chất nào sau đây được dùng làm nguyên liệu để trùng hợp tạo ra nhựa polystyrene (nhựa xốp PS)?",
        options: [
          "Benzene",
          "Toluene",
          "Styrene",
          "Naphthalene"
        ],
        ans: 2,
        explain: "Styrene (C6H5-CH=CH2) có liên kết đôi ở nhánh ngoài vòng benzene, dễ dàng tham gia phản ứng trùng hợp tạo nhựa polystyrene (PS)."
      }
    ]
  },

  18: {
    num: 18,
    chapter: 4,
    chapterTitle: "Chương 4. Hydrocarbon",
    title: "Ôn tập chương 4",
    badge: "Hệ thống & Bài tập",
    summary: "Tổng kết toàn bộ hydrocarbon: Alkane (no), Alkene và Alkyne (không no), Arene (thơm). So sánh tính chất hoá học đặc trưng, các phương pháp phân biệt và bài tập tính toán.",
    objectives: [
      "Hệ thống hoá và so sánh cấu trúc, tính chất hoá học đặc trưng của alkane, alkene, alkyne và arene.",
      "Thành thạo phương pháp phân biệt các loại hydrocarbon bằng các thuốc thử đặc trưng (nước bromine, thuốc tím, AgNO3/NH3).",
      "Giải quyết các bài toán định lượng: phản ứng đốt cháy, phản ứng cộng, hiệu suất phản ứng cracking và reforming."
    ],
    sections: [
      {
        heading: "1. Bảng so sánh 4 nhóm Hydrocarbon cốt lõi",
        type: "table",
        headers: ["Nhóm Hydrocarbon", "Công thức chung", "Liên kết đặc trưng", "Phản ứng tiêu biểu", "Thuốc thử nhận biết"],
        rows: [
          ["Alkane", "CnH2n+2 (n >= 1)", "Toàn liên kết đơn C-C, C-H", "Thế halogen (chiếu sáng), Cracking, Cháy", "Không làm mất màu nước Br2, KMnO4"],
          ["Alkene", "CnH2n (n >= 2)", "1 liên kết đôi C=C (1σ + 1π)", "Cộng H2, Br2, HX (Markovnikov), Trùng hợp", "Làm mất màu nước Br2, dung dịch KMnO4"],
          ["Alkyne", "CnH2n-2 (n >= 2)", "1 liên kết ba C≡C (1σ + 2π)", "Cộng H2, Br2, HX; Alk-1-yne tạo kết tủa bạc", "Mất màu Br2, KMnO4; Alk-1-yne tạo kết tủa vàng với AgNO3/NH3"],
          ["Arene", "CnH2n-6 (n >= 6)", "Vòng benzene thơm (hệ liên kết π liên hợp)", "Thế nhân thơm (FeBr3, H2SO4), Oxi hoá nhánh", "Toluene làm mất màu KMnO4 khi đun nóng; Benzene không mất màu"]
        ]
      },
      {
        heading: "2. Sơ đồ nhận biết các chất khí Hydrocarbon",
        type: "list",
        items: [
          {
            title: "Quy trình phân biệt hỗn hợp khí: Methane, Ethylene, Acetylene",
            desc: "• Bước 1: Dẫn từng khí qua ống nghiệm chứa dung dịch AgNO3 trong NH3. Khí nào xuất hiện kết tủa màu vàng nhạt (AgC≡CAg) là Acetylene (alk-1-yne).\n• Bước 2: Dẫn 2 khí còn lại qua dung dịch nước bromine. Khí nào làm mất màu nâu đỏ của nước bromine là Ethylene (alkene).\n• Bước 3: Khí còn lại không làm mất màu nước bromine là Methane (alkane)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Đốt cháy hoàn toàn 0,1 mol một hydrocarbon X thu được 0,3 mol CO2 và 0,4 mol H2O. Công thức phân tử của X là:",
        options: [
          "C2H6",
          "C3H8",
          "C3H6",
          "C4H10"
        ],
        ans: 1,
        explain: "Số C = n(CO2) / n(X) = 0,3 / 0,1 = 3; Số H = 2 * n(H2O) / n(X) = 2 * 0,4 / 0,1 = 8 => CTPT là C3H8 (propane)."
      },
      {
        q: "Dẫn 3,7185 lít khí propene (ở đkc 25°C, 1 bar, 1 mol = 24,79 L) lội từ từ vào dung dịch Br2 dư. Khối lượng bromine đã tham gia phản ứng là:",
        options: [
          "16,0 gam",
          "24,0 gam",
          "32,0 gam",
          "8,0 gam"
        ],
        ans: 1,
        explain: "n(C3H6) = 3,7185 / 24,79 = 0,15 mol. Phản ứng tỉ lệ 1:1 => n(Br2) = 0,15 mol => m(Br2) = 0,15 * 160 = 24,0 gam."
      },
      {
        q: "Chất nào sau đây khi đun nóng với dung dịch KMnO4 sẽ làm mất màu dung dịch và tạo kết tủa trắng sau khi acid hoá?",
        options: [
          "Benzene",
          "Toluene",
          "Hexane",
          "Cyclohexane"
        ],
        ans: 1,
        explain: "Toluene (C6H5CH3) bị KMnO4 oxi hoá nhánh methyl khi đun nóng tạo potassium benzoate; sau khi acid hoá bằng HCl sinh ra benzoic acid (C6H5COOH) kết tủa trắng."
      }
    ]
  }
};
