// scratch/hoahoc11_data.js
// Tổng hợp dữ liệu đầy đủ Hóa học 11 KNTT: 6 Chương, 25 Bài/Mục, Bảng công thức, An toàn và 20 câu Đấu trường Hóa học

const p1 = require('./hoahoc11_data_p1.js');
const p2 = require('./hoahoc11_data_p2.js');
const p3 = require('./hoahoc11_data_p3.js');

const lessons = { ...p1, ...p2, ...p3 };

const chapters = [
  {
    num: 1,
    title: "Chương 1. Cân bằng hoá học",
    shortTitle: "Chương 1: Cân bằng hoá học",
    icon: "fa-scale-balanced",
    desc: "Khái niệm phản ứng thuận nghịch, cân bằng động, hằng số Kc, nguyên lí Le Chatelier, điện li, acid - base Brønsted - Lowry, thang pH và chuẩn độ.",
    lessons: [1, 2, 3]
  },
  {
    num: 2,
    title: "Chương 2. Nitrogen – Sulfur",
    shortTitle: "Chương 2: Nitrogen – Sulfur",
    icon: "fa-flask-vial",
    desc: "Đơn chất N2 liên kết ba trơ, NH3 và muối ammonium, NOx, mưa acid, phú dưỡng, đơn chất sulfur, SO2, acid sulfuric và muối sulfate.",
    lessons: [4, 5, 6, 7, 8, 9]
  },
  {
    num: 3,
    title: "Chương 3. Đại cương hoá học hữu cơ",
    shortTitle: "Chương 3: Đại cương hoá hữu cơ",
    icon: "fa-atom",
    desc: "Hợp chất hữu cơ, nhóm chức, phổ IR, 7 phương pháp tách biệt tinh chế, công thức phân tử, phổ MS, thuyết Butlerov và đồng phân cis - trans.",
    lessons: [10, 11, 12, 13, 14]
  },
  {
    num: 4,
    title: "Chương 4. Hydrocarbon",
    shortTitle: "Chương 4: Hydrocarbon",
    icon: "fa-fire-flame-simple",
    desc: "Hydrocarbon no (Alkane), không no (Alkene, Alkyne quy tắc Markovnikov, trùng hợp, alk-1-yne) và thơm (Arene quy tắc thế ortho/para).",
    lessons: [15, 16, 17, 18]
  },
  {
    num: 5,
    title: "Chương 5. Dẫn xuất halogen – Alcohol – Phenol",
    shortTitle: "Chương 5: Dẫn xuất Halogen – Alcohol – Phenol",
    icon: "fa-wine-bottle",
    desc: "Dẫn xuất halogen (thuỷ phân, tách Zaitsev, CFC), alcohol (liên kết hydrogen, tách nước, CuO, polyol kề) và phenol (ảnh hưởng vòng thơm, thế Br2).",
    lessons: [19, 20, 21, 22]
  },
  {
    num: 6,
    title: "Chương 6. Hợp chất carbonyl – Carboxylic acid",
    shortTitle: "Chương 6: Hợp chất carbonyl – Carboxylic acid",
    icon: "fa-lemon",
    desc: "Nhóm carbonyl >C=O (khử NaBH4, tráng bạc Tollens, iodoform CHI3), Carboxylic acid -COOH (tính acid, ester hoá thuận nghịch, lên men giấm).",
    lessons: [23, 24, 25]
  }
];

// Bảng công thức tóm tắt
const formulaTable = [
  { topic: "Hằng số cân bằng", rule: "$$K_c = \\frac{[\\text{C}]^c \\cdot [\\text{D}]^d}{[\\text{A}]^a \\cdot [\\text{B}]^b}$$", note: "Bỏ qua chất rắn tinh khiết; chỉ phụ thuộc bản chất phản ứng và nhiệt độ." },
  { topic: "Tích số ion của nước", rule: "$$K_w = [\\text{H}^+] \\cdot [\\text{OH}^-] = 1,0 \\times 10^{-14} \\text{ (ở } 25^\\circ\\text{C)}$$", note: "Nước nguyên chất có [H+] = [OH-] = 10^-7 M." },
  { topic: "Độ pH dung dịch", rule: "$$\\text{pH} = -\\lg[\\text{H}^+] \\iff [\\text{H}^+] = 10^{-\\text{pH}};\\quad \\text{pH} + \\text{pOH} = 14$$", note: "Acid: pH < 7; Trung tính: pH = 7; Base: pH > 7." },
  { topic: "Chuẩn độ Acid - Base", rule: "$$C_A \\cdot V_A = C_B \\cdot V_B$$", note: "Thời điểm đổi màu bền của chỉ thị (phenolphthalein) đánh dấu điểm tương đương." },
  { topic: "Alkane", rule: "$$\\text{C}_n\\text{H}_{2n+2} \\quad (n \\ge 1)$$", note: "Hydrocarbon no mạch hở, phản ứng thế halogen ưu tiên carbon bậc cao hơn." },
  { topic: "Alkene", rule: "$$\\text{C}_n\\text{H}_{2n} \\quad (n \\ge 2)$$", note: "Hydrocarbon không no chứa 1 liên kết C=C (1σ + 1π), phản ứng cộng, trùng hợp." },
  { topic: "Alkyne", rule: "$$\\text{C}_n\\text{H}_{2n-2} \\quad (n \\ge 2)$$", note: "Hydrocarbon không no chứa 1 liên kết C≡C (1σ + 2π); alk-1-yne tạo kết tủa vàng với AgNO3/NH3." },
  { topic: "Arene (đồng đẳng benzene)", rule: "$$\\text{C}_n\\text{H}_{2n-6} \\quad (n \\ge 6)$$", note: "Vòng benzene thơm bền vững, quy tắc thế ortho/para khi có sẵn nhóm alkyl." },
  { topic: "Alcohol no đơn chức", rule: "$$\\text{C}_n\\text{H}_{2n+1}\\text{OH} \\quad (n \\ge 1)$$", note: "Tạo liên kết hydrogen; polyalcohol có -OH kề nhau hoà tan Cu(OH)2 tạo phức xanh lam thẫm." },
  { topic: "Carboxylic acid đơn chức", rule: "$$\\text{RCOOH}\\text{ hoặc }\\text{C}_n\\text{H}_{2n+1}\\text{COOH} \\quad (n \\ge 0)$$", note: "Tạo liên kết hydrogen dimer; nhiệt độ sôi cao nhất; tác dụng NaHCO3 sinh CO2↑." },
  { topic: "Quy tắc Markovnikov", rule: "Cộng HX/H2O vào C=C hoặc C≡C bất đối xứng", note: "H vào C mang nhiều H hơn, X/OH vào C mang ít H hơn tạo sản phẩm chính." },
  { topic: "Quy tắc Zaitsev", rule: "Tách HX hoặc H2O khỏi dẫn xuất halogen / alcohol", note: "Tách H ở carbon β bậc cao hơn (ít H hơn) tạo alkene thế nhiều hơn làm sản phẩm chính." },
  { topic: "Hiệu suất Ester hoá", rule: "$$H\\% = \\frac{m_{\\text{thực tế}}}{m_{\\text{lí thuyết}}} \\times 100\\%$$", note: "Phản ứng ester hoá là phản ứng thuận nghịch, H2SO4 đặc vừa là xúc tác vừa hút nước." }
];

// Thí nghiệm và an toàn hoá chất
const safetyRules = [
  {
    topic: "An toàn với khí độc NO2 và SO2",
    icon: "fa-skull-crossbones",
    color: "rose",
    rules: [
      "Khí NO2 (nâu đỏ) và SO2 (mùi hắc) cực kì độc, gây kích ứng và phá huỷ niêm mạc đường hô hấp cấp tính.",
      "Thí nghiệm nghiên cứu cân bằng 2NO2 <=> N2O4 bắt buộc phải nút kín bằng nút cao su phủ sáp paraffin, tuyệt đối không mở nút ngửi trực tiếp.",
      "Thí nghiệm điều chế và thử tính chất của khí SO2 phải thực hiện trong tủ hút; miệng ống nghiệm thoát khí phải được nút bằng bông tẩm dung dịch kiềm (NaOH) để hấp thụ khí dư."
    ]
  },
  {
    topic: "Quy tắc chuẩn độ Acid - Base an toàn",
    icon: "fa-eye-dropper",
    color: "amber",
    rules: [
      "Bắt buộc đeo kính bảo hộ và găng tay cao su để tránh dung dịch acid HCl hoặc kiềm NaOH bắn vào mắt, da.",
      "Khi nạp dung dịch chuẩn vào burette, dùng phễu thuỷ tinh nhỏ và rót từ từ dưới tầm mắt để tránh tràn ra ngoài.",
      "Đọc mức thể tích dung dịch trên vạch burette ngang tầm mắt tại điểm đáy của mặt khum cong lỏng."
    ]
  },
  {
    topic: "QUY TẮC VÀNG pha loãng H2SO4 đặc & Xử lí bỏng acid",
    icon: "fa-triangle-exclamation",
    color: "red",
    rules: [
      "QUY TẮC BẮT BUỘC: Rót từ từ acid sulfuric đặc vào nước dọc theo đũa thuỷ tinh và khuấy nhẹ.",
      "TUYỆT ĐỐI KHÔNG làm ngược lại (không rót nước vào acid đặc): Vì nước nhẹ hơn sẽ sôi cục bộ đột ngột, bắn tung toé acid đặc gây bỏng nặng.",
      "Sơ cứu khẩn cấp: Ngay lập tức xối rửa vết bỏng dưới vòi nước chảy liên tục trong ít nhất 15-20 phút; sau đó rửa bằng dung dịch NaHCO3 loãng 2% để trung hoà lượng acid còn sót lại và chuyển ngay đến bệnh viện."
    ]
  },
  {
    topic: "An toàn cháy nổ Hydrocarbon & Thuốc thử hữu cơ",
    icon: "fa-fire",
    color: "orange",
    rules: [
      "Các khí ethylene, acetylene, khí gas LPG và dung môi hữu cơ (hexane, ether, benzene, alcohol) rất dễ bắt lửa và phát nổ.",
      "Tuyệt đối không để bình chứa gần nguồn nhiệt, tia lửa điện; khi đun nóng chất hữu cơ dễ cháy phải đun cách thuỷ hoặc dùng bếp điện.",
      "Kết tủa bạc acetylide (AgC≡CAg) khi khô rất nhạy nổ khi va chạm mạnh hoặc đun nóng; sau thí nghiệm phải huỷ kết tủa bằng dung dịch acid HCl."
    ]
  },
  {
    topic: "Độc tính của Phenol, Benzene & Methanol",
    icon: "fa-biohazard",
    color: "emerald",
    rules: [
      "Phenol gây bỏng sâu rát buốt; nếu dính vào da, lập tức lau sạch và rửa bằng nhiều cồn ethanol hoặc glycerol (không dùng nước lạnh), sau đó xối rửa dưới vòi nước sạch.",
      "Benzene có thể ngấm qua da và đường hô hấp, tích luỹ trong tuỷ xương gây ung thư máu; phải thao tác trong tủ hút chuyên dụng.",
      "Methanol (cồn công nghiệp) chuyển hoá thành formaldehyde và formic acid phá huỷ thần kinh thị giác làm mù mắt và tử vong; tuyệt đối không uống cồn công nghiệp và không lái xe sau khi sử dụng rượu bia."
    ]
  }
];

// Đấu trường Hóa học 45 phút (20 câu hỏi trắc nghiệm khách quan đa mạch)
const examQuestions = [
  {
    q: "Câu 1: Yếu tố nào sau đây KHÔNG làm thay đổi giá trị hằng số cân bằng Kc của một phản ứng thuận nghịch xác định?",
    options: ["Nhiệt độ", "Áp suất", "Bản chất phản ứng", "Nhiệt độ và áp suất"],
    ans: 1,
    explain: "Hằng số cân bằng Kc của một phản ứng xác định CHỈ phụ thuộc vào nhiệt độ, không phụ thuộc vào nồng độ ban đầu, áp suất hay chất xúc tác."
  },
  {
    q: "Câu 2: Cho cân bằng: N2(g) + 3H2(g) <=> 2NH3(g), Delta H < 0. Để cân bằng chuyển dịch theo chiều thuận, cần:",
    options: ["Tăng nhiệt độ và tăng áp suất.", "Giảm nhiệt độ và tăng áp suất.", "Tăng nhiệt độ và giảm áp suất.", "Thêm chất xúc tác và giảm áp suất."],
    ans: 1,
    explain: "Phản ứng toả nhiệt (Delta H < 0) nên giảm nhiệt độ cân bằng chuyển dịch sang chiều thuận. Vế trái có 4 mol khí, vế phải có 2 mol khí nên tăng áp suất cân bằng chuyển dịch sang chiều thuận (giảm số mol khí)."
  },
  {
    q: "Câu 3: Theo thuyết Brønsted - Lowry, chất nào sau đây có tính chất lưỡng tính?",
    options: ["NH4+", "CO3^2-", "HCO3^-", "Cl-"],
    ans: 2,
    explain: "Ion HCO3- vừa có khả năng cho proton H+ (thành CO3^2-) vừa có khả năng nhận proton H+ (thành CO2 + H2O) nên là ion lưỡng tính."
  },
  {
    q: "Câu 4: Trộn 100 mL dung dịch HCl 0,05 M với 100 mL dung dịch Ba(OH)2 0,05 M thu được 200 mL dung dịch Y. Giá trị pH của dung dịch Y là:",
    options: ["1,6", "7,0", "12,0", "12,4"],
    ans: 3,
    explain: "n(H+) = 0,1 * 0,05 = 0,005 mol; n(OH-) = 0,1 * 0,05 * 2 = 0,010 mol => n(OH- dư) = 0,005 mol trong V = 0,2 L => [OH-] = 0,025 M => pOH = 1,6 => pH = 14 - 1,6 = 12,4."
  },
  {
    q: "Câu 5: Trong khí quyển Trái Đất, khí chiếm thể tích lớn nhất (khoảng 78%) là:",
    options: ["Oxygen (O2)", "Nitrogen (N2)", "Argon (Ar)", "Carbon dioxide (CO2)"],
    ans: 1,
    explain: "Khí nitrogen (N2) chiếm khoảng 78,1% thể tích và 75,5% khối lượng khí quyển Trái Đất."
  },
  {
    q: "Câu 6: Kim loại nào sau đây phản ứng trực tiếp với khí nitrogen ngay ở nhiệt độ thường?",
    options: ["Magnesium (Mg)", "Aluminium (Al)", "Lithium (Li)", "Iron (Fe)"],
    ans: 2,
    explain: "Lithium (Li) là kim loại duy nhất tác dụng được với nitrogen ngay ở nhiệt độ thường tạo lithium nitride: 6Li + N2 -> 2Li3N."
  },
  {
    q: "Câu 7: Thuốc thử dùng để nhận biết ion ammonium (NH4+) trong dung dịch là:",
    options: ["Dung dịch BaCl2", "Dung dịch kiềm NaOH đun nhẹ và quỳ tím ẩm", "Dung dịch AgNO3", "Dung dịch phenolphthalein"],
    ans: 1,
    explain: "Ion NH4+ tác dụng với dung dịch kiềm khi đun nóng giải phóng khí NH3 có mùi khai làm xanh quỳ tím ẩm: NH4+ + OH- -> NH3↑ + H2O."
  },
  {
    q: "Câu 8: Nước mưa có giá trị pH nhỏ hơn bao nhiêu thì được coi là mưa acid?",
    options: ["pH < 7,0", "pH < 6,5", "pH < 5,6", "pH < 4,0"],
    ans: 2,
    explain: "Nước mưa tự nhiên hoà tan CO2 có pH khoảng 5,6. Nước mưa có pH < 5,6 được xếp vào hiện tượng mưa acid."
  },
  {
    q: "Câu 9: Khi nhiệt kế thuỷ ngân bị vỡ trong phòng thí nghiệm, hoá chất an toàn dùng để thu gom thuỷ ngân rơi vãi là:",
    options: ["Bột lưu huỳnh (sulfur)", "Dung dịch HCl đặc", "Nước vôi trong", "Muối ăn"],
    ans: 0,
    explain: "Bột lưu huỳnh phản ứng ngay ở nhiệt độ thường với thuỷ ngân tạo hợp chất rắn HgS không bay hơi và không độc: Hg + S -> HgS."
  },
  {
    q: "Câu 10: Nhận xét nào sau đây về sulfuric acid đặc là KHÔNG đúng?",
    options: ["Là chất lỏng sánh, không màu, không bay hơi.", "Tan vô hạn trong nước và toả nhiều nhiệt.", "Có tính háo nước mạnh và oxi hoá cực mạnh.", "Khi pha loãng, luôn rót nhanh nước vào acid đặc."],
    ans: 3,
    explain: "Rót nước vào acid đặc là thao tác cực kì nguy hiểm gây sôi bắn acid; quy tắc đúng là rót từ từ acid đặc vào nước và khuấy nhẹ."
  },
  {
    q: "Câu 11: Trên phổ hồng ngoại (IR) của một hợp chất hữu cơ xuất hiện một dải hấp thụ rất rộng ở vùng 3350 cm^-1. Hợp chất này có chứa nhóm chức nào?",
    options: ["Hydroxyl (-OH)", "Carbonyl (>C=O)", "Carboxyl (-COOH)", "Ester (-COO-)"],
    ans: 0,
    explain: "Dải hấp thụ rộng ở vùng 3500 - 3200 cm^-1 là tín hiệu đặc trưng của liên kết O-H trong alcohol hoặc phenol."
  },
  {
    q: "Câu 12: Phương pháp nào sau đây dùng để tách tinh dầu sả, tinh dầu bưởi ra khỏi thực vật?",
    options: ["Chưng cất phân đoạn", "Chưng cất lôi cuốn hơi nước", "Kết tinh", "Sắc kí cột"],
    ans: 1,
    explain: "Tinh dầu thảo mộc có nhiệt độ sôi cao, dễ bị nhiệt phân huỷ nhưng không tan trong nước và bay hơi cùng hơi nước nên áp dụng chưng cất lôi cuốn hơi nước."
  },
  {
    q: "Câu 13: Một hydrocarbon X có công thức đơn giản nhất là CH3 và có phân tử khối M = 30 g/mol xác định từ phổ MS. Công thức phân tử của X là:",
    options: ["CH3", "C2H6", "C3H9", "C4H12"],
    ans: 1,
    explain: "M(CH3) = 15 => Hệ số n = 30 / 15 = 2 => CTPT là C2H6 (ethane)."
  },
  {
    q: "Câu 14: Chất nào sau đây có đồng phân hình học cis - trans?",
    options: ["Propene", "But-1-ene", "But-2-ene", "2-Methylbut-2-ene"],
    ans: 2,
    explain: "But-2-ene (CH3-CH=CH-CH3) có mỗi carbon của liên kết đôi gắn với 2 nhóm khác nhau (-H và -CH3) nên có đồng phân hình học cis và trans."
  },
  {
    q: "Câu 15: Cho 2-methylbutane tác dụng với Cl2 (tỉ lệ mol 1:1, có ánh sáng). Sản phẩm chính thu được là:",
    options: ["1-Chloro-2-methylbutane", "2-Chloro-2-methylbutane", "2-Chloro-3-methylbutane", "1-Chloro-3-methylbutane"],
    ans: 1,
    explain: "Theo quy tắc thế halogen, nguyên tử Cl ưu tiên thế vào carbon bậc cao hơn (carbon bậc 3 ở vị trí số 2) tạo 2-chloro-2-methylbutane."
  },
  {
    q: "Câu 16: Dẫn khí ethylene vào dung dịch nước bromine, hiện tượng quan sát được là:",
    options: ["Dung dịch nước bromine bị mất màu.", "Xuất hiện kết tủa màu vàng nhạt.", "Dung dịch chuyển sang màu tím.", "Có bọt khí không màu sủi mạnh."],
    ans: 0,
    explain: "Ethylene phản ứng cộng làm mất màu nâu đỏ của nước bromine: CH2=CH2 + Br2 -> CH2Br-CH2Br (không màu)."
  },
  {
    q: "Câu 17: Để phân biệt but-1-yne và but-2-yne, thuốc thử thích hợp nhất là:",
    options: ["Dung dịch nước bromine", "Dung dịch KMnO4", "Dung dịch AgNO3 trong NH3", "Khí H2 (xúc tác Ni, t°)"],
    ans: 2,
    explain: "But-1-yne có liên kết ba đầu mạch nên tác dụng với AgNO3/NH3 tạo kết tủa vàng nhạt; but-2-yne không có liên kết ba đầu mạch nên không phản ứng."
  },
  {
    q: "Câu 18: Khi đun nóng toluene với dung dịch thuốc tím (KMnO4), hiện tượng quan sát được là:",
    options: ["Dung dịch vẫn giữ nguyên màu tím.", "Dung dịch thuốc tím bị mất màu và xuất hiện kết tủa nâu đen MnO2.", "Xuất hiện kết tủa màu xanh lam.", "Dung dịch chuyển sang màu vàng tươi."],
    ans: 1,
    explain: "Toluene có nhóm methyl bị oxi hoá khi đun nóng với KMnO4 tạo potassium benzoate và MnO2 nâu đen làm mất màu thuốc tím."
  },
  {
    q: "Câu 19: Khi đun nóng 2-bromobutane với dung dịch KOH trong ethanol, sản phẩm chính thu được theo quy tắc Zaitsev là:",
    options: ["But-1-ene", "But-2-ene", "Butan-1-ol", "Butan-2-ol"],
    ans: 1,
    explain: "Theo quy tắc Zaitsev, Br tách cùng H ở carbon bậc cao hơn (C3) tạo thành but-2-ene có nối đôi nhiều nhóm thế hơn làm sản phẩm chính."
  },
  {
    q: "Câu 20: Cho các chất: (1) HCHO, (2) CH3CHO, (3) CH3COCH3, (4) CH3COOH. Số chất có khả năng tham gia phản ứng tráng bạc với thuốc thử Tollens là:",
    options: ["1", "2", "3", "4"],
    ans: 1,
    explain: "Chỉ các chất chứa nhóm aldehyde (-CHO) là HCHO và CH3CHO mới tham gia phản ứng tráng bạc (tổng cộng 2 chất)."
  }
];

module.exports = {
  lessons,
  chapters,
  formulaTable,
  safetyRules,
  examQuestions
};
