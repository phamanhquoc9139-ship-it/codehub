// Dữ liệu môn Giáo Dục Thể Chất 8 - Bộ sách Kết nối tri thức với cuộc sống
// Gồm 3 Phần lớn, 8 Chủ đề, đầy đủ 22 bài học / nội dung kĩ thuật, Sơ đồ SVG đầu bài và Hình minh họa từng nội dung

const partsData = [
  {
    id: "KTC",
    name: "Phần I. Kiến thức chung",
    badge: "Kiến thức chung",
    color: "emerald",
    topics: "Dinh dưỡng thể thao",
    desc: "Sử dụng chế độ dinh dưỡng thích hợp với bản thân trong luyện tập thể dục thể thao"
  },
  {
    id: "VDCB",
    name: "Phần II. Vận động cơ bản",
    badge: "Vận động cơ bản",
    color: "blue",
    topics: "4 Chủ đề Điền kinh & Thể dục",
    desc: "Chạy cự li ngắn (100 m), Nhảy cao kiểu bước qua, Chạy cự li trung bình, Bài tập thể dục nhịp điệu"
  },
  {
    id: "TTTC",
    name: "Phần III. Thể thao tự chọn",
    badge: "Thể thao tự chọn",
    color: "amber",
    topics: "3 Môn Thể thao tự chọn",
    desc: "Cầu lông, Bóng đá, Bóng rổ"
  }
];

const topicsData = [
  // ==================== PHẦN I. KIẾN THỨC CHUNG ====================
  {
    id: "dinh-duong",
    partId: "KTC",
    partName: "Phần I. Kiến thức chung",
    title: "Chủ đề. Sử dụng chế độ dinh dưỡng thích hợp trong luyện tập TDTT",
    desc: "Vai trò các nhóm chất dinh dưỡng; phân bố năng lượng các bữa ăn; quy tắc bù nước và nhu cầu dinh dưỡng theo loại hình vận động.",
    objectives: [
      "Hiểu rõ vai trò của dinh dưỡng đối với sức khỏe, sự phát triển và khả năng phục hồi sau tập luyện thể thao.",
      "Nắm vững tỉ lệ cân đối các nhóm chất: Carbohydrate (56-68%), Protein (12-14%), Lipid (20-30%) và phân bổ năng lượng trong ngày.",
      "Thực hiện đúng quy tắc bù nước và thời gian ăn uống trước - sau khi tập luyện để tránh chấn thương, đau tức dạ dày."
    ],
    // SVG 1: Kim tự tháp dinh dưỡng thể thao
    svgHeader: `
      <svg viewBox="0 0 750 145" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="115" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">CÂN ĐỐI NĂNG LƯỢNG VÀ THỜI ĐIỂM ĂN UỐNG TRONG LUYỆN TẬP TDTT</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="55" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">BỮA SÁNG (30%)</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#64748b">Cung cấp năng lượng khởi đầu ngày mới</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="55" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">BỮA TRƯA (45%)</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#64748b">Bữa chính giàu chất đạm, tinh bột, xơ</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="55" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">BỮA TỐI (25%)</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#64748b">Thanh đạm, dễ tiêu, hỗ trợ hồi phục cơ</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">KHOẢNG CÁCH TẬP</text>
          <text x="80" y="42" text-anchor="middle" font-size="8.5" fill="#2563eb">Sau ăn chính: 1.5 - 2.5 giờ</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-apple-whole text-emerald-600"></i>
            1. Các nhóm chất dinh dưỡng và tỉ lệ khẩu phần tham khảo
          </h4>
          <p>• <strong>Carbohydrate (Chất bột đường - 56&ndash;68%):</strong> Nguồn cung cấp năng lượng chủ yếu và nhanh nhất cho cơ bắp, đặc biệt là khi tập luyện tốc độ cao (gạo, bánh mì, khoai, yến mạch).</p>
          <p class="mt-1">• <strong>Protein (Chất đạm - 12&ndash;14%):</strong> Nguyên liệu xây dựng, phục hồi sợi cơ bị tổn thương sau vận động mạnh (thịt nạc, cá, trứng, sữa, đậu nành).</p>
          <p class="mt-1">• <strong>Lipid (Chất béo - 20&ndash;30%):</strong> Cung cấp năng lượng dự trữ bền bỉ và hòa tan các vitamin tan trong dầu (A, D, E, K).</p>
          <p class="mt-1">• <strong>Vitamin, khoáng chất &amp; Nước:</strong> Điều hòa quá trình trao đổi chất, chống chuột rút và ổn định thân nhiệt.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 1.1: Quy tắc bù nước và thời điểm tập luyện -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-bottle-water"></i> Hình 1.1: Nguyên tắc vàng bù nước và khoảng thời gian vàng trước/sau khi vận động
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(15, 12)">
              <rect width="155" height="75" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. TRƯỚC KHI TẬP</text>
              <text x="77" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Ăn trước: 1.5 - 2.5 giờ</text>
              <text x="77" y="58" text-anchor="middle" font-size="8.5" fill="#475569">Uống: 200 - 300 ml nước</text>
              <text x="77" y="70" text-anchor="middle" font-size="8" fill="#64748b">Tránh uống nước có ga</text>
            </g>
            <path d="M 175 50 L 190 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(195, 12)">
              <rect width="155" height="75" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
              <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2. TRONG KHI TẬP</text>
              <text x="77" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Nghỉ giữa hiệp uống từng ngụm</text>
              <text x="77" y="58" text-anchor="middle" font-size="8.5" fill="#475569">100 - 150 ml mỗi 15-20 phút</text>
              <text x="77" y="70" text-anchor="middle" font-size="8" fill="#059669">Không uống ừng ực</text>
            </g>
            <path d="M 355 50 L 370 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(375, 12)">
              <rect width="150" height="75" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">3. SAU KHI TẬP</text>
              <text x="75" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Nghỉ thả lỏng &gt; 30 phút</text>
              <text x="75" y="58" text-anchor="middle" font-size="8.5" fill="#475569">Bù nước khoáng / điện giải</text>
              <text x="75" y="70" text-anchor="middle" font-size="8" fill="#b45309">Ăn nhẹ hồi sức</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-person-running text-blue-600"></i>
            2. Nhu cầu dinh dưỡng theo từng hình thức vận động
          </h4>
          <p>• <strong>Vận động tốc độ (Chạy ngắn 100m, nhảy cao):</strong> Đòi hỏi năng lượng giải phóng cực nhanh &rarr; Cần bổ sung đủ carbohydrate trước buổi tập để tích trữ glycogen trong cơ bắp.</p>
          <p class="mt-1">• <strong>Vận động sức bền (Chạy trung bình 800m - 1500m):</strong> Thời gian dài &rarr; Tiêu hao nhiều nước và điện giải &rarr; Bù nước kịp thời và bổ sung bữa ăn giàu năng lượng dễ hấp thu.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Thời gian hợp lí nhất để bắt đầu buổi luyện tập thể thao sau khi ăn bữa chính là:",
        options: ["(Recommended) Khoảng 1.5 đến 2.5 giờ sau ăn", "Vừa ăn no xong tập ngay lập tức", "Chỉ cần 10 phút sau ăn", "Khoảng 6 đến 8 tiếng sau ăn"],
        ans: 0,
        expl: "Sau khi ăn 1.5 - 2.5 giờ, dạ dày đã tiêu hóa cơ bản thức ăn, tránh bị đau tức bụng hay sa dạ dày khi vận động mạnh."
      },
      {
        q: "Nhóm chất dinh dưỡng nào đóng vai trò là nguồn cung cấp năng lượng chủ yếu và nhanh nhất cho cơ thể khi chạy cự li ngắn?",
        options: ["(Recommended) Carbohydrate (Chất bột đường)", "Chất xơ", "Vitamin C", "Lipid (Chất béo khó tan)"],
        ans: 0,
        expl: "Carbohydrate chuyển hóa nhanh nhất thành glucose và glycogen cung cấp năng lượng bùng nổ tức thì."
      },
      {
        q: "Trong quá trình luyện tập thể thao ra nhiều mồ hôi, cách uống nước nào dưới đây là ĐÚNG ĐẮN nhất?",
        options: ["(Recommended) Uống từng ngụm nhỏ, chia làm nhiều lần, không uống quá nhiều một lúc", "Uống một hơi cạn cả bình nước đá lạnh 1 lít", "Nhịn uống tuyệt đối cho đến khi kết thúc buổi tập", "Chỉ uống nước ngọt có ga nhiều đường"],
        ans: 0,
        expl: "Uống từng ngụm nhỏ giúp cơ thể hấp thu nước từ từ, tránh gây áp lực quá tải đột ngột lên tim và dạ dày."
      },
      {
        q: "Tỉ lệ phân bổ năng lượng các bữa ăn trong ngày được SGK Giáo dục thể chất 8 khuyến nghị tham khảo là:",
        options: ["(Recommended) Bữa sáng 30%, Bữa trưa 45%, Bữa tối 25%", "Bữa sáng 10%, Bữa trưa 20%, Bữa tối 70%", "Ba bữa ăn chia đều 33.3% như nhau", "Bỏ qua bữa sáng, ăn thật nhiều vào bữa tối"],
        ans: 0,
        expl: "Bữa sáng 30% khởi động năng lượng, bữa trưa 45% duy trì hoạt động trong ngày, bữa tối 25% nhẹ nhàng thanh đạm."
      }
    ]
  },

  // ==================== PHẦN II. VẬN ĐỘNG CƠ BẢN ====================
  // CHỦ ĐỀ 1: CHẠY CỰ LI NGẮN (100 M)
  {
    id: "chay-ngan-100m",
    partId: "VDCB",
    partName: "Phần II. Vận động cơ bản",
    title: "Chủ đề 1. Chạy cự li ngắn (100 m)",
    desc: "Kĩ thuật xuất phát thấp; chạy lao sau xuất phát; chạy giữa quãng và kĩ thuật đánh đích (3 bài học).",
    objectives: [
      "Thực hiện thuần thục 3 khẩu lệnh xuất phát thấp: 'Vào chỗ!', 'Sẵn sàng!' và 'Chạy!'.",
      "Phối hợp nhịp nhàng giữa chạy lao sau xuất phát và chuyển tiếp sang giai đoạn chạy giữa quãng.",
      "Duy trì tốc độ cao nhất khi về đích, không giảm tốc trước vạch và biết kĩ thuật gập thân/nghiêng vai đánh đích."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#1d4ed8">4 GIAI ĐOẠN HOÀN CHỈNH KĨ THUẬT CHẠY CỰ LI NGẮN (100 M)</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">1. XUẤT PHÁT THẤP</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Vào chỗ &rarr; Sẵn sàng &rarr; Đạp bàn đạp</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">2. CHẠY LAO</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">15-20m đầu, thân ngả trước tăng tốc</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">3. CHẠY GIỮA QUÃNG</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Duy trì tần số & độ dài bước tối đa</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">4. VỀ ĐÍCH</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Gập thân/nghiêng vai chạm dây đích</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-flag-checkered text-blue-600"></i>
            Bài 1 &amp; 2: Xuất phát thấp, Chạy lao và Chạy giữa quãng
          </h4>
          <p>• <strong>Khẩu lệnh "Vào chỗ!":</strong> Tiến đến trước bàn đạp, ngồi xuống chống hai tay sau vạch xuất phát, đặt chân thuận vào bàn đạp trước, chân kia vào bàn đạp sau, gối chân sau chạm đất.</p>
          <p class="mt-1">• <strong>Khẩu lệnh "Sẵn sàng!":</strong> Từ từ nâng mông cao hơn vai một chút, trọng tâm dồn lên hai tay và chân trước, mắt nhìn chếch xuống cách vạch 1&ndash;1.5 m, nín thở tập trung nghe súng/còi.</p>
          <p class="mt-1">• <strong>Hiệu lệnh "Chạy!" (hoặc phát súng):</strong> Hai chân đạp mạnh vào bàn đạp, tay vung so le cực nhanh, thân người lao chếch về trước góc 45&ndash;50° so với mặt đất.</p>
          <p class="mt-1">• <strong>Chạy lao (15&ndash;20m đầu):</strong> Tăng dần độ dài bước và nâng dần thân người lên, duy trì hướng chạy thẳng tắp, không ngẩng đầu đột ngột.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 2.1: Tư thế xuất phát thấp 3 giai đoạn -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-person-running"></i> Hình 1.1: 3 Tư thế chuẩn trong kĩ thuật xuất phát thấp có bàn đạp
          </div>
          <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- Vạch xuất phát chung -->
            <line x1="30" y1="100" x2="510" y2="100" stroke="#94a3b8" stroke-width="2"/>
            
            <g transform="translate(30, 15)">
              <rect width="145" height="85" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="72" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">1. VÀO CHỖ</text>
              <circle cx="50" cy="50" r="6" fill="#3b82f6"/>
              <path d="M 50 56 L 65 75 L 85 85" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
              <path d="M 50 56 L 40 78 L 35 90" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
              <text x="72" y="78" text-anchor="middle" font-size="8" fill="#475569">Gối sau chạm đất</text>
            </g>

            <g transform="translate(195, 15)">
              <rect width="145" height="85" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
              <text x="72" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. SẴN SÀNG</text>
              <circle cx="55" cy="42" r="6" fill="#10b981"/>
              <path d="M 55 48 L 75 60 L 95 85" fill="none" stroke="#10b981" stroke-width="2.5"/>
              <path d="M 55 48 L 45 68 L 35 90" fill="none" stroke="#047857" stroke-width="2.5"/>
              <text x="72" y="78" text-anchor="middle" font-size="8" fill="#047857">Nâng mông cao hơn vai</text>
            </g>

            <g transform="translate(360, 15)">
              <rect width="145" height="85" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="72" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">3. RỜI BÀN ĐẠP</text>
              <circle cx="65" cy="38" r="6" fill="#f59e0b"/>
              <path d="M 65 44 L 85 55 L 115 70" fill="none" stroke="#f59e0b" stroke-width="3"/>
              <path d="M 65 44 L 40 70 L 25 90" fill="none" stroke="#b45309" stroke-width="3"/>
              <text x="72" y="78" text-anchor="middle" font-size="8" fill="#b45309">Đạp mạnh, lao góc 45°</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-ribbon text-emerald-600"></i>
            Bài 3: Kĩ thuật Chạy giữa quãng và Đánh đích
          </h4>
          <p>• <strong>Chạy giữa quãng:</strong> Đạt tốc độ cực đại, bước chạy đàn hồi trên nửa trước bàn chân, góc đạp sau khoảng 50&ndash;55°, đánh tay nhịp nhàng ngang hông.</p>
          <p class="mt-1">• <strong>Về đích:</strong> Duy trì tốc độ tối đa, cách vạch đích 1 bước chủ động gập nhanh thân trên ra trước (đánh ngực) hoặc xoay vai chạm dây đích. Tuyệt đối không nhảy qua đích hoặc giảm tốc trước vạch.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Ở tư thế 'Sẵn sàng' trong kĩ thuật xuất phát thấp, vị trí của mông so với vai như thế nào là CHUẨN KĨ THUẬT?",
        options: ["(Recommended) Từ từ nâng mông nhô cao hơn vai khoảng 10-20 cm", "Hạ thấp mông sát mặt đất", "Mông ngang bằng với đầu gối chân sau", "Đứng thẳng người lên hoàn toàn"],
        ans: 0,
        expl: "Nâng mông cao hơn vai giúp dồn trọng tâm về trước, tạo góc đạp thuận lợi nhất để lao đi khi có lệnh."
      },
      {
        q: "Khi về đích trong cự li chạy ngắn 100 m, vận động viên cần thực hiện động tác nào để đạt thành tích tốt nhất?",
        options: ["(Recommended) Duy trì tốc độ tối đa và chủ động gập thân hoặc nghiêng vai chạm dây đích", "Nhảy bật hai chân qua vạch đích", "Chủ động giảm tốc độ trước vạch đích 2-3 mét để tránh ngã", "Dừng khựng lại ngay trên vạch đích"],
        ans: 0,
        expl: "Không giảm tốc trước đích; ở bước cuối gập thân hoặc xoay vai về trước để phần thân trên chạm mặt phẳng đích sớm nhất."
      },
      {
        q: "Lỗi sai thường gặp nhất của học sinh ở giai đoạn chạy lao sau xuất phát là gì?",
        options: ["(Recommended) Ngẩng đầu và dựng thẳng thân người lên quá sớm", "Góc đạp sau quá lớn", "Bước chạy tăng dần độ dài", "Mắt nhìn chếch về phía trước"],
        ans: 0,
        expl: "Dựng người lên quá sớm làm tăng lực cản không khí và giảm hiệu quả lực đẩy tăng tốc của giai đoạn chạy lao."
      },
      {
        q: "Trong thi đấu chạy 100 m, vận động viên xuất phát trước khi có phát súng/hiệu lệnh của trọng tài thì bị coi là:",
        options: ["(Recommended) Phạm quy xuất phát (False start)", "Được khen ngợi vì phản xạ nhanh", "Được cộng thêm điểm thưởng", "Không tính vi phạm"],
        ans: 0,
        expl: "Rời bàn đạp trước súng phát lệnh là phạm quy xuất phát; theo luật điền kinh hiện hành có thể bị truất quyền thi đấu."
      }
    ]
  },

  // CHỦ ĐỀ 2: NHẢY CAO KIỂU BƯỚC QUA
  {
    id: "nhay-cao-buoc-qua",
    partId: "VDCB",
    partName: "Phần II. Vận động cơ bản",
    title: "Chủ đề 2. Nhảy cao kiểu bước qua",
    desc: "Kĩ thuật giậm nhảy đá lăng; chạy đà góc 25-40°; kĩ thuật qua xà và tiếp đất an toàn trên đệm/cát (4 bài học).",
    objectives: [
      "Xác định đúng chân giậm nhảy, góc độ chạy đà (25° – 40°) và cự li đà (6 – 8 bước đà).",
      "Thực hiện động tác giậm nhảy mạnh mẽ, chân lăng đá cao qua xà theo kiểu 'bước qua'.",
      "Rơi xuống đệm/hố cát an toàn bằng cách khuỵu gối hoãn xung, không để xà rơi."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#7e22ce">4 GIAI ĐOẠN KĨ THUẬT NHẢY CAO KIỂU BƯỚC QUA</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#c084fc" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">1. CHẠY ĐÀ</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Góc đà 25°-40°, nhịp tăng dần</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#c084fc" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">2. GIẬM NHẢY</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Đặt chân giậm gót sang mũi, đá lăng</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#c084fc" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">3. TRÊN KHÔNG</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Chân lăng qua trước, chân giậm theo sau</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#c084fc" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">4. TIẾP ĐẤT</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Chân lăng tiếp đất, khuỵu gối giảm chấn</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-arrows-up-to-line text-purple-600"></i>
            Bài 1 &amp; 2: Kĩ thuật Chạy đà và Giậm nhảy đá lăng
          </h4>
          <p>• <strong>Góc chạy đà:</strong> Chạy đà chếch so với mặt phẳng xà một góc từ <strong>25° đến 40°</strong> (nếu giậm chân trái thì chạy đà phía bên phải xà và ngược lại). Độ dài đà thường từ 6&ndash;8 bước.</p>
          <p class="mt-1">• <strong>Bước cuối chuẩn bị giậm:</strong> Bước đà áp chót dài hơn, đặt gót chân giậm lăn nhanh sang mũi bàn chân, gối hơi chùng; chân lăng vung mạnh từ sau ra trước lên cao, hai tay đánh lên ngang ngực tạo lực nâng.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 2.2: Góc chạy đà và tư thế qua xà bước qua -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-purple-600 dark:text-purple-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-ruler-combined"></i> Hình 2.1: Sơ đồ góc độ chạy đà 25°-40° và tư thế 'bước qua' xà
          </div>
          <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- Đệm nhảy và xà -->
            <rect x="240" y="30" width="120" height="70" fill="#e2e8f0" stroke="#64748b" rx="4"/>
            <text x="300" y="70" text-anchor="middle" font-size="10" fill="#475569">Đệm nhảy / Hố cát</text>
            <!-- Thanh xà ngang -->
            <line x1="220" y1="35" x2="380" y2="35" stroke="#ef4444" stroke-width="3"/>
            <circle cx="220" cy="35" r="3" fill="#ef4444"/>
            <circle cx="380" cy="35" r="3" fill="#ef4444"/>

            <!-- Đường chạy đà chếch 25-40 độ -->
            <path d="M 60 100 L 230 45" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="4,2"/>
            <text x="120" y="90" font-size="9.5" font-weight="bold" fill="#7e22ce">Đà chếch 25° - 40°</text>

            <!-- Điểm giậm nhảy -->
            <circle cx="230" cy="45" r="5" fill="#f59e0b"/>
            <text x="210" y="60" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b45309">Điểm giậm</text>

            <!-- Tư thế qua xà -->
            <g transform="translate(390, 20)">
              <rect width="130" height="85" rx="6" fill="#faf5ff" stroke="#c084fc"/>
              <text x="65" y="22" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7e22ce">KĨ THUẬT QUA XÀ</text>
              <text x="65" y="40" text-anchor="middle" font-size="8" fill="#475569">Chân lăng duỗi qua trước</text>
              <text x="65" y="55" text-anchor="middle" font-size="8" fill="#475569">Chân giậm co theo sau</text>
              <text x="65" y="72" text-anchor="middle" font-size="8" font-weight="bold" fill="#a855f7">Tiếp đất khuỵu gối</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-blue-600"></i>
            Bài 3 &amp; 4: Giai đoạn trên không, Rơi xuống đệm và Luật thi đấu
          </h4>
          <p>• <strong>Trên không:</strong> Khi chân lăng qua xà, nhanh chóng hạ chân lăng xuống phía bên kia đệm; đồng thời gập thân trên về trước, nâng chân giậm co đưa qua xà như động tác bước qua con mương.</p>
          <p class="mt-1">• <strong>Rơi xuống đệm:</strong> Chân lăng tiếp đất trước bằng nửa trước bàn chân, khuỵu gối sâu để giảm chấn động; giữ thăng bằng, tránh ngã đập lưng xuống cát.</p>
          <p class="mt-1">• <strong>Luật thi đấu:</strong> Bắt buộc phải giậm nhảy bằng một chân (giậm hai chân bị loại). Làm rơi xà hoặc chạy luồn dưới xà là phạm quy.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Góc chạy đà so với mặt phẳng xà trong kĩ thuật nhảy cao kiểu bước qua là bao nhiêu?",
        options: ["(Recommended) Từ 25° đến 40°", "Vuông góc 90°", "Chạy song song 0°", "Từ 75° đến 85°"],
        ans: 0,
        expl: "Góc đà chếch 25-40 độ giúp tạo không gian cho chân lăng quét rộng và chuyển động bước qua xà thuận lợi."
      },
      {
        q: "Theo luật điền kinh quốc tế, động tác giậm nhảy trong môn nhảy cao bắt buộc phải thực hiện bằng:",
        options: ["(Recommended) Giậm nhảy bằng 1 chân duy nhất", "Giậm nhảy bằng cả 2 chân cùng lúc", "Tùy ý nhảy 1 hoặc 2 chân", "Chống gậy xuống đất rồi bật lên"],
        ans: 0,
        expl: "Luật nhảy cao quy định vận động viên chỉ được phép giậm nhảy bằng một chân."
      },
      {
        q: "Trong giai đoạn qua xà kiểu bước qua, chân nào sẽ bay qua xà trước?",
        options: ["(Recommended) Chân lăng qua trước, chân giậm qua sau", "Chân giậm qua trước, chân lăng qua sau", "Cả hai chân cùng qua một lúc", "Đầu và lưng qua trước"],
        ans: 0,
        expl: "Chân lăng đá cao qua xà trước tiên, sau đó chân giậm co lại đưa qua theo kiểu bước chân."
      },
      {
        q: "Khi rơi xuống đệm/hố cát sau khi qua xà, động tác nào giúp hoãn xung tránh chấn thương khớp gối và cột sống?",
        options: ["(Recommended) Tiếp đất bằng nửa trước bàn chân và lập tức khuỵu gối sâu để giảm chấn", "Tiếp đất bằng gót chân giữ thẳng chân cứng ngắc", "Cố tình ngã nghiêng đập đầu xuống cát", "Bật ngược trở lại"],
        ans: 0,
        expl: "Khuỵu gối sâu đóng vai trò như bộ giảm xóc triệt tiêu phản lực từ mặt đất lên cột sống."
      }
    ]
  },

  // CHỦ ĐỀ 3: CHẠY CỰ LI TRUNG BÌNH
  {
    id: "chay-trung-binh",
    partId: "VDCB",
    partName: "Phần II. Vận động cơ bản",
    title: "Chủ đề 3. Chạy cự li trung bình",
    desc: "Kĩ thuật xuất phát cao; phân phối thể lực; nhịp thở 2 bước hít vào - 2 bước thở ra; vượt qua hiện tượng cực điểm.",
    objectives: [
      "Thực hiện đúng kĩ thuật xuất phát cao (khẩu lệnh 'Vào chỗ!' và 'Chạy!').",
      "Biết cách phân phối sức hợp lí trên suốt quãng đường chạy cự li trung bình.",
      "Thực hành nhịp thở sâu đều đặn, biết cách ứng phó vượt qua hiện tượng 'cực điểm'."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">PHÂN PHỐI SỨC VÀ NHỊP THỞ TRONG CHẠY CỰ LI TRUNG BÌNH</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">1. XUẤT PHÁT CAO</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Vào chỗ &rarr; Đứng chùng gối &rarr; Chạy</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">2. PHÂN PHỐI SỨC</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Không bung sức sớm, giữ tốc độ đều</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">3. NHỊP THỞ ĐỀU</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">2 bước hít vào &bull; 2 bước thở ra</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">4. HIỆN TƯỢNG CỰC ĐIỂM</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Giảm tốc nhẹ, thở sâu để vượt qua</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-heart-pulse text-emerald-600"></i>
            1. Kĩ thuật Xuất phát cao và Phân phối thể lực
          </h4>
          <p>• <strong>Xuất phát cao:</strong> Dùng 2 khẩu lệnh: "Vào chỗ!" (chân thuận đặt sát vạch xuất phát, chân kia lùi sau 1 bước, khuỵu gối, thân hơi ngả trước) và "Chạy!" (hoặc phát súng).</p>
          <p class="mt-1">• <strong>Phân phối sức:</strong> Tuyệt đối không xuất phát tháo chạy hết tốc lực vì sẽ bị kiệt sức nhanh chóng; cần giữ tốc độ đều, bước chạy có độ mở vừa phải, tiếp đất nhẹ nhàng bằng nửa bàn chân.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 2.3: Nhịp thở 2:2 và hiện tượng cực điểm -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-lungs"></i> Hình 3.1: Nhịp thở nhịp nhàng 2 bước hít vào - 2 bước thở ra sâu
          </div>
          <svg viewBox="0 0 540 90" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 10)">
              <rect width="230" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="115" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">2 BƯỚC CHẠY: HÍT VÀO</text>
              <text x="115" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Bước 1 (chân phải) + Bước 2 (chân trái)</text>
              <text x="115" y="58" text-anchor="middle" font-size="8" fill="#2563eb">&rarr; Hít sâu bằng mũi lấy đầy oxy</text>
            </g>
            <path d="M 260 45 L 280 45" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(290, 10)">
              <rect width="230" height="70" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
              <text x="115" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2 BƯỚC CHẠY: THỞ RA</text>
              <text x="115" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Bước 3 (chân phải) + Bước 4 (chân trái)</text>
              <text x="115" y="58" text-anchor="middle" font-size="8" fill="#047857">&rarr; Thở hết thán khí qua miệng</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-circle-exclamation text-blue-600"></i>
            2. Hiện tượng "Cực điểm" và cách khắc phục
          </h4>
          <p>• <strong>Hiện tượng cực điểm:</strong> Xuất hiện ở khoảng 1/3 đến nửa quãng đường chạy khi nhu cầu oxy vượt quá khả năng cung cấp của hệ tuần hoàn, gây cảm giác tức ngực, khó thở, chân tay nặng trĩu, muốn bỏ cuộc.</p>
          <p class="mt-1">• <strong>Cách xử trí:</strong> Giảm tốc độ chạy một chút, hít sâu thở dài có ý thức, dùng ý chí kiên định duy trì bước chạy. Cơ thể sẽ chuyển sang trạng thái "Hô hấp lần hai", cảm giác dễ chịu trở lại.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Kĩ thuật xuất phát nào được áp dụng chính thức trong môn chạy cự li trung bình?",
        options: ["(Recommended) Xuất phát cao (2 khẩu lệnh: 'Vào chỗ!' và 'Chạy!')", "Xuất phát thấp có bàn đạp", "Xuất phát tư thế ngồi xổm", "Xuất phát tư thế nằm sấp"],
        ans: 0,
        expl: "Chạy cự li trung bình dùng tư thế xuất phát cao, không dùng bàn đạp xuất phát."
      },
      {
        q: "Nhịp thở khoa học và phổ biến nhất được khuyến khích khi chạy cự li trung bình là:",
        options: ["(Recommended) 2 bước hít vào sâu bằng mũi - 2 bước thở ra chủ động bằng miệng", "10 bước mới thở một lần", "Nín thở hoàn toàn trong suốt quãng đường", "Thở thật nhanh và nông liên tục"],
        ans: 0,
        expl: "Nhịp thở 2 bước hít vào - 2 bước thở ra tạo nhịp điệu hài hòa với bước chạy, cung cấp đủ oxy cho cơ bắp."
      },
      {
        q: "Khi gặp hiện tượng 'Cực điểm' (thở dốc, tức ngực, chân nặng trĩu) trong lúc đang chạy, em nên làm gì?",
        options: ["(Recommended) Chủ động giảm nhẹ tốc độ, tập trung hít sâu thở dài bằng ý chí để vượt qua", "Dừng khựng lại và ngồi bệt xuống đất ngay lập tức", "Cố tình tăng tốc chạy thật nhanh", "Nằm ngửa ra đường chạy"],
        ans: 0,
        expl: "Duy trì ý chí, giảm nhẹ tốc độ và thở sâu sẽ giúp cơ thể nhanh chóng chuyển sang trạng thái 'hô hấp lần hai'."
      },
      {
        q: "Sau khi chạy qua vạch đích của cự li trung bình, vận động viên cần làm gì để bảo đảm an toàn tính mạng?",
        options: ["(Recommended) Tiếp tục đi bộ chậm rãi, thả lỏng tay chân và hít thở sâu, không ngồi xuống ngay", "Ngồi phịch xuống đất nghỉ ngơi lập tức", "Uống ngay 1 lít nước ngọt có ga", "Nằm sấp xuống đường chạy"],
        ans: 0,
        expl: "Dừng đột ngột sau khi gắng sức có thể làm máu ứ đọng ở chi dưới, gây thiếu máu não tạm thời và ngất xỉu."
      }
    ]
  },

  // CHỦ ĐỀ 4: BÀI TẬP THỂ DỤC NHỊP ĐIỆU
  {
    id: "the-duc-nhip-dieu",
    partId: "VDCB",
    partName: "Phần II. Vận động cơ bản",
    title: "Chủ đề 4. Bài tập thể dục nhịp điệu",
    desc: "Các động tác thể dục nhịp điệu phối hợp nhịp 1-8: chạy tại chỗ, tay ngực, vươn người, bật tách chụm chân, lườn, bật nhảy co gối (2 bài học).",
    objectives: [
      "Thực hiện chính xác các động tác thể dục nhịp điệu theo đúng biên độ, phương hướng và nhịp điệu 1-8.",
      "Phát triển tính dẻo dai, khéo léo, khả năng định hướng không gian và cảm thụ âm nhạc.",
      "Tự giác duy trì tập luyện bài thể dục buổi sáng và giữa giờ tại trường."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#fdf4ff" stroke="#d946ef" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#a21caf">CÁC ĐỘNG TÁC CHÍNH BÀI THỂ DỤC NHỊP ĐIỆU LỚP 8</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#f0abfc" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#86198f">1. TAY NGỰC & VƯƠN</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Mở rộng lồng ngực, hít thở</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#f0abfc" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#86198f">2. BẬT TÁCH CHỤM</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Bật chân nhịp nhàng, êm ái</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#f0abfc" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#86198f">3. NGHIÊNG LƯỜN</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Căng giãn cơ liên sườn hai bên</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#f0abfc" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#86198f">4. NHẢY CO GỐI</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Nâng cao đùi, tiếp đất hoãn xung</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-fuchsia-50 dark:bg-fuchsia-950/40 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
          <h4 class="font-bold text-fuchsia-900 dark:text-fuchsia-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-fuchsia-600"></i>
            Bài 1 &amp; 2: Các động tác bài thể dục nhịp điệu liên hoàn
          </h4>
          <p>• <strong>Động tác Tay ngực &amp; Vươn người:</strong> Đưa tay ngang ngực rồi mở rộng sang hai bên, ngực ưỡn, hít vào sâu; nhịp tiếp theo đưa tay lên cao chếch chữ V, mắt nhìn theo tay.</p>
          <p class="mt-1">• <strong>Bật tách &ndash; chụm chân:</strong> Nhún gối bật nhẹ tách hai chân bằng vai, hai tay dang ngang; sau đó bật chụm chân thu tay về đùi. Tiếp đất êm bằng mũi bàn chân.</p>
          <p class="mt-1">• <strong>Nghiêng lườn &amp; Bật nhảy co gối:</strong> Nghiêng thân sang trái/phải tối đa mà không xoay hông; bật nhảy co gối nhịp nhàng theo phách nhạc sôi động.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Khi thực hiện các động tác bật nhảy trong bài thể dục nhịp điệu, việc tiếp đất cần tuân thủ kĩ thuật nào?",
        options: ["(Recommended) Tiếp đất nhẹ nhàng bằng mũi bàn chân rồi khuỵu gối để hoãn xung", "Tiếp đất bằng gót chân thật mạnh", "Chân giữ thẳng đơ không gập gối", "Tiếp đất bằng đầu gối chạm sàn"],
        ans: 0,
        expl: "Tiếp đất bằng nửa trước bàn chân và khuỵu gối nhẹ giúp hấp thụ lực va chạm, bảo vệ khớp cổ chân và gối."
      },
      {
        q: "Lợi ích lớn nhất của việc luyện tập bài thể dục nhịp điệu theo nhạc là gì?",
        options: ["(Recommended) Giúp cơ thể dẻo dai, phát triển khiếu thẩm mĩ vận động và giải tỏa căng thẳng học tập", "Chỉ để biểu diễn thi đấu chuyên nghiệp", "Tăng trọng lượng cơ thể nhanh chóng", "Không có tác dụng rèn luyện thể lực"],
        ans: 0,
        expl: "Thể dục nhịp điệu rèn luyện sự linh hoạt, dẻo dai và mang lại tinh thần sảng khoái, yêu đời."
      },
      {
        q: "Động tác lườn trong bài thể dục nhịp điệu có tác dụng chính tác động lên nhóm cơ nào?",
        options: ["(Recommended) Nhóm cơ liên sườn và cột sống", "Cơ bắp chân", "Cơ ngón tay", "Cơ mặt"],
        ans: 0,
        expl: "Nghiêng lườn sang hai bên kéo giãn nhóm cơ liên sườn, giúp lồng ngực linh hoạt và thở sâu hơn."
      },
      {
        q: "Để thực hiện bài thể dục nhịp điệu đều và đẹp trong tập thể lớp, học sinh cần chú ý điều gì?",
        options: ["(Recommended) Lắng nghe nhịp đếm/nhạc, giữ đúng cự li đội hình và thực hiện động tác dứt khoát cùng nhịp", "Mỗi người làm một nhịp theo ý thích riêng", "Làm thật nhanh để kết thúc sớm", "Đứng yên không cử động tay"],
        ans: 0,
        expl: "Sự đồng đều và nhịp nhàng theo nhạc là linh hồn của bài thể dục nhịp điệu đồng diễn."
      }
    ]
  },

  // ==================== PHẦN III. THỂ THAO TỰ CHỌN ====================
  // MÔN 1: CẦU LÔNG
  {
    id: "cau-long",
    partId: "TTTC",
    partName: "Phần III. Thể thao tự chọn",
    title: "Chủ đề 1. Cầu lông",
    desc: "Di chuyển lùi đánh cầu cao tay bên phải; kĩ thuật đập cầu thuận tay; di chuyển ngang đập cầu (3 bài học).",
    objectives: [
      "Nắm vững kĩ thuật di chuyển lùi và di chuyển ngang đón cầu trên sân.",
      "Thực hiện chính xác kĩ thuật đánh cầu cao tay và đập cầu thuận tay (điểm tiếp xúc cầu trên cao phía trước).",
      "Hiểu luật thi đấu cơ bản (sân đơn, sân đôi, giao cầu) và phối hợp ăn ý trong đấu tập."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#b45309">KĨ THUẬT ĐẬP CẦU THUẬN TAY VÀ DI CHUYỂN BƯỚC TRONG CẦU LÔNG</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#fcd34d" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">1. DI CHUYỂN LÙI</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Bước trượt lùi đón cầu sâu góc phải</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#fcd34d" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">2. ĐẬP CẦU THUẬN TAY</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Điểm đánh cao trước trán, gập cổ tay</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#fcd34d" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">3. DI CHUYỂN NGANG</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Bước chéo ngang bao quát 2 biên</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#fcd34d" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">4. HỒI VỊ TRÍ TRUNG TÂM</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Trở về chữ T sau mỗi cú đánh</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-feather text-amber-600"></i>
            Kĩ thuật Đập cầu thuận tay (Smash) và Di chuyển bộ pháp
          </h4>
          <p>• <strong>Đập cầu thuận tay:</strong> Vũ khí tấn công uy lực nhất; khi cầu đối phương bay cao, di chuyển nhanh đón cầu, xoay người đưa vợt ra sau gáy; vung cánh tay thẳng lên cao và dùng lực bộc phát gập nhanh cổ tay khi tiếp xúc cầu ở điểm cao nhất phía trước trán, cắm cầu sang sân đối phương.</p>
          <p class="mt-1">• <strong>Nguyên tắc di chuyển:</strong> Sau khi đánh cầu xong, lập tức dùng chân bật trở về vị trí trung tâm sân (gần ngã ba chữ T) ở tư thế sẵn sàng đón đường cầu tiếp theo.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Điểm tiếp xúc giữa mặt vợt và quả cầu trong kĩ thuật Đập cầu thuận tay chuẩn xác là ở đâu?",
        options: ["(Recommended) Ở điểm cao nhất phía trên và hơi chếch về trước trán", "Ở ngang tầm thắt lưng", "Ở phía sau đầu khi cầu đã rơi xuống thấp", "Sát mặt đất"],
        ans: 0,
        expl: "Tiếp xúc cầu ở điểm cao nhất phía trước trán giúp đập bóng đi cắm xuống mặt sân đối phương với tốc độ tối đa."
      },
      {
        q: "Sau khi thực hiện xong một cú đánh cầu (dù là đập cầu hay phông cầu), hành động tiếp theo của người chơi là:",
        options: ["(Recommended) Nhanh chóng di chuyển bước về vị trí trung tâm sân ở tư thế sẵn sàng", "Đứng yên tại chỗ ngắm quả cầu bay", "Ngồi xuống sân nghỉ", "Quay lưng lại nhìn khán giả"],
        ans: 0,
        expl: "Hồi vị về trung tâm sân là nguyên tắc sống còn trong cầu lông để kịp thời bao quát các góc sân tiếp theo."
      },
      {
        q: "Trong thi đấu cầu lông đánh đơn, quả cầu rơi vào khoảng giữa đường biên dọc bên trong và đường biên dọc bên ngoài được tính là:",
        options: ["(Recommended) Cầu ngoài sân (Out)", "Cầu trong sân (In)", "Được phát lại cầu", "Cộng điểm cho người đánh"],
        ans: 0,
        expl: "Đánh đơn sử dụng đường biên dọc phía trong; cầu rơi ngoài đường này là cầu ngoài."
      },
      {
        q: "Bộ phận nào trên cơ thể đóng vai trò quyết định tạo ra độ cắm và tốc độ bộc phát của cú đập cầu?",
        options: ["(Recommended) Khớp cổ tay (động tác gập cổ tay nhanh)", "Khớp đầu gối", "Bàn chân", "Bả vai đứng yên"],
        ans: 0,
        expl: "Lực vung cánh tay kết hợp với cú gập cổ tay dứt khoát vào thời điểm chạm cầu tạo nên uy lực của cú Smash."
      }
    ]
  },

  // MÔN 2: BÓNG ĐÁ
  {
    id: "bong-da",
    partId: "TTTC",
    partName: "Phần III. Thể thao tự chọn",
    title: "Chủ đề 2. Bóng đá",
    desc: "Đá bóng bằng mu ngoài bàn chân; đánh đầu bằng trán giữa; dừng bóng bằng đùi và lòng bàn chân; dẫn bóng bằng mu giữa (3 bài học).",
    objectives: [
      "Thực hiện đúng kĩ thuật đá bóng bằng mu ngoài (tạo đường bóng xoáy má ngoài hiểm hóc).",
      "Nắm vững kĩ thuật đánh đầu bằng trán giữa an toàn, chính xác (không dùng đỉnh đầu).",
      "Thành thạo kĩ thuật dừng bóng bằng đùi/lòng bàn chân và dẫn bóng mu giữa luồn lách."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#1d4ed8">KĨ THUẬT ĐẶC TRƯNG MÔN BÓNG ĐÁ LỚP 8</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">1. ĐÁ MU NGOÀI</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Cổ chân bẻ vào trong, bóng xoáy</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">2. ĐÁNH ĐẦU TRÁN GIỮA</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Gập thân trên, mắt mở nhìn bóng</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">3. DỪNG ĐÙI & LÒNG</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Thả lỏng hoãn xung, bóng gần chân</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">4. DẪN MU GIỮA</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Đẩy bóng bước ngắn có kiểm soát</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-futbol text-blue-600"></i>
            Kĩ thuật Đá bóng mu ngoài bàn chân và Đánh đầu trán giữa
          </h4>
          <p>• <strong>Đá bóng bằng mu ngoài bàn chân:</strong> Đặt chân trụ cách bóng 15&ndash;20 cm chếch phía sau; chân đá vung từ sau ra trước, mũi bàn chân xoay vào trong, cổ chân khóa cứng; điểm tiếp xúc là phần mu ngoài chạm vào tâm hoặc hơi lệch tâm bóng tạo độ xoáy má ngoài hiểm hóc.</p>
          <p class="mt-1">• <strong>Đánh đầu bằng trán giữa:</strong> Mắt luôn mở theo dõi bóng; thân người ngả nhẹ ra sau rồi chủ động dùng cơ bụng và lưng gập nhanh thân trên về trước; tiếp xúc bóng chính diện bằng phần xương trán cứng nhất (tuyệt đối không dùng đỉnh đầu vì dễ choáng và chấn thương đốt sống cổ).</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Bộ phận nào trên đầu được sử dụng chuẩn xác nhất để thực hiện kĩ thuật đánh đầu trong bóng đá?",
        options: ["(Recommended) Phần trán giữa (xương trán phẳng và cứng)", "Đỉnh đầu", "Phía sau gáy", "Thái dương hai bên"],
        ans: 0,
        expl: "Xương trán giữa phẳng, dày và cứng nhất, giúp định hướng bóng chuẩn xác và an toàn cho đốt sống cổ."
      },
      {
        q: "Khi thực hiện kĩ thuật dừng bóng bằng đùi từ đường chuyền bổng, cầu thủ cần làm gì để bóng không bị nảy văng ra xa?",
        options: ["(Recommended) Nâng đùi đón bóng và chủ động hạ đùi xuống ngay khi bóng chạm để hoãn xung giảm lực", "Gồng cứng cơ đùi và hất mạnh đùi lên cao", "Dùng hai tay ôm chặt quả bóng", "Nhảy bật hai chân lên trời"],
        ans: 0,
        expl: "Hạ đùi nhịp nhàng theo chiều rơi của bóng giúp triệt tiêu lực đàn hồi, giữ bóng êm ái ngay dưới chân."
      },
      {
        q: "Kĩ thuật đá bóng bằng mu ngoài bàn chân có ưu điểm nổi bật nào trong thi đấu?",
        options: ["(Recommended) Có thể chuyền hoặc sút bóng xoáy vòng cung bất ngờ mà không cần đổi hướng chạy", "Lực sút luôn nhẹ hơn đá lòng bàn chân", "Chỉ dùng để đá bóng ra ngoài sân", "Bóng luôn bay thẳng tắp không xoáy"],
        ans: 0,
        expl: "Đá mu ngoài tạo quỹ đạo cong má ngoài rất khó đoán, giúp xử lí nhanh trong phạm vi hẹp."
      },
      {
        q: "Trong môn bóng đá, cầu thủ ở vị trí nào được phép dùng tay chơi bóng trong vòng cấm địa của đội mình?",
        options: ["(Recommended) Thủ môn", "Tiền đạo", "Hậu vệ thòng", "Đội trưởng"],
        ans: 0,
        expl: "Chỉ thủ môn trong khu vực cấm địa (16m50) của đội mình mới có quyền dùng tay bắt và cản phá bóng."
      }
    ]
  },

  // MÔN 3: BÓNG RỔ
  {
    id: "bong-ro",
    partId: "TTTC",
    partName: "Phần III. Thể thao tự chọn",
    title: "Chủ đề 3. Bóng rổ",
    desc: "Kĩ thuật dẫn bóng cao/thấp; chuyền bắt bóng hai tay trên đầu; kĩ thuật 2 bước ném rổ một tay dưới thấp (Lay-up) (3 bài học).",
    objectives: [
      "Thực hiện thành thạo kĩ thuật dẫn bóng đổi hướng mà không cần nhìn chằm chằm vào bóng.",
      "Thực hiện kĩ thuật chuyền và bắt bóng hai tay trên đầu có lực và chính xác cự li 3-5 mét.",
      "Phối hợp đúng nhịp 2 bước lên rổ (Lay-up) một tay dưới thấp ném bóng vào rổ chuẩn xác."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#c2410c">KĨ THUẬT NỀN TẢNG MÔN BÓNG RỔ LỚP 8</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#fdba74" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9a3412">1. DẪN BÓNG</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Dùng ngón & cổ tay đẩy bóng nảy</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#fdba74" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9a3412">2. CHUYỀN TRÊN ĐẦU</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Cầm bóng đỉnh đầu, duỗi tay chuyền</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#fdba74" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9a3412">3. HAI BƯỚC LÊN RỔ</text>
          <text x="77" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Bước 1 dài, bước 2 ngắn bật cao</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#fdba74" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9a3412">4. NÉM DƯỚI THẤP</text>
          <text x="80" y="40" text-anchor="middle" font-size="8.5" fill="#64748b">Nâng bóng ngửa bàn tay đặt vào rổ</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-basketball text-orange-600"></i>
            Kĩ thuật Hai bước ném rổ một tay dưới thấp (Lay-up)
          </h4>
          <p>• <strong>Kĩ thuật 2 bước ném rổ một tay dưới thấp:</strong> Khi dẫn bóng tiếp cận rổ (từ bên phải):</p>
          <ul class="list-disc pl-5 mt-1 space-y-0.5 text-xs">
            <li><strong>Bước 1:</strong> Chân phải bước một bước dài ôm bóng chắc bằng hai tay trước ngực.</li>
            <li><strong>Bước 2:</strong> Chân trái bước ngắn hơn đặt gót lăn sang mũi chân và đạp mạnh bật người lên cao.</li>
            <li><strong>Đưa bóng &amp; Ném:</strong> Nâng đùi chân phải lên, tay phải ngửa bàn tay nâng bóng từ dưới lên cao sát vành rổ, dùng các ngón tay xoay miết nhẹ đưa bóng nảy bảng vào rổ; tiếp đất êm bằng hai chân khuỵu gối.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Trong kĩ thuật hai bước lên rổ (ném rổ một tay dưới thấp) từ phía bên phải rổ, trình tự chân bước là:",
        options: ["(Recommended) Bước 1 chân phải (bước dài ôm bóng) - Bước 2 chân trái (bước ngắn giậm bật)", "Bước 1 chân trái - Bước 2 chân phải", "Nhảy chụm cả hai chân cùng lúc rồi chạy tiếp", "Chạy 5 bước liên tục không đập bóng"],
        ans: 0,
        expl: "Lên rổ bên phải: bước 1 chân phải dài thu bóng, bước 2 chân trái ngắn để giậm bật thẳng đứng đưa tay phải đặt bóng vào rổ."
      },
      {
        q: "Khi dẫn bóng trong môn bóng rổ, hành động nào sau đây là ĐÚNG KĨ THUẬT?",
        options: ["(Recommended) Dùng các ngón tay và độ linh hoạt của cổ tay ấn đẩy bóng nảy xuống sàn", "Dùng cả lòng bàn tay đập mạnh chát chát vào quả bóng", "Ôm bóng chạy vòng quanh sân mà không đập bóng", "Dùng hai tay đập bóng liên tục cùng lúc"],
        ans: 0,
        expl: "Các ngón tay xòe rộng và độ dẻo cổ tay đóng vai trò điều khiển nhịp nảy và hướng đi của bóng."
      },
      {
        q: "Lỗi chạy bước (Traveling) trong bóng rổ xảy ra khi cầu thủ:",
        options: ["(Recommended) Cầm bóng trong tay và di chuyển từ 3 bước trở lên mà không dẫn bóng", "Dẫn bóng liên tục tiến về phía trước", "Chuyền bóng cho đồng đội sau 1 bước chạy", "Ném bóng trúng bảng rổ"],
        ans: 0,
        expl: "Luật bóng rổ quy định sau khi ngừng dẫn bóng chỉ được phép bước tối đa 2 bước trước khi chuyền hoặc ném."
      },
      {
        q: "Mục đích chính của đường chuyền bóng hai tay trên đầu là:",
        options: ["(Recommended) Chuyền bóng cự li trung bình qua đầu đối phương đang giơ tay phòng thủ", "Để ném bóng ra ngoài sân", "Chuyền bóng lăn sát mặt đất", "Để tự ném bóng cho chính mình bắt"],
        ans: 0,
        expl: "Chuyền hai tay trên đầu giúp bóng bay bổng vượt qua tầm với cản phá của hậu vệ đối phương."
      }
    ]
  }
];

module.exports = { partsData, topicsData };
