// scratch/make_hoahoc12_full_dataset.js
const fs = require('fs');

const rawContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_hoa12.md', 'utf8');
const all30Models = require('./hoa12_all_30_models.js');
const interactiveData = require('./hoa12_interactive_data.js');
const svgs = require('./hoa12_svgs.js');
const curriculumSections = require('./hoa12_curriculum_sections.js');

// 8 Chapters metadata
const chapters = [
  { num: 1, title: 'Chương 1. Ester – Lipid', shortTitle: 'Chương 1: Ester – Lipid', pages: 'tr. 5–20', color: 'emerald', lessons: [1, 2, 3], desc: 'Khái niệm, cấu tạo, tính chất, ứng dụng của ester; lipid, chất béo; xà phòng và chất giặt rửa tổng hợp.' },
  { num: 2, title: 'Chương 2. Carbohydrate', shortTitle: 'Chương 2: Carbohydrate', pages: 'tr. 21–40', color: 'teal', lessons: [4, 5, 6, 7], desc: 'Phân loại monosaccharide, disaccharide, polysaccharide; cấu tạo, tính chất của glucose, fructose, saccharose, maltose, tinh bột và cellulose.' },
  { num: 3, title: 'Chương 3. Hợp chất chứa nitrogen', shortTitle: 'Chương 3: Hợp chất chứa N', pages: 'tr. 41–60', color: 'indigo', lessons: [8, 9, 10, 11], desc: 'Amine, amino acid, peptide, protein và enzyme; tính base, liên kết peptide, phản ứng màu biuret và cơ chế xúc tác sinh học.' },
  { num: 4, title: 'Chương 4. Polymer', shortTitle: 'Chương 4: Polymer', pages: 'tr. 61–76', color: 'purple', lessons: [12, 13, 14], desc: 'Khái niệm, danh pháp, cấu trúc mạch, tính chất của polymer; phản ứng trùng hợp, trùng ngưng; chất dẻo, tơ sợi, cao su và keo dán.' },
  { num: 5, title: 'Chương 5. Pin điện và điện phân', shortTitle: 'Chương 5: Pin & Điện phân', pages: 'tr. 77–96', color: 'cyan', lessons: [15, 16, 17], desc: 'Cặp oxi hóa – khử, thế điện cực chuẩn, pin Galvani (Daniell); bình điện phân, định luật Faraday và công nghệ mạ điện.' },
  { num: 6, title: 'Chương 6. Đại cương về kim loại', shortTitle: 'Chương 6: Đại cương kim loại', pages: 'tr. 97–120', color: 'amber', lessons: [18, 19, 20, 21, 22, 23], desc: 'Mạng tinh thể kim loại, biển electron tự do, tính chất vật lí và hóa học; phương pháp nhiệt luyện, thủy luyện, điện phân; hợp kim và ăn mòn kim loại.' },
  { num: 7, title: 'Chương 7. Nguyên tố nhóm IA và nhóm IIA', shortTitle: 'Chương 7: Nhóm IA & IIA', pages: 'tr. 121–138', color: 'rose', lessons: [24, 25, 26], desc: 'Kim loại kiềm và kiềm thổ; tính khử mạnh, phản ứng với nước, chu trình vôi, làm mềm nước cứng và màu ngọn lửa đặc trưng.' },
  { num: 8, title: 'Chương 8. Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất', shortTitle: 'Chương 8: Kim loại chuyển tiếp & Phức chất', pages: 'tr. 139–158', color: 'blue', lessons: [27, 28, 29, 30], desc: 'Đặc điểm phân lớp 3d, các số oxi hóa biến đổi; cấu tạo phức chất, liên kết phối trí cho – nhận, danh pháp, đồng phân và ứng dụng sinh học (Hemoglobin).' }
];

// Lesson pages reference
const lessonPages = {
  1: 'tr. 5–10', 2: 'tr. 11–16', 3: 'tr. 17–20',
  4: 'tr. 21–26', 5: 'tr. 27–31', 6: 'tr. 32–36', 7: 'tr. 37–40',
  8: 'tr. 41–46', 9: 'tr. 47–51', 10: 'tr. 52–56', 11: 'tr. 57–60',
  12: 'tr. 61–65', 13: 'tr. 66–71', 14: 'tr. 72–76',
  15: 'tr. 77–83', 16: 'tr. 84–90', 17: 'tr. 91–96',
  18: 'tr. 97–100', 19: 'tr. 101–105', 20: 'tr. 106–109', 21: 'tr. 110–113', 22: 'tr. 114–117', 23: 'tr. 118–120',
  24: 'tr. 121–126', 25: 'tr. 127–133', 26: 'tr. 134–138',
  27: 'tr. 139–144', 28: 'tr. 145–149', 29: 'tr. 150–154', 30: 'tr. 155–158'
};

// Key formulas for each of the 30 lessons
const lessonKeyFormulas = {
  1: [
    'Công thức chung ester đơn chức no, hở: <strong>CₙH₂ₙO₂ (n ≥ 2)</strong>  •  Dạng RCOOR′',
    'Thủy phân acid (thuận nghịch): <strong>RCOOR′ + H₂O ⇌ RCOOH + R′OH</strong> (H₂SO₄ đ, t°)',
    'Thủy phân kiềm (xà phòng hóa): <strong>RCOOR′ + NaOH → RCOONa + R′OH</strong>',
    'Chất béo (Triglyceride): <strong>(RCOO)₃C₃H₅ + 3NaOH → C₃H₅(OH)₃ + 3RCOONa</strong>'
  ],
  2: [
    'Xà phòng: <strong>Muối sodium hoặc potassium của acid béo</strong> (C₁₇H₃₅COONa, C₁₅H₃₁COONa)',
    'Chất giặt rửa tổng hợp: <strong>R–OSO₃Na</strong> (alkyl sulfate) hoặc <strong>R–C₆H₄–SO₃Na</strong> (LAS)',
    'Cơ chế tẩy rửa: <strong>Đuôi kị nước</strong> cắm vào vết bẩn, <strong>đầu ưa nước</strong> quay ra nước tạo hạt micelle',
    'Tác động của nước cứng: <strong>2RCOO⁻ + Ca²⁺/Mg²⁺ → (RCOO)₂Ca↓</strong> (kết tủa làm mất bọt xà phòng)'
  ],
  3: [
    'Chỉ số xà phòng hóa: số mg KOH để xà phòng hóa 1 gam chất béo (gồm triglyceride và acid béo tự do)',
    'Hydrogen hóa chất béo lỏng: <strong>(C₁₇H₃₃COO)₃C₃H₅ + 3H₂ → (C₁₇H₃₅COO)₃C₃H₅</strong> (Ni, t°, p)',
    'Phân loại chất béo: No (mỡ động vật, thể rắn) vs Không no (dầu thực vật, thể lỏng)',
    'Bảo quản chất béo: Tránh ánh sáng, nhiệt độ cao và không khí ẩm để ngăn chặn ôi thiu'
  ],
  4: [
    'Công thức phân tử Glucose & Fructose: <strong>C₆H₁₂O₆ (M = 180)</strong>',
    'Tráng bạc Glucose: <strong>CH₂OH[CHOH]₄CHO + 2[Ag(NH₃)₂]OH → CH₂OH[CHOH]₄COONH₄ + 2Ag↓ + 3NH₃ + H₂O</strong>',
    'Lên men rượu: <strong>C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂↑</strong> (enzyme zymase, 30–35°C)',
    'Khử Cu(OH)₂/NaOH: Tạo kết tủa đỏ gạch <strong>Cu₂O↓</strong> khi đun nóng nhẹ'
  ],
  5: [
    'Công thức phân tử Saccharose & Maltose: <strong>C₁₂H₂₂O₁₁ (M = 342)</strong>',
    'Thủy phân Saccharose: <strong>C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose)</strong> (H⁺, t°)',
    'Thủy phân Maltose: <strong>C₁₂H₂₂O₁₁ + H₂O → 2C₆H₁₂O₆ (Glucose)</strong> (enzyme maltase)',
    'Tính khử: Saccharose <strong>không tráng bạc</strong>; Maltose <strong>có tráng bạc</strong> (do có nhóm –OH hemiacetal tự do)'
  ],
  6: [
    'Công thức chung Polysaccharide: <strong>(C₆H₁₀O₅)ₙ</strong> (M lớn)',
    'Thủy phân Tinh bột & Cellulose: <strong>(C₆H₁₀O₅)ₙ + nH₂O → nC₆H₁₂O₆ (Glucose)</strong> (H⁺, t°)',
    'Phản ứng màu Amylose với Iodine: <strong>Tạo hợp chất bọc màu xanh tím đặc trưng</strong>',
    'Điều chế tơ thuốc súng: <strong>[C₆H₇O₂(OH)₃]ₙ + 3nHNO₃ → [C₆H₇O₂(ONO₂)₃]ₙ + 3nH₂O</strong> (H₂SO₄ đ, t°)'
  ],
  7: [
    'Phương trình quang hợp tổng hợp tinh bột: <strong>6nCO₂ + 5nH₂O → (C₆H₁₀O₅)ₙ + 6nO₂↑</strong>',
    'Nhận biết Glucose vs Fructose: Dùng <strong>nước bromine (Br₂)</strong> (Glucose làm mất màu, Fructose không)',
    'Phản ứng hòa tan Cu(OH)₂: Dung dịch màu xanh lam thẫm ở nhiệt độ thường (chứa nhiều nhóm –OH kề nhau)',
    'Hiệu suất chuỗi chuyển hóa: <strong>m_thực = m_lí thuyết × H%</strong>'
  ],
  8: [
    'Công thức chung amine no, đơn chức, mạch hở: <strong>CₙH₂ₙ₊₃N (n ≥ 1)</strong>',
    'Tính base trong nước: <strong>R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻</strong> (quỳ tím chuyển xanh)',
    'So sánh tính base: <strong>Aliphatic amine bậc 2 &gt; bậc 1 &gt; NH₃ &gt; Aniline (C₆H₅NH₂)</strong>',
    'Tạo kết tủa trắng với Aniline: <strong>C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂↓ (trắng) + 3HBr</strong>'
  ],
  9: [
    'Công thức amino acid no, 1 nhóm –NH₂ và 1 nhóm –COOH: <strong>H₂N–CₙH₂ₙ–COOH</strong>',
    'Cấu trúc ion lưỡng cực: <strong>H₃N⁺–CH(R)–COO⁻</strong> (tinh thể rắn, t°nc cao, dễ tan trong nước)',
    'Hình thành liên kết peptide: <strong>–COOH + H₂N– → –CO–NH– + H₂O</strong> (liên kết amide)',
    'Khối lượng phân tử peptide: <strong>M_peptide = ∑M_amino_acid − 18×(số liên kết peptide)</strong>'
  ],
  10: [
    'Phản ứng màu Biuret: <strong>Peptide (từ tripeptide trở lên) + Cu(OH)₂/NaOH → phức màu tím</strong>',
    'Đông tụ Protein: Dưới tác dụng của <strong>nhiệt độ, acid, base hoặc ion kim loại nặng</strong>',
    'Xúc tác Enzyme: Cơ chế <strong>khóa và chìa (Lock & Key)</strong>, tính chọn lọc rất cao, giảm năng lượng hoạt hóa',
    'Phản ứng thủy phân protein: <strong>Protein + nH₂O → các α-amino acid</strong> (enzyme protease)'
  ],
  11: [
    'Điểm đẳng điện pI: pH tại đó amino acid tồn tại dạng ion lưỡng cực nhiều nhất và không dịch chuyển trong điện trường',
    'Phản ứng với HNO₂ nhận biết amine bậc 1: <strong>RNH₂ + HNO₂ → ROH + N₂↑ + H₂O</strong>',
    'Độ tan của muối amoni: <strong>RNH₃Cl</strong> dễ tan trong nước hơn amine tự do RNH₂',
    'Phản ứng màu xanthoproteic: Protein có gốc thơm (–C₆H₅) + HNO₃ đ → màu vàng'
  ],
  12: [
    'Hệ số trùng hợp: <strong>n = M_polymer / M_monomer</strong>',
    'Điều kiện trùng hợp: Monomer phải có <strong>liên kết đôi (C=C)</strong> hoặc vòng kém bền (như caprolactam)',
    'Điều kiện trùng ngưng: Monomer phải có <strong>ít nhất 2 nhóm chức hoạt động</strong> (–OH, –COOH, –NH₂...)',
    'Cấu trúc mạch: Mạch thẳng (PE, PVC), Phân nhánh (Amylopectin), Mạng không gian (Cao su lưu hóa, nhựa Bakelite)'
  ],
  13: [
    'Trùng hợp PE: <strong>nCH₂=CH₂ → (–CH₂–CH₂–)ₙ</strong>  •  Trùng hợp PVC: <strong>nCH₂=CHCl → (–CH₂–CHCl–)ₙ</strong>',
    'Tơ Nylon-6,6: <strong>nH₂N(CH₂)₆NH₂ + nHOOC(CH₂)₄COOH → [–NH(CH₂)₆NHCO(CH₂)₄CO–]ₙ + 2nH₂O</strong>',
    'Tơ Nitron (Olon): <strong>nCH₂=CH–CN → (–CH₂–CH(CN)–)ₙ</strong> (giữ nhiệt tốt, dệt len)',
    'Lưu hóa cao su: Đun nóng cao su sống với lưu huỳnh ở 130–150°C tạo cầu nối <strong>–S–S–</strong>'
  ],
  14: [
    'Nhựa nhiệt dẻo: Nóng chảy khi đun nóng, hóa rắn khi để nguội, tái chế được (PE, PP, PS, PVC)',
    'Nhựa nhiệt rắn: Không nóng chảy khi đun nóng mà bị phân hủy (nhựa bakelite mạng không gian)',
    'Tơ nhân tạo (bán tổng hợp): Xuất phát từ polymer thiên nhiên qua chế hóa hóa học (Tơ visco, Tơ axetat)',
    'Bảo vệ môi trường: Thu gom, phân loại và tái chế rác thải nhựa để giảm thiểu vi nhựa'
  ],
  15: [
    'Thế điện cực chuẩn: <strong>E°(Mⁿ⁺/M)</strong> đo ở 25°C, nồng độ ion 1M, áp suất 1 bar so với điện cực hydro chuẩn (0,00 V)',
    'Sức điện động chuẩn của pin: <strong>E°_pin = E°_cathode (dương) − E°_anode (âm)</strong>',
    'Pin Galvani Daniell (Zn–Cu): <strong>E°_pin = 0,34 − (−0,76) = 1,10 V</strong>',
    'Chiều dòng điện: Dây dẫn ngoài dẫn electron từ <strong>anot (−) sang catot (+)</strong>'
  ],
  16: [
    'Định luật Faraday: <strong>m = (A × I × t) / (n × F)</strong> (với F = 96500 C/mol)',
    'Điện phân NaCl nóng chảy: <strong>2NaCl → 2Na (catot) + Cl₂↑ (anot)</strong>',
    'Điện phân dd NaCl có màng ngăn: <strong>2NaCl + 2H₂O → 2NaOH + H₂↑ (catot) + Cl₂↑ (anot)</strong>',
    'Điện phân dd NaCl không màng ngăn: <strong>Cl₂ + 2NaOH → NaCl + NaClO + H₂O</strong> (tạo nước Javel)'
  ],
  17: [
    'Thứ tự khử tại Catot (−): Cation có <strong>E° lớn hơn bị khử trước</strong> (Ag⁺ &gt; Fe³⁺ &gt; Cu²⁺ &gt; H⁺ &gt; Pb²⁺ &gt; Fe²⁺...)',
    'Cation kim loại mạnh (Al³⁺, Mg²⁺, Na⁺, K⁺) <strong>không bị khử trong dung dịch nước</strong> (nước bị khử thay: 2H₂O + 2e → H₂ + 2OH⁻)',
    'Thứ tự oxi hóa tại Anot (+): Anion gốc không chứa oxi <strong>bị oxi hóa trước</strong> (S²⁻ &gt; I⁻ &gt; Br⁻ &gt; Cl⁻ &gt; H₂O &gt; NO₃⁻, SO₄²⁻)',
    'Ứng dụng mạ điện: Vật cần mạ gắn vào <strong>catot (−)</strong>, kim loại mạ gắn vào <strong>anot (+)</strong>'
  ],
  18: [
    'Liên kết kim loại: <strong>Lực hút tĩnh điện giữa các cation kim loại và biển electron tự do</strong>',
    '4 tính chất vật lí chung do biển e tự do quyết định: <strong>Tính dẻo, Dẫn điện, Dẫn nhiệt, Ánh kim</strong>',
    'Kim loại dẫn điện tốt nhất: <strong>Ag &gt; Cu &gt; Au &gt; Al &gt; Fe</strong>',
    'Độ cứng: Cr cứng nhất (cắt được kính, độ cứng 9/10 Mohs); Cs mềm nhất (cắt bằng dao)'
  ],
  19: [
    'Tính chất hóa học đặc trưng của kim loại: <strong>Tính khử (dễ nhường electron: M → Mⁿ⁺ + ne)</strong>',
    'Tác dụng với acid loại 1 (HCl, H₂SO₄ loãng): Kim loại <strong>đứng trước H</strong> giải phóng khí <strong>H₂↑</strong>',
    'Tác dụng với HNO₃ / H₂SO₄ đặc nóng: Oxi hóa kim loại lên số oxi hóa cao nhất, sinh sản phẩm khử (NO₂, NO, SO₂...)',
    'Hiện tượng thụ động hóa: <strong>Fe, Al, Cr bị thụ động hóa</strong> trong HNO₃ đặc nguội và H₂SO₄ đặc nguội'
  ],
  20: [
    'Nguyên tắc tách kim loại: <strong>Khử cation kim loại thành nguyên tử: Mⁿ⁺ + ne → M</strong>',
    'Phương pháp nhiệt luyện: Dùng chất khử mạnh (CO, C, H₂, Al) khử oxit kim loại <strong>sau Al</strong> (Fe, Cu, Zn, Pb)',
    'Phương pháp thủy luyện: Dùng kim loại mạnh đẩy ion kim loại yếu hơn ra khỏi dung dịch muối: <strong>Fe + Cu²⁺ → Fe²⁺ + Cu↓</strong>',
    'Phương pháp điện phân: Điện phân nóng chảy cho kim loại <strong>từ Al trở về trước</strong> (K, Na, Ca, Mg, Al)'
  ],
  21: [
    'Hợp kim: Vật liệu kim loại chứa hỗn hợp kim loại cơ bản với kim loại hoặc phi kim khác',
    'Thép: Hợp kim của <strong>Fe với Carbon (C &lt; 2%)</strong> cùng một số nguyên tố Si, Mn, Cr, Ni...',
    'Gang: Hợp kim của <strong>Fe với Carbon (2% ≤ C ≤ 5%)</strong>, giòn và cứng hơn thép',
    'Tính chất hợp kim: Thường có <strong>độ cứng cao hơn, nhiệt độ nóng chảy thấp hơn</strong> kim loại thành phần'
  ],
  22: [
    'Ăn mòn kim loại: Sự phá hủy kim loại hoặc hợp kim do tác dụng của môi trường xung quanh',
    'Ăn mòn hóa học: Quá trình oxi hóa – khử trực tiếp, electron truyền trực tiếp cho môi trường, <strong>không phát sinh dòng điện</strong>',
    'Ăn mòn điện hóa: Phát sinh dòng điện khi có đủ 3 điều kiện: <strong>2 điện cực khác bản chất, tiếp xúc nhau và cùng ngập trong dung dịch điện li</strong>',
    'Cực âm (anot): Kim loại có tính khử mạnh hơn bị oxi hóa: <strong>Fe → Fe²⁺ + 2e⁻</strong>'
  ],
  23: [
    'Bảo vệ bề mặt: Sơn, mạ, bôi dầu mỡ, tráng men để ngăn kim loại tiếp xúc với môi trường',
    'Phương pháp điện hóa (bảo vệ catot): Gắn khối kim loại có tính khử mạnh hơn (như <strong>kẽm Zn</strong>) vào vật cần bảo vệ (thép)',
    'Chế tạo hợp kim chống ăn mòn: Thêm Cr, Ni vào thép để tạo <strong>thép không gỉ (Inox)</strong>',
    'Hạn chế ăn mòn điện hóa: Tránh để hai kim loại khác nhau tiếp xúc trực tiếp trong môi trường ẩm'
  ],
  24: [
    'Cấu hình electron hóa trị kim loại kiềm: <strong>ns¹</strong> (năng lượng ion hóa I₁ thấp nhất)',
    'Phản ứng mãnh liệt với nước: <strong>2M + 2H₂O → 2MOH + H₂↑</strong> (tỏa nhiệt lớn)',
    'Nhiệt phân muối kiềm: <strong>2NaHCO₃ → Na₂CO₃ + CO₂↑ + H₂O</strong> (t°); Na₂CO₃ bền nhiệt không bị phân hủy',
    'Bảo quản kim loại kiềm: Ngâm chìm hoàn toàn trong <strong>dầu hỏa</strong> hoặc trong khí hiếm'
  ],
  25: [
    'Cấu hình electron hóa trị kim loại kiềm thổ: <strong>ns²</strong> (tạo cation M²⁺)',
    'Nhiệt phân đá vôi: <strong>CaCO₃ ⇌ CaO + CO₂↑</strong> (đun ở 900–1000°C)',
    'Hòa tan thạch nhũ trong hang động: <strong>CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂</strong>',
    'Làm mềm nước cứng tạm thời: <strong>Đun sôi</strong> hoặc dùng <strong>Ca(OH)₂ vừa đủ</strong> hoặc dùng <strong>Na₂CO₃ / Na₃PO₄</strong>'
  ],
  26: [
    'Màu ngọn lửa kim loại kiềm & kiềm thổ: <strong>Na (vàng), K (tím), Ca (đỏ cam), Ba (lục vàng), Sr (đỏ son)</strong>',
    'Độ tan của hydroxide nhóm IIA: <strong>Tăng dần từ Mg(OH)₂ đến Ba(OH)₂</strong>',
    'Độ tan của sulfate nhóm IIA: <strong>Giảm dần từ MgSO₄ đến BaSO₄</strong> (BaSO₄ kết tủa trắng không tan trong acid)',
    'Muối thạch cao: Thạch cao sống (CaSO₄·2H₂O), Thạch cao nung (CaSO₄·H₂O đúc tượng, bó bột), Thạch cao khan (CaSO₄)'
  ],
  27: [
    'Cấu hình electron kim loại chuyển tiếp dãy 1: <strong>[Ar] 3d¹⁻¹⁰ 4s¹⁻²</strong> (từ Sc đến Cu)',
    'Trường hợp bán bão hòa và bão hòa bền: <strong>Cr ([Ar]3d⁵4s¹)</strong> và <strong>Cu ([Ar]3d¹⁰4s¹)</strong>',
    'Số oxi hóa đa dạng: Fe (+2, +3), Cr (+2, +3, +6), Mn (+2, +3, +4, +6, +7)',
    'Ion kim loại chuyển tiếp có màu sắc rực rỡ do <strong>sự dịch chuyển electron d–d</strong> hấp thụ ánh sáng'
  ],
  28: [
    'Thành phần phức chất: <strong>[Nguyên tử/Ion trung tâm + Phối tử (Ligand)]</strong> và Cầu ngoại',
    'Liên kết phối trí (cho – nhận): Phối tử dùng <strong>cặp electron tự do</strong> điền vào orbital trống của nguyên tử trung tâm',
    'Số phối trí phổ biến: <strong>2 (đường thẳng), 4 (tứ diện hoặc vuông phẳng), 6 (bát diện)</strong>',
    'Điện tích ion phức: <strong>q_phức = q_trung tâm + ∑q_phối tử</strong>'
  ],
  29: [
    'Phản ứng thế phối tử (Ligand Substitution): <strong>[Cu(H₂O)₄]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄]²⁺ + 4H₂O</strong> (xanh nhạt → xanh thẫm)',
    'Tạo phức tan của kết tủa: <strong>AgCl↓ + 2NH₃ → [Ag(NH₃)₂]⁺ + Cl⁻</strong> (hòa tan kết tủa AgCl trắng)',
    'Hằng số bền phức chất β: β càng lớn thì phức chất càng bền vững trong dung dịch',
    'Phức chất vòng càng (Chelate): Phối tử đa càng (như EDTA, oxalate) tạo phức chất đặc biệt bền vững'
  ],
  30: [
    'Hemoglobin trong máu: Chứa ion trung tâm <strong>Fe²⁺</strong> liên kết phối trí với vòng Porphyrin gắn thuận nghịch O₂',
    'Ngộ độc khí CO: CO tạo liên kết phối trí với Fe²⁺ trong Hemoglobin <strong>bền hơn O₂ gấp 200 lần</strong>',
    'Diệp lục (Chlorophyll): Phức chất có ion trung tâm là <strong>Mg²⁺</strong> hấp thụ ánh sáng mặt trời để quang hợp',
    'Vitamin B12: Phức chất tự nhiên chứa ion trung tâm <strong>Co³⁺</strong> cần thiết cho hệ thần kinh và tạo máu'
  ]
};

// Experiment and safety notes for each of the 30 lessons
const lessonExperiments = {
  1: {
    title: 'Thí nghiệm phản ứng Xà phòng hóa Ethyl Acetate & Mùi hương Ester',
    detail: 'Khi đun nóng nhẹ hỗn hợp Ethyl acetate với dung dịch NaOH 10%, sau vài phút mùi chuối/táo chín của ester biến mất, dung dịch trở nên đồng nhất chứng tỏ ester đã thủy phân hoàn toàn thành muối sodium acetate và ethanol tan tốt trong nước.'
  },
  2: {
    title: 'Thí nghiệm sản xuất Xà phòng trong phòng thí nghiệm & Tách muối bằng NaCl',
    detail: 'Đun sôi dầu ăn với NaOH trong 30 phút, sau đó rót dung dịch NaCl bão hòa vào hỗn hợp và khuấy nhẹ. Muối xà phòng giảm độ tan mạnh trong môi trường ion Na⁺ cao (hiệu ứng ion chung) và nhẹ hơn dung dịch nên nổi lên trên bề mặt thành lớp màng trắng ngà.'
  },
  3: {
    title: 'Thí nghiệm nhận biết độ chua (Chỉ số acid) của Dầu mỡ bị ôi thiu',
    detail: 'Dầu mỡ để lâu bị oxi hóa tạo các aldehyde độc hại và acid béo tự do. Chuẩn độ bằng dung dịch KOH với chỉ thị phenolphthalein cho phép xác định độ ôi thiu của mẫu dầu chiên rán.'
  },
  4: {
    title: 'Thí nghiệm phản ứng Tráng Bạc của Glucose với Thuốc thử Tollens',
    detail: 'Rửa thật sạch ống nghiệm bằng NaOH rồi tráng nước cất. Cho 1 mL AgNO₃ 1% vào ống nghiệm, nhỏ từng giọt NH₃ đến khi kết tủa vừa tan hết tạo [Ag(NH₃)₂]OH. Thêm 1 mL glucose 10%, ngâm ống nghiệm trong cốc nước nóng 60–70°C; sau 3–5 phút xuất hiện lớp gương bạc sáng bóng bám đều vào thành ống nghiệm.'
  },
  5: {
    title: 'Thí nghiệm phân biệt Saccharose trước và sau Thủy Phân',
    detail: 'Dung dịch Saccharose nguyên chất không có phản ứng tráng bạc. Khi đun sôi nhẹ dung dịch Saccharose với vài giọt H₂SO₄ loãng trong 5 phút, sau đó trung hòa bằng kiềm NaOH rồi cho tác dụng với thuốc thử Tollens thì phản ứng tráng bạc xảy ra mãnh liệt do đường nghịch đảo (glucose + fructose) tạo thành.'
  },
  6: {
    title: 'Thí nghiệm phản ứng Hồ Tinh Bột với Dung dịch Iodine (I₂/KI)',
    detail: 'Nhỏ 1 giọt dung dịch Iodine loãng vào ống nghiệm chứa hồ tinh bột, dung dịch lập tức chuyển sang màu xanh tím đặc trưng. Đun nóng nhẹ trên ngọn lửa đèn cồn, màu xanh tím biến mất (do mạch xoắn duỗi ra nhả I₂); để nguội màu xanh tím lại xuất hiện trở lại.'
  },
  7: {
    title: 'Thí nghiệm phân biệt Glucose và Fructose bằng Nước Bromine',
    detail: 'Cho nước bromine màu vàng cam vào hai ống nghiệm chứa glucose và fructose. Ống chứa glucose làm nước bromine mất màu nhanh chóng vì nhóm aldehyde –CHO bị oxi hóa thành –COOH, trong khi ống chứa fructose không làm mất màu nước bromine.'
  },
  8: {
    title: 'Thí nghiệm Aniline tác dụng với Nước Bromine & Tính Base của Amine',
    detail: 'Aniline ít tan trong nước tạo vẩn đục. Nhỏ vài giọt nước bromine vào ống nghiệm chứa aniline, lập tức xuất hiện kết tủa trắng của 2,4,6-tribromoaniline và nước bromine mất màu; khi thêm dung dịch HCl vào aniline thì dung dịch trở nên trong suốt do tạo muối phenylammonium chloride tan.'
  },
  9: {
    title: 'Thí nghiệm tính lưỡng tính của Glycine với Chỉ thị và Acid/Base',
    detail: 'Nhỏ quỳ tím vào dung dịch Glycine, màu quỳ tím không đổi (do có 1 nhóm –NH₂ và 1 nhóm –COOH cân bằng điện tích). Glycine phản ứng được với cả dung dịch HCl (tính base) và dung dịch NaOH (tính acid), chứng minh bản chất lưỡng tính.'
  },
  10: {
    title: 'Thí nghiệm phản ứng màu Biuret và Sự đông tụ của Lòng trắng trứng',
    detail: 'Cho 1 mL dung dịch lòng trắng trứng (albumin) vào ống nghiệm, thêm 1 mL NaOH 30% và 1 giọt CuSO₄ 2%. Lắc nhẹ, xuất hiện màu tím hoặc tím xanh đặc trưng của phức chất Biuret. Khi đun nóng lòng trắng trứng, protein bị đông tụ vón cục lại.'
  },
  11: {
    title: 'Thí nghiệm phân biệt Lụa Tơ Tằm tự nhiên và Tơ Nhân tạo bằng Ngọn Lửa',
    detail: 'Đốt sợi tơ tằm tự nhiên (bản chất protein) thấy cháy có mùi khét như tóc cháy và tro dễ bóp vụn; đốt sợi tơ tổng hợp (như nylon) thấy co rút vón cục cứng và có mùi hắc.'
  },
  12: {
    title: 'Thí nghiệm nhiệt phân và thử tính đàn hồi của Màng Nhựa PE',
    detail: 'Đốt màng mỏng PE trên ngọn lửa, nhựa nóng chảy nhỏ giọt thành ngọn lửa xanh nhạt, có mùi sáp nến (paraffin) và không có khói đen, chứng tỏ cấu trúc polymer mạch thẳng hydrocarbon no.'
  },
  13: {
    title: 'Thí nghiệm kéo sợi Tơ Nylon-6,6 tại mặt phân cách hai pha',
    detail: 'Rót từ từ dung dịch adipoyl chloride trong hexane lên trên bề mặt dung dịch hexamethylenediamine trong nước. Tại mặt tiếp xúc giữa hai pha không trộn lẫn, màng mỏng polyamide hình thành ngay lập tức; dùng kẹp gắp màng mỏng và kéo liên tục thành sợi tơ nylon dài óng mượt.'
  },
  14: {
    title: 'Thí nghiệm phân biệt Nhựa Nhiệt Dẻo và Nhựa Nhiệt Rắn (Bakelite)',
    detail: 'Đun nóng mẩu PE thấy mềm và nóng chảy ra (nhựa nhiệt dẻo); đun nóng mẩu công tắc điện bakelite thấy không bị nóng chảy mà chỉ bị cháy đen ở nhiệt độ rất cao (nhựa nhiệt rắn mạng không gian).'
  },
  15: {
    title: 'Thí nghiệm lắp ráp Pin điện hóa Daniell (Zn – Cu) và đo Suất điện động',
    detail: 'Nhúng thanh Zn vào cốc chứa ZnSO₄ 1M, nhúng thanh Cu vào cốc chứa CuSO₄ 1M. Nối hai cốc bằng cầu muối chứa agar-KCl. Nối hai thanh kim loại qua vôn kế điện tử; kim vôn kế chỉ đúng 1,10 V với cực dương là thanh Cu và cực âm là thanh Zn.'
  },
  16: {
    title: 'Thí nghiệm Điện phân dung dịch CuSO₄ với điện cực than chì (Graphite)',
    detail: 'Tại catot (−), ion Cu²⁺ nhận e bị khử tạo lớp đồng màu đỏ cam bám lên thanh than chì. Tại anot (+), nước bị oxi hóa sủi bọt khí không màu O₂ và dung dịch chuyển dần sang môi trường acid H₂SO₄ làm quỳ tím hóa đỏ.'
  },
  17: {
    title: 'Thí nghiệm Mạ Đồng (Electroplating) lên chìa khóa sắt',
    detail: 'Nối chiếc chìa khóa sắt đã đánh bóng với cực âm (catot), thanh đồng nguyên chất nối với cực dương (anot) ngâm trong dung dịch CuSO₄. Sau 10 phút điện phân với dòng điện nhỏ, toàn bộ chìa khóa được phủ một lớp đồng đỏ bóng mịn, bám dính chắc chắn.'
  },
  18: {
    title: 'Thí nghiệm so sánh Tính Dẻo và Tính Dẫn Điện của Nhôm và Đồng',
    detail: 'Dùng búa đập lá nhôm mỏng thấy nhôm dát mỏng được thành màng bọc thực phẩm dày chỉ vài micromet mà không bị rách vụn; nối đoạn dây đồng vào mạch điện có bóng đèn pin, bóng đèn phát sáng rực rỡ chứng minh khả năng dẫn điện xuất sắc.'
  },
  19: {
    title: 'Thí nghiệm Kim loại tác dụng với Dung dịch Acid sinh khí Hydro',
    detail: 'Cho các mẩu kim loại Mg, Zn, Fe, Cu vào 4 ống nghiệm chứa dung dịch HCl 1M: Ống Mg sủi bọt khí H₂ rất mạnh và tỏa nhiệt; ống Zn sủi bọt khí nhanh; ống Fe sủi bọt khí chậm dần và dung dịch có màu xanh nhạt; ống Cu hoàn toàn không có hiện tượng gì.'
  },
  20: {
    title: 'Thí nghiệm Phản ứng Nhiệt Nhôm (Alumino-thermic Reaction)',
    detail: 'Trộn bột nhôm Al với bột oxit sắt Fe₂O₃ (hỗn hợp tecmit), dùng dây magie làm ngòi dẫn cháy. Phản ứng xảy ra mãnh liệt tỏa nhiệt trên 2500°C làm sắt nóng chảy thành khối sáng rực, ứng dụng hàn nhanh đường ray xe lửa tại chỗ.'
  },
  21: {
    title: 'Thí nghiệm so sánh Độ Cứng và Độ Bền Ăn Mòn của Thép Inox và Sắt Thường',
    detail: 'Dùng lưỡi thép rạch lên thanh sắt nguyên chất thấy sắt bị xước dễ dàng; ngâm đinh sắt thường và thìa inox vào dung dịch nước muối, sau 24 giờ đinh sắt bị rỉ sét màu nâu đỏ còn thìa inox vẫn sáng bóng nguyên vẹn.'
  },
  22: {
    title: 'Thí nghiệm mô phỏng Ăn mòn điện hóa: Đinh sắt quấn dây đồng trong nước muối',
    detail: 'Ống 1: Đinh sắt quấn dây đồng ngâm trong dung dịch NaCl có nhỏ vài giọt K₃[Fe(CN)₆] và phenolphthalein. Xuất hiện vệt màu xanh đậm gần đinh sắt (ion Fe²⁺ bị oxi hóa nhanh) và vệt hồng quanh dây đồng (tạo OH⁻), chứng minh đinh sắt bị ăn mòn điện hóa nhanh gấp nhiều lần ống đối chứng.'
  },
  23: {
    title: 'Thí nghiệm Bảo vệ Kim loại bằng Phương pháp Điện cực Hy Sinh (Zinc Anode)',
    detail: 'Lấy hai đinh sắt sạch: Đinh 1 để trần, Đinh 2 quấn một mẩu dây kẽm Zn. Cùng ngâm vào dung dịch nước muối có chất chỉ thị ion Fe²⁺. Sau 2 giờ, đinh 1 xuất hiện gỉ sắt và dung dịch xanh đậm; đinh 2 hoàn toàn không có gỉ sắt do kẽm Zn đã nhường e hy sinh bảo vệ sắt.'
  },
  24: {
    title: 'Thí nghiệm Cắt mẩu Natri và phản ứng với Nước trong chậu thủy tinh',
    detail: 'Dùng kẹp gắp mẩu Natri thấm khô dầu bằng giấy lọc, dùng dao cắt một mẩu nhỏ bằng hạt đậu xanh thấy vết cắt có ánh kim sáng loáng nhưng mờ đi ngay trong không khí. Thả vào chậu nước có pha phenolphthalein: Mẩu Na vo tròn thành giọt chạy tròn trên mặt nước, xèo xèo sủi bọt khí H₂ và dung dịch chuyển màu hồng tím.'
  },
  25: {
    title: 'Thí nghiệm Tôi Vôi (CaO + H₂O) và Khảo sát độ cứng của Nước',
    detail: 'Cho mẩu vôi sống CaO vào cốc nước, sau vài giây nước bắt đầu sôi sùng sục, bốc hơi nước nghi ngút và tỏa nhiệt cực lớn làm mẩu vôi rã thành bột nhão vôi tôi Ca(OH)₂. Đun sôi mẫu nước cứng tạm thời thấy xuất hiện lớp cặn trắng vôi CaCO₃ ở đáy ống nghiệm.'
  },
  26: {
    title: 'Thí nghiệm Đốt Ngọn Lửa nhận biết Kim loại Kiềm và Kiềm Thổ',
    detail: 'Dùng dây platin nhúng vào dung dịch HCl đặc rồi nung trên ngọn lửa đèn khí để làm sạch. Nhúng dây vào dung dịch muối NaCl rồi đưa vào ngọn lửa, ngọn lửa nhuốm màu vàng tươi chói lọi; thử với dung dịch KCl ngọn lửa có màu tím nhạt; thử với CaCl₂ cho màu đỏ cam rực rỡ.'
  },
  27: {
    title: 'Thí nghiệm Biến đổi số Oxi hóa của Crom (Cr³⁺ ⇌ Cr₂O₇²⁻ ⇌ CrO₄²⁻)',
    detail: 'Dung dịch K₂Cr₂O₇ có màu da cam đặc trưng trong môi trường acid. Khi nhỏ từng giọt dung dịch kiềm NaOH vào, màu da cam chuyển ngay sang màu vàng tươi của ion chromate (CrO₄²⁻); khi nhỏ lại acid H₂SO₄ màu vàng lại chuyển ngược thành màu da cam.'
  },
  28: {
    title: 'Thí nghiệm tạo Phức chất Tetraamminecopper(II) màu Xanh Thẫm',
    detail: 'Cho 1 mL dung dịch CuSO₄ 5% màu xanh lam nhạt vào ống nghiệm, nhỏ từng giọt dung dịch NH₃ xuất hiện kết tủa xanh nhạt Cu(OH)₂. Tiếp tục nhỏ dư dung dịch NH₃ kết tủa tan hoàn toàn tạo dung dịch phức chất [Cu(NH₃)₄]²⁺ có màu xanh lam thẫm (deep blue) tuyệt đẹp.'
  },
  29: {
    title: 'Thí nghiệm Hòa tan Kết tủa Bạc Chloride bằng Dung dịch Ammonia',
    detail: 'Nhỏ dung dịch NaCl vào dung dịch AgNO₃ tạo kết tủa trắng AgCl. Nhỏ tiếp dung dịch NH₃ đặc vào, kết tủa trắng tan hoàn toàn thành dung dịch trong suốt do ion Ag⁺ liên kết phối trí với NH₃ tạo ion phức diamminesilver(I) [Ag(NH₃)₂]⁺ tan tốt.'
  },
  30: {
    title: 'Thí nghiệm Khảo sát màu Sắc của Máu nhân tạo và Phức chất Heme',
    detail: 'Dung dịch chứa phức Fe(II) của vòng porphyrin khi tiếp xúc với không khí chuyển sang màu đỏ tươi rực rỡ (oxyhemoglobin); khi sục khí CO vào dung dịch chuyển sang màu đỏ thẫm carboxyhemoglobin rất bền vững khó nhả khí.'
  }
};

// Worked examples and common traps/mistakes to avoid
const lessonExamplesAndMistakes = {
  1: [
    '<strong>Ví dụ tính toán:</strong> Thủy phân hoàn toàn 8,8 gam ethyl acetate (CH₃COOC₂H₅, M = 88 g/mol) bằng 100 mL dung dịch NaOH 1,5M. Số mol ester = 0,1 mol; số mol NaOH = 0,15 mol (NaOH dư 0,05 mol). Cô cạn dung dịch sau phản ứng thu được chất rắn gồm: 0,1 mol CH₃COONa (8,2 g) và 0,05 mol NaOH dư (2,0 g) → Tổng khối lượng chất rắn khan = 10,2 gam.',
    '<strong>Bẫy đề thi cần tránh:</strong> Nhầm lẫn ester của phenol (RCOOC₆H₅) phản ứng với NaOH theo tỉ lệ 1 : 2 sinh ra 2 muối và H₂O chứ không sinh ra alcohol; quên rằng phản ứng thủy phân trong môi trường acid là phản ứng thuận nghịch (hai chiều ⇌).'
  ],
  2: [
    '<strong>Ví dụ tính toán:</strong> Xà phòng hóa hoàn toàn 89 kg chất béo tristearin (C₁₇H₃₅COO)₃C₃H₅ (M = 890 kg/kmol) bằng dung dịch NaOH. Số mol chất béo = 0,1 kmol → Khối lượng muối xà phòng sodium stearate = 0,3 kmol × 306 kg/kmol = 91,8 kg; khối lượng glycerol sinh ra = 0,1 kmol × 92 kg/kmol = 9,2 kg.',
    '<strong>Lỗi hay mắc phải:</strong> Nghĩ rằng xà phòng và chất giặt rửa tổng hợp là một; quên rằng xà phòng bị mất tác dụng trong nước cứng do tạo kết tủa với Ca²⁺ và Mg²⁺, trong khi chất giặt rửa tổng hợp vẫn giặt được trong nước cứng.'
  ],
  3: [
    '<strong>Ví dụ thực tiễn:</strong> Dầu ăn sau khi rán ở nhiệt độ cao nhiều lần sẽ xảy ra phản ứng nhiệt phân và oxy hóa tạo thành các gốc tự do và hợp chất peroxide gây hại cho sức khỏe. Khi đó chỉ số acid tăng cao và màu dầu chuyển sẫm.',
    '<strong>Bẫy đề thi:</strong> Nhầm lẫn chất béo (triester) với lipid nói chung (gồm cả sáp, steroid, phospholipid); quên rằng phản ứng hydrogen hóa chất béo không làm thay đổi số nguyên tử carbon trong phân tử.'
  ],
  4: [
    '<strong>Ví dụ tính toán:</strong> Đun nóng 18 gam glucose (0,1 mol) với lượng dư dung dịch AgNO₃ trong NH₃, hiệu suất phản ứng 90%. Theo phương trình: 1 mol Glucose → 2 mol Ag. Số mol Ag lí thuyết = 0,2 mol → m_Ag thực tế = 0,2 × 108 × 90% = 19,44 gam.',
    '<strong>Lỗi cần tránh:</strong> Quên nhân 2 số mol Ag (do 1 nhóm –CHO sinh ra 2Ag); nhầm rằng Fructose không tráng bạc (trong môi trường kiềm của thuốc thử Tollens, Fructose tự chuyển hóa thành Glucose nên vẫn tráng bạc bình thường).'
  ],
  5: [
    '<strong>Ví dụ tính toán:</strong> Thủy phân 34,2 gam saccharose (0,1 mol) với hiệu suất 80% thu được dung dịch X. Cho X tác dụng với dung dịch AgNO₃/NH₃ dư. 0,1 mol saccharose thủy phân sinh ra 0,08 mol glucose và 0,08 mol fructose; cả hai đều tráng bạc: Tổng mol Ag = (0,08 + 0,08) × 2 = 0,32 mol → m_Ag = 34,56 gam.',
    '<strong>Bẫy đề thi:</strong> Quên trung hòa acid trước khi cho thuốc thử Tollens vào sau phản ứng thủy phân; nhầm rằng Saccharose có nhóm –CHO tự do.'
  ],
  6: [
    '<strong>Ví dụ tính toán:</strong> Từ 1 tấn tinh bột chứa 20% tạp chất (tức chứa 0,8 tấn tinh bột nguyên chất) sản xuất ethanol qua 2 giai đoạn thủy phân và lên men với hiệu suất toàn bộ quá trình là 75%. Phương trình: (C₆H₁₀O₅)n → nC₆H₁₂O₆ → 2nC₂H₅OH. Khối lượng ethanol thu được = (0,8 / 162) × 2 × 46 × 75% ≈ 0,341 tấn = 341 kg.',
    '<strong>Lỗi cần tránh:</strong> Nhầm lẫn giữa liên kết α-1,4-glycosidic trong tinh bột và liên kết β-1,4-glycosidic trong cellulose; quên rằng cellulose không có cấu trúc xoắn nên hoàn toàn không cho phản ứng màu với iodine.'
  ],
  7: [
    '<strong>Ví dụ vận dụng:</strong> Để phân biệt 4 dung dịch mất nhãn: Glucose, Glycerol, Formaldehyde, Ethanol: Dùng Cu(OH)₂ ở nhiệt độ thường (Glycerol và Glucose tạo dung dịch xanh lam thẫm); đun nóng (chỉ Glucose tạo kết tủa đỏ gạch Cu₂O). Dùng tiếp nước bromine để xác nhận Glucose.',
    '<strong>Bẫy đề thi:</strong> Nhầm rằng tinh bột và cellulose là đồng phân của nhau (mặc dù cùng công thức đơn giản C₆H₁₀O₅ nhưng hệ số polymer hóa n rất khác nhau nên không phải đồng phân).'
  ],
  8: [
    '<strong>Ví dụ tính toán:</strong> Cho 4,5 gam một amine no, đơn chức, mạch hở X tác dụng vừa đủ với 100 mL dung dịch HCl 1M. Số mol amine = 0,1 mol → M_amine = 4,5 / 0,1 = 45 g/mol → CTPT là C₂H₇N (Dimethylamine hoặc Ethylamine).',
    '<strong>Lỗi cần tránh:</strong> Quên rằng Aniline (C₆H₅NH₂) có tính base rất yếu, không làm đổi màu quỳ tím và không làm đổi màu dung dịch phenolphthalein nhưng vẫn tác dụng được với acid mạnh (HCl).'
  ],
  9: [
    '<strong>Ví dụ tính toán:</strong> Thủy phân hoàn toàn 1 mol tripeptide Gly-Ala-Val cần dùng 2 mol H₂O và sinh ra 1 mol Glycine, 1 mol Alanine, 1 mol Valine. Khi tác dụng với dung dịch NaOH: 1 mol tripeptide cần đúng 3 mol NaOH và sinh ra 1 mol H₂O.',
    '<strong>Bẫy đề thi:</strong> Nhầm lẫn số liên kết peptide với số gốc amino acid (Peptide có n gốc amino acid thì chỉ có n − 1 liên kết peptide); quên trừ 18×(n−1) khi tính phân tử khối peptide.'
  ],
  10: [
    '<strong>Ví dụ thực tiễn:</strong> Hiện tượng riêu cua nổi lên khi nấu canh cua hoặc trứng đông cứng khi luộc là do protein bị đông tụ dưới tác dụng của nhiệt độ cao.',
    '<strong>Bẫy đề thi:</strong> Khẳng định dipeptide cho phản ứng màu Biuret (SAI: chỉ các peptide có từ 2 liên kết peptide trở lên, tức từ tripeptide, mới có phản ứng màu biuret).'
  ],
  11: [
    '<strong>Ví dụ tính toán:</strong> Cho 0,1 mol glycine tác dụng với 150 mL dung dịch HCl 1M thu được dung dịch X. Cho dung dịch X tác dụng với dung dịch NaOH dư: Số mol NaOH phản ứng = số mol HCl dư + số mol gốc –COOH = 0,05 + 0,1 = 0,15 mol.',
    '<strong>Bẫy đề thi:</strong> Nhầm lẫn giữa liên kết peptide và liên kết amide nói chung (mọi liên kết peptide đều là liên kết amide, nhưng liên kết amide không nhất thiết phải là peptide nếu không tạo từ α-amino acid).'
  ],
  12: [
    '<strong>Ví dụ tính toán:</strong> Trùng hợp 5,6 gam ethylene (0,2 mol) với hiệu suất 80% thu được m gam polyethylene (PE). Theo định luật bảo toàn khối lượng, m_PE = 5,6 × 80% = 4,48 gam.',
    '<strong>Lỗi cần tránh:</strong> Nhầm lẫn phản ứng trùng hợp (không sinh ra phân tử nhỏ) với phản ứng trùng ngưng (có giải phóng các phân tử nhỏ như H₂O).'
  ],
  13: [
    '<strong>Ví dụ phân loại tơ:</strong> Tơ thiên nhiên (bông, len, tơ tằm); Tơ tổng hợp (nylon-6,6, olon/nitron, lapsan); Tơ bán tổng hợp hay tơ nhân tạo (tơ visco, tơ cellulose acetate).',
    '<strong>Bẫy đề thi:</strong> Nhầm tơ visco là tơ tổng hợp (SAI: tơ visco được điều chế từ cellulose thiên nhiên qua phản ứng hóa học nên là tơ bán tổng hợp).'
  ],
  14: [
    '<strong>Ví dụ so sánh:</strong> Cao su buna-S và cao su buna-N là cao su tổng hợp; lưu hóa cao su thiên nhiên tạo cấu trúc mạng không gian 3 chiều giúp chịu mài mòn và đàn hồi gấp nhiều lần.',
    '<strong>Lỗi cần tránh:</strong> Nhầm nhựa bakelite (rezit) có cấu trúc mạch thẳng (nó có cấu trúc mạng không gian ba chiều không nóng chảy).'
  ],
  15: [
    '<strong>Ví dụ tính toán:</strong> Cho pin điện hóa Zn–Ag với E°(Zn²⁺/Zn) = −0,76 V và E°(Ag⁺/Ag) = +0,80 V. Sức điện động chuẩn của pin: E°_pin = E°(Ag⁺/Ag) − E°(Zn²⁺/Zn) = 0,80 − (−0,76) = 1,56 V.',
    '<strong>Bẫy đề thi:</strong> Quên đổi dấu khi trừ thế điện cực âm; nhầm lẫn tên cực trong pin điện hóa (cực âm là anot nơi xảy ra quá trình oxi hóa, cực dương là catot nơi xảy ra quá trình khử).'
  ],
  16: [
    '<strong>Ví dụ tính toán:</strong> Điện phân 200 mL dung dịch CuSO₄ với dòng điện I = 5A trong thời gian t = 1930 giây (điện cực trơ). Số mol electron trao đổi = (I × t) / F = (5 × 1930) / 96500 = 0,1 mol. Khối lượng Cu bám vào catot = (0,1 / 2) × 64 = 3,2 gam.',
    '<strong>Bẫy đề thi:</strong> Quên chia số e trao đổi (Cu nhận 2e, Al nhận 3e, Ag nhận 1e); quên kiểm tra xem nước đã bị điện phân ở catot hay anot chưa.'
  ],
  17: [
    '<strong>Ví dụ phân tích:</strong> Khi điện phân dung dịch hỗn hợp gồm Fe(NO₃)₃, Cu(NO₃)₂, AgNO₃, thứ tự các ion bị khử tại catot theo chiều giảm dần của thế điện cực: Fe³⁺ + 1e → Fe²⁺, sau đó đến Ag⁺ + 1e → Ag, tiếp theo Cu²⁺ + 2e → Cu, cuối cùng Fe²⁺ + 2e → Fe.',
    '<strong>Lỗi cần tránh:</strong> Nghĩ rằng Fe³⁺ bị khử thẳng về Fe kim loại (nó bị khử về Fe²⁺ trước rồi mới khử về Fe sau Cu).'
  ],
  18: [
    '<strong>Ví dụ so sánh:</strong> Kim loại có nhiệt độ nóng chảy cao nhất là Wolfram (W, khoảng 3422°C dùng làm dây tóc bóng đèn); kim loại có nhiệt độ nóng chảy thấp nhất là Thủy ngân (Hg, −39°C ở thể lỏng ở điều kiện thường).',
    '<strong>Bẫy đề thi:</strong> Cho rằng độ dẫn điện của kim loại tăng khi tăng nhiệt độ (SAI: khi tăng nhiệt độ, các cation kim loại dao động mạnh cản trở chuyển động của e tự do làm độ dẫn điện giảm).'
  ],
  19: [
    '<strong>Ví dụ tính toán:</strong> Hòa tan hoàn toàn 5,4 gam Al vào dung dịch H₂SO₄ loãng dư. Số mol Al = 0,2 mol. Phản ứng: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂↑. Số mol H₂ = 0,2 × 1,5 = 0,3 mol → Thể tích H₂ (đktc) = 6,72 lít.',
    '<strong>Lỗi cần tránh:</strong> Cho rằng sắt tác dụng với axit loãng HCl, H₂SO₄ tạo muối sắt(III) (SAI: chỉ tạo muối sắt(II) FeCl₂, FeSO₄; chỉ tác dụng với HNO₃ hoặc H₂SO₄ đặc nóng mới lên sắt(III)).'
  ],
  20: [
    '<strong>Ví dụ phản ứng:</strong> Dẫn khí CO dư đi qua ống sứ nung nóng chứa 16 gam Fe₂O₃ (0,1 mol), sau phản ứng thu được m gam sắt. Khối lượng Fe = 0,2 mol × 56 = 11,2 gam; khí CO₂ sinh ra dẫn vào nước vôi trong dư thu được 0,3 mol CaCO₃↓ = 30 gam.',
    '<strong>Bẫy đề thi:</strong> Dùng CO khử Al₂O₃ hoặc MgO để điều chế kim loại Al, Mg (SAI: CO chỉ khử được các oxit kim loại đứng sau nhôm trong dãy hoạt động hóa học).'
  ],
  21: [
    '<strong>Ví dụ thực tiễn:</strong> Duralumin (hợp kim nhôm với khoảng 4% Cu, một ít Mg, Mn) nhẹ tương đương nhôm nhưng bền và cứng như thép, được sử dụng rộng rãi trong công nghiệp chế tạo vỏ máy bay và tên lửa.',
    '<strong>Lỗi cần tránh:</strong> Nghĩ rằng hợp kim dẫn điện tốt hơn kim loại nguyên chất (SAI: do mạng tinh thể bị biến dạng bởi nguyên tử tạp chất, electron tự do chuyển động khó khăn hơn nên hợp kim thường dẫn điện kém hơn kim loại nguyên chất).'
  ],
  22: [
    '<strong>Ví dụ thực tế:</strong> Thân tàu biển bằng thép đi trong nước biển bị rỉ sét rất nhanh do nước biển là dung dịch chất điện li mạnh chứa nhiều ion Na⁺, Cl⁻, Mg²⁺ thúc đẩy quá trình ăn mòn điện hóa.',
    '<strong>Bẫy đề thi:</strong> Nhầm lẫn kim loại bị ăn mòn: Trong cặp Fe–Cu hoặc Fe–C thì Fe là cực âm bị ăn mòn; nhưng trong cặp Zn–Fe thì Zn là cực âm bị ăn mòn còn Fe được bảo vệ.'
  ],
  23: [
    '<strong>Ví dụ tính toán:</strong> Một giàn khoan dầu khí trên biển sử dụng 10 khối kẽm (mỗi khối 20 kg) để bảo vệ chân đế thép. Biết cường độ dòng điện ăn mòn trung bình là 1,5A. Thời gian bảo vệ của các khối kẽm: t = (m × 2 × F) / (M_Zn × I) ≈ nhiều năm.',
    '<strong>Lỗi cần tránh:</strong> Gắn tấm đồng (Cu) vào vỏ tàu bằng sắt để bảo vệ (SAI: Cu có tính khử yếu hơn Fe nên sẽ làm sắt bị ăn mòn nhanh gấp bội!).'
  ],
  24: [
    '<strong>Ví dụ tính toán:</strong> Cho 4,6 gam Na (0,2 mol) vào 100 gam nước thu được dung dịch NaOH và V lít H₂ (đktc). Số mol H₂ = 0,1 mol → V = 2,24 lít. Khối lượng dung dịch sau phản ứng = m_Na + m_H₂O − m_H₂ = 4,6 + 100 − 0,2 = 104,4 gam → C% NaOH = (0,2 × 40 / 104,4) × 100% ≈ 7,66%.',
    '<strong>Lỗi cần tránh:</strong> Quên trừ khối lượng khí H₂ bay ra khi tính khối lượng dung dịch sau phản ứng; dùng nước để dập đám cháy kim loại kiềm Na, K (cực kỳ nguy hiểm vì Na tác dụng với nước sinh thêm H₂ gây nổ lớn, phải dùng cát khô).'
  ],
  25: [
    '<strong>Ví dụ tính toán:</strong> Nung 100 gam đá vôi chứa 80% CaCO₃ (tức 80 gam CaCO₃ = 0,8 mol) với hiệu suất 90%. Khối lượng vôi sống CaO thu được = 0,8 × 90% × 56 = 40,32 gam.',
    '<strong>Bẫy đề thi:</strong> Nhầm lẫn giữa nước cứng tạm thời và nước cứng vĩnh cửu; quên rằng Na₂CO₃ và Na₃PO₄ có thể làm mềm được cả nước cứng tạm thời và nước cứng vĩnh cửu (chất làm mềm toàn phần).'
  ],
  26: [
    '<strong>Ví dụ nhận biết:</strong> Nhận biết 3 lọ hóa chất mất nhãn Na₂SO₄, K₂SO₄, BaCl₂: Dùng thử ngọn lửa (Na vàng, K tím); dung dịch BaCl₂ cho kết tủa trắng với Na₂SO₄ không tan trong axit.',
    '<strong>Lỗi cần tránh:</strong> Quên dùng kính coban khi quan sát ngọn lửa của Kali (ánh vàng của tạp chất Natri rất mạnh sẽ che khuất màu tím của Kali nếu không có kính lọc coban).'
  ],
  27: [
    '<strong>Ví dụ phản ứng:</strong> Cho dung dịch FeCl₂ phản ứng với dung dịch AgNO₃ dư: Đầu tiên có phản ứng trao đổi tạo kết tủa trắng: Fe²⁺ + 2Cl⁻ + 2Ag⁺ → 2AgCl↓; sau đó xảy ra phản ứng oxi hóa – khử: Fe²⁺ + Ag⁺ → Fe³⁺ + Ag↓. Như vậy chất rắn thu được gồm cả AgCl và Ag.',
    '<strong>Bẫy đề thi:</strong> Quên phản ứng giữa Fe²⁺ và Ag⁺ sinh ra kết tủa kim loại bạc Ag; nhầm số electron độc thân của ion Fe²⁺ (3d⁶ có 4e độc thân) và Fe³⁺ (3d⁵ có 5e độc thân).'
  ],
  28: [
    '<strong>Ví dụ tính toán:</strong> Trong ion phức [Co(NH₃)₆]³⁺: Số phối trí của ion trung tâm Co³⁺ là 6; phối tử là phân tử trung hòa NH₃ (điện tích 0); điện tích của ion phức là +3.',
    '<strong>Lỗi cần tránh:</strong> Nhầm lẫn số phối trí với số nguyên tử: Số phối trí là số liên kết phối trí mà nguyên tử trung tâm tạo ra với các phối tử xung quanh.'
  ],
  29: [
    '<strong>Ví dụ phản ứng:</strong> Nhỏ từ từ dung dịch NH₃ vào dung dịch AlCl₃ thu được kết tủa keo trắng Al(OH)₃; tiếp tục nhỏ dư NH₃ kết tủa KHÔNG TAN (khác với Cu(OH)₂ và Zn(OH)₂ tan tạo phức).',
    '<strong>Bẫy đề thi:</strong> Nghĩ rằng Al(OH)₃ tan trong dung dịch NH₃ dư (SAI: Al³⁺ không có khả năng tạo phức ammine bền với NH₃ nên kết tủa không tan).'
  ],
  30: [
    '<strong>Ví dụ thực tiễn:</strong> Khí CO sinh ra từ bếp than tổ ong hoặc đám cháy kín liên kết rất chặt với Fe²⁺ trong hemoglobin làm hồng cầu mất khả năng vận chuyển oxy, dẫn đến ngạt thở và tử vong nhanh chóng.',
    '<strong>Bẫy đề thi:</strong> Nhầm lẫn ion trung tâm trong Diệp lục (là Mg²⁺) với ion trung tâm trong Hemoglobin (là Fe²⁺).'
  ]
};

// Summary Table Rows for Quick Formula & Rule Reference (18 rows)
const quickFormulaTable = [
  { topic: '1. Phản ứng Ester hóa & Thủy phân', formula: '<strong>RCOOH + R′OH ⇌ RCOOR′ + H₂O</strong>  •  Xà phòng hóa: <strong>RCOOR′ + NaOH → RCOONa + R′OH</strong>', lessonRef: 'Bài 1, Bài 2' },
  { topic: '2. Xà phòng hóa Chất Béo (Triglyceride)', formula: '<strong>(RCOO)₃C₃H₅ + 3NaOH → C₃H₅(OH)₃ (Glycerol) + 3RCOONa (Xà phòng)</strong>', lessonRef: 'Bài 1, Bài 3' },
  { topic: '3. Hydrogen hóa Dầu lỏng thành Mỡ rắn', formula: '<strong>–CH=CH– + H₂ → –CH₂–CH₂–</strong> (xúc tác Ni, nhiệt độ cao, áp suất)', lessonRef: 'Bài 1, Bài 3' },
  { topic: '4. Phản ứng Tráng Bạc của Monosaccharide', formula: '<strong>R–CHO + 2[Ag(NH₃)₂]OH → R–COONH₄ + 2Ag↓ + 3NH₃ + H₂O</strong>  •  1 mol Glucose → 2 mol Ag', lessonRef: 'Bài 4, Bài 7' },
  { topic: '5. Lên men rượu sinh học Bio-Ethanol', formula: '<strong>C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂↑</strong> (enzyme zymase, nhiệt độ 30–35°C)', lessonRef: 'Bài 4, Bài 7' },
  { topic: '6. Thủy phân Disaccharide & Polysaccharide', formula: '<strong>Saccharose + H₂O → Glucose + Fructose</strong>  •  <strong>(C₆H₁₀O₅)ₙ + nH₂O → nC₆H₁₂O₆</strong>', lessonRef: 'Bài 5, Bài 6' },
  { topic: '7. Tính Base của Amine trong nước', formula: '<strong>R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻</strong>  •  Muối: <strong>RNH₂ + HCl → RNH₃Cl</strong>', lessonRef: 'Bài 8, Bài 11' },
  { topic: '8. Liên kết Peptide & Cấu trúc Protein', formula: '<strong>–COOH + H₂N– → –CO–NH– (liên kết peptide) + H₂O</strong>  •  Biuret: phức màu tím với Cu(OH)₂', lessonRef: 'Bài 9, Bài 10' },
  { topic: '9. Phản ứng Trùng hợp & Trùng ngưng Polymer', formula: 'Trùng hợp PE: <strong>nCH₂=CH₂ → (–CH₂–CH₂–)ₙ</strong>  •  Tơ Nylon-6,6: Trùng ngưng hexamethylenediamine + adipic acid', lessonRef: 'Bài 12, Bài 13' },
  { topic: '10. Sức điện động chuẩn của Pin điện hóa', formula: '<strong>E°_pin = E°_cathode (dương) − E°_anode (âm)</strong>  •  Pin Daniell (Zn–Cu): <strong>E°_pin = 1,10 V</strong>', lessonRef: 'Bài 15, Bài 17' },
  { topic: '11. Định luật Điện phân Faraday', formula: '<strong>m = (A × I × t) / (n × F)</strong> (với F = 96500 C/mol; nhân H% nếu hiệu suất &lt; 100%)', lessonRef: 'Bài 16, Bài 17' },
  { topic: '12. Điện phân dung dịch NaCl có màng ngăn', formula: '<strong>2NaCl + 2H₂O → 2NaOH + Cl₂↑ (anot) + H₂↑ (catot)</strong> (công nghệ Chlor-Alkali)', lessonRef: 'Bài 16, Bài 17' },
  { topic: '13. Phương pháp Nhiệt luyện trong Lò Cao', formula: '<strong>Fe₂O₃ + 3CO → 2Fe + 3CO₂↑</strong> (nhiệt độ cao, khử quặng sắt hematite thành gang)', lessonRef: 'Bài 20, Bài 23' },
  { topic: '14. Cơ chế Ăn mòn điện hóa pin vi mô', formula: 'Anot (−): <strong>Fe → Fe²⁺ + 2e⁻</strong>  •  Catot (+): <strong>2H₂O + O₂ + 4e⁻ → 4OH⁻</strong> → Rỉ sắt Fe₂O₃·nH₂O', lessonRef: 'Bài 22, Bài 23' },
  { topic: '15. Kim loại Kiềm (IA) tác dụng với Nước', formula: '<strong>2Na + 2H₂O → 2NaOH + H₂↑</strong> (tỏa nhiệt lớn, làm nóng chảy Na thành giọt tròn bốc cháy)', lessonRef: 'Bài 24, Bài 26' },
  { topic: '16. Chu trình Vôi & Làm mềm Nước Cứng', formula: '<strong>CaCO₃ ⇌ CaO + CO₂↑</strong>  •  <strong>Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O</strong> (đun sôi làm mềm nước tạm thời)', lessonRef: 'Bài 25, Bài 26' },
  { topic: '17. Cấu hình electron phân lớp 3d của Sắt', formula: '<strong>Fe (Z=26): [Ar] 3d⁶ 4s²</strong>  •  Nhường 2e tạo <strong>Fe²⁺ (3d⁶)</strong>  •  Nhường 3e tạo <strong>Fe³⁺ (3d⁵ bán bão hòa bền)</strong>', lessonRef: 'Bài 27, Bài 30' },
  { topic: '18. Phản ứng thế phối tử tạo Phức chất', formula: '<strong>[Cu(H₂O)₄]²⁺ (xanh nhạt) + 4NH₃ ⇌ [Cu(NH₃)₄]²⁺ (xanh thẫm) + 4H₂O</strong>', lessonRef: 'Bài 28, Bài 29' }
];

// Safety Guidelines (6 Core Rules)
const safetyGuidelines = [
  {
    title: '1. Trang bị bảo hộ cá nhân (PPE) & Quy tắc không nếm ngửi',
    detail: 'Luôn đeo kính bảo hộ, mặc áo choàng phòng thí nghiệm và găng tay cao su phù hợp khi tiếp xúc hóa chất. Tuyệt đối không nếm hóa chất, không dùng miệng hút pipette (luôn dùng quả bóp cao su), không ngửi trực tiếp mà dùng tay phẩy nhẹ hơi hóa chất về phía mũi.'
  },
  {
    title: '2. Xử lí Acid và Base đậm đặc & Quy tắc pha loãng an toàn',
    detail: 'Khi pha loãng acid sulfuric đặc (H₂SO₄), luôn luôn rót từ từ từng giọt acid dọc theo thành đũa thủy tinh vào nước và khuấy đều, tuyệt đối KHÔNG ĐƯỢC làm ngược lại (rót nước vào acid sẽ gây sôi cục bộ bắn acid ra ngoài gây bỏng cực kỳ nguy hiểm). Nếu dính acid vào da, xối rửa liên tục dưới vòi nước chảy ít nhất 15 phút rồi báo ngay giáo viên.'
  },
  {
    title: '3. An toàn phòng cháy dung môi hữu cơ dễ bay hơi',
    detail: 'Các hóa chất ester (ethyl acetate), alcohol (ethanol), ether và hydrocarbon rất dễ bay hơi và dễ bắt lửa. Tuyệt đối không đun trực tiếp trên ngọn lửa trần mà phải đun cách thủy bằng nồi nước nóng hoặc dùng bếp điện điều nhiệt trong tủ hút thông gió.'
  },
  {
    title: '4. Thao tác an toàn với Kim loại Kiềm (Na, K)',
    detail: 'Kim loại kiềm phản ứng mãnh liệt tỏa nhiệt lớn với nước và độ ẩm không khí. Thao tác phải dùng kẹp kim loại, lấy lượng cực nhỏ (bằng hạt đậu xanh), thấm khô dầu hỏa bằng giấy lọc trước khi làm thí nghiệm. Tuyệt đối không chạm tay trực tiếp và không dập đám cháy kim loại kiềm bằng nước (phải dùng cát khô).'
  },
  {
    title: '5. An toàn trong thí nghiệm Điện Phân & Khí độc (Cl₂)',
    detail: 'Thí nghiệm điện phân tạo khí Cl₂ màu vàng lục mùi hắc cực kỳ độc hại cho đường hô hấp. Bắt buộc phải thực hiện trong tủ hút có quạt hút gió hoặc nơi thoáng khí. Nguồn điện một chiều phải dùng điện áp thấp an toàn (dưới 12V).'
  },
  {
    title: '6. Phân loại và Xử lí chất thải hóa học sau thực hành',
    detail: 'Tuyệt đối không đổ bừa bãi dung dịch chứa ion kim loại nặng (Cu²⁺, Pb²⁺, Ag⁺, Cr⁶⁺), acid, kiềm và dung môi hữu cơ trực tiếp xuống bồn rửa thoát nước sinh hoạt. Phải thu gom riêng vào các can chứa chất thải nguy hại để trung hòa và xử lí tập trung theo quy định môi trường.'
  }
];

// Build the 30 lessons dictionary
const lessonsObj = {};

// Parse raw lessons text
const regex = /## (Bài \d+[^\n]+)/g;
let match;
const lessonPositions = [];
while ((match = regex.exec(rawContent)) !== null) {
  lessonPositions.push({ title: match[1], index: match.index });
}

for (let i = 0; i < lessonPositions.length; i++) {
  const current = lessonPositions[i];
  const nextIdx = (i + 1 < lessonPositions.length) ? lessonPositions[i+1].index : rawContent.indexOf('# Bảng phương trình');
  const rawText = rawContent.slice(current.index, nextIdx).trim();

  const id = i + 1;
  const chapter = chapters.find(c => c.lessons.includes(id));
  const titleClean = current.title.replace(/^Bài \d+\.\s*/, '').trim();
  const bodyText = rawText.slice(rawText.indexOf('\n')).trim();

  // Parse sections
  const subParts = bodyText.split(/\n(?=### |\n### )/);
  const sections = [];

  if (subParts.length > 1 && bodyText.includes('### ')) {
    subParts.forEach(sp => {
      const spTrimmed = sp.trim();
      if (!spTrimmed) return;
      const firstLine = spTrimmed.split('\n')[0].replace(/^###\s*/, '').trim();
      const rest = spTrimmed.slice(spTrimmed.indexOf('\n') + 1).trim();
      const items = rest.split('\n')
        .map(l => l.trim())
        .filter(l => l.startsWith('- '))
        .map(l => l.slice(2).trim());

      sections.push({
        heading: firstLine,
        items: items.length > 0 ? items : [rest]
      });
    });
  } else {
    // Split by bullet groups or double newlines
    const paragraphs = bodyText.split('\n\n').filter(p => p.trim());
    paragraphs.forEach((p, pIdx) => {
      const lines = p.split('\n').map(l => l.trim()).filter(Boolean);
      const items = lines.filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
      const nonBullet = lines.filter(l => !l.startsWith('- ')).join(' ');

      sections.push({
        heading: `${pIdx + 1}. Kiến thức trọng tâm phần ${pIdx + 1}`,
        items: items.length > 0 ? items : [nonBullet]
      });
    });
  }

  const isReview = [3, 7, 11, 14, 17, 23, 26, 30].includes(id);

  lessonsObj[id] = {
    num: id,
    chapter: chapter.num,
    title: current.title,
    titleClean,
    pages: lessonPages[id] || 'tr. 5–10',
    isReview,
    subtitle: interactiveData.lessonThemes[id] || 'Kiến thức cốt lõi và ứng dụng',
    diagramCaption: `Sơ đồ cơ chế phân tử hóa học – Bài ${id}: ${titleClean}`,
    keyFormulas: lessonKeyFormulas[id] || ['Nắm vững định nghĩa, cấu tạo phân tử và tính chất hóa học'],
    sections: curriculumSections[id] || sections,
    experimentsAndSafety: lessonExperiments[id] || {
      title: `Thí nghiệm tiêu biểu & Hiện tượng thực hành Bài ${id}`,
      detail: `Tiến hành thí nghiệm theo đúng quy trình hướng dẫn của giáo viên, quan sát hiện tượng đổi màu, kết tủa hoặc sủi bọt khí.`
    },
    examplesAndMistakes: lessonExamplesAndMistakes[id] || [
      `<strong>Ví dụ tính toán:</strong> Áp dụng định luật bảo toàn khối lượng và tỉ lệ mol theo phương trình phản ứng hóa học của Bài ${id}.`,
      `<strong>Bẫy đề thi:</strong> Chú ý điều kiện phản ứng (nhiệt độ, xúc tác, môi trường acid/base) để viết đúng sản phẩm.`
    ],
    diagram: all30Models[id] ? all30Models[id].svg : '',
    reactionModel: all30Models[id] || null,
    quizzes: interactiveData.lessonQuizzes[id] || []
  };
}

console.log('Successfully created full dataset for all 30 lessons of Chemistry Grade 12!');

module.exports = {
  chapters,
  lessons: lessonsObj,
  quickFormulaTable,
  safetyGuidelines,
  diagrams: all30Models,
  chapterSvgs: svgs,
  examQuestions: interactiveData.examQuestions
};
