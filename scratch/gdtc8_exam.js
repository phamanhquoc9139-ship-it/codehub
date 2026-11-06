// 20 câu hỏi Đấu trường Trạng Nguyên Thể Thao 8 (Thời gian: 60:00)
// Bao quát trọn vẹn 3 Phần: Dinh dưỡng, Chạy ngắn 100m, Nhảy cao bước qua, Chạy trung bình, Bài tập thể dục, Cầu lông, Bóng đá, Bóng rổ.

const gdtc8Exam = [
  {
    q: "Tỉ lệ năng lượng (calo) phân bổ cân đối giữa các bữa ăn trong ngày cho người tập thể thao là:",
    options: [
      "(Recommended) Sáng 30% – Trưa 40-45% – Tối 25-30%",
      "Sáng 10% – Trưa 30% – Tối 60%",
      "Sáng 50% – Trưa 10% – Tối 40%",
      "Chia đều mỗi bữa 33.3% không phân biệt"
    ],
    ans: 0,
    expl: "Bữa sáng và trưa cung cấp năng lượng cho hoạt động học tập và tập luyện, bữa tối ăn nhẹ hơn để cơ thể nghỉ ngơi và hồi phục."
  },
  {
    q: "Chất dinh dưỡng nào là nguồn cung cấp năng lượng chủ yếu và nhanh nhất cho cơ bắp khi vận động thể thao?",
    options: [
      "(Recommended) Carbohydrate (Carb / Tinh bột - đường)",
      "Lipid (Chất béo)",
      "Protein (Chất đạm)",
      "Khoáng chất"
    ],
    ans: 0,
    expl: "Carbohydrate chuyển hóa thành glucose và glycogen là nguồn năng lượng trực tiếp và hiệu quả nhất cho cơ thể."
  },
  {
    q: "Quy tắc bù nước khoa học trước khi bước vào buổi tập luyện thể thao (khoảng 20-30 phút) là:",
    options: [
      "(Recommended) Uống từng ngụm nhỏ khoảng 150 – 250 ml nước lọc",
      "Uống liên tục thật nhiều nước (1 – 2 lít)",
      "Không uống nước để tránh xóc hông",
      "Uống nước đá thật lạnh hoặc nước ngọt có ga"
    ],
    ans: 0,
    expl: "Uống 150-250 ml nước lọc từng ngụm nhỏ giúp cơ thể đủ nước mà không gây nặng bụng hay xóc hông."
  },
  {
    q: "Trong kĩ thuật xuất phát thấp môn Chạy cự li ngắn (100 m), thứ tự ba khẩu lệnh thi đấu là:",
    options: [
      "(Recommended) 'Vào chỗ!' – 'Sẵn sàng!' – 'Chạy!' (hoặc tiếng súng phát lệnh)",
      "'Chuẩn bị!' – 'Chạy!' – 'Nhanh lên!'",
      "'Vào chỗ!' – 'Chạy!'",
      "'Sẵn sàng!' – 'Vào chỗ!' – 'Xuất phát!'"
    ],
    ans: 0,
    expl: "Quy chuẩn luật điền kinh cự li ngắn xuất phát thấp gồm đúng 3 khẩu lệnh: 'Vào chỗ!' -> 'Sẵn sàng!' -> 'Chạy!'."
  },
  {
    q: "Ở khẩu lệnh 'Sẵn sàng!' trong xuất phát thấp, vị trí mông so với vai phải như thế nào?",
    options: [
      "(Recommended) Nâng mông cao hơn vai khoảng 10 – 15 cm, trọng tâm dồn nhẹ về hai tay",
      "Hạ mông thấp hơn vai chạm gót chân",
      "Mông bằng ngang bằng với vai",
      "Đứng thẳng người dậy chuẩn bị chạy"
    ],
    ans: 0,
    expl: "Nâng mông cao hơn vai giúp tạo góc đạp sau thuận lợi nhất để lao nhanh về phía trước."
  },
  {
    q: "Góc nghiêng thân trên so với mặt đất trong giai đoạn chạy lao sau xuất phát 100 m là khoảng:",
    options: [
      "(Recommended) Khoảng 45° - 50°, sau đó nâng dần thân người",
      "Thẳng đứng 90° ngay từ bước đầu tiên",
      "Ngả ra sau 120° để hãm tốc",
      "Song song 0° sát mặt đất"
    ],
    ans: 0,
    expl: "Thân người duy trì độ nghiêng khoảng 45°-50° ở những bước đầu để phát huy lực đạp sau, sau đó nâng dần lên khi đạt tốc độ cao."
  },
  {
    q: "Kĩ thuật đánh đích nào thường được sử dụng hiệu quả nhất trong chạy cự li ngắn 100 m?",
    options: [
      "(Recommended) Gập thân trên ra trước (đánh ngực) hoặc nghiêng vai chạm dây đích",
      "Nhảy vọt bằng cả hai chân qua vạch đích",
      "Chạy chậm dần lại 5m trước vạch đích",
      "Dừng lại đột ngột ngay khi chân chạm vạch đích"
    ],
    ans: 0,
    expl: "Gập thân đánh ngực hoặc xoay vai về phía trước giúp dây đích được tiếp xúc sớm nhất ở thời điểm quyết định."
  },
  {
    q: "Góc chạy đà chuẩn so với mặt phẳng xà trong Nhảy cao kiểu bước qua là:",
    options: [
      "(Recommended) Chếch 25° – 40° so với mặt phẳng xà",
      "Vuông góc 90° trực diện với xà",
      "Song song 0° chạy dọc theo xà",
      "Chếch 75° – 80°"
    ],
    ans: 0,
    expl: "Chạy đà góc 25°-40° tạo điều kiện thuận lợi nhất để chân giậm nhảy phát lực và chân lăng bước qua xà."
  },
  {
    q: "Chân giậm nhảy trong kĩ thuật nhảy cao kiểu bước qua là chân nào?",
    options: [
      "(Recommended) Chân ở phía xa xà hơn so với hướng chạy đà",
      "Chân ở phía gần xà hơn",
      "Giậm nhảy cùng lúc bằng cả hai chân",
      "Tùy ý không cần cố định"
    ],
    ans: 0,
    expl: "Quy tắc nhảy cao: chân giậm là chân xa xà để chân lăng (chân gần xà) vung lên vượt qua xà trước."
  },
  {
    q: "Khi rơi xuống nệm tiếp đất trong nhảy cao kiểu bước qua, để hoãn xung và đảm bảo an toàn cần:",
    options: [
      "(Recommended) Tiếp đất bằng chân lăng trước, khuỵu gối hoãn xung, thân người hơi ngả về trước",
      "Tiếp đất bằng lưng đập mạnh xuống đệm",
      "Giữ thẳng đơ hai đầu gối khi chạm đất",
      "Chống hai bàn tay thẳng xuống đất"
    ],
    ans: 0,
    expl: "Khuỵu gối giúp giảm chấn lực tác động lên khớp gối, cổ chân và cột sống."
  },
  {
    q: "Trong Chạy cự li trung bình, tư thế xuất phát theo luật điền kinh là:",
    options: [
      "(Recommended) Xuất phát cao (hai khẩu lệnh: 'Vào chỗ!' và 'Chạy!')",
      "Xuất phát thấp có bàn đạp",
      "Ngồi xổm trên vạch xuất phát",
      "Xuất phát tự do không cần khẩu lệnh"
    ],
    ans: 0,
    expl: "Chạy cự li trung bình từ 800m trở lên thi đấu bằng xuất phát cao với 2 khẩu lệnh."
  },
  {
    q: "Nhịp thở khoa học và hiệu quả nhất khi chạy cự li trung bình là:",
    options: [
      "(Recommended) Phối hợp 2 bước hít vào – 2 bước thở ra (hoặc 3 bước hít – 3 bước thở)",
      "Nín thở càng lâu càng tốt",
      "Chỉ thở nhanh và nông bằng miệng",
      "10 bước chạy mới thở một lần"
    ],
    ans: 0,
    expl: "Nhịp thở 2:2 giúp cung cấp đủ oxy liên tục cho cơ bắp và tránh kiệt sức."
  },
  {
    q: "Hiện tượng 'cực điểm' trong chạy cự li trung bình là gì và cách khắc phục đúng là:",
    options: [
      "(Recommended) Cảm giác tức ngực, khó thở, chân nặng trĩu; cần kiên trì duy trì tốc độ và hít thở sâu",
      "Là lúc chạy nhanh nhất đạt kỉ lục; cần tăng tốc tối đa",
      "Bị chuột rút; cần dừng lại nằm ngay xuống đường chạy",
      "Triệu chứng đau tim nguy hiểm cần bỏ cuộc ngay"
    ],
    ans: 0,
    expl: "Hiện tượng cực điểm do thiếu oxy tạm thời; chỉ cần ý chí duy trì bước chạy và hít sâu thì cơ thể sẽ chuyển sang 'hô hấp lần hai' dễ chịu hơn."
  },
  {
    q: "Tập luyện bài thể dục nhịp điệu mang lại lợi ích nổi bật nào sau đây?",
    options: [
      "(Recommended) Phát triển độ dẻo dai, nhịp điệu, tư thế đẹp và hệ tuần hoàn hô hấp",
      "Làm teo cơ bắp",
      "Chỉ nhằm mục đích giải trí không có giá trị thể lực",
      "Làm giảm khả năng giữ thăng bằng"
    ],
    ans: 0,
    expl: "Bài thể dục nhịp điệu phối hợp nhịp nhàng âm nhạc và vận động toàn thân, rèn luyện tư thế và tuần hoàn."
  },
  {
    q: "Trong kĩ thuật Cầu lông, tư thế tiếp xúc cầu của cú 'Đập cầu thuận tay' (Smash) là:",
    options: [
      "(Recommended) Điểm đón cầu ở vị trí cao nhất, chếch về phía trước trán một tầm vợt",
      "Đón cầu khi cầu đã rơi xuống ngang đầu gối",
      "Đập cầu ở phía sau lưng",
      "Cầm vợt bằng cả hai tay để đập"
    ],
    ans: 0,
    expl: "Đón cầu ở điểm cao nhất phía trước trán tạo góc đập cắm hiểm hóc và phát huy tối đa lực gập cổ tay."
  },
  {
    q: "Kĩ thuật 'Đá bóng bằng mu ngoài bàn chân' trong Bóng đá có ưu điểm đặc trưng là:",
    options: [
      "(Recommended) Quỹ đạo bóng bay xoáy vòng cung bất ngờ, dễ tạo đường chuyền và sút bóng góc hẹp",
      "Bóng bay thẳng tắp không xoáy",
      "Lực sút luôn yếu hơn lòng bàn chân",
      "Chỉ dùng khi đá phạt đền 11m"
    ],
    ans: 0,
    expl: "Đá mu ngoài tạo độ xoáy lượn vòng cong (trivela), khiến thủ môn và hậu vệ đối phương rất khó phán đoán."
  },
  {
    q: "Khi thực hiện kĩ thuật Đánh đầu trong bóng đá, bộ phận nào của đầu tiếp xúc bóng chính xác và an toàn nhất?",
    options: [
      "(Recommended) Vùng trán giữa (phần xương trán dày và phẳng)",
      "Đỉnh đầu (thóp đầu)",
      "Vùng sau gáy",
      "Thái dương bên tai"
    ],
    ans: 0,
    expl: "Xương trán giữa phẳng và dày nhất, giúp định hướng bóng chuẩn xác và an toàn cho đốt sống cổ."
  },
  {
    q: "Kĩ thuật Dẫn bóng trong môn Bóng rổ đòi hỏi bàn tay tiếp xúc với bóng như thế nào?",
    options: [
      "(Recommended) Dùng các chai tay ngón tay và cổ tay để ấn, đẩy bóng xuống sàn (không dùng lòng bàn tay tát bóng)",
      "Dùng lòng bàn tay vỗ thật mạnh bôm bốp vào bóng",
      "Cầm bóng bằng 2 tay chạy 3 bước rồi đập bóng",
      "Dùng mu bàn tay để hất bóng lên cao"
    ],
    ans: 0,
    expl: "Dùng ngón tay và cổ tay điều khiển giúp cảm giác bóng mềm mại, khống chế hướng bóng linh hoạt và không phạm luật dẫn bóng."
  },
  {
    q: "Trong kĩ thuật 2 bước lên rổ ném bóng một tay dưới thấp (Lay-up bên phải), bước chân thứ nhất là chân nào?",
    options: [
      "(Recommended) Chân phải (bước dài để hãm đà ngang), bước hai chân trái (bước ngắn bật nhảy lên cao)",
      "Chân trái bước dài, chân phải bật nhảy",
      "Nhảy chụm cả hai chân cùng lúc từ vạch 3 điểm",
      "Chạy 5 bước liên tục không đập bóng"
    ],
    ans: 0,
    expl: "Lên rổ tay phải: Bước 1 chân phải dài giữ bóng -> Bước 2 chân trái ngắn bật vút người lên cao -> Đưa bóng nhẹ nhàng vào rổ."
  },
  {
    q: "Nguyên tắc sơ cứu chấn thương thể thao kín (bong gân, căng cơ) theo chuẩn R.I.C.E bao gồm 4 bước:",
    options: [
      "(Recommended) Nghỉ ngơi (Rest) – Chườm đá (Ice) – Băng ép (Compression) – Nâng cao chi (Elevation)",
      "Xoa bóp dầu nóng – Uống nước đá – Chạy tiếp – Đắp thuốc lào",
      "Kéo giãn cơ mạnh – Băng thật chặt – Chườm khăn ấm – Đi bộ",
      "Bôi cồn 90 độ – Tiêm giảm đau – Chạy bộ chậm – Để thõng tay chân"
    ],
    ans: 0,
    expl: "R.I.C.E (Rest - Ice - Compression - Elevation) là chuẩn y học thể thao quốc tế giúp giảm sưng đau và tránh xuất huyết nội."
  }
];

module.exports = gdtc8Exam;
