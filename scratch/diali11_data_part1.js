// scratch/diali11_data_part1.js
// Phần I (Bài 1 - 5) và Phần II - Nhóm 1: Mỹ La tinh & EU (Bài 6 - 10) - Địa lí 11 KNTT

module.exports = {
  1: {
    num: 1,
    part: "Phần I. Một số vấn đề về kinh tế – xã hội thế giới",
    partNum: 1,
    title: "Sự khác biệt về trình độ phát triển kinh tế – xã hội của các nhóm nước",
    badge: "Lí thuyết & Chỉ tiêu",
    summary: "Nắm vững hệ thống chỉ tiêu phân chia các nhóm nước (GNI/người, Cơ cấu kinh tế, HDI) cùng sự khác biệt sâu sắc về kinh tế, đô thị hoá và chất lượng cuộc sống giữa nhóm nước phát triển và đang phát triển.",
    objectives: [
      "Phân tích hệ thống 3 chỉ tiêu cốt lõi dùng để phân chia nhóm nước: GNI/người, cơ cấu kinh tế theo ngành và chỉ số phát triển con người HDI.",
      "So sánh sự khác biệt về quy mô GDP, tốc độ tăng trưởng và trình độ công nghệ giữa nước phát triển và đang phát triển.",
      "Đánh giá đặc điểm dân cư, quá trình đô thị hoá, tuổi thọ và chất lượng giáo dục - y tế giữa hai nhóm nước.",
      "Thực hành khai thác và nhận xét số liệu từ bảng chỉ tiêu kinh tế - xã hội tổng hợp."
    ],
    sections: [
      {
        heading: "1. Căn cứ phân chia các nhóm nước",
        type: "list",
        items: [
          {
            title: "Hệ thống tiêu chí phân loại của Ngân hàng Thế giới (WB) và Liên hợp quốc (UN)",
            desc: "Các nước được xếp thành hai nhóm chính: phát triển và đang phát triển dựa trên một hệ thống chỉ tiêu tổng hợp, không dựa vào một dấu hiệu riêng lẻ.\n• GNI/người (Tổng thu nhập quốc gia bình quân đầu người): Phản ánh mức thu nhập, khả năng tiêu dùng và mức sống của người dân. Ngân hàng Thế giới phân chia 4 mức thu nhập: thấp, trung bình thấp, trung bình cao và cao (ngưỡng phân loại cập nhật định kì theo năm).\n• Cơ cấu kinh tế theo ngành: Tỉ trọng và mối quan hệ giữa nông nghiệp, lâm nghiệp, thuỷ sản; công nghiệp và xây dựng; dịch vụ. Cơ cấu phản ánh trình độ của lực lượng sản xuất, mức độ ứng dụng khoa học công nghệ và sự chuyển dịch của nền kinh tế.\n• Chỉ số phát triển con người (HDI): Chỉ số tổng hợp đánh giá 3 phương diện cơ bản: sức khoẻ (tuổi thọ kì vọng), học vấn (số năm đi học kì vọng và trung bình) và thu nhập (GNI/người). Sách giáo khoa phân nhóm: Rất cao (từ 0,800 trở lên); Cao (0,700 đến dưới 0,800); Trung bình (0,550 đến dưới 0,700); Thấp (dưới 0,550)."
          }
        ]
      },
      {
        heading: "2. Khác biệt về kinh tế và xã hội giữa hai nhóm nước",
        type: "grid",
        items: [
          {
            badge: "Khác biệt Kinh tế",
            title: "Quy mô, cơ cấu & công nghệ",
            points: [
              "Nước phát triển: Quy mô GDP lớn, tốc độ tăng trưởng tương đối ổn định; công nghiệp hoá sớm; ngành dịch vụ chiếm tỉ trọng áp đảo (thường trên 70% GDP); dẫn đầu các cuộc cách mạng công nghiệp; tập trung mạnh vào nghiên cứu - phát triển (R&D) và sản phẩm hàm lượng tri thức cao.",
              "Nước đang phát triển: Quy mô GDP nhìn chung ở mức trung bình hoặc thấp nhưng nhiều quốc gia đạt tốc độ tăng trưởng kinh tế khá cao; cơ cấu kinh tế đang chuyển dịch tích cực theo hướng công nghiệp hoá - hiện đại hoá, tăng tỉ trọng công nghiệp và dịch vụ.",
              "Nguyên tắc so sánh: Cần phối hợp đồng bộ cả GNI/người, cơ cấu kinh tế và HDI; tuyệt đối không đưa ra kết luận đơn thuần chỉ dựa vào quy mô tổng GDP."
            ]
          },
          {
            badge: "Khác biệt Xã hội",
            title: "Dân số, đô thị hoá & chất lượng sống",
            points: [
              "Nước phát triển: Mức sinh và tỉ lệ gia tăng tự nhiên rất thấp, dân số già hoá nhanh dẫn đến nguy cơ thiếu hụt lao động; đô thị hoá sớm, tỉ lệ dân thành thị rất cao, hạ tầng đồng bộ và hiện đại; tuổi thọ trung bình, số năm đi học và chất lượng y tế - giáo dục nhìn chung rất cao.",
              "Nước đang phát triển: Cơ cấu dân số trẻ hoặc đang trong thời kì già hoá; tốc độ đô thị hoá nhanh nhưng tỉ lệ dân đô thị giữa các nước còn chênh lệch; chất lượng cuộc sống, y tế và giáo dục có nhiều tiến bộ nhưng còn phân hoá lớn giữa các nhóm dân cư và vùng lãnh thổ.",
              "Khai thác bảng số liệu: Cần đọc kĩ tên chỉ tiêu, đơn vị, năm thống kê; đối chiếu nhóm nước phát triển (Đức, Hoa Kỳ, Nhật Bản) với nhóm nước đang phát triển (Bra-xin, Nam Phi, Việt Nam)."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Chỉ số phát triển con người (HDI) là thước đo tổng hợp dựa trên 3 phương diện cốt lõi nào?",
        options: [
          "Quy mô GDP, tốc độ tăng trưởng và tỉ lệ lạm phát.",
          "Sức khoẻ (tuổi thọ), học vấn (giáo dục) và thu nhập (GNI/người).",
          "Tỉ lệ dân thành thị, diện tích rừng và mật độ dân số.",
          "Cán cân thương mại, vốn FDI và sản lượng điện bình quân."
        ],
        ans: 1,
        explain: "HDI được tính toán tổng hợp từ 3 trụ cột: Sức khoẻ (thể hiện qua tuổi thọ kì vọng khi sinh), Tri thức (số năm đi học kì vọng và trung bình) và Mức sống (thu nhập bình quân GNI/người)."
      },
      {
        q: "Đặc điểm nổi bật về cơ cấu kinh tế của các quốc gia thuộc nhóm nước phát triển là:",
        options: [
          "Nông nghiệp chiếm tỉ trọng cao nhất do sở hữu nhiều đồng bằng phì nhiêu.",
          "Công nghiệp khai khoáng và luyện kim chiếm ưu thế tuyệt đối.",
          "Ngành dịch vụ chiếm tỉ trọng áp đảo trong cơ cấu GDP, tập trung vào công nghệ cao và kinh tế tri thức.",
          "Tỉ trọng công nghiệp xây dựng và nông nghiệp tương đương nhau."
        ],
        ans: 2,
        explain: "Các nước phát triển đã hoàn thành công nghiệp hoá sớm và chuyển mạnh sang giai đoạn hậu công nghiệp, trong đó ngành dịch vụ chiếm tỉ trọng rất cao (thường trên 70% GDP)."
      },
      {
        q: "Một quốc gia được xếp vào nhóm có chỉ số HDI 'Rất cao' khi đạt mức điểm nào sau đây?",
        options: [
          "Từ 0,550 đến dưới 0,700.",
          "Từ 0,700 đến dưới 0,800.",
          "Từ 0,800 trở lên.",
          "Dưới 0,550."
        ],
        ans: 2,
        explain: "Theo phân nhóm của Liên hợp quốc nêu trong SGK: HDI rất cao từ 0,800 trở lên; cao từ 0,700 đến dưới 0,800; trung bình từ 0,550 đến dưới 0,700; thấp dưới 0,550."
      }
    ]
  },

  2: {
    num: 2,
    part: "Phần I. Một số vấn đề về kinh tế – xã hội thế giới",
    partNum: 1,
    title: "Toàn cầu hoá và khu vực hoá kinh tế",
    badge: "Xu thế liên kết quốc tế",
    summary: "Hiểu rõ bản chất, biểu hiện, hệ quả tích cực và thách thức của toàn cầu hoá kinh tế; đồng thời nắm vững cơ chế, ý nghĩa của quá trình khu vực hoá kinh tế trên phạm vi toàn cầu.",
    objectives: [
      "Trình bày khái niệm, các biểu hiện chủ yếu và hệ quả đa chiều của toàn cầu hoá kinh tế.",
      "Phân tích vai trò của các tổ chức kinh tế toàn cầu (WTO, IMF, WB) và các công ty đa quốc gia (TNCs).",
      "Giải thích nguyên nhân, biểu hiện và ý nghĩa của xu thế khu vực hoá kinh tế đối với sự phát triển của các quốc gia.",
      "Nhận thức đúng đắn mối liên hệ giữa hội nhập kinh tế quốc tế với bảo vệ môi trường và tăng trưởng xanh."
    ],
    sections: [
      {
        heading: "1. Toàn cầu hoá kinh tế: Biểu hiện và hệ quả",
        type: "list",
        items: [
          {
            title: "Khái niệm và các biểu hiện đặc trưng",
            desc: "Toàn cầu hoá kinh tế là quá trình liên kết các nền kinh tế trên phạm vi toàn thế giới, làm tăng nhanh sự lưu chuyển dòng hàng hoá, dịch vụ, vốn, thông tin và công nghệ, gia tăng mức độ phụ thuộc lẫn nhau giữa các quốc gia.\n• Hàng hoá, dịch vụ, vốn, lao động và tri thức dịch chuyển ngày càng tự do; số lượng các hiệp định thương mại song phương và đa phương (FTA) tăng mạnh.\n• Giao dịch thương mại, đầu tư và tài chính quốc tế tăng trưởng nhanh chóng; hình thành nhiều phương thức giao dịch hiện đại như thương mại điện tử, thanh toán số.\n• Vai trò chi phối của các tổ chức tài chính - thương mại toàn cầu như Tổ chức Thương mại Thế giới (WTO), Quỹ Tiền tệ Quốc tế (IMF), Ngân hàng Thế giới (WB).\n• Các công ty đa quốc gia (TNCs) không ngừng mở rộng mạng lưới sản xuất - kinh doanh, nắm giữ và chi phối nhiều chuỗi giá trị và chuỗi cung ứng toàn cầu.\n• Các hệ thống tiêu chuẩn quốc tế về chất lượng, an toàn thực phẩm và bảo vệ môi trường (ISO, GlobalGAP, tiêu chuẩn phát thải carbon) được áp dụng ngày càng rộng rãi."
          },
          {
            title: "Hệ quả tích cực và thách thức nảy sinh",
            desc: "• Tác động tích cực: Thúc đẩy phân công lao động quốc tế, tăng chuyên môn hoá và hợp tác sản xuất; kích thích chuyển giao và đổi mới công nghệ; mở rộng không gian thị trường; tạo cơ hội thu hút vốn đầu tư FDI, nâng cao năng suất và năng lực cạnh tranh quốc gia; thúc đẩy cải cách thể chế và hạ tầng.\n• Thách thức và mặt trái: Làm gia tăng mức độ phụ thuộc lẫn nhau, khiến các cuộc khủng hoảng kinh tế, biến động tài chính hay đứt gãy chuỗi cung ứng lây lan nhanh chóng; gia tăng nguy cơ đào sâu khoảng cách giàu nghèo và chênh lệch phát triển giữa các nhóm nước.\n• Sức ép môi trường: Sản xuất, khai khoáng và vận tải quy mô lớn làm gia tăng phát thải khí nhà kính, cạn kiệt tài nguyên và ô nhiễm xuyên biên giới; đòi hỏi phải gắn chặt quá trình hội nhập với chiến lược tăng trưởng xanh và trách nhiệm xã hội."
          }
        ]
      },
      {
        heading: "2. Khu vực hoá kinh tế",
        type: "grid",
        items: [
          {
            badge: "Khái niệm & Biểu hiện",
            title: "Liên kết khu vực dựa trên lợi ích chung",
            points: [
              "Bản chất: Là quá trình liên kết, hợp tác kinh tế sâu rộng giữa các quốc gia trong cùng một khu vực địa lí dựa trên sự tương đồng về vị trí, lịch sử, văn hoá, xã hội hoặc vì lợi ích phát triển chung.",
              "Biểu hiện: Số lượng và quy mô các tổ chức liên kết kinh tế khu vực tăng nhanh với nhiều cấp độ hợp tác đa dạng. Ví dụ tiêu biểu: APEC (Diễn đàn Hợp tác kinh tế châu Á - Thái Bình Dương), ASEAN (Hiệp hội các quốc gia Đông Nam Á), EU (Liên minh châu Âu), MERCOSUR (Khối thị trường chung Nam Mỹ)."
            ]
          },
          {
            badge: "Hệ quả & Ý nghĩa",
            title: "Thúc đẩy thị trường & Vị thế khu vực",
            points: [
              "Hệ quả: Mở rộng dung lượng thị trường nội khối, đẩy mạnh tự do hoá thương mại và đầu tư giữa các nước thành viên; doanh nghiệp được hưởng ưu đãi thuế quan; đồng thời một số liên kết có thể tạo lập hàng rào bảo hộ với bên ngoài.",
              "Ý nghĩa: Giúp các quốc gia phối hợp hiệu quả để giải quyết các vấn đề chung (an ninh nguồn nước, môi trường, biến đổi khí hậu), tận dụng tối đa lợi thế bổ sung cho nhau, nâng cao sức cạnh tranh và củng cố vị thế địa - chính trị; khu vực hoá vừa bổ sung vừa thúc đẩy toàn cầu hoá."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Quá trình liên kết các nền kinh tế trên phạm vi toàn thế giới làm tăng sự lưu chuyển và phụ thuộc lẫn nhau được gọi là:",
        options: [
          "Đô thị hoá toàn cầu.",
          "Toàn cầu hoá kinh tế.",
          "Khu vực hoá chính trị.",
          "Thương mại hoá dịch vụ."
        ],
        ans: 1,
        explain: "Toàn cầu hoá kinh tế là quá trình liên kết các nền kinh tế trên phạm vi toàn thế giới, thúc đẩy sự lưu chuyển tự do của hàng hoá, dịch vụ, vốn, lao động và công nghệ giữa các quốc gia."
      },
      {
        q: "Một trong những biểu hiện rõ rệt nhất của xu thế toàn cầu hoá kinh tế hiện nay là:",
        options: [
          "Các quốc gia tuyệt đối đóng cửa biên giới nhằm bảo hộ sản xuất trong nước.",
          "Xoá bỏ hoàn toàn các liên minh kinh tế khu vực để thành lập chính phủ chung.",
          "Sự mở rộng mạng lưới sản xuất và chi phối chuỗi giá trị toàn cầu của các công ty đa quốc gia (TNCs).",
          "Giảm thiểu việc áp dụng các tiêu chuẩn chất lượng và an toàn môi trường quốc tế."
        ],
        ans: 2,
        explain: "Các công ty đa quốc gia (TNCs) đóng vai trò nòng cốt trong toàn cầu hoá thông qua việc đầu tư trực tiếp, liên kết sản xuất và kiểm soát phần lớn các chuỗi cung ứng toàn cầu."
      },
      {
        q: "Tổ chức nào sau đây KHÔNG phải là tổ chức liên kết kinh tế mang tính khu vực?",
        options: [
          "ASEAN (Hiệp hội các quốc gia Đông Nam Á).",
          "EU (Liên minh châu Âu).",
          "WTO (Tổ chức Thương mại Thế giới).",
          "MERCOSUR (Khối thị trường chung Nam Mỹ)."
        ],
        ans: 2,
        explain: "WTO là Tổ chức Thương mại Thế giới có phạm vi hoạt động toàn cầu, không phải là tổ chức liên kết kinh tế mang tính khu vực như ASEAN, EU hay MERCOSUR."
      }
    ]
  },

  3: {
    num: 3,
    part: "Phần I. Một số vấn đề về kinh tế – xã hội thế giới",
    partNum: 1,
    title: "Thực hành: Tìm hiểu cơ hội, thách thức của toàn cầu hoá và khu vực hoá kinh tế",
    badge: "Kĩ năng thực hành & Báo cáo",
    summary: "Rèn luyện kĩ năng thu thập tư liệu, phân tích số liệu thống kê và lập dàn ý bài báo cáo về cơ hội, thách thức của toàn cầu hoá và khu vực hoá đối với các nước đang phát triển.",
    objectives: [
      "Xác định rõ ràng và tách biệt cơ hội, thách thức từ toàn cầu hoá với cơ hội, thách thức từ khu vực hoá đối với các nước đang phát triển.",
      "Khai thác dẫn chứng số liệu thực tế có trích dẫn nguồn và năm thống kê cụ thể.",
      "Đề xuất các nhóm giải pháp chủ động thích ứng và tận dụng thời cơ hội nhập quốc tế."
    ],
    sections: [
      {
        heading: "1. Cấu trúc và phương pháp xây dựng báo cáo",
        type: "list",
        items: [
          {
            title: "Yêu cầu phương pháp luận khi viết báo cáo cho nước đang phát triển",
            desc: "Khi viết báo cáo địa lí cho một nước đang phát triển (ví dụ Việt Nam), cần tách bạch rành mạch hai quá trình để tránh nhầm lẫn giữa toàn cầu hoá và khu vực hoá:\n• Phần 1: Cơ hội và thách thức do toàn cầu hoá tạo ra (tiếp cận thị trường xuất khẩu toàn cầu, dòng vốn FDI, chuyển giao công nghệ mới; đi kèm áp lực cạnh tranh gay gắt, nguy cơ phụ thuộc kinh tế, bất bình đẳng xã hội và ô nhiễm môi trường do chuyển giao công nghệ lạc hậu).\n• Phần 2: Cơ hội và thách thức do khu vực hoá tạo ra (tiếp cận thuận lợi thị trường nội khối nhờ ưu đãi thuế quan, tham gia chuỗi sản xuất khu vực; đồng thời chịu sự cạnh tranh trực tiếp từ các nước có cơ cấu kinh tế tương đồng, sức ép tuân thủ các quy tắc xuất xứ nội khối).\n• Dẫn chứng và giải pháp: Sử dụng số liệu chính xác có ghi rõ năm và nguồn tin cậy; kết luận bằng các giải pháp chiến lược như nâng cao chất lượng nguồn nhân lực, cải cách thể chế, đầu tư hạ tầng logistics và chuyển đổi số."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Đối với các nước đang phát triển, cơ hội lớn nhất mà toàn cầu hoá kinh tế đem lại trong sản xuất là:",
        options: [
          "Xoá bỏ hoàn toàn nguy cơ rủi ro và khủng hoảng kinh tế.",
          "Tiếp cận thị trường tiêu thụ rộng lớn, thu hút vốn đầu tư FDI và tiếp nhận chuyển giao công nghệ hiện đại.",
          "Không phải cạnh tranh với hàng hoá của các tập đoàn nước ngoài.",
          "Không cần tuân thủ các cam kết và tiêu chuẩn bảo vệ môi trường."
        ],
        ans: 1,
        explain: "Toàn cầu hoá mở ra cơ hội to lớn cho các nước đang phát triển mở rộng thị trường xuất khẩu, đón đầu công nghệ tiên tiến và bổ sung nguồn vốn đầu tư phát triển từ bên ngoài."
      },
      {
        q: "Thách thức lớn về mặt xã hội mà các nước đang phát triển thường phải đối mặt trong quá trình hội nhập toàn cầu hoá là:",
        options: [
          "Sự gia tăng khoảng cách chênh lệch giàu nghèo và phân hoá xã hội.",
          "Tỉ lệ dân số trong độ tuổi lao động tăng lên quá nhanh.",
          "Năng suất lao động xã hội tăng trưởng vượt bậc.",
          "Hạ tầng giao thông và viễn thông được hiện đại hoá đồng bộ."
        ],
        ans: 0,
        explain: "Toàn cầu hoá có thể khiến chênh lệch giàu nghèo và phân hoá xã hội gia tăng nếu các nhóm yếu thế không kịp thời thích ứng hoặc không được chia sẻ công bằng thành quả phát triển."
      },
      {
        q: "Khi viết báo cáo tìm hiểu về toàn cầu hoá và khu vực hoá, nguyên tắc quan trọng nhất trong việc xử lí số liệu là:",
        options: [
          "Chỉ sử dụng số liệu ước lượng cảm tính, không cần nguồn dẫn.",
          "Sử dụng số liệu có đơn vị rõ ràng, ghi rõ năm thống kê và nguồn trích dẫn đáng tin cậy.",
          "Thay đổi số liệu liên tục giữa các giai đoạn mà không giải thích.",
          "Chỉ lấy số liệu của một quốc gia phát triển nhất để đại diện cho toàn thế giới."
        ],
        ans: 1,
        explain: "Báo cáo khoa học địa lí bắt buộc phải đảm bảo tính chính xác, khách quan của số liệu bằng việc ghi rõ đơn vị tính, mốc thời gian và trích dẫn nguồn uy tín."
      }
    ]
  },

  4: {
    num: 4,
    part: "Phần I. Một số vấn đề về kinh tế – xã hội thế giới",
    partNum: 1,
    title: "Một số tổ chức quốc tế và khu vực, an ninh toàn cầu",
    badge: "Thể chế quốc tế & An ninh",
    summary: "Nắm vững vai trò của các tổ chức quốc tế lớn (UN, WTO, IMF, APEC), phân biệt an ninh truyền thống và an ninh phi truyền thống, cùng các thách thức về an ninh lương thực, năng lượng, nguồn nước và an ninh mạng.",
    objectives: [
      "Trình bày tôn chỉ, mục tiêu và năm gia nhập của Việt Nam đối với các tổ chức: Liên hợp quốc (UN), WTO, IMF, APEC.",
      "Phân biệt an ninh truyền thống (chính trị, quân sự) và an ninh phi truyền thống (lương thực, năng lượng, nguồn nước, không gian mạng).",
      "Phân tích nguyên nhân và giải pháp ứng phó với các vấn đề an ninh toàn cầu cấp bách hiện nay.",
      "Khẳng định ý nghĩa sống còn của việc bảo vệ hoà bình thế giới đối với sự phát triển bền vững."
    ],
    sections: [
      {
        heading: "1. Các tổ chức quốc tế và khu vực quan trọng",
        type: "list",
        items: [
          {
            title: "Bốn tổ chức then chốt và sự tham gia của Việt Nam",
            desc: "• Liên hợp quốc (UN): Thành lập năm 1945; mục tiêu cao nhất là duy trì hoà bình và an ninh quốc tế, phát triển quan hệ hữu nghị giữa các dân tộc, thúc đẩy hợp tác quốc tế giải quyết các vấn đề kinh tế - xã hội và bảo đảm quyền con người (193 thành viên năm 2021; Việt Nam chính thức tham gia từ năm 1977).\n• Tổ chức Thương mại Thế giới (WTO): Hoạt động từ năm 1995; thiết lập khuôn khổ thương mại đa phương, giải quyết tranh chấp thương mại, hỗ trợ thương mại minh bạch và công bằng (164 thành viên năm 2021; Việt Nam gia nhập năm 2007).\n• Quỹ Tiền tệ Quốc tế (IMF): Thành lập năm 1944; thúc đẩy hợp tác tiền tệ quốc tế, duy trì ổn định tài chính và tỉ giá hối đoái, cung cấp hỗ trợ tài chính tạm thời cho các quốc gia gặp khó khăn cán cân thanh toán (190 thành viên năm 2021; Việt Nam tham gia năm 1976).\n• Diễn đàn Hợp tác Kinh tế châu Á – Thái Bình Dương (APEC): Thành lập năm 1989; thúc đẩy tự do hoá thương mại, đầu tư và hợp tác kinh tế mở trong khu vực châu Á - Thái Bình Dương (21 nền kinh tế thành viên; Việt Nam gia nhập năm 1998)."
          }
        ]
      },
      {
        heading: "2. Vấn đề an ninh toàn cầu và bảo vệ hoà bình",
        type: "grid",
        items: [
          {
            badge: "Phân loại An ninh",
            title: "Truyền thống & Phi truyền thống",
            points: [
              "An ninh truyền thống: Gắn liền chủ yếu với quốc phòng, quân sự, bảo vệ chủ quyền biên giới quốc gia, ngăn ngừa chiến tranh và xung đột vũ trang quy ước.",
              "An ninh phi truyền thống: Các mối đe dọa xuyên biên giới phi quân sự tác động trực tiếp đến sự tồn vong của nhân loại: an ninh lương thực, an ninh năng lượng, an ninh nguồn nước và an ninh mạng."
            ]
          },
          {
            badge: "Thách thức Cấp bách",
            title: "Lương thực, Năng lượng, Nước & Mạng",
            points: [
              "An ninh lương thực: Bảo đảm mọi người dân tiếp cận lương thực đủ, an toàn; thách thức do chiến tranh, biến đổi khí hậu, thiên tai và đứt gãy logistics; giải pháp gồm cứu trợ khẩn cấp, nông nghiệp bền vững qua FAO, WFP.",
              "An ninh năng lượng: Cung ứng năng lượng ổn định; rủi ro do xung đột địa - chính trị và biến động giá dầu; giải pháp là tiết kiệm, đa dạng hoá nguồn và chuyển đổi năng lượng tái tạo.",
              "An ninh nguồn nước: Thiếu nước sạch, ô nhiễm và xung đột lưu vực sông quốc tế; giải pháp là quản lí tổng hợp lưu vực, chống lãng phí, tái chế nước thải.",
              "An ninh mạng: Bảo vệ hạ tầng số, dữ liệu và phòng chống tấn công mạng, thông tin sai lệch; cần hoàn thiện luật pháp số và hợp tác an ninh mạng quốc tế."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Việt Nam chính thức trở thành thành viên của Tổ chức Thương mại Thế giới (WTO) vào năm nào?",
        options: [
          "Năm 1977.",
          "Năm 1995.",
          "Năm 1998.",
          "Năm 2007."
        ],
        ans: 3,
        explain: "Việt Nam chính thức gia nhập WTO vào năm 2007 (trong khi gia nhập UN năm 1977, IMF năm 1976, ASEAN năm 1995, APEC năm 1998)."
      },
      {
        q: "Vấn đề nào sau đây thuộc phạm trù an ninh phi truyền thống?",
        options: [
          "Xung đột quân sự biên giới.",
          "Chiến tranh vũ trang quy ước.",
          "An ninh nguồn nước và an ninh mạng.",
          "Chạy đua vũ trang hạt nhân giữa các cường quốc."
        ],
        ans: 2,
        explain: "An ninh phi truyền thống bao gồm các hiểm hoạ phi quân sự mang tính toàn cầu như an ninh lương thực, năng lượng, nguồn nước, an ninh mạng và biến đổi khí hậu."
      },
      {
        q: "Mục tiêu trọng tâm hàng đầu của Liên hợp quốc (UN) kể từ khi thành lập năm 1945 là:",
        options: [
          "Xây dựng liên minh tiền tệ dùng chung cho toàn cầu.",
          "Duy trì hoà bình và an ninh quốc tế, phát triển quan hệ hữu nghị giữa các dân tộc.",
          "Áp đặt mức thuế quan bắt buộc lên toàn bộ hàng hoá xuất nhập khẩu.",
          "Kiểm soát toàn diện các tập đoàn công nghệ đa quốc gia."
        ],
        ans: 1,
        explain: "Hiến chương Liên hợp quốc xác định sứ mệnh hàng đầu là duy trì hoà bình và an ninh quốc tế, ngăn ngừa nguy cơ bùng nổ chiến tranh thế giới mới."
      }
    ]
  },

  5: {
    num: 5,
    part: "Phần I. Một số vấn đề về kinh tế – xã hội thế giới",
    partNum: 1,
    title: "Thực hành: Viết báo cáo về đặc điểm và biểu hiện của nền kinh tế tri thức",
    badge: "Kĩ năng thực hành & Báo cáo",
    summary: "Hiểu rõ khái niệm, đặc điểm cốt lõi và biểu hiện sinh động của nền kinh tế tri thức; rèn luyện kĩ năng viết báo cáo phân tích vai trò của khoa học, công nghệ và lao động trí tuệ.",
    objectives: [
      "Nêu khái niệm và phân tích các đặc điểm của nền kinh tế tri thức.",
      "Chỉ ra những biểu hiện cụ thể của kinh tế tri thức trong cơ cấu kinh tế, sản xuất công nghệ và nguồn nhân lực.",
      "Viết bài báo cáo hoàn chỉnh có cấu trúc logic, luận cứ xác thực và dẫn chứng thuyết phục."
    ],
    sections: [
      {
        heading: "1. Khái niệm, đặc điểm và biểu hiện của nền kinh tế tri thức",
        type: "list",
        items: [
          {
            title: "Khái niệm và đặc điểm cốt lõi",
            desc: "• Khái niệm: Nền kinh tế tri thức là nền kinh tế phát triển chủ yếu dựa trên tri thức, khoa học công nghệ và khả năng khai thác, sử dụng tri thức một cách hiệu quả để tạo ra giá trị gia tăng cao, cải tiến công nghệ và nâng cao chất lượng cuộc sống.\n• Đặc điểm chủ yếu: Tri thức và thông tin trở thành lực lượng sản xuất trực tiếp và là nguồn lực quan trọng nhất; sản xuất công nghiệp - dịch vụ dựa ngày càng nhiều vào nghiên cứu khoa học và phát minh sáng chế; lao động trí tuệ và học tập suốt đời được coi trọng hàng đầu; quyền sở hữu trí tuệ đóng vai trò quyết định giá trị doanh nghiệp; quá trình sản xuất kết nối chặt chẽ trong chuỗi giá trị và chuỗi cung ứng toàn cầu."
          },
          {
            title: "Biểu hiện cụ thể trong nền kinh tế",
            desc: "• Cơ cấu ngành: Thay đổi nhanh chóng theo hướng gia tăng mạnh mẽ tỉ trọng các ngành dịch vụ tri thức cao (tài chính số, phần mềm, viễn thông, y sinh) và công nghiệp công nghệ cao (bán dẫn, robot, AI).\n• Đổi mới sáng tạo: Tốc độ thương mại hoá các phát minh khoa học diễn ra nhanh chóng; mức đầu tư cho hoạt động R&D chiếm tỉ lệ cao trong tổng GDP.\n• Nguồn nhân lực: Đòi hỏi chuyển dịch mạnh về cơ cấu và chất lượng lao động, yêu cầu kĩ năng số, tư duy sáng tạo và khả năng thích ứng linh hoạt."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Yếu tố nào sau đây đóng vai trò là lực lượng sản xuất trực tiếp và nguồn lực then chốt nhất trong nền kinh tế tri thức?",
        options: [
          "Tài nguyên khoáng sản thô.",
          "Tri thức và khoa học - công nghệ.",
          "Lực lượng lao động cơ bắp phổ thông.",
          "Diện tích đất canh tác nông nghiệp."
        ],
        ans: 1,
        explain: "Trong nền kinh tế tri thức, tri thức khoa học, ý tưởng sáng tạo và công nghệ hiện đại thay thế tài nguyên thiên nhiên để trở thành động lực phát triển then chốt nhất."
      },
      {
        q: "Một trong những biểu hiện rõ nét của nền kinh tế tri thức trong cơ cấu ngành là:",
        options: [
          "Tăng tỉ trọng khai thác khoáng sản xuất khẩu thô.",
          "Tăng mạnh tỉ trọng các ngành công nghệ cao, dịch vụ giá trị gia tăng lớn như AI, bán dẫn, công nghệ thông tin.",
          "Đóng cửa các trường đại học để ưu tiên lao động giản đơn.",
          "Giảm nguồn vốn đầu tư cho nghiên cứu và phát triển (R&D)."
        ],
        ans: 1,
        explain: "Kinh tế tri thức biểu hiện qua sự bùng nổ của các ngành công nghệ cao (bán dẫn, AI, tự động hoá) và dịch vụ tri thức số có hàm lượng giá trị gia tăng cao."
      },
      {
        q: "Trong nền kinh tế tri thức, tài sản nào sau đây ngày càng trở nên vô cùng quan trọng và có giá trị quyết định đối với các doanh nghiệp?",
        options: [
          "Quyền sở hữu trí tuệ, bản quyền sáng chế và nhãn hiệu công nghệ.",
          "Số lượng xe chở hàng truyền thống.",
          "Khối lượng than đá tích trữ trong kho.",
          "Quy mô diện tích kho bãi chứa vật tư thô."
        ],
        ans: 0,
        explain: "Quyền sở hữu trí tuệ, bằng phát minh sáng chế, bí quyết công nghệ và thương hiệu là những tài sản vô hình có giá trị kinh tế lớn nhất trong nền kinh tế tri thức."
      }
    ]
  },

  6: {
    num: 6,
    part: "Phần II. Địa lí khu vực và quốc gia",
    partNum: 2,
    subRegion: "Khu vực Mỹ La tinh",
    title: "Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội khu vực Mỹ La tinh",
    badge: "Địa lí tự nhiên & Xã hội Mỹ La tinh",
    summary: "Nắm vững phạm vi lãnh thổ rộng lớn 20 triệu km² ở bán cầu Tây, sự phân hoá địa hình - khí hậu đặc sắc (dãy An-đét, đồng bằng A-ma-dôn), tài nguyên trù phú, đặc điểm dân cư đa chủng tộc và thách thức đô thị hoá tự phát.",
    objectives: [
      "Xác định vị trí địa lí, phạm vi lãnh thổ của khu vực Mỹ La tinh và ý nghĩa kinh tế - hàng hải của kênh đào Pa-na-ma.",
      "Phân tích đặc điểm địa hình, khí hậu, sông ngòi và tài nguyên rừng - khoáng sản nổi bật.",
      "Đánh giá các đặc trưng dân cư (quy mô, thời kì dân số vàng, đa chủng tộc) và thực trạng đô thị hoá tự phát, chênh lệch giàu nghèo."
    ],
    sections: [
      {
        heading: "1. Vị trí địa lí và phạm vi lãnh thổ",
        type: "list",
        items: [
          {
            title: "Không gian địa lí rộng lớn ở bán cầu Tây",
            desc: "Mỹ La tinh có diện tích khoảng 20 triệu km², bao gồm Mê-hi-cô, eo đất Trung Mỹ, các đảo và quần đảo Ca-ri-bê cùng toàn bộ lục địa Nam Mỹ.\n• Tiếp giáp biển rộng mở: Toàn bộ nằm ở bán cầu Tây, tiếp giáp Đại Tây Dương ở phía đông, Thái Bình Dương ở phía tây và phía nam giáp Nam Đại Dương; phía bắc giáp Hoa Kỳ và Ca-na-đa.\n• Vị trí chiến lược của kênh đào Pa-na-ma: Cắt qua eo đất Trung Mỹ nối liền Đại Tây Dương và Thái Bình Dương, có ý nghĩa giao thương hàng hải toàn cầu đặc biệt to lớn, rút ngắn hàng nghìn hải lí hành trình.\n• Đánh giá vị trí: Thuận lợi phát triển kinh tế biển, giao thương quốc tế và du lịch; nằm gần thị trường khổng lồ Hoa Kỳ vừa tạo cơ hội thu hút đầu tư, xuất khẩu nhưng cũng tiềm ẩn rủi ro phụ thuộc kinh tế."
          }
        ]
      },
      {
        heading: "2. Điều kiện tự nhiên và tài nguyên thiên nhiên",
        type: "grid",
        items: [
          {
            badge: "Địa hình & Khí hậu",
            title: "Dãy An-đét & Đồng bằng A-ma-dôn",
            points: [
              "Địa hình phân hoá tây - đông: Phía tây là hệ thống núi trẻ cao, hiểm trở (sơn nguyên Mê-hi-cô, dãy An-đét dài trên 7000 km) chia cắt mạnh, giao thông khó khăn, thường xuyên có động đất và núi lửa; Phía đông là các sơn nguyên cổ (Guy-a-na, Bra-xin) và các đồng bằng rộng lớn (A-ma-dôn lớn nhất thế giới, La-nốt, La Pla-ta).",
              "Khí hậu phần lớn nóng ẩm: Do lãnh thổ trải dài qua nhiều vĩ độ và địa hình cao, khí hậu phân hoá đa dạng: xích đạo (A-ma-dôn quanh năm nóng ẩm), cận xích đạo, nhiệt đới, cận nhiệt, ôn đới ở phía nam và khí hậu núi cao phân hoá theo đai cao ở dãy An-đét."
            ]
          },
          {
            badge: "Sông ngòi & Tài nguyên",
            title: "Hệ thống A-ma-dôn & Khoáng sản phong phú",
            points: [
              "Sông ngòi dày đặc: Sông A-ma-dôn có lưu vực và lượng nước lớn nhất thế giới; hệ thống sông La Pla-ta giàu tiềm năng thuỷ điện, giao thông thuỷ và cung cấp nước.",
              "Tài nguyên phong phú: Rừng nhiệt đới A-ma-dôn (lá phổi xanh của Trái Đất, đa dạng sinh học vô giá); khoáng sản kim loại màu và dầu khí trữ lượng lớn (dầu mỏ ở Vê-nê-xu-ê-la, Mê-hi-cô; đồng ở Chi-lê; sắt ở Bra-xin; bạc ở Mê-hi-cô). Thách thức lớn là nạn chặt phá rừng và khai khoáng huỷ hoại môi trường."
            ]
          }
        ]
      },
      {
        heading: "3. Dân cư, đô thị hoá và xã hội",
        type: "list",
        items: [
          {
            title: "Quy mô dân số, đa văn hoá và đô thị hoá tự phát",
            desc: "• Dân số và cơ cấu: Năm 2020 đạt khoảng 652,3 triệu người; đang trong thời kì cơ cấu dân số vàng nhưng tốc độ già hoá bắt đầu tăng; thành phần dân cư đa dạng kết hợp người bản địa (Anh-điêng), người gốc Âu, gốc Phi và người lai tạo nên nền văn hoá Mỹ La tinh độc đáo, giàu bản sắc.\n• Phân bố dân cư không đều: Mật độ trung bình khoảng 33 người/km²; dân cư tập trung đông ở các đảo Ca-ri-bê, dải ven biển, các đồng bằng và cao nguyên; thưa thớt ở vùng núi cao An-đét và vùng rừng rậm A-ma-dôn.\n• Đô thị hoá rất cao nhưng tự phát: Khoảng 80% dân số sống ở đô thị năm 2020; hình thành nhiều siêu đô thị hàng đầu thế giới như Xao Pao-lô, Mê-hi-cô Xi-ti, Bu-ê-nốt Ai-rét, Ri-ô đê Gia-nê-rô. Do đô thị hoá không gắn liền với công nghiệp hoá tương xứng nên phát sinh nhiều hệ luỵ: khu ổ chuột (favelas), tỉ lệ thất nghiệp, ô nhiễm môi trường, tội phạm và chênh lệch giàu nghèo gay gắt."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Công trình nhân tạo có ý nghĩa chiến lược hàng hải toàn cầu nối liền Đại Tây Dương và Thái Bình Dương ở Mỹ La tinh là:",
        options: [
          "Kênh đào Xuy-ê.",
          "Kênh đào Pa-na-ma.",
          "Kênh đào Ki-en.",
          "Kênh đào Crông-xtát."
        ],
        ans: 1,
        explain: "Kênh đào Pa-na-ma cắt qua eo đất Pa-na-ma (Trung Mỹ), nối liền Đại Tây Dương với Thái Bình Dương, rút ngắn hải trình giữa các bờ đại dương."
      },
      {
        q: "Đồng bằng có diện tích lớn nhất thế giới, được bao phủ bởi rừng mưa nhiệt đới ở Mỹ La tinh là:",
        options: [
          "Đồng bằng La-nốt.",
          "Đồng bằng La Pla-ta.",
          "Đồng bằng A-ma-dôn.",
          "Đồng bằng Pam-pa."
        ],
        ans: 2,
        explain: "Đồng bằng A-ma-dôn rộng khoảng 5 triệu km², phần lớn nằm trên lãnh thổ Bra-xin, được bao phủ bởi rừng mưa nhiệt đới A-ma-dôn rộng lớn nhất hành tinh."
      },
      {
        q: "Một trong những thách thức xã hội lớn nhất phát sinh từ quá trình đô thị hoá ở Mỹ La tinh là:",
        options: [
          "Tỉ lệ dân thành thị quá thấp khiến kinh tế đình trệ.",
          "Đô thị hoá tự phát tạo ra nhiều khu nhà ổ chuột, gia tăng thất nghiệp và chênh lệch giàu nghèo.",
          "Thiếu hụt trầm trọng lao động phổ thông ở các thành phố.",
          "Không có bất kì siêu đô thị nào trên 10 triệu dân."
        ],
        ans: 1,
        explain: "Khoảng 80% dân số Mỹ La tinh sống ở đô thị nhưng do đô thị hoá tự phát không đi đôi với công nghiệp hoá bền vững nên tạo ra các khu nhà ổ chuột lớn, thất nghiệp và tệ nạn xã hội."
      }
    ]
  },

  7: {
    num: 7,
    part: "Phần II. Địa lí khu vực và quốc gia",
    partNum: 2,
    subRegion: "Khu vực Mỹ La tinh",
    title: "Kinh tế khu vực Mỹ La tinh",
    badge: "Kinh tế khu vực Mỹ La tinh",
    summary: "Nắm vững quy mô đóng góp GDP, sự chuyển dịch cơ cấu ngành kinh tế, thế mạnh nông nghiệp nhiệt đới, công nghiệp khai khoáng - chế tạo và tiềm năng dịch vụ du lịch, thương mại của Mỹ La tinh.",
    objectives: [
      "Phân tích quy mô GDP, tính thiếu ổn định trong tăng trưởng kinh tế và xu hướng chuyển dịch cơ cấu ngành tại Mỹ La tinh.",
      "Đánh giá sự phát triển và phân bố các ngành nông nghiệp (cà phê, đậu tương, mía, ngô, bò thịt) và công nghiệp (khai khoáng, dầu khí, ô tô).",
      "Trình bày vai trò của ngành dịch vụ, hoạt động ngoại thương và tiềm năng du lịch biển đảo Ca-ri-bê."
    ],
    sections: [
      {
        heading: "1. Bức tranh chung về kinh tế Mỹ La tinh",
        type: "list",
        items: [
          {
            title: "Quy mô GDP, tốc độ tăng trưởng và sự chuyển dịch",
            desc: "• Quy mô kinh tế: Mỹ La tinh đóng góp khoảng 6% GDP toàn cầu năm 2020; các nền kinh tế có quy mô lớn nhất khu vực là Bra-xin, Mê-hi-cô và Ác-hen-ti-na.\n• Tăng trưởng thiếu ổn định: Tốc độ tăng trưởng GDP nhìn chung còn bấp bênh qua các giai đoạn do phụ thuộc nhiều vào giá cả nguyên liệu thô trên thị trường thế giới, vốn đầu tư và thị trường xuất khẩu bên ngoài, nợ nước ngoài cao cùng bất ổn chính trị - xã hội tại một số quốc gia.\n• Chuyển dịch cơ cấu: Cơ cấu ngành kinh tế có xu hướng tăng nhanh tỉ trọng ngành dịch vụ (chiếm khoảng 60% GDP), công nghiệp và xây dựng chiếm khoảng 30%, nông nghiệp chiếm khoảng 6-10% GDP."
          }
        ]
      },
      {
        heading: "2. Các ngành kinh tế trọng điểm",
        type: "grid",
        items: [
          {
            badge: "Nông nghiệp & Công nghiệp",
            title: "Cây nhiệt đới & Khai khoáng quy mô lớn",
            points: [
              "Nông nghiệp nhiệt đới hàng hoá: Điều kiện khí hậu đa dạng tạo thế mạnh về cây công nghiệp xuất khẩu (cà phê đứng đầu thế giới ở Bra-xin, Colombia; đậu tương, mía đường, chuối, ca cao); cây lương thực (ngô, lúa mì ở Ác-hen-ti-na); chăn nuôi bò thịt, bò sữa phát triển mạnh trên các thảo nguyên Pam-pa.",
              "Công nghiệp khai khoáng và chế tạo: Khai thác khoáng sản kim loại và dầu mỏ phát triển vượt bậc (dầu mỏ tại Vê-nê-xu-ê-la, Mê-hi-cô; đồng tại Chi-lê; quặng sắt tại Bra-xin). Công nghiệp chế tạo máy móc, lắp ráp ô tô, hoá chất và hàng không vũ trụ phát triển tại Bra-xin, Mê-hi-cô, Ác-hen-ti-na."
            ]
          },
          {
            badge: "Dịch vụ & Ngoại thương",
            title: "Du lịch Ca-ri-bê & Thị trường xuất khẩu",
            points: [
              "Ngoại thương then chốt: Cơ cấu hàng xuất khẩu chủ yếu là khoáng sản thô, dầu mỏ, nông sản nhiệt đới (cà phê, đậu tương, thịt bò); nhập khẩu máy móc, thiết bị điện tử và hoá chất. Các đối tác thương mại lớn nhất là Hoa Kỳ, Liên minh châu Âu (EU) và Trung Quốc.",
              "Du lịch phát triển vượt bậc: Khai thác cảnh quan thiên nhiên nhiệt đới, bãi biển vịnh Ca-ri-bê thơ mộng cùng các di sản văn hoá cổ đại độc đáo (văn minh May-a, In-ca, lễ hội Carnival Rio de Janeiro), thu hút hàng chục triệu lượt du khách quốc tế."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hai quốc gia có quy mô nền kinh tế (GDP) lớn nhất tại khu vực Mỹ La tinh là:",
        options: [
          "Chi-lê và Vê-nê-xu-ê-la.",
          "Bra-xin và Mê-hi-cô.",
          "Cu-ba và Pa-na-ma.",
          "Cô-lôm-bi-a và Bô-li-vi-a."
        ],
        ans: 1,
        explain: "Bra-xin và Mê-hi-cô là hai nền kinh tế đầu tàu lớn nhất Mỹ La tinh, chiếm tỉ trọng áp đảo trong tổng GDP toàn khu vực."
      },
      {
        q: "Mặt hàng xuất khẩu truyền thống và có vị thế hàng đầu thế giới của nông nghiệp Mỹ La tinh (đặc biệt là Bra-xin) là:",
        options: [
          "Lúa nước và củ cải đường.",
          "Cà phê, đậu tương, mía đường và thịt bò.",
          "Yến mạch, lúa mạch và lanh.",
          "Chè xanh và quả chà là."
        ],
        ans: 1,
        explain: "Mỹ La tinh là vựa nông sản nhiệt đới xuất khẩu khổng lồ của thế giới, nổi tiếng nhất với cà phê (Bra-xin, Colombia), đậu tương, mía đường và chăn nuôi bò thịt."
      },
      {
        q: "Nguyên nhân chủ yếu khiến tăng trưởng kinh tế của nhiều nước Mỹ La tinh còn thiếu ổn định là:",
        options: [
          "Hoàn toàn không có tài nguyên thiên nhiên khoáng sản.",
          "Phụ thuộc lớn vào vốn đầu tư, thị trường xuất khẩu và biến động giá nguyên liệu thô thế giới.",
          "Thiếu hụt trầm trọng lực lượng lao động ở mọi lứa tuổi.",
          "Tất cả các nước đều là quốc gia không có đường bờ biển."
        ],
        ans: 1,
        explain: "Sự phụ thuộc quá mức vào xuất khẩu nguyên nhiên liệu thô, nợ nước ngoài và thị trường bên ngoài khiến nền kinh tế Mỹ La tinh dễ bị tổn thương trước các biến động quốc tế."
      }
    ]
  },

  8: {
    num: 8,
    part: "Phần II. Địa lí khu vực và quốc gia",
    partNum: 2,
    subRegion: "Khu vực Mỹ La tinh",
    title: "Thực hành: Báo cáo tình hình phát triển kinh tế – xã hội ở Cộng hoà Liên bang Bra-xin",
    badge: "Kĩ năng thực hành & Báo cáo",
    summary: "Thực hành thu thập tư liệu, phân tích số liệu và viết báo cáo địa lí toàn diện về nền kinh tế Bra-xin: quy mô GDP, chuyển dịch cơ cấu, các ngành kinh tế then chốt, chênh lệch thu nhập và phân hoá vùng miền.",
    objectives: [
      "Trình bày khái quát vị thế kinh tế của Cộng hoà Liên bang Bra-xin trong khu vực và thế giới.",
      "Phân tích sâu sắc các vấn đề xã hội nan giải của Bra-xin: chênh lệch giàu nghèo, thất nghiệp, khu nhà ổ chuột (favelas) và phân hoá vùng Đông Nam - Bắc.",
      "Xử lí và nhận xét bảng số liệu GDP, cơ cấu kinh tế theo yêu cầu SGK."
    ],
    sections: [
      {
        heading: "1. Hướng dẫn nội dung và cấu trúc bài báo cáo về Bra-xin",
        type: "list",
        items: [
          {
            title: "Khái quát kinh tế và các vấn đề xã hội cần làm rõ",
            desc: "Báo cáo cần trình bày theo cấu trúc chuẩn SGK gồm 4 phần chính:\n• Khái quát vị thế: Bra-xin là nền kinh tế lớn nhất Mỹ La tinh, diện tích trên 8,5 triệu km², dân số trên 210 triệu người; sở hữu nền nông nghiệp hàng hoá quy mô lớn, công nghiệp khai khoáng và chế tạo máy bay, ô tô hiện đại, ngành dịch vụ phát triển.\n• Vấn đề phân hoá thu nhập gay gắt: Chênh lệch giàu nghèo thuộc hàng cao nhất thế giới (khoảng 10% dân số giàu nhất chiếm hơn 40% tổng thu nhập, trong khi 10% dân số nghèo nhất chỉ chiếm khoảng 1% GDP theo số liệu SGK).\n• Vấn đề phân hoá lãnh thổ phát triển: Vùng Đông Nam phát triển vượt bậc (tập trung hơn 40% dân số và trên 60% GDP cả nước, có siêu đô thị Xao Pao-lô, Ri-ô đê Gia-nê-rô); trong khi các vùng Bắc và Trung Tây tỉ trọng GDP rất thấp.\n• Đô thị hoá tự phát: Tỉ lệ dân đô thị đạt khoảng 87% nhưng không đi kèm công nghiệp hoá đồng bộ, dẫn đến sự bành trướng của các khu ổ chuột (favelas), thiếu việc làm, tội phạm và suy thoái môi trường."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Vùng kinh tế nào sau đây của Bra-xin tập trung hơn 40% dân số và đóng góp trên 60% tổng GDP cả nước?",
        options: [
          "Vùng Bắc (lưu vực A-ma-dôn).",
          "Vùng Đông Nam.",
          "Vùng Trung Tây.",
          "Vùng Đông Bắc."
        ],
        ans: 1,
        explain: "Vùng Đông Nam là trung tâm kinh tế đầu tàu của Bra-xin, nơi tập trung các siêu đô thị như Xao Pao-lô và Ri-ô đê Gia-nê-rô, đóng góp trên 60% GDP."
      },
      {
        q: "Thực trạng phân hoá giàu nghèo tại Bra-xin được phản ánh qua số liệu nào sau đây trong SGK?",
        options: [
          "Mọi tầng lớp dân cư đều có mức thu nhập hoàn toàn bình đẳng.",
          "10% người giàu nhất chiếm hơn 40% thu nhập, trong khi 10% người nghèo nhất chỉ chiếm khoảng 1% GDP.",
          "10% người nghèo nhất nắm giữ hơn 50% tổng của cải quốc gia.",
          "Thu nhập bình quân đầu người ở nông thôn cao hơn nhiều so với thành thị."
        ],
        ans: 1,
        explain: "Bra-xin có mức độ bất bình đẳng thu nhập rất cao: 10% dân số giàu nhất chiếm hơn 40% tổng thu nhập quốc dân, trong khi 10% nghèo nhất chỉ nhận được khoảng 1% GDP."
      },
      {
        q: "Tên gọi đặc trưng của các khu nhà ổ chuột mọc tự phát trên các sườn đồi ở các đô thị lớn của Bra-xin là:",
        options: [
          "Kibbutz.",
          "Favela.",
          "Hacienda.",
          "Polder."
        ],
        ans: 1,
        explain: "Favela là thuật ngữ chỉ các khu ổ chuột đông đúc, thiếu thốn hạ tầng và an ninh, mọc tự phát quanh các sườn đồi của các thành phố lớn ở Bra-xin như Ri-ô đê Gia-nê-rô."
      }
    ]
  },

  9: {
    num: 9,
    part: "Phần II. Địa lí khu vực và quốc gia",
    partNum: 2,
    subRegion: "Liên minh châu Âu (EU)",
    title: "Liên minh châu Âu – một liên kết kinh tế khu vực lớn",
    badge: "Mô hình liên kết khu vực EU",
    summary: "Nắm vững quá trình hình thành, mục tiêu chiến lược, thể chế quản trị (Hội đồng châu Âu, Nghị viện, Uỷ ban EU), vị thế kinh tế toàn cầu, 4 quyền tự do lưu thông và đồng tiền chung Euro của Liên minh châu Âu.",
    objectives: [
      "Trình bày quá trình hình thành, quy mô thành viên và các cơ quan thể chế chính trị - pháp lí chủ chốt của EU.",
      "Phân tích vị thế kinh tế hàng đầu thế giới của EU về GDP, thương mại, đầu tư và công nghệ.",
      "Giải thích nội dung và ý nghĩa sâu sắc của 'Bốn quyền tự do lưu thông' cùng khu vực đồng tiền chung Euro (Eurozone).",
      "Đánh giá các thách thức nội khối về chênh lệch phát triển và cạnh tranh quốc tế."
    ],
    sections: [
      {
        heading: "1. Quá trình phát triển, mục tiêu và thể chế của EU",
        type: "list",
        items: [
          {
            title: "Lịch sử mở rộng và bộ máy điều hành chung",
            desc: "• Lịch sử phát triển: EU tiền thân từ Cộng đồng Than Thép châu Âu (1951) và Cộng đồng Kinh tế châu Âu (EEC, 1957); Hiệp ước Ma-xtrích (1993) chính thức khai sinh Liên minh châu Âu. Năm 2021, EU có 27 quốc gia thành viên, khoảng 447,1 triệu dân, chiếm 5,7% dân số và đóng góp 17,8% GDP toàn cầu.\n• Mục tiêu chiến lược: Hiệp ước Ma-xtrích và Hiệp ước Li-xbon (2009) xác định mục tiêu xây dựng thị trường nội khối thống nhất, phát triển bền vững, tiến bộ khoa học công nghệ, bảo đảm quyền tự do và an sinh; thúc đẩy hoà bình và phát triển trên thế giới.\n• Bộ máy thể chế chính: Hội đồng châu Âu (định hướng chính trị chiến lược); Nghị viện châu Âu (đại diện công dân, quyền lập pháp và ngân sách); Uỷ ban châu Âu (cơ quan chấp pháp đề xuất và điều hành chính sách); Hội đồng Liên minh châu Âu (đại diện chính phủ các nước, cùng lập pháp). Toà án Công lí và Ngân hàng Trung ương châu Âu (ECB) đảm bảo thực thi luật pháp và chính sách tiền tệ."
          }
        ]
      },
      {
        heading: "2. Vị thế kinh tế và thị trường chung thống nhất",
        type: "grid",
        items: [
          {
            badge: "Vị thế Toàn cầu",
            title: "Trung tâm kinh tế & Thương mại lớn",
            points: [
              "Trung tâm kinh tế hàng đầu: Năm 2021, GDP của EU đứng thứ ba thế giới (sau Hoa Kỳ và Trung Quốc), GDP/người ở mức rất cao. Các cường quốc kinh tế trụ cột: Đức, Pháp, I-ta-li-a.",
              "Đầu tàu thương mại và đầu tư: EU là nhà tài trợ ODA lớn nhất thế giới, chiếm tỉ trọng lớn về ngoại thương và đầu tư trực tiếp nước ngoài; sở hữu nhiều trung tâm tài chính lớn (Phrăng-phuốc, Pa-ri, Am-xtéc-đam); các ngành công nghiệp chế tạo máy, ô tô, hàng không vũ trụ (Airbus), dược phẩm, hoá chất có thị phần quốc tế lớn."
            ]
          },
          {
            badge: "Bốn Quyền Tự Do",
            title: "Thị trường nội bộ & Đồng Euro",
            points: [
              "Bốn quyền tự do lưu thông: Tự do di chuyển của con người; Tự do lưu thông hàng hoá; Tự do dịch vụ; Tự do lưu chuyển dòng vốn. Giúp xoá bỏ rào cản thuế quan nội khối, tối ưu hoá nguồn lực và thúc đẩy cạnh tranh bình đẳng.",
              "Đồng tiền chung Euro (€): Sử dụng tại khu vực Eurozone, giúp giảm chi phí giao dịch, loại bỏ rủi ro tỉ giá và nâng cao sức mạnh kinh tế của khối; EU cũng đi đầu thế giới về Thỏa thuận Xanh (Green Deal), kinh tế tuần hoàn và giảm phát thải khí nhà kính."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Năm 2021, Liên minh châu Âu (EU) gồm bao nhiêu quốc gia thành viên?",
        options: [
          "15 quốc gia.",
          "21 quốc gia.",
          "27 quốc gia.",
          "35 quốc gia."
        ],
        ans: 2,
        explain: "Sau khi Vương quốc Anh chính thức rời khối (Brexit), tính đến năm 2021 Liên minh châu Âu (EU) có 27 quốc gia thành viên."
      },
      {
        q: "Đặc trưng nổi bật của thị trường chung châu Âu trong EU là việc thực hiện:",
        options: [
          "Đóng cửa biên giới hoàn toàn giữa các quốc gia thành viên.",
          "Bốn quyền tự do lưu thông: con người, hàng hoá, dịch vụ và tiền vốn.",
          "Áp dụng thuế quan bảo hộ giữa các nước trong nội khối.",
          "Bãi bỏ toàn bộ các điều ước quốc tế về môi trường."
        ],
        ans: 1,
        explain: "Thị trường chung thống nhất của EU được xây dựng trên 4 quyền tự do cơ bản: Tự do di chuyển của con người, tự do lưu thông hàng hoá, tự do dịch vụ và tự do lưu chuyển tiền vốn."
      },
      {
        q: "Đồng tiền chung chính thức được nhiều quốc gia thành viên EU sử dụng chung từ năm 1999 là:",
        options: [
          "Bảng Anh (GBP).",
          "Đô la châu Âu (EUD).",
          "Đồng Ơ-rô (Euro - €).",
          "Đồng Franc (CHF)."
        ],
        ans: 2,
        explain: "Đồng Ơ-rô (Euro - €) là đồng tiền chung của khu vực Eurozone thuộc EU, giúp xoá bỏ rủi ro tỉ giá hối đoái nội khối."
      }
    ]
  },

  10: {
    num: 10,
    part: "Phần II. Địa lí khu vực và quốc gia",
    partNum: 2,
    subRegion: "Liên minh châu Âu (EU)",
    title: "Thực hành: Viết báo cáo về sự phát triển công nghiệp của Cộng hoà Liên bang Đức",
    badge: "Kĩ năng thực hành & Báo cáo",
    summary: "Thực hành nghiên cứu, xử lí số liệu và viết báo cáo về cường quốc công nghiệp Cộng hoà Liên bang Đức: vai trò kinh tế, các ngành mũi nhọn (ô tô, chế tạo máy, điện tử, hoá chất) và định hướng công nghiệp 4.0.",
    objectives: [
      "Đánh giá vai trò trụ cột của ngành công nghiệp đối với nền kinh tế Cộng hoà Liên bang Đức.",
      "Phân tích các ngành công nghiệp mũi nhọn có năng lực cạnh tranh toàn cầu: ô tô, chế tạo máy móc thiết bị, hoá chất, điện tử.",
      "Mô tả sự phân bố các trung tâm công nghiệp lớn của Đức trên bản đồ."
    ],
    sections: [
      {
        heading: "1. Vị thế và các ngành công nghiệp mũi nhọn của Đức",
        type: "list",
        items: [
          {
            title: "Đầu tàu công nghiệp châu Âu và tiên phong Công nghiệp 4.0",
            desc: "Báo cáo công nghiệp CHLB Đức tập trung vào các trục kiến thức then chốt:\n• Vai trò và quy mô: Đức là nền kinh tế lớn nhất EU và thứ tư thế giới; công nghiệp và xây dựng đóng góp khoảng 30% GDP và giải quyết việc làm cho 24% lực lượng lao động cả nước (số liệu SGK).\n• Ngành chế tạo máy: Là 'trái tim' của nền công nghiệp Đức; năm 2021 đạt giá trị sản xuất khoảng 260 tỉ Euro, phần lớn máy móc và dây chuyền thiết bị hiện đại được xuất khẩu đi khắp thế giới.\n• Các ngành then chốt khác: Công nghiệp sản xuất ô tô (Volkswagen, BMW, Mercedes-Benz); công nghiệp điện tử - tin học; hoá chất và dược phẩm (Bayer, BASF). Sản xuất gắn chặt với nghiên cứu phát triển (R&D) và tiêu chuẩn chất lượng khắt khe.\n• Phân bố trung tâm công nghiệp: Tập trung cao ở các bang phía tây và nam dọc theo sông Ranh và các phụ lưu; các trung tâm lừng danh: Muy-ních, Phrăng-phuốc, Stút-gát, Cô-lô-nhơ, Hăm-buốc."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Ngành công nghiệp nào sau đây được coi là 'trái tim' và động lực xuất khẩu quan trọng nhất của CHLB Đức?",
        options: [
          "Khai thác khoáng sản than bùn.",
          "Chế tạo máy móc và thiết bị công nghiệp.",
          "Dệt may truyền thống và thủ công mỹ nghệ.",
          "Chế biến nông sản thô."
        ],
        ans: 1,
        explain: "Chế tạo máy móc và thiết bị là ngành công nghiệp trụ cột của Đức, nổi tiếng toàn cầu về độ chính xác, độ bền và công nghệ tiên tiến."
      },
      {
        q: "Các thương hiệu ô tô danh tiếng thế giới như Volkswagen, BMW, Mercedes-Benz, Porsche có nguồn gốc từ quốc gia nào?",
        options: [
          "Cộng hoà Pháp.",
          "Cộng hoà Liên bang Đức.",
          "Vương quốc Anh.",
          "Cộng hoà I-ta-li-a."
        ],
        ans: 1,
        explain: "Cộng hoà Liên bang Đức là cái nôi của ngành công nghiệp ô tô hiện đại thế giới với các tập đoàn lừng danh như Volkswagen, BMW, Mercedes-Benz."
      },
      {
        q: "Các trung tâm công nghiệp lớn hàng đầu của CHLB Đức như Phrăng-phuốc, Muy-ních, Cô-lô-nhơ phân bố tập trung chủ yếu ở khu vực nào?",
        options: [
          "Vùng đầm lầy ven biển phía bắc.",
          "Dọc các thung lũng sông và các bang phía tây, tây nam và nam.",
          "Khu vực núi cao hẻo lánh phía đông giáp Ba Lan.",
          "Chỉ duy nhất tại thủ đô Béc-lin."
        ],
        ans: 1,
        explain: "Các trung tâm công nghiệp hàng đầu của Đức phân bố tập trung dày đặc ở các bang phía tây, tây nam và nam, gắn với thung lũng sông Ranh và các vùng giàu tài nguyên, hạ tầng hiện đại."
      }
    ]
  }
};
