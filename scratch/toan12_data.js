module.exports = [
  {
    "id": 1,
    "chuyenDe": 1,
    "chuyenDeTitle": "Chuyên đề 1. Biến ngẫu nhiên rời rạc và các số đặc trưng",
    "title": "Bài 1. Biến ngẫu nhiên rời rạc và các số đặc trưng",
    "badge": "Bài 1 • CĐ1",
    "tagColor": "teal",
    "readTime": "16 phút",
    "target": "Nắm vững định nghĩa biến ngẫu nhiên rời rạc X; cách lập bảng phân bố xác suất; công thức tính kì vọng E(X), phương sai V(X) và độ lệch chuẩn σ(X); ý nghĩa kinh tế và rủi ro trong đầu tư, trò chơi.",
    "sections": [
      {
        "heading": "1. Khái niệm Biến ngẫu nhiên rời rạc & Bảng phân bố xác suất",
        "cards": [
          {
            "title": "Khái niệm và ví dụ thực tế",
            "points": [
              "<strong>Định nghĩa:</strong> Biến ngẫu nhiên rời rạc là một đại lượng nhận một số hữu hạn (hoặc đếm được) các giá trị có thể, nhưng trước khi thực hiện phép thử ta không biết nó sẽ nhận giá trị nào cụ thể.",
              "<strong>Kí hiệu:</strong> Các chữ cái in hoa như X, Y, Z. Các giá trị cụ thể mà nó có thể nhận kí hiệu là x₁, x₂, ..., xₙ.",
              "<strong>Ví dụ tiêu biểu:</strong> Số lần xuất hiện mặt 6 chấm khi gieo xúc xắc 5 lần; số quả bóng màu xanh rút được từ hộp kín; số câu trả lời đúng của thí sinh trong bài thi trắc nghiệm; số tiền lãi/lỗ của nhà đầu tư sau một chu kì kinh doanh."
            ]
          },
          {
            "title": "Bảng phân bố xác suất và quy tắc thiết lập",
            "points": [
              "<strong>Cấu trúc bảng:</strong> Gồm hai hàng (hoặc hai cột): Hàng trên liệt kê toàn bộ các giá trị có thể có của X sắp xếp tăng dần x₁ < x₂ < ... < xₙ; Hàng dưới là các xác suất tương ứng pᵢ = P(X = xᵢ).",
              "<strong>Hai điều kiện cốt lõi:</strong> (1) Mỗi xác suất pᵢ ≥ 0 với mọi i; (2) Tổng toàn bộ xác suất luôn luôn bằng 1: <strong>p₁ + p₂ + ... + pₙ = Σpᵢ = 1</strong>.",
              "<strong>Bốn bước lập bảng:</strong> (1) Xác định tập tất cả các giá trị có thể của X; (2) Với từng giá trị xᵢ, mô tả rõ biến cố {X = xᵢ}; (3) Tính xác suất pᵢ = P(X = xᵢ); (4) Kiểm tra điều kiện chuẩn hóa Σpᵢ = 1.",
              "<strong>Biến cố phức hợp:</strong> Để tính P(X ≥ a), ta tính tổng xác suất của các xᵢ ≥ a hoặc dùng biến cố đối: P(X ≥ a) = 1 − P(X < a)."
            ]
          }
        ]
      },
      {
        "heading": "2. Các số đặc trưng: Kì vọng, Phương sai và Độ lệch chuẩn",
        "cards": [
          {
            "title": "Kì vọng toán học E(X) và ý nghĩa trung bình dài hạn",
            "points": [
              "<strong>Công thức kì vọng:</strong> <strong>E(X) = x₁p₁ + x₂p₂ + ... + xₙpₙ = Σ xᵢ pᵢ</strong>.",
              "<strong>Ý nghĩa bản chất:</strong> Kì vọng là giá trị trung bình theo nghĩa xác suất (trung bình có trọng số). Khi lặp lại phép thử một số rất lớn lần, trung bình cộng kết quả thực nghiệm sẽ hội tụ về E(X).",
              "<strong>Lưu ý quan trọng:</strong> E(X) không nhất thiết phải là một giá trị cụ thể mà X có thể nhận (ví dụ số chấm trung bình khi gieo xúc xắc là E(X) = 3,5).",
              "<strong>Ứng dụng ra quyết định:</strong> So sánh các phương án kinh doanh hoặc trò chơi có thưởng; phương án nào có E(X) cao hơn thì mang lại lợi ích trung bình dài hạn tốt hơn."
            ]
          },
          {
            "title": "Phương sai V(X), Độ lệch chuẩn σ(X) và đo lường rủi ro",
            "points": [
              "<strong>Công thức định nghĩa phương sai:</strong> V(X) = Σ (xᵢ − E(X))² pᵢ. Đại lượng đo mức độ phân tán của các giá trị của X quanh giá trị kì vọng.",
              "<strong>Công thức rút gọn tính nhanh:</strong> <strong>V(X) = Σ xᵢ² pᵢ − [E(X)]²</strong>. (Lấy kì vọng của X² trừ đi bình phương kì vọng của X).",
              "<strong>Độ lệch chuẩn:</strong> <strong>σ(X) = √V(X)</strong>. Có cùng đơn vị đo với đại lượng X nên rất thuận tiện trong diễn giải thực tế.",
              "<strong>Đo lường rủi ro trong tài chính:</strong> Khi hai dự án có cùng mức lãi trung bình E(X), dự án nào có phương sai hoặc độ lệch chuẩn lớn hơn thì độ rủi ro, biến động khó đoán càng cao."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Biến ngẫu nhiên rời rạc X có bảng phân bố xác suất: X nhận giá trị 1 với xác suất 0,3; nhận giá trị 2 với xác suất 0,4; nhận giá trị 3 với xác suất a. Giá trị của a là:",
        "options": [
          "0,2",
          "0,3",
          "0,4",
          "0,5"
        ],
        "answer": 1,
        "explain": "Tổng xác suất của bảng phân bố luôn bằng 1: 0,3 + 0,4 + a = 1 ⇒ a = 1 − 0,7 = 0,3."
      },
      {
        "q": "Cho biến ngẫu nhiên X nhận hai giá trị 0 và 1 với xác suất tương ứng là P(X = 0) = 0,4 và P(X = 1) = 0,6. Kì vọng E(X) bằng:",
        "options": [
          "0,4",
          "0,5",
          "0,6",
          "1,0"
        ],
        "answer": 2,
        "explain": "E(X) = 0 × 0,4 + 1 × 0,6 = 0,6."
      },
      {
        "q": "Đại lượng nào sau đây đo lường mức độ biến động, phân tán của các giá trị của biến ngẫu nhiên quanh giá trị kì vọng?",
        "options": [
          "Số trung vị",
          "Kì vọng E(X)",
          "Phương sai V(X) và Độ lệch chuẩn σ(X)",
          "Tần số xuất hiện"
        ],
        "answer": 2,
        "explain": "Phương sai V(X) và độ lệch chuẩn σ(X) là các số đặc trưng đo độ phân tán của biến ngẫu nhiên quanh kì vọng, thể hiện mức độ rủi ro/biến động."
      }
    ]
  },
  {
    "id": 2,
    "chuyenDe": 1,
    "chuyenDeTitle": "Chuyên đề 1. Biến ngẫu nhiên rời rạc và các số đặc trưng",
    "title": "Bài 2. Biến ngẫu nhiên có phân bố nhị thức và áp dụng",
    "badge": "Bài 2 • CĐ1",
    "tagColor": "teal",
    "readTime": "17 phút",
    "target": "Nhận biết phép thử Bernoulli và phân bố nhị thức B(n, p); công thức Bernoulli tính xác suất P(X = k); các công thức tính nhanh E(X) = np, V(X) = np(1−p), σ(X) = √[np(1−p)]; vận dụng kiểm tra chất lượng sản phẩm và dự đoán xác suất.",
    "sections": [
      {
        "heading": "1. Phép thử Bernoulli và Công thức xác suất Bernoulli",
        "cards": [
          {
            "title": "Mô hình phép thử lặp Bernoulli",
            "points": [
              "<strong>Phép thử Bernoulli:</strong> Là một phép thử chỉ có đúng hai kết quả đối lập: Thành công (E) với xác suất p (0 < p < 1) và Thất bại (Ē) với xác suất q = 1 − p.",
              "<strong>Chuỗi n phép thử độc lập:</strong> Lặp lại phép thử đó n lần một cách hoàn toàn độc lập; kết quả của phép thử này không làm thay đổi xác suất thành công p của các phép thử khác.",
              "<strong>Ví dụ:</strong> Tung một đồng xu cân đối 10 lần liên tiếp (p = 0,5); kiểm tra ngẫu nhiên 20 sản phẩm trên dây chuyền với tỉ lệ lỗi p = 0,02; một thí sinh đoán mò ngẫu nhiên 50 câu trắc nghiệm 4 lựa chọn (p = 0,25)."
            ]
          },
          {
            "title": "Công thức Bernoulli",
            "points": [
              "<strong>Công thức:</strong> Gọi X là số lần xuất hiện biến cố thành công E trong n phép thử Bernoulli độc lập. Xác suất để có đúng k lần thành công (0 ≤ k ≤ n) là: <strong>P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ</strong>.",
              "<strong>Ý nghĩa các thành phần:</strong> C(n, k) là số cách chọn k vị trí thành công trong n lần thử; pᵏ là xác suất k lần thành công; (1 − p)ⁿ⁻ᵏ là xác suất n − k lần thất bại còn lại.",
              "<strong>Xác suất 'ít nhất một lần thành công':</strong> P(X ≥ 1) = 1 − P(X = 0) = 1 − (1 − p)ⁿ."
            ]
          }
        ]
      },
      {
        "heading": "2. Phân bố nhị thức B(n, p) và Công thức tính nhanh",
        "cards": [
          {
            "title": "Định nghĩa phân bố nhị thức và các số đặc trưng",
            "points": [
              "<strong>Kí hiệu:</strong> Ta nói biến ngẫu nhiên X tuân theo phân bố nhị thức với các tham số n và p, kí hiệu: <strong>X ~ B(n, p)</strong>.",
              "<strong>Kì vọng (Giá trị trung bình):</strong> <strong>E(X) = n · p</strong>. Cho biết số lần thành công trung bình sau n lần thực hiện phép thử.",
              "<strong>Phương sai:</strong> <strong>V(X) = n · p · (1 − p) = n · p · q</strong>.",
              "<strong>Độ lệch chuẩn:</strong> <strong>σ(X) = √[n · p · (1 − p)]</strong>."
            ]
          },
          {
            "title": "Quy trình giải bài toán ứng dụng thực tế",
            "points": [
              "<strong>Bước 1:</strong> Xác định biến ngẫu nhiên X là số lần xảy ra sự kiện thành công; kiểm tra 3 điều kiện: (1) n lần thử cố định; (2) Mỗi lần chỉ có 2 kết quả; (3) Các lần thử độc lập với xác suất p không đổi.",
              "<strong>Bước 2:</strong> Kết luận X ~ B(n, p) và chỉ rõ giá trị của n và p.",
              "<strong>Bước 3:</strong> Chuyển yêu cầu bài toán thành biến cố xác suất: 'đúng k lần' {X = k}; 'ít nhất k lần' {X ≥ k}; 'nhiều nhất k lần' {X ≤ k}.",
              "<strong>Bước 4:</strong> Áp dụng công thức Bernoulli hoặc công thức số đặc trưng E(X) = np để đưa ra kết luận chuẩn xác."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một bài thi trắc nghiệm gồm 20 câu hỏi, mỗi câu có 4 phương án lựa chọn và chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên đáp án cho cả 20 câu. Số câu đúng trung bình của thí sinh này là:",
        "options": [
          "4 câu",
          "5 câu",
          "10 câu",
          "2,5 câu"
        ],
        "answer": 1,
        "explain": "Biến ngẫu nhiên X là số câu đúng tuân theo phân bố nhị thức X ~ B(20; 0,25). Kì vọng số câu đúng là: E(X) = n × p = 20 × 0,25 = 5 câu."
      },
      {
        "q": "Gieo một con xúc xắc cân đối và đồng chất 6 lần liên tiếp. Xác suất để mặt 6 chấm xuất hiện đúng 2 lần là:",
        "options": [
          "C(6, 2) × (1/6)² × (5/6)⁴",
          "C(6, 2) × (1/6)⁴ × (5/6)²",
          "(1/6)² × (5/6)⁴",
          "C(6, 2) × (1/6)²"
        ],
        "answer": 0,
        "explain": "Với n = 6, p = 1/6, k = 2: P(X = 2) = C(6, 2) × (1/6)² × (1 − 1/6)⁶⁻² = C(6, 2) × (1/6)² × (5/6)⁴."
      },
      {
        "q": "Cho biến ngẫu nhiên X ~ B(100; 0,2). Phương sai V(X) của X bằng:",
        "options": [
          "20",
          "16",
          "4",
          "80"
        ],
        "answer": 1,
        "explain": "V(X) = n × p × (1 − p) = 100 × 0,2 × (1 − 0,2) = 100 × 0,2 × 0,8 = 16."
      }
    ]
  },
  {
    "id": 3,
    "chuyenDe": 2,
    "chuyenDeTitle": "Chuyên đề 2. Ứng dụng Toán học để giải quyết một số bài toán tối ưu",
    "title": "Bài 3. Vận dụng hệ bất phương trình bậc nhất hai ẩn để giải quyết một số bài toán quy hoạch tuyến tính",
    "badge": "Bài 3 • CĐ2",
    "tagColor": "blue",
    "readTime": "18 phút",
    "target": "Mô hình hóa bài toán tối ưu hai biến thực tế; thiết lập hàm mục tiêu F(x, y) = Ax + By và hệ bất phương trình ràng buộc; biểu diễn miền nghiệm đa giác trên mặt phẳng tọa độ; vận dụng Định lí điểm cực biên để tìm phương án tối ưu.",
    "sections": [
      {
        "heading": "1. Mô hình Quy hoạch tuyến tính hai biến và Hàm mục tiêu",
        "cards": [
          {
            "title": "Cấu trúc bài toán Quy hoạch tuyến tính (LP)",
            "points": [
              "<strong>Biến quyết định:</strong> Hai đại lượng x và y cần tìm (ví dụ: số tấn sản phẩm loại I và loại II; diện tích trồng lúa và ngô; số chuyến xe tải loại A và loại B). Thường có điều kiện không âm: x ≥ 0, y ≥ 0.",
              "<strong>Hệ ràng buộc (Constraints):</strong> Các giới hạn về nguồn lực (nguyên vật liệu, giờ công lao động, công suất máy móc, định mức vốn) được biểu diễn bằng hệ bất phương trình bậc nhất hai ẩn: aᵢx + bᵢy ≤ cᵢ (hoặc ≥ cᵢ).",
              "<strong>Hàm mục tiêu (Objective Function):</strong> Đại lượng cần tối ưu hóa (cực đại hóa doanh thu/lợi nhuận hoặc cực tiểu hóa chi phí/thời gian): <strong>F(x, y) = Ax + By</strong> (hoặc Ax + By + C)."
            ]
          },
          {
            "title": "Định lí điểm cực biên (Extreme Point Theorem)",
            "points": [
              "<strong>Nội dung định lí:</strong> Nếu bài toán quy hoạch tuyến tính có nghiệm tối ưu và miền nghiệm của hệ ràng buộc là một đa giác lồi (miền bị chặn), thì giá trị lớn nhất (hoặc nhỏ nhất) của hàm mục tiêu F(x, y) luôn đạt được tại ít nhất một đỉnh (điểm cực biên) của đa giác miền nghiệm đó.",
              "<strong>Trường hợp vô số nghiệm tối ưu:</strong> Nếu đường mức F(x, y) = m song song và trùng với một cạnh của đa giác miền nghiệm thì mọi điểm nằm trên đoạn thẳng nối hai đỉnh đó đều là phương án tối ưu.",
              "<strong>Miền không bị chặn:</strong> Cần xét hướng của vector gradient hoặc khảo sát chiều tăng/giảm của F(x, y); bài toán có thể không tồn tại giá trị tối ưu hữu hạn."
            ]
          }
        ]
      },
      {
        "heading": "2. Quy trình 7 bước giải bài toán tối ưu thực tế",
        "cards": [
          {
            "title": "Các bước thực hiện chuẩn mực",
            "points": [
              "<strong>Bước 1 - Chọn biến:</strong> Gọi x, y là các đại lượng cần tìm; ghi rõ đơn vị và điều kiện thực tế (x, y ≥ 0; x, y ∈ ℕ nếu là số nguyên).",
              "<strong>Bước 2 - Lập hàm mục tiêu:</strong> Thiết lập biểu thức F(x, y) = Ax + By cần tìm Max hoặc Min.",
              "<strong>Bước 3 - Lập hệ bất phương trình ràng buộc:</strong> Chuyển đổi toàn bộ giới hạn nguồn lực của đề bài thành hệ bất phương trình.",
              "<strong>Bước 4 - Vẽ miền nghiệm:</strong> Vẽ các đường thẳng biên trên hệ trục tọa độ Oxy, gạch bỏ các nửa mặt phẳng không thỏa mãn để xác định miền nghiệm chung.",
              "<strong>Bước 5 - Tìm tọa độ các đỉnh:</strong> Giải các hệ phương trình tương ứng giao điểm của từng cặp đường biên để tìm tọa độ các đỉnh A, B, C, D...",
              "<strong>Bước 6 - Tính và so sánh giá trị:</strong> Tính giá trị F tại từng đỉnh; so sánh để chọn ra giá trị lớn nhất (hoặc nhỏ nhất).",
              "<strong>Bước 7 - Kết luận & Diễn giải thực tế:</strong> Nêu rõ phương án sản xuất tối ưu (x, y) tương ứng với giá trị tối ưu của mục tiêu."
            ]
          },
          {
            "title": "Lưu ý kiểm tra điều kiện nguyên và ý nghĩa kinh tế",
            "points": [
              "<strong>Nghiệm nguyên:</strong> Nếu bài toán yêu cầu x, y phải là số nguyên (như số lượng máy móc, số xe, số người) mà đỉnh đa giác là phân số, ta cần kiểm tra các điểm nguyên nằm lân cận bên trong miền nghiệm để chọn điểm tối ưu nhất.",
              "<strong>Độ nhạy nguồn lực:</strong> Phân tích xem nguồn lực nào đã bị dùng hết (nằm trên đường biên tích cực) và nguồn lực nào còn dư thừa để giúp doanh nghiệp tối ưu chi phí."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Trong bài toán quy hoạch tuyến tính với miền nghiệm là miền đa giác tứ giác ABCD có tọa độ A(0; 0), B(0; 4), C(3; 2), D(4; 0). Hàm mục tiêu F(x, y) = 3x + 2y đạt giá trị lớn nhất tại điểm nào?",
        "options": [
          "Điểm A(0; 0)",
          "Điểm B(0; 4)",
          "Điểm C(3; 2)",
          "Điểm D(4; 0)"
        ],
        "answer": 2,
        "explain": "Tính giá trị F tại các đỉnh: F(A) = 0; F(B) = 3(0) + 2(4) = 8; F(C) = 3(3) + 2(2) = 13; F(D) = 3(4) + 2(0) = 12. Vậy F lớn nhất bằng 13 tại đỉnh C(3; 2)."
      },
      {
        "q": "Theo định lí điểm cực biên của quy hoạch tuyến tính, nếu miền nghiệm của hệ bất phương trình ràng buộc là một đa giác lồi bị chặn thì giá trị tối ưu của hàm mục tiêu F(x, y) = Ax + By luôn đạt tại:",
        "options": [
          "Tâm đối xứng của đa giác",
          "Trọng tâm của đa giác",
          "Ít nhất một đỉnh (điểm cực biên) của đa giác miền nghiệm",
          "Một điểm ngẫu nhiên nằm sâu trong miền nghiệm"
        ],
        "answer": 2,
        "explain": "Định lí điểm cực biên khẳng định giá trị tối ưu của hàm tuyến tính trên tập lồi đa diện luôn đạt được tại ít nhất một đỉnh cực biên của tập đó."
      },
      {
        "q": "Nếu đường mức của hàm mục tiêu F(x, y) = c song song và trùng khít với một cạnh biên của đa giác miền nghiệm thì bài toán quy hoạch tuyến tính có:",
        "options": [
          "Duy nhất 1 nghiệm tối ưu",
          "Đúng 2 nghiệm tối ưu",
          "Vô số phương án tối ưu dọc theo cạnh biên đó",
          "Không có nghiệm tối ưu"
        ],
        "answer": 2,
        "explain": "Khi đường mức trùng với một cạnh của miền nghiệm thì mọi điểm nằm trên đoạn thẳng nối 2 đỉnh của cạnh đó đều cho cùng giá trị tối ưu, do đó có vô số phương án tối ưu."
      }
    ]
  },
  {
    "id": 4,
    "chuyenDe": 2,
    "chuyenDeTitle": "Chuyên đề 2. Ứng dụng Toán học để giải quyết một số bài toán tối ưu",
    "title": "Bài 4. Vận dụng đạo hàm để giải quyết một số bài toán tối ưu",
    "badge": "Bài 4 • CĐ2",
    "tagColor": "blue",
    "readTime": "18 phút",
    "target": "Mô hình hóa bài toán thực tế thành hàm số một biến f(x) trên đoạn [a, b] hoặc khoảng (a, b); sử dụng công cụ đạo hàm f'(x) để khảo sát cực trị và tìm GTLN, GTNN; giải quyết bài toán kinh tế (doanh thu, lợi nhuận, chi phí biên) và bài toán hình học quỹ đạo.",
    "sections": [
      {
        "heading": "1. Phương pháp Tối ưu hóa một biến bằng Đạo hàm",
        "cards": [
          {
            "title": "Quy trình giải bài toán tối ưu hóa hình học & thực tiễn",
            "points": [
              "<strong>Bước 1 - Thiết lập hàm mục tiêu:</strong> Chọn một đại lượng biến thiên làm biến độc lập x (kèm đơn vị); xác định tập xác định hoặc khoảng/đoạn khảo sát D dựa trên điều kiện hình học/thực tế (ví dụ chiều dài x > 0).",
              "<strong>Bước 2 - Biểu diễn đại lượng cần tối ưu:</strong> Thiết lập công thức hàm số f(x) mô tả đại lượng cần tìm Max hoặc Min (thể tích, diện tích, chi phí, thời gian).",
              "<strong>Bước 3 - Tính đạo hàm f'(x):</strong> Tìm nghiệm của phương trình f'(x) = 0 và các điểm mà tại đó đạo hàm không xác định nằm trong miền D.",
              "<strong>Bước 4 - Khảo sát và kết luận:</strong> Lập bảng biến thiên hoặc tính giá trị tại các điểm tới hạn và các đầu mút biên để xác định GTLN, GTNN."
            ]
          },
          {
            "title": "Bài toán đường đi chèo thuyền và đi bộ ven biển",
            "points": [
              "<strong>Bối cảnh bài toán:</strong> Người xuất phát từ điểm A trên biển muốn đến điểm B trên bờ trong thời gian ngắn nhất. Vận tốc chèo thuyền là v₁ (chậm hơn), vận tốc chạy bộ trên bờ là v₂ (nhanh hơn).",
              "<strong>Mô hình hóa:</strong> Gọi P là hình chiếu vuông góc của A lên bờ biển; Q là điểm cập bờ cần tìm; đặt x = PQ. Khi đó quãng đường chèo thuyền là AQ = √(h² + x²); quãng đường chạy bộ là QB = d − x.",
              "<strong>Hàm tổng thời gian:</strong> T(x) = AQ / v₁ + QB / v₂ = √(h² + x²) / v₁ + (d − x) / v₂.",
              "<strong>Tìm nghiệm tối ưu:</strong> T'(x) = x / [v₁ √(h² + x²)] − 1 / v₂ = 0 ⇒ sin α₁ / v₁ = 1 / v₂ (tương đương định luật khúc xạ ánh sáng Snell–Descartes!)."
            ]
          }
        ]
      },
      {
        "heading": "2. Các bài toán Tối ưu trong Kinh tế học",
        "cards": [
          {
            "title": "Hệ thống các hàm kinh tế then chốt",
            "points": [
              "<strong>Hàm chi phí C(x):</strong> Tổng chi phí để sản xuất x đơn vị sản phẩm; <strong>Chi phí biên C'(x):</strong> Xấp xỉ chi phí gia tăng để sản xuất thêm 1 đơn vị sản phẩm tiếp theo.",
              "<strong>Hàm cầu p(x):</strong> Mức giá bán trên một đơn vị sản phẩm khi lượng bán là x (thường giảm khi sản lượng x tăng).",
              "<strong>Hàm doanh thu R(x):</strong> <strong>R(x) = x · p(x)</strong>; <strong>Doanh thu biên R'(x):</strong> Doanh thu tăng thêm khi bán thêm 1 sản phẩm.",
              "<strong>Hàm lợi nhuận Π(x):</strong> <strong>Π(x) = R(x) − C(x)</strong>; <strong>Lợi nhuận biên Π'(x) = R'(x) − C'(x)</strong>.",
              "<strong>Chi phí trung bình:</strong> c(x) = C(x) / x. Chi phí trung bình đạt cực tiểu khi c'(x) = 0 ⇔ C'(x) = c(x) (chi phí biên bằng chi phí trung bình)."
            ]
          },
          {
            "title": "Nguyên lí tối đa hóa lợi nhuận",
            "points": [
              "<strong>Điều kiện tối ưu lợi nhuận:</strong> Lợi nhuận Π(x) đạt cực đại tại sản lượng x* khi: <strong>Π'(x*) = 0 ⇔ R'(x*) = C'(x*)</strong>.",
              "<strong>Ý nghĩa kinh tế:</strong> Doanh nghiệp nên tiếp tục mở rộng sản xuất chừng nào doanh thu tăng thêm (R') còn lớn hơn chi phí bỏ ra thêm (C'). Khi R' = C', lợi nhuận đạt đỉnh cao nhất.",
              "<strong>Xử lí nghiệm nguyên:</strong> Vì sản lượng x phải là số nguyên dương, nếu x* là số lẻ/phân số, ta so sánh lợi nhuận tại hai số nguyên lân cận ⌊x*⌋ và ⌈x*⌉ để chọn sản lượng tối ưu nhất."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một doanh nghiệp có hàm tổng doanh thu R(x) = 1200x − 2x² và hàm tổng chi phí C(x) = x² + 300x + 1000 (x là số sản phẩm). Mức sản lượng x để doanh nghiệp đạt lợi nhuận tối đa là:",
        "options": [
          "x = 100",
          "x = 150",
          "x = 200",
          "x = 300"
        ],
        "answer": 1,
        "explain": "Hàm lợi nhuận Π(x) = R(x) − C(x) = −3x² + 900x − 1000. Đạo hàm: Π'(x) = −6x + 900 = 0 ⇒ x = 150 sản phẩm. Do hệ số a = −3 < 0 nên lợi nhuận đạt cực đại tại x = 150."
      },
      {
        "q": "Trong kinh tế học, lợi nhuận của doanh nghiệp đạt giá trị cực đại khi đại lượng nào sau đây xảy ra?",
        "options": [
          "Chi phí sản xuất bằng 0",
          "Doanh thu biên bằng Chi phí biên (R' = C')",
          "Doanh thu biên đạt giá trị cực đại",
          "Giá bán sản phẩm đạt mức cao nhất"
        ],
        "answer": 1,
        "explain": "Điều kiện cần để tối đa hóa lợi nhuận Π(x) = R(x) − C(x) là Π'(x) = 0 ⇔ R'(x) = C'(x) (doanh thu biên bằng chi phí biên)."
      },
      {
        "q": "Người ta muốn uốn một đoạn dây thép dài 40 m thành một hình chữ nhật có diện tích lớn nhất. Chiều dài và chiều rộng của hình chữ nhật đó lần lượt là:",
        "options": [
          "12 m và 8 m",
          "15 m và 5 m",
          "10 m và 10 m (hình vuông)",
          "14 m và 6 m"
        ],
        "answer": 2,
        "explain": "Nửa chu vi x + y = 20 ⇒ y = 20 − x. Diện tích S(x) = x(20 − x) = −x² + 20x. S'(x) = −2x + 20 = 0 ⇒ x = 10 m, y = 10 m (hình vuông có diện tích lớn nhất bằng 100 m²)."
      }
    ]
  },
  {
    "id": 5,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3. Ứng dụng Toán học trong một số vấn đề liên quan đến tài chính",
    "title": "Bài 5. Tiền tệ. Lãi suất",
    "badge": "Bài 5 • CĐ3",
    "tagColor": "amber",
    "readTime": "17 phút",
    "target": "Hiểu bản chất tiền tệ, lạm phát và sức mua; phân biệt lãi đơn và lãi kép; công thức tính lãi kép ghép lãi n kì trong năm; công thức tính lãi suất thực tế sau lạm phát; giải các bài toán ngược tìm thời gian gửi và lãi suất danh nghĩa.",
    "sections": [
      {
        "heading": "1. Tiền tệ, Lạm phát và Lãi suất thực tế",
        "cards": [
          {
            "title": "Bản chất tiền tệ và tác động của lạm phát",
            "points": [
              "<strong>Bản chất tiền tệ:</strong> Là phương tiện thanh toán, thước đo giá trị và phương tiện tích lũy được xã hội thừa nhận chung trong lưu thông hàng hóa và dịch vụ.",
              "<strong>Lạm phát (Inflation):</strong> Là sự gia tăng liên tục của mặt bằng giá chung theo thời gian, dẫn đến sự suy giảm sức mua của đồng tiền.",
              "<strong>Sức mua quy đổi sau t năm:</strong> Nếu tỉ lệ lạm phát bình quân hằng năm là g (dưới dạng thập phân), thì sức mua tương đương của số tiền gốc P sau t năm là: <strong>P_t = P · (1 − g)ᵗ</strong>.",
              "<strong>Công thức Fisher tính Lãi suất thực:</strong> Với lãi suất danh nghĩa là r và lạm phát là g, lãi suất thực tế r_thực được tính chuẩn xác theo: <strong>1 + r_thực = (1 + r) / (1 + g) ⇒ r_thực = (1 + r)/(1 + g) − 1</strong>. Khi g nhỏ, có thể dùng công thức gần đúng: <strong>r_thực ≈ r − g</strong>."
            ]
          },
          {
            "title": "Mô hình Lãi đơn (Simple Interest)",
            "points": [
              "<strong>Đặc điểm:</strong> Tiền lãi của mỗi kì luôn luôn chỉ được tính trên số vốn gốc P ban đầu, tiền lãi không được cộng dồn vào gốc để tính lãi cho các kì tiếp theo.",
              "<strong>Số tiền lãi sau t năm:</strong> <strong>I = P · r · t</strong>.",
              "<strong>Tổng số tiền nhận được (Cả gốc lẫn lãi):</strong> <strong>A = P + I = P · (1 + r · t)</strong>.",
              "<strong>Phạm vi áp dụng:</strong> Thường áp dụng cho các khoản vay mượn ngắn hạn, vay tiêu dùng dân sự, cầm đồ hoặc kì hạn dưới 1 năm."
            ]
          }
        ]
      },
      {
        "heading": "2. Mô hình Lãi kép và Bài toán Thời gian gửi tiền",
        "cards": [
          {
            "title": "Công thức Lãi kép tổng quát (Compound Interest)",
            "points": [
              "<strong>Nguyên lí 'Lãi mẹ đẻ lãi con':</strong> Sau mỗi kì ghép lãi, tiền lãi sinh ra được tự động nhập vào vốn gốc để tính lãi cho kì kế tiếp.",
              "<strong>Công thức ghép lãi n lần mỗi năm:</strong> Số tiền tích lũy A sau t năm gửi vốn P với lãi suất danh nghĩa r/năm được ghép lãi n kì/năm là: <strong>A = P · (1 + r/n)ⁿᵗ</strong>.",
              "<strong>Các kì ghép lãi phổ biến:</strong> Hằng năm (n = 1); Nửa năm (n = 2); Quý (n = 4); Tháng (n = 12); Ngày (n = 365). Cùng một lãi suất r, tần suất ghép lãi n càng dày thì số tiền A thu được càng lớn."
            ]
          },
          {
            "title": "Các bài toán biến đổi ngược",
            "points": [
              "<strong>Tìm vốn gốc ban đầu (Giá trị hiện tại PV):</strong> P = A / (1 + r/n)ⁿᵗ = A · (1 + r/n)⁻ⁿᵗ.",
              "<strong>Tìm số kì gửi N = n·t:</strong> N = ln(A / P) / ln(1 + r/n). Nếu đề bài hỏi sau bao nhiêu kì để số tiền đạt ít nhất A, ta luôn phải làm tròn lên số nguyên kế tiếp.",
              "<strong>Tìm lãi suất danh nghĩa r:</strong> r = n · [(A / P)^(1 / (nt)) − 1].",
              "<strong>Quy tắc 72 nhẩm nhanh thời gian gấp đôi vốn:</strong> Số năm để nhân đôi số tiền gốc xấp xỉ bằng t ≈ 72 / (r%), giúp nhà đầu tư ước lượng nhanh hiệu quả sinh lời."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một người gửi 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo thể thức lãi kép kì hạn 1 năm. Sau 3 năm, tổng số tiền cả gốc và lãi người đó nhận được là:",
        "options": [
          "118,00 triệu đồng",
          "119,10 triệu đồng",
          "120,50 triệu đồng",
          "112,36 triệu đồng"
        ],
        "answer": 1,
        "explain": "A = P × (1 + r)ᵗ = 100 × (1 + 0,06)³ = 100 × 1,191016 ≈ 119,10 triệu đồng."
      },
      {
        "q": "Nếu lãi suất danh nghĩa của ngân hàng là 8%/năm và tỉ lệ lạm phát bình quân là 3%/năm thì lãi suất thực tế xấp xỉ là:",
        "options": [
          "11%/năm",
          "5%/năm",
          "2,67%/năm",
          "24%/năm"
        ],
        "answer": 1,
        "explain": "Theo công thức gần đúng của Fisher: r_thực ≈ r − g = 8% − 3% = 5%/năm. (Công thức chính xác: (1+0,08)/(1+0,03) − 1 ≈ 4,85%/năm)."
      },
      {
        "q": "Điểm khác biệt cốt lõi giữa phương thức lãi kép so với lãi đơn là:",
        "options": [
          "Lãi kép chỉ áp dụng cho kì hạn dưới 1 tháng",
          "Tiền lãi của kì trước được gộp vào vốn gốc để tính lãi cho kì sau",
          "Lãi suất lãi kép luôn cố định không đổi",
          "Lãi kép không bị ảnh hưởng bởi lạm phát"
        ],
        "answer": 1,
        "explain": "Bản chất của lãi kép là lãi sinh ra ở cuối mỗi kì được tự động nhập vào vốn gốc để tiếp tục sinh lãi ở các kì tiếp theo ('lãi mẹ đẻ lãi con')."
      }
    ]
  },
  {
    "id": 6,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3. Ứng dụng Toán học trong một số vấn đề liên quan đến tài chính",
    "title": "Bài 6. Tín dụng. Vay nợ",
    "badge": "Bài 6 • CĐ3",
    "tagColor": "amber",
    "readTime": "17 phút",
    "target": "Nắm vững cơ chế thẻ tín dụng, chu kì miễn lãi và cách tính lãi theo dư nợ thực tế; công thức trả nợ góp đều định kì cuối mỗi kì; lập kế hoạch trả nợ vay mua nhà, mua xe; nhận thức trách nhiệm tín dụng cá nhân (điểm tín dụng CIC).",
    "sections": [
      {
        "heading": "1. Thẻ Tín dụng và Cách tính Lãi trên Dư nợ",
        "cards": [
          {
            "title": "Cơ chế hoạt động của thẻ tín dụng (Credit Card)",
            "points": [
              "<strong>Bản chất:</strong> Chi tiêu trước, trả tiền sau trong hạn mức tín dụng do ngân hàng cấp. Khác với thẻ ghi nợ (Debit Card) là chi tiêu trên số tiền thực có trong tài khoản.",
              "<strong>Chu kì sao kê & Thời gian miễn lãi:</strong> Thường kéo dài từ 45 đến 55 ngày tính từ đầu kì thanh toán đến ngày đến hạn thanh toán (Due Date). Nếu thanh toán toàn bộ 100% dư nợ trước hạn, khách hàng được miễn lãi hoàn toàn.",
              "<strong>Hệ quả khi không trả hết dư nợ:</strong> Sẽ bị tính lãi trên toàn bộ dư nợ kể từ ngày giao dịch, cộng thêm phí phạt trả chậm (Late Payment Fee) và tiền phạt thanh toán tối thiểu.",
              "<strong>Rút tiền mặt từ thẻ tín dụng:</strong> Thường bị tính phí rút tiền rất cao (3%–5%) và bị tính lãi suất ngay từ thời điểm rút (không được áp dụng thời gian miễn lãi)."
            ]
          },
          {
            "title": "Phương pháp tính lãi theo dư nợ thực tế từng ngày",
            "points": [
              "<strong>Quy tắc chia đoạn dư nợ:</strong> Chia chu kì thành các khoảng thời gian mà số dư nợ không thay đổi; tính số ngày thực tế của từng khoảng.",
              "<strong>Công thức tính lãi từng đoạn:</strong> <strong>Tiền lãi = (Dư nợ thực tế) × (Lãi suất năm / 365) × (Số ngày duy trì số dư)</strong>.",
              "<strong>Tổng lãi phát sinh:</strong> Bằng tổng tiền lãi của các đoạn cộng lại.",
              "<strong>Khuyến nghị tài chính:</strong> Luôn thanh toán toàn bộ 100% dư nợ sao kê mỗi tháng; tuyệt đối không chỉ đóng mức tối thiểu (Minimum Payment) vì mức này chỉ trả được một phần tiền lãi, nợ gốc gần như giữ nguyên."
            ]
          }
        ]
      },
      {
        "heading": "2. Mô hình Vay trả góp đều (Amortization Loan)",
        "cards": [
          {
            "title": "Công thức tính khoản trả góp đều cuối mỗi kì",
            "points": [
              "<strong>Bài toán:</strong> Khách hàng vay số vốn ban đầu V, cam kết trả góp đều đặn một số tiền cố định P vào cuối mỗi kì trong suốt n kì, với lãi suất mỗi kì là i.",
              "<strong>Công thức khoản trả đều P:</strong> <strong>P = V · i / [1 − (1 + i)⁻ⁿ]</strong>.",
              "<strong>Cấu trúc khoản trả P:</strong> Trong mỗi kì thanh toán, P bao gồm hai phần: <strong>P = (Tiền trả lãi) + (Tiền trả gốc)</strong>. Tiền lãi tính trên dư nợ còn lại của kì đó; phần còn lại của P dùng để khấu trừ vào nợ gốc.",
              "<strong>Xu hướng diễn biến:</strong> Ở các kì đầu, tiền lãi chiếm tỉ trọng lớn; càng về các kì cuối, dư nợ giảm dần nên tiền lãi giảm mạnh, tiền trả nợ gốc tăng dần."
            ]
          },
          {
            "title": "Hồ sơ tín dụng và trách nhiệm người đi vay",
            "points": [
              "<strong>Hệ thống chấm điểm tín dụng CIC:</strong> Ghi nhận toàn bộ lịch sử thanh toán nợ của cá nhân. Trả nợ đúng hạn giúp duy trì nhóm nợ chuẩn (Nhóm 1), dễ dàng tiếp cận các khoản vay ưu đãi trong tương lai.",
              "<strong>Hậu quả của nợ xấu (Nhóm 2–5):</strong> Bị phạt lãi suất quá hạn (thường bằng 150% lãi suất thông thường), bị từ chối vay vốn tại mọi tổ chức tín dụng trong 3–5 năm, ảnh hưởng nghiêm trọng đến uy tín tài chính.",
              "<strong>Nguyên tắc vàng khi vay mượn:</strong> Tổng số tiền trả nợ hằng tháng không nên vượt quá 35%–40% tổng thu nhập hàng tháng để bảo đảm an toàn sinh hoạt gia đình."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Công thức tính số tiền trả góp đều cố định P ở cuối mỗi tháng cho khoản vay ban đầu V, lãi suất mỗi tháng i, trong thời gian n tháng là:",
        "options": [
          "P = V · i / [1 − (1 + i)⁻ⁿ]",
          "P = V · (1 + i)ⁿ / n",
          "P = V · [1 − (1 + i)⁻ⁿ] / i",
          "P = (V + V · i · n) / n"
        ],
        "answer": 0,
        "explain": "Đây là công thức niên kim trả dần (Amortization): P = V · i / [1 − (1 + i)⁻ⁿ]."
      },
      {
        "q": "Trong phương thức vay trả góp đều cuối mỗi kì, theo thời gian các kì tiếp theo, thành phần nào trong số tiền trả P sẽ có xu hướng giảm dần?",
        "options": [
          "Tiền trả nợ gốc",
          "Tiền trả lãi phát sinh trong kì",
          "Tổng số tiền P phải nộp",
          "Lãi suất danh nghĩa của ngân hàng"
        ],
        "answer": 1,
        "explain": "Vì dư nợ gốc giảm dần sau mỗi kì nên tiền lãi tính trên dư nợ thực tế sẽ giảm dần, trong khi phần tiền hoàn trả nợ gốc sẽ tăng dần."
      },
      {
        "q": "Để bảo đảm an toàn tài chính cá nhân, tỉ lệ tổng số tiền trả nợ vay hàng tháng so với tổng thu nhập hàng tháng không nên vượt quá ngưỡng nào?",
        "options": [
          "10% – 15%",
          "35% – 40%",
          "60% – 70%",
          "85% – 90%"
        ],
        "answer": 1,
        "explain": "Các chuyên gia tài chính khuyến nghị tỉ lệ chi trả nợ hàng tháng không nên vượt quá 35% – 40% thu nhập để tránh rơi vào bẫy mất khả năng thanh toán khi có biến cố."
      }
    ]
  },
  {
    "id": 7,
    "chuyenDe": 3,
    "chuyenDeTitle": "Chuyên đề 3. Ứng dụng Toán học trong một số vấn đề liên quan đến tài chính",
    "title": "Bài 7. Đầu tư tài chính. Lập kế hoạch tài chính cá nhân",
    "badge": "Bài 7 • CĐ3",
    "tagColor": "amber",
    "readTime": "18 phút",
    "target": "Nắm vững khái niệm niên kim (Annuity); công thức tính giá trị tương lai (FV) và giá trị hiện tại (PV) của chuỗi tiền tệ đều đặn; hệ thức truy hồi tích lũy vốn; quy trình lập kế hoạch tài chính cá nhân và áp dụng quy tắc phân bổ 80/10/10.",
    "sections": [
      {
        "heading": "1. Niên kim: Giá trị Tương lai (FV) và Giá trị Hiện tại (PV)",
        "cards": [
          {
            "title": "Khái niệm Niên kim và Giá trị tương lai (FV)",
            "points": [
              "<strong>Định nghĩa Niên kim:</strong> Là một chuỗi các khoản tiền có giá trị bằng nhau P được gửi vào (hoặc rút ra) định kì đều đặn sau những khoảng thời gian bằng nhau.",
              "<strong>Niên kim thông thường (Cuối kì):</strong> Khoản tiền P được gửi vào <em>cuối</em> mỗi kì. Tổng số tiền tích lũy được ngay sau khoản gửi thứ n là: <strong>A = P · [(1 + i)ⁿ − 1] / i</strong>.",
              "<strong>Niên kim đầu kì:</strong> Khoản tiền P được gửi vào <em>đầu</em> mỗi kì. Vì mỗi khoản tiền đều có thêm 1 kì sinh lãi nên giá trị tương lai được nhân thêm thừa số (1 + i): <strong>A_đầu kì = P · [(1 + i)ⁿ − 1] / i · (1 + i)</strong>.",
              "<strong>Ứng dụng:</strong> Kế hoạch gửi tiết kiệm tích lũy định kì hằng tháng để mua nhà, lập quỹ du học cho con hoặc quỹ hưu trí."
            ]
          },
          {
            "title": "Giá trị Hiện tại của Niên kim (PV - Present Value)",
            "points": [
              "<strong>Ý nghĩa:</strong> Là tổng giá trị quy về thời điểm hiện tại của toàn bộ các dòng tiền đều P nhận được trong tương lai sau n kì với tỉ suất chiết khấu i mỗi kì.",
              "<strong>Công thức:</strong> <strong>PV = P · [1 − (1 + i)⁻ⁿ] / i</strong>.",
              "<strong>Ứng dụng so sánh phương án:</strong> Đánh giá việc nhận một khoản tiền thưởng trọn gói ngay bây giờ so với việc nhận tiền chia nhỏ đều đặn hàng năm trong suốt 20 năm."
            ]
          }
        ]
      },
      {
        "heading": "2. Hệ thức Truy hồi Tích lũy & Lập Kế hoạch Tài chính Cá nhân",
        "cards": [
          {
            "title": "Hệ thức truy hồi trong mô hình tích lũy tài chính",
            "points": [
              "<strong>Mô hình:</strong> Gọi Aₙ là số dư tài khoản ở cuối kì thứ n. Nếu vốn ban đầu là A₀, mỗi kì hưởng lãi suất i và cuối mỗi kì bổ sung thêm khoản tiền tiết kiệm P, ta có hệ thức truy hồi:",
              "<strong>Công thức truy hồi:</strong> <strong>A₀ = Vốn ban đầu; Aₙ = Aₙ₋₁ · (1 + i) + P (với n ≥ 1)</strong>.",
              "<strong>Nghiệm tổng quát:</strong> Aₙ = A₀ · (1 + i)ⁿ + P · [(1 + i)ⁿ − 1] / i. Cho phép tính trực tiếp số tiền sau n kì mà không cần bấm máy lặp từng bước."
            ]
          },
          {
            "title": "Quy trình 4 bước lập Kế hoạch Tài chính & Quy tắc 80/10/10",
            "points": [
              "<strong>Bước 1 - Xác định mục tiêu:</strong> Thiết lập các mục tiêu cụ thể, đo lường được (ngắn hạn: quỹ khẩn cấp 3–6 tháng; trung hạn: mua xe; dài hạn: mua nhà, hưu trí).",
              "<strong>Bước 2 - Thống kê thu nhập & chi phí:</strong> Theo dõi dòng tiền thực tế để biết chính xác tiền đang đi đâu.",
              "<strong>Bước 3 - Phân bổ ngân sách theo Quy tắc 80/10/10:</strong>",
              "• <strong>80% Thu nhập:</strong> Dành cho các nhu cầu thiết yếu hằng ngày (ăn uống, nhà ở, điện nước, học phí, y tế, trả nợ định kì).",
              "• <strong>10% Thu nhập:</strong> Dành cho chi tiêu linh hoạt, phát sinh, nâng cao đời sống cá nhân và giải trí lành mạnh.",
              "• <strong>10% Thu nhập:</strong> Tiết kiệm và đầu tư tích lũy bắt buộc (trả cho bản thân mình trước).",
              "<strong>Bước 4 - Thực hiện & Điều chỉnh định kì:</strong> Giám sát kỉ luật và điều chỉnh phân bổ ngân sách khi thu nhập hoặc hoàn cảnh sống thay đổi."
            ]
          }
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một người gửi đều đặn 5 triệu đồng vào cuối mỗi tháng vào tài khoản tiết kiệm với lãi suất 0,5%/tháng. Sau đúng 2 năm (24 tháng), tổng số tiền tích lũy được tính theo công thức nào?",
        "options": [
          "A = 5 · [(1 + 0,005)²⁴ − 1] / 0,005 (triệu đồng)",
          "A = 5 · (1 + 0,005)²⁴ (triệu đồng)",
          "A = 5 · 24 · (1 + 0,005) (triệu đồng)",
          "A = 5 · [1 − (1 + 0,005)⁻²⁴] / 0,005 (triệu đồng)"
        ],
        "answer": 0,
        "explain": "Đây là bài toán tính giá trị tương lai của niên kim thông thường (gửi cuối kì): A = P · [(1 + i)ⁿ − 1] / i với P = 5, i = 0,005 và n = 24."
      },
      {
        "q": "Theo quy tắc phân bổ ngân sách cá nhân 80/10/10 được giới thiệu trong SGK, phần trăm thu nhập tối thiểu nên dành riêng cho mục tiêu tiết kiệm và đầu tư dài hạn là:",
        "options": [
          "5%",
          "10%",
          "20%",
          "50%"
        ],
        "answer": 1,
        "explain": "Quy tắc 80/10/10 phân bổ: 80% cho chi tiêu thiết yếu, 10% cho chi tiêu linh hoạt/phát sinh, và 10% cho tiết kiệm/đầu tư tích lũy."
      },
      {
        "q": "Mỗi kì tài khoản có số dư ban đầu A₀, sinh lời theo lãi suất i và cuối mỗi kì được nộp thêm số tiền P. Hệ thức truy hồi xác định số dư Aₙ sau kì thứ n là:",
        "options": [
          "Aₙ = Aₙ₋₁ · (1 + i) + P",
          "Aₙ = (Aₙ₋₁ + P) · (1 + i)",
          "Aₙ = Aₙ₋₁ + P · i",
          "Aₙ = Aₙ₋₁ · i + P"
        ],
        "answer": 0,
        "explain": "Cuối kì, số tiền cũ Aₙ₋₁ sinh lãi thành Aₙ₋₁ · (1 + i), sau đó mới cộng thêm khoản nộp mới P, nên Aₙ = Aₙ₋₁ · (1 + i) + P."
      }
    ]
  }
];
