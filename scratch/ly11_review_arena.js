module.exports = {
  "summaryTable": [
    {
      "bai": "Bài 1",
      "name": "Trường hấp dẫn",
      "cd": "CĐ 1",
      "concept": "Lực hấp dẫn Newton, gia tốc trọng trường g, vận tốc vũ trụ cấp 1 (7,9 km/s), quỹ đạo LEO & GEO",
      "formula": "F = G m₁m₂/r², g = GM/(R+h)², v₁ = √(GM/R)",
      "app": "Phóng vệ tinh nhân tạo, trạm vũ trụ ISS, vệ tinh địa tĩnh Vinasat-1"
    },
    {
      "bai": "Bài 2",
      "name": "Cường độ trường hấp dẫn",
      "cd": "CĐ 1",
      "concept": "Vector g⃗ = F⃗/m, trường xuyên tâm vật cầu, nguyên lí chồng chất vector, đường sức trường hấp dẫn",
      "formula": "g = GM/r², g⃗ = g⃗₁ + g⃗₂, r₁/r₂ = √(M₁/M₂)",
      "app": "Bản đồ dị thường trọng lực thăm dò dầu khí, điểm cân bằng hấp dẫn Apollo"
    },
    {
      "bai": "Bài 3",
      "name": "Thế hấp dẫn & Thế năng",
      "cd": "CĐ 1",
      "concept": "Thế hấp dẫn φ, thế năng W_t (mốc vô cực âm), công lực thế A₁₂ = W_t1 - W_t2, bảo toàn cơ năng, v₂",
      "formula": "φ = -GM/r, W_t = -GMm/r, v₂ = √(2GM/R) = √2 v₁",
      "app": "Tính năng lượng phóng tàu thám hiểm Sao Hỏa, năng lượng va chạm thiên thạch"
    },
    {
      "bai": "Bài 4",
      "name": "Biến điệu sóng vô tuyến",
      "cd": "CĐ 2",
      "concept": "Sóng mang cao tần, biến điệu AM (thay đổi biên độ), FM (thay đổi tần số), sơ đồ khối thu phát vô tuyến",
      "formula": "B_AM = 2 f_m,max, B_FM ≈ 2(Δf + f_m,max)",
      "app": "Đài phát thanh AM/FM, âm nhạc Stereo chống nhiễu sấm sét, thông tin hàng không"
    },
    {
      "bai": "Bài 5",
      "name": "Tín hiệu tương tự & Tín hiệu số",
      "cd": "CĐ 2",
      "concept": "Tín hiệu liên tục (Analog) vs xung rời rạc (Digital), quy trình ADC/PCM: Lấy mẫu, Lượng tử hóa, Mã hóa",
      "formula": "fs ≥ 2 f_max (Nyquist), Mức lượng tử = 2ⁿ, Bitrate = fs · n · c",
      "app": "Đĩa CD âm thanh (44,1 kHz/16 bit), truyền dẫn cáp quang số không suy hao qua trạm lặp"
    },
    {
      "bai": "Bài 6",
      "name": "Suy giảm tín hiệu",
      "cd": "CĐ 2",
      "concept": "Môi trường cáp xoắn đôi, cáp đồng trục, sợi quang phản xạ toàn phần, vô tuyến; đơn vị đo Decibel (dB, dBm)",
      "formula": "A_dB = 10 log₁₀(P_vào / P_ra), A = α · L, P_dBm = 10 log₁₀(P / 1mW)",
      "app": "Tính cự li trạm lặp cáp quang liên tỉnh (α = 0,2 dB/km), vùng phủ sóng Wi-Fi"
    },
    {
      "bai": "Bài 7",
      "name": "Cảm biến (LDR, Thermistor)",
      "cd": "CĐ 3",
      "concept": "Điện trở quang LDR (sáng tăng R giảm), nhiệt điện trở NTC (nhiệt tăng R giảm), mạch cầu phân áp và cầu Wheatstone",
      "formula": "U_ra = Vs · R₂ / (R₁ + R₂), Cầu cân bằng: R₁/R₂ = R₃/R₄",
      "app": "Cảm biến chiếu sáng thông minh đô thị, giám sát quá nhiệt pin Lithium, cân điện tử"
    },
    {
      "bai": "Bài 8",
      "name": "Op-Amp & Thiết bị đầu ra",
      "cd": "CĐ 3",
      "concept": "Op-Amp so sánh V₊ > V₋ ⟹ V_out cao, relay điện từ cách ly có diode dập xung bảo vệ, điện trở hạn dòng LED",
      "formula": "R = (U_ra - U_LED) / I_LED, e_tc = -L di/dt",
      "app": "Module điều khiển đóng ngắt tải 220V an toàn, mạch chỉ thị LED chống cháy nổ"
    },
    {
      "bai": "Bài 9",
      "name": "Mạch điện đơn giản",
      "cd": "CĐ 3",
      "concept": "Chu trình 3 khối: Cảm biến ⟹ Op-Amp xử lí ⟹ Cơ cấu chấp hành; quy trình thiết kế 5 bước và an toàn phòng lab",
      "formula": "Nguyên lí cảm ứng IR, nồng độ MQ-2, chống rung Schmitt Trigger",
      "app": "Đèn đường tự bật đêm, còi hú báo rò khí gas, vòi rửa tay cảm ứng tiệm cận"
    }
  ],
  "formulaTable": [
    {
      "name": "Định luật vạn vật hấp dẫn",
      "formula": "F = G \\frac{m_1 m_2}{r^2}",
      "unit": "N",
      "note": "G ≈ 6,67 × 10⁻¹¹ N·m²/kg²; r là khoảng cách giữa 2 tâm"
    },
    {
      "name": "Cường độ trường hấp dẫn",
      "formula": "g = \\frac{GM}{r^2} = \\frac{GM}{(R+h)^2}",
      "unit": "N/kg hoặc m/s²",
      "note": "Tại mặt đất: g₀ = GM/R² ≈ 9,8 m/s²; g tỉ lệ nghịch với r²"
    },
    {
      "name": "Thế hấp dẫn (mốc ở vô cực)",
      "formula": "\\varphi = -\\frac{GM}{r} = -\\frac{GM}{R+h}",
      "unit": "J/kg",
      "note": "Luôn có giá trị âm; φ_∞ = 0"
    },
    {
      "name": "Thế năng hấp dẫn",
      "formula": "W_t = m\\varphi = -\\frac{GMm}{r}",
      "unit": "J",
      "note": "Công lực hấp dẫn: A₁₂ = W_t1 - W_t2 = GMm(1/r₂ - 1/r₁)"
    },
    {
      "name": "Vận tốc vũ trụ cấp 1",
      "formula": "v_1 = \\sqrt{\\frac{GM}{R}} = \\sqrt{g_0 R}",
      "unit": "m/s",
      "note": "v₁ ≈ 7,9 km/s (bay tròn quanh Trái Đất sát mặt đất)"
    },
    {
      "name": "Vận tốc vũ trụ cấp 2",
      "formula": "v_2 = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_1",
      "unit": "m/s",
      "note": "v₂ ≈ 11,2 km/s (vừa đủ thoát ly trường hấp dẫn Trái Đất)"
    },
    {
      "name": "Băng thông phát thanh AM",
      "formula": "B_{AM} = 2 f_{m,\\max}",
      "unit": "Hz",
      "note": "Khoảng 10 - 20 kHz (băng hẹp, dễ nhiễu biên độ)"
    },
    {
      "name": "Băng thông phát thanh FM (Carson)",
      "formula": "B_{FM} \\approx 2(\\Delta f + f_{m,\\max})",
      "unit": "Hz",
      "note": "Khoảng 150 - 200 kHz (băng rộng, chống nhiễu tuyệt hảo)"
    },
    {
      "name": "Định lí lấy mẫu Nyquist-Shannon",
      "formula": "f_s \\ge 2 f_{\\max}",
      "unit": "Hz",
      "note": "Đĩa CD: f_s = 44,1 kHz để thu âm thanh người nghe đến 20 kHz"
    },
    {
      "name": "Độ suy giảm công suất (dB)",
      "formula": "A_{\\text{dB}} = 10 \\log_{10} \\left(\\frac{P_{\\text{vào}}}{P_{\\text{ra}}}\\right)",
      "unit": "dB",
      "note": "Giảm 2 lần = 3 dB; giảm 10 lần = 10 dB; giảm 100 lần = 20 dB"
    },
    {
      "name": "Hệ số suy giảm theo chiều dài",
      "formula": "A = \\alpha \\times L",
      "unit": "dB",
      "note": "α tính bằng dB/km; sợi quang 1550 nm có α ≈ 0,2 dB/km"
    },
    {
      "name": "Mức công suất tuyệt đối (dBm)",
      "formula": "P_{\\text{dBm}} = 10 \\log_{10} \\left(\\frac{P}{1\\text{ mW}}\\right)",
      "unit": "dBm",
      "note": "1 mW = 0 dBm; 10 mW = 10 dBm; 1 W = 30 dBm"
    },
    {
      "name": "Điện áp ra mạch cầu phân áp",
      "formula": "U_{\\text{ra}} = V_s \\frac{R_2}{R_1 + R_2}",
      "unit": "V",
      "note": "R₂ ở nhánh dưới: nếu R₂ tăng thì U_ra tăng theo"
    },
    {
      "name": "Điện trở hạn dòng bảo vệ LED",
      "formula": "R = \\frac{U_{\\text{ra}} - U_{LED}}{I_{LED}}",
      "unit": "Ω",
      "note": "U_LED đỏ ≈ 2V; lam/trắng ≈ 3,2V; I_LED ≈ 10 - 20 mA"
    }
  ],
  "verbalSchematics": [
    {
      "num": 1,
      "title": "Sơ đồ Trường hấp dẫn & Lực hút",
      "desc": "Vật nguồn khối lượng M sinh ra trường hấp dẫn bao quanh → Các đường sức xuyên tâm hướng về tâm M → Đặt vật thử m vào → Lực hấp dẫn F⃗ = m·g⃗ cùng hướng với g⃗ hướng về tâm M."
    },
    {
      "num": 2,
      "title": "Sơ đồ Hệ thống Phát thanh vô tuyến",
      "desc": "Âm thanh → Micro (biến đổi thành tín hiệu âm tần) → Biến điệu (trộn âm tần vào sóng mang cao tần từ mạch dao động) → Khuếch đại cao tần → Anten phát bức xạ sóng điện từ vào không gian; Anten thu bắt sóng → Mạch chọn sóng (khung LC cộng hưởng) → Tách sóng (lọc bỏ sóng mang, giữ âm tần) → Khuếch đại âm tần → Loa tái tạo âm thanh."
    },
    {
      "num": 3,
      "title": "Sơ đồ Truyền thông tin số PCM",
      "desc": "Tín hiệu âm thanh tương tự → Lấy mẫu Sampling (chu kì Ts thỏa fs ≥ 2 f_max) → Lượng tử hóa Quantization (làm tròn về 2ⁿ mức) → Mã hóa Encoding (chuyển thành chuỗi bit 0 và 1) → Truyền qua cáp quang/vô tuyến → Trạm lặp số tái sinh xung vuông chống nhiễu → Giải mã DAC và lọc thông thấp → Tín hiệu âm thanh ban đầu ra loa."
    },
    {
      "num": 4,
      "title": "Sơ đồ Mạch điều khiển cảm biến tự động",
      "desc": "Môi trường biến đổi (ánh sáng, nhiệt độ, khí gas, tia hồng ngoại) → Cảm biến thay đổi điện trở trong mạch phân áp → Xuất tín hiệu điện áp V_cb → Op-Amp so sánh với điện áp chuẩn V_ref → Nếu vượt ngưỡng, ngõ ra Op-Amp nhảy lên mức cao → Kích transistor dẫn dòng cuộn hút Relay (có Diode dập xung) → Đóng tiếp điểm mở tải công suất (Đèn chiếu sáng, Còi báo động, Van nước)."
    }
  ],
  "safetyRules": [
    "Khi thực hành trong phòng thí nghiệm trường học, chỉ sử dụng nguồn điện một chiều hạ áp an toàn (DC 5V - 12V) từ pin, ắc quy hoặc bộ nguồn adapter cách ly.",
    "Tuyệt đối không cấp nguồn điện lưới xoay chiều 220V AC trực tiếp vào bảng mạch cắm thử nghiệm (breadboard).",
    "Mọi đấu nối tải công suất lớn 220V qua rơ-le phải được cách li cơ học trong hộp nhựa tiêu chuẩn và có sự giám sát, đo kiểm của giáo viên.",
    "Bắt buộc phải mắc diode dập xung (1N4007) ngược chiều song song với cuộn hút relay để tránh xung điện áp tự cảm phá hủy transistor hoặc Op-Amp.",
    "Luôn lắp điện trở hạn dòng nối tiếp cho LED để khống chế dòng không vượt quá định mức 20 mA, tránh làm cháy nổ tiếp giáp bán dẫn p-n."
  ],
  "arenaQuestions": [
    {
      "q": "Câu 1: Lực hấp dẫn giữa hai vật đồng tính hình cầu tuân theo quy luật nào khi khoảng cách giữa hai tâm tăng lên gấp đôi?",
      "options": [
        "A. Tăng lên gấp 2 lần",
        "B. Giảm đi 2 lần",
        "C. Giảm đi 4 lần",
        "D. Giảm đi 8 lần"
      ],
      "answer": 2,
      "explanation": "Theo Định luật vạn vật hấp dẫn, F = G m₁m₂/r². Khi r tăng 2 lần thì lực F giảm đi 2² = 4 lần."
    },
    {
      "q": "Câu 2: Vận tốc vũ trụ cấp 1 (v₁ ≈ 7,9 km/s) có ý nghĩa vật lí nào sau đây?",
      "options": [
        "A. Vận tốc tối thiểu để vật thoát ly hoàn toàn khỏi trường hấp dẫn Trái Đất",
        "B. Vận tốc ban đầu tối thiểu theo phương ngang để vật bay theo quỹ đạo tròn quanh Trái Đất sát mặt biển",
        "C. Vận tốc của tàu lặn dưới đáy biển",
        "D. Vận tốc âm thanh trong tầng bình lưu"
      ],
      "answer": 1,
      "explanation": "Vận tốc vũ trụ cấp 1 v₁ = √(gR) ≈ 7,9 km/s là vận tốc tối thiểu cần truyền cho vật thể sát mặt đất để nó chuyển động theo quỹ đạo tròn khép kín quanh Trái Đất."
    },
    {
      "q": "Câu 3: Càng lên cao so với mặt đất, cường độ trường hấp dẫn g của Trái Đất sẽ:",
      "options": [
        "A. Tăng dần tỉ lệ thuận với độ cao",
        "B. Giảm dần theo công thức g = GM / (R + h)²",
        "C. Giữ nguyên hằng số không đổi",
        "D. Biến thiên tuần hoàn dạng hình sin"
      ],
      "answer": 1,
      "explanation": "Cường độ trường hấp dẫn tại độ cao h tính bằng g = GM/(R+h)², do đó khi độ cao h tăng thì g giảm tỉ lệ nghịch với (R+h)²."
    },
    {
      "q": "Câu 4: Khi chọn mốc thế năng hấp dẫn ở vô cực, giá trị thế hấp dẫn φ tại một điểm cách tâm Trái Đất một khoảng r luôn:",
      "options": [
        "A. Có giá trị dương",
        "B. Bằng đúng hằng số G",
        "C. Có giá trị âm: φ = -GM/r",
        "D. Bằng vô cùng lớn"
      ],
      "answer": 2,
      "explanation": "Vì lực hấp dẫn là lực hút, công đưa vật từ vô cực về khoảng cách r là công dương của lực hút, do đó thế hấp dẫn luôn có giá trị âm: φ = -GM/r < 0."
    },
    {
      "q": "Câu 5: Công của lực hấp dẫn khi làm một vật dịch chuyển giữa hai điểm trong không gian có đặc điểm gì?",
      "options": [
        "A. Phụ thuộc vào hình dạng phức tạp của đường cong quỹ đạo",
        "B. Chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối: A = W_t1 - W_t2",
        "C. Luôn bằng 0 trong mọi trường hợp",
        "D. Tỉ lệ thuận với diện tích bao quanh quỹ đạo"
      ],
      "answer": 1,
      "explanation": "Trường hấp dẫn là một trường thế, do đó công của lực hấp dẫn không phụ thuộc vào dạng đường đi mà chỉ phụ thuộc vào tọa độ vị trí đầu và cuối."
    },
    {
      "q": "Câu 6: Vận tốc vũ trụ cấp 2 (v₂ ≈ 11,2 km/s) liên hệ với vận tốc vũ trụ cấp 1 (v₁) theo hệ thức nào?",
      "options": [
        "A. v₂ = 2 v₁",
        "B. v₂ = √2 · v₁",
        "C. v₂ = v₁ / 2",
        "D. v₂ = 4 v₁"
      ],
      "answer": 1,
      "explanation": "Ta có v₁ = √(GM/R) và v₂ = √(2GM/R) = √2 v₁ ≈ 1,414 × 7,9 ≈ 11,2 km/s."
    },
    {
      "q": "Câu 7: Tại sao tín hiệu âm thanh âm tần (20 Hz - 20 kHz) không thể truyền trực tiếp vào không gian để truyền tin đi xa?",
      "options": [
        "A. Vì bước sóng quá lớn đòi hỏi kích thước anten khổng lồ (vài chục km) và năng lượng sóng rất yếu",
        "B. Vì sóng âm tần truyền nhanh hơn vận tốc ánh sáng làm đứt dây anten",
        "C. Vì sóng âm tần bị phản xạ 100% khi vừa ra khỏi micro",
        "D. Vì sóng âm tần biến đổi thành điện một chiều"
      ],
      "answer": 0,
      "explanation": "Anten phát sóng hiệu quả cần chiều dài L ≈ λ/4. Với f = 1 kHz, λ = 300 km nên anten cần dài tới 75 km, đồng thời sóng tần số thấp mang năng lượng bé và dễ bị suy hao trong khí quyển."
    },
    {
      "q": "Câu 8: Điểm khác biệt mấu chốt giữa sóng biến điệu AM và FM là:",
      "options": [
        "A. AM biến đổi biên độ sóng mang, FM biến đổi tần số sóng mang theo tín hiệu âm thanh",
        "B. AM dùng sóng siêu âm, FM dùng tia X",
        "C. AM không cần anten thu, FM cần anten parabol khổng lồ",
        "D. AM chỉ truyền được văn bản chữ, FM chỉ truyền được hình ảnh màu"
      ],
      "answer": 0,
      "explanation": "AM (Amplitude Modulation) thay đổi biên độ sóng mang theo tín hiệu thông tin; FM (Frequency Modulation) thay đổi tần số sóng mang theo tín hiệu thông tin trong khi biên độ giữ không đổi."
    },
    {
      "q": "Câu 9: Băng thông chiếm dụng của một đài phát thanh AM phát tín hiệu âm thanh có tần số cực đại 10 kHz là:",
      "options": [
        "A. 10 kHz",
        "B. 20 kHz",
        "C. 5 kHz",
        "D. 100 kHz"
      ],
      "answer": 1,
      "explanation": "Băng thông phát thanh AM bằng hai lần tần số cực đại của tín hiệu âm tần: B_AM = 2 f_m,max = 2 × 10 = 20 kHz."
    },
    {
      "q": "Câu 10: Theo định lí lấy mẫu Nyquist-Shannon, để số hóa hoàn hảo tín hiệu âm thanh có tần số cao nhất 20 kHz, tần số lấy mẫu fs tối thiểu phải bằng:",
      "options": [
        "A. 10 kHz",
        "B. 20 kHz",
        "C. 40 kHz",
        "D. 100 kHz"
      ],
      "answer": 2,
      "explanation": "Định lí Nyquist yêu cầu fs ≥ 2 f_max. Với f_max = 20 kHz thì fs ≥ 2 × 20 = 40 kHz (đĩa CD chọn chuẩn 44,1 kHz)."
    },
    {
      "q": "Câu 11: Nếu một bộ chuyển đổi ADC dùng 8 bit để biểu diễn mỗi mẫu, số mức lượng tử hóa có thể có là:",
      "options": [
        "A. 8 mức",
        "B. 64 mức",
        "C. 128 mức",
        "D. 256 mức"
      ],
      "answer": 3,
      "explanation": "Với n bit mã hóa nhị phân, số mức lượng tử hóa rời rạc là 2ⁿ = 2⁸ = 256 mức."
    },
    {
      "q": "Câu 12: Hiện tượng vật lí nào là nguyên lí cốt lõi giúp ánh sáng truyền đi trong lõi sợi cáp quang mà không bị lọt ra ngoài?",
      "options": [
        "A. Hiện tượng tán sắc ánh sáng",
        "B. Hiện tượng phản xạ toàn phần",
        "C. Hiện tượng giao thoa ánh sáng",
        "D. Hiện tượng nhiễu xạ qua khe hẹp"
      ],
      "answer": 1,
      "explanation": "Ánh sáng truyền dọc trong lõi sợi thủy tinh (core) nhờ hiện tượng phản xạ toàn phần liên tục tại mặt phân cách với lớp vỏ bọc (cladding) có chiết suất nhỏ hơn."
    },
    {
      "q": "Câu 13: Một đường truyền tín hiệu có công suất đầu vào P_vào = 1000 mW và công suất đầu ra P_ra = 10 mW. Độ suy giảm A tính bằng dB là:",
      "options": [
        "A. 10 dB",
        "B. 20 dB",
        "C. 30 dB",
        "D. 100 dB"
      ],
      "answer": 1,
      "explanation": "A_dB = 10 log₁₀(P_vào / P_ra) = 10 log₁₀(1000 / 10) = 10 log₁₀(100) = 10 × 2 = 20 dB."
    },
    {
      "q": "Câu 14: Tuyến cáp quang dài 50 km có hệ số suy giảm α = 0,2 dB/km. Tổng độ suy giảm trên toàn bộ tuyến cáp là:",
      "options": [
        "A. 0,2 dB",
        "B. 5 dB",
        "C. 10 dB",
        "D. 25 dB"
      ],
      "answer": 2,
      "explanation": "A = α × L = 0,2 dB/km × 50 km = 10 dB."
    },
    {
      "q": "Câu 15: Mức công suất P = 1 mW tương ứng với bao nhiêu dBm?",
      "options": [
        "A. 0 dBm",
        "B. 1 dBm",
        "C. 10 dBm",
        "D. -10 dBm"
      ],
      "answer": 0,
      "explanation": "P_dBm = 10 log₁₀(P / 1 mW) = 10 log₁₀(1 / 1) = 10 log₁₀(1) = 0 dBm."
    },
    {
      "q": "Câu 16: Khi được chiếu sáng mạnh, điện trở của điện trở quang (LDR) biến đổi như thế nào?",
      "options": [
        "A. Tăng vọt lên hàng chục Mega-ohm",
        "B. Giảm mạnh xuống chỉ còn vài trăm ohm đến vài kilo-ohm",
        "C. Không thay đổi",
        "D. Ban đầu tăng sau đó dao động"
      ],
      "answer": 1,
      "explanation": "Ánh sáng cung cấp năng lượng giải phóng các cặp electron-lỗ trống trong bán dẫn làm mật độ hạt tải điện tăng vọt, do đó điện trở LDR giảm mạnh khi được chiếu sáng."
    },
    {
      "q": "Câu 17: Trong mạch phân áp gồm nguồn Vs = 9V, điện trở R₁ = 10 kΩ mắc nối tiếp với R₂ = 20 kΩ. Điện áp ngõ ra U_ra lấy trên R₂ là:",
      "options": [
        "A. 3 V",
        "B. 4,5 V",
        "C. 6 V",
        "D. 9 V"
      ],
      "answer": 2,
      "explanation": "U_ra = Vs · R₂ / (R₁ + R₂) = 9 × 20 / (10 + 20) = 9 × 20 / 30 = 6 V."
    },
    {
      "q": "Câu 18: Bộ khuếch đại thuật toán (Op-Amp) hoạt động ở chế độ so sánh điện áp cấp nguồn đơn 0 - 12V. Nếu điện áp chân không đảo V₊ = 7V lớn hơn điện áp chân đảo V₋ = 5V thì điện áp ngõ ra V_out xấp xỉ bằng:",
      "options": [
        "A. 0 V",
        "B. 2 V",
        "C. 6 V",
        "D. 12 V"
      ],
      "answer": 3,
      "explanation": "Khi V₊ > V₋ ở chế độ so sánh không có hồi tiếp âm, ngõ ra bão hòa dương, xấp xỉ điện áp nguồn dương (+12V)."
    },
    {
      "q": "Câu 19: Để bảo vệ bóng bán dẫn điều khiển khỏi bị đánh thủng bởi xung điện áp tự cảm cao khi ngắt cuộn hút của rơ-le điện từ, ta cần lắp linh kiện nào?",
      "options": [
        "A. Một diode dập xung mắc song song ngược cực với cuộn hút relay",
        "B. Một cầu chì 10A nối tiếp vào chân điều khiển",
        "C. Một biến trở chỉnh dòng",
        "D. Một tụ điện hóa mắc song song cùng chiều nguồn"
      ],
      "answer": 0,
      "explanation": "Diode dập xung (Flyback diode) mắc ngược cực song song với cuộn dây sẽ dẫn dòng khép kín tiêu tán năng lượng từ trường khi ngắt dòng, triệt tiêu xung cao áp tự cảm e_tc = -L di/dt."
    },
    {
      "q": "Câu 20: Cần thắp sáng một đèn LED đỏ (U_LED = 2V, dòng làm việc I_LED = 15 mA) từ ngõ ra điện áp 5V. Điện trở hạn dòng R cần mắc nối tiếp với LED có giá trị là:",
      "options": [
        "A. 100 Ω",
        "B. 200 Ω",
        "C. 330 Ω",
        "D. 470 Ω"
      ],
      "answer": 1,
      "explanation": "R = (U_ra - U_LED) / I_LED = (5 - 2) / 0,015 = 3 / 0,015 = 200 Ω."
    }
  ]
};