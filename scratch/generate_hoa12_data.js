// scratch/generate_hoa12_data.js
const fs = require('fs');

const lessonThemes = {
  1: "Khái niệm, danh pháp, tính chất vật lí, phản ứng thủy phân acid/base của ester, phân loại chất béo, phản ứng hydrogen hóa và vai trò omega-3, omega-6.",
  2: "Thành phần và cơ chế làm sạch micelle của xà phòng và chất giặt rửa tổng hợp, phương pháp sản xuất và ảnh hưởng của nước cứng.",
  3: "Hệ thống hóa toàn bộ kiến thức Chương 1: phân biệt ester đơn chức, triglyceride, phản ứng xà phòng hóa và bảo quản chất béo.",
  4: "Khái niệm carbohydrate, cấu tạo mạch hở/mạch vòng của glucose và fructose, tính polyalcohol, tính khử tráng bạc và phản ứng lên men rượu.",
  5: "Cấu tạo phân tử, liên kết glycoside, phản ứng thủy phân và sự khác biệt tính khử giữa saccharose (đường không khử) và maltose (đường khử).",
  6: "Cấu trúc polymer của tinh bột (amylose, amylopectin) và cellulose (β-1,4), phản ứng màu với iodine và các ứng dụng trong đời sống.",
  7: "Hệ thống hóa toàn bộ kiến thức Chương 2: sơ đồ chuyển hóa monosaccharide, disaccharide và polysaccharide cùng các phản ứng nhận biết đặc trưng.",
  8: "Khái niệm, bậc amine, danh pháp, tính base của amine, phản ứng tạo phức và phản ứng thế brom vào nhân thơm của aniline.",
  9: "Cấu tạo lưỡng tính của amino acid, ion lưỡng cực, liên kết peptide –CO–NH– và quy tắc thủy phân peptide.",
  10: "Cấu trúc, chức năng sinh học và hiện tượng biến tính của protein; phản ứng màu biuret và cơ chế xúc tác của enzyme.",
  11: "Hệ thống hóa toàn bộ kiến thức Chương 3: mối liên hệ hữu cơ giữa amine, amino acid, peptide, protein và enzyme.",
  12: "Khái niệm polymer, monomer, mắt xích; phân biệt phản ứng trùng hợp và trùng ngưng; cấu trúc mạch và tính chất vật lí chung.",
  13: "Các loại vật liệu polymer quan trọng: chất dẻo nhiệt dẻo/nhiệt rắn, tơ thiên nhiên/tổng hợp, cao su lưu hóa và keo dán.",
  14: "Hệ thống hóa toàn bộ kiến thức Chương 4: phân loại phản ứng điều chế, tính toán mắt xích, độ polymer hóa và xử lí rác thải nhựa.",
  15: "Cặp oxi hóa – khử kim loại, thế điện cực chuẩn E°, cấu tạo và nguyên lí hoạt động của pin Galvani (pin Daniell) và tính suất điện động pin.",
  16: "Bản chất của quá trình điện phân nóng chảy và điện phân dung dịch, thứ tự phóng điện ở các điện cực và định luật Faraday.",
  17: "Hệ thống hóa toàn bộ kiến thức Chương 5: so sánh pin điện hóa và bình điện phân, giải bài toán điện phân theo công thức Faraday.",
  18: "Mô hình tinh thể kim loại, biển electron tự do và các kiểu mạng tinh thể lập phương tâm khối, tâm diện, lục phương chặt khít.",
  19: "Giải thích 4 tính chất vật lí chung của kim loại (dẻo, dẫn điện, dẫn nhiệt, ánh kim) và tính chất hóa học đặc trưng là tính khử.",
  20: "Trạng thái tự nhiên của kim loại, quặng kim loại và 3 phương pháp luyện kim cơ bản: điện phân nóng chảy, nhiệt luyện và thủy luyện.",
  21: "Khái niệm hợp kim, cấu tạo mạng tinh thể bị biến dạng và các hợp kim tiêu biểu: gang, thép, duralumin.",
  22: "Phân biệt ăn mòn hóa học và ăn mòn điện hóa; cơ chế gỉ sắt và các phương pháp bảo vệ kim loại (phủ bề mặt, dùng anode hi sinh).",
  23: "Hệ thống hóa toàn bộ kiến thức Chương 6: cấu tạo tinh thể, tính khử kim loại, phương pháp tách kim loại và chống ăn mòn.",
  24: "Cấu hình ns¹ của kim loại kiềm, tính khử rất mạnh, phản ứng với nước, bảo quản kim loại kiềm và các hợp chất NaCl, NaHCO₃, Na₂CO₃.",
  25: "Cấu hình ns² của kim loại kiềm thổ, chu trình vôi CaCO₃–CaO–Ca(OH)₂, phân loại nước cứng (tạm thời, vĩnh cửu) và các cách làm mềm nước.",
  26: "Hệ thống hóa toàn bộ kiến thức Chương 7: so sánh nhóm IA và IIA, quy trình Solvay sản xuất soda và bài toán làm mềm nước cứng.",
  27: "Đặc điểm electron 3d của kim loại chuyển tiếp dãy thứ nhất (Sc → Cu), nhiều trạng thái oxi hóa, màu sắc ion và hoạt tính xúc tác.",
  28: "Khái niệm phức chất, nguyên tử/ion trung tâm, phối tử, số phối trí, dạng hình học và quy tắc viết điện tích cầu nội.",
  29: "Sự đổi màu khi tạo phức, phản ứng thế phối tử, thuốc thử Tollens [Ag(NH₃)₂]⁺ và các ứng dụng sinh học (hemoglobin, chlorophyll, cisplatin).",
  30: "Hệ thống hóa toàn bộ kiến thức Chương 8: tổng kết hóa học kim loại chuyển tiếp, nhận biết phức chất và ý nghĩa thực tiễn."
};

// Generate 3 quizzes per lesson (30 lessons x 3 = 90 questions)
const lessonQuizzes = {};

// Helper to create lesson quizzes
function addQ(lessonId, q, options, answer, explanation, takeaway) {
  if (!lessonQuizzes[lessonId]) lessonQuizzes[lessonId] = [];
  lessonQuizzes[lessonId].push({ q, options, answer, explanation, takeaway });
}

// Chapter 1: Lessons 1, 2, 3
addQ(1, "Ester ethyl acetate có công thức cấu tạo thu gọn là:", ["CH₃COOCH₃", "CH₃COOC₂H₅", "HCOOC₂H₅", "C₂H₅COOCH₃"], 1, "Ethyl acetate (ethyl ethanoate) được tạo từ acid acetic CH₃COOH và alcohol ethylic C₂H₅OH nên có công thức CH₃COOC₂H₅.", "Ethyl acetate = CH₃COOC₂H₅ (mùi táo/chuối chín).");
addQ(1, "Sản phẩm của phản ứng xà phòng hóa chất béo (triglyceride) với dung dịch NaOH luôn thu được chất nào sau đây?", ["Ethanol", "Glycerol", "Methanol", "Ethylene glycol"], 1, "Chất béo là triester của glycerol với các acid béo nên khi thủy phân trong môi trường kiềm luôn tạo ra glycerol (propan-1,2,3-triol).", "Xà phòng hóa chất béo luôn tạo Glycerol C₃H₅(OH)₃ + Muối acid béo.");
addQ(1, "Phản ứng chuyển hóa chất béo lỏng (dầu thực vật) thành chất béo rắn (bơ nhân tạo) thuộc loại phản ứng nào?", ["Oxi hóa không hoàn toàn", "Phản ứng xà phòng hóa", "Phản ứng hydrogen hóa (cộng H₂, Ni, t°)", "Phản ứng ester hóa"], 2, "Hydrogen hóa là phản ứng cộng H₂ vào các liên kết đôi C=C của gốc acid béo không no, biến chất béo lỏng thành chất béo rắn thuận tiện vận chuyển.", "Hydrogen hóa: Dầu lỏng + H₂ (Ni, t°) → Chất béo rắn.");

addQ(2, "Cơ chế tẩy rửa của phân tử xà phòng dựa trên đặc điểm cấu tạo nào?", ["Có hai đầu kị nước gắn kết với nhau", "Phân tử gồm đầu ưa nước gắn vào nước và đuôi kị nước cắm vào vết bẩn dầu mỡ tạo micelle", "Có khả năng phản ứng acid - base phá hủy dầu mỡ", "Là chất oxi hóa cực mạnh hòa tan bụi bẩn"], 1, "Phân tử xà phòng lưỡng tính: đuôi hydrocarbon ưa dầu chui vào giọt mỡ, đầu ion hóa ưa nước quay ra ngoài, tạo hạt micelle phân tán vào nước.", "Xà phòng: Đuôi kị nước bám mỡ + Đầu ưa nước hướng ra ngoài → Micelle.");
addQ(2, "Vì sao xà phòng thông thường giảm hoặc mất tác dụng giặt rửa khi dùng trong nước cứng?", ["Nước cứng làm bay hơi các phân tử xà phòng", "Ion Ca²⁺ và Mg²⁺ trong nước cứng kết hợp với anion acid béo tạo kết tủa ít tan", "Nước cứng có tính acid làm phân hủy xà phòng", "Xà phòng bị oxi hóa thành aldehyde trong nước cứng"], 1, "Anion acid béo (RCOO⁻) kết hợp với Ca²⁺, Mg²⁺ tạo muối kết tủa (RCOO)₂Ca và (RCOO)₂Mg làm mất tác dụng tẩy rửa và bám bẩn vải sợi.", "Nước cứng tạo kết tủa (RCOO)₂Ca/(RCOO)₂Mg làm hỏng bọt xà phòng.");
addQ(2, "Chất giặt rửa tổng hợp thường có ưu điểm vượt trội nào so với xà phòng truyền thống?", ["Có mùi thơm tự nhiên của hoa quả chín", "Dễ phân hủy sinh học hơn xà phòng", "Dùng được cả trong nước cứng và môi trường acid", "Giá thành đắt hơn nhiều lần"], 2, "Chất giặt rửa tổng hợp (muối sulfonate hoặc sulfate) không tạo kết tủa với Ca²⁺, Mg²⁺ nên hoạt động tốt trong nước cứng và môi trường acid.", "Chất giặt rửa tổng hợp = Dùng tốt trong nước cứng & môi trường acid.");

addQ(3, "Đun nóng ester CH₃COOC₆H₅ (phenyl acetate) với dung dịch NaOH dư thu được sản phẩm gồm:", ["CH₃COONa và C₆H₅OH", "CH₃COONa, C₆H₅ONa và H₂O", "CH₃COOH và C₆H₅ONa", "CH₃COONa và C₆H₅CH₂OH"], 1, "Do phenol sinh ra có tính acid nên phản ứng tiếp với NaOH dư tạo muối sodium phenolate C₆H₅ONa và nước: CH₃COOC₆H₅ + 2NaOH → CH₃COONa + C₆H₅ONa + H₂O.", "Ester của phenol tác dụng NaOH theo tỉ lệ mol 1 : 2.");
addQ(3, "Để tăng hiệu suất của phản ứng ester hóa giữa CH₃COOH và C₂H₅OH, biện pháp nào sau đây là phù hợp?", ["Dùng H₂SO₄ loãng làm xúc tác", "Thêm nước vào hỗn hợp phản ứng", "Dùng H₂SO₄ đặc làm xúc tác và hút nước, đồng thời chưng cất tách ester", "Tăng thể tích bình phản ứng và hạ nhiệt độ"], 2, "H₂SO₄ đặc vừa xúc tác vừa hút nước, kết hợp tách ester ra khỏi hỗn hợp làm cân bằng chuyển dịch theo chiều thuận theo Le Chatelier.", "Tăng hiệu suất ester hóa: H₂SO₄ đặc hút nước + Tách sản phẩm.");
addQ(3, "Chất béo để lâu ngày trong không khí thường bị ôi thiu do nguyên nhân chủ yếu nào?", ["Chất béo bị vi khuẩn ăn mòn hoàn toàn", "Liên kết đôi C=C ở gốc acid béo không no bị oxygen không khí oxi hóa chậm thành peroxide rồi phân hủy thành aldehyde, ketone có mùi khó chịu", "Chất béo tự bay hơi vào không khí", "Chất béo bị ngưng tụ thành polymer rắn"], 1, "Oxygen không khí oxi hóa chậm các liên kết C=C tạo hợp chất hydroperoxide, sau đó bị phân cắt tạo ra các aldehyde, acid có mùi ôi khét khó chịu.", "Chất béo ôi thiu do oxygen oxi hóa liên kết đôi C=C.");

// Chapter 2: Lessons 4, 5, 6, 7
addQ(4, "Chất nào sau đây thuộc loại monosaccharide?", ["Glucose", "Saccharose", "Maltose", "Tinh bột"], 0, "Monosaccharide là carbohydrate đơn giản nhất không thể thủy phân được, tiêu biểu là glucose và fructose (C₆H₁₂O₆).", "Monosaccharide = Glucose, Fructose (không bị thủy phân).");
addQ(4, "Trong điều kiện thường, glucose tác dụng với Cu(OH)₂ tạo ra dung dịch có màu gì?", ["Màu xanh tím", "Màu xanh lam", "Màu đỏ gạch", "Màu vàng lục"], 1, "Glucose có nhiều nhóm –OH liền kề (polyalcohol) nên hòa tan Cu(OH)₂ ở nhiệt độ thường tạo phức đồng dung dịch xanh lam đặc trưng.", "Glucose + Cu(OH)₂ thường → Phức xanh lam (tính chất polyalcohol).");
addQ(4, "Khi đun nóng glucose với thuốc thử Tollens [Ag(NH₃)₂]OH, hiện tượng quan sát được là:", ["Xuất hiện kết tủa màu đỏ gạch", "Dung dịch chuyển sang màu tím", "Có lớp bạc sáng bóng bám vào thành ống nghiệm (phản ứng tráng bạc)", "Không có hiện tượng gì"], 2, "Nhóm –CHO của glucose bị oxi hóa thành –COONH₄ đồng thời ion Ag⁺ bị khử thành Ag kim loại bám sáng bóng vào thành ống nghiệm.", "Glucose + Thuốc thử Tollens → 2Ag kim loại (tráng bạc).");

addQ(5, "Carbohydrate nào sau đây KHÔNG có tính khử (không tráng bạc và không khử Cu(OH)₂ ở nhiệt độ cao)?", ["Glucose", "Fructose", "Maltose", "Saccharose"], 3, "Saccharose được tạo bởi liên kết α-1,2-glycoside giữa C1 của glucose và C2 của fructose nên cả 2 nhóm hemiacetal đều bị khóa, không còn tính khử.", "Saccharose = Đường không khử (không tráng bạc).");
addQ(5, "Thủy phân hoàn toàn 1 mol saccharose trong môi trường acid thu được sản phẩm gồm:", ["2 mol glucose", "2 mol fructose", "1 mol glucose và 1 mol fructose", "1 mol maltose và 1 mol nước"], 2, "Saccharose (C₁₂H₂₂O₁₁) thủy phân tạo ra tỉ lệ mol 1 : 1 gồm 1 phân tử α-glucose và 1 phân tử β-fructose.", "Thủy phân Saccharose → 1 Glucose + 1 Fructose.");
addQ(5, "Điểm khác biệt cốt lõi giữa phân tử maltose và phân tử saccharose là gì?", ["Maltose chỉ có trong thực vật còn saccharose chỉ có trong động vật", "Maltose còn một nhóm –OH hemiacetal tự do nên có tính khử, còn saccharose không có tính khử", "Maltose có phân tử khối gấp đôi saccharose", "Saccharose tan tốt trong nước còn maltose hoàn toàn không tan"], 1, "Maltose gồm 2 gốc glucose nối nhau qua liên kết α-1,4-glycoside, gốc thứ hai còn nhóm –OH hemiacetal tự do nên mở vòng cho tính khử.", "Maltose là đường khử, Saccharose là đường không khử.");

addQ(6, "Thuốc thử đặc trưng dùng để nhận biết hồ tinh bột là:", ["Dung dịch AgNO₃/NH₃", "Dung dịch Cu(OH)₂", "Dung dịch Iodine (I₂)", "Nước bromine"], 2, "Cấu trúc xoắn của amylose trong tinh bột giữ các phân tử iodine tạo hợp chất bọc có màu xanh tím đặc trưng (mất màu khi đun nóng, hiện lại khi nguội).", "Hồ tinh bột + Iodine (I₂) → Màu xanh tím đặc trưng.");
addQ(6, "Phát biểu nào sau đây về cellulose là ĐÚNG?", ["Cellulose có cấu trúc mạch phân nhánh giống amylopectin", "Cellulose được cấu tạo từ các mắt xích β-glucose liên kết với nhau bằng liên kết β-1,4-glycoside tạo mạch thẳng kéo dài", "Cơ thể người có enzyme tiêu hóa hoàn toàn cellulose thành năng lượng", "Cellulose tan dễ dàng trong nước nóng tạo dung dịch keo nhớt"], 1, "Cellulose gồm các gốc β-glucose liên kết β-1,4 tạo mạch kéo dài, không phân nhánh, liên kết hydrogen giữa các mạch tạo sợi bền vững.", "Cellulose = β-1,4-glycoside mạch thẳng, thành phần cấu tạo tế bào thực vật.");
addQ(6, "Sản phẩm cuối cùng của quá trình thủy phân hoàn toàn cả tinh bột và cellulose là:", ["Fructose", "Saccharose", "Glucose", "Maltose"], 2, "Cả tinh bột và cellulose đều được cấu tạo từ các đơn vị glucose, nên khi thủy phân hoàn toàn bằng xúc tác acid hoặc enzyme đều thu được glucose.", "Thủy phân hoàn toàn Tinh bột & Cellulose đều thu được Glucose.");

addQ(7, "Cho các chất: glucose, fructose, saccharose, maltose, tinh bột, cellulose. Số chất tham gia phản ứng tráng bạc là:", ["2", "3", "4", "5"], 1, "Có 3 chất tráng bạc: Glucose (có –CHO), Fructose (chuyển hóa thành glucose trong kiềm), và Maltose (có –OH hemiacetal).", "Chất tráng bạc = Glucose, Fructose, Maltose.");
addQ(7, "Để phân biệt hai dung dịch mất nhãn: saccharose và glucose, thuốc thử đơn giản nhất là:", ["Dung dịch quỳ tím", "Dung dịch AgNO₃ trong NH₃ (đun nóng)", "Dung dịch NaCl", "Nước cất"], 1, "Glucose cho phản ứng tráng bạc xuất hiện lớp kim loại sáng bóng, còn saccharose không phản ứng.", "Phân biệt Glucose (tráng bạc) và Saccharose (không tráng bạc) bằng AgNO₃/NH₃.");
addQ(7, "Hiện tượng hồ tinh bột chuyển màu xanh tím với iodine rồi biến mất khi đun nóng và xuất hiện trở lại khi để nguội giải thích bằng:", ["Phản ứng hóa học thuận nghịch thu nhiệt mạnh", "Cấu trúc xoắn lò xo của tinh bột bị duỗi ra khi nóng làm giải phóng I₂, khi nguội cuộn lại bọc lấy I₂", "Iodine bị bay hơi hoàn toàn khi đun nóng", "Tinh bột bị thủy phân thành đường khi đun nóng"], 1, "Nhiệt độ làm cấu trúc xoắn của tinh bột duỗi ra khiến phân tử I₂ thoát ra ngoài làm mất màu; để nguội cấu trúc xoắn tái lập giữ lại I₂ phục hồi màu xanh tím.", "Nhiệt làm duỗi xoắn tinh bột → mất màu; để nguội cuộn lại → màu xanh tím.");

// Chapter 3: Lessons 8, 9, 10, 11
addQ(8, "Chất nào sau đây là amine bậc một?", ["CH₃–NH–CH₃", "CH₃–NH₂", "(CH₃)₃N", "CH₃–N(C₂H₅)–CH₃"], 1, "Amine bậc một có nhóm chức –NH₂ gắn với gốc hydrocarbon (nguyên tử N liên kết với 1 nguyên tử C).", "Amine bậc 1: R–NH₂ (bậc amine = số gốc hydrocarbon gắn với N).");
addQ(8, "Dung dịch methylamine (CH₃NH₂) trong nước làm quỳ tím chuyển sang màu gì?", ["Màu đỏ", "Màu vàng", "Màu xanh", "Không đổi màu"], 2, "Alkylamine có tính base mạnh hơn ammonia do hiệu ứng đẩy electron của gốc alkyl, phân li ra OH⁻ làm quỳ tím hóa xanh.", "Methylamine có tính base → hóa xanh quỳ tím.");
addQ(8, "Nhỏ nước bromine vào dung dịch aniline (C₆H₅NH₂), hiện tượng xảy ra là:", ["Xuất hiện kết tủa màu trắng", "Có khí không màu thoát ra mãnh liệt", "Xuất hiện kết tủa màu xanh lam", "Dung dịch chuyển sang màu đỏ máu"], 0, "Nhóm –NH₂ hoạt hóa mạnh vòng benzene ở vị trí ortho và para, tạo kết tủa trắng 2,4,6-tribromoaniline và làm mất màu bromine.", "Aniline + Nước bromine → Kết tủa trắng 2,4,6-tribromoaniline.");

addQ(9, "Amino acid là hợp chất hữu cơ tạp chức chứa đồng thời hai nhóm chức nào?", ["–OH và –COOH", "–NH₂ và –COOH", "–CHO và –OH", "–NO₂ và –COOH"], 1, "Phân tử amino acid chứa đồng thời nhóm amino –NH₂ (tính base) và nhóm carboxyl –COOH (tính acid).", "Amino acid = chứa đồng thời –NH₂ và –COOH.");
addQ(9, "Do chứa cả nhóm acid và base trong phân tử nên amino acid có tính chất nổi bật nào?", ["Chỉ có tính acid mạnh", "Chỉ có tính base yếu", "Tính chất lưỡng tính (tác dụng với cả acid và base mạnh)", "Tính chất trung tính hoàn toàn không phản ứng"], 2, "Amino acid phản ứng với acid mạnh nhờ –NH₂ tạo muối ammonium, và phản ứng với kiềm nhờ –COOH tạo muối carboxylate.", "Amino acid có tính lưỡng tính (phản ứng với cả HCl và NaOH).");
addQ(9, "Số liên kết peptide có trong một phân tử tripeptide mạch hở là:", ["1", "2", "3", "4"], 1, "Tripeptide được tạo từ 3 gốc α-amino acid, giữa các gốc có n - 1 = 3 - 1 = 2 liên kết peptide –CO–NH–.", "Peptide n gốc amino acid có (n - 1) liên kết peptide.");

addQ(10, "Thuốc thử dùng trong phản ứng màu biuret để nhận biết hợp chất peptide và protein là:", ["Dung dịch I₂ trong KI", "Cu(OH)₂ trong môi trường kiềm (dung dịch NaOH)", "Dung dịch AgNO₃/NH₃", "Dung dịch FeCl₃"], 1, "Hợp chất có từ 2 liên kết peptide trở lên (tripeptide, protein) tạo phức màu tím đặc trưng với ion Cu²⁺ trong môi trường kiềm.", "Phản ứng màu biuret: Cu(OH)₂/NaOH + peptide (≥ 2 liên kết) → Màu tím.");
addQ(10, "Hiện tượng lòng trắng trứng bị đông tụ lại khi luộc chín là minh chứng cho hiện tượng nào?", ["Phản ứng thủy phân hoàn toàn protein", "Sự biến tính của protein dưới tác dụng của nhiệt độ", "Phản ứng ester hóa protein", "Sự khử các gốc amino acid"], 1, "Nhiệt độ cao phá vỡ các liên kết yếu (hydrogen, tương tác kị nước) làm protein mất cấu trúc không gian bậc 2, 3, 4 ban đầu và đông tụ lại.", "Nhiệt độ làm protein bị biến tính và đông tụ.");
addQ(10, "Bản chất xúc tác sinh học của enzyme có đặc điểm nào nổi bật nhất?", ["Có tính đặc hiệu rất cao và làm tăng tốc độ phản ứng lên hàng triệu lần ở điều kiện sinh lí êm dịu", "Xúc tác được cho mọi loại phản ứng hóa học không phân biệt", "Bị tiêu hao hoàn toàn sau khi phản ứng kết thúc", "Hoạt động mạnh nhất ở nhiệt độ trên 100 °C"], 0, "Enzyme là chất xúc tác sinh học có tính chọn lọc đặc hiệu cao (mỗi enzyme chỉ xúc tác 1 phản ứng/cơ chất) và hạ thấp năng lượng hoạt hóa.", "Enzyme = Xúc tác sinh học đặc hiệu cơ chất cao.");

addQ(11, "Chất nào sau đây KHÔNG cho phản ứng màu biuret?", ["Albumin (lòng trắng trứng)", "Dipeptide Gly–Ala", "Tripeptide Gly–Ala–Val", "Polypeptide chuỗi dài"], 1, "Dipeptide chỉ có 1 liên kết peptide –CO–NH– nên không đủ điều kiện tạo phức màu biuret với Cu(OH)₂ (yêu cầu từ 2 liên kết peptide trở lên).", "Dipeptide KHÔNG cho phản ứng màu biuret.");
addQ(11, "Dung dịch glutamic acid (HOOC–CH₂–CH₂–CH(NH₂)–COOH) làm quỳ tím chuyển sang màu gì?", ["Màu xanh", "Màu đỏ/hồng", "Màu tím không đổi", "Màu vàng"], 1, "Glutamic acid có 2 nhóm –COOH và 1 nhóm –NH₂, số nhóm acid trội hơn số nhóm base nên dung dịch có môi trường acid làm quỳ tím hóa đỏ.", "Glutamic acid có 2 –COOH > 1 –NH₂ → Quỳ tím hóa đỏ.");
addQ(11, "Để rửa sạch ống nghiệm dính aniline sau thí nghiệm, dung dịch tốt nhất nên dùng trước khi tráng lại bằng nước là:", ["Dung dịch NaOH", "Dung dịch HCl loãng", "Nước cất nóng", "Dung dịch NaCl bão hòa"], 1, "Aniline ít tan trong nước nhưng có tính base, phản ứng với HCl tạo muối phenylammonium chloride (C₆H₅NH₃Cl) tan tốt trong nước và dễ rửa sạch.", "Rửa sạch aniline bằng dung dịch HCl loãng (tạo muối tan).");

// Chapter 4: Lessons 12, 13, 14
addQ(12, "Polymer nào sau đây được tổng hợp bằng phản ứng trùng hợp?", ["Polyethylene (PE)", "Nylon-6,6", "Tơ lapsan (PET)", "Poly(phenol-formaldehyde)"], 0, "Polyethylene được điều chế bằng phản ứng trùng hợp monomer ethylene (CH₂=CH₂) nhờ bẻ gãy liên kết đôi C=C.", "Trùng hợp: nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (PE).");
addQ(12, "Phát biểu nào sau đây phân biệt chính xác giữa phản ứng trùng hợp và trùng ngưng?", ["Trùng hợp chỉ tạo phân tử nhỏ, trùng ngưng tạo phân tử lớn", "Trùng ngưng giải phóng các phân tử nhỏ (như H₂O) cùng với polymer, còn trùng hợp thì không", "Trùng hợp cần xúc tác acid, trùng ngưng không cần xúc tác", "Trùng hợp chỉ xảy ra với hợp chất vô cơ"], 1, "Trùng hợp là sự kết hợp nhiều monomer không tách phân tử nhỏ; trùng ngưng là sự kết hợp monomer có ít nhất 2 nhóm chức đồng thời giải phóng phân tử nhỏ.", "Trùng ngưng = Tạo polymer + Tách phân tử nhỏ (H₂O, HCl).");
addQ(12, "Căn cứ vào nguồn gốc, tơ visco và tơ cellulose acetate được xếp vào loại tơ nào?", ["Tơ thiên nhiên", "Tơ tổng hợp hoàn toàn", "Tơ bán tổng hợp (tơ nhân tạo)", "Tơ polyamide"], 2, "Tơ visco và tơ cellulose acetate được chế biến hóa học từ polymer thiên nhiên (cellulose) nên gọi là tơ bán tổng hợp (nhân tạo).", "Tơ visco, tơ acetate = Tơ bán tổng hợp (nhân tạo).");

addQ(13, "Polymer nào sau đây là thành phần chính của chất dẻo làm ống dẫn nước dân dụng phổ biến?", ["Poly(vinyl chloride) (PVC)", "Poly(methyl methacrylate)", "Polystyrene (PS)", "Cao su buna"], 0, "Poly(vinyl chloride) (PVC) có độ bền cơ học cao, cách điện và chống thấm tốt, là nguyên liệu chính sản xuất ống dẫn nước, màng che.", "PVC = Ống nhựa dẫn nước, vỏ bọc dây điện.");
addQ(13, "Bản chất của quá trình lưu hóa cao su là gì?", ["Đun nóng cao su với acid để kéo dài mạch polymer", "Tạo các cầu nối disulfide (–S–S–) giữa các mạch cao su tạo mạng lưới không gian bền vững", "Hòa tan cao su vào xăng để tạo dung dịch kết dính", "Loại bỏ hoàn toàn tạp chất lưu huỳnh khỏi mủ cao su"], 1, "Lưu hóa bằng cách nung cao su với một lượng nhỏ sulfur tạo cầu nối –S–S– giữa các mạch polymer, chuyển cấu trúc mạch thẳng sang mạng không gian.", "Lưu hóa cao su = Tạo cầu nối disulfide –S–S– mạng không gian.");
addQ(13, "Tơ nào sau đây thuộc loại tơ polyamide?", ["Tơ lapsan", "Tơ nitron (olon)", "Tơ nylon-6,6", "Tơ visco"], 2, "Tơ nylon-6,6 được điều chế từ hexamethylenediamine và adipic acid, chứa các liên kết amide –CO–NH– trong mạch polymer.", "Tơ nylon-6,6 = Tơ polyamide (chứa liên kết –CO–NH–).");

addQ(14, "Mắt xích cơ bản của polymer poly(vinyl alcohol) có công thức là:", ["–CH₂–CH(Cl)–", "–CH₂–CH(OH)–", "–CH₂–CH(CH₃)–", "–CH₂–CH₂–"], 1, "Poly(vinyl alcohol) (PVA) gồm các mắt xích –CH₂–CH(OH)– lặp lại nhiều lần trong mạch polymer.", "Mắt xích PVA = –CH₂–CH(OH)–.");
addQ(14, "Hiện tượng 'ô nhiễm trắng' trong môi trường hiện nay gắn liền với việc lạm dụng loại vật liệu nào?", ["Kim loại nặng", "Chất thải hữu cơ dễ phân hủy", "Rác thải nhựa, túi nilon khó phân hủy sinh học", "Bột đá vôi từ các mỏ đá"], 2, "Ô nhiễm trắng là thuật ngữ chỉ sự tích tụ rác thải nhựa tiêu dùng (túi nilon, đồ nhựa dùng 1 lần) mất hàng trăm năm mới phân hủy trong tự nhiên.", "Ô nhiễm trắng = Rác thải nhựa và túi nilon khó phân hủy.");
addQ(14, "Phương pháp xử lí rác thải polymer nào sau đây được khuyến khích áp dụng nhất trong nền kinh tế tuần hoàn?", ["Đốt lộ thiên ngoài trời", "Chôn lấp trực tiếp xuống đất", "Phân loại tại nguồn, tái chế cơ học và tái sinh hóa học", "Thả trôi ra sông và đại dương"], 2, "Tái chế và kinh tế tuần hoàn giúp thu hồi nguyên liệu, giảm khai thác dầu mỏ và bảo vệ môi trường bền vững.", "Kinh tế tuần hoàn = Phân loại và tái chế vật liệu nhựa.");

// Chapter 5: Lessons 15, 16, 17
addQ(15, "Trong pin điện hóa Daniell (Zn – Cu), phản ứng xảy ra tại cực âm (anode) là:", ["Khử ion Cu²⁺ thành Cu", "Oxi hóa kim loại Zn thành ion Zn²⁺", "Khử ion Zn²⁺ thành Zn", "Oxi hóa Cu thành ion Cu²⁺"], 1, "Tại anode (cực âm của pin Galvani), kim loại có tính khử mạnh hơn là Zn bị oxi hóa: Zn → Zn²⁺ + 2e⁻.", "Pin Galvani: Anode (-) xảy ra quá trình oxi hóa Zn → Zn²⁺ + 2e⁻.");
addQ(15, "Biết thế điện cực chuẩn E°(Zn²⁺/Zn) = -0,76 V và E°(Cu²⁺/Cu) = +0,34 V. Suất điện động chuẩn của pin Zn – Cu là:", ["+0,42 V", "+1,10 V", "-1,10 V", "+0,26 V"], 1, "Suất điện động chuẩn: E°pin = E°(cathode) - E°(anode) = +0,34 - (-0,76) = +1,10 V.", "E°pin = E°c - E°a = 0,34 - (-0,76) = +1,10 V.");
addQ(15, "Cầu muối trong pin điện hóa có vai trò quan trọng nào?", ["Cho các electron đi trực tiếp qua để thắp sáng bóng đèn", "Duy trì tính trung hòa điện tích giữa hai dung dịch điện cực nhờ sự di chuyển của các ion", "Cung cấp thêm điện áp phụ cho pin", "Làm đông cứng dung dịch điện li"], 1, "Cầu muối chứa dung dịch chất điện li (như KCl, KNO₃) cho các ion di chuyển bù trừ điện tích ở hai bán pin, khép kín mạch điện.", "Cầu muối = Cân bằng ion, khép kín mạch điện.");

addQ(16, "Trong bình điện phân dung dịch CuCl₂ với hai điện cực trơ, tại cực âm (cathode) xảy ra quá trình:", ["Oxi hóa ion Cl⁻", "Khử ion Cu²⁺ thành kim loại Cu", "Khử phân tử nước", "Oxi hóa kim loại Cu"], 1, "Cathode nối với cực âm của nguồn điện, hút cation Cu²⁺ về và cung cấp electron để khử: Cu²⁺ + 2e⁻ → Cu.", "Bình điện phân: Cathode (-) xảy ra quá trình khử Cu²⁺ + 2e⁻ → Cu.");
addQ(16, "Sản phẩm thu được khi điện phân dung dịch NaCl bão hòa có màng ngăn xốp (điện cực trơ) là:", ["Na, Cl₂ và H₂O", "NaOH, Cl₂ và H₂", "NaClO, H₂ và NaCl", "Na₂O, Cl₂ và HCl"], 1, "Phương trình điện phân: 2NaCl + 2H₂O → (đpdd có màng ngăn) 2NaOH + Cl₂↑ + H₂↑.", "Điện phân dung dịch NaCl có màng ngăn → NaOH + Cl₂ + H₂.");
addQ(16, "Công thức định luật Faraday dùng để tính khối lượng chất giải phóng ở điện cực là:", ["m = MIt / (zF)", "m = zF / (MIt)", "m = QF / (zM)", "m = Mz / (ItF)"], 0, "Khối lượng chất thoát ra: m = (M·I·t) / (z·F), với M là khối lượng mol, I là cường độ dòng điện (A), t là thời gian (s), z là số e trao đổi, F = 96485 C/mol.", "Định luật Faraday: m = MIt / (zF).");

addQ(17, "Điểm khác biệt cốt lõi về dấu của các điện cực giữa pin Galvani và bình điện phân là:", ["Không có sự khác biệt nào về dấu", "Ở pin Galvani: Anode âm (-), Cathode dương (+); ở bình điện phân: Anode dương (+), Cathode âm (-)", "Ở pin Galvani cả hai cực đều dương", "Ở bình điện phân cả hai cực đều âm"], 1, "Dù ở hệ nào thì Anode luôn là nơi xảy ra oxi hóa, Cathode luôn là nơi xảy ra khử; nhưng dấu của điện cực ở pin và bình điện phân ngược nhau.", "Pin Galvani: Anode (-), Cathode (+). Bình điện phân: Anode (+), Cathode (-).");
addQ(17, "Khi điện phân dung dịch CuSO₄ với điện cực đồng (anode tan), hiện tượng quan sát được là:", ["Khí O₂ thoát ra ồ ạt ở anode", "Anode đồng bị tan dần và kim loại Cu tinh khiết bám vào cathode", "Dung dịch mất dần màu xanh lam chuyển sang không màu", "Có kết tủa Cu(OH)₂ màu xanh lắng xuống đáy"], 1, "Hiện tượng anode tan: Cu ở anode bị oxi hóa tan vào dung dịch, đồng thời Cu²⁺ ở cathode bị khử bám lên cathode, nồng độ CuSO₄ không đổi.", "Điện phân anode tan dùng để tinh chế kim loại và mạ điện.");
addQ(17, "Sản xuất kim loại nhôm (Al) trong công nghiệp bắt buộc phải dùng phương pháp nào?", ["Nhiệt luyện khử Al₂O₃ bằng CO", "Thủy luyện dùng sắt đẩy Al ra khỏi muối", "Điện phân Al₂O₃ nóng chảy với xúc tác cryolite", "Nhiệt phân muối Al(NO₃)₃"], 2, "Do ion Al³⁺ có tính oxi hóa rất yếu, không thể khử bằng chất khử hóa học trong dung dịch, phải điện phân Al₂O₃ nóng chảy.", "Sản xuất Nhôm: Điện phân Al₂O₃ nóng chảy (hạ nhiệt độ bằng cryolite).");

// Chapter 6: Lessons 18, 19, 20, 21, 22, 23
addQ(18, "Liên kết kim loại được hình thành do lực hút tĩnh điện giữa:", ["Các nguyên tử kim loại trung hòa với nhau", "Các ion dương kim loại ở nút mạng tinh thể và các electron tự do chuyển động trong mạng", "Các ion dương và ion âm như trong muối ăn", "Các proton trong hạt nhân của các nguyên tử"], 1, "Liên kết kim loại là lực liên kết tĩnh điện giữa các cation kim loại ở nút mạng và các electron hóa trị chuyển động tự do.", "Liên kết kim loại = Lực hút giữa Cation kim loại và Biển electron tự do.");
addQ(18, "Ba kiểu mạng tinh thể kim loại phổ biến nhất là:", ["Lập phương tâm khối, lập phương tâm diện và lục phương chặt khít", "Tứ diện đều, tam giác đều và hình vuông", "Mạng tinh thể phân tử, nguyên tử và ion", "Hình thoi, hình bình hành và hình chữ nhật"], 0, "Kim loại kết tinh theo 3 kiểu mạng đặc trưng: lập phương tâm khối (BCC), lập phương tâm diện (FCC) và lục phương chặt khít (HCP).", "Mạng tinh thể kim loại: Lập phương tâm khối, tâm diện, lục phương.");
addQ(18, "Đặc điểm nào của liên kết kim loại giúp giải thích tính dẻo (có thể dát mỏng, kéo sợi) của kim loại?", ["Liên kết kim loại có tính định hướng không gian chặt chẽ", "Liên kết kim loại không định hướng, khi có lực tác dụng các lớp cation có thể trượt lên nhau mà không phá vỡ liên kết", "Kim loại chứa nhiều khoảng trống phân tử", "Electron tự do bị khóa chặt ở từng nguyên tử"], 1, "Do liên kết kim loại không định hướng nên khi chịu tác động cơ học, các lớp ion trượt lên nhau nhưng biển electron vẫn giữ chúng gắn kết.", "Tính dẻo = Các lớp ion trượt tự do trên đệm electron.");

addQ(19, "Bốn tính chất vật lí chung của kim loại (dẻo, dẫn điện, dẫn nhiệt, ánh kim) đều do yếu tố nào quyết định?", ["Khối lượng nguyên tử của kim loại", "Sự có mặt của các electron tự do trong mạng tinh thể kim loại", "Màu sắc tự nhiên của kim loại", "Mật độ proton trong hạt nhân"], 1, "Biển electron tự do chuyển động trong toàn bộ mạng tinh thể là nguyên nhân gây ra 4 tính chất vật lí chung của mọi kim loại.", "4 tính chất vật lí chung do Electron tự do quyết định.");
addQ(19, "Kim loại nào sau đây dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại?", ["Đồng (Cu)", "Vàng (Au)", "Nhôm (Al)", "Bạc (Ag)"], 3, "Thứ tự dẫn điện và dẫn nhiệt giảm dần: Ag > Cu > Au > Al > Fe.", "Dẫn điện tốt nhất: Bạc (Ag) > Đồng (Cu) > Vàng (Au).");
addQ(19, "Tính chất hóa học đặc trưng và bao trùm của kim loại là:", ["Tính oxi hóa mạnh", "Tính khử (dễ nhường electron M → Mⁿ⁺ + ne⁻)", "Tính acid mạnh", "Tính trơ hóa học"], 1, "Nguyên tử kim loại có bán kính tương đối lớn, ít electron hóa trị nên dễ nhường electron thể hiện tính khử.", "Tính chất hóa học đặc trưng của kim loại = Tính khử.");

addQ(20, "Nguyên tắc chung của mọi phương pháp điều chế kim loại là:", ["Oxi hóa nguyên tử kim loại thành ion", "Khử các ion kim loại trong hợp chất thành nguyên tử kim loại (Mⁿ⁺ + ne⁻ → M)", "Hòa tan quặng kim loại vào acid đậm đặc", "Nung quặng ở nhiệt độ thật cao để kim loại bay hơi"], 1, "Nguyên tắc cốt lõi: Khử ion kim loại trong quặng/hợp chất về trạng thái đơn chất tự do: Mⁿ⁺ + ne⁻ → M.", "Nguyên tắc luyện kim = Khử cation Mⁿ⁺ thành nguyên tử M.");
addQ(20, "Phương pháp nhiệt luyện thường được dùng trong công nghiệp để điều chế các kim loại nào?", ["Kim loại có độ hoạt động hóa học trung bình và yếu (sau Al như Zn, Fe, Cu...)", "Kim loại kiềm và kiềm thổ (Na, K, Ca, Mg)", "Kim loại nhôm (Al)", "Tất cả các kim loại trong bảng tuần hoàn"], 0, "Nhiệt luyện dùng chất khử (C, CO, H₂) ở nhiệt độ cao khử oxide kim loại đứng sau Al trong dãy điện hóa.", "Nhiệt luyện (C, CO, H₂) = Điều chế kim loại sau Al (Zn, Fe, Cu).");
addQ(20, "Phương pháp thủy luyện dùng để tách các kim loại kém hoạt động (như Cu, Ag, Au) dựa trên nguyên lí nào?", ["Nấu chảy quặng kim loại ở 2000 °C", "Dùng kim loại có tính khử mạnh hơn để khử ion kim loại cần tách ra khỏi dung dịch muối", "Dùng quỳ tím trung hòa dung dịch quặng", "Dùng nam châm hút kim loại"], 1, "Thủy luyện hòa tan kim loại thành dung dịch muối, sau đó dùng kim loại có tính khử mạnh hơn (như Fe đẩy Cu²⁺) để thu hồi kim loại.", "Thủy luyện = Dùng kim loại mạnh đẩy ion kim loại yếu ra khỏi dung dịch.");

addQ(21, "So với kim loại nguyên chất thành phần, hợp kim thường có đặc điểm cơ lí tính nào?", ["Mềm hơn và dẫn điện tốt hơn nhiều", "Độ cứng và độ bền cơ học cao hơn, tính dẫn điện và dẫn nhiệt thường giảm", "Nhiệt độ nóng chảy luôn cao hơn tất cả các kim loại", "Dễ bị ăn mòn hóa học hơn trong mọi môi trường"], 1, "Sự có mặt của các nguyên tử khác kích thước làm biến dạng mạng tinh thể, cản trở sự trượt của các lớp ion nên hợp kim thường cứng và bền hơn.", "Hợp kim = Cứng và bền hơn kim loại nguyên chất.");
addQ(21, "Thép là hợp kim của sắt (Fe) với carbon (C), trong đó hàm lượng carbon chiếm tỉ lệ:", ["Dưới 2%", "Từ 2% đến 5%", "Trên 10%", "Hoàn toàn không chứa carbon"], 0, "Thép là hợp kim Fe - C với hàm lượng carbon dưới 2% (còn gang có hàm lượng carbon từ 2% đến 5%).", "Thép: hàm lượng C < 2%; Gang: hàm lượng C từ 2% đến 5%.");
addQ(21, "Duralumin là hợp kim nhẹ, độ bền cao dùng trong công nghiệp hàng không, có thành phần chính là:", ["Đồng và kẽm", "Nhôm (trên 90%), đồng, mangan, magie", "Sắt và crom", "Chì và thiếc"], 1, "Duralumin chứa hơn 90% Al kết hợp Cu, Mg, Mn tạo độ bền tương đương thép nhưng trọng lượng riêng nhẹ, lí tưởng cho vỏ máy bay.", "Duralumin = Hợp kim nhôm siêu nhẹ, bền.");

addQ(22, "Hiện tượng một đinh sắt bị gỉ sét khi để lâu ngày trong không khí ẩm là ví dụ điển hình của quá trình:", ["Ăn mòn hóa học đơn thuần", "Ăn mòn điện hóa học", "Phản ứng quang hóa", "Sự đông tụ chất keo"], 1, "Sắt chứa tạp chất carbon (2 điện cực Fe - C) tiếp xúc với màng nước hòa tan oxygen/CO₂ (dung dịch điện li) tạo thành vô số pin điện hóa ăn mòn sắt.", "Gỉ sắt trong không khí ẩm = Ăn mòn điện hóa học.");
addQ(22, "Điều kiện bắt buộc để xảy ra quá trình ăn mòn điện hóa học là:", ["Chỉ cần kim loại tiếp xúc với không khí khô ráo", "Có 2 điện cực khác chất tiếp xúc điện với nhau và cùng tiếp xúc với dung dịch chất điện li", "Nhiệt độ môi trường phải trên 100 °C", "Phải nối với nguồn điện một chiều ngoài"], 1, "Ba điều kiện: (1) Hai điện cực khác chất; (2) Tiếp xúc điện trực tiếp hoặc gián tiếp; (3) Cùng tiếp xúc dung dịch điện li.", "3 điều kiện ăn mòn điện hóa: 2 điện cực khác chất + tiếp xúc điện + dung dịch điện li.");
addQ(22, "Để bảo vệ vỏ tàu biển bằng thép ngâm trong nước biển, người ta thường gắn các tấm kim loại nào vào đáy tàu?", ["Kim loại Bạc (Ag)", "Kim loại Đồng (Cu)", "Kim loại Kẽm (Zn) hoặc Magie (Mg)", "Kim loại Vàng (Au)"], 2, "Phương pháp bảo vệ bằng anode hi sinh: Zn có tính khử mạnh hơn Fe nên đóng vai trò anode bị ăn mòn thay, bảo vệ vỏ thép tàu biển.", "Bảo vệ vỏ tàu biển: Gắn Kẽm (Zn) làm anode hi sinh.");

addQ(23, "Thứ tự giảm dần tính khử của các kim loại: Mg, Fe, Cu, Ag. Ion nào có tính oxi hóa mạnh nhất?", ["Mg²⁺", "Fe²⁺", "Cu²⁺", "Ag⁺"], 3, "Theo quy tắc dãy điện hóa, kim loại có tính khử càng yếu thì cation của nó có tính oxi hóa càng mạnh: Ag⁺ > Cu²⁺ > Fe²⁺ > Mg²⁺.", "Tính khử kim loại giảm dần → Tính oxi hóa cation tăng dần.");
addQ(23, "Cho mẩu kim loại Na vào dung dịch CuSO₄, hiện tượng quan sát được là:", ["Kim loại Cu màu đỏ bám ngay vào mẩu Na", "Na tan sủi bọt khí không màu, đồng thời xuất hiện kết tủa màu xanh lam Cu(OH)₂", "Không có hiện tượng gì xảy ra", "Dung dịch chuyển sang màu tím"], 1, "Na phản ứng mãnh liệt với nước trước: 2Na + 2H₂O → 2NaOH + H₂↑, sau đó NaOH sinh ra tác dụng với CuSO₄ tạo kết tủa Cu(OH)₂ xanh lam.", "Na + H₂O trước → NaOH + H₂↑; sau đó NaOH + CuSO₄ → Cu(OH)₂↓.");
addQ(23, "Kim loại nào sau đây bị thụ động hóa (không tan) trong dung dịch HNO₃ đặc, nguội và H₂SO₄ đặc, nguội?", ["Cu và Ag", "Al, Fe và Cr", "Zn và Mg", "Na và K"], 1, "Al, Fe, Cr bị thụ động hóa trong HNO₃ đặc nguội và H₂SO₄ đặc nguội do tạo màng oxide bảo vệ bề mặt trơ.", "Al, Fe, Cr bị thụ động hóa trong acid đặc nguội.");

// Chapter 7: Lessons 24, 25, 26
addQ(24, "Để bảo quản các kim loại kiềm (như Na, K) trong phòng thí nghiệm, người ta phải ngâm chìm chúng trong:", ["Nước cất", "Dung dịch giấm ăn", "Dầu hỏa khan", "Dung dịch cồn y tế"], 2, "Kim loại kiềm phản ứng mãnh liệt với nước và oxygen không khí nên phải bảo quản cách li trong dầu hỏa khan.", "Bảo quản kim loại kiềm = Ngâm chìm trong dầu hỏa khan.");
addQ(24, "Nhiệt phân hoàn toàn muối NaHCO₃ ở nhiệt độ trên 120 °C thu được sản phẩm gồm:", ["Na₂O, CO₂ và H₂O", "Na₂CO₃, CO₂ và H₂O", "Na, CO₂ và O₂", "NaOH và CO₂"], 1, "Phản ứng nhiệt phân: 2NaHCO₃ → (t°) Na₂CO₃ + CO₂↑ + H₂O. Nhờ phản ứng này NaHCO₃ được dùng làm bột nở làm bánh xốp.", "Nhiệt phân NaHCO₃ → Na₂CO₃ + CO₂ + H₂O (làm bột nở).");
addQ(24, "Hóa chất Na₂CO₃ (soda) có ứng dụng quan trọng hàng đầu trong ngành công nghiệp nào?", ["Sản xuất phân đạm urê", "Sản xuất thủy tinh, xà phòng, chất tẩy rửa và xử lí nước", "Làm phụ gia bảo quản thịt tươi", "Làm nhiên liệu tên lửa"], 1, "Na₂CO₃ là nguyên liệu cơ bản sản xuất thủy tinh (silicate), chất tẩy rửa, làm mềm nước cứng trong công nghiệp hóa chất.", "Na₂CO₃ (soda) = Sản xuất thủy tinh, làm mềm nước cứng.");

addQ(25, "Hiện tượng nước chảy đá mòn và sự xâm thực tạo thành thạch nhũ trong các hang động đá vôi gắn liền với phản ứng hóa học nào?", ["CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O", "CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂", "CaO + H₂O → Ca(OH)₂", "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O"], 1, "Nước mưa hòa tan CO₂ tạo dung dịch hòa tan đá vôi: CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂. Chiều nghịch tạo kết tủa CaCO₃ sinh ra thạch nhũ.", "Tạo thạch nhũ hang động: CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂.");
addQ(25, "Nước cứng tạm thời là loại nước chứa các ion nào sau đây?", ["Ca²⁺, Mg²⁺ và các ion Cl⁻, SO₄²⁻", "Ca²⁺, Mg²⁺ và ion hydrogencarbonate (HCO₃⁻)", "Chỉ chứa ion Na⁺ và K⁺", "Chỉ chứa ion Fe³⁺ và Al³⁺"], 1, "Nước cứng tạm thời chứa cation Ca²⁺, Mg²⁺ cùng anion HCO₃⁻. Khi đun sôi HCO₃⁻ bị phân hủy tạo kết tủa CaCO₃, MgCO₃ làm mất tính cứng.", "Nước cứng tạm thời = Ca²⁺, Mg²⁺ + HCO₃⁻ (đun sôi làm mềm được).");
addQ(25, "Để làm mềm cả nước cứng tạm thời và nước cứng vĩnh cửu, hóa chất rẻ tiền và phổ biến nhất được dùng là:", ["Dung dịch HCl loãng", "Dung dịch NaCl", "Dung dịch Na₂CO₃ hoặc Na₃PO₄", "Dung dịch giấm ăn"], 2, "Ion CO₃²⁻ hoặc PO₄³⁻ kết tủa hoàn toàn cả Ca²⁺ và Mg²⁺ dưới dạng CaCO₃↓, MgCO₃↓ hoặc phosphat ít tan, làm mềm nước triệt để.", "Làm mềm nước cứng toàn phần = Dùng Na₂CO₃ hoặc Na₃PO₄.");

addQ(26, "Phương pháp nào sau đây KHÔNG THỂ làm mềm nước cứng vĩnh cửu?", ["Dùng phương pháp trao đổi ion bằng hạt nhựa zeolite", "Thêm dung dịch Na₂CO₃ vào nước", "Chỉ đun sôi nước đơn thuần", "Thêm dung dịch Na₃PO₄ vào nước"], 2, "Nước cứng vĩnh cửu chứa Cl⁻, SO₄²⁻ không bị nhiệt phân hủy khi đun sôi, do đó đun sôi không loại bỏ được Ca²⁺, Mg²⁺.", "Đun sôi KHÔNG làm mềm được nước cứng vĩnh cửu.");
addQ(26, "Quy trình Solvay trong công nghiệp hóa chất dùng để sản xuất chất nào từ muối ăn, amoniac và khí carbon dioxide?", ["NaOH", "Na₂CO₃ (soda)", "NaHCO₃ nguyên chất làm thuốc", "CaCl₂"], 1, "Quy trình Solvay cho NH₃ và CO₂ sục vào nước muối bão hòa tạo kết tủa NaHCO₃, sau đó nung NaHCO₃ thu được soda Na₂CO₃.", "Quy trình Solvay = Sản xuất soda Na₂CO₃.");
addQ(26, "Thạch cao sống, thạch cao nung và thạch cao khan lần lượt là các dạng hydrate hóa của hợp chất nào?", ["CaCO₃", "CaSO₄", "CaCl₂", "Ca(NO₃)₂"], 1, "Thạch cao sống là CaSO₄·2H₂O; thạch cao nung là CaSO₄·0,5H₂O (dùng đúc tượng, bó bột); thạch cao khan là CaSO₄.", "Thạch cao = Hợp chất calcium sulfate CaSO₄.");

// Chapter 8: Lessons 27, 28, 29, 30
addQ(27, "Các nguyên tố kim loại chuyển tiếp dãy thứ nhất (từ Sc đến Cu) có đặc điểm electron hóa trị nào?", ["Chỉ điền vào phân lớp 4s ngoài cùng", "Electron được điền dần vào phân lớp 3d bên trong ([Ar]3d¹⁻¹⁰4s¹⁻²)", "Chỉ có phân lớp p", "Không có orbital d trống"], 1, "Dãy kim loại chuyển tiếp thứ nhất có cấu hình electron [Ar]3d¹⁻¹⁰4s¹⁻², phân lớp 3d đang được điền dở.", "Kim loại chuyển tiếp 3d: Cấu hình [Ar]3d¹⁻¹⁰4s¹⁻².");
addQ(27, "Nguyên nhân chính khiến các ion và hợp chất của kim loại chuyển tiếp thường có màu sắc phong phú là:", ["Do kim loại phản xạ toàn bộ ánh sáng trắng", "Sự chuyển dời electron giữa các orbital d bị tách năng lượng khi phối tử bao quanh (chuyển mức d–d)", "Do hợp chất bị nhiễm bẩn carbon", "Do khối lượng phân tử rất lớn"], 1, "Dưới tác dụng của trường phối tử, các orbital d bị tách mức năng lượng; electron hấp thụ ánh sáng khả kiến để chuyển mức d–d tạo màu bổ trợ.", "Màu sắc hợp chất chuyển tiếp do chuyển mức electron d–d.");
addQ(27, "Hai nguyên tố kim loại chuyển tiếp dãy thứ nhất có cấu hình electron ngoại lệ (bán bão hòa và bão hòa phân lớp 3d) là:", ["Fe và Co", "Cr ([Ar]3d⁵4s¹) và Cu ([Ar]3d¹⁰4s¹)", "Sc và Ti", "Mn và Ni"], 1, "Cr có cấu hình 3d⁵4s¹ (bán bão hòa 3d bền) và Cu có cấu hình 3d¹⁰4s¹ (bão hòa 3d bền) thay vì cấu hình thông thường 4s².", "Cấu hình ngoại lệ: Cr (3d⁵4s¹) và Cu (3d¹⁰4s¹).");

addQ(28, "Trong phức chất [Cu(H₂O)₆]²⁺, thành phần nào đóng vai trò là nguyên tử/ion trung tâm và phối tử?", ["Cu²⁺ là ion trung tâm, phân tử H₂O là phối tử", "H₂O là trung tâm, Cu²⁺ là phối tử", "H⁺ là trung tâm, Cu là phối tử", "O²⁻ là trung tâm, H₂ là phối tử"], 0, "Ion kim loại Cu²⁺ có orbital trống làm tâm, 6 phân tử H₂O đóng vai trò phối tử cho đôi electron tự do tạo liên kết phối trí.", "[Cu(H₂O)₆]²⁺: Cu²⁺ là ion trung tâm, H₂O là phối tử.");
addQ(28, "Số phối trí của ion bạc (Ag⁺) trong phức chất thuốc thử Tollens [Ag(NH₃)₂]⁺ là:", ["1", "2", "4", "6"], 1, "Ion Ag⁺ liên kết trực tiếp với 2 phối tử NH₃ qua 2 liên kết cho nhận, do đó số phối trí bằng 2 và có cấu trúc thẳng hàng.", "Số phối trí của [Ag(NH₃)₂]⁺ = 2 (cấu trúc đường thẳng).");
addQ(28, "Phối tử (ligand) trong phức chất bắt buộc phải có đặc điểm cấu tạo nào sau đây?", ["Phải là kim loại có tính khử mạnh", "Phải sở hữu ít nhất một cặp electron hóa trị chưa liên kết để cho vào orbital trống của ion trung tâm", "Phải là hợp chất cao phân tử polymer", "Phải mang điện tích dương lớn"], 1, "Phối tử là phân tử trung hòa (NH₃, H₂O, CO) hoặc anion (OH⁻, Cl⁻, CN⁻) có đôi electron tự do tạo liên kết cho - nhận với ion trung tâm.", "Phối tử = Có cặp electron tự do tạo liên kết cho - nhận.");

addQ(29, "Khi nhỏ dung dịch ammonia (NH₃) từ từ đến dư vào dung dịch CuSO₄, hiện tượng quan sát được là:", ["Chỉ tạo kết tủa xanh và không thay đổi", "Ban đầu xuất hiện kết tủa Cu(OH)₂ màu xanh nhạt, sau đó kết tủa tan dần tạo dung dịch phức chất [Cu(NH₃)₄(H₂O)₂]²⁺ màu xanh lam đậm", "Có kết tủa màu đỏ gạch Cu₂O lắng xuống", "Không có hiện tượng gì"], 1, "Giai đoạn 1 tạo kết tủa Cu(OH)₂ do môi trường kiềm yếu của NH₃; giai đoạn 2 NH₃ đóng vai trò phối tử hòa tan kết tủa tạo phức xanh lam thẫm.", "Cu²⁺ + NH₃ dư → Dung dịch phức chất màu xanh lam đậm.");
addQ(29, "Thuốc thử Tollens dùng trong phản ứng tráng bạc nhận biết aldehyde có thành phần phức chất là:", ["[Cu(NH₃)₄]²⁺", "[Ag(NH₃)₂]OH", "[Fe(CN)₆]³⁻", "[Zn(OH)₄]²⁻"], 1, "Thuốc thử Tollens là dung dịch bạc amoniac [Ag(NH₃)₂]OH gồm cation phức diamminebạc(I) và anion hydroxide.", "Thuốc thử Tollens = [Ag(NH₃)₂]OH.");
addQ(29, "Hợp chất phức chất Cisplatin [Pt(NH₃)₂Cl₂] có ứng dụng y học nổi tiếng nào?", ["Thuốc giảm đau hạ sốt", "Thuốc điều trị ung thư (chống khối u)", "Thuốc bổ sung canxi cho xương", "Thuốc khử trùng vết thương ngoài da"], 1, "Cisplatin là phức chất vuông phẳng của Pt(II) có khả năng gắn kết và làm biến dạng DNA của tế bào ung thư, ngăn chặn tế bào phân chia.", "Cisplatin [Pt(NH₃)₂Cl₂] = Thuốc hóa trị chống ung thư.");

addQ(30, "Nguyên tử kim loại Fe có cấu hình electron [Ar]3d⁶4s². Cấu hình electron của cation Fe³⁺ là:", ["[Ar]3d³4s²", "[Ar]3d⁵", "[Ar]3d⁶", "[Ar]3d⁴4s¹"], 1, "Khi nhường electron tạo ion dương, electron ở phân lớp 4s ngoài cùng bị mất trước, sau đó mất tiếp 1 electron ở 3d: Fe → Fe³⁺ + 3e⁻ nên Fe³⁺ có cấu hình [Ar]3d⁵.", "Fe³⁺ = [Ar]3d⁵ (cấu hình bán bão hòa 3d bền).");
addQ(30, "Phức chất bát diện [Fe(CN)₆]⁴⁻ có ion trung tâm, số phối trí và điện tích cầu nội lần lượt là:", ["Fe²⁺, số phối trí 6, điện tích 4-", "Fe³⁺, số phối trí 6, điện tích 3-", "Fe²⁺, số phối trí 4, điện tích 2-", "Fe⁰, số phối trí 6, điện tích 0"], 0, "6 phối tử CN⁻ (mỗi phối tử mang điện 1-) kết hợp Fe²⁺ cho tổng điện tích cầu nội: (+2) + 6(-1) = -4; số phối trí = 6.", "[Fe(CN)₆]⁴⁻ = Fe²⁺ + 6 phối tử CN⁻ (điện tích 4-).");
addQ(30, "Trung tâm hoạt động của phân tử Hemoglobin trong hồng cầu vận chuyển oxygen trong máu là phức chất chứa ion kim loại nào?", ["Ion Cu²⁺", "Ion Mg²⁺", "Ion Fe²⁺", "Ion Zn²⁺"], 2, "Hemoglobin chứa phức chất nhân heme với ion trung tâm Fe²⁺ liên kết phối trí với vòng porphyrin, có khả năng gắn và nhả thuận nghịch phân tử O₂.", "Hemoglobin máu chứa tâm Fe²⁺ (Diệp lục thực vật chứa tâm Mg²⁺).");

// 20 Exam Arena Questions for Grade 12 Chemistry
const examQuestions = [
  {
    id: 1,
    chapter: 1,
    q: "Thủy phân hoàn toàn 1 mol triglyceride X trong dung dịch NaOH đun nóng thu được 1 mol glycerol, 2 mol sodium stearate và 1 mol sodium oleate. Công thức phân tử của X là:",
    options: ["C₅₇H₁₁₀O₆", "C₅₇H₁₀₈O₆", "C₅₅H₁₀₄O₆", "C₅₇H₁₀₄O₆"],
    answer: 1,
    explain: "Stearic acid là C₁₇H₃₅COOH (no), Oleic acid là C₁₇H₃₃COOH (1 liên kết C=C). Gốc triglyceride: 2 gốc C₁₇H₃₅ + 1 gốc C₁₇H₃₃ + C₃H₅ + 3 nhóm –COO–. Tổng số C = 17x3 + 3 + 3 = 57. Số H = 35x2 + 33 + 5 = 108. Công thức: C₅₇H₁₀₈O₆."
  },
  {
    id: 2,
    chapter: 1,
    q: "Chất nào sau đây khi thủy phân trong môi trường kiềm (dung dịch NaOH) cho sản phẩm có khả năng tráng bạc?",
    options: ["CH₃COOCH₃", "HCOOCH=CH₂", "CH₃COOC₂H₅", "C₂H₅COOCH₃"],
    answer: 1,
    explain: "HCOOCH=CH₂ có gốc formate HCOONa tráng bạc và phần alcohol không bền chuyển thành acetaldehyde CH₃CHO cũng tráng bạc."
  },
  {
    id: 3,
    chapter: 2,
    q: "Nhận xét nào sau đây KHÔNG ĐÚNG khi so sánh giữa glucose và fructose?",
    options: [
      "Glucose và fructose đều có cùng công thức phân tử C₆H₁₂O₆ (đồng phân của nhau)",
      "Glucose và fructose đều cho phản ứng tráng bạc với thuốc thử Tollens",
      "Glucose và fructose đều làm mất màu dung dịch nước bromine ở điều kiện thường",
      "Glucose và fructose đều hòa tan Cu(OH)₂ ở nhiệt độ thường tạo phức xanh lam"
    ],
    answer: 2,
    explain: "Glucose có nhóm –CHO bị nước bromine oxi hóa làm mất màu bromine. Fructose có nhóm ketone không làm mất màu nước bromine (dùng nước bromine để phân biệt glucose và fructose)."
  },
  {
    id: 4,
    chapter: 2,
    q: "Cho sơ đồ chuyển hóa: Khí CO₂ → (quang hợp) X → Y → Z → Ethyl alcohol. Các chất X, Y, Z lần lượt là:",
    options: [
      "Tinh bột, glucose, fructose",
      "Tinh bột, glucose, maltose",
      "Tinh bột, glucose, glucose",
      "Tinh bột, maltose, glucose"
    ],
    answer: 2,
    explain: "CO₂ quang hợp tạo tinh bột X; thủy phân tinh bột tạo glucose Y; lên men glucose Z tạo ethyl alcohol C₂H₅OH và CO₂."
  },
  {
    id: 5,
    chapter: 3,
    q: "Dãy gồm các amine được xếp theo chiều tính base TĂNG DẦN là:",
    options: [
      "Aniline < Ammonia < Methylamine < Dimethylamine",
      "Dimethylamine < Methylamine < Ammonia < Aniline",
      "Ammonia < Aniline < Methylamine < Dimethylamine",
      "Methylamine < Dimethylamine < Ammonia < Aniline"
    ],
    answer: 0,
    explain: "Gốc phenyl hút e làm giảm mật độ e trên N (C₆H₅NH₂ < NH₃); gốc methyl đẩy e làm tăng mật độ e (NH₃ < CH₃NH₂ < (CH₃)₂NH)."
  },
  {
    id: 6,
    chapter: 3,
    q: "Cho 0,1 mol glycine (H₂N–CH₂–COOH) tác dụng hoàn toàn với dung dịch NaOH dư. Khối lượng muối carboxylate thu được là:",
    options: ["9,7 gam", "11,1 gam", "8,9 gam", "7,5 gam"],
    answer: 0,
    explain: "Muối là H₂N–CH₂–COONa có M = 75 + 23 - 1 = 97 g/mol. Khối lượng = 0,1 x 97 = 9,7 gam."
  },
  {
    id: 7,
    chapter: 3,
    q: "Thủy phân hoàn toàn 1 mol pentapeptide mạch hở Ala–Gly–Val–Ala–Gly cần bao nhiêu mol nước (H₂O)?",
    options: ["5 mol", "4 mol", "3 mol", "1 mol"],
    answer: 1,
    explain: "Pentapeptide có 5 gốc amino acid, chứa 4 liên kết peptide nên cần 4 phân tử H₂O để cắt đứt hoàn toàn các liên kết peptide."
  },
  {
    id: 8,
    chapter: 4,
    q: "Tơ lapsan (polyethylene terephthalate - PET) được điều chế bằng phản ứng trùng ngưng giữa hai monomer nào?",
    options: [
      "Terephthalic acid và Ethylene glycol",
      "Adipic acid và Hexamethylenediamine",
      "Caprolactam và Nước",
      "Terephthalic acid và Glycerol"
    ],
    answer: 0,
    explain: "Tơ lapsan là một polyester được tổng hợp từ terephthalic acid p-HOOC–C₆H₄–COOH và ethylene glycol HO–CH₂–CH₂–OH."
  },
  {
    id: 9,
    chapter: 4,
    q: "Cao su buna-S được tổng hợp bằng phản ứng đồng trùng hợp giữa:",
    options: [
      "Buta-1,3-diene và Lưu huỳnh (Sulfur)",
      "Buta-1,3-diene và Styrene",
      "Buta-1,3-diene và Acrylonitrile",
      "Isoprene và Styrene"
    ],
    answer: 1,
    explain: "Chữ 'S' trong cao su buna-S là viết tắt của monomer Styrene (C₆H₅CH=CH₂), không phải lưu huỳnh."
  },
  {
    id: 10,
    chapter: 5,
    q: "Cho các cặp oxi hóa – khử: Fe²⁺/Fe (-0,44 V), Cu²⁺/Cu (+0,34 V), Ag⁺/Ag (+0,80 V). Phản ứng nào sau đây KHÔNG THỂ tự xảy ra?",
    options: [
      "Fe + Cu²⁺ → Fe²⁺ + Cu",
      "Cu + 2Ag⁺ → Cu²⁺ + 2Ag",
      "Fe + 2Ag⁺ → Fe²⁺ + 2Ag",
      "Cu + Fe²⁺ → Cu²⁺ + Fe"
    ],
    answer: 3,
    explain: "E°(Cu²⁺/Cu) > E°(Fe²⁺/Fe) nên Cu có tính khử yếu hơn Fe, Cu không thể khử được Fe²⁺."
  },
  {
    id: 11,
    chapter: 5,
    q: "Điện phân 200 mL dung dịch CuSO₄ 1M với điện cực trơ, cường độ dòng điện I = 9,65 A trong thời gian 2000 giây. Khối lượng Cu bám trên cathode là:",
    options: ["6,4 gam", "12,8 gam", "3,2 gam", "9,6 gam"],
    answer: 0,
    explain: "Số mol e trao đổi: n(e) = It/F = (9,65 x 2000) / 96485 = 0,2 mol. Cu²⁺ + 2e → Cu => n(Cu) = 0,2 / 2 = 0,1 mol. Khối lượng m = 0,1 x 64 = 6,4 gam (lượng Cu²⁺ ban đầu là 0,2 mol nên Cu²⁺ chưa hết)."
  },
  {
    id: 12,
    chapter: 6,
    q: "Kim loại có nhiệt độ nóng chảy cao nhất dùng làm dây tóc bóng đèn sợi đốt là:",
    options: ["Vonfram (W)", "Sắt (Fe)", "Titan (Ti)", "Crom (Cr)"],
    answer: 0,
    explain: "Tungsten/Vonfram (W) có nhiệt độ nóng chảy cao nhất trong các kim loại (khoảng 3422 °C)."
  },
  {
    id: 13,
    chapter: 6,
    q: "Để tách kim loại bạc (Ag) ra khỏi hỗn hợp bột gồm Fe, Cu và Ag mà không làm thay đổi khối lượng Ag, dung dịch phù hợp nhất là:",
    options: ["Dung dịch HCl dư", "Dung dịch FeCl₃ dư", "Dung dịch HNO₃ loãng dư", "Dung dịch NaOH dư"],
    answer: 1,
    explain: "Dung dịch FeCl₃ hòa tan được cả Fe (Fe + 2FeCl₃ → 3FeCl₂) và Cu (Cu + 2FeCl₃ → CuCl₂ + 2FeCl₂), nhưng không phản ứng với Ag, lọc lấy Ag nguyên vẹn."
  },
  {
    id: 14,
    chapter: 6,
    q: "Trường hợp nào sau đây xảy ra hiện tượng ăn mòn điện hóa học nhanh nhất?",
    options: [
      "Thanh sắt nguyên chất ngâm trong dung dịch H₂SO₄ loãng",
      "Thanh kẽm nguyên chất ngâm trong dung dịch HCl",
      "Thanh sắt ngâm trong dung dịch H₂SO₄ loãng có nhỏ thêm vài giọt dung dịch CuSO₄",
      "Sợi dây đồng để trong bình khí clo khô"
    ],
    answer: 2,
    explain: "Fe đẩy Cu²⁺ ra thành Cu bám lên Fe, hình thành cặp điện cực Fe - Cu cùng tiếp xúc dung dịch acid H₂SO₄ tạo pin điện hóa ăn mòn Fe mãnh liệt."
  },
  {
    id: 15,
    chapter: 7,
    q: "Nước sinh hoạt có chứa các ion: Ca²⁺, Mg²⁺, Cl⁻, HCO₃⁻. Loại nước này thuộc loại nước cứng:",
    options: ["Nước cứng tạm thời", "Nước cứng vĩnh cửu", "Nước cứng toàn phần", "Nước mềm"],
    answer: 2,
    explain: "Nước chứa Ca²⁺, Mg²⁺ cùng cả HCO₃⁻ (tính cứng tạm thời) và Cl⁻ (tính cứng vĩnh cửu) nên thuộc loại nước cứng toàn phần."
  },
  {
    id: 16,
    chapter: 7,
    q: "Thổi từ từ khí CO₂ đến dư vào dung dịch Ca(OH)₂, hiện tượng quan sát được là:",
    options: [
      "Xuất hiện kết tủa trắng không tan",
      "Ban đầu xuất hiện kết tủa trắng, sau đó kết tủa tan dần tạo dung dịch trong suốt",
      "Dung dịch chuyển sang màu xanh lam",
      "Không có hiện tượng gì"
    ],
    answer: 1,
    explain: "Giai đoạn 1: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O. Giai đoạn 2: CO₂ dư + CaCO₃ + H₂O → Ca(HCO₃)₂ tan."
  },
  {
    id: 17,
    chapter: 8,
    q: "Cấu hình electron của nguyên tử Crom (Cr, Z = 24) ở trạng thái cơ bản là:",
    options: [
      "[Ar]3d⁴4s²",
      "[Ar]3d⁵4s¹",
      "[Ar]3d⁶4s⁰",
      "[Ar]3d³4s²4p¹"
    ],
    answer: 1,
    explain: "Do phân lớp 3d bán bão hòa có năng lượng bền vững hơn, 1 electron từ 4s nhảy sang 3d tạo cấu hình [Ar]3d⁵4s¹."
  },
  {
    id: 18,
    chapter: 8,
    q: "Trong phức chất [Co(NH₃)₆]Cl₃, số phối trí của ion Co³⁺ và điện tích của cầu nội lần lượt là:",
    options: ["6 và 3+", "6 và 3-", "3 và 3+", "6 và 0"],
    answer: 0,
    explain: "Ion Co³⁺ liên kết với 6 phối tử trung hòa NH₃ nên số phối trí = 6. Cầu nội [Co(NH₃)₆]³⁺ mang điện tích 3+ (cân bằng với 3 ion Cl⁻ bên ngoài)."
  },
  {
    id: 19,
    chapter: 8,
    q: "Phản ứng thế phối tử thể hiện rõ nhất khi thêm dung dịch NH₃ vào dung dịch chứa phức chất [Cu(H₂O)₆]²⁺ là do:",
    options: [
      "Phân tử NH₃ tạo phức với Cu²⁺ bền hơn nhiều so với phối tử H₂O",
      "Phân tử H₂O bay hơi hết khỏi dung dịch",
      "NH₃ làm giảm pH dung dịch",
      "Cu²⁺ bị khử về kim loại Cu"
    ],
    answer: 0,
    explain: "Phối tử NH₃ có khả năng cho electron mạnh hơn H₂O, tạo phức [Cu(NH₃)₄(H₂O)₂]²⁺ bền hơn phức aqua ban đầu, làm màu xanh lam đậm lên rõ rệt."
  },
  {
    id: 20,
    chapter: 7,
    q: "Quy tắc an toàn nào sau đây là TỐI KỴ khi làm thí nghiệm với kim loại kiềm (Na, K)?",
    options: [
      "Dùng kẹp gắp mẫu kim loại, thấm sạch dầu bằng giấy lọc trước khi cắt",
      "Cắt mẩu kim loại thật nhỏ (bằng hạt đậu xanh) khi cho vào chậu nước",
      "Dùng tay trực tiếp cầm thanh kim loại Natri để bẻ đôi",
      "Đeo kính bảo hộ và giữ khoảng cách an toàn với chậu nước"
    ],
    answer: 2,
    explain: "Kim loại kiềm phản ứng dữ dội với mồ hôi/ẩm trên da tạo kiềm nóng gây bỏng sâu và nguy hiểm; tuyệt đối không dùng tay trần chạm vào."
  }
];

const fullData = {
  lessonThemes,
  lessonQuizzes,
  examQuestions
};

fs.writeFileSync(
  'C:/Users/ADMIN/.gemini/antigravity/scratch/hoa12_interactive_data.js',
  'module.exports = ' + JSON.stringify(fullData, null, 2),
  'utf8'
);

console.log('Saved hoa12_interactive_data.js successfully!');
