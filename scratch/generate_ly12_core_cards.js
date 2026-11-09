const fs = require('fs');

const coreCardsData = {
  1: [
    {
      title: "Biểu thức Dòng & Áp xoay chiều",
      icon: "fa-solid fa-wave-square",
      color: "blue",
      tag: "Phương trình cốt lõi",
      points: [
        "Cường độ tức thời: <code>i = I₀ cos(ωt + φᵢ)</code> (A).",
        "Điện áp tức thời: <code>u = U₀ cos(ωt + φᵤ)</code> (V).",
        "Độ lệch pha: <code>φ = φᵤ − φᵢ</code> (xác định trạng thái sớm hay trễ pha)."
      ]
    },
    {
      title: "Giá trị Hiệu dụng & Nhiệt lượng",
      icon: "fa-solid fa-fire-flame-curved",
      color: "amber",
      tag: "Định nghĩa Joule-Lenz",
      points: [
        "<code>I = I₀ / √2 ≈ 0,707 I₀</code>; <code>U = U₀ / √2</code>.",
        "Nhiệt lượng tỏa ra trên R: <code>Q = I² R t = (I₀² / 2) R t</code>.",
        "Mọi đồng hồ đo (Vôn kế, Ampe kế) đều chỉ giá trị hiệu dụng."
      ]
    },
    {
      title: "Tần số góc & Chu kì Lưới điện",
      icon: "fa-solid fa-clock-rotate-left",
      color: "emerald",
      tag: "Thông số chuẩn",
      points: [
        "<code>ω = 2πf = 2π / T</code> (rad/s).",
        "Lưới điện Việt Nam: <code>f = 50 Hz</code>, <code>T = 0,02 s</code>.",
        "Dòng điện đổi chiều 100 lần mỗi giây; điện áp đỉnh 311 V."
      ]
    },
    {
      title: "Kĩ thuật Đo Dao động kí (DMM/OSC)",
      icon: "fa-solid fa-microchip",
      color: "indigo",
      tag: "Thao tác đo lường",
      points: [
        "Đo chu kì: <code>T = n × (Time/Div)</code>; tính <code>f = 1/T</code>.",
        "Điện áp đỉnh - đỉnh: <code>U_p-p = m × (Volt/Div)</code>.",
        "Đo DMM: Vặn núm thang ~V; que đen cổng COM, que đỏ cổng V."
      ]
    }
  ],

  2: [
    {
      title: "Trở kháng các Phần tử R, L, C",
      icon: "fa-solid fa-bolt",
      color: "blue",
      tag: "Đại lượng cơ bản",
      points: [
        "Điện trở: <code>Z_R = R</code> (u_R cùng pha với i).",
        "Cảm kháng: <code>Z_L = ωL = 2πfL</code> (u_L sớm pha π/2 so với i).",
        "Dung kháng: <code>Z_C = 1 / (ωC)</code> (u_C trễ pha π/2 so với i)."
      ]
    },
    {
      title: "Tổng trở & Định luật Ohm Mạch nối tiếp",
      icon: "fa-solid fa-calculator",
      color: "indigo",
      tag: "Định luật Ohm",
      points: [
        "Tổng trở: <code>Z = √[R² + (Z_L − Z_C)²]</code> (Ω).",
        "Cường độ hiệu dụng: <code>I = U / Z = U₀ / Z₀</code>.",
        "Độ lệch pha: <code>tan φ = (Z_L − Z_C) / R</code>."
      ]
    },
    {
      title: "Hiện tượng Cộng hưởng Điện",
      icon: "fa-solid fa-arrows-to-circle",
      color: "rose",
      tag: "Hiện tượng đặc biệt",
      points: [
        "Điều kiện: <code>Z_L = Z_C ⇔ ω = 1 / √(LC)</code>.",
        "Tổng trở cực tiểu: <code>Z_min = R</code>; dòng điện cực đại <code>I_max = U / R</code>.",
        "Hệ số công suất cực đại: <code>cos φ = 1</code>; u và i cùng pha."
      ]
    },
    {
      title: "Hệ số Công suất & Ứng dụng Tuner",
      icon: "fa-solid fa-radio",
      color: "teal",
      tag: "Kĩ thuật thực tiễn",
      points: [
        "Hệ số công suất: <code>cos φ = R / Z = U_R / U</code>.",
        "Công suất tiêu thụ: <code>P = U I cos φ = I² R</code>.",
        "Mạch chọn sóng Radio: Điều chỉnh tụ xoay C để cộng hưởng tần số đài."
      ]
    }
  ],

  3: [
    {
      title: "Cấu tạo Lõi thép & Cuộn dây",
      icon: "fa-solid fa-cubes",
      color: "blue",
      tag: "Cấu tạo máy",
      points: [
        "Lõi thép biến áp: Ghép bởi các lá thép silic mỏng phủ sơn cách điện.",
        "Giảm thiểu tổn hao nhiệt do dòng điện xoáy Foucault gây ra.",
        "Cuộn sơ cấp N₁ vòng nhận điện; cuộn thứ cấp N₂ vòng cấp ra tải."
      ]
    },
    {
      title: "Công thức Biến đổi Điện áp Lí tưởng",
      icon: "fa-solid fa-arrows-split-up-and-left",
      color: "emerald",
      tag: "Nguyên tắc hoạt động",
      points: [
        "Tỉ số điện áp: <code>U₂ / U₁ = N₂ / N₁ = k</code>.",
        "Máy tăng áp: <code>N₂ > N₁ ⇒ U₂ > U₁</code> (dùng tại đầu nhà máy điện).",
        "Máy hạ áp: <code>N₂ < N₁ ⇒ U₂ < U₁</code> (dùng trạm hạ thế dân cư)."
      ]
    },
    {
      title: "Hao phí Nhiệt Đường dây Truyền tải",
      icon: "fa-solid fa-triangle-exclamation",
      color: "rose",
      tag: "Quy luật bình phương",
      points: [
        "Công suất hao phí: <code>ΔP = I² R = (P² / U²) × R</code>.",
        "Tăng điện áp U lên n lần ⇒ Giảm hao phí ΔP đi n² lần.",
        "Ví dụ: Tăng áp từ 500V lên 500kV (1000 lần) làm giảm hao phí 1.000.000 lần."
      ]
    },
    {
      title: "Máy hàn Điện & An toàn Vận hành",
      icon: "fa-solid fa-screwdriver-wrench",
      color: "amber",
      tag: "Ứng dụng công nghiệp",
      points: [
        "Máy hàn hồ quang: Máy hạ áp N₂ rất nhỏ, U₂ thấp (40–60V) an toàn thợ hàn.",
        "Dòng thứ cấp I₂ cực lớn (vài trăm A) làm nóng chảy que hàn tức thì.",
        "Kiểm tra dầu làm mát định kì và tránh chạm trực tiếp dây dẫn trần."
      ]
    }
  ],

  4: [
    {
      title: "Cấu tạo Tiếp giáp P–N Diode",
      icon: "fa-solid fa-microchip",
      color: "blue",
      tag: "Linh kiện bán dẫn",
      points: [
        "Gồm hai cực: Anode (A, nối miền P) và Cathode (K, nối miền N).",
        "Phân cực thuận: Cho dòng lớn chạy từ A sang K.",
        "Phân cực ngược: Vùng nghèo mở rộng, dòng rò coi như bằng 0."
      ]
    },
    {
      title: "Điện áp Ngưỡng Mở & Đánh thủng",
      icon: "fa-solid fa-gauge-high",
      color: "indigo",
      tag: "Đặc tuyến I-U",
      points: [
        "Diode Silicon: Dẫn mạnh khi <code>V_AK ≥ 0,6 – 0,7 V</code>.",
        "Diode Germanium: Bắt đầu dẫn ở mức <code>0,2 – 0,3 V</code>.",
        "Điện áp ngược cực đại: Không được vượt qua ngưỡng đánh thủng V_Rmax."
      ]
    },
    {
      title: "Mạch Chỉnh lưu Cầu 4 Diode",
      icon: "fa-solid fa-bridge",
      color: "emerald",
      tag: "Toàn chu kì",
      points: [
        "Sử dụng 4 diode mắc thành mạch cầu Wheatstone.",
        "Cả hai nửa chu kì dòng điện đều chạy qua tải theo một chiều duy nhất.",
        "Tần số gợn sóng ngõ ra: <code>f_ripple = 2f = 100 Hz</code> (với lưới điện 50 Hz)."
      ]
    },
    {
      title: "Tụ Lọc Nguồn & Bộ Sạc Adapter",
      icon: "fa-solid fa-plug",
      color: "amber",
      tag: "Thiết bị thực tế",
      points: [
        "Tụ lọc C mắc song song với tải để là phẳng gợn sóng nhấp nhô.",
        "Khối Adapter sạc: Biến áp hạ áp → Cầu diode → Tụ lọc C → IC ổn áp 5V.",
        "Bảo vệ thiết bị điện tử số khỏi xung điện dao động."
      ]
    }
  ],

  5: [
    {
      title: "Bản chất Sóng Điện từ Tia X",
      icon: "fa-solid fa-radiation",
      color: "teal",
      tag: "Bản chất vật lí",
      points: [
        "Bước sóng cực ngắn: <code>λ = 10⁻¹² m đến 10⁻⁸ m</code>.",
        "Tần số cực cao, năng lượng photon từ vài keV đến hàng trăm keV.",
        "Phát hiện bởi Wilhelm Röntgen (1895), được trao giải Nobel đầu tiên."
      ]
    },
    {
      title: "Nguyên lí Ống Coolidge Phát tia X",
      icon: "fa-solid fa-flask",
      color: "indigo",
      tag: "Cơ chế phát xạ",
      points: [
        "Chùm electron từ dây tóc catôt nung nóng được tăng tốc qua U_AK hàng chục kV.",
        "Đập vào đối catôt Anode kim loại nặng khó nóng chảy (Wolfram, Molipden).",
        "Bước sóng ngắn nhất bức xạ hãm: <code>λ_min = h c / (e U_AK)</code>."
      ]
    },
    {
      title: "Các Đặc tính Nổi bật của Tia X",
      icon: "fa-solid fa-wand-magic-sparkles",
      color: "emerald",
      tag: "Tính chất & Tác dụng",
      points: [
        "Khả năng đâm xuyên cực mạnh qua giấy, gỗ, vải và mô mềm.",
        "Làm đen kính ảnh, kích thích phát quang một số hóa chất.",
        "Tác dụng ion hóa chất khí và tác dụng sinh học diệt tế bào."
      ]
    },
    {
      title: "Nguyên tắc Vàng An toàn Bức xạ",
      icon: "fa-solid fa-shield-halved",
      color: "rose",
      tag: "An toàn y tế",
      points: [
        "Thời gian (Time): Rút ngắn tối đa thời gian phát tia.",
        "Khoảng cách (Distance): Cường độ suy giảm theo <code>1 / r²</code>.",
        "Che chắn (Shielding): Dùng áo chì, yếm chì che phủ cơ quan sinh dục, tuyến giáp."
      ]
    }
  ],

  6: [
    {
      title: "Cơ chế Tạo ảnh X-quang Quy ước 2D",
      icon: "fa-solid fa-x-ray",
      color: "teal",
      tag: "Nguyên lí tạo bóng",
      points: [
        "Tia X xuyên qua cơ thể; xương cản tia nhiều, mô mềm và phổi cản tia ít.",
        "Xương ít tia tới phim ⇒ vùng màu trắng (cản quang).",
        "Phổi cho tia qua nhiều ⇒ vùng màu đen (sáng quang)."
      ]
    },
    {
      title: "Định luật Suy giảm Bức xạ Tuyến tính",
      icon: "fa-solid fa-chart-line",
      color: "blue",
      tag: "Công thức toán lí",
      points: [
        "Cường độ truyền qua bề dày d: <code>I = I₀ e^(−μd)</code>.",
        "μ: Hệ số suy giảm tuyến tính (phụ thuộc năng lượng tia X và Z của mô).",
        "Chì Pb có mật độ và Z cao nên μ cực lớn, cản tia X vượt trội."
      ]
    },
    {
      title: "Nguyên lí Chụp Cắt lớp Vi tính CT",
      icon: "fa-solid fa-circle-notch",
      color: "indigo",
      tag: "Kĩ thuật hiện đại",
      points: [
        "Khung Gantry quay 360° phát chùm tia X quét liên tục quanh người bệnh.",
        "Thu nhận hàng ngàn tia chiếu từ nhiều góc độ của lát cắt mỏng.",
        "Máy tính dùng thuật toán biến đổi ngược Radon tái tạo ma trận ảnh 3D."
      ]
    },
    {
      title: "So sánh Ưu - Nhược điểm X-quang & CT",
      icon: "fa-solid fa-scale-balanced",
      color: "amber",
      tag: "Chỉ định y khoa",
      points: [
        "X-quang: Nhanh, rẻ, dễ di động, nhưng bị chồng hình 2D các tạng.",
        "CT: Độ tương phản mô cực cao, xóa bỏ hoàn toàn chồng hình.",
        "Lưu ý: Liều chiếu CT gấp hàng trăm lần X-quang, cần chỉ định chặt chẽ."
      ]
    }
  ],

  7: [
    {
      title: "Bản chất Sóng Cơ học Siêu âm",
      icon: "fa-solid fa-water",
      color: "teal",
      tag: "Sóng âm cao tần",
      points: [
        "Sóng âm có tần số <code>f > 20 kHz</code> (vượt ngưỡng nghe người).",
        "Dải tần y khoa: <code>2 MHz đến 15 MHz</code>.",
        "Vận tốc truyền trong mô mềm cơ thể: <code>v ≈ 1540 m/s</code>."
      ]
    },
    {
      title: "Đầu dò & Hiệu ứng Áp điện PZT",
      icon: "fa-solid fa-satellite-dish",
      color: "indigo",
      tag: "Chuyển đổi năng lượng",
      points: [
        "Hiệu ứng áp điện nghịch: Điện xoay chiều biến thành sóng cơ học siêu âm.",
        "Hiệu ứng áp điện thuận: Sóng phản xạ dội về làm nén dãn tinh thể sinh điện.",
        "Vật liệu: Gốm áp điện Chì Zirconate Titanate (PZT)."
      ]
    },
    {
      title: "Trở kháng Âm & Vai trò Gel Siêu âm",
      icon: "fa-solid fa-droplet",
      color: "emerald",
      tag: "Môi trường truyền dẫn",
      points: [
        "Trở kháng âm: <code>Z = ρ × v</code> (kg/m²·s).",
        "Hệ số phản xạ: <code>R = [(Z₂ − Z₁) / (Z₂ + Z₁)]²</code>.",
        "Gel siêu âm: Khử bọt không khí, ghép trở kháng âm sát với da người."
      ]
    },
    {
      title: "Các Chế độ Hiển thị & Siêu âm Doppler",
      icon: "fa-solid fa-heart-pulse",
      color: "rose",
      tag: "Chế độ chẩn đoán",
      points: [
        "Chế độ B-mode: Hiển thị thang xám giải phẫu 2D (khảo sát ổ bụng, thai nhi).",
        "Chế độ M-mode: Đo vận động cơ tim và chuyển động van tim theo thời gian.",
        "Siêu âm Doppler: <code>Δf = 2f₀ (v_máu / v) cos θ</code>; đo dòng chảy máu."
      ]
    }
  ],

  8: [
    {
      title: "Spin Proton ¹H & Tiến động Larmor",
      icon: "fa-solid fa-magnet",
      color: "teal",
      tag: "Vật lí hạt nhân",
      points: [
        "Proton nguyên tử Hydro mang điện và spin, tạo momen từ hạt nhân.",
        "Đặt trong từ trường B₀ (1,5–3T), proton tiến động quanh B₀.",
        "Tần số Larmor: <code>f₀ = (γ / 2π) B₀ ≈ 42,58 × B₀</code> (MHz)."
      ]
    },
    {
      title: "Cộng hưởng Xung Sóng Vô tuyến RF",
      icon: "fa-solid fa-tower-broadcast",
      color: "blue",
      tag: "Hiện tượng cộng hưởng",
      points: [
        "Phát xung sóng RF đúng tần số Larmor f₀ kích thích proton hấp thụ.",
        "Vector từ hóa M bị lệch góc 90° hoặc 180° khỏi trục B₀.",
        "Ngắt xung RF: Proton hồi phục và phát xạ lại tín hiệu sóng RF đo được."
      ]
    },
    {
      title: "Thời gian Hồi phục T1 & T2",
      icon: "fa-solid fa-stopwatch",
      color: "indigo",
      tag: "Độ tương phản ảnh",
      points: [
        "T1: Thời gian hồi phục từ hóa dọc theo phương trục B₀.",
        "T2: Thời gian suy giảm pha từ hóa ngang vuông góc B₀.",
        "Mô mỡ, dịch não tủy, chất trắng não có T1, T2 rất khác nhau, tạo ảnh nét."
      ]
    },
    {
      title: "Nam châm Siêu dẫn & An toàn Từ trường",
      icon: "fa-solid fa-triangle-exclamation",
      color: "rose",
      tag: "An toàn tuyệt đối",
      points: [
        "Cuộn siêu dẫn ngâm Heli lỏng (-269°C) tạo từ trường B₀ cực mạnh liên tục.",
        "Hiệu ứng tên lửa: Cấm tuyệt đối mang vật sắt từ (kéo, bình oxy) vào phòng MRI.",
        "Chống chỉ định tuyệt đối: Bệnh nhân mang máy tạo nhịp tim, clip kim loại."
      ]
    }
  ],

  9: [
    {
      title: "Thí nghiệm Kẽm Hertz & Định nghĩa",
      icon: "fa-solid fa-bolt-lightning",
      color: "purple",
      tag: "Thí nghiệm lịch sử",
      points: [
        "Tia tử ngoại làm bật quang electron khỏi lá kẽm tích điện âm.",
        "Chắn bằng tấm kính thủy tinh (hấp thụ tia UV) thì hiện tượng dừng ngay.",
        "Định nghĩa: Ánh sáng làm bứt electron ra khỏi bề mặt kim loại."
      ]
    },
    {
      title: "Ba Định luật Quang điện Thực nghiệm",
      icon: "fa-solid fa-scale-unbalanced",
      color: "indigo",
      tag: "Định luật thực nghiệm",
      points: [
        "Định luật 1 (Giới hạn quang điện): <code>λ ≤ λ₀</code> (A = hc/λ₀).",
        "Định luật 2 (Bão hòa): Cường độ I_bh tỉ lệ thuận với cường độ chùm sáng.",
        "Định luật 3 (Động năng): K_max chỉ phụ thuộc λ và bản chất kim loại."
      ]
    },
    {
      title: "Thuyết Lượng tử Ánh sáng Einstein",
      icon: "fa-solid fa-atom",
      color: "purple",
      tag: "Thuyết photon",
      points: [
        "Ánh sáng tạo bởi các photon mang năng lượng <code>ε = h f = h c / λ</code>.",
        "Trong chân không, photon bay với tốc độ <code>c = 3.10⁸ m/s</code>.",
        "Mỗi lần tương tác là va chạm 1-1 giữa 1 photon và 1 electron."
      ]
    },
    {
      title: "Phương trình Einstein & Điện thế Hãm",
      icon: "fa-solid fa-calculator",
      color: "amber",
      tag: "Cân bằng năng lượng",
      points: [
        "Phương trình Einstein: <code>h f = A + K_max = h c / λ₀ + ½ m v_max²</code>.",
        "Công thoát: <code>A = h f₀ = h c / λ₀</code>.",
        "Hiệu điện thế hãm: <code>e U_h = K_max = ½ m v_max²</code>."
      ]
    }
  ],

  10: [
    {
      title: "Thực thể Lưỡng tính Sóng – Hạt",
      icon: "fa-solid fa-infinity",
      color: "purple",
      tag: "Bản chất vật lí",
      points: [
        "Tính chất sóng: Biểu hiện qua giao thoa, nhiễu xạ (bước sóng dài).",
        "Tính chất hạt: Biểu hiện qua quang điện, Compton (bước sóng ngắn).",
        "Ánh sáng đồng thời mang cả hai thuộc tính sóng và hạt không tách rời."
      ]
    },
    {
      title: "Giả thuyết Sóng Vật chất de Broglie",
      icon: "fa-solid fa-water",
      color: "indigo",
      tag: "Giả thuyết vĩ đại",
      points: [
        "Mọi hạt mang khối lượng m bay với vận tốc v đều có sóng liên kết.",
        "Bước sóng de Broglie: <code>λ = h / p = h / (m v)</code>.",
        "Với electron, λ cỡ kích thước mạng tinh thể nguyên tử (0,1 nm)."
      ]
    },
    {
      title: "Thí nghiệm Nhiễu xạ Davisson – Germer",
      icon: "fa-solid fa-bullseye",
      color: "emerald",
      tag: "Kiểm chứng thực nghiệm",
      points: [
        "Bắn chùm electron vào bề mặt tinh thể Niken (1927).",
        "Thu được các vòng vân cực đại nhiễu xạ tuân theo định luật Bragg.",
        "Khẳng định dứt khoát electron có bản chất sóng như tiên đoán."
      ]
    },
    {
      title: "Kính hiển vi Điện tử (TEM & SEM)",
      icon: "fa-solid fa-microscope",
      color: "teal",
      tag: "Đỉnh cao ứng dụng",
      points: [
        "Dùng chùm electron gia tốc tạo sóng de Broglie siêu ngắn (0,004 nm).",
        "Hệ thấu kính từ trường hội tụ chùm hạt electron.",
        "Phóng đại hàng triệu lần, nhìn rõ virus, phân tử DNA và mạng nguyên tử."
      ]
    }
  ],

  11: [
    {
      title: "Ba Loại Quang phổ Đo lường",
      icon: "fa-solid fa-palette",
      color: "purple",
      tag: "Phân loại quang phổ",
      points: [
        "Quang phổ liên tục: Do chất rắn/lỏng/khí áp suất cao bị nung nóng phát ra.",
        "Quang phổ vạch phát xạ: Do khí áp suất thấp kích thích nhiệt/điện phát ra.",
        "Quang phổ vạch hấp thụ: Các vạch tối nằm trên nền phổ liên tục."
      ]
    },
    {
      title: "Tiên đề Bohr về Trạng thái Dừng",
      icon: "fa-solid fa-circle-dot",
      color: "indigo",
      tag: "Tiên đề 1",
      points: [
        "Nguyên tử chỉ tồn tại trong các trạng thái dừng có năng lượng xác định.",
        "Khi ở trạng thái dừng, nguyên tử hoàn toàn không bức xạ năng lượng.",
        "Bán kính quỹ đạo electron gián đoạn: <code>r_n = n² r₀</code> (r₀ = 0,53 Å)."
      ]
    },
    {
      title: "Tiên đề Phát xạ & Hấp thụ Photon",
      icon: "fa-solid fa-arrow-down-up-across-line",
      color: "emerald",
      tag: "Tiên đề 2",
      points: [
        "Chuyển mức E_cao xuống E_thấp: Phát photon <code>h f = E_cao − E_thấp</code>.",
        "Hấp thụ photon: Đúng bằng hiệu hai mức năng lượng thì nhảy lên mức cao.",
        "Bước sóng phát xạ: <code>λ = h c / |E₂ − E₁|</code>."
      ]
    },
    {
      title: "Các Dãy Quang phổ Nguyên tử Hydro",
      icon: "fa-solid fa-chart-simple",
      color: "blue",
      tag: "Cấu trúc vạch",
      points: [
        "Dãy Lyman: Về mức K (n=1), thuộc vùng tử ngoại.",
        "Dãy Balmer: Về mức L (n=2), 4 vạch nhìn thấy: H_α (đỏ), H_β (lam), H_γ, H_δ.",
        "Dãy Paschen: Về mức M (n=3), nằm hoàn toàn trong vùng hồng ngoại."
      ]
    }
  ],

  12: [
    {
      title: "Cấu trúc Ba Vùng Năng lượng Rắn",
      icon: "fa-solid fa-layer-group",
      color: "purple",
      tag: "Mô hình dải",
      points: [
        "Vùng hóa trị: Năng lượng thấp nhất chứa các electron hóa trị liên kết.",
        "Vùng cấm (Band Gap E_g): Khoảng trống năng lượng cấm electron tồn tại.",
        "Vùng dẫn: Năng lượng cao, chứa các electron tự do chuyển động dẫn điện."
      ]
    },
    {
      title: "Phân loại Kim loại, Bán dẫn, Cách điện",
      icon: "fa-solid fa-diagram-project",
      color: "indigo",
      tag: "Đặc tính vật liệu",
      points: [
        "Kim loại: E_g = 0 (vùng dẫn chồng lấn hóa trị); dẫn điện cực tốt.",
        "Bán dẫn: Vùng cấm hẹp (E_g ≈ 1 eV); dễ kích hoạt bằng nhiệt/ánh sáng.",
        "Cách điện: Vùng cấm rất rộng (E_g > 3–5 eV); không có hạt tải tự do."
      ]
    },
    {
      title: "Ảnh hưởng Trái ngược của Nhiệt độ",
      icon: "fa-solid fa-temperature-arrow-up",
      color: "amber",
      tag: "Quy luật nhiệt độ",
      points: [
        "Kim loại: Nhiệt độ tăng ⇒ Tán xạ ion nút mạng tăng ⇒ Điện trở tăng.",
        "Bán dẫn: Nhiệt độ tăng ⇒ Kích thích cặp e-lỗ trống tăng vọt ⇒ Điện trở giảm.",
        "Ứng dụng chế tạo nhiệt điện trở cảm biến nhiệt NTC (Negative Temp Coeff)."
      ]
    },
    {
      title: "Nguyên lí Quang điện trở (LDR / CdS)",
      icon: "fa-solid fa-sun",
      color: "emerald",
      tag: "Quang điện trong",
      points: [
        "Trong tối: Rất ít hạt tải, điện trở rất cao (Megaohm).",
        "Khi chiếu sáng (hf ≥ E_g): Giải phóng electron và lỗ trống, R giảm còn vài trăm Ω.",
        "Ứng dụng: Mạch đèn đường tự động, cảm biến báo trộm, đo sáng máy ảnh."
      ]
    }
  ]
};

fs.writeFileSync('scratch/ly12_core_cards.js', 'module.exports = ' + JSON.stringify(coreCardsData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/ly12_core_cards.js with 48 core cards!');
