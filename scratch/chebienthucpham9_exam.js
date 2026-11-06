// chebienthucpham9_exam.js - 25 câu hỏi Trạng Nguyên Chế biến thực phẩm 9

const chebienExamQuestions = [
  {
    q: "Thành phần dinh dưỡng nào sau đây cung cấp mật độ năng lượng cao nhất cho cơ thể (9 kcal/g)?",
    options: ["Carbohydrate", "Protein", "Lipid (Chất béo)", "Vitamin C"],
    answer: 2,
    explain: "1 g Lipid cung cấp tới 9 kcal, cao hơn gấp đôi so với 1 g Protein (4 kcal) hay 1 g Carbohydrate (4 kcal)."
  },
  {
    q: "Trong 22 loại amino acid cấu tạo nên protein của cơ thể, có bao nhiêu loại amino acid thiết yếu đối với người trưởng thành?",
    options: ["5 loại", "9 loại", "15 loại", "22 loại"],
    answer: 1,
    explain: "Có 9 amino acid thiết yếu mà cơ thể không tự tổng hợp được, phải bổ sung hoàn toàn qua khẩu phần ăn hằng ngày."
  },
  {
    q: "Thực phẩm nào sau đây được xem là chứa 'protein chuẩn' nhờ tỉ lệ amino acid cân đối nhất?",
    options: ["Khoai lang và sắn", "Trứng và sữa", "Ngô hạt", "Rau bina"],
    answer: 1,
    explain: "Protein trong lòng trắng trứng và sữa được y học dinh dưỡng xếp vào nhóm protein chuẩn mực."
  },
  {
    q: "Nhóm vitamin nào sau đây tan hoàn toàn trong chất béo và cần lipid để cơ thể hấp thu?",
    options: ["Vitamin B1, B2, B6", "Vitamin C và B12", "Vitamin A, D, E, K", "Axit Folic và Biotin"],
    answer: 2,
    explain: "4 vitamin tan trong dầu là A, D, E, K bắt buộc cần có chất béo trong thức ăn để ruột non hấp thu vào máu."
  },
  {
    q: "Nhiệt độ tối ưu của ngăn mát tủ lạnh để bảo quản thực phẩm ngắn ngày theo tiêu chuẩn là bao nhiêu?",
    options: ["1 °C đến 7 °C", "10 °C đến 25 °C", "-5 °C đến 0 °C", "30 °C"],
    answer: 0,
    explain: "Ngăn mát tủ lạnh thường được đặt từ 1 °C đến 7 °C nhằm làm chậm tối đa sự sinh sản của vi sinh vật."
  },
  {
    q: "Dấu hiệu nào sau đây cho thấy một miếng thịt lợn tươi ngon và đạt chuẩn vệ sinh?",
    options: [
      "Bề mặt nhớt ướt, ấn vào để lại vết lõm sâu không đàn hồi",
      "Màng ngoài khô ráo, thớ thịt đỏ hồng tươi, ấn vào có độ đàn hồi tốt",
      "Thớ thịt có các đốm trắng hình hạt gạo",
      "Thịt có mùi chua gắt nhẹ"
    ],
    answer: 1,
    explain: "Thịt tươi có màng ngoài ráo, thớ đỏ hồng tự nhiên, tính đàn hồi tức thì khi ấn ngón tay."
  },
  {
    q: "Để hạn chế thất thoát vitamin tan trong nước khi sơ chế rau củ, ta nên thực hiện thế nào?",
    options: [
      "Rửa sạch nguyên cuống/cành rau dưới vòi nước chảy trước rồi mới thái nhỏ",
      "Thái nhỏ vụn rồi ngâm trong nước muối 1 giờ",
      "Ngâm rau trong nước ấm trước khi nấu",
      "Nấu nhừ rau trong nồi mở nắp vung kéo dài"
    ],
    answer: 0,
    explain: "Rửa sạch nguyên dạng trước rồi mới thái để không làm hoà tan và rửa trôi vitamin B, C ra ngoài."
  },
  {
    q: "Nghề nào sau đây chịu trách nhiệm chính trong việc thiết kế thực đơn, sáng tạo món ăn và điều hành toàn bộ gian bếp nhà hàng?",
    options: [
      "Bếp trưởng (Executive Chef)",
      "Thợ vận hành máy chiết rót",
      "Nhân viên bảo vệ bãi đỗ xe",
      "Kế toán kho vật tư"
    ],
    answer: 0,
    explain: "Bếp trưởng là linh hồn của nhà hàng, trực tiếp lên thực đơn, định lượng, sáng tạo món ăn và chỉ huy đội ngũ làm bếp."
  },
  {
    q: "Nhân viên chuẩn bị đồ ăn nhanh (Fast Food Attendant) cần phẩm chất nổi bật nào sau đây?",
    options: [
      "Tự ý thay đổi định lượng gia vị theo tâm trạng",
      "Thao tác nhanh nhẹn, tuân thủ đúng định lượng chuẩn mực và phong cách phục vụ chu đáo",
      "Chỉ làm việc khi không có khách",
      "Phải biết sáng tác nhạc ẩm thực"
    ],
    answer: 1,
    explain: "Mô hình thức ăn nhanh đòi hỏi tính kỉ luật cao độ về định lượng chuẩn, tốc độ thao tác và thái độ niềm nở."
  },
  {
    q: "Khi chảo dầu mỡ đang sôi trên bếp bất ngờ bùng cháy, cách xử lí TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM là gì?",
    options: [
      "Đậy nắp vung kim loại kín miệng chảo",
      "Trùm khăn vải ẩm lớn lên chảo",
      "Hắt một bát nước lạnh vào chảo dầu",
      "Khoá ngay van bình gas hoặc tắt bếp"
    ],
    answer: 2,
    explain: "Hắt nước vào dầu sôi sẽ làm nước bốc hơi nổ bung, bắn dầu lửa ra xung quanh gây hoả hoạn và bỏng nặng."
  },
  {
    q: "Theo khuyến cáo an toàn thực phẩm của WHO, nhiệt độ tại tâm (phần trong cùng) của thực phẩm khi nấu chín phải đạt tối thiểu bao nhiêu?",
    options: ["40 °C", "50 °C", "70 °C", "100 °C"],
    answer: 2,
    explain: "Nhiệt độ tâm thực phẩm phải đạt từ 70 °C trở lên để tiêu diệt mầm bệnh và kí sinh trùng."
  },
  {
    q: "Khoảng nhiệt độ từ 10 °C đến 60 °C trong an toàn thực phẩm được gọi là gì?",
    options: [
      "Vùng an toàn vi sinh",
      "Vùng nhiệt độ lý tưởng để cất giữ đồ ăn chín",
      "Vùng nhiệt độ nguy hiểm (Temperature Danger Zone)",
      "Vùng thanh trùng hoàn hảo"
    ],
    answer: 2,
    explain: "Khoảng nhiệt 10 °C - 60 °C là vùng vi khuẩn sinh sôi nhanh nhất, không nên để thực phẩm chín ở khoảng nhiệt này quá 2 giờ."
  },
  {
    q: "Ba đỉnh của 'Tam giác hoạt động nhà bếp' tạo thành dòng di chuyển khép kín gồm những vị trí nào?",
    options: [
      "Tủ lạnh (Lưu trữ) — Bồn rửa (Sơ chế) — Bếp nấu (Gia nhiệt)",
      "Bàn ăn — Tủ giày — Ban công",
      "Máy giặt — Bồn tắm — Cửa chính",
      "Lò vi sóng — Tủ rượu — Bàn trà"
    ],
    answer: 0,
    explain: "Tam giác hoạt động nhà bếp kinh điển kết nối Tủ lạnh, Bồn rửa và Bếp nấu."
  },
  {
    q: "Biện pháp phòng ngừa ngộ độc vi sinh vật do lây nhiễm chéo (Cross-contamination) trong nhà bếp là gì?",
    options: [
      "Sử dụng dao thớt riêng biệt cho thực phẩm sống và thực phẩm chín ăn liền",
      "Thái giò chả trên cùng một chiếc thớt vừa chặt cá sống",
      "Không bao giờ lau khô bề mặt bếp",
      "Xếp thịt bò sống lên trên bánh kem trong tủ lạnh"
    ],
    answer: 0,
    explain: "Tách riêng hoàn toàn dao, thớt, đĩa đựng cho đồ sống và đồ chín để tránh truyền vi khuẩn có hại."
  },
  {
    q: "Nếu một công thức cần 600 gam thịt với đơn giá 150.000 VNĐ/kg, chi phí tiền mua thịt là bao nhiêu?",
    options: ["60.000 VNĐ", "90.000 VNĐ", "100.000 VNĐ", "150.000 VNĐ"],
    answer: 1,
    explain: "Chi phí = (600 / 1000) * 150.000 = 0.6 * 150.000 = 90.000 VNĐ."
  },
  {
    q: "Một mâm cơm có tổng chi phí nguyên liệu là 120.000 VNĐ dành cho 4 người ăn. Chi phí bình quân một suất là bao nhiêu?",
    options: ["20.000 VNĐ/người", "30.000 VNĐ/người", "40.000 VNĐ/người", "60.000 VNĐ/người"],
    answer: 1,
    explain: "Chi phí mỗi người = 120.000 / 4 = 30.000 VNĐ/người."
  },
  {
    q: "Phương pháp chế biến nào sau đây dùng hơi nước nóng bốc lên từ đáy nồi để làm chín thực phẩm đặt trên xửng kín?",
    options: ["Hấp (Steaming)", "Luộc ngập nước", "Xào lửa lớn", "Rang cháy cạnh"],
    answer: 0,
    explain: "Hấp sử dụng hơi nước nóng để làm chín gián tiếp, giữ được vị ngọt tự nhiên và hình dáng món ăn."
  },
  {
    q: "Kĩ thuật quan trọng nhất khi chế biến món rau xào (stir-fry) để giữ được màu xanh mướt và độ giòn sần sật là gì?",
    options: [
      "Cho thật nhiều nước lạnh và đậy vung hầm 30 phút",
      "Lửa to, dầu nóng già, đảo nhanh tay liên tục và xào vừa chín tới",
      "Đun nhỏ lửa liu riu trong 1 giờ",
      "Thái rau thật vụn rồi bóp nát trước khi xào"
    ],
    answer: 1,
    explain: "Xào cần lửa lớn và thao tác nhanh để rau chín giòn mà không bị nhũn đổi màu úa."
  },
  {
    q: "Vì sao không nên ăn những phần thịt bị nướng cháy xém đen hoá than?",
    options: [
      "Vì nó quá nhiều chất béo",
      "Vì chứa các hợp chất amin dị vòng sinh ra do than hoá protein ở nhiệt độ cao gây hại sức khoẻ",
      "Vì làm thịt dai khó nhai",
      "Vì làm mất đi vị ngọt của muối"
    ],
    answer: 1,
    explain: "Cháy than hoá sinh ra các chất độc tiềm ẩn nguy cơ ung thư đường ruột, cần gọt bỏ trước khi dùng."
  },
  {
    q: "Món xà lách trộn dầu giấm nên được trộn nước sốt vào thời điểm nào để món ăn đạt chất lượng cảm quan tốt nhất?",
    options: [
      "Trộn từ tối hôm trước rồi để trong tủ lạnh",
      "Trộn trước khi ăn khoảng 5 – 10 phút",
      "Trộn trước 2 tiếng đồng hồ",
      "Đem đun sôi sốt cùng rau rồi mới trộn"
    ],
    answer: 1,
    explain: "Trộn trước 5-10 phút giúp gia vị thấm đều mà rau không bị áp suất thẩm thấu hút hết nước làm ỉu xìu."
  },
  {
    q: "Món Nộm (Gỏi) truyền thống Việt Nam là sự phối hợp tinh tế giữa những thành phần nào?",
    options: [
      "Chỉ gồm bánh mì và bơ sữa",
      "Rau củ tươi giòn thái chỉ phối hợp cùng nguyên liệu động vật chín (tai heo, tôm thịt) và nước mắm chua cay mặn ngọt",
      "Toàn bộ nguyên liệu thịt cá còn sống hoàn toàn",
      "Cơm nguội rang cháy giòn"
    ],
    answer: 1,
    explain: "Nộm kết hợp rau củ thái sợi giòn mát với thịt cá đã nấu chín, hòa quyện trong nước mắm chua ngọt và rau thơm lạc rang."
  },
  {
    q: "Vi sinh vật có lợi đóng vai trò chủ đạo trong quá trình muối chua dưa cải và cà pháo là gì?",
    options: ["Vi khuẩn Lactic", "Nấm men bánh mì", "Bào tử nấm mốc xanh", "Vi khuẩn E. coli"],
    answer: 0,
    explain: "Vi khuẩn lactic lên men đường tự nhiên tạo acid lactic, làm chua giòn dưa cải và ức chế vi khuẩn gây thối."
  },
  {
    q: "Khi dưa muối có hiện tượng nổi váng nấm mốc đen, cọng dưa ủng nhớt và có mùi hôi lạ, em cần làm gì?",
    options: [
      "Đem rửa lại bằng nước sạch rồi ăn",
      "Vớt bỏ lớp váng rồi tiếp tục dùng",
      "Bỏ ngay toàn bộ vì dưa đã hỏng và sinh độc tố nấm nguy hại",
      "Cho thêm muối vào ngâm tiếp"
    ],
    answer: 2,
    explain: "Dưa khú hỏng bị nấm mốc xâm lấn có thể sinh ra độc tố nguy hại cho gan và tiêu hoá, phải loại bỏ ngay."
  },
  {
    q: "Loại dụng cụ nấu nào sau đây KHÔNG NÊN dùng để chứa đựng thức ăn có tính acid cao (chanh, giấm, dưa chua) trong thời gian dài?",
    options: [
      "Thìa đũa bằng gỗ tự nhiên",
      "Bát đĩa sứ tráng men cao cấp",
      "Nồi chảo bằng gang, nhôm trần không tráng men bảo vệ",
      "Hộp thuỷ tinh chịu nhiệt"
    ],
    answer: 2,
    explain: "Acid trong dưa muối và chanh giấm sẽ phản ứng ăn mòn nhôm, gang trần giải phóng ion kim loại vào thức ăn."
  },
  {
    q: "Hành động nào sau đây thể hiện trách nhiệm tiết kiệm và bảo vệ môi trường trong gian bếp gia đình?",
    options: [
      "Để vòi nước chảy tự do suốt thời gian sơ chế đồ ăn",
      "Tận dụng tối đa nguyên liệu, bảo quản đúng cách phần thức ăn còn thừa và phân loại rác hữu cơ nhà bếp",
      "Nấu thật nhiều món ăn rồi đổ bỏ thức ăn thừa",
      "Bật bếp gas liên tục để sưởi ấm gian bếp"
    ],
    answer: 1,
    explain: "Tiết kiệm thức ăn, không lãng phí và phân loại rác thải nhà bếp là thói quen sống văn minh của người làm bếp hiện đại."
  }
];

module.exports = { chebienExamQuestions };
