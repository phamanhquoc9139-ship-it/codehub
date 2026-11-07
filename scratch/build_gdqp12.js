// scratch/build_gdqp12.js
// Script build trang GDQP 12 hoàn chỉnh chuẩn Kết nối tri thức đủ 9 bài
// Đồng bộ 4 đường dẫn:
// courses/gdqp_12.html, courses/quocphong_12.html, courses/gdqp12.html, courses/quocphong12.html

const fs = require('fs');
const path = require('path');

const lessonsData = require('./gdqp12_data.js');
const svgs = require('./gdqp12_svgs.js');
const reviewData = require('./gdqp12_review_arena.js');

const svgMapping = {
  1: { key: 'svg1_timeline_1975', title: 'Tiến trình lịch sử bảo vệ Tổ quốc XHCN (1975 – 1988)' },
  2: { key: 'svg2_tochuc_qd_ca', title: 'Cơ cấu tổ chức & Cấp hiệu sĩ quan QĐND và CAND' },
  3: { key: 'svg3_tuyensinh', title: 'Quy trình 4 bước tuyển sinh vào các học viện, trường Quân đội & Công an' },
  4: { key: 'svg4_dbhb', title: 'Các mũi tiến công "Diễn biến hòa bình" & Quy trình 5 bước ứng xử mạng' },
  5: { key: 'svg5_thetran', title: 'Thế trận Quốc phòng toàn dân gắn với An ninh nhân dân địa phương' },
  6: { key: 'svg6_ngam_ak', title: 'Mô hình quang học và yếu lĩnh ngắm bắn súng tiểu liên AK' },
  7: { key: 'svg7_phuonghuong', title: '5 Phương pháp xác định & giữ phương hướng tại thực địa' },
  8: { key: 'svg8_tuthe_chienthuat', title: 'Các tư thế, động tác vận động trong chiến đấu bộ binh' },
  9: { key: 'svg9_chayvutrang', title: 'Kĩ thuật phân phối sức bền & nhịp thở trong chạy vũ trang' }
};

// Section A data for 9 lessons (4 core cards per lesson)
const coreCardsData = {
  1: [
    { title: 'Tự vệ chính đáng', desc: 'Bảo vệ toàn vẹn chủ quyền biên giới Tây Nam, đánh đuổi tập đoàn diệt chủng Pol Pot.' },
    { title: 'Nghĩa vụ quốc tế cao cả', desc: 'Cứu nhân dân Campuchia thoát khỏi họa diệt chủng, hồi sinh đất nước Chùa Tháp.' },
    { title: 'Chiến đấu tự vệ phía Bắc', desc: 'Kiên cường bảo vệ 6 tỉnh biên giới phía Bắc, khẳng định ý chí độc lập tự chủ.' },
    { title: 'Chủ quyền biển đảo thiêng liêng', desc: 'Khẳng định chủ quyền với Hoàng Sa, Trường Sa theo Công ước LHQ về Luật Biển 1982 (UNCLOS).' }
  ],
  2: [
    { title: 'Cơ cấu tổ chức QĐND', desc: 'Bộ chỉ huy chiến lược, các quân khu, quân đoàn, quân chủng, binh chủng và BĐBP.' },
    { title: '12 Cấp bậc sĩ quan QĐND', desc: 'Cấp Úy (4 bậc), Cấp Tá (4 bậc), Cấp Tướng (4 bậc); cầu vai nền vàng, vạch đỏ, sao vàng.' },
    { title: 'Cơ cấu lực lượng CAND', desc: 'Bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội từ trung ương đến cấp xã.' },
    { title: 'Cấp hiệu CAND', desc: 'Cầu vai nền đỏ thắm, viền và vạch vàng; Công an hiệu gắn trên mũ kê-pi.' }
  ],
  3: [
    { title: 'Học viện & Trường Sĩ quan', desc: 'Học viện Quân y, Kĩ thuật Quân sự, Lục quân 1, Lục quân 2, Học viện An ninh, Cảnh sát.' },
    { title: 'Quy trình sơ tuyển bắt buộc', desc: 'Bắt buộc sơ tuyển sức khỏe, lí lịch chính trị tại Ban Chỉ huy quân sự/Công an cấp huyện.' },
    { title: 'Tiêu chuẩn xét tuyển', desc: 'Lí lịch trong sạch, trung thành với Đảng; sức khỏe loại 1, 2; học lực khá, giỏi trở lên.' },
    { title: 'Chế độ đãi ngộ toàn diện', desc: 'Đài thọ 100% học phí, tiền ăn ở, quân trang và được phong quân hàm khi tốt nghiệp.' }
  ],
  4: [
    { title: 'Bản chất "Diễn biến hòa bình"', desc: 'Chiến lược phi quân sự của các thế lực thù địch nhằm lật đổ chế độ chính trị từ bên trong.' },
    { title: 'Bạo loạn lật đổ', desc: 'Hành động bạo lực có tổ chức kết hợp gây rối trật tự xã hội nhằm lật đổ chính quyền.' },
    { title: 'Âm mưu "Phi chính trị hóa"', desc: 'Thủ đoạn thâm độc đòi tách lực lượng vũ trang khỏi sự lãnh đạo của Đảng Cộng sản Việt Nam.' },
    { title: 'Quy tắc 5 bước ứng xử mạng', desc: 'Kiểm chứng nguồn tin, không chia sẻ tin giả, báo cáo vi phạm, lan tỏa tích cực, tuân thủ Luật An ninh mạng.' }
  ],
  5: [
    { title: 'Lực lượng vũ trang địa phương', desc: 'Gồm Bộ đội địa phương, Dân quân tự vệ và Lực lượng dự bị động viên.' },
    { title: 'Dân quân tự vệ (DQTV)', desc: 'Lực lượng bán vũ trang nòng cốt ở cơ sở, vừa lao động sản xuất vừa sẵn sàng chiến đấu.' },
    { title: 'Truyền thống đánh giặc quê hương', desc: 'Tận dụng địa hình hiểm trở, toàn dân đánh giặc, thế trận chiến tranh nhân dân.' },
    { title: 'Nghệ thuật quân sự độc đáo', desc: 'Lấy nhỏ thắng lớn, lấy ít địch nhiều, kết hợp chiến tranh du kích với tác chiến chính quy.' }
  ],
  6: [
    { title: 'Đường ngắm cơ bản', desc: 'Đường thẳng từ mắt qua chính giữa mép trên khe ngắm đến đỉnh chính giữa đầu ngắm.' },
    { title: 'Đường ngắm đúng', desc: 'Đường ngắm cơ bản được gióng chuẩn xác vào điểm định bắn trúng trên mục tiêu bia.' },
    { title: 'Ảnh hưởng ngắm sai', desc: 'Đầu ngắm cao hơn khe ngắm → đạn ăn cao; đầu ngắm lệch sang trái → đạn lệch sang trái.' },
    { title: '5 Nguyên tắc an toàn bắn', desc: 'Tuyệt đối chỉ bắn khi có lệnh, nòng súng luôn hướng an toàn, ngón tay ngoài vành cò.' }
  ],
  7: [
    { title: 'Xác định bằng la bàn', desc: 'Phương pháp chính xác nhất; tránh xa khối sắt thép lớn và đường dây điện cao thế.' },
    { title: 'Phương pháp gậy & bóng nắng', desc: 'Cắm cọc thẳng đứng; điểm bóng đầu tiên là hướng Tây, điểm bóng thứ hai là hướng Đông.' },
    { title: 'Tìm hướng bằng Sao Bắc Cực', desc: 'Nối 2 ngôi sao mép gàu chòm Đại Hùng kéo dài gấp 5 lần sẽ gặp Sao Bắc Cực (hướng Bắc).' },
    { title: 'Dấu hiệu rêu và thân cây', desc: 'Phía rêu ẩm mọc nhiều trên thân cây đá thường là hướng Bắc; tán lá rậm hướng Nam.' }
  ],
  8: [
    { title: 'Vật che khuất vs Vật che đỡ', desc: 'Vật che khuất chỉ che mắt địch (bụi cây); vật che đỡ chống được đạn và mảnh nổ (mô đá, công sự).' },
    { title: 'Đi khom & Chạy khom', desc: 'Áp dụng nơi có vật che khuất cao ngang ngực hoặc trong điều kiện đêm tối, sương mù.' },
    { title: 'Vọt tiến bất ngờ', desc: 'Bứt tốc nhanh qua bãi đất trống ngắn giữa hai vị trí ẩn nấp dưới hỏa lực khống chế ngắt quãng.' },
    { title: 'Bò, Lê, Trườn sát mặt đất', desc: 'Toàn thân áp sát mặt đất khi địa hình che đỡ thấp và hỏa lực bắn thẳng của địch dày đặc.' }
  ],
  9: [
    { title: 'Xuất phát cao vững chắc', desc: 'Đứng chân trước chân sau, thân trên hơi đổ về trước, ôm giữ súng chắc chắn sát thân người.' },
    { title: 'Phân phối sức & Nhịp thở', desc: 'Chạy đều bước, đặt nửa bàn trước; thở nhịp nhàng 2 hít - 2 thở hoặc 3 hít - 3 thở.' },
    { title: 'Vượt qua "Cực điểm"', desc: 'Khi tức ngực, khó thở cần kiên trì thở sâu, duy trì nhịp chạy, cơ thể sẽ hồi phục hô hấp 2.' },
    { title: 'Hồi tĩnh & Chống say nắng', desc: 'Về đích đi bộ thả lỏng 5-10 phút; nếu say nóng đưa ngay vào râm mát, nới áo, chườm trán và uống oresol.' }
  ]
};

// Section D Practical Applications data for 9 lessons
const practicalAppsData = {
  1: [
    {
      title: 'Tình huống 1: Nhận diện luận điệu xuyên tạc lịch sử',
      desc: 'Khi xuất hiện video trên mạng xuyên tạc cuộc phản công bảo vệ biên giới Tây Nam năm 1978 của quân đội ta, học sinh cần nêu rõ căn cứ pháp lí quốc tế về quyền tự vệ chính đáng và nghĩa vụ giúp bạn theo đề nghị của Mặt trận Đoàn kết dân tộc cứu nước Campuchia.'
    },
    {
      title: 'Tình huống 2: Tuyên truyền chủ quyền biển đảo quê hương',
      desc: 'Tham gia các diễn đàn học đường, triển lãm ảnh "Hoàng Sa, Trường Sa là của Việt Nam"; tra cứu các tư liệu lịch sử Châu bản triều Nguyễn khẳng định chủ quyền liên tục và hòa bình của Việt Nam.'
    }
  ],
  2: [
    {
      title: 'Bài tập thực hành: Nhận diện quân hàm và cấp hiệu',
      desc: 'Quan sát cầu vai: Cầu vai nền vàng có 2 vạch đỏ nằm dọc và 3 ngôi sao vàng. Xác định: Đây là quân hàm Thượng tá thuộc Quân đội nhân dân Việt Nam. Nếu cầu vai nền đỏ thắm có 1 vạch vàng và 2 sao vàng: Đây là quân hàm Trung úy Công an nhân dân.'
    },
    {
      title: 'Định hướng nghề nghiệp tương lai',
      desc: 'Tìm hiểu chức năng nhiệm vụ của các quân chủng Hải quân, Phòng không - Không quân, Cảnh sát biển để lập kế hoạch ôn luyện học tập và rèn luyện thể lực phù hợp với tiêu chuẩn tuyển sinh.'
    }
  ],
  3: [
    {
      title: 'Quy trình chuẩn bị hồ sơ sơ tuyển quân đội, công an',
      desc: '1. Đăng kí sơ tuyển trực tiếp tại Ban Chỉ huy quân sự hoặc Công an cấp quận/huyện từ tháng 3.\n2. Chuẩn bị hồ sơ lí lịch gia đình trong sạch, không có tiền án tiền sự.\n3. Rèn luyện thị lực, cân nặng, chiều cao (nam từ 1m65, nữ từ 1m58 trở lên theo quy định hiện hành).\n4. Đăng kí nguyện vọng 1 vào trường quân sự, công an đã đạt sơ tuyển.'
    },
    {
      title: 'Chính sách ưu đãi và cơ hội phục vụ Tổ quốc',
      desc: 'Học viên các trường QĐND và CAND được đài thọ 100% học phí, tiền ăn, phụ cấp hàng tháng và bố trí công tác ngay sau khi tốt nghiệp theo phân công của tổ chức.'
    }
  ],
  4: [
    {
      title: 'Quy tắc ứng xử khi phát hiện thông tin xấu độc trên mạng',
      desc: '1. Không like, chia sẻ hoặc bình luận cảm tính tiếp tay cho kẻ xấu.\n2. Kiểm chứng thông tin trên Cổng thông tin Bộ Công an, Bộ Quốc phòng hoặc báo chí chính thống (VTV, Thông tấn xã Việt Nam).\n3. Sử dụng chức năng "Báo cáo vi phạm" (Report) trên nền tảng mạng xã hội và thông báo cơ quan chức năng.'
    },
    {
      title: 'Nâng cao sức đề kháng trước chiến lược "Diễn biến hòa bình"',
      desc: 'Chủ động học tập lịch sử, giữ gìn bản sắc văn hóa dân tộc, kiên quyết phản đối các biểu hiện tự diễn biến, tự chuyển hóa và tư tưởng bàng quan, thờ ơ với vận mệnh đất nước.'
    }
  ],
  5: [
    {
      title: 'Trách nhiệm của học sinh với lực lượng vũ trang địa phương',
      desc: 'Tham gia các buổi sinh hoạt chuyên đề quốc phòng, phong trào "Đền ơn đáp nghĩa", chăm sóc nghĩa trang liệt sĩ và thăm hỏi các Mẹ Việt Nam Anh hùng tại địa bàn cư trú.'
    },
    {
      title: 'Tìm hiểu truyền thống đánh giặc của quê hương',
      desc: 'Sưu tầm các mẩu chuyện lịch sử về du kích địa phương, căn cứ địa cách mạng và các trận đánh tiêu biểu trên địa bàn xã, huyện để xây dựng bài thuyết trình lan tỏa lòng yêu nước.'
    }
  ],
  6: [
    {
      title: 'Bài tập phân tích lỗi ngắm bắn súng AK',
      desc: '1. Đầu ngắm thấp hơn khe ngắm → Đạn ăn xuống dưới (thấp).\n2. Đầu ngắm cao hơn khe ngắm → Đạn ăn lên trên (cao).\n3. Đầu ngắm lệch sang trái → Đạn ăn sang trái.\n4. Đầu ngắm lệch sang phải → Đạn ăn sang phải.\n5. Mặt súng nghiêng sang bên nào thì đạn ăn lệch và thấp về bên đó.'
    },
    {
      title: 'Thực hành yếu lĩnh bóp cò súng AK',
      desc: 'Đặt đốt thứ nhất của ngón trỏ vào cò súng. Khi đã lấy được đường ngắm đúng thì ngưng thở, bóp cò êm đều dần dần từ từ về sau theo trục nòng súng cho đến khi súng nổ mà không bị giật cục hay đổi hướng ngắm.'
    }
  ],
  7: [
    {
      title: 'Thực hành xác định hướng Bắc bằng đồng hồ đeo tay',
      desc: 'Tại bán cầu Bắc: Đặt đồng hồ nằm ngang, hướng kim giờ về phía Mặt Trời. Phân giác của góc tạo bởi kim giờ và số 12 trên mặt đồng hồ chỉ hướng Nam. Đối diện hướng Nam theo đường thẳng qua tâm đồng hồ là hướng Bắc.'
    },
    {
      title: 'Kĩ năng xử lí tình huống khi bị lạc trong rừng núi',
      desc: '1. Giữ bình tĩnh, dừng lại nghỉ ngơi và quan sát địa hình.\n2. Leo lên điểm cao quan sát dòng sông suối (đi xuôi dòng suối thường dẫn đến bản làng người ở).\n3. Sử dụng khói lửa (ban ngày đốt lá tươi tạo khói trắng, ban đêm đốt lửa sáng) để phát tín hiệu cấp cứu SOS.'
    }
  ],
  8: [
    {
      title: 'Tình huống chiến thuật: Vận động chiếm lĩnh vị trí bắn',
      desc: 'Từ cự li 100m cách mục tiêu, nơi có nhiều bờ ruộng và rãnh nông: Sử dụng động tác trườn thấp để áp sát mép chiến hào địch bí mật; khi cách 20m có ụ đất cao, chuyển sang vọt tiến nhanh chóng ném lựu đạn và chiếm lĩnh công sự.'
    },
    {
      title: 'Kĩ năng sử dụng vật che khuất và che đỡ',
      desc: 'Không bao giờ nhô đầu hoặc súng trực tiếp qua đỉnh vật cản mà luôn quan sát và bắn từ bên sườn phải hoặc sườn trái của bờ đá, gốc cây để hạn chế diện tích lộ sáng trước mắt xạ thủ địch.'
    }
  ],
  9: [
    {
      title: 'Kế hoạch rèn luyện thể lực chạy 1.500m - 3.000m',
      desc: '1. Khởi động kĩ các khớp cổ chân, gối, hông và ép dây chằng 10-15 phút trước khi chạy.\n2. Phân chia cự li: 100m đầu xuất phát nhanh; 1.200m giữa chạy nhịp nhàng thở 2-2; 200m cuối dồn sức bứt tốc về đích.\n3. Tuyệt đối không ngồi thụp xuống sau khi cán đích để máu từ chi dưới kịp tuần hoàn về tim.'
    },
    {
      title: 'Sơ cứu chấn thương bong gân hoặc căng cơ khi chạy',
      desc: 'Áp dụng nguyên tắc RICE khẩn cấp: Rest (Nghỉ ngơi ngay lập tức), Ice (Chườm đá lạnh 15-20 phút), Compression (Băng ép vừa phải bằng băng chun), Elevation (Kê cao chân bị thương hơn mức tim).'
    }
  ]
};

function formatItemContent(item) {
  if (typeof item === 'string') {
    return `
      <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
        <div class="leading-relaxed flex-1">${item}</div>
      </div>
    `;
  }

  if (typeof item === 'object' && item !== null) {
    let innerHtml = '';
    
    if (item.badge) {
      innerHtml += `<span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 border border-emerald-200 dark:border-emerald-800">${item.badge}</span>`;
    }
    
    if (item.title) {
      innerHtml += `
        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <i class="fa-solid fa-shield-halved text-emerald-500 text-xs"></i>
          <span>${item.title}</span>
        </h4>
      `;
    }

    if (Array.isArray(item.points) && item.points.length > 0) {
      innerHtml += `
        <div class="space-y-2 mt-2">
          ${item.points.map(pt => `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
              <div class="leading-relaxed flex-1">${pt}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (item.desc) {
      const lines = item.desc.split('\n').filter(l => l.trim().length > 0);
      innerHtml += `
        <div class="space-y-2.5 mt-2">
          ${lines.map(line => {
            const cleanLine = line.replace(/^[•\-\*]\s*/, '');
            return `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                <div class="leading-relaxed flex-1">${cleanLine}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    return `
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 shadow-sm transition hover:shadow-md">
        ${innerHtml}
      </div>
    `;
  }

  return '';
}

function renderLessonCard(id) {
  const les = lessonsData[String(id)];
  const core = coreCardsData[id] || [];
  const svgInfo = svgMapping[id];
  const practicals = practicalAppsData[id] || [];
  const quiz = les.quiz || [];

  return `
    <article id="bai-${id}" data-lesson-card="${id}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8">
      <!-- Card Header -->
      <div class="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/70 bg-emerald-50/70 dark:bg-emerald-950/25">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white shadow-sm">BÀI ${id} • GDQP 12</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">${les.group || les.topic || 'Chủ đề trọng tâm'}</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">📖 SGK KNTT</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="toggleBookmark(${id})" id="bm-btn-${id}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1" title="Đánh dấu bài học">
              <span id="bm-icon-${id}">☆</span> <span class="hidden sm:inline">Lưu</span>
            </button>
            <button type="button" onclick="toggleDone(${id})" id="done-btn-${id}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition flex items-center gap-1">
              <span id="done-icon-${id}">○</span> <span>Hoàn thành</span>
            </button>
          </div>
        </div>

        <h3 class="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
          Bài ${id}. ${les.title}
        </h3>

        <p class="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Trọng tâm bài học:</strong> ${les.objectives ? les.objectives.join('; ') : ''}
        </p>

        <!-- Quick Activity Jump Pills -->
        <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
          <a href="#b${id}-cong-thuc" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition">A. Quy tắc cốt lõi (4)</a>
          <a href="#b${id}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition">B. Nội dung chi tiết (${les.sections ? les.sections.length : 0} mục)</a>
          <a href="#b${id}-mo-hinh" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition">C. Sơ đồ tư duy</a>
          <a href="#b${id}-thuc-hanh" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition">D. Tình huống & Thực hành</a>
          <a href="#b${id}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-600 hover:text-white transition">E. Trắc nghiệm (3 câu)</a>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-5 md:p-6 space-y-8">
        
        <!-- PHẦN A: CÔNG THỨC, ĐỊNH LUẬT & NGUYÊN TẮC CỐT LÕI -->
        <section id="b${id}-cong-thuc" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần A</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nguyên tắc, Quy định & Khái niệm cốt lõi</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${core.map(c => `
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">★</span>
                <div>
                  <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug">${c.title}</div>
                  <div class="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">${c.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PHẦN B: NỘI DUNG CHI TIẾT TRỌNG TÂM THEO SGK -->
        <section id="b${id}-noi-dung" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần B</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nội dung chi tiết trọng tâm theo SGK</h4>
          </div>
          <div class="space-y-4">
            ${les.sections.map(sec => `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
                <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-700/60">
                  <span class="w-1.5 h-5 rounded-full bg-emerald-500 shrink-0"></span>
                  ${sec.heading}
                </h4>
                <div class="grid grid-cols-1 ${sec.items && sec.items.length > 1 ? 'md:grid-cols-2' : ''} gap-3 mt-3">
                  ${sec.items.map(it => formatItemContent(it)).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PHẦN C: MÔ HÌNH TRỰC QUAN / SƠ ĐỒ TƯ DUY -->
        <section id="b${id}-mo-hinh" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần C</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Sơ đồ tư duy & Trực quan hóa quân sự</h4>
          </div>
          <div class="p-4 md:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <div class="text-xs font-bold text-slate-400 mb-2.5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${svgInfo.title}</span>
            </div>
            ${svgs[svgInfo.key] || ''}
          </div>
        </section>

        <!-- PHẦN D: TÌNH HUỐNG & THỰC HÀNH VẬN DỤNG -->
        <section id="b${id}-thuc-hanh" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần D</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Tình huống huấn luyện & Thực hành vận dụng</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${practicals.map((p, pIdx) => `
              <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/50">
                <div class="flex items-center gap-2 text-xs md:text-sm font-bold text-amber-900 dark:text-amber-200 mb-1.5">
                  <span class="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-800/80 text-amber-900 dark:text-amber-200 flex items-center justify-center text-[10px] font-black shrink-0">!</span>
                  <span>${p.title}</span>
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">${p.desc}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PHẦN E: LUYỆN TẬP TRẮC NGHIỆM (3 CÂU) -->
        <section id="b${id}-trac-nghiem" class="scroll-mt-24">
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần E</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Luyện tập trắc nghiệm nhanh (3 câu)</h4>
            </div>
            <span class="text-[11px] font-bold text-slate-400">Kiểm tra tức thì</span>
          </div>
          <div class="space-y-3.5">
            ${quiz.map((q, qIdx) => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-2 leading-relaxed">
                  <span class="text-emerald-600 dark:text-emerald-400">Câu ${qIdx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  ${q.options.map((opt, optIdx) => `
                    <button type="button" onclick="checkQuizAnswer(${id}, ${qIdx}, ${optIdx}, ${q.ans !== undefined ? q.ans : (q.answer !== undefined ? q.answer : 0)})" id="q-btn-${id}-${qIdx}-${optIdx}" class="quiz-btn-${id}-${qIdx} p-2.5 rounded-xl text-left text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-700/60 transition flex items-start gap-2">
                      <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center shrink-0 text-[10px]">${['A', 'B', 'C', 'D'][optIdx]}</span>
                      <span class="flex-1">${opt.replace(/^[A-D]\.\s*/, '')}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="q-feedback-${id}-${qIdx}" class="hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed"></div>
              </div>
            `).join('')}
          </div>
        </section>

      </div>
    </article>
  `;
}

function buildPageHtml() {
  const allArticlesHtml = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => renderLessonCard(id)).join('\n');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giáo dục Quốc phòng và An ninh 12 — Trọn bộ 9 bài chuẩn Kết nối tri thức</title>
  <meta name="description" content="Tổng hợp toàn diện kiến thức Giáo dục Quốc phòng và An ninh lớp 12 theo chương trình Kết nối tri thức với cuộc sống. Đầy đủ 9 bài, 4 khối kiến thức, 6 sơ đồ tư duy chiến thuật, bảng mốc lịch sử, 5 mệnh lệnh an toàn và Đấu trường Trạng Nguyên 20 câu.">
  
  <!-- Tailwind CSS & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b'
            }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    
    /* Smooth focus rings */
    *:focus-visible {
      outline: 2px solid #059669;
      outline-offset: 2px;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors duration-200">

  <!-- TOP APP BAR -->
  <header class="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Quay về trang chủ">
          <div class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black shadow-sm">
            <i class="fa-solid fa-person-military-pointing text-sm"></i>
          </div>
          <span class="hidden sm:inline font-black text-slate-900 dark:text-white tracking-tight text-sm">Học Liệu Số</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <div class="flex items-center gap-1.5">
          <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Lớp 12</span>
          <h1 class="text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px] md:max-w-xs">GDQP & An Ninh 12</h1>
        </div>
      </div>

      <!-- Right: Search, Stats & Theme Toggle -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button type="button" onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Tìm kiếm bài học (Ctrl+K)">
          <i class="fa-solid fa-magnifying-glass text-[11px]"></i>
          <span class="hidden md:inline">Tìm nhanh...</span>
          <kbd class="hidden md:inline px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[10px] border border-slate-300 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <a href="#dau-truong-arena" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition">
          <i class="fa-solid fa-trophy text-[11px]"></i>
          <span>Đấu trường 20 câu</span>
        </a>

        <!-- Dark mode toggle -->
        <button type="button" id="theme-toggle" class="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Chuyển chế độ sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- MAIN CONTAINER WITH SIDEBAR -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-8">
    
    <!-- LEFT STICKY SIDEBAR -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        
        <!-- Progress Box -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center justify-between text-xs font-bold mb-2">
            <span class="text-slate-600 dark:text-slate-300">Tiến độ 9 bài học</span>
            <span id="progress-text" class="text-emerald-600 dark:text-emerald-400">0/9 hoàn thành</span>
          </div>
          <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div id="progress-bar" class="bg-emerald-500 h-full w-0 transition-all duration-300"></div>
          </div>
        </div>

        <!-- Lessons Index Navigation -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm max-h-[calc(100vh-16rem)] overflow-y-auto">
          <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            Mục lục 9 bài SGK
          </div>
          <nav class="space-y-1">
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => `
              <a href="#bai-${id}" id="nav-item-${id}" class="sidebar-item flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                <span class="truncate">Bài ${id}. ${lessonsData[String(id)].title}</span>
                <span id="nav-check-${id}" class="text-emerald-500 text-xs hidden">✓</span>
              </a>
            `).join('')}
            <div class="pt-2 mt-2 border-t border-slate-100 dark:border-slate-700">
              <a href="#tong-ket-khoa-hoc" class="sidebar-item flex items-center gap-2 p-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition">
                <i class="fa-solid fa-list-check text-emerald-500 text-xs"></i>
                <span>Bảng tổng kết 4 khối</span>
              </a>
              <a href="#dau-truong-arena" class="sidebar-item flex items-center gap-2 p-2 rounded-xl text-xs font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700/60 transition">
                <i class="fa-solid fa-trophy text-amber-500 text-xs"></i>
                <span>Đấu trường Trạng Nguyên</span>
              </a>
            </div>
          </nav>
        </div>

      </div>
    </aside>

    <!-- MAIN ARTICLES CONTENT -->
    <main class="flex-1 min-w-0">
      
      <!-- HERO BANNER -->
      <section class="mb-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur border border-white/20 text-emerald-200 mb-3">
            <i class="fa-solid fa-shield-halved"></i>
            <span>Bộ sách Kết nối tri thức với cuộc sống</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Giáo dục Quốc phòng và An ninh 12
          </h2>
          <p class="mt-3 text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Hệ thống hóa toàn bộ 9 bài học theo SGK chuẩn: Lịch sử bảo vệ Tổ quốc sau 1975, tổ chức và tuyển sinh Quân đội - Công an, phòng chống "Diễn biến hòa bình", truyền thống địa phương, kĩ thuật bắn súng AK, tìm phương hướng, tư thế chiến thuật và chạy vũ trang.
          </p>
          <div class="mt-5 flex flex-wrap gap-2 text-xs font-bold">
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">🎯 9 Bài học SGK</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">🛡️ 4 Khối kiến thức</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">📊 9 Sơ đồ trực quan</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">⏱️ Đấu trường 45 phút</span>
          </div>
        </div>
      </section>

      <!-- 9 LESSON ARTICLES -->
      ${allArticlesHtml}

      <!-- TỔNG KẾT KHÓA HỌC: 4 KHỐI KIẾN THỨC, 10 MỐC LỊCH SỬ & 5 MỆNH LỆNH AN TOÀN -->
      <section id="tong-ket-khoa-hoc" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8 p-5 md:p-8">
        <div class="flex items-center gap-2 mb-4">
          <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white shadow-sm">TỔNG KẾT KHÓA HỌC</span>
          <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Bảng tổng kết 4 khối kiến thức GDQP 12</h3>
        </div>

        <!-- 4 Modules Table -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
          <table class="w-full text-left text-xs md:text-sm">
            <thead class="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="p-3.5">Khối kiến thức</th>
                <th class="p-3.5">Phạm vi bài</th>
                <th class="p-3.5">Nội dung cốt lõi</th>
                <th class="p-3.5">Kĩ năng & Vận dụng thực tế</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
              ${reviewData.modulesTable.map(m => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td class="p-3.5 font-bold text-slate-900 dark:text-white">
                    <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-1">${m.badge}</span><br>
                    ${m.module}
                  </td>
                  <td class="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">${m.lessons}</td>
                  <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">${m.theory}</td>
                  <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">${m.skills}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- 10 Historic Milestones Timeline -->
        <div class="mb-8">
          <h4 class="text-base md:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <i class="fa-solid fa-clock-rotate-left text-emerald-500"></i>
            <span>Dòng thời gian 10 mốc lịch sử giữ nước sau 1975</span>
          </h4>
          <div class="space-y-3">
            ${reviewData.timelineMilestones.map(ms => `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-start gap-3">
                  <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 whitespace-nowrap shrink-0">${ms.time}</span>
                  <div>
                    <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white">${ms.event}</div>
                    <div class="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">${ms.detail}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5 Mandatory Safety Rules -->
        <div>
          <h4 class="text-base md:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <i class="fa-solid fa-triangle-exclamation text-amber-500"></i>
            <span>5 Mệnh lệnh an toàn kỷ luật quân trường bắt buộc tuyệt đối</span>
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${reviewData.safetyRules.map(sr => `
              <div class="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/60">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="w-6 h-6 rounded-lg bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0">${sr.num}</span>
                  <span class="font-bold text-xs md:text-sm text-rose-900 dark:text-rose-200">${sr.title}</span>
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${sr.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN QUÂN SỰ (20 CÂU, 45 PHÚT) -->
      <section id="dau-truong-arena" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-12 p-5 md:p-8">
        
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-amber-500 text-white shadow-sm">ĐẤU TRƯỜNG TRẠNG NGUYÊN</span>
              <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Kiểm tra tổng hợp 20 câu</h3>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Đề thi bao quát toàn bộ 9 bài học GDQP 12; thời gian chuẩn 45 phút.</p>
          </div>
          
          <!-- Timer and Control -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono font-bold text-sm">
              <i class="fa-regular fa-clock text-amber-500"></i>
              <span id="arena-timer">45:00</span>
            </div>
            <button type="button" onclick="startArenaExam()" id="arena-start-btn" class="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm">
              Bắt đầu làm bài
            </button>
            <button type="button" onclick="submitArenaExam()" id="arena-submit-btn" class="hidden px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition shadow-sm">
              Nộp bài chấm điểm
            </button>
          </div>
        </div>

        <!-- Result Box -->
        <div id="arena-result-box" class="hidden mb-6 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 id="arena-result-title" class="font-black text-lg text-emerald-900 dark:text-emerald-200">Kết quả bài thi: 20/20 câu (10.0 điểm)</h4>
              <p id="arena-result-msg" class="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">Xuất sắc! Bạn đã nắm vững toàn diện kiến thức Giáo dục Quốc phòng và An ninh 12.</p>
            </div>
            <button type="button" onclick="resetArenaExam()" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-200 font-bold text-xs border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 transition">
              Làm lại bài thi
            </button>
          </div>
        </div>

        <!-- 20 Arena Questions List -->
        <div class="space-y-4">
          ${reviewData.arenaQuestions.map((q, idx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-2 leading-relaxed">
                <span class="text-emerald-600 dark:text-emerald-400 font-black">Câu ${idx + 1}:</span> ${q.q}
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                ${q.options.map((opt, oIdx) => `
                  <label class="arena-opt-label-${idx} flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-emerald-400 transition text-xs text-slate-700 dark:text-slate-300">
                    <input type="radio" name="arena-q-${idx}" value="${oIdx}" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
              <div id="arena-explain-${idx}" class="hidden mt-2.5 p-3 rounded-xl text-xs leading-relaxed"></div>
            </div>
          `).join('')}
        </div>

      </section>

    </main>

  </div>

  <!-- SEARCH MODAL (Ctrl+K) -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
    <div class="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      <div class="p-3 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-slate-400 ml-2"></i>
        <input type="text" id="search-input" placeholder="Tìm kiếm bài học, quy tắc bắn súng, cấp hiệu, phương hướng..." class="w-full bg-transparent border-0 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none">
        <button type="button" onclick="closeSearchModal()" class="px-2 py-1 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">ESC</button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto p-2 space-y-1">
        <!-- Results dynamically inserted here -->
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // 1. Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(!isDark);
    });

    // 2. Lesson Done & Bookmark State
    const PROGRESS_KEY = 'gdqp12_progress';
    let progressState = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{"done":[],"bookmarks":[]}');

    function updateProgressUi() {
      const doneCount = progressState.done.length;
      document.getElementById('progress-text').innerText = doneCount + '/9 hoàn thành';
      document.getElementById('progress-bar').style.width = (doneCount / 9 * 100) + '%';

      for (let i = 1; i <= 9; i++) {
        const isDone = progressState.done.includes(i);
        const doneBtn = document.getElementById('done-btn-' + i);
        const doneIcon = document.getElementById('done-icon-' + i);
        const navCheck = document.getElementById('nav-check-' + i);

        if (doneBtn && doneIcon) {
          if (isDone) {
            doneBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 transition flex items-center gap-1';
            doneIcon.innerText = '●';
          } else {
            doneBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition flex items-center gap-1';
            doneIcon.innerText = '○';
          }
        }
        if (navCheck) {
          navCheck.style.display = isDone ? 'inline' : 'none';
        }

        const isBm = progressState.bookmarks.includes(i);
        const bmIcon = document.getElementById('bm-icon-' + i);
        if (bmIcon) {
          bmIcon.innerText = isBm ? '★' : '☆';
          bmIcon.className = isBm ? 'text-amber-500' : '';
        }
      }
    }

    function toggleDone(id) {
      const idx = progressState.done.indexOf(id);
      if (idx >= 0) progressState.done.splice(idx, 1);
      else progressState.done.push(id);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressState));
      updateProgressUi();
    }

    function toggleBookmark(id) {
      const idx = progressState.bookmarks.indexOf(id);
      if (idx >= 0) progressState.bookmarks.splice(idx, 1);
      else progressState.bookmarks.push(id);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressState));
      updateProgressUi();
    }

    updateProgressUi();

    // 3. Inline 3-Question Quiz Checking
    function checkQuizAnswer(lessonId, questionIdx, selectedOption, correctOption) {
      const allBtns = document.querySelectorAll('.quiz-btn-' + lessonId + '-' + questionIdx);
      allBtns.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:border-emerald-400', 'hover:bg-emerald-50/50');
        if (idx === correctOption) {
          btn.className = 'p-2.5 rounded-xl text-left text-xs bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold flex items-start gap-2';
        } else if (idx === selectedOption) {
          btn.className = 'p-2.5 rounded-xl text-left text-xs bg-rose-50 dark:bg-rose-950/80 border-2 border-rose-500 text-rose-800 dark:text-rose-200 font-bold flex items-start gap-2';
        } else {
          btn.className = 'p-2.5 rounded-xl text-left text-xs opacity-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex items-start gap-2';
        }
      });

      const feedback = document.getElementById('q-feedback-' + lessonId + '-' + questionIdx);
      if (feedback) {
        feedback.classList.remove('hidden');
        if (selectedOption === correctOption) {
          feedback.className = 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800';
          feedback.innerHTML = '<strong>Chính xác!</strong> Bạn đã chọn đúng đáp án chuẩn theo giáo trình GDQP 12.';
        } else {
          feedback.className = 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-rose-100/70 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-300 dark:border-rose-800';
          feedback.innerHTML = '<strong>Chưa chính xác!</strong> Hãy xem lại phần lí thuyết trong bài để nắm vững đáp án đúng là đáp án <strong>' + ['A', 'B', 'C', 'D'][correctOption] + '</strong>.';
        }
      }
    }

    // 4. Arena Exam (20 Questions, 45 Minutes)
    const arenaQuestions = ${JSON.stringify(reviewData.arenaQuestions)};
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;
    let arenaStarted = false;

    function startArenaExam() {
      arenaStarted = true;
      document.getElementById('arena-start-btn').classList.add('hidden');
      document.getElementById('arena-submit-btn').classList.remove('hidden');
      
      clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          return;
        }
        arenaSecondsLeft--;
        const m = String(Math.floor(arenaSecondsLeft / 60)).padStart(2, '0');
        const s = String(arenaSecondsLeft % 60).padStart(2, '0');
        document.getElementById('arena-timer').innerText = m + ':' + s;
      }, 1000);
    }

    function submitArenaExam() {
      clearInterval(arenaTimerInterval);
      document.getElementById('arena-submit-btn').classList.add('hidden');
      
      let score = 0;
      arenaQuestions.forEach((q, idx) => {
        const radios = document.getElementsByName('arena-q-' + idx);
        let userAns = -1;
        radios.forEach(r => {
          if (r.checked) userAns = parseInt(r.value);
          r.disabled = true;
        });

        const labels = document.querySelectorAll('.arena-opt-label-' + idx);
        labels.forEach((label, oIdx) => {
          if (oIdx === q.answer) {
            label.className = 'flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 font-bold text-xs text-emerald-800 dark:text-emerald-200';
          } else if (oIdx === userAns) {
            label.className = 'flex items-start gap-2.5 p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 font-bold text-xs text-rose-800 dark:text-rose-200';
          } else {
            label.className = 'flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 opacity-60 text-xs text-slate-500';
          }
        });

        const explain = document.getElementById('arena-explain-' + idx);
        if (explain) {
          explain.classList.remove('hidden');
          if (userAns === q.answer) {
            score++;
            explain.className = 'mt-2.5 p-3 rounded-xl text-xs leading-relaxed bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800';
            explain.innerHTML = '<strong>Đúng!</strong> ' + q.explain;
          } else {
            explain.className = 'mt-2.5 p-3 rounded-xl text-xs leading-relaxed bg-amber-100/60 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800';
            explain.innerHTML = '<strong>Đáp án đúng: ' + ['A', 'B', 'C', 'D'][q.answer] + '.</strong> ' + q.explain;
          }
        }
      });

      const resultBox = document.getElementById('arena-result-box');
      resultBox.classList.remove('hidden');
      const grade = (score / arenaQuestions.length * 10).toFixed(1);
      document.getElementById('arena-result-title').innerText = 'Kết quả bài thi: ' + score + '/20 câu (' + grade + ' điểm)';
      
      let msg = '';
      if (score >= 18) msg = 'Xuất sắc! Bạn nắm rất vững kiến thức Quốc phòng và An ninh lớp 12!';
      else if (score >= 14) msg = 'Khá giỏi! Hãy ôn lại các câu trả lời sai để đạt điểm tối đa.';
      else msg = 'Bạn cần ôn luyện kĩ hơn lý thuyết các bài bắn súng, phương hướng và mốc lịch sử.';
      document.getElementById('arena-result-msg').innerText = msg;

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function resetArenaExam() {
      arenaSecondsLeft = 45 * 60;
      document.getElementById('arena-timer').innerText = '45:00';
      document.getElementById('arena-result-box').classList.add('hidden');
      document.getElementById('arena-start-btn').classList.remove('hidden');
      document.getElementById('arena-submit-btn').classList.add('hidden');

      arenaQuestions.forEach((q, idx) => {
        const radios = document.getElementsByName('arena-q-' + idx);
        radios.forEach(r => {
          r.checked = false;
          r.disabled = false;
        });
        const labels = document.querySelectorAll('.arena-opt-label-' + idx);
        labels.forEach(label => {
          label.className = 'arena-opt-label-' + idx + ' flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-emerald-400 transition text-xs text-slate-700 dark:text-slate-300';
        });
        const explain = document.getElementById('arena-explain-' + idx);
        if (explain) explain.classList.add('hidden');
      });
    }

    // 5. Search Modal Logic (Ctrl+K)
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const searchIndex = [
      { id: 1, title: 'Bài 1. Bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa sau năm 1975', kw: 'tây nam pol pot campuchia phnom penh biên giới phía bắc vị xuyên 1979 hoàng sa trường sa unclos 1982 gạc ma' },
      { id: 2, title: 'Bài 2. Tổ chức Quân đội nhân dân và Công an nhân dân', kw: 'cơ cấu quân chủng binh chủng cấp bậc sĩ quan 12 bậc quân hàm cầu vai công an hiệu cảnh sát' },
      { id: 3, title: 'Bài 3. Tuyển sinh, đào tạo trong các trường Quân đội và Công an', kw: 'sơ tuyển học viện an ninh lục quân quân y sức khỏe lí lịch chính trị chế độ đãi ngộ' },
      { id: 4, title: 'Bài 4. “Diễn biến hòa bình”, bạo loạn lật đổ', kw: 'phi quân sự phi chính trị hóa thế trận lòng dân fake news an ninh mạng 5 bước ứng xử' },
      { id: 5, title: 'Bài 5. Truyền thống, nghệ thuật giữ nước của địa phương', kw: 'bộ đội địa phương dân quân tự vệ dqtv du kích toàn dân đánh giặc chiến tranh nhân dân' },
      { id: 6, title: 'Bài 6. Kĩ thuật bắn súng tiểu liên AK', kw: 'ngắm bắn khe ngắm đầu ngắm đường ngắm cơ bản đường ngắm đúng ăn cao ăn thấp 5 nguyên tắc an toàn' },
      { id: 7, title: 'Bài 7. Tìm và giữ phương hướng', kw: 'la bàn mặt trời bóng cọc sao bắc cực chòm đại hùng rêu thân cây bản đồ địa hình phương vị' },
      { id: 8, title: 'Bài 8. Tư thế, động tác vận động trong chiến đấu', kw: 'vật che khuất vật che đỡ đi khom chạy khom vọt tiến bò lê trườn lăn bộc phá' },
      { id: 9, title: 'Bài 9. Chạy vũ trang', kw: 'chạy vũ trang 1500m 3000m mang súng nhịp thở 2-2 3-3 cực điểm say nóng say nắng hồi tĩnh rice' }
    ];

    function openSearchModal() {
      searchModal.classList.remove('hidden');
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    }

    function closeSearchModal() {
      searchModal.classList.add('hidden');
    }

    function renderSearchResults(query) {
      const q = query.toLowerCase().trim();
      const filtered = searchIndex.filter(item => {
        if (!q) return true;
        return item.title.toLowerCase().includes(q) || item.kw.toLowerCase().includes(q);
      });

      if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="p-4 text-center text-xs text-slate-400">Không tìm thấy kết quả phù hợp.</div>';
        return;
      }

      searchResults.innerHTML = filtered.map(item => 
        '<a href="#bai-' + item.id + '" onclick="closeSearchModal()" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition text-xs">' +
          '<span class="font-bold text-slate-800 dark:text-slate-200">' + item.title + '</span>' +
          '<span class="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Xem ngay →</span>' +
        '</a>'
      ).join('');
    }

    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
        closeSearchModal();
      }
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  </script>
</body>
</html>
  `;
}

// Write to all 4 aliases
const targetFiles = [
  'courses/gdqp_12.html',
  'courses/quocphong_12.html',
  'courses/gdqp12.html',
  'courses/quocphong12.html'
];

const fullHtml = buildPageHtml();
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

targetFiles.forEach(relPath => {
  const fullPath = path.join(baseDir, relPath);
  fs.writeFileSync(fullPath, fullHtml, 'utf8');
  console.log(`[OK] Generated: ${relPath} (${fullHtml.length} bytes)`);
});
