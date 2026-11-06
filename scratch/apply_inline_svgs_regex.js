const fs = require('fs');
const { inlineSvgs } = require('./congnghe8_inline_svgs.js');

// 1. Chèn vào congnghe8_data_p1.js
let p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');

const regexMapP1 = [
  {
    regex: /(1\.\s*Khái niệm và các khổ giấy chính[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai1_khoGiay,
    name: 'Bài 1 Khổ giấy'
  },
  {
    regex: /(2\.\s*Tỉ lệ và quy cách ghi kích thước[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai1_netVe,
    name: 'Bài 1 Nét vẽ'
  },
  {
    regex: /(1\.\s*Ba mặt phẳng chiếu và hướng chiếu[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai2_baMatPhang,
    name: 'Bài 2 Ba mặt phẳng'
  },
  {
    regex: /(2\.\s*Vị trí tương quan giữa các hình chiếu[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai2_viTriHinhChieu,
    name: 'Bài 2 Bố cục hình chiếu'
  },
  {
    regex: /(1\.\s*Nội dung và vai trò của bản vẽ chi tiết[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai3_cauTruc,
    name: 'Bài 3 Cấu trúc bản vẽ'
  },
  {
    regex: /(1\.\s*Nội dung và công dụng của bản vẽ lắp[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai4_bangKe,
    name: 'Bài 4 Bảng kê'
  },
  {
    regex: /(1\.\s*Các hình biểu diễn chính của bản vẽ nhà[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai5_cacHinhBieuDien,
    name: 'Bài 5 Bản vẽ nhà'
  },
  {
    regex: /(1\.\s*Vật liệu kim loại: Kim loại đen[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai6_soDoVatLieu,
    name: 'Bài 6 Sơ đồ vật liệu'
  },
  {
    regex: /(1\.\s*Truyền chuyển động: Bộ truyền đai[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai7_truyenDong,
    name: 'Bài 7 Truyền chuyển động'
  },
  {
    regex: /(1\.\s*Các thao tác gia công cơ bản[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai8_dungCu,
    name: 'Bài 8 Dụng cụ gia công'
  },
  {
    regex: /(1\.\s*Các vị trí nghề nghiệp tiêu biểu[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai9_ngheCoKhi,
    name: 'Bài 9 Nghề cơ khí'
  },
  {
    regex: /(1\.\s*Các bước thực hiện dự án gia công móc khóa[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai10_quyTrinh,
    name: 'Bài 10 Dự án móc khóa'
  }
];

let p1Count = 0;
regexMapP1.forEach(item => {
  if (item.regex.test(p1Code)) {
    p1Code = p1Code.replace(item.regex, `$1\n${item.svg}`);
    p1Count++;
    console.log(`[P1 OK] ${item.name}`);
  } else {
    console.log(`[P1 FAIL] ${item.name}`);
  }
});
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', p1Code, 'utf8');

// 2. Chèn vào congnghe8_data_p2.js
let p2Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', 'utf8');

const regexMapP2 = [
  {
    regex: /(1\.\s*Ba nguyên nhân chủ yếu gây tai nạn điện[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai11_dienApBuoc,
    name: 'Bài 11 Điện áp bước'
  },
  {
    regex: /(1\.\s*Các biện pháp phòng tránh tai nạn điện[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai12_noiDat,
    name: 'Bài 12 Nối đất bảo vệ'
  },
  {
    regex: /(1\.\s*Trình tự cấp cứu tai nạn điện khẩn cấp[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai13_quyTrinhCPR,
    name: 'Bài 13 Sơ cứu CPR'
  },
  {
    regex: /(1\.\s*Khái niệm và các thành phần chính của mạch điện[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai14_cauTrucMach,
    name: 'Bài 14 Cấu trúc mạch'
  },
  {
    regex: /(2\.\s*Các loại mô đun cảm biến thông dụng[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai15_baLoaiSensor,
    name: 'Bài 15 Ba cảm biến'
  },
  {
    regex: /(1\.\s*Quy trình lắp ráp mạch điều khiển[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai16_soDoRelay,
    name: 'Bài 16 Rơ le điều khiển'
  },
  {
    regex: /(1\.\s*Các vị trí nghề nghiệp tiêu biểu[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai17_ngheDien,
    name: 'Bài 17 Nghề điện'
  },
  {
    regex: /(1\.\s*Khái niệm và vai trò của thiết kế kĩ thuật[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai18_vaiTro,
    name: 'Bài 18 Vai trò thiết kế'
  },
  {
    regex: /(1\.\s*Năm bước cơ bản trong quy trình thiết kế[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai19_vongLap,
    name: 'Bài 19 Vòng lặp thiết kế'
  },
  {
    regex: /(1\.\s*Nhiệm vụ và sơ đồ nguyên lí hệ thống tưới[\s\S]*?<\/h4>)/,
    svg: inlineSvgs.bai20_soDoTuoi,
    name: 'Bài 20 Sơ đồ tưới tự động'
  }
];

let p2Count = 0;
regexMapP2.forEach(item => {
  if (item.regex.test(p2Code)) {
    p2Code = p2Code.replace(item.regex, `$1\n${item.svg}`);
    p2Count++;
    console.log(`[P2 OK] ${item.name}`);
  } else {
    console.log(`[P2 FAIL] ${item.name}`);
  }
});
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', p2Code, 'utf8');

console.log(`DONE: P1: ${p1Count}/${regexMapP1.length}, P2: ${p2Count}/${regexMapP2.length}`);
