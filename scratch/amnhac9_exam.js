const amnhac9ExamQuestions = [
  {
    id: 1,
    q: "Bài hát 'Nối vòng tay lớn' (Chủ đề 1) là một sáng tác nổi tiếng của nhạc sĩ nào?",
    options: ["Trịnh Công Sơn", "Huy Du", "Phan Huỳnh Điểu", "Văn Cao"],
    correct: 0,
    explain: "Bài hát 'Nối vòng tay lớn' do nhạc sĩ Trịnh Công Sơn sáng tác vào mùa xuân năm 1968, thể hiện tinh thần đại đoàn kết dân tộc."
  },
  {
    id: 2,
    q: "Bài đọc nhạc số 1 trong Chủ đề 1 trích từ giai điệu dân ca nào của nước Anh?",
    options: ["Chiếc cầu Luân Đôn (London Bridge is Falling Down)", "Donna Donna", "Greensleeves", "Auld Lang Syne"],
    correct: 0,
    explain: "Bài đọc nhạc số 1 viết ở nhịp 2/4 giọng Đô trưởng, trích đoạn bài ca thiếu nhi dân gian nước Anh 'Chiếc cầu Luân Đôn'."
  },
  {
    id: 3,
    q: "Trong lí thuyết âm nhạc, 'Quãng' được định nghĩa là gì?",
    options: [
      "Khoảng cách về độ cao giữa hai âm thanh",
      "Độ dài ngân vang của âm thanh",
      "Cường độ mạnh nhẹ của âm thanh",
      "Vận tốc biểu diễn nhanh chậm của tác phẩm"
    ],
    correct: 0,
    explain: "Quãng là khoảng cách về độ cao giữa hai âm thanh. Hai âm có thể vang lên nối tiếp (quãng giai điệu) hoặc cùng lúc (quãng hoà âm)."
  },
  {
    id: 4,
    q: "Quãng 3 Trưởng (3T) và Quãng 3 Thứ (3t) lần lượt có độ lớn là bao nhiêu cung?",
    options: [
      "Quãng 3T có 2 cung; Quãng 3t có 1,5 cung",
      "Quãng 3T có 1,5 cung; Quãng 3t có 2 cung",
      "Quãng 3T có 2,5 cung; Quãng 3t có 2 cung",
      "Cả hai quãng đều có 2 cung"
    ],
    correct: 0,
    explain: "Quãng 3 Trưởng gồm 2 cung (ví dụ Đô - Mi). Quãng 3 Thứ gồm 1,5 cung (ví dụ Mi - Sol hoặc La - Đô)."
  },
  {
    id: 5,
    q: "Tác phẩm thanh xướng kịch nổi tiếng 'Đường chúng ta đi' do nhạc sĩ Huy Du phổ thơ của nhà thơ nào?",
    options: ["Xuân Sách", "Tố Hữu", "Huy Cận", "Chính Hữu"],
    correct: 0,
    explain: "Ca khúc 'Đường chúng ta đi' do nhạc sĩ Huy Du sáng tác năm 1968, phổ thơ nhà thơ Xuân Sách, tràn đầy khí thế cách mạng anh hùng."
  },
  {
    id: 6,
    q: "Bài hát 'Bảy sắc cầu vồng' trong Chủ đề 2 do ai phổ nhạc và thơ của ai?",
    options: [
      "Nhạc Vũ Trọng Tường, lời thơ Dương Thuần Báo",
      "Nhạc Trịnh Công Sơn, lời thơ Huy Du",
      "Nhạc Văn Cao, lời thơ Nguyễn Đình Thi",
      "Nhạc Trần Hoàn, lời thơ Lưu Trọng Lư"
    ],
    correct: 0,
    explain: "Bài hát 'Bảy sắc cầu vồng' do nhạc sĩ Vũ Trọng Tường phổ nhạc từ bài thơ của nhà thơ Dương Thuần Báo."
  },
  {
    id: 7,
    q: "Ca khúc 'Thời thanh niên sôi nổi' là tác phẩm âm nhạc cách mạng nổi tiếng của đất nước nào?",
    options: ["Nga (Liên Xô trước đây)", "Đức", "Pháp", "Ý"],
    correct: 0,
    explain: "'Thời thanh niên sôi nổi' là ca khúc nổi tiếng của nhạc sĩ Aleksandra Pakhmutova (Liên Xô / Nga), thể hiện nhiệt huyết cống hiến của tuổi trẻ."
  },
  {
    id: 8,
    q: "Kèn Oboe thuộc bộ nhạc cụ nào trong dàn nhạc giao hưởng phương Tây?",
    options: ["Bộ gỗ (Woodwind)", "Bộ đồng (Brass)", "Bộ dây (Strings)", "Bộ gõ (Percussion)"],
    correct: 0,
    explain: "Kèn Oboe thuộc bộ gỗ, sử dụng dăm kép bằng sậy tự nhiên và có thân kèn hình trụ dài bằng gỗ đen mun hoặc vật liệu tổng hợp."
  },
  {
    id: 9,
    q: "Đặc điểm nhận dạng độc đáo nhất của kèn Cor (French Horn) là gì?",
    options: [
      "Ống kim loại cuộn tròn, miệng loa rất rộng và dùng búp kèn hình nón",
      "Ống thẳng đứng dài, dùng dăm đơn như kèn Clarinet",
      "Chỉ làm bằng tre nứa và gõ vào thùng gỗ",
      "Có bàn phím trắng đen bấm ngón như đàn piano"
    ],
    correct: 0,
    explain: "Kèn Cor (French Horn) có ống đồng xoắn thành vòng tròn lớn, loa kèn xòe rộng, nghệ sĩ thường dùng tay phải luồn vào miệng loa để điều chỉnh âm sắc."
  },
  {
    id: 10,
    q: "Khi dàn nhạc giao hưởng chuẩn bị biểu diễn, nhạc cụ nào thường phát nốt La chuẩn (A4 440 Hz) để cả dàn nhạc cùng so dây?",
    options: ["Kèn Oboe", "Trống định âm", "Đàn Violon", "Kèn Cor"],
    correct: 0,
    explain: "Nhờ cao độ chuẩn xác, ổn định và âm sắc thanh tao xuyên thấu, kèn Oboe luôn đảm nhận nhiệm vụ thổi nốt La (A = 440Hz) để cả dàn nhạc so dây."
  },
  {
    id: 11,
    q: "Bài hát 'Tháng năm học trò' (Chủ đề 3) viết về kỉ niệm mái trường là sáng tác của nhạc sĩ nào?",
    options: ["Nguyễn Đức Trung", "Trần Tiến", "Hoàng Vân", "Phạm Tuyên"],
    correct: 0,
    explain: "'Tháng năm học trò' là ca khúc trữ tình, thiết tha về tuổi học trò dưới mái trường thân yêu của nhạc sĩ Nguyễn Đức Trung."
  },
  {
    id: 12,
    q: "'Dịch giọng' (Transposition) trong tác phẩm âm nhạc có ý nghĩa là gì?",
    options: [
      "Nâng cao hoặc hạ thấp cao độ toàn bài theo cùng một quãng, giữ nguyên giai điệu và tiết tấu",
      "Thay đổi hoàn toàn nhịp điệu và lời ca của tác phẩm",
      "Chuyển một bài hát từ giọng Nam sang giọng Nữ mà bỏ hết các nốt cao",
      "Xoá bỏ toàn bộ dấu hoá trong hoá biểu của bản nhạc"
    ],
    correct: 0,
    explain: "Dịch giọng là thay đổi độ cao của toàn bộ giai điệu theo cùng một quãng âm nhất định, giúp bài hát phù hợp với âm vực của người hát hoặc nhạc cụ."
  },
  {
    id: 13,
    q: "Bài hát 'Lí ngựa ô' học trong Chủ đề 4 thuộc vùng dân ca nào của nước ta?",
    options: ["Dân ca Nam Bộ", "Dân ca Quan họ Bắc Ninh", "Dân ca Tây Bắc", "Dân ca Chăm"],
    correct: 0,
    explain: "'Lí ngựa ô' Nam Bộ có nhịp điệu rộn ràng, vui tươi, sử dụng nhiều từ đệm đặc trưng phương Nam ('khớp con ngựa ô', 'lọng tàng')."
  },
  {
    id: 14,
    q: "Nhã nhạc Cung đình Huế đã được tổ chức UNESCO ghi danh là Di sản văn hoá phi vật thể của nhân loại vào năm nào?",
    options: ["Năm 2003", "Năm 1999", "Năm 2010", "Năm 2018"],
    correct: 0,
    explain: "Vào ngày 7/11/2003, Nhã nhạc Cung đình triều Nguyễn (Huế) đã được UNESCO chính thức ghi danh là Kiệt tác Di sản văn hoá truyền khẩu và phi vật thể của nhân loại."
  },
  {
    id: 15,
    q: "Dàn 'Đại nhạc' trong Nhã nhạc Cung đình Huế biểu diễn ở đâu và có tính chất âm nhạc như thế nào?",
    options: [
      "Biểu diễn ngoài sân đình, âm lượng lớn, khí thế uy nghiêm, hùng dũng",
      "Biểu diễn trong điện kín, âm thanh êm dịu tao nhã",
      "Chỉ dành riêng cho các em nhỏ thiếu nhi vui chơi",
      "Chỉ sử dụng duy nhất một cây đàn bầu độc tấu"
    ],
    correct: 0,
    explain: "Đại nhạc biểu diễn ngoài trời/sân rước với nhạc cụ âm vang lớn như trống chiến, kèn bóp, xập xoã, tam âm la tạo không khí trang nghiêm, quyền uy."
  },
  {
    id: 16,
    q: "Thế bấm nốt Si giáng (Bb) trên sáo dọc (Recorder) hệ bấm Baroque chuẩn là gì?",
    options: [
      "Bịt lỗ 0 (ngón cái sau), bịt lỗ 1, mở lỗ 2, bịt lỗ 3 và lỗ 4",
      "Bịt tất cả các lỗ từ 0 đến 7",
      "Chỉ bịt duy nhất lỗ 0 và mở tất cả các lỗ phía trước",
      "Mở toàn bộ các lỗ trên thân sáo"
    ],
    correct: 0,
    explain: "Thế bấm nốt Si giáng (Bb) trên Recorder là: ngón cái tay trái bịt lỗ 0, ngón trỏ bịt lỗ 1, ngón giữa MỞ lỗ 2, ngón áp út bịt lỗ 3 và ngón trỏ tay phải bịt lỗ 4."
  },
  {
    id: 17,
    q: "Bài hát 'Ngôi nhà của chúng ta' (Chủ đề 5) mang thông điệp bảo vệ Trái Đất xanh do nhạc sĩ nào sáng tác?",
    options: ["Hình Phước Liên", "Trịnh Công Sơn", "Phong Nhã", "Bùi Đình Thảo"],
    correct: 0,
    explain: "'Ngôi nhà của chúng ta' là sáng tác của nhạc sĩ Hình Phước Liên, nhắc nhở thế hệ trẻ bảo vệ mái nhà chung Trái Đất."
  },
  {
    id: 18,
    q: "Bản concerto 'Mùa xuân' (Spring) trích từ bộ tác phẩm bất hủ 'Bốn mùa' (The Four Seasons) của nhà soạn nhạc thiên tài nào?",
    options: ["Antonio Vivaldi", "J.S. Bach", "W.A. Mozart", "L.v. Beethoven"],
    correct: 0,
    explain: "Tác phẩm 'Bốn mùa' (Le quattro stagioni) là kiệt tác khí nhạc đỉnh cao thời kì Baroque của nhà soạn nhạc người Ý Antonio Vivaldi sáng tác năm 1723."
  },
  {
    id: 19,
    q: "Hợp âm ba (Triad Chord) được cấu tạo từ bao nhiêu âm và sắp xếp theo quãng gì?",
    options: [
      "Gồm 3 âm xếp chồng lên nhau theo các quãng 3 liên tiếp",
      "Gồm 4 âm xếp cách nhau quãng 2",
      "Gồm 3 âm xếp cách nhau quãng 5",
      "Gồm 2 âm bất kì vang lên cùng lúc"
    ],
    correct: 0,
    explain: "Hợp âm ba gồm 3 âm: âm 1 (gốc), âm 3 và âm 5, xếp theo các quãng 3 liên tiếp (âm 1 lên âm 3 là quãng 3, âm 3 lên âm 5 là quãng 3)."
  },
  {
    id: 20,
    q: "Cấu tạo của Hợp âm Đô trưởng (kí hiệu C) gồm những nốt nào?",
    options: ["Đô - Mi - Sol (C - E - G)", "La - Đô - Mi (A - C - E)", "Rê - Pha - La (D - F - A)", "Sol - Si - Rê (G - B - D)"],
    correct: 0,
    explain: "Hợp âm C (Đô trưởng) gồm âm gốc Đô (C), âm ba Mi (E - tạo quãng 3 Trưởng 2 cung) và âm năm Sol (G - tạo quãng 3 Thứ 1.5 cung với Mi)."
  },
  {
    id: 21,
    q: "Phương pháp kí hiệu bàn tay đọc nhạc nốt nhạc (Hand Signs) được giới thiệu trong Bài đọc nhạc số 3 do nhà sư phạm âm nhạc nào sáng lập?",
    options: ["Zoltán Kodály (Hungary)", "Carl Orff (Đức)", "Émile Jaques-Dalcroze (Thuỵ Sĩ)", "Shinichi Suzuki (Nhật Bản)"],
    correct: 0,
    explain: "Nhà giáo dục và nhà soạn nhạc Hungary Zoltán Kodály đã hoàn thiện phương pháp đọc nhạc kết hợp ký hiệu bàn tay (Kodály Hand Signs) nổi tiếng khắp thế giới."
  },
  {
    id: 22,
    q: "Bài hát thiếu nhi quốc tế 'Nụ cười' (Chủ đề 6) trích từ bộ phim hoạt hình nào của Liên Xô?",
    options: [
      "Chú chuột chũi và chú gấu mèo nhỏ (Kroshka Enot)",
      "Hãy đợi đấy! (Nu, pogodi!)",
      "Cá vàng thông minh",
      "Bác thợ săn tí hon"
    ],
    correct: 0,
    explain: "Bài hát 'Nụ cười' (nhạc V. Shainsky, lời M. Plyatskovsky) trích từ phim hoạt hình 'Chú gấu mèo nhỏ' (Kroshka Enot - 1974), lời Việt của Phạm Tuyên."
  },
  {
    id: 23,
    q: "Đàn Đá là nhạc cụ gõ cổ xưa tiêu biểu của đồng bào các dân tộc vùng nào ở Việt Nam?",
    options: ["Tây Nguyên", "Đồng bằng sông Cửu Long", "Trung du Bắc Bộ", "Duyên hải Nam Trung Bộ"],
    correct: 0,
    explain: "Đàn đá (tiếng M'Nông gọi là Goong Lú) là nhạc cụ gõ tự nhiên bằng các phiến đá có niên đại hàng ngàn năm tại vùng núi Tây Nguyên hùng vĩ."
  },
  {
    id: 24,
    q: "Cần đàn rất dài, thùng đàn hình thang cân bịt da trăn/gỗ và có 3 dây tơ chùng là đặc điểm của nhạc cụ cổ truyền nào?",
    options: ["Đàn Đáy (Vô đề cầm)", "Đàn Nguyệt (Đàn Kìm)", "Đàn Tỳ bà", "Đàn Tam"],
    correct: 0,
    explain: "Đàn Đáy là nhạc cụ thuần Việt đặc sắc, gắn bó mật thiết với nghệ thuật Ca trù (Hát ả đào), tạo nên âm hưởng trầm đục, kín đáo và u tịch."
  },
  {
    id: 25,
    q: "Bài hát dân ca 'Donna Donna' (Chủ đề 7) có nguồn gốc xuất xứ từ nền văn hoá dân gian nào?",
    options: ["Dân ca Do Thái (Yiddish)", "Dân ca Nga", "Dân ca Pháp", "Dân ca Ý"],
    correct: 0,
    explain: "'Donna Donna' (ban đầu viết bằng tiếng Yiddish: Dana Dana) do Sholom Secunda sáng tác, thể hiện nỗi khát khao tự do và số phận đau thương của con người."
  },
  {
    id: 26,
    q: "Nhà soạn nhạc người Áo Franz Schubert được mệnh danh trong lịch sử âm nhạc thế giới là gì?",
    options: [
      "Vua của các ca khúc nghệ thuật (Lied)",
      "Vua điệu nhảy Waltz",
      "Vua đàn dương cầm",
      "Cha đẻ của nhạc kịch Opera"
    ],
    correct: 0,
    explain: "Franz Schubert (1797-1828) được suy tôn là 'Vua ca khúc' khi để lại hơn 600 bài hát nghệ thuật (Lied) trác tuyệt, trong đó có khúc *Serenade* bất hủ."
  },
  {
    id: 27,
    q: "Khúc nhạc chiều 'Serenade' của Franz Schubert nằm trong tập di cảo ca khúc nào xuất bản sau khi ông qua đời?",
    options: ["Bài ca thiên nga (Schwanengesang)", "Hành khúc Thổ Nhĩ Kỳ", "Mùa đông buốt giá", "Bản giao hưởng số 9"],
    correct: 0,
    explain: "Bản Serenade (Khúc ca chiều) tuyệt mĩ nằm trong tập ca khúc di cảo mang tên 'Bài ca thiên nga' (Schwanengesang D. 957) của Schubert."
  },
  {
    id: 28,
    q: "Bài đọc nhạc số 4 trong Chủ đề 7 trích từ tác phẩm nào của nhà soạn nhạc Nga P.I. Tchaikovsky?",
    options: [
      "Bài hát cổ nước Pháp (Old French Song - trích Album cho tuổi thơ)",
      "Hồ Thiên Nga (Swan Lake)",
      "Kẹp Hạt Dẻ (The Nutcracker)",
      "Người đẹp ngủ trong rừng"
    ],
    correct: 0,
    explain: "Bài đọc nhạc số 4 viết ở giọng La thứ (Am), trích từ tác phẩm thơ mộng 'Bài hát cổ nước Pháp' (Old French Song, Op. 39 No. 16) của Tchaikovsky."
  },
  {
    id: 29,
    q: "Bài hát 'Khi tóc thầy bạc trắng' (nghe nhạc Chủ đề 8) ngợi ca công ơn thầy cô là tác phẩm của nhạc sĩ nào?",
    options: ["Trần Đức", "Trịnh Công Sơn", "Phạm Trọng Cầu", "Hoàng Hiệp"],
    correct: 0,
    explain: "Ca khúc xúc động 'Khi tóc thầy bạc trắng' do nhạc sĩ Trần Đức sáng tác, bày tỏ lòng biết ơn sâu sắc đối với những người thầy người cô tận tụy."
  },
  {
    id: 30,
    q: "Bản nhạc 'Lưu thuỷ – Kim tiền' được luyện tập trên nhạc cụ Recorder và Kèn phím trong Chủ đề 4 thuộc thể loại nhạc nào?",
    options: [
      "Nhạc cổ truyền thính phòng / Nhã nhạc Cung đình Huế",
      "Nhạc giao hưởng thính phòng phương Tây",
      "Nhạc kịch hiện đại Broadway",
      "Dân ca hò chèo vùng đồng bằng sông Hồng"
    ],
    correct: 0,
    explain: "'Lưu thuỷ – Kim tiền' là liên khúc nhạc cung đình cổ truyền Huế nổi tiếng, được chuyển soạn để học sinh luyện bấm nốt Si giáng (Bb) trên Recorder và Kèn phím."
  }
];

module.exports = amnhac9ExamQuestions;
