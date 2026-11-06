// khtn9_data_chemistry.js - Phần 2: Hóa học (Bài 18 đến Bài 35)
module.exports = [
  {
    id: 18,
    title: "Tính chất chung của kim loại",
    chapter: "CHƯƠNG VI. KIM LOẠI",
    branch: "Hóa học",
    icon: "fa-cubes",
    summary: "Tính chất vật lí (dẫn điện, dẫn nhiệt, ánh kim, dẻo) và tính chất hóa học đặc trưng (tính khử) của kim loại.",
    keyPoints: [
      "Tính chất vật lí chung: Tính dẻo (dễ rèn, kéo sợi, dát mỏng - Au dẻo nhất), tính dẫn điện (Ag > Cu > Au > Al > Fe), tính dẫn nhiệt và ánh kim lấp lánh.",
      "Ở điều kiện thường, hầu hết kim loại ở thể rắn (ngoại trừ thủy ngân Hg là chất lỏng). Kim loại có nhiệt độ nóng chảy cao nhất là Tungsten (W ~ 3422°C), nhẹ nhất là Lithium (Li).",
      "Tính chất hóa học đặc trưng là tính khử: Nguyên tử kim loại dễ nhường electron hóa trị tạo ion dương: M -> M^n+ + n e.",
      "Tác dụng với phi kim: Kim loại tác dụng với oxygen tạo basic oxide (2Mg + O2 -> 2MgO; 3Fe + 2O2 -> Fe3O4); tác dụng với phi kim khác tạo muối (2Fe + 3Cl2 -> 2FeCl3; Fe + S -> FeS).",
      "Tác dụng với dung dịch acid (HCl, H2SO4 loãng): Kim loại đứng trước H đẩy được hydrogen ra khỏi acid tạo muối và giải phóng khí H2 (Zn + 2HCl -> ZnCl2 + H2^).",
      "Tác dụng với dung dịch muối: Kim loại hoạt động mạnh hơn đẩy kim loại yếu hơn ra khỏi muối của nó (Fe + CuSO4 -> FeSO4 + Cu)."
    ],
    formula: "\\text{Tính khử}: M \\to M^{n+} + ne; \\quad \\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2\\uparrow",
    experiment: "Nhúng một chiếc đinh sắt sạch vào ống nghiệm đựng 2-3 mL dung dịch copper(II) sulfate CuSO4 màu xanh lam; sau 5-10 phút quan sát thấy có lớp kim loại đồng màu đỏ bám ngoài đinh sắt, màu xanh của dung dịch nhạt dần.",
    quiz: {
      q: "Kim loại nào sau đây có độ dẫn điện tốt nhất trong số tất cả các kim loại?",
      options: [
        "Đồng (Copper - Cu)",
        "Bạc (Silver - Ag)",
        "Vàng (Gold - Au)",
        "Nhôm (Aluminium - Al)"
      ],
      ans: 1,
      expl: "Bạc (Ag) là kim loại có khả năng dẫn điện và dẫn nhiệt tốt nhất. Thứ tự dẫn điện giảm dần là: Ag > Cu > Au > Al > Fe. Trong thực tế, đồng và nhôm được dùng làm dây dẫn phổ biến vì giá thành rẻ hơn bạc rất nhiều."
    }
  },
  {
    id: 19,
    title: "Dãy hoạt động hóa học",
    chapter: "CHƯƠNG VI. KIM LOẠI",
    branch: "Hóa học",
    icon: "fa-arrow-down-short-wide",
    summary: "Dãy hoạt động hóa học của kim loại và ý nghĩa dự đoán chiều phản ứng với nước, acid và muối.",
    keyPoints: [
      "Dãy hoạt động hóa học theo SGK KNTN 9: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au (ghi nhớ: Khi Nào Cần May Áo Giáp Sắt Phải Hỏi Cụ Bạc Vàng).",
      "Mức độ hoạt động hóa học của kim loại giảm dần từ trái sang phải.",
      "Kim loại rất mạnh (K, Na, Ca) phản ứng mãnh liệt với nước ở nhiệt độ thường tạo dung dịch kiềm hydroxide và khí H2: 2Na + 2H2O -> 2NaOH + H2^.",
      "Kim loại đứng trước H phản ứng với dung dịch acid loãng (HCl, H2SO4 loãng) giải phóng khí H2; kim loại đứng sau H (Cu, Ag, Au) không phản ứng giải phóng H2.",
      "Kim loại đứng trước đẩy được kim loại đứng sau ra khỏi dung dịch muối của chúng (lưu ý: K, Na, Ca phản ứng với nước trước nên không dùng để đẩy kim loại)."
    ],
    formula: "\\text{K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au}",
    experiment: "Cho mẩu kẽm Zn vào hai ống nghiệm: Ống 1 đựng dd HCl loãng (sủi bọt khí H2 mạnh); Ống 2 nhúng lá đồng Cu vào dd HCl loãng (không có hiện tượng sủi bọt khí).",
    quiz: {
      q: "Cặp chất nào sau đây KHÔNG xảy ra phản ứng hóa học ở nhiệt độ thường?",
      options: [
        "Fe + dung dịch CuSO4",
        "Zn + dung dịch HCl loãng",
        "Cu + dung dịch FeSO4",
        "Mg + dung dịch AgNO3"
      ],
      ans: 2,
      expl: "Trong dãy hoạt động hóa học, đồng (Cu) đứng sau sắt (Fe) nên Cu yếu hơn Fe và không thể đẩy được Fe ra khỏi dung dịch muối FeSO4."
    }
  },
  {
    id: 20,
    title: "Tách kim loại và việc sử dụng hợp kim",
    chapter: "CHƯƠNG VI. KIM LOẠI",
    branch: "Hóa học",
    icon: "fa-industry",
    summary: "Nguyên tắc điều chế kim loại từ quặng, sơ lược luyện gang - thép trong lò cao và ứng dụng đa dạng của hợp kim.",
    keyPoints: [
      "Nguyên tắc tách kim loại: Khử ion kim loại trong hợp chất thành nguyên tử kim loại tự do: M^n+ + n e -> M.",
      "Phương pháp điện phân nóng chảy: Dùng cho các kim loại hoạt động mạnh (K, Na, Ca, Mg, Al): 2Al2O3 -đpnc (cryolite)-> 4Al + 3O2.",
      "Phương pháp nhiệt luyện: Dùng chất khử như C, CO, H2 khử oxide kim loại trung bình và yếu (Zn, Fe, Cu) ở nhiệt độ cao: Fe2O3 + 3CO -> 2Fe + 3CO2.",
      "Luyện gang và thép: Gang là hợp kim của sắt với carbon (tỉ lệ C chiếm 2-5%) cùng Si, Mn, S; Thép là hợp kim Fe-C với hàm lượng carbon dưới 2%. Sắt được luyện trong lò cao từ quặng hematite Fe2O3 với than coke và đá vôi.",
      "Hợp kim có độ bền cơ học cao, chịu lực tốt, chống ăn mòn và giá thành hợp lí hơn nhiều so với kim loại nguyên chất (ví dụ duralumin dùng trong hàng không, thép không gỉ inox dùng trong y tế và đời sống)."
    ],
    formula: "\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{t^\\circ} 2\\text{Fe} + 3\\text{CO}_2; \\quad 2\\text{Al}_2\\text{O}_3 \\xrightarrow{\\text{đpnc}} 4\\text{Al} + 3\\text{O}_2",
    experiment: "Quan sát mô hình lò cao luyện gang: Dòng khí CO nóng đi từ dưới lên khử các tầng oxide sắt thành sắt nóng chảy tích tụ ở đáy lò, lớp xỉ nhẹ nổi lên trên được tháo riêng.",
    quiz: {
      q: "Để sản xuất kim loại nhôm (Aluminium) trong công nghiệp, người ta sử dụng phương pháp nào sau đây?",
      options: [
        "Nhiệt luyện khử Al2O3 bằng than cốc C",
        "Thủy luyện dùng sắt Fe đẩy Al ra khỏi dd Al2(SO4)3",
        "Điện phân nóng chảy Aluminium oxide (Al2O3) với xúc tác cryolite",
        "Nhiệt phân muối AlCl3 ở nhiệt độ cao"
      ],
      ans: 2,
      expl: "Nhôm là kim loại hoạt động hóa học mạnh, liên kết Al-O trong Al2O3 rất bền vững nên không thể khử bằng CO hay C, mà bắt buộc phải dùng phương pháp điện phân nóng chảy Al2O3 với chất hạ nhiệt độ nóng chảy là cryolite (Na3AlF6)."
    }
  },
  {
    id: 21,
    title: "Sự khác nhau cơ bản giữa phi kim và kim loại",
    chapter: "CHƯƠNG VI. KIM LOẠI",
    branch: "Hóa học",
    icon: "fa-scale-balanced",
    summary: "So sánh toàn diện tính chất vật lí và tính chất hóa học giữa đơn chất kim loại và đơn chất phi kim.",
    keyPoints: [
      "Về trạng thái và tính chất vật lí: Kim loại thường là chất rắn, dẻo, có ánh kim, dẫn điện và dẫn nhiệt tốt; Phi kim tồn tại ở cả 3 thể (khí O2, N2, Cl2; lỏng Br2; rắn C, S, P), thường giòn, không dẫn điện (ngoại lệ than chì graphite dẫn điện tốt).",
      "Về cấu tạo nguyên tử: Kim loại thường có ít electron lớp ngoài cùng (1, 2, 3 e) nên dễ nhường electron tạo cation; Phi kim thường có nhiều electron ngoài cùng (4, 5, 6, 7 e) nên dễ nhận hoặc dùng chung electron tạo anion hoặc liên kết cộng hóa trị.",
      "Về tính chất oxide: Kim loại thường tạo basic oxide (Na2O, CaO, FeO) tan trong acid tạo muối; Phi kim thường tạo acidic oxide (CO2, SO2, SO3, P2O5) tan trong nước tạo acid.",
      "Độ âm điện: Phi kim có độ âm điện lớn hơn nhiều so với kim loại; phi kim mạnh nhất là Fluorine (F), kim loại mạnh nhất là Francium (Fr)/Caesium (Cs).",
      "Ứng dụng: Kim loại làm khung chịu lực, vỏ xe, dây cáp điện; Phi kim dùng làm chất khử trùng (Cl2), nhiên liệu (C), sản xuất phân bón (N2, P), acid công nghiệp (S)."
    ],
    formula: "\\text{Kim loại} \\to \\text{Nhường } e \\to \\text{Cation} (M^{n+}); \\quad \\text{Phi kim} \\to \\text{Nhận } e \\to \\text{Anion} (X^{m-})",
    experiment: "So sánh tính dẫn điện: Dùng mạch điện có bóng đèn pin và nguồn 3V; kẹp lần lượt đoạn dây đồng Cu (đèn sáng rực) và mẫu lưu huỳnh S rắn (đèn không sáng)."
    ,
    quiz: {
      q: "Đặc điểm nào sau đây là tính chất vật lí chung của phần lớn các đơn chất phi kim ở điều kiện thường?",
      options: [
        "Dẫn điện và dẫn nhiệt rất tốt",
        "Có ánh kim lấp lánh và dễ dát mỏng",
        "Không có ánh kim, giòn ở thể rắn, dẫn điện và dẫn nhiệt kém",
        "Có độ dẻo cao và dễ kéo thành sợi mảnh"
      ],
      ans: 2,
      expl: "Hầu hết các phi kim không có ánh kim, nếu ở thể rắn thì giòn và dễ vỡ vụn khi gõ nhẹ, là chất cách điện và cách nhiệt kém (trừ than chì là chất dẫn điện)."
    }
  },
  {
    id: 22,
    title: "Giới thiệu về hợp chất hữu cơ",
    chapter: "CHƯƠNG VII. HỢP CHẤT HỮU CƠ, HYDROCARBON VÀ NHIÊN LIỆU",
    branch: "Hóa học",
    icon: "fa-dna",
    summary: "Định nghĩa hợp chất hữu cơ, hóa trị và đặc điểm liên kết của carbon, phân loại hydrocarbon và dẫn xuất.",
    keyPoints: [
      "Hợp chất hữu cơ là hợp chất của nguyên tố carbon (trừ CO, CO2, muối carbonate như Na2CO3, muối carbide CaC2, xyanua...).",
      "Đặc điểm cấu tạo: Trong hợp chất hữu cơ, nguyên tử carbon luôn có hóa trị IV. Các nguyên tử carbon có khả năng liên kết trực tiếp với nhau tạo thành mạch carbon (mạch thẳng, mạch nhánh, mạch vòng).",
      "Các loại liên kết: Liên kết đơn (1 cặp e dùng chung, bền), liên kết đôi (gồm 1 liên kết bền và 1 liên kết kém bền dễ bị bẻ gãy), liên kết ba.",
      "Công thức phân tử (CTPT) cho biết số lượng nguyên tử mỗi nguyên tố; Công thức cấu tạo (CTCT) biểu diễn trật tự và cách thức liên kết giữa các nguyên tử.",
      "Hiện tượng đồng phân: Những hợp chất khác nhau nhưng có cùng công thức phân tử được gọi là các chất đồng phân của nhau (ví dụ C2H6O có đồng phân là dimethyl ether CH3-O-CH3 và ethylic alcohol C2H5OH).",
      "Phân loại: Hydrocarbon (chỉ chứa C và H) và Dẫn xuất của hydrocarbon (ngoài C, H còn có O, N, S, halogen...)."
    ],
    formula: "\\text{Hợp chất hữu cơ} = \\text{Hydrocarbon (C, H)} + \\text{Dẫn xuất hydrocarbon (C, H, O, N...)}",
    experiment: "Đốt cháy một mẩu nến paraffin (hydrocarbon), úp ngược cốc thủy tinh khô lên ngọn nến; thành cốc mờ đi do có hơi nước H2O ngưng tụ, rót nước vôi trong Ca(OH)2 vào cốc lắc nhẹ thấy nước vôi vẩn đục chứng tỏ có CO2 sinh ra.",
    quiz: {
      q: "Chất nào sau đây là hợp chất hữu cơ?",
      options: [
        "CaCO3 (đá vôi)",
        "CO2 (khí carbon dioxide)",
        "CH4 (khí methane)",
        "NaHCO3 (muối nở baking soda)"
      ],
      ans: 2,
      expl: "Methane (CH4) là hợp chất của carbon và hydro, thuộc loại hydrocarbon nên là hợp chất hữu cơ. Các chất CaCO3, CO2, NaHCO3 là các hợp chất vô cơ của carbon theo quy ước."
    }
  },
  {
    id: 23,
    title: "Alkane",
    chapter: "CHƯƠNG VII. HỢP CHẤT HỮU CƠ, HYDROCARBON VÀ NHIÊN LIỆU",
    branch: "Hóa học",
    icon: "fa-fire-flame-simple",
    summary: "Cấu tạo đồng đẳng alkane mạch hở CnH2n+2, tính chất vật lí, phản ứng cháy tỏa nhiệt và phản ứng thế halogen.",
    keyPoints: [
      "Alkane là hydrocarbon no, mạch hở, trong phân tử chỉ chứa các liên kết đơn C-C và C-H. Công thức chung: CnH2n+2 (n >= 1).",
      "Các alkane đầu dãy: Methane (CH4), Ethane (C2H6), Propane (C3H8), Butane (C4H10). Từ C1 đến C4 là chất khí ở điều kiện thường, không màu, nhẹ hơn không khí, rất ít tan trong nước.",
      "Phản ứng cháy: Alkane cháy trong không khí tỏa rất nhiều nhiệt: CnH2n+2 + (3n+1)/2 O2 -> n CO2 + (n+1) H2O. Ví dụ: CH4 + 2O2 -> CO2 + 2H2O (Delta H < 0).",
      "Nếu thiếu oxygen: Phản ứng cháy không hoàn toàn sinh ra khí CO (cực độc, không mùi) và muội than C gây ô nhiễm.",
      "Phản ứng thế: Khi có ánh sáng khuếch tán, alkane tham gia phản ứng thế nguyên tử hydrogen bằng nguyên tử halogen (Chlorine, Bromine): CH4 + Cl2 -as-> CH3Cl + HCl.",
      "Ứng dụng: Methane là thành phần chính của khí thiên nhiên và khí Biogas; Propane và Butane nén lỏng tạo thành khí đốt dân dụng LPG (bình gas gia đình)."
    ],
    formula: "\\text{C}_n\\text{H}_{2n+2} + \\frac{3n+1}{2}\\text{O}_2 \\xrightarrow{t^\\circ} n\\text{CO}_2 + (n+1)\\text{H}_2\\O; \\quad \\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{\\text{askt}} \\text{CH}_3\\text{Cl} + \\text{HCl}",
    experiment: "Thu khí methane CH4 từ phản ứng nung vôi tôi xút (CH3COONa + NaOH -> CH4 + Na2CO3) vào ống nghiệm; đốt đầu ống dẫn khí thấy ngọn lửa màu xanh mờ tỏa nhiều nhiệt.",
    quiz: {
      q: "Khí thiên nhiên và khí sinh học biogas dùng trong đời sống có thành phần chủ yếu là hydrocarbon nào sau đây?",
      options: [
        "Methane (CH4)",
        "Ethene (C2H4)",
        "Acetylene (C2H2)",
        "Benzene (C6H6)"
      ],
      ans: 0,
      expl: "Methane (CH4) là alkane đơn giản nhất và chiếm tới 85-95% thể tích khí thiên nhiên, cũng như là thành phần chính của khí Biogas sinh học."
    }
  },
  {
    id: 24,
    title: "Alkene",
    chapter: "CHƯƠNG VII. HỢP CHẤT HỮU CƠ, HYDROCARBON VÀ NHIÊN LIỆU",
    branch: "Hóa học",
    icon: "fa-link",
    summary: "Đặc điểm liên kết đôi C=C của alkene, phản ứng cộng làm mất màu nước bromine và phản ứng trùng hợp tạo nhựa PE.",
    keyPoints: [
      "Alkene là hydrocarbon không no, mạch hở, trong phân tử có chứa một liên kết đôi C=C. Công thức chung: CnH2n (n >= 2).",
      "Chất tiêu biểu: Ethene (Ethylene): C2H4 có công thức cấu tạo CH2=CH2. Là chất khí không màu, nhẹ hơn không khí, ít tan trong nước.",
      "Đặc điểm liên kết đôi C=C gồm một liên kết sigma bền và một liên kết pi kém bền, rất dễ bị đứt ra trong các phản ứng hóa học.",
      "Phản ứng cộng: Phản ứng đặc trưng của alkene. Ethene làm mất màu dung dịch nước bromine màu nâu đỏ: CH2=CH2 + Br2 -> CH2Br-CH2Br (1,2-dibromoethane không màu). Dùng phản ứng này để nhận biết hydrocarbon không no.",
      "Phản ứng cộng hydro: C2H4 + H2 -Ni, t°-> C2H6.",
      "Phản ứng trùng hợp: Dưới áp suất, nhiệt độ và xúc tác thích hợp, nhiều phân tử ethene kết hợp với nhau tạo thành polymer polyethylene (nhựa PE): n CH2=CH2 -> (-CH2-CH2-)n.",
      "Vai trò sinh học: Khí ethene là hormone thực vật có tác dụng thúc đẩy quá trình chín của trái cây."
    ],
    formula: "\\text{CH}_2\\!=\\!\\text{CH}_2 + \\text{Br}_2 \\to \\text{CH}_2\\text{Br}-\\text{CH}_2\\text{Br}; \\quad n\\text{CH}_2\\!=\\!\\text{CH}_2 \\xrightarrow{t^\\circ, p, xt} (-\\text{CH}_2-\\text{CH}_2-)_n",
    experiment: "Dẫn khí ethene C2H4 qua ống nghiệm chứa khoảng 2 mL dung dịch bromine Br2 loãng màu vàng cam; quan sát dung dịch bromine bị nhạt dần rồi mất màu hoàn toàn.",
    quiz: {
      q: "Để phân biệt hai bình khí không màu mất nhãn chứa Methane (CH4) và Ethene (C2H4), thuốc thử hóa học thuận tiện nhất là:",
      options: [
        "Dung dịch phenolphthalein",
        "Dung dịch nước Bromine (Br2)",
        "Dung dịch vôi trong Ca(OH)2",
        "Quỳ tím ẩm"
      ],
      ans: 1,
      expl: "Khí ethene C2H4 có liên kết đôi C=C nên phản ứng cộng làm mất màu dung dịch nước bromine, trong khi methane CH4 chỉ chứa liên kết đơn nên không làm mất màu nước bromine ở điều kiện thường."
    }
  },
  {
    id: 25,
    title: "Nguồn nhiên liệu",
    chapter: "CHƯƠNG VII. HỢP CHẤT HỮU CƠ, HYDROCARBON VÀ NHIÊN LIỆU",
    branch: "Hóa học",
    icon: "fa-gas-pump",
    summary: "Phân loại nhiên liệu rắn, lỏng, khí, năng suất tỏa nhiệt, nguy cơ ngộ độc khí CO và giải pháp sử dụng nhiên liệu hiệu quả.",
    keyPoints: [
      "Nhiên liệu là những chất khi cháy giải phóng năng lượng lớn dưới dạng nhiệt và ánh sáng.",
      "Phân loại theo trạng thái: Nhiên liệu rắn (than đá, than gỗ, củi); Nhiên liệu lỏng (xăng, dầu hỏa, dầu diesel, cồn); Nhiên liệu khí (khí mỏ dầu, khí thiên nhiên, LPG, biogas).",
      "Năng suất tỏa nhiệt: Nhiên liệu khí có năng suất tỏa nhiệt cao nhất, cháy hoàn toàn và ít tạo xỉ muội; than đá tạo nhiều xỉ, tro bụi và khí độc.",
      "Hiểm họa khí Carbon monoxide (CO): Khi đốt than củi trong phòng kín thiếu oxygen (2C + O2 -> 2CO), khí CO sinh ra liên kết chặt chẽ với hemoglobin trong hồng cầu, ngăn cản vận chuyển oxy khiến nạn nhân bị hôn mê và ngạt thở tử vong.",
      "Biện pháp sử dụng nhiên liệu hiệu quả: Cung cấp đủ không khí (đủ O2), tăng diện tích tiếp xúc của nhiên liệu với không khí, bảo trì định kì buồng đốt và chuyển đổi sang năng lượng xanh."
    ],
    formula: "\\text{Đốt cháy đủ } \\text{O}_2: \\text{C} + \\text{O}_2 \\to \\text{CO}_2; \\quad \\text{Thiếu } \\text{O}_2: 2\\text{C} + \\text{O}_2 \\to 2\\text{CO}\\uparrow (\\text{khí độc})"
    ,
    experiment: "Tìm hiểu cảnh báo an toàn phòng ngừa ngạt khí CO: Tuyệt đối không đốt than tổ ong, than củi để sưởi ấm trong phòng ngủ đóng kín cửa vào mùa đông.",
    quiz: {
      q: "Nguyên nhân chủ yếu gây tử vong khi đốt than củi, than tổ ong để sưởi ấm trong phòng kín vào mùa đông là do hít phải khí độc nào?",
      options: [
        "Khí Methane (CH4)",
        "Khí Carbon monoxide (CO)",
        "Khí Nitrogen (N2)",
        "Khí Hydrogen (H2)"
      ],
      ans: 1,
      expl: "Khi than cháy trong điều kiện thiếu dưỡng khí trong phòng kín, phản ứng cháy không hoàn toàn sinh ra khí Carbon monoxide (CO). Khí CO không màu, không mùi, gắn chặt vào hemoglobin làm tê liệt khả năng chở oxy của máu gây tử vong nhanh chóng."
    }
  },
  {
    id: 26,
    title: "Ethylic alcohol",
    chapter: "CHƯƠNG VIII. ETHYLIC ALCOHOL VÀ ACETIC ACID",
    branch: "Hóa học",
    icon: "fa-wine-bottle",
    summary: "Công thức C2H5OH, nhóm chức -OH, độ rượu, phản ứng với kim loại Sodium và tác hại của đồ uống có cồn.",
    keyPoints: [
      "Ethylic alcohol (Ethanol) có công thức phân tử C2H6O, công thức cấu tạo: CH3-CH2-OH (nhóm hydroxyl -OH là nhóm chức đặc trưng).",
      "Tính chất vật lí: Là chất lỏng không màu, mùi thơm nhẹ, vị cay, sôi ở 78.3°C, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene.",
      "Độ rượu: Là số mililit ethylic alcohol nguyên chất có trong 100 mililit dung dịch hỗn hợp rượu với nước: Độ rượu = (V_r / V_dd) * 100.",
      "Phản ứng cháy: C2H5OH + 3O2 -> 2CO2 + 3H2O (ngọn lửa màu xanh lam, tỏa nhiều nhiệt).",
      "Tác dụng với Sodium (Na): 2C2H5OH + 2Na -> 2C2H5ONa (Sodium ethylate) + H2^ (nhóm -OH có nguyên tử H linh động bị thay thế bởi Na).",
      "Điều chế: Lên men tinh bột hoặc glucose: C6H12O6 -men rượu-> 2C2H5OH + 2CO2^.",
      "Tác hại: Rượu bia gây hại cho gan, hệ thần kinh, suy giảm trí nhớ, nguyên nhân hàng đầu gây tai nạn giao thông; tuyệt đối không uống cồn công nghiệp methanol."
    ],
    formula: "\\text{Độ rượu} = \\frac{V_{\\text{alcohol}}}{V_{\\text{dung dịch}}} \\times 100; \\quad 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{Na} \\to 2\\text{C}_2\\text{H}_5\\text{ONa} + \\text{H}_2\\uparrow",
    experiment: "Cho một mẩu sodium kim loại nhỏ bằng hạt đậu xanh đã thấm khô dầu vào ống nghiệm đựng 2 mL cồn ethylic 96°; mẩu sodium chìm xuống đáy và sủi bọt khí H2 nhẹ đều đặn.",
    quiz: {
      q: "Trong 200 mL rượu 45° có chứa bao nhiêu mililit ethylic alcohol nguyên chất?",
      options: [
        "45 mL",
        "90 mL",
        "100 mL",
        "155 mL"
      ],
      ans: 1,
      expl: "Áp dụng công thức độ rượu: Độ rượu = (V_alcohol / V_dd) * 100 => V_alcohol = (Độ rượu * V_dd) / 100 = (45 * 200) / 100 = 90 mL."
    }
  },
  {
    id: 27,
    title: "Acetic acid",
    chapter: "CHƯƠNG VIII. ETHYLIC ALCOHOL VÀ ACETIC ACID",
    branch: "Hóa học",
    icon: "fa-bottle-droplet",
    summary: "Công thức CH3COOH, nhóm carboxyl -COOH, tính chất acid, phản ứng este hóa và quá trình lên men giấm.",
    keyPoints: [
      "Acetic acid có công thức phân tử C2H4O2, công thức cấu tạo: CH3-COOH (nhóm -COOH là nhóm carboxyl quy định tính acid).",
      "Tính chất vật lí: Chất lỏng không màu, mùi xốc chua gắt, tan vô hạn trong nước; dung dịch acetic acid 2-5% là giấm ăn quen thuộc.",
      "Tính chất của một acid: Làm quỳ tím hóa đỏ; tác dụng với kim loại đứng trước H (2CH3COOH + Mg -> (CH3COO)2Mg + H2^); tác dụng với basic oxide và base (CH3COOH + NaOH -> CH3COONa + H2O); tác dụng với muối carbonate (2CH3COOH + CaCO3 -> (CH3COO)2Ca + H2O + CO2^).",
      "Phản ứng este hóa (với ethylic alcohol): CH3COOH + C2H5OH <=H2SO4 đặc, t°=> CH3COOC2H5 (Ethyl acetate mùi thơm hoa quả) + H2O.",
      "Phương pháp điều chế: Lên men dung dịch rượu loãng có vi khuẩn giấm: C2H5OH + O2 -men giấm-> CH3COOH + H2O."
    ],
    formula: "\\text{C}_2\\text{H}_5\\text{OH} + \\text{O}_2 \\xrightarrow{\\text{men giấm}} \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}; \\quad \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}",
    experiment: "Nhỏ vài giọt giấm ăn vào mẩu đá vôi nhỏ CaCO3 hoặc bột baking soda NaHCO3; hiện tượng sủi bọt khí CO2 không màu lập tức xảy ra dữ dội.",
    quiz: {
      q: "Phản ứng giữa Acetic acid (CH3COOH) và Ethylic alcohol (C2H5OH) với xúc tác H2SO4 đặc đun nóng được gọi là phản ứng gì và tạo ra sản phẩm gì?",
      options: [
        "Phản ứng xà phòng hóa tạo glycerol",
        "Phản ứng este hóa tạo Ethyl acetate có mùi thơm",
        "Phản ứng trùng hợp tạo cao su tổng hợp",
        "Phản ứng lên men giấm tạo cồn"
      ],
      ans: 1,
      expl: "Phản ứng giữa acid hữu cơ (-COOH) và rượu alcohol (-OH) được gọi là phản ứng este hóa; sản phẩm thu được là ethyl acetate (CH3COOC2H5) thuộc loại este có mùi thơm dễ chịu của hoa quả chín."
    }
  },
  {
    id: 28,
    title: "Lipid",
    chapter: "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER",
    branch: "Hóa học",
    icon: "fa-oil-can",
    summary: "Cấu tạo chất béo triglyceride, trạng thái dầu và mỡ, phản ứng thủy phân và phản ứng xà phòng hóa.",
    keyPoints: [
      "Lipid là hợp chất hữu cơ có trong tế bào sống, không tan trong nước nhưng tan nhiều trong dung môi hữu cơ không phân cực (xăng, ether, benzene).",
      "Chất béo là trieste của glycerol C3H5(OH)3 với các acid béo (R-COO)3C3H5.",
      "Dầu thực vật (dầu lạc, vừng, đậu nành) thường ở thể lỏng do chứa nhiều gốc acid béo không no; Mỡ động vật (mỡ lợn, mỡ bò) thường ở thể rắn do chứa nhiều gốc acid béo no.",
      "Phản ứng thủy phân trong môi trường acid: Tạo glycerol và các acid béo tự do.",
      "Phản ứng xà phòng hóa: Khi đun chất béo với dung dịch kiềm (NaOH hoặc KOH), tạo ra glycerol và muối của các acid béo (thành phần chính của xà phòng bánh): (RCOO)3C3H5 + 3NaOH -> 3RCOONa + C3H5(OH)3.",
      "Vai trò sinh học: Cung cấp và dự trữ năng lượng cho cơ thể (1g lipid cung cấp khoảng 9 kcal), cấu tạo màng tế bào sinh học và dung môi hòa tan các vitamin A, D, E, K."
    ],
    formula: "(\\text{RCOO})_3\\text{C}_3\\text{H}_5 + 3\\text{NaOH} \\xrightarrow{t^\\circ} 3\\text{RCOONa (xà phòng)} + \\text{C}_3\\text{H}_5(\\text{OH})_3 \\text{ (glycerol)}",
    experiment: "Thí nghiệm xà phòng hóa: Cho 2 mL dầu dừa và 4 mL dung dịch NaOH đặc vào bát sứ, đun sôi nhẹ và khuấy đều trong 10-15 phút; thêm dung dịch NaCl bão hòa nguội, thấy khối xà phòng trắng nhẹ nổi lên trên bề mặt.",
    quiz: {
      q: "Sản phẩm thu được khi đun nóng chất béo với dung dịch sodium hydroxide (NaOH) là:",
      options: [
        "Ethylic alcohol và acid béo",
        "Glycerol và hỗn hợp muối sodium của các acid béo (xà phòng)",
        "Glucose và khí carbon dioxide",
        "Ethene và nước"
      ],
      ans: 1,
      expl: "Phản ứng thủy phân chất béo trong môi trường kiềm (phản ứng xà phòng hóa) luôn sinh ra glycerol C3H5(OH)3 và muối của acid béo (RCOONa) dùng làm xà phòng."
    }
  },
  {
    id: 29,
    title: "Carbohydrate. Glucose và saccharose",
    chapter: "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER",
    branch: "Hóa học",
    icon: "fa-candy-cane",
    summary: "Đặc điểm nhóm chất carbohydrate, công thức glucose C6H12O6, saccharose C12H22O11 và phản ứng tráng bạc.",
    keyPoints: [
      "Carbohydrate là hợp chất hữu cơ tạp chức chứa C, H, O (thường có tỉ lệ H:O giống trong nước).",
      "Glucose (C6H12O6): Là monosaccharide (đường đơn), có nhiều trong quả nho chín, mật ong và trong máu người (nồng độ ổn định khoảng 0.1%). Là chất kết tinh không màu, vị ngọt, dễ tan trong nước.",
      "Phản ứng tráng bạc của glucose: Trong môi trường kiềm ammonia, glucose khử được ion Ag+ trong thuốc thử Tollens tạo lớp bạc kim loại Ag sáng bóng bám vào thành ống nghiệm: C6H12O6 + Ag2O -NH3, t°-> C6H12O7 (acid gluconic) + 2Ag v.",
      "Saccharose (C12H22O11): Là disaccharide (đường đôi), có nhiều trong cây mía, củ cải đường, hoa thốt nốt. Dễ tan, vị ngọt sắc, dùng làm đường ăn hàng ngày.",
      "Phản ứng thủy phân của saccharose: Khi đun nóng có acid xúc tác, 1 phân tử saccharose bị thủy phân thành 1 phân tử glucose và 1 phân tử fructose: C12H22O11 + H2O -t°, H+-> C6H12O6 + C6H12O6."
    ],
    formula: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + \\text{Ag}_2\\text{O} \\xrightarrow{\\text{NH}_3, t^\\circ} \\text{C}_6\\text{H}_{12}\\text{O}_7 + 2\\text{Ag}\\downarrow; \\quad \\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O} \\to \\text{C}_6\\text{H}_{12}\\text{O}_6 + \\text{C}_6\\text{H}_{12}\\text{O}_6",
    experiment: "Thí nghiệm tráng gương: Cho 1 mL dung dịch AgNO3 1% vào ống nghiệm sạch, nhỏ từng giọt dung dịch NH3 đến khi kết tủa tan hết; thêm 1 mL dung dịch glucose 10%, ngâm ống nghiệm trong cốc nước nóng 60-70°C; lớp bạc kim loại sáng bóng bám đều vào thành ống nghiệm.",
    quiz: {
      q: "Chất nào sau đây có khả năng tham gia phản ứng tráng bạc (tác dụng với dung dịch AgNO3 trong NH3 đun nóng tạo lớp bạc kim loại)?",
      options: [
        "Saccharose (đường mía)",
        "Glucose (đường nho)",
        "Tinh bột",
        "Cellulose"
      ],
      ans: 1,
      expl: "Glucose có cấu tạo phân tử chứa nhóm aldehyde (-CHO) nên có tính khử, tham gia phản ứng tráng bạc tạo lớp bạc kim loại sáng bóng. Saccharose, tinh bột và cellulose không có phản ứng tráng bạc."
    }
  },
  {
    id: 30,
    title: "Tinh bột và cellulose",
    chapter: "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER",
    branch: "Hóa học",
    icon: "fa-wheat-awn",
    summary: "Polysaccharide (C6H10O5)n, phản ứng màu đặc trưng của tinh bột với iodine và ứng dụng của sợi cellulose.",
    keyPoints: [
      "Tinh bột và cellulose đều là polysaccharide có công thức phân tử chung là (C6H10O5)n, nhưng giá trị n trong cellulose lớn hơn rất nhiều so với tinh bột và có cấu trúc mạch khác nhau.",
      "Tinh bột: Là chất rắn dạng bột vô định hình màu trắng, không tan trong nước lạnh, trong nước nóng trương phồng tạo hồ tinh bột. Tích tụ nhiều trong hạt ngũ cốc (lúa, ngô), củ (khoai, sắn).",
      "Phản ứng màu đặc trưng của tinh bột với Iodine: Khi nhỏ dung dịch iodine vào hồ tinh bột (hoặc lát cắt củ khoai tây), xuất hiện màu xanh tím đặc trưng; đun nóng thì mất màu, để nguội màu xanh tím lại xuất hiện trở lại.",
      "Cellulose: Chất rắn hình sợi, màu trắng, không tan trong nước ngay cả khi đun nóng. Là thành phần cấu tạo nên thành tế bào thực vật, có nhiều trong bông nõn (98%), đay, gai, tre, gỗ.",
      "Cả tinh bột và cellulose đều bị thủy phân hoàn toàn bởi acid hoặc enzyme tạo thành sản phẩm cuối cùng là glucose: (C6H10O5)n + n H2O -> n C6H12O6."
    ],
    formula: "(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n + n\\text{H}_2\\text{O} \\xrightarrow{\\text{acid / enzyme, } t^\\circ} n\\text{C}_6\\text{H}_{12}\\text{O}_6; \\quad \\text{Tinh bột} + \\text{I}_2 \\to \\text{Màu xanh tím}",
    experiment: "Nhỏ một giọt dung dịch cồn iodine lên mặt cắt của củ khoai tây sống hoặc mặt hạt cơm nguội; vệt dung dịch lập tức chuyển sang màu xanh tím thẫm rõ rệt.",
    quiz: {
      q: "Thuốc thử đặc trưng dùng để nhận biết dung dịch hồ tinh bột là:",
      options: [
        "Dung dịch Phenolphthalein",
        "Dung dịch Nước vôi trong Ca(OH)2",
        "Dung dịch Iodine (I2)",
        "Dung dịch Muối ăn NaCl"
      ],
      ans: 2,
      expl: "Dung dịch Iodine (I2) là thuốc thử đặc hiệu để nhận biết tinh bột, tạo ra hợp chất bọc có màu xanh tím đặc trưng không thể nhầm lẫn."
    }
  },
  {
    id: 31,
    title: "Protein",
    chapter: "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER",
    branch: "Hóa học",
    icon: "fa-egg",
    summary: "Cấu tạo đại phân tử từ amino acid, liên kết peptide, hiện tượng đông tụ biến tính protein và vai trò sống còn.",
    keyPoints: [
      "Protein là hợp chất đại phân tử sinh học phức tạp được cấu tạo từ các amino acid nối với nhau bằng các liên kết peptide (-CO-NH-).",
      "Thành phần nguyên tố luôn có C, H, O, N và thường có thêm S, P, Fe...",
      "Sự đông tụ (biến tính) protein: Dưới tác dụng của nhiệt độ cao, acid mạnh, base hoặc muối kim loại nặng, cấu trúc không gian 3 chiều của protein bị phá vỡ làm protein đông tụ lại (ví dụ luộc trứng chín, nấu canh cua đóng màng riêu).",
      "Phản ứng màu biuret: Protein tác dụng với Cu(OH)2 trong môi trường kiềm cho màu tím đặc trưng.",
      "Khi đốt cháy protein sinh ra mùi khét đặc trưng (mùi tóc, lông vũ, sừng bị cháy) dùng để nhận biết sợi len tự nhiên với sợi len tổng hợp.",
      "Vai trò: Là nền tảng vật chất của sự sống, cấu tạo nên tế bào và cơ thể, enzyme xúc tác phản ứng, kháng thể bảo vệ miễn dịch, vận chuyển dưỡng chất."
    ],
    formula: "\\text{Chuỗi polypeptide}: -[\\text{NH}-\\text{CH(R)}-\\text{CO}]_n-; \\quad \\text{Đốt cháy}: \\text{Mùi khét lông tóc cháy}",
    experiment: "Lấy 2 mL dung dịch lòng trắng trứng (albumin) vào ống nghiệm, đun nóng trên ngọn lửa đèn cồn; lòng trắng trứng đông tụ lại thành khối rắn màu trắng đục.",
    quiz: {
      q: "Khi đốt cháy một mẩu sợi len tự nhiên (có nguồn gốc từ lông cừu), ta ngửi thấy mùi gì đặc trưng?",
      options: [
        "Mùi thơm ngậy như kẹo mạch nha",
        "Mùi hắc nồng nặc của khí lưu huỳnh",
        "Mùi khét lẹt giống như mùi tóc cháy",
        "Không có mùi gì"
      ],
      ans: 2,
      expl: "Sợi len lông cừu tự nhiên có thành phần cấu tạo là protein (chứa nhiều nitơ và lưu huỳnh), do đó khi đốt cháy sẽ tỏa ra mùi khét đặc trưng như tóc hoặc móng tay bị cháy."
    }
  },
  {
    id: 32,
    title: "Polymer",
    chapter: "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER",
    branch: "Hóa học",
    icon: "fa-recycle",
    summary: "Định nghĩa polymer, mắt xích monomer, phân loại polymer thiên nhiên - nhân tạo, vấn đề rác thải nhựa và tái chế.",
    keyPoints: [
      "Polymer là những hợp chất có khối lượng phân tử rất lớn do nhiều mắt xích nhỏ (monomer) liên kết với nhau tạo nên. Hệ số n gọi là hệ số trùng hợp.",
      "Phân loại theo nguồn gốc: Polymer thiên nhiên (tinh bột, cellulose, tơ tằm, cao su thiên nhiên); Polymer tổng hợp (nhựa PE, PVC, nylon-6,6, cao su buna); Polymer bán tổng hợp (tơ visco, tơ axetat).",
      "Các phương pháp tổng hợp: Phản ứng trùng hợp (kết hợp nhiều monomer có liên kết đôi như ethene -> PE) và Phản ứng trùng ngưng (kết hợp các monomer có nhóm chức giải phóng phân tử nhỏ như nước).",
      "Ứng dụng: Chất dẻo (nhựa PE, PP, PVC), tơ sợi tổng hợp, cao su đàn hồi, keo dán tổng hợp.",
      "Tác động môi trường: Nhựa tổng hợp rất khó phân hủy sinh học trong tự nhiên (mất hàng trăm năm), gây ô nhiễm trắng; Cần thực hiện nguyên tắc 3R (Reduce - Giảm thiểu, Reuse - Tái sử dụng, Recycle - Tái chế), hạn chế đồ nhựa dùng một lần."
    ],
    formula: "n\\text{A (monomer)} \\xrightarrow{t^\\circ, p, xt} -(-\\text{A}-)_n- \\text{ (polymer)}",
    experiment: "Nhận biết các loại nhựa thông dụng qua ký hiệu số tái chế (1: PETE, 2: HDPE, 3: PVC, 4: LDPE, 5: PP, 6: PS) in ở đáy chai lọ nhựa gia dụng.",
    quiz: {
      q: "Chất nào sau đây là polymer có nguồn gốc THIÊN NHIÊN?",
      options: [
        "Polyethylene (nhựa PE)",
        "Poly(vinyl chloride) (nhựa PVC)",
        "Cellulose (có trong sợi bông, gỗ)",
        "Nylon-6,6"
      ],
      ans: 2,
      expl: "Cellulose là polymer thiên nhiên có sẵn trong cơ thể thực vật (bông nõn, gỗ, tre nứa). Các chất PE, PVC, nylon-6,6 là các polymer tổng hợp do con người điều chế bằng phản ứng hóa học."
    }
  },
  {
    id: 33,
    title: "Sơ lược về hóa học vỏ Trái Đất và khai thác tài nguyên",
    chapter: "CHƯƠNG X. TÀI NGUYÊN VỎ TRÁI ĐẤT",
    branch: "Hóa học",
    icon: "fa-earth-americas",
    summary: "Thành phần nguyên tố vỏ Trái Đất (Oxygen, Silicon chiếm ưu thế), các loại quặng khoáng sản và khai thác bền vững.",
    keyPoints: [
      "Vỏ Trái Đất là lớp rắn ngoài cùng dày từ 5 đến 70 km, được cấu tạo từ các khoáng vật và đất đá phong phú.",
      "Hai nguyên tố chiếm tỉ lệ khối lượng lớn nhất trong vỏ Trái Đất là Oxygen (khoảng 46.6%) và Silicon (khoảng 27.7%), tiếp theo là Nhôm Al (8.1%), Sắt Fe (5.0%), Calcium Ca, Sodium Na, Potassium K, Magnesium Mg.",
      "Khoáng sản là các tích tụ tự nhiên của khoáng vật hoặc đá có ích, phân bố không đồng đều trên bề mặt vỏ Trái Đất.",
      "Quặng là loại đất đá chứa khoáng sản có hàm lượng kim loại hoặc hợp chất có ích đủ lớn để có thể khai thác và chế biến đem lại hiệu quả kinh tế.",
      "Tác động tiêu cực của khai thác mỏ bừa bãi: Ô nhiễm nguồn nước do kim loại nặng và hóa chất tuyển quặng, phát tán bụi mịn độc hại, sạt lở đất đá và suy thoái hệ sinh thái rừng.",
      "Yêu cầu: Khai thác gắn liền với chế biến sâu, bảo vệ cảnh quan môi trường và tái sinh thảm thực vật sau khai thác."
    ],
    formula: "\\text{Thành phần vỏ Trái Đất}: \\text{O (46.6%)} > \\text{Si (27.7%)} > \\text{Al (8.1%)} > \\text{Fe (5.0%)}",
    experiment: "Tìm hiểu mẫu khoáng vật thạch anh SiO2, quặng bauxite Al2O3.2H2O và quặng sắt hematite Fe2O3 qua kính lúp địa chất.",
    quiz: {
      q: "Hai nguyên tố hóa học chiếm tỉ lệ phần trăm khối lượng lớn nhất trong vỏ Trái Đất là:",
      options: [
        "Sắt (Fe) và Nhôm (Al)",
        "Oxygen (O) và Silicon (Si)",
        "Carbon (C) và Hydrogen (H)",
        "Calcium (Ca) và Sodium (Na)"
      ],
      ans: 1,
      expl: "Trong vỏ Trái Đất, Oxygen chiếm tỉ lệ khối lượng cao nhất (khoảng 46.6%), tiếp theo là Silicon (khoảng 27.7%). Hai nguyên tố này kết hợp tạo nên các khoáng vật silicate và cát thạch anh SiO2 chiếm phần lớn khối lượng đất đá vỏ Trái Đất."
    }
  },
  {
    id: 34,
    title: "Khai thác đá vôi. Công nghiệp silicate",
    chapter: "CHƯƠNG X. TÀI NGUYÊN VỎ TRÁI ĐẤT",
    branch: "Hóa học",
    icon: "fa-mountain",
    summary: "Phản ứng nung đá vôi CaCO3, tôi vôi, quá trình sản xuất xi măng clinker và công nghiệp thủy tinh, gốm sứ.",
    keyPoints: [
      "Đá vôi thành phần chính là Calcium carbonate CaCO3, là nguyên liệu quan trọng cho ngành xây dựng và sản xuất hóa chất.",
      "Nung đá vôi: CaCO3 -900°C-> CaO (vôi sống) + CO2^ (phản ứng thu nhiệt).",
      "Tôi vôi: CaO + H2O -> Ca(OH)2 (vôi tôi / vôi tôi tôi tỏa nhiều nhiệt dữ dội); Dung dịch Ca(OH)2 là nước vôi trong hấp thụ CO2 tạo kết tủa trắng: Ca(OH)2 + CO2 -> CaCO3 v + H2O.",
      "Sản xuất xi măng: Phối liệu chính gồm đá vôi nghiền mịn trộn với đất sét (chứa nhiều SiO2, Al2O3) và quặng sắt, nung ở 1450°C tạo thành clinker xi măng, sau đó nghiền clinker với thạch cao tạo ra bột xi măng thành phẩm.",
      "Bê tông: Hỗn hợp xi măng + cát + sỏi/đá dăm + nước nhào trộn đông kết tạo khối đá nhân tạo chịu nén cực tốt; bê tông cốt thép gia cố thêm khung thép tăng cường khả năng chịu lực kéo uốn.",
      "Công nghiệp silicate: Sản xuất thủy tinh (nấu chảy cát thạch anh SiO2 + đá vôi CaCO3 + soda Na2CO3 ở 1400°C) và đồ gốm sứ (từ đất sét thô, cao lanh nung ở nhiệt độ cao)."
    ],
    formula: "\\text{CaCO}_3 \\xrightarrow{900^\\circ\\text{C}} \\text{CaO} + \\text{CO}_2\\uparrow; \\quad \\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 \\quad (\\Delta H < 0)",
    experiment: "Thổi hơi thở (chứa CO2) qua ống hút vào ống nghiệm chứa nước vôi trong Ca(OH)2; sau vài giây nước vôi trong hóa đục như nước vo gạo do tạo thành hạt tinh thể kết tủa mịn CaCO3.",
    quiz: {
      q: "Khi nung đá vôi (CaCO3) ở nhiệt độ cao khoảng 900-1000°C, sản phẩm chất rắn thu được là gì?",
      options: [
        "Vôi tôi Ca(OH)2",
        "Vôi sống CaO",
        "Kim loại Calcium Ca",
        "Calcium sulfate CaSO4"
      ],
      ans: 1,
      expl: "Phương trình hóa học của phản ứng nung đá vôi: CaCO3 -t°-> CaO (vôi sống) + CO2^. Vôi sống CaO sau đó tác dụng với nước mới sinh ra vôi tôi Ca(OH)2."
    }
  },
  {
    id: 35,
    title: "Khai thác nhiên liệu hóa thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu",
    chapter: "CHƯƠNG X. TÀI NGUYÊN VỎ TRÁI ĐẤT",
    branch: "Hóa học",
    icon: "fa-temperature-arrow-up",
    summary: "Chu trình tuần hoàn nguyên tố carbon, sự mất cân bằng do khai thác nhiên liệu hóa thạch và biến đổi khí hậu toàn cầu.",
    keyPoints: [
      "Carbon luân chuyển liên tục trong sinh quyển giữa khí quyển (CO2), sinh vật (quang hợp/hô hấp), đại dương, đất và trầm tích đá vôi.",
      "Quá trình quang hợp hấp thu CO2 từ khí quyển để tổng hợp chất hữu cơ; Quá trình hô hấp tế bào, phân hủy xác sinh vật và núi lửa phun trào giải phóng CO2 trả lại khí quyển.",
      "Sự mất cân bằng carbon: Trong hơn 150 năm qua từ cuộc Cách mạng Công nghiệp, việc con người đốt cháy ồ ạt hàng tỉ tấn than đá, dầu mỏ và khí đốt tự nhiên đã giải phóng lượng carbon bị chôn vùi hàng triệu năm vào khí quyển với tốc độ cực nhanh.",
      "Hiệu ứng nhà kính gia tăng: Khí CO2 cùng với CH4, N2O đóng vai trò như tấm kính giữ lại bức xạ nhiệt hồng ngoại của Trái Đất không cho thoát vào vũ trụ, làm nhiệt độ bề mặt Trái Đất tăng lên.",
      "Hệ lụy khôn lường: Băng tan ở hai cực và các rặng núi cao, nước biển dâng ngập các đồng bằng châu thổ ven biển, bão lũ và hạn hán khắc nghiệt gia tăng.",
      "Hành động toàn cầu: Cam kết đạt mức phát thải ròng bằng 0 (Net Zero), trồng và phục hồi rừng đầu nguồn, chuyển đổi xe xăng sang xe điện, phát triển năng lượng gió và mặt trời."
    ],
    formula: "\\text{Quang hợp: } 6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{as, dl}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2; \\quad \\text{Đốt than: } \\text{C} + \\text{O}_2 \\to \\text{CO}_2",
    experiment: "Vẽ và phân tích sơ đồ chu trình carbon: Xác định các mũi tên hấp thụ CO2 (quang hợp cây xanh, hòa tan đại dương) và các mũi tên phát thải CO2 (đốt nhiên liệu hóa thạch, cháy rừng, hô hấp).",
    quiz: {
      q: "Hoạt động nào sau đây của con người là nguyên nhân chủ yếu làm gia tăng lượng khí CO2 trong khí quyển, dẫn đến hiện tượng ấm lên toàn cầu?",
      options: [
        "Trồng rừng phòng hộ và phủ xanh đất trống đồi trọc",
        "Đốt cháy các loại nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt) trong sản xuất và giao thông",
        "Sử dụng năng lượng điện gió và pin mặt trời",
        "Phát triển nông nghiệp hữu cơ không dùng hóa chất"
      ],
      ans: 1,
      expl: "Việc đốt cháy ồ ạt than đá, dầu mỏ và khí đốt tự nhiên phục vụ cho nhiệt điện, nhà máy luyện kim và phương tiện giao thông đã giải phóng hàng chục tỉ tấn khí CO2 vào khí quyển mỗi năm, phá vỡ thế cân bằng của chu trình carbon tự nhiên."
    }
  }
];
