// tiengtrung9_exam.js
// 25 Master Questions for Đấu Trường Trạng Nguyên Tiếng Trung 9 (60:00 Timer)

const examQuestions = [
  {
    q: "Câu 1 (Chủ điểm 1 - Bài 1): Chọn câu dùng đúng trợ từ động thái 过 để nói về trải nghiệm đã từng tham gia:",
    options: [
      "我参加过才艺表演。",
      "我过参加才艺表演。",
      "我参加才艺表演了过。",
      "我不参加过才艺表演。"
    ],
    answer: 0,
    explain: "Trợ từ động thái 过 đứng ngay sau động từ để biểu thị kinh nghiệm, trải nghiệm từng làm: 'V + 过 + Tân ngữ'."
  },
  {
    q: "Câu 2 (Chủ điểm 1 - Bài 1): Dạng phủ định đúng của '他去过中国' là:",
    options: [
      "他不曾去过中国。",
      "他没去过中国。",
      "他不去过中国。",
      "他去没过中国。"
    ],
    answer: 1,
    explain: "Phủ định của trải nghiệm 'V + 过' bắt buộc dùng '没(有) + V + 过', không dùng '不'."
  },
  {
    q: "Câu 3 (Chủ điểm 1 - Bài 2): Điền cặp liên từ thích hợp biểu thị điều kiện cần: '______大家齐心协力，______能把事情做好。'",
    options: [
      "只要……就……",
      "虽然……但是……",
      "只有……才……",
      "因为……所以……"
    ],
    answer: 2,
    explain: "'只有……才……' dùng để biểu thị điều kiện cần thiết duy nhất (Chỉ có... thì mới...)."
  },
  {
    q: "Câu 4 (Chủ điểm 1 - Bài 2): Phó từ '正好' trong câu '我正好有两张票，一起去看电影吧！' có nghĩa là:",
    options: [
      "Quá khứ",
      "Vừa khéo, vừa đúng lúc",
      "Không thích",
      "Khó khăn"
    ],
    answer: 1,
    explain: "'正好' (zhènghǎo) mang nghĩa là 'vừa khéo, vừa đúng lúc, vừa vặn'."
  },
  {
    q: "Câu 5 (Chủ điểm 1 - Bài 3): Điền liên từ thích hợp: '______明天不下雨，我们______去公园参加志愿活动。'",
    options: [
      "只有……才……",
      "只要……就……",
      "不但……而且……",
      "与其……不如……"
    ],
    answer: 1,
    explain: "Nêu một điều kiện đủ để đạt kết quả dùng '只要……就……' (Chỉ cần mai không mưa thì chúng tôi sẽ đi công viên)."
  },
  {
    q: "Câu 6 (Chủ điểm 1 - Bài 3): Phó từ '只' trong câu '时间太紧，我只回答了一个问题' có tác dụng:",
    options: [
      "Giới hạn hành động/số lượng (chỉ)",
      "Biểu thị tương lai",
      "Nhấn mạnh nguyên nhân",
      "Hỏi nghi vấn"
    ],
    answer: 0,
    explain: "'只' (zhǐ) đứng trước động từ để giới hạn phạm vi hoặc số lượng (chỉ trả lời 1 câu)."
  },
  {
    q: "Câu 7 (Chủ điểm 2 - Bài 5): Muốn mời khách nói lại một lần nữa bằng tiếng Trung lịch sự, ta dùng câu nào?",
    options: [
      "请又说一遍。",
      "请再说一遍。",
      "请还说一遍。",
      "请都说一遍。"
    ],
    answer: 1,
    explain: "Hành động lặp lại hướng về tương lai dùng phó từ '再 + V': '请再说一遍' (Xin hãy nói lại lần nữa)."
  },
  {
    q: "Câu 8 (Chủ điểm 2 - Bài 5): Đêm giao thừa (除夕) theo phong tục miền Bắc Trung Quốc, mọi người quây quần cùng nhau làm món gì?",
    options: [
      "包饺子 (Gói sủi cảo)",
      "包方粽 (Gói bánh chưng)",
      "做春卷 (Làm nem cuốn)",
      "吃汤圆 (Ăn bánh trôi)"
    ],
    answer: 0,
    explain: "Người miền Bắc Trung Quốc có phong tục truyền thống ăn sủi cảo (饺子) đêm giao thừa."
  },
  {
    q: "Câu 9 (Chủ điểm 2 - Bài 5): Từ '十分' trong câu '今天的天气十分晴朗' có vai trò gì?",
    options: [
      "Chỉ số lượng mười phần",
      "Phó từ chỉ mức độ cao (vô cùng, rất)",
      "Chỉ thời gian mười phút",
      "Từ nối nguyên nhân"
    ],
    answer: 1,
    explain: "'十分' (shífēn) là phó từ chỉ mức độ cao, đồng nghĩa với '非常' (rất, vô cùng)."
  },
  {
    q: "Câu 10 (Chủ điểm 2 - Bài 6): Điền liên từ nối tiếp nhanh: '外国游客______看见越南奥黛，______连声称赞。'",
    options: [
      "只有……才……",
      "一……就……",
      "不但……反而……",
      "虽然……还是……"
    ],
    answer: 1,
    explain: "Cấu trúc '一……就……' diễn tả hành động vừa xảy ra là lập tức có kết quả tiếp theo (Vừa nhìn thấy là liền khen ngợi)."
  },
  {
    q: "Câu 11 (Chủ điểm 2 - Bài 6): Lượng từ thích hợp cho cụm từ '一______漂亮的旗袍' là:",
    options: [
      "件 (hoặc 套)",
      "张",
      "本",
      "双"
    ],
    answer: 0,
    explain: "Trang phục sườn xám dùng lượng từ '件' hoặc '套' (nếu là bộ trang phục hoàn chỉnh)."
  },
  {
    q: "Câu 12 (Chủ điểm 2 - Bài 7): Điền cấu trúc giải thích nguyên nhân: '这首民歌______深受大家欢迎，______它歌词优美动人。'",
    options: [
      "只要……就……",
      "之所以……是因为……",
      "虽然……但是……",
      "无论……都……"
    ],
    answer: 1,
    explain: "'之所以……是因为……' dùng để nhấn mạnh mối quan hệ giữa kết quả và nguyên nhân (Sở dĩ... là vì...)."
  },
  {
    q: "Câu 13 (Chủ điểm 2 - Bài 7): Loại hình sân khấu kịch cổ truyền dân gian độc đáo của Việt Nam biểu diễn trên mặt nước được gọi là:",
    options: [
      "京剧 (Kinh kịch)",
      "相声 (Tấu hài)",
      "水上木偶 (Múa rối nước)",
      "剪纸 (Cắt giấy)"
    ],
    answer: 2,
    explain: "'水上木偶' (shuǐshàng mù'ǒu) là nghệ thuật múa rối nước truyền thống của Việt Nam."
  },
  {
    q: "Câu 14 (Chủ điểm 3 - Bài 9): Câu phản vấn '这么好的天气，谁不想出去走走呢？' có ý nghĩa là:",
    options: [
      "Không ai muốn ra ngoài",
      "Tất cả mọi người ai cũng muốn ra ngoài đi dạo",
      "Chỉ một người muốn ra ngoài",
      "Thời tiết hôm nay rất xấu"
    ],
    answer: 1,
    explain: "Câu phản vấn dùng hình thức câu hỏi phủ định '谁不想...呢' để khẳng định mạnh mẽ: 'Ai cũng đều muốn đi dạo'."
  },
  {
    q: "Câu 15 (Chủ điểm 3 - Bài 9): Từ nào chỉ đặc điểm nổi bật của cuộc sống ở vùng nông thôn?",
    options: [
      "交通拥挤",
      "高楼大厦",
      "平静、接近大自然",
      "人口密集"
    ],
    answer: 2,
    explain: "Nông thôn có đặc điểm yên bình (平静) và gần gũi với thiên nhiên (接近大自然)."
  },
  {
    q: "Câu 16 (Chủ điểm 3 - Bài 10): Chọn câu chữ 把 viết đúng cấu trúc ngữ pháp:",
    options: [
      "我把书放了在桌子上。",
      "我把那本书放在桌子上了。",
      "我放在桌子上把书。",
      "把书我放在桌子上了。"
    ],
    answer: 1,
    explain: "Cấu trúc chuẩn câu chữ 把: S + 把 + O xác định + V + 在 + địa điểm + 了: '我把那本书放在桌子上了'."
  },
  {
    q: "Câu 17 (Chủ điểm 3 - Bài 10): Trong câu chữ 把 có động từ năng nguyện (như 想, 要, 应该), vị trí của chúng là:",
    options: [
      "Đứng sau động từ chính",
      "Đứng cuối câu",
      "Đứng TRƯỚC chữ '把'",
      "Đứng sau tân ngữ của 把"
    ],
    answer: 2,
    explain: "Động từ năng nguyện bắt buộc phải đứng TRƯỚC chữ 把 (ví dụ: '你应该把雨伞带上')."
  },
  {
    q: "Câu 18 (Chủ điểm 3 - Bài 11): Dạng phủ định của câu chữ 把 dùng từ nào và đặt ở đâu?",
    options: [
      "Dùng '不' đặt sau chữ 把",
      "Dùng '没(有)' đặt TRƯỚC chữ 把",
      "Dùng '别' đặt sau động từ",
      "Dùng '没有' đặt cuối câu"
    ],
    answer: 1,
    explain: "Từ phủ định '没有' hoặc '别' bắt buộc phải đứng TRƯỚC chữ 把: '弟弟没有把牛奶喝完'."
  },
  {
    q: "Câu 19 (Chủ điểm 3 - Bài 11): Mẫu câu '我把电视当成了看世界的窗口' mang ý nghĩa là:",
    options: [
      "Tôi bán chiếc ti vi để mua cửa sổ",
      "Tôi coi truyền hình là cánh cửa sổ để nhìn ra thế giới",
      "Chiếc ti vi bị hỏng ở cửa sổ",
      "Tôi không thích xem truyền hình"
    ],
    answer: 1,
    explain: "'把 A 当成 B' có nghĩa là xem/coi A là B."
  },
  {
    q: "Câu 20 (Chủ điểm 4 - Bài 13): Lượng từ lặp lại trong câu '同学们个个都很优秀' biểu thị ý nghĩa gì?",
    options: [
      "Một số bạn học",
      "Tất cả mọi bạn học ai nấy đều rất xuất sắc",
      "Không có ai xuất sắc",
      "Một bạn học xuất sắc"
    ],
    answer: 1,
    explain: "Dạng lặp lượng từ '个个' mang nghĩa phân phối toàn thể: 'mọi người / ai nấy đều'."
  },
  {
    q: "Câu 21 (Chủ điểm 4 - Bài 14): Trong câu '我能听懂中国人说的话', thành phần đóng vai trò làm định ngữ là:",
    options: [
      "我能",
      "听懂",
      "中国人说 (cụm chủ vị)",
      "话"
    ],
    answer: 2,
    explain: "Cụm chủ vị '中国人说' đứng trước trợ từ '的' để bổ nghĩa cho danh từ trung tâm '话'."
  },
  {
    q: "Câu 22 (Chủ điểm 4 - Bài 14): Chữ Hán nào dưới đây là chữ hội ý (会意字) tạo thành từ 3 chữ Mộc (木)?",
    options: [
      "森 (sēn - rừng rậm)",
      "晶 (jīng - sáng lấp lánh)",
      "众 (zhòng - đông người)",
      "品 (pǐn - phẩm vật)"
    ],
    answer: 0,
    explain: "Chữ '森' (sēn) gồm 3 chữ '木' (cây gỗ) ghép lại, biểu thị rừng cây rậm rạp."
  },
  {
    q: "Câu 23 (Chủ điểm 4 - Bài 15): Điền trợ từ thích hợp vào chỗ trống: '他认真______听老师讲课。'",
    options: [
      "的",
      "地",
      "得",
      "着"
    ],
    answer: 1,
    explain: "Đứng trước động từ '听' biểu thị phương thức, cách thức hành động dùng trợ từ trạng ngữ '地'."
  },
  {
    q: "Câu 24 (Chủ điểm 4 - Bài 15): Điền trợ từ thích hợp vào chỗ trống: '王老师讲课讲______很生动。'",
    options: [
      "的",
      "地",
      "得",
      "过"
    ],
    answer: 2,
    explain: "Đứng sau động từ dẫn bổ ngữ chỉ trạng thái/mức độ dùng trợ từ '得': '讲得很生动'."
  },
  {
    q: "Câu 25 (Chủ điểm 4 - Bài 15): Cụm từ nào biểu thị việc sử dụng điện thoại di động một cách lành mạnh, khoa học?",
    options: [
      "过度依赖 (phụ thuộc quá mức)",
      "合理使用 (sử dụng hợp lý)",
      "沉迷游戏 (nghiện trò chơi)",
      "整夜玩手机 (thức cả đêm nghịch điện thoại)"
    ],
    answer: 1,
    explain: "'合理使用' (hélǐ shǐyòng) có nghĩa là sử dụng một cách hợp lý và điều độ."
  }
];

module.exports = { examQuestions };
