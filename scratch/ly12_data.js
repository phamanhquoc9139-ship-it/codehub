module.exports = [
  {
    "id": 1,
    "chuyenDe": 1,
    "chuyenDeTitle": "Chuyên đề 1: Dòng điện xoay chiều",
    "title": "Bài 1. Đặc trưng của dòng điện xoay chiều",
    "badge": "Bài 1 • CĐ1",
    "tagColor": "blue",
    "readTime": "15 phút",
    "target": "Nắm vững biểu thức dòng điện và điện áp xoay chiều hình sin, ý nghĩa các đại lượng I₀, U₀, ω, φ, f, T; phân biệt giá trị tức thời, cực đại và hiệu dụng; quy trình đo tần số và điện áp bằng dao động kí và đồng hồ vạn năng.",
    "sections": [
      {
        "heading": "1. Đại lượng đặc trưng của dòng điện xoay chiều",
        "cards": [
          {
            "title": "Phương trình dòng điện và điện áp hình sin",
            "points": [
              "<strong>Cường độ tức thời:</strong> i = I₀ cos(ωt + φᵢ) (A), với I₀ > 0 là cường độ dòng điện cực đại; (ωt + φᵢ) là pha dao động tại thời điểm t; φᵢ là pha ban đầu của dòng điện.",
              "<strong>Điện áp tức thời:</strong> u = U₀ cos(ωt + φᵤ) (V), với U₀ > 0 là điện áp cực đại; φᵤ là pha ban đầu của điện áp giữa hai đầu đoạn mạch.",
              "<strong>Độ lệch pha giữa u và i:</strong> φ = φᵤ − φᵢ. Nếu φ > 0: điện áp sớm pha hơn dòng điện; nếu φ < 0: điện áp trễ pha hơn dòng điện; nếu φ = 0: u và i cùng pha.",
              "<strong>Chu kì và tần số:</strong> Tần số góc ω = 2πf = 2π/T (rad/s). Tại Việt Nam, mạng điện dân dụng có tần số chuẩn f = 50 Hz, chu kì T = 0,02 s (dòng điện đổi chiều 100 lần mỗi giây)."
            ]
          },
          {
            "title": "Giá trị hiệu dụng và ý nghĩa nhiệt lượng",
            "points": [
              "<strong>Định nghĩa:</strong> Cường độ hiệu dụng của dòng điện xoay chiều bằng cường độ của một dòng điện không đổi mà khi cùng chạy qua một điện trở R trong cùng một khoảng thời gian sẽ tỏa ra một nhiệt lượng như nhau: Q = I²Rt = (I₀²/2)Rt.",
              "<strong>Công thức liên hệ:</strong> I = I₀ / √2 ≈ 0,707 I₀; U = U₀ / √2 ≈ 0,707 U₀; Suất điện động hiệu dụng: E = E₀ / √2.",
              "<strong>Ý nghĩa thực tiễn:</strong> Hầu hết các thiết bị đo điện xoay chiều (đồng hồ vạn năng DMM, ampe kế, vôn kế nhiệt/điện từ) và thông số ghi trên nhãn thiết bị điện gia dụng (bóng đèn, bàn ủi, tủ lạnh) đều là giá trị hiệu dụng.",
              "<strong>Ví dụ:</strong> Điện áp lưới 220 V chính là điện áp hiệu dụng U = 220 V, tương ứng điện áp đỉnh đạt tới U₀ = 220√2 ≈ 311 V."
            ]
          }
        ]
      },
      {
        "heading": "2. Thực hành đo tần số và điện áp xoay chiều",
        "cards": [
          {
            "title": "Phương pháp sử dụng dao động kí điện tử (Oscilloscope)",
            "points": [
              "<strong>Nguyên lí:</strong> Hiển thị đồ thị dạng sóng u(t) trên màn hình huỳnh quang hoặc màn hình số theo trục thời gian (Time/Div) và trục điện áp (Volt/Div).",
              "<strong>Đo chu kì và tần số:</strong> Xác định số ô n tương ứng một chu kì sóng trên thang ngang; T = n × (Time/Div). Tần số tính theo f = 1/T.",
              "<strong>Đo điện áp đỉnh - đỉnh và hiệu dụng:</strong> Đếm số ô đỉnh đối xứng m theo chiều dọc; U_p-p = m × (Volt/Div); U₀ = U_p-p / 2; U = U₀ / √2.",
              "<strong>Ưu điểm vượt trội:</strong> Quan sát trực tiếp độ méo dạng sóng sin, xung hài và đo chính xác độ lệch pha giữa hai tín hiệu đồng thời trên 2 kênh CH1 và CH2."
            ]
          },
          {
            "title": "Phương pháp sử dụng đồng hồ đo vạn năng (Multimeter)",
            "points": [
              "<strong>Thao tác chuẩn:</strong> Cắm que đen vào cổng COM, que đỏ vào cổng V/Ω; vặn núm xoay về dải đo điện áp xoay chiều ACV (kí hiệu ~V) với thang đo cao hơn giá trị dự đoán.",
              "<strong>Đo dòng điện hiệu dụng (ACA):</strong> Mắc đồng hồ nối tiếp vào nhánh mạch cần đo; luôn chuyển que đỏ sang cổng mA hoặc 10A/20A phù hợp trước khi cấp điện.",
              "<strong>Lưu ý an toàn:</strong> Tuyệt đối không để thang đo điện trở (Ω) hoặc thang dòng điện (A) đo vào nguồn điện áp; ngắt nguồn mạch điện trước khi cắm hoặc chuyển que đo."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một dòng điện xoay chiều có biểu thức i = 4√2 cos(100πt + π/3) (A). Cường độ hiệu dụng và tần số của dòng điện là:",
        "options": [
          "I = 4 A, f = 50 Hz",
          "I = 4√2 A, f = 50 Hz",
          "I = 4 A, f = 100 Hz",
          "I = 2√2 A, f = 50 Hz"
        ],
        "answer": 0,
        "explain": "Cường độ hiệu dụng I = I₀ / √2 = (4√2) / √2 = 4 A. Tần số f = ω / (2π) = 100π / (2π) = 50 Hz."
      },
      {
        "q": "Điện áp hiệu dụng của mạng điện gia dụng tại Việt Nam là 220 V. Giá trị điện áp cực đại U₀ bằng khoảng:",
        "options": [
          "220 V",
          "311 V",
          "156 V",
          "380 V"
        ],
        "answer": 1,
        "explain": "Điện áp cực đại U₀ = U × √2 = 220 × 1,414 ≈ 311,1 V."
      },
      {
        "q": "Trên màn hình dao động kí, một chu kì sóng sin chiếm 4 ô ngang với núm Time/Div đặt ở 5 ms/div. Tần số của nguồn điện này là:",
        "options": [
          "25 Hz",
          "50 Hz",
          "100 Hz",
          "200 Hz"
        ],
        "answer": 1,
        "explain": "Chu kì T = 4 × 5 ms = 20 ms = 0,02 s. Tần số f = 1/T = 1 / 0,02 = 50 Hz."
      }
    ]
  },
  {
    "id": 2,
    "chuyenDe": 1,
    "chuyenDeTitle": "Chuyên đề 1: Dòng điện xoay chiều",
    "title": "Bài 2. Đoạn mạch điện xoay chiều RLC mắc nối tiếp",
    "badge": "Bài 2 • CĐ1",
    "tagColor": "blue",
    "readTime": "18 phút",
    "target": "Nắm vững công thức trở kháng của điện trở, cuộn cảm thuần và tụ điện; tổng trở đoạn mạch RLC nối tiếp; hiện tượng cộng hưởng điện; khảo sát đặc trưng V–A và ứng dụng mạch lọc, mạch chọn sóng thu thanh.",
    "sections": [
      {
        "heading": "1. Mạch RLC nối tiếp và các đại lượng dẫn xuất",
        "cards": [
          {
            "title": "Trở kháng các phần tử và tổng trở toàn mạch",
            "points": [
              "<strong>Điện trở thuần R:</strong> Dòng điện và điện áp cùng pha (φ = 0); trở kháng Z_R = R; tỏa nhiệt theo định luật Joule–Lenz P = I²R.",
              "<strong>Cuộn cảm thuần L:</strong> Cảm kháng Z_L = ωL = 2πfL (Ω); điện áp hai đầu cuộn cảm sớm pha π/2 so với dòng điện (u_L vuông pha trước i); cản trở dòng điện tần số cao.",
              "<strong>Tụ điện C:</strong> Dung kháng Z_C = 1/(ωC) = 1/(2πfC) (Ω); điện áp hai đầu tụ trễ pha π/2 so with dòng điện (u_C trễ pha sau i); ngăn dòng một chiều, cho dòng cao tần đi qua dễ dàng.",
              "<strong>Tổng trở toàn mạch RLC:</strong> Z = √[R² + (Z_L − Z_C)²] (Ω). Định luật Ohm cho mạch: I = U/Z = U₀/Z₀."
            ]
          },
          {
            "title": "Độ lệch pha và công suất tiêu thụ",
            "points": [
              "<strong>Độ lệch pha tan φ:</strong> tan φ = (Z_L − Z_C) / R = (U_L − U_C) / U_R. Nếu Z_L > Z_C (φ > 0): mạch có tính cảm kháng; nếu Z_L < Z_C (φ < 0): mạch có tính dung kháng; nếu Z_L = Z_C (φ = 0): mạch thuần trở.",
              "<strong>Hệ số công suất cos φ:</strong> cos φ = R / Z = U_R / U (0 ≤ cos φ ≤ 1).",
              "<strong>Công suất tiêu thụ:</strong> P = UI cos φ = I²R. Năng lượng chỉ tiêu hao trên điện trở thuần R, cuộn cảm và tụ điện chỉ tích phóng năng lượng điện trường và từ trường."
            ]
          }
        ]
      },
      {
        "heading": "2. Hiện tượng cộng hưởng điện và đường đặc trưng V–A",
        "cards": [
          {
            "title": "Điều kiện và đặc điểm của hiện tượng cộng hưởng",
            "points": [
              "<strong>Điều kiện cộng hưởng:</strong> Z_L = Z_C ⇔ ωL = 1/(ωC) ⇔ ω = 1/√(LC) hoặc f = 1 / [2π√(LC)].",
              "<strong>Đặc trưng khi cộng hưởng:</strong> Tổng trở đạt giá trị cực tiểu Z_min = R; Cường độ dòng điện đạt cực đại I_max = U/R; Điện áp và dòng điện cùng pha (φ = 0, cos φ = 1); U_L = U_C, điện áp hai đầu cuộn cảm và tụ triệt tiêu nhau.",
              "<strong>Hiện tượng quá áp:</strong> Nếu Z_L = Z_C ≫ R, điện áp U_L và U_C có thể lớn gấp nhiều lần điện áp nguồn U (hệ số phẩm chất Q = ωL/R = U_L/U), cần lưu ý cách điện thiết bị."
            ]
          },
          {
            "title": "Khảo sát đường đặc trưng V–A và ứng dụng",
            "points": [
              "<strong>Đặc trưng V–A:</strong> Với R là đường thẳng qua gốc tọa độ (I tỉ lệ thuận với U). Với cuộn cảm và tụ điện, đồ thị I theo f cho thấy I giảm khi f tăng với cuộn cảm, và I tăng khi f tăng với tụ điện.",
              "<strong>Ứng dụng mạch chọn sóng (tuner):</strong> Trong máy thu vô tuyến (Radio/TV), mạch LC dao động thu sóng được điều chỉnh tụ xoay C để tần số riêng trùng với tần số đài phát f_đài, dòng điện tín hiệu cộng hưởng đạt cực đại.",
              "<strong>Mạch lọc thông dải (Bandpass Filter):</strong> Chỉ cho các tín hiệu có tần số nằm trong dải hẹp quanh tần số cộng hưởng đi qua, triệt tiêu nhiễu cao tần hoặc thấp tần."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Trong đoạn mạch xoay chiều RLC nối tiếp, nếu cảm kháng lớn hơn dung kháng (Z_L > Z_C) thì:",
        "options": [
          "Điện áp u trễ pha so với dòng điện i",
          "Điện áp u sớm pha so với dòng điện i",
          "Điện áp u cùng pha với dòng điện i",
          "Cường độ dòng điện đạt cực đại"
        ],
        "answer": 1,
        "explain": "Vì tan φ = (Z_L − Z_C)/R > 0 nên φ > 0, tức là điện áp u sớm pha hơn dòng điện i (mạch có tính cảm kháng)."
      },
      {
        "q": "Đoạn mạch RLC nối tiếp có R = 40 Ω, Z_L = 80 Ω, Z_C = 50 Ω. Tổng trở của đoạn mạch là:",
        "options": [
          "50 Ω",
          "70 Ω",
          "90 Ω",
          "170 Ω"
        ],
        "answer": 0,
        "explain": "Tổng trở Z = √[R² + (Z_L − Z_C)²] = √[40² + (80 − 50)²] = √(1600 + 900) = √2500 = 50 Ω."
      },
      {
        "q": "Khi xảy ra hiện tượng cộng hưởng điện trong đoạn mạch RLC nối tiếp, đại lượng nào sau đây KHÔNG đạt cực đại?",
        "options": [
          "Cường độ dòng điện hiệu dụng I",
          "Hệ số công suất cos φ",
          "Tổng trở của đoạn mạch Z",
          "Công suất tiêu thụ P"
        ],
        "answer": 2,
        "explain": "Khi cộng hưởng, tổng trở Z đạt giá trị CỰC TIỂU Z_min = R (chứ không phải cực đại)."
      }
    ]
  },
  {
    "id": 3,
    "chuyenDe": 1,
    "chuyenDeTitle": "Chuyên đề 1: Dòng điện xoay chiều",
    "title": "Bài 3. Máy biến áp",
    "badge": "Bài 3 • CĐ1",
    "tagColor": "blue",
    "readTime": "16 phút",
    "target": "Nắm vững cấu tạo và nguyên tắc hoạt động của máy biến áp; công thức biến đổi điện áp và dòng điện lí tưởng; bài toán truyền tải điện năng và biện pháp giảm hao phí đường dây; ứng dụng thực tế trong hàn điện và biến áp gia dụng.",
    "sections": [
      {
        "heading": "1. Cấu tạo và nguyên tắc hoạt động của máy biến áp",
        "cards": [
          {
            "title": "Cấu tạo máy biến áp",
            "points": [
              "<strong>Lõi biến áp:</strong> Được ghép bởi nhiều lá thép kĩ thuật điện (thép silic) mỏng, bề mặt phủ sơn cách điện để giảm thiểu dòng điện xoáy Foucault gây nóng lõi.",
              "<strong>Cuộn dây sơ cấp:</strong> Gồm N₁ vòng dây dẫn có bọc cách điện, nối vào nguồn điện áp xoay chiều u₁.",
              "<strong>Cuộn dây thứ cấp:</strong> Gồm N₂ vòng dây dẫn cách điện, nối với tải tiêu thụ điện để lấy ra điện áp u₂.",
              "<strong>Phân loại:</strong> Máy biến áp một pha (gia dụng), máy biến áp ba pha (công nghiệp và lưới điện quốc gia), máy biến áp tự ngẫu (ổn áp LiOA)."
            ]
          },
          {
            "title": "Nguyên tắc hoạt động dựa trên cảm ứng điện từ",
            "points": [
              "<strong>Nguyên lí:</strong> Dòng điện xoay chiều trong cuộn sơ cấp sinh ra từ thông biến thiên qua lõi thép; từ thông này xuyên qua cuộn thứ cấp tạo ra suất điện động cảm ứng xoay chiều e₂.",
              "<strong>Công thức máy biến áp lí tưởng:</strong> Bỏ qua hao phí, U₂ / U₁ = N₂ / N₁ = k (hệ số biến áp).",
              "<strong>Máy tăng áp (k > 1):</strong> N₂ > N₁ ⇒ U₂ > U₁, dùng ở đầu nguồn nhà máy điện trước khi truyền tải đường dài.",
              "<strong>Máy hạ áp (k < 1):</strong> N₂ < N₁ ⇒ U₂ < U₁, dùng tại các trạm phân phối dân cư (220 V) và các bộ sạc thiết bị điện tử."
            ]
          }
        ]
      },
      {
        "heading": "2. Truyền tải điện năng và giảm hao phí đường dây",
        "cards": [
          {
            "title": "Công thức hao phí nhiệt trên đường dây truyền tải",
            "points": [
              "<strong>Công suất truyền đi:</strong> P = U I cos φ (với cos φ ≈ 1 thì I = P/U).",
              "<strong>Công suất hao phí tỏa nhiệt:</strong> ΔP = I² R = (P² / U²) × R, trong đó R là điện trở của dây dẫn đường dài.",
              "<strong>Biện pháp giảm hao phí tối ưu:</strong> Tăng điện áp hiệu dụng U trước khi truyền tải. Nếu tăng điện áp U lên n lần thì công suất hao phí ΔP giảm đi n² lần.",
              "<strong>Lí giải vì sao không chọn giảm R:</strong> Giảm R bằng cách tăng tiết diện dây (quá nặng, tốn kém cột đỡ) hoặc dùng kim loại quý (bạc, đồng tinh khiết giá thành quá đắt). Tăng điện áp bằng máy biến áp là giải pháp kinh tế và khoa học nhất."
            ]
          },
          {
            "title": "Ứng dụng trong máy hàn điện và an toàn vận hành",
            "points": [
              "<strong>Máy hàn điện xoay chiều:</strong> Là máy biến áp hạ áp cực mạnh; N₂ rất nhỏ nên U₂ nhỏ (an toàn cho thợ hàn khoảng 40–60 V), nhưng dòng điện thứ cấp I₂ cực lớn (hàng trăm ampe), tỏa nhiệt làm nóng chảy que hàn và mối kim loại.",
              "<strong>Hiện tượng nghẽn mạch (ngắn mạch):</strong> Khi đầu mối hàn chạm nhau, R rất nhỏ, dòng tức thời tăng vọt cần cuộn kháng hạn chế dòng.",
              "<strong>Bảo trì an toàn:</strong> Kiểm tra mức dầu làm mát trong máy biến áp công suất lớn; không vận hành quá tải định mức để tránh phóng điện hoặc nổ thùng dầu."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một máy biến áp lí tưởng có cuộn sơ cấp 1000 vòng, cuộn thứ cấp 200 vòng. Đặt vào sơ cấp điện áp hiệu dụng 220 V thì điện áp thứ cấp là:",
        "options": [
          "1100 V",
          "44 V",
          "88 V",
          "22 V"
        ],
        "answer": 1,
        "explain": "Theo công thức máy biến áp lí tưởng: U₂ / U₁ = N₂ / N₁ ⇒ U₂ = U₁ × (N₂ / N₁) = 220 × (200 / 1000) = 44 V."
      },
      {
        "q": "Để giảm hao phí do tỏa nhiệt trên đường dây truyền tải đi 100 lần với công suất truyền tải không đổi, cần phải:",
        "options": [
          "Tăng điện áp hiệu dụng ở đầu đường dây lên 10 lần",
          "Tăng điện áp hiệu dụng ở đầu đường dây lên 100 lần",
          "Giảm điện trở dây dẫn đi 100 lần bằng cách tăng chiều dài dây",
          "Tăng tiết diện dây dẫn lên 100 lần"
        ],
        "answer": 0,
        "explain": "Vì hao phí ΔP tỉ lệ nghịch với U² (ΔP = P²R / U²), nên để giảm ΔP đi 100 lần ta cần tăng điện áp U lên √100 = 10 lần."
      },
      {
        "q": "Lõi thép của máy biến áp được cấu tạo từ nhiều lá thép mỏng ghép cách điện với nhau nhằm mục đích:",
        "options": [
          "Tăng từ thông xuyên qua các cuộn dây",
          "Giảm khối lượng tổng thể của máy biến áp",
          "Giảm dòng điện xoáy (Foucault) gây hao phí nhiệt",
          "Tăng độ bền cơ học khi rung lắc"
        ],
        "answer": 2,
        "explain": "Việc ghép nhiều lá thép mỏng có sơn cách điện làm tăng điện trở với các đường dòng điện Foucault chạy quẩn, nhờ đó giảm mạnh tổn hao nhiệt vô ích."
      }
    ]
  },
  {
    "id": 4,
    "chuyenDe": 1,
    "chuyenDeTitle": "Chuyên đề 1: Dòng điện xoay chiều",
    "title": "Bài 4. Chỉnh lưu dòng điện xoay chiều",
    "badge": "Bài 4 • CĐ1",
    "tagColor": "blue",
    "readTime": "15 phút",
    "target": "Hiểu rõ tính dẫn điện một chiều của diode bán dẫn; nguyên lí mạch chỉnh lưu nửa chu kì và toàn chu kì (mạch cầu diode); vai trò của tụ lọc nguồn; cấu tạo khối nguồn Adapter trong các bộ sạc điện thoại và máy tính.",
    "sections": [
      {
        "heading": "1. Diode bán dẫn và đường đặc trưng I–U",
        "cards": [
          {
            "title": "Cấu tạo tiếp giáp P–N và tính dẫn một chiều",
            "points": [
              "<strong>Cấu tạo:</strong> Diode bán dẫn gồm một tiếp giáp P–N với hai cực: cực Anode (A - nối miền P) và cực Cathode (K - nối miền N).",
              "<strong>Phân cực thuận (V_A > V_K):</strong> Điện trường ngoài làm hẹp vùng nghèo; hạt tải đa số (lỗ trống từ P và electron từ N) dễ dàng vượt qua mối nối, dòng điện dẫn lớn chạy từ A sang K.",
              "<strong>Phân cực ngược (V_A < V_K):</strong> Vùng nghèo mở rộng, chỉ có dòng rò thiểu số cực nhỏ chạy qua; diode ở trạng thái ngắt điện.",
              "<strong>Điện áp ngưỡng mở dẫn (V_th):</strong> Diode Silicon bắt đầu dẫn mạnh khi V_AK ≥ 0,6–0,7 V; Diode Germanium dẫn ở khoảng 0,2–0,3 V."
            ]
          },
          {
            "title": "Đường đặc trưng Volt–Ampere của diode",
            "points": [
              "<strong>Nhánh thuận:</strong> Khi điện áp vượt quá ngưỡng V_th, dòng điện tăng rất nhanh theo hàm mũ. Trong tính toán mạch cơ bản, có thể coi diode lí tưởng có điện trở thuận xấp xỉ bằng 0.",
              "<strong>Nhánh ngược:</strong> Dòng điện rất nhỏ (vài microampe hoặc nanoampe), coi như bằng 0.",
              "<strong>Điện áp đánh thủng ngược (Breakdown Voltage):</strong> Nếu điện áp ngược vượt quá giới hạn định mức V_Rmax, mối nối bị phá hủy vĩnh viễn (ngoại trừ diode Zener được thiết kế chuyên biệt để hoạt động ổn định ở vùng đánh thủng)."
            ]
          }
        ]
      },
      {
        "heading": "2. Mạch chỉnh lưu và bộ nguồn Adapter một chiều",
        "cards": [
          {
            "title": "Mạch chỉnh lưu nửa chu kì và chỉnh lưu cầu",
            "points": [
              "<strong>Chỉnh lưu nửa chu kì (1 Diode):</strong> Chỉ cho dòng điện đi qua trong nửa chu kì dương khi diode phân cực thuận; nửa chu kì âm diode bị khóa. Hiệu suất thấp, điện áp ra mấp mô lớn (tần số gợn sóng f_ripple = f = 50 Hz).",
              "<strong>Chỉnh lưu toàn chu kì bằng cầu 4 Diode:</strong> Sử dụng 4 diode mắc thành mạch cầu. Nửa chu kì dương: D1 và D3 dẫn; Nửa chu kì âm: D2 và D4 dẫn. Cả hai nửa chu kì dòng điện qua tải luôn chạy theo cùng một chiều.",
              "<strong>Tần số gợn sóng mạch cầu:</strong> f_ripple = 2f = 100 Hz. Điện áp một chiều trung bình cao hơn và dễ lọc phẳng hơn."
            ]
          },
          {
            "title": "Tụ lọc nguồn và sơ đồ khối Adapter sạc pin",
            "points": [
              "<strong>Vai trò của tụ điện lọc nguồn (C):</strong> Mắc song song với tải R. Khi điện áp chỉnh lưu tăng, tụ tích điện; khi điện áp giảm, tụ phóng điện duy trì điện áp cho tải, làm cho đường đặc tính điện áp ra gần như một đường thẳng nằm ngang.",
              "<strong>Sơ đồ khối bộ sạc (Adapter 220V AC sang 5V DC):</strong> Gồm 4 khối kế tiếp: (1) Biến áp hạ áp (hoặc mạch xung switching) → (2) Bộ chỉnh lưu cầu diode → (3) Khối lọc gợn sóng (tụ C, cuộn L) → (4) IC ổn áp (Linear/Switching regulator như 7805 hoặc mạch PWM) cung cấp đúng 5V ổn định."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Diode bán dẫn silicon thông thường bắt đầu dẫn điện mạnh khi được phân cực thuận với điện áp giữa Anode và Cathode đạt khoảng:",
        "options": [
          "0,1 V",
          "0,7 V",
          "2,0 V",
          "5,0 V"
        ],
        "answer": 1,
        "explain": "Diode Silicon có thế rào chắn tiếp giáp P–N xấp xỉ 0,6–0,7 V. Khi điện áp thuận V_AK đạt ngưỡng này, diode mở dẫn mạnh."
      },
      {
        "q": "Trong mạch chỉnh lưu cầu 4 diode mắc vào nguồn xoay chiều có tần số 50 Hz, tần số gợn sóng của điện áp ra ở hai đầu tải khi chưa mắc tụ lọc là:",
        "options": [
          "25 Hz",
          "50 Hz",
          "100 Hz",
          "200 Hz"
        ],
        "answer": 2,
        "explain": "Vì mạch cầu đảo cực nửa chu kì âm thành nửa chu kì dương nên trong 1 giây có 2 × 50 = 100 xung đỉnh điện áp, tần số gợn sóng bằng 100 Hz."
      },
      {
        "q": "Trong bộ sạc điện thoại di động (Adapter), tụ điện lớn mắc song song với đầu ra sau cầu diode có chức năng chính là:",
        "options": [
          "Tăng biên độ điện áp đỉnh lên gấp đôi",
          "Lọc phẳng các gợn sóng nhấp nhô để tạo điện áp một chiều ổn định",
          "Đảo chiều dòng điện xoay chiều thành một chiều",
          "Bảo vệ mạch chống sét đánh trực tiếp"
        ],
        "answer": 1,
        "explain": "Tụ lọc nạp năng lượng khi điện áp đỉnh và phóng điện bổ sung khi xung áp sụt giảm, giúp điện áp ngõ ra DC phẳng mịn, không làm hư hại vi mạch điện thoại."
      }
    ]
  },
  {
    "id": 5,
    "chuyenDe": 2,
    "chuyenDeTitle": "Chuyên đề 2: Một số ứng dụng Vật lí trong chẩn đoán y học",
    "title": "Bài 5. Tia X",
    "badge": "Bài 5 • CĐ2",
    "tagColor": "teal",
    "readTime": "17 phút",
    "target": "Nắm vững bản chất sóng điện từ của tia X; cơ chế phát xạ bức xạ hãm và tia X đặc trưng trong ống Coolidge; các đặc tính nổi bật (khả năng đâm xuyên, tác dụng ion hóa, phát quang, tác dụng sinh học) và nguyên tắc an toàn bức xạ y tế.",
    "sections": [
      {
        "heading": "1. Bản chất, cơ chế phát xạ và ống tạo tia X",
        "cards": [
          {
            "title": "Bản chất và thang sóng điện từ",
            "points": [
              "<strong>Bản chất:</strong> Tia X (tia Röntgen) là sóng điện từ có bước sóng rất ngắn, nằm trong khoảng từ 10⁻¹² m đến 10⁻⁸ m (năng lượng photon photon từ vài chục eV đến hàng trăm keV).",
              "<strong>Phân loại:</strong> Tia X cứng (bước sóng cực ngắn, năng lượng cao, đâm xuyên rất mạnh) và Tia X mềm (bước sóng dài hơn, đâm xuyên kém hơn, dễ bị mô mềm hấp thụ).",
              "<strong>Nguồn gốc:</strong> Được Wilhelm Conrad Röntgen phát hiện năm 1895 khi nghiên cứu hiện tượng phóng điện trong ống chân không."
            ]
          },
          {
            "title": "Cấu tạo và hoạt động của ống Coolidge phát tia X",
            "points": [
              "<strong>Cấu tạo ống chân không:</strong> Gồm vỏ thủy tinh hút chân không cao (10⁻⁶ mmHg); Cathode (K) bằng dây tóc wolfram nung nóng phát xạ electron; Anode (Đối cathode A) bằng kim loại khó nóng chảy có nguyên tử số Z lớn (như Wolfram W, Molipden Mo), gắn trên đế đồng tản nhiệt.",
              "<strong>Nguyên tắc:</strong> Đặt hiệu điện thế gia tốc rất lớn U_AK (vài chục đến hàng trăm kV) giữa A và K. Chùm electron nhiệt được tăng tốc đạt động năng cực lớn bắn phá vào bề mặt Anode.",
              "<strong>Bức xạ hãm (Bremsstrahlung):</strong> Electron bị điện trường hạt nhân Anode làm giảm tốc đột ngột, phát ra photon tia X phổ liên tục với bước sóng ngắn nhất: λ_min = hc / (e U_AK).",
              "<strong>Tia X đặc trưng:</strong> Electron năng lượng cao đánh bật electron lớp trong (lớp K, L) của nguyên tử Anode, electron lớp ngoài nhảy xuống lấp chỗ trống phát ra photon phổ vạch đặc trưng cho vật liệu làm đối cathode."
            ]
          }
        ]
      },
      {
        "heading": "2. Đặc tính vật lí và nguyên lí an toàn bức xạ",
        "cards": [
          {
            "title": "Các đặc tính nổi bật của tia X",
            "points": [
              "<strong>Khả năng đâm xuyên mạnh:</strong> Truyền qua được nhiều vật chắn mà ánh sáng nhìn thấy bị chặn đứng như giấy, gỗ, vải, mô mềm; bị kim loại nặng cản trở mạnh (chì chì Pb dày vài milimet có thể chắn gần như hoàn toàn tia X).",
              "<strong>Tác dụng làm đen kính ảnh và phát quang:</strong> Làm ion hóa muối bạc trên phim X-quang; kích thích một số hợp chất (như BaPt(CN)₄, ZnS) phát huỳnh quang ứng dụng làm màn chiếu X-quang.",
              "<strong>Tác dụng ion hóa chất khí:</strong> Phá vỡ liên kết nguyên tử, tạo ra các cặp ion; dùng để đo liều lượng chiếu xạ bằng buồng ion hóa.",
              "<strong>Tác dụng sinh học:</strong> Hủy hoại tế bào sống, diệt khuẩn, ức chế tế bào ung thư (dùng trong xạ trị), nhưng nếu liều cao gây biến đổi gen, bỏng phóng xạ hoặc ung thư."
            ]
          },
          {
            "title": "Nguyên lí an toàn bức xạ y tế",
            "points": [
              "<strong>Ba nguyên tắc vàng an toàn:</strong> (1) Thời gian (Time): Giảm tối thiểu thời gian tiếp xúc chùm tia; (2) Khoảng cách (Distance): Đứng càng xa nguồn phát càng tốt (cường độ suy giảm theo bình phương khoảng cách 1/r²); (3) Che chắn (Shielding): Dùng tấm chắn chì, kính chì, áo tạp dề chì che chắn các cơ quan nhạy cảm (tuyến giáp, sinh dục).",
              "<strong>Kiểm soát liều lượng:</strong> Kĩ thuật viên và bác sĩ chẩn đoán hình ảnh phải đeo liều kế cá nhân định kì để theo dõi tổng liều phơi nhiễm, không để vượt quá ngưỡng an toàn quốc tế (20 mSv/năm)."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Bước sóng ngắn nhất của tia X (λ_min) phát ra từ ống phát tia X phụ thuộc trực tiếp vào:",
        "options": [
          "Kim loại làm đối cathode (Anode)",
          "Nhiệt độ nung nóng của dây tóc cathode",
          "Hiệu điện thế giữa Anode và Cathode (U_AK)",
          "Cường độ dòng điện chạy qua ống"
        ],
        "answer": 2,
        "explain": "Theo định luật bảo toàn năng lượng, toàn bộ động năng cực đại của electron chuyển thành năng lượng photon tia X: e U_AK = h c / λ_min ⇒ λ_min = h c / (e U_AK), chỉ phụ thuộc vào U_AK."
      },
      {
        "q": "Vật liệu thường được sử dụng làm áo bảo hộ hoặc vách phòng chụp X-quang để ngăn chặn tia X phát tán ra ngoài là:",
        "options": [
          "Nhôm (Al)",
          "Đồng (Cu)",
          "Chì (Pb)",
          "Thủy tinh hữu cơ"
        ],
        "answer": 2,
        "explain": "Chì có khối lượng nguyên tử lớn (Z = 82) và khối lượng riêng rất cao, mật độ electron dày đặc nên có hệ số suy giảm tia X vượt trội so với các vật liệu thông thường."
      },
      {
        "q": "Tính chất nào sau đây của tia X là cơ sở để phát hiện xương gãy trong chụp X-quang cổ điển?",
        "options": [
          "Khả năng đâm xuyên khác nhau qua các mô có mật độ vật chất khác nhau",
          "Tác dụng làm nóng mạnh vật bị chiếu sáng",
          "Hiện tượng tán sắc ánh sáng khi qua lăng kính",
          "Khả năng phản xạ toàn phần trên bề mặt da"
        ],
        "answer": 0,
        "explain": "Xương chứa nhiều canxi (nguyên tử số cao) nên hấp thụ tia X mạnh hơn nhiều so với mô mềm (chủ yếu là nước và cơ). Do đó, bóng của xương in rõ nét trên phim X-quang."
      }
    ]
  },
  {
    "id": 6,
    "chuyenDe": 2,
    "chuyenDeTitle": "Chuyên đề 2: Một số ứng dụng Vật lí trong chẩn đoán y học",
    "title": "Bài 6. Chụp X-quang, chụp cắt lớp",
    "badge": "Bài 6 • CĐ2",
    "tagColor": "teal",
    "readTime": "17 phút",
    "target": "Hiểu rõ cơ chế tạo ảnh suy giảm bức xạ X-quang truyền thống; nguyên lí chụp cắt lớp vi tính (CT scanner); sự suy giảm theo định luật lũy thừa I = I₀ e^(−μd); so sánh ưu nhược điểm giữa X-quang phẳng 2D và ảnh cắt lớp 3D.",
    "sections": [
      {
        "heading": "1. Chụp X-quang quy ước và định luật suy giảm",
        "cards": [
          {
            "title": "Cơ chế tạo ảnh X-quang 2D",
            "points": [
              "<strong>Nguyên lí tạo bóng (Shadowgraph):</strong> Chùm tia X hình nón phát ra từ tiêu điểm ống Coolidge xuyên qua cơ thể người. Các bộ phận có mật độ dày (xương) hấp thụ nhiều tia X; mô mềm, phổi chứa khí hấp thụ ít tia X.",
              "<strong>Định luật suy giảm bức xạ:</strong> Cường độ tia X sau khi qua bề dày d của môi trường đồng nhất tuân theo: I = I₀ e^(−μd), với μ là hệ số suy giảm tuyến tính (phụ thuộc năng lượng tia X và nguyên tử số Z của môi trường).",
              "<strong>Hình ảnh trên phim/bộ thu cảm biến số (DR):</strong> Vùng xương cản tia X nhiều ⇒ ít tia X chạm phim ⇒ phim không bị làm đen ⇒ hiển thị màu trắng (vùng cản quang). Vùng phổi chứa khí ít cản tia X ⇒ phim đen sẫm (vùng sáng quang)."
            ]
          },
          {
            "title": "Ưu nhược điểm và hạn chế của X-quang phẳng",
            "points": [
              "<strong>Ưu điểm:</strong> Thiết bị gọn nhẹ, thời gian chụp cực nhanh (vài mili-giây), chi phí rẻ, rất hiệu quả chẩn đoán chấn thương xương khớp, răng và bệnh lí phổi (lao phổi, viêm phổi, tràn dịch màng phổi).",
              "<strong>Hạn chế hình ảnh chồng lấp (Superposition):</strong> Ảnh 2D là hình chiếu phẳng tích hợp toàn bộ chiều dày cơ thể; các tạng nằm trước sau bị chồng đè lên nhau, rất khó phát hiện các tổn thương nhỏ nằm khuất sau xương sườn hoặc tim."
            ]
          }
        ]
      },
      {
        "heading": "2. Chụp cắt lớp vi tính (Computed Tomography - CT)",
        "cards": [
          {
            "title": "Nguyên lí hoạt động của máy chụp CT",
            "points": [
              "<strong>Khung gantry quay 360°:</strong> Bóng phát tia X và dãy đầu thu (detector) đối diện quay liên tục quanh cơ thể bệnh nhân theo hình xoắn ốc (Spiral/Helical CT).",
              "<strong>Thu nhận hàng ngàn lát cắt mỏng:</strong> Chùm tia X dạng rẻ quạt hẹp quét qua từng lát cắt (độ dày chỉ từ 0,5 mm đến vài mm) từ hàng trăm góc chiếu khác nhau.",
              "<strong>Tái tạo ảnh bằng máy tính (Radon Transform):</strong> Thuật toán máy tính tính toán ngược lại hệ số suy giảm μ của từng điểm thể tích (Voxel) trong lát cắt, gán thang xám theo đơn vị Hounsfield (HU) tạo thành ma trận điểm ảnh (Pixel) 2D và mô hình 3D đa chiều."
            ]
          },
          {
            "title": "So sánh toàn diện X-quang và CT",
            "points": [
              "<strong>Độ phân giải tương phản:</strong> CT vượt trội gấp hàng chục lần so với X-quang, phân biệt rõ các mô mềm có độ cản quang gần bằng nhau (phân biệt chất trắng, chất xám não, tụ máu, khối u).",
              "<strong>Loại bỏ hoàn toàn hình ảnh chồng lấp:</strong> Cho phép quan sát trực tiếp mặt cắt ngang (Axial), cắt dọc (Coronal) và cắt đứng ngang (Sagittal).",
              "<strong>Lưu ý liều chiếu:</strong> Liều bức xạ của một lần chụp CT ngực hoặc bụng cao hơn nhiều lần (từ 50 đến 200 lần) so với một lần chụp X-quang ngực thẳng thông thường; cần có chỉ định chặt chẽ của bác sĩ chuyên khoa."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Theo định luật suy giảm bức xạ I = I₀ e^(−μd), nếu tăng độ dày d của một tấm chắn chì lên gấp đôi thì cường độ tia X truyền qua sẽ:",
        "options": [
          "Giảm đi một nửa",
          "Giảm theo hàm mũ (bình phương hệ số e^(−μd))",
          "Giảm đi hai lần",
          "Tăng lên gấp đôi"
        ],
        "answer": 1,
        "explain": "Với d' = 2d, cường độ mới là I' = I₀ e^(−2μd) = I₀ (e^(−μd))² = I² / I₀. Cường độ suy giảm rất nhanh theo hàm số mũ."
      },
      {
        "q": "Ưu điểm nổi bật nhất của chụp cắt lớp vi tính (CT scanner) so với chụp X-quang thông thường là:",
        "options": [
          "Hoàn toàn không sử dụng bức xạ ion hóa",
          "Chi phí chụp rẻ hơn và thời gian xử lí nhanh hơn",
          "Loại bỏ hiện tượng chồng hình và cho hình ảnh chi tiết các lát cắt giải phẫu mô mềm",
          "Có thể mang máy theo người chụp di động dễ dàng"
        ],
        "answer": 2,
        "explain": "CT quét từ nhiều góc độ quanh cơ thể và dùng máy tính tái tạo từng lát cắt mỏng, loại bỏ hoàn toàn nhược điểm chồng hình 2D của X-quang cổ điển."
      },
      {
        "q": "Trên phim chụp X-quang ngực thông thường, vùng nhu mô phổi khỏe mạnh chứa đầy không khí thường xuất hiện với đặc điểm màu sắc nào?",
        "options": [
          "Màu trắng sáng đục",
          "Màu đen sẫm hoặc xám đen",
          "Màu vàng cam",
          "Màu xanh dương đậm"
        ],
        "answer": 1,
        "explain": "Không khí có mật độ rất thấp, hầu như không cản tia X; tia X truyền thẳng qua làm đen lớp muối bạc trên phim tạo thành vùng màu đen hoặc xám sẫm."
      }
    ]
  },
  {
    "id": 7,
    "chuyenDe": 2,
    "chuyenDeTitle": "Chuyên đề 2: Một số ứng dụng Vật lí trong chẩn đoán y học",
    "title": "Bài 7. Siêu âm",
    "badge": "Bài 7 • CĐ2",
    "tagColor": "teal",
    "readTime": "16 phút",
    "target": "Nắm vững bản chất sóng cơ học siêu âm; hiệu ứng áp điện thuận nghịch của tinh thể thạch anh trong đầu dò; trở kháng âm và sự phản xạ tại ranh giới hai mô; các chế độ hiển thị A-mode, B-mode, Doppler và ứng dụng siêu âm thai sản, tim mạch.",
    "sections": [
      {
        "heading": "1. Bản chất sóng siêu âm và đầu dò áp điện",
        "cards": [
          {
            "title": "Bản chất sóng siêu âm và dải tần số y tế",
            "points": [
              "<strong>Định nghĩa:</strong> Sóng siêu âm là sóng âm (sóng cơ học dọc lan truyền trong môi trường vật chất) có tần số lớn hơn ngưỡng nghe được của tai người (f > 20 kHz).",
              "<strong>Tần số dùng trong chẩn đoán y khoa:</strong> Thường từ 2 MHz đến 15 MHz (vận tốc truyền sóng trong mô mềm cơ thể người trung bình v ≈ 1540 m/s).",
              "<strong>Độ phân giải và độ sâu đâm xuyên:</strong> Tần số f càng cao ⇒ bước sóng λ = v/f càng ngắn ⇒ độ phân giải hình ảnh càng nét, nhưng độ sâu đâm xuyên càng nông do năng lượng bị mô hấp thụ mạnh. Tần số thấp (2–3,5 MHz) dùng siêu âm tạng sâu (gan, thận); tần số cao (7–12 MHz) dùng siêu âm tuyến giáp, mắt, mạch máu nông."
            ]
          },
          {
            "title": "Cấu tạo đầu dò và hiệu ứng áp điện (Piezoelectric Effect)",
            "points": [
              "<strong>Hiệu ứng áp điện nghịch (Phát sóng):</strong> Đặt điện áp xoay chiều cao tần vào hai mặt tinh thể gốm áp điện (PZT - Chì Zirconate Titanate) làm tinh thể co giãn cơ học tuần hoàn, phát ra chùm sóng siêu âm lan vào cơ thể.",
              "<strong>Hiệu ứng áp điện thuận (Thu sóng):</strong> Sóng siêu âm phản xạ từ các tạng cơ thể dội ngược lại đập vào tinh thể gốm, nén dãn tinh thể làm xuất hiện tín hiệu điện xoay chiều nhỏ để máy vi tính xử lí.",
              "<strong>Vai trò của gel siêu âm:</strong> Gel bôi da có trở kháng âm xấp xỉ mô người, giúp loại bỏ lớp không khí giữa đầu dò và da (vì không khí có trở kháng âm quá lệch so với da khiến 99,9% sóng âm bị phản xạ ngay tại bề mặt)."
            ]
          }
        ]
      },
      {
        "heading": "2. Tạo ảnh từ sóng phản xạ và các chế độ siêu âm",
        "cards": [
          {
            "title": "Trở kháng âm và hệ số phản xạ tại mặt phân cách",
            "points": [
              "<strong>Trở kháng âm (Acoustic Impedance):</strong> Z = ρ × v (kg/m²·s hoặc Rayl), trong đó ρ là khối lượng riêng của mô và v là vận tốc truyền âm.",
              "<strong>Phản xạ tại ranh giới:</strong> Khi sóng âm gặp mặt tiếp giáp giữa hai mô có trở kháng âm Z₁ và Z₂, một phần sóng bị phản xạ trở lại với hệ số phản xạ cường độ: R = [(Z₂ − Z₁) / (Z₂ + Z₁)]².",
              "<strong>Độ sâu của bề mặt phản xạ:</strong> Tính theo công thức d = (v × Δt) / 2, với Δt là thời gian từ lúc phát xung đến lúc nhận lại sóng phản xạ dội về."
            ]
          },
          {
            "title": "Các chế độ hiển thị siêu âm hiện đại",
            "points": [
              "<strong>Chế độ A (Amplitude Mode):</strong> Biểu diễn biên độ xung phản xạ theo khoảng cách (dùng đo độ sâu nhãn cầu mắt).",
              "<strong>Chế độ B (Brightness Mode - 2D):</strong> Chuyển biên độ phản xạ thành các điểm sáng tối (thang xám Gray-scale) quét trên một mặt phẳng; tạo ra hình ảnh giải phẫu 2D quen thuộc trong siêu âm ổ bụng và sản khoa.",
              "<strong>Chế độ M (Motion Mode):</strong> Ghi lại sự chuyển động của các cấu trúc theo thời gian (dùng khảo sát van tim, cơ tim).",
              "<strong>Siêu âm Doppler (Doppler Ultrasound):</strong> Dựa trên sự thay đổi tần số sóng phản xạ khi hồng cầu di chuyển: Δf = 2f₀ (v_máu / v) cos θ. Dùng đo tốc độ và hướng dòng chảy mạch máu, phát hiện hẹp tắc mạch và hở van tim."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Bác sĩ bôi một lớp gel trong suốt lên da bệnh nhân trước khi đặt đầu dò siêu âm nhằm mục đích vật lí chính là:",
        "options": [
          "Khử trùng và làm mát bề mặt da",
          "Loại bỏ lớp không khí giữa đầu dò và da để sóng siêu âm truyền tối đa vào cơ thể",
          "Tăng vận tốc ánh sáng phản xạ từ mô mềm",
          "Làm giảm đau cho bệnh nhân khi đầu dò tì đè"
        ],
        "answer": 1,
        "explain": "Không khí có trở kháng âm rất nhỏ so với mô mềm; nếu có bọt khí, hầu như toàn bộ sóng âm sẽ bị phản xạ ngược lại ngay tại da. Gel có trở kháng âm tương đồng mô giúp sóng truyền qua dễ dàng."
      },
      {
        "q": "Sóng siêu âm truyền trong mô người với vận tốc 1540 m/s. Nếu thời gian từ lúc phát xung đến khi nhận lại sóng phản xạ là 0,1 ms thì độ sâu của mặt phản xạ là:",
        "options": [
          "15,4 cm",
          "7,7 cm",
          "3,85 cm",
          "7,7 mm"
        ],
        "answer": 1,
        "explain": "Quãng đường cả đi và về là s = v × Δt = 1540 × 0,0001 = 0,154 m = 15,4 cm. Độ sâu của cấu trúc là d = s / 2 = 7,7 cm."
      },
      {
        "q": "Hiện tượng nào sau đây được ứng dụng để chế tạo đầu dò phát và thu sóng siêu âm?",
        "options": [
          "Hiệu ứng quang điện ngoài",
          "Hiệu ứng áp điện thuận và nghịch",
          "Hiện tượng phóng xạ tự nhiên",
          "Hiện tượng tán sắc ánh sáng"
        ],
        "answer": 1,
        "explain": "Hiệu ứng áp điện (Piezoelectric Effect) của vật liệu gốm PZT cho phép biến đổi qua lại hai chiều giữa dao động điện cao tần và dao động cơ học sóng âm."
      }
    ]
  },
  {
    "id": 8,
    "chuyenDe": 2,
    "chuyenDeTitle": "Chuyên đề 2: Một số ứng dụng Vật lí trong chẩn đoán y học",
    "title": "Bài 8. Chụp cộng hưởng từ",
    "badge": "Bài 8 • CĐ2",
    "tagColor": "teal",
    "readTime": "18 phút",
    "target": "Nắm vững nguyên lí cộng hưởng từ hạt nhân (NMR) của proton Hydrogen trong cơ thể; tần số Larmor; vai trò của xung sóng vô tuyến RF và quá trình hồi phục T1, T2; cấu tạo máy MRI siêu dẫn và các quy tắc an toàn từ trường tuyệt đối.",
    "sections": [
      {
        "heading": "1. Nguyên lí vật lí của hiện tượng cộng hưởng từ hạt nhân",
        "cards": [
          {
            "title": "Spin hạt nhân và tần số tiến động Larmor",
            "points": [
              "<strong>Proton nguyên tử Hydrogen (¹H):</strong> Chiếm khoảng 63% tổng số nguyên tử trong cơ thể người (chủ yếu trong nước H₂O và phân tử mỡ). Proton mang điện tích dương và có momen động lượng riêng (spin), tạo nên một momen từ vi mô.",
              "<strong>Định hướng trong từ trường tĩnh B₀:</strong> Bình thường các vector momen từ định hướng ngẫu nhiên triệt tiêu nhau. Khi đặt vào từ trường mạnh B₀ (1,5 T đến 3,0 T), các proton sắp xếp song song (mức năng lượng thấp) hoặc phản song song (mức năng lượng cao) với B₀, tạo nên vector từ hóa tổng hợp M hướng theo B₀.",
              "<strong>Chuyển động tiến động Larmor:</strong> Các proton quay tiến động quanh trục của từ trường B₀ với tần số góc xác định: ω₀ = γ B₀ hay f₀ = (γ / 2π) B₀, trong đó γ là tỉ số từ hồi chuyển của proton (với ¹H, γ / 2π ≈ 42,58 MHz/Tesla).",
              "<strong>Ví dụ:</strong> Trong máy MRI 1,5 Tesla, tần số Larmor của proton xấp xỉ f₀ = 42,58 × 1,5 ≈ 63,87 MHz (thuộc dải sóng radio FM)."
            ]
          },
          {
            "title": "Kích thích xung sóng vô tuyến RF và quá trình hồi phục",
            "points": [
              "<strong>Cộng hưởng (Resonance):</strong> Phát một xung sóng điện từ tần số vô tuyến (RF pulse) có tần số đúng bằng tần số Larmor f₀ vuông góc với B₀. Proton hấp thụ năng lượng, vector từ hóa M bị lệch góc 90° hoặc 180° so với trục B₀.",
              "<strong>Quá trình hồi phục (Relaxation):</strong> Khi ngắt xung RF, các proton phát xạ lại tín hiệu sóng RF đã hấp thụ để trở về trạng thái cân bằng ban đầu. Tín hiệu này được các cuộn thu bắt lấy.",
              "<strong>Thời gian hồi phục T1 (dọc) và T2 (ngang):</strong> T1 là thời gian hồi phục từ hóa dọc theo trục B₀; T2 là thời gian mất pha từ hóa ngang. Các mô khác nhau (dịch não tủy, chất xám, mô mỡ, u xơ) có thời gian T1 và T2 khác nhau rõ rệt, tạo nên độ tương phản giải phẫu cực cao."
            ]
          }
        ]
      },
      {
        "heading": "2. Cấu tạo máy MRI và quy tắc an toàn từ trường",
        "cards": [
          {
            "title": "Các bộ phận chính của hệ thống chụp MRI",
            "points": [
              "<strong>Nam châm siêu dẫn chính (Main Magnet):</strong> Cuộn dây hợp kim Niobi-Titan (NbTi) được ngâm trong Heli lỏng ở nhiệt độ siêu hàn (-269°C / 4,2 K) để duy trì trạng thái siêu dẫn không điện trở, tạo từ trường tĩnh B₀ cực mạnh (1,5 T – 3 T) liên tục ngày đêm.",
              "<strong>Các cuộn từ trường biến thiên (Gradient Coils):</strong> Tạo ra từ trường phụ biến thiên tuyến tính theo 3 trục không gian (Gx, Gy, Gz) để mã hóa vị trí lát cắt và tọa độ điểm ảnh.",
              "<strong>Cuộn phát và thu sóng RF (RF Coils):</strong> Phát xung kích thích và ghi nhận tín hiệu cộng hưởng từ siêu yếu phát ra từ cơ thể bệnh nhân.",
              "<strong>Hệ thống máy tính:</strong> Phân tích biến đổi Fourier 2D/3D (Fast Fourier Transform) tái tạo hình ảnh lát cắt sắc nét không giới hạn hướng không gian."
            ]
          },
          {
            "title": "Quy tắc an toàn từ trường tuyệt đối trong phòng MRI",
            "points": [
              "<strong>Hiệu ứng tên lửa (Missile Effect):</strong> Từ trường B₀ luôn luôn bật (ngay cả khi máy không chụp). Bất kì vật dụng bằng kim loại sắt từ (dao kéo, bình oxy, xe lăn, chìa khóa, kẹp tóc) khi đưa vào phòng chụp sẽ bị hút lao vào lòng máy với vận tốc cực lớn như viên đạn, gây nguy hiểm chết người.",
              "<strong>Chống chỉ định tuyệt đối:</strong> Bệnh nhân mang máy tạo nhịp tim (Pacemaker), máy cấy ghép ốc tai điện tử, clip kim loại kẹp phình mạch não bằng vật liệu sắt từ.",
              "<strong>Ưu điểm vượt trội:</strong> Hoàn toàn không sử dụng bức xạ ion hóa (không hại tia như X-quang/CT), chụp chi tiết hệ thần kinh não - tủy sống, sụn khớp và mạch máu mềm không cần thuốc cản quang độc hại."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Hạt nhân nguyên tử nào trong cơ thể người là đối tượng tín hiệu chính được khai thác trong kĩ thuật chụp cộng hưởng từ (MRI)?",
        "options": [
          "Hạt nhân Carbon (¹²C)",
          "Hạt nhân Hydro / Proton (¹H)",
          "Hạt nhân Canxi (⁴⁰Ca)",
          "Hạt nhân Oxy (¹⁶O)"
        ],
        "answer": 1,
        "explain": "Nguyên tử Hydro (¹H) chiếm tỉ lệ áp đảo trong các phân tử nước và chất béo của cơ thể người, đồng thời proton của nó có momen từ hạt nhân mạnh nhất, tạo tín hiệu cộng hưởng vượt trội."
      },
      {
        "q": "Trong máy chụp MRI có từ trường 1,5 Tesla, xung sóng điện từ dùng để kích thích các proton cộng hưởng thuộc dải bức xạ nào?",
        "options": [
          "Tia X cứng",
          "Tia tử ngoại (UV)",
          "Sóng vô tuyến (Radio Frequency - RF)",
          "Tia gamma (γ)"
        ],
        "answer": 2,
        "explain": "Với B₀ = 1,5 T, tần số Larmor của proton khoảng 63,87 MHz, tương ứng với sóng điện từ tần số vô tuyến (RF), an toàn và không gây ion hóa mô sinh học."
      },
      {
        "q": "Quy định an toàn nào sau đây là BẮT BUỘC TUYỆT ĐỐI trước khi cho bệnh nhân vào phòng chụp MRI?",
        "options": [
          "Yêu cầu bệnh nhân nhịn ăn trong 24 giờ liên tục",
          "Kiểm tra và tháo bỏ toàn bộ vật dụng kim loại sắt từ, sàng lọc thiết bị cấy ghép như máy tạo nhịp tim",
          "Bắt buộc uống thuốc nhuộm màu cản quang",
          "Cho bệnh nhân đeo kính chì bảo vệ mắt khỏi tia X"
        ],
        "answer": 1,
        "explain": "Từ trường siêu dẫn cực mạnh có thể hút bay các vật bằng sắt từ với lực cực lớn và phá hủy mạch vi điện tử trong máy tạo nhịp tim, gây tử vong cho người bệnh."
      }
    ]
  },
  {
    "id": 9,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3: Vật lí lượng tử",
    "title": "Bài 9. Hiệu ứng quang điện và năng lượng của photon",
    "badge": "Bài 9 • CĐ3",
    "tagColor": "purple",
    "readTime": "18 phút",
    "target": "Nắm vững thí nghiệm Hertz và hiện tượng quang điện ngoài; các định luật quang điện; thuyết lượng tử ánh sáng (photon) của Planck và Einstein; phương trình Einstein; hiệu điện thế hãm và ứng dụng tế bào quang điện.",
    "sections": [
      {
        "heading": "1. Hiện tượng quang điện ngoài và các định luật",
        "cards": [
          {
            "title": "Thí nghiệm Heinrich Hertz và định nghĩa",
            "points": [
              "<strong>Thí nghiệm Hertz (1887):</strong> Chiếu ánh sáng hồ quang giàu tia tử ngoại vào lá kẽm (Zn) tích điện âm gắn trên điện nghiệm ⇒ hai lá điện nghiệm cụp lại (chứng tỏ kẽm bị mất bớt điện tích âm, tức electron bị bật ra).",
              "<strong>Ảnh hưởng của tấm thủy tinh:</strong> Khi chắn chùm sáng hồ quang bằng tấm thủy tinh không màu (thủy tinh hấp thụ tia tử ngoại, chỉ cho ánh sáng nhìn thấy đi qua) ⇒ hai lá điện nghiệm không bị cụp.",
              "<strong>Định nghĩa:</strong> Hiện tượng quang điện (ngoài) là hiện tượng ánh sáng làm bật các electron ra khỏi bề mặt của tấm kim loại khi được chiếu sáng thích hợp. Các electron bật ra gọi là quang electron (photoelectrons)."
            ]
          },
          {
            "title": "Các định luật quang điện thực nghiệm",
            "points": [
              "<strong>Định luật về giới hạn quang điện (Định luật 1):</strong> Đối với mỗi kim loại, hiện tượng quang điện chỉ xảy ra khi bước sóng của ánh sáng kích thích λ nhỏ hơn hoặc bằng một giới hạn quang điện λ₀ xác định đặc trưng cho kim loại đó: λ ≤ λ₀.",
              "<strong>Định luật về cường độ dòng quang điện bão hòa (Định luật 2):</strong> Đối với ánh sáng kích thích có bước sóng thích hợp (λ ≤ λ₀), cường độ dòng quang điện bão hòa I_bh tỉ lệ thuận với cường độ chùm sáng kích thích (số photon đến catôt trong 1 giây).",
              "<strong>Định luật về động năng ban đầu cực đại (Định luật 3):</strong> Động năng ban đầu cực đại của quang electron K_max chỉ phụ thuộc vào bước sóng ánh sáng kích thích λ và bản chất kim loại catôt, hoàn toàn không phụ thuộc vào cường độ chùm sáng."
            ]
          }
        ]
      },
      {
        "heading": "2. Thuyết photon và phương trình Einstein",
        "cards": [
          {
            "title": "Thuyết lượng tử ánh sáng của Einstein (1905)",
            "points": [
              "<strong>Ánh sáng tạo bởi các hạt photon:</strong> Với mỗi ánh sáng đơn sắc tần số f, các photon đều mang cùng một lượng tử năng lượng: ε = h f = h c / λ (với h = 6,626 × 10⁻³⁴ J·s là hằng số Planck).",
              "<strong>Photon chuyển động:</strong> Trong chân không, photon bay với tốc độ c = 3 × 10⁸ m/s dọc theo các tia sáng. Không có photon đứng yên; photon chỉ tồn tại trong trạng thái chuyển động.",
              "<strong>Tương tác một - một:</strong> Mỗi lần một nguyên tử hấp thụ hay phát xạ ánh sáng thì nó hấp thụ hay phát xạ một photon. Khi photon đập vào kim loại, nó truyền toàn bộ năng lượng ε cho một electron duy nhất."
            ]
          },
          {
            "title": "Phương trình quang điện Einstein và điện thế hãm",
            "points": [
              "<strong>Phương trình năng lượng Einstein:</strong> h f = A + K_max ⇔ h c / λ = h c / λ₀ + ½ m v_max², trong đó A = h f₀ = h c / λ₀ là công thoát của electron khỏi kim loại.",
              "<strong>Điều kiện xảy ra quang điện:</strong> Để electron bứt ra được thì K_max ≥ 0 ⇒ h f ≥ A ⇔ λ ≤ λ₀ = h c / A.",
              "<strong>Điện thế hãm U_h:</strong> Đặt hiệu điện thế ngược U_AK = −U_h để triệt tiêu hoàn toàn dòng quang electron bay sang anot: e U_h = K_max = ½ m v_max²."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Công thoát electron của kim loại kẽm là A = 3,55 eV. Cho h = 6,626.10⁻³⁴ J·s, c = 3.10⁸ m/s, 1 eV = 1,6.10⁻¹⁹ J. Giới hạn quang điện của kẽm là:",
        "options": [
          "0,35 μm",
          "0,55 μm",
          "0,25 μm",
          "0,70 μm"
        ],
        "answer": 0,
        "explain": "Công thoát A = 3,55 × 1,6 × 10⁻¹⁹ J = 5,68 × 10⁻¹⁹ J. Giới hạn quang điện λ₀ = h c / A = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (5,68 × 10⁻¹⁹) ≈ 0,35 × 10⁻⁶ m = 0,35 μm (thuộc vùng tử ngoại)."
      },
      {
        "q": "Chiếu bức xạ có bước sóng λ vào kim loại có giới hạn quang điện λ₀. Hiện tượng quang điện xảy ra khi:",
        "options": [
          "λ > λ₀",
          "λ ≤ λ₀",
          "Cường độ chùm sáng kích thích thật lớn",
          "Thời gian chiếu sáng thật lâu"
        ],
        "answer": 1,
        "explain": "Theo định luật 1 về giới hạn quang điện, photon phải có năng lượng tối thiểu bằng công thoát (hf ≥ A), tương đương bước sóng λ ≤ λ₀."
      },
      {
        "q": "Khi chiếu chùm sáng thích hợp vào catôt của tế bào quang điện, nếu tăng cường độ chùm sáng kích thích lên gấp đôi thì đại lượng nào sau đây tăng gấp đôi?",
        "options": [
          "Động năng ban đầu cực đại của quang electron",
          "Hiệu điện thế hãm U_h",
          "Cường độ dòng quang điện bão hòa I_bh",
          "Vận tốc ban đầu cực đại của quang electron"
        ],
        "answer": 2,
        "explain": "Cường độ sáng tăng gấp đôi nghĩa là số photon đập vào catôt trong 1 giây tăng gấp đôi, làm số electron bứt ra tăng gấp đôi ⇒ dòng quang điện bão hòa I_bh tăng gấp đôi."
      }
    ]
  },
  {
    "id": 10,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3: Vật lí lượng tử",
    "title": "Bài 10. Lưỡng tính sóng hạt",
    "badge": "Bài 10 • CĐ3",
    "tagColor": "purple",
    "readTime": "17 phút",
    "target": "Nắm vững bản chất lưỡng tính sóng – hạt của ánh sáng; giả thuyết de Broglie về sóng vật chất; công thức bước sóng de Broglie; thí nghiệm nhiễu xạ electron của Davisson – Germer; nguyên lí hoạt động của kính hiển vi điện tử.",
    "sections": [
      {
        "heading": "1. Lưỡng tính sóng hạt của ánh sáng và giả thuyết de Broglie",
        "cards": [
          {
            "title": "Lưỡng tính sóng – hạt của ánh sáng",
            "points": [
              "<strong>Tính chất sóng:</strong> Thể hiện rõ nét qua các hiện tượng giao thoa, nhiễu xạ, tán sắc và phân cực ánh sáng (đặc trưng cho bước sóng dài, năng lượng photon nhỏ).",
              "<strong>Tính chất hạt:</strong> Thể hiện rõ nét qua hiện tượng quang điện (ngoài và trong), hiệu ứng Compton, sự phát xạ và hấp thụ quang phổ vạch (đặc trưng cho bước sóng ngắn, tần số cao, năng lượng photon lớn).",
              "<strong>Kết luận thống nhất:</strong> Ánh sáng có lưỡng tính sóng – hạt. Sóng và hạt là hai mặt của cùng một thực thể vật chất thống nhất."
            ]
          },
          {
            "title": "Giả thuyết sóng vật chất của Louis de Broglie (1924)",
            "points": [
              "<strong>Ý tưởng thiên tài:</strong> Tự nhiên vốn có tính đối xứng; nếu sóng ánh sáng có tính chất hạt (photon mang động lượng p = h/λ) thì ngược lại, các hạt vật chất mang khối lượng m chuyển động với vận tốc v cũng phải có tính chất sóng liên kết.",
              "<strong>Công thức bước sóng de Broglie:</strong> λ = h / p = h / (m v) (đối với vận tốc v ≪ c).",
              "<strong>Ý nghĩa kích thước:</strong> Với vật thể vĩ mô (quả bóng, ô tô), m rất lớn nên bước sóng λ cực nhỏ (10⁻³⁴ m), không thể quan sát được tính chất sóng. Với hạt vi mô (electron, neutron, proton), m cực nhỏ nên λ cỡ kích thước nguyên tử (0,1 nm), tính chất sóng biểu hiện vô cùng rõ rệt."
            ]
          }
        ]
      },
      {
        "heading": "2. Thí nghiệm kiểm chứng và ứng dụng kính hiển vi điện tử",
        "cards": [
          {
            "title": "Thí nghiệm Davisson – Germer và nhiễu xạ electron",
            "points": [
              "<strong>Thí nghiệm Davisson – Germer (1927):</strong> Bắn chùm electron có động năng xác định vào bề mặt tinh thể Niken (Ni).",
              "<strong>Kết quả:</strong> Các electron bị tán xạ theo những góc ưu tiên xác định, tạo nên các vân cực đại và cực tiểu giống hệt hiện tượng nhiễu xạ tia X qua mạng tinh thể của Bragg: 2d sin θ = n λ.",
              "<strong>Thí nghiệm Thomson (1927):</strong> Cho chùm electron xuyên qua lá vàng mỏng thu được các vòng tròn nhiễu xạ đồng tâm trên màn huỳnh quang. Đây là bằng chứng thực nghiệm không thể chối cãi khẳng định electron có tính chất sóng."
            ]
          },
          {
            "title": "Kính hiển vi điện tử (Electron Microscope - TEM/SEM)",
            "points": [
              "<strong>Nguyên lí:</strong> Thay vì dùng chùm photon ánh sáng nhìn thấy (bước sóng 400–700 nm), kính hiển vi điện tử dùng chùm electron gia tốc qua điện thế U hàng trăm kV để tạo sóng de Broglie có bước sóng cực ngắn (λ ≈ 0,004 nm).",
              "<strong>Hệ thấu kính từ trường:</strong> Dùng từ trường của các cuộn dây để hội tụ và định hướng chùm electron (tương đương thấu kính quang học).",
              "<strong>Độ phóng đại vượt bậc:</strong> Giới hạn nhiễu xạ tỉ lệ với bước sóng, do bước sóng electron ngắn hơn ánh sáng 100.000 lần nên kính hiển vi điện tử phóng đại tới hàng triệu lần, nhìn rõ virus, phân tử DNA và từng hàng nguyên tử bề mặt tinh thể."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một electron có khối lượng m = 9,1.10⁻³¹ kg chuyển động với vận tốc v = 2.10⁶ m/s. Cho h = 6,626.10⁻³⁴ J·s. Bước sóng de Broglie liên kết với electron này là:",
        "options": [
          "0,364 nm",
          "3,64 nm",
          "0,036 nm",
          "36,4 nm"
        ],
        "answer": 0,
        "explain": "Bước sóng de Broglie: λ = h / (m v) = (6,626 × 10⁻³⁴) / (9,1 × 10⁻³¹ × 2 × 10⁶) ≈ 3,64 × 10⁻¹⁰ m = 0,364 nm."
      },
      {
        "q": "Thí nghiệm nào sau đây là bằng chứng thực nghiệm trực tiếp chứng minh hạt electron có tính chất sóng?",
        "options": [
          "Thí nghiệm tán xạ hạt alpha của Rutherford",
          "Thí nghiệm nhiễu xạ chùm electron qua tinh thể của Davisson và Germer",
          "Thí nghiệm giọt dầu Millikan đo điện tích",
          "Thí nghiệm tế bào quang điện của Hertz"
        ],
        "answer": 1,
        "explain": "Thí nghiệm Davisson–Germer (1927) phát hiện chùm electron khi đập vào tinh thể niken tạo nên các cực đại nhiễu xạ, chứng minh trọn vẹn bản chất sóng của electron."
      },
      {
        "q": "Kính hiển vi điện tử có độ phân giải và độ phóng đại cao gấp hàng ngàn lần kính hiển vi quang học chủ yếu là nhờ:",
        "options": [
          "Chùm electron có bước sóng de Broglie ngắn hơn rất nhiều so với bước sóng ánh sáng nhìn thấy",
          "Electron có điện tích âm nên dễ điều khiển",
          "Tốc độ của electron lớn hơn tốc độ ánh sáng trong chân không",
          "Kính hiển vi điện tử sử dụng thấu kính thủy tinh siêu trong suốt"
        ],
        "answer": 0,
        "explain": "Giới hạn phân giải tỉ lệ thuận với bước sóng. Sóng de Broglie của chùm electron ngắn hơn ánh sáng khả kiến hàng ngàn lần, cho phép quan sát chi tiết siêu vi."
      }
    ]
  },
  {
    "id": 11,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3: Vật lí lượng tử",
    "title": "Bài 11. Quang phổ vạch của nguyên tử",
    "badge": "Bài 11 • CĐ3",
    "tagColor": "purple",
    "readTime": "17 phút",
    "target": "Phân biệt quang phổ liên tục, quang phổ phát xạ vạch và quang phổ hấp thụ vạch; hai tiên đề Bohr về trạng thái dừng và sự phát xạ/hấp thụ photon; giải thích thành công quang phổ nguyên tử Hydrogen; ứng dụng phân tích quang phổ trong thiên văn và hóa học.",
    "sections": [
      {
        "heading": "1. Các loại quang phổ và đặc điểm nhận biết",
        "cards": [
          {
            "title": "Phân loại các hệ thống quang phổ",
            "points": [
              "<strong>Quang phổ liên tục:</strong> Dải màu biến đổi liên tục từ đỏ đến tím, do các chất rắn, chất lỏng hoặc chất khí có áp suất lớn phát ra khi bị nung nóng; chỉ phụ thuộc vào nhiệt độ của nguồn sáng, không phụ thuộc vào thành phần cấu tạo nguồn.",
              "<strong>Quang phổ phát xạ vạch:</strong> Hệ thống các vạch sáng màu riêng lẻ ngăn cách nhau bởi những khoảng tối, do các chất khí hay hơi ở áp suất thấp phát ra khi bị kích thích bằng nhiệt hoặc điện thế cao; đặc trưng riêng cho từng nguyên tố hóa học.",
              "<strong>Quang phổ hấp thụ vạch:</strong> Các vạch tối nằm trên nền của một quang phổ liên tục, xuất hiện khi ánh sáng trắng truyền qua một khối khí hay hơi có nhiệt độ thấp hơn nhiệt độ nguồn sáng trắng; vị trí vạch tối trùng đúng vị trí vạch sáng phát xạ của nguyên tố đó (định luật đảo sắc Kirchhoff)."
            ]
          },
          {
            "title": "Ứng dụng thực tiễn của phân tích quang phổ",
            "points": [
              "<strong>Xác định thành phần hóa học:</strong> Nhận biết sự hiện diện của các nguyên tố trong quặng khoáng sản hoặc mẫu vật với độ nhạy cực cao (dù chỉ có lượng vết cực nhỏ).",
              "<strong>Thám hiểm thiên văn học:</strong> Phân tích thành phần khí quyển Mặt Trời, các ngôi sao và thiên hà xa xôi dựa vào vạch hấp thụ Fraunhofer.",
              "<strong>Đo nhiệt độ và vận tốc thiên thể:</strong> Dùng quang phổ liên tục để suy ra nhiệt độ bề mặt sao; dùng độ lệch Doppler của vạch quang phổ để tính vận tốc dịch chuyển của thiên hà."
            ]
          }
        ]
      },
      {
        "heading": "2. Mẫu nguyên tử Bohr và quang phổ vạch Hydrogen",
        "cards": [
          {
            "title": "Hai tiên đề của Niels Bohr (1913)",
            "points": [
              "<strong>Tiên đề 1 (Trạng thái dừng):</strong> Nguyên tử chỉ tồn tại trong những trạng thái có năng lượng xác định gọi là trạng thái dừng. Khi ở trạng thái dừng, nguyên tử không bức xạ năng lượng. Quỹ đạo electron có bán kính gián đoạn: r_n = n² r₀ (với r₀ = 0,53 Å là bán kính Bohr, n = 1, 2, 3... tương ứng mức K, L, M, N...).",
              "<strong>Tiên đề 2 (Sự bức xạ và hấp thụ năng lượng):</strong> Khi nguyên tử chuyển từ trạng thái dừng mức năng lượng cao E_n sang mức năng lượng thấp E_m thì nó phát ra một photon có năng lượng: ε = h f_nm = E_n − E_m.",
              "<strong>Hấp thụ photon:</strong> Ngược lại, nếu nguyên tử đang ở mức E_m mà hấp thụ photon có năng lượng đúng bằng (E_n − E_m) thì nó sẽ nhảy vọt lên mức năng lượng cao E_n."
            ]
          },
          {
            "title": "Giải thích quang phổ nguyên tử Hydrogen",
            "points": [
              "<strong>Công thức năng lượng:</strong> E_n = −13,6 / n² (eV) (với n = 1, 2, 3...). Mức cơ bản n = 1 có năng lượng E₁ = −13,6 eV (bền vững nhất); các mức n ≥ 2 là trạng thái kích thích.",
              "<strong>Dãy Lyman (Tử ngoại):</strong> Chuyển từ các mức n ≥ 2 về mức cơ bản n = 1 (bước sóng ngắn, photon năng lượng cao).",
              "<strong>Dãy Balmer (Ánh sáng khả kiến & Tử ngoại):</strong> Chuyển từ các mức n ≥ 3 về mức n = 2; gồm 4 vạch nhìn thấy: H_α (đỏ, 3→2), H_β (lam, 4→2), H_γ (chàm, 5→2), H_δ (tím, 6→2).",
              "<strong>Dãy Paschen (Hồng ngoại):</strong> Chuyển từ các mức n ≥ 4 về mức n = 3 (năng lượng photon thấp, nằm hoàn toàn trong vùng hồng ngoại)."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Theo tiên đề Bohr, khi nguyên tử hiđrô chuyển từ trạng thái dừng có năng lượng E_M = −1,51 eV về trạng thái E_K = −13,6 eV thì nó phát ra photon có năng lượng là:",
        "options": [
          "12,09 eV",
          "15,11 eV",
          "1,51 eV",
          "13,6 eV"
        ],
        "answer": 0,
        "explain": "Năng lượng photon phát ra bằng độ chênh lệch mức năng lượng: ε = E_M − E_K = −1,51 − (−13,6) = 12,09 eV."
      },
      {
        "q": "Quang phổ vạch phát xạ của một nguyên tố hóa học được tạo ra bởi:",
        "options": [
          "Chất rắn bị nung nóng ở nhiệt độ rất cao",
          "Khối khí hay hơi ở áp suất thấp khi được kích thích phát sáng",
          "Ánh sáng trắng chiếu qua lăng kính thủy tinh",
          "Chất lỏng ở áp suất cao khi phát sáng"
        ],
        "answer": 1,
        "explain": "Chất khí hoặc hơi ở áp suất thấp khi bị kích thích bởi tia lửa điện hoặc nhiệt độ sẽ phát ra quang phổ vạch gồm các vạch màu riêng biệt đặc trưng cho nguyên tố đó."
      },
      {
        "q": "Bốn vạch quang phổ nhìn thấy trong dãy Balmer của nguyên tử hiđrô tương ứng với sự chuyển mức electron từ các quỹ đạo ngoài về quỹ đạo nào?",
        "options": [
          "Quỹ đạo K (n = 1)",
          "Quỹ đạo L (n = 2)",
          "Quỹ đạo M (n = 3)",
          "Quỹ đạo N (n = 4)"
        ],
        "answer": 1,
        "explain": "Dãy Balmer tương ứng với electron chuyển từ các mức n = 3, 4, 5, 6 về mức n = 2 (quỹ đạo L), phát ra 4 vạch đỏ (H_α), lam (H_β), chàm (H_γ) và tím (H_δ)."
      }
    ]
  },
  {
    "id": 12,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3: Vật lí lượng tử",
    "title": "Bài 12. Vùng năng lượng của tinh thể chất rắn",
    "badge": "Bài 12 • CĐ3",
    "tagColor": "purple",
    "readTime": "18 phút",
    "target": "Hiểu rõ cơ chế hình thành vùng năng lượng trong tinh thể chất rắn; phân loại kim loại, bán dẫn và chất cách điện dựa trên vùng hóa trị, vùng cấm và vùng dẫn; ảnh hưởng của nhiệt độ lên độ dẫn điện; nguyên lí hoạt động của quang điện trở (LDR).",
    "sections": [
      {
        "heading": "1. Vùng năng lượng và phân loại vật liệu rắn",
        "cards": [
          {
            "title": "Cơ chế hình thành vùng năng lượng",
            "points": [
              "<strong>Tương tác mạng tinh thể:</strong> Trong nguyên tử cô lập, các mức năng lượng gián đoạn rõ rệt. Khi vô số nguyên tử (cỡ 10²³ nguyên tử/cm³) liên kết thành mạng tinh thể, sự tương tác làm các mức năng lượng tách ra thành các dải năng lượng gồm vô số mức con san sát nhau, gọi là <em>vùng năng lượng</em>.",
              "<strong>Vùng hóa trị (Valence Band):</strong> Vùng năng lượng thấp nhất chứa các electron hóa trị tham gia liên kết giữa các nguyên tử trong tinh thể.",
              "<strong>Vùng dẫn (Conduction Band):</strong> Vùng năng lượng cao hơn; các electron ở vùng này có thể chuyển động tự do khắp mạng tinh thể để dẫn điện.",
              "<strong>Vùng cấm (Band Gap - E_g):</strong> Khoảng cách năng lượng giữa đỉnh vùng hóa trị và đáy vùng dẫn; electron không được phép tồn tại trong vùng cấm."
            ]
          },
          {
            "title": "Phân loại vật liệu theo cấu trúc vùng năng lượng",
            "points": [
              "<strong>Kim loại (Vật dẫn):</strong> Vùng dẫn có sẵn electron hoặc vùng dẫn chồng lấn một phần lên vùng hóa trị (E_g = 0); mật độ electron tự do cực lớn (cỡ 10²⁸ m⁻³), dẫn điện cực tốt ở mọi nhiệt độ.",
              "<strong>Chất bán dẫn (Semiconductor):</strong> Vùng cấm hẹp vừa phải (E_g ≈ 0,7 eV với Ge, 1,1 eV với Si). Ở 0 K, vùng hóa trị đầy, vùng dẫn trống (cách điện). Khi nhận nhiệt năng hoặc ánh sáng, electron nhảy qua vùng cấm lên vùng dẫn, tạo thành cặp electron tự do và lỗ trống cùng tham gia dẫn điện.",
              "<strong>Chất cách điện (Insulator):</strong> Vùng cấm rất rộng (E_g > 3–5 eV, như kim cương E_g ≈ 5,5 eV). Ở điều kiện thông thường, electron không thể nhận đủ năng lượng để vượt qua vùng cấm, độ dẫn điện hầu như bằng 0."
            ]
          }
        ]
      },
      {
        "heading": "2. Ảnh hưởng của nhiệt độ và nguyên lí quang điện trở (LDR)",
        "cards": [
          {
            "title": "Ảnh hưởng trái ngược của nhiệt độ lên kim loại và bán dẫn",
            "points": [
              "<strong>Đối với kim loại:</strong> Khi nhiệt độ T tăng, các ion dương ở nút mạng dao động nhiệt mạnh hơn, va chạm tán xạ electron dẫn nhiều hơn ⇒ độ linh động giảm, trong khi mật độ electron hầu như không đổi ⇒ <em>Điện trở suất của kim loại tăng, độ dẫn điện giảm</em>.",
              "<strong>Đối với bán dẫn tinh khiết:</strong> Khi nhiệt độ T tăng, nội năng kích thích nhiệt làm bẻ gãy các liên kết cộng hóa trị, đưa một lượng lớn electron vượt vùng cấm lên vùng dẫn, đồng thời sinh ra lỗ trống tương ứng ⇒ <em>Mật độ hạt tải điện tăng theo hàm mũ, độ dẫn điện tăng vọt (điện trở suất giảm mạnh)</em>.",
              "<strong>Ý nghĩa công nghệ:</strong> Đây là cơ sở chế tạo nhiệt điện trở (Thermistor NTC) dùng trong các cảm biến đo nhiệt độ điện tử."
            ]
          },
          {
            "title": "Nguyên lí hoạt động của điện trở quang (LDR / Photoresistor)",
            "points": [
              "<strong>Cấu tạo:</strong> Sử dụng màng bán dẫn nhạy sáng (như Cadmium Sulfide - CdS hoặc chì sulfide PbS) phủ giữa hai điện cực kim loại hình răng lược.",
              "<strong>Hiệu ứng quang điện trong:</strong> Khi ở trong bóng tối, có rất ít hạt tải tự do, điện trở LDR rất lớn (hàng Megaohm - MΩ).",
              "<strong>Khi được chiếu sáng thích hợp:</strong> Photon chiếu tới có năng lượng ε = hf ≥ E_g kích thích electron từ vùng hóa trị nhảy vọt qua vùng cấm lên vùng dẫn, tạo thêm vô số cặp electron–lỗ trống mới; cường độ sáng càng mạnh, số hạt tải càng dày đặc ⇒ <em>Điện trở của LDR giảm nhanh xuống vài trăm ohm</em>.",
              "<strong>Ứng dụng mạch tự động:</strong> Công tắc đèn đường tự động bật khi trời tối và tắt khi trời sáng; cảm biến báo động trộm ngắt tia hồng ngoại; đo độ phơi sáng máy ảnh."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Điểm khác biệt căn bản về cấu trúc vùng năng lượng giữa chất bán dẫn và chất cách điện là:",
        "options": [
          "Chất bán dẫn không có vùng hóa trị",
          "Chất bán dẫn có độ rộng vùng cấm E_g hẹp hơn nhiều so với chất cách điện",
          "Vùng dẫn của chất bán dẫn luôn chồng lấn với vùng hóa trị",
          "Chất cách điện có mật độ electron tự do cao hơn"
        ],
        "answer": 1,
        "explain": "Cả bán dẫn và cách điện đều có vùng cấm, nhưng vùng cấm của bán dẫn hẹp (khoảng 1 eV), electron dễ được kích hoạt; còn vùng cấm của chất cách điện rất rộng (trên 3–5 eV), electron khó vượt qua."
      },
      {
        "q": "Khi tăng nhiệt độ của một mẫu chất bán dẫn tinh khiết (silicon) từ 20°C lên 80°C, điện trở của mẫu sẽ thay đổi như thế nào?",
        "options": [
          "Tăng đều đặn theo thời gian",
          "Giảm đáng kể do mật độ electron và lỗ trống tăng mạnh",
          "Không đổi vì số electron trong chất rắn là bảo toàn",
          "Tăng vọt do ion nút mạng dao động mạnh"
        ],
        "answer": 1,
        "explain": "Nhiệt năng cung cấp cho electron vượt vùng cấm lên vùng dẫn, làm tăng vọt mật độ hạt tải điện (electron và lỗ trống), khiến điện trở của bán dẫn giảm mạnh."
      },
      {
        "q": "Nguyên lí hoạt động của quang điện trở (LDR) dựa trên hiện tượng vật lí nào sau đây?",
        "options": [
          "Hiện tượng quang điện ngoài bật electron ra khỏi kim loại",
          "Hiện tượng quang điện trong giải phóng hạt tải điện trong chất bán dẫn",
          "Hiện tượng cảm ứng điện từ Faraday",
          "Hiện tượng phóng xạ hạt nhân"
        ],
        "answer": 1,
        "explain": "Quang điện trở hoạt động dựa trên hiệu ứng quang điện trong: ánh sáng kích thích electron hóa trị vượt vùng cấm lên vùng dẫn, giải phóng cặp electron–lỗ trống làm tăng độ dẫn điện của bán dẫn."
      }
    ]
  }
];
