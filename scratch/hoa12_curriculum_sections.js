// scratch/hoa12_curriculum_sections.js
// Detailed, professional, 5-star curriculum sections for all 30 lessons of Chemistry Grade 12 (Kết Nối Tri Thức)

const curriculumSections = {
  1: [
    {
      heading: '1. Khái niệm, danh pháp và cấu tạo phân tử Ester',
      items: [
        'Ester được hình thành khi thay thế nhóm –OH ở nhóm carboxyl (–COOH) của carboxylic acid bằng nhóm –OR′ của alcohol hoặc phenol. Công thức chung của ester đơn chức: <strong>RCOOR′</strong> (R là H hoặc gốc hydrocarbon; R′ là gốc hydrocarbon, R′ ≠ H).',
        'Công thức phân tử chung của ester đơn chức, no, mạch hở: <strong>CₙH₂ₙO₂ (n ≥ 2)</strong>.',
        'Quy tắc gọi tên ester: <strong>Tên gốc hydrocarbon R′ + Tên anion gốc acid (đuôi –ate)</strong>. Ví dụ: HCOOCH₃ (methyl methanoate / methyl formate); CH₃COOC₂H₅ (ethyl ethanoate / ethyl acetate); CH₂=CHCOOCH₃ (methyl propenoate / methyl acrylate); CH₃COOCH₂C₆H₅ (benzyl acetate – mùi hoa nhài).',
        'Đặc điểm cấu tạo: Ester không tạo được liên kết hydrogen liên phân tử với nhau như alcohol hay carboxylic acid tương ứng, do đó nhiệt độ sôi và độ tan trong nước của ester thấp hơn nhiều so với acid và alcohol có cùng phân tử khối.'
      ]
    },
    {
      heading: '2. Tính chất vật lí và tính chất hóa học của Ester',
      items: [
        '<strong>Tính chất vật lí:</strong> Đa số ester ở điều kiện thường là chất lỏng hoặc chất rắn (khi M lớn), nhẹ hơn nước, rất ít tan trong nước, dễ bay hơi và thường có mùi thơm hoa quả đặc trưng (isoamyl acetate có mùi chuối chín, ethyl butyrate có mùi dứa chín, benzyl acetate có mùi hoa nhài). Ester là dung môi hữu cơ tốt hòa tan nhiều chất béo, sơn, nhựa.',
        '<strong>Phản ứng thủy phân trong môi trường acid (phản ứng thuận nghịch):</strong> Đun nóng ester với nước có xúc tác H₂SO₄ loãng: <br><code>RCOOR′ + H₂O ⇌ RCOOH + R′OH (H⁺, t°)</code>',
        '<strong>Phản ứng thủy phân trong môi trường kiềm (phản ứng xà phòng hóa - một chiều):</strong> Đun nóng ester với dung dịch NaOH hoặc KOH: <br><code>RCOOR′ + NaOH → RCOONa + R′OH (t°)</code>',
        '<strong>Trường hợp đặc biệt:</strong> Thủy phân ester của phenol tạo 2 muối và nước: <code>CH₃COOC₆H₅ + 2NaOH → CH₃COONa + C₆H₅ONa + H₂O</code>. Thủy phân vinyl ester tạo aldehyde: <code>CH₃COOCH=CH₂ + NaOH → CH₃COONa + CH₃CHO</code>.',
        '<strong>Phản ứng điều chế:</strong> Phản ứng ester hóa giữa carboxylic acid và alcohol đun nóng với xúc tác H₂SO₄ đặc (vừa là xúc tác, vừa hút nước làm dịch chuyển cân bằng sang phải): <code>RCOOH + R′OH ⇌ RCOOR′ + H₂O (H₂SO₄ đ, t°)</code>.'
      ]
    },
    {
      heading: '3. Khái niệm, cấu trúc của Lipid và Chất béo (Triglyceride)',
      items: [
        '<strong>Lipid</strong> là những hợp chất hữu cơ có trong tế bào sống, không tan trong nước nhưng tan nhiều trong dung môi hữu cơ không phân cực (ether, benzene, chloroform). Lipid bao gồm chất béo, sáp, steroid, phospholipid...',
        '<strong>Chất béo (triglyceride / triacylglycerol)</strong> là triester của glycerol với các acid béo. Công thức cấu tạo chung: <strong>(RCOO)₃C₃H₅</strong> (các gốc R có thể giống nhau hoặc khác nhau).',
        '<strong>Các acid béo tiêu biểu:</strong> <br>• Acid béo no: Palmitic acid (C₁₅H₃₁COOH, no), Stearic acid (C₁₇H₃₅COOH, no). <br>• Acid béo không no: Oleic acid (C₁₇H₃₃COOH, 1 liên kết đôi C=C dạng cis), Linoleic acid (C₁₇H₃₁COOH, 2 liên kết đôi C=C dạng cis).',
        '<strong>Tính chất hóa học của chất béo:</strong> <br>• Phản ứng xà phòng hóa: <code>(RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃ (t°)</code>. <br>• Phản ứng hydrogen hóa chất béo lỏng (dầu thực vật không no) thành chất béo rắn (bơ nhân tạo, mỡ động vật) có xúc tác Ni, đun nóng và áp suất. <br>• Phản ứng oxi hóa bởi O₂ không khí vào liên kết C=C tạo hợp chất peroxide, sau đó phân hủy thành các aldehyde và ketone có mùi hắc khó chịu, gây hiện tượng ôi thiu chất béo.',
        '<strong>Vai trò sinh học:</strong> Cung cấp năng lượng chủ yếu cho cơ thể (1g chất béo cung cấp khoảng 38 kJ), dung môi hòa tan các vitamin tan trong dầu (A, D, E, K), lớp đệm cơ học bảo vệ các cơ quan nội tạng và lớp cách nhiệt chống lạnh.'
      ]
    }
  ],

  2: [
    {
      heading: '1. Khái niệm, thành phần xà phòng và chất giặt rửa tổng hợp',
      items: [
        '<strong>Xà phòng:</strong> Là hỗn hợp muối sodium hoặc potassium của các acid béo (thường là sodium stearate C₁₇H₃₅COONa, sodium palmitate C₁₅H₃₁COONa hoặc sodium oleate C₁₇H₃₃COONa) kết hợp với các chất phụ gia (chất tạo hương, chất diệt khuẩn, chất tạo màu).',
        'Muối sodium tạo xà phòng bánh (thể rắn); muối potassium tạo xà phòng thơm dạng lỏng (sữa tắm, nước rửa tay).',
        '<strong>Chất giặt rửa tổng hợp:</strong> Là các hợp chất tổng hợp nhân tạo có tác dụng làm sạch tương tự xà phòng nhưng không phải là muối carboxylate. Thành phần chủ yếu là muối sodium alkyl sulfate (R–OSO₃Na) hoặc sodium alkylbenzene sulfonate (R–C₆H₄–SO₃Na / LAS), cùng các chất trợ giặt (chất tẩy trắng quang học, enzyme tiêu hóa vết bẩn, chất chống tái bám).'
      ]
    },
    {
      heading: '2. Cấu tạo phân tử lưỡng cực và cơ chế tẩy rửa Micelle',
      items: [
        '<strong>Cấu tạo phân tử chất giặt rửa:</strong> Luôn gồm 2 phần có tính chất đối lập: <br>• <strong>Phần đuôi hydrocarbon dài (R–):</strong> Kị nước (không phân cực), nhưng ưa dầu mỡ (dễ tan vào vết bẩn chất béo). <br>• <strong>Phần đầu phân cực (–COO⁻Na⁺ hoặc –SO₃⁻Na⁺):</strong> Ưa nước (phân cực), dễ tương tác với các phân tử nước.',
        '<strong>Cơ chế tạo hạt Micelle tẩy sạch vết bẩn:</strong> <br>1. Khi hòa tan vào nước, các phân tử chất giặt rửa tập trung ở bề mặt phân cách hoặc cắm đầu ưa nước ra ngoài nước, đuôi kị nước cắm sâu vào các hạt chất béo/dầu mỡ của vết bẩn bám trên sợi vải. <br>2. Dưới tác động cơ học vò, cọ hoặc lắc của lồng máy giặt, vết dầu mỡ bị phân tán nhỏ thành các vi hạt micelle lơ lửng trong nước (phần đuôi bọc lấy dầu, phần đầu ưa nước quay ra ngoài đẩy nhau do cùng mang điện tích âm). <br>3. Khi xả nước, các hạt micelle mang theo vết bẩn bị cuốn trôi ra ngoài mà không thể bám ngược trở lại sợi vải.'
      ]
    },
    {
      heading: '3. Phương pháp sản xuất và tác động môi trường',
      items: [
        '<strong>Sản xuất xà phòng:</strong> Đun sôi chất béo (mỡ động vật hoặc dầu thực vật) với dung dịch kiềm NaOH/KOH đặc trong nồi nấu xà phòng. Sau khi phản ứng hoàn thành, cho thêm dung dịch muối ăn bão hòa (NaCl) để làm giảm độ tan của xà phòng, xà phòng nhẹ hơn sẽ nổi lên trên (kết tinh), tách lấy xà phòng đóng bánh, phần dung dịch bên dưới thu hồi glycerol.',
        '<strong>Sản xuất chất giặt rửa tổng hợp:</strong> Đi từ các sản phẩm phụ của ngành hóa dầu (petrochemicals): ankyl hóa benzene bằng alkene rồi sulfonate hóa bằng H₂SO₄/SO₃, sau đó trung hòa bằng NaOH.',
        '<strong>So sánh ưu - nhược điểm và ảnh hưởng môi trường:</strong> <br>• <em>Ưu điểm của xà phòng:</em> Dễ bị vi sinh vật phân hủy sinh học trong đất và nguồn nước, thân thiện với môi trường. <br>• <em>Nhược điểm của xà phòng:</em> Bị mất tác dụng trong nước cứng do ion Ca²⁺, Mg²⁺ tạo kết tủa trắng với anion acid béo: <code>2RCOO⁻ + Ca²⁺ → (RCOO)₂Ca↓</code> bám vào sợi vải làm ố vàng và mất bọt. <br>• <em>Ưu điểm của chất giặt rửa tổng hợp:</em> Dùng tốt trong cả nước cứng và môi trường acid nhẹ vì muối sulfonate của Ca²⁺, Mg²⁺ tan tốt trong nước. <br>• <em>Nhược điểm của chất giặt rửa tổng hợp:</em> Các chất có mạch carbon phân nhánh khó bị vi sinh vật phân hủy, gây tích tụ bọt ở sông hồ, làm giảm lượng oxy hòa tan và ô nhiễm môi trường thủy sinh.'
      ]
    }
  ],

  3: [
    {
      heading: '1. Hệ thống hóa lý thuyết cốt lõi Chương 1 (Ester – Lipid – Chất giặt rửa)',
      items: [
        '<strong>Mối quan hệ giữa Carboxylic acid, Alcohol và Ester:</strong> Ester RCOOR′ là sản phẩm của phản ứng ester hóa thuận nghịch. Điểm mấu chốt: liên kết C–O của nhóm carboxyl bị đứt trong phản ứng ester hóa, còn liên kết O–H của alcohol bị đứt.',
        '<strong>Phân biệt cấu trúc:</strong> <br>• Ester đơn chức: RCOOR′ (M nhỏ, lỏng, thơm). <br>• Triglyceride: (RCOO)₃C₃H₅ (triester của glycerol với 3 gốc acid béo). <br>• Xà phòng: RCOONa / RCOOK (muối kiềm của acid béo). <br>• Chất giặt rửa tổng hợp: R–OSO₃Na hoặc R–C₆H₄–SO₃Na.',
        '<strong>Trạng thái của chất béo:</strong> Phụ thuộc vào gốc hydrocarbon R: <br>• Gốc no (palmitic C₁₅H₃₁, stearic C₁₇H₃₅) → phân tử xếp khít nhau → lực Van der Waals mạnh → thể rắn ở nhiệt độ thường (mỡ lợn, mỡ bò). <br>• Gốc không no (oleic C₁₇H₃₃, linoleic C₁₇H₃₁) → liên kết đôi dạng cis làm gập khúc phân tử → xếp lỏng lẻo → thể lỏng ở nhiệt độ thường (dầu lạc, dầu mè, dầu hướng dương).'
      ]
    },
    {
      heading: '2. Bảng so sánh phản ứng thủy phân Acid vs Thủy phân Base (Xà phòng hóa)',
      items: [
        '<strong>Môi trường acid (H⁺, t°):</strong> Phản ứng thuận nghịch hai chiều (⇌). Sản phẩm tạo thành gồm Carboxylic acid tự do (RCOOH) và Alcohol (R′OH). Hỗn hợp sau phản ứng tách thành 2 lớp chất lỏng.',
        '<strong>Môi trường kiềm (OH⁻, t°):</strong> Phản ứng một chiều (→). Sản phẩm tạo thành gồm Muối carboxylate (RCOONa) và Alcohol (R′OH). Hỗn hợp sau phản ứng đồng nhất nếu alcohol tan tốt trong nước.',
        '<strong>Thủy phân Triglyceride:</strong> Luôn thu được Glycerol C₃H₅(OH)₃ theo tỉ lệ mol <code>1 mol chất béo : 3 mol NaOH : 1 mol Glycerol : 3 mol Muối</code>.',
        '<strong>Chỉ số xà phòng hóa:</strong> Số miligam KOH cần dùng để xà phòng hóa hoàn toàn 1 gam chất béo (bao gồm lượng KOH trung hòa acid béo tự do và lượng KOH xà phòng hóa triglyceride).'
      ]
    },
    {
      heading: '3. Phương pháp giải toán và các dạng bẫy đề thi hay gặp',
      items: [
        '<strong>Bảo toàn khối lượng trong phản ứng xà phòng hóa:</strong> <br><code>m_ester + m_NaOH = m_muối + m_alcohol</code> <br><code>m_chất béo + m_NaOH = m_xà phòng + m_glycerol</code> (với n_NaOH = 3 × n_glycerol = 3 × n_chất béo).',
        '<strong>Phản ứng đốt cháy ester no, đơn chức, mạch hở:</strong> <br><code>CₙH₂ₙO₂ + (3n−2)/2 O₂ → nCO₂ + nH₂O</code> luôn có <strong>n_CO₂ = n_H₂O</strong>.',
        '<strong>Bẫy 1 - Ester của phenol:</strong> Tác dụng với NaOH theo tỉ lệ mol 1:2 tạo 2 muối và H₂O (không sinh alcohol): <code>n_H₂O = n_ester_phenol</code>.',
        '<strong>Bẫy 2 - Phản ứng tráng bạc của ester:</strong> Chỉ những ester có gốc formate dạng <strong>HCOOR′</strong> mới có phản ứng tráng bạc sinh ra 2 mol Ag.',
        '<strong>Bẫy 3 - Hydrogen hóa chất béo:</strong> Số mol H₂ phản ứng tối đa bằng số liên kết pi (C=C) trong gốc hydrocarbon của chất béo: <code>n_H₂ = k × n_chất béo</code> (với k là tổng số liên kết C=C trong phân tử).'
      ]
    }
  ],

  4: [
    {
      heading: '1. Khái niệm và phân loại Carbohydrate',
      items: [
        '<strong>Carbohydrate (saccharide / glucid)</strong> là những hợp chất hữu cơ tạp chức, thường có công thức chung là <strong>Cₙ(H₂O)ₘ</strong>.',
        '<strong>Phân loại gồm 3 nhóm chính:</strong> <br>• <strong>Monosaccharide:</strong> Carbohydrate đơn giản nhất, không bị thủy phân. Tiêu biểu: <em>Glucose</em> và <em>Fructose</em> (C₆H₁₂O₆). <br>• <strong>Disaccharide:</strong> Carbohydrate bị thủy phân sinh ra 2 phân tử monosaccharide. Tiêu biểu: <em>Saccharose</em> và <em>Maltose</em> (C₁₂H₂₂O₁₁). <br>• <strong>Polysaccharide:</strong> Carbohydrate phức tạp, bị thủy phân hoàn toàn sinh ra nhiều phân tử monosaccharide. Tiêu biểu: <em>Tinh bột</em> và <em>Cellulose</em> ((C₆H₁₀O₅)ₙ).'
      ]
    },
    {
      heading: '2. Cấu tạo phân tử của Glucose và Fructose',
      items: [
        '<strong>Glucose (C₆H₁₂O₆, M = 180):</strong> <br>• Ở dạng mạch hở: Phân tử có 5 nhóm hydroxyl (–OH) kề nhau và 1 nhóm formyl (–CHO) ở đầu mạch: <code>CH₂OH–CHOH–CHOH–CHOH–CHOH–CHO</code> (là một polyhydroxy aldehyde). <br>• Ở dạng mạch vòng: Chiếm ưu thế trong dung dịch nước, gồm hai dạng đồng phân lập thể là <strong>α-glucose</strong> và <strong>β-glucose</strong> (vòng 6 cạnh pyranose).',
        '<strong>Fructose (C₆H₁₂O₆, M = 180):</strong> <br>• Là đồng phân cấu tạo của glucose. Ở dạng mạch hở: Phân tử có 5 nhóm hydroxyl (–OH) và 1 nhóm carbonyl ketone (–CO–) ở vị trí C-2: <code>CH₂OH–CHOH–CHOH–CHOH–CO–CH₂OH</code> (là một polyhydroxy ketone). <br>• Trong môi trường kiềm, fructose và glucose chuyển hóa thuận nghịch lẫn nhau: <code>Glucose ⇌ Fructose (OH⁻)</code>.'
      ]
    },
    {
      heading: '3. Tính chất hóa học đặc trưng của Glucose và Fructose',
      items: [
        '<strong>Tính chất của polyalcohol (nhiều nhóm –OH kề nhau):</strong> Tác dụng với Cu(OH)₂ ở nhiệt độ thường tạo phức chất đồng–glucose tan trong nước, dung dịch có màu xanh lam thẫm: <br><code>2C₆H₁₂O₆ + Cu(OH)₂ → (C₆H₁₁O₆)₂Cu + 2H₂O</code>',
        '<strong>Tính chất của nhóm aldehyde (–CHO) của Glucose:</strong> <br>• <em>Phản ứng tráng bạc:</em> Khử ion Ag⁺ trong thuốc thử Tollens [Ag(NH₃)₂]OH tạo bạc kim loại bám vào thành ống nghiệm: <br><code>CH₂OH[CHOH]₄CHO + 2[Ag(NH₃)₂]OH → CH₂OH[CHOH]₄COONH₄ + 2Ag↓ + 3NH₃ + H₂O (t°)</code> <br>• <em>Khử Cu(OH)₂ trong môi trường kiềm đun nóng:</em> Tạo kết tủa đỏ gạch Cu₂O: <br><code>CH₂OH[CHOH]₄CHO + 2Cu(OH)₂ + NaOH → CH₂OH[CHOH]₄COONa + Cu₂O↓ (đỏ gạch) + 3H₂O (t°)</code> <br>• <em>Làm mất màu nước bromine:</em> Glucose làm mất màu nước Br₂ (tạo gluconic acid), còn Fructose không làm mất màu nước bromine (dùng để phân biệt glucose và fructose).',
        '<strong>Lưu ý:</strong> Fructose dù không có nhóm –CHO ở mạch hở nhưng trong môi trường kiềm của thuốc thử Tollens hoặc Cu(OH)₂/NaOH, fructose chuyển hóa thành glucose nên <strong>fructose vẫn tham gia phản ứng tráng bạc và tạo kết tủa Cu₂O đỏ gạch</strong>.',
        '<strong>Phản ứng lên men của Glucose:</strong> Dưới tác dụng của enzyme zymase ở 30–35°C: <br><code>C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂↑ (enzyme, 30–35°C)</code>'
      ]
    }
  ],

  5: [
    {
      heading: '1. Cấu tạo phân tử Saccharose và Maltose',
      items: [
        'Cả saccharose và maltose đều là disaccharide có cùng công thức phân tử là <strong>C₁₂H₂₂O₁₁ (M = 342)</strong>.',
        '<strong>Saccharose (đường mía, sucrose):</strong> Cấu tạo từ 1 gốc <strong>α-glucose</strong> và 1 gốc <strong>β-fructose</strong> liên kết với nhau qua nguyên tử oxygen giữa C₁ của glucose và C₂ của fructose (liên kết <strong>α-1,2-glycoside</strong>). Cả hai nhóm –OH hemiacetal và hemiketal đều đã tham gia tạo liên kết glycoside, nên phân tử saccharose <em>không mở vòng được</em>, không có nhóm –CHO tự do → <strong>saccharose là đường không khử</strong>.',
        '<strong>Maltose (đường mạch nha):</strong> Cấu tạo từ 2 gốc <strong>α-glucose</strong> liên kết qua nguyên tử oxygen giữa C₁ của gốc này và C₄ của gốc kia (liên kết <strong>α-1,4-glycoside</strong>). Gốc glucose thứ hai còn nhóm –OH hemiacetal tự do nên có thể mở vòng tạo nhóm –CHO → <strong>maltose là đường có tính khử</strong>.'
      ]
    },
    {
      heading: '2. Tính chất hóa học và phản ứng thủy phân',
      items: [
        '<strong>Tính chất của polyalcohol:</strong> Cả dung dịch saccharose và maltose đều hòa tan Cu(OH)₂ ở nhiệt độ thường tạo phức chất màu xanh lam thẫm.',
        '<strong>Tính khử:</strong> <br>• Saccharose không tham gia phản ứng tráng bạc, không khử Cu(OH)₂ khi đun nóng, không làm mất màu nước bromine. <br>• Maltose tham gia phản ứng tráng bạc (1 mol maltose cho 2 mol Ag) và khử Cu(OH)₂/NaOH đun nóng tạo Cu₂O đỏ gạch.',
        '<strong>Phản ứng thủy phân (tính chất chung của disaccharide):</strong> <br>• Thủy phân saccharose: <code>C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose) (H⁺, t° hoặc enzyme invertase)</code>. Sau khi thủy phân, dung dịch thu được có khả năng tham gia phản ứng tráng bạc (1 mol saccharose thủy phân sinh ra 1 mol glucose + 1 mol fructose → tráng gương tạo tối đa 4 mol Ag). <br>• Thủy phân maltose: <code>C₁₂H₂₂O₁₁ + H₂O → 2C₆H₁₂O₆ (Glucose) (H⁺, t° hoặc enzyme maltase)</code>.'
      ]
    },
    {
      heading: '3. Trạng thái tự nhiên, sản xuất và ứng dụng',
      items: [
        '<strong>Trạng thái tự nhiên:</strong> Saccharose có nhiều trong cây mía (13–15%), củ cải đường (16–17%) và hoa thốt nốt. Maltose có nhiều trong mầm lúa mạch, mật tinh bột.',
        '<strong>Quy trình sản xuất đường mía từ cây mía:</strong> Ép mía lấy nước → Làm sạch tạp chất bằng vôi tôi Ca(OH)₂ và khí SO₂ → Lọc lấy nước đường trong → Cô đặc dung dịch dưới áp suất giảm để kết tinh đường → Ly tâm tách mật rỉ đường thu được đường cát trắng.',
        '<strong>Ứng dụng:</strong> Là chất tạo ngọt thiết yếu trong thực phẩm, bánh kẹo, đồ uống; nguyên liệu pha chế thuốc siro trong y học; nguyên liệu sản xuất ethanol và tráng gương ruột phích.'
      ]
    }
  ],

  6: [
    {
      heading: '1. Cấu trúc đại phân tử của Tinh bột và Cellulose',
      items: [
        'Tinh bột và cellulose đều là polysaccharide có công thức phân tử dạng <strong>(C₆H₁₀O₅)ₙ</strong>, nhưng chúng <strong>không phải là đồng phân của nhau</strong> vì hệ số polymer hóa n rất khác nhau (n của cellulose lớn hơn rất nhiều so với tinh bột).',
        '<strong>Tinh bột:</strong> Gồm hai phân đoạn polymer: <br>• <em>Amylose (chiếm 20–30%):</em> Các gốc α-glucose liên kết qua liên kết <strong>α-1,4-glycoside</strong> tạo thành chuỗi polymer không phân nhánh, cuộn lại thành hình xoắn lò xo. <br>• <em>Amylopectin (chiếm 70–80%):</em> Các gốc α-glucose liên kết qua liên kết <strong>α-1,4-glycoside</strong> (mạch chính) và <strong>α-1,6-glycoside</strong> (tạo các điểm phân nhánh cách nhau 24–30 mắt xích).',
        '<strong>Cellulose:</strong> Là polymer mạch kéo dài không phân nhánh gồm nhiều gốc <strong>β-glucose</strong> liên kết với nhau qua liên kết <strong>β-1,4-glycoside</strong>. Các chuỗi cellulose nằm song song và liên kết chặt chẽ với nhau bằng vô số liên kết hydrogen liên phân tử tạo thành các sợi vi thể (microfibril) vô cùng bền chắc.'
      ]
    },
    {
      heading: '2. Tính chất vật lí và tính chất hóa học đặc trưng',
      items: [
        '<strong>Tính chất vật lí:</strong> <br>• Tinh bột: Chất rắn vô định hình màu trắng, không tan trong nước lạnh; trong nước nóng (trên 65°C) hạt tinh bột ngậm nước trương phồng tạo thành dung dịch keo nhớt gọi là hồ tinh bột. <br>• Cellulose: Chất rắn dạng sợi màu trắng, không mùi, không vị, không tan trong nước và các dung môi hữu cơ thông thường (cồn, ether, benzene), nhưng tan trong dung dịch Schweitzer (hỗn hợp Cu(OH)₂ trong NH₃ đậm đặc).',
        '<strong>Phản ứng màu của hồ tinh bột với Iodine (I₂):</strong> Phân tử iodine chui vào trong lòng xoắn lò xo của phân tử amylose tạo thành hợp chất bọc có <strong>màu xanh tím đặc trưng</strong>. Khi đun nóng, vòng xoắn duỗi ra làm mất màu; để nguội, vòng xoắn co lại màu xanh tím xuất hiện trở lại (dùng để nhận biết tinh bột và iodine).',
        '<strong>Phản ứng thủy phân:</strong> Cả tinh bột và cellulose đều bị thủy phân hoàn toàn trong môi trường acid vô cơ đun nóng hoặc nhờ xúc tác enzyme sinh ra glucose: <br><code>(C₆H₁₀O₅)ₙ + nH₂O → nC₆H₁₂O₆ (Glucose) (H⁺, t°)</code>',
        '<strong>Phản ứng ester hóa của Cellulose:</strong> Mỗi mắt xích C₆H₁₀O₅ của cellulose chứa 3 nhóm –OH tự do, viết là <code>[C₆H₇O₂(OH)₃]ₙ</code>: <br>• Tác dụng với HNO₃ đặc (xúc tác H₂SO₄ đặc đun nóng) tạo cellulose trinitrate dùng làm thuốc súng không khói: <br><code>[C₆H₇O₂(OH)₃]ₙ + 3nHNO₃ → [C₆H₇O₂(ONO₂)₃]ₙ + 3nH₂O (H₂SO₄ đ, t°)</code> <br>• Tác dụng với acetic anhydride (CH₃CO)₂O tạo cellulose acetate dùng sản xuất tơ axetat và phim ảnh không cháy.'
      ]
    },
    {
      heading: '3. Vai trò sinh học và ứng dụng công nghiệp',
      items: [
        '<strong>Vai trò của tinh bột:</strong> Là nguồn dự trữ năng lượng chính ở thực vật (hạt ngũ cốc, củ, quả); là nguồn lương thực thiết yếu nhất nuôi sống con người; nguyên liệu sản xuất cồn sinh học (bio-ethanol), mạch nha, hồ dán.',
        '<strong>Vai trò của cellulose:</strong> Là thành phần cấu trúc tạo nên màng tế bào thực vật, tạo bộ khung vững chắc cho cây cối (gỗ chứa 40–50% cellulose, sợi bông nõn chứa gần 98% cellulose).',
        '<strong>Ứng dụng của cellulose:</strong> Sản xuất giấy, bìa carton; dệt vải may mặc (sợi bông, sợi đay, lanh); sản xuất tơ nhân tạo (tơ visco, tơ axetat); chế tạo vật liệu xây dựng và đồ gỗ nội thất.'
      ]
    }
  ],

  7: [
    {
      heading: '1. Sơ đồ tư duy hệ thống hóa Carbohydrate (Mono – Di – Polysaccharide)',
      items: [
        '<strong>Mối quan hệ chuyển hóa:</strong> <br><code>CO₂ + H₂O → (Quang hợp) → Tinh bột / Cellulose → (Thủy phân) → Maltose / Cellobiose → (Thủy phân) → Glucose → (Lên men) → Ethanol</code>',
        '<strong>Phân loại theo cấu trúc gốc monome:</strong> <br>• Monosaccharide: Glucose (α và β), Fructose. <br>• Disaccharide: Saccharose (α-glucose + β-fructose), Maltose (α-glucose + α-glucose). <br>• Polysaccharide: Tinh bột (α-glucose), Cellulose (β-glucose).',
        '<strong>Phân loại theo tính khử:</strong> <br>• Đường khử (tráng bạc, khử Cu(OH)₂): Glucose, Fructose, Maltose. <br>• Đường không khử (không tráng bạc trực tiếp): Saccharose, Tinh bột, Cellulose.'
      ]
    },
    {
      heading: '2. Bảng so sánh tính chất và phản ứng định tính nhận biết',
      items: [
        '<strong>Hòa tan Cu(OH)₂ tạo dung dịch xanh lam thẫm ở nhiệt độ thường:</strong> Glucose, Fructose, Saccharose, Maltose (đều có nhiều nhóm –OH kề nhau). Tinh bột và cellulose không hòa tan được Cu(OH)₂.',
        '<strong>Phản ứng tráng bạc với thuốc thử Tollens:</strong> Glucose, Fructose, Maltose sinh kết tủa bạc sáng loáng. Saccharose chỉ tráng bạc sau khi đã được thủy phân trong môi trường acid.',
        '<strong>Phản ứng với nước Bromine (Br₂):</strong> Glucose làm mất màu nước bromine; Fructose không làm mất màu nước bromine (thuốc thử đặc hiệu phân biệt Glucose và Fructose).',
        '<strong>Phản ứng với dung dịch Iodine (I₂):</strong> Duy nhất hồ tinh bột cho phức hợp màu xanh tím đặc trưng.'
      ]
    },
    {
      heading: '3. Phương pháp giải bài tập tính toán trọng tâm',
      items: [
        '<strong>Bài toán tráng bạc:</strong> <br>• 1 mol Glucose / Fructose / Maltose → 2 mol Ag. <br>• 1 mol Saccharose sau khi thủy phân hoàn toàn → 1 mol Glucose + 1 mol Fructose → sinh tối đa 4 mol Ag.',
        '<strong>Bài toán lên men rượu:</strong> <code>C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂</code> (chú ý nhân hiệu suất H% khi tính sản phẩm, hoặc chia H% khi tính nguyên liệu ban đầu).',
        '<strong>Bài toán cellulose tác dụng với HNO₃:</strong> Cứ 1 mol mắt xích cellulose (162g) tác dụng với 3 mol HNO₃ (189g) tạo 1 mol cellulose trinitrate (297g). Độ tăng khối lượng: <code>Δm = 297 − 162 = 135n</code>.'
      ]
    }
  ],

  8: [
    {
      heading: '1. Khái niệm, phân loại, đồng phân và danh pháp Amine',
      items: [
        '<strong>Khái niệm:</strong> Amine là hợp chất hữu cơ được tạo ra khi thay thế một, hai hoặc cả ba nguyên tử hydrogen trong phân tử ammonia (NH₃) bằng các gốc hydrocarbon.',
        '<strong>Bậc của amine:</strong> Bằng số nguyên tử hydrogen trong phân tử NH₃ được thay thế bằng gốc hydrocarbon: <br>• Amine bậc 1: <strong>R–NH₂</strong> (ví dụ: CH₃NH₂, C₆H₅NH₂). <br>• Amine bậc 2: <strong>R–NH–R′</strong> (ví dụ: CH₃–NH–CH₃). <br>• Amine bậc 3: <strong>R–N(R′)–R″</strong> (ví dụ: (CH₃)₃N). <br><em>(Lưu ý: Bậc amine khác hoàn toàn với bậc của alcohol/dẫn xuất halogen vốn tính theo bậc của nguyên tử carbon mang nhóm chức).</em>',
        '<strong>Danh pháp:</strong> <br>• <em>Tên gốc - chức:</em> Tên gốc hydrocarbon + từ "amine". Ví dụ: CH₃NH₂ (methylamine); C₂H₅NH₂ (ethylamine); (CH₃)₂NH (dimethylamine); (CH₃)₃N (trimethylamine). <br>• <em>Tên thay thế (IUPAC):</em> Tên hydrocarbon tương ứng + vị trí + "amine". Ví dụ: CH₃CH(NH₂)CH₃ (propan-2-amine). <br>• <em>Tên thông thường:</em> C₆H₅NH₂ (aniline).',
        '<strong>Đồng phân:</strong> Amine có đồng phân về mạch carbon, đồng phân vị trí nhóm amine và đồng phân về bậc amine.'
      ]
    },
    {
      heading: '2. Tính chất vật lí và tính chất hóa học đặc trưng',
      items: [
        '<strong>Tính chất vật lí:</strong> Methylamine, dimethylamine, trimethylamine và ethylamine là chất khí ở điều kiện thường, có mùi khai khó chịu tương tự ammonia, độc và tan rất nhiều trong nước. Các amine có phân tử khối cao hơn là chất lỏng hoặc rắn. Aniline (C₆H₅NH₂) là chất lỏng không màu, sôi ở 184°C, ít tan trong nước, nặng hơn nước, để lâu trong không khí bị oxy hóa chuyển sang màu nâu đen.',
        '<strong>Tính base của amine:</strong> Do nguyên tử nitrogen còn một cặp electron chưa liên kết, có khả năng nhận proton H⁺: <br><code>R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻</code> <br>• So sánh lực base: <strong>Alkylamine bậc 2 &gt; Alkylamine bậc 1 &gt; NH₃ &gt; Aniline (C₆H₅NH₂)</strong>. <br>• Các alkylamine làm quỳ tím chuyển xanh và phenolphthalein chuyển hồng. Aniline có tính base rất yếu (do gốc phenyl –C₆H₅ hút e làm giảm mật độ electron trên N) nên <em>không làm đổi màu quỳ tím</em>.',
        '<strong>Tác dụng với acid:</strong> Tạo thành muối amoni: <code>CH₃NH₂ + HCl → CH₃NH₃Cl (methylammonium chloride)</code>; <code>C₆H₅NH₂ + HCl → C₆H₅NH₃Cl (anilinium chloride)</code>. Muối amoni tan tốt trong nước.',
        '<strong>Phản ứng thế ở nhân thơm của Aniline:</strong> Nhóm –NH₂ kích hoạt nhân thơm ở các vị trí ortho và para. Nhỏ nước bromine vào dung dịch aniline xuất hiện ngay <strong>kết tủa trắng 2,4,6-tribromoaniline</strong> (dùng để nhận biết aniline): <br><code>C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂↓ (trắng) + 3HBr</code>'
      ]
    },
    {
      heading: '3. Phương pháp điều chế và ứng dụng',
      items: [
        '<strong>Điều chế:</strong> <br>• Khử hợp chất nitro bằng kim loại (Fe, Zn) trong dung dịch HCl: <code>C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O (Fe + HCl, t°)</code>. <br>• Alkyl hóa ammonia bằng dẫn xuất halogen: <code>NH₃ + RX → RNH₂ + HX</code>.',
        '<strong>Ứng dụng:</strong> Aniline và các dẫn xuất amine là nguyên liệu cực kỳ quan trọng trong ngành công nghiệp sản xuất phẩm nhuộm azo (nhuộm vải sợi), dược phẩm (thuốc sulfamide, paracetamol), thuốc trừ sâu và vật liệu polymer tổng hợp.'
      ]
    }
  ],

  9: [
    {
      heading: '1. Khái niệm, cấu tạo và danh pháp Amino acid',
      items: [
        '<strong>Khái niệm:</strong> Amino acid là loại hợp chất hữu cơ tạp chức mà phân tử chứa đồng thời nhóm amino (–NH₂) mang tính base và nhóm carboxyl (–COOH) mang tính acid. Công thức chung: <strong>(H₂N)ₓ–R–(COOH)ᵧ</strong>.',
        'Các amino acid tham gia cấu tạo protein trong cơ thể sinh vật đều là các <strong>α-amino acid</strong> (nhóm –NH₂ gắn trực tiếp vào nguyên tử carbon số 2, tức carbon alpha ngay sát nhóm –COOH): <code>R–CH(NH₂)–COOH</code>.',
        '<strong>5 Amino acid tiêu biểu cần nắm vững:</strong> <br>1. <em>Glycine (Gly):</em> H₂N–CH₂–COOH (M = 75, 1 NH₂, 1 COOH). <br>2. <em>Alanine (Ala):</em> CH₃–CH(NH₂)–COOH (M = 89, 1 NH₂, 1 COOH). <br>3. <em>Valine (Val):</em> (CH₃)₂CH–CH(NH₂)–COOH (M = 117, 1 NH₂, 1 COOH). <br>4. <em>Glutamic acid (Glu):</em> HOOC–CH₂–CH₂–CH(NH₂)–COOH (M = 147, 1 NH₂, 2 COOH). <br>5. <em>Lysine (Lys):</em> H₂N–(CH₂)₄–CH(NH₂)–COOH (M = 146, 2 NH₂, 1 COOH).',
        '<strong>Cấu trúc ion lưỡng cực:</strong> Trong tinh thể và dung dịch, nhóm –COOH cho proton H⁺ sang nhóm –NH₂ tạo thành <strong>ion lưỡng cực H₃N⁺–CH(R)–COO⁻</strong>. Do đó amino acid tồn tại dạng tinh thể rắn không màu, nhiệt độ nóng chảy rất cao và tan tốt trong nước.'
      ]
    },
    {
      heading: '2. Tính chất hóa học lưỡng tính và tính chất acid - base',
      items: [
        '<strong>Tính chất lưỡng tính (amphoteric):</strong> Vừa tác dụng với acid mạnh, vừa tác dụng với base mạnh: <br>• Tác dụng với HCl: <code>H₂N–CH₂–COOH + HCl → ClH₃N–CH₂–COOH</code> <br>• Tác dụng với NaOH: <code>H₂N–CH₂–COOH + NaOH → H₂N–CH₂–COONa + H₂O</code>',
        '<strong>Sự biến đổi màu quỳ tím của dung dịch amino acid:</strong> <br>• Khi số nhóm –NH₂ = số nhóm –COOH (Gly, Ala, Val): Dung dịch trung tính, <strong>không làm đổi màu quỳ tím</strong>. <br>• Khi số nhóm –COOH &gt; số nhóm –NH₂ (Glutamic acid: 1 NH₂, 2 COOH): Dung dịch có tính acid yếu, <strong>làm quỳ tím chuyển màu đỏ hồng</strong>. <br>• Khi số nhóm –NH₂ &gt; số nhóm –COOH (Lysine: 2 NH₂, 1 COOH): Dung dịch có tính base yếu, <strong>làm quỳ tím chuyển sang màu xanh</strong>.',
        '<strong>Phản ứng ester hóa:</strong> Nhóm –COOH của amino acid phản ứng với alcohol có mặt khí HCl bão hòa tạo ester: <code>H₂N–CH₂–COOH + C₂H₅OH ⇌ H₂N–CH₂–COOC₂H₅ + H₂O (HCl khí, t°)</code>.'
      ]
    },
    {
      heading: '3. Khái niệm và cấu trúc của Peptide',
      items: [
        '<strong>Khái niệm liên kết peptide:</strong> Liên kết giữa nhóm –CO– và nhóm –NH– giữa hai đơn vị α-amino acid được gọi là <strong>liên kết peptide</strong>: <code>–CO–NH–</code>.',
        '<strong>Peptide:</strong> Là những hợp chất chứa từ 2 đến 50 gốc α-amino acid liên kết với nhau bằng các liên kết peptide. Phân tử chứa 2 gốc α-amino acid gọi là dipeptide (chứa 1 liên kết peptide), 3 gốc gọi là tripeptide (chứa 2 liên kết peptide), từ 11 đến 50 gốc gọi là polypeptide.',
        '<strong>Đầu amino acid:</strong> Phân tử peptide luôn có một đầu chứa nhóm –NH₂ tự do (gọi là <em>đầu N</em>) và một đầu chứa nhóm –COOH tự do (gọi là <em>đầu C</em>). Quy ước viết trình tự peptide từ đầu N sang đầu C (ví dụ: Gly–Ala khác với Ala–Gly).'
      ]
    }
  ],

  10: [
    {
      heading: '1. Cấu trúc và phân loại Protein',
      items: [
        '<strong>Khái niệm Protein (đạm):</strong> Là những đại phân tử sinh học phức tạp được cấu tạo từ một hay nhiều chuỗi polypeptide gồm trên 50 gốc α-amino acid liên kết với nhau bằng liên kết peptide, có phân tử khối rất lớn từ hàng chục nghìn đến hàng triệu Da.',
        '<strong>Phân loại gồm hai nhóm:</strong> <br>• <em>Protein đơn giản:</em> Chỉ được tạo thành từ các gốc α-amino acid (như albumin trong lòng trắng trứng, fibroin trong tơ tằm, keratin trong tóc, móng). <br>• <em>Protein phức tạp:</em> Được tạo thành từ protein đơn giản kết hợp với thành phần phi protein (như hemoglobin chứa ion Fe²⁺, nucleoprotein chứa acid nucleic).',
        '<strong>Bốn bậc cấu trúc của Protein:</strong> <br>• <em>Bậc 1:</em> Trình tự sắp xếp các gốc α-amino acid trong chuỗi polypeptide liên kết cộng hóa trị peptide. <br>• <em>Bậc 2:</em> Chuỗi polypeptide cuộn lại thành dạng xoắn α hoặc gấp nếp β nhờ các liên kết hydrogen. <br>• <em>Bậc 3:</em> Cấu trúc không gian ba chiều đặc thù của toàn bộ chuỗi polypeptide cuộn gập lại. <br>• <em>Bậc 4:</em> Sự phối hợp của hai hay nhiều chuỗi polypeptide có cấu trúc bậc 3 tạo thành một phức hệ hoạt động hoàn chỉnh (như Hemoglobin gồm 4 chuỗi polypeptide).'
      ]
    },
    {
      heading: '2. Tính chất vật lí và tính chất hóa học của Protein',
      items: [
        '<strong>Tính chất vật lí và Hiện tượng Đông tụ (Denaturation):</strong> <br>• Dạng sợi (keratin, myosin) không tan trong nước; dạng hình cầu (albumin, hemoglobin) tan trong nước tạo dung dịch keo. <br>• <em>Sự đông tụ:</em> Khi đun nóng hoặc cho thêm acid, base, muối kim loại nặng (Cu²⁺, Pb²⁺, Hg²⁺) hay alcohol vào, các liên kết hydro và lực yếu giữ cấu trúc bậc 2, 3, 4 bị phá vỡ, làm protein kết tủa và mất hoạt tính sinh học ban đầu (ví dụ: luộc trứng lòng trắng bị đông đặc, nấu canh cua riêu cua đóng mảng nổi lên trên).',
        '<strong>Phản ứng thủy phân:</strong> Dưới tác dụng của acid, base hoặc enzyme protease, protein bị thủy phân từng bước thành các chuỗi peptide ngắn hơn và cuối cùng thành hỗn hợp các α-amino acid.',
        '<strong>Phản ứng màu đặc trưng:</strong> <br>• <em>Phản ứng màu Biuret:</em> Protein (và mọi peptide có từ 2 liên kết peptide trở lên, tức từ tripeptide) tác dụng với Cu(OH)₂ trong môi trường kiềm tạo phức chất màu tím đặc trưng. <br>• <em>Phản ứng Xanthoproteic:</em> Protein chứa các gốc amino acid có vòng benzene (như phenylalanine, tyrosine) tác dụng với dung dịch HNO₃ đặc tạo kết tủa màu vàng (chuyển sang màu cam khi thêm kiềm; giải thích hiện tượng dây acid nitric vào da tay bị vàng).'
      ]
    },
    {
      heading: '3. Khái niệm, cơ chế tác dụng và vai trò của Enzyme',
      items: [
        '<strong>Khái niệm Enzyme:</strong> Là những chất xúc tác sinh học hầu hết có bản chất là protein, do các tế bào sống sản sinh ra để xúc tác cho các phản ứng hóa học trong cơ thể.',
        '<strong>Đặc điểm vượt trội của xúc tác enzyme:</strong> <br>• <em>Hiệu lực xúc tác cực lớn:</em> Tăng tốc độ phản ứng lên hàng triệu đến hàng tỷ lần so với chất xúc tác vô cơ ở cùng điều kiện thường (nhiệt độ cơ thể ~37°C, pH sinh lí). <br>• <em>Tính chọn lọc rất cao (đặc hiệu):</em> Mỗi enzyme chỉ xúc tác cho một chuyển hóa duy nhất hoặc một kiểu phản ứng nhất định trên một cơ chất cụ thể (theo mô hình "ổ khóa và chìa khóa" - Lock and Key).',
        '<strong>Ứng dụng:</strong> Dùng trong công nghiệp thực phẩm (lên men bánh mì, nấu bia, sản xuất phô mai), công nghiệp dệt nhuộm, sản xuất bột giặt sinh học có chứa enzyme phân giải protein và chất béo, và xét nghiệm y học.'
      ]
    }
  ],

  11: [
    {
      heading: '1. Tổng kết kiến thức Chương 3: Hợp chất chứa Nitrogen',
      items: [
        '<strong>Mối quan hệ phát triển cấu trúc:</strong> <br><code>Ammonia (NH₃) → Amine (R–NH₂) → Amino acid (H₂N–R–COOH) → Peptide (–CO–NH–) → Protein (chuỗi polypeptide bậc cao)</code>',
        '<strong>Đặc điểm phản ứng cốt lõi:</strong> <br>• Amine: Có tính base do cặp electron chưa liên kết trên N. <br>• Amino acid: Lưỡng tính do đồng thời chứa –NH₂ (base) và –COOH (acid), tồn tại dạng ion lưỡng cực. <br>• Peptide & Protein: Có liên kết peptide bền nhưng dễ bị thủy phân; từ tripeptide trở lên có phản ứng màu biuret.'
      ]
    },
    {
      heading: '2. Bảng so sánh tính chất và các phản ứng định tính nhận biết',
      items: [
        '<strong>Đổi màu quỳ tím:</strong> <br>• Chuyển xanh: Methylamine, ethylamine, dimethylamine, lysine. <br>• Chuyển đỏ hồng: Glutamic acid. <br>• Không đổi màu: Aniline, glycine, alanine, valine.',
        '<strong>Tạo kết tủa trắng với nước Bromine:</strong> Aniline (C₆H₅NH₂) và Phenol (C₆H₅OH).',
        '<strong>Tạo dung dịch phức màu tím với Cu(OH)₂/NaOH:</strong> Tripeptide trở lên và Protein (phản ứng biuret). Chú ý: Dipeptide không cho phản ứng này.',
        '<strong>Tạo màu vàng với HNO₃ đặc:</strong> Protein có chứa gốc amino acid mang vòng thơm (phản ứng xanthoproteic).'
      ]
    },
    {
      heading: '3. Phương pháp giải bài toán Amino acid & Peptide',
      items: [
        '<strong>Bài toán Amino acid tác dụng nối tiếp với HCl và NaOH:</strong> Xem như hỗn hợp ban đầu gồm amino acid và HCl cùng tác dụng đồng thời với NaOH: <br><code>n_NaOH = n_COOH + n_HCl</code> và <code>n_H₂O = n_COOH + n_HCl</code>.',
        '<strong>Bài toán thủy phân hoàn toàn Peptide cấu tạo từ α-amino acid có 1 NH₂ và 1 COOH:</strong> <br>• Thủy phân bằng dung dịch NaOH: <code>Peptide n-peptit + n NaOH → n Muối + 1 H₂O</code> (luôn luôn chỉ sinh ra 1 mol H₂O theo số mol peptide). <br>• Thủy phân bằng dung dịch HCl: <code>Peptide n-peptit + (n−1) H₂O + n HCl → Muối ClH₃N–R–COOH</code>.',
        '<strong>Bảo toàn khối lượng:</strong> <br><code>m_peptide + m_NaOH = m_muối + m_H₂O</code> (chú ý tính đúng số mol H₂O sinh ra).'
      ]
    }
  ],

  12: [
    {
      heading: '1. Khái niệm, danh pháp và cấu trúc phân tử Polymer',
      items: [
        '<strong>Khái niệm Polymer:</strong> Là những hợp chất có phân tử khối rất lớn (từ hàng nghìn đến hàng triệu Da) do nhiều đơn vị nhỏ gọi là <em>mắt xích</em> liên kết với nhau tạo nên. Hợp chất ban đầu tạo ra polymer gọi là <em>monomer</em>.',
        'Công thức khái quát: <strong>(–M–)ₙ</strong>, trong đó M là mắt xích, n là hệ số polymer hóa (độ trùng hợp).',
        '<strong>Danh pháp:</strong> Thêm từ <strong>poly</strong> vào trước tên của monomer tương ứng. Nếu tên monomer gồm 2 từ trở lên thì đặt trong ngoặc đơn. Ví dụ: poly(vinyl chloride) (PVC), polyethylene (PE), polyacrylonitrile (tơ nitron). Một số polymer có tên thông thường riêng: Teflon (PTFE), nylon-6, nilon-6,6.',
        '<strong>Ba dạng cấu trúc mạch polymer:</strong> <br>• <em>Mạch không phân nhánh:</em> Amylose, PE, PVC, cellulose, poly(ethylene terephthalate). <br>• <em>Mạch phân nhánh:</em> Amylopectin, glycogen. <br>• <em>Mạng không gian 3 chiều:</em> Cao su lưu hóa (cầu nối disunfide –S–S–), nhựa bakelite (nhựa rezit).'
      ]
    },
    {
      heading: '2. Tính chất vật lí và tính chất hóa học chung của Polymer',
      items: [
        '<strong>Tính chất vật lí:</strong> Hầu hết polymer ở nhiệt độ thường là chất rắn, không bay hơi, không có nhiệt độ nóng chảy xác định (nóng chảy trong một khoảng nhiệt độ khá rộng). Đa số polymer không tan trong nước và các dung môi thông thường; một số tan được trong dung môi hữu cơ tương ứng. Nhiều polymer có tính dẻo, tính đàn hồi, cách điện, cách nhiệt tốt, bền với acid và base.',
        '<strong>Phản ứng giữ nguyên mạch polymer:</strong> Các nhóm thế trên mạch polymer tham gia phản ứng mà không làm gãy mạch carbon chính. Ví dụ: Poly(vinyl acetate) bị thủy phân thành poly(vinyl alcohol); lưu hóa cao su tạo cầu nối –S–S–.',
        '<strong>Phản ứng cắt mạch polymer:</strong> Mạch chính polymer bị bẻ gãy thành các đoạn ngắn hơn hoặc thành monomer ban đầu. Ví dụ: Phản ứng giải trùng hợp (depolymerization) của plexiglas ở nhiệt độ cao; phản ứng thủy phân tinh bột, cellulose, tơ nilon trong môi trường acid hoặc kiềm.',
        '<strong>Phản ứng tăng mạch polymer:</strong> Các mạch polymer liên kết lại với nhau tạo thành mạng không gian 3 chiều (lưu hóa cao su bằng lưu huỳnh, khâu mạch nhựa rezol thành rezit).'
      ]
    },
    {
      heading: '3. Các phương pháp tổng hợp Polymer (Trùng hợp và Trùng ngưng)',
      items: [
        '<strong>Phản ứng trùng hợp (Addition polymerization):</strong> Là quá trình kết hợp nhiều phân tử nhỏ (monomer) giống nhau hoặc tương tự nhau thành phân tử rất lớn (polymer) <em>mà không giải phóng chất phụ nào khác</em>. <br>• <em>Điều kiện của monomer:</em> Phân tử phải có <strong>liên kết đôi C=C</strong> (CH₂=CH₂, CH₂=CH–Cl, CH₂=CH–C₆H₅) hoặc <strong>vòng kém bền</strong> (caprolactam). <br>• <em>Ví dụ:</em> <code>nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (PE)</code>.',
        '<strong>Phản ứng trùng ngưng (Condensation polymerization):</strong> Là quá trình kết hợp nhiều phân tử nhỏ (monomer) thành phân tử rất lớn (polymer) <em>đồng thời giải phóng những phân tử nhỏ khác (chủ yếu là nước H₂O)</em>. <br>• <em>Điều kiện của monomer:</em> Phân tử phải có <strong>ít nhất 2 nhóm chức hoạt động</strong> có khả năng phản ứng với nhau (–COOH và –OH; –COOH và –NH₂; hoặc –OH và –OH). <br>• <em>Ví dụ:</em> Trùng ngưng ε-aminocaproic acid tạo tơ nylon-6: <br><code>nH₂N–(CH₂)₅–COOH → [–NH–(CH₂)₅–CO–]ₙ + nH₂O (t°)</code>.'
      ]
    }
  ],

  13: [
    {
      heading: '1. Chất dẻo và Vật liệu Composite',
      items: [
        '<strong>Chất dẻo:</strong> Là những vật liệu polymer có tính dẻo (tính chất bị biến dạng khi chịu tác dụng của nhiệt, áp lực bên ngoài và giữ nguyên được biến dạng đó khi thôi tác dụng).',
        '<strong>Các chất dẻo thông dụng:</strong> <br>• <em>Polyethylene (PE):</em> Trùng hợp ethylene, dùng làm màng bọc nilon, túi đựng, chai lọ mềm dẻo. <br>• <em>Poly(vinyl chloride) (PVC):</em> Trùng hợp vinyl chloride, dùng làm ống dẫn nước, vỏ bọc dây điện, áo mưa, da nhân tạo. <br>• <em>Poly(methyl methacrylate) (Plexiglas / Thủy tinh hữu cơ):</em> Trùng hợp methyl methacrylate, trong suốt cho ánh sáng truyền qua gần 90%, bền cơ học, không vỡ vụn, dùng làm kính máy bay, kính bảo hộ, răng giả. <br>• <em>Nhựa Phenol - Formaldehyde (PPF):</em> Đun nóng phenol với formaldehyde có xúc tác acid/kiềm tạo nhựa novolac, rezol và rezit (nhựa bakelite mạng không gian làm vỏ công tắc điện, vỏ thiết bị điện tử chịu nhiệt).',
        '<strong>Vật liệu Composite:</strong> Là vật liệu tổ hợp gồm ít nhất hai pha không tan vào nhau: <em>pha nền</em> (chất dẻo) liên tục và <em>pha gia cường</em> (sợi thủy tinh, sợi carbon) phân tán, tạo ra vật liệu mới nhẹ hơn thép nhưng có độ bền cơ học và chịu nhiệt vượt trội.'
      ]
    },
    {
      heading: '2. Tơ thiên nhiên, Tơ tổng hợp và Tơ bán tổng hợp',
      items: [
        '<strong>Khái niệm Tơ:</strong> Là những vật liệu polymer hình sợi dài, mảnh, có độ bền kéo đứt nhất định, mềm dai và không độc.',
        '<strong>Phân loại tơ:</strong> <br>• <strong>Tơ thiên nhiên:</strong> Bông nõn, đay, gai (cellulose); tơ tằm, len cừu (protein). <br>• <strong>Tơ hóa học:</strong> Gồm tơ tổng hợp và tơ bán tổng hợp: <br>&nbsp;&nbsp;&nbsp;&nbsp;+ <em>Tơ bán tổng hợp (tơ nhân tạo):</em> Đi từ polymer thiên nhiên chế hóa thêm bằng hóa chất. Tiêu biểu: <strong>Tơ visco</strong> (cellulose phản ứng với CS₂ và NaOH) và <strong>Tơ axetat</strong> (cellulose phản ứng với acetic anhydride). <br>&nbsp;&nbsp;&nbsp;&nbsp;+ <em>Tơ tổng hợp:</em> Đi từ các monome tổng hợp hóa dầu. Tiêu biểu: <strong>Tơ polyamide</strong> (nylon-6, nylon-6,6 có chứa liên kết –CO–NH– kém bền trong acid và kiềm) và <strong>Tơ vinylic</strong> (tơ nitron/olon dệt áo ấm giữ nhiệt tốt, tơ clorin).'
      ]
    },
    {
      heading: '3. Cao su thiên nhiên, Cao su tổng hợp và Keo dán',
      items: [
        '<strong>Khái niệm Cao su:</strong> Là vật liệu polymer có <em>tính đàn hồi</em> (khả năng tự biến dạng dưới tác dụng của ngoại lực và nhanh chóng trở lại hình dạng ban đầu khi thôi tác dụng).',
        '<strong>Cao su thiên nhiên:</strong> Lấy từ mủ cây cao su (Hevea brasiliensis), là polymer của isoprene có cấu hình <strong>cis-1,4-polyisoprene</strong>: <code>[–CH₂–C(CH₃)=CH–CH₂–]ₙ</code>.',
        '<strong>Lưu hóa cao su:</strong> Đun nóng cao su sống với lưu huỳnh ở 130–150°C. Lưu huỳnh cộng vào các liên kết đôi C=C tạo thành các cầu nối <strong>–S–S–</strong> nối các mạch polymer thẳng thành mạng không gian 3 chiều. Cao su lưu hóa có độ đàn hồi, độ bền kéo, chịu nhiệt và chống mài mòn cao hơn gấp nhiều lần cao su thô.',
        '<strong>Các loại cao su tổng hợp:</strong> Cao su Buna (trùng hợp buta-1,3-diene), cao su Buna-S (đồng trùng hợp buta-1,3-diene với styrene), cao su Buna-N (đồng trùng hợp buta-1,3-diene với acrylonitrile có tính chống dầu mỡ cao).'
      ]
    }
  ],

  14: [
    {
      heading: '1. Sơ đồ hệ thống hóa các loại Vật liệu Polymer',
      items: [
        '<strong>Bốn nhóm vật liệu polymer chính:</strong> <br>1. Chất dẻo (PE, PP, PVC, PS, PMMA, Teflon, PPF). <br>2. Tơ sợi (Tơ thiên nhiên, tơ tổng hợp nilon/nitron, tơ bán tổng hợp visco/axetat). <br>3. Cao su (Cao su thiên nhiên cis-isoprene, cao su tổng hợp Buna, Buna-S, Buna-N). <br>4. Keo dán tổng hợp (Keo epoxy, keo dán dính urea-formaldehyde).',
        '<strong>Phân loại tơ theo bản chất hóa học:</strong> <br>• Tơ polyamide (chứa liên kết –CO–NH–): Nilon-6, nilon-7, nilon-6,6. <br>• Tơ polyester (chứa liên kết –COO–): Tơ lapsan. <br>• Tơ vinylic (chứa liên kết C–C): Tơ nitron (olon).'
      ]
    },
    {
      heading: '2. Phân biệt cơ chế phản ứng Trùng hợp vs Trùng ngưng',
      items: [
        '<strong>Trùng hợp:</strong> Monomer phải chứa liên kết đôi C=C hoặc vòng kém bền; không có phân tử nhỏ tách ra; khối lượng phân tử polymer bằng đúng tổng khối lượng các monomer tham gia: <code>M_polymer = n × M_monomer</code>.',
        '<strong>Trùng ngưng:</strong> Monomer phải chứa ít nhất 2 nhóm chức hoạt động khác nhau (–COOH, –OH, –NH₂); có phân tử nhỏ giải phóng (thường là H₂O); khối lượng phân tử polymer nhỏ hơn tổng khối lượng monomer do mất các phân tử nước.',
        '<strong>Ví dụ điển hình:</strong> Điều chế Nylon-6,6 bằng phản ứng trùng ngưng giữa hexamethylenediamine và adipic acid: <br><code>nH₂N–(CH₂)₆–NH₂ + nHOOC–(CH₂)₄–COOH → [–NH–(CH₂)₆–NHCO–(CH₂)₄–CO–]ₙ + 2nH₂O</code>'
      ]
    },
    {
      heading: '3. Ô nhiễm rác thải nhựa và các giải pháp Tái chế xanh',
      items: [
        '<strong>Tác hại của ô nhiễm trắng:</strong> Túi nilon và đồ nhựa dùng một lần rất khó phân hủy sinh học trong tự nhiên (mất từ 400 đến 1000 năm), tích tụ làm tắc nghẽn nguồn nước, phá hủy hệ sinh thái và phân rã thành các hạt <em>vi nhựa (microplastics)</em> xâm nhập vào chuỗi thức ăn con người gây nguy cơ ung thư.',
        '<strong>Giải pháp 3R (Reduce - Reuse - Recycle):</strong> Giảm thiểu tiêu dùng nhựa dùng một lần; tái sử dụng đồ nhựa; phân loại và tái chế nhựa cơ học hoặc hóa học.',
        '<strong>Phát triển nhựa sinh học tự phân hủy:</strong> Sản xuất các polymer sinh học có nguồn gốc từ tinh bột bắp, mía như <strong>PLA (poly(lactic acid))</strong> và PHA có khả năng phân hủy hoàn toàn thành CO₂ và H₂O nhờ vi sinh vật đất trong vài tháng.'
      ]
    }
  ],

  15: [
    {
      heading: '1. Cặp oxi hóa - khử của kim loại và Thế điện cực chuẩn',
      items: [
        '<strong>Khái niệm cặp oxi hóa - khử:</strong> Dạng oxi hóa và dạng khử của cùng một nguyên tố kim loại tạo nên cặp oxi hóa - khử, ký hiệu dạng <strong>Mⁿ⁺/M</strong>. Quá trình khử: <code>Mⁿ⁺ + ne⁻ ⇌ M</code>.',
        '<strong>Thế điện cực chuẩn E°(Mⁿ⁺/M):</strong> Là đại lượng đặc trưng cho khả năng oxi hóa của ion Mⁿ⁺ và khả năng khử của kim loại M ở điều kiện chuẩn (nồng độ ion 1 mol/L, nhiệt độ 25°C, áp suất 1 bar) so với điện cực hydrogen chuẩn được quy ước có thế bằng <strong>0,00 V</strong>.',
        '<strong>Ý nghĩa của dãy thế điện cực chuẩn:</strong> <br>• <em>Thế điện cực E° càng âm:</em> Dạng khử M càng có tính khử mạnh (dễ nhường e), dạng oxi hóa Mⁿ⁺ có tính oxi hóa càng yếu. Kim loại kiềm (Li, K, Na) có E° âm nhất. <br>• <em>Thế điện cực E° càng dương:</em> Dạng oxi hóa Mⁿ⁺ có tính oxi hóa càng mạnh (dễ nhận e), dạng khử M có tính khử càng yếu. Kim loại quý (Ag, Au) có E° dương nhất.',
        '<strong>Quy tắc Alpha (α):</strong> Chất oxi hóa mạnh hơn sẽ tác dụng với chất khử mạnh hơn sinh ra chất oxi hóa yếu hơn và chất khử yếu hơn: <br><code>Dạng oxi hóa có E° lớn hơn + Dạng khử có E° nhỏ hơn → Dạng khử mới + Dạng oxi hóa mới</code>.'
      ]
    },
    {
      heading: '2. Cấu tạo và nguyên tắc hoạt động của Pin Galvani (Pin điện hóa)',
      items: [
        '<strong>Bản chất:</strong> Pin điện hóa là thiết bị chuyển hóa <strong>hóa năng của phản ứng oxi hóa - khử tự diễn biến thành điện năng</strong> dòng điện một chiều.',
        '<strong>Cấu tạo Pin Daniell (Zn - Cu):</strong> Gồm hai nửa pin: <br>• Điện cực Kẽm (Zn) nhúng trong dung dịch ZnSO₄ 1M. <br>• Điện cực Đồng (Cu) nhúng trong dung dịch CuSO₄ 1M. <br>• Nối hai điện cực bằng dây dẫn có mắc vôn kế; nối hai dung dịch bằng một <em>cầu muối</em> (chứa dung dịch chất điện li trơ như KCl, KNO₃ bão hòa trong thạch agar để trung hòa điện tích).',
        '<strong>Quá trình xảy ra trên các điện cực:</strong> <br>• <strong>Cực âm (Anode):</strong> Xảy ra quá trình <em>oxi hóa</em> kẽm nhường electron: <code>Zn(s) → Zn²⁺(aq) + 2e⁻</code> (thanh Zn bị mòn dần). <br>• <strong>Cực dương (Cathode):</strong> Xảy ra quá trình <em>khử</em> ion đồng nhận electron: <code>Cu²⁺(aq) + 2e⁻ → Cu(s)</code> (thanh Cu dày thêm, màu xanh dung dịch nhạt dần). <br>• Chiều dòng điện ở mạch ngoài đi từ cực dương Cu sang cực âm Zn (ngược chiều chuyển động của electron).',
        '<strong>Sức điện động chuẩn của Pin (E°_pin):</strong> <br><code>E°_pin = E°_cathode − E°_anode = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = 0,34 − (−0,76) = +1,10 V</code>.'
      ]
    },
    {
      heading: '3. Nguồn điện hóa học: Pin khô, Ắc quy và Pin nhiên liệu',
      items: [
        '<strong>Pin khô Leclanché & Pin kiềm (Alkaline):</strong> Pin dùng một lần, dùng Zn làm anode, MnO₂ trong bột than chì làm cathode, chất điện li là dung dịch KOH hoặc NH₄Cl dạng hồ đặc.',
        '<strong>Ắc quy chì - acid:</strong> Nguồn điện thứ cấp có thể nạp lại được. Khi phóng điện: cực âm là Pb, cực dương là PbO₂, chất điện li là H₂SO₄ loãng 20–30%. Cả hai điện cực đều chuyển thành PbSO₄. Khi nạp điện: quá trình diễn ra ngược lại dưới tác dụng của dòng điện ngoài.',
        '<strong>Pin Lithium-ion:</strong> Nguồn điện nhẹ, dung lượng cao ứng dụng trong điện thoại thông minh, laptop và xe điện.',
        '<strong>Pin nhiên liệu Hydrogen - Oxygen:</strong> Thiết bị biến đổi trực tiếp năng lượng phản ứng giữa H₂ và O₂ thành điện năng với hiệu suất cao (trên 60%), sản phẩm duy nhất là nước H₂O sạch, không phát thải khí nhà kính.'
      ]
    }
  ],

  16: [
    {
      heading: '1. Khái niệm và bản chất của Quá trình Điện phân',
      items: [
        '<strong>Khái niệm Điện phân:</strong> Là quá trình oxi hóa - khử xảy ra trên bề mặt các điện cực khi có <strong>dòng điện một chiều cưỡng bức</strong> đi qua chất điện li nóng chảy hoặc dung dịch chất điện li.',
        '<strong>Bản chất:</strong> Dùng năng lượng điện để cưỡng bức một phản ứng oxi hóa - khử <em>không tự diễn biến</em> xảy ra.',
        '<strong>Dấu và quá trình trên các điện cực:</strong> <br>• <strong>Cathode (cực âm, nối với cực âm nguồn điện):</strong> Thu hút các cation dương chạy về; tại đây xảy ra <strong>quá trình khử</strong> (nhận electron): <code>Mⁿ⁺ + ne⁻ → M</code>. <br>• <strong>Anode (cực dương, nối với cực dương nguồn điện):</strong> Thu hút các anion âm chạy về; tại đây xảy ra <strong>quá trình oxi hóa</strong> (nhường electron): <code>Xᵐ⁻ → X + me⁻</code>. <br><em>(Ghi nhớ: Cả trong pin điện và bình điện phân: Catot luôn khử, Anot luôn oxi hóa; nhưng dấu điện cực bị đảo ngược).</em>'
      ]
    },
    {
      heading: '2. Điện phân nóng chảy và Điện phân dung dịch',
      items: [
        '<strong>Điện phân nóng chảy:</strong> Dùng để điều chế các kim loại có tính khử rất mạnh (nhóm IA, IIA, Al) mà không thể khử trong dung dịch: <br>• <em>Sản xuất Nhôm:</em> Điện phân nóng chảy Al₂O₃ hòa tan trong quặng cryolite nóng chảy (Na₃AlF₆ để hạ nhiệt độ nóng chảy từ 2050°C xuống 950°C): <code>2Al₂O₃ → 4Al + 3O₂↑ (đpnc)</code>. <br>• <em>Điều chế Natri:</em> Điện phân nóng chảy muối NaCl: <code>2NaCl → 2Na + Cl₂↑ (đpnc)</code>.',
        '<strong>Quy tắc phóng điện trong Điện phân dung dịch:</strong> <br>• <em>Tại Cathode (−):</em> Các cation kim loại từ Cu²⁺ trở sau trong dãy điện hóa bị khử trước; nếu là kim loại từ Al³⁺ trở về trước thì <strong>nước H₂O bị khử thay thế</strong>: <code>2H₂O + 2e⁻ → H₂↑ + 2OH⁻</code>. <br>• <em>Tại Anode (+ trơ):</em> Các ion không chứa oxygen (S²⁻ &gt; I⁻ &gt; Br⁻ &gt; Cl⁻) bị oxi hóa trước; các anion chứa oxygen (SO₄²⁻, NO₃⁻, CO₃²⁻, F⁻) không bị oxi hóa mà <strong>nước H₂O bị oxi hóa thay thế</strong>: <code>2H₂O → O₂↑ + 4H⁺ + 4e⁻</code>.',
        '<strong>Điện phân dung dịch NaCl có màng ngăn (Chlor-Alkali):</strong> <br><code>2NaCl + 2H₂O → 2NaOH + Cl₂↑ (anode) + H₂↑ (cathode) (đpdd, có màng ngăn)</code>. Nếu không có màng ngăn, Cl₂ tác dụng với dung dịch NaOH sinh ra nước Javel (NaCl, NaClO, H₂O).'
      ]
    },
    {
      heading: '3. Định luật Faraday và Ứng dụng công nghiệp của Điện phân',
      items: [
        '<strong>Định luật Faraday:</strong> Khối lượng chất giải phóng ở mỗi điện cực tỉ lệ thuận với điện lượng chạy qua bình điện phân: <br><code>m = (A × I × t) / (n × F)</code> <br>Trong đó: A là khối lượng mol nguyên tử; n là số electron trao đổi; I là cường độ dòng điện (Ampe); t là thời gian điện phân (giây); F là hằng số Faraday (<strong>F = 96500 C/mol</strong>).',
        'Số mol electron trao đổi ở mỗi điện cực: <code>n_e = (I × t) / F</code>.',
        '<strong>Ứng dụng của điện phân:</strong> <br>• Luyện kim: Sản xuất kim loại tinh khiết (Al, Mg, Na, Ca, Cu). <br>• Tinh luyện đồng: Dùng đồng thô làm anode tan, đồng nguyên chất kết bám lên cathode. <br>• Mạ điện: Phủ một lớp kim loại mỏng bền đẹp (mạ niken, mạ crom, mạ vàng, mạ bạc) lên bề mặt đồ vật để chống gỉ và trang trí. <br>• Đúc điện: Tạo các bản in, huy chương sắc nét.'
      ]
    }
  ],

  17: [
    {
      heading: '1. Tổng kết kiến thức Chương 5: Pin điện và Điện phân',
      items: [
        '<strong>Hai quá trình tương phản của Hóa học và Điện năng:</strong> <br>• <em>Pin điện hóa (Galvani):</em> Phản ứng hóa học tự diễn biến → Sinh ra dòng điện năng (Hóa năng → Điện năng). <br>• <em>Bình điện phân:</em> Dùng nguồn điện ngoài cưỡng bức phản ứng hóa học xảy ra (Điện năng → Hóa năng).',
        '<strong>Dấu của điện cực:</strong> <br>• Trong Pin điện: Anot là cực âm (−); Catot là cực dương (+). <br>• Trong Bình điện phân: Anot nối cực dương (+); Catot nối cực âm (−).'
      ]
    },
    {
      heading: '2. Bảng so sánh bản chất và chiều chuyển dịch electron',
      items: [
        '<strong>Tại Anode (Anot):</strong> Luôn luôn xảy ra <strong>quá trình oxi hóa</strong> (nhường electron) trong cả hai thiết bị. Electron chạy ra khỏi anot đi vào mạch ngoài.',
        '<strong>Tại Cathode (Catot):</strong> Luôn luôn xảy ra <strong>quá trình khử</strong> (nhận electron) trong cả hai thiết bị. Electron từ mạch ngoài đi vào catot.',
        '<strong>Cầu muối trong Pin điện:</strong> Duy trì tính trung hòa điện cho hai dung dịch nửa pin; các anion âm chạy về nửa pin chứa cực anot, cation dương chạy về nửa pin chứa cực catot.'
      ]
    },
    {
      heading: '3. Phương pháp giải bài toán Điện phân và Bẫy đề thi',
      items: [
        '<strong>Bảo toàn electron xuyên suốt:</strong> <br><code>Tổng mol e nhường tại Anot = Tổng mol e nhận tại Catot = (I × t) / F</code>.',
        '<strong>Thứ tự điện phân dung dịch hỗn hợp chứa CuSO₄ và NaCl:</strong> <br>• Giai đoạn 1: Cu²⁺ khử ở catot, Cl⁻ oxi hóa ở anot: <code>CuSO₄ + 2NaCl → Cu↓ + Cl₂↑ + Na₂SO₄</code>. <br>• Giai đoạn 2: Tùy lượng chất còn lại (nếu dư Cu²⁺ thì nước điện phân ở anot sinh O₂ và H₂SO₄; nếu dư Cl⁻ thì nước điện phân ở catot sinh H₂ và NaOH). <br>• Giai đoạn 3: Cả hai bên đều là nước điện phân: <code>2H₂O → 2H₂↑ + O₂↑</code>.',
        '<strong>Độ giảm khối lượng của dung dịch sau điện phân:</strong> <br><code>Δm_giảm = m_kết tủa (Cu, Ag...) + m_khí thoát ra (Cl₂, O₂, H₂...)</code>.'
      ]
    }
  ],

  18: [
    {
      heading: '1. Cấu tạo nguyên tử kim loại và Vị trí trong Bảng tuần hoàn',
      items: [
        '<strong>Vị trí của kim loại:</strong> Chiếm hơn 80% tổng số nguyên tố trong bảng tuần hoàn hóa học: <br>• Toàn bộ nhóm IA (trừ H) và nhóm IIA. <br>• Nhóm IIIA (trừ B), một phần nhóm IVA (Sn, Pb), nhóm VA (Bi), nhóm VIA (Po). <br>• Toàn bộ các nguyên tố kim loại chuyển tiếp nhóm B (từ nhóm IB đến VIIIB). <br>• Toàn bộ hai họ Lantanoid và Actinoid ở đáy bảng tuần hoàn.',
        '<strong>Đặc điểm cấu tạo nguyên tử:</strong> <br>• Thường chỉ có từ 1, 2 đến 3 electron ở lớp vỏ ngoài cùng. <br>• Bán kính nguyên tử tương đối lớn hơn so với các nguyên tử phi kim cùng chu kì. <br>• Năng lượng ion hóa thứ nhất (I₁) tương đối thấp, dẫn đến các nguyên tử kim loại có xu hướng <em>dễ dàng nhường electron hóa trị</em> để đạt cấu hình electron bền vững của khí hiếm, thể hiện <strong>tính khử</strong>.'
      ]
    },
    {
      heading: '2. Cấu tạo ba dạng Mạng tinh thể kim loại phổ biến',
      items: [
        'Ở điều kiện thường, hầu hết các kim loại tồn tại ở thể rắn (trừ Thủy ngân Hg là chất lỏng ở nhiệt độ thường) và có cấu trúc tinh thể.',
        'Trong tinh thể kim loại, các nguyên tử và ion dương kim loại nằm ở các vị trí xác định gọi là <em>nút mạng tinh thể</em>, còn các electron hóa trị bứt ra tự do chuyển động hỗn loạn trong toàn bộ không gian giữa các nút mạng.',
        '<strong>Ba dạng mạng tinh thể cơ bản:</strong> <br>• <strong>Mạng lập phương tâm khối (BCC):</strong> Các ion ở 8 đỉnh và 1 ion ở chính tâm khối lập phương. Độ đặc khít 68%. Đại diện: Kim loại kiềm (Li, Na, K, Rb, Cs), Ba, Cr, Fe(α), W. <br>• <strong>Mạng lập phương tâm diện (FCC):</strong> Các ion ở 8 đỉnh và ở tâm của 6 mặt khối lập phương. Độ đặc khít cao 74%. Đại diện: Cu, Ag, Au, Al, Ni, Pt, Fe(γ). <br>• <strong>Mạng lục phương (HCP):</strong> Các ion xếp thành hình lăng trụ lục giác đều. Độ đặc khít 74%. Đại diện: Be, Mg, Zn, Ti.'
      ]
    },
    {
      heading: '3. Bản chất của Liên kết kim loại',
      items: [
        '<strong>Định nghĩa:</strong> Liên kết kim loại là liên kết hóa học được hình thành giữa các nguyên tử và ion kim loại ở nút mạng tinh thể nhờ <strong>lực hút tĩnh điện với các electron hóa trị tự do</strong> chung trong toàn mạng tinh thể.',
        '<strong>So sánh với các loại liên kết khác:</strong> <br>• Khác liên kết ion: Không có sự chuyển electron dứt khoát sang một nguyên tử phi kim âm điện, mà electron dùng chung lan tỏa cho toàn bộ tinh thể. <br>• Khác liên kết cộng hóa trị: Liên kết kim loại là liên kết không định hướng và không bão hòa, các lớp ion dương có thể trượt lên nhau mà không làm phá vỡ liên kết, tạo nên tính dẻo đặc thù của kim loại.'
      ]
    }
  ],

  19: [
    {
      heading: '1. Tính chất vật lí chung và riêng của Kim loại',
      items: [
        '<strong>Tính chất vật lí chung (do các electron tự do gây ra):</strong> <br>• <strong>Tính dẻo:</strong> Khi tác dụng lực cơ học, các lớp ion dương kim loại trượt lên nhau nhưng không tách rời nhờ biển electron tự do liên kết chúng. Kim loại dẻo nhất là Vàng (Au - 1g vàng có thể dát mỏng thành lá diện tích 1 m²). <br>• <strong>Tính dẫn điện:</strong> Dưới tác dụng của điện trường, electron tự do dịch chuyển có hướng từ cực âm về cực dương tạo thành dòng điện. Thứ tự dẫn điện giảm dần: <strong>Ag &gt; Cu &gt; Au &gt; Al &gt; Fe</strong>. Nhiệt độ càng cao, mạng tinh thể dao động mạnh cản trở dòng electron làm độ dẫn điện giảm. <br>• <strong>Tính dẫn nhiệt:</strong> Do electron tự do va chạm truyền động năng cho nhau. Thường kim loại dẫn điện tốt thì dẫn nhiệt tốt. <br>• <strong>Ánh kim:</strong> Electron tự do phản xạ hầu hết các tia sáng nhìn thấy chiếu vào bề mặt kim loại.',
        '<strong>Tính chất vật lí riêng (do đặc điểm nguyên tử và mạng tinh thể quy định):</strong> <br>• Khối lượng riêng: Kim loại nhẹ nhất là Li (0,53 g/cm³); nặng nhất là Os (22,6 g/cm³). <br>• Nhiệt độ nóng chảy: Thấp nhất là Hg (−39°C); cao nhất là Vonfram W (3422°C - dùng làm dây tóc bóng đèn). <br>• Độ cứng: Mềm nhất là Cs (dùng dao cắt được); cứng nhất là Crom Cr (cắt được thủy tinh).'
      ]
    },
    {
      heading: '2. Tính chất hóa học chung của Kim loại (Tính khử)',
      items: [
        'Tính chất hóa học chung của mọi kim loại là <strong>tính khử</strong>: <code>M → Mⁿ⁺ + ne⁻</code>.',
        '<strong>1. Tác dụng với phi kim:</strong> <br>• Tác dụng với O₂ tạo basic oxide hoặc amphoteric oxide: <code>2Mg + O₂ → 2MgO (t°)</code>; <code>3Fe + 2O₂ → Fe₃O₄ (t°)</code>. <br>• Tác dụng với Cl₂ tạo muối chloride có số oxi hóa cao nhất: <code>2Fe + 3Cl₂ → 2FeCl₃ (t°)</code> (chú ý khác với khi tác dụng HCl chỉ ra Fe(II)). <br>• Tác dụng với Lưu huỳnh (S): <code>Fe + S → FeS (t°)</code>; riêng Thủy ngân Hg phản ứng với S ngay ở nhiệt độ thường: <code>Hg + S → HgS</code> (dùng để thu gom thủy ngân rơi vãi khi nhiệt kế vỡ).',
        '<strong>2. Tác dụng với Acid:</strong> <br>• <em>Acid thông thường (HCl, H₂SO₄ loãng):</em> Chỉ kim loại đứng trước H trong dãy hoạt động hóa học mới tác dụng giải phóng H₂: <code>Fe + 2HCl → FeCl₂ + H₂↑</code>. <br>• <em>Acid có tính oxi hóa mạnh (HNO₃, H₂SO₄ đặc nóng):</em> Oxi hóa hầu hết kim loại (trừ Au, Pt) lên số oxi hóa cao nhất, không sinh H₂ mà sinh các sản phẩm khử của N hoặc S (NO₂, NO, N₂O, N₂, NH₄NO₃, SO₂...). <br>• <em>Lưu ý đặc biệt:</em> Fe, Al, Cr bị <strong>thụ động hóa</strong> trong dung dịch HNO₃ đặc nguội và H₂SO₄ đặc nguội.',
        '<strong>3. Tác dụng với Nước:</strong> Kim loại nhóm IA (Na, K) và IIA (Ca, Ba, Sr) tác dụng mãnh liệt với nước ở nhiệt độ thường giải phóng H₂ và dung dịch kiềm.',
        '<strong>4. Tác dụng với dung dịch Muối:</strong> Kim loại đứng trước khử ion của kim loại đứng sau trong dãy điện hóa ra khỏi dung dịch muối: <code>Fe + CuSO₄ → FeSO₄ + Cu↓</code>.'
      ]
    },
    {
      heading: '3. Dãy thế điện cực chuẩn và Ý nghĩa thực tiễn',
      items: [
        '<strong>Dãy hoạt động hóa học:</strong> K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au.',
        'So sánh tính khử của kim loại và tính oxi hóa của cation kim loại theo quy tắc alpha.',
        'Ứng dụng dự đoán chiều của phản ứng oxi hóa - khử tự diễn biến, tính toán sức điện động chuẩn của pin điện hóa.'
      ]
    }
  ],

  20: [
    {
      heading: '1. Trạng thái tự nhiên của Kim loại và Quặng khoáng sản',
      items: [
        'Hầu hết các kim loại trong vỏ Trái Đất tồn tại ở dạng <strong>hợp chất</strong> (oxide, sulfide, carbonate, silicate, sulfate...) do chúng có tính khử nên dễ bị oxi hóa bởi oxy, độ ẩm và các tác nhân môi trường.',
        'Chỉ có một số ít kim loại rất kém hoạt động hóa học mới có thể tồn tại trong tự nhiên ở dạng <strong>đơn chất tự do</strong>, gọi là kim loại quý bản sinh (như Vàng Au, Bạch kim Pt, và đôi khi là Bạc Ag, Đồng Cu).',
        '<strong>Các loại quặng kim loại quan trọng:</strong> <br>• Quặng nhôm: Quặng bauxite (Al₂O₃·2H₂O). <br>• Quặng sắt: Hematite đỏ (Fe₂O₃), Magnetite (Fe₃O₄ - giàu sắt nhất), Siderite (FeCO₃), Pyrite (FeS₂). <br>• Quặng đồng: Chalcopyrite (CuFeS₂), Malachite (CuCO₃·Cu(OH)₂). <br>• Quặng chì - kẽm: Galena (PbS), Sphalerite (ZnS).'
      ]
    },
    {
      heading: '2. Ba phương pháp tách và điều chế Kim loại',
      items: [
        '<strong>Nguyên tắc chung:</strong> Khử ion dương kim loại thành nguyên tử kim loại tự do: <code>Mⁿ⁺ + ne⁻ → M</code>.',
        '<strong>1. Phương pháp Nhiệt luyện (Pyrometallurgy):</strong> <br>• <em>Phạm vi áp dụng:</em> Điều chế các kim loại có độ hoạt động trung bình và yếu (từ Zn đến Cu trong dãy điện hóa). <br>• <em>Nguyên tắc:</em> Dùng các chất khử mạnh như C, CO, H₂ hoặc kim loại Al (phản ứng nhiệt nhôm) để khử ion kim loại trong oxide ở nhiệt độ cao. <br>• <em>Ví dụ:</em> <code>Fe₂O₃ + 3CO → 2Fe + 3CO₂ (t°)</code>; <code>Fe₂O₃ + 2Al → 2Fe + Al₂O₃ (phản ứng nhiệt nhôm hàn đường ray)</code>.',
        '<strong>2. Phương pháp Thủy luyện (Hydrometallurgy):</strong> <br>• <em>Phạm vi áp dụng:</em> Điều chế các kim loại kém hoạt động (Cu, Ag, Au). <br>• <em>Nguyên tắc:</em> Dùng dung dịch thích hợp hòa tan hợp chất kim loại trong quặng, sau đó dùng kim loại có tính khử mạnh hơn đẩy kim loại cần điều chế ra khỏi dung dịch muối: <code>Fe + CuSO₄ → FeSO₄ + Cu↓</code>.',
        '<strong>3. Phương pháp Điện phân (Electrometallurgy):</strong> <br>• Điện phân nóng chảy: Áp dụng bắt buộc cho kim loại có tính khử rất mạnh (IA, IIA, Al). <br>• Điện phân dung dịch: Áp dụng cho kim loại đứng sau nhôm (Zn, Fe, Cu, Ag).'
      ]
    },
    {
      heading: '3. Quy trình sản xuất Gang và Thép hiện đại',
      items: [
        '<strong>Sản xuất Gang trong Lò cao:</strong> <br>• <em>Nguyên liệu:</em> Quặng sắt (hematite), than cốc (C), chất trợ dung (đá vôi CaCO₃) và không khí nóng. <br>• <em>Các phản ứng xảy ra trong lò:</em> <br>&nbsp;&nbsp;&nbsp;&nbsp;+ Tạo chất khử CO: <code>C + O₂ → CO₂</code>; <code>CO₂ + C → 2CO</code>. <br>&nbsp;&nbsp;&nbsp;&nbsp;+ Khử oxide sắt từng bước: <code>Fe₂O₃ → Fe₃O₄ → FeO → Fe</code>. <br>&nbsp;&nbsp;&nbsp;&nbsp;+ Tạo xỉ loại tạp chất: <code>CaCO₃ → CaO + CO₂</code>; <code>CaO + SiO₂ → CaSiO₃ (xỉ nhẹ nổi lên trên bảo vệ gang)</code>.',
        '<strong>Sản xuất Thép trong Lò thổi oxy (BOF):</strong> Thổi khí oxy tinh khiết vào gang nóng chảy để oxi hóa bớt lượng carbon dư thừa (từ 2–5% trong gang hạ xuống dưới 2% trong thép) và các tạp chất Si, Mn, P, S.'
      ]
    }
  ],

  21: [
    {
      heading: '1. Khái niệm, phân loại và cấu tạo của Hợp kim',
      items: [
        '<strong>Khái niệm Hợp kim:</strong> Là vật liệu kim loại có chứa một kim loại cơ bản và một hay một số kim loại hoặc phi kim khác, được chế tạo chủ yếu bằng phương pháp nấu chảy các thành phần với nhau rồi để nguội cho kết tinh.',
        '<strong>Cấu tạo pha của hợp kim:</strong> Tùy thuộc vào bản chất các nguyên tố thành phần, hợp kim có thể tồn tại ở dạng: <br>• <em>Dung dịch rắn:</em> Các nguyên tử kim loại phụ phân tán đồng đều chiếm chỗ hoặc xen kẽ vào các khoảng trống trong mạng tinh thể của kim loại cơ bản mà không làm thay đổi kiểu mạng ban đầu. <br>• <em>Hợp chất hóa học:</em> Hình thành hợp chất giữa kim loại với kim loại hoặc với phi kim có liên kết hóa học xác định (ví dụ: cementite Fe₃C trong thép). <br>• <em>Hỗn hợp cơ học:</em> Gồm các tinh thể của các pha khác nhau nằm xen kẽ.'
      ]
    },
    {
      heading: '2. Tính chất cơ học, vật lí và hóa học của Hợp kim',
      items: [
        '<strong>Tính chất cơ học (ưu thế vượt trội so với kim loại nguyên chất):</strong> Sự có mặt của các nguyên tử phụ có kích thước khác biệt làm biến dạng mạng tinh thể kim loại cơ bản, cản trở sự trượt của các lớp nguyên tử lên nhau. Do đó, <strong>hợp kim thường có độ cứng, độ bền cơ học và giới hạn đàn hồi cao hơn nhiều so với kim loại nguyên chất</strong> cấu thành.',
        '<strong>Tính chất nhiệt và điện:</strong> Mạng tinh thể bị biến dạng làm electron tự do chuyển động khó khăn hơn, vì vậy <strong>hợp kim thường có độ dẫn điện, độ dẫn nhiệt thấp hơn và nhiệt độ nóng chảy thấp hơn kim loại cơ bản</strong>.',
        '<strong>Tính chất hóa học:</strong> Tính chất hóa học của hợp kim phụ thuộc vào các đơn chất thành phần cấu tạo nên nó; nhiều hợp kim có khả năng chống ăn mòn hóa học và ăn mòn khí quyển vượt trội (như thép không gỉ inox).'
      ]
    },
    {
      heading: '3. Các hợp kim quan trọng trong đời sống và kỹ thuật',
      items: [
        '<strong>Hợp kim của Sắt:</strong> <br>• <em>Gang:</em> Hợp kim Fe–C chứa 2–5% carbon cùng lượng nhỏ Si, Mn, S, P. Rất cứng và giòn, không rèn dát được, dùng đúc bệ máy, ống dẫn nước lớn, nồi chảo. <br>• <em>Thép:</em> Hợp kim Fe–C chứa dưới 2% carbon. Rất dẻo, bền cơ học, dễ gia công cán kéo rèn hàn. Thép hợp kim (thêm Cr, Ni, Mo, W) dùng chế tạo thép không gỉ inox (18% Cr, 8% Ni), vòng bi, dao cắt gọt tốc độ cao.',
        '<strong>Hợp kim của Nhôm (Duralumin):</strong> Gồm Al (95%), Cu (4%), Mg, Mn. Nhẹ gần bằng nhôm nguyên chất nhưng bền và cứng tương đương thép, dùng làm vỏ thân máy bay, tên lửa, tàu vũ trụ.',
        '<strong>Hợp kim của Đồng:</strong> Đồng thau (Cu–Zn, màu vàng sáng làm đồ trang trí, nhạc cụ khí); Đồng thanh (Cu–Sn làm đúc tượng, chuông đồng).'
      ]
    }
  ],

  22: [
    {
      heading: '1. Khái niệm và Phân loại sự Ăn mòn kim loại',
      items: [
        '<strong>Khái niệm:</strong> Ăn mòn kim loại là sự phá hủy kim loại hoặc hợp kim do tác dụng hóa học hoặc tác dụng điện hóa của các chất trong môi trường xung quanh, biến kim loại tự do thành các hợp chất ion bền vững hơn.',
        '<strong>Bản chất:</strong> Là quá trình oxi hóa kim loại: <code>M → Mⁿ⁺ + ne⁻</code>.',
        '<strong>Phân loại thành hai dạng chính:</strong> <br>• <strong>Ăn mòn hóa học:</strong> Là quá trình oxi hóa - khử trong đó kim loại phản ứng trực tiếp với các chất oxi hóa trong môi trường (khí O₂, Cl₂, hơi nước, hơi acid ở nhiệt độ cao) mà <em>không phát sinh dòng điện</em>. Electron được chuyển trực tiếp từ kim loại sang chất oxi hóa (ví dụ: thanh sắt trong lò nung bị xỉ vảy Fe₃O₄ bám quanh). <br>• <strong>Ăn mòn điện hóa học:</strong> Là quá trình phá hủy kim loại do tác dụng của dung dịch chất điện li và <em>có phát sinh dòng điện một chiều</em> vi mô chuyển dời giữa các điện cực.'
      ]
    },
    {
      heading: '2. Cơ chế của sự Ăn mòn điện hóa học (Pin vi mô)',
      items: [
        '<strong>Ba điều kiện cần và đủ để xảy ra ăn mòn điện hóa:</strong> <br>1. Có hai điện cực khác nhau về bản chất hóa học (cặp kim loại - kim loại khác nhau, hoặc cặp kim loại - phi kim như Fe–C). <br>2. Hai điện cực phải tiếp xúc trực tiếp hoặc gián tiếp với nhau qua dây dẫn. <br>3. Hai điện cực cùng tiếp xúc với một dung dịch chất điện li (không khí ẩm, nước mưa, nước biển).',
        '<strong>Cơ chế ăn mòn điện hóa của Gang/Thép (Fe–C) trong không khí ẩm:</strong> <br>• <em>Tại Anode (−) là kim loại có tính khử mạnh hơn (Sắt Fe):</em> Sắt bị oxi hóa nhường electron: <code>Fe → Fe²⁺ + 2e⁻</code> (Fe bị tan dần và mòn rỗ). <br>• <em>Tại Cathode (+) là vật liệu có tính khử yếu hơn (Carbon C):</em> Oxy hòa tan trong màng nước điện li nhận electron bị khử: <code>O₂ + 2H₂O + 4e⁻ → 4OH⁻</code>. <br>• Ion Fe²⁺ kết hợp với OH⁻ tạo Fe(OH)₂, sau đó tiếp tục bị oxi hóa bởi oxy ẩm tạo rỉ sắt xốp màu nâu đỏ: <strong>Fe₂O₃·nH₂O</strong>.'
      ]
    },
    {
      heading: '3. Các biện pháp chống ăn mòn kim loại',
      items: [
        '<strong>1. Phương pháp bảo vệ bề mặt:</strong> Phủ lên bề mặt kim loại một lớp màng ngăn cách bền vững với môi trường: sơn phủ, bôi dầu mỡ, tráng men, mạ kim loại bền (mạ niken, crom, thiếc, kẽm). Ví dụ: Sắt tây là sắt mạ thiếc (Sn); tôn lợp nhà là sắt mạ kẽm (Zn).',
        '<strong>2. Phương pháp bảo vệ điện hóa (Dùng vật hi sinh):</strong> <br>• Nối kim loại cần bảo vệ với một kim loại có tính khử mạnh hơn để kim loại đó đóng vai trò là anode bị ăn mòn thay thế (vật hi sinh). <br>• Ví dụ kinh điển: Gắn các khối kẽm (Zn) vào vỏ tàu thủy bằng thép đi biển hoặc các ống dẫn dầu chôn ngầm dưới đất; Kẽm có thế điện cực chuẩn âm hơn sắt nên kẽm bị ăn mòn, vỏ tàu thép được bảo vệ nguyên vẹn.'
      ]
    }
  ],

  23: [
    {
      heading: '1. Sơ đồ hệ thống hóa Đại cương về Kim loại',
      items: [
        '<strong>Liên kết chuỗi kiến thức:</strong> <br><code>Cấu tạo nguyên tử (ít e ngoài cùng, R lớn) → Liên kết kim loại (electron tự do chung) → Tính chất vật lí chung (dẻo, dẫn điện, dẫn nhiệt, ánh kim) & Tính chất hóa học chung (Tính khử mạnh)</code>.',
        '<strong>Quy tắc nhớ nhanh thứ tự phản ứng:</strong> Dãy hoạt động hóa học và quy tắc alpha xác định phản ứng giữa cặp chất oxi hóa và chất khử.'
      ]
    },
    {
      heading: '2. Bảng tổng hợp các Phương pháp tách kim loại và Điều kiện áp dụng',
      items: [
        '<strong>Kim loại rất mạnh (K, Na, Ca, Mg, Al):</strong> Bắt buộc dùng <strong>Điện phân nóng chảy</strong> hợp chất (muối chloride nóng chảy hoặc oxide nóng chảy).',
        '<strong>Kim loại trung bình và yếu (Zn, Fe, Ni, Sn, Pb, Cu):</strong> Dùng <strong>Nhiệt luyện</strong> (khử oxide bằng C, CO, H₂ ở t° cao) hoặc <strong>Điện phân dung dịch</strong> muối.',
        '<strong>Kim loại quý kém hoạt động (Cu, Ag, Au):</strong> Dùng <strong>Thủy luyện</strong> (hòa tan rồi dùng kim loại mạnh hơn đẩy ra) hoặc đãi quặng tự do.'
      ]
    },
    {
      heading: '3. Dạng bài toán hỗn hợp kim loại và Định luật bảo toàn',
      items: [
        '<strong>Định luật bảo toàn electron:</strong> <code>Tổng số mol e kim loại nhường = Tổng số mol e chất oxi hóa (H⁺, NO₃⁻, SO₄²⁻, O₂, Cl₂) nhận</code>.',
        '<strong>Bài toán kim loại tác dụng với dung dịch muối:</strong> <br>• Thứ tự khử: Kim loại có tính khử mạnh nhất phản ứng trước với ion kim loại có tính oxi hóa mạnh nhất trong dung dịch. <br>• Phương pháp tăng giảm khối lượng thanh kim loại: <code>Δm_thanh = m_bám − m_tan</code>.'
      ]
    }
  ],

  24: [
    {
      heading: '1. Vị trí, cấu hình electron và Tính chất vật lí của Kim loại kiềm (Nhóm IA)',
      items: [
        '<strong>Vị trí:</strong> Thuộc nhóm IA trong bảng tuần hoàn, gồm các nguyên tố: Lithium (Li), Sodium (Na), Potassium (K), Rubidium (Rb), Caesium (Cs) và Francium (Fr - nguyên tố phóng xạ).',
        '<strong>Cấu hình electron:</strong> Có 1 electron ở lớp ngoài cùng dạng <strong>ns¹</strong>. Dễ dàng nhường 1e duy nhất này để tạo cation <strong>M⁺</strong> có cấu hình bền của khí hiếm đứng trước; trong mọi hợp chất kim loại kiềm luôn có số oxi hóa duy nhất là <strong>+1</strong>.',
        '<strong>Tính chất vật lí đặc thù:</strong> <br>• Đều kết tinh ở dạng mạng tinh thể lập phương tâm khối (độ đặc khít thấp 68%). <br>• Khối lượng riêng nhỏ (đều nhẹ, Li, Na, K nhẹ hơn nước). <br>• Nhiệt độ nóng chảy và nhiệt độ sôi rất thấp so với các kim loại khác (giảm dần từ Li đến Cs do bán kính ion tăng, liên kết kim loại yếu dần). <br>• Độ cứng rất nhỏ, rất mềm (dùng dao cắt dễ dàng).'
      ]
    },
    {
      heading: '2. Tính chất hóa học đặc trưng của Kim loại kiềm',
      items: [
        'Kim loại kiềm có năng lượng ion hóa thứ nhất rất thấp và thế điện cực chuẩn rất âm, nên chúng là <strong>những kim loại có tính khử mạnh nhất</strong>.',
        '<strong>1. Tác dụng với Phi kim:</strong> <br>• Tác dụng với O₂: Li tạo oxide Li₂O; Na cháy trong không khí tạo sodium peroxide Na₂O₂ và oxide Na₂O; K, Rb, Cs tạo superoxide (KO₂). <br>• Tác dụng với Halogen (Cl₂, Br₂): Phản ứng bốc cháy mãnh liệt tỏa nhiều nhiệt tạo muối halide: <code>2Na + Cl₂ → 2NaCl (t°)</code>.',
        '<strong>2. Tác dụng mãnh liệt với Nước:</strong> Phản ứng ngay ở nhiệt độ thường tỏa nhiệt lớn làm nóng chảy kim loại thành giọt tròn chạy trên mặt nước và bốc cháy, giải phóng khí H₂ và dung dịch kiềm mạnh: <br><code>2M + 2H₂O → 2MOH + H₂↑</code>',
        '<strong>Bảo quản kim loại kiềm:</strong> Do hoạt động hóa học cực mạnh, dễ bị oxy và hơi ẩm không khí oxi hóa, nên trong phòng thí nghiệm <strong>kim loại kiềm (Na, K) được bảo quản bằng cách ngâm chìm hoàn toàn trong dầu hỏa</strong>.',
        '<strong>Màu ngọn lửa đặc trưng:</strong> Khi đốt muối hoặc hợp chất trên ngọn lửa đèn khí không màu: Muối Li cho màu đỏ tía; Muối Na cho màu vàng tươi rực rỡ; Muối K cho màu tím nhạt.'
      ]
    },
    {
      heading: '3. Một số hợp chất quan trọng của Natri (NaCl, NaOH, NaHCO₃, Na₂CO₃)',
      items: [
        '<strong>Sodium chloride (NaCl):</strong> Thành phần chính của muối ăn; nguyên liệu đầu vào cho ngành công nghiệp hóa chất chlor-alkali (sản xuất Cl₂, H₂, NaOH, nước Javel, Na₂CO₃).',
        '<strong>Sodium hydroxide (NaOH - Xút ăn da):</strong> Chất rắn màu trắng, hút ẩm mạnh, tan nhiều trong nước tỏa nhiệt lớn. Dùng trong sản xuất xà phòng, giấy, tơ nhân tạo, chế biến dầu mỏ và xử lí nước thải.',
        '<strong>Sodium hydrogencarbonate (NaHCO₃ - Baking soda):</strong> Muối acid lưỡng tính, kém bền nhiệt (bị nhiệt phân ở trên 100°C giải phóng CO₂). Dùng làm bột nở làm bánh, thuốc giảm đau dạ dày do thừa acid dịch vị, bình chữa cháy dạng bột.',
        '<strong>Sodium carbonate (Na₂CO₃ - Soda):</strong> Muối trung hòa tan tốt trong nước, dung dịch có tính base do thủy phân ion CO₃²⁻. Dùng trong công nghiệp sản xuất thủy tinh, xà phòng, chất tẩy rửa và làm mềm nước cứng.'
      ]
    }
  ],

  25: [
    {
      heading: '1. Vị trí, cấu hình electron và Tính chất vật lí của Kim loại kiềm thổ (Nhóm IIA)',
      items: [
        '<strong>Vị trí:</strong> Thuộc nhóm IIA trong bảng tuần hoàn, gồm: Beryllium (Be), Magnesium (Mg), Calcium (Ca), Strontium (Sr), Barium (Ba) và Radium (Ra - phóng xạ).',
        '<strong>Cấu hình electron:</strong> Có 2 electron ở lớp ngoài cùng dạng <strong>ns²</strong>. Xu hướng nhường 2e tạo cation <strong>M²⁺</strong>; trong mọi hợp chất luôn có số oxi hóa duy nhất là <strong>+2</strong>.',
        '<strong>Tính chất vật lí:</strong> <br>• Nhiệt độ nóng chảy và nhiệt độ sôi cao hơn kim loại kiềm cùng chu kì nhưng vẫn tương đối thấp. <br>• Độ cứng cao hơn kim loại kiềm nhưng vẫn thuộc loại kim loại mềm. <br>• Kiểu mạng tinh thể biến đổi: Be và Mg có mạng lục phương; Ca và Sr có mạng lập phương tâm diện; Ba có mạng lập phương tâm khối.'
      ]
    },
    {
      heading: '2. Tính chất hóa học đặc trưng và Hợp chất quan trọng của Calcium',
      items: [
        'Kim loại kiềm thổ có tính khử mạnh (chỉ kém kim loại kiềm): <code>M → M²⁺ + 2e⁻</code>. Tính khử tăng dần từ Be đến Ba.',
        '<strong>Tác dụng với Nước:</strong> <br>• Be không phản ứng với nước kể cả ở nhiệt độ cao. <br>• Mg phản ứng rất chậm với nước ở nhiệt độ thường, phản ứng nhanh với hơi nước nóng: <code>Mg + H₂O → MgO + H₂↑ (t°)</code>. <br>• Ca, Sr, Ba phản ứng mãnh liệt với nước ở nhiệt độ thường giải phóng H₂ và dung dịch kiềm mạnh: <code>Ca + 2H₂O → Ca(OH)₂ + H₂↑</code>.',
        '<strong>Các hợp chất quan trọng của Calcium:</strong> <br>• <em>Vôi sống (CaO):</em> Oxide base tan trong nước tỏa nhiệt dữ dội (tôi vôi) tạo vôi tôi Ca(OH)₂. <br>• <em>Đá vôi (CaCO₃):</em> Không tan trong nước, bị nhiệt phân ở 900–1000°C sinh CaO và CO₂; tan trong nước có hòa tan khí CO₂ tạo calcium hydrogencarbonate: <code>CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂</code> (giải thích hiện tượng xâm thực núi đá vôi và sự hình thành thạch nhũ trong hang động). <br>• <em>Thạch cao (CaSO₄):</em> Thạch cao sống (CaSO₄·2H₂O); Thạch cao nung (CaSO₄·H₂O - dùng để đúc tượng, bó bột khi gãy xương); Thạch cao khan (CaSO₄).'
      ]
    },
    {
      heading: '3. Nước cứng: Phân loại, Tác hại và Phương pháp làm mềm',
      items: [
        '<strong>Khái niệm:</strong> Nước cứng là nước chứa nhiều ion <strong>Ca²⁺ và Mg²⁺</strong>. Nước chứa ít hoặc không chứa ion Ca²⁺, Mg²⁺ gọi là nước mềm.',
        '<strong>Phân loại nước cứng:</strong> <br>• <em>Nước cứng tạm thời:</em> Chứa các muối <strong>Ca(HCO₃)₂ và Mg(HCO₃)₂</strong>. <br>• <em>Nước cứng vĩnh cửu:</em> Chứa các ion Cl⁻, SO₄²⁻ của calcium và magnesium (CaCl₂, MgCl₂, CaSO₄, MgSO₄). <br>• <em>Nước cứng toàn phần:</em> Gồm cả tính cứng tạm thời và tính cứng vĩnh cửu.',
        '<strong>Tác hại:</strong> Giảm tác dụng giặt rửa của xà phòng; đóng cặn trong nồi hơi gây nguy cơ cháy nổ lò hơi; làm giảm mùi vị thơm ngon khi nấu ăn, pha trà.',
        '<strong>Phương pháp làm mềm nước cứng:</strong> <br>• <em>Đối với nước cứng tạm thời:</em> Đun sôi nước (<code>Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O</code>); hoặc dùng dung dịch Ca(OH)₂ vừa đủ; hoặc dùng dung dịch kiềm NaOH. <br>• <em>Đối với mọi loại nước cứng (tạm thời, vĩnh cửu, toàn phần):</em> Dùng hóa chất kết tủa <strong>Na₂CO₃ (soda) hoặc Na₃PO₄</strong> để tạo kết tủa CaCO₃↓, MgCO₃↓, Ca₃(PO₄)₂↓; hoặc dùng phương pháp trao đổi ion (dùng hạt nhựa cationit).'
      ]
    }
  ],

  26: [
    {
      heading: '1. Hệ thống hóa kiến thức Kim loại nhóm IA và IIA',
      items: [
        '<strong>Cấu hình và Hóa trị:</strong> <br>• Nhóm IA: ns¹, tạo ion M⁺, hóa trị I, mạng tinh thể lập phương tâm khối. <br>• Nhóm IIA: ns², tạo ion M²⁺, hóa trị II, kiểu mạng biến đổi.',
        '<strong>Quy luật biến đổi tính chất:</strong> Trong cả hai nhóm, từ trên xuống dưới bán kính nguyên tử tăng, năng lượng ion hóa giảm, tính khử và tính kim loại tăng dần.'
      ]
    },
    {
      heading: '2. Bảng so sánh tính chất Kim loại kiềm vs Kiềm thổ',
      items: [
        '<strong>Tác dụng với nước ở nhiệt độ thường:</strong> <br>• Nhóm IA: Tất cả đều phản ứng mãnh liệt. <br>• Nhóm IIA: Be không phản ứng, Mg phản ứng rất chậm, Ca, Sr, Ba phản ứng mãnh liệt.',
        '<strong>Độ tan của hydroxide:</strong> <br>• MOH (nhóm IA): Đều là base mạnh, tan rất nhiều trong nước. <br>• M(OH)₂ (nhóm IIA): Be(OH)₂ lưỡng tính kết tủa; Mg(OH)₂ kết tủa trắng; Ca(OH)₂ ít tan; Ba(OH)₂ tan tốt.'
      ]
    },
    {
      heading: '3. Phương pháp giải bài toán Kim loại tác dụng với Nước & Nước cứng',
      items: [
        '<strong>Kim loại tác dụng với nước:</strong> <br><code>n_OH⁻ = 2 × n_H₂</code> (áp dụng cho cả kim loại IA và IIA).',
        '<strong>Bài toán sục khí CO₂ vào dung dịch kiềm Ca(OH)₂ / Ba(OH)₂:</strong> <br>• Đặt tỉ lệ <code>T = n_OH⁻ / n_CO₂</code>. <br>• Nếu T ≥ 2: Chỉ tạo muối CO₃²⁻ (kết tủa cực đại). <br>• Nếu 1 &lt; T &lt; 2: Tạo cả hai muối CO₃²⁻ và HCO₃⁻. <br>• Nếu T ≤ 1: Chỉ tạo muối HCO₃⁻ (kết tủa bị hòa tan hoàn toàn).'
      ]
    }
  ],

  27: [
    {
      heading: '1. Đặc điểm Cấu hình electron của Kim loại chuyển tiếp dãy thứ nhất',
      items: [
        '<strong>Vị trí:</strong> Nằm ở chu kì 4 của bảng tuần hoàn, gồm 10 nguyên tố từ Scandium (Sc, Z=21) đến Kẽm (Zn, Z=30).',
        '<strong>Cấu hình electron tổng quát:</strong> <strong>[Ar] 3d¹⁻¹⁰ 4s¹⁻²</strong>. Các electron hóa trị được điền vào phân lớp trong 3d chưa bão hòa.',
        '<strong>Hiện tượng bán bão hòa và bão hòa sớm:</strong> <br>• Crom (Cr, Z=24): [Ar] <strong>3d⁵ 4s¹</strong> (cấu hình bán bão hòa bền phân lớp 3d). <br>• Đồng (Cu, Z=29): [Ar] <strong>3d¹⁰ 4s¹</strong> (cấu hình bão hòa hoàn toàn phân lớp 3d).',
        'Khi tạo cation kim loại, các electron ở phân lớp ngoài <strong>4s bị mất trước</strong>, sau đó mới mất tiếp electron ở phân lớp 3d. Ví dụ: Fe: [Ar] 3d⁶ 4s² → Fe²⁺: [Ar] 3d⁶ → Fe³⁺: [Ar] 3d⁵ (bán bão hòa bền).'
      ]
    },
    {
      heading: '2. Các Số oxi hóa biến đổi và Tính chất vật lí đặc thù',
      items: [
        '<strong>Tính đa dạng về số oxi hóa:</strong> Do năng lượng của phân lớp 3d và 4s rất gần nhau, cả electron 4s và một phần electron 3d đều có thể tham gia liên kết hóa học. Ví dụ: Mangan (Mn) có các số oxi hóa từ +2, +3, +4, +6 đến +7; Sắt (Fe) có +2, +3, +6; Crom (Cr) có +2, +3, +6.',
        '<strong>Tính chất vật lí:</strong> <br>• Tất cả đều là kim loại nặng, có khối lượng riêng lớn hơn 5 g/cm³. <br>• Nhiệt độ nóng chảy và nhiệt độ sôi rất cao (do có sự tham gia của electron d làm tăng độ bền liên kết kim loại). <br>• Độ cứng cao (Crom là kim loại cứng nhất trong tất cả kim loại, độ cứng 8,5 trên thang Mohs). <br>• Dẫn điện và dẫn nhiệt tốt (Đồng là kim loại dẫn điện thứ nhì sau bạc).'
      ]
    },
    {
      heading: '3. Màu sắc hợp chất và Khả năng xúc tác của Kim loại chuyển tiếp',
      items: [
        '<strong>Màu sắc đặc trưng của các ion:</strong> Do sự kích thích electron d giữa các mức năng lượng d bị phân tách trong trường phối tử: <br>• Fe²⁺: Dung dịch màu xanh lục nhạt. <br>• Fe³⁺: Dung dịch màu vàng nâu hoặc đỏ nâu. <br>• Cu²⁺: Dung dịch ngậm nước màu xanh lam thẫm. <br>• Cr³⁺: Màu xanh lục; CrO₄²⁻ (cromate): Màu vàng tươi; Cr₂O₇²⁻ (dichromate): Màu da cam.',
        '<strong>Khả năng xúc tác vượt trội:</strong> Các kim loại chuyển tiếp và hợp chất của chúng là chất xúc tác phổ biến nhất trong công nghiệp hóa học (Fe xúc tác tổng hợp ammonia, Pt xúc tác chuyển đổi khí thải ô tô, Ni xúc tác hydrogen hóa dầu mỡ, V₂O₅ xúc tác sản xuất acid sulfuric).'
      ]
    }
  ],

  28: [
    {
      heading: '1. Khái niệm và Thành phần cấu tạo của Phức chất',
      items: [
        '<strong>Khái niệm Phức chất:</strong> Là hợp chất hóa học được tạo thành từ <strong>nguyên tử hoặc ion trung tâm</strong> liên kết phối trí với các <strong>phối tử (ligand)</strong> bao quanh.',
        '<strong>Ba thành phần cấu tạo chính của phức chất:</strong> <br>1. <strong>Nguyên tử/ion trung tâm (M):</strong> Thường là ion kim loại chuyển tiếp (Cu²⁺, Fe²⁺, Fe³⁺, Ag⁺, Ni²⁺, Co³⁺, Pt²⁺) có các orbital d còn trống để nhận cặp electron. <br>2. <strong>Phối tử (Ligand - L):</strong> Là các phân tử trung hòa (H₂O, NH₃, CO) hoặc anion (Cl⁻, OH⁻, CN⁻, SCN⁻) có cặp electron tự do chưa liên kết sẵn sàng cho vào orbital trống của ion trung tâm. <br>3. <strong>Số phối trí:</strong> Là số liên kết phối trí (liên kết sigma) mà các phối tử tạo ra xung quanh ion trung tâm. Các số phối trí phổ biến nhất là <strong>6</strong> (phức bát diện), <strong>4</strong> (phức tứ diện hoặc vuông phẳng) và <strong>2</strong> (phức đường thẳng).',
        '<strong>Cầu nội và cầu ngoại:</strong> Trong công thức <code>[Cu(NH₃)₄]SO₄</code>: Cầu nội là ion phức <code>[Cu(NH₃)₄]²⁺</code> đặt trong dấu ngoặc vuông; Cầu ngoại là anion <code>SO₄²⁻</code> bù trừ điện tích.'
      ]
    },
    {
      heading: '2. Liên kết phối trí và Dạng hình học của Phức chất',
      items: [
        '<strong>Bản chất liên kết:</strong> Là <strong>liên kết cho - nhận (liên kết phối trí)</strong>, trong đó phối tử đóng vai trò là base Lewis (chất cho cặp electron) và ion trung tâm đóng vai trò là acid Lewis (chất nhận cặp electron).',
        '<strong>Các dạng hình học không gian phổ biến:</strong> <br>• <strong>Dạng đường thẳng (Số phối trí 2):</strong> Phối tử nằm đối xứng hai bên ion trung tâm theo góc liên kết 180°. Ví dụ: <code>[Ag(NH₃)₂]⁺</code>, <code>[Ag(CN)₂]⁻</code>. <br>• <strong>Dạng tứ diện (Số phối trí 4):</strong> Các phối tử hướng về 4 đỉnh của hình tứ diện đều quanh ion trung tâm. Ví dụ: <code>[Zn(NH₃)₄]²⁺</code>, <code>[CuCl₄]²⁻</code>. <br>• <strong>Dạng vuông phẳng (Số phối trí 4):</strong> Ion trung tâm và 4 phối tử nằm trên cùng một mặt phẳng. Ví dụ: thuốc chống ung thư cisplatin <code>cis-[Pt(NH₃)₂Cl₂]</code>. <br>• <strong>Dạng bát diện đều (Số phối trí 6):</strong> Ion trung tâm ở tâm và 6 phối tử ở 6 đỉnh của hình bát diện. Ví dụ: <code>[Fe(CN)₆]⁴⁻</code>, <code>[Fe(H₂O)₆]³⁺</code>, <code>[Co(NH₃)₆]³⁺</code>.'
      ]
    },
    {
      heading: '3. Phân loại và Danh pháp cơ bản của Phức chất',
      items: [
        '<strong>Phân loại:</strong> <br>• Phức chất cation: Cầu nội mang điện tích dương (ví dụ: [Cu(NH₃)₄]²⁺). <br>• Phức chất anion: Cầu nội mang điện tích âm (ví dụ: [Fe(CN)₆]⁴⁻). <br>• Phức chất trung hòa: Cầu nội không mang điện tích (ví dụ: [Pt(NH₃)₂Cl₂], Ni(CO)₄). <br>• Phức chất càng cua (chelate): Phối tử đa càng tạo nhiều liên kết phối trí tạo thành các vòng kín bền vững (như phức EDTA).',
        '<strong>Danh pháp:</strong> Gọi tên theo thứ tự: Số lượng phối tử (di, tri, tetra, penta, hexa) + Tên phối tử + Tên ion trung tâm kèm số oxi hóa trong ngoặc đơn.'
      ]
    }
  ],

  29: [
    {
      heading: '1. Phản ứng thế phối tử và Sự biến đổi màu sắc của Phức chất',
      items: [
        '<strong>Phản ứng thế phối tử:</strong> Là phản ứng trong đó một hay nhiều phối tử trong cầu nội của phức chất bị thay thế bằng các phối tử khác có khả năng tạo phức bền hơn.',
        '<strong>Thí nghiệm thế phối tử của đồng(II):</strong> <br>• Khi hòa tan muối CuSO₄ vào nước, ion Cu²⁺ tồn tại ở dạng phức aqua <strong>[Cu(H₂O)₄]²⁺ có màu xanh lam nhạt</strong>. <br>• Khi thêm từ từ dung dịch ammonia (NH₃) vào, ban đầu xuất hiện kết tủa Cu(OH)₂, sau đó kết tủa tan hoàn toàn tạo dung dịch phức tetraamminecopper(II) <strong>[Cu(NH₃)₄]²⁺ có màu xanh thẫm (xanh lam đậm)</strong>: <br><code>[Cu(H₂O)₄]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄]²⁺ + 4H₂O</code> (phối tử NH₃ thế chỗ phối tử H₂O).',
        '<strong>Phản ứng với ion chloride Cl⁻:</strong> Khi thêm HCl đặc vào dung dịch CuSO₄, phức màu xanh lam chuyển thành phức tetrachloridocuprate(II) <code>[CuCl₄]²⁻</code> có màu vàng lục.'
      ]
    },
    {
      heading: '2. Cân bằng tạo phức và Độ bền của Phức chất trong dung dịch',
      items: [
        'Quá trình tạo phức trong dung dịch là một cân bằng hóa học thuận nghịch được đặc trưng bởi <strong>Hằng số bền (K_bền)</strong> hoặc Hằng số không bền (K_kb = 1 / K_bền).',
        'Hằng số bền K_bền càng lớn thì phức chất tạo thành càng bền vững, nồng độ ion kim loại tự do trong dung dịch càng nhỏ.',
        '<strong>Hiệu ứng chelate (Hiệu ứng càng cua):</strong> Phức chất tạo bởi các phối tử đa càng (tạo vòng chelate 5 hoặc 6 cạnh) có độ bền cao hơn rất nhiều so với phức chất tương ứng tạo bởi phối tử một càng. EDTA (ethylenediaminetetraacetic acid) là phối tử 6 càng tạo phức cực bền với hầu hết các ion kim loại Ca²⁺, Mg²⁺, Fe³⁺, Pb²⁺.'
      ]
    },
    {
      heading: '3. Vai trò sinh học và Ứng dụng thực tiễn của Phức chất',
      items: [
        '<strong>Vai trò sinh học quyết định sự sống:</strong> <br>• <strong>Hemoglobin:</strong> Phức chất có ion trung tâm là <strong>Fe²⁺</strong> liên kết với vòng porphyrin và phối tử protein globin, đóng vai trò vận chuyển O₂ từ phổi đến các mô tế bào và vận chuyển CO₂ về phổi. <br>• <strong>Diệp lục (Chlorophyll):</strong> Phức chất có ion trung tâm là <strong>Mg²⁺</strong> nằm trong vòng porphyrin, có chức năng hấp thụ năng lượng ánh sáng mặt trời để thực hiện quá trình quang hợp ở cây xanh. <br>• <strong>Vitamin B12 (Cobalamin):</strong> Phức chất tự nhiên duy nhất có chứa ion trung tâm là <strong>Cobalt (Co³⁺)</strong> cần thiết cho quá trình tạo máu và chức năng thần kinh.',
        '<strong>Ứng dụng trong y học và phân tích hóa học:</strong> <br>• Dùng thuốc cisplatin <code>cis-[Pt(NH₃)₂Cl₂]</code> ức chế phân chia tế bào ung thư. <br>• Dùng EDTA làm chất giải độc kim loại nặng (chì, thủy ngân) qua đường bài tiết. <br>• Chuẩn độ phức chất xác định chính xác độ cứng của nước trong kiểm nghiệm môi trường.'
      ]
    }
  ],

  30: [
    {
      heading: '1. Tổng kết kiến thức Chương 8: Kim loại chuyển tiếp dãy 3d và Phức chất',
      items: [
        '<strong>Hệ thống hóa Kim loại chuyển tiếp dãy thứ nhất (Sc → Cu):</strong> Cấu hình electron [Ar] 3d¹⁻¹⁰ 4s¹⁻²; có nhiều trạng thái oxi hóa khác nhau; các hợp chất thường có màu sắc đặc trưng và tính chất từ.',
        '<strong>Cốt lõi lý thuyết Phức chất:</strong> Cấu tạo bởi ion trung tâm (acid Lewis nhận e) và phối tử (base Lewis cho cặp e) qua liên kết phối trí cho - nhận. Các số phối trí đặc trưng: 2, 4, 6 ứng với các dạng hình học thẳng, tứ diện/vuông phẳng và bát diện đều.'
      ]
    },
    {
      heading: '2. Bảng so sánh các Phản ứng tạo phức và Nhận biết ion chuyển tiếp',
      items: [
        '<strong>Ion Cu²⁺:</strong> Tác dụng với NH₃ dư tạo dung dịch phức <code>[Cu(NH₃)₄]²⁺</code> màu xanh lam thẫm đặc trưng.',
        '<strong>Ion Fe³⁺:</strong> Tác dụng với dung dịch thiocyanate SCN⁻ tạo phức <code>[Fe(SCN)]²⁺</code> màu đỏ máu cực kỳ nhạy (dùng để phát hiện vết sắt trong thực phẩm và nước).',
        '<strong>Ion Ag⁺:</strong> Tác dụng với NH₃ tạo phức <code>[Ag(NH₃)₂]⁺</code> (thuốc thử Tollens dùng trong phản ứng tráng bạc monosaccharide và aldehyde).',
        '<strong>Ion Ni²⁺:</strong> Tác dụng với dimethylglyoxime trong môi trường amoniac tạo kết tủa phức chelate màu đỏ tươi.'
      ]
    },
    {
      heading: '3. Phương pháp giải bài tập Phức chất và Bẫy đề thi',
      items: [
        '<strong>Xác định số phối trí và số oxi hóa của ion trung tâm:</strong> <br>• Điện tích phức chất = Điện tích ion trung tâm + Tổng điện tích các phối tử. <br>• Phối tử trung hòa (H₂O, NH₃, CO) có điện tích 0; Phối tử anion (Cl⁻, CN⁻, OH⁻) có điện tích −1. <br>• Ví dụ trong <code>[Co(NH₃)₅Cl]SO₄</code>: Phối tử gồm 5 phân tử NH₃ (0) và 1 ion Cl⁻ (−1); Cầu ngoại là SO₄²⁻ (−2) → Cầu nội mang điện tích +2 → Số oxi hóa của Co là <strong>+3</strong>; Số phối trí là <strong>6</strong>.',
        '<strong>Bẫy đề thi hay gặp:</strong> <br>• Nhầm lẫn giữa số phối tử với số phối trí khi gặp phối tử đa càng (ví dụ: phức [Co(en)₃]³⁺ có 3 phân tử ethylenediamine nhưng là phối tử 2 càng nên số phối trí của Co là 3 × 2 = 6). <br>• Nhầm lẫn ion trung tâm trong Hemoglobin (là Fe²⁺) với ion trung tâm trong Diệp lục (là Mg²⁺).'
      ]
    }
  ]
};

module.exports = curriculumSections;
