const fs = require('fs');
const path = require('path');

const coreCards = {
  "1": [
    {
      icon: "fa-solid fa-clock-rotate-left",
      title: "Tiến trình lịch sử vật lí",
      desc: "Từ triết học tự nhiên cổ đại đến kỉ nguyên vật lí hiện đại.",
      points: [
        "Trước TK XVII: Suy luận cảm quan Aristotle (vật nặng rơi nhanh hơn).",
        "TK XVII - XIX: Vật lí cổ điển với thực nghiệm Galilei, cơ học Newton.",
        "Đầu TK XX - nay: Kỉ nguyên lượng tử Planck và thuyết tương đối Einstein."
      ]
    },
    {
      icon: "fa-solid fa-flask",
      title: "Phương pháp thực nghiệm",
      desc: "Tiêu chuẩn tối cao kiểm chứng giả thuyết và quy luật khoa học.",
      points: [
        "Thí nghiệm Galilei: Mọi vật rơi tự do với cùng gia tốc trong chân không.",
        "Mối quan hệ biện chứng: Thực nghiệm kiểm chứng lí thuyết và gợi mở quy luật mới.",
        "Tính lặp lại: Kết quả thực nghiệm phải kiểm chứng độc lập được ở mọi nơi."
      ]
    },
    {
      icon: "fa-solid fa-apple-whole",
      title: "Cơ học Newton & Quỹ đạo",
      desc: "Hệ thống cơ học cổ điển và ý tưởng vệ tinh nhân tạo.",
      points: [
        "Ba định luật Newton và định luật vạn vật hấp dẫn thống nhất mặt đất và vũ trụ.",
        "Mô hình tư duy 'Đại bác Newton': Phóng vật thể đạt tốc độ vũ trụ để bay vào quỹ đạo.",
        "Cơ sở cho cơ học chất lưu, âm học, nhiệt động học và điện từ học cổ điển."
      ]
    },
    {
      icon: "fa-solid fa-atom",
      title: "Vật lí hiện đại vi mô & vĩ mô",
      desc: "Khám phá thế giới lượng tử siêu nhỏ và không gian tương đối tính.",
      points: [
        "Max Planck (1900): Năng lượng bức xạ bị lượng tử hóa thành từng gói $hf$.",
        "Albert Einstein (1905): Thuyết tương đối hẹp và hệ thức tương đương khối lượng - năng lượng $E=mc^2$.",
        "Nền tảng của kĩ thuật bán dẫn, laser, năng lượng hạt nhân và siêu máy tính."
      ]
    }
  ],
  "2": [
    {
      icon: "fa-solid fa-telescope",
      title: "Vật lí thiên văn & Viễn thám",
      desc: "Khám phá không gian vũ trụ và giám sát bề mặt Trái Đất.",
      points: [
        "Phân tích quang phổ: Xác định nhiệt độ, độ sáng và thành phần hóa học thiên thể.",
        "Vệ tinh viễn thám: Chụp ảnh đa phổ theo dõi biến đổi khí hậu, cháy rừng và thiên tai."
      ]
    },
    {
      icon: "fa-solid fa-circle-nodes",
      title: "Hạt cơ bản & Hạt nhân",
      desc: "Nghiên cứu các viên gạch cơ bản nhất cấu thành vật chất.",
      points: [
        "Máy gia tốc hạt LHC: Khảo sát tương tác mạnh, yếu, điện từ và tìm kiếm hạt Higgs.",
        "Vật lí hạt nhân: Ứng dụng điện hạt nhân, chẩn đoán y tế và định tuổi carbon $^{14}\\text{C}$."
      ]
    },
    {
      icon: "fa-solid fa-microchip",
      title: "Vật liệu Nano & Bán dẫn",
      desc: "Công nghệ quy mô nguyên tử và linh kiện điện tử hiện đại.",
      points: [
        "Vật liệu nano: Kích thước 1 - 100 nm biểu hiện hiệu ứng lượng tử khác biệt vật liệu khối.",
        "Vật lí bán dẫn: Nền tảng chế tạo diode, transistor, vi mạch tích hợp (chip) và pin mặt trời."
      ]
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "Laser & Vật lí y sinh",
      desc: "Ánh sáng kích thích và các công nghệ chăm sóc sức khỏe con người.",
      points: [
        "Tia laser: Chùm sáng đơn sắc, định hướng cao ứng dụng phẫu thuật và cắt gọt chính xác.",
        "Vật lí y sinh: Máy chụp cộng hưởng từ MRI, cắt lớp vi tính CT, xạ trị gia tốc và kĩ thuật PCR."
      ]
    }
  ],
  "3": [
    {
      icon: "fa-solid fa-jet-fighter",
      title: "Quân sự & Quốc phòng",
      desc: "Cơ học khí động lực học và kĩ thuật radar điều khiển.",
      points: [
        "Cơ học chất lưu & khí động học: Thiết kế máy bay siêu âm, tên lửa phản lực.",
        "Quang học & Điện tử: Kính nhìn đêm hồng ngoại, dẫn đường quán tính và định vị vệ tinh."
      ]
    },
    {
      icon: "fa-solid fa-industry",
      title: "Năng lượng & Tự động hóa",
      desc: "Sản xuất điện năng quy mô lớn và dây chuyền robot thông minh.",
      points: [
        "Phản ứng phân hạch hạt nhân urani giải phóng nhiệt năng quay turbine phát điện.",
        "Cơ cấu chấp hành cơ điện tử: Cảm biến, động cơ bước và hệ thống điều khiển tự động PLC."
      ]
    },
    {
      icon: "fa-solid fa-tower-cell",
      title: "Thông tin & Truyền thông",
      desc: "Kết nối dữ liệu tốc độ ánh sáng xuyên lục địa.",
      points: [
        "Sóng điện từ vi ba: Truyền tín hiệu vô tuyến không dây, sóng viễn thông 5G và vệ tinh.",
        "Cáp quang: Ứng dụng phản xạ toàn phần truyền tải dữ liệu dung lượng siêu lớn."
      ]
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Khí tượng, Nông nghiệp & Tài chính",
      desc: "Ứng dụng mô hình hóa vật lí trong dự báo và quản trị rủi ro.",
      points: [
        "Khí tượng thủy văn: Mô hình nhiệt động khí quyển dự báo đường đi của bão lũ.",
        "Vật lí tài chính (Econophysics): Mô hình chuyển động Brown định giá chứng khoán phái sinh."
      ]
    }
  ],
  "4": [
    {
      icon: "fa-solid fa-map",
      title: "Bản đồ sao & Chòm sao",
      desc: "Quy ước hình chiếu biểu kiến của các vì sao trên thiên cầu.",
      points: [
        "Chòm sao là sự liên kết tưởng tượng giữa các sao nhìn thấy từ Trái Đất.",
        "Khoảng cách thực tế giữa các sao trong cùng một chòm sao là rất khác nhau.",
        "Vị trí và hướng quan sát chòm sao thay đổi theo vĩ độ và các mùa trong năm."
      ]
    },
    {
      icon: "fa-solid fa-star",
      title: "Chòm Gấu Lớn (Ursa Major)",
      desc: "Cụm 7 ngôi sao sáng hình chiếc gầu sòng nổi bật ở phương Bắc.",
      points: [
        "Xác định hai ngôi sao ở mép ngoài cùng của miệng gầu (Merak và Dubhe).",
        "Kéo dài đoạn nối hai sao ra phía ngoài gấp đúng 5 lần khoảng cách giữa chúng.",
        "Đích đến chính là vị trí của Sao Bắc Cực (Polaris)."
      ]
    },
    {
      icon: "fa-solid fa-crown",
      title: "Chòm Thiên Hậu (Cassiopeia)",
      desc: "Năm ngôi sao sáng tạo thành hình chữ W hoặc chữ M đối diện Gấu Lớn.",
      points: [
        "Dùng đường vuông góc với đoạn nối hai sao $\\gamma$ và $\\delta$ của chòm.",
        "Kéo dài một đoạn bằng khoảng 7 lần khoảng cách giữa hai sao này.",
        "Phương pháp thay thế hoàn hảo khi chòm Gấu Lớn lặn xuống dưới chân trời."
      ]
    },
    {
      icon: "fa-solid fa-compass",
      title: "Xác định 4 phương vị",
      desc: "Quy tắc định hướng từ vị trí của Sao Bắc Cực.",
      points: [
        "Sao Bắc Cực nằm gần như bất động tại cực Bắc thiên cầu.",
        "Đứng mặt nhìn thẳng vào Sao Bắc Cực: Trước mặt là hướng Bắc, sau lưng là hướng Nam.",
        "Bên tay phải là hướng Đông, bên tay trái là hướng Tây."
      ]
    }
  ],
  "5": [
    {
      icon: "fa-solid fa-sun",
      title: "Chuyển động biểu kiến Mặt Trời",
      desc: "Hệ quả trực tiếp của chuyển động tự quay quanh trục của Trái Đất.",
      points: [
        "Mặt Trời mọc Đông lặn Tây do Trái Đất tự quay từ Tây sang Đông theo chu kì 24 giờ.",
        "Độ cao Mặt Trời thay đổi theo mùa do trục tự quay của Trái Đất nghiêng $23{,}5^\\circ$.",
        "Xuân phân/Thu phân ngày dài bằng đêm; Hạ chí ngày dài nhất, Đông chí đêm dài nhất ở Bắc bán cầu."
      ]
    },
    {
      icon: "fa-solid fa-moon",
      title: "Chu kì pha của Mặt Trăng",
      desc: "Biến đổi diện tích phần được chiếu sáng nhìn thấy từ Trái Đất.",
      points: [
        "Mặt Trăng quay quanh Trái Đất theo chu kì 29,5 ngày (tuần trăng).",
        "Các pha: Trăng non $\\to$ Lưỡi liềm $\\to$ Bán nguyệt $\\to$ Trăng tròn $\\to$ Trăng khuyết.",
        "Lưu ý: Pha Mặt Trăng không phải do bóng Trái Đất che khuất tạo thành."
      ]
    },
    {
      icon: "fa-solid fa-satellite",
      title: "Sao Mai & Sao Hôm (Kim tinh)",
      desc: "Đặc điểm quan sát hành tinh nằm phía trong quỹ đạo Trái Đất.",
      points: [
        "Kim tinh và Thủy tinh có quỹ đạo gần Mặt Trời hơn Trái Đất (hành tinh trong).",
        "Góc li giác cực đại với Mặt Trời nhỏ ($48^\\circ$ với Kim tinh, $28^\\circ$ với Thủy tinh).",
        "Chỉ quan sát được gần chân trời lúc bình minh (Sao Mai) hoặc hoàng hôn (Sao Hôm)."
      ]
    },
    {
      icon: "fa-solid fa-globe",
      title: "Địa tâm vs Nhật tâm",
      desc: "Cuộc cách mạng khoa học lật đổ quan niệm vũ trụ cổ đại.",
      points: [
        "Hệ Địa tâm (Ptolemy): Đặt Trái Đất đứng yên ở trung tâm vũ trụ (quan niệm sai lầm).",
        "Hệ Nhật tâm (Copernic): Mặt Trời ở trung tâm, Trái Đất và các hành tinh quay quanh.",
        "Kính thiên văn Galilei phát hiện các vệ tinh sao Mộc củng cố mô hình Nhật tâm."
      ]
    }
  ],
  "6": [
    {
      icon: "fa-solid fa-circle-dot",
      title: "Hiện tượng Nhật thực",
      desc: "Mặt Trời - Mặt Trăng - Trái Đất thẳng hàng theo thứ tự.",
      points: [
        "Xảy ra vào kì Trăng non (ngày đầu tháng âm lịch) khi bóng Mặt Trăng đổ lên Trái Đất.",
        "Nhật thực toàn phần: Người nằm trong vùng bóng tối thấy đĩa Mặt Trời bị che kín.",
        "Nhật thực hình khuyên: Khi Mặt Trăng ở xa Trái Đất, để lộ vành sáng ngoài cùng."
      ]
    },
    {
      icon: "fa-solid fa-circle-half-stroke",
      title: "Hiện tượng Nguyệt thực & Trăng máu",
      desc: "Mặt Trời - Trái Đất - Mặt Trăng thẳng hàng theo thứ tự.",
      points: [
        "Xảy ra vào kì Trăng tròn (rằm âm lịch) khi Mặt Trăng đi vào vùng bóng tối Trái Đất.",
        "Mặt Trăng có màu đỏ sẫm do tia đỏ bước sóng dài bị khúc xạ qua rìa khí quyển Trái Đất.",
        "Thời gian nguyệt thực kéo dài hàng giờ, lâu hơn nhiều so với nhật thực."
      ]
    },
    {
      icon: "fa-solid fa-water",
      title: "Lực hấp dẫn vi sai & Thủy triều",
      desc: "Nước biển dâng hạ chu kì do lực hút của Mặt Trăng và Mặt Trời.",
      points: [
        "Lực hấp dẫn Mặt Trăng hút không đều lên các phần của Trái Đất tạo hai bướu triều.",
        "Trái Đất tự quay dưới hai bướu nước này tạo nên hiện tượng nước lớn - nước ròng mỗi ngày.",
        "Mặt Trời cũng đóng góp lực hút tạo thủy triều nhưng yếu hơn do ở quá xa."
      ]
    },
    {
      icon: "fa-solid fa-arrow-up-right-dots",
      title: "Triều cường & Triều kém",
      desc: "Sự giao thoa lực hấp dẫn theo góc tương đối giữa ba thiên thể.",
      points: [
        "Triều cường (Spring tide): Mặt Trời - Trái Đất - Mặt Trăng thẳng hàng $\\implies$ Biên độ triều lớn nhất.",
        "Triều kém (Neap tide): Hướng Mặt Trời và Mặt Trăng vuông góc $\\implies$ Biên độ triều nhỏ nhất.",
        "Thủy triều thực tế chịu tác động mạnh của địa hình bờ biển và vịnh hẹp."
      ]
    }
  ],
  "7": [
    {
      icon: "fa-solid fa-tree",
      title: "Cấu trúc môi trường sống",
      desc: "Sự liên kết chặt chẽ giữa môi trường tự nhiên và nhân tạo.",
      points: [
        "Môi trường tự nhiên: Khí quyển, thủy quyển, thạch quyển và sinh quyển.",
        "Môi trường nhân tạo: Đô thị, giao thông, nhà xưởng công nghiệp do con người tạo ra.",
        "Sức tải môi trường: Ô nhiễm vượt ngưỡng tự thanh lọc sẽ gây khủng hoảng sinh thái."
      ]
    },
    {
      icon: "fa-solid fa-temperature-arrow-up",
      title: "Biến đổi khí hậu toàn cầu",
      desc: "Hậu quả của sự gia tăng nồng độ khí nhà kính trong khí quyển.",
      points: [
        "Đốt nhiên liệu hóa thạch thải hàng tỉ tấn $CO_2$ giữ nhiệt làm khí hậu nóng lên.",
        "Hậu quả: Băng tan hai cực, nước biển dâng, hạn hán, lũ lụt và bão nhiệt đới cực đoan.",
        "Đe dọa trực tiếp an ninh lương thực và đời sống dân cư ven biển."
      ]
    },
    {
      icon: "fa-solid fa-shield-cat",
      title: "Suy giảm đa dạng sinh học",
      desc: "Sự mất mát nguồn gen và nguy cơ tuyệt chủng hàng loạt loài sinh vật.",
      points: [
        "Phá rừng và ô nhiễm phá hủy sinh cảnh sống tự nhiên của muôn loài.",
        "Làm mất cân bằng chuỗi thức ăn và giảm khả năng phục hồi của hệ sinh thái tự nhiên.",
        "Bảo tồn đa dạng sinh học là chìa khóa duy trì nguồn sống của nhân loại."
      ]
    },
    {
      icon: "fa-solid fa-recycle",
      title: "Phát triển bền vững & Mô hình 3R",
      desc: "Nguyên tắc cân bằng giữa kinh tế, xã hội và bảo vệ tự nhiên.",
      points: [
        "Phát triển bền vững: Thỏa mãn nhu cầu hiện tại mà không làm hại thế hệ tương lai.",
        "Cam kết Net Zero 2050: Giảm phát thải ròng khí nhà kính về mức bằng không.",
        "Mô hình 3R: Reduce (Giảm thiểu) — Reuse (Tái sử dụng) — Recycle (Tái chế)."
      ]
    }
  ],
  "8": [
    {
      icon: "fa-solid fa-gas-pump",
      title: "Cơ cấu năng lượng tại Việt Nam",
      desc: "Thực trạng chuyển dịch từ tự chủ sang phụ thuộc nhiên liệu nhập khẩu.",
      points: [
        "Nhiệt điện than tăng trưởng nóng, sản lượng than nội địa không đủ, phải nhập khẩu lớn.",
        "Trữ lượng dầu mỏ và khí đốt tự nhiên suy giảm dần theo thời gian.",
        "Tiềm năng thủy điện quy mô lớn trên các sông lớn hầu như đã khai thác hết."
      ]
    },
    {
      icon: "fa-solid fa-smog",
      title: "Tác động môi trường & Khí hậu",
      desc: "Các thách thức sinh thái từ nhiệt điện than và công trình thủy điện.",
      points: [
        "Nhiệt điện than thải bụi mịn $PM_{2.5}$, khí $SO_2, NO_x$ và lượng tro xỉ khổng lồ.",
        "Hồ thủy điện làm thay đổi dòng chảy, ngăn bùn cát phù sa và gây sạt lở bờ biển.",
        "Việt Nam thuộc nhóm quốc gia chịu tổn thương nặng nề nhất do nước biển dâng."
      ]
    },
    {
      icon: "fa-solid fa-snowflake",
      title: "Vật lí làm lạnh & Điều hòa",
      desc: "Ứng dụng Định luật II Nhiệt động lực học trong tiết kiệm điện.",
      points: [
        "Nhiệt không tự truyền từ vật lạnh sang vật nóng, làm lạnh bắt buộc tiêu tốn công.",
        "Cách nhiệt phòng tốt và cài đặt nhiệt độ $26 - 28^\\circ\\text{C}$ giúp tiết kiệm nhiều điện năng.",
        "Vệ sinh tấm lọc bụi định kì giúp nâng cao hiệu suất trao đổi nhiệt của dàn lạnh."
      ]
    },
    {
      icon: "fa-solid fa-car",
      title: "Hiệu quả động cơ & Hành vi xanh",
      desc: "Giải pháp kĩ thuật và lối sống giảm thiểu hao phí năng lượng.",
      points: [
        "Bảo dưỡng động cơ đốt trong và kiểm tra áp suất lốp xe giảm tiêu hao xăng dầu $10 - 15\\%$.",
        "Tận dụng tối đa ánh sáng và gió tự nhiên thay cho bóng đèn và quạt máy.",
        "Ưu tiên sử dụng phương tiện giao thông công cộng và phương tiện chạy điện."
      ]
    }
  ],
  "9": [
    {
      icon: "fa-solid fa-cloud-showers-heavy",
      title: "Khí thải nhiên liệu & Bụi mịn",
      desc: "Các chất độc hại sinh ra từ quá trình đốt cháy hydrocarbon.",
      points: [
        "Bụi mịn $PM_{2.5}$ kích thước siêu nhỏ xâm nhập sâu vào phế nang phổi và máu.",
        "Khí độc $CO$ gắn chặt với hemoglobin cản trở vận chuyển oxy trong cơ thể.",
        "Hợp chất hữu cơ dễ bay hơi VOCs và kim loại nặng đe dọa trực tiếp sức khỏe con người."
      ]
    },
    {
      icon: "fa-solid fa-cloud-rain",
      title: "Cơ chế Mưa Acid (pH < 5,6)",
      desc: "Quá trình hình thành axit từ khí thải $SO_2$ và $NO_x$.",
      points: [
        "Khí $SO_2$ và $NO_x$ phản ứng với oxy và hơi nước trong mây tạo $H_2SO_4$ và $HNO_3$.",
        "Mưa acid hòa tan kim loại nặng, chua hóa đất nông nghiệp và hủy diệt sinh vật ao hồ.",
        "Ăn mòn phá hủy nghiêm trọng các công trình kiến trúc bằng đá vôi và sắt thép."
      ]
    },
    {
      icon: "fa-solid fa-radiation",
      title: "Chất thải hạt nhân phóng xạ",
      desc: "Mối hiểm họa vô hình từ bức xạ ion hóa chu kì bán rã lâu dài.",
      points: [
        "Bức xạ ion hóa $\\alpha, \\beta, \\gamma$ phá hủy tế bào sống và làm biến đổi cấu trúc DNA.",
        "Nhiều đồng vị phóng xạ có chu kì bán rã kéo dài hàng chục vạn năm.",
        "Đòi hỏi công nghệ chôn lấp địa chất sâu nhiều lớp cực kì nghiêm ngặt."
      ]
    },
    {
      icon: "fa-solid fa-shield-virus",
      title: "Suy giảm tầng Ozone & Khí CFC",
      desc: "Sự phá hủy lá chắn tia cực tím của Trái Đất bởi hợp chất nhân tạo.",
      points: [
        "Tầng ozone bình lưu hấp thụ $99\\%$ tia cực tím có hại UV-B và UV-C từ Mặt Trời.",
        "Chất CFC giải phóng gốc clo tự do xúc tác phân hủy hàng trăm nghìn phân tử $O_3$.",
        "Nghị định thư Montreal (1987) cấm hoàn toàn CFC đã giúp tầng ozone dần hồi phục."
      ]
    }
  ],
  "10": [
    {
      icon: "fa-solid fa-leaf",
      title: "Năng lượng tái tạo vô tận",
      desc: "Các nguồn năng lượng tự nhiên được bổ sung liên tục và không cạn kiệt.",
      points: [
        "Nguồn tái tạo: Bức xạ Mặt Trời, gió, thủy điện dòng chảy, sinh khối, địa nhiệt và đại dương.",
        "Nguồn không tái tạo: Than đá, dầu mỏ, khí đốt và nhiên liệu hạt nhân urani.",
        "Ưu điểm cốt lõi: Không phát thải khí nhà kính trong quá trình vận hành phát điện."
      ]
    },
    {
      icon: "fa-solid fa-solar-panel",
      title: "Quang điện & Nhiệt Mặt Trời",
      desc: "Khai thác trực tiếp nguồn bức xạ điện từ khổng lồ từ Mặt Trời.",
      points: [
        "Pin quang điện bán dẫn: Chuyển đổi trực tiếp photon ánh sáng thành dòng điện (quang điện trong).",
        "Bình nước nóng năng lượng Mặt Trời: Ống chân không hấp thụ nhiệt và truyền bằng đối lưu tự nhiên.",
        "Bếp Mặt Trời: Gương cầu lõm hội tụ chùm tia song song đạt nhiệt độ nấu nướng cao."
      ]
    },
    {
      icon: "fa-solid fa-wind",
      title: "Điện gió & Khí động học",
      desc: "Biến đổi động năng dòng không khí thành dòng điện năng sạch.",
      points: [
        "Cánh quạt thiết kế biên dạng khí động học tạo lực nâng khí động làm quay turbine.",
        "Hộp số tăng tốc truyền chuyển động quay tới máy phát điện cảm ứng điện từ.",
        "Đặt turbine trên trụ cao ngoài biển khơi để đón luồng gió mạnh và ổn định."
      ]
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Dự án STEM: Turbine gió",
      desc: "Quy trình thiết kế kĩ thuật chế tạo máy phát điện gió mini.",
      points: [
        "Vật liệu: Mô-tơ điện một chiều (DC generator), cánh quạt, trụ đỡ và đèn LED.",
        "Thiết kế góc đón gió tối ưu để đạt vận tốc quay lớn nhất dưới luồng gió quạt.",
        "Kiểm chứng định luật cảm ứng điện từ Faraday khi đèn LED phát sáng ổn định."
      ]
    }
  ]
};

const outputPath = path.join(__dirname, 'cd_vatly10_core_cards.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(coreCards, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/cd_vatly10_core_cards.js with 40 cards across 10 lessons.');
