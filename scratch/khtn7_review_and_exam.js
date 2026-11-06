// KHTN 7 Review, Formula Tools, Periodic Table & Exam Questions
module.exports = {
  periodicElements: [
    { z: 1, sym: 'H', name: 'Hydrogen', mass: 1, period: 1, group: 'IA', type: 'phi-kim', desc: 'Khí nhẹ nhất, chất khử mạnh' },
    { z: 2, sym: 'He', name: 'Helium', mass: 4, period: 1, group: 'VIIIA', type: 'khi-hiem', desc: 'Khí hiếm, vỏ ngoài bền vững 2e' },
    { z: 3, sym: 'Li', name: 'Lithium', mass: 7, period: 2, group: 'IA', type: 'kim-loai', desc: 'Kim loại kiềm nhẹ, 1e lớp ngoài cùng' },
    { z: 4, sym: 'Be', name: 'Beryllium', mass: 9, period: 2, group: 'IIA', type: 'kim-loai', desc: 'Kim loại kiềm thổ, 2e lớp ngoài cùng' },
    { z: 5, sym: 'B', name: 'Boron', mass: 11, period: 2, group: 'IIIA', type: 'phi-kim', desc: 'Phi kim nhóm IIIA, 3e lớp ngoài cùng' },
    { z: 6, sym: 'C', name: 'Carbon', mass: 12, period: 2, group: 'IVA', type: 'phi-kim', desc: 'Cốt lõi hợp chất hữu cơ, 4e ngoài cùng' },
    { z: 7, sym: 'N', name: 'Nitrogen', mass: 14, period: 2, group: 'VA', type: 'phi-kim', desc: 'Chiếm ~78% thể tích không khí' },
    { z: 8, sym: 'O', name: 'Oxygen', mass: 16, period: 2, group: 'VIA', type: 'phi-kim', desc: 'Duy trì sự sống và sự cháy (~21% không khí)' },
    { z: 9, sym: 'F', name: 'Fluorine', mass: 19, period: 2, group: 'VIIA', type: 'phi-kim', desc: 'Halogen phi kim hoạt động rất mạnh' },
    { z: 10, sym: 'Ne', name: 'Neon', mass: 20, period: 2, group: 'VIIIA', type: 'khi-hiem', desc: 'Khí hiếm phát sáng trong đèn neon' },
    { z: 11, sym: 'Na', name: 'Sodium', mass: 23, period: 3, group: 'IA', type: 'kim-loai', desc: 'Kim loại kiềm mềm, tác dụng mãnh liệt với nước' },
    { z: 12, sym: 'Mg', name: 'Magnesium', mass: 24, period: 3, group: 'IIA', type: 'kim-loai', desc: 'Kim loại cháy sáng trắng chói lòa' },
    { z: 13, sym: 'Al', name: 'Aluminium', mass: 27, period: 3, group: 'IIIA', type: 'kim-loai', desc: 'Kim loại nhẹ dẫn điện/nhiệt tốt' },
    { z: 14, sym: 'Si', name: 'Silicon', mass: 28, period: 3, group: 'IVA', type: 'phi-kim', desc: 'Bán dẫn then chốt trong vi mạch bán dẫn' },
    { z: 15, sym: 'P', name: 'Phosphorus', mass: 31, period: 3, group: 'VA', type: 'phi-kim', desc: 'Phi kim thiết yếu trong xương & ADN' },
    { z: 16, sym: 'S', name: 'Sulfur', mass: 32, period: 3, group: 'VIA', type: 'phi-kim', desc: 'Chất rắn màu vàng, dùng sản xuất H2SO4' },
    { z: 17, sym: 'Cl', name: 'Chlorine', mass: 35.5, period: 3, group: 'VIIA', type: 'phi-kim', desc: 'Khí vàng lục, khử trùng nước sinh hoạt' },
    { z: 18, sym: 'Ar', name: 'Argon', mass: 40, period: 3, group: 'VIIIA', type: 'khi-hiem', desc: 'Khí trơ dùng bảo vệ sợi đốt bóng đèn' },
    { z: 19, sym: 'K', name: 'Potassium', mass: 39, period: 4, group: 'IA', type: 'kim-loai', desc: 'Kim loại kiềm hoạt động mạnh hơn Na' },
    { z: 20, sym: 'Ca', name: 'Calcium', mass: 40, period: 4, group: 'IIA', type: 'kim-loai', desc: 'Kim loại cấu tạo chính của xương và vỏ sò' }
  ],

  formulas: [
    {
      category: 'Hóa học (Chương I - II)',
      icon: 'fa-flask',
      items: [
        { name: 'Khối lượng phân tử (amu)', formula: 'M = \\sum (n_i \\times A_i)', desc: 'Tổng khối lượng của tất cả nguyên tử các nguyên tố có trong phân tử.' },
        { name: 'Quy tắc hóa trị', formula: 'x \\times a = y \\times b', desc: 'Trong hợp chất AxBy: Tích chỉ số x hóa trị nguyên tố này bằng tích chỉ số x hóa trị nguyên tố kia.' },
        { name: 'Phần trăm khối lượng nguyên tố', formula: '%A = (x \\times M_A / M_X) \\times 100%', desc: 'Tỉ lệ phần trăm về khối lượng của nguyên tố A trong phân tử hợp chất X.' }
      ]
    },
    {
      category: 'Vật lý (Chương III - VI)',
      icon: 'fa-gauge-high',
      items: [
        { name: 'Tốc độ chuyển động', formula: 'v = s / t  \\Leftrightarrow  s = v \\times t,  t = s / v', desc: 'Đổi đơn vị tốc độ: 1 m/s = 3.6 km/h. Vận tốc biểu thị mức độ nhanh chậm của chuyển động.' },
        { name: 'Tần số dao động sóng âm', formula: 'f = N / t  (Hz)', desc: 'Số dao động N thực hiện được trong 1 giây t. Dao động càng nhanh thì âm phát ra càng bổng (cao).' },
        { name: 'Định luật phản xạ ánh sáng', formula: "i' = i", desc: 'Tia phản xạ nằm trong mặt phẳng tới. Góc phản xạ i\' luôn luôn bằng góc tới i.' },
        { name: 'Quy tắc an toàn giao thông 3 giây', formula: 'd_{an toan} \\approx v \\times 3 \\text{ s}', desc: 'Khoảng cách an toàn tối thiểu theo tốc độ lưu hành trên đường bộ.' }
      ]
    },
    {
      category: 'Sinh học (Chương VII - X)',
      icon: 'fa-dna',
      items: [
        { name: 'Phương trình quang hợp', formula: '6CO_2 + 6H_2O \\xrightarrow{\\text{Ánh sáng, Diệp lục}} C_6H_{12}O_6 + 6O_2', desc: 'Biến đổi năng lượng ánh sáng thành hóa năng dự trữ trong chất hữu cơ giải phóng oxy.' },
        { name: 'Phương trình hô hấp tế bào', formula: 'C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{Năng lượng (ATP + Nhiệt)}', desc: 'Phân giải chất hữu cơ lấy năng lượng phục vụ hoạt động sống của cơ thể.' }
      ]
    }
  ],

  examQuestions: [
    {
      q: 'Phương pháp tìm hiểu tự nhiên gồm mấy bước liên tiếp?',
      options: ['3 bước', '4 bước', '5 bước', '6 bước'],
      answer: 2,
      explain: 'Gồm 5 bước: Đề xuất vấn đề -> Dự đoán -> Lập kế hoạch -> Thực hiện kế hoạch -> Báo cáo, thảo luận.'
    },
    {
      q: 'Hạt mang điện tích âm trong nguyên tử là hạt nào?',
      options: ['Proton (p)', 'Neutron (n)', 'Electron (e)', 'Hạt nhân'],
      answer: 2,
      explain: 'Electron (e) mang điện tích âm (-1), quay quanh hạt nhân; Proton mang điện tích dương; Neutron không mang điện.'
    },
    {
      q: 'Số hiệu nguyên tử (Z) của một nguyên tố hóa học chính bằng:',
      options: ['Số hạt neutron', 'Số hạt proton trong hạt nhân', 'Khối lượng phân tử', 'Số lớp electron nhân đôi'],
      answer: 1,
      explain: 'Số hiệu nguyên tử Z = số proton = số electron của nguyên tử trung hòa về điện.'
    },
    {
      q: 'Bảng tuần hoàn các nguyên tố hóa học hiện đại được sắp xếp theo nguyên tắc nào sau đây?',
      options: [
        'Theo chiều giảm dần khối lượng nguyên tử',
        'Theo chiều tăng dần của điện tích hạt nhân nguyên tử',
        'Theo kích thước bán kính nguyên tử',
        'Theo thứ tự chữ cái bảng chữ cái La-tinh'
      ],
      answer: 1,
      explain: 'Các nguyên tố được xếp theo chiều tăng dần điện tích hạt nhân nguyên tử (Z).'
    },
    {
      q: 'Các nguyên tố trong cùng một Chu kì có đặc điểm chung nào?',
      options: [
        'Cùng số electron ở lớp ngoài cùng',
        'Cùng số lớp electron trong nguyên tử',
        'Cùng nguyên tử khối',
        'Cùng tính chất hóa học giống hệt nhau'
      ],
      answer: 1,
      explain: 'Số thứ tự chu kì chính bằng số lớp electron trong nguyên tử của nguyên tố.'
    },
    {
      q: 'Nguyên tố nhóm VIIIA trong bảng tuần hoàn được gọi là:',
      options: ['Kim loại kiềm', 'Kim loại kiềm thổ', 'Khí hiếm (khí trơ)', 'Halogen'],
      answer: 2,
      explain: 'Nhóm VIIIA là nhóm các khí hiếm (Helium, Neon, Argon...), có lớp electron ngoài cùng bền vững (8e, He có 2e).'
    },
    {
      q: 'Liên kết hóa học trong phân tử Sodium chloride (NaCl) là loại liên kết nào?',
      options: ['Liên kết cộng hóa trị', 'Liên kết ion', 'Liên kết kim loại', 'Liên kết hydro'],
      answer: 1,
      explain: 'Na nhường 1e thành Na+, Cl nhận 1e thành Cl-. Lực hút tĩnh điện giữa hai ion trái dấu tạo nên liên kết ion.'
    },
    {
      q: 'Liên kết cộng hóa trị hình thành do đâu?',
      options: [
        'Sự cho và nhận electron tạo thành ion',
        'Dùng chung một hay nhiều cặp electron giữa các nguyên tử',
        'Lực hút từ trường giữa các hạt nhân',
        'Sự va chạm ngẫu nhiên của các neutron'
      ],
      answer: 1,
      explain: 'Liên kết cộng hóa trị được hình thành bởi các cặp electron dùng chung giữa các nguyên tử (như H2, H2O, CO2).'
    },
    {
      q: 'Trong hợp chất P2O5, biết Oxi có hóa trị II. Hóa trị của Photpho (P) là:',
      options: ['I', 'III', 'V', 'IV'],
      answer: 2,
      explain: 'Áp dụng quy tắc hóa trị: 2 * a = 5 * II => a = 10 / 2 = V.'
    },
    {
      q: 'Khối lượng phân tử của nước (H2O) là bao nhiêu amu? (Biết H = 1, O = 16)',
      options: ['17 amu', '18 amu', '20 amu', '32 amu'],
      answer: 1,
      explain: 'Khối lượng phân tử H2O = 2 * 1 + 16 = 18 amu.'
    },
    {
      q: 'Đổi tốc độ 72 km/h sang đơn vị m/s ta được kết quả:',
      options: ['15 m/s', '20 m/s', '25 m/s', '30 m/s'],
      answer: 1,
      explain: '72 / 3.6 = 20 m/s.'
    },
    {
      q: 'Thiết bị bắn tốc độ mà cảnh sát giao thông sử dụng hoạt động dựa trên:',
      options: [
        'Phát và thu sóng vô tuyến (radar) hoặc laser phản xạ từ xe',
        'Gắn camera đo độ sáng mặt đường',
        'Cảm biến áp suất đặt dưới lòng đường',
        'Máy đo nhiệt độ động cơ xe'
      ],
      answer: 0,
      explain: 'Súng bắn tốc độ phát sóng radio/laser tới xe đang chạy, thu sóng phản xạ để tính tần số dịch chuyển Doppler và vận tốc.'
    },
    {
      q: 'Đồ thị quãng đường – thời gian (s - t) của một vật chuyển động thẳng đều có hình dạng là:',
      options: [
        'Một đường cong parabol',
        'Một đường thẳng nghiêng dốc lên hoặc xuống',
        'Một đường gấp khúc lượn sóng',
        'Một đường tròn khép kín'
      ],
      answer: 1,
      explain: 'Chuyển động thẳng đều có s tỉ lệ thuận với t, nên đồ thị s - t là một đường thẳng nghiêng.'
    },
    {
      q: 'Quy tắc "3 giây" khi điều khiển xe trên đường nhằm mục đích gì?',
      options: [
        'Tăng tốc vượt xe phía trước thật nhanh',
        'Giữ khoảng cách an toàn với xe chạy liền trước để kịp phản xạ và phanh',
        'Tiết kiệm nhiên liệu khi đi trên cao tốc',
        'Kiểm tra tín hiệu đèn giao thông'
      ],
      answer: 1,
      explain: 'Khoảng cách ứng với 3 giây đủ để tài xế nhận biết chướng ngại vật, phản ứng và hãm phanh an toàn.'
    },
    {
      q: 'Sóng âm truyền được trong những môi trường nào?',
      options: [
        'Chỉ truyền được trong chất khí',
        'Chỉ truyền được trong chất rắn và chất lỏng',
        'Rắn, lỏng và khí; KHÔNG truyền được trong chân không',
        'Rắn, lỏng, khí và cả trong chân không'
      ],
      answer: 2,
      explain: 'Sóng âm là dao động cơ học cần có các hạt vật chất môi trường để lan truyền, do đó không truyền được trong chân không.'
    },
    {
      q: 'Độ cao (trầm hay bổng) của âm phụ thuộc vào yếu tố nào?',
      options: ['Biên độ dao động', 'Tần số dao động', 'Vận tốc truyền âm', 'Màu sắc nguồn âm'],
      answer: 1,
      explain: 'Tần số càng lớn thì âm càng cao (bổng); tần số càng nhỏ thì âm càng thấp (trầm).'
    },
    {
      q: 'Một vật trong 20 giây thực hiện được 800 dao động. Tần số dao động của vật là:',
      options: ['40 Hz', '80 Hz', '160 Hz', '400 Hz'],
      answer: 0,
      explain: 'f = N / t = 800 / 20 = 40 Hz.'
    },
    {
      q: 'Vật liệu nào sau đây phản xạ âm tốt (hấp thụ âm kém)?',
      options: ['Bông xốp', 'Rèm nhung dày', 'Mặt kính phẳng, đá hoa cương nhẵn bóng', 'Mút gai cách âm'],
      answer: 2,
      explain: 'Vật liệu có bề mặt cứng, phẳng, nhẵn bóng phản xạ âm rất tốt; vật liệu mềm, xốp thì hấp thụ âm tốt.'
    },
    {
      q: 'Chùm sáng song song tới mặt gương phẳng cho chùm tia phản xạ là:',
      options: ['Chùm tia hội tụ', 'Chùm tia phân kì', 'Chùm tia song song', 'Chùm tia tán sắc'],
      answer: 2,
      explain: 'Mặt phẳng gương phẳng phản xạ đều, các góc tới bằng nhau nên các góc phản xạ bằng nhau => chùm tia phản xạ song song.'
    },
    {
      q: 'Chiếu tia sáng tới gương phẳng với góc tới i = 40 độ. Góc phản xạ i\' có giá trị là:',
      options: ['20 độ', '40 độ', '50 độ', '80 độ'],
      answer: 1,
      explain: 'Theo định luật phản xạ ánh sáng: i\' = i = 40 độ.'
    },
    {
      q: 'Tính chất ảnh của một vật tạo bởi gương phẳng là gì?',
      options: [
        'Ảnh thật, ngược chiều, lớn hơn vật',
        'Ảnh ảo, cùng chiều, lớn bằng vật',
        'Ảnh ảo, ngược chiều, nhỏ hơn vật',
        'Ảnh thật, cùng chiều, nhỏ hơn vật'
      ],
      answer: 1,
      explain: 'Gương phẳng tạo ảnh ảo (không hứng được trên màn), cùng chiều và có độ lớn bằng vật.'
    },
    {
      q: 'Nam châm vĩnh cửu có hai cực từ là:',
      options: ['Cực Dương (+) và cực Âm (-)', 'Cực Bắc (N) và cực Nam (S)', 'Cực Đông và cực Tây', 'Cực Lớn và cực Nhỏ'],
      answer: 1,
      explain: 'Hai cực từ của nam châm là cực Bắc (N - North, sơn đỏ) và cực Nam (S - South, sơn xanh/trắng).'
    },
    {
      q: 'Hai cực từ cùng tên của hai nam châm khi đặt gần nhau sẽ:',
      options: ['Hút nhau', 'Đẩy nhau', 'Không có lực tương tác', 'Lúc hút lúc đẩy'],
      answer: 1,
      explain: 'Các cực cùng tên (N-N hoặc S-S) đẩy nhau; các cực khác tên (N-S) hút nhau.'
    },
    {
      q: 'Để làm tăng từ trường của một nam châm điện, ta có thể:',
      options: [
        'Giảm cường độ dòng điện chạy qua cuộn dây',
        'Giảm số vòng dây quấn',
        'Tăng cường độ dòng điện và tăng số vòng quấn cuộn dây có lõi sắt',
        'Rút lõi sắt non ra khỏi cuộn dây'
      ],
      answer: 2,
      explain: 'Tăng dòng điện I, tăng số vòng quấn N và sử dụng lõi sắt non sẽ tăng mạnh từ tính của nam châm điện.'
    },
    {
      q: 'Quá trình trao đổi chất và chuyển hóa năng lượng giúp sinh vật:',
      options: [
        'Biến đổi hoàn toàn thành năng lượng nhiệt',
        'Tồn tại, sinh trưởng, phát triển, cảm ứng và sinh sản',
        'Ngừng mọi hoạt động sống để tiết kiệm năng lượng',
        'Tiêu diệt hoàn toàn các tế bào già cỗi'
      ],
      answer: 1,
      explain: 'TĐC & CHNL là đặc trưng cơ bản duy trì sự sống, giúp cơ thể lớn lên, hoạt động và duy trì nòi giống.'
    },
    {
      q: 'Bào quan thực hiện chức năng quang hợp ở tế bào thực vật là:',
      options: ['Ti thể', 'Lục lạp', 'Không bào', 'Nhân tế bào'],
      answer: 1,
      explain: 'Lục lạp chứa chất diệp lục hấp thu năng lượng ánh sáng để tổng hợp glucose và giải phóng O2.'
    },
    {
      q: 'Sản phẩm của quá trình quang hợp ở cây xanh gồm có:',
      options: [
        'Khí carbon dioxide (CO2) và nước',
        'Chất hữu cơ (C6H12O6) và khí oxygen (O2)',
        'Khí nitrogen (N2) và muối khoáng',
        'Chất béo và vitamin A'
      ],
      answer: 1,
      explain: 'Phương trình: 6CO2 + 6H2O -> C6H12O6 + 6O2.'
    },
    {
      q: 'Bào quan thực hiện chức năng hô hấp tế bào là:',
      options: ['Lục lạp', 'Ti thể', 'Ribosome', 'Lưới nội chất'],
      answer: 1,
      explain: 'Ti thể được xem là nhà máy năng lượng của tế bào, nơi diễn ra quá trình hô hấp tế bào tạo ATP.'
    },
    {
      q: 'Chất khí nào được lấy vào và thải ra trong quá trình hô hấp tế bào?',
      options: [
        'Lấy vào CO2, thải ra O2',
        'Lấy vào O2, thải ra CO2',
        'Lấy vào N2, thải ra H2O',
        'Lấy vào CO, thải ra O3'
      ],
      answer: 1,
      explain: 'Hô hấp tế bào tiêu thụ khí Oxygen (O2) và giải phóng khí Carbon dioxide (CO2).'
    },
    {
      q: 'Cơ quan trao đổi khí chủ yếu ở thực vật là:',
      options: ['Lông hút ở rễ', 'Khí khổng ở lá', 'Mạch rây ở thân', 'Hoa và quả'],
      answer: 1,
      explain: 'Khí khổng nằm chủ yếu ở biểu bì lá, có khả năng đóng mở để trao đổi CO2, O2 và thoát hơi nước.'
    },
    {
      q: 'Hệ cơ quan hô hấp ở côn trùng (như cào cào, châu chấu) là:',
      options: ['Phổi', 'Mang', 'Hệ thống ống khí', 'Bề mặt da'],
      answer: 2,
      explain: 'Côn trùng hô hấp bằng hệ thống ống khí phân nhánh trực tiếp tới từng tế bào, thông qua các lỗ thở ở thành bụng.'
    },
    {
      q: 'Nước và muối khoáng được rễ cây hút từ đất vào chủ yếu nhờ bộ phận nào?',
      options: ['Chóp rễ', 'Miền lông hút của rễ', 'Thân non', 'Biểu bì lá'],
      answer: 1,
      explain: 'Các tế bào lông hút ở rễ làm tăng diện tích tiếp xúc với dung dịch đất, giúp hút nước và muối khoáng hiệu quả.'
    },
    {
      q: 'Dòng mạch gỗ (xylem) trong thân cây có chức năng vận chuyển:',
      options: [
        'Chất hữu cơ từ lá xuống các bộ phận của cây',
        'Nước và các ion khoáng từ rễ lên thân và lá',
        'Khí oxygen từ lá xuống rễ',
        'Nhiệt lượng tỏa ra từ rễ'
      ],
      answer: 1,
      explain: 'Mạch gỗ vận chuyển dòng nước và khoáng hòa tan từ rễ lên; mạch rây vận chuyển chất hữu cơ từ lá đi khắp cơ thể.'
    },
    {
      q: 'Động vật nào sau đây có hệ tuần hoàn hở?',
      options: ['Cá chép', 'Ếch đồng', 'Châu chấu, ốc sên', 'Thỏ, chim bồ câu'],
      answer: 2,
      explain: 'Thân mềm (ốc sên) và chân khớp (châu chấu, tôm) có hệ tuần hoàn hở, máu chảy vào khoang cơ thể tiếp xúc trực tiếp tế bào.'
    },
    {
      q: 'Hiện tượng ngọn cây uốn cong về phía có nguồn ánh sáng chiếu vào gọi là:',
      options: ['Tính hướng đất (hướng trọng lực)', 'Tính hướng sáng', 'Tính hướng nước', 'Tính hướng hóa'],
      answer: 1,
      explain: 'Ngọn cây có tính hướng sáng dương do auxin phân bố nhiều ở phía tối làm tế bào phía tối dãn dài nhanh hơn.'
    },
    {
      q: 'Ví dụ nào sau đây thể hiện tập tính bẩm sinh ở động vật?',
      options: [
        'Chim non mới nở thấy vật chuyển động đầu tiên tưởng là mẹ',
        'Nhện giăng tơ mạng nhện để bắt mồi',
        'Khỉ biết dùng gậy khều chuối',
        'Học sinh dừng xe khi gặp đèn đỏ'
      ],
      answer: 1,
      explain: 'Nhện giăng tơ là tập tính bẩm sinh, sinh ra đã có, mang tính bản năng di truyền không cần học hỏi.'
    },
    {
      q: 'Sinh trưởng ở sinh vật là quá trình:',
      options: [
        'Tăng lên về kích thước và khối lượng của cơ thể do tăng số lượng và kích thước tế bào',
        'Phân hóa tạo nên các cơ quan mới của cơ thể',
        'Hình thành khả năng sinh sản của sinh vật trưởng thành',
        'Giảm dần số lượng tế bào theo thời gian'
      ],
      answer: 0,
      explain: 'Sinh trưởng là sự lớn lên về kích thước và khối lượng cơ thể; phát triển bao gồm sinh trưởng kết hợp phân hóa chức năng.'
    },
    {
      q: 'Ở cây Hai lá mầm, sự tăng trưởng về đường kính (độ dày) của thân do loại mô phân sinh nào phụ trách?',
      options: ['Mô phân sinh đỉnh ngọn', 'Mô phân sinh bên', 'Mô phân sinh lóng', 'Mô bì'],
      answer: 1,
      explain: 'Mô phân sinh bên (tầng sinh vỏ, tầng sinh trụ) giúp thân và rễ cây Hai lá mầm to ra về bề ngang.'
    },
    {
      q: 'Đặc điểm nào phân biệt biến thái hoàn toàn với biến thái không hoàn toàn ở côn trùng?',
      options: [
        'Vòng đời có giai đoạn ấu trùng',
        'Con non khác hoàn toàn con trưởng thành và trải qua giai đoạn Nhộng (như bướm, muỗi)',
        'Con non lột xác nhiều lần',
        'Đẻ con chứ không đẻ trứng'
      ],
      answer: 1,
      explain: 'Biến thái hoàn toàn (Bướm, Ruồi, Muỗi) trải qua 4 giai đoạn: Trứng -> Sâu non (ấu trùng) -> Nhộng -> Bướm trưởng thành.'
    },
    {
      q: 'Hình thức sinh sản vô tính ở thủy tức là gì?',
      options: ['Phân đôi', 'Mọc chồi', 'Tái sinh', 'Bào tử'],
      answer: 1,
      explain: 'Thủy tức sinh sản vô tính chủ yếu bằng hình thức mọc chồi trên thân con mẹ, chồi lớn dần tách ra thành cơ thể mới.'
    },
    {
      q: 'Thụ phấn là hiện tượng:',
      options: [
        'Hạt phấn tiếp xúc với đầu nhụy của hoa',
        'Nhân tinh trùng kết hợp với noãn cầu trong noãn',
        'Hạt nảy mầm thành cây con',
        'Cánh hoa rụng đi tạo bầu nhụy'
      ],
      answer: 0,
      explain: 'Thụ phấn là quá trình hạt phấn rơi vào đầu nhụy; thụ tinh là sự kết hợp giữa giao tử đực và giao tử cái trong noãn.'
    },
    {
      q: 'Ưu điểm nổi bật của phương pháp chiết cành so với gieo hạt là:',
      options: [
        'Rẻ tiền hơn gieo hạt rất nhiều',
        'Cây con giữ nguyên vẹn đặc tính tốt của cây mẹ và sớm cho thu hoạch quả',
        'Tạo ra rất nhiều biến dị di truyền mới',
        'Cây con có bộ rễ cọc đâm rất sâu xuống lòng đất'
      ],
      answer: 1,
      explain: 'Chiết cành là nhân giống vô tính giúp giữ nguyên gen cây mẹ chất lượng cao và rút ngắn thời gian sinh trưởng ra hoa kết trái.'
    },
    {
      q: 'Biện pháp thắp đèn chiếu sáng ban đêm cho cây thanh long vào vụ đông nhằm mục đích:',
      options: [
        'Tiêu diệt sâu bệnh hại hoa',
        'Kích thích cây ra hoa trái vụ tăng năng suất và thu nhập',
        'Sưởi ấm cho rễ cây khỏi rét',
        'Thu hút côn trùng đến thụ phấn ban đêm'
      ],
      answer: 1,
      explain: 'Thanh long là cây ngày dài, việc thắp đèn kéo dài thời gian chiếu sáng kích thích cây phân hóa mầm hoa trái vụ.'
    },
    {
      q: 'Vì sao cơ thể sinh vật được xem là một thể thống nhất?',
      options: [
        'Vì các tế bào trong cơ thể đều có hình dạng giống hệt nhau',
        'Vì có sự phối hợp nhịp nhàng, mật thiết giữa các cơ quan và giữa các quá trình sống',
        'Vì toàn bộ cơ thể chỉ chịu sự chi phối của môi trường bên ngoài',
        'Vì tế bào không thể trao đổi chất với tế bào lân cận'
      ],
      answer: 1,
      explain: 'Mọi cơ quan và quá trình sống (hô hấp, tuần hoàn, tiêu hóa, bài tiết, cảm ứng) đều liên kết chặt chẽ và tương hỗ lẫn nhau.'
    },
    {
      q: 'Trong phòng thí nghiệm KHTN, biển báo có hình ngọn lửa mang ý nghĩa:',
      options: ['Chất ăn mòn kim loại', 'Chất độc sinh học nguy hiểm', 'Chất dễ cháy nổ, cần tránh xa nguồn nhiệt', 'Dụng cụ thủy tinh dễ vỡ'],
      answer: 2,
      explain: 'Biển báo ngọn lửa cảnh báo chất dễ cháy, bắt lửa nhanh.'
    },
    {
      q: 'Khí Oxygen duy trì sự sống chiếm khoảng bao nhiêu phần trăm thể tích không khí?',
      options: ['~1%', '~21%', '~50%', '~78%'],
      answer: 1,
      explain: 'Không khí gồm khoảng 78% Nitrogen, 21% Oxygen, 1% các khí khác (CO2, Ar, hơi nước...).'
    },
    {
      q: 'Âm thanh có tần số nhỏ hơn 20 Hz gọi là gì?',
      options: ['Siêu âm', 'Hạ âm', 'Tạp âm', 'Âm thanh nghe được'],
      answer: 1,
      explain: 'Tai người bình thường nghe được từ 20 Hz đến 20000 Hz. Dưới 20 Hz là hạ âm, trên 20000 Hz là siêu âm.'
    },
    {
      q: 'Từ trường tồn tại ở không gian xung quanh vật nào sau đây?',
      options: ['Một điện tích đứng yên', 'Thanh nam châm hoặc dòng điện chạy qua dây dẫn', 'Một thanh gỗ khô', 'Một cốc nước khoáng'],
      answer: 1,
      explain: 'Từ trường tồn tại xung quanh nam châm vĩnh cửu và xung quanh mọi dòng điện chuyển động.'
    },
    {
      q: 'Nếu ta bôi một lớp dầu mỡ kín lên hai mặt lá của một chậu cây cảnh, sau vài ngày lá cây sẽ:',
      options: [
        'Xanh tươi và bóng mượt hơn',
        'Héo vàng và rụng dần do khí khổng bị bịt kín không thể quang hợp, hô hấp và thoát hơi nước',
        'Lớn nhanh gấp đôi bình thường',
        'Mọc thêm nhiều lá non mới'
      ],
      answer: 1,
      explain: 'Dầu mỡ bít kín các lỗ khí khổng, làm tê liệt quá trình trao đổi khí và thoát hơi nước khiến tế bào lá chết.'
    },
    {
      q: 'Ứng dụng nào sau đây KHÔNG PHẢI là ứng dụng của nam châm điện?',
      options: [
        'Cần cẩu hút phế liệu sắt thép nặng',
        'Chuông điện báo động',
        'La bàn định hướng địa lý truyền thống dùng kim từ',
        'Rơ le điện từ tự động ngắt mạch'
      ],
      answer: 2,
      explain: 'La bàn định hướng truyền thống sử dụng kim nam châm vĩnh cửu, không dùng điện.'
    }
  ]
};
