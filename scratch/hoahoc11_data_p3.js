// scratch/hoahoc11_data_p3.js
// Chương 5 (Bài 19-22) và Chương 6 (Bài 23-25) - Hoá học 11 KNTT

module.exports = {
  19: {
    num: 19,
    chapter: 5,
    chapterTitle: "Chương 5. Dẫn xuất halogen – Alcohol – Phenol",
    title: "Dẫn xuất halogen",
    badge: "Lí thuyết & Ứng dụng",
    summary: "Khái niệm dẫn xuất halogen R-X, danh pháp, tính phân cực của liên kết C-X, phản ứng thế nhóm OH (thuỷ phân), phản ứng tách HX theo quy tắc Zaitsev, ứng dụng chất làm lạnh và bảo vệ môi trường tầng ozone.",
    objectives: [
      "Nêu định nghĩa dẫn xuất halogen, viết CTCT và gọi tên theo danh pháp thay thế IUPAC, danh pháp gốc - chức và tên thông thường.",
      "Giải thích tính phân cực của liên kết C-X và quy luật giảm năng lượng liên kết từ C-F đến C-I.",
      "Viết phương trình phản ứng thế nhóm OH (thuỷ phân với dung dịch kiềm) và phản ứng tách hydrogen halide (tạo alkene theo Zaitsev).",
      "Trình bày tác động của các hợp chất chlorofluorocarbon (CFC), hydrochlorofluorocarbon (HCFC) đối với sự suy giảm tầng ozone và xu hướng thay thế bằng HFC, HFO thân thiện với môi trường."
    ],
    sections: [
      {
        heading: "1. Khái niệm, Cấu tạo & Danh pháp",
        type: "list",
        items: [
          {
            title: "Khái niệm & Phân loại dẫn xuất Halogen",
            desc: "Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng một hay nhiều nguyên tử halogen (F, Cl, Br, I), thu được dẫn xuất halogen của hydrocarbon. Công thức tổng quát: R-X (với X là F, Cl, Br, I).\n• Bậc của dẫn xuất halogen bằng bậc của nguyên tử carbon liên kết trực tiếp với nguyên tử halogen: Bậc I (CH3-CH2-Cl); Bậc II (CH3-CH(Cl)-CH3); Bậc III ((CH3)3C-Cl)."
          },
          {
            title: "Danh pháp của Dẫn xuất Halogen",
            desc: "• Danh pháp thay thế (IUPAC): [Số chỉ vị trí halogen] + [fluoro/chloro/bromo/iodo] + [Tên alkane mạch chính]. Mạch chính là mạch carbon dài nhất chứa halogen, đánh số từ đầu gần halogen hơn (ưu tiên liên kết bội nếu có).\n• Danh pháp gốc - chức: [Tên gốc hydrocarbon] + [fluoride/chloride/bromide/iodide]. Ví dụ: C2H5Cl (ethyl chloride), CH2=CH-Cl (vinyl chloride), C6H5-CH2-Cl (benzyl chloride).\n• Tên thông thường: CHCl3 (chloroform), CHBr3 (bromoform), CHI3 (iodoform), CCl4 (carbon tetrachloride)."
          },
          {
            title: "Đặc điểm liên kết & Tính chất vật lí",
            desc: "• Phân cực: Liên kết C-X là liên kết cộng hoá trị phân cực về phía nguyên tử halogen có độ âm điện lớn hơn (Cδ+ - Xδ-). Do đó, nguyên tử carbon mang điện tích dương dễ bị tấn công bởi các tác nhân nucleophile (như OH-).\n• Vật lí: Phần lớn dẫn xuất halogen không tan trong nước, nặng hơn nước và tan tốt trong dung môi hữu cơ. Nhiệt độ sôi cao hơn hydrocarbon có cùng số C do phân tử phân cực và có khối lượng phân tử lớn hơn."
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Dẫn xuất Halogen",
        type: "list",
        items: [
          {
            title: "Phản ứng thế nhóm -OH (Thuỷ phân trong môi trường kiềm)",
            desc: "Dẫn xuất halogen có nguyên tử halogen gắn vào carbon no dễ tham gia phản ứng thế với dung dịch kiềm khi đun nóng tạo thành alcohol:\n• Phương trình tổng quát: R-X + NaOH --(H2O, t°)-> R-OH + NaX.\n• Ví dụ bromoethane: CH3-CH2-Br + NaOH --(H2O, t°)-> CH3-CH2-OH + NaBr.\n• Thí nghiệm SGK nhận biết halogen: Đun nhẹ bromoethane với dung dịch NaOH loãng; để nguội, chiết lấy lớp nước hoặc gạn dịch; acid hoá dung dịch bằng HNO3 loãng để trung hoà hết NaOH dư; sau đó nhỏ vài giọt dung dịch AgNO3 vào, quan sát thấy xuất hiện kết tủa màu vàng nhạt của AgBr: NaBr + AgNO3 -> AgBr↓ (vàng nhạt) + NaNO3."
          },
          {
            title: "Phản ứng tách Hydrogen Halide (HX) - Quy tắc Zaitsev",
            desc: "Khi đun nóng dẫn xuất halogen với dung dịch kiềm mạnh trong cồn (KOH/ethanol), phân tử bị tách một phân tử HX tạo thành alkene:\n• R-CH2-CH(X)-R' + KOH --(C2H5OH, t°)-> R-CH=CH-R' + KX + H2O.\n• Quy tắc Zaitsev: Khi tách HX khỏi dẫn xuất halogen, nguyên tử halogen X ưu tiên tách cùng với nguyên tử hydrogen ở nguyên tử carbon bên cạnh có bậc cao hơn (chứa ít H hơn), tạo thành alkene có nhiều nhóm thế hơn quanh nối đôi làm sản phẩm chính.\n• Ví dụ với 2-bromobutane:\n  CH3-CH2-CH(Br)-CH3 + KOH --(C2H5OH, t°)-> CH3-CH=CH-CH3 (but-2-ene, sản phẩm chính 81%) + CH3-CH2-CH=CH2 (but-1-ene, sản phẩm phụ 19%) + KBr + H2O."
          }
        ]
      },
      {
        heading: "3. Ứng dụng & Vấn đề bảo vệ môi trường",
        type: "grid",
        items: [
          {
            badge: "Lịch sử & Tầng Ozone",
            title: "Vấn đề chất làm lạnh CFC",
            points: [
              "Hợp chất CFC (như CF2Cl2 - Freon 12): Từng được dùng làm chất làm lạnh trong tủ lạnh, máy điều hoà và chất đẩy trong bình xịt aerosol do trơ, không độc, không cháy.",
              "Hiểm hoạ tầng ozone: Khi phát tán lên tầng bình lưu, dưới tác dụng của tia cực tím UV, phân tử CFC bị phân cắt giải phóng gốc tự do clo (Cl•). Mỗi gốc Cl• có thể phá huỷ hàng trăm nghìn phân tử ozone (O3), làm thủng tầng ozone bảo vệ Trái Đất.",
              "Nghị định thư Montreal (1987): Cấm hoàn toàn sản xuất và sử dụng CFC.",
              "Chất thay thế thân thiện: Chuyển sang HCFC (R22) và hiện nay là HFC (R32: CH2F2, R134a) không chứa clo và HFO (hydrofluoroolefin) có tiềm năng gây ấm lên toàn cầu (GWP) cực thấp."
            ]
          },
          {
            badge: "Hoá chất bảo vệ thực vật",
            title: "Thuốc trừ sâu thế hệ cũ",
            points: [
              "DDT (dichlorodiphenyltrichloroethane) và 666 (hexachlorocyclohexane): Từng là thuốc trừ sâu diệt muỗi phòng bệnh sốt rét cực kì hiệu quả.",
              "Tác hại tồn lưu sinh học: Các hợp chất này rất bền, không bị phân huỷ sinh học, tích tụ qua chuỗi thức ăn (tích luỹ sinh học) gây ngộ độc cho người, động vật, gây ung thư và dị tật bẩm sinh.",
              "Hiện nay: Các hoá chất clo hữu cơ này đã bị cấm tuyệt đối trên toàn cầu theo Công ước Stockholm; ưu tiên dùng chế phẩm sinh học an toàn."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Khi đun nóng 2-chlorobutane với dung dịch KOH trong ethanol, sản phẩm chính thu được theo quy tắc Zaitsev là:",
        options: [
          "But-1-ene",
          "But-2-ene",
          "Butan-2-ol",
          "Butan-1-ol"
        ],
        ans: 1,
        explain: "Theo quy tắc Zaitsev, Cl tách cùng H ở C3 (carbon bậc 2, ít H hơn) tạo ra but-2-ene có nối đôi ở giữa mạch làm sản phẩm chính."
      },
      {
        q: "Để kiểm tra sự có mặt của nguyên tử bromine trong phân tử bromoethane sau khi thuỷ phân bằng kiềm, trước khi nhỏ dung dịch AgNO3 cần phải cho vào dung dịch hoá chất nào?",
        options: [
          "Dung dịch HCl",
          "Dung dịch HNO3 loãng",
          "Dung dịch H2SO4 đặc",
          "Dung dịch NH3"
        ],
        ans: 1,
        explain: "Cần cho dung dịch HNO3 loãng vào để trung hoà hoàn toàn lượng kiềm NaOH dư, tránh tạo kết tủa đen Ag2O làm sai lệch hiện tượng."
      },
      {
        q: "Nguyên nhân chính khiến các hợp chất CFC (như CF2Cl2) bị cấm sử dụng trong các hệ thống làm lạnh là do:",
        options: [
          "Gây cháy nổ nghiêm trọng ở nhiệt độ thường.",
          "Có mùi hôi xốc làm khó thở.",
          "Phá huỷ tầng ozone ở tầng bình lưu.",
          "Gây hiện tượng mưa acid trên diện rộng."
        ],
        ans: 2,
        explain: "Dưới bức xạ UV, CFC sinh ra gốc tự do Cl• phá huỷ các phân tử ozone (O3), dẫn đến hiện tượng thủng tầng ozone."
      }
    ]
  },

  20: {
    num: 20,
    chapter: 5,
    chapterTitle: "Chương 5. Dẫn xuất halogen – Alcohol – Phenol",
    title: "Alcohol",
    badge: "Lí thuyết & Thí nghiệm",
    summary: "Định nghĩa alcohol, bậc alcohol, liên kết hydrogen liên phân tử, tính chất hoá học (phản ứng với Na, tạo ether, tách nước tạo alkene, oxi hoá CuO), phản ứng tạo phức màu xanh lam của polyalcohol liền kề và độc tính lạm dụng rượu bia.",
    objectives: [
      "Nêu định nghĩa alcohol, bậc của alcohol và công thức chung của alcohol no, đơn chức, mạch hở CnH2n+1OH (n >= 1).",
      "Giải thích nhiệt độ sôi và độ tan vượt trội của alcohol so với hydrocarbon cùng khối lượng dựa vào liên kết hydrogen.",
      "Viết phương trình phản ứng với kim loại kiềm, phản ứng tạo ether và phản ứng tách nước tạo alkene theo Zaitsev.",
      "Viết phương trình phản ứng oxi hoá không hoàn toàn của alcohol bậc I (tạo aldehyde) và bậc II (tạo ketone) bằng CuO nóng.",
      "Thực hiện phản ứng nhận biết polyalcohol có các nhóm -OH kề nhau bằng Cu(OH)2 và trình bày tác hại của lạm dụng rượu bia."
    ],
    sections: [
      {
        heading: "1. Khái niệm, Cấu tạo & Danh pháp",
        type: "list",
        items: [
          {
            title: "Khái niệm & Bậc của Alcohol",
            desc: "Alcohol là những hợp chất hữu cơ trong phân tử có nhóm hydroxyl (-OH) liên kết trực tiếp với nguyên tử carbon no (carbon chỉ chứa liên kết đơn).\n• Công thức alcohol no, đơn chức, mạch hở: CnH2n+1OH (n >= 1) hoặc R-OH.\n• Bậc của alcohol: Bằng bậc của nguyên tử carbon liên kết trực tiếp với nhóm -OH.\n  + Bậc I: R-CH2-OH (ví dụ: ethanol CH3CH2OH, propan-1-ol).\n  + Bậc II: R-CH(OH)-R' (ví dụ: propan-2-ol (CH3)2CHOH).\n  + Bậc III: R-C(OH)(R')(R'') (ví dụ: 2-methylpropan-2-ol (CH3)3COH)."
          },
          {
            title: "Danh pháp thay thế (IUPAC)",
            desc: "Tên Alcohol = [Số chỉ vị trí nhánh] + [Tên nhánh] + [Tên mạch chính carbon] + [Số chỉ vị trí nhóm -OH] + [ol]\n• Chọn mạch chính là mạch dài nhất chứa nhóm -OH, đánh số từ đầu gần nhóm -OH hơn.\n• Đối với polyalcohol (nhiều nhóm -OH): Dùng tiếp vĩ ngữ -diol, -triol...\n• Ví dụ: CH3OH (methanol), C2H5OH (ethanol), CH3-CH(OH)-CH3 (propan-2-ol), CH2OH-CH2OH (ethane-1,2-diol hay ethylene glycol), CH2OH-CHOH-CH2OH (propane-1,2,3-triol hay glycerol)."
          },
          {
            title: "Liên kết Hydrogen & Tính chất vật lí",
            desc: "• Liên kết hydrogen: Giữa các phân tử alcohol có khả năng tạo liên kết hydrogen liên phân tử mạnh mẽ (R-O-H...O(H)-R) và liên kết hydrogen với phân tử nước.\n• Nhiệt độ sôi: Alcohol có nhiệt độ sôi cao hơn rất nhiều so với các hydrocarbon, ether, dẫn xuất halogen có cùng hoặc xấp xỉ phân tử khối (ví dụ: ethanol sôi ở 78,3°C, trong khi dimethyl ether CH3OCH3 sôi ở -24°C dù cùng C2H6O).\n• Độ tan: Các alcohol đầu dãy (C1 đến C3: methanol, ethanol, propanol) tan vô hạn trong nước do tạo liên kết hydrogen bền với nước; khi mạch carbon càng dài, tính kị nước tăng lên làm độ tan giảm nhanh chóng."
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Alcohol",
        type: "list",
        items: [
          {
            title: "Phản ứng thế nguyên tử H của nhóm -OH (Tác dụng với kim loại kiềm)",
            desc: "Alcohol phản ứng êm dịu với kim loại kiềm (Na, K) giải phóng khí hydrogen:\n• 2R-OH + 2Na -> 2R-ONa (sodium alkoxide) + H2↑.\n• Ví dụ: 2C2H5OH + 2Na -> 2C2H5ONa (sodium ethoxide) + H2↑.\n• Phản ứng chứng minh nguyên tử H trong nhóm -OH có tính linh động (tuy nhiên alcohol không phân li ra H+ trong nước nên không làm đổi màu quỳ tím, không phản ứng với NaOH)."
          },
          {
            title: "Phản ứng tạo Ether (Xúc tác H2SO4 đặc ở 140°C)",
            desc: "Khi đun nóng alcohol với H2SO4 đặc ở khoảng 140°C, hai phân tử alcohol tách một phân tử nước tạo thành ether:\n• 2C2H5OH --(H2SO4 đặc, 140°C)-> C2H5-O-C2H5 (diethyl ether, thuốc mê cổ điển) + H2O.\n• Với hỗn hợp 2 alcohol R1OH và R2OH sẽ thu được tối đa 3 ether: R1-O-R1, R2-O-R2 và R1-O-R2."
          },
          {
            title: "Phản ứng tách nước tạo Alkene (Xúc tác H2SO4 đặc ở 170°C) - Quy tắc Zaitsev",
            desc: "Khi đun nóng alcohol với H2SO4 đặc ở khoảng 170°C, xảy ra phản ứng tách nước nội phân tử tạo alkene:\n• CnH2n+1OH --(H2SO4 đặc, 170°C)-> CnH2n + H2O.\n• Ví dụ ethanol: C2H5OH --(H2SO4 đặc, 170°C)-> CH2=CH2 + H2O.\n• Tuân theo quy tắc Zaitsev: Nhóm -OH ưu tiên tách cùng nguyên tử H ở carbon bên cạnh có bậc cao hơn (ít H hơn) tạo alkene thế nhiều hơn làm sản phẩm chính.\n• Ví dụ butan-2-ol: CH3-CH2-CH(OH)-CH3 --(H2SO4 đặc, 170°C)-> CH3-CH=CH-CH3 (but-2-ene, sản phẩm chính) + CH3-CH2-CH=CH2 (but-1-ene, sản phẩm phụ) + H2O."
          },
          {
            title: "Phản ứng oxi hoá không hoàn toàn bằng CuO nung nóng",
            desc: "• Alcohol bậc I bị oxi hoá thành aldehyde: R-CH2OH + CuO --(t°)-> R-CHO (aldehyde) + Cu (màu đỏ) + H2O. Ví dụ: CH3CH2OH + CuO --(t°)-> CH3CHO + Cu + H2O.\n• Alcohol bậc II bị oxi hoá thành ketone: R-CH(OH)-R' + CuO --(t°)-> R-CO-R' (ketone) + Cu + H2O. Ví dụ: CH3-CH(OH)-CH3 + CuO --(t°)-> CH3-CO-CH3 (acetone) + Cu + H2O.\n• Alcohol bậc III: Rất bền, không bị oxi hoá bởi CuO trong điều kiện này."
          },
          {
            title: "Tính chất đặc trưng của Polyalcohol có các nhóm -OH liền kề",
            desc: "Các polyalcohol có từ hai nhóm -OH liền kề trở lên (như ethylene glycol, glycerol) có khả năng hoà tan kết tủa Cu(OH)2 màu xanh lam ở nhiệt độ thường, tạo thành dung dịch phức đồng màu xanh lam thẫm (dung dịch xanh lam đậm):\n• 2C3H5(OH)3 + Cu(OH)2 -> [C3H5(OH)2O]2Cu (copper(II) glycerate) + 2H2O.\n• Đây là phản ứng đặc trưng để nhận biết glycerol, ethylene glycol và phân biệt chúng với các alcohol đơn chức (propan-1-ol, ethanol không phản ứng)."
          }
        ]
      },
      {
        heading: "3. Ứng dụng, Điều chế & Cảnh báo tác hại",
        type: "list",
        items: [
          {
            title: "Phương pháp điều chế",
            desc: "• Hydrate hoá alkene: CH2=CH2 + H2O --(H3PO4, 300°C, 70-80 bar)-> C2H5OH.\n• Lên men tinh bột truyền thống: (C6H10O5)n -> n C6H12O6 (glucose) --(men rượu, 25-30°C)-> 2n C2H5OH + 2n CO2↑.\n• Điều chế glycerol: Thu được từ quá trình thuỷ phân chất béo trong sản xuất xà phòng hoặc tổng hợp từ propylene."
          },
          {
            title: "Độc tính & Tác hại của rượu bia",
            desc: "• Methanol (CH3OH) cực kì độc: Cồn công nghiệp chứa nhiều methanol. Khi vào cơ thể, enzyme alcohol dehydrogenase trong gan chuyển hoá methanol thành formaldehyde (HCHO) và formic acid (HCOOH), gây nhiễm toan chuyển hoá, phá huỷ dây thần kinh thị giác làm mù mắt vĩnh viễn và tử vong.\n• Lạm dụng rượu bia (ethanol): Gây ức chế hệ thần kinh trung ương, suy giảm phản xạ, xơ gan, viêm loét dạ dày, viêm tuỵ; phụ nữ mang thai uống rượu bia có nguy cơ dị tật thai nhi. Tuân thủ nghiêm ngặt quy định: ĐÃ UỐNG RƯỢU BIA THÌ TUYỆT ĐỐI KHÔNG LÁI XE."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Chất nào sau đây tác dụng được với Cu(OH)2 ở nhiệt độ thường tạo thành dung dịch phức màu xanh lam thẫm?",
        options: [
          "Ethanol (C2H5OH)",
          "Propan-1-ol (CH3CH2CH2OH)",
          "Glycerol (C3H5(OH)3)",
          "Dimethyl ether (CH3OCH3)"
        ],
        ans: 2,
        explain: "Glycerol là polyalcohol có 3 nhóm -OH liền kề nhau nên có khả năng hoà tan Cu(OH)2 tạo dung dịch phức màu xanh lam đậm."
      },
      {
        q: "Oxi hoá propan-2-ol ((CH3)2CHOH) bằng CuO nung nóng, sản phẩm hữu cơ thu được là:",
        options: [
          "Propanal",
          "Acetone",
          "Propanoic acid",
          "Propene"
        ],
        ans: 1,
        explain: "Propan-2-ol là alcohol bậc II, khi bị oxi hoá bởi CuO nung nóng sẽ tạo thành ketone tương ứng là acetone (propan-2-one): (CH3)2CHOH + CuO -> CH3COCH3 + Cu + H2O."
      },
      {
        q: "Đun nóng hỗn hợp gồm ethanol và methanol với H2SO4 đặc ở 140°C có thể thu được tối đa bao nhiêu loại ether khác nhau?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        ans: 2,
        explain: "Thu được tối đa 3 ether: dimethyl ether (CH3-O-CH3), diethyl ether (C2H5-O-C2H5) và ethyl methyl ether (CH3-O-C2H5)."
      }
    ]
  },

  21: {
    num: 21,
    chapter: 5,
    chapterTitle: "Chương 5. Dẫn xuất halogen – Alcohol – Phenol",
    title: "Phenol",
    badge: "Lí thuyết & Ứng dụng",
    summary: "Cấu tạo phân tử phenol C6H5OH, ảnh hưởng qua lại giữa vòng benzene và nhóm -OH, tính acid yếu của phenol (tác dụng với NaOH, Na2CO3), phản ứng thế 2,4,6 với nước bromine tạo kết tủa trắng, nitro hoá tạo picric acid và ứng dụng.",
    objectives: [
      "Nêu định nghĩa phenol, phân biệt phenol (nhóm -OH gắn trực tiếp vào carbon vòng benzene) với thơm alcohol.",
      "Giải thích ảnh hưởng qua lại giữa vòng benzene và nhóm -OH: nhóm -OH làm vòng benzene dễ thế hơn; vòng benzene làm nguyên tử H của nhóm -OH linh động hơn hẳn alcohol.",
      "Viết phương trình phản ứng của phenol với Na, dung dịch NaOH, dung dịch Na2CO3.",
      "Viết phương trình phản ứng thế bromine tạo kết tủa trắng 2,4,6-tribromophenol và phản ứng nitro hoá tạo 2,4,6-trinitrophenol (picric acid).",
      "Nêu ứng dụng sản xuất nhựa phenol - formaldehyde, bisphenol A và biện pháp an toàn khi tiếp xúc với phenol."
    ],
    sections: [
      {
        heading: "1. Cấu tạo, Phân loại & Tính chất vật lí",
        type: "grid",
        items: [
          {
            badge: "Cấu tạo phân tử",
            title: "Khái niệm & Ảnh hưởng cấu tạo",
            points: [
              "Định nghĩa: Phenol là hợp chất hữu cơ trong phân tử có nhóm hydroxyl (-OH) liên kết trực tiếp với nguyên tử carbon của vòng benzene.",
              "Phân biệt với thơm alcohol: Benzyl alcohol C6H5-CH2-OH có nhóm -OH gắn vào carbon no ngoài nhánh nên là alcohol thơm, không phải phenol.",
              "Ảnh hưởng qua lại: Cặp electron tự do trên nguyên tử oxygen của nhóm -OH liên hợp với hệ electron pi của vòng benzene (hiệu ứng liên hợp +C) làm tăng mật độ electron ở các vị trí ortho và para trên vòng benzene, đồng thời làm liên kết O-H phân cực mạnh hơn alcohol."
            ]
          },
          {
            badge: "Tính chất vật lí",
            title: "Đặc điểm vật lí của Phenol",
            points: [
              "Chất rắn dạng tinh thể không màu, có mùi đặc trưng, nóng chảy ở 43°C, sôi ở 181,8°C.",
              "Để lâu ngoài không khí, phenol bị oxi hoá chậm chuyển thành màu hồng nhạt hoặc đỏ thẫm.",
              "Độ tan: Ít tan trong nước lạnh (ở 25°C tan khoảng 8,3 g/100 g nước), tan vô hạn khi đun nóng trên 66°C; tan tốt trong ethanol, diethyl ether, dung dịch kiềm.",
              "Độc tính: Rất độc, gây bỏng rát nặng khi tiếp xúc với da, ăn mòn mô sinh học."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Phenol",
        type: "list",
        items: [
          {
            title: "Tính acid yếu (Phản ứng của nhóm -OH)",
            desc: "Do ảnh hưởng hút electron của vòng thơm, liên kết O-H phân cực mạnh, nguyên tử H linh động hơn nhiều so với trong alcohol:\n• Phân li yếu trong nước: C6H5OH <=> C6H5O- (phenolate) + H+ (hằng số Ka = 10^-10). Phenol có tính acid rất yếu, yếu hơn cả carbonic acid H2CO3 nên không làm đổi màu quỳ tím.\n• Tác dụng với kim loại kiềm: 2C6H5OH + 2Na --(t°)-> 2C6H5ONa (sodium phenolate) + H2↑.\n• Tác dụng với dung dịch kiềm (Điểm khác biệt hoàn toàn với alcohol): C6H5OH (chất rắn ít tan làm đục nước) + NaOH -> C6H5ONa (muối tan, dung dịch trở nên trong suốt) + H2O.\n• Phản ứng đẩy acid (chứng minh tính acid yếu hơn H2CO3): Sục khí CO2 vào dung dịch sodium phenolate trong suốt, dung dịch bị vẩn đục trở lại do tạo phenol ít tan: C6H5ONa + CO2 + H2O -> C6H5OH↓ (vẩn đục) + NaHCO3."
          },
          {
            title: "Phản ứng thế ở vòng Benzene (Vị trí 2, 4, 6)",
            desc: "Do ảnh hưởng đẩy electron của nhóm -OH, vòng benzene của phenol phản ứng thế dễ dàng hơn benzene rất nhiều, ưu tiên thế đồng thời vào cả 3 vị trí ortho và para (2, 4, 6):\n• Tác dụng với dung dịch nước Bromine (Phản ứng nhận biết phenol): Khi nhỏ nước bromine vào dung dịch phenol, xuất hiện ngay kết tủa màu trắng của 2,4,6-tribromophenol và dung dịch bromine bị mất màu:\n  C6H5OH + 3Br2 (nâu đỏ) -> C6H2Br3OH↓ (trắng) + 3HBr.\n• Phản ứng Nitro hoá: Đun nóng phenol với dung dịch HNO3 đặc trong H2SO4 đặc tạo thành kết tủa màu vàng của 2,4,6-trinitrophenol (thường gọi là picric acid, dùng làm chất nổ và thuốc chữa bỏng cổ điển):\n  C6H5OH + 3HNO3 (đặc) --(H2SO4 đặc, t°)-> C6H2(NO2)3OH↓ (vàng) + 3H2O."
          }
        ]
      },
      {
        heading: "3. Ứng dụng, Điều chế & An toàn hoá chất",
        type: "list",
        items: [
          {
            title: "Ứng dụng & Điều chế công nghiệp",
            desc: "• Ứng dụng: Sản xuất nhựa poly(phenol - formaldehyde) (nhựa bakelite làm vỏ thiết bị điện, keo dán gỗ); sản xuất bisphenol A làm chất dẻo polycarbonate (kính mũ bảo hiểm, đồ gia dụng); sản xuất dược phẩm (aspirin, paracetamol), thuốc sát trùng, thuốc trừ sâu, phẩm nhuộm.\n• Điều chế: Phương pháp hiện đại nhất hiện nay là oxi hoá cumene (isopropylbenzene) bằng O2 không khí rồi thuỷ phân trong môi trường acid, đồng thời thu được hai sản phẩm có giá trị cao là phenol và acetone: C6H5-CH(CH3)2 + O2 --(xt)-> C6H5-C(CH3)2-O-OH --(H+)-> C6H5OH + CH3COCH3."
          },
          {
            title: "Quy tắc an toàn khi làm việc với Phenol",
            desc: "• Phenol gây bỏng sâu và phá huỷ protein mô nhanh chóng nếu dính vào da, có thể thấm qua da gây nhiễm độc toàn thân.\n• Thao tác: Bắt buộc đeo găng tay cao su chịu hoá chất, kính bảo hộ và làm việc trong tủ hút.\n• Sơ cứu: Nếu bị phenol dính vào da, KHÔNG rửa ngay bằng nước lạnh vì phenol ít tan trong nước lạnh sẽ lan rộng; phải rửa ngay lập tức bằng nhiều cồn ethanol hoặc glycerol (phenol tan rất tốt trong cồn), sau đó xối rửa kỹ dưới vòi nước chảy và đến cơ sở y tế."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hiện tượng xảy ra khi nhỏ vài giọt dung dịch nước bromine vào ống nghiệm chứa dung dịch phenol là:",
        options: [
          "Dung dịch chuyển sang màu xanh lam.",
          "Xuất hiện kết tủa màu trắng và nước bromine bị mất màu.",
          "Có bọt khí không màu thoát ra dữ dội.",
          "Không có hiện tượng gì xảy ra."
        ],
        ans: 1,
        explain: "Phenol phản ứng thế với nước bromine ở 3 vị trí 2, 4, 6 tạo kết tủa trắng 2,4,6-tribromophenol và làm mất màu nước bromine."
      },
      {
        q: "Phương trình hoá học nào sau đây chứng minh tính acid của phenol yếu hơn carbonic acid (H2CO3)?",
        options: [
          "C6H5OH + NaOH -> C6H5ONa + H2O",
          "2C6H5OH + 2Na -> 2C6H5ONa + H2",
          "C6H5ONa + CO2 + H2O -> C6H5OH + NaHCO3",
          "C6H5OH + 3Br2 -> C6H2Br3OH + 3HBr"
        ],
        ans: 2,
        explain: "Khí CO2 và H2O (tương đương H2CO3) đẩy được phenol ra khỏi muối sodium phenolate chứng tỏ carbonic acid có tính acid mạnh hơn phenol."
      },
      {
        q: "Chất nào sau đây KHÔNG thuộc loại phenol?",
        options: [
          "o-Cresol (2-methylphenol)",
          "Hydroquinone (benzene-1,4-diol)",
          "Benzyl alcohol (C6H5-CH2-OH)",
          "Picric acid (2,4,6-trinitrophenol)"
        ],
        ans: 2,
        explain: "Benzyl alcohol có nhóm -OH liên kết với nguyên tử carbon no ở nhánh (-CH2-) nên là alcohol thơm, không phải phenol."
      }
    ]
  },

  22: {
    num: 22,
    chapter: 5,
    chapterTitle: "Chương 5. Dẫn xuất halogen – Alcohol – Phenol",
    title: "Ôn tập chương 5",
    badge: "Hệ thống & Bài tập",
    summary: "Hệ thống hoá dẫn xuất halogen (R-X), alcohol (R-OH) và phenol (Ar-OH). So sánh liên kết hydrogen, tính acid của phenol với alcohol, các phản ứng đặc trưng và chuỗi chuyển hoá hữu cơ.",
    objectives: [
      "So sánh cấu tạo, liên kết và tính chất hoá học đặc trưng của dẫn xuất halogen, alcohol và phenol.",
      "Phân biệt các chất: alcohol đơn chức, polyalcohol có nhóm -OH kề nhau và phenol bằng các thuốc thử thích hợp.",
      "Thực hiện thành thạo các bài tập chuỗi biến hoá từ hydrocarbon sang dẫn xuất halogen, alcohol và phenol."
    ],
    sections: [
      {
        heading: "1. Bảng so sánh Dẫn xuất Halogen, Alcohol và Phenol",
        type: "table",
        headers: ["Hợp chất", "Cấu trúc đặc trưng", "Tác dụng với Na", "Tác dụng với NaOH", "Nước Bromine", "Phản ứng đặc trưng khác"],
        rows: [
          ["Dẫn xuất halogen (R-X)", "Liên kết C-X phân cực", "Không phản ứng", "Thế -OH (thuỷ phân khi đun nóng)", "Không phản ứng", "Tách HX tạo alkene (KOH/cồn theo Zaitsev)"],
          ["Alcohol (R-OH)", "Nhóm -OH gắn carbon no", "Phản ứng tạo H2↑", "Không phản ứng", "Không phản ứng", "Oxi hoá bởi CuO (tạo aldehyde/ketone); Tách nước tạo alkene; Polyol kề tan Cu(OH)2"],
          ["Phenol (Ar-OH)", "Nhóm -OH gắn trực tiếp vòng benzene", "Phản ứng tạo H2↑", "Phản ứng tạo muối phenolate tan", "Tạo kết tủa trắng 2,4,6-tribromophenol", "Nitro hoá tạo picric acid vàng; Không tách nước tạo alkene"]
        ]
      },
      {
        heading: "2. Quy trình phân biệt 3 chất lỏng: Ethanol, Glycerol, Phenol",
        type: "list",
        items: [
          {
            title: "Các bước thực nghiệm phân biệt",
            desc: "• Bước 1: Nhỏ vài giọt dung dịch nước bromine vào 3 ống nghiệm đựng 3 chất lỏng. Chất nào xuất hiện kết tủa trắng (2,4,6-tribromophenol) là Phenol.\n• Bước 2: Cho một ít kết tủa Cu(OH)2 mới điều chế vào 2 ống nghiệm còn lại (ethanol và glycerol). Ống nghiệm nào hoà tan kết tủa Cu(OH)2 tạo dung dịch màu xanh lam thẫm là Glycerol (polyol có nhóm -OH kề nhau).\n• Bước 3: Ống nghiệm không làm tan Cu(OH)2 ở nhiệt độ thường là Ethanol."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Cho các chất sau: (1) C2H5Cl, (2) C2H5OH, (3) C6H5OH (phenol), (4) C3H5(OH)3 (glycerol). Chất nào phản ứng được với cả kim loại Na và dung dịch NaOH?",
        options: [
          "Chất (2)",
          "Chất (3)",
          "Chất (4)",
          "Chất (1) và (3)"
        ],
        ans: 1,
        explain: "Phenol có tính acid yếu, phản ứng được với Na giải phóng H2 và phản ứng được với dung dịch kiềm NaOH tạo muối sodium phenolate. Alcohol và glycerol không phản ứng với NaOH."
      },
      {
        q: "Đun nóng 18,4 gam glycerol với kim loại Na dư. Thể tích khí H2 thu được (ở đkc 25°C, 1 bar, 1 mol = 24,79 L) là:",
        options: [
          "4,958 lít",
          "7,437 lít",
          "2,479 lít",
          "9,916 lít"
        ],
        ans: 1,
        explain: "n(glycerol) = 18,4 / 92 = 0,2 mol. Phản ứng: C3H5(OH)3 + 3Na -> C3H5(ONa)3 + 1,5 H2 => n(H2) = 1,5 * 0,2 = 0,3 mol => V(H2) = 0,3 * 24,79 = 7,437 lít."
      },
      {
        q: "Chất nào sau đây khi đun nóng với dung dịch NaOH loãng sinh ra acetaldehyde (CH3CHO)?",
        options: [
          "CH3-CH2Cl",
          "CH2=CH-Cl",
          "CH3-CHCl2",
          "CH2Cl-CH2Cl"
        ],
        ans: 2,
        explain: "CH3-CHCl2 khi thuỷ phân tạo hợp chất có 2 nhóm -OH trên cùng 1 carbon không bền: CH3-CH(OH)2 tách nước chuyển hoá thành CH3CHO + H2O."
      }
    ]
  },

  23: {
    num: 23,
    chapter: 6,
    chapterTitle: "Chương 6. Hợp chất carbonyl – Carboxylic acid",
    title: "Hợp chất carbonyl",
    badge: "Aldehyde & Ketone",
    summary: "Cấu trúc nhóm carbonyl >C=O, danh pháp aldehyde và ketone, phản ứng khử bằng NaBH4/LiAlH4, phản ứng oxi hoá tráng bạc Tollens, phản ứng Cu(OH)2 kiềm đun nóng, phản ứng cộng HCN, phản ứng tạo iodoform CHI3 và ứng dụng.",
    objectives: [
      "Nêu định nghĩa hợp chất carbonyl, phân biệt aldehyde (-CHO) và ketone (>C=O), gọi tên theo IUPAC và tên thông thường.",
      "Mô tả cấu trúc phân cực của nhóm carbonyl và tính chất vật lí so với alkane và alcohol tương đương.",
      "Viết phương trình phản ứng khử hợp chất carbonyl thành alcohol bằng tác nhân NaBH4 hoặc LiAlH4.",
      "Viết phương trình phản ứng oxi hoá aldehyde bằng thuốc thử Tollens [Ag(NH3)2]OH (phản ứng tráng bạc) và Cu(OH)2 trong môi trường kiềm.",
      "Nhận biết các hợp chất chứa nhóm methyl ketone (CH3-C=O) và ethanal bằng phản ứng tạo kết tủa vàng iodoform (CHI3)."
    ],
    sections: [
      {
        heading: "1. Khái niệm, Cấu tạo & Danh pháp",
        type: "grid",
        items: [
          {
            badge: "Nhóm Carbonyl >C=O",
            title: "Khái niệm Aldehyde & Ketone",
            points: [
              "Hợp chất carbonyl là hợp chất hữu cơ trong phân tử chứa nhóm carbonyl >C=O.",
              "Aldehyde: Hợp chất có nhóm carbonyl liên kết trực tiếp với nguyên tử H hoặc với nguyên tử H và gốc hydrocarbon (công thức dạng R-CHO).",
              "Ketone: Hợp chất có nhóm carbonyl liên kết trực tiếp với hai gốc hydrocarbon (công thức dạng R-CO-R').",
              "Phân cực: Liên kết đôi C=O phân cực mạnh về phía nguyên tử O có độ âm điện lớn hơn (Cδ+ = Oδ-)."
            ]
          },
          {
            badge: "Danh pháp IUPAC & Tên thường",
            title: "Quy tắc gọi tên",
            points: [
              "Aldehyde: Tên alkane mạch chính + [al] (carbon của nhóm -CHO luôn là carbon số 1).",
              "Ví dụ aldehyde: HCHO (methanal / formaldehyde / fomanđehit), CH3CHO (ethanal / acetaldehyde), C6H5CHO (benzaldehyde).",
              "Ketone: Tên alkane mạch chính + [số chỉ vị trí C=O] + [one]. Đánh số từ đầu gần nhóm C=O hơn.",
              "Ví dụ ketone: CH3-CO-CH3 (propan-2-one / acetone / propanone), CH3-CO-CH2-CH3 (butan-2-one)."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất hoá học của Hợp chất Carbonyl",
        type: "list",
        items: [
          {
            title: "Phản ứng khử (Tác dụng với hydride kim loại NaBH4 hoặc LiAlH4)",
            desc: "Dưới tác dụng của các tác nhân khử NaBH4 (sodium borohydride) hoặc LiAlH4 (lithium aluminium hydride), hợp chất carbonyl bị khử thành alcohol:\n• Aldehyde bị khử thành alcohol bậc I: R-CHO --(NaBH4)-> R-CH2OH.\n  Ví dụ: CH3-CHO + 2[H] --(NaBH4)-> CH3-CH2OH.\n• Ketone bị khử thành alcohol bậc II: R-CO-R' --(NaBH4)-> R-CH(OH)-R'.\n  Ví dụ: CH3-CO-CH3 + 2[H] --(NaBH4)-> CH3-CH(OH)-CH3 (propan-2-ol)."
          },
          {
            title: "Phản ứng oxi hoá Aldehyde (Tính chất đặc trưng phân biệt với Ketone)",
            desc: "Aldehyde rất dễ bị oxi hoá thành carboxylic acid bởi các tác nhân oxi hoá yếu, trong khi ketone rất khó bị oxi hoá:\n• Phản ứng tráng bạc với thuốc thử Tollens [Ag(NH3)2]OH: Đun nóng nhẹ aldehyde với dung dịch thuốc thử Tollens, bạc kim loại sáng bóng sinh ra bám vào thành ống nghiệm như gương (phản ứng tráng gương):\n  R-CHO + 2[Ag(NH3)2]OH --(t°)-> R-COONH4 + 2Ag↓ (sáng bóng) + 3NH3 + H2O.\n  (Đặc biệt: 1 mol HCHO phản ứng tạo tối đa 4 mol Ag).\n• Phản ứng với Cu(OH)2 trong môi trường kiềm khi đun nóng: Tạo kết tủa màu đỏ gạch của Cu2O (copper(I) oxide):\n  R-CHO + 2Cu(OH)2 + NaOH --(t°)-> R-COONa + Cu2O↓ (đỏ gạch) + 3H2O.\n• Phản ứng làm mất màu nước bromine: R-CHO + Br2 + H2O -> R-COOH + 2HBr (ketone không phản ứng)."
          },
          {
            title: "Phản ứng cộng Hydrogen Cyanide (HCN)",
            desc: "Nhóm carbonyl tham gia phản ứng cộng nucleophile với HCN tạo thành hợp chất cyanohydrin:\n• R-CHO + HCN -> R-CH(OH)-CN.\n• R-CO-R' + HCN -> R-C(OH)(CN)-R'."
          },
          {
            title: "Phản ứng tạo Iodoform (Nhận biết nhóm methyl ketone CH3-C=O)",
            desc: "Các hợp chất chứa nhóm methyl ketone (CH3-CO-R) và ethanal (CH3-CHO) khi phản ứng với dung dịch iodine trong môi trường kiềm (I2/NaOH) sẽ tạo thành kết tủa màu vàng nhạt của iodoform (triiodomethane CHI3) có mùi sát trùng đặc trưng:\n• CH3-CO-R + 3I2 + 4NaOH -> CHI3↓ (vàng) + R-COONa + 3NaI + 3H2O.\n• Ứng dụng: Phản ứng iodoform dùng để phân biệt acetone (có kết tủa vàng) với các ketone khác hoặc phân biệt ethanal với các aldehyde khác."
          }
        ]
      },
      {
        heading: "3. Ứng dụng công nghiệp & Đời sống",
        type: "list",
        items: [
          {
            title: "Formaldehyde (HCHO)",
            desc: "Dung dịch chứa khoảng 37-40% formaldehyde trong nước được gọi là formon (formalin), có tính sát trùng và làm đông tụ protein mạnh mẽ nên dùng để ngâm xác ướp tiêu bản động vật, khử trùng chuồng trại; là nguyên liệu chủ chốt sản xuất nhựa phenol - formaldehyde, keo dán ép gỗ công nghiệp."
          },
          {
            title: "Acetone (CH3COCH3)",
            desc: "Là dung môi hữu cơ lý tưởng tan vô hạn trong nước và hoà tan được nhiều chất hữu cơ (sơn móng tay, dầu mỡ, nhựa tổng hợp); là nguyên liệu trung gian quan trọng trong tổng hợp hữu cơ và sản xuất thuỷ tinh hữu cơ plexiglas."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Thuốc thử nào sau đây dùng để phân biệt acetaldehyde (CH3CHO) và acetone (CH3COCH3)?",
        options: [
          "Dung dịch I2 trong NaOH",
          "Thuốc thử Tollens ([Ag(NH3)2]OH) đun nóng",
          "Kim loại Na",
          "Dung dịch NaOH"
        ],
        ans: 1,
        explain: "Acetaldehyde có nhóm -CHO nên tham gia phản ứng tráng bạc với thuốc thử Tollens tạo lớp bạc sáng bóng; acetone là ketone không có phản ứng tráng bạc."
      },
      {
        q: "Chất nào sau đây tham gia phản ứng tạo kết tủa màu vàng iodoform (CHI3) khi tác dụng với dung dịch I2/NaOH?",
        options: [
          "Methanal (HCHO)",
          "Benzaldehyde (C6H5CHO)",
          "Acetone (CH3COCH3)",
          "Pentan-3-one (CH3CH2COCH2CH3)"
        ],
        ans: 2,
        explain: "Acetone chứa nhóm methyl ketone (CH3-CO-) nên có phản ứng tạo kết tủa iodoform màu vàng nhạt."
      },
      {
        q: "Khử propanal bằng tác nhân khử NaBH4 thu được sản phẩm hữu cơ là:",
        options: [
          "Propan-1-ol",
          "Propan-2-ol",
          "Propanoic acid",
          "Propane"
        ],
        ans: 0,
        explain: "Aldehyde khi bị khử bởi NaBH4 sẽ tạo thành alcohol bậc I tương ứng: CH3CH2CHO + 2[H] -> CH3CH2CH2OH (propan-1-ol)."
      }
    ]
  },

  24: {
    num: 24,
    chapter: 6,
    chapterTitle: "Chương 6. Hợp chất carbonyl – Carboxylic acid",
    title: "Carboxylic acid",
    badge: "Lí thuyết & Ứng dụng",
    summary: "Cấu tạo nhóm carboxyl -COOH, liên kết hydrogen tạo dimer, nhiệt độ sôi, tính acid (tác dụng kim loại, oxide base, base, muối carbonate), phản ứng ester hoá thuận nghịch, phương pháp lên men giấm và ứng dụng tẩy cặn canxi.",
    objectives: [
      "Nêu định nghĩa carboxylic acid, công thức chung của acid no, đơn chức, mạch hở CnH2n+1COOH (n >= 0) và gọi tên theo IUPAC.",
      "Giải thích nhiệt độ sôi vượt trội của carboxylic acid so với alcohol tương đương dựa trên cấu trúc liên kết hydrogen dạng dimer.",
      "Viết phương trình phản ứng thể hiện tính acid (đổi màu quỳ tím, tác dụng với Mg, CuO, NaOH, CaCO3).",
      "Viết phương trình phản ứng ester hoá giữa carboxylic acid và alcohol với xúc tác H2SO4 đặc, đun nóng; tính hiệu suất phản ứng.",
      "Mô tả phương pháp lên men giấm từ ethanol và giải thích ứng dụng dùng giấm ăn tẩy cặn vôi CaCO3 trong gia đình."
    ],
    sections: [
      {
        heading: "1. Khái niệm, Cấu tạo & Danh pháp",
        type: "grid",
        items: [
          {
            badge: "Cấu tạo nhóm -COOH",
            title: "Khái niệm Carboxylic Acid",
            points: [
              "Định nghĩa: Carboxylic acid là những hợp chất hữu cơ trong phân tử có nhóm carboxyl (-COOH) liên kết trực tiếp với nguyên tử hydrogen hoặc gốc hydrocarbon.",
              "Công thức acid no, đơn chức, mạch hở: CnH2n+1COOH (n >= 0) hoặc CxHyO2.",
              "Cấu tạo nhóm carboxyl: Gồm nhóm carbonyl (>C=O) liên kết với nhóm hydroxyl (-OH). Hiệu ứng liên hợp giữa cặp e tự do trên nguyên tử O của nhóm -OH với liên kết C=O làm mật độ điện tích dịch chuyển mạnh về O, khiến liên kết O-H phân cực mạnh hơn hẳn trong alcohol và phenol, dễ phân li ra H+."
            ]
          },
          {
            badge: "Danh pháp IUPAC & Tên thường",
            title: "Quy tắc gọi tên",
            points: [
              "Tên thay thế: [Tên nhánh] + [Tên alkane mạch chính] + [oic acid] (nguyên tử C của nhóm -COOH luôn là C1).",
              "Ví dụ tên gọi:",
              "• HCOOH: methanoic acid (tên thường: formic acid, acid kiến cắn).",
              "• CH3COOH: ethanoic acid (tên thường: acetic acid, giấm ăn).",
              "• CH3CH2COOH: propanoic acid (propionic acid).",
              "• CH3(CH2)2COOH: butanoic acid (butyric acid, mùi bơ ôi).",
              "• (CH3)2CHCOOH: 2-methylpropanoic acid (isobutyric acid).",
              "• CH2=CH-COOH: propenoic acid (acrylic acid)."
            ]
          }
        ]
      },
      {
        heading: "2. Tính chất vật lí & Liên kết Hydrogen Dimer",
        type: "list",
        items: [
          {
            title: "Liên kết Hydrogen dạng Dimer & Nhiệt độ sôi",
            desc: "• Các phân tử carboxylic acid có khả năng tạo liên kết hydrogen đôi liên phân tử rất bền vững tạo thành dạng phân tử kép (dimer) hoặc dạng chuỗi polimer.\n• So sánh nhiệt độ sôi: Với các hợp chất có phân tử khối xấp xỉ nhau, nhiệt độ sôi tăng theo thứ tự: Hydrocarbon < Dẫn xuất halogen < Aldehyde/Ketone < Alcohol < Carboxylic acid.\n  Ví dụ: Acetic acid CH3COOH (M = 60) sôi ở 118°C, cao hơn hẳn propan-1-ol C3H7OH (M = 60, sôi ở 97,2°C) và butane C4H10 (M = 58, sôi ở -0,5°C).\n• Độ tan: Các acid đầu dãy (formic, acetic, propionic acid) tan vô hạn trong nước nhờ tạo liên kết hydrogen mạnh với các phân tử nước. Khi số nguyên tử C tăng lên, độ tan giảm dần."
          }
        ]
      },
      {
        heading: "3. Tính chất hoá học của Carboxylic Acid",
        type: "list",
        items: [
          {
            title: "Tính acid (Phân li thuận nghịch trong nước)",
            desc: "Dung dịch carboxylic acid phân li thuận nghịch trong nước: RCOOH <=> RCOO- + H+. Là các acid yếu nhưng vẫn thể hiện đầy đủ tính chất của một acid:\n• Làm quỳ tím hoá đỏ rực rỡ.\n• Tác dụng với kim loại đứng trước hydrogen giải phóng khí H2: 2CH3COOH + Mg -> (CH3COO)2Mg (magnesium acetate) + H2↑.\n• Tác dụng với basic oxide và base: 2CH3COOH + CuO --(t°)-> (CH3COO)2Cu (màu xanh lam) + H2O; CH3COOH + NaOH -> CH3COONa + H2O.\n• Tác dụng với muối carbonate giải phóng khí CO2 sủi bọt: 2CH3COOH + CaCO3 -> (CH3COO)2Ca + CO2↑ + H2O.\n• Ứng dụng gia đình: Dùng giấm ăn (chứa 4-8% acetic acid) để tẩy cặn canxi carbonate đóng bám trong ấm đun nước, vòi sen, thiết bị vệ sinh; tẩy sạch lớp gỉ oxide trên đồ đồng."
          },
          {
            title: "Phản ứng Ester hoá (Tác dụng với Alcohol)",
            desc: "Khi đun nóng carboxylic acid với alcohol có xúc tác sulfuric acid đặc, xảy ra phản ứng ester hoá tạo ester có mùi thơm hoa quả và nước:\n• Phương trình tổng quát: RCOOH + R'OH <=(H2SO4 đặc, t°)=> RCOOR' + H2O.\n• Ví dụ điều chế ethyl acetate (mùi thơm táo/dầu chuối): CH3COOH + C2H5OH <=(H2SO4 đặc, t°)=> CH3COOC2H5 + H2O.\n• Đặc điểm phản ứng: Là phản ứng thuận nghịch và toả nhiệt. Vai trò của H2SO4 đặc là chất xúc tác làm tăng tốc độ phản ứng, đồng thời có tính hút nước mạnh giúp cân bằng chuyển dịch theo chiều thuận tạo nhiều ester hơn.\n• Công thức tính hiệu suất phản ứng: H% = (Khối lượng ester thực tế thu được / Khối lượng ester lí thuyết) * 100%."
          }
        ]
      },
      {
        heading: "4. Phương pháp điều chế & Ứng dụng",
        type: "list",
        items: [
          {
            title: "Phương pháp điều chế Acetic acid",
            desc: "• Phương pháp cổ truyền (Lên men giấm): Dùng men vi khuẩn Acetobacter oxi hoá dung dịch rượu loãng (ethanol 8-10%) bằng oxygen không khí ở 25-30°C: C2H5OH + O2 --(men giấm)-> CH3COOH + H2O.\n• Phương pháp công nghiệp hiện đại: Carbonyl hoá methanol bằng carbon monoxide (phương pháp Monsanto): CH3OH + CO --(xt, t°)-> CH3COOH; hoặc oxi hoá butane từ dầu mỏ: 2C4H10 + 5O2 --(xt, t°)-> 4CH3COOH + 2H2O."
          },
          {
            title: "Ứng dụng của Carboxylic acid",
            desc: "• Acetic acid: Làm giấm ăn, chất bảo quản và điều vị thực phẩm; sản xuất tơ nhân tạo cellulose acetate, keo dán poly(vinyl acetate) - PVA, dung môi trong công nghiệp dược phẩm (tổng hợp aspirin).\n• Các acid khác: Formic acid dùng trong công nghiệp dệt nhuộm, thuộc da; Citric acid (trong chanh) làm chất tạo chua nước giải khát, tẩy rửa sinh học."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để tẩy sạch lớp cặn vôi (thành phần chính là CaCO3) bám ở đáy ấm đun nước siêu tốc trong gia đình, hoá chất an toàn và dễ kiếm nhất là:",
        options: [
          "Dung dịch nước xà phòng",
          "Giấm ăn (chứa acetic acid)",
          "Dung dịch nước vôi trong",
          "Dung dịch muối ăn (NaCl)"
        ],
        ans: 1,
        explain: "Acetic acid trong giấm ăn phản ứng với cặn vôi CaCO3 hoà tan thành muối tan và giải phóng khí CO2: 2CH3COOH + CaCO3 -> (CH3COO)2Ca + CO2↑ + H2O."
      },
      {
        q: "Đun nóng hỗn hợp gồm 6,0 gam CH3COOH và 4,6 gam C2H5OH có H2SO4 đặc làm xúc tác thu được 5,28 gam ethyl acetate (CH3COOC2H5). Hiệu suất của phản ứng ester hoá là:",
        options: [
          "50%",
          "60%",
          "70%",
          "80%"
        ],
        ans: 1,
        explain: "n(CH3COOH) = 6,0/60 = 0,1 mol; n(C2H5OH) = 4,6/46 = 0,1 mol => n(ester lí thuyết) = 0,1 mol => m(ester lí thuyết) = 0,1 * 88 = 8,8 gam. Hiệu suất H% = (5,28 / 8,8) * 100% = 60%."
      },
      {
        q: "Hợp chất nào sau đây có nhiệt độ sôi cao nhất trong số các chất có cùng số nguyên tử carbon?",
        options: [
          "CH3-CH2-CH3 (Propane)",
          "CH3-CH2-CHO (Propanal)",
          "CH3-CH2-CH2OH (Propan-1-ol)",
          "CH3-COOH (Ethanoic acid, M = 60)"
        ],
        ans: 3,
        explain: "Carboxylic acid có khả năng tạo liên kết hydrogen liên phân tử đôi dạng dimer rất bền vững nên có nhiệt độ sôi cao nhất so với alcohol, aldehyde và hydrocarbon tương đương."
      }
    ]
  },

  25: {
    num: 25,
    chapter: 6,
    chapterTitle: "Chương 6. Hợp chất carbonyl – Carboxylic acid",
    title: "Ôn tập chương 6",
    badge: "Hệ thống & Bài tập",
    summary: "Tổng kết toàn diện hợp chất carbonyl (aldehyde, ketone) và carboxylic acid. Phân biệt nhóm chức bằng thuốc thử đặc trưng (Tollens, Cu(OH)2, I2/NaOH, NaHCO3) và các bài toán hiệu suất ester hoá.",
    objectives: [
      "Hệ thống hoá cấu trúc và tính chất hoá học đặc trưng của aldehyde, ketone và carboxylic acid.",
      "Vận dụng thành thạo các thuốc thử để nhận biết và phân biệt từng loại nhóm chức chứa oxygen.",
      "Giải quyết các bài toán định lượng: phản ứng tráng bạc của aldehyde, bài toán phản ứng trung hoà và tính hiệu suất phản ứng ester hoá."
    ],
    sections: [
      {
        heading: "1. Bảng nhận biết các hợp chất hữu cơ chứa Oxygen",
        type: "table",
        headers: ["Hợp chất", "Nhóm chức", "Thuốc thử đặc trưng", "Hiện tượng quan sát được", "Phương trình minh hoạ"],
        rows: [
          ["Alcohol đơn chức", "-OH (carbon no)", "Kim loại Na", "Sủi bọt khí không màu H2↑", "2ROH + 2Na -> 2RONa + H2↑"],
          ["Polyalcohol có -OH kề", ">= 2 nhóm -OH kề nhau", "Cu(OH)2 ở nhiệt độ thường", "Hoà tan kết tủa, tạo dung dịch xanh lam thẫm", "2C3H5(OH)3 + Cu(OH)2 -> Phức đồng xanh thẫm + 2H2O"],
          ["Phenol", "-OH gắn vòng benzene", "Nước Bromine", "Xuất hiện kết tủa trắng 2,4,6-tribromophenol", "C6H5OH + 3Br2 -> C6H2Br3OH↓ trắng + 3HBr"],
          ["Aldehyde", "-CHO", "Thuốc thử Tollens [Ag(NH3)2]OH (đun nóng)", "Tạo lớp kim loại bạc sáng bóng bám thành ống nghiệm", "RCHO + 2[Ag(NH3)2]OH -> RCOONH4 + 2Ag↓ + 3NH3 + H2O"],
          ["Methyl ketone & Ethanal", "CH3-C=O", "Dung dịch I2 trong NaOH", "Xuất hiện kết tủa màu vàng nhạt iodoform CHI3", "CH3COR + 3I2 + 4NaOH -> CHI3↓ vàng + RCOONa + 3NaI + 3H2O"],
          ["Carboxylic acid", "-COOH", "Dung dịch NaHCO3 hoặc Na2CO3", "Sủi bọt khí không màu CO2↑ làm đục nước vôi", "RCOOH + NaHCO3 -> RCOONa + CO2↑ + H2O"]
        ]
      },
      {
        heading: "2. Sơ đồ chuỗi chuyển hoá hữu cơ đa chức",
        type: "list",
        items: [
          {
            title: "Chuỗi chuyển hoá từ Hydrocarbon đến Ester",
            desc: "C2H4 (ethylene) --(+H2O, H+, t°)--> C2H5OH (ethanol) --(+CuO, t°)--> CH3CHO (acetaldehyde) --(+[O] hoặc oxi hoá)--> CH3COOH (acetic acid) --(+C2H5OH, H2SO4 đặc, t°)--> CH3COOC2H5 (ethyl acetate)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Thuốc thử nào sau đây dùng để nhận biết nhanh chóng dung dịch acetic acid (CH3COOH) và phân biệt với ethanol (C2H5OH)?",
        options: [
          "Kim loại Na",
          "Dung dịch NaHCO3",
          "Dung dịch phenolphtalein",
          "Dung dịch AgNO3"
        ],
        ans: 1,
        explain: "CH3COOH có tính acid nên phản ứng với NaHCO3 giải phóng khí CO2 sủi bọt: CH3COOH + NaHCO3 -> CH3COONa + CO2↑ + H2O. Ethanol không phản ứng."
      },
      {
        q: "Cho 0,1 mol một aldehyde đơn chức X thực hiện phản ứng tráng bạc hoàn toàn với lượng dư thuốc thử Tollens thu được 43,2 gam kim loại Ag. Aldehyde X là:",
        options: [
          "CH3CHO",
          "HCHO",
          "C2H5CHO",
          "C6H5CHO"
        ],
        ans: 1,
        explain: "n(Ag) = 43,2 / 108 = 0,4 mol. Ta thấy n(Ag) / n(X) = 0,4 / 0,1 = 4 => Aldehyde X chỉ có thể là formaldehyde (HCHO) vì 1 mol HCHO tạo tối đa 4 mol Ag."
      },
      {
        q: "Phản ứng giữa carboxylic acid và alcohol có mặt xúc tác H2SO4 đặc được gọi là phản ứng:",
        options: [
          "Xà phòng hoá",
          "Trùng ngưng",
          "Ester hoá",
          "Thuỷ phân"
        ],
        ans: 2,
        explain: "Phản ứng giữa carboxylic acid và alcohol tạo thành ester và nước được gọi là phản ứng ester hoá."
      }
    ]
  }
};
