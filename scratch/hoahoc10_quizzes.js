// scratch/hoahoc10_quizzes.js
// 69 Câu hỏi trắc nghiệm Hóa Học 10 (3 câu/bài x 23 bài) có đáp án và giải thích chi tiết

const quizzes = {
  1: [
    {
      q: "Trong nguyên tử trung hòa về điện, phát biểu nào sau đây luôn đúng?",
      options: [
        "Số hạt proton luôn bằng số hạt electron (p = e)",
        "Số hạt proton luôn bằng số hạt neutron (p = n)",
        "Số hạt electron luôn bằng số hạt neutron (e = n)",
        "Khối lượng nguyên tử tập trung chủ yếu ở lớp vỏ electron"
      ],
      ans: 0,
      exp: "Proton mang điện tích +1, electron mang điện tích −1, còn neutron không mang điện. Do nguyên tử trung hòa về điện nên số proton luôn bằng số electron (p = e)."
    },
    {
      q: "Thí nghiệm bắn chùm hạt alpha (α) vào lá vàng cực mỏng của Rutherford (1911) đã chứng minh điều gì về cấu tạo nguyên tử?",
      options: [
        "Nguyên tử là một khối cầu đặc khít không có khoảng trống",
        "Nguyên tử có cấu tạo rỗng, phần lớn khối lượng và điện tích dương tập trung ở hạt nhân có kích thước rất nhỏ tại tâm",
        "Hạt nhân nguyên tử mang điện tích âm và chiếm toàn bộ thể tích nguyên tử",
        "Electron đứng yên cố định bên trong hạt nhân nguyên tử"
      ],
      ans: 1,
      exp: "Hầu hết hạt α xuyên thẳng qua lá vàng chứng tỏ nguyên tử có cấu tạo rỗng; rất ít hạt α bị lệch hoặc bật ngược trở lại chứng tỏ ở tâm nguyên tử có hạt nhân kích thước rất nhỏ mang điện dương và tập trung hầu hết khối lượng."
    },
    {
      q: "Nguyên tử của nguyên tố nào sau đây có hạt nhân KHÔNG chứa hạt neutron?",
      options: [
        "Helium (⁴₂He)",
        "Carbon (¹²₆C)",
        "Hydrogen nhẹ – Protium (¹₁H)",
        "Lithium (⁷₃Li)"
      ],
      ans: 2,
      exp: "Đồng vị Protium (¹₁H) có số hiệu Z = 1 (1 proton) và số khối A = 1, do đó số neutron N = A − Z = 1 − 1 = 0."
    }
  ],

  2: [
    {
      q: "Nguyên tố hóa học là tập hợp các nguyên tử có cùng đại lượng nào sau đây?",
      options: [
        "Cùng số khối (A)",
        "Cùng số hạt neutron (N)",
        "Cùng số đơn vị điện tích hạt nhân (cùng số proton Z)",
        "Cùng tổng số hạt proton và neutron"
      ],
      ans: 2,
      exp: "Theo định nghĩa, nguyên tố hóa học là tập hợp những nguyên tử có cùng số đơn vị điện tích hạt nhân (tức có cùng số proton Z)."
    },
    {
      q: "Kí hiệu nguyên tử ²³₁₁Na cho biết nguyên tử sodium trung hòa có cấu tạo gồm:",
      options: [
        "11 proton, 11 electron và 12 neutron",
        "11 proton, 12 electron và 11 neutron",
        "23 proton, 11 electron và 12 neutron",
        "12 proton, 12 electron và 11 neutron"
      ],
      ans: 0,
      exp: "Trong kí hiệu ²³₁₁Na: số hiệu nguyên tử Z = 11 ⇒ có 11 proton và 11 electron; số khối A = 23 ⇒ số neutron N = A − Z = 23 − 11 = 12."
    },
    {
      q: "Trong tự nhiên, đồng (Copper, Cu) có hai đồng vị bền là ⁶³₂₉Cu chiếm 73% và ⁶⁵₂₉Cu chiếm 27% tổng số nguyên tử. Nguyên tử khối trung bình của Cu là:",
      options: [
        "63,54",
        "64,00",
        "64,46",
        "63,27"
      ],
      ans: 0,
      exp: "Áp dụng công thức: Ā(Cu) = (63 × 73 + 65 × 27) / 100 = (4599 + 1755) / 100 = 63,54."
    }
  ],

  3: [
    {
      q: "Hình dạng của orbital nguyên tử s (AO s) và orbital nguyên tử p (AO p) lần lượt là:",
      options: [
        "Hình số tám nổi và hình cầu",
        "Hình cầu và hình số tám nổi (hai múi)",
        "Đều có dạng hình cầu",
        "Đều có dạng hình số tám nổi"
      ],
      ans: 1,
      exp: "Orbital s (AO s) có dạng hình cầu đối xứng quanh tâm hạt nhân; còn orbital p (AO p: px, py, pz) có dạng hình số tám nổi (hai múi) định hướng theo 3 trục tọa độ."
    },
    {
      q: "Số lượng orbital (AO) và số electron tối đa chứa trong phân lớp p và phân lớp d lần lượt là:",
      options: [
        "Phân lớp p: 3 AO (tối đa 6e); Phân lớp d: 5 AO (tối đa 10e)",
        "Phân lớp p: 2 AO (tối đa 4e); Phân lớp d: 4 AO (tối đa 8e)",
        "Phân lớp p: 1 AO (tối đa 2e); Phân lớp d: 3 AO (tối đa 6e)",
        "Phân lớp p: 3 AO (tối đa 3e); Phân lớp d: 5 AO (tối đa 5e)"
      ],
      ans: 0,
      exp: "Số AO trong các phân lớp s, p, d, f lần lượt là các số lẻ 1, 3, 5, 7. Mỗi AO chứa tối đa 2 electron nên sức chứa tối đa là s², p⁶, d¹⁰, f¹⁴."
    },
    {
      q: "Nguyên tử Potassium (K) có số hiệu nguyên tử Z = 19. Cấu hình electron ở trạng thái cơ bản của nguyên tử K là:",
      options: [
        "1s²2s²2p⁶3s²3p⁶3d¹",
        "1s²2s²2p⁶3s²3p⁶4s¹",
        "1s²2s²2p⁶3s²3p⁷",
        "1s²2s²2p⁶3s²3p⁵4s²"
      ],
      ans: 1,
      exp: "Theo nguyên lí vững bền, phân lớp 4s có mức năng lượng thấp hơn 3d nên sau khi điền đầy 3p⁶ (18e), electron thứ 19 được điền vào phân lớp 4s tạo cấu hình 1s²2s²2p⁶3s²3p⁶4s¹."
    }
  ],

  4: [
    {
      q: "Ở trạng thái cơ bản, nguyên tử Nitrogen (Z = 7, cấu hình 1s²2s²2p³) có bao nhiêu electron độc thân theo quy tắc Hund?",
      options: [
        "1 electron độc thân",
        "2 electron độc thân",
        "3 electron độc thân",
        "5 electron độc thân"
      ],
      ans: 2,
      exp: "Phân lớp ngoài cùng 2p³ có 3 orbital trống; theo quy tắc Hund, 3 electron sẽ phân bố đều vào 3 ô orbital với spin song song (↑ ↑ ↑), nên có 3 electron độc thân."
    },
    {
      q: "Nguyên tử của nguyên tố X có cấu hình electron là 1s²2s²2p⁶3s²3p⁵. Nhận xét nào sau đây về X là ĐÚNG?",
      options: [
        "X có 5 electron lớp ngoài cùng và là một phi kim",
        "X có 7 electron lớp ngoài cùng (lớp M: 3s²3p⁵) và là một phi kim",
        "X có 7 electron lớp ngoài cùng và là một kim loại",
        "X là một khí hiếm"
      ],
      ans: 1,
      exp: "Lớp ngoài cùng của X là lớp thứ 3 (3s²3p⁵) có tổng cộng 2 + 5 = 7 electron lớp ngoài cùng. Nguyên tử có 7e lớp ngoài cùng là phi kim điển hình (Chlorine, Z = 17)."
    },
    {
      q: "Một nguyên tử R có tổng số hạt cơ bản (p, n, e) bằng 34, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 10. Kí hiệu nguyên tử của R là:",
      options: [
        "²³₁₁Na",
        "²⁴₁₂Mg",
        "²⁷₁₃Al",
        "¹⁹₉F"
      ],
      ans: 0,
      exp: "Ta có hệ phương trình: 2Z + N = 34 và 2Z − N = 10 ⇒ 4Z = 44 ⇒ Z = 11, N = 12, số khối A = 11 + 12 = 23 ⇒ ²³₁₁Na."
    }
  ],

  5: [
    {
      q: "Trong bảng tuần hoàn hiện đại, các nguyên tố hóa học được sắp xếp theo nguyên tắc nào sau đây?",
      options: [
        "Theo chiều tăng dần của khối lượng nguyên tử",
        "Theo chiều tăng dần của số hạt neutron trong hạt nhân",
        "Theo chiều tăng dần của điện tích hạt nhân nguyên tử (Z)",
        "Theo chiều tăng dần của bán kính nguyên tử"
      ],
      ans: 2,
      exp: "Ba nguyên tắc sắp xếp bảng tuần hoàn hiện đại: (1) Theo chiều tăng dần của điện tích hạt nhân nguyên tử; (2) Cùng số lớp e xếp cùng hàng (chu kì); (3) Cùng số e hóa trị xếp cùng cột (nhóm)."
    },
    {
      q: "Nguyên tử của nguyên tố Sulfur (S) có Z = 16 (cấu hình electron: 1s²2s²2p⁶3s²3p⁴). Vị trí của S trong bảng tuần hoàn là:",
      options: [
        "Ô 16, chu kì 3, nhóm IVA",
        "Ô 16, chu kì 3, nhóm VIA",
        "Ô 16, chu kì 4, nhóm VIA",
        "Ô 6, chu kì 3, nhóm VIA"
      ],
      ans: 1,
      exp: "S có Z = 16 nên ở ô 16; có 3 lớp electron nên thuộc chu kì 3; là nguyên tố họ p có 2 + 4 = 6 electron lớp ngoài cùng nên thuộc nhóm VIA."
    },
    {
      q: "Bảng tuần hoàn các nguyên tố hóa học hiện nay gồm bao nhiêu chu kì nhỏ và bao nhiêu chu kì lớn?",
      options: [
        "3 chu kì nhỏ (1, 2, 3) và 4 chu kì lớn (4, 5, 6, 7)",
        "4 chu kì nhỏ và 3 chu kì lớn",
        "2 chu kì nhỏ và 5 chu kì lớn",
        "7 chu kì đều là chu kì lớn"
      ],
      ans: 0,
      exp: "Bảng tuần hoàn có 7 chu kì, gồm 3 chu kì nhỏ (chu kì 1 có 2 nguyên tố, chu kì 2 và 3 mỗi chu kì có 8 nguyên tố) và 4 chu kì lớn (chu kì 4, 5, 6, 7)."
    }
  ],

  6: [
    {
      q: "Trong một chu kì, khi đi từ trái sang phải theo chiều tăng dần của điện tích hạt nhân (Z), quy luật biến đổi nào sau đây là ĐÚNG?",
      options: [
        "Bán kính nguyên tử tăng dần, độ âm điện giảm dần",
        "Bán kính nguyên tử giảm dần, độ âm điện và tính phi kim tăng dần",
        "Tính kim loại tăng dần, tính phi kim giảm dần",
        "Năng lượng ion hóa thứ nhất giảm dần"
      ],
      ans: 1,
      exp: "Đi từ trái sang phải trong một chu kì: Z tăng nhưng số lớp electron không đổi nên lực hút hạt nhân với e ngoài cùng tăng → bán kính giảm, độ âm điện tăng, tính kim loại giảm và tính phi kim tăng."
    },
    {
      q: "Cho các nguyên tố: Na (Z = 11), Mg (Z = 12), Al (Z = 13) cùng thuộc chu kì 3. Thứ tự tính kim loại giảm dần là:",
      options: [
        "Al > Mg > Na",
        "Mg > Na > Al",
        "Na > Mg > Al",
        "Na > Al > Mg"
      ],
      ans: 2,
      exp: "Trong cùng chu kì 3, theo chiều tăng Z từ Na (11) → Mg (12) → Al (13), tính kim loại giảm dần nên Na > Mg > Al."
    },
    {
      q: "Trong bảng tuần hoàn các nguyên tố hóa học (không kể khí hiếm), nguyên tố có độ âm điện lớn nhất (χ = 3,98) và tính phi kim mạnh nhất là:",
      options: [
        "Oxygen (O)",
        "Chlorine (Cl)",
        "Fluorine (F)",
        "Nitrogen (N)"
      ],
      ans: 2,
      exp: "Fluorine (F, Z = 9, chu kì 2, nhóm VIIA) nằm ở góc trên bên phải bảng tuần hoàn, có bán kính rất nhỏ và độ âm điện lớn nhất (3,98) nên là phi kim mạnh nhất."
    }
  ],

  7: [
    {
      q: "Nguyên tố R thuộc nhóm VA trong bảng tuần hoàn. Công thức oxide cao nhất và công thức hợp chất khí với hydrogen của R lần lượt là:",
      options: [
        "RO₅ và RH₃",
        "R₂O₅ và RH₃",
        "R₂O₃ và RH₅",
        "R₂O₅ và RH₅"
      ],
      ans: 1,
      exp: "R thuộc nhóm VA nên có hóa trị cao nhất với oxygen là V → công thức oxide cao nhất là R₂O₅; hóa trị với hydrogen là 8 − 5 = 3 → hợp chất khí với H là RH₃."
    },
    {
      q: "Trong dãy hydroxide của các nguyên tố chu kì 3: NaOH, Mg(OH)₂, Al(OH)₃, H₂SiO₃, H₃PO₄, H₂SO₄, HClO₄, chất nào có tính acid mạnh nhất và chất nào có tính lưỡng tính?",
      options: [
        "H₂SO₄ mạnh nhất; Mg(OH)₂ lưỡng tính",
        "HClO₄ có tính acid mạnh nhất; Al(OH)₃ có tính lưỡng tính",
        "H₃PO₄ mạnh nhất; Al(OH)₃ lưỡng tính",
        "HClO₄ mạnh nhất; H₂SiO₃ lưỡng tính"
      ],
      ans: 1,
      exp: "Đi từ trái sang phải chu kì 3, tính base giảm và tính acid tăng: NaOH (kiềm mạnh) → Mg(OH)₂ (base yếu) → Al(OH)₃ (hydroxide lưỡng tính) → ... → HClO₄ (perchloric acid – acid mạnh nhất)."
    },
    {
      q: "Hợp chất khí với hydrogen của nguyên tố R có công thức là RH₄. Trong oxide cao nhất của R, nguyên tố oxygen chiếm 53,33% về khối lượng. Nguyên tố R là:",
      options: [
        "Carbon (C = 12)",
        "Silicon (Si = 28)",
        "Sulfur (S = 32)",
        "Phosphorus (P = 31)"
      ],
      ans: 1,
      exp: "Hợp chất khí với H là RH₄ ⇒ R thuộc nhóm IVA ⇒ công thức oxide cao nhất là RO₂. Ta có: %O = 32 / (M_R + 32) = 0,5333 ⇒ M_R + 32 = 60 ⇒ M_R = 28 (Silicon – Si)."
    }
  ],

  8: [
    {
      q: "Nguyên nhân quyết định sự biến đổi tuần hoàn tính chất của các nguyên tố hóa học theo chiều tăng của điện tích hạt nhân là gì?",
      options: [
        "Sự biến đổi tuần hoàn của số hạt neutron trong hạt nhân",
        "Sự biến đổi tuần hoàn của cấu hình electron lớp ngoài cùng của nguyên tử",
        "Sự tăng liên tục của nguyên tử khối trung bình",
        "Sự thay đổi trạng thái vật lí của các đơn chất"
      ],
      ans: 1,
      exp: "Chính sự lặp lại tuần hoàn cấu hình electron lớp ngoài cùng (từ 1e đến 8e) sau mỗi chu kì là nguyên nhân quyết định sự biến đổi tuần hoàn tính chất hóa học của các nguyên tố."
    },
    {
      q: "Nguyên tố X nằm ở ô số 19, chu kì 4, nhóm IA trong bảng tuần hoàn. Nhận xét nào sau đây về X là SAI?",
      options: [
        "Nguyên tử X có 4 lớp electron và có 1 electron ở lớp ngoài cùng",
        "X là kim loại kiềm hoạt động hóa học mạnh",
        "Oxide cao nhất của X có công thức XO và là một acidic oxide",
        "Hydroxide tương ứng của X có công thức XOH là một base mạnh (kiềm)"
      ],
      ans: 2,
      exp: "X là Potassium (K, nhóm IA, hóa trị I), công thức oxide cao nhất phải là K₂O (X₂O) và là một basic oxide tan trong nước tạo kiềm mạnh KOH chứ không phải XO."
    },
    {
      q: "Cho ba nguyên tố P (Z = 15), S (Z = 16) và Cl (Z = 17). Thứ tự tăng dần tính acid của các oxoacid tương ứng với hóa trị cao nhất là:",
      options: [
        "H₃PO₄ < H₂SO₄ < HClO₄",
        "HClO₄ < H₂SO₄ < H₃PO₄",
        "H₂SO₄ < H₃PO₄ < HClO₄",
        "H₃PO₄ < HClO₄ < H₂SO₄"
      ],
      ans: 0,
      exp: "P, S, Cl nằm cùng chu kì 3 theo chiều Z tăng dần (15 → 16 → 17), nên tính acid của hydroxide cao nhất tăng dần: H₃PO₄ < H₂SO₄ < HClO₄."
    }
  ],

  9: [
    {
      q: "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kì của bảng tuần hoàn và có tổng số đơn vị điện tích hạt nhân là 25. Hai nguyên tố X và Y là:",
      options: [
        "Na (Z = 11) và Mg (Z = 12)",
        "Mg (Z = 12) và Al (Z = 13)",
        "C (Z = 6) và N (Z = 7)",
        "Al (Z = 13) và Si (Z = 14)"
      ],
      ans: 1,
      exp: "Do X, Y đứng kế tiếp trong cùng một chu kì nên Z_Y − Z_X = 1. Kết hợp Z_X + Z_Y = 25 ⇒ Z_X = 12 (Mg) và Z_Y = 13 (Al)."
    },
    {
      q: "Cho các nguyên tố: F (Z = 9), O (Z = 8), Cl (Z = 17). Thứ tự độ âm điện tăng dần của các nguyên tố trên là:",
      options: [
        "Cl < O < F",
        "O < Cl < F",
        "F < O < Cl",
        "Cl < F < O"
      ],
      ans: 0,
      exp: "Theo bảng độ âm điện Pauling và quy luật tuần hoàn: χ(Cl) = 3,16 < χ(O) = 3,44 < χ(F) = 3,98."
    },
    {
      q: "Hòa tan hoàn toàn 4,6 gam một kim loại kiềm M (nhóm IA) vào nước dư, thu được 2,479 lít khí H₂ (ở điều kiện chuẩn 25°C, 1 bar). Kim loại M là:",
      options: [
        "Lithium (Li = 7)",
        "Sodium (Na = 23)",
        "Potassium (K = 39)",
        "Rubidium (Rb = 85,5)"
      ],
      ans: 1,
      exp: "Số mol H₂ ở đkc = 2,479 / 24,79 = 0,1 mol. Phương trình: 2M + 2H₂O → 2MOH + H₂↑ ⇒ n_M = 2·n_H2 = 0,2 mol ⇒ M = 4,6 / 0,2 = 23 g/mol (Sodium – Na)."
    }
  ],

  10: [
    {
      q: "Theo quy tắc octet, trong quá trình hình thành liên kết hóa học, nguyên tử các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để đạt cấu hình bền vững có bao nhiêu electron ở lớp ngoài cùng?",
      options: [
        "4 electron ở lớp ngoài cùng",
        "6 electron ở lớp ngoài cùng",
        "8 electron ở lớp ngoài cùng (hoặc 2 electron đối với H, Li giống khí hiếm He)",
        "10 electron ở lớp ngoài cùng"
      ],
      ans: 2,
      exp: "Quy tắc octet (bộ tám): các nguyên tử có xu hướng đạt 8 electron ở lớp ngoài cùng giống cấu hình bền của các khí hiếm Ne, Ar, Kr... (riêng H, Li, Be đạt 2e giống khí hiếm He)."
    },
    {
      q: "Khi hình thành liên kết ion trong phân tử Magnesium oxide (MgO), nguyên tử Mg (Z = 12) và nguyên tử O (Z = 8) đã nhường/nhận electron như thế nào để đạt quy tắc octet?",
      options: [
        "Mg nhận 2e, O nhường 2e",
        "Mg nhường 2e tạo ion Mg²⁺ (cấu hình 2, 8); O nhận 2e tạo ion O²⁻ (cấu hình 2, 8)",
        "Mg nhường 1e, O nhận 1e",
        "Mg và O đều nhường 2e"
      ],
      ans: 1,
      exp: "Mg (2, 8, 2) nhường 2e lớp ngoài cùng để đạt (2, 8); O (2, 6) nhận 2e để đạt (2, 8). Cả hai ion Mg²⁺ và O²⁻ đều có cấu hình bền của khí hiếm Neon."
    },
    {
      q: "Phân tử nào sau đây có nguyên tử trung tâm KHÔNG tuân theo quy tắc octet (trường hợp ngoại lệ)?",
      options: [
        "CH₄",
        "NH₃",
        "H₂O",
        "BF₃ (hoặc PCl₅, NO)"
      ],
      ans: 3,
      exp: "Trong BF₃, nguyên tử Boron (B) chỉ có 6 electron xung quanh (thiếu octet); trong PCl₅, P có 10e (mở rộng octet); trong NO có 11e hóa trị (số lẻ electron)."
    }
  ],

  11: [
    {
      q: "Liên kết ion là liên kết hóa học được hình thành bởi bản chất nào sau đây?",
      options: [
        "Sự góp chung các cặp electron giữa hai nguyên tử phi kim",
        "Lực hút tĩnh điện giữa các ion mang điện tích trái dấu",
        "Lực hút yếu giữa các phân tử không phân cực",
        "Sự xen phủ bên của các orbital p"
      ],
      ans: 1,
      exp: "Liên kết ion được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu (cation và anion), điển hình giữa kim loại mạnh và phi kim mạnh."
    },
    {
      q: "Phát biểu nào sau đây là ĐÚNG khi nói về tính chất của hợp chất ion (ví dụ muối ăn NaCl)?",
      options: [
        "Ở điều kiện thường là chất khí, nhiệt độ sôi rất thấp",
        "Ở trạng thái rắn khan dẫn điện rất tốt",
        "Ở trạng thái rắn không dẫn điện, nhưng khi nóng chảy hoặc hòa tan trong nước thì dẫn điện tốt",
        "Không tan trong nước ở mọi nhiệt độ"
      ],
      ans: 2,
      exp: "Ở trạng thái rắn khan, các ion Na⁺ và Cl⁻ bị giữ chặt tại các nút mạng tinh thể nên không dẫn điện. Khi nóng chảy hoặc hòa tan trong nước, các ion di chuyển tự do nên dẫn điện tốt."
    },
    {
      q: "Trong mạng tinh thể Sodium chloride (NaCl), xung quanh mỗi ion Na⁺ có bao nhiêu ion Cl⁻ gần nhất bao bọc?",
      options: [
        "4 ion Cl⁻",
        "6 ion Cl⁻",
        "8 ion Cl⁻",
        "12 ion Cl⁻"
      ],
      ans: 1,
      exp: "Tinh thể NaCl có cấu trúc lập phương tâm diện với số phối trí 6:6 — mỗi ion Na⁺ được bao quanh bởi 6 ion Cl⁻ gần nhất (trên, dưới, trước, sau, trái, phải) và ngược lại."
    }
  ],

  12: [
    {
      q: "Trong phân tử Nitrogen (N₂, công thức cấu tạo N≡N), liên kết ba giữa hai nguyên tử N gồm bao nhiêu liên kết sigma (σ) và bao nhiêu liên kết pi (π)?",
      options: [
        "3 liên kết σ và 0 liên kết π",
        "2 liên kết σ và 1 liên kết π",
        "1 liên kết σ và 2 liên kết π",
        "0 liên kết σ và 3 liên kết π"
      ],
      ans: 2,
      exp: "Mọi liên kết ba (≡) đều được tạo bởi 1 liên kết σ (do xen phủ trục) và 2 liên kết π (do xen phủ bên của hai cặp AO p vuông góc nhau)."
    },
    {
      q: "Trong phân tử Ethylene (C₂H₄, công thức cấu tạo CH₂=CH₂), tổng số liên kết sigma (σ) và liên kết pi (π) trong toàn phân tử lần lượt là:",
      options: [
        "5 liên kết σ và 1 liên kết π",
        "4 liên kết σ và 2 liên kết π",
        "6 liên kết σ và 1 liên kết π",
        "4 liên kết σ và 1 liên kết π"
      ],
      ans: 0,
      exp: "Phân tử CH₂=CH₂ có 4 liên kết đơn C–H (tương ứng 4σ) và 1 liên kết đôi C=C (gồm 1σ + 1π) ⇒ Tổng cộng có 5 liên kết σ và 1 liên kết π."
    },
    {
      q: "Vì sao trong phân tử Carbon dioxide (CO₂, O=C=O), mỗi liên kết C=O là liên kết cộng hóa trị phân cực nhưng toàn bộ phân tử CO₂ lại KHÔNG phân cực?",
      options: [
        "Vì C và O có độ âm điện bằng nhau",
        "Vì phân tử CO₂ có cấu tạo thẳng hàng (180°) nên hai vector độ phân cực của hai liên kết C=O ngược chiều và bằng nhau, triệt tiêu nhau",
        "Vì CO₂ là hợp chất ion",
        "Vì CO₂ không có cặp electron dùng chung"
      ],
      ans: 1,
      exp: "Do CO₂ có cấu trúc đường thẳng đối xứng (O=C=O), hai moment lưỡng cực của hai liên kết C=O có cùng độ lớn nhưng ngược hướng nhau nên triệt tiêu nhau hoàn toàn."
    }
  ],

  13: [
    {
      q: "Vì sao nước đá (H₂O rắn ở 0°C) lại nhẹ hơn nước lỏng và nổi lên trên mặt nước?",
      options: [
        "Vì phân tử nước đá có khối lượng mol nhỏ hơn phân tử nước lỏng",
        "Vì trong tinh thể nước đá, các phân tử H₂O liên kết với nhau bằng 4 liên kết hydrogen tạo cấu trúc tứ diện rỗng có nhiều khoảng trống",
        "Vì nước đá không có liên kết cộng hóa trị",
        "Vì nước đá chỉ có tương tác van der Waals"
      ],
      ans: 1,
      exp: "Trong tinh thể nước đá, mỗi phân tử H₂O tạo 4 liên kết hydrogen định hướng tứ diện với 4 phân tử H₂O lân cận, tạo nên mạng tinh thể có cấu trúc rỗng làm khối lượng riêng nhỏ hơn nước lỏng."
    },
    {
      q: "Trong các chất sau: CH₄, NH₃, C₂H₆, H₂S, chất nào tạo được liên kết hydrogen liên phân tử mạnh nhất?",
      options: [
        "CH₄",
        "C₂H₆",
        "NH₃",
        "H₂S"
      ],
      ans: 2,
      exp: "Liên kết hydrogen hình thành khi H liên kết trực tiếp với nguyên tử có độ âm điện lớn và bán kính nhỏ là F, O, N. Trong 4 chất trên chỉ có NH₃ thỏa mãn điều kiện này."
    },
    {
      q: "Giải thích nào sau đây ĐÚNG khi nói về sự tăng dần nhiệt độ sôi của các đơn chất halogen từ F₂ → Cl₂ → Br₂ → I₂?",
      options: [
        "Do liên kết hydrogen giữa các phân tử tăng dần từ F₂ đến I₂",
        "Do khối lượng phân tử và kích thước phân tử (số electron) tăng dần làm tương tác van der Waals giữa các phân tử tăng mạnh",
        "Do độ âm điện tăng dần từ F đến I",
        "Do năng lượng liên kết X–X tăng dần từ F₂ đến I₂"
      ],
      ans: 1,
      exp: "Các phân tử X₂ không phân cực và không có liên kết hydrogen. Đi từ F₂ đến I₂, phân tử khối và số electron tăng lên làm tăng khả năng phân cực tạm thời → tương tác van der Waals tăng → nhiệt độ sôi tăng."
    }
  ],

  14: [
    {
      q: "Hợp chất nào sau đây trong phân tử vừa có liên kết ion, vừa có liên kết cộng hóa trị?",
      options: [
        "NaCl",
        "HCl",
        "NH₄Cl (hoặc NaNO₃, NaOH)",
        "CH₄"
      ],
      ans: 2,
      exp: "Trong NH₄Cl: liên kết giữa cation NH₄⁺ và anion Cl⁻ là liên kết ion; còn 4 liên kết N–H bên trong ion đa nguyên tử NH₄⁺ là liên kết cộng hóa trị (trong đó có 1 liên kết cho – nhận)."
    },
    {
      q: "Cho các chất: C₂H₅OH (ethanol, M = 46), CH₃COOH (acetic acid, M = 60), CH₃OCH₃ (dimethyl ether, M = 46). Thứ tự tăng dần nhiệt độ sôi là:",
      options: [
        "CH₃OCH₃ < C₂H₅OH < CH₃COOH",
        "C₂H₅OH < CH₃OCH₃ < CH₃COOH",
        "CH₃COOH < C₂H₅OH < CH₃OCH₃",
        "CH₃OCH₃ < CH₃COOH < C₂H₅OH"
      ],
      ans: 0,
      exp: "CH₃OCH₃ không tạo được liên kết hydrogen liên phân tử nên sôi thấp nhất (−24°C); C₂H₅OH và CH₃COOH đều có liên kết hydrogen nhưng liên kết hydrogen của acid bền hơn alcohol nên t°s(C₂H₅OH = 78,3°C) < t°s(CH₃COOH = 118°C)."
    },
    {
      q: "Cho dãy các ion đẳng electron (cùng có 10 electron): O²⁻ (Z=8), F⁻ (Z=9), Na⁺ (Z=11), Mg²⁺ (Z=12). Thứ tự bán kính ion giảm dần là:",
      options: [
        "Mg²⁺ > Na⁺ > F⁻ > O²⁻",
        "O²⁻ > F⁻ > Na⁺ > Mg²⁺",
        "Na⁺ > Mg²⁺ > O²⁻ > F⁻",
        "F⁻ > O²⁻ > Na⁺ > Mg²⁺"
      ],
      ans: 1,
      exp: "Với các vi hạt có cùng số electron (10e), hạt nào có điện tích hạt nhân Z càng lớn thì hút lớp vỏ electron càng mạnh làm bán kính càng nhỏ: R(O²⁻) > R(F⁻) > R(Na⁺) > R(Mg²⁺)."
    }
  ],

  15: [
    {
      q: "Số oxi hóa của nguyên tố Nitrogen (N) trong các chất và ion: NH₃, NO, NO₂, HNO₃, NH₄⁺ lần lượt là:",
      options: [
        "−3, +2, +4, +5, −3",
        "+3, +2, +4, +5, −3",
        "−3, −2, +4, +5, +3",
        "−3, +2, +2, +5, −4"
      ],
      ans: 0,
      exp: "Áp dụng quy tắc số oxi hóa (H = +1, O = −2): trong NH₃ là −3; trong NO là +2; trong NO₂ là +4; trong HNO₃ là +5; trong NH₄⁺: x + 4(+1) = +1 ⇒ x = −3."
    },
    {
      q: "Trong phản ứng oxi hóa – khử: Fe₂O₃ + 3CO → (t°) 2Fe + 3CO₂, vai trò của các chất tham gia phản ứng là:",
      options: [
        "Fe₂O₃ là chất khử, CO là chất oxi hóa",
        "Fe₂O₃ là chất oxi hóa (bị khử), CO là chất khử (bị oxi hóa)",
        "Cả Fe₂O₃ và CO đều là chất oxi hóa",
        "Cả Fe₂O₃ và CO đều là chất khử"
      ],
      ans: 1,
      exp: "Theo quy tắc 'Khử cho – O nhận': C trong CO tăng số oxi hóa từ +2 lên +4 trong CO₂ (nhường 2e) nên CO là chất khử; Fe trong Fe₂O₃ giảm số oxi hóa từ +3 xuống 0 (nhận e) nên Fe₂O₃ là chất oxi hóa."
    },
    {
      q: "Sau khi cân bằng phương trình hóa học: a Al + b HNO₃ → c Al(NO₃)₃ + d NO + e H₂O (với a, b, c, d, e là các số nguyên tối giản), hệ số (a + b) bằng:",
      options: [
        "4",
        "5",
        "7",
        "8"
      ],
      ans: 1,
      exp: "Al⁰ → Al⁺³ + 3e (×1); N⁺⁵ + 3e → N⁺² (×1). Phương trình cân bằng: 1Al + 4HNO₃ → 1Al(NO₃)₃ + 1NO + 2H₂O ⇒ a = 1, b = 4 ⇒ a + b = 5."
    }
  ],

  16: [
    {
      q: "Phản ứng hóa học nào sau đây KHÔNG phải là phản ứng oxi hóa – khử?",
      options: [
        "2Na + Cl₂ → (t°) 2NaCl",
        "CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O",
        "4NH₃ + 5O₂ → (t°, Pt) 4NO + 6H₂O",
        "Fe + CuSO₄ → FeSO₄ + Cu↓"
      ],
      ans: 1,
      exp: "Phản ứng CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O là phản ứng trao đổi ion trong dung dịch, số oxi hóa của mọi nguyên tố (Ca⁺², C⁺⁴, O⁻², H⁺¹, Cl⁻¹) đều không thay đổi."
    },
    {
      q: "Trong phản ứng: MnO₂ + 4HCl (đặc) → (t°) MnCl₂ + Cl₂↑ + 2H₂O, tỉ lệ giữa số phân tử HCl đóng vai trò chất khử và tổng số phân tử HCl tham gia phản ứng là:",
      options: [
        "1 : 4",
        "2 : 4 (tức 1 : 2)",
        "4 : 4 (tức 1 : 1)",
        "3 : 4"
      ],
      ans: 1,
      exp: "Trong 4 phân tử HCl tham gia phản ứng, có 2 phân tử HCl nhường electron tạo 1 phân tử Cl₂ (đóng vai trò chất khử) và 2 phân tử HCl tạo muối MnCl₂ (đóng vai trò môi trường) ⇒ tỉ lệ là 2 : 4 = 1 : 2."
    },
    {
      q: "Hòa tan hoàn toàn 2,4 gam Magnesium (Mg = 24) bằng dung dịch HNO₃ loãng dư, thu được V lít khí N₂O duy nhất (ở điều kiện chuẩn 25°C, 1 bar). Giá trị của V là:",
      options: [
        "0,61975 lít",
        "1,2395 lít",
        "2,479 lít",
        "4,958 lít"
      ],
      ans: 0,
      exp: "Số mol Mg = 2,4 / 24 = 0,1 mol. Bảo toàn electron: Mg⁰ → Mg⁺² + 2e; 2N⁺⁵ + 8e → N₂⁺¹O ⇒ 2·n_Mg = 8·n_N2O ⇒ n_N2O = 0,2 / 8 = 0,025 mol ⇒ V = 0,025 × 24,79 = 0,61975 lít."
    }
  ],

  17: [
    {
      q: "Cho phương trình nhiệt hóa học: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) có ΔrH°₂₉₈ = −91,8 kJ. Phát biểu nào sau đây là ĐÚNG?",
      options: [
        "Đây là phản ứng thu nhiệt vì ΔrH°₂₉₈ < 0",
        "Đây là phản ứng tỏa nhiệt; khi tổng hợp được 2 mol khí NH₃ ở điều kiện chuẩn thì phản ứng tỏa ra 91,8 kJ nhiệt lượng",
        "Nhiệt tạo thành chuẩn của NH₃(g) là −91,8 kJ/mol",
        "Phản ứng cần hấp thụ 91,8 kJ nhiệt từ môi trường"
      ],
      ans: 1,
      exp: "Do ΔrH°₂₉₈ = −91,8 kJ < 0 nên phản ứng tỏa nhiệt; tạo thành 2 mol NH₃(g) tỏa ra 91,8 kJ ⇒ nhiệt tạo thành chuẩn của 1 mol NH₃(g) là ΔfH°₂₉₈ = −91,8 / 2 = −45,9 kJ/mol."
    },
    {
      q: "Nhiệt tạo thành chuẩn (ΔfH°₂₉₈) của các đơn chất ở dạng bền vững nhất (như O₂(g), H₂(g), Cl₂(g), C_graphite(s)) tại điều kiện chuẩn có giá trị bằng bao nhiêu?",
      options: [
        "Bằng +100 kJ/mol",
        "Bằng −273 kJ/mol",
        "Bằng 0 kJ/mol",
        "Bằng +298 kJ/mol"
      ],
      ans: 2,
      exp: "Theo quy ước nhiệt hóa học, enthalpy tạo thành chuẩn (ΔfH°₂₉₈) của mọi đơn chất ở trạng thái bền vững nhất tại 25°C, 1 bar đều bằng 0 kJ/mol."
    },
    {
      q: "Cho phản ứng ở thể khí: H₂(g) + Cl₂(g) → 2HCl(g). Biết năng lượng liên kết Eb(H–H) = 436 kJ/mol; Eb(Cl–Cl) = 243 kJ/mol; Eb(H–Cl) = 431 kJ/mol. Biến thiên enthalpy chuẩn ΔrH°₂₉₈ của phản ứng là:",
      options: [
        "−183 kJ",
        "+183 kJ",
        "−248 kJ",
        "+248 kJ"
      ],
      ans: 0,
      exp: "Tính theo năng lượng liên kết (lấy Chất đầu trừ Sản phẩm): ΔrH°₂₉₈ = [Eb(H–H) + Eb(Cl–Cl)] − 2·Eb(H–Cl) = (436 + 243) − 2×431 = 679 − 862 = −183 kJ."
    }
  ],

  18: [
    {
      q: "Quá trình nào sau đây trong thực tế là quá trình THU NHIỆT (ΔrH > 0)?",
      options: [
        "Đốt cháy khí gas (LPG) để đun nấu",
        "Tôi vôi sống (CaO tác dụng với H₂O)",
        "Nung đá vôi (CaCO₃ → CaO + CO₂) hoặc hòa tan viên C sủi vào cốc nước",
        "Phản ứng trung hòa giữa dung dịch HCl và dung dịch NaOH"
      ],
      ans: 2,
      exp: "Phản ứng phân hủy đá vôi (CaCO₃) có ΔrH°₂₉₈ = +178,2 kJ > 0 cần cung cấp nhiệt liên tục; hòa tan viên C sủi làm cốc nước mát đi do hấp thụ nhiệt từ nước."
    },
    {
      q: "Cho phản ứng: CaCO₃(s) → CaO(s) + CO₂(g). Biết ΔfH°₂₉₈ của CaCO₃(s), CaO(s), CO₂(g) lần lượt là −1206,9 kJ/mol; −635,1 kJ/mol và −393,5 kJ/mol. Giá trị ΔrH°₂₉₈ của phản ứng là:",
      options: [
        "−178,3 kJ",
        "+178,3 kJ",
        "+2235,5 kJ",
        "−2235,5 kJ"
      ],
      ans: 1,
      exp: "Tính theo nhiệt tạo thành chuẩn (lấy Sản phẩm trừ Chất đầu): ΔrH°₂₉₈ = [ΔfH°(CaO) + ΔfH°(CO₂)] − ΔfH°(CaCO₃) = (−635,1 − 393,5) − (−1206,9) = +178,3 kJ."
    },
    {
      q: "Biết phản ứng đốt cháy 1 mol carbon (graphite): C(s) + O₂(g) → CO₂(g) có ΔrH°₂₉₈ = −393,5 kJ. Khi đốt cháy hoàn toàn 6 gam carbon (C = 12) ở điều kiện chuẩn thì lượng nhiệt tỏa ra là:",
      options: [
        "393,5 kJ",
        "196,75 kJ",
        "787,0 kJ",
        "98,375 kJ"
      ],
      ans: 1,
      exp: "Số mol C = 6 / 12 = 0,5 mol. Đốt 1 mol C tỏa 393,5 kJ ⇒ đốt 0,5 mol C tỏa ra nhiệt lượng Q = 0,5 × 393,5 = 196,75 kJ."
    }
  ],

  19: [
    {
      q: "Cho phản ứng tổng hợp ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Nếu tốc độ trung bình tính theo sự giảm nồng độ của H₂ là 0,06 mol/(L·s) thì tốc độ trung bình của phản ứng là:",
      options: [
        "0,06 mol/(L·s)",
        "0,02 mol/(L·s)",
        "0,18 mol/(L·s)",
        "0,03 mol/(L·s)"
      ],
      ans: 1,
      exp: "Theo công thức tốc độ trung bình: v_tb = −(1/3)·(ΔC_H2 / Δt) = 0,06 / 3 = 0,02 mol/(L·s)."
    },
    {
      q: "Yếu tố nào sau đây KHÔNG làm thay đổi tốc độ của phản ứng chỉ có các chất rắn và chất lỏng tham gia (không có chất khí)?",
      options: [
        "Thay đổi nhiệt độ của hệ phản ứng",
        "Thay đổi áp suất chung của hệ",
        "Nghiền nhỏ chất rắn để tăng diện tích bề mặt tiếp xúc",
        "Thêm chất xúc tác thích hợp"
      ],
      ans: 1,
      exp: "Áp suất chỉ ảnh hưởng đến tốc độ của các phản ứng có chất KHÍ tham gia. Với phản ứng không có chất khí, thay đổi áp suất không làm thay đổi nồng độ chất phản ứng nên tốc độ không đổi."
    },
    {
      q: "Một phản ứng hóa học có hệ số nhiệt độ Van't Hoff γ = 2. Khi tăng nhiệt độ từ 30°C lên 60°C thì tốc độ của phản ứng tăng lên bao nhiêu lần?",
      options: [
        "6 lần",
        "8 lần",
        "9 lần",
        "16 lần"
      ],
      ans: 1,
      exp: "Áp dụng công thức Van't Hoff: v₂ / v₁ = γ^((60 − 30)/10) = 2³ = 8 lần."
    }
  ],

  20: [
    {
      q: "Cho phản ứng đơn giản xảy ra trong bình kín: 2CO(g) + O₂(g) → 2CO₂(g). Nếu giữ nguyên nhiệt độ và tăng nồng độ CO lên 2 lần (giữ nguyên nồng độ O₂) thì tốc độ phản ứng thay đổi như thế nào?",
      options: [
        "Tăng 2 lần",
        "Tăng 4 lần",
        "Tăng 8 lần",
        "Giảm 2 lần"
      ],
      ans: 1,
      exp: "Phương trình tốc độ của phản ứng đơn giản: v = k · [CO]² · [O₂]. Khi tăng [CO] lên 2 lần thì v' = k · (2[CO])² · [O₂] = 4v (tốc độ tăng 4 lần)."
    },
    {
      q: "Cho phản ứng đốt cháy than: C(s) + O₂(g) → CO₂(g). Biểu thức tốc độ tức thời theo định luật tác dụng khối lượng của phản ứng (giả sử đơn giản) là:",
      options: [
        "v = k · C(C) · C(O₂)",
        "v = k · C(O₂)",
        "v = k · C(CO₂)",
        "v = k · C(O₂)²"
      ],
      ans: 1,
      exp: "Trong biểu thức định luật tác dụng khối lượng, không đưa nồng độ của chất rắn nguyên chất C(s) vào biểu thức tốc độ, do đó v = k · C(O₂)."
    },
    {
      q: "Vì sao việc bảo quản thực phẩm trong tủ lạnh lại giúp thực phẩm lâu bị ôi thiu, hư hỏng hơn so với để ở nhiệt độ phòng?",
      options: [
        "Vì nhiệt độ thấp tiêu diệt hoàn toàn mọi nguyên tử oxygen",
        "Vì giảm nhiệt độ làm giảm mạnh tốc độ các phản ứng oxi hóa và phản ứng phân hủy sinh hóa của vi sinh vật",
        "Vì trong tủ lạnh áp suất rất cao",
        "Vì tủ lạnh đóng vai trò là chất xúc tác"
      ],
      ans: 1,
      exp: "Theo quy tắc Van't Hoff, khi giảm nhiệt độ thì tốc độ các phản ứng hóa học và quá trình chuyển hóa của vi khuẩn, nấm mốc giảm đi nhiều lần, giúp giữ thực phẩm tươi lâu hơn."
    }
  ],

  21: [
    {
      q: "Đi từ Fluorine (F₂) đến Iodine (I₂) trong nhóm Halogen (VIIA), tính chất vật lí và hóa học của các đơn chất biến đổi như thế nào?",
      options: [
        "Nhiệt độ sôi giảm dần, tính oxi hóa tăng dần",
        "Trạng thái chuyển từ khí (F₂, Cl₂) → lỏng (Br₂) → rắn (I₂); màu sắc đậm dần; nhiệt độ sôi tăng dần; tính oxi hóa giảm dần",
        "Màu sắc nhạt dần, tính oxi hóa tăng dần",
        "Tất cả các đơn chất đều là chất khí ở điều kiện thường"
      ],
      ans: 1,
      exp: "Đi từ F₂ → Cl₂ → Br₂ → I₂: tương tác van der Waals tăng nên nhiệt độ nóng chảy/sôi tăng, trạng thái chuyển từ khí sang lỏng rồi rắn, màu sắc đậm dần; độ âm điện giảm nên tính oxi hóa giảm dần (F₂ > Cl₂ > Br₂ > I₂)."
    },
    {
      q: "Nước Javel được sản xuất trong công nghiệp hoặc phòng thí nghiệm bằng cách sục khí Chlorine (Cl₂) vào dung dịch nào sau đây ở nhiệt độ thường?",
      options: [
        "Dung dịch NaCl bão hòa",
        "Dung dịch NaOH loãng nguội (Cl₂ + 2NaOH → NaCl + NaClO + H₂O)",
        "Dung dịch KOH đặc đun nóng ở 100°C",
        "Dung dịch HCl đặc"
      ],
      ans: 1,
      exp: "Sục Cl₂ vào dung dịch NaOH loãng ở nhiệt độ thường thu được hỗn hợp NaCl và NaClO (sodium hypochlorite) gọi là nước Javel, có tính oxi hóa mạnh dùng tẩy trắng và khử trùng."
    },
    {
      q: "Phản ứng nào sau đây KHÔNG xảy ra được khi sục khí halogen vào dung dịch muối halide?",
      options: [
        "Cl₂ + 2NaBr (dd) → 2NaCl + Br₂",
        "Cl₂ + 2NaI (dd) → 2NaCl + I₂",
        "Br₂ + 2NaI (dd) → 2NaBr + I₂",
        "F₂ + 2NaCl (dd) → 2NaF + Cl₂↑"
      ],
      ans: 3,
      exp: "F₂ có tính oxi hóa cực mạnh nên khi sục vào dung dịch NaCl trong nước, F₂ phản ứng mãnh liệt ngay với H₂O (2F₂ + 2H₂O → 4HF + O₂↑) chứ không đẩy được Cl₂ ra khỏi dung dịch muối."
    }
  ],

  22: [
    {
      q: "Sắp xếp các dung dịch hydrohalic acid (cùng nồng độ mol) theo chiều TĂNG DẦN độ mạnh tính acid là:",
      options: [
        "HI < HBr < HCl < HF",
        "HF < HCl < HBr < HI",
        "HCl < HBr < HI < HF",
        "HF < HI < HBr < HCl"
      ],
      ans: 1,
      exp: "Đi từ HF đến HI, độ dài liên kết H–X tăng dần và năng lượng liên kết giảm dần nên khả năng phân li ra ion H⁺ trong nước tăng dần: HF (acid yếu) < HCl < HBr < HI (acid mạnh nhất)."
    },
    {
      q: "Dung dịch acid nào sau đây không được chứa trong bình thủy tinh vì có khả năng ăn mòn thủy tinh (SiO₂)?",
      options: [
        "Dung dịch HCl đặc",
        "Dung dịch HBr",
        "Dung dịch Hydrofluoric acid (HF)",
        "Dung dịch H₂SO₄ loãng"
      ],
      ans: 2,
      exp: "Dung dịch HF phản ứng đặc trưng với thành phần chính của thủy tinh là silicon dioxide: SiO₂ + 4HF → SiF₄↑ + 2H₂O, do đó phải đựng HF trong bình nhựa."
    },
    {
      q: "Nhỏ dung dịch AgNO₃ dư lần lượt vào 4 ống nghiệm chứa riêng biệt các dung dịch: NaF, NaCl, NaBr, NaI. Hiện tượng quan sát được theo thứ tự là:",
      options: [
        "Kết tủa trắng; kết tủa vàng nhạt; kết tủa vàng đậm; không hiện tượng",
        "Không hiện tượng (AgF tan); kết tủa trắng (AgCl); kết tủa vàng nhạt (AgBr); kết tủa vàng đậm (AgI)",
        "Cả 4 ống nghiệm đều xuất hiện kết tủa màu trắng",
        "Không hiện tượng; kết tủa vàng đậm; kết tủa vàng nhạt; kết tủa trắng"
      ],
      ans: 1,
      exp: "Muối AgF tan tốt trong nước nên ống NaF không có kết tủa; AgCl kết tủa trắng; AgBr kết tủa vàng nhạt (màu kem); AgI kết tủa vàng đậm."
    }
  ],

  23: [
    {
      q: "Khi cho muối Sodium iodide (NaI) rắn tác dụng với dung dịch H₂SO₄ đặc nóng, ngoài muối NaHSO₄ và hơi I₂ màu tím còn thu được khí có mùi trứng thối là:",
      options: [
        "Khí SO₂",
        "Khí H₂S (Hydrogen sulfide)",
        "Khí HI tinh khiết",
        "Khí O₂"
      ],
      ans: 1,
      exp: "Ion I⁻ có tính khử rất mạnh nên khử S⁺⁶ trong H₂SO₄ đặc xuống số oxi hóa thấp nhất là S⁻² (khí H₂S mùi trứng thối): 8NaI + 9H₂SO₄(đặc) → 8NaHSO₄ + 4I₂ + H₂S↑ + 4H₂O."
    },
    {
      q: "Vì sao nhiệt độ sôi của Hydrogen fluoride (HF: +19,5°C) lại cao hơn hẳn so với HCl (−85,1°C), HBr (−66,7°C) và HI (−35,4°C)?",
      options: [
        "Vì phân tử khối của HF lớn nhất trong dãy",
        "Vì giữa các phân tử HF tạo được liên kết hydrogen liên phân tử (···H–F···H–F···) rất bền vững",
        "Vì HF là hợp chất ion",
        "Vì tương tác van der Waals của HF mạnh nhất"
      ],
      ans: 1,
      exp: "Nguyên tử F có độ âm điện lớn nhất (3,98) và bán kính nhỏ nên các phân tử HF liên kết với nhau bằng liên kết hydrogen bền vững, cần nhiều năng lượng hơn để phá vỡ khi sôi."
    },
    {
      q: "Cho 10,0 gam hỗn hợp hai muối NaF và NaCl tác dụng hoàn toàn với dung dịch AgNO₃ dư, thu được 14,35 gam kết tủa trắng. Thành phần phần trăm theo khối lượng của NaF trong hỗn hợp đầu là:",
      options: [
        "41,5%",
        "58,5%",
        "42,0%",
        "50,0%"
      ],
      ans: 0,
      exp: "Do AgF tan nên kết tủa trắng chỉ có AgCl: n_AgCl = 14,35 / 143,5 = 0,1 mol ⇒ n_NaCl = 0,1 mol ⇒ m_NaCl = 0,1 × 58,5 = 5,85 gam ⇒ m_NaF = 10,0 − 5,85 = 4,15 gam ⇒ %m_NaF = 41,5%."
    }
  ]
};

module.exports = quizzes;
