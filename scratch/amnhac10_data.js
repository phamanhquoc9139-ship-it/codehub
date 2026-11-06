// scratch/amnhac10_data.js
// Dữ liệu nội dung chi tiết môn Âm Nhạc Lớp 10 (Chuẩn SGK Kết Nối Tri Thức)

const part1_general = [
  {
    "id": "chu-de-1",
    "number": "Chủ đề 1",
    "title": "Giai điệu quê hương",
    "page": "Trang 6",
    "badge": "Phần một • Kiến thức chung",
    "subtitle": "Quãng hòa thanh & giai điệu • Gam Son trưởng • Dân ca Bắc Bộ • Ca khúc cách mạng",
    "intro": "Mở đầu chương trình Âm nhạc 10 bằng bức tranh quê hương tươi đẹp qua việc khám phá hệ thống các loại quãng, thực hành đọc gam Son trưởng, thưởng thức giai điệu dân ca Đèn cù và ca khúc trữ tình cách mạng miền núi phía Bắc.",
    "strands": [
      {
        "strandName": "Lí thuyết âm nhạc",
        "heading": "Một số loại quãng và tính chất của quãng",
        "icon": "fa-solid fa-lines-leaning",
        "staffKey": "intervals_demo",
        "content": "\n          <div class=\"space-y-3\">\n            <p><strong>Quãng (Interval)</strong> trong âm nhạc là khoảng cách về độ cao giữa hai âm thanh. Các khái niệm cốt lõi cần nắm vững:</p>\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3\">\n              <div class=\"p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40\">\n                <h5 class=\"font-black text-rose-800 dark:text-rose-300 text-xs mb-1.5 flex items-center gap-1.5\">\n                  <i class=\"fa-solid fa-layer-group\"></i> 1. Quãng hòa thanh & Quãng giai điệu\n                </h5>\n                <ul class=\"text-xs space-y-1 text-slate-700 dark:text-slate-300\">\n                  <li>• <strong>Quãng hòa thanh:</strong> hai âm vang lên <em>đồng thời</em> (cùng một lúc). Âm phía dưới gọi là <strong>âm gốc</strong>, âm phía trên gọi là <strong>âm ngọn</strong>.</li>\n                  <li>• <strong>Quãng giai điệu:</strong> hai âm vang lên <em>nối tiếp nhau</em> theo hướng đi lên hoặc đi xuống.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n                <h5 class=\"font-black text-blue-800 dark:text-blue-300 text-xs mb-1.5 flex items-center gap-1.5\">\n                  <i class=\"fa-solid fa-arrows-left-right\"></i> 2. Quãng đơn & Quãng Diatonic\n                </h5>\n                <ul class=\"text-xs space-y-1 text-slate-700 dark:text-slate-300\">\n                  <li>• <strong>Quãng đơn:</strong> quãng được cấu tạo trong phạm vi một quãng tám (từ quãng 1 đến quãng 8).</li>\n                  <li>• <strong>Quãng diatonic (quãng cơ bản):</strong> được hình thành giữa các bậc cơ bản của hàng âm trong điệu thức.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40\">\n              <h5 class=\"font-black text-emerald-800 dark:text-emerald-300 text-xs mb-1.5 flex items-center gap-1.5\">\n                <i class=\"fa-solid fa-ear-listen\"></i> 3. Tính chất quãng: Quãng thuận & Quãng nghịch\n              </h5>\n              <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300\">\n                <div>\n                  <strong class=\"text-emerald-700 dark:text-emerald-300\">• Quãng thuận:</strong> Hai âm hòa hợp, tạo cảm giác êm dịu, thoải mái cho tai người nghe (ví dụ: Quãng 1 đúng, 3 trưởng/thứ, 5 đúng, 6 trưởng/thứ, 8 đúng).\n                </div>\n                <div>\n                  <strong class=\"text-amber-700 dark:text-amber-300\">• Quãng nghịch:</strong> Hai âm chưa hòa hợp, tạo cảm giác căng thẳng, gay gắt (ví dụ: Quãng 2, quãng 7, các quãng tăng/giảm); thường được xử lí để giải quyết về quãng ổn định.\n                </div>\n              </div>\n            </div>\n\n            <div class=\"p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl text-xs text-amber-900 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/50\">\n              <strong><i class=\"fa-solid fa-lightbulb\"></i> Lưu ý khi phân tích đoạn nhạc:</strong> Cần xác định chính xác hai âm, khoảng cách cung và nửa cung, cách vang (đồng thời hay nối tiếp), hướng đi và cảm giác hòa hợp chứ không chỉ đơn thuần dựa vào tên nốt nhạc.\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Đọc nhạc",
        "heading": "Luyện gam Son trưởng & Bài đọc nhạc số 1",
        "icon": "fa-solid fa-book-open-reader",
        "staffKey": "g_major_scale",
        "staffKey2": "reading_1",
        "content": "\n          <div class=\"space-y-3\">\n            <p><strong>Giọng Son trưởng (G major):</strong></p>\n            <ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300\">\n              <li>Có <strong>hóa biểu gồm một dấu thăng (Fa♯)</strong> đặt cố định tại dòng kẻ thứ năm của khuông nhạc khóa Sol.</li>\n              <li><strong>Âm chủ</strong> là nốt <strong>Son (G)</strong>. Hàng âm từ bậc I đến bậc VII: $G - A - B - C - D - E - F\\sharp - G$.</li>\n              <li><strong>Các âm ổn định</strong> tạo thành hợp âm chủ: Bậc I (Son), Bậc III (Si), Bậc V (Rê).</li>\n            </ul>\n            <div class=\"p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs text-slate-700 dark:text-slate-300\">\n              <strong>Nhiệm vụ thực hành Bài đọc nhạc số 1:</strong> Đọc đúng cao độ, trường độ các nốt ở nhịp 2/4; kết hợp gõ phách và đánh nhịp 2/4. Luyện quãng 2 theo mẫu tiết tấu và tạo bè thứ hai đơn giản từ những quãng hòa thanh thuận (quãng 3, quãng 5). Có thể dùng recorder, kèn phím melodica hoặc ukulele để thể hiện bè.\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Hát",
        "heading": "Dân ca đồng bằng Bắc Bộ: “Đèn cù”",
        "icon": "fa-solid fa-microphone-lines",
        "staffKey": "song_dencu",
        "content": "\n          <div class=\"space-y-3\">\n            <p><strong>Xuất xứ & Tính chất:</strong> Bài hát thuộc kho tàng dân ca đồng bằng Bắc Bộ; nhịp độ nhanh vừa, vui hoạt; lời thơ gợi hình ảnh chiếc đèn kéo quân xoay tròn rộn rã trong đêm hội trăng rằm Trung thu.</p>\n            <div class=\"p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40 text-xs space-y-1.5 text-slate-700 dark:text-slate-300\">\n              <p class=\"font-bold text-rose-800 dark:text-rose-300\">Kĩ thuật thanh nhạc cần rèn luyện:</p>\n              <p>• Khởi động giọng bằng các mẫu âm liền bậc (Sol - La - Si - Đô - Rê).</p>\n              <p>• Giữ khẩu hình miệng mềm mại, cơ hàm thả lỏng; lấy hơi nhanh, nhẹ tại các dấu câu hoặc dấu lặng.</p>\n              <p>• Phát âm rõ lời, tròn vành rõ chữ; thể hiện đúng các nốt luyến láy dân ca dí dỏm.</p>\n            </div>\n            <p class=\"text-xs text-slate-600 dark:text-slate-400\"><strong>Vận dụng sáng tạo:</strong> Tìm một bài dân ca Nam Bộ (ví dụ: <em>Lí cây bông</em>, <em>Lí ngựa ô</em>), trình bày theo hình thức đơn ca hoặc tốp ca kết hợp gõ đệm cơ thể (body percussion).</p>\n          </div>\n        "
      },
      {
        "strandName": "Nhạc cụ & Nghe nhạc",
        "heading": "Gõ đệm tiết tấu & Thưởng thức “Tiếng hát giữa rừng Pác Bó”",
        "icon": "fa-solid fa-drum",
        "content": "\n          <div class=\"space-y-3\">\n            <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs\">\n              <h5 class=\"font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2\">\n                <i class=\"fa-solid fa-hands-clapping text-blue-500\"></i> Thực hành Nhạc cụ gõ đệm\n              </h5>\n              <p class=\"text-slate-700 dark:text-slate-300\">Luyện mẫu tiết tấu đệm nhịp 2/4 bằng thanh phách, trống con hoặc động tác cơ thể (vỗ tay, gõ đùi, giậm chân). Ghép phần đệm với Bài đọc nhạc số 1 và bài dân ca <em>Đèn cù</em>, yêu cầu giữ tốc độ đều, phách 1 nhấn mạnh, phách 2 nhẹ, không lấn át giai điệu chính.</p>\n            </div>\n\n            <div class=\"p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n              <h5 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n                <i class=\"fa-solid fa-headphones text-emerald-600\"></i> Tác phẩm nghe nhạc: “Tiếng hát giữa rừng Pác Bó”\n              </h5>\n              <ul class=\"space-y-1 text-slate-700 dark:text-slate-300\">\n                <li>• <strong>Tác giả:</strong> Nhạc và lời của nhạc sĩ <strong>Nguyễn Tài Tuệ</strong>, sáng tác năm 1959.</li>\n                <li>• <strong>Tính chất:</strong> Giai điệu trữ tình, trong sáng, tha thiết; sử dụng nhuần nhuyễn chất liệu dân ca của đồng bào dân tộc Tày, Nùng miền núi phía Bắc.</li>\n                <li>• <strong>Hình tượng:</strong> Vẽ nên khung cảnh thiên nhiên Pác Bó (Cao Bằng) hùng vĩ, tiếng suối reo hòa cùng niềm tin son sắt và tình cảm kính yêu vô bờ dành cho Chủ tịch Hồ Chí Minh.</li>\n              </ul>\n            </div>\n          </div>\n        "
      }
    ],
    "quiz": [
      {
        "q": "Quãng hòa thanh trong âm nhạc là gì?",
        "options": [
          "Hai âm vang lên đồng thời cùng một lúc",
          "Hai âm vang lên nối tiếp nhau đi lên",
          "Hai âm cách nhau đúng một quãng tám",
          "Hai âm thuộc hai giọng khác nhau"
        ],
        "ans": 0,
        "exp": "Quãng hòa thanh được định nghĩa là hai âm vang lên đồng thời. Âm dưới là âm gốc, âm trên là âm ngọn."
      },
      {
        "q": "Giọng Son trưởng (G major) có hóa biểu gồm dấu hóa nào?",
        "options": [
          "Một dấu thăng Fa♯",
          "Một dấu giáng Si♭",
          "Hai dấu thăng Fa♯ và Đô♯",
          "Không có dấu thăng hay dấu giáng"
        ],
        "ans": 0,
        "exp": "Giọng Son trưởng có hóa biểu gồm duy nhất một dấu thăng Fa♯ đặt tại dòng kẻ thứ năm trên khuông nhạc khóa Sol."
      },
      {
        "q": "Tác phẩm nghe nhạc “Tiếng hát giữa rừng Pác Bó” do nhạc sĩ nào sáng tác?",
        "options": [
          "Nguyễn Tài Tuệ (1959)",
          "Văn Cao (1944)",
          "Hoàng Hiệp (1984)",
          "Phạm Tuyên (1975)"
        ],
        "ans": 0,
        "exp": "Ca khúc “Tiếng hát giữa rừng Pác Bó” được nhạc sĩ Nguyễn Tài Tuệ sáng tác vào năm 1959, mang đậm âm hưởng dân ca miền núi phía Bắc."
      }
    ]
  },
  {
    "id": "chu-de-2",
    "number": "Chủ đề 2",
    "title": "Cuộc sống mến thương",
    "page": "Trang 15",
    "badge": "Phần một • Kiến thức chung",
    "subtitle": "Điệu thức & Gam trưởng/thứ • Gam Mi thứ • Hát đuổi • Giao hưởng Beethoven",
    "intro": "Khám phá quy luật cấu tạo điệu thức, so sánh tính chất giữa giọng Son trưởng và Mi thứ, thực hành kỹ thuật hát đuổi (canon) trong ca khúc của nhạc sĩ Nguyễn Ngọc Thiện và bước đầu tiếp cận thể loại đỉnh cao của khí nhạc: Dàn nhạc giao hưởng.",
    "strands": [
      {
        "strandName": "Lí thuyết âm nhạc",
        "heading": "Điệu thức, giọng trưởng và giọng thứ",
        "icon": "fa-solid fa-chart-line",
        "staffKey": "e_minor_scale",
        "content": "\n          <div class=\"space-y-3\">\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n              <div class=\"p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl\">\n                <strong class=\"text-rose-700 dark:text-rose-400\">• Điệu thức (Mode):</strong> Là mối tương quan về cao độ giữa các âm trong một hệ thống âm thanh theo một quy luật nhất định xoay quanh âm chủ.\n              </div>\n              <div class=\"p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl\">\n                <strong class=\"text-blue-700 dark:text-blue-400\">• Gam (Scale):</strong> Là sự sắp xếp bảy bậc âm của điệu thức từ thấp lên cao (hoặc ngược lại) bắt đầu từ âm chủ; mỗi âm gọi là một bậc (kí hiệu La Mã I đến VII).\n              </div>\n            </div>\n\n            <div class=\"p-3.5 bg-purple-50/70 dark:bg-purple-950/40 rounded-xl border border-purple-200/60 dark:border-purple-900/40 text-xs space-y-2 text-slate-700 dark:text-slate-300\">\n              <h5 class=\"font-black text-purple-900 dark:text-purple-300 text-xs\">Phân biệt Điệu thức Trưởng & Điệu thức Thứ:</h5>\n              <p>• <strong>Điệu thức trưởng:</strong> Ba bậc I – III – V tạo thành hợp âm ba trưởng (quãng 3 trưởng + quãng 3 thứ); tính chất âm nhạc thường <em>tươi sáng, khỏe khoắn, hùng tráng</em>.</p>\n              <p>• <strong>Điệu thức thứ:</strong> Ba bậc I – III – V tạo thành hợp âm ba thứ (quãng 3 thứ + quãng 3 trưởng); tính chất âm nhạc thường <em>mềm mại, trữ tình, sâu lắng, êm dịu</em>.</p>\n              <p>• <strong>Giọng (Key):</strong> Là điệu thức được xác định trên một cao độ cụ thể. Tên giọng = Tên âm chủ + Tên điệu thức (ví dụ: Son trưởng, Mi thứ).</p>\n            </div>\n\n            <div class=\"p-3 bg-red-50 dark:bg-red-950/30 rounded-xl text-xs text-red-900 dark:text-red-300 border border-red-200/60 dark:border-red-900/50\">\n              <strong><i class=\"fa-solid fa-triangle-exclamation\"></i> Quy tắc xác định giọng:</strong> Giọng <strong>Son trưởng</strong> và <strong>Mi thứ</strong> có cùng hóa biểu một dấu thăng Fa♯ nhưng khác âm chủ (Son vs Mi) và khác tính chất âm nhạc. <em>Không bao giờ được kết luận giọng chỉ dựa vào hóa biểu</em>: phải phân tích âm chủ, nốt kết bài và các âm ổn định!\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Đọc nhạc",
        "heading": "Luyện gam Mi thứ & Bài đọc nhạc số 2",
        "icon": "fa-solid fa-book-open-reader",
        "staffKey": "reading_2",
        "content": "\n          <div class=\"space-y-3\">\n            <p><strong>Đặc điểm Bài đọc nhạc số 2:</strong> Viết ở giọng <strong>Mi thứ (E minor)</strong>, nhịp 3/4 nhịp nhàng, du dương. Luyện các bước nhảy quãng 2 và quãng 3; luyện tập nhấn phách 1 mạnh, phách 2 và 3 nhẹ.</p>\n            <div class=\"p-3.5 bg-blue-50/60 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40 text-xs space-y-1 text-slate-700 dark:text-slate-300\">\n              <p>• Luyện đọc theo cao độ, trường độ và các kí hiệu sắc thái trong bài.</p>\n              <p>• Kết hợp gõ đệm phách hoặc vỗ tay theo mẫu tiết tấu 3/4.</p>\n              <p>• Hoạt động sáng tạo: Nhận biết cấu trúc câu nhạc và thử tạo giai điệu mới ở giọng Son trưởng trên mẫu tiết tấu đã cho.</p>\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Hát & Hòa tấu",
        "heading": "“Ơi cuộc sống mến thương” & Kĩ thuật Hát đuổi",
        "icon": "fa-solid fa-microphone-lines",
        "staffKey": "song_cuocsongmenthuong",
        "content": "\n          <div class=\"space-y-3\">\n            <p><strong>Tác phẩm:</strong> <em>Ơi cuộc sống mến thương</em> — Nhạc và lời của nhạc sĩ <strong>Nguyễn Ngọc Thiện</strong> (sáng tác năm 1978). Bài hát có tính chất vui tươi, rộn rã, lời ca bình dị, khích lệ tinh thần lạc quan yêu đời của thế hệ trẻ.</p>\n            <div class=\"p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-2 text-slate-700 dark:text-slate-300\">\n              <h5 class=\"font-bold text-emerald-800 dark:text-emerald-300\">Kĩ thuật Hát đuổi (Canon) & Hòa tấu:</h5>\n              <p>• <strong>Hát đuổi:</strong> Chia lớp thành hai nhóm; nhóm 1 hát trước, nhóm 2 hát đuổi theo sau một khoảng cách phách/nhịp nhất định. Yêu cầu lắng nghe nhóm bạn, giữ nhịp vững, vào bè chuẩn xác và duy trì âm lượng cân bằng.</p>\n              <p>• <strong>Hòa tấu:</strong> Phối hợp nhạc cụ gõ đệm tiết tấu cùng nhạc cụ giai điệu (ukulele, recorder, kèn phím). Người chỉ huy báo hiệu nhịp vào và kết thúc thống nhất.</p>\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Thường thức âm nhạc",
        "heading": "Thể loại Giao hưởng & “Giao hưởng Đồng quê” (Beethoven)",
        "icon": "fa-solid fa-landmark",
        "staffKey": "beethoven_pastoral",
        "content": "\n          <div class=\"space-y-3\">\n            <p><strong>Thể loại Giao hưởng (Symphony):</strong> Là thể loại khí nhạc quy mô lớn nhất, thường gồm bốn chương với nội dung triết học, tư tưởng sâu sắc, được trình diễn bởi Dàn nhạc giao hưởng (Orchestra).</p>\n            \n            <div class=\"p-3.5 bg-slate-900 text-white rounded-xl text-xs space-y-2\">\n              <h5 class=\"font-black text-rose-400 flex items-center gap-2\">\n                <i class=\"fa-solid fa-network-wired\"></i> Bốn bộ nhạc cụ chính của Dàn nhạc giao hưởng:\n              </h5>\n              <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px]\">\n                <div class=\"p-2 bg-slate-800 rounded-lg\">\n                  <strong class=\"text-amber-300\">1. Bộ gỗ (Woodwinds):</strong> Flute, Oboe, Clarinet, Bassoon...\n                </div>\n                <div class=\"p-2 bg-slate-800 rounded-lg\">\n                  <strong class=\"text-amber-300\">2. Bộ đồng (Brass):</strong> Horn (Kèn săn), Trumpet, Trombone, Tuba...\n                </div>\n                <div class=\"p-2 bg-slate-800 rounded-lg\">\n                  <strong class=\"text-amber-300\">3. Bộ gõ (Percussion):</strong> Timpani (Trống định âm), Cymbals, Triangle, Tam-tam...\n                </div>\n                <div class=\"p-2 bg-slate-800 rounded-lg\">\n                  <strong class=\"text-amber-300\">4. Bộ dây (Strings):</strong> Violin, Viola, Cello, Double Bass (Đại hồ cầm)...\n                </div>\n              </div>\n            </div>\n\n            <div class=\"p-3.5 bg-amber-50/70 dark:bg-amber-950/40 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-1 text-slate-700 dark:text-slate-300\">\n              <p><strong>Tác phẩm:</strong> <em>Giao hưởng số 6 giọng Fa trưởng “Đồng quê” (Pastoral Symphony, Op. 68)</em> của thiên tài âm nhạc người Đức <strong>Ludwig van Beethoven</strong> (viết năm 1805–1808). Tác phẩm độc đáo có năm chương miêu tả bức tranh thiên nhiên làng quê, tiếng chim hót, suối reo, cơn dông bão và niềm vui hân hoan của người nông dân.</p>\n            </div>\n          </div>\n        "
      }
    ],
    "quiz": [
      {
        "q": "Điệu thức trưởng và điệu thức thứ khác nhau cơ bản ở điểm nào?",
        "options": [
          "Bậc I – III – V tạo thành hợp âm ba trưởng (sáng) ở điệu trưởng, hợp âm ba thứ (mềm mại) ở điệu thứ",
          "Điệu thức trưởng có 8 âm, điệu thức thứ chỉ có 5 âm",
          "Điệu thức trưởng luôn có dấu thăng, điệu thức thứ luôn có dấu giáng",
          "Điệu thức trưởng chỉ chơi bằng đàn piano"
        ],
        "ans": 0,
        "exp": "Khác biệt cốt lõi: Hợp âm ba tạo bởi các bậc I - III - V là hợp âm ba trưởng (tính chất sáng, khỏe khoắn) đối với điệu trưởng, và là hợp âm ba thứ (tính chất mềm mại, êm dịu) đối với điệu thứ."
      },
      {
        "q": "Dàn nhạc giao hưởng tiêu chuẩn gồm có bao nhiêu bộ nhạc cụ chính?",
        "options": [
          "4 bộ: Bộ dây, Bộ gỗ, Bộ đồng, Bộ gõ",
          "3 bộ: Bộ gõ, Bộ dây, Bộ phím",
          "5 bộ: Bộ gõ, Bộ đồng, Bộ gỗ, Bộ điện tử, Bộ hơi",
          "2 bộ: Bộ gõ và Bộ dây"
        ],
        "ans": 0,
        "exp": "Dàn nhạc giao hưởng được biên chế thành 4 bộ nhạc cụ chính: Bộ gỗ (Woodwinds), Bộ đồng (Brass), Bộ gõ (Percussion) và Bộ dây (Strings)."
      },
      {
        "q": "Giao hưởng số 6 “Đồng quê” của Ludwig van Beethoven được viết ở giọng nào?",
        "options": [
          "Fa trưởng (F major)",
          "Đô trưởng (C major)",
          "Son trưởng (G major)",
          "Rê thứ (D minor)"
        ],
        "ans": 0,
        "exp": "Giao hưởng số 6 mang tiêu đề “Đồng quê” (Pastoral Symphony) của Beethoven được sáng tác ở giọng Fa trưởng (F major), hóa biểu có một dấu giáng Si♭."
      }
    ]
  },
  {
    "id": "chu-de-3",
    "number": "Chủ đề 3",
    "title": "Về miền kí ức",
    "page": "Trang 25",
    "badge": "Phần một • Kiến thức chung",
    "subtitle": "Nhận biết giọng Son trưởng & Mi thứ • Bài đọc nhạc số 3 • Kỉ niệm tuổi thơ",
    "intro": "Khắc sâu kĩ năng nhận diện giọng qua thực hành phân tích hóa biểu và âm kết; thể hiện cảm xúc trong sáng của tuổi học trò qua ca khúc của nhạc sĩ Hồng Đăng và lắng đọng với dòng sông quê hương qua sáng tác của nhạc sĩ Hoàng Hiệp.",
    "strands": [
      {
        "strandName": "Lí thuyết âm nhạc",
        "heading": "Phương pháp nhận biết giọng Son trưởng và Mi thứ",
        "icon": "fa-solid fa-magnifying-glass-chart",
        "content": "\n          <div class=\"space-y-3\">\n            <p class=\"text-xs text-slate-700 dark:text-slate-300\">Mặc dù dùng chung một hóa biểu <strong>Fa♯</strong>, hai giọng có đặc điểm nhận dạng hoàn toàn khác biệt:</p>\n            \n            <div class=\"overflow-x-auto\">\n              <table class=\"w-full text-xs border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden\">\n                <thead class=\"bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold\">\n                  <tr>\n                    <th class=\"p-2.5 text-left border-b border-slate-200 dark:border-slate-700\">Tiêu chí so sánh</th>\n                    <th class=\"p-2.5 text-left border-b border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400\">Giọng Son trưởng (G)</th>\n                    <th class=\"p-2.5 text-left border-b border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400\">Giọng Mi thứ (Em)</th>\n                  </tr>\n                </thead>\n                <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300\">\n                  <tr>\n                    <td class=\"p-2.5 font-bold\">Hóa biểu</td>\n                    <td class=\"p-2.5\">1 dấu thăng (Fa♯)</td>\n                    <td class=\"p-2.5\">1 dấu thăng (Fa♯)</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2.5 font-bold\">Âm chủ (Bậc I)</td>\n                    <td class=\"p-2.5 font-bold text-rose-600\">Nốt Son (G)</td>\n                    <td class=\"p-2.5 font-bold text-blue-600\">Nốt Mi (E)</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2.5 font-bold\">Nốt kết thúc bài</td>\n                    <td class=\"p-2.5\">Thường kết thúc ở nốt <strong>Son</strong></td>\n                    <td class=\"p-2.5\">Thường kết thúc ở nốt <strong>Mi</strong></td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2.5 font-bold\">Tính chất giai điệu</td>\n                    <td class=\"p-2.5\">Tươi sáng, vui tươi, rộn rã</td>\n                    <td class=\"p-2.5\">Trầm ấm, mềm mại, sâu lắng</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <p class=\"text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200/60 dark:border-amber-900/40\">\n              <strong>Ghi nhớ:</strong> Hai giọng có cùng hóa biểu gọi là <strong>cặp giọng song song</strong>. Khoảng cách giữa âm chủ của giọng thứ và âm chủ của giọng trưởng song song luôn là <strong>quãng 3 thứ (1,5 cung)</strong>: Mi cách Son một quãng 3 thứ.\n            </p>\n          </div>\n        "
      },
      {
        "strandName": "Đọc nhạc",
        "heading": "Luyện gam Mi thứ & Bài đọc nhạc số 3",
        "icon": "fa-solid fa-book-open-reader",
        "staffKey": "reading_3",
        "content": "\n          <div class=\"space-y-3\">\n            <p class=\"text-xs text-slate-700 dark:text-slate-300\"><strong>Bài đọc nhạc số 3:</strong> Viết ở nhịp 2/4 giọng Mi thứ. Cấu trúc gồm hai câu nhạc đối xứng, có sự lặp lại âm hình tiết tấu và biến đổi cao độ ở đoạn kết.</p>\n            <div class=\"p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs space-y-1.5 text-slate-700 dark:text-slate-300\">\n              <p>• Đọc đúng cao độ, trường độ, các nốt hoa mĩ hoặc đảo phách.</p>\n              <p>• Phân tích điểm giống và khác nhau giữa câu 1 và câu 2.</p>\n              <p>• Trích một câu nhạc trong bài hát <em>Kỉ niệm thành phố tuổi thơ</em> để đọc nhạc kết hợp gõ đệm phách.</p>\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Hát & Nghe nhạc",
        "heading": "“Kỉ niệm thành phố tuổi thơ” & “Trở về dòng sông tuổi thơ”",
        "icon": "fa-solid fa-music",
        "content": "\n          <div class=\"space-y-3\">\n            <div class=\"p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40 text-xs\">\n              <h5 class=\"font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2\">\n                <i class=\"fa-solid fa-microphone\"></i> Hát: “Kỉ niệm thành phố tuổi thơ” (Hồng Đăng)\n              </h5>\n              <p class=\"text-slate-700 dark:text-slate-300 mb-2\">Ca khúc mang tính chất hoạt bát, tươi vui nhưng đượm cảm xúc bồi hồi nhớ về những kỉ niệm thân thương thời áo trắng. Yêu cầu giữ hơi thở đều đặn, hát nhẹ nhàng, đằm thắm; luyện hòa tấu kết hợp 3 bè: bè hát, bè nhạc cụ giai điệu và bè nhạc cụ gõ (có thể thay bè giai điệu bằng vocalise - hát bằng nguyên âm).</p>\n            </div>\n\n            <div class=\"p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40 text-xs\">\n              <h5 class=\"font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2\">\n                <i class=\"fa-solid fa-headphones\"></i> Nghe nhạc: “Trở về dòng sông tuổi thơ” (Hoàng Hiệp)\n              </h5>\n              <p class=\"text-slate-700 dark:text-slate-300\">Nhạc và lời của nhạc sĩ Hoàng Hiệp; giai điệu trữ tình, da diết, đậm đà tình quê hương xứ sở. Hình tượng dòng sông êm đềm chuyên chở bao ước mơ, kí ức ấu thơ nâng bước con người trên đường đời. Nhiệm vụ: Nêu cảm nhận cá nhân và viết một đoạn văn ngắn chia sẻ cảm xúc trên nền nhạc.</p>\n            </div>\n          </div>\n        "
      }
    ],
    "quiz": [
      {
        "q": "Khoảng cách giữa âm chủ của giọng Mi thứ và âm chủ của giọng Son trưởng song song là:",
        "options": [
          "Quãng 3 thứ (1,5 cung)",
          "Quãng 3 trưởng (2 cung)",
          "Quãng 2 trưởng (1 cung)",
          "Quãng 5 đúng (3,5 cung)"
        ],
        "ans": 0,
        "exp": "Trong các cặp giọng song song, âm chủ của giọng thứ luôn nằm thấp hơn âm chủ của giọng trưởng một quãng 3 thứ (1,5 cung): Mi cách Son 1,5 cung."
      },
      {
        "q": "Vocalise trong nghệ thuật ca hát có nghĩa là gì?",
        "options": [
          "Thể hiện giai điệu bằng nguyên âm thay cho lời ca",
          "Hát bè phụ không lời trong hợp xướng",
          "Hát rap nhanh theo tiết tấu",
          "Kĩ thuật ngân dài hơi ở cuối bài"
        ],
        "ans": 0,
        "exp": "Vocalise là kĩ thuật luyện thanh hoặc biểu diễn một giai điệu âm nhạc hoàn toàn bằng các nguyên âm (a, o, u, i...) mà không sử dụng ca từ cụ thể."
      }
    ]
  },
  {
    "id": "chu-de-4",
    "number": "Chủ đề 4",
    "title": "Giai điệu bốn phương",
    "page": "Trang 34",
    "badge": "Phần một • Kiến thức chung",
    "subtitle": "Hợp âm ba chính • Hợp xướng dân ca Nga • Lịch sử âm nhạc phương Tây",
    "intro": "Mở rộng chân trời âm nhạc với các hợp âm ba chính trên giọng Son trưởng và Mi thứ hòa thanh, thực hành đọc nhạc hai bè, thưởng thức nghệ thuật hợp xướng và cái nhìn toàn cảnh về các thời kỳ lịch sử âm nhạc phương Tây.",
    "strands": [
      {
        "strandName": "Lí thuyết âm nhạc",
        "heading": "Các hợp âm ba chính của giọng Son trưởng & Mi thứ",
        "icon": "fa-solid fa-guitar",
        "staffKey": "primary_triads",
        "content": "\n          <div class=\"space-y-3\">\n            <p class=\"text-xs text-slate-700 dark:text-slate-300\"><strong>Hợp âm ba chính</strong> là các hợp âm được xây dựng trên ba bậc cơ bản quan trọng nhất của điệu thức: <strong>Bậc I (Chủ - Tonic), Bậc IV (Hạ át - Subdominant) và Bậc V (Át - Dominant)</strong>.</p>\n            \n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n              <div class=\"p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40\">\n                <h5 class=\"font-bold text-rose-800 dark:text-rose-300 mb-1.5\">Giọng Son trưởng (G major):</h5>\n                <ul class=\"space-y-1 text-slate-700 dark:text-slate-300\">\n                  <li>• <strong>Bậc I (Chủ):</strong> Hợp âm <strong>G</strong> (Son – Si – Rê)</li>\n                  <li>• <strong>Bậc IV (Hạ át):</strong> Hợp âm <strong>C</strong> (Đô – Mi – Sol)</li>\n                  <li>• <strong>Bậc V (Át):</strong> Hợp âm <strong>D</strong> (Rê – Fa♯ – La)</li>\n                  <li class=\"pt-1 text-rose-700 dark:text-rose-400 font-semibold\">Tạo cảm giác vững vàng, sáng sủa, ổn định.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n                <h5 class=\"font-bold text-blue-800 dark:text-blue-300 mb-1.5\">Giọng Mi thứ (E minor):</h5>\n                <ul class=\"space-y-1 text-slate-700 dark:text-slate-300\">\n                  <li>• <strong>Bậc I (Chủ):</strong> Hợp âm <strong>Em</strong> (Mi – Sol – Si)</li>\n                  <li>• <strong>Bậc IV (Hạ át):</strong> Hợp âm <strong>Am</strong> (La – Đô – Mi)</li>\n                  <li>• <strong>Bậc V (Át):</strong> Trong Mi thứ tự nhiên là <strong>Bm</strong>; trong <strong>Mi thứ hòa thanh</strong> (nâng bậc VII thành Rê♯) là hợp âm <strong>B (Si trưởng)</strong> hoặc <strong>B7</strong>.</li>\n                  <li class=\"pt-1 text-blue-700 dark:text-blue-400 font-semibold\">Hợp âm B tạo lực hút hòa thanh cực mạnh về Em.</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Đọc nhạc & Hợp xướng",
        "heading": "Đọc nhạc 2 bè & Hợp xướng “Cánh đồng yên tĩnh”",
        "icon": "fa-solid fa-users",
        "staffKey": "reading_4_two_parts",
        "content": "\n          <div class=\"space-y-3\">\n            <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs\">\n              <h5 class=\"font-bold text-slate-900 dark:text-white mb-1.5\">Bài đọc nhạc số 4 (Đọc hai bè):</h5>\n              <p class=\"text-slate-700 dark:text-slate-300\">Thực hành đọc ở giọng Mi thứ hòa thanh. Phân công Bè 1 (nữ cao/nam cao) và Bè 2 (nữ trầm/nam trầm); chú ý lắng nghe độ hòa quyện giữa các quãng 3 và quãng 6 hòa thanh.</p>\n            </div>\n\n            <div class=\"p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n              <h5 class=\"font-bold text-emerald-800 dark:text-emerald-300 mb-1.5\">Hợp xướng: “Cánh đồng yên tĩnh” (Dân ca Nga):</h5>\n              <p class=\"text-slate-700 dark:text-slate-300 mb-1.5\">Lời dịch tiếng Việt: Hoàng Long; chuyển soạn hợp xướng: Xuân Cung. Giai điệu chậm rãi, nhẹ nhàng, sâu lắng, vẽ nên không gian cánh đồng tuyết trắng bạt ngàn của nước Nga.</p>\n              <p class=\"text-slate-700 dark:text-slate-300\">Yêu cầu tập hát riêng từng bè, giữ vững cao độ, dùng vocalise làm quen âm hưởng trước khi ghép lời, không để nhạc cụ đệm lấn át tiếng hát hợp xướng.</p>\n            </div>\n          </div>\n        "
      },
      {
        "strandName": "Thường thức âm nhạc",
        "heading": "Một số giai đoạn lịch sử âm nhạc phương Tây",
        "icon": "fa-solid fa-timeline",
        "content": "\n          <div class=\"space-y-3\">\n            <p class=\"text-xs text-slate-700 dark:text-slate-300\">Bảng tóm tắt các thời kỳ phát triển rực rỡ của âm nhạc cổ điển phương Tây được giới thiệu trong SGK:</p>\n            \n            <div class=\"overflow-x-auto\">\n              <table class=\"w-full text-xs border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden\">\n                <thead class=\"bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold\">\n                  <tr>\n                    <th class=\"p-2 text-left border-b border-slate-200 dark:border-slate-700\">Thời kì</th>\n                    <th class=\"p-2 text-left border-b border-slate-200 dark:border-slate-700\">Đặc điểm khái quát</th>\n                    <th class=\"p-2 text-left border-b border-slate-200 dark:border-slate-700\">Nhạc sĩ tiêu biểu</th>\n                  </tr>\n                </thead>\n                <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300\">\n                  <tr>\n                    <td class=\"p-2 font-bold\">Nguyên thủy</td>\n                    <td class=\"p-2\">Mô phỏng âm thanh tự nhiên; nhạc cụ gõ xuất hiện sớm</td>\n                    <td class=\"p-2 text-slate-400\">—</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Hy Lạp cổ đại</td>\n                    <td class=\"p-2\">Âm nhạc gắn với toán học, thang âm, đàn Lyre, Cithara</td>\n                    <td class=\"p-2 font-semibold\">Pythagoras</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Trung cổ</td>\n                    <td class=\"p-2\">Hình thành hệ thống kí hiệu nốt; âm nhạc nhà thờ, phức điệu</td>\n                    <td class=\"p-2 text-slate-400\">—</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Phục hưng</td>\n                    <td class=\"p-2\">Quan tâm điệu thức, hòa âm, đỉnh cao nghệ thuật phức điệu</td>\n                    <td class=\"p-2 font-semibold\">Orlando di Lasso</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Baroque (Tiền cổ điển)</td>\n                    <td class=\"p-2\">Âm nhạc phức điệu đạt đỉnh cao; hình thành nhạc kịch (Opera)</td>\n                    <td class=\"p-2 font-semibold\">J. S. Bach, Handel, Vivaldi</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Cổ điển</td>\n                    <td class=\"p-2\">Âm nhạc chủ điệu, định hình dàn giao hưởng, hình thức Sonate</td>\n                    <td class=\"p-2 font-semibold\">Haydn, Mozart, Beethoven</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Lãng mạn</td>\n                    <td class=\"p-2\">Đề cao cảm xúc cá nhân; giao hưởng thơ, ca khúc thính phòng</td>\n                    <td class=\"p-2 font-semibold\">Schubert, Chopin, Mendelssohn, Liszt</td>\n                  </tr>\n                  <tr>\n                    <td class=\"p-2 font-bold\">Thế kỉ XX</td>\n                    <td class=\"p-2\">Trường phái đa dạng: Ấn tượng, Biểu hiện, Tân cổ điển, Tiền phong</td>\n                    <td class=\"p-2 font-semibold\">Debussy, Ravel, Stravinsky, John Cage</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <div class=\"p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-xs text-purple-900 dark:text-purple-300 border border-purple-200/60 dark:border-purple-900/40\">\n              <strong>Tác phẩm nghe nhạc:</strong> <em>“Bài ca người chèo thuyền thành Venice” (Venetian Boat Song)</em> của Felix Mendelssohn — tiểu phẩm piano trích trong tuyển tập <em>Những bài ca không lời</em>; phần đệm tay trái nhịp nhàng gợi hình ảnh mái chèo lướt trên sóng nước Venice thơ mộng.\n            </div>\n          </div>\n        "
      }
    ],
    "quiz": [
      {
        "q": "Trong giọng Mi thứ hòa thanh, hợp âm át (bậc V) là hợp âm nào?",
        "options": [
          "Hợp âm B (Si trưởng) do bậc VII nâng lên thành Rê♯",
          "Hợp âm Bm (Si thứ) tự nhiên",
          "Hợp âm Em (Mi thứ)",
          "Hợp âm C (Đô trưởng)"
        ],
        "ans": 0,
        "exp": "Trong giọng Mi thứ hòa thanh, bậc VII (Rê) được nâng cao nửa cung thành Rê♯, biến hợp âm ba bậc V từ Si thứ (B-D-F#) thành hợp âm Si trưởng (B-D#-F#), tạo sức hút giải quyết mạnh về hợp âm chủ Em."
      },
      {
        "q": "Giai đoạn âm nhạc nào gắn liền với các tên tuổi vĩ đại: Haydn, Mozart và Beethoven?",
        "options": [
          "Thời kì Cổ điển (Classical period)",
          "Thời kì Baroque (Tiền cổ điển)",
          "Thời kì Lãng mạn (Romantic period)",
          "Thời kì Phục hưng (Renaissance)"
        ],
        "ans": 0,
        "exp": "Ba đại diện kiệt xuất nhất của trường phái cổ điển Vienna (thời kì Cổ điển) là Joseph Haydn, Wolfgang Amadeus Mozart và Ludwig van Beethoven."
      }
    ]
  }
];

const part2_singing = [
  {
    "id": "hat-bai-1",
    "number": "Bài 1 (Hát)",
    "title": "Tư thế hát và miệng hát",
    "page": "Trang 48",
    "badge": "Lựa chọn A • Thanh nhạc",
    "subtitle": "Tư thế đứng/ngồi • Khẩu hình nguyên âm Ô, A, Ê • Hát ru Schubert • Hát với chú ve con",
    "staffKey": "vocal_exercise_1",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-rose-50/80 dark:bg-rose-950/40 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 text-xs\">\n          <strong class=\"text-rose-800 dark:text-rose-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-rose-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 48):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Biết và thực hiện đúng tư thế chuẩn mực khi đứng hát và ngồi hát; giữ cơ thể thoải mái, tự nhiên.</li>\n            <li>Hiểu cơ chế và mở đúng khẩu hình miệng khi phát âm các nguyên âm cơ bản: <strong>Ô, A, Ê</strong>.</li>\n            <li>Hát đúng cao độ, trường độ, sắc thái bài <em>Hát ru</em> (F. Schubert) và bài <em>Hát với chú ve con</em> (Thanh Tùng).</li>\n          </ul>\n        </div>\n\n        <!-- 1. Tư thế hát -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-person text-base\"></i> 1. Kĩ thuật Tư thế hát chuẩn xác\n          </h5>\n          <p>Tư thế đúng là nền tảng giúp cột hơi lưu thông tự do từ bụng lên vòm họng, giải phóng các cơ thanh quản và tạo vẻ đẹp thẩm mĩ khi biểu diễn:</p>\n          <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-1\">• Tư thế đứng hát:</strong>\n              <p>Lưng và đầu giữ thẳng tự nhiên, mắt nhìn về phía khán giả; hai chân mở rộng ngang vai tạo trọng tâm vững vàng ở vùng thắt lưng; hai vai thả lỏng, không gồng cứng hay ưỡn ngực quá mức; hai tay buông nhẹ hoặc đan tự nhiên phía trước rốn.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-1\">• Tư thế ngồi hát:</strong>\n              <p>Lưng thẳng, ngực mở tự nhiên, không tì sát hay dựa lưng vào thành ghế; hai đùi đặt song song, hai bàn chân tiếp xúc phẳng với mặt sàn; hai tay để nhẹ nhàng trên đùi.</p>\n            </div>\n          </div>\n          <p class=\"text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40\">\n            <strong>Lưu ý khởi động:</strong> Trước khi hát, hãy thực hiện các động tác thả lỏng cơ mặt, xoay nhẹ khớp cổ, massage nhẹ hai bên hàm dưới để môi, lưỡi và hàm hoàn toàn mềm mại.\n          </p>\n        </div>\n\n        <!-- 2. Khẩu hình miệng hát -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-blue-600 dark:text-blue-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-face-smile text-base\"></i> 2. Kĩ thuật mở khẩu hình theo các nguyên âm Ô, A, Ê\n          </h5>\n          <p>Khẩu hình quyết định màu sắc, độ vang và khoảng không gian cộng hưởng của giọng hát:</p>\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40\">\n              <strong class=\"text-rose-800 dark:text-rose-300 block mb-1 font-bold\">Nguyên âm Ô:</strong>\n              <p>Miệng mở tròn, môi hơi nhô nhẹ về phía trước tạo hình phễu, nâng cao vòm họng mềm phía sau; tạo ra âm thanh tròn trịa, ấm áp và có chiều sâu.</p>\n            </div>\n            <div class=\"p-3 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n              <strong class=\"text-blue-800 dark:text-blue-300 block mb-1 font-bold\">Nguyên âm A:</strong>\n              <p>Miệng mở rộng tự nhiên theo chiều dọc (độ mở khoảng 2 ngón tay); khi lên nốt cao, nâng nhẹ môi trên để âm thanh thoát ra sáng rõ, tuyệt đối không bẹt miệng ép hàm dưới.</p>\n            </div>\n            <div class=\"p-3 bg-purple-50/70 dark:bg-purple-950/40 rounded-xl border border-purple-200/60 dark:border-purple-900/40\">\n              <strong class=\"text-purple-800 dark:text-purple-300 block mb-1 font-bold\">Nguyên âm Ê:</strong>\n              <p>Mép miệng mở theo chiều ngang vừa phải, vòm họng vẫn duy trì khoảng vang trên; nét mặt tươi sáng, phát âm nhẹ nhàng, không để âm thanh bị the thé.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 3. Tác phẩm thực hành -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-music text-base\"></i> 3. Hướng dẫn thực hành ca khúc SGK\n          </h5>\n          <div class=\"space-y-2 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-0.5\">• Bài hát “Hát ru” (Wiegenlied) – Franz Schubert (lời Việt: Trung Kiên):</strong>\n              <p>Nhịp độ chậm rãi, êm dịu, tình cảm; rèn luyện kĩ thuật hát liền tiếng (legato), giữ hơi thở đều đặn và thể hiện âm thanh mềm mại, trong trẻo như lời mẹ ru con vào giấc ngủ êm đềm.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-0.5\">• Bài hát “Hát với chú ve con” – Nhạc & lời: Thanh Tùng:</strong>\n              <p>Nhịp độ hơi nhanh, tươi vui, hóm hỉnh; đòi hỏi người hát chuyển đổi khẩu hình mau lẹ giữa các nguyên âm liên tiếp, giữ hơi nhẹ nhàng, nét mặt rạng rỡ.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Vận dụng -->\n        <div class=\"p-3.5 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n          <strong class=\"text-emerald-900 dark:text-emerald-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-compass-drafting text-emerald-600 mr-1\"></i> NHIỆM VỤ VẬN DỤNG & SÁNG TẠO:\n          </strong>\n          <p>Đứng trước gương thực hành phát âm các nguyên âm Ô – A – Ê ở các cao độ khác nhau; tự quan sát khẩu hình miệng và ghi âm lại để so sánh độ vang của âm thanh khi mở miệng đúng cách.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Tư thế đứng hát chuẩn xác trong nghệ thuật thanh nhạc đòi hỏi:",
        "options": [
          "Lưng và đầu thẳng tự nhiên, hai chân mở rộng ngang vai, cơ thể vững ở thắt lưng, vai thả lỏng",
          "Cúi gập lưng và gồng cứng cơ vai để lấy lực",
          "Đứng chéo chân và ngửa cổ tối đa lên trần nhà",
          "Nghiêng người sang một bên để nghe rõ âm thanh"
        ],
        "ans": 0,
        "exp": "Tư thế chuẩn mực: lưng thẳng, đầu ngay ngắn, 2 chân mở rộng ngang vai tạo thế đứng vững vàng ở thắt lưng, 2 vai thả lỏng giúp cột hơi lưu thông tự nhiên."
      },
      {
        "q": "Khi hát các nốt cao với nguyên âm A, người hát cần lưu ý điều gì về khẩu hình?",
        "options": [
          "Mở rộng miệng theo chiều dọc, nâng nhẹ môi trên để âm thanh thoát sáng và không gồng cứng hàm",
          "Mở bè miệng tối đa sang hai bên tai",
          "Khép chặt môi chỉ hé một khe nhỏ",
          "Gập cằm sát ngực để nén âm thanh"
        ],
        "ans": 0,
        "exp": "Ở nốt cao với nguyên âm A, phải mở khẩu hình theo chiều dọc và nâng nhẹ môi trên để mở rộng khoang họng, tránh bẹt miệng làm âm thanh bị chói gắt."
      },
      {
        "q": "Bài hát “Hát ru” (Wiegenlied) được SGK Âm nhạc 10 chọn làm bài thực hành thanh nhạc là kiệt tác của nhạc sĩ nào?",
        "options": [
          "Franz Schubert (Áo)",
          "Ludwig van Beethoven",
          "Wolfgang Amadeus Mozart",
          "Johann Sebastian Bach"
        ],
        "ans": 0,
        "exp": "Bài “Hát ru” (Wiegenlied) nổi tiếng thế giới là sáng tác bất hủ của nhà soạn nhạc Lãng mạn người Áo Franz Schubert."
      }
    ]
  },
  {
    "id": "hat-bai-2",
    "number": "Bài 2 (Hát)",
    "title": "Làm chủ hơi thở",
    "page": "Trang 53",
    "badge": "Lựa chọn A • Thanh nhạc",
    "subtitle": "3 thao tác hơi thở: Lấy hơi – Giữ hơi – Đẩy/Điều tiết hơi • Hành quân xa • Màu cờ tôi yêu",
    "staffKey": "vocal_exercise_breath",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-rose-50/80 dark:bg-rose-950/40 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 text-xs\">\n          <strong class=\"text-rose-800 dark:text-rose-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-rose-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 53):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nắm vững tầm quan trọng của hơi thở và thực hiện thuần thục 3 thao tác: <strong>Lấy hơi, Giữ hơi, Đẩy và điều tiết hơi</strong>.</li>\n            <li>Biết duy trì sự nâng đỡ của cơ hoành để ngân dài nốt nhạc ổn định về cao độ và sắc thái.</li>\n            <li>Vận dụng làm chủ hơi thở trong bài hát hào hùng <em>Hành quân xa</em> (Đỗ Nhuận) và <em>Màu cờ tôi yêu</em> (Phạm Tuyên).</li>\n          </ul>\n        </div>\n\n        <!-- 3 Thao tác hơi thở -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-3\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-lungs text-base\"></i> Quy trình 3 thao tác làm chủ hơi thở thanh nhạc\n          </h5>\n          <p>Hơi thở chính là “nguồn nhiên liệu” nuôi dưỡng tiếng hát. Kĩ thuật thở thanh nhạc là <strong>thở ngực - bụng (thở hoành)</strong>:</p>\n\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40\">\n              <span class=\"w-6 h-6 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2\">1</span>\n              <h6 class=\"font-bold text-emerald-800 dark:text-emerald-300 mb-1\">1. Lấy hơi (Hít vào):</h6>\n              <p>Hít nhanh, sâu, nhẹ nhàng qua cả mũi và miệng; hạ cơ hoành xuống làm phình nhẹ vùng bụng dưới và giãn xương sườn cụt; hai vai giữ nguyên, không nhấc vai lên.</p>\n            </div>\n\n            <div class=\"p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n              <span class=\"w-6 h-6 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2\">2</span>\n              <h6 class=\"font-bold text-blue-800 dark:text-blue-300 mb-1\">2. Giữ hơi (Nén hơi):</h6>\n              <p>Duy trì sự căng đỡ của cơ hoành và cơ bụng dưới; giữ luồng khí ổn định trong phổi trong 1-2 giây trước khi phát âm; tuyệt đối không nín chặt cổ họng gây nghẹn tiếng.</p>\n            </div>\n\n            <div class=\"p-3.5 bg-purple-50/70 dark:bg-purple-950/40 rounded-xl border border-purple-200/60 dark:border-purple-900/40\">\n              <span class=\"w-6 h-6 rounded-full bg-purple-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2\">3</span>\n              <h6 class=\"font-bold text-purple-800 dark:text-purple-300 mb-1\">3. Đẩy & Điều tiết hơi:</h6>\n              <p>Thở ra từ từ, tiết kiệm luồng khí đẩy qua khe thanh đới; điều tiết luồng hơi nhịp nhàng theo câu hát; không xả hơi ồ ạt ở các nốt đầu tiên để giữ đủ hơi đến hết câu.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Hướng dẫn thực hành ca khúc -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-microphone-lines text-rose-500\"></i> Hướng dẫn thực hành bài hát SGK\n          </h5>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n            <strong class=\"text-rose-600 dark:text-rose-400 block mb-0.5\">• Ca khúc “Hành quân xa” – Đỗ Nhuận:</strong>\n            <p>Nhịp 2/4 hành tiến, dồn dập, trầm hùng. Lấy hơi nhanh tại các dấu lặng; dùng lực nén của cơ hoành dồn vào đầu phách để câu hát chắc nịch, thể hiện khí thế kiên cường của người chiến sĩ Điện Biên.</p>\n          </div>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n            <strong class=\"text-blue-600 dark:text-blue-400 block mb-0.5\">• Ca khúc “Màu cờ tôi yêu” – Nhạc Phạm Tuyên, thơ Diệp Minh Tuyền:</strong>\n            <p>Giai điệu trong sáng, tự hào, khoáng đạt. Cần điều tiết hơi thở đều đặn từ bụng dưới để nâng đỡ các nốt cao ngân dài, giữ sắc thái hào sảng và lạc quan.</p>\n          </div>\n        </div>\n\n        <!-- Vận dụng -->\n        <div class=\"p-3.5 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n          <strong class=\"text-emerald-900 dark:text-emerald-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-stopwatch text-emerald-600 mr-1\"></i> BÀI TẬP VẬN DỤNG HƠI THỞ HÀNG NGÀY:\n          </strong>\n          <p>Luyện tập kĩ thuật xì hơi: Hít sâu trong 4 giây, giữ nén 4 giây, sau đó thở ra từ từ qua kẽ răng thành âm “xì...” đều đặn và đếm thời gian. Mục tiêu kéo dài thời gian xì hơi từ 15 giây lên 25–30 giây mà âm thanh vẫn ổn định không bị đứt quãng.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Kiểu thở chuẩn mực nhất được ứng dụng trong nghệ thuật thanh nhạc chuyên nghiệp là:",
        "options": [
          "Thở ngực - bụng (thở hoành)",
          "Chỉ thở bằng ngực trên",
          "Chỉ thở nông qua miệng",
          "Nín thở tối đa"
        ],
        "ans": 0,
        "exp": "Thở ngực - bụng (thở hoành) cho phép lấy dung tích khí lớn nhất và sử dụng cơ hoành để điều tiết luồng hơi phát âm bền bỉ, ổn định."
      },
      {
        "q": "Thao tác thứ ba trong quy trình hơi thở thanh nhạc là gì?",
        "options": [
          "Đẩy và điều tiết luồng hơi đều đặn, tiết kiệm qua dây thanh cho đến hết câu hát",
          "Xả hết toàn bộ hơi thật nhanh ra ngoài",
          "Nín thở thật chặt để giữ âm lượng",
          "Hít thêm thật nhiều không khí vào cổ họng"
        ],
        "ans": 0,
        "exp": "Thao tác thứ 3 là Đẩy và điều tiết luồng hơi: kiểm soát dòng khí thở ra một cách từ từ, đều đặn, giữ cột hơi nâng đỡ giọng hát đến nốt cuối cùng của câu."
      },
      {
        "q": "Bài hát “Hành quân xa” gắn liền với chiến dịch lịch sử Điện Biên Phủ là sáng tác của ai?",
        "options": [
          "Đỗ Nhuận",
          "Phạm Tuyên",
          "Hoàng Việt",
          "Văn Cao"
        ],
        "ans": 0,
        "exp": "Ca khúc hành quân bất hủ “Hành quân xa” là sáng tác kiệt xuất của nhạc sĩ Đỗ Nhuận trong chiến dịch Điện Biên Phủ năm 1954."
      }
    ]
  },
  {
    "id": "hat-bai-3",
    "number": "Bài 3 (Hát)",
    "title": "Phát âm rõ chữ",
    "page": "Trang 57",
    "badge": "Lựa chọn A • Thanh nhạc",
    "subtitle": "3 bước xử lí âm tiết: Khởi chữ – Mở chữ – Đóng chữ • Thang âm Sol–La–Si–Rê • Cò lả & Lí hoài nam",
    "staffKey": "cola_scale",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-rose-50/80 dark:bg-rose-950/40 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 text-xs\">\n          <strong class=\"text-rose-800 dark:text-rose-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-rose-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 57):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nắm vững phương pháp phát âm tròn vành rõ chữ qua 3 bước: <strong>Khởi chữ, Mở chữ, Đóng chữ</strong>.</li>\n            <li>Nhận biết và thể hiện chuẩn xác thang âm bốn âm <strong>Sol – La – Si – Rê</strong> của dân ca <em>Cò lả</em>.</li>\n            <li>Hát đúng luyến láy dân ca trong <em>Cò lả</em> (Bắc Bộ) và xử lí đảo phách trong <em>Lí hoài nam</em> (Quảng Trị).</li>\n          </ul>\n        </div>\n\n        <!-- 3 Bước phát âm -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-3\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-spell-check text-base\"></i> Quy trình 3 bước xử lí chuẩn xác một âm tiết tiếng Việt\n          </h5>\n          <p>Tiếng Việt có thanh điệu và nhiều phụ âm ghép phức tạp. Để hát tròn vành rõ chữ mà không méo tiếng, cần tuân thủ 3 bước:</p>\n\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3.5 bg-amber-50/80 dark:bg-amber-950/40 rounded-xl border border-amber-200/60 dark:border-amber-900/40\">\n              <span class=\"w-6 h-6 rounded-full bg-amber-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2\">1</span>\n              <h6 class=\"font-bold text-amber-900 dark:text-amber-300 mb-1\">1. Khởi chữ (Phụ âm đầu):</h6>\n              <p>Phát âm phụ âm đầu thật nhẹ, gọn và dứt khoát như khi nói (ví dụ: b, m, t, đ, k, ng...); tạo tiền đề để âm thanh phóng thẳng vào khoang vang.</p>\n            </div>\n\n            <div class=\"p-3.5 bg-blue-50/80 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n              <span class=\"w-6 h-6 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2\">2</span>\n              <h6 class=\"font-bold text-blue-900 dark:text-blue-300 mb-1\">2. Mở chữ (Nguyên âm):</h6>\n              <p>Toàn bộ độ dài trường độ của nốt nhạc được ngân trên nguyên âm trung tâm; mở khoang miệng đúng độ mở để âm thanh vang tròn vành và đúng sắc thái.</p>\n            </div>\n\n            <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-xl border border-purple-200/60 dark:border-purple-900/40\">\n              <span class=\"w-6 h-6 rounded-full bg-purple-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2\">3</span>\n              <h6 class=\"font-bold text-purple-900 dark:text-purple-300 mb-1\">3. Đóng chữ (Âm cuối):</h6>\n              <p>Khép nhanh và dứt khoát phụ âm cuối (m, n, ng, p, t, c) hoặc bán nguyên âm (i, u) ở tích tắc cuối cùng của nốt; tuyệt đối không nuốt âm cuối làm sai nghĩa từ.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Hướng dẫn thực hành dân ca -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-leaf text-emerald-500\"></i> Hướng dẫn thực hành hai bài dân ca tiêu biểu\n          </h5>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n            <strong class=\"text-rose-600 dark:text-rose-400 block mb-0.5\">• Bài dân ca “Cò lả” – Dân ca đồng bằng Bắc Bộ:</strong>\n            <p>Giai điệu trong sáng, thanh bình, xây dựng trên <strong>thang âm 4 âm Sol – La – Si – Rê</strong>. Khi thể hiện, cần chú ý kĩ thuật nhả chữ mềm mại của vùng quan họ, luyến đúng các nốt hoa mĩ dân gian (nốt luyến đi lên và đi xuống mượt mà).</p>\n          </div>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n            <strong class=\"text-blue-600 dark:text-blue-400 block mb-0.5\">• Bài dân ca “Lí hoài nam” (Lí qua đèo / Lí chiều chiều) – Dân ca Quảng Trị:</strong>\n            <p>Giai điệu man mác, trữ tình, sâu lắng đặc trưng của âm nhạc miền Trung. Luyện kĩ thuật hát đảo phách (ngân qua vạch nhịp) và lấy hơi nhẹ nhàng tại dấu lặng mà không làm đứt mạch cảm xúc.</p>\n          </div>\n        </div>\n\n        <!-- Vận dụng -->\n        <div class=\"p-3.5 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n          <strong class=\"text-emerald-900 dark:text-emerald-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-pen-nib text-emerald-600 mr-1\"></i> NHIỆM VỤ VẬN DỤNG & SÁNG TẠO:\n          </strong>\n          <p>Đặt lời mới cho giai điệu bài dân ca <em>Cò lả</em> ca ngợi nét đẹp quê hương hoặc tình bạn học trò; trình bày trước nhóm và cùng nhận xét về độ tròn vành rõ chữ của ca từ mới đặt.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Quy trình 3 bước xử lí một âm tiết trong ca hát tiếng Việt lần lượt là:",
        "options": [
          "Khởi chữ (phụ âm đầu) – Mở chữ (nguyên âm) – Đóng chữ (phụ âm cuối)",
          "Lấy hơi – Hát to – Hát nhỏ",
          "Đọc lời ca – Gõ nhịp – Hát giai điệu",
          "Mở miệng – Ngân dài – Ngắt tiếng"
        ],
        "ans": 0,
        "exp": "3 bước phát âm chuẩn xác trong thanh nhạc là Khởi chữ (phụ âm đầu), Mở chữ (nguyên âm chính) và Đóng chữ (phụ âm cuối)."
      },
      {
        "q": "Thang âm bốn âm cơ bản của bài dân ca “Cò lả” được SGK Âm nhạc 10 nêu là:",
        "options": [
          "Sol – La – Si – Rê",
          "Đô – Rê – Mi – Sol",
          "Rê – Fa – Sol – La",
          "La – Đô – Rê – Mi"
        ],
        "ans": 0,
        "exp": "Giai điệu dân ca Cò lả được dệt nên từ thang âm 4 âm cơ bản Sol – La – Si – Rê mang âm sắc tươi sáng của đồng bằng Bắc Bộ."
      },
      {
        "q": "Bài dân ca “Lí hoài nam” còn có tên gọi dân gian quen thuộc khác là gì?",
        "options": [
          "Lí qua đèo (hoặc Lí chiều chiều)",
          "Lí cây bông",
          "Lí ngựa ô",
          "Lí kéo chài"
        ],
        "ans": 0,
        "exp": "Dân ca Quảng Trị “Lí hoài nam” còn thường được nhân dân gọi bằng tên “Lí qua đèo” hoặc “Lí chiều chiều”."
      }
    ]
  },
  {
    "id": "hat-bai-4",
    "number": "Bài 4 (Hát)",
    "title": "Hát giọng chuyển",
    "page": "Trang 61",
    "badge": "Lựa chọn A • Thanh nhạc",
    "subtitle": "Kĩ thuật Passaggio • Giọng ngực -> Giọng pha -> Giọng đầu • Mùa xuân đầu tiên Văn Cao",
    "staffKey": "song_muaxuandautien",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-rose-50/80 dark:bg-rose-950/40 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 text-xs\">\n          <strong class=\"text-rose-800 dark:text-rose-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-rose-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 61):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Hiểu bản chất của kĩ thuật giọng chuyển (Passaggio) và các âm khu giọng hát.</li>\n            <li>Biết cách chuyển tiếp mềm mại từ giọng thật sang giọng pha và giọng giả ở các nốt cao mà không bị vỡ giọng.</li>\n            <li>Thể hiện thành công sắc thái sâu lắng, trữ tình trong <em>Mùa xuân đầu tiên</em> (Văn Cao).</li>\n          </ul>\n        </div>\n\n        <!-- Khái niệm giọng chuyển -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-3\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-arrows-split-up-and-left text-base\"></i> Bản chất của kĩ thuật Hát giọng chuyển (Passaggio)\n          </h5>\n          <p>Giọng hát con người có 3 âm khu cơ bản:</p>\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-rose-600 dark:text-rose-400 block mb-1\">1. Giọng ngực (Chest voice):</strong>\n              <p>Âm thanh phát ra ở âm khu trầm, dày, ấm, có độ rung cảm nhận rõ ràng ở lồng ngực.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-purple-600 dark:text-purple-400 block mb-1\">2. Giọng pha (Mix voice):</strong>\n              <p>Âm khu trung gian kết hợp giữa độ dày của giọng ngực và độ thanh thoát của giọng đầu.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-blue-600 dark:text-blue-400 block mb-1\">3. Giọng đầu / Giọng giả (Head/Falsetto):</strong>\n              <p>Âm khu cao, nhẹ, thanh thoát, cộng hưởng chủ yếu ở các xoang trán trên mặt.</p>\n            </div>\n          </div>\n          <div class=\"p-3 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl text-xs text-rose-900 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40\">\n            <strong>Kĩ thuật vượt qua vùng chuyển giọng:</strong> Khi giai điệu leo lên các nốt cao gần vùng chuyển giọng, người hát tuyệt đối không được gào to hoặc cố rướn cổ (sẽ gây vỡ tiếng và viêm thanh quản); thay vào đó, hãy <strong>giảm nhẹ lực đẩy luồng hơi</strong>, nâng cao hàm ếch mềm phía sau và pha nhẹ âm sắc giọng gió để âm thanh lướt qua êm ái.\n          </div>\n        </div>\n\n        <!-- Hướng dẫn thực hành ca khúc -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-feather text-purple-500\"></i> Hướng dẫn thực hành ca khúc SGK\n          </h5>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n            <strong class=\"text-purple-600 dark:text-purple-400 block mb-0.5\">• Ca khúc “Mùa xuân đầu tiên” – Nhạc & lời: Văn Cao:</strong>\n            <p>Sáng tác bất hủ năm 1976 của thiên tài Văn Cao, giai điệu nhịp 3/4 nhẹ nhàng, sâu lắng, tươi sáng và triết lí. Đoạn điệp khúc vút lên cao đòi hỏi kĩ thuật chuyển giọng pha mượt mà, lấy hơi hết câu và nhả chữ mềm mại.</p>\n          </div>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n            <strong class=\"text-blue-600 dark:text-blue-400 block mb-0.5\">• Ca khúc “Giấc mơ sẽ đến bên ngưỡng cửa” – I. O. Dunayevsky (lời Việt: Trung Kiên):</strong>\n            <p>Âm hưởng du dương, êm ái, mang đậm phong cách ca khúc thính phòng cổ điển châu Âu; rèn luyện chuyển âm vực từ tốn, giữ hơi đều đặn.</p>\n          </div>\n        </div>\n\n        <!-- Vận dụng -->\n        <div class=\"p-3.5 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n          <strong class=\"text-emerald-900 dark:text-emerald-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-users text-emerald-600 mr-1\"></i> BÀI TẬP VẬN DỤNG & DÀN DỰNG:\n          </strong>\n          <p>Tổ chức biểu diễn theo hình thức đơn ca, song ca hoặc tốp ca bài <em>Mùa xuân đầu tiên</em>; chú ý lắng nghe người bạn diễn để điều chỉnh âm lượng và màu sắc giọng hát hòa quyện ở các nốt cao.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Kĩ thuật hát giọng chuyển (Passaggio) giúp người hát giải quyết vấn đề gì khi lên nốt cao?",
        "options": [
          "Chuyển tiếp mềm mại giữa các âm khu, tránh hiện tượng gắt cổ hoặc vỡ giọng",
          "Hát thật to và kéo dài hơi vô tận",
          "Đổi từ hát tiếng Việt sang hát tiếng nước ngoài",
          "Hát nhanh gấp đôi tốc độ bài hát"
        ],
        "ans": 0,
        "exp": "Passaggio là kĩ thuật chuyển tiếp êm ái giữa giọng ngực, giọng pha và giọng đầu, giúp nốt cao thoát ra tự nhiên mà không bị nghẹn hay vỡ giọng."
      },
      {
        "q": "Bài hát “Mùa xuân đầu tiên” được nhạc sĩ Văn Cao sáng tác vào mốc lịch sử nào?",
        "options": [
          "Mùa xuân năm 1976 (sau ngày đất nước thống nhất)",
          "Năm 1945 trong Cách mạng Tháng Tám",
          "Năm 1954 sau chiến thắng Điện Biên Phủ",
          "Năm 1986 thời kì Đổi mới"
        ],
        "ans": 0,
        "exp": "Ca khúc bất hủ “Mùa xuân đầu tiên” được nhạc sĩ Văn Cao viết vào đầu năm 1976 đón mừng mùa xuân đầu tiên của đất nước hòa bình thống nhất."
      },
      {
        "q": "Để rèn luyện giọng chuyển đạt độ mềm mại, bài tập thanh nhạc nào thường được áp dụng hiệu quả nhất?",
        "options": [
          "Bài tập rung môi (Lip trill) theo mẫu âm đi lên và đi xuống",
          "Hét to hết cỡ một nốt cao duy nhất",
          "Chỉ đọc nhẩm trong đầu không phát ra tiếng",
          "Uống nước đá trước khi tập"
        ],
        "ans": 0,
        "exp": "Bài tập rung môi (Lip trill) giúp giải phóng toàn bộ áp lực ở thanh quản và điều phối luồng hơi mượt mà qua các âm khu."
      }
    ]
  }
];

const part2_guitar = [
  {
    "id": "gt-bai-1",
    "number": "Bài 1 (Guitar)",
    "title": "Giới thiệu đàn guitar và kĩ thuật bấm, gảy trên dây 5, dây 4",
    "page": "Trang 66",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Cấu tạo đàn • 6 dây E-B-G-D-A-E • Quy ước ngón 1-2-3-4 & p-i-m-a • Thế tay 1 • Nốt dây 5 & 4",
    "staffKey": "guitar_strings_diagram",
    "staffKey2": "guitar_exercise_d54",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 66):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nắm vững cấu tạo 8 bộ phận của đàn guitar, thứ tự và tên gọi 6 dây buông.</li>\n            <li>Ngồi đúng tư thế (cổ điển hoặc đệm hát); nắm quy ước ngón tay trái (1-2-3-4) và ngón tay phải (p-i-m-a).</li>\n            <li>Thực hiện đúng kĩ thuật bấm và gảy các nốt trên dây 5 và dây 4 ở thế tay thứ nhất.</li>\n          </ul>\n        </div>\n\n        <!-- 1. Cấu tạo & 6 Dây đàn -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-purple-600 dark:text-purple-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-guitar text-base\"></i> 1. Cấu tạo đàn Guitar & Hệ thống 6 dây đàn\n          </h5>\n          <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-1 font-bold\">• 8 Bộ phận chính của đàn:</strong>\n              <p>Đầu cần đàn (Headstock), Khóa chỉnh dây (Tuning pegs), Lược đàn (Nut), Cần đàn (Neck) chứa các phím đàn kim loại (Frets), Thùng đàn (Body), Lỗ thoát âm (Soundhole), Ngựa đàn (Bridge), Dây đàn (Strings).</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-1 font-bold\">• Thứ tự 6 dây buông (từ mỏng nhất đến dày nhất):</strong>\n              <p>• Dây 1: <strong>Mi (E4)</strong> (dây mỏng nhất, nốt cao nhất)<br>\n                 • Dây 2: <strong>Si (B3)</strong><br>\n                 • Dây 3: <strong>Sol (G3)</strong><br>\n                 • Dây 4: <strong>Rê (D3)</strong><br>\n                 • Dây 5: <strong>La (A2)</strong><br>\n                 • Dây 6: <strong>Mi (E2)</strong> (dây dày nhất, nốt trầm nhất)</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 2. Quy ước ngón tay & Tư thế ngồi -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-blue-600 dark:text-blue-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-hand text-base\"></i> 2. Tư thế ngồi & Quy ước ngón tay\n          </h5>\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-1 font-bold\">Quy ước ngón tay:</strong>\n              <p>• <strong>Tay trái (bấm phím):</strong> Ngón 1 (Trỏ), ngón 2 (Giữa), ngón 3 (Áp út), ngón 4 (Út). Dây buông kí hiệu số <strong>0</strong>.<br>\n                 • <strong>Tay phải (gảy dây):</strong> Ngón cái <strong>p</strong>, ngón trỏ <strong>i</strong>, ngón giữa <strong>m</strong>, ngón áp út <strong>a</strong>.<br>\n                 • <strong>Thế tay 1:</strong> Ngón 1 phụ trách phím 1, ngón 2 phụ trách phím 2, ngón 3 phụ trách phím 3, ngón 4 phụ trách phím 4.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-slate-900 dark:text-white block mb-1 font-bold\">Hai tư thế ngồi chuẩn:</strong>\n              <p>• <strong>Tư thế cổ điển:</strong> Kê chân trái lên giá kê chân (footstool), cần đàn chếch 45 độ, thùng đàn tì chắc chắn vào đùi trái và ngực.<br>\n                 • <strong>Tư thế đệm hát:</strong> Đặt thùng đàn lên đùi phải, giữ lưng thẳng, hai vai thả lỏng tự nhiên, tay phải khum tự nhiên trên thành đàn.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 3. Kĩ thuật bấm và gảy dây 5, 4 -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-music text-purple-600\"></i> 3. Kĩ thuật bấm và gảy trên dây 5 và dây 4\n          </h5>\n          <p>• <strong>Dây 5 (La - A2):</strong> Dây buông là La (A). Bấm phím 2 bằng ngón 2 là Si (B). Bấm phím 3 bằng ngón 3 là Đô (C).</p>\n          <p>• <strong>Dây 4 (Rê - D3):</strong> Dây buông là Rê (D). Bấm phím 2 bằng ngón 2 là Mi (E). Bấm phím 3 bằng ngón 3 là Fa (F).</p>\n          <p class=\"text-amber-800 dark:text-amber-300 font-semibold\">• Lưu ý then chốt: Ngón tay trái phải cong đầu ngón vuông góc với phím đàn, bấm sát vào thanh kim loại của phím (không bấm đè lên thanh phím), tránh để phần thịt của ngón chạm vào dây bên cạnh làm tịt tiếng.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Thứ tự các dây buông của đàn guitar từ dây số 1 (mỏng nhất) đến dây số 6 (dày nhất) là:",
        "options": [
          "Mi – Si – Sol – Rê – La – Mi (E – B – G – D – A – E)",
          "Đô – Rê – Mi – Fa – Sol – La",
          "Mi – La – Rê – Sol – Si – Mi (E – A – D – G – B – E)",
          "Sol – Si – Rê – Fa – La – Đô"
        ],
        "ans": 0,
        "exp": "Thứ tự chuẩn từ dây 1 lên dây 6 là: Dây 1 (E), Dây 2 (B), Dây 3 (G), Dây 4 (D), Dây 5 (A), Dây 6 (E)."
      },
      {
        "q": "Theo quy ước quốc tế về kí hiệu ngón tay gảy đàn guitar (tay phải), chữ 'p' và 'i' đại diện cho ngón nào?",
        "options": [
          "p là ngón cái, i là ngón trỏ",
          "p là ngón út, i là ngón cái",
          "p là ngón giữa, i là ngón áp út",
          "p là ngón trỏ, i là ngón giữa"
        ],
        "ans": 0,
        "exp": "Quy ước ngón tay phải guitar (tiếng Tây Ban Nha): p (pulgar - ngón cái), i (indice - ngón trỏ), m (medio - ngón giữa), a (anular - ngón áp út)."
      },
      {
        "q": "Trên dây 5 đàn guitar, khi dùng ngón số 3 bấm vào phím 3, ta được cao độ của nốt nhạc nào?",
        "options": [
          "Nốt Đô (C4)",
          "Nốt Si (B3)",
          "Nốt Rê (D4)",
          "Nốt La (A3)"
        ],
        "ans": 0,
        "exp": "Dây 5 buông là La, phím 1 là La♯, phím 2 là Si, phím 3 chính là nốt Đô (C4)."
      }
    ]
  },
  {
    "id": "gt-bai-2",
    "number": "Bài 2 (Guitar)",
    "title": "Kĩ thuật bấm, gảy trên dây 3, dây 2",
    "page": "Trang 70",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Luyện ngón xen kẽ i – m • So dây đàn phím 5 • Quy chuẩn bảo quản độ ẩm 50–70%",
    "staffKey": "guitar_exercise_d32",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 70):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nhận biết và bấm chuẩn xác các nốt trên dây 3 và dây 2 ở thế tay thứ nhất.</li>\n            <li>Rèn luyện kĩ thuật gảy luân phiên ngón trỏ (i) và ngón giữa (m) tay phải.</li>\n            <li>Nắm phương pháp chỉnh dây đàn bằng tai theo nguyên tắc so dây phím 5 và quy chuẩn bảo quản đàn.</li>\n          </ul>\n        </div>\n\n        <!-- 1. Kĩ thuật bấm dây 3, 2 -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-purple-600 dark:text-purple-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-guitar text-base\"></i> 1. Vị trí nốt trên dây 3 và dây 2 (Thế tay 1)\n          </h5>\n          <p>• <strong>Dây 3:</strong> Dây buông là <strong>Sol (G3)</strong>; phím 2 bấm ngón 2 là <strong>La (A3)</strong>.</p>\n          <p>• <strong>Dây 2:</strong> Dây buông là <strong>Si (B3)</strong>; phím 1 bấm ngón 1 là <strong>Đô (C4)</strong>; phím 3 bấm ngón 3 là <strong>Rê (D4)</strong>.</p>\n          <p>• <strong>Kĩ thuật gảy xen kẽ i – m:</strong> Tay phải luân phiên gảy ngón trỏ (i) rồi ngón giữa (m) đều đặn; cổ tay không gồng, động tác gảy dứt khoát hướng vào lòng bàn tay.</p>\n        </div>\n\n        <!-- 2. Chỉnh đàn bằng tai -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs\">\n          <h5 class=\"font-black text-blue-600 dark:text-blue-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-sliders text-base\"></i> 2. Kĩ thuật chỉnh dây đàn đối chiếu phím 5\n          </h5>\n          <p>Phương pháp chỉnh dây truyền thống chuẩn mực dựa trên nguyên tắc đồng âm giữa các dây:</p>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1\">\n            <p>1. Lấy âm chuẩn nốt <strong>Mi (E4)</strong> cho <strong>dây 1 buông</strong> bằng âm thoa hoặc tuner.</p>\n            <p>2. Bấm <strong>phím 5 dây 2</strong> phải đồng âm hoàn toàn với <strong>dây 1 buông</strong>.</p>\n            <p class=\"text-rose-600 dark:text-rose-400 font-bold\">3. Bấm PHÍM 4 DÂY 3 phải đồng âm với dây 2 buông (ngoại lệ duy nhất phím 4 do quãng 3 trưởng Si - Sol!).</p>\n            <p>4. Bấm <strong>phím 5 dây 4</strong> phải đồng âm với <strong>dây 3 buông</strong>.</p>\n            <p>5. Bấm <strong>phím 5 dây 5</strong> phải đồng âm với <strong>dây 4 buông</strong>.</p>\n            <p>6. Bấm <strong>phím 5 dây 6</strong> phải đồng âm với <strong>dây 5 buông</strong>.</p>\n          </div>\n        </div>\n\n        <!-- 3. Bảo quản đàn guitar -->\n        <div class=\"p-4 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-1.5 text-slate-700 dark:text-slate-300\">\n          <h6 class=\"font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5\">\n            <i class=\"fa-solid fa-shield-heart text-emerald-600\"></i> 3. Quy chuẩn bảo quản đàn guitar gỗ:\n          </h6>\n          <p>• Để đàn nơi khô ráo, thoáng mát, tránh ánh nắng mặt trời chiếu trực tiếp hoặc để gần nguồn nhiệt làm cong vênh cần đàn.</p>\n          <p>• Độ ẩm lý tưởng trong không khí là <strong>50% – 70%</strong>. Nếu độ ẩm quá cao, gỗ hút ẩm làm nở mặt thùng và rè phím; nếu quá khô, mặt gỗ dễ bị nứt.</p>\n          <p>• Lau sạch mồ hôi trên dây đàn và cần đàn bằng vải sợi mềm mịn sau mỗi lần chơi; cất đàn vào bao da/hộp cứng khi di chuyển.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Khi so dây đàn guitar bằng phương pháp đối chiếu phím, bấm phím số mấy trên dây 3 để đồng âm với dây 2 buông?",
        "options": [
          "Phím 4",
          "Phím 5",
          "Phím 3",
          "Phím 2"
        ],
        "ans": 0,
        "exp": "Khoảng cách giữa dây 3 (Sol) và dây 2 (Si) là quãng 3 trưởng (2 cung = 4 phím), do đó chỉ bấm phím 4 dây 3 để so với dây 2 buông (các dây khác đều so ở phím 5)."
      },
      {
        "q": "Độ ẩm môi trường lý tưởng nhất để bảo quản đàn guitar tránh bị nứt gỗ hoặc cong cần là:",
        "options": [
          "50% – 70%",
          "20% – 30%",
          "85% – 95%",
          "Dưới 10%"
        ],
        "ans": 0,
        "exp": "SGK Âm nhạc 10 quy định độ ẩm tối ưu để bảo quản đàn guitar gỗ là từ 50% đến 70%."
      },
      {
        "q": "Trên dây số 2 đàn guitar ở thế tay 1, khi bấm ngón 1 vào phím 1 ta được nốt gì?",
        "options": [
          "Nốt Đô (C4)",
          "Nốt Rê (D4)",
          "Nốt Si (B3)",
          "Nốt La (A3)"
        ],
        "ans": 0,
        "exp": "Dây 2 buông là Si, khi bấm ngón 1 vào phím 1 (tăng nửa cung) ta được nốt Đô (C4)."
      }
    ]
  },
  {
    "id": "gt-bai-3",
    "number": "Bài 3 (Guitar)",
    "title": "Kĩ thuật bấm, gảy trên dây 6, dây 1",
    "page": "Trang 72",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Mở rộng nốt dây 6 & 1 • Sắc thái cường độ p (piano) & f (forte) • Tiểu phẩm Happy Birthday",
    "staffKey": "guitar_happy_birthday",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 72):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nhận biết và bấm chuẩn nốt trên dây 6 (trầm nhất) và dây 1 (cao nhất) ở thế tay thứ nhất.</li>\n            <li>Hiểu và thể hiện được sự tương phản sắc thái cường độ <strong>p (piano - nhỏ)</strong> và <strong>f (forte - to/mạnh)</strong>.</li>\n            <li>Chơi hoàn chỉnh tiểu phẩm quen thuộc <em>Happy Birthday</em> với nhịp 3/4 và cảm xúc chúc mừng sinh nhật.</li>\n          </ul>\n        </div>\n\n        <!-- 1. Vị trí nốt dây 6 và 1 -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-purple-600 dark:text-purple-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-guitar text-base\"></i> 1. Vị trí nốt trên dây 6 và dây 1 (Thế tay 1)\n          </h5>\n          <p>• <strong>Dây 6 (Dây trầm nhất):</strong> Buông là <strong>Mi trầm (E2)</strong>; phím 1 bấm ngón 1 là <strong>Fa (F2)</strong>; phím 3 bấm ngón 3 là <strong>Sol (G2)</strong>.</p>\n          <p>• <strong>Dây 1 (Dây cao nhất):</strong> Buông là <strong>Mi cao (E4)</strong>; phím 1 bấm ngón 1 là <strong>Fa (F4)</strong>; phím 3 bấm ngón 3 là <strong>Sol (G4)</strong>.</p>\n          <p class=\"text-slate-500 italic\">Chú ý: Dây 6 và dây 1 có cùng tên nốt ở các phím tương ứng (cùng là Mi - Fa - Sol) nhưng cách nhau đúng hai quãng tám (2 Octaves)!</p>\n        </div>\n\n        <!-- 2. Kĩ thuật cường độ p và f -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-volume-high text-base\"></i> 2. Kĩ thuật thể hiện sắc thái cường độ p và f\n          </h5>\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3\">\n            <div class=\"p-3 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n              <strong class=\"text-blue-900 dark:text-blue-300 block mb-1 font-bold\">• Cường độ p (piano – nhỏ, êm):</strong>\n              <p>Dùng lực ngón tay phải vừa phải, gảy êm dịu, thả lỏng cổ tay; âm thanh cất lên nhẹ nhàng, ấm áp như lời thủ thỉ.</p>\n            </div>\n            <div class=\"p-3 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40\">\n              <strong class=\"text-rose-900 dark:text-rose-300 block mb-1 font-bold\">• Cường độ f (forte – mạnh, vang):</strong>\n              <p>Dùng lực gảy dứt khoát hơn từ khớp đốt ngón tay phải; đồng thời tay trái phải bấm thật chắc sát thanh phím để âm thanh phát ra tròn đầy, vang sáng, không bị rè.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 3. Thực hành Happy Birthday -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-cake-candles text-amber-500\"></i> 3. Thực hành tiểu phẩm “Happy Birthday”\n          </h5>\n          <p>Bài hát viết ở nhịp 3/4 rộn rã. Khởi đầu với 2 nốt Sol lấy đà ở sắc thái $p$ (nhẹ nhàng), sau đó phát triển mạnh mẽ lên sắc thái $f$ ở câu cao trào chúc mừng. Bấm đúng phím và giữ nhịp 3/4 đều đặn.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Hai dây ngoài cùng của đàn guitar (dây 6 và dây 1) khi gảy buông cách nhau một khoảng cách là:",
        "options": [
          "Hai quãng tám (2 Octaves) cùng tên nốt Mi (E)",
          "Một quãng tám",
          "Một quãng năm đúng",
          "Ba quãng tám"
        ],
        "ans": 0,
        "exp": "Dây 6 là E2 và dây 1 là E4, cách nhau đúng 2 quãng tám (16 bậc âm) và đều có tên nốt là Mi."
      },
      {
        "q": "Kí hiệu cường độ âm nhạc 'p' và 'f' có nguồn gốc từ tiếng nước nào?",
        "options": [
          "Tiếng Ý (Italian)",
          "Tiếng Pháp",
          "Tiếng Anh",
          "Tiếng Đức"
        ],
        "ans": 0,
        "exp": "Thuật ngữ âm nhạc quốc tế bắt nguồn từ tiếng Ý: 'piano' (nhẹ, nhỏ) và 'forte' (mạnh, to)."
      },
      {
        "q": "Trên dây số 1 đàn guitar ở thế tay 1, nốt Sol (G4) nằm ở phím bấm số mấy?",
        "options": [
          "Phím 3 (ngón số 3 bấm)",
          "Phím 1",
          "Phím 2",
          "Phím 5"
        ],
        "ans": 0,
        "exp": "Dây 1 buông là Mi, phím 1 là Fa, phím 2 là Fa♯, phím 3 chính là nốt Sol (G4)."
      }
    ]
  },
  {
    "id": "gt-bai-4",
    "number": "Bài 4 (Guitar)",
    "title": "Kĩ thuật gảy quãng hoà âm",
    "page": "Trang 74",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Phối hợp 2 dây đồng thời • Hai dây kề (i + m) • Hai dây cách xa (p + i/m/a)",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 74):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Hiểu khái niệm quãng hòa âm khi diễn tấu trên đàn guitar (hai âm vang lên đồng thời).</li>\n            <li>Làm chủ hai kĩ thuật gảy: gảy hai dây kề nhau và gảy hai dây cách xa nhau.</li>\n            <li>Tạo ra âm thanh hòa quyện, cân bằng âm lượng giữa hai dây, không để âm nọ gảy trước âm kia.</li>\n          </ul>\n        </div>\n\n        <!-- 2 Thế gảy quãng hòa âm -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-3\">\n          <h5 class=\"font-black text-purple-600 dark:text-purple-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-hand-peace text-base\"></i> Hai kĩ thuật gảy quãng hòa âm trên đàn guitar\n          </h5>\n          <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n            <div class=\"p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40\">\n              <strong class=\"text-emerald-900 dark:text-emerald-300 block mb-1.5 font-bold\">1. Hai dây kề nhau (Dây 1-2 hoặc 2-3):</strong>\n              <p>• Sử dụng đồng thời ngón trỏ <strong>(i)</strong> và ngón giữa <strong>(m)</strong> tay phải móc hai dây cùng một thời điểm.</p>\n              <p class=\"mt-1\">• Cổ tay thả lỏng, khum tự nhiên; hai ngón móc đồng thời hướng vào lòng bàn tay để hai âm vang đều đặn.</p>\n            </div>\n            <div class=\"p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/40\">\n              <strong class=\"text-blue-900 dark:text-blue-300 block mb-1.5 font-bold\">2. Hai dây không kề nhau (Dây trầm + Dây cao):</strong>\n              <p>• Dùng ngón cái <strong>(p)</strong> gảy dây trầm (dây 6, 5 hoặc 4) theo hướng xuống.</p>\n              <p class=\"mt-1\">• Kết hợp cùng lúc với ngón <strong>i, m hoặc a</strong> móc dây cao (dây 3, 2 hoặc 1) theo hướng lên.</p>\n            </div>\n          </div>\n          <div class=\"p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl text-xs text-amber-900 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40\">\n            <strong>Yêu cầu kĩ thuật vàng:</strong> Hai dây đàn phải phát ra âm thanh <em>hoàn toàn đồng thời</em>, không được để ngón nọ chạm dây trước ngón kia tạo ra âm thanh lạch cạch rời rạc.\n          </div>\n        </div>\n\n        <!-- Ứng dụng thực hành -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-music text-purple-600\"></i> Bài tập luyện quãng hòa âm thực tế\n          </h5>\n          <p>• Luyện quãng 3 hòa thanh: Đô (dây 5 phím 3) + Mi (dây 4 phím 2); Rê (dây 4 buông) + Fa (dây 4 phím 3).</p>\n          <p>• Luyện quãng 6 hòa thanh: Mi (dây 4 phím 2) + Đô (dây 2 phím 1); Sol (dây 3 buông) + Mi (dây 1 buông).</p>\n          <p>• Ứng tác: Đệm các quãng hòa thanh vào cuối câu của một bài hát quen thuộc để tạo màu sắc kết bài trọn vẹn.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Khi gảy quãng hòa âm trên hai dây kề nhau (như dây 1 và dây 2), ngón tay phải được dùng là:",
        "options": [
          "Ngón trỏ (i) và ngón giữa (m) móc đồng thời cùng lúc",
          "Ngón cái (p) quẹt nhanh qua hai dây",
          "Chỉ dùng một ngón trỏ gảy lướt",
          "Dùng ngón út và ngón áp út"
        ],
        "ans": 0,
        "exp": "Kĩ thuật chuẩn cho 2 dây kề: ngón trỏ (i) móc dây trên, ngón giữa (m) móc dây dưới tại cùng một thời điểm."
      },
      {
        "q": "Lỗi sai phổ biến nhất khi người mới bắt đầu tập gảy quãng hòa âm trên đàn guitar là:",
        "options": [
          "Hai nốt không phát ra cùng thời điểm, tạo thành tiếng gảy rải rời rạc",
          "Gảy quá nhẹ",
          "Bấm đúng nốt nhạc",
          "Ngồi đúng tư thế"
        ],
        "ans": 0,
        "exp": "Lỗi phổ biến nhất là thiếu sự đồng bộ giữa hai ngón tay phải, khiến một nốt phát ra trước và một nốt phát ra sau."
      },
      {
        "q": "Khi gảy một quãng hòa âm gồm nốt Bass ở dây 5 và nốt giai điệu ở dây 1, ta phối hợp cặp ngón tay phải nào?",
        "options": [
          "Ngón cái (p) gảy dây 5 và ngón áp út (a) gảy dây 1",
          "Ngón trỏ (i) và ngón giữa (m)",
          "Dùng cả hai ngón cái",
          "Ngón út và ngón trỏ"
        ],
        "ans": 0,
        "exp": "Quy ước chuẩn: ngón cái (p) phụ trách dây trầm (dây 5), ngón áp út (a) phụ trách dây 1 mỏng nhất."
      }
    ]
  },
  {
    "id": "gt-bai-5",
    "number": "Bài 5 (Guitar)",
    "title": "Cách đệm tiết điệu Waltz",
    "page": "Trang 76",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Nhịp 3/4 & 6/8 • Hợp âm G – C – D • Mẫu gảy Bass – Chát – Chát • Đệm bài Đếm sao",
    "staffKey": "waltz_chords",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 76):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nắm vững đặc điểm nhịp điệu của tiết điệu Waltz (Van-xơ) ở nhịp 3/4 hoặc 6/8.</li>\n            <li>Bấm thuần thục 3 hợp âm chính giọng Son trưởng: <strong>G (Son trưởng), C (Đô trưởng), D (Rê trưởng)</strong>.</li>\n            <li>Thực hiện thành thạo công thức gảy <em>Bass – Chát – Chát</em> và ứng dụng đệm bài hát <em>Đếm sao</em> (Văn Chung).</li>\n          </ul>\n        </div>\n\n        <!-- 1. Bộ 3 Hợp âm G - C - D -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-guitar text-base\"></i> 1. Kĩ thuật bấm 3 hợp âm chính giọng Son trưởng\n          </h5>\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-rose-600 dark:text-rose-400 block mb-1 font-bold\">Hợp âm G (Son trưởng):</strong>\n              <p>• Ngón 1: Phím 2 dây 5 (Si)<br>\n                 • Ngón 2: Phím 3 dây 6 (Sol - Bass)<br>\n                 • Ngón 3: Phím 3 dây 2 (Rê)<br>\n                 • Ngón 4: Phím 3 dây 1 (Sol)<br>\n                 <em>Bass chính: Dây 6 (nốt Sol)</em></p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-blue-600 dark:text-blue-400 block mb-1 font-bold\">Hợp âm C (Đô trưởng):</strong>\n              <p>• Ngón 1: Phím 1 dây 2 (Đô)<br>\n                 • Ngón 2: Phím 2 dây 4 (Mi)<br>\n                 • Ngón 3: Phím 3 dây 5 (Đô - Bass)<br>\n                 • Dây 6: Không gảy (X)<br>\n                 <em>Bass chính: Dây 5 (nốt Đô)</em></p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-purple-600 dark:text-purple-400 block mb-1 font-bold\">Hợp âm D (Rê trưởng):</strong>\n              <p>• Ngón 1: Phím 2 dây 3 (La)<br>\n                 • Ngón 2: Phím 2 dây 1 (Fa♯)<br>\n                 • Ngón 3: Phím 3 dây 2 (Rê)<br>\n                 • Dây 5 & 6: Không gảy (X)<br>\n                 <em>Bass chính: Dây 4 buông (Rê)</em></p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 2. Công thức gảy Waltz -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-music text-purple-600\"></i> 2. Mẫu gảy tay phải điệu Waltz nhịp 3/4\n          </h5>\n          <div class=\"p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/60 dark:border-rose-900/40 space-y-1\">\n            <p>• <strong>Phách 1 (Mạnh):</strong> Ngón cái (p) gảy nốt Bass của hợp âm đang bấm.</p>\n            <p>• <strong>Phách 2 (Nhẹ):</strong> Ba ngón trỏ, giữa, áp út (i + m + a) móc đồng thời ba dây 3-2-1 tạo tiếng \"Chát\".</p>\n            <p>• <strong>Phách 3 (Nhẹ):</strong> Ba ngón (i + m + a) tiếp tục móc đồng thời ba dây 3-2-1 tạo tiếng \"Chát\".</p>\n            <p class=\"font-bold text-rose-700 dark:text-rose-400 pt-1\">Khẩu quyết nhịp điệu: BASS – CHÁT – CHÁT (1 – 2 – 3)</p>\n          </div>\n        </div>\n\n        <!-- 3. Thực hành đệm bài hát -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-star text-amber-500\"></i> 3. Thực hành đệm ca khúc “Đếm sao” (Văn Chung)\n          </h5>\n          <p>Áp dụng chuyển hợp âm nhịp nhàng theo câu hát: “Một ông sao (G) sáng, hai ông sáng (C) sao, ba ông sao (D) sáng...” Chuyển tay trái đúng phách 1 khi ngón cái tay phải gảy nốt Bass mới.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Công thức đệm tiết điệu Waltz nhịp 3/4 trên đàn guitar gồm những thao tác nào của tay phải?",
        "options": [
          "Phách 1 gảy Bass (p); Phách 2 & 3 móc đồng thời 3 dây cao (i+m+a)",
          "Gảy liên tục 6 nốt móc đơn",
          "Quạt chát cả 3 phách",
          "Chỉ gảy ngón cái ở cả 3 phách"
        ],
        "ans": 0,
        "exp": "Điệu Waltz 3/4 có mẫu gảy kinh điển: Phách 1 Bass (ngón p), Phách 2 và 3 móc chát (ngón i+m+a)."
      },
      {
        "q": "Khi bấm hợp âm Đô trưởng (C) trên đàn guitar, nốt Bass chính nằm ở dây số mấy?",
        "options": [
          "Dây 5 (nốt Đô ở phím 3)",
          "Dây 6",
          "Dây 4",
          "Dây 1"
        ],
        "ans": 0,
        "exp": "Nốt Bass chính của hợp âm Đô trưởng (C) là nốt Đô nằm ở phím 3 của dây số 5 (ngón 3 bấm)."
      },
      {
        "q": "Ca khúc thiếu nhi nổi tiếng “Đếm sao” thường được đệm bằng điệu Waltz nhịp 3/4 là sáng tác của ai?",
        "options": [
          "Văn Chung",
          "Phạm Tuyên",
          "Phong Nhã",
          "Hoàng Long"
        ],
        "ans": 0,
        "exp": "Bài hát thiếu nhi bất hủ “Đếm sao” (Một ông sao sáng...) là sáng tác nổi tiếng của nhạc sĩ Văn Chung."
      }
    ]
  },
  {
    "id": "gt-bai-6",
    "number": "Bài 6 (Guitar)",
    "title": "Cách đệm tiết điệu Fox",
    "page": "Trang 80",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Nhịp 2/4 rộn rã • Hợp âm Em – Am – B7 • Mẫu gảy Bùm – Chát luân phiên • Đệm bài Cachiusa",
    "staffKey": "fox_chords",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 80):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nắm vững đặc điểm tiết tấu vui tươi, nhộn nhịp, hành tiến của điệu Fox ở nhịp 2/4.</li>\n            <li>Bấm chuẩn xác 3 hợp âm chính giọng Mi thứ: <strong>Em (Mi thứ), Am (La thứ), B7 (Si bảy)</strong>.</li>\n            <li>Thực hiện thành thạo mẫu gảy luân phiên dây Bass và ứng dụng đệm bài hát <em>Cachiusa</em> (Dân ca Nga).</li>\n          </ul>\n        </div>\n\n        <!-- 1. Bộ 3 Hợp âm Em - Am - B7 -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5\">\n          <h5 class=\"font-black text-purple-600 dark:text-purple-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-guitar text-base\"></i> 1. Kĩ thuật bấm 3 hợp âm chính giọng Mi thứ\n          </h5>\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-purple-600 dark:text-purple-400 block mb-1 font-bold\">Hợp âm Em (Mi thứ):</strong>\n              <p>• Ngón 2: Phím 2 dây 5 (Si)<br>\n                 • Ngón 3: Phím 2 dây 4 (Mi)<br>\n                 <em>Bass chính: Dây 6 buông (Mi)</em><br>\n                 <em>Bass phụ: Dây 5 (Si)</em></p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-blue-600 dark:text-blue-400 block mb-1 font-bold\">Hợp âm Am (La thứ):</strong>\n              <p>• Ngón 1: Phím 1 dây 2 (Đô)<br>\n                 • Ngón 2: Phím 2 dây 4 (Mi)<br>\n                 • Ngón 3: Phím 2 dây 3 (La)<br>\n                 <em>Bass chính: Dây 5 buông (La)</em><br>\n                 <em>Bass phụ: Dây 6 (Mi)</em></p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-rose-600 dark:text-rose-400 block mb-1 font-bold\">Hợp âm B7 (Si bảy):</strong>\n              <p>• Ngón 1: Phím 1 dây 4 (Rê♯)<br>\n                 • Ngón 2: Phím 2 dây 5 (Si - Bass)<br>\n                 • Ngón 3: Phím 2 dây 3 (La)<br>\n                 • Ngón 4: Phím 2 dây 1 (Fa♯)<br>\n                 <em>Bass chính: Dây 5 (nốt Si)</em></p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 2. Công thức gảy Fox -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-music text-purple-600\"></i> 2. Mẫu gảy tay phải điệu Fox nhịp 2/4\n          </h5>\n          <div class=\"p-3.5 bg-purple-50/70 dark:bg-purple-950/40 rounded-xl border border-purple-200/60 dark:border-purple-900/40 space-y-1\">\n            <p>• <strong>Phách 1:</strong> Nửa đầu gảy Bass chính (ngón p); nửa sau móc đồng thời 3 dây cao 3-2-1 (ngón i+m+a) tạo tiếng \"Chát\".</p>\n            <p>• <strong>Phách 2:</strong> Nửa đầu gảy Bass phụ luân phiên (ngón p); nửa sau móc đồng thời 3 dây cao 3-2-1 (ngón i+m+a) tạo tiếng \"Chát\".</p>\n            <p class=\"font-bold text-purple-700 dark:text-purple-400 pt-1\">Khẩu quyết nhịp điệu: BÙM (Bass 1) – CHÁT – BÙM (Bass 2) – CHÁT</p>\n          </div>\n        </div>\n\n        <!-- 3. Thực hành đệm bài hát -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-flag text-red-500\"></i> 3. Thực hành đệm ca khúc “Cachiusa” (Катюша)\n          </h5>\n          <p>Ca khúc nổi tiếng của nhạc sĩ M. I. Blanter (lời Việt Phạm Tuyên) mang tính chất hành tiến hào hùng, nhịp 2/4 dứt khoát. Sử dụng bộ hợp âm $Em - Am - B7$ đệm đều đặn theo từng ô nhịp.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Điệu Fox thường được ứng dụng phổ biến nhất cho những ca khúc ở số nhịp nào?",
        "options": [
          "Nhịp 2/4 hoặc 4/4 rộn rã, hành tiến",
          "Nhịp 3/4 đu đưa",
          "Nhịp 6/8 chậm rãi",
          "Nhịp tự do không có phách"
        ],
        "ans": 0,
        "exp": "Điệu Fox có cấu trúc 2 phách dứt khoát, rất phổ biến cho các ca khúc nhịp 2/4 hoặc 4/4 sôi nổi."
      },
      {
        "q": "Trong giọng Mi thứ, hợp âm bảy át (bậc V) là hợp âm nào?",
        "options": [
          "Hợp âm B7 (Si bảy)",
          "Hợp âm D7 (Rê bảy)",
          "Hợp âm C (Đô trưởng)",
          "Hợp âm G (Son trưởng)"
        ],
        "ans": 0,
        "exp": "Hợp âm bảy át của giọng Mi thứ hòa thanh là hợp âm Si bảy (B7), gồm 4 nốt: Si – Rê♯ – Fa♯ – La."
      },
      {
        "q": "Khi đệm điệu Fox, ngón cái (p) tay phải thực hiện thao tác gì giữa phách 1 và phách 2?",
        "options": [
          "Gảy luân phiên giữa nốt Bass chính (phách 1) và nốt Bass phụ (phách 2)",
          "Chỉ gảy một nốt duy nhất không đổi",
          "Không dùng ngón cái",
          "Gảy quạt chát cả 6 dây"
        ],
        "ans": 0,
        "exp": "Điệu Fox chuẩn yêu cầu ngón cái luân phiên gảy Bass chính ở phách 1 và Bass phụ ở phách 2 để tạo sự sinh động, rộn ràng."
      }
    ]
  },
  {
    "id": "gt-bai-7",
    "number": "Bài 7 (Guitar)",
    "title": "Hoà tấu tiểu phẩm âm nhạc Việt Nam",
    "page": "Trang 84",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Phối hợp hòa tấu • Giai điệu “Ngày đầu tiên đi học” (Nguyễn Ngọc Thiện) • Phân bè Lead & Rhythm",
    "staffKey": "ensemble_ngaydautien",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 84):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Hiểu nguyên tắc hòa tấu (ensemble) và vai trò của từng bè trong một dàn nhạc nhỏ.</li>\n            <li>Biết phối hợp giữa bè Guitar 1 (chơi giai điệu), bè Guitar 2 (đệm hòa âm Waltz) và nhạc cụ gõ.</li>\n            <li>Thể hiện thành công tiểu phẩm <em>Ngày đầu tiên đi học</em> (Nguyễn Ngọc Thiện) với nhịp 3/4 ăn khớp, cảm xúc.</li>\n          </ul>\n        </div>\n\n        <!-- 1. Phân bè hòa tấu -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-3\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-users text-base\"></i> 1. Phân công vai trò 3 bè trong ban hòa tấu\n          </h5>\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-rose-600 dark:text-rose-400 block mb-1 font-bold\">Bè Guitar 1 (Lead):</strong>\n              <p>Đảm nhận tấu giai điệu chính của bài hát; yêu cầu bấm nốt chính xác, tiếng đàn ngân vang thanh thoát, thể hiện các nốt luyến láy giàu cảm xúc.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-blue-600 dark:text-blue-400 block mb-1 font-bold\">Bè Guitar 2 (Rhythm):</strong>\n              <p>Đảm nhận phần đệm hợp âm theo tiết điệu Waltz nhịp 3/4 ($G, C, D$); giữ vai trò là \"chiếc đồng hồ\" duy trì tốc độ ổn định cho toàn ban nhạc.</p>\n            </div>\n            <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong class=\"text-emerald-600 dark:text-emerald-400 block mb-1 font-bold\">Bè Nhạc cụ gõ:</strong>\n              <p>Sử dụng thanh phách, trống con hoặc động tác gõ đùi; nhấn mạnh ở phách 1 của từng ô nhịp tạo điểm tựa nhịp điệu vững chắc.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 2. Quy trình luyện tập -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-slate-900 dark:text-white text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-list-check text-purple-600\"></i> 2. Quy trình luyện tập hòa tấu 4 bước chuẩn\n          </h5>\n          <p>• <strong>Bước 1 (Luyện riêng từng bè):</strong> Mỗi nhóm tự luyện tập phần bè của mình cho đến khi thuộc lòng nốt và nhịp độ.</p>\n          <p>• <strong>Bước 2 (Ghép đôi 2 bè):</strong> Ghép bè Guitar 1 với bè gõ; sau đó ghép bè Guitar 2 với bè gõ để cố định khung nhịp.</p>\n          <p>• <strong>Bước 3 (Tổng duyệt):</strong> Ghép cả 3 bè cùng lúc ở tốc độ chậm (Adagio), sau đó tăng dần lên đúng tốc độ quy định (Andante).</p>\n          <p>• <strong>Bước 4 (Xử lí sắc thái):</strong> Luyện nhịp vào đầu bài và kết bài theo cử chỉ bắt nhịp của người trưởng nhóm.</p>\n        </div>\n\n        <!-- 3. Tiêu chí đánh giá -->\n        <div class=\"p-3.5 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-xs\">\n          <strong class=\"text-emerald-900 dark:text-emerald-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-award text-emerald-600 mr-1\"></i> TIÊU CHÍ ĐÁNH GIÁ TIẾT MỤC HÒA TẤU:\n          </strong>\n          <p>1. Đúng cao độ và trường độ các nốt nhạc.<br>\n             2. Giữ nhịp độ chung ổn định từ đầu đến cuối.<br>\n             3. Âm lượng cân đối: Bè đệm không được át tiếng bè giai điệu.<br>\n             4. Phong cách biểu diễn tự tin, có sự giao lưu ánh mắt giữa các thành viên.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Trong một ban hòa tấu guitar, vai trò chủ đạo của bè Guitar 2 (bè đệm) là:",
        "options": [
          "Giữ nhịp điệu ổn định và tạo nền tảng hòa âm nâng đỡ cho bè giai điệu",
          "Chơi to nhất có thể để át tiếng bạn",
          "Chỉ bấm ngón tay mà không gảy",
          "Thích chơi tốc độ nào thì chơi"
        ],
        "ans": 0,
        "exp": "Bè đệm có vai trò tối quan trọng: tạo khung hòa âm và giữ nhịp chuẩn xác làm điểm tựa cho bè giai điệu tỏa sáng."
      },
      {
        "q": "Bài hát “Ngày đầu tiên đi học” của nhạc sĩ Nguyễn Ngọc Thiện được viết ở nhịp mấy?",
        "options": [
          "Nhịp 3/4 (Tiết điệu Waltz)",
          "Nhịp 2/4",
          "Nhịp 4/4",
          "Nhịp 6/8"
        ],
        "ans": 0,
        "exp": "Bài hát “Ngày đầu tiên đi học” viết ở nhịp 3/4, rất thích hợp hòa tấu theo tiết điệu Waltz nhịp nhàng."
      },
      {
        "q": "Khi ghép toàn bộ các bè trong buổi tập hòa tấu đầu tiên, ta nên bắt đầu ở tốc độ như thế nào?",
        "options": [
          "Tập ở tốc độ chậm trước để các bè lắng nghe và ăn khớp nhịp với nhau",
          "Tập ngay ở tốc độ thật nhanh",
          "Mỗi bè chơi theo tốc độ riêng của mình",
          "Chỉ đếm miệng không chơi đàn"
        ],
        "ans": 0,
        "exp": "Nguyên tắc luyện tập hòa tấu: bắt đầu ở tốc độ chậm để kiểm soát sự đồng bộ giữa các bè, sau đó mới tăng dần lên tempo chuẩn."
      }
    ]
  },
  {
    "id": "gt-bai-8",
    "number": "Bài 8 (Guitar)",
    "title": "Hoà tấu tiểu phẩm âm nhạc nước ngoài",
    "page": "Trang 89",
    "badge": "Lựa chọn B • Nhạc cụ Guitar",
    "subtitle": "Tiểu phẩm “Lullaby” (Johannes Brahms) • Kĩ năng lắng nghe đa thanh • Cân bằng âm lượng",
    "staffKey": "ensemble_lullaby",
    "content": "\n      <div class=\"space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed\">\n        \n        <!-- Yêu cầu cần đạt -->\n        <div class=\"p-3.5 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-xs\">\n          <strong class=\"text-purple-800 dark:text-purple-300 font-bold block mb-1\">\n            <i class=\"fa-solid fa-bullseye text-purple-600 mr-1.5\"></i> YÊU CẦU CẦN ĐẠT (SGK Trang 89):\n          </strong>\n          <ul class=\"list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300\">\n            <li>Nắm vững kĩ thuật hòa tấu tiểu phẩm cổ điển <em>Lullaby</em> của nhà soạn nhạc Johannes Brahms.</li>\n            <li>Rèn luyện kĩ năng lắng nghe đa thanh (polyphonic listening) và cân bằng cường độ giữa các bè guitar.</li>\n            <li>Biết tự nhận xét, đánh giá và dàn dựng tiết mục biểu diễn trước tập thể lớp.</li>\n          </ul>\n        </div>\n\n        <!-- 1. Tác phẩm Lullaby Brahms -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-purple-600 dark:text-purple-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-compact-disc text-base\"></i> 1. Giới thiệu tác phẩm “Lullaby” (Brahms)\n          </h5>\n          <p>• <strong>Tác giả:</strong> Nhà soạn nhạc kiệt xuất thời kì Lãng mạn người Đức <strong>Johannes Brahms (1833–1897)</strong>. Tác phẩm gốc là bài hát ru <em>Wiegenlied, Op. 49 No. 4</em> sáng tác năm 1868.</p>\n          <p>• <strong>Bản chuyển soạn:</strong> Được các nhạc sĩ Quang Tùng – Xuân Cung chuyển soạn công phu cho hòa tấu guitar hai bè ở giọng Son trưởng, nhịp 3/4 du dương, êm ái.</p>\n        </div>\n\n        <!-- 2. Kĩ thuật cân bằng cường độ & Lắng nghe đa thanh -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs\">\n          <h5 class=\"font-black text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-ear-listen text-base\"></i> 2. Kĩ năng Lắng nghe đa thanh & Cân bằng âm lượng\n          </h5>\n          <div class=\"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5\">\n            <p>• <strong>Bè trên cùng không phải lúc nào cũng là giai điệu chính:</strong> Cần đọc phân công bè trong bản nhạc để biết đoạn nào bè 1 giữ giai điệu, đoạn nào bè 2 đối ứng.</p>\n            <p>• <strong>Cân bằng cường độ:</strong> Bè đảm nhận giai điệu cần chơi ở mức độ vừa phải ($mf$ - mezzo-forte); bè đảm nhận phần đệm hòa âm phải gảy nhẹ nhàng ($p$ - piano) như tiếng sóng nước êm đềm, tạo không gian thanh thản cho tiếng hát ru cất lên.</p>\n            <p>• <strong>Kĩ năng lắng nghe đa thanh:</strong> Người chơi không chỉ nhìn vào khuông nhạc của mình mà tai phải luôn hướng về bè đối diện để điều chỉnh nhịp phách ăn khớp tuyệt đối.</p>\n          </div>\n        </div>\n\n        <!-- 3. Dàn dựng biểu diễn -->\n        <div class=\"p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2 text-xs\">\n          <h5 class=\"font-black text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2\">\n            <i class=\"fa-solid fa-people-group text-base\"></i> 3. Dàn dựng và biểu diễn tiểu phẩm\n          </h5>\n          <p>Có thể ghép thêm nhạc cụ gõ nhẹ (triangle, chuông gió chimes) hoặc động tác cơ thể để tăng thêm tính hấp dẫn cho tiết mục. Sau khi biểu diễn, các nhóm tự nhận xét dựa trên các tiêu chí: nhịp phách, cao độ, sắc thái và tính biểu cảm.</p>\n        </div>\n\n      </div>\n    ",
    "quiz": [
      {
        "q": "Tác phẩm ru con kinh điển “Lullaby” (Wiegenlied) là sáng tác bất hủ của nhà soạn nhạc Lãng mạn nào?",
        "options": [
          "Johannes Brahms (Đức)",
          "Franz Schubert",
          "Ludwig van Beethoven",
          "Frederic Chopin"
        ],
        "ans": 0,
        "exp": "Bản 'Lullaby' (Wiegenlied Op. 49) là kiệt tác ca khúc thính phòng lừng danh của nhà soạn nhạc người Đức Johannes Brahms."
      },
      {
        "q": "Trong kĩ thuật hòa tấu, kĩ năng 'lắng nghe đa thanh' (polyphonic listening) có nghĩa là:",
        "options": [
          "Vừa kiểm soát phần chơi của mình vừa chủ động lắng nghe bè của bạn để điều chỉnh nhịp độ và âm lượng hòa quyện",
          "Chỉ tập trung nghe tiếng đàn của mình",
          "Nghe tiếng ồn bên ngoài phòng học",
          "Tắt tiếng của bè bạn để tự chơi"
        ],
        "ans": 0,
        "exp": "Lắng nghe đa thanh là kĩ năng cao cấp của người diễn tấu: có thể phân tách thính giác để nghe cả bè của mình lẫn các bè hòa âm xung quanh."
      },
      {
        "q": "Bản chuyển soạn tiểu phẩm “Lullaby” trong SGK Âm nhạc 10 cho hòa tấu guitar được thực hiện bởi:",
        "options": [
          "Quang Tùng – Xuân Cung",
          "Nguyễn Ngọc Thiện",
          "Hồng Đăng",
          "Phạm Tuyên"
        ],
        "ans": 0,
        "exp": "Bản chuyển soạn cho hòa tấu guitar hai bè trong SGK Âm nhạc 10 do hai nhạc sĩ Quang Tùng và Xuân Cung thực hiện."
      }
    ]
  }
];

const musicTerms = [
  {
    "term": "Độc tấu (Solo)",
    "desc": "Một người hoặc một nhạc cụ duy nhất biểu diễn một phần nhạc hoặc trọn vẹn tác phẩm."
  },
  {
    "term": "Hòa tấu (Ensemble)",
    "desc": "Hình thức biểu diễn phối hợp từ hai nhạc cụ trở lên cùng loại hoặc khác loại."
  },
  {
    "term": "Âm nhạc đơn điệu (Monophonic)",
    "desc": "Âm nhạc chỉ có một bè giai điệu duy nhất, không có phần đệm hòa âm độc lập đi kèm."
  },
  {
    "term": "Âm nhạc phức điệu (Polyphonic)",
    "desc": "Âm nhạc gồm nhiều bè vang lên đồng thời, mỗi bè có sự phát triển giai điệu độc lập tương đối."
  },
  {
    "term": "Âm nhạc chủ điệu (Homophonic)",
    "desc": "Âm nhạc có một bè giai điệu chính nổi bật hoàn toàn, các bè còn lại giữ vai trò hỗ trợ, đệm hòa âm."
  },
  {
    "term": "Âm nhạc thính phòng (Chamber Music)",
    "desc": "Âm nhạc được viết và biểu diễn bởi nhóm nhạc cụ quy mô nhỏ trong không gian thính phòng ấm cúng."
  },
  {
    "term": "Giao hưởng (Symphony)",
    "desc": "Tác phẩm khí nhạc quy mô đồ sộ nhất, thường gồm 4 chương viết cho toàn bộ dàn nhạc giao hưởng lớn."
  },
  {
    "term": "Giao hưởng thơ (Symphonic Poem)",
    "desc": "Tác phẩm giao hưởng gồm một chương duy nhất, nội dung miêu tả dựa trên một cốt truyện văn học hoặc bài thơ."
  },
  {
    "term": "Hình thức Sonate",
    "desc": "Hình thức khí nhạc cổ điển gồm 3 phần lớn: Phần Trình bày (với 2 chủ đề tương phản), Phần Phát triển và Phần Tái hiện."
  },
  {
    "term": "Vocalise",
    "desc": "Kĩ thuật biểu diễn hoặc luyện thanh thể hiện toàn bộ giai điệu bằng các nguyên âm thay cho lời ca."
  },
  {
    "term": "Âm vực (Vocal/Instrumental Range)",
    "desc": "Khoảng cách cao độ từ âm thấp nhất đến âm cao nhất mà một giọng hát hoặc nhạc cụ có thể phát ra được."
  }
];

const examQuestions = [
  {
    "q": "Quãng hòa thanh trong âm nhạc được định nghĩa là:",
    "options": [
      "Hai âm vang lên đồng thời cùng một lúc",
      "Hai âm vang lên nối tiếp nhau",
      "Hai âm cách nhau đúng một quãng tám",
      "Hai âm vang lên ở hai phòng khác nhau"
    ],
    "ans": 0,
    "exp": "Quãng hòa thanh gồm hai âm phát ra đồng thời. Âm dưới là âm gốc, âm trên là âm ngọn."
  },
  {
    "q": "Hóa biểu của giọng Son trưởng (G major) và giọng Mi thứ (E minor) có điểm chung là gì?",
    "options": [
      "Đều có duy nhất một dấu thăng Fa♯ tại dòng kẻ thứ 5",
      "Đều có một dấu giáng Si♭",
      "Đều không có bất kì dấu hóa nào",
      "Đều có hai dấu thăng Fa♯ và Đô♯"
    ],
    "ans": 0,
    "exp": "Son trưởng và Mi thứ là cặp giọng song song, cùng chia sẻ hóa biểu gồm một dấu thăng Fa♯."
  },
  {
    "q": "Để phân biệt một bản nhạc viết ở giọng Son trưởng hay Mi thứ khi thấy hóa biểu có một dấu thăng Fa♯, ta căn cứ vào:",
    "options": [
      "Âm kết thúc bài, âm chủ và cảm giác màu sắc hòa thanh của giai điệu",
      "Tên của người chỉ huy dàn nhạc",
      "Số chỉ nhịp của bản nhạc",
      "Chỉ cần nhìn hóa biểu là đủ, không cần xem nốt kết"
    ],
    "ans": 0,
    "exp": "Vì cùng hóa biểu, bắt buộc phải xem xét nốt kết bài, âm chủ (Son hay Mi) và tính chất giai điệu để kết luận chính xác."
  },
  {
    "q": "Dân ca “Đèn cù” là di sản âm nhạc dân gian của vùng miền nào ở nước ta?",
    "options": [
      "Đồng bằng Bắc Bộ",
      "Nam Bộ",
      "Tây Nguyên",
      "Miền Trung (Quảng Trị)"
    ],
    "ans": 0,
    "exp": "Bài dân ca vui hoạt “Đèn cù” gắn liền với chiếc đèn kéo quân Trung thu của vùng đồng bằng Bắc Bộ."
  },
  {
    "q": "Tác phẩm nghe nhạc “Tiếng hát giữa rừng Pác Bó” do nhạc sĩ nào sáng tác vào năm 1959?",
    "options": [
      "Nguyễn Tài Tuệ",
      "Văn Cao",
      "Đỗ Nhuận",
      "Nguyễn Ngọc Thiện"
    ],
    "ans": 0,
    "exp": "Nhạc sĩ Nguyễn Tài Tuệ đã sáng tác ca khúc bất hủ này năm 1959 với chất liệu dân ca Tày, Nùng."
  },
  {
    "q": "Điệu thức trưởng có tính chất âm nhạc đặc trưng là:",
    "options": [
      "Tươi sáng, khỏe khoắn, hùng tráng",
      "Mềm mại, êm dịu, u buồn",
      "Huyền bí, ma mị",
      "Không có tính chất cụ thể"
    ],
    "ans": 0,
    "exp": "Do ba bậc I - III - V tạo thành hợp âm ba trưởng nên điệu thức trưởng luôn mang sắc thái tươi sáng, khỏe khoắn."
  },
  {
    "q": "Bài hát “Ơi cuộc sống mến thương” sáng tác năm 1978 là tác phẩm nổi tiếng của nhạc sĩ nào?",
    "options": [
      "Nguyễn Ngọc Thiện",
      "Phạm Tuyên",
      "Hồng Đăng",
      "Trần Long Ẩn"
    ],
    "ans": 0,
    "exp": "Bài hát lạc quan yêu đời này được nhạc sĩ Nguyễn Ngọc Thiện sáng tác vào năm 1978."
  },
  {
    "q": "Kĩ thuật hát mà hai nhóm hát cùng một giai điệu nhưng vào bè lệch nhau một khoảng thời gian gọi là:",
    "options": [
      "Hát đuổi (Canon)",
      "Hát bè phụ",
      "Hát ngẫu hứng",
      "Hát lĩnh xướng"
    ],
    "ans": 0,
    "exp": "Hát đuổi (Canon) là hình thức phức điệu mô phỏng, trong đó bè sau nhắc lại nguyên vẹn giai điệu của bè trước."
  },
  {
    "q": "Bốn bộ nhạc cụ chính cấu thành Dàn nhạc giao hưởng tiêu chuẩn gồm:",
    "options": [
      "Bộ gỗ, Bộ đồng, Bộ gõ, Bộ dây",
      "Bộ gõ, Bộ dây, Bộ phím, Bộ điện tử",
      "Bộ kèn, Bộ trống, Bộ đàn tranh, Bộ sáo",
      "Bộ dây, Bộ hơi, Bộ gõ, Bộ hát"
    ],
    "ans": 0,
    "exp": "Dàn nhạc giao hưởng kinh điển luôn gồm 4 bộ: Gỗ (Woodwinds), Đồng (Brass), Gõ (Percussion) và Dây (Strings)."
  },
  {
    "q": "Giao hưởng số 6 “Đồng quê” (Pastoral Symphony) của Beethoven có bao nhiêu chương?",
    "options": [
      "5 chương (mỗi chương đều có tiêu đề riêng)",
      "4 chương theo lối truyền thống",
      "3 chương nhanh - chậm - nhanh",
      "1 chương duy nhất"
    ],
    "ans": 0,
    "exp": "Khác với cấu trúc 4 chương kinh điển, Giao hưởng số 6 của Beethoven đặc biệt có 5 chương miêu tả trọn vẹn cảnh sắc thôn quê."
  },
  {
    "q": "Khoảng cách cao độ giữa âm chủ của giọng thứ và âm chủ của giọng trưởng song song luôn là:",
    "options": [
      "Quãng 3 thứ (1,5 cung)",
      "Quãng 3 trưởng (2 cung)",
      "Quãng 2 trưởng (1 cung)",
      "Quãng 4 đúng (2,5 cung)"
    ],
    "ans": 0,
    "exp": "Âm chủ của giọng thứ song song luôn nằm thấp hơn âm chủ giọng trưởng một quãng 3 thứ (1,5 cung)."
  },
  {
    "q": "Ca khúc “Kỉ niệm thành phố tuổi thơ” gợi nhắc kỉ niệm thời học trò là sáng tác của ai?",
    "options": [
      "Hồng Đăng",
      "Hoàng Hiệp",
      "Thanh Tùng",
      "Xuân Hồng"
    ],
    "ans": 0,
    "exp": "Ca khúc dạt dào cảm xúc tuổi trẻ này là sáng tác của nhạc sĩ Hồng Đăng."
  },
  {
    "q": "Bộ ba hợp âm ba chính xây dựng trên bậc I, IV, V của giọng Son trưởng là:",
    "options": [
      "G (Son trưởng), C (Đô trưởng), D (Rê trưởng)",
      "Em, Am, Bm",
      "C, F, G",
      "D, G, A"
    ],
    "ans": 0,
    "exp": "Ở giọng Son trưởng, bậc I là G, bậc IV là C và bậc V là D."
  },
  {
    "q": "Trong giọng Mi thứ hòa thanh, tại sao hợp âm bậc V lại là hợp âm B (Si trưởng) thay vì Bm (Si thứ)?",
    "options": [
      "Vì bậc VII (Rê) được nâng cao nửa cung thành Rê♯",
      "Vì bậc III được hạ thấp",
      "Vì bỏ bớt nốt Fa♯",
      "Vì thêm nốt Đô♯"
    ],
    "ans": 0,
    "exp": "Điệu thức thứ hòa thanh nâng bậc VII lên nửa cung tạo nốt dẫn hướng mạnh về âm chủ, biến hợp âm át thành hợp âm trưởng B (Si - Rê# - Fa#)."
  },
  {
    "q": "Tác phẩm hợp xướng “Cánh đồng yên tĩnh” là bản dân ca nổi tiếng của quốc gia nào?",
    "options": [
      "Nga",
      "Đức",
      "Ý",
      "Pháp"
    ],
    "ans": 0,
    "exp": "“Cánh đồng yên tĩnh” là dân ca Nga bất hủ được chuyển soạn hợp xướng bởi Xuân Cung."
  },
  {
    "q": "Nhà bác học, triết gia thời Hy Lạp cổ đại có đóng góp to lớn vào việc tìm ra mối liên hệ toán học trong âm thanh là:",
    "options": [
      "Pythagoras (Pi-ta-go)",
      "Aristotle",
      "Plato",
      "Archimedes"
    ],
    "ans": 0,
    "exp": "Pythagoras đã dùng dây đàn đơn (Monochord) để khám phá ra tỉ lệ toán học của các quãng âm thanh cơ bản."
  },
  {
    "q": "Tiểu phẩm piano “Venetian Boat Song” (Bài ca người chèo thuyền thành Venice) do nhạc sĩ nào sáng tác?",
    "options": [
      "Felix Mendelssohn",
      "Frédéric Chopin",
      "Franz Liszt",
      "Robert Schumann"
    ],
    "ans": 0,
    "exp": "Tiểu phẩm thuộc tuyển tập 'Những bài ca không lời' của nhà soạn nhạc Lãng mạn Felix Mendelssohn."
  },
  {
    "q": "Trong kĩ thuật thanh nhạc, 3 bước xử lí chuẩn một âm tiết tiếng Việt gồm:",
    "options": [
      "Khởi chữ (phụ âm đầu) – Mở chữ (nguyên âm) – Đóng chữ (phụ âm cuối)",
      "Hát to – Hát vừa – Hát nhỏ",
      "Lấy hơi – Nén hơi – Thở ra",
      "Ngân dài – Rung giọng – Ngắt tiếng"
    ],
    "ans": 0,
    "exp": "Quy trình phát âm chuẩn xác trong thanh nhạc gồm Khởi chữ, Mở chữ và Đóng chữ."
  },
  {
    "q": "Thang âm bốn âm cơ bản của bài dân ca “Cò lả” là:",
    "options": [
      "Sol – La – Si – Rê",
      "Đô – Rê – Mi – Sol",
      "Rê – Fa – Sol – La",
      "Mi – Sol – La – Si"
    ],
    "ans": 0,
    "exp": "Dân ca Cò lả đồng bằng Bắc Bộ xây dựng trên 4 âm cốt lõi: Sol - La - Si - Rê."
  },
  {
    "q": "Kĩ thuật hát chuyển giọng (Passaggio) là gì?",
    "options": [
      "Chuyển tiếp mềm mại giữa giọng ngực (giọng thật) sang giọng pha và giọng đầu (giọng giả)",
      "Chuyển bài hát này sang bài hát khác",
      "Đổi người hát đơn ca sang người khác",
      "Hát từ tiếng Việt chuyển sang tiếng Anh"
    ],
    "ans": 0,
    "exp": "Giọng chuyển là kĩ thuật chuyển giao êm ái giữa các âm khu của giọng hát khi giai điệu đi qua vùng âm vực nhạy cảm."
  },
  {
    "q": "Thứ tự 6 dây buông của đàn guitar từ dây 1 đến dây 6 là:",
    "options": [
      "Mi (E) – Si (B) – Sol (G) – Rê (D) – La (A) – Mi (E)",
      "La – Rê – Sol – Si – Mi – La",
      "Đô – Rê – Mi – Fa – Sol – La",
      "Mi – La – Rê – Sol – Si – Mi"
    ],
    "ans": 0,
    "exp": "Từ dây 1 (dưới cùng, mỏng nhất) lên dây 6 (trên cùng, dày nhất) là E - B - G - D - A - E."
  },
  {
    "q": "Độ ẩm lý tưởng để bảo quản đàn guitar gỗ tránh bị nứt thùng hoặc cong cần là:",
    "options": [
      "50% – 70%",
      "20% – 30%",
      "80% – 95%",
      "10% – 20%"
    ],
    "ans": 0,
    "exp": "Độ ẩm 50% - 70% là môi trường tối ưu cho các loại gỗ chế tác đàn guitar."
  },
  {
    "q": "Công thức tay phải đệm tiết điệu Waltz nhịp 3/4 trên đàn guitar là:",
    "options": [
      "Phách 1 gảy Bass (p); Phách 2 và 3 móc đồng thời 3 dây cao (i+m+a)",
      "Móc từng dây riêng rẽ 6 nốt",
      "Quạt chát cả 3 phách",
      "Chỉ gảy ngón cái ở phách 1 và 2"
    ],
    "ans": 0,
    "exp": "Điệu Van-xơ (Waltz) nhịp 3/4 có công thức đặc trưng: Bass - Chát - Chát (ngón p ở phách 1, i+m+a ở phách 2 và 3)."
  },
  {
    "q": "Bài hát “Ngày đầu tiên đi học” được hòa tấu bằng đàn guitar ở tiết điệu nào?",
    "options": [
      "Waltz (Nhịp 3/4 đu đưa nhịp nhàng)",
      "Fox (Nhịp 2/4)",
      "Rock (Nhịp 4/4)",
      "Disco"
    ],
    "ans": 0,
    "exp": "Bài hát được sáng tác ở nhịp 3/4, do đó được hòa tấu guitar theo tiết điệu Waltz."
  },
  {
    "q": "Tiểu phẩm hòa tấu guitar nước ngoài “Lullaby” là kiệt tác của nhà soạn nhạc Lãng mạn nào?",
    "options": [
      "Johannes Brahms (Đức)",
      "F. Chopin",
      "J. S. Bach",
      "G. F. Handel"
    ],
    "ans": 0,
    "exp": "Bài ru con 'Lullaby' nổi tiếng thế giới do nhạc sĩ Johannes Brahms sáng tác."
  }
];

module.exports = {
  part1_general,
  part2_singing,
  part2_guitar,
  musicTerms,
  examQuestions
};
