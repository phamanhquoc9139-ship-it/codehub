// trongcayanqua9_exam.js - 25 câu hỏi Trạng Nguyên Trồng Cây Ăn Quả 9

const trongCayExamQuestions = [
  {
    q: "Cây ăn quả nhân giống bằng giâm cành hoặc chiết cành có đặc điểm hệ rễ nào sau đây?",
    options: [
      "Bộ rễ cọc đâm rất sâu trong lòng đất",
      "Chủ yếu là hệ rễ bên và rễ tơ ăn nông, ít có rễ cọc sâu như cây gieo hạt",
      "Chỉ có rễ thở mọc ngược lên trên không khí",
      "Không có khả năng hút chất dinh dưỡng từ đất"
    ],
    answer: 1,
    explain: "Cây nhân giống sinh dưỡng hình thành rễ bất định từ cành nên không có rễ cọc đâm sâu như cây gieo hạt, rễ bên phân bố ở tầng mặt nông."
  },
  {
    q: "Loại cành nào mọc thẳng đứng từ thân chính hoặc cành lớn, lóng dài, tiêu tốn nhiều dinh dưỡng nhưng thường không mang quả?",
    options: ["Cành mang quả", "Cành vượt (chồi nước)", "Cành cấp 3", "Cành tăm"],
    answer: 1,
    explain: "Cành vượt có sức sinh trưởng dinh dưỡng rất mạnh, mọc đứng, không ra hoa đậu quả và che bóng cành khác, cần tỉa bỏ sớm."
  },
  {
    q: "Theo lí thuyết mật mã nghề nghiệp Holland, nghề trồng và chăm sóc cây ăn quả gắn liền với nhóm sở thích nào?",
    options: [
      "Nhóm R (Realistic - Người thực tế)",
      "Nhóm A (Artistic - Nghệ thuật)",
      "Nhóm S (Social - Xã hội)",
      "Nhóm E (Enterprising - Quản lí)"
    ],
    answer: 0,
    explain: "Nhóm R (Người thực tế) đặc trưng bởi sở thích làm việc với cây trồng, đất đai, máy móc và thao tác ngoài trời."
  },
  {
    q: "Trong kĩ thuật chiết cành, sau khi bóc lớp vỏ cần phải làm sạch bộ phận nào để cành không liền vỏ lại mà kích thích ra rễ?",
    options: [
      "Cạo sạch lớp tượng tầng (màng nhầy mỏng sát phần gỗ)",
      "Đẽo đứt toàn bộ thân gỗ",
      "Bôi mật ong kín vết khoanh",
      "Chặt đứt cả cành cây"
    ],
    answer: 0,
    explain: "Lớp tượng tầng trơn nhớt nếu không cạo sạch sẽ nhanh chóng sinh mô sẹo liền vỏ lại, ức chế quá trình sinh rễ bất định."
  },
  {
    q: "Sau khi ghép mắt nhỏ có gỗ được 15–20 ngày và mắt ghép đã tiếp hợp, thao tác kĩ thuật tiếp theo là gì?",
    options: [
      "Nhổ bỏ toàn bộ cây vứt đi",
      "Cắt bỏ phần ngọn gốc ghép phía trên mắt ghép 1,5–2 cm để dồn nhựa nuôi chồi ghép",
      "Ngâm gốc cây trong nước sôi",
      "Phun thuốc diệt cỏ lên mắt ghép"
    ],
    answer: 1,
    explain: "Cắt ngọn gốc ghép phía trên mắt ghép 1,5-2 cm để triệt tiêu ưu thế ngọn, dồn dòng dinh dưỡng kích thích mắt ghép bật mầm non."
  },
  {
    q: "Hệ rễ bên và rễ tơ hút nước, dinh dưỡng của cây ăn quả có múi phân bố tập trung chủ yếu ở tầng đất nào?",
    options: [
      "Tầng đất mặt nông 10–30 cm",
      "Tầng đất sâu 2 đến 3 mét",
      "Độ sâu trên 5 mét",
      "Nằm hoàn toàn lơ lửng trên không khí"
    ],
    answer: 0,
    explain: "Rễ tơ của cam bưởi tập trung ở tầng đất mặt nông 10–30 cm nên rất sợ úng ngập và dễ tổn thương nếu xới xáo quá sâu."
  },
  {
    q: "Cây ăn quả có múi (cam, bưởi, quýt, chanh) thích hợp nhất với điều kiện ánh sáng nào sau đây?",
    options: [
      "Ánh sáng tán xạ cường độ 10 000–15 000 lux",
      "Nắng gắt chiếu trực diện 100 000 lux suốt ngày",
      "Bóng tối hoàn toàn trong phòng kín",
      "Ánh sáng đèn huỳnh quang ban đêm"
    ],
    answer: 0,
    explain: "Cây có múi ưa ánh sáng tán xạ nhẹ nhàng (10.000 - 15.000 lux) giúp lá quang hợp tốt mà không bị cháy biểu bì."
  },
  {
    q: "Sinh vật nào sau đây là môi giới trung gian truyền bệnh vàng lá Greening cực kì nguy hại trên cây có múi?",
    options: [
      "Rầy chổng cánh (Diaphorina citri)",
      "Bọ xít nâu",
      "Ruồi đục quả",
      "Cào cào xanh"
    ],
    answer: 0,
    explain: "Rầy chổng cánh chích hút truyền vi khuẩn Liberobacter gây bệnh vàng lá Greening làm nghẽn mạch dẫn của cây có múi."
  },
  {
    q: "Giống nhãn miền Bắc đòi hỏi điều kiện nhiệt độ đặc thù nào vào khoảng tháng 12 đến tháng 1 để phân hoá mầm hoa thuận lợi?",
    options: [
      "Thời kì lạnh khoảng 10 °C kéo dài",
      "Nhiệt độ nóng bức 45 °C",
      "Mưa bão ngập úng gốc",
      "Độ ẩm 100% kèm sương muối liên tục"
    ],
    answer: 0,
    explain: "Nhãn miền Bắc bắt buộc cần thời kì lạnh khoảng 10 °C để ngưng lộc non và chuyển hoá đỉnh sinh trưởng thành chùm nụ hoa."
  },
  {
    q: "Kĩ thuật khoanh vỏ cành nhãn vào tháng 12 để kích thích ra hoa có độ rộng vết khoanh tiêu chuẩn là bao nhiêu?",
    options: ["0,3 đến 0,5 cm", "5 đến 10 cm", "Khoanh đứt cả cành gỗ", "0,01 mm"],
    answer: 0,
    explain: "Vết khoanh chuẩn rộng 0,3-0,5 cm vừa đủ chặn dòng nhựa luyện trong vài tuần, sau đó sẽ tự liền sẹo khi hoa nở."
  },
  {
    q: "Bệnh chổi rồng làm chồi ngọn mọc thành chùm dị hình như bó chổi trên cây nhãn do tác nhân nào truyền bệnh?",
    options: ["Nhện lông nhung (Eriophyes dimocarpi)", "Bướm mắt lạc", "Sâu vẽ bùa", "Chuột đồng"],
    answer: 0,
    explain: "Nhện lông nhung chích hút chồi non và truyền tác nhân gây bệnh chổi rồng làm chồi ngọn biến dạng chùn lại không đậu quả."
  },
  {
    q: "Để phòng trừ ruồi đục quả hại xoài hiệu quả và đảm bảo quả an toàn không tồn dư hoá chất, biện pháp tốt nhất là gì?",
    options: [
      "Bao bọc quả bằng túi giấy chuyên dụng khi quả còn non",
      "Phun thuốc trừ sâu hoá chất hằng ngày lên quả chín",
      "Chặt hết lá trên cây xoài",
      "Hun khói đen liên tục cả ngày đêm"
    ],
    answer: 0,
    explain: "Bao quả bằng túi giấy chuyên dụng tạo lớp chắn vật lí ngăn ruồi đẻ trứng, giữ vỏ quả vàng sáng đẹp tự nhiên."
  },
  {
    q: "Trong kĩ thuật tạo tán lùn cho cây xoài, khi cây con cao 1–1,2 m người ta bấm ngọn giữ lại thân chính cao bao nhiêu?",
    options: ["0,6 đến 0,8 m", "2 mét", "Chỉ để lại 5 cm", "Không được bấm ngọn"],
    answer: 0,
    explain: "Bấm ngọn giữ thân chính 0,6-0,8 m giúp hạ thấp tán cây, tạo khung cành mâm xôi lùn vững chãi và dễ chăm sóc, thu hái."
  },
  {
    q: "Chất điều hoà sinh trưởng nào thường được tưới quanh tán xoài sau thu hoạch 45 ngày để kích thích phân hoá mầm hoa trái vụ?",
    options: ["Paclobutrazol", "Nước vôi trong", "Axit Sunfuric", "Dầu nhớt thải"],
    answer: 0,
    explain: "Paclobutrazol có tác dụng ức chế hormone Gibberellin sinh trưởng đọt, thúc đẩy mô phân sinh chuyển sang phân hoá mầm hoa."
  },
  {
    q: "Hoa của cây sầu riêng có đặc điểm nở hoa rất đặc thù vào khung giờ nào trong ngày?",
    options: [
      "Vào ban đêm (khoảng 19h đến 22h đêm)",
      "Vào lúc giữa trưa 12h trưa nắng gắt",
      "Vào lúc bình minh 5h sáng",
      "Vào lúc 14h chiều"
    ],
    answer: 0,
    explain: "Hoa sầu riêng nở về đêm (19h–22h); do đó thao tác thụ phấn bổ sung bằng tay cần thực hiện trong khung giờ này."
  },
  {
    q: "Tầng cành cấp 1 dưới cùng của cây sầu riêng khi tỉa tán tháp nên cách mặt đất tối thiểu bao nhiêu?",
    options: ["Tối thiểu 1 mét", "5 centimet", "5 mét", "Sát sạt mặt đất"],
    answer: 0,
    explain: "Cành dưới cùng cách đất ít nhất 1m để tránh ẩm ướt và ngăn bào tử nấm từ đất bắn lên cành quả khi trời mưa to."
  },
  {
    q: "Bệnh xì mủ thối rễ nâu đen cực kì nguy hiểm trên cây sầu riêng do loài nấm nào gây ra khi đất bị ngập úng?",
    options: ["Phytophthora palmivora", "Nấm men rượu", "Nấm mốc trắng", "Bào tử nấm rơm"],
    answer: 0,
    explain: "Nấm Phytophthora phát triển cực nhanh trong đất ẩm ướt úng nước, tấn công rễ và phá huỷ mô vỏ dẫn thân sầu riêng."
  },
  {
    q: "Thân thật của cây chuối có bản chất thực vật học là bộ phận nào?",
    options: [
      "Thân củ (củ chuối) ngầm dưới mặt đất",
      "Toàn bộ thân đứng cao 3 mét bên trên",
      "Cuống của buồng chuối",
      "Các gân chính của phiến lá"
    ],
    answer: 0,
    explain: "Thân thật của chuối là thân củ ngầm dưới đất; phần đứng lên trên cao 2–4m là thân giả gồm các bẹ lá xếp cuộn chặt vào nhau."
  },
  {
    q: "Khi trồng cây chuối con ra vườn, kĩ thuật lấp đất quanh bầu cây nào sau đây là chuẩn xác theo SGK?",
    options: [
      "Lấp đất sâu cao hơn mặt bầu khoảng 5 cm để cây đứng vững",
      "Đặt cây nổi hẳn trên mặt cỏ không cần lấp đất",
      "Chôn sâu cả ngọn cây dưới lòng đất",
      "Lấp ngập 1/2 phiến lá non"
    ],
    answer: 0,
    explain: "Lấp đất cao hơn mặt bầu 5 cm giúp giữ ẩm củ chuối, kích thích rễ mới đâm ngang bám chắc vào nền đất."
  },
  {
    q: "Biện pháp phòng ngừa buồng chuối nặng làm cây bị bật gốc ngã đổ khi gặp mưa gió là gì?",
    options: [
      "Dùng 1–2 cọc tre chống đỡ vào cuống buồng và chằng dây neo giữ thân giả",
      "Chặt bỏ toàn bộ rễ cây",
      "Ngắt vứt bỏ buồng chuối ngay khi vừa trổ",
      "Tưới nước ngập lênh láng cho nhão đất"
    ],
    answer: 0,
    explain: "Buồng chuối nặng làm lệch trọng tâm cây; bắt buộc phải dùng cọc chống đỡ cuống buồng và chằng dây neo giữ gốc."
  },
  {
    q: "Bệnh chùn đọt chuối (BBTV) làm lá ngọn hẹp đứng bó cụm lây truyền qua côn trùng nào?",
    options: ["Rệp muội chuối (rầy mềm Pentalonia nigronervosa)", "Bọ hung", "Kiến lửa", "Muỗi vằn"],
    answer: 0,
    explain: "Rệp muội chuối chích hút truyền virus BBTV gây bệnh chùn đọt làm cây cằn cỗi hoàn toàn không thể cho buồng quả."
  },
  {
    q: "Công thức tính lãi thuần của cây ăn quả hằng năm (như chuối, dứa) sau một vụ mùa theo SGK là gì?",
    options: ["C₁ = B₁ − A₁", "C₁ = B₁ + A₁", "C₁ = B₁ × A₁", "C₁ = A₁ / B₁"],
    answer: 0,
    explain: "Lãi thuần C1 = Tổng nguồn thu B1 trừ đi Tổng chi phí đầu tư trong vụ A1."
  },
  {
    q: "Theo công thức tính lãi thuần cây lâu năm đến hết 3 năm đầu kinh doanh (D = C2 - (A2 + B2)), đại lượng A2 là gì?",
    options: [
      "Toàn bộ chi phí thời kì kiến thiết cơ bản (từ khi trồng đến trước vụ quả đầu tiên)",
      "Tổng thu bán quả năm đầu tiên",
      "Tiền mua xe tải vận chuyển nông sản",
      "Chi phí thuê người bảo vệ vườn cả đời"
    ],
    answer: 0,
    explain: "A2 là chi phí đầu tư xây dựng cơ bản từ khi trồng cho đến khi cây bắt đầu cho thu hoạch vụ đầu tiên."
  },
  {
    q: "Một dự án trồng dứa có tổng chi phí A1 = 30 triệu VNĐ; tổng thu từ bán quả B1 = 55 triệu VNĐ. Lãi thuần C1 là bao nhiêu?",
    options: ["25 triệu VNĐ", "85 triệu VNĐ", "30 triệu VNĐ", "55 triệu VNĐ"],
    answer: 0,
    explain: "C1 = B1 - A1 = 55 - 30 = 25 triệu VNĐ."
  },
  {
    q: "Nguyên tắc cốt lõi trong 'Bốn đúng' khi sử dụng thuốc bảo vệ thực vật cho cây ăn quả là gì?",
    options: [
      "Đúng thuốc — Đúng thời điểm — Đúng nồng độ/liều lượng — Đúng phương pháp",
      "Càng phun nhiều thuốc độc hại càng tốt",
      "Phun thuốc ngay trước khi hái quả 5 phút",
      "Dùng bất kì loại thuốc nào có sẵn trong nhà"
    ],
    answer: 0,
    explain: "4 nguyên tắc vàng dùng thuốc BVTV: Đúng thuốc, đúng lúc, đúng nồng độ liều lượng, đúng cách; tuân thủ nghiêm ngặt thời gian cách li."
  }
];

module.exports = { trongCayExamQuestions };
