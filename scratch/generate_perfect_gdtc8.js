const fs = require('fs');
const path = require('path');

const lessonsData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/all_gdtc8_lessons.json', 'utf8'));
const gdtc8Exam = require('./gdtc8_exam.js');

// 3 Phần lớn
const parts = [
  {
    id: "KTC",
    name: "Phần I. Kiến thức chung",
    badge: "Dinh dưỡng & Thể thao",
    desc: "Chế độ dinh dưỡng thích hợp, bù nước và nhu cầu năng lượng theo hình thức vận động thể lực"
  },
  {
    id: "VDCB",
    name: "Phần II. Vận động cơ bản",
    badge: "Điền kinh & Thể dục",
    desc: "Chạy cự li ngắn (100 m), Nhảy cao kiểu bước qua, Chạy cự li trung bình, Bài tập thể dục nhịp điệu"
  },
  {
    id: "TTTC",
    name: "Phần III. Thể thao tự chọn",
    badge: "Kĩ năng thi đấu",
    desc: "Cầu lông, Bóng đá, Bóng rổ"
  }
];

// 8 Chủ đề
const topics = [
  { id: 'dinh-duong', partId: 'KTC', num: 'Chủ đề', title: 'Sử dụng chế độ dinh dưỡng thích hợp trong luyện tập TDTT', lessonsRange: '4 Chuyên đề' },
  { id: 'chay-ngan-100m', partId: 'VDCB', num: 'Chủ đề 1', title: 'Chạy cự li ngắn (100 m)', lessonsRange: 'Bài 1 – 3' },
  { id: 'nhay-cao-buoc-qua', partId: 'VDCB', num: 'Chủ đề 2', title: 'Nhảy cao kiểu bước qua', lessonsRange: 'Bài 1 – 4' },
  { id: 'chay-trung-binh', partId: 'VDCB', num: 'Chủ đề 3', title: 'Chạy cự li trung bình', lessonsRange: 'Bài 1 – 3' },
  { id: 'the-duc-nhip-dieu', partId: 'VDCB', num: 'Chủ đề 4', title: 'Bài tập thể dục', lessonsRange: 'Bài 1 – 2' },
  { id: 'cau-long', partId: 'TTTC', num: 'Chủ đề 1', title: 'Cầu lông', lessonsRange: 'Bài 1 – 3' },
  { id: 'bong-da', partId: 'TTTC', num: 'Chủ đề 2', title: 'Bóng đá', lessonsRange: 'Bài 1 – 3' },
  { id: 'bong-ro', partId: 'TTTC', num: 'Chủ đề 3', title: 'Bóng rổ', lessonsRange: 'Bài 1 – 3' }
];

// Hàm sinh SVG minh họa chất lượng cao cho từng bài học
function getLessonSvg(lId) {
  switch (lId) {
    // Dinh dưỡng
    case 'dd-1':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="110" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="70" y="42" text-anchor="middle" font-size="16">⚡</text>
        <text x="70" y="65" text-anchor="middle" font-size="10.5" font-bold fill="#1e40af">1. Cung cấp năng lượng</text>
        <text x="70" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Vận động thể lực</text>

        <rect x="135" y="15" width="110" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="190" y="42" text-anchor="middle" font-size="16">💪</text>
        <text x="190" y="65" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">2. Phát triển cơ bắp</text>
        <text x="190" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Sửa chữa mô cơ</text>

        <rect x="255" y="15" width="110" height="80" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="310" y="42" text-anchor="middle" font-size="16">🛡️</text>
        <text x="310" y="65" text-anchor="middle" font-size="10.5" font-bold fill="#a16207">3. Tăng miễn dịch</text>
        <text x="310" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Cân bằng nội môi</text>

        <rect x="375" y="15" width="110" height="80" rx="10" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
        <text x="430" y="42" text-anchor="middle" font-size="16">📈</text>
        <text x="430" y="65" text-anchor="middle" font-size="10.5" font-bold fill="#86198f">4. Tăng trưởng chiều cao</text>
        <text x="430" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Lứa tuổi dậy thì</text>
      </svg>`;

    case 'dd-2':
      return `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,15 310,48 190,48" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="250" y="38" text-anchor="middle" font-size="9" font-bold fill="#991b1b">Protein (12-14%)</text>
        <polygon points="190,52 310,52 345,82 155,82" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="250" y="72" text-anchor="middle" font-size="9.5" font-bold fill="#92400e">Lipid - Chất béo (20-30%)</text>
        <polygon points="155,86 345,86 390,118 110,118" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="250" y="106" text-anchor="middle" font-size="10" font-bold fill="#1e40af">Carbohydrate - Tinh bột (56-68%)</text>
        <rect x="15" y="40" width="85" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="57" y="58" text-anchor="middle" font-size="8" font-bold fill="#334155">Phân bổ calo:</text>
        <text x="57" y="70" text-anchor="middle" font-size="7.5" fill="#64748b">Sáng: 30%</text>
        <text x="57" y="82" text-anchor="middle" font-size="7.5" fill="#64748b">Trưa: 40-45%</text>
        <rect x="400" y="40" width="85" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="442" y="58" text-anchor="middle" font-size="8" font-bold fill="#334155">Nước &amp; Tối:</text>
        <text x="442" y="70" text-anchor="middle" font-size="7.5" fill="#64748b">1.5 - 2L/ngày</text>
        <text x="442" y="82" text-anchor="middle" font-size="7.5" fill="#64748b">Tối: 25-30%</text>
      </svg>`;

    case 'dd-3':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="15" width="130" height="70" rx="10" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5"/>
        <text x="90" y="38" text-anchor="middle" font-size="10" font-bold fill="#0369a1">TRƯỚC TẬP (20-30p)</text>
        <text x="90" y="60" text-anchor="middle" font-size="12" font-black fill="#0284c7">150 - 250 ml</text>
        <text x="90" y="75" text-anchor="middle" font-size="8" fill="#64748b">Uống ngụm nhỏ</text>

        <rect x="185" y="15" width="130" height="70" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="250" y="38" text-anchor="middle" font-size="10" font-bold fill="#047857">TRONG KHI TẬP</text>
        <text x="250" y="60" text-anchor="middle" font-size="12" font-black fill="#059669">100 - 150 ml</text>
        <text x="250" y="75" text-anchor="middle" font-size="8" fill="#64748b">Sau mỗi 15 - 20 phút</text>

        <rect x="345" y="15" width="130" height="70" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="410" y="38" text-anchor="middle" font-size="10" font-bold fill="#a16207">SAU KHI TẬP</text>
        <text x="410" y="60" text-anchor="middle" font-size="11" font-black fill="#ca8a04">Bù theo mồ hôi</text>
        <text x="410" y="75" text-anchor="middle" font-size="8" fill="#64748b">Nước khoáng / chanh muối</text>
      </svg>`;

    case 'dd-4':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="140" height="70" rx="10" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
        <text x="90" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#be185d">MÔN TỐC ĐỘ (100m, Nhảy cao)</text>
        <text x="90" y="60" text-anchor="middle" font-size="10" font-black fill="#9d174d">Tăng Protein &amp; Carbs</text>

        <rect x="180" y="15" width="140" height="70" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="250" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#15803d">SỨC BỀN (Chạy trung bình)</text>
        <text x="250" y="60" text-anchor="middle" font-size="10" font-black fill="#166534">65-70% Carbohydrate</text>

        <rect x="340" y="15" width="140" height="70" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="410" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">MÔN BÓNG (Bóng đá, rổ, cầu)</text>
        <text x="410" y="60" text-anchor="middle" font-size="10" font-black fill="#1e40af">Cân đối + Bù điện giải</text>
      </svg>`;

    // Chạy ngắn
    case 'chay-1':
      return `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="90" x2="480" y2="90" stroke="#94a3b8" stroke-width="2"/>
        <line x1="75" y1="65" x2="75" y2="100" stroke="#ef4444" stroke-width="3"/>
        <text x="75" y="110" text-anchor="middle" font-size="8" font-bold fill="#ef4444">Vạch xuất phát</text>
        <circle cx="130" cy="55" r="7" fill="#2563eb"/><line x1="130" y1="62" x2="120" y2="78" stroke="#2563eb" stroke-width="3"/><line x1="120" y1="78" x2="110" y2="90" stroke="#2563eb" stroke-width="2.5"/>
        <text x="130" y="35" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">1. "Vào chỗ!"</text>
        <circle cx="250" cy="45" r="7" fill="#f59e0b"/><line x1="250" y1="52" x2="235" y2="68" stroke="#f59e0b" stroke-width="3"/><line x1="235" y1="68" x2="225" y2="90" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="250" y="25" text-anchor="middle" font-size="9.5" font-bold fill="#b45309">2. "Sẵn sàng!" (Mông > Vai)</text>
        <circle cx="390" cy="50" r="7" fill="#10b981"/><line x1="390" y1="57" x2="365" y2="72" stroke="#10b981" stroke-width="3"/><line x1="365" y1="72" x2="340" y2="90" stroke="#10b981" stroke-width="2.5"/>
        <text x="390" y="30" text-anchor="middle" font-size="9.5" font-bold fill="#047857">3. "Chạy!" (Đạp mạnh góc 45°)</text>
      </svg>`;

    case 'chay-2':
      return `<svg viewBox="0 0 500 95" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="80" x2="480" y2="80" stroke="#cbd5e1" stroke-width="2"/>
        <g transform="translate(60, 15)">
          <line x1="0" y1="60" x2="35" y2="15" stroke="#3b82f6" stroke-width="3"/>
          <text x="20" y="75" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">Nghiêng 45°</text>
          <text x="20" y="0" text-anchor="middle" font-size="8" fill="#64748b">Chạy lao (0-15m)</text>
        </g>
        <g transform="translate(230, 15)">
          <line x1="0" y1="60" x2="20" y2="15" stroke="#10b981" stroke-width="3"/>
          <text x="15" y="75" text-anchor="middle" font-size="9" font-bold fill="#047857">Nâng dần 65°</text>
          <text x="15" y="0" text-anchor="middle" font-size="8" fill="#64748b">Chuyển tiếp</text>
        </g>
        <g transform="translate(390, 15)">
          <line x1="0" y1="60" x2="10" y2="15" stroke="#f59e0b" stroke-width="3"/>
          <text x="10" y="75" text-anchor="middle" font-size="9" font-bold fill="#b45309">Ngả 80°-85°</text>
          <text x="10" y="0" text-anchor="middle" font-size="8" fill="#64748b">Chạy giữa quãng</text>
        </g>
      </svg>`;

    case 'chay-3':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="85" x2="480" y2="85" stroke="#94a3b8" stroke-width="2"/>
        <line x1="300" y1="15" x2="300" y2="90" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,2"/>
        <text x="300" y="100" text-anchor="middle" font-size="8.5" font-bold fill="#ef4444">VẠCH ĐÍCH</text>
        <circle cx="295" cy="35" r="7" fill="#2563eb"/>
        <line x1="295" y1="42" x2="285" y2="65" stroke="#2563eb" stroke-width="3.5"/>
        <line x1="285" y1="65" x2="265" y2="85" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="285" y1="65" x2="305" y2="85" stroke="#2563eb" stroke-width="2.5"/>
        <text x="210" y="45" font-size="9.5" font-bold fill="#1d4ed8">Gập thân đánh ngực</text>
        <text x="210" y="60" font-size="8.5" fill="#475569">Không giảm tốc trước đích</text>
        <rect x="360" y="25" width="115" height="45" rx="8" fill="#f0fdf4" stroke="#22c55e"/>
        <text x="417" y="45" text-anchor="middle" font-size="8.5" font-bold fill="#15803d">Sau khi qua đích:</text>
        <text x="417" y="60" text-anchor="middle" font-size="8" fill="#475569">Chạy chậm dần 15-20m</text>
      </svg>`;

    // Nhảy cao
    case 'nhaycao-1':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="90" x2="480" y2="90" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(120, 20)">
          <circle cx="40" cy="15" r="7" fill="#2563eb"/>
          <line x1="40" y1="22" x2="40" y2="50" stroke="#2563eb" stroke-width="3"/>
          <line x1="40" y1="50" x2="30" y2="70" stroke="#ef4444" stroke-width="3.5"/>
          <text x="40" y="85" text-anchor="middle" font-size="9" font-bold fill="#ef4444">Chân giậm (đặt gót -> mũi)</text>
        </g>
        <g transform="translate(280, 15)">
          <circle cx="40" cy="15" r="7" fill="#10b981"/>
          <line x1="40" y1="22" x2="40" y2="50" stroke="#10b981" stroke-width="3"/>
          <line x1="40" y1="50" x2="80" y2="35" stroke="#10b981" stroke-width="3.5"/>
          <text x="50" y="85" text-anchor="middle" font-size="9" font-bold fill="#047857">Chân lăng (đá cao > thắt lưng)</text>
          <path d="M 50 65 Q 85 55 80 35" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2"/>
        </g>
      </svg>`;

    case 'nhaycao-2':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="30" x2="400" y2="30" stroke="#ef4444" stroke-width="3"/>
        <text x="250" y="20" text-anchor="middle" font-size="9.5" font-bold fill="#ef4444">THANH XÀ (Mặt phẳng xà)</text>
        <!-- Hướng chạy đà chếch 25-40 độ -->
        <line x1="80" y1="95" x2="220" y2="40" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3"/>
        <path d="M 140 70 A 35 35 0 0 0 170 85" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="175" y="75" font-size="10" font-bold fill="#b45309">Góc đà 25° - 40°</text>
        <circle cx="220" cy="40" r="5" fill="#10b981"/>
        <text x="220" y="60" text-anchor="middle" font-size="8.5" font-bold fill="#047857">Điểm giậm (cách xà 60-80cm)</text>
        <text x="80" y="105" text-anchor="middle" font-size="8" fill="#64748b">5 - 7 bước đà</text>
      </svg>`;

    case 'nhaycao-3':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <!-- Đệm và xà -->
        <rect x="260" y="65" width="200" height="25" rx="5" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
        <text x="360" y="80" text-anchor="middle" font-size="9" font-bold fill="#15803d">ĐỆM MÚT TIẾP ĐẤT</text>
        <circle cx="220" cy="40" r="4" fill="#ef4444"/>
        <line x1="220" y1="40" x2="220" y2="90" stroke="#ef4444" stroke-width="2"/>
        <text x="220" y="30" text-anchor="middle" font-size="8.5" font-bold fill="#ef4444">Xà</text>
        <!-- Người bước qua xà -->
        <g transform="translate(190, 10)">
          <circle cx="50" cy="15" r="6" fill="#2563eb"/>
          <line x1="50" y1="20" x2="50" y2="35" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="50" y1="35" x2="75" y2="45" stroke="#10b981" stroke-width="3"/>
          <line x1="50" y1="35" x2="25" y2="40" stroke="#3b82f6" stroke-width="3"/>
          <text x="50" y="5" text-anchor="middle" font-size="8.5" font-bold fill="#1d4ed8">Bước chân lăng qua trước</text>
        </g>
        <text x="360" y="50" text-anchor="middle" font-size="8.5" fill="#047857">Khuỵu gối tiếp đất hoãn xung</text>
      </svg>`;

    case 'nhaycao-4':
      return `<svg viewBox="0 0 500 90" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="105" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="67" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">1. CHẠY ĐÀ</text>
        <text x="67" y="55" text-anchor="middle" font-size="8" fill="#64748b">Góc 25°-40°, 5-7 bước</text>

        <rect x="135" y="15" width="105" height="60" rx="8" fill="#f0fdf4" stroke="#22c55e"/>
        <text x="187" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#15803d">2. GIẬM NHẢY</text>
        <text x="187" y="55" text-anchor="middle" font-size="8" fill="#64748b">Đá lăng chân qua xà</text>

        <rect x="255" y="15" width="105" height="60" rx="8" fill="#fefce8" stroke="#eab308"/>
        <text x="307" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#a16207">3. QUA XÀ</text>
        <text x="307" y="55" text-anchor="middle" font-size="8" fill="#64748b">Lần lượt từng chân</text>

        <rect x="375" y="15" width="105" height="60" rx="8" fill="#fdf4ff" stroke="#d946ef"/>
        <text x="427" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#86198f">4. RƠI XUỐNG</text>
        <text x="427" y="55" text-anchor="middle" font-size="8" fill="#64748b">Khuỵu gối hoãn xung</text>
      </svg>`;

    // Chạy trung bình
    case 'chaytb-1':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="15" width="210" height="70" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="130" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">NHỊP THỞ KHOA HỌC</text>
        <text x="130" y="58" text-anchor="middle" font-size="11" font-black fill="#166534">2 bước Hít vào – 2 bước Thở ra</text>
        <text x="130" y="73" text-anchor="middle" font-size="8" fill="#475569">(Hít sâu bằng mũi &amp; miệng)</text>

        <rect x="265" y="15" width="210" height="70" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="370" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">KĨ THUẬT TIẾP ĐẤT</text>
        <text x="370" y="58" text-anchor="middle" font-size="10.5" font-black fill="#1e40af">Nửa trước bàn chân đàn hồi</text>
        <text x="370" y="73" text-anchor="middle" font-size="8" fill="#475569">Tay đánh nhẹ, vai thả lỏng</text>
      </svg>`;

    case 'chaytb-2':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="80" x2="480" y2="80" stroke="#94a3b8" stroke-width="2"/>
        <line x1="120" y1="55" x2="120" y2="90" stroke="#ef4444" stroke-width="2.5"/>
        <text x="120" y="98" text-anchor="middle" font-size="8" font-bold fill="#ef4444">Vạch xuất phát</text>
        <g transform="translate(160, 15)">
          <circle cx="30" cy="15" r="7" fill="#2563eb"/>
          <line x1="30" y1="22" x2="25" y2="45" stroke="#2563eb" stroke-width="3"/>
          <line x1="25" y1="45" x2="15" y2="65" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="25" y1="45" x2="35" y2="65" stroke="#2563eb" stroke-width="2.5"/>
          <text x="30" y="0" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">1. "Vào chỗ!" (Xuất phát cao)</text>
        </g>
        <g transform="translate(340, 15)">
          <circle cx="30" cy="15" r="7" fill="#10b981"/>
          <line x1="30" y1="22" x2="20" y2="45" stroke="#10b981" stroke-width="3"/>
          <line x1="20" y1="45" x2="5" y2="65" stroke="#10b981" stroke-width="2.5"/>
          <line x1="20" y1="45" x2="35" y2="65" stroke="#10b981" stroke-width="2.5"/>
          <text x="30" y="0" text-anchor="middle" font-size="9" font-bold fill="#047857">2. "Chạy!" (Tăng tốc vừa phải)</text>
        </g>
      </svg>`;

    case 'chaytb-3':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <!-- Đồ thị thể lực & hiện tượng cực điểm -->
        <line x1="40" y1="90" x2="460" y2="90" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="40" y1="15" x2="40" y2="90" stroke="#cbd5e1" stroke-width="2"/>
        <path d="M 40 70 Q 150 20 220 80 T 350 40 T 460 30" fill="none" stroke="#2563eb" stroke-width="3"/>
        <circle cx="220" cy="80" r="5" fill="#ef4444"/>
        <text x="220" y="98" text-anchor="middle" font-size="9" font-bold fill="#ef4444">CỰC ĐIỂM (1/3 cự li)</text>
        <text x="220" y="65" text-anchor="middle" font-size="8" fill="#64748b">Tức ngực, chân nặng</text>
        <rect x="300" y="15" width="150" height="35" rx="6" fill="#f0fdf4" stroke="#22c55e"/>
        <text x="375" y="30" text-anchor="middle" font-size="8.5" font-bold fill="#15803d">HÔ HẤP LẦN HAI</text>
        <text x="375" y="42" text-anchor="middle" font-size="7.5" fill="#475569">Thở sâu, vượt qua mỏi mệt</text>
      </svg>`;

    // Thể dục nhịp điệu
    case 'td-1':
      return `<svg viewBox="0 0 500 95" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="105" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="67" y="38" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">1. Chạy tại chỗ</text>
        <text x="67" y="55" text-anchor="middle" font-size="8" fill="#64748b">Êm, đàn hồi mũi chân</text>

        <rect x="135" y="15" width="105" height="65" rx="8" fill="#f0fdf4" stroke="#22c55e"/>
        <text x="187" y="38" text-anchor="middle" font-size="9" font-bold fill="#15803d">2. Tay ngực</text>
        <text x="187" y="55" text-anchor="middle" font-size="8" fill="#64748b">Mở rộng ngực, hít sâu</text>

        <rect x="255" y="15" width="105" height="65" rx="8" fill="#fefce8" stroke="#eab308"/>
        <text x="307" y="38" text-anchor="middle" font-size="9" font-bold fill="#a16207">3. Vươn người</text>
        <text x="307" y="55" text-anchor="middle" font-size="8" fill="#64748b">Tay chữ V lên cao</text>

        <rect x="375" y="15" width="105" height="65" rx="8" fill="#fdf4ff" stroke="#d946ef"/>
        <text x="427" y="38" text-anchor="middle" font-size="9" font-bold fill="#86198f">4. Bật tách chụm</text>
        <text x="427" y="55" text-anchor="middle" font-size="8" fill="#64748b">Tách chân rộng nhịp</text>
      </svg>`;

    case 'td-2':
      return `<svg viewBox="0 0 500 95" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="105" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="67" y="38" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">5. Nghiêng lườn</text>
        <text x="67" y="55" text-anchor="middle" font-size="8" fill="#64748b">Căng cơ liên sườn</text>

        <rect x="135" y="15" width="105" height="65" rx="8" fill="#f0fdf4" stroke="#22c55e"/>
        <text x="187" y="38" text-anchor="middle" font-size="9" font-bold fill="#15803d">6. Bật co gối</text>
        <text x="187" y="55" text-anchor="middle" font-size="8" fill="#64748b">Gối vuông góc hông</text>

        <rect x="255" y="15" width="105" height="65" rx="8" fill="#fefce8" stroke="#eab308"/>
        <text x="307" y="38" text-anchor="middle" font-size="9" font-bold fill="#a16207">7. Bước chéo X</text>
        <text x="307" y="55" text-anchor="middle" font-size="8" fill="#64748b">Lắc hông, đánh tay</text>

        <rect x="375" y="15" width="105" height="65" rx="8" fill="#fdf4ff" stroke="#d946ef"/>
        <text x="427" y="38" text-anchor="middle" font-size="9" font-bold fill="#86198f">8. Bật tay cao</text>
        <text x="427" y="55" text-anchor="middle" font-size="8" fill="#64748b">Vỗ tay trên đầu êm</text>
      </svg>`;

    // Cầu lông
    case 'caulong-1':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="90" x2="480" y2="90" stroke="#94a3b8" stroke-width="2"/>
        <line x1="420" y1="20" x2="420" y2="90" stroke="#334155" stroke-width="2"/>
        <text x="420" y="15" text-anchor="middle" font-size="8" fill="#64748b">Lưới</text>
        <!-- Vận động viên lùi về sau -->
        <g transform="translate(180, 20)">
          <circle cx="30" cy="15" r="7" fill="#2563eb"/>
          <line x1="30" y1="22" x2="30" y2="48" stroke="#2563eb" stroke-width="3"/>
          <line x1="30" y1="48" x2="15" y2="70" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="30" y1="48" x2="45" y2="70" stroke="#2563eb" stroke-width="2.5"/>
          <!-- Vợt giơ cao đánh cầu -->
          <line x1="30" y1="25" x2="55" y2="0" stroke="#e11d48" stroke-width="2.5"/>
          <circle cx="58" cy="-3" r="6" fill="none" stroke="#e11d48" stroke-width="1.5"/>
          <text x="30" y="85" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">Lùi bước chéo &amp; Đón cầu trên cao</text>
        </g>
        <path d="M 240 20 Q 320 -10 400 30" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="320" y="15" font-size="8" font-bold fill="#047857">Cầu bay cao sâu cuối sân</text>
      </svg>`;

    case 'caulong-2':
      return `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="95" x2="480" y2="95" stroke="#94a3b8" stroke-width="2"/>
        <line x1="320" y1="25" x2="320" y2="95" stroke="#334155" stroke-width="2"/>
        <text x="320" y="18" text-anchor="middle" font-size="8" fill="#64748b">Lưới</text>
        <!-- Điểm đập cầu cao nhất trước trán -->
        <circle cx="170" cy="15" r="5" fill="#f59e0b"/>
        <text x="170" y="5" text-anchor="middle" font-size="8" font-bold fill="#b45309">Điểm đập cao nhất</text>
        <line x1="170" y1="15" x2="380" y2="95" stroke="#ef4444" stroke-width="2.5"/>
        <text x="270" y="50" font-size="9" font-bold fill="#ef4444">Quỹ đạo cắm hiểm hóc (Smash)</text>
        <rect x="30" y="45" width="110" height="40" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="85" y="62" text-anchor="middle" font-size="8.5" font-bold fill="#1d4ed8">Gập mạnh cổ tay</text>
        <text x="85" y="75" text-anchor="middle" font-size="7.5" fill="#64748b">Phối hợp xoay hông</text>
      </svg>`;

    case 'caulong-3':
      return `<svg viewBox="0 0 500 95" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="400" height="55" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="250" y1="20" x2="250" y2="75" stroke="#94a3b8" stroke-dasharray="3,2"/>
        <circle cx="250" cy="48" r="8" fill="#2563eb"/>
        <text x="250" y="42" text-anchor="middle" font-size="7" fill="#fff" font-bold">TT</text>
        <text x="250" y="88" text-anchor="middle" font-size="8.5" font-bold fill="#1e40af">Vị trí trung tâm sân</text>
        <!-- Di chuyển ngang phải -->
        <path d="M 265 48 L 360 48" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr)"/>
        <text x="320" y="40" text-anchor="middle" font-size="8.5" font-bold fill="#047857">1. Bước trượt ngang</text>
        <circle cx="370" cy="48" r="8" fill="#ef4444"/>
        <text x="370" y="70" text-anchor="middle" font-size="8" font-bold fill="#ef4444">Đập cầu</text>
        <!-- Hồi vị -->
        <path d="M 360 58 L 265 58" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="310" y="68" text-anchor="middle" font-size="7.5" fill="#b45309">2. Hồi vị trung tâm</text>
      </svg>`;

    // Bóng đá
    case 'bongda-1':
      return `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="15" width="210" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="130" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">ĐÁ MU NGOÀI (TRIVELA)</text>
        <path d="M 50 75 Q 120 45 180 65" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="130" y="60" text-anchor="middle" font-size="8.5" fill="#64748b">Quỹ đạo bóng xoáy lượn vòng cung</text>
        <text x="130" y="85" text-anchor="middle" font-size="8" font-bold fill="#1e40af">Mũi chân xoay vào trong</text>

        <rect x="265" y="15" width="210" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="370" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">ĐÁNH ĐẦU BẰNG TRÁN GIỮA</text>
        <circle cx="330" cy="65" r="12" fill="#dcfce7" stroke="#16a34a"/>
        <text x="330" y="70" text-anchor="middle" font-size="10">⚽</text>
        <text x="400" y="60" font-size="9" font-bold fill="#15803d">Xương trán giữa phẳng</text>
        <text x="400" y="75" font-size="8" fill="#64748b">An toàn &amp; bóng căng</text>
      </svg>`;

    case 'bongda-2':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="15" width="210" height="70" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="130" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#a16207">DỪNG BÓNG BẰNG ĐÙI</text>
        <text x="130" y="58" text-anchor="middle" font-size="9" fill="#713f12">Hãm bóng bổng ngang hông</text>
        <text x="130" y="73" text-anchor="middle" font-size="8" font-bold fill="#a16207">Hạ đùi hoãn xung êm ái</text>

        <rect x="265" y="15" width="210" height="70" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="370" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">DỪNG BÓNG LÒNG BÀN CHÂN</text>
        <text x="370" y="58" text-anchor="middle" font-size="9" fill="#14532d">Khống chế bóng sệt sát đất</text>
        <text x="370" y="73" text-anchor="middle" font-size="8" font-bold fill="#15803d">Rút nhẹ chân hoãn xung</text>
      </svg>`;

    case 'bongda-3':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="80" x2="470" y2="80" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="80" cy="70" r="10" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/><text x="80" y="74" text-anchor="middle" font-size="10">⚽</text>
        <path d="M 95 70 L 195 70" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2"/>
        <circle cx="210" cy="70" r="10" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/><text x="210" y="74" text-anchor="middle" font-size="10">⚽</text>
        <path d="M 225 70 L 325 70" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2"/>
        <circle cx="340" cy="70" r="10" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/><text x="340" y="74" text-anchor="middle" font-size="10">⚽</text>
        <text x="250" y="35" text-anchor="middle" font-size="10.5" font-bold fill="#1e40af">DẪN BÓNG MU GIỮA TỐC ĐỘ CAO</text>
        <text x="250" y="50" text-anchor="middle" font-size="8.5" fill="#64748b">Mũi chân chúi xuống • Đẩy bóng cách chân 1 - 1.5m</text>
      </svg>`;

    // Bóng rổ
    case 'bongro-1':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="85" x2="470" y2="85" stroke="#cbd5e1" stroke-width="2"/>
        <g transform="translate(100, 15)">
          <circle cx="30" cy="15" r="7" fill="#ea580c"/>
          <line x1="30" y1="22" x2="25" y2="45" stroke="#ea580c" stroke-width="3"/>
          <circle cx="45" cy="55" r="11" fill="#fdba74" stroke="#c2410c"/>
          <text x="45" y="60" text-anchor="middle" font-size="10">🏀</text>
          <path d="M 45 40 L 45 75" stroke="#f97316" stroke-width="2" stroke-dasharray="2,2"/>
          <text x="30" y="85" text-anchor="middle" font-size="8.5" font-bold fill="#c2410c">Ấn bóng bằng ngón tay</text>
        </g>
        <rect x="250" y="25" width="200" height="50" rx="8" fill="#fff7ed" stroke="#f97316"/>
        <text x="350" y="45" text-anchor="middle" font-size="9" font-bold fill="#9a3412">HẠ THẤP TRỌNG TÂM</text>
        <text x="350" y="60" text-anchor="middle" font-size="8" fill="#7c2d12">Tay kia giơ ngang che chắn bóng</text>
      </svg>`;

    case 'bongro-2':
      return `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="30" r="10" fill="#fdba74" stroke="#c2410c"/><text x="80" y="34" text-anchor="middle" font-size="9">🏀</text>
        <text x="80" y="60" text-anchor="middle" font-size="8.5" font-bold fill="#1d4ed8">Bóng trên đầu</text>
        <!-- Hậu vệ đối phương giơ tay cản -->
        <line x1="240" y1="40" x2="240" y2="85" stroke="#ef4444" stroke-width="2"/>
        <line x1="230" y1="35" x2="250" y2="35" stroke="#ef4444" stroke-width="2"/>
        <text x="240" y="98" text-anchor="middle" font-size="7.5" fill="#ef4444">Hậu vệ đối phương</text>
        <!-- Đường chuyền bổng qua đầu -->
        <path d="M 95 30 Q 240 10 380 40" fill="none" stroke="#ea580c" stroke-width="2.5"/>
        <circle cx="400" cy="40" r="10" fill="#fdba74" stroke="#c2410c"/><text x="400" y="44" text-anchor="middle" font-size="9">🏀</text>
        <text x="400" y="65" text-anchor="middle" font-size="8.5" font-bold fill="#15803d">Đồng đội bắt bóng</text>
      </svg>`;

    case 'bongro-3':
      return `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <!-- Vành rổ & Bảng rổ -->
        <rect x="420" y="10" width="6" height="45" fill="#334155"/>
        <line x1="390" y1="40" x2="420" y2="40" stroke="#ea580c" stroke-width="3"/>
        <text x="420" y="65" text-anchor="middle" font-size="8" fill="#ea580c">Rổ</text>
        <!-- 2 bước lên rổ -->
        <circle cx="80" cy="95" r="5" fill="#2563eb"/><text x="80" y="110" text-anchor="middle" font-size="8" font-bold fill="#1d4ed8">Bước 1 (Phải dài)</text>
        <path d="M 90 95 Q 160 80 200 95" fill="none" stroke="#64748b" stroke-dasharray="3,2"/>
        <circle cx="210" cy="95" r="5" fill="#10b981"/><text x="210" y="110" text-anchor="middle" font-size="8" font-bold fill="#047857">Bước 2 (Trái ngắn)</text>
        <!-- Bật cao ném ngửa tay -->
        <path d="M 215 90 Q 280 40 370 30" fill="none" stroke="#ea580c" stroke-width="2.5"/>
        <circle cx="375" cy="28" r="9" fill="#fdba74" stroke="#c2410c"/><text x="375" y="32" text-anchor="middle" font-size="8">🏀</text>
        <text x="290" y="35" text-anchor="middle" font-size="8.5" font-bold fill="#c2410c">Bật vút người thẳng đứng</text>
        <text x="290" y="48" text-anchor="middle" font-size="8" fill="#475569">Ngửa tay đưa bóng nảy bảng</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 500 80" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="460" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="250" y="45" text-anchor="middle" font-size="11" fill="#475569">Sơ đồ kĩ thuật chuẩn SGK GDTC 8</text></svg>`;
  }
}

console.log('Setup script ready!');

module.exports = { getLessonSvg };
