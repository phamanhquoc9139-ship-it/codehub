// scratch/hdtnhn10_data_p1.js
// Hoạt động trải nghiệm, hướng nghiệp 10 – Bộ Kết nối tri thức với cuộc sống (Chủ đề 1 – 6)

const streams = [
  {
    id: "xa-hoi",
    name: "Mạch Hướng đến xã hội",
    topics: [1, 5, 6],
    desc: "Phát huy truyền thống nhà trường, trách nhiệm với gia đình và tham gia xây dựng cộng đồng văn minh."
  },
  {
    id: "ban-than",
    name: "Mạch Hướng vào bản thân",
    topics: [2, 3, 4],
    desc: "Khám phá tính cách, quan điểm sống, tư duy tích cực/phản biện, kế hoạch tài chính và tự tin giao tiếp."
  },
  {
    id: "tu-nhien",
    name: "Mạch Hướng đến tự nhiên",
    topics: [7, 8],
    desc: "Đánh giá hành vi, tuyên truyền bảo tồn cảnh quan thiên nhiên và khảo sát, bảo vệ môi trường tự nhiên địa phương."
  },
  {
    id: "huong-nghiep",
    name: "Mạch Hướng nghiệp",
    topics: [9, 10, 11],
    desc: "Tìm hiểu nghề sản xuất – kinh doanh – dịch vụ, đánh giá độ phù hợp bản thân, tìm hiểu trường đào tạo và lập kế hoạch rèn luyện."
  }
];

const topicsP1 = {
  1: {
    num: 1,
    title: "Phát huy truyền thống nhà trường",
    stream: "Hướng đến xã hội",
    color: "indigo",
    pages: "tr. 6–12",
    subtitle: "Thực hiện tốt nội quy trường lớp – cộng đồng, tìm hiểu và lập kế hoạch giáo dục truyền thống nhà trường (như 'Tôn sư trọng đạo'), thu hút bạn bè cùng tham gia",
    diagramCaption: "Sơ đồ 6 hoạt động cốt lõi Chủ đề 1: Từ rà soát Nội quy → Tìm hiểu Truyền thống → Lập Kế hoạch giáo dục truyền thống → Thu hút bạn bè → Tự rèn luyện & Đánh giá",
    objectives: [
      "Thực hiện tốt nội quy, quy định của trường, lớp, cộng đồng và có biện pháp tự rèn luyện để khắc phục những điều cản trở việc chấp hành.",
      "Tìm hiểu được lịch sử, thành tích và các truyền thống tiêu biểu của nhà trường; lập và thực hiện được kế hoạch giáo dục, phát huy truyền thống nhà trường.",
      "Biết cách vận động, thuyết phục, thu hút bạn bè cùng tham gia các hoạt động chung và đánh giá được ý nghĩa của hoạt động giáo dục truyền thống.",
      "Tích cực tham gia các hoạt động giáo dục theo chủ đề của Đoàn Thanh niên Cộng sản Hồ Chí Minh, nhà trường và địa phương tổ chức."
    ],
    activities: [
      {
        step: "Hoạt động 1 (Khám phá – Kết nối)",
        name: "Tìm hiểu nội quy, quy định của trường, lớp và cộng đồng",
        goal: "Nắm vững các quy định về học tập, giao tiếp, trang phục, nền nếp và quy tắc nơi công cộng để tự giác thực hiện.",
        process: [
          "Rà soát các nhóm quy định trọng tâm: (1) <strong>Giao tiếp, ứng xử</strong> (lễ phép với thầy cô, đoàn kết với bạn bè, ngôn ngữ văn minh); (2) <strong>Học tập</strong> (đi học đúng giờ, chuẩn bị bài, trung thực trong thi cử); (3) <strong>Trang phục, tác phong</strong> (đồng phục gọn gàng, đeo thẻ học sinh); (4) <strong>Bảo vệ tài sản chung, vệ sinh & an toàn giao thông</strong> tại cộng đồng.",
          "Lập bảng đối chiếu gồm 3 cột: <em>Quy định cụ thể – Mục đích, ý nghĩa của quy định – Biện pháp bản thân thực hiện tốt</em>."
        ],
        product: "Bảng tổng hợp nội quy trường, lớp, cộng đồng và các biện pháp chấp hành của cá nhân."
      },
      {
        step: "Hoạt động 2 (Khám phá – Kết nối)",
        name: "Tìm hiểu truyền thống nhà trường",
        goal: "Nhận diện các giá trị truyền thống vẻ vang của trường qua các thế hệ thầy và trò.",
        process: [
          "Sưu tầm tư liệu, hình ảnh, bài viết, câu chuyện lịch sử tại Phòng truyền thống nhà trường, website trường hoặc phỏng vấn thầy cô, cựu học sinh.",
          "Xác định các truyền thống tiêu biểu của trường: <strong>Truyền thống hiếu học – dạy tốt, học tốt; Truyền thống 'Tôn sư trọng đạo'; Truyền thống đoàn kết, tương thân tương ái; Truyền thống văn nghệ, thể dục thể thao và hoạt động Đoàn sôi nổi</strong>.",
          "Phân tích biểu hiện cụ thể của từng truyền thống qua các thế hệ và tác động tích cực của truyền thống đối với sự trưởng thành của mỗi học sinh."
        ],
        product: "Hồ sơ tư liệu / Tập san / Infographic giới thiệu ít nhất 3 truyền thống tiêu biểu của nhà trường."
      },
      {
        step: "Hoạt động 3 (Rèn luyện)",
        name: "Xây dựng kế hoạch giáo dục truyền thống nhà trường",
        goal: "Biết lập bản kế hoạch khả thi, rõ người – rõ việc – rõ thời gian để lan tỏa một truyền thống của trường.",
        process: [
          "Lựa chọn 1 truyền thống trọng tâm (ví dụ SGK: <strong>Giáo dục truyền thống 'Tôn sư trọng đạo'</strong> nhân dịp 20/11 hoặc truyền thống hiếu học).",
          "Thiết kế bản kế hoạch đầy đủ 7 mục: (1) Tên truyền thống & Mục tiêu; (2) Nội dung hoạt động (tìm hiểu lịch sử, sưu tầm hình ảnh tri ân thầy cô, phân tích ý nghĩa); (3) Hình thức tổ chức (thuyết trình, chiếu video, tham quan phòng truyền thống, diễn tiểu phẩm/kịch tương tác); (4) Phân công người/nhóm phụ trách; (5) Thời gian & Địa điểm; (6) Phương tiện chuẩn bị; (7) Kết quả mong đợi."
        ],
        product: "Bản kế hoạch giáo dục truyền thống 'Tôn sư trọng đạo' (hoặc truyền thống trường) của nhóm/lớp."
      },
      {
        step: "Hoạt động 4 (Rèn luyện)",
        name: "Rèn kĩ năng thu hút bạn bè tham gia hoạt động chung",
        goal: "Vận dụng các biện pháp khích lệ, phân công hợp lí để lôi cuốn cả những bạn nhút nhát, e ngại cùng tham gia.",
        process: [
          "Áp dụng 4 biện pháp thu hút bạn bè hiệu quả: (1) <strong>Động viên, thuyết phục chân thành</strong> về ý nghĩa hấp dẫn của hoạt động; (2) <strong>Mời bạn cùng tham gia ngay từ khâu lên ý tưởng, thiết kế</strong>; (3) <strong>Phân công nhiệm vụ đúng sở trường, năng lực</strong> của bạn (ví dụ bạn ngại nói trước đám đông nhưng vẽ đẹp hoặc giỏi kỹ thuật dựng video thì giao thiết kế poster/clip); (4) <strong>Đồng hành, hỗ trợ kịp thời</strong> khi bạn gặp lúng túng.",
          "Thực hành đóng vai xử lý tình huống: thuyết phục một bạn học giỏi, có năng khiếu nhưng rụt rè tham gia đội kịch/tuyên truyền của lớp."
        ],
        product: "Kịch bản đối thoại thuyết phục bạn bè và bảng phân công nhiệm vụ theo thế mạnh thành viên."
      },
      {
        step: "Hoạt động 5 & 6 (Vận dụng – Đánh giá)",
        name: "Tự rèn luyện khắc phục trở ngại chấp hành nội quy & Đánh giá ý nghĩa hoạt động",
        goal: "Chuyển hóa nhận thức thành thói quen tự giác hằng ngày và rút kinh nghiệm sau sự kiện.",
        process: [
          "Nhận diện những khó khăn, trở ngại cá nhân trong việc thực hiện nội quy (ví dụ: thức khuya xem điện thoại dẫn đến dậy muộn; ngại phát biểu; chưa gọn gàng) → Đặt biện pháp khắc phục cụ thể (đặt báo thức sớm 15 phút, tắt thiết bị lúc 22h30...).",
          "Sau khi thực hiện kế hoạch giáo dục truyền thống, tổ chức họp nhóm đánh giá: ý nghĩa của hoạt động đối với tập thể lớp, những điều đã làm tốt, điểm cần điều chỉnh và cam kết tiếp tục phát huy."
        ],
        product: "Phiếu theo dõi tự rèn luyện nội quy và Báo cáo đánh giá kết quả hoạt động giáo dục truyền thống."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 1: Kế hoạch Giáo dục Truyền thống Nhà trường & Tự rèn luyện Nội quy",
      fields: [
        { label: "1. Ba truyền thống tiêu biểu của trường em", placeholder: "VD: 1. Tôn sư trọng đạo; 2. Hiếu học – Đỗ đạt cao; 3. Nhân ái, tích cực tình nguyện..." },
        { label: "2. Tên hoạt động giáo dục truyền thống & Hình thức tổ chức", placeholder: "VD: Diễn đàn 'Tri ân người lái đò' – Chiếu video kỷ niệm + Tiểu phẩm tương tác tại lớp..." },
        { label: "3. Hai biện pháp thu hút bạn rụt rè cùng tham gia", placeholder: "VD: Mời bạn phụ trách thiết kế slide/poster đúng sở trường và xếp bạn làm việc cùng nhóm bạn thân..." },
        { label: "4. Trở ngại khi thực hiện nội quy của bản thân & Cách khắc phục", placeholder: "VD: Đôi khi đi học sát giờ → Khắc phục: Chuẩn bị sách vở từ tối hôm trước, đặt chuông báo thức lúc 5h45..." }
      ]
    },
    application: [
      "Tự giác chấp hành nghiêm túc nội quy nhà trường, quy định nơi công cộng và an toàn giao thông mỗi ngày.",
      "Tích cực tham gia các đợt thi đua chào mừng ngày Nhà giáo Việt Nam 20/11, ngày thành lập Đoàn 26/3 và viết bài lan tỏa gương sáng học tập của trường."
    ],
    evaluationCriteria: [
      "Thực hiện tốt nội quy, quy định của trường, lớp và cộng đồng.",
      "Nêu được ít nhất 3 truyền thống tiêu biểu của nhà trường.",
      "Thực hiện được ít nhất 2 biện pháp để thu hút các bạn tham gia vào các hoạt động chung.",
      "Lập và thực hiện được ít nhất 1 kế hoạch giáo dục truyền thống nhà trường.",
      "Nêu được ít nhất 2 ý nghĩa của hoạt động giáo dục truyền thống đối với cá nhân và tập thể."
    ]
  },

  2: {
    num: 2,
    title: "Khám phá bản thân",
    stream: "Hướng vào bản thân",
    color: "cyan",
    pages: "tr. 13–19",
    subtitle: "Nhận diện nét tính cách (điểm mạnh, điểm yếu), rèn luyện tư duy tích cực, xác định quan điểm sống và lập kế hoạch phát triển tính cách",
    diagramCaption: "Sơ đồ Chu trình Tư duy tích cực (Sự kiện khách quan → Suy nghĩ đa chiều, tích cực → Cảm xúc cân bằng → Hành vi ứng xử hợp lý) & Phát triển tính cách",
    objectives: [
      "Chỉ ra được những đặc điểm tính cách (điểm mạnh, điểm yếu) của bản thân trong học tập, lao động, giao tiếp và sinh hoạt hằng ngày; biết cách phát huy điểm mạnh và khắc phục điểm yếu.",
      "Nhận diện được biểu hiện của tư duy tích cực; biết điều chỉnh suy nghĩ, cảm xúc và cách ứng xử của bản thân theo hướng tích cực trong các tình huống khác nhau.",
      "Hiểu được khái niệm và vai trò của quan điểm sống; phân tích được mối liên hệ giữa quan điểm sống với hành động, lựa chọn và trách nhiệm cá nhân."
    ],
    activities: [
      {
        step: "Hoạt động 1 (Khám phá – Kết nối)",
        name: "Xác định tính cách của bản thân (Điểm mạnh & Điểm yếu)",
        goal: "Nhận diện khách quan nét tính cách của mình thông qua tự quan sát và lắng nghe phản hồi từ người thân, thầy cô, bạn bè.",
        process: [
          "Tự liệt kê các biểu hiện tính cách của bản thân qua 4 môi trường: <em>trong học tập, trong công việc chung, trong giao tiếp với mọi người và trong sinh hoạt cá nhân</em>.",
          "Đối chiếu nhận xét của bản thân với nhận xét của bố mẹ, bạn bè để phân loại rõ:<br>• <strong>Điểm mạnh cần phát huy:</strong> Chăm chỉ, kiên trì, hòa đồng, trung thực, cởi mở, ngăn nắp, giàu lòng trắc ẩn...<br>• <strong>Điểm yếu cần hạn chế:</strong> Nhút nhát, thiếu kiên nhẫn, nóng vội, hay trì hoãn (nước đến chân mới nhảy), hiếu thắng, cả nể..."
        ],
        product: "Bảng tự nhận diện tính cách bản thân (Điểm mạnh – Điểm yếu – Tình huống bộc lộ cụ thể)."
      },
      {
        step: "Hoạt động 2 (Khám phá – Kết nối)",
        name: "Tìm hiểu về điều chỉnh tư duy theo hướng tích cực",
        goal: "Phân biệt được sự kiện thực tế với suy diễn tiêu cực để làm chủ cảm xúc và lời nói.",
        process: [
          "Phân tích tình huống mẫu trong SGK: <em>Bạn A đi học muộn bị lớp trưởng nhắc nhở và ghi vào sổ theo dõi</em>.<br>• Nếu suy nghĩ tiêu cực (<em>'Lớp trưởng cố tình bắt lỗi, ghét mình'</em>) → dễ dẫn đến tức giận, cãi lại, mất đoàn kết.<br>• Nếu điều chỉnh sang <strong>tư duy tích cực</strong> (<em>'Lớp trưởng đang làm đúng trách nhiệm để giúp lớp giữ nền nếp và giúp mình chú ý đi học đúng giờ hơn'</em>) → vui vẻ nhận lỗi, cảm ơn bạn và đi học sớm hơn.",
          "Rút ra quy tắc điều chỉnh tư duy: <strong>Dừng lại hít thở sâu → Tách biệt sự việc khách quan khỏi suy diễn chủ quan → Đặt mình vào vị trí người khác (nhìn đa chiều) → Chọn lời nói/hành động mang tính xây dựng</strong>."
        ],
        product: "Sơ đồ so sánh chuỗi hệ quả của Suy nghĩ tiêu cực vs Tư duy tích cực trong cùng một tình huống."
      },
      {
        step: "Hoạt động 3 (Khám phá – Kết nối)",
        name: "Tìm hiểu về Quan điểm sống",
        goal: "Hiểu quan điểm sống là kim chỉ nam định hướng thái độ, lựa chọn và cách hành xử của mỗi người.",
        process: [
          "Khái niệm: <strong>Quan điểm sống</strong> là cách nhìn nhận, niềm tin và giá trị mà mỗi người lựa chọn làm chuẩn mực định hướng cho lối sống, hành động và cách ứng xử của mình.",
          "Thảo luận, tranh biện có lí lẽ về các quan điểm quen thuộc trong đời sống:<br>• <em>“Có chí thì nên”</em> & <em>“Thất bại là mẹ thành công”</em> (đề cao nghị lực, coi vấp ngã là bài học kinh nghiệm để trưởng thành).<br>• <em>“Tốt gỗ hơn tốt nước sơn”</em> (trân trọng phẩm chất, năng lực bên trong nhưng trong xã hội hiện đại cũng cần kết hợp hình thức lịch sự, chỉn chu phù hợp)."
        ],
        product: "Bài phát biểu ngắn chia sẻ Quan điểm sống / Lí tưởng sống của bản thân ở tuổi 16."
      },
      {
        step: "Hoạt động 4 & 5 (Rèn luyện – Vận dụng)",
        name: "Lập kế hoạch phát triển tính cách & Thực hành điều chỉnh tư duy trong thực tế",
        goal: "Thiết lập lộ trình rèn luyện tính cách bằng các hành động nhỏ mỗi ngày và xử lý êm đẹp các tình huống bất như ý.",
        process: [
          "Lập kế hoạch phát triển tính cách theo mẫu SGK:<br>• <em>Phát huy tính chăm chỉ:</em> Tự giác hoàn thành bài tập, chủ động nhận việc ở lớp và phụ giúp việc nhà.<br>• <em>Khắc phục tính nhút nhát:</em> Chủ động chào hỏi, giơ tay phát biểu ít nhất 1 lần/ngày, tham gia câu lạc bộ.<br>• <em>Khắc phục tính hiếu thắng:</em> Lắng nghe hết ý kiến của bạn trước khi phản hồi, tôn trọng sự khác biệt và tìm phương án dung hòa.",
          "Thực hành xử lý tình huống: (1) Khi bạn thân thất hứa không sang học nhóm như đã hẹn; (2) Khi bố mẹ chưa đồng ý cho đi dã ngoại xa cùng các bạn."
        ],
        product: "Bản kế hoạch rèn luyện tính cách và Nhật ký ghi nhận những tình huống đã điều chỉnh tư duy tích cực."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 2: Phiếu Tự khám phá Tính cách & Điều chỉnh Tư duy Tích cực",
      fields: [
        { label: "1. Ba nét tính cách là Điểm mạnh của bản thân & Cách phát huy", placeholder: "VD: Cẩn thận, chân thành, ham học hỏi → Phát huy bằng cách hỗ trợ nhóm kiểm tra sản phẩm..." },
        { label: "2. Điểm yếu trong tính cách cần khắc phục & Hành động cụ thể", placeholder: "VD: Hay ngại phát biểu trước đám đông → Mỗi tuần chủ động xung phong trả lời ít nhất 2 lần..." },
        { label: "3. Quan điểm sống tâm đắc nhất của bản thân", placeholder: "VD: 'Không ngừng nỗ lực mỗi ngày để trở thành phiên bản tốt hơn của chính mình hôm qua'..." },
        { label: "4. Cách điều chỉnh suy nghĩ tích cực khi bố mẹ chưa cho đi chơi xa", placeholder: "VD: Hiểu rằng bố mẹ lo lắng cho sự an toàn của mình → Bình tĩnh trình bày rõ lịch trình và người phụ trách..." }
      ]
    },
    application: [
      "Mỗi tối dành 5 phút nhìn lại các sự việc trong ngày để nhận diện cảm xúc và rèn thói quen nhìn nhận mặt tích cực, bài học rút ra từ khó khăn.",
      "Lắng nghe góp ý chân thành từ bố mẹ, thầy cô và bạn bè để hoàn thiện nét tính cách của bản thân."
    ],
    evaluationCriteria: [
      "Chỉ ra được ít nhất 3 nét tính cách (bao gồm điểm mạnh và điểm yếu) của bản thân.",
      "Lập và bước đầu thực hiện được kế hoạch phát triển điểm mạnh, hạn chế điểm yếu về tính cách.",
      "Xác định được quan điểm sống tích cực cho bản thân và giải thích được ảnh hưởng của nó tới hành động.",
      "Biết điều chỉnh tư duy theo hướng tích cực khi đối diện với các tình huống bất đồng hoặc khó khăn."
    ]
  },

  3: {
    num: 3,
    title: "Rèn luyện bản thân",
    stream: "Hướng vào bản thân",
    color: "emerald",
    pages: "tr. 20–27",
    subtitle: "Rèn luyện tinh thần trách nhiệm, tính tự chủ, lòng tự trọng, ý chí vượt khó, tư duy phản biện và lập kế hoạch tài chính cá nhân hợp lí",
    diagramCaption: "Sơ đồ 4 phẩm chất – năng lực trụ cột Chủ đề 3: Trách nhiệm • Tự chủ – Tự trọng – Vượt khó • Tư duy phản biện • Kế hoạch tài chính cá nhân",
    objectives: [
      "Thể hiện được tinh thần trách nhiệm trong việc thực hiện nhiệm vụ được giao và chủ động hỗ trợ những người cùng tham gia.",
      "Thể hiện được sự tự chủ, lòng tự trọng và ý chí vượt khó để đạt được mục tiêu đề ra trong học tập, cuộc sống.",
      "Hình thành và vận dụng được tư duy phản biện khi đánh giá sự vật, hiện tượng, thông tin.",
      "Xây dựng và thực hiện được kế hoạch tài chính cá nhân một cách hợp lí, tiết kiệm và hiệu quả."
    ],
    activities: [
      {
        step: "Hoạt động 1 & 2 (Khám phá – Kết nối)",
        name: "Nhận diện biểu hiện của Trách nhiệm, Tự chủ, Tự trọng và Ý chí vượt khó",
        goal: "Hiểu rõ các tiêu chuẩn hành vi của người có trách nhiệm, tự chủ, tự trọng và kiên cường trước nghịch cảnh.",
        process: [
          "<strong>Biểu hiện của người có trách nhiệm:</strong> Tìm hiểu kỹ yêu cầu trước khi làm; chủ động nhận phần việc phù hợp khả năng; hoàn thành đúng hạn và đảm bảo chất lượng; dám nhận lỗi và sửa lỗi khi kết quả chưa tốt (không đổ lỗi); báo cáo sớm khi gặp vướng mắc và nhiệt tình hỗ trợ đồng đội.",
          "<strong>Biểu hiện của Tự chủ – Tự trọng – Vượt khó:</strong><br>• <em>Tự chủ:</em> Tự sắp xếp thời gian biểu, làm chủ cảm xúc và hành vi trước cám dỗ (trò chơi điện tử, mạng xã hội).<br>• <em>Tự trọng:</em> Giữ chữ tín, lời hứa; trung thực trong thi cử; coi trọng danh dự bản thân và tôn trọng người khác.<br>• <em>Ý chí vượt khó:</em> Kiên trì tìm giải pháp khi gặp bài khó hoặc hoàn cảnh bất lợi (như tấm gương anh Vinh trong SGK: biết sắp xếp khoa học giữa việc học, phụ giúp ông bà, chăm sóc em và làm thêm phù hợp độ tuổi)."
        ],
        product: "Bảng tiêu chuẩn hành vi rèn luyện Trách nhiệm – Tự chủ – Tự trọng – Vượt khó của học sinh lớp 10."
      },
      {
        step: "Hoạt động 3 (Rèn luyện)",
        name: "Rèn luyện Tư duy phản biện khi đánh giá sự vật, hiện tượng",
        goal: "Không tiếp nhận thông tin một cách thụ động, một chiều; biết đặt câu hỏi kiểm chứng bằng lí lẽ và dẫn chứng.",
        process: [
          "<strong>Quy trình 5 bước Tư duy phản biện:</strong> (1) Đặt câu hỏi đa chiều (Ai? Cái gì? Vì sao? Có luôn đúng trong mọi hoàn cảnh không?); (2) Thu thập và kiểm chứng độ tin cậy của nguồn thông tin; (3) Phân tích vấn đề từ nhiều góc độ khác nhau; (4) Xem xét các lập luận trái chiều và ngoại lệ; (5) Đưa ra kết luận khách quan dựa trên bằng chứng.",
          "<strong>Thực hành phản biện 2 nhận định trong SGK:</strong><br>• <em>Nhận định 1: “Đại học là con đường ngắn nhất dẫn đến thành công”</em> → Góc nhìn phản biện: Đại học cung cấp nền tảng tri thức và phương pháp bài bản rất quan trọng, nhưng không phải là con đường duy nhất; học nghề kỹ thuật cao, khởi nghiệp thực tế gắn với tự học suốt đời cũng dẫn tới thành công nếu phù hợp năng lực và hoàn cảnh.<br>• <em>Nhận định 2: “Người học giỏi luôn là người bạn tuyệt vời”</em> → Góc nhìn phản biện: Học giỏi thể hiện năng lực nhận thức tốt, nhưng để là một người bạn tuyệt vời còn cần sự chân thành, biết lắng nghe, sẻ chia và tôn trọng bạn bè."
        ],
        product: "Bài lập luận phản biện đa chiều cho các nhận định xã hội và quy tắc kiểm chứng tin tức trên mạng."
      },
      {
        step: "Hoạt động 4 & 5 (Rèn luyện – Vận dụng)",
        name: "Xây dựng và thực hiện Kế hoạch tài chính cá nhân hợp lí",
        goal: "Biết quản lý thu – chi, tiết kiệm có mục tiêu và tạo nguồn thu hợp pháp phù hợp với lứa tuổi học sinh.",
        process: [
          "<strong>Cấu trúc một Bản kế hoạch tài chính cá nhân (Ngắn hạn / Trung hạn):</strong><br>1. <strong>Mục tiêu tài chính cụ thể:</strong> Cần mua gì / làm gì? Tổng số tiền cần là bao nhiêu? Thời hạn hoàn thành? (Ví dụ SGK: Mua máy tính phục vụ học tập trị giá <strong>5.000.000 đồng</strong> trong vòng 10 tháng).<br>2. <strong>Thực trạng tài chính hiện có:</strong> Số tiền tiết kiệm đã có sẵn (ví dụ 2.000.000 đồng) → Số tiền còn thiếu cần tích lũy thêm (3.000.000 đồng, tức 300.000 đồng/tháng).<br>3. <strong>Giải pháp tăng thu & tiết kiệm chi phù hợp lứa tuổi học sinh:</strong> Trích tiết kiệm từ tiền lì xì, học bổng, tiền ăn sáng/tiêu vặt (cắt giảm các khoản chi theo cảm hứng như trà sữa, đồ chơi không cần thiết); kết hợp lao động vừa sức (làm đồ thủ công handmade, trồng rau mầm, thu gom giấy vụn/nhựa tái chế, phụ giúp việc gia đình).<br>4. <strong>Bảng theo dõi thu – chi hằng tháng</strong> và người tư vấn, giám sát (bố mẹ)."
        ],
        product: "Bản kế hoạch tài chính cá nhân hoàn chỉnh (Mục tiêu – Thời hạn – Nguồn thu – Mức tiết kiệm/tháng) và Sổ theo dõi thu chi."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 3: Lập Kế hoạch Tài chính Cá nhân & Rèn Tư duy Phản biện",
      fields: [
        { label: "1. Mục tiêu tài chính cá nhân (Tên mục tiêu, Số tiền cần, Thời gian)", placeholder: "VD: Mua góc học tập / khóa học ngoại ngữ / máy tính – Cần 2.000.000đ trong 5 tháng..." },
        { label: "2. Số tiền hiện có & Khoản cần tiết kiệm mỗi tháng", placeholder: "VD: Hiện có 500.000đ; còn thiếu 1.500.000đ → Cần tiết kiệm 300.000đ/tháng..." },
        { label: "3. Biện pháp tiết kiệm chi tiêu & Tạo nguồn thu phù hợp", placeholder: "VD: Giảm chi tiêu vặt không cần thiết (tiết kiệm 200.000đ/tháng) + Thu gom sách báo/nhựa tái chế, làm đồ handmade (100.000đ/tháng)..." },
        { label: "4. Một thói quen rèn tính Tự chủ & Trách nhiệm trong tuần này", placeholder: "VD: Tự giác tắt điện thoại khi ngồi vào bàn học từ 19h30 đến 22h00, hoàn thành đúng hạn phần việc nhóm..." }
      ]
    },
    application: [
      "Duy trì ghi chép sổ thu – chi cá nhân hằng tuần, phân biệt rõ giữa 'Nhu cầu thiết yếu (Needs)' và 'Mong muốn nhất thời (Wants)' trước khi mua sắm.",
      "Luôn kiểm chứng thông tin từ ít nhất 2 nguồn chính thống trước khi tin hoặc chia sẻ trên mạng xã hội."
    ],
    evaluationCriteria: [
      "Hoàn thành tốt các nhiệm vụ được giao và chủ động hỗ trợ người cùng thực hiện.",
      "Thể hiện được tính tự chủ, lòng tự trọng trong học tập và trong việc thực hiện kế hoạch cá nhân.",
      "Thể hiện được ý chí vượt khó khi gặp trở ngại trong học tập và cuộc sống.",
      "Biết vận dụng tư duy phản biện để đánh giá đa chiều một vấn đề hoặc nhận định.",
      "Xây dựng và thực hiện được ít nhất 1 kế hoạch tài chính cá nhân hợp lí."
    ]
  },

  4: {
    num: 4,
    title: "Chủ động, tự tin trong học tập và giao tiếp",
    stream: "Hướng vào bản thân",
    color: "amber",
    pages: "tr. 28–33",
    subtitle: "Rèn luyện tính chủ động trong mọi môi trường học tập, sự tự tin – thân thiện với thầy cô, bạn bè và cách ứng xử văn minh, phù hợp trong gia đình – xã hội",
    diagramCaption: "Sơ đồ 4 không gian rèn luyện Chủ động & Tự tin (Lớp học – Tự học ở nhà – Câu lạc bộ/Nhóm – Gia đình & Cộng đồng)",
    objectives: [
      "Thể hiện được sự chủ động trong các môi trường học tập và giao tiếp khác nhau (ở lớp, ở nhà, trong câu lạc bộ, ngoài cộng đồng).",
      "Thể hiện được sự tự tin, thái độ thân thiện, cởi mở và tôn trọng trong giao tiếp với thầy cô, bạn bè.",
      "Biết cách ứng xử phù hợp, linh hoạt và văn minh trong các tình huống giao tiếp ở gia đình và ngoài xã hội."
    ],
    activities: [
      {
        step: "Hoạt động 1 & 2 (Khám phá – Kết nối)",
        name: "Nhận diện biểu hiện Chủ động trong học tập và Tự tin, thân thiện trong giao tiếp",
        goal: "Xác định rõ các hành vi cụ thể của người học chủ động và người giao tiếp tự tin, lịch thiệp.",
        process: [
          "<strong>Biểu hiện của sự chủ động trong học tập:</strong> Tự giác bắt đầu giờ học không cần nhắc nhở; đọc trước bài mới và đánh dấu câu hỏi cần giải đáp; chủ động tra cứu tài liệu tại thư viện/Internet; mạnh dạn hỏi thầy cô, bạn bè khi chưa hiểu; tích cực nhận nhiệm vụ trong nhóm và tìm cách áp dụng kiến thức đã học vào thực tế.",
          "<strong>Biểu hiện của sự tự tin, thân thiện trong giao tiếp:</strong> Ánh mắt chân thành, nụ cười thân thiện; trình bày ý kiến mạch lạc, rõ ràng nhưng không áp đặt; chăm chú lắng nghe và tôn trọng ý kiến khác biệt; biết chủ động bắt chuyện làm quen, sẵn sàng đề nghị giúp đỡ bạn và cầu thị đón nhận góp ý."
        ],
        product: "Bảng kiểm (Checklist) các hành vi Chủ động học tập & Tự tin, thân thiện trong giao tiếp."
      },
      {
        step: "Hoạt động 3 & 4 (Rèn luyện)",
        name: "Thực hành xử lý tình huống Chủ động học tập & Giao tiếp trong trường học",
        goal: "Giải quyết linh hoạt các tình huống phát sinh trong làm việc nhóm và sinh hoạt tập thể lớp.",
        process: [
          "<strong>Tình huống học tập 1:</strong> Sát ngày thuyết trình của nhóm thì bạn phụ trách trình bày chính bị ốm đột xuất → <em>Cách xử lý chủ động:</em> Nhóm lập tức hỏi thăm sức khỏe bạn, chủ động nhận phần thuyết trình thay bạn, cùng nhau ôn lại slide để bài báo cáo của nhóm vẫn diễn ra đúng tiến độ.",
          "<strong>Tình huống học tập 2:</strong> Lớp cần viết kịch bản tiểu phẩm bằng tiếng Anh nhưng năng lực từ vựng của nhóm còn hạn chế → <em>Cách xử lý chủ động:</em> Chủ động viết khung kịch bản trước, tra từ điển và mạnh dạn nhờ giáo viên tiếng Anh hoặc bạn giỏi ngoại ngữ trong lớp góp ý, chỉnh sửa.",
          "<strong>Tình huống giao tiếp trường học:</strong> Khi bạn được cô giáo và cả lớp tín nhiệm đề cử làm Lớp trưởng nhưng còn e ngại vì sợ một vài bạn chưa đồng tình → <em>Ứng xử tự tin, cầu thị:</em> Tự tin nhận nhiệm vụ, cảm ơn sự tin tưởng của cô và các bạn, đồng thời chủ động trò chuyện, lắng nghe ý kiến của các bạn còn băn khoăn để cùng hợp tác xây dựng lớp."
        ],
        product: "Phương án xử lý các tình huống học tập – giao tiếp học đường thông qua đóng vai tương tác."
      },
      {
        step: "Hoạt động 5 & 6 (Rèn luyện – Vận dụng)",
        name: "Ứng xử phù hợp trong gia đình – xã hội & Duy trì thói quen chủ động mỗi ngày",
        goal: "Ứng xử lễ phép, thấu cảm với người thân và văn minh nơi công cộng.",
        process: [
          "Trong gia đình: Chủ động tâm sự, chia sẻ chuyện trường lớp với bố mẹ; lắng nghe lời khuyên của người lớn; khi có ý kiến khác biệt thì bình tĩnh trình bày lễ phép, không vùng vằng hay im lặng tiêu cực.",
          "Ngoài xã hội: Chủ động chào hỏi hàng xóm, người lớn tuổi; nói lời 'Cảm ơn', 'Xin lỗi' đúng lúc; xếp hàng văn minh và sẵn sàng hướng dẫn, giúp đỡ người già, trẻ nhỏ nơi công cộng."
        ],
        product: "Nhật ký rèn luyện thói quen chủ động học tập và giao tiếp văn minh trong 2 tuần."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 4: Kế hoạch Rèn luyện Tính Chủ động Học tập & Tự tin Giao tiếp",
      fields: [
        { label: "1. Môn học em muốn nâng cao tính chủ động nhất & Cách thực hiện", placeholder: "VD: Môn Tiếng Anh / Toán – Đọc bài trước 15 phút ở nhà, ghi sẵn 2 câu hỏi để trao đổi trên lớp..." },
        { label: "2. Tình huống giao tiếp ở trường em từng cảm thấy ngại ngùng", placeholder: "VD: Ngại thuyết trình trước lớp hoặc ngại bắt chuyện với các bạn ở nhóm khác..." },
        { label: "3. Hành động cụ thể để tăng sự tự tin, thân thiện trong tuần này", placeholder: "VD: Chuẩn bị kỹ dàn ý ra thẻ nhớ (flashcard), tập nói trước gương và chủ động mỉm cười chào các bạn..." },
        { label: "4. Cách chủ động chia sẻ, gắn kết hơn với bố mẹ ở nhà", placeholder: "VD: Mỗi bữa tối kể cho bố mẹ nghe 1 chuyện vui ở trường và hỏi thăm công việc của bố mẹ..." }
      ]
    },
    application: [
      "Thiết lập và duy trì thời khóa biểu tự học cố định ở nhà; áp dụng phương pháp học nhóm và sơ đồ tư duy cho từng môn học.",
      "Tích cực tham gia ít nhất 1 câu lạc bộ học thuật, văn nghệ hoặc thể thao của trường để mở rộng giao tiếp."
    ],
    evaluationCriteria: [
      "Thể hiện được tính chủ động học tập ở trên lớp, ở nhà và trong hoạt động nhóm.",
      "Giao tiếp tự tin, thân thiện, tôn trọng và hợp tác với thầy cô, bạn bè.",
      "Ứng xử lễ phép, gần gũi, phù hợp trong các tình huống giao tiếp với các thành viên trong gia đình.",
      "Ứng xử văn minh, lịch sự và chủ động hỗ trợ mọi người ở nơi công cộng."
    ]
  },

  5: {
    num: 5,
    title: "Trách nhiệm với gia đình",
    stream: "Hướng đến xã hội",
    color: "rose",
    pages: "tr. 34–39",
    subtitle: "Quan tâm, chăm sóc sức khỏe thể chất và tinh thần của người thân, lập kế hoạch lao động gia đình và đề xuất phương án góp phần phát triển kinh tế hộ gia đình phù hợp lứa tuổi",
    diagramCaption: "Sơ đồ 3 trụ cột Trách nhiệm với gia đình (Chăm sóc thể chất & tinh thần người thân – Lao động việc nhà tự giác – Góp phần phát triển kinh tế gia đình)",
    objectives: [
      "Thể hiện được sự quan tâm, chăm sóc thường xuyên đối với sức khỏe thể chất và đời sống tinh thần của bố mẹ, ông bà và người thân trong gia đình.",
      "Tự giác lập kế hoạch và thực hiện tốt trách nhiệm lao động trong gia đình.",
      "Đề xuất, lựa chọn và tham gia thực hiện được các việc làm phù hợp với điều kiện, lứa tuổi để góp phần phát triển kinh tế gia đình."
    ],
    activities: [
      {
        step: "Hoạt động 1 & 2 (Khám phá – Kết nối)",
        name: "Xác định trách nhiệm với gia đình & Ứng xử có trách nhiệm trong các tình huống",
        goal: "Biết đặt mình vào hoàn cảnh của các thành viên trong gia đình để ưu tiên sự gắn kết, yêu thương và sẻ chia.",
        process: [
          "<strong>Bốn nhóm trách nhiệm cốt lõi của người con trong gia đình:</strong> (1) Quan tâm, chăm sóc sức khỏe thể chất và tinh thần của ông bà, bố mẹ, anh chị em; (2) Thực hiện tự giác các công việc nhà được phân công; (3) Giữ gìn hòa khí, truyền thống tốt đẹp của gia đình; (4) Tiết kiệm chi tiêu và tham gia phụ giúp kinh tế gia đình vừa sức.",
          "<strong>Phân tích & giải quyết 4 tình huống thực tế trong SGK:</strong><br>• <em>Tình huống 1 (Trùng lịch đi chơi với bạn vào đúng ngày kỉ niệm ngày cưới của bố mẹ):</em> Chủ động xin lỗi và hẹn lại bạn vào dịp khác để ở nhà cùng chuẩn bị bữa cơm ấm cúng chúc mừng bố mẹ.<br>• <em>Tình huống 2 (Bà bị sốt cao đúng lúc em chuẩn bị đi dự cuộc thi ở trường):</em> Báo ngay cho bố mẹ/người lớn về tình trạng của bà, lấy khăn ấm chườm và thuốc cho bà, bàn giao chu đáo với bố mẹ rồi mới đi thi.<br>• <em>Tình huống 3 (Khi bố mẹ có chuyện bất hòa, căng thẳng):</em> Giữ thái độ lễ phép, làm cầu nối dịu dàng, hoàn thành tốt việc nhà để bố mẹ bớt mệt mỏi và lựa lời tâm sự để bố mẹ thấu hiểu nhau.<br>• <em>Tình huống 4 (Em tiết kiệm được khoản tiền định mua xe đạp mới nhưng ông đang ốm cần tiền mua thuốc điều trị):</em> Tự nguyện lấy số tiền tiết kiệm của mình đưa bố mẹ để lo thuốc men cho ông trước, vì sức khỏe của ông là quan trọng nhất."
        ],
        product: "Phương án giải quyết thấu tình đạt lý cho 4 tình huống gia đình và thông điệp yêu thương gửi người thân."
      },
      {
        step: "Hoạt động 3 (Rèn luyện)",
        name: "Lập và thực hiện Kế hoạch lao động trong gia đình",
        goal: "Biến việc nhà thành trách nhiệm tự giác, khoa học thay vì đợi bố mẹ nhắc nhở.",
        process: [
          "Liệt kê các công việc lao động gia đình trong tuần: nấu cơm, rửa bát, quét dọn nhà cửa, giặt và gấp quần áo, chăm sóc vườn cây/vật nuôi, hướng dẫn em nhỏ học bài.",
          "Lập bảng kế hoạch gồm 5 cột: <em>Công việc cụ thể – Thời gian thực hiện – Dụng cụ/Phương tiện – Người phối hợp – Kết quả cần đạt</em>; tự kiểm điểm cuối tuần xem việc nào đã làm tốt, việc nào cần cải thiện."
        ],
        product: "Bảng kế hoạch lao động gia đình hằng tuần và Nhật ký kết quả thực hiện."
      },
      {
        step: "Hoạt động 4 & 5 (Rèn luyện – Vận dụng)",
        name: "Đề xuất và lập kế hoạch góp phần phát triển kinh tế gia đình phù hợp khả năng",
        goal: "Biết vận dụng điều kiện sẵn có của gia đình và nhu cầu địa phương để phụ giúp tăng thu nhập hoặc giảm chi phí cho gia đình.",
        process: [
          "Phân tích các mô hình gợi ý trong SGK: (1) Phụ gia đình làm bánh truyền thống (như bánh giò, bánh chưng, sữa hạt) theo bí quyết sẵn có; (2) Trồng rau sạch, hoa tươi bán vào dịp lễ Tết; (3) Phụ bán hàng tạp hóa, đóng gói nông sản, giới thiệu sản phẩm đặc sản của gia đình.",
          "<strong>Lưu ý an toàn & pháp luật:</strong> Học sinh lớp 10 chỉ tham gia các công việc phù hợp sức khỏe, không ảnh hưởng việc học chính khóa và luôn có sự đồng ý, hướng dẫn của bố mẹ.",
          "Lập bản kế hoạch gồm: <em>Mục tiêu – Công việc cụ thể – Thời gian – Vốn/Nguồn lực sẵn có – Dự kiến kết quả/thu nhập – Người hỗ trợ (bố mẹ)</em>."
        ],
        product: "Bản kế hoạch đề xuất phương án góp phần phát triển kinh tế gia đình."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 5: Kế hoạch Lao động Gia đình & Đóng góp Kinh tế Hộ gia đình",
      fields: [
        { label: "1. Việc làm cụ thể chăm sóc sức khỏe thể chất & tinh thần bố mẹ/ông bà", placeholder: "VD: Hỏi thăm, bóp vai cho ông bà/bố mẹ sau giờ làm; nhắc ông bà uống thuốc đúng giờ..." },
        { label: "2. Các công việc nhà em đảm nhận cố định hằng ngày", placeholder: "VD: Nấu cơm chiều (17h30–18h15), rửa bát buổi tối, dọn vệ sinh nhà cửa và chăm vườn cây cuối tuần..." },
        { label: "3. Ý tưởng / Việc làm vừa sức góp phần phát triển kinh tế hoặc tiết kiệm cho gia đình", placeholder: "VD: Trồng rau sạch tại vườn nhà để giảm chi phí chợ; phụ bố mẹ đóng gói/bán hàng vào cuối tuần..." },
        { label: "4. Thời gian thực hiện & Cách cân đối để không ảnh hưởng việc học", placeholder: "VD: Thực hiện vào chiều thứ Bảy, Chủ nhật (15h00–17h00) sau khi đã hoàn thành bài tập..." }
      ]
    },
    application: [
      "Thực hiện đều đặn kế hoạch việc nhà mỗi ngày; chủ động đỡ đần ngay khi thấy bố mẹ đi làm về mệt.",
      "Tắt các thiết bị điện, nước khi không sử dụng để tiết kiệm chi phí sinh hoạt cho gia đình."
    ],
    evaluationCriteria: [
      "Thường xuyên quan tâm, chăm sóc sức khỏe thể chất và tinh thần của người thân trong gia đình.",
      "Chủ động, có trách nhiệm trước các vấn đề khó khăn hoặc biến cố của gia đình.",
      "Hoàn thành tốt các công việc lao động gia đình theo kế hoạch đã lập.",
      "Đề xuất được phương án phù hợp và tham gia đóng góp phát triển kinh tế gia đình trong khả năng."
    ]
  },

  6: {
    num: 6,
    title: "Tham gia xây dựng cộng đồng",
    stream: "Hướng đến xã hội",
    color: "purple",
    pages: "tr. 40–45",
    subtitle: "Mở rộng quan hệ xã hội, thu hút cộng đồng tham gia hoạt động chung, lập và thực hiện kế hoạch tuyên truyền văn hóa ứng xử nơi công cộng",
    diagramCaption: "Sơ đồ Quy trình Tổ chức Chiến dịch Tuyên truyền Văn hóa Ứng xử nơi công cộng & Đánh giá hiệu quả hoạt động cộng đồng",
    objectives: [
      "Biết cách mở rộng các mối quan hệ xã hội tích cực và thu hút người dân tại địa phương cùng tham gia các hoạt động vì cộng đồng.",
      "Lập và thực hiện được kế hoạch tuyên truyền trong cộng đồng về văn hóa ứng xử nơi công cộng.",
      "Tích cực tham gia các hoạt động xây dựng, phát triển cộng đồng và đánh giá được ý nghĩa, kết quả của các hoạt động đó."
    ],
    activities: [
      {
        step: "Hoạt động 1 & 2 (Khám phá – Kết nối)",
        name: "Biện pháp mở rộng quan hệ xã hội & Thu hút người dân tham gia hoạt động cộng đồng",
        goal: "Trang bị kỹ năng giao tiếp cộng đồng để kết nối các lực lượng cùng làm việc thiện nguyện, văn hóa.",
        process: [
          "<strong>Các hoạt động cộng đồng tiêu biểu:</strong> Bảo vệ và chăm sóc di tích lịch sử – văn hóa địa phương; hoạt động 'Đền ơn đáp nghĩa', thăm hỏi gia đình chính sách, người già neo đơn; vệ sinh đường làng ngõ xóm ('Ngày Chủ nhật xanh'); tuyên truyền phòng chống tệ nạn xã hội.",
          "<strong>4 Biện pháp mở rộng quan hệ và thu hút cộng đồng hiệu quả:</strong><br>1. <strong>Chủ động làm quen, tìm điểm chung</strong> với thái độ chân thành, lễ phép, hòa đồng.<br>2. <strong>Tự mình làm gương trước</strong> bằng những hành động cụ thể, thiết thực.<br>3. <strong>Giải thích rõ lợi ích chung</strong> của hoạt động đối với khu phố/thôn xóm và thuyết phục bằng tình cảm chân thành.<br>4. <strong>Lắng nghe ý kiến của người dân</strong> và mời mọi người tham gia phần việc phù hợp với thời gian, sức khỏe của họ."
        ],
        product: "Danh mục ít nhất 4 biện pháp mở rộng quan hệ và thu hút cộng đồng tham gia hoạt động xã hội."
      },
      {
        step: "Hoạt động 3 & 4 (Rèn luyện)",
        name: "Thiết kế và thực hiện Kế hoạch tuyên truyền về Văn hóa ứng xử nơi công cộng",
        goal: "Xây dựng chiến dịch truyền thông thiết thực nhằm nâng cao ý thức văn minh nơi công cộng tại địa phương.",
        process: [
          "<strong>Khảo sát vấn đề ứng xử nơi công cộng cần tuyên truyền:</strong> Xếp hàng văn minh; nói năng lịch sự, không nói tục chửi bậy hay mở nhạc quá ồn; giữ gìn vệ sinh chung, bỏ rác đúng nơi quy định; nhường ghế cho người già, phụ nữ mang thai, trẻ nhỏ trên xe buýt; ứng xử văn hóa khi tham gia giao thông và tại khu di tích.",
          "<strong>Lập bảng Kế hoạch tuyên truyền gồm 8 mục:</strong><br>1. Tên chiến dịch & Mục tiêu tuyên truyền.<br>2. Đối tượng hướng tới (học sinh, người dân khu dân cư, du khách...).<br>3. Thông điệp cốt lõi (ngắn gọn, dễ nhớ, ví dụ: <em>'Lời nói văn minh – Hành động đẹp – Cộng đồng xanh'</em>).<br>4. Nội dung & Hình thức tuyên truyền (vẽ poster/infographic, phát thanh thanh niên, kịch tương tác, phát tờ rơi).<br>5. Thời gian & Địa điểm.<br>6. Phân công nhiệm vụ.<br>7. Phương tiện chuẩn bị.<br>8. Sản phẩm & Kết quả dự kiến."
        ],
        product: "Bản kế hoạch tuyên truyền văn hóa ứng xử nơi công cộng và bộ ấn phẩm truyền thông (Poster / Kịch bản)."
      },
      {
        step: "Hoạt động 5 & 6 (Vận dụng – Đánh giá)",
        name: "Tham gia hoạt động phát triển cộng đồng tại địa phương & Đánh giá kết quả",
        goal: "Trực tiếp đóng góp công sức xây dựng nơi cư trú và đánh giá sự trưởng thành của bản thân.",
        process: [
          "Triển khai hoạt động tuyên truyền hoặc lao động cộng đồng đã chọn cùng Đoàn xã/phường hoặc chi đoàn lớp.",
          "Thu thập phản hồi của người dân tham dự, ghi nhận số lượng người hưởng ứng và tự đánh giá tác động của hoạt động đối với cảnh quan, văn hóa khu dân cư."
        ],
        product: "Báo cáo tổng kết hoạt động cộng đồng (kèm số liệu người tham gia, phản hồi và bài học kinh nghiệm)."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 6: Kế hoạch Tuyên truyền Văn hóa Ứng xử nơi Công cộng",
      fields: [
        { label: "1. Vấn đề ứng xử nơi công cộng cần tuyên truyền tại địa phương/trường học", placeholder: "VD: Văn hóa xếp hàng, phân loại rác tại nguồn và giữ trật tự, lịch sự tại điểm công cộng..." },
        { label: "2. Thông điệp tuyên truyền (Slogan) & Hình thức thực hiện", placeholder: "VD: Thông điệp 'Ứng xử văn minh – Nét đẹp tuổi 16'; Hình thức: Poster trực quan + Tiểu phẩm kịch tương tác..." },
        { label: "3. Bốn biện pháp thu hút bạn bè và người dân cùng hưởng ứng", placeholder: "VD: 1. Làm gương trước; 2. Phối hợp Đoàn phường; 3. Mời người dân cùng thảo luận; 4. Chia việc nhỏ dễ thực hiện..." },
        { label: "4. Kết quả mong đợi & Cách đánh giá sau chiến dịch", placeholder: "VD: Thu hút ít nhất 30 người tham dự, treo 5 bảng thông điệp tại nhà văn hóa/bảng tin..." }
      ]
    },
    application: [
      "Luôn gương mẫu thực hiện nếp sống văn minh đô thị/nông thôn mới; tích cực tham gia các đợt tình nguyện của Đoàn Thanh niên tại khu dân cư.",
      "Mở rộng kết nối với các anh chị đoàn viên, cán bộ khu phố để phối hợp tổ chức sinh hoạt hè và hoạt động thiện nguyện."
    ],
    evaluationCriteria: [
      "Nêu được ít nhất 4 biện pháp mở rộng quan hệ và thu hút cộng đồng vào các hoạt động xã hội.",
      "Tạo lập được mối quan hệ mới với ít nhất 2 người và thu hút được ít nhất 2 người cùng tham gia hoạt động cộng đồng.",
      "Lập và thực hiện được ít nhất 1 kế hoạch tuyên truyền về văn hóa ứng xử nơi công cộng.",
      "Tham gia tích cực và đánh giá được kết quả, ý nghĩa của hoạt động phát triển cộng đồng."
    ]
  }
};

module.exports = { streams, topicsP1 };
