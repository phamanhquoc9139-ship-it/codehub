const fs = require('fs');
const { inlineSvgs } = require('./congnghe8_inline_svgs.js');

// 1. Chèn vào congnghe8_data_p1.js
let p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');

// Định nghĩa map các h4 target và SVG tương ứng cho P1
const mapP1 = [
  {
    target: '<i class="fa-solid fa-shapes text-blue-600"></i> 1. Khái niệm và các khổ giấy chính </h4>',
    svg: inlineSvgs.bai1_khoGiay
  },
  {
    target: '<i class="fa-solid fa-ruler-combined text-indigo-600"></i> 2. Tỉ lệ và quy cách ghi kích thước </h4>',
    svg: inlineSvgs.bai1_netVe
  },
  {
    target: '<i class="fa-solid fa-cube text-purple-600"></i> 1. Ba mặt phẳng chiếu và hướng chiếu </h4>',
    svg: inlineSvgs.bai2_baMatPhang
  },
  {
    target: '<i class="fa-solid fa-arrows-split-up-and-left text-blue-600"></i> 2. Vị trí tương quan giữa các hình chiếu </h4>',
    svg: inlineSvgs.bai2_viTriHinhChieu
  },
  {
    target: '<i class="fa-solid fa-file-lines text-emerald-600"></i> 1. Nội dung và vai trò của bản vẽ chi tiết </h4>',
    svg: inlineSvgs.bai3_cauTruc
  },
  {
    target: '<i class="fa-solid fa-wrench text-blue-600"></i> 1. Nội dung và công dụng của bản vẽ lắp </h4>',
    svg: inlineSvgs.bai4_bangKe
  },
  {
    target: '<i class="fa-solid fa-house text-amber-600"></i> 1. Các hình biểu diễn chính của bản vẽ nhà </h4>',
    svg: inlineSvgs.bai5_cacHinhBieuDien
  },
  {
    target: '<i class="fa-solid fa-cubes text-blue-600"></i> 1. Vật liệu kim loại: Kim loại đen và Kim loại màu </h4>',
    svg: inlineSvgs.bai6_soDoVatLieu
  },
  {
    target: '<i class="fa-solid fa-arrows-rotate text-orange-600"></i> 1. Truyền chuyển động: Bộ truyền đai, Bánh răng và Xích </h4>',
    svg: inlineSvgs.bai7_truyenDong
  },
  {
    target: '<i class="fa-solid fa-screwdriver-wrench text-slate-600"></i> 1. Các thao tác gia công cơ bản </h4>',
    svg: inlineSvgs.bai8_dungCu
  },
  {
    target: '<i class="fa-solid fa-user-gear text-emerald-600"></i> 1. Các vị trí nghề nghiệp tiêu biểu </h4>',
    svg: inlineSvgs.bai9_ngheCoKhi
  },
  {
    target: '<i class="fa-solid fa-list-ol text-rose-600"></i> 1. Các bước thực hiện dự án gia công móc khóa </h4>',
    svg: inlineSvgs.bai10_quyTrinh
  }
];

let p1Replaced = 0;
mapP1.forEach(item => {
  if (p1Code.includes(item.target)) {
    p1Code = p1Code.replace(item.target, item.target + '\n' + item.svg);
    p1Replaced++;
  } else {
    console.log("NOT FOUND in P1:", item.target);
  }
});
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', p1Code, 'utf8');
console.log(`Replaced ${p1Replaced}/${mapP1.length} in congnghe8_data_p1.js`);

// 2. Chèn vào congnghe8_data_p2.js
let p2Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', 'utf8');

const mapP2 = [
  {
    target: '<i class="fa-solid fa-triangle-exclamation text-rose-600"></i> 1. Ba nguyên nhân chủ yếu gây tai nạn điện </h4>',
    svg: inlineSvgs.bai11_dienApBuoc
  },
  {
    target: '<i class="fa-solid fa-shield-halved text-blue-600"></i> 1. Các biện pháp phòng tránh tai nạn điện khi sử dụng </h4>',
    svg: inlineSvgs.bai12_noiDat
  },
  {
    target: '<i class="fa-solid fa-truck-medical text-rose-600"></i> 1. Trình tự cấp cứu tai nạn điện khẩn cấp </h4>',
    svg: inlineSvgs.bai13_quyTrinhCPR
  },
  {
    target: '<i class="fa-solid fa-network-wired text-emerald-600"></i> 1. Khái niệm và các thành phần chính của mạch điện </h4>',
    svg: inlineSvgs.bai14_cauTrucMach
  },
  {
    target: '<i class="fa-solid fa-lightbulb text-indigo-600"></i> 2. Các loại mô đun cảm biến thông dụng </h4>',
    svg: inlineSvgs.bai15_baLoaiSensor
  },
  {
    target: '<i class="fa-solid fa-list-check text-emerald-600"></i> 1. Quy trình lắp ráp mạch điều khiển theo sơ đồ </h4>',
    svg: inlineSvgs.bai16_soDoRelay
  },
  {
    target: '<i class="fa-solid fa-bolt text-blue-600"></i> 1. Các vị trí nghề nghiệp tiêu biểu </h4>',
    svg: inlineSvgs.bai17_ngheDien
  },
  {
    target: '<i class="fa-solid fa-lightbulb text-purple-600"></i> 1. Khái niệm và vai trò của thiết kế kĩ thuật </h4>',
    svg: inlineSvgs.bai18_vaiTro
  },
  {
    target: '<i class="fa-solid fa-repeat text-purple-600"></i> 1. Năm bước cơ bản trong quy trình thiết kế </h4>',
    svg: inlineSvgs.bai19_vongLap
  },
  {
    target: '<i class="fa-solid fa-seedling text-emerald-600"></i> 1. Nhiệm vụ và sơ đồ nguyên lí hệ thống tưới </h4>',
    svg: inlineSvgs.bai20_soDoTuoi
  }
];

let p2Replaced = 0;
mapP2.forEach(item => {
  if (p2Code.includes(item.target)) {
    p2Code = p2Code.replace(item.target, item.target + '\n' + item.svg);
    p2Replaced++;
  } else {
    console.log("NOT FOUND in P2:", item.target);
  }
});
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', p2Code, 'utf8');
console.log(`Replaced ${p2Replaced}/${mapP2.length} in congnghe8_data_p2.js`);
