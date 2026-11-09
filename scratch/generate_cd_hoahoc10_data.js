// scratch/generate_cd_hoahoc10_data.js
// Generates cd_hoahoc10_data.js containing complete data for 11 lessons across 3 Chuyên đề

const fs = require('fs');

const lessons = [
  // ==========================================
  // CHUYÊN ĐỀ 1: CƠ SỞ HÓA HỌC (Bài 1 - Bài 4)
  // ==========================================
  {
    id: 1,
    cd: 1,
    cdTitle: "Chuyên đề 1. Cơ sở hóa học",
    name: "Liên kết hóa học",
    subtitle: "Công thức electron, công thức Lewis, mô hình VSEPR và thuyết lai hóa orbital",
    pillars: [
      {
        title: "Công thức electron & Quy trình viết Lewis",
        desc: "Công thức electron mô tả cặp electron dùng chung và cặp chưa liên kết. Công thức Lewis thay mỗi cặp electron dùng chung bằng một gạch nối.",
        icon: "fa-atom",
        points: [
          "Quy trình 4 bước: (1) Tính tổng electron hóa trị (điều chỉnh điện tích với ion); (2) Dựng khung phân tử liên kết đơn, chọn nguyên tử có hóa trị cao làm tâm (H không làm tâm); (3) Phân bố electron còn lại để nguyên tử ngoài đạt octet (H đạt duet); (4) Chuyển cặp electron tự do ở vỏ ngoài thành liên kết đôi/ba nếu nguyên tử trung tâm chưa đủ octet.",
          "Ngoại lệ quy tắc octet: Các phân tử có số electron lẻ (như $NO, NO_2$), phân tử thiếu octet ($BF_3, BeCl_2$), hoặc nguyên tử chu kì 3 trở đi có thể mở rộng vỏ hóa trị vượt octet ($PCl_5, SF_6$).",
          "Kiểm tra điện tích hình thức: $FC = V - N - \frac{B}{2}$ giúp chọn cấu trúc Lewis bền vững nhất khi có nhiều đồng phân liên kết."
        ]
      },
      {
        title: "Mô hình VSEPR & Hình học phân tử",
        desc: "Mô hình sức đẩy các cặp electron vỏ hóa trị (VSEPR) dự đoán cấu trúc không gian dựa trên nguyên lí cực tiểu hóa lực đẩy giữa các đám mây electron.",
        icon: "fa-shapes",
        points: [
          "Kí hiệu tổng quát: $AX_nE_m$ với $A$ là nguyên tử trung tâm, $X$ là phối tử liên kết, $E$ là cặp electron tự do trên nguyên tử trung tâm.",
          "Các dạng hình học tiêu biểu: $AX_2$ đường thẳng ($180^\\circ$, $BeH_2, CO_2$); $AX_3$ tam giác phẳng ($120^\\circ$, $BF_3$); $AX_4$ tứ diện ($109{,}5^\\circ$, $CH_4$).",
          "Ảnh hưởng của cặp electron tự do: Cặp $E$ chiếm thể tích lớn và đẩy mạnh hơn cặp liên kết, làm giảm góc liên kết thực tế: $AX_2E$ góc (dạng chữ V, $SO_2 < 120^\\circ$); $AX_3E$ tháp tam giác ($NH_3 \\approx 107^\\circ$); $AX_2E_2$ dạng góc ($H_2O \\approx 104{,}5^\\circ$)."
        ]
      },
      {
        title: "Thuyết lai hóa orbital nguyên tử",
        desc: "Sự tổ hợp các orbital nguyên tử có năng lượng xấp xỉ nhau tạo thành các orbital lai hóa đồng nhất về hình dạng, kích thước và định hướng không gian.",
        icon: "fa-circle-nodes",
        points: [
          "Lai hóa $sp$: $1s + 1p \\to 2$ orbital $sp$ định hướng thẳng góc $180^\\circ$ (ví dụ: $BeF_2$, carbon ở liên kết ba $-\\text{C}\\equiv\\text{C}-$).",
          "Lai hóa $sp^2$: $1s + 2p \\to 3$ orbital $sp^2$ định hướng tam giác phẳng $120^\\circ$ (ví dụ: $BF_3$, carbon ở liên kết đôi $C=C$).",
          "Lai hóa $sp^3$: $1s + 3p \\to 4$ orbital $sp^3$ định hướng tứ diện đều $109{,}5^\\circ$ (ví dụ: $CH_4$, carbon ở liên kết đơn, $N$ trong $NH_3$, $O$ trong $H_2O$).",
          "Liên kết $\\sigma$ hình thành do sự xen phủ trục (bền vững), liên kết $\\pi$ hình thành do sự xen phủ bên giữa các orbital $p$ chưa lai hóa."
        ]
      },
      {
        title: "Mối quan hệ Lewis – VSEPR – Độ phân cực",
        desc: "Từ công thức Lewis xác định số miền electron $\\to$ dạng VSEPR $\\to$ hình học phân tử $\\to$ tổng hợp vectơ mômen lưỡng cực để kết luận tính phân cực.",
        icon: "fa-magnet",
        points: [
          "Phân tử đối xứng cao ($CO_2, BF_3, CH_4, CCl_4$) có các vectơ lưỡng cực triệt tiêu lẫn nhau $\\sum \\vec{\\mu} = \\vec{0} \\implies$ phân tử không phân cực dù các liên kết thành phần có phân cực.",
          "Phân tử bất đối xứng có cặp electron tự do ($H_2O, NH_3, SO_2$) có mômen lưỡng cực tổng cộng khác không $\\mu \\ne 0 \\implies$ phân tử phân cực mạnh, tan tốt trong dung môi phân cực như nước.",
          "So sánh góc liên kết: $CH_4 (109{,}5^\\circ) > NH_3 (107^\\circ) > H_2O (104{,}5^\\circ)$ do số cặp electron tự do tăng dần ($0 \\to 1 \\to 2$ cặp $E$) tạo lực đẩy ngày càng mạnh."
        ]
      }
    ],
    cases: [
      {
        title: "Dự đoán hình học và tính phân cực của phân tử Sulfur dioxide (SO₂)",
        scenario: "Học sinh cần viết công thức Lewis của $SO_2$, xác định trạng thái lai hóa của nguyên tử trung tâm $S$, dạng hình học VSEPR và giải thích vì sao $SO_2$ là chất khí phân cực.",
        solution: "1. Tổng electron hóa trị: $S(6) + 2 \\times O(6) = 18$ e.\n2. Khung $O-S-O$: Dùng 4 e, còn 14 e. Bổ sung octet cho 2 nguyên tử $O$ (cần 12 e), còn 2 e đặt lên nguyên tử $S$ làm 1 cặp tự do. Để $S$ đạt octet, chuyển 1 cặp e tự do của $O$ thành liên kết đôi $S=O$. Cấu trúc Lewis: $O=\\ddot{S}-\\ddot{O}: \\leftrightarrow :\\ddot{O}-\\ddot{S}=O$.\n3. Xung quanh $S$ có 2 liên kết $\\sigma$ và 1 cặp electron tự do $E \\implies$ dạng $AX_2E$, lai hóa $sp^2$.\n4. Dạng hình học: Dạng góc (chữ V), góc $\\widehat{OSO} < 120^\\circ$ (thực tế khoảng $119{,}5^\\circ$) do cặp $E$ đẩy cụp góc liên kết.\n5. Tính phân cực: Do hình học chữ V bất đối xứng, hai vectơ lưỡng cực $S \\to O$ không triệt tiêu $\\implies SO_2$ phân cực.",
        tip: "Đừng nhầm $SO_2$ thẳng hàng như $CO_2$. $CO_2$ có dạng $AX_2$ (không có cặp e tự do trên C) nên góc $180^\\circ$ không phân cực; còn $SO_2$ có 1 cặp electron tự do $E$ nên bị bẻ cong thành dạng góc và phân cực."
      },
      {
        title: "Giải thích sự biến đổi góc liên kết trong dãy CH₄ – NH₃ – H₂O",
        scenario: "Cả ba phân tử $CH_4, NH_3, H_2O$ đều có nguyên tử trung tâm lai hóa $sp^3$ với 4 miền electron, nhưng góc liên kết lại giảm lần lượt: $109{,}5^\\circ \\to 107^\\circ \\to 104{,}5^\\circ$. Hãy phân tích bản chất cơ học lượng tử.",
        solution: "1. Trong $CH_4$: Có 4 cặp liên kết $\\sigma$ ($AX_4$), lực đẩy giữa các cặp liên kết là tương đương nhau, tạo cấu trúc tứ diện hoàn hảo góc $109{,}5^\\circ$.\n2. Trong $NH_3$: Có 3 cặp liên kết và 1 cặp e tự do ($AX_3E$). Cặp e tự do chỉ chịu lực hút của 1 hạt nhân $N$ nên đám mây electron phân tán rộng hơn, tạo lực đẩy mạnh hơn: Lực đẩy (cặp tự do – cặp liên kết) > (cặp liên kết – cặp liên kết) $\\implies$ đẩy ép 3 liên kết $N-H$ lại gần nhau, góc giảm xuống $107^\\circ$.\n3. Trong $H_2O$: Có 2 cặp liên kết và 2 cặp e tự do ($AX_2E_2$). Hai cặp e tự do đẩy nhau cực mạnh và cùng đẩy hai liên kết $O-H$, khiến góc $\\widehat{HOH}$ bị ép hẹp lại còn $104{,}5^\\circ$.",
        tip: "Quy tắc thuộc lòng: Cứ thêm 1 cặp electron tự do trên nguyên tử trung tâm lai hóa $sp^3$, góc liên kết bị ép thu hẹp khoảng $2^\\circ - 2{,}5^\\circ$."
      }
    ],
    quizzes: [
      {
        question: "Theo mô hình VSEPR, phân tử methane ($CH_4$), ammonia ($NH_3$) và nước ($H_2O$) có dạng hình học phân tử lần lượt là:",
        options: [
          "Tứ diện, tháp tam giác, dạng góc (chữ V)",
          "Tứ diện, tam giác phẳng, đường thẳng",
          "Tam giác phẳng, tháp tam giác, dạng góc",
          "Tứ diện, tứ diện, tứ diện"
        ],
        correct: 0,
        explanation: "Dù cả ba đều có 4 miền electron phân bố tứ diện (lai hóa $sp^3$), hình học phân tử chỉ tính vị trí các hạt nhân nguyên tử: $CH_4$ ($AX_4$) là tứ diện; $NH_3$ ($AX_3E$) là tháp tam giác; $H_2O$ ($AX_2E_2$) là dạng góc."
      },
      {
        question: "Phân tử nào sau đây có liên kết phân cực nhưng toàn bộ phân tử lại không phân cực?",
        options: [
          "$CO_2$",
          "$H_2O$",
          "$NH_3$",
          "$SO_2$"
        ],
        correct: 0,
        explanation: "Trong $CO_2$, liên kết $C=O$ phân cực về phía $O$, nhưng do phân tử có cấu trúc đường thẳng đối xứng hoàn hảo ($AX_2$, góc $180^\\circ$), hai vectơ mômen lưỡng cực cùng độ lớn, ngược hướng triệt tiêu hoàn toàn $\\implies \\mu = 0$."
      },
      {
        question: "Trạng thái lai hóa của nguyên tử carbon trong phân tử ethyne ($C_2H_2$) và ethene ($C_2H_4$) lần lượt là:",
        options: [
          "$sp$ và $sp^2$",
          "$sp^2$ và $sp^3$",
          "$sp$ và $sp^3$",
          "$sp^3$ và $sp$"
        ],
        correct: 0,
        explanation: "Trong ethyne ($H-C \\equiv C-H$), mỗi carbon có 2 liên kết $\\sigma$ nên lai hóa $sp$ (góc $180^\\circ$). Trong ethene ($H_2C=CH_2$), mỗi carbon có 3 liên kết $\\sigma$ nên lai hóa $sp^2$ (góc $120^\\circ$)."
      }
    ]
  },

  {
    id: 2,
    cd: 1,
    cdTitle: "Chuyên đề 1. Cơ sở hóa học",
    name: "Phản ứng hạt nhân",
    subtitle: "Định luật bảo toàn số khối & điện tích, phóng xạ tự nhiên, phân hạch, nhiệt hạch và ứng dụng đồng vị",
    pillars: [
      {
        title: "Định luật bảo toàn trong phản ứng hạt nhân",
        desc: "Phản ứng hạt nhân là sự biến đổi hạt nhân nguyên tử của nguyên tố này thành nguyên tố khác, kèm theo sự thay đổi khối lượng và giải phóng năng lượng khổng lồ.",
        icon: "fa-radiation",
        points: [
          "Kí hiệu hạt nhân: ${}^{A}_{Z}X$ với $A$ là số khối (tổng proton + neutron), $Z$ là điện tích hạt nhân (số proton).",
          "Bảo toàn số khối: $\\sum A_{\\text{trước}} = \\sum A_{\\text{sau}}$ và Bảo toàn điện tích: $\\sum Z_{\\text{trước}} = \\sum Z_{\\text{sau}}$.",
          "Các loại hạt cơ bản: Hạt $\\alpha$ (${}^{4}_{2}\\text{He}$); Hạt $\\beta^-$ (electron ${}^{0}_{-1}e$); Hạt $\\beta^+$ (positron ${}^{0}_{+1}e$); Neutron (${}^{1}_{0}n$); Proton (${}^{1}_{1}p$ hoặc ${}^{1}_{1}H$); Tia $\\gamma$ (photon năng lượng cao ${}^{0}_{0}\\gamma$)."
        ]
      },
      {
        title: "Phóng xạ tự nhiên & Chu kì bán rã",
        desc: "Sự tự phân rã của hạt nhân không bền vững phát ra các tia phóng xạ có năng lượng và khả năng đâm xuyên khác nhau.",
        icon: "fa-hourglass-half",
        points: [
          "Tia $\\alpha$ (${}^{4}_{2}\\text{He}$): Khả năng ion hóa mạnh nhất, vận tốc khoảng $20\\,000\\text{ km/s}$, đâm xuyên kém nhất (bị tờ giấy mỏng hoặc vài cm không khí chặn lại).",
          "Tia $\\beta$ ($\\beta^-, \\beta^+$): Ion hóa trung bình, vận tốc xấp xỉ vận tốc ánh sáng, đâm xuyên trung bình (cần tấm nhôm dày vài mm để chặn).",
          "Tia $\\gamma$: Bức xạ điện từ bước sóng cực ngắn, không mang điện, ion hóa yếu nhất nhưng đâm xuyên cực mạnh (phải dùng tấm chì dày hàng chục cm hoặc tường bê tông đặc để cản).",
          "Định luật phóng xạ & Chu kì bán rã: $N(t) = N_0 \\cdot 2^{-t/T} = N_0 \\cdot e^{-\\lambda t}$ với $\\lambda = \\frac{\\ln 2}{T} \\approx \\frac{0{,}693}{T}$. Sau $k$ chu kì bán rã, lượng chất phóng xạ còn lại $\\frac{1}{2^k}$ so với ban đầu."
        ]
      },
      {
        title: "Phân hạch & Nhiệt hạch",
        desc: "Hai cơ chế giải phóng năng lượng hạt nhân nhân tạo vĩ đại tuân theo hệ thức Einstein $E = \\Delta m \\cdot c^2$.",
        icon: "fa-sun",
        points: [
          "Phản ứng phân hạch: Hạt nhân nặng (như ${}^{235}_{92}U, {}^{239}_{94}Pu$) hấp thụ một neutron chậm rồi vỡ thành 2 hạt nhân trung bình, giải phóng $2-3$ neutron mới và lượng nhiệt khổng lồ. Nếu số neutron mới tiếp tục kích hoạt phân hạch sẽ tạo phản ứng dây chuyền tự duy trì (lò phản ứng hạt nhân hoặc bom nguyên tử).",
          "Phản ứng nhiệt hạch: Sự kết hợp của hai hạt nhân nhẹ (như ${}^{2}_{1}H + {}^{3}_{1}H \\to {}^{4}_{2}He + {}^{1}_{0}n$) thành hạt nhân nặng hơn ở nhiệt độ cực cao (hàng chục triệu độ K). Đây là nguồn năng lượng của Mặt Trời và bom H.",
          "Nhiệt hạch sạch hơn phân hạch vì tạo ít chất thải phóng xạ lâu năm và nguồn nhiên liệu hydrogen vô tận trong đại dương."
        ]
      },
      {
        title: "Ứng dụng thực tiễn của đồng vị phóng xạ",
        desc: "Khai thác bức xạ và tốc độ phân rã hạt nhân trong các lĩnh vực y tế, nông nghiệp, khảo cổ học và năng lượng.",
        icon: "fa-stethoscope",
        points: [
          "Y học hiện đại: Đồng vị ${}^{131}_{53}I$ phát tia $\\beta^-$ và $\\gamma$ dùng chẩn đoán và điều trị ung thư tuyến giáp; ${}^{60}_{27}Co$ là nguồn phát tia $\\gamma$ xạ trị tiêu diệt tế bào ung thư; ${}^{99m}_{43}Tc$ dùng ghi hình chẩn đoán chức năng cơ quan.",
          "Nông nghiệp & Bảo quản: Chiếu xạ gamma diệt vi sinh vật, ức chế nảy mầm, kéo dài thời gian bảo quản nông sản và tạo đột biến phóng xạ có lợi trong chọn giống cây trồng.",
          "Khảo cổ & Địa chất: Đo tỉ lệ ${}^{14}_{6}C / {}^{12}_{6}C$ ($T = 5730$ năm) để định tuổi di cốt, cổ vật sinh học có tuổi dưới 50.000 năm; Dùng chuỗi phân rã ${}^{238}_{92}U \\to {}^{206}_{82}Pb$ để định tuổi mẫu đá, khoáng vật hàng tỉ năm.",
          "Năng lượng: Nhà máy điện hạt nhân dùng thanh nhiên liệu ${}^{235}U$ làm bốc hơi nước quay turbine phát điện an toàn, không phát thải khí nhà kính."
        ]
      }
    ],
    cases: [
      {
        title: "Cân bằng phương trình phân hạch hạt nhân Uranium-235",
        scenario: "Trong lò phản ứng hạt nhân, một hạt nhân ${}^{235}_{92}U$ hấp thụ 1 neutron chậm ${}^{1}_{0}n$ rồi phân hạch tạo thành ${}^{95}_{38}Sr$, hạt nhân ${}^{A}_{Z}X$ và giải phóng 3 neutron ${}^{1}_{0}n$. Hãy xác định nguyên tố $X$ và viết phương trình phản ứng đầy đủ.",
        solution: "1. Viết phương trình tổng quát: ${}^{235}_{92}U + {}^{1}_{0}n \\to {}^{95}_{38}Sr + {}^{A}_{Z}X + 3\\,{}^{1}_{0}n$.\n2. Áp dụng bảo toàn số khối $A$:\n$235 + 1 = 95 + A + 3 \\times 1 \\implies 236 = 98 + A \\implies A = 138$.\n3. Áp dụng bảo toàn điện tích $Z$:\n$92 + 0 = 38 + Z + 3 \\times 0 \\implies 92 = 38 + Z \\implies Z = 54$.\n4. Tra bảng tuần hoàn, nguyên tố có $Z = 54$ là Xenon (Xe).\nPhương trình hoàn chỉnh: ${}^{235}_{92}U + {}^{1}_{0}n \\to {}^{95}_{38}Sr + {}^{138}_{54}Xe + 3\\,{}^{1}_{0}n$.",
        tip: "Luôn nhớ nhân hệ số của hạt phóng ra (ở đây có $3\\,{}^{1}_{0}n$ nên số khối cộng thêm $3 \\times 1 = 3$, điện tích cộng $3 \\times 0 = 0$)."
      },
      {
        title: "Định tuổi khảo cổ học bằng đồng vị phóng xạ Carbon-14",
        scenario: "Một mẩu gỗ cổ khai quật trong lăng mộ cổ có hoạt độ phóng xạ của ${}^{14}C$ bằng $25\\%$ hoạt độ phóng xạ của mẫu gỗ tươi cùng loại mới chặt. Biết chu kì bán rã của ${}^{14}C$ là 5730 năm. Hãy tính tuổi của mẩu gỗ cổ.",
        solution: "1. Tỉ lệ hoạt độ phóng xạ: $\\frac{N(t)}{N_0} = 25\\% = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$.\n2. Theo định luật phóng xạ: $\\frac{N(t)}{N_0} = \\left(\\frac{1}{2}\\right)^{t/T} \\implies \\frac{t}{T} = 2$.\n3. Tuổi của mẩu gỗ cổ: $t = 2 \\times T = 2 \\times 5730 = 11\\,460$ năm.",
        tip: "Nếu tỉ lệ không phải là lũy thừa đẹp của 2 (ví dụ $35\\%$), sử dụng công thức $t = -\\frac{T}{\\ln 2} \\ln\\left(\\frac{N(t)}{N_0}\\right)$ để tính chính xác."
      }
    ],
    quizzes: [
      {
        question: "Phát biểu nào sau đây về khả năng đâm xuyên và ion hóa của các tia phóng xạ là chính xác?",
        options: [
          "Tia $\\alpha$ ion hóa mạnh nhất và đâm xuyên yếu nhất; tia $\\gamma$ đâm xuyên mạnh nhất và ion hóa yếu nhất",
          "Tia $\\gamma$ ion hóa mạnh nhất và đâm xuyên mạnh nhất",
          "Tia $\\alpha$ đâm xuyên mạnh nhất và ion hóa mạnh nhất",
          "Tia $\\beta$ không ion hóa và đâm xuyên qua được tấm chì dày 20 cm"
        ],
        correct: 0,
        explanation: "Hạt $\\alpha$ có khối lượng lớn và điện tích $+2e$ nên tương tác ion hóa cực mạnh làm tiêu hao năng lượng nhanh chóng $\\implies$ đâm xuyên rất yếu. Photon $\\gamma$ không mang điện nên ít va chạm ion hóa $\\implies$ đâm xuyên cực sâu qua vật chất."
      },
      {
        question: "Đồng vị ${}^{131}_{53}I$ và ${}^{60}_{27}Co$ thường được ứng dụng chủ yếu trong lĩnh vực nào?",
        options: [
          "Y học (xạ trị và chẩn đoán bệnh ung thư)",
          "Nhiên liệu cho nhà máy điện hạt nhân",
          "Xác định niên đại của các tầng địa chất cổ xưa",
          "Sản xuất bom phân hạch nhiệt hạch"
        ],
        correct: 0,
        explanation: "$I-131$ tập trung tại tuyến giáp giúp chẩn đoán và tiêu diệt tế bào ung thư tuyến giáp; $Co-60$ phát tia $\\gamma$ năng lượng cao dùng trong máy xạ trị tiêu diệt khối u."
      },
      {
        question: "Hạt nhân ${}^{238}_{92}U$ phóng xạ hạt $\\alpha$ thì biến đổi thành hạt nhân con nào sau đây?",
        options: [
          "${}^{234}_{90}Th$",
          "${}^{234}_{91}Pa$",
          "${}^{238}_{93}Np$",
          "${}^{236}_{90}Th$"
        ],
        correct: 0,
        explanation: "Hạt $\\alpha$ là ${}^{4}_{2}He$. Áp dụng bảo toàn: Số khối con $A = 238 - 4 = 234$; Điện tích con $Z = 92 - 2 = 90$ (nguyên tố Thorium - Th) $\\implies {}^{234}_{90}Th$."
      }
    ]
  },

  {
    id: 3,
    cd: 1,
    cdTitle: "Chuyên đề 1. Cơ sở hóa học",
    name: "Năng lượng hoạt hóa của phản ứng hóa học",
    subtitle: "Thuyết va chạm hoạt động, phương trình Arrhenius và cơ chế xúc tác đồng thể / dị thể",
    pillars: [
      {
        title: "Năng lượng hoạt hóa & Va chạm hiệu quả",
        desc: "Phản ứng hóa học chỉ xảy ra khi các phân tử chất phản ứng va chạm với nhau và va chạm đó phải là va chạm hiệu quả.",
        icon: "fa-bolt",
        points: [
          "Khái niệm: Năng lượng hoạt hóa ($E_a$) là năng lượng tối thiểu mà các tiểu phân chất phản ứng cần phải có để vượt qua hàng rào năng lượng, phá vỡ liên kết cũ và hình thành liên kết mới.",
          "Điều kiện va chạm hiệu quả: (1) Động năng của các hạt va chạm phải lớn hơn hoặc bằng năng lượng hoạt hóa ($E_{\\text{đ}} \\ge E_a$); (2) Định hướng không gian của các tiểu phân khi va chạm phải thuận lợi.",
          "Quy luật: Ở cùng nhiệt độ, phản ứng có $E_a$ càng lớn thì số phân tử có năng lượng đủ lớn càng ít $\\implies$ tốc độ phản ứng càng chậm; phản ứng có $E_a$ càng nhỏ thì diễn ra càng nhanh."
        ]
      },
      {
        title: "Phương trình Arrhenius & Sự phụ thuộc nhiệt độ",
        desc: "Mô tả định lượng mối quan hệ giữa hằng số tốc độ phản ứng $k$ với nhiệt độ tuyệt đối $T$ và năng lượng hoạt hóa $E_a$.",
        icon: "fa-chart-line",
        points: [
          "Dạng hàm số mũ: $k = A \\cdot e^{-E_a / (RT)}$ trong đó $A$ là thừa số trước hàm mũ (tần số va chạm định hướng); $e \\approx 2{,}7183$; $R = 8{,}314\\,\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$; $T$ là nhiệt độ tuyệt đối (K); $E_a$ là năng lượng hoạt hóa tính bằng J/mol.",
          "Phương trình so sánh ở hai nhiệt độ $T_1$ và $T_2$: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$.",
          "Khi nhiệt độ tăng ($T_2 > T_1$), hằng số tốc độ $k_2 > k_1$, phản ứng xảy ra nhanh hơn do phần trăm va chạm hiệu quả tăng theo hàm số mũ."
        ]
      },
      {
        title: "Bản chất và vai trò của chất xúc tác",
        desc: "Chất xúc tác làm tăng tốc độ phản ứng bằng cách mở ra con đường phản ứng mới có năng lượng hoạt hóa thấp hơn.",
        icon: "fa-flask-vial",
        points: [
          "Đặc điểm: Làm tăng tốc độ phản ứng nhưng không bị tiêu hao hay biến đổi về chất và lượng sau khi phản ứng kết thúc.",
          "Cơ chế hạ $E_a$: Tạo ra các hợp chất trung gian hoạt động, hạ thấp đỉnh hàng rào thế năng trạng thái chuyển tiếp ($E_a' < E_a$).",
          "Tính chất bất biến: Chất xúc tác **không** làm thay đổi biến thiên enthalpy của phản ứng ($\\Delta_r H$ giữ nguyên), **không** làm chuyển dịch vị trí cân bằng hóa học, chỉ giúp hệ nhanh đạt tới trạng thái cân bằng hơn.",
          "Phân loại: Xúc tác đồng thể (cùng pha với chất phản ứng, ví dụ $NO_x$ khí xúc tác oxi hóa $SO_2$ thành $SO_3$); Xúc tác dị thể (khác pha, ví dụ bột $Pt$ rắn xúc tác phản ứng khí, $H_2O$ lỏng xúc tác bột $Al$ và $I_2$ rắn)."
        ]
      },
      {
        title: "Cách đọc giản đồ năng lượng phản ứng",
        desc: "Phân tích đồ thị năng lượng theo tiến trình phản ứng để xác định $E_a$, nhiệt phản ứng $\\Delta_r H$ và hiệu quả của chất xúc tác.",
        icon: "fa-bezier-curve",
        points: [
          "Trục hoành biểu thị tiến trình phản ứng (Reaction coordinate), trục tung biểu thị thế năng của hệ (kJ/mol).",
          "Năng lượng hoạt hóa phản ứng thuận: $E_{a(\\text{thuận})} = E_{\\text{trạng thái chuyển tiếp}} - E_{\\text{chất đầu}}$.",
          "Năng lượng hoạt hóa phản ứng nghịch: $E_{a(\\text{nghịch})} = E_{\\text{trạng thái chuyển tiếp}} - E_{\\text{sản phẩm}}$.",
          "Biến thiên enthalpy phản ứng: $\\Delta_r H = E_{\\text{sản phẩm}} - E_{\\text{chất đầu}} = E_{a(\\text{thuận})} - E_{a(\\text{nghịch})}$. Nếu $\\Delta_r H < 0$ là phản ứng tỏa nhiệt (đường sản phẩm nằm dưới đường chất đầu); nếu $\\Delta_r H > 0$ là phản ứng thu nhiệt."
        ]
      }
    ],
    cases: [
      {
        title: "Tính năng lượng hoạt hóa từ dữ liệu hằng số tốc độ ở hai nhiệt độ",
        scenario: "Phản ứng phân hủy $N_2O_5$ có hằng số tốc độ $k_1 = 3{,}46 \\times 10^{-5}\\,\\text{s}^{-1}$ ở $25^\\circ\\text{C}$ ($298\\text{ K}$) và $k_2 = 4{,}87 \\times 10^{-3}\\,\\text{s}^{-1}$ ở $65^\\circ\\text{C}$ ($338\\text{ K}$). Cho $R = 8{,}314\\,\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$. Hãy tính năng lượng hoạt hóa $E_a$ của phản ứng.",
        solution: "1. Đổi nhiệt độ: $T_1 = 298\\text{ K}, T_2 = 338\\text{ K}$.\n2. Tính tỉ số hằng số tốc độ: $\\frac{k_2}{k_1} = \\frac{4{,}87 \\times 10^{-3}}{3{,}46 \\times 10^{-5}} \\approx 140{,}75 \\implies \\ln\\left(\\frac{k_2}{k_1}\\right) = \\ln(140{,}75) \\approx 4{,}947$.\n3. Tính hiệu nghịch đảo nhiệt độ:\n$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{298} - \\frac{1}{338} = \\frac{338 - 298}{298 \\times 338} = \\frac{40}{100\\,724} \\approx 3{,}971 \\times 10^{-4}\\,\\text{K}^{-1}$.\n4. Áp dụng phương trình Arrhenius:\n$E_a = \\frac{R \\cdot \\ln(k_2/k_1)}{\\frac{1}{T_1} - \\frac{1}{T_2}} = \\frac{8{,}314 \\times 4{,}947}{3{,}971 \\times 10^{-4}} \\approx 103\\,573\\,\\text{J/mol} \\approx 103{,}6\\,\\text{kJ/mol}$.",
        tip: "Luôn luôn đổi $E_a$ từ $\\text{J/mol}$ sang $\\text{kJ/mol}$ (chia cho 1000) khi trình bày kết quả cuối cùng."
      },
      {
        title: "Giải thích thí nghiệm hỗn hợp bột nhôm và iodine tác dụng khi nhỏ nước",
        scenario: "Trộn đều bột nhôm ($Al$) và tinh thể iodine ($I_2$) khô trong chén sứ, ở nhiệt độ phòng phản ứng hầu như không xảy ra. Nhỏ vài giọt nước cất vào, khói màu tím bốc lên dữ dội kèm ngọn lửa lóe sáng. Giải thích vai trò của nước.",
        solution: "1. Phương trình phản ứng: $2Al(s) + 3I_2(s) \\xrightarrow{H_2O} 2AlI_3(s)$, phản ứng tỏa nhiệt rất mạnh làm thăng hoa $I_2$ dư tạo khói màu tím.\n2. Khi ở trạng thái rắn khô, diện tích tiếp xúc giữa các hạt chất rắn nhỏ và năng lượng hoạt hóa $E_a$ của phản ứng dị thể rắn - rắn rất cao, tốc độ phản ứng ở nhiệt độ phòng vô cùng nhỏ.\n3. Khi nhỏ giọt nước, nước đóng vai trò là **chất xúc tác dị thể**: Hòa tan một lượng nhỏ $I_2$ tạo môi trường phân li, đồng thời phản ứng bề mặt phá vỡ màng oxide trên nhôm, tạo con đường phản ứng trung gian có $E_a$ thấp hơn rất nhiều $\\implies$ phản ứng bùng phát mãnh liệt.",
        tip: "Nước là chất xúc tác trong phản ứng này chứ không phải là chất tham gia chính tạo sản phẩm $AlI_3$."
      }
    ],
    quizzes: [
      {
        question: "Phát biểu nào sau đây về vai trò của chất xúc tác trong phản ứng hóa học là đúng?",
        options: [
          "Chất xúc tác làm giảm năng lượng hoạt hóa $E_a$, làm tăng tốc độ phản ứng và không làm thay đổi biến thiên enthalpy $\\Delta_r H$",
          "Chất xúc tác làm giảm năng lượng hoạt hóa và làm phản ứng tỏa nhiều nhiệt hơn",
          "Chất xúc tác làm chuyển dịch cân bằng sang chiều thuận",
          "Chất xúc tác làm tăng năng lượng hoạt hóa của phản ứng thuận và giảm của phản ứng nghịch"
        ],
        correct: 0,
        explanation: "Chất xúc tác mở ra cơ chế mới có $E_a$ thấp hơn, giúp phản ứng nhanh đạt cân bằng. Vì năng lượng trạng thái đầu và cuối không đổi nên $\\Delta_r H$ hoàn toàn không đổi."
      },
      {
        question: "Khi nhiệt độ của phản ứng tăng từ $300\\text{ K}$ lên $310\\text{ K}$, tốc độ phản ứng tăng lên đáng kể chủ yếu là do:",
        options: [
          "Tỉ lệ phần trăm va chạm hiệu quả giữa các phân tử tăng lên theo hàm số mũ",
          "Năng lượng hoạt hóa của phản ứng giảm mạnh",
          "Chất xúc tác được sinh ra trong phản ứng",
          "Nồng độ các chất phản ứng tự động tăng gấp đôi"
        ],
        correct: 0,
        explanation: "Theo phương trình Arrhenius, $E_a$ là hằng số với phản ứng xác định. Khi tăng nhiệt độ, số phân tử có động năng vượt ngưỡng $E_a$ tăng vọt $\\implies$ tỉ lệ va chạm hiệu quả tăng theo hàm mũ."
      },
      {
        question: "Trong công nghiệp sản xuất sulfuric acid ($H_2SO_4$), chất xúc tác được dùng để chuyển hóa $SO_2$ thành $SO_3$ ở nhiệt độ cao là:",
        options: [
          "$V_2O_5$ (Vanadium pentoxide)",
          "Bột sắt ($Fe$)",
          "Bạch kim ($Pt$) trong môi trường nước",
          "Mangan đioxit ($MnO_2$)"
        ],
        correct: 0,
        explanation: "Xúc tác công nghiệp kinh tế và bền nhiệt nhất cho phản ứng $2SO_2 + O_2 \\rightleftharpoons 2SO_3$ là $V_2O_5$ (xúc tác dị thể ở $450^\\circ\\text{C}$)."
      }
    ]
  },

  {
    id: 4,
    cd: 1,
    cdTitle: "Chuyên đề 1. Cơ sở hóa học",
    name: "Entropy và biến thiên năng lượng tự do Gibbs",
    subtitle: "Thước đo độ hỗn loạn của hệ, năng lượng tự do Gibbs và tiêu chuẩn tự diễn biến của quá trình hóa học",
    pillars: [
      {
        title: "Entropy – Thước đo mức độ hỗn loạn",
        desc: "Entropy ($S$) là đại lượng nhiệt động học đo mức độ phân tán năng lượng và sự hỗn loạn của các hạt cấu thành nên hệ.",
        icon: "fa-shuffle",
        points: [
          "Quy luật chuyển pha: Cùng một chất, mức độ chuyển động tự do tăng dần theo thứ tự: $S_{\\text{rắn}} < S_{\\text{lỏng}} < S_{\\text{khí}}$. Các quá trình nóng chảy, bay hơi, hòa tan chất rắn vào dung dịch thường làm entropy tăng ($\\Delta S > 0$). Quá trình ngưng tụ, đông đặc làm entropy giảm ($\\Delta S < 0$).",
          "Nguyên lí III nhiệt động học: Tinh thể hoàn hảo của một chất nguyên chất ở nhiệt độ không tuyệt đối ($0\\text{ K}$) có entropy bằng không ($S_0 = 0$).",
          "Entropy chuẩn: Kí hiệu $S^\\circ_{298}$, tra cứu ở $298\\text{ K}, 1\\text{ bar}$, đơn vị $\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.",
          "Biến thiên entropy của phản ứng: $\\Delta_r S^\\circ = \\sum \\nu S^\\circ(\\text{sản phẩm}) - \\sum \\nu S^\\circ(\\text{chất đầu})$. Phản ứng làm tăng số mol khí thường có $\\Delta_r S^\\circ > 0$."
        ]
      },
      {
        title: "Năng lượng tự do Gibbs & Tiêu chuẩn tự diễn biến",
        desc: "Hàm trạng thái Gibbs ($G = H - TS$) kết hợp đồng thời cả yếu tố enthalpy và entropy để quyết định chiều hướng tự phát của phản ứng.",
        icon: "fa-compass",
        points: [
          "Biểu thức Gibbs ở nhiệt độ và áp suất không đổi: $\\Delta_r G^\\circ = \\Delta_r H^\\circ - T \\cdot \\Delta_r S^\\circ$.",
          "Tiêu chuẩn tự diễn biến ở điều kiện đẳng nhiệt, đẳng áp:\n- $\\Delta_r G^\\circ < 0$: Phản ứng tự diễn biến theo chiều thuận ở điều kiện khảo sát.\n- $\\Delta_r G^\\circ = 0$: Hệ đạt trạng thái cân bằng hóa học.\n- $\\Delta_r G^\\circ > 0$: Phản ứng không tự diễn biến theo chiều thuận (chiều nghịch tự diễn biến).",
          "Lưu ý quy đổi đơn vị bắt buộc: $\\Delta_r H^\\circ$ thường tính bằng kJ, còn $\\Delta_r S^\\circ$ tính bằng $\\text{J/K}$. Khi tính phải đổi $\\Delta_r H^\\circ$ ra J hoặc đổi $T \\Delta_r S^\\circ$ ra kJ."
        ]
      },
      {
        title: "Phân tích 4 trường hợp dấu của ΔH và ΔS",
        desc: "Sự cạnh tranh giữa xu hướng cực tiểu hóa năng lượng ($\\Delta H < 0$) và cực đại hóa độ hỗn loạn ($\\Delta S > 0$).",
        icon: "fa-scale-balanced",
        points: [
          "Trường hợp 1: $\\Delta H < 0$ (tỏa nhiệt) và $\\Delta S > 0$ (tăng hỗn loạn) $\\implies \\Delta G = \\Delta H - T\\Delta S < 0$ ở mọi nhiệt độ $\\implies$ Phản ứng luôn tự diễn biến ở mọi nhiệt độ.",
          "Trường hợp 2: $\\Delta H > 0$ (thu nhiệt) và $\\Delta S < 0$ (giảm hỗn loạn) $\\implies \\Delta G > 0$ ở mọi nhiệt độ $\\implies$ Phản ứng không bao giờ tự diễn biến ở bất kì nhiệt độ nào.",
          "Trường hợp 3: $\\Delta H < 0$ và $\\Delta S < 0 \\implies$ Tự diễn biến ở nhiệt độ thấp ($T < \\frac{\\Delta H}{\\Delta S}$), khi số hạng $\\Delta H$ áp đảo.",
          "Trường hợp 4: $\\Delta H > 0$ và $\\Delta S > 0 \\implies$ Tự diễn biến ở nhiệt độ cao ($T > \\frac{\\Delta H}{\\Delta S}$), khi số hạng $-T\\Delta S$ âm lớn áp đảo."
        ]
      },
      {
        title: "Ví dụ kinh điển: Nhiệt phân CaCO₃ & Phản ứng NO",
        desc: "Minh họa thực nghiệm từ sách giáo khoa về sự phụ thuộc nhiệt độ của tính tự diễn biến.",
        icon: "fa-fire-burner",
        points: [
          "Phản ứng phân hủy đá vôi: $CaCO_3(s) \\to CaO(s) + CO_2(g)$ có $\\Delta_r H^\\circ_{298} = +178{,}3\\,\\text{kJ} > 0$ (thu nhiệt) và $\\Delta_r S^\\circ_{298} = +160{,}5\\,\\text{J/K} > 0$ (sinh khí $CO_2$).\nỞ $298\\text{ K}$: $\\Delta_r G^\\circ = 178{,}3 - 298 \\times 0{,}1605 = +130{,}5\\,\\text{kJ} > 0 \\implies$ không tự phân hủy ở nhiệt độ phòng. Nhiệt độ tối thiểu để phản ứng tự xảy ra: $T > \\frac{178{,}3}{0{,}1605} \\approx 1111\\text{ K} \\approx 838^\\circ\\text{C}$ (giải thích vì sao nung vôi cần nhiệt độ cao).",
          "Phản ứng $2NO(g) + O_2(g) \\to 2NO_2(g)$ có $\\Delta_r G^\\circ_{298} < 0 \\implies$ tự diễn biến ở nhiệt độ phòng tạo khí màu nâu đỏ."
        ]
      }
    ],
    cases: [
      {
        title: "Tính biến thiên thế đẳng áp Gibbs của phản ứng nung vôi ở 298 K",
        scenario: "Cho phản ứng nhiệt phân: $CaCO_3(s) \\to CaO(s) + CO_2(g)$. Cho biết dữ liệu nhiệt động ở điều kiện chuẩn ($298\\text{ K}$):\n- $\\Delta_f H^\\circ_{298}\\,(\\text{kJ/mol})$: $CaCO_3 = -1207{,}0; CaO = -635{,}1; CO_2 = -393{,}5$.\n- $S^\\circ_{298}\\,(\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1})$: $CaCO_3 = 92{,}9; CaO = 39{,}8; CO_2 = 213{,}7$.\nHãy tính $\\Delta_r H^\\circ_{298}, \\Delta_r S^\\circ_{298}, \\Delta_r G^\\circ_{298}$ và kết luận phản ứng có tự xảy ra ở $25^\\circ\\text{C}$ không.",
        solution: "1. Tính $\\Delta_r H^\\circ_{298}$:\n$\\Delta_r H^\\circ_{298} = [\\Delta_f H^\\circ(CaO) + \\Delta_f H^\\circ(CO_2)] - \\Delta_f H^\\circ(CaCO_3)$\n$= [(-635{,}1) + (-393{,}5)] - (-1207{,}0) = -1028{,}6 + 1207{,}0 = +178{,}4\\,\\text{kJ}$.\n2. Tính $\\Delta_r S^\\circ_{298}$:\n$\\Delta_r S^\\circ_{298} = [S^\\circ(CaO) + S^\\circ(CO_2)] - S^\\circ(CaCO_3)$\n$= (39{,}8 + 213{,}7) - 92{,}9 = 253{,}5 - 92{,}9 = +160{,}6\\,\\text{J/K} = +0{,}1606\\,\\text{kJ/K}$.\n3. Tính $\\Delta_r G^\\circ_{298}$:\n$\\Delta_r G^\\circ_{298} = \\Delta_r H^\\circ_{298} - T \\cdot \\Delta_r S^\\circ_{298}$\n$= 178{,}4 - 298 \\times 0{,}1606 = 178{,}4 - 47{,}86 = +130{,}54\\,\\text{kJ}$.\n4. Kết luận: Vì $\\Delta_r G^\\circ_{298} = +130{,}54\\,\\text{kJ} > 0$, đá vôi hoàn toàn không tự phân hủy ở $25^\\circ\\text{C}$.",
        tip: "Rất nhiều học sinh quên đổi $\\text{J/K} \\to \\text{kJ/K}$ mà lấy trực tiếp $178{,}4 - 298 \\times 160{,}6$ dẫn tới kết quả sai lệch hoàn toàn."
      },
      {
        title: "Xác định nhiệt độ bắt đầu tự phát của phản ứng thu nhiệt sinh khí",
        scenario: "Một phản ứng có $\\Delta_r H^\circ = +85{,}0\\,\\text{kJ}$ và $\\Delta_r S^\circ = +170\\,\\text{J/K}$. Giả sử $\\Delta H^\circ$ và $\\Delta S^\circ$ ít phụ thuộc vào nhiệt độ, hãy tìm nhiệt độ tối thiểu (theo độ Celsius) để phản ứng bắt đầu tự diễn biến.",
        solution: "1. Đổi đơn vị: $\\Delta_r H^\circ = 85\\,000\\,\\text{J}, \\Delta_r S^\circ = 170\\,\\text{J/K}$.\n2. Để phản ứng tự diễn biến: $\\Delta_r G^\circ = \\Delta_r H^\circ - T\\Delta_r S^\circ < 0 \\implies T > \\frac{\\Delta_r H^\circ}{\\Delta_r S^\circ}$.\n3. Tính nhiệt độ Kelvin: $T > \\frac{85\\,000}{170} = 500\\text{ K}$.\n4. Đổi sang độ Celsius: $t = 500 - 273 = 227^\\circ\\text{C}$.\nVậy phản ứng tự diễn biến khi nhiệt độ lớn hơn $227^\\circ\\text{C}$.",
        tip: "Nhiệt độ giới hạn $T_{\\text{cân bằng}} = \\frac{\\Delta H}{\\Delta S}$ là lúc $\\Delta G = 0$."
      }
    ],
    quizzes: [
      {
        question: "Phát biểu nào sau đây về dấu của $\\Delta G$ và tính tự diễn biến của phản ứng là chính xác?",
        options: [
          "Ở nhiệt độ và áp suất không đổi, phản ứng tự diễn biến khi $\\Delta G < 0$",
          "Phản ứng tỏa nhiệt ($\\Delta H < 0$) thì luôn luôn tự diễn biến ở mọi nhiệt độ",
          "Phản ứng tăng độ hỗn loạn ($\\Delta S > 0$) thì luôn luôn tự diễn biến ở mọi nhiệt độ",
          "Hệ đạt trạng thái cân bằng khi $\\Delta G > 0$"
        ],
        correct: 0,
        explanation: "Tiêu chuẩn tự phát duy nhất ở đẳng nhiệt, đẳng áp là $\\Delta G = \\Delta H - T\\Delta S < 0$. Chỉ khi đồng thời $\\Delta H < 0$ và $\\Delta S > 0$ thì mới tự diễn biến ở mọi nhiệt độ."
      },
      {
        question: "Quá trình nào sau đây có biến thiên entropy $\\Delta S > 0$?",
        options: [
          "Nước đá tan chảy thành nước lỏng ở $0^\\circ\\text{C}$",
          "Hơi nước ngưng tụ thành giọt sương",
          "Khí $SO_3$ hòa tan vào $H_2SO_4$ tạo oleum",
          "Khí $NH_3$ kết hợp với khí $HCl$ tạo tinh thể $NH_4Cl$ rắn"
        ],
        correct: 0,
        explanation: "Khi nước đá ($S_{\\text{rắn}}$) chuyển thành nước lỏng ($S_{\\text{lỏng}}$), các phân tử nước chuyển động tự do hơn $\\implies$ độ hỗn loạn tăng $\\implies \\Delta S > 0$. Các quá trình còn lại đều làm giảm số mol khí hoặc chuyển từ khí sang rắn $\\implies \\Delta S < 0$."
      },
      {
        question: "Một phản ứng có $\\Delta H < 0$ và $\\Delta S < 0$. Phản ứng này có xu hướng tự diễn biến ở điều kiện nhiệt độ nào?",
        options: [
          "Ở nhiệt độ thấp ($T < \\frac{\\Delta H}{\\Delta S}$)",
          "Ở nhiệt độ cao ($T > \\frac{\\Delta H}{\\Delta S}$)",
          "Ở mọi nhiệt độ",
          "Không bao giờ tự diễn biến"
        ],
        correct: 0,
        explanation: "Vì $\\Delta S < 0$ nên $-T\\Delta S > 0$ (chống lại sự tự phát). Để $\\Delta G = \\Delta H - T\\Delta S < 0$, số hạng tỏa nhiệt $\\Delta H$ phải thắng số hạng $T\\Delta S$, điều này chỉ xảy ra khi $T$ đủ thấp."
      }
    ]
  },

  // ==============================================================
  // CHUYÊN ĐỀ 2: HÓA HỌC TRONG PHÒNG CHỐNG CHÁY, NỔ (Bài 5 - Bài 8)
  // ==============================================================
  {
    id: 5,
    cd: 2,
    cdTitle: "Chuyên đề 2. Hóa học trong việc phòng chống cháy, nổ",
    name: "Sơ lược về phản ứng cháy, nổ",
    subtitle: "Tam giác cháy, cháy hoàn toàn vs không hoàn toàn, phân loại nổ vật lí, hóa học, hạt nhân và cơ chế nổ bụi",
    pillars: [
      {
        title: "Bản chất phản ứng cháy & Tam giác cháy",
        desc: "Cháy là phản ứng oxi hóa – khử giữa chất cháy và chất oxi hóa, diễn ra kèm theo sự tỏa nhiệt và phát sáng mãnh liệt.",
        icon: "fa-fire",
        points: [
          "Dấu hiệu đặc trưng bắt buộc của sự cháy: Có phản ứng hóa học (oxi hóa – khử), tỏa nhiệt lượng lớn và phát ra ánh sáng.",
          "Tam giác cháy (Fire Triangle) - 3 yếu tố phải đồng thời hội tụ: (1) Chất cháy (nhiên liệu rắn, lỏng hoặc khí); (2) Chất oxi hóa (thường là $O_2$ trong không khí, hoặc muối nitrate, chlorate); (3) Nguồn nhiệt (tia lửa, chập điện, ma sát, bề mặt nóng...).",
          "Điều kiện nồng độ và tiếp xúc: Nồng độ $O_2$ trong không khí thường phải lớn hơn khoảng $14\\%$ thể tích để duy trì sự cháy; nguồn nhiệt phải có nhiệt độ đủ cao và thời gian tiếp xúc đủ lâu để đưa hỗn hợp đạt tới nhiệt độ bắt cháy."
        ]
      },
      {
        title: "Sản phẩm cháy & Độc tính nguy hiểm",
        desc: "Sự khác biệt sống còn giữa cháy hoàn toàn (đủ oxygen) và cháy không hoàn toàn (thiếu oxygen).",
        icon: "fa-skull-crossbones",
        points: [
          "Cháy hoàn toàn (dư $O_2$): Tạo các oxide bền có số oxi hóa cao nhất ($CO_2, H_2O, SO_2$), ngọn lửa màu xanh sáng, ít khói độc.",
          "Cháy không hoàn toàn (thiếu $O_2$): Tạo khí $CO$, muội than (carbon chưa cháy), bồ hóng, hợp chất hữu cơ bay hơi độc hại (VOCs) và vẫn còn khả năng bắt cháy tiếp.",
          "Cơ chế gây chết người của khí $CO$: Khí không màu, không mùi, gắn chặt vào phân tử hemoglobin trong hồng cầu với ái lực mạnh gấp 200 - 250 lần so với $O_2$, làm tê liệt khả năng vận chuyển oxygen nuôi cơ thể $\\implies$ ngộ độc, hôn mê và tử vong trong vài phút.",
          "Cảnh báo: Tuyệt đối không đốt than củi, than tổ ong trong phòng kín để sưởi ấm."
        ]
      },
      {
        title: "Bản chất phản ứng nổ & Phân loại",
        desc: "Nổ là quá trình giải phóng năng lượng cực nhanh làm thể tích khí giãn nở đột ngột, tạo sóng xung kích áp suất cực lớn.",
        icon: "fa-bomb",
        points: [
          "Đặc trưng của phản ứng nổ: Tốc độ phản ứng cực nhanh (mili-giây), giải phóng nhiệt lượng lớn, khí sinh ra giãn nở tức thời tạo sóng áp suất âm thanh và tàn phá cơ học dữ dội.",
          "Phân loại các dạng nổ:\n- Nổ vật lí: Do sự nén áp suất vật lí quá giới hạn bền của bình chứa, không có phản ứng hóa học (nổ lốp xe quá căng, nổ bình khí nén nứt rạn, nổ nồi hơi nước).\n- Nổ hóa học: Do phản ứng hóa học giải phóng năng lượng cực nhanh (nổ bình gas rò rỉ, nổ hỗn hợp $H_2 + O_2$, nổ thuốc nổ TNT, thuốc súng).\n- Nổ hạt nhân: Do năng lượng phản ứng phân hạch hoặc nhiệt hạch giải phóng."
        ]
      },
      {
        title: "Cơ chế hiểm họa của nổ bụi (Dust Explosion)",
        desc: "Sự cháy cực nhanh của các hạt bụi mịn hữu cơ hoặc kim loại lơ lửng trong không khí ở không gian hạn chế.",
        icon: "fa-smog",
        points: [
          "Ngũ giác nổ bụi (Dust Explosion Pentagon): (1) Bụi cháy được; (2) Chất oxi hóa ($O_2$); (3) Nguồn nhiệt kích hoạt; (4) Độ phân tán lơ lửng tạo đám mây bụi; (5) Không gian hạn chế/khép kín.",
          "Các chất có nguy cơ nổ bụi cao: Bột ngũ cốc, bột mì, bột đường, mùn cưa gỗ, bột than đá, bột nhựa, bụi kim loại ($Al, Mg, Zn$), bột sulfur.",
          "Bản chất: Kích thước hạt càng nhỏ, diện tích bề mặt tiếp xúc riêng càng lớn gấp hàng triệu lần $\\implies$ tốc độ cháy diễn ra đồng thời gần như tức thời $\\implies$ sóng xung kích phá hủy nhà máy, hầm mỏ."
        ]
      }
    ],
    cases: [
      {
        title: "Phân biệt hiện tượng nổ bình gas và nổ lốp xe ô tô",
        scenario: "Trong cuộc sống, người dân hay gặp tai nạn nổ lốp xe ô tô tải khi bơm quá căng vào mùa hè và tai nạn rò rỉ khí gas gây nổ sập nhà. Hãy phân tích bản chất nhiệt động học của hai hiện tượng này.",
        solution: "1. Vụ nổ lốp xe ô tô: Là **nổ vật lí**. Khi bơm quá căng cộng với ma sát mặt đường làm nhiệt độ không khí trong lốp tăng, áp suất khí vượt quá giới hạn chịu lực của cao su làm nổ tung. Không có phản ứng hóa học xảy ra, không có chất mới sinh ra.\n2. Vụ nổ khí gas rò rỉ: Là **nổ hóa học**. Khi khí gas ($C_3H_8, C_4H_{10}$) rò rỉ tích tụ trong phòng kín gặp tia lửa điện (bật công tắc đèn, quẹt diêm), phản ứng cháy dây chuyền tỏa nhiệt khủng khiếp trong vài phần nghìn giây: $C_3H_8 + 5O_2 \\to 3CO_2 + 4H_2O$. Sự tăng nhiệt độ lên hàng nghìn độ làm thể tích khí $CO_2, H_2O$ giãn nở hàng ngàn lần tạo sóng áp suất xé toạc tường nhà.",
        tip: "Điểm cốt lõi: Nổ vật lí không có liên kết hóa học bị bẻ gãy hay tạo mới; nổ hóa học bắt buộc phải có phản ứng hóa học tỏa nhiệt nhanh."
      },
      {
        title: "Hiểm họa nổ bụi tại xưởng chế biến bột mì và biện pháp phòng ngừa",
        scenario: "Tại sao một đống bột mì để trên bàn thì khó bắt cháy, nhưng một bao bột mì bị văng tung tóe tạo thành đám mây bụi trong phòng xưởng kín lại có thể nổ tung khi có tia lửa nhỏ?",
        solution: "1. Đống bột mì đặc có diện tích tiếp xúc với $O_2$ không khí rất nhỏ, chỉ ở lớp bề mặt, nên khó cháy và không thể nổ.\n2. Khi bột mì bay lơ lửng thành đám mây bụi mịn, diện tích tiếp xúc bề mặt tăng lên hàng triệu lần. Mỗi hạt tinh bột cực nhỏ được bao bọc bởi oxygen.\n3. Khi có một tia lửa mồi, một hạt bắt cháy sẽ tỏa nhiệt đốt cháy tức khắc các hạt xung quanh. Trong không gian nhà xưởng khép kín, áp suất tăng đột ngột tạo vụ nổ bụi kinh hoàng.\n4. Biện pháp phòng ngừa: Lắp đặt hệ thống hút bụi chân không công nghiệp, thông gió liên tục, dùng thiết bị điện phòng nổ không phát tia lửa, và duy trì độ ẩm thích hợp.",
        tip: "Nhớ 5 yếu tố của ngũ giác nổ bụi: Nhiên liệu bụi + Oxygen + Nguồn nhiệt + Đám mây lơ lửng + Không gian kín."
      }
    ],
    quizzes: [
      {
        question: "Ba thành phần cốt lõi của tam giác cháy (Fire Triangle) bao gồm:",
        options: [
          "Chất cháy, chất oxi hóa và nguồn nhiệt",
          "Chất cháy, khí carbon dioxide và nguồn nhiệt",
          "Nhiên liệu, chất khử và ánh sáng mặt trời",
          "Chất cháy, chất xúc tác và nước"
        ],
        correct: 0,
        explanation: "Tam giác cháy gồm 3 yếu tố không thể thiếu: Chất cháy (nhiên liệu), Chất oxi hóa (thường là oxygen) và Nguồn nhiệt (đưa hệ đạt nhiệt độ bắt cháy)."
      },
      {
        question: "Khí độc sinh ra chủ yếu trong các đám cháy không hoàn toàn (thiếu oxygen) gây ngạt thở và tử vong nhanh chóng cho nạn nhân là:",
        options: [
          "$CO$ (Carbon monoxide)",
          "$CO_2$ (Carbon dioxide)",
          "$N_2$ (Nitrogen)",
          "$CH_4$ (Methane)"
        ],
        correct: 0,
        explanation: "Khí $CO$ kết hợp với hemoglobin của máu tạo carboxyhemoglobin bền vững, chặn đứng khả năng vận chuyển $O_2$ tới não và các cơ quan, gây tử vong do ngạt mô."
      },
      {
        question: "Trường hợp nào sau đây là ví dụ điển hình của hiện tượng nổ vật lí?",
        options: [
          "Nổ bình khí nén do bị nung nóng làm áp suất tăng vượt quá độ bền cơ học của vỏ bình",
          "Nổ hỗn hợp khí gas và không khí khi bật bật lửa",
          "Nổ thuốc súng đen trong pháo hoa",
          "Nổ hỗn hợp khí methane trong hầm lò than"
        ],
        correct: 0,
        explanation: "Bình khí nén nổ chỉ do biến đổi áp suất cơ học thuần túy của chất khí nén, không có phản ứng hóa học nào xảy ra $\\implies$ nổ vật lí."
      }
    ]
  },

  {
    id: 6,
    cd: 2,
    cdTitle: "Chuyên đề 2. Hóa học trong việc phòng chống cháy, nổ",
    name: "Điểm chớp cháy – Nhiệt độ ngọn lửa – Nhiệt độ tự bốc cháy",
    subtitle: "Ba đại lượng nhiệt động then chốt đánh giá mức độ nguy hiểm cháy nổ của hóa chất lỏng và khí",
    pillars: [
      {
        title: "Điểm chớp cháy (Flash Point)",
        desc: "Nhiệt độ thấp nhất ở áp suất khí quyển mà chất lỏng bay hơi tạo thành hỗn hợp với không khí có thể bùng cháy khi có mồi lửa.",
        icon: "fa-temperature-arrow-up",
        points: [
          "Đặc điểm: Ngọn lửa bùng lên rồi tắt ngay tức khắc vì tốc độ bay hơi tại nhiệt độ này chưa đủ để cung cấp hơi duy trì sự cháy liên tục.",
          "Phân loại theo chuẩn an toàn quốc tế (và SGK): Chất lỏng có điểm chớp cháy nhỏ hơn $37{,}8^\\circ\\text{C}$ ($100^\\circ\\text{F}$) được xếp vào loại **chất lỏng dễ cháy** (Flammable Liquid, ví dụ xăng khoảng $-43^\\circ\\text{C}$, cồn ethanol $13^\\circ\\text{C}$, acetone $-20^\\circ\\text{C}$).",
          "Chất lỏng có điểm chớp cháy lớn hơn $37{,}8^\\circ\\text{C}$ xếp vào loại **chất lỏng có thể gây cháy** (Combustible Liquid, ví dụ dầu diesel $52^\\circ\\text{C}-96^\\circ\\text{C}$, dầu hỏa $38^\\circ\\text{C}-72^\\circ\\text{C}$).",
          "Ý nghĩa: Cảnh báo trạm xăng dầu, kho dung môi hữu cơ luôn tồn tại hơi dễ cháy ngay ở nhiệt độ môi trường bình thường."
        ]
      },
      {
        title: "Nhiệt độ ngọn lửa (Flame Temperature)",
        desc: "Nhiệt độ cao nhất mà phản ứng cháy có thể sinh ra ở áp suất khí quyển trong điều kiện đoạn nhiệt lí thuyết.",
        icon: "fa-fire-flame-curved",
        points: [
          "Bản chất: Thể hiện mức độ tập trung nhiệt lượng giải phóng từ phản ứng đốt cháy; quyết định khả năng ứng dụng công nghiệp (hàn cắt kim loại, nấu luyện quặng) cũng như mức độ tàn phá vật liệu xung quanh.",
          "Ảnh hưởng của thành phần môi trường cháy: Đốt cháy chất trong oxygen tinh khiết cho nhiệt độ ngọn lửa cao hơn rất nhiều so với cháy trong không khí (vì không bị tiêu tốn nhiệt lượng để làm nóng $78\\%$ khí $N_2$ trơ).",
          "Số liệu tiêu biểu trong sách: Cồn ethanol cháy trong không khí cho nhiệt độ ngọn lửa lí thuyết khoảng $2082^\\circ\\text{C}$; Đèn hàn oxygen – acetylene ($C_2H_2 + O_2$) có thể đạt tới $3410\\text{ K}$ ($3137^\\circ\\text{C}$), đủ làm nóng chảy hầu hết các kim loại."
        ]
      },
      {
        title: "Nhiệt độ tự bốc cháy (Autoignition Temperature)",
        desc: "Nhiệt độ thấp nhất ở áp suất khí quyển mà chất cháy tự bốc cháy trong không khí mà không cần có bất kì ngọn lửa hay tia lửa mồi nào.",
        icon: "fa-temperature-high",
        points: [
          "Cơ chế: Ở nhiệt độ này, các phân tử chất cháy tự nhận đủ nội năng nhiệt từ môi trường để vượt qua năng lượng hoạt hóa $E_a$, phản ứng tự tỏa nhiệt tích tụ nhanh hơn tốc độ tản nhiệt $\\implies$ bùng cháy tự phát.",
          "Quy luật an toàn: Chất có nhiệt độ tự bốc cháy càng thấp thì nguy cơ hỏa hoạn càng cao khi tồn trữ gần các đường ống nhiệt, động cơ nóng hoặc dưới ánh nắng gay gắt.",
          "Ví dụ: Phosphorus trắng tự bốc cháy ở $30^\\circ\\text{C}-34^\\circ\\text{C}$ ngay trong không khí; Carbon disulfide ($CS_2$) tự bốc cháy ở $90^\\circ\\text{C}$ (chỉ cần chạm vào ống dẫn hơi nước nóng cũng bốc cháy); Xăng có nhiệt độ tự bốc cháy khoảng $280^\\circ\\text{C}$, dầu diesel khoảng $210^\\circ\\text{C}$."
        ]
      },
      {
        title: "Bảng đối chiếu phân biệt 3 khái niệm",
        desc: "Tránh nhầm lẫn kinh điển giữa điểm chớp cháy, nhiệt độ ngọn lửa và nhiệt độ tự bốc cháy.",
        icon: "fa-table-cells",
        points: [
          "Điểm chớp cháy: Cần có ngọn lửa mồi ngoài; Hơi chất lỏng bùng lên rồi tắt; Dùng đánh giá độ bay hơi nguy hiểm của chất lỏng.",
          "Nhiệt độ ngọn lửa: Nhiệt độ đỉnh cao nhất do chính phản ứng cháy sinh ra; Thể hiện cường độ tỏa nhiệt của phản ứng.",
          "Nhiệt độ tự bốc cháy: KHÔNG cần ngọn lửa mồi ngoài; Tự bốc cháy khi đạt ngưỡng nhiệt môi trường; Đánh giá ngưỡng an toàn tồn trữ nhiên liệu.",
          "Nghịch lí thú vị: Dầu diesel khó bắt lửa hơn xăng (điểm chớp cháy cao hơn, $>52^\\circ\\text{C}$ so với $-43^\\circ\\text{C}$), nhưng nhiệt độ tự bốc cháy của diesel ($210^\\circ\\text{C}$) lại thấp hơn xăng ($280^\\circ\\text{C}$) $\\implies$ động cơ diesel nén tự nổ mà không cần bugi đánh lửa!"
        ]
      }
    ],
    cases: [
      {
        title: "Tại sao ở trạm xăng dầu tuyệt đối cấm sử dụng điện thoại và hút thuốc?",
        scenario: "Nhiều người thắc mắc vì sao trời mùa đông lạnh giá ($10^\\circ\\text{C}$) mà tại cây xăng vẫn cấm tuyệt đối mọi hành vi bật lửa hoặc dùng điện thoại có nguy cơ phát tia lửa tĩnh điện.",
        solution: "1. Xăng là hỗn hợp hydrocarbon lỏng dễ bay hơi, có **điểm chớp cháy cực thấp** (khoảng $-43^\\circ\\text{C}$).\n2. Ngay cả ở nhiệt độ mùa đông $10^\\circ\\text{C}$ hay thậm chí âm độ, nhiệt độ môi trường vẫn cao hơn rất nhiều so với điểm chớp cháy của xăng $\\implies$ bề mặt xăng luôn luôn bay hơi và tạo thành hỗn hợp hơi xăng – không khí dễ nổ bao quanh khu vực bơm xăng.\n3. Chỉ cần một tia lửa nhỏ (tàn thuốc lá, tia lửa tĩnh điện từ bàn phím điện thoại hoặc áo len cọ xát) là đủ kích hoạt hỗn hợp hơi xăng bùng cháy dữ dội gây thảm họa nổ trạm xăng.",
        tip: "Điểm chớp cháy của xăng là âm ($-43^\\circ\\text{C}$), nghĩa là ở bất kì nhiệt độ thời tiết bình thường nào ở Việt Nam, xăng đều ở trạng thái sẵn sàng bùng cháy khi gặp mồi lửa!"
      },
      {
        title: "Giải thích nguyên lí hoạt động của động cơ Diesel không cần bugi đánh lửa",
        scenario: "Động cơ xăng cần bugi tạo tia lửa điện để đốt cháy hỗn hợp xăng – không khí, trong khi động cơ Diesel lại không có bugi. Hãy vận dụng khái niệm nhiệt độ tự bốc cháy để giải thích.",
        solution: "1. Xăng có điểm chớp cháy rất thấp ($-43^\\circ\\text{C}$) nhưng nhiệt độ tự bốc cháy lại khá cao ($280^\\circ\\text{C}$), nên cần bugi đánh tia lửa điện tại thời điểm nén thích hợp.\n2. Dầu Diesel có điểm chớp cháy cao ($> 52^\\circ\\text{C}$), an toàn ở nhiệt độ thường, nhưng lại có **nhiệt độ tự bốc cháy thấp** ($210^\\circ\\text{C}$).\n3. Trong động cơ Diesel: Không khí được piston nén cực mạnh với tỉ số nén rất cao ($16:1$ đến $22:1$), làm nhiệt độ không khí bị nén nóng lên tới $500^\\circ\\text{C} - 700^\\circ\\text{C}$.\n4. Khi kim phun phun sương dầu diesel vào buồng nén nóng rực, vì nhiệt độ môi trường ($> 500^\\circ\\text{C}$) vượt xa nhiệt độ tự bốc cháy của diesel ($210^\\circ\\text{C}$), các hạt dầu diesel tự bốc cháy mãnh liệt sinh công mà không cần bugi đánh lửa.",
        tip: "So sánh độc đáo: Xăng dễ chớp cháy hơn nhưng khó tự bốc cháy hơn diesel."
      }
    ],
    quizzes: [
      {
        question: "Chất lỏng dễ cháy (Flammable liquid) theo quy chuẩn an toàn hóa chất là chất lỏng có điểm chớp cháy:",
        options: [
          "Nhỏ hơn $37{,}8^\\circ\\text{C}$",
          "Lớn hơn $100^\\circ\\text{C}$",
          "Từ $50^\\circ\\text{C}$ đến $100^\\circ\\text{C}$",
          "Lớn hơn $37{,}8^\\circ\\text{C}$"
        ],
        correct: 0,
        explanation: "Theo quy ước phân loại của các tổ chức an toàn quốc tế (OSHA, NFPA) và SGK Hóa học 10, ngưỡng phân cách là $37{,}8^\\circ\\text{C}$ ($100^\\circ\\text{F}$): Dưới $37{,}8^\\circ\\text{C}$ là chất lỏng dễ cháy."
      },
      {
        question: "Nhiệt độ tự bốc cháy khác với điểm chớp cháy ở điểm cốt lõi nào sau đây?",
        options: [
          "Nhiệt độ tự bốc cháy không cần sự có mặt của ngọn lửa hay tia lửa mồi ngoài",
          "Nhiệt độ tự bốc cháy luôn nhỏ hơn điểm chớp cháy",
          "Điểm chớp cháy không cần mồi lửa ngoài",
          "Nhiệt độ tự bốc cháy chỉ đo được trong chân không"
        ],
        correct: 0,
        explanation: "Điểm chớp cháy bắt buộc phải có mồi lửa tiếp xúc; nhiệt độ tự bốc cháy là ngưỡng nhiệt mà chất tự phát hỏa trong không khí do tích tụ nhiệt nội tại."
      },
      {
        question: "Đèn hàn oxygen – acetylene có thể đạt tới nhiệt độ ngọn lửa khoảng bao nhiêu?",
        options: [
          "$3410\\text{ K}$ (khoảng $3137^\\circ\\text{C}$)",
          "$1000\\text{ K}$",
          "$500^\\circ\\text{C}$",
          "$10\\,000^\\circ\\text{C}$"
        ],
        correct: 0,
        explanation: "Sách giáo khoa nêu rõ: Cháy trong oxygen tinh khiết, ngọn lửa đèn hàn oxy-acetylene đạt tới khoảng $3410\\text{ K}$, cho phép nung chảy và cắt đứt các thanh thép dày."
      }
    ]
  },

  {
    id: 7,
    cd: 2,
    cdTitle: "Chuyên đề 2. Hóa học trong việc phòng chống cháy, nổ",
    name: "Hóa học về phản ứng cháy, nổ",
    subtitle: "Tính toán biến thiên enthalpy của phản ứng cháy, năng lượng liên kết và ảnh hưởng của nồng độ oxygen tới tốc độ cháy",
    pillars: [
      {
        title: "Tính biến thiên enthalpy phản ứng cháy",
        desc: "Xác định nhiệt lượng giải phóng bằng hai phương pháp nhiệt động học cơ bản: nhiệt tạo thành chuẩn và năng lượng liên kết.",
        icon: "fa-calculator",
        points: [
          "Theo nhiệt tạo thành chuẩn $\\Delta_f H^\\circ$: $\\Delta_r H^\\circ = \\sum \\nu \\Delta_f H^\\circ(\\text{sản phẩm}) - \\sum \\nu \\Delta_f H^\\circ(\\text{chất đầu})$. Phản ứng cháy luôn có $\\Delta_r H^\\circ < 0$ (tỏa nhiệt mạnh).",
          "Theo năng lượng liên kết $E_b$: $\\Delta_r H \\approx \\sum E_b(\\text{liên kết bị bẻ gãy}) - \\sum E_b(\\text{liên kết mới tạo thành})$. Quá trình phá vỡ liên kết thu năng lượng ($E > 0$), tạo thành liên kết giải phóng năng lượng ($E < 0$).",
          "Quy ước dấu: Biến thiên enthalpy mang dấu âm ($\\Delta_r H < 0$), nhưng khi nói 'nhiệt lượng tỏa ra' thì giá trị luôn là số dương $Q = -\\Delta_r H > 0$."
        ]
      },
      {
        title: "Tính toán nhiệt lượng cho các loại nhiên liệu thực tế",
        desc: "Phương pháp tính nhiệt lượng tỏa ra khi đốt than đá, methane, xăng octane và hỗn hợp khí gas hóa lỏng (LPG).",
        icon: "fa-gas-pump",
        points: [
          "Đốt cháy Methane: $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(l)$, $\\Delta_r H^\\circ_{298} = -890{,}3\\,\\text{kJ/mol}$.",
          "Đốt cháy hỗn hợp khí gas (LPG): Gồm propane ($C_3H_8$) và butane ($C_4H_{10}$). Với tỉ lệ mol $n(C_3H_8) : n(C_4H_{10}) = 2 : 3$, enthalpy cháy trung bình của 1 mol gas tính theo tỉ lệ trọng số: $\\Delta H_{\\text{gas}} = 0{,}4 \\cdot \\Delta H(C_3H_8) + 0{,}6 \\cdot \\Delta H(C_4H_{10})$.",
          "Đốt cháy Octane ($C_8H_{18}$) trong xăng: $C_8H_{18}(l) + \\frac{25}{2}O_2(g) \\to 8CO_2(g) + 9H_2O(l)$, $\\Delta_r H^\\circ_{298} \\approx -5470\\,\\text{kJ/mol}$.",
          "Năng suất tỏa nhiệt: Tính bằng nhiệt lượng tỏa ra trên 1 gam hoặc 1 kg nhiên liệu ($Q/m$), giúp so sánh hiệu quả kinh tế và kĩ thuật của từng loại nhiên liệu."
        ]
      },
      {
        title: "Ảnh hưởng của nồng độ oxygen tới tốc độ cháy",
        desc: "Mô hình động học phản ứng cháy carbon đơn giản và nguyên lí dập lửa bằng cách giảm nồng độ chất oxi hóa.",
        icon: "fa-wind",
        points: [
          "Phương trình tốc độ theo mô hình đơn giản của SGK: Với phản ứng cháy than đá $C(s) + O_2(g) \\to CO_2(g)$, tốc độ phản ứng phụ thuộc bậc nhất vào nồng độ oxygen: $v = k \\cdot [O_2]$.",
          "Khi phần trăm thể tích $O_2$ giảm từ $21\\%$ (không khí bình thường) xuống $14\\%$ (ngưỡng giới hạn duy trì cháy): Tỉ số tốc độ cháy giảm: $\\frac{v_{21}}{v_{14}} = \\frac{21}{14} = 1{,}5$ lần (tốc độ cháy giảm đi $33{,}3\\%$).",
          "Nguyên lí dập lửa: Khi nồng độ $O_2$ bị hạ xuống dưới $14\\%$, lượng nhiệt giải phóng không đủ bù đắp nhiệt lượng tản ra môi trường $\\implies$ nhiệt độ đám cháy tụt xuống dưới nhiệt độ bắt cháy $\\implies$ đám cháy bị dập tắt."
        ]
      },
      {
        title: "Mô hình phản ứng hô hấp trong sách giáo khoa",
        desc: "Vận dụng mô hình tốc độ $v = k[O_2]$ để giải thích các trạng thái sinh lí khi thay đổi áp suất và nồng độ oxygen.",
        icon: "fa-lungs",
        points: [
          "Mô hình minh họa SGK: Khi nồng độ $O_2$ trong phòng kín giảm từ $21\\%$ xuống $18\\%$, tỉ số tốc độ phản ứng hô hấp mô hình là $\\frac{21}{18} \\approx 1{,}17$ (tốc độ hô hấp giảm, con người bắt đầu chóng mặt, mệt mỏi).",
          "Khi bệnh nhân thở oxy cao áp (áp suất riêng phần $O_2$ tăng từ $0{,}21\\text{ atm}$ lên $2{,}52\\text{ atm}$): Tỉ số tốc độ là $\\frac{2{,}52}{0{,}21} = 12$ lần $\\implies$ đẩy nhanh quá trình chuyển hóa và hồi phục mô tổn thương.",
          "Lưu ý khoa học: Đây là mô hình gần đúng trong SGK để học sinh rèn luyện tư duy tính toán tỉ lệ, không thay thế cho các phương trình sinh hóa phức tạp của cơ thể."
        ]
      }
    ],
    cases: [
      {
        title: "Tính nhiệt lượng tỏa ra khi đun nấu hết một bình gas 12 kg (tỉ lệ 2:3)",
        scenario: "Một bình gas sinh hoạt loại 12 kg chứa hỗn hợp propane ($C_3H_8$) và butane ($C_4H_{10}$) theo tỉ lệ mol tương ứng là $2 : 3$. Biết biến thiên enthalpy cháy chuẩn của propane là $-2220\\,\\text{kJ/mol}$ và của butane là $-2878\\,\\text{kJ/mol}$. Tính nhiệt lượng tỏa ra khi đốt cháy hoàn toàn bình gas đó.",
        solution: "1. Đặt số mol propane là $2x$ mol, số mol butane là $3x$ mol.\n2. Tổng khối lượng hỗn hợp gas:\n$m = 44 \\times 2x + 58 \\times 3x = 88x + 174x = 262x\\,\\text{gam}$.\nTheo đề: $m = 12\\text{ kg} = 12\\,000\\text{ g} \\implies x = \\frac{12\\,000}{262} \\approx 45{,}80\\,\\text{mol}$.\n3. Số mol từng chất:\n$n(C_3H_8) = 2 \\times 45{,}80 = 91{,}60\\,\\text{mol}$.\n$n(C_4H_{10}) = 3 \\times 45{,}80 = 137{,}40\\,\\text{mol}$.\n4. Nhiệt lượng tỏa ra khi đốt cháy hoàn toàn:\n$Q = 91{,}60 \\times 2220 + 137{,}40 \\times 2878 = 203\\,352 + 395\\,437 = 598\\,789\\,\\text{kJ} \\approx 5{,}99 \\times 10^5\\,\\text{kJ}$.",
        tip: "Luôn kiểm tra đúng khối lượng mol: Propane $C_3H_8$ ($M = 44$), Butane $C_4H_{10}$ ($M = 58$)."
      },
      {
        title: "Tính biến thiên enthalpy phản ứng cháy của methane qua năng lượng liên kết",
        scenario: "Cho phản ứng: $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(g)$. Biết năng lượng liên kết $E_b\\,(\\text{kJ/mol})$: $C-H = 414; O=O = 498; C=O = 799; O-H = 464$. Hãy tính $\\Delta_r H$ của phản ứng và giải thích dấu.",
        solution: "1. Xác định số lượng liên kết trong chất phản ứng (bị bẻ gãy):\n- $1$ phân tử $CH_4$ có $4$ liên kết $C-H \\implies 4 \\times 414 = 1656\\,\\text{kJ}$.\n- $2$ phân tử $O_2$ có $2$ liên kết $O=O \\implies 2 \\times 498 = 996\\,\\text{kJ}$.\nTổng năng lượng phá vỡ: $\\sum E_b(\\text{cđ}) = 1656 + 996 = 2652\\,\\text{kJ}$.\n2. Xác định số lượng liên kết trong sản phẩm (được hình thành):\n- $1$ phân tử $CO_2$ có $2$ liên kết $C=O \\implies 2 \\times 799 = 1598\\,\\text{kJ}$.\n- $2$ phân tử $H_2O$ có $4$ liên kết $O-H \\implies 4 \\times 464 = 1856\\,\\text{kJ}$.\nTổng năng lượng tạo thành: $\\sum E_b(\\text{sp}) = 1598 + 1856 = 3454\\,\\text{kJ}$.\n3. Tính biến thiên enthalpy:\n$\\Delta_r H = \\sum E_b(\\text{cđ}) - \\sum E_b(\\text{sp}) = 2652 - 3454 = -802\\,\\text{kJ}$.\n4. Dấu âm ($-802\\,\\text{kJ} < 0$) chứng minh phản ứng tỏa nhiệt mạnh.",
        tip: "Lưu ý công thức liên kết lấy Chất đầu trừ Sản phẩm, ngược lại với công thức nhiệt tạo thành $\\Delta_f H$ (Sản phẩm trừ Chất đầu)."
      }
    ],
    quizzes: [
      {
        question: "Theo mô hình động học đơn giản $v = k[O_2]$ của SGK, khi nồng độ oxygen trong không khí giảm từ $21\\%$ xuống $14\\%$, tốc độ cháy của than sẽ giảm bao nhiêu lần?",
        options: [
          "$1{,}5$ lần",
          "$2$ lần",
          "$3$ lần",
          "$1{,}17$ lần"
        ],
        correct: 0,
        explanation: "Tỉ lệ tốc độ: $\\frac{v_{21}}{v_{14}} = \\frac{21}{14} = 1{,}5$ lần."
      },
      {
        question: "Công thức tính biến thiên enthalpy phản ứng theo năng lượng liên kết $E_b$ của các chất tham gia là:",
        options: [
          "$\\Delta_r H = \\sum E_b(\\text{chất đầu}) - \\sum E_b(\\text{sản phẩm})$",
          "$\\Delta_r H = \\sum E_b(\\text{sản phẩm}) - \\sum E_b(\\text{chất đầu})$",
          "$\\Delta_r H = \\sum E_b(\\text{chất đầu}) + \\sum E_b(\\text{sản phẩm})$",
          "$\\Delta_r H = \\frac{\\sum E_b(\\text{chất đầu})}{\\sum E_b(\\text{sản phẩm})}$"
        ],
        correct: 0,
        explanation: "Phá vỡ liên kết chất đầu tốn năng lượng ($+$), tạo liên kết sản phẩm giải phóng năng lượng ($-$) $\\implies \\Delta_r H = \\sum E_b(\\text{chất đầu}) - \\sum E_b(\\text{sản phẩm})$."
      },
      {
        question: "Một hỗn hợp khí gas gồm propane và butane có tỉ lệ mol $2 : 3$. Phần trăm số mol của propane trong hỗn hợp là:",
        options: [
          "$40\\%$",
          "$60\\%$",
          "$50\\%$",
          "$20\\%$"
        ],
        correct: 0,
        explanation: "Tổng số phần là $2 + 3 = 5$ phần. Phần trăm mol propane $= \\frac{2}{5} \\times 100\\% = 40\\%$ (tương ứng butane chiếm $60\\%$)."
      }
    ]
  },

  {
    id: 8,
    cd: 2,
    cdTitle: "Chuyên đề 2. Hóa học trong việc phòng chống cháy, nổ",
    name: "Phòng chống cháy, nổ",
    subtitle: "Nhận biết nguy cơ, quy chuẩn phân loại đám cháy A, B, C, D, E, nguyên tắc chọn chất chữa cháy và quy trình cứu nạn 114",
    pillars: [
      {
        title: "Nhận biết nguy cơ & Biện pháp phòng ngừa",
        desc: "Triệt tiêu các điều kiện hình thành tam giác cháy ngay từ giai đoạn sinh hoạt và sản xuất.",
        icon: "fa-shield-halved",
        points: [
          "Các nguồn gây cháy thường gặp: Chập điện, quá tải, hở mối nối dây dẫn; Bất cẩn khi dùng lửa (tàn thuốc, diêm, nấu nướng quên tắt); Tia sét; Ma sát tĩnh điện; Hóa chất oxi hóa để chung với chất dễ cháy.",
          "Biện pháp phòng ngừa: Tắt thiết bị nhiệt (bàn là, bếp điện, máy sấy) sau khi dùng; Khóa van bình gas sau khi nấu; Không tích trữ xăng dầu trong nhà; Không câu móc điện tùy tiện; Trang bị hệ thống báo khói, báo cháy tự động và bình chữa cháy xách tay.",
          "Tuyệt đối an toàn: Không dùng lửa kiểm tra rò rỉ gas; Che chắn cẩn thận khi hàn cắt kim loại; Không tự ý cưa cắt các vật nghi ngờ là bom mìn, bình khí nén cũ."
        ]
      },
      {
        title: "Phân loại đám cháy theo chuẩn quốc tế",
        desc: "Căn cứ vào trạng thái vật lí và bản chất hóa học của chất cháy để chọn phương pháp dập tắt phù hợp.",
        icon: "fa-layer-group",
        points: [
          "Đám cháy loại A: Cháy các chất rắn thông thường dễ tạo than hồng (gỗ, giấy, vải, rơm rạ, than đá, cao su, nhựa dẻo).",
          "Đám cháy loại B: Cháy các chất lỏng và chất rắn hóa lỏng dễ cháy (xăng, dầu diesel, cồn ethanol, sơn, nhựa đường, dầu mỡ động thực vật).",
          "Đám cháy loại C: Cháy các chất khí dễ cháy (khí gas LPG methane, propane, butane, hydrogen, acetylene).",
          "Đám cháy loại D: Cháy các kim loại hoạt động mạnh ($Na, K, Li, Mg, Al$ dạng bột hoặc vụn).",
          "Đám cháy loại E: Đám cháy liên quan trực tiếp đến các thiết bị đang có điện (tủ điện, máy biến áp, máy tính, động cơ điện)."
        ]
      },
      {
        title: "Bản chất hóa học của các chất chữa cháy",
        desc: "Tác động vào tam giác cháy bằng cách làm lạnh, cách li oxygen hoặc ức chế phản ứng chuỗi.",
        icon: "fa-fire-extinguisher",
        points: [
          "Nước ($H_2O$): Hấp thụ nhiệt lượng khổng lồ để bay hơi làm nguội bề mặt chất cháy; Hơi nước sinh ra làm loãng nồng độ $O_2$. Dùng tốt nhất cho đám cháy loại A. **CẤM DÙNG** cho xăng dầu (loại B - làm dầu nổi loang rộng hơn), kim loại mạnh (loại D - tạo khí $H_2$ gây nổ), và thiết bị điện chưa ngắt nguồn (gây giật chết người).",
          "Khí $CO_2$ nén lỏng: Nặng gấp 1,5 lần không khí, phun ra phủ kín cách li chất cháy khỏi $O_2$, đồng thời nhiệt độ cực lạnh ($-78{,}5^\\circ\\text{C}$) làm lạnh đám cháy. Dùng cho loại B, C, E. **CẤM DÙNG** cho kim loại $Mg, Al$ đang cháy vì phản ứng tạo carbon tự do tỏa nhiệt dữ dội hơn ($2Mg + CO_2 \\to 2MgO + C$).",
          "Bọt chữa cháy (Foam): Dung dịch tạo bọt nổi phủ trên bề mặt chất lỏng cách li oxygen. Dùng rất tốt cho đám cháy loại B, A.",
          "Bột chữa cháy khô ($NaHCO_3, KHCO_3$): Khi gặp nhiệt bị phân hủy $2NaHCO_3 \\xrightarrow{t^\\circ} Na_2CO_3 + CO_2 + H_2O$, vừa hấp thụ nhiệt, vừa sinh $CO_2$ dập lửa, đồng thời ức chế chuỗi gốc tự do."
        ]
      },
      {
        title: "Quy trình ứng phó khẩn cấp 4 bước",
        desc: "Thứ tự hành động khoa học bảo vệ tính mạng con người và tài sản khi xảy ra hỏa hoạn.",
        icon: "fa-person-running",
        points: [
          "Bước 1: BÁO ĐỘNG NGAY LẬP TỨC - Hô hoán thật to cho mọi người xung quanh biết, nhấn nút chuông báo cháy.",
          "Bước 2: CẮP CẦU DAO ĐIỆN - Ngắt điện toàn bộ khu vực cháy nếu còn an toàn (dùng vật cách điện, không chạm trực tiếp).",
          "Bước 3: DẬP LỬA BAN ĐẦU - Sử dụng bình chữa cháy tại chỗ, cát, chăn ướt nếu đám cháy còn nhỏ và có lối thoát hiểm an toàn phía sau.",
          "Bước 4: GỌI 114 VÀ THOÁT NẠN - Gọi số khẩn cấp **114** (báo rõ địa chỉ, quy mô, có người mắc kẹt không); Dùng khăn ướt bịt mũi miệng, cúi thấp người men theo chân tường thoát ra ngoài; Gọi **115** nếu có người bị thương. Tuyệt đối không nhảy lầu liều lĩnh hoặc quay lại lấy tài sản."
        ]
      }
    ],
    cases: [
      {
        title: "Xử lí tình huống khẩn cấp khi phát hiện rò rỉ khí gas trong nhà bếp",
        scenario: "Bước vào nhà bếp, bạn ngửi thấy mùi trứng thối/mùi khét nồng nặc của khí gas rò rỉ. Hãy nêu quy trình xử lí chuẩn mực để tránh kích hoạt vụ nổ gas.",
        solution: "1. **TUYỆT ĐỐI KHÔNG BẬT HOẶC TẮT BẤT KÌ THIẾT BỊ ĐIỆN NÀO** (không bật công tắc đèn, không rút phích cắm, không dùng bật lửa, không dùng điện thoại di động trong phòng) vì tia lửa điện siêu nhỏ ở tiếp điểm công tắc đủ kích nổ hỗn hợp gas – không khí.\n2. Lập tức dùng khăn bịt mũi miệng, nhẹ nhàng mở toang tất cả các cửa sổ, cửa đi để gió tự nhiên lùa vào làm loãng nồng độ khí gas.\n3. Nhẹ nhàng đến bình gas khóa chặt van an toàn của bình gas.\n4. Nhanh chóng đưa trẻ em, người già ra khỏi nhà đến nơi thoáng gió, an toàn.\n5. Ra ngoài khu vực xa mới dùng điện thoại gọi thợ kĩ thuật hoặc cơ quan phòng cháy chữa cháy 114.",
        tip: "Mùi trong bình gas là chất tạo mùi mercaptan được pha vào để cảnh báo rò rỉ, vì bản thân propane và butane nguyên chất không có mùi."
      },
      {
        title: "Tại sao tuyệt đối không được dùng nước và bình CO₂ dập đám cháy kim loại Magnesium?",
        scenario: "Trong xưởng cơ khí, một đống mạt kim loại magnesium ($Mg$) bắt lửa cháy sáng chói lòa. Một công nhân định lấy bình chữa cháy $CO_2$ và xô nước dập lửa. Điều gì sẽ xảy ra?",
        solution: "1. Magnesium ($Mg$) là kim loại có tính khử rất mạnh ở nhiệt độ cao:\n2. Nếu dội nước ($H_2O$): $Mg + 2H_2O \\xrightarrow{t^\\circ} Mg(OH)_2 + H_2 \\uparrow$ (hoặc $Mg + H_2O \\to MgO + H_2$). Khí hydrogen sinh ra gặp nhiệt độ cao sẽ nổ tung làm bắn tóe kim loại lỏng gây bỏng thảm khốc.\n3. Nếu phun khí $CO_2$: $2Mg + CO_2 \\xrightarrow{t^\\circ} 2MgO + C$. Phản ứng này tỏa nhiệt cực lớn ($> 2000^\\circ\\text{C}$), tạo hạt carbon đỏ rực tiếp tục duy trì đám cháy mãnh liệt hơn nữa!\n4. Cách xử lí đúng: Phải dùng chất chữa cháy chuyên dụng loại D (bột muối khô cát khô chuyên dụng) để phủ kín làm ngạt đám cháy kim loại.",
        tip: "Quy tắc vàng: Đám cháy kim loại hoạt động mạnh ($Na, K, Mg, Al$) CẤM TUYỆT ĐỐI nước và $CO_2$."
      }
    ],
    quizzes: [
      {
        question: "Số điện thoại khẩn cấp quốc gia để báo cháy và cứu nạn cứu hộ tại Việt Nam là:",
        options: [
          "114",
          "113",
          "115",
          "111"
        ],
        correct: 0,
        explanation: "114 là số gọi Cứu hỏa / Phòng cháy chữa cháy; 113 là Cảnh sát trật tự; 115 là Cấp cứu y tế; 111 là Tổng đài bảo vệ trẻ em."
      },
      {
        question: "Chất chữa cháy nào sau đây TUYỆT ĐỐI KHÔNG ĐƯỢC DÙNG để dập đám cháy kim loại kiềm, kiềm thổ hoặc nhôm đang cháy?",
        options: [
          "Nước và bình khí $CO_2$",
          "Cát khô chuyên dụng",
          "Bột muối khô chuyên dụng loại D",
          "Bình bột chuyên dụng dập cháy kim loại"
        ],
        correct: 0,
        explanation: "Nước phản ứng sinh khí $H_2$ gây nổ; $CO_2$ bị kim loại mạnh khử sinh carbon tự do và tỏa thêm nhiệt cực lớn."
      },
      {
        question: "Đám cháy loại B theo quy chuẩn phòng cháy chữa cháy là đám cháy liên quan đến:",
        options: [
          "Các chất lỏng dễ cháy như xăng, dầu, cồn, sơn",
          "Các chất rắn dễ tạo than hồng như gỗ, giấy",
          "Các chất khí như gas LPG, hydrogen, acetylene",
          "Các thiết bị điện đang mang dòng điện"
        ],
        correct: 0,
        explanation: "Loại A là chất rắn thông thường; Loại B là chất lỏng dễ cháy; Loại C là chất khí; Loại D là kim loại; Loại E là thiết bị điện."
      }
    ]
  },

  // =========================================================================
  // CHUYÊN ĐỀ 3: THỰC HÀNH HÓA HỌC & CÔNG NGHỆ THÔNG TIN (Bài 9 - Bài 11)
  // =========================================================================
  {
    id: 9,
    cd: 3,
    cdTitle: "Chuyên đề 3. Thực hành Hóa học và công nghệ thông tin",
    name: "Thực hành vẽ cấu trúc phân tử",
    subtitle: "Sử dụng phần mềm ChemSketch xây dựng công thức Lewis 2D, mô hình 3D Viewer và nhúng đối tượng vào văn bản",
    pillars: [
      {
        title: "Quy trình vẽ công thức cấu tạo 2D bằng ChemSketch",
        desc: "Làm chủ bộ công cụ vẽ cấu trúc hóa học tiêu chuẩn ACD/ChemSketch trong nhà trường.",
        icon: "fa-pen-ruler",
        points: [
          "Bước 1: Khởi động ChemSketch, chọn chế độ Structure, chọn nguyên tố carbon trên thanh công cụ hoặc mở bảng tuần hoàn Periodic Table.",
          "Bước 2: Chọn công cụ Draw Normal hoặc Draw Continuous, nhấp chuột kéo thả để tạo khung liên kết carbon; nhấp chuột vào liên kết để đổi thành liên kết đôi, liên kết ba.",
          "Bước 3: Chọn công cụ Add Explicit Hydrogens để hiển thị đầy đủ các nguyên tử H; thay đổi nhãn nguyên tố (thay C bằng N, O, S, Cl...).",
          "Bước 4: Sử dụng công cụ Clean Structure để phần mềm tự động căn chỉnh góc và độ dài liên kết về giá trị chuẩn đẹp mắt.",
          "Bước 5: Lưu tệp tin ở định dạng nguồn `.sk2` để chỉnh sửa sau này, và xuất ảnh tĩnh (`.gif`, `.jpg`, `.png`, `.tif`) để chèn vào báo cáo học tập."
        ]
      },
      {
        title: "Thực hành vẽ công thức Lewis phân tử mẫu",
        desc: "Rèn luyện vẽ các phân tử vô cơ và hữu cơ điển hình từ đơn giản đến phức tạp.",
        icon: "fa-draw-polygon",
        points: [
          "Dãy hydrocarbon cơ bản: Ethane ($C_2H_6$ - liên kết đơn), Ethene ($C_2H_4$ - liên kết đôi), Ethyne ($C_2H_2$ - liên kết ba thẳng hàng).",
          "Phân tử vô cơ chứa liên kết phối trí: Nitric acid ($HNO_3$), Sulfuric acid ($H_2SO_4$). Lưu ý với $H_2SO_4$, cần điều chỉnh hóa trị của nguyên tử Sulfur ($S$) về 6 trước khi thêm liên kết đôi với 2 nguyên tử Oxygen.",
          "Công thức Lewis có cặp electron tự do: Chọn Template hoặc thư viện Lewis để đặt các chấm electron tự do quanh nguyên tử $N$ trong $NH_3$ (1 cặp) và nguyên tử $O$ trong $H_2O$ (2 cặp)."
        ]
      },
      {
        title: "Chuyển đổi và quan sát mô hình không gian 3D",
        desc: "Sử dụng 3D Viewer để tối ưu hóa hình học phân tử và đo các tham số vi mô.",
        icon: "fa-cube",
        points: [
          "Chuyển đổi 2D sang 3D: Chọn cấu trúc 2D $\\to$ 3D Optimization $\\to$ mở cửa sổ ACD/3D Viewer.",
          "Các chế độ hiển thị: Dạng que (Wireframe), dạng que và thanh (Sticks), dạng quả cầu và que (Balls and Sticks), và dạng không gian lấp đầy (Space Fill / CPK spheres).",
          "Đo tham số hình học: Dùng công cụ đo độ dài liên kết (Bond Length tính bằng Angstrom $\\text{\\AA}$ hoặc nm), góc liên kết (Bond Angle tính bằng độ $^\\circ$), và góc nhị diện (Torsion / Dihedral Angle).",
          "Tùy chỉnh màu sắc: Đặt màu nền tương phản, phân biệt rõ nguyên tố: C (xám/đen), H (trắng), O (đỏ), N (xanh lam), S (vàng)."
        ]
      },
      {
        title: "Nhúng đối tượng vào Word & PowerPoint",
        desc: "Phân biệt giữa nhúng đối tượng động OLE có thể chỉnh sửa và dán hình ảnh tĩnh.",
        icon: "fa-file-word",
        points: [
          "Cách 1 - Nhúng đối tượng động (Object Linking and Embedding - OLE): Chọn toàn bộ cấu trúc trong ChemSketch $\\to$ Copy $\\to$ sang Word/PowerPoint dán trực tiếp (Ctrl+V). Khi cần sửa, chỉ cần nhấp đúp (Double-click) vào hình trong Word, phần mềm ChemSketch sẽ tự động mở ra để chỉnh sửa trực tiếp.",
          "Cách 2 - Dán dạng hình ảnh tĩnh: Dùng Paste Special $\\to$ chọn Windows Metafile (WMF) hoặc Enhanced Metafile (EMF). Ưu điểm: Tệp văn bản nhẹ hơn, không bị lỗi font khi gửi sang máy tính khác không cài ChemSketch, nhưng không chỉnh sửa cấu trúc được nữa."
        ]
      }
    ],
    cases: [
      {
        title: "Quy trình vẽ công thức Lewis của Sulfuric Acid (H₂SO₄) trong ChemSketch",
        scenario: "Học sinh lớp 10 thường gặp lỗi nguyên tử Sulfur bị gắn sai số lượng liên kết hoặc thiếu H khi vẽ acid vô cơ $H_2SO_4$. Hãy nêu các bước khắc phục chi tiết.",
        solution: "1. Trên bảng nguyên tố, chọn Sulfur ($S$). Nhấp vào màn hình vẽ.\n2. Vì mặc định $S$ có hóa trị 2, nhấp đúp vào $S$ hoặc dùng lệnh Tools $\\to$ Properties để đặt hóa trị (Valence) của $S$ là 6.\n3. Chọn nguyên tố Oxygen ($O$), kéo từ $S$ ra 4 hướng tạo 4 liên kết với $O$.\n4. Nhấp thêm liên kết để biến 2 liên kết $S-O$ thành liên kết đôi $S=O$. Hai liên kết còn lại giữ liên kết đơn $S-O-H$.\n5. Chọn công cụ Clean Structure để phần mềm tự động cân chỉnh thành cấu trúc tứ diện đối xứng hoàn hảo.\n6. Mở thư viện Lewis để thêm các cặp electron tự do lên các nguyên tử Oxygen.",
        tip: "Nhớ chỉnh Valence của $S$ thành 6 trước, nếu không phần mềm sẽ báo lỗi thừa hóa trị khi vẽ 6 liên kết quanh $S$."
      },
      {
        title: "Chèn cấu trúc phân tử vào bài thuyết trình PowerPoint chuẩn đẹp",
        scenario: "Học sinh cần đưa mô hình 3D phân tử $CH_4$ vào slide báo cáo để trình chiếu trên máy chiếu lớp học mà không bị mờ nhòe vỡ hạt.",
        solution: "1. Trong ChemSketch 3D Viewer, xoay góc nhìn phân tử $CH_4$ đẹp mắt dạng Balls and Sticks.\n2. Chọn nền màu trắng hoặc trong suốt để tiệp với nền slide PowerPoint.\n3. Nhấn Edit $\\to$ Copy.\n4. Mở PowerPoint, không nhấn Ctrl+V trực tiếp mà vào Home $\\to$ Paste $\\to$ Paste Special $\\to$ chọn **Enhanced Metafile (EMF)**.\n5. Ảnh định dạng vector EMF giữ độ nét cực cao ở mọi kích thước phóng to thu nhỏ mà không bao giờ bị vỡ hạt điểm ảnh như file JPG thông thường.",
        tip: "Luôn ưu tiên định dạng vector EMF/WMF khi chèn hình vẽ khoa học vào tài liệu in ấn hoặc thuyết trình."
      }
    ],
    quizzes: [
      {
        question: "Định dạng tệp tin gốc mặc định của phần mềm ACD/ChemSketch cho phép lưu lại để tiếp tục chỉnh sửa cấu trúc là:",
        options: [
          "`.sk2`",
          "`.docx`",
          "`.pdf`",
          "`.png`"
        ],
        correct: 0,
        explanation: "`.sk2` là định dạng độc quyền của ACD/ChemSketch lưu trữ toàn bộ thông tin tọa độ, liên kết và thuộc tính hóa học của phân tử."
      },
      {
        question: "Để đo góc liên kết giữa 3 nguyên tử trong phần mềm 3D Viewer, công cụ nào sau đây được sử dụng?",
        options: [
          "Bond Angle",
          "Bond Length",
          "Torsion Angle",
          "Clean Structure"
        ],
        correct: 0,
        explanation: "Bond Length đo độ dài liên kết giữa 2 nguyên tử; Bond Angle đo góc giữa 3 nguyên tử; Torsion Angle đo góc nhị diện giữa 4 nguyên tử."
      },
      {
        question: "Lợi ích lớn nhất khi sao chép cấu trúc từ ChemSketch và dán trực tiếp vào Microsoft Word theo kiểu đối tượng nhúng (OLE) là:",
        options: [
          "Có thể nhấp đúp vào hình vẽ trong Word để tự động mở ChemSketch chỉnh sửa lại bất kì lúc nào",
          "Làm cho tệp Word có dung lượng nhỏ hơn rất nhiều so với chèn ảnh",
          "Tự động dịch tên hóa học sang tiếng Việt",
          "Tự động tính khối lượng mol phân tử trực tiếp trong Word"
        ],
        correct: 0,
        explanation: "Tính năng OLE cho phép liên kết trực tiếp ứng dụng nguồn: Nhấp đúp chuột lên hình trong Word sẽ kích hoạt ChemSketch để sửa đổi ngay lập tức."
      }
    ]
  },

  {
    id: 10,
    cd: 3,
    cdTitle: "Chuyên đề 3. Thực hành Hóa học và công nghệ thông tin",
    name: "Thực hành thí nghiệm hóa học ảo",
    subtitle: "Khai thác phòng thí nghiệm ảo Yenka, đo đồ thị tốc độ phản ứng, khảo sát nồng độ và thiết kế thí nghiệm số",
    pillars: [
      {
        title: "Giao diện và chức năng của phòng thí nghiệm ảo Yenka",
        desc: "Môi trường mô phỏng trực quan tương tác cao giúp thực hiện các thí nghiệm hóa học an toàn, chính xác và không độc hại.",
        icon: "fa-desktop",
        points: [
          "Thẻ Open-local: Mở kho thí nghiệm mẫu có sẵn theo các chủ đề chuẩn chương trình (Tốc độ phản ứng, Năng lượng, Acid - Base - Muối, Bảng tuần hoàn, Điện phân...).",
          "Thẻ New: Cho phép giáo viên và học sinh tự do thiết kế phòng thí nghiệm ảo mới từ kho hóa chất (Chemicals) và dụng cụ thủy tinh, cảm biến đo đạc (Equipment).",
          "Kho hóa chất phong phú: Đầy đủ các kim loại, phi kim, acid, base, oxide, muối ở các dạng hạt, bột, dung dịch với nồng độ tùy chỉnh.",
          "Cảm biến và đồ thị thời gian thực: Đồng hồ bấm giây, nhiệt kế, pH kế, áp kế, và biểu đồ tự động vẽ đường cong biến thiên của chất phản ứng hoặc sản phẩm theo thời gian."
        ]
      },
      {
        title: "Mô phỏng đo tốc độ phản ứng tạo khí CO₂",
        desc: "Thực hành phản ứng kinh điển giữa calcium carbonate và hydrochloric acid.",
        icon: "fa-chart-area",
        points: [
          "Phương trình phản ứng: $2HCl(aq) + CaCO_3(s) \\to CaCl_2(aq) + CO_2(g) \\uparrow + H_2O(l)$.",
          "Quy trình thao tác: (1) Vào Open-local $\\to$ Reaction Rates $\\to$ Definition of reaction rate; (2) Kéo ống nghiệm chứa dung dịch $HCl$ và mẫu đá vôi $CaCO_3$ vào vùng làm việc; (3) Nhấn nút Play chạy mô phỏng; (4) Quan sát bọt khí $CO_2$ thoát ra và đồ thị thể tích khí tăng dần theo thời gian.",
          "Tính tốc độ trung bình theo $CO_2$: Trong khoảng thời gian từ $t_1$ đến $t_2$, tốc độ trung bình là $\\bar{v}_{CO_2} = \\frac{\\Delta V(CO_2)}{\\Delta t} = \\frac{V_2 - V_1}{t_2 - t_1}\\,(\\text{mL/s hoặc }\\text{cm}^3\\text{/s})$.",
          "Quy luật đồ thị: Độ dốc của đường cong dốc nhất ở giai đoạn đầu (tốc độ nhanh nhất), sau đó thoai thoải dần do nồng độ $HCl$ giảm dần, và cuối cùng nằm ngang khi một trong các chất phản ứng đã hết."
        ]
      },
      {
        title: "Khảo sát ảnh hưởng của nồng độ chất phản ứng",
        desc: "Thiết kế thí nghiệm đối chứng kiểm soát biến số để rút ra kết luận khoa học.",
        icon: "fa-vial-circle-check",
        points: [
          "Mục tiêu: Chứng minh định lượng nồng độ acid càng lớn thì tốc độ phản ứng càng nhanh.",
          "Thiết lập mẫu đối chứng: Chuẩn bị 2 hoặc 3 ống nghiệm chứa cùng khối lượng đá vôi $CaCO_3$ (cùng diện tích tiếp xúc), cùng nhiệt độ phòng, cùng thể tích acid nhưng nồng độ khác nhau (ví dụ: $0{,}5\\text{ M}; 1{,}0\\text{ M}; 2{,}0\\text{ M}$).",
          "Kết quả mô phỏng: Đồ thị của mẫu có nồng độ $2{,}0\\text{ M}$ có độ dốc ban đầu lớn nhất, thời gian đạt tới thể tích khí cực đại ngắn nhất $\\implies$ khẳng định nồng độ tăng làm tăng số va chạm hiệu quả trên một đơn vị thời gian."
        ]
      },
      {
        title: "Tự thiết kế thí nghiệm ảo & So sánh với thực tế",
        desc: "Luyện tập xây dựng thí nghiệm kim loại tác dụng với acid và nhận thức rõ ranh giới giữa mô phỏng và thực nghiệm.",
        icon: "fa-microscope",
        points: [
          "Ví dụ thiết kế: Cho mảnh đồng ($Cu$) tác dụng với dung dịch nitric acid đặc ($HNO_3$): Chọn ống nghiệm, lấy $Cu$ dạng lá, rót $HNO_3\\,68\\%$, đậy nút có ống dẫn khí $\\implies$ quan sát dung dịch hóa xanh lam ($Cu(NO_3)_2$) và khí màu nâu đỏ ($NO_2$) thoát ra.",
          "Ưu điểm của thí nghiệm ảo: An toàn tuyệt đối, không độc hại, không cháy nổ, lặp lại được vô số lần, hiển thị được các đồ thị thời gian thực và các quá trình vi mô mắt thường không thấy.",
          "Giới hạn quan trọng: Kết quả mô phỏng dựa trên các mô hình toán học đã được lập trình sẵn, không phản ánh hết sai số thực tế, thao tác kĩ năng tay nghề, tạp chất hóa chất và các biến số bất ngờ của đời thực $\\implies$ thí nghiệm ảo chỉ bổ trợ, không thể thay thế hoàn toàn thực nghiệm trong phòng thí nghiệm hóa học thật."
        ]
      }
    ],
    cases: [
      {
        title: "Xác định tốc độ phản ứng trung bình theo thể tích khí CO₂ trên phần mềm Yenka",
        scenario: "Trong thí nghiệm mô phỏng trên Yenka cho đá vôi phản ứng với dung dịch $HCl$, đồ thị thể tích khí $CO_2$ thu được: Tại thời điểm $t_1 = 10\\text{ s}$, thể tích khí $V_1 = 18\\,\\text{mL}$; tại thời điểm $t_2 = 40\\text{ s}$, thể tích khí $V_2 = 54\\,\\text{mL}$. Tính tốc độ phản ứng trung bình theo $CO_2$ trong khoảng thời gian này.",
        solution: "1. Biến thiên thể tích khí $CO_2$: $\\Delta V = V_2 - V_1 = 54 - 18 = 36\\,\\text{mL}$.\n2. Khoảng thời gian phản ứng: $\\Delta t = t_2 - t_1 = 40 - 10 = 30\\,\\text{s}$.\n3. Tốc độ trung bình thoát khí $CO_2$:\n$\\bar{v} = \\frac{\\Delta V}{\\Delta t} = \\frac{36}{30} = 1{,}2\\,\\text{mL/s}$.\n4. Ý nghĩa: Trung bình trong khoảng từ giây thứ 10 đến giây thứ 40, cứ mỗi giây trôi qua phản ứng sinh ra $1{,}2\\,\\text{mL}$ khí $CO_2$.",
        tip: "Nhớ ghi rõ đơn vị đi kèm tốc độ ($\\,\\text{mL/s}$ hoặc $\\,\\text{cm}^3\\text{/s}$)."
      },
      {
        title: "Quy tắc kiểm soát biến số khi khảo sát ảnh hưởng của nhiệt độ trên Yenka",
        scenario: "Học sinh muốn khảo sát ảnh hưởng của nhiệt độ tới tốc độ phản ứng giữa dung dịch $Na_2S_2O_3$ và $H_2SO_4$ (kết tủa lưu huỳnh làm mờ dấu chữ X). Cần thiết lập các biến số như thế nào để đảm bảo tính chuẩn xác khoa học?",
        solution: "1. Biến số độc lập (cần thay đổi): Nhiệt độ của dung dịch phản ứng (ví dụ khảo sát ở $20^\\circ\\text{C}, 35^\\circ\\text{C}, 50^\\circ\\text{C}$).\n2. Biến số phụ thuộc (cần đo đạc): Thời gian $t$ từ lúc trộn đến lúc xuất hiện kết tủa $S$ màu vàng đục che khuất dấu X (hoặc đồ thị độ mờ đục theo thời gian).\n3. Biến số kiểm soát (phải giữ cố định hoàn toàn):\n- Nồng độ của dung dịch $Na_2S_2O_3$ và dung dịch $H_2SO_4$.\n- Thể tích của từng dung dịch lấy vào ống nghiệm.\n- Dụng cụ đo và vị trí đặt ống nghiệm.\n4. Kết luận: Khi nhiệt độ tăng, thời gian làm mờ dấu X giảm đi rõ rệt, chứng minh nhiệt độ làm tăng tốc độ phản ứng.",
        tip: "Chỉ được thay đổi duy nhất một yếu tố đang khảo sát, tất cả các yếu tố còn lại bắt buộc phải giữ nguyên không đổi (nguyên tắc ceteris paribus)."
      }
    ],
    quizzes: [
      {
        question: "Trong phần mềm thí nghiệm ảo Yenka, thẻ nào cho phép người dùng tự do lựa chọn dụng cụ và hóa chất để thiết kế một bài thí nghiệm hoàn toàn mới?",
        options: [
          "Thẻ New",
          "Thẻ Open-local",
          "Thẻ Lessons",
          "Thẻ Help"
        ],
        correct: 0,
        explanation: "Thẻ Open-local mở các bài thực hành có sẵn trong thư viện; Thẻ New cung cấp không gian trống để người dùng tự do sáng tạo và lắp ráp thí nghiệm từ kho hóa chất."
      },
      {
        question: "Đặc điểm của đồ thị thể tích khí sinh ra theo thời gian trong phản ứng tạo khí là:",
        options: [
          "Ban đầu tăng nhanh (độ dốc lớn), sau đó tăng chậm dần và cuối cùng nằm ngang khi phản ứng dừng lại",
          "Luôn luôn là một đường thẳng dốc đứng đi lên mãi mãi",
          "Ban đầu nằm ngang, sau đó đột ngột dốc đứng lên",
          "Đường cong hình sin dao động tuần hoàn"
        ],
        correct: 0,
        explanation: "Ban đầu nồng độ chất phản ứng lớn nhất $\\implies$ tốc độ nhanh nhất. Theo thời gian chất phản ứng giảm dần $\\implies$ đồ thị lài dần, và khi hết chất thì thể tích khí không đổi $\\implies$ đường nằm ngang."
      },
      {
        question: "Ưu điểm nổi bật nhất của việc sử dụng phòng thí nghiệm ảo như Yenka trong dạy học Hóa học là:",
        options: [
          "Cho phép mô phỏng an toàn các phản ứng nguy hiểm, độc hại, dễ cháy nổ mà không gây rủi ro",
          "Có thể thay thế hoàn toàn 100% các tiết thực hành thí nghiệm trong phòng thí nghiệm thật",
          "Tự động làm sạch các dụng cụ thí nghiệm mà không tốn nước",
          "Không cần sử dụng máy tính hay nguồn điện"
        ],
        correct: 0,
        explanation: "Thí nghiệm ảo là công cụ đắc lực giúp học sinh trực quan hóa các phản ứng nguy hiểm, độc hại, đắt tiền một cách tuyệt đối an toàn."
      }
    ]
  },

  {
    id: 11,
    cd: 3,
    cdTitle: "Chuyên đề 3. Thực hành Hóa học và công nghệ thông tin",
    name: "Thực hành tính tham số cấu trúc và năng lượng",
    subtitle: "Hóa học tính toán lượng tử, phương pháp bán kinh nghiệm AM1/MOPAC, ma trận tọa độ Z-matrix và hiển thị qua Avogadro",
    pillars: [
      {
        title: "Tổng quan về Hóa học tính toán & Phương pháp",
        desc: "Ứng dụng mô hình toán - vật lí và sức mạnh điện toán để nghiên cứu cấu trúc, độ bền và phản ứng hóa học ở cấp độ nguyên tử.",
        icon: "fa-network-wired",
        points: [
          "Cơ học phân tử (Molecular Mechanics - ví dụ MM2): Dựa trên các định luật cơ học cổ điển, xem nguyên tử là các quả cầu nối với nhau bằng các lò xo liên kết. Ưu điểm: Tính toán cực nhanh cho đại phân tử protein, polymer; Nhược điểm: Không mô tả được electron và liên kết bị phá vỡ.",
          "Cơ học lượng tử (Quantum Mechanics): Giải phương trình Schrödinger cho hệ có electron (Ab initio phi kinh nghiệm, thuyết phiếm thần mật độ DFT, và phương pháp bán kinh nghiệm).",
          "Phương pháp bán kinh nghiệm (Semi-empirical): Điển hình là **AM1 (Austin Model 1)** tích hợp trong phần mềm **MOPAC**. Giản lược một số tích phân phức tạp và thay thế bằng các tham số thực nghiệm $\\implies$ tốc độ tính toán nhanh, độ chính xác tin cậy cho các phân tử hữu cơ và vô cơ vừa và nhỏ."
        ]
      },
      {
        title: "Cấu trúc tệp tin đầu vào MOPAC & Ma trận Z-matrix",
        desc: "Quy cách chuẩn mực để mô tả tọa độ không gian của các nguyên tử trong phân tử.",
        icon: "fa-file-code",
        points: [
          "Dòng 1 - Dòng từ khóa (Keywords): Khai báo phương pháp tính và mục tiêu. Ví dụ: `AM1 OPT` (`AM1` chọn phương pháp bán kinh nghiệm; `OPT` yêu cầu tối ưu hóa hình học phân tử để tìm cấu trúc có thế năng cực tiểu; `ENPART` yêu cầu phân tích thành phần năng lượng).",
          "Dòng 2 và 3 - Dòng tiêu đề và mô tả: Dành cho ghi chú thông tin người thực hiện, tên phân tử.",
          "Các dòng tiếp theo - Ma trận Z (Z-matrix): Mô tả từng nguyên tử dựa trên độ dài liên kết với nguyên tử trước, góc liên kết với nguyên tử thứ hai, và góc nhị diện với nguyên tử thứ ba.",
          "Chỉ số cờ tối ưu hóa: Kèm theo mỗi tham số hình học là cờ `1` (cho phép tối ưu hóa tham số đó trong quá trình tính) hoặc cờ `0` (khóa cố định giá trị tham số không đổi)."
        ]
      },
      {
        title: "Thực hành tính toán phân tử nước (H₂O) & Đọc kết quả",
        desc: "Phân tích file kết quả `.out` của MOPAC để trích xuất nhiệt tạo thành và thông số liên kết.",
        icon: "fa-water",
        points: [
          "Khởi tạo cấu trúc ban đầu: Đặt liên kết $O-H$ ước lượng khoảng $0{,}97\\,\\text{\\AA}$, góc $\\widehat{HOH}$ ban đầu khoảng $104{,}5^\\circ$. Đặt cờ `1` để MOPAC tự do tối ưu hóa.",
          "Đọc file kết quả `.out`:\n- Xác nhận dòng thông báo kết thúc thành công: `GEOMETRY OPTIMIZATION COMPLETED`.\n- Nhiệt tạo thành chuẩn tính toán theo AM1: $\\Delta_f H^\\circ \\approx -247{,}9\\,\\text{kJ/mol}$ (so với giá trị thực nghiệm hơi nước là $-241{,}8\\,\\text{kJ/mol}$, sai số rất nhỏ chỉ khoảng $2{,}5\\%$).\n- Độ dài liên kết $O-H$ sau tối ưu: Xấp xỉ $0{,}96\\,\\text{\\AA} - 0{,}97\\,\\text{\\AA}$.\n- Góc liên kết $\\widehat{HOH}$ sau tối ưu: Xấp xỉ $103{,}5^\\circ - 104{,}5^\\circ$.",
          "Bản chất: Kết quả tính toán là mô hình gần đúng khoa học, mang tính dự đoán và củng cố cho thực nghiệm."
        ]
      },
      {
        title: "So sánh dãy phân tử đồng đẳng & Cầu nối Avogadro",
        desc: "So sánh xu hướng biến đổi cấu trúc trong dãy $CH_4, NH_3, H_2O$ và trực quan hóa 3D.",
        icon: "fa-cubes-stacked",
        points: [
          "Quy tắc so sánh: Khi so sánh tham số giữa các phân tử, bắt buộc phải dùng cùng một phương pháp tính toán (ví dụ cùng dùng AM1) và cùng điều kiện đầu vào.",
          "Xu hướng trong dãy $CH_4 \\to NH_3 \\to H_2O$: Độ dài liên kết $X-H$ giảm dần ($C-H \\approx 1{,}11\\,\\text{\\AA} > N-H \\approx 1{,}00\\,\\text{\\AA} > O-H \\approx 0{,}97\\,\\text{\\AA}$) do điện tích hạt nhân tăng làm tăng lực hút electron; Góc liên kết giảm dần ($109{,}5^\\circ > 107^\\circ > 104{,}5^\\circ$) hoàn toàn phù hợp với thuyết VSEPR.",
          "Tích hợp với phần mềm Avogadro: Mở Avogadro $\\to$ vẽ nhanh phân tử $\\to$ vào Extension $\\to$ MOPAC $\\to$ chương trình tự động sinh mã Z-matrix và file `.mop` hoàn chỉnh chỉ bằng một cú nhấp chuột."
        ]
      }
    ],
    cases: [
      {
        title: "Viết tệp tin đầu vào MOPAC (Z-matrix) cho phân tử nước H₂O",
        scenario: "Học sinh cần soạn thảo tệp tin đầu vào `water.mop` để MOPAC tối ưu hóa hình học phân tử $H_2O$ bằng phương pháp AM1. Hãy trình bày cấu trúc tệp tin chính xác.",
        solution: "Nội dung tệp tin `water.mop` chuẩn mực:\n```text\nAM1 OPT\nPhan tu nuoc H2O toi uu hoa hinh hoc\nThuc hanh Chuyen de Hoa hoc 10 KNTT\n O   0.000000 0   0.000000 0   0.000000 0\n H   0.970000 1   0.000000 0   0.000000 0    1\n H   0.970000 1 104.500000 1   0.000000 0    1    2\n```\nGiải thích:\n- Dòng 1: Từ khóa `AM1 OPT` yêu cầu dùng phương pháp AM1 và tối ưu hóa hình học.\n- Dòng 2, 3: Tiêu đề và ghi chú.\n- Nguyên tử 1 ($O$): Gốc tọa độ.\n- Nguyên tử 2 ($H$): Cách $O$ khoảng $0{,}97\\,\\text{\\AA}$, số `1` phía sau là cờ cho phép MOPAC tối ưu độ dài này.\n- Nguyên tử 3 ($H$): Cách $O$ khoảng $0{,}97\\,\\text{\\AA}$ (cờ `1`), tạo với liên kết $O-H_1$ góc $104{,}5^\\circ$ (cờ `1` cho phép tối ưu góc này).",
        tip: "Luôn nhớ để dòng trống ở cuối tệp tin MOPAC theo đúng chuẩn cú pháp của chương trình."
      },
      {
        title: "Đọc và đánh giá độ chính xác nhiệt tạo thành chuẩn của H₂O từ file kết quả MOPAC",
        scenario: "Sau khi chạy MOPAC cho phân tử nước, mở tệp tin `water.out` thấy dòng: `FINAL HEAT OF FORMATION = -59.25 KCAL = -247.90 KJ`. Hãy so sánh giá trị này với giá trị nhiệt tạo thành thực nghiệm của hơi nước ($-241{,}8\\,\\text{kJ/mol}$) và tính phần trăm sai số.",
        solution: "1. Giá trị tính toán theo AM1: $\\Delta_f H^\\circ_{\\text{calc}} = -247{,}90\\,\\text{kJ/mol}$.\n2. Giá trị thực nghiệm: $\\Delta_f H^\\circ_{\\text{exp}} = -241{,}80\\,\\text{kJ/mol}$.\n3. Tính sai số tuyệt đối: $|\\Delta_f H^\\circ_{\\text{calc}} - \\Delta_f H^\\circ_{\\text{exp}}| = |-247{,}90 - (-241{,}80)| = 6{,}10\\,\\text{kJ/mol}$.\n4. Phần trăm sai số tương đối:\n$\\delta = \\frac{6{,}10}{241{,}80} \\times 100\\% \\approx 2{,}52\\%$.\n5. Nhận xét: Sai số chỉ khoảng $2{,}5\\%$, cho thấy phương pháp bán kinh nghiệm AM1 cho kết quả rất tốt và đáng tin cậy đối với các phân tử nhỏ.",
        tip: "1 kcal = 4,184 kJ. MOPAC thường xuất cả hai đơn vị kcal và kJ trong file kết quả."
      }
    ],
    quizzes: [
      {
        question: "Từ khóa `OPT` trong dòng đầu tiên của tệp tin đầu vào MOPAC có ý nghĩa gì?",
        options: [
          "Yêu cầu chương trình tối ưu hóa cấu trúc hình học của phân tử để đạt năng lượng cực tiểu",
          "Yêu cầu tính toán quang phổ hấp thụ của phân tử",
          "Chỉ định phương pháp tính bán kinh nghiệm",
          "Khai báo nhiệt độ phòng là $298\\text{ K}$"
        ],
        correct: 0,
        explanation: "`OPT` là viết tắt của 'Geometry Optimization' - bài toán tìm kiếm cấu hình không gian bền vững nhất tương ứng với cực tiểu năng lượng thế."
      },
      {
        question: "Trong ma trận Z-matrix của MOPAC, số cờ `1` đi kèm sau mỗi tham số hình học (độ dài, góc) biểu thị điều gì?",
        options: [
          "Tham số đó được phép thay đổi và tối ưu hóa trong quá trình tính toán",
          "Tham số đó bị khóa cố định không được thay đổi",
          "Nguyên tử đó mang điện tích $+1$",
          "Phân tử có 1 electron độc thân"
        ],
        correct: 0,
        explanation: "Quy ước MOPAC: cờ `1` là biến số tự do tối ưu hóa; cờ `0` là thông số cố định (frozen parameter)."
      },
      {
        question: "Phần mềm đồ họa mã nguồn mở nào sau đây thường được sử dụng làm giao diện trực quan để vẽ phân tử và tự động xuất ra file đầu vào MOPAC?",
        options: [
          "Avogadro",
          "Microsoft Excel",
          "Notepad",
          "Paint"
        ],
        correct: 0,
        explanation: "Avogadro là phần mềm trực quan hóa phân tử mã nguồn mở chuyên dụng, hỗ trợ giao diện sinh file đầu vào trực tiếp cho MOPAC, Gaussian, ORCA."
      }
    ]
  }
];

fs.writeFileSync('scratch/cd_hoahoc10_data.js', 'module.exports = ' + JSON.stringify(lessons, null, 2) + ';\n', 'utf8');
console.log('Generated cd_hoahoc10_data.js with ' + lessons.length + ' lessons successfully!');
