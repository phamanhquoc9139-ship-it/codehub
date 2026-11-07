// scratch/hoahoc11_data_p1.js
// Chương 1 (Bài 1-3) và Chương 2 (Bài 4-9) - Hoá học 11 KNTT

module.exports = {
  1: {
    num: 1,
    chapter: 1,
    chapterTitle: "Chương 1. Cân bằng hoá học",
    title: "Khái niệm về cân bằng hoá học",
    badge: "Lí thuyết & Cơ chế",
    summary: "Nắm vững bản chất phản ứng một chiều, phản ứng thuận nghịch, cân bằng động, hằng số cân bằng Kc và nguyên lí chuyển dịch cân bằng Le Chatelier.",
    objectives: [
      "Phân biệt phản ứng một chiều và phản ứng thuận nghịch qua ví dụ thực tế và phương trình phản ứng.",
      "Hiểu rõ khái niệm trạng thái cân bằng hoá học là cân bằng động, nồng độ các chất không đổi theo thời gian.",
      "Viết biểu thức và tính giá trị hằng số cân bằng Kc cho hệ đồng thể và dị thể.",
      "Vận dụng nguyên lí Le Chatelier để dự đoán chiều chuyển dịch cân bằng khi thay đổi nhiệt độ, nồng độ, áp suất."
    ],
    sections: [
      {
        heading: "1. Phản ứng một chiều và phản ứng thuận nghịch",
        type: "list",
        items: [
          {
            title: "Phản ứng một chiều (->)",
            desc: "Phản ứng chỉ xảy ra theo một chiều từ chất phản ứng tạo thành sản phẩm trong điều kiện xác định. Sản phẩm không có khả năng phản ứng với nhau để tái tạo chất đầu.\n• Ví dụ cháy: CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)\n• Ví dụ trung hoà: NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)"
          },
          {
            title: "Phản ứng thuận nghịch (<=>)",
            desc: "Phản ứng xảy ra đồng thời theo hai chiều ngược nhau trong cùng điều kiện thực nghiệm.\n• Chiều từ trái sang phải gọi là phản ứng thuận; chiều từ phải sang trái gọi là phản ứng nghịch.\n• Ví dụ tổng hợp hydrogen iodide: H2(g) + I2(g) <=> 2HI(g)\n• Dù xuất phát từ hỗn hợp H2, I2 hay xuất phát từ HI nguyên chất, khi phản ứng diễn ra trong bình kín ở nhiệt độ xác định, hệ đều có thể đạt tới cùng một trạng thái cân bằng hoá học."
          },
          {
            title: "Khái niệm cân bằng động (Dynamic Equilibrium)",
            desc: "Cân bằng hoá học là trạng thái của phản ứng thuận nghịch khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (vt = vn).\n• Tại trạng thái cân bằng, phản ứng không dừng lại mà cả hai chiều thuận và nghịch vẫn tiếp tục xảy ra với tốc độ bằng nhau nên gọi là cân bằng động.\n• Nồng độ các chất trong hỗn hợp phản ứng giữ nguyên không đổi theo thời gian nếu không có tác động từ bên ngoài (nhiệt độ, áp suất, nồng độ).\n• Trạng thái cân bằng không đồng nghĩa với việc nồng độ chất phản ứng bằng nồng độ sản phẩm."
          }
        ]
      },
      {
        heading: "2. Hằng số cân bằng nồng độ (Kc)",
        type: "grid",
        items: [
          {
            badge: "Biểu thức tổng quát",
            title: "Định luật tác dụng khối lượng",
            points: [
              "Xét phản ứng thuận nghịch: aA + bB <=> cC + dD",
              "Biểu thức hằng số cân bằng nồng độ (Kc):",
              "$$K_c = \\frac{[\\text{C}]^c \\cdot [\\text{D}]^d}{[\\text{A}]^a \\cdot [\\text{B}]^b}$$",
              "Trong đó: [A], [B], [C], [D] là nồng độ mol/L của các chất ở trạng thái cân bằng; a, b, c, d là hệ số tỉ lượng trong phương trình đã cân bằng.",
              "Quy ước: Nồng độ chất rắn tinh khiết được coi như hằng số, KHÔNG đưa vào biểu thức Kc."
            ]
          },
          {
            badge: "Đặc điểm & Ý nghĩa",
            title: "Ý nghĩa của giá trị Kc",
            points: [
              "Kc chỉ phụ thuộc vào bản chất của phản ứng và nhiệt độ (T); KHÔNG phụ thuộc vào nồng độ ban đầu của các chất, áp suất của hệ hay sự có mặt của chất xúc tác.",
              "Kc >> 1: Cân bằng chuyển dịch mạnh về phía tạo sản phẩm, hiệu suất phản ứng cao.",
              "Kc << 1: Cân bằng chuyển dịch yếu, phản ứng tạo rất ít sản phẩm, chủ yếu tồn tại chất đầu.",
              "Ví dụ dị thể: CaCO3(s) <=> CaO(s) + CO2(g) => Kc = [CO2]."
            ]
          }
        ]
      },
      {
        heading: "3. Nguyên lí chuyển dịch cân bằng Le Chatelier",
        type: "list",
        items: [
          {
            title: "Phát biểu nguyên lí Le Chatelier",
            desc: "Một hệ phản ứng thuận nghịch đang ở trạng thái cân bằng, khi chịu một tác động từ bên ngoài làm thay đổi nồng độ, nhiệt độ hoặc áp suất, cân bằng sẽ tự chuyển dịch theo chiều làm giảm tác động bên ngoài đó."
          },
          {
            title: "Ảnh hưởng của nồng độ",
            desc: "• Tăng nồng độ một chất: Cân bằng chuyển dịch theo chiều tiêu thụ bớt chất đó (làm giảm nồng độ).\n• Giảm nồng độ một chất: Cân bằng chuyển dịch theo chiều tạo thêm chất đó (bù đắp lượng đã mất)."
          },
          {
            title: "Ảnh hưởng của nhiệt độ",
            desc: "• Tăng nhiệt độ: Cân bằng chuyển dịch theo chiều phản ứng thu nhiệt (chiều có Delta H > 0, hấp thụ nhiệt để hạ nhiệt độ).\n• Giảm nhiệt độ: Cân bằng chuyển dịch theo chiều phản ứng toả nhiệt (chiều có Delta H < 0, giải phóng nhiệt để bù nhiệt độ)."
          },
          {
            title: "Ảnh hưởng của áp suất (hệ có chất khí)",
            desc: "• Tăng áp suất chung (giảm thể tích bình): Cân bằng chuyển dịch theo chiều làm giảm số mol khí (giảm áp suất).\n• Giảm áp suất chung (tăng thể tích bình): Cân bằng chuyển dịch theo chiều làm tăng số mol khí.\n• Nếu hai vế phương trình có tổng hệ số mol khí bằng nhau (ví dụ: H2 + I2 <=> 2HI), áp suất thay đổi không làm chuyển dịch cân bằng."
          },
          {
            title: "Vai trò của chất xúc tác",
            desc: "Chất xúc tác làm giảm năng lượng hoạt hoá, tăng tốc độ phản ứng thuận và nghịch với mức độ như nhau, giúp hệ nhanh chóng đạt đến trạng thái cân bằng mà KHÔNG làm chuyển dịch cân bằng và KHÔNG làm thay đổi giá trị hằng số cân bằng Kc."
          }
        ]
      },
      {
        heading: "4. Thí nghiệm & Vận dụng thực tế",
        type: "grid",
        items: [
          {
            badge: "Thí nghiệm SGK",
            title: "Cân bằng khí 2NO2 <=> N2O4",
            points: [
              "Phương trình: 2NO2(g, nâu đỏ) <=> N2O4(g, không màu), Delta H < 0 (toả nhiệt).",
              "Khi ngâm ống nghiệm kín vào nước đá (hạ nhiệt độ): Màu nâu đỏ nhạt dần => cân bằng chuyển dịch theo chiều toả nhiệt (thuận, tạo N2O4).",
              "Khi ngâm ống nghiệm kín vào nước nóng (tăng nhiệt độ): Màu nâu đỏ đậm dần => cân bằng chuyển dịch theo chiều thu nhiệt (nghịch, tạo NO2).",
              "Lưu ý an toàn: Khí NO2 rất độc, ống nghiệm phải được nút kín bằng nút cao su phủ sáp paraffin, tuyệt đối không mở nút ngửi trực tiếp."
            ]
          },
          {
            badge: "Sinh học & Đời sống",
            title: "Cân bằng Hemoglobin và Oxygen",
            points: [
              "Phương trình cân bằng trong máu: Hb + O2 <=> HbO2 (oxyhemoglobin).",
              "Tại phổi: Phế nang có nồng độ O2 cao (áp suất riêng phần cao) => cân bằng chuyển dịch sang phải, tạo nhiều HbO2 để máu giàu dưỡng khí.",
              "Tại các mô, cơ quan: Nồng độ O2 thấp do tế bào tiêu thụ => cân bằng chuyển dịch sang trái, giải phóng O2 tự do cung cấp cho hô hấp tế bào.",
              "Hiện tượng say độ cao: Lên vùng núi cao, áp suất O2 giảm khiến lượng HbO2 tạo thành giảm sút, gây thiếu oxy lên não, chóng mặt, buồn nôn."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Khi một phản ứng thuận nghịch đạt trạng thái cân bằng hoá học thì nhận định nào sau đây là đúng?",
        options: [
          "Phản ứng dừng lại hoàn toàn, không còn phân tử nào phản ứng.",
          "Nồng độ của các chất phản ứng và sản phẩm luôn luôn bằng nhau.",
          "Tốc độ của phản ứng thuận bằng tốc độ của phản ứng nghịch.",
          "Hiệu suất của phản ứng luôn đạt 100%."
        ],
        ans: 2,
        explain: "Cân bằng hoá học là cân bằng động, tại đó vt = vn nên nồng độ các chất trong hệ không đổi theo thời gian."
      },
      {
        q: "Cho cân bằng: N2(g) + 3H2(g) <=> 2NH3(g), Delta H < 0. Để tăng hiệu suất tạo NH3, cần áp dụng biện pháp nào sau đây?",
        options: [
          "Tăng nhiệt độ và giảm áp suất hệ phản ứng.",
          "Giảm nhiệt độ và tăng áp suất hệ phản ứng.",
          "Tăng nhiệt độ và tăng áp suất hệ phản ứng.",
          "Thêm chất xúc tác và giảm áp suất hệ phản ứng."
        ],
        ans: 1,
        explain: "Phản ứng toả nhiệt (Delta H < 0), nên giảm nhiệt độ cân bằng chuyển dịch sang chiều thuận. Vế trái có 4 mol khí, vế phải có 2 mol khí, nên tăng áp suất cân bằng chuyển dịch sang chiều thuận (giảm số mol khí)."
      },
      {
        q: "Biểu thức hằng số cân bằng Kc của phản ứng: C(s) + CO2(g) <=> 2CO(g) là:",
        options: [
          "$$K_c = \\frac{[\\text{CO}]^2}{[\\text{C}] \\cdot [\\text{CO}_2]}$$",
          "$$K_c = \\frac{[\\text{CO}_2]}{[\\text{CO}]^2}$$",
          "$$K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$$",
          "$$K_c = \\frac{2[\\text{CO}]}{[\\text{CO}_2]}$$"
        ],
        ans: 2,
        explain: "Chất rắn C(s) tinh khiết không đưa vào biểu thức hằng số cân bằng nồng độ, nên $$K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$$."
      }
    ]
  },

  2: {
    num: 2,
    chapter: 1,
    chapterTitle: "Chương 1. Cân bằng hoá học",
    title: "Cân bằng trong dung dịch nước",
    badge: "Lí thuyết & Tính toán",
    summary: "Nắm vững bản chất sự điện li, thuyết acid - base của Brønsted - Lowry, tích số ion của nước, thang pH, phản ứng thuỷ phân muối và phương pháp chuẩn độ acid - base.",
    objectives: [
      "Giải thích hiện tượng dẫn điện của dung dịch chất điện li và phân loại chất điện li mạnh, chất điện li yếu.",
      "Vận dụng thuyết Brønsted - Lowry để xác định acid (cho proton), base (nhận proton) và chất lưỡng tính.",
      "Hiểu ý nghĩa tích số ion của nước Kw = 10^-14, tính pH và nhận biết môi trường dung dịch qua chỉ thị màu.",
      "Giải thích hiện tượng thuỷ phân của ion muối và ứng dụng xử lí đất chua, làm mềm nước.",
      "Thực hiện thành thạo và an toàn quy trình chuẩn độ acid - base bằng burette."
    ],
    sections: [
      {
        heading: "1. Sự điện li & Phân loại chất điện li",
        type: "list",
        items: [
          {
            title: "Khái niệm sự điện li",
            desc: "Sự điện li là quá trình phân li các chất thành các ion dương (cation) và ion âm (anion) khi tan trong nước. Sự chuyển động tự do của các ion mang điện tích làm cho dung dịch có khả năng dẫn điện.\n• Chất điện li: Acid, base, muối khi tan trong nước phân li thành ion.\n• Chất không điện li: Đường saccharose (C12H22O11), ethanol (C2H5OH), glycerol khi tan chỉ phân tán thành các phân tử trung hoà, dung dịch không dẫn điện."
          },
          {
            title: "Chất điện li mạnh (mũi tên một chiều ->)",
            desc: "Chất khi tan trong nước, hầu hết các phân tử hoà tan đều phân li hoàn toàn thành ion (độ điện li alpha = 1).\n• Acid mạnh: HCl, HNO3, H2SO4, HBr, HI, HClO4.\n• Base mạnh: LiOH, NaOH, KOH, Ba(OH)2, Ca(OH)2.\n• Hầu hết các muối tan: NaCl, KNO3, Na2SO4, K2CO3.\n• Ví dụ phương trình: NaCl(aq) -> Na+(aq) + Cl-(aq); Ba(OH)2(aq) -> Ba2+(aq) + 2OH-(aq)."
          },
          {
            title: "Chất điện li yếu (mũi tên thuận nghịch <=>)",
            desc: "Chất khi tan trong nước chỉ có một phần nhỏ phân tử phân li thành ion, phần còn lại vẫn tồn tại dưới dạng phân tử trung hoà trong dung dịch (độ điện li 0 < alpha < 1).\n• Acid yếu: CH3COOH, HF, H2CO3, H2SO3, H2S, HNO2, HCN.\n• Base yếu: NH3, Cu(OH)2, Fe(OH)3, Al(OH)3.\n• Ví dụ phương trình: CH3COOH(aq) <=> CH3COO-(aq) + H+(aq); NH3 + H2O <=> NH4+ + OH-."
          },
          {
            title: "Phương trình ion rút gọn",
            desc: "Mô tả đúng bản chất phản ứng trao đổi ion trong dung dịch, chỉ giữ lại các ion hoặc chất kết tủa, khí, điện li yếu trực tiếp biến đổi.\n• Ví dụ phản ứng trung hoà: H+(aq) + OH-(aq) -> H2O(l)\n• Ví dụ tạo kết tủa: Ba2+(aq) + SO4^2-(aq) -> BaSO4(s) vạch trắng."
          }
        ]
      },
      {
        heading: "2. Thuyết Acid - Base của Brønsted - Lowry",
        type: "grid",
        items: [
          {
            badge: "Định nghĩa tổng quát",
            title: "Acid là chất cho H+, Base là chất nhận H+",
            points: [
              "Acid: Là phân tử hoặc ion có khả năng cho proton (H+).",
              "Base: Là phân tử hoặc ion có khả năng nhận proton (H+).",
              "Ví dụ 1: HCl + H2O -> H3O+ + Cl- (HCl đóng vai trò acid, H2O nhận H+ đóng vai trò base).",
              "Ví dụ 2: NH3 + H2O <=> NH4+ + OH- (NH3 nhận H+ là base, H2O nhường H+ là acid).",
              "Ưu điểm so với Arrhenius: Giải thích được tính base của NH3, ion CO3^2-, CH3COO- trong dung dịch không cần chứa nhóm OH trong công thức."
            ]
          },
          {
            badge: "Chất lưỡng tính",
            title: "Chất vừa cho vừa nhận proton",
            points: [
              "H2O là dung môi lưỡng tính: Có thể nhường H+ (thành OH-) hoặc nhận H+ (thành H3O+).",
              "Anion chứa hydro của acid yếu: HCO3-, HSO3-, HS-, H2PO4-.",
              "Ví dụ HCO3- với acid: HCO3- + H+ -> CO2 + H2O (nhận H+ => tính base).",
              "Ví dụ HCO3- với kiềm: HCO3- + OH- -> CO3^2- + H2O (nhường H+ => tính acid)."
            ]
          }
        ]
      },
      {
        heading: "3. Nước, thang pH & Thuỷ phân muối",
        type: "list",
        items: [
          {
            title: "Tích số ion của nước (Kw)",
            desc: "Nước là chất điện li vô cùng yếu: H2O <=> H+ + OH-.\n• Ở 25°C, tích số ion của nước là hằng số: Kw = [H+] * [OH-] = 1,0 * 10^-14.\n• Trong nước tinh khiết (môi trường trung tính): [H+] = [OH-] = 1,0 * 10^-7 M."
          },
          {
            title: "Khái niệm & Thang đo pH",
            desc: "pH là đại lượng dùng để biểu thị nồng độ ion H+ trong dung dịch: pH = -lg[H+], tương đương [H+] = 10^-pH.\n• Môi trường acid: [H+] > 10^-7 M <=> pH < 7 (pH càng nhỏ tính acid càng mạnh).\n• Môi trường trung tính: [H+] = 10^-7 M <=> pH = 7.\n• Môi trường base: [H+] < 10^-7 M <=> [OH-] > 10^-7 M <=> pH > 7 (pH càng lớn tính base càng mạnh)."
          },
          {
            title: "Chất chỉ thị màu pH",
            desc: "• Quỳ tím: Hoá đỏ trong môi trường acid (pH < 5,0); hoá xanh trong môi trường base (pH > 8,3); giữ màu tím ở khoảng trung tính.\n• Phenolphthalein: Không màu trong dung dịch acid và trung tính; chuyển sang màu hồng cánh sen trong môi trường base (pH >= 8,3).\n• Chất chỉ thị tự nhiên: Sắc tố Anthocyanin trong bắp cải tím, hoa đậu biếc chuyển màu đỏ tươi khi gặp acid (chanh, giấm) và chuyển xanh lá/xanh lam khi gặp base (xà phòng, nước vôi)."
          },
          {
            title: "Sự thuỷ phân muối & Ứng dụng thực tế",
            desc: "Phản ứng trao đổi ion giữa muối hoà tan với nước làm thay đổi nồng độ H+ hoặc OH-, tạo môi trường acid hoặc base:\n• Muối tạo bởi base mạnh và acid yếu (Na2CO3, CH3COONa): Anion acid yếu nhận H+ của nước, giải phóng OH- => dung dịch có tính base (pH > 7). Ví dụ: CO3^2- + H2O <=> HCO3- + OH-.\n• Muối tạo bởi base yếu và acid mạnh (NH4Cl, AlCl3, FeCl3): Cation kim loại/ammonium nhường H+ cho nước => dung dịch có tính acid (pH < 7). Ví dụ: Al^3+ + 3H2O <=> Al(OH)3 + 3H+.\n• Muối tạo bởi acid mạnh và base mạnh (NaCl, KNO3): Các ion không bị thuỷ phân, dung dịch trung tính (pH = 7).\n• Ứng dụng nông nghiệp: Đất chua chứa nhiều ion Al^3+, Fe^3+ gây acid hoá đất. Bón vôi tôi Ca(OH)2 hoặc vôi bột CaO giúp trung hoà H+, nâng pH đất về ngưỡng thích hợp cho cây trồng (lúa: pH 5,5-6,5; chè: pH 4,5-5,5)."
          }
        ]
      },
      {
        heading: "4. Chuẩn độ Acid - Base",
        type: "grid",
        items: [
          {
            badge: "Nguyên tắc & Công thức",
            title: "Định lượng bằng dung dịch chuẩn",
            points: [
              "Nguyên tắc: Dùng dung dịch base đã biết chính xác nồng độ (dung dịch chuẩn) để xác định nồng độ của dung dịch acid chưa biết, hoặc ngược lại.",
              "Thời điểm kết thúc: Điểm tương đương là thời điểm lượng acid vừa phản ứng hết với lượng base theo đúng tỉ lệ phương trình.",
              "Xác định điểm tương đương bằng sự đổi màu rõ rệt của chất chỉ thị thích hợp (phenolphthalein).",
              "Công thức tương đương: CHCl * VHCl = CNaOH * VNaOH (với phản ứng đơn acid - đơn base tỉ lệ 1:1)."
            ]
          },
          {
            badge: "Quy trình thực nghiệm",
            title: "Thao tác trên Burette & An toàn",
            points: [
              "Dụng cụ: Burette 25 mL chia vạch 0,1 mL, bình tam giác (erlen) 100 mL, pipette định mức 10 mL, quả bóp cao su.",
              "Thao tác: Dùng pipette lấy chính xác 10,0 mL dung dịch HCl cần định lượng cho vào bình tam giác, nhỏ 1-2 giọt phenolphthalein. Nạp NaOH 0,1 M vào burette, chỉnh vạch về 0.",
              "Chuẩn độ: Tay trái mở khoá burette nhỏ từng giọt NaOH, tay phải lắc đều bình tam giác. Dừng chuẩn độ ngay khi dung dịch xuất hiện màu hồng nhạt bền trong khoảng 15-20 giây.",
              "Đọc mức thể tích VNaOH tiêu tốn ngang tầm mắt; lặp lại thí nghiệm 3 lần lấy giá trị trung bình.",
              "An toàn: Đeo kính bảo hộ, găng tay chống hoá chất; nếu dung dịch acid/base dính vào da, rửa ngay lập tức dưới vòi nước sạch nhiều lần."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Theo thuyết Brønsted - Lowry, ion nào sau đây là ion lưỡng tính?",
        options: [
          "CO3^2-",
          "HCO3^-",
          "SO4^2-",
          "NH4^+"
        ],
        ans: 1,
        explain: "Ion HCO3- vừa có khả năng nhường H+ tạo CO3^2- (tính acid), vừa có khả năng nhận H+ tạo CO2 + H2O (tính base) nên là ion lưỡng tính."
      },
      {
        q: "Dung dịch chất nào sau đây có giá trị pH lớn hơn 7?",
        options: [
          "NaCl",
          "NH4Cl",
          "Na2CO3",
          "AlCl3"
        ],
        ans: 2,
        explain: "Na2CO3 là muối tạo bởi base mạnh NaOH và acid yếu H2CO3, ion CO3^2- bị thuỷ phân tạo OH- làm cho pH > 7."
      },
      {
        q: "Trộn 100 mL dung dịch HCl 0,1 M với 100 mL dung dịch NaOH 0,3 M thu được 200 mL dung dịch X. Giá trị pH của dung dịch X là:",
        options: [
          "1,0",
          "7,0",
          "12,0",
          "13,0"
        ],
        ans: 3,
        explain: "n(H+) = 0,01 mol; n(OH-) = 0,03 mol => OH- dư = 0,02 mol trong V = 0,2 L => [OH-] = 0,1 M => pOH = 1 => pH = 14 - 1 = 13,0."
      }
    ]
  },

  3: {
    num: 3,
    chapter: 1,
    chapterTitle: "Chương 1. Cân bằng hoá học",
    title: "Ôn tập chương 1",
    badge: "Hệ thống & Bài tập",
    summary: "Tổng kết toàn bộ kiến thức cốt lõi Chương 1: Cân bằng hoá học, hằng số Kc, nguyên lí Le Chatelier, điện li, thuyết Brønsted - Lowry, pH, thuỷ phân muối và chuẩn độ acid - base.",
    objectives: [
      "Hệ thống hoá mối liên hệ giữa các khái niệm cân bằng hoá học và cân bằng trong dung dịch nước.",
      "Thành thạo các dạng bài tập định tính: dự đoán chiều dịch chuyển cân bằng khi thay đổi điều kiện.",
      "Giải quyết các bài toán định lượng: tính hằng số cân bằng Kc, nồng độ cân bằng, hiệu suất phản ứng, tính pH của dung dịch acid/base và bài toán chuẩn độ."
    ],
    sections: [
      {
        heading: "1. Sơ đồ tư duy cốt lõi Chương 1",
        type: "grid",
        items: [
          {
            badge: "Mảng 1: Cân bằng hoá học",
            title: "Trọng tâm cần nhớ",
            points: [
              "Phản ứng thuận nghịch <=> Cân bằng động (vt = vn).",
              "Hằng số Kc = ([C]^c * [D]^d) / ([A]^a * [B]^b) (bỏ qua chất rắn tinh khiết).",
              "Le Chatelier: Tăng T -> chiều thu nhiệt; Tăng P -> chiều giảm số mol khí; Tăng nồng độ chất -> chiều tiêu thụ chất đó.",
              "Xúc tác: Tăng tốc độ đạt cân bằng, KHÔNG làm chuyển dịch vị trí cân bằng, KHÔNG đổi Kc."
            ]
          },
          {
            badge: "Mảng 2: Cân bằng trong nước",
            title: "Trọng tâm cần nhớ",
            points: [
              "Chất điện li: Mạnh (phân li hoàn toàn ->); Yếu (phân li một phần <=>).",
              "Brønsted - Lowry: Acid cho H+; Base nhận H+; Lưỡng tính (H2O, HCO3-, HSO3-).",
              "Thang pH: Kw = [H+][OH-] = 10^-14; pH = -lg[H+]; pH < 7 (acid), pH = 7 (trung tính), pH > 7 (base).",
              "Thuỷ phân: Cation base yếu -> tạo môi trường acid (pH < 7); Anion acid yếu -> tạo môi trường base (pH > 7).",
              "Chuẩn độ: CA * VA = CB * VB (với phản ứng đơn chức 1:1)."
            ]
          }
        ]
      },
      {
        heading: "2. Các dạng bài tập điển hình Chương 1",
        type: "list",
        items: [
          {
            title: "Dạng 1: Tính toán hằng số cân bằng Kc và nồng độ cân bằng",
            desc: "Phương pháp giải: Sử dụng bảng 3 dòng (Ban đầu - Phản ứng - Cân bằng).\n• Ví dụ: Cho phản ứng H2(g) + I2(g) <=> 2HI(g) ở 430°C có Kc = 54,3. Nếu ban đầu đưa vào bình 1,0 lít 0,5 mol H2 và 0,5 mol I2, hãy tính nồng độ các chất ở trạng thái cân bằng.\n• Đặt x là nồng độ H2 phản ứng: nồng độ cân bằng [H2] = 0,5 - x; [I2] = 0,5 - x; [HI] = 2x.\n• Biểu thức Kc = (2x)^2 / (0,5 - x)^2 = 54,3 => 2x / (0,5 - x) = 7,368 => x = 0,393 M.\n• Nồng độ cân bằng: [H2] = [I2] = 0,107 M; [HI] = 0,786 M."
          },
          {
            title: "Dạng 2: Dự đoán chiều chuyển dịch cân bằng theo Le Chatelier",
            desc: "Xét phản ứng tổng hợp ammonia: N2(g) + 3H2(g) <=> 2NH3(g), Delta H = -92 kJ.\n• Yêu cầu: Nêu các biện pháp để tăng hiệu suất tạo NH3 trong công nghiệp.\n• Giải thích: Phản ứng toả nhiệt nên cần hạ nhiệt độ (thực tế công nghiệp chọn 400-450°C để cân bằng tốc độ và hiệu suất); số mol khí giảm từ 4 xuống 2 nên cần tăng áp suất (150-200 bar); liên tục ngưng tụ hoá lỏng NH3 để tách ra khỏi hệ phản ứng làm giảm nồng độ NH3."
          },
          {
            title: "Dạng 3: Tính pH dung dịch acid mạnh, base mạnh và hỗn hợp sau trộn",
            desc: "• Acid mạnh đơn chức nồng độ C M: [H+] = C => pH = -lg(C).\n• Base mạnh đơn chức nồng độ C M: [OH-] = C => pOH = -lg(C) => pH = 14 - pOH.\n• Phản ứng trung hoà: Tính n(H+) và n(OH-). Tìm số mol dư, chia cho V tổng = V1 + V2 để tìm [H+] dư hoặc [OH-] dư rồi tính pH."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Cho phản ứng: Fe2O3(s) + 3CO(g) <=> 2Fe(s) + 3CO2(g), Delta H < 0. Tác động nào sau đây KHÔNG làm chuyển dịch cân bằng?",
        options: [
          "Tăng nhiệt độ của hệ phản ứng.",
          "Tăng áp suất chung của hệ phản ứng.",
          "Thêm khí CO2 vào hệ phản ứng.",
          "Giảm nồng độ khí CO trong bình."
        ],
        ans: 1,
        explain: "Hai vế phương trình có số mol khí bằng nhau (3 mol CO và 3 mol CO2, Fe2O3 và Fe là chất rắn), do đó thay đổi áp suất không làm chuyển dịch cân bằng."
      },
      {
        q: "Hòa tan hoàn toàn 0,04 gam NaOH vào nước thu được 1,0 lít dung dịch. Giá trị pH của dung dịch thu được là:",
        options: [
          "3,0",
          "11,0",
          "12,0",
          "13,0"
        ],
        ans: 1,
        explain: "n(NaOH) = 0,04 / 40 = 0,001 mol trong V = 1 L => [OH-] = 10^-3 M => pOH = 3 => pH = 14 - 3 = 11,0."
      },
      {
        q: "Để chuẩn độ 20,0 mL dung dịch H2SO4 chưa biết nồng độ, người ta dùng vừa hết 16,0 mL dung dịch NaOH 0,25 M. Nồng độ mol của dung dịch H2SO4 là:",
        options: [
          "0,10 M",
          "0,20 M",
          "0,05 M",
          "0,40 M"
        ],
        ans: 0,
        explain: "Phương trình: H2SO4 + 2NaOH -> Na2SO4 + 2H2O. Ta có: 2 * n(H2SO4) = n(NaOH) => 2 * (C * 0,020) = 0,25 * 0,016 = 0,004 => C = 0,10 M."
      }
    ]
  },

  4: {
    num: 4,
    chapter: 2,
    chapterTitle: "Chương 2. Nitrogen – Sulfur",
    title: "Nitrogen",
    badge: "Lí thuyết & Ứng dụng",
    summary: "Nghiên cứu vị trí, cấu hình electron, cấu tạo phân tử N2 với liên kết ba siêu bền, tính chất vật lí, tính trơ ở nhiệt độ thường, tính oxi hoá - khử ở nhiệt độ cao và ứng dụng.",
    objectives: [
      "Xác định vị trí, cấu hình electron của nguyên tử nitrogen và cấu tạo phân tử N2 với liên kết ba.",
      "Giải thích tính trơ hoá học của N2 ở nhiệt độ thường dựa vào năng lượng liên kết lớn (Eb = 945 kJ/mol).",
      "Viết phương trình phản ứng thể hiện tính oxi hoá (với H2, kim loại) và tính khử (với O2) của nitrogen.",
      "Trình bày các ứng dụng quan trọng của nitrogen trong công nghiệp và giải thích hiện tượng tự nhiên sấm sét tạo đạm."
    ],
    sections: [
      {
        heading: "1. Trạng thái tự nhiên & Cấu tạo phân tử",
        type: "grid",
        items: [
          {
            badge: "Tồn tại trong tự nhiên",
            title: "Trạng thái tự nhiên",
            points: [
              "Khí quyển: Chiếm khoảng 78,1% thể tích (75,5% khối lượng) không khí tự nhiên.",
              "Đồng vị bền: Chủ yếu là 14N (99,63%) và một lượng nhỏ 15N (0,37%).",
              "Hợp chất: Có trong khoáng vật diêm tiêu natri (NaNO3); trong cơ thể sinh vật, nitrogen chiếm khoảng 3% khối lượng, là nguyên tố cấu thành protein, nucleic acid (DNA, RNA)."
            ]
          },
          {
            badge: "Cấu tạo phân tử N2",
            title: "Liên kết ba bền vững",
            points: [
              "Nguyên tử N (Z = 7): Cấu hình electron 1s2 2s2 2p3, có 5 electron lớp ngoài cùng, thuộc chu kì 2, nhóm VA.",
              "Công thức electron: :N:::N:, công thức cấu tạo: N≡N.",
              "Liên kết ba gồm 1 liên kết sigma (σ) và 2 liên kết pi (π).",
              "Năng lượng liên kết cực lớn (Eb = 945 kJ/mol) => phân tử N2 rất bền, trơ về mặt hoá học ở nhiệt độ thường, chỉ phản ứng ở nhiệt độ cao hoặc có tia lửa điện/xúc tác."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất vật lí & Hoá học",
        type: "list",
        items: [
          {
            title: "Tính chất vật lí",
            desc: "Khí không màu, không mùi, không vị, nhẹ hơn không khí (d = 28/29), rất ít tan trong nước (1 lít nước hoà tan được 15 mL N2 ở 20°C). Hoá lỏng ở -196°C và đông đặc ở -210°C. Nitrogen không duy trì sự cháy và sự hô hấp."
          },
          {
            title: "Tính oxi hoá (Số oxi hoá giảm từ 0 xuống -3)",
            desc: "• Tác dụng với hydrogen: N2(g) + 3H2(g) <=> 2NH3(g) (điều kiện: 400-450°C, 150-200 bar, xúc tác bột Fe). Phản ứng toả nhiệt, là nền tảng công nghiệp sản xuất phân đạm.\n• Tác dụng với kim loại mạnh (ở nhiệt độ cao): 3Mg + N2 -> Mg3N2 (magnesium nitride); đặc biệt với lithium, phản ứng xảy ra ngay ở nhiệt độ thường: 6Li + N2 -> 2Li3N."
          },
          {
            title: "Tính khử (Số oxi hoá tăng từ 0 lên +2)",
            desc: "Tác dụng với oxygen ở nhiệt độ trên 3000°C hoặc khi có tia lửa điện (sét đánh):\n• N2(g) + O2(g) <=> 2NO(g) (nitric oxide, không màu).\n• Ngay sau đó, ở điều kiện thường, NO phản ứng tức khắc với O2 không khí: 2NO(g) + O2(g) -> 2NO2(g) (nitrogen dioxide, màu nâu đỏ).\n• Cơ chế tạo đạm tự nhiên: Khi trời mưa dông có sấm sét, NO2 kết hợp với O2 và nước mưa tạo HNO3: 4NO2 + O2 + 2H2O -> 4HNO3. Acid rơi xuống đất chuyển hoá thành muối nitrate (NO3-), cung cấp nguồn phân đạm tự nhiên cực kì quý báu cho cây trồng ('Lúa chiêm lấp ló đầu bờ - Hễ nghe tiếng sấm phất cờ mà lên')."
          }
        ]
      },
      {
        heading: "3. Ứng dụng & An toàn sinh học",
        type: "grid",
        items: [
          {
            badge: "Công nghiệp & Đời sống",
            title: "Ứng dụng của Nitrogen",
            points: [
              "Môi trường trơ: Đóng gói bảo quản thực phẩm (snack, ngũ cốc, dược phẩm) tránh bị oxi hoá và ôi thiu; nạp lốp xe đua, máy bay để tránh giãn nở nhiệt và ăn mòn cao su.",
              "Khí nitrogen lỏng: Dùng làm môi trường siêu lạnh (-196°C) để bảo quản mẫu sinh học (tinh trùng, noãn, mô ghép, vaccine), công nghệ da liễu trị liệu.",
              "Nguyên liệu hoá chất: Sản xuất ammonia (NH3), nitric acid (HNO3), phân bón đạm urê, ammonium."
            ]
          },
          {
            badge: "Y học & Thể thao",
            title: "Hội chứng giảm áp ở thợ lặn",
            points: [
              "Khi lặn sâu, áp suất nước cao làm một lượng lớn khí N2 hoà tan vào máu và mô cơ thể.",
              "Nếu thợ lặn nổi lên mặt nước quá nhanh, áp suất giảm đột ngột khiến khí N2 hoà tan giải phóng ra tạo thành các bọt khí trong mạch máu.",
              "Các bọt khí này gây tắc mạch, chèn ép dây thần kinh dẫn đến đau nhức xương khớp, tổn thương não, liệt hoặc tử vong (Bends decompression sickness).",
              "Phòng ngừa: Thợ lặn phải trồi lên từ từ theo từng chặng giải áp đúng quy trình an toàn."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Ở nhiệt độ thường, phân tử nitrogen (N2) rất trơ về mặt hoá học là do nguyên nhân nào sau đây?",
        options: [
          "Nitrogen có độ âm điện lớn nhất trong nhóm VA.",
          "Phân tử N2 có liên kết ba với năng lượng liên kết rất lớn.",
          "Nitrogen có bán kính nguyên tử rất nhỏ.",
          "Phân tử N2 không phân cực và rất nhẹ."
        ],
        ans: 1,
        explain: "Liên kết ba N≡N có năng lượng liên kết Eb = 945 kJ/mol rất lớn, rất khó bị bẻ gãy ở nhiệt độ thường."
      },
      {
        q: "Trong phản ứng hoá học nào sau đây, nitrogen đóng vai trò là chất khử?",
        options: [
          "N2 + 3H2 <=> 2NH3",
          "N2 + O2 <=> 2NO",
          "N2 + 3Mg -> Mg3N2",
          "N2 + 6Li -> 2Li3N"
        ],
        ans: 1,
        explain: "Trong phản ứng với O2, số oxi hoá của N tăng từ 0 lên +2 trong NO, nên N2 là chất khử."
      },
      {
        q: "Ứng dụng nào sau đây KHÔNG phải là ứng dụng của khí nitrogen?",
        options: [
          "Làm môi trường trơ đóng gói bảo quản thực phẩm.",
          "Làm chất lỏng siêu lạnh bảo quản tinh trùng, mô sinh học.",
          "Duy trì sự hô hấp cho bệnh nhân suy tim phổi.",
          "Nguyên liệu tổng hợp ammonia trong công nghiệp."
        ],
        ans: 2,
        explain: "Nitrogen không duy trì sự hô hấp; chất duy trì sự hô hấp trong y tế là oxygen (O2)."
      }
    ]
  },

  5: {
    num: 5,
    chapter: 2,
    chapterTitle: "Chương 2. Nitrogen – Sulfur",
    title: "Ammonia – Muối ammonium",
    badge: "Lí thuyết & Thí nghiệm",
    summary: "Cấu trúc chóp tam giác của NH3, tính chất vật lí, tính base yếu, tính khử mạnh, quy trình Haber - Bosch và tính chất nhiệt phân của muối ammonium.",
    objectives: [
      "Mô tả cấu trúc phân tử ammonia (dạng chóp tam giác, còn 1 cặp e tự do) và liên kết hydrogen.",
      "Giải thích tính base yếu và tính khử của NH3 qua các phương trình phản ứng cụ thể.",
      "Trình bày điều kiện thoả hiệp trong quy trình Haber - Bosch tổng hợp ammonia công nghiệp.",
      "Nêu tính chất tan, phản ứng với dung dịch kiềm để nhận biết ion ammonium (NH4+) và tính kém bền nhiệt của muối ammonium."
    ],
    sections: [
      {
        heading: "1. Cấu tạo & Tính chất vật lí của Ammonia",
        type: "grid",
        items: [
          {
            badge: "Hình học phân tử",
            title: "Cấu tạo phân tử NH3",
            points: [
              "Nguyên tử N ở trạng thái lai hoá sp3, liên kết với 3 nguyên tử H bằng 3 liên kết cộng hoá trị phân cực N-H.",
              "Còn một cặp electron tự do chưa liên kết ở một đỉnh lai hoá.",
              "Phân tử có dạng hình chóp tam giác, góc liên kết H-N-H khoảng 107°.",
              "Khả năng tạo liên kết hydrogen liên phân tử mạnh mẽ giữa các phân tử NH3 và giữa NH3 với H2O."
            ]
          },
          {
            badge: "Đặc điểm vật lí",
            title: "Tính chất vật lí",
            points: [
              "Khí không màu, có mùi khai và xốc đặc trưng, nhẹ hơn không khí (d = 17/29).",
              "Khí NH3 tan vô cùng nhiều trong nước: Ở 20°C, 1 lít nước hoà tan được khoảng 700-800 lít khí NH3 (do tạo liên kết hydrogen mạnh với nước).",
              "Dễ hoá lỏng ở -33,3°C và đông đặc ở -77,7°C.",
              "Khi bay hơi, ammonia lỏng hấp thụ một lượng nhiệt lớn nên được ứng dụng làm chất làm lạnh trong các nhà máy nhiệt lạnh công nghiệp."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Ammonia",
        type: "list",
        items: [
          {
            title: "Tính base yếu (do cặp e tự do trên nguyên tử N)",
            desc: "• Tác dụng với nước: NH3 + H2O <=> NH4+ + OH-. Dung dịch ammonia có tính base yếu, làm quỳ tím chuyển xanh, phenolphthalein chuyển hồng.\n• Tác dụng với acid tạo muối ammonium: NH3(g) + HCl(g) -> NH4Cl(s) (hiện tượng khói trắng đặc trưng dùng nhận biết).\n• Tác dụng với dung dịch muối của kim loại có hydroxide kết tủa: AlCl3 + 3NH3 + 3H2O -> Al(OH)3 vạch keo trắng + 3NH4Cl."
          },
          {
            title: "Khả năng tạo phức chất tan",
            desc: "Ammonia hoà tan được kết tủa Cu(OH)2, AgCl do tạo phức chất tan đặc trưng:\n• Cu(OH)2 + 4NH3 -> [Cu(NH3)4](OH)2 (dung dịch phức màu xanh lam thẫm, nước Schweizer).\n• AgCl(s) + 2NH3 -> [Ag(NH3)2]Cl (phức chất tan không màu)."
          },
          {
            title: "Tính khử mạnh (Số oxi hoá của N là -3 thấp nhất)",
            desc: "• Cháy trong oxygen nguyên chất: 4NH3 + 3O2 --(t°)-> 2N2 + 6H2O (ngọn lửa màu vàng nhạt).\n• Oxi hoá có xúc tác (bước quan trọng trong sản xuất HNO3 quy trình Ostwald): 4NH3 + 5O2 --(850-900°C, Pt)-> 4NO + 6H2O.\n• Khử oxide kim loại ở nhiệt độ cao: 2NH3 + 3CuO --(t°)-> 3Cu (đỏ) + N2 + 3H2O."
          }
        ]
      },
      {
        heading: "3. Tổng hợp Ammonia & Muối Ammonium",
        type: "list",
        items: [
          {
            title: "Quy trình tổng hợp Haber - Bosch",
            desc: "Phương trình: N2(g) + 3H2(g) <=> 2NH3(g), Delta H = -92 kJ/mol.\n• Điều kiện tối ưu: Nhiệt độ 400 - 450°C, áp suất 150 - 200 bar, chất xúc tác là sắt (Fe) có thêm phụ gia Al2O3, K2O.\n• Thoả hiệp công nghệ: Hạ nhiệt độ thì cân bằng chuyển dịch tạo nhiều NH3 nhưng tốc độ phản ứng lại quá chậm; tăng áp suất tăng hiệu suất nhưng chi phí thiết bị nén rất đắt đỏ. Mức 400-450°C và 150-200 bar là sự thoả hiệp kinh tế tối ưu."
          },
          {
            title: "Tính chất của muối Ammonium (chứa ion NH4+)",
            desc: "• Tính tan: Tất cả các muối ammonium đều tan rất tốt trong nước và điện li hoàn toàn: NH4Cl -> NH4+ + Cl-.\n• Tác dụng với dung dịch kiềm (Phản ứng nhận biết ion NH4+): Khi đun nhẹ muối ammonium với dung dịch kiềm, giải phóng khí ammonia có mùi khai làm xanh quỳ tím ẩm: (NH4)2SO4 + 2NaOH --(t°)-> Na2SO4 + 2NH3↑ + 2H2O. Phương trình ion: NH4+ + OH- --(t°)-> NH3↑ + H2O.\n• Tính kém bền nhiệt: Hầu hết muối ammonium bị phân huỷ khi đun nóng.\n  + Muối của acid không có tính oxi hoá: NH4Cl(s) <=(t°)=> NH3(g) + HCl(g); (NH4)2CO3 --(t°)-> 2NH3 + CO2 + H2O.\n  + Muối của acid có tính oxi hoá: NH4NO3 --(t°)-> N2O + 2H2O; ở nhiệt độ cao (>300°C) có thể phát nổ dữ dội tạo N2, O2, H2O (tai nạn nổ kho hoá chất cảng Beirut 2020)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hiện tượng khói trắng xuất hiện khi đưa hai đầu đũa thuỷ tinh nhúng vào dung dịch HCl đặc và dung dịch NH3 đặc lại gần nhau là do sự tạo thành của:",
        options: [
          "Khí Cl2",
          "Hơi nước ngưng tụ",
          "Tinh thể NH4Cl",
          "Khí NH3 bay hơi"
        ],
        ans: 2,
        explain: "Khí NH3 và khí HCl bay hơi tác dụng với nhau tạo thành các hạt tinh thể rắn màu trắng li ti phân tán trong không khí giống như khói: NH3 + HCl -> NH4Cl."
      },
      {
        q: "Thuốc thử dùng để nhận biết ion ammonium (NH4+) trong dung dịch là:",
        options: [
          "Dung dịch BaCl2",
          "Dung dịch AgNO3",
          "Dung dịch kiềm (NaOH) đun nhẹ và quỳ tím ẩm",
          "Dung dịch phenolphtalein"
        ],
        ans: 2,
        explain: "Ion NH4+ tác dụng với OH- khi đun nóng sinh ra khí NH3 có mùi khai làm quỳ tím ẩm chuyển sang màu xanh."
      },
      {
        q: "Muối nào sau đây thường được dùng làm bột nở trong làm bánh do phân huỷ hoàn toàn thành các chất khí không độc khi nướng?",
        options: [
          "NH4NO3",
          "NH4HCO3",
          "NaNO3",
          "(NH4)2SO4"
        ],
        ans: 1,
        explain: "NH4HCO3 phân huỷ ở nhiệt độ trên 60°C thành NH3, CO2 và hơi nước thoát ra tạo độ xốp cho bánh: NH4HCO3 -> NH3 + CO2 + H2O."
      }
    ]
  },

  6: {
    num: 6,
    chapter: 2,
    chapterTitle: "Chương 2. Nitrogen – Sulfur",
    title: "Một số hợp chất của nitrogen với oxygen",
    badge: "Lí thuyết & Môi trường",
    summary: "Các oxide của nitrogen (NOx), nguyên nhân hình thành mưa acid, tính chất vật lí và hoá học của nitric acid (HNO3) và hiện tượng phú dưỡng (eutrophication).",
    objectives: [
      "Liệt kê các oxide của nitrogen (NOx), nguồn gốc phát thải tự nhiên và nhân tạo.",
      "Giải thích cơ chế hình thành mưa acid (pH < 5,6) và tác hại đối với môi trường, sinh vật, công trình kiến trúc.",
      "Nêu tính chất acid mạnh và tính oxi hoá cực mạnh của nitric acid (HNO3).",
      "Hiểu nguyên nhân, hậu quả và các biện pháp kiểm soát hiện tượng phú dưỡng nguồn nước."
    ],
    sections: [
      {
        heading: "1. Các oxide của Nitrogen (NOx) & Mưa acid",
        type: "list",
        items: [
          {
            title: "Khái niệm các hợp chất NOx",
            desc: "NOx là kí hiệu chung chỉ hỗn hợp các oxide của nitrogen trong khí quyển, bao gồm NO, NO2, N2O, N2O4, N2O3, N2O5; trong đó phổ biến và nguy hại nhất là NO và NO2.\n• Nguồn phát sinh tự nhiên: Sấm sét, hoạt động núi lửa phun trào, cháy rừng tự nhiên, phân huỷ vi sinh vật.\n• Nguồn phát sinh nhân tạo: Khí thải động cơ xe cơ giới đốt nhiên liệu hoá thạch ở nhiệt độ cao, nhà máy nhiệt điện, lò nung luyện kim, sản xuất hoá chất."
          },
          {
            title: "Hiện tượng mưa acid (Acid Rain)",
            desc: "Nước mưa bình thường có pH khoảng 5,6 (do hoà tan CO2 tạo acid yếu H2CO3). Nước mưa có pH dưới 5,6 được gọi là mưa acid.\n• Cơ chế tạo mưa acid do NOx: 2NO + O2 -> 2NO2; 4NO2 + O2 + 2H2O -> 4HNO3.\n• Tác hại: Phá huỷ lớp sáp bảo vệ lá cây làm chết rừng; làm chua đất và rò rỉ kim loại nặng độc hại (Al^3+, Cd^2+) vào nguồn nước ngầm; làm suy giảm pH ao hồ khiến cá và thuỷ sinh vật chết hàng loạt; ăn mòn các công trình bằng đá vôi (CaCO3 + 2H+ -> Ca2+ + CO2 + H2O) và kim loại (cầu đường, tượng đài)."
          }
        ]
      },
      {
        heading: "2. Nitric Acid (HNO3)",
        type: "grid",
        items: [
          {
            badge: "Tính chất vật lí",
            title: "Đặc điểm vật lí của HNO3",
            points: [
              "Chất lỏng không màu, bốc khói mạnh trong không khí ẩm, tan vô hạn trong nước.",
              "Khối lượng riêng d = 1,53 g/mL, sôi ở 83°C.",
              "Kém bền: Dưới tác dụng của ánh sáng hoặc nhiệt độ, HNO3 bị phân huỷ một phần tạo NO2 tan trong acid khiến dung dịch có màu vàng nâu: 4HNO3 -> 4NO2 + O2 + 2H2O.",
              "Bảo quản trong chai thuỷ tinh sẫm màu, để nơi thoáng mát, tránh ánh sáng."
            ]
          },
          {
            badge: "Tính chất hoá học",
            title: "Acid mạnh & Oxi hoá cực mạnh",
            points: [
              "Tính acid mạnh: Làm đỏ quỳ tím, tác dụng với basic oxide, base, muối carbonate.",
              "Tính oxi hoá cực mạnh (số oxi hoá +5): Oxi hoá hầu hết kim loại (trừ Au, Pt) và nhiều phi kim (C, S, P) lên mức oxi hoá cao nhất.",
              "Với Cu: Cu + 4HNO3 (đặc) -> Cu(NO3)2 + 2NO2↑ (nâu đỏ) + 2H2O.",
              "3Cu + 8HNO3 (loãng) -> 3Cu(NO3)2 + 2NO↑ (không màu hoá nâu) + 4H2O.",
              "Thụ động hoá: Fe, Al, Cr bị thụ động hoá trong HNO3 đặc nguội (tạo màng oxide bảo vệ)."
            ]
          }
        ]
      },
      {
        heading: "3. Hiện tượng phú dưỡng (Eutrophication)",
        type: "list",
        items: [
          {
            title: "Nguyên nhân gây phú dưỡng",
            desc: "Là hiện tượng nguồn nước (ao, hồ, đầm) bị dư thừa quá mức các chất dinh dưỡng, chủ yếu là các hợp chất của nitrogen (NO3-, NH4+) và phosphorus (PO4^3-).\n• Ngưỡng báo động: Sách giáo khoa nêu hàm lượng nitrogen vượt quá 300 µg/L và phosphorus vượt quá 20 µg/L.\n• Nguồn ô nhiễm: Dư thừa phân bón hoá học từ ruộng đồng bị nước mưa rửa trôi; nước thải sinh hoạt chưa qua xử lí chứa nhiều bột giặt; chất thải từ các đầm nuôi trồng thuỷ sản công nghiệp."
          },
          {
            title: "Hậu quả & Biện pháp khắc phục",
            desc: "• Hậu quả: Hiện tượng 'tảo nở hoa' (algal bloom) bùng phát làm mặt nước phủ kín lớp tảo dày, ngăn cản ánh sáng mặt trời xuống tầng nước sâu; khi tảo chết, quá trình phân huỷ hiếu khí tiêu thụ cạn kiệt nguồn oxygen hoà tan (DO) khiến cá, tôm chết ngạt hàng loạt; tạo bùn lắng độc hại chứa khí H2S, CH4 bốc mùi hôi thối.\n• Biện pháp: Sử dụng phân bón đúng liều lượng kĩ thuật; thu gom và xử lí triệt để nước thải sinh hoạt và công nghiệp trước khi xả ra môi trường; nạo vét bùn đáy định kì và trồng các loài thực vật thuỷ sinh có khả năng hấp thụ dưỡng chất (bèo tây, sen, súng)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Dung dịch nitric acid đặc để lâu ngày trong chai thuỷ tinh trong suốt thường ngả sang màu vàng nhạt là do:",
        options: [
          "Acid bị bốc hơi bớt nước.",
          "Acid hấp thụ khí oxygen trong không khí.",
          "Acid bị phân huỷ một phần giải phóng khí NO2 màu nâu đỏ tan lại trong acid.",
          "Acid tác dụng với chất liệu thuỷ tinh."
        ],
        ans: 2,
        explain: "Dưới tác dụng của ánh sáng: 4HNO3 -> 4NO2 + O2 + 2H2O. Khí NO2 màu nâu đỏ sinh ra tan trong dung dịch acid làm acid có màu vàng."
      },
      {
        q: "Kim loại nào sau đây bị thụ động hoá trong dung dịch HNO3 đặc, nguội?",
        options: [
          "Cu",
          "Al",
          "Ag",
          "Mg"
        ],
        ans: 1,
        explain: "Al, Fe, Cr bị thụ động hoá trong dung dịch HNO3 đặc nguội và H2SO4 đặc nguội do tạo lớp màng oxide trơ bảo vệ."
      },
      {
        q: "Hai nguyên tố dinh dưỡng chính trực tiếp gây ra hiện tượng phú dưỡng nguồn nước là:",
        options: [
          "Carbon và Hydrogen",
          "Nitrogen và Phosphorus",
          "Potassium và Sulfur",
          "Calcium và Magnesium"
        ],
        ans: 1,
        explain: "Dư thừa các hợp chất chứa Nitrogen (nitrate, ammonium) và Phosphorus (phosphate) là nguyên nhân gây hiện tượng phú dưỡng."
      }
    ]
  },

  7: {
    num: 7,
    chapter: 2,
    chapterTitle: "Chương 2. Nitrogen – Sulfur",
    title: "Sulfur và sulfur dioxide",
    badge: "Lí thuyết & Ứng dụng",
    summary: "Nghiên cứu đơn chất sulfur (S8), tính oxi hoá và tính khử; sulfur dioxide (SO2) với tính oxide acid, tính oxi hoá - khử, nguồn phát thải và các biện pháp giảm thiểu ô nhiễm.",
    objectives: [
      "Mô tả trạng thái tự nhiên, cấu tạo phân tử đơn chất sulfur (dạng vòng S8).",
      "Viết phương trình phản ứng minh hoạ tính oxi hoá (với kim loại, H2) và tính khử (với O2, F2) của sulfur.",
      "Trình bày tính chất của sulfur dioxide (SO2), vừa có tính oxi hoá vừa có tính khử.",
      "Nêu các nguồn phát thải SO2 và giải pháp giảm thiểu khí thải sulfur bảo vệ môi trường không khí."
    ],
    sections: [
      {
        heading: "1. Đơn chất Sulfur (Lưu huỳnh)",
        type: "grid",
        items: [
          {
            badge: "Trạng thái & Cấu tạo",
            title: "Trạng thái tự nhiên & Cấu tạo",
            points: [
              "Tự nhiên: Tồn tại dạng đơn chất ở các mỏ lưu huỳnh lớn gần núi lửa; dạng hợp chất trong quặng sulfide (pyrite FeS2, chalcopyrite CuFeS2, galena PbS) và sulfate (thạch cao CaSO4.2H2O, barite BaSO4).",
              "Chiếm khoảng 0,03-0,1% khối lượng vỏ Trái Đất; có trong cơ thể người (khoảng 0,2% khối lượng) ở tóc, móng, protein.",
              "Cấu tạo phân tử: Ở nhiệt độ thường gồm 8 nguyên tử S liên kết cộng hoá trị tạo mạch vòng vương miện (S8). Trong phản ứng thường viết đơn giản là S.",
              "Vật lí: Chất rắn màu vàng, giòn, không tan trong nước, tan tốt trong dung môi không phân cực (benzen, carbon disulfide CS2)."
            ]
          },
          {
            badge: "Tính chất hoá học",
            title: "Tính oxi hoá & Tính khử",
            points: [
              "Số oxi hoá trung gian: S có các số oxi hoá -2, 0, +4, +6 => Vừa có tính oxi hoá vừa có tính khử.",
              "Tính oxi hoá (tác dụng kim loại, H2): H2 + S --(t°)-> H2S (khí mùi trứng thối); Fe + S --(t°)-> FeS; đặc biệt tác dụng với thuỷ ngân ngay nhiệt độ thường: Hg + S -> HgS (dùng thu hồi thuỷ ngân vỡ nhiệt kế an toàn).",
              "Tính khử (tác dụng phi kim mạnh hơn): S + O2 --(t°)-> SO2; S + 3F2 -> SF6.",
              "Ứng dụng: Khoảng 90% lượng sulfur dùng sản xuất H2SO4; còn lại dùng lưu hoá cao su (tạo cầu nối disulfide), sản xuất diêm, thuốc súng đen, thuốc diệt nấm mốc."
            ]
          }
        ]
      },
      {
        heading: "2. Sulfur Dioxide (SO2)",
        type: "list",
        items: [
          {
            title: "Tính chất vật lí & Tính oxide acid",
            desc: "• Khí không màu, mùi hắc nồng, nặng hơn không khí (d = 64/29), tan nhiều trong nước (ở 20°C, 1 lít nước hoà tan 40 lít SO2). Khí rất độc, hít phải gây viêm đường hô hấp cấp và co thắt phế quản.\n• Tính oxide acid: Tan trong nước tạo acid yếu, không bền là sulfurous acid: SO2 + H2O <=> H2SO3. Tác dụng với dung dịch kiềm tạo 2 loại muối: muối hydrogen sulfite (HSO3-) hoặc sulfite (SO3^2-): SO2 + NaOH -> NaHSO3; SO2 + 2NaOH -> Na2SO3 + H2O."
          },
          {
            title: "Tính oxi hoá và tính khử của SO2 (Số oxi hoá +4 trung gian)",
            desc: "• Tính khử (khi gặp chất oxi hoá mạnh, số oxi hoá tăng lên +6): SO2 làm mất màu vàng nâu của nước bromine: SO2 + Br2 + 2H2O -> 2HBr + H2SO4; làm mất màu tím dung dịch thuốc tím: 5SO2 + 2KMnO4 + 2H2O -> K2SO4 + 2MnSO4 + 2H2SO4; phản ứng tạo SO3 trong sản xuất H2SO4: 2SO2 + O2 <=(V2O5, t°)=> 2SO3.\n• Tính oxi hoá (khi gặp chất khử mạnh, số oxi hoá giảm xuống 0): SO2 + 2H2S -> 3S vạch vàng + 2H2O (phản ứng Claus thu hồi sulfur trong công nghiệp lọc hoá dầu)."
          },
          {
            title: "Tác hại môi trường & Giải pháp giảm thiểu",
            desc: "• Tác hại: SO2 là nguyên nhân hàng đầu gây mưa acid (SO2 -> SO3 -> H2SO4), ăn mòn kim loại, phá huỷ rừng cây và các di tích đá cẩm thạch.\n• Nguồn phát thải: Đốt than đá và dầu mỏ chứa lưu huỳnh trong nhà máy nhiệt điện; khí thải luyện kim từ quặng sulfide (ZnS, PbS, CuFeS2); lò đốt rác công nghiệp.\n• Giải pháp: Thay thế nhiên liệu hoá thạch bằng năng lượng tái tạo (điện gió, mặt trời); xử lí khí thải bằng phương pháp khử lưu huỳnh (FGD - Flue Gas Desulfurization) dùng đá vôi hoặc sữa vôi: CaCO3 + SO2 + 1/2 O2 -> CaSO4 + CO2 (tận dụng thạch cao làm vật liệu xây dựng)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để xử lí thuỷ ngân (Hg) rơi vãi khi nhiệt kế thuỷ ngân bị vỡ trong phòng thí nghiệm, phương pháp an toàn và hiệu quả nhất là:",
        options: [
          "Dùng chổi quét và gom lại vào thùng rác.",
          "Rắc bột lưu huỳnh (sulfur) lên giọt thuỷ ngân rồi gom lại.",
          "Dùng máy hút bụi hút sạch các hạt thuỷ ngân.",
          "Đổ dung dịch HCl đặc lên thuỷ ngân."
        ],
        ans: 1,
        explain: "Sulfur phản ứng dễ dàng với thuỷ ngân ngay ở nhiệt độ thường tạo thành hợp chất HgS không bay hơi và không độc: Hg + S -> HgS."
      },
      {
        q: "Trong phản ứng: SO2 + 2H2S -> 3S + 2H2O, khí SO2 thể hiện tính chất nào?",
        options: [
          "Chất khử",
          "Chất oxi hoá",
          "Vừa là chất oxi hoá vừa là chất khử",
          "Oxide acid không có tính oxi hoá khử"
        ],
        ans: 1,
        explain: "Số oxi hoá của S trong SO2 giảm từ +4 xuống 0 trong S đơn chất, nên SO2 đóng vai trò là chất oxi hoá."
      },
      {
        q: "Thuốc thử nào sau đây dùng để phân biệt khí SO2 và khí CO2?",
        options: [
          "Dung dịch nước vôi trong Ca(OH)2",
          "Dung dịch Ba(OH)2",
          "Dung dịch nước bromine (Br2)",
          "Dung dịch quỳ tím"
        ],
        ans: 2,
        explain: "Cả hai khí đều làm đục nước vôi trong, nhưng chỉ có SO2 có tính khử làm mất màu nước bromine: SO2 + Br2 + 2H2O -> 2HBr + H2SO4; CO2 không phản ứng."
      }
    ]
  },

  8: {
    num: 8,
    chapter: 2,
    chapterTitle: "Chương 2. Nitrogen – Sulfur",
    title: "Sulfuric acid và muối sulfate",
    badge: "Lí thuyết & Sản xuất",
    summary: "Tính chất của H2SO4 loãng và đặc, tính háo nước cực mạnh, quy tắc pha loãng an toàn, công nghệ sản xuất H2SO4 bằng phương pháp tiếp xúc và ứng dụng muối sulfate.",
    objectives: [
      "Trình bày tính chất vật lí, tính acid mạnh của H2SO4 loãng; tính oxi hoá cực mạnh và tính háo nước của H2SO4 đặc.",
      "Thực hiện chính xác quy tắc pha loãng acid sulfuric đặc và các biện pháp sơ cứu khi bị bỏng acid.",
      "Mô tả 3 giai đoạn của phương pháp tiếp xúc sản xuất H2SO4 trong công nghiệp.",
      "Nêu ứng dụng của một số muối sulfate quan trọng (BaSO4, CaSO4, (NH4)2SO4, MgSO4) và cách nhận biết ion SO4^2- bằng ion Ba^2+."
    ],
    sections: [
      {
        heading: "1. Tính chất vật lí & Quy tắc pha loãng an toàn",
        type: "grid",
        items: [
          {
            badge: "Vật lí & Đặc tính",
            title: "Tính chất vật lí của H2SO4",
            points: [
              "Chất lỏng sánh như dầu, không màu, không mùi, không bay hơi, khối lượng riêng nặng (d = 1,84 g/mL đối với acid 98%).",
              "Hút ẩm cực mạnh: Dùng làm khô nhiều chất khí không phản ứng với acid.",
              "Tan vô hạn trong nước và toả ra một lượng nhiệt cực kì lớn do tạo thành các hydrate bền vững H2SO4.nH2O."
            ]
          },
          {
            badge: "QUY TẮC SỐNG CÒN",
            title: "Pha loãng H2SO4 đặc",
            points: [
              "QUY TẮC BẮT BUỘC: Rót từ từ acid đặc vào nước dọc theo đũa thuỷ tinh và khuấy đều.",
              "TUYỆT ĐỐI KHÔNG làm ngược lại (không rót nước vào acid đặc): Vì nước nhẹ hơn sẽ nổi lên trên, nhiệt toả ra cực lớn làm nước sôi đột ngột và bắn tung toé acid đặc ra xung quanh gây bỏng nặng.",
              "Sơ cứu bỏng acid: Ngay lập tức xối rửa vết bỏng dưới vòi nước sạch chảy liên tục ít nhất 15-20 phút, sau đó trung hoà nhẹ bằng dung dịch NaHCO3 loãng (khoảng 2%), rồi chuyển ngay đến cơ sở y tế gần nhất."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Sulfuric Acid",
        type: "list",
        items: [
          {
            title: "Dung dịch H2SO4 loãng: Tính acid mạnh",
            desc: "Phân li hoàn toàn nấc 1 và mạnh ở nấc 2: H2SO4 -> H+ + HSO4-; HSO4- <=> H+ + SO4^2-.\n• Làm quỳ tím hoá đỏ rực rỡ.\n• Tác dụng với kim loại đứng trước H giải phóng khí H2: Zn + H2SO4 -> ZnSO4 + H2↑.\n• Tác dụng với basic oxide và base: CuO + H2SO4 -> CuSO4 (xanh lam) + H2O; Ba(OH)2 + H2SO4 -> BaSO4↓ + 2H2O.\n• Tác dụng với muối: Na2CO3 + H2SO4 -> Na2SO4 + CO2↑ + H2O; BaCl2 + H2SO4 -> BaSO4↓ trắng + 2HCl."
          },
          {
            title: "Dung dịch H2SO4 đặc: Tính oxi hoá cực mạnh (S ở mức +6)",
            desc: "• Oxi hoá hầu hết kim loại (trừ Au, Pt), không giải phóng H2 mà tạo sản phẩm khử SO2 (hoặc S, H2S):\n  Cu + 2H2SO4 (đặc) --(t°)-> CuSO4 + SO2↑ + 2H2O.\n• Oxi hoá phi kim: C + 2H2SO4 (đặc) --(t°)-> CO2 + 2SO2 + 2H2O; S + 2H2SO4 (đặc) --(t°)-> 3SO2 + 2H2O.\n• Oxi hoá hợp chất khử: 2FeO + 4H2SO4 (đặc) --(t°)-> Fe2(SO4)3 + SO2 + 4H2O.\n• Thụ động hoá: Fe, Al, Cr bị thụ động hoá trong H2SO4 đặc, nguội."
          },
          {
            title: "Dung dịch H2SO4 đặc: Tính háo nước mãnh liệt",
            desc: "Hút nước từ các hợp chất hữu cơ (đường saccharose, tinh bột, cellulose) biến chúng thành than đen (cacbon hoá):\n• C12H22O11 --(H2SO4 đặc)-> 12C + 11H2O.\n• Một phần carbon vừa sinh ra tiếp tục bị H2SO4 đặc oxi hoá tạo hỗn hợp khí CO2 và SO2 làm cột than trào dâng sủi bọt: C + 2H2SO4 -> CO2↑ + 2SO2↑ + 2H2O."
          }
        ]
      },
      {
        heading: "3. Sản xuất H2SO4 & Ứng dụng muối Sulfate",
        type: "list",
        items: [
          {
            title: "Phương pháp tiếp xúc (Contact Process) gồm 3 giai đoạn",
            desc: "• Giai đoạn 1: Sản xuất SO2 bằng cách đốt cháy sulfur hoặc quặng pyrite trong lò đốt:\n  S + O2 --(t°)-> SO2 hoặc 4FeS2 + 11O2 --(t°)-> 2Fe2O3 + 8SO2.\n• Giai đoạn 2: Oxi hoá SO2 thành SO3 ở 450°C, xúc tác V2O5:\n  2SO2 + O2 <=(V2O5, 450°C)=> 2SO3, Delta H < 0.\n• Giai đoạn 3: Hấp thụ SO3 bằng H2SO4 đặc (98%) tạo oleum (H2SO4.nSO3):\n  H2SO4 + nSO3 -> H2SO4.nSO3. Sau đó pha loãng oleum bằng lượng nước thích hợp để thu được dung dịch H2SO4 có nồng độ theo ý muốn. Tuyệt đối không hấp thụ trực tiếp SO3 bằng nước vì phản ứng toả nhiệt dữ dội tạo sương mù acid lơ lửng rất khó ngưng tụ."
          },
          {
            title: "Ứng dụng muối Sulfate & Nhận biết ion SO4^2-",
            desc: "• BaSO4: Rất ít tan trong nước và acid, cản tia X tốt nên dùng làm chất cản quang trong chẩn đoán hình ảnh đường tiêu hoá.\n• CaSO4.2H2O (thạch cao sống): Nung ở 150-180°C thu được thạch cao nung CaSO4.0,5H2O dùng để bó bột y tế khi gãy xương, đúc tượng, làm trần thạch cao xây dựng.\n• MgSO4: Muối Epsom làm thuốc nhuận tràng, muối tắm giảm đau cơ, cung cấp vi lượng magie cho cây trồng.\n• (NH4)2SO4: Phân đạm SA cung cấp đạm và lưu huỳnh cho đất.\n• Nhận biết ion SO4^2-: Dùng dung dịch muối Ba^2+ (BaCl2, Ba(NO3)2) tạo kết tủa trắng BaSO4 bền vững, không tan trong dung dịch acid mạnh (HCl, HNO3): Ba^2+ + SO4^2- -> BaSO4↓ trắng."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Khi pha loãng sulfuric acid đặc, thao tác nào sau đây là ĐÚNG kĩ thuật và an toàn?",
        options: [
          "Rót nhanh nước vào acid đặc rồi đậy nút bình.",
          "Rót từ từ acid đặc vào nước dọc theo đũa thuỷ tinh và khuấy nhẹ.",
          "Rót từ từ nước vào acid đặc và khuấy đều.",
          "Đổ đồng thời cả acid đặc và nước vào cốc thuỷ tinh."
        ],
        ans: 1,
        explain: "Rót từ từ acid vào nước giúp lượng nhiệt sinh ra được khối nước lớn hấp thụ và toả đều, tránh gây sôi cục bộ bắn acid ra ngoài."
      },
      {
        q: "Chất nào sau đây bị hoá đen (than hoá) khi tiếp xúc với sulfuric acid đặc?",
        options: [
          "Muối ăn (NaCl)",
          "Đường saccharose (C12H22O11)",
          "Đá vôi (CaCO3)",
          "Khí oxygen (O2)"
        ],
        ans: 1,
        explain: "H2SO4 đặc có tính háo nước mãnh liệt, hút H2O của hợp chất carbohydrate như đường saccharose để lại carbon đen."
      },
      {
        q: "Thuốc thử dùng để nhận biết ion sulfate (SO4^2-) trong dung dịch là:",
        options: [
          "Dung dịch AgNO3",
          "Dung dịch BaCl2",
          "Dung dịch NaOH",
          "Quỳ tím"
        ],
        ans: 1,
        explain: "Ion Ba2+ kết hợp với ion SO4^2- tạo kết tủa trắng BaSO4 không tan trong acid mạnh: Ba2+ + SO4^2- -> BaSO4↓."
      }
    ]
  },

  9: {
    num: 9,
    chapter: 2,
    chapterTitle: "Chương 2. Nitrogen – Sulfur",
    title: "Ôn tập chương 2",
    badge: "Hệ thống & Bài tập",
    summary: "Tổng kết toàn bộ kiến thức Chương 2: Nitrogen, Ammonia, Muối ammonium, Hợp chất nitrogen với oxygen, Mưa acid, Phú dưỡng, Sulfur, SO2, H2SO4, Muối sulfate và bài toán thực tế.",
    objectives: [
      "So sánh tính chất hoá học của hợp chất Nitrogen và hợp chất Sulfur theo số oxi hoá.",
      "Thành thạo các chuỗi phản ứng chuyển hoá giữa N2, NH3, NO, NO2, HNO3 và S, SO2, SO3, H2SO4.",
      "Vận dụng kiến thức giải thích các vấn đề môi trường nóng hổi: mưa acid, sương mù quang hoá, phú dưỡng ao hồ và an toàn hoá chất."
    ],
    sections: [
      {
        heading: "1. Bảng đối chiếu số oxi hoá & Tính chất cốt lõi",
        type: "grid",
        items: [
          {
            badge: "Nhánh Nitrogen",
            title: "Trục số oxi hoá (-3 đến +5)",
            points: [
              "N(-3) trong NH3, NH4+: Chỉ có tính khử (cháy trong O2, phản ứng tạo NO).",
              "N(0) trong N2: Bền trơ ở t° thường; vừa oxi hoá (với H2, kim loại) vừa khử (với O2 sấm sét).",
              "N(+2, +4) trong NO, NO2: Số oxi hoá trung gian, vừa oxi hoá vừa khử, tác nhân gây mưa acid.",
              "N(+5) trong HNO3, NO3-: Mức oxi hoá cao nhất, tính acid mạnh và tính oxi hoá cực mạnh (oxi hoá Cu, Fe lên số oxi hoá cao)."
            ]
          },
          {
            badge: "Nhánh Sulfur",
            title: "Trục số oxi hoá (-2 đến +6)",
            points: [
              "S(-2) trong H2S, FeS: Tính khử mạnh, khí H2S mùi trứng thối độc hại.",
              "S(0) trong đơn chất S: Vừa oxi hoá (với kim loại, Hg ở t° thường) vừa khử (với O2 tạo SO2).",
              "S(+4) trong SO2, H2SO3: Vừa oxi hoá (với H2S tạo S) vừa khử (làm mất màu nước Br2, thuốc tím).",
              "S(+6) trong H2SO4, SO4^2-: Mức oxi hoá cao nhất; acid đặc háo nước và oxi hoá cực mạnh; ion SO4^2- nhận biết bằng Ba^2+."
            ]
          }
        ]
      },
      {
        heading: "2. Sơ đồ chuỗi chuyển hoá kinh điển",
        type: "list",
        items: [
          {
            title: "Chuỗi Nitrogen trong tự nhiên và công nghiệp",
            desc: "N2 --(+H2, t°, p, Fe)--> NH3 --(+O2, Pt, 850°C)--> NO --(+O2)--> NO2 --(+O2, H2O)--> HNO3 --(+Cu)--> Cu(NO3)2."
          },
          {
            title: "Chuỗi sản xuất Sulfuric Acid trong công nghiệp",
            desc: "FeS2 (hoặc S) --(+O2, t°)--> SO2 --(+O2, V2O5, 450°C)--> SO3 --(+H2SO4 đặc)--> Oleum --(+H2O)--> H2SO4."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để phân biệt 3 dung dịch không màu đựng trong 3 lọ mất nhãn: NaCl, (NH4)2SO4, NH4Cl, chỉ cần dùng một thuốc thử duy nhất là:",
        options: [
          "Dung dịch Ba(OH)2",
          "Dung dịch AgNO3",
          "Dung dịch NaOH",
          "Quỳ tím"
        ],
        ans: 0,
        explain: "Cho Ba(OH)2 vào: NaCl không hiện tượng; NH4Cl có khí mùi khai bay ra; (NH4)2SO4 vừa có khí mùi khai vừa có kết tủa trắng BaSO4."
      },
      {
        q: "Cho 6,4 gam Cu tác dụng hết với dung dịch HNO3 đặc dư. Thể tích khí NO2 (sản phẩm khử duy nhất ở đkc, 25°C, 1 bar, 1 mol = 24,79 L) thu được là:",
        options: [
          "2,479 lít",
          "4,958 lít",
          "2,240 lít",
          "4,480 lít"
        ],
        ans: 1,
        explain: "n(Cu) = 6,4 / 64 = 0,1 mol. Phương trình: Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O => n(NO2) = 2 * n(Cu) = 0,2 mol => V(NO2) = 0,2 * 24,79 = 4,958 L."
      },
      {
        q: "Hỗn hợp khí nào sau đây có thể cùng tồn tại trong một bình kín ở nhiệt độ thường mà không xảy ra phản ứng?",
        options: [
          "NH3 và HCl",
          "N2 và O2",
          "SO2 và H2S",
          "NO và O2"
        ],
        ans: 1,
        explain: "N2 và O2 không phản ứng ở nhiệt độ thường (chỉ phản ứng ở trên 3000°C hoặc có tia lửa điện). Các cặp khí khác đều phản ứng ngay lập tức ở điều kiện thường."
      }
    ]
  }
};
