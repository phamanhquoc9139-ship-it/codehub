// khtn9_formulas.js - Sổ tay công thức & quy luật cốt lõi môn Khoa học tự nhiên 9
module.exports = [
  {
    branch: "Vật lí",
    topic: "Cơ học",
    title: "Động năng (Kinetic Energy)",
    formula: "W_đ = \\frac{1}{2}mv^2",
    unit: "W_đ (J), m (kg), v (m/s)",
    notes: "Động năng tỉ lệ thuận với khối lượng và bình phương vận tốc. Vật đứng yên thì W_đ = 0."
  },
  {
    branch: "Vật lí",
    topic: "Cơ học",
    title: "Thế năng trọng trường",
    formula: "W_t = mgh = P \\cdot h",
    unit: "W_t (J), m (kg), g \\approx 10\\text{ m/s}^2, h (m)",
    notes: "Phụ thuộc vào mốc thế năng được chọn. Nâng vật lên càng cao thì thế năng càng lớn."
  },
  {
    branch: "Vật lí",
    topic: "Cơ học",
    title: "Cơ năng & Định luật bảo toàn cơ năng",
    formula: "W = W_đ + W_t = \\text{hằng số (khi bỏ qua lực cản)}",
    unit: "W (J)",
    notes: "Động năng và thế năng chuyển hóa qua lại. Khi có ma sát: cơ năng chuyển hóa thành nhiệt năng và âm thanh."
  },
  {
    branch: "Vật lí",
    topic: "Cơ học",
    title: "Công cơ học & Công suất",
    formula: "A = F \\cdot s \\cdot \\cos\\alpha; \\quad \\mathcal{P} = \\frac{A}{t}",
    unit: "A (J), F (N), s (m), \\mathcal{P} (W), t (s)",
    notes: "1 W = 1 J/s. Lực vuông góc phương chuyển động không sinh công (cos 90° = 0)."
  },
  {
    branch: "Vật lí",
    topic: "Quang học",
    title: "Định luật khúc xạ ánh sáng",
    formula: "n_1 \\sin i = n_2 \\sin r; \\quad n = \\frac{c}{v}",
    unit: "i (góc tới), r (góc khúc xạ), c = 3 \\times 10^8\\text{ m/s}",
    notes: "Từ môi trường chiết quang kém sang hơn (n1 < n2) thì tia khúc xạ lệch lại gần pháp tuyến (r < i)."
  },
  {
    branch: "Vật lí",
    topic: "Quang học",
    title: "Phản xạ toàn phần",
    formula: "\\sin i_{gh} = \\frac{n_2}{n_1} \\quad (n_1 > n_2); \\quad i \\ge i_{gh}",
    unit: "i_{gh} (góc giới hạn phản xạ toàn phần)",
    notes: "Ứng dụng trong cáp quang viễn thông, nội soi y tế, hiện tượng ảo ảnh quang học."
  },
  {
    branch: "Vật lí",
    topic: "Quang học",
    title: "Số bội giác kính lúp & Tiêu cự",
    formula: "G = \\frac{25}{f} \\quad (f \\text{ tính bằng cm}); \\quad f \\approx \\frac{L}{4}",
    unit: "G (số bội giác), f (cm), L (khoảng cách vật - màn khi d = d')",
    notes: "Kính lúp là thấu kính hội tụ tiêu cự ngắn, cho ảnh ảo cùng chiều lớn hơn vật khi đặt trong khoảng tiêu cự."
  },
  {
    branch: "Vật lí",
    topic: "Điện học",
    title: "Định luật Ohm & Điện trở dây dẫn",
    formula: "I = \\frac{U}{R}; \\quad R = \\rho \\frac{\\ell}{S}",
    unit: "I (A), U (V), R (\\Omega), \\rho (\\Omega\\cdot m), \\ell (m), S (m^2)",
    notes: "I tỉ lệ thuận với U và tỉ lệ nghịch với R. Đồ thị U-I là đường thẳng đi qua gốc tọa độ."
  },
  {
    branch: "Vật lí",
    topic: "Điện học",
    title: "Đoạn mạch nối tiếp",
    formula: "I = I_1 = I_2; \\quad U = U_1 + U_2; \\quad R_{tđ} = R_1 + R_2",
    unit: "Hiệu điện thế phân chia theo tỉ lệ thuận với điện trở",
    notes: "U_1 / U_2 = R_1 / R_2. Ampe kế mắc nối tiếp trong mạch cần đo."
  },
  {
    branch: "Vật lí",
    topic: "Điện học",
    title: "Đoạn mạch song song",
    formula: "U = U_1 = U_2; \\quad I = I_1 + I_2; \\quad \\frac{1}{R_{tđ}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
    unit: "Hai điện trở: R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2}",
    notes: "Điện trở tương đương nhỏ hơn điện trở của từng nhánh thành phần. Vôn kế mắc song song."
  },
  {
    branch: "Vật lí",
    topic: "Điện học",
    title: "Điện năng & Công suất điện",
    formula: "A = UIt = \\mathcal{P}t; \\quad \\mathcal{P} = UI = I^2 R = \\frac{U^2}{R}",
    unit: "1\\text{ kWh} = 3{,}6 \\times 10^6\\text{ J}",
    notes: "Công tơ điện đo điện năng tiêu thụ tính bằng kilowatt-giờ (số điện sinh hoạt)."
  },
  {
    branch: "Hóa học",
    topic: "Kim loại",
    title: "Dãy hoạt động hóa học của kim loại",
    formula: "\\text{K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au}",
    unit: "Chiều giảm dần mức độ hoạt động hóa học",
    notes: "Kim loại đứng trước H đẩy được H khỏi dd acid; kim loại trước đẩy kim loại sau khỏi dung dịch muối."
  },
  {
    branch: "Hóa học",
    topic: "Hydrocarbon",
    title: "Công thức chung Alkane & Alkene",
    formula: "\\text{Alkane: } C_n H_{2n+2} (n \\ge 1); \\quad \\text{Alkene: } C_n H_{2n} (n \\ge 2)",
    unit: "CH_4 \\text{ (methane)}, C_2H_4 \\text{ (ethene)}",
    notes: "Alkane chỉ có liên kết đơn (phản ứng thế); Alkene có liên kết đôi C=C (phản ứng cộng làm mất màu nước bromine, trùng hợp)."
  },
  {
    branch: "Hóa học",
    topic: "Dẫn xuất Hydrocarbon",
    title: "Phản ứng lên men rượu & lên men giấm",
    formula: "C_6H_{12}O_6 \\xrightarrow{\\text{men rượu}} 2C_2H_5OH + 2CO_2; \\quad C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O",
    unit: "Độ rượu = (V_r / V_dd) * 100",
    notes: "Ethylic alcohol (C2H5OH) và Acetic acid (CH3COOH) là hai hợp chất hữu cơ có nhóm chức đặc trưng (-OH và -COOH)."
  },
  {
    branch: "Sinh học",
    topic: "Di truyền học Mendel",
    title: "Quy luật phân li (Lai một cặp tính trạng)",
    formula: "P: AA \\times aa \\to F_1: Aa; \\quad F_1 \\times F_1 \\to F_2: 1AA : 2Aa : 1aa \\text{ (3 trội : 1 lặn)}",
    unit: "Tỉ lệ kiểu gene 1:2:1; kiểu hình 3:1",
    notes: "Khi P thuần chủng tương phản, F1 đồng tính trội; F2 phân li theo tỉ lệ trung bình 3 trội : 1 lặn."
  },
  {
    branch: "Sinh học",
    topic: "Di truyền học Mendel",
    title: "Quy luật phân li độc lập (Lai hai cặp tính trạng)",
    formula: "AaBb \\times AaBb \\to 9 A-B- : 3 A-bb : 3 aaB- : 1 aabb",
    unit: "Tỉ lệ 9 : 3 : 3 : 1",
    notes: "Các cặp allele phân li độc lập với nhau khi nằm trên các cặp nhiễm sắc thể tương đồng khác nhau."
  },
  {
    branch: "Sinh học",
    topic: "Cơ sở phân tử di truyền",
    title: "Nguyên tắc bổ sung trong Nucleic Acid",
    formula: "\\text{DNA: } A = T, \\quad G = C; \\quad \\text{Phiên mã: } A_{khuôn} \\to U, \\, T_{khuôn} \\to A, \\, G_{khuôn} \\to C, \\, C_{khuôn} \\to G",
    unit: "Chiều thông tin: DNA \\to RNA \\to Protein \\to Tính trạng",
    notes: "Tái bản DNA theo nguyên tắc bán bảo toàn (1 mạch cũ, 1 mạch mới). Mã di truyền là mã bộ ba (triplet)."
  },
  {
    branch: "Sinh học",
    topic: "Di truyền tế bào",
    title: "Phân bào: Nguyên phân vs Giảm phân",
    formula: "\\text{Nguyên phân: } 2n \\to 2 \\text{ tế bào } 2n; \\quad \\text{Giảm phân: } 2n \\to 4 \\text{ giao tử } n",
    unit: "Bộ NST người: 2n = 46 (44A + XX ở nữ, 44A + XY ở nam)",
    notes: "Nguyên phân duy trì ổn định bộ NST cơ thể; giảm phân kết hợp thụ tinh duy trì ổn định bộ NST loài qua các thế hệ."
  }
];
