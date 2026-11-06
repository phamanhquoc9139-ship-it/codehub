// scratch/build_ktpl10_full.js
const fs = require('fs');
const path = require('path');
const diagrams = require('./ktpl10_diagrams.js');

const rawData = JSON.parse(fs.readFileSync('scratch/ktpl10_parsed_raw.json', 'utf8'));
const { topicMeta, lessonContents, compText, econFrameText, legalFrameText, glossaryText } = rawData;

// Mini quizzes for each lesson (2 questions each = 42 questions total)
const lessonQuizzes = {
  1: [
    {
      q: "Hoạt động nào đóng vai trò nền tảng, quyết định sự tồn tại và phát triển của con người và xã hội?",
      options: ["Hoạt động sản xuất", "Hoạt động phân phối", "Hoạt động trao đổi", "Hoạt động tiêu dùng"],
      ans: 0,
      exp: "Sản xuất là hoạt động tạo ra sản phẩm vật chất và tinh thần đáp ứng nhu cầu con người, giữ vai trò nền tảng của nền kinh tế."
    },
    {
      q: "Cầu nối trực tiếp giữa khâu sản xuất và khâu tiêu dùng trong chu trình kinh tế là:",
      options: ["Phân phối và trao đổi", "Tiêu dùng và tái sản xuất", "Thu thuế và chi ngân sách", "Đầu tư và tiết kiệm"],
      ans: 0,
      exp: "Phân phối chia nguồn lực/kết quả, còn trao đổi đưa hàng hoá từ người sản xuất đến người tiêu dùng, tạo thành cầu nối tất yếu."
    }
  ],
  2: [
    {
      q: "Chủ thể nào đóng vai trò quản lí nền kinh tế, tạo lập môi trường pháp lí và khắc phục các khuyết tật của thị trường?",
      options: ["Chủ thể Nhà nước", "Chủ thể sản xuất", "Chủ thể tiêu dùng", "Chủ thể trung gian"],
      ans: 0,
      exp: "Nhà nước ban hành pháp luật, chính sách vĩ mô, điều tiết và định hướng nền kinh tế phát triển bền vững."
    },
    {
      q: "Các sàn thương mại điện tử, môi giới bất động sản, ngân hàng thương mại thuộc nhóm chủ thể kinh tế nào?",
      options: ["Chủ thể trung gian", "Chủ thể nhà nước", "Chủ thể tiêu dùng thuần tuý", "Chủ thể phi lợi nhuận"],
      ans: 0,
      exp: "Chủ thể trung gian giữ vai trò kết nối giữa người sản xuất và người tiêu dùng, thúc đẩy giao thương diễn ra nhanh chóng, thông suốt."
    }
  ],
  3: [
    {
      q: "Thị trường có những chức năng cơ bản nào sau đây?",
      options: [
        "Thực hiện (thừa nhận), thông tin, và điều tiết/kích thích",
        "Thu thuế, phân phối và kiểm toán tài chính",
        "Lập hiến, lập pháp và giám sát tối cao",
        "Xét xử, thi hành án và kiểm sát tư pháp"
      ],
      ans: 0,
      exp: "Ba chức năng cốt lõi của thị trường là: Thừa nhận giá trị của hàng hoá; Cung cấp thông tin tín hiệu thị trường; Điều tiết và kích thích sản xuất - tiêu dùng."
    },
    {
      q: "Khi thị trường thừa nhận công dụng và giá trị của một sản phẩm thông qua hành vi mua sắm, đó là chức năng gì?",
      options: ["Chức năng thừa nhận (thực hiện)", "Chức năng thông tin", "Chức năng điều tiết", "Chức năng đào thải"],
      ans: 0,
      exp: "Chức năng thừa nhận: Hàng hoá được người mua chấp nhận trả tiền nghĩa là giá trị sử dụng và giá trị của nó đã được xã hội thừa nhận."
    }
  ],
  4: [
    {
      q: "Cơ chế thị trường vận hành dựa trên tác động qua lại của các yếu tố nào?",
      options: ["Cung, cầu, giá cả và cạnh tranh", "Lệnh hành chính của cơ quan quản lí", "Kế hoạch hoá tập trung quan liêu", "Quy định áp đặt từ người sản xuất"],
      ans: 0,
      exp: "Cơ chế thị trường là hệ thống tự điều chỉnh thông qua tương tác giữa cung, cầu, giá cả thị trường và động lực cạnh tranh lành mạnh."
    },
    {
      q: "Khi Cung lớn hơn Cầu (Cung > Cầu), giá cả hàng hoá trên thị trường sẽ có xu hướng:",
      options: ["Giảm xuống", "Tăng cao đột biến", "Không đổi trong mọi hoàn cảnh", "Luôn bằng 0"],
      ans: 0,
      exp: "Quy luật cung cầu: Khi hàng hoá dư thừa (Cung > Cầu), người bán cạnh tranh giảm giá để giải phóng hàng tồn kho."
    }
  ],
  5: [
    {
      q: "Đặc điểm pháp lí then chốt của Ngân sách nhà nước là:",
      options: [
        "Do Quốc hội quyết định và thông qua bằng văn bản luật hàng năm",
        "Do các doanh nghiệp tự thoả thuận lập quỹ riêng",
        "Do các ngân hàng thương mại phát hành và kiểm soát",
        "Không cần phê chuẩn theo chu kì tài khoá"
      ],
      ans: 0,
      exp: "Ngân sách nhà nước là kế hoạch tài chính toàn diện do Quốc hội quyết định, Chính phủ tổ chức thực hiện và kiểm toán nhà nước kiểm tra."
    },
    {
      q: "Khoản chi nào sau đây thuộc nhóm chi đầu tư phát triển của Ngân sách nhà nước?",
      options: [
        "Xây dựng đường cao tốc Bắc - Nam, cầu cảng, trường học công",
        "Chi trả lương hưu định kì cho công chức",
        "Chi mua sắm văn phòng phẩm cho cơ quan hành chính",
        "Chi bảo hiểm y tế cho người có công"
      ],
      ans: 0,
      exp: "Chi đầu tư phát triển là chi cho xây dựng kết cấu hạ tầng kinh tế - xã hội nhằm tạo động lực tăng trưởng lâu dài."
    }
  ],
  6: [
    {
      q: "Thuế giá trị gia tăng (VAT) và thuế tiêu thụ đặc biệt thuộc loại thuế nào?",
      options: ["Thuế gián thu", "Thuế trực thu", "Thuế tài sản", "Thuế phi mậu dịch"],
      ans: 0,
      exp: "Thuế gián thu được cấu thành vào giá bán hàng hoá/dịch vụ; người tiêu dùng chịu thuế còn người bán là người nộp hộ vào ngân sách."
    },
    {
      q: "Thuế trực thu có đặc điểm cơ bản nào sau đây?",
      options: [
        "Người nộp thuế đồng thời là người thực tế chịu thuế (như thuế TNDN, TNCN)",
        "Được cộng trực tiếp vào giá niêm yết của mọi món đồ tiêu dùng",
        "Người tiêu dùng nộp gián tiếp qua hoá đơn siêu thị",
        "Doanh nghiệp thu hộ từ khách hàng rồi mới nộp"
      ],
      ans: 0,
      exp: "Thuế trực thu đánh trực tiếp vào thu nhập hoặc tài sản của người nộp thuế (ví dụ: Thuế thu nhập cá nhân, Thuế thu nhập doanh nghiệp)."
    }
  ],
  7: [
    {
      q: "Mô hình doanh nghiệp nào mà chủ sở hữu phải chịu trách nhiệm vô hạn bằng toàn bộ tài sản của mình đối với mọi nghĩa vụ nợ?",
      options: ["Doanh nghiệp tư nhân", "Công ty TNHH một thành viên", "Công ty cổ phần", "Hợp tác xã nông nghiệp"],
      ans: 0,
      exp: "Doanh nghiệp tư nhân do 1 cá nhân làm chủ và tự chịu trách nhiệm bằng toàn bộ tài sản cá nhân của mình (trách nhiệm vô hạn)."
    },
    {
      q: "Đặc điểm ưu việt nổi bật nhất giúp Công ty Cổ phần dễ dàng huy động vốn quy mô lớn trên thị trường là:",
      options: [
        "Có quyền phát hành cổ phần và các loại chứng khoán theo quy định pháp luật",
        "Không phải công khai báo cáo tài chính hàng năm",
        "Chỉ cần tối đa 5 cổ đông sáng lập",
        "Không có hội đồng quản trị quản lí"
      ],
      ans: 0,
      exp: "Công ty cổ phần có quyền phát hành cổ phiếu, trái phiếu và niêm yết chứng khoán để huy động nguồn vốn từ đông đảo công chúng."
    }
  ],
  8: [
    {
      q: "Quan hệ tín dụng dựa trên 3 nguyên tắc nền tảng nào?",
      options: [
        "Chuyển giao quyền sử dụng vốn, có thời hạn hoàn trả, và trả cả gốc lẫn lãi",
        "Chuyển quyền sở hữu vĩnh viễn, không tính phí, và vô thời hạn",
        "Tặng cho tài sản, bắt buộc thế chấp sổ đỏ, và chia sẻ cổ phần",
        "Mua bán đứt đoạn, trao tay trực tiếp, và miễn trách nhiệm pháp lí"
      ],
      ans: 0,
      exp: "Đặc trưng của tín dụng: Có tính hoàn trả (trả lại gốc), có thời hạn cụ thể, và có tính sinh lời/chi phí (lãi suất vay)."
    },
    {
      q: "Khi một doanh nghiệp mua nguyên liệu trả chậm của đối tác cung ứng trong 60 ngày, đây là hình thức tín dụng gì?",
      options: ["Tín dụng thương mại", "Tín dụng nhà nước", "Tín dụng ngân hàng", "Tín dụng tiêu dùng"],
      ans: 0,
      exp: "Tín dụng thương mại là quan hệ tín dụng giữa các doanh nghiệp dưới hình thức mua bán chịu hàng hoá, dịch vụ."
    }
  ],
  9: [
    {
      q: "Dịch vụ tín dụng cho vay thế chấp tại ngân hàng yêu cầu điều kiện cốt lõi nào?",
      options: [
        "Người vay phải có tài sản bảo đảm hợp pháp (nhà đất, ô tô, sổ tiết kiệm...)",
        "Người vay chỉ cần dựa vào uy tín cá nhân mà không cần giấy tờ",
        "Không cần hoàn trả tiền gốc nếu kinh doanh thua lỗ",
        "Chỉ áp dụng cho doanh nghiệp nhà nước"
      ],
      ans: 0,
      exp: "Cho vay thế chấp yêu cầu người vay cầm cố, thế chấp tài sản bảo đảm để ngân hàng xử lí thu hồi nợ nếu xảy ra rủi ro vỡ nợ."
    },
    {
      q: "Để sử dụng thẻ tín dụng (Credit Card) an toàn và hiệu quả, người dùng cần lưu ý điều gì?",
      options: [
        "Thanh toán toàn bộ dư nợ đúng hạn trong thời gian miễn lãi để tránh lãi suất phạt cao",
        "Rút toàn bộ tiền mặt từ thẻ tín dụng để chi tiêu hàng ngày",
        "Chia sẻ mã CVV/CVC ở mặt sau thẻ cho người lạ qua mạng xã hội",
        "Chỉ trả mức tối thiểu để kéo dài nợ vô hạn định"
      ],
      ans: 0,
      exp: "Người dùng thẻ tín dụng cần thanh toán đầy đủ dư nợ trong kì miễn lãi (thường 45-55 ngày) để không bị tính lãi suất lũy kế rất cao."
    }
  ],
  10: [
    {
      q: "Quy tắc quản lí tài chính cá nhân 50/30/20 phân bổ thu nhập theo thứ tự tỉ lệ như thế nào?",
      options: [
        "50% nhu cầu thiết yếu — 30% sở thích/mong muốn — 20% tiết kiệm & đầu tư",
        "50% tiết kiệm — 30% đầu tư rủi ro — 20% sinh hoạt phí",
        "50% mua sắm giải trí — 30% trả nợ — 20% học tập",
        "50% mua nhà đất — 30% ăn uống — 20% du lịch"
      ],
      ans: 0,
      exp: "Quy tắc 50/30/20 chuẩn: 50% cho nhu cầu thiết yếu (nhà ở, ăn uống, điện nước), 30% cho mong muốn cá nhân, và 20% cho quỹ tiết kiệm, dự phòng & đầu tư."
    },
    {
      q: "Quỹ dự phòng tài chính khẩn cấp của cá nhân nên duy trì ở mức tương đương bao nhiêu tháng chi tiêu thiết yếu?",
      options: ["3 đến 6 tháng", "1 tuần duy nhất", "5 năm liên tục", "Không cần thiết phải lập"],
      ans: 0,
      exp: "Quỹ khẩn cấp lý tưởng tương đương 3-6 tháng chi phí sinh hoạt tối thiểu để đối phó với mất việc, ốm đau hoặc sự cố bất ngờ."
    }
  ],
  11: [
    {
      q: "Pháp luật có những đặc điểm cơ bản nào phân biệt với quy phạm đạo đức và tập quán?",
      options: [
        "Tính quy phạm phổ biến, tính quyền lực/bắt buộc chung, và tính xác định chặt chẽ về hình thức",
        "Chỉ mang tính khuyên răn, tự nguyện tuân theo của từng cá nhân",
        "Được hình thành ngẫu nhiên và không có cơ quan nhà nước bảo đảm",
        "Do các dòng họ và cộng đồng làng xã tự đặt ra truyền miệng"
      ],
      ans: 0,
      exp: "Ba đặc trưng bản chất của pháp luật: Tính quy phạm phổ biến (áp dụng rộng rãi), Tính quyền lực/bắt buộc chung (Nhà nước bảo đảm), và Tính xác định chặt chẽ về mặt hình thức (văn bản quy phạm)."
    },
    {
      q: "Bản chất xã hội của pháp luật thể hiện ở điểm nào sau đây?",
      options: [
        "Pháp luật phản ánh ý chí, nguyện vọng của đại đa số nhân dân và điều chỉnh các quan hệ xã hội vì trật tự, công bằng",
        "Pháp luật chỉ bảo vệ lợi ích của một nhóm người giàu có",
        "Pháp luật phủ nhận mọi giá trị đạo đức truyền thống",
        "Pháp luật hoàn toàn bất biến, không bao giờ thay đổi theo thời gian"
      ],
      ans: 0,
      exp: "Bản chất xã hội: Pháp luật bắt nguồn từ thực tiễn đời sống xã hội, thể hiện ý chí chung nhằm duy trì trật tự và thúc đẩy xã hội tiến bộ."
    }
  ],
  12: [
    {
      q: "Văn bản quy phạm pháp luật nào có hiệu lực pháp lí cao nhất trong toàn bộ hệ thống pháp luật Việt Nam?",
      options: ["Hiến pháp", "Bộ luật Dân sự", "Nghị định của Chính phủ", "Thông tư của Bộ trưởng"],
      ans: 0,
      exp: "Hiến pháp là đạo luật cơ bản, có hiệu lực pháp lí cao nhất; mọi văn bản quy phạm pháp luật khác phải phù hợp với Hiến pháp."
    },
    {
      q: "Chính phủ ban hành văn bản quy phạm pháp luật nào dưới đây để quy định chi tiết thi hành Luật?",
      options: ["Nghị định", "Pháp lệnh", "Luật", "Chỉ thị"],
      ans: 0,
      exp: "Chính phủ ban hành Nghị định để quy định chi tiết điều, khoản, điểm được giao trong Luật, Nghị quyết của Quốc hội."
    }
  ],
  13: [
    {
      q: "Hành vi công dân dừng đèn đỏ khi tham gia giao thông là biểu hiện của hình thức thực hiện pháp luật nào?",
      options: ["Tuân thủ pháp luật", "Thi hành pháp luật", "Sử dụng pháp luật", "Áp dụng pháp luật"],
      ans: 0,
      exp: "Tuân thủ pháp luật: Kiềm chế không thực hiện điều mà pháp luật cấm (không vượt đèn đỏ, không buôn bán hàng cấm)."
    },
    {
      q: "Cảnh sát giao thông ra quyết định xử phạt vi phạm hành chính đối với người chạy quá tốc độ là hình thức thực hiện pháp luật nào?",
      options: ["Áp dụng pháp luật", "Sử dụng pháp luật", "Tuân thủ pháp luật", "Thi hành pháp luật"],
      ans: 0,
      exp: "Áp dụng pháp luật là hoạt động chỉ do cơ quan nhà nước, người có thẩm quyền tiến hành theo trình tự pháp luật quy định."
    }
  ],
  14: [
    {
      q: "Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam hiện hành được Quốc hội khoá XIII thông qua vào năm nào?",
      options: ["Năm 2013", "Năm 1992", "Năm 1980", "Năm 1946"],
      ans: 0,
      exp: "Hiến pháp hiện hành là Hiến pháp năm 2013, được thông qua ngày 28/11/2013 tại kì họp thứ 6 Quốc hội khoá XIII (sửa đổi, bổ sung theo các nghị quyết của Quốc hội)."
    },
    {
      q: "Vì sao Hiến pháp được xem là 'Luật mẹ' (đạo luật cơ bản) của quốc gia?",
      options: [
        "Vì Hiến pháp quy định những vấn đề cơ bản nhất về chủ quyền, chế độ chính trị, quyền con người và bộ máy nhà nước",
        "Vì Hiến pháp do Chủ tịch nước trực tiếp tự viết và ban hành",
        "Vì Hiến pháp có thể thay đổi hàng tuần theo nhu cầu doanh nghiệp",
        "Vì Hiến pháp chỉ áp dụng cho người dưới 18 tuổi"
      ],
      ans: 0,
      exp: "Hiến pháp xác định nền tảng tổ chức quyền lực nhà nước, chế độ chính trị, kinh tế, xã hội và bảo đảm quyền con người, làm căn cứ cho mọi luật khác."
    }
  ],
  15: [
    {
      q: "Theo Hiến pháp 2013, Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam là nhà nước pháp quyền xã hội chủ nghĩa của ai?",
      options: ["Của Nhân dân, do Nhân dân, vì Nhân dân", "Của giai cấp tư sản độc quyền", "Của các tổ chức kinh tế lớn", "Của riêng các cơ quan hành chính"],
      ans: 0,
      exp: "Điều 2 Hiến pháp 2013: Nhà nước CHXHCN Việt Nam là nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân."
    },
    {
      q: "Lực lượng nào là đội tiên phong của giai cấp công nhân, đại biểu trung thành lợi ích của nhân dân lao động và giữ vai trò lãnh đạo Nhà nước và xã hội?",
      options: ["Đảng Cộng sản Việt Nam", "Mặt trận Tổ quốc Việt Nam", "Hội Cựu chiến binh Việt Nam", "Đoàn Thanh niên Cộng sản Hồ Chí Minh"],
      ans: 0,
      exp: "Điều 4 Hiến pháp: Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội."
    }
  ],
  16: [
    {
      q: "Mọi người đều có quyền sống. Tính mạng con người được pháp luật bảo hộ. Không ai bị tước đoạt tính mạng trái luật là quy định về:",
      options: ["Quyền con người cơ bản", "Nghĩa vụ đóng thuế", "Nghĩa vụ quân sự", "Quyền tự do kinh doanh có điều kiện"],
      ans: 0,
      exp: "Điều 19 Hiến pháp khẳng định quyền sống là quyền thiêng liêng cơ bản của con người được nhà nước và pháp luật tôn trọng, bảo vệ."
    },
    {
      q: "Nghĩa vụ thiêng liêng và quyền cao quý nhất của công dân đối với Tổ quốc Việt Nam là:",
      options: ["Bảo vệ Tổ quốc", "Đăng kí kinh doanh doanh nghiệp", "Đi du lịch khám phá", "Mua bảo hiểm nhân thọ"],
      ans: 0,
      exp: "Điều 45 Hiến pháp 2013: Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân."
    }
  ],
  17: [
    {
      q: "Nền kinh tế Việt Nam theo quy định của Hiến pháp là:",
      options: [
        "Nền kinh tế thị trường định hướng xã hội chủ nghĩa với nhiều hình thức sở hữu, nhiều thành phần kinh tế",
        "Nền kinh tế bao cấp chỉ gồm sở hữu nhà nước tuyệt đối",
        "Nền kinh tế tự cung tự cấp không giao thương quốc tế",
        "Nền kinh tế tư bản tư nhân hoàn toàn không có sự quản lí của nhà nước"
      ],
      ans: 0,
      exp: "Điều 51 Hiến pháp 2013: Nền kinh tế Việt Nam là nền kinh tế thị trường định hướng xã hội chủ nghĩa, kinh tế nhà nước giữ vai trò chủ đạo."
    },
    {
      q: "Quy định hiến định về chính sách môi trường tại Việt Nam yêu cầu:",
      options: [
        "Mọi cá nhân, tổ chức có trách nhiệm bảo vệ môi trường; người gây ô nhiễm phải bồi thường, khắc phục",
        "Được phép xả rác và nước thải tự do ra sông ngòi để giảm chi phí sản xuất",
        "Chỉ bảo vệ môi trường tại các khu đô thị lớn",
        "Khai thác cạn kiệt tài nguyên thiên nhiên nhanh nhất có thể"
      ],
      ans: 0,
      exp: "Điều 63 Hiến pháp quy định: Nghiêm cấm mọi hành vi gây ô nhiễm, huỷ hoại tài nguyên môi trường; xử lí nghiêm minh và khắc phục hậu quả."
    }
  ],
  18: [
    {
      q: "Hệ thống chính trị nước Cộng hoà xã hội chủ nghĩa Việt Nam gồm những bộ phận cấu thành nào?",
      options: [
        "Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội",
        "Chính phủ, Toà án nhân dân và Viện kiểm sát nhân dân",
        "Các doanh nghiệp nhà nước và tư nhân",
        "Quốc hội và các tập đoàn kinh tế liên doanh"
      ],
      ans: 0,
      exp: "Hệ thống chính trị Việt Nam gồm 3 khối gắn bó mật thiết: Đảng Cộng sản (lãnh đạo) — Nhà nước (quản lí) — Mặt trận Tổ quốc & các đoàn thể nhân dân (tập hợp, làm chủ)."
    },
    {
      q: "Nguyên tắc hoạt động cốt lõi của hệ thống chính trị Việt Nam bảo đảm quyền lực thuộc về nhân dân là:",
      options: ["Nguyên tắc tập trung dân chủ", "Nguyên tắc chuyên quyền độc đoán", "Nguyên tắc phân chia quyền lực tuyệt đối kiểu tam quyền phân lập", "Nguyên tắc thị trường tự do"],
      ans: 0,
      exp: "Tập trung dân chủ kết hợp hữu cơ giữa sự lãnh đạo tập trung, thống nhất với việc phát huy tối đa quyền dân chủ của nhân dân."
    }
  ],
  19: [
    {
      q: "Cơ quan nào là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam?",
      options: ["Quốc hội", "Chính phủ", "Toà án nhân dân tối cao", "Ban Chấp hành Trung ương"],
      ans: 0,
      exp: "Điều 69 Hiến pháp 2013: Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, thực hiện quyền lập hiến, lập pháp và quyết định các vấn đề hệ trọng."
    },
    {
      q: "Chức năng cơ bản của Chính phủ trong cơ chế quyền lực nhà nước là gì?",
      options: [
        "Là cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp",
        "Là cơ quan xét xử các vụ án hình sự",
        "Là cơ quan giám sát tối cao việc tuân theo Hiến pháp",
        "Là nguyên thủ quốc gia thay mặt nước về đối ngoại"
      ],
      ans: 0,
      exp: "Điều 94 Hiến pháp 2013: Chính phủ là cơ quan hành chính nhà nước cao nhất của nước CHXHCN Việt Nam, thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội."
    }
  ],
  20: [
    {
      q: "Cơ quan duy nhất có thẩm quyền xét xử của nước Cộng hoà xã hội chủ nghĩa Việt Nam, thực hiện quyền tư pháp là:",
      options: ["Toà án nhân dân", "Viện kiểm sát nhân dân", "Bộ Tư pháp", "Cơ quan công an"],
      ans: 0,
      exp: "Điều 102 Hiến pháp 2013: Toà án nhân dân là cơ quan xét xử của nước Cộng hoà xã hội chủ nghĩa Việt Nam, thực hiện quyền tư pháp."
    },
    {
      q: "Viện kiểm sát nhân dân có hai chức năng hiến định đặc thù là:",
      options: [
        "Thực hành quyền công tố và kiểm sát hoạt động tư pháp",
        "Soạn thảo luật và bỏ phiếu thông qua luật",
        "Ban hành nghị định và quản lí ngân sách địa phương",
        "Tuyên án và tổ chức trại giam thi hành án phạt tù"
      ],
      ans: 0,
      exp: "Điều 107 Hiến pháp 2013: Viện kiểm sát nhân dân thực hành quyền công tố, kiểm sát hoạt động tư pháp, bảo đảm pháp luật được chấp hành nghiêm chỉnh."
    }
  ],
  21: [
    {
      q: "Cơ quan quyền lực nhà nước ở địa phương, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân địa phương là:",
      options: ["Hội đồng nhân dân (HĐND)", "Uỷ ban nhân dân (UBND)", "Toà án nhân dân khu vực", "Sở Tài chính"],
      ans: 0,
      exp: "Điều 113 Hiến pháp 2013: Hội đồng nhân dân là cơ quan quyền lực nhà nước ở địa phương, do Nhân dân địa phương bầu ra."
    },
    {
      q: "Mối quan hệ giữa Hội đồng nhân dân (HĐND) và Uỷ ban nhân dân (UBND) cùng cấp được xác định như thế nào?",
      options: [
        "UBND do HĐND cùng cấp bầu ra, là cơ quan chấp hành của HĐND và là cơ quan hành chính nhà nước ở địa phương",
        "UBND độc lập hoàn toàn và không chịu sự giám sát của HĐND",
        "HĐND do Chủ tịch UBND bổ nhiệm và cách chức",
        "UBND là cơ quan lập pháp ở địa phương"
      ],
      ans: 0,
      exp: "UBND là cơ quan chấp hành của HĐND cùng cấp, chịu trách nhiệm trước HĐND và cơ quan hành chính nhà nước cấp trên."
    }
  ]
};

// Exam questions for Trạng Nguyên 25-question modal
const examQuestions = [
  {
    q: "Bốn hoạt động kinh tế cơ bản trong một chu trình kinh tế vận hành theo quan hệ mật thiết là gì?",
    options: [
      "Sản xuất → Phân phối → Trao đổi → Tiêu dùng",
      "Kế hoạch → Đầu tư → Vay vốn → Tích luỹ",
      "Tiêu dùng → Vay nợ → Mua sắm → Hạn mức",
      "Lập nghiệp → Thu thuế → Bán lẻ → Chiết khấu"
    ],
    ans: 0,
    exp: "Bốn hoạt động cơ bản là: Sản xuất (tạo ra sản phẩm), Phân phối (chia nguồn lực/kết quả), Trao đổi (mua bán lưu thông), và Tiêu dùng (thỏa mãn nhu cầu, hoàn tất chu trình)."
  },
  {
    q: "Chủ thể nào đóng vai trò định hướng vĩ mô, ban hành pháp luật và khắc phục thất bại của thị trường?",
    options: ["Chủ thể Nhà nước", "Chủ thể sản xuất tư nhân", "Chủ thể tiêu dùng", "Chủ thể trung gian"],
    ans: 0,
    exp: "Nhà nước quản lí nền kinh tế bằng pháp luật, chính sách tài khóa, tiền tệ để ổn định vĩ mô và đảm bảo công bằng xã hội."
  },
  {
    q: "Khi thị trường phản ánh sự tăng giảm của giá cả hàng hoá giúp người sản xuất chuyển dịch vốn, đó là chức năng gì?",
    options: ["Chức năng thông tin và điều tiết", "Chức năng bảo hiểm tài sản", "Chức năng giải phóng sức lao động", "Chức năng phúc lợi xã hội"],
    ans: 0,
    exp: "Thị trường phát tín hiệu thông tin (giá cả, cung cầu), từ đó điều tiết dòng vốn và nguồn lực giữa các ngành kinh tế."
  },
  {
    q: "Theo quy luật cung - cầu, khi Cầu tăng cao hơn Cung (Cầu > Cung), giá cả hàng hoá sẽ:",
    options: ["Tăng lên", "Giảm mạnh", "Bằng 0", "Không thay đổi"],
    ans: 0,
    exp: "Khi người mua nhiều hơn lượng hàng có sẵn (Cầu > Cung), người mua cạnh tranh đẩy giá cả tăng lên."
  },
  {
    q: "Ngân sách nhà nước là kế hoạch tài chính bằng tiền của quốc gia được quyết định và phê chuẩn bởi:",
    options: ["Quốc hội", "Thủ tướng Chính phủ", "Thống đốc Ngân hàng Nhà nước", "Bộ Tài chính"],
    ans: 0,
    exp: "Theo Hiến pháp và Luật Ngân sách nhà nước, Quốc hội có thẩm quyền quyết định dự toán và phê chuẩn quyết toán ngân sách nhà nước."
  },
  {
    q: "Nguồn thu chủ yếu, chiếm tỉ trọng lớn nhất và bền vững nhất của Ngân sách nhà nước là:",
    options: ["Thuế", "Vay nợ nước ngoài", "Viện trợ không hoàn lại", "Phát hành tiền giấy mới"],
    ans: 0,
    exp: "Thuế là nguồn thu cốt lõi, quan trọng nhất của mọi quốc gia để chi trả cho các hoạt động công cộng và an sinh."
  },
  {
    q: "Loại thuế nào sau đây thuộc nhóm thuế trực thu?",
    options: ["Thuế thu nhập doanh nghiệp", "Thuế giá trị gia tăng (VAT)", "Thuế tiêu thụ đặc biệt", "Thuế xuất nhập khẩu"],
    ans: 0,
    exp: "Thuế trực thu đánh trực tiếp vào thu nhập của người nộp thuế (như thuế Thu nhập doanh nghiệp, Thuế thu nhập cá nhân)."
  },
  {
    q: "Mô hình kinh doanh nào mà các thành viên góp vốn chỉ chịu trách nhiệm về các khoản nợ trong phạm vi số vốn đã góp vào công ty?",
    options: ["Công ty trách nhiệm hữu hạn (TNHH)", "Doanh nghiệp tư nhân", "Thành viên hợp danh công ty hợp danh", "Chủ hộ kinh doanh cá thể"],
    ans: 0,
    exp: "Thành viên công ty TNHH chịu trách nhiệm hữu hạn trong phạm vi số vốn điều lệ đã góp/cam kết góp vào công ty."
  },
  {
    q: "Đặc điểm khác biệt của Hợp tác xã so với các loại hình công ty kinh doanh thuần tuý là:",
    options: [
      "Nguyên tắc tổ chức dân chủ, bình đẳng: mỗi thành viên có một phiếu biểu quyết ngang nhau không phụ thuộc vào tỉ lệ vốn góp",
      "Chỉ một người duy nhất làm chủ sở hữu và hưởng toàn bộ lợi nhuận",
      "Được quyền phát hành cổ phiếu công khai lên sàn chứng khoán",
      "Không cần đăng kí kinh doanh với cơ quan chức năng"
    ],
    ans: 0,
    exp: "Hợp tác xã hoạt động dựa trên sự tương trợ cộng đồng và biểu quyết bình đẳng (mỗi xã viên 1 phiếu biểu quyết)."
  },
  {
    q: "Hoạt động tín dụng dựa trên 3 nguyên tắc then chốt nào sau đây?",
    options: [
      "Có tính chuyển giao quyền sử dụng, có thời hạn và có tính hoàn trả (cả gốc lẫn lãi)",
      "Cho tặng vô điều kiện, không kỳ hạn và chia sẻ rủi ro",
      "Mua bán dứt điểm, giao hàng ngay và trao đổi hiện vật",
      "Chuyển nhượng quyền sở hữu vĩnh viễn và không tính lãi suất"
    ],
    ans: 0,
    exp: "Tín dụng là quan hệ vay mượn có hoàn trả vốn gốc, thời hạn cụ thể và lãi suất kèm theo."
  },
  {
    q: "Tín dụng thương mại là hình thức tín dụng diễn ra giữa:",
    options: [
      "Các doanh nghiệp sản xuất kinh doanh với nhau dưới hình thức mua bán chịu hàng hoá",
      "Ngân hàng thương mại cho người dân vay mua ô tô",
      "Chính phủ đi vay vốn ODA từ Ngân hàng Thế giới",
      "Người tiêu dùng quẹt thẻ tín dụng tại siêu thị"
    ],
    ans: 0,
    exp: "Tín dụng thương mại là quan hệ cấp vốn giữa các đơn vị kinh doanh thông qua hình thức trả chậm, trả góp hàng hoá."
  },
  {
    q: "Theo quy tắc lập kế hoạch tài chính cá nhân 50/30/20, tỉ lệ 50% thu nhập nên dành cho nhóm nào?",
    options: ["Nhu cầu thiết yếu (ăn uống, nhà ở, điện nước, y tế...)", "Mong muốn cá nhân (mua sắm thời trang, cà phê, du lịch)", "Tiết kiệm dài hạn và đầu tư sinh lời", "Cho vay và biếu tặng"],
    ans: 0,
    exp: "50% thu nhập dành cho các nhu cầu sinh tồn bắt buộc (Essential Needs)."
  },
  {
    q: "Tính quy phạm phổ biến của pháp luật có nghĩa là gì?",
    options: [
      "Quy tắc xử sự chung, làm khuôn mẫu, được áp dụng nhiều lần cho nhiều đối tượng trong phạm vi cả nước",
      "Chỉ áp dụng riêng cho một nhóm người có chức vụ",
      "Được lưu truyền bằng miệng và thay đổi theo ý thích cá nhân",
      "Chỉ áp dụng trong một khoảng thời gian vài ngày"
    ],
    ans: 0,
    exp: "Quy phạm phổ biến nghĩa là chuẩn mực xử sự chung cho mọi người trong xã hội do Nhà nước ban hành."
  },
  {
    q: "Văn bản quy phạm pháp luật do Quốc hội ban hành có tên gọi là:",
    options: ["Luật, Bộ luật, Nghị quyết của Quốc hội", "Nghị định của Chính phủ", "Quyết định của Thủ tướng Chính phủ", "Thông tư của Bộ trưởng"],
    ans: 0,
    exp: "Quốc hội là cơ quan duy nhất có quyền ban hành Hiến pháp, Luật, Bộ luật và Nghị quyết của Quốc hội."
  },
  {
    q: "Người đi xe gắn máy đội mũ bảo hiểm đúng quy cách khi lưu thông trên đường là biểu hiện của hình thức thực hiện pháp luật nào?",
    options: ["Thi hành pháp luật", "Tuân thủ pháp luật", "Áp dụng pháp luật", "Sử dụng pháp luật"],
    ans: 0,
    exp: "Thi hành pháp luật: Cá nhân, tổ chức chủ động thực hiện nghĩa vụ mà pháp luật quy định phải làm (đội mũ bảo hiểm, đóng thuế)."
  },
  {
    q: "Hành vi nào dưới đây thể hiện hình thức 'Sử dụng pháp luật'?",
    options: [
      "Công dân từ đủ 18 tuổi đi bỏ phiếu bầu cử đại biểu Quốc hội",
      "Không lái xe khi đã uống rượu bia",
      "Cảnh sát lập biên bản xử phạt người vi phạm",
      "Doanh nghiệp nộp thuế thu nhập doanh nghiệp"
    ],
    ans: 0,
    exp: "Sử dụng pháp luật là cá nhân, tổ chức thực hiện quyền của mình (làm những gì pháp luật cho phép làm, như quyền bầu cử, quyền khiếu nại)."
  },
  {
    q: "Hiến pháp nước CHXHCN Việt Nam năm 2013 khẳng định quyền lực nhà nước là:",
    options: [
      "Thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp",
      "Phân chia độc lập tuyệt đối không liên hệ với nhau",
      "Tập trung toàn bộ vào Toà án nhân dân",
      "Không cần sự giám sát của Nhân dân"
    ],
    ans: 0,
    exp: "Điều 2 Khoản 3 Hiến pháp 2013: Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát quyền lực."
  },
  {
    q: "Quyền nào dưới đây thuộc nhóm quyền con người và quyền công dân về chính trị?",
    options: [
      "Quyền bầu cử và ứng cử vào Quốc hội, Hội đồng nhân dân",
      "Quyền được chăm sóc y tế và bảo vệ sức khoẻ",
      "Quyền tự do kinh doanh các ngành nghề luật không cấm",
      "Quyền nghiên cứu khoa học và sáng tạo nghệ thuật"
    ],
    ans: 0,
    exp: "Quyền bầu cử, ứng cử, tham gia quản lí nhà nước là quyền chính trị cơ bản của công dân."
  },
  {
    q: "Thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam?",
    options: ["Kinh tế nhà nước", "Kinh tế tư nhân", "Kinh tế có vốn đầu tư nước ngoài", "Kinh tế cá thể"],
    ans: 0,
    exp: "Điều 51 Hiến pháp 2013 quy định: Kinh tế nhà nước giữ vai trò chủ đạo, dẫn dắt các thành phần kinh tế cùng phát triển."
  },
  {
    q: "Hệ thống chính trị nước Cộng hoà xã hội chủ nghĩa Việt Nam vận hành theo cơ chế lãnh đạo nào?",
    options: [
      "Đảng lãnh đạo, Nhà nước quản lí, Nhân dân làm chủ",
      "Doanh nghiệp lãnh đạo, Hiệp hội thương mại quản lí",
      "Quân đội chỉ huy tuyệt đối mọi hoạt động",
      "Tự do cạnh tranh không có người điều phối"
    ],
    ans: 0,
    exp: "Cơ chế vận hành nền tảng: Đảng lãnh đạo toàn diện — Nhà nước quản lí bằng pháp luật — Nhân dân làm chủ đất nước."
  },
  {
    q: "Cơ quan nào là cơ quan thường trực của Quốc hội giữa hai kì họp?",
    options: ["Uỷ ban Thường vụ Quốc hội", "Hội đồng Dân tộc", "Uỷ ban Quốc phòng và An ninh", "Văn phòng Quốc hội"],
    ans: 0,
    exp: "Điều 73 Hiến pháp 2013: Uỷ ban Thường vụ Quốc hội là cơ quan thường trực của Quốc hội."
  },
  {
    q: "Chủ tịch nước CHXHCN Việt Nam do cơ quan nào bầu ra trong số các đại biểu của mình?",
    options: ["Quốc hội", "Chính phủ", "Mặt trận Tổ quốc", "Toà án nhân dân tối cao"],
    ans: 0,
    exp: "Điều 87 Hiến pháp: Chủ tịch nước do Quốc hội bầu trong số đại biểu Quốc hội theo giới thiệu của Uỷ ban Thường vụ Quốc hội."
  },
  {
    q: "Người đứng đầu Chính phủ, chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ là:",
    options: ["Thủ tướng Chính phủ", "Chủ tịch Quốc hội", "Bộ trưởng Bộ Ngoại giao", "Tổng Thanh tra Chính phủ"],
    ans: 0,
    exp: "Điều 95 Hiến pháp 2013: Thủ tướng Chính phủ là người đứng đầu Chính phủ, chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ."
  },
  {
    q: "Toà án nhân dân xét xử sơ thẩm có sự tham gia của đối tượng nào đại diện cho tiếng nói và lương tri của nhân dân?",
    options: ["Hội thẩm nhân dân", "Cảnh sát điều tra", "Luật sư bào chữa", "Giám định viên y khoa"],
    ans: 0,
    exp: "Điều 103 Hiến pháp: Việc xét xử sơ thẩm của Toà án nhân dân có Hội thẩm nhân dân tham gia, trừ trường hợp xét xử theo thủ tục rút gọn."
  },
  {
    q: "Hội đồng nhân dân (HĐND) ban hành văn bản quy phạm pháp luật nào để quyết định các chủ trương phát triển kinh tế - xã hội ở địa phương?",
    options: ["Nghị quyết của Hội đồng nhân dân", "Quyết định của Uỷ ban nhân dân", "Chỉ thị của Chủ tịch tỉnh", "Thông tư địa phương"],
    ans: 0,
    exp: "HĐND ban hành Nghị quyết; UBND ban hành Quyết định để tổ chức thi hành."
  }
];

function parseInlineMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-white font-bold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
}

function parseMarkdownTable(tableLines) {
  if (tableLines.length < 2) return '';
  const headerCells = tableLines[0].split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  const dataRows = tableLines.slice(2).map(line => {
    return line.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  });

  return `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-indigo-50/80 dark:bg-indigo-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
            ${headerCells.map((h, i) => `<th class="p-3.5 font-extrabold ${i === 0 ? 'w-1/4' : ''}">${parseInlineMarkdown(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
          ${dataRows.map(row => `
            <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
              ${row.map((cell, cIdx) => `
                <td class="p-3.5 align-top ${cIdx === 0 ? 'font-bold text-indigo-700 dark:text-indigo-400' : ''}">
                  ${parseInlineMarkdown(cell)}
                </td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function parseLessonBlocks(rawText) {
  const lines = rawText.split('\n');
  const blocks = [];
  let currentBlock = null;

  for (let rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // Check table
    if (trimmed.startsWith('|')) {
      if (currentBlock && currentBlock.type === 'table') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'table', lines: [trimmed] };
      }
      continue;
    }

    // Check if indented sub-item (2 or more leading spaces with - or *)
    const isSub = /^(\s{2,}|\t)[-*]\s+(.*)$/.exec(rawLine);
    if (isSub && currentBlock && (currentBlock.type === 'card' || currentBlock.type === 'numbered')) {
      const subContent = isSub[2].trim();
      const subBoldMatch = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(subContent);
      const subColonMatch = /^([^:]+):[:\s]*(.*)$/.exec(subContent);
      const kwRegex = /^(Tín chấp|Thế chấp|Trả góp|Thẻ tín dụng|Mua trả góp|Đại diện|Quyết định|Quy phạm pháp luật|Chế định pháp luật|Ngành luật|Công tố|Kiểm sát tư pháp|Tính quy phạm phổ biến|Tính quyền lực[,\s]*bắt buộc chung|Tính xác định chặt chẽ|Thừa nhận giá trị|Cung cấp thông tin|Điều tiết và kích thích|Doanh nghiệp tư nhân|Công ty hợp danh|Công ty TNHH|Công ty cổ phần|Doanh nghiệp nhà nước|Thuế trực thu|Thuế gián thu)/i;
      const kwMatch = kwRegex.exec(subContent);

      if (subBoldMatch) {
        currentBlock.children.push({
          term: subBoldMatch[1].replace(/[:\s]+$/, '').trim(),
          desc: subBoldMatch[2].trim()
        });
      } else if (subColonMatch && subColonMatch[1].length < 35 && !subColonMatch[1].includes(';')) {
        currentBlock.children.push({
          term: subColonMatch[1].replace(/[:\s]+$/, '').trim(),
          desc: subColonMatch[2].trim()
        });
      } else if (kwMatch) {
        const term = kwMatch[1].replace(/[:\s]+$/, '').trim();
        const desc = subContent.slice(kwMatch[0].length).replace(/^[:\s,–—]+/, '').trim();
        currentBlock.children.push({
          term: term,
          desc: desc
        });
      } else {
        currentBlock.children.push({
          term: '',
          desc: subContent
        });
      }
      continue;
    }

    // Check top-level bullet: - **Term:** desc
    const bulletMatch = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletMatch[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletMatch[2].trim(),
        children: []
      };
      continue;
    }

    // Numbered item: 1. **Term:** desc or 1. desc
    const numMatch = /^(\d+)\.\s+(\*\*([^*]+)\*\*[:\s]*)?(.*)$/.exec(trimmed);
    if (numMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'numbered',
        num: numMatch[1],
        term: numMatch[3] ? numMatch[3].replace(/[:\s]+$/, '').trim() : '',
        lead: numMatch[4] ? numMatch[4].trim() : '',
        children: []
      };
      continue;
    }

    // Top-level bullet without bold: - text
    const plainBullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (plainBullet) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'intro',
        lead: plainBullet[1].trim(),
        children: []
      };
      continue;
    }

    // Regular paragraph
    if (currentBlock) blocks.push(currentBlock);
    currentBlock = {
      type: 'paragraph',
      lead: trimmed,
      children: []
    };
  }
  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

function formatMarkdownToCards(rawText, lessonNum) {
  const blocks = parseLessonBlocks(rawText);
  let html = '<div class="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">';

  // Inject diagrams at top of specific lessons
  if (lessonNum === 1) html += diagrams.economicCycleSVG;
  else if (lessonNum === 4) html += diagrams.marketMechanismSVG;
  else if (lessonNum === 5) html += diagrams.budgetTaxSVG;
  else if (lessonNum === 7) html += diagrams.businessModelsSVG;
  else if (lessonNum === 12) html += diagrams.lawHierarchySVG;
  else if (lessonNum === 18) html += diagrams.stateApparatusSVG;

  for (let b of blocks) {
    if (b.type === 'table') {
      html += parseMarkdownTable(b.lines);
    } else if (b.type === 'intro') {
      html += `
        <div class="p-4 bg-gradient-to-r from-indigo-50/90 to-blue-50/70 dark:from-indigo-950/40 dark:to-slate-800/60 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 shadow-xs">
          <div class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs shadow-xs mt-0.5">
              <i class="fa-solid fa-circle-info"></i>
            </span>
            <div class="flex-1">${parseInlineMarkdown(b.lead)}</div>
          </div>
        </div>
      `;
    } else if (b.type === 'card') {
      const isWarning = b.term.toLowerCase().includes('an toàn') || b.term.toLowerCase().includes('lưu ý') || b.term.toLowerCase().includes('rủi ro') || b.term.toLowerCase().includes('trách nhiệm');
      const cardBorder = isWarning ? 'border-amber-300 dark:border-amber-800/80 bg-amber-50/40 dark:bg-amber-950/30' : 'border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/80';
      const icon = isWarning ? 'fa-shield-halved text-amber-500' : 'fa-layer-group text-indigo-500';

      html += `
        <div class="p-5 rounded-2xl border ${cardBorder} shadow-xs mb-4">
          <div class="flex items-center gap-2.5 mb-2 pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-base"></i>
            <h5 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">
              ${b.term}
            </h5>
          </div>
          ${b.lead ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${parseInlineMarkdown(b.lead)}</p>` : ''}
          ${b.children.length > 0 ? `
            <div class="grid grid-cols-1 ${b.children.length >= 3 ? 'md:grid-cols-3' : b.children.length === 2 ? 'md:grid-cols-2' : ''} gap-3 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/40">
              ${b.children.map(child => `
                <div class="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-start">
                  ${child.term ? `<strong class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1 text-xs sm:text-sm"><i class="fa-solid fa-angle-right mr-1 text-[10px]"></i> ${child.term}</strong>` : ''}
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${parseInlineMarkdown(child.desc)}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    } else if (b.type === 'numbered') {
      html += `
        <div class="p-4 bg-indigo-50/40 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 mb-3 shadow-xs">
          <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              ${b.num}
            </span>
            <div class="flex-1">
              ${b.term ? `<strong class="text-indigo-700 dark:text-indigo-300 font-bold block mb-1 text-xs sm:text-sm">${b.term}</strong>` : ''}
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${parseInlineMarkdown(b.lead)}</p>
            </div>
          </div>
        </div>
      `;
    } else {
      const isNote = b.lead.startsWith('Phân biệt:') || b.lead.startsWith('Lưu ý:') || b.lead.startsWith('Công dân/');
      const boxStyle = isNote 
        ? 'p-4 bg-amber-50/80 dark:bg-amber-950/40 rounded-2xl border border-amber-200/80 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 font-medium'
        : 'p-3.5 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300';

      html += `
        <div class="${boxStyle} text-xs sm:text-sm leading-relaxed mb-3">
          ${parseInlineMarkdown(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

// Render Mini-Quiz HTML
function renderLessonQuiz(quizList, lessonNum) {
  if (!quizList || quizList.length === 0) return '';
  return `
    <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Bài ${lessonNum} (${quizList.length} câu)
        </h4>
        <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng</span>
      </div>
      <div class="space-y-4">
        ${quizList.map((qItem, qIdx) => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
            <p class="font-bold text-slate-900 dark:text-white mb-3">
              <span class="text-emerald-600 dark:text-emerald-400">Câu ${qIdx + 1}:</span> ${qItem.q}
            </p>
            <div class="space-y-2">
              ${qItem.options.map((opt, optIdx) => `
                <button type="button" 
                  onclick="checkLessonQuiz(this, ${optIdx === qItem.ans}, '${qItem.exp.replace(/'/g, "\\'")}')"
                  class="quiz-btn w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/70 text-slate-700 dark:text-slate-300 font-medium transition flex items-center justify-between gap-2">
                  <span>${opt}</span>
                  <span class="quiz-indicator hidden text-sm font-bold"></span>
                </button>
              `).join('')}
            </div>
            <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs font-medium"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Build Sidebar HTML - With the 2-line clean layout, NO truncation!
function renderSidebarHTML() {
  let html = '<nav class="space-y-6 text-xs">';
  topicMeta.forEach(topic => {
    const isEcon = topic.part === 1;
    const headerColor = isEcon ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60' : 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60';
    const numBadgeColor = isEcon ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600 dark:text-rose-400';
    const hoverBorder = isEcon ? 'hover:border-indigo-200 dark:hover:border-indigo-800/60 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/50' : 'hover:border-rose-200 dark:hover:border-rose-800/60 hover:bg-rose-50/70 dark:hover:bg-rose-950/50';

    html += `
      <div>
        <div class="text-[11px] font-black uppercase tracking-wider px-3 py-1.5 flex items-center justify-between ${headerColor} rounded-xl mb-2">
          <span>Chủ đề ${topic.num}: ${topic.title}</span>
          <span class="text-[10px] font-bold opacity-80">${topic.lessons.length} bài</span>
        </div>
        <div class="space-y-1">
          ${topic.lessons.map(lNum => {
            const lesson = lessonContents[lNum];
            return `
              <a href="#bai-${lNum}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent ${hoverBorder} text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <div class="flex items-center justify-between gap-1.5 mb-0.5">
                  <span class="font-bold text-xs ${numBadgeColor}">Bài ${lNum}</span>
                  <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Chủ đề ${topic.num}</span>
                </div>
                <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition leading-snug">
                  ${lesson.title}
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  // Appendix / Lookup Section
  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu & Kỹ năng</span>
        <span class="text-[10px] text-amber-600 font-bold">4 mục</span>
      </div>
      <div class="space-y-1">
        <a href="#cac-cap-khai-niem" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-900/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Phân biệt</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Tra cứu</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
            Các cặp khái niệm kinh tế & pháp luật dễ nhầm
          </div>
        </a>

        <a href="#khung-tinh-huong-kt" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-blue-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-blue-600 dark:text-blue-400">Kỹ năng KT</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">5 bước</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-snug">
            Khung xử lí tình huống kinh tế thực tế
          </div>
        </a>

        <a href="#khung-tinh-huong-pl" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-purple-200 dark:hover:border-purple-900/60 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/70 dark:hover:bg-purple-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-purple-600 dark:text-purple-400">Kỹ năng PL</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">4 bước</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition leading-snug">
            Khung nhận diện & giải quyết vấn đề pháp luật
          </div>
        </a>

        <a href="#thuat-ngu-cot-loi" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">Từ khoá</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Cốt lõi</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">
            Bảng giải thích thuật ngữ then chốt
          </div>
        </a>
      </div>
    </div>
  </nav>`;
  return html;
}

// Build Main Articles HTML
function renderMainArticlesHTML() {
  let html = '';
  
  // Section: Phần một - Giáo dục kinh tế
  html += `
    <div id="section-kinhte" class="mb-12">
      <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-900 to-slate-900 rounded-2xl text-white shadow-sm mb-8">
        <span class="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-lg text-indigo-300">
          <i class="fa-solid fa-chart-line"></i>
        </span>
        <div>
          <span class="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">PHẦN THỨ NHẤT</span>
          <h2 class="text-xl sm:text-2xl font-black">GIÁO DỤC KINH TẾ (CHỦ ĐỀ 1 – 6)</h2>
        </div>
      </div>
  `;

  for (let i = 1; i <= 10; i++) {
    const lesson = lessonContents[i];
    const quizHTML = renderLessonQuiz(lessonQuizzes[i], i);
    const contentHTML = formatMarkdownToCards(lesson.body, i);

    html += `
      <article id="bai-${i}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-indigo-500/20 tracking-wide">
              <i class="fa-solid fa-book-open"></i> Bài ${i}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/60">
              Giáo dục kinh tế
            </span>
          </div>
          <button onclick="toggleBookmark('bai-${i}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-snug tracking-tight">
          <span class="text-indigo-600 dark:text-indigo-400">Bài ${i}:</span> ${lesson.title}
        </h3>

        ${contentHTML}
        ${quizHTML}
      </article>
    `;
  }
  html += `</div>`;

  // Section: Phần hai - Giáo dục pháp luật
  html += `
    <div id="section-phapluat" class="mb-12">
      <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-rose-900 to-slate-900 rounded-2xl text-white shadow-sm mb-8">
        <span class="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-lg text-rose-300">
          <i class="fa-solid fa-scale-balanced"></i>
        </span>
        <div>
          <span class="text-[11px] font-bold text-rose-300 uppercase tracking-wider block">PHẦN THỨ HAI</span>
          <h2 class="text-xl sm:text-2xl font-black">GIÁO DỤC PHÁP LUẬT (CHỦ ĐỀ 7 – 9)</h2>
        </div>
      </div>
  `;

  for (let i = 11; i <= 21; i++) {
    const lesson = lessonContents[i];
    const quizHTML = renderLessonQuiz(lessonQuizzes[i], i);
    const contentHTML = formatMarkdownToCards(lesson.body, i);

    html += `
      <article id="bai-${i}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-rose-500/20 tracking-wide">
              <i class="fa-solid fa-gavel"></i> Bài ${i}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-900/60">
              Giáo dục pháp luật
            </span>
          </div>
          <button onclick="toggleBookmark('bai-${i}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-snug tracking-tight">
          <span class="text-rose-600 dark:text-rose-400">Bài ${i}:</span> ${lesson.title}
        </h3>

        ${contentHTML}
        ${quizHTML}
      </article>
    `;
  }
  html += `</div>`;

  // Appendix / Practical Frameworks
  html += `
    <div id="section-tra-cuu" class="space-y-10 mb-12">
      <!-- 1. Bảng phân biệt các cặp khái niệm dễ nhầm -->
      <article id="cac-cap-khai-niem" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-black text-xs uppercase tracking-wider">
            Tra cứu so sánh
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Các cặp khái niệm kinh tế & pháp luật dễ nhầm
          </h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <th class="p-3 border border-slate-200 dark:border-slate-700 rounded-tl-xl">Cặp khái niệm</th>
                <th class="p-3 border border-slate-200 dark:border-slate-700">Điểm phân biệt bản chất</th>
                <th class="p-3 border border-slate-200 dark:border-slate-700 rounded-tr-xl">Dấu hiệu nhận biết thực tế</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700 text-slate-600 dark:text-slate-300">
              <tr>
                <td class="p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Phân phối vs Trao đổi</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Phân phối chia nguồn lực và thu nhập kết quả; Trao đổi mua bán hàng hoá dịch vụ.</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Nhận lương/chia lãi = Phân phối; Mua hàng ở chợ/siêu thị = Trao đổi.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Thuế trực thu vs Thuế gián thu</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Trực thu đánh thẳng vào thu nhập/tài sản; Gián thu cấu thành vào giá bán hàng hoá.</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Thuế TNCN, TNDN = Trực thu; Thuế VAT, TTĐB trên hoá đơn = Gián thu.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Tín dụng thương mại vs Tín dụng ngân hàng</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Thương mại là mua chịu giữa các DN; Ngân hàng là vay tiền tệ từ tổ chức tín dụng.</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Giao hàng trước thanh toán sau 60 ngày = Thương mại; Vay vốn lãi suất 8%/năm = Ngân hàng.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">DNTN vs Công ty TNHH</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">DNTN chịu trách nhiệm vô hạn; Công ty TNHH chịu trách nhiệm hữu hạn trong phạm vi vốn.</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Rủi ro tài sản cá nhân hoàn toàn = DNTN; An toàn tách bạch tài sản = TNHH.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Quy phạm pháp luật vs Đạo đức</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Pháp luật mang tính bắt buộc chung do Nhà nước bảo đảm; Đạo đức do lương tâm và dư luận.</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Bị xử phạt hành chính/hình sự = Pháp luật; Bị xã hội chê trách = Đạo đức.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Toà án vs Viện kiểm sát</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Toà án thực hiện quyền tư pháp (xét xử); Viện kiểm sát thực hành quyền công tố & kiểm sát tư pháp.</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Thẩm phán ra phán quyết, tuyên án = Toà án; Kiểm sát viên truy tố bị can = Viện kiểm sát.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <!-- 2. Khung xử lí tình huống kinh tế -->
      <article id="khung-tinh-huong-kt" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-black text-xs uppercase tracking-wider">
            Kỹ năng ứng dụng
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Khung 5 bước xử lí tình huống kinh tế
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs sm:text-sm">
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">1</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Xác định chủ thể</strong>
            <p class="text-slate-600 dark:text-slate-400">Người tiêu dùng, doanh nghiệp, người sản xuất, trung gian hay Nhà nước?</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">2</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Xác định quan hệ</strong>
            <p class="text-slate-600 dark:text-slate-400">Mua bán, tín dụng vay nợ, phân phối kết quả hay nghĩa vụ thuế?</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">3</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Áp dụng quy luật</strong>
            <p class="text-slate-600 dark:text-slate-400">Quy luật Cung - Cầu, Giá cả thị trường, Cạnh tranh hay Giá trị?</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">4</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Đánh giá rủi ro</strong>
            <p class="text-slate-600 dark:text-slate-400">Khả năng trả nợ, tính thanh khoản, lạm phát và lợi ích - chi phí.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">5</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Ra quyết định</strong>
            <p class="text-slate-600 dark:text-slate-400">Đưa ra phương án tối ưu, bền vững và tuân thủ đúng pháp luật.</p>
          </div>
        </div>
      </article>

      <!-- 3. Khung nhận diện vấn đề pháp luật -->
      <article id="khung-tinh-huong-pl" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-black text-xs uppercase tracking-wider">
            Kỹ năng pháp lí
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Khung 4 bước nhận diện & giải quyết vấn đề pháp luật
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs sm:text-sm">
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs mb-2">1</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Nhận diện hành vi</strong>
            <p class="text-slate-600 dark:text-slate-400">Ai thực hiện hành vi? Hành vi dạng hành động hay không hành động?</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs mb-2">2</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Đối chiếu quy định</strong>
            <p class="text-slate-600 dark:text-slate-400">Quy định ở điều khoản nào? Thuộc luật nào (Dân sự, Hình sự, Hành chính...)?</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs mb-2">3</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Xác định tính chất</strong>
            <p class="text-slate-600 dark:text-slate-400">Có lỗi không? Có gây thiệt hại không? Có năng lực trách nhiệm pháp lí không?</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs mb-2">4</span>
            <strong class="text-slate-900 dark:text-white block mb-1">Hậu quả pháp lí</strong>
            <p class="text-slate-600 dark:text-slate-400">Trách nhiệm pháp lí phải gánh chịu (bồi thường thiệt hại, phạt hành chính, phạt tù...)?</p>
          </div>
        </div>
      </article>

      <!-- 4. Thuật ngữ cốt lõi -->
      <article id="thuat-ngu-cot-loi" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-black text-xs uppercase tracking-wider">
            Từ điển thuật ngữ
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Bảng thuật ngữ cốt lõi môn KTPL 10
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Thị trường (Market):</strong>
            Nơi diễn ra các hoạt động trao đổi, mua bán hàng hoá dịch vụ giữa các chủ thể kinh tế thông qua giá cả.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Cơ chế thị trường:</strong>
            Hệ thống các quan hệ kinh tế tự điều tiết sự phân bổ các nguồn lực theo yêu cầu của các quy luật kinh tế khách quan.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Ngân sách nhà nước:</strong>
            Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong một khoảng thời gian nhất định (thường là 1 năm).
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Tín dụng (Credit):</strong>
            Quan hệ chuyển nhượng tạm thời quyền sử dụng một lượng giá trị (tiền tệ hoặc tài sản) trong một thời hạn nhất định và có hoàn trả cả gốc lẫn lãi.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Hiến pháp (Constitution):</strong>
            Luật cơ bản của Nhà nước, có hiệu lực pháp lí cao nhất, quy định bản chất nhà nước, chế độ chính trị, quyền con người và bộ máy nhà nước.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Quyền tư pháp (Judicial Power):</strong>
            Quyền lực nhà nước về xét xử và giải quyết các tranh chấp pháp lí, bảo vệ công lí, do Toà án nhân dân thực hiện.
          </div>
        </div>
      </article>
    </div>
  `;

  return html;
}

// Master HTML Page Generator
function generateFullPage() {
  const sidebarHTML = renderSidebarHTML();
  const mainArticlesHTML = renderMainArticlesHTML();

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giáo Dục Kinh Tế và Pháp Luật 10 — SGK Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Giáo dục Kinh tế và Pháp luật lớp 10 bám sát chuẩn SGK Kết nối tri thức. 9 chủ đề, 21 bài học, sơ đồ SVG tương tác và đề thi Trạng Nguyên 25 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#4f46e5',
            'primary-dark': '#4338ca',
            'dark-bg': '#0b0f19',
            'dark-surface': '#111827',
            'slate-850': '#151e32'
          }
        }
      }
    }
  </script>
  
  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Inter Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.7); }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(71, 85, 105, 0.5); }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(71, 85, 105, 0.8); }
  </style>
</head>
<body class="bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Subject Title -->
      <div class="flex items-center gap-3 sm:gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" title="Về trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <i class="fa-solid fa-graduation-cap text-base"></i>
          </div>
          <span class="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
            Code<span class="text-indigo-600">Hub</span>
          </span>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2">
          <span class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hidden md:inline-block">
            <i class="fa-solid fa-scale-balanced text-indigo-500 mr-1.5"></i> KTPL 10 (KNTT)
          </span>
          <span class="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 hidden sm:inline-block">
            21 Bài Chuẩn
          </span>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam Modal Trigger -->
        <button onclick="openExamModal()" class="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 flex items-center gap-2 transition transform active:scale-95">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Thi Trạng Nguyên</span>
          <span class="px-1.5 py-0.5 text-[10px] bg-white/20 rounded-md font-mono">25 câu</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="themeToggleBtn" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-amber-400"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileDrawer()" class="lg:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
          <i class="fa-solid fa-bars text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto custom-scrollbar">
      <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
        <span class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-ul text-indigo-500"></i> Mục lục bài học
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Hero Header Banner -->
  <div class="bg-gradient-to-b from-indigo-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-scale-balanced"></i> CHƯƠNG TRÌNH SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Giáo Dục Kinh Tế và Pháp Luật 10
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Hệ thống hoá kiến thức cốt lõi đầy đủ theo đúng 9 chủ đề và 21 bài học của SGK. Tích hợp sơ đồ cơ chế thị trường, phân bổ ngân sách, cấu trúc doanh nghiệp và bộ máy nhà nước theo Hiến pháp năm 2013 (sửa đổi, bổ sung 2025).
        </p>

        <!-- Stats Chips -->
        <div class="flex flex-wrap items-center gap-3 mt-6 text-xs font-bold">
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-layer-group"></i> 9 Chủ đề
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-book-open"></i> 21 Bài học đầy đủ
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project"></i> 6 Sơ đồ SVG tương tác
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-trophy"></i> 25 Câu trắc nghiệm Trạng Nguyên
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section with Sidebar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Desktop Sidebar Sticky -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-5 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-indigo-500"></i> Mục lục 21 bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Course Articles -->
      <main class="lg:col-span-3 space-y-8">
        
        <!-- Quick Section Jump Navigation -->
        <div class="sticky top-20 z-20 flex flex-wrap items-center gap-2 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8">
          <a href="#section-kinhte" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-900/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-chart-line"></i> <span>Phần 1: Kinh tế (Bài 1–10)</span>
          </a>
          <a href="#section-phapluat" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-gavel"></i> <span>Phần 2: Pháp luật (Bài 11–21)</span>
          </a>
          <a href="#section-tra-cuu" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/50 hover:bg-amber-100 dark:hover:bg-amber-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-table-list"></i> <span>Tra cứu & Kỹ năng</span>
          </a>
        </div>

        ${mainArticlesHTML}

      </main>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4">
      <p class="font-bold text-slate-700 dark:text-slate-300 mb-1">
        CodeHub Học Liệu Số — Giáo Dục Kinh Tế và Pháp Luật 10 (KNTT)
      </p>
      <p>
        Bản tổng hợp chuẩn kiến thức, sơ đồ trực quan và bài tập củng cố theo chương trình Giáo dục phổ thông 2018.
      </p>
    </div>
  </footer>

  <!-- Modal Thi Trạng Nguyên 25 Câu -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-rose-600 text-white flex items-center justify-center text-lg shadow-md shadow-indigo-500/20">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white">
              Khảo Thí Trạng Nguyên: KTPL 10
            </h3>
            <span class="text-xs text-slate-400">25 câu hỏi trắc nghiệm chuẩn SGK Kết nối tri thức</span>
          </div>
        </div>
        <button onclick="closeExamModal()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body (Questions or Results) -->
      <div id="examModalBody" class="p-6 overflow-y-auto custom-scrollbar flex-grow">
        <div id="examContainer" class="space-y-6"></div>

        <div id="examResultBox" class="hidden text-center py-8">
          <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-xl shadow-amber-500/30">
            <i class="fa-solid fa-crown"></i>
          </div>
          <h4 class="text-2xl font-black text-slate-900 dark:text-white mb-2" id="examScoreTitle"></h4>
          <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6" id="examScoreDesc"></p>
          <div class="flex justify-center gap-3">
            <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition">
              Làm lại bài thi
            </button>
            <button onclick="closeExamModal()" class="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript Client Engine -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function applyTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    applyTheme();

    themeToggleBtn?.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });

    // Mobile Drawer
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      drawer.classList.toggle('hidden');
    }

    // Auto scroll to hash and active sidebar highlighting
    function highlightNav(hash) {
      if (!hash) return;
      document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('bg-indigo-50/90', 'dark:bg-indigo-950/70', 'text-indigo-600', 'dark:text-indigo-400', 'border-indigo-300', 'dark:border-indigo-800',
                           'bg-rose-50/90', 'dark:bg-rose-950/70', 'text-rose-600', 'dark:text-rose-400', 'border-rose-300', 'dark:border-rose-800',
                           'bg-amber-50/90', 'dark:bg-amber-950/70', 'text-amber-600', 'dark:text-amber-400', 'border-amber-300', 'dark:border-amber-800');
        if (l.getAttribute('href') === hash) {
          const lNum = parseInt(hash.replace('#bai-', ''));
          if (lNum >= 11) {
            l.classList.add('bg-rose-50/90', 'dark:bg-rose-950/70', 'text-rose-600', 'dark:text-rose-400', 'border-rose-300', 'dark:border-rose-800');
          } else if (lNum >= 1) {
            l.classList.add('bg-indigo-50/90', 'dark:bg-indigo-950/70', 'text-indigo-600', 'dark:text-indigo-400', 'border-indigo-300', 'dark:border-indigo-800');
          } else {
            l.classList.add('bg-amber-50/90', 'dark:bg-amber-950/70', 'text-amber-600', 'dark:text-amber-400', 'border-amber-300', 'dark:border-amber-800');
          }
          l.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    }

    function handleHashScroll() {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
      highlightNav(hash);
    }
    window.addEventListener('load', handleHashScroll);
    window.addEventListener('hashchange', handleHashScroll);

    // Sidebar active link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        highlightNav(href);
      });
    });

    // IntersectionObserver for scrollspy
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          highlightNav('#' + entry.target.id);
        }
      });
    }, { rootMargin: '-80px 0px -60% 0px', threshold: [0.25] });

    document.querySelectorAll('article[id], section[id]').forEach(el => observer.observe(el));

    // Mini-Quiz Checker
    function checkLessonQuiz(btn, isCorrect, explanation) {
      const questionCard = btn.closest('.p-4');
      const allBtns = questionCard.querySelectorAll('.quiz-btn');
      const feedback = questionCard.querySelector('.quiz-feedback');

      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-slate-100', 'dark:hover:bg-slate-700/70');
      });

      const indicator = btn.querySelector('.quiz-indicator');
      indicator.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/50', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        indicator.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500\"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 block';
        feedback.innerHTML = '<strong>Chính xác!</strong> ' + explanation;
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/50', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        indicator.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-500\"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800 block';
        feedback.innerHTML = '<strong>Chưa đúng!</strong> ' + explanation;
      }
    }

    // Bookmark Toggle
    function toggleBookmark(lessonId) {
      const card = document.getElementById(lessonId);
      const icon = card.querySelector('.bookmark-btn i');
      if (icon.classList.contains('fa-regular')) {
        icon.className = 'fa-solid fa-bookmark text-amber-500';
      } else {
        icon.className = 'fa-regular fa-bookmark';
      }
    }

    // ==========================================
    // EXAM ENGINE (25 CÂU)
    // ==========================================
    const examQuestions = ${JSON.stringify(examQuestions)};
    let userAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      renderExamQuestions();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContainer');
      document.getElementById('examResultBox').classList.add('hidden');
      container.classList.remove('hidden');
      userAnswers = {};

      let html = '<div class="space-y-6">';
      examQuestions.forEach((q, idx) => {
        html += \`
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs">
            <p class="font-bold text-slate-900 dark:text-white mb-3 text-sm">
              <span class="text-indigo-600 dark:text-indigo-400">Câu \${idx + 1}:</span> \${q.q}
            </p>
            <div class="space-y-2">
              \${q.options.map((opt, optIdx) => \`
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-indigo-600 focus:ring-indigo-500">
                  <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      });
      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white font-black text-sm shadow-lg shadow-indigo-500/25 transition">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </div>\`;
      container.innerHTML = html;
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
    }

    function submitExam() {
      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      const container = document.getElementById('examContainer');
      const resultBox = document.getElementById('examResultBox');
      const scoreTitle = document.getElementById('examScoreTitle');
      const scoreDesc = document.getElementById('examScoreDesc');

      container.classList.add('hidden');
      resultBox.classList.remove('hidden');

      const percent = Math.round((score / examQuestions.length) * 100);
      let rank = 'Cần ôn tập thêm';
      if (percent >= 90) rank = 'Trạng Nguyên KTPL 10 — Xuất Sắc!';
      else if (percent >= 75) rank = 'Bảng Nhãn KTPL 10 — Rất Tốt!';
      else if (percent >= 50) rank = 'Đạt Yêu Cầu Chuẩn Kiến Thức';

      scoreTitle.innerHTML = \`<span class="text-indigo-600">\${score} / \${examQuestions.length}</span> (\${percent}%)\`;
      scoreDesc.innerHTML = \`<strong class="text-base text-slate-900 dark:text-white block mb-1">\${rank}</strong>Bạn đã hoàn thành bài khảo thí chuẩn 25 câu môn Giáo dục Kinh tế và Pháp luật lớp 10 SGK Kết nối tri thức.\`;
    }

    function resetExam() {
      document.getElementById('examContainer').classList.remove('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;
}

// Generate page
const fullHTML = generateFullPage();

// Write to courses/ktpl_10.html
const p1 = path.join(__dirname, '../courses/ktpl_10.html');
fs.writeFileSync(p1, fullHTML, 'utf8');
console.log('Saved courses/ktpl_10.html, size:', fullHTML.length);

// Also mirror to courses/gdktpl_10.html
const p2 = path.join(__dirname, '../courses/gdktpl_10.html');
fs.writeFileSync(p2, fullHTML, 'utf8');
console.log('Saved courses/gdktpl_10.html, size:', fullHTML.length);
