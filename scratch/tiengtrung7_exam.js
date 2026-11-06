// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Hán Ngữ 7 (60:00)
// Chuẩn chương trình SGK Tiếng Trung Quốc 7 - Kết nối tri thức với cuộc sống

const tiengTrung7ExamQuestions = [
  // PHẦN 1: NGỮ ÂM, THANH ĐIỆU & BIẾN ĐIỆU (Câu 1 - 6)
  {
    q: "Trong tiếng Trung, khi hai âm tiết mang thanh 3 đi liền nhau (ví dụ: 你好 nǐ hǎo), quy tắc biến điệu thanh điệu nào sau đây là đúng?",
    options: [
      "Âm tiết thứ nhất chuyển đọc thành thanh 2 (ní hǎo), âm tiết thứ hai giữ nguyên thanh 3",
      "Cả hai âm tiết đều chuyển sang thanh 1",
      "Âm tiết thứ hai chuyển sang thanh nhẹ",
      "Giữ nguyên hai thanh 3 đọc liền nhau không thay đổi"
    ],
    answer: 0,
    explain: "Quy tắc biến điệu hai thanh 3: Khi hai âm tiết mang thanh 3 đi liền kề nhau, âm tiết thứ nhất sẽ biến điệu đọc thành thanh 2 (nǐ hǎo đọc thành ní hǎo)."
  },
  {
    q: "Phó từ phủ định '不' (bù) khi đứng trước một âm tiết mang thanh 4 (ví dụ: 不是 shì, 对 duì) sẽ biến điệu như thế nào?",
    options: [
      "Biến đổi đọc thành thanh 2: 'bú' (bú shì, bú duì)",
      "Biến đổi đọc thành thanh 1: 'bū'",
      "Biến đổi đọc thành thanh 3: 'bǔ'",
      "Giữ nguyên đọc là thanh 4: 'bù'"
    ],
    answer: 0,
    explain: "Quy tắc biến điệu của '不': Khi đứng trước âm tiết mang thanh 4, '不' biến điệu đọc thành thanh 2 'bú' (bú shì, bú duì). Đứng trước các thanh 1, 2, 3 thì giữ nguyên thanh 4."
  },
  {
    q: "Số từ '一' (yī) khi đứng trước âm tiết mang thanh 1, thanh 2 hoặc thanh 3 (ví dụ: 一天 tiān, 一年 nián, 一起 qǐ) sẽ biến điệu thành thanh mấy?",
    options: [
      "Biến đọc thành thanh 4: 'yì' (yì tiān, yì nián, yì qǐ)",
      "Biến đọc thành thanh 2: 'yí'",
      "Giữ nguyên thanh 1: 'yī'",
      "Biến thành thanh nhẹ"
    ],
    answer: 0,
    explain: "Quy tắc biến điệu của '一': Đứng trước thanh 1, 2, 3 biến thành thanh 4 'yì'. Đứng trước thanh 4 biến thành thanh 2 'yí' (ví dụ: 一共 yí gòng). Khi đọc riêng lẻ hoặc số thứ tự giữ nguyên thanh 1 'yī'."
  },
  {
    q: "Thanh nhẹ (轻声 - qīngshēng) trong tiếng Trung có đặc điểm phát âm như thế nào?",
    options: [
      "Phát âm ngắn, nhẹ và nhanh hơn so với 4 thanh điệu cơ bản",
      "Phát âm cao và kéo dài hơn thanh 1",
      "Bắt buộc phải lên giọng như thanh 2",
      "Không bao giờ xuất hiện trong khẩu ngữ giao tiếp"
    ],
    answer: 0,
    explain: "Thanh nhẹ là hiện tượng âm tiết được phát âm nhẹ, ngắn và rơi nhanh, thường không đánh dấu thanh trên pinyin (ví dụ: 妈妈 māma, 喜欢 xǐhuan)."
  },
  {
    q: "Cặp từ nào sau đây có hiện tượng biến điệu '一' đọc thành thanh 2 'yí'?",
    options: [
      "一定 (yí dìng) - vì '定' (dìng) mang thanh 4",
      "一天 (yì tiān) - vì '天' mang thanh 1",
      "一年 (yì nián) - vì '年' mang thanh 2",
      "一起 (yì qǐ) - vì '起' mang thanh 3"
    ],
    answer: 0,
    explain: "Khi '一' đứng trước âm tiết mang thanh 4 như '定' (dìng), '一' biến điệu thành thanh 2: yí dìng."
  },
  {
    q: "Trong câu chào '你好！你们好！', các chữ '你' (nǐ) biến điệu như thế nào?",
    options: [
      "Trong '你好', '你' đọc thành 'ní' (thanh 2); trong '你们好', '你' giữ nguyên thanh 3 vì '们' là thanh nhẹ",
      "Cả hai chữ đều đọc thành thanh 1",
      "Cả hai chữ đều đọc thành thanh 4",
      "Cả hai chữ đều không biến điệu"
    ],
    answer: 0,
    explain: "'你好' gồm 2 thanh 3 đi liền nên '你' đọc là ní. Trong '你们好', '们' mang thanh nhẹ ngăn cách nên '你' giữ nguyên thanh 3 (nǐ men hǎo)."
  },

  // PHẦN 2: NGỮ PHÁP TRỌNG ĐIỂM (Câu 7 - 24)
  {
    q: "Số 20.000 trong tiếng Trung đọc là gì theo cách đếm lấy đơn vị '万' (vạn = 10.000)?",
    options: [
      "两万 (liǎng wàn)",
      "二千 (èr qiān)",
      "二十千 (èr shí qiān)",
      "两亿 (liǎng yì)"
    ],
    answer: 0,
    explain: "Trong tiếng Trung, 10.000 là '一万' (yí wàn), do đó 20.000 là '两万' (liǎng wàn). Tiếng Trung đếm theo cụm 4 chữ số."
  },
  {
    q: "Đơn vị '亿' (yì) trong hệ thống số đếm tiếng Trung tương đương với giá trị bao nhiêu trong tiếng Việt?",
    options: [
      "100 triệu (100.000.000)",
      "1 triệu (1.000.000)",
      "10 triệu (10.000.000)",
      "1 tỷ (1.000.000.000)"
    ],
    answer: 0,
    explain: "'一亿' (yí yì) = 100.000.000 (một trăm triệu, tức 10.000 vạn)."
  },
  {
    q: "Để đưa ra lời khuyên 'Bạn nên ngủ sớm, không nên thức khuya', câu tiếng Trung nào diễn đạt chuẩn ngữ pháp?",
    options: [
      "你应该早点儿睡觉，不应该熬夜。(Nǐ yīnggāi zǎodiǎnr shuìjiào, bù yīnggāi áoyè.)",
      "你虽然早点儿睡觉，但是熬夜。",
      "你一边早点儿睡觉，一边熬夜。",
      "你比早点儿睡觉更熬夜。"
    ],
    answer: 0,
    explain: "Cấu trúc khuyên nhủ: 应该 (yīnggāi - nên) / 不应该 (bù yīnggāi - không nên) + động từ."
  },
  {
    q: "Câu nào sau đây sử dụng đúng Bổ ngữ thời lượng để diễn đạt 'Tôi học tiếng Trung được một tiếng rồi'?",
    options: [
      "我学了一个小时的中文。(Wǒ xuéle yí ge xiǎoshí de Zhōngwén.)",
      "我学中文一个小时了。(Wǒ xué Zhōngwén yí ge xiǎoshí le.)",
      "我学中文学了一个小时。(Wǒ xué Zhōngwén xuéle yí ge xiǎoshí.)",
      "Cả ba phương án trên đều diễn đạt đúng ngữ pháp bổ ngữ thời lượng tiếng Trung"
    ],
    answer: 3,
    explain: "Khi động từ mang tân ngữ, bổ ngữ thời lượng có thể dùng dạng lặp động từ 'V + O + V + thời lượng' hoặc 'V + thời lượng + (的) + O'."
  },
  {
    q: "Phân biệt cách dùng giữa '分钟' (fēnzhōng) và '小时' (xiǎoshí):",
    options: [
      "'分钟' chỉ khoảng thời gian số phút (thời lượng); '小时' chỉ khoảng thời gian số giờ (thời lượng)",
      "'分钟' chỉ giờ trên đồng hồ, '小时' chỉ số phút",
      "'小时' chỉ dùng để hỏi tuổi, '分钟' chỉ dùng để hỏi ngày",
      "Cả hai từ hoàn toàn đồng nghĩa và có thể thay thế nhau tùy ý"
    ],
    answer: 0,
    explain: "分钟 (fēnzhōng) = phút (thời lượng), ví dụ 30 phút = 三十分钟. 小时 (xiǎoshí) = tiếng/giờ đồng hồ (thời lượng), ví dụ 2 tiếng = 两个小时."
  },
  {
    q: "Cấu trúc '都……了' (dōu... le) trong câu '都八点了，快起床吧！' biểu thị ý nghĩa gì?",
    options: [
      "Nhấn mạnh sự việc đã đạt tới mức độ cao, muộn hơn hoặc nhiều hơn bình thường (Đã 8 giờ rồi, mau dậy thôi!)",
      "Hỏi ý kiến xem có nên thức dậy hay không",
      "So sánh giữa 8 giờ sáng và 8 giờ tối",
      "Biểu thị nguyên nhân kết quả"
    ],
    answer: 0,
    explain: "Cấu trúc '都……了' dùng để nhấn mạnh thời gian đã muộn hoặc số lượng đã lớn/nhiều hơn so với dự tính."
  },
  {
    q: "Cấu trúc liên từ '又……又……' (yòu... yòu...) dùng để liên kết hai đặc điểm như thế nào?",
    options: [
      "Cùng tích cực hoặc cùng tiêu cực, diễn tả hai đặc tính cùng tồn tại (vừa… lại vừa…)",
      "Một đặc điểm rất tốt và một đặc điểm rất xấu đối lập nhau hoàn toàn",
      "Hành động này diễn ra thì hành động kia phải dừng lại",
      "Biểu thị sự lựa chọn hoặc là cái này hoặc là cái kia"
    ],
    answer: 0,
    explain: "Cấu trúc 又 A 又 B nối hai hình dung từ mang cùng sắc thái tình cảm (tốt cùng tốt, xấu cùng xấu), ví dụ: 又大又甜 (vừa to vừa ngọt), 又高又帅 (vừa cao vừa đẹp trai)."
  },
  {
    q: "Phân biệt phó từ '就' (jiù) và '才' (cái): Câu '他七点就来了，你八点才来' có ý nghĩa gì?",
    options: [
      "'就' biểu thị hành động diễn ra sớm/nhanh/thuận lợi; '才' biểu thị hành động diễn ra muộn/chậm/khó khăn",
      "'就' biểu thị hành động diễn ra rất muộn; '才' biểu thị hành động diễn ra ngay lập tức",
      "Cả '就' và '才' đều mang nghĩa bắt buộc",
      "Không có sự phân biệt nào về thời gian hay sắc thái"
    ],
    answer: 0,
    explain: "'就' biểu thị sớm, nhanh, dễ dàng (7 giờ đã đến rồi). '才' biểu thị muộn, chậm, tốn thời gian (8 giờ mới đến)."
  },
  {
    q: "Cấu trúc '一边……一边……' (yìbiān... yìbiān...) diễn đạt ý nghĩa gì?",
    options: [
      "Hai hành động diễn ra song song cùng một lúc (vừa làm việc này vừa làm việc kia)",
      "Hành động thứ nhất kết thúc rồi mới đến hành động thứ hai",
      "So sánh hành động này tốt hơn hành động kia",
      "Phủ định cả hai hành động"
    ],
    answer: 0,
    explain: "一边 V1 一边 V2 dùng để miêu tả hai hành động được thực hiện cùng lúc, ví dụ: 一边听音乐一边写作业 (vừa nghe nhạc vừa làm bài tập)."
  },
  {
    q: "Khi muốn mời ai đó xem qua hoặc nếm thử một chút với khẩu khí nhẹ nhàng, lịch sự, ta thêm cụm từ nào sau động từ?",
    options: [
      "一下 (yíxià) - ví dụ: 看一下 (kàn yíxià), 尝一下 (cháng yíxià)",
      "极了 (jíle)",
      "等 (děng)",
      "多么 (duōme)"
    ],
    answer: 0,
    explain: "Cấu trúc 'Động từ + 一下' biểu thị hành động diễn ra trong thời gian ngắn hoặc mang tính chất thử nghiệm, giúp khẩu khí câu nói trở nên nhẹ nhàng, thân mật và lịch sự."
  },
  {
    q: "Phân biệt động lượng từ '次' (cì) và '遍' (biàn):",
    options: [
      "'次' nhấn mạnh số lần phát sinh hành động nói chung; '遍' nhấn mạnh quá trình hành động được thực hiện trọn vẹn từ đầu đến cuối",
      "'次' chỉ dùng cho việc đọc sách, '遍' dùng cho tất cả mọi việc",
      "'遍' chỉ số lần ít, '次' chỉ số lần nhiều",
      "Hai từ hoàn toàn giống nhau không có điểm khác biệt"
    ],
    answer: 0,
    explain: "'次' chỉ số lần phát sinh (ví dụ đi Bắc Kinh 2 lần: 去过两次). '遍' nhấn mạnh hành động được thực hiện trọn vẹn từ đầu chí cuối (ví dụ đọc lại bài khóa 1 lượt: 读一遍)."
  },
  {
    q: "Trong câu '墙上挂着一幅中国画' (Trên tường treo một bức tranh Trung Quốc), trợ từ '着' (zhe) biểu thị điều gì?",
    options: [
      "Biểu thị sự duy trì, tồn tại của trạng thái kết quả hành động",
      "Biểu thị hành động đã hoàn thành trong quá khứ",
      "Biểu thị hành động sắp xảy ra trong tương lai",
      "Biểu thị câu mệnh lệnh khuyên can"
    ],
    answer: 0,
    explain: "Cấu trúc 'Động từ + 着' (V + 着) dùng để miêu tả trạng thái tĩnh tại đang duy trì (trên tường đang treo, cửa đang mở 门开着, anh ấy đang cười 他笑着)."
  },
  {
    q: "Để khen ngợi phong cảnh ở Quế Lâm 'Đẹp vô cùng / Đẹp cực kỳ', ta dùng bổ ngữ mức độ nào sau tính từ '美' (měi)?",
    options: [
      "极了 (jíle) -> 桂林的山水美极了！(Guìlín de shānshuǐ měi jí le!)",
      "一下 (yíxià)",
      "一边 (yìbiān)",
      "着 (zhe)"
    ],
    answer: 0,
    explain: "Kết cấu 'Tính từ + 极了' biểu thị mức độ cực điểm, cao nhất (美极了 = đẹp cực kỳ, 好极了 = tốt tuyệt vời)."
  },
  {
    q: "Câu cảm thán 'Công viên này đẹp biết bao!' được diễn đạt bằng cấu trúc '多么……啊！' như thế nào?",
    options: [
      "这个公园多么漂亮啊！(Zhè ge gōngyuán duōme piàoliang a!)",
      "这个公园比漂亮啊！",
      "这个公园虽然漂亮但是啊！",
      "这个公园不漂亮啊！"
    ],
    answer: 0,
    explain: "Cấu trúc cảm thán: 多么 + Tính từ + 啊！ (duōme... a! - biết bao/thật là...)."
  },
  {
    q: "Cấu trúc so sánh hơn: 'Anh trai cao hơn tôi' viết đúng ngữ pháp tiếng Trung là gì?",
    options: [
      "哥哥比我高。(Gēge bǐ wǒ gāo.)",
      "哥哥很高我。",
      "哥哥我比高。",
      "我比哥哥高。"
    ],
    answer: 0,
    explain: "Cấu trúc so sánh hơn trong tiếng Trung: A 比 B + Tính từ (A bǐ B + adj) -> 哥哥 (A) 比 我 (B) 高 (adj)."
  },
  {
    q: "Để diễn đạt so sánh không bằng: 'Hôm nay không lạnh bằng hôm qua', câu nào sau đây là chính xác?",
    options: [
      "今天没有昨天冷。(Jīntiān méiyǒu zuótiān lěng.)",
      "今天不比昨天很冷。",
      "今天比昨天不冷。",
      "昨天没有今天冷。"
    ],
    answer: 0,
    explain: "Cấu trúc so sánh không bằng: A 没有 B + Tính từ (A méiyǒu B + adj) -> 今天没有昨天冷 (Hôm nay không lạnh bằng hôm qua)."
  },
  {
    q: "Câu nào sau đây sử dụng Bổ ngữ trạng thái 'V + 得 + Tính từ' đúng ngữ pháp?",
    options: [
      "他说中文说得非常流利。(Tā shuō Zhōngwén shuō de fēicháng liúlì.)",
      "他流利说中文得。",
      "他说得中文流利。",
      "他中文说得不流利很。"
    ],
    answer: 0,
    explain: "Bổ ngữ trạng thái: Động từ + 得 + Bổ ngữ (miêu tả trình độ/kết quả thực hiện của hành động). Khi có tân ngữ thì lặp lại động từ: 他说中文说得非常流利."
  },
  {
    q: "Để hỏi dạng chính phản cho bổ ngữ trạng thái 'Cô ấy hát có hay không?', cách diễn đạt nào sau đây chuẩn xác?",
    options: [
      "她唱得好不好？ hoặc 她唱得好吗？",
      "她唱得吗好？",
      "她好不好唱？",
      "她得唱好不好？"
    ],
    answer: 0,
    explain: "Dạng câu hỏi của bổ ngữ trạng thái: V + 得 + Adj + 不 + Adj? hoặc V + 得 + Adj + 吗? (唱得好不好？ / 唱得好吗？)."
  },

  // PHẦN 3: PHÂN BIỆT TRỢ TỪ & LƯỢNG TỪ (Câu 25 - 32)
  {
    q: "Phân biệt 3 trợ từ đồng âm 'de': 的, 得, 地 trong tiếng Trung:",
    options: [
      "'的' đứng trước danh từ (định ngữ); '得' đứng sau động từ (bổ ngữ trạng thái); '地' đứng trước động từ (trạng ngữ)",
      "'得' đứng trước danh từ, '的' đứng sau động từ, '地' chỉ dùng cho địa điểm",
      "Cả 3 từ đều có thể dùng thay thế cho nhau trong mọi trường hợp",
      "'地' chỉ dùng trong văn viết cổ đại, hiện đại không dùng nữa"
    ],
    answer: 0,
    explain: "Quy tắc 3 chữ 'de': 的 (định ngữ + 的 + Danh từ, ví dụ: 漂亮的花), 得 (Động từ + 得 + Bổ ngữ, ví dụ: 跑得快), 地 (Phó từ/Tính từ + 地 + Động từ, ví dụ: 认真地学习)."
  },
  {
    q: "Điền trợ từ thích hợp vào chỗ trống: '他跑___很快，赢得了比赛。'",
    options: [
      "得 (dé/de)",
      "的 (de)",
      "地 (de)",
      "着 (zhe)"
    ],
    answer: 0,
    explain: "Sau động từ '跑' (chạy) nối với bổ ngữ miêu tả mức độ '很快' (rất nhanh) bắt buộc dùng trợ từ kết cấu '得'."
  },
  {
    q: "Lượng từ thích hợp dùng cho danh từ '树' (cây cối) trong câu '学校里种了很多___树' là gì?",
    options: [
      "棵 (kē)",
      "颗 (kē - dùng cho vật nhỏ hình hạt)",
      "座 (zuò)",
      "张 (zhāng)"
    ],
    answer: 0,
    explain: "Lượng từ cho cây cối trong tiếng Trung là '棵' (kē - mộc biểu thị cây cối: 一棵树). Tránh nhầm với '颗' (dùng cho hạt ngọc, sao, quả bóng)."
  },
  {
    q: "Lượng từ thích hợp dùng cho các công trình kiến trúc to lớn, cố định (núi, cầu, bảo tàng, toà nhà) như '桥' (cầu), '山' (núi), '楼' (toà nhà) là:",
    options: [
      "座 (zuò) - ví dụ: 一座桥, 一座山, 一座博物馆",
      "本 (běn)",
      "件 (jiàn)",
      "条 (tiáo)"
    ],
    answer: 0,
    explain: "Lượng từ '座' (zuò) dùng cho các công trình to lớn, kiên cố, đồ sộ hoặc cảnh quan thiên nhiên cố định (núi, cầu, tháp, bảo tàng)."
  },
  {
    q: "Từ '等' (děng) trong câu '我们社团有书法、剪纸、京剧等活动' có tác dụng gì?",
    options: [
      "Dùng ở cuối phần liệt kê biểu thị 'vân vân', còn nhiều nội dung tương tự",
      "Nghĩa là động từ 'chờ đợi'",
      "Nghĩa là 'bằng nhau' trong toán học",
      "Dùng làm trợ từ nghi vấn để hỏi"
    ],
    answer: 0,
    explain: "'等' (děng) đặt sau danh sách các sự vật liệt kê mang ý nghĩa 'vân vân' (...v.v.), tương tự như '等等'."
  },
  {
    q: "Lượng từ dùng cho danh từ sách vở, từ điển, tạp chí (书, 词典, 杂志) là:",
    options: [
      "本 (běn) - ví dụ: 一本书, 一本词典",
      "张 (zhāng)",
      "把 (bǎ)",
      "支 (zhī)"
    ],
    answer: 0,
    explain: "Lượng từ chuẩn cho các ấn phẩm sách vở đóng quyển là '本' (běn)."
  },
  {
    q: "Lượng từ dùng cho các vật có bề mặt phẳng mỏng như tranh ảnh, bản đồ, tờ giấy, tấm vé (画, 地图, 纸, 票) là:",
    options: [
      "张 (zhāng) - ví dụ: 一张地图, 一幅/张画, 一张票",
      "本 (běn)",
      "棵 (kē)",
      "座 (zuò)"
    ],
    answer: 0,
    explain: "Lượng từ '张' (zhāng) dùng cho những vật thể dẹt, có mặt phẳng như tờ giấy, tấm vé, cái bàn, bức ảnh."
  },
  {
    q: "Trong câu '秋天来了，天气变得凉快了', từ '变得' (biàn de) biểu thị điều gì?",
    options: [
      "Trở nên, biến đổi sang một trạng thái tính chất mới",
      "Người nói có thể thay đổi đồ vật",
      "Khen ngợi thời tiết rất hoàn hảo",
      "So sánh giữa mùa thu và mùa xuân"
    ],
    answer: 0,
    explain: "Cấu trúc '变得 + Tính từ' (biàn de + adj) dùng để biểu thị sự chuyển biến sang một trạng thái mới (变得凉快 = trở nên mát mẻ, 变得美丽 = trở nên xinh đẹp)."
  },

  // PHẦN 4: VĂN HÓA, TỪ VỰNG & GIAO TIẾP (Câu 33 - 40)
  {
    q: "Môn nghệ thuật tạo hình chữ viết truyền thống của Trung Hoa dùng bút lông và mực tàu được gọi là gì?",
    options: [
      "书法 (shūfǎ - Thư pháp)",
      "剪纸 (jiǎnzhǐ - Cắt giấy)",
      "京剧 (jīngjù - Kinh kịch)",
      "太极拳 (tàijíquán - Thái cực quyền)"
    ],
    answer: 0,
    explain: "Thư pháp (书法 - shūfǎ) là nghệ thuật viết chữ Hán bằng bút lông độc đáo của nền văn hóa Trung Hoa."
  },
  {
    q: "Nghệ thuật dân gian dùng kéo cắt những họa tiết hoa sen, con giáp trên giấy đỏ dán cửa sổ dịp Tết gọi là:",
    options: [
      "剪纸 (jiǎnzhǐ - Cắt giấy dân gian)",
      "国画 (guóhuà - Quốc họa)",
      "围棋 (wéiqí - Cờ vây)",
      "茶艺 (cháyì - Nghệ thuật trà)"
    ],
    answer: 0,
    explain: "Cắt giấy (剪纸 - jiǎnzhǐ) là di sản văn hóa phi vật thể nổi tiếng của Trung Quốc, thường được trang trí nhà cửa vào dịp lễ Tết."
  },
  {
    q: "Di sản kiến trúc cung điện hoàng gia nổi tiếng thế giới tại trung tâm thủ đô Bắc Kinh có tên gọi là gì?",
    options: [
      "故宫 (Gùgōng - Cố Cung / Tử Cấm Thành)",
      "颐和园 (Yíhéyuán - Di Hòa Viên)",
      "天坛 (Tiāntán - Thiên Đàn)",
      "兵马俑 (Bīngmǎyǒng - Binh Mã Dũng)"
    ],
    answer: 0,
    explain: "故宫 (Gùgōng - Cố Cung), còn gọi là Tử Cấm Thành, là quần thể cung điện bằng gỗ lớn nhất và được bảo tồn nguyên vẹn nhất thế giới tại Bắc Kinh."
  },
  {
    q: "Khi đi tham quan bảo tàng (博物馆), hành động văn minh nào sau đây chúng ta 'NÊN' (应该) thực hiện?",
    options: [
      "保持安静，认真听讲解员介绍 (Giữ trật tự, chú ý lắng nghe thuyết minh viên giới thiệu)",
      "大声喧哗，在展厅里追逐打闹 (Nói cười lớn tiếng, đuổi bắt nô đùa trong phòng trưng bày)",
      "随便触摸贵重的文物展品 (Tự ý sờ tay vào hiện vật cổ vật quý giá)",
      "在展厅内乱扔垃圾 (Vứt rác bừa bãi trong khuôn viên)"
    ],
    answer: 0,
    explain: "Quy tắc văn minh nơi công cộng và bảo tàng: 保持安静 (giữ trật tự), 不大声说话 (không nói to), 保护文物 (bảo vệ hiện vật)."
  },
  {
    q: "Để bảo vệ môi trường trong trường học, hoạt động 'phân loại rác' trong tiếng Trung được gọi là:",
    options: [
      "垃圾分类 (lājī fēnlèi)",
      "打扫卫生 (dǎsǎo wèishēng)",
      "植树造林 (zhíshù zàolín)",
      "随地吐痰 (suídì tǔtán)"
    ],
    answer: 0,
    explain: "'垃圾分类' (lājī fēnlèi) = phân loại rác thải (thành rác tái chế 可回收物, rác nhà bếp 厨余垃圾, rác có hại 有害垃圾, rác khác 其他垃圾)."
  },
  {
    q: "Từ '短视频' (duǎn shìpín) rất phổ biến trong giới trẻ hiện nay có nghĩa tiếng Việt là gì?",
    options: [
      "Video ngắn (như TikTok, Reels, Shorts)",
      "Bộ phim truyền hình dài tập",
      "Bản tin thời sự trực tiếp",
      "Tin nhắn thoại"
    ],
    answer: 0,
    explain: "'短视频' (duǎn shìpín): 短 = ngắn, 视频 = video. Nghĩa là clip/video ngắn trên mạng xã hội."
  },
  {
    q: "Khi một người bạn Trung Quốc giúp đỡ bạn, bạn nói '谢谢你！' (Xièxie nǐ!), người bạn đó thường đáp lại lịch sự bằng câu nào?",
    options: [
      "不客气！(Bú kèqi! - Đừng khách sáo!) hoặc 不用谢！(Bú yòng xiè!)",
      "对不起！(Duìbuqǐ!)",
      "没关系！(Méi guānxi! - Không sao đâu, dùng khi người khác xin lỗi)",
      "再见！(Zàijiàn!)"
    ],
    answer: 0,
    explain: "Khi được cảm ơn, câu đáp chuẩn là '不客气' (Bú kèqi) hoặc '不用谢' (Bú yòng xiè). '没关系' dùng để đáp lại lời xin lỗi '对不起'."
  },
  {
    q: "Khẩu hiệu bảo vệ môi trường: '爱护树木，人人有责' (Àihù shùmù, rénrén yǒu zé) có ý nghĩa thông điệp là gì?",
    options: [
      "Bảo vệ cây xanh, ai ai cũng có trách nhiệm",
      "Trồng cây là việc riêng của các bác làm vườn",
      "Cây cối tự lớn không cần ai chăm sóc",
      "Mỗi người chỉ cần trồng một cái cây duy nhất"
    ],
    answer: 0,
    explain: "'爱护树木，人人有责': 爱护 (yêu quý bảo vệ) + 树木 (cây cối) + 人人有责 (mọi người đều có trách nhiệm)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tiengTrung7ExamQuestions };
}
