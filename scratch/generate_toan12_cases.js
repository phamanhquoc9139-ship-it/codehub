const fs = require('fs');

const casesData = {
  1: [
    {
      title: "Tình huống 1: Quyết định lựa chọn giữa hai gói đầu tư có cùng kì vọng nhưng khác độ lệch chuẩn",
      context: "Một nhà đầu tư cá nhân có 200 triệu đồng đang phân vân giữa hai phương án: Dự án A (trái phiếu doanh nghiệp) mang lại lợi nhuận X với E(X) = 20 triệu đồng và độ lệch chuẩn σ(X) = 2 triệu đồng; Dự án B (cổ phiếu công nghệ mới nổi) mang lại lợi nhuận Y với E(Y) = 20 triệu đồng nhưng độ lệch chuẩn σ(Y) = 15 triệu đồng (có kịch bản lãi 50 triệu nhưng cũng có kịch bản lỗ 20 triệu).",
      analysis: "Về mặt kì vọng dài hạn, cả hai dự án đều mang lại mức lợi nhuận trung bình bằng nhau: E(X) = E(Y) = 20 triệu đồng (tỉ suất 10%/năm). Tuy nhiên, độ lệch chuẩn σ(Y) = 15 triệu đồng gấp 7,5 lần σ(X) = 2 triệu đồng. Điều này phản ánh mức độ biến động, phân tán và rủi ro thua lỗ thực tế của dự án B là cực kì cao so với dự án A.",
      solution: "Bài học ra quyết định đầu tư: Không bao giờ chỉ nhìn vào kì vọng sinh lời E(X) mà phải luôn đánh giá độ lệch chuẩn σ(X). Nếu là nhà đầu tư phòng thủ bảo toàn vốn thì dự án A là lựa chọn tối ưu; chỉ khi có khẩu vị rủi ro cao và năng lực chịu lỗ thì mới cân nhắc một phần vốn vào dự án B."
    },
    {
      title: "Tình huống 2: Thiết kế trò chơi trúng thưởng 'Vòng quay may mắn' bảo đảm lợi nhuận cho ban tổ chức",
      context: "Một hội chợ thanh niên tổ chức trò chơi quay bánh xe có 10 ô bằng nhau: 1 ô trúng thưởng 100.000 đồng, 2 ô trúng thưởng 50.000 đồng, 3 ô trúng thưởng 20.000 đồng và 4 ô mất lượt (0 đồng). Ban tổ chức cần định giá vé vào chơi X (đồng) mỗi lượt để trò chơi hấp dẫn nhưng ban tổ chức vẫn có lãi trung bình ít nhất 5.000 đồng/vé.",
      analysis: "Gọi Y là số tiền thưởng người chơi nhận được sau 1 lượt quay. Bảng phân bố xác suất của Y: Y = 100.000 với p₁ = 1/10; Y = 50.000 với p₂ = 2/10; Y = 20.000 với p₃ = 3/10; Y = 0 với p₄ = 4/10. Kì vọng tiền thưởng ban tổ chức phải chi trả trung bình cho mỗi lượt chơi là: E(Y) = 100.000×0,1 + 50.000×0,2 + 20.000×0,3 + 0×0,4 = 10.000 + 10.000 + 6.000 = 26.000 đồng.",
      solution: "Để có lãi trung bình ít nhất 5.000 đồng cho mỗi vé, giá vé bán ra phải thỏa mãn: Giá vé ≥ E(Y) + Lãi mục tiêu = 26.000 + 5.000 = 31.000 đồng. Ban tổ chức có thể ấn định giá vé là 35.000 đồng/lượt để đạt lợi nhuận kì vọng 9.000 đồng/vé."
    }
  ],

  2: [
    {
      title: "Tình huống 1: Chiến lược đánh ngẫu nhiên bài thi trắc nghiệm tốt nghiệp THPT",
      context: "Một học sinh tham gia kì thi trắc nghiệm gồm 40 câu hỏi độc lập, mỗi câu có 4 phương án lựa chọn và chỉ có 1 phương án đúng. Học sinh này chỉ làm chắc chắn được 20 câu đầu (được 5,0 điểm), còn 20 câu sau không biết làm nên quyết định khoanh bừa hoàn toàn. Học sinh muốn biết xác suất để khoanh bừa được từ 5 câu đúng trở lên (để đạt tổng điểm từ 6,25 trở lên).",
      analysis: "Số câu khoanh bừa đúng X tuân theo phân bố nhị thức X ~ B(20; 0,25). Kì vọng số câu đoán đúng trung bình là E(X) = n·p = 20 × 0,25 = 5 câu (tương đương thêm 1,25 điểm). Xác suất để đoán đúng ít nhất 5 câu là: P(X ≥ 5) = 1 − Σ_{k=0}^{4} C(20, k) · (0,25)ᵏ · (0,75)²⁰⁻ᵏ ≈ 1 − 0,4148 = 0,5852 (khoảng 58,5%).",
      solution: "Bài học thực tế: Dù kì vọng trung bình là 5 câu đúng, xác suất không đạt được 5 câu (từ 0 đến 4 câu đúng) vẫn lên tới hơn 41%. Dựa vào may rủi ngẫu nhiên có độ dao động rất lớn, không thể thay thế cho việc ôn tập và nắm chắc kiến thức thực chất."
    },
    {
      title: "Tình huống 2: Kiểm định chất lượng linh kiện điện tử trên dây chuyền sản xuất tự động",
      context: "Một nhà máy sản xuất chip bán dẫn kiểm định lô hàng với tỉ lệ lỗi đã biết là 1% (p = 0,01). Mỗi kiện hàng đóng gói 200 con chip. Bộ phận kiểm soát chất lượng (QC) quy định: Một kiện hàng sẽ bị từ chối xuất khẩu nếu trong 200 con chip có từ 4 con chip lỗi trở lên.",
      analysis: "Số chip lỗi X trong một kiện hàng 200 con chip tuân theo phân bố nhị thức X ~ B(200; 0,01). Số chip lỗi trung bình trong mỗi kiện là E(X) = n·p = 200 × 0,01 = 2 con chip. Độ lệch chuẩn σ(X) = √(200 × 0,01 × 0,99) ≈ 1,407 con chip. Xác suất kiện hàng bị loại là P(X ≥ 4) = 1 − [P(X=0) + P(X=1) + P(X=2) + P(X=3)].",
      solution: "Tính toán xác suất: P(X ≤ 3) ≈ 0,858 ⇒ P(X ≥ 4) ≈ 0,142 (khoảng 14,2% số kiện hàng sẽ bị trả về). Kết quả này cảnh báo ban giám đốc cần cải tiến quy trình công nghệ để hạ tỉ lệ lỗi dưới 0,5% nếu không muốn chịu tổn thất 14,2% chi phí kiểm định lại."
    }
  ],

  3: [
    {
      title: "Tình huống 1: Lập kế hoạch sản xuất hai loại bánh Trung thu đạt lợi nhuận tối đa",
      context: "Một xưởng bánh thủ công chuẩn bị mùa Trung thu dự định sản xuất hai loại bánh: Bánh nướng (x cái) và Bánh dẻo (y cái). Để làm 1 chiếc bánh nướng cần 200g bột và 100g đậu xanh; 1 chiếc bánh dẻo cần 150g bột và 150g đậu xanh. Xưởng chỉ tích lũy được tối đa 60 kg bột và 45 kg đậu xanh. Lợi nhuận mỗi chiếc bánh nướng là 25.000 đồng, bánh dẻo là 20.000 đồng.",
      analysis: "Đổi đơn vị: 60 kg = 60.000g, 45 kg = 45.000g. Hệ ràng buộc: (1) 200x + 150y ≤ 60.000 ⇔ 4x + 3y ≤ 1200; (2) 100x + 150y ≤ 45.000 ⇔ 2x + 3y ≤ 900; (3) x ≥ 0, y ≥ 0. Hàm mục tiêu lợi nhuận: F(x, y) = 25.000x + 20.000y (đồng). Miền nghiệm là tứ giác OABC với O(0; 0), A(300; 0), B(150; 200), C(0; 300).",
      solution: "Tính giá trị tại các đỉnh: F(O) = 0; F(A) = 25.000×300 = 7.500.000 đ; F(B) = 25.000×150 + 20.000×200 = 7.750.000 đ; F(C) = 20.000×300 = 6.000.000 đ. Kết luận: Xưởng nên sản xuất 150 chiếc bánh nướng và 200 chiếc bánh dẻo để thu về lợi nhuận tối đa là 7.750.000 đồng."
    },
    {
      title: "Tình huống 2: Tối ưu hóa chi phí thuê xe tải vận chuyển hàng cứu trợ lũ lụt",
      context: "Một tổ chức thiện nguyện cần chuyển 140 tấn hàng cứu trợ và 36 tình nguyện viên đến vùng bão lũ. Đơn vị vận tải cung cấp 2 loại xe: Xe loại A chở được tối đa 10 tấn hàng và 2 người, giá thuê 4 triệu đồng/chuyến; Xe loại B chở được tối đa 7 tấn hàng và 3 người, giá thuê 3 triệu đồng/chuyến. Công ty xe chỉ có sẵn tối đa 12 xe loại A và 15 xe loại B.",
      analysis: "Gọi x, y là số xe loại A và loại B (x, y ∈ ℕ). Hệ ràng buộc: (1) 10x + 7y ≥ 140; (2) 2x + 3y ≥ 36; (3) 0 ≤ x ≤ 12; (4) 0 ≤ y ≤ 15. Hàm mục tiêu chi phí cần tối thiểu hóa: F(x, y) = 4x + 3y (triệu đồng). Các đỉnh của miền nghiệm: A(7; 10), B(12; 4), C(12; 15), D(3,5; 15)...",
      solution: "Xét các đỉnh và điểm nguyên: Tại (7; 10): 10(7) + 7(10) = 140 tấn (vừa đủ), 2(7) + 3(10) = 44 người ≥ 36, chi phí F = 4(7) + 3(10) = 58 triệu đồng. Tại (12; 4): 10(12) + 7(4) = 148 tấn, 2(12) + 3(4) = 36 người, chi phí F = 4(12) + 3(4) = 60 triệu đồng. Kết luận: Phương án thuê 7 xe loại A và 10 xe loại B là tối ưu nhất với chi phí thấp nhất 58 triệu đồng."
    }
  ],

  4: [
    {
      title: "Tình huống 1: Xác định giá vé xem bóng đá để câu lạc bộ đạt doanh thu bán vé kỷ lục",
      context: "Ban quản lí sân vận động có sức chứa 30.000 khán giả nhận thấy: Nếu đặt giá vé là 100.000 đồng thì bán được 20.000 vé. Cứ mỗi lần giảm giá vé 5.000 đồng thì lượng vé bán ra tăng thêm 2.000 vé. Ban tổ chức muốn tìm mức giá vé tối ưu để tổng doanh thu bán vé đạt mức cao nhất.",
      analysis: "Gọi x là số lần giảm giá 5.000 đồng (x ≥ 0). Mức giá vé mới: p(x) = 100.000 − 5.000x (đồng). Số lượng vé bán ra tương ứng: q(x) = 20.000 + 2.000x (khán giả, q(x) ≤ 30.000 ⇒ x ≤ 5). Hàm tổng doanh thu: R(x) = p(x) · q(x) = (100.000 − 5.000x)(20.000 + 2.000x) = −10.000.000x² + 100.000.000x + 2.000.000.000.",
      solution: "Đạo hàm: R'(x) = −20.000.000x + 100.000.000 = 0 ⇒ x = 5 (lần giảm giá). Giá vé tối ưu: p(5) = 100.000 − 5.000×5 = 75.000 đồng/vé. Số vé bán ra: q(5) = 30.000 vé (vừa kín sân vận động). Doanh thu tối đa đạt 2,25 tỉ đồng (tăng 250 triệu so với giữ giá 100.000 đồng)."
    },
    {
      title: "Tình huống 2: Thiết kế vỏ lon nước giải khát hình trụ tiết kiệm vật liệu nhôm nhất",
      context: "Một nhà máy sản xuất nước ngọt cần thiết kế vỏ lon nhôm hình trụ tròn xoay có dung tích cố định V = 330 ml (330 cm³). Kĩ sư cần tìm bán kính đáy r và chiều cao h để tổng diện tích kim loại làm vỏ lon (diện tích toàn phần) là nhỏ nhất nhằm tiết kiệm chi phí nguyên liệu.",
      analysis: "Thể tích khối trụ: V = π r² h = 330 ⇒ h = 330 / (π r²). Diện tích toàn phần (gồm thân và 2 đáy): S(r) = 2π r h + 2π r² = 2π r · [330 / (π r²)] + 2π r² = 660 / r + 2π r² (với r > 0). Đạo hàm: S'(r) = −660 / r² + 4π r. Cho S'(r) = 0 ⇒ 4π r³ = 660 ⇒ r³ = 165 / π ⇒ r = ³√(165 / π) ≈ 3,74 cm.",
      solution: "Chiều cao lon tối ưu: h = 330 / [π · (3,74)²] ≈ 7,49 cm ≈ 2r. Bài học hình học kinh điển: Vỏ lon hình trụ tiết kiệm vật liệu nhất khi chiều cao xấp xỉ bằng đường kính đáy (h = 2r). Các lon nước trên thị trường có chiều cao hơi lớn hơn một chút là để người tiêu dùng cầm vừa tay."
    }
  ],

  5: [
    {
      title: "Tình huống 1: Cảnh giác với chiêu trò lãi suất danh nghĩa và tác động bào mòn của lạm phát",
      context: "Một nhân viên văn phòng gửi tiết kiệm 500 triệu đồng vào một quỹ tài chính với lãi suất hấp dẫn 9%/năm kì hạn 3 năm. Tuy nhiên, trong 3 năm đó, giá cả tiêu dùng, học phí và nhà đất tăng nhanh với tỉ lệ lạm phát bình quân lên tới 6%/năm. Người này thắc mắc giá trị thực sự số tiền của mình tăng được bao nhiêu.",
      analysis: "Sau 3 năm, số tiền danh nghĩa nhận được là: A = 500 × (1 + 0,09)³ = 647,51 triệu đồng (tiền lãi danh nghĩa là 147,51 triệu đồng). Tuy nhiên, sức mua bị suy giảm do lạm phát. Sức mua quy đổi về thời điểm ban đầu là: P_thực = 647,51 / (1 + 0,06)³ = 543,66 triệu đồng. Lãi suất thực tế chuẩn Fisher: r_thực = (1 + 0,09)/(1 + 0,06) − 1 = 1,09 / 1,06 − 1 ≈ 2,83%/năm.",
      solution: "Bài học tài chính: Không bao giờ được nhầm lẫn giữa lợi nhuận danh nghĩa và lợi nhuận thực tế. Lợi nhuận thực tế thực chất chỉ tăng khoảng 2,83%/năm (chứ không phải 9%/năm). Để bảo vệ tài sản, nhà đầu tư cần đa dạng hóa danh mục vào các kênh có tỉ suất cao hơn lạm phát."
    },
    {
      title: "Tình huống 2: Sức mạnh lãi kép của việc bắt đầu tiết kiệm từ tuổi 20 so với tuổi 30",
      context: "Hai người bạn A và B: Bạn A bắt đầu gửi tiết kiệm từ năm 20 tuổi, mỗi năm gửi 20 triệu đồng trong 10 năm liên tục (từ 20 đến 30 tuổi, tổng nộp 200 triệu), sau đó dừng không nộp thêm tiền nữa mà để nguyên tài khoản sinh lãi kép 10%/năm đến năm 60 tuổi (nghỉ hưu). Bạn B từ 20 đến 30 tuổi không tiết kiệm, từ năm 30 tuổi mới bắt đầu gửi mỗi năm 20 triệu đồng trong suốt 30 năm liên tục (tổng nộp 600 triệu) đến 60 tuổi với cùng lãi suất 10%/năm.",
      analysis: "Với bạn A: Sau 10 năm đầu (30 tuổi), số tiền tích lũy được là A₃₀ = 20 × [(1,1)¹⁰ − 1] / 0,1 = 348,74 triệu đồng. Để số tiền này sinh lãi kép trong 30 năm tiếp theo đến 60 tuổi: A₆₀ = 348,74 × (1,1)³⁰ ≈ 6,08 tỉ đồng! Với bạn B: Gửi 20 triệu/năm trong 30 năm: B₆₀ = 20 × [(1,1)³⁰ − 1] / 0,1 ≈ 3,29 tỉ đồng.",
      solution: "Kết quả kinh ngạc: Dù bạn A chỉ bỏ ra số tiền vốn bằng 1/3 bạn B (200 triệu so với 600 triệu) nhưng nhờ bắt đầu sớm hơn 10 năm, tài sản khi về hưu của A gần gấp đôi bạn B (6,08 tỉ so với 3,29 tỉ). Đây là minh chứng hùng hồn nhất cho câu nói của Albert Einstein: 'Lãi kép là kì quan thứ 8 của thế giới'."
    }
  ],

  6: [
    {
      title: "Tình huống 1: Bẫy lãi suất thẻ tín dụng khi chỉ thanh toán số tiền tối thiểu hàng tháng",
      context: "Một bạn trẻ dùng thẻ tín dụng mua sắm máy tính xách tay trị giá 30 triệu đồng. Đến kì sao kê, do chưa có tiền, bạn chỉ thanh toán 'Khoản thanh toán tối thiểu' 5% (tương đương 1,5 triệu đồng). Bạn ngỡ rằng mình chỉ cần trả dần mỗi tháng 1,5 triệu là sẽ hết nợ nhanh chóng.",
      analysis: "Lãi suất thẻ tín dụng rất cao, thường từ 30% đến 36%/năm (khoảng 2,5%–3%/tháng). Khi chỉ trả số tiền tối thiểu 1,5 triệu đồng, gần 900.000 đồng đã bị trừ vào tiền lãi tháng đó, chỉ có hơn 600.000 đồng được trừ vào nợ gốc! Dư nợ gốc tháng sau vẫn còn gần 29,4 triệu đồng và tiếp tục bị tính lãi dồn trên toàn bộ số dư này.",
      solution: "Nếu chỉ trả mức tối thiểu, người vay sẽ mất hơn 3 năm và phải trả thêm hàng chục triệu đồng tiền lãi cho một món đồ 30 triệu. Lời khuyên: Thẻ tín dụng chỉ nên dùng như công cụ thanh toán tiện lợi trong thời gian miễn lãi; tuyệt đối tránh biến thẻ tín dụng thành khoản vay trả góp dài hạn."
    },
    {
      title: "Tình huống 2: Tính toán kế hoạch trả nợ vay mua nhà 1 tỉ đồng trong 15 năm",
      context: "Một cặp vợ chồng trẻ vay ngân hàng 1 tỉ đồng để mua căn hộ chung cư với thời hạn 15 năm (180 tháng), lãi suất cố định 8,4%/năm (tương đương i = 8,4% / 12 = 0,7%/tháng). Gia đình muốn tính số tiền cố định phải trả mỗi tháng để cân đối với tổng thu nhập 30 triệu đồng/tháng của hai vợ chồng.",
      analysis: "Áp dụng công thức trả góp đều Amortization: V = 1.000.000.000 đ, i = 0,007, n = 180. Số tiền trả đều mỗi tháng: P = V · i / [1 − (1 + i)⁻ⁿ] = 1.000.000.000 × 0,007 / [1 − (1 + 0,007)⁻¹⁸⁰] = 7.000.000 / [1 − 0,2839] = 7.000.000 / 0,7161 ≈ 9.775.000 đồng/tháng.",
      solution: "Đánh giá an toàn tài chính: Khoản trả nợ 9,78 triệu đồng chiếm khoảng 32,6% tổng thu nhập hàng tháng của gia đình (nằm trong ngưỡng an toàn dưới 35%–40%). Tổng số tiền gia đình phải trả sau 15 năm là 9,775 triệu × 180 ≈ 1,76 tỉ đồng (trong đó tiền lãi là 760 triệu đồng). Kế hoạch vay là khả thi và bền vững."
    }
  ],

  7: [
    {
      title: "Tình huống 1: Nhận tiền trúng xổ số độc đắc 10 tỉ trọn gói ngay bây giờ hay nhận 800 triệu/năm trong 20 năm?",
      context: "Một người may mắn trúng giải độc đắc được công ty xổ số đưa ra 2 phương án nhận thưởng: Phương án A: Nhận ngay một lần 10 tỉ đồng tiền mặt; Phương án B: Nhận đều đặn 800 triệu đồng vào cuối mỗi năm trong suốt 20 năm liên tục (tổng số tiền nhận danh nghĩa là 800 triệu × 20 = 16 tỉ đồng). Biết rằng lãi suất đầu tư an toàn trên thị trường là 6%/năm.",
      analysis: "Không thể so sánh 10 tỉ với 16 tỉ trực tiếp vì giá trị của tiền thay đổi theo thời gian. Ta cần tính Giá trị hiện tại (PV) của chuỗi niên kim 800 triệu/năm trong 20 năm theo lãi suất chiết khấu i = 6%: PV_B = P · [1 − (1 + i)⁻ⁿ] / i = 800 · [1 − (1 + 0,06)⁻²⁰] / 0,06 = 800 · [1 − 0,3118] / 0,06 ≈ 9.176 triệu đồng ≈ 9,18 tỉ đồng.",
      solution: "Kết quả phân tích tài chính: Dù tổng tiền danh nghĩa của phương án B là 16 tỉ, nhưng quy đổi về giá trị hiện tại nó chỉ đáng giá khoảng 9,18 tỉ đồng, thấp hơn phương án nhận ngay 10 tỉ đồng. Do đó, người trúng giải nên chọn Phương án A nhận 10 tỉ trọn gói ngay bây giờ."
    },
    {
      title: "Tình huống 2: Ứng dụng quy tắc 80/10/10 quản lí chi tiêu cho sinh viên mới ra trường",
      context: "Một bạn sinh viên mới tốt nghiệp đi làm với mức lương khởi điểm 12 triệu đồng/tháng. Sau vài tháng, bạn luôn rơi vào tình trạng 'cháy túi' vào cuối tháng mà không hiểu tiền đi đâu hết. Bạn quyết định tái cấu trúc tài chính cá nhân theo quy tắc 80/10/10 trong SGK Toán 12.",
      analysis: "Phân bổ thu nhập 12 triệu đồng: (1) 80% Thiết yếu = 9,6 triệu đồng (dành cho tiền thuê nhà 3,5 tr, tiền ăn uống 3,5 tr, xăng xe điện nước điện thoại 1,6 tr, bảo hiểm y tế 1,0 tr); (2) 10% Chi tiêu linh hoạt = 1,2 triệu đồng (cà phê bạn bè, xem phim, mua sắm đồ dùng cá nhân); (3) 10% Tích lũy bắt buộc = 1,2 triệu đồng (trích lập tự động ngay ngày nhận lương gửi vào tài khoản tiết kiệm).",
      solution: "Kết quả sau 1 năm: Bạn vừa sống thoải mái không nợ nần, vừa tích lũy được một Quỹ khẩn cấp: A = 1,2 × [(1 + 0,005)¹² − 1] / 0,005 ≈ 14,8 triệu đồng, đủ để chi trả sinh hoạt trong hơn 1 tháng nếu chẳng may chuyển việc hoặc ốm đau."
    }
  ]
};

fs.writeFileSync('scratch/toan12_cases.js', 'module.exports = ' + JSON.stringify(casesData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/toan12_cases.js with 14 practical cases!');
