const fs = require('fs');

const f = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_7.html';
const content = fs.readFileSync(f, 'utf8');

// Check for the old unsplash fallback
const hasUnsplash = content.includes('1579783900882');
console.log('Contains duplicate unsplash flower url:', hasUnsplash);

// Check for unique artwork elements
const uniqueChecks = [
  { id: 'Bài 1: David & Quý bà', tag: 'bg_davinci' },
  { id: 'Bài 2: Gốm Syria & Thảm Ottoman', tag: 'THẢM DỆT OTTOMAN' },
  { id: 'Bài 3: Tháp Phổ Minh & Ô Quan Chưởng', tag: 'THÁP PHỔ MINH' },
  { id: 'Bài 4: Bộ tem Bác Hồ 1946', tag: 'VIỆT NAM DÂN CHỦ CỘNG HÒA' },
  { id: 'Bài 5: Lụa & Sơn mài', tag: 'TRANH LỤA NÂU TRẦM' },
  { id: 'Bài 6: Cấu trúc Logo', tag: '3 DẠNG CẤU TRÚC LOGO CƠ BẢN' },
  { id: 'Bài 7: Không gian Bruegel', tag: 'aerial_view' },
  { id: 'Bài 8: Tĩnh vật chì & màu', tag: 'ĐÁNH BÓNG KHỐI CHÌ' },
  { id: 'KT Giữa I: Triển lãm', tag: 'KHÔNG GIAN TRƯNG BÀY SẢN PHẨM HỌC KÌ I' },
  { id: 'Bài 9: Nguồn sáng Monet', tag: 'monet_sky' },
  { id: 'Bài 10: Thời trang thổ cẩm', tag: 'TẠO MẪU TRANG PHỤC THỔ CẨM' },
  { id: 'Bài 11: Nhà tái chế', tag: 'Mô hình kiến trúc xanh từ vật liệu bìa carton' },
  { id: 'Bài 12: Tranh cổ động', tag: 'HÃY CỨU ĐẠI DƯƠNG!' },
  { id: 'Bài 13: In độc bản Monoprint', tag: 'KĨ THUẬT IN ĐỘC BẢN MONOPRINT' },
  { id: 'Bài 14: Khung ảnh vỏ sò', tag: 'KHUNG ẢNH BÌA CARTON' },
  { id: 'Bài 15: Di sản Lý - Trần - Mạc', tag: 'LÁ ĐỀ PHƯỢNG' },
  { id: 'Bài 16: Gốm hoa nâu & hoa lam', tag: 'GỐM HOA NÂU (LÝ - TRẦN)' },
  { id: 'KT Cuối năm: Tổng kết', tag: 'TRIỂN LÃM TỔNG KẾT 8 CHỦ ĐỀ MĨ THUẬT 7' }
];

console.log('--- Checking all 18 unique lesson artworks ---');
uniqueChecks.forEach((c) => {
  const found = content.includes(c.tag);
  console.log(c.id, '->', found ? '✓ ĐỘC BẢN CHÍNH XÁC' : '✗ THIẾU');
});
