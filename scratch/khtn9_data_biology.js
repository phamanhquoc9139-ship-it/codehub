// khtn9_data_biology.js - Phần 3: Sinh học (Bài 36 đến Bài 51)
module.exports = [
  {
    id: 36,
    title: "Khái quát về di truyền học",
    chapter: "CHƯƠNG XI. DI TRUYỀN MENDEL VÀ CƠ SỞ PHÂN TỬ",
    branch: "Sinh học",
    icon: "fa-seedling",
    summary: "Hiện tượng di truyền và biến dị, các thuật ngữ tính trạng, allele, kiểu gene, kiểu hình, đồng hợp và dị hợp.",
    keyPoints: [
      "Di truyền là hiện tượng truyền đạt các tính trạng của bố mẹ, tổ tiên cho các thế hệ con cháu.",
      "Biến dị là hiện tượng con cháu sinh ra có những đặc điểm sai khác so với bố mẹ và khác nhau giữa các cá thể trong cùng một lứa con. Di truyền và biến dị là hai hiện tượng song song gắn liền với sinh sản.",
      "Tính trạng là những đặc điểm cụ thể về hình thái, cấu tạo, sinh lí của cơ thể sinh vật (màu hoa, chiều cao thân, nhóm máu).",
      "Allele là các trạng thái biểu hiện khác nhau của cùng một gene (ví dụ gene quy định màu mắt có allele mắt nâu A và allele mắt xanh a).",
      "Kiểu gene là toàn bộ các gene nằm trong tế bào cơ thể sinh vật; Kiểu hình là tập hợp toàn bộ các tính trạng biểu hiện ra bên ngoài của cơ thể, là kết quả tương tác giữa kiểu gene và môi trường.",
      "Thể đồng hợp chứa 2 allele giống nhau (AA hoặc aa); Thể dị hợp chứa 2 allele khác nhau (Aa).",
      "Tính trạng trội là tính trạng biểu hiện ở cá thể mang kiểu gene dị hợp (Aa); Tính trạng lặn chỉ biểu hiện khi ở trạng thái đồng hợp lặn (aa)."
    ],
    formula: "\\text{Kiểu hình} = \\text{Kiểu gene} + \\text{Môi trường sống}; \\quad \\text{Đồng hợp: } AA, aa; \\quad \\text{Dị hợp: } Aa",
    experiment: "Quan sát và thống kê các tính trạng tương phản rõ rệt ở người trong lớp học: Mí mắt (mắt 1 mí / mắt 2 mí), dái tai (dái tai dính / dái tai tự do), khả năng cuộn lưỡi (cuộn được / không cuộn được).",
    quiz: {
      q: "Tập hợp toàn bộ các đặc điểm hình thái, cấu tạo và sinh lí có thể quan sát được của một cơ thể sinh vật được gọi là:",
      options: [
        "Kiểu gene",
        "Kiểu hình",
        "Bộ nhiễm sắc thể",
        "Dòng thuần chủng"
      ],
      ans: 1,
      expl: "Kiểu hình là tập hợp tất cả các tính trạng biểu hiện ra bên ngoài của một cơ thể sinh vật (như màu mắt, màu tóc, chiều cao, hình dạng hạt), được hình thành do sự tương tác giữa kiểu gene của sinh vật với điều kiện môi trường sống."
    }
  },
  {
    id: 37,
    title: "Các quy luật di truyền của Mendel",
    chapter: "CHƯƠNG XI. DI TRUYỀN MENDEL VÀ CƠ SỞ PHÂN TỬ",
    branch: "Sinh học",
    icon: "fa-diagram-project",
    summary: "Phương pháp lai phân tích của Mendel, quy luật phân li (3 trội : 1 lặn) và quy luật phân li độc lập (9:3:3:1).",
    keyPoints: [
      "Gregor Mendel (1822-1884) - Người đặt nền móng cho Di truyền học cổ điển. Ông chọn đối tượng nghiên cứu là cây đậu Hà Lan vì có nhiều cặp tính trạng tương phản rõ rệt, tự thụ phấn nghiêm ngặt và dễ lai nhân tạo.",
      "Quy luật phân li (Lai một cặp tính trạng): Cho cây P thuần chủng hoa đỏ (AA) lai với hoa trắng (aa) -> F1 toàn hoa đỏ (Aa). Cho F1 tự thụ phấn -> F2 phân li theo tỉ lệ kiểu gene 1AA : 2Aa : 1aa và tỉ lệ kiểu hình xấp xỉ 3 hoa đỏ : 1 hoa trắng.",
      "Nội dung quy luật phân li: Trong quá trình phát sinh giao tử, mỗi nhân tố di truyền (allele) trong cặp phân li đồng đều về một giao tử, nên mỗi giao tử chỉ chứa 1 allele của cặp.",
      "Quy luật phân li độc lập (Lai hai cặp tính trạng): P thuần chủng Hạt vàng, trơn (AABB) x Hạt xanh, nhăn (aabb) -> F1: AaBb (100% hạt vàng, trơn). Cho F1 tự thụ phấn -> F2 thu được 16 tổ hợp giao tử với tỉ lệ kiểu hình: 9 Vàng, trơn : 3 Vàng, nhăn : 3 Xanh, trơn : 1 Xanh, nhăn.",
      "Nội dung quy luật phân li độc lập: Các cặp allele quy định các cặp tính trạng khác nhau phân li độc lập với nhau trong quá trình hình thành giao tử (khi các gene nằm trên các cặp NST tương đồng khác nhau).",
      "Lai phân tích: Phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gene với cá thể mang tính trạng lặn (aa). Nếu đời con đồng tính -> cá thể đem lai đồng hợp trội (AA); nếu đời con phân li tỉ lệ 1:1 -> cá thể đem lai dị hợp (Aa)."
    ],
    formula: "\\text{Lai 1 cặp: } Aa \\times Aa \\to 3\\text{ trội} : 1\\text{ lặn}; \\quad \\text{Lai 2 cặp: } AaBb \\times AaBb \\to 9 : 3 : 3 : 1",
    experiment: "Mô phỏng phép lai Mendel bằng các viên bi màu: Chuẩn bị 2 hộp chứa số lượng bi đỏ (A) và bi trắng (a) bằng nhau, rút ngẫu nhiên từng cặp bi từ hai hộp để đếm tỉ lệ tổ hợp AA, Aa, aa sau 100 lần rút.",
    quiz: {
      q: "Khi cho hai cây đậu Hà Lan đều có kiểu gene dị hợp Aa tự thụ phấn (với A quy định hạt vàng là trội hoàn toàn so với a quy định hạt xanh), tỉ lệ kiểu hình thu được ở đời con F2 là:",
      options: [
        "100% hạt vàng",
        "1 hạt vàng : 1 hạt xanh",
        "3 hạt vàng : 1 hạt xanh",
        "9 hạt vàng : 7 hạt xanh"
      ],
      ans: 2,
      expl: "Phép lai Aa x Aa tạo ra đời con có tỉ lệ kiểu gene là 1 AA : 2 Aa : 1 aa. Vì A trội hoàn toàn so với a nên các cá thể AA và Aa đều biểu hiện kiểu hình hạt vàng (chiếm 3/4 = 75%), còn aa biểu hiện hạt xanh (chiếm 1/4 = 25%), tạo tỉ lệ 3 hạt vàng : 1 hạt xanh."
    }
  },
  {
    id: 38,
    title: "Nucleic acid và gene",
    chapter: "CHƯƠNG XI. DI TRUYỀN MENDEL VÀ CƠ SỞ PHÂN TỬ",
    branch: "Sinh học",
    icon: "fa-dna",
    summary: "Cấu trúc xoắn kép của phân tử DNA, đơn phân nucleotide, nguyên tắc bổ sung A-T, G-C và cấu trúc các loại RNA.",
    keyPoints: [
      "Nucleic acid là đại phân tử sinh học mang thông tin di truyền, gồm 2 loại: DNA (Deoxyribonucleic acid) và RNA (Ribonucleic acid).",
      "Cấu trúc hóa học của DNA: Được cấu tạo theo nguyên tắc đa phân, đơn phân là nucleotide. Mỗi nucleotide gồm 3 thành phần: Gốc đường deoxyribose (C5H10O4), gốc phosphoric acid (H3PO4) và 1 trong 4 loại base nitơ: Adenine (A), Thymine (T), Guanine (G), Cytosine (C).",
      "Mô hình cấu trúc không gian của Watson và Crick (1953): DNA gồm 2 chuỗi polynucleotide xoắn song song ngược chiều quanh một trục chung. Các base nitơ ở hai mạch liên kết với nhau bằng các liên kết hydrogen theo nguyên tắc bổ sung: A liên kết với T bằng 2 liên kết hydrogen (A=T), G liên kết với C bằng 3 liên kết hydrogen (G≡C).",
      "Do nguyên tắc bổ sung: Trong phân tử DNA, số lượng A luôn bằng T (A = T) và G luôn bằng C (G = C).",
      "Phân tử RNA: Thường cấu tạo 1 mạch đơn, đường là ribose (C5H10O5), 4 loại base nitơ là A, U (Uracil thay cho T), G, C. Gồm 3 loại chính: mRNA (RNA thông tin mang khuôn mẫu dịch mã), tRNA (RNA vận chuyển amino acid), rRNA (RNA ribosome cấu tạo nên ribosome).",
      "Gene là một đoạn xác định của phân tử DNA mang thông tin mã hóa cho một chuỗi polypeptide hoặc một phân tử RNA chức năng."
    ],
    formula: "\\text{Nguyên tắc bổ sung: } A = T, \\quad G = C; \\quad N = 2A + 2G = 2T + 2C; \\quad H = 2A + 3G",
    experiment: "Lắp ráp mô hình không gian phân tử DNA bằng bộ dụng cụ học sinh: Ghép đúng cặp base tương ứng A-T bằng chốt đôi và G-C bằng chốt ba để tạo thành chuỗi xoắn kép hoàn chỉnh.",
    quiz: {
      q: "Trên một phân tử DNA mạch kép, nếu mạch 1 có trình tự các nucleotide là: 5'-A-T-G-C-C-A-3' thì trình tự bổ sung trên mạch 2 sẽ là:",
      options: [
        "3'-T-A-C-G-G-T-5'",
        "3'-U-A-C-G-G-U-5'",
        "3'-A-T-G-C-C-A-5'",
        "3'-C-G-T-A-A-C-5'"
      ],
      ans: 0,
      expl: "Theo nguyên tắc bổ sung của DNA: A liên kết với T và G liên kết với C. Do đó mạch đối diện tương ứng với 5'-A-T-G-C-C-A-3' phải là 3'-T-A-C-G-G-T-5'."
    }
  },
  {
    id: 39,
    title: "Tái bản DNA và phiên mã RNA",
    chapter: "CHƯƠNG XI. DI TRUYỀN MENDEL VÀ CƠ SỞ PHÂN TỬ",
    branch: "Sinh học",
    icon: "fa-copy",
    summary: "Cơ chế tái bản DNA theo nguyên tắc bán bảo toàn và nguyên tắc bổ sung, quá trình phiên mã tạo mRNA.",
    keyPoints: [
      "Tái bản DNA (sự nhân đôi DNA): Diễn ra trong nhân tế bào ở kì trung gian trước khi phân chia tế bào. Nhờ enzyme tháo xoắn và DNA polymerase, hai mạch đơn tách nhau ra.",
      "Nguyên tắc bán bảo toàn (giữ lại một nửa): Mỗi phân tử DNA con được tạo thành gồm có 1 mạch cũ có nguồn gốc từ DNA mẹ ban đầu và 1 mạch mới được tổng hợp từ các nucleotide tự do của môi trường.",
      "Nguyên tắc bổ sung trong tái bản: Nucleotide tự do A liên kết với T trên mạch khuôn, T liên kết với A, G liên kết với C, C liên kết với G.",
      "Ý nghĩa của tái bản DNA: Đảm bảo thông tin di truyền được sao chép nguyên vẹn và truyền đạt chính xác qua các thế hệ tế bào và cơ thể.",
      "Quá trình phiên mã (tổng hợp RNA): Diễn ra trong nhân tế bào, enzyme RNA polymerase sử dụng một mạch khuôn của gene (mạch 3'->5') để tổng hợp phân tử mRNA theo nguyên tắc bổ sung: A_khuôn liên kết với U_môi trường, T_khuôn liên kết với A, G_khuôn liên kết với C, C_khuôn liên kết với G.",
      "mRNA sau khi tổng hợp rời nhân qua lỗ màng nhân ra tế bào chất để tham gia quá trình dịch mã."
    ],
    formula: "\\text{Phiên mã: } A_{\\text{khuôn}} \\to U_{\\text{mRNA}}, \\quad T_{\\text{khuôn}} \\to A_{\\text{mRNA}}, \\quad G_{\\text{khuôn}} \\to C_{\\text{mRNA}}, \\quad C_{\\text{khuôn}} \\to G_{\\text{mRNA}}",
    experiment: "Bài tập mô phỏng: Cho đoạn mạch khuôn DNA có trình tự 3'-T-A-C-G-T-A-5', hãy viết trình tự nucleotide của phân tử mRNA tương ứng được tổng hợp qua phiên mã (5'-A-U-G-C-A-U-3').",
    quiz: {
      q: "Nguyên tắc bán bảo toàn trong quá trình tái bản (nhân đôi) DNA có nghĩa là gì?",
      options: [
        "Chỉ có một nửa số phân tử DNA trong nhân được nhân đôi",
        "Trong mỗi phân tử DNA con mới tạo thành, có một mạch cũ từ DNA mẹ và một mạch mới tổng hợp",
        "Phân tử DNA con chỉ chứa toàn các nucleotide hoàn toàn mới",
        "Mỗi phân tử DNA con nhận cả hai mạch đơn hoàn toàn cũ từ DNA mẹ"
      ],
      ans: 1,
      expl: "Bán bảo toàn (semi-conservative) có nghĩa là giữ lại một nửa: Trong mỗi phân tử DNA kép con tạo thành sau quá trình nhân đôi, luôn có 1 mạch đơn nguyên vẹn từ phân tử DNA mẹ ban đầu và 1 mạch đơn mới được tổng hợp bổ sung từ môi trường nội bào."
    }
  },
  {
    id: 40,
    title: "Dịch mã và mối quan hệ từ gene đến tính trạng",
    chapter: "CHƯƠNG XI. DI TRUYỀN MENDEL VÀ CƠ SỞ PHÂN TỬ",
    branch: "Sinh học",
    icon: "fa-arrows-split-up-and-left",
    summary: "Quá trình dịch mã tổng hợp chuỗi polypeptide tại ribosome và sơ đồ luồng thông tin trung tâm Gene -> mRNA -> Protein -> Tính trạng.",
    keyPoints: [
      "Mã di truyền: Là mã bộ ba (codon), tức là cứ 3 nucleotide liền kề nhau trên mạch mRNA quy định (mã hóa) cho một amino acid cụ thể. Có 64 bộ ba (61 bộ ba mã hóa cho 20 loại amino acid, 1 bộ ba mở đầu AUG mã hóa Methionine, 3 bộ ba kết thúc UAA, UAG, UGA không mã hóa amino acid).",
      "Quá trình dịch mã (tổng hợp protein): Diễn ra tại ribosome ở tế bào chất. Ribosome trượt trên phân tử mRNA từ đầu 5' đến 3'.",
      "Phân tử tRNA mang một amino acid tương ứng ở một đầu và đầu kia mang bộ ba đối mã (anticodon) gắn khớp bổ sung với codon trên mRNA; các amino acid được nối với nhau bằng liên kết peptide tạo thành chuỗi polypeptide.",
      "Khi ribosome tiếp xúc với bộ ba kết thúc, quá trình dịch mã dừng lại, chuỗi polypeptide được giải phóng và cuộn gập thành phân tử protein có hoạt tính sinh học.",
      "Mối quan hệ trung tâm của sinh học phân tử: Trình tự nucleotide trong gene quy định trình tự nucleotide trong mRNA qua phiên mã; trình tự nucleotide trong mRNA quy định trình tự amino acid trong chuỗi polypeptide của protein qua dịch mã; Protein trực tiếp biểu hiện thành tính trạng của cơ thể.",
      "Môi trường sống có ảnh hưởng sâu sắc đến sự biểu hiện của kiểu gene thành kiểu hình."
    ],
    formula: "\\text{Gene (DNA)} \\xrightarrow{\\text{Phiên mã}} \\text{mRNA} \\xrightarrow{\\text{Dịch mã (Ribosome)}} \\text{Protein} \\to \\text{Kiểu hình (Tính trạng)}",
    experiment: "Dùng bảng tra cứu mã di truyền xác định chuỗi peptide tương ứng với chuỗi mRNA: 5'-AUG - UUU - GGG - UAA-3' -> Methionine - Phenylalanine - Glycine - (Kết thúc).",
    quiz: {
      q: "Sơ đồ nào sau đây phản ánh chính xác nhất mối quan hệ truyền đạt thông tin di truyền từ cấp độ phân tử đến tính trạng cơ thể?",
      options: [
        "Protein -> mRNA -> Gene (DNA) -> Tính trạng",
        "Gene (DNA) -> Protein -> mRNA -> Tính trạng",
        "Gene (DNA) -> mRNA -> Protein -> Tính trạng",
        "mRNA -> Gene (DNA) -> Protein -> Tính trạng"
      ],
      ans: 2,
      expl: "Luồng thông tin di truyền theo học thuyết trung tâm của sinh học phân tử: Gene (DNA) phiên mã tạo phân tử mRNA, sau đó mRNA dịch mã tại ribosome để tổng hợp chuỗi protein, và protein tương tác trong tế bào quy định tính trạng của cơ thể."
    }
  },
  {
    id: 41,
    title: "Đột biến gene",
    chapter: "CHƯƠNG XI. DI TRUYỀN MENDEL VÀ CƠ SỞ PHÂN TỬ",
    branch: "Sinh học",
    icon: "fa-triangle-exclamation",
    summary: "Khái niệm đột biến gene, các dạng đột biến điểm (thay thế, mất, thêm một cặp nucleotide), nguyên nhân và ý nghĩa.",
    keyPoints: [
      "Đột biến gene là những biến đổi nhỏ trong cấu trúc của gene, liên quan đến một hoặc một số cặp nucleotide.",
      "Đột biến điểm là đột biến chỉ liên quan đến 1 cặp nucleotide, gồm 3 dạng cơ bản: 1. Thay thế 1 cặp nucleotide; 2. Mất 1 cặp nucleotide; 3. Thêm 1 cặp nucleotide.",
      "Mất hoặc thêm 1 cặp nucleotide thường gây hậu quả nghiêm trọng hơn thay thế vì làm dịch khung đọc mã di truyền kể từ vị trí đột biến trở về sau, làm thay đổi toàn bộ chuỗi amino acid.",
      "Nguyên nhân gây đột biến: Do sai sót ngẫu nhiên trong quá trình tự nhân đôi của DNA; hoặc do tác nhân vật lí (tia phóng xạ X, gamma, tia tử ngoại UV), tác nhân hóa học (chất độc da cam dioxin, hóa chất bảo vệ thực vật) và tác nhân sinh học (virus viêm gan, HPV).",
      "Vai trò và ý nghĩa: Đột biến gene tạo ra các allele mới, làm phong phú vốn gene của loài, cung cấp nguyên liệu sơ cấp dồi dào cho quá trình tiến hóa và công tác chọn tạo giống.",
      "Hậu quả: Đa số đột biến gene trong tự nhiên là có hại hoặc trung tính; một số ít có lợi trong môi trường thích hợp (ví dụ đột biến kháng sâu bệnh ở cây trồng).",
      "Bảo vệ sức khỏe: Tránh tiếp xúc với các hóa chất độc hại, đeo đồ bảo hộ khi phun thuốc trừ sâu, bảo vệ môi trường trong sạch."
    ],
    formula: "\\text{Đột biến điểm} = \\text{Thay thế} \\lor \\text{Mất} \\lor \\text{Thêm } 1\\text{ cặp nucleotide}",
    experiment: "Tìm hiểu bệnh thiếu máu hồng cầu hình liềm ở người do đột biến thay thế 1 cặp nucleotide (T-A thành A-T) ở codon thứ 6 của gene mã hóa chuỗi beta-hemoglobin, làm thay thế amino acid glutamic acid bằng valine khiến hồng cầu biến dạng thành hình liềm dễ vỡ.",
    quiz: {
      q: "Dạng đột biến điểm nào sau đây thường làm thay đổi toàn bộ trình tự các amino acid trong chuỗi polypeptide kể từ vị trí đột biến cho đến cuối chuỗi (hiện tượng dịch khung)?",
      options: [
        "Thay thế một cặp nucleotide",
        "Đột biến mất hoặc thêm một cặp nucleotide",
        "Đột biến đảo vị trí hai cặp nucleotide liền kề",
        "Không có dạng nào làm thay đổi"
      ],
      ans: 1,
      expl: "Mã di truyền được đọc liên tục theo từng bộ ba từ điểm mở đầu. Do đó, khi bị mất hoặc thêm một cặp nucleotide, khung đọc sẽ bị xô lệch (hiện tượng dịch khung), khiến toàn bộ các bộ ba từ vị trí đột biến trở đi bị đọc sai, làm thay đổi toàn bộ chuỗi amino acid tương ứng."
    }
  },
  {
    id: 42,
    title: "Nhiễm sắc thể và bộ nhiễm sắc thể",
    chapter: "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ",
    branch: "Sinh học",
    icon: "fa-bacterium",
    summary: "Cấu tạo nhiễm sắc thể (DNA + protein histone), tâm động, bộ NST lưỡng bội 2n và đơn bội n, tính đặc trưng của loài.",
    keyPoints: [
      "Nhiễm sắc thể (NST) là cấu trúc nằm trong nhân tế bào, bắt màu thuốc nhuộm kiềm tính, là vật chất mang gene di truyền ở cấp độ tế bào.",
      "Cấu tạo hóa học của NST: Gồm phân tử DNA mạch kép xoắn quanh các khối protein histone tạo thành chuỗi nucleosome cuộn xoắn nhiều cấp độ (sợi cơ bản 10 nm -> sợi nhiễm sắc 30 nm -> chromatid 700 nm).",
      "Hình thái NST: Rõ nhất ở kì giữa của phân bào khi co xoắn cực đại. Mỗi NST kép gồm 2 chromatid chị em giống hệt nhau đính với nhau tại tâm động (eo sơ cấp - nơi thoi vô sắc đính vào để kéo NST phân li).",
      "Bộ NST lưỡng bội (2n): Tế bào sinh dưỡng (soma) chứa các cặp NST tương đồng (1 chiếc nhận từ bố, 1 chiếc nhận từ mẹ).",
      "Bộ NST đơn bội (n): Tế bào giao tử (trứng hoặc tinh trùng) chỉ chứa 1 chiếc của mỗi cặp tương đồng.",
      "Tính đặc trưng của loài: Mỗi loài sinh vật có bộ NST đặc trưng về số lượng, hình thái và cấu trúc (Người: 2n = 46 chiếc; Ruồi giấm: 2n = 8 chiếc; Đậu Hà Lan: 2n = 14 chiếc; Tinh tinh: 2n = 48 chiếc). Số lượng NST không phản ánh trình độ tiến hóa của loài."
    ],
    formula: "\\text{Cấu tạo NST} = \\text{DNA kép} + \\text{Protein Histone}; \\quad \\text{Người: } 2n = 46, \\, n = 23",
    experiment: "Quan sát tiêu bản hiển vi bộ nhiễm sắc thể tế bào rễ hành tây hoặc tuyến nước bọt của ấu trùng ruồi giấm dưới vật kính 40x và 100x ngâm dầu.",
    quiz: {
      q: "Bộ nhiễm sắc thể lưỡng bội (2n) trong tế bào sinh dưỡng của người bình thường có bao nhiêu chiếc nhiễm sắc thể?",
      options: [
        "23 chiếc",
        "44 chiếc",
        "46 chiếc",
        "48 chiếc"
      ],
      ans: 2,
      expl: "Bộ nhiễm sắc thể lưỡng bội của loài người bình thường có 2n = 46 chiếc (tương ứng với 23 cặp NST, gồm 22 cặp NST thường và 1 cặp NST giới tính). Giao tử đơn bội n có 23 chiếc."
    }
  },
  {
    id: 43,
    title: "Nguyên phân và giảm phân",
    chapter: "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ",
    branch: "Sinh học",
    icon: "fa-arrows-split-up-and-left",
    summary: "Các kì phân bào nguyên phân tạo tế bào con 2n giống mẹ và giảm phân tạo giao tử n, thụ tinh khôi phục 2n.",
    keyPoints: [
      "Chu kì tế bào gồm kì trung gian (nhân đôi DNA và NST đơn thành NST kép) và quá trình phân bào.",
      "Nguyên phân (Mitosis): Gồm 4 kì: Kì đầu (màng nhân tiêu biến, NST co xoắn), Kì giữa (các NST kép tập trung xếp thành 1 hàng trên mặt phẳng xích đạo của thoi phân bào), Kì sau (các tâm động tách đôi, 2 chromatid phân li thành 2 NST đơn đi về 2 cực tế bào), Kì cuối (hình thành màng nhân mới, phân chia tế bào chất).",
      "Kết quả nguyên phân: Từ 1 tế bào mẹ (2n) tạo ra 2 tế bào con có bộ NST hoàn toàn giống nhau và giống hệt tế bào mẹ (2n). Ý nghĩa: Giúp cơ thể lớn lên, thay thế tế bào già, tái sinh mô và là cơ sở của sinh sản vô tính.",
      "Giảm phân (Meiosis): Diễn ra ở tế bào sinh dục chín gồm 2 lần phân bào liên tiếp nhưng DNA chỉ nhân đôi 1 lần ở kì trung gian trước giảm phân I.",
      "Giảm phân I: Kì đầu I xảy ra hiện tượng tiếp hợp và có thể trao đổi chéo giữa 2 chromatid không chị em; Kì giữa I các cặp NST kép xếp thành 2 hàng; Kì sau I các cặp NST kép tương đồng phân li độc lập về 2 cực -> Tạo 2 tế bào có bộ NST kép đơn bội (n kép).",
      "Giảm phân II: Phân li các chromatid giống nguyên phân -> Kết quả tạo ra 4 tế bào con đơn bội mang bộ NST n (giao tử).",
      "Sự kết hợp giữa Giảm phân và Thụ tinh (n + n -> 2n) đảm bảo duy trì ổn định bộ NST đặc trưng của loài qua các thế hệ và tạo ra vô số biến dị tổ hợp phong phú."
    ],
    formula: "\\text{Nguyên phân: } 2n \\to 2 \\text{ tế bào } (2n); \\quad \\text{Giảm phân: } 2n \\to 4 \\text{ tế bào } (n)",
    experiment: "So sánh sơ đồ hình vẽ nguyên phân và giảm phân: Nhận diện kì giữa nguyên phân (NST xếp 1 hàng) khác biệt hoàn toàn với kì giữa giảm phân I (NST xếp thành 2 hàng song song).",
    quiz: {
      q: "Từ một tế bào mẹ có bộ nhiễm sắc thể lưỡng bội 2n = 16, sau khi trải qua một lần nguyên phân bình thường sẽ tạo ra:",
      options: [
        "2 tế bào con, mỗi tế bào chứa 8 NST",
        "2 tế bào con, mỗi tế bào chứa 16 NST",
        "4 tế bào con, mỗi tế bào chứa 8 NST",
        "4 tế bào con, mỗi tế bào chứa 16 NST"
      ],
      ans: 1,
      expl: "Nguyên phân là hình thức phân bào duy trì nguyên vẹn số lượng NST. Từ 1 tế bào mẹ 2n qua 1 lần nguyên phân sẽ tạo ra 2 tế bào con giống hệt mẹ, mỗi tế bào con có 2n = 16 NST."
    }
  },
  {
    id: 44,
    title: "Nhiễm sắc thể giới tính và cơ chế xác định giới tính",
    chapter: "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ",
    branch: "Sinh học",
    icon: "fa-venus-mars",
    summary: "Cặp NST giới tính XX và XY, cơ chế xác định giới tính ở người tỉ lệ 1:1 và quan điểm bình đẳng giới khoa học.",
    keyPoints: [
      "Trong tế bào sinh dưỡng của sinh vật phân tính có 2 loại NST: Các cặp NST thường (tương đồng ở cả hai giới, ký hiệu A) và Cặp NST giới tính (khác nhau giữa giới đực và giới cái).",
      "Ở người và đa số động vật có vú: Nữ mang cặp NST giới tính tương đồng đồng giao tử (44A + XX); Nam mang cặp NST giới tính dị hình dị giao tử (44A + XY). (Ở chim, bò sát, bướm thì ngược lại: con trống là XX, con mái là XY/ZW).",
      "Cơ chế xác định giới tính ở người: Khi giảm phân, cơ thể mẹ (XX) chỉ tạo ra 1 loại trứng duy nhất mang NST X; Cơ thể bố (XY) tạo ra 2 loại tinh trùng mang NST X và NST Y với tỉ lệ ngang nhau 1:1.",
      "Khi thụ tinh diễn ra ngẫu nhiên: Trứng (X) kết hợp với tinh trùng (X) tạo hợp tử (XX) phát triển thành con gái; Trứng (X) kết hợp với tinh trùng (Y) tạo hợp tử (XY) phát triển thành con trai. Tỉ lệ giới tính sinh học xấp xỉ 1 nam : 1 nữ.",
      "Quan điểm khoa học và bình đẳng giới: Giới tính của con do tinh trùng của người bố quyết định lúc thụ tinh; việc đổ lỗi cho người phụ nữ khi sinh con một bề là hoàn toàn sai lầm và phản khoa học; nghiêm cấm việc lựa chọn giới tính thai nhi dưới mọi hình thức."
    ],
    formula: "P: \\text{Mẹ } (XX) \\times \\text{Bố } (XY) \\to G: X \\times (X, Y) \\to F_1: 1 XX (\\text{gái}) : 1 XY (\\text{trai})",
    experiment: "Phân tích sơ đồ thụ tinh xác định giới tính: Thống kê tỉ lệ trẻ sơ sinh nam/nữ tại địa phương để thấy quy luật xác suất hội tụ xấp xỉ tỉ lệ 1:1 khi cỡ mẫu đủ lớn.",
    quiz: {
      q: "Ở người, giới tính của thai nhi được xác định chủ yếu do yếu tố nào sau đây?",
      options: [
        "Do chế độ dinh dưỡng và tâm lí của người mẹ khi mang thai",
        "Do loại tinh trùng (mang NST X hay NST Y) của người bố thụ tinh với trứng",
        "Do nhiệt độ môi trường xung quanh lúc thụ tinh",
        "Do tuổi tác của bố và mẹ khi kết hôn"
      ],
      ans: 1,
      expl: "Người mẹ chỉ tạo ra một loại trứng mang NST X, trong khi người bố tạo ra hai loại tinh trùng (50% mang X và 50% mang Y) với tỉ lệ ngang nhau. Nếu tinh trùng X thụ tinh sẽ sinh con gái (XX), nếu tinh trùng Y thụ tinh sẽ sinh con trai (XY). Vì vậy giới tính thai nhi do loại tinh trùng của bố quyết định."
    }
  },
  {
    id: 45,
    title: "Di truyền liên kết",
    chapter: "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ",
    branch: "Sinh học",
    icon: "fa-link",
    summary: "Thí nghiệm ruồi giấm của Morgan, hiện tượng các gene cùng nằm trên một NST cùng di truyền với nhau và hoán vị gene.",
    keyPoints: [
      "Thomas Hunt Morgan (1866-1945) phát hiện ra quy luật liên kết gene trên đối tượng nghiên cứu là ruồi giấm (Drosophila melanogaster).",
      "Thí nghiệm của Morgan: Cho ruồi đực F1 thân xám, cánh dài (BV/bv) lai phân tích với ruồi cái thân đen, cánh cụt (bv/bv) -> Đời con Fb chỉ thu được 2 kiểu hình: 50% thân xám, cánh dài và 50% thân đen, cánh cụt (tỉ lệ 1:1 thay vì 1:1:1:1 như quy luật phân li độc lập của Mendel).",
      "Khái niệm: Di truyền liên kết là hiện tượng một nhóm gene nằm trên cùng một nhiễm sắc thể cùng phân li về một giao tử và cùng được di truyền với nhau trong quá trình thụ tinh.",
      "Nhóm gene liên kết: Các gene trên cùng 1 NST tạo thành một nhóm gene liên kết. Số nhóm gene liên kết của một loài thường bằng số NST trong bộ đơn bội (n) của loài đó (Người có 23 nhóm liên kết).",
      "Hiện tượng hoán vị gene: Trong giảm phân I, sự tiếp hợp và trao đổi đoạn giữa 2 chromatid khác nguồn gốc của cặp NST tương đồng có thể làm hoán vị các allele, tạo ra các tổ hợp gene mới.",
      "Ý nghĩa: Liên kết gene đảm bảo sự di truyền bền vững của từng nhóm tính trạng tốt luôn đi kèm với nhau; hoán vị gene làm tăng biến dị tổ hợp cho chọn giống."
    ],
    formula: "\\text{Lai phân tích liên kết hoàn toàn}: \\frac{BV}{bv} \\times \\frac{bv}{bv} \\to 1\\frac{BV}{bv} (\\text{xám, dài}) : 1\\frac{bv}{bv} (\\text{đen, cụt})",
    experiment: "Lập bảng so sánh giữa Quy luật phân li độc lập của Mendel (các gene nằm trên các cặp NST khác nhau) và Quy luật di truyền liên kết của Morgan (các gene cùng nằm trên một cặp NST).",
    quiz: {
      q: "Hiện tượng di truyền liên kết xảy ra khi các gene quy định các tính trạng khác nhau có đặc điểm nào sau đây?",
      options: [
        "Nằm trên các cặp nhiễm sắc thể tương đồng khác nhau",
        "Cùng nằm trên một nhiễm sắc thể và có xu hướng cùng di truyền với nhau",
        "Nằm trong bào quan ti thể của tế bào chất",
        "Bị đột biến cấu trúc làm mất đoạn"
      ],
      ans: 1,
      expl: "Di truyền liên kết là hiện tượng các gene cùng nằm trên một phân tử DNA (cùng nằm trên một nhiễm sắc thể) nên trong quá trình phân bào phân li, chúng có xu hướng đi cùng nhau về một giao tử."
    }
  },
  {
    id: 46,
    title: "Đột biến nhiễm sắc thể",
    chapter: "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ",
    branch: "Sinh học",
    icon: "fa-circle-radiation",
    summary: "Đột biến cấu trúc NST (mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn) và đột biến số lượng NST (lệch bội 2n±1, đa bội 3n, 4n).",
    keyPoints: [
      "Đột biến nhiễm sắc thể là những biến đổi lớn về cấu trúc hoặc số lượng của các nhiễm sắc thể trong tế bào.",
      "Đột biến cấu trúc NST: Gồm 4 dạng: 1. Mất đoạn (làm giảm số lượng gene, thường gây chết hoặc giảm sức sống; ví dụ mất 1 đoạn nhỏ NST số 5 ở người gây hội chứng tiếng mèo kêu); 2. Lặp đoạn (tăng liều lượng gene); 3. Đảo đoạn (đoạn NST đứt ra quay 180° rồi gắn lại); 4. Chuyển đoạn (giữa 2 NST không tương đồng hoặc trong cùng 1 NST).",
      "Đột biến số lượng NST: Biến đổi về số lượng NST trong tế bào, gồm 2 nhóm chính:",
      "- Thể lệch bội (dị bội): Làm thay đổi số lượng ở một hoặc vài cặp NST (2n + 1: thể tam nhiễm; 2n - 1: thể một nhiễm). Ví dụ ở người: Thừa 1 NST số 21 (3 chiếc NST 21 - thể 2n+1=47) gây Hội chứng Down; cặp NST giới tính chỉ có 1 chiếc X (XO - thể 2n-1=45) gây Hội chứng Turner ở nữ; nam mang XXY gây Hội chứng Klinefelter.",
      "- Thể đa bội: Làm tăng nguyên vẹn số lượng toàn bộ bộ NST theo bội số của n lớn hơn 2n (Đa bội lẻ 3n, 5n: quả thường không hạt như dưa hấu 3n, chuối 3n; Đa bội chẵn 4n, 6n: cơ quan sinh dưỡng to, chống chịu tốt).",
      "Nguyên nhân: Do thoi vô sắc không hình thành trong phân bào dưới tác động của hóa chất độc (như colchicine) hoặc bức xạ."
    ],
    formula: "\\text{Lệch bội: } 2n \\pm 1; \\quad \\text{Đa bội lẻ: } 3n; \\quad \\text{Đa bội chẵn: } 4n; \\quad \\text{Hội chứng Down: } 2n+1=47\\text{ (thừa NST 21)}",
    experiment: "Quan sát ảnh chụp tiêu bản hiển vi tế bào học bộ NST của người bình thường (46 chiếc) và người mắc hội chứng Down (có 3 chiếc ở vị trí cặp số 21).",
    quiz: {
      q: "Người mắc Hội chứng Down (Down syndrome) có đặc điểm bộ nhiễm sắc thể trong tế bào sinh dưỡng như thế nào?",
      options: [
        "Bị mất một cánh của nhiễm sắc thể số 5",
        "Thừa một chiếc ở cặp nhiễm sắc thể số 21 (có 3 chiếc NST 21, tổng 2n = 47)",
        "Chỉ có một nhiễm sắc thể giới tính X duy nhất (XO, 2n = 45)",
        "Bộ nhiễm sắc thể tăng lên thành tam bội 3n = 69 chiếc"
      ],
      ans: 1,
      expl: "Hội chứng Down là dạng đột biến lệch bội thể ba nhiễm (2n + 1 = 47 chiếc), do cặp NST số 21 không phân li trong quá trình giảm phân tạo giao tử của bố hoặc mẹ, dẫn đến hợp tử có 3 chiếc NST số 21."
    }
  },
  {
    id: 47,
    title: "Di truyền học với con người",
    chapter: "CHƯƠNG XIII. DI TRUYỀN HỌC VỚI CON NGƯỜI",
    branch: "Sinh học",
    icon: "fa-user-doctor",
    summary: "Bệnh và tật di truyền ở người, phương pháp lập phả hệ, tư vấn di truyền trước hôn nhân và sàng lọc trước sinh.",
    keyPoints: [
      "Bệnh và tật di truyền ở người phát sinh do đột biến gene hoặc đột biến nhiễm sắc thể truyền lại cho đời sau.",
      "Một số bệnh do đột biến gene: Bệnh mù màu đỏ - lục và bệnh máu khó đông (do gene lặn nằm trên vùng không tương đồng của NST giới tính X quy định), bệnh bạch tạng (do gene lặn trên NST thường quy định).",
      "Phương pháp nghiên cứu phả hệ: Theo dõi sự di truyền của một tính trạng hoặc một bệnh qua nhiều thế hệ trong một gia đình dòng tộc để xác định tính trạng đó là trội hay lặn, do gene nằm trên NST thường hay NST giới tính quy định.",
      "Tư vấn di truyền học: Bác sĩ chuyên khoa di truyền phân tích phả hệ, làm xét nghiệm DNA và nhiễm sắc thể để đưa ra lời khuyên khoa học về khả năng sinh con khỏe mạnh cho các cặp vợ chồng có tiền sử mang bệnh di truyền.",
      "Sàng lọc trước sinh và sơ sinh: Siêu âm đo độ mờ da gáy, xét nghiệm NIPT không xâm lấn, chọc ối để phát hiện sớm các dị tật di truyền bẩm sinh; lấy máu gót chân trẻ sơ sinh để phát hiện bệnh thiếu men G6PD hay suy giáp bẩm sinh.",
      "Luật Hôn nhân và Gia đình: Cấm kết hôn giữa những người có cùng dòng máu về trực hệ và có họ trong phạm vi ba đời để tránh nguy cơ xuất hiện các thể đồng hợp lặn gây dị tật bẩm sinh."
    ],
    formula: "\\text{Sàng lọc trước sinh} = \\text{Siêu âm} + \\text{Xét nghiệm NIPT/máu mẹ} + \\text{Chọc ối} \\to \\text{Phát hiện sớm dị tật}",
    experiment: "Vẽ và phân tích sơ đồ cây phả hệ 3 đời của một gia đình có người mắc bệnh bạch tạng để xác định kiểu gene của các thành viên trong gia đình.",
    quiz: {
      q: "Vì sao Luật Hôn nhân và Gia đình Việt Nam quy định cấm kết hôn giữa những người có quan hệ họ hàng gần trong phạm vi 3 đời?",
      options: [
        "Vì làm giảm tỉ lệ sinh nở của cộng đồng",
        "Vì làm tăng nguy cơ các gene lặn có hại gặp nhau ở trạng thái đồng hợp tử, gây bệnh tật bẩm sinh cho đời con",
        "Vì làm giảm tỉ lệ các kiểu gene dị hợp tử có lợi",
        "Vì làm thay đổi giới tính sinh học của thai nhi"
      ],
      ans: 1,
      expl: "Kết hôn cận huyết thống (trong phạm vi 3 đời) tạo cơ hội thuận lợi để các allele lặn có hại (vốn ở trạng thái dị hợp ẩn trong dòng họ) kết hợp với nhau ở trạng thái đồng hợp lặn (aa), dẫn đến tỉ lệ trẻ sinh ra bị dị tật bẩm sinh, quái thai và bệnh di truyền tăng vọt."
    }
  },
  {
    id: 48,
    title: "Ứng dụng công nghệ di truyền vào đời sống",
    chapter: "CHƯƠNG XIII. DI TRUYỀN HỌC VỚI CON NGƯỜI",
    branch: "Sinh học",
    icon: "fa-flask-round-potion",
    summary: "Công nghệ DNA tái tổ hợp, sinh vật biến đổi gene (GMO), sản xuất insulin người và liệu pháp gene trị bệnh.",
    keyPoints: [
      "Công nghệ gene (Kĩ thuật di truyền) là quy trình thao tác nhân tạo chuyển một đoạn gene mong muốn từ tế bào cho sang tế bào nhận.",
      "Quy trình tạo DNA tái tổ hợp: 1. Tách DNA của tế bào cho và thể truyền (plasmid của vi khuẩn); 2. Cắt cả hai bằng cùng 1 loại enzyme cắt giới hạn (restrictase); 3. Nối đoạn gene cần chuyển vào thể truyền bằng enzyme nối (ligase) tạo DNA tái tổ hợp; 4. Đưa DNA tái tổ hợp vào tế bào nhận (thường là vi khuẩn E. coli).",
      "Sản xuất dược phẩm sinh học: Dùng vi khuẩn biến đổi gene để sản xuất hàng loạt hormone insulin trị bệnh tiểu đường ở người, hormone sinh trưởng HGH, kháng thể đơn dòng và vaccine thế hệ mới.",
      "Sinh vật biến đổi gene (GMO): Cây trồng biến đổi gene kháng sâu bệnh (bắp Bt), kháng thuốc diệt cỏ, lúa 'Gạo vàng' tổng hợp tiền vitamin A; động vật biến đổi gene cho sữa chứa protein dược liệu quý.",
      "Liệu pháp gene (Gene therapy): Kĩ thuật can thiệp sửa chữa, thay thế các gene bệnh hỏng bằng các gene lành trực tiếp trong tế bào cơ thể bệnh nhân để chữa trị các bệnh di truyền nan y.",
      "An toàn sinh học & đạo đức sinh học: Cần kiểm soát nghiêm ngặt các sinh vật biến đổi gene để không gây rối loạn cân bằng sinh thái và tuân thủ các chuẩn mực đạo đức y sinh."
    ],
    formula: "\\text{DNA tế bào cho} + \\text{Plasmid thể truyền} \\xrightarrow{\\text{Restrictase + Ligase}} \\text{DNA tái tổ hợp} \\to \\text{Tế bào nhận E. coli}",
    experiment: "Tìm hiểu quy trình nuôi cấy vi khuẩn E. coli mang gene tổng hợp insulin của người trong các nồi lên men công nghiệp để thu nhận thuốc tiêm insulin tinh khiết.",
    quiz: {
      q: "Trong kĩ thuật cấy truyền gene để tạo phân tử DNA tái tổ hợp, người ta sử dụng loại enzyme nào để cắt mở vòng plasmid và cắt lấy đoạn gene cần chuyển?",
      options: [
        "Enzyme nối Ligase",
        "Enzyme cắt giới hạn Restrictase",
        "Enzyme tháo xoắn DNA Helicase",
        "Enzyme phiên mã RNA Polymerase"
      ],
      ans: 1,
      expl: "Enzyme cắt giới hạn (Restriction enzyme hay Restrictase) có khả năng nhận diện và cắt phân tử DNA ở các trình tự nucleotide đặc hiệu để mở vòng plasmid và giải phóng đoạn gene cần chuyển."
    }
  },
  {
    id: 49,
    title: "Khái niệm tiến hóa và các hình thức chọn lọc",
    chapter: "CHƯƠNG XIV. TIẾN HÓA",
    branch: "Sinh học",
    icon: "fa-timeline",
    summary: "Khái niệm tiến hóa sinh học, chọn lọc tự nhiên của Darwin, chọn lọc nhân tạo và các hình thức chọn lọc.",
    keyPoints: [
      "Tiến hóa sinh học là quá trình biến đổi các đặc tính di truyền của một quần thể sinh vật qua các thế hệ nối tiếp nhau trong lịch sử địa chất.",
      "Cá thể không tiến hóa mà chính quần thể là đơn vị cơ sở nhỏ nhất có khả năng tiến hóa.",
      "Chọn lọc tự nhiên (Charles Darwin - 1859): Trong tự nhiên, sinh vật có xu hướng sinh sản nhiều hơn khả năng nuôi dưỡng của môi trường, dẫn tới đấu tranh sinh tồn; Các cá thể mang biến dị di truyền có lợi sẽ thích nghi tốt hơn, sống sót và sinh sản ưu thế, truyền lại các đặc điểm đó cho thế hệ sau. Kết quả là hình thành nên các quần thể thích nghi với môi trường sống.",
      "Chọn lọc nhân tạo: Do con người chủ động tiến hành, chọn lọc và giữ lại các cá thể vật nuôi, cây trồng mang những biến dị có lợi cho nhu cầu kinh tế, thị hiếu thẩm mĩ của con người và đào thải các cá thể không mong muốn (tạo ra hàng trăm giống chó, lúa, hoa lan khác nhau từ tổ tiên hoang dại).",
      "Các hình thức chọn lọc: Chọn lọc ổn định (duy trì tính trạng trung bình khi môi trường ổn định); Chọn lọc định hướng (ưu tiên một phía kiểu hình khi môi trường thay đổi theo hướng xác định); Chọn lọc phân hóa (ưu tiên hai thái cực kiểu hình khi môi trường sống phân hóa thành nhiều ổ sinh thái)."
    ],
    formula: "\\text{CLTN: Biến dị cá thể} + \\text{Đấu tranh sinh tồn} \\to \\text{Sống sót & sinh sản ưu thế} \\to \\text{Thích nghi}",
    experiment: "Tìm hiểu hiện tượng biến hóa màu sắc của loài bướm bạch dương (Biston betularia) ở nước Anh: Trước cách mạng công nghiệp thân cây phủ địa y trắng (bướm trắng chiếm ưu thế); khi công nghiệp phát triển bồ hóng than phủ đen thân cây (bướm đen ngụy trang tốt hơn, sống sót cao và chiếm đa số).",
    quiz: {
      q: "Động lực chủ yếu thúc đẩy quá trình chọn lọc tự nhiên diễn ra trong sinh giới theo học thuyết của Charles Darwin là:",
      options: [
        "Mong muốn chủ quan của con người",
        "Sự đấu tranh sinh tồn giữa các cá thể sinh vật với các điều kiện môi trường sống",
        "Ý muốn tự hoàn thiện bản thân của từng cá thể sinh vật",
        "Sự xuất hiện đồng loạt của các đột biến nhân tạo"
      ],
      ans: 1,
      expl: "Theo Darwin, sinh vật sinh sản rất nhanh nhưng nguồn thức ăn và nơi ở có hạn, dẫn tới cuộc đấu tranh sinh tồn gay gắt. Các cá thể có biến dị thích nghi sẽ sống sót và sinh sản tốt hơn, tạo nên động lực cho chọn lọc tự nhiên."
    }
  },
  {
    id: 50,
    title: "Cơ chế tiến hóa",
    chapter: "CHƯƠNG XIV. TIẾN HÓA",
    branch: "Sinh học",
    icon: "fa-network-wired",
    summary: "Nguồn nguyên liệu tiến hóa, các nhân tố tiến hóa (đột biến, di nhập gene, CLTN, phiêu bạt di truyền) và sự hình thành loài mới.",
    keyPoints: [
      "Nguyên liệu của tiến hóa gồm nguyên liệu sơ cấp (các đột biến gene, đột biến NST) và nguyên liệu thứ cấp (các biến dị tổ hợp xuất hiện do giao phối ngẫu nhiên).",
      "Các nhân tố tiến hóa làm biến đổi tần số allele và thành phần kiểu gene của quần thể:",
      "1. Đột biến: Tạo ra các allele mới làm phong phú vốn gene nhưng tốc độ biến đổi rất chậm.",
      "2. Dòng gene (Di nhập gene): Sự trao đổi các cá thể hoặc giao tử giữa các quần thể khác nhau.",
      "3. Chọn lọc tự nhiên: Là nhân tố duy nhất quy định chiều hướng và nhịp điệu của tiến hóa, trực tiếp tác động lên kiểu hình qua đó gián tiếp chọn lọc kiểu gene thích nghi.",
      "4. Các yếu tố ngẫu nhiên (Phiêu bạt di truyền / Genetic drift): Thiên tai, dịch bệnh bất ngờ quét sạch một phần lớn quần thể làm thay đổi đột ngột tần số allele không theo hướng thích nghi.",
      "5. Giao phối không ngẫu nhiên: Làm thay đổi thành phần kiểu gene (tăng đồng hợp, giảm dị hợp) nhưng không làm thay đổi tần số allele.",
      "Sự hình thành loài mới: Quá trình phân hóa vốn gene của quần thể gốc dưới tác động của các nhân tố tiến hóa, dẫn tới sự xuất hiện của các cơ chế cách li sinh sản (không thể giao phối hoặc sinh con bất thụ với quần thể gốc) đánh dấu loài mới chính thức hình thành."
    ],
    formula: "\\text{Quần thể ban đầu} \\xrightarrow{\\text{Các nhân tố tiến hóa + Cách li sinh sản}} \\text{Loài mới}",
    experiment: "Nghiên cứu ví dụ về các loài chim sẻ Darwin ở quần đảo Galapagos: Từ 1 loài chim sẻ đất tổ tiên ban đầu di cư từ lục địa ra các đảo có nguồn thức ăn khác nhau, trải qua chọn lọc tự nhiên đã hình thành hơn 13 loài chim sẻ có hình dạng và kích thước mỏ chuyên hóa riêng biệt.",
    quiz: {
      q: "Nhân tố tiến hóa nào sau đây là nhân tố DUY NHẤT định hướng quá trình tiến hóa bằng cách làm tăng tỉ lệ các cá thể mang kiểu gene thích nghi trong quần thể?",
      options: [
        "Đột biến",
        "Di - nhập gene",
        "Chọn lọc tự nhiên",
        "Các yếu tố ngẫu nhiên (thiên tai, dịch bệnh)"
      ],
      ans: 2,
      expl: "Chọn lọc tự nhiên là nhân tố duy nhất có tính định hướng trong quá trình tiến hóa, vì nó trực tiếp đào thải các biến dị có hại và tích lũy các biến dị có lợi thích nghi với môi trường sống xác định."
    }
  },
  {
    id: 51,
    title: "Sự phát sinh và phát triển sự sống trên Trái Đất",
    chapter: "CHƯƠNG XIV. TIẾN HÓA",
    branch: "Sinh học",
    icon: "fa-volcano",
    summary: "Hóa thạch - bằng chứng trực tiếp, các giai đoạn tiến hóa hóa học, tiền sinh học, sinh học và nguồn gốc loài người.",
    keyPoints: [
      "Hóa thạch là di tích của các sinh vật cổ xưa để lại trong các lớp đất đá của vỏ Trái Đất (xương cốt hóa đá, dấu chân, xác côn trùng trong hổ phách, xác voi ma mút trong băng tuyết). Hóa thạch là bằng chứng trực tiếp xác thực nhất về lịch sử tiến hóa của sinh giới.",
      "Lịch sử phát sinh sự sống trải qua 3 giai đoạn lớn:",
      "1. Tiến hóa hóa học: Từ các chất vô cơ đơn giản (CH4, NH3, H2O, H2) trong khí quyển nguyên thủy, dưới tác dụng của sấm sét và bức xạ nhiệt đã tổng hợp nên các chất hữu cơ đơn giản (amino acid, đường đơn), rồi trùng ngưng thành các đại phân tử sinh học (protein, RNA, DNA). Thí nghiệm kinh điển của Miller - Urey (1953) đã chứng minh điều này.",
      "2. Tiến hóa tiền sinh học: Hình thành các giọt giọt coacervate (mầm mống tế bào sơ khai) có màng bao bọc ngăn cách với môi trường ngoài, xuất hiện cơ chế tự nhân đôi của nucleic acid và trao đổi chất.",
      "3. Tiến hóa sinh học: Từ các tế bào nhân sơ nguyên thủy (sinh vật kị khí) -> tiến hóa thành sinh vật quang hợp (giải phóng khí O2 làm thay đổi hoàn toàn khí quyển Trái Đất) -> sinh vật nhân thực -> sinh vật đa bào phong phú phân bố khắp các đại dương và lục địa qua các đại địa chất (Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh).",
      "Nguồn gốc loài người: Loài người (Homo sapiens) thuộc bộ Linh trưởng (Primates), có chung tổ tiên với các loài vượn người hiện đại (như tinh tinh, gorilla). Quá trình vượn người tiến hóa thành người là một quá trình phân nhánh thích nghi lâu dài, gắn liền với tư thế đi thẳng bằng hai chân, giải phóng đôi bàn tay để chế tạo công cụ lao động và sự phát triển vượt bậc của não bộ cùng ngôn ngữ giao tiếp."
    ],
    formula: "\\text{Tiến hóa hóa học} \\to \\text{Tiến hóa tiền sinh học (Coacervate)} \\to \\text{Tiến hóa sinh học (Tế bào sơ khai} \\to \\text{Người)}",
    experiment: "Phân tích cây tiến hóa nguồn gốc loài người và vượn người dựa trên mức độ tương đồng về trình tự DNA (bộ gene người và tinh tinh tương đồng đến hơn 98.5%).",
    quiz: {
      q: "Loại bằng chứng nào sau đây được coi là bằng chứng TRỰC TIẾP và xác thực nhất cho ta biết chính xác sinh vật nào đã từng sinh sống ở các thời đại địa chất trước đây?",
      options: [
        "Bằng chứng giải phẫu so sánh",
        "Bằng chứng tế bào học",
        "Hóa thạch trong các lớp đất đá",
        "Bằng chứng sinh học phân tử"
      ],
      ans: 2,
      expl: "Hóa thạch là di tích hoặc dấu vết của sinh vật cổ xưa được bảo tồn nguyên vẹn trong các tầng địa chất đất đá. Do đó, hóa thạch cung cấp bằng chứng trực tiếp và xác thực nhất về sự tồn tại, hình dạng và niên đại của các sinh vật trong quá khứ."
    }
  }
];
