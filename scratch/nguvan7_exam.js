// 40 questions for Đấu trường Trạng Nguyên Ngữ Văn 7 (60:00)
// Bộ Kết nối tri thức với cuộc sống

const examQuestions = [
  {
    q: "Trong truyện 'Bầy chim chìa vôi', bối cảnh không gian và thời gian diễn ra câu chuyện có đặc điểm gì nổi bật?",
    options: [
      "Một buổi chiều mùa hạ êm ả trên bãi ngô xanh ngát",
      "Đêm mưa bão lớn mù trời trên dòng sông Đáy dâng nước lũ ngập bãi cát",
      "Buổi trưa hè nắng gắt nơi góc vườn quê",
      "Sáng mùa thu sương sớm bồng bềnh giăng mắc"
    ],
    a: 1,
    exp: "Truyện diễn ra vào một đêm mưa bão lũ lớn, nước sông dâng cao đe dọa bầy chim non trên doi cát giữa sông."
  },
  {
    q: "Thành phần nào của câu sau được mở rộng thành cụm từ: 'Dưới vòm trời lấp lánh ngàn sao, hai anh em thì thầm trò chuyện'?",
    options: [
      "Chỉ mở rộng trạng ngữ",
      "Mở rộng trạng ngữ (cụm danh từ) và vị ngữ (cụm động từ)",
      "Chỉ mở rộng chủ ngữ",
      "Không thành phần nào được mở rộng"
    ],
    a: 1,
    exp: "'Dưới vòm trời lấp lánh ngàn sao' là cụm danh từ mở rộng trạng ngữ; 'thì thầm trò chuyện' là cụm động từ mở rộng vị ngữ."
  },
  {
    q: "Trong văn bản 'Đi lấy mật' (Đoàn Giỏi), tập tính đặc biệt nào của loài ong rừng U Minh được chú ý nhất?",
    options: [
      "Ong rừng chỉ làm tổ dưới lòng đất",
      "Ong rừng thích làm tổ trên những nhánh cây tràm nghiêng được con người gác kèo theo hướng gió",
      "Ong rừng chỉ ăn mật hoa súng trên đồng trũng",
      "Ong rừng không bao giờ rời tổ khi có người tới gần"
    ],
    a: 1,
    exp: "Nghệ thuật 'gác kèo' của cư dân U Minh dựa trên tập tính ong thích làm tổ trên các nhánh cây tràm thoai thoải đón ánh mặt trời."
  },
  {
    q: "Thể thơ bốn chữ và năm chữ thường có đặc điểm gieo vần nào?",
    options: [
      "Chỉ gieo vần lưng ở giữa câu",
      "Chủ yếu gieo vần chân (vần ở cuối câu) với các hình thức vần liền hoặc vần cách",
      "Bắt buộc phải gieo một vần duy nhất cho toàn bài (độc vận)",
      "Không hề sử dụng vần"
    ],
    a: 1,
    exp: "Thơ bốn chữ và năm chữ chủ yếu sử dụng vần chân ở cuối dòng thơ, phối hợp nhịp nhàng giữa vần liền và vần cách."
  },
  {
    q: "Câu thơ nào dưới đây trong bài 'Đồng dao mùa xuân' (Nguyễn Khoa Điềm) sử dụng biện pháp tu từ Nói giảm nói tránh?",
    options: [
      "Có một người lính / Đi vào núi xanh",
      "Anh không về nữa / Anh vẫn một mình",
      "Một ngày hòa bình / Bay lên hạt nổ",
      "Ba lô con cóc / Tấm áo màu xanh"
    ],
    a: 1,
    exp: "'Anh không về nữa' là cách nói giảm nói tránh cho sự hi sinh anh dũng của người lính trẻ ngoài mặt trận."
  },
  {
    q: "Tình cảm bao trùm bài thơ 'Gặp lá cơm nếp' của nhà thơ Thanh Thảo là gì?",
    options: [
      "Nỗi nhớ người yêu tha thiết ở hậu phương",
      "Tình yêu tha thiết dành cho người mẹ tảo tần hòa quyện với tình yêu sâu nặng đối với quê hương đất nước",
      "Sự tiếc nuối những món ăn sơn hào hải vị chốn thành thị",
      "Khát khao được xuất ngũ trở về quê làm ruộng"
    ],
    a: 1,
    exp: "Mùi hương lá cơm nếp đánh thức trong tâm hồn người lính tình yêu thương mẹ và tình cảm gắn bó thiêng liêng với Tổ quốc."
  },
  {
    q: "Trong truyện 'Người thầy đầu tiên' của Chingiz Aitmatov, hình ảnh hai cây phong trên đồi gắn liền với điều gì?",
    options: [
      "Nơi chôn giấu kho báu cổ của bộ tộc",
      "Tình cảm kính yêu, lòng tri ân sâu nặng với thầy Đuy-sen và khát vọng vươn tới chân trời tri thức",
      "Địa điểm thi đua bắn cung của thanh niên trong làng",
      "Ranh giới phân chia ruộng đất giữa hai dòng họ"
    ],
    a: 1,
    exp: "Hai cây phong do thầy Đuy-sen và cô bé An-tư-nai cùng trồng là biểu tượng thiêng liêng của tình thầy trò và ước mơ tương lai tươi sáng."
  },
  {
    q: "Đặc điểm nổi bật của người kể chuyện ngôi thứ nhất ('tôi') là gì?",
    options: [
      "Biết hết mọi suy nghĩ thầm kín của tất cả các nhân vật trong truyện",
      "Trực tiếp tham gia hoặc chứng kiến sự việc, trực tiếp bộc lộ cảm xúc, suy nghĩ chủ quan của mình",
      "Đứng hoàn toàn ngoài câu chuyện và không có cảm xúc riêng",
      "Bắt buộc phải là nhân vật phản diện"
    ],
    a: 1,
    exp: "Người kể chuyện ngôi thứ nhất xưng 'tôi' đem lại tính chân thực, gần gũi và trực tiếp bày tỏ nội tâm nhân vật."
  },
  {
    q: "Trong câu: 'Những ngày thơ ấu, tôi RẤT thích ngắm BA con chim nhỏ', các từ in hoa thuộc từ loại nào?",
    options: [
      "RẤT (Phó từ chỉ mức độ), BA (Số từ chỉ số lượng)",
      "RẤT (Tính từ), BA (Danh từ)",
      "RẤT (Đại từ), BA (Lượng từ)",
      "RẤT (Số từ), BA (Phó từ)"
    ],
    a: 0,
    exp: "'Rất' là phó từ bổ nghĩa mức độ cho động từ 'thích'; 'Ba' là số từ chỉ số lượng chính xác bổ nghĩa cho danh từ 'con chim'."
  },
  {
    q: "Khát vọng chân thành của nhà thơ Thanh Hải trong bài thơ 'Mùa xuân nho nhỏ' được thể hiện qua những hình ảnh nào?",
    options: [
      "Làm con đại bàng tung cánh bay khắp bốn phương",
      "Làm một con chim hót, một cành hoa, một nốt trầm xao xuyến lặng lẽ dâng hiến cho đời",
      "Làm một ngọn hải đăng rực rỡ trên biển đông",
      "Làm một tướng quân bách chiến bách thắng"
    ],
    a: 1,
    exp: "Ước nguyện khiêm nhường mà cao đẹp: làm con chim hót, cành hoa tỏa hương, nốt trầm xao xuyến trong bản hòa ca đất nước."
  },
  {
    q: "Hình ảnh quê hương Gò Me trong thơ của Hoàng Tố Nguyên mang đậm sắc thái của vùng đất nào?",
    options: [
      "Vùng cao Tây Bắc hiểm trở sương mù",
      "Đồng bằng sông Cửu Long Nam Bộ trù phú, ngọt ngào câu hò điệu lí",
      "Miền Trung bão lũ cát trắng nắng tràn",
      "Đồng bằng sông Hồng với cây đa bến nước sân đình"
    ],
    a: 1,
    exp: "Gò Me là vùng quê Tiền Giang thuộc Nam Bộ với ruộng đồng cò bay thẳng cánh, rặng trâm bầu và giọng hò ngọt lịm."
  },
  {
    q: "Khi đọc hiểu một bài văn nghị luận bình luận thơ (như bài 'Bài thơ Đường núi của Nguyễn Đình Thi'), độc giả cần phân biệt rõ điều gì?",
    options: [
      "Phân biệt thơ bốn chữ và thơ lục bát",
      "Phân biệt ý kiến, nhận định đánh giá của nhà phê bình với chính câu chữ văn bản thơ gốc được phân tích",
      "Phân biệt tác giả đã qua đời hay còn sống",
      "Phân biệt năm xuất bản và giá tiền cuốn sách"
    ],
    a: 1,
    exp: "Cần tách bạch giữa câu thơ/bằng chứng trích dẫn của thi sĩ với lời bình luận, diễn giải chủ quan của nhà phê bình."
  },
  {
    q: "Thể loại Tùy bút (như 'Tháng Giêng, mơ về trăng non rét ngọt' của Vũ Bằng) có nét đặc trưng cốt lõi nào?",
    options: [
      "Phải có xung đột giai cấp quyết liệt và kết thúc có hậu",
      "Lấy cái tôi trữ tình, suy tưởng phóng túng của nhà văn làm điểm tựa; bố cục tự do, giàu chất thơ và nhạc điệu",
      "Bắt buộc viết theo thể thơ song thất lục bát",
      "Chỉ kể lại chuyện ma quái hoang đường"
    ],
    a: 1,
    exp: "Tùy bút thuộc loại hình kí trữ tình, cấu tứ linh hoạt dựa trên dòng cảm xúc và sự uyên bác của cái tôi tác giả."
  },
  {
    q: "Món ăn nào được Hoàng Phủ Ngọc Tường lấy làm điểm xuất phát để khám phá văn hóa và tính cách con người xứ Huế?",
    options: [
      "Bún bò Huế cay nồng",
      "Món Cơm hến bình dị với vị cay xé lưỡi",
      "Bánh bột lọc gói lá chuối",
      "Chè hạt sen long nhãn bọc đường"
    ],
    a: 1,
    exp: "Tác phẩm 'Chuyện cơm hến' khai thác triết lí ẩm thực và đời sống thanh đạm, chung tình của người dân xứ Huế qua bát cơm hến."
  },
  {
    q: "Văn bản tường trình bắt buộc phải đáp ứng yêu cầu nào quan trọng nhất?",
    options: [
      "Dùng nhiều biện pháp tu từ so sánh, phóng đại để gây xúc động mạnh",
      "Thông tin về thời gian, địa điểm, nhân vật và chuỗi sự việc phải tuyệt đối khách quan, trung thực và có thể kiểm chứng",
      "Phải có độ dài tối thiểu mười trang giấy thi",
      "Trang trí viền hoa lá cầu kì quanh văn bản"
    ],
    a: 1,
    exp: "Văn bản tường trình là văn bản hành chính công vụ, tính xác thực và trách nhiệm pháp lí là tiêu chuẩn số một."
  },
  {
    q: "Bài học then chốt rút ra từ truyện ngụ ngôn 'Đẽo cày giữa đường' là gì?",
    options: [
      "Không nên làm nghề thợ mộc vì rất tốn gỗ",
      "Phải có chính kiến, kiên định với mục tiêu và biết lắng nghe lời khuyên một cách tỉnh táo, có chọn lọc",
      "Nên bán cày cho voi với giá thật đắt",
      "Phải nghe theo lời của tất cả mọi người đi ngang qua đường"
    ],
    a: 1,
    exp: "Truyện phê phán thói ba phải, nhẹ dạ cả tin, khuyên con người cần có lập trường vững vàng và chuyên môn độc lập."
  },
  {
    q: "Thành ngữ 'Ếch ngồi đáy giếng' nhằm phê phán đối tượng nào trong xã hội?",
    options: [
      "Những người bơi lội kém hay sợ nước sâu",
      "Những kẻ hiểu biết nông cạn, hạn hẹp nhưng lại tự phụ, kiêu ngạo cho mình là tài giỏi nhất",
      "Những người sống cô đơn nơi rừng sâu núi thẳm",
      "Những người không chịu đi đào giếng lấy nước ngọt"
    ],
    a: 1,
    exp: "Thành ngữ phê phán những kẻ tầm nhìn hạn hẹp như miệng giếng mà ngỡ mình là chúa tể muôn loài."
  },
  {
    q: "Câu tục ngữ nào dưới đây đúc kết kinh nghiệm dự báo thời tiết của nhân dân ta?",
    options: [
      "Đói cho sạch, rách cho thơm",
      "Chuồn chuồn bay thấp thì mưa, bay cao thì nắng, bay vừa thì râm",
      "Ăn quả nhớ kẻ trồng cây",
      "Lá lành đùm lá rách"
    ],
    a: 1,
    exp: "Câu tục ngữ đúc kết kinh nghiệm quan sát độ cao bay của chuồn chuồn (do độ ẩm không khí) để đoán biết nắng mưa."
  },
  {
    q: "Điểm khác biệt căn bản giữa biện pháp tu từ Nói quá và hành vi Nói khoác là gì?",
    options: [
      "Nói quá dùng trong thơ, nói khoác dùng trong văn xuôi",
      "Nói quá nhằm mục đích nghệ thuật nhấn mạnh, tăng biểu cảm tích cực; nói khoác là bịa đặt sai sự thật để lừa dối, khoe khoang vô căn cứ",
      "Nói quá làm người nghe tức giận, nói khoác làm người nghe thích thú",
      "Hai khái niệm này hoàn toàn đồng nhất không có gì khác nhau"
    ],
    a: 1,
    exp: "Nói quá là thủ pháp nghệ thuật chân chính; nói khoác là hành vi gian dối, khoác lác đáng phê phán."
  },
  {
    q: "Tàu ngầm Nô-ti-lớt (Nautilus) trong tiểu thuyết của Jules Verne chạy bằng nguồn năng lượng tiên tiến nào được dự báo trước thời đại?",
    options: [
      "Sức gió và buồm vải bạt",
      "Điện năng đại dương vô tận",
      "Sức chèo của hàng ngàn nô lệ",
      "Đốt than đá thông thường"
    ],
    a: 1,
    exp: "Jules Verne đã dự báo thiên tài về con tàu ngầm chạy hoàn toàn bằng điện năng khai thác từ các khoáng chất biển cả."
  },
  {
    q: "Trong một đoạn văn, dấu hiệu nào cho thấy văn bản đạt được tính Mạch lạc?",
    options: [
      "Các câu văn đều có độ dài bằng nhau chằn chặn",
      "Tất cả các câu, các đoạn đều tập trung làm sáng tỏ một chủ đề thống nhất và được sắp xếp theo trình tự logic hợp lí",
      "Sử dụng thật nhiều dấu chấm hỏi và chấm than",
      "Mỗi câu nói về một đề tài hoàn toàn khác nhau"
    ],
    a: 1,
    exp: "Mạch lạc là sự thống nhất nội dung xoay quanh một chủ đề và sự triển khai tuần tự hợp lí của các ý tưởng."
  },
  {
    q: "Trong câu: 'Hắn thở hổn hển, lắp bắp: 'Tôi... tôi không ngờ sự việc lại... lại ra nông nỗi này…'', dấu chấm lửng có tác dụng gì?",
    options: [
      "Biểu thị bộ phận liệt kê chưa hết các loài động vật",
      "Biểu thị lời nói ngập ngừng, đứt quãng vì sợ hãi, bối rối",
      "Dùng để trích dẫn lời thơ",
      "Thay thế cho dấu chấm hết câu"
    ],
    a: 1,
    exp: "Dấu chấm lửng ở đây mô phỏng lời nói ngắc ngứ, ngập ngừng đứt quãng của nhân vật khi mất bình tĩnh."
  },
  {
    q: "Khi viết bài văn kể lại một sự việc có thật liên quan đến nhân vật lịch sử, người viết TUYỆT ĐỐI KHÔNG ĐƯỢC làm điều gì?",
    options: [
      "Tra cứu tư liệu từ các nguồn sử liệu đáng tin cậy",
      "Tự ý hư cấu, bịa đặt làm sai lệch bản chất sự thật lịch sử hoặc gán ghép lời thoại vô căn cứ",
      "Bày tỏ lòng biết ơn, tự hào đối với công lao của vị anh hùng",
      "Miêu tả không khí hào hùng của trận đánh"
    ],
    a: 1,
    exp: "Văn bản lịch sử đòi hỏi sự tôn trọng sự thật lịch sử khách quan, không được phép xuyên tạc hay bịa đặt nhân vật."
  },
  {
    q: "Trong tác phẩm 'Bản đồ dẫn đường', người ông khuyên đứa cháu trai điều gì về tấm bản đồ cuộc đời?",
    options: [
      "Phải sao chép y nguyên tấm bản đồ thành công của người khác để không bao giờ thất bại",
      "Bản đồ của người khác chỉ để tham khảo; mỗi người phải dũng cảm tự khám phá và tự vẽ nên tấm bản đồ cho cuộc đời mình",
      "Không bao giờ được ra khỏi ngôi nhà quen thuộc",
      "Nên mua những tấm bản đồ đắt tiền nhất ngoài cửa hiệu"
    ],
    a: 1,
    exp: "Người ông dạy cháu bài học tự chủ: hãy dũng cảm trải nghiệm để tự kiến tạo con đường đi độc lập của chính mình."
  },
  {
    q: "Ý nghĩa cao cả của việc đọc sách được Huỳnh Như Phương khẳng định trong 'Hãy cầm lấy và đọc' là gì?",
    options: [
      "Đọc sách chỉ để giết thời gian nhàn rỗi",
      "Sách là kho tàng trí tuệ bất tử của nhân loại; đọc sách giúp bồi dưỡng tri thức, khai phóng tâm hồn và nuôi dưỡng nhân cách",
      "Đọc sách để khoe khoang với bạn bè là mình đọc nhiều",
      "Đọc sách giúp người ta không cần phải đi học ở trường"
    ],
    a: 1,
    exp: "Đọc sách là phương thức tự học, đối thoại với các bậc hiền triết để nâng cao phẩm giá và tầm nhìn nhân loại."
  },
  {
    q: "Hình ảnh 'người đồng mình' trong bài thơ 'Nói với con' của thi sĩ Y Phương được khắc họa với những phẩm chất cao đẹp nào?",
    options: [
      "Giàu có về tiền bạc, xe cộ nguy nga",
      "Lao động cần cù, tâm hồn tài hoa lãng mạn, ý chí kiên cường và lòng tự tôn sâu sắc: 'tự đục đá kê cao quê hương'",
      "Chỉ thích đi săn bắn thú rừng suốt ngày đêm",
      "Thích sống khép kín không giao lưu với ai"
    ],
    a: 1,
    exp: "'Người đồng mình' mộc mạc thô sơ da thịt nhưng giàu ý chí, tự lực cánh sinh đục đá kê cao quê hương bản quán."
  },
  {
    q: "Phép liên kết nào được sử dụng giữa hai câu sau: 'Mùa xuân đã về trên khắp các bản làng Tây Bắc. NƠI ĐÂY, hoa mơ hoa mận đang bung nở trắng trời'?",
    options: [
      "Phép lặp từ ngữ",
      "Phép thế (từ 'Nơi đây' thay thế cho 'khắp các bản làng Tây Bắc')",
      "Phép nghịch đối",
      "Không sử dụng phép liên kết nào"
    ],
    a: 1,
    exp: "Đại từ chỉ địa điểm 'Nơi đây' thế chỗ cho cụm từ chỉ không gian ở câu trước nhằm liên kết câu mạch lạc."
  },
  {
    q: "Thuật ngữ là gì?",
    options: [
      "Từ ngữ của trẻ con tập nói",
      "Từ ngữ biểu thị những khái niệm khoa học, công nghệ chuyên ngành và mang tính nghĩa ổn định",
      "Từ địa phương chỉ dùng ở một làng xã nhỏ",
      "Tiếng lóng của giới trẻ trên mạng xã hội"
    ],
    a: 1,
    exp: "Thuật ngữ là từ ngữ quy ước chuyên ngành khoa học, kĩ thuật biểu đạt chính xác một khái niệm chuyên môn."
  },
  {
    q: "Khi viết bài văn nghị luận thể hiện ý kiến phản đối một quan niệm sai lầm, người viết cần lưu ý điều gì?",
    options: [
      "Dùng lời lẽ lăng mạ, xúc phạm người đưa ra quan niệm",
      "Dùng lí lẽ sắc bén, bằng chứng thực tế khách quan để bác bỏ sai lầm và đề xuất cách hiểu đúng đắn, văn minh",
      "Đồng ý hết tất cả những gì người khác nói",
      "Không cần dẫn chứng thực tế nào"
    ],
    a: 1,
    exp: "Nghị luận phản đối cần tập trung vào luận điểm và hành vi sai trái, lập luận dựa trên bằng chứng và tinh thần xây dựng."
  },
  {
    q: "Trong văn bản 'Thủy tiên tháng Một', hiện tượng hoa nở trái mùa phản ánh vấn đề toàn cầu cấp bách nào?",
    options: [
      "Sự cạn kiệt tài nguyên rừng nhiệt đới",
      "Khủng hoảng biến đổi khí hậu và hiện tượng Trái Đất nóng lên do hoạt động công nghiệp của con người",
      "Hiện tượng bão cát ở sa mạc Sahara",
      "Sự phát triển của nghề trồng hoa thương mại"
    ],
    a: 1,
    exp: "Tác giả chỉ ra hiện tượng nhiệt độ tăng cao bất thường mùa đông làm xáo trộn quy luật tự nhiên, cảnh báo biến đổi khí hậu."
  },
  {
    q: "Mục đích thiêng liêng nhất của 'Lễ rửa làng' của đồng bào người Lô Lô ở Hà Giang là gì?",
    options: [
      "Tổ chức hội chợ buôn bán nông sản",
      "Tẩy rửa những điều xui xẻo, ô uế năm cũ, cầu mong mưa thuận gió hòa, mùa màng bội thu và thắt chặt tình đoàn kết bản làng",
      "Thi tuyển chọn các chàng trai khỏe mạnh đi lính",
      "Phát thưởng cho học sinh giỏi trong bản"
    ],
    a: 1,
    exp: "Nghi lễ tâm linh cộng đồng hướng đến sự trong sạch, thanh tẩy tai ương và cầu chúc ấm no cho muôn nhà."
  },
  {
    q: "Bộ phận nào trong văn bản thường được dùng để giải thích từ ngữ khó hoặc dẫn nguồn tài liệu tham khảo đặt ở chân trang sách?",
    options: [
      "Mục lục cuốn sách",
      "Cước chú (Footnote)",
      "Lời tựa mở đầu",
      "Bìa lót mặt sau"
    ],
    a: 1,
    exp: "Cước chú là phần giải thích thuật ngữ hoặc chỉ dẫn nguồn tài liệu xuất hiện ở phía dưới chân trang sách."
  },
  {
    q: "Yếu tố Hán Việt 'Hải' trong các từ 'Hải đăng, Hải quân, Hải sản, Hải lưu' có nghĩa là gì?",
    options: [
      "Mặt trời rực rỡ",
      "Biển cả",
      "Gió bão lớn",
      "Núi non hiểm trở"
    ],
    a: 1,
    exp: "Yếu tố 'Hải' (海) trong tiếng Hán Việt có nghĩa là biển cả."
  },
  {
    q: "Khi viết bài văn thuyết minh quy tắc của một trò chơi, người viết cần sắp xếp các bước như thế nào?",
    options: [
      "Kể kết quả người thắng cuộc trước rồi mới giới thiệu tên trò chơi",
      "Trình bày rõ ràng theo trình tự logic: Tên & mục tiêu -> Chuẩn bị sân bãi/dụng cụ -> Các bước diễn biến và luật chơi -> Điều kiện thắng thua và an toàn",
      "Chỉ kể nguồn gốc lịch sử thời cổ đại",
      "Không cần phân chia các bước cụ thể"
    ],
    a: 1,
    exp: "Thuyết minh quy tắc trò chơi bắt buộc phải trình bày tuần tự theo các bước thực tế để người đọc có thể dễ dàng làm theo."
  },
  {
    q: "Trong bài văn nghị luận phân tích nhân vật văn học, 'Bằng chứng' phải lấy từ đâu?",
    options: [
      "Do người viết tự tưởng tượng ra thêm cho câu chuyện hấp dẫn",
      "Trích xuất trực tiếp hoặc lược thuật chính xác từ các chi tiết, cử chỉ, lời thoại, hành động của nhân vật trong tác phẩm gốc",
      "Lấy từ một bộ phim truyền hình nước ngoài không liên quan",
      "Lấy từ ý kiến đồn thổi trên mạng"
    ],
    a: 1,
    exp: "Bằng chứng văn học phải là dẫn chứng xác thực rút ra trực tiếp từ tác phẩm đang được phân tích."
  },
  {
    q: "Một nhân vật văn học có bắt buộc phải giống hệt một con người cụ thể ngoài đời thực hay không?",
    options: [
      "Bắt buộc phải giống hệt 100% ngoài đời thực",
      "Không, nhân vật văn học là hình tượng nghệ thuật được nhà văn sáng tạo và hư cấu dựa trên sự khái quát đời sống, mang tư tưởng thẩm mĩ của tác giả",
      "Nhà văn chỉ được phép viết về chính bản thân mình",
      "Nhân vật văn học chỉ là cái bóng vô nghĩa"
    ],
    a: 1,
    exp: "Nhân vật văn học là kết tinh của hư cấu nghệ thuật và điển hình hóa thẩm mĩ, không đồng nhất máy móc với người thật."
  },
  {
    q: "Dự án đọc sách 'Trang sách và cuộc sống' kết thúc bằng hoạt động ý nghĩa nào?",
    options: [
      "Đem toàn bộ sách cũ đi đốt",
      "Tổ chức Ngày hội sách để giới thiệu sản phẩm đọc sáng tạo, chia sẻ cảm hứng và tự đánh giá năng lực đọc hiểu",
      "Làm bài thi kiểm tra học kì kéo dài 5 tiếng",
      "Đóng gói sách cất vào kho vĩnh viễn"
    ],
    a: 1,
    exp: "Ngày hội sách là không gian lan tỏa văn hóa đọc, nơi học sinh trưng bày sản phẩm dự án và giao lưu tri thức."
  },
  {
    q: "Khái niệm 'Đề tài' trong tác phẩm văn học khác với khái niệm 'Chủ đề' ở điểm nào?",
    options: [
      "Đề tài là phạm vi hiện thực đời sống được phản ánh; còn Chủ đề là vấn đề trung tâm, cảm hứng tư tưởng mà tác giả đặt ra và giải quyết trong tác phẩm",
      "Đề tài dài hơn chủ đề",
      "Chủ đề viết bằng tiếng Anh, đề tài viết bằng tiếng Việt",
      "Hai khái niệm này hoàn toàn giống nhau"
    ],
    a: 0,
    exp: "Đề tài trả lời cho câu hỏi 'Tác phẩm viết về cái gì?' (thiên nhiên, chiến tranh); Chủ đề trả lời 'Vấn đề tư tưởng sâu xa tác phẩm gửi gắm là gì?'."
  },
  {
    q: "Khi trích dẫn nguyên văn một câu thơ hoặc câu văn của tác giả vào bài viết nghị luận, ta phải sử dụng dấu câu nào?",
    options: [
      "Dấu gạch ngang đầu dòng",
      "Dấu ngoặc kép (“ ”)",
      "Dấu chấm than (!)",
      "Dấu chấm lửng (…)"
    ],
    a: 1,
    exp: "Dấu ngoặc kép dùng để đánh dấu phần trích dẫn trực tiếp lời nói hoặc câu chữ nguyên văn của tác phẩm."
  },
  {
    q: "Thời gian làm bài quy định của Đấu trường Trạng Nguyên Ngữ Văn 7 trực tuyến là bao nhiêu phút?",
    options: [
      "15 phút",
      "45 phút",
      "60 phút (60:00)",
      "120 phút"
    ],
    a: 2,
    exp: "Đấu trường Trạng Nguyên Ngữ Văn 7 được thiết kế theo chuẩn ma trận đề thi 60 phút (60:00) với 40 câu hỏi trắc nghiệm khách quan."
  }
];

module.exports = { examQuestions };
