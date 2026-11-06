// congnghe9_exam.js - 25 câu hỏi Hội thi Trạng Nguyên Công nghệ 9 Định hướng nghề nghiệp

const congnghe9ExamQuestions = [
  {
    id: 1,
    q: "Khái niệm 'nghề nghiệp' khác với 'việc làm thời vụ' ở điểm cơ bản nào?",
    options: [
      "Nghề nghiệp đòi hỏi quá trình đào tạo chuyên môn, có tính ổn định lâu dài và cơ hội phát triển",
      "Việc làm thời vụ luôn có mức thu nhập cao hơn nghề nghiệp",
      "Nghề nghiệp không bao giờ phải chịu áp lực công việc",
      "Việc làm thời vụ đòi hỏi phải có bằng tiến sĩ"
    ],
    correct: 0,
    explain: "Nghề nghiệp là tập hợp công việc chuyên môn qua đào tạo, có tính ổn định và gắn bó lâu dài."
  },
  {
    id: 2,
    q: "Việc lựa chọn nghề nghiệp phù hợp mang lại ý nghĩa to lớn nhất nào cho xã hội?",
    options: [
      "Giúp các cửa hàng thời trang bán được nhiều quần áo hơn",
      "Giảm thiểu tỉ lệ thất nghiệp, tránh lãng phí chi phí đào tạo do làm trái ngành và nâng cao năng suất kinh tế",
      "Làm cho tất cả mọi người đều có cùng một mức lương bằng nhau",
      "Xóa bỏ hoàn toàn nhu cầu sử dụng máy móc kĩ thuật"
    ],
    correct: 1,
    explain: "Chọn đúng nghề giảm thất nghiệp, tối ưu hóa nhân lực và thúc đẩy kinh tế phát triển bền vững."
  },
  {
    id: 3,
    q: "Lĩnh vực kĩ thuật và công nghệ có đối tượng và hoạt động lao động đặc thù là gì?",
    options: [
      "Vận dụng toán học, khoa học tự nhiên để nghiên cứu, thiết kế, chế tạo, vận hành và bảo trì máy móc, phần mềm",
      "Chỉ sáng tác ca múa nhạc kịch dân gian",
      "Chỉ trồng trọt lúa nước và chăn nuôi gia súc truyền thống",
      "Chỉ kinh doanh bất động sản và buôn bán hàng tiêu dùng"
    ],
    correct: 0,
    explain: "Nghề kĩ thuật công nghệ ứng dụng khoa học để thiết kế, chế tạo, vận hành hệ thống kĩ thuật, máy móc và phần mềm."
  },
  {
    id: 4,
    q: "Một lập trình viên phần mềm chuyên nghiệp cần có phẩm chất nào sau đây?",
    options: [
      "Tính kỉ luật, cẩn thận tỉ mỉ, kiên trì tìm và sửa lỗi (debugging), có trách nhiệm bảo mật thông tin",
      "Lười biếng, làm việc tùy hứng không theo kế hoạch",
      "Giấu kín mã nguồn không cho đồng nghiệp kiểm thử",
      "Từ chối học hỏi bất kì ngôn ngữ lập trình mới nào"
    ],
    correct: 0,
    explain: "Lập trình viên cần tính kỉ luật, tỉ mỉ, kiên nhẫn sửa lỗi và bảo mật hệ thống."
  },
  {
    id: 5,
    q: "Hệ thống giáo dục quốc dân Việt Nam bao gồm những thành phần nào?",
    options: [
      "Chỉ có các trường đại học công lập",
      "Giáo dục chính quy và Giáo dục thường xuyên",
      "Chỉ có các lớp dạy nghề ngắn hạn",
      "Chỉ có các trường quốc tế có yếu tố nước ngoài"
    ],
    correct: 1,
    explain: "Hệ thống giáo dục quốc dân gồm 2 nhánh chính: Giáo dục chính quy và Giáo dục thường xuyên."
  },
  {
    id: 6,
    q: "Bậc Giáo dục nghề nghiệp trong hệ thống giáo dục quốc dân đào tạo những trình độ nào?",
    options: [
      "Sơ cấp, Trung cấp và Cao đẳng",
      "Tiểu học và Trung học cơ sở",
      "Thạc sĩ và Tiến sĩ",
      "Chỉ có trình độ Đại học"
    ],
    correct: 0,
    explain: "Giáo dục nghề nghiệp đào tạo 3 trình độ: Sơ cấp (dưới 1 năm), Trung cấp (2-3 năm) và Cao đẳng (2-3 năm)."
  },
  {
    id: 7,
    q: "Hai thời điểm phân luồng giáo dục then chốt nhất của học sinh phổ thông là khi nào?",
    options: [
      "Sau lớp 5 (tiểu học) và sau lớp 7",
      "Sau THCS (lớp 9) và sau THPT (lớp 12)",
      "Chỉ duy nhất sau khi tốt nghiệp đại học",
      "Khi tròn 30 tuổi"
    ],
    correct: 1,
    explain: "Hai dấu mốc phân luồng quan trọng nhất là sau khi tốt nghiệp THCS và sau khi tốt nghiệp THPT."
  },
  {
    id: 8,
    q: "Mô hình giáo dục '9+' mở ra cơ hội gì cho học sinh tốt nghiệp THCS?",
    options: [
      "Vừa học văn hóa cấp THPT vừa học nghề trung cấp, có thể đi làm sớm ở tuổi 18 hoặc học liên thông lên cao đẳng/đại học",
      "Bắt buộc phải học 9 năm liên tục ở bậc trung cấp",
      "Chỉ dành cho học sinh bỏ học giữa chừng",
      "Không được cấp bất kì văn bằng chứng chỉ nào"
    ],
    correct: 0,
    explain: "Mô hình 9+ giúp học sinh học văn hóa kết hợp học nghề, rút ngắn thời gian lập nghiệp và tiết kiệm chi phí."
  },
  {
    id: 9,
    q: "Thị trường lao động được định nghĩa là gì?",
    options: [
      "Chợ đầu mối bán các loại nông sản và thực phẩm tươi sống",
      "Nơi diễn ra sự thỏa thuận, trao đổi sức lao động giữa người lao động và người sử dụng lao động",
      "Trang thương mại điện tử chỉ bán đồ gia dụng",
      "Sàn giao dịch chứng khoán quốc tế"
    ],
    correct: 1,
    explain: "Thị trường lao động là nơi gặp gỡ, trao đổi mua bán sức lao động trên cơ sở tiền lương và điều kiện việc làm."
  },
  {
    id: 10,
    q: "Mối quan hệ giữa 'Cung lao động' và 'Cầu lao động' quyết định điều gì trên thị trường?",
    options: [
      "Quyết định số lượng việc làm, mức tiền lương và cơ hội tuyển dụng trong xã hội",
      "Quyết định thời tiết và khí hậu các vùng",
      "Quyết định kết quả thi học kì môn Toán của học sinh",
      "Không ảnh hưởng gì đến cuộc sống thực tế"
    ],
    correct: 0,
    explain: "Quy luật cung cầu quyết định mức lương, khả năng tìm được việc và nhu cầu tuyển dụng của thị trường."
  },
  {
    id: 11,
    q: "Làn sóng Cách mạng công nghiệp 4.0 và Trí tuệ nhân tạo (AI) đang tạo ra xu hướng nào trên thị trường lao động?",
    options: [
      "Tăng nhu cầu các công việc sao chép thủ công đơn điệu",
      "Gia tăng mạnh mẽ nhu cầu lao động chất lượng cao biết ứng dụng công nghệ, số hóa và tự động hóa",
      "Xóa bỏ hoàn toàn nhu cầu về lập trình viên",
      "Các nhà máy đóng cửa không cần người lao động"
    ],
    correct: 1,
    explain: "Cách mạng 4.0 thúc đẩy nhu cầu nhân lực chất lượng cao, có kĩ năng số, tư duy sáng tạo và tự học."
  },
  {
    id: 12,
    q: "Thông tin thị trường lao động giúp ích gì cho người học THCS khi chọn nghề?",
    options: [
      "Biết được nghề nào đang thiếu nhân lực, mức thu nhập trung bình và cơ sở đào tạo uy tín để chuẩn bị lộ trình học tập",
      "Để tìm cách xin việc ngay từ khi đang học lớp 6",
      "Để không cần phải học tập bất kì môn nào ở trường",
      "Chỉ để thỏa mãn trí tò mò không có tác dụng gì"
    ],
    correct: 0,
    explain: "Thông tin thị trường giúp học sinh định hình nghề nghiệp tương lai, nắm bắt nhu cầu xã hội và lập kế hoạch học tập."
  },
  {
    id: 13,
    q: "Thứ tự 4 bước chuẩn trong quy trình tìm kiếm thông tin thị trường lao động là gì?",
    options: [
      "1. Nộp đơn xin việc -> 2. Đòi tăng lương -> 3. Phỏng vấn -> 4. Nghỉ việc",
      "1. Xác định mục tiêu -> 2. Xác định nguồn tin cậy -> 3. Chọn công cụ tìm kiếm -> 4. Thu thập và tổng hợp",
      "1. Chọn công cụ -> 2. Thu thập -> 3. Bỏ qua nguồn -> 4. Không ghi chép",
      "1. Xem bói -> 2. Hỏi bạn bè -> 3. Đi phỏng vấn -> 4. Chờ đợi"
    ],
    correct: 1,
    explain: "Quy trình 4 bước chuẩn: Xác định mục tiêu -> Xác định nguồn uy tín -> Chọn công cụ -> Thu thập, so sánh và tổng hợp."
  },
  {
    id: 14,
    q: "Mật mã Holland phân loại tính cách và môi trường nghề nghiệp thành mấy nhóm?",
    options: ["3 nhóm", "6 nhóm (RIASEC)", "10 nhóm", "12 nhóm theo cung hoàng đạo"],
    correct: 1,
    explain: "Mật mã Holland chia làm 6 nhóm: Realistic (R), Investigative (I), Artistic (A), Social (S), Enterprising (E), Conventional (C)."
  },
  {
    id: 15,
    q: "Nhóm người thích tìm hiểu bí ẩn tự nhiên, tư duy logic, phân tích dữ liệu thuộc nhóm nào theo Holland?",
    options: [
      "Nhóm Nghiên cứu (Investigative - I)",
      "Nhóm Xã hội (Social - S)",
      "Nhóm Quản lí (Enterprising - E)",
      "Nhóm Nghiệp vụ (Conventional - C)"
    ],
    correct: 0,
    explain: "Nhóm I (Investigative - Nghiên cứu) thích khám phá, tư duy khoa học, giải quyết bài toán trừu tượng."
  },
  {
    id: 16,
    q: "Trong lí thuyết Cây nghề nghiệp, 'phần gốc rễ' đại diện cho những yếu tố nào?",
    options: [
      "Tiền lương cao và xe hơi sang trọng",
      "Sở thích, Năng lực (điểm mạnh), Cá tính và Giá trị nghề nghiệp của bản thân",
      "Danh vọng và những lời khen trên mạng xã hội",
      "Cơ hội đi du lịch nước ngoài"
    ],
    correct: 1,
    explain: "Gốc rễ là sở thích, năng lực, tính cách và giá trị - đây là nền tảng nuôi dưỡng cả sự nghiệp."
  },
  {
    id: 17,
    q: "Sai lầm lớn nhất của người chỉ chọn nghề dựa vào 'phần quả ngọt' của Cây nghề nghiệp là gì?",
    options: [
      "Ăn quá nhiều quả ngọt bị sâu răng",
      "Chỉ nhìn vào lương cao hay trào lưu mà không xét bản thân có năng lực hay đam mê không, dễ dẫn đến kiệt sức và thất bại",
      "Sẽ được làm tổng giám đốc ngay từ ngày đầu tiên",
      "Không bao giờ bị người khác cạnh tranh"
    ],
    correct: 1,
    explain: "Chỉ chạy theo tiền tài, trào lưu mà không có nền tảng năng lực sẽ sớm nản lòng và bị đào thải."
  },
  {
    id: 18,
    q: "Triết lí Ikigai của người Nhật chỉ ra rằng nghề nghiệp lí tưởng nhất là gì?",
    options: [
      "Điểm giao thoa trọn vẹn giữa Điều bạn thích, Điều bạn giỏi, Điều xã hội cần và Điều giúp bạn được trả công",
      "Công việc chỉ cần kiếm được thật nhiều tiền bất chấp vi phạm đạo đức",
      "Công việc ngồi chơi cả ngày không phải làm gì",
      "Nghề nghiệp do máy vi tính tự động phân công"
    ],
    correct: 0,
    explain: "Ikigai là lẽ sống nghề nghiệp khi hội tụ đủ 4 yếu tố: Thích, Giỏi, Xã hội cần và Được trả thù lao xứng đáng."
  },
  {
    id: 19,
    q: "Quy trình lựa chọn nghề nghiệp chuẩn khoa học gồm những bước nào?",
    options: [
      "Bước 1: Đánh giá bản thân -> Bước 2: Tìm hiểu thị trường lao động -> Bước 3: Ra quyết định chọn nghề",
      "Bước 1: Chọn trường đại học -> Bước 2: Thi đỗ -> Bước 3: Xem mình thích gì sau",
      "Bước 1: Đi làm ngay -> Bước 2: Bỏ việc -> Bước 3: Học lại từ đầu",
      "Bước 1: Nghe bạn bè rủ -> Bước 2: Xin tiền bố mẹ -> Bước 3: Nhờ vả xin việc"
    ],
    correct: 0,
    explain: "3 bước vàng: Hiểu bản thân (Đánh giá) -> Hiểu nghề nghiệp (Tìm hiểu thị trường) -> Ra quyết định phù hợp."
  },
  {
    id: 20,
    q: "Bảng đối chiếu tự đánh giá mức độ phù hợp nghề nghiệp trong Dự án Bài 5 gồm bao nhiêu nội dung?",
    options: [
      "10 nội dung (5 năng lực, 3 sở thích, 1 cá tính, 1 hoàn cảnh)",
      "3 nội dung",
      "15 nội dung",
      "50 nội dung"
    ],
    correct: 0,
    explain: "Bảng chuẩn SGK gồm đúng 10 tiêu chí đối chiếu phân thành 4 nhóm cụ thể."
  },
  {
    id: 21,
    q: "Khi tính điểm bảng đối chiếu Bài 5, mỗi tiêu chí được đánh dấu 'Trùng khớp' được tính bao nhiêu điểm?",
    options: ["1 điểm", "2 điểm", "5 điểm", "10 điểm"],
    correct: 0,
    explain: "Mỗi dấu X ở cột 'Trùng khớp' được tính 1 điểm, tối đa 10 điểm cho 10 tiêu chí."
  },
  {
    id: 22,
    q: "Một bạn học sinh tự đánh giá bản thân với nghề 'Kĩ sư Cơ điện tử' và đạt tổng điểm 9/10, kết luận xếp loại là gì?",
    options: [
      "Không phù hợp",
      "Phù hợp một phần",
      "Phù hợp hoàn toàn",
      "Cần chuyển sang nghề nấu ăn"
    ],
    correct: 2,
    explain: "Thang điểm 7-10 điểm xếp loại Phù hợp hoàn toàn với nghề nghiệp đã chọn."
  },
  {
    id: 23,
    q: "Nếu đạt điểm từ 1 đến 3 điểm (Không phù hợp) trong bảng tự đánh giá, học sinh nên có thái độ như thế nào?",
    options: [
      "Tuyệt vọng, khóc lóc và bỏ học",
      "Bình tĩnh nhìn nhận khách quan, tìm hiểu các nhóm nghề khác phù hợp hơn với sở trường và tính cách của mình",
      "Cố tình gian lận sửa lại điểm cho cao",
      "Bắt ép nhà trường phải cấp chứng chỉ cho mình"
    ],
    correct: 1,
    explain: "Kết quả đánh giá là căn cứ để tự điều chỉnh hướng đi, tìm kiếm ngành nghề thực sự thuộc về thế mạnh của mình."
  },
  {
    id: 24,
    q: "Hai sản phẩm bắt buộc của bài học Dự án (Bài 5) bao gồm những gì?",
    options: [
      "Bảng tự đánh giá mức độ phù hợp và Bài thuyết trình kết quả",
      "Một bài kiểm tra 1 tiết và một bài kiểm tra học kì",
      "Một hợp đồng thử việc và giấy khám sức khỏe",
      "Đơn xin phép nghỉ học và bản kiểm điểm"
    ],
    correct: 0,
    explain: "Sản phẩm dự án gồm Bảng tự đánh giá 10 tiêu chí và Bài thuyết trình báo cáo trước lớp."
  },
  {
    id: 25,
    q: "Lời khuyên cốt lõi nhất để trở thành người lao động thành công trong thời đại số là gì?",
    options: [
      "Chỉ cần có bằng cấp đẹp rồi ngừng học tập",
      "Nuôi dưỡng tinh thần tự học suốt đời, rèn luyện ngoại ngữ, kĩ năng công nghệ và giữ vững đạo đức nghề nghiệp",
      "Chờ đợi sự giúp đỡ của người khác mà không cần nỗ lực",
      "Tránh xa mọi thiết bị công nghệ và máy tính"
    ],
    correct: 1,
    explain: "Tự học suốt đời, làm chủ công nghệ, thành thạo ngoại ngữ và kỉ luật trách nhiệm là chìa khóa vàng lập nghiệp."
  }
];

module.exports = congnghe9ExamQuestions;
