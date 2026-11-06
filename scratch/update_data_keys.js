const fs = require('fs');
let dataContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/chebienthucpham9_data.js', 'utf8');

// Update diagramKeys:
dataContent = dataContent.replace('id: "bai-1",\n        number: "Bài 1",\n        title: "Thành phần dinh dưỡng trong thực phẩm",\n        sub: "Khám phá 3 nhóm sinh năng lượng (Protein, Lipid, Carbohydrate), vi chất (Vitamin, Khoáng chất), chất xơ, nước và vai trò của Chuyên viên Dinh dưỡng.",\n        duration: "45 phút",\n        diagramKey: "dinhDuong",', 
'id: "bai-1",\n        number: "Bài 1",\n        title: "Thành phần dinh dưỡng trong thực phẩm",\n        sub: "Khám phá 3 nhóm sinh năng lượng (Protein, Lipid, Carbohydrate), vi chất (Vitamin, Khoáng chất), chất xơ, nước và vai trò của Chuyên viên Dinh dưỡng.",\n        duration: "45 phút",\n        diagramKey: "dinhDuong",');

dataContent = dataContent.replace('id: "bai-2",\n        number: "Bài 2",\n        title: "Lựa chọn và bảo quản thực phẩm",\n        sub: "5 nhóm dinh dưỡng theo độ tươi ngon, phương pháp bảo quản hiện đại (lạnh, đông, nhiệt, khô, lên men) và kĩ thuật bảo toàn vi chất khi đun nấu.",\n        duration: "45 phút",\n        diagramKey: "tamGiacBep",',
'id: "bai-2",\n        number: "Bài 2",\n        title: "Lựa chọn và bảo quản thực phẩm",\n        sub: "5 nhóm dinh dưỡng theo độ tươi ngon, phương pháp bảo quản hiện đại (lạnh, đông, nhiệt, khô, lên men) và kĩ thuật bảo toàn vi chất khi đun nấu.",\n        duration: "45 phút",\n        diagramKey: "baoQuan",');

dataContent = dataContent.replace('id: "bai-3",\n        number: "Bài 3",\n        title: "Một số ngành nghề liên quan đến chế biến thực phẩm",\n        sub: "Hồ sơ nghề nghiệp: Thợ chế biến thực phẩm, Thợ vận hành máy sản xuất, Đầu bếp trưởng (Executive Chef), Nhân viên chuẩn bị đồ ăn nhanh và bảng tự đánh giá năng lực.",\n        duration: "45 phút",\n        diagramKey: "cheBien",',
'id: "bai-3",\n        number: "Bài 3",\n        title: "Một số ngành nghề liên quan đến chế biến thực phẩm",\n        sub: "Hồ sơ nghề nghiệp: Thợ chế biến thực phẩm, Thợ vận hành máy sản xuất, Đầu bếp trưởng (Executive Chef), Nhân viên chuẩn bị đồ ăn nhanh và bảng tự đánh giá năng lực.",\n        duration: "45 phút",\n        diagramKey: "ngheNghiep",');

dataContent = dataContent.replace('id: "bai-4",\n        number: "Bài 4",\n        title: "An toàn lao động và an toàn vệ sinh thực phẩm",\n        sub: "Nhận diện nguy cơ bếp (cháy, bỏng, điện, ngã, đứt tay), bảo dưỡng dụng cụ và 10 quy tắc vàng WHO cùng nguyên lí Tam giác hoạt động.",\n        duration: "45 phút",\n        diagramKey: "tamGiacBep",',
'id: "bai-4",\n        number: "Bài 4",\n        title: "An toàn lao động và an toàn vệ sinh thực phẩm",\n        sub: "Nhận diện nguy cơ bếp (cháy, bỏng, điện, ngã, đứt tay), bảo dưỡng dụng cụ và 10 quy tắc vàng WHO cùng nguyên lí Tam giác hoạt động.",\n        duration: "45 phút",\n        diagramKey: "tamGiacBep",');

dataContent = dataContent.replace('id: "bai-5",\n        number: "Bài 5",\n        title: "Dự án: Tính toán chi phí bữa ăn theo thực đơn",\n        sub: "Tiến trình dự án 7 bước: Lên thực đơn, tính định lượng, tra cứu đơn giá, quy đổi g/kg, công thức tổng chi phí và widget thực hành tính toán động.",\n        duration: "45 phút",\n        diagramKey: "tamGiacBep",',
'id: "bai-5",\n        number: "Bài 5",\n        title: "Dự án: Tính toán chi phí bữa ăn theo thực đơn",\n        sub: "Tiến trình dự án 7 bước: Lên thực đơn, tính định lượng, tra cứu đơn giá, quy đổi g/kg, công thức tổng chi phí và widget thực hành tính toán động.",\n        duration: "45 phút",\n        diagramKey: "quyTrinhChiPhi",');

dataContent = dataContent.replace('id: "bai-6",\n        number: "Bài 6",\n        title: "Chế biến thực phẩm có sử dụng nhiệt",\n        sub: "Phân loại 4 nhóm truyền nhiệt: Dùng nước nóng (luộc, nấu, kho), Dùng hơi nước (hấp), Nướng không khí nóng và Dùng dầu mỡ nóng (rán, rang, xào) cùng tiêu chí đánh giá kĩ thuật.",\n        duration: "45 phút",\n        diagramKey: "phuongPhapNhiet",',
'id: "bai-6",\n        number: "Bài 6",\n        title: "Chế biến thực phẩm có sử dụng nhiệt",\n        sub: "Phân loại 4 nhóm truyền nhiệt: Dùng nước nóng (luộc, nấu, kho), Dùng hơi nước (hấp), Nướng không khí nóng và Dùng dầu mỡ nóng (rán, rang, xào) cùng tiêu chí đánh giá kĩ thuật.",\n        duration: "45 phút",\n        diagramKey: "cheBienNhiet",');

dataContent = dataContent.replace('id: "bai-7",\n        number: "Bài 7",\n        title: "Chế biến thực phẩm không sử dụng nhiệt",\n        sub: "Kĩ thuật trộn dầu giấm, trộn hỗn hợp nộm/gỏi và lên men lactic vi sinh (muối dưa, muối cà) cùng quy tắc an toàn thực phẩm sống.",\n        duration: "45 phút",\n        diagramKey: "cheBien",',
'id: "bai-7",\n        number: "Bài 7",\n        title: "Chế biến thực phẩm không sử dụng nhiệt",\n        sub: "Kĩ thuật trộn dầu giấm, trộn hỗn hợp nộm/gỏi và lên men lactic vi sinh (muối dưa, muối cà) cùng quy tắc an toàn thực phẩm sống.",\n        duration: "45 phút",\n        diagramKey: "cheBienKhongNhiet",');

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/chebienthucpham9_data.js', dataContent, 'utf8');
console.log('Successfully updated chebienthucpham9_data.js diagram keys!');
