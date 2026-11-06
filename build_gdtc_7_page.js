const fs = require('fs');
const path = require('path');

console.log("Generating Giao Duc The Chat Lop 7 (GDTC 7)...");

// Topics Data
const topicsData = [
  // PHẦN MỘT: KIẾN THỨC CHUNG
  {
    part: "Phần 1: Kiến thức chung",
    partTag: "KTC",
    partColor: "bg-blue-600",
    id: "phan-1-kien-thuc-chung",
    title: "Lựa chọn và sử dụng các yếu tố của môi trường tự nhiên trong luyện tập",
    subtitle: "Ảnh hưởng của không khí, ánh sáng, nước và địa hình đối với việc rèn luyện sức khỏe",
    svgNodes: [
      { title: "CÁC YẾU TỐ", desc: "Không khí, ánh sáng mặt trời, môi trường nước & địa hình đất", color: "#2563eb" },
      { title: "LỰA CHỌN TẬP LUYỆN", desc: "Tập nơi râm mát, tránh gió lùa, bù nước, bảo vệ da", color: "#059669" },
      { title: "RÈN THỂ LỰC", desc: "Chạy cát, chạy dốc, bơi lội tăng sức mạnh và sức bền", color: "#d97706" }
    ],
    lessons: [
      {
        num: "Chủ đề chung",
        title: "Lựa chọn và sử dụng các yếu tố của môi trường tự nhiên trong tập luyện TDTT",
        items: [
          "<strong>1. Các yếu tố môi trường tự nhiên:</strong> Gồm không khí (nhiệt độ, độ ẩm, gió), ánh sáng mặt trời (tia hồng ngoại, tia tử ngoại/UV, ánh sáng đơn sắc), môi trường nước và môi trường đất/địa hình tự nhiên.",
          "<strong>2. Nhiệt độ không khí:</strong> Trời nắng nóng nên tập luyện ở nơi râm mát vào sáng sớm hoặc chiều muộn, mặc trang phục thoáng mát thấm mồ hôi; <em>tuyệt đối không dội hoặc tắm nước lạnh ngay sau khi vừa tập xong</em> vì dễ gây co mạch đột ngột. Trời rét tránh tập lúc nhiệt độ xuống quá thấp, cần mặc đủ ấm và khởi động thật kỹ trước khi vận động.",
          "<strong>3. Độ ẩm không khí:</strong> Nắng nóng kèm độ ẩm cao cản trở quá trình bốc hơi toả nhiệt qua mồ hôi, dễ dẫn đến sốc nhiệt; cần giảm thời gian và cường độ tập, lau khô mồ hôi và bổ sung nước từng ngụm nhỏ. Trời rét kèm độ ẩm cao dễ gây cảm lạnh, cần giữ ấm cơ thể (đặc biệt vùng cổ, ngực) và tránh tập nơi gió lùa.",
          "<strong>4. Gió:</strong> Tốc độ gió cao khi trời nóng làm tăng nhanh tốc độ mất nước của cơ thể (cần uống bù đủ nước); khi trời lạnh kèm gió lớn làm cơ thể mất nhiệt nhanh chóng, làm giảm độ đàn hồi, linh hoạt của cơ bắp và xương khớp (cần tập nơi kín gió).",
          "<strong>5. Ánh sáng mặt trời:</strong> Tiếp xúc hợp lý với ánh nắng sáng sớm giúp kích thích cơ thể tổng hợp vitamin D, hấp thụ canxi phát triển hệ xương và nâng cao khả năng miễn dịch. Ngược lại, nắng gắt kéo dài chứa nhiều tia cực tím (UV) gây tổn thương da, bỏng mắt, say nắng, ảnh hưởng xấu tới hệ thần kinh và tuần hoàn. Khi tập ngoài trời cần chọn nơi có bóng râm, đội mũ và che chắn phù hợp.",
          "<strong>6. Môi trường nước:</strong> Các bài tập đi, chạy, nhảy trong nước cạn giúp phát triển sức mạnh kháng lực và sức bền chân; bơi lội giúp phát triển toàn diện thể lực, dung tích sống và hệ cơ hô hấp. Tránh tập khi nước quá lạnh, nơi nước sâu chảy xiết nguy hiểm hoặc nguồn nước ô nhiễm.",
          "<strong>7. Môi trường đất và địa hình:</strong> Chạy lên dốc phát triển sức mạnh đạp sau của chân; chạy xuống dốc rèn luyện tần số và độ dài bước chạy; chạy trên cát rèn sức mạnh cơ chân và thăng bằng; chạy trên địa hình tự nhiên quanh co rèn luyện sức bền chung và tính linh hoạt khéo léo."
        ]
      }
    ],
    quizzes: [
      {
        q: "Khi vừa kết thúc buổi tập thể dục thể thao trong thời tiết nắng nóng, học sinh TUYỆT ĐỐI KHÔNG nên làm gì?",
        opts: ["Dội hoặc tắm ngay bằng nước lạnh", "Thả lỏng cơ bắp và đi lại nhẹ nhàng", "Uống từng ngụm nước nhỏ bù điện giải", "Lau khô mồ hôi bằng khăn mềm"],
        ans: 0,
        explain: "Tắm ngay nước lạnh sau khi tập lúc cơ thể đang nóng và giãn mạch dễ gây sốc nhiệt, co mạch đột ngột và đột quỵ."
      },
      {
        q: "Bài tập chạy lên dốc trong môi trường địa hình tự nhiên có tác dụng chính gì?",
        opts: ["Phát triển sức mạnh đạp sau của cơ chân", "Giảm tốc độ vận động", "Rèn luyện nhắm mắt khi chạy", "Tập giữ thăng bằng một chân"],
        ans: 0,
        explain: "Chạy lên dốc đòi hỏi lực đạp sau của cơ bắp đùi và bắp chân rất lớn, giúp phát triển sức mạnh bộc phát."
      }
    ]
  },

  // PHẦN HAI - CHỦ ĐỀ 1: CHẠY CỰ LI NGẮN (60 M)
  {
    part: "Phần 2: Vận động cơ bản",
    partTag: "VĐCB",
    partColor: "bg-emerald-600",
    id: "chay-cu-li-ngan-60m",
    title: "Chủ đề 1: Chạy cự li ngắn (60 m)",
    subtitle: "Kĩ thuật xuất phát cao, chạy lao, chạy giữa quãng và kĩ thuật đánh đích hiệu quả",
    svgNodes: [
      { title: "XUẤT PHÁT & CHẠY LAO", desc: "Đạp mạnh 2 chân, thân ngả trước, tăng nhanh độ dài bước", color: "#059669" },
      { title: "CHẠY GIỮA QUÃNG", desc: "Tốc độ tối đa, nâng đùi cao, đạp sau mạnh, thân dựng dần", color: "#0d9488" },
      { title: "VỀ ĐÍCH", desc: "Gập thân chạm ngực hoặc xoay vai đánh đích ở bước cuối", color: "#10b981" }
    ],
    lessons: [
      {
        num: "Bài 1",
        title: "Phối hợp trong giai đoạn xuất phát cao và chạy lao sau xuất phát",
        items: [
          "<strong>Kĩ thuật xuất phát:</strong> Khi có lệnh 'Chạy' (hoặc tiếng còi/phát lệnh), đạp mạnh hai chân rời khỏi vạch xuất phát, đồng thời hai tay đánh nhanh, mạnh và so le với nhịp chân để tạo gia tốc ban đầu.",
          "<strong>Kĩ thuật chạy lao sau xuất phát:</strong> Thân trên duy trì độ ngả ra trước; tốc độ chạy tăng nhanh chóng nhờ lực đạp sau mạnh mẽ và độ dài bước chạy tăng dần sau mỗi bước.",
          "<strong>Lưu ý sai lầm thường gặp:</strong> Không nhảy vọt quá dài ở bước đầu tiên làm giảm tốc độ tiến; không ngẩng đầu và nâng thân người lên thẳng đứng quá sớm vì sẽ làm triệt tiêu lực đạp sau đẩy thân lao về trước."
        ]
      },
      {
        num: "Bài 2",
        title: "Phối hợp trong giai đoạn chạy lao sau xuất phát và chạy giữa quãng",
        items: [
          "<strong>Giai đoạn chuyển tiếp:</strong> Ở những bước cuối giai đoạn chạy lao, độ ngả của thân trên giảm dần để chuyển tiếp mượt mà, tự nhiên sang tư thế chạy giữa quãng mà không làm giảm tốc độ.",
          "<strong>Kĩ thuật chạy giữa quãng:</strong> Nhiệm vụ là duy trì tốc độ tối đa đã đạt được. Tích cực đưa đùi chân lăng ra trước - lên trên; tăng cường lực và tốc độ đạp sau; đặt bàn chân trước thẳng theo hướng chạy và tiếp đất bằng nửa trước bàn chân.",
          "<strong>Quy định luật thi đấu cự li ngắn (≤ 400 m):</strong> Vận động viên bắt buộc phải chạy theo từng ô chạy (làn chạy) riêng biệt có độ rộng tiêu chuẩn là <strong>1,22 m ± 0,01 m</strong>; phải chạy đúng làn từ vạch xuất phát cho tới khi về đích."
        ]
      },
      {
        num: "Bài 3",
        title: "Phối hợp các giai đoạn chạy cự li ngắn (60 m) & Kĩ thuật về đích",
        items: [
          "<strong>Kĩ thuật về đích:</strong> Ở bước chạy cuối cùng, chủ động thực hiện động tác 'đánh đích' bằng cách gập nhanh thân trên ra trước để ngực chạm dây đích, hoặc xoay vai để một bên vai chạm dây đích.",
          "<strong>Lưu ý quan trọng:</strong> Phải duy trì tối đa tần số và độ dài bước chạy ở những mét cuối cùng; <em>tuyệt đối không nhảy qua vạch đích</em>; không đánh đích quá sớm khi chưa tới gần dây đích hoặc với dài chân vì rất dễ trượt ngã nguy hiểm."
        ]
      }
    ],
    quizzes: [
      {
        q: "Độ rộng tiêu chuẩn của mỗi ô chạy (làn chạy) trong môn Điền kinh cự li ngắn là bao nhiêu?",
        opts: ["1,22 m ± 0,01 m", "1,00 m", "1,50 m", "2,00 m"],
        ans: 0,
        explain: "Luật Điền kinh quốc tế quy định độ rộng mỗi làn chạy tiêu chuẩn là 1,22 m (sai số cho phép ± 0,01 m)."
      },
      {
        q: "Động tác đánh đích đúng kĩ thuật trong chạy cự li ngắn là gì?",
        opts: ["Chủ động gập nhanh thân trên (chạm ngực) hoặc xoay vai chạm dây đích ở bước cuối", "Bật nhảy cả hai chân qua vạch đích", "Chạy chậm lại và giơ hai tay lên cao", "Dừng hẳn lại trước vạch đích"],
        ans: 0,
        explain: "Đánh đích bằng ngực hoặc vai ở bước cuối cùng giúp cơ thể cán đích sớm hơn phân số giây quý giá."
      }
    ]
  },

  // PHẦN HAI - CHỦ ĐỀ 2: NHẢY XA KIỂU NGỒI
  {
    part: "Phần 2: Vận động cơ bản",
    partTag: "VĐCB",
    partColor: "bg-emerald-600",
    id: "nhay-xa-kieu-ngoi",
    title: "Chủ đề 2: Nhảy xa kiểu ngồi",
    subtitle: "Hoàn thiện 4 giai đoạn: Chạy đà, Giậm nhảy, Bay trên không và Rơi xuống cát",
    svgNodes: [
      { title: "CHẠY ĐÀ & GIẬM NHẢY", desc: "Tăng tốc độ đà, đặt trọn bàn chân giậm, tạo tư thế bước bộ", color: "#059669" },
      { title: "BAY TRÊN KHÔNG", desc: "Thu chân giậm song song chân lăng, co sát ngực (ngồi xổm)", color: "#0d9488" },
      { title: "RƠI XUỐNG CÁT", desc: "Chạm cát bằng 2 gót chân, gập gối hoãn xung, thân gập trước", color: "#10b981" }
    ],
    lessons: [
      {
        num: "Tổng quan & Bài 1",
        title: "Khái quát 4 giai đoạn & Kĩ thuật giậm nhảy, bước bộ",
        items: [
          "<strong>Khái quát 4 giai đoạn:</strong> Chạy đà &rarr; Giậm nhảy &rarr; Bay trên không &rarr; Rơi xuống cát.",
          "<strong>Kĩ thuật giậm nhảy:</strong> Chân giậm nhảy đặt trọn bàn chân nhanh chóng lên ván giậm, khớp gối hơi khuỵu để hoãn xung rồi đạp duỗi thẳng mạnh mẽ đưa toàn bộ cơ thể bay rời khỏi mặt đất.",
          "<strong>Kĩ thuật bước bộ trên không:</strong> Đùi chân lăng nâng nhanh ra trước - lên trên; tay cùng bên chân giậm đưa ra trước dừng ngang ngực, tay cùng bên chân lăng gập khuỷu sang bên ngang vai tạo tư thế 'bước bộ' vững chắc trên không.",
          "<strong>Quy cách sân bãi:</strong> Đường chạy đà dài tối thiểu <strong>45 m</strong>, rộng <strong>1,22 m</strong>; ván giậm dài <strong>1,22 m</strong>, rộng <strong>0,22 m (20 cm)</strong>, dày <strong>0,1 m</strong> sơn màu trắng; hố cát rộng <strong>2,75 – 3,0 m</strong> chứa cát ẩm và xốp mịn."
        ]
      },
      {
        num: "Bài 2",
        title: "Kĩ thuật chạy đà và chuẩn bị giậm nhảy",
        items: [
          "<strong>Cách đo đà:</strong> Quy ước chuẩn: Một bước chạy đà bằng hai bước đi thường. Nữ thường chạy 11 – 13 bước đà; nam chạy 13 – 15 bước đà.",
          "<strong>Kĩ thuật chạy đà:</strong> Tốc độ chạy đà tăng dần đều và đạt tốc độ tối đa ở những bước đà cuối cùng; bước đà cuối cùng ngắn hơn bước đà trước khoảng 1 bàn chân để chuẩn bị giậm nhảy; thân người dựng thẳng ở bước đà cuối."
        ]
      },
      {
        num: "Bài 3",
        title: "Kĩ thuật bay trên không và rơi xuống cát",
        items: [
          "<strong>Giai đoạn bay trên không:</strong> Sau khi tạo tư thế bước bộ, chân giậm nhảy thu nhanh ra trước song song với chân lăng, hai đầu gối co sát ngực (tạo thành tư thế ngồi xổm trên không). Trước khi chạm cát, hai chân vươn thẳng ra trước, hai tay đánh từ trên ra trước - xuống dưới - ra sau.",
          "<strong>Giai đoạn rơi xuống cát:</strong> Hai gót chân chạm cát trước, đồng thời gập nhanh khớp gối để giảm chấn động; thân trên chủ động gập sát đùi ra phía trước, hai tay vươn về phía trước để tránh bị ngã người ra sau."
        ]
      },
      {
        num: "Bài 4",
        title: "Phối hợp các giai đoạn kĩ thuật nhảy xa kiểu ngồi & Luật thi đấu",
        items: [
          "<strong>Yêu cầu phối hợp:</strong> Duy trì tính ổn định của số bước đà, nhịp điệu chạy đà và thực hiện liên hoàn chính xác cả 4 giai đoạn mà không bị khựng lại ở ván giậm.",
          "<strong>Luật thi đấu:</strong> Thành tích nhảy xa được đo vuông góc từ mép ván giậm nhảy gần hố cát nhất đến điểm chạm cát gần ván giậm nhất do bất kỳ bộ phận nào của cơ thể để lại trên cát.",
          "<strong>Lỗi phạm quy:</strong> Chạm đất vượt quá mép ván giậm nhảy (vạch phạm quy); giậm nhảy bằng cả hai chân cùng lúc; sau khi tiếp đất đi ngược trở lại qua hố cát."
        ]
      }
    ],
    quizzes: [
      {
        q: "Khi đo đà trong nhảy xa, quy ước thông thường tính 1 bước chạy đà bằng bao nhiêu bước đi bộ?",
        opts: ["2 bước đi bộ thường", "1 bước đi bộ", "3 bước đi bộ", "4 bước đi bộ"],
        ans: 0,
        explain: "Quy ước đo đà điền kinh tiêu chuẩn: 1 bước chạy đà bằng 2 bước đi thường."
      },
      {
        q: "Trong nhảy xa, trường hợp nào sau đây bị trọng tài tuyên bố phạm quy?",
        opts: ["Bàn chân chạm đất vượt quá mép ván giậm phía hố cát", "Tiếp đất bằng hai gót chân rồi gập gối", "Đo đà trước khi thực hiện lượt nhảy", "Vươn hai tay ra phía trước khi tiếp đất"],
        ans: 0,
        explain: "Chạm đất vượt quá mép ván giậm nhảy là lỗi phạm quy không được công nhận thành tích."
      }
    ]
  },

  // PHẦN HAI - CHỦ ĐỀ 3: CHẠY CỰ LI TRUNG BÌNH
  {
    part: "Phần 2: Vận động cơ bản",
    partTag: "VĐCB",
    partColor: "bg-emerald-600",
    id: "chay-cu-li-trung-binh",
    title: "Chủ đề 3: Chạy cự li trung bình",
    subtitle: "Kĩ thuật phối hợp bước chạy, nhịp thở, vượt qua hiện tượng cực điểm và phân phối sức",
    svgNodes: [
      { title: "XUẤT PHÁT CAO", desc: "Xuất phát nhanh chiếm làn trong, giảm dần độ ngả thân người", color: "#059669" },
      { title: "CHẠY GIỮA QUÃNG", desc: "Nhịp thở 2-3 bước, nghiêng người khi vào đường vòng", color: "#0d9488" },
      { title: "VƯỢT CỰC ĐIỂM", desc: "Chủ động giảm tốc độ, hít thở sâu để đạt 'hô hấp lần hai'", color: "#10b981" }
    ],
    lessons: [
      {
        num: "Bài 1",
        title: "Kĩ thuật chạy giữa quãng & Khắc phục hiện tượng 'cực điểm'",
        items: [
          "<strong>Kĩ thuật chạy giữa quãng:</strong> Phối hợp bước chạy nhịp nhàng với nhịp thở sâu: cứ 2 – 3 bước chân hít vào bằng mũi, 2 – 3 bước chân tiếp theo thở mạnh ra bằng miệng.",
          "<strong>Kĩ thuật chạy vào đường vòng:</strong> Thân người chủ động nghiêng sang bên trái (vào tâm đường vòng); tay phải đánh với biên độ rộng hơn tay trái; bàn chân phải đặt hơi xoay vào trong.",
          "<strong>Hiện tượng 'cực điểm':</strong> Trong khi chạy cự li trung bình, cơ thể thường gặp cảm giác tức ngực, khó thở, chóng mặt, chân tay nặng nề rã rời do sự thiếu hụt oxygen tạm thời.",
          "<strong>Cách khắc phục:</strong> Giữ bình tĩnh, kiên trì không bỏ cuộc; chủ động giảm nhẹ tốc độ chạy và tập trung hít thở sâu, tích cực. Sau giây lát cơ thể sẽ thích nghi và bước vào trạng thái <em>'hô hấp lần hai'</em> (thoát khỏi cực điểm) và cảm thấy dễ chịu trở lại."
        ]
      },
      {
        num: "Bài 2",
        title: "Phối hợp giai đoạn xuất phát và tăng tốc độ sau xuất phát",
        items: [
          "<strong>Kĩ thuật:</strong> Sử dụng tư thế xuất phát cao. Chạy nhanh ở những bước đầu tiên sau xuất phát để chiếm vị trí thuận lợi ở làn trong cùng (sát mép cỏ sân); sau đó giảm dần độ ngả thân người và chuyển nhịp nhàng sang tốc độ chạy giữa quãng.",
          "<strong>Chiến thuật:</strong> Không bung toàn bộ sức tối đa ngay từ đầu như cự li ngắn vì sẽ làm kiệt sức sớm.",
          "<strong>Luật phạm quy:</strong> Xô đẩy, chèn ép cản trở đường chạy của đối thủ; cố tình chạy lấn lên vạch ranh giới bên trong; tự ý rời khỏi đường chạy."
        ]
      },
      {
        num: "Bài 3",
        title: "Phối hợp các giai đoạn chạy cự li trung bình & Kĩ thuật về đích",
        items: [
          "<strong>Phân phối sức hợp lí:</strong> Giữ nhịp độ ổn định trên toàn cự li; khi cách đích khoảng 100 – 150 m cuối, nỗ lực rút đích bằng cách tăng tần số bước chạy, đánh tay mạnh mẽ hơn, ngả thân trên ra trước và thở sâu để cán đích.",
          "<strong>Hồi phục sau đích:</strong> Sau khi qua đích, tiếp tục đi bộ thả lỏng, hít thở sâu, tuyệt đối không ngồi bệt hoặc nằm ngay xuống đất."
        ]
      }
    ],
    quizzes: [
      {
        q: "Cách xử lý khoa học khi gặp hiện tượng 'cực điểm' trong chạy cự li trung bình là gì?",
        opts: ["Giữ bình tĩnh, chủ động giảm tốc độ và hít thở sâu để chuyển sang 'hô hấp lần hai'", "Dừng lại đột ngột và ngồi ngay xuống sân", "Cố gắng nín thở và chạy bứt phá hết sức", "Uống một cốc nước đá thật to"],
        ans: 0,
        explain: "Chủ động giảm tốc độ và hít thở sâu tích cực giúp bù đắp oxygen, vượt qua cực điểm để vào trạng thái 'hô hấp lần hai'."
      },
      {
        q: "Khi chạy cự li trung bình vào đoạn đường vòng trên sân điền kinh, thân người cần nghiêng về phía nào?",
        opts: ["Nghiêng sang bên trái (vào tâm đường vòng)", "Nghiêng sang bên phải", "Ngả hoàn toàn ra sau", "Cúi gập sát mặt đất"],
        ans: 0,
        explain: "Nghiêng sang trái giúp tạo lực hướng tâm chống lại lực ly tâm khi vận động viên chạy vòng quanh sân ngược chiều kim đồng hồ."
      }
    ]
  },

  // PHẦN HAI - CHỦ ĐỀ 4: BÀI TẬP THỂ DỤC (30 NHỊP)
  {
    part: "Phần 2: Vận động cơ bản",
    partTag: "VĐCB",
    partColor: "bg-emerald-600",
    id: "bai-the-duc-30-nhip",
    title: "Chủ đề 4: Bài tập thể dục liên hoàn 30 nhịp",
    subtitle: "Rèn luyện tư thế đúng, tính thẩm mỹ, sự khéo léo và dẻo dai toàn diện của cơ thể",
    svgNodes: [
      { title: "NHỊP 1 - 10", desc: "Vươn thở, bước chân, chếch chữ V, đá lăng và thăng bằng sấp", color: "#059669" },
      { title: "NHỊP 11 - 20", desc: "Đổi bên đối xứng nhịp 3-9, đá ngang, khuỵu gối chuyển trọng tâm", color: "#0d9488" },
      { title: "NHỊP 21 - 30", desc: "Gập thân vặn mình, ngồi xổm, bật chống đẩy, bật co gối & kết thúc", color: "#10b981" }
    ],
    lessons: [
      {
        num: "Bài 1",
        title: "Bài thể dục liên hoàn: Từ nhịp 1 đến nhịp 10",
        items: [
          "<strong>Nhịp 1:</strong> Chân trái bước sang ngang rộng bằng vai, 2 tay dang ngang, lòng bàn tay sấp, mắt nhìn thẳng.",
          "<strong>Nhịp 2:</strong> Toàn thân xoay sang trái thành tư thế chân trước chân sau (chân trái trước, chân phải sau kiễng gót, trọng lượng dồn chân trái); 2 tay đưa lên cao chếch chữ V, lòng bàn tay hướng vào nhau, đầu ngửa, mắt nhìn theo tay.",
          "<strong>Nhịp 3:</strong> Chân phải khuỵu gối, chân trái thẳng, thân trên ngả nhẹ ra trước; 2 tay hạ xuống dưới - ra sau chếch hai bên sườn.",
          "<strong>Nhịp 4:</strong> Chân phải thẳng, vươn người, 2 tay đưa lên cao chếch chữ V (trở về tư thế nhịp 2).",
          "<strong>Nhịp 5:</strong> Chân phải đá lăng thẳng ra trước lên cao ngang hông; 2 tay đưa thẳng ra trước song song, lòng bàn tay sấp.",
          "<strong>Nhịp 6:</strong> Chân phải đưa ra sau, chạm đất bằng nửa trước bàn chân; 2 tay dang ngang, lòng bàn tay ngửa.",
          "<strong>Nhịp 7:</strong> Thân trên ngả ra trước, chân phải nâng cao ngang hông ra sau (tư thế thăng bằng sấp trên chân trái), 2 tay dang ngang lòng bàn tay sấp, đầu ngửa.",
          "<strong>Nhịp 8:</strong> Chân phải hạ chạm đất, vươn người trở về tư thế nhịp 2.",
          "<strong>Nhịp 9:</strong> Xoay người sang phải trở về tư thế đứng thẳng của nhịp 1.",
          "<strong>Nhịp 10:</strong> Thực hiện tương tự nhịp 2 nhưng đổi bên (xoay toàn thân sang phải, bước chân phải ra trước)."
        ]
      },
      {
        num: "Bài 2",
        title: "Bài thể dục liên hoàn: Từ nhịp 11 đến nhịp 20",
        items: [
          "<strong>Nhịp 11 – 17:</strong> Thực hiện các động tác đối xứng tương tự từ nhịp 3 đến nhịp 9 (đổi hướng sang bên phải và đổi chân lăng sang chân trái).",
          "<strong>Nhịp 18:</strong> Chân trái đá sang ngang lên cao ngang hông; 2 tay dang ngang, lòng bàn tay sấp.",
          "<strong>Nhịp 19:</strong> Chân trái hạ sang ngang khuỵu gối, chân phải thẳng (hai chân đứng rộng hơn vai); 2 tay giữ dang ngang sấp.",
          "<strong>Nhịp 20:</strong> Chuyển trọng lượng cơ thể sang khuỵu gối chân phải, chân trái thẳng; 2 tay bắt chéo trước ngực rồi mở dang ngang sấp."
        ]
      },
      {
        num: "Bài 3",
        title: "Bài thể dục liên hoàn: Từ nhịp 21 đến nhịp 30",
        items: [
          "<strong>Nhịp 21:</strong> Đứng thẳng hai chân rộng hơn vai, gập thân trên ra trước, lưng giữ thẳng song song mặt đất, 2 tay dang ngang sấp.",
          "<strong>Nhịp 22:</strong> Vặn mình sang trái, tay phải cúi chạm mũi chân trái, tay trái giơ thẳng cao lên trần nhà, mắt nhìn theo tay trái.",
          "<strong>Nhịp 23:</strong> Vặn mình sang phải, tay trái cúi chạm mũi chân phải, tay phải giơ thẳng cao, mắt nhìn theo tay phải.",
          "<strong>Nhịp 24:</strong> Nâng người trở về tư thế gập thân của nhịp 21.",
          "<strong>Nhịp 25:</strong> Thu chân trái sát chân phải, ngồi xổm trên hai nửa trước bàn chân, 2 tay chống đất thẳng phía trước các đầu mũi chân.",
          "<strong>Nhịp 26:</strong> Dồn lực lên hai tay, bật duỗi thẳng hai chân ra sau thành tư thế chống đẩy (thân người từ đầu đến gót chân tạo thành một đường thẳng).",
          "<strong>Nhịp 27:</strong> Bật đưa chân trái co gối lên ngang hông bên sườn trái.",
          "<strong>Nhịp 28:</strong> Bật đổi chân (chân trái bật ra sau duỗi thẳng, chân phải co gối lên ngang hông bên phải).",
          "<strong>Nhịp 29:</strong> Bật thu chân phải về đứng cạnh chân trái ở tư thế ngồi xổm (trở về nhịp 25).",
          "<strong>Nhịp 30:</strong> Đứng thẳng người, hạ tay khép sát sườn trở về tư thế chuẩn bị (đứng nghiêm)."
        ]
      }
    ],
    quizzes: [
      {
        q: "Trong bài thể dục liên hoàn 30 nhịp, nhịp số 7 thực hiện động tác gì?",
        opts: ["Thăng bằng sấp trên chân trái, 2 tay dang ngang", "Ngồi xổm hai tay chống đất", "Chống đẩy thân người thẳng", "Vặn mình tay chạm mũi chân"],
        ans: 0,
        explain: "Nhịp 7 là động tác thăng bằng sấp trên chân trái, chân phải nâng cao ra sau, hai tay dang ngang."
      },
      {
        q: "Ở nhịp 26 của bài thể dục 30 nhịp, tư thế cơ thể là gì?",
        opts: ["Bật hai chân ra sau thành tư thế chống đẩy", "Đứng nghiêm hai tay buông xuôi", "Đá lăng chân phải ra trước", "Vặn mình sang trái"],
        ans: 0,
        explain: "Nhịp 26 là động tác bật duỗi thẳng 2 chân ra sau từ tư thế ngồi xổm để thành tư thế chống đẩy thẳng người."
      }
    ]
  },

  // PHẦN BA - CHỦ ĐỀ 1: CẦU LÔNG
  {
    part: "Phần 3: Thể thao tự chọn",
    partTag: "TTTC",
    partColor: "bg-amber-600",
    id: "cau-long",
    title: "Môn Thể thao tự chọn: Cầu lông",
    subtitle: "Kĩ thuật phát cầu thuận tay, đánh cầu cao tay bên phải và di chuyển ngang",
    svgNodes: [
      { title: "PHÁT CẦU THUẬN TAY", desc: "Đế cầu ngang thắt lưng, phát cao xa hoặc thấp gần; luật 21 điểm", color: "#d97706" },
      { title: "ĐÁNH CẦU CAO TAY", desc: "Chân trước chân sau, vung vợt đón cầu ở điểm cao nhất bên phải", color: "#f59e0b" },
      { title: "DI CHUYỂN NGANG", desc: "Bước trượt hoặc bước chéo, mắt luôn hướng lưới đón đánh", color: "#b45309" }
    ],
    lessons: [
      {
        num: "Bài 1",
        title: "Kĩ thuật phát cầu thuận tay & Luật tính điểm",
        items: [
          "<strong>Tư thế chuẩn bị:</strong> Đứng chân trái trước (hướng mũi chân về lưới), chân phải sau. Tay trái cầm phần cánh cầu thả lỏng tự nhiên trước ngực; tay phải cầm vợt đưa ra sau ngang hông.",
          "<strong>Thực hiện phát cầu:</strong> Tay trái thả cầu rơi tự nhiên, đồng thời tay phải vung vợt từ sau - xuống dưới - ra trước, tiếp xúc mặt vợt vào đế cầu ở tầm ngang thắt lưng bên phải.",
          "<strong>Đường bay của cầu:</strong> Có 2 quỹ đạo chiến thuật: đường cầu cao xa (bay bổng sâu về cuối sân đối phương) và đường cầu thấp gần (bay sát mép trên lưới rơi vào ô giao cầu gần).",
          "<strong>Luật tính điểm cầu lông hiện đại:</strong> Thi đấu theo thể thức 3 hiệp thắng 2; mỗi hiệp thi đấu đến <strong>21 điểm</strong> (tính điểm trực tiếp ở mỗi pha cầu). Nếu tỉ số đạt 20 đều, bên nào ghi cách biệt 2 điểm trước sẽ thắng hiệp đó; nếu tỉ số đạt 29 đều, bên nào ghi được điểm thứ 30 trước sẽ giành chiến thắng chung cuộc của hiệp."
        ]
      },
      {
        num: "Bài 2",
        title: "Kĩ thuật đánh cầu cao tay bên phải",
        items: [
          "<strong>Tư thế chuẩn bị:</strong> Đứng chân trước chân sau (chân khác bên tay cầm vợt ở trước, chân cùng bên tay cầm vợt ở sau).",
          "<strong>Động tác đánh cầu:</strong> Chuyển trọng tâm cơ thể ra chân sau, xoay vai đưa vợt lên cao ra sau đầu; vung vợt mạnh mẽ từ sau lên cao đón đánh cầu ở điểm cao nhất chếch bên phải đầu. Đánh cầu đi cao và sâu về cuối sân đối phương."
        ]
      },
      {
        num: "Bài 3",
        title: "Kĩ thuật di chuyển ngang đánh cầu cao tay bên phải",
        items: [
          "<strong>Kĩ thuật di chuyển:</strong> Sử dụng các bước trượt ngang hoặc bước chéo sang phải / sang trái một cách linh hoạt nhưng thân trên luôn giữ hướng nhìn thẳng về phía lưới để đón đánh cầu cao tay chính xác và nhanh chóng trở về vị trí trung tâm."
        ]
      }
    ],
    quizzes: [
      {
        q: "Theo luật cầu lông hiện đại, khi hai bên đạt tỉ số 29 đều trong một hiệp đấu, hiệp đấu sẽ kết thúc khi:",
        opts: ["Bên nào đạt điểm 30 trước sẽ giành chiến thắng", "Bên nào đạt điểm 31 trước", "Phải thi đấu tiếp đến khi cách biệt 2 điểm", "Tung đồng xu quyết định"],
        ans: 0,
        explain: "Luật cầu lông quy định giới hạn điểm tối đa là 30: bên nào chạm điểm 30 trước sẽ thắng hiệp."
      },
      {
        q: "Vị trí tiếp xúc cầu chuẩn xác trong kĩ thuật phát cầu thuận tay là:",
        opts: ["Ở tầm ngang thắt lưng bên phải", "Ở tầm cao trên vai", "Ở ngang tầm mắt", "Dưới sát mặt sàn"],
        ans: 0,
        explain: "Luật cầu lông quy định khi phát cầu, toàn bộ quả cầu phải ở dưới thắt lưng của người phát cầu tại thời điểm vợt chạm cầu."
      }
    ]
  },

  // PHẦN BA - CHỦ ĐỀ 2: BÓNG ĐÁ
  {
    part: "Phần 3: Thể thao tự chọn",
    partTag: "TTTC",
    partColor: "bg-amber-600",
    id: "bong-da",
    title: "Môn Thể thao tự chọn: Bóng đá",
    subtitle: "Kĩ thuật đá bóng mu trong, dừng bóng mu giữa, dẫn bóng và quy cách sân 11 người",
    svgNodes: [
      { title: "ĐÁ BÓNG MU TRONG", desc: "Chạy đà góc 30-45 độ, chân trụ cách bóng 20-30cm, vung chân vòng", color: "#d97706" },
      { title: "DỪNG BÓNG MU GIỮA", desc: "Chúc mũi chân đón bóng, rút chân hoãn xung triệt tiêu lực", color: "#f59e0b" },
      { title: "SÂN BÃI 11 NGƯỜI", desc: "Sân 90-120m x 45-90m; cầu môn cao 2,44m, rộng 7,32m", color: "#b45309" }
    ],
    lessons: [
      {
        num: "Bài 1",
        title: "Kĩ thuật đá bóng bằng mu trong bàn chân",
        items: [
          "<strong>Vị trí tiếp xúc:</strong> Mu trong bàn chân là phần từ ngón chân cái đến trước mắt cá trong. Điểm tiếp xúc trên bóng là tâm sau chếch dưới của quả bóng.",
          "<strong>Động tác:</strong> Chạy đà theo hướng tạo góc khoảng <strong>30° – 45°</strong> so với hướng bóng đi. Đặt chân trụ cách bóng khoảng <strong>20 – 30 cm</strong>, mũi chân trụ hướng thẳng theo hướng đá; vung chân lăng theo đường vòng cung từ sau ra trước gập gối, xoay mu trong tiếp xúc bóng và miết nhẹ để tạo đường bóng lượn xoáy chuẩn xác."
        ]
      },
      {
        num: "Bài 2",
        title: "Kĩ thuật dừng bóng lăn bằng mu giữa bàn chân & Quy định sân 11 người",
        items: [
          "<strong>Vị trí tiếp xúc:</strong> Mu giữa bàn chân là phần lưng bàn chân từ khớp ngón chân đến khớp cổ chân.",
          "<strong>Động tác dừng bóng:</strong> Khi bóng lăn tới, chân đón bóng đưa ra trước, mũi chân chúc nhẹ xuống đất; ngay thời điểm bóng chạm mu giữa, chủ động rút chân nhịp nhàng về phía sau hoãn xung để triệt tiêu lực lăn, giữ bóng nằm êm dưới chân.",
          "<strong>Quy cách sân thi đấu bóng đá 11 người:</strong> Chiều dài sân từ <strong>90 – 120 m</strong>, chiều rộng từ <strong>45 – 90 m</strong>; khung thành (cầu môn) có chiều cao tiêu chuẩn là <strong>2,44 m</strong> và chiều rộng là <strong>7,32 m</strong>."
        ]
      },
      {
        num: "Bài 3",
        title: "Kĩ thuật dẫn bóng bằng mu trong bàn chân",
        items: [
          "<strong>Kĩ thuật thực hiện:</strong> Khi chạy theo bóng, xoay mũi bàn chân dẫn bóng hơi hướng ra ngoài; dùng phần mu trong tác động nhẹ, êm vào phần sau chếch dưới của quả bóng để đẩy bóng lăn về phía trước theo hướng kiểm soát (mỗi nhịp đẩy bóng cách chân từ 0,5 – 1 m)."
        ]
      }
    ],
    quizzes: [
      {
        q: "Kích thước cầu môn tiêu chuẩn trong thi đấu bóng đá 11 người theo quy định của FIFA là:",
        opts: ["Cao 2,44 m và rộng 7,32 m", "Cao 2,00 m và rộng 5,00 m", "Cao 3,00 m và rộng 6,00 m", "Cao 2,20 m và rộng 7,00 m"],
        ans: 0,
        explain: "Khung thành sân 11 người tiêu chuẩn có chiều rộng 7,32 m (8 yards) và chiều cao 2,44 m (8 feet)."
      },
      {
        q: "Khi dừng bóng lăn sệt bằng mu giữa bàn chân, động tác cốt lõi để bóng không nảy xa là:",
        opts: ["Rút nhẹ chân đón bóng về sau để hoãn xung triệt tiêu lực", "Đạp thật mạnh chân lên đỉnh bóng", "Đá bóng ngược trở lại", "Đứng im cứng đờ chân"],
        ans: 0,
        explain: "Động tác rút chân về sau hoãn xung giúp triệt tiêu hoàn toàn động năng của quả bóng đang lăn tới."
      }
    ]
  },

  // PHẦN BA - CHỦ ĐỀ 3: BÓNG RỔ
  {
    part: "Phần 3: Thể thao tự chọn",
    partTag: "TTTC",
    partColor: "bg-amber-600",
    id: "bong-ro",
    title: "Môn Thể thao tự chọn: Bóng rổ",
    subtitle: "Dẫn bóng đường vòng, chuyền bóng bật đất và kĩ thuật 2 bước ném rổ một tay trên vai",
    svgNodes: [
      { title: "DẪN BÓNG ĐƯỜNG VÒNG", desc: "Ấn bóng chếch bên ngoài sau, thân nghiêng vào tâm vòng cung", color: "#d97706" },
      { title: "CHUYỀN BẬT ĐẤT", desc: "Bóng đập đất ở vị trí 2/3 cự li, đón bắt bóng ngang ngực", color: "#f59e0b" },
      { title: "2 BƯỚC NÉM RỔ", desc: "Bước 1 dài, bước 2 ngắn bật cao, vươn tay gập cổ tay ném rổ", color: "#b45309" }
    ],
    lessons: [
      {
        num: "Bài 1",
        title: "Kĩ thuật dẫn bóng trên đường vòng & Các lỗi phạm luật",
        items: [
          "<strong>Kĩ thuật dẫn bóng vòng:</strong> Khác với dẫn bóng thẳng, khi dẫn bóng vòng sang phải/trái, bàn tay tiếp xúc chếch vào phía trên và bên cạnh sau của bóng để tạo lực đẩy bóng nghiêng theo quỹ đạo cung tròn; thân người hơi nghiêng về phía tâm của vòng cung di chuyển.",
          "<strong>Các lỗi phạm luật cơ bản cần tránh:</strong>",
          "&bull; <em>Dẫn bóng 2 tay cùng lúc:</em> Dùng cả hai tay vỗ bóng cùng một lúc.",
          "&bull; <em>Lỗi dính bóng / Dẫn bóng 2 lần (Double dribble):</em> Sau khi đã cầm giữ bóng bằng hai tay rồi lại tiếp tục dẫn bóng.",
          "&bull; <em>Lỗi chạy bước (Traveling):</em> Cầm bóng di chuyển vượt quá số bước quy định mà không thực hiện nhồi bóng xuống sàn."
        ]
      },
      {
        num: "Bài 2",
        title: "Kĩ thuật chuyền và bắt bóng hai tay trước ngực bật đất",
        items: [
          "<strong>Chuyền bóng bật đất:</strong> Bóng được cầm giữ ngang trước ngực; phối hợp lực đạp của chân, vươn thân, duỗi thẳng hai tay và miết các đầu ngón tay đẩy bóng đập đất ở điểm cách người nhận khoảng <strong>2/3 cự li</strong> để bóng nảy lên vừa tầm ngực/bụng của đồng đội.",
          "<strong>Bắt bóng:</strong> Hai tay mở rộng đón bóng ở độ nảy lên ngang bụng hoặc ngực, chủ động thu tay về phía ngực để hoãn xung lực bóng."
        ]
      },
      {
        num: "Bài 3",
        title: "Kĩ thuật hai bước ném rổ một tay trên vai (Lay-up)",
        items: [
          "Kĩ thuật thực hiện đối với người thuận tay phải:",
          "&bull; <strong>Bước 1:</strong> Chân phải bước dài ra trước đón nhận bóng, đồng thời giữ chắc bóng ngang thắt lưng hoặc trước ngực.",
          "&bull; <strong>Bước 2:</strong> Chân trái bước ngắn tiếp đất làm đà, đạp mạnh giậm nhảy bật thẳng đứng lên cao, đồng thời đùi chân phải nâng cao đá lăng hỗ trợ lực bật. Hai tay đưa bóng lên phía trên vai phải.",
          "&bull; <strong>Động tác ném rổ:</strong> Ở điểm cao nhất trên không, tay phải vươn thẳng đẩy bóng, gập cổ tay và miết nhẹ các ngón tay ném bóng vào bảng/rổ. Tiếp đất nhẹ nhàng, khuỵu gối bằng hai nửa trước bàn chân để giảm chấn động."
        ]
      }
    ],
    quizzes: [
      {
        q: "Điểm rơi của quả bóng khi thực hiện kĩ thuật chuyền bóng bật đất hai tay trước ngực nằm ở đâu?",
        opts: ["Cách người nhận khoảng 2/3 cự li chuyền", "Cách người nhận 1/3 cự li", "Ngay sát mũi chân người chuyền", "Chính giữa khoảng cách hai người"],
        ans: 0,
        explain: "Điểm bóng đập sàn ở khoảng 2/3 cự li chuyền giúp bóng nảy lên đúng tầm ngực/bụng người đón bóng."
      },
      {
        q: "Trong bóng rổ, hành vi cầm bóng bằng 2 tay sau đó lại tiếp tục dẫn bóng xuống sàn bị phạt lỗi gì?",
        opts: ["Lỗi dẫn bóng 2 lần (dính bóng)", "Lỗi chạy bước", "Lỗi kèm người trái phép", "Lỗi 24 giây"],
        ans: 0,
        explain: "Sau khi đã dừng dẫn bóng và cầm bóng bằng 2 tay thì không được phép tiếp tục dẫn bóng (lỗi Double dribble)."
      }
    ]
  }
];

// 40 questions for Trang Nguyen The Chat 7 Competition
const examQuestions = [
  { q: "Khi tập luyện thể dục thể thao trong thời tiết nắng nóng, thời điểm tập thích hợp nhất là:", opts: ["Sáng sớm hoặc chiều muộn ở nơi râm mát", "Buổi trưa nắng gắt để tiêu mỡ", "Lúc nhiệt độ lên cao nhất", "Nơi kín gió không có không khí"], ans: 0 },
  { q: "Hành động nào sau đây là NGUY HIỂM sau khi kết thúc buổi tập ngoài trời nắng nóng?", opts: ["Dội ngay nước đá lạnh lên đầu tắm", "Uống nước mát từng ngụm nhỏ", "Đi lại thả lỏng nhẹ nhàng", "Dùng khăn khô lau mồ hôi"], ans: 0 },
  { q: "Ánh nắng mặt trời buổi sáng sớm có tác dụng kích thích cơ thể tổng hợp vitamin gì?", opts: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"], ans: 0 },
  { q: "Bài tập chạy lên dốc trong địa hình tự nhiên có tác dụng chính là:", opts: ["Phát triển sức mạnh đạp sau của chân", "Rèn luyện thở ngắn", "Giảm nhịp tim đột ngột", "Học cách trượt chân"], ans: 0 },
  { q: "Độ rộng tiêu chuẩn của mỗi ô chạy cự li ngắn (≤ 400 m) theo luật Điền kinh là:", opts: ["1,22 m ± 0,01 m", "1,00 m", "1,50 m", "2,00 m"], ans: 0 },
  { q: "Trong chạy cự li ngắn 60 m, kĩ thuật xuất phát nào được sử dụng phổ biến ở trường học?", opts: ["Xuất phát cao", "Xuất phát ngồi", "Xuất phát nằm", "Xuất phát tự do"], ans: 0 },
  { q: "Ở bước đầu tiên của giai đoạn chạy lao sau xuất phát, vận động viên cần tránh sai lầm nào?", opts: ["Nhảy vọt quá dài và nâng thân lên quá sớm", "Đạp mạnh hai chân", "Duy trì độ ngả thân trên", "Đánh tay so le nhịp nhàng"], ans: 0 },
  { q: "Động tác đánh đích chuẩn xác trong chạy cự li ngắn 60 m là:", opts: ["Gập thân trên chạm ngực hoặc xoay vai chạm dây đích", "Nhảy bật cả hai chân qua vạch", "Giơ một chân lên cao", "Dừng lại trước vạch đích 1 m"], ans: 0 },
  { q: "Nhảy xa kiểu ngồi gồm có mấy giai đoạn kĩ thuật liên hoàn?", opts: ["4 giai đoạn", "3 giai đoạn", "5 giai đoạn", "2 giai đoạn"], ans: 0 },
  { q: "Thứ tự 4 giai đoạn kĩ thuật của nhảy xa kiểu ngồi là:", opts: ["Chạy đà → Giậm nhảy → Bay trên không → Rơi xuống cát", "Giậm nhảy → Chạy đà → Rơi xuống cát → Bay", "Chạy đà → Rơi xuống cát → Giậm nhảy → Bay", "Bay → Giậm nhảy → Chạy đà → Tiếp đất"], ans: 0 },
  { q: "Quy ước thông thường khi đo đà nhảy xa là 1 bước chạy đà bằng:", opts: ["2 bước đi bộ thường", "1 bước đi bộ", "3 bước đi bộ", "4 bước đi bộ"], ans: 0 },
  { q: "Trong kĩ thuật bay trên không của nhảy xa kiểu ngồi, hai chân thực hiện tư thế nào?", opts: ["Thu chân giậm song song chân lăng, co sát ngực như ngồi xổm", "Đá chéo hai chân", "Duỗi thẳng một chân ra sau", "Đứng thẳng người trên không"], ans: 0 },
  { q: "Quy cách ván giậm nhảy trong môn nhảy xa có chiều rộng tiêu chuẩn là:", opts: ["0,20 m (20 cm)", "0,50 m", "0,10 m", "0,35 m"], ans: 0 },
  { q: "Khi rơi xuống hố cát trong nhảy xa, hai chân tiếp đất bằng bộ phận nào trước?", opts: ["Hai gót chân", "Mũi bàn chân", "Đầu gối", "Bàn tay"], ans: 0 },
  { q: "Hiện tượng 'cực điểm' thường xuất hiện trong nội dung chạy nào?", opts: ["Chạy cự li trung bình", "Chạy cự li ngắn 60 m", "Chạy 30 m xuất phát cao", "Đi bộ 20 m"], ans: 0 },
  { q: "Cảm giác đặc trưng của cơ thể khi rơi vào hiện tượng 'cực điểm' là:", opts: ["Tức ngực, khó thở, chân tay nặng nề rã rời", "Cảm thấy tràn đầy năng lượng", "Nhịp tim đập chậm lại bất thường", "Rất buồn ngủ"], ans: 0 },
  { q: "Khi vượt qua hiện tượng cực điểm, cơ thể bước vào trạng thái dễ chịu gọi là gì?", opts: ["Hô hấp lần hai", "Hô hấp nhân tạo", "Hồi phục hoàn toàn", "Ngủ sâu"], ans: 0 },
  { q: "Nhịp thở hợp lí khi chạy giữa quãng cự li trung bình là:", opts: ["2 - 3 bước hít vào, 2 - 3 bước thở ra", "10 bước hít một lần", "Nín thở suốt chặng", "Thở dồn dập mỗi bước chân"], ans: 0 },
  { q: "Khi chạy cự li trung bình vào đoạn đường cong, thân người cần:", opts: ["Nghiêng sang bên trái (hướng vào tâm)", "Nghiêng sang bên phải", "Ngả hẳn ra sau", "Cúi đầu sát đất"], ans: 0 },
  { q: "Bài thể dục liên hoàn trong chương trình GDTC 7 gồm bao nhiêu nhịp?", opts: ["30 nhịp", "20 nhịp", "35 nhịp", "45 nhịp"], ans: 0 },
  { q: "Ở nhịp 1 của bài thể dục 30 nhịp, hai tay ở tư thế nào?", opts: ["Hai tay dang ngang, lòng bàn tay sấp", "Hai tay giơ cao hình chữ V", "Hai tay chống hông", "Hai tay bắt chéo trước ngực"], ans: 0 },
  { q: "Ở nhịp 7 của bài thể dục liên hoàn 30 nhịp, tư thế cơ thể là:", opts: ["Thăng bằng sấp trên chân trái", "Ngồi xổm hai tay chống đất", "Chống đẩy thẳng người", "Đứng nghiêm"], ans: 0 },
  { q: "Ở nhịp 26 của bài thể dục 30 nhịp, người tập thực hiện động tác:", opts: ["Bật duỗi thẳng 2 chân ra sau thành tư thế chống đẩy", "Bật nhảy xoay 360 độ", "Đứng thẳng giơ tay cao", "Ngồi bệt xuống sàn"], ans: 0 },
  { q: "Nhịp cuối cùng (nhịp 30) của bài thể dục liên hoàn trở về tư thế nào?", opts: ["Tư thế chuẩn bị (đứng nghiêm)", "Tư thế ngồi xổm", "Tư thế nằm sấp", "Tư thế dang tay ngang"], ans: 0 },
  { q: "Trong môn cầu lông, điểm tiếp xúc giữa vợt và quả cầu khi phát cầu thuận tay phải ở vị trí nào?", opts: ["Dưới tầm thắt lưng của người phát", "Trên vai người phát", "Ngang tầm trán", "Trên đỉnh đầu"], ans: 0 },
  { q: "Theo luật thi đấu cầu lông hiện đại, một trận đấu gồm tối đa mấy hiệp?", opts: ["3 hiệp (thắng 2 hiệp là thắng)", "5 hiệp", "1 hiệp duy nhất", "4 hiệp"], ans: 0 },
  { q: "Trong một hiệp đấu cầu lông, bên nào đạt bao nhiêu điểm trước sẽ thắng hiệp (khi chưa hòa 20 đều)?", opts: ["21 điểm", "15 điểm", "25 điểm", "11 điểm"], ans: 0 },
  { q: "Khi tỉ số hiệp đấu cầu lông đạt 20 đều, hiệp đấu sẽ kết thúc khi:", opts: ["Một bên tạo cách biệt 2 điểm", "Bên nào lên 21 điểm", "Trọng tài tung đồng xu", "Thi đấu hiệp phụ"], ans: 0 },
  { q: "Trong bóng đá, vị trí mu trong bàn chân là phần nào?", opts: ["Từ ngón chân cái đến trước mắt cá trong", "Phần gan bàn chân", "Phần gót chân", "Phần mũi ngón chân út"], ans: 0 },
  { q: "Góc chạy đà thích hợp khi đá bóng bằng mu trong bàn chân là:", opts: ["Góc khoảng 30° – 45° so với hướng đá", "Chạy thẳng 90°", "Chạy từ sau lưng quả bóng", "Góc 180°"], ans: 0 },
  { q: "Khoảng cách đặt chân trụ cách quả bóng khi đá bóng mu trong là khoảng:", opts: ["20 – 30 cm", "5 – 10 cm", "50 – 60 cm", "1 mét"], ans: 0 },
  { q: "Kích thước cầu môn tiêu chuẩn trong thi đấu bóng đá 11 người là:", opts: ["Cao 2,44 m và rộng 7,32 m", "Cao 2,00 m và rộng 5,00 m", "Cao 3,00 m và rộng 6,00 m", "Cao 2,20 m và rộng 6,50 m"], ans: 0 },
  { q: "Chiều dài tiêu chuẩn của sân bóng đá 11 người nằm trong khoảng:", opts: ["90 m – 120 m", "60 m – 80 m", "130 m – 150 m", "40 m – 50 m"], ans: 0 },
  { q: "Khi dừng bóng lăn sệt bằng mu giữa bàn chân, động tác hoãn xung là:", opts: ["Chủ động rút chân nhẹ về sau ngay khi chạm bóng", "Đạp thật mạnh lên bóng", "Giữ cứng cổ chân đá bóng ra xa", "Nhảy bật lên cao"], ans: 0 },
  { q: "Trong bóng rổ, khi dẫn bóng theo đường vòng, bàn tay tiếp xúc vào vị trí nào của bóng?", opts: ["Chếch vào phía trên, bên cạnh sau của bóng", "Chính giữa đỉnh bóng", "Dưới đáy bóng hất lên", "Bên hông quả bóng"], ans: 0 },
  { q: "Lỗi dùng 2 tay vỗ bóng cùng lúc trong khi dẫn bóng rổ được gọi là:", opts: ["Lỗi dẫn bóng 2 tay", "Lỗi chạy bước", "Lỗi tấn công trái luật", "Lỗi 3 giây"], ans: 0 },
  { q: "Trong kĩ thuật chuyền bóng bật đất 2 tay trước ngực, bóng đập đất ở vị trí nào?", opts: ["Cách người nhận khoảng 2/3 cự li chuyền", "Cách người nhận 1/3 cự li", "Ngay sát chân người chuyền", "Chính giữa 1/2 cự li"], ans: 0 },
  { q: "Trong kĩ thuật hai bước ném rổ một tay trên vai (thuận tay phải), bước 1 thực hiện chân nào?", opts: ["Chân phải bước dài đón bóng", "Chân trái bước dài đón bóng", "Nhảy chụm cả hai chân", "Bước lùi chân phải"], ans: 0 },
  { q: "Sau khi hoàn thành động tác ném rổ một tay trên vai, người tập tiếp đất như thế nào?", opts: ["Khuỵu gối bằng 2 nửa trước bàn chân", "Tiếp đất bằng gót chân thẳng gối", "Ngã người ra sàn gỗ", "Tiếp đất bằng một chân"], ans: 0 },
  { q: "Hành vi nào sau đây vi phạm luật bóng rổ?", opts: ["Cầm bóng chạy 3 bước mà không dẫn bóng (lỗi chạy bước)", "Chuyền bóng bật đất cho đồng đội", "Dẫn bóng đổi hướng bằng 1 tay", "Ném bóng trúng bảng vào rổ"], ans: 0 }
];

// Helper to generate SVG Mindmap
function generateMindmapSvg(t) {
  const n1 = t.svgNodes[0];
  const n2 = t.svgNodes[1];
  const n3 = t.svgNodes[2];

  return `
    <svg viewBox="0 0 650 130" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_${t.id}_1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n1.color}"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
        <linearGradient id="g_${t.id}_2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n2.color}"/>
          <stop offset="100%" stop-color="#134e4a"/>
        </linearGradient>
        <linearGradient id="g_${t.id}_3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n3.color}"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
      </defs>
      
      <!-- Node 1 -->
      <rect x="15" y="20" width="185" height="90" rx="12" fill="url(#g_${t.id}_1)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="107" y="44" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">${n1.title}</text>
      <text x="107" y="64" fill="#a7f3d0" font-size="8.5" text-anchor="middle">${n1.desc.substring(0, 32)}</text>
      <text x="107" y="82" fill="#d1fae5" font-size="8" text-anchor="middle">${n1.desc.substring(32, 60) || "Kĩ thuật & Nguyên lý"}</text>

      <!-- Arrow 1 -->
      <path d="M 205 65 L 235 65" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="235,60 243,65 235,70" fill="#059669"/>

      <!-- Node 2 -->
      <rect x="245" y="20" width="200" height="90" rx="12" fill="url(#g_${t.id}_2)" stroke="${n2.color}" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="345" y="44" fill="#facc15" font-size="10.5" font-weight="bold" text-anchor="middle">${n2.title}</text>
      <text x="345" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${n2.desc.substring(0, 33)}</text>
      <text x="345" y="82" fill="#cbd5e1" font-size="8" text-anchor="middle">${n2.desc.substring(33, 62) || "Tập luyện an toàn"}</text>

      <!-- Arrow 2 -->
      <path d="M 450 65 L 480 65" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="480,60 488,65 480,70" fill="#059669"/>

      <!-- Node 3 -->
      <rect x="490" y="20" width="145" height="90" rx="12" fill="url(#g_${t.id}_3)" stroke="${n3.color}" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="562" y="44" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">${n3.title}</text>
      <text x="562" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${n3.desc.substring(0, 24)}</text>
      <text x="562" y="82" fill="#fef3c7" font-size="8" text-anchor="middle">${n3.desc.substring(24, 46) || "Nâng cao thể lực"}</text>
    </svg>
  `;
}

// Render All Topics HTML

// ==================== HÌNH MINH HỌA KĨ THUẬT & SÂN BÃI THỂ THAO ====================
// Module generate_all_illustrations.js
// Exports getTopicIllustration(topicId) for GDTC 7

function getTopicIllustration(topicId) {
  switch (topicId) {
    case 'phan-1-kien-thuc-chung':
      return `
        <!-- HÌNH MINH HỌA 1: 4 YẾU TỐ MÔI TRƯỜNG & AN TOÀN TẬP LUYỆN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-image"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 1: Đồ Họa Phân Tích 4 Yếu Tố Môi Trường &amp; An Toàn Y Học Thể Thao</h4>
                <p class="text-[11px] text-emerald-300/80">Nhiệt độ, độ ẩm, ánh sáng, nước và địa hình tự nhiên trong GDTC 7</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Chuẩn GDPT 2018</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 360" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad_temp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="grad_wind" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#0e7490" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="grad_sun" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="grad_terr" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
                </linearGradient>
              </defs>

              <circle cx="425" cy="180" r="48" fill="#1e293b" stroke="#10b981" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"/>
              <text x="425" y="174" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900" letter-spacing="0.5">MÔI TRƯỜNG</text>
              <text x="425" y="190" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">TỰ NHIÊN</text>
              <text x="425" y="204" text-anchor="middle" fill="#94a3b8" font-size="8.5">GDTC 7</text>

              <line x1="380" y1="150" x2="220" y2="85" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,3"/>
              <line x1="470" y1="150" x2="630" y2="85" stroke="#06b6d4" stroke-width="1.8" stroke-dasharray="4,3"/>
              <line x1="380" y1="210" x2="220" y2="275" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,3"/>
              <line x1="470" y1="210" x2="630" y2="275" stroke="#10b981" stroke-width="1.8" stroke-dasharray="4,3"/>

              <!-- 1. Nhiệt độ không khí -->
              <g transform="translate(15, 15)">
                <rect width="360" height="135" rx="14" fill="url(#grad_temp)" stroke="#ef4444" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#ef4444" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#fca5a5" font-size="16">🌡️</text>
                <text x="56" y="27" fill="#fca5a5" font-size="12" font-weight="800">1. NHIỆT ĐỘ KHÔNG KHÍ</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Ảnh hưởng co dãn mạch &amp; điều nhiệt cơ thể</text>
                <path d="M 20 54 L 340 54" stroke="#ef4444" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Trời nóng: Tập sáng sớm/chiều muộn, trang phục thoáng mát.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Trời lạnh: Khởi động kĩ, mặc ấm, bảo vệ đường hô hấp.</text>
                <rect x="25" y="100" width="310" height="24" rx="6" fill="#7f1d1d" fill-opacity="0.6" stroke="#ef4444" stroke-width="1"/>
                <text x="180" y="116" text-anchor="middle" fill="#fecaca" font-size="9" font-weight="800">⚠️ TUYỆT ĐỐI KHÔNG DỘI NƯỚC LẠNH NGAY KHI VỪA TẬP!</text>
              </g>

              <!-- 2. Độ ẩm & Gió -->
              <g transform="translate(475, 15)">
                <rect width="360" height="135" rx="14" fill="url(#grad_wind)" stroke="#06b6d4" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#06b6d4" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#67e8f9" font-size="16">💨</text>
                <text x="56" y="27" fill="#67e8f9" font-size="12" font-weight="800">2. ĐỘ ẨM KHÔNG KHÍ &amp; GIÓ</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Cản trở bốc hơi mồ hôi &amp; mất nhiệt nhanh</text>
                <path d="M 20 54 L 340 54" stroke="#06b6d4" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Nắng nóng + ẩm cao: Khó toả nhiệt &rarr; giảm cường độ, lau mồ hôi.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Trời rét + ẩm cao: Dễ nhiễm lạnh &rarr; giữ ấm cổ ngực, tránh gió lùa.</text>
                <text x="25" y="108" fill="#f8fafc" font-size="9.5">&bull; Gió lớn: Làm tăng nhanh mất nước; gió rét làm giảm linh hoạt khớp.</text>
                <text x="25" y="124" fill="#a5f3fc" font-size="8.5" font-weight="700">&rarr; Nguyên tắc: Bù nước từng ngụm nhỏ, tập nơi kín gió khi trời rét.</text>
              </g>

              <!-- 3. Ánh sáng mặt trời -->
              <g transform="translate(15, 205)">
                <rect width="360" height="140" rx="14" fill="url(#grad_sun)" stroke="#f59e0b" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#f59e0b" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#fde68a" font-size="16">☀️</text>
                <text x="56" y="27" fill="#fde68a" font-size="12" font-weight="800">3. ÁNH SÁNG MẶT TRỜI &amp; TIA UV</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Hấp thu Vitamin D vs Tác hại tia tử ngoại UV</text>
                <path d="M 20 54 L 340 54" stroke="#f59e0b" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Nắng sớm hợp lý: Kích thích tổng hợp Vitamin D, phát triển xương.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Nắng gắt (trưa - chiều): Tia UV phá huỷ tế bào da, say nắng, hại mắt.</text>
                <rect x="25" y="102" width="310" height="26" rx="6" fill="#78350f" fill-opacity="0.6" stroke="#f59e0b" stroke-width="1"/>
                <text x="180" y="119" text-anchor="middle" fill="#fef3c7" font-size="8.8" font-weight="700">Đội mũ, bôi kem chống nắng, tập dưới bóng râm râm mát</text>
              </g>

              <!-- 4. Nước & Địa hình tự nhiên -->
              <g transform="translate(475, 205)">
                <rect width="360" height="140" rx="14" fill="url(#grad_terr)" stroke="#10b981" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#10b981" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#a7f3d0" font-size="16">⛰️</text>
                <text x="56" y="27" fill="#a7f3d0" font-size="12" font-weight="800">4. MÔI TRƯỜNG NƯỚC &amp; ĐỊA HÌNH</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Rèn luyện kháng lực, sức bền &amp; sự khéo léo</text>
                <path d="M 20 54 L 340 54" stroke="#10b981" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Bơi lội / Nước cạn: Tăng sức cản, phát triển toàn diện hệ hô hấp.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Chạy lên dốc: Phát triển sức mạnh cơ bắp và kĩ thuật đạp sau.</text>
                <text x="25" y="108" fill="#f8fafc" font-size="9.5">&bull; Chạy trên cát: Tăng sức mạnh bàn chân, mắt cá và thăng bằng.</text>
                <text x="25" y="126" fill="#f8fafc" font-size="9.5">&bull; Chạy địa hình mấp mô quanh co: Rèn sức bền dẻo dai và tính linh hoạt.</text>
              </g>
            </svg>
          </div>

          <div class="mt-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <span class="font-bold text-blue-300 block">Trước khi tập 20-30p</span>
                <span class="text-slate-300 text-[11px]">Uống 200 - 300ml nước lọc, khởi động kỹ các khớp</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <span class="font-bold text-amber-300 block">Trong khi luyện tập</span>
                <span class="text-slate-300 text-[11px]">Bổ sung 100-150ml sau mỗi 15-20 phút, uống từng ngụm nhỏ</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <span class="font-bold text-emerald-300 block">Sau khi kết thúc</span>
                <span class="text-slate-300 text-[11px]">Thả lỏng hồi tĩnh, lau khô mồ hôi, tuyệt đối không tắm lạnh ngay</span>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'chay-cu-li-ngan-60m':
      return `
        <!-- HÌNH MINH HỌA 2: KĨ THUẬT 4 GIAI ĐOẠN CHẠY 60 M -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-person-running"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 2: Phân Tích Kĩ Thuật 4 Giai Đoạn Chạy Cự Li Ngắn (60 m)</h4>
                <p class="text-[11px] text-emerald-300/80">Xuất phát cao &rarr; Chạy lao sau XP &rarr; Chạy giữa quãng &rarr; Về đích và đánh đích</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cự li 60 m</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="track_grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#b91c1c"/>
                  <stop offset="50%" stop-color="#c2410c"/>
                  <stop offset="100%" stop-color="#047857"/>
                </linearGradient>
              </defs>

              <!-- Running Track Ground -->
              <rect x="20" y="210" width="810" height="20" rx="4" fill="url(#track_grad)"/>
              <line x1="20" y1="210" x2="830" y2="210" stroke="#f8fafc" stroke-width="2"/>
              <line x1="40" y1="190" x2="40" y2="230" stroke="#f8fafc" stroke-width="3"/>
              <text x="40" y="245" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="900">VẠCH XP</text>

              <line x1="810" y1="170" x2="810" y2="230" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3"/>
              <text x="810" y="245" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="900">DÂY ĐÍCH</text>

              <!-- PHASE 1: Xuất phát cao -->
              <g transform="translate(40, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#ef4444" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#ef4444" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-weight="900">1. XUẤT PHÁT CAO</text>
                
                <!-- Stickman figure: Sẵn sàng -->
                <circle cx="85" cy="55" r="8" fill="#fca5a5"/>
                <line x1="85" y1="63" x2="72" y2="95" stroke="#fca5a5" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Front leg bent -->
                <line x1="72" y1="95" x2="58" y2="125" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <line x1="58" y1="125" x2="52" y2="155" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <!-- Back leg -->
                <line x1="72" y1="95" x2="95" y2="125" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <line x1="95" y1="125" x2="110" y2="155" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms bent -->
                <line x1="78" y1="75" x2="60" y2="95" stroke="#fca5a5" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="78" y1="75" x2="95" y2="85" stroke="#fca5a5" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="170" text-anchor="middle" fill="#fca5a5" font-size="8.5" font-weight="700">Trọng tâm dồn 70% chân trước</text>
              </g>

              <!-- Arrow 1 -> 2 -->
              <path d="M 215 105 L 240 105" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>

              <!-- PHASE 2: Chạy lao -->
              <g transform="translate(245, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#f97316" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#f97316" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#fdba74" font-size="10.5" font-weight="900">2. CHẠY LAO SAU XP</text>

                <!-- Runner leaning 45 deg -->
                <circle cx="105" cy="60" r="8" fill="#fdba74"/>
                <line x1="105" y1="68" x2="75" y2="105" stroke="#fdba74" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Thrust leg -->
                <line x1="75" y1="105" x2="48" y2="148" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
                <!-- Swing leg forward -->
                <line x1="75" y1="105" x2="100" y2="118" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
                <line x1="100" y1="118" x2="88" y2="148" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms swing -->
                <line x1="92" y1="80" x2="115" y2="92" stroke="#fdba74" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="92" y1="80" x2="68" y2="70" stroke="#fdba74" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="163" text-anchor="middle" fill="#fdba74" font-size="8.5" font-weight="700">Độ ngả thân 45°-50°</text>
                <text x="85" y="173" text-anchor="middle" fill="#94a3b8" font-size="8">Tăng dần độ dài &amp; tần số bước</text>
              </g>

              <!-- Arrow 2 -> 3 -->
              <path d="M 420 105 L 445 105" stroke="#f8fafc" stroke-width="2"/>

              <!-- PHASE 3: Chạy giữa quãng -->
              <g transform="translate(450, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#10b981" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#10b981" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="900">3. CHẠY GIỮA QUÃNG</text>

                <!-- High knee runner -->
                <circle cx="85" cy="50" r="8" fill="#6ee7b7"/>
                <line x1="85" y1="58" x2="80" y2="98" stroke="#6ee7b7" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Back drive leg (50-55 deg) -->
                <line x1="80" y1="98" x2="52" y2="148" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
                <!-- Front knee high 90 deg -->
                <line x1="80" y1="98" x2="112" y2="105" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
                <line x1="112" y1="105" x2="108" y2="135" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms swing 90 deg -->
                <line x1="82" y1="72" x2="60" y2="82" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="82" y1="72" x2="105" y2="65" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="163" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">Đạp sau cực mạnh (50°-55°)</text>
                <text x="85" y="173" text-anchor="middle" fill="#94a3b8" font-size="8">Đùi nâng cao, đánh tay so le</text>
              </g>

              <!-- Arrow 3 -> 4 -->
              <path d="M 625 105 L 650 105" stroke="#f8fafc" stroke-width="2"/>

              <!-- PHASE 4: Về đích -->
              <g transform="translate(655, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#3b82f6" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#3b82f6" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#93c5fd" font-size="10.5" font-weight="900">4. VỀ ĐÍCH &amp; ĐÁNH ĐÍCH</text>

                <!-- Runner breasting the tape -->
                <circle cx="98" cy="55" r="8" fill="#93c5fd"/>
                <line x1="98" y1="63" x2="75" y2="102" stroke="#93c5fd" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Legs crossing -->
                <line x1="75" y1="102" x2="60" y2="148" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
                <line x1="75" y1="102" x2="105" y2="135" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms thrown back / torso dip -->
                <line x1="88" y1="76" x2="65" y2="92" stroke="#93c5fd" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="88" y1="76" x2="60" y2="68" stroke="#93c5fd" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="163" text-anchor="middle" fill="#93c5fd" font-size="8.5" font-weight="700">Gập ngực / Xoay vai chạm đích</text>
                <text x="85" y="173" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="700">Cấm nhảy lên &amp; cấm dừng đột ngột</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'nhay-xa-kieu-ngoi':
      return `
        <!-- HÌNH MINH HỌA 3: KĨ THUẬT NHẢY XA KIỂU NGỒI & BÃI NHẢY CHUẨN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-arrows-split-up-and-left"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 3: Phân Tích Kĩ Thuật Nhảy Xa Kiểu Ngồi &amp; Quy Cách Bãi Nhảy Tiêu Chuẩn</h4>
                <p class="text-[11px] text-emerald-300/80">Chạy đà &rarr; Giậm nhảy góc 70°-75° &rarr; Tư thế ngồi trên không &rarr; Tiếp đất hoãn xung</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Điền kinh lớp 7</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 300" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sand_grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
                  <stop offset="100%" stop-color="#d97706" stop-opacity="0.9"/>
                </linearGradient>
              </defs>

              <!-- Runway & Sand Pit Ground -->
              <!-- Runway -->
              <rect x="20" y="215" width="430" height="15" fill="#dc2626" rx="2"/>
              <line x1="20" y1="215" x2="450" y2="215" stroke="#ffffff" stroke-width="2"/>
              <text x="150" y="245" fill="#f87171" font-size="10" font-weight="800">ĐƯỜNG CHẠY ĐÀ (&ge; 40 m)</text>

              <!-- Take-off Board -->
              <rect x="420" y="213" width="30" height="17" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
              <rect x="445" y="213" width="5" height="17" fill="#ef4444"/>
              <text x="435" y="245" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="900">VÁN GIẬM</text>
              <text x="435" y="258" text-anchor="middle" fill="#94a3b8" font-size="8">1.22 x 0.20m</text>

              <!-- Free space -->
              <rect x="450" y="215" width="70" height="15" fill="#475569"/>
              <text x="485" y="245" text-anchor="middle" fill="#94a3b8" font-size="8.5">1 - 3m</text>

              <!-- Sand pit -->
              <rect x="520" y="215" width="310" height="25" fill="url(#sand_grad)" rx="4"/>
              <text x="675" y="255" text-anchor="middle" fill="#fef3c7" font-size="11" font-weight="900">HỐ CÁT TIÊU CHUẨN (Rộng 2.75m &bull; Dài 7 - 9m)</text>

              <!-- FLIGHT TRAJECTORY CURVE -->
              <path d="M 435 210 Q 560 40 700 215" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>

              <!-- STEP 1: CHẠY ĐÀ -->
              <g transform="translate(60, 60)">
                <circle cx="30" cy="50" r="7" fill="#fca5a5"/>
                <line x1="30" y1="57" x2="25" y2="85" stroke="#fca5a5" stroke-width="3"/>
                <line x1="25" y1="85" x2="10" y2="125" stroke="#fca5a5" stroke-width="2.8"/>
                <line x1="25" y1="85" x2="48" y2="115" stroke="#fca5a5" stroke-width="2.8"/>
                <line x1="48" y1="115" x2="40" y2="145" stroke="#fca5a5" stroke-width="2.8"/>
                <text x="30" y="25" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="900">1. CHẠY ĐÀ</text>
                <text x="30" y="38" text-anchor="middle" fill="#94a3b8" font-size="8">11 - 15 bước tăng tốc</text>
              </g>

              <!-- STEP 2: GIẬM NHẢY -->
              <g transform="translate(390, 45)">
                <circle cx="45" cy="55" r="7" fill="#fbbf24"/>
                <line x1="45" y1="62" x2="45" y2="95" stroke="#fbbf24" stroke-width="3"/>
                <!-- Takeoff leg straight on board -->
                <line x1="45" y1="95" x2="45" y2="155" stroke="#f59e0b" stroke-width="3.5"/>
                <!-- Free leg swinging forward high -->
                <line x1="45" y1="95" x2="72" y2="90" stroke="#f59e0b" stroke-width="3"/>
                <line x1="72" y1="90" x2="70" y2="120" stroke="#f59e0b" stroke-width="3"/>
                <!-- Arms swing up -->
                <line x1="45" y1="72" x2="68" y2="55" stroke="#fbbf24" stroke-width="2.5"/>
                <line x1="45" y1="72" x2="25" y2="65" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="45" y="20" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="900">2. GIẬM NHẢY</text>
                <text x="45" y="33" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="800">Góc giậm 70°-75°</text>
              </g>

              <!-- STEP 3: BAY TRÊN KHÔNG (TƯ THẾ NGỒI) -->
              <g transform="translate(540, 20)">
                <circle cx="45" cy="40" r="7" fill="#34d399"/>
                <!-- Torso bent forward -->
                <line x1="45" y1="47" x2="35" y2="75" stroke="#34d399" stroke-width="3"/>
                <!-- Both thighs pulled up to chest (SITTING POSE) -->
                <line x1="35" y1="75" x2="65" y2="70" stroke="#10b981" stroke-width="3.5"/>
                <line x1="65" y1="70" x2="70" y2="98" stroke="#10b981" stroke-width="3.5"/>
                <!-- Arms reaching forward -->
                <line x1="40" y1="58" x2="68" y2="58" stroke="#34d399" stroke-width="2.5"/>
                <text x="50" y="15" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="900">3. BAY TRÊN KHÔNG</text>
                <text x="50" y="27" text-anchor="middle" fill="#a7f3d0" font-size="8.5" font-weight="800">Tư thế "Ngồi trên không"</text>
              </g>

              <!-- STEP 4: RƠI XUỐNG CÁT (TIẾP ĐẤT) -->
              <g transform="translate(685, 65)">
                <circle cx="35" cy="45" r="7" fill="#a855f7"/>
                <line x1="35" y1="52" x2="25" y2="80" stroke="#a855f7" stroke-width="3"/>
                <!-- Knees deeply bent to absorb impact -->
                <line x1="25" y1="80" x2="48" y2="95" stroke="#c084fc" stroke-width="3.5"/>
                <line x1="48" y1="95" x2="35" y2="135" stroke="#c084fc" stroke-width="3.5"/>
                <!-- Arms reach forward -->
                <line x1="30" y1="62" x2="55" y2="75" stroke="#a855f7" stroke-width="2.5"/>
                <text x="40" y="20" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="900">4. TIẾP ĐẤT</text>
                <text x="40" y="32" text-anchor="middle" fill="#f8fafc" font-size="8">Chùng gối hoãn xung</text>
                <text x="40" y="42" text-anchor="middle" fill="#fca5a5" font-size="7.5">Đổ người tới trước</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'chay-cu-li-trung-binh':
      return `
        <!-- HÌNH MINH HỌA 4: NHỊP THỞ & CHIẾN THUẬT CHẠY CỰ LI TRUNG BÌNH -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-lungs"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 4: Kĩ Thuật Hít Thở Thể Thao &amp; Chiến Thuật Vượt Hiện Tượng "Cực Điểm"</h4>
                <p class="text-[11px] text-emerald-300/80">Nhịp thở 2:2 &bull; Hô hấp lần hai &bull; Đường chạy vòng dồn làn số 1</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cự li TB</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 270" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left Panel: Breathing rhythm -->
              <g transform="translate(15, 15)">
                <rect width="395" height="235" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#06b6d4" stroke-width="1.5"/>
                <rect x="15" y="15" width="365" height="26" rx="6" fill="#0891b2" fill-opacity="0.3"/>
                <text x="195" y="32" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="900">1. CHU KÌ HÍT THỞ THỂ THAO (NHỊP 2:2 HOẶC 3:3)</text>

                <!-- Inhale card -->
                <rect x="25" y="55" width="165" height="110" rx="8" fill="#0e7490" fill-opacity="0.25" stroke="#06b6d4" stroke-width="1"/>
                <text x="107" y="75" text-anchor="middle" fill="#a5f3fc" font-size="11" font-weight="800">2 BƯỚC HÍT VÀO</text>
                <circle cx="107" cy="105" r="20" fill="#06b6d4" fill-opacity="0.2"/>
                <text x="107" y="112" text-anchor="middle" fill="#38bdf8" font-size="20">👃</text>
                <text x="107" y="142" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Hít sâu bằng MŨI</text>
                <text x="107" y="155" text-anchor="middle" fill="#94a3b8" font-size="8">Nạp tối đa lượng O₂</text>

                <!-- Exhale card -->
                <rect x="205" y="55" width="165" height="110" rx="8" fill="#0369a1" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1"/>
                <text x="287" y="75" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="800">2 BƯỚC THỞ RA</text>
                <circle cx="287" cy="105" r="20" fill="#38bdf8" fill-opacity="0.2"/>
                <text x="287" y="112" text-anchor="middle" fill="#38bdf8" font-size="20">👄</text>
                <text x="287" y="142" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Thở mạnh bằng MIỆNG</text>
                <text x="287" y="155" text-anchor="middle" fill="#94a3b8" font-size="8">Tống hết CO₂ tồn đọng</text>

                <rect x="25" y="175" width="345" height="45" rx="6" fill="#0f172a" stroke="#0891b2" stroke-width="0.8"/>
                <text x="197" y="193" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">&bull; Thở nông &rarr; Thiếu O₂ &rarr; Mau mệt, chuột rút và đau xóc hông.</text>
                <text x="197" y="210" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Phải duy trì nhịp thở đều đặn và sâu ngay từ những bước chạy đầu tiên.</text>
              </g>

              <!-- Right Panel: Second wind & tactical line -->
              <g transform="translate(430, 15)">
                <rect width="405" height="235" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#f59e0b" stroke-width="1.5"/>
                <rect x="15" y="15" width="375" height="26" rx="6" fill="#d97706" fill-opacity="0.3"/>
                <text x="202" y="32" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">2. HIỆN TƯỢNG "CỰC ĐIỂM" &amp; "HÔ HẤP LẦN HAI"</text>

                <!-- Energy Curve Diagram -->
                <path d="M 35 150 Q 85 80 145 155 Q 225 100 370 110" fill="none" stroke="#f59e0b" stroke-width="3"/>
                <circle cx="145" cy="155" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
                <text x="145" y="178" text-anchor="middle" fill="#fca5a5" font-size="9.5" font-weight="800">"CỰC ĐIỂM"</text>
                <text x="145" y="190" text-anchor="middle" fill="#f87171" font-size="8">Khó thở, chân nặng chì</text>

                <circle cx="280" cy="105" r="7" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
                <text x="280" y="88" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="800">"HÔ HẤP LẦN HAI"</text>
                <text x="280" y="100" text-anchor="middle" fill="#a7f3d0" font-size="8">Hô hấp thông suốt, ổn định</text>

                <!-- Strategy card -->
                <rect x="25" y="198" width="355" height="26" rx="6" fill="#78350f" fill-opacity="0.7" stroke="#f59e0b" stroke-width="1"/>
                <text x="202" y="215" text-anchor="middle" fill="#fef3c7" font-size="8.8" font-weight="800">Chiến thuật: Giảm nhẹ tốc độ + Thở sâu + Kiên trì &rarr; Vượt qua cực điểm</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'bai-the-duc-30-nhip':
      return `
        <!-- HÌNH MINH HỌA 5: MA TRẬN 30 NHỊP BÀI THỂ DỤC LIÊN HOÀN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-child-reaching"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 5: Bảng Đồ Họa Phân Nhóm 30 Nhịp Bài Thể Dục Liên Hoàn Lớp 7</h4>
                <p class="text-[11px] text-emerald-300/80">6 Khối động tác: Vươn thở &bull; Nghiêng lườn &bull; Gập bụng &bull; Thăng bằng &bull; Bật nhảy &bull; Hồi tĩnh</p>
              </div>
            </div>
            <button onclick="openStopwatchModal()" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition">
              <i class="fa-solid fa-play"></i> Bật Đếm Nhịp
            </button>
          </div>

          <!-- 6 Group Movement Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            <!-- Group 1 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500 text-slate-900">NHỊP 1 - 5</span>
                <span class="text-[11px] font-bold text-emerald-400">VƯƠN THỞ &amp; TAY</span>
              </div>
              <p class="text-xs font-semibold text-white">Kiễng gót, tay dang ngang &amp; lên cao</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N1: Kiễng gót, 2 tay dang ngang lòng bàn tay sấp.<br>&bull; N2-3: Vươn cao hít sâu, lòng bàn tay hướng vào nhau.<br>&bull; N4-5: Hạ gót, gập cẳng tay trước ngực, thở ra.</p>
            </div>

            <!-- Group 2 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-teal-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-teal-500 text-slate-900">NHỊP 6 - 10</span>
                <span class="text-[11px] font-bold text-teal-400">NGHIÊNG LƯỜN &amp; VẶN MÌNH</span>
              </div>
              <p class="text-xs font-semibold text-white">Căng cơ liên sườn &amp; xoay thân 90°</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N6: Bước chân trái sang ngang, nghiêng lườn sâu.<br>&bull; N7: Thu về thẳng thân.<br>&bull; N8: Đổi nghiêng lườn sang phải.<br>&bull; N9-10: Vặn mình 90° sang trái/phải, hai tay dang ngang.</p>
            </div>

            <!-- Group 3 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-cyan-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-cyan-500 text-slate-900">NHỊP 11 - 15</span>
                <span class="text-[11px] font-bold text-cyan-400">GẬP THÂN &amp; NGỒI XỔM</span>
              </div>
              <p class="text-xs font-semibold text-white">Rèn cơ bụng &amp; độ dẻo cột sống</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N11: Cúi gập thân sâu, 2 tay chạm 2 mũi chân.<br>&bull; N12: Đứng thẳng vươn tay.<br>&bull; N13-14: Ngồi xổm kiễng gót, 2 tay song song trước ngực, lưng thẳng.<br>&bull; N15: Đứng lên về TTCB.</p>
            </div>

            <!-- Group 4 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-blue-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-500 text-slate-900">NHỊP 16 - 20</span>
                <span class="text-[11px] font-bold text-blue-400">DUỖI CHÂN &amp; THĂNG BẰNG</span>
              </div>
              <p class="text-xs font-semibold text-white">Phát triển sức mạnh đùi &amp; thăng bằng</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N16-17: Chống tay ngồi xổm, duỗi thẳng chân trái ra sau.<br>&bull; N18: Thu chân trái, duỗi thẳng chân phải ra sau.<br>&bull; N19-20: Đứng lên thăng bằng 1 chân, 2 tay dang ngang giữ ổn định.</p>
            </div>

            <!-- Group 5 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-amber-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500 text-slate-900">NHỊP 21 - 25</span>
                <span class="text-[11px] font-bold text-amber-400">BẬT NHẢY LIÊN HOÀN</span>
              </div>
              <p class="text-xs font-semibold text-white">Rèn sức bật bộc phát &amp; khéo léo</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N21: Bật nhảy tách 2 chân sang ngang, 2 tay dang ngang.<br>&bull; N22: Bật nhảy khép chân, vỗ 2 tay lên cao.<br>&bull; N23-24: Lặp lại bật tách và chụm chân nhịp nhàng.<br>&bull; N25: Rơi xuống chùng nhẹ gối hoãn xung.</p>
            </div>

            <!-- Group 6 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-purple-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-purple-500 text-slate-900">NHỊP 26 - 30</span>
                <span class="text-[11px] font-bold text-purple-400">ĐIỀU HÒA &amp; HỒI TĨNH</span>
              </div>
              <p class="text-xs font-semibold text-white">Thả lỏng toàn thân trở về TTCB</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N26-27: Nâng đùi chân trái vỗ tay dưới đùi, đổi chân phải.<br>&bull; N28-29: Bước lùi nhẹ nhàng, lắc cổ tay cổ chân, hít sâu thở chậm.<br>&bull; N30: Đưa cơ thể về tư thế đứng nghiêm chuẩn bị.</p>
            </div>
          </div>
        </div>
      `;

    case 'cau-long':
      return `
        <!-- HÌNH MINH HỌA 6: CẦM VỢT & SÂN CẦU LÔNG TIÊU CHUẨN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-feather"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 6: Kĩ Thuật Cầm Vợt &amp; Sơ Đồ Sân Cầu Lông Tiêu Chuẩn (BWF)</h4>
                <p class="text-[11px] text-emerald-300/80">Cầm thuận tay (V-grip) &bull; Cầm trái tay &bull; Kích thước sân đơn và sân đôi</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cầu Lông</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: Grips comparison -->
              <g transform="translate(15, 15)">
                <rect width="365" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#10b981" stroke-width="1.5"/>
                <rect x="15" y="15" width="335" height="25" rx="5" fill="#059669" fill-opacity="0.3"/>
                <text x="182" y="32" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="900">KĨ THUẬT CẦM VỢT CHUẨN THỂ THAO</text>

                <!-- Forehand V-grip -->
                <rect x="20" y="52" width="155" height="125" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="97" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="800">CẦM THUẬN TAY</text>
                <text x="97" y="84" text-anchor="middle" fill="#34d399" font-size="9" font-weight="700">(Forehand / Chữ V)</text>
                <text x="97" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Ngón cái &amp; trỏ tạo hình chữ V</text>
                <text x="97" y="120" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Chữ V thẳng hàng cạnh trên cán</text>
                <text x="97" y="135" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Ngón trỏ hơi cách ngón giữa</text>
                <text x="97" y="155" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">&rarr; Phát cầu, đập cầu, lốp cầu</text>

                <!-- Backhand Grip -->
                <rect x="190" y="52" width="155" height="125" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="267" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="800">CẦM TRÁI TAY</text>
                <text x="267" y="84" text-anchor="middle" fill="#34d399" font-size="9" font-weight="700">(Backhand Grip)</text>
                <text x="267" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Vợt hơi xoay vào trong</text>
                <text x="267" y="120" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Ngón cái tựa vào cạnh rộng cán</text>
                <text x="267" y="135" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Lực bẩy chủ yếu từ ngón cái</text>
                <text x="267" y="155" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">&rarr; Đỡ đập &amp; đánh cầu bên trái</text>

                <rect x="20" y="188" width="325" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="0.8"/>
                <text x="182" y="205" text-anchor="middle" fill="#fef3c7" font-size="8.8" font-weight="700">⚠️ Không nắm quá chặt làm cứng cổ tay; thả lỏng để phát lực linh hoạt!</text>
              </g>

              <!-- Right: Badminton Court Dimension -->
              <g transform="translate(400, 15)">
                <rect width="435" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#38bdf8" stroke-width="1.5"/>
                <rect x="15" y="15" width="405" height="25" rx="5" fill="#0284c7" fill-opacity="0.3"/>
                <text x="217" y="32" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">SƠ ĐỒ SÂN CẦU LÔNG CHUẨN QUỐC TẾ (BWF)</text>

                <!-- Court layout -->
                <rect x="30" y="55" width="375" height="135" fill="#047857" stroke="#ffffff" stroke-width="2"/>
                <!-- Net in middle -->
                <line x1="217" y1="50" x2="217" y2="195" stroke="#ffffff" stroke-width="3"/>
                <!-- Net posts text -->
                <text x="217" y="47" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="800">LƯỚI: Cao 1.55m (cột) / 1.524m (giữa)</text>

                <!-- Singles sidelines (inner) -->
                <line x1="30" y1="67" x2="405" y2="67" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="30" y1="178" x2="405" y2="178" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>
                <!-- Short service lines (1.98m from net) -->
                <line x1="162" y1="55" x2="162" y2="190" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="272" y1="55" x2="272" y2="190" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Center service lines -->
                <line x1="30" y1="122" x2="162" y2="122" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="272" y1="122" x2="405" y2="122" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Doubles long service line (0.76m from back) -->
                <line x1="52" y1="55" x2="52" y2="190" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="383" y1="55" x2="383" y2="190" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>

                <!-- Dimensions text -->
                <text x="217" y="208" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">Tổng chiều dài sân: 13.40 m</text>
                <text x="217" y="222" text-anchor="middle" fill="#a7f3d0" font-size="8.5">Rộng sân Đôi: 6.10 m &bull; Rộng sân Đơn: 5.18 m</text>
                <text x="217" y="235" text-anchor="middle" fill="#94a3b8" font-size="8">Vạch giao cầu ngắn cách lưới: 1.98 m &bull; Vạch đáy giao cầu đôi cách biên: 0.76 m</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'bong-da':
      return `
        <!-- HÌNH MINH HỌA 7: KĨ THUẬT ĐÁ BÓNG & SÂN BÓNG ĐÁ 11 NGƯỜI -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-futbol"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 7: Phân Tích Kĩ Thuật Đá Bóng &amp; Sơ Đồ Sân Bóng Đá 11 Người Chuẩn FIFA</h4>
                <p class="text-[11px] text-emerald-300/80">Đá mu giữa bàn chân &bull; Đá lòng bàn chân &bull; Quy cách sân 105m x 68m</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Bóng Đá</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: 2 Kicking techniques -->
              <g transform="translate(15, 15)">
                <rect width="365" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#10b981" stroke-width="1.5"/>
                <rect x="15" y="15" width="335" height="25" rx="5" fill="#047857" fill-opacity="0.3"/>
                <text x="182" y="32" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="900">SO SÁNH 2 KĨ THUẬT ĐÁ BÓNG CƠ BẢN</text>

                <!-- Instep kick -->
                <rect x="20" y="52" width="155" height="135" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="97" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="800">MU GIỮA BÀN CHÂN</text>
                <text x="97" y="84" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">(Instep Kick)</text>
                <text x="97" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Khóa chặt cổ chân</text>
                <text x="97" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Mũi chân cắm xuống đất</text>
                <text x="97" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Điểm tiếp xúc: Tâm bóng</text>
                <text x="97" y="150" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">Đặc tính: Căng, rất mạnh</text>
                <text x="97" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.8">Sút cầu môn, chuyền dài</text>

                <!-- Inside kick -->
                <rect x="190" y="52" width="155" height="135" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="267" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="800">LÒNG BÀN CHÂN</text>
                <text x="267" y="84" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">(Inside Kick)</text>
                <text x="267" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Chân trụ cách bóng 15-20cm</text>
                <text x="267" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Bẻ vuông góc bàn chân 90°</text>
                <text x="267" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Mở rộng khớp háng</text>
                <text x="267" y="150" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">Đặc tính: Rất chuẩn xác</text>
                <text x="267" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.8">Chuyền cự li ngắn, phối hợp</text>

                <rect x="20" y="196" width="325" height="36" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="0.8"/>
                <text x="182" y="218" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="700">Nguyên tắc: Chân trụ vững &rarr; Vung chân lăng đúng hướng &rarr; Khóa cổ chân</text>
              </g>

              <!-- Right: Football pitch FIFA dimensions -->
              <g transform="translate(400, 15)">
                <rect width="435" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#22c55e" stroke-width="1.5"/>
                <rect x="15" y="15" width="405" height="25" rx="5" fill="#15803d" fill-opacity="0.3"/>
                <text x="217" y="32" text-anchor="middle" fill="#86efac" font-size="11" font-weight="900">SÂN BÓNG ĐÁ 11 NGƯỜI TIÊU CHUẨN FIFA</text>

                <!-- Pitch field -->
                <rect x="30" y="52" width="375" height="145" fill="#15803d" stroke="#ffffff" stroke-width="2"/>
                <!-- Halfway line -->
                <line x1="217" y1="52" x2="217" y2="197" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Center circle (9.15m radius) -->
                <circle cx="217" cy="124" r="32" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="217" cy="124" r="2.5" fill="#ffffff"/>

                <!-- Left Penalty area 16m50 -->
                <rect x="30" y="82" width="55" height="85" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Left Goal area 5m50 -->
                <rect x="30" y="100" width="20" height="48" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="68" cy="124" r="2" fill="#ffffff"/>
                <!-- Left Goal -->
                <rect x="22" y="108" width="8" height="32" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>

                <!-- Right Penalty area 16m50 -->
                <rect x="350" y="82" width="55" height="85" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Right Goal area 5m50 -->
                <rect x="385" y="100" width="20" height="48" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="367" cy="124" r="2" fill="#ffffff"/>
                <!-- Right Goal -->
                <rect x="405" y="108" width="8" height="32" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>

                <text x="217" y="212" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">Kích thước sân: Dài 105 m &bull; Rộng 68 m</text>
                <text x="217" y="225" text-anchor="middle" fill="#bbf7d0" font-size="8.5">Cầu môn: Rộng 7.32 m &bull; Cao 2.44 m &bull; Chấm 11m cách cầu môn 11m</text>
                <text x="217" y="238" text-anchor="middle" fill="#94a3b8" font-size="8">Vòng tròn trung tâm R = 9.15 m &bull; Khu 16m50: 40.32m x 16.5m</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'bong-ro':
      return `
        <!-- HÌNH MINH HỌA 8: DẪN BÓNG, NÉM RỔ & SÂN BÓNG RỔ FIBA -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-basketball"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 8: Kĩ Thuật Dẫn Bóng, Ném Rổ 1 Tay &amp; Sơ Đồ Sân Bóng Rổ FIBA</h4>
                <p class="text-[11px] text-emerald-300/80">Dẫn bóng thấp tay &bull; Ném rổ 1 tay trên vai &bull; Sân 28m x 15m &bull; Chiều cao rổ 3.05m</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Bóng Rổ</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: Dribble & Shooting Technique -->
              <g transform="translate(15, 15)">
                <rect width="365" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#f97316" stroke-width="1.5"/>
                <rect x="15" y="15" width="335" height="25" rx="5" fill="#ea580c" fill-opacity="0.3"/>
                <text x="182" y="32" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="900">KĨ THUẬT DẪN BÓNG &amp; NÉM RỔ 1 TAY</text>

                <!-- Dribble card -->
                <rect x="20" y="52" width="155" height="135" rx="8" fill="#7c2d12" fill-opacity="0.35" stroke="#f97316" stroke-width="1"/>
                <text x="97" y="70" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="800">DẪN BÓNG THẤP TAY</text>
                <text x="97" y="84" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="700">(Low Dribble)</text>
                <text x="97" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Trọng tâm hạ thấp, gối chùng</text>
                <text x="97" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Bóng nảy dưới tầm thắt lưng</text>
                <text x="97" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Xòe ngón miết bóng nhịp nhàng</text>
                <text x="97" y="147" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Mắt ngẩng quan sát sân</text>
                <text x="97" y="165" text-anchor="middle" fill="#fdba74" font-size="8" font-weight="700">Dùng bảo vệ bóng khi bị áp sát</text>

                <!-- Shooting card -->
                <rect x="190" y="52" width="155" height="135" rx="8" fill="#7c2d12" fill-opacity="0.35" stroke="#f97316" stroke-width="1"/>
                <text x="267" y="70" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="800">NÉM RỔ 1 TAY TRÊN VAI</text>
                <text x="267" y="84" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="700">(One-hand Set Shot)</text>
                <text x="267" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Khuỷu tay vuông góc 90°</text>
                <text x="267" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Bóng trên đầu gối &amp; trước trán</text>
                <text x="267" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Lực từ chân &rarr; hông &rarr; tay</text>
                <text x="267" y="147" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Miết cổ tay tạo bóng xoáy ngược</text>
                <text x="267" y="165" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">Quỹ đạo bóng hình cầu vồng</text>

                <rect x="20" y="196" width="325" height="36" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="0.8"/>
                <text x="182" y="218" text-anchor="middle" fill="#fed7aa" font-size="8.5" font-weight="700">Lưu ý: Không dùng lòng bàn tay đập bóng; không gập khuỷu tay quá nhọn!</text>
              </g>

              <!-- Right: Basketball Court FIBA dimensions -->
              <g transform="translate(400, 15)">
                <rect width="435" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#ea580c" stroke-width="1.5"/>
                <rect x="15" y="15" width="405" height="25" rx="5" fill="#c2410c" fill-opacity="0.3"/>
                <text x="217" y="32" text-anchor="middle" fill="#ffedd5" font-size="11" font-weight="900">SÂN BÓNG RỔ TIÊU CHUẨN FIBA</text>

                <!-- Hardwood Court -->
                <rect x="30" y="52" width="375" height="145" fill="#b45309" stroke="#ffffff" stroke-width="2"/>
                <!-- Center line -->
                <line x1="217" y1="52" x2="217" y2="197" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Center circle (3.60m diameter) -->
                <circle cx="217" cy="124" r="24" fill="none" stroke="#ffffff" stroke-width="1.5"/>

                <!-- Left 3-point line (6.75m) -->
                <path d="M 30 75 L 60 75 A 58 58 0 0 1 60 174 L 30 174" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Left Key / Free throw lane -->
                <rect x="30" y="98" width="65" height="53" fill="#9a3412" fill-opacity="0.4" stroke="#ffffff" stroke-width="1.5"/>
                <path d="M 95 98 A 26 26 0 0 1 95 151" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Left Backboard & Rim -->
                <line x1="45" y1="110" x2="45" y2="138" stroke="#ffffff" stroke-width="3"/>
                <circle cx="50" cy="124" r="5" fill="none" stroke="#f97316" stroke-width="2"/>

                <!-- Right 3-point line (6.75m) -->
                <path d="M 405 75 L 375 75 A 58 58 0 0 0 375 174 L 405 174" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Right Key / Free throw lane -->
                <rect x="340" y="98" width="65" height="53" fill="#9a3412" fill-opacity="0.4" stroke="#ffffff" stroke-width="1.5"/>
                <path d="M 340 98 A 26 26 0 0 0 340 151" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Right Backboard & Rim -->
                <line x1="390" y1="110" x2="390" y2="138" stroke="#ffffff" stroke-width="3"/>
                <circle cx="385" cy="124" r="5" fill="none" stroke="#f97316" stroke-width="2"/>

                <text x="217" y="212" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">Kích thước sân: Dài 28 m &bull; Rộng 15 m</text>
                <text x="217" y="225" text-anchor="middle" fill="#fed7aa" font-size="8.5">Chiều cao vành rổ: 3.05 m &bull; Bảng rổ: 1.80 m x 1.05 m</text>
                <text x="217" y="238" text-anchor="middle" fill="#94a3b8" font-size="8">Vạch 3 điểm bán kính: 6.75 m &bull; Vạch ném phạt cách bảng rổ: 4.60 m</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    default:
      return '';
  }
}




function renderTopics() {
  let quizGlobalIdx = 0;

  return topicsData.map(t => {
    // Lessons
    const lessonsHtml = t.lessons.map(l => `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-emerald-600">${l.num}</span>
          <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${l.title}</h5>
        </div>
        <div class="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
          ${l.items.map(it => `<p class="leading-relaxed">&bull; ${it}</p>`).join('')}
        </div>
      </div>
    `).join('');

    // Quizzes
    const quizzesHtml = t.quizzes.map(q => {
      const qId = quizGlobalIdx++;
      return `
        <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-900/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-amber-500"></i> Câu hỏi củng cố kĩ thuật
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Tự chấm điểm</span>
          </div>
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">${q.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="quiz-options-${qId}">
            ${q.opts.map((opt, oIdx) => `
              <button onclick="checkQuizAnswer(${qId}, ${oIdx}, ${q.ans}, '${q.explain.replace(/'/g, "\\'")}')" 
                      class="quiz-btn-${qId} text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-emerald-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">${String.fromCharCode(65 + oIdx)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="quiz-feedback-${qId}" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    }).join('');

    return `
      <!-- ==================== ${t.title} ==================== -->
      <section id="${t.id}" class="topic-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8" data-part="${t.partTag}">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${t.partColor} text-white font-black text-xs uppercase tracking-wider">${t.partTag}</span>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-xs border border-emerald-200 dark:border-emerald-800">
              ${t.part}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">${t.title.split(':')[0]}</span>
        </div>

        <div class="mb-3">
          <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-person-running text-emerald-600 dark:text-emerald-400"></i> ${t.title}
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">${t.subtitle}</p>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-emerald-50/40 via-teal-50/20 to-cyan-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-emerald-100 dark:border-emerald-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy kĩ thuật &bull; ${t.title.split(':')[0]}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">GDTC 7 &bull; KNTT</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${generateMindmapSvg(t)}
          </div>
        </div>

        <!-- HÌNH MINH HỌA KĨ THUẬT ĐỘNG TÁC & SÂN BÃI TRỰC QUAN -->
        ${getTopicIllustration(t.id)}

        <!-- Nội dung kĩ thuật -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-clipboard-list text-emerald-600"></i> Kĩ Thuật Động Tác &amp; Hướng Dẫn Thực Hành
          </h4>
          ${lessonsHtml}
        </div>

        <!-- Trắc nghiệm củng cố -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i> Bài Tập Củng Cố Nhận Thức Kĩ Thuật
          </h4>
          ${quizzesHtml}
        </div>

      </section>
    `;
  }).join('');
}

// Sidebar Navigation
function renderSidebarNav() {
  return topicsData.map(t => {
    let tagColor = "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
    if (t.partTag === 'KTC') tagColor = "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
    else if (t.partTag === 'TTTC') tagColor = "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300";

    const shortTitle = t.title.includes(':') ? t.title.split(':')[1].trim() : t.title;

    return `
      <a href="#${t.id}" class="nav-topic-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group" data-part="${t.partTag}">
        <div class="flex items-center gap-2 overflow-hidden">
          <span class="w-8 h-6 rounded-md ${tagColor} text-[10px] font-black flex items-center justify-center flex-shrink-0">
            ${t.partTag}
          </span>
          <span class="truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">${shortTitle}</span>
        </div>
      </a>
    `;
  }).join('');
}

// Client-side script string
const clientScript = `
  let totalQuizzes = 16;
  let answeredQuizzes = new Set();

  // Filter topics by Part
  function filterNavPart(part) {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-emerald-600', 'text-white');
      b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');
    });
    event.target.classList.add('active', 'bg-emerald-600', 'text-white');
    event.target.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');

    document.querySelectorAll('.nav-topic-item').forEach(item => {
      if (part === 'all' || item.getAttribute('data-part') === part) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    document.querySelectorAll('.topic-section').forEach(sec => {
      if (part === 'all' || sec.getAttribute('data-part') === part) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  }

  // Check Quiz Answer
  function checkQuizAnswer(qId, selectedIdx, correctIdx, explanation) {
    const optionsContainer = document.getElementById('quiz-options-' + qId);
    const feedbackBox = document.getElementById('quiz-feedback-' + qId);
    const buttons = optionsContainer.querySelectorAll('.quiz-btn-' + qId);

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove('hover:border-emerald-400');
      if (idx === correctIdx) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
      } else if (idx === selectedIdx) {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
      }
    });

    feedbackBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-rose-50', 'text-rose-800', 'border-rose-200');
    feedbackBox.classList.add('border');

    if (selectedIdx === correctIdx) {
      feedbackBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'border-emerald-200', 'dark:border-emerald-800');
      feedbackBox.innerHTML = '<strong><i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Chính xác!</strong> ' + explanation;
    } else {
      feedbackBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'border-rose-200', 'dark:border-rose-800');
      feedbackBox.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa đúng!</strong> ' + explanation;
    }

    if (!answeredQuizzes.has(qId)) {
      answeredQuizzes.add(qId);
      const percent = Math.min(100, Math.round((answeredQuizzes.size / totalQuizzes) * 100));
      document.getElementById('progress-bar').style.width = percent + '%';
      document.getElementById('progress-percent').textContent = percent + '%';
      document.getElementById('answered-count').textContent = answeredQuizzes.size;
    }
  }

  // Modals Handling
  function openStopwatchModal() {
    document.getElementById('stopwatchModal').classList.remove('hidden');
  }
  function closeStopwatchModal() {
    document.getElementById('stopwatchModal').classList.add('hidden');
    stopTimer();
    stopMetronome();
  }

  function openHandbookModal() {
    document.getElementById('handbookModal').classList.remove('hidden');
  }
  function closeHandbookModal() {
    document.getElementById('handbookModal').classList.add('hidden');
  }

  // Stopwatch Feature
  let timerInterval = null;
  let timerMs = 0;
  function startTimer() {
    if (timerInterval) return;
    const startT = performance.now() - timerMs;
    timerInterval = setInterval(() => {
      timerMs = performance.now() - startT;
      const totalSec = Math.floor(timerMs / 1000);
      const ms = Math.floor((timerMs % 1000) / 10);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      document.getElementById('stopwatch-display').textContent = 
        String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '.' + String(ms).padStart(2, '0');
    }, 20);
  }
  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  function resetTimer() {
    stopTimer();
    timerMs = 0;
    document.getElementById('stopwatch-display').textContent = '00:00.00';
  }

  // Metronome for 30 Gymnastics Counts
  let metroInterval = null;
  let metroCount = 0;
  function startMetronome() {
    stopMetronome();
    metroCount = 0;
    metroInterval = setInterval(() => {
      metroCount++;
      if (metroCount > 30) metroCount = 1;
      document.getElementById('metro-count-display').textContent = metroCount;
    }, 1200); // 50 bpm for gym
  }
  function stopMetronome() {
    clearInterval(metroInterval);
    metroInterval = null;
    document.getElementById('metro-count-display').textContent = '0';
  }

  // Exam Logic (40 questions, 60 minutes)
  const examData = ${JSON.stringify(examQuestions)};
  let examTimerInterval = null;
  let examTimeRemaining = 3600; // 60 mins
  let userAnswers = {};

  function openExamModal() {
    document.getElementById('examModal').classList.remove('hidden');
    renderExamQuestions();
    startExamTimer();
  }

  function closeExamModal() {
    document.getElementById('examModal').classList.add('hidden');
    clearInterval(examTimerInterval);
  }

  function startExamTimer() {
    clearInterval(examTimerInterval);
    examTimeRemaining = 3600;
    updateTimerDisplay();
    examTimerInterval = setInterval(() => {
      examTimeRemaining--;
      updateTimerDisplay();
      if (examTimeRemaining <= 0) {
        clearInterval(examTimerInterval);
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    document.getElementById('exam-timer').textContent = 
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }

  function renderExamQuestions() {
    userAnswers = {};
    const container = document.getElementById('exam-questions-list');
    document.getElementById('exam-result-view').classList.add('hidden');
    container.classList.remove('hidden');
    document.getElementById('exam-submit-btn').classList.remove('hidden');

    container.innerHTML = examData.map((item, idx) => {
      return '<div class=\"p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2\">' +
        '<div class=\"font-bold text-gray-900 dark:text-white text-xs sm:text-sm flex items-start gap-2\">' +
          '<span class=\"px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-black\">Câu ' + (idx + 1) + '</span>' +
          '<span>' + item.q + '</span>' +
        '</div>' +
        '<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1\">' +
          item.opts.map((opt, oIdx) => {
            return '<label class=\"exam-opt flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 cursor-pointer hover:border-emerald-400 text-xs text-gray-700 dark:text-gray-300\">' +
              '<input type=\"radio\" name=\"exam_q_' + idx + '\" value=\"' + oIdx + '\" onchange=\"recordExamAnswer(' + idx + ', ' + oIdx + ')\" class=\"accent-emerald-600\">' +
              '<span>' + opt + '</span>' +
            '</label>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('');
    updateExamStatus();
  }

  function recordExamAnswer(qIdx, optIdx) {
    userAnswers[qIdx] = optIdx;
    updateExamStatus();
  }

  function updateExamStatus() {
    const answered = Object.keys(userAnswers).length;
    document.getElementById('exam-status-text').textContent = 'Đã chọn ' + answered + '/' + examData.length + ' câu';
  }

  function submitExam() {
    clearInterval(examTimerInterval);
    let correctCount = 0;
    examData.forEach((item, idx) => {
      if (userAnswers[idx] === item.ans) {
        correctCount++;
      }
    });

    const score = (correctCount / examData.length) * 10;
    document.getElementById('exam-questions-list').classList.add('hidden');
    document.getElementById('exam-submit-btn').classList.add('hidden');

    const resultView = document.getElementById('exam-result-view');
    resultView.classList.remove('hidden');
    document.getElementById('exam-final-score').innerHTML = 
      'Điểm số của bạn: <span class=\"text-2xl font-black text-emerald-600 dark:text-emerald-400\">' + score.toFixed(1) + ' / 10</span> (' + correctCount + '/' + examData.length + ' câu đúng)';
    
    let rank = 'Khá';
    if (score >= 9) rank = 'Trạng Nguyên Thể Chất 7 Xuất Sắc';
    else if (score >= 8) rank = 'Bảng Nhãn Thể Chất 7 Giỏi';
    else if (score >= 6.5) rank = 'Thám Hoa Thể Chất 7 Tiên Tiến';
    document.getElementById('exam-final-rank').textContent = rank;
  }

  // Live search
  document.getElementById('topicSearchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.topic-section').forEach(sec => {
      const text = sec.innerText.toLowerCase();
      if (!term || text.includes(term)) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });

  // Dark mode toggle
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('codehub_theme', isDark ? 'dark' : 'light');
  }

  // Restore dark mode
  if (localStorage.getItem('codehub_theme') === 'dark' || (!localStorage.getItem('codehub_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
`;

// Full HTML Document
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Giáo Dục Thể Chất 7 (KNTT - GDPT 2018: 3 Phần • Điền Kinh • Bóng Đá • Bóng Rổ • Cầu Lông • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              300: '#6ee7b7',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0b0f19'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Giáo Dục Thể Chất Lớp 7">

  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.6); }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== STICKY HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button (Về trang chính) -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 font-black text-sm group-hover:scale-105 transition">
            <i class="fa-solid fa-person-running text-base"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              GIÁO DỤC THỂ CHẤT 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Đồng Hồ Bấm Giờ & Đếm Nhịp -->
        <button onclick="openStopwatchModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-stopwatch text-emerald-600 dark:text-emerald-400"></i>
          <span class="hidden md:inline">Bấm Giờ &amp; Đếm Nhịp</span>
        </button>

        <!-- Sổ Tay Luật & Sân Bãi -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/60 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-book-bookmark text-teal-600 dark:text-teal-400"></i>
          <span class="hidden md:inline">Sổ Tay Luật Thi Đấu</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-md shadow-emerald-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white py-10 sm:py-14 border-b border-emerald-900/40">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="absolute -right-20 -top-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wide">
            <i class="fa-solid fa-star text-amber-400"></i>
            <span>GDPT 2018 &bull; KẾT NỐI TRI THỨC VỚI CUỘC SỐNG &bull; 3 PHẦN TOÀN DIỆN</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Khóa Học Giáo Dục Thể Chất Lớp 7
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Chuẩn hóa toàn bộ 3 Phần chương trình SGK GDTC 7: Kiến thức chung về môi trường tự nhiên; Vận động cơ bản (Chạy 60 m, Nhảy xa kiểu ngồi, Chạy cự li trung bình, Thể dục 30 nhịp); Thể thao tự chọn (Cầu lông, Bóng đá, Bóng rổ). Tích hợp sơ đồ tư duy kĩ thuật SVG, đồng hồ đếm giây, máy đếm nhịp và Đấu trường Trạng Nguyên 60:00.
          </p>
          
          <!-- Chips -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-layer-group text-emerald-400 mr-1"></i> 3 Phần chương trình
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-person-running text-teal-400 mr-1"></i> Điền kinh &amp; Thể dục 30 nhịp
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-futbol text-cyan-400 mr-1"></i> Cầu lông &bull; Bóng đá &bull; Bóng rổ
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-stopwatch text-amber-400 mr-1"></i> Bấm giờ &amp; Đếm nhịp
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-circle-check text-purple-400 mr-1"></i> 16 Trắc nghiệm tự chấm
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <i class="fa-solid fa-award mr-1"></i> Đấu trường 60:00
            </span>
          </div>
        </div>

        <!-- Quick Summary Cards -->
        <div class="grid grid-cols-2 gap-2.5 w-full lg:w-80 flex-shrink-0">
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5">
            <span class="text-[10px] font-black uppercase text-blue-400">PHẦN 1: MÔI TRƯỜNG</span>
            <div class="text-xs font-bold text-white">Kiến thức chung</div>
            <p class="text-[10px] text-gray-400">Không khí, ánh sáng, nước, đất</p>
          </div>
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5">
            <span class="text-[10px] font-black uppercase text-emerald-400">PHẦN 2: VẬN ĐỘNG</span>
            <div class="text-xs font-bold text-white">4 Chủ đề cơ bản</div>
            <p class="text-[10px] text-gray-400">Chạy ngắn, nhảy xa, cự li TB, 30 nhịp</p>
          </div>
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5 col-span-2">
            <span class="text-[10px] font-black uppercase text-amber-400">PHẦN 3: THỂ THAO TỰ CHỌN</span>
            <div class="text-xs font-bold text-white">Cầu lông &bull; Bóng đá &bull; Bóng rổ</div>
            <p class="text-[10px] text-gray-400">Kĩ thuật chuyên sâu &bull; Quy cách sân bãi &bull; Luật thi đấu</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTAINER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== LEFT STICKY SIDEBAR ==================== -->
      <aside class="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-20 space-y-5">
        <div class="bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search box -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="topicSearchInput" placeholder="Tìm kĩ thuật, động tác, luật..." class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition">
          </div>

          <!-- Tiến độ bài học -->
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-gray-700 dark:text-gray-300">Tiến độ củng cố</span>
              <span id="progress-percent" class="font-mono font-bold text-emerald-600 dark:text-emerald-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-emerald-600 to-teal-500 w-0 transition-all duration-300"></div>
            </div>
            <div class="flex justify-between text-[11px] text-gray-500 dark:text-gray-400">
              <span>Đã làm: <b id="answered-count">0</b>/16 câu</span>
              <span>8 chủ đề</span>
            </div>
          </div>

          <!-- Bộ lọc chương trình -->
          <div class="space-y-1.5">
            <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Bộ Lọc Chương Trình</div>
            <div class="grid grid-cols-2 gap-1 text-[11px]">
              <button onclick="filterNavPart('all')" class="filter-btn active py-1.5 rounded-lg bg-emerald-600 text-white font-bold transition">Tất cả</button>
              <button onclick="filterNavPart('KTC')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Chung</button>
              <button onclick="filterNavPart('VĐCB')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Cơ bản</button>
              <button onclick="filterNavPart('TTTC')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Tự chọn</button>
            </div>
          </div>

          <!-- Danh sách chủ đề -->
          <div class="space-y-1 max-h-[45vh] overflow-y-auto custom-scrollbar pr-1" id="sidebar-nav-list">
            ${renderSidebarNav()}
          </div>

          <!-- CTA Trạng Nguyên 60:00 -->
          <div class="p-3.5 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 text-white text-center space-y-2 shadow-md">
            <div class="text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-trophy text-amber-300"></i> Đấu Trường Trạng Nguyên
            </div>
            <p class="text-[11px] text-emerald-100 leading-tight">40 câu trắc nghiệm tổng hợp &bull; Thời gian làm bài 60:00</p>
            <button onclick="openExamModal()" class="w-full py-1.5 rounded-lg bg-white text-emerald-700 hover:bg-emerald-50 text-xs font-black shadow transition">
              Vào Thi Ngay
            </button>
          </div>

        </div>
      </aside>

      <!-- ==================== MAIN CONTENT: 8 TOPICS ==================== -->
      <div class="flex-1 min-w-0 space-y-6">
        ${renderTopics()}
      </div>

    </div>
  </main>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Bấm Giờ Thể Thao & Đếm Nhịp Thể Dục -->
  <div id="stopwatchModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-md w-full p-5 shadow-2xl border border-gray-200 dark:border-gray-800 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
            <i class="fa-solid fa-stopwatch"></i>
          </div>
          <h3 class="font-bold text-sm sm:text-base text-gray-900 dark:text-white">BẤM GIỜ &amp; ĐẾM NHỊP THỂ DỤC</h3>
        </div>
        <button onclick="closeStopwatchModal()" class="w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Đồng Hồ Bấm Giờ 60m / Cự li TB -->
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 text-center space-y-2 border border-slate-200 dark:border-gray-700">
        <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Đồng Hồ Bấm Giờ Thể Thao</span>
        <div id="stopwatch-display" class="font-mono text-3xl font-black text-emerald-600 dark:text-emerald-400">00:00.00</div>
        <div class="flex items-center justify-center gap-2 pt-1">
          <button onclick="startTimer()" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500">Chạy</button>
          <button onclick="stopTimer()" class="px-3 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-500">Tạm dừng</button>
          <button onclick="resetTimer()" class="px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold">Đặt lại</button>
        </div>
      </div>

      <!-- Máy Đếm Nhịp 30 Nhịp Thể Dục -->
      <div class="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 text-center space-y-2 border border-teal-200 dark:border-teal-900">
        <span class="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider">Đếm Nhịp Bài Thể Dục (Nhịp 1 - 30)</span>
        <div id="metro-count-display" class="font-mono text-4xl font-black text-teal-600 dark:text-teal-400">0</div>
        <div class="flex items-center justify-center gap-2 pt-1">
          <button onclick="startMetronome()" class="px-4 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-bold hover:bg-teal-500">Bắt đầu đếm</button>
          <button onclick="stopMetronome()" class="px-4 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold">Dừng đếm</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2: Sổ Tay Luật & Sân Bãi -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-teal-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">SỔ TAY LUẬT THI ĐẤU &amp; QUY CÁCH SÂN BÃI GDTC 7</h3>
            <p class="text-[11px] text-teal-100">Điền kinh &bull; Nhảy xa &bull; Cầu lông &bull; Bóng đá 11 người &bull; Bóng rổ</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-1.5">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-person-running"></i> 1. Quy Cách Làn Chạy &amp; Ván Giậm Nhảy Xa
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; <strong>Ô chạy cự li ngắn:</strong> Rộng 1,22 m ± 0,01 m; vạch kẻ phân làn rộng 5 cm.<br>
            &bull; <strong>Đường chạy đà nhảy xa:</strong> Dài tối thiểu 45 m, rộng 1,22 m.<br>
            &bull; <strong>Ván giậm nhảy xa:</strong> Dài 1,22 m, rộng 0,22 m (20 cm), dày 0,1 m sơn trắng. Hố cát rộng 2,75 – 3,0 m chứa cát ẩm mịn.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-1.5">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-futbol"></i> 2. Quy Cách Sân Bóng Đá 11 Người
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; <strong>Kích thước sân:</strong> Chiều dài 90 m – 120 m; chiều rộng 45 m – 90 m.<br>
            &bull; <strong>Khung thành (cầu môn):</strong> Cao 2,44 m; rộng 7,32 m.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 space-y-1.5">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
            <i class="fa-solid fa-table-tennis-paddle-ball"></i> 3. Luật Thi Đấu Cầu Lông (21 Điểm)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; Thi đấu 3 hiệp thắng 2, mỗi hiệp 21 điểm.<br>
            &bull; 20 đều: Bên nào cách biệt 2 điểm trước thắng.<br>
            &bull; 29 đều: Bên nào chạm 30 điểm trước thắng hiệp.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-1.5">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
            <i class="fa-solid fa-basketball"></i> 4. Các Lỗi Cơ Bản Trong Bóng Rổ
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; <strong>Lỗi chạy bước (Traveling):</strong> Cầm bóng di chuyển quá 2 bước mà không dẫn bóng.<br>
            &bull; <strong>Lỗi dẫn bóng 2 lần (Double dribble):</strong> Cầm bóng 2 tay rồi lại nhồi bóng tiếp.<br>
            &bull; <strong>Lỗi dính bóng:</strong> Ngửa lòng bàn tay đỡ bóng từ dưới rồi dẫn tiếp.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3: Hội Thi Trạng Nguyên Thể Chất 7 (60:00) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-award text-amber-300 text-lg"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">HỘI THI TRẠNG NGUYÊN THỂ CHẤT 7</h3>
            <p class="text-[11px] text-emerald-100">40 câu hỏi trắc nghiệm &bull; Thời gian: 60:00 &bull; GDPT 2018</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-xl bg-black/20 font-mono font-bold text-xs" id="exam-timer">
            60:00
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="flex-1 overflow-y-auto p-5 space-y-4 text-xs sm:text-sm">
        <div id="exam-questions-list" class="space-y-4"></div>

        <!-- Exam Result Certificate -->
        <div id="exam-result-view" class="hidden text-center py-6 space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">Chúc Mừng Bạn Đã Hoàn Thành Bài Thi!</h4>
          <p id="exam-final-score" class="text-base font-bold text-emerald-600 dark:text-emerald-400"></p>
          <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-md mx-auto text-xs space-y-1">
            <p><strong>Danh hiệu:</strong> <span id="exam-final-rank" class="text-amber-500 font-bold">Trạng Nguyên Thể Chất 7 Xuất Sắc</span></p>
            <p class="text-gray-500 dark:text-gray-400">Chứng nhận hoàn thành chương trình Giáo Dục Thể Chất 7 chuẩn GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-850">
        <span id="exam-status-text" class="text-xs text-gray-500">Đã chọn 0/40 câu</span>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md transition">
          Nộp bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 transition-colors">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <div class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-person-running"></i>
        </div>
        <span class="font-bold text-gray-700 dark:text-gray-300">CodeHub - Nền Tảng Học Tập Số Hóa GDPT 2018</span>
      </div>
      <p>Chương trình Giáo Dục Thể Chất 7 (GDTC 7): 3 Phần &bull; 8 Chủ đề cốt lõi &bull; Giao diện chuẩn Tiếng Anh 6.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
${clientScript}
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/pe_7.html', fullHtml, 'utf8');

console.log("Successfully created courses/gdtc_7.html and courses/pe_7.html! Size:", fullHtml.length);
