const fs = require('fs');
const { inlineSvgs } = require('./congnghe8_inline_svgs.js');

// 1. Chèn vào congnghe8_data_p1.js
let p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');

// Bài 1: Khổ giấy & nét vẽ
if (!p1Code.includes('Hình 1.1: Quan hệ phân chia')) {
  p1Code = p1Code.replace(
    '1189 × 841 mm</span></div>\\n          </div>',
    '1189 × 841 mm</span></div>\\n          </div>\\n' + inlineSvgs.bai1_khoGiay
  );
  p1Code = p1Code.replace(
    '2. Các loại nét vẽ tiêu chuẩn</h4>',
    '2. Các loại nét vẽ tiêu chuẩn</h4>\\n' + inlineSvgs.bai1_netVe
  );
}

// Bài 2: Ba mặt phẳng chiếu & bố cục
if (!p1Code.includes('Hình 2.1: Hệ thống 3 mặt phẳng')) {
  p1Code = p1Code.replace(
    '1. Khái niệm và các hướng chiếu vuông góc</h4>',
    '1. Khái niệm và các hướng chiếu vuông góc</h4>\\n' + inlineSvgs.bai2_baMatPhang
  );
  p1Code = p1Code.replace(
    '2. Vị trí các hình chiếu trên bản vẽ</h4>',
    '2. Vị trí các hình chiếu trên bản vẽ</h4>\\n' + inlineSvgs.bai2_viTriHinhChieu
  );
}

// Bài 3: Cấu trúc bản vẽ chi tiết
if (!p1Code.includes('Hình 3.1: 4 Nội dung chính')) {
  p1Code = p1Code.replace(
    '1. Khái niệm và nội dung bản vẽ chi tiết</h4>',
    '1. Khái niệm và nội dung bản vẽ chi tiết</h4>\\n' + inlineSvgs.bai3_cauTruc
  );
}

// Bài 4: Bảng kê bản vẽ lắp
if (!p1Code.includes('Hình 4.1: Mẫu Bảng kê chi tiết')) {
  p1Code = p1Code.replace(
    '1. Nội dung bản vẽ lắp</h4>',
    '1. Nội dung bản vẽ lắp</h4>\\n' + inlineSvgs.bai4_bangKe
  );
}

// Bài 5: Các hình biểu diễn bản vẽ nhà
if (!p1Code.includes('Hình 5.1: 3 Hình biểu diễn')) {
  p1Code = p1Code.replace(
    '1. Nội dung và các hình biểu diễn của bản vẽ nhà</h4>',
    '1. Nội dung và các hình biểu diễn của bản vẽ nhà</h4>\\n' + inlineSvgs.bai5_cacHinhBieuDien
  );
}

// Bài 6: Sơ đồ phân loại vật liệu
if (!p1Code.includes('Hình 6.1: Sơ đồ phân loại tổng quát')) {
  p1Code = p1Code.replace(
    '1. Vật liệu kim loại</h4>',
    '1. Vật liệu kim loại</h4>\\n' + inlineSvgs.bai6_soDoVatLieu
  );
}

// Bài 7: Bộ truyền động đai
if (!p1Code.includes('Hình 7.1: Bộ truyền động đai')) {
  p1Code = p1Code.replace(
    '1. Truyền chuyển động</h4>',
    '1. Truyền chuyển động</h4>\\n' + inlineSvgs.bai7_truyenDong
  );
}

// Bài 8: Dụng cụ gia công cầm tay
if (!p1Code.includes('Hình 8.1: Thao tác sử dụng dụng cụ')) {
  p1Code = p1Code.replace(
    '1. Dụng cụ gia công cầm tay</h4>',
    '1. Dụng cụ gia công cầm tay</h4>\\n' + inlineSvgs.bai8_dungCu
  );
}

// Bài 9: Ngành nghề cơ khí
if (!p1Code.includes('Hình 9.1: Các vị trí việc làm')) {
  p1Code = p1Code.replace(
    '1. Khái niệm và đặc điểm ngành nghề cơ khí</h4>',
    '1. Khái niệm và đặc điểm ngành nghề cơ khí</h4>\\n' + inlineSvgs.bai9_ngheCoKhi
  );
}

// Bài 10: Quy trình gia công móc khóa
if (!p1Code.includes('Hình 10.1: Quy trình 5 bước gia công')) {
  p1Code = p1Code.replace(
    '2. Quy trình thực hiện dự án</h4>',
    '2. Quy trình thực hiện dự án</h4>\\n' + inlineSvgs.bai10_quyTrinh
  );
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', p1Code, 'utf8');
console.log("Updated congnghe8_data_p1.js with inline SVGs!");

// 2. Chèn vào congnghe8_data_p2.js
let p2Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', 'utf8');

// Bài 11: Điện áp bước
if (!p2Code.includes('Hình 11.1: Hiện tượng Điện Áp Bước')) {
  p2Code = p2Code.replace(
    '1. Các nguyên nhân gây ra tai nạn điện</h4>',
    '1. Các nguyên nhân gây ra tai nạn điện</h4>\\n' + inlineSvgs.bai11_dienApBuoc
  );
}

// Bài 12: Nối đất bảo vệ
if (!p2Code.includes('Hình 12.1: Sơ đồ nối đất bảo vệ')) {
  p2Code = p2Code.replace(
    '1. Các biện pháp an toàn khi sử dụng điện</h4>',
    '1. Các biện pháp an toàn khi sử dụng điện</h4>\\n' + inlineSvgs.bai12_noiDat
  );
}

// Bài 13: Quy trình CPR
if (!p2Code.includes('Hình 13.1: Quy trình khẩn cấp sơ cứu')) {
  p2Code = p2Code.replace(
    '1. Quy trình sơ cứu người bị tai nạn điện</h4>',
    '1. Quy trình sơ cứu người bị tai nạn điện</h4>\\n' + inlineSvgs.bai13_quyTrinhCPR
  );
}

// Bài 14: Cấu trúc mạch điện
if (!p2Code.includes('Hình 14.1: Sơ đồ 3 khối chức năng')) {
  p2Code = p2Code.replace(
    '1. Khái niệm và cấu trúc mạch điện</h4>',
    '1. Khái niệm và cấu trúc mạch điện</h4>\\n' + inlineSvgs.bai14_cauTrucMach
  );
}

// Bài 15: Cảm biến
if (!p2Code.includes('Hình 15.1: 3 Loại mô đun cảm biến')) {
  p2Code = p2Code.replace(
    '1. Khái niệm và vai trò mô đun cảm biến</h4>',
    '1. Khái niệm và vai trò mô đun cảm biến</h4>\\n' + inlineSvgs.bai15_baLoaiSensor
  );
}

// Bài 16: Rơ le
if (!p2Code.includes('Hình 16.1: Sơ đồ chân và nguyên lí')) {
  p2Code = p2Code.replace(
    '1. Sơ đồ nguyên lí và linh kiện</h4>',
    '1. Sơ đồ nguyên lí và linh kiện</h4>\\n' + inlineSvgs.bai16_soDoRelay
  );
}

// Bài 17: Nghề kĩ thuật điện
if (!p2Code.includes('Hình 17.1: Các hướng nghề nghiệp')) {
  p2Code = p2Code.replace(
    '1. Đặc điểm các ngành nghề điện</h4>',
    '1. Đặc điểm các ngành nghề điện</h4>\\n' + inlineSvgs.bai17_ngheDien
  );
}

// Bài 18: Thiết kế kĩ thuật
if (!p2Code.includes('Hình 18.1: Vai trò của Thiết kế kĩ thuật')) {
  p2Code = p2Code.replace(
    '1. Khái niệm thiết kế kĩ thuật</h4>',
    '1. Khái niệm thiết kế kĩ thuật</h4>\\n' + inlineSvgs.bai18_vaiTro
  );
}

// Bài 19: Vòng lặp thiết kế
if (!p2Code.includes('Hình 19.1: Vòng lặp phản hồi 5 bước')) {
  p2Code = p2Code.replace(
    '1. Các bước trong quy trình thiết kế</h4>',
    '1. Các bước trong quy trình thiết kế</h4>\\n' + inlineSvgs.bai19_vongLap
  );
}

// Bài 20: Hệ thống tưới cây tự động
if (!p2Code.includes('Hình 20.1: Sơ đồ kết nối phần cứng')) {
  p2Code = p2Code.replace(
    '2. Quy trình thiết kế và lắp ráp hệ thống</h4>',
    '2. Quy trình thiết kế và lắp ráp hệ thống</h4>\\n' + inlineSvgs.bai20_soDoTuoi
  );
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', p2Code, 'utf8');
console.log("Updated congnghe8_data_p2.js with inline SVGs!");
