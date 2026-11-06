// Part 2: Chuong III (An toan dien), Chuong IV (Ki thuat dien), Chuong V (Thiet ke ki thuat) - Bai 11 den Bai 20
// Bo sach Ket noi tri thuc voi cuoc song (GDPT 2018)

const lessonsPart2 = [
  // BÀI 11
  {
    id: "bai-11",
    lessonNum: 11,
    chapterNum: "III",
    chapterName: "Chương III: An toàn điện",
    title: "Bài 11: Tai nạn điện",
    tag: "Nguy cơ & Tai nạn điện",
    objectives: [
      "Hiểu khái niệm tai nạn điện và mức độ nguy hiểm phụ thuộc vào cường độ dòng điện, thời gian tiếp xúc và đường đi của dòng điện qua cơ thể.",
      "Phân tích 3 nguyên nhân chủ yếu gây ra tai nạn điện: chạm trực tiếp vật mang điện, vi phạm khoảng cách an toàn với điện cao áp (phóng điện), đến gần dây điện đứt rơi xuống đất (điện áp bước).",
      "Nhận biết các yếu tố làm gia tăng nguy cơ tai nạn điện: môi trường ẩm ướt, cách điện bị hư hỏng, thiếu hiểu biết.",
      "Nhận biết các dấu hiệu cảnh báo khu vực nguy hiểm về điện (biển báo, rào chắn, tia lửa điện)."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">3 NGUYÊN NHÂN CHÍNH GÂY TAI NẠN ĐIỆN NGUY HIỂM</text>
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="135" height="60" rx="8" fill="#fee2e2" stroke="#f87171"/>
        <text x="67" y="20" fill="#991b1b">1. CHẠM TRỰC TIẾP</text>
        <text x="67" y="38" font-size="9.5" font-weight="normal" fill="#7f1d1d">• Dây trần, ổ cắm hở</text>
        <text x="67" y="52" font-size="9.5" font-weight="normal" fill="#7f1d1d">• Vỏ thiết bị rò điện</text>

        <rect x="155" y="0" width="135" height="60" rx="8" fill="#fee2e2" stroke="#f87171"/>
        <text x="222" y="20" fill="#991b1b">2. PHÓNG ĐIỆN CAO ÁP</text>
        <text x="222" y="38" font-size="9.5" font-weight="normal" fill="#7f1d1d">• Vi phạm khoảng cách</text>
        <text x="222" y="52" font-size="9.5" font-weight="normal" fill="#7f1d1d">• Phóng tia lửa qua kk</text>

        <rect x="310" y="0" width="130" height="60" rx="8" fill="#fee2e2" stroke="#f87171"/>
        <text x="375" y="20" fill="#991b1b">3. ĐIỆN ÁP BƯỚC</text>
        <text x="375" y="38" font-size="9.5" font-weight="normal" fill="#7f1d1d">• Dây đứt rơi xuống đất</text>
        <text x="375" y="52" font-size="9.5" font-weight="normal" fill="#7f1d1d">• Chênh lệch thế 2 chân</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
            1. Ba nguyên nhân chủ yếu gây tai nạn điện
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-triangle-exclamation"></i> Hình 11.1: Hiện tượng Điện Áp Bước khi dây dẫn cao thế rơi chạm mặt đất
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="85" x2="520" y2="85" stroke="#78716c" stroke-width="3"/>
        <path d="M 100 15 L 120 85" stroke="#dc2626" stroke-width="2.5"/>
        <polygon points="120,85 128,77 125,87 135,83 120,95" fill="#f59e0b"/>
        <text x="120" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Điểm chạm đất (U max)</text>
        
        <path d="M 60 85 A 60 60 0 0 1 180 85" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/>
        <path d="M 30 85 A 90 90 0 0 1 210 85" fill="none" stroke="#fca5a5" stroke-width="1.5" stroke-dasharray="3,3"/>

        <g transform="translate(320, 25)">
          <line x1="30" y1="40" x2="20" y2="60" stroke="#1e293b" stroke-width="2"/>
          <line x1="30" y1="40" x2="45" y2="60" stroke="#1e293b" stroke-width="2"/>
          <circle cx="30" cy="18" r="8" fill="#1e293b"/>
          <line x1="30" y1="26" x2="30" y2="40" stroke="#1e293b" stroke-width="3"/>
          <path d="M 20 62 L 45 62" stroke="#dc2626" stroke-width="2"/>
          <text x="32" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">U bước = U1 - U2</text>
        </g>
        <text x="352" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">KHOẢNG CÁCH NGUY HIỂM &lt; 10 MÉT</text>
        <text x="352" y="112" text-anchor="middle" font-size="8.5" fill="#475569">Thoát hiểm: Chụm 2 chân nhảy lò cò hoặc lướt nhẹ ra xa</text>
      </svg>
    </div>
  
          <p>• <strong>Nguyên nhân 1 - Chạm trực tiếp vào vật mang điện:</strong> Sờ tay vào dây dẫn trần, ổ cắm hỏng, mối nối không bọc cách điện; vỏ kim loại của thiết bị gia dụng (máy giặt, tủ lạnh, bình nóng lạnh) bị rò rỉ điện ra ngoài do hỏng lớp cách điện.</p>
          <p class="mt-1">• <strong>Nguyên nhân 2 - Vi phạm khoảng cách an toàn với lưới điện cao áp:</strong> Lưới điện cao áp có điện áp hàng nghìn vôn (10kV, 35kV, 110kV, 500kV) có thể <em>phóng tia lửa điện qua không khí</em> đốt cháy và giật ngã người đứng quá gần, ngay cả khi chưa chạm vào dây (thả diều gần đường điện, trèo cột điện, đưa thanh kim loại dài lại gần đường dây).</p>
          <p class="mt-1">• <strong>Nguyên nhân 3 - Đến gần điểm dây điện đứt rơi xuống đất (Hiện tượng Điện áp bước):</strong> Khi dây điện rơi xuống đất, dòng điện lan tỏa trong lòng đất tạo nên các vùng có điện thế khác nhau. Người đi bộ vào vùng này, hai bàn chân đặt ở hai điểm có điện thế chênh lệch sẽ tạo ra dòng điện chạy qua hai chân gây co giật nguy hiểm.</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-droplet text-amber-600"></i>
            2. Các yếu tố làm gia tăng mức độ nguy hiểm
          </h4>
          <p>• <strong>Độ ẩm và nước:</strong> Nước làm giảm mạnh điện trở cơ thể người, biến môi trường xung quanh thành chất dẫn điện nguy hiểm.</p>
          <p class="mt-1">• <strong>Đường đi của dòng điện:</strong> Nguy hiểm nhất khi dòng điện chạy từ <em>tay qua tim</em> hoặc từ <em>tay qua chân</em> làm ngưng tim và liệt cơ hô hấp tức thì.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Hiện tượng 'Điện áp bước' xảy ra trong tình huống nào sau đây?",
        options: ["(Recommended) Khi đi bộ gần nơi có dây điện cao áp bị đứt rơi xuống mặt đất", "Khi dùng bút thử điện kiểm tra ổ cắm", "Khi cắm quạt điện vào nguồn", "Khi sạc pin điện thoại"],
        ans: 0,
        expl: "Khi dây điện chạm đất, dòng điện tản vào đất tạo điện thế dốc; khoảng cách giữa hai bước chân sinh ra điện áp bước."
      },
      {
        q: "Tại sao ở gần đường dây điện cao áp dù chưa chạm trực tiếp vào dây vẫn có thể bị điện giật chết người?",
        options: ["(Recommended) Vì điện áp cao có thể phóng tia lửa điện xuyên qua lớp không khí", "Vì đường dây cao áp phát ra sóng âm thanh", "Vì từ trường hút người lại gần", "Vì đường dây bị đung đưa trong gió"],
        ans: 0,
        expl: "Điện áp cao có cường độ điện trường cực lớn làm ion hóa không khí và phóng hồ quang điện nguy hiểm."
      },
      {
        q: "Đường đi nào của dòng điện qua cơ thể người là NGUY HIỂM NHẤT?",
        options: ["(Recommended) Đi từ tay qua tim sang chân (hoặc từ tay sang tay qua ngực)", "Đi từ ngón chân cái sang ngón chân trỏ", "Đi từ đùi sang bắp chân", "Đi qua bề mặt ngón tay"],
        ans: 0,
        expl: "Dòng điện chạy qua tim và phổi sẽ trực tiếp gây rung thất, ngưng tim và liệt hô hấp nhanh chóng."
      },
      {
        q: "Hành động nào sau đây là vi phạm khoảng cách an toàn điện cao áp?",
        options: ["(Recommended) Thả diều hoặc dùng gậy dài gần đường dây điện cao thế", "Đi dạo trên vỉa hè cách xa trạm biến áp", "Sử dụng đồ dùng điện gia đình đúng công suất", "Tắt aptomat trước khi sửa điện"],
        ans: 0,
        expl: "Thả diều hoặc cầm vật dài gần dây điện cao thế rất dễ gây phóng điện hồ quang gây bỏng nặng hoặc tử vong."
      }
    ]
  },

  // BÀI 12
  {
    id: "bai-12",
    lessonNum: 12,
    chapterNum: "III",
    chapterName: "Chương III: An toàn điện",
    title: "Bài 12: Biện pháp an toàn điện",
    tag: "Quy tắc an toàn",
    objectives: [
      "Nắm vững các nguyên tắc an toàn khi sử dụng thiết bị điện trong sinh hoạt và học đường.",
      "Hiểu rõ vai trò của các thiết bị bảo vệ tự động: Cầu chì, Aptomat (cầu dao tự động), Dây nối đất an toàn, Thiết bị chống dòng rò (ELCB/RCCB).",
      "Sử dụng thành thạo và đúng quy trình các dụng cụ an toàn: Bút thử điện, kìm cách điện, găng tay và thảm cao su cách điện.",
      "Tuân thủ quy trình bắt buộc: Ngắt nguồn điện và kiểm tra không còn điện trước khi sửa chữa."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">CÁC TRANG BỊ BẢO VỆ AN TOÀN ĐIỆN THIẾT YẾU</text>
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="95" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="47" y="22" fill="#1e40af">1. APTOMAT</text>
        <text x="47" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Ngắt khi quá tải,</text>
        <text x="47" y="52" font-size="9.5" font-weight="normal" fill="#1e3a8a">ngắn mạch</text>

        <rect x="115" y="0" width="95" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="162" y="22" fill="#1e40af">2. NỐI ĐẤT</text>
        <text x="162" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Triệt tiêu dòng rò</text>
        <text x="162" y="52" font-size="9.5" font-weight="normal" fill="#1e3a8a">ở vỏ máy</text>

        <rect x="230" y="0" width="95" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="277" y="22" fill="#1e40af">3. BÚT THỬ</text>
        <text x="277" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Kiểm tra có điện</text>
        <text x="277" y="52" font-size="9.5" font-weight="normal" fill="#1e3a8a">hay không</text>

        <rect x="345" y="0" width="95" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="392" y="22" fill="#1e40af">4. BẢO HỘ</text>
        <text x="392" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Găng tay, thảm</text>
        <text x="392" y="52" font-size="9.5" font-weight="normal" fill="#1e3a8a">kìm cách điện</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-blue-600"></i>
            1. Các biện pháp phòng tránh tai nạn điện khi sử dụng
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-shield-halved"></i> Hình 12.1: Sơ đồ nối đất bảo vệ triệt tiêu dòng rò qua người
      </div>
      <svg viewBox="0 0 540 115" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="15" width="120" height="75" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
        <text x="110" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Vỏ kim loại</text>
        <text x="110" y="65" text-anchor="middle" font-size="8.5" fill="#dc2626">Bị rò điện (dây pha)</text>

        <path d="M 170 52 L 250 52 L 250 90" stroke="#16a34a" stroke-width="3"/>
        <line x1="235" y1="90" x2="265" y2="90" stroke="#16a34a" stroke-width="3"/>
        <line x1="240" y1="95" x2="260" y2="95" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="245" y1="100" x2="255" y2="100" stroke="#16a34a" stroke-width="2"/>
        <text x="250" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#16a34a">Dây nối đất (R &le; 4 &Omega;)</text>

        <g transform="translate(360, 15)">
          <circle cx="40" cy="20" r="10" fill="#334155"/>
          <line x1="40" y1="30" x2="40" y2="60" stroke="#334155" stroke-width="3"/>
          <line x1="40" y1="40" x2="0" y2="40" stroke="#334155" stroke-width="2"/>
          <line x1="40" y1="60" x2="25" y2="90" stroke="#334155" stroke-width="2"/>
          <line x1="40" y1="60" x2="55" y2="90" stroke="#334155" stroke-width="2"/>
          <text x="75" y="45" font-size="9" fill="#475569">R người &asymp; 1000 &Omega;</text>
          <text x="75" y="60" font-size="9" font-weight="bold" fill="#16a34a">Dòng điện đi xuống đất,</text>
          <text x="75" y="72" font-size="9" font-weight="bold" fill="#16a34a">người không bị giật!</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Nguyên tắc vàng:</strong> Tuyệt đối không chạm vào thiết bị điện, ổ cắm khi tay đang ướt hoặc đứng chân trần trên sàn ẩm ướt.</p>
          <p class="mt-1">• <strong>Kiểm tra định kì:</strong> Thường xuyên kiểm tra phích cắm, dây dẫn, nếu phát hiện nứt vỡ cách điện, mùi khét phải ngắt điện và báo ngay cho người lớn.</p>
          <p class="mt-1">• <strong>Trang bị bảo vệ:</strong> Lắp đặt Aptomat chống giật (ELCB/RCCB) cho các khu vực ẩm ướt (nhà tắm, máy giặt, bình nước nóng); thực hiện nối đất an toàn cho các vỏ thiết bị kim loại.</p>
          <p class="mt-1">• Học sinh <strong>tuyệt đối không tự ý leo trèo, tháo lắp, đấu nối điện lưới 220V</strong> khi chưa có người có chuyên môn giám sát.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-screwdriver text-indigo-600"></i>
            2. Dụng cụ bảo vệ an toàn điện và bút thử điện
          </h4>
          <p>• <strong>Bút thử điện:</strong> Dùng để kiểm tra nhanh một chi tiết kim loại có mang điện áp hay không. Khi dùng: Đầu kim loại của bút chạm vào điểm thử, tay chạm vào đầu kẹp kim loại ở đuôi bút. Nếu đèn neon trong bút sáng ⇒ điểm đó đang có điện.</p>
          <p class="mt-1">• <strong>Dụng cụ cách điện:</strong> Kìm điện có cán bọc nhựa cách điện đến 1000V, tuốc nơ vít cách điện, ủng và găng tay cao su chuyên dụng.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Thiết bị nào sau đây tự động cắt mạch điện ngay lập tức khi phát hiện có dòng điện rò rỉ ra vỏ thiết bị?",
        options: ["(Recommended) Aptomat chống giật (ELCB / RCCB)", "Công tắc đơn", "Ổ cắm ba chạc", "Bóng đèn sợi đốt"],
        ans: 0,
        expl: "ELCB (Earth Leakage Circuit Breaker) là aptomat chuyên dụng bảo vệ chống dòng rò và chống giật."
      },
      {
        q: "Khi sử dụng Bút thử điện để kiểm tra điện áp, ngón tay của người sử dụng PHẢI chạm vào bộ phận nào?",
        options: ["(Recommended) Đầu kẹp kim loại (hoặc ốc kim loại) ở phía đuôi bút", "Đầu nhọn kim loại của bút", "Thân nhựa trong suốt", "Không được chạm vào bất kì chỗ nào"],
        ans: 0,
        expl: "Phải chạm vào đầu nắp kim loại ở đuôi bút để tạo thành mạch kín khép dòng điện siêu nhỏ qua cơ thể xuống đất làm sáng đèn neon."
      },
      {
        q: "Tác dụng của việc 'Nối đất an toàn' cho vỏ kim loại của máy giặt hoặc bình nóng lạnh là gì?",
        options: ["(Recommended) Dẫn dòng điện rò rỉ xuống đất nếu thiết bị bị hỏng cách điện, tránh làm người chạm vào bị giật", "Giúp máy chạy nhanh hơn", "Tiết kiệm 50% tiền điện", "Làm cho máy giặt kêu êm hơn"],
        ans: 0,
        expl: "Dây nối đất có điện trở rất nhỏ, khi có rò điện, dòng điện sẽ chạy thẳng xuống đất thay vì qua cơ thể người."
      },
      {
        q: "Trước khi tiến hành sửa chữa bất kì thiết bị điện nào, thao tác BẮT BUỘC ĐẦU TIÊN là gì?",
        options: ["(Recommended) Ngắt aptomat/cầu dao tổng và dùng bút thử điện kiểm tra xác nhận đã hết điện", "Rửa tay thật sạch bằng nước", "Bật đèn sáng hết cỡ", "Cắm điện thử lại"],
        ans: 0,
        expl: "Quy tắc an toàn số 1: Luôn luôn ngắt nguồn điện và kiểm tra không còn điện trước khi chạm vào linh kiện."
      }
    ]
  },

  // BÀI 13
  {
    id: "bai-13",
    lessonNum: 13,
    chapterNum: "III",
    chapterName: "Chương III: An toàn điện",
    title: "Bài 13: Sơ cứu người bị tai nạn điện",
    tag: "Kĩ năng sơ cấp cứu",
    objectives: [
      "Nắm vững thứ tự ưu tiên sinh mạng: Bảo đảm an toàn tuyệt đối cho người cứu trước khi tiếp cận nạn nhân.",
      "Biết cách tách nạn nhân ra khỏi nguồn điện một cách an toàn bằng vật cách điện khô (gậy gỗ, que tre, chăn khô).",
      "Biết cách gọi ngay trợ giúp của người lớn và gọi Tổng đài Cấp cứu Y tế 115.",
      "Hiểu các bước kiểm tra tình trạng nạn nhân và tư thế nằm hồi phục khi nạn nhân bất tỉnh nhưng còn thở."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">QUY TRÌNH 3 BƯỚC SƠ CỨU NGƯỜI BỊ TAI NẠN ĐIỆN</text>
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="135" height="60" rx="8" fill="#ffe4e6" stroke="#fb7185"/>
        <text x="67" y="20" fill="#9f1239">BƯỚC 1: TÁCH NGUỒN</text>
        <text x="67" y="38" font-size="9.5" font-weight="normal" fill="#881337">• Ngắt cầu dao ngay</text>
        <text x="67" y="52" font-size="9.5" font-weight="normal" fill="#881337">• Dùng gậy gỗ khô gạt</text>

        <rect x="155" y="0" width="135" height="60" rx="8" fill="#ffe4e6" stroke="#fb7185"/>
        <text x="222" y="20" fill="#9f1239">BƯỚC 2: GỌI 115</text>
        <text x="222" y="38" font-size="9.5" font-weight="normal" fill="#881337">• Hô hoán người lớn</text>
        <text x="222" y="52" font-size="9.5" font-weight="normal" fill="#881337">• Báo rõ tai nạn điện</text>

        <rect x="310" y="0" width="130" height="60" rx="8" fill="#ffe4e6" stroke="#fb7185"/>
        <text x="375" y="20" fill="#9f1239">BƯỚC 3: SƠ CỨU</text>
        <text x="375" y="38" font-size="9.5" font-weight="normal" fill="#881337">• Kiểm tra thở</text>
        <text x="375" y="52" font-size="9.5" font-weight="normal" fill="#881337">• Tư thế hồi phục / CPR</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-truck-medical text-rose-600"></i>
            1. Trình tự cấp cứu tai nạn điện khẩn cấp
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-heart-pulse"></i> Hình 13.1: Quy trình khẩn cấp sơ cứu và hồi sức tim phổi (CPR)
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="155" height="75" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">1. TÁCH NGUỒN</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#475569">Cắt cầu dao hoặc</text>
          <text x="77" y="55" text-anchor="middle" font-size="8.5" fill="#475569">dùng gậy gỗ khô gạt dây</text>
          <text x="77" y="68" text-anchor="middle" font-size="8" font-weight="bold" fill="#b91c1c">Tuyệt đối không sờ tay!</text>
        </g>
        <path d="M 175 48 L 190 48" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(195, 10)">
          <rect width="155" height="75" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">2. GỌI CẤP CỨU</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#475569">Gọi ngay 115 / người lớn</text>
          <text x="77" y="55" text-anchor="middle" font-size="8.5" fill="#475569">Đặt nơi thoáng khí</text>
          <text x="77" y="68" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Kiểm tra nhịp thở</text>
        </g>
        <path d="M 355 48 L 370 48" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(375, 10)">
          <rect width="150" height="75" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">3. HỒI SỨC CPR</text>
          <text x="75" y="42" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#2563eb">30 lần ép tim lồng ngực</text>
          <text x="75" y="55" text-anchor="middle" font-size="8.5" fill="#475569">kết hợp 2 lần thổi ngạt</text>
          <text x="75" y="68" text-anchor="middle" font-size="8" font-mono font-bold fill="#1e40af">Tỉ lệ 30 : 2 liên tục</text>
        </g>
      </svg>
    </div>
  
          <p class="font-bold text-rose-700 dark:text-rose-300">• BƯỚC 1: BẢO ĐẢM AN TOÀN HIỆN TRƯỜNG &amp; CÁCH LY NGUỒN ĐIỆN</p>
          <p class="pl-4">• <strong>Tuyệt đối không chạm tay trần trực tiếp vào nạn nhân</strong> khi nạn nhân vẫn đang dính với nguồn điện (bạn sẽ bị điện giật theo).</p>
          <p class="pl-4">• Nhanh chóng ngắt cầu dao, aptomat hoặc rút phích cắm điện gần nhất.</p>
          <p class="pl-4">• Nếu không thể ngắt nguồn ngay: Đứng trên ván gỗ/dép cao su khô, dùng <strong>gậy tre, gậy gỗ khô, ống nhựa</strong> gạt dây điện ra khỏi người nạn nhân.</p>

          <p class="font-bold text-blue-700 dark:text-blue-300 mt-2">• BƯỚC 2: HÔ HOÁN &amp; GỌI CẤP CỨU 115</p>
          <p class="pl-4">• Hô to nhờ người xung quanh giúp đỡ và gọi ngay Tổng đài Cấp cứu <strong>115</strong>; thông báo rõ địa điểm, tình trạng nạn nhân và nguyên nhân do tai nạn điện.</p>

          <p class="font-bold text-emerald-700 dark:text-emerald-300 mt-2">• BƯỚC 3: KIỂM TRA &amp; XỬ TRÍ</p>
          <p class="pl-4">• Đặt nạn nhân ở nơi thoáng khí, bằng phẳng.</p>
          <p class="pl-4">• Nếu nạn nhân còn thở: Đặt nạn nhân nằm nghiêng theo <em>Tư thế hồi phục</em> để thông thoáng đường thở và chống sặc dịch.</p>
          <p class="pl-4">• Nếu nạn nhân ngừng thở, ngừng tim: Người đã được đào tạo y tế tiến hành ép tim ngoài lồng ngực và hô hấp nhân tạo (CPR) liên tục đến khi nhân viên cấp cứu đến.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Khi nhìn thấy một người đang bị dây điện rơi trúng người dính vào nguồn điện, hành động TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM là gì?",
        options: ["(Recommended) Lao vào dùng tay không kéo trực tiếp nạn nhân ra", "Dùng gậy gỗ khô gạt dây điện ra xa", "Tìm cầu dao gần nhất để ngắt điện", "Hô to gọi người lớn và gọi 115"],
        ans: 0,
        expl: "Tuyệt đối không chạm tay trần vào người đang dính điện vì cơ thể người dẫn điện sẽ khiến người cứu bị giật theo."
      },
      {
        q: "Vật dụng nào sau đây có thể sử dụng an toàn để gạt dây điện sinh hoạt ra khỏi cơ thể nạn nhân?",
        options: ["(Recommended) Gậy gỗ khô, cán chổi tre khô, ống nhựa khô", "Thanh sắt dài", "Dây xích kim loại", "Khăn ướt"],
        ans: 0,
        expl: "Vật liệu cách điện khô ráo (gỗ khô, nhựa, tre khô) ngăn dòng điện truyền sang người cứu hộ."
      },
      {
        q: "Số điện thoại khẩn cấp quốc gia để gọi xe Cứu thương y tế tại Việt Nam là:",
        options: ["(Recommended) 115", "113", "114", "111"],
        ans: 0,
        expl: "115 là Tổng đài cấp cứu y tế (113: Cảnh sát, 114: Cứu hỏa)."
      },
      {
        q: "Khi nạn nhân bị điện giật đã ngắt điện an toàn, còn thở và có mạch đập, tư thế nằm an toàn nhất là:",
        options: ["(Recommended) Nằm nghiêng một bên (Tư thế hồi phục) để thông thoáng đường thở", "Nằm sấp đè lên ngực", "Dốc ngược đầu nạn nhân xuống đất", "Bế ngồi dậy liên tục"],
        ans: 0,
        expl: "Tư thế nằm nghiêng an toàn giúp lưỡi không tụt chèn đường thở và chất nôn không trào ngược vào phổi."
      }
    ]
  },

  // BÀI 14
  {
    id: "bai-14",
    lessonNum: 14,
    chapterNum: "IV",
    chapterName: "Chương IV: Kĩ thuật điện",
    title: "Bài 14: Khái quát về mạch điện",
    tag: "Cấu trúc mạch điện",
    objectives: [
      "Hiểu khái niệm mạch điện và chức năng cơ bản của một hệ thống mạch điện.",
      "Nắm vững 3 khối phần tử cốt lõi của mạch điện: Nguồn điện, Thiết bị truyền dẫn/đóng cắt/bảo vệ/điều khiển, và Phụ tải tiêu thụ điện.",
      "Phân biệt mạch điện truyền thống với mạch điện điều khiển tự động (có khâu nhận biết và xử lí tín hiệu).",
      "Đọc hiểu sơ đồ khối chức năng và các kí hiệu quy ước trên sơ đồ nguyên lí mạch điện."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">SƠ ĐỒ KHỐI CẤU TRÚC MẠCH ĐIỆN CƠ BẢN</text>
      <g transform="translate(30, 42)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="115" height="50" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="57" y="22" fill="#065f46">NGUỒN ĐIỆN</text>
        <text x="57" y="38" font-size="9.5" font-weight="normal" fill="#047857">Pin, Ắc quy, Lưới điện</text>

        <line x1="115" y1="25" x2="155" y2="25" stroke="#059669" stroke-width="2.5"/>

        <rect x="155" y="0" width="130" height="50" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="220" y="22" fill="#065f46">ĐÓNG CẮT &amp; BV</text>
        <text x="220" y="38" font-size="9.5" font-weight="normal" fill="#047857">Công tắc, Cầu chì, Dây</text>

        <line x1="285" y1="25" x2="325" y2="25" stroke="#059669" stroke-width="2.5"/>

        <rect x="325" y="0" width="115" height="50" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="382" y="22" fill="#065f46">PHỤ TẢI</text>
        <text x="382" y="38" font-size="9.5" font-weight="normal" fill="#047857">Đèn, Quạt, Động cơ</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-network-wired text-emerald-600"></i>
            1. Khái niệm và các thành phần chính của mạch điện
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-bolt"></i> Hình 14.1: Sơ đồ 3 khối chức năng cơ bản của mạch điện
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 12)">
          <rect width="135" height="68" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. NGUỒN ĐIỆN</text>
          <text x="67" y="48" text-anchor="middle" font-size="8" fill="#475569">Pin, ắc quy, máy phát,</text>
          <text x="67" y="60" text-anchor="middle" font-size="8" fill="#475569">lưới điện xoay chiều</text>
        </g>
        <path d="M 160 46 L 195 46" stroke="#3b82f6" stroke-width="2.5"/>
        <g transform="translate(200, 12)">
          <rect width="140" height="68" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="70" y="26" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. TRUYỀN DẪN,</text>
          <text x="70" y="40" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">ĐÓNG CẮT &amp; BẢO VỆ</text>
          <text x="70" y="56" text-anchor="middle" font-size="8" fill="#475569">Dây dẫn, công tắc, cầu chì</text>
        </g>
        <path d="M 345 46 L 380 46" stroke="#10b981" stroke-width="2.5"/>
        <g transform="translate(385, 12)">
          <rect width="135" height="68" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">3. TẢI TIÊU THỤ</text>
          <text x="67" y="48" text-anchor="middle" font-size="8" fill="#475569">Đèn (quang năng),</text>
          <text x="67" y="60" text-anchor="middle" font-size="8" fill="#475569">động cơ, quạt (cơ năng)</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Mạch điện:</strong> Là một tập hợp các phần tử điện được kết nối với nhau bằng dây dẫn để tạo thành một vòng khép kín cho dòng điện chạy qua thực hiện chức năng nhất định.</p>
          <p class="mt-1">• <strong>Ba thành phần chính trong mạch điện:</strong></p>
          <p class="pl-4">1. <em>Nguồn điện:</em> Thiết bị cung cấp năng lượng điện liên tục cho mạch (pin, ắc quy, máy phát điện, nguồn điện lưới 220V).</p>
          <p class="pl-4">2. <em>Thiết bị truyền dẫn, đóng cắt, điều khiển và bảo vệ:</em> Dây dẫn dẫn điện; công tắc/cầu dao đóng ngắt; cầu chì/aptomat bảo vệ ngắn mạch và quá tải.</p>
          <p class="pl-4">3. <em>Phụ tải tiêu thụ điện:</em> Biến đổi điện năng thành các dạng năng lượng có ích khác như quang năng (bóng đèn), cơ năng (quạt, máy bơm), nhiệt năng (nồi cơm, bàn là).</p>
        </div>

        <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-code-branch text-teal-600"></i>
            2. Phân loại mạch điện và sơ đồ mạch
          </h4>
          <p>• <strong>Mạch điện cơ bản:</strong> Điều khiển bật tắt thủ công qua công tắc.</p>
          <p class="mt-1">• <strong>Mạch điện điều khiển:</strong> Có thêm khối cảm biến thu thập thông tin và mạch xử lí tín hiệu để đóng/ngắt tự động không cần người thao tác.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Thiết bị nào sau đây đóng vai trò là 'Nguồn điện' trong mạch điện?",
        options: ["(Recommended) Pin và Ắc quy", "Bóng đèn sợi đốt", "Công tắc điện", "Cầu chì"],
        ans: 0,
        expl: "Pin và ắc quy là các thiết bị phát điện đóng vai trò nguồn cung cấp điện năng."
      },
      {
        q: "Phụ tải tiêu thụ điện có chức năng chính là gì?",
        options: ["(Recommended) Biến đổi điện năng thành các dạng năng lượng khác (quang năng, cơ năng, nhiệt năng)", "Cung cấp điện cho mạch", "Bảo vệ mạch khi ngắn mạch", "Dẫn điện đi xa"],
        ans: 0,
        expl: "Tải điện (như bóng đèn, quạt, máy sưởi) nhận điện năng và biến đổi thành dạng năng lượng phục vụ đời sống."
      },
      {
        q: "Trong mạch điện, dây dẫn điện đóng vai trò:",
        options: ["(Recommended) Truyền tải điện năng từ nguồn đến phụ tải", "Tạo ra dòng điện", "Tiêu thụ toàn bộ điện năng", "Đo điện áp"],
        ans: 0,
        expl: "Dây dẫn bằng đồng hoặc nhôm có điện trở nhỏ dùng để truyền tải dòng điện khép kín trong mạch."
      },
      {
        q: "Điểm khác biệt cơ bản của 'Mạch điện điều khiển tự động' so với mạch điện truyền thống là gì?",
        options: ["(Recommended) Có cảm biến và bộ phận xử lí tín hiệu để điều khiển phụ tải tự động", "Không cần sử dụng nguồn điện", "Không cần dây dẫn điện", "Không dùng phụ tải"],
        ans: 0,
        expl: "Mạch điều khiển tích hợp cảm biến và mạch điện tử xử lí để ra lệnh đóng/cắt tải thông minh."
      }
    ]
  },

  // BÀI 15
  {
    id: "bai-15",
    lessonNum: 15,
    chapterNum: "IV",
    chapterName: "Chương IV: Kĩ thuật điện",
    title: "Bài 15: Cảm biến và mô đun cảm biến",
    tag: "Linh kiện & Cảm biến",
    objectives: [
      "Hiểu rõ khái niệm và nguyên lí hoạt động của cảm biến (chuyển đổi đại lượng vật lí/hóa học thành tín hiệu điện).",
      "Phân loại các cảm biến thông dụng: Cảm biến ánh sáng (quang điện trở LDR), cảm biến nhiệt độ (nhiệt điện trở NTC), cảm biến độ ẩm đất.",
      "Hiểu vai trò của mô đun cảm biến: tích hợp cảm biến, mạch so sánh/khuếch đại và rơ le (relay) đóng ngắt tải thuận tiện.",
      "Lưu ý nguyên lí: Cảm biến chỉ phát tín hiệu điều khiển, nguồn điện và rơ le mới là bộ phận trực tiếp cấp năng lượng cho tải hoạt động."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">3 LOẠI MÔ ĐUN CẢM BIẾN PHỔ BIẾN NHẤT TRONG ĐỜI SỐNG</text>
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="135" height="55" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="67" y="22" fill="#1e40af">1. ÁNH SÁNG (LDR)</text>
        <text x="67" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Đèn đường tự động</text>

        <rect x="155" y="0" width="135" height="55" rx="8" fill="#fee2e2" stroke="#ef4444"/>
        <text x="222" y="22" fill="#991b1b">2. NHIỆT ĐỘ (NTC)</text>
        <text x="222" y="40" font-size="9.5" font-weight="normal" fill="#7f1d1d">Quạt làm mát, lò sưởi</text>

        <rect x="310" y="0" width="130" height="55" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="375" y="22" fill="#166534">3. ĐỘ ẨM ĐẤT</text>
        <text x="375" y="40" font-size="9.5" font-weight="normal" fill="#14532d">Hệ thống tưới tự động</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-microchip text-blue-600"></i>
            1. Bản chất của cảm biến và mô đun cảm biến
          </h4>
          <p>• <strong>Cảm biến (Sensor):</strong> Là linh kiện điện tử có khả năng cảm nhận đại lượng vật lí (ánh sáng, nhiệt độ, áp suất, độ ẩm) và chuyển đổi thành tín hiệu điện tương ứng.</p>
          <p class="mt-1">• <strong>Mô đun cảm biến:</strong> Là một bo mạch hoàn chỉnh tích hợp cảm biến + mạch so sánh vi sai (IC LM393) + chiết áp điều chỉnh độ nhạy + rơ le (Relay) đầu ra. Mô đun cho phép người dùng kết nối trực tiếp với nguồn và tải điều khiển mà không cần thiết kế mạch phức tạp.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb text-indigo-600"></i>
            2. Các loại mô đun cảm biến thông dụng
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-microchip"></i> Hình 15.1: 3 Loại mô đun cảm biến thông dụng trong đời sống
      </div>
      <svg viewBox="0 0 540 115" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="155" height="95" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">1. CẢM BIẾN ÁNH SÁNG</text>
          <circle cx="77" cy="46" r="12" fill="#fef3c7" stroke="#f59e0b"/>
          <path d="M 68 42 L 86 50 M 68 50 L 86 42" stroke="#d97706" stroke-width="2"/>
          <text x="77" y="74" text-anchor="middle" font-size="8" fill="#475569">Quang trở (LDR)</text>
          <text x="77" y="86" text-anchor="middle" font-size="7.5" fill="#64748b">Sáng: R giảm &bull; Tối: R tăng</text>
        </g>
        <g transform="translate(190, 10)">
          <rect width="155" height="95" rx="8" fill="#fff" stroke="#ef4444" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">2. CẢM BIẾN NHIỆT ĐỘ</text>
          <rect x="65" y="38" width="24" height="18" fill="#fee2e2" stroke="#dc2626" rx="3"/>
          <text x="77" y="50" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#dc2626">NTC</text>
          <text x="77" y="74" text-anchor="middle" font-size="8" fill="#475569">Nhiệt điện trở âm</text>
          <text x="77" y="86" text-anchor="middle" font-size="7.5" fill="#64748b">Nhiệt tăng &rarr; Điện trở giảm</text>
        </g>
        <g transform="translate(365, 10)">
          <rect width="160" height="95" rx="8" fill="#fff" stroke="#0ea5e9" stroke-width="1.5"/>
          <text x="80" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">3. CẢM BIẾN ĐỘ ẨM</text>
          <line x1="72" y1="35" x2="72" y2="58" stroke="#0284c7" stroke-width="3"/>
          <line x1="88" y1="35" x2="88" y2="58" stroke="#0284c7" stroke-width="3"/>
          <text x="80" y="74" text-anchor="middle" font-size="8" fill="#475569">Điện cực đo độ ẩm đất</text>
          <text x="80" y="86" text-anchor="middle" font-size="7.5" fill="#64748b">Đất khô: Không dẫn điện</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Mô đun cảm biến ánh sáng:</strong> Dùng quang điện trở (LDR - Light Dependent Resistor). Trời tối điện trở tăng vọt ⇒ mạch kích hoạt bật đèn hành lang, đèn đường tự động.</p>
          <p class="mt-1">• <strong>Mô đun cảm biến nhiệt độ:</strong> Dùng nhiệt điện trở (NTC). Khi nhiệt độ môi trường vượt ngưỡng cài đặt ⇒ mạch kích hoạt quạt làm mát hoặc máy điều hòa.</p>
          <p class="mt-1">• <strong>Mô đun cảm biến độ ẩm:</strong> Dùng hai chân đo cắm vào đất. Khi đất khô điện trở cao ⇒ mạch kích hoạt máy bơm nước tưới cây tự động.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Linh kiện nào sau đây có điện trở thay đổi mạnh theo cường độ ánh sáng chiếu vào?",
        options: ["(Recommended) Quang điện trở (LDR)", "Nhiệt điện trở", "Điện trở công suất", "Biến áp"],
        ans: 0,
        expl: "Quang điện trở (LDR) giảm điện trở khi có ánh sáng mạnh và tăng điện trở khi trời tối."
      },
      {
        q: "Trong mô đun cảm biến, linh kiện 'Rơ le' (Relay) đảm nhiệm vai trò gì?",
        options: ["(Recommended) Đóng / cắt mạch điện công suất lớn của phụ tải theo tín hiệu điều khiển", "Đo nhiệt độ môi trường", "Phát ra ánh sáng", "Tích trữ điện năng"],
        ans: 0,
        expl: "Rơ le là công tắc đóng cắt bằng điện từ giúp mạch điện tử công suất nhỏ điều khiển an toàn các phụ tải công suất lớn."
      },
      {
        q: "Để chế tạo một chiếc đèn chiếu sáng tự động bật sáng khi trời tối và tự tắt khi trời sáng, ta dùng:",
        options: ["(Recommended) Mô đun cảm biến ánh sáng", "Mô đun cảm biến độ ẩm", "Mô đun cảm biến nhiệt độ", "Mô đun cảm biến khói"],
        ans: 0,
        expl: "Cảm biến ánh sáng nhận biết sự thay đổi độ sáng để điều khiển đèn tự động."
      },
      {
        q: "Bộ phận 'Biến trở' (chiết áp xoay) trên mô đun cảm biến dùng để làm gì?",
        options: ["(Recommended) Điều chỉnh ngưỡng độ nhạy tác động của cảm biến", "Thay đổi màu sắc của bo mạch", "Tăng điện áp nguồn nuôi", "Tắt toàn bộ mạch điện"],
        ans: 0,
        expl: "Chiết áp xoay tinh chỉnh mức điện áp so sánh ngưỡng giúp chọn thời điểm bật/tắt chính xác."
      }
    ]
  },

  // BÀI 16
  {
    id: "bai-16",
    lessonNum: 16,
    chapterNum: "IV",
    chapterName: "Chương IV: Kĩ thuật điện",
    title: "Bài 16: Mạch điện điều khiển sử dụng mô đun cảm biến",
    tag: "Lắp ráp mạch điều khiển",
    objectives: [
      "Hiểu rõ cấu trúc và nguyên lí làm việc của mạch điều khiển: Mô đun cảm biến &rarr; Tiếp điểm điều khiển Rơ le &rarr; Phụ tải &rarr; Nguồn.",
      "Thực hiện thành thạo quy trình lắp ráp mạch điều khiển 6 bước chuẩn khoa học.",
      "Biết cách tinh chỉnh ngưỡng kích hoạt (xoay biến trở vi sai) và kiểm thử mạch an toàn.",
      "Đánh giá mạch theo các tiêu chí: đúng sơ đồ, đúng cực tính, dây nối chắc chắn, hoạt động chính xác theo tín hiệu môi trường."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">QUY TRÌNH 6 BƯỚC LẮP RÁP MẠCH ĐIỀU KHIỂN CẢM BIẾN</text>
      <!-- 6 Bước tròn -->
      <g transform="translate(30, 42)" text-anchor="middle" font-size="10.5" font-weight="bold">
        <circle cx="25" cy="25" r="20" fill="#d1fae5"/><text x="25" y="29" fill="#065f46">1. Đọc</text>
        <line x1="45" y1="25" x2="65" y2="25" stroke="#10b981" stroke-width="2"/>
        <circle cx="95" cy="25" r="20" fill="#d1fae5"/><text x="95" y="29" fill="#065f46">2. Chọn</text>
        <line x1="115" y1="25" x2="135" y2="25" stroke="#10b981" stroke-width="2"/>
        <circle cx="165" cy="25" r="20" fill="#d1fae5"/><text x="165" y="29" fill="#065f46">3. Nối</text>
        <line x1="185" y1="25" x2="205" y2="25" stroke="#10b981" stroke-width="2"/>
        <circle cx="235" cy="25" r="20" fill="#d1fae5"/><text x="235" y="29" fill="#065f46">4. Soát</text>
        <line x1="255" y1="25" x2="275" y2="25" stroke="#10b981" stroke-width="2"/>
        <circle cx="305" cy="25" r="20" fill="#d1fae5"/><text x="305" y="29" fill="#065f46">5. Bật</text>
        <line x1="325" y1="25" x2="345" y2="25" stroke="#10b981" stroke-width="2"/>
        <circle cx="375" cy="25" r="20" fill="#059669"/><text x="375" y="29" fill="#fff">6. Chỉnh</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-600"></i>
            1. Quy trình lắp ráp mạch điều khiển theo sơ đồ
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-toggle-on"></i> Hình 16.1: Sơ đồ chân và nguyên lí đóng ngắt của Rơ Le (Relay 5 chân)
      </div>
      <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="15" width="200" height="90" rx="8" fill="#fff" stroke="#0284c7" stroke-width="1.8"/>
        <text x="150" y="32" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">RƠ LE ĐIỀU KHIỂN (RELAY)</text>
        <path d="M 70 52 C 80 42, 90 42, 95 52 C 100 42, 110 42, 115 52" fill="none" stroke="#ea580c" stroke-width="2.5"/>
        <text x="95" y="75" text-anchor="middle" font-size="8.5" fill="#c2410c">Cuộn hút (Coil)</text>
        <circle cx="170" cy="52" r="4" fill="#0284c7"/>
        <text x="170" y="68" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">COM</text>
        <circle cx="210" cy="42" r="3" fill="#64748b"/>
        <text x="225" y="45" font-size="8" fill="#64748b">NC</text>
        <circle cx="210" cy="62" r="3" fill="#16a34a"/>
        <text x="225" y="65" font-size="8" font-weight="bold" fill="#16a34a">NO</text>
        <line x1="170" y1="52" x2="208" y2="43" stroke="#0284c7" stroke-width="2"/>

        <g transform="translate(280, 18)">
          <rect width="230" height="82" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="15" y="24" font-size="9.5" font-weight="bold" fill="#1e293b">• COM (Common): Chân chung</text>
          <text x="15" y="42" font-size="9" fill="#475569">• <strong>NO:</strong> Thường mở (kích điện &rarr; hút đóng)</text>
          <text x="15" y="60" font-size="9" fill="#475569">• <strong>NC:</strong> Thường đóng (kích điện &rarr; nhả ra)</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Bước 1 - Tìm hiểu sơ đồ:</strong> Xác định các chân cấp nguồn (VCC dương, GND âm) và các chân tiếp điểm rơ le (COM chung, NO thường mở, NC thường đóng).</p>
          <p class="mt-1">• <strong>Bước 2 - Chuẩn bị:</strong> Mô đun cảm biến, nguồn nuôi (pin 9V hoặc adapter 12VDC), phụ tải (bóng đèn LED, quạt nhỏ hoặc máy bơm mini 12V), dây nối và tuốc nơ vít nhỏ.</p>
          <p class="mt-1">• <strong>Bước 3 - Lắp ráp dây dẫn:</strong> Đấu dây khi nguồn đã được ngắt hoàn toàn; chú ý đấu đúng cực tính dương (+) và âm (-).</p>
          <p class="mt-1">• <strong>Bước 4 - Kiểm tra an toàn:</strong> Rà soát không có dây dẫn chạm chập, các mối ốc kẹp chắc chắn.</p>
          <p class="mt-1">• <strong>Bước 5 - Cấp nguồn &amp; Vận hành thử:</strong> Bật công tắc nguồn nuôi mạch.</p>
          <p class="mt-1">• <strong>Bước 6 - Tinh chỉnh ngưỡng:</strong> Dùng tuốc nơ vít xoay biến trở để chọn độ nhạy mong muốn.</p>
        </div>

        <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-teal-600"></i>
            2. Tiêu chuẩn đánh giá và an toàn thực hành
          </h4>
          <p>• Mạch hoạt động ổn định, nhạy bén; rơ le phát tiếng "tách" dứt khoát khi chuyển trạng thái.</p>
          <p class="mt-1">• Luôn ngắt điện trước khi thay đổi vị trí dây dẫn hoặc linh kiện.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Hai chân cấp nguồn nuôi tiêu chuẩn cho hầu hết các mô đun cảm biến kí hiệu là:",
        options: ["(Recommended) VCC (cực dương +) và GND (cực âm -)", "NO và NC", "INPUT và OUTPUT", "COM và RESET"],
        ans: 0,
        expl: "VCC là nguồn cấp điện áp dương (+5V hoặc +12V), GND là cực âm (Mass)."
      },
      {
        q: "Khi lắp ráp mạch điện điều khiển, thao tác đấu nối dây dẫn PHẢI được thực hiện khi:",
        options: ["(Recommended) Nguồn điện đã được ngắt hoàn toàn", "Mạch đang được cấp điện để thấy đèn báo", "Quạt đang quay hết tốc độ", "Đang cắm sạc pin"],
        ans: 0,
        expl: "Tuyệt đối ngắt nguồn trước khi đấu dây để phòng tránh ngắn mạch, nổ mạch hoặc điện giật."
      },
      {
        q: "Để tiếp điểm rơ le đóng mạch cấp điện cho bóng đèn sáng khi có tín hiệu kích hoạt, ta đấu nối vào cặp chân nào?",
        options: ["(Recommended) Chân COM và chân NO (Normally Open - thường mở)", "Chân COM và chân NC (Normally Closed - thường đóng)", "Chân VCC và chân GND", "Chân biến trở"],
        ans: 0,
        expl: "Chân NO là tiếp điểm thường mở, khi rơ le được kích hoạt tiếp điểm sẽ đóng lại cấp điện cho tải."
      },
      {
        q: "Nếu mạch điều khiển đèn tự động sáng cả ban ngày lẫn ban đêm, ta cần xử lí thế nào?",
        options: ["(Recommended) Dùng tuốc nơ vít xoay biến trở tinh chỉnh giảm bớt độ nhạy của cảm biến", "Ném bỏ toàn bộ mạch điện", "Tăng điện áp gấp đôi", "Đấu chập hai dây nguồn lại"],
        ans: 0,
        expl: "Xoay biến trở vi sai sẽ điều chỉnh lại ngưỡng so sánh điện áp để đèn chỉ bật khi độ tối đạt yêu cầu."
      }
    ]
  },

  // BÀI 17
  {
    id: "bai-17",
    lessonNum: 17,
    chapterNum: "IV",
    chapterName: "Chương IV: Kĩ thuật điện",
    title: "Bài 17: Ngành nghề trong lĩnh vực kĩ thuật điện",
    tag: "Định hướng nghề nghiệp",
    objectives: [
      "Nhận biết các ngành nghề chủ chốt trong lĩnh vực kĩ thuật điện: Kĩ sư điện, Kĩ thuật viên điện, Thợ lắp đặt và sửa chữa đường dây/thiết bị điện.",
      "Hiểu rõ đặc điểm công việc, vai trò to lớn của ngành điện trong sản xuất công nghiệp và đời sống hiện đại.",
      "Nắm vững các yêu cầu về phẩm chất, năng lực: cẩn thận, chính xác, tuân thủ kỉ luật an toàn điện tuyệt đối.",
      "Đánh giá sự phù hợp của bản thân để định hướng học tập các ngành nghề kĩ thuật điện trong tương lai."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">CÁC NGÀNH NGHỀ TRỌNG TÂM LĨNH VỰC KĨ THUẬT ĐIỆN</text>
      <!-- 3 Nghề -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="135" height="55" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="67" y="22" fill="#1e40af">KĨ SƯ ĐIỆN</text>
        <text x="67" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Thiết kế hệ thống điện</text>

        <rect x="155" y="0" width="135" height="55" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="222" y="22" fill="#1e40af">KĨ THUẬT VIÊN</text>
        <text x="222" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Quản lí, giám sát vận hành</text>

        <rect x="310" y="0" width="130" height="55" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="375" y="22" fill="#1e40af">THỢ ĐIỆN</text>
        <text x="375" y="40" font-size="9.5" font-weight="normal" fill="#1e3a8a">Thi công, sửa chữa mạng điện</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-blue-600"></i>
            1. Các vị trí nghề nghiệp tiêu biểu
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-users-gear"></i> Hình 17.1: Các hướng nghề nghiệp chủ yếu ngành Kĩ thuật điện
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="115" height="75" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">KĨ SƯ ĐIỆN</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Thiết kế hệ thống,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">mạng lưới truyền tải</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Trình độ Đại học</text>
        </g>
        <g transform="translate(145, 10)">
          <rect width="115" height="75" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">ĐIỆN DÂN DỤNG</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Lắp đặt, sửa chữa</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">mạch điện gia đình</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Thợ kĩ thuật</text>
        </g>
        <g transform="translate(275, 10)">
          <rect width="115" height="75" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">ĐIỆN CÔNG NGHIỆP</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Vận hành tủ điện,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">động cơ nhà máy</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Kĩ thuật viên</text>
        </g>
        <g transform="translate(405, 10)">
          <rect width="115" height="75" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#86198f">NĂNG LƯỢNG MỚI</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Điện mặt trời,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">điện gió, trạm sạc</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Chuyên viên năng lượng</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Kĩ sư điện (Electrical Engineer):</strong> Nghiên cứu, thiết kế hệ thống lưới điện truyền tải, trạm biến áp, nhà máy phát điện (điện gió, điện mặt trời, thủy điện) và hệ thống điện tòa nhà thông minh.</p>
          <p class="mt-1">• <strong>Kĩ thuật viên điện:</strong> Vận hành trạm biến áp, kiểm tra thông số lưới điện, bảo trì hệ thống điều khiển tự động hóa trong các khu công nghiệp.</p>
          <p class="mt-1">• <strong>Thợ điện (Điện dân dụng &amp; Điện công nghiệp):</strong> Thi công lắp đặt dây cáp, ổ cắm, tủ điện phân phối, khắc phục sự cố chập cháy và bảo dưỡng thiết bị điện.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-indigo-600"></i>
            2. Năng lực và phẩm chất đặc thù
          </h4>
          <p>• Phải có kiến thức sâu rộng về an toàn điện và quy chuẩn kĩ thuật điện quốc gia.</p>
          <p class="mt-1">• Đọc thành thạo sơ đồ nguyên lí, sơ đồ lắp đặt và sử dụng thành thạo các thiết bị đo (đồng hồ vạn năng VOM, ampe kìm, bút thử điện).</p>
          <p class="mt-1 font-semibold text-rose-700 dark:text-rose-300">• Tinh thần kỉ luật thép: Tuyệt đối không được làm ẩu hay bỏ qua các bước kiểm tra an toàn sinh mạng.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Thiết bị đo đa năng bỏ túi mà người thợ điện thường dùng để đo điện áp, dòng điện và điện trở là:",
        options: ["(Recommended) Đồng hồ vạn năng (VOM)", "Thước kẹp cơ khí", "Nhiệt kế thủy ngân", "Kính hiển vi"],
        ans: 0,
        expl: "Đồng hồ vạn năng (Volt-Ohm-Milliampere) là dụng cụ đo điện cơ bản không thể thiếu của thợ điện."
      },
      {
        q: "Công việc thiết kế hệ thống cấp điện cho một tòa nhà cao tầng hoặc nhà máy là nhiệm vụ của:",
        options: ["(Recommended) Kĩ sư điện", "Thợ uốn sắt", "Thợ sơn tường", "Nhân viên bảo vệ"],
        ans: 0,
        expl: "Kĩ sư điện là người có trình độ đại học chuyên môn tính toán phụ tải và thiết kế hệ thống điện."
      },
      {
        q: "Yêu cầu khắt khe hàng đầu đối với người lao động trong ngành kĩ thuật điện là gì?",
        options: ["(Recommended) Ý thức tuân thủ quy tắc an toàn lao động nghiêm ngặt và cẩn thận, chính xác", "Khả năng chạy nhanh", "Biết đàn hát", "Có giọng nói to"],
        ans: 0,
        expl: "Sơ suất trong ngành điện có thể gây nguy hiểm trực tiếp đến tính mạng nên ý thức an toàn là trên hết."
      },
      {
        q: "Ngành nghề nào sau đây thuộc lĩnh vực Kĩ thuật điện?",
        options: ["(Recommended) Thợ lắp đặt và sửa chữa đường dây điện", "Thợ may trang phục", "Nghề trồng lúa nước", "Nghề nướng bánh mì"],
        ans: 0,
        expl: "Thợ lắp đặt đường dây điện là nghề cơ bản, thiết yếu trong lĩnh vực kĩ thuật điện."
      }
    ]
  },

  // BÀI 18
  {
    id: "bai-18",
    lessonNum: 18,
    chapterNum: "V",
    chapterName: "Chương V: Thiết kế kĩ thuật",
    title: "Bài 18: Giới thiệu về thiết kế kĩ thuật",
    tag: "Khái niệm thiết kế",
    objectives: [
      "Hiểu rõ khái niệm thiết kế kĩ thuật là hoạt động sáng tạo giải quyết vấn đề thực tiễn bằng sản phẩm/giải pháp kĩ thuật.",
      "Nắm vững mục đích của thiết kế: tạo ra sản phẩm mới hoặc cải tiến sản phẩm hiện có để nâng cao chất lượng cuộc sống.",
      "Hiểu các tiêu chí cần cân nhắc đồng thời: Công năng, An toàn, Thẩm mĩ, Chi phí, Khả năng chế tạo và Tác động môi trường.",
      "Nhận biết hồ sơ thiết kế kĩ thuật (bản vẽ, thông số, quy trình chế tạo, hướng dẫn sử dụng)."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">CÁC YẾU TỐ CẦN ĐẢM BẢO TRONG THIẾT KẾ KĨ THUẬT</text>
      <!-- 4 Yếu tố -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="95" height="60" rx="8" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="47" y="22" fill="#6b21a8">CÔNG NĂNG</text>
        <text x="47" y="40" font-size="9.5" font-weight="normal" fill="#581c87">Đúng chức năng</text>

        <rect x="115" y="0" width="95" height="60" rx="8" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="162" y="22" fill="#6b21a8">AN TOÀN</text>
        <text x="162" y="40" font-size="9.5" font-weight="normal" fill="#581c87">Bảo vệ con người</text>

        <rect x="230" y="0" width="95" height="60" rx="8" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="277" y="22" fill="#6b21a8">CHI PHÍ</text>
        <text x="277" y="40" font-size="9.5" font-weight="normal" fill="#581c87">Giá thành hợp lí</text>

        <rect x="345" y="0" width="95" height="60" rx="8" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="392" y="22" fill="#6b21a8">MÔI TRƯỜNG</text>
        <text x="392" y="40" font-size="9.5" font-weight="normal" fill="#581c87">Xanh, bền vững</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb text-purple-600"></i>
            1. Khái niệm và vai trò của thiết kế kĩ thuật
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-teal-600 dark:text-teal-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-lightbulb"></i> Hình 18.1: Vai trò của Thiết kế kĩ thuật kết nối sáng tạo với sản xuất đời sống
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 12)">
          <rect width="135" height="68" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">Ý TƯỞNG SÁNG TẠO</text>
          <text x="67" y="48" text-anchor="middle" font-size="8.5" fill="#475569">Nhu cầu con người,</text>
          <text x="67" y="60" text-anchor="middle" font-size="8.5" fill="#475569">phát minh khoa học</text>
        </g>
        <path d="M 160 46 L 195 46" stroke="#3b82f6" stroke-width="2.5"/>
        <g transform="translate(200, 12)">
          <rect width="140" height="68" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="2"/>
          <text x="70" y="28" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#86198f">THIẾT KẾ KĨ THUẬT</text>
          <text x="70" y="46" text-anchor="middle" font-size="8.5" fill="#475569">Tính toán kết cấu,</text>
          <text x="70" y="58" text-anchor="middle" font-size="8.5" fill="#475569">bản vẽ &amp; tiêu chuẩn</text>
        </g>
        <path d="M 345 46 L 380 46" stroke="#d946ef" stroke-width="2.5"/>
        <g transform="translate(385, 12)">
          <rect width="135" height="68" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">SẢN PHẨM HỮU ÍCH</text>
          <text x="67" y="48" text-anchor="middle" font-size="8.5" fill="#475569">Máy móc, công trình,</text>
          <text x="67" y="60" text-anchor="middle" font-size="8.5" fill="#475569">nâng cao đời sống</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Thiết kế kĩ thuật:</strong> Là quá trình phát hiện vấn đề thực tế, tìm kiếm giải pháp và vận dụng các kiến thức khoa học, toán học, kĩ thuật để tạo ra bản vẽ, mô hình, hồ sơ chế tạo một sản phẩm mới hoặc cải tiến sản phẩm cũ.</p>
          <p class="mt-1">• <strong>Vai trò:</strong> Là cầu nối giữa nghiên cứu khoa học và sản xuất thực tế; quyết định hơn 70% giá thành và chất lượng của sản phẩm.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-sliders text-indigo-600"></i>
            2. Các tiêu chí đánh giá một giải pháp thiết kế
          </h4>
          <p>• Một giải pháp thiết kế tốt không chỉ xét yếu tố "đẹp mắt" mà phải cân đối hài hòa:</p>
          <p class="pl-4">• <strong>Tính năng (Công năng):</strong> Đáp ứng đúng và đủ nhu cầu sử dụng của khách hàng.</p>
          <p class="pl-4">• <strong>Độ an toàn &amp; Tiện dụng:</strong> Thuận tiện thao tác, không gây nguy hiểm cho người dùng.</p>
          <p class="pl-4">• <strong>Tính kinh tế:</strong> Giá thành chế tạo thấp, vật liệu dễ tìm, tiết kiệm năng lượng.</p>
          <p class="pl-4">• <strong>Bảo vệ môi trường:</strong> Dễ tái chế, ít phát thải độc hại.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Thiết kế kĩ thuật được hiểu đúng nhất là:",
        options: ["(Recommended) Hoạt động sáng tạo giải quyết vấn đề thực tiễn bằng sản phẩm và giải pháp kĩ thuật", "Chỉ đơn thuần là vẽ tranh nghệ thuật", "Việc sửa chữa máy móc bị hỏng", "Chỉ là việc tính tiền bán hàng"],
        ans: 0,
        expl: "Thiết kế kĩ thuật là quy trình sáng tạo kỹ thuật giải quyết các nhu cầu thiết thực của con người."
      },
      {
        q: "Khi lựa chọn phương án thiết kế cho một sản phẩm mới, kĩ sư phải dựa trên:",
        options: ["(Recommended) Các tiêu chí đã xác định: công năng, an toàn, chi phí, vật liệu và môi trường", "Chỉ chọn phương án có màu sắc rực rỡ nhất", "Ý thích cá nhân không cần tính toán", "Chọn phương án đắt tiền nhất"],
        ans: 0,
        expl: "Một giải pháp thiết kế tối ưu phải cân bằng giữa chức năng, độ bền, an toàn và giá thành."
      },
      {
        q: "Sản phẩm đầu ra của quá trình thiết kế kĩ thuật thường là:",
        options: ["(Recommended) Hồ sơ kĩ thuật gồm bản vẽ, thông số, mô hình và quy trình chế tạo", "Một bài hát mới", "Một bức tranh phong cảnh", "Một hợp đồng bảo hiểm"],
        ans: 0,
        expl: "Hồ sơ thiết kế là tài liệu chính thức chứa bản vẽ và hướng dẫn để nhà máy đưa vào chế tạo."
      },
      {
        q: "Khâu thiết kế kĩ thuật quyết định khoảng bao nhiêu phần trăm chất lượng và giá thành của sản phẩm?",
        options: ["(Recommended) Hơn 70%", "Khoảng 10%", "Dưới 5%", "Không ảnh hưởng gì"],
        ans: 0,
        expl: "Giai đoạn thiết kế định hình vật liệu, kết cấu và phương pháp chế tạo nên quyết định phần lớn chi phí và chất lượng."
      }
    ]
  },

  // BÀI 19
  {
    id: "bai-19",
    lessonNum: 19,
    chapterNum: "V",
    chapterName: "Chương V: Thiết kế kĩ thuật",
    title: "Bài 19: Các bước cơ bản trong thiết kế kĩ thuật",
    tag: "Quy trình thiết kế 5 bước",
    objectives: [
      "Nắm vững quy trình thiết kế kĩ thuật cơ bản gồm 5 bước lặp khoa học.",
      "Hiểu rõ nội dung từng bước: Xác định vấn đề & tiêu chí &rarr; Tìm hiểu giải pháp &rarr; Xây dựng nguyên mẫu &rarr; Thử nghiệm & đánh giá &rarr; Lập hồ sơ kĩ thuật.",
      "Hiểu tính chất lặp lại (vòng lặp phản hồi): Khi thử nghiệm không đạt tiêu chí, phải quay lại bước trước để cải tiến và thử lại.",
      "Biết cách thu thập thông tin và lập bảng tiêu chí đánh giá sản phẩm thiết kế."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#6d28d9">QUY TRÌNH 5 BƯỚC THIẾT KẾ KĨ THUẬT (VÒNG LẶP CẢI TIẾN)</text>
      <!-- 5 Bước -->
      <g transform="translate(25, 40)" text-anchor="middle" font-size="10.5" font-weight="bold">
        <rect x="0" y="0" width="80" height="60" rx="6" fill="#ede9fe" stroke="#8b5cf6"/>
        <text x="40" y="24" fill="#5b21b6">BƯỚC 1</text>
        <text x="40" y="44" font-size="9" font-weight="normal" fill="#4c1d95">Vấn đề &amp; TC</text>

        <rect x="92" y="0" width="80" height="60" rx="6" fill="#ede9fe" stroke="#8b5cf6"/>
        <text x="132" y="24" fill="#5b21b6">BƯỚC 2</text>
        <text x="132" y="44" font-size="9" font-weight="normal" fill="#4c1d95">Giải pháp</text>

        <rect x="184" y="0" width="80" height="60" rx="6" fill="#ede9fe" stroke="#8b5cf6"/>
        <text x="224" y="24" fill="#5b21b6">BƯỚC 3</text>
        <text x="224" y="44" font-size="9" font-weight="normal" fill="#4c1d95">Nguyên mẫu</text>

        <rect x="276" y="0" width="85" height="60" rx="6" fill="#fee2e2" stroke="#ef4444"/>
        <text x="318" y="24" fill="#991b1b">BƯỚC 4</text>
        <text x="318" y="44" font-size="9" font-weight="normal" fill="#7f1d1d">Thử nghiệm ↺</text>

        <rect x="372" y="0" width="80" height="60" rx="6" fill="#d1fae5" stroke="#10b981"/>
        <text x="412" y="24" fill="#065f46">BƯỚC 5</text>
        <text x="412" y="44" font-size="9" font-weight="normal" fill="#047857">Hồ sơ KT</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-repeat text-purple-600"></i>
            1. Năm bước cơ bản trong quy trình thiết kế
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-purple-600 dark:text-purple-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-arrows-spin"></i> Hình 19.1: Vòng lặp phản hồi 5 bước trong Quy trình thiết kế kĩ thuật
      </div>
      <svg viewBox="0 0 540 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 18)">
          <rect width="90" height="48" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">1. XÁC ĐỊNH</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">Vấn đề &amp; Yêu cầu</text>
        </g>
        <path d="M 103 42 L 115 42" stroke="#3b82f6" stroke-width="2"/>
        <g transform="translate(117, 18)">
          <rect width="90" height="48" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">2. TÌM GIẢI PHÁP</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">Chọn phương án</text>
        </g>
        <path d="M 210 42 L 222 42" stroke="#10b981" stroke-width="2"/>
        <g transform="translate(224, 18)">
          <rect width="90" height="48" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">3. CHẾ TẠO</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">Mẫu thử nghiệm</text>
        </g>
        <path d="M 317 42 L 329 42" stroke="#f59e0b" stroke-width="2"/>
        <g transform="translate(331, 18)">
          <rect width="90" height="48" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#86198f">4. THỬ NGHIỆM</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">&amp; Đánh giá</text>
        </g>
        <path d="M 424 42 L 436 42" stroke="#d946ef" stroke-width="2"/>
        <g transform="translate(438, 18)">
          <rect width="92" height="48" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
          <text x="46" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">5. LẬP HỒ SƠ</text>
          <text x="46" y="32" text-anchor="middle" font-size="8" fill="#334155">Bản vẽ kĩ thuật</text>
        </g>

        <path d="M 376 68 L 376 95 L 162 95 L 162 68" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="270" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#ef4444">&larr; Nếu KHÔNG ĐẠT tiêu chí: Điều chỉnh lại giải pháp / mô hình &larr;</text>
      </svg>
    </div>
  
          <p>• <strong>Bước 1 - Xác định vấn đề và xây dựng tiêu chí:</strong> Tìm hiểu người dùng cần gì? Sản phẩm phải thỏa mãn những tiêu chuẩn kĩ thuật nào (kích thước, tải trọng, chi phí)?</p>
          <p class="mt-1">• <strong>Bước 2 - Tìm hiểu tổng quan và đề xuất giải pháp:</strong> Khảo sát các sản phẩm tương tự trên thị trường, phác thảo nhiều ý tưởng và chọn phương án tối ưu nhất.</p>
          <p class="mt-1">• <strong>Bước 3 - Xây dựng nguyên mẫu (Prototype):</strong> Vẽ bản vẽ chi tiết và chế tạo mô hình thử nghiệm ban đầu của sản phẩm.</p>
          <p class="mt-1">• <strong>Bước 4 - Thử nghiệm và đánh giá:</strong> Kiểm tra hoạt động của nguyên mẫu xem có đạt tiêu chí đề ra không. <em>Nếu không đạt ⇒ quay lại phân tích lỗi, cải tiến và thử lại.</em></p>
          <p class="mt-1">• <strong>Bước 5 - Lập hồ sơ kĩ thuật:</strong> Hoàn thiện bản vẽ cuối cùng, danh mục vật tư, hướng dẫn sử dụng và báo cáo tổng kết.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Bước đầu tiên và quyết định phương hướng trong quy trình thiết kế kĩ thuật là:",
        options: ["(Recommended) Xác định vấn đề và xây dựng tiêu chí sản phẩm", "Chế tạo ngay mô hình", "Bán sản phẩm ra thị trường", "Vẽ bao bì"],
        ans: 0,
        expl: "Phải xác định rõ vấn đề cần giải quyết và tiêu chí sản phẩm thì mới có hướng nghiên cứu giải pháp."
      },
      {
        q: "Trong quá trình thử nghiệm nguyên mẫu, nếu phát hiện sản phẩm KHÔNG đạt tiêu chí đề ra, người thiết kế cần làm gì?",
        options: ["(Recommended) Tìm nguyên nhân, quay lại bước trước để sửa đổi, cải tiến và thử nghiệm lại", "Bỏ qua lỗi và đem bán ngay", "Hủy bỏ toàn bộ ngành kĩ thuật", "Giấu kết quả thử nghiệm"],
        ans: 0,
        expl: "Bản chất của thiết kế là quy trình lặp phản hồi để liên tục cải tiến cho đến khi đạt chuẩn."
      },
      {
        q: "'Nguyên mẫu' (Prototype) trong thiết kế kĩ thuật là gì?",
        options: ["(Recommended) Mô hình sản phẩm thử nghiệm ban đầu dùng để kiểm tra và đánh giá chức năng", "Sản phẩm đã bán được một triệu chiếc", "Bản vẽ phác trên giấy ăn", "Bảng báo giá vật tư"],
        ans: 0,
        expl: "Nguyên mẫu là phiên bản thử nghiệm thực tế đầu tiên giúp kỹ sư kiểm tra công năng."
      },
      {
        q: "Hồ sơ kĩ thuật hoàn chỉnh của một sản phẩm thiết kế KHÔNG thể thiếu thành phần nào?",
        options: ["(Recommended) Bản vẽ kĩ thuật và bản thông số hướng dẫn sử dụng", "Hóa đơn mua đồ ăn trưa", "Hình chụp phong cảnh", "Chữ kí của ca sĩ"],
        ans: 0,
        expl: "Bản vẽ kĩ thuật, thông số kỹ thuật và hướng dẫn vận hành là nội dung cốt lõi của hồ sơ."
      }
    ]
  },

  // BÀI 20
  {
    id: "bai-20",
    lessonNum: 20,
    chapterNum: "V",
    chapterName: "Chương V: Thiết kế kĩ thuật",
    title: "Bài 20: Dự án: Thiết kế hệ thống tưới cây tự động",
    tag: "Dự án STEM thiết kế",
    objectives: [
      "Vận dụng toàn diện kiến thức Vẽ kĩ thuật, Cơ khí, Kĩ thuật điện và Thiết kế để thực hiện dự án Hệ thống tưới cây tự động.",
      "Xây dựng sơ đồ nguyên lí: Cảm biến độ ẩm đất &rarr; Mô đun điều khiển &rarr; Máy bơm mini &rarr; Béc tưới cây.",
      "Lập bản vẽ, chọn linh kiện điện tử, lắp ráp mạch nguồn thấp áp (5V/12V) an toàn.",
      "Thử nghiệm với đất khô và đất ẩm, điều chỉnh ngưỡng nhạy và hoàn thiện hồ sơ dự án."
    ],
    svgIllustration: `<svg viewBox="0 0 500 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="110" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">SƠ ĐỒ NGUYÊN LÍ HỆ THỐNG TƯỚI CÂY TỰ ĐỘNG</text>
      <!-- Sơ đồ tưới -->
      <g transform="translate(25, 42)" text-anchor="middle" font-size="10.5" font-weight="bold">
        <rect x="0" y="0" width="95" height="55" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="47" y="22" fill="#065f46">CẢM BIẾN</text>
        <text x="47" y="40" font-size="9" font-weight="normal" fill="#047857">Đo độ ẩm đất</text>

        <line x1="95" y1="28" x2="115" y2="28" stroke="#059669" stroke-width="2"/>

        <rect x="115" y="0" width="105" height="55" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="167" y="22" fill="#065f46">MÔ ĐUN XỬ LÍ</text>
        <text x="167" y="40" font-size="9" font-weight="normal" fill="#047857">So sánh &amp; Rơ le</text>

        <line x1="220" y1="28" x2="240" y2="28" stroke="#059669" stroke-width="2"/>

        <rect x="240" y="0" width="95" height="55" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="287" y="22" fill="#065f46">MÁY BƠM MINI</text>
        <text x="287" y="40" font-size="9" font-weight="normal" fill="#047857">12V DC</text>

        <line x1="335" y1="28" x2="355" y2="28" stroke="#059669" stroke-width="2"/>

        <rect x="355" y="0" width="95" height="55" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="402" y="22" fill="#14532d">CHẬU CÂY</text>
        <text x="402" y="40" font-size="9" font-weight="normal" fill="#15803d">Ống dẫn nước</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-emerald-600"></i>
            1. Nhiệm vụ và sơ đồ nguyên lí hệ thống tưới
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-faucet-drip"></i> Hình 20.1: Sơ đồ kết nối phần cứng Hệ thống tưới cây tự động mini
      </div>
      <svg viewBox="0 0 540 135" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 22)">
          <polygon points="10,40 20,80 60,80 70,40" fill="#78350f"/>
          <ellipse cx="40" cy="40" rx="30" ry="8" fill="#451a03"/>
          <path d="M 40 40 L 40 15 C 30 15, 25 25, 25 25" fill="none" stroke="#16a34a" stroke-width="2.5"/>
          <line x1="36" y1="35" x2="36" y2="65" stroke="#0284c7" stroke-width="3"/>
          <line x1="44" y1="35" x2="44" y2="65" stroke="#0284c7" stroke-width="3"/>
          <text x="40" y="95" text-anchor="middle" font-size="8" font-weight="bold" fill="#78350f">Chậu cây</text>
        </g>

        <path d="M 60 48 L 140 48" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="100" y="42" text-anchor="middle" font-size="8" fill="#0284c7">Tín hiệu độ ẩm</text>

        <g transform="translate(145, 18)">
          <rect width="130" height="72" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
          <text x="65" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">MÔ ĐUN ĐIỀU KHIỂN</text>
          <text x="65" y="40" text-anchor="middle" font-size="8" fill="#475569">Mạch so sánh LM393</text>
          <text x="65" y="52" text-anchor="middle" font-size="8" fill="#475569">+ Rơ le đóng ngắt 5V/12V</text>
          <text x="65" y="66" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">Đất khô &rarr; Bật Relay</text>
        </g>

        <path d="M 275 48 L 340 48" stroke="#dc2626" stroke-width="2"/>

        <g transform="translate(345, 22)">
          <rect width="55" height="48" rx="6" fill="#1e293b" stroke="#64748b"/>
          <circle cx="27" cy="24" r="10" fill="#3b82f6"/>
          <text x="27" y="28" text-anchor="middle" font-size="8" fill="#fff">Bơm</text>
          <text x="27" y="62" text-anchor="middle" font-size="7.5" fill="#64748b">12VDC</text>
        </g>

        <path d="M 400 48 L 460 48 L 460 68" fill="none" stroke="#0284c7" stroke-width="3"/>
        <g transform="translate(445, 72)">
          <circle cx="15" cy="15" r="6" fill="#0ea5e9"/>
          <line x1="15" y1="21" x2="15" y2="30" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="2,2"/>
          <text x="15" y="42" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">Béc tưới</text>
        </g>
      </svg>
      <div class="text-[10px] text-gray-500 text-center mt-1">Chu trình khép kín: Khi độ ẩm đất giảm xuống dưới ngưỡng cài đặt &rarr; mô đun kích rơ le bật bơm nước tự động</div>
    </div>
  
          <p>• <strong>Nhiệm vụ:</strong> Thiết kế và chế tạo một hệ thống tưới tự động cho chậu cây cảnh: Tự động bơm nước tưới khi đất khô (độ ẩm dưới ngưỡng) và tự ngắt bơm khi đất đã đủ ẩm.</p>
          <p class="mt-1">• <strong>Sơ đồ dòng chảy tín hiệu:</strong></p>
          <div class="p-2.5 my-1 bg-white dark:bg-gray-800 rounded-lg text-center font-bold text-emerald-800 dark:text-emerald-300">
            Cảm biến độ ẩm đất &rarr; Mô đun so sánh điện áp &rarr; Kích hoạt Rơ le &rarr; Bật Máy bơm nước 12V &rarr; Nước tưới qua béc phun đến rễ cây
          </div>
          <p class="mt-1">• Khi đất ẩm trở lại, điện trở giữa hai que đo giảm xuống ⇒ Mô đun ngắt rơ le ⇒ Máy bơm tự động dừng, tiết kiệm nước tối đa.</p>
        </div>

        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-rose-600"></i>
            2. Quy tắc an toàn bắt buộc khi thực hiện dự án
          </h4>
          <p>• <strong>Điện áp thấp:</strong> Sử dụng nguồn điện một chiều an toàn (DC 5V - 12V), tuyệt đối không dùng nguồn điện lưới 220V trực tiếp cho mạch tưới thử nghiệm.</p>
          <p class="mt-1">• <strong>Cách ly nước và điện:</strong> Bố trí hộp mạch điện tử ở vị trí khô ráo, che chắn cách xa bình chứa nước và vòi tưới; không để nước bắn vào bo mạch gây chập cháy.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Nguyên lí hoạt động của hệ thống tưới cây tự động bằng cảm biến độ ẩm đất là:",
        options: ["(Recommended) Đất khô máy bơm tự chạy tưới nước; đất đủ ẩm máy bơm tự ngắt", "Cứ 1 tiếng bơm nước 1 lần bất kể mưa nắng", "Người dùng phải tự bật công tắc mỗi ngày", "Bơm nước liên tục không bao giờ dừng"],
        ans: 0,
        expl: "Hệ thống tự động kích hoạt bơm theo trạng thái ẩm/khô thực tế của đất."
      },
      {
        q: "Để bảo đảm an toàn điện tối đa cho học sinh trong dự án thực hành, nguồn điện cấp cho mô đun và máy bơm nên là:",
        options: ["(Recommended) Nguồn điện một chiều điện áp thấp an toàn (DC 5V đến 12V)", "Điện lưới xoay chiều 220V trực tiếp", "Điện cao thế 1000V", "Không cần nguồn điện"],
        ans: 0,
        expl: "Nguồn điện DC 5V-12V là điện áp cực thấp an toàn tuyệt đối, không gây nguy hiểm cho học sinh."
      },
      {
        q: "Biện pháp phòng ngừa chập cháy quan trọng nhất khi lắp đặt hệ thống tưới tự động là:",
        options: ["(Recommended) Bố trí hộp chứa bo mạch điện tử khô ráo và cách ly hoàn toàn khỏi bình nước và vòi phun", "Ngâm bo mạch vào nước cho mát", "Dùng dây điện trần không bọc vỏ", "Đấu chập cực dương và cực âm"],
        ans: 0,
        expl: "Phần điện và phần nước phải được cách ly cẩn thận để tránh nước rò rỉ gây hư hỏng mạch."
      },
      {
        q: "Thành phần nào trực tiếp tiếp xúc với đất để đo hàm lượng nước trong đất chậu cây?",
        options: ["(Recommended) Hai que đo dẫn điện của cảm biến độ ẩm đất", "Cánh quạt máy bơm", "Chiết áp xoay", "Bóng đèn báo"],
        ans: 0,
        expl: "Hai que đo bằng kim loại cắm vào đất đo điện trở dẫn điện của đất để xác định độ ẩm."
      }
    ]
  }
];

module.exports = { lessonsPart2 };
