// Data for Ngữ Văn 7 - Tập 1 (Bài 1 -> Bài 5 + Ôn tập HKI)
// Bộ Kết nối tri thức với cuộc sống

const tap1Data = [
  {
    id: "bai-1",
    unit: "BÀI 1",
    volume: "TẬP MỘT",
    title: "Bầu trời tuổi thơ",
    theme: "Nhìn thế giới bằng sự tò mò, lòng nhân ái và trải nghiệm tuổi thơ",
    color: "rose",
    readTheory: {
      intro: "Bài học khuyến khích nhìn thế giới bằng sự tò mò, lòng nhân ái và trải nghiệm tuổi thơ qua 3 văn bản chính và 1 văn bản thực hành đọc.",
      texts: [
        {
          name: "Bầy chim chìa vôi",
          author: "Nguyễn Quang Thiều",
          type: "Truyện ngắn",
          summary: "Hai anh em Mon và Mên lo lắng cho đàn chim chìa vôi non trên bãi cát giữa sông Đáy khi mùa nước lũ dâng cao. Chuyến chèo đò ra bãi cát giữa đêm mưa và cảnh tượng bầy chim non cất cánh bay lên lúc bình minh rực rỡ đã khắc họa tình yêu thương loài vật trong sáng, lòng can đảm và khoảnh khắc rung động kỳ diệu trước sức sống của thiên nhiên.",
          keyPoints: [
            "Tình huống truyện độc đáo: Mưa bão lớn ban đêm, nước sông dâng ngập bãi cát nơi chim chìa vôi làm tổ.",
            "Diễn biến tâm lí: Mon và Mên thì thầm lo lắng giữa đêm, quyết định dũng cảm chèo thuyền cứu chim non.",
            "Cảnh tượng cất cánh: Khoảnh khắc bầy chim non bứt mình bay lên khỏi dòng nước lũ tượng trưng cho vẻ đẹp kiên cường và sự sống màu nhiệm."
          ]
        },
        {
          name: "Đi lấy mật (Trích 'Đất rừng phương Nam')",
          author: "Đoàn Giỏi",
          type: "Tiểu thuyết / Trích đoạn",
          summary: "Kể về chuyến đi rừng U Minh lấy mật ong của cậu bé An cùng tía nuôi và thằng Cò. Cảnh sắc thiên nhiên hoang sơ tráng lệ, tập tính độc đáo của loài ong rừng và nghệ thuật 'gác kèo' kì diệu được miêu tả sống động qua ngôn ngữ Nam Bộ đượm chất hào sảng.",
          keyPoints: [
            "Bức tranh rừng tràm U Minh: Ánh nắng ban mai, mùi hương tràm ngào ngạt, tiếng chim hót ríu rít.",
            "Kinh nghiệm dân gian: Kĩ thuật nhìn hướng gió, chọn nhánh cây tràm và bí quyết gác kèo để đón ong về làm tổ.",
            "Nhân vật: Cò dạn dĩ tháo vát; An tinh tế ham học hỏi; Tía nuôi dạn dày sương gió, nhân từ và am hiểu rừng sâu."
          ]
        },
        {
          name: "Ngàn sao làm việc",
          author: "Võ Quảng",
          type: "Thơ năm chữ",
          summary: "Bài thơ nhân hóa bầu trời đêm bao la thành một không gian lao động rộn rã, cần mẫn và đoàn kết của muôn vàn vì sao tinh tú, gửi gắm bài học sâu sắc về niềm vui của sự cống hiến và vẻ đẹp lao động chung.",
          keyPoints: [
            "Hình ảnh nhân hóa: Sông Ngân Hà gánh nước, sao Thần Nông tỏa rộng chiếc vó, sao Hôm như ngọn đuốc soi đường.",
            "Nhịp thơ linh hoạt, trong trẻo, khơi gợi trí tưởng tượng phong phú và tình yêu vũ trụ bao la."
          ]
        },
        {
          name: "Ngôi nhà trên cây (Trích 'Tốt-tô-chan bên cửa sổ')",
          author: "Kuroyanagi Tetsuko",
          type: "Thực hành đọc",
          summary: "Tình bạn hồn nhiên và sự kiên trì tuyệt vời giữa Tốt-tô-chan và bạn Ya-sư-a-ki (bị bại liệt) khi giúp bạn trèo lên ngôi nhà trên cây – không gian bí mật đầy ước mơ tuổi thơ tại trường Tô-mô-e.",
          keyPoints: [
            "Điểm nhìn trẻ thơ: Khát khao sở hữu một lãnh địa riêng để thỏa sức khám phá.",
            "Tình bạn bình đẳng, tôn trọng và sự đồng cảm sâu sắc vượt qua rào cản khiếm khuyết thể xác."
          ]
        }
      ],
      concepts: [
        {
          term: "Đề tài",
          desc: "Phạm vi đời sống được tác phẩm thể hiện (thiên nhiên, tuổi thơ, chiến tranh, gia đình...). Một tác phẩm có thể có nhiều đề tài xoay quanh đề tài chính."
        },
        {
          term: "Chi tiết tiêu biểu",
          desc: "Yếu tố nhỏ trong thế giới hình tượng (lời nói, cử chỉ, hình ảnh) nhưng có sức khái quát cao, tạo bước ngoặt cốt truyện hoặc khắc họa sâu sắc tính cách nhân vật."
        },
        {
          term: "Tính cách nhân vật",
          desc: "Hệ thống nét tính cách tương đối ổn định của nhân vật, bộc lộ qua ngoại hình, hành động, ngôn ngữ đối thoại/nội tâm và mối quan hệ với xung quanh."
        },
        {
          term: "Văn bản tóm tắt",
          desc: "Bản ghi ngắn gọn chuỗi sự việc chính theo đúng trình tự nguyên nhân - kết quả, trung thành với văn bản gốc nhưng diễn đạt bằng lời văn súc tích của người viết."
        }
      ]
    },
    vietnameseLang: {
      topic: "Mở rộng thành phần chính và trạng ngữ của câu bằng cụm từ",
      content: "Các thành phần chính của câu (Chủ ngữ, Vị ngữ) và Trạng ngữ có thể là từ đơn hoặc được mở rộng thành cụm từ chính phụ (Cụm danh từ, Cụm động từ, Cụm tính từ).",
      examples: [
        {
          original: "Chim hót. (Câu đơn giản)",
          expanded: "[Những chú chim chìa vôi non trên bãi cát] / [đang cất tiếng hót líu lo chào bình minh].",
          note: "Mở rộng Chủ ngữ thành Cụm danh từ; mở rộng Vị ngữ thành Cụm động từ kèm phụ ngữ thời gian, trạng thái."
        },
        {
          original: "Buổi sớm, trời lạnh.",
          expanded: "[Vào một buổi sớm mùa đông mưa phùn gió bấc], trời lạnh buốt da cắt thịt.",
          note: "Mở rộng Trạng ngữ và Vị ngữ để tạo sắc thái biểu cảm và bối cảnh chi tiết."
        }
      ],
      rules: [
        "Phân biệt cụm từ mở rộng với việc ghép thêm một vế câu có nòng cốt C-V mới.",
        "Tránh thêm quá nhiều cụm từ làm câu rườm rà, rối rắm, lặp ý hoặc sai ngữ pháp."
      ]
    },
    writing: {
      type: "Tóm tắt văn bản theo những yêu cầu khác nhau về độ dài",
      steps: [
        "1. Đọc kĩ văn bản gốc, xác định chủ đề, nhân vật chính và chuỗi sự việc cốt lõi.",
        "2. Lược bỏ các chi tiết miêu tả rườm rà, lời thoại dài dòng, nhận xét ngoại đề.",
        "3. Tùy theo yêu cầu độ dài (khoảng 3-5 câu, 1 đoạn văn ngắn hoặc 1 trang), lựa chọn dung lượng phù hợp.",
        "4. Liên kết các sự việc bằng quan hệ từ nhân - quả, thời gian logic; viết bằng lời văn của mình.",
        "5. Rà soát tính trung thực: Không làm sai lệch nghĩa tác phẩm và không tự ý bịa thêm sự kiện."
      ]
    },
    speakingListening: {
      topic: "Trao đổi về một vấn đề mà em quan tâm gợi ra từ tác phẩm",
      guide: "Nêu vấn đề rõ ràng (ví dụ: Bảo vệ động vật hoang dã, tình bạn tuổi thơ), đưa ra quan điểm cá nhân, dẫn chứng từ tác phẩm và thực tế; lắng nghe tôn trọng ý kiến khác biệt."
    },
    quiz: [
      {
        question: "Trong truyện 'Bầy chim chìa vôi', điều gì thôi thúc hai anh em Mon và Mên chèo đò ra bãi cát giữa đêm mưa gió?",
        options: [
          "Muốn tìm bắt bầy chim non đem về nhà nuôi",
          "Nỗi lo sợ nước sông dâng cao sẽ nhấn chìm bầy chim chìa vôi non mới nở",
          "Ham chơi, tò mò muốn thử cảm giác chèo đò trong đêm bão",
          "Đi theo lời thách đố của những đứa trẻ khác trong làng"
        ],
        answer: 1,
        explain: "Hai anh em Mon và Mên trằn trọc cả đêm vì lo sợ dòng nước lũ sông Đáy dâng lên sẽ nhấn chìm tổ chim non chưa biết bay trên doi cát giữa sông."
      },
      {
        question: "Thành phần nào trong câu sau được mở rộng thành cụm từ: 'Dưới ánh nắng ban mai rực rỡ, những cánh rừng tràm U Minh tỏa hương thơm ngát'?",
        options: [
          "Chỉ có trạng ngữ",
          "Chỉ có chủ ngữ và vị ngữ",
          "Cả trạng ngữ, chủ ngữ và vị ngữ đều được mở rộng thành cụm từ",
          "Câu không được mở rộng thành phần nào"
        ],
        answer: 2,
        explain: "Trạng ngữ là cụm danh từ 'Dưới ánh nắng ban mai rực rỡ'; Chủ ngữ là cụm danh từ 'những cánh rừng tràm U Minh'; Vị ngữ là cụm động từ 'tỏa hương thơm ngát'."
      }
    ]
  },
  {
    id: "bai-2",
    unit: "BÀI 2",
    volume: "TẬP MỘT",
    title: "Khúc nhạc tâm hồn",
    theme: "Lắng nghe thanh âm cuộc sống, tình yêu quê hương, đất nước và con người qua thơ ca",
    color: "amber",
    readTheory: {
      intro: "Tìm hiểu thơ bốn chữ, năm chữ và tản văn giàu cảm xúc; nhận diện tình yêu con người, kí ức và lòng tri ân sâu sắc.",
      texts: [
        {
          name: "Đồng dao mùa xuân",
          author: "Nguyễn Khoa Điềm",
          type: "Thơ bốn chữ",
          summary: "Khắc họa hình ảnh người lính trẻ hồn nhiên mang ba lô con cóc, chưa một lần yêu, thích bắn bi đùa nghịch đã ngã xuống giữa chiến trường Trường Sơn. Người lính hóa thân vào màu xanh đại ngàn, trường tồn cùng mùa xuân của đất nước.",
          keyPoints: [
            "Hình ảnh người lính: Trẻ trung, giản dị, tinh thần quả cảm vô tư.",
            "Ý niệm thời gian: Mùa xuân của tuổi trẻ hòa vào mùa xuân bất diệt của Tổ quốc.",
            "Nhịp thơ bốn chữ 2/2 dồn dập như điệu đồng dao da diết, thiêng liêng."
          ]
        },
        {
          name: "Gặp lá cơm nếp",
          author: "Thanh Thảo",
          type: "Thơ năm chữ",
          summary: "Người lính trên đường hành quân bắt gặp mùi hương lá cơm nếp quen thuộc, lập tức bồi hồi nhớ về người mẹ tảo tần nấu xôi bên bếp lửa quê nhà và tình yêu tha thiết với đất nước.",
          keyPoints: [
            "Mùi hương khơi gợi kí ức: Hương xôi nếp bình dị đánh thức dòng tình cảm sâu kín.",
            "Sự hòa quyện cảm xúc: Tình yêu mẹ gắn liền và nâng cánh cho tình yêu quê hương, non sông."
          ]
        },
        {
          name: "Trở gió",
          author: "Nguyễn Ngọc Tư",
          type: "Tản văn",
          summary: "Những rung động tinh tế, xao xuyến của tác giả khi đón ngọn gió chướng mùa về nơi miền Tây Nam Bộ – ngọn gió báo hiệu mùa gặt, mùa Tết sum họp và gợi nhớ hoài niệm ấu thơ thiết tha.",
          keyPoints: [
            "Tâm trạng 'mừng đó rồi bực đó': Sự háo hức ngóng trông xen lẫn bâng khuâng nuối tiếc thời gian trôi.",
            "Ngôn ngữ Nam Bộ mộc mạc, giàu nhạc tính và hình ảnh đậm hồn sông nước."
          ]
        },
        {
          name: "Chiều sông Thương",
          author: "Hữu Thỉnh",
          type: "Thơ năm chữ / Thực hành đọc",
          summary: "Cảnh sắc đôi bờ sông Thương vào buổi chiều êm đềm với những bãi mía bờ dâu, con đê uốn lượn và cảm xúc say đắm của người con trở về quê hương.",
          keyPoints: [
            "Vần điệu uyển chuyển, hình ảnh thơ giàu chất hội họa và tình cảm tha thiết."
          ]
        }
      ],
      concepts: [
        {
          term: "Thơ bốn chữ, năm chữ",
          desc: "Thể thơ dân gian truyền thống gọi theo số tiếng mỗi dòng (4 chữ hoặc 5 chữ); khổ thơ linh hoạt; ngắt nhịp chủ yếu 2/2 (thơ 4 chữ) hoặc 2/3, 3/2 (thơ 5 chữ); vần chân linh hoạt (vần liền, vần cách)."
        },
        {
          term: "Hình ảnh thơ",
          desc: "Bức tranh hiện thực được khúc xạ qua lăng kính cảm xúc, trí tưởng tượng và liên tưởng độc đáo của tác giả."
        },
        {
          term: "Biện pháp Nói giảm nói tránh",
          desc: "Biện pháp tu từ dùng cách diễn đạt tế nhị, khéo léo để tránh gây cảm giác quá đau buồn, ghê sợ, thô tục hoặc thiếu lịch sự."
        }
      ]
    },
    vietnameseLang: {
      topic: "Biện pháp tu từ Nói giảm nói tránh",
      content: "Nhận biết cách dùng từ ngữ thay thế để làm nhẹ tính chất bi thương hoặc giữ phép lịch sự trong giao tiếp và nghệ thuật.",
      examples: [
        {
          original: "Anh ấy đã chết ở chiến trường.",
          expanded: "Anh không về nữa / Anh vẫn một mình / Ở lại Trường Sơn.",
          note: "Cách diễn đạt 'Anh không về nữa', 'Ở lại Trường Sơn' trong thơ Nguyễn Khoa Điềm xoa dịu nỗi đau mất mát, tôn vinh sự hi sinh bất tử."
        },
        {
          original: "Bác đã già và sắp qua đời.",
          expanded: "Bác đã đi gặp các cụ Các Mác, Lê-nin...",
          note: "Thể hiện lòng kính trọng, trân kính thiêng liêng đối với vị lãnh tụ."
        }
      ],
      rules: [
        "Sử dụng đúng ngữ cảnh; tránh lạm dụng khiến câu văn trở nên quanh co, né tránh sự thật hoặc tối nghĩa."
      ]
    },
    writing: {
      type: "Tập làm thơ bốn chữ/năm chữ hoặc viết đoạn văn ghi lại cảm xúc về một bài thơ",
      steps: [
        "1. Chọn đề tài gần gũi: Gia đình, bạn bè, thầy cô, quê hương mùa lúa chín.",
        "2. Huy động vốn từ ngữ, hình ảnh gợi cảm và xác định vần (chân/liền/cách).",
        "3. Ngắt nhịp hài hòa tự nhiên, đọc to thành tiếng để cảm nhận nhạc điệu.",
        "4. Với đoạn văn ghi lại cảm xúc: Nêu ấn tượng bao quát -> Phân tích hình ảnh/từ ngữ/nhịp điệu đắc địa -> Bày tỏ suy nghĩ và liên hệ bản thân."
      ]
    },
    speakingListening: {
      topic: "Trình bày suy nghĩ về một vấn đề đời sống gợi ra từ tác phẩm văn học",
      guide: "Rút ra thông điệp sống (sự hi sinh của thế hệ đi trước, lòng biết ơn cha mẹ), xây dựng hệ thống luận cứ thuyết phục, biểu cảm chân thành."
    },
    quiz: [
      {
        question: "Câu thơ nào sau đây trong bài 'Đồng dao mùa xuân' sử dụng biện pháp tu từ nói giảm nói tránh?",
        options: [
          "Có một người lính / Đi vào núi xanh",
          "Một ngày hòa bình / Bay lên hạt nổ / Anh hóa ngọn lửa / Mười sốt rét rừng",
          "Anh không về nữa / Anh vẫn một mình",
          "Ba lô con cóc / Tấm áo màu xanh"
        ],
        answer: 2,
        explain: "Cụm từ 'Anh không về nữa' là cách nói giảm nói tránh cho sự hi sinh anh dũng của người lính trẻ trên chiến trường."
      },
      {
        question: "Nhịp thơ chủ đạo của thể thơ năm chữ thường là những nhịp nào?",
        options: [
          "Chỉ ngắt nhịp 1/4 duy nhất",
          "Nhịp 2/3 hoặc nhịp 3/2",
          "Nhịp 4/1 hoặc 1/1/3",
          "Không có quy tắc ngắt nhịp nào"
        ],
        answer: 1,
        explain: "Thể thơ năm chữ thường có cách ngắt nhịp biến hóa phổ biến nhất là 2/3 hoặc 3/2 tùy theo dòng chảy cảm xúc."
      }
    ]
  },
  {
    id: "bai-3",
    unit: "BÀI 3",
    volume: "TẬP MỘT",
    title: "Cội nguồn yêu thương",
    theme: "Tình cảm gia đình, tình thầy trò và nơi chốn nuôi dưỡng nhân cách",
    color: "emerald",
    readTheory: {
      intro: "Khám phá các tầng ý nghĩa của tình yêu thương gia đình, tình thầy trò qua sự thay đổi ngôi kể và lời văn thấm thía.",
      texts: [
        {
          name: "Vừa nhắm mắt vừa mở cửa sổ",
          author: "Nguyễn Ngọc Thuần",
          type: "Truyện dài / Trích đoạn",
          summary: "Người cha dạy cậu bé cảm nhận thế giới tự nhiên xung quanh bằng các giác quan khác ngoài đôi mắt: ngửi mùi hương đoán hoa, sờ lá cây, lắng nghe bước chân người bước trong vườn. Bài học về sự thấu cảm, trân trọng từng món quà và tình yêu thương chan hòa trong cuộc sống.",
          keyPoints: [
            "Các bài học kì diệu của bố: 'Khu vườn là một thế giới bí mật', nhận biết hoa bằng mùi hương.",
            "Triết lí về món quà: Món quà trao tặng thể hiện vẻ đẹp của cả người cho và người nhận."
          ]
        },
        {
          name: "Người thầy đầu tiên",
          author: "Chingiz Aitmatov",
          type: "Truyện vừa / Trích đoạn",
          summary: "Hồi ức cảm động của viện sĩ An-tư-nai về thầy giáo Đuy-sen – người thầy kiên định, giàu lòng nhân ái đã dựng nên trường học đầu tiên ở vùng quê nghèo Làng Cu-ru-ku-rây, mở ra chân trời tri thức và cứu vớt cuộc đời cô bé mồ côi.",
          keyPoints: [
            "Hình tượng thầy Đuy-sen: Bế học trò qua dòng suối mùa đông buốt giá, kiên nhẫn dạy từng con chữ.",
            "Hai cây phong trên đồi: Biểu tượng thiêng liêng của tình thầy trò và khát vọng vươn tới tương lai.",
            "Nghệ thuật lồng ghép ngôi kể: Người họa sĩ và bà An-tư-nai cùng kể tạo nên tính đa thanh, chân thực."
          ]
        },
        {
          name: "Quê hương",
          author: "Tế Hanh",
          type: "Thơ tám chữ",
          summary: "Bức tranh làng chài ven biển với con thuyền băng mình ra khơi đánh cá, những chàng trai vạm vỡ đượm vị mặn mòi của biển cả và nỗi nhớ quê hương da diết, nồng nàn của người con xa xứ.",
          keyPoints: [
            "Cảnh đoàn thuyền ra khơi: Hùng tráng, căng tràn sinh lực tuổi trẻ.",
            "Cảnh thuyền cá về bến: Rộn rã, tạ ơn biển trời, hương vị nồng đượm của muối mặn."
          ]
        },
        {
          name: "Trong lòng mẹ (Trích 'Những ngày thơ ấu')",
          author: "Nguyên Hồng",
          type: "Hồi kí / Thực hành đọc",
          summary: "Tâm trạng đau đớn, uất ức của chú bé Hồng trước những lời gièm pha độc ác của bà cô và niềm hạnh phúc vỡ òa tột đỉnh khi được ngả đầu vào lòng mẹ sau bao ngày xa cách.",
          keyPoints: [
            "Tình mẫu tử thiêng liêng bất diệt, vượt qua mọi định kiến cay nghiệt của xã hội cũ."
          ]
        }
      ],
      concepts: [
        {
          term: "Người kể chuyện ngôi thứ nhất và thứ ba",
          desc: "Ngôi thứ nhất ('tôi', 'chúng tôi') trực tiếp bộc lộ cảm xúc, nội tâm; ngôi thứ ba (người giấu mặt, toàn tri) quan sát toàn diện câu chuyện từ bên ngoài. Việc chuyển đổi ngôi kể tạo góc nhìn đa chiều, phong phú."
        },
        {
          term: "Số từ",
          desc: "Từ chỉ số lượng (chính xác: một, hai, ba; ước chừng: vài, dăm, mươi) hoặc thứ tự (thứ nhất, thứ nhì...)."
        },
        {
          term: "Phó từ",
          desc: "Từ chuyên đi kèm danh từ (những, các, mọi...) hoặc đi kèm động từ, tính từ để bổ sung ý nghĩa thời gian (đã, đang, sẽ), mức độ (rất, quá, lắm), sự tiếp diễn (vẫn, cứ), phủ định (không, chưa, chẳng)..."
        }
      ]
    },
    vietnameseLang: {
      topic: "Số từ và Phó từ",
      content: "Phân biệt số từ với lượng từ, phó từ bổ nghĩa cho danh từ và phó từ bổ nghĩa cho động từ/tính từ.",
      examples: [
        {
          original: "Hai cây phong đứng sừng sững trên ngọn đồi.",
          expanded: "Số từ: 'Hai' (chỉ số lượng chính xác đứng trước danh từ 'cây phong').",
          note: "Khác với số từ thứ tự như 'Cây phong thứ hai' (đứng sau danh từ)."
        },
        {
          original: "Bé An-tư-nai đang rất chăm chỉ học chữ.",
          expanded: "Phó từ: 'đang' (chỉ thời gian tiếp diễn), 'rất' (chỉ mức độ cao).",
          note: "Bổ sung ý nghĩa trực tiếp cho động từ/tính từ."
        }
      ],
      rules: [
        "Xác định chức năng ngữ pháp và vị trí của từ trong ngữ cảnh cụ thể để tránh nhầm lẫn giữa số từ và danh từ chỉ đơn vị."
      ]
    },
    writing: {
      type: "Viết bài văn phân tích đặc điểm nhân vật trong tác phẩm văn học",
      steps: [
        "1. Mở bài: Giới thiệu tác phẩm, tác giả và nhân vật cần phân tích; nêu ấn tượng khái quát.",
        "2. Thân bài: Triển khai các nét tính cách, phẩm chất tiêu biểu của nhân vật.",
        "   - Mỗi đặc điểm trình bày thành một đoạn văn có dẫn chứng cụ thể (ngoại hình, lời nói, cử chỉ, suy nghĩ).",
        "   - Phân tích nghệ thuật xây dựng nhân vật (ngôi kể, nghệ thuật tương phản, độc thoại nội tâm).",
        "3. Kết bài: Khẳng định ý nghĩa của hình tượng nhân vật và thông điệp mà tác giả gửi gắm."
      ]
    },
    speakingListening: {
      topic: "Trình bày ý kiến về một vấn đề đời sống gợi ra từ nhân vật văn học",
      guide: "Liên hệ phẩm chất của nhân vật (lòng tận tụy của thầy Đuy-sen, nghị lực của An-tư-nai) với trách nhiệm của người học sinh trong cuộc sống hôm nay."
    },
    quiz: [
      {
        question: "Tác dụng nổi bật nhất của việc đan xen hai người kể chuyện (họa sĩ và viện sĩ An-tư-nai) trong truyện 'Người thầy đầu tiên' là gì?",
        options: [
          "Giúp truyện có dung lượng dài hơn",
          "Tạo góc nhìn đa chiều, khách quan và tăng tính chân thực, xúc động cho bức tranh về thầy Đuy-sen",
          "Chứng minh người họa sĩ vẽ tranh đẹp hơn cô bé An-tư-nai",
          "Làm cốt truyện trở nên phức tạp khó đoán hơn"
        ],
        answer: 1,
        explain: "Việc thay đổi điểm nhìn trần thuật giúp câu chuyện vừa mang tính chứng thực lịch sử của một trí thức thành đạt (An-tư-nai), vừa mang sự chiêm nghiệm nghệ thuật của người họa sĩ."
      },
      {
        question: "Từ in hoa trong câu sau thuộc từ loại nào: 'Mẹ em ĐÃ mua HAI cuốn sách MỚI RẤT hay'?",
        options: [
          "ĐÃ (Phó từ), HAI (Số từ), RẤT (Phó từ)",
          "ĐÃ (Số từ), HAI (Lượng từ), RẤT (Tính từ)",
          "ĐÃ (Trạng từ), HAI (Đại từ), RẤT (Quan hệ từ)",
          "Đều là danh từ chỉ số lượng"
        ],
        answer: 0,
        explain: "'Đã' là phó từ chỉ thời gian quá khứ; 'Hai' là số từ chỉ số lượng chính xác; 'Rất' là phó từ chỉ mức độ bổ nghĩa cho tính từ 'hay'."
      }
    ]
  },
  {
    id: "bai-4",
    unit: "BÀI 4",
    volume: "TẬP MỘT",
    title: "Giai điệu đất nước",
    theme: "Tình yêu Tổ quốc, vẻ đẹp thiên nhiên non sông và khát vọng cống hiến cuộc đời",
    color: "blue",
    readTheory: {
      intro: "Cảm nhận tình yêu đất nước qua vẻ đẹp thiên nhiên bốn mùa, cảnh sắc Nam Bộ mộc mạc và lời bình thơ sâu sắc.",
      texts: [
        {
          name: "Mùa xuân nho nhỏ",
          author: "Thanh Hải",
          type: "Thơ năm chữ",
          summary: "Được viết trên giường bệnh trước khi nhà thơ qua đời, bài thơ là bản hòa ca tuyệt đẹp ngợi ca mùa xuân thiên nhiên Huế, mùa xuân cách mạng của đất nước và bày tỏ ước nguyện khiêm nhường: làm một 'mùa xuân nho nhỏ' lặng lẽ dâng hiến cho đời.",
          keyPoints: [
            "Bức tranh mùa xuân thiên nhiên: Hoa tím biếc mọc giữa dòng sông xanh, tiếng chim chiền chiện hót vang trời.",
            "Mùa xuân đất nước: 'Người cầm súng', 'người ra đồng' vất vả mà tiến lên phía trước như vì sao.",
            "Khát vọng dâng hiến chân thành: Làm con chim hót, một cành hoa, một nốt trầm xao xuyến."
          ]
        },
        {
          name: "Gò Me",
          author: "Hoàng Tố Nguyên",
          type: "Thơ tự do",
          summary: "Kí ức chan chứa ân tình của nhà thơ về mảnh đất Gò Me (Tiền Giang) yêu dấu với những đồng lúa bát ngát, rặng trâm bầu, tiếng chim cu gáy và hình ảnh người con gái Nam Bộ duyên dáng, tần tảo.",
          keyPoints: [
            "Hình ảnh quê hương Nam Bộ: Làn điệu dân ca ngọt ngào, ánh trăng thanh bình, hương vị cây trái phù sa.",
            "Nhạc điệu trầm bổng, từ ngữ địa phương đậm đà hương sắc phương Nam."
          ]
        },
        {
          name: "Bài thơ 'Đường núi' của Nguyễn Đình Thi",
          author: "Vũ Quần Phương",
          type: "Nghị luận văn học",
          summary: "Văn bản phân tích, bình luận vẻ đẹp tinh tế, mộc mạc và chất trữ tình sâu lắng trong bài thơ ngắn 'Đường núi', chỉ ra cách thi sĩ gợi tả cảnh chiều vùng cao bằng ít nét chấm phá mà dạt dào tình quê.",
          keyPoints: [
            "Kĩ năng đọc bình luận thơ: Phân biệt văn bản gốc được trích dẫn với lời nhận định, bình giá của nhà phê bình."
          ]
        },
        {
          name: "Chiều biên giới",
          author: "Lò Ngân Sủn",
          type: "Thơ trữ tình / Thực hành đọc",
          summary: "Khúc ca ngợi ca vẻ đẹp hùng vĩ, thiêng liêng của biên cương phía Bắc Tổ quốc trong ánh chiều tà và lòng biết ơn những người lính biên phòng ngày đêm gìn giữ tấc đất quê hương.",
          keyPoints: [
            "Hình ảnh hoa đào, rặng mây, tiếng súng canh gác giữ gìn sự bình yên cho đất nước."
          ]
        }
      ],
      concepts: [
        {
          term: "Cảm xúc trong thơ trữ tình",
          desc: "Nguồn gốc sức gợi của thơ; cảm xúc cá nhân của tác giả hòa điệu với cảm xúc cộng đồng, tạo nên sự đồng cảm sâu rộng nơi độc giả."
        },
        {
          term: "Ngữ cảnh",
          desc: "Bối cảnh ngôn ngữ (các từ ngữ, câu văn xung quanh) và bối cảnh ngoài ngôn ngữ (tác giả, thời đại, hoàn cảnh sáng tác). Nghĩa của từ chỉ được xác định chính xác nhất khi đặt trong ngữ cảnh cụ thể."
        },
        {
          term: "Từ láy",
          desc: "Từ có sự hòa phối ngữ âm giữa các tiếng (láy toàn bộ hoặc láy bộ phận âm đầu/vần), có khả năng gợi hình ảnh, âm thanh, sắc thái biểu cảm cao."
        }
      ]
    },
    vietnameseLang: {
      topic: "Nghĩa của từ trong ngữ cảnh và tác dụng của Từ láy",
      content: "Giải mã nghĩa của từ ngữ theo văn cảnh và khai thác giá trị gợi cảm của hệ thống từ láy trong thơ.",
      examples: [
        {
          original: "Ơi con chim chiền chiện / Hót chi mà vang trời / Từng giọt long lanh rơi / Tôi đưa tay tôi hứng.",
          expanded: "Nghĩa trong ngữ cảnh: 'giọt long lanh' là giọt âm thanh tiếng chim hót được cảm nhận bằng thính giác chuyển sang thị giác và xúc giác (ẩn dụ chuyển đổi cảm giác).",
          note: "Nếu tách rời khỏi câu thơ, 'giọt long lanh' chỉ là giọt nước thông thường."
        },
        {
          original: "Lặng lẽ, nho nhỏ, rộn rã, xôn xao...",
          expanded: "Hệ thống từ láy gợi hình tượng khiêm nhường, âm thầm cống hiến mà tràn đầy sức sống.",
          note: "Từ láy giúp hình tượng thơ trở nên sinh động và giàu nhạc điệu."
        }
      ],
      rules: [
        "Không suy đoán nghĩa của từ một cách máy móc theo nghĩa từ điển đơn thuần khi đọc tác phẩm văn học."
      ]
    },
    writing: {
      type: "Viết bài văn biểu cảm về con người hoặc sự việc",
      steps: [
        "1. Xác định đối tượng biểu cảm (người thân, thầy cô, chú bộ đội...) và tình cảm chủ đạo (kính yêu, biết ơn, tự hào).",
        "2. Tìm các chi tiết, kỉ niệm ấn tượng nhất gợi xúc cảm mãnh liệt.",
        "3. Kết hợp khéo léo phương thức tự sự (kể lại kỉ niệm) và miêu tả (khắc họa dáng vẻ) để bộc lộ cảm xúc trực tiếp hoặc gián tiếp.",
        "4. Sử dụng ngôn từ giàu sắc thái cảm xúc, tránh kể sự việc lan man vô cảm."
      ]
    },
    speakingListening: {
      topic: "Trình bày ý kiến về một hoạt động thiện nguyện vì cộng đồng",
      guide: "Nêu ý nghĩa của việc chia sẻ yêu thương (quyên góp sách vở, áo ấm vùng cao), đề xuất cách thức tham gia thiết thực, hiệu quả và thể hiện sự tôn trọng người được giúp đỡ."
    },
    quiz: [
      {
        question: "Trong bài thơ 'Mùa xuân nho nhỏ', ước nguyện của nhà thơ Thanh Hải trước khi vĩnh biệt cõi đời là gì?",
        options: [
          "Muốn được xây dựng tượng đài nguy nga tráng lệ tại quê nhà",
          "Làm một mùa xuân nho nhỏ lặng lẽ dâng hiến cho đời dù ở tuổi hai mươi hay khi tóc đã bạc",
          "Trở thành một chiến sĩ cầm súng nơi tuyến đầu mặt trận",
          "Viết thật nhiều bản trường ca nổi tiếng lưu danh hậu thế"
        ],
        answer: 1,
        explain: "Ước nguyện cao đẹp và khiêm nhường của nhà thơ là hòa cuộc đời cá nhân vào mùa xuân bất diệt của đất nước: 'Một mùa xuân nho nhỏ / Lặng lẽ dâng cho đời'."
      },
      {
        question: "Cụm từ 'giọt long lanh rơi' trong câu thơ của Thanh Hải là kết quả của biện pháp tu từ độc đáo nào?",
        options: [
          "So sánh ngang bằng",
          "Ẩn dụ chuyển đổi cảm giác (từ thính giác sang thị giác, xúc giác)",
          "Nói quá phóng đại quy mô",
          "Chơi chữ đồng âm"
        ],
        answer: 1,
        explain: "Tiếng chim hót (vốn nghe được bằng tai) ngưng đọng thành từng giọt long lanh ánh sáng (nhìn thấy bằng mắt) và đưa tay hứng (cảm nhận bằng da thịt/xúc giác)."
      }
    ]
  },
  {
    id: "bai-5",
    unit: "BÀI 5",
    volume: "TẬP MỘT",
    title: "Màu sắc trăm miền",
    theme: "Khám phá nét đẹp văn hóa, phong tục, ẩm thực và ngôn ngữ các vùng miền đất nước",
    color: "purple",
    readTheory: {
      intro: "Tìm hiểu thể loại tùy bút, tản văn và văn bản thông tin lễ hội; cảm nhận cái tôi tài hoa gắn bó mật thiết với văn hóa bản địa.",
      texts: [
        {
          name: "Tháng Giêng, mơ về trăng non rét ngọt",
          author: "Vũ Bằng",
          type: "Tùy bút",
          summary: "Bức tranh mùa xuân Bắc Việt qua ngòi bút hoài niệm da diết của người con Hà Nội sống xa quê: mưa riêu riêu, gió lành lạnh, cái rét ngọt ngào cùng những phong tục đón Tết thiêng liêng ấm áp bên gia đình.",
          keyPoints: [
            "Cái tôi tác giả: Đa cảm, sành sỏi, tha thiết yêu từng chuyển động tinh vi của thiên nhiên Hà Nội.",
            "Ngôn ngữ tùy bút: Giàu chất thơ, nhiều so sánh liên tưởng bay bổng, tràn trề nhựa sống."
          ]
        },
        {
          name: "Chuyện cơm hến",
          author: "Hoàng Phủ Ngọc Tường",
          type: "Tản văn",
          summary: "Từ món ăn bình dị đậm đà vị cay nồng của xứ Huế, tác giả khám phá bản sắc văn hóa ẩm thực, tính cách cần cù, thanh đạm và triết lí sống bảo lưu truyền thống của người dân Cố đô.",
          keyPoints: [
            "Nét đặc trưng của cơm hến: Món ăn nghèo mà cầu kì với mười mấy thứ gia vị, nổi bật vị cay cay xé lưỡi.",
            "Cái tôi hóm hỉnh, uyên bác, kết hợp nhuần nhuyễn giữa trải nghiệm thực tế và văn hóa học."
          ]
        },
        {
          name: "Hội lồng tồng",
          author: "Trần Quốc Vượng, Lê Văn Hảo, Dương Tất Từ",
          type: "Văn bản thông tin",
          summary: "Giới thiệu tường tận lễ hội xuống đồng mùa xuân của đồng bào dân tộc Tày: thời gian tổ chức, nghi lễ cúng thần Nông, các trò chơi dân gian ném còn, hát lượn và ý nghĩa cầu mong mùa màng tốt tươi.",
          keyPoints: [
            "Cách tổ chức văn bản thông tin mạch lạc, tôn trọng sự thật phong tục cổ truyền."
          ]
        },
        {
          name: "Những khuôn cửa dấu yêu",
          author: "Trương Anh Ngọc",
          type: "Tản văn / Thực hành đọc",
          summary: "Những quan sát tinh tế về những ô cửa sổ ở các thành phố châu Âu và Việt Nam – nơi mở ra không gian giao lưu giữa tâm hồn con người và thế giới xung quanh.",
          keyPoints: [
            "Ý niệm về không gian sống và sự cởi mở gắn kết giữa các nền văn hóa."
          ]
        }
      ],
      concepts: [
        {
          term: "Tùy bút",
          desc: "Thể loại kí lấy cái tôi tác giả làm điểm tựa; ghi chép sự việc/con người chân thực nhưng chủ yếu để bộc lộ cảm xúc, suy tư; bố cục tự do, phóng túng; ngôn từ giàu nhạc điệu và chất thơ."
        },
        {
          term: "Tản văn",
          desc: "Văn xuôi ngắn gọn, hàm súc, mượn một chi tiết đời sống để giãi bày tâm trạng, triết lí; kết hợp linh hoạt kể, tả, bình luận; giọng điệu gần gũi."
        },
        {
          term: "Từ ngữ địa phương (Phương ngữ)",
          desc: "Từ ngữ chỉ được sử dụng ở một hoặc vài vùng miền nhất định (Bắc Bộ, Trung Bộ, Nam Bộ), góp phần tạo màu sắc địa phương đậm đà cho tác phẩm."
        },
        {
          term: "Văn bản tường trình",
          desc: "Kiểu văn bản hành chính dùng để báo cáo trung thực, chuẩn xác một sự việc đã xảy ra gửi tới cá nhân hoặc cơ quan có thẩm quyền giải quyết."
        }
      ]
    },
    vietnameseLang: {
      topic: "Từ ngữ địa phương và Tác dụng trong văn học",
      content: "Nhận biết từ ngữ địa phương qua các miền và giải thích giá trị văn hóa biểu cảm.",
      examples: [
        {
          original: "Má bưng tô cơm hến cay xè thơm lựng.",
          expanded: "Các từ địa phương Nam Bộ / Trung Bộ: 'má' (mẹ), 'tô' (bát), 'cay xè' (rất cay), 'lựng' (nồng nàn).",
          note: "Tạo không khí chân thực, gợi hồn cốt quê hương xứ sở."
        }
      ],
      rules: [
        "Trong văn bản hành chính hoặc giao tiếp trang trọng toàn dân, cần sử dụng từ ngữ chuẩn mực toàn dân, tránh lạm dụng từ địa phương gây khó hiểu."
      ]
    },
    writing: {
      type: "Viết văn bản tường trình",
      steps: [
        "1. Tuân thủ thể thức hành chính: Quốc hiệu & Tiêu ngữ; Địa điểm & Thời gian; Tên văn bản (BẢN TƯỜNG TRÌNH về việc...); Nơi nhận.",
        "2. Thông tin người tường trình: Họ tên, lớp, trường, chức vụ/liên hệ.",
        "3. Nội dung diễn biến sự việc: Thời gian, địa điểm, các cá nhân liên quan, chuỗi hành động nguyên nhân - hậu quả.",
        "4. Cam đoan thông tin trung thực và lời hứa/đề xuất giải quyết.",
        "5. Kí và ghi rõ họ tên người làm tường trình."
      ]
    },
    speakingListening: {
      topic: "Trình bày ý kiến về việc bảo tồn văn hóa truyền thống trong đời sống hiện đại",
      guide: "Khẳng định giá trị của ẩm thực, trang phục, lễ hội dân gian; chỉ ra nguy cơ mai một và đề xuất giải pháp tiếp nối sáng tạo của giới trẻ."
    },
    quiz: [
      {
        question: "Đặc điểm nổi bật nhất phân biệt thể loại Tùy bút với truyện ngắn là gì?",
        options: [
          "Tùy bút luôn có cốt truyện ly kì với nhiều nhân vật đối kháng",
          "Tùy bút không bắt buộc phải có cốt truyện hoàn chỉnh mà cấu tứ dựa trên mạch cảm xúc, suy tưởng tự do của 'cái tôi' tác giả",
          "Tùy bút luôn viết bằng thơ bốn chữ",
          "Tùy bút bắt buộc phải hư cấu 100% không được dựa trên sự thật"
        ],
        answer: 1,
        explain: "Tùy bút thuộc loại hình kí trữ tình, lấy cái tôi cảm xúc và suy tưởng của nhà văn làm trục liên kết, không lệ thuộc vào diễn biến cốt truyện truyền thống."
      },
      {
        question: "Khi viết một bản tường trình, yếu tố nào sau đây là quan trọng hàng đầu?",
        options: [
          "Ngôn từ bay bổng, lãng mạn, nhiều hình ảnh so sánh nhân hóa",
          "Tính xác thực, khách quan về thời gian, địa điểm, sự việc và thái độ chịu trách nhiệm",
          "Độ dài càng dài càng tốt và có nhiều tranh ảnh minh họa",
          "Kể lại bằng giọng điệu hài hước gây cười"
        ],
        answer: 1,
        explain: "Bản tường trình là văn bản hành chính phục vụ xác minh vụ việc nên bắt buộc phải tuyệt đối trung thực, chính xác và có thể kiểm chứng."
      }
    ]
  }
];

module.exports = { tap1Data };
