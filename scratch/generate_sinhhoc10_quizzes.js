// scratch/generate_sinhhoc10_quizzes.js
const fs = require('fs');

const quizzes = {
  1: [
    {
      q: "Đối tượng nghiên cứu chính của môn Sinh học là gì?",
      options: [
        "Các sinh vật và các cấp độ tổ chức khác nhau của thế giới sống",
        "Chỉ các phản ứng hoá học vô cơ diễn ra trong lớp vỏ Trái Đất",
        "Các quy luật chuyển động cơ học của các thiên thể trong vũ trụ",
        "Chỉ riêng cấu tạo giải phẫu cơ thể con người phục vụ y khoa"
      ],
      ans: 0,
      exp: "Sinh học là ngành khoa học nghiên cứu về sự sống, đối tượng của sinh học chính là các sinh vật cùng các cấp độ tổ chức của thế giới sống."
    },
    {
      q: "Trong khoa học hình sự và pháp y, kĩ thuật phân tích trình tự DNA đặc trưng để nhận diện cá thể và xác định huyết thống được gọi là gì?",
      options: [
        "Dấu vân tay DNA",
        "Nuôi cấy mô tế bào",
        "Phỏng sinh học (Bionics)",
        "Kĩ thuật nhuộm Gram"
      ],
      ans: 0,
      exp: "Mỗi cá thể (trừ sinh đôi cùng trứng) có trình tự lặp lại đặc trưng trên DNA gọi là dấu vân tay DNA, được ứng dụng trong pháp y và xác định huyết thống."
    },
    {
      q: "Khái niệm 'Phát triển bền vững' được hiểu đúng nhất là gì?",
      options: [
        "Sự phát triển đáp ứng nhu cầu của thế hệ hiện tại mà không làm tổn hại khả năng đáp ứng nhu cầu của các thế hệ tương lai",
        "Khai thác tối đa mọi nguồn tài nguyên sinh vật hiện có để tăng trưởng kinh tế nhanh nhất",
        "Ngừng hoàn toàn mọi hoạt động sản xuất nông nghiệp và công nghiệp để giữ nguyên rừng tự nhiên",
        "Thay thế toàn bộ giống cây trồng bản địa bằng một giống cây biến đổi gene duy nhất trên toàn cầu"
      ],
      ans: 0,
      exp: "Phát triển bền vững kết hợp hài hoà giữa phát triển kinh tế – xã hội hiện tại với bảo vệ môi trường, đa dạng sinh học cho các thế hệ tương lai."
    }
  ],
  2: [
    {
      q: "Trình tự đúng của các bước trong tiến trình nghiên cứu khoa học môn Sinh học là:",
      options: [
        "Quan sát thu thập dữ liệu → Đặt câu hỏi → Hình thành giả thuyết → Đưa ra dự đoán → Thiết kế & tiến hành thực nghiệm → Phân tích kết quả & Kết luận",
        "Đặt câu hỏi → Kết luận → Hình thành giả thuyết → Quan sát → Thiết kế thí nghiệm → Phân tích dữ liệu",
        "Hình thành giả thuyết → Quan sát → Đưa ra dự đoán → Kết luận → Thiết kế thí nghiệm",
        "Thiết kế thí nghiệm → Đặt câu hỏi → Quan sát → Hình thành giả thuyết → Kết luận"
      ],
      ans: 0,
      exp: "Tiến trình nghiên cứu khoa học bắt đầu từ Quan sát thu thập dữ liệu → Đặt câu hỏi → Giả thuyết → Dự đoán → Thực nghiệm kiểm chứng → Phân tích và Kết luận."
    },
    {
      q: "Trong một thí nghiệm khảo sát ảnh hưởng của 4 mức nhiệt độ khác nhau đến tốc độ nảy mầm của hạt đậu, yếu tố 'nhiệt độ' đóng vai trò là gì?",
      options: [
        "Biến độc lập (yếu tố do người nghiên cứu chủ động thay đổi)",
        "Biến phụ thuộc (kết quả đo đạc thu được)",
        "Lô đối chứng âm",
        "Sai số ngẫu nhiên của phép đo"
      ],
      ans: 0,
      exp: "Biến độc lập là yếu tố được nhà nghiên cứu chủ động thay đổi để khảo sát tác động của nó; còn tốc độ/tỉ lệ nảy mầm là biến phụ thuộc."
    },
    {
      q: "Thiết bị nào sau đây sử dụng lực quay tốc độ cao để phân tách các bào quan và thành phần tế bào dựa trên sự khác biệt về khối lượng/kích thước?",
      options: [
        "Máy li tâm",
        "Kính hiển vi quang học",
        "Kính lúp cầm tay",
        "Tủ ấm nuôi cấy vi sinh vật"
      ],
      ans: 0,
      exp: "Máy li tâm dùng lực li tâm để tách các thành phần tế bào theo mức độ lắng khác nhau sau khi phá vỡ màng tế bào."
    }
  ],
  3: [
    {
      q: "Trình tự nào sau đây sắp xếp đúng các cấp độ tổ chức cơ bản của thế giới sống từ thấp đến cao?",
      options: [
        "Tế bào → Cơ thể → Quần thể → Quần xã – Hệ sinh thái",
        "Phân tử → Bào quan → Mô → Quần xã → Quần thể → Cơ thể",
        "Cơ thể → Tế bào → Quần thể → Hệ sinh thái → Quần xã",
        "Tế bào → Quần thể → Cơ thể → Quần xã → Sinh quyển"
      ],
      ans: 0,
      exp: "Bốn cấp độ tổ chức sống cơ bản từ thấp đến cao gồm: Tế bào → Cơ thể → Quần thể → Quần xã – Hệ sinh thái."
    },
    {
      q: "Tập hợp các cá thể cùng loài, cùng chung sống trong một khoảng không gian xác định, vào một thời điểm nhất định và có khả năng sinh sản tạo thế hệ mới được gọi là gì?",
      options: [
        "Quần thể sinh vật",
        "Quần xã sinh vật",
        "Hệ sinh thái",
        "Hệ cơ quan"
      ],
      ans: 0,
      exp: "Quần thể là tập hợp các cá thể cùng loài sống trong một sinh cảnh xác định và có khả năng giao phối/sinh sản tạo thế hệ mới."
    },
    {
      q: "Vì sao nói các cấp độ tổ chức sống được tổ chức theo nguyên tắc thứ bậc và có 'đặc tính nổi trội'?",
      options: [
        "Vì cấp tổ chức trên hình thành từ sự tương tác của các thành phần cấp dưới và xuất hiện tính chất mới mà từng thành phần riêng lẻ chưa có",
        "Vì cấp tổ chức bên trên luôn có kích thước nhỏ hơn cấp tổ chức bên dưới",
        "Vì mọi cấp độ sống đều không trao đổi vật chất và năng lượng với môi trường",
        "Vì tính chất của cấp tổ chức cao chỉ là phép cộng số học đơn giản của các phần cấp dưới"
      ],
      ans: 0,
      exp: "Đặc tính nổi trội hình thành do sự tương tác hiệp đồng giữa các bộ phận cấu thành ở cấp dưới tạo nên tính chất mới ở cấp trên."
    }
  ],
  4: [
    {
      q: "Bốn nguyên tố hoá học chủ yếu chiếm khoảng 96% khối lượng cơ thể sống là:",
      options: [
        "C, H, O, N",
        "C, H, Fe, Zn",
        "O, Ca, P, K",
        "N, P, K, Mg"
      ],
      ans: 0,
      exp: "Bốn nguyên tố C, H, O, N là thành phần cốt lõi cấu tạo nên các đại phân tử hữu cơ và nước, chiếm khoảng 96% khối lượng cơ thể sống."
    },
    {
      q: "Vì sao nguyên tố Carbon (C) được xem là nguyên tố cốt lõi tạo nên sự đa dạng của các đại phân tử hữu cơ trong tế bào?",
      options: [
        "Vì nguyên tử C có 4 electron lớp ngoài cùng, tạo được 4 liên kết cộng hoá trị bền vững với C và nguyên tố khác tạo khung mạch thẳng, nhánh hoặc vòng",
        "Vì nguyên tử C chỉ tạo được liên kết ion yếu trong môi trường nước",
        "Vì Carbon là nguyên tố vi lượng chiếm tỉ lệ dưới 0,01% khối lượng khô",
        "Vì Carbon không bao giờ liên kết với Hydrogen và Oxygen"
      ],
      ans: 0,
      exp: "Hoá trị 4 của Carbon cho phép hình thành bộ khung xương carbon đa dạng về kích thước và cấu hình không gian."
    },
    {
      q: "Tính phân cực của phân tử nước (H₂O) là do nguyên nhân nào sau đây?",
      options: [
        "Nguyên tử Oxygen có độ âm điện lớn hơn Hydrogen nên kéo cặp electron dùng chung lệch về phía Oxygen (tích điện δ⁻), phía Hydrogen tích điện δ⁺",
        "Hai nguyên tử Hydrogen truyền hoàn toàn electron cho Oxygen tạo liên kết ion",
        "Phân tử nước chỉ gồm các nguyên tử trung hoà không có sự chênh lệch độ âm điện",
        "Liên kết cộng hoá trị trong phân tử nước bị đứt gãy hoàn toàn ở nhiệt độ phòng"
      ],
      ans: 0,
      exp: "Độ âm điện cao của Oxygen làm phân tử nước phân cực (đầu O mang điện âm nhẹ δ⁻, hai đầu H mang điện dương nhẹ δ⁺), giúp tạo liên kết hydrogen."
    }
  ],
  5: [
    {
      q: "Loại đường đa (polysaccharide) nào sau đây là thành phần chính cấu tạo nên thành tế bào thực vật?",
      options: [
        "Cellulose",
        "Glycogen",
        "Tinh bột",
        "Chitin"
      ],
      ans: 0,
      exp: "Cellulose cấu tạo từ các đơn phân β-glucose tạo sợi bền chắc làm thành tế bào thực vật; tinh bột dự trữ ở thực vật; glycogen dự trữ ở động vật/nấm; chitin ở nấm/chân khớp."
    },
    {
      q: "Khi đun sôi lòng trắng trứng hoặc nhỏ acid vào sữa tươi, protein bị đông tụ và mất chức năng sinh học. Hiện tượng này gọi là gì?",
      options: [
        "Sự biến tính của protein (do đứt gãy các liên kết yếu giữ cấu hình không gian 3 chiều)",
        "Sự thuỷ phân hoàn toàn các liên kết peptide thành từng nguyên tử tự do",
        "Sự nhân đôi bán bảo toàn của chuỗi polypeptide",
        "Sự chuyển hoá protein thành phân tử DNA xoắn kép"
      ],
      ans: 0,
      exp: "Nhiệt độ cao hoặc pH khắc nghiệt phá vỡ các liên kết yếu (hydrogen, ion, kị nước) làm protein mất cấu trúc không gian 3 chiều đặc thù, gọi là biến tính."
    },
    {
      q: "Trong phân tử DNA mạch kép, các nucleotide giữa hai mạch liên kết với nhau theo nguyên tắc bổ sung nào?",
      options: [
        "A liên kết với T bằng 2 liên kết hydrogen; G liên kết với C bằng 3 liên kết hydrogen",
        "A liên kết với U bằng 3 liên kết hydrogen; G liên kết với C bằng 2 liên kết hydrogen",
        "A liên kết với G bằng 2 liên kết phosphodiester; T liên kết với C bằng 3 liên kết peptide",
        "A liên kết với C bằng 2 liên kết hydrogen; G liên kết với T bằng 3 liên kết hydrogen"
      ],
      ans: 0,
      exp: "Trong DNA xoắn kép, Adenine (A) liên kết bổ sung với Thymine (T) bằng 2 liên kết hydrogen, còn Guanine (G) liên kết với Cytosine (C) bằng 3 liên kết hydrogen."
    }
  ],
  6: [
    {
      q: "Để nhận biết sự có mặt của tinh bột trong dịch mẫu thực phẩm, người ta nhỏ thuốc thử Lugol (chứa iodine) và quan sát thấy hiện tượng gì?",
      options: [
        "Dung dịch chuyển sang màu xanh tím hoặc xanh đen đặc trưng",
        "Xuất hiện kết tủa màu đỏ gạch ở đáy ống nghiệm",
        "Dung dịch chuyển sang màu tím hồng",
        "Hình thành lớp nhũ tương trắng đục như sữa"
      ],
      ans: 0,
      exp: "Phân tử iodine trong thuốc thử Lugol chui vào lòng xoắn của chuỗi amylose trong tinh bột tạo phức hợp có màu xanh tím/xanh đen."
    },
    {
      q: "Trong thí nghiệm nhận biết đường khử (như glucose) bằng thuốc thử Benedict, điều kiện bắt buộc để xuất hiện kết tủa đỏ gạch (Cu₂O) là gì?",
      options: [
        "Phải đun nóng cách thuỷ ống nghiệm chứa hỗn hợp mẫu và thuốc thử Benedict",
        "Phải ngâm ống nghiệm trong nước đá lạnh 0°C suốt 30 phút",
        "Phải hoà tan mẫu trong cồn tuyệt đối rồi tránh ánh sáng",
        "Không được đun nóng vì nhiệt độ làm mất tính khử của glucose"
      ],
      ans: 0,
      exp: "Phản ứng khử Cu²⁺ (màu xanh lam trong thuốc thử Benedict) thành kết tủa Cu₂O màu đỏ gạch bởi đường khử cần cung cấp nhiệt qua đun cách thuỷ."
    },
    {
      q: "Phản ứng Biuret (dùng dung dịch NaOH loãng và CuSO₄ 1%) tạo màu tím đặc trưng dùng để nhận biết phân tử sinh học nào?",
      options: [
        "Protein (nhận diện các liên kết peptide)",
        "Tinh bột (nhận diện liên kết glycosidic)",
        "Dầu thực vật (nhận diện liên kết ester)",
        "Đường đơn glucose"
      ],
      ans: 0,
      exp: "Trong môi trường kiềm (NaOH), ion Cu²⁺ phản ứng với các liên kết peptide (từ 2 liên kết peptide trở lên) của protein tạo phức chất màu tím."
    }
  ],
  7: [
    {
      q: "Đặc điểm nào sau đây là đặc trưng cơ bản nhất của tế bào nhân sơ (vi khuẩn)?",
      options: [
        "Chưa có màng nhân bao bọc vật chất di truyền và không có các bào quan có màng bao bọc",
        "Có nhân hoàn chỉnh được bao bọc bởi lớp màng kép có lỗ nhân",
        "Có đầy đủ hệ thống nội màng gồm lưới nội chất, bộ máy Golgi, ti thể và lục lạp",
        "Vật chất di truyền là nhiều phân tử DNA mạch thẳng liên kết chặt với protein histone"
      ],
      ans: 0,
      exp: "Tế bào nhân sơ chưa có màng nhân (vật chất di truyền nằm ở vùng nhân), không có hệ thống nội màng và chỉ có một loại bào quan không màng là ribosome 70S."
    },
    {
      q: "Thành tế bào của đa số vi khuẩn được cấu tạo từ hợp chất hoá học đặc trưng nào giúp quy định hình dạng và bảo vệ tế bào?",
      options: [
        "Peptidoglycan",
        "Cellulose",
        "Chitin",
        "Cholesterol"
      ],
      ans: 0,
      exp: "Thành tế bào vi khuẩn cấu tạo từ peptidoglycan (khác với thành cellulose ở thực vật và thành chitin ở nấm)."
    },
    {
      q: "Vì sao thuốc kháng sinh có thể tiêu diệt vi khuẩn gây bệnh nhưng hoàn toàn không có tác dụng điều trị bệnh do virus?",
      options: [
        "Vì kháng sinh nhắm vào cấu trúc tế bào vi khuẩn (như thành peptidoglycan, ribosome 70S), còn virus không có cấu tạo tế bào",
        "Vì virus có thành tế bào bằng peptidoglycan dày gấp 10 lần vi khuẩn",
        "Vì virus có kích thước lớn hơn vi khuẩn nên thuốc kháng sinh không thấm qua được",
        "Vì mọi loại virus đều tự tổng hợp được enzyme phân huỷ kháng sinh ngoài môi trường"
      ],
      ans: 0,
      exp: "Kháng sinh tác động đặc hiệu lên đích tế bào vi khuẩn (như ức chế tổng hợp thành peptidoglycan hoặc ribosome 70S); virus chưa có cấu tạo tế bào nên kháng sinh không có đích tác dụng."
    }
  ],
  8: [
    {
      q: "Một protein tiết (như hormone insulin) sau khi được tổng hợp tại ribosome trên lưới nội chất hạt sẽ đi theo con đường nào để xuất ra khỏi tế bào?",
      options: [
        "Lưới nội chất hạt → Túi vận chuyển → Bộ máy Golgi → Túi tiết → Màng sinh chất (Xuất bào)",
        "Bộ máy Golgi → Lưới nội chất trơn → Ti thể → Nhân tế bào → Màng sinh chất",
        "Lục lạp → Không bào trung tâm → Lysosome → Lưới nội chất hạt → Màng sinh chất",
        "Nhân con → Trung thể → Khung xương tế bào → Đi xuyên trực tiếp qua lớp lipid kép"
      ],
      ans: 0,
      exp: "Protein tiết được tổng hợp tại lưới nội chất hạt (RER), đóng gói vào túi vận chuyển đưa đến bộ máy Golgi để hoàn thiện, phân loại rồi đưa vào túi tiết đi tới dung hợp với màng sinh chất."
    },
    {
      q: "Hai bào quan nào trong tế bào nhân thực có cấu trúc màng kép và chứa DNA vòng cùng ribosome 70S riêng?",
      options: [
        "Ti thể và Lục lạp",
        "Bộ máy Golgi và Lưới nội chất",
        "Lysosome và Không bào",
        "Ribosome và Trung thể"
      ],
      ans: 0,
      exp: "Cả ti thể (thực hiện hô hấp tế bào) và lục lạp (thực hiện quang hợp) đều có màng kép, chứa DNA vòng và ribosome riêng, có khả năng tự nhân đôi và tổng hợp một số protein riêng."
    },
    {
      q: "Cấu trúc nào sau đây có ở tế bào thực vật nhưng KHÔNG có ở tế bào động vật?",
      options: [
        "Thành tế bào bằng cellulose, lục lạp và không bào trung tâm lớn",
        "Màng sinh chất, tế bào chất và nhân hoàn chỉnh",
        "Ti thể, ribosome và bộ máy Golgi",
        "Lưới nội chất hạt và khung xương tế bào"
      ],
      ans: 0,
      exp: "Tế bào thực vật có thành cellulose bao ngoài màng sinh chất, có lục lạp quang hợp và không bào trung tâm lớn; tế bào động vật không có các cấu trúc này."
    }
  ],
  9: [
    {
      q: "Khi làm tiêu bản hiển vi tạm thời, vì sao cần đặt mép lamen nghiêng một góc khoảng 45° chạm giọt dịch rồi mới hạ từ từ xuống lam kính?",
      options: [
        "Để đuổi hết không khí ra ngoài, tránh tạo bọt khí che khuất mẫu vật khi quan sát",
        "Để làm tăng độ phóng đại của vật kính lên gấp 2 lần",
        "Để làm vỡ thành cellulose của tế bào biểu bì hành",
        "Để thuốc nhuộm không thấm được vào nhân tế bào"
      ],
      ans: 0,
      exp: "Hạ lamen từ từ ở góc nghiêng ~45° giúp giọt nước lan đều và đẩy không khí ra ngoài, không tạo các bọt khí tròn viền đen trong tiêu bản."
    },
    {
      q: "Quy tắc đúng khi vận hành kính hiển vi quang học để quan sát tiêu bản tế bào là gì?",
      options: [
        "Luôn quan sát ở vật kính nhỏ (10×) trước để tìm vùng mẫu rõ, sau đó mới chuyển sang vật kính lớn (40×) và chỉnh ốc vi cấp",
        "Quan sát ngay ở vật kính 100× hoặc 40× và vặn mạnh ốc thứ cấp (ốc to) để tìm mẫu nhanh",
        "Đặt tiêu bản nghiêng 90° trên bàn kính và tắt nguồn đèn chiếu sáng",
        "Dùng ngón tay chạm trực tiếp vào mặt thấu kính vật kính để lấy nét"
      ],
      ans: 0,
      exp: "Vật kính nhỏ (10×) có trường nhìn rộng giúp định vị mẫu dễ dàng và an toàn; khi chuyển sang 40× chỉ dùng ốc vi cấp để lấy nét tinh và tránh đâm vỡ tiêu bản."
    },
    {
      q: "Khi làm tiêu bản quan sát tế bào niêm mạc miệng người, vì sao bước đầu tiên người ta nhỏ một giọt dung dịch muối sinh lí (NaCl 0,9%) thay vì nước cất?",
      options: [
        "Vì NaCl 0,9% là môi trường đẳng trương giúp tế bào động vật giữ nguyên hình dạng, không bị hút nước trương vỡ",
        "Vì NaCl 0,9% làm tế bào niêm mạc miệng hình thành thêm thành cellulose",
        "Vì nước cất có màu xanh đậm làm che khuất nhân tế bào",
        "Vì NaCl 0,9% là môi trường ưu trương cực mạnh làm tế bào co nguyên sinh"
      ],
      ans: 0,
      exp: "Tế bào động vật không có thành tế bào; nếu đặt vào nước cất (nhược trương) sẽ hút nước và vỡ, nên cần dùng dung dịch đẳng trương NaCl 0,9%."
    }
  ],
  10: [
    {
      q: "Sự vận chuyển chất nào sau đây qua màng sinh chất thuộc phương thức vận chuyển chủ động (tích cực)?",
      options: [
        "Vận chuyển các ion qua bơm protein ngược chiều gradient nồng độ và tiêu tốn năng lượng ATP",
        "Sự khuếch tán của khí O₂ và CO₂ trực tiếp qua lớp kép phospholipid",
        "Sự thẩm thấu của các phân tử nước qua kênh aquaporin từ nơi thế nước cao đến nơi thế nước thấp",
        "Sự khuếch tán của glucose qua protein mang xuôi chiều gradient nồng độ không tốn ATP"
      ],
      ans: 0,
      exp: "Vận chuyển chủ động đưa chất từ nơi có nồng độ thấp sang nơi có nồng độ cao (ngược gradient nồng độ), bắt buộc cần kênh bơm protein đặc hiệu và tiêu tốn năng lượng ATP."
    },
    {
      q: "Khi ngâm tế bào hồng cầu người và tế bào biểu bì thực vật vào cùng một dung dịch nhược trương (như nước cất), hiện tượng gì sẽ xảy ra?",
      options: [
        "Tế bào hồng cầu hút nước căng phồng rồi vỡ (tan máu), còn tế bào thực vật trương nước nhưng không vỡ nhờ có thành cellulose",
        "Cả hai loại tế bào đều bị mất nước và co rúm lại",
        "Tế bào thực vật bị vỡ ngay lập tức, còn tế bào hồng cầu xảy ra co nguyên sinh",
        "Không có sự di chuyển của phân tử nước qua màng ở cả hai loại tế bào"
      ],
      ans: 0,
      exp: "Trong môi trường nhược trương, nước thẩm thấu đi vào tế bào. Hồng cầu không có thành tế bào nên căng vỡ; tế bào thực vật có thành cellulose bền chắc giữ lại nên chỉ trương nước."
    },
    {
      q: "Quá trình tế bào bạch cầu biến dạng màng sinh chất tạo chân giả bao lấy vi khuẩn đưa vào trong tế bào để tiêu huỷ được gọi là gì?",
      options: [
        "Thực bào (Phagocytosis)",
        "Xuất bào (Exocytosis)",
        "Khuếch tán đơn giản",
        "Thẩm thấu (Osmosis)"
      ],
      ans: 0,
      exp: "Thực bào là hình thức nhập bào trong đó màng sinh chất lõm vào bao bọc lấy các hạt rắn lớn hoặc tế bào vi khuẩn tạo túi thực bào."
    }
  ],
  11: [
    {
      q: "Trong thí nghiệm co và phản co nguyên sinh, vì sao lá thài lài tía thường được chọn làm mẫu vật chuẩn?",
      options: [
        "Vì tế bào biểu bì mặt dưới có không bào lớn chứa sắc tố tím hồng tự nhiên giúp dễ dàng quan sát sự co và giãn của khối nguyên sinh mà không cần nhuộm",
        "Vì tế bào lá thài lài tía không có thành tế bào bằng cellulose",
        "Vì lá thài lài tía không có khí khổng ở cả hai mặt lá",
        "Vì màng sinh chất của lá thài lài tía không cho phân tử nước đi qua"
      ],
      ans: 0,
      exp: "Sắc tố anthocyanin màu tím trong không bào giúp phân biệt rõ ranh giới khối nguyên sinh khi tách khỏi thành tế bào (co nguyên sinh) hoặc khi nở ra (phản co nguyên sinh)."
    },
    {
      q: "Khi nhỏ dung dịch NaCl ưu trương vào tiêu bản biểu bì lá thài lài tía, trạng thái của tế bào và khí khổng thay đổi như thế nào?",
      options: [
        "Nước thoát ra ngoài làm khối chất nguyên sinh co lại tách khỏi thành tế bào (co nguyên sinh) và khí khổng đóng lại",
        "Nước đi vào làm tế bào trương phồng cực đại và khí khổng mở rộng hết cỡ",
        "Thành tế bào bằng cellulose tan biến hoàn toàn trong dung dịch muối",
        "Khối nguyên sinh giữ nguyên kích thước nhưng đổi từ màu tím sang màu xanh lam"
      ],
      ans: 0,
      exp: "Dung dịch NaCl ưu trương hút nước ra khỏi tế bào gây co nguyên sinh; tế bào hạt đậu mất nước giảm sức trương làm lỗ khí khổng đóng lại."
    },
    {
      q: "Trong trường hợp nào tế bào thực vật đã co nguyên sinh sẽ KHÔNG THỂ thực hiện phản co nguyên sinh khi nhỏ nước cất trở lại?",
      options: [
        "Khi nồng độ muối quá cao hoặc thời gian co nguyên sinh kéo dài quá lâu làm tế bào mất nước chết, màng mất khả năng thấm chọn lọc",
        "Khi nhỏ nước cất ở nhiệt độ phòng 25°C",
        "Khi quan sát tiêu bản dưới vật kính 10× thay vì 40×",
        "Khi dùng giấy thấm rút dịch ở mép đối diện của lamen"
      ],
      ans: 0,
      exp: "Khi co nguyên sinh quá mức kéo dài, tế bào bị tổn thương không hồi phục và chết, màng sinh chất mất tính bán thấm nên không còn khả năng thẩm thấu phản co nguyên sinh."
    }
  ],
  12: [
    {
      q: "Ba giai đoạn kế tiếp nhau của một quá trình truyền tin tế bào điển hình là:",
      options: [
        "Tiếp nhận tín hiệu → Truyền tín hiệu (chuyển đổi/khuếch đại) → Đáp ứng",
        "Đáp ứng → Truyền tín hiệu → Tiếp nhận tín hiệu",
        "Khuếch tán → Thẩm thấu → Thực bào",
        "Nhân đôi DNA → Phiên mã → Dịch mã"
      ],
      ans: 0,
      exp: "Truyền tin tế bào luôn diễn ra theo 3 giai đoạn: Tiếp nhận (tín hiệu gắn thụ thể) → Truyền tín hiệu (chuỗi tương tác phân tử nội bào) → Đáp ứng sinh lí."
    },
    {
      q: "Loại phân tử tín hiệu nào sau đây có thể đi xuyên trực tiếp qua lớp kép phospholipid của màng sinh chất để gắn với thụ thể nội bào?",
      options: [
        "Các hormone bản chất steroid kị nước (như testosterone, estrogen, cortisol)",
        "Các phân tử protein kích thước rất lớn và phân cực mạnh (như insulin)",
        "Các ion tích điện tự do như Na⁺, K⁺",
        "Các phân tử đường đa như tinh bột và glycogen"
      ],
      ans: 0,
      exp: "Hormone steroid có bản chất lipid (nhỏ, kị nước) nên dễ dàng khuếch tán qua lớp kép phospholipid của màng để gắn vào thụ thể nằm trong bào tương hoặc trong nhân."
    },
    {
      q: "Vì sao cùng một loại hormone (ví dụ adrenaline) khi đi theo máu đến các mô khác nhau lại gây ra các đáp ứng hoàn toàn khác nhau ở tế bào gan và tế bào cơ tim?",
      options: [
        "Vì các loại tế bào khác nhau có bộ thụ thể, chuỗi protein truyền tin nội bào và các protein thực hiện đáp ứng khác nhau",
        "Vì phân tử hormone tự biến đổi công thức hoá học khi đi qua mỗi mạch máu",
        "Vì tế bào cơ tim không có màng sinh chất còn tế bào gan có thành cellulose",
        "Vì hormone chỉ gắn vào màng tế bào bằng liên kết cộng hoá trị không thuận nghịch"
      ],
      ans: 0,
      exp: "Đáp ứng đặc hiệu của mỗi loại tế bào phụ thuộc vào bộ protein thụ thể, các phân tử truyền tin trung gian và các gene/enzyme đích hoạt động trong tế bào đó."
    }
  ],
  13: [
    {
      q: "Phân tử ATP (Adenosine triphosphate) truyền năng lượng cho các hoạt động sống của tế bào chủ yếu bằng cơ chế nào?",
      options: [
        "Thuỷ phân liên kết cao năng để tách nhóm phosphate ngoài cùng tạo ADP và chuyển nhóm phosphate cho phân tử cần năng lượng",
        "Phá vỡ hoàn toàn vòng đường ribose và base adenine thành khí CO₂",
        "Tích trữ năng lượng vĩnh viễn trong mô mỡ dưới da mà không bao giờ bị phân giải",
        "Tăng nhiệt độ của tế bào lên trên 100°C để kích hoạt phản ứng"
      ],
      ans: 0,
      exp: "ATP giải phóng năng lượng qua phản ứng thuỷ phân liên kết phosphate cao năng cuối cùng: ATP + H₂O → ADP + Pi + Năng lượng, đồng thời tái tổng hợp liên tục từ ADP."
    },
    {
      q: "Vai trò cơ bản của enzyme trong các phản ứng sinh hoá của tế bào là gì?",
      options: [
        "Làm giảm năng lượng hoạt hoá của phản ứng, giúp phản ứng diễn ra nhanh chóng ở nhiệt độ và pH sinh lí cơ thể",
        "Cung cấp thêm nhiệt lượng để đun nóng các chất tham gia phản ứng",
        "Làm tăng năng lượng hoạt hoá để ngăn cản mọi phản ứng trao đổi chất",
        "Trực tiếp biến đổi thành sản phẩm cuối cùng và bị tiêu hao hoàn toàn sau phản ứng"
      ],
      ans: 0,
      exp: "Enzyme là chất xúc tác sinh học làm giảm rào cản năng lượng hoạt hoá (Ea), giúp tốc độ phản ứng tăng hàng triệu lần mà enzyme vẫn được bảo toàn sau phản ứng."
    },
    {
      q: "Cơ chế 'ức chế ngược' (feedback inhibition) trong điều hoà chuyển hoá vật chất của tế bào diễn ra như thế nào?",
      options: [
        "Sản phẩm cuối cùng của chuỗi phản ứng khi tạo ra dư thừa sẽ quay lại ức chế enzyme xúc tác cho phản ứng đầu tiên của chuỗi đó",
        "Chất đầu tiên của chuỗi phản ứng phá huỷ toàn bộ ribosome của tế bào",
        "Enzyme ở cuối chuỗi phản ứng tự nhân đôi DNA để tăng tốc độ tạo sản phẩm vô hạn",
        "Năng lượng ATP quay lại làm biến tính màng sinh chất của tế bào"
      ],
      ans: 0,
      exp: "Ức chế ngược giúp tế bào tự động ngừng sản xuất khi sản phẩm đã đủ, tránh lãng phí nguyên liệu và năng lượng."
    }
  ],
  14: [
    {
      q: "Trong quá trình hô hấp tế bào hiếu khí ở tế bào nhân thực, giai đoạn nào tạo ra nhiều phân tử ATP nhất và diễn ra ở đâu?",
      options: [
        "Chuỗi truyền electron và phosphoryl hoá oxy hoá (tạo 26–28 ATP), diễn ra tại màng trong ti thể",
        "Đường phân (tạo 2 ATP), diễn ra tại tế bào chất (bào tương)",
        "Chu trình Krebs (tạo 2 ATP), diễn ra tại chất nền ti thể",
        "Quá trình lên men lactate (tạo 2 ATP), diễn ra tại nhân tế bào"
      ],
      ans: 0,
      exp: "Chuỗi truyền electron hô hấp nằm trên màng trong ti thể (mào cristae) sử dụng NADH và FADH₂ để bơm H⁺ tạo khoảng 26–28 ATP trên tổng số 30–32 ATP."
    },
    {
      q: "Trong quá trình quang hợp ở thực vật, khí Oxygen (O₂) thoát ra có nguồn gốc từ phân tử nào và được tạo ra ở giai đoạn nào?",
      options: [
        "Có nguồn gốc từ phân tử nước (H₂O) thông qua quá trình quang phân li nước ở pha sáng (tại màng thylakoid)",
        "Có nguồn gốc từ phân tử CO₂ trong chu trình Calvin ở chất nền stroma",
        "Có nguồn gốc từ sự phân giải glucose ở ti thể trong bóng tối",
        "Có nguồn gốc từ diệp lục bị đốt cháy bởi tia tử ngoại"
      ],
      ans: 0,
      exp: "Ở pha sáng tại màng thylakoid, quang phân li nước (2H₂O → 4H⁺ + 4e⁻ + O₂↑) giải phóng khí O₂ có nguồn gốc hoàn toàn từ nước."
    },
    {
      q: "Hai sản phẩm quan trọng do Pha sáng tổng hợp để cung cấp trực tiếp cho Chu trình Calvin (Pha tối) cố định CO₂ thành glucose là gì?",
      options: [
        "ATP và NADPH",
        "ADP và NADP⁺",
        "Khí O₂ và tinh bột",
        "Pyruvate và NADH"
      ],
      ans: 0,
      exp: "Pha sáng chuyển quang năng thành hoá năng tích luỹ trong ATP và NADPH, sau đó chuyển vào chất nền stroma để chu trình Calvin khử CO₂ thành C₆H₁₂O₆."
    }
  ],
  15: [
    {
      q: "Trong thí nghiệm kiểm tra hoạt tính của enzyme amylase thuỷ phân tinh bột, nếu nhỏ dung dịch Lugol (iodine) vào ống nghiệm mà dung dịch KHÔNG xuất hiện màu xanh tím thì kết luận nào sau đây đúng?",
      options: [
        "Tinh bột trong ống nghiệm đã bị enzyme amylase phân giải hết thành đường",
        "Enzyme amylase trong ống nghiệm đã bị biến tính hoàn toàn không hoạt động",
        "Hồ tinh bột đã tự biến đổi thành cellulose bền vững",
        "Thuốc thử Lugol đã làm đông tụ hoàn toàn phân tử nước"
      ],
      ans: 0,
      exp: "Iodine chỉ tạo màu xanh tím với tinh bột; khi không còn màu xanh tím chứng tỏ amylase hoạt động tốt và đã thuỷ phân hết tinh bột thành đường maltose."
    },
    {
      q: "Khi nhỏ dung dịch H₂O₂ (hydrogen peroxide) vào lát khoai tây sống ở nhiệt độ phòng thì sủi bọt khí O₂ rất mạnh, nhưng nhỏ vào lát khoai tây đã luộc chín kỹ thì không có bọt khí. Nguyên nhân là vì:",
      options: [
        "Nhiệt độ cao khi luộc chín đã làm enzyme catalase trong khoai tây bị biến tính và mất hoàn toàn hoạt tính xúc tác",
        "Khi luộc chín khoai tây đã hấp thụ hết toàn bộ khí O₂ vào trong tinh bột",
        "H₂O₂ chỉ phản ứng với tinh bột đã nấu chín mà không phản ứng với enzyme",
        "Nhiệt độ cao làm tăng tốc độ phản ứng nhanh đến mức không nhìn thấy bọt khí"
      ],
      ans: 0,
      exp: "Enzyme catalase có bản chất là protein; khi luộc sôi ở 100°C, cấu trúc không gian 3 chiều của catalase bị phá vỡ (biến tính) nên không còn phân giải được H₂O₂."
    },
    {
      q: "Trong thí nghiệm khảo sát ảnh hưởng của nhiệt độ đến hoạt tính enzyme, ống nghiệm chỉ chứa cơ chất tinh bột và nước cất (không có enzyme) được dùng làm gì?",
      options: [
        "Làm lô đối chứng để so sánh và khẳng định sự phân giải tinh bột ở các ống khác là do tác dụng của enzyme",
        "Làm tăng nhiệt độ của các ống nghiệm xung quanh",
        "Làm nguồn cung cấp thêm enzyme amylase dự phòng",
        "Để đo độ pH của thuốc thử Lugol"
      ],
      ans: 0,
      exp: "Ống đối chứng âm (không có enzyme) giữ nguyên màu xanh tím khi nhỏ Lugol, chứng minh tinh bột không tự thuỷ phân trong thời gian thí nghiệm nếu thiếu enzyme."
    }
  ],
  16: [
    {
      q: "Trong chu kì tế bào nhân thực, sự nhân đôi của phân tử DNA và nhiễm sắc thể (từ NST đơn thành NST kép) diễn ra ở giai đoạn nào?",
      options: [
        "Pha S của kì trung gian",
        "Pha G₁ của kì trung gian",
        "Kì đầu của nguyên phân",
        "Kì giữa của nguyên phân"
      ],
      ans: 0,
      exp: "Kì trung gian gồm 3 pha: G₁ (sinh trưởng), pha S (Synthesis – nhân đôi DNA và NST tạo NST kép gồm 2 chromatid chị em), và pha G₂ (chuẩn bị phân bào)."
    },
    {
      q: "Trong quá trình nguyên phân, các nhiễm sắc thể kép đóng xoắn cực đại và xếp thành 1 hàng trên mặt phẳng xích đạo của thoi phân bào ở kì nào?",
      options: [
        "Kì giữa (Metaphase)",
        "Kì đầu (Prophase)",
        "Kì sau (Anaphase)",
        "Kì cuối (Telophase)"
      ],
      ans: 0,
      exp: "Ở kì giữa nguyên phân, các NST kép co xoắn cực đại (hình thái rõ nhất) và tập trung thành 1 hàng trên mặt phẳng xích đạo."
    },
    {
      q: "Nguyên nhân cốt lõi ở cấp độ tế bào dẫn đến sự hình thành các khối u ác tính (bệnh ung thư) là gì?",
      options: [
        "Tế bào bị đột biến các gene điều hoà chu kì tế bào, vượt qua các điểm kiểm soát và phân chia nguyên phân liên tục mất kiểm soát",
        "Tế bào ngừng hoàn toàn quá trình nguyên phân và bước vào pha nghỉ G₀ vĩnh viễn",
        "Tế bào sinh dưỡng thực hiện giảm phân tạo ra các giao tử đơn bội",
        "Tế bào thực hiện quá trình co nguyên sinh trong môi trường ưu trương"
      ],
      ans: 0,
      exp: "Khi hệ thống kiểm soát chu kì tế bào bị hỏng do đột biến (gene tiền ung thư, gene ức chế khối u), tế bào phân chia mất kiểm soát tạo khối u và có thể di căn."
    }
  ],
  17: [
    {
      q: "Hiện tượng các nhiễm sắc thể kép trong cặp tương đồng tiếp hợp và có thể trao đổi chéo các đoạn chromatid (gây hoán vị gene) diễn ra ở kì nào của giảm phân?",
      options: [
        "Kì đầu I (Prophase I)",
        "Kì giữa I (Metaphase I)",
        "Kì sau I (Anaphase I)",
        "Kì đầu II (Prophase II)"
      ],
      ans: 0,
      exp: "Tại Kì đầu I của giảm phân, các cặp NST tương đồng kép bắt đôi tiếp hợp theo chiều dọc và có thể xảy ra trao đổi chéo giữa hai chromatid không chị em."
    },
    {
      q: "Điểm khác biệt cơ bản nhất về cách sắp xếp NST trên mặt phẳng xích đạo giữa Kì giữa I của giảm phân và Kì giữa của nguyên phân là gì?",
      options: [
        "Ở Kì giữa I giảm phân, các cặp NST tương đồng kép xếp thành 2 hàng; còn ở Kì giữa nguyên phân, các NST kép xếp thành 1 hàng",
        "Ở Kì giữa I giảm phân NST xếp 1 hàng; còn ở Kì giữa nguyên phân NST xếp 2 hàng",
        "Ở Kì giữa I giảm phân các chromatid chị em đã tách rời nhau hoàn toàn",
        "Ở Kì giữa I giảm phân không có thoi phân bào xuất hiện"
      ],
      ans: 0,
      exp: "Kì giữa I giảm phân các cặp NST tương đồng kép xếp thành 2 hàng song song (dẫn đến phân li giảm nhiễm 2n → n kép); còn Kì giữa nguyên phân và Kì giữa II xếp 1 hàng."
    },
    {
      q: "Từ một tế bào sinh dục chín có bộ NST lưỡng bội 2n = 46 (ở người), sau khi kết thúc giảm phân bình thường sẽ tạo ra các tế bào con có số lượng NST là:",
      options: [
        "4 tế bào con, mỗi tế bào có bộ NST đơn bội n = 23 NST đơn",
        "2 tế bào con, mỗi tế bào có bộ NST lưỡng bội 2n = 46 NST đơn",
        "4 tế bào con, mỗi tế bào có bộ NST lưỡng bội 2n = 46 NST kép",
        "8 tế bào con, mỗi tế bào có bộ NST n = 12 NST đơn"
      ],
      ans: 0,
      exp: "Giảm phân gồm 1 lần nhân đôi DNA và 2 lần phân bào liên tiếp, tạo ra 4 tế bào con có số lượng NST giảm đi một nửa (n = 23 NST đơn)."
    }
  ],
  18: [
    {
      q: "Trong bài thực hành làm tiêu bản nguyên phân, vì sao người ta chỉ cắt lấy phần chóp đỉnh rễ hành dài khoảng 1,5 – 2 mm?",
      options: [
        "Vì vùng đỉnh rễ chứa mô phân sinh ngọn có các tế bào đang phân chia nguyên phân mạnh mẽ nhất",
        "Vì phần chóp rễ chỉ chứa các tế bào mạch gỗ đã chết và hoá gỗ cứng",
        "Vì vùng chóp rễ đang diễn ra quá trình giảm phân tạo hạt phấn",
        "Vì phần chóp rễ không có thành tế bào cellulose"
      ],
      ans: 0,
      exp: "Mô phân sinh đỉnh rễ nằm ngay sát chóp rễ là nơi các tế bào thực hiện chu kì nguyên phân liên tục giúp rễ dài ra."
    },
    {
      q: "Trong quy trình làm tiêu bản nhiễm sắc thể ở rễ hành, việc nhuộm bằng dung dịch Acetocarmine 2% kết hợp hơ nóng nhẹ (không đun sôi) có tác dụng gì?",
      options: [
        "Làm mềm thành tế bào/lamella giữa các tế bào để dễ dầm ép và giúp nhiễm sắc thể bắt màu đỏ tím đậm rõ nét",
        "Kích thích các tế bào đã cố định tiếp tục nhân đôi DNA nhanh gấp 10 lần",
        "Làm tan biến hoàn toàn toàn bộ nhiễm sắc thể trong nhân tế bào",
        "Biến đổi tế bào rễ hành thành tế bào động vật"
      ],
      ans: 0,
      exp: "Acid acetic và nhiệt ấm làm thuỷ phân nhẹ bản giữa (pectin) gắn kết các tế bào giúp dàn mỏng 1 lớp khi dầm ép, đồng thời carmine nhuộm chọn lọc NST."
    },
    {
      q: "Khi thực hiện thao tác dầm ép tiêu bản rễ hành trên lam kính, thao tác nào sau đây là ĐÚNG kĩ thuật?",
      options: [
        "Đặt giấy thấm lên lamen và dùng ngón tay/cán kim ấn thẳng góc nhẹ nhàng, không làm trượt ngang lamen",
        "Dùng đầu kim mũi mác gõ mạnh làm vỡ vụn lamen thành nhiều mảnh nhỏ",
        "Miết và đẩy trượt lamen qua lại nhiều lần trên mặt lam kính",
        "Đun sôi trực tiếp lam kính đã đậy lamen trên ngọn lửa đèn cồn"
      ],
      ans: 0,
      exp: "Ấn thẳng góc giúp các tế bào tách rời và dàn phẳng trên một mặt phẳng tiêu cự mà không làm rách hoặc chồng chéo tế bào."
    }
  ],
  19: [
    {
      q: "Cơ sở khoa học cốt lõi của công nghệ nuôi cấy mô và tế bào thực vật (vi nhân giống) là gì?",
      options: [
        "Tính toàn năng của tế bào thực vật (khả năng một tế bào chứa hệ gene đầy đủ phát triển thành cây hoàn chỉnh thông qua phản biệt hoá và tái biệt hoá)",
        "Sự giảm phân tạo giao tử đực và giao tử cái rồi thụ tinh trong ống nghiệm",
        "Sự tiêu diệt hoàn toàn bộ nhiễm sắc thể trong nhân của tế bào thực vật",
        "Khả năng tự di chuyển bằng roi của tế bào mô giậu"
      ],
      ans: 0,
      exp: "Nhờ tính toàn năng, tế bào thực vật nuôi cấy in vitro có thể phản biệt hoá thành mô sẹo (callus) và dưới tác động của hormone (Auxin/Cytokinin) tái biệt hoá thành cây hoàn chỉnh."
    },
    {
      q: "Kĩ thuật nào trong công nghệ tế bào thực vật cho phép tạo ra các dòng cây lưỡng bội thuần chủng (đồng hợp tử về tất cả các cặp gene) chỉ trong một thế hệ?",
      options: [
        "Nuôi cấy hạt phấn (hoặc noãn chưa thụ tinh) tạo mô đơn bội (n) rồi gây lưỡng bội hoá (2n) bằng colchicine",
        "Giâm cành hoặc chiết cành ngoài đồng ruộng",
        "Nuôi cấy mô phân sinh đỉnh chồi thông thường",
        "Lai hữu tính khác thứ qua nhiều thế hệ tự thụ phấn"
      ],
      ans: 0,
      exp: "Hạt phấn có bộ NST đơn bội (n); khi nuôi cấy và gây lưỡng bội hoá thành 2n sẽ thu được cơ thể đồng hợp tử tuyệt đối ở mọi locus gene."
    },
    {
      q: "Trong quy trình nhân bản vô tính cừu Dolly, nếu lấy nhân tế bào tuyến vú của cừu mặt trắng (A) chuyển vào tế bào trứng đã bỏ nhân của cừu mặt đen (B) rồi cấy phôi vào cừu mẹ mang thai hộ (C), thì cừu con sinh ra có đặc điểm di truyền trong nhân giống cá thể nào?",
      options: [
        "Giống cừu mặt trắng (A) – cá thể cho nhân tế bào sinh dưỡng (2n)",
        "Giống cừu mặt đen (B) – cá thể cho tế bào trứng đã bỏ nhân",
        "Giống cừu mang thai hộ (C)",
        "Là con lai mang một nửa bộ NST của B và một nửa bộ NST của C"
      ],
      ans: 0,
      exp: "Toàn bộ hệ gene trong nhân (2n) của cừu Dolly bắt nguồn từ nhân tế bào tuyến vú của cừu mặt trắng (A), nên các tính trạng do gene trong nhân quy định giống cừu A."
    }
  ],
  20: [
    {
      q: "Đặc điểm nào sau đây giải thích vì sao vi sinh vật có tốc độ hấp thụ và chuyển hoá vật chất, sinh trưởng và sinh sản cực kì nhanh?",
      options: [
        "Vì vi sinh vật có kích thước cơ thể rất nhỏ nên tỉ lệ diện tích bề mặt trên thể tích (S/V) rất lớn",
        "Vì tất cả các loài vi sinh vật đều là cơ thể đa bào bậc cao có hệ tuần hoàn phức tạp",
        "Vì vi sinh vật không cần hấp thụ chất dinh dưỡng từ môi trường bên ngoài",
        "Vì vi sinh vật chỉ sống được ở nhiệt độ trên 100°C"
      ],
      ans: 0,
      exp: "Kích thước càng nhỏ thì tỉ lệ S/V càng lớn, giúp tốc độ trao đổi chất qua bề mặt màng diễn ra cực nhanh, kéo theo sinh trưởng và phân chia rất nhanh."
    },
    {
      q: "Trong nghiên cứu vi sinh vật, mục đích chính của phương pháp 'phân lập' (như cấy ria trên môi trường thạch đặc) là gì?",
      options: [
        "Tách riêng từng tế bào vi sinh vật để phát triển thành khuẩn lạc đơn, từ đó thu được chủng vi sinh vật thuần khiết không lẫn tạp",
        "Làm tăng kích thước của một tế bào vi khuẩn lên bằng kích thước hạt đậu",
        "Biến đổi vi khuẩn nhân sơ thành nấm mốc nhân thực",
        "Tiêu diệt toàn bộ các vi sinh vật có trong đĩa Petri"
      ],
      ans: 0,
      exp: "Phân lập nhằm tách các loài vi sinh vật khác nhau ra khỏi quần xã hỗn hợp ban đầu để thu được giống thuần khiết từ các khuẩn lạc đơn lẻ."
    },
    {
      q: "Nhóm sinh vật nào sau đây KHÔNG thuộc nhóm vi sinh vật có cấu tạo tế bào?",
      options: [
        "Virus (thực thể chưa có cấu tạo tế bào, kí sinh nội bào bắt buộc)",
        "Vi khuẩn và Cổ khuẩn (vi sinh vật nhân sơ)",
        "Nấm men và Nấm mốc (vi nấm nhân thực)",
        "Vi tảo và Động vật nguyên sinh"
      ],
      ans: 0,
      exp: "Vi sinh vật bao gồm các nhóm nhân sơ (vi khuẩn, cổ khuẩn) và nhân thực (vi nấm, vi tảo, động vật nguyên sinh); còn virus chưa có cấu tạo tế bào."
    }
  ],
  21: [
    {
      q: "Các loài vi sinh vật sử dụng nguồn năng lượng là ánh sáng mặt trời và nguồn carbon chủ yếu là khí CO₂ (như vi khuẩn lam, vi tảo) thuộc kiểu dinh dưỡng nào?",
      options: [
        "Quang tự dưỡng",
        "Quang dị dưỡng",
        "Hoá tự dưỡng",
        "Hoá dị dưỡng"
      ],
      ans: 0,
      exp: "Năng lượng ánh sáng → Quang dưỡng; Nguồn carbon từ CO₂ → Tự dưỡng. Kết hợp lại là kiểu dinh dưỡng Quang tự dưỡng."
    },
    {
      q: "Trong môi trường nuôi cấy không liên tục, ở pha nào thì số lượng tế bào vi khuẩn trong quần thể đạt mức cực đại và không đổi theo thời gian (số tế bào sinh ra bằng số tế bào chết đi)?",
      options: [
        "Pha cân bằng (Stationary phase)",
        "Pha tiềm phát (Lag phase)",
        "Pha luỹ thừa (Log phase)",
        "Pha suy vong (Death phase)"
      ],
      ans: 0,
      exp: "Ở pha cân bằng, tốc độ sinh trưởng giảm dần do dinh dưỡng vơi đi và số tế bào mới sinh ra tương đương số tế bào chết đi, nên tổng số tế bào sống đạt cực đại và ổn định."
    },
    {
      q: "Một quần thể vi khuẩn E. coli có thời gian thế hệ là g = 20 phút. Nếu ban đầu có N₀ = 100 tế bào, sau thời gian t = 2 giờ (120 phút) ở pha luỹ thừa thì số lượng tế bào trong quần thể là bao nhiêu?",
      options: [
        "6 400 tế bào",
        "600 tế bào",
        "1 200 tế bào",
        "3 200 tế bào"
      ],
      ans: 0,
      exp: "Số lần phân chia n = t / g = 120 / 20 = 6 lần. Số tế bào thu được: N_t = N₀ × 2ⁿ = 100 × 2⁶ = 100 × 64 = 6 400 tế bào."
    }
  ],
  22: [
    {
      q: "Trong tự nhiên, nhóm vi sinh vật đóng vai trò gì giúp khép kín các chu trình tuần hoàn vật chất sinh địa hoá?",
      options: [
        "Phân giải xác sinh vật và chất thải hữu cơ thành các chất vô cơ khoáng trả lại cho môi trường đất và nước",
        "Chỉ tiêu thụ khí O₂ và làm cạn kiệt toàn bộ chất khoáng của đất",
        "Ngăn chặn thực vật hấp thụ muối khoáng và nước",
        "Biến đổi mọi chất vô cơ thành nhựa tổng hợp không phân huỷ"
      ],
      ans: 0,
      exp: "Vi sinh vật phân giải tiết enzyme ngoại bào chuyển hoá chất hữu cơ phức tạp trong xác sinh vật thành CO₂, nước và muối khoáng vô cơ cho thực vật tái sử dụng."
    },
    {
      q: "Ứng dụng nào sau đây dựa trên hoạt động của vi sinh vật trong lĩnh vực nông nghiệp bền vững?",
      options: [
        "Sản xuất phân bón vi sinh cố định đạm (Rhizobium), phân vi sinh phân giải lân và thuốc trừ sâu sinh học Bt",
        "Sử dụng lạm dụng thuốc kháng sinh liều cao trộn vào thức ăn chăn nuôi hàng ngày",
        "Phun thuốc diệt cỏ hoá học nồng độ cao để diệt sạch vi sinh vật đất",
        "Đốt toàn bộ rơm rạ ngoài đồng ruộng để tiêu diệt giun đất"
      ],
      ans: 0,
      exp: "Phân bón vi sinh và thuốc trừ sâu sinh học (như Bacillus thuringiensis – Bt) giúp cải tạo đất, bảo vệ cây trồng an toàn và giảm ô nhiễm hoá chất."
    },
    {
      q: "Vì sao việc tự ý mua thuốc kháng sinh hoặc ngừng uống kháng sinh giữa chừng khi vừa giảm triệu chứng lại vô cùng nguy hiểm?",
      options: [
        "Vì tạo điều kiện chọn lọc và nhân nhanh các chủng vi khuẩn kháng kháng sinh, khiến bệnh tái phát nặng và thuốc mất tác dụng",
        "Vì thuốc kháng sinh sẽ biến đổi thành virus gây bệnh mới",
        "Vì kháng sinh làm tế bào người hình thành thành peptidoglycan",
        "Vì kháng sinh chỉ có tác dụng khi uống kèm với nước ngọt có gas"
      ],
      ans: 0,
      exp: "Dùng kháng sinh sai chỉ định hoặc không đủ liều không tiêu diệt hết vi khuẩn mà giữ lại những cá thể đột biến kháng thuốc, dẫn tới hiện tượng kháng kháng sinh."
    }
  ],
  23: [
    {
      q: "Trong quy trình làm sữa chua tại nhà, vì sao sữa tươi chuyển từ trạng thái lỏng sang trạng thái đông tụ sánh mịn và có vị chua dịu?",
      options: [
        "Do vi khuẩn lactic lên men đường lactose thành lactic acid làm giảm độ pH xuống ~4,5 khiến protein casein trong sữa kết tủa đông tụ",
        "Do nấm men rượu phân giải protein sữa thành khí CO₂ và cồn ethanol",
        "Do nhiệt độ tủ lạnh làm đóng băng các phân tử chất béo trong sữa",
        "Do vi khuẩn hiếu khí oxy hoá hoàn toàn sữa thành nước cất"
      ],
      ans: 0,
      exp: "Vi khuẩn lactic chuyển hoá đường trong sữa thành lactic acid làm hạ pH; ở môi trường acid này, protein casein bị biến tính và kết tủa tạo cấu trúc đặc mịn của sữa chua."
    },
    {
      q: "Vì sao khi pha sữa để cấy sữa chua cái (giống khởi động), cần để nhiệt độ sữa ấm khoảng 40 – 45°C chứ không đổ men cái vào lúc sữa đang sôi 100°C?",
      options: [
        "Vì nhiệt độ 40–45°C là nhiệt độ tối ưu cho vi khuẩn lactic phát triển, còn nước sôi 100°C sẽ giết chết vi khuẩn trong men cái",
        "Vì ở 100°C đường lactose biến thành tinh bột",
        "Vì vi khuẩn lactic chỉ sống được ở nhiệt độ âm dưới 0°C",
        "Vì nhiệt độ 40–45°C làm bay hơi hết toàn bộ protein của sữa"
      ],
      ans: 0,
      exp: "Vi khuẩn lactic là vi sinh vật ưa ấm (tối ưu ở 40–45°C); nếu gặp nhiệt độ quá cao (>60–100°C), protein và enzyme của vi khuẩn bị biến tính làm chết giống."
    },
    {
      q: "Khi muối chua rau cải (dưa muối), vì sao người ta thường thêm một chút đường và nén chặt rau ngập hoàn toàn dưới mặt nước muối?",
      options: [
        "Thêm đường để cung cấp thức ăn ban đầu cho vi khuẩn lactic tăng sinh nhanh hạ pH; nén ngập nước để tạo môi trường kị khí cho lên men lactic",
        "Nén ngập nước để cung cấp thật nhiều khí O₂ cho vi khuẩn gây thối phát triển",
        "Thêm đường để làm co nguyên sinh hoàn toàn vi khuẩn lactic",
        "Để ngăn không cho bất kì quá trình lên men nào xảy ra trong bình"
      ],
      ans: 0,
      exp: "Lên men lactic là quá trình kị khí nên cần nén ngập rau dưới dịch muối; một ít đường giúp vi khuẩn lactic phát triển ưu thế ngay từ đầu, nhanh chóng hạ pH ức chế vi khuẩn gây thối."
    }
  ],
  24: [
    {
      q: "Hai thành phần cấu tạo cơ bản bắt buộc có ở tất cả các hạt virus (virion) là gì?",
      options: [
        "Lõi nucleic acid (DNA hoặc RNA) và vỏ protein (Capsid)",
        "Màng sinh chất, tế bào chất và vùng nhân",
        "Ribosome 70S và thành tế bào peptidoglycan",
        "Màng bọc lipid kép và hệ thống ti thể sinh năng lượng"
      ],
      ans: 0,
      exp: "Mọi virus đều cấu tạo từ lõi nucleic acid (chỉ DNA hoặc RNA) và vỏ protein capsid (hợp thành nucleocapsid); màng bọc ngoài (envelope) chỉ có ở một số loại virus."
    },
    {
      q: "Vì sao mỗi loại virus thường chỉ có thể lây nhiễm và kí sinh trên một hoặc một số loài vật chủ và loại tế bào nhất định (tính đặc hiệu)?",
      options: [
        "Vì ở giai đoạn hấp phụ, gai glycoprotein (hoặc sợi lông đuôi) của virus phải gắn đặc hiệu với thụ thể bề mặt tương thích của tế bào chủ",
        "Vì virus có mắt cảm광 để tự chọn tế bào có kích thước lớn nhất",
        "Vì vỏ capsid của virus chỉ tan được trong máu của một loài duy nhất",
        "Vì virus tự di chuyển bằng roi đi tìm tế bào có nhiều lục lạp"
      ],
      ans: 0,
      exp: "Sự tiếp nhận giữa phân tử bề mặt virus (gai glycoprotein/đầu sợi đuôi) với thụ thể trên màng tế bào vật chủ tuân theo cơ chế đặc hiệu 'chìa khoá – ổ khoá'."
    },
    {
      q: "Trình tự đúng của 5 giai đoạn trong chu trình nhân lên của virus trong tế bào chủ là:",
      options: [
        "Hấp phụ → Xâm nhập → Sinh tổng hợp → Lắp ráp → Giải phóng",
        "Xâm nhập → Hấp phụ → Lắp ráp → Sinh tổng hợp → Giải phóng",
        "Hấp phụ → Sinh tổng hợp → Xâm nhập → Giải phóng → Lắp ráp",
        "Lắp ráp → Hấp phụ → Xâm nhập → Sinh tổng hợp → Giải phóng"
      ],
      ans: 0,
      exp: "Chu trình nhân lên của virus luôn trải qua 5 bước: (1) Hấp phụ bám thụ thể → (2) Xâm nhập & cởi vỏ → (3) Sinh tổng hợp nguyên liệu → (4) Lắp ráp hạt virion → (5) Giải phóng."
    }
  ],
  25: [
    {
      q: "Virus HIV gây hội chứng suy giảm miễn dịch mắc phải (AIDS) ở người bằng cách tấn công và phá huỷ đặc hiệu loại tế bào nào?",
      options: [
        "Tế bào bạch cầu T hỗ trợ (mang thụ thể CD4) và đại thực bào của hệ miễn dịch",
        "Tế bào hồng cầu không nhân vận chuyển khí O₂",
        "Tế bào biểu bì sừng hoá trên bề mặt da",
        "Tế bào mô cơ xương ở tay và chân"
      ],
      ans: 0,
      exp: "Gai glycoprotein của HIV gắn đặc hiệu vào thụ thể CD4 trên bề mặt tế bào bạch cầu T hỗ trợ (T-CD4) và đại thực bào, làm suy sụp hệ thống đáp ứng miễn dịch tạo cơ hội cho các bệnh nhiễm trùng cơ hội."
    },
    {
      q: "Tác nhân gây bệnh 'Prion' (gây bệnh bò điên và thoái hoá thần kinh) có bản chất cấu tạo là gì?",
      options: [
        "Là các phân tử protein bị biến đổi cấu hình không gian bất thường, hoàn toàn không chứa nucleic acid (DNA hay RNA)",
        "Là một loài vi khuẩn Gram âm có vỏ nhầy rất dày",
        "Là một loại virus khổng lồ chứa đồng thời cả DNA và RNA",
        "Là một loài nấm kí sinh đơn bào có thành chitin"
      ],
      ans: 0,
      exp: "Prion chỉ là phân tử protein sai cấu hình (không có acid nucleic), có khả năng cảm ứng các protein bình thường biến đổi theo cấu hình bệnh lí của nó."
    },
    {
      q: "Thành tựu nào sau đây là ứng dụng quan trọng của virus trong nông nghiệp và công nghệ di truyền?",
      options: [
        "Sử dụng virus đã cắt bỏ gene gây bệnh làm vector (thể truyền) chuyển gene lành vào tế bào và sản xuất thuốc trừ sâu virus (như chế phẩm NPV)",
        "Dùng virus sống nguyên vẹn phun trực tiếp vào thức ăn để thay thế hoàn toàn vitamin",
        "Dùng virus để cố định khí N₂ trong không khí thành phân đạm",
        "Dùng virus để lên men sữa tươi thành sữa chua và phô mai"
      ],
      ans: 0,
      exp: "Virus được ứng dụng rộng rãi để sản xuất vaccine, interferon, làm vector chuyển gene trong công nghệ gene và làm thuốc trừ sâu sinh học (virus NPV diệt sâu hại)."
    }
  ],
  26: [
    {
      q: "Khi điều tra các bệnh nghi do virus trên cây trồng tại địa phương (như xoăn lá, khảm vàng lá), vì sao không nên kết luận ngay lập tức chỉ dựa vào một biểu hiện vàng lá đơn lẻ?",
      options: [
        "Vì triệu chứng vàng lá cũng có thể do cây thiếu dinh dưỡng khoáng, nhiễm nấm hoặc vi khuẩn; cần kết hợp nhiều dấu hiệu và nguồn chuyên môn bảo vệ thực vật",
        "Vì virus thực vật không bao giờ gây ra bất kì biểu hiện nào trên lá cây",
        "Vì cây trồng có hệ miễn dịch kháng thể giống hệt con người nên tự khỏi sau 1 giờ",
        "Vì tất cả các bệnh vàng lá đều chỉ do thừa ánh sáng mặt trời"
      ],
      ans: 0,
      exp: "Trong điều tra dịch tễ cây trồng, nhiều tác nhân (virus, vi khuẩn, nấm, thiếu khoáng, ngộ độc đất) có triệu chứng gần giống nhau nên cần đối chiếu toàn diện dữ liệu khoa học."
    },
    {
      q: "Virus gây bệnh ở thực vật thường phát tán và xâm nhập từ cây bệnh sang cây lành chủ yếu bằng con đường nào?",
      options: [
        "Qua các vết thương cơ giới do côn trùng chích hút (rầy nâu, bọ phấn, rệp), dụng cụ cắt tỉa hoặc truyền qua hạt giống/củ giống nhân vô tính",
        "Virus tự tiết enzyme cellulase đục thủng thành tế bào thực vật nguyên vẹn",
        "Virus tự bơi trong không khí bằng roi để chui qua lớp biểu bì sáp",
        "Qua việc bón phân vi sinh cố định đạm cho rễ cây"
      ],
      ans: 0,
      exp: "Tế bào thực vật có thành cellulose dày nên virus không thể tự hấp phụ xuyên qua mà phải nhờ vết thương do côn trùng chích hút hoặc dụng cụ nông cụ và đi qua cầu sinh chất."
    },
    {
      q: "Nguyên tắc quan trọng nhất khi thiết kế poster hoặc tờ rơi tuyên truyền phòng chống các bệnh truyền nhiễm do virus trong cộng đồng là gì?",
      options: [
        "Thông tin chính xác từ nguồn y tế chính thống, nêu rõ đường lây và biện pháp phòng tránh thiết thực, dễ hiểu, không gây hoang mang hay kì thị người bệnh",
        "Sử dụng ngôn từ giật gân, phóng đại mức độ nguy hiểm để gây hoang mang cực độ",
        "Công khai danh tính và thông tin cá nhân của toàn bộ bệnh nhân lên mạng xã hội",
        "Khuyên người dân tự ý mua thuốc kháng sinh liều cao về uống để phòng mọi loại virus"
      ],
      ans: 0,
      exp: "Truyền thông y tế phải đảm bảo tính khoa học, chính xác, nhân văn, không kì thị, bảo mật thông tin cá nhân và hướng dẫn hành động phòng bệnh đúng cách."
    }
  ]
};

const output = `// scratch/sinhhoc10_quizzes.js - 78 multiple-choice questions (3 per lesson) for Sinh học 10
const quizzes = ${JSON.stringify(quizzes, null, 2)};
module.exports = quizzes;
`;

fs.writeFileSync('scratch/sinhhoc10_quizzes.js', output, 'utf8');
console.log('Successfully generated scratch/sinhhoc10_quizzes.js! Total lessons with quizzes:', Object.keys(quizzes).length);
