// scratch/amnhac11_data_part2.js
// Âm nhạc 11 - Bộ sách Kết nối tri thức với cuộc sống
// Phần lựa chọn A (Hát 4 bài), Phần lựa chọn B (Guitar 6 bài), Bảng thuật ngữ & Đấu trường 20 câu

const vocal_options = [
  {
    id: "sing_b1",
    num: 1,
    title: "Bài 1. Kĩ thuật hát liền tiếng (legato)",
    badge: "Kĩ thuật Legato",
    objectives: [
      "Nắm vững khái niệm, đặc điểm và vai trò biểu cảm của kĩ thuật hát liền tiếng (legato).",
      "Thực hiện đúng tư thế giải phóng cơ thể, lấy hơi sâu từ cơ hoành và điều tiết luồng hơi đều đặn.",
      "Vận dụng thuần thục kĩ thuật legato vào ca khúc 'Ru con' (Mozart) và 'Bác Hồ một tình yêu bao la' (Thuận Yến)."
    ],
    sections: [
      {
        heading: "1. Khái niệm & Yêu cầu kĩ thuật Legato",
        type: "list",
        items: [
          "<strong>Khái niệm Legato:</strong> Là kĩ thuật thanh nhạc nền tảng, thực hiện nối các âm thanh một cách trơn tru, mềm mại, liên tục từ nốt này sang nốt khác tạo thành câu hát liền mạch, không bị đứt đoạn hay ngắc ngứ.",
          "<strong>Kí hiệu bản nhạc:</strong> Được kí hiệu bằng đường vòng cung nối liền các nốt nhạc khác cao độ (Slur), hoặc ghi rõ thuật ngữ chữ nghiêng <em>legato</em> ở đầu đoạn nhạc.",
          "<strong>Tư thế và hơi thở:</strong> Thả lỏng toàn bộ cơ mặt, khớp thái dương hàm và vùng cổ; miệng mở tròn tự nhiên; hít hơi sâu xuống đáy phổi (cơ hoành mở rộng); nén giữ hơi và đẩy ra một luồng hơi mảnh, đều, liên tục nâng đỡ chuỗi âm thanh.",
          "<strong>Mẫu luyện thanh cơ bản:</strong> Luyện mẫu âm ngân dài nguyên âm 'A', 'O', 'U' liền bậc 3 nốt (Đô - Rê - Mi - Rê - Đô) và 5 nốt (Đô - Rê - Mi - Pha - Son - Pha - Mi - Rê - Đô) ở tốc độ vừa phải."
        ]
      },
      {
        heading: "2. Thực hành tác phẩm tiêu biểu",
        type: "list",
        items: [
          "<strong>Tác phẩm 'Ru con' (Nhạc: W. A. Mozart, Lời Việt: Mai Khanh):</strong> Giai điệu du dương, êm ái, ngọt ngào như dải lụa; người hát cần đặt âm thanh nhẹ nhàng ở đầu câu, duy trì legato mượt mà từ nốt này sang nốt tiếp theo, lấy hơi nhẹ nhàng ở cuối mỗi vế câu.",
          "<strong>Tác phẩm 'Bác Hồ một tình yêu bao la' (Thuận Yến):</strong> Giai điệu sâu lắng, tôn kính và chứa chan cảm xúc; yêu cầu thể hiện những câu hát dài hơi liền mạch, rõ lời ca và ngân vang ấm áp.",
          "<strong>Vận dụng:</strong> Hát vocalise một câu không lời bằng nguyên âm 'A'; rèn luyện các bước nhảy quãng 4, quãng 5 mà không bị đứt luồng hơi."
        ]
      }
    ],
    quiz: [
      {
        q: "Kĩ thuật hát liền tiếng (legato) trong nghệ thuật thanh nhạc đòi hỏi điều cốt lõi nào ở luồng hơi?",
        options: [
          "Luồng hơi được điều tiết đều đặn, liên tục nâng đỡ các âm thanh nối tiếp nhau mềm mại không đứt quãng",
          "Hơi thở phải tống ra từng đợt giật cục thật mạnh",
          "Thở hắt ra nhanh để lấy hơi liên tục sau mỗi nốt nhạc",
          "Nín thở hoàn toàn không đẩy hơi"
        ],
        ans: 0,
        explain: "Cốt lõi của kĩ thuật legato là sự kiểm soát luồng hơi ổn định từ cơ hoành, đẩy ra một dòng khí đều đặn giúp các nốt nhạc kết nối trơn tru."
      },
      {
        q: "Kí hiệu thông dụng nhất trên bản nhạc biểu thị kĩ thuật hát liền tiếng (legato) là:",
        options: [
          "Đường vòng cung nối liền các nốt nhạc khác cao độ (hoặc chữ legato)",
          "Dấu chấm nhỏ đặt trên đầu mỗi nốt nhạc",
          "Dấu lặng đen liên tiếp",
          "Hai dấu gạch chéo song song"
        ],
        ans: 0,
        explain: "Đường vòng cung bao trùm các nốt nhạc (dấu luyến - slur) hoặc chữ legato ở đầu khuông nhạc là chỉ dẫn hát/chơi liền tiếng."
      },
      {
        q: "Trong ca khúc 'Bác Hồ một tình yêu bao la' của Thuận Yến, kĩ thuật legato giúp người hát biểu đạt tình cảm gì?",
        options: [
          "Sự thành kính sâu lắng, ấm áp và dạt dào niềm biết ơn Bác",
          "Khí thế hành quân dồn dập, giục giã",
          "Sự hài hước, châm biếm",
          "Cảm xúc hoang mang, sợ hãi"
        ],
        ans: 0,
        explain: "Legato trong tác phẩm này tạo nên những dải giai điệu tha thiết, tôn kính, đong đầy tình cảm yêu thương thiêng liêng đối với Chủ tịch Hồ Chí Minh."
      }
    ]
  },

  {
    id: "sing_b2",
    num: 2,
    title: "Bài 2. Kĩ thuật hát lướt nhanh (passage)",
    badge: "Kĩ thuật Passage",
    objectives: [
      "Hiểu rõ khái niệm và đặc tính kĩ thuật của việc hát các chuỗi nốt lướt nhanh (passage).",
      "Rèn luyện sự linh hoạt của môi, lưỡi, thanh đới và phản xạ phát âm nhả chữ nhanh gọn.",
      "Trình bày chuẩn xác ca khúc 'Nét phấn thân thương' (Nguyễn Văn Hiên) và 'Mùa xuân đến rồi đó' (Trần Chung)."
    ],
    sections: [
      {
        heading: "1. Khái niệm & Phương pháp rèn luyện Passage",
        type: "list",
        items: [
          "<strong>Khái niệm Passage:</strong> Là kĩ thuật hát chuỗi âm thanh di chuyển nhanh, linh hoạt, rõ ràng từng nốt và sáng tiếng ở nhịp độ nhanh (Allegro, Presto); thường gặp trong các ca khúc rộn ràng, sôi nổi, trẻ trung hoặc kịch tính.",
          "<strong>Cách luyện tập hiệu quả:</strong>\n• Khởi đầu ở tốc độ thật chậm (Lento/Andante), hát tròn từng nốt và rõ từng phụ âm ca từ.\n• Cơ hàm và lưỡi luôn trong trạng thái mềm mại, tuyệt đối không gồng cứng cuống họng.\n• Dùng máy đập nhịp (Metronome) tăng dần từng nấc tốc độ khi độ chuẩn xác đã được đảm bảo.\n• Giữ cột hơi vững vàng bên dưới cơ hoành, không được ép giọng hay đẩy hơi thừa ở các nốt cao.",
          "<strong>Mẫu âm luyện thanh:</strong> Luyện chuỗi nốt móc kép chạy bậc 5 nốt và chạy gam arpeggio đi lên đi xuống nhanh dần với các nguyên âm 'I - E - A'."
        ]
      },
      {
        heading: "2. Tác phẩm thực hành",
        type: "list",
        items: [
          "<strong>'Nét phấn thân thương' (Nguyễn Văn Hiên):</strong> Ca khúc ngợi ca nghề giáo viên và mái trường thân yêu với tiết tấu đảo phách vui tươi; người hát cần nhả chữ nhanh, dứt khoát, bắt nhịp chuẩn xác ở phách lấy đà.",
          "<strong>'Mùa xuân đến rồi đó' (Trần Chung):</strong> Khúc ca rộn rã, căng tràn nhựa sống thanh xuân; đòi hỏi người hát xử lí các chuỗi nốt chạy nhanh liền bậc và những bước nhảy quãng trong tâm thế tự tin, hào sảng."
        ]
      }
    ],
    quiz: [
      {
        q: "Kĩ thuật hát lướt nhanh (passage) thường được sử dụng trong các tác phẩm âm nhạc mang tính chất biểu cảm nào?",
        options: [
          "Tươi sáng, vui tươi, linh hoạt, sôi nổi hoặc kịch tính",
          "Ru ngủ êm đềm, chậm rãi, buồn ngủ",
          "Tang lễ u uất, than khóc",
          "Trầm mặc, u tịch không có chuyển động"
        ],
        ans: 0,
        explain: "Passage là kĩ thuật chạy nốt nhanh lấp lánh, rất phổ biến trong các tác phẩm vui nhộn, tràn đầy năng lượng, sức sống thanh xuân hoặc hoan ca."
      },
      {
        q: "Nguyên tắc luyện tập cốt lõi khi bắt đầu rèn luyện kĩ thuật hát passage là:",
        options: [
          "Tập ở tốc độ thật chậm trước để định hình cao độ và nhả chữ rõ ràng, sau đó mới tăng dần tốc độ",
          "Hát ngay ở tốc độ nhanh nhất có thể từ buổi đầu tiên",
          "Hát thì thào không ra tiếng",
          "Gồng chặt cơ hàm và cổ họng"
        ],
        ans: 0,
        explain: "Quy tắc vàng của passage là 'chậm để chắc': tập chậm để định vị cao độ và giải phóng cơ mặt, sau đó mới tăng tốc dần dần."
      },
      {
        q: "Khi thực hiện chuỗi nốt lướt nhanh, hiện tượng lỗi phổ biến nhất người học cần tránh là:",
        options: [
          "Dính chữ, mờ nốt, phô cao độ do cơ hàm bị cứng và luồng hơi không kiểm soát",
          "Phát âm quá to rõ ràng từng từ",
          "Lấy hơi quá sâu ở cơ hoành",
          "Đứng thẳng lưng tự nhiên"
        ],
        ans: 0,
        explain: "Khi hát nhanh, nếu bị căng cứng cơ hàm hoặc thiếu kiểm soát hơi, các nốt sẽ bị trượt dính vào nhau thành một chuỗi âm thanh nhòe và chênh phô."
      }
    ]
  },

  {
    id: "sing_b3",
    num: 3,
    title: "Bài 3. Kĩ thuật hát nảy tiếng (staccato)",
    badge: "Kĩ thuật Staccato",
    objectives: [
      "Nắm vững bản chất kĩ thuật hát nảy tiếng (staccato) và sự phối hợp giữa cơ hoành với dây thanh.",
      "So sánh, phân biệt rạch ròi giữa kĩ thuật hát liền tiếng (legato) và nảy tiếng (staccato).",
      "Biểu diễn sinh động bài dân ca 'Trống cơm' và ca khúc 'Rừng xanh vang tiếng ta lư' (Phương Nam)."
    ],
    sections: [
      {
        heading: "1. Khái niệm & Cơ chế phát âm Staccato",
        type: "list",
        items: [
          "<strong>Khái niệm Staccato:</strong> Là kĩ thuật bật âm thanh ngắn, dứt khoát, gọn gàng, tách biệt giữa các nốt nhạc; trường độ âm thanh thực tế chỉ ngân vang khoảng một nửa giá trị nốt ghi trên bản phổ, nửa còn lại là khoảng lặng ngắt âm.",
          "<strong>Kí hiệu âm nhạc:</strong> Được biểu thị bằng một dấu chấm nhỏ đặt ngay phía trên hoặc phía dưới đầu nốt nhạc (không nhầm với dấu chấm dôi bên cạnh nốt).",
          "<strong>Cơ chế hơi thở & Cơ hoành:</strong> Cơ bụng và cơ hoành nảy nhịp nhàng, giật nhẹ vào trong khi phát âm; hai dây thanh khép mở dứt khoát như tiếng gõ; cơ mặt và hàm dưới hoàn toàn thả lỏng.",
          "<strong>Hiệu quả biểu cảm:</strong> Mô phỏng tiếng gõ trống, giọt mưa rơi, tiếng chim hót líu lo, tiếng cười giòn giã hoặc sự tinh nghịch, hoạt bát."
        ]
      },
      {
        heading: "2. Thực hành ca khúc & So sánh Legato vs Staccato",
        type: "list",
        items: [
          "<strong>Dân ca Bắc Bộ 'Trống cơm':</strong> Giai điệu rộn rã, tưng bừng; các tiếng 'tình bằng có một búp sen...', 'khen ai khéo vỗ ối bông mà nên trống cơm' bật âm nảy tiếng rộn ràng như tiếng dùi gõ trên mặt trống da.",
          "<strong>'Rừng xanh vang tiếng ta lư' (Phương Nam):</strong> Tinh thần lạc quan cách mạng của đồng bào Pa-cô; mô phỏng tiếng đàn Ta-lư lảnh lót giữa núi rừng đại ngàn bằng những nốt staccato trong vắt.",
          "<strong>Bảng so sánh cốt lõi:</strong>\n• <em>Legato:</em> Nối âm liền mạch, mềm mại, trường độ ngân trọn vẹn, hơi thở đẩy ra êm dịu kéo dài.\n• <em>Staccato:</em> Âm thanh tách rời, dứt khoát, trường độ bị cắt ngắn 1/2, cơ hoành bật nảy từng đợt nhanh gọn."
        ]
      }
    ],
    quiz: [
      {
        q: "Khi thể hiện nốt nhạc có kí hiệu staccato (dấu chấm trên đầu nốt), trường độ âm thanh thực tế ngân vang khoảng bao nhiêu?",
        options: [
          "Khoảng một nửa (1/2) trường độ của nốt đó, phần còn lại là khoảng ngắt âm ngắn",
          "Ngân dài gấp đôi trường độ bình thường",
          "Ngân trọn vẹn 100% không có khoảng ngắt",
          "Kéo dài vô tận tuỳ thích"
        ],
        ans: 0,
        explain: "Quy ước âm nhạc chuẩn cho staccato là âm thanh chỉ vang lên khoảng 1/2 giá trị trường độ nốt, nửa còn lại là khoảng lặng để tạo sự tách biệt dứt khoát."
      },
      {
        q: "Bộ phận cơ thể đóng vai trò 'bơm và nảy luồng hơi' chủ đạo trong kĩ thuật hát staccato là:",
        options: [
          "Cơ bụng và cơ hoành (bật nảy nhẹ nhàng, dứt khoát)",
          "Hai bả vai (giơ lên hạ xuống)",
          "Khớp hàm dưới (cắn chặt lại)",
          "Đầu ngón tay"
        ],
        ans: 0,
        explain: "Cơ hoành đóng vai trò xung lực chính: sự co giật nhịp nhàng của cơ hoành tạo nên những luồng khí ngắn, bật dứt khoát giúp tạo âm staccato nảy gọn."
      },
      {
        q: "Trong bài dân ca 'Trống cơm', kĩ thuật hát staccato được sử dụng nhằm mục đích mô phỏng hình tượng âm thanh gì?",
        options: [
          "Tiếng dùi gõ nhịp nhàng, giòn giã trên mặt trống cơm",
          "Tiếng sấm sét rền vang bão tố",
          "Tiếng suối chảy rì rào êm đềm",
          "Tiếng chuông chùa ngân nga buổi chiều"
        ],
        ans: 0,
        explain: "Các nốt nảy tiếng giòn tan trong 'Trống cơm' mô phỏng tiếng vỗ trống cơm bập bùng, rộn rã trong các ngày hội làng truyền thống."
      }
    ]
  },

  {
    id: "sing_b4",
    num: 4,
    title: "Bài 4. Kĩ thuật hát luyến âm",
    badge: "Kĩ thuật Luyến âm",
    objectives: [
      "Hiểu rõ khái niệm luyến âm, phân biệt giữa kĩ thuật hát luyến âm và kĩ thuật hát liền tiếng (legato).",
      "Nắm vững kĩ thuật luyến mềm mại, giữ đúng cao độ và không làm sai lệch dấu thanh điệu tiếng Việt.",
      "Thể hiện tinh tế chất liệu dân ca trong 'Tình ca Tây Nguyên' (Hoàng Vân) và 'Lời ca dâng Bác' (Trọng Loan)."
    ],
    sections: [
      {
        heading: "1. Khái niệm & Phân biệt Luyến âm vs Liền tiếng",
        type: "list",
        items: [
          "<strong>Khái niệm Luyến âm (Melisma / Portamento):</strong> Là kĩ thuật hát <strong>một âm tiết (một ca từ) đi qua hai hay nhiều cao độ khác nhau</strong> một cách mềm mại, trơn tru, không ngắt quãng.",
          "<strong>Kí hiệu bản nhạc:</strong> Dấu vòng cung nối hai hoặc nhiều nốt nhạc khác cao độ nằm trên cùng một ca từ lời ca.",
          "<strong>Phân biệt sống còn giữa Luyến âm và Liền tiếng (Legato):</strong>\n• <em>Liền tiếng (Legato):</em> Là phương thức nối âm từ nốt này sang nốt khác (mỗi nốt có thể mang một ca từ riêng biệt, ví dụ: 'Mùa' (nốt Đô) nối sang 'xuân' (nốt Mi)).\n• <em>Luyến âm:</em> Bắt buộc chỉ có <strong>duy nhất MỘT ca từ</strong> nhưng được hát trải dài qua 2, 3, 4 nốt nhạc (ví dụ: chỉ một từ 'Ơi' nhưng luyến qua Đô - Mi - Son). Luyến âm thường đòi hỏi legato, nhưng legato không đồng nghĩa với luyến âm.",
          "<strong>Quy tắc thanh điệu tiếng Việt:</strong> Tiếng Việt là ngôn ngữ đơn âm và có 6 thanh điệu; khi hát luyến cần phát âm rõ phụ âm đầu, nương theo đường nét dấu giọng để không biến âm (như từ 'sông' luyến không khéo thành 'sống' hoặc 'sổng')."
        ]
      },
      {
        heading: "2. Thực hành tác phẩm tiêu biểu",
        type: "list",
        items: [
          "<strong>'Tình ca Tây Nguyên' (Hoàng Vân):</strong> Âm hưởng đại ngàn hùng vĩ, phóng khoáng; những nét luyến âm bay bổng thể hiện tiếng chim Chơ-rao chao liệng và tình yêu bao la với buôn làng rừng núi.",
          "<strong>'Lời ca dâng Bác' (Trọng Loan):</strong> Mang đậm chất liệu dân ca Ví, Giặm miền Trung; những nét luyến ba, luyến tư sâu lắng, ngọt ngào, kính cẩn dâng lên Người cha già kính yêu."
        ]
      }
    ],
    quiz: [
      {
        q: "Bản chất của kĩ thuật 'hát luyến âm' trong nghệ thuật thanh nhạc là:",
        options: [
          "Một âm tiết (một ca từ) được hát trải dài qua hai hay nhiều cao độ khác nhau",
          "Hát mỗi nốt một chữ thật nhanh",
          "Hát ngân một nốt duy nhất trong 20 giây",
          "Chuyển đổi liên tục giữa giọng nam và giọng nữ"
        ],
        ans: 0,
        explain: "Luyến âm là kĩ thuật trong đó duy nhất một ca từ/âm tiết được cất lên và dẫn dắt lướt qua nhiều nốt nhạc khác nhau."
      },
      {
        q: "Điểm khác biệt cốt lõi giữa 'hát liền tiếng' (legato) và 'hát luyến âm' là gì?",
        options: [
          "Liền tiếng là cách nối các nốt nhạc mượt mà (mỗi nốt có thể mang lời ca riêng); còn luyến âm là MỘT lời ca trải qua nhiều nốt nhạc",
          "Liền tiếng chỉ hát nốt thấp, còn luyến âm chỉ hát nốt cao",
          "Hai kĩ thuật này hoàn toàn là một, không có điểm nào khác nhau",
          "Liền tiếng chỉ dùng cho nhạc nhẹ, luyến âm chỉ dùng cho nhạc Tây Ban Nha"
        ],
        ans: 0,
        explain: "Legato nói về cách kết nối luồng hơi giữa các nốt; còn Luyến âm nói về mối quan hệ giữa MỘT âm tiết lời ca gắn với NHIỀU nốt nhạc liên tiếp."
      },
      {
        q: "Khi hát luyến âm trong ca khúc tiếng Việt, điều tối kị người hát cần tránh là:",
        options: [
          "Luyến tuỳ tiện làm sai lệch thanh điệu (dấu giọng) và làm biến đổi ý nghĩa của từ",
          "Phát âm rõ ràng phụ âm đầu",
          "Điều tiết hơi thở đều đặn từ cơ hoành",
          "Hát đúng cao độ các nốt luyến ghi trong bản nhạc"
        ],
        ans: 0,
        explain: "Do tiếng Việt có thanh điệu phức tạp, luyến sai hoặc luyến cẩu thả sẽ làm thay đổi dấu giọng khiến người nghe hiểu sai lệch nghĩa ca từ."
      }
    ]
  }
];

const guitar_options = [
  {
    id: "gui_b1",
    num: 1,
    title: "Bài 1. Kĩ thuật bấm, gảy liền tiếng",
    badge: "Guitar Legato",
    objectives: [
      "Nắm vững kĩ thuật bấm và gảy đàn liền tiếng (legato) trên đàn guitar cổ điển.",
      "Duy trì độ vang liên tục của dây đàn, không bị ngắt tiếng hay rè phím khi chuyển ngón.",
      "Diễn tấu thuần thục trích đoạn bản dân ca Anh kinh điển 'Greensleeves'."
    ],
    sections: [
      {
        heading: "1. Nguyên lí kĩ thuật Legato trên Guitar",
        type: "list",
        items: [
          "<strong>Quy tắc tay trái (Bấm phím):</strong> Ngón tay bấm phải giữ chắc trên phím đàn cho đến tận khoảnh khắc ngón tiếp theo bấm xuống phím mới; không nhấc ngón tay bấm lên quá sớm làm cụt tiếng.",
          "<strong>Quy tắc tay phải (Gảy dây):</strong> Dùng thịt đầu ngón tay kết hợp cạnh móng gảy dứt khoát; các ngón luân phiên (i - m) hoặc (p - i - m); lực gảy vừa phải để tiếng đàn vang tròn ấm áp.",
          "<strong>Kí hiệu ngón tay theo quy ước quốc tế:</strong>\n• Tay phải: <strong>p</strong> (ngón cái - pouce), <strong>i</strong> (ngón trỏ - index), <strong>m</strong> (ngón giữa - majeur), <strong>a</strong> (ngón áp út - anulaire).\n• Tay trái: Số 1 (ngón trỏ), Số 2 (ngón giữa), Số 3 (ngón áp út), Số 4 (ngón út)."
        ]
      },
      {
        heading: "2. Thực hành tác phẩm 'Greensleeves' (Dân ca Anh)",
        type: "list",
        items: [
          "<strong>Xuất xứ:</strong> Bản tình ca dân gian Anh thế kỉ XVI nổi tiếng thế giới, chuyển soạn công phu cho đàn guitar bởi Quang Tùng – Xuân Cung.",
          "<strong>Dấu hoá cần chú ý:</strong> Bản nhạc có sử dụng các nốt Fa thăng (F♯) ở dây 1 ngăn 2 và Sol thăng (G♯) ở dây 3 ngăn 1.",
          "<strong>Yêu cầu biểu cảm:</strong> Diễn tấu giai điệu du dương, u buồn, nhịp nhàng êm ái ở nhịp 3/4 hoặc 6/8."
        ]
      }
    ],
    quiz: [
      {
        q: "Theo quy ước ngón tay bấm guitar quốc tế, chữ cái 'p' ở bàn tay phải chỉ ngón tay nào?",
        options: [
          "Ngón cái (pouce)",
          "Ngón trỏ (index)",
          "Ngón giữa (majeur)",
          "Ngón áp út (anulaire)"
        ],
        ans: 0,
        explain: "Quy ước ngón tay phải guitar cổ điển: p = ngón cái, i = ngón trỏ, m = ngón giữa, a = ngón áp út."
      },
      {
        q: "Để tạo âm thanh 'liền tiếng' (legato) trên guitar, tay trái người chơi cần thực hiện kĩ thuật gì?",
        options: [
          "Giữ ngón tay bấm ở phím đàn cho đến khi ngón tiếp theo bấm xuống, không nhấc ngón sớm",
          "Nhấc ngay ngón tay lên thật nhanh ngay khi vừa gảy",
          "Dùng lòng bàn tay bịt chặt tất cả các dây",
          "Chỉ gảy các dây buông không cần bấm phím"
        ],
        ans: 0,
        explain: "Legato trên đàn dây đòi hỏi ngón bấm giữ trọn vẹn trường độ nốt cho tới khi nốt tiếp theo bắt đầu ngân vang."
      },
      {
        q: "Trong tác phẩm dân ca Anh 'Greensleeves', nốt Fa thăng (F♯) trên đàn guitar nằm ở vị trí nào?",
        options: [
          "Dây 1 (dây Mi cao), ngăn phím thứ 2",
          "Dây 6 (dây Mi trầm), ngăn phím thứ 5",
          "Dây 2 (dây Si), ngăn phím thứ 1",
          "Dây 4 (dây Rê), buông"
        ],
        ans: 0,
        explain: "Dây 1 buông là nốt Mi; bấm ngăn 1 là nốt Fa; bấm ngăn 2 chính là nốt Fa thăng (F♯)."
      }
    ]
  },

  {
    id: "gui_b2",
    num: 2,
    title: "Bài 2. Kĩ thuật bấm, gảy rời tiếng",
    badge: "Guitar Non-legato",
    objectives: [
      "Hiểu rõ bản chất kĩ thuật bấm, gảy rời tiếng (non-legato / staccato) trên guitar.",
      "Kiểm soát kĩ thuật chặn tắt âm (damping) bằng ngón tay trái hoặc cùi tay phải.",
      "Thực hành trích đoạn 'Tiếng chày trên sóc Bom Bo' (Xuân Hồng) và 'Con kênh xanh xanh' (Ngô Huỳnh)."
    ],
    sections: [
      {
        heading: "1. Kĩ thuật gảy rời tiếng (Non-legato)",
        type: "list",
        items: [
          "<strong>Khái niệm:</strong> Các nốt nhạc được phát ra tách biệt rõ ràng, giữa hai nốt có một khoảng ngắt âm ngắn; âm thanh dứt khoát, rộn ràng, có tính nảy nhịp điệu sinh động.",
          "<strong>Cách thực hiện chặn tắt âm:</strong>\n• Tay trái: Nhả nhẹ lực bấm khỏi phím ngay sau khi gảy nhưng đầu ngón tay vẫn chạm nhẹ trên dây để triệt tiêu độ rung.\n• Tay phải: Dùng mép thịt của ngón tay chuẩn bị gảy nốt tiếp theo chạm sớm vào dây để ngắt âm nốt trước."
        ]
      },
      {
        heading: "2. Thực hành tác phẩm tiêu biểu",
        type: "list",
        items: [
          "<strong>'Tiếng chày trên sóc Bom Bo' (Xuân Hồng):</strong> Tiết tấu dồn dập, tươi vui; kĩ thuật rời tiếng mô phỏng âm thanh tiếng chày giã gạo nhịp nhàng đêm ngày của đồng bào S’tiêng phục vụ bộ đội giải phóng.",
          "<strong>'Con kênh xanh xanh' (Ngô Huỳnh):</strong> So sánh nét nhạc chơi liền tiếng êm ả như dòng nước với nét nhạc rời tiếng rộn rã khi con thuyền lướt sóng."
        ]
      }
    ],
    quiz: [
      {
        q: "Kĩ thuật gảy rời tiếng (non-legato) trên đàn guitar khác với liền tiếng ở điểm nào?",
        options: [
          "Giữa các nốt có một khoảng ngắt ngắn, âm thanh tách rời dứt khoát không ngân dính vào nhau",
          "Tiếng đàn phải thật rè và méo tiếng",
          "Chỉ được chơi bằng móng tay cái",
          "Phải đổi đàn khác sau mỗi ô nhịp"
        ],
        ans: 0,
        explain: "Non-legato tạo khoảng ngắt ngắn giữa các nốt bằng kĩ thuật chặn tắt âm nhẹ, mang lại cảm giác giòn giã, tách bạch."
      },
      {
        q: "Để ngắt tiếng một nốt nhạc bằng tay trái trên phím đàn, người chơi thực hiện thao tác nào?",
        options: [
          "Nhả lỏng lực bấm của ngón tay nhưng ngón vẫn giữ tiếp xúc nhẹ trên dây đàn",
          "Giật mạnh bàn tay ra xa cần đàn",
          "Bấm thật mạnh hết sức vào thanh kim loại",
          "Đập cả bàn tay vào thùng đàn"
        ],
        ans: 0,
        explain: "Nhả nhẹ lực ấn nhưng ngón vẫn chạm nhẹ bề mặt dây giúp dập tắt dao động của dây đàn ngay tức khắc mà không tạo tiếng rè."
      },
      {
        q: "Trong tác phẩm 'Tiếng chày trên sóc Bom Bo', kĩ thuật gảy rời tiếng mô phỏng hình tượng nào?",
        options: [
          "Âm thanh tiếng chày giã gạo rộn ràng, dứt khoát trong đêm",
          "Tiếng lá rơi rụng mùa thu",
          "Tiếng còi tàu hoả từ xa",
          "Tiếng sóng biển gầm thét"
        ],
        ans: 0,
        explain: "Tiếng đàn guitar gảy rời tiếng dứt khoát tái hiện sống động nhịp điệu tiếng chày giã gạo nuôi quân khẩn trương, hào hứng."
      }
    ]
  },

  {
    id: "gui_b3",
    num: 3,
    title: "Bài 3. Kĩ thuật gảy hai ngón trên một dây",
    badge: "Luân phiên i - m",
    objectives: [
      "Thực hiện chuẩn xác kĩ thuật luân phiên ngón trỏ (i) và ngón giữa (m) liên tục trên cùng một dây đàn.",
      "Phối hợp ngón cái (p) giữ bè bass trầm với các ngón i - m chơi giai điệu đều đặn.",
      "Diễn tấu biểu cảm khúc nhạc 'Làng tôi' của cố nhạc sĩ Văn Cao."
    ],
    sections: [
      {
        heading: "1. Kĩ thuật luân phiên i - m (Alternating fingers)",
        type: "list",
        items: [
          "<strong>Nguyên tắc sống còn:</strong> Tuyệt đối không dùng một ngón tay gảy liên tiếp hai lần trên cùng một dây khi chơi chuỗi nốt nhanh; phải luôn luân phiên đều đặn: <strong>i – m – i – m</strong> (hoặc m – i – m – i).",
          "<strong>Tư thế cổ tay & Khớp ngón:</strong> Cổ tay giữ thẳng, thư giãn; chuyển động phát lực xuất phát từ khớp gốc ngón tay (gần bàn tay), không gập ngón tay lại thành móc câu.",
          "<strong>Ngón cái (p) độc lập:</strong> Ngón cái gảy hướng chếch ra ngoài để không va chạm vào đường di chuyển của ngón trỏ và ngón giữa."
        ]
      },
      {
        heading: "2. Thực hành tác phẩm 'Làng tôi' (Văn Cao)",
        type: "list",
        items: [
          "<strong>Xuất xứ:</strong> Tuyệt phẩm trữ tình kháng chiến của nhạc sĩ <strong>Văn Cao</strong>, chuyển soạn độc tấu guitar bởi nghệ sĩ Lê Đức Sơn.",
          "<strong>Yêu cầu biểu diễn:</strong> Tái hiện không gian làng quê Việt Nam thanh bình bên bóng tre xanh và tiếng chuông chùa ban chiều; giai điệu bay bổng, luân phiên ngón mượt mà, nhấn bass trầm sâu lắng."
        ]
      }
    ],
    quiz: [
      {
        q: "Quy tắc cơ bản nhất của kĩ thuật gảy nốt nhanh trên một dây đàn guitar là:",
        options: [
          "Luôn luân phiên hai ngón tay (i - m - i - m), không dùng một ngón gảy liên tiếp",
          "Chỉ dùng duy nhất ngón út gảy",
          "Gảy tất cả các nốt bằng ngón cái",
          "Dùng cả bàn tay cào lên dây"
        ],
        ans: 0,
        explain: "Quy tắc 'đi bộ bằng hai chân': luân phiên i - m giúp tăng tốc độ tối đa, tiết kiệm thể lực và giữ cho âm thanh đều đặn."
      },
      {
        q: "Khi ngón trỏ (i) và ngón giữa (m) đang chạy giai điệu trên dây cao, ngón cái (p) thường đảm nhận vai trò gì?",
        options: [
          "Gảy các nốt bè trầm (Bass) ở các dây 4, 5, 6 tạo nền hoà âm",
          "Bịt tai người chơi",
          "Gõ vào cần đàn tạo tiếng động",
          "Bấm phím trên cần đàn"
        ],
        ans: 0,
        explain: "Ngón cái p phụ trách các dây trầm 4, 5, 6 (dây bass), giữ nhịp và tạo nền tảng hòa thanh vững chắc cho giai điệu phía trên."
      },
      {
        q: "Lỗi sai kĩ thuật thường gặp nhất khiến tốc độ chạy ngón i - m bị hạn chế là:",
        options: [
          "Cổ tay bị gồng cứng và ngón tay bị lặp lại (dùng một ngón gảy 2 lần liên tiếp)",
          "Thả lỏng bàn tay quá mức",
          "Móng tay được tỉa giũa gọn gàng",
          "Ngồi đúng tư thế ôm đàn"
        ],
        ans: 0,
        explain: "Gồng cứng khớp ngón và thói quen lặp ngón là rào cản lớn nhất cản trở sự linh hoạt và độ mượt mà khi chạy ngón guitar."
      }
    ]
  },

  {
    id: "gui_b4",
    num: 4,
    title: "Bài 4. Kĩ thuật chặn bằng tay trái (Barre chord)",
    badge: "Kĩ thuật Barre",
    objectives: [
      "Hiểu rõ cơ chế và cấu tạo của kĩ thuật bấm chặn (Barre) bằng ngón trỏ tay trái.",
      "Tập luyện lực bấm đều đặn, không để dây đàn bị tịt hoặc rè phím.",
      "Chinh phục bài luyện ngón giọng Si thứ của danh cầm F. Sor."
    ],
    sections: [
      {
        heading: "1. Kĩ thuật bấm chặn (Barre)",
        type: "list",
        items: [
          "<strong>Khái niệm Barre:</strong> Là kĩ thuật dùng <strong>ngón trỏ tay trái (ngón 1) duỗi thẳng, chặn ngang đồng thời từ 2 đến 6 dây trên cùng một ngăn phím</strong>, hoạt động tương tự như một chiếc kẹp capo di động.",
          "<strong>Bí quyết thực hiện chuẩn:</strong>\n• Không dùng mặt thịt mềm của ngón trỏ ép thẳng; hơi nghiêng nhẹ ngón trỏ sang phía cạnh ngoài (phía ngón cái) nơi có phần xương cứng cáp hơn để tiếp xúc dây.\n• Ngón cái tay trái đặt ở khoảng giữa phía sau cần đàn làm điểm tựa đối lực; dùng lực đòn bẩy của cả cánh tay kéo nhẹ về phía sau, không bóp nghiến cổ tay.\n• Ngón trỏ đặt sát thanh kim loại phân chia ngăn phím (phret wire) để lực bấm nhẹ nhất mà tiếng vang sạch nhất.",
          "<strong>Phân loại:</strong> Bấm nửa chặn (chặn 2 - 4 dây) và Bấm toàn chặn (chặn trọn vẹn cả 6 dây đàn)."
        ]
      },
      {
        heading: "2. Thực hành trích đoạn Etude Si thứ (F. Sor)",
        type: "list",
        items: [
          "<strong>Tác giả:</strong> <strong>Fernando Sor</strong> (1778 – 1839) - nhà soạn nhạc và danh cầm guitar vĩ đại người Tây Ban Nha, được mệnh danh là 'Beethoven của cây đàn guitar'.",
          "<strong>Bài luyện ngón giọng Si thứ (B minor):</strong> Yêu cầu thế bấm chặn Bm ở ngăn 2; chú ý các nốt biến hoá Fa♯, Đô♯, Mi♯, La♯.",
          "<strong>Tiêu chuẩn:</strong> Khi gảy từng dây đơn lẻ trong thế hợp âm chặn, tất cả 6 dây đều phải phát ra tiếng vang trong trẻo, sạch sẽ, không rè."
        ]
      }
    ],
    quiz: [
      {
        q: "Kĩ thuật bấm chặn (Barre) trên đàn guitar được thực hiện chủ yếu bằng ngón tay nào của bàn tay trái?",
        options: [
          "Ngón trỏ (ngón 1) duỗi thẳng ép ngang qua các dây đàn",
          "Ngón cái (ngón p)",
          "Ngón út (ngón 4)",
          "Ngón áp út (ngón 3)"
        ],
        ans: 0,
        explain: "Kĩ thuật Barre sử dụng ngón trỏ tay trái duỗi thẳng để chặn ngang các dây trên cùng một ngăn phím."
      },
      {
        q: "Mẹo kĩ thuật quan trọng giúp ngón trỏ bấm chặn sạch tiếng và đỡ mỏi tay nhất là:",
        options: [
          "Hơi nghiêng cạnh ngoài của ngón trỏ áp vào dây và đặt ngón sát cạnh thanh phím kim loại",
          "Gập ngón trỏ cong queo lại",
          "Dùng ngón tay cái bóp nghến thật chặt vào cần đàn",
          "Đặt ngón tay lùi hẳn về phía ngăn phím trước"
        ],
        ans: 0,
        explain: "Cạnh ngoài ngón trỏ có lớp xương cứng hơn mặt thịt trong, kết hợp với vị trí sát thanh kim loại giúp dây đàn tiếp xúc tối ưu mà không tốn nhiều sức."
      },
      {
        q: "Nhà soạn nhạc và nghệ sĩ guitar cổ điển lừng danh người Tây Ban Nha, tác giả của nhiều bài luyện ngón kinh điển là ai?",
        options: [
          "Fernando Sor",
          "Johann Sebastian Bach",
          "Frédéric Chopin",
          "Antonio Vivaldi"
        ],
        ans: 0,
        explain: "Fernando Sor (1778 - 1839) là cây đại thụ của guitar cổ điển Tây Ban Nha với kho tàng Etude mẫu mực cho người học guitar toàn cầu."
      }
    ]
  },

  {
    id: "gui_b5",
    num: 5,
    title: "Bài 5. Cách đệm tiết điệu Slow",
    badge: "Điệu Slow 6/8 & 4/4",
    objectives: [
      "Nắm vững âm hình tiết tấu và kĩ thuật rải hợp âm (Arpeggio) của tiết điệu Slow ở nhịp 6/8 và nhịp 4/4.",
      "Thực hiện chuyển đổi hợp âm nhịp nhàng, duy trì nốt chung để tiếng đàn không bị đứt quãng.",
      "Đệm hát thành công ca khúc 'Màu hoa đỏ' (Thuận Yến) và 'Người thầy' (Nguyễn Nhất Huy)."
    ],
    sections: [
      {
        heading: "1. Tiết điệu Slow & Mô hình rải hợp âm",
        type: "list",
        items: [
          "<strong>Đặc điểm tiết điệu Slow:</strong> Nhịp điệu chậm rãi, tha thiết, trữ tình, sâu lắng; rất phù hợp với các ca khúc tự sự, hoài niệm, ca ngợi tình yêu quê hương đất nước hoặc thầy cô mái trường.",
          "<strong>Tiết điệu Slow Rock / Slow nhịp 6/8:</strong>\n• Một ô nhịp có 6 phách móc đơn chia làm 2 nhóm trọng âm: Phách 1 mạnh, phách 4 mạnh vừa.\n• Âm hình rải tiêu chuẩn: <strong>Bass – 3 – 2 – 1 – 2 – 3</strong> (Ngón cái gảy Bass, ngón trỏ dây 3, ngón giữa dây 2, ngón áp út dây 1 rồi rải ngược lại dây 2, dây 3).",
          "<strong>Tiết điệu Slow Surf / Pop Ballad nhịp 4/4:</strong>\n• Âm hình rải 8 nốt móc đơn: <strong>Bass – 3 – 2 – 3 – 1 – 3 – 2 – 3</strong>.",
          "<strong>Kĩ thuật chuyển hợp âm có nốt chung:</strong> Khi chuyển giữa các hợp âm (ví dụ từ Am sang Fmaj7 hoặc từ C sang Am), giữ nguyên ngón tay đang bấm nốt chung làm bản lề, chỉ di chuyển các ngón còn lại; điều này giúp tiết kiệm thời gian chuyển thế tay và tránh ngắt tiếng bass."
        ]
      },
      {
        heading: "2. Ứng dụng đệm ca khúc giọng La thứ (Am)",
        type: "list",
        items: [
          "<strong>'Màu hoa đỏ' (Nhạc: Thuận Yến, Thơ: Nguyễn Đức Mậu):</strong> Khúc tráng ca sâu lắng tri ân các anh hùng liệt sĩ; vòng hợp âm đệm: <strong>Am – Dm – G – C – F – E7 – Am</strong>. Chú ý gảy đúng nốt bass gốc của từng hợp âm (Am bass dây 5, Dm bass dây 4, E7 bass dây 6).",
          "<strong>'Người thầy' (Nguyễn Nhất Huy):</strong> Ca khúc lắng đọng về hình bóng người thầy tận tuỵ; luyện chuyển hợp âm nhịp 4/4, nhấn phách đầu để tạo điểm tựa nhịp nhàng cho người hát."
        ]
      }
    ],
    quiz: [
      {
        q: "Âm hình rải ngón tay phải tiêu chuẩn cho tiết điệu Slow nhịp 6/8 trên 3 dây chập cao (dây 3, 2, 1) là:",
        options: [
          "Bass – dây 3 – dây 2 – dây 1 – dây 2 – dây 3",
          "Bass – quạt chém xuống – quạt hất lên",
          "Bass – dây 1 – dây 1 – dây 1 – dây 1",
          "Gảy đồng thời cả 6 dây cùng một lúc 6 lần"
        ],
        ans: 0,
        explain: "Âm hình rải Arpeggio chuẩn nhịp 6/8: Bass (phách 1) - 3 (phách 2) - 2 (phách 3) - 1 (phách 4) - 2 (phách 5) - 3 (phách 6) tạo chuyển động lượn sóng êm ả."
      },
      {
        q: "Khi bấm hợp âm La thứ (Am), nốt Bass chính chuẩn xác nhất của đàn guitar nằm ở dây số mấy?",
        options: [
          "Dây 5 (dây La buông)",
          "Dây 6 (dây Mi buông)",
          "Dây 4 (dây Rê buông)",
          "Dây 1 (dây Mi cao)"
        ],
        ans: 0,
        explain: "Âm gốc của hợp âm La thứ là nốt La, do đó nốt bass chuẩn là dây số 5 (dây La buông)."
      },
      {
        q: "Nguyên tắc 'giữ nốt chung' khi chuyển thế tay hợp âm trên cần đàn guitar mang lại lợi ích gì?",
        options: [
          "Giúp tay chuyển thế nhanh hơn, chuẩn xác hơn và giữ cho tiếng đàn vang liên tục không bị đứt đoạn",
          "Để người chơi không phải nhìn vào cần đàn",
          "Làm cho đàn kêu to hơn gấp 10 lần",
          "Chuyển đàn guitar thành đàn ukulele"
        ],
        ans: 0,
        explain: "Giữ nốt chung tạo điểm tựa trục xoay cho bàn tay, giúp các ngón tay khác di chuyển mượt mà và tiếng đàn ngân vang liên tục."
      }
    ]
  },

  {
    id: "gui_b6",
    num: 6,
    title: "Bài 6. Hoà tấu tác phẩm âm nhạc",
    badge: "Song tấu Guitar",
    objectives: [
      "Nắm vững nguyên tắc hoà tấu 2 cây đàn guitar: phân bè giai điệu chính và bè đệm hoà âm.",
      "Thực hiện kĩ năng lắng nghe bè bạn, giữ vững nhịp độ và cân bằng âm lượng.",
      "Trình diễn hoà tấu ăn ý tuyệt phẩm 'Bụi phấn' (Vũ Hoàng – Lê Văn Lộc) và khúc dân ca Ý 'Santa Lucia'."
    ],
    sections: [
      {
        heading: "1. Nguyên tắc tổ chức hoà tấu Guitar",
        type: "list",
        items: [
          "<strong>Phân công vai trò hai cây đàn (Guitar Duo):</strong>\n• <em>Guitar 1 (Giai điệu):</em> Đảm nhận việc cất lên chủ đề bài hát bay bổng ở các cung bậc cao; đòi hỏi tiếng đàn sắc nét, ngân vang, kĩ thuật legato tinh tế.\n• <em>Guitar 2 (Hoà âm & Nhịp điệu):</em> Đảm nhận bè đệm rải hợp âm và giữ bè trầm bass; đòi hỏi giữ nhịp thật vững vàng, âm lượng vừa phải làm bệ đỡ cho Guitar 1.",
          "<strong>Hoán đổi vai trò linh hoạt:</strong> Trong một tác phẩm hoà tấu chuyên nghiệp, hai bè thường xuyên hoán đổi vai trò cho nhau (đoạn A Guitar 1 giai điệu, Guitar 2 đệm; sang đoạn B Guitar 2 cất lên giai điệu ở âm khu trầm, Guitar 1 tỉa nốt phụ hoạ).",
          "<strong>Kĩ năng lắng nghe & Ghi âm tự đánh giá:</strong> Hai người chơi phải ngồi hướng vào nhau; quan sát nhịp thở và cử động đầu cần đàn để vào phách đồng bộ; tự thu âm lại để phân tích độ cân bằng âm lượng."
        ]
      },
      {
        heading: "2. Thực hành tác phẩm hoà tấu",
        type: "list",
        items: [
          "<strong>'Bụi phấn' (Vũ Hoàng – Lê Văn Lộc, chuyển soạn guitar):</strong> Khúc ca bất hủ về người thầy; từ ô nhịp 13 hai cây đàn hoán đổi bè một cách điêu luyện, tạo nên không gian âm nhạc đa tầng dạt dào cảm xúc.",
          "<strong>'Santa Lucia' (Dân ca Ý - Teodoro Cottrau):</strong> Nhịp điệu Barcarolle dập dềnh sóng nước sông Venice; kết hợp nhịp 3/8 hoặc 6/8 rộn ràng, lãng mạn."
        ]
      }
    ],
    quiz: [
      {
        q: "Trong một tiết mục hoà tấu song tấu 2 cây đàn guitar (Guitar Duo), yêu cầu quan trọng nhất về âm lượng là:",
        options: [
          "Cân bằng âm lượng: bè giai điệu nổi bật rõ ràng, bè đệm giữ nền êm ái nâng đỡ mà không át tiếng",
          "Cả hai cây đàn đều phải đánh to hết mức có thể",
          "Cây đàn chơi đệm phải đánh to hơn để át cây chơi giai điệu",
          "Mỗi cây đàn chơi một tốc độ nhanh chậm khác nhau"
        ],
        ans: 0,
        explain: "Hoà tấu đòi hỏi sự tinh tế về sắc thái: bè giai điệu cần sáng rõ, bè đệm giữ nhịp nền êm ái nâng cánh cho giai điệu bay bổng."
      },
      {
        q: "Khi hoà tấu tác phẩm 'Bụi phấn', ở ô nhịp thứ 13 của bản nhạc có sự thay đổi nghệ thuật nào giữa hai cây đàn?",
        options: [
          "Hai cây đàn hoán đổi vai trò cho nhau (cây đệm chuyển sang chơi giai điệu và ngược lại)",
          "Cả hai dừng chơi và chuyển sang thổi sáo",
          "Chuyển từ nhịp 2/4 sang nhịp hành khúc",
          "Cắt dây đàn"
        ],
        ans: 0,
        explain: "Từ ô nhịp 13, bản phối chuyển soạn quy định sự hoán đổi vai trò bè điêu luyện giữa Guitar 1 và Guitar 2 để tạo sự mới mẻ về âm sắc."
      },
      {
        q: "Phương pháp hiệu quả nhất để nhóm hoà tấu tự kiểm tra độ ăn khớp về nhịp và cao độ sau mỗi buổi tập là:",
        options: [
          "Dùng điện thoại ghi âm lại toàn bộ bài biểu diễn và cùng nhau nghe lại để phát hiện lỗi",
          "Tranh cãi xem ai chơi sai",
          "Bỏ qua không cần kiểm tra",
          "Chỉ nghe một câu đầu rồi thôi"
        ],
        ans: 0,
        explain: "Tự ghi âm và nghe lại là phương pháp sư phạm âm nhạc tiên tiến nhất giúp người học có cái nhìn khách quan về nhịp độ, sắc thái và độ cân bằng âm lượng."
      }
    ]
  }
];

const musicTerms = [
  { term: "Giọng / Âm chủ", def: "Hệ thống các bậc âm xoay quanh một âm trung tâm ổn định nhất gọi là âm chủ (Tonic). Nhận biết qua hoá biểu, dấu hoá bất thường, âm kết bài và cấu trúc giai điệu." },
  { term: "Âm ổn định", def: "Các âm bậc I, III, V trong một điệu thức; có tính chất vững chãi, tạo cảm giác kết thúc và là điểm tựa của các âm không ổn định." },
  { term: "Hợp âm ba", def: "Gồm ba âm xếp chồng lên nhau theo các quãng ba tính từ âm gốc (Root). Tên gọi và tính chất (trưởng, thứ, tăng, giảm) phụ thuộc vào khoảng cách các âm thành phần." },
  { term: "Hợp âm bảy át (Dominant 7th)", def: "Hợp âm bốn âm xây dựng trên bậc V của điệu thức (ví dụ C7 trong Pha trưởng, A7 trong Rê thứ); có sức căng hoà âm mãnh liệt và giải về hợp âm chủ." },
  { term: "Legato (Liền tiếng)", def: "Kĩ thuật hát hoặc diễn tấu nối các nốt nhạc một cách liên tục, mượt mà, không ngắt quãng luồng hơi hay âm thanh." },
  { term: "Passage (Lướt nhanh)", def: "Kĩ thuật chạy các chuỗi nốt nhạc nhanh, linh hoạt, rõ ràng từng nốt và sáng tiếng ở nhịp độ cao." },
  { term: "Staccato (Nảy tiếng)", def: "Kĩ thuật bật âm thanh ngắn, dứt khoát, ngắt âm ngay sau khi phát ra; trường độ thực tế chỉ ngân khoảng 1/2 giá trị nốt." },
  { term: "Luyến âm (Melisma)", def: "Kĩ thuật hát MỘT âm tiết (một lời ca) trải dài qua hai hay nhiều cao độ khác nhau một cách mềm mại." },
  { term: "Tứ tấu dây (String Quartet)", def: "Biên chế hoà tấu thính phòng mẫu mực gồm 4 nhạc cụ dây: Violin I, Violin II, Viola và Cello." },
  { term: "Aria", def: "Khúc hát đơn ca độc lập của nhân vật chính trong nhạc kịch (Opera), có dàn nhạc đệm, nhằm bộc lộ thế giới nội tâm sâu kín." },
  { term: "Biến tấu (Variation)", def: "Hình thức âm nhạc phát triển một chủ đề giai điệu ban đầu qua các biến đổi về tiết tấu, hoà âm, tốc độ hoặc âm sắc." },
  { term: "Vocalise", def: "Bài tập luyện thanh hoặc khúc ca không có lời từ ngữ, người hát sử dụng các nguyên âm (A, O, U, I, E) để rèn luyện kĩ thuật và cao độ." }
];

const practiceProcess = [
  "<strong>Bước 1 - Phân tích tổng thể bản nhạc:</strong> Quan sát kĩ khoá nhạc, hoá biểu (xác định giọng trưởng/thứ), số chỉ nhịp (2/4, 3/4, 4/4, 6/8), tốc độ (Tempo), các kí hiệu sắc thái (p, mf, f, crescendo...) và kĩ thuật biểu diễn (legato, staccato, barre...).",
  "<strong>Bước 2 - Luyện nhịp & Tiết tấu độc lập:</strong> Vỗ tay hoặc dùng thanh phách gõ đều tiết tấu của bài; đọc tên nốt nhạc theo đúng trường độ mà chưa cần hát cao độ để não bộ ghi nhớ đường nét nhịp điệu.",
  "<strong>Bước 3 - Khởi động & Luyện từng câu ở tốc độ chậm:</strong> Khởi động giọng (với thanh nhạc) hoặc luyện ngón chạy gam (với guitar). Chia bài thành các tiết nhạc ngắn (mỗi tiết 2 - 4 ô nhịp) và luyện tập ở tốc độ chậm (Lento) cho đến khi chính xác 100% cao độ.",
  "<strong>Bước 4 - Ghép câu, bè & Tăng tốc độ chuẩn:</strong> Ghép các tiết nhạc thành câu hoàn chỉnh; phối hợp hai tay (guitar) hoặc ghép hai bè hoà thanh; sử dụng máy đập nhịp (metronome) tăng dần tốc độ từng nấc cho đến khi đạt tốc độ yêu cầu mà cơ thể vẫn hoàn toàn thả lỏng.",
  "<strong>Bước 5 - Hoàn thiện sắc thái & Biểu diễn tập thể:</strong> Thổi hồn cảm xúc vào tác phẩm theo đúng chỉ dẫn sắc thái; khi biểu diễn nhóm, giữ vững nhịp chung, biết lắng nghe bè bạn, thống nhất điểm vào/kết bài và cân bằng âm lượng để tạo sự hoà quyện tuyệt đối."
];

const arenaQuestions = [
  {
    id: 1,
    q: "Hoá biểu của giọng Pha trưởng (F major) có đặc điểm nào dưới đây?",
    options: [
      "Có một dấu giáng Si♭ đặt tại vị trí nốt Si",
      "Có một dấu thăng Pha♯ đặt tại nốt Pha",
      "Có hai dấu giáng Si♭ và Mi♭",
      "Không có dấu thăng hoặc dấu giáng nào"
    ],
    ans: 0,
    exp: "Giọng Pha trưởng có hoá biểu gồm đúng 1 dấu giáng Si♭ đặt trên dòng kẻ thứ ba khuông nhạc khoá Son."
  },
  {
    id: 2,
    q: "Trong gam Pha trưởng, hợp âm ba xây dựng trên bậc V là hợp âm gì?",
    options: [
      "Hợp âm Đô trưởng (C: Đô – Mi – Son)",
      "Hợp âm Pha trưởng (F)",
      "Hợp âm Si giáng trưởng (B♭)",
      "Hợp âm Son thứ (Gm)"
    ],
    ans: 0,
    exp: "Bậc V của giọng Pha trưởng là nốt Đô, hợp âm ba xây dựng trên bậc này là Đô trưởng (C: Đô - Mi - Son)."
  },
  {
    id: 3,
    q: "Điểm khác biệt căn bản giữa gam Rê thứ hoà thanh và gam Rê thứ tự nhiên là:",
    options: [
      "Bậc VII (nốt Đô) được nâng lên nửa cung thành Đô thăng (C♯)",
      "Bậc III được nâng lên nửa cung",
      "Bỏ dấu Si giáng ở đầu hoá biểu",
      "Âm chủ đổi từ Rê sang Pha"
    ],
    ans: 0,
    exp: "Rê thứ hoà thanh luôn nâng âm bậc VII lên nửa cung thành Đô♯, tạo nên hợp âm bậc V là La trưởng (A) và bảy át A7."
  },
  {
    id: 4,
    q: "Ca khúc 'Dâng Người tiếng hát mùa xuân' thể hiện lòng biết ơn Bác Hồ là sáng tác của nhạc sĩ nào?",
    options: [
      "Nguyễn Văn Thương",
      "Văn Cao",
      "Phạm Tuyên",
      "Hoàng Vân"
    ],
    ans: 0,
    exp: "'Dâng Người tiếng hát mùa xuân' là tuyệt phẩm thanh nhạc nổi tiếng của nhạc sĩ Nguyễn Văn Thương."
  },
  {
    id: 5,
    q: "Đặc trưng nổi bật nhất của loại hình 'Âm nhạc thính phòng' (Chamber music) là:",
    options: [
      "Biểu diễn trong không gian phòng hoà nhạc nhỏ ấm cúng với nhóm ít nhạc cụ, mỗi nhạc cụ chơi một bè riêng biệt",
      "Dàn nhạc giao hưởng khổng lồ hàng trăm người",
      "Âm nhạc điện tử biểu diễn ngoài sân vận động",
      "Chỉ dùng để đệm cho các màn xiếc nhào lộn"
    ],
    ans: 0,
    exp: "Âm nhạc thính phòng được viết cho nhóm nhỏ nhạc cụ (2-8 người), mỗi bè một nhạc công biểu diễn trong không gian nhỏ ấm cúng."
  },
  {
    id: 6,
    q: "Bản Sonata số 5 cho violin và piano của Beethoven còn được gọi với tên thân mật là gì?",
    options: [
      "Sonata Mùa xuân (Spring Sonata)",
      "Sonata Ánh trăng",
      "Sonata Bình minh",
      "Sonata Khúc hoan ca"
    ],
    ans: 0,
    exp: "Sonata số 5 cho violin và piano của Beethoven mang tên Sonata Mùa xuân (Spring Sonata) nhờ giai điệu tươi sáng, thanh tao."
  },
  {
    id: 7,
    q: "Ba hợp âm ba chính của giọng Pha trưởng (F major) gồm có:",
    options: [
      "Hợp âm F, B♭, C (đều là các hợp âm trưởng)",
      "Hợp âm Dm, Gm, Am (đều là hợp âm thứ)",
      "Hợp âm Gm, Am, Bdim",
      "Hợp âm C, Dm, Em"
    ],
    ans: 0,
    exp: "Ba hợp âm chính của Pha trưởng ở các bậc I, IV, V là F (Pha trưởng), B♭ (Si giáng trưởng) và C (Đô trưởng)."
  },
  {
    id: 8,
    q: "Tác phẩm Divertimento số 3, K. 138 của Mozart được sáng tác cho dàn nhạc cụ nào?",
    options: [
      "Tứ tấu dây (2 Violin, Viola, Cello)",
      "Độc tấu kèn Trombone",
      "Dàn nhạc giao hưởng mở rộng",
      "Tam tấu kèn gỗ"
    ],
    ans: 0,
    exp: "Divertimento số 3 K. 138 của Mozart được viết cho biên chế tứ tấu đàn dây gồm 2 Violin, Viola và Cello."
  },
  {
    id: 9,
    q: "Bài hát 'Lí qua kêu' mang đậm nét dí dỏm, mộc mạc là làn điệu dân ca của vùng miền nào?",
    options: [
      "Dân ca Nam Bộ",
      "Dân ca Quan họ Bắc Ninh",
      "Dân ca Bình Trị Thiên",
      "Dân ca Tây Bắc"
    ],
    ans: 0,
    exp: "'Lí qua kêu' là bài dân ca Nam Bộ đặc sắc phản ánh tính cách hào sảng, chân chất của người dân miền Tây sông nước."
  },
  {
    id: 10,
    q: "Trống đồng Đông Sơn và Đàn đá là những nhạc cụ cổ truyền tiêu biểu cho thời kì lịch sử nào của Việt Nam?",
    options: [
      "Thời kì dựng nước Văn Lang – Âu Lạc",
      "Thời kì phong kiến nhà Hậu Lê",
      "Thời kì kháng chiến chống Pháp",
      "Thời kì đổi mới sau 1986"
    ],
    ans: 0,
    exp: "Trống đồng và Đàn đá là những báu vật âm nhạc cổ đại từ buổi đầu dựng nước Văn Lang - Âu Lạc."
  },
  {
    id: 11,
    q: "Vở Opera (nhạc kịch) đầu tiên của nền âm nhạc Việt Nam có tên là gì, do ai sáng tác?",
    options: [
      "Vở 'Cô Sao' của nhạc sĩ Đỗ Nhuận",
      "Vở 'Trương Chi' của Văn Cao",
      "Vở 'Hòn Vọng Phu' của Lê Thương",
      "Vở 'Tiếng chuông nhà thờ' của Nguyễn Văn Thương"
    ],
    ans: 0,
    exp: "Vở nhạc kịch 'Cô Sao' của nhạc sĩ Đỗ Nhuận (công diễn năm 1965) là tác phẩm Opera đầu tiên của nền âm nhạc chuyên nghiệp Việt Nam."
  },
  {
    id: 12,
    q: "Bản anh hùng ca 'Trường ca Sông Lô' của Văn Cao được sáng tác sau chiến thắng quân sự nào?",
    options: [
      "Chiến thắng Sông Lô (Chiến dịch Việt Bắc Thu – Đông 1947)",
      "Chiến thắng Điện Biên Phủ 1954",
      "Khởi nghĩa Ba Tơ 1945",
      "Chiến thắng Ấp Bắc 1963"
    ],
    ans: 0,
    exp: "Nhạc sĩ Văn Cao sáng tác 'Trường ca Sông Lô' năm 1947 sau khi quân đội ta bắn chìm nhiều tàu chiến Pháp trên sông Lô."
  },
  {
    id: 13,
    q: "Kĩ thuật hát liền mạch, êm ái, nối các nốt không đứt quãng được gọi trong âm nhạc là:",
    options: [
      "Legato",
      "Staccato",
      "Passage",
      "Marcato"
    ],
    ans: 0,
    exp: "Legato trong tiếng Ý có nghĩa là liền tiếng, nối kết các âm thanh mượt mà liên tục."
  },
  {
    id: 14,
    q: "Kĩ thuật hát bật âm thanh ngắn, dứt khoát, ngắt âm ngay sau khi phát ra được gọi là:",
    options: [
      "Staccato",
      "Legato",
      "Luyến âm",
      "Vocalise"
    ],
    ans: 0,
    exp: "Staccato là kĩ thuật nảy tiếng, âm thanh ngắn và tách rời dứt khoát."
  },
  {
    id: 15,
    q: "Điểm phân biệt bản chất giữa 'Hát liền tiếng' và 'Hát luyến âm' là:",
    options: [
      "Luyến âm là MỘT ca từ/âm tiết đi qua nhiều cao độ; còn Liền tiếng là cách nối các nốt nhạc mượt mà",
      "Luyến âm chỉ dùng cho giọng nam, liền tiếng chỉ dùng cho giọng nữ",
      "Hai kĩ thuật này giống hệt nhau không có điểm khác biệt",
      "Liền tiếng không dùng hơi thở"
    ],
    ans: 0,
    exp: "Luyến âm gắn với việc duy nhất MỘT từ trải dài qua nhiều nốt nhạc; trong khi Legato là cách thức điều tiết luồng hơi kết nối các nốt."
  },
  {
    id: 16,
    q: "Trong kĩ thuật guitar cổ điển, ngón cái bàn tay phải được kí hiệu là chữ cái nào?",
    options: [
      "p",
      "i",
      "m",
      "a"
    ],
    ans: 0,
    exp: "Ngón cái tay phải kí hiệu là p (pouce trong tiếng Pháp)."
  },
  {
    id: 17,
    q: "Quy tắc gảy nốt nhanh trên cùng một dây đàn guitar để đạt tốc độ cao và không bị mỏi tay là:",
    options: [
      "Luôn luân phiên ngón trỏ và ngón giữa (i – m – i – m)",
      "Chỉ dùng một ngón tay trỏ gảy liên tiếp",
      "Dùng móng tay cái cào liên tục",
      "Dùng ngón út bấm vào thùng đàn"
    ],
    ans: 0,
    exp: "Luân phiên i - m là nguyên tắc căn bản để chạy nốt linh hoạt trên một dây đàn guitar."
  },
  {
    id: 18,
    q: "Kĩ thuật dùng ngón trỏ tay trái duỗi thẳng chặn đồng thời nhiều dây trên cùng một ngăn phím guitar gọi là:",
    options: [
      "Kĩ thuật Barre (Bấm chặn)",
      "Kĩ thuật Legato",
      "Kĩ thuật Slap",
      "Kĩ thuật Harmonics"
    ],
    ans: 0,
    exp: "Kĩ thuật bấm chặn gọi là Barre (hoặc Barré), ngón trỏ đóng vai trò như một chiếc kẹp capo di động."
  },
  {
    id: 19,
    q: "Âm hình rải Arpeggio tiêu chuẩn của tiết điệu Slow ở nhịp 6/8 trên guitar là:",
    options: [
      "Bass – 3 – 2 – 1 – 2 – 3",
      "Bass – 1 – 2 – 3 – 1 – 2",
      "Bass – chập – chập – chập",
      "Quạt xuống – quạt lên"
    ],
    ans: 0,
    exp: "Âm hình rải tiêu chuẩn nhịp 6/8 gồm 6 móc đơn: Bass - 3 - 2 - 1 - 2 - 3."
  },
  {
    id: 20,
    q: "Thuật ngữ âm nhạc 'Aria' dùng để chỉ khúc hát nào trong một tác phẩm nhạc kịch (Opera)?",
    options: [
      "Khúc hát đơn ca độc lập của nhân vật chính nhằm bộc lộ nội tâm sâu sắc",
      "Đoạn nhạc mở màn do dàn nhạc giao hưởng chơi khi chưa mở màn",
      "Màn múa tập thể của các diễn viên quần chúng",
      "Khúc hát đồng ca của toàn bộ khán giả"
    ],
    ans: 0,
    exp: "Aria là khúc hát độc tấu của nhân vật chính trong Opera để bộc lộ thế giới nội tâm và cảm xúc sâu lắng nhất."
  }
];

module.exports = {
  vocal_options,
  guitar_options,
  musicTerms,
  practiceProcess,
  arenaQuestions
};
