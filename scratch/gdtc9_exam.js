// gdtc9_exam.js - 25 câu hỏi Đấu trường Trạng Nguyên Thể Thao & Rèn Luyện Thể Chất 9

const gdtc9ExamQuestions = [
  {
    q: "Thời gian phù hợp để thực hiện hoạt động 'tắm không khí' rèn luyện sức khoẻ vào buổi sáng là bao nhiêu theo SGK?",
    options: [
      "Khoảng 5–10 phút ngay khi vừa thức dậy",
      "Khoảng 15–30 phút mỗi ngày trong điều kiện thời tiết trong lành, thoáng đãng",
      "Khoảng 1–2 tiếng dưới trời nắng gắt",
      "Khoảng 45 phút vào buổi trưa nắng"
    ],
    answer: 1,
    explain: "Sách giáo khoa gợi ý thực hiện tắm không khí vào buổi sáng khoảng 15–30 phút mỗi ngày, chọn nơi thoáng, không khí sạch, vận động nhẹ và hít sâu thở đều."
  },
  {
    q: "Khi rèn luyện thích ứng với nước lạnh, nguyên tắc an toàn quan trọng nhất cần tuân thủ là gì?",
    options: [
      "Dội ngay một xô nước đá lạnh buốt lên đầu sau khi vừa thi chạy 100m mệt nhoài",
      "Hạ nhiệt độ nước từ từ, bắt đầu từ thời gian ngắn (1–2 phút), không tắm đột ngột khi cơ thể còn nóng sau vận động nặng",
      "Ngâm mình trong nước lạnh trên 60 phút liên tục để thử thách ý chí",
      "Tắm nước đá lạnh khi đang bị sốt hoặc rét run để giải nhiệt nhanh"
    ],
    answer: 1,
    explain: "Phải làm quen với nước mát/lạnh từ từ, bắt đầu 1–2 phút, lau khô ngay sau tắm; tuyệt đối không tắm nước lạnh ngay khi cơ thể còn mồ hôi và nóng bừng sau vận động nặng."
  },
  {
    q: "Khung giờ tắm nắng thích hợp để cơ thể tổng hợp vitamin D được gợi ý trong SGK GDTC 9 là:",
    options: [
      "Mùa hè khoảng 11:00–13:00; Mùa đông khoảng 12:00–14:00",
      "Mùa hè khoảng 6:30–7:30; Mùa đông khoảng 7:00–9:00",
      "Mùa hè khoảng 14:00–16:00; Mùa đông khoảng 15:00–17:00",
      "Bất kì khung giờ nào có ánh nắng gắt nhất trong ngày"
    ],
    answer: 1,
    explain: "Mùa hè nên phơi nắng sớm (6:30–7:30) và mùa đông (7:00–9:00) để đón tia UVB có lợi tổng hợp vitamin D, tránh tia bức xạ nhiệt có hại vào buổi trưa."
  },
  {
    q: "Đối với người tập luyện môn thể thao thiên về tốc độ và cự li ngắn (như chạy 100m), chế độ dinh dưỡng cần ưu tiên nhóm chất nào?",
    options: [
      "Carbohydrate chiếm khoảng 58% tổng năng lượng khẩu phần để cung cấp ATP tức thời",
      "Chất béo bão hòa (lipid) chiếm 60% năng lượng",
      "Chỉ ăn rau xanh và hoàn toàn kiêng tinh bột",
      "Chỉ uống nước ngọt có ga trước khi thi đấu 5 phút"
    ],
    answer: 0,
    explain: "Vận động tốc độ ngắn đòi hỏi năng lượng yếm khí giải phóng nhanh từ glycogen và glucose, do đó carbohydrate chiếm khoảng 58% tổng năng lượng khẩu phần."
  },
  {
    q: "Thứ tự 3 khẩu lệnh chuẩn mực của kĩ thuật xuất phát thấp trong chạy cự li ngắn 100m là:",
    options: [
      "'Chuẩn bị!' -> 'Cúi xuống!' -> 'Chạy!'",
      "'Vào chỗ!' -> 'Sẵn sàng!' -> 'Chạy!' (hoặc tiếng súng/còi phát lệnh)",
      "'Đứng lên!' -> 'Vào vị trí!' -> 'Bắt đầu!'",
      "'Sẵn sàng!' -> 'Vào chỗ!' -> 'Chạy!'"
    ],
    answer: 1,
    explain: "Kĩ thuật xuất phát thấp chuẩn quốc tế gồm 3 hiệu lệnh tuần tự: 'Vào chỗ' (vào bàn đạp), 'Sẵn sàng' (nâng hông dồn trọng tâm), và 'Chạy' (phát lệnh xuất phát)."
  },
  {
    q: "Ở tư thế 'Sẵn sàng' của kĩ thuật xuất phát thấp, vị trí của hông so với vai như thế nào?",
    options: [
      "Hông hạ thấp sát mặt đất ngang bằng đầu gối chân sau",
      "Hông nâng cao hơn vai, trọng tâm cơ thể dồn về trước lên hai tay và bàn đạp chân trước",
      "Hông và vai thẳng đứng vuông góc với mặt đất",
      "Hông kéo lùi hết cỡ về phía sau qua vạch xuất phát"
    ],
    answer: 1,
    explain: "Khi nghe lệnh 'Sẵn sàng', người chạy từ từ nâng hông cao hơn vai khoảng 10–20 cm, dồn trọng tâm về trước để khi phát lệnh có thể đạp lao tức thì."
  },
  {
    q: "Đặc điểm kĩ thuật của giai đoạn chạy lao sau xuất phát 100m là gì?",
    options: [
      "Ngay bước đầu tiên đã dựng thẳng đứng thân người và sải bước dài nhất có thể",
      "Thân người ban đầu ngả nhiều về trước, bước đầu ngắn, đạp mạnh, tần số nhanh, sau đó tăng dần độ dài bước và nâng thân từ từ",
      "Chạy zíc-zắc sang hai bên đường chạy để cản trở đối thủ",
      "Chạy chậm lại ở 10m đầu tiên để thăm dò các đối thủ cùng lượt chạy"
    ],
    answer: 1,
    explain: "Chạy lao cần giữ thân ngả trước, bước đầu ngắn, phát lực đạp sau mạnh mẽ, sau đó tăng dần độ dài và tần số bước, nâng dần thân người chuyển sang chạy giữa quãng."
  },
  {
    q: "Khi về đích cự li ngắn 100m, động tác nào sau đây là ĐÚNG kĩ thuật và an toàn?",
    options: [
      "Nhảy bật lên cao bằng cả hai chân để vồ lấy dây đích",
      "Chủ động đánh ngực hoặc nghiêng vai chạm dây đích, tiếp tục chạy lao qua vạch rồi giảm tốc độ từ từ",
      "Dừng khựng lại đột ngột ngay đúng vạch đích",
      "Quay đầu nhìn lại phía sau xem đối thủ đang ở đâu"
    ],
    answer: 1,
    explain: "Về đích cần duy trì tốc độ cao, gập thân đánh ngực hoặc vai chạm dây đích, tuyệt đối không nhảy vồ đích và không dừng đột ngột để tránh chấn thương."
  },
  {
    q: "Góc chạy đà hợp lí so với xà trong kĩ thuật nhảy cao kiểu nằm nghiêng là khoảng bao nhiêu độ?",
    options: [
      "Góc vuông 90° trực diện với xà",
      "Góc chếch khoảng 30° – 40° so với mặt phẳng xà",
      "Góc nghiêng 70° – 80°",
      "Chạy song song 0° dọc theo thanh xà"
    ],
    answer: 1,
    explain: "SGK quy định góc chạy đà của nhảy cao kiểu nằm nghiêng khoảng 30° – 40° tạo điều kiện thuận lợi nhất để xoay thân nằm nghiêng qua xà."
  },
  {
    q: "Trong 4 giai đoạn của nhảy cao kiểu nằm nghiêng, giai đoạn nào giữ vai trò quyết định trực tiếp nhất đến thành tích độ cao đạt được?",
    options: [
      "Giai đoạn chạy đà",
      "Giai đoạn giậm nhảy",
      "Giai đoạn trên không",
      "Giai đoạn rơi xuống tiếp đất"
    ],
    answer: 1,
    explain: "Giậm nhảy là giai đoạn quan trọng nhất, chuyển động năng chạy đà nằm ngang thành lực bật thẳng đứng đưa trọng tâm cơ thể vượt qua độ cao của xà."
  },
  {
    q: "Khi thực hiện kĩ thuật tiếp đất trong nhảy cao kiểu nằm nghiêng, vận động viên cần tiếp đất bằng bộ phận nào?",
    options: [
      "Rơi úp mặt hoặc chống thẳng hai bàn tay cứng xuống hố cát",
      "Tiếp đất chủ động bằng chân giậm nhảy, khuỵu gối hoãn xung, hai tay phụ giữ thăng bằng",
      "Rơi ngửa lưng trực tiếp đập mạnh xuống cát",
      "Tiếp đất bằng gót chân lăng và giữ thẳng cứng khớp gối"
    ],
    answer: 1,
    explain: "Sau khi vượt xà ở tư thế nằm nghiêng, vận động viên xoay thân đưa chân giậm xuống tiếp đất trước, khuỵu gối để giảm chấn động và bảo vệ khớp xương."
  },
  {
    q: "Khi chạy cự li trung bình trên đoạn đường cong (ôm cua), thân người vận động viên cần điều chỉnh như thế nào?",
    options: [
      "Nghiêng thân sang phía ngoài đường cua để chống lực ly tâm",
      "Chủ động nghiêng thân vào phía trong đường chạy, tay phải đánh biên độ rộng hơn tay trái",
      "Giữ thân người hoàn toàn thẳng đứng vuông góc tuyệt đối",
      "Chạy giật lùi về phía sau để quan sát mặt sân"
    ],
    answer: 1,
    explain: "Khi ôm cua, người chạy phải nghiêng thân vào phía trong tâm đường cong để triệt tiêu lực quán tính ly tâm, đồng thời tay phải đánh rộng hơn tay trái để giữ thăng bằng."
  },
  {
    q: "Khi gặp hiện tượng 'cực điểm' (tức ngực, khó thở, chân tay nặng trĩu) lúc đang chạy trung bình, cách xử lí đúng đắn là:",
    options: [
      "Dừng lại ngay lập tức và ngồi thụp xuống sân nghỉ",
      "Giữ vững ý chí, giảm nhẹ tốc độ chạy, chủ động hít sâu thở mạnh bằng miệng và mũi để nhanh chóng vượt qua vào 'điểm hồi phục'",
      "Cố sức bứt tốc tối đa vượt quá giới hạn chịu đựng",
      "Uống liên tục 1 lít nước ngọt có ga khi đang chạy"
    ],
    answer: 1,
    explain: "Cực điểm là phản ứng sinh lí tự nhiên do thiếu oxy tạm thời. Vận động viên cần bình tĩnh, điều chỉnh nhịp thở sâu, giảm nhẹ bước chạy để chuyển sang trạng thái ổn định (Second wind)."
  },
  {
    q: "Cấu trúc đếm nhịp chuẩn trong bài thể dục nhịp điệu THCS thường được tổ chức theo nhịp nào?",
    options: [
      "Nhịp đếm 1–2–3",
      "Nhịp 8 (cụm 2 × 8 nhịp hoặc 4 × 8 nhịp) phối hợp nhịp nhàng theo phách nhạc",
      "Nhịp đếm ngẫu hứng không theo chu kì",
      "Chỉ tập theo hiệu lệnh còi đơn lẻ"
    ],
    answer: 1,
    explain: "Bài thể dục nhịp điệu được cấu tạo từ các động tác theo nhịp 8 (1-2-3-4-5-6-7-8), lặp lại theo cụm 2x8 nhịp, phối hợp tay - chân - thân uyển chuyển theo âm nhạc."
  },
  {
    q: "Động tác thứ 3 trong phần 1 của bài thể dục nhịp điệu lớp 9 có tên gọi là gì?",
    options: [
      "Giậm chân tại chỗ",
      "Bật tách chụm",
      "Thu chân – tay cao",
      "Vặn mình"
    ],
    answer: 1,
    explain: "Phần 1 gồm 4 động tác tuần tự: 1. Giậm chân tại chỗ; 2. Thu chân – tay cao; 3. Bật tách chụm; 4. Vặn mình."
  },
  {
    q: "Kĩ thuật bật nhảy đập cầu thuận tay (Smash) trong môn cầu lông nhằm mục đích chủ yếu gì?",
    options: [
      "Chỉ để phòng thủ khi đối phương dồn ép",
      "Tấn công uy lực: đánh cầu ở điểm cao nhất phía trước, gập cổ tay nhanh, úp mặt vợt để cầu bay cắm dốc sang sân đối thủ",
      "Gài cầu rơi nhẹ nhàng sát mép lưới",
      "Tung cầu thẳng lên trời để kéo dài thời gian nghỉ"
    ],
    answer: 1,
    explain: "Cú đập cầu (Smash) là đòn tấn công quyết định trong cầu lông, vận dụng lực toàn thân và cổ tay úp mặt vợt để đập cầu cắm nhanh xuống sân đối phương."
  },
  {
    q: "Đặc điểm cơ bản của kĩ thuật 'bỏ nhỏ' (Drop shot) trong môn cầu lông là gì?",
    options: [
      "Dùng toàn bộ sức mạnh đập mạnh vào cán vợt",
      "Dùng lực tay tinh tế điều khiển quả cầu vừa bay qua mép lưới và rơi sát lưới bên sân đối phương",
      "Đánh cầu bay bổng thật cao về cuối sân",
      "Để cầu rơi chạm đất trong sân mình rồi mới đánh qua"
    ],
    answer: 1,
    explain: "Bỏ nhỏ đòi hỏi cảm giác cầu khéo léo, tiếp xúc nhẹ nhàng làm cho quả cầu lướt sát mép trên của lưới rồi cắm ngay xuống khu vực sát lưới đối phương."
  },
  {
    q: "Trong thi đấu cầu lông, tình huống nào sau đây bị trọng tài bắt lỗi (mất điểm)?",
    options: [
      "Cầu bay qua lưới rơi trong phạm vi sân quy định",
      "Vợt hoặc người của vận động viên chạm vào lưới khi bóng đang trong cuộc",
      "Đánh cầu khi cầu đang ở trên không",
      "Phát cầu đúng ô chéo sân hợp lệ"
    ],
    answer: 1,
    explain: "Theo luật cầu lông, chạm vợt, thân người hoặc trang phục vào lưới khi cầu đang trong cuộc là hành vi phạm luật (lỗi chạm lưới)."
  },
  {
    q: "Kĩ thuật đá bóng bằng mu giữa bàn chân có đặc điểm tiếp xúc như thế nào?",
    options: [
      "Dùng mũi ngón chân cái chích nhẹ vào mặt sân",
      "Mũi chân duỗi thẳng, cổ chân giữ thật chắc, mu giữa tiếp xúc vào tâm sau của quả bóng",
      "Dùng gót chân giật bóng về phía sau",
      "Dùng má trong tiếp xúc vào phần đỉnh trên của bóng"
    ],
    answer: 1,
    explain: "Đá bóng bằng mu giữa bàn chân yêu cầu mũi chân duỗi thẳng chúc xuống, khóa chắc cổ chân và sút mạnh vào tâm sau bóng để tạo quỹ đạo căng, mạnh."
  },
  {
    q: "Quy định nào sau đây là BẮT BUỘC theo luật bóng đá 7 người khi thực hiện quả ném biên tại chỗ?",
    options: [
      "Được phép nhảy lên nhấc bổng cả hai chân khỏi mặt đất khi ném",
      "Hai chân phải giữ tiếp xúc với mặt đất (trên hoặc ngoài đường biên), cầm bóng hai tay đưa liên tục qua đầu từ sau ra trước",
      "Chỉ được dùng một tay ném như ném bóng chày",
      "Ném biên trực tiếp bóng bay vào lưới đối phương được tính là bàn thắng hợp lệ"
    ],
    answer: 1,
    explain: "Luật ném biên quy định cầu thủ phải quay mặt vào sân, hai chân chạm đất ở ngoài hoặc trên vạch biên, dùng hai tay cầm bóng đưa từ sau qua đầu ném vào sân."
  },
  {
    q: "Khi dừng bóng bổng bằng mu giữa bàn chân trong bóng đá, yếu tố nào giúp bóng không bị bật nảy ra xa?",
    options: [
      "Gồng cứng chân và đá ngược trở lại quả bóng",
      "Kịp thời hạ chân và rút nhẹ chân ra sau đúng thời điểm tiếp xúc để hoãn xung giảm lực của bóng",
      "Dùng đầu gối hất mạnh bóng lên trời",
      "Nhắm mắt quay lưng lại hướng bóng đến"
    ],
    answer: 1,
    explain: "Động tác hạ chân và thu chân theo đà rơi của bóng (hoãn xung) giúp triệt tiêu xung lực, giữ bóng rơi êm sát tầm chân khống chế."
  },
  {
    q: "Ưu điểm nổi bật của kĩ thuật dẫn bóng bằng mu ngoài bàn chân là gì?",
    options: [
      "Dễ dàng che chắn bóng, chuyển hướng đột ngột và quan sát bao quát trận đấu khi di chuyển tốc độ",
      "Bắt buộc người chơi phải nhìn chằm chằm xuống bóng không được nhìn xung quanh",
      "Chỉ dẫn được bóng đi lùi về sân nhà",
      "Khiến quả bóng bay bổng lên cao quá đầu đối thủ"
    ],
    answer: 0,
    explain: "Dẫn bóng bằng mu ngoài cho phép cầu thủ vừa chạy bước tự nhiên vừa đẩy bóng nhẹ, dễ ngoặt bóng đổi hướng linh hoạt và quan sát đồng đội trên sân."
  },
  {
    q: "Trong kĩ thuật 'đột phá bước thuận' môn bóng rổ sang phía bên phải, nhịp thực hiện nào là ĐÚNG để không bị phạt lỗi chạy bước?",
    options: [
      "Nhấc chân trụ chạy 3 bước rồi mới đập bóng xuống sân",
      "Chân trái làm trụ, chân phải bước sang phải; bóng phải rời tay đập xuống sân TRƯỚC KHI chân trụ rời mặt đất",
      "Cầm bóng bằng hai tay nhảy lò cò liên tục",
      "Chân trụ bước trước rồi mới tung bóng lên cao"
    ],
    answer: 1,
    explain: "Luật bóng rổ quy định bóng phải rời tay đập xuống sàn trước khi chân trụ nhấc lên; nếu nhấc chân trụ trước khi đập bóng sẽ bị phạt lỗi chạy bước (traveling)."
  },
  {
    q: "Kĩ thuật 'đột phá bước chéo' (Cross-step) trong bóng rổ có điểm gì khác biệt so với bước thuận?",
    options: [
      "Chân bước di chuyển sẽ bước chéo qua thân trước mặt người phòng thủ, hạ thấp trọng tâm dùng vai che bóng để bứt phá",
      "Bước thẳng lùi về phía sau rổ nhà",
      "Hai chân nhảy tách sang hai bên cùng lúc",
      "Chỉ được thực hiện khi đứng yên một chỗ không dẫn bóng"
    ],
    answer: 0,
    explain: "Bước chéo đưa chân không làm trụ vắt chéo qua thân, dùng lưng và vai che chắn bóng hiệu quả trước sự áp sát của hậu vệ đối phương."
  },
  {
    q: "Động tác chuyền bóng một tay trên vai trong môn bóng rổ thường được áp dụng hiệu quả nhất trong tình huống nào?",
    options: [
      "Khi cần chuyền cự li cực ngắn 20 cm giữa hai người đứng sát nhau",
      "Khi thực hiện các đường chuyền cự li trung bình và xa, phát động tấn công nhanh sang phần sân đối phương",
      "Khi đang bị đối phương ôm chặt lấy bóng",
      "Chỉ dùng khi chuẩn bị ném phạt từ vạch 1 điểm"
    ],
    answer: 1,
    explain: "Chuyền một tay trên vai (như ném bóng chày/baseball pass) có lực phát động mạnh từ chân, hông và cổ tay, rất thích hợp cho các đường chuyền dài phản công nhanh."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = gdtc9ExamQuestions;
}
