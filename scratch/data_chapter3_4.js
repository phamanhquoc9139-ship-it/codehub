// CHƯƠNG III (Bài 7, 8, 9, 10) & CHƯƠNG IV (Bài 11, 12, 13, 14)

const chapters3_4 = [
  {
    chapterId: "chuong-3",
    chapterNumber: "Chương III",
    chapterTitle: "Phân bón",
    badge: "Bài 7 – Bài 10",
    themeColor: "rose",
    icon: "fa-solid fa-flask",
    lessons: [
      {
        id: "bai-7",
        number: "Bài 7",
        title: "Giới thiệu về phân bón",
        badge: "Phân loại & Đặc tính",
        icon: "fa-solid fa-vial",
        overview: "Phân bón cung cấp dinh dưỡng khoáng hoặc cải tạo độ phì của đất. Ba nhóm chính là phân hóa học, phân hữu cơ và phân vi sinh.",
        sections: [
          {
            title: "1. Ba nhóm phân bón chính trong nông nghiệp",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                  <strong class="text-blue-800 dark:text-blue-300 block mb-1">1. Phân hóa học (Vô cơ):</strong>
                  - Sản xuất theo quy trình công nghiệp; gồm phân đạm (N), lân (P), kali (K), phân hỗn hợp (NPK), vi lượng.<br>
                  - <em>Đặc điểm:</em> Tỉ lệ dinh dưỡng cao, phần lớn dễ tan trong nước (trừ phân lân khó tan), cây hấp thu nhanh tức thì.<br>
                  - <em>Thông số ví dụ SGK:</em> Phân đạm Urea chứa <strong>~46% N</strong>; Phân kali chloride (KCl) chứa <strong>~58–62% K₂O</strong>.<br>
                  - <em>Nhược điểm:</em> Lạm dụng hoặc bón mất cân đối kéo dài làm đất bị chua hóa, chai cứng, suy thoái hệ vi sinh vật và gây ô nhiễm nguồn nước ngầm.
                </div>
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <strong class="text-amber-800 dark:text-amber-300 block mb-1">2. Phân hữu cơ:</strong>
                  - Gồm phân chuồng, phân xanh, than bùn, phân rác và phụ phẩm nông nghiệp ủ hoai mục.<br>
                  - <em>Đặc điểm:</em> Chứa đầy đủ các nguyên tố đa, trung và vi lượng nhưng hàm lượng tỉ lệ mỗi chất thấp và không ổn định.<br>
                  - <em>Tác dụng:</em> Khoáng hóa chậm tạo dinh dưỡng tan dần; tăng cường độ mùn, cải tạo kết cấu đất tơi xốp, nâng cao dung tích hấp thu của đất về lâu dài.
                </div>
                <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">3. Phân vi sinh:</strong>
                  - Chế phẩm chứa một hoặc nhiều chủng vi sinh vật sống hữu ích (cố định nitrogen, chuyển hóa phosphate khó tan, phân giải chất hữu cơ cellulose).<br>
                  - <em>Đặc điểm:</em> Thân thiện tuyệt đối với môi trường; hiệu lực phụ thuộc vào độ ẩm của đất và sức sống vi sinh vật; thời hạn sử dụng có giới hạn.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Hàm lượng dinh dưỡng đạm nguyên chất (% N) có trong phân đạm Urea thông dụng là:",
            options: ["Khoảng 46% N", "Khoảng 16% N", "Khoảng 80% N", "Khoảng 10% N"],
            ans: 0,
            exp: "Phân đạm urea CO(NH2)2 có hàm lượng đạm cao nhất trong các loại phân đạm rắn hiện nay, đạt khoảng 46% N."
          },
          {
            q: "Ưu điểm bền vững nổi bật nhất của việc bón phân hữu cơ hoai mục cho đất trồng là:",
            options: ["Cải tạo độ tơi xốp, làm tăng hàm lượng mùn và kích thích hệ vi sinh vật đất", "Cung cấp dinh dưỡng nồng độ cực cao giúp cây lớn vọt sau 1 giờ", "Làm cho đất không bao giờ cần tưới nước nữa", "Tiêu diệt hoàn toàn mọi vi khuẩn trong đất"],
            ans: 0,
            exp: "Phân hữu cơ phân giải chậm tạo mùn kết dính hạt đất thành cấu trúc viên tơi xốp, tăng khả năng giữ nước và giữ phân bền vững."
          }
        ]
      },
      {
        id: "bai-8",
        number: "Bài 8",
        title: "Sử dụng và bảo quản phân bón",
        badge: "Kĩ thuật & Quy chuẩn",
        icon: "fa-solid fa-boxes-packing",
        overview: "Tuân thủ nguyên tắc '4 đúng' (đúng loại, đúng liều lượng, đúng thời điểm, đúng phương pháp) và áp dụng phương pháp bảo quản an toàn cho từng nhóm phân.",
        sections: [
          {
            title: "1. Nguyên tắc sử dụng phân bón",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">Bón lót (Trước khi gieo cấy):</strong>
                  - Áp dụng cho: <strong>Phân hữu cơ hoai mục</strong> và <strong>Phân lân</strong> (do lân khó tan cần thời gian phân giải trong đất).<br>
                  - Mục đích: Cung cấp dinh dưỡng nền tảng ban đầu ngay khi hạt nảy mầm hoặc cây con bén rễ.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">Bón thúc (Trong quá trình sinh trưởng):</strong>
                  - Áp dụng cho: <strong>Phân đạm</strong> và <strong>Phân kali</strong> (dễ tan, tác dụng tức thời); phân NPK chuyên dùng cho giai đoạn đẻ nhánh, ra hoa, nuôi quả.<br>
                  - Tránh bón khi trời nắng gắt hoặc mưa to (tránh bốc hơi và rửa trôi).
                </div>
              </div>
            `
          },
          {
            title: "2. Kĩ thuật bảo quản từng nhóm phân bón",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>Phân bón hóa học:</strong> Để nơi cao ráo, khô mát, thông thoáng; kê trên kệ gỗ cách mặt đất ít nhất 20 cm và cách tường; buộc kín miệng bao sau khi dùng dở. <em>Lưu ý an toàn:</em> Các loại phân chứa gốc nitrate (như NH₄NO₃, KNO₃) có nguy cơ gây cháy nổ khi gặp nhiệt độ cao, tuyệt đối tránh xa nguồn nhiệt và lửa.
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>Phân hữu cơ:</strong> Bảo quản tại hố ủ có mái che hoặc trát bùn kín. Ba phương pháp ủ chính:
                  <ul class="list-disc list-inside mt-1 space-y-0.5 text-slate-600 dark:text-slate-300">
                    <li><em>Ủ hiếu khí (ủ nóng):</em> Đống phân xốp, thoáng khí, nhiệt độ tăng cao <strong>60–70 °C</strong>, tiêu diệt nhanh hạt cỏ và mầm bệnh, phân giải nhanh.</li>
                    <li><em>Ủ kị khí (ủ nguội):</em> Nén chặt từng lớp, che kín thiếu oxy, nhiệt độ 20–35 °C, giữ đạm tốt hơn nhưng phân giải chậm.</li>
                    <li><em>Ủ nóng trước, ủ nguội sau:</em> Để đống xốp cho nhiệt tăng lên 60–70 °C trong vài ngày diệt khuẩn, sau đó nén chặt, giữ độ ẩm 60–70% để nhiệt hạ xuống 20–35 °C bảo toàn chất đạm.</li>
                  </ul>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>Phân vi sinh:</strong> Để nơi râm mát, tránh ánh nắng mặt trời trực tiếp chiếu vào làm chết vi sinh vật. Thời hạn bảo quản tham khảo: <strong>mùa hè khoảng 4 tháng, mùa đông khoảng 6 tháng</strong>.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Nhóm phân bón nào sau đây thường được ưu tiên dùng để bón lót trước khi gieo trồng?",
            options: ["Phân hữu cơ hoai mục và phân lân", "Phân đạm urea và phân kali chloride", "Phân vi lượng phun qua lá", "Chỉ bón thúc mà không bón lót"],
            ans: 0,
            exp: "Phân hữu cơ và phân lân có đặc điểm tan chậm, cần thời gian để vi sinh vật khoáng hóa nên phải bón lót sâu vào đất."
          },
          {
            q: "Khi bảo quản phân hóa học, loại phân nào sau đây cần đặc biệt tránh xa nguồn lửa do có nguy cơ gây nổ?",
            options: ["Các loại phân chứa gốc nitrate (ví dụ Ammonium nitrate)", "Phân lân nung chảy", "Vôi nông nghiệp", "Phân than bùn hữu cơ"],
            ans: 0,
            exp: "Gốc nitrate (NO3-) là chất oxy hóa mạnh, khi gặp nhiệt độ cao hoặc chất khử dễ gây cháy nổ dữ dội."
          }
        ]
      },
      {
        id: "bai-9",
        number: "Bài 9",
        title: "Ứng dụng công nghệ vi sinh trong sản xuất phân bón",
        badge: "Công nghệ sinh học",
        icon: "fa-solid fa-bacteria",
        overview: "Khai thác hoạt động chuyển hóa vật chất của vi sinh vật đặc hiệu: phân vi sinh cố định đạm, phân chuyển hóa lân khó tiêu và phân giải chất hữu cơ.",
        sections: [
          {
            title: "1. Ba nhóm phân bón vi sinh vật chủ đạo",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-emerald-600 block mb-1">Cố định đạm:</strong>
                  Chuyển N₂ tự do trong khí quyển thành NH₄⁺ cây hút được.<br>
                  - <em>Cộng sinh:</em> Vi khuẩn <strong>Rhizobium / Bradyrhizobium</strong> tạo nốt sần ở rễ cây họ Đậu.<br>
                  - <em>Hội sinh:</em> <strong>Azospirillum</strong> sống ở vùng rễ lúa, ngô.<br>
                  - <em>Tự do:</em> <strong>Azotobacter, Clostridium</strong> sống độc lập trong đất.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-teal-600 block mb-1">Chuyển hóa lân:</strong>
                  Tiết ra acid hữu cơ hòa tan các hợp chất phosphate vô cơ khó tan (quặng apatite, phosphorite) hoặc enzyme phosphatase phân giải phospho hữu cơ thành ion H₂PO₄⁻ dễ tiêu.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-cyan-600 block mb-1">Phân giải hữu cơ:</strong>
                  Chứa các chủng vi sinh vật (nấm <em>Trichoderma</em>, vi khuẩn <em>Bacillus</em>) tiết enzyme cellulase, protease phân giải nhanh tàn dư rơm rạ, xác bã thực vật thành mùn dinh dưỡng.
                </div>
              </div>
            `
          },
          {
            title: "2. Quy trình công nghiệp sản xuất phân bón vi sinh",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                <div><strong>Bước 1 - Tuyển chọn giống:</strong> Phân lập và thuần chủng các dòng vi sinh vật có hoạt tính sinh học cao, an toàn sinh học.</div>
                <div><strong>Bước 2 - Nhân sinh khối:</strong> Nuôi cấy vi sinh vật qua các cấp bình tam giác lên men trong nồi lên men công nghiệp đạt mật độ tế bào chuẩn ($\ge 10^8$ CFU/g).</div>
                <div><strong>Bước 3 - Chuẩn bị chất mang:</strong> Chất mang (than bùn, bột vỏ lạc, cám) được nghiền mịn, khử trùng để diệt tạp khuẩn.</div>
                <div><strong>Bước 4 - Phối trộn & Đóng gói:</strong> Trộn đều dịch vi sinh vào chất mang, bổ sung phụ gia dinh dưỡng bảo vệ tế bào, kiểm tra tiêu chuẩn chất lượng rồi đóng gói kín.</div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Chi vi khuẩn nào sau đây sống cộng sinh trong nốt sần rễ cây họ Đậu để cố định nitrogen từ không khí?",
            options: ["Rhizobium / Bradyrhizobium", "Escherichia coli", "Streptococcus", "Lactobacillus"],
            ans: 0,
            exp: "Rhizobium cộng sinh với rễ cây bộ Đậu (Fabaceae) hình thành nốt sần chứa enzyme nitrogenase khử N2 thành NH4+ nuôi cây."
          },
          {
            q: "Chất mang phổ biến và tối ưu nhất được sử dụng trong công nghệ sản xuất phân vi sinh là:",
            options: ["Than bùn được nghiền nhỏ và thanh trùng", "Cát thô xây dựng", "Đá vôi hạt to", "Xi măng trộn nước"],
            ans: 0,
            exp: "Than bùn xốp, giữ ẩm tốt, giàu hữu cơ và trơ hóa học, tạo môi trường bảo vệ tuyệt hảo cho các tế bào vi sinh vật sống trong thời gian bảo quản."
          }
        ]
      },
      {
        id: "bai-10",
        number: "Bài 10",
        title: "Thực hành: Nhận biết một số loại phân bón hoá học",
        badge: "Thí nghiệm hóa học nông nghiệp",
        icon: "fa-solid fa-vial-circle-check",
        overview: "Kĩ năng nhận biết phân đạm, phân lân và phân kali thông qua độ tan trong nước, phản ứng đốt nóng trên ngọn lửa và thử với các thuốc thử đặc trưng (diphenylamine, BaCl2, AgNO3).",
        sections: [
          {
            title: "1. Các bước phân biệt phân bón hóa học thông dụng",
            content: `
              <div class="space-y-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">Bước 1: Phân biệt bằng độ tan trong nước</strong>
                  - Cho mẫu phân vào ống nghiệm có nước cất, lắc mạnh.<br>
                  - <strong>Phân lân (Supephosphate, Lân nung chảy):</strong> Ít tan hoặc hoàn toàn không tan, để lại cặn lắng dày.<br>
                  - <strong>Phân đạm và Phân kali:</strong> Tan hoàn toàn trong nước tạo dung dịch trong suốt.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">Bước 2: Phân biệt bằng phản ứng gia nhiệt (Đốt trên ngọn lửa đèn cồn)</strong>
                  - Lấy một lượng nhỏ mẫu phân cho vào kẹp đốt trên ngọn lửa đèn cồn:<br>
                  - <em>Phân đạm (Urea, đạm muối):</em> Chảy lỏng, bốc khói trắng, có <strong>mùi khai hắc nồng nặc</strong> đặc trưng của khí ammonia ($NH_3$).<br>
                  - <em>Phân kali (KCl):</em> Không bốc mùi khai, có tiếng <strong>nổ lép bép</strong> do tinh thể muối nứt vỡ và làm ngọn lửa có <strong>ánh màu tím nhạt</strong> đặc trưng của ion $K^+$.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-rose-600 block mb-1">Bước 3: Thử thuốc thử hóa học xác định chính xác gốc muối</strong>
                  - <strong>Diphenylamine:</strong> Tạo màu <em>xanh thẫm</em> khi gặp gốc nitrate ($NO_3^-$ trong Ammonium nitrate).<br>
                  - <strong>Dung dịch $BaCl_2$:</strong> Tạo <em>kết tủa trắng $BaSO_4$</em> không tan trong acid khi gặp phân chứa gốc sulfate ($SO_4^{2-}$ như $(NH_4)_2SO_4$ và $K_2SO_4$).<br>
                  - <strong>Dung dịch $AgNO_3$:</strong> Tạo <em>kết tủa trắng $AgCl$</em> khi gặp phân chứa gốc chloride ($Cl^-$ như $NH_4Cl$).
                </div>
              </div>
              <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs">
                <strong>An toàn thí nghiệm:</strong> Đeo kính bảo hộ; khi đun ống nghiệm hướng miệng ống ra nơi không có người; không ngửi khí trực tiếp ở cự li gần mà dùng tay phẩy nhẹ khí vào mũi; thu gom mẫu thừa vào bình thải quy định.
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Để phân biệt nhanh phân lân với phân đạm và phân kali bằng phương pháp vật lý đơn giản nhất, ta dựa vào:",
            options: ["Độ tan trong nước (Phân lân ít/không tan, phân đạm và kali tan hoàn toàn)", "Màu sắc hạt phân bón", "Trọng lượng hạt phân", "Hình dạng tinh thể bên ngoài"],
            ans: 0,
            exp: "Phân lân gốc phosphate rất khó tan trong nước nên để lại cặn bùn xám đục, trong khi đạm và kali tan rất nhanh tạo dung dịch trong suốt."
          },
          {
            q: "Khi đốt trên ngọn lửa đèn cồn, mẫu phân bón nào sau đây bốc khói trắng và tỏa ra mùi khai hắc đặc trưng?",
            options: ["Phân đạm (chứa gốc ammonium hoặc urea)", "Phân kali chloride (KCl)", "Phân lân nung chảy", "Đá vôi bột"],
            ans: 0,
            exp: "Nhiệt độ phân hủy hợp chất đạm giải phóng khí ammonia (NH3) có mùi khai nồng đặc trưng."
          }
        ]
      }
    ]
  },
  {
    chapterId: "chuong-4",
    chapterNumber: "Chương IV",
    chapterTitle: "Công nghệ giống cây trồng",
    badge: "Bài 11 – Bài 14",
    themeColor: "purple",
    icon: "fa-solid fa-dna",
    lessons: [
      {
        id: "bai-11",
        number: "Bài 11",
        title: "Khái niệm và vai trò của giống cây trồng",
        badge: "Khái niệm & Giá trị canh tác",
        icon: "fa-solid fa-award",
        overview: "Giống cây trồng là một quần thể cây có đặc tính di truyền đồng nhất, ổn định và có giá trị kinh tế. Giống quy định tiềm năng năng suất, chất lượng và cơ cấu mùa vụ.",
        sections: [
          {
            title: "1. Định nghĩa và tiêu chuẩn của giống cây trồng",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                <strong>Giống cây trồng</strong> là một quần thể cây trồng đồng nhất về mặt hình thái và giá trị kinh tế, có thể phân biệt được với quần thể cây trồng khác cùng loài bằng ít nhất một đặc tính di truyền được; tương đối đồng nhất về hình thái và ổn định qua các chu kì nhân giống tiếp theo.
              </p>
              <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
                Giống cây bao gồm giống cây nông nghiệp (lúa, ngô), cây ăn quả, cây công nghiệp, cây dược liệu, cây cảnh và các loài nấm ăn.
              </div>
            `
          },
          {
            title: "2. Vai trò quyết định của giống cây trồng",
            content: `
              <ul class="list-disc list-inside space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li><strong>Quyết định năng suất và chất lượng:</strong> Giống cây là yếu tố sinh học giới hạn trần năng suất tối đa và các chỉ số phẩm chất nông sản (hàm lượng đường, tinh bột, hương thơm, mẫu mã).</li>
                <li><strong>Tăng cường khả năng chống chịu sinh học & phi sinh học:</strong> Giúp cây kháng sâu bệnh hại (rầy nâu, đạo ôn) và chịu đựng các điều kiện ngoại cảnh bất lợi (mặn, chua, phèn, hạn, ngập úng, rét).</li>
                <li><strong>Tăng vụ và chuyển đổi cơ cấu cây trồng:</strong> Các giống cây ngắn ngày (như lúa 90–100 ngày) giúp tăng từ 2 vụ lên 3 vụ/năm, luân canh thêm vụ đông, nâng cao hiệu quả sử dụng đất trồng.</li>
                <li><strong>Phù hợp vùng sinh thái:</strong> Mỗi giống thích nghi tối ưu với một tiểu vùng khí hậu nhất định; chọn giống tốt phải dựa trên điều kiện đất đai, nguồn nước thực tế tại địa phương chứ không chỉ nhìn vào năng suất lí thuyết.</li>
              </ul>
            `
          }
        ],
        quiz: [
          {
            q: "Tiêu chuẩn pháp lý khoa học để công nhận một quần thể thực vật là giống cây trồng bao gồm:",
            options: ["Phân biệt được, tính đồng nhất cao, tính ổn định di truyền qua các vụ và có giá trị canh tác/sử dụng", "Chỉ cần cây có hoa màu đỏ sặc sỡ", "Chỉ cần sinh trưởng nhanh mà không cần ổn định di truyền", "Cây được nhập khẩu từ nước ngoài mà không cần khảo nghiệm"],
            ans: 0,
            exp: "Theo luật Trồng trọt và SGK, giống cây phải đạt tiêu chí DUS (Distinctness - Tính khác biệt, Uniformity - Tính đồng nhất, Stability - Tính ổn định) và VCU (Giá trị canh tác và sử dụng)."
          },
          {
            q: "Ý nghĩa to lớn nhất của việc phát triển các giống cây trồng ngắn ngày trong nông nghiệp là:",
            options: ["Tăng hệ số sử dụng đất, tăng vụ mùa và né tránh thiên tai bất lợi", "Làm cho cây không bao giờ bị sâu bọ tấn công", "Giúp cây không cần ánh sáng vẫn quang hợp được", "Không cần bón phân cây vẫn cho quả to"],
            ans: 0,
            exp: "Giống ngắn ngày rút ngắn thời gian chiếm đất, cho phép gieo trồng thêm vụ thứ 3 trong năm và thu hoạch trước mùa lũ bão."
          }
        ]
      },
      {
        id: "bai-12",
        number: "Bài 12",
        title: "Một số phương pháp chọn, tạo giống cây trồng",
        badge: "Chọn tạo giống",
        icon: "fa-solid fa-code-branch",
        overview: "Phương pháp chọn giống (chọn lọc hỗn hợp, chọn lọc cá thể) và các phương pháp tạo giống tiên tiến (lai tạo thuần chủng, ưu thế lai, đột biến nhân tạo và công nghệ chuyển gene).",
        sections: [
          {
            title: "1. Phương pháp chọn giống truyền thống",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1">Chọn lọc hỗn hợp:</strong>
                  Chọn nhiều cây tốt theo kiểu hình trong quần thể $\\rightarrow$ Thu hoạch trộn chung hạt $\\rightarrow$ Vụ sau gieo đánh giá lại.<br>
                  - <em>Đặc điểm:</em> Đơn giản, dễ làm, ít tốn kém; nhưng không kiểm tra được kiểu gene từng cá thể nên hiệu quả chọn lọc tương đối chậm.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1">Chọn lọc cá thể:</strong>
                  Chọn riêng từng cây ưu tú $\\rightarrow$ Thu hạt riêng rẽ $\\rightarrow$ Gieo thành từng dòng con cháu riêng để so sánh với giống gốc và đối chứng.<br>
                  - <em>Đặc điểm:</em> Nhanh tạo ra giống đồng đều, ổn định cao; đòi hỏi công phu, diện tích khảo nghiệm và chi phí lớn hơn.
                </div>
              </div>
            `
          },
          {
            title: "2. Bốn phương pháp tạo giống cây trồng hiện đại",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>1. Lai hữu tính tạo giống thuần chủng:</strong> Chọn cặp bố mẹ mang đặc tính bổ sung $\\rightarrow$ Khử đực hoa mẹ, thụ phấn nhân tạo $\\rightarrow$ Thu hạt lai $F_1$, gieo chọn các cây tốt $\\rightarrow$ Tự thụ phấn bắt buộc qua nhiều thế hệ ($F_6 - F_8$) để tạo dòng thuần $\\rightarrow$ Khảo nghiệm. <em>Ví dụ SGK:</em> Giống lúa thuần PC8, OM 5451, LTh31.
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>2. Tạo giống ưu thế lai ($F_1$):</strong> Lai giữa các dòng thuần khác nhau để thế hệ lai $F_1$ vượt trội bố mẹ về năng suất, sức sống và chống chịu. Hạt $F_1$ chỉ dùng để gieo trồng thu hoạch sản phẩm, không dùng làm giống cho vụ sau vì phân li di truyền.
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>3. Gây đột biến nhân tạo:</strong> Dùng tác nhân vật lí (tia gamma, tia X, neutron) hoặc hóa học (EMS, colchicine) tác động lên hạt/chồi làm biến đổi vật chất di truyền $\\rightarrow$ Chọn lọc kiểu hình đột biến có lợi. <em>Ví dụ SGK:</em> Táo má hồng đào, giống lạc LDH.10, đậu tương DT84.
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700">
                  <strong>4. Công nghệ chuyển gene (GMO):</strong> Chuyển đoạn gene mong muốn từ loài khác vào bộ máy di truyền của cây nhận. <em>Quy trình:</em> Phân lập gene mục tiêu $\\rightarrow$ Gắn vào vector chuyển (thường dùng vi khuẩn <em>Agrobacterium tumefaciens</em>) $\\rightarrow$ Chuyển gene vào mô tế bào $\\rightarrow$ Tái sinh cây chuyển gene hoàn chỉnh. <em>Ví dụ SGK:</em> Lúa vàng Golden Rice (giàu beta-carotene tiền vitamin A), ngô chuyển gene Bt kháng sâu đục thân, đậu tương kháng thuốc trừ cỏ glyphosate.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Tại sao hạt giống của các giống cây ưu thế lai F1 không được dùng để tiếp tục gieo làm hạt giống cho vụ sau?",
            options: ["Vì thế hệ F2 sẽ xảy ra hiện tượng phân ly di truyền làm giảm sút năng suất và độ đồng đều", "Vì hạt F1 hoàn toàn không có khả năng nảy mầm", "Vì hạt giống F1 có chứa độc tố", "Vì cây F2 sẽ biến thành loài cây dại"],
            ans: 0,
            exp: "Ưu thế lai đạt đỉnh cao nhất ở thế hệ F1 mang kiểu gene dị hợp tử. Khi để F1 tự thụ phấn, thế hệ F2 sẽ phân ly tạo các kiểu gene đồng hợp lặn, khiến năng suất thoái hóa."
          },
          {
            q: "Giống lúa vàng 'Golden Rice' là thành tựu nổi tiếng thế giới của phương pháp tạo giống nào?",
            options: ["Công nghệ chuyển gene (tổng hợp tiền chất vitamin A)", "Gây đột biến bằng tia phóng xạ", "Chọn lọc cá thể truyền thống", "Ghép cành"],
            ans: 0,
            exp: "Lúa vàng được chuyển gene tổng hợp beta-carotene (tiền chất vitamin A) vào nội nhũ hạt gạo giúp phòng ngừa bệnh mù lòa ở trẻ em."
          }
        ]
      },
      {
        id: "bai-13",
        number: "Bài 13",
        title: "Nhân giống cây trồng",
        badge: "Hữu tính & Vô tính",
        icon: "fa-solid fa-diagram-project",
        overview: "Hệ thống cấp giống cây trồng và các phương pháp nhân giống hữu tính (bằng hạt) cùng các kĩ thuật nhân giống vô tính (giâm cành, chiết cành, ghép cành và nuôi cấy mô tế bào).",
        sections: [
          {
            title: "1. Hệ thống sản xuất các cấp giống cây trồng",
            content: `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Quy trình nhân giống duy trì độ thuần khiết theo sơ đồ 4 cấp giống nghiêm ngặt:
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-between gap-2 p-3 bg-purple-50 dark:bg-purple-950/40 rounded-2xl border border-purple-200 dark:border-purple-800 text-xs font-bold text-center">
                <span class="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-purple-700 dark:text-purple-300">Hạt giống Tác giả (Breeder seed)</span>
                <i class="fa-solid fa-arrow-right text-purple-400 hidden sm:inline"></i>
                <span class="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-purple-700 dark:text-purple-300">Giống Siêu nguyên chủng (Pre-basic)</span>
                <i class="fa-solid fa-arrow-right text-purple-400 hidden sm:inline"></i>
                <span class="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-purple-700 dark:text-purple-300">Giống Nguyên chủng (Basic)</span>
                <i class="fa-solid fa-arrow-right text-purple-400 hidden sm:inline"></i>
                <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-sm">Giống Xác nhận (Certified - Thương mại)</span>
              </div>
              <p class="text-xs text-slate-500 mt-2">Giống Xác nhận là cấp giống cuối cùng đạt chuẩn độ thuần và tỉ lệ nảy mầm để cung ứng rộng rãi cho nông dân sản xuất đại trà.</p>
            `
          },
          {
            title: "2. Các phương pháp nhân giống vô tính",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1">1. Giâm cành:</strong>
                  Cắt đoạn cành bánh tẻ (đủ mắt ngủ, không quá non hay già), nhúng chất điều hòa sinh trưởng kích rễ (IBA/NAA) rồi cắm vào giá thể ẩm. Dễ làm, hệ số nhân khá cao; bộ rễ chùm ăn nông hơn cây ươm từ hạt.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1">2. Chiết cành:</strong>
                  Khoanh tách lớp vỏ trên cành khỏe, cạo sạch tầng sinh mô $\\rightarrow$ Bôi thuốc kích rễ $\\rightarrow$ Bó bầu bằng giá thể ẩm (rễ bèo tây + đất mùn) $\\rightarrow$ Bọc nilon kín. Cây con giữ nguyên vẹn đặc tính cây mẹ, nhanh ra quả; nhưng hệ số nhân thấp, tốn công.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1">3. Ghép cây (Cành/Chồi):</strong>
                  Gắn cành hoặc mắt ghép của cây cần nhân lên gốc ghép của cây cùng loài có bộ rễ khỏe, chịu hạn/mặn tốt $\\rightarrow$ Kết hợp ưu điểm của cả hai cá thể.
                </div>
                <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 block mb-1">4. Nuôi cấy mô tế bào (In vitro):</strong>
                  Khử trùng đỉnh sinh trưởng $\\rightarrow$ Cấy vào môi trường thạch dinh dưỡng tạo mô sẹo (Callus) $\\rightarrow$ Tái sinh chồi $\\rightarrow$ Kích rễ tạo cây con $\\rightarrow$ Ra vườn ươm. Hệ số nhân cực lớn (hàng triệu cây/năm), sạch virus bệnh, đồng đều tuyệt đối.
                </div>
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Thứ tự đúng của hệ thống sản xuất các cấp giống cây trồng trong nông nghiệp là:",
            options: ["Hạt tác giả -> Hạt siêu nguyên chủng -> Hạt nguyên chủng -> Hạt xác nhận", "Hạt xác nhận -> Hạt nguyên chủng -> Hạt tác giả", "Hạt thương phẩm -> Hạt siêu nguyên chủng -> Hạt giống F1", "Hạt nguyên chủng -> Hạt tác giả -> Hạt xác nhận"],
            ans: 0,
            exp: "Quy chuẩn sản xuất hạt giống quốc gia đi từ hạt tác giả của viện nghiên cứu, nhân lên siêu nguyên chủng, nguyên chủng và cuối cùng là hạt xác nhận bán cho nông dân."
          },
          {
            q: "Ưu điểm vượt trội nhất của phương pháp nhân giống bằng nuôi cấy mô tế bào (Micropropagation) là:",
            options: ["Tạo ra số lượng cây giống khổng lồ quanh năm, đồng nhất di truyền và sạch bệnh virus", "Không tốn chi phí phòng thí nghiệm", "Ai cũng có thể làm được ở ngoài đồng mà không cần kĩ thuật", "Làm cho cây biến đổi thành loài thực vật khác"],
            ans: 0,
            exp: "Nuôi cấy mô tế bào trong điều kiện vô trùng tạo ra hàng triệu cây con sạch virus từ một mẩu mô nhỏ trong thời gian ngắn."
          }
        ]
      },
      {
        id: "bai-14",
        number: "Bài 14",
        title: "Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép",
        badge: "Kĩ năng thực hành",
        icon: "fa-solid fa-scissors",
        overview: "Quy trình thực hành thao tác kĩ thuật ghép đoạn cành và ghép mắt chữ T trên cây ăn quả thân gỗ, đảm bảo vết ghép liền mô đạt tỉ lệ sống trên 90%.",
        sections: [
          {
            title: "1. Kĩ thuật ghép đoạn cành",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Bước 1 - Chuẩn bị cành ghép:</strong> Chọn cành bánh tẻ có đường kính tương đương gốc ghép, có 2–3 mầm ngủ khỏe; cắt bỏ phiến lá; dùng dao ghép sắc vát một nhát dứt khoát dài khoảng <strong>1,5–2 cm</strong>.</div>
                <div><strong>Bước 2 - Chuẩn bị gốc ghép:</strong> Cắt ngọn gốc ghép cách mặt đất <strong>10–15 cm</strong>, gọt sạch vết cắt, chẻ dọc một đường có độ sâu bằng độ dài vết vát cành ghép.</div>
                <div><strong>Bước 3 - Ghép và cố định:</strong> Đặt cành ghép vào gốc sao for tầng sinh mô (tầng phát sinh libe-gỗ) của cành ghép áp khít vào tầng sinh mô của gốc ghép ít nhất một phía; dùng dây nilon chuyên dụng quấn chặt từ dưới lên trên, trùm kín vết ghép và đỉnh cành ghép để chống mất nước.</div>
                <div><strong>Bước 4 - Kiểm tra:</strong> Sau <strong>30–35 ngày</strong>, kiểm tra; nếu cành ghép vẫn xanh tươi và nhú mầm mới là ghép thành công.</div>
              </div>
            `
          },
          {
            title: "2. Kĩ thuật ghép mắt chữ T",
            content: `
              <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 mb-4">
                <div><strong>Bước 1 - Mở vỏ gốc ghép:</strong> Chọn vị trí thân nhẵn cách mặt đất <strong>15–20 cm</strong>; dùng mũi dao rạch một đường ngang 1 cm, sau đó rạch một đường dọc 2 cm tạo thành hình chữ T; dùng mũi dao khẽ cạy hai mép vỏ sang hai bên.</div>
                <div><strong>Bước 2 - Cắt mắt ghép:</strong> Cắt mắt ghép hình thoi dài <strong>1,5–2 cm</strong> có mầm ngủ ở giữa và một mẩu cuống lá.</div>
                <div><strong>Bước 3 - Cài mắt ghép:</strong> Luồn mắt ghép vào trong khe chữ T sao cho cuống lá nằm đúng vị trí; dùng dây nilon quấn chặt từ dưới lên, chừa mầm ngủ và cuống lá hở ra ngoài.</div>
                <div><strong>Bước 4 - Tháo dây & Cắt ngọn gốc:</strong> Sau <strong>15–20 ngày</strong> kiểm tra, nếu cuống lá rụng để lại vết sẹo xanh tươi là mắt ghép đã sống; sau 7–10 ngày tiếp theo tháo dây buộc, dùng kéo cắt bỏ ngọn gốc ghép phía trên mắt ghép 1,5–2 cm để tập trung dinh dưỡng nuôi chồi ghép.</div>
              </div>
              <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
                <strong>An toàn thao tác dao ghép:</strong> Dao ghép chuyên dụng rất sắc bén; luôn hướng lưỡi dao ra phía xa thân mình khi gọt vát; tuyệt đối không để ngón tay cái chặn trước đường đi của lưỡi dao.
              </div>
            `
          }
        ],
        quiz: [
          {
            q: "Yếu tố kĩ thuật mang tính quyết định sống còn để cành ghép hoặc mắt ghép liền mô với gốc ghép là:",
            options: ["Tầng sinh mô (tầng phát sinh vỏ - gỗ) của cành ghép và gốc ghép phải áp khít vào nhau", "Buộc thật lỏng lẻo để gió lọt vào", "Tưới thật nhiều nước trực tiếp vào vết cắt", "Để hở vết ghép dưới trời mưa"],
            ans: 0,
            exp: "Tầng sinh mô là nơi các tế bào phân chia tích cực để hình thành mô sẹo (callus) hàn gắn các mạch dẫn libe và gỗ giữa cành ghép và gốc ghép."
          },
          {
            q: "Khi ghép mắt chữ T trên cây ăn quả, sau khoảng bao nhiêu ngày ta kiểm tra và thấy cuống lá rụng để lại mầm xanh là ghép thành công?",
            options: ["Khoảng 15 – 20 ngày", "Khoảng 1 – 2 ngày", "Khoảng 6 – 12 tháng", "Khoảng 3 – 5 giờ"],
            ans: 0,
            exp: "Sau 15 - 20 ngày, các mạch dẫn đã kết nối; nếu mầm xanh và cuống lá vàng rụng tự nhiên chứng tỏ mắt ghép đã sống khỏe."
          }
        ]
      }
    ]
  }
];

module.exports = { chapters3_4 };
