const fs = require('fs');

const replacementHtml = `    <div class="my-6 p-5 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-800 text-xs sm:text-sm">
        <span class="font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-kit-medical"></i> Quy trình 4 bước Cấp cứu ban đầu & Chuyển thương an toàn
        </span>
        <span class="text-slate-400 font-medium">Nguyên tắc Sơ cấp cứu hiện hành</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Bước 1 -->
        <div class="p-4 rounded-xl bg-slate-800/90 border border-blue-500/50 flex flex-col justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-xs mb-3">
              1. HIỆN TRƯỜNG
            </div>
            <div class="text-xs font-bold text-blue-300 uppercase tracking-wide mb-2">Đánh giá an toàn:</div>
            <ul class="text-xs text-slate-300 space-y-1.5">
              <li class="flex items-start gap-1.5"><span class="text-blue-400">•</span> Ngắt nguồn điện / dập tắt lửa</li>
              <li class="flex items-start gap-1.5"><span class="text-blue-400">•</span> Tránh xa vùng sạt lở, nước xoáy</li>
              <li class="flex items-start gap-1.5"><span class="text-blue-400">•</span> Bảo đảm an toàn tuyệt đối cho mình</li>
            </ul>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-700/60 text-[11px] font-semibold text-blue-400">
            Không để phát sinh thêm nạn nhân
          </div>
        </div>

        <!-- Bước 2 -->
        <div class="p-4 rounded-xl bg-slate-800/90 border border-red-500/50 flex flex-col justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600 text-white font-extrabold text-xs mb-3">
              2. GỌI TRỢ GIÚP
            </div>
            <div class="text-xs font-bold text-red-300 uppercase tracking-wide mb-2">Hô hoán & liên hệ:</div>
            <ul class="text-xs text-slate-300 space-y-1.5">
              <li class="flex items-start gap-1.5"><span class="text-red-400">•</span> Gọi ngay Cấp cứu: <b class="text-white bg-red-700 px-1 rounded">115</b></li>
              <li class="flex items-start gap-1.5"><span class="text-red-400">•</span> Hô to người lớn xung quanh ứng cứu</li>
              <li class="flex items-start gap-1.5"><span class="text-red-400">•</span> Báo rõ địa chỉ, số nạn nhân</li>
            </ul>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-700/60 text-[11px] font-semibold text-red-400">
            Lắng nghe hướng dẫn chuyên môn từ 115
          </div>
        </div>

        <!-- Bước 3 -->
        <div class="p-4 rounded-xl bg-slate-800/90 border border-emerald-500/50 flex flex-col justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-extrabold text-xs mb-3">
              3. SƠ CỨU TẠI CHỖ
            </div>
            <div class="text-xs font-bold text-emerald-300 uppercase tracking-wide mb-2">Thao tác cơ bản:</div>
            <ul class="text-xs text-slate-300 space-y-1.5">
              <li class="flex items-start gap-1.5"><span class="text-emerald-400">•</span> Ép tim, thổi ngạt nếu ngừng thở (CPR)</li>
              <li class="flex items-start gap-1.5"><span class="text-emerald-400">•</span> Băng ép cầm máu sạch</li>
              <li class="flex items-start gap-1.5"><span class="text-emerald-400">•</span> Cố định gãy xương bằng nẹp</li>
            </ul>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-700/60 text-[11px] font-semibold text-emerald-400">
            Tuyệt đối không tự ý nắn xương gãy
          </div>
        </div>

        <!-- Bước 4 -->
        <div class="p-4 rounded-xl bg-slate-800/90 border border-amber-500/50 flex flex-col justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600 text-white font-extrabold text-xs mb-3">
              4. CHUYỂN THƯƠNG
            </div>
            <div class="text-xs font-bold text-amber-300 uppercase tracking-wide mb-2">Vận chuyển an toàn:</div>
            <ul class="text-xs text-slate-300 space-y-1.5">
              <li class="flex items-start gap-1.5"><span class="text-amber-400">•</span> Dùng cáng bạt, cáng cứng chuẩn y tế</li>
              <li class="flex items-start gap-1.5"><span class="text-amber-400">•</span> Nghi cột sống: <b class="text-amber-200">Giữ nguyên tư thế</b></li>
              <li class="flex items-start gap-1.5"><span class="text-amber-400">•</span> Di chuyển êm dịu đến cơ sở y tế</li>
            </ul>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-700/60 text-[11px] font-semibold text-amber-400">
            Theo dõi nhịp thở & mạch suốt dọc đường
          </div>
        </div>
      </div>
    </div>`;

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const startTarget = '<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">';
  const keyword = 'Quy trình 4 bước Cấp cứu ban đầu & Chuyển thương an toàn';
  const idx = content.indexOf(keyword);
  if (idx < 0) {
    console.log('Keyword not found in', filePath);
    return;
  }
  const divStart = content.lastIndexOf(startTarget, idx);
  const divEnd = content.indexOf('</div>', content.indexOf('</svg>', idx)) + 6;
  
  const before = content.substring(0, divStart);
  const after = content.substring(divEnd);
  
  content = before + replacementHtml + after;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated', filePath);
}

fixFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdqp_10.html');
fixFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/quocphong_10.html');
