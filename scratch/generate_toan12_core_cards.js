const fs = require('fs');

const coreCardsData = {
  1: [
    {
      title: "Biến ngẫu nhiên rời rạc X",
      icon: "fa-solid fa-dice",
      color: "teal",
      tag: "Định nghĩa cốt lõi",
      points: [
        "Nhận số hữu hạn các giá trị <code>x₁, x₂, ..., xₙ</code>.",
        "Mỗi giá trị xᵢ tương ứng một biến cố xác suất {X = xᵢ}.",
        "Trước khi thử nghiệm, không biết trước giá trị nhận được."
      ]
    },
    {
      title: "Điều kiện Bảng Phân bố Xác suất",
      icon: "fa-solid fa-table",
      color: "blue",
      tag: "Quy tắc chuẩn hóa",
      points: [
        "Mọi xác suất không âm: <code>pᵢ = P(X = xᵢ) ≥ 0</code>.",
        "Tổng toàn bộ xác suất luôn bằng 1: <code>Σ pᵢ = 1</code>.",
        "Biến cố đối: <code>P(X ≥ a) = 1 − P(X < a)</code>."
      ]
    },
    {
      title: "Kì vọng E(X) – Mức trung bình dài hạn",
      icon: "fa-solid fa-calculator",
      color: "emerald",
      tag: "Giá trị trung tâm",
      points: [
        "<code>E(X) = x₁p₁ + x₂p₂ + ... + xₙpₙ = Σ xᵢ pᵢ</code>.",
        "Là giá trị trung bình theo nghĩa xác suất.",
        "E(X) không nhất thiết là giá trị mà X có thể nhận."
      ]
    },
    {
      title: "Phương sai V(X) & Độ lệch chuẩn σ(X)",
      icon: "fa-solid fa-chart-line",
      color: "amber",
      tag: "Đo lường rủi ro",
      points: [
        "Phương sai: <code>V(X) = Σ xᵢ² pᵢ − [E(X)]²</code> (V(X) ≥ 0).",
        "Độ lệch chuẩn: <code>σ(X) = √V(X)</code> (cùng đơn vị đo với X).",
        "σ(X) càng lớn thì độ phân tán/rủi ro biến động càng cao."
      ]
    }
  ],

  2: [
    {
      title: "Phép thử lặp Bernoulli",
      icon: "fa-solid fa-repeat",
      color: "teal",
      tag: "Mô hình xác suất",
      points: [
        "Mỗi lần thử chỉ có 2 kết quả: Thành công (p) hoặc Thất bại (1−p).",
        "Lặp lại n lần độc lập hoàn toàn, xác suất p không đổi.",
        "Kết quả lần trước không ảnh hưởng tới lần thử tiếp theo."
      ]
    },
    {
      title: "Công thức xác suất Bernoulli",
      icon: "fa-solid fa-square-root-variable",
      color: "blue",
      tag: "Công thức then chốt",
      points: [
        "Xác suất có đúng k lần thành công trong n lần thử:",
        "<code>P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ</code> (0 ≤ k ≤ n).",
        "Ít nhất 1 lần thành công: <code>P(X ≥ 1) = 1 − (1 − p)ⁿ</code>."
      ]
    },
    {
      title: "Phân bố nhị thức B(n, p)",
      icon: "fa-solid fa-cubes-stacked",
      color: "indigo",
      tag: "Kí hiệu & Bản chất",
      points: [
        "Kí hiệu: <code>X ~ B(n, p)</code> với n là số phép thử, p là xác suất.",
        "Tập giá trị của X là {0, 1, 2, ..., n}.",
        "Đồ thị xác suất có dạng chuông rời rạc với đỉnh quanh np."
      ]
    },
    {
      title: "Bộ ba Số đặc trưng Nhị thức",
      icon: "fa-solid fa-bolt",
      color: "amber",
      tag: "Tính nhanh",
      points: [
        "Kì vọng số lần thành công: <code>E(X) = n · p</code>.",
        "Phương sai nhị thức: <code>V(X) = n · p · (1 − p)</code>.",
        "Độ lệch chuẩn nhị thức: <code>σ(X) = √[n · p · (1 − p)]</code>."
      ]
    }
  ],

  3: [
    {
      title: "Mô hình Quy hoạch Tuyến tính (LP)",
      icon: "fa-solid fa-sitemap",
      color: "blue",
      tag: "Mô hình toán học",
      points: [
        "Hai biến quyết định x, y kèm điều kiện không âm: <code>x ≥ 0, y ≥ 0</code>.",
        "Hệ ràng buộc nguồn lực: Các bất phương trình bậc nhất hai ẩn.",
        "Hàm mục tiêu tuyến tính: <code>F(x, y) = Ax + By</code> (cần Max hoặc Min)."
      ]
    },
    {
      title: "Định lí Điểm cực biên Đa giác",
      icon: "fa-solid fa-draw-polygon",
      color: "indigo",
      tag: "Định lí nền tảng",
      points: [
        "Miền nghiệm của hệ ràng buộc là một đa giác lồi bị chặn.",
        "Giá trị tối ưu F(x, y) luôn đạt tại <strong>ít nhất một đỉnh</strong> đa giác.",
        "Chỉ cần tính giá trị hàm F tại các đỉnh để so sánh tìm Max/Min."
      ]
    },
    {
      title: "Trường hợp Vô số Nghiệm Tối ưu",
      icon: "fa-solid fa-lines-leaning",
      color: "teal",
      tag: "Ngoại lệ đặc biệt",
      points: [
        "Xảy ra khi đường mức F(x, y) = c song song với một cạnh biên.",
        "Hai đỉnh đầu mút của cạnh cho cùng một giá trị tối ưu.",
        "Mọi điểm thuộc đoạn thẳng nối 2 đỉnh đều là phương án tối ưu."
      ]
    },
    {
      title: "Quy trình 7 bước Giải Tối ưu Thực tế",
      icon: "fa-solid fa-list-check",
      color: "amber",
      tag: "Kĩ năng thực hành",
      points: [
        "Chọn biến → Lập hàm F → Lập hệ ràng buộc → Vẽ miền nghiệm.",
        "Tìm tọa độ các đỉnh → Tính giá trị F(đỉnh) → Diễn giải nghiệm.",
        "Kiểm tra tính thực tế của nghiệm nguyên nếu bài toán yêu cầu."
      ]
    }
  ],

  4: [
    {
      title: "Mô hình Tối ưu hóa một biến f(x)",
      icon: "fa-solid fa-chart-area",
      color: "blue",
      tag: "Mô hình giải tích",
      points: [
        "Chọn biến quyết định x kèm tập xác định D từ thực tế.",
        "Biểu diễn đại lượng cần tối ưu thành hàm số f(x).",
        "Rút gọn các biến phụ thuộc về duy nhất một biến x."
      ]
    },
    {
      title: "Điều kiện Cực trị bằng Đạo hàm",
      icon: "fa-solid fa-square-root-variable",
      color: "emerald",
      tag: "Công cụ Fermat",
      points: [
        "Tính đạo hàm f'(x) và giải phương trình <code>f'(x) = 0</code>.",
        "Lập bảng biến thiên trên miền xác định D.",
        "So sánh giá trị tại điểm tới hạn và hai đầu mút biên."
      ]
    },
    {
      title: "Hệ thống Hàm Kinh tế học then chốt",
      icon: "fa-solid fa-money-bill-trend-up",
      color: "amber",
      tag: "Kinh tế vi mô",
      points: [
        "Doanh thu: <code>R(x) = x · p(x)</code> (với p(x) là hàm cầu).",
        "Lợi nhuận: <code>Π(x) = R(x) − C(x)</code> (Doanh thu trừ Chi phí).",
        "Chi phí biên C'(x), Doanh thu biên R'(x), Lợi nhuận biên Π'(x)."
      ]
    },
    {
      title: "Nguyên lí Tối đa hóa Lợi nhuận",
      icon: "fa-solid fa-trophy",
      color: "rose",
      tag: "Đỉnh cao lợi nhuận",
      points: [
        "Lợi nhuận cực đại khi: <code>Π'(x*) = 0 ⇔ R'(x*) = C'(x*)</code>.",
        "Doanh thu biên bằng Chi phí biên (sản xuất thêm không còn lãi ròng).",
        "Nếu x* là phân số, so sánh hai số nguyên lân cận ⌊x*⌋ và ⌈x*⌉."
      ]
    }
  ],

  5: [
    {
      title: "Lạm phát & Sức mua Quy đổi",
      icon: "fa-solid fa-arrow-trend-up",
      color: "amber",
      tag: "Kinh tế học tiền tệ",
      points: [
        "Lạm phát làm tăng mặt bằng giá, suy giảm sức mua tiền tệ.",
        "Sức mua của vốn P sau t năm lạm phát g: <code>P_t = P · (1 − g)ᵗ</code>.",
        "Bảo đảm kế hoạch tài chính luôn tính đến độ hao mòn tiền mặt."
      ]
    },
    {
      title: "Công thức Lãi suất thực Fisher",
      icon: "fa-solid fa-scale-balanced",
      color: "teal",
      tag: "Tỉ suất thực tế",
      points: [
        "Công thức chính xác: <code>r_thực = (1 + r) / (1 + g) − 1</code>.",
        "Công thức gần đúng (khi g nhỏ): <code>r_thực ≈ r − g</code>.",
        "Cho biết mức tăng trưởng thực sự của sức mua sau khi trừ lạm phát."
      ]
    },
    {
      title: "Mô hình Lãi đơn (Simple Interest)",
      icon: "fa-solid fa-coins",
      color: "blue",
      tag: "Tính trên vốn gốc",
      points: [
        "Tiền lãi sau t năm: <code>I = P · r · t</code>.",
        "Tổng tiền nhận/trả: <code>A = P · (1 + r · t)</code>.",
        "Lãi không gộp vào gốc; áp dụng khoản vay mượn ngắn hạn."
      ]
    },
    {
      title: "Mô hình Lãi kép (Compound Interest)",
      icon: "fa-solid fa-seedling",
      color: "emerald",
      tag: "Kì quan thứ 8",
      points: [
        "Ghép lãi n kì/năm trong t năm: <code>A = P · (1 + r/n)ⁿᵗ</code>.",
        "Giải số kì gửi: <code>N = ln(A/P) / ln(1 + r/n)</code> (làm tròn lên).",
        "Tần suất ghép lãi n càng dày thì số tiền A tích lũy càng lớn."
      ]
    }
  ],

  6: [
    {
      title: "Cơ chế Thẻ Tín dụng (Credit Card)",
      icon: "fa-solid fa-credit-card",
      color: "blue",
      tag: "Chi trước trả sau",
      points: [
        "Thời gian miễn lãi từ 45 đến 55 ngày tính từ đầu chu kì.",
        "Nếu trả trễ hoặc không đủ 100%: Bị tính lãi trên toàn bộ dư nợ.",
        "Rút tiền mặt bị tính phí cao (3–5%) và tính lãi ngay lập tức."
      ]
    },
    {
      title: "Tính Lãi theo Dư nợ Thực tế từng ngày",
      icon: "fa-solid fa-calendar-days",
      color: "amber",
      tag: "Quy tắc ngân hàng",
      points: [
        "Chia chu kì thành các đoạn có dư nợ không đổi.",
        "<code>Tiền lãi = (Dư nợ) × (Lãi suất năm / 365) × (Số ngày)</code>.",
        "Cộng tiền lãi các đoạn để ra tổng lãi phát sinh trong tháng."
      ]
    },
    {
      title: "Công thức Vay Trả góp đều (Amortization)",
      icon: "fa-solid fa-hand-holding-dollar",
      color: "emerald",
      tag: "Khoản trả cố định",
      points: [
        "Số tiền cố định P nộp cuối mỗi kì cho khoản vay V lãi suất i:",
        "<code>P = V · i / [1 − (1 + i)⁻ⁿ]</code>.",
        "P = (Tiền lãi giảm dần) + (Tiền trả gốc tăng dần)."
      ]
    },
    {
      title: "Hồ sơ Tín dụng & Trách nhiệm Vay",
      icon: "fa-solid fa-shield-halved",
      color: "rose",
      tag: "Uy tín tài chính",
      points: [
        "Hệ thống điểm tín dụng CIC đánh giá lịch sử thanh toán nợ.",
        "Nợ xấu (Nhóm 2–5) bị phạt 150% lãi và cấm vay vốn 3–5 năm.",
        "Tổng tiền trả nợ hàng tháng không nên vượt quá 35%–40% thu nhập."
      ]
    }
  ],

  7: [
    {
      title: "Niên kim & Giá trị Tương lai (FV)",
      icon: "fa-solid fa-piggy-bank",
      color: "emerald",
      tag: "Tích lũy định kì",
      points: [
        "Gửi P vào cuối mỗi kì trong n kì với lãi suất mỗi kì i:",
        "<code>A = P · [(1 + i)ⁿ − 1] / i</code>.",
        "Nếu gửi vào đầu mỗi kì, nhân thêm thừa số <code>(1 + i)</code>."
      ]
    },
    {
      title: "Giá trị Hiện tại của Niên kim (PV)",
      icon: "fa-solid fa-money-bill-transfer",
      color: "blue",
      tag: "Chiết khấu dòng tiền",
      points: [
        "Quy đổi chuỗi tiền đều P nhận trong n kì về thời điểm hiện tại:",
        "<code>PV = P · [1 − (1 + i)⁻ⁿ] / i</code>.",
        "Dùng so sánh nhận tiền trọn gói ngay bây giờ hay trả dần."
      ]
    },
    {
      title: "Hệ thức Truy hồi Tích lũy Vốn",
      icon: "fa-solid fa-arrow-progress",
      color: "indigo",
      tag: "Mô hình đệ quy",
      points: [
        "Vốn ban đầu A₀, mỗi kì lãi i và nộp thêm P cuối kì:",
        "<code>Aₙ = Aₙ₋₁ · (1 + i) + P</code> (với n ≥ 1).",
        "Nghiệm tổng quát: <code>Aₙ = A₀(1+i)ⁿ + P[(1+i)ⁿ − 1]/i</code>."
      ]
    },
    {
      title: "Quy tắc Phân bổ Ngân sách 80/10/10",
      icon: "fa-solid fa-chart-pie",
      color: "amber",
      tag: "Kế hoạch cá nhân",
      points: [
        "<strong>80% Thu nhập:</strong> Nhu cầu thiết yếu (nhà ở, ăn uống, nợ).",
        "<strong>10% Thu nhập:</strong> Chi tiêu linh hoạt, giải trí, phát sinh.",
        "<strong>10% Thu nhập:</strong> Tiết kiệm & Đầu tư tích lũy bắt buộc."
      ]
    }
  ]
};

fs.writeFileSync('scratch/toan12_core_cards.js', 'module.exports = ' + JSON.stringify(coreCardsData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/toan12_core_cards.js with 28 core cards!');
