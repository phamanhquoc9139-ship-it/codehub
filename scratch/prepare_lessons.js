const fs = require('fs');

const raw = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_prompt_gdtc8.txt', 'utf8');

// Phân tách các phần và các bài học
// Danh sách 25 bài học cụ thể
const lessonsData = [
  // --- PHẦN I: KIẾN THỨC CHUNG ---
  {
    partId: 'KTC',
    partName: 'Phần I. Kiến thức chung',
    topicId: 'dinh-duong',
    topicTitle: 'Chủ đề. Sử dụng chế độ dinh dưỡng thích hợp trong luyện tập TDTT',
    id: 'dd-1',
    num: '1',
    title: 'Vai trò của dinh dưỡng trong luyện tập thể dục thể thao',
    desc: 'Cung cấp năng lượng, xây dựng cơ bắp, hỗ trợ trao đổi chất và phục hồi thể lực sau vận động.',
    keyPoints: [
      'Dinh dưỡng cung cấp năng lượng để cơ thể thực hiện các hoạt động hàng ngày và vận động thể thao.',
      'Dinh dưỡng tham gia cấu tạo, phát triển và sửa chữa các tế bào, mô cơ bị tổn thương sau các bài tập căng thẳng.',
      'Tham gia điều hòa các quá trình trao đổi chất, hệ miễn dịch và duy trì cân bằng nội môi.',
      'Dinh dưỡng hợp lí kết hợp tập luyện giúp kiểm soát cân nặng, phát triển chiều cao và nâng cao thành tích thể thao.'
    ],
    drills: [
      'Ghi nhật kí dinh dưỡng trong 3 ngày tập luyện liên tiếp để tự theo dõi lượng thức ăn nạp vào.',
      'Đối chiếu tháp dinh dưỡng hợp lí để nhận biết nhóm thực phẩm còn thiếu trong bữa ăn gia đình.'
    ],
    errors: [
      'Nhịn ăn sáng trước khi tập thể dục buổi sáng: Gây hạ đường huyết, hoa mắt, chóng mặt và ngất xỉu.',
      'Ăn quá no ngay sát giờ tập: Gây đầy bụng, tức dạ dày, buồn nôn và giảm khả năng hô hấp.'
    ],
    rules: 'Nên ăn nhẹ cách giờ tập ít nhất 60-90 phút; bữa ăn chính đầy đủ cách giờ tập 2-3 tiếng.',
    svgType: 'nutrition_roles'
  },
  {
    partId: 'KTC',
    partName: 'Phần I. Kiến thức chung',
    topicId: 'dinh-duong',
    topicTitle: 'Chủ đề. Sử dụng chế độ dinh dưỡng thích hợp trong luyện tập TDTT',
    id: 'dd-2',
    num: '2',
    title: 'Các nhóm chất dinh dưỡng và tỉ lệ khẩu phần cân đối',
    desc: 'Carbohydrate (56-68%), Lipid (20-30%), Protein (12-14%), Vitamin, chất khoáng và nước.',
    keyPoints: [
      'Carbohydrate (Tinh bột, đường): Chiếm 56% - 68% tổng năng lượng khẩu phần. Là nguồn năng lượng chính và nhanh nhất cho cơ bắp.',
      'Lipid (Chất béo): Chiếm 20% - 30% tổng năng lượng. Cung cấp năng lượng dự trữ, dung môi hòa tan vitamin A, D, E, K.',
      'Protein (Chất đạm): Chiếm 12% - 14% tổng năng lượng. Xây dựng khối cơ, phục hồi mô tổn thương và hình thành kháng thể.',
      'Vitamin và khoáng chất: Điều hòa trao đổi chất, hỗ trợ co cơ và tăng mật độ xương (Canxi, Sắt, Kẽm, Vitamin C, nhóm B).'
    ],
    drills: [
      'Phân loại các thực phẩm quen thuộc (cơm, khoai, thịt bò, trứng, dầu mè, rau bina) vào 4 nhóm chất chính.',
      'Lập bảng phân bổ calo 3 bữa ăn: Sáng (30%) – Trưa (40-45%) – Tối (25-30%).'
    ],
    errors: [
      'Cắt bỏ hoàn toàn tinh bột (Carbs): Làm cơ thể kiệt sức nhanh, suy giảm sự tập trung và giảm hiệu suất vận động.',
      'Lạm dụng thực phẩm bổ sung, thức uống tăng lực thay thế thực phẩm tươi sống tự nhiên.'
    ],
    rules: 'Uống đủ 1.5 - 2 lít nước mỗi ngày; tăng lượng nước trong những ngày tập luyện thời tiết nóng bức.',
    svgType: 'nutrition_pyramid'
  },
  {
    partId: 'KTC',
    partName: 'Phần I. Kiến thức chung',
    topicId: 'dinh-duong',
    topicTitle: 'Chủ đề. Sử dụng chế độ dinh dưỡng thích hợp trong luyện tập TDTT',
    id: 'dd-3',
    num: '3',
    title: 'Chế độ ăn uống và quy tắc bù nước trước, trong và sau tập',
    desc: 'Bổ sung nước từng ngụm nhỏ, thời điểm ăn uống khoa học giúp tối ưu hóa sức bền và phục hồi.',
    keyPoints: [
      'Trước khi tập (20-30 phút): Uống 150 – 250 ml nước lọc từng ngụm nhỏ; ăn nhẹ bằng chuối hoặc bánh mì nhỏ nếu cần.',
      'Trong khi tập: Mỗi 15 – 20 phút uống 100 – 150 ml nước mát, chia ngụm nhỏ, không uống ừng ực dồn dập.',
      'Sau khi tập (trong vòng 30-45 phút): Uống bù nước theo lượng mồ hôi mất; bổ sung đạm và carbs để tái tạo glycogen cơ bắp.',
      'Vệ sinh an toàn thực phẩm: Ăn chín, uống sôi, không ăn đồ ăn ôi thiu hoặc đồ ăn vặt không rõ nguồn gốc trước cổng trường.'
    ],
    drills: [
      'Thực hành kĩ thuật uống nước đúng cách khi nghỉ giải lao giữa các hiệp tập thể thao.',
      'Tự chuẩn bị bình nước cá nhân mang theo mỗi buổi học thể dục.'
    ],
    errors: [
      'Uống nước đá quá lạnh khi vừa chạy xong: Gây co thắt mạch máu dạ dày, viêm họng và sốc nhiệt.',
      'Để cơ thể thật khát mới uống nước: Cơn khát xuất hiện là dấu hiệu cơ thể đã bị mất nước từ 1-2% trọng lượng.'
    ],
    rules: 'Tránh dùng nước ngọt có ga, nước tăng lực chứa nhiều caffeine trước và sau khi vận động.',
    svgType: 'hydration_rules'
  },
  {
    partId: 'KTC',
    partName: 'Phần I. Kiến thức chung',
    topicId: 'dinh-duong',
    topicTitle: 'Chủ đề. Sử dụng chế độ dinh dưỡng thích hợp trong luyện tập TDTT',
    id: 'dd-4',
    num: '4',
    title: 'Nhu cầu dinh dưỡng theo các hình thức vận động thể lực',
    desc: 'Điều chỉnh khẩu phần theo đặc thù môn thể thao tốc độ, sức bền hay phối hợp khéo léo.',
    keyPoints: [
      'Môn tốc độ và sức mạnh (Chạy ngắn 100m, Nhảy cao): Ưu tiên tăng lượng Protein để phát triển cơ bắp nổ và Carbs phức để nạp năng lượng nhanh.',
      'Môn sức bền (Chạy cự li trung bình, Bơi lội): Cần tỉ lệ Carbohydrate cao (65-70%) để dự trữ glycogen dồi dào cho cơ thể chạy đường dài.',
      'Môn thể thao bóng và phối hợp (Bóng đá, Bóng rổ, Cầu lông): Cân đối Carbs, Protein và đặc biệt chú trọng bù điện giải (Natri, Kali) do ra nhiều mồ hôi.',
      'Học sinh lứa tuổi 13-14 (lớp 8): Cần đủ năng lượng cho quá trình dậy thì, phát triển xương và cơ quan nội tạng.'
    ],
    drills: [
      'Lập thực đơn 1 ngày phù hợp với bản thân khi chuẩn bị thi đấu giải điền kinh cấp trường.',
      'So sánh khẩu phần ăn của vận động viên chạy marathon và vận động viên cử tạ/chạy nước rút.'
    ],
    errors: [
      'Áp dụng chung một thực đơn cứng nhắc cho mọi môn thể thao và mọi thể trạng.',
      'Bỏ qua các bữa phụ nhẹ trước các buổi tập nặng vào buổi chiều.'
    ],
    rules: 'Lắng nghe cơ thể; điều chỉnh năng lượng nạp vào tương ứng với khối lượng bài tập trong ngày.',
    svgType: 'nutrition_sports'
  },

  // --- PHẦN II: VẬN ĐỘNG CƠ BẢN ---
  // CHỦ ĐỀ 1: CHẠY CỰ LI NGẮN (100 M)
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'chay-ngan-100m',
    topicTitle: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
    id: 'chay-1',
    num: '1',
    title: 'Kĩ thuật xuất phát thấp và chạy lao sau xuất phát',
    desc: '3 khẩu lệnh xuất phát thấp (Vào chỗ! - Sẵn sàng! - Chạy!) và góc chạy lao 45 độ.',
    keyPoints: [
      'Khẩu lệnh "Vào chỗ!": Đi tới vạch, đặt chân thuận phía trước (cách vạch khoảng 1 - 1.5 bàn chân), chân sau cách chân trước khoảng 1 cẳng chân; hai tay chống sau vạch rộng bằng vai, mắt nhìn xuống.',
      'Khẩu lệnh "Sẵn sàng!": Từ từ nâng mông cao hơn vai (10-15cm), dồn trọng tâm về trước lên hai tay và chân trước, hít sâu nín thở tập trung cao độ.',
      'Khẩu lệnh "Chạy!" (hoặc tiếng súng): Đạp mạnh hai chân đẩy thân người lao vút ra trước, tay đối diện chân đánh mạnh ra trước, chân sau vung nhanh về trước.',
      'Chạy lao sau xuất phát: Duy trì thân người nghiêng về trước góc 45°-50°, tăng dần độ dài bước và nâng dần thân người sau 15-20m.'
    ],
    drills: [
      'Tập tư thế xuất phát thấp không bàn đạp theo khẩu lệnh của giáo viên (5-7 lần).',
      'Xuất phát thấp chạy lao 10m - 15m - 20m duy trì độ nghiêng thân người.',
      'Bật cóc 3-5 bước và chạy lao biến tốc.'
    ],
    errors: [
      'Nâng người thẳng dậy quá sớm ngay bước đầu tiên sau xuất phát (làm mất lực đẩy ngang).',
      'Đặt tay đè lên vạch hoặc vượt qua vạch xuất phát (phạm luật thi đấu).'
    ],
    rules: 'Phạm quy xuất phát (False start): Vận động viên tự ý rời vị trí trước tiếng súng sẽ bị truất quyền thi đấu.',
    svgType: 'sprint_start_low'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'chay-ngan-100m',
    topicTitle: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
    id: 'chay-2',
    num: '2',
    title: 'Kĩ thuật phối hợp chạy lao sau xuất phát và chạy giữa quãng',
    desc: 'Chuyển tiếp nhịp nhàng từ độ nghiêng chạy lao sang tư thế chạy giữa quãng đạt tốc độ cực đại.',
    keyPoints: [
      'Giai đoạn chuyển tiếp: Thân người nâng dần một cách tự nhiên từ nghiêng 45° lên nghiêng nhẹ 80°-85°, không thay đổi góc độ đột ngột.',
      'Chạy giữa quãng: Thân người hơi ngả về trước (khoảng 80°-85°), mắt nhìn thẳng phía trước 15-20m, cơ mặt và vai thả lỏng.',
      'Kĩ thuật bước chạy: Đạp sau mạnh, nhanh và chủ động; chân lăng nâng đùi cao vuông góc ra trước; tiếp đất bằng nửa trước bàn chân.',
      'Đánh tay: Gập khuỷu khoảng 90°, đánh so le nhịp nhàng theo nhịp chân ra trước - về sau dọc theo hướng chạy.'
    ],
    drills: [
      'Chạy tăng tốc độ 30m - 40m từ tư thế đứng cao và xuất phát thấp.',
      'Chạy đạp sau 20m kết hợp nâng cao đùi để hoàn thiện góc đạp sau.',
      'Chạy giữa quãng 50m duy trì tốc độ tối đa theo làn chạy riêng.'
    ],
    errors: [
      'Ngửa thân người ra sau khi chạy giữa quãng (làm hãm tốc độ và giảm độ dài bước chạy).',
      'Đánh tay vung ngang qua ngực làm thân người lắc lư, mất phương hướng.'
    ],
    rules: 'Chạy đúng làn chạy (ô chạy) quy định; bước chân giẫm vạch biên phân làn bên cạnh sẽ bị hủy kết quả.',
    svgType: 'sprint_transition'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'chay-ngan-100m',
    topicTitle: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
    id: 'chay-3',
    num: '3',
    title: 'Phối hợp các giai đoạn chạy cự li ngắn và kĩ thuật về đích',
    desc: 'Kết hợp 4 giai đoạn hoàn chỉnh: Xuất phát - Chạy lao - Chạy giữa quãng - Về đích đánh ngực.',
    keyPoints: [
      'Kĩ thuật về đích: Duy trì tốc độ cực đại qua vạch đích, tuyệt đối không giảm tốc độ khi còn cách đích 5-10m.',
      'Động tác đánh đích: Ở bước chạy cuối cùng, chủ động gập thân trên ra trước (đánh ngực) hoặc nghiêng vai chạm dây đích.',
      'Sau khi qua đích: Tiếp tục chạy giảm tốc dần thêm 15-20m theo đường thẳng trong làn của mình rồi mới dừng lại, không dừng đột ngột.',
      'Phối hợp 100m hoàn chỉnh: Xuất phát nổ -> Chạy lao 20m -> Chạy giữa quãng 60m -> Tăng tốc rút đích 20m cuối.'
    ],
    drills: [
      'Tập mô phỏng động tác gập thân đánh ngực và nghiêng vai chạm dây đích tại chỗ.',
      'Chạy tốc độ cao 20m kết hợp đánh đích chính xác tại vạch.',
      'Chạy toàn bộ cự li 100m có bấm giờ thi đua theo nhóm.'
    ],
    errors: [
      'Nhảy vọt qua vạch đích bằng hai chân (rất nguy hiểm, dễ ngã chấn thương và làm chậm thành tích).',
      'Dừng lại đột ngột ngay sau khi chạm vạch đích gây ngã cọ xát mặt đường.'
    ],
    rules: 'Thành tích được tính khi có bất kì bộ phận nào của thân trên (ngực, vai - không tính đầu, cổ, tay, chân) chạm mặt phẳng đích.',
    svgType: 'sprint_finish'
  },

  // CHỦ ĐỀ 2: NHẢY CAO KIỂU BƯỚC QUA
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'nhay-cao-buoc-qua',
    topicTitle: 'Chủ đề 2. Nhảy cao kiểu bước qua',
    id: 'nhaycao-1',
    num: '1',
    title: 'Kĩ thuật giậm nhảy đá lăng trong nhảy cao bước qua',
    desc: 'Tư thế đặt chân giậm gót chuyển mũi, chân lăng đá mạnh tạo lực bật hướng lên cao.',
    keyPoints: [
      'Xác định chân giậm: Chân giậm nhảy là chân thuận (khỏe hơn), chân ở phía xa xà so với hướng chạy đà.',
      'Động tác đặt chân giậm: Đặt chân nhanh, dứt khoát bằng gót chân rồi chuyển nhanh sang cả bàn, hơi khuỵu gối để tạo thế bật nảy.',
      'Động tác đá lăng: Chân lăng (gần xà) vung mạnh từ sau ra trước - lên trên theo hướng hơi chếch vào xà, đùi nâng cao hơn thắt lưng.',
      'Phối hợp tay: Hai tay đánh mạnh từ sau ra trước - lên trên, dừng ngang tầm vai để hỗ trợ lực nâng trọng tâm cơ thể.'
    ],
    drills: [
      'Tại chỗ tập đá lăng chân kết hợp đánh tay (10-15 lần mỗi chân).',
      'Đi 1 bước - 3 bước đặt chân giậm nhảy đá lăng chạm vật trên cao.',
      'Bật nhảy bằng chân giậm lên bục gỗ hoặc nệm.'
    ],
    errors: [
      'Đá chân lăng thấp, không dùng lực đùi khiến cơ thể không đạt được độ cao mong muốn.',
      'Giậm nhảy bằng mũi bàn chân ngay từ đầu khiến lực bật yếu và dễ lật cổ chân.'
    ],
    rules: 'Quy định luật nhảy cao: Vận động viên bắt buộc phải giậm nhảy bằng 1 chân (giậm 2 chân là phạm quy).'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'nhay-cao-buoc-qua',
    topicTitle: 'Chủ đề 2. Nhảy cao kiểu bước qua',
    id: 'nhaycao-2',
    num: '2',
    title: 'Kĩ thuật chạy đà kết hợp với giậm nhảy',
    desc: 'Góc chạy đà chếch 25° – 40°, đo đà chuẩn xác và nhịp điệu 3 bước đà cuối.',
    keyPoints: [
      'Góc đà: Hướng chạy đà chếch một góc khoảng 25° đến 40° so với mặt phẳng thanh xà.',
      'Đo cự li đà: Thường từ 5 đến 9 bước đà (1 bước chạy đà = 2 bước đi thường).',
      'Nhịp điệu chạy đà: Tăng dần tốc độ, thân người hơi ngả về trước; các bước chạy đàn hồi trên nửa trước bàn chân.',
      'Ba bước đà cuối: Bước 1 dài nhanh -> Bước 2 dài nhất hạ thấp trọng tâm -> Bước 3 đặt chân giậm nhanh và chuẩn xác vào điểm giậm nhảy.'
    ],
    drills: [
      'Đo đà và chỉnh đà trên sân tập nhiều lần để cố định điểm xuất phát đà.',
      'Chạy đà 3 bước - 5 bước giậm nhảy đá lăng không có xà.',
      'Chạy đà 5 bước giậm nhảy đá chạm dây cao su treo ngang.'
    ],
    errors: [
      'Chạy đà bị giật cục, giảm tốc độ ở những bước cuối trước khi giậm nhảy.',
      'Góc chạy đà quá lớn (trên 60°) dẫn đến cơ thể lao thẳng vào xà và xô đổ xà.'
    ],
    rules: 'Điểm giậm nhảy chuẩn cách mặt phẳng thanh xà khoảng 1/3 chiều dài cánh tay (tầm 60 - 80cm).'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'nhay-cao-buoc-qua',
    topicTitle: 'Chủ đề 2. Nhảy cao kiểu bước qua',
    id: 'nhaycao-3',
    num: '3',
    title: 'Kĩ thuật trên không và rơi xuống cát (đệm)',
    desc: 'Tư thế bước qua xà lần lượt từng chân và khuỵu gối tiếp đất hoãn xung an toàn.',
    keyPoints: [
      'Giai đoạn trên không: Khi chân lăng qua xà, nhanh chóng hạ chân lăng xuống phía bên kia xà, đồng thời nâng cao chân giậm nhảy.',
      'Thân người trên xà: Thân người hơi gập về trước ở trên xà, hai tay giữ thăng bằng tự nhiên tránh chạm xà.',
      'Kĩ thuật bước qua: Chân giậm nâng đùi và xoay nhẹ mũi chân ra ngoài để đưa chân qua xà liền sau chân lăng.',
      'Rơi xuống đệm (tiếp đất): Tiếp đất bằng chân lăng trước (nửa trước bàn chân), khuỵu gối sâu để hoãn xung lực chấn động, chân giậm tiếp đất tiếp theo.'
    ],
    drills: [
      'Tập mô phỏng động tác bước qua xà từ trên bục cao xuống đệm.',
      'Nhảy qua dây chun đàn hồi ở độ cao thấp (60cm - 80cm) chú trọng tiếp đất an toàn.',
      'Tập bài tập khuỵu gối bật nhảy tại chỗ rèn phản xạ hoãn xung cơ đùi.'
    ],
    errors: [
      'Tiếp đất thẳng đơ đầu gối gây chấn thương nặng khớp gối và cột sống.',
      'Để gót chân giậm móc vào xà làm rơi xà khi thân người đã qua.'
    ],
    rules: 'Thanh xà bị rơi khỏi giá đỡ do bất kì tác động nào của cơ thể trong lúc nhảy đều bị tính là lần nhảy hỏng.'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'nhay-cao-buoc-qua',
    topicTitle: 'Chủ đề 2. Nhảy cao kiểu bước qua',
    id: 'nhaycao-4',
    num: '4',
    title: 'Phối hợp các giai đoạn kĩ thuật nhảy cao kiểu bước qua',
    desc: 'Liên kết hoàn chỉnh 4 giai đoạn: Chạy đà -> Giậm nhảy -> Qua xà -> Tiếp đất an toàn.',
    keyPoints: [
      'Tính liên tục: Giữa chạy đà và giậm nhảy phải liên tục, không có khoảng dừng hãm đà.',
      'Điểm rơi của cơ thể: Sau khi qua xà, tiếp đất gọn gàng trong khu vực đệm mút hoặc hố cát xốp mềm.',
      'Kiểm soát tâm lí: Tự tin, tập trung cao độ vào nhịp 3 bước đà cuối và sức bật của chân giậm.',
      'Tự đánh giá: Kiểm tra độ cao xà chinh phục được, tính chuẩn xác của điểm giậm và tư thế tiếp đất.'
    ],
    drills: [
      'Thực hiện toàn bộ kĩ thuật nhảy cao bước qua từ đà 5 - 7 bước qua các mức xà tăng dần (0.9m, 1.0m, 1.1m...).',
      'Thi đấu nội bộ tổ/nhóm tính số lần nhảy qua thành công theo luật điền kinh.'
    ],
    errors: [
      'Thay đổi bước đà khi nâng mức xà cao hơn do tâm lí lo sợ.',
      'Mắt nhắm khi qua xà làm mất kiểm soát điểm tiếp đất.'
    ],
    rules: 'Ở mỗi mức xà, mỗi vận động viên có tối đa 3 lần thử; vượt qua thành công mới được lên mức xà tiếp theo.'
  },

  // CHỦ ĐỀ 3: CHẠY CỰ LI TRUNG BÌNH
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'chay-trung-binh',
    topicTitle: 'Chủ đề 3. Chạy cự li trung bình',
    id: 'chaytb-1',
    num: '1',
    title: 'Bài tập bổ trợ trong kĩ thuật chạy giữa quãng cự li trung bình',
    desc: 'Phối hợp bước chạy đàn hồi, tiết kiệm sức và duy trì nhịp thở khoa học 2 bước hít - 2 bước thở.',
    keyPoints: [
      'Đặc điểm chạy trung bình: Cần phân bổ thể lực đều suốt cự li (500m nữ, 800m - 1500m nam), bước chạy thoải mái, nhẹ nhàng.',
      'Kĩ thuật tiếp đất: Tiếp đất bằng nửa trước bàn chân hoặc mép ngoài bàn chân rồi chuyển sang cả bàn để giảm tải cơ bắp.',
      'Đánh tay: Tay đánh nhẹ nhàng, góc khuỷu mở rộng hơn chạy ngắn (khoảng 100°-110°), hai vai thả lỏng tự nhiên.',
      'Phối hợp nhịp thở: Hít vào sâu bằng mũi và miệng qua 2-3 bước chạy, thở ra chủ động qua 2-3 bước chạy tiếp theo.'
    ],
    drills: [
      'Chạy bước nhỏ, chạy nâng cao đùi nhẹ nhàng 30m - 40m kết hợp hít thở sâu.',
      'Chạy biến tốc 100m chậm xen kẽ 50m nhanh trên sân vận động.',
      'Tập thở sâu tại chỗ: 2 nhịp hít vào căng lồng ngực - 2 nhịp thở ra ép hết khí cặn.'
    ],
    errors: [
      'Nín thở hoặc chỉ thở nông bằng miệng khiến cơ bắp nhanh chóng bị thiếu oxy và tích tụ axit lactic.',
      'Gồng cứng cơ vai và cánh tay gây tốn hao năng lượng vô ích.'
    ],
    rules: 'Chạy cự li trung bình thi đấu theo cự li từ 800m trở lên, sau khi qua vạch quy định được phép chuyển vào làn trong cùng.'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'chay-trung-binh',
    topicTitle: 'Chủ đề 3. Chạy cự li trung bình',
    id: 'chaytb-2',
    num: '2',
    title: 'Kĩ thuật xuất phát cao và tăng tốc sau xuất phát',
    desc: 'Hai khẩu lệnh xuất phát cao ("Vào chỗ!" và "Chạy!"), tăng tốc vừa phải không bung hết sức.',
    keyPoints: [
      'Khẩu lệnh "Vào chỗ!": Đứng sau vạch xuất phát, chân thuận đặt sát vạch, chân kia lùi sau 1 bước, khuỵu gối dồn trọng tâm về chân trước.',
      'Tư thế thân trên: Thân trên hơi ngả về trước, hai tay co tự nhiên so le với chân (chân nào tay ngược lại).',
      'Khẩu lệnh "Chạy!": Đạp mạnh chân trước lao người ra trước, nhanh chóng bắt nhịp bước chạy.',
      'Tăng tốc sau xuất phát: Tăng tốc vừa phải để chiếm vị trí chạy thuận lợi, sau đó nhanh chóng đưa cơ thể về tốc độ ổn định của chạy giữa quãng.'
    ],
    drills: [
      'Luyện tập tư thế xuất phát cao theo tín hiệu còi (5-8 lần).',
      'Xuất phát cao chạy tăng tốc 20-30m rồi chuyển sang chạy đều nhịp nhàng.',
      'Xuất phát theo nhóm 4-6 học sinh rèn kĩ năng tránh va chạm khi vào đường cong.'
    ],
    errors: [
      'Dồn hết sức chạy nước rút ngay sau xuất phát dẫn đến kiệt sức ở nửa sau đường chạy.',
      'Đứng thẳng đơ chân khi có lệnh "Vào chỗ!" làm giảm sức rướn xuất phát.'
    ],
    rules: 'Xuất phát cao chỉ có 2 khẩu lệnh: "Vào chỗ!" và "Chạy!" (không có khẩu lệnh "Sẵn sàng!").'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'chay-trung-binh',
    topicTitle: 'Chủ đề 3. Chạy cự li trung bình',
    id: 'chaytb-3',
    num: '3',
    title: 'Phối hợp các giai đoạn chạy trung bình và vượt qua "cực điểm"',
    desc: 'Chiến thuật phân bổ sức bền, hiện tượng cực điểm và cách chuyển sang hô hấp lần hai.',
    keyPoints: [
      'Hiện tượng "Cực điểm": Thường xuất hiện ở 1/3 đến 1/2 quãng đường: cảm giác tức ngực, khó thở, chân nặng nề, muốn bỏ cuộc.',
      'Khắc phục cực điểm: Cần ý chí kiên trì, duy trì nhịp chạy chậm lại một chút, tích cực hít thở sâu, cơ thể sẽ bước vào trạng thái "hô hấp lần hai" dễ chịu.',
      'Chạy đường vòng (vào cua): Thân người hơi nghiêng vào phía trong tâm đường cong, bàn chân ngoài xoay nhẹ vào trong.',
      'Rút đích: Khi còn cách đích 100m - 150m, dồn toàn bộ sức lực còn lại tăng tần số bước và sức đánh tay để lao qua vạch đích.'
    ],
    drills: [
      'Chạy bền cự li 500m (nữ) và 800m (nam) duy trì tốc độ đều theo nhóm sức khỏe.',
      'Chạy lặp lại đoạn ngắn 150m - 200m có bấm giờ theo dõi nhịp tim.',
      'Thực hành các động tác thả lỏng hồi tĩnh: đi bộ hít thở sâu, rũ tay chân sau khi chạy xong.'
    ],
    errors: [
      'Ngồi bệt hoặc nằm ngay xuống đất sau khi vừa chạy bền về đích (rất nguy hiểm, dễ gây thiếu máu não tụt huyết áp).',
      'Bỏ cuộc ngay khi vừa chớm thấy mệt mỏi ở giai đoạn cực điểm.'
    ],
    rules: 'Sau khi qua đích, bắt buộc phải đi bộ chậm hít thở sâu 3-5 phút cho nhịp tim và huyết áp trở lại bình thường.'
  },

  // CHỦ ĐỀ 4: BÀI TẬP THỂ DỤC NHỊP ĐIỆU
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'the-duc-nhip-dieu',
    topicTitle: 'Chủ đề 4. Bài tập thể dục',
    id: 'td-1',
    num: '1',
    title: 'Bài thể dục nhịp điệu (Phần 1: Chạy tại chỗ, tay ngực, vươn người, bật tách chụm)',
    desc: '4 động tác đầu tiên phát triển độ linh hoạt ngực, vai và sức bật cổ chân theo nhịp nhạc.',
    keyPoints: [
      'Động tác 1 (Chạy tại chỗ): Chạy êm ái trên nửa trước bàn chân theo nhịp 2/4 hoặc 4/4, tay co tự nhiên ngang hông.',
      'Động tác 2 (Tay ngực): Bước chân sang ngang, hai tay co trước ngực mở rộng khuỷu tay sang hai bên, căng ngực, hít vào sâu.',
      'Động tác 3 (Vươn người): Chân bước rộng bằng vai, hai tay vươn chếch chữ V lên cao, mắt nhìn theo tay, kéo giãn cột sống.',
      'Động tác 4 (Bật tách chụm chân): Nhún gối bật nhảy tách hai chân sang hai bên rộng hơn vai, sau đó bật nhảy chụm chân lại nhịp nhàng.'
    ],
    drills: [
      'Tập từng động tác riêng lẻ đếm nhịp chậm (nhịp 1-2-3-4-5-6-7-8).',
      'Ghép nối liên hoàn 4 động tác theo nhạc điệu sôi nổi.',
      'Luyện tập theo cặp hoặc đội hình hàng ngang kiểm tra tư thế cho nhau.'
    ],
    errors: [
      'Chuyển động giật cục, không đúng nhịp phách của âm nhạc.',
      'Lưng gù và gập cổ khi thực hiện động tác vươn người làm hạn chế dung tích phổi.'
    ],
    rules: 'Thực hiện động tác với biên độ rộng, dứt khoát và giữ nụ cười tươi tắn thể hiện tinh thần thể thao.'
  },
  {
    partId: 'VDCB',
    partName: 'Phần II. Vận động cơ bản',
    topicId: 'the-duc-nhip-dieu',
    topicTitle: 'Chủ đề 4. Bài tập thể dục',
    id: 'td-2',
    num: '2',
    title: 'Bài thể dục nhịp điệu (Phần 2: Nghiêng lườn, bật nhảy co gối, di chuyển chéo, bật nhảy–tay cao)',
    desc: '4 động tác tiếp theo hoàn thiện bài thể dục liên hoàn 8 động tác nhịp điệu.',
    keyPoints: [
      'Động tác 5 (Nghiêng lườn): Chân bước rộng, một tay chống hông, tay kia vươn cao ép nghiêng lườn sâu sang bên, kéo căng cơ liên sườn.',
      'Động tác 6 (Bật nhảy co gối): Bật nhảy chân trụ đồng thời co vuông góc đầu gối chân kia lên cao ngang hông, hai tay ép xuống chạm gối.',
      'Động tác 7 (Di chuyển chéo): Bước chéo chân về trước - sang ngang theo hình chữ X, kết hợp lắc hông và đánh tay uyển chuyển.',
      'Động tác 8 (Bật nhảy - tay cao): Bật nhảy thanh thoát lên cao, vỗ hai tay trên đỉnh đầu, tiếp đất êm bằng mũi bàn chân khuỵu gối.'
    ],
    drills: [
      'Tập ghép toàn bộ 8 động tác từ động tác 1 đến động tác 8 thành bài liên hoàn hoàn chỉnh.',
      'Tập đồng diễn bài thể dục nhịp điệu theo đội hình nhóm 6-8 học sinh.',
      'Biểu diễn thể dục nhịp điệu trên nền nhạc tự chọn phù hợp lứa tuổi học sinh.'
    ],
    errors: [
      'Tiếp đất nặng nề bằng cả gót chân khi bật nhảy làm rung chấn cơ thể.',
      'Quên thứ tự các động tác trong chuỗi liên hoàn.'
    ],
    rules: 'Yêu cầu tính đồng đều, nhịp điệu chuẩn xác, phối hợp tay chân ăn khớp và đội hình ngay ngắn.'
  },

  // --- PHẦN III: THỂ THAO TỰ CHỌN ---
  // CHỦ ĐỀ 1: CẦU LÔNG
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'cau-long',
    topicTitle: 'Chủ đề 1. Cầu lông',
    id: 'caulong-1',
    num: '1',
    title: 'Kĩ thuật di chuyển lùi đánh cầu cao tay bên phải',
    desc: 'Bước lùi chữ V hoặc bước chéo, đón cầu trên cao bên phải và đưa cầu sâu về cuối sân đối phương.',
    keyPoints: [
      'Tư thế chuẩn bị: Đứng ở trung tâm sân, hai chân rộng bằng vai, gối hơi khuỵu, vợt nâng ngang tầm ngực, mắt theo dõi cầu.',
      'Di chuyển lùi: Khi đối phương đánh cầu bổng ra sau, dùng bước trượt lùi hoặc bước chéo chân lùi nhanh về góc phải cuối sân.',
      'Tư thế đón cầu: Chân phải ở phía sau chịu lực, vai xoay nghiêng với lưới, mở vợt ra sau gáy, tay trái giơ cao định hướng cầu.',
      'Động tác đánh cầu: Vung vợt từ sau ra trước - lên trên, đánh cầu ở điểm cao nhất phía trước trán, gập mạnh cổ tay đưa cầu bay bổng sâu cuối sân.'
    ],
    drills: [
      'Tập không cầu: Di chuyển lùi 3 bước vung vợt đánh cầu cao tay rồi trở về vị trí trung tâm (15-20 lần).',
      'Tập có cầu: Bạn tung cầu bổng về cuối sân, thực hiện di chuyển lùi đánh cầu bổng thuận tay.',
      'Đấu tập cầu lông cự li nửa sân tập trung vào các đường cầu sâu.'
    ],
    errors: [
      'Lùi không đủ sâu khiến điểm đón cầu bị lùi ra sau đầu, làm đường cầu bị với và rúc lưới.',
      'Cầm vợt quá chặt làm cổ tay bị cứng, không phát huy được lực gập cổ tay.'
    ],
    rules: 'Quả cầu được tính là trong sân nếu điểm tiếp xúc đầu tiên chạm vào bất kì phần nào của vạch biên hoặc vạch đáy.'
  },
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'cau-long',
    topicTitle: 'Chủ đề 1. Cầu lông',
    id: 'caulong-2',
    num: '2',
    title: 'Kĩ thuật đập cầu thuận tay (Smash)',
    desc: 'Cú đánh tấn công uy lực nhất trong cầu lông: đón cầu ở điểm cao nhất trước trán, gập cổ tay cắm cầu xuống sân đối phương.',
    keyPoints: [
      'Mục đích: Là đòn tấn công chủ động tạo quỹ đạo cầu bay nhanh, mạnh và cắm thẳng xuống phần sân đối phương để ghi điểm trực tiếp.',
      'Tư thế chuẩn bị: Giống đánh cầu cao tay nhưng trọng tâm dồn mạnh hơn về chân sau, thân người hơi ngửa ra sau tạo thế căng như cánh cung.',
      'Điểm tiếp xúc: Đón cầu ở điểm cao nhất và chếch về phía trước trán một tầm với vợt.',
      'Phát lực đập cầu: Đạp mạnh chân sau, xoay hông, vung vợt tốc độ cao từ sau ra trước, gập cổ tay tối đa kết hợp gập thân trên để ép cầu cắm xuống.'
    ],
    drills: [
      'Tập đập cầu treo cố định trên dây để rèn cảm giác điểm chạm cầu trên cao.',
      'Bạn đứng bên kia lưới giao cầu bổng cao sâu, thực hiện đập cầu cắm về 2 góc biên.',
      'Phối hợp di chuyển 2 bước bật nhảy đập cầu thuận tay.'
    ],
    errors: [
      'Đập cầu khi cầu đã rơi xuống quá thấp khiến góc đập bị ngang hoặc cầu đánh vào lưới.',
      'Không dùng lực gập cổ tay mà chỉ dùng lực bả vai làm đường cầu đi chậm và tốn sức.'
    ],
    rules: 'Vợt hoặc bất kì bộ phận cơ thể nào chạm lưới trong lúc thực hiện cú đập đều bị phạt lỗi (mất điểm).'
  },
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'cau-long',
    topicTitle: 'Chủ đề 1. Cầu lông',
    id: 'caulong-3',
    num: '3',
    title: 'Kĩ thuật di chuyển ngang đập cầu thuận tay',
    desc: 'Di chuyển bước trượt ngang đón những quả cầu tạt ngang nách hoặc góc biên để đập cầu tấn công.',
    keyPoints: [
      'Tình huống áp dụng: Đối phương tạt cầu hoặc nâng cầu sang hai biên sân ở tầm trung bình - cao.',
      'Kĩ thuật bước ngang: Dùng bước trượt ngang hoặc bước chéo nhanh chóng tiếp cận vị trí cầu rơi bên phải.',
      'Thăng bằng cơ thể: Dừng chân trụ vững chắc, xoay vai và đưa mặt vợt vào tư thế đón đánh cầu.',
      'Hồi vị: Ngay sau khi đập cầu xong, lập tức dùng bước đệm quay nhanh trở lại vị trí trung tâm sân sẵn sàng cho quả tiếp theo.'
    ],
    drills: [
      'Di chuyển ngang sang phải đập cầu -> trở về trung tâm -> di chuyển ngang sang trái (10 lượt liên tục).',
      'Đấu tập kiểm soát 2 góc sân bằng kĩ thuật đập cầu di chuyển ngang.',
      'Trò chơi đối kháng phản xạ di chuyển theo tín hiệu chỉ tay của giáo viên.'
    ],
    errors: [
      'Di chuyển chậm chạp, với người đánh cầu khi chân chưa kịp dừng vững vàng.',
      'Đứng nhìn quả cầu sau khi đập mà không chịu di chuyển hồi vị về trung tâm sân.'
    ],
    rules: 'Trong thi đấu đơn, sân thi đấu giới hạn ở vạch biên trong và vạch đáy ngoài.'
  },

  // CHỦ ĐỀ 2: BÓNG ĐÁ
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'bong-da',
    topicTitle: 'Chủ đề 2. Bóng đá',
    id: 'bongda-1',
    num: '1',
    title: 'Kĩ thuật đá bóng bằng mu ngoài bàn chân và đánh đầu bằng trán giữa',
    desc: 'Kĩ thuật sút bóng tạo đường cong xoáy (Trivela) và kĩ thuật bật nhảy đánh đầu bằng xương trán an toàn.',
    keyPoints: [
      'Đá bóng bằng mu ngoài: Chạy đà chếch 15°-20°, chân trụ đặt cách bóng 20-25cm ngang mép sau bóng; chân sút vung mạnh từ sau ra trước, xoay mũi chân vào trong, dùng mu ngoài tiếp xúc phần dưới bóng tạo độ xoáy lượn vòng.',
      'Đánh đầu bằng trán giữa: Mắt quan sát quỹ đạo bóng bay, hai chân mở rộng tạo đà, gập gối bật nhảy; thân ngả nhẹ ra sau rồi gập mạnh ra trước, dùng xương trán giữa đập mạnh vào tâm bóng.',
      'Đặc điểm vùng trán: Xương trán giữa phẳng và dày nhất hộp sọ, giúp bóng bay căng chuẩn xác và không gây choáng váng đầu.',
      'An toàn khi đánh đầu: Luôn giữ mắt mở quan sát bóng, ngậm chặt miệng và siết cứng cơ cổ khi tiếp xúc bóng.'
    ],
    drills: [
      'Đá bóng tĩnh bằng mu ngoài vào tường cự li 5m - 8m (20 lần chân thuận, 10 lần chân không thuận).',
      'Tung bóng lên cao tự đánh đầu hoặc bạn tung bóng nhẹ cho đánh đầu trán giữa vào lưới.',
      'Phối hợp chuyền bóng bằng mu ngoài và di chuyển đón bóng.'
    ],
    errors: [
      'Đánh đầu bằng đỉnh đầu (thóp đầu) gây đau rát, chấn động não và bóng bay bổng không trúng đích.',
      'Nhắm tịt mắt khi chuẩn bị đánh đầu khiến tiếp xúc lệch tâm bóng.'
    ],
    rules: 'Nghiêm cấm dùng tay chơi bóng (Handball) trừ thủ môn trong khu vực cấm địa của đội mình.'
  },
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'bong-da',
    topicTitle: 'Chủ đề 2. Bóng đá',
    id: 'bongda-2',
    num: '2',
    title: 'Kĩ thuật dừng bóng bằng đùi và lòng bàn chân',
    desc: 'Kĩ thuật hãm bóng trên không bằng đùi và khống chế bóng sệt lăn sát đất bằng lòng bàn chân.',
    keyPoints: [
      'Dừng bóng bằng đùi (bóng bổng ngang hông): Chân trụ hơi khuỵu, nâng đùi chân dừng bóng lên vuông góc với thân người; khi bóng chạm vào 1/3 đùi ngoài, nhanh chóng hạ đùi xuống hoãn xung để bóng rơi nhẹ sát chân.',
      'Dừng bóng bằng lòng bàn chân (bóng sệt): Mở mũi chân ra ngoài 90°, đưa lòng bàn chân ra đón bóng; khi bóng vừa chạm lòng, hơi rút nhẹ chân về sau để triệt tiêu lực lăn của bóng.',
      'Cảm giác bóng êm: Động tác hoãn xung nhịp nhàng quyết định bóng nằm ngoan ngoãn trong tầm khống chế, không bị nảy ra xa.',
      'Tư thế tiếp theo: Sau khi hãm bóng, cơ thể sẵn sàng cho đường chuyền, dẫn bóng hoặc dứt điểm ngay lập tức.'
    ],
    drills: [
      'Tự tung bóng lên cao ngang hông rồi dùng đùi hãm bóng rơi êm xuống đất.',
      'Hai bạn đứng cách nhau 10m luân phiên chuyền sệt và dừng bóng bằng lòng bàn chân.',
      'Chuyền bóng bổng cự li 15m kết hợp hãm bóng bằng đùi rồi chuyền trả lại bằng mu trong.'
    ],
    errors: [
      'Đưa đùi lên quá cứng đờ làm bóng nảy văng ra xa vào chân đối phương.',
      'Dùng đế giày đạp lên bóng khi bóng lăn nhanh dễ dẫn đến trượt ngã lật cổ chân.'
    ],
    rules: 'Khống chế bóng gọn gàng giúp làm chủ trận đấu và hạn chế tối đa nguy cơ bị đối phương tranh cướp bóng phạm lỗi.'
  },
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'bong-da',
    topicTitle: 'Chủ đề 2. Bóng đá',
    id: 'bongda-3',
    num: '3',
    title: 'Kĩ thuật dẫn bóng bằng mu giữa bàn chân',
    desc: 'Dẫn bóng tốc độ cao trên đường thẳng: chúi mũi chân xuống đất, đẩy bóng nhịp nhàng sau mỗi bước chạy.',
    keyPoints: [
      'Tư thế dẫn bóng: Thân người hơi đổ về trước, mắt linh hoạt vừa quan sát bóng vừa quan sát vị trí đồng đội và đối phương trên sân.',
      'Kĩ thuật chạm bóng: Khi chân bước về trước, cổ chân duỗi thẳng, mũi chân chúc xuống đất; dùng phần mu giữa (nơi buộc dây giày) tiếp xúc vào tâm sau của quả bóng đẩy bóng đi.',
      'Kiểm soát cự li: Mỗi nhịp chạm đẩy bóng đi cách chân khoảng 1 - 1.5m để luôn làm chủ được bóng khi có đối thủ áp sát.',
      'Tốc độ dẫn bóng: Phù hợp cho những pha bứt tốc phản công nhanh trên hành lang cánh hoặc trung lộ khi có khoảng trống rộng.'
    ],
    drills: [
      'Dẫn bóng bằng mu giữa theo đường thẳng 20m - 30m tốc độ tăng dần.',
      'Dẫn bóng luồn cọc tiêu zíc zắc cự li 15m kết hợp mu giữa và lòng bàn chân.',
      'Trò chơi cướp bóng trong vòng tròn 10m rèn kĩ năng che chắn bóng khi dẫn bóng.'
    ],
    errors: [
      'Chỉ chăm chú nhìn vào quả bóng dưới chân mà không ngẩng đầu quan sát tình huống xung quanh.',
      'Đẩy bóng quá xa khỏi tầm chân khiến thủ môn hoặc hậu vệ đối phương dễ dàng lao ra phá bóng.'
    ],
    rules: 'Không được đẩy người, kéo áo hoặc dùng tay cản trở cầu thủ đối phương trong các pha tranh chấp khi dẫn bóng.'
  },

  // CHỦ ĐỀ 3: BÓNG RỔ
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'bong-ro',
    topicTitle: 'Chủ đề 3. Bóng rổ',
    id: 'bongro-1',
    num: '1',
    title: 'Kĩ thuật dẫn bóng trong môn bóng rổ',
    desc: 'Khống chế bóng bằng ngón tay và cổ tay, tư thế hạ thấp trọng tâm và dẫn bóng đổi hướng.',
    keyPoints: [
      'Tư thế cơ bản: Hai chân mở rộng hơn vai, gối khuỵu sâu, lưng thẳng hơi đổ về trước, mắt ngẩng nhìn bao quát sân.',
      'Tiếp xúc bóng: Dùng các phần chai tay của ngón tay và cổ tay mềm dẻo để ấn, đẩy bóng xuống sàn (tuyệt đối không dùng lòng bàn tay tát vào bóng).',
      'Độ cao nảy bóng: Dẫn bóng thông thường bóng nảy ngang thắt lưng; khi bị đối phương áp sát cần hạ thấp trọng tâm, dẫn bóng thấp ngang gối để che chắn.',
      'Tay không dẫn bóng: Giơ ngang co nhẹ phía trước để che chắn, bảo vệ bóng khỏi tầm với của hậu vệ phòng ngự.'
    ],
    drills: [
      'Dẫn bóng tại chỗ tay phải 30 lần, đổi tay trái 30 lần.',
      'Dẫn bóng chữ V đổi tay trước mặt tại chỗ.',
      'Dẫn bóng di chuyển zíc zắc qua hàng cọc tiêu dọc sân bóng rổ.'
    ],
    errors: [
      'Dùng lòng bàn tay đập mạnh vào bóng bôm bốp làm mất cảm giác khống chế và phạm luật hai lần dẫn bóng.',
      'Cúi gập đầu nhìn bóng khiến không quan sát được đồng đội đang trống trải để chuyền bóng.'
    ],
    rules: 'Luật bóng rổ: Lỗi bóng hai lần (Double Dribble) nếu cầm bóng bằng hai tay sau khi dẫn bóng rồi lại tiếp tục đập bóng dẫn tiếp.'
  },
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'bong-ro',
    topicTitle: 'Chủ đề 3. Bóng rổ',
    id: 'bongro-2',
    num: '2',
    title: 'Kĩ thuật chuyền và bắt bóng hai tay trên đầu',
    desc: 'Đường chuyền cự li trung bình vượt qua tầm phong tỏa của hậu vệ đối phương.',
    keyPoints: [
      'Tư thế chuẩn bị: Hai chân đứng trước sau hoặc rộng bằng vai, hai tay cầm bóng hai bên hơi lùi về sau, nâng bóng lên cao trên đầu.',
      'Động tác chuyền: Bước chân sau lên một bước nhỏ trợ lực, hai cánh tay duỗi nhanh về hướng chuyền kết hợp gập mạnh cổ tay và miết các ngón tay đẩy bóng đi.',
      'Quỹ đạo bóng: Bóng bay căng, thẳng và ngang tầm ngực hoặc mặt đồng đội để đồng đội bắt bóng thuận lợi nhất.',
      'Động tác bắt bóng: Hai tay giơ cao đón bóng, các ngón tay mở tự nhiên tạo thành hình phễu; khi bóng chạm tay, nhanh chóng co khuỷu hoãn xung kéo bóng về ngực.'
    ],
    drills: [
      'Hai bạn đứng đối diện cách nhau 4m - 6m thực hiện chuyền và bắt bóng hai tay trên đầu (20 lần).',
      'Chuyền bóng vào tường bật ra rồi bắt bóng nhịp nhàng.',
      'Phối hợp 3 người di chuyển chuyền bóng tam giác phản công nhanh.'
    ],
    errors: [
      'Đưa bóng ra quá xa phía sau gáy trước khi chuyền làm chậm nhịp và đối phương dễ dàng thò tay cướp bóng từ sau.',
      'Xòe ngón tay cứng đờ khi bắt bóng dễ gây trật khớp hoặc gãy ngón tay (chấn thương ngón tay bóng rổ).'
    ],
    rules: 'Luật 5 giây: Cầu thủ bị kèm chặt không được giữ bóng quá 5 giây mà không chuyền, ném hoặc dẫn bóng.'
  },
  {
    partId: 'TTTC',
    partName: 'Phần III. Thể thao tự chọn',
    topicId: 'bong-ro',
    topicTitle: 'Chủ đề 3. Bóng rổ',
    id: 'bongro-3',
    num: '3',
    title: 'Kĩ thuật hai bước ném rổ một tay dưới thấp (Lay-up)',
    desc: 'Kĩ thuật ghi điểm cận rổ hiệu quả nhất: bước 1 chân phải dài, bước 2 chân trái ngắn bật cao, ngửa bàn tay đưa bóng vào rổ.',
    keyPoints: [
      'Quy tắc 2 bước (lên rổ bên phải): Khi dẫn bóng đến cự li cách rổ 3-4m, bắt bóng bằng hai tay cùng lúc đặt bước 1.',
      'Bước 1 (Chân phải): Bước dài để hãm đà ngang và chuyển hướng lực quán tính.',
      'Bước 2 (Chân trái): Bước ngắn hơn, khuỵu gối đạp mạnh bật vút toàn bộ cơ thể lên cao theo phương thẳng đứng hướng về rổ.',
      'Động tác ném rổ: Tay phải nâng bóng lên cao ngang tầm rổ, bàn tay ngửa dưới bóng; ở điểm cao nhất, duỗi thẳng cổ tay và miết nhẹ các ngón tay đưa bóng nảy nhẹ vào bảng rổ góc vuông rơi vào rổ.'
    ],
    drills: [
      'Tập mô phỏng nhịp chân tại chỗ: "Phải - Trái - Bật nhảy nâng tay phải" không có bóng (15 lần).',
      'Đứng chếch rổ 45° ném bóng nảy bảng rổ ghi điểm rèn cảm giác ném.',
      'Dẫn bóng từ giữa sân chạy vào thực hiện hoàn chỉnh kĩ thuật 2 bước lên rổ.'
    ],
    errors: [
      'Chạy 3 bước trở lên sau khi bắt bóng (phạm lỗi chạy bước - Traveling).',
      'Bật nhảy lao người về phía trước va chạm vào cột rổ hoặc hậu vệ thay vì bật thẳng lên cao.'
    ],
    rules: 'Luật chạy bước: Sau khi kết thúc dẫn bóng và cầm bóng trên tay, chỉ được phép bước tối đa 2 bước trước khi chuyền hoặc ném rổ.'
  }
];

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/all_gdtc8_lessons.json', JSON.stringify(lessonsData, null, 2), 'utf8');
console.log('Successfully prepared all 25 lessons data! Count:', lessonsData.length);
