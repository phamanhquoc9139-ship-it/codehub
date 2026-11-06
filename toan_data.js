// toan_data.js - Dữ liệu chi tiết Khóa học Toán Lớp 5 (GDPT 2018)
// Đầy đủ 75 bài học qua 12 Chủ đề (Tập 1 & Tập 2) + Sổ tay Công thức Toán 5 + 25 câu Trạng Nguyên Toán Học 5
// Chuẩn hóa 5 phần mỗi bài: Kiến thức mới, Quy tắc/Công thức, Ví dụ minh họa, Dạng bài luyện tập, Vận dụng thực tế.

const topics = [
  {
    "id": 1,
    "book": 1,
    "name": "Chủ đề 1. Ôn tập và bổ sung (Bài 1–9)",
    "desc": "Số tự nhiên, phân số, hỗn số, phép tính phân số, hình học và đo lường.",
    "lessons": [
      {
        "num": 1,
        "topicId": 1,
        "title": "Bài 1. Ôn tập số tự nhiên và Các phép tính",
        "newKnowledge": "Đọc, viết, so sánh số tự nhiên theo các lớp (lớp đơn vị, lớp nghìn, lớp triệu, lớp tỉ). Nắm vững tính chất giao hoán, kết hợp của phép cộng và phép nhân; tính chất phân phối của phép nhân đối với phép cộng.",
        "formula": "a + b = b + a;   (a + b) + c = a + (b + c)\na × b = b × a;   (a × b) × c = a × (b × c)\na × (b + c) = a × b + a × c",
        "example": "Tính nhanh: 25 × 36 × 4 = (25 × 4) × 36 = 100 × 36 = 3 600.\n135 × 12 + 135 × 88 = 135 × (12 + 88) = 135 × 100 = 13 500.",
        "exercise": "Dạng 1: Đọc và viết số có nhiều chữ số theo lớp và hàng.\nDạng 2: Thực hiện đặt tính rồi tính 4 phép tính số tự nhiên.\nDạng 3: Tính bằng cách thuận tiện nhất dựa vào tính chất phép tính.",
        "practicalApp": "Một trường tiểu học có 1 250 học sinh, mỗi học sinh quyên góp 4 quyển vở giúp các bạn vùng bão lũ. Tổng số vở quyên góp được là: 1 250 × 4 = 5 000 (quyển vở).",
        "quiz": {
          "q": "Giá trị của biểu thức 48 × 19 + 48 × 81 là:",
          "options": [
            "4 800",
            "4 881",
            "4 819",
            "48 000"
          ],
          "ans": 0,
          "exp": "Áp dụng tính chất phân phối: 48 × (19 + 81) = 48 × 100 = 4 800."
        }
      },
      {
        "num": 2,
        "topicId": 1,
        "title": "Bài 2. Ôn tập phân số",
        "newKnowledge": "Phân số gồm tử số và mẫu số (mẫu số khác 0). Tính chất cơ bản của phân số: nhân hoặc chia cả tử số và mẫu số với cùng một số tự nhiên khác 0 được phân số bằng phân số đã cho. Rút gọn phân số về phân số tối giản.",
        "formula": "Rút gọn phân số: Chia cả tử và mẫu cho ước chung lớn nhất.\nQuy đồng mẫu số hai phân số: Tìm mẫu số chung (MSC), lấy MSC chia cho từng mẫu để tìm thừa số phụ rồi nhân với tử và mẫu tương ứng.",
        "example": "Rút gọn: 18/24 = (18 : 6) / (24 : 6) = 3/4.\nQuy đồng 2/3 và 3/5: MSC = 15. 2/3 = 10/15; 3/5 = 9/15. Vì 10/15 > 9/15 nên 2/3 > 3/5.",
        "exercise": "Dạng 1: Rút gọn phân số về tối giản.\nDạng 2: Quy đồng mẫu số và so sánh phân số.\nDạng 3: Sắp xếp các phân số theo thứ tự từ bé đến lớn.",
        "practicalApp": "Bạn Lan uống 1/3 chai nước, bạn Mai uống 2/5 chai nước cùng loại. Quy đồng: 1/3 = 5/15; 2/5 = 6/15. Vì 6/15 > 5/15 nên bạn Mai uống nhiều nước hơn bạn Lan.",
        "quiz": {
          "q": "Phân số 24/36 khi rút gọn về phân số tối giản là:",
          "options": [
            "2/3",
            "4/6",
            "6/9",
            "3/4"
          ],
          "ans": 0,
          "exp": "Chia cả tử và mẫu cho 12: 24 : 12 = 2; 36 : 12 = 3. Kết quả là 2/3."
        }
      },
      {
        "num": 3,
        "topicId": 1,
        "title": "Bài 3. Phân số thập phân",
        "newKnowledge": "Phân số thập phân là phân số có mẫu số là 10, 100, 1 000, 10 000... Một số phân số có thể chuyển thành phân số thập phân bằng cách nhân hoặc chia cả tử và mẫu với một số thích hợp để mẫu số trở thành 10, 100, 1 000...",
        "formula": "Mẫu số là 10, 100, 1 000... Ví dụ: 3/10; 25/100; 125/1 000.\nChuyển đổi: 3/5 = (3 × 2) / (5 × 2) = 6/10; 7/25 = (7 × 4) / (25 × 4) = 28/100.",
        "example": "Chuyển các phân số sau thành phân số thập phân:\na) 1/2 = 5/10.\nb) 3/4 = 75/100.\nc) 7/20 = 35/100.\nd) 18/200 = 9/100.",
        "exercise": "Dạng 1: Nhận diện phân số thập phân.\nDạng 2: Chuyển phân số thường thành phân số thập phân.\nDạng 3: Viết phân số thập phân dưới dạng số thập phân.",
        "practicalApp": "Trong một hộp có 20 viên bi, có 7 viên bi màu đỏ. Phân số chỉ số bi đỏ là 7/20 = 35/100 (chiếm 35/100 tổng số viên bi trong hộp).",
        "quiz": {
          "q": "Phân số nào dưới đây là phân số thập phân?",
          "options": [
            "15/100",
            "10/15",
            "100/37",
            "5/20"
          ],
          "ans": 0,
          "exp": "Phân số thập phân là phân số có mẫu số là 10, 100, 1 000... Vậy 15/100 là phân số thập phân."
        }
      },
      {
        "num": 4,
        "topicId": 1,
        "title": "Bài 4. Hỗn số",
        "newKnowledge": "Hỗn số gồm hai phần: phần nguyên và phần phân số. Phần phân số luôn nhỏ hơn 1. Đọc phần nguyên trước, đọc phần phân số sau nối bằng chữ 'và'. Chuyển hỗn số thành phân số: Tử số = Phần nguyên × Mẫu số + Tử số phần phân số; Mẫu số giữ nguyên.",
        "formula": "a b/c = (a × c + b) / c",
        "example": "Hỗn số 3 2/5 gồm phần nguyên là 3, phần phân số là 2/5.\nChuyển thành phân số: 3 2/5 = (3 × 5 + 2) / 5 = 17/5.",
        "exercise": "Dạng 1: Đọc và viết hỗn số theo hình vẽ mô tả.\nDạng 2: Chuyển hỗn số ra phân số và ngược lại.\nDạng 3: So sánh hai hỗn số.",
        "practicalApp": "Một bao gạo nặng 2 1/2 kg, mẹ mua thêm 1 1/2 kg gạo nếp. Tổng khối lượng gạo mẹ mua là: 2 1/2 + 1 1/2 = 4 (kg).",
        "quiz": {
          "q": "Hỗn số 4 3/8 chuyển thành phân số là:",
          "options": [
            "35/8",
            "32/8",
            "19/8",
            "24/8"
          ],
          "ans": 0,
          "exp": "Tử số = 4 × 8 + 3 = 35; mẫu số giữ nguyên là 8. Kết quả là 35/8."
        }
      },
      {
        "num": 5,
        "topicId": 1,
        "title": "Bài 5. Luyện tập về hỗn số",
        "newKnowledge": "Khi thực hiện phép tính cộng, trừ, nhân, chia hỗn số, ta có thể chuyển các hỗn số về dạng phân số rồi thực hiện phép tính như bình thường. Khi so sánh hai hỗn số có cùng phần nguyên, hỗn số nào có phần phân số lớn hơn thì hỗn số đó lớn hơn.",
        "formula": "So sánh hỗn số:\nNếu phần nguyên a > c thì a b/m > c d/n.\nNếu phần nguyên bằng nhau, so sánh phần phân số.",
        "example": "a) So sánh 3 2/7 và 2 5/7: Vì phần nguyên 3 > 2 nên 3 2/7 > 2 5/7.\nb) Tính: 1 1/2 + 2 1/3 = 3/2 + 7/3 = 9/6 + 14/6 = 23/6 = 3 5/6.",
        "exercise": "Dạng 1: Thực hiện 4 phép tính với hỗn số.\nDạng 2: Tìm x liên quan đến hỗn số.\nDạng 3: Bài toán giải có hỗn số.",
        "practicalApp": "Đoạn đường thứ nhất dài 3 1/4 km, đoạn đường thứ hai dài 2 3/4 km. Cả hai đoạn đường dài: 3 1/4 + 2 3/4 = 13/4 + 11/4 = 24/4 = 6 (km).",
        "quiz": {
          "q": "Kết quả của phép tính 2 1/3 × 1 1/2 là:",
          "options": [
            "7/2 (hay 3 1/2)",
            "2 1/6",
            "5/2",
            "3 1/6"
          ],
          "ans": 0,
          "exp": "2 1/3 = 7/3; 1 1/2 = 3/2. Tích = (7/3) × (3/2) = 21/6 = 7/2 = 3 1/2."
        }
      },
      {
        "num": 6,
        "topicId": 1,
        "title": "Bài 6. Luyện tập chung về phân số và Hỗn số",
        "newKnowledge": "Củng cố các kỹ năng tính toán phối hợp giữa số tự nhiên, phân số và hỗn số. Rèn luyện tư duy tính nhanh, rút gọn biểu thức trước khi nhân chia.",
        "formula": "Phân số nghịch đảo của a/b là b/a (a, b khác 0).\nChia hai phân số: a/b : c/d = a/b × d/c.",
        "example": "Tính: (3/4 + 1/2) : 5/8 = (3/4 + 2/4) : 5/8 = 5/4 × 8/5 = 2.",
        "exercise": "Dạng 1: Tính giá trị biểu thức phân số phức hợp.\nDạng 2: Tìm thành phần chưa biết (Tìm X).\nDạng 3: Bài toán giải bằng lời văn có nội dung thực tế.",
        "practicalApp": "Một tấm bìa hình chữ nhật có chiều dài 4/5 m, chiều rộng 1/2 m. Diện tích tấm bìa là: 4/5 × 1/2 = 4/10 = 2/5 (m²).",
        "quiz": {
          "q": "Tìm X biết: X : 3/5 = 5/6",
          "options": [
            "1/2",
            "25/18",
            "18/25",
            "2/3"
          ],
          "ans": 0,
          "exp": "X = 5/6 × 3/5 = 15/30 = 1/2."
        }
      },
      {
        "num": 7,
        "topicId": 1,
        "title": "Bài 7. Ôn tập hình học (Hình vuông, Hình chữ nhật, Hình bình hành, Hình thoi)",
        "newKnowledge": "Ôn lại các công thức tính chu vi và diện tích các hình đã học ở lớp 4: Hình vuông (cạnh a), Hình chữ nhật (dài a, rộng b), Hình bình hành (đáy a, chiều cao h), Hình thoi (hai đường chéo m và n).",
        "formula": "Hình vuông: P = a × 4;   S = a × a\nHình chữ nhật: P = (a + b) × 2;   S = a × b\nHình bình hành: S = a × h\nHình thoi: S = (m × n) : 2",
        "example": "Một hình thoi có độ dài hai đường chéo là 8 cm và 6 cm. Diện tích hình thoi là: S = (8 × 6) : 2 = 24 (cm²).",
        "exercise": "Dạng 1: Tính chu vi và diện tích hình vuông, chữ nhật, bình hành, thoi.\nDạng 2: Tìm kích thước khi biết diện tích hoặc chu vi.\nDạng 3: Bài toán ghép hình và chia hình.",
        "practicalApp": "Một mảnh vườn hình bình hành có đáy 25 m, chiều cao tương ứng là 14 m. Diện tích mảnh vườn là: 25 × 14 = 350 (m²).",
        "quiz": {
          "q": "Diện tích hình thoi có độ dài hai đường chéo m = 12 cm và n = 9 cm là:",
          "options": [
            "54 cm²",
            "108 cm²",
            "21 cm²",
            "42 cm²"
          ],
          "ans": 0,
          "exp": "S = (12 × 9) : 2 = 108 : 2 = 54 cm²."
        }
      },
      {
        "num": 8,
        "topicId": 1,
        "title": "Bài 8. Ôn tập đo lường (Độ dài và Khối lượng)",
        "newKnowledge": "Bảng đơn vị đo độ dài: km, hm, dam, m, dm, cm, mm. Mỗi đơn vị liền kề gấp hoặc kém nhau 10 lần.\nBảng đơn vị đo khối lượng: tấn, tạ, yến, kg, hg, dag, g. Mỗi đơn vị liền kề gấp hoặc kém nhau 10 lần.",
        "formula": "1 tấn = 10 tạ = 100 yến = 1 000 kg\n1 km = 10 hm = 100 dam = 1 000 m\n1 m = 10 dm = 100 cm = 1 000 mm",
        "example": "Đổi đơn vị:\na) 3 tấn 5 tạ = 35 tạ = 3 500 kg.\nb) 4 km 25 m = 4 025 m.\nc) 250 kg = 2 tạ 5 yến = 2,5 tạ.",
        "exercise": "Dạng 1: Chuyển đổi giữa các đơn vị đo lường đơn và kép.\nDạng 2: So sánh các số đo khối lượng, độ dài.\nDạng 3: Toán đố thực tế về vận chuyển hàng hóa, đo đạc đường sá.",
        "practicalApp": "Một xe tải chở 2 tấn 5 tạ gạo. Xe đã bốc dỡ được 8 tạ gạo xuống kho thứ nhất. Khối lượng gạo còn lại trên xe là: 25 tạ - 8 tạ = 17 tạ = 1 700 kg.",
        "quiz": {
          "q": "Số thích hợp điền vào chỗ chấm: 5 tấn 40 kg = ......... kg là:",
          "options": [
            "5 040 kg",
            "5 400 kg",
            "540 kg",
            "50 040 kg"
          ],
          "ans": 0,
          "exp": "5 tấn = 5 000 kg. Vậy 5 tấn 40 kg = 5 000 + 40 = 5 040 kg."
        }
      },
      {
        "num": 9,
        "topicId": 1,
        "title": "Bài 9. Luyện tập chung Chủ đề 1",
        "newKnowledge": "Tổng kết toàn bộ kiến thức chủ đề 1: Số tự nhiên, phân số, hỗn số, bảng đo lường và hình học. Rèn luyện kỹ năng giải các bài toán tổng hợp nhiều bước tính.",
        "formula": "Tổng hợp các công thức phân số, hỗn số, chu vi diện tích hình học phẳng đã học trong Chủ đề 1.",
        "example": "Tính: (1 1/2 + 2 1/3) × 6/23 = (3/2 + 7/3) × 6/23 = 23/6 × 6/23 = 1.",
        "exercise": "Dạng 1: Tính toán biểu thức số học.\nDạng 2: Giải bài toán có lời văn phối hợp nhiều đại lượng.\nDạng 3: Bài toán suy luận logic mở rộng.",
        "practicalApp": "Bác Nam lát sân hình chữ nhật dài 15 m, rộng 8 m bằng gạch vuông cạnh 40 cm. Diện tích sân: 15 × 8 = 120 m² = 1 200 000 cm². Diện tích 1 viên gạch: 40 × 40 = 1 600 cm². Số gạch cần là: 1 200 000 : 1 600 = 750 (viên gạch).",
        "quiz": {
          "q": "Giá trị của X thỏa mãn: X × 2 1/4 = 9 là:",
          "options": [
            "4",
            "2",
            "18",
            "8"
          ],
          "ans": 0,
          "exp": "2 1/4 = 9/4. X = 9 : 9/4 = 9 × 4/9 = 4."
        }
      }
    ]
  },
  {
    "id": 2,
    "book": 1,
    "name": "Chủ đề 2. Số thập phân (Bài 10–14)",
    "desc": "Đọc, viết, so sánh, làm tròn số thập phân.",
    "lessons": [
      {
        "num": 10,
        "topicId": 2,
        "title": "Bài 10. Khái niệm số thập phân",
        "newKnowledge": "Các phân số thập phân 1/10, 1/100, 1/1 000 được viết thành 0,1; 0,01; 0,001. Số thập phân gồm phần nguyên và phần thập phân ngăn cách bởi dấu phẩy. Chữ số bên trái dấu phẩy là phần nguyên, bên phải là phần thập phân.",
        "formula": "1/10 = 0,1;   1/100 = 0,01;   1/1 000 = 0,001\n5/10 = 0,5;   75/100 = 0,75;   125/1 000 = 0,125",
        "example": "Phân số 3/10 viết là 0,3 (đọc là: không phẩy ba).\nPhân số 85/100 viết là 0,85 (đọc là: không phẩy tám mươi lăm).\nHỗn số 2 5/10 viết là 2,5 (đọc là: hai phẩy năm).",
        "exercise": "Dạng 1: Viết phân số thập phân thành số thập phân và ngược lại.\nDạng 2: Đọc các số thập phân.\nDạng 3: Biểu diễn số đo đại lượng dưới dạng số thập phân.",
        "practicalApp": "Sợi dây dài 1 m 45 cm được viết dưới dạng số thập phân là 1,45 m (vì 45 cm = 45/100 m = 0,45 m).",
        "quiz": {
          "q": "Phân số thập phân 36/100 được viết dưới dạng số thập phân là:",
          "options": [
            "0,36",
            "3,6",
            "0,036",
            "36,0"
          ],
          "ans": 0,
          "exp": "36/100 = 0,36."
        }
      },
      {
        "num": 11,
        "topicId": 2,
        "title": "Bài 11. Hàng của số thập phân. Đọc, viết số thập phân",
        "newKnowledge": "Phần nguyên gồm các hàng: đơn vị, chục, trăm, nghìn... Phần thập phân gồm các hàng: phần mười, phần trăm, phần nghìn, phần chục nghìn... Muốn đọc (viết) số thập phân, ta đọc (viết) phần nguyên trước, dấu phẩy rồi đọc (viết) phần thập phân.",
        "formula": "Bảng các hàng: Trăm | Chục | Đơn vị , Phần mười | Phần trăm | Phần nghìn\nVí dụ: 375,842 = 300 + 70 + 5 + 0,8 + 0,04 + 0,002",
        "example": "Số 234,567:\nPhần nguyên: 2 trăm, 3 chục, 4 đơn vị.\nPhần thập phân: 5 phần mười, 6 phần trăm, 7 phần nghìn.\nĐọc là: Hai trăm ba mươi tư phẩy năm trăm sáu mươi bảy.",
        "exercise": "Dạng 1: Nêu giá trị theo vị trí của các chữ số trong số thập phân.\nDạng 2: Viết số thập phân khi biết cấu tạo các hàng.\nDạng 3: Viết số thập phân thành tổng các hàng.",
        "practicalApp": "Cân điện tử hiện con số 2,375 kg. Chữ số 7 nằm ở hàng phần trăm, biểu thị khối lượng 70 gam (hay 0,07 kg).",
        "quiz": {
          "q": "Số thập phân gồm 'Bảy đơn vị, năm phần mười và hai phần trăm' được viết là:",
          "options": [
            "7,52",
            "7,052",
            "75,2",
            "7,25"
          ],
          "ans": 0,
          "exp": "7 đơn vị + 5 phần mười (0,5) + 2 phần trăm (0,02) = 7,52."
        }
      },
      {
        "num": 12,
        "topicId": 2,
        "title": "Bài 12. Số thập phân bằng nhau",
        "newKnowledge": "Nếu viết thêm chữ số 0 vào bên phải phần thập phân của một số thập phân thì được một số thập phân bằng nó. Nếu một số thập phân có chữ số 0 ở tận cùng bên phải phần thập phân thì khi bỏ chữ số 0 đó đi, ta được một số thập phân bằng nó.",
        "formula": "0,9 = 0,90 = 0,900 = 0,9000\n15,400 = 15,40 = 15,4\n8 = 8,0 = 8,00",
        "example": "Viết thêm các chữ số 0 để các số thập phân sau có cùng 3 chữ số ở phần thập phân:\na) 4,5 → 4,500.\nb) 12,38 → 12,380.\nc) 7 → 7,000.",
        "exercise": "Dạng 1: Bỏ các chữ số 0 tận cùng để viết số thập phân gọn nhất.\nDạng 2: Thêm chữ số 0 để phần thập phân có số chữ số bằng nhau.\nDạng 3: Nhận diện các số thập phân bằng nhau.",
        "practicalApp": "Một gói bánh ghi trọng lượng tịnh 0,5 kg và một gói khác ghi 0,50 kg. Hai gói bánh đó có khối lượng hoàn toàn bằng nhau.",
        "quiz": {
          "q": "Số thập phân nào dưới đây bằng với số 4,8?",
          "options": [
            "4,800",
            "4,08",
            "40,8",
            "0,48"
          ],
          "ans": 0,
          "exp": "Viết thêm chữ số 0 vào tận cùng bên phải phần thập phân ta được số thập phân bằng nó: 4,8 = 4,800."
        }
      },
      {
        "num": 13,
        "topicId": 2,
        "title": "Bài 13. So sánh hai số thập phân",
        "newKnowledge": "Muốn so sánh hai số thập phân:\n1. So sánh các phần nguyên như so sánh hai số tự nhiên; số nào có phần nguyên lớn hơn thì số đó lớn hơn.\n2. Nếu phần nguyên bằng nhau, so sánh phần thập phân lần lượt từ hàng phần mười, hàng phần trăm, hàng phần nghìn... Đến hàng nào có chữ số lớn hơn thì số đó lớn hơn.",
        "formula": "Bước 1: So sánh phần nguyên.\nBước 2: Nếu phần nguyên bằng nhau, so sánh hàng phần mười → phần trăm → phần nghìn...",
        "example": "a) So sánh 12,7 và 9,99: Phần nguyên 12 > 9 nên 12,7 > 9,99.\nb) So sánh 84,52 và 84,519: Phần nguyên 84 = 84, hàng phần mười 5 = 5, hàng phần trăm 2 > 1 nên 84,52 > 84,519.",
        "exercise": "Dạng 1: Điền dấu >, <, = thích hợp vào chỗ chấm.\nDạng 2: Sắp xếp dãy số thập phân từ bé đến lớn hoặc ngược lại.\nDạng 3: Tìm chữ số x thích hợp để được số thập phân thỏa mãn điều kiện.",
        "practicalApp": "Trong hội thi điền kinh, vận động viên A chạy hết 11,48 giây, vận động viên B chạy hết 11,52 giây. Vì 11,48 < 11,52 nên vận động viên A về đích nhanh hơn và giành huy chương vàng.",
        "quiz": {
          "q": "Dãy số nào dưới đây được sắp xếp theo thứ tự từ bé đến lớn?",
          "options": [
            "5,38 < 5,4 < 5,42 < 6,1",
            "5,4 < 5,38 < 5,42 < 6,1",
            "6,1 < 5,42 < 5,4 < 5,38",
            "5,42 < 5,4 < 5,38 < 6,1"
          ],
          "ans": 0,
          "exp": "5,38 < 5,40 < 5,42 < 6,10."
        }
      },
      {
        "num": 14,
        "topicId": 2,
        "title": "Bài 14. Làm tròn số thập phân",
        "newKnowledge": "Quy tắc làm tròn số thập phân:\n- Tìm chữ số ở hàng làm tròn.\n- Nhìn sang chữ số ngay bên phải: nếu chữ số đó bé hơn 5 (0, 1, 2, 3, 4) thì giữ nguyên chữ số hàng làm tròn; nếu chữ số đó từ 5 trở lên (5, 6, 7, 8, 9) thì tăng chữ số hàng làm tròn thêm 1 đơn vị.\n- Bỏ toàn bộ các chữ số ở bên phải hàng làm tròn.",
        "formula": "Chữ số sau hàng làm tròn:\n< 5 → Giữ nguyên\n≥ 5 → Cộng thêm 1 vào hàng làm tròn",
        "example": "Làm tròn số 18,375:\na) Đến hàng đơn vị: Chữ số sau hàng đơn vị là 3 (< 5) → làm tròn thành 18.\nb) Đến hàng phần mười: Chữ số sau hàng phần mười là 7 (≥ 5) → làm tròn thành 18,4.\nc) Đến hàng phần trăm: Chữ số sau hàng phần trăm là 5 (≥ 5) → làm tròn thành 18,38.",
        "exercise": "Dạng 1: Làm tròn số thập phân đến hàng đơn vị, phần mười, phần trăm.\nDạng 2: Ứng dụng làm tròn trong tính toán ước lượng kết quả.\nDạng 3: Giải bài toán thực tế có yêu cầu làm tròn điểm số, tiền tệ.",
        "practicalApp": "Điểm trung bình môn Toán học kì I của bạn An là 8,66 điểm. Khi làm tròn đến hàng phần mười, điểm số của An được tính là 8,7 điểm.",
        "quiz": {
          "q": "Làm tròn số thập phân 24,763 đến hàng phần mười ta được số:",
          "options": [
            "24,8",
            "24,7",
            "25,0",
            "24,76"
          ],
          "ans": 0,
          "exp": "Hàng phần mười là chữ số 7, chữ số ngay sau nó là 6 (≥ 5) nên cộng thêm 1 vào 7 thành 8. Kết quả là 24,8."
        }
      }
    ]
  },
  {
    "id": 3,
    "book": 1,
    "name": "Chủ đề 3. Một số đơn vị đo diện tích (Bài 15–18)",
    "desc": "km², ha, chuyển đổi đơn vị diện tích.",
    "lessons": [
      {
        "num": 15,
        "topicId": 3,
        "title": "Bài 15. Héc-ta (ha)",
        "newKnowledge": "Héc-ta là đơn vị đo diện tích thông dụng để đo diện tích đất đai, đồng ruộng, trang trại, khu rừng. 1 héc-ta bằng diện tích hình vuông có cạnh dài 100 m. Viết tắt là ha. 1 ha = 10 000 m².",
        "formula": "1 ha = 10 000 m²\nĐổi từ ha sang m²: nhân với 10 000.\nĐổi từ m² sang ha: chia cho 10 000.",
        "example": "a) 4 ha = 4 × 10 000 = 40 000 m².\nb) 2,5 ha = 2,5 × 10 000 = 25 000 m².\nc) 35 000 m² = 35 000 : 10 000 = 3,5 ha.",
        "exercise": "Dạng 1: Chuyển đổi giữa ha và m².\nDạng 2: So sánh các số đo diện tích có đơn vị ha.\nDạng 3: Bài toán tính sản lượng nông sản trên diện tích héc-ta.",
        "practicalApp": "Một cánh đồng hình chữ nhật dài 400 m, rộng 250 m. Diện tích cánh đồng là: 400 × 250 = 100 000 m² = 10 ha. Nếu mỗi ha thu được 6 tấn thóc thì cả cánh đồng thu được: 10 × 6 = 60 tấn thóc.",
        "quiz": {
          "q": "Một khu nghỉ dưỡng có diện tích 150 000 m². Diện tích đó đổi ra héc-ta là:",
          "options": [
            "15 ha",
            "1,5 ha",
            "150 ha",
            "1 500 ha"
          ],
          "ans": 0,
          "exp": "150 000 : 10 000 = 15 ha."
        }
      },
      {
        "num": 16,
        "topicId": 3,
        "title": "Bài 16. Ki-lô-mét vuông (km²)",
        "newKnowledge": "Ki-lô-mét vuông là diện tích của hình vuông có cạnh dài 1 km. Viết tắt là km². Dùng để đo diện tích các vùng lãnh thổ, tỉnh thành, biển đảo, rừng quốc gia. 1 km² = 1 000 000 m² = 100 ha.",
        "formula": "1 km² = 1 000 000 m² = 100 ha\n1 ha = 1/100 km² = 0,01 km²",
        "example": "a) 8 km² = 800 ha.\nb) 12,5 km² = 1 250 ha = 12 500 000 m².\nc) 450 ha = 4,5 km².",
        "exercise": "Dạng 1: Đổi giữa km², ha và m².\nDạng 2: Tính diện tích địa lí và so sánh diện tích các vườn quốc gia.\nDạng 3: Giải toán có lời văn liên quan đến km².",
        "practicalApp": "Hồ Ba Bể có diện tích mặt nước khoảng 6,5 km². Diện tích đó tính theo héc-ta là: 6,5 × 100 = 650 ha.",
        "quiz": {
          "q": "Diện tích Vườn Quốc gia Cúc Phương khoảng 222 km². Diện tích đó bằng bao nhiêu héc-ta?",
          "options": [
            "22 200 ha",
            "2 220 ha",
            "222 000 ha",
            "22,2 ha"
          ],
          "ans": 0,
          "exp": "222 × 100 = 22 200 ha."
        }
      },
      {
        "num": 17,
        "topicId": 3,
        "title": "Bài 17. Bảng đơn vị đo diện tích",
        "newKnowledge": "Bảng đơn vị đo diện tích gồm: km², hm² (ha), dam², m², dm², cm², mm². Trong bảng đơn vị đo diện tích: Mỗi đơn vị đo diện tích gấp 100 lần đơn vị bé hơn tiếp liền; mỗi đơn vị đo diện tích bằng 1/100 đơn vị lớn hơn tiếp liền.",
        "formula": "Thứ tự: km² → ha (hm²) → dam² → m² → dm² → cm² → mm²\nMỗi bước đổi nhân hoặc chia cho 100.",
        "example": "a) 3 m² 25 dm² = 3,25 m² = 325 dm².\nb) 4 dam² 8 m² = 408 m².\nc) 5 dm² 4 cm² = 504 cm².",
        "exercise": "Dạng 1: Điền số hoặc phân số thích hợp vào chỗ chấm.\nDạng 2: Viết số đo diện tích dưới dạng số thập phân.\nDạng 3: So sánh số đo diện tích.",
        "practicalApp": "Một căn phòng có diện tích 24 m² được lát bằng gạch men hình vuông cạnh 4 dm (diện tích 16 dm² = 0,16 m²). Số viên gạch cần lát là: 24 : 0,16 = 150 viên gạch.",
        "quiz": {
          "q": "Số thích hợp điền vào chỗ chấm: 7 m² 8 dm² = ......... m² là:",
          "options": [
            "7,08 m²",
            "7,8 m²",
            "78 m²",
            "7,008 m²"
          ],
          "ans": 0,
          "exp": "8 dm² = 8/100 m² = 0,08 m². Vậy 7 m² 8 dm² = 7,08 m²."
        }
      },
      {
        "num": 18,
        "topicId": 3,
        "title": "Bài 18. Luyện tập chung về diện tích",
        "newKnowledge": "Tổng hợp các kỹ năng đổi đơn vị đo diện tích và áp dụng vào các bài toán tính diện tích thực tế phức hợp (ruộng bậc thang, ao nuôi cá, sân trường).",
        "formula": "S = Chiều dài × Chiều rộng (Hình chữ nhật)\nS = Cạnh × Cạnh (Hình vuông)\nĐổi về cùng đơn vị đo trước khi tính toán.",
        "example": "Một mảnh đất hình chữ nhật có chu vi 160 m, chiều rộng bằng 3/5 chiều dài.\nNửa chu vi: 160 : 2 = 80 m.\nChiều rộng: 80 : (3 + 5) × 3 = 30 m.\nChiều dài: 80 - 30 = 50 m.\nDiện tích: 50 × 30 = 1 500 m² = 0,15 ha.",
        "exercise": "Dạng 1: Tính diện tích các khu đất thực tế.\nDạng 2: Bài toán phối hợp giữa chu vi, diện tích và tỉ số.\nDạng 3: Tính sản lượng và chi phí kinh tế.",
        "practicalApp": "Một trang trại nuôi bò sữa có diện tích 4 ha trồng cỏ. Mỗi ha cho năng suất 50 tấn cỏ một năm. Mỗi chú bò tiêu thụ 10 tấn cỏ một năm. Trang trại đó có thể nuôi đủ cỏ cho: (4 × 50) : 10 = 20 chú bò.",
        "quiz": {
          "q": "Một hình vuông có chu vi là 200 m. Diện tích hình vuông đó tính theo héc-ta là:",
          "options": [
            "0,25 ha",
            "2,5 ha",
            "25 ha",
            "0,025 ha"
          ],
          "ans": 0,
          "exp": "Cạnh = 200 : 4 = 50 m. Diện tích = 50 × 50 = 2 500 m² = 0,25 ha."
        }
      }
    ]
  },
  {
    "id": 4,
    "book": 1,
    "name": "Chủ đề 4. Các phép tính với số thập phân (Bài 19–24)",
    "desc": "Cộng, trừ, nhân, chia số thập phân; tính nhanh.",
    "lessons": [
      {
        "num": 19,
        "topicId": 4,
        "title": "Bài 19. Phép cộng số thập phân",
        "newKnowledge": "Muốn cộng hai số thập phân ta làm như sau:\n1. Viết số hạng này dưới số hạng kia sao cho các chữ số ở cùng một hàng đặt thẳng cột với nhau (dấu phẩy thẳng cột dấu phẩy).\n2. Cộng như cộng các số tự nhiên.\n3. Viết dấu phẩy ở tổng thẳng cột với các dấu phẩy của các số hạng.",
        "formula": "Đặt tính: Dấu phẩy thẳng cột dấu phẩy.\nTính chất: a + b = b + a;   (a + b) + c = a + (b + c)",
        "example": "Tính: 18,35 + 9,8\n  18,35\n+  9,80\n-------\n  28,15",
        "exercise": "Dạng 1: Đặt tính rồi tính cộng số thập phân.\nDạng 2: Tính bằng cách thuận tiện nhất.\nDạng 3: Giải toán có lời văn về phép cộng.",
        "practicalApp": "Thùng thứ nhất chứa 28,5 lít dầu, thùng thứ hai chứa nhiều hơn thùng thứ nhất 4,8 lít dầu. Cả hai thùng chứa số lít dầu là: 28,5 + (28,5 + 4,8) = 28,5 + 33,3 = 61,8 (lít).",
        "quiz": {
          "q": "Kết quả của phép tính 35,78 + 14,5 là:",
          "options": [
            "50,28",
            "50,83",
            "49,28",
            "50,33"
          ],
          "ans": 0,
          "exp": "35,78 + 14,50 = 50,28."
        }
      },
      {
        "num": 20,
        "topicId": 4,
        "title": "Bài 20. Phép trừ số thập phân",
        "newKnowledge": "Muốn trừ một số thập phân cho một số thập phân ta đặt số trừ dưới số bị trừ sao cho các chữ số ở cùng một hàng đặt thẳng cột với nhau, rồi trừ như trừ các số tự nhiên. Viết dấu phẩy ở hiệu thẳng cột với các dấu phẩy của số bị trừ và số trừ. (Nếu số chữ số ở phần thập phân của số bị trừ ít hơn số trừ, ta có thể viết thêm các chữ số 0 vào bên phải).",
        "formula": "Đặt tính thẳng cột dấu phẩy. Mượn và trừ như số tự nhiên.",
        "example": "Tính: 45,6 - 18,25\n  45,60\n- 18,25\n-------\n  27,35",
        "exercise": "Dạng 1: Đặt tính rồi tính trừ số thập phân.\nDạng 2: Tìm x (Tìm số hạng, số bị trừ, số trừ).\nDạng 3: Bài toán tính số tiền thừa, độ chênh lệch khối lượng.",
        "practicalApp": "Mẹ đi chợ mang theo 200 000 đồng. Mẹ mua thịt hết 95 500 đồng và mua rau củ hết 34 500 đồng. Số tiền mẹ còn lại là: 200 000 - (95 500 + 34 500) = 70 000 (đồng).",
        "quiz": {
          "q": "Kết quả của phép tính 72,5 - 28,64 là:",
          "options": [
            "43,86",
            "44,86",
            "43,96",
            "44,96"
          ],
          "ans": 0,
          "exp": "72,50 - 28,64 = 43,86."
        }
      },
      {
        "num": 21,
        "topicId": 4,
        "title": "Bài 21. Phép nhân số thập phân",
        "newKnowledge": "Muốn nhân một số thập phân với một số thập phân ta làm như sau:\n1. Thực hiện phép nhân như nhân các số tự nhiên.\n2. Đếm xem trong phần thập phân của cả hai thừa số có tất cả bao nhiêu chữ số rồi dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số kể từ phải sang trái.",
        "formula": "Tách chữ số ở tích = Tổng số chữ số thập phân của 2 thừa số (từ phải sang trái).",
        "example": "Tính: 3,25 × 4,6\nThực hiện nhân: 325 × 46 = 14 950.\nHai thừa số có tất cả 2 + 1 = 3 chữ số thập phân.\nTách 3 chữ số từ phải sang: 14,950 = 14,95.",
        "exercise": "Dạng 1: Đặt tính rồi tính nhân số thập phân.\nDạng 2: Tính giá trị biểu thức chứa phép nhân.\nDạng 3: Giải toán tính chu vi, diện tích có số đo thập phân.",
        "practicalApp": "Một mảnh đất hình chữ nhật có chiều dài 18,5 m và chiều rộng 7,2 m. Diện tích mảnh đất là: 18,5 × 7,2 = 133,2 (m²).",
        "quiz": {
          "q": "Tích của 2,4 × 1,5 là:",
          "options": [
            "3,6",
            "36",
            "0,36",
            "3,65"
          ],
          "ans": 0,
          "exp": "24 × 15 = 360. Tách 2 chữ số thập phân: 3,60 = 3,6."
        }
      },
      {
        "num": 22,
        "topicId": 4,
        "title": "Bài 22. Nhân một số thập phân với 10, 100, 1 000... hoặc với 0,1; 0,01; 0,001...",
        "newKnowledge": "Quy tắc tính nhanh:\n- Muốn nhân một số thập phân với 10, 100, 1 000... ta chỉ việc chuyển dấu phẩy của số đó lần lượt sang bên phải 1, 2, 3... chữ số.\n- Muốn nhân một số thập phân với 0,1; 0,01; 0,001... ta chỉ việc chuyển dấu phẩy của số đó lần lượt sang bên trái 1, 2, 3... chữ số (tương đương chia cho 10, 100, 1 000...).",
        "formula": "× 10, 100, 1 000 → Dời dấu phẩy sang PHẢI\n× 0,1; 0,01; 0,001 → Dời dấu phẩy sang TRÁI",
        "example": "a) 3,456 × 100 = 345,6.\nb) 27,8 × 0,1 = 2,78.\nc) 456,2 × 0,01 = 4,562.\nd) 0,05 × 1 000 = 50.",
        "exercise": "Dạng 1: Tính nhẩm nhanh kết quả phép nhân.\nDạng 2: Tìm chữ số còn thiếu trong phép tính nhẩm.\nDạng 3: So sánh biểu thức có nhân nhẩm.",
        "practicalApp": "Một hộp sữa tươi có thể tích 0,18 lít. Một thùng gồm 100 hộp sữa như thế chứa tất cả số lít sữa là: 0,18 × 100 = 18 (lít sữa).",
        "quiz": {
          "q": "Kết quả của phép tính nhẩm 48,5 × 0,01 là:",
          "options": [
            "0,485",
            "4,85",
            "485",
            "4 850"
          ],
          "ans": 0,
          "exp": "Dời dấu phẩy sang trái 2 chữ số: 48,5 × 0,01 = 0,485."
        }
      },
      {
        "num": 23,
        "topicId": 4,
        "title": "Bài 23. Phép chia số thập phân",
        "newKnowledge": "1. Chia số thập phân cho số tự nhiên: Chia phần nguyên trước, đặt dấu phẩy vào thương rồi chia tiếp phần thập phân.\n2. Chia số thập phân cho số thập phân: Đếm xem số chia có bao nhiêu chữ số thập phân thì dời dấu phẩy ở số bị trừ sang phải bấy nhiêu chữ số, bỏ dấu phẩy ở số chia rồi chia như thường.",
        "formula": "Chia cho 10, 100, 1 000 → Dời dấu phẩy sang TRÁI\nChia cho 0,1; 0,01; 0,001 → Dời dấu phẩy sang PHẢI (như nhân với 10, 100, 1 000)",
        "example": "a) 21,6 : 6 = 3,6.\nb) 19,5 : 1,5 = 195 : 15 = 13.\nc) 7,2 : 0,1 = 7,2 × 10 = 72.\nd) 45 : 100 = 0,45.",
        "exercise": "Dạng 1: Đặt tính rồi tính chia số thập phân.\nDạng 2: Chia nhẩm cho 10, 100 hoặc 0,1; 0,01.\nDạng 3: Tìm X trong các phép chia.",
        "practicalApp": "May một bộ quần áo hết 2,8 mét vải. Có 33,6 mét vải thì may được số bộ quần áo như thế là: 33,6 : 2,8 = 336 : 28 = 12 (bộ quần áo).",
        "quiz": {
          "q": "Kết quả của phép tính chia 36,9 : 0,1 là:",
          "options": [
            "369",
            "3,69",
            "0,369",
            "36,9"
          ],
          "ans": 0,
          "exp": "Chia cho 0,1 tương đương nhân với 10: 36,9 × 10 = 369."
        }
      },
      {
        "num": 24,
        "topicId": 4,
        "title": "Bài 24. Luyện tập chung các phép tính với số thập phân",
        "newKnowledge": "Tổng hợp bốn phép tính: cộng, trừ, nhân, chia số thập phân. Quy tắc thứ tự thực hiện phép tính: Trong ngoặc trước, ngoài ngoặc sau; nhân chia trước, cộng trừ sau.",
        "formula": "(A + B) × C = A × C + B × C\nA : C + B : C = (A + B) : C",
        "example": "Tính thuận tiện: 4,8 × 3,5 + 4,8 × 6,5 = 4,8 × (3,5 + 6,5) = 4,8 × 10 = 48.",
        "exercise": "Dạng 1: Tính giá trị biểu thức số thập phân.\nDạng 2: Vận dụng tính chất kết hợp, phân phối để tính nhanh.\nDạng 3: Bài toán giải toán bằng lời văn tổng hợp.",
        "practicalApp": "Bác An mua 3 kg gạo tẻ giá 18,5 nghìn đồng/kg và 2 kg gạo nếp giá 24,5 nghìn đồng/kg. Bác đưa tờ 100 nghìn đồng. Số tiền bác nhận lại là: 100 - (3 × 18,5 + 2 × 24,5) = 100 - (55,5 + 49) = -4,5 (thiếu 4,5 nghìn đồng).",
        "quiz": {
          "q": "Giá trị của biểu thức 15,6 : 2 + 4,4 : 2 là:",
          "options": [
            "10",
            "20",
            "15",
            "8"
          ],
          "ans": 0,
          "exp": "(15,6 + 4,4) : 2 = 20 : 2 = 10."
        }
      }
    ]
  },
  {
    "id": 5,
    "book": 1,
    "name": "Chủ đề 5. Một số hình phẳng, chu vi và diện tích (Bài 25–29)",
    "desc": "Hình tam giác, hình thang, hình tròn; chu vi, diện tích.",
    "lessons": [
      {
        "num": 25,
        "topicId": 5,
        "title": "Bài 25. Hình tam giác. Diện tích hình tam giác",
        "newKnowledge": "Hình tam giác có 3 cạnh, 3 đỉnh và 3 góc. Đường cao hạ từ một đỉnh vuông góc với cạnh đáy đối diện. Muốn tính diện tích hình tam giác ta lấy độ dài đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho 2.",
        "formula": "S = (a × h) : 2\na = (S × 2) : h\nh = (S × 2) : a",
        "example": "Một hình tam giác có đáy a = 15 cm, chiều cao h = 12 cm.\nDiện tích tam giác là: S = (15 × 12) : 2 = 180 : 2 = 90 (cm²).",
        "exercise": "Dạng 1: Tính diện tích tam giác khi biết đáy và chiều cao.\nDạng 2: Tính ngược chiều cao hoặc cạnh đáy khi biết diện tích.\nDạng 3: Tính diện tích tam giác vuông (tích hai cạnh góc vuông chia 2).",
        "practicalApp": "Một lá cờ hình tam giác có đáy dài 20 cm, chiều cao 15 cm. Diện tích lá cờ là: (20 × 15) : 2 = 150 (cm²).",
        "quiz": {
          "q": "Một hình tam giác có diện tích là 60 cm², chiều cao là 8 cm. Độ dài cạnh đáy tương ứng là:",
          "options": [
            "15 cm",
            "7,5 cm",
            "30 cm",
            "10 cm"
          ],
          "ans": 0,
          "exp": "Đáy a = (S × 2) : h = (60 × 2) : 8 = 120 : 8 = 15 cm."
        }
      },
      {
        "num": 26,
        "topicId": 5,
        "title": "Bài 26. Hình thang. Diện tích hình thang",
        "newKnowledge": "Hình thang có một cặp cạnh đối diện song song (gọi là hai đáy: đáy lớn a, đáy bé b). Chiều cao h là khoảng cách vuông góc giữa hai đáy. Diện tích hình thang bằng tổng độ dài hai đáy nhân với chiều cao (cùng một đơn vị đo) rồi chia cho 2.",
        "formula": "S = (a + b) × h : 2\n(a + b) = (S × 2) : h\nh = (S × 2) : (a + b)",
        "example": "Một hình thang có đáy lớn 18 m, đáy bé 12 m và chiều cao 9 m.\nDiện tích hình thang là: S = (18 + 12) × 9 : 2 = 30 × 9 : 2 = 135 (m²).",
        "exercise": "Dạng 1: Áp dụng trực tiếp công thức tính diện tích hình thang.\nDạng 2: Tính diện tích hình thang vuông.\nDạng 3: Tính chiều cao hoặc tổng hai đáy khi biết diện tích.",
        "practicalApp": "Một thửa ruộng hình thang có đáy lớn 45 m, đáy bé 35 m, chiều cao 20 m. Diện tích thửa ruộng là: (45 + 35) × 20 : 2 = 800 (m²).",
        "quiz": {
          "q": "Hình thang có diện tích 100 m², chiều cao 8 m. Tổng độ dài hai đáy của hình thang là:",
          "options": [
            "25 m",
            "12,5 m",
            "50 m",
            "20 m"
          ],
          "ans": 0,
          "exp": "Tổng hai đáy = (S × 2) : h = (100 × 2) : 8 = 200 : 8 = 25 m."
        }
      },
      {
        "num": 27,
        "topicId": 5,
        "title": "Bài 27. Hình tròn. Chu vi hình tròn",
        "newKnowledge": "Hình tròn gồm các điểm nằm trên và nằm trong đường tròn cách tâm một khoảng không đổi bằng bán kính r. Đường kính d đi qua tâm và dài gấp 2 lần bán kính (d = 2 × r). Chu vi hình tròn bằng đường kính nhân với số 3,14 (hoặc lấy 2 lần bán kính nhân với 3,14).",
        "formula": "C = d × 3,14 = 2 × r × 3,14\nd = C : 3,14\nr = C : (2 × 3,14)",
        "example": "a) Bán kính r = 4 cm → C = 2 × 4 × 3,14 = 25,12 (cm).\nb) Đường kính d = 6 dm → C = 6 × 3,14 = 18,84 (dm).",
        "exercise": "Dạng 1: Tính chu vi khi biết bán kính hoặc đường kính.\nDạng 2: Tính bán kính, đường kính khi biết chu vi hình tròn.\nDạng 3: Bài toán bánh xe lăn đường (Quãng đường = Chu vi × Số vòng).",
        "practicalApp": "Bánh xe đạp có đường kính 0,65 m. Chu vi bánh xe là: 0,65 × 3,14 = 2,041 m. Khi bánh xe lăn được 100 vòng thì xe đạp đi được quãng đường là: 2,041 × 100 = 204,1 (m).",
        "quiz": {
          "q": "Một hình tròn có chu vi C = 31,4 cm. Bán kính r của hình tròn đó là:",
          "options": [
            "5 cm",
            "10 cm",
            "2,5 cm",
            "15,7 cm"
          ],
          "ans": 0,
          "exp": "Đường kính d = 31,4 : 3,14 = 10 cm. Bán kính r = 10 : 2 = 5 cm."
        }
      },
      {
        "num": 28,
        "topicId": 5,
        "title": "Bài 28. Diện tích hình tròn",
        "newKnowledge": "Muốn tính diện tích của hình tròn, ta lấy bán kính nhân với bán kính rồi nhân với số 3,14.",
        "formula": "S = r × r × 3,14\n(r × r) = S : 3,14",
        "example": "a) Bán kính r = 5 cm → S = 5 × 5 × 3,14 = 78,5 (cm²).\nb) Đường kính d = 8 dm → Bán kính r = 4 dm → S = 4 × 4 × 3,14 = 50,24 (dm²).",
        "exercise": "Dạng 1: Tính diện tích hình tròn biết bán kính hoặc đường kính.\nDạng 2: Tính diện tích hình vành khăn (hiệu diện tích hai hình tròn đồng tâm).\nDạng 3: Tính diện tích bồn hoa hình bán nguyệt (chia 2).",
        "practicalApp": "Một cái giếng nước có miệng hình tròn bán kính 0,7 m. Xung quanh miệng giếng người ta xây một thành giếng rộng 0,3 m. Diện tích thành giếng là diện tích hình vành khăn: Bán kính ngoài = 0,7 + 0,3 = 1 m. Diện tích thành giếng = (1 × 1 × 3,14) - (0,7 × 0,7 × 3,14) = 3,14 - 1,5386 = 1,6014 (m²).",
        "quiz": {
          "q": "Diện tích của hình tròn có đường kính d = 6 cm là:",
          "options": [
            "28,26 cm²",
            "113,04 cm²",
            "18,84 cm²",
            "56,52 cm²"
          ],
          "ans": 0,
          "exp": "Bán kính r = 6 : 2 = 3 cm. Diện tích S = 3 × 3 × 3,14 = 28,26 cm²."
        }
      },
      {
        "num": 29,
        "topicId": 5,
        "title": "Bài 29. Luyện tập chung về hình phẳng",
        "newKnowledge": "Tổng hợp các kỹ năng tính toán chu vi, diện tích hình tam giác, hình thang, hình tròn và các hình phẳng phức hợp kết hợp nhiều hình mẫu.",
        "formula": "Tổng diện tích hình phức hợp = Tổng diện tích các hình thành phần ghép lại (hoặc lấy diện tích bao trừ diện tích phần khuyết).",
        "example": "Một bảng chỉ dẫn gồm một hình chữ nhật kích thước 20 cm × 10 cm ghép với một hình tam giác có đáy 20 cm và chiều cao 8 cm. Diện tích bảng chỉ dẫn là: (20 × 10) + (20 × 8 : 2) = 200 + 80 = 280 (cm²).",
        "exercise": "Dạng 1: Tính diện tích hình được ghép từ tam giác và hình thang.\nDạng 2: Tính diện tích phần tô màu giữa hình vuông và hình tròn nội tiếp.\nDạng 3: Bài toán thực tế thiết kế sân vườn.",
        "practicalApp": "Một bồn hoa có dạng hình chữ nhật dài 6 m, rộng 4 m, ở giữa có trồng một bụi hoa cúc hình tròn đường kính 2 m. Diện tích phần trồng cỏ xung quanh bụi hoa là: (6 × 4) - (1 × 1 × 3,14) = 24 - 3,14 = 20,86 (m²).",
        "quiz": {
          "q": "Một hình vuông có cạnh 10 cm. Bên trong vẽ một hình tròn có đường kính 10 cm. Diện tích phần hình vuông nằm ngoài hình tròn là:",
          "options": [
            "21,5 cm²",
            "78,5 cm²",
            "100 cm²",
            "31,4 cm²"
          ],
          "ans": 0,
          "exp": "Diện tích hình vuông = 10 × 10 = 100 cm². Bán kính hình tròn = 5 cm, diện tích hình tròn = 5 × 5 × 3,14 = 78,5 cm². Phần ngoài = 100 - 78,5 = 21,5 cm²."
        }
      }
    ]
  },
  {
    "id": 6,
    "book": 1,
    "name": "Chủ đề 6. Ôn tập học kì I (Bài 30–35)",
    "desc": "Củng cố số thập phân, phép tính, hình học, đo lường.",
    "lessons": [
      {
        "num": 30,
        "topicId": 6,
        "title": "Bài 30. Ôn tập số tự nhiên, Phân số và Số thập phân",
        "newKnowledge": "Hệ thống hóa toàn bộ kiến thức số học của Học kì I: Đọc viết số, so sánh, phân số, hỗn số, số thập phân và các đơn vị đo diện tích ha, km².",
        "formula": "1 ha = 10 000 m²;   1 km² = 100 ha = 1 000 000 m²\na b/c = (a × c + b) / c",
        "example": "Sắp xếp theo thứ tự tăng dần: 2 1/4; 2,3; 2,25; 2 2/5.\nĐổi ra số thập phân: 2 1/4 = 2,25; 2 2/5 = 2,4. Thứ tự: 2,25 = 2 1/4 < 2,3 < 2 2/5 (2,4).",
        "exercise": "Dạng 1: Chuyển đổi qua lại giữa phân số, hỗn số và số thập phân.\nDạng 2: So sánh và làm tròn số thập phân.\nDạng 3: Ôn tập bảng đơn vị đo diện tích.",
        "practicalApp": "Một khu công nghiệp có diện tích 2,4 km². Diện tích đó bằng 240 ha hay 2 400 000 m².",
        "quiz": {
          "q": "Số thập phân 5,08 bằng với hỗn số nào dưới đây?",
          "options": [
            "5 8/100",
            "5 8/10",
            "5 80/100",
            "5 8/1000"
          ],
          "ans": 0,
          "exp": "5,08 = 5 + 0,08 = 5 8/100."
        }
      },
      {
        "num": 31,
        "topicId": 6,
        "title": "Bài 31. Ôn tập các phép tính với số thập phân",
        "newKnowledge": "Củng cố thành thạo kỹ năng tính cộng, trừ, nhân, chia số thập phân; quy tắc tính giá trị biểu thức và tính nhanh bằng tính chất phép tính.",
        "formula": "a × b + a × c = a × (b + c)\na : c + b : c = (a + b) : c",
        "example": "Tính thuận tiện: 12,5 × 0,75 × 8 = (12,5 × 8) × 0,75 = 100 × 0,75 = 75.",
        "exercise": "Dạng 1: Đặt tính rồi tính 4 phép tính số thập phân.\nDạng 2: Tính giá trị biểu thức.\nDạng 3: Tìm X.",
        "practicalApp": "Một ô tô trong 3 giờ đầu, mỗi giờ đi được 42,5 km; trong 2 giờ sau, mỗi giờ đi được 40,5 km. Trung bình mỗi giờ ô tô đi được: (3 × 42,5 + 2 × 40,5) : (3 + 2) = (127,5 + 81) : 5 = 208,5 : 5 = 41,7 (km).",
        "quiz": {
          "q": "Giá trị của biểu thức 2,5 × 4,8 × 4 là:",
          "options": [
            "48",
            "4,8",
            "480",
            "24"
          ],
          "ans": 0,
          "exp": "(2,5 × 4) × 4,8 = 10 × 4,8 = 48."
        }
      },
      {
        "num": 32,
        "topicId": 6,
        "title": "Bài 32. Ôn tập hình học và Đo lường học kì I",
        "newKnowledge": "Hệ thống các công thức chu vi và diện tích: tam giác, hình thang, hình tròn; quy đổi các đơn vị đo độ dài, khối lượng, diện tích.",
        "formula": "S(tam giác) = a × h : 2\nS(thang) = (a + b) × h : 2\nC(tròn) = d × 3,14;   S(tròn) = r × r × 3,14",
        "example": "Một mảnh đất hình thang có tổng độ dài hai đáy là 36 m, chiều cao 15 m. Diện tích mảnh đất là: 36 × 15 : 2 = 270 (m²).",
        "exercise": "Dạng 1: Tính diện tích các hình phẳng.\nDạng 2: Đổi các số đo diện tích phức hợp ra số thập phân.\nDạng 3: Bài toán thực tế về cắt ghép hình.",
        "practicalApp": "Một sân vận động gồm một sân bóng đá hình chữ nhật kích thước 100 m × 60 m và hai đầu là hai hình bán nguyệt có đường kính 60 m. Diện tích cả sân vận động là: (100 × 60) + (30 × 30 × 3,14) = 6 000 + 2 826 = 8 826 (m²).",
        "quiz": {
          "q": "Một hình tròn có diện tích 78,5 cm². Bán kính của hình tròn đó là:",
          "options": [
            "5 cm",
            "10 cm",
            "25 cm",
            "2,5 cm"
          ],
          "ans": 0,
          "exp": "r × r = 78,5 : 3,14 = 25. Vì 5 × 5 = 25 nên bán kính r = 5 cm."
        }
      },
      {
        "num": 33,
        "topicId": 6,
        "title": "Bài 33. Ôn tập giải toán thực tế học kì I",
        "newKnowledge": "Rèn luyện phương pháp giải toán có lời văn: Tóm tắt bài toán, xác định các bước giải, kiểm tra điều kiện thực tế và trình bày lời giải khoa học.",
        "formula": "Các bước giải toán: 1. Đọc kĩ đề → 2. Tóm tắt → 3. Lập kế hoạch giải → 4. Tính toán & Viết đáp số.",
        "example": "Một cửa hàng có 3,5 tấn gạo. Ngày thứ nhất bán được 1,2 tấn, ngày thứ hai bán được 1,5 tấn. Số gạo còn lại là: 3,5 - (1,2 + 1,5) = 0,8 (tấn).",
        "exercise": "Dạng 1: Bài toán liên quan đến rút về đơn vị.\nDạng 2: Bài toán năng suất và diện tích ruộng lúa.\nDạng 3: Bài toán kinh tế mua bán.",
        "practicalApp": "Chi phí sơn 1 m² tường là 45 000 đồng. Một bức tường hình thang có diện tích 30 m² thì chi phí sơn quét toàn bộ bức tường là: 30 × 45 000 = 1 350 000 (đồng).",
        "quiz": {
          "q": "Mua 5 mét vải hết 150 000 đồng. Mua 8,5 mét vải cùng loại hết số tiền là:",
          "options": [
            "255 000 đồng",
            "240 000 đồng",
            "250 000 đồng",
            "300 000 đồng"
          ],
          "ans": 0,
          "exp": "Giá 1 mét vải: 150 000 : 5 = 30 000 đồng. Mua 8,5 m: 30 000 × 8,5 = 255 000 đồng."
        }
      },
      {
        "num": 34,
        "topicId": 6,
        "title": "Bài 34. Đề kiểm tra học kì I - Đề số 1",
        "newKnowledge": "Đề luyện thi chuẩn cấu trúc đánh giá năng lực học kì I môn Toán Lớp 5, bao gồm trắc nghiệm khách quan và tự luận trình bày chi tiết.",
        "formula": "Ôn tập tổng thể kiến thức từ Bài 1 đến Bài 33.",
        "example": "Đề bài mẫu tự luận: Một mảnh vườn hình chữ nhật có chiều dài 24 m, chiều rộng bằng 2/3 chiều dài. Người ta đào một ao cá hình tròn bán kính 3 m ở giữa vườn. Tính diện tích phần đất còn lại.",
        "exercise": "Bộ câu hỏi trắc nghiệm và 3 bài toán tự luận rèn kỹ năng làm bài thi dưới áp lực thời gian.",
        "practicalApp": "Giải quyết trọn vẹn bài toán quy hoạch sân vườn gia đình.",
        "quiz": {
          "q": "Kết quả của phép tính (15,3 + 4,7) × 2,5 là:",
          "options": [
            "50",
            "45",
            "55",
            "40"
          ],
          "ans": 0,
          "exp": "20 × 2,5 = 50."
        }
      },
      {
        "num": 35,
        "topicId": 6,
        "title": "Bài 35. Đề kiểm tra học kì I - Đề số 2",
        "newKnowledge": "Đề luyện thi nâng cao kiểm tra tư duy phân tích, khả năng tính nhẩm nhanh và vận dụng linh hoạt các công thức hình học, số thập phân.",
        "formula": "Kỹ năng kiểm tra lại kết quả và thử lại đáp số.",
        "example": "Bài toán nâng cao: Tính nhanh giá trị biểu thức: A = 0,2 × 517 × 7 + 0,14 × 483 × 10 = 1,4 × 517 + 1,4 × 483 = 1,4 × (517 + 483) = 1,4 × 1 000 = 1 400.",
        "exercise": "Luyện giải các dạng toán phân loại học sinh giỏi.",
        "practicalApp": "Tính toán ước lượng vật liệu xây dựng và dự trù kinh phí sửa chữa phòng học.",
        "quiz": {
          "q": "Một hình thang có đáy lớn 20 cm, đáy bé bằng 3/5 đáy lớn, chiều cao 10 cm. Diện tích hình thang là:",
          "options": [
            "160 cm²",
            "320 cm²",
            "120 cm²",
            "200 cm²"
          ],
          "ans": 0,
          "exp": "Đáy bé = 20 × 3/5 = 12 cm. Diện tích = (20 + 12) × 10 : 2 = 160 cm²."
        }
      }
    ]
  },
  {
    "id": 7,
    "book": 2,
    "name": "Chủ đề 7. Tỉ số và các bài toán liên quan (Bài 36–44)",
    "desc": "Tỉ số, phần trăm, tỉ lệ bản đồ, tìm hai số.",
    "lessons": [
      {
        "num": 36,
        "topicId": 7,
        "title": "Bài 36. Tỉ số và Tỉ số phần trăm",
        "newKnowledge": "Tỉ số của hai số a và b (b khác 0) là thương a : b. Tỉ số phần trăm của a và b là tỉ số được viết dưới dạng phân số có mẫu số là 100 kèm kí hiệu %. Muốn tìm tỉ số phần trăm của hai số a và b ta tìm thương của a và b rồi nhân thương đó với 100 và viết thêm kí hiệu %.",
        "formula": "Tỉ số phần trăm = (a : b) × 100%",
        "example": "Tìm tỉ số phần trăm của 15 và 60:\nTa có: 15 : 60 = 0,25 = 25%.",
        "exercise": "Dạng 1: Viết phân số dưới dạng tỉ số phần trăm.\nDạng 2: Tìm tỉ số phần trăm của hai số.\nDạng 3: So sánh tỉ số phần trăm.",
        "practicalApp": "Trong một trang trại có 500 con gà, trong đó có 320 con gà mái. Tỉ số phần trăm của gà mái trong đàn là: (320 : 500) × 100% = 64%.",
        "quiz": {
          "q": "Tỉ số phần trăm của 3 và 4 là:",
          "options": [
            "75%",
            "60%",
            "80%",
            "70%"
          ],
          "ans": 0,
          "exp": "3 : 4 = 0,75 = 75%."
        }
      },
      {
        "num": 37,
        "topicId": 7,
        "title": "Bài 37. Tìm tỉ số phần trăm của hai số",
        "newKnowledge": "Vận dụng tìm tỉ số phần trăm trong các bài toán thống kê thực tế: Tỉ lệ học sinh đạt điểm tốt, tỉ lệ hoàn thành kế hoạch, tỉ lệ nảy mầm của hạt giống.",
        "formula": "(Số lượng bộ phận : Số lượng toàn thể) × 100%",
        "example": "Bác nông dân gieo 200 hạt giống, có 186 hạt nảy mầm tốt. Tỉ lệ nảy mầm của hạt giống là: (186 : 200) × 100% = 93%.",
        "exercise": "Dạng 1: Bài toán tỉ số phần trăm trong học tập, sản xuất.\nDạng 2: Bài toán vượt mức kế hoạch (tỉ số % > 100%).\nDạng 3: Tính tỉ số phần trăm tăng hoặc giảm.",
        "practicalApp": "Xưởng may theo kế hoạch phải may 1 000 chiếc áo, nhưng thực tế đã may được 1 150 chiếc áo. Xưởng đã đạt: 1 150 : 1 000 = 1,15 = 115% kế hoạch (vượt mức 15%).",
        "quiz": {
          "q": "Một lớp có 30 học sinh, trong đó có 27 bạn tham gia câu lạc bộ bơi lội. Tỉ lệ tham gia là:",
          "options": [
            "90%",
            "85%",
            "95%",
            "80%"
          ],
          "ans": 0,
          "exp": "27 : 30 = 0,9 = 90%."
        }
      },
      {
        "num": 38,
        "topicId": 7,
        "title": "Bài 38. Tìm giá trị phần trăm của một số",
        "newKnowledge": "Muốn tìm a% của một số B, ta có thể lấy B chia cho 100 rồi nhân với a, hoặc lấy B nhân với a rồi chia cho 100.",
        "formula": "Giá trị cần tìm = B × a : 100   hoặc   B : 100 × a",
        "example": "Tìm 15% của 80 kg:\n80 × 15 : 100 = 1 200 : 100 = 12 (kg).",
        "exercise": "Dạng 1: Tính nhẩm các giá trị 10%, 20%, 25%, 50% của một số.\nDạng 2: Bài toán giảm giá mua sắm, khuyến mại.\nDạng 3: Bài toán tính tiền lãi tiết kiệm.",
        "practicalApp": "Một chiếc áo khoác có giá niêm yết 400 000 đồng, cửa hàng giảm giá 20%. Số tiền được giảm giá là: 400 000 × 20 : 100 = 80 000 (đồng). Giá thực tế chiếc áo là: 400 000 - 80 000 = 320 000 (đồng).",
        "quiz": {
          "q": "30% của 150 lít nước là:",
          "options": [
            "45 lít",
            "50 lít",
            "30 lít",
            "60 lít"
          ],
          "ans": 0,
          "exp": "150 × 30 : 100 = 45 lít."
        }
      },
      {
        "num": 39,
        "topicId": 7,
        "title": "Bài 39. Tìm một số khi biết giá trị phần trăm của nó",
        "newKnowledge": "Muốn tìm một số khi biết a% của nó là B, ta có thể lấy B chia cho a rồi nhân với 100, hoặc lấy B nhân với 100 rồi chia cho a.",
        "formula": "Số cần tìm = B : a × 100",
        "example": "Tìm một số biết 25% của nó là 50:\nSố đó là: 50 : 25 × 100 = 2 × 100 = 200.",
        "exercise": "Dạng 1: Tìm số ban đầu khi biết giá trị phần trăm tương ứng.\nDạng 2: Bài toán tìm tổng sản lượng, tổng số vốn kinh doanh.\nDạng 3: Bài toán ngược về tiền lương và thuế.",
        "practicalApp": "Một người bỏ ra 4 200 000 đồng tiền vốn để buôn hoa quả và thu được tiền lãi bằng 20% tiền vốn. Tiền lãi là: 4 200 000 × 20 : 100 = 840 000 (đồng).",
        "quiz": {
          "q": "Tìm một số biết 40% của số đó là 120. Số đó là:",
          "options": [
            "300",
            "280",
            "320",
            "250"
          ],
          "ans": 0,
          "exp": "Số đó = 120 : 40 × 100 = 3 × 100 = 300."
        }
      },
      {
        "num": 40,
        "topicId": 7,
        "title": "Bài 40. Bài toán Tìm hai số khi biết Tổng và Tỉ số",
        "newKnowledge": "Phương pháp giải bài toán Tổng - Tỉ:\n1. Vẽ sơ đồ đoạn thẳng biểu thị tỉ số.\n2. Tìm tổng số phần bằng nhau.\n3. Tìm giá trị của một phần (Tổng : Tổng số phần).\n4. Tìm số bé (Giá trị 1 phần × số phần của số bé); Tìm số lớn (Tổng - Số bé).",
        "formula": "Tổng số phần = Số phần bé + Số phần lớn\nSố bé = (Tổng : Tổng số phần) × Số phần bé\nSố lớn = Tổng - Số bé",
        "example": "Tổng hai số là 72, số bé bằng 1/3 số lớn.\nTổng số phần bằng nhau: 1 + 3 = 4 phần.\nSố bé là: 72 : 4 × 1 = 18.\nSố lớn là: 72 - 18 = 54.",
        "exercise": "Dạng 1: Bài toán có tổng và tỉ số tường minh.\nDạng 2: Bài toán ẩn tổng hoặc ẩn tỉ số.\nDạng 3: Bài toán liên quan đến tuổi tác, chu vi hình chữ nhật.",
        "practicalApp": "Hai ngăn sách có tất cả 180 cuốn sách. Số sách ở ngăn thứ nhất bằng 4/5 số sách ở ngăn thứ hai. Số sách ngăn 1 là: 180 : (4 + 5) × 4 = 80 cuốn; ngăn 2 là: 180 - 80 = 100 cuốn.",
        "quiz": {
          "q": "Tổng hai số là 100, tỉ số giữa hai số là 2/3. Số lớn là:",
          "options": [
            "60",
            "40",
            "70",
            "50"
          ],
          "ans": 0,
          "exp": "Tổng số phần = 2 + 3 = 5 phần. Số lớn = 100 : 5 × 3 = 60."
        }
      },
      {
        "num": 41,
        "topicId": 7,
        "title": "Bài 41. Bài toán Tìm hai số khi biết Hiệu và Tỉ số",
        "newKnowledge": "Phương pháp giải bài toán Hiệu - Tỉ:\n1. Vẽ sơ đồ đoạn thẳng biểu thị tỉ số.\n2. Tìm hiệu số phần bằng nhau.\n3. Tìm giá trị của một phần (Hiệu : Hiệu số phần).\n4. Tìm số bé (Giá trị 1 phần × số phần của số bé); Tìm số lớn (Số bé + Hiệu).",
        "formula": "Hiệu số phần = Số phần lớn - Số phần bé\nSố bé = (Hiệu : Hiệu số phần) × Số phần bé\nSố lớn = Số bé + Hiệu",
        "example": "Hiệu hai số là 30, tỉ số của hai số là 2/5.\nHiệu số phần bằng nhau: 5 - 2 = 3 phần.\nSố bé là: 30 : 3 × 2 = 20.\nSố lớn là: 20 + 30 = 50.",
        "exercise": "Dạng 1: Cho biết hiệu và tỉ số trực tiếp.\nDạng 2: Bài toán giấu hiệu (bớt số này thêm số kia, hiệu số tuổi không đổi theo thời gian).\nDạng 3: Giải toán hình học có chiều dài hơn chiều rộng.",
        "practicalApp": "Mẹ hơn con 28 tuổi. Hiện nay tuổi con bằng 1/5 tuổi mẹ. Tuổi con hiện nay là: 28 : (5 - 1) × 1 = 7 (tuổi); tuổi mẹ hiện nay là: 7 + 28 = 35 (tuổi).",
        "quiz": {
          "q": "Hiệu hai số là 36, số lớn gấp 4 lần số bé. Số bé là:",
          "options": [
            "12",
            "48",
            "9",
            "18"
          ],
          "ans": 0,
          "exp": "Hiệu số phần = 4 - 1 = 3 phần. Số bé = 36 : 3 × 1 = 12."
        }
      },
      {
        "num": 42,
        "topicId": 7,
        "title": "Bài 42. Tỉ lệ bản đồ và Ứng dụng",
        "newKnowledge": "Tỉ lệ bản đồ 1 : D có nghĩa là khoảng cách 1 đơn vị đo trên bản đồ tương ứng với D đơn vị đo đó ngoài thực tế. Muốn tìm độ dài thật ngoài thực tế, ta lấy độ dài đo được trên bản đồ nhân với mẫu số của tỉ lệ bản đồ (rồi đổi đơn vị thích hợp).",
        "formula": "Độ dài thật = Độ dài trên bản đồ × Mẫu số tỉ lệ\nĐộ dài trên bản đồ = Độ dài thật : Mẫu số tỉ lệ",
        "example": "Trên bản đồ tỉ lệ 1 : 500 000, khoảng cách giữa hai thành phố là 4 cm.\nKhoảng cách thực tế là: 4 × 500 000 = 2 000 000 cm = 20 km.",
        "exercise": "Dạng 1: Tính khoảng cách thực tế ngoài đời.\nDạng 2: Tính khoảng cách thu nhỏ vẽ trên bản đồ.\nDạng 3: Tìm tỉ lệ bản đồ khi biết khoảng cách vẽ và khoảng cách thật.",
        "practicalApp": "Bản vẽ thiết kế ngôi nhà vẽ theo tỉ lệ 1 : 100. Chiều rộng phòng khách trên bản vẽ đo được 4,5 cm. Chiều rộng thực tế của phòng khách là: 4,5 × 100 = 450 cm = 4,5 m.",
        "quiz": {
          "q": "Trên bản đồ tỉ lệ 1 : 2 000 000, khoảng cách từ Hà Nội đến Hải Phòng là 5 cm. Khoảng cách thực tế là:",
          "options": [
            "100 km",
            "10 km",
            "1 000 km",
            "50 km"
          ],
          "ans": 0,
          "exp": "5 × 2 000 000 = 10 000 000 cm = 100 000 m = 100 km."
        }
      },
      {
        "num": 43,
        "topicId": 7,
        "title": "Bài 43. Luyện tập chung về tỉ số và Phần trăm",
        "newKnowledge": "Rèn luyện tổng hợp các bài toán tỉ số, phần trăm, giải quyết các tình huống tài chính, ngân hàng và thương mại đơn giản.",
        "formula": "Tiền bán = Tiền vốn + Tiền lãi\nTiền gửi tiết kiệm sau n kì hạn = Vốn ban đầu + Tiền lãi",
        "example": "Một người gửi tiết kiệm 100 000 000 đồng với lãi suất 6% một năm. Sau một năm, số tiền cả gốc và lãi người đó nhận được là:\nTiền lãi: 100 000 000 × 6 : 100 = 6 000 000 (đồng).\nTổng nhận: 100 000 000 + 6 000 000 = 106 000 000 (đồng).",
        "exercise": "Dạng 1: Bài toán tính tiền lãi theo tỉ số phần trăm.\nDạng 2: Bài toán mua bán giảm giá hai lần liên tiếp.\nDạng 3: Tính tỉ số phần trăm học sinh.",
        "practicalApp": "Một sản phẩm giá 500 000 đồng được giảm giá 10%, sau đó nhân ngày lễ lại giảm tiếp 5% trên giá đã giảm. Giá cuối cùng của sản phẩm là: 500 000 × 0,9 × 0,95 = 427 500 (đồng).",
        "quiz": {
          "q": "Một cửa hàng bán một chiếc quạt với giá 480 000 đồng thì được lãi 20% so với tiền vốn. Tiền vốn của chiếc quạt là:",
          "options": [
            "400 000 đồng",
            "380 000 đồng",
            "420 000 đồng",
            "360 000 đồng"
          ],
          "ans": 0,
          "exp": "Giá bán bằng 100% + 20% = 120% tiền vốn. Tiền vốn = 480 000 : 120 × 100 = 400 000 đồng."
        }
      },
      {
        "num": 44,
        "topicId": 7,
        "title": "Bài 44. Luyện tập tổng hợp giải toán về tỉ số",
        "newKnowledge": "Tổng kết toàn diện chủ đề 7: Kỹ năng nhận diện và phân loại đúng dạng bài (Tổng - Tỉ, Hiệu - Tỉ, Tìm %, Tìm một số khi biết %, Tỉ lệ bản đồ).",
        "formula": "Ôn tập tổng thể các công thức tỉ số trong Chủ đề 7.",
        "example": "Một hình chữ nhật có chu vi 140 m, chiều rộng bằng 3/4 chiều dài. Tính diện tích hình chữ nhật đó.\nNửa chu vi = 70 m. Tổng số phần = 7 phần.\nChiều rộng = 70 : 7 × 3 = 30 m; Chiều dài = 70 - 30 = 40 m.\nDiện tích = 40 × 30 = 1 200 m².",
        "exercise": "Giải đề bài tập tổng hợp chuẩn bị chuyển sang mảng hình học thể tích.",
        "practicalApp": "Phân bổ thời gian học tập và giải trí trong ngày theo tỉ số phần trăm hợp lý.",
        "quiz": {
          "q": "Biết 35% của một số là 70. Vậy 50% của số đó là:",
          "options": [
            "100",
            "80",
            "120",
            "140"
          ],
          "ans": 0,
          "exp": "Số đó = 70 : 35 × 100 = 200. Vậy 50% của số đó = 200 × 50 : 100 = 100."
        }
      }
    ]
  },
  {
    "id": 8,
    "book": 2,
    "name": "Chủ đề 8. Thể tích, đơn vị đo thể tích (Bài 45–48)",
    "desc": "Thể tích, cm³, dm³, m³.",
    "lessons": [
      {
        "num": 45,
        "topicId": 8,
        "title": "Bài 45. Khái niệm thể tích của một hình",
        "newKnowledge": "Thể tích là khoảng không gian mà một vật thể chiếm chỗ. Hình nào chiếm khoảng không gian lớn hơn thì có thể tích lớn hơn. Hai hình có hình dạng khác nhau nhưng được ghép từ số khối lập phương đơn vị như nhau thì có thể tích bằng nhau.",
        "formula": "Hình A nằm hoàn toàn bên trong hình B → Thể tích hình A bé hơn thể tích hình B.\nHình C ghép từ hình A và hình B → Thể tích hình C = Thể tích hình A + Thể tích hình B.",
        "example": "Hình hộp chữ nhật A gồm 24 khối lập phương cạnh 1 cm, hình B gồm 24 khối lập phương cạnh 1 cm xếp thành hình dạng khác. Thể tích hình A bằng thể tích hình B.",
        "exercise": "Dạng 1: So sánh thể tích các hình dựa vào số khối lập phương đơn vị.\nDạng 2: Tính thể tích hình ghép từ các khối nhỏ.\nDạng 3: Nhận biết quan hệ thể tích giữa các vật thể.",
        "practicalApp": "Thả một hòn đá vào cốc nước có vạch đo thể tích, mực nước dâng lên từ 200 ml đến 280 ml. Thể tích của hòn đá chính bằng lượng nước dâng lên: 280 - 200 = 80 ml = 80 cm³.",
        "quiz": {
          "q": "Hình A gồm 36 khối lập phương nhỏ 1 cm³, hình B gồm 42 khối lập phương nhỏ 1 cm³. Kết luận nào đúng?",
          "options": [
            "Thể tích hình B lớn hơn thể tích hình A",
            "Thể tích hình A lớn hơn thể tích hình B",
            "Hai hình có thể tích bằng nhau",
            "Không so sánh được"
          ],
          "ans": 0,
          "exp": "Vì 42 cm³ > 36 cm³ nên thể tích hình B lớn hơn hình A."
        }
      },
      {
        "num": 46,
        "topicId": 8,
        "title": "Bài 46. Xăng-ti-mét khối (cm³). Đề-xi-mét khối (dm³)",
        "newKnowledge": "Xăng-ti-mét khối là thể tích của hình lập phương có cạnh dài 1 cm, viết tắt là cm³. Đề-xi-mét khối là thể tích của hình lập phương có cạnh dài 1 dm, viết tắt là dm³. Hình lập phương cạnh 1 dm chứa được 1 000 hình lập phương cạnh 1 cm. Đặc biệt: 1 dm³ = 1 lít.",
        "formula": "1 dm³ = 1 000 cm³\n1 cm³ = 1/1 000 dm³ = 0,001 dm³\n1 dm³ = 1 lít",
        "example": "a) 3 dm³ = 3 × 1 000 = 3 000 cm³.\nb) 4 500 cm³ = 4 500 : 1 000 = 4,5 dm³.\nc) 2,8 dm³ = 2,8 lít = 2 800 cm³.",
        "exercise": "Dạng 1: Viết và đọc số đo thể tích cm³, dm³.\nDạng 2: Chuyển đổi giữa dm³ và cm³.\nDạng 3: So sánh các số đo thể tích.",
        "practicalApp": "Một chai nước khoáng ghi thể tích 500 ml = 500 cm³ = 0,5 dm³ = 0,5 lít.",
        "quiz": {
          "q": "Số thích hợp điền vào chỗ chấm: 4 dm³ 25 cm³ = ......... cm³ là:",
          "options": [
            "4 025 cm³",
            "4 250 cm³",
            "425 cm³",
            "40 025 cm³"
          ],
          "ans": 0,
          "exp": "4 dm³ = 4 000 cm³. Vậy 4 dm³ 25 cm³ = 4 000 + 25 = 4 025 cm³."
        }
      },
      {
        "num": 47,
        "topicId": 8,
        "title": "Bài 47. Mét khối (m³)",
        "newKnowledge": "Mét khối là thể tích của hình lập phương có cạnh dài 1 m, viết tắt là m³. Hình lập phương cạnh 1 m chứa được 1 000 hình lập phương cạnh 1 dm. Mỗi đơn vị đo thể tích liền kề gấp hoặc kém nhau 1 000 lần.",
        "formula": "1 m³ = 1 000 dm³ = 1 000 000 cm³\n1 m³ = 1 000 lít",
        "example": "a) 5 m³ = 5 000 dm³ = 5 000 lít.\nb) 2,75 m³ = 2 750 dm³.\nc) 3 500 000 cm³ = 3,5 m³.",
        "exercise": "Dạng 1: Viết và đọc số đo thể tích m³.\nDạng 2: Chuyển đổi qua lại giữa m³, dm³, cm³ và lít.\nDạng 3: Bài toán tính thể tích bể bơi, bồn chứa nước.",
        "practicalApp": "Đồng hồ đo nước gia đình tháng này chỉ số tiêu thụ là 18 m³. Gia đình đã dùng: 18 × 1 000 = 18 000 lít nước.",
        "quiz": {
          "q": "Số thích hợp điền vào chỗ chấm: 2 m³ 80 dm³ = ......... dm³ là:",
          "options": [
            "2 080 dm³",
            "2 800 dm³",
            "280 dm³",
            "2,08 dm³"
          ],
          "ans": 0,
          "exp": "2 m³ = 2 000 dm³. Vậy 2 m³ 80 dm³ = 2 000 + 80 = 2 080 dm³."
        }
      },
      {
        "num": 48,
        "topicId": 8,
        "title": "Bài 48. Luyện tập chung về đơn vị đo thể tích",
        "newKnowledge": "Tổng hợp bảng đơn vị đo thể tích m³, dm³, cm³ và mối liên hệ với đơn vị đo dung tích lít. Vận dụng làm bài toán chuyển đổi số thập phân thể tích.",
        "formula": "Bảng đơn vị: m³  ↔ (1 000) ↔  dm³ (lít)  ↔ (1 000) ↔  cm³ (ml)",
        "example": "Viết dưới dạng số thập phân có đơn vị là mét khối:\na) 4 m³ 75 dm³ = 4,075 m³.\nb) 2 500 dm³ = 2,5 m³.\nc) 650 000 cm³ = 0,65 m³.",
        "exercise": "Dạng 1: Chuyển đổi số đo thể tích sang số thập phân.\nDạng 2: So sánh và sắp xếp các số đo thể tích.\nDạng 3: Bài toán giải có liên quan đến bơm nước vào bể.",
        "practicalApp": "Một máy bơm nước mỗi phút bơm được 50 lít nước. Để bơm đầy một bể chứa 3 m³ (3 000 lít) cần thời gian là: 3 000 : 50 = 60 phút = 1 giờ.",
        "quiz": {
          "q": "3 m³ 5 dm³ đổi ra đơn vị mét khối bằng số thập phân là:",
          "options": [
            "3,005 m³",
            "3,05 m³",
            "3,5 m³",
            "35 m³"
          ],
          "ans": 0,
          "exp": "5 dm³ = 5/1 000 m³ = 0,005 m³. Vậy 3 m³ 5 dm³ = 3,005 m³."
        }
      }
    ]
  },
  {
    "id": 9,
    "book": 2,
    "name": "Chủ đề 9. Diện tích và thể tích một số hình khối (Bài 49–55)",
    "desc": "Hình hộp chữ nhật, hình lập phương.",
    "lessons": [
      {
        "num": 49,
        "topicId": 9,
        "title": "Bài 49. Hình hộp chữ nhật và Hình lập phương",
        "newKnowledge": "Hình hộp chữ nhật có 6 mặt là hình chữ nhật, 8 đỉnh, 12 cạnh; có 3 kích thước: chiều dài a, chiều rộng b, chiều cao h. Hình lập phương có 6 mặt là các hình vuông bằng nhau, 8 đỉnh, 12 cạnh dài bằng nhau (cạnh a).",
        "formula": "Hình hộp chữ nhật: 3 kích thước a, b, h\nHình lập phương: 1 kích thước a (cạnh)",
        "example": "Một hình lập phương có cạnh 6 cm. Diện tích một mặt của hình lập phương là: 6 × 6 = 36 (cm²).",
        "exercise": "Dạng 1: Nhận biết đỉnh, cạnh, mặt của hình hộp chữ nhật và hình lập phương.\nDạng 2: Tính diện tích một mặt.\nDạng 3: Vẽ hình khai triển của hình hộp và lập phương.",
        "practicalApp": "Chiếc hộp bánh bằng bìa hình lập phương cạnh 10 cm. Diện tích bìa một mặt là 100 cm².",
        "quiz": {
          "q": "Hình hộp chữ nhật có tất cả bao nhiêu đỉnh và bao nhiêu cạnh?",
          "options": [
            "8 đỉnh, 12 cạnh",
            "6 đỉnh, 8 cạnh",
            "8 đỉnh, 6 cạnh",
            "12 đỉnh, 8 cạnh"
          ],
          "ans": 0,
          "exp": "Hình hộp chữ nhật có 8 đỉnh và 12 cạnh."
        }
      },
      {
        "num": 50,
        "topicId": 9,
        "title": "Bài 50. Diện tích xung quanh và Diện tích toàn phần hình hộp chữ nhật",
        "newKnowledge": "Diện tích xung quanh của hình hộp chữ nhật bằng chu vi mặt đáy nhân với chiều cao (cùng đơn vị đo). Diện tích toàn phần bằng diện tích xung quanh cộng với diện tích hai mặt đáy.",
        "formula": "Sxq = 2 × (a + b) × h\nStp = Sxq + 2 × a × b",
        "example": "Hình hộp chữ nhật có a = 5 dm, b = 4 dm, h = 3 dm.\nSxq = 2 × (5 + 4) × 3 = 54 (dm²).\nSđáy = 5 × 4 = 20 (dm²).\nStp = 54 + 2 × 20 = 94 (dm²).",
        "exercise": "Dạng 1: Tính Sxq và Stp hình hộp chữ nhật.\nDạng 2: Tính diện tích quét sơn thùng không có nắp (Stp = Sxq + 1 mặt đáy).\nDạng 3: Tính chiều cao khi biết Sxq và chu vi đáy.",
        "practicalApp": "Một căn phòng học hình hộp chữ nhật dài 8 m, rộng 6 m, cao 3,5 m. Người ta muốn quét vôi tường và trần nhà. Biết tổng diện tích các cửa là 12 m². Diện tích cần quét vôi là: Sxq + S trần - Scửa = [2 × (8 + 6) × 3,5] + (8 × 6) - 12 = 98 + 48 - 12 = 134 (m²).",
        "quiz": {
          "q": "Hình hộp chữ nhật có chiều dài 6 cm, chiều rộng 4 cm, chiều cao 5 cm. Diện tích xung quanh là:",
          "options": [
            "100 cm²",
            "148 cm²",
            "120 cm²",
            "48 cm²"
          ],
          "ans": 0,
          "exp": "Sxq = 2 × (6 + 4) × 5 = 2 × 10 × 5 = 100 cm²."
        }
      },
      {
        "num": 51,
        "topicId": 9,
        "title": "Bài 51. Diện tích xung quanh và Diện tích toàn phần hình lập phương",
        "newKnowledge": "Vì 6 mặt của hình lập phương là các hình vuông bằng nhau nên: Diện tích xung quanh bằng diện tích một mặt nhân với 4. Diện tích toàn phần bằng diện tích một mặt nhân với 6.",
        "formula": "Sxq = 4 × a²\nStp = 6 × a²\n(a² = Sxq : 4 = Stp : 6)",
        "example": "Hình lập phương có cạnh a = 5 cm.\nSxq = 4 × (5 × 5) = 100 (cm²).\nStp = 6 × (5 × 5) = 150 (cm²).",
        "exercise": "Dạng 1: Tính Sxq và Stp khi biết độ dài cạnh a.\nDạng 2: Tìm cạnh a khi biết Sxq hoặc Stp.\nDạng 3: So sánh diện tích khi tăng cạnh a lên n lần (diện tích tăng n² lần).",
        "practicalApp": "Người ta dán giấy màu xung quanh một chiếc hộp hình lập phương không nắp có cạnh 8 cm. Diện tích giấy màu cần dán là (5 mặt): 5 × (8 × 8) = 320 (cm²).",
        "quiz": {
          "q": "Một hình lập phương có diện tích toàn phần là 54 dm². Diện tích xung quanh của hình lập phương đó là:",
          "options": [
            "36 dm²",
            "18 dm²",
            "9 dm²",
            "27 dm²"
          ],
          "ans": 0,
          "exp": "Diện tích 1 mặt = 54 : 6 = 9 dm². Diện tích xung quanh = 9 × 4 = 36 dm²."
        }
      },
      {
        "num": 52,
        "topicId": 9,
        "title": "Bài 52. Thể tích hình hộp chữ nhật",
        "newKnowledge": "Muốn tính thể tích hình hộp chữ nhật ta lấy chiều dài nhân với chiều rộng rồi nhân với chiều cao (cùng một đơn vị đo). Thể tích = Diện tích mặt đáy × Chiều cao.",
        "formula": "V = a × b × h\nh = V : (a × b)\n(a × b) = V : h",
        "example": "Hình hộp chữ nhật có a = 12 cm, b = 8 cm, h = 5 cm.\nThể tích là: V = 12 × 8 × 5 = 480 (cm³).",
        "exercise": "Dạng 1: Tính thể tích hình hộp chữ nhật.\nDạng 2: Tính chiều cao khi biết thể tích và diện tích đáy.\nDạng 3: Bài toán tính khối lượng vật thể khi biết khối lượng riêng (khối lượng = thể tích × D).",
        "practicalApp": "Một khúc gỗ hình hộp chữ nhật dài 2 m, rộng 0,5 m, cao 0,4 m. Thể tích khúc gỗ là: 2 × 0,5 × 0,4 = 0,4 (m³). Nếu 1 m³ gỗ nặng 800 kg thì khúc gỗ đó nặng: 0,4 × 800 = 320 (kg).",
        "quiz": {
          "q": "Thể tích của hình hộp chữ nhật có a = 7 dm, b = 4 dm, h = 3 dm là:",
          "options": [
            "84 dm³",
            "94 dm³",
            "56 dm³",
            "68 dm³"
          ],
          "ans": 0,
          "exp": "V = 7 × 4 × 3 = 84 dm³."
        }
      },
      {
        "num": 53,
        "topicId": 9,
        "title": "Bài 53. Thể tích hình lập phương",
        "newKnowledge": "Muốn tính thể tích hình lập phương ta lấy cạnh nhân với cạnh rồi nhân với cạnh.",
        "formula": "V = a × a × a = a³\nNếu cạnh tăng lên n lần thì thể tích tăng lên n³ lần.",
        "example": "Hình lập phương có cạnh a = 4 cm.\nThể tích là: V = 4 × 4 × 4 = 64 (cm³).",
        "exercise": "Dạng 1: Tính thể tích hình lập phương theo công thức.\nDạng 2: Tìm cạnh a khi biết thể tích.\nDạng 3: Bài toán tỉ lệ thể tích khi thay đổi kích thước cạnh.",
        "practicalApp": "Một khối kim loại hình lập phương cạnh 0,2 m. Thể tích khối kim loại là: 0,2 × 0,2 × 0,2 = 0,008 (m³).",
        "quiz": {
          "q": "Một hình lập phương có cạnh 6 cm. Thể tích hình lập phương đó là:",
          "options": [
            "216 cm³",
            "144 cm³",
            "36 cm³",
            "72 cm³"
          ],
          "ans": 0,
          "exp": "V = 6 × 6 × 6 = 216 cm³."
        }
      },
      {
        "num": 54,
        "topicId": 9,
        "title": "Bài 54. Luyện tập chung về diện tích và Thể tích hình khối",
        "newKnowledge": "Củng cố công thức tính diện tích xung quanh, diện tích toàn phần và thể tích của hình hộp chữ nhật và hình lập phương.",
        "formula": "Hình hộp: Sxq = 2(a + b)h;   Stp = Sxq + 2ab;   V = abh\nHình lập phương: Sxq = 4a²;   Stp = 6a²;   V = a³",
        "example": "Một hình lập phương có diện tích xung quanh là 64 cm².\nDiện tích 1 mặt: 64 : 4 = 16 cm².\nVì 4 × 4 = 16 nên cạnh a = 4 cm.\nThể tích hình lập phương là: V = 4 × 4 × 4 = 64 (cm³).",
        "exercise": "Dạng 1: Tính toán so sánh diện tích và thể tích giữa hình hộp và hình lập phương.\nDạng 2: Bài toán cắt ghép khối gỗ.\nDạng 3: Tính toán vật liệu chế tạo vỏ hộp.",
        "practicalApp": "Một chiếc thùng tôn không nắp hình hộp chữ nhật dài 1,2 m, rộng 0,8 m và cao 0,5 m. Diện tích tôn cần dùng là: [2 × (1,2 + 0,8) × 0,5] + (1,2 × 0,8) = 2 + 0,96 = 2,96 (m²).",
        "quiz": {
          "q": "Nếu cạnh của hình lập phương gấp lên 3 lần thì thể tích của nó gấp lên bao nhiêu lần?",
          "options": [
            "27 lần",
            "9 lần",
            "3 lần",
            "6 lần"
          ],
          "ans": 0,
          "exp": "V mới = (3a) × (3a) × (3a) = 27 × a³ = 27 lần V ban đầu."
        }
      },
      {
        "num": 55,
        "topicId": 9,
        "title": "Bài 55. Bài toán thực tế về thể tích bể nước, vật chứa",
        "newKnowledge": "Ứng dụng công thức tính thể tích để tính lượng nước chứa trong bể, thời gian bơm nước đầy bể và độ cao mực nước trong bình chứa.",
        "formula": "Thể tích nước trong bể = a × b × Chiều cao mực nước (h)\nThời gian đầy bể = Thể tích phần còn trống : Lưu lượng bơm mỗi phút",
        "example": "Một bể bơi dài 25 m, rộng 10 m, mực nước sâu 1,2 m. Lượng nước hiện có trong bể là: 25 × 10 × 1,2 = 300 (m³) = 300 000 (lít nước).",
        "exercise": "Dạng 1: Tính thể tích nước chứa trong bể hình hộp chữ nhật.\nDạng 2: Tính chiều cao mực nước khi biết thể tích nước.\nDạng 3: Bài toán thả hòn non bộ chìm vào nước.",
        "practicalApp": "Một bể kính nuôi cá hình hộp chữ nhật dài 80 cm, rộng 50 cm chứa nước sâu 30 cm. Người ta thả vào bể một hòn non bộ chìm hẳn thì mực nước dâng cao thành 35 cm. Thể tích hòn non bộ là: 80 × 50 × (35 - 30) = 4 000 × 5 = 20 000 cm³ = 20 dm³.",
        "quiz": {
          "q": "Một bể nước hình hộp chữ nhật dài 2 m, rộng 1,5 m đang chứa 3 000 lít nước. Mực nước trong bể cao là:",
          "options": [
            "1 m",
            "1,5 m",
            "0,8 m",
            "1,2 m"
          ],
          "ans": 0,
          "exp": "3 000 lít = 3 m³. Chiều cao mực nước = V : (a × b) = 3 : (2 × 1,5) = 3 : 3 = 1 m."
        }
      }
    ]
  },
  {
    "id": 10,
    "book": 2,
    "name": "Chủ đề 10. Số đo thời gian, vận tốc, chuyển động đều (Bài 56–62)",
    "desc": "Thời gian, vận tốc, quãng đường, chuyển động ngược chiều/cùng chiều.",
    "lessons": [
      {
        "num": 56,
        "topicId": 10,
        "title": "Bài 56. Bảng đơn vị đo thời gian và Đổi đơn vị",
        "newKnowledge": "Các đơn vị đo thời gian: thế kỉ, năm, tháng, tuần, ngày, giờ, phút, giây. Đổi số đo thời gian sang phân số hoặc số thập phân.",
        "formula": "1 thế kỉ = 100 năm\n1 năm = 12 tháng (năm nhuận có 366 ngày, năm thường có 365 ngày)\n1 ngày = 24 giờ;   1 giờ = 60 phút;   1 phút = 60 giây",
        "example": "a) 2 giờ 30 phút = 2,5 giờ (vì 30/60 = 0,5).\nb) 45 phút = 45/60 giờ = 3/4 giờ = 0,75 giờ.\nc) 1 giờ 15 phút = 1,25 giờ = 75 phút.",
        "exercise": "Dạng 1: Chuyển đổi đơn vị thời gian sang số thập phân của giờ, phút.\nDạng 2: Xác định năm thuộc thế kỉ nào.\nDạng 3: So sánh các khoảng thời gian.",
        "practicalApp": "Chiến thắng Điện Biên Phủ diễn ra năm 1954, thuộc thế kỉ XX (thế kỉ hai mươi).",
        "quiz": {
          "q": "1 giờ 36 phút đổi ra đơn vị giờ bằng số thập phân là:",
          "options": [
            "1,6 giờ",
            "1,36 giờ",
            "1,5 giờ",
            "1,45 giờ"
          ],
          "ans": 0,
          "exp": "36 phút = 36/60 giờ = 0,6 giờ. Vậy 1 giờ 36 phút = 1,6 giờ."
        }
      },
      {
        "num": 57,
        "topicId": 10,
        "title": "Bài 57. Cộng, trừ số đo thời gian",
        "newKnowledge": "Cộng, trừ các số đo thời gian theo từng hàng đơn vị (giờ theo giờ, phút theo phút, giây theo giây). Nếu số phút hoặc giây ở kết quả cộng ≥ 60 thì đổi sang đơn vị lớn hơn tiếp liền. Nếu số phút hoặc giây ở số bị trừ nhỏ hơn số trừ thì đổi 1 đơn vị hàng lớn hơn sang 60 đơn vị hàng nhỏ hơn rồi trừ.",
        "formula": "Đặt tính thẳng hàng theo từng đơn vị: giờ, phút, giây.",
        "example": "a) 3 giờ 25 phút + 2 giờ 40 phút = 5 giờ 65 phút = 6 giờ 5 phút.\nb) 4 giờ 15 phút - 1 giờ 35 phút = 3 giờ 75 phút - 1 giờ 35 phút = 2 giờ 40 phút.",
        "exercise": "Dạng 1: Đặt tính rồi tính cộng, trừ thời gian.\nDạng 2: Tính thời gian làm việc, thời gian nghỉ giải lao.\nDạng 3: Bài toán tính giờ xuất phát và giờ đến nơi.",
        "practicalApp": "Một xe khách khởi hành từ bến xe lúc 7 giờ 30 phút và đến nơi lúc 10 giờ 15 phút. Thời gian xe chạy trên đường là: 10 giờ 15 phút - 7 giờ 30 phút = 2 giờ 45 phút.",
        "quiz": {
          "q": "Kết quả của phép trừ: 5 giờ 20 phút - 2 giờ 45 phút là:",
          "options": [
            "2 giờ 35 phút",
            "2 giờ 45 phút",
            "3 giờ 35 phút",
            "2 giờ 25 phút"
          ],
          "ans": 0,
          "exp": "5 giờ 20 phút = 4 giờ 80 phút. Trừ 2 giờ 45 phút = 2 giờ 35 phút."
        }
      },
      {
        "num": 58,
        "topicId": 10,
        "title": "Bài 58. Nhân, chia số đo thời gian",
        "newKnowledge": "Nhân số đo thời gian: nhân từng đơn vị đo với số tự nhiên, nếu kết quả ở đơn vị nhỏ ≥ 60 thì chuyển đổi sang đơn vị lớn hơn. Chia số đo thời gian: chia từ đơn vị lớn đến đơn vị nhỏ, phần dư đổi sang đơn vị bé hơn rồi cộng lại để chia tiếp.",
        "formula": "(a giờ b phút) × n = (a × n) giờ (b × n) phút\n(a giờ b phút) : n = chia từng hàng đơn vị",
        "example": "a) 1 giờ 25 phút × 3 = 3 giờ 75 phút = 4 giờ 15 phút.\nb) 7 giờ 40 phút : 4 = 1 giờ 55 phút (7 giờ : 4 = 1 giờ dư 3 giờ = 180 phút; 180 + 40 = 220 phút; 220 : 4 = 55 phút).",
        "exercise": "Dạng 1: Thực hiện nhân, chia số đo thời gian với số tự nhiên.\nDạng 2: Bài toán sản xuất nhiều sản phẩm cùng loại.\nDạng 3: Tính thời gian trung bình hoàn thành một công việc.",
        "practicalApp": "Một người thợ làm 1 chi tiết máy hết 45 phút. Người đó làm 4 chi tiết máy như thế hết thời gian là: 45 phút × 4 = 180 phút = 3 giờ.",
        "quiz": {
          "q": "Kết quả của phép tính: 2 giờ 15 phút × 4 là:",
          "options": [
            "9 giờ",
            "8 giờ 60 phút",
            "8 giờ 45 phút",
            "9 giờ 15 phút"
          ],
          "ans": 0,
          "exp": "2 giờ × 4 = 8 giờ; 15 phút × 4 = 60 phút = 1 giờ. Tổng = 9 giờ."
        }
      },
      {
        "num": 59,
        "topicId": 10,
        "title": "Bài 59. Vận tốc",
        "newKnowledge": "Vận tốc là quãng đường chuyển động được trong một đơn vị thời gian (1 giờ, 1 phút hoặc 1 giây). Đơn vị vận tốc thường dùng là km/h (km/giờ) hoặc m/s (m/giây). Muốn tính vận tốc ta lấy quãng đường chia cho thời gian.",
        "formula": "v = s : t",
        "example": "Một người đi xe máy đi được quãng đường 120 km trong thời gian 3 giờ. Vận tốc của người đi xe máy là: v = 120 : 3 = 40 (km/h).",
        "exercise": "Dạng 1: Tính vận tốc khi biết quãng đường và thời gian.\nDạng 2: Đổi đơn vị thời gian trước khi tính vận tốc.\nDạng 3: So sánh vận tốc của các phương tiện.",
        "practicalApp": "Vận động viên bơi lội bơi được quãng đường 100 m trong thời gian 50 giây. Vận tốc bơi của vận động viên là: 100 : 50 = 2 (m/s).",
        "quiz": {
          "q": "Một ô tô đi được 150 km trong 2,5 giờ. Vận tốc của ô tô đó là:",
          "options": [
            "60 km/h",
            "55 km/h",
            "65 km/h",
            "75 km/h"
          ],
          "ans": 0,
          "exp": "v = 150 : 2,5 = 60 km/h."
        }
      },
      {
        "num": 60,
        "topicId": 10,
        "title": "Bài 60. Quãng đường",
        "newKnowledge": "Muốn tính quãng đường ta lấy vận tốc nhân với thời gian. Chú ý: Đơn vị của vận tốc và thời gian phải tương ứng với nhau (ví dụ: vận tốc km/h thì thời gian phải tính bằng giờ).",
        "formula": "s = v × t",
        "example": "Một người đi xe đạp với vận tốc 12 km/h trong thời gian 2 giờ 30 phút.\nĐổi 2 giờ 30 phút = 2,5 giờ.\nQuãng đường đi được là: s = 12 × 2,5 = 30 (km).",
        "exercise": "Dạng 1: Áp dụng trực tiếp công thức tính quãng đường s = v × t.\nDạng 2: Đổi đơn vị thời gian ra giờ trước khi tính quãng đường.\nDạng 3: Bài toán tính chiều dài cây cầu khi đoàn tàu chạy qua.",
        "practicalApp": "Một máy bay bay với vận tốc 850 km/h từ Hà Nội vào TP. Hồ Chí Minh trong thời gian 2 giờ. Quãng đường bay là: 850 × 2 = 1 700 (km).",
        "quiz": {
          "q": "Một người đi bộ với vận tốc 4,5 km/h trong thời gian 1 giờ 20 phút. Quãng đường đi được là:",
          "options": [
            "6 km",
            "5,5 km",
            "5 km",
            "4,5 km"
          ],
          "ans": 0,
          "exp": "1 giờ 20 phút = 4/3 giờ. Quãng đường s = 4,5 × 4/3 = 6 km."
        }
      },
      {
        "num": 61,
        "topicId": 10,
        "title": "Bài 61. Thời gian",
        "newKnowledge": "Muốn tính thời gian ta lấy quãng đường chia cho vận tốc. Chú ý: Đổi kết quả thời gian từ dạng số thập phân sang giờ và phút.",
        "formula": "t = s : v",
        "example": "Một ô tô đi quãng đường dài 160 km với vận tốc 50 km/h.\nThời gian ô tô đi là: t = 160 : 50 = 3,2 giờ.\nĐổi 3,2 giờ = 3 giờ 12 phút (vì 0,2 × 60 = 12 phút).",
        "exercise": "Dạng 1: Tính thời gian chuyển động t = s : v.\nDạng 2: Đổi kết quả thời gian sang giờ, phút, giây.\nDạng 3: Tính giờ khởi hành hoặc giờ đến nơi.",
        "practicalApp": "Bác Ba đi xe máy từ quê lên thành phố trên quãng đường 75 km với vận tốc 37,5 km/h. Bác xuất phát lúc 6 giờ sáng. Bác đến nơi lúc: 6 giờ + (75 : 37,5) = 6 giờ + 2 giờ = 8 giờ sáng.",
        "quiz": {
          "q": "Một tàu hỏa đi quãng đường 210 km với vận tốc 60 km/h. Thời gian tàu hỏa đi là:",
          "options": [
            "3 giờ 30 phút",
            "3 giờ 15 phút",
            "3,5 phút",
            "3 giờ 20 phút"
          ],
          "ans": 0,
          "exp": "t = 210 : 60 = 3,5 giờ = 3 giờ 30 phút."
        }
      },
      {
        "num": 62,
        "topicId": 10,
        "title": "Bài 62. Bài toán hai chuyển động cùng chiều và Ngược chiều",
        "newKnowledge": "1. Hai chuyển động ngược chiều xuất phát cùng lúc:\nThời gian gặp nhau = Quãng đường cách nhau ban đầu : Tổng hai vận tốc (v₁ + v₂).\n2. Hai chuyển động cùng chiều xuất phát cùng lúc (v₁ > v₂):\nThời gian đuổi kịp = Khoảng cách cách nhau ban đầu : Hiệu hai vận tốc (v₁ - v₂).",
        "formula": "t(gặp nhau) = s : (v₁ + v₂)\nt(đuổi kịp) = s : (v₁ - v₂)\nChuyển động trên dòng nước: Vxuôi = Vthực + Vnước;   Vngược = Vthực - Vnước",
        "example": "Hai người đi xe máy xuất phát cùng lúc từ A và B cách nhau 90 km đi ngược chiều nhau. Vận tốc người đi từ A là 30 km/h, từ B là 15 km/h.\nThời gian hai người gặp nhau là: 90 : (30 + 15) = 90 : 45 = 2 (giờ).",
        "exercise": "Dạng 1: Chuyển động ngược chiều gặp nhau cùng lúc hoặc khác lúc.\nDạng 2: Chuyển động cùng chiều đuổi nhau.\nDạng 3: Chuyển động xuôi dòng và ngược dòng nước.",
        "practicalApp": "Một ca nô đi xuôi dòng khúc sông từ A đến B dài 60 km. Vận tốc ca nô khi nước lặng là 27 km/h, vận tốc dòng nước là 3 km/h. Vận tốc xuôi dòng: 27 + 3 = 30 km/h. Thời gian ca nô đi từ A đến B là: 60 : 30 = 2 (giờ).",
        "quiz": {
          "q": "Một người đi xe đạp với vận tốc 12 km/h. Sau 2 giờ, một xe máy đuổi theo với vận tốc 36 km/h. Thời gian để xe máy đuổi kịp xe đạp là:",
          "options": [
            "1 giờ",
            "1,5 giờ",
            "2 giờ",
            "45 phút"
          ],
          "ans": 0,
          "exp": "Khoảng cách ban đầu = 12 × 2 = 24 km. Hiệu vận tốc = 36 - 12 = 24 km/h. Thời gian đuổi kịp = 24 : 24 = 1 giờ."
        }
      }
    ]
  },
  {
    "id": 11,
    "book": 2,
    "name": "Chủ đề 11. Một số yếu tố thống kê và xác suất (Bài 63–67)",
    "desc": "Bảng số liệu, biểu đồ hình quạt tròn, xác suất thực nghiệm.",
    "lessons": [
      {
        "num": 63,
        "topicId": 11,
        "title": "Bài 63. Thu thập, phân loại và Sắp xếp số liệu thống kê",
        "newKnowledge": "Thu thập số liệu bằng cách quan sát, đếm, đo đạc hoặc phỏng vấn. Phân loại số liệu theo các tiêu chí xác định và trình bày vào bảng số liệu thống kê một cách khoa học.",
        "formula": "Bảng số liệu: Dòng tiêu đề, các cột dữ liệu định tính và định lượng.",
        "example": "Điều tra phương tiện đến trường của 40 học sinh lớp 5C: 15 bạn đi xe đạp, 20 bạn được bố mẹ chở bằng xe máy, 5 bạn đi bộ. Tổng = 15 + 20 + 5 = 40 bạn.",
        "exercise": "Dạng 1: Lập bảng số liệu từ thông tin khảo sát.\nDạng 2: Nhận xét, so sánh dữ liệu từ bảng số liệu.\nDạng 3: Tìm số lớn nhất, số nhỏ nhất và tính giá trị trung bình.",
        "practicalApp": "Thủ thư lập bảng thống kê số lượng sách truyện thiếu nhi được mượn trong các ngày trong tuần để có kế hoạch bổ sung sách mới.",
        "quiz": {
          "q": "Bảng số liệu cho biết số học sinh tham gia clb cờ vua của 4 lớp 5A, 5B, 5C, 5D lần lượt là: 8, 12, 10, 14. Lớp có số học sinh tham gia nhiều nhất là:",
          "options": [
            "Lớp 5D",
            "Lớp 5B",
            "Lớp 5C",
            "Lớp 5A"
          ],
          "ans": 0,
          "exp": "14 là số lớn nhất, tương ứng với Lớp 5D."
        }
      },
      {
        "num": 64,
        "topicId": 11,
        "title": "Bài 64. Biểu đồ hình quạt tròn",
        "newKnowledge": "Biểu đồ hình quạt tròn là hình tròn được chia thành các hình quạt có tỉ lệ diện tích tương ứng với tỉ số phần trăm của từng thành phần so với toàn thể (tổng các phần luôn bằng 100%). Càng chiếm tỉ lệ % lớn thì hình quạt càng lớn.",
        "formula": "Tổng tỉ lệ phần trăm các hình quạt = 100%\nNửa hình tròn = 50%\nMột phần tư hình tròn = 25%",
        "example": "Biểu đồ quạt tròn sở thích môn thể thao của 100 học sinh: Bóng đá chiếm 50% (nửa hình tròn), Cầu lông chiếm 30%, Bơi lội chiếm 20%. Tổng = 50% + 30% + 20% = 100%.",
        "exercise": "Dạng 1: Nhận biết tỉ lệ phần trăm trên biểu đồ quạt tròn.\nDạng 2: Tìm phần trăm còn thiếu (100% trừ đi các phần đã biết).\nDạng 3: Nêu nhận xét xu hướng sở thích từ biểu đồ.",
        "practicalApp": "Biểu đồ chi tiêu gia đình hàng tháng cho thấy tiền ăn uống chiếm 50%, tiền học hành 25%, tiết kiệm 15%, chi tiêu khác 10%.",
        "quiz": {
          "q": "Biểu đồ hình quạt tròn gồm 3 phần: Phần A chiếm 45%, phần B chiếm 35%. Phần C chiếm tỉ lệ là:",
          "options": [
            "20%",
            "25%",
            "15%",
            "30%"
          ],
          "ans": 0,
          "exp": "Phần C = 100% - (45% + 35%) = 100% - 80% = 20%."
        }
      },
      {
        "num": 65,
        "topicId": 11,
        "title": "Bài 65. Đọc và phân tích số liệu trên biểu đồ quạt tròn",
        "newKnowledge": "Kết hợp giữa đọc biểu đồ hình quạt tròn và giải toán tỉ số phần trăm để tính số lượng thực tế của từng nhóm đối tượng khi biết tổng số lượng.",
        "formula": "Số lượng thành phần = Tổng số lượng × Tỉ lệ % của thành phần đó : 100",
        "example": "Một trường có 600 học sinh. Biểu đồ quạt tròn cho biết tỉ lệ học sinh tham gia học bơi là 35%. Số học sinh tham gia bơi là: 600 × 35 : 100 = 210 (học sinh).",
        "exercise": "Dạng 1: Tính số lượng cụ thể của từng phần từ tỉ số %.\nDạng 2: So sánh số lượng giữa hai thành phần trên biểu đồ.\nDạng 3: Bài toán mở rộng chi phí và phân bổ ngân sách.",
        "practicalApp": "Một thư viện trường có 1 200 cuốn sách, trong đó truyện thiếu nhi chiếm 40%, sách tham khảo 35%, báo tạp chí 25%. Số sách truyện thiếu nhi là: 1 200 × 40 : 100 = 480 cuốn.",
        "quiz": {
          "q": "Kho hàng có 800 tấn hàng. Biểu đồ quạt tròn cho biết gạo chiếm 65%, ngô chiếm 35%. Khối lượng gạo trong kho là:",
          "options": [
            "520 tấn",
            "480 tấn",
            "560 tấn",
            "500 tấn"
          ],
          "ans": 0,
          "exp": "800 × 65 : 100 = 520 tấn."
        }
      },
      {
        "num": 66,
        "topicId": 11,
        "title": "Bài 66. Tỉ số mô tả khả năng xảy ra của một sự kiện (Xác suất thực nghiệm)",
        "newKnowledge": "Khi thực hiện lặp đi lặp lại một thử nghiệm nhiều lần trong cùng điều kiện, tỉ số giữa số lần sự kiện đó xuất hiện và tổng số lần thực hiện thử nghiệm được gọi là xác suất thực nghiệm của sự kiện.",
        "formula": "Tỉ số xác suất thực nghiệm = Số lần sự kiện xảy ra : Tổng số lần thực nghiệm",
        "example": "Tung đồng xu 50 lần, có 28 lần xuất hiện mặt sấp. Tỉ số mô tả khả năng xuất hiện mặt sấp là: 28 / 50 = 14/25 = 56%.",
        "exercise": "Dạng 1: Tính tỉ số xác suất thực nghiệm khi tung đồng xu, gieo xúc xắc.\nDạng 2: Thử nghiệm bốc bóng trong hộp kín.\nDạng 3: Dự đoán kết quả sự kiện trong tương lai.",
        "practicalApp": "Một cầu thủ sút phạt đền 20 lần và ghi bàn được 17 lần. Tỉ số thành công của cầu thủ đó là: 17/20 = 85%.",
        "quiz": {
          "q": "Gieo một con xúc xắc 6 mặt 60 lần, thấy có 12 lần xuất hiện mặt 1 chấm. Tỉ số mô tả khả năng xuất hiện mặt 1 chấm là:",
          "options": [
            "1/5 (hay 20%)",
            "1/6",
            "12/50",
            "1/4"
          ],
          "ans": 0,
          "exp": "12 / 60 = 1/5 = 20%."
        }
      },
      {
        "num": 67,
        "topicId": 11,
        "title": "Bài 67. Luyện tập chung về thống kê và Xác suất",
        "newKnowledge": "Củng cố toàn bộ kỹ năng thu thập số liệu, biểu diễn biểu đồ quạt tròn và tính xác suất thực nghiệm trong các trò chơi xác suất đơn giản.",
        "formula": "Tổng hợp các kỹ năng đọc bảng biểu và tính xác suất thực nghiệm.",
        "example": "Một hộp có 10 quả bóng gồm 4 bóng đỏ, 6 bóng xanh. Lấy ngẫu nhiên 30 lần (mỗi lần lấy xong lại bỏ lại hộp), có 11 lần lấy được bóng đỏ. Tỉ số thực nghiệm lấy bóng đỏ là: 11/30.",
        "exercise": "Dạng 1: Bài toán tổng hợp bảng số liệu và biểu đồ.\nDạng 2: Phân tích đánh giá xác suất thắng thua trong trò chơi dân gian.\nDạng 3: Báo cáo kết quả khảo sát lớp học.",
        "practicalApp": "Khảo sát ý kiến của 100 phụ huynh về chương trình ngoại khóa: 85 phụ huynh đồng ý, 15 phụ huynh đề xuất thay đổi. Tỉ lệ đồng ý đạt 85%.",
        "quiz": {
          "q": "Quay một vòng quay may mắn có 4 ô bằng nhau 40 lần, kim dừng ở ô trúng thưởng 14 lần. Tỉ số xác suất trúng thưởng là:",
          "options": [
            "7/20 (hay 35%)",
            "14/30",
            "1/4 (hay 25%)",
            "14/50"
          ],
          "ans": 0,
          "exp": "14 / 40 = 7/20 = 35%."
        }
      }
    ]
  },
  {
    "id": 12,
    "book": 2,
    "name": "Chủ đề 12. Ôn tập cuối năm (Bài 68–75)",
    "desc": "Tổng hợp số học, hình học, đo lường, chuyển động, đề thi chuyển cấp.",
    "lessons": [
      {
        "num": 68,
        "topicId": 12,
        "title": "Bài 68. Ôn tập số học và Phép tính",
        "newKnowledge": "Tổng kết toàn diện 4 phép tính: cộng, trừ, nhân, chia trên tập hợp số tự nhiên, phân số và số thập phân. Kỹ năng tính giá trị biểu thức và tính nhanh bằng tính chất phép toán.",
        "formula": "a + b = b + a;   a × b = b × a;   a × (b + c) = a × b + a × c",
        "example": "Tính: 3,45 × 12,8 - 3,45 × 2,8 = 3,45 × (12,8 - 2,8) = 3,45 × 10 = 34,5.",
        "exercise": "Dạng 1: Tính toán số học phối hợp.\nDạng 2: Tính nhanh thuận tiện.\nDạng 3: Tìm X.",
        "practicalApp": "Tính tổng chi tiêu gia đình và cân đối ngân sách tiết kiệm hàng tháng.",
        "quiz": {
          "q": "Kết quả của phép tính 0,25 × 1,8 × 40 là:",
          "options": [
            "18",
            "1,8",
            "180",
            "7,2"
          ],
          "ans": 0,
          "exp": "(0,25 × 40) × 1,8 = 10 × 1,8 = 18."
        }
      },
      {
        "num": 69,
        "topicId": 12,
        "title": "Bài 69. Ôn tập đo lường và Đổi đơn vị",
        "newKnowledge": "Hệ thống các bảng đơn vị đo: Độ dài (m), Khối lượng (tấn, kg), Diện tích (ha, m²), Thể tích (m³, lít), Thời gian (giờ, phút).",
        "formula": "1 ha = 10 000 m²;   1 m³ = 1 000 lít;   1 giờ = 60 phút = 3 600 giây",
        "example": "Đổi đơn vị:\na) 4,5 tấn = 4 500 kg.\nb) 3 ha 25 m² = 3,0025 ha = 30 025 m².\nc) 2,4 m³ = 2 400 dm³ = 2 400 lít.",
        "exercise": "Dạng 1: Điền số thích hợp vào chỗ trống.\nDạng 2: Viết số đo dưới dạng số thập phân.\nDạng 3: So sánh các số đo khác đơn vị.",
        "practicalApp": "Một xe tải chở 3,5 tấn hàng gồm 2 tấn 8 tạ gạo, còn lại là ngô. Khối lượng ngô là: 35 tạ - 28 tạ = 7 tạ = 700 kg.",
        "quiz": {
          "q": "2 m³ 15 dm³ viết dưới dạng số thập phân theo đơn vị mét khối là:",
          "options": [
            "2,015 m³",
            "2,15 m³",
            "2,0015 m³",
            "21,5 m³"
          ],
          "ans": 0,
          "exp": "15 dm³ = 0,015 m³. Vậy 2 m³ 15 dm³ = 2,015 m³."
        }
      },
      {
        "num": 70,
        "topicId": 12,
        "title": "Bài 70. Ôn tập hình học phẳng và Hình khối",
        "newKnowledge": "Tổng hợp toàn bộ công thức chu vi, diện tích hình tam giác, hình thang, hình tròn; diện tích xung quanh, diện tích toàn phần và thể tích hình hộp chữ nhật, hình lập phương.",
        "formula": "Tam giác: (a × h) : 2      Hình thang: (a + b) × h : 2      Hình tròn: C = 2 × r × 3,14;   S = r × r × 3,14\nHộp chữ nhật: V = abh      Hình lập phương: V = a³",
        "example": "Một hình lập phương có diện tích toàn phần là 96 cm².\nDiện tích 1 mặt: 96 : 6 = 16 cm² → Cạnh a = 4 cm.\nThể tích: V = 4 × 4 × 4 = 64 cm³.",
        "exercise": "Dạng 1: Tính diện tích và thể tích hình học tổng hợp.\nDạng 2: Bài toán thực tế ốp gạch bể nước.\nDạng 3: Bài toán tính diện tích phần đất không trồng cây.",
        "practicalApp": "Người ta làm một chiếc bể kính hình lập phương cạnh 0,8 m không nắp. Diện tích kính cần dùng (5 mặt) là: 5 × (0,8 × 0,8) = 3,2 (m²).",
        "quiz": {
          "q": "Một hình tam giác có đáy 16 cm và diện tích 72 cm². Chiều cao tương ứng là:",
          "options": [
            "9 cm",
            "4,5 cm",
            "18 cm",
            "8 cm"
          ],
          "ans": 0,
          "exp": "h = (72 × 2) : 16 = 144 : 16 = 9 cm."
        }
      },
      {
        "num": 71,
        "topicId": 12,
        "title": "Bài 71. Ôn tập chuyển động đều",
        "newKnowledge": "Khắc sâu 3 công thức: v = s : t, s = v × t, t = s : v; các bài toán hai chuyển động ngược chiều gặp nhau và cùng chiều đuổi nhau; chuyển động trên dòng nước.",
        "formula": "v = s : t;   s = v × t;   t = s : v\nt(gặp) = s : (v₁ + v₂);   t(đuổi) = s : (v₁ - v₂)",
        "example": "Hai ô tô xuất phát cùng lúc từ hai tỉnh cách nhau 180 km đi ngược chiều nhau. Vận tốc xe 1 là 55 km/h, xe 2 là 45 km/h. Thời gian hai xe gặp nhau là: 180 : (55 + 45) = 180 : 100 = 1,8 giờ = 1 giờ 48 phút.",
        "exercise": "Dạng 1: Tính v, s, t đơn lẻ.\nDạng 2: Hai chuyển động ngược chiều và cùng chiều.\nDạng 3: Chuyển động của đoàn tàu qua cầu hoặc cột điện.",
        "practicalApp": "Quãng đường từ nhà bạn Nam đến trường dài 3 km, Nam đạp xe với vận tốc 12 km/h. Thời gian Nam đi là: 3 : 12 = 0,25 giờ = 15 phút. Nếu vào học lúc 7 giờ 15 phút, Nam cần xuất phát chậm nhất lúc 7 giờ.",
        "quiz": {
          "q": "Một người đi xe máy với vận tốc 42 km/h trong thời gian 1 giờ 30 phút. Quãng đường đi được là:",
          "options": [
            "63 km",
            "60 km",
            "54 km",
            "42 km"
          ],
          "ans": 0,
          "exp": "1 giờ 30 phút = 1,5 giờ. s = 42 × 1,5 = 63 km."
        }
      },
      {
        "num": 72,
        "topicId": 12,
        "title": "Bài 72. Ôn tập thống kê và Xác suất",
        "newKnowledge": "Củng cố các kỹ năng phân tích bảng số liệu, biểu đồ quạt tròn và tính tỉ số xác suất thực nghiệm trong các thí nghiệm ngẫu nhiên.",
        "formula": "Xác suất thực nghiệm = Số lần sự kiện xảy ra : Tổng số lần thực nghiệm",
        "example": "Biểu đồ quạt tròn cơ cấu phương tiện học sinh: 45% xe đạp, 35% xe máy phụ huynh đưa đón, 20% đi bộ. Khảo sát 200 học sinh, số bạn đi xe đạp là: 200 × 45 : 100 = 90 học sinh.",
        "exercise": "Dạng 1: Đọc và tính toán số liệu biểu đồ quạt tròn.\nDạng 2: Giải toán xác suất thực nghiệm.\nDạng 3: Đưa ra nhận xét xu hướng dữ liệu.",
        "practicalApp": "Phân tích tỉ lệ đánh giá sự hài lòng của khách hàng để nâng cao chất lượng dịch vụ.",
        "quiz": {
          "q": "Một túi có 50 viên kẹo. Biểu đồ quạt tròn cho biết kẹo cam chiếm 20%, kẹo dâu chiếm 40%, kẹo dứa chiếm 40%. Số viên kẹo dâu là:",
          "options": [
            "20 viên",
            "10 viên",
            "25 viên",
            "15 viên"
          ],
          "ans": 0,
          "exp": "50 × 40 : 100 = 20 viên."
        }
      },
      {
        "num": 73,
        "topicId": 12,
        "title": "Bài 73. Ôn tập giải toán có lời văn tổng hợp",
        "newKnowledge": "Tổng hợp các dạng toán điển hình lớp 5: Tổng - Tỉ, Hiệu - Tỉ, Tỉ số phần trăm, Toán hình học chu vi diện tích, thể tích, chuyển động đều.",
        "formula": "Kỹ năng phân tích đề, lập sơ đồ và giải toán bằng nhiều cách khác nhau.",
        "example": "Một hình chữ nhật có chiều dài gấp 3 lần chiều rộng. Nếu tăng chiều rộng thêm 4 m thì diện tích tăng thêm 60 m². Tính diện tích ban đầu của hình chữ nhật.\nPhần diện tích tăng thêm là hình chữ nhật có một cạnh là 4 m và cạnh kia chính là chiều dài ban đầu.\nChiều dài ban đầu: 60 : 4 = 15 m.\nChiều rộng ban đầu: 15 : 3 = 5 m.\nDiện tích ban đầu: 15 × 5 = 75 m².",
        "exercise": "Luyện giải các bài toán chọn lọc nâng cao phát triển tư duy.",
        "practicalApp": "Giải quyết bài toán tối ưu hóa diện tích xây dựng và chi phí vật tư.",
        "quiz": {
          "q": "Tổng số tuổi của hai mẹ con hiện nay là 48 tuổi, mẹ hơn con 26 tuổi. Tuổi con hiện nay là:",
          "options": [
            "11 tuổi",
            "12 tuổi",
            "10 tuổi",
            "14 tuổi"
          ],
          "ans": 0,
          "exp": "Tuổi con = (48 - 26) : 2 = 11 tuổi."
        }
      },
      {
        "num": 74,
        "topicId": 12,
        "title": "Bài 74. Đề luyện thi cuối năm số 1",
        "newKnowledge": "Đề thi khảo sát chất lượng cuối năm môn Toán Lớp 5 theo chuẩn ma trận kiến thức GDPT 2018 (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).",
        "formula": "Hệ thống hóa toàn bộ công thức Toán 5.",
        "example": "Đề bài tự luận mẫu: Một thửa ruộng hình thang có đáy lớn 120 m, đáy bé bằng 2/3 đáy lớn, chiều cao bằng 40 m. Người ta cấy lúa trên thửa ruộng đó, trung bình cứ 100 m² thu hoạch được 65 kg thóc. Tính số tấn thóc thu hoạch được trên thửa ruộng.",
        "exercise": "Làm bài kiểm tra thời gian 40 phút rèn luyện tâm lý phòng thi.",
        "practicalApp": "Tự đánh giá năng lực học tập trước kỳ kiểm tra cuối năm.",
        "quiz": {
          "q": "Số thích hợp điền vào chỗ chấm: 3,4 giờ = ......... giờ ......... phút là:",
          "options": [
            "3 giờ 24 phút",
            "3 giờ 40 phút",
            "3 giờ 4 phút",
            "3 giờ 15 phút"
          ],
          "ans": 0,
          "exp": "0,4 giờ = 0,4 × 60 = 24 phút. Vậy 3,4 giờ = 3 giờ 24 phút."
        }
      },
      {
        "num": 75,
        "topicId": 12,
        "title": "Bài 75. Đề luyện thi chuyển cấp vào Lớp 6",
        "newKnowledge": "Đề thi thử chuyển cấp vào lớp 6 môn Toán với các bài toán phân loại năng lực, rèn luyện tư duy logic, kỹ năng trình bày lập luận chặt chẽ.",
        "formula": "Kỹ năng trình bày bài toán logic, mạch lạc, chính xác.",
        "example": "Bài toán tư duy chuyển cấp: Bác thợ may có một tấm vải dài 12 m. Mỗi ngày bác cắt một mảnh 2 m để may áo. Hỏi sau bao nhiêu ngày thì bác cắt hết tấm vải?\nGiải: Sau ngày thứ 5, bác cắt mảnh vải thứ 5 dài 2 m thì phần còn lại đúng bằng 2 m (chính là mảnh thứ 6 mà không cần cắt nữa). Vậy sau đúng 5 ngày bác cắt xong tấm vải.",
        "exercise": "Đề thi thử vào các trường THCS chất lượng cao.",
        "practicalApp": "Hành trang vững chắc môn Toán để tự tin bước vào cấp Trung học cơ sở.",
        "quiz": {
          "q": "Một ô tô đi từ A đến B với vận tốc 50 km/h hết 2,4 giờ. Khi từ B trở về A, ô tô đi với vận tốc 60 km/h thì hết thời gian là:",
          "options": [
            "2 giờ",
            "2,2 giờ",
            "2 giờ 12 phút",
            "1,8 giờ"
          ],
          "ans": 0,
          "exp": "Quãng đường AB = 50 × 2,4 = 120 km. Thời gian về = 120 : 60 = 2 giờ."
        }
      }
    ]
  }
];

const mathFormulas = [
  {
    "category": "Hình học phẳng",
    "items": [
      {
        "name": "Hình tam giác",
        "formula": "S = (a × h) : 2",
        "note": "a: cạnh đáy, h: chiều cao tương ứng"
      },
      {
        "name": "Hình thang",
        "formula": "S = (a + b) × h : 2",
        "note": "a: đáy lớn, b: đáy bé, h: chiều cao"
      },
      {
        "name": "Hình tròn (Chu vi)",
        "formula": "C = d × 3,14 = 2 × r × 3,14",
        "note": "d: đường kính, r: bán kính"
      },
      {
        "name": "Hình tròn (Diện tích)",
        "formula": "S = r × r × 3,14",
        "note": "r: bán kính"
      }
    ]
  },
  {
    "category": "Hình khối & Thể tích",
    "items": [
      {
        "name": "Hình hộp chữ nhật",
        "formula": "Sxq = 2 × (a + b) × h;   Stp = Sxq + 2 × a × b;   V = a × b × h",
        "note": "a: dài, b: rộng, h: cao"
      },
      {
        "name": "Hình lập phương",
        "formula": "Sxq = 4 × a²;   Stp = 6 × a²;   V = a × a × a = a³",
        "note": "a: cạnh hình lập phương"
      },
      {
        "name": "Quy đổi thể tích",
        "formula": "1 m³ = 1 000 dm³ = 1 000 000 cm³;   1 dm³ = 1 lít",
        "note": "1 dm³ tương đương 1 lít nước"
      }
    ]
  },
  {
    "category": "Chuyển động đều",
    "items": [
      {
        "name": "Vận tốc",
        "formula": "v = s : t",
        "note": "Đơn vị thường là km/h hoặc m/s"
      },
      {
        "name": "Quãng đường",
        "formula": "s = v × t",
        "note": "Đơn vị km hoặc m"
      },
      {
        "name": "Thời gian",
        "formula": "t = s : v",
        "note": "Đơn vị giờ hoặc giây"
      },
      {
        "name": "Ngược chiều gặp nhau",
        "formula": "t(gặp) = s : (v₁ + v₂)",
        "note": "s: khoảng cách ban đầu giữa 2 điểm"
      }
    ]
  },
  {
    "category": "Tỉ số & Phần trăm",
    "items": [
      {
        "name": "Tỉ số phần trăm",
        "formula": "(a : b) × 100%",
        "note": "Tỉ số % của a so với b"
      },
      {
        "name": "Tìm x% của số A",
        "formula": "A × x : 100",
        "note": "Ví dụ: 25% của 240 = 60"
      },
      {
        "name": "Tìm hai số biết Tổng và Tỉ",
        "formula": "Số bé = (Tổng : Tổng số phần) × Số phần bé",
        "note": "Số lớn = Tổng - Số bé"
      },
      {
        "name": "Đo diện tích",
        "formula": "1 km² = 100 ha = 1 000 000 m²;   1 ha = 10 000 m²",
        "note": "Héc-ta và ki-lô-mét vuông"
      }
    ]
  }
];

const trangNguyenMathQuizzes = [
  {
    "q": "Hỗn số 2 3/5 được viết dưới dạng phân số là:",
    "options": [
      "13/5",
      "11/5",
      "10/5",
      "6/5"
    ],
    "ans": 0,
    "exp": "2 3/5 = (2 × 5 + 3) / 5 = 13/5."
  },
  {
    "q": "Chữ số 8 trong số thập phân 95,382 có giá trị là bao nhiêu?",
    "options": [
      "8/100 (hay 0,08)",
      "8/10",
      "8/1000",
      "8"
    ],
    "ans": 0,
    "exp": "Chữ số 8 đứng ở vị trí thứ hai sau dấu phẩy (hàng phần trăm) nên có giá trị là 8/100 = 0,08."
  },
  {
    "q": "3 héc-ta 500 mét vuông được viết dưới dạng héc-ta là:",
    "options": [
      "3,05 ha",
      "3,5 ha",
      "3,005 ha",
      "35 ha"
    ],
    "ans": 0,
    "exp": "1 ha = 10 000 m² nên 500 m² = 500/10 000 ha = 0,05 ha. Vậy 3 ha 500 m² = 3,05 ha."
  },
  {
    "q": "Kết quả của phép tính 12,35 + 4,7 là:",
    "options": [
      "17,05",
      "16,05",
      "17,5",
      "16,42"
    ],
    "ans": 0,
    "exp": "12,35 + 4,70 = 17,05."
  },
  {
    "q": "Phép nhân 2,45 × 100 cho kết quả bằng:",
    "options": [
      "245",
      "24,5",
      "2 450",
      "0,0245"
    ],
    "ans": 0,
    "exp": "Khi nhân số thập phân với 100, ta dời dấu phẩy sang bên phải 2 chữ số: 2,45 × 100 = 245."
  },
  {
    "q": "Một hình tam giác có đáy 12 cm và chiều cao 8 cm. Diện tích hình tam giác đó là:",
    "options": [
      "48 cm²",
      "96 cm²",
      "20 cm²",
      "24 cm²"
    ],
    "ans": 0,
    "exp": "S = (12 × 8) : 2 = 96 : 2 = 48 cm²."
  },
  {
    "q": "Một hình thang có đáy lớn 14 m, đáy bé 10 m, chiều cao 5 m. Diện tích hình thang đó là:",
    "options": [
      "60 m²",
      "120 m²",
      "70 m²",
      "50 m²"
    ],
    "ans": 0,
    "exp": "S = (14 + 10) × 5 : 2 = 24 × 5 : 2 = 60 m²."
  },
  {
    "q": "Một hình tròn có bán kính r = 3 cm. Chu vi của hình tròn đó là:",
    "options": [
      "18,84 cm",
      "9,42 cm",
      "28,26 cm",
      "37,68 cm"
    ],
    "ans": 0,
    "exp": "C = 2 × r × 3,14 = 2 × 3 × 3,14 = 18,84 cm."
  },
  {
    "q": "Diện tích của hình tròn có bán kính r = 4 dm là:",
    "options": [
      "50,24 dm²",
      "25,12 dm²",
      "12,56 dm²",
      "100,48 dm²"
    ],
    "ans": 0,
    "exp": "S = r × r × 3,14 = 4 × 4 × 3,14 = 50,24 dm²."
  },
  {
    "q": "Tìm 25% của 240:",
    "options": [
      "60",
      "48",
      "80",
      "120"
    ],
    "ans": 0,
    "exp": "240 × 25 : 100 = 240 : 4 = 60."
  },
  {
    "q": "Lớp 5B có 40 học sinh, trong đó có 18 bạn nam. Tỉ số phần trăm của số bạn nam so với tổng số học sinh cả lớp là:",
    "options": [
      "45%",
      "55%",
      "40%",
      "48%"
    ],
    "ans": 0,
    "exp": "18 : 40 = 0,45 = 45%."
  },
  {
    "q": "1 mét khối (1 m³) bằng bao nhiêu đề-xi-mét khối (dm³)?",
    "options": [
      "1 000 dm³",
      "100 dm³",
      "10 dm³",
      "1 000 000 dm³"
    ],
    "ans": 0,
    "exp": "1 m³ = 1 000 dm³ = 1 000 lít."
  },
  {
    "q": "Thể tích của hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm, chiều cao 4 cm là:",
    "options": [
      "160 cm³",
      "80 cm³",
      "104 cm³",
      "184 cm³"
    ],
    "ans": 0,
    "exp": "V = a × b × h = 8 × 5 × 4 = 160 cm³."
  },
  {
    "q": "Một hình lập phương có cạnh 4 cm. Diện tích toàn phần của hình lập phương đó là:",
    "options": [
      "96 cm²",
      "64 cm²",
      "16 cm²",
      "24 cm²"
    ],
    "ans": 0,
    "exp": "Stp = 6 × a² = 6 × 4 × 4 = 96 cm²."
  },
  {
    "q": "Thể tích của hình lập phương có cạnh 3 dm là:",
    "options": [
      "27 dm³",
      "9 dm³",
      "18 dm³",
      "54 dm³"
    ],
    "ans": 0,
    "exp": "V = a × a × a = 3 × 3 × 3 = 27 dm³."
  },
  {
    "q": "2 giờ 15 phút đổi ra số thập phân theo đơn vị giờ là:",
    "options": [
      "2,25 giờ",
      "2,15 giờ",
      "2,5 giờ",
      "2,75 giờ"
    ],
    "ans": 0,
    "exp": "15 phút = 15/60 giờ = 0,25 giờ. Vậy 2 giờ 15 phút = 2,25 giờ."
  },
  {
    "q": "Một xe máy đi quãng đường 90 km trong thời gian 2 giờ. Vận tốc của xe máy đó là:",
    "options": [
      "45 km/h",
      "40 km/h",
      "50 km/h",
      "180 km/h"
    ],
    "ans": 0,
    "exp": "v = s : t = 90 : 2 = 45 km/h."
  },
  {
    "q": "Một ô tô đi với vận tốc 54 km/h trong thời gian 2,5 giờ. Quãng đường ô tô đi được là:",
    "options": [
      "135 km",
      "108 km",
      "125 km",
      "140 km"
    ],
    "ans": 0,
    "exp": "s = v × t = 54 × 2,5 = 135 km."
  },
  {
    "q": "Hai thành phố A và B cách nhau 150 km. Hai ô tô xuất phát cùng lúc từ A và B đi ngược chiều nhau. Vận tốc xe thứ nhất là 40 km/h, xe thứ hai là 35 km/h. Thời gian để hai xe gặp nhau là:",
    "options": [
      "2 giờ",
      "2,5 giờ",
      "3 giờ",
      "1,5 giờ"
    ],
    "ans": 0,
    "exp": "Thời gian gặp nhau t = s : (v1 + v2) = 150 : (40 + 35) = 150 : 75 = 2 giờ."
  },
  {
    "q": "Biểu đồ hình quạt tròn thường được sử dụng để làm gì?",
    "options": [
      "Biểu thị tỉ lệ phần trăm của từng thành phần so với tổng thể 100%",
      "So sánh độ cao của các dãy núi",
      "Vẽ sơ đồ di chuyển đường ray xe lửa",
      "Đo góc tam giác vuông"
    ],
    "ans": 0,
    "exp": "Biểu đồ hình quạt tròn mô tả tỉ lệ phần trăm các thành phần cấu thành nên tổng thể 100%."
  },
  {
    "q": "Gieo một đồng xu 40 lần, có 18 lần xuất hiện mặt ngửa. Tỉ số mô tả khả năng xuất hiện mặt ngửa là:",
    "options": [
      "9/20 (hay 45%)",
      "11/20 (hay 55%)",
      "1/2",
      "18/22"
    ],
    "ans": 0,
    "exp": "Tỉ số xác suất thực nghiệm = 18 / 40 = 9/20 = 45%."
  },
  {
    "q": "Tổng hai số là 120, số bé bằng 1/3 số lớn. Số bé là:",
    "options": [
      "30",
      "40",
      "90",
      "20"
    ],
    "ans": 0,
    "exp": "Tổng số phần bằng nhau là 1 + 3 = 4 phần. Số bé là 120 : 4 × 1 = 30."
  },
  {
    "q": "Hiệu hai số là 45, số lớn gấp 4 lần số bé. Số lớn là:",
    "options": [
      "60",
      "15",
      "75",
      "45"
    ],
    "ans": 0,
    "exp": "Hiệu số phần bằng nhau là 4 - 1 = 3 phần. Số bé là 45 : 3 = 15. Số lớn là 15 × 4 = 60."
  },
  {
    "q": "Trên bản đồ tỉ lệ 1 : 1 000 000, khoảng cách giữa hai điểm A và B đo được 5 cm. Khoảng cách thực tế ngoài đời giữa hai điểm đó là:",
    "options": [
      "50 km",
      "5 km",
      "500 km",
      "5 000 m"
    ],
    "ans": 0,
    "exp": "Khoảng cách thực tế = 5 × 1 000 000 = 5 000 000 cm = 50 000 m = 50 km."
  },
  {
    "q": "Một người gửi tiết kiệm 50 000 000 đồng với lãi suất 6% một năm. Sau một năm, số tiền lãi người đó nhận được là:",
    "options": [
      "3 000 000 đồng",
      "6 000 000 đồng",
      "53 000 000 đồng",
      "300 000 đồng"
    ],
    "ans": 0,
    "exp": "Số tiền lãi sau một năm là: 50 000 000 × 6 : 100 = 3 000 000 đồng."
  }
];

module.exports = {
  topics,
  mathFormulas,
  trangNguyenMathQuizzes
};
