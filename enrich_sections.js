const fs = require('fs');

// We will enrich each section of each lesson with a dedicated custom illustration / visual infographic!
const data = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/mithuat6_data.json', 'utf8'));

// Helper to escape HTML
function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
}

// Generate tailored section-specific visual cards & SVGs
function getSectionIllustration(lessonNum, secIdx, heading) {
  // Lesson 1: Một số thể loại mĩ thuật
  if (lessonNum === 1) {
    if (secIdx === 1) { // Mĩ thuật tạo hình
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-shapes"></i> Ba Ngành Cốt Lõi Của Mĩ Thuật Tạo Hình
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-sm">
              <div class="w-10 h-10 mx-auto rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center text-lg mb-2">
                <i class="fa-solid fa-paintbrush"></i>
              </div>
              <strong class="text-slate-800 dark:text-slate-200 block text-sm">HỘI HOẠ</strong>
              <span class="text-[11px] text-slate-500">Mặt phẳng 2D • Nét, màu, đậm nhạt</span>
              <div class="mt-2 text-[10px] text-purple-600 dark:text-purple-400 font-medium">Sơn mài, sơn dầu, lụa, màu nước</div>
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-sm">
              <div class="w-10 h-10 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg mb-2">
                <i class="fa-solid fa-print"></i>
              </div>
              <strong class="text-slate-800 dark:text-slate-200 block text-sm">ĐỒ HOẠ TRANH IN</strong>
              <span class="text-[11px] text-slate-500">Tạo hình gián tiếp qua bản in</span>
              <div class="mt-2 text-[10px] text-purple-600 dark:text-purple-400 font-medium">Khắc gỗ, in kẽm, in độc bản mica</div>
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-sm">
              <div class="w-10 h-10 mx-auto rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg mb-2">
                <i class="fa-solid fa-cubes"></i>
              </div>
              <strong class="text-slate-800 dark:text-slate-200 block text-sm">ĐIÊU KHẮC</strong>
              <span class="text-[11px] text-slate-500">Hình khối 3D trong không gian</span>
              <div class="mt-2 text-[10px] text-purple-600 dark:text-purple-400 font-medium">Tượng tròn &amp; Phù điêu đắp nổi</div>
            </div>
          </div>
        </div>
      `;
    } else if (secIdx === 2) { // Tác phẩm kinh điển
      return `
        <div class="my-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-landmark"></i> 4 Kiệt Tác Trọng Tâm Cần Nhớ
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-l-rose-500 shadow-sm">
              <div class="font-bold text-slate-800 dark:text-slate-200">"Tát nước đồng chiêm" (1958)</div>
              <div class="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">Trần Văn Cẩn • Tranh Sơn mài</div>
              <div class="text-[11px] text-slate-500 mt-0.5">Hình khối khoẻ khoắn nổi bật trên nền đen óng</div>
            </div>
            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-l-indigo-500 shadow-sm">
              <div class="font-bold text-slate-800 dark:text-slate-200">"Sau giờ lao động" (1970)</div>
              <div class="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">Nguyễn Tiến Chung • Khắc gỗ</div>
              <div class="text-[11px] text-slate-500 mt-0.5">Ao làng, mái ngói ước lệ, thanh bình êm ả</div>
            </div>
            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-l-amber-500 shadow-sm">
              <div class="font-bold text-slate-800 dark:text-slate-200">"Những người khởi nghĩa" (1984)</div>
              <div class="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">Trần Thị Hồng • Phù điêu gò đồng</div>
              <div class="text-[11px] text-slate-500 mt-0.5">Nhân vật nhiều lớp tạo xa gần, cùng hướng tiến</div>
            </div>
            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-l-emerald-500 shadow-sm">
              <div class="font-bold text-slate-800 dark:text-slate-200">"Bà cháu" (1980)</div>
              <div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Nguyễn Thị Hoà • Tượng đá</div>
              <div class="text-[11px] text-slate-500 mt-0.5">Khối thô góc cạnh ở bà tương phản khối tròn ở cháu</div>
            </div>
          </div>
        </div>
      `;
    } else if (secIdx === 4) { // Tranh khắc gỗ truyền thống
      return `
        <div class="my-4 p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <div class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-tree"></i> So Sánh Hai Kĩ Thuật Tranh Khắc Gỗ Dân Gian
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
              <div class="font-bold text-amber-700 dark:text-amber-400 text-sm">Tranh Đông Hồ (Bắc Ninh)</div>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Dùng <strong>nhiều bản khắc riêng</strong> cho từng màu và nét. In lần lượt từng mảng màu lên giấy điệp (vỏ sò điệp óng ánh) rồi mới in bản nét đen cuối cùng.</p>
              <div class="mt-2 text-[10px] text-slate-400">Đặc trưng: Mảng màu bẹt, dân dã, ấm cúng</div>
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
              <div class="font-bold text-amber-700 dark:text-amber-400 text-sm">Tranh Hàng Trống (Hà Nội)</div>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Chỉ in <strong>một bản nét đen</strong> từ ván khắc lên giấy xuyến chỉ. Sau đó nghệ nhân dùng bút lông chấm phẩm nhuộm tỉa vờn đậm nhạt từng mảng bằng tay.</p>
              <div class="mt-2 text-[10px] text-slate-400">Đặc trưng: Nét thanh mảnh, màu chuyển êm, trang nhã</div>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 2: Xây dựng ý tưởng
  if (lessonNum === 2) {
    if (secIdx === 1) { // Quy trình cốt lõi
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project"></i> Sơ Đồ Quy Trình Sáng Tác Theo Chủ Đề (Hình 1 SGK)
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-center">
            <div class="flex-1 min-w-[100px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 1</span>
              <span>Chủ đề / Đề tài</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[100px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 2</span>
              <span>Ý tưởng &amp; Tìm hình</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[100px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 3</span>
              <span>Phác thảo chính phụ</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[100px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 4</span>
              <span>Chọn màu &amp; Vẽ nền</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[100px] p-2 bg-purple-600 text-white rounded-lg shadow-sm">
              <span class="text-purple-200 block text-xs">Bước 5</span>
              <span>Hoàn thiện &amp; Đặt tên</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 3: Tạo hình ngôi nhà
  if (lessonNum === 3) {
    if (secIdx === 0) { // Quan sát kiến trúc
      return `
        <div class="my-4 p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <div class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-house"></i> 4 Kiểu Kiến Trúc Nhà Ở Đặc Trưng Việt Nam
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-slate-700">
              <div class="text-xl mb-1">🛖</div>
              <strong class="text-amber-800 dark:text-amber-300 block">Nhà Sàn</strong>
              <span class="text-[10px] text-slate-500">Sàn nâng tránh thú, mái dốc vùng cao</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-slate-700">
              <div class="text-xl mb-1">🏛️</div>
              <strong class="text-amber-800 dark:text-amber-300 block">Nhà Rường</strong>
              <span class="text-[10px] text-slate-500">Khung gỗ cột kèo tinh xảo xứ Huế</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-slate-700">
              <div class="text-xl mb-1">⛺</div>
              <strong class="text-amber-800 dark:text-amber-300 block">Nhà Rông</strong>
              <span class="text-[10px] text-slate-500">Mái nhọn cao vút sừng sững Tây Nguyên</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-slate-700">
              <div class="text-xl mb-1">🏘️</div>
              <strong class="text-amber-800 dark:text-amber-300 block">Nhà Cổ Ngói Rêu</strong>
              <span class="text-[10px] text-slate-500">Mái ngói nhấp nhô phố cổ Hà Nội</span>
            </div>
          </div>
        </div>
      `;
    } else if (secIdx === 2) { // Bùi Xuân Phái (Hình 2)
      return `
        <div class="my-4 p-4 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/60">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-image"></i> Hình 2 SGK: Phố Trong Tranh Bùi Xuân Phái (Trang 13)
            </span>
            <span class="text-[11px] bg-orange-200 dark:bg-orange-900 text-orange-900 dark:text-orange-200 px-2 py-0.5 rounded font-bold">Phố Hàng Mắm, Phố Thanh Hà</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-orange-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <p><strong>Nghệ thuật tạo hình:</strong> Mái ngói mũi hài rêu phong màu nâu đỏ, mảng tường vàng xám loang lổ vết tích thời gian; các đường viền nét đen đậm dứt khoát bao bọc mảng hình; gam màu trầm ấm diễn tả không gian phố cổ bằng xúc cảm hoài niệm da diết.</p>
          </div>
        </div>
      `;
    } else if (secIdx === 3) { // In độc bản
      return `
        <div class="my-4 p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60">
          <div class="text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-layer-group"></i> 4 Bước Kĩ Thuật In Độc Bản (Monoprint)
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-bold text-[10px] mb-1">1</span>
              <strong class="block text-slate-800 dark:text-slate-200">Phác hình</strong>
              <span class="text-[10px] text-slate-500">Vẽ phác lên tấm mica</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-bold text-[10px] mb-1">2</span>
              <strong class="block text-slate-800 dark:text-slate-200">Tô màu</strong>
              <span class="text-[10px] text-slate-500">Tô màu vào hình vẽ</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-bold text-[10px] mb-1">3</span>
              <strong class="block text-slate-800 dark:text-slate-200">Đặt giấy &amp; Miết</strong>
              <span class="text-[10px] text-slate-500">Miết đều để màu thấm</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-bold text-[10px] mb-1">4</span>
              <strong class="block text-slate-800 dark:text-slate-200">Tách bản in</strong>
              <span class="text-[10px] text-slate-500">Nhấc giấy, hoàn thiện</span>
            </div>
          </div>
          <div class="mt-2 text-[11px] text-indigo-700 dark:text-indigo-300 font-semibold text-center">
            ★ Lưu ý: Hình in trên giấy sẽ bị lật ngược đối xứng trái – phải so với hình vẽ trên tấm mica.
          </div>
        </div>
      `;
    }
  }

  // Lesson 4: Thiết kế quà lưu niệm (Hình 3)
  if (lessonNum === 4) {
    if (secIdx === 1) {
      return `
        <div class="my-4 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <div class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-cubes-stacked"></i> Hình 3 SGK: Quy Trình 5 Bước Làm Mô Hình Nhà Bằng Bìa (Trang 19)
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">Bước 1</span>
              <span>Khai triển &amp; Cắt bìa</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">Bước 2</span>
              <span>Gập nếp &amp; Dán khung</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">Bước 3</span>
              <span>Cắt &amp; Gập mái nhà</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">Bước 4</span>
              <span>Vẽ chi tiết cửa, người</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">Bước 5</span>
              <span>Lắp mái &amp; Hoàn thiện</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 5: Giấy bồi (Hình 4)
  if (lessonNum === 5) {
    if (secIdx === 3) {
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-scroll"></i> Hình 4 SGK: Kĩ Thuật 6 Bước Đắp Nổi Giấy Bồi (Trang 24)
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block">1. Phác hình</span>
              <span class="text-[10px] text-slate-500">Vẽ nền bìa</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block">2. Ngâm giấy</span>
              <span class="text-[10px] text-slate-500">Xé nhuyễn nước</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block">3. Trộn màu</span>
              <span class="text-[10px] text-slate-500">Thêm keo dán</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block">4. Pha mảng</span>
              <span class="text-[10px] text-slate-500">Các phần màu</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block">5. Đắp nổi</span>
              <span class="text-[10px] text-slate-500">Đắp vào hình</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block">6. Chỉnh sửa</span>
              <span class="text-[10px] text-slate-500">Để khô tự nhiên</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 7: Tiền sử thế giới (Hình 5)
  if (lessonNum === 7) {
    if (secIdx === 1) {
      return `
        <div class="my-4 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <div class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-mountain-sun"></i> Hình 5 SGK: Kiệt Tác Nghệ Thuật Hang Động Tiền Sử (Trang 31)
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <strong class="text-amber-700 dark:text-amber-300 block">Bhimbetka (Ấn Độ)</strong>
              <span class="text-[11px] text-slate-500">Hình vẽ màu khoáng mô tả cảnh săn bắn thú rừng sinh động</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <strong class="text-amber-700 dark:text-amber-300 block">Vệ Nữ Willendorf (Áo)</strong>
              <span class="text-[11px] text-slate-500">Tượng đá nhỏ 25 000 năm TCN tôn vinh phồn thực</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <strong class="text-amber-700 dark:text-amber-300 block">Cueva de las Manos</strong>
              <span class="text-[11px] text-slate-500">Hình bàn tay phủ sắc tố đỏ trên vách đá Argentina</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 8: Tiền sử Việt Nam (Hình 6)
  if (lessonNum === 8) {
    if (secIdx === 1) {
      return `
        <div class="my-4 p-4 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/60">
          <div class="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-monument"></i> Hình 6 SGK: Mặt Người Có Sừng Hang Đồng Nội (Trang 36)
          </div>
          <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-orange-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
            <p><strong>Văn hoá Hoà Bình:</strong> Bức phù điêu khắc chìm trên vách hang đá Đồng Nội (Lạc Thủy, Hòa Bình) mô tả khuôn mặt người cách điệu với đôi sừng cong vút, đường nét dứt khoát sâu hoắm, phản ánh tín ngưỡng tôn thờ muông thú và tư duy tạo hình sơ khai của người Việt cổ.</p>
          </div>
        </div>
      `;
    }
  }

  // Lesson 10: Thiệp nổi (Hình 7)
  if (lessonNum === 10) {
    if (secIdx === 1) {
      return `
        <div class="my-4 p-4 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800/60">
          <div class="text-xs font-bold text-pink-800 dark:text-pink-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-envelope-open-text"></i> Hình 7 SGK: Quy Trình 6 Bước Làm Thiệp Nổi Pop-Up (Trang 43)
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-pink-100 dark:border-slate-700">
              <span class="text-pink-600 font-bold block">1. Tạo mộng</span>
              <span class="text-[10px] text-slate-500">Rạch rãnh nếp gấp</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-pink-100 dark:border-slate-700">
              <span class="text-pink-600 font-bold block">2. Nền trong</span>
              <span class="text-[10px] text-slate-500">Trang trí ruột thiệp</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-pink-100 dark:border-slate-700">
              <span class="text-pink-600 font-bold block">3. Phác hình</span>
              <span class="text-[10px] text-slate-500">Hình trò chơi</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-pink-100 dark:border-slate-700">
              <span class="text-pink-600 font-bold block">4. Tô màu &amp; Cắt</span>
              <span class="text-[10px] text-slate-500">Cắt tỉa nhân vật</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-pink-100 dark:border-slate-700">
              <span class="text-pink-600 font-bold block">5. Dán mộng</span>
              <span class="text-[10px] text-slate-500">Gắn hình nhô đứng</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-pink-100 dark:border-slate-700">
              <span class="text-pink-600 font-bold block">6. Bìa ngoài</span>
              <span class="text-[10px] text-slate-500">Viết lời chúc</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 11: Hoà sắc lễ hội (Hình 8, 9)
  if (lessonNum === 11) {
    if (secIdx === 1) { // Hình 8
      return `
        <div class="my-4 p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60">
          <div class="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-palette"></i> Hình 8 SGK: Các Bước Thể Hiện Bố Cục Hoà Sắc Lễ Hội (Trang 47)
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-rose-100 dark:border-slate-700">
              <span class="text-rose-600 font-bold block">Bước 1</span>
              <span>Phác nhân vật &amp; cảnh chính</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-rose-100 dark:border-slate-700">
              <span class="text-rose-600 font-bold block">Bước 2</span>
              <span>Tô màu mảng nhân vật</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-rose-100 dark:border-slate-700">
              <span class="text-rose-600 font-bold block">Bước 3</span>
              <span>Tô màu trang phục, cờ hội</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-rose-100 dark:border-slate-700">
              <span class="text-rose-600 font-bold block">Bước 4</span>
              <span>Tô nền ấm &amp; Hoàn thiện nét</span>
            </div>
          </div>
        </div>
      `;
    } else if (secIdx === 3) { // Hình 9
      return `
        <div class="my-4 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-crown"></i> Hình 9 SGK: "Lễ Hội Đầu Năm" - Nguyễn Gia Trí (Trang 50)
            </span>
            <span class="text-[11px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-2 py-0.5 rounded font-bold">Tranh Sơn Mài</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <p><strong>Nghệ thuật hoà sắc:</strong> Màu đỏ son và quỳ vàng rực rỡ lấp lánh chiếm ưu thế, đan cài màu đen then trầm mặc và điểm xuyết vỏ trứng trắng muốt, tạo nên không gian trẩy hội mùa xuân vừa trang nghiêm, huyền ảo vừa rộn rã sức sống.</p>
          </div>
        </div>
      `;
    }
  }

  // Lesson 12: Thiết kế lịch (Hình 10)
  if (lessonNum === 12) {
    if (secIdx === 0) {
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-calendar-days"></i> Hình 10 SGK: Bố Cục Chuẩn Thiết Kế Lịch Treo Tường (Trang 52)
          </div>
          <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-4 text-xs">
            <div class="w-28 h-36 bg-slate-100 dark:bg-slate-900 border-2 border-dashed border-purple-400 rounded-lg flex flex-col overflow-hidden text-center flex-shrink-0">
              <div class="h-2/3 bg-purple-100 dark:bg-purple-950 flex flex-col items-center justify-center p-1 text-[10px] font-bold text-purple-700">
                <span>2/3 DIỆN TÍCH</span>
                <span class="font-normal text-[9px]">Tranh chủ đề lễ hội</span>
              </div>
              <div class="h-1/3 bg-white dark:bg-slate-800 flex items-center justify-center p-1 text-[9px] font-bold text-slate-600">
                1/3 Block số ngày tháng
              </div>
            </div>
            <div class="space-y-1.5 text-slate-600 dark:text-slate-300">
              <p>• <strong>Phần hình trang trí:</strong> Lấy cảm hứng từ sắc màu lễ hội (mặt nạ tuồng, múa lân, cờ ngũ sắc), tạo không khí tươi vui.</p>
              <p>• <strong>Phần thông tin:</strong> Tên năm, tháng, ngày và thứ trong tuần phải rõ ràng, dễ tra cứu từ khoảng cách sử dụng thông thường.</p>
              <p>• <strong>Dây treo:</strong> Luồn dây chắc chắn, cân đối trọng tâm để lịch không bị nghiêng lệch.</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 13: Mai Trung Thứ (Hình 11)
  if (lessonNum === 13) {
    if (secIdx === 1) {
      return `
        <div class="my-4 p-4 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800/60">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-pink-800 dark:text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-heart"></i> Hình 11 SGK: Tranh Lụa Mai Trung Thứ (Trang 56)
            </span>
            <span class="text-[11px] bg-pink-200 dark:bg-pink-900 text-pink-900 dark:text-pink-200 px-2 py-0.5 rounded font-bold">Viết Bài &amp; Niềm Vui Sống II</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-pink-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <p><strong>Phong cách nghệ thuật:</strong> Đường nét uốn lượn mềm mại trên chất liệu lụa tơ tằm óng ả; gam màu trong trẻo, dịu ngọt; diễn tả tư thế chăm chỉ học bài của các em nhỏ và nét thanh lịch của thiếu nữ Việt Nam trong đời sống thường nhật.</p>
          </div>
        </div>
      `;
    }
  }

  // Lesson 15: Kim tự tháp (Hình 12)
  if (lessonNum === 15) {
    if (secIdx === 2) {
      return `
        <div class="my-4 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <div class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-shapes"></i> Hình 12 SGK: 6 Bước Dựng Mô Hình Kim Tự Tháp Ai Cập (Trang 63)
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">1. Khai triển</span>
              <span class="text-[10px] text-slate-500">Đáy vuông 4 tam giác</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">2. Cắt rời</span>
              <span class="text-[10px] text-slate-500">Cắt theo viền ngoài</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">3. Trang trí</span>
              <span class="text-[10px] text-slate-500">Vẽ vân đá gạch</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">4. Gập mép</span>
              <span class="text-[10px] text-slate-500">Gập 4 cạnh đáy</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">5. Dựng chóp</span>
              <span class="text-[10px] text-slate-500">Dán chụm đỉnh</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-100 dark:border-slate-700">
              <span class="text-amber-600 font-bold block">6. Cảnh quan</span>
              <span class="text-[10px] text-slate-500">Thêm cây cọ sa mạc</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Lesson 16: Cổ đại Việt Nam & Áo dài (Hình 13, 14)
  if (lessonNum === 16) {
    if (secIdx === 0) { // Hình 13
      return `
        <div class="my-4 p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
          <div class="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-gem"></i> Hình 13 SGK: Di Vật Mĩ Thuật Việt Nam Cổ Đại (Trang 65)
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <strong class="text-emerald-700 dark:text-emerald-400 block">Đông Sơn (Miền Bắc)</strong>
              <span class="text-[11px] text-slate-500">Tượng đồng người cõng nhau thổi khèn; Trống đồng hoa văn tinh xảo</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <strong class="text-emerald-700 dark:text-emerald-400 block">Sa Huỳnh (Miền Trung)</strong>
              <span class="text-[11px] text-slate-500">Đèn gốm hình thú độc đáo, hoa văn khắc vạch và mộ chum</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <strong class="text-emerald-700 dark:text-emerald-400 block">Óc Eo (Nam Bộ)</strong>
              <span class="text-[11px] text-slate-500">Bình gốm cổ, trang sức vàng và tượng đá giao lưu quốc tế sầm uất</span>
            </div>
          </div>
        </div>
      `;
    } else if (secIdx === 2) { // Hình 14
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-vest"></i> Hình 14 SGK: 4 Bước Trang Trí Áo Dài Hoa Văn Di Sản (Trang 66)
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block text-sm">Bước 1</span>
              <span>Vẽ phác dáng tà áo dài cân đối</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block text-sm">Bước 2</span>
              <span>Chọn đặt hoa văn di sản phù hợp</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block text-sm">Bước 3</span>
              <span>Cắt rời hình mẫu tà áo dài</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700">
              <span class="text-purple-600 font-bold block text-sm">Bước 4</span>
              <span>Tô màu hoa văn &amp; Hoàn thiện</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  return '';
}

console.log('Enriching all sections of mithuat_6.html with detailed visual infographics...');

// We will update build_full_mithuat6_page.js with this new enrichment function and run it!
