
function getSectionIllustration(lessonNum, secIdx, heading) {
  // Bài 1: Một số thể loại mĩ thuật
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
    } else if (secIdx === 4) { // Tranh khắc gỗ
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

  // Bài 2: Xây dựng ý tưởng
  if (lessonNum === 2) {
    if (secIdx === 1) { // Quy trình cốt lõi (Hình 1)
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project"></i> Hình 1 SGK: Sơ Đồ Quy Trình Sáng Tác Theo Chủ Đề (Trang 10)
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-center">
            <div class="flex-1 min-w-[90px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 1</span>
              <span>Chủ đề / Đề tài</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[90px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 2</span>
              <span>Ý tưởng &amp; Tìm hình</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[90px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 3</span>
              <span>Phác thảo chính phụ</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[90px] p-2 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-slate-700 shadow-sm">
              <span class="text-purple-600 block text-xs">Bước 4</span>
              <span>Chọn màu &amp; Vẽ nền</span>
            </div>
            <span class="text-purple-400">→</span>
            <div class="flex-1 min-w-[90px] p-2 bg-purple-600 text-white rounded-lg shadow-sm">
              <span class="text-purple-200 block text-xs">Bước 5</span>
              <span>Hoàn thiện &amp; Đặt tên</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Bài 3: Tạo hình ngôi nhà
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
              <span class="text-[10px] text-slate-500">Sàn nâng tránh ẩm, mái dốc vùng cao</span>
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
    } else if (secIdx === 4) { // Nguyên lí tương phản
      return `
        <div class="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
          <div class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-half-stroke"></i> Ma Trận Các Cặp Yếu Tố Tương Phản Tạo Điểm Nhấn
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <strong class="text-purple-600 dark:text-purple-400 block">Đường Nét</strong>
              <span>Thẳng ↔ Cong</span><br>
              <span class="text-[10px] text-slate-400">Thanh ↔ Đậm, Gấp khúc</span>
            </div>
            <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <strong class="text-rose-600 dark:text-rose-400 block">Màu Sắc</strong>
              <span>Sáng ↔ Tối</span><br>
              <span class="text-[10px] text-slate-400">Nóng ↔ Lạnh, Rực rỡ ↔ Trầm</span>
            </div>
            <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <strong class="text-amber-600 dark:text-amber-400 block">Chất Cảm</strong>
              <span>Nhẵn ↔ Xù xì</span><br>
              <span class="text-[10px] text-slate-400">Thô ráp ↔ Trơn láng</span>
            </div>
            <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <strong class="text-emerald-600 dark:text-emerald-400 block">Hình Khối</strong>
              <span>Đặc ↔ Rỗng</span><br>
              <span class="text-[10px] text-slate-400">Lớn ↔ Nhỏ, Tĩnh ↔ Động</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Bài 4: Thiết kế quà lưu niệm (Hình 3)
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

  // Bài 5: Giấy bồi (Hình 4)
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

  // Bài 6: Thiết kế đồ chơi
  if (lessonNum === 6) {
    if (secIdx === 1) {
      return `
        <div class="my-4 p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
          <div class="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-gamepad"></i> Cơ Chế Chế Tạo Bàn Bi Lắc Bóng Đá Bằng Hộp Giấy (4 Bước)
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <span class="text-emerald-600 font-bold block text-sm">1. Trổ khung &amp; xỏ que</span>
              <span class="text-[11px] text-slate-500">Trổ 2 cầu môn, xỏ que gỗ qua thành hộp</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <span class="text-emerald-600 font-bold block text-sm">2. Trang trí sân cỏ</span>
              <span class="text-[11px] text-slate-500">Kẻ vạch vôi trắng, vẽ khán đài cổ vũ</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <span class="text-emerald-600 font-bold block text-sm">3. Vẽ cắt cầu thủ</span>
              <span class="text-[11px] text-slate-500">Tô màu và cắt rời hình cầu thủ từ bìa cứng</span>
            </div>
            <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <span class="text-emerald-600 font-bold block text-sm">4. Gắn que &amp; thử chơi</span>
              <span class="text-[11px] text-slate-500">Dán cầu thủ vào que, thử xoay điều khiển</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Bài 7: Tiền sử thế giới (Hình 5)
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

  // Bài 8: Tiền sử Việt Nam (Hình 6)
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

  // Bài 9: Trò chơi dân gian
  if (lessonNum === 9) {
    if (secIdx === 2) { // Nguyên lí cân bằng
      return `
        <div class="my-4 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <div class="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-scale-balanced"></i> Hai Dạng Cân Bằng Thị Giác Trong Bố Cục
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700">
              <strong class="text-purple-800 dark:text-purple-300 block text-sm">1. Cân Bằng Đối Xứng</strong>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Các yếu tố tạo hình (hình thể, đường nét, màu sắc) ở hai bên trục trung tâm có khối lượng thị giác tương đương nhau, tạo cảm giác trang nghiêm, tĩnh tại và vững bền.</p>
            </div>
            <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700">
              <strong class="text-purple-800 dark:text-purple-300 block text-sm">2. Cân Bằng Bất Đối Xứng (Bù Trừ)</strong>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Sắp đặt các yếu tố khác biệt ở hai phía nhưng vẫn đạt được sự ổn định: ví dụ một mảng hình lớn màu trầm nhẹ ở bên trái được cân bằng bởi một điểm nhấn nhỏ màu rực rỡ ở bên phải.</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Bài 10: Thiệp nổi (Hình 7)
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

  // Bài 11: Hoà sắc lễ hội (Hình 8, 9)
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

  // Bài 12: Thiết kế lịch (Hình 10)
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

  // Bài 13: Mai Trung Thứ (Hình 11)
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

  // Bài 14: Biểu tượng trực quan Icons
  if (lessonNum === 14) {
    if (secIdx === 0) {
      return `
        <div class="my-4 p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60">
          <div class="text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-icons"></i> Bộ 8 Biểu Tượng Hoạt Động Thường Ngày Phổ Biến
          </div>
          <div class="grid grid-cols-4 sm:grid-cols-8 gap-2 text-center text-xs">
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">🛌</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Ngủ</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">⏰</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Thức dậy</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">🏃</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Thể thao</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">🥣</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Ăn sáng</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">🏫</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Học trường</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">🧹</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Dọn nhà</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">📖</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Đọc sách</span>
            </div>
            <div class="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-700">
              <div class="text-base mb-0.5">🎨</div>
              <span class="text-[10px] text-slate-600 dark:text-slate-300 font-bold block">Sáng tạo</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Bài 15: Kim tự tháp (Hình 12)
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

  // Bài 16: Cổ đại Việt Nam & Áo dài (Hình 13, 14)
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

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/mithuat6_data.json', 'utf8'));

console.log('Generating mithuat_6.html with', data.topics.length, 'topics and 16 lessons...');

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
}

// Generate questions for each lesson
function getLessonQuestions(lessonNum) {
  const qMap = {
    1: [
      {
        q: "Điểm khác biệt cơ bản nhất giữa Tượng và Phù điêu trong nghệ thuật Điêu khắc là gì?",
        options: [
          "Tượng là khối ba chiều hoàn chỉnh quan sát được từ nhiều phía; phù điêu là hình khối nổi hoặc chìm luôn gắn với mặt phẳng nền",
          "Tượng chỉ làm bằng đá, phù điêu chỉ làm bằng gỗ",
          "Tượng thuộc mĩ thuật ứng dụng, phù điêu thuộc mĩ thuật tạo hình",
          "Tượng luôn có kích thước lớn hơn phù điêu"
        ],
        ans: 0,
        exp: "Tượng là khối ba chiều có thể quan sát từ nhiều phía; phù điêu có hình nổi hoặc chìm gắn liền với mặt phẳng nền."
      },
      {
        q: "Tác phẩm tranh sơn mài 'Tát nước đồng chiêm' (1958) là kiệt tác của danh họa nào?",
        options: ["Trần Văn Cẩn", "Nguyễn Tiến Chung", "Nguyễn Gia Trí", "Bùi Xuân Phái"],
        ans: 0,
        exp: "Bức tranh sơn mài 'Tát nước đồng chiêm' nổi tiếng do danh họa Trần Văn Cẩn sáng tác năm 1958."
      }
    ],
    2: [
      {
        q: "Quy trình cốt lõi trong sáng tác mĩ thuật theo chủ đề gồm những bước nào?",
        options: [
          "Chủ đề/đề tài → Xây dựng ý tưởng và tìm hình ảnh → Phác bố cục chính phụ → Chọn màu sắc → Hoàn thiện và đặt tên",
          "Chọn màu sắc → Mua khung tranh → Vẽ hình ngẫu nhiên → Đặt tên tác phẩm",
          "Sao chép y nguyên một bức ảnh có sẵn trên mạng mà không cần chỉnh sửa",
          "Vẽ chi tiết trước rồi mới nghĩ đến chủ đề sau"
        ],
        ans: 0,
        exp: "Quy trình chuẩn: Chủ đề/đề tài → Ý tưởng & tìm hình ảnh → Phác hình chính–phụ → Chọn màu → Hoàn thiện → Đặt tên."
      },
      {
        q: "Khái niệm 'Sáng tạo mĩ thuật' đúng đắn nhất là:",
        options: [
          "Chọn lọc, khái quát và tổ chức lại hình ảnh theo cảm xúc và ý tưởng riêng của người vẽ",
          "Chỉ sao chép chính xác từng milimet bức ảnh chụp",
          "Vẽ càng nhiều chi tiết rườm rà càng tốt",
          "Tô màu kín toàn bộ mặt giấy mà không để lại khoảng trống"
        ],
        ans: 0,
        exp: "Sáng tạo là chọn lọc, khái quát và tổ chức lại hình ảnh theo cảm xúc, không chỉ sao chép ảnh chụp."
      }
    ],
    3: [
      {
        q: "Đặc điểm nổi bật trong phong cách vẽ tranh Phố cổ Hà Nội của danh họa Bùi Xuân Phái là gì?",
        options: [
          "Mảng màu lớn trầm ấm, đường viền đen đậm chắc khỏe diễn tả mái ngói rêu phong nhấp nhô theo cảm xúc",
          "Vẽ bằng bút chì kim với nét mảnh mờ nhạt",
          "Chỉ sử dụng màu neon rực rỡ và vẽ các tòa nhà chọc trời hiện đại",
          "Dùng đất nặn đắp nổi các bức tượng trên phố"
        ],
        ans: 0,
        exp: "Bùi Xuân Phái tái hiện phố cổ Hà Nội với mái ngói nhấp nhô, mảng màu lớn và đường viền đen đậm đầy cảm xúc."
      },
      {
        q: "Trong kĩ thuật in độc bản (Monoprint), hiện tượng nào sẽ xảy ra khi hình ảnh được in từ mica sang giấy?",
        options: [
          "Hình in trên giấy sẽ bị lật ngược chiều (đối xứng trái – phải) so với hình vẽ trên tấm mica",
          "Hình in trên giấy giữ nguyên y hệt chiều trái – phải",
          "Hình in trên giấy sẽ tự động chuyển thành hình đen trắng",
          "Có thể in ra hàng nghìn bản hoàn toàn giống hệt nhau cùng lúc"
        ],
        ans: 0,
        exp: "Khi miết giấy in lên bề mặt mica, hình ảnh chuyển sang giấy sẽ bị đảo chiều trái – phải (in độc bản)."
      }
    ],
    4: [
      {
        q: "Yêu cầu kĩ thuật quan trọng nhất khi hoàn thiện mô hình ngôi nhà bằng bìa cứng là gì?",
        options: [
          "Mối nối dán keo chắc chắn, mô hình đứng vững trên mặt phẳng, tỉ lệ hài hòa giữa mái và tường",
          "Phải dùng đinh sắt đóng chặt các góc",
          "Cắt rời vụn tất cả các vách tường ra từng mảnh nhỏ",
          "Mô hình càng nghiêng càng đẹp mắt"
        ],
        ans: 0,
        exp: "Mô hình cần chừa mép dán, liên kết các khớp nối chắc chắn, đứng vững và có tỉ lệ hài hòa giữa mái, tường và cửa."
      },
      {
        q: "Ngành Thiết kế công nghiệp (Industrial Design) thuộc phân ngành nào của Mĩ thuật?",
        options: ["Mĩ thuật ứng dụng", "Mĩ thuật tạo hình", "Hội họa giá vẽ", "Điêu khắc tượng đài"],
        ans: 0,
        exp: "Thiết kế công nghiệp thuộc Mĩ thuật ứng dụng, ra đời từ thế kỉ XIX nhằm tạo dáng thẩm mĩ cho đồ dùng, thiết bị."
      }
    ],
    5: [
      {
        q: "Trong tác phẩm tranh màu nước 'Học tổ' (1959) của danh họa Nguyễn Phan Chánh, điểm nào tạo nên sự gắn kết giữa các nhân vật?",
        options: [
          "Bố trí bốn nhân vật hai phía trục dọc, ánh mắt và cử chỉ giao cảm đối diện tạo không khí học tập ấm áp",
          "Các nhân vật quay lưng hoàn toàn vào nhau",
          "Mỗi nhân vật nhìn ra một hướng ngoài khung tranh",
          "Màu sắc rực rỡ đối lập gay gắt giữa từng người"
        ],
        ans: 0,
        exp: "Bốn nhân vật bố trí hai phía trục dọc, giao cảm giữa người đối diện tạo sự gắn kết, gam nâu ấm áp."
      },
      {
        q: "Trong kĩ thuật đắp nổi bằng giấy bồi, sau khi xé nhỏ và ngâm giấy vệ sinh sạch, bước tiếp theo là gì?",
        options: [
          "Vắt ráo nước bớt và trộn màu vẽ cùng keo dính vào khối giấy",
          "Đem phơi nắng ngay lập tức khi giấy còn khô",
          "Dùng dao băm nhỏ giấy thành bột khô",
          "Đốt giấy để lấy tro than tạo màu đen"
        ],
        ans: 0,
        exp: "Quy trình: Ngâm giấy nhuyễn → vắt ráo → trộn màu vẽ và keo dán → đắp nổi theo hình phác thảo."
      }
    ],
    6: [
      {
        q: "Khi thiết kế đồ chơi cho học sinh, tiêu chí nào phải luôn được đặt lên hàng đầu?",
        options: [
          "Độ an toàn khi sử dụng (không sắc nhọn, không độc hại) và khả năng vận hành trơn tru của trò chơi",
          "Giá thành nguyên liệu phải thật đắt tiền",
          "Chỉ cần hình thức đẹp mắt, không cần chơi được",
          "Kích thước càng cồng kềnh càng tốt"
        ],
        ans: 0,
        exp: "Thiết kế đồ chơi phải đảm bảo tuyệt đối an toàn và đáp ứng tốt công năng giải trí vận hành của trò chơi."
      },
      {
        q: "Bộ phận nào đóng vai trò thanh điều khiển chuyển động trong mô hình trò chơi bóng đá bằng hộp giấy?",
        options: ["Các thanh que gỗ tròn xuyên qua thành hộp", "Sợi dây cao su kéo căng", "Các bánh răng kim loại phức tạp", "Mô tơ điện công suất lớn"],
        ans: 0,
        exp: "Que gỗ tròn xuyên qua thành hộp cài các cầu thủ bìa cứng giúp người chơi xoay và gạt bóng dễ dàng."
      }
    ],
    7: [
      {
        q: "Nội dung phản ánh chủ yếu trong các bức bích họa hang động thời tiền sử là gì?",
        options: [
          "Hình ảnh con người, thú rừng săn bắn và các nghi lễ tâm linh mộc mạc",
          "Các công trình lâu đài nguy nga tráng lệ",
          "Chân dung các vị hoàng đế đội vương miện",
          "Bản đồ địa lí các châu lục trên thế giới"
        ],
        ans: 0,
        exp: "Bích họa tiền sử (Bhimbetka, Sahara...) ghi lại hình ảnh săn bắn muông thú và đời sống tâm linh mộc mạc."
      },
      {
        q: "Pho tượng đá nhỏ 'Vệ nữ Willendorf' tìm thấy ở Áo có đặc điểm tạo hình nổi bật nào?",
        options: [
          "Các khối tròn căng tràn, phóng đại bộ phận cơ thể biểu trưng cho ước vọng phồn thực, sinh sôi",
          "Dáng người gầy guộc, các khối góc cạnh sắc nhọn",
          "Tạc một hiệp sĩ mặc áo giáp sắt cầm khiên",
          "Có đôi cánh thiên thần gắn sau lưng"
        ],
        ans: 0,
        exp: "Tượng Willendorf đẽo gọt các khối tròn nở nang, thể hiện quan niệm thẩm mĩ và tín ngưỡng phồn thực nguyên thủy."
      }
    ],
    8: [
      {
        q: "Bức phù điêu khắc chìm mặt người có sừng nổi tiếng của nền văn hoá Hoà Bình được tìm thấy ở đâu?",
        options: ["Vách hang Đồng Nội (Lạc Thủy, Hòa Bình)", "Hang Con Moong (Thanh Hóa)", "Đồng Đậu (Vĩnh Phúc)", "Gò Mun (Phú Thọ)"],
        ans: 0,
        exp: "Hình khắc mặt người có sừng độc đáo thuộc văn hoá Hoà Bình được phát hiện tại vách hang Đồng Nội."
      },
      {
        q: "Hiện vật rìu đá văn hoá Tràng An (Ninh Bình) có niên đại ước tính vào khoảng thời gian nào?",
        options: ["Khoảng 300 000 năm TCN", "Khoảng 10 000 năm TCN", "Năm 938 Công nguyên", "Khoảng 2 000 năm TCN"],
        ans: 0,
        exp: "SGK giới thiệu mốc khái quát của văn hoá Tràng An khoảng 300 000 năm TCN."
      }
    ],
    9: [
      {
        q: "Nguyên lí 'Cân bằng bất đối xứng' (cân bằng bù trừ) trong mĩ thuật được hiểu là:",
        options: [
          "Sắp đặt các mảng hình, màu sắc khác nhau ở hai bên nhưng tạo cảm giác hài hòa, ổn định về mặt thị giác",
          "Hai nửa bức tranh phải hoàn toàn giống hệt nhau như soi gương",
          "Tất cả các nhân vật dồn hết về góc bên phải để lại bên trái trống trơn",
          "Mỗi bên tranh dùng một loại chất liệu hoàn toàn đối nghịch"
        ],
        ans: 0,
        exp: "Cân bằng không nhất thiết là đối xứng tuyệt đối mà có thể bù trừ hình lớn/nhỏ, mảng đậm/nhạt để tổng thể hài hòa."
      },
      {
        q: "Bức tranh khắc gỗ 'Bác Hồ với thiếu nhi' (1980) do họa sĩ nào sáng tác?",
        options: ["Huy Oánh", "Nguyễn Phan Chánh", "Tạ Thúc Bình", "Nguyễn Tư Nghiêm"],
        ans: 0,
        exp: "Bức tranh khắc gỗ 'Bác Hồ với thiếu nhi' nổi tiếng do họa sĩ Huy Oánh sáng tác năm 1980."
      }
    ],
    10: [
      {
        q: "Kĩ thuật quan trọng để khi mở tấm thiệp thì hình ảnh nhân vật tự động nhô đứng lên là:",
        options: [
          "Cắt mộng đẩy nổi (kĩ thuật thiệp nổi Pop-up) ở sống gập đôi của tờ bìa",
          "Dán chặt toàn bộ mặt sau bức tranh vào tờ bìa",
          "Dùng nam châm hút hình ảnh",
          "Dùng đèn chiếu laser tạo bóng"
        ],
        ans: 0,
        exp: "Cắt hai đường rãnh song song ở nếp gấp tạo mộng nâng nổi pop-up giúp hình nhân vật đứng lên khi mở thiệp."
      },
      {
        q: "Khi thiết kế một tấm thiệp chúc mừng, điều nào sau đây cần tránh?",
        options: [
          "Hình trang trí quá rườm rà che lấp mất phần chữ lời chúc, khiến người nhận không đọc được thông điệp",
          "Chọn màu sắc tươi sáng, vui tươi phù hợp với dịp lễ",
          "Viết lời chúc ngắn gọn, chân thành và ý nghĩa",
          "Bố cục chữ và hình ảnh hài hòa, cân đối"
        ],
        ans: 0,
        exp: "Không để hình trang trí che chữ hoặc chữ quá nhiều lấn át hình; thông tin chúc mừng phải rõ ràng, dễ đọc."
      }
    ],
    11: [
      {
        q: "Khái niệm 'Hoà sắc' (Color Harmony) trong hội họa biểu thị điều gì?",
        options: [
          "Sự phối hợp giữa các màu sắc trong một tác phẩm tạo nên một tổng thể hài hòa, thống nhất về cảm xúc",
          "Việc sử dụng càng nhiều màu sắc lòe loẹt càng tốt mà không cần theo quy luật",
          "Chỉ được phép sử dụng duy nhất một màu đơn độc",
          "Việc pha loãng màu vẽ thật nhiều với nước"
        ],
        ans: 0,
        exp: "Hoà sắc là sự phối hợp các màu sắc tạo nên một tổng thể hài hòa, có màu chủ đạo và màu điểm nhấn."
      },
      {
        q: "Kiệt tác sơn mài 'Lễ hội đầu năm' là tác phẩm đỉnh cao của danh họa nào?",
        options: ["Nguyễn Gia Trí", "Tô Ngọc Vân", "Nguyễn Đỗ Cung", "Bùi Xuân Phái"],
        ans: 0,
        exp: "Danh họa Nguyễn Gia Trí là bậc thầy sơn mài Việt Nam với kiệt tác 'Lễ hội đầu năm'."
      }
    ],
    12: [
      {
        q: "Theo triết lí ngũ hành phương Đông thể hiện trên cờ ngũ sắc lễ hội, màu Lục (xanh lá cây) và màu Đỏ đại diện cho hành nào?",
        options: ["Lục ứng với hành Mộc, Đỏ ứng với hành Hỏa", "Lục ứng với Thủy, Đỏ ứng với Kim", "Lục ứng với Thổ, Đỏ ứng với Mộc", "Lục ứng với Kim, Đỏ ứng với Thủy"],
        ans: 0,
        exp: "Cờ ngũ sắc: Lục (Mộc), Đỏ (Hỏa), Vàng (Thổ), Trắng (Kim), Lam (Thủy)."
      },
      {
        q: "Tiêu chuẩn đánh giá một mẫu thiết kế lịch treo tường đạt chất lượng cao là:",
        options: [
          "Đạt sự hài hòa giữa vẻ đẹp thẩm mĩ của tranh trang trí và tính chuẩn xác, rõ ràng của các con số tra cứu ngày tháng",
          "Chỉ cần tranh vẽ cầu kì, các con số mờ nhạt khó nhìn cũng được",
          "Chỉ in các con số ngày tháng mà không cần trang trí hình ảnh",
          "Lịch càng nặng và to lớn thì càng tốt"
        ],
        ans: 0,
        exp: "Thiết kế lịch cần kết hợp chặt chẽ giữa tính thẩm mĩ và công năng sử dụng thực tiễn."
      }
    ],
    13: [
      {
        q: "Danh họa Mai Trung Thứ (1906–1980) nổi tiếng trong nền mĩ thuật hiện đại Việt Nam với thể loại chất liệu nào?",
        options: ["Tranh lụa", "Tranh sơn mài", "Tranh khắc gỗ", "Tượng đài đồng"],
        ans: 0,
        exp: "Mai Trung Thứ là bậc thầy tranh lụa Việt Nam với các tác phẩm thanh nhã như 'Viết bài', 'Niềm vui sống II'."
      },
      {
        q: "Nguồn cảm hứng phong phú nhất cho sáng tác mĩ thuật đề tài 'Cuộc sống thường ngày' bắt nguồn từ đâu?",
        options: [
          "Các hoạt động sinh hoạt, lao động, học tập và tình cảm bình dị trong gia đình và xóm làng",
          "Những câu chuyện thần thoại kì ảo xa xôi",
          "Các bộ phim khoa học viễn tưởng ngoài không gian",
          "Các trò chơi điện tử bạo lực"
        ],
        ans: 0,
        exp: "Mĩ thuật bắt nguồn từ chính hơi thở đời thường: học tập, việc nhà, tình cảm gia đình và lao động bình dị."
      }
    ],
    14: [
      {
        q: "Điểm khác biệt căn bản giữa một Biểu tượng trực quan (Icon) và một Bức tranh phong cảnh là gì?",
        options: [
          "Biểu tượng được giản lược, cách điệu cao độ để truyền đạt nhanh chóng một thông điệp hoặc hoạt động",
          "Biểu tượng luôn luôn vẽ bằng tay trên giấy bản to",
          "Biểu tượng không có tính thẩm mĩ nghệ thuật",
          "Biểu tượng phải chứa hàng trăm chi tiết tỉ mỉ"
        ],
        ans: 0,
        exp: "Biểu tượng dùng nét và hình đã khái quát, cách điệu để gợi hoạt động rõ ràng, nhanh chóng."
      },
      {
        q: "Lợi ích thiết thực nhất của việc thiết kế và sử dụng bảng Thời gian biểu cá nhân là gì?",
        options: [
          "Giúp học sinh quản lí quỹ thời gian khoa học, cân đối giữa việc học tập, giúp đỡ cha mẹ và nghỉ ngơi vui chơi",
          "Chỉ dùng để treo trang trí cho đẹp phòng học",
          "Để khoe với bạn bè mà không cần thực hiện theo",
          "Làm cho thời gian trôi qua nhanh hơn"
        ],
        ans: 0,
        exp: "Thời gian biểu giúp theo dõi, sắp xếp khoa học một ngày và rèn luyện lối sống có kế hoạch."
      }
    ],
    15: [
      {
        q: "Hình thức kiến trúc cổ đại nổi tiếng nào gắn liền với nền văn minh Ai Cập bên bờ sông Nin?",
        options: ["Kim tự tháp và đền thờ tạc vào vách đá", "Các đấu trường La Mã hình tròn", "Chùa tháp mái cong nhiều tầng", "Nhà thờ vòm nhọn Gothic"],
        ans: 0,
        exp: "Kim tự tháp khổng lồ là công trình kiến trúc kì vĩ biểu tượng của nền văn minh Ai Cập cổ đại."
      },
      {
        q: "Bản khai triển hình học để dựng mô hình Kim tự tháp Ai Cập bằng bìa bao gồm những hình nào?",
        options: [
          "1 đáy hình vuông liền kề với 4 mặt bên là các hình tam giác (chừa mép dán)",
          "4 hình chữ nhật ghép lại thành hình hộp",
          "6 hình vuông bằng nhau",
          "1 hình tròn và 1 hình quạt"
        ],
        ans: 0,
        exp: "Bản khai triển kim tự tháp gồm đáy vuông và 4 mặt tam giác chụm đỉnh lại với nhau."
      }
    ],
    16: [
      {
        q: "Cấu trúc ba phần đặc trưng của chiếc Trống đồng Đông Sơn thời cổ đại là gì?",
        options: [
          "Mặt trống phẳng ở trên, tang trống phình ra, thân trống hình trụ và chân trống choãi nhẹ",
          "Hình cầu tròn hoàn toàn từ trên xuống dưới",
          "Hình tháp tam giác thu hẹp dần lên đỉnh",
          "Hình bát giác không có chân đế"
        ],
        ans: 0,
        exp: "Trống đồng Đông Sơn có cấu trúc hoàn mĩ: mặt trống, tang trống phình, thân hình trụ và chân choãi nhẹ."
      },
      {
        q: "Hình tượng hoa văn nào thường bay ngược chiều kim đồng hồ quanh ngôi sao Mặt Trời trên mặt trống đồng Đông Sơn?",
        options: ["Hình chim Lạc sải cánh bay", "Hình rồng thời Lý", "Hình cá voi đại dương", "Hình ngựa có cánh"],
        ans: 0,
        exp: "Các dải hoa văn chim Lạc bay ngược chiều kim đồng hồ quanh vầng Mặt Trời nhiều cánh ở tâm trống đồng."
      }
    ]
  };

  return qMap[lessonNum] || [
    {
      q: `Nội dung cốt lõi của Bài ${lessonNum} môn Mĩ thuật 6 yêu cầu học sinh rèn luyện kĩ năng nào?`,
      options: [
        "Quan sát tinh tế, nắm bắt ngôn ngữ tạo hình và tự tin sáng tạo sản phẩm theo cảm xúc thẩm mĩ riêng",
        "Chỉ cần chép nguyên mẫu tranh của người khác mà không có sáng tạo",
        "Bỏ qua khâu phác thảo bố cục và tô màu tùy tiện",
        "Chỉ học thuộc lí thuyết mà không cần thực hành"
      ],
      ans: 0,
      exp: "Mĩ thuật 6 chú trọng phát triển tư duy sáng tạo, cảm thụ cái đẹp và rèn luyện kĩ năng tạo hình thực hành."
    },
    {
      q: "Khi thực hành các sản phẩm tạo hình mĩ thuật, học sinh cần ghi nhớ nguyên tắc an toàn nào?",
      options: [
        "Sử dụng kéo dao đúng cách, giữ vệ sinh dụng cụ và bàn làm việc sạch sẽ, không ngậm nuốt màu vẽ",
        "Dùng dao trổ đùa nghịch với bạn bè",
        "Vứt rác giấy bừa bãi ra sàn lớp học",
        "Dùng súng bắn keo nóng mà không cần người lớn hướng dẫn"
      ],
      ans: 0,
      exp: "Tuyệt đối tuân thủ quy tắc an toàn lao động, giữ gìn vệ sinh và bảo quản đồ dùng sau khi thực hành."
    }
  ];
}

// Generate creative SVG illustration for each lesson
function generateLessonArtSVG(lesson) {
  const num = lesson.num;
  const palettes = [
    { bg: '#fdf4ff', stroke: '#c026d3', fill: '#fae8ff', text: '#86198f' },
    { bg: '#fff1f2', stroke: '#e11d48', fill: '#ffe4e6', text: '#9f1239' },
    { bg: '#fff7ed', stroke: '#ea580c', fill: '#ffedd5', text: '#9a3412' },
    { bg: '#fefce8', stroke: '#ca8a04', fill: '#fef9c3', text: '#854d0e' },
    { bg: '#f0fdf4', stroke: '#16a34a', fill: '#dcfce7', text: '#166534' },
    { bg: '#ecfeff', stroke: '#0891b2', fill: '#cffafe', text: '#155e75' },
    { bg: '#eff6ff', stroke: '#2563eb', fill: '#dbeafe', text: '#1e40af' },
    { bg: '#faf5ff', stroke: '#9333ea', fill: '#f3e8ff', text: '#6b21a8' }
  ];
  const p = palettes[(num - 1) % palettes.length];
  
  function getDistinctLessonSVG(num) {
  // Lesson 1: Một số thể loại mĩ thuật
  if (num === 1) {
    return `
      <g transform="translate(40, 15)">
        <rect x="0" y="10" width="140" height="70" rx="8" fill="#fff" stroke="#c026d3" stroke-width="2"/>
        <text x="70" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">HỘI HOẠ (2D)</text>
        <text x="70" y="52" text-anchor="middle" font-size="9" fill="#6b7280">Mặt phẳng • Nét, màu sắc</text>
        <text x="70" y="66" text-anchor="middle" font-size="8" fill="#9333ea">Sơn mài, sơn dầu, lụa</text>

        <path d="M150,45 L175,45" stroke="#c026d3" stroke-width="2"/>

        <rect x="185" y="5" width="160" height="80" rx="10" fill="#fae8ff" stroke="#86198f" stroke-width="2.5"/>
        <text x="265" y="30" text-anchor="middle" font-size="12" font-weight="black" fill="#86198f">ĐIÊU KHẮC (3D)</text>
        <text x="265" y="48" text-anchor="middle" font-size="9" fill="#374151">Khối trong không gian ba chiều</text>
        <text x="265" y="64" text-anchor="middle" font-size="9" font-weight="bold" fill="#c026d3">Tượng tròn &amp; Phù điêu</text>

        <path d="M355,45 L380,45" stroke="#c026d3" stroke-width="2"/>

        <rect x="390" y="10" width="150" height="70" rx="8" fill="#fff" stroke="#c026d3" stroke-width="2"/>
        <text x="465" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">MĨ THUẬT ỨNG DỤNG</text>
        <text x="465" y="52" text-anchor="middle" font-size="9" fill="#6b7280">Gắn vẻ đẹp với công năng</text>
        <text x="465" y="66" text-anchor="middle" font-size="8" fill="#9333ea">Đồ hoạ, thời trang, đồ dùng</text>
      </g>
    `;
  }

  // Lesson 2: Xây dựng ý tưởng sáng tác theo chủ đề
  if (num === 2) {
    return `
      <g transform="translate(30, 18)">
        <rect x="0" y="10" width="90" height="55" rx="6" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="45" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">CHỦ ĐỀ</text>
        <text x="45" y="48" text-anchor="middle" font-size="8" fill="#6b7280">Đề tài định hướng</text>

        <path d="M95,37 L115,37" stroke="#db2777" stroke-width="2"/>

        <rect x="120" y="10" width="100" height="55" rx="6" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="170" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">Ý TƯỞNG</text>
        <text x="170" y="48" text-anchor="middle" font-size="8" fill="#6b7280">Tìm tư liệu &amp; hình</text>

        <path d="M225,37 L245,37" stroke="#db2777" stroke-width="2"/>

        <rect x="250" y="5" width="115" height="65" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="2.5"/>
        <text x="307" y="28" text-anchor="middle" font-size="10" font-weight="black" fill="#9d174d">PHÁC BỐ CỤC</text>
        <text x="307" y="44" text-anchor="middle" font-size="8" fill="#374151">Mảng chính - Mảng phụ</text>
        <text x="307" y="58" text-anchor="middle" font-size="8" fill="#be185d">Tương quan không gian</text>

        <path d="M370,37 L390,37" stroke="#db2777" stroke-width="2"/>

        <rect x="395" y="10" width="85" height="55" rx="6" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="437" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">TÔ MÀU</text>
        <text x="437" y="48" text-anchor="middle" font-size="8" fill="#6b7280">Hình chính &amp; nền</text>

        <path d="M485,37 L505,37" stroke="#db2777" stroke-width="2"/>

        <rect x="510" y="10" width="80" height="55" rx="6" fill="#db2777"/>
        <text x="550" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">HOÀN THIỆN</text>
        <text x="550" y="48" text-anchor="middle" font-size="8" fill="#fdf2f8">Đặt tên tranh</text>
      </g>
    `;
  }

  // Lesson 3: Tạo hình ngôi nhà (Bùi Xuân Phái & In độc bản)
  if (num === 3) {
    return `
      <g transform="translate(50, 15)">
        <polygon points="30,30 60,10 90,30 90,75 30,75" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
        <polygon points="85,35 115,15 145,35 145,75 85,75" fill="#f87171" stroke="#991b1b" stroke-width="2"/>
        <polygon points="140,25 170,5 200,25 200,75 140,75" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
        <text x="115" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Mái ngói rêu phong Bùi Xuân Phái</text>
        
        <path d="M215,45 L255,45" stroke="#ea580c" stroke-width="2.5"/>

        <rect x="270" y="8" width="250" height="72" rx="10" fill="#fff" stroke="#ea580c" stroke-width="2"/>
        <text x="395" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#ea580c">QUY TRÌNH IN ĐỘC BẢN (MONOPRINT)</text>
        <text x="395" y="48" text-anchor="middle" font-size="9" fill="#4b5563">1. Vẽ mica → 2. Tô màu → 3. Miết giấy → 4. Tách bản</text>
        <text x="395" y="65" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Hình trên giấy lật ngược đối xứng trái – phải</text>
      </g>
    `;
  }

  // Lesson 4: Thiết kế quà lưu niệm (Mô hình nhà bằng bìa)
  if (num === 4) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="10" width="160" height="70" rx="8" fill="#fff" stroke="#d97706" stroke-width="2"/>
        <text x="90" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">BẢN VẼ KHAI TRIỂN</text>
        <text x="90" y="50" text-anchor="middle" font-size="9" fill="#4b5563">Đáy • Vách tường • Ô cửa sổ</text>
        <text x="90" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#d97706">Chừa mép dán &amp; khía nếp gập</text>

        <path d="M180,45 L215,45" stroke="#d97706" stroke-width="2.5"/>

        <g transform="translate(230, 15)">
          <polygon points="50,5 20,30 80,30" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
          <rect x="25" y="30" width="50" height="40" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
          <rect x="42" y="45" width="16" height="25" fill="#b45309"/>
        </g>

        <rect x="330" y="10" width="190" height="70" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
        <text x="425" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">MÔ HÌNH NHÀ 3D</text>
        <text x="425" y="50" text-anchor="middle" font-size="9" fill="#4b5563">Gia cố khớp nối • Đế đứng vững</text>
        <text x="425" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Thẩm mĩ &amp; Công năng quà lưu niệm</text>
      </g>
    `;
  }

  // Lesson 5: Tạo hình hoạt động học đường (Giấy bồi đắp nổi)
  if (num === 5) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="10" width="160" height="70" rx="8" fill="#fff" stroke="#9333ea" stroke-width="2"/>
        <text x="90" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">TẠO HÌNH DÁNG NGƯỜI</text>
        <text x="90" y="50" text-anchor="middle" font-size="9" fill="#4b5563">Đường trục thân • Tay chân vận động</text>
        <text x="90" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#9333ea">Dáng ngồi, cúi, chạy, kéo co</text>

        <path d="M180,45 L215,45" stroke="#9333ea" stroke-width="2.5"/>

        <rect x="225" y="8" width="280" height="74" rx="10" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
        <text x="365" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">KĨ THUẬT ĐẮP NỔI BỘT GIẤY BỒI</text>
        <text x="365" y="48" text-anchor="middle" font-size="9" fill="#374151">Giấy ngâm nhuyễn → Trộn màu &amp; keo → Đắp mảng nổi 3D</text>
        <text x="365" y="65" text-anchor="middle" font-size="9" font-weight="bold" fill="#a855f7">Tạo chất cảm bề mặt nổi gồ ghề độc đáo</text>
      </g>
    `;
  }

  // Lesson 6: Thiết kế đồ chơi (Bi lắc bóng đá bằng hộp)
  if (num === 6) {
    return `
      <g transform="translate(50, 15)">
        <rect x="20" y="10" width="180" height="65" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <line x1="20" y1="42" x2="200" y2="42" stroke="#86efac" stroke-width="1.5"/>
        <circle cx="110" cy="42" r="14" fill="none" stroke="#86efac" stroke-width="1.5"/>
        <rect x="20" y="26" width="14" height="32" fill="none" stroke="#15803d" stroke-width="1.5"/>
        <rect x="186" y="26" width="14" height="32" fill="none" stroke="#15803d" stroke-width="1.5"/>
        <text x="110" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Sân bóng đá bằng hộp giấy carton</text>

        <path d="M215,42 L250,42" stroke="#16a34a" stroke-width="2.5"/>

        <rect x="260" y="8" width="250" height="70" rx="8" fill="#fff" stroke="#16a34a" stroke-width="2"/>
        <text x="385" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">CƠ CHẾ ĐIỀU KHIỂN BẰNG QUE</text>
        <text x="385" y="48" text-anchor="middle" font-size="9" fill="#4b5563">Que gỗ tròn xuyên qua thành hộp xoay cầu thủ</text>
        <text x="385" y="64" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">An toàn • Không sắc nhọn • Vận hành trơn tru</text>
      </g>
    `;
  }

  // Lesson 7: MĨ THUẬT THẾ GIỚI THỜI KÌ TIỀN SỬ
  if (num === 7) {
    return `
      <g transform="translate(50, 15)">
        <!-- Prehistoric Cave Painting & World Relics -->
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">BÍCH HOẠ HANG ĐỘNG THẾ GIỚI</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Bhimbetka (Ấn Độ) • Cueva de las Manos</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#ca8a04">Vẽ muông thú, săn bắn, dấu bàn tay (40 000 TCN)</text>

        <path d="M240,45 L270,45" stroke="#ca8a04" stroke-width="2.5"/>

        <!-- Venus of Willendorf & Mammoth statue -->
        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#ca8a04" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">TƯỢNG ĐÁ &amp; NGÀ VOI TIỀN SỬ</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Vệ Nữ Willendorf (Áo, 25 000 TCN) • Voi ma mút</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Khối tròn căng tràn biểu trưng phồn thực</text>
      </g>
    `;
  }

  // Lesson 8: MĨ THUẬT VIỆT NAM THỜI KÌ TIỀN SỬ
  if (num === 8) {
    return `
      <g transform="translate(50, 15)">
        <!-- Stone axe & Dong Noi horned face -->
        <g transform="translate(30, 10)">
          <circle cx="45" cy="30" r="22" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
          <!-- Horned face curve -->
          <path d="M33,22 Q45,8 57,22 M45,26 L45,38" stroke="#9a3412" stroke-width="2.5" fill="none"/>
          <text x="45" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Hang Đồng Nội</text>
          <text x="45" y="78" text-anchor="middle" font-size="8" fill="#9a3412">Mặt người có sừng</text>
        </g>

        <path d="M130,45 L165,45" stroke="#ea580c" stroke-width="2.5"/>

        <rect x="175" y="8" width="340" height="74" rx="10" fill="#fff7ed" stroke="#c2410c" stroke-width="2"/>
        <text x="345" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">VĂN HOÁ TIỀN SỬ VIỆT NAM (10 000 - 300 000 TCN)</text>
        <text x="345" y="46" text-anchor="middle" font-size="9" fill="#431407">• Tràng An (300 000 TCN): Rìu đá ghè đẽo thô sơ</text>
        <text x="345" y="60" text-anchor="middle" font-size="9" fill="#431407">• Hoà Bình (10 000 TCN): Khắc vách hang, chày &amp; bàn nghiền</text>
        <text x="345" y="74" text-anchor="middle" font-size="9" fill="#431407">• Bắc Sơn (8 000 TCN): Mài lưỡi rìu đá &amp; trang sức vỏ sò</text>
      </g>
    `;
  }

  // Lesson 9: Trò chơi dân gian (Nguyên lí cân bằng)
  if (num === 9) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fdf4ff" stroke="#a21caf" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#701a75">CÂN BẰNG ĐỐI XỨNG</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Hai bên trục có khối lượng thị giác bằng nhau</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#a21caf">Cảm giác trang nghiêm, tĩnh tại, chuẩn mực</text>

        <path d="M240,45 L270,45" stroke="#a21caf" stroke-width="2.5"/>

        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#a21caf" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#701a75">CÂN BẰNG BẤT ĐỐI XỨNG (BÙ TRỪ)</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Mảng lớn màu trầm ↔ Điểm nhấn nhỏ rực rỡ</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#a21caf">Bức "Bác Hồ với thiếu nhi" (Huy Oánh)</text>
      </g>
    `;
  }

  // Lesson 10: Thiết kế thiệp chúc mừng (Pop-Up)
  if (num === 10) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="200" height="74" rx="8" fill="#fff" stroke="#ec4899" stroke-width="2"/>
        <text x="110" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">CƠ CHẾ THIỆP NỔI POP-UP</text>
        <text x="110" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Rạch mộng nâng ở sống gập đôi</text>
        <text x="110" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#ec4899">Mở thiệp: hình nhân vật tự nhô đứng</text>

        <path d="M220,45 L250,45" stroke="#ec4899" stroke-width="2.5"/>

        <rect x="260" y="8" width="250" height="74" rx="8" fill="#fdf2f8" stroke="#be185d" stroke-width="2"/>
        <text x="385" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">NGUYÊN LÍ THIẾT KẾ ĐỒ HOẠ</text>
        <text x="385" y="46" text-anchor="middle" font-size="9" fill="#374151">• Tỉ lệ: Cân đối giữa diện tích hình và chữ</text>
        <text x="385" y="62" text-anchor="middle" font-size="9" font-weight="bold" fill="#be185d">• Không để trang trí che lấp lời chúc</text>
      </g>
    `;
  }

  // Lesson 11: HOÀ SẮC TRONG TRANH LỄ HỘI (Nguyễn Gia Trí)
  if (num === 11) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">NGHỆ THUẬT HOÀ SẮC (HARMONY)</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Gam màu chủ đạo chi phối toàn bộ tranh</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#e11d48">Gam nóng rực rỡ gợi không khí tưng bừng</text>

        <path d="M240,45 L270,45" stroke="#e11d48" stroke-width="2.5"/>

        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#e11d48" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">"LỄ HỘI ĐẦU NĂM" (NGUYỄN GIA TRÍ)</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Sơn mài: Quỳ vàng lấp lánh • Son đỏ tưng bừng</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#be123c">Then đen sâu thẳm &amp; Vỏ trứng trắng muốt</text>
      </g>
    `;
  }

  // Lesson 12: MÀU SẮC LỄ HỘI TRONG THIẾT KẾ LỊCH TREO TƯỜNG (Cờ ngũ sắc)
  if (num === 12) {
    return `
      <g transform="translate(50, 12)">
        <!-- 5 flags -->
        <g transform="translate(20, 5)">
          <polygon points="10,10 35,22 10,34" fill="#16a34a"/>
          <polygon points="40,10 65,22 40,34" fill="#dc2626"/>
          <polygon points="70,10 95,22 70,34" fill="#eab308"/>
          <polygon points="100,10 125,22 100,34" fill="#f8fafc" stroke="#94a3b8"/>
          <polygon points="130,10 155,22 130,34" fill="#2563eb"/>
          <text x="85" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">CỜ NGŨ SẮC: Mộc • Hoả • Thổ • Kim • Thuỷ</text>
        </g>

        <path d="M200,40 L230,40" stroke="#16a34a" stroke-width="2"/>

        <rect x="240" y="5" width="270" height="74" rx="8" fill="#fff" stroke="#16a34a" stroke-width="2"/>
        <text x="375" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">BỐ CỤC LỊCH TREO TƯỜNG</text>
        <text x="375" y="44" text-anchor="middle" font-size="9" fill="#4b5563">• 2/3 Diện tích: Tranh minh hoạ lễ hội sắc màu</text>
        <text x="375" y="58" text-anchor="middle" font-size="9" fill="#4b5563">• 1/3 Diện tích: Block số ngày tháng rõ ràng</text>
        <text x="375" y="70" text-anchor="middle" font-size="8" font-weight="bold" fill="#16a34a">Cân bằng giữa thẩm mĩ nghệ thuật &amp; công năng</text>
      </g>
    `;
  }

  // Lesson 13: Cuộc sống thường ngày (Mai Trung Thứ)
  if (num === 13) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">TRANH LỤA MAI TRUNG THỨ</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">"Viết bài" (1956) • "Niềm vui sống II" (1963)</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#e11d48">Nét mềm mại, gam màu trong trẻo, dịu ngọt</text>

        <path d="M240,45 L270,45" stroke="#f43f5e" stroke-width="2.5"/>

        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#f43f5e" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">MÔ HÌNH HỌC SINH ĐỌC SÁCH</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Khung ghế que kem gỗ • Hình bìa cắt tỉa</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#fb7185">Tôn vinh vẻ đẹp bình dị của đời sống</text>
      </g>
    `;
  }

  // Lesson 14: Thiết kế thời gian biểu (Biểu tượng Icons)
  if (num === 14) {
    return `
      <g transform="translate(40, 15)">
        <rect x="10" y="8" width="230" height="74" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <text x="125" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">BIỂU TƯỢNG TRỰC QUAN (ICONS)</text>
        <text x="125" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Giản lược, cách điệu cao độ từ vật thể thật</text>
        <text x="125" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#0284c7">Truyền tải thông điệp nhanh chóng, tức thì</text>

        <path d="M250,45 L280,45" stroke="#0284c7" stroke-width="2.5"/>

        <rect x="290" y="8" width="240" height="74" rx="8" fill="#fff" stroke="#0284c7" stroke-width="2"/>
        <text x="410" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">THỜI GIAN BIỂU CÁ NHÂN</text>
        <text x="410" y="46" text-anchor="middle" font-size="9" fill="#374151">🛌 Ngủ • ⏰ Dậy • 🏃 Thể thao • 📖 Học bài</text>
        <text x="410" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#0284c7">Sắp xếp khoa học quỹ thời gian 24 giờ</text>
      </g>
    `;
  }

  // Lesson 15: MĨ THUẬT THẾ GIỚI THỜI KÌ CỔ ĐẠI (Kim tự tháp Ai Cập & Hy Lạp)
  if (num === 15) {
    return `
      <g transform="translate(50, 15)">
        <!-- Pyramid -->
        <g transform="translate(30, 8)">
          <polygon points="50,10 10,65 90,65" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
          <polygon points="50,10 90,65 110,50" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
          <text x="60" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Kim tự tháp Ai Cập</text>
        </g>

        <path d="M165,45 L200,45" stroke="#ca8a04" stroke-width="2.5"/>

        <!-- Greek Parthenon & Classical Art -->
        <rect x="210" y="8" width="300" height="74" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <text x="360" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">VĂN MINH CỔ ĐẠI THẾ GIỚI</text>
        <text x="360" y="46" text-anchor="middle" font-size="9" fill="#4b5563">• Ai Cập bên sông Nin: Khối chóp kim tự tháp vĩ đại</text>
        <text x="360" y="60" text-anchor="middle" font-size="9" fill="#4b5563">• Hy Lạp - La Mã: Thức cột đền Athena Parthenon</text>
        <text x="360" y="74" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Chuẩn mực về tỉ lệ, hình khối cô đọng trang nghiêm</text>
      </g>
    `;
  }

  // Lesson 16: MĨ THUẬT VIỆT NAM THỜI KÌ CỔ ĐẠI (Trống đồng Đông Sơn & Áo dài)
  if (num === 16) {
    return `
      <g transform="translate(50, 15)">
        <!-- Dong Son Bronze Drum -->
        <g transform="translate(20, 5)">
          <ellipse cx="60" cy="18" rx="46" ry="12" fill="#6ee7b7" stroke="#065f46" stroke-width="2"/>
          <path d="M14,18 Q10,38 25,52 L25,62 Q10,72 10,72 L110,72 Q110,72 95,62 L95,52 Q110,38 106,18" fill="#a7f3d0" stroke="#065f46" stroke-width="2"/>
          <text x="60" y="22" text-anchor="middle" font-size="8" font-weight="black" fill="#064e3b">★ MẶT TRỜI 14 TIA</text>
          <text x="60" y="84" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">Trống đồng Đông Sơn</text>
        </g>

        <path d="M145,45 L180,45" stroke="#059669" stroke-width="2.5"/>

        <rect x="190" y="8" width="320" height="74" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="350" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">ĐỈNH CAO KIM KHÍ &amp; THỜI TRANG DI SẢN</text>
        <text x="350" y="46" text-anchor="middle" font-size="9" fill="#065f46">• Hoa văn chim Lạc bay ngược chiều kim đồng hồ</text>
        <text x="350" y="60" text-anchor="middle" font-size="9" fill="#065f46">• Sa Huỳnh (đèn gốm hình thú) &amp; Óc Eo (bình gốm cổ)</text>
        <text x="350" y="74" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">• 4 Bước trang trí hoa văn di sản lên tà áo dài</text>
      </g>
    `;
  }

  return '';
}
  const graphic = getDistinctLessonSVG(num);

  return `
  <div class="my-6 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-${p.fill.replace('#','')} dark:from-slate-800/80 dark:to-slate-900/80 border border-slate-200 dark:border-slate-700 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${p.stroke}"></span>
        <span class="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Sơ Đồ Tư Duy Nghệ Thuật</span>
      </div>
      <span class="text-xs px-2.5 py-0.5 rounded-full font-bold" style="background-color: ${p.fill}; color: ${p.text};">
        Bài ${num} • Mĩ Thuật 6
      </span>
    </div>
    <div class="w-full overflow-x-auto py-1">
      <svg class="mx-auto w-full max-w-2xl h-auto" viewBox="0 0 640 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${graphic}
      </svg>
    </div>
  </div>`;
}

// 30 Question Exam for Trạng Nguyên Mĩ Thuật 6
const trangNguyenMithuat = [
  {
    q: "Mĩ thuật tạo hình bao gồm các thể loại cơ bản nào sau đây?",
    options: [
      "Hội hoạ, Đồ hoạ tranh in và Điêu khắc",
      "Thiết kế đồ hoạ, thiết kế thời trang và thiết kế công nghiệp",
      "Âm nhạc, múa rối và kịch nói",
      "Văn học, nhiếp ảnh và điện ảnh"
    ],
    ans: 0,
    exp: "Mĩ thuật tạo hình gồm Hội hoạ (tranh vẽ phẳng), Đồ hoạ tranh in (in qua bản in) và Điêu khắc (tượng và phù điêu)."
  },
  {
    q: "Đặc điểm cơ bản để phân biệt Tượng tròn và Phù điêu là gì?",
    options: [
      "Tượng là khối ba chiều hoàn chỉnh quan sát được từ mọi phía; phù điêu là hình nổi/chìm luôn gắn trên mặt phẳng nền",
      "Tượng chỉ đắp bằng đất, phù điêu chỉ đục trên gỗ",
      "Tượng luôn có kích thước nhỏ hơn phù điêu",
      "Phù điêu có thể mang vác đi khắp nơi dễ hơn tượng"
    ],
    ans: 0,
    exp: "Tượng có thể quan sát từ nhiều phía trong không gian 3D; phù điêu gắn liền với mặt nền phẳng."
  },
  {
    q: "Bức tranh sơn mài 'Tát nước đồng chiêm' (1958) nổi tiếng là tác phẩm của danh họa nào?",
    options: ["Trần Văn Cẩn", "Nguyễn Tiến Chung", "Bùi Xuân Phái", "Nguyễn Phan Chánh"],
    ans: 0,
    exp: "Tác phẩm sơn mài kinh điển 'Tát nước đồng chiêm' do danh họa Trần Văn Cẩn sáng tác năm 1958."
  },
  {
    q: "Tranh khắc gỗ dân gian Đông Hồ (Bắc Ninh) có đặc điểm kĩ thuật in truyền thống nào?",
    options: [
      "Mỗi màu sắc và đường nét được khắc trên các bản gỗ riêng biệt rồi in lần lượt lên giấy điệp",
      "In một bản nét đen duy nhất rồi dùng cọ tỉa màu phẩm nhuộm",
      "Vẽ trực tiếp bằng sơn dầu lên ván gỗ",
      "Dùng máy in kĩ thuật số hiện đại nhân bản"
    ],
    ans: 0,
    exp: "Tranh Đông Hồ dùng các bản khắc gỗ riêng cho từng mảng màu và nét viền in chồng lên giấy điệp."
  },
  {
    q: "Tranh dân gian Hàng Trống (Hà Nội) có kĩ thuật thể hiện màu sắc đặc trưng nào?",
    options: [
      "In bản nét đen trước từ ván gỗ rồi dùng bút lông tỉa vờn màu phẩm nhuộm bằng tay",
      "Dùng khuôn in nhiều màu như tranh Đông Hồ",
      "Chỉ vẽ bằng mực nho đen trắng không có màu",
      "Đắp nổi bằng bột giấy bồi nhiều màu"
    ],
    ans: 0,
    exp: "Tranh Hàng Trống in bản nét đen trước rồi các nghệ nhân dùng bút tỉa vờn màu thủ công bằng tay."
  },
  {
    q: "Quy trình cốt lõi để sáng tác một tác phẩm mĩ thuật theo chủ đề gồm những bước nào?",
    options: [
      "Chủ đề/đề tài → Xây dựng ý tưởng & tìm hình ảnh → Phác bố cục chính phụ → Chọn màu → Hoàn thiện & đặt tên",
      "Chọn màu sắc → Mua khung tranh → Vẽ ngẫu nhiên → Đặt tên",
      "Sao chép y nguyên ảnh chụp trên mạng không cần chỉnh sửa",
      "Vẽ chi tiết trước rồi mới nghĩ đến chủ đề"
    ],
    ans: 0,
    exp: "Quy trình chuẩn: Đề tài → Ý tưởng & tìm hình ảnh → Phác thảo bố cục chính/phụ → Chọn màu → Hoàn thiện."
  },
  {
    q: "Danh họa Bùi Xuân Phái (1920–1988) gắn liền tên tuổi với đề tài nghệ thuật nào?",
    options: [
      "Phố cổ Hà Nội với mái ngói nhấp nhô rêu phong và gam màu trầm ấm",
      "Cảnh săn bắn thú rừng thời nguyên thủy",
      "Chân dung các nữ hoàng châu Âu cổ đại",
      "Biển đảo và hải quân chiến đấu"
    ],
    ans: 0,
    exp: "Bùi Xuân Phái nổi tiếng toàn thế giới với dòng tranh 'Phố Phái' tái hiện phố cổ Hà Nội đầy hoài niệm."
  },
  {
    q: "Khi thực hiện kĩ thuật in độc bản (Monoprint), hình in trên giấy sẽ có đặc điểm gì?",
    options: [
      "Bị lật ngược đối xứng trái – phải so với hình vẽ ban đầu trên tấm mica",
      "Giữ nguyên 100% chiều hướng trái phải",
      "Tự động chuyển thành hình đen trắng",
      "Không thể nhìn thấy hình nếu không chiếu đèn tử ngoại"
    ],
    ans: 0,
    exp: "Kĩ thuật in từ tấm phẳng mica ép sang giấy sẽ làm hình ảnh bị đảo ngược chiều trái – phải."
  },
  {
    q: "Nguyên lí 'Tương phản' trong mĩ thuật tạo hình có tác dụng gì?",
    options: [
      "Tạo điểm nhấn nổi bật, làm rõ đặc điểm và tăng sức hút thị giác cho tác phẩm",
      "Làm cho bức tranh trở nên mờ nhạt và khó nhìn",
      "Bắt buộc tất cả các đường nét phải giống hệt nhau",
      "Giúp bức tranh luôn có giá thành đắt hơn"
    ],
    ans: 0,
    exp: "Tương phản (sáng–tối, nóng–lạnh, thô–mịn...) tạo điểm nhấn và làm nổi bật ý đồ nghệ thuật."
  },
  {
    q: "Danh họa Vincent van Gogh (Hà Lan) thuộc trường phái hội họa nào?",
    options: ["Hậu Ấn tượng (Post-Impressionism)", "Cổ điển phục hưng", "Dã thú", "Siêu thực"],
    ans: 0,
    exp: "Vincent van Gogh là danh họa kiệt xuất người Hà Lan thuộc trường phái Hậu Ấn tượng."
  },
  {
    q: "Tác phẩm tranh lụa/màu nước 'Học tổ' (1959) do họa sĩ nào sáng tác?",
    options: ["Nguyễn Phan Chánh", "Tô Ngọc Vân", "Trần Văn Cẩn", "Nguyễn Gia Trí"],
    ans: 0,
    exp: "'Học tổ' là tác phẩm tranh lụa nổi tiếng của bậc thầy Nguyễn Phan Chánh với gam màu nâu trầm tinh tế."
  },
  {
    q: "Trong kĩ thuật đắp nổi bằng giấy bồi, chất liệu chính để nhào trộn tạo màu và độ dính là gì?",
    options: [
      "Giấy vệ sinh mềm ngâm nước nhuyễn trộn màu vẽ và keo dán",
      "Bột xi măng trộn cát thô",
      "Đất sét nung nhiệt độ cao",
      "Sáp nến đun chảy"
    ],
    ans: 0,
    exp: "Giấy bồi làm từ giấy sạch ngâm nhuyễn, vắt ráo rồi trộn đều màu vẽ và keo sữa để đắp nổi tạo khối 3D."
  },
  {
    q: "Trong môn Mĩ thuật 6, đồ chơi tự chế từ vật liệu tái chế thuộc lĩnh vực nào?",
    options: ["Mĩ thuật ứng dụng", "Hội hoạ giá vẽ", "Điêu khắc đá", "Nhiếp ảnh nghệ thuật"],
    ans: 0,
    exp: "Thiết kế đồ chơi kết hợp giữa tạo dáng thẩm mĩ và công năng giải trí, thuộc Mĩ thuật ứng dụng."
  },
  {
    q: "Thời kì tiền sử được định nghĩa là gì trong lịch sử và mĩ thuật?",
    options: [
      "Giai đoạn lịch sử loài người trước khi xuất hiện hệ thống chữ viết ghi chép",
      "Khoảng thời gian từ khi Trái Đất mới hình thành chưa có sự sống",
      "Thời kì các kim tự tháp Ai Cập đã xây dựng xong",
      "Thế kỉ XX sau các cuộc cách mạng công nghiệp"
    ],
    ans: 0,
    exp: "Tiền sử là giai đoạn lịch sử loài người trước khi có chữ viết ghi lại sự kiện."
  },
  {
    q: "Pho tượng đá nhỏ 'Vệ nữ Willendorf' thời tiền sử được tìm thấy tại quốc gia nào?",
    options: ["Áo (Austria)", "Pháp", "Tây Ban Nha", "Hy Lạp"],
    ans: 0,
    exp: "Tượng đá Vệ nữ Willendorf có niên đại khoảng 25 000 năm TCN được phát hiện tại Áo."
  },
  {
    q: "Hình khắc mặt người có sừng nổi tiếng thời tiền sử ở Việt Nam thuộc nền văn hoá nào?",
    options: ["Văn hoá Hoà Bình (hang Đồng Nội)", "Văn hoá Đông Sơn", "Văn hoá Sa Huỳnh", "Văn hoá Óc Eo"],
    ans: 0,
    exp: "Hình khắc mặt người có sừng độc đáo được phát hiện trên vách hang Đồng Nội, thuộc văn hoá Hoà Bình."
  },
  {
    q: "Rìu đá ghè đẽo thô sơ được giới thiệu trong SGK Mĩ thuật 6 thuộc nền văn hoá nào có niên đại sớm nhất?",
    options: ["Văn hoá Tràng An (khoảng 300 000 năm TCN)", "Văn hoá Bắc Sơn", "Văn hoá Đông Sơn", "Văn hoá Đồng Đậu"],
    ans: 0,
    exp: "Rìu đá Tràng An (Ninh Bình) được SGK giới thiệu mốc khái quát khoảng 300 000 năm TCN."
  },
  {
    q: "Nguyên lí 'Cân bằng' trong bố cục tác phẩm mĩ thuật có nghĩa là gì?",
    options: [
      "Sự sắp đặt các yếu tố tạo cảm giác hài hòa, vững chãi, không bị chông chênh lệch một phía",
      "Hai nửa bức tranh bắt buộc phải giống hệt nhau từng chi tiết nhỏ",
      "Bức tranh phải được cân trên bàn cân điện tử",
      "Dùng thước kẻ chia bức tranh thành các phần bằng nhau chằn chặn"
    ],
    ans: 0,
    exp: "Cân bằng là sự ổn định, hài hòa thị giác đạt được qua đối xứng hoặc bù trừ mảng màu, đậm nhạt."
  },
  {
    q: "Bức tranh khắc gỗ 'Bác Hồ với thiếu nhi' (1980) là tác phẩm của họa sĩ nào?",
    options: ["Huy Oánh", "Nguyễn Tiến Chung", "Trần Văn Cẩn", "Tạ Thúc Bình"],
    ans: 0,
    exp: "Bức tranh khắc gỗ nổi tiếng 'Bác Hồ với thiếu nhi' do họa sĩ Huy Oánh sáng tác năm 1980."
  },
  {
    q: "Kĩ thuật tạo mộng đẩy nổi để làm thiệp Pop-up yêu cầu học sinh làm gì?",
    options: [
      "Rạch hai đường song song ở nếp gập đôi rồi ấn đẩy mộng vào trong để gắn hình nổi",
      "Cắt rời đôi tờ giấy làm hai mảnh riêng biệt",
      "Dán keo kín toàn bộ mặt trong của thiệp",
      "Dùng máy dập ghim bấm chặt thiệp lại"
    ],
    ans: 0,
    exp: "Tạo hai rãnh song song ở nếp gấp tạo mộng đẩy nổi, khi mở thiệp hình ảnh nhân vật sẽ tự động nhô đứng lên."
  },
  {
    q: "Kiệt tác tranh sơn mài 'Lễ hội đầu năm' là tác phẩm của danh họa nào?",
    options: ["Nguyễn Gia Trí", "Bùi Xuân Phái", "Mai Trung Thứ", "Nguyễn Phan Chánh"],
    ans: 0,
    exp: "Nguyễn Gia Trí là bậc thầy tranh sơn mài Việt Nam với kiệt tác 'Lễ hội đầu năm'."
  },
  {
    q: "Theo quan niệm ngũ hành phương Đông, màu Đỏ trên cờ ngũ sắc lễ hội đại diện cho hành nào?",
    options: ["Hành Hoả", "Hành Kim", "Hành Mộc", "Hành Thuỷ"],
    ans: 0,
    exp: "Cờ ngũ sắc: Lục (Mộc), Đỏ (Hỏa), Vàng (Thổ), Trắng (Kim), Lam (Thủy)."
  },
  {
    q: "Yêu cầu cốt lõi khi thiết kế một cuốn lịch treo tường là gì?",
    options: [
      "Kết hợp hài hòa giữa tranh trang trí lễ hội đẹp mắt và phần bảng số tra cứu ngày tháng chuẩn xác, rõ ràng",
      "Chỉ cần tranh vẽ thật nhiều chi tiết, ngày tháng in bé tí hon cũng được",
      "Chỉ in chữ số to mà không cần bất kì hình ảnh trang trí nào",
      "Lịch phải dùng bìa thật dày nặng hàng chục kilôgam"
    ],
    ans: 0,
    exp: "Thiết kế lịch phải đảm bảo cả tính thẩm mĩ và công năng tra cứu thời gian thuận tiện."
  },
  {
    q: "Danh họa Mai Trung Thứ (1906–1980) nổi tiếng với các tác phẩm tranh lụa về đề tài gì?",
    options: [
      "Vẻ đẹp thanh nhã, trong trẻo của phụ nữ và trẻ em trong đời sống sinh hoạt gia đình",
      "Những trận đánh lớn thời Trung cổ phương Tây",
      "Các cỗ máy công nghiệp hiện đại",
      "Phong cảnh sa mạc khô cằn"
    ],
    ans: 0,
    exp: "Mai Trung Thứ chuyên về tranh lụa khắc họa phụ nữ và thiếu nhi Việt Nam trong sinh hoạt đời thường bình dị."
  },
  {
    q: "Biểu tượng trực quan (Icon) khác bức tranh kể chuyện ở đặc điểm cốt lõi nào?",
    options: [
      "Biểu tượng được chắt lọc, cách điệu cao độ nhằm truyền đạt thông tin tức thì, nhanh chóng",
      "Biểu tượng không bao giờ có màu sắc",
      "Biểu tượng chỉ dùng chữ viết mà không có hình vẽ",
      "Biểu tượng luôn luôn vẽ bằng sơn mài"
    ],
    ans: 0,
    exp: "Biểu tượng sử dụng ngôn ngữ khái quát, cách điệu để truyền tải ý nghĩa một cách nhanh chóng và dễ hiểu."
  },
  {
    q: "Bản khai triển hình học để dựng mô hình Kim tự tháp Ai Cập gồm có những hình gì?",
    options: [
      "1 đáy hình vuông liền với 4 mặt bên là các hình tam giác (chừa mép dán)",
      "4 hình vuông ghép lại thành một khối hộp",
      "6 hình chữ nhật bằng nhau",
      "1 hình tròn và 2 hình bán nguyệt"
    ],
    ans: 0,
    exp: "Mô hình kim tự tháp khai triển gồm 1 đáy vuông và 4 mặt bên hình tam giác chụm đỉnh lại với nhau."
  },
  {
    q: "Chiếc Trống đồng Đông Sơn thời cổ đại của Việt Nam có cấu trúc hình dáng gồm những phần nào?",
    options: [
      "Mặt trống phẳng, tang trống phình, thân hình trụ và chân choãi nhẹ",
      "Khối cầu tròn đều hoàn toàn",
      "Khối hình chóp nón vuốt nhọn lên đỉnh",
      "Khối hình lục giác có tay cầm dài"
    ],
    ans: 0,
    exp: "Trống đồng Đông Sơn kết hợp hài hòa giữa mặt phẳng, tang phình, thân trụ và chân choãi."
  },
  {
    q: "Dải hoa văn hình chim Lạc trên mặt trống đồng Đông Sơn thường có hướng chuyển động như thế nào?",
    options: [
      "Bay ngược chiều kim đồng hồ quanh ngôi sao Mặt Trời ở trung tâm",
      "Bay cùng chiều kim đồng hồ",
      "Bay thẳng từ tâm trống hướng ra ngoài rìa",
      "Mỗi con bay theo một hướng hỗn loạn"
    ],
    ans: 0,
    exp: "Các dải hoa văn chim Lạc xoay quanh tâm Mặt Trời ngược chiều kim đồng hồ."
  },
  {
    q: "Thiết kế thời trang bao gồm 3 phân nhánh chính nào theo sách giáo khoa?",
    options: [
      "Thiết kế trang phục, thiết kế phụ kiện và thiết kế trang sức",
      "Thiết kế xe máy, thiết kế ô tô và thiết kế máy bay",
      "Thiết kế nhà cửa, thiết kế cầu đường và thiết kế công viên",
      "Thiết kế logo, thiết kế website và thiết kế poster"
    ],
    ans: 0,
    exp: "Thời trang gồm 3 nhánh: Trang phục (quần áo, áo dài), Phụ kiện (túi xách, giày) và Trang sức (vòng, nhẫn)."
  },
  {
    q: "Quy tắc an toàn nào sau đây là quan trọng nhất khi sử dụng dao kéo và keo dán trong giờ thực hành Mĩ thuật?",
    options: [
      "Đưa phần cán cho người nhận khi chuyển kéo; cắt trên tấm lót; không hướng mũi nhọn vào người; rửa tay sạch sẽ sau khi dùng keo",
      "Dùng dao kéo đùa nghịch chỉ vào bạn bè",
      "Nếm thử vị của các loại keo dán và màu vẽ",
      "Đốt nến để sấy khô giấy bồi trong phòng học kín"
    ],
    ans: 0,
    exp: "Luôn tuân thủ an toàn: đưa cán kéo cho người nhận, cắt trên tấm lót, không hướng mũi nhọn vào người và giữ vệ sinh."
  }
];

// Write generator code that writes to courses/mithuat_6.html and courses/art_6.html
const template = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mĩ Thuật Lớp 6 | CodeHub - Nền Tảng Học Tập Trực Tuyến</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#fdf4ff',
              100: '#fae8ff',
              200: '#f5d0fe',
              300: '#f0abfc',
              400: '#e879f9',
              500: '#d946ef',
              600: '#c026d3',
              700: '#a21caf',
              800: '#86198f',
              900: '#701a75'
            },
            art: {
              rose: '#e11d48',
              amber: '#f59e0b',
              emerald: '#10b981',
              blue: '#2563eb',
              purple: '#9333ea'
            }
          }
        }
      }
    };
  </script>
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Canvas Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <!-- Dark Mode Init -->
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
  
  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    
    .tab-active {
      border-bottom: 3px solid #c026d3;
      color: #a21caf;
      font-weight: 700;
    }
    .dark .tab-active {
      border-bottom: 3px solid #e879f9;
      color: #f0abfc;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
      
      <!-- Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-palette text-lg"></i>
          </div>
          <span class="font-bold text-xl tracking-tight hidden sm:inline bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <div class="flex items-center gap-1.5 bg-purple-50 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold border border-purple-200 dark:border-purple-800/60">
          <i class="fa-solid fa-paintbrush text-purple-600"></i>
          <span>Mĩ Thuật 6</span>
        </div>
      </div>

      <!-- Quick Search Bar -->
      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          <input type="text" id="globalSearch" placeholder="Tìm bài học, Bùi Xuân Phái, in độc bản, Đông Sơn, áo dài..." 
                 class="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50">
        </div>
      </div>

      <!-- Header Tools & Modals -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <button onclick="openModal('modalColorWheel')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Bánh Xe Màu & Phối Màu">
          <i class="fa-solid fa-circle-notch text-pink-500"></i>
          <span class="hidden lg:inline">Bánh Xe Màu</span>
        </button>

        <button onclick="openModal('modalFashion')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Thiết Kế Áo Dài Di Sản">
          <i class="fa-solid fa-vest text-amber-500"></i>
          <span class="hidden lg:inline">Áo Dài Di Sản</span>
        </button>

        <button onclick="openModal('modalGallery')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="14 Tác Phẩm & Quy Trình SGK">
          <i class="fa-solid fa-images text-purple-500"></i>
          <span class="hidden lg:inline">14 Tác Phẩm</span>
        </button>

        <button onclick="openModal('modalSafety')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Quy Tắc An Toàn Thực Hành">
          <i class="fa-solid fa-shield-halved text-emerald-500"></i>
          <span class="hidden lg:inline">An Toàn</span>
        </button>

        <!-- Trạng Nguyên Exam CTA -->
        <button onclick="openModal('modalExam')" class="px-3 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white shadow-sm transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-gradient-to-b from-purple-100/60 via-slate-50 to-white dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-600 text-white">Chương Trình Chuẩn 2018</span>
            <span class="text-xs text-slate-500 dark:text-slate-400">Bộ Sách: Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Mĩ Thuật Lớp 6
          </h1>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Tài liệu học tập toàn diện 8 chủ đề, 16 bài học, 12 thuật ngữ nguyên tắc cốt lõi, cẩm nang an toàn và 14 hình tác phẩm quy trình thực hành SGK.
          </p>
        </div>

        <!-- Quick Summary Stats -->
        <div class="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1">
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-purple-600 dark:text-purple-400">8 Chủ Đề</div>
            <div class="text-[11px] text-slate-500">Chương Trình</div>
          </div>
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-pink-600 dark:text-pink-400">16 Bài</div>
            <div class="text-[11px] text-slate-500">Lí Thuyết & Thực Hành</div>
          </div>
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-amber-600 dark:text-amber-400">12 Thuật Ngữ</div>
            <div class="text-[11px] text-slate-500">Nguyên Tắc Cốt Lõi</div>
          </div>
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-emerald-600 dark:text-emerald-400">14 Tác Phẩm</div>
            <div class="text-[11px] text-slate-500">Quy Trình Mẫu</div>
          </div>
        </div>
      </div>

      <!-- Quick Navigation Tabs -->
      <div class="flex items-center gap-2 mt-6 border-b border-slate-200 dark:border-slate-800 text-sm overflow-x-auto">
        <button onclick="switchView('tab-all')" id="btn-tab-all" class="px-4 py-2.5 font-bold transition whitespace-nowrap tab-active">
          <i class="fa-solid fa-list-check mr-1.5"></i>Tất Cả 16 Bài Học
        </button>
        <button onclick="switchView('tab-terms')" id="btn-tab-terms" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-purple-600 transition whitespace-nowrap">
          <i class="fa-solid fa-book-bookmark mr-1.5 text-purple-500"></i>12 Thuật Ngữ & Nguyên Tắc
        </button>
        <button onclick="switchView('tab-eval')" id="btn-tab-eval" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-pink-600 transition whitespace-nowrap">
          <i class="fa-solid fa-glasses mr-1.5 text-pink-500"></i>Đọc Tác Phẩm & Tự Đánh Giá
        </button>
        <button onclick="switchView('tab-safety')" id="btn-tab-safety" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition whitespace-nowrap">
          <i class="fa-solid fa-shield-halved mr-1.5 text-emerald-500"></i>An Toàn Khi Thực Hành
        </button>
      </div>

    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Sidebar: Topic / Lesson Navigator (lg:col-span-4) -->
      <aside class="lg:col-span-4">
        <div class="sticky top-24 space-y-6">
          
          <!-- Mobile search -->
          <div class="relative block md:hidden">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input type="text" id="mobileSearch" placeholder="Tìm kiếm nhanh bài học..." 
                   class="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>

          <!-- Topics & Lessons Index Panel -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-4 shadow-sm">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
              <h3 class="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <i class="fa-solid fa-bars-staggered text-purple-500"></i>
                <span>Mục Lục 16 Bài Học</span>
              </h3>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300" id="lessonCountBadge">16 Bài</span>
            </div>

            <!-- Scrollable List -->
            <div class="mt-3 max-h-[65vh] overflow-y-auto space-y-4 pr-1 text-sm" id="sidebarList">
              ${data.topics.map(topic => `
                <div class="sidebar-topic-block">
                  <div class="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1.5 rounded-lg mb-2 flex items-center justify-between">
                    <span class="truncate">${esc(topic.title)}</span>
                    <span class="text-[10px] text-slate-400 font-normal ml-1">${esc(topic.sgk)}</span>
                  </div>
                  <div class="space-y-1 pl-1">
                    ${topic.lessons.map(l => `
                      <a href="#${l.id}" class="sidebar-item flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-purple-700 dark:hover:text-purple-300 transition group text-xs">
                        <span class="truncate">${esc(l.title)}</span>
                        <span class="ml-1 text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-500 px-1.5 py-0.2 rounded font-semibold">B${l.num}</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Progress Widget -->
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-2xl border border-purple-200/50 dark:border-purple-800/40">
            <div class="flex items-center justify-between text-xs font-bold mb-2">
              <span class="text-slate-700 dark:text-slate-300">Tiến Độ Tự Học Mĩ Thuật</span>
              <span class="text-purple-600 dark:text-purple-400" id="progressPercent">0%</span>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300" id="progressBar" style="width: 0%"></div>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Làm trắc nghiệm dưới mỗi bài để củng cố kiến thức và mở khóa danh hiệu Họa Sĩ Nhí!
            </p>
          </div>

        </div>
      </aside>

      <!-- Right Main Content Area (lg:col-span-8) -->
      <section class="lg:col-span-8 space-y-10" id="contentArea">
        
        <!-- View 1: 12 Terms & Core Principles -->
        <div id="viewTerms" class="hidden bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <div class="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <span class="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Cẩm Nang Thuật Ngữ</span>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
              <i class="fa-solid fa-book-bookmark text-purple-500"></i>
              Thuật Ngữ và Nguyên Tắc Tạo Hình Cần Nhớ (12 Khái Niệm)
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Hệ thống thuật ngữ chuẩn xác từ trang 68 SGK Mĩ thuật 6 Kết nối tri thức.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${data.terms.map((t, idx) => `
              <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-400 transition">
                <div class="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300 text-sm mb-1.5">
                  <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-black">${idx + 1}</span>
                  ${esc(t.term)}
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                  ${esc(t.desc)}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- View 2: Framework for Art Appreciation & Self-Evaluation -->
        <div id="viewEval" class="hidden bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm space-y-6">
          <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
            <span class="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">Kĩ Năng Cảm Thụ & Nhận Xét</span>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
              <i class="fa-solid fa-glasses text-pink-500"></i>
              Khung Đọc Tác Phẩm và Tiêu Chí Tự Đánh Giá
            </h2>
          </div>

          <!-- 5 Steps to Appreciate Artwork -->
          <div class="p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800/60">
            <h3 class="font-bold text-sm text-pink-900 dark:text-pink-200 mb-3 flex items-center gap-2">
              <i class="fa-solid fa-compass"></i> 5 Bước Đọc & Cảm Thụ Tác Phẩm Nghệ Thuật
            </h3>
            <ol class="space-y-2 text-xs text-slate-700 dark:text-slate-300 list-decimal list-inside leading-relaxed">
              <li><strong>Nhận diện thông tin cơ bản:</strong> Tên tác phẩm, tác giả, năm sáng tác, thể loại mĩ thuật, chất liệu sử dụng.</li>
              <li><strong>Mô tả nội dung hình ảnh:</strong> Hoạt động của nhân vật, không gian, cảnh vật, khoảnh khắc được khắc họa.</li>
              <li><strong>Chỉ ra ngôn ngữ tạo hình:</strong> Phân tích hình – nét – màu – khối, bố cục, nguyên lí tương phản, cân bằng hoặc nhịp điệu bằng các chi tiết cụ thể.</li>
              <li><strong>Giải thích cảm xúc và ý nghĩa:</strong> Cảm xúc tác phẩm gợi cho người xem; phân biệt rõ điều nhìn thấy thực tế với suy đoán chủ quan.</li>
              <li><strong>Vận dụng sáng tạo:</strong> Nêu điều tâm đắc học hỏi được từ tác phẩm để áp dụng vào sản phẩm thực hành của bản thân.</li>
            </ol>
          </div>

          <!-- 8 Criteria for Self-Evaluation -->
          <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/60">
            <h3 class="font-bold text-sm text-purple-900 dark:text-purple-200 mb-3 flex items-center gap-2">
              <i class="fa-solid fa-check-double"></i> 8 Tiêu Chí Tự Đánh Giá Sản Phẩm Thực Hành
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>1. Đúng chủ đề:</strong> Thể hiện rõ nội dung bài học.</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>2. Ý tưởng sáng tạo:</strong> Có phong cách riêng, không sao chép.</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>3. Bố cục hợp lí:</strong> Rõ mảng chính, mảng phụ, khoảng trống.</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>4. Màu sắc hài hòa:</strong> Có hoà sắc, gam màu chủ đạo, điểm nhấn.</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>5. Kĩ thuật chắc chắn:</strong> Khớp nối dán keo bền, đứng vững (với 3D).</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>6. Công năng sử dụng:</strong> Đúng mục đích (thiệp dễ mở, lịch rõ số).</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>7. An toàn & Vệ sinh:</strong> Sử dụng dụng cụ cẩn trọng, bàn sạch.</div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">✓ <strong>8. Tôn trọng khác biệt:</strong> Lắng nghe và góp ý chân thành cho bạn bè.</div>
            </div>
          </div>
        </div>

        <!-- View 3: Safety Guidelines -->
        <div id="viewSafety" class="hidden bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <div class="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Cẩm Nang Phòng Thực Hành</span>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
              <i class="fa-solid fa-shield-halved text-emerald-500"></i>
              An Toàn và Bảo Quản Khi Thực Hành Mĩ Thuật
            </h2>
          </div>

          <div class="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <h4 class="font-bold text-slate-900 dark:text-white mb-1 text-sm flex items-center gap-2">
                <i class="fa-solid fa-scissors text-amber-500"></i> Sử dụng kéo, dao và dụng cụ sắc nhọn
              </h4>
              <p>Chọn vật liệu sạch, khô, không sắc nhọn; tránh mảnh kính, kim loại gỉ. Luôn dùng kéo đúng cách, khi đưa cho người khác phải hướng phần chuôi kéo về phía người nhận. Cắt trên tấm lót phẳng. Dao rọc giấy và súng bắn keo nóng phải có sự giám sát của giáo viên hoặc người lớn; tuyệt đối không hướng mũi kéo, dao vào cơ thể hay bạn bên cạnh.</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <h4 class="font-bold text-slate-900 dark:text-white mb-1 text-sm flex items-center gap-2">
                <i class="fa-solid fa-flask text-blue-500"></i> Màu vẽ, chất kết dính và giữ vệ sinh
              </h4>
              <p>Dùng màu vẽ, keo dán phù hợp lứa tuổi theo nhãn hướng dẫn. Tuyệt đối không nếm, đưa màu vào mắt, miệng hoặc vẽ tùy tiện lên da. Sau khi hoàn thành bài thực hành: đóng chặt nắp hộp màu, rửa cọ, vệ sinh mặt bàn và thu gom phế liệu vào thùng rác. Không tự ý đốt vật liệu hay dùng thiết bị điện công suất lớn để sấy sản phẩm.</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <h4 class="font-bold text-slate-900 dark:text-white mb-1 text-sm flex items-center gap-2">
                <i class="fa-solid fa-box-archive text-purple-500"></i> Bảo quản sản phẩm và ứng xử nơi di tích
              </h4>
              <p>Sản phẩm đắp nổi bột giấy bồi cần để khô tự nhiên hoàn toàn trước khi trang trí và cất giữ, tránh ẩm mốc. Mô hình đồ chơi phải có kết cấu đứng vững, không chứa chi tiết rời sắc nhọn gây nguy hiểm khi chơi. Khi tham quan bảo tàng di tích: không chạm tay, không tô vẽ hay khắc bậy lên hiện vật; tuân thủ nghiêm ngặt quy định nơi trưng bày.</p>
            </div>
          </div>
        </div>

        <!-- View 4: ALL 16 LESSONS LIST -->
        <div id="viewLessons" class="space-y-12">
          ${data.topics.map(topic => `
            <!-- Topic Header -->
            <div class="border-b-2 border-purple-200 dark:border-purple-800 pb-2 pt-4">
              <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                ${esc(topic.sgk)}
              </span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                ${esc(topic.title)}
              </h2>
            </div>

            <!-- Lessons in Topic -->
            ${topic.lessons.map(lesson => {
              const questions = getLessonQuestions(lesson.num);
              return `
              <article id="${lesson.id}" class="lesson-card bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm p-6 sm:p-8 transition-all hover:shadow-md border-l-4 border-l-purple-500">
                
                <!-- Lesson Header -->
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/80 pb-4 mb-4">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        <i class="fa-solid fa-palette mr-1"></i>
                        ${esc(topic.title.split('. ')[0])}
                      </span>
                      <span class="text-slate-300 dark:text-slate-700">•</span>
                      <span class="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        ${esc(lesson.sgk)}
                      </span>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      ${esc(lesson.title)}
                    </h3>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">
                      Bài ${lesson.num} / 16
                    </span>
                  </div>
                </div>

                <!-- SVG Concept Diagram -->
                ${generateLessonArtSVG(lesson)}

                <!-- Content Sections -->
                <div class="space-y-4 my-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  ${lesson.sections.map((sec, secIdx) => `
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                      <h4 class="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                        <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                        ${esc(sec.heading)}
                      </h4>
                      <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        ${esc(sec.content)}
                      </p>
                      ${getSectionIllustration(lesson.num, secIdx, sec.heading)}
                    </div>
                  `).join('')}
                </div>

                <!-- Self-Check Quick Quiz -->
                <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <i class="fa-solid fa-circle-question text-purple-500"></i>
                      <span>Tự Kiểm Tra Nhanh Sau Bài Học</span>
                    </h4>
                    <span class="text-xs text-slate-500 dark:text-slate-400">2 câu củng cố</span>
                  </div>

                  <div class="space-y-4">
                    ${questions.map((qObj, qIdx) => `
                      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700" id="q_box_${lesson.id}_${qIdx}">
                        <p class="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 mb-3">
                          <span class="font-bold text-purple-600 dark:text-purple-400">Câu ${qIdx + 1}:</span> ${esc(qObj.q)}
                        </p>
                        <div class="grid grid-cols-1 gap-2">
                          ${qObj.options.map((opt, oIdx) => `
                            <button onclick="checkQuickAnswer('${lesson.id}', ${qIdx}, ${oIdx}, ${qObj.ans})" 
                                    id="btn_opt_${lesson.id}_${qIdx}_${oIdx}"
                                    class="text-left px-3.5 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-between">
                              <span><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${esc(opt)}</span>
                              <i class="fa-regular fa-circle text-slate-300 dark:text-slate-600"></i>
                            </button>
                          `).join('')}
                        </div>
                        <div id="exp_${lesson.id}_${qIdx}" class="hidden mt-3 p-2.5 rounded-lg text-xs leading-relaxed"></div>
                      </div>
                    `).join('')}
                  </div>
                </div>

              </article>
              `;
            }).join('')}
          `).join('')}
        </div>

      </section>

    </div>
  </main>

  <!-- MODAL 1: Color Wheel & Harmony Generator Studio -->
  <div id="modalColorWheel" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-palette text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Studio Bánh Xe Màu & Phối Màu Nghệ Thuật</h3>
            <p class="text-xs text-pink-100">Kĩ năng hoà sắc, màu bổ túc và cờ ngũ sắc dân gian</p>
          </div>
        </div>
        <button onclick="closeModal('modalColorWheel')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 text-sm">
        <!-- Interactive Color Palette Selector -->
        <div>
          <label class="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-2 uppercase tracking-wider">
            Chọn 1 màu chủ đạo để xem các cặp màu hoà sắc:
          </label>
          <div class="grid grid-cols-6 sm:grid-cols-12 gap-2" id="colorPickerGrid">
            <!-- Populated by JS -->
          </div>
        </div>

        <!-- Harmony Results Display -->
        <div id="harmonyDisplay" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3">
          <!-- Populated by JS -->
        </div>

        <!-- Five Elements Traditional Color Palette -->
        <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <h4 class="font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-flag"></i> Bảng Màu Cờ Ngũ Sắc Dân Gian (Bài 12)
          </h4>
          <div class="grid grid-cols-5 gap-2 text-center text-xs font-bold text-white">
            <div class="bg-emerald-600 p-2.5 rounded-xl shadow-sm">Lục (Mộc)</div>
            <div class="bg-red-600 p-2.5 rounded-xl shadow-sm">Đỏ (Hoả)</div>
            <div class="bg-amber-500 p-2.5 rounded-xl shadow-sm">Vàng (Thổ)</div>
            <div class="bg-slate-200 text-slate-800 border border-slate-300 p-2.5 rounded-xl shadow-sm">Trắng (Kim)</div>
            <div class="bg-blue-600 p-2.5 rounded-xl shadow-sm">Lam (Thuỷ)</div>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
            Phối màu ngũ sắc biểu trưng cho sự hòa hợp âm dương đất trời, mang lại phúc lộc và không khí tưng bừng cho lễ hội truyền thống Việt Nam.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 2: Heritage Fashion Studio (Ao Dai Dong Son Designer) -->
  <div id="modalFashion" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-vest text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Thiết Kế Áo Dài Hoa Văn Di Sản (Bài 16)</h3>
            <p class="text-xs text-amber-100">Kế thừa hoa văn trống đồng Đông Sơn vào thời trang hiện đại</p>
          </div>
        </div>
        <button onclick="closeModal('modalFashion')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 text-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <!-- Visual Ao Dai SVG Preview -->
          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center min-h-[320px]">
            <svg id="aodaiSvg" viewBox="0 0 200 320" class="w-48 h-auto">
              <!-- Collar -->
              <path d="M85,35 Q100,45 115,35 L110,25 Q100,32 90,25 Z" fill="#fcd34d" id="ad_collar"/>
              <!-- Shoulders & Arms -->
              <path d="M85,35 L50,80 L62,88 L85,60 L85,110 L115,110 L115,60 L138,88 L150,80 L115,35 Z" fill="#e11d48" id="ad_upper"/>
              <!-- Front Flap (Tà trước) -->
              <path d="M85,110 L75,290 L125,290 L115,110 Z" fill="#e11d48" id="ad_flap"/>
              <!-- Slit lines -->
              <line x1="85" y1="110" x2="85" y2="150" stroke="#fff" stroke-width="1" opacity="0.6"/>
              <line x1="115" y1="110" x2="115" y2="150" stroke="#fff" stroke-width="1" opacity="0.6"/>
              <!-- Trousers (Quần lụa) -->
              <rect x="78" y="270" width="20" height="45" fill="#f8fafc" id="ad_pants_l"/>
              <rect x="102" y="270" width="20" height="45" fill="#f8fafc" id="ad_pants_r"/>
              <!-- Selected Heritage Motif on Chest -->
              <g id="ad_motif_chest" transform="translate(100, 85)">
                <!-- Sun symbol -->
                <circle cx="0" cy="0" r="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
                <polygon points="0,-12 3,-4 11,-4 5,1 7,9 0,4 -7,9 -5,1 -11,-4 -3,-4" fill="#fbbf24"/>
              </g>
              <!-- Selected Motif on Hem (Gấu áo) -->
              <g id="ad_motif_hem" transform="translate(100, 265)">
                <path d="M-20,-5 Q0,-12 20,-5 L20,0 Q0,-7 -20,0 Z" fill="#fbbf24"/>
                <text x="0" y="8" font-size="7" fill="#fbbf24" font-weight="bold" text-anchor="middle">CHIM LẠC ĐÔNG SƠN</text>
              </g>
            </svg>
            <span class="text-xs text-slate-400 mt-2 font-mono">Bản phác thảo thiết kế thời trang</span>
          </div>

          <!-- Controls -->
          <div class="space-y-4">
            <div>
              <label class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">1. Chọn màu tà áo dài:</label>
              <div class="flex items-center gap-2">
                <button onclick="setAodaiColor('#e11d48')" class="w-8 h-8 rounded-full bg-rose-600 border-2 border-white shadow hover:scale-110 transition"></button>
                <button onclick="setAodaiColor('#c026d3')" class="w-8 h-8 rounded-full bg-purple-600 border-2 border-white shadow hover:scale-110 transition"></button>
                <button onclick="setAodaiColor('#059669')" class="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white shadow hover:scale-110 transition"></button>
                <button onclick="setAodaiColor('#2563eb')" class="w-8 h-8 rounded-full bg-blue-600 border-2 border-white shadow hover:scale-110 transition"></button>
                <button onclick="setAodaiColor('#d97706')" class="w-8 h-8 rounded-full bg-amber-600 border-2 border-white shadow hover:scale-110 transition"></button>
                <button onclick="setAodaiColor('#1e293b')" class="w-8 h-8 rounded-full bg-slate-800 border-2 border-white shadow hover:scale-110 transition"></button>
              </div>
            </div>

            <div>
              <label class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">2. Chọn hoa văn di sản Đông Sơn:</label>
              <div class="space-y-2">
                <button onclick="setAodaiMotif('sun')" class="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700 transition flex items-center justify-between text-xs">
                  <span>★ Ngôi sao Mặt Trời 14 tia</span>
                  <i class="fa-solid fa-sun text-amber-500"></i>
                </button>
                <button onclick="setAodaiMotif('bird')" class="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700 transition flex items-center justify-between text-xs">
                  <span>🕊️ Chim Lạc sải cánh bay</span>
                  <i class="fa-solid fa-dove text-amber-500"></i>
                </button>
                <button onclick="setAodaiMotif('rice')" class="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700 transition flex items-center justify-between text-xs">
                  <span>🌾 Hoa văn người giã gạo & lễ hội</span>
                  <i class="fa-solid fa-people-group text-amber-500"></i>
                </button>
              </div>
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
              <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i>
              <strong>Ghi chú thiết kế:</strong> Vị trí hoa văn cần tạo điểm nhấn duyên dáng ở cổ áo, ngực áo hoặc gấu tà; tránh phủ kín làm rối mắt.
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 3: 14 Figures & Artworks Gallery -->
  <div id="modalGallery" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-images text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Thư Viện 14 Tác Phẩm & Quy Trình Mẫu SGK</h3>
            <p class="text-xs text-purple-100">Trích từ sách giáo khoa Mĩ thuật 6 Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="closeModal('modalGallery')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${data.figures.map(f => `
          <div class="bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 hover:border-purple-400 transition flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-[11px] font-bold text-purple-600 dark:text-purple-400 mb-1">
                <span>HÌNH ${f.num}</span>
                <span class="text-slate-400 font-normal">${esc(f.lesson)}</span>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-2">${esc(f.title)}</h4>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${esc(f.desc)}</p>
            </div>
            <div class="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-purple-600 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-circle-check"></i> Chuẩn mực thực hành SGK
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- MODAL 4: Safety & Workshop Regulations -->
  <div id="modalSafety" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-shield-halved text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Nội Quy An Toàn & Vệ Sinh Thực Hành</h3>
            <p class="text-xs text-emerald-100">Bảo vệ sức khỏe và môi trường học tập xanh</p>
          </div>
        </div>
        <button onclick="closeModal('modalSafety')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
          <strong>1. Nguyên tắc sử dụng dao kéo:</strong> Đưa cán kéo cho bạn; cắt vật liệu trên mặt bảng lót; không chạy nhảy khi cầm dao kéo trên tay.
        </div>
        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
          <strong>2. Nguyên tắc keo dán và màu vẽ:</strong> Đậy kín nắp sau khi sử dụng; rửa sạch cọ vẽ; không để màu dính vào mắt hay nuốt phải.
        </div>
        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
          <strong>3. Vệ sinh sau tiết học:</strong> Thu gom giấy vụn, lau sạch mặt bàn, trả dụng cụ về đúng vị trí quy định của phòng Mĩ thuật.
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 5: Trạng Nguyên Mĩ Thuật 6 Exam Arena (60:00) -->
  <div id="modalExam" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="font-black text-lg sm:text-xl tracking-tight">Đấu Trường Trạng Nguyên Mĩ Thuật 6</h3>
            <p class="text-xs text-purple-100">30 câu hỏi trắc nghiệm toàn diện 8 chủ đề SGK • Thời gian 60:00</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-black/30 px-3.5 py-1.5 rounded-xl flex items-center gap-2 font-mono text-sm font-bold">
            <i class="fa-solid fa-stopwatch text-amber-300"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeModal('modalExam')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6" id="examQuestionsContainer">
        <!-- Question Palette Navigator -->
        <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
            <span>BẢNG ĐIỀU HƯỚNG CÂU HỎI (30 CÂU)</span>
            <span id="answeredCountBadge">0 / 30 Đã làm</span>
          </div>
          <div class="grid grid-cols-10 sm:grid-cols-15 gap-1.5" id="questionPalette">
            <!-- Rendered by JS -->
          </div>
        </div>

        <!-- Questions List -->
        <div class="space-y-6" id="examQuestionsList">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div class="text-xs text-slate-500">
          Chấm điểm tự động và hiển thị giải thích chi tiết khi nộp bài.
        </div>
        <div class="flex items-center gap-2">
          <button onclick="resetExam()" class="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
            Làm lại
          </button>
          <button onclick="submitExam()" id="btnSubmitExam" class="px-5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white shadow-md transition">
            Nộp Bài & Xem Điểm
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- JavaScript Application Logic -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
    }

    // Modal Helpers
    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    // Switch view tabs
    function switchView(tabId) {
      ['btn-tab-all', 'btn-tab-terms', 'btn-tab-eval', 'btn-tab-safety'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.remove('tab-active');
      });

      document.getElementById('viewTerms').classList.add('hidden');
      document.getElementById('viewEval').classList.add('hidden');
      document.getElementById('viewSafety').classList.add('hidden');
      document.getElementById('viewLessons').classList.remove('hidden');

      if (tabId === 'tab-all') {
        document.getElementById('btn-tab-all').classList.add('tab-active');
      } else if (tabId === 'tab-terms') {
        document.getElementById('btn-tab-terms').classList.add('tab-active');
        document.getElementById('viewLessons').classList.add('hidden');
        document.getElementById('viewTerms').classList.remove('hidden');
      } else if (tabId === 'tab-eval') {
        document.getElementById('btn-tab-eval').classList.add('tab-active');
        document.getElementById('viewLessons').classList.add('hidden');
        document.getElementById('viewEval').classList.remove('hidden');
      } else if (tabId === 'tab-safety') {
        document.getElementById('btn-tab-safety').classList.add('tab-active');
        document.getElementById('viewLessons').classList.add('hidden');
        document.getElementById('viewSafety').classList.remove('hidden');
      }
    }

    // Search filter
    function handleSearch(term) {
      term = term.toLowerCase().trim();
      const cards = document.querySelectorAll('.lesson-card');
      let count = 0;
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!term || text.includes(term)) {
          card.classList.remove('hidden');
          count++;
        } else {
          card.classList.add('hidden');
        }
      });
      document.getElementById('lessonCountBadge').textContent = count + ' Bài';
    }
    document.getElementById('globalSearch')?.addEventListener('input', e => handleSearch(e.target.value));
    document.getElementById('mobileSearch')?.addEventListener('input', e => handleSearch(e.target.value));

    // Quick quiz check
    const answeredQuizzes = new Set();
    function checkQuickAnswer(lessonId, qIdx, selectedOpt, correctAns) {
      const isCorrect = selectedOpt === correctAns;
      const expBox = document.getElementById(\`exp_\${lessonId}_\${qIdx}\`);
      
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(\`btn_opt_\${lessonId}_\${qIdx}_\${i}\`);
        if (!btn) continue;
        btn.classList.remove('bg-emerald-100', 'border-emerald-500', 'bg-rose-100', 'border-rose-500', 'dark:bg-emerald-950', 'dark:bg-rose-950');
        if (i === correctAns) {
          btn.classList.add('bg-emerald-100', 'border-emerald-500', 'dark:bg-emerald-950/60');
        } else if (i === selectedOpt && !isCorrect) {
          btn.classList.add('bg-rose-100', 'border-rose-500', 'dark:bg-rose-950/60');
        }
      }

      expBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950', 'dark:text-emerald-300', 'bg-rose-50', 'text-rose-800', 'dark:bg-rose-950', 'dark:text-rose-300');
      if (isCorrect) {
        expBox.classList.add('bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        expBox.innerHTML = '<strong><i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Rất chính xác!</strong> Bạn đã nắm vững kiến thức mĩ thuật!';
      } else {
        expBox.classList.add('bg-rose-50', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-300');
        expBox.innerHTML = '<strong><i class="fa-solid fa-circle-xmark text-rose-500 mr-1"></i> Chưa chính xác.</strong> Hãy xem lại phần kiến thức cốt lõi phía trên nhé!';
      }

      answeredQuizzes.add(\`\${lessonId}_\${qIdx}\`);
      const totalQuizzes = 16 * 2;
      const percent = Math.min(100, Math.round((answeredQuizzes.size / totalQuizzes) * 100));
      document.getElementById('progressPercent').textContent = percent + '%';
      document.getElementById('progressBar').style.width = percent + '%';
    }

    // Color Wheel Studio Logic
    const colorCircle = [
      { name: "Đỏ", hex: "#ef4444", comp: "Lục (#22c55e)", analog: ["Đỏ cam", "Đỏ tía"] },
      { name: "Đỏ cam", hex: "#f97316", comp: "Lam chàm (#06b6d4)", analog: ["Đỏ", "Cam"] },
      { name: "Cam", hex: "#f59e0b", comp: "Lam (#3b82f6)", analog: ["Đỏ cam", "Vàng cam"] },
      { name: "Vàng cam", hex: "#eab308", comp: "Chàm tím (#6366f1)", analog: ["Cam", "Vàng"] },
      { name: "Vàng", hex: "#facc15", comp: "Tím (#a855f7)", analog: ["Vàng cam", "Vàng lục"] },
      { name: "Vàng lục", hex: "#84cc16", comp: "Đỏ tía (#ec4899)", analog: ["Vàng", "Lục"] },
      { name: "Lục", hex: "#22c55e", comp: "Đỏ (#ef4444)", analog: ["Vàng lục", "Lam lục"] },
      { name: "Lam lục", hex: "#14b8a6", comp: "Đỏ cam (#f97316)", analog: ["Lục", "Lam"] },
      { name: "Lam", hex: "#3b82f6", comp: "Cam (#f59e0b)", analog: ["Lam lục", "Chàm"] },
      { name: "Chàm", hex: "#6366f1", comp: "Vàng cam (#eab308)", analog: ["Lam", "Tím"] },
      { name: "Tím", hex: "#a855f7", comp: "Vàng (#facc15)", analog: ["Chàm", "Đỏ tía"] },
      { name: "Đỏ tía", hex: "#ec4899", comp: "Vàng lục (#84cc16)", analog: ["Tím", "Đỏ"] }
    ];

    function initColorWheel() {
      const grid = document.getElementById('colorPickerGrid');
      grid.innerHTML = colorCircle.map((c, i) => \`
        <button onclick="selectColor(\${i})" class="w-8 h-8 rounded-full border-2 border-white shadow hover:scale-125 transition" style="background-color: \${c.hex}" title="\${c.name}"></button>
      \`).join('');
      selectColor(0);
    }

    function selectColor(index) {
      const c = colorCircle[index];
      const disp = document.getElementById('harmonyDisplay');
      disp.innerHTML = \`
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl shadow border-2 border-white flex-shrink-0" style="background-color: \${c.hex}"></div>
          <div>
            <h5 class="font-bold text-sm text-slate-800 dark:text-slate-100">Màu chủ đạo: <span style="color: \${c.hex}">\${c.name}</span></h5>
            <p class="text-xs text-slate-500">Mã màu: \${c.hex}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <strong>Màu tương phản (Đối lập):</strong>
            <div class="text-purple-600 dark:text-purple-400 font-bold mt-1">\${c.comp}</div>
            <div class="text-[11px] text-slate-400">Tạo điểm nhấn mạnh mẽ, rực rỡ nhất</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <strong>Màu tương đồng (Hài hòa):</strong>
            <div class="text-emerald-600 dark:text-emerald-400 font-bold mt-1">\${c.analog.join(' & ')}</div>
            <div class="text-[11px] text-slate-400">Tạo cảm giác êm dịu, liền mạch</div>
          </div>
        </div>
      \`;
    }
    initColorWheel();

    // Ao Dai Fashion Studio Logic
    function setAodaiColor(colorHex) {
      document.getElementById('ad_upper').setAttribute('fill', colorHex);
      document.getElementById('ad_flap').setAttribute('fill', colorHex);
    }

    function setAodaiMotif(type) {
      const chest = document.getElementById('ad_motif_chest');
      const hem = document.getElementById('ad_motif_hem');
      if (type === 'sun') {
        chest.innerHTML = \`
          <circle cx="0" cy="0" r="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <polygon points="0,-12 3,-4 11,-4 5,1 7,9 0,4 -7,9 -5,1 -11,-4 -3,-4" fill="#fbbf24"/>
        \`;
        hem.innerHTML = \`
          <path d="M-20,-5 Q0,-12 20,-5 L20,0 Q0,-7 -20,0 Z" fill="#fbbf24"/>
          <text x="0" y="8" font-size="7" fill="#fbbf24" font-weight="bold" text-anchor="middle">MẶT TRỜI 14 TIA</text>
        \`;
      } else if (type === 'bird') {
        chest.innerHTML = \`
          <path d="M-10,-5 Q0,-15 12,-5 Q0,5 -10,-5 Z" fill="#fbbf24"/>
          <circle cx="10" cy="-6" r="1.5" fill="#fff"/>
        \`;
        hem.innerHTML = \`
          <path d="M-25,0 L-15,-8 L-5,0 L5,-8 L15,0 L25,-8" stroke="#fbbf24" stroke-width="2" fill="none"/>
          <text x="0" y="8" font-size="7" fill="#fbbf24" font-weight="bold" text-anchor="middle">ĐÀN CHIM LẠC SẢI CÁNH</text>
        \`;
      } else if (type === 'rice') {
        chest.innerHTML = \`
          <rect x="-8" y="-8" width="16" height="16" rx="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="3" fill="#fbbf24"/>
        \`;
        hem.innerHTML = \`
          <polygon points="-20,0 -15,-6 -10,0 -5,-6 0,0 5,-6 10,0 15,-6 20,0" fill="#fbbf24"/>
          <text x="0" y="8" font-size="7" fill="#fbbf24" font-weight="bold" text-anchor="middle">LỄ HỘI & RĂNG CƯA</text>
        \`;
      }
    }

    // Trạng Nguyên Exam Logic
    const examQuestions = ${JSON.stringify(trangNguyenMithuat)};
    const userExamAnswers = {};
    let examTimerInterval = null;
    let examTimeLeft = 3600;

    function initExam() {
      const palette = document.getElementById('questionPalette');
      palette.innerHTML = examQuestions.map((_, i) => \`
        <button onclick="scrollToQuestion(\${i})" id="palette_btn_\${i}" class="w-7 h-7 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-600 hover:bg-purple-100 dark:hover:bg-purple-950 flex items-center justify-center transition">
          \${i + 1}
        </button>
      \`).join('');

      const list = document.getElementById('examQuestionsList');
      list.innerHTML = examQuestions.map((q, i) => \`
        <div id="exam_q_\${i}" class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200">
              Câu \${i + 1} / 30
            </span>
          </div>
          <p class="font-bold text-sm text-slate-800 dark:text-slate-100 mb-3">\${q.q}</p>
          <div class="space-y-2">
            \${q.options.map((opt, optIdx) => \`
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition text-xs">
                <input type="radio" name="exam_q_opt_\${i}" value="\${optIdx}" onchange="selectExamAnswer(\${i}, \${optIdx})" class="text-purple-600 focus:ring-purple-500">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="exam_exp_\${i}" class="hidden mt-3 p-3 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"></div>
        </div>
      \`).join('');

      startExamTimer();
    }

    function scrollToQuestion(i) {
      document.getElementById(\`exam_q_\${i}\`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function selectExamAnswer(qIdx, optIdx) {
      userExamAnswers[qIdx] = optIdx;
      document.getElementById(\`palette_btn_\${qIdx}\`)?.classList.add('bg-purple-600', 'text-white', 'border-purple-600');
      document.getElementById('answeredCountBadge').textContent = \`\${Object.keys(userExamAnswers).length} / 30 Đã làm\`;
    }

    function startExamTimer() {
      clearInterval(examTimerInterval);
      examTimeLeft = 3600;
      examTimerInterval = setInterval(() => {
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
          return;
        }
        examTimeLeft--;
        const m = Math.floor(examTimeLeft / 60);
        const s = examTimeLeft % 60;
        document.getElementById('examTimer').textContent = \`\${String(m).padStart(2, '0')}:\${String(s).padStart(2, '0')}\`;
      }, 1000);
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      examQuestions.forEach((q, i) => {
        const userAns = userExamAnswers[i];
        const isCorrect = userAns === q.ans;
        if (isCorrect) score++;

        const expBox = document.getElementById(\`exam_exp_\${i}\`);
        expBox.classList.remove('hidden');
        if (isCorrect) {
          expBox.innerHTML = \`<span class="text-emerald-600 font-bold"><i class="fa-solid fa-check"></i> Đúng!</span> \${q.exp}\`;
        } else {
          expBox.innerHTML = \`<span class="text-rose-600 font-bold"><i class="fa-solid fa-xmark"></i> Sai!</span> Đáp án đúng: <strong>\${q.options[q.ans]}</strong>. Giải thích: \${q.exp}\`;
        }
      });

      if (score >= 20) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
      alert(\`🎉 Bạn đạt được \${score} / 30 câu đúng (\${Math.round((score/30)*10) / 10 * 10} điểm)!\\nHãy cuộn xem giải thích chi tiết cho từng câu bên dưới.\`);
    }

    function resetExam() {
      for (const k in userExamAnswers) delete userExamAnswers[k];
      document.querySelectorAll('#examQuestionsContainer input[type="radio"]').forEach(r => r.checked = false);
      document.querySelectorAll('#examQuestionsContainer [id^="exam_exp_"]').forEach(e => e.classList.add('hidden'));
      document.querySelectorAll('#questionPalette button').forEach(b => {
        b.className = "w-7 h-7 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-600 hover:bg-purple-100 dark:hover:bg-purple-950 flex items-center justify-center transition";
      });
      document.getElementById('answeredCountBadge').textContent = "0 / 30 Đã làm";
      startExamTimer();
    }

    initExam();
  </script>
</body>
</html>`;

const outMithuat6 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_6.html';
fs.writeFileSync(outMithuat6, template, 'utf8');
console.log('Saved courses/mithuat_6.html, size:', template.length);

const outArt6 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/art_6.html';
fs.writeFileSync(outArt6, template, 'utf8');
console.log('Saved alias courses/art_6.html');
