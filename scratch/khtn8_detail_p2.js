// Detailed additions for KHTN 8 Part 2: Bài 13 đến Bài 29 (Vật lí)
module.exports = {
  13: {
    objective: "Nắm vững định nghĩa khối lượng riêng (D = m/V), phân biệt với trọng lượng riêng (d = P/V); đổi thành thạo các đơn vị đo g/cm³ và kg/m³; giải thích ứng dụng vật liệu trong kĩ thuật.",
    experimentDetails: "<strong>Đo khối lượng riêng khối lập phương sắt:</strong> Dùng cân đòn/điện tử đo được khối lượng m = 780 gam. Dùng thước kẹp đo cạnh a = 4,64 cm ➔ Thể tích V = a³ = 100 cm³ = 0,0001 m³. Tính: D = 780 / 100 = 7,8 g/cm³ = 7800 kg/m³.",
    exampleProblem: {
      problem: "Một chiếc dầm cầu bằng bê tông có thể tích 2,5 m³. Biết khối lượng riêng của bê tông là 2400 kg/m³. Lấy g = 10 m/s².<br>a) Tính khối lượng của chiếc dầm cầu.<br>b) Tính trọng lượng của chiếc dầm cầu đó.",
      solution: "a) Áp dụng công thức D = m / V ➔ Khối lượng: \\[m = D \\cdot V = 2400 \\times 2,5 = 6000 \\text{ kg (hay 6 tấn)}\\]<br>b) Trọng lượng của dầm bê tông: \\[P = 10 \\cdot m = 10 \\times 6000 = 60.000 \\text{ N}\\]"
    },
    commonMistakes: "Nhầm lẫn giữa khối lượng riêng D (đơn vị kg/m³) và trọng lượng riêng d (đơn vị N/m³), quan hệ qua công thức d = 10·D; quên nhân hoặc chia 1000 khi đổi giữa g/cm³ và kg/m³."
  },
  14: {
    objective: "Thực hành thành thạo kĩ năng đo khối lượng và thể tích của vật rắn hình dạng bất kì không thấm nước (bằng bình chia độ/bình tràn) và chất lỏng (bằng cân trừ bì).",
    experimentDetails: "<strong>Đo khối lượng riêng của dầu ăn:</strong><br>1. Đặt cốc đong rỗng lên cân điện tử, bấm trừ bì (Tare) về 0g.<br>2. Rót vào cốc đúng 100 mL dầu ăn (V = 100 cm³ = 0,0001 m³).<br>3. Đọc số chỉ khối lượng trên cân: m = 80 gam.<br>4. Tính khối lượng riêng: D = 80 / 100 = 0,8 g/cm³ = 800 kg/m³ (dầu ăn nhẹ hơn nước nên nổi trên mặt nước).",
    exampleProblem: {
      problem: "Để đo thể tích của một ổ khóa bằng đồng có hình dạng phức tạp, người ta thả chìm ổ khóa vào bình tràn chứa đầy nước. Nước tràn ra được hứng vào ống đong có số chỉ 25 mL. Cân ổ khóa thấy nặng 222,5 gam. Tính khối lượng riêng của đồng làm ổ khóa.",
      solution: "1. Thể tích nước tràn ra chính bằng thể tích của ổ khóa: \\[V = 25 \\text{ mL} = 25 \\text{ cm}^3\\]<br>2. Khối lượng riêng của đồng: \\[D = \\frac{m}{V} = \\frac{222,5}{25} = 8,9 \\text{ g/cm}^3 = 8900 \\text{ kg/m}^3\\]"
    },
    commonMistakes: "Để bọt khí bám vào bề mặt vật rắn khi thả vào bình chia độ làm thể tích đọc bị cao hơn thực tế; mắt nhìn không ngang với đáy mặt khum của chất lỏng gây sai số đọc số chia."
  },
  15: {
    objective: "Hiểu bản chất của áp lực và áp suất (p = F/S, đơn vị Pascal); giải thích được các ứng dụng tăng, giảm áp suất trong đời sống và kĩ thuật.",
    experimentDetails: "<strong>Thí nghiệm đĩa cát:</strong> Đặt khối kim loại hình hộp chữ nhật có 3 mặt kích thước khác nhau (mặt nhỏ S₁, mặt trung bình S₂, mặt lớn S₃) lên khay cát mịn dưới cùng một khối lượng F. Mặt nhỏ S₁ lún sâu nhất vào cát (áp suất lớn nhất), mặt lớn S₃ lún ít nhất (áp suất nhỏ nhất).",
    exampleProblem: {
      problem: "Một xe tăng có khối lượng 35 tấn. Diện tích tiếp xúc của hai bản xích với mặt đất là 1,75 m². Một ô tô tải có khối lượng 2 tấn với diện tích tiếp xúc của 4 bánh xe là 250 cm² mỗi bánh. Lấy g = 10 m/s². Tính áp suất của xe tăng và ô tô lên mặt đường và so sánh.",
      solution: "1. Với xe tăng: F₁ = 35.000 × 10 = 350.000 N. Diện tích S₁ = 1,75 m².<br>Áp suất xe tăng: \\[p_1 = \\frac{350.000}{1,75} = 200.000 \\text{ Pa}\\]<br>2. Với ô tô: F₂ = 2000 × 10 = 20.000 N. Tổng diện tích 4 bánh S₂ = 4 × 250 cm² = 1000 cm² = 0,1 m².<br>Áp suất ô tô: \\[p_2 = \\frac{20.000}{0,1} = 200.000 \\text{ Pa}\\]<br>Nhận xét: Dù nặng gấp hơn 17 lần ô tô nhưng nhờ có bản xích rộng nên áp suất xe tăng chỉ ngang bằng ô tô tải, giúp xe tăng đi được trên đất lún."
    },
    commonMistakes: "Quên đổi diện tích từ cm² sang m² (phải chia cho 10.000); quên nhân số lượng bánh xe khi tính tổng diện tích tiếp xúc của xe với mặt đường."
  },
  16: {
    objective: "Hiểu rõ áp suất chất lỏng tác dụng theo mọi phương và tăng theo độ sâu (p = d·h); nguyên lí bình thông nhau và máy nén thủy lực; bản chất của áp suất khí quyển.",
    experimentDetails: "<strong>Thí nghiệm bình hình trụ có 3 lỗ rò ở các độ cao khác nhau:</strong> Bịt kín 3 lỗ, đổ đầy nước vào bình rồi mở đồng thời 3 lỗ. Tia nước ở lỗ sâu nhất (h lớn nhất) phóng xa nhất và mạnh nhất, chứng minh áp suất chất lỏng tăng dần theo độ sâu.",
    exampleProblem: {
      problem: "Trong một máy nén thủy lực, diện tích của piston nhỏ là S₁ = 2 cm², diện tích của piston lớn là S₂ = 120 cm². Tác dụng một lực F₁ = 150 N lên piston nhỏ. Hỏi piston lớn có thể nâng được một vật nặng có trọng lượng F₂ tối đa là bao nhiêu?",
      solution: "Áp dụng nguyên lí máy nén thủy lực (áp suất chất lỏng truyền nguyên vẹn theo mọi hướng): \\[\\frac{F_2}{F_1} = \\frac{S_2}{S_1} \\implies F_2 = F_1 \\cdot \\frac{S_2}{S_1} = 150 \\times \\frac{120}{2} = 9000 \\text{ N}\\] (Nâng được vật nặng 900 kg)."
    },
    commonMistakes: "Nhầm lẫn độ sâu h (khoảng cách từ điểm xét lên mặt thoáng chất lỏng) với độ cao từ điểm xét đến đáy bình; áp dụng nhầm công thức p = F/S thay vì p = d·h cho chất lỏng."
  },
  17: {
    objective: "Nắm vững định luật Archimedes, công thức F_A = d·V_chìm; giải thích được điều kiện vật nổi, vật lơ lửng, vật chìm và nguyên lí nổi của tàu thuyền vỏ thép.",
    experimentDetails: "<strong>Thí nghiệm lực kế:</strong> Móc quả cầu kim loại vào lực kế đo trọng lượng ngoài không khí P₁ = 5 N. Nhúng chìm hoàn toàn quả cầu vào cốc nước, số chỉ lực kế giảm còn P₂ = 3,5 N. Lực đẩy Archimedes của nước tác dụng lên quả cầu chính bằng độ giảm số chỉ: F_A = P₁ - P₂ = 5 - 3,5 = 1,5 N.",
    exampleProblem: {
      problem: "Một khối gỗ có thể tích 0,01 m³ được thả vào trong nước. Biết khối lượng riêng của gỗ là D_gỗ = 600 kg/m³, trọng lượng riêng của nước là d_nước = 10.000 N/m³. Khi khối gỗ nằm cân bằng trên mặt nước:<br>a) Khối gỗ nổi hay chìm? Vì sao?<br>b) Tính thể tích phần khối gỗ bị chìm trong nước.",
      solution: "a) Trọng lượng riêng của gỗ d_gỗ = 10 × 600 = 6000 N/m³ < d_nước (10.000 N/m³) nên khối gỗ nổi trên mặt nước.<br>b) Khi gỗ nổi cân bằng, lực đẩy Archimedes cân bằng với trọng lượng khối gỗ: \\[F_A = P \\iff d_{nước} \\cdot V_{chìm} = 10 \\cdot m = 10 \\cdot D_{gỗ} \\cdot V\\]<br>\\[\\implies V_{chìm} = \\frac{10 \\cdot D_{gỗ} \\cdot V}{d_{nước}} = \\frac{6000 \\times 0,01}{10.000} = 0,006 \\text{ m}^3\\] (Chiếm 60% thể tích khối gỗ)."
    },
    commonMistakes: "Dùng toàn bộ thể tích vật V thay vì thể tích phần chìm V_chìm khi tính lực đẩy Archimedes của vật nổi; nhầm lẫn giữa trọng lượng riêng của vật và trọng lượng riêng của chất lỏng."
  },
  18: {
    objective: "Hiểu tác dụng làm quay của lực, xác định đúng cánh tay đòn d (khoảng cách vuông góc từ trục quay đến giá của lực); tính toán moment lực M = F·d.",
    experimentDetails: "<strong>Khảo sát moment lực:</strong> Gắn đĩa tròn có trục quay cố định ở tâm. Móc lực kế vào các lỗ ở các bán kính khác nhau (d lớn, d nhỏ). Để đĩa quay một góc như nhau, khi d càng lớn thì lực F cần kéo càng nhỏ và ngược lại.",
    exampleProblem: {
      problem: "Một người dùng cờ-lê có chiều dài 30 cm để vặn một đai ốc. Lực của tay tác dụng vuông góc vào đầu mút cờ-lê có độ lớn 50 N.<br>a) Tính moment lực tác dụng lên đai ốc.<br>b) Nếu người đó nắm cờ-lê ở vị trí cách đai ốc 15 cm thì phải tác dụng một lực bao nhiêu để tạo ra cùng moment lực như trên?",
      solution: "a) Đổi cánh tay đòn d₁ = 30 cm = 0,3 m. Moment lực: \\[M = F_1 \\cdot d_1 = 50 \\times 0,3 = 15 \\text{ N}\\cdot\\text{m}\\]<br>b) Khi cánh tay đòn rút ngắn còn d₂ = 15 cm = 0,15 m, để M không đổi: \\[F_2 = \\frac{M}{d_2} = \\frac{15}{0,15} = 100 \\text{ N}\\] (Lực tay phải tăng gấp đôi)."
    },
    commonMistakes: "Đo khoảng cách d từ trục quay đến điểm đặt lực mà không đo khoảng cách VUÔNG GÓC đến giá của lực (nếu lực xiên góc, cánh tay đòn sẽ ngắn hơn chiều dài thanh cờ-lê)."
  },
  19: {
    objective: "Nắm vững cấu tạo đòn bẩy và điều kiện cân bằng F₁·d₁ = F₂·d₂; phân biệt đòn bẩy loại 1, 2, 3 và phân tích lợi ích cơ học trong thực tế.",
    experimentDetails: "<strong>Thí nghiệm đòn bẩy đĩa cân:</strong> Đòn bẩy có trục quay ở chính giữa. Treo 2 quả nặng (P₁ = 2N) ở khoảng cách d₁ = 15 cm. Để đòn bẩy thăng bằng khi chỉ dùng 1 quả nặng (P₂ = 1N), ta phải treo quả nặng P₂ ở khoảng cách: d₂ = (P₁·d₁) / P₂ = (2 × 15) / 1 = 30 cm.",
    exampleProblem: {
      problem: "Một người dùng xà beng dài 1,2 m làm đòn bẩy để nâng một khối đá nặng 150 kg (trọng lượng P = 1500 N). Điểm tựa O đặt cách khối đá 0,2 m. Bỏ qua khối lượng của xà beng.<br>a) Tính khoảng cách từ điểm tựa O đến tay người tác dụng lực.<br>b) Tính lực tối thiểu người đó cần tác dụng lên đầu xà beng để bẩy khối đá lên.",
      solution: "a) Khoảng cách từ điểm tựa O đến khối đá là d₂ = 0,2 m. Cánh tay đòn của tay người là: \\[d_1 = 1,2 - 0,2 = 1,0 \\text{ m}\\]<br>b) Áp dụng điều kiện cân bằng đòn bẩy: \\[F_1 \\cdot d_1 = F_2 \\cdot d_2 \\implies F_1 = \\frac{F_2 \\cdot d_2}{d_1} = \\frac{1500 \\times 0,2}{1,0} = 300 \\text{ N}\\] (Lực nâng giảm được 5 lần)."
    },
    commonMistakes: "Lấy toàn bộ chiều dài thanh đòn bẩy làm cánh tay đòn d₁ thay vì lấy chiều dài từ điểm tựa O đến điểm đặt lực của tay; nhầm lẫn vị trí của điểm tựa O giữa các loại đòn bẩy."
  },
  20: {
    objective: "Giải thích hiện tượng nhiễm điện do cọ xát bằng thuyết electron; quy luật tương tác giữa hai loại điện tích (+ và −); quy tắc an toàn phòng chống sét khi dông lốc.",
    experimentDetails: "<strong>Thí nghiệm cọ xát điện tích:</strong> Dùng khăn len cọ xát thanh thủy tinh (thanh nhiễm điện dương do mất bớt electron). Đưa lại gần một quả cầu bấc nhẹ tích điện dương thấy quả cầu bị đẩy ra xa; đưa lại gần quả cầu tích điện âm thấy bị hút vào.",
    exampleProblem: {
      problem: "Vào mùa đông khô hanh, khi ta cởi áo len hoặc chải tóc bằng lược nhựa thường nghe thấy tiếng lách tách nhỏ và thấy tóc bị hút dựng đứng theo chiếc lược. Hãy giải thích hiện tượng trên.",
      solution: "1. Khi cọ xát lược nhựa với tóc, có sự chuyển dời các electron giữa tóc và lược khiến lược và tóc bị nhiễm điện trái dấu.<br>2. Các sợi tóc nhiễm điện cùng loại nên đẩy nhau xòe ra, đồng thời bị chiếc lược nhiễm điện trái dấu hút dính theo.<br>3. Tiếng lách tách là sự phóng điện tia lửa điện vi mô giữa các vật tích điện trong không khí khô."
    },
    commonMistakes: "Nghĩ rằng điện tích dương (proton) dịch chuyển trong chất rắn khi cọ xát (thực tế proton nằm cố định trong hạt nhân, CHỈ CÓ các hạt electron ở vỏ ngoài dịch chuyển)."
  },
  21: {
    objective: "Nắm vững định nghĩa dòng điện trong kim loại (dòng electron tự do), quy ước chiều dòng điện (từ cực dương qua mạch đến cực âm) và phân loại vật liệu dẫn điện, cách điện.",
    experimentDetails: "<strong>Mạch thử tính dẫn điện:</strong> Lắp mạch gồm nguồn pin 3V, bóng đèn nhỏ và 2 đầu que đo hở. Kẹp que đo vào các vật liệu: que kim loại, than chì ruột bút chì làm đèn sáng (dẫn điện); kẹp que gỗ khô, que nhựa đèn không sáng (cách điện).",
    exampleProblem: {
      problem: "So sánh chiều dòng điện theo quy ước trong một đoạn mạch kín với chiều dịch chuyển thực tế của các hạt electron tự do trong dây dẫn kim loại.",
      solution: "• Chiều dòng điện theo quy ước quốc tế: Đi ra từ cực dương (+), chạy qua dây dẫn và thiết bị điện, rồi đi vào cực âm (−) của nguồn điện.<br>• Chiều dịch chuyển của electron tự do: Đi từ cực âm (−) của nguồn, bị cực âm đẩy và bị cực dương (+) hút, dịch chuyển có hướng ngược chiều với chiều quy ước."
    },
    commonMistakes: "Nhầm lẫn chiều dòng điện quy ước và chiều dịch chuyển của electron tự do trong kim loại (hai chiều này luôn NGƯỢC NHAU hoàn toàn)."
  },
  22: {
    objective: "Biết đọc và vẽ sơ đồ mạch điện bằng các kí hiệu quy ước chuẩn; phân biệt mạch kín - mạch hở; hiểu nguyên lí bảo vệ quá tải của cầu chì và aptomat.",
    experimentDetails: "<strong>Lắp mạch điện điều khiển:</strong> Nối cực (+) của pin qua một công tắc K mở, qua một cầu chì 1A, đến bóng đèn 2,5V rồi trở về cực (−) của pin. Khi K mở đèn tắt (mạch hở); khi đóng K đèn sáng rực rỡ (mạch kín).",
    exampleProblem: {
      problem: "Tại sao trong mạng điện sinh hoạt gia đình, người ta không được phép dùng dây đồng hay dây thép nhỏ để thay thế cho dây chì của cầu chì khi cầu chì bị đứt?",
      solution: "1. Dây chì có nhiệt độ nóng chảy thấp (khoảng 327°C). Khi dòng điện tăng cao do quá tải hoặc chập mạch, nhiệt lượng tỏa ra đủ làm dây chì nóng chảy và đứt ngay, bảo vệ thiết bị điện.<br>2. Dây đồng và thép có nhiệt độ nóng chảy rất cao (đồng hơn 1083°C). Nếu dùng thay thế, khi chập điện dây sẽ không chịu đứt mà tiếp tục nóng đỏ gây cháy nhà và nổ thiết bị."
    },
    commonMistakes: "Vẽ sai kí hiệu các cực của nguồn điện (nhầm lẫn vạch dài cực dương và vạch ngắn dày cực âm); nối tắt hai cực của nguồn điện gây ngắn mạch (chập pin hỏng mạch)."
  },
  23: {
    objective: "Nêu và giải thích được 5 tác dụng cơ bản của dòng điện (nhiệt, phát sáng, từ, hóa học, sinh lí) và chỉ ra các ứng dụng thực tiễn tương ứng trong cuộc sống.",
    experimentDetails: "<strong>Chế tạo nam châm điện đơn giản:</strong> Lấy dây đồng tráng men quấn khoảng 50 vòng quanh một chiếc đinh sắt lớn. Nối hai đầu dây vào nguồn pin 1,5V. Đưa đầu đinh sắt lại gần các mẩu ghim giấy kim loại thấy đinh sắt hút chặt các ghim sắt (chứng minh tác dụng từ). Khi ngắt điện, ghim sắt rụng ra.",
    exampleProblem: {
      problem: "Hãy ghép mỗi thiết bị/hiện tượng ở cột bên trái với tác dụng chủ yếu tương ứng của dòng điện ở cột bên phải:<br>1. Bàn là, ấm đun siêu tốc.<br>2. Nam châm điện, chuông điện.<br>3. Mạ đồng, mạ vàng trang sức.<br>4. Dùng máy sốc tim cứu người bị ngưng tim.",
      solution: "• 1 ghép với Tác dụng nhiệt (chuyển điện năng thành nhiệt năng).<br>• 2 ghép với Tác dụng từ (sinh ra từ trường hút sắt thép).<br>• 3 ghép với Tác dụng hóa học (phản ứng điện phân bám kim loại).<br>• 4 ghép với Tác dụng sinh lí (kích thích hệ cơ tim co bóp trở lại)."
    },
    commonMistakes: "Bỏ quên tác dụng từ của dòng điện (mọi dòng điện chạy qua dây dẫn đều sinh ra từ trường xung quanh); xem nhẹ tác dụng sinh lí nguy hiểm của điện lưới 220V."
  },
  24: {
    objective: "Hiểu ý nghĩa cường độ dòng điện (I) và hiệu điện thế (U); nhớ đơn vị Ampe (A) và Volt (V); nắm vững quy tắc bất di bất dịch: Ampe kế mắc nối tiếp, Vôn kế mắc song song.",
    experimentDetails: "<strong>Quan sát mặt đồng hồ Ampe kế & Vôn kế:</strong> Nhận biết kí hiệu A (hoặc mA) và V (hoặc mV). Xác định GHĐ (giá trị lớn nhất) và ĐCNN (khoảng cách giữa 2 vạch chia nhỏ nhất kề nhau). Núm màu đỏ là chốt dương (+), núm màu đen là chốt âm (−).",
    exampleProblem: {
      problem: "Đổi các đơn vị sau ra Ampe (A) và Volt (V):<br>a) I₁ = 350 mA; I₂ = 1200 mA.<br>b) U₁ = 220 kV; U₂ = 500 mV.",
      solution: "a) Đổi cường độ dòng điện (1 A = 1000 mA):<br>• I₁ = 350 / 1000 = 0,35 A.<br>• I₂ = 1200 / 1000 = 1,2 A.<br>b) Đổi hiệu điện thế (1 kV = 1000 V ; 1 V = 1000 mV):<br>• U₁ = 220 × 1000 = 220.000 V.<br>• U₂ = 500 / 1000 = 0,5 V."
    },
    commonMistakes: "Lỗi làm cháy dụng cụ đo: Mắc Ampe kế trực tiếp vào hai cực của nguồn điện hoặc mắc song song với thiết bị (ampe kế có điện trở rất nhỏ nên sẽ bị đoản mạch cháy kim)."
  },
  25: {
    objective: "Thực hành đo thành thạo I và U trên các đoạn mạch; kiểm chứng quy luật: Đoạn mạch nối tiếp (I = I₁ = I₂, U = U₁ + U₂) và đoạn mạch song song (U = U₁ = U₂, I = I₁ + I₂).",
    experimentDetails: "<strong>Mạch đo thực hành:</strong> Lắp 2 bóng đèn giống nhau nối tiếp vào bộ pin 6V. Đo được dòng điện I = 0,3A chạy qua cả 2 đèn. Đo hiệu điện thế giữa 2 đầu đèn 1 là U₁ = 3V, đèn 2 là U₂ = 3V. Tổng U₁ + U₂ = 3 + 3 = 6V đúng bằng hiệu điện thế toàn mạch.",
    exampleProblem: {
      problem: "Cho mạch điện gồm hai bóng đèn Đ₁ và Đ₂ mắc song song vào nguồn điện có hiệu điện thế U = 12V. Ampe kế đo dòng điện mạch chính chỉ I = 0,8 A. Dòng điện qua đèn Đ₁ đo được là I₁ = 0,35 A.<br>a) Tính hiệu điện thế giữa hai đầu mỗi bóng đèn Đ₁ và Đ₂.<br>b) Tính cường độ dòng điện I₂ chạy qua đèn Đ₂.",
      solution: "a) Trong đoạn mạch song song: Hiệu điện thế ở hai đầu các nhánh rẽ bằng nhau và bằng hiệu điện thế nguồn: \\[U_1 = U_2 = U = 12 \\text{ V}\\]<br>b) Cường độ dòng điện mạch chính bằng tổng các mạch rẽ: \\[I = I_1 + I_2 \\implies I_2 = I - I_1 = 0,8 - 0,35 = 0,45 \\text{ A}\\]"
    },
    commonMistakes: "Nhầm lẫn giữa công thức tính dòng điện I và hiệu điện thế U giữa mạch nối tiếp và mạch song song (hay đảo lộn công thức của hai loại mạch)."
  },
  26: {
    objective: "Nắm vững bản chất chuyển động nhiệt phân tử; định nghĩa năng lượng nhiệt và nội năng của vật; phân biệt và lấy ví dụ về 2 cách làm biến đổi nội năng (thực hiện công và truyền nhiệt).",
    experimentDetails: "<strong>Thí nghiệm que nén khí:</strong> Trong một xilanh thủy tinh dày có chứa một mẩu bông gòn nhỏ tẩm cồn. Ấn mạnh và nhanh piston xuống (thực hiện công cơ học lên chất khí trong xilanh) ➔ Khí bị nén lại, nội năng và nhiệt độ tăng vọt làm mẩu bông bùng cháy tức thì.",
    exampleProblem: {
      problem: "Nêu hai ví dụ thực tế chứng minh nội năng của một vật có thể thay đổi bằng hình thức thực hiện công và hai ví dụ bằng hình thức truyền nhiệt.",
      solution: "• Bằng thực hiện công: 1. Cọ xát hai bàn tay vào nhau thấy tay ấm lên. 2. Dùng cưa cưa gỗ, lưỡi cưa bị ma sát nóng bừng lên.<br>• Bằng truyền nhiệt: 1. Thả một thìa kim loại vào cốc nước sôi, thìa nóng lên do nhận nhiệt lượng từ nước. 2. Phơi nước ngoài trời nắng, nước ấm lên do hấp thu năng lượng mặt trời."
    },
    commonMistakes: "Nghĩ rằng nhiệt độ của vật càng cao thì vật chứa càng nhiều 'nhiệt lượng' (nhiệt lượng không phải dạng năng lượng có sẵn trong vật mà chỉ xuất hiện trong quá trình truyền nhiệt)."
  },
  27: {
    objective: "Hiểu nguyên lí làm việc của joulemeter; đo lượng năng lượng nhiệt cung cấp cho nước và xác định mối quan hệ định lượng giữa nhiệt lượng nhận được với khối lượng và độ tăng nhiệt độ.",
    experimentDetails: "<strong>Thực hành đo nhiệt lượng:</strong> Đổ 150 gam nước vào bình nhiệt lượng kế, cắm nhiệt kế đọc t₁ = 25°C. Cắm dây đun qua Joulemeter. Bật nguồn, khi Joulemeter chỉ E = 6300 J, nhiệt độ nước tăng lên t₂ = 35°C (tăng 10°C). Nhiệt lượng thu vào tỉ lệ thuận với độ tăng nhiệt độ.",
    exampleProblem: {
      problem: "Để đun nóng 200 gam nước từ 25°C lên 45°C (tăng 20°C), một joulemeter ghi nhận năng lượng điện tiêu thụ là 16.800 J. Hỏi muốn đun nóng 400 gam nước tăng thêm 20°C thì cần cung cấp một năng lượng nhiệt khoảng bao nhiêu?",
      solution: "1. Năng lượng nhiệt cần thiết để làm nóng một chất tỉ lệ thuận với khối lượng của chất đó: \\[Q = m \\cdot c \\cdot \\Delta t\\]<br>2. Khối lượng nước tăng gấp đôi (từ 200g lên 400g) trong khi độ tăng nhiệt độ giữ nguyên (Δt = 20°C), do đó năng lượng cần cung cấp cũng phải tăng gấp đôi: \\[E' = 2 \\times 16.800 = 33.600 \\text{ J}\\]"
    },
    commonMistakes: "Không đậy nắp kín bình nhiệt lượng kế khiến năng lượng nhiệt bị thất thoát ra ngoài không khí xung quanh làm sai lệch số đo của joulemeter."
  },
  28: {
    objective: "Phân biệt 3 hình thức truyền nhiệt: Dẫn nhiệt (rắn), Đối lưu (lỏng, khí), Bức xạ nhiệt (chân không); giải thích các hiện tượng thực tế và hiệu ứng nhà kính.",
    experimentDetails: "<strong>Thí nghiệm dẫn nhiệt & đối lưu:</strong><br>• Dẫn nhiệt: Đun nóng một đầu thanh kim loại có đính các viên sáp cách đều ➔ sáp chảy và đinh rụng lần lượt từ đầu nóng đến đầu lạnh.<br>• Đối lưu: Đặt ống nghiệm chứa nước có cục đá được chặn ở đáy bằng kẹp lưới kim loại, đun ngọn lửa ở phần trên miệng ống nghiệm ➔ Nước ở miệng sôi sùng sục nhưng cục đá ở đáy vẫn chưa tan (nước dẫn nhiệt kém, đối lưu chỉ truyền dòng nóng lên trên).",
    exampleProblem: {
      problem: "Tại sao trong các thiết bị sưởi ấm mùa đông (lò sưởi, máy sưởi dầu), người ta luôn lắp đặt chúng ở vị trí thấp sát sàn nhà, trong khi máy điều hòa nhiệt độ làm mát mùa hè lại luôn được treo ở trên cao sát trần nhà?",
      solution: "1. Máy sưởi đặt ở dưới thấp: Không khí nóng ở dưới nhẹ hơn sẽ tự động bay lên cao tạo thành dòng đối lưu sưởi ấm khắp căn phòng.<br>2. Điều hòa làm mát treo ở trên cao: Không khí lạnh ở trên nặng hơn (khối lượng riêng lớn hơn) sẽ chìm xuống dưới, đẩy luồng khí nóng bay lên tiếp xúc với dàn lạnh tạo dòng đối lưu tuần hoàn làm mát nhanh toàn bộ phòng."
    },
    commonMistakes: "Nghĩ rằng đối lưu có thể xảy ra trong chất rắn (trong chất rắn các phân tử chỉ dao động quanh vị trí cân bằng, không thể tạo thành dòng chuyển động nên chỉ có dẫn nhiệt)."
  },
  29: {
    objective: "So sánh độ nở vì nhiệt: Khí > Lỏng > Rắn; giải thích cấu tạo và nguyên lí hoạt động của băng kép, khe co giãn đường ray, nhiệt kế thủy ngân.",
    experimentDetails: "<strong>Thí nghiệm hơ nóng băng kép:</strong> Một băng kép được tán chặt từ 2 thanh kim loại: lá đồng ở trên, lá thép ở dưới. Khi hơ trên ngọn lửa đèn cồn, băng kép bị uốn cong vòng xuống phía dưới (cong về phía lá thép). Giải thích: Đồng nở vì nhiệt nhiều hơn thép nên thanh đồng dài hơn và đẩy uốn cong thanh thép.",
    exampleProblem: {
      problem: "Tại sao khi đun nước bằng ấm siêu tốc hay ấm đun nước trên bếp, người ta không bao giờ đổ nước thật đầy ắp đến tận miệng ấm?",
      solution: "1. Khi đun nóng, cả nước và ấm đều nở vì nhiệt. Tuy nhiên, chất lỏng (nước) nở vì nhiệt nhiều hơn chất rắn (vỏ kim loại của ấm).<br>2. Nếu đổ đầy miệng, nước nóng nở ra sẽ tràn ra ngoài, gây chập cháy điện hoặc làm tắt bếp lửa rất nguy hiểm."
    },
    commonMistakes: "Quên nguyên tắc: Khi bị nung nóng, băng kép luôn uốn cong về phía kim loại nở vì nhiệt ít hơn; khi bị làm lạnh, băng kép sẽ uốn cong ngược lại về phía kim loại nở nhiều hơn."
  }
};
