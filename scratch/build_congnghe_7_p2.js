// Chapter III (Chăn nuôi), Chapter IV (Thủy sản), Ôn tập toàn môn
const lessonsDataP2 = [
  // ==================== CHƯƠNG III: CHĂN NUÔI ====================
  {
    chapter: "Chương III: Chăn nuôi",
    chapterTag: "CHƯƠNG 3",
    chapterColor: "bg-amber-600",
    id: "bai-9",
    lessonNum: "Bài 9",
    title: "Bài 9. Giới thiệu về chăn nuôi",
    pages: "SGK tr. 40–46",
    objective: "Nêu vai trò, triển vọng của chăn nuôi; phân loại vật nuôi; so sánh các phương thức chăn nuôi; nhận biết nghề nghiệp và các biện pháp bảo vệ môi trường trong chăn nuôi.",
    mindmap: {
      nodes: [
        { title: "VAI TRÒ & TRIỂN VỌNG", desc: "Cung cấp thịt, trứng, sữa; nguyên liệu chế biến; phân bón hữu cơ", color: "#d97706" },
        { title: "PHÂN LOẠI VẬT NUÔI", desc: "Gia súc, gia cầm; Giống đặc sản: Gà Đông Tảo, Lợn cỏ, Bò vàng, Chó Phú Quốc", color: "#b45309" },
        { title: "PHƯƠNG THỨC & BIOGAS", desc: "Chăn nuôi nông hộ, trang trại, công nghệ cao; Hầm biogas xử lí chất thải", color: "#059669" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 9: GIỐNG ĐẶC SẢN VÀ HỆ THỐNG BIOGAS -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-amber-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-amber-500/20">
          <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-cow"></i> Hình 9: 4 Giống Vật Nuôi Bản Địa Đặc Trưng &amp; Mô Hình Xử Lí Chất Thải Biogas
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 40–46</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 200" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- 4 Giống vật nuôi đặc sản -->
            <rect x="15" y="15" width="460" height="170" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="25" y="25" width="440" height="24" rx="5" fill="#78350f"/>
            <text x="245" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">4 GIỐNG VẬT NUÔI ĐẶC TRƯNG VÙNG MIỀN</text>

            <g transform="translate(25, 60)">
              <rect x="0" y="0" width="105" height="110" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="52" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">GÀ ĐÔNG TẢO</text>
              <text x="52" y="34" text-anchor="middle" fill="#fde68a" font-size="8">(Hưng Yên)</text>
              <text x="8" y="55" fill="#cbd5e1" font-size="7.5">&bull; Đôi chân to xù xì</text>
              <text x="8" y="70" fill="#cbd5e1" font-size="7.5">&bull; Vảy thịt đỏ rực</text>
              <text x="8" y="85" fill="#cbd5e1" font-size="7.5">&bull; Thịt thơm ngon</text>
              <text x="52" y="102" text-anchor="middle" fill="#34d399" font-size="7.2" font-weight="700">Đặc sản quý hiếm</text>

              <rect x="112" y="0" width="105" height="110" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="164" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">LỢN CỎ</text>
              <text x="164" y="34" text-anchor="middle" fill="#fde68a" font-size="8">(Miền Trung)</text>
              <text x="120" y="55" fill="#cbd5e1" font-size="7.5">&bull; Tầm vóc nhỏ</text>
              <text x="120" y="70" fill="#cbd5e1" font-size="7.5">&bull; Chống chịu tốt</text>
              <text x="120" y="85" fill="#cbd5e1" font-size="7.5">&bull; Thịt săn chắc</text>
              <text x="164" y="102" text-anchor="middle" fill="#34d399" font-size="7.2" font-weight="700">Dễ nuôi thả vườn</text>

              <rect x="224" y="0" width="105" height="110" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="276" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">BÒ VÀNG</text>
              <text x="276" y="34" text-anchor="middle" fill="#fde68a" font-size="8">(Bản địa VN)</text>
              <text x="232" y="55" fill="#cbd5e1" font-size="7.5">&bull; Lông màu vàng</text>
              <text x="232" y="70" fill="#cbd5e1" font-size="7.5">&bull; Kháng bệnh cao</text>
              <text x="232" y="85" fill="#cbd5e1" font-size="7.5">&bull; Chịu kham khổ</text>
              <text x="276" y="102" text-anchor="middle" fill="#34d399" font-size="7.2" font-weight="700">Dùng lai tạo giống</text>

              <rect x="336" y="0" width="105" height="110" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="388" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">CHÓ PHÚ QUỐC</text>
              <text x="388" y="34" text-anchor="middle" fill="#fde68a" font-size="8">(Kiên Giang)</text>
              <text x="344" y="55" fill="#cbd5e1" font-size="7.5">&bull; Xoáy lông ở lưng</text>
              <text x="344" y="70" fill="#cbd5e1" font-size="7.5">&bull; Chân có màng bơi</text>
              <text x="344" y="85" fill="#cbd5e1" font-size="7.5">&bull; Cực kì nhanh nhẹn</text>
              <text x="388" y="102" text-anchor="middle" fill="#34d399" font-size="7.2" font-weight="700">Quốc khuyển Việt</text>
            </g>

            <!-- Hệ thống Biogas -->
            <rect x="490" y="15" width="315" height="170" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="500" y="25" width="295" height="24" rx="5" fill="#065f46"/>
            <text x="647" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">MÔ HÌNH HẦM KHÍ SINH HỌC BIOGAS</text>

            <g transform="translate(505, 60)">
              <text x="10" y="20" fill="#34d399" font-size="9.5" font-weight="800">1. Thu gom chất thải:</text>
              <text x="10" y="34" fill="#cbd5e1" font-size="8.5">Phân, nước tiểu từ chuồng được dẫn kín vào bể phân giải.</text>

              <text x="10" y="54" fill="#34d399" font-size="9.5" font-weight="800">2. Lên men yếm khí:</text>
              <text x="10" y="68" fill="#cbd5e1" font-size="8.5">Vi sinh vật kị khí lên men sinh ra khí Methane ($CH_4$).</text>

              <text x="10" y="88" fill="#34d399" font-size="9.5" font-weight="800">3. Lợi ích kép:</text>
              <text x="10" y="102" fill="#a7f3d0" font-size="8.5">&bull; Khí đốt đun nấu sinh hoạt &bull; Nước thải làm phân bón hữu cơ.</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Vai trò và xu hướng phát triển của ngành chăn nuôi",
        content: `
          <p><strong>Vai trò:</strong> Cung cấp nguồn thực phẩm giàu dinh dưỡng hằng ngày (thịt, trứng, sữa); cung cấp nguyên liệu cho ngành chế biến thực phẩm và dệt may (da, lông vũ); tạo phân bón hữu cơ cho trồng trọt; tạo việc làm và nguồn thu nhập ổn định cho nông dân. <em>Mối quan hệ tuần hoàn:</em> Trồng trọt cung cấp thức ăn cho chăn nuôi; phụ phẩm chăn nuôi sau xử lí cung cấp phân bón phục hồi độ phì cho đất trồng trọt.</p>
          <p class="mt-2 text-xs"><strong>Xu hướng phát triển:</strong> Chuyển dịch mạnh mẽ sang chăn nuôi trang trại tập trung quy mô lớn, ứng dụng công nghệ cao (tự động hóa khâu cho ăn, uống nước, kiểm soát nhiệt độ chuồng, vắt sữa), bảo đảm an toàn sinh học và thân thiện môi trường.</p>
        `
      },
      {
        heading: "2. Phân loại vật nuôi và các giống bản địa đặc trưng",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Gia súc:</strong> Các loài động vật 4 chân có vú như trâu, bò, lợn, dê, cừu; nuôi lấy thịt, sữa, sức kéo cày bừa và phân bón.</li>
            <li><strong>Gia cầm:</strong> Các loài động vật 2 chân có cánh và lông vũ như gà, vịt, ngan, ngỗng, chim bồ câu; nuôi lấy thịt và trứng.</li>
            <li><strong>Vật nuôi đặc trưng vùng miền:</strong>
              <ul class="list-circle pl-5 mt-1 space-y-0.5">
                <li><em>Gà Đông Tảo (Hưng Yên):</em> Đôi chân to, xù xì màu đỏ, thịt giòn ngọt, quý hiếm.</li>
                <li><em>Lợn cỏ (miền Trung):</em> Tầm vóc nhỏ nhắn, dễ nuôi, thích nghi cao, thịt nạc thơm ngon.</li>
                <li><em>Bò vàng Việt Nam:</em> Dễ nuôi, chống chịu thời tiết khắc nghiệt, là nguồn gen quý để lai tạo bò thịt/sữa.</li>
                <li><em>Chó Phú Quốc (Kiên Giang):</em> Nổi tiếng với dải xoáy lông ngược trên lưng, chân có màng vịt bơi lội giỏi và thông minh.</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        heading: "3. Các phương thức chăn nuôi và bảo vệ môi trường",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 text-xs">
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-amber-600 block">Chăn nuôi nông hộ</span>
              Quy mô nhỏ tại gia đình, vốn đầu tư thấp, tận dụng lao động và thức ăn thừa. Hạn chế: Khó kiểm soát dịch bệnh, dễ gây ô nhiễm khu dân cư nếu không xử lí phân tốt.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-emerald-600 block">Chăn nuôi trang trại &amp; Công nghệ cao</span>
              Tập trung xa khu dân cư, quy mô hàng nghìn con, kiểm soát nghiêm ngặt quy trình thú y, tự động hóa; xử lí triệt để chất thải bằng hầm Biogas.
            </div>
          </div>
          <p class="mt-2 text-xs"><strong>Bảo vệ môi trường:</strong> Thu gom phân làm phân bón hữu cơ ủ hoai hoặc đưa vào hầm biogas lên men sinh khí đốt sinh hoạt; nghiêm cấm xả chất thải chưa qua xử lí ra mương máng, sông suối.</p>
        `
      }
    ],
    application: "Lập bảng thống kê các loài gia súc, gia cầm được nuôi tại địa phương hoặc người thân: Nhóm vật nuôi &bull; Mục đích sử dụng (lấy thịt, trứng hay làm cảnh) &bull; Phương thức chăn nuôi &bull; Cách gia đình xử lí phân và nước thải.",
    quizzes: [
      {
        q: "Hệ thống khí sinh học Biogas trong chăn nuôi đem lại lợi ích kép chủ yếu nào?",
        opts: ["Vừa xử lí sạch chất thải chuồng trại vừa tạo khí đốt sinh hoạt", "Làm tăng số lượng trứng gia cầm", "Làm vật nuôi lớn nhanh gấp đôi", "Thay thế hoàn toàn thức ăn chăn nuôi"],
        ans: 0,
        explain: "Hầm Biogas phân hủy kị khí chất thải giúp khử mùi, bảo vệ môi trường và thu hồi khí Methane ($CH_4$) làm nhiên liệu đun nấu."
      },
      {
        q: "Giống vật nuôi bản địa nào của nước ta nổi tiếng với đặc điểm đôi chân to xù xì và thịt thơm ngon?",
        opts: ["Gà Đông Tảo", "Gà Ri", "Gà Tre", "Gà Mía"],
        ans: 0,
        explain: "Gà Đông Tảo (Hưng Yên) có đôi chân rất to xù xì, bước đi vững chãi và là giống gà đặc sản quý giá."
      }
    ]
  },

  // ==================== BÀI 10 ====================
  {
    chapter: "Chương III: Chăn nuôi",
    chapterTag: "CHƯƠNG 3",
    chapterColor: "bg-amber-600",
    id: "bai-10",
    lessonNum: "Bài 10",
    title: "Bài 10. Nuôi dưỡng và chăm sóc vật nuôi",
    pages: "SGK tr. 47–51",
    objective: "Giải thích vai trò của việc nuôi dưỡng và chăm sóc; nêu các yêu cầu kĩ thuật khác nhau đối với vật nuôi non, vật nuôi đực giống và vật nuôi cái sinh sản; hiểu về phúc lợi động vật.",
    mindmap: {
      nodes: [
        { title: "KHÁI NIỆM & PHÚC LỢI", desc: "Nuôi dưỡng (chất dinh dưỡng) - Chăm sóc (môi trường sống); Phúc lợi động vật", color: "#d97706" },
        { title: "VẬT NUÔI NON", desc: "Giữ ấm, bú sữa đầu sớm có kháng thể, tập ăn sớm, tắm nắng sáng", color: "#b45309" },
        { title: "ĐỰC GIỐNG & CÁI SINH SẢN", desc: "Đực giống: Giàu đạm, vận động; Cái sinh sản: 3 kì (Hậu bị, mang thai, nuôi con)", color: "#059669" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 10: CHĂM SÓC THEO ĐỐI TƯỢNG VẬT NUÔI -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-amber-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-amber-500/20">
          <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-heart"></i> Hình 10: Chế Độ Nuôi Dưỡng &amp; Chăm Sóc Cho 3 Nhóm Đối Tượng Vật Nuôi
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 47–51</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#78350f"/>
            <text x="410" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">YÊU CẦU KĨ THUẬT THEO TỪNG GIAI ĐOẠN VÀ ĐỐI TƯỢNG</text>

            <g transform="translate(30, 60)">
              <!-- Vật nuôi non -->
              <rect x="0" y="0" width="240" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="120" y="20" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="900">1. VẬT NUÔI NON</text>
              <text x="10" y="40" fill="#cbd5e1" font-size="8">&bull; Bú sữa đầu của mẹ càng sớm càng tốt (kháng thể)</text>
              <text x="10" y="55" fill="#cbd5e1" font-size="8">&bull; Giữ ấm cơ thể, chống gió lùa, chuồng khô sạch</text>
              <text x="10" y="70" fill="#cbd5e1" font-size="8">&bull; Tập cho ăn sớm &amp; tiếp xúc ánh nắng buổi sáng</text>

              <!-- Đực giống -->
              <rect x="260" y="0" width="240" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="380" y="20" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="900">2. VẬT NUÔI ĐỰC GIỐNG</text>
              <text x="270" y="40" fill="#cbd5e1" font-size="8">&bull; Khẩu phần giàu chất đạm, khoáng, vitamin</text>
              <text x="270" y="55" fill="#cbd5e1" font-size="8">&bull; Không để con đực quá béo hoặc quá gầy</text>
              <text x="270" y="70" fill="#cbd5e1" font-size="8">&bull; Vận động thường xuyên &amp; phối giống khoa học</text>

              <!-- Cái sinh sản -->
              <rect x="520" y="0" width="240" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="640" y="20" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="900">3. VẬT NUÔI CÁI SINH SẢN</text>
              <text x="530" y="40" fill="#cbd5e1" font-size="8">&bull; Giai đoạn hậu bị: Phát triển khung xương</text>
              <text x="530" y="55" fill="#cbd5e1" font-size="8">&bull; Giai đoạn mang thai: Dinh dưỡng nuôi thai tốt</text>
              <text x="530" y="70" fill="#cbd5e1" font-size="8">&bull; Giai đoạn nuôi con/tiết sữa: Khẩu phần cao tạo sữa</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Khái niệm nuôi dưỡng, chăm sóc và phúc lợi động vật",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Nuôi dưỡng:</strong> Cung cấp đầy đủ, cân đối các chất dinh dưỡng (chất đạm, tinh bột, chất béo, vitamin, chất khoáng) và nước uống sạch phù hợp với loài, lứa tuổi, thể trạng và mục đích nuôi.</li>
            <li><strong>Chăm sóc:</strong> Thường xuyên tạo lập môi trường sống tối ưu (nhiệt độ, độ ẩm, độ thông thoáng, ánh sáng, vệ sinh sát trùng chuồng và chế độ vận động) để vật nuôi phát triển khỏe mạnh.</li>
            <li><strong>Phúc lợi động vật:</strong> Là việc đối xử nhân đạo để con vật luôn trong trạng thái thể chất và tinh thần tốt: Không bị đói khát; không bị đau đớn, bệnh tật; không bị sợ hãi, stress và được tự do thể hiện các tập tính tự nhiên trong điều kiện an toàn.</li>
          </ul>
        `
      },
      {
        heading: "2. Chăm sóc các nhóm đối tượng vật nuôi",
        content: `
          <ul class="list-disc pl-5 space-y-1.5 text-xs">
            <li><strong>Vật nuôi non:</strong> Hệ tiêu hóa, hô hấp và khả năng điều tiết thân nhiệt chưa hoàn thiện. <em>Biện pháp:</em> Phải giữ ấm chuồng; cho bú <strong>sữa đầu</strong> của mẹ càng sớm càng tốt vì sữa đầu chứa hàm lượng kháng thể cực kì cao giúp phòng chống bệnh; tập ăn dặm sớm; cho vận động và tắm nắng sớm hấp thụ vitamin D.</li>
            <li><strong>Vật nuôi đực giống:</strong> Quyết định chất lượng đời con. <em>Biện pháp:</em> Khẩu phần ăn giàu đạm, vitamin (A, E) và khoáng chất; kiểm soát lượng ăn vừa đủ tránh quá béo làm lười phối hoặc quá gầy làm giảm phẩm chất tinh dịch; chuồng rộng rãi, cho tắm chải và vận động hằng ngày.</li>
            <li><strong>Vật nuôi cái sinh sản:</strong> Nhu cầu thay đổi linh hoạt qua 3 giai đoạn:
              <ol class="list-decimal pl-5 mt-1 space-y-0.5">
                <li><em>Giai đoạn hậu bị:</em> Khẩu phần duy trì khung xương vững chắc, tránh tích mỡ làm hẹp đường sinh dục.</li>
                <li><em>Giai đoạn mang thai:</em> Bổ sung dinh dưỡng nuôi thai phát triển toàn diện, không vận động mạnh.</li>
                <li><em>Giai đoạn đẻ và nuôi con (tiết sữa):</em> Nhu cầu năng lượng và protein cao nhất để tạo sữa nuôi con, chuồng luôn khô ráo ấm áp.</li>
              </ol>
            </li>
          </ul>
        `
      }
    ],
    application: "Quan sát một vật nuôi con (như chó con, mèo con hoặc gà con) tại nhà: Ghi lại khẩu phần thức ăn, cách sưởi ấm vào ban đêm và thời điểm tập cho ăn thức ăn rắn.",
    quizzes: [
      {
        q: "Vì sao vật nuôi non sơ sinh cần được bú sữa đầu của mẹ càng sớm càng tốt?",
        opts: ["Sữa đầu chứa lượng kháng thể tự nhiên rất cao giúp bảo vệ con non", "Sữa đầu chỉ chứa chất béo giúp con non ngủ ngon", "Sữa đầu có vị ngọt con non thích bú", "Để con mẹ không bị tức sữa"],
        ans: 0,
        explain: "Sữa đầu của mẹ chứa nhiều kháng thể miễn dịch tự nhiên giúp con non chống chọi với mầm bệnh từ môi trường bên ngoài."
      },
      {
        q: "Đối với vật nuôi đực giống, điều gì cần đặc biệt tránh trong chế độ nuôi dưỡng?",
        opts: ["Không để con đực quá béo hoặc quá gầy", "Cho con đực ăn nhiều chất đạm", "Cho con đực vận động mỗi ngày", "Tắm chải thường xuyên"],
        ans: 0,
        explain: "Con đực quá béo sẽ bị thoái hóa mỡ tinh hoàn, lười nhảy phối; quá gầy làm giảm chất lượng và số lượng tinh dịch."
      }
    ]
  },

  // ==================== BÀI 11 ====================
  {
    chapter: "Chương III: Chăn nuôi",
    chapterTag: "CHƯƠNG 3",
    chapterColor: "bg-amber-600",
    id: "bai-11",
    lessonNum: "Bài 11",
    title: "Bài 11. Phòng và trị bệnh cho vật nuôi",
    pages: "SGK tr. 52–56",
    objective: "Nhận biết biểu hiện và nguyên nhân gây bệnh; nêu vai trò và các biện pháp phòng, trị bệnh cho vật nuôi; biết cách ứng xử an toàn sinh học.",
    mindmap: {
      nodes: [
        { title: "BIỂU HIỆN & NGUYÊN NHÂN", desc: "Ủ rũ, sốt, tiêu chảy, bỏ ăn; Nguyên nhân do vi sinh vật, kí sinh trùng, thức ăn, môi trường", color: "#d97706" },
        { title: "BIỆN PHÁP PHÒNG BỆNH", desc: "Vệ sinh chuồng sạch, ăn uống sạch, cách li nguồn lây, tiêm phòng vaccine", color: "#b45309" },
        { title: "ỨNG XỬ AN TOÀN", desc: "Báo cán bộ thú y; cấm tự ý tiêm/cho uống thuốc người; cấm vứt xác ra môi trường", color: "#ef4444" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 11: 4 NGUYÊN NHÂN GÂY BỆNH & QUY TRÌNH PHÒNG TRỊ -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-amber-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-amber-500/20">
          <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-syringe"></i> Hình 11: 4 Nhóm Nguyên Nhân Gây Bệnh &amp; Nguyên Tắc Phòng Bệnh Bằng Vaccine
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 52–56</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#78350f"/>
            <text x="410" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">4 NGUYÊN NHÂN CHÍNH GÂY BỆNH Ở VẬT NUÔI</text>

            <g transform="translate(30, 60)">
              <!-- N1 -->
              <rect x="0" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
              <text x="87" y="20" text-anchor="middle" fill="#fca5a5" font-size="9.5" font-weight="900">1. VI SINH VẬT GÂY BỆNH</text>
              <text x="10" y="40" fill="#cbd5e1" font-size="8">&bull; Vi khuẩn (tụ huyết trùng, phó thương hàn)</text>
              <text x="10" y="55" fill="#cbd5e1" font-size="8">&bull; Virus (Newcastle, dịch tả lợn châu Phi, cúm)</text>
              <text x="10" y="70" fill="#ef4444" font-size="7.5" font-weight="700">&rarr; Lây lan rất nhanh &amp; gây chết hàng loạt</text>

              <!-- N2 -->
              <rect x="195" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="282" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">2. KÍ SINH TRÙNG</text>
              <text x="205" y="40" fill="#cbd5e1" font-size="8">&bull; Ngoại kí sinh: Ve, rận, bọ chét, ghẻ</text>
              <text x="205" y="55" fill="#cbd5e1" font-size="8">&bull; Nội kí sinh: Giun đũa, sán lá gan</text>
              <text x="205" y="70" fill="#fbbf24" font-size="7.5" font-weight="700">&rarr; Hút máu, làm vật nuôi gầy còi cọc</text>

              <!-- N3 -->
              <rect x="390" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="477" y="20" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="900">3. DINH DƯỠNG THỨC ĂN</text>
              <text x="400" y="40" fill="#cbd5e1" font-size="8">&bull; Thức ăn ôi thiu, nấm mốc</text>
              <text x="400" y="55" fill="#cbd5e1" font-size="8">&bull; Nước bẩn nhiễm độc tố</text>
              <text x="400" y="70" fill="#38bdf8" font-size="7.5" font-weight="700">&rarr; Gây ngộ độc, tiêu chảy, viêm dạ dày</text>

              <!-- N4 -->
              <rect x="585" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="672" y="20" text-anchor="middle" fill="#34d399" font-size="9.5" font-weight="900">4. MÔI TRƯỜNG KHÍ HẬU</text>
              <text x="595" y="40" fill="#cbd5e1" font-size="8">&bull; Quá lạnh gió lùa hoặc quá nóng ẩm</text>
              <text x="595" y="55" fill="#cbd5e1" font-size="8">&bull; Mật độ chuồng quá chật chội</text>
              <text x="595" y="70" fill="#34d399" font-size="7.5" font-weight="700">&rarr; Giảm sức đề kháng, dễ nhiễm bệnh</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Dấu hiệu và nguyên nhân gây bệnh ở vật nuôi",
        content: `
          <p class="text-xs"><strong>Biểu hiện:</strong> Vật nuôi ủ rũ, chậm chạp, nằm co cụm, giảm hoặc bỏ ăn hoàn toàn, thân nhiệt tăng cao (sốt), mắt lờ đờ chảy dỉ mắt, mũi chảy dịch, ho hen, thở khò khè, tiêu chảy phân lỏng có bọt hoặc lẫn máu, liệt chân. Bệnh chuyển biến nặng có thể dẫn đến tử vong nhanh chóng.</p>
          <p class="text-xs mt-1"><strong>4 nhóm nguyên nhân chính:</strong> (1) Do vi sinh vật truyền nhiễm (vi khuẩn, virus); (2) Do động vật kí sinh (giun, sán, ve, rận); (3) Do thức ăn, nước uống không bảo đảm an toàn dinh dưỡng; (4) Do môi trường chuồng trại ô nhiễm, thời tiết biến đổi đột ngột.</p>
        `
      },
      {
        heading: "2. Biện pháp phòng bệnh và vai trò của vaccine",
        content: `
          <p class="text-xs"><strong>Phòng bệnh là chính:</strong> Vệ sinh chuồng trại sạch sẽ, khô ráo; cung cấp thức ăn, nước uống sạch đủ chất; định kì tẩy giun sán; cách li nghiêm ngặt cá thể mới mua về theo dõi 2 &ndash; 3 tuần trước khi nhập đàn.</p>
          <p class="text-xs mt-1"><strong>Vai trò của vaccine:</strong> Vaccine chứa mầm bệnh đã bị làm suy yếu hoặc bất hoạt. Khi tiêm vào cơ thể khỏe mạnh, vaccine kích thích hệ miễn dịch tự sinh ra kháng thể đặc hiệu để sẵn sàng tiêu diệt mầm bệnh khi bị lây nhiễm trong tương lai. Tiêm phòng vaccine đúng lịch quy định là biện pháp chủ động và hiệu quả nhất phòng chống dịch bệnh truyền nhiễm.</p>
        `
      },
      {
        heading: "3. Ứng xử an toàn khi vật nuôi bị bệnh",
        content: `
          <div class="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-xs text-rose-800 dark:text-rose-300 space-y-1">
            <p><strong>Quy tắc an toàn sinh học:</strong></p>
            <p>&bull; Cách li ngay lập tức con ốm vào khu riêng biệt để tránh lây lan cả đàn.</p>
            <p>&bull; Báo ngay cho người lớn và liên hệ cán bộ thú y đến khám, kê đơn điều trị.</p>
            <p>&bull; Tuyệt đối không tự ý lấy thuốc kháng sinh của người cho vật nuôi uống hoặc tự ý tiêm thuốc khi chưa có chuyên môn.</p>
            <p>&bull; <strong>Nghiêm cấm:</strong> Không giết mổ, không bán chạy, không vận chuyển và không vứt xác vật nuôi chết bừa bãi ra kênh rạch, môi trường.</p>
          </div>
        `
      }
    ],
    application: "Thiết kế bảng phân tích nhanh: Dấu hiệu bất thường quan sát được ở vật nuôi &bull; Nguyên nhân có thể gây ra &bull; Việc cần làm ngay (cách li) &bull; Người cần thông báo (người chăm sóc, bác sĩ thú y).",
    quizzes: [
      {
        q: "Biện pháp phòng ngừa bệnh truyền nhiễm nguy hiểm nào mang lại hiệu quả chủ động và cao nhất cho đàn vật nuôi?",
        opts: ["Tiêm phòng vaccine đúng lịch định kì", "Cho vật nuôi uống nhiều nước đường", "Đợi khi có bệnh mới tiêm thuốc", "Bổ sung thật nhiều chất béo"],
        ans: 0,
        explain: "Tiêm vaccine giúp cơ thể vật nuôi tạo miễn dịch chủ động chống lại các mầm bệnh truyền nhiễm nguy hiểm."
      },
      {
        q: "Khi phát hiện một con vật nuôi có biểu hiện bỏ ăn, sốt cao và tiêu chảy, việc làm ĐẦU TIÊN là gì?",
        opts: ["Cách li con ốm ra khỏi đàn và báo cho cán bộ thú y", "Bán tháo ngay ra chợ", "Tự ý lấy thuốc kháng sinh của người cho uống", "Vứt bỏ con vật ra mương nước"],
        ans: 0,
        explain: "Cách li ngay giúp ngăn chặn lây nhiễm chéo cho cả đàn và việc báo thú y giúp chẩn đoán điều trị đúng phác đồ."
      }
    ]
  },

  // ==================== BÀI 12 ====================
  {
    chapter: "Chương III: Chăn nuôi",
    chapterTag: "CHƯƠNG 3",
    chapterColor: "bg-amber-600",
    id: "bai-12",
    lessonNum: "Bài 12",
    title: "Bài 12. Chăn nuôi gà thịt trong nông hộ",
    pages: "SGK tr. 57–62",
    objective: "Trình bày yêu cầu về chuồng nuôi, thức ăn, kĩ thuật cho ăn, chăm sóc theo từng giai đoạn; nhận biết và phòng trị 3 bệnh thường gặp ở gà thịt.",
    mindmap: {
      nodes: [
        { title: "CHUỒNG & ĐỆM LÓT", desc: "Nơi cao ráo, tránh gió lùa; Đệm trấu dày 10–15cm; Rèm bạt che mưa", color: "#d97706" },
        { title: "CHĂM SÓC THEO GIAI ĐOẠN", desc: "Dưới 1 tháng: Úm sưởi ấm; 1–3 tháng: Thả vườn vận động; Ba sạch", color: "#b45309" },
        { title: "3 BỆNH NGUY HIỂM", desc: "Tiêu chảy &bull; Newcastle (gà rù) &bull; Cúm gia cầm (nguy hiểm lây sang người)", color: "#ef4444" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 12: QUY TRÌNH ÚM GÀ & NGUYÊN TẮC BA SẠCH -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-amber-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-amber-500/20">
          <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-kiwi-bird"></i> Hình 12: Kĩ Thuật Úm Gà Con Dưới Đèn &amp; Nguyên Tắc "Ba Sạch" Nuôi Gà Thịt
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 57–62</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#78350f"/>
            <text x="410" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">KĨ THUẬT QUAN SÁT NHIỆT ĐỘ ÚM GÀ CON &amp; NGUYÊN TẮC "BA SẠCH"</text>

            <g transform="translate(30, 60)">
              <!-- Úm gà quá lạnh -->
              <rect x="0" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1"/>
              <text x="87" y="20" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="900">GÀ BỊ LẠNH</text>
              <text x="87" y="40" text-anchor="middle" fill="#f8fafc" font-size="8">&bull; Gà tụ tập thành đống</text>
              <text x="87" y="55" text-anchor="middle" fill="#f8fafc" font-size="8">&bull; Chen chúc sát dưới bóng đèn</text>
              <text x="87" y="75" text-anchor="middle" fill="#38bdf8" font-size="7.5" font-weight="800">&rarr; Cần hạ thấp đèn / tăng nhiệt</text>

              <!-- Úm gà quá nóng -->
              <rect x="195" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
              <text x="282" y="20" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="900">GÀ BỊ QUÁ NÓNG</text>
              <text x="282" y="40" text-anchor="middle" fill="#f8fafc" font-size="8">&bull; Gà tản xa bóng đèn</text>
              <text x="282" y="55" text-anchor="middle" fill="#f8fafc" font-size="8">&bull; Nằm há mỏ, thở dốc, uống nhiều</text>
              <text x="282" y="75" text-anchor="middle" fill="#f87171" font-size="7.5" font-weight="800">&rarr; Nâng cao đèn / thông gió</text>

              <!-- Úm gà vừa nhiệt -->
              <rect x="390" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="477" y="20" text-anchor="middle" fill="#34d399" font-size="9" font-weight="900">NHIỆT ĐỘ THÍCH HỢP</text>
              <text x="477" y="40" text-anchor="middle" fill="#f8fafc" font-size="8">&bull; Gà phân bố đều khắp quây</text>
              <text x="477" y="55" text-anchor="middle" fill="#f8fafc" font-size="8">&bull; Đi lại nhanh nhẹn, ăn uống tốt</text>
              <text x="477" y="75" text-anchor="middle" fill="#6ee7b7" font-size="7.5" font-weight="800">&rarr; Giữ nguyên mức nhiệt</text>

              <!-- Ba sạch -->
              <rect x="585" y="0" width="175" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="672" y="20" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="900">NGUYÊN TẮC "BA SẠCH"</text>
              <text x="595" y="40" fill="#fde68a" font-size="8">&bull; ĂN SẠCH: Thức ăn tươi, không mốc</text>
              <text x="595" y="55" fill="#fde68a" font-size="8">&bull; Ở SẠCH: Chuồng khô, đệm trấu sạch</text>
              <text x="595" y="70" fill="#fde68a" font-size="8">&bull; UỐNG SẠCH: Nước sạch thay hằng ngày</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Yêu cầu kĩ thuật chuồng nuôi và thức ăn",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Vị trí &amp; Hướng chuồng:</strong> Chọn nơi cao ráo, thoát nước tốt, tránh ngập úng; hướng chuồng nên chọn hướng đông nam hoặc nam để đón gió mát mùa hè và tránh gió mùa đông bắc lạnh giá mùa đông.</li>
            <li><strong>Nền chuồng &amp; Đệm lót:</strong> Láng xi măng hoặc lát gạch, rải lớp chất độn chuồng (trấu, mùn cưa, dăm bào) dày từ <strong>10 &ndash; 15 cm</strong> đã phun khử trùng để hút ẩm, giữ ấm và tiêu phân.</li>
            <li><strong>Thức ăn theo lứa tuổi:</strong>
              <ul class="list-circle pl-5 mt-0.5 space-y-0.5">
                <li><em>Gà dưới 1 tháng tuổi:</em> Thức ăn giàu đạm (20 &ndash; 22% protein), cho ăn tự do cả ngày lẫn đêm để gà con lớn nhanh.</li>
                <li><em>Gà 1 &ndash; 3 tháng tuổi:</em> Cho ăn 3 &ndash; 4 lần/ngày, các bữa cách nhau 3 &ndash; 4 giờ; bổ sung rau xanh thái nhỏ.</li>
                <li><em>Gà trên 3 tháng tuổi:</em> Cho ăn khẩu phần cân đối tinh bột (ngô, thóc) và đạm nhằm vỗ béo xuất bán.</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        heading: "2. Chăm sóc gà theo từng giai đoạn",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Giai đoạn úm (0 &ndash; 1 tháng tuổi):</strong> Gà con sức đề kháng kém, dễ chết do lạnh. Phải quây kín bằng cót, treo bóng đèn hồng ngoại/sưởi ấm. Quan sát hành vi đàn gà để chỉnh nhiệt: Tụ thành đám dưới đèn &rarr; gà bị lạnh; tản xa đèn há mỏ &rarr; gà bị nóng; túm tụm về một góc &rarr; có gió lùa; tản đều ăn uống hoạt bát &rarr; nhiệt độ thích hợp.</li>
            <li><strong>Giai đoạn trên 1 tháng tuổi:</strong> Bỏ quây úm; sau 2 tháng có thể thả gà ra vườn rộng có cỏ xanh vào những ngày nắng ráo để gà vận động, tắm nắng, giúp cơ bắp săn chắc và chất lượng thịt thơm ngon.</li>
          </ul>
        `
      },
      {
        heading: "3. Nhận biết và phòng trừ 3 bệnh nguy hiểm ở gà",
        content: `
          <div class="space-y-2 mt-1 text-xs">
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-amber-600 block">1. Bệnh tiêu chảy (Bạch lị / Cầu trùng)</span>
              Gà ủ rũ, kém ăn, cánh sã, phân loãng màu trắng hoặc xanh có bọt. Phòng ngừa: Giữ đệm lót khô ráo, rửa máng ăn máng uống hằng ngày, dùng men vi sinh đường ruột.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 block">2. Bệnh Newcastle (Bệnh gà rù / Dịch tả gà)</span>
              Do virus gây ra, lây lan cực nhanh. Gà sốt cao, ủ rũ, thở khò khè, mào tím tái, ngoẹo cổ co giật, uống nhiều nước, tiêu chảy phân trắng xanh. Phòng bệnh: Bắt buộc nhỏ và tiêm vaccine Newcastle định kì.
            </div>
            <div class="p-2.5 rounded-lg bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-800 text-red-900 dark:text-red-200">
              <span class="font-bold block text-sm">3. Bệnh Cúm gia cầm (Avian Influenza)</span>
              Bệnh truyền nhiễm đặc biệt nguy hiểm do virus lây lan nhanh và <strong>có thể biến chủng lây truyền sang người gây tử vong</strong>. Triệu chứng: Gà sốt rất cao, sưng phù đầu mặt, mào và yếm thâm tím, xuất huyết chân, chết nhanh hàng loạt. <em>Xử lí:</em> Tuyệt đối không chạm vào gà chết, không giết mổ tiêu thụ; báo ngay cho chính quyền địa phương và cán bộ thú y để tiêu hủy dập dịch khẩn cấp.
            </div>
          </div>
        `
      }
    ],
    application: "Lập checklist kiểm tra hằng ngày cho một chuồng gà thịt tại nông hộ: Kiểm tra nước uống máng ăn &bull; Kiểm tra mùi khí chuồng &bull; Độ dày chất độn chuồng &bull; Quan sát độ nhanh nhẹn của đàn gà khi cho ăn.",
    quizzes: [
      {
        q: "Khi úm gà con, quan sát thấy đàn gà túm tụm chen chúc nằm đè lên nhau dưới bóng đèn là biểu hiện của điều gì?",
        opts: ["Nhiệt độ úm đang bị quá lạnh", "Nhiệt độ úm đang bị quá nóng", "Chuồng đang có gió lùa từ một phía", "Gà đã no bụng"],
        ans: 0,
        explain: "Khi lạnh, gà con sẽ chen chúc tụ tập dưới nguồn nhiệt bóng đèn để sưởi ấm lẫn nhau."
      },
      {
        q: "Bệnh truyền nhiễm nào ở gia cầm đặc biệt nguy hiểm vì có khả năng lây sang người gây nguy hiểm tính mạng?",
        opts: ["Bệnh cúm gia cầm", "Bệnh còi xương", "Bệnh rụng lông", "Bệnh thiếu vitamin A"],
        ans: 0,
        explain: "Cúm gia cầm (như H5N1, H5N6) là bệnh truyền nhiễm nguy hiểm lây từ gia cầm sang người với tỉ lệ tử vong cao."
      }
    ]
  },

  // ==================== BÀI 13 ====================
  {
    chapter: "Chương III: Chăn nuôi",
    chapterTag: "CHƯƠNG 3",
    chapterColor: "bg-amber-600",
    id: "bai-13",
    lessonNum: "Bài 13",
    title: "Bài 13. Thực hành: Lập kế hoạch nuôi vật nuôi trong gia đình",
    pages: "SGK tr. 63–67",
    objective: "Lựa chọn vật nuôi phù hợp điều kiện gia đình; lập kế hoạch và tính toán dự toán chi phí nuôi dưỡng, chăm sóc trong năm đầu; nâng cao tinh thần trách nhiệm.",
    mindmap: {
      nodes: [
        { title: "CÁC BƯỚC LẬP KẾ HOẠCH", desc: "Chọn loài &bull; Tìm hiểu chi phí &bull; Lập bảng dự toán &bull; Xây dựng lịch chăm sóc", color: "#d97706" },
        { title: "CÔNG THỨC DỰ TOÁN", desc: "Tổng chi phí = Chi phí mua sắm ban đầu + Tổng chi phí định kì năm đầu", color: "#b45309" },
        { title: "CHĂM SÓC & TRÁCH NHIỆM", desc: "Dinh dưỡng, vệ sinh, thú y vaccine, giải pháp khi gia đình vắng nhà", color: "#059669" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 13: CÔNG THỨC DỰ TOÁN CHI PHÍ NUÔI THÚ CƯNG -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-amber-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-amber-500/20">
          <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-calculator"></i> Hình 13: Công Thức &amp; Cấu Trúc Dự Toán Chi Phí Nuôi Vật Nuôi Trong Năm Đầu
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 63–67</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#78350f"/>
            <text x="410" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">TỔNG CHI PHÍ NĂM ĐẦU = CHI PHÍ BAN ĐẦU + CHI PHÍ ĐỊNH KÌ CẢ NĂM</text>

            <g transform="translate(35, 60)">
              <!-- Khoản 1: Mua sắm ban đầu -->
              <rect x="0" y="0" width="350" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="175" y="20" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="900">1. KHOẢN MUA SẮM BAN ĐẦU (1 LẦN)</text>
              <text x="15" y="40" fill="#cbd5e1" font-size="8">&bull; Tiền mua con giống (chó, mèo, chim cảnh)</text>
              <text x="15" y="55" fill="#cbd5e1" font-size="8">&bull; Chuồng nuôi, lồng nhốt, nệm nằm</text>
              <text x="15" y="70" fill="#cbd5e1" font-size="8">&bull; Bát ăn, bình nước, dây dắt, khay vệ sinh</text>

              <!-- Plus sign -->
              <text x="375" y="50" text-anchor="middle" fill="#fde68a" font-size="24" font-weight="900">+</text>

              <!-- Khoản 2: Định kì cả năm -->
              <rect x="400" y="0" width="350" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="575" y="20" text-anchor="middle" fill="#34d399" font-size="10.5" font-weight="900">2. KHOẢN CHI ĐỊNH KÌ (TRONG 12 THÁNG)</text>
              <text x="415" y="40" fill="#cbd5e1" font-size="8">&bull; Thức ăn hạt, pate, thịt, thực phẩm hằng tháng</text>
              <text x="415" y="55" fill="#cbd5e1" font-size="8">&bull; Cát vệ sinh, sữa tắm khử khuẩn định kì</text>
              <text x="415" y="70" fill="#cbd5e1" font-size="8">&bull; Tiêm vaccine (dại, 7 bệnh), sổ giun, khám thú y</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Các bước lập kế hoạch nuôi vật nuôi",
        content: `
          <ol class="list-decimal pl-5 space-y-1 text-xs">
            <li><strong>Chọn loài và giống vật nuôi:</strong> Dựa vào sở thích, không gian diện tích nơi ở, quỹ thời gian chăm sóc, điều kiện tài chính gia đình và quy định khu dân cư.</li>
            <li><strong>Khảo sát và liệt kê các hạng mục chi phí:</strong> Chia rõ làm 2 nhóm: (1) Chi phí đầu tư ban đầu; (2) Chi phí định kì hằng tháng.</li>
            <li><strong>Lập bảng dự toán chi tiết:</strong> Ghi rõ số lượng, đơn giá tham khảo tại địa phương, chu kì mua sắm và thành tiền.</li>
            <li><strong>Xây dựng thời gian biểu chăm sóc:</strong> Lịch cho ăn, dọn vệ sinh chuồng, tắm chải, vận động và phương án gửi người chăm sóc khi gia đình đi vắng dài ngày.</li>
          </ol>
        `
      },
      {
        heading: "2. Bảng dự toán chi phí mẫu nuôi chó cảnh trong năm đầu",
        content: `
          <div class="overflow-x-auto mt-1">
            <table class="w-full text-left text-xs border border-gray-200 dark:border-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold">
                <tr><th class="p-2 border">Khoản chi</th><th class="p-2 border">Hạng mục cụ thể</th><th class="p-2 border">Số lượng / Tần suất</th><th class="p-2 border">Đơn giá</th><th class="p-2 border">Thành tiền</th></tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr><td class="p-2 border font-medium" rowspan="2">Ban đầu</td><td class="p-2 border">Chó con giống (Poodle/Phốc sóc)</td><td class="p-2 border">1 con</td><td class="p-2 border">2.500.000</td><td class="p-2 border">2.500.000</td></tr>
                <tr><td class="p-2 border">Chuồng, nệm, bát ăn, dây dắt</td><td class="p-2 border">1 bộ trọn gói</td><td class="p-2 border">600.000</td><td class="p-2 border">600.000</td></tr>
                <tr><td class="p-2 border font-medium" rowspan="3">Định kì cả năm</td><td class="p-2 border">Thức ăn hạt &amp; dinh dưỡng</td><td class="p-2 border">12 tháng &times; 250k</td><td class="p-2 border">250.000/tháng</td><td class="p-2 border">3.000.000</td></tr>
                <tr><td class="p-2 border">Tiêm phòng vaccine + tẩy giun</td><td class="p-2 border">3 mũi + 4 lần sổ</td><td class="p-2 border">Trọn gói thú y</td><td class="p-2 border">650.000</td></tr>
                <tr><td class="p-2 border">Sữa tắm, vật dụng vệ sinh</td><td class="p-2 border">Cả năm</td><td class="p-2 border">350.000</td><td class="p-2 border">350.000</td></tr>
                <tr class="font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300">
                  <td class="p-2 border" colspan="4">TỔNG DỰ TOÁN NĂM ĐẦU TIÊN</td>
                  <td class="p-2 border">7.100.000 VNĐ</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    application: "Lập một bản kế hoạch nuôi một con vật yêu thích (mèo cảnh, chim hót hoặc chuột Hamster) phù hợp với túi tiền và điều kiện thực tế của gia đình em.",
    quizzes: [
      {
        q: "Công thức tính tổng chi phí nuôi một vật nuôi trong năm đầu tiên bao gồm các khoản nào?",
        opts: ["Chi phí mua sắm ban đầu + Tổng chi phí chăm sóc định kì trong năm", "Chỉ tính tiền mua con giống ban đầu", "Chỉ tính tiền mua thức ăn hằng tháng", "Chi phí mua thuốc chữa bệnh"],
        ans: 0,
        explain: "Tổng chi phí năm đầu = Chi phí mua con giống, chuồng trại ban đầu + Toàn bộ tiền thức ăn, thú y, vệ sinh định kì trong 12 tháng."
      },
      {
        q: "Khi nuôi chó con, điều nào sau đây cần tuyệt đối TRÁNH để bảo vệ hệ tiêu hóa của chó?",
        opts: ["Không cho chó con ăn xương ống, xương gà sắc nhọn", "Cho ăn thức ăn ấm mềm", "Cho uống nước lọc sạch", "Tẩy giun định kì"],
        ans: 0,
        explain: "Xương gà hoặc xương ống sắc nhọn có thể làm hóc, thủng thực quản, dạ dày và ruột của chó con."
      }
    ]
  },

  // ==================== CHƯƠNG IV: THỦY SẢN ====================
  {
    chapter: "Chương IV: Thủy sản",
    chapterTag: "CHƯƠNG 4",
    chapterColor: "bg-blue-600",
    id: "bai-14",
    lessonNum: "Bài 14",
    title: "Bài 14. Giới thiệu về thủy sản",
    pages: "SGK tr. 70–72",
    objective: "Nêu vai trò to lớn của ngành thủy sản; nhận biết các loài thủy sản có giá trị kinh tế cao; đề xuất các giải pháp khai thác bền vững và bảo vệ môi trường nuôi thủy sản.",
    mindmap: {
      nodes: [
        { title: "VAI TRÒ THỦY SẢN", desc: "Thực phẩm giàu đạm, xuất khẩu tỉ USD, việc làm, gắn liền bảo vệ chủ quyền biển", color: "#2563eb" },
        { title: "LOÀI GIÁ TRỊ KINH TẾ", desc: "Tôm hùm, tôm thẻ, cá tra, cá basa, cá song, cá lăng, cua biển", color: "#0284c7" },
        { title: "KHAI THÁC & BẢO VỆ", desc: "Cấm đánh bắt hủy diệt (chất nổ, xung điện); bảo tồn nguồn lợi & môi trường nuôi", color: "#0d9488" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 14: CÁC LOÀI THỦY SẢN GIÁ TRỊ KINH TẾ & BẢO VỆ NGUỒN LỢI -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-fish"></i> Hình 14: Các Loài Thủy Sản Xuất Khẩu Chủ Lực &amp; Nguyên Tắc Khai Thác Bền Vững
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 70–72</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">CÁC LOÀI THỦY SẢN KINH TẾ VÀ QUY TẮC BẢO VỆ NGUỒN LỢI BIỂN</text>

            <g transform="translate(30, 60)">
              <!-- Nhóm tôm cua -->
              <rect x="0" y="0" width="240" height="90" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="120" y="20" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="900">NHÓM GIÁP XÁC GIÁ TRỊ CAO</text>
              <text x="10" y="40" fill="#cbd5e1" font-size="8">&bull; Tôm hùm (Nha Trang, Phú Yên): Đặc sản đắt giá</text>
              <text x="10" y="55" fill="#cbd5e1" font-size="8">&bull; Tôm thẻ chân trắng &amp; tôm sú: Xuất khẩu tỉ USD</text>
              <text x="10" y="70" fill="#cbd5e1" font-size="8">&bull; Cua biển Cà Mau: Thịt ngọt chắc, vỏ cứng</text>

              <!-- Nhóm cá nước ngọt & lợ -->
              <rect x="260" y="0" width="240" height="90" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="380" y="20" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="900">NHÓM CÁ KINH TẾ CHỦ LỰC</text>
              <text x="270" y="40" fill="#cbd5e1" font-size="8">&bull; Cá tra, cá basa: Vùng ĐBSCL xuất khẩu toàn cầu</text>
              <text x="270" y="55" fill="#cbd5e1" font-size="8">&bull; Cá song (cá mú): Nuôi lồng bè ven biển</text>
              <text x="270" y="70" fill="#cbd5e1" font-size="8">&bull; Cá lăng, diêu hồng: Nuôi sông &amp; lòng hồ thủy điện</text>

              <!-- Biện pháp bảo vệ -->
              <rect x="520" y="0" width="240" height="90" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
              <text x="640" y="20" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="900">BẢO VỆ NGUỒN LỢI THỦY SẢN</text>
              <text x="530" y="40" fill="#fecaca" font-size="8">🚫 CẤM dùng thuốc nổ, xung kích điện, hóa chất</text>
              <text x="530" y="55" fill="#cbd5e1" font-size="8">&bull; Không đánh bắt cá con, cá đang mùa sinh sản</text>
              <text x="530" y="70" fill="#a7f3d0" font-size="8">&bull; Thả cá giống tái tạo nguồn lợi tự nhiên</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Vai trò của thủy sản và các loài có giá trị kinh tế",
        content: `
          <p class="text-xs"><strong>Vai trò:</strong> Cung cấp thực phẩm giàu protein, omega-3, khoáng chất; cung cấp nguyên liệu chế biến hàng triệu tấn thủy sản xuất khẩu mang về hàng tỉ USD cho đất nước; tạo sinh kế cho hàng triệu ngư dân; hoạt động đánh bắt xa bờ của bà con ngư dân còn góp phần khẳng định và bảo vệ chủ quyền biển đảo thiêng liêng của Tổ quốc.</p>
          <p class="text-xs mt-1"><strong>Các loài có giá trị cao:</strong> Tôm hùm, tôm sú, tôm thẻ chân trắng, cua biển, cá tra, cá basa, cá song, cá lăng, cá thát lát.</p>
        `
      },
      {
        heading: "2. Khai thác bền vững và bảo vệ môi trường thủy sản",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li>Nghiêm cấm tuyệt đối các hành vi khai thác tận diệt: Đánh bắt bằng mìn nổ, kích điện, lưới mắt quá nhỏ hay dùng chất độc hóa học.</li>
            <li>Hạn chế đánh bắt ven bờ trong mùa sinh sản của tôm cá; tích cực thả bổ sung cá giống về môi trường tự nhiên.</li>
            <li>Quản lí chặt chẽ chất thải nuôi trồng thủy sản, xử lí nước thải bằng ao lắng lọc vi sinh trước khi xả ra môi trường bên ngoài; hạn chế lạm dụng kháng sinh hóa chất trong quá trình nuôi.</li>
          </ul>
        `
      }
    ],
    application: "Kể tên các loài thủy sản phổ biến trong bữa ăn của gia đình em. Nêu xuất xứ của chúng (được đánh bắt tự nhiên hay được nuôi ở ao, hồ, bè trên sông/biển).",
    quizzes: [
      {
        q: "Hành vi khai thác thủy sản nào sau đây bị pháp luật Việt Nam NGHIÊM CẤM tuyệt đối?",
        opts: ["Sử dụng thuốc nổ, xung điện hoặc chất độc hại", "Sử dụng cần câu cá giải trí", "Kéo lưới ở vùng biển xa bờ đúng kích thước mắt lưới", "Nuôi cá lồng bè trên hồ chứa"],
        ans: 0,
        explain: "Dùng thuốc nổ, xung điện tiêu diệt toàn bộ thủy sinh vật từ lớn đến nhỏ và phá hủy hoàn toàn rạn san hô, sinh cảnh."
      },
      {
        q: "Loài thủy sản nước ngọt nào của vùng Đồng bằng sông Cửu Long đóng vai trò xuất khẩu chủ lực hàng đầu thế giới?",
        opts: ["Cá tra và cá basa", "Cá chép", "Cá mè trắng", "Cá hồi"],
        ans: 0,
        explain: "Cá tra và cá basa là mặt hàng xuất khẩu tỉ USD nổi tiếng của Việt Nam sang hàng trăm quốc gia trên thế giới."
      }
    ]
  },

  // ==================== BÀI 15 ====================
  {
    chapter: "Chương IV: Thủy sản",
    chapterTag: "CHƯƠNG 4",
    chapterColor: "bg-blue-600",
    id: "bai-15",
    lessonNum: "Bài 15",
    title: "Bài 15. Nuôi cá ao",
    pages: "SGK tr. 73–78",
    objective: "Trình bày quy trình chuẩn bị ao và thả cá giống; kĩ thuật cho ăn, chăm sóc, thu hoạch cá; thực hiện đo nhiệt độ và độ trong của nước bằng đĩa Secchi.",
    mindmap: {
      nodes: [
        { title: "CHUẨN BỊ AO NUÔI", desc: "Bơm cạn &rarr; Nạo bùn &rarr; Rắc vôi bột (7–10kg/100m²) &rarr; Phơi đáy 3–5 ngày &rarr; Lấy nước", color: "#2563eb" },
        { title: "CHĂM SÓC & QUẢN LÍ", desc: "Thức ăn nổi theo tuổi (protein 28–35%); Quạt nước chống cá ngạt/nổi đầu", color: "#0284c7" },
        { title: "ĐO ĐẠC NƯỚC", desc: "Nhiệt độ thích hợp: 25–28°C; Độ trong đĩa Secchi thích hợp: 20–30 cm", color: "#0d9488" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 15: QUY TRÌNH CHUẨN BỊ AO & ĐO ĐĨA SECCHI -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-water"></i> Hình 15: Quy Trình 5 Bước Cải Tạo Ao &amp; Kĩ Thuật Đo Độ Trong Bằng Đĩa Secchi
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 73–78</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 200" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="170" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">5 BƯỚC CẢI TẠO AO NUÔI &amp; KĨ THUẬT ĐO ĐĨA SECCHI (20–30 CM)</text>

            <g transform="translate(30, 60)">
              <!-- 5 Bước cải tạo ao -->
              <rect x="0" y="0" width="90" height="110" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="45" y="20" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="900">1. TÁT CẠN</text>
              <text x="6" y="45" fill="#cbd5e1" font-size="7.5">&bull; Bơm cạn nước</text>
              <text x="6" y="60" fill="#cbd5e1" font-size="7.5">&bull; Bắt sạch cá tạp</text>
              <text x="6" y="75" fill="#cbd5e1" font-size="7.5">&bull; Bắt cá dữ</text>

              <rect x="98" y="0" width="90" height="110" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="143" y="20" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="900">2. NẠO BÙN</text>
              <text x="104" y="45" fill="#cbd5e1" font-size="7.5">&bull; Hút bớt bùn đáy</text>
              <text x="104" y="60" fill="#cbd5e1" font-size="7.5">&bull; Giữ lại lớp 15–20cm</text>
              <text x="104" y="75" fill="#cbd5e1" font-size="7.5">&bull; Đắp bờ ao chắc</text>

              <rect x="196" y="0" width="98" height="110" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="245" y="20" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="900">3. RẮC VÔI</text>
              <text x="202" y="45" fill="#fde68a" font-size="7.5">&bull; Khử trùng ao</text>
              <text x="202" y="60" fill="#fbbf24" font-size="8" font-weight="800">7–10 kg/100m²</text>
              <text x="202" y="75" fill="#cbd5e1" font-size="7.5">&bull; Nâng pH đất</text>

              <rect x="302" y="0" width="90" height="110" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="347" y="20" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="900">4. PHƠI ĐÁY</text>
              <text x="308" y="45" fill="#cbd5e1" font-size="7.5">&bull; Phơi nắng</text>
              <text x="308" y="60" fill="#38bdf8" font-size="8" font-weight="800">Từ 3 &ndash; 5 ngày</text>
              <text x="308" y="75" fill="#cbd5e1" font-size="7.5">&bull; Diệt khuẩn</text>

              <rect x="400" y="0" width="90" height="110" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
              <text x="445" y="20" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="900">5. LẤY NƯỚC</text>
              <text x="406" y="45" fill="#cbd5e1" font-size="7.5">&bull; Lọc qua túi vải</text>
              <text x="406" y="60" fill="#cbd5e1" font-size="7.5">&bull; Sâu 1.2 &ndash; 1.5m</text>
              <text x="406" y="75" fill="#cbd5e1" font-size="7.5">&bull; Gây màu nước</text>

              <!-- Panel đo đĩa Secchi -->
              <rect x="500" y="0" width="260" height="110" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="630" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">ĐO NHIỆT ĐỘ &amp; ĐỘ TRONG (SECCHI)</text>
              <circle cx="530" cy="55" r="16" fill="#1e293b" stroke="#ffffff" stroke-width="1.5"/>
              <path d="M 530 39 L 530 55 A 16 16 0 0 1 546 55 Z" fill="#ffffff"/>
              <path d="M 530 55 L 514 55 A 16 16 0 0 1 530 71 Z" fill="#ffffff"/>
              <text x="560" y="50" fill="#f8fafc" font-size="8.5">&bull; Độ trong thích hợp: <tspan fill="#6ee7b7" font-weight="800">20 &ndash; 30 cm</tspan></text>
              <text x="560" y="65" fill="#f8fafc" font-size="8.5">&bull; Nhiệt độ tối ưu: <tspan fill="#6ee7b7" font-weight="800">25 &ndash; 28 °C</tspan></text>
              <text x="560" y="80" fill="#cbd5e1" font-size="7.5">&bull; Nước quá đục: Thiếu O₂; Quá trong: Nghèo mồi</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Quy trình chuẩn bị ao và thả cá giống",
        content: `
          <p class="text-xs"><strong>5 bước cải tạo ao nuôi trước vụ mới:</strong></p>
          <ol class="list-decimal pl-5 space-y-1 text-xs">
            <li>Tháo cạn hoặc bơm tát kiệt nước ao; bắt hết cá tạp và cá dữ còn sót lại.</li>
            <li>Dọn sạch cỏ dại bờ ao, nạo vét bớt lớp bùn đáy thối, chỉ để lại lớp bùn màu dày 15 &ndash; 20 cm.</li>
            <li>Rắc <strong>vôi bột ($Ca(OH)_2$)</strong> đều khắp đáy và bờ ao với liều lượng tiêu chuẩn: <strong>7 &ndash; 10 kg / 100 m² đáy ao</strong> để diệt khuẩn, diệt mầm bệnh và trung hòa độ chua.</li>
            <li>Phơi đáy ao dưới nắng trong <strong>3 &ndash; 5 ngày</strong> cho đến khi mặt bùn nứt chân chim.</li>
            <li>Lấy nước sạch vào ao qua túi lưới lọc mịn để ngăn cá tạp, đạt độ sâu 1.2 &ndash; 1.5 m.</li>
          </ol>
          <p class="text-xs mt-2"><strong>Thả cá giống:</strong> Chọn cá khỏe mạnh, vây vảy nguyên vẹn, kích cỡ đồng đều, bơi lội nhanh nhẹn. Thả cá vào lúc trời mát (sáng sớm hoặc chiều muộn); ngâm túi cá vào ao 15 &ndash; 20 phút trước khi mở túi để cá làm quen nhiệt độ tránh bị sốc nhiệt.</p>
        `
      },
      {
        heading: "2. Kĩ thuật cho ăn và quản lí môi trường ao nuôi",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Thức ăn viên nổi:</strong> Cá nhỏ dùng viên 1 &ndash; 2 mm (đạm 30 &ndash; 35%); cá lớn dùng viên 3 &ndash; 4 mm (đạm 28 &ndash; 30%). Cho ăn 2 lần/ngày vào khoảng 8 &ndash; 9h sáng và 15 &ndash; 16h chiều với lượng ăn bằng 3 &ndash; 5% khối lượng cá trong ao.</li>
            <li><strong>Xử lí hiện tượng cá ngạt/nổi đầu:</strong> Khi cá nổi đầu đớp khí trên mặt nước vào lúc sáng sớm (do thiếu oxy hòa tan), phải bật máy quạt nước, sục khí hoặc bơm phun mưa ngay lập tức; đồng thời ngừng cho ăn và xả bớt nước bẩn.</li>
            <li><strong>Thu hoạch cá:</strong> Thu tỉa (bắt con lớn, để lại con nhỏ) hoặc thu toàn bộ (hạ cạn nước, kéo lưới gom sạch).</li>
          </ul>
        `
      },
      {
        heading: "3. Thực hành đo nhiệt độ và độ trong của nước bằng đĩa Secchi",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 text-xs">
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-blue-600 block">Kĩ thuật đo nhiệt độ nước</span>
              Nhúng đầu đo nhiệt kế chìm sâu trong nước ao khoảng 5 &ndash; 10 phút rồi đọc ngay kết quả. Nhiệt độ thích hợp nhất cho cá nước ngọt sinh trưởng là từ <strong>25 &ndash; 28 °C</strong>.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-emerald-600 block">Kĩ thuật đo đĩa Secchi</span>
              Hạ đĩa Secchi từ từ xuống nước đến khi vừa biến mất (ghi độ sâu $h_1$); hạ sâu hơn rồi kéo lên đến khi vừa nhìn thấy lại (ghi độ sâu $h_2$). Độ trong $= (h_1 + h_2) / 2$. Khoảng thích hợp nhất: <strong>20 &ndash; 30 cm</strong>.
            </div>
          </div>
        `
      }
    ],
    application: "Sử dụng một nhiệt kế gia đình để đo nhiệt độ nước của một bể cá hoặc chậu nước ngoài trời vào các khung giờ: 6h sáng, 12h trưa và 18h tối. Ghi chép và so sánh với mức nhiệt độ sinh trưởng tối ưu (25–28°C) của cá ao.",
    quizzes: [
      {
        q: "Liều lượng vôi bột rắc khử trùng đáy ao nuôi cá tiêu chuẩn theo sách giáo khoa là bao nhiêu?",
        opts: ["7–10 kg cho 100 m² đáy ao", "1–2 kg cho 100 m² đáy ao", "50–100 kg cho 100 m² đáy ao", "Chỉ rắc vài hạt tượng trưng"],
        ans: 0,
        explain: "Liều lượng 7–10 kg vôi bột cho mỗi 100 m² đáy ao vừa đủ để tiêu diệt mầm bệnh và điều chỉnh độ pH của bùn đáy."
      },
      {
        q: "Khoảng độ trong của nước ao đo bằng đĩa Secchi thích hợp nhất cho cá nuôi phát triển là bao nhiêu?",
        opts: ["Từ 20 đến 30 cm", "Từ 5 đến 10 cm", "Từ 70 đến 100 cm", "Nhìn sâu thấy tận đáy 2 mét"],
        ans: 0,
        explain: "Độ trong 20–30 cm biểu thị lượng thực vật phù du (tảo) vừa phải làm thức ăn tự nhiên và cung cấp oxy qua quang hợp."
      }
    ]
  },

  // ==================== BÀI 16 ====================
  {
    chapter: "Chương IV: Thủy sản",
    chapterTag: "CHƯƠNG 4",
    chapterColor: "bg-blue-600",
    id: "bai-16",
    lessonNum: "Bài 16",
    title: "Bài 16. Thực hành: Lập kế hoạch nuôi cá cảnh",
    pages: "SGK tr. 79–81",
    objective: "Lựa chọn loài cá cảnh và bể nuôi phù hợp; lập kế hoạch chăm sóc và tính toán chi phí nuôi cá cảnh trong năm đầu tiên.",
    mindmap: {
      nodes: [
        { title: "CHỌN CÁ & BỂ NUÔI", desc: "Cá bảy màu, cá vàng, cá chọi, nemo, koi; Bể kính, máy lọc, sục khí", color: "#2563eb" },
        { title: "DỰ TOÁN CHI PHÍ", desc: "Chi phí ban đầu (bể, máy lọc, sưởi) + Chi phí thức ăn & điện nước cả năm", color: "#0284c7" },
        { title: "CHĂM SÓC & VỆ SINH", desc: "Cho ăn vừa đủ tránh đục nước; thay 20-30% nước định kì; cấm thả ra tự nhiên", color: "#0d9488" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 16: BỂ CÁ CẢNH & HỆ THỐNG LỌC NƯỚC -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-calculator"></i> Hình 16: Cấu Trúc Bể Nuôi Cá Cảnh &amp; Mẫu Dự Toán Chi Phí Năm Đầu
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 79–81</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">MÔ HÌNH BỂ CÁ CẢNH &amp; HỆ THỐNG THIẾT BỊ HỖ TRỢ</text>

            <g transform="translate(35, 60)">
              <!-- Bể cá layout -->
              <rect x="0" y="0" width="350" height="90" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="175" y="20" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="900">THIẾT BỊ THIẾT YẾU CHO BỂ CÁ</text>
              <text x="15" y="40" fill="#cbd5e1" font-size="8">&bull; Bể kính (kích thước phù hợp không gian: 40–60cm)</text>
              <text x="15" y="55" fill="#cbd5e1" font-size="8">&bull; Máy lọc nước vi sinh (giữ nước trong, khử độc $NH_3$)</text>
              <text x="15" y="70" fill="#cbd5e1" font-size="8">&bull; Máy sục khí oxy + Cây sưởi nhiệt (mùa đông 25–28°C)</text>

              <!-- Mẫu dự toán -->
              <rect x="380" y="0" width="375" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="567" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">BẢNG DỰ TOÁN BỂ CÁ BẢY MÀU / CÁ VÀNG</text>
              <text x="395" y="40" fill="#f8fafc" font-size="8">&bull; Bể kính + máy lọc thác mini: ~350.000 VNĐ</text>
              <text x="395" y="55" fill="#f8fafc" font-size="8">&bull; Cá giống (5 cặp cá bảy màu thuần): ~100.000 VNĐ</text>
              <text x="395" y="70" fill="#f8fafc" font-size="8">&bull; Thức ăn hạt + vi sinh + muối khoáng 1 năm: ~150.000 VNĐ</text>
              <text x="567" y="85" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="800">&rarr; Tổng chi phí năm đầu: ~600.000 VNĐ</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Lựa chọn loài cá cảnh và bể nuôi phù hợp",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Chọn loài cá:</strong> Người mới bắt đầu nên chọn các loài cá khỏe, dễ nuôi, thích nghi tốt như cá bảy màu (Guppy), cá vàng, cá chọi (Betta), cá mún, cá kiếm.</li>
            <li><strong>Bể nuôi &amp; Vị trí đặt:</strong> Chọn bể kính dạng hình hộp chữ nhật hoặc dạng trụ; đặt ở nơi chắc chắn, ánh sáng vừa phải, tránh ánh nắng chiếu trực tiếp gây rêu hại bùng phát và làm nóng nước.</li>
          </ul>
        `
      },
      {
        heading: "2. Quy trình chăm sóc và lưu ý bảo vệ môi trường",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Cho ăn:</strong> Cho ăn 1 &ndash; 2 lần/ngày với lượng thức ăn vừa đủ; sau 5 phút nếu còn thừa phải vớt ra ngay tránh làm thối nước.</li>
            <li><strong>Thay nước:</strong> Không thay 100% nước làm cá bị sốc nhiệt và ngạt clo; chỉ nên thay từ <strong>20 &ndash; 30%</strong> lượng nước mỗi tuần bằng nước đã lắng bay hết clo.</li>
            <li><strong>Trách nhiệm sinh thái:</strong> <em>Tuyệt đối không thả cá cảnh lai tạp hoặc cá ngoại lai xâm lấn (như cá lau kính, cá rùa tai đỏ) ra sông suối ao hồ tự nhiên</em> vì chúng có thể cạnh tranh tiêu diệt các loài bản địa.</li>
          </ul>
        `
      }
    ],
    application: "Lập một bảng kế hoạch nuôi 1 bể cá bảy màu hoặc cá chọi tại bàn học: Liệt kê chi phí mua bể mini, máy sục, thức ăn hạt và lịch thay nước định kì vào sáng Chủ nhật hằng tuần.",
    quizzes: [
      {
        q: "Khi tiến hành thay nước cho bể cá cảnh tại nhà, tỉ lệ thay nước an toàn nhất mỗi lần là bao nhiêu?",
        opts: ["Thay khoảng 20–30% lượng nước trong bể", "Thay toàn bộ 100% nước", "Không bao giờ thay nước", "Đổ nước sôi vào khử trùng"],
        ans: 0,
        explain: "Thay 20–30% nước giúp làm sạch nước mà không làm thay đổi đột ngột nhiệt độ và hệ vi sinh trong bể, tránh làm cá bị sốc chết."
      },
      {
        q: "Vì sao tuyệt đối KHÔNG được thả các loài cá cảnh ngoại lai ra ao hồ, sông ngòi tự nhiên?",
        opts: ["Vì chúng có thể trở thành loài xâm hại đe dọa sinh vật bản địa", "Vì cá cảnh sẽ biến thành cá khổng lồ", "Vì nước tự nhiên quá ngọt đối với cá", "Vì cá cảnh sẽ bơi mất"],
        ans: 0,
        explain: "Các loài cá cảnh ngoại lai xâm hại có thể cạnh tranh thức ăn, tiêu diệt sinh vật bản địa và phá vỡ cân bằng sinh thái."
      }
    ]
  },

  // ==================== ÔN TẬP TOÀN MÔN ====================
  {
    chapter: "Ôn tập toàn môn",
    chapterTag: "TỔNG KẾT",
    chapterColor: "bg-gradient-to-r from-emerald-600 to-blue-600",
    id: "on-tap-toan-mon",
    lessonNum: "Tổng kết",
    title: "Ôn tập toàn môn Công Nghệ Lớp 7",
    pages: "Tổng kết SGK KNTT",
    objective: "Hệ thống hóa toàn bộ kiến thức 4 Chương: Trồng trọt, Lâm nghiệp, Chăn nuôi, Thủy sản; rèn luyện checklist kĩ năng thực hành nông nghiệp bền vững.",
    mindmap: {
      nodes: [
        { title: "CHƯƠNG I & II", desc: "Trồng trọt (Làm đất, sâu bệnh, thu hoạch, giâm cành) & Lâm nghiệp (3 loại rừng)", color: "#059669" },
        { title: "CHƯƠNG III", desc: "Chăn nuôi (Vật nuôi bản địa, úm gà, vaccine, dự toán chi phí)", color: "#d97706" },
        { title: "CHƯƠNG IV", desc: "Thủy sản (Loài giá trị cao, cải tạo ao, đo đĩa Secchi, nuôi cá cảnh)", color: "#2563eb" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA ÔN TẬP: MA TRẬN 4 CHƯƠNG -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-graduation-cap"></i> Hình Tổng Kết: Ma Trận Kiến Thức Toàn Diện 4 Chương Môn Công Nghệ 7
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; GDPT 2018</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
          <div class="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40">
            <span class="font-bold text-emerald-400 block mb-1">CHƯƠNG I: TRỒNG TRỌT</span>
            <p class="text-slate-300 text-[11px]">&bull; Cấu tạo đất 3 phần<br>&bull; Cày bừa lên luống, bón lót<br>&bull; 5 biện pháp phòng trừ sâu bệnh<br>&bull; Giâm cành 5 bước &bull; Dự án rau</p>
          </div>
          <div class="p-3 rounded-lg bg-teal-950/60 border border-teal-500/40">
            <span class="font-bold text-teal-400 block mb-1">CHƯƠNG II: LÂM NGHIỆP</span>
            <p class="text-slate-300 text-[11px]">&bull; 3 Loại rừng: Phòng hộ, Sản xuất, Đặc dụng<br>&bull; Quy trình trồng cây con có bầu<br>&bull; Phòng cháy &amp; bảo vệ rừng</p>
          </div>
          <div class="p-3 rounded-lg bg-amber-950/60 border border-amber-500/40">
            <span class="font-bold text-amber-400 block mb-1">CHƯƠNG III: CHĂN NUÔI</span>
            <p class="text-slate-300 text-[11px]">&bull; Giống đặc sản &bull; Biogas<br>&bull; Chăm sóc vật nuôi non (sữa đầu)<br>&bull; Úm gà con &amp; Nguyên tắc Ba sạch<br>&bull; Kế hoạch nuôi thú cưng</p>
          </div>
          <div class="p-3 rounded-lg bg-blue-950/60 border border-blue-500/40">
            <span class="font-bold text-blue-400 block mb-1">CHƯƠNG IV: THỦY SẢN</span>
            <p class="text-slate-300 text-[11px]">&bull; Loài kinh tế xuất khẩu tỉ USD<br>&bull; Cải tạo ao (vôi bột 7–10kg/100m²)<br>&bull; Đo đĩa Secchi 20–30cm, nhiệt 25–28°C<br>&bull; Kế hoạch nuôi cá cảnh</p>
          </div>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Tổng kết toàn diện 4 Chương kiến thức",
        content: `
          <ul class="list-disc pl-5 space-y-1.5 text-xs">
            <li><strong>Chương I &ndash; Trồng trọt:</strong> Nắm vững chu trình sản xuất từ làm đất, bón phân lót, gieo trồng, chăm sóc phòng trừ sâu bệnh theo nguyên tắc 4 đúng, thu hoạch, bảo quản đến kĩ thuật nhân giống vô tính (giâm cành bánh tẻ) và dự án rau an toàn.</li>
            <li><strong>Chương II &ndash; Lâm nghiệp:</strong> Phân biệt chính xác chức năng của 3 loại rừng (phòng hộ, sản xuất, đặc dụng) và các bước trồng rừng bằng cây con có bầu bảo đảm tỉ lệ sống cao.</li>
            <li><strong>Chương III &ndash; Chăn nuôi:</strong> Hiểu rõ vai trò của vật nuôi bản địa, công nghệ xử lí chất thải Biogas, nuôi dưỡng con non bằng sữa đầu, quy trình úm gà thịt ba sạch và lập dự toán chi phí nuôi thú cưng.</li>
            <li><strong>Chương IV &ndash; Thủy sản:</strong> Nắm vững quy trình cải tạo ao nuôi cá, các thông số môi trường nước (nhiệt độ 25&ndash;28°C, đĩa Secchi 20&ndash;30cm) và cách vận hành một bể cá cảnh an toàn sinh thái.</li>
          </ul>
        `
      },
      {
        heading: "2. Checklist kĩ năng cốt lõi cần đạt",
        content: `
          <div class="p-3 rounded-lg bg-slate-800 border border-slate-700 text-xs space-y-1 text-slate-300">
            <p>&check; Giải thích được vai trò, phân nhóm và so sánh các phương thức sản xuất nông &ndash; lâm &ndash; thủy sản.</p>
            <p>&check; Nêu đúng mục đích và thực hiện chuẩn xác từng bước trong quy trình kĩ thuật.</p>
            <p>&check; Đọc và ghi số liệu đo đạc (nhiệt độ, đĩa Secchi); lập được bảng dự toán kinh phí và sổ nhật kí theo dõi.</p>
            <p>&check; Tuân thủ nghiêm ngặt các quy định an toàn lao động: Không tự ý pha thuốc hóa học, tiếp xúc chất độc hại hoặc xả thải bừa bãi ra môi trường.</p>
          </div>
        `
      }
    ],
    application: "Tự kiểm tra và củng cố toàn bộ kiến thức qua Đấu trường Trạng Nguyên Công Nghệ 7 (60:00) với 40 câu hỏi trắc nghiệm bao quát toàn bộ chương trình học.",
    quizzes: [
      {
        q: "Mục đích quan trọng nhất của việc học tập môn Công Nghệ 7 là gì?",
        opts: ["Nắm vững kiến thức, kĩ năng thực hành nông - lâm - thủy sản an toàn và bảo vệ môi trường", "Chỉ học thuộc lòng các định nghĩa để đi thi", "Để trở thành thợ sửa chữa đồ điện tử gia dụng", "Để tự do sử dụng các loại thuốc bảo vệ thực vật"],
        ans: 0,
        explain: "Công nghệ 7 trang bị kiến thức và năng lực thực hành sản xuất nông - lâm - thủy sản an toàn, hiệu quả và bền vững."
      },
      {
        q: "Trong các hoạt động thực hành nông nghiệp, nguyên tắc an toàn hàng đầu đối với học sinh là gì?",
        opts: ["Luôn thực hành dưới sự hướng dẫn của giáo viên và không tự ý sử dụng hóa chất độc hại", "Làm càng nhanh càng tốt mà không cần găng tay", "Thử nếm thử các loại thuốc kích thích ra rễ", "Đổ nước rửa bình thuốc ra kênh mương"],
        ans: 0,
        explain: "Học sinh phải tuân thủ nghiêm ngặt hướng dẫn an toàn, tuyệt đối không tự ý tiếp xúc với hóa chất nguy hiểm."
      }
    ]
  }
];

module.exports = { lessonsDataP2 };
console.log("Loaded Chapter III, IV and Review lessons data. Total:", lessonsDataP2.length);
