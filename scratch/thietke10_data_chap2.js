// Dữ liệu CHƯƠNG II. VẼ KĨ THUẬT (Bài 8 – Bài 16)
// SGK Công nghệ 10: Thiết kế và Công nghệ – Bộ Kết nối tri thức với cuộc sống

const chapter2 = {
  chapterId: "chuong-2",
  chapterNumber: "Chương II",
  chapterTitle: "Vẽ kĩ thuật",
  badge: "Bài 8 – Bài 16",
  themeColor: "blue",
  icon: "fa-solid fa-compass-drafting",
  lessons: [
    {
      id: "bai-8",
      number: "Bài 8",
      title: "Bản vẽ kĩ thuật và tiêu chuẩn trình bày",
      badge: "Tiêu chuẩn TCVN & ISO",
      icon: "fa-solid fa-file-pen",
      overview: "Bản vẽ kĩ thuật là 'ngôn ngữ của kĩ thuật' tuân thủ nghiêm ngặt các tiêu chuẩn quốc gia TCVN và quốc tế ISO về khổ giấy, nét vẽ, tỉ lệ, chữ viết và quy ước ghi kích thước.",
      sections: [
        {
          title: "1. Khổ giấy, khung vẽ và khung tên",
          content: `
            <div class="space-y-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Các khổ giấy chính (TCVN 7285:2003):</strong>
                Gồm 5 khổ giấy chuẩn: <strong>A0 (1189 × 841 mm)</strong>, A1 (841 × 594 mm), A2 (594 × 420 mm), A3 (420 × 297 mm), A4 (297 × 210 mm). Mỗi khổ giấy kế tiếp được tạo thành bằng cách chia đôi khổ giấy liền trước theo chiều dài.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Khung vẽ và Khung tên:</strong>
                - <em>Khung vẽ:</em> Vẽ bằng nét liền đậm, cách mép giấy 10 mm (riêng mép trái cách 20 mm để đóng tập).<br>
                - <em>Khung tên:</em> Bắt buộc đặt ở <strong>góc phải phía dưới</strong> của bản vẽ; thể hiện: tên gọi chi tiết/công trình, vật liệu, tỉ lệ, tên người vẽ, ngày vẽ, người kiểm tra, tên trường/lớp hoặc cơ quan thiết kế.
              </div>
            </div>
          `
        },
        {
          title: "2. Tỉ lệ, Nét vẽ, Chữ viết và Quy ước ghi kích thước",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Tỉ lệ (Scale):</strong>
                <strong>Tỉ lệ</strong> = (Kích thước đo trên hình vẽ) / (Kích thước thật tương ứng trên vật thể).<br>
                - Tỉ lệ nguyên hình: 1:1.<br>
                - Tỉ lệ thu nhỏ: 1:2, 1:5, 1:10...<br>
                - Tỉ lệ phóng to: 2:1, 5:1, 10:1...<br>
                <em>Quy tắc vàng:</em> <strong>Con số kích thước ghi trên bản vẽ luôn luôn là kích thước thực của vật thể</strong>, không phụ thuộc vào tỉ lệ bản vẽ thu nhỏ hay phóng to.
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Năm loại nét vẽ tiêu chuẩn (TCVN 8-24:2002):</strong>
                - <strong>Nét liền đậm:</strong> Đường bao thấy, cạnh thấy.<br>
                - <strong>Nét liền mảnh:</strong> Đường kích thước, đường gióng, đường gạch mặt cắt (bề rộng bằng 1/2 nét đậm).<br>
                - <strong>Nét đứt mảnh:</strong> Đường bao khuất, cạnh khuất.<br>
                - <strong>Nét gạch chấm mảnh:</strong> Đường tâm, trục đối xứng.<br>
                - <strong>Nét lượn sóng mảnh:</strong> Đường giới hạn một phần hình cắt cục bộ.
              </div>
            </div>
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
              <strong>Quy ước ghi kích thước:</strong> Kích thước dài dùng đơn vị <strong>milimét (mm)</strong> nhưng không cần ghi đơn vị sau con số; kích thước góc ghi độ, phút, giây; đường gióng kích thước vẽ vượt quá đầu mũi tên kích thước từ <strong>2 đến 4 mm</strong>; trước con số kích thước đường kính ghi kí hiệu <strong>Ø</strong>, bán kính ghi <strong>R</strong>.
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Khi vẽ một chi tiết cơ khí theo tỉ lệ thu nhỏ 1:2, con số kích thước ghi trên bản vẽ phải là:",
          options: ["Kích thước thật của vật thể (không nhân chia theo tỉ lệ)", "Kích thước đã giảm đi 2 lần", "Kích thước tăng gấp đôi", "Con số tùy ý người vẽ"],
          ans: 0,
          exp: "Quy chuẩn vẽ kĩ thuật bắt buộc con số kích thước trên bản vẽ luôn thể hiện kích thước thật của chi tiết chế tạo, không nhân chia theo tỉ lệ hình vẽ."
        },
        {
          q: "Loại nét vẽ nào sau đây được quy ước để biểu diễn đường bao thấy và cạnh thấy của vật thể?",
          options: ["Nét liền đậm", "Nét đứt mảnh", "Nét gạch chấm mảnh", "Nét lượn sóng mảnh"],
          ans: 0,
          exp: "Nét liền đậm (bề rộng khoảng 0,5 - 0,7 mm) chuyên dùng để vẽ đường bao ngoài nhìn thấy của vật thể."
        }
      ]
    },
    {
      id: "bai-9",
      number: "Bài 9",
      title: "Hình chiếu vuông góc",
      badge: "PPCG1 & PPCG3",
      icon: "fa-solid fa-cube",
      overview: "Phương pháp chiếu góc thứ nhất (PPCG1) và phương pháp chiếu góc thứ ba (PPCG3). Mối quan hệ gióng hàng hình học giữa 3 hình chiếu cơ bản: hình chiếu đứng, bằng và cạnh.",
      sections: [
        {
          title: "1. Phương pháp chiếu góc thứ nhất (PPCG1 - Tiêu chuẩn Việt Nam)",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Vật thể được đặt trong góc phần tư thứ nhất, nằm <strong>ở giữa người quan sát và các mặt phẳng hình chiếu</strong>:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Hình chiếu đứng (Front view):</strong>
                Chiếu từ trước tới lên mặt phẳng hình chiếu đứng. Thể hiện chiều dài và chiều cao của vật thể.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Hình chiếu bằng (Top view):</strong>
                Chiếu từ trên xuống lên mặt phẳng hình chiếu bằng; mở xoay xuống dưới 90°. <strong>Nằm ở ngay phía dưới hình chiếu đứng</strong>. Thể hiện chiều dài và chiều rộng.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Hình chiếu cạnh (Left view):</strong>
                Chiếu từ trái sang lên mặt phẳng hình chiếu cạnh; mở xoay sang phải 90°. <strong>Nằm ở ngay bên phải hình chiếu đứng</strong>. Thể hiện chiều rộng và chiều cao.
              </div>
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs">
              <strong>Mối quan hệ gióng hàng hình học bắt buộc:</strong>
              <ul class="list-disc list-inside mt-1 space-y-0.5 text-slate-600 dark:text-slate-300">
                <li>Hình chiếu đứng và hình chiếu bằng có <strong>cùng chiều dài</strong> (đường gióng thẳng đứng).</li>
                <li>Hình chiếu đứng và hình chiếu cạnh có <strong>cùng chiều cao</strong> (đường gióng nằm ngang).</li>
                <li>Hình chiếu bằng và hình chiếu cạnh có <strong>cùng chiều rộng</strong> (liên hệ qua góc 45°).</li>
              </ul>
            </div>
          `
        },
        {
          title: "2. Trình tự 4 bước vẽ ba hình chiếu vuông góc",
          content: `
            <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
              <div><strong>Bước 1 - Phân tích vật thể:</strong> Chia vật thể phức tạp thành các khối hình học cơ bản (khối hộp chữ nhật, hình trụ, chóp cụt), chọn hướng chiếu chính diện chứa nhiều đặc trưng nhất làm hướng chiếu đứng.</div>
              <div><strong>Bước 2 - Vẽ bao hình hộp:</strong> Vẽ bao hình chữ nhật bao quanh ba hình chiếu bằng nét liền mảnh theo đúng mối tương quan gióng hàng dài – rộng – cao.</div>
              <div><strong>Bước 3 - Vẽ chi tiết bộ phận:</strong> Dựng các đường rãnh, gờ lồi, lỗ thủng, mặt nghiêng liên hệ đồng thời trên cả ba hình chiếu.</div>
              <div><strong>Bước 4 - Hoàn thiện nét vẽ &amp; Ghi kích thước:</strong> Tẩy các nét dựng thừa; tô đậm các cạnh thấy (nét liền đậm), vẽ cạnh khuất (nét đứt mảnh), vẽ đường tâm trục (nét gạch chấm mảnh); ghi đầy đủ các kích thước theo tiêu chuẩn.</div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Trong phương pháp chiếu góc thứ nhất (PPCG1), vị trí bố trí chuẩn của hình chiếu bằng và hình chiếu cạnh so với hình chiếu đứng là:",
          options: ["Hình chiếu bằng ở dưới hình chiếu đứng; hình chiếu cạnh (nhìn từ trái) ở bên phải hình chiếu đứng", "Hình chiếu bằng ở trên; hình chiếu cạnh ở bên trái", "Cả ba hình chiếu đặt chồng lên nhau", "Hình chiếu cạnh ở dưới; hình chiếu bằng ở bên phải"],
          ans: 0,
          exp: "Theo PPCG1 tiêu chuẩn TCVN: Chiếu từ trên đặt ở dưới (hình chiếu bằng), chiếu từ trái đặt ở bên phải (hình chiếu cạnh)."
        },
        {
          q: "Mối liên hệ gióng hàng hình học nào sau đây giữa hai hình chiếu là luôn luôn đúng?",
          options: ["Hình chiếu đứng và hình chiếu bằng có cùng chiều dài", "Hình chiếu đứng và hình chiếu cạnh có cùng chiều rộng", "Hình chiếu bằng và hình chiếu cạnh có cùng chiều cao", "Cả ba hình chiếu luôn có diện tích bằng nhau"],
          ans: 0,
          exp: "Hình chiếu đứng và hình chiếu bằng cùng phản ánh chiều dài vật thể theo phương ngang nên luôn gióng thẳng đứng với nhau."
        }
      ]
    },
    {
      id: "bai-10",
      number: "Bài 10",
      title: "Hình cắt và mặt cắt",
      badge: "Biểu diễn cấu tạo bên trong",
      icon: "fa-solid fa-shapes",
      overview: "Hình cắt và mặt cắt giúp thể hiện rõ nét cấu trúc rỗng bên trong của chi tiết máy. Phân biệt mặt cắt (rời, chập) và hình cắt (toàn phần, bán phần, cục bộ).",
      sections: [
        {
          title: "1. Khái niệm Mặt cắt và Hình cắt",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Mặt cắt (Section):</strong>
                Chỉ biểu diễn phần vật thể <strong>nằm trực tiếp trên mặt phẳng cắt</strong> tưởng tượng. Phần kim loại bị cắt qua được gạch bằng nét liền mảnh nghiêng 45° so với đường bao.<br>
                - <em>Mặt cắt rời:</em> Vẽ ở ngoài hình chiếu, đường bao nét liền đậm.<br>
                - <em>Mặt cắt chập:</em> Vẽ trực tiếp ngay trên hình chiếu tương ứng, đường bao nét liền mảnh.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Hình cắt (Cutaway / Sectional view):</strong>
                Bao gồm <strong>mặt cắt</strong> và <strong>hình chiếu của phần vật thể còn lại</strong> nằm ở phía sau mặt phẳng cắt.<br>
                - <em>Hình cắt toàn bộ:</em> Dùng một mặt phẳng cắt bổ đôi toàn bộ vật thể.<br>
                - <em>Hình cắt bán phần:</em> Ghép một nửa hình chiếu với một nửa hình cắt (ngăn cách bởi trục đối xứng), dùng cho vật thể đối xứng.<br>
                - <em>Hình cắt cục bộ:</em> Chỉ cắt một phần nhỏ để thể hiện lỗ hoặc rãnh, ranh giới vẽ bằng <strong>nét lượn sóng mảnh</strong>.
              </div>
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs">
              <strong>Kí hiệu quy ước:</strong> Vị trí mặt phẳng cắt được đánh dấu bằng nét cắt (nét gạch chấm đậm ở hai đầu), có hai mũi tên vuông góc chỉ hướng nhìn của mắt và hai chữ cái in hoa đặt tên mặt cắt (ví dụ: A–A).
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Điểm khác biệt cốt lõi giữa 'Mặt cắt' và 'Hình cắt' trong vẽ kĩ thuật là:",
          options: ["Mặt cắt chỉ vẽ phần tiếp xúc trực tiếp với mặt phẳng cắt; còn Hình cắt vẽ cả mặt cắt lẫn hình chiếu phần vật thể còn lại phía sau", "Mặt cắt chỉ dùng cho đồ gỗ, còn hình cắt dùng cho kim loại", "Mặt cắt không được gạch gạch vật liệu", "Hình cắt không bao giờ có nét liền đậm"],
          ans: 0,
          exp: "Hình cắt bao quát hơn, bao gồm phần mặt cắt có gạch vật liệu cộng với toàn bộ các đường nét còn lại nhìn thấy sau khi đã bỏ phần phía trước."
        },
        {
          q: "Để biểu diễn một phần nhỏ cấu tạo bên trong của chi tiết (hình cắt cục bộ), đường ranh giới giữa phần hình cắt và phần hình chiếu được vẽ bằng nét gì?",
          options: ["Nét lượn sóng mảnh", "Nét đứt mảnh", "Nét liền đậm", "Nét gạch chấm đậm"],
          ans: 0,
          exp: "Theo tiêu chuẩn TCVN, đường ranh giới của hình cắt cục bộ luôn luôn được thể hiện bằng nét lượn sóng mảnh."
        }
      ]
    },
    {
      id: "bai-11",
      number: "Bài 11",
      title: "Hình chiếu trục đo",
      badge: "Hình biểu diễn 3D",
      icon: "fa-solid fa-dice-d6",
      overview: "Hình chiếu trục đo biểu diễn hình ảnh không gian ba chiều bằng phép chiếu song song. Nắm vững hai loại trục đo phổ biến: Hình chiếu trục đo vuông góc đều và Xiên góc cân.",
      sections: [
        {
          title: "1. Khái niệm và các thông số cơ bản",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Gắn hệ trục toạ độ vuông góc Oxyz lên ba chiều dài, rộng, cao của vật thể. Chiếu vật thể cùng hệ trục lên mặt phẳng chiếu theo phương chiếu <em>l</em> (không song song với trục nào):
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Góc trục đo:</strong>
                Góc giữa các trục hình chiếu <em>X'O'Y'</em>, <em>Y'O'Z'</em>, <em>X'O'Z'</em>.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Hệ số biến dạng:</strong>
                - Trục <em>O'X'</em> (dài): hệ số <em>p</em>.<br>
                - Trục <em>O'Y'</em> (rộng): hệ số <em>q</em>.<br>
                - Trục <em>O'Z'</em> (cao): hệ số <em>r</em>.
              </div>
            </div>
          `
        },
        {
          title: "2. Hai loại hình chiếu trục đo thông dụng",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">A. Hình chiếu trục đo vuông góc đều (Isometric):</strong>
                - Phương chiếu <em>l</em> vuông góc với mặt phẳng chiếu.<br>
                - <strong>Góc trục đo:</strong> ∠X'O'Y' = ∠Y'O'Z' = ∠X'O'Z' = 120°.<br>
                - <strong>Hệ số biến dạng quy ước:</strong> <em>p = q = r = 1</em>.<br>
                - Hình tròn nằm trên các mặt phẳng tọa độ bị biến dạng thành <strong>hình elip</strong>.
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">B. Hình chiếu trục đo xiên góc cân (Cabinet/Dimetric):</strong>
                - Mặt phẳng <em>X'O'Z'</em> song song với mặt phẳng chiếu.<br>
                - <strong>Góc trục đo:</strong> ∠X'O'Z' = 90°; ∠X'O'Y' = ∠Y'O'Z' = 135°.<br>
                - <strong>Hệ số biến dạng:</strong> <em>p = r = 1</em>; riêng <em>q = 0,5</em> (chiều rộng rút ngắn một nửa).<br>
                - Hình tròn nằm trên mặt phẳng song song <em>X'O'Z'</em> vẫn giữ nguyên là <strong>hình tròn</strong>.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Trong hình chiếu trục đo vuông góc đều, góc giữa các trục đo và hệ số biến dạng quy ước lần lượt là:",
          options: ["Các góc đều bằng 120° và p = q = r = 1", "Các góc đều bằng 90° và p = 1, q = 0,5", "Góc 90° và hai góc 135°, p = r = 1", "Các góc đều bằng 60°"],
          ans: 0,
          exp: "Hình chiếu trục đo vuông góc đều có 3 góc trục đo đối xứng hoàn hảo bằng 120° và quy ước hệ số biến dạng không đổi p = q = r = 1."
        },
        {
          q: "Đặc điểm nổi bật của hình chiếu trục đo xiên góc cân giúp việc vẽ các chi tiết có mặt trụ tròn trở nên rất thuận tiện là gì?",
          options: ["Đường tròn nằm trên mặt phẳng song song xOz vẫn là hình tròn thật, không bị méo thành elip", "Toàn bộ vật thể biến thành hình tam giác", "Chiều rộng được nhân đôi lên", "Không cần vẽ trục cao O'Z'"],
          ans: 0,
          exp: "Vì mặt xOz song song mặt phẳng chiếu nên các hình tròn nằm trên mặt phẳng này không bị biến dạng góc, vẽ dễ dàng bằng compa."
        }
      ]
    },
    {
      id: "bai-12",
      number: "Bài 12",
      title: "Hình chiếu phối cảnh",
      badge: "Phép chiếu xuyên tâm",
      icon: "fa-solid fa-road",
      overview: "Phương pháp tạo hình biểu diễn phối cảnh bằng phép chiếu xuyên tâm, mô phỏng chân thực hiệu ứng xa gần mắt người quan sát; ứng dụng trong bản vẽ kiến trúc xây dựng.",
      sections: [
        {
          title: "1. Nguyên lí phép chiếu phối cảnh",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Dùng phép chiếu xuyên tâm: tâm chiếu là <strong>Điểm nhìn</strong> (mắt người quan sát); mặt phẳng chiếu thẳng đứng gọi là <strong>Mặt tranh</strong>; đường giao giữa mặt phẳng tầm mắt và mặt tranh gọi là <strong>Đường chân trời</strong> (<em>t–t</em>):
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Phối cảnh một điểm tụ:</strong>
                Mặt tranh song song với một mặt của vật thể. Các đường thẳng song song trong không gian vuông góc với mặt tranh sẽ hội tụ về <strong>một điểm tụ duy nhất (<em>F</em>)</strong> nằm trên đường chân trời. Thường dùng vẽ nội thất phòng ở, hành lang dài, đường phố thẳng.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Phối cảnh hai điểm tụ:</strong>
                Mặt tranh không song song với mặt nào của vật thể. Các đường thẳng theo phương ngang hội tụ về <strong>hai điểm tụ (<em>F₁</em> và <em>F₂</em>)</strong> nằm ở hai phía trên đường chân trời. Thường dùng vẽ ngoại thất phối cảnh góc công trình kiến trúc nhà ở, cầu đường.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Phép chiếu nào sau đây được dùng để xây dựng hình chiếu phối cảnh?",
          options: ["Phép chiếu xuyên tâm (tâm chiếu là mắt người quan sát)", "Phép chiếu song song vuông góc", "Phép chiếu song song xiên góc", "Phép quay tọa độ"],
          ans: 0,
          exp: "Hình chiếu phối cảnh dùng phép chiếu xuyên tâm để tái hiện quy luật xa gần của thị giác con người (vật ở gần thì to, ở xa thì nhỏ)."
        },
        {
          q: "Khi vẽ phối cảnh một điểm tụ, điểm tụ F luôn luôn nằm trên đường thẳng nào?",
          options: ["Đường chân trời (đường tầm mắt t - t)", "Đường bao đáy của mặt đất", "Đỉnh cao nhất của ngôi nhà", "Mép bên phải của tờ giấy"],
          ans: 0,
          exp: "Điểm tụ của các đường thẳng nằm ngang luôn luôn nằm trên đường chân trời ngang tầm mắt người quan sát."
        }
      ]
    },
    {
      id: "bai-13",
      number: "Bài 13",
      title: "Biểu diễn quy ước ren",
      badge: "Quy ước cơ khí TCVN",
      icon: "fa-solid fa-screwdriver",
      overview: "Quy chuẩn vẽ quy ước ren trục (ren ngoài) và ren lỗ (ren trong), cách đọc kí hiệu ren (ren hệ mét M, ren thang Tr) và biểu diễn mối ghép ren.",
      sections: [
        {
          title: "1. Quy ước vẽ ren thấy và ren khuất (TCVN 12-85)",
          content: `
            <div class="space-y-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Ren nhìn thấy (Ren ngoài trục hoặc Ren trong cắt qua):</strong>
                - <strong>Đường đỉnh ren:</strong> Vẽ bằng <strong>nét liền đậm</strong>.<br>
                - <strong>Đường chân ren:</strong> Vẽ bằng <strong>nét liền mảnh</strong>.<br>
                - <strong>Đường giới hạn ren:</strong> Vẽ bằng <strong>nét liền đậm</strong>.<br>
                - <strong>Trên hình chiếu vuông góc với trục ren:</strong> Vòng đỉnh ren vẽ kín bằng nét liền đậm; vòng chân ren vẽ <strong>hở khoảng 1/4 cung tròn (vẽ 3/4 vòng)</strong> bằng nét liền mảnh.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Ren bị che khuất:</strong>
                Tất cả các đường đỉnh ren, chân ren và giới hạn ren đều vẽ bằng <strong>nét đứt mảnh</strong>.
              </div>
            </div>
          `
        },
        {
          title: "2. Kí hiệu ren và Mối ghép ren",
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Đọc kí hiệu ren:</strong>
                - <strong>M10 × 1:</strong> Ren hệ mét (<em>M</em>), đường kính đỉnh 10 mm, bước ren mịn 1 mm (nếu ren bước lớn thường không ghi bước, ví dụ: <em>M10</em>).<br>
                - <strong>Tr20 × 2 LH:</strong> Ren thang (<em>Tr</em>), đường kính 20 mm, bước ren 2 mm, <em>hướng xoắn trái</em> (<em>LH</em> - Left Hand).
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600 block mb-1">Quy ước vẽ mối ghép ren:</strong>
                Tại phần ren trục ăn khớp lồng vào ren lỗ, quy ước <strong>vẽ ren trục che khuất phần ren lỗ</strong> (các đường đỉnh và chân ren của trục được ưu tiên vẽ rõ).
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Theo tiêu chuẩn TCVN, trên hình chiếu vuông góc với trục ren, đường chân ren nhìn thấy được quy ước vẽ như thế nào?",
          options: ["Vẽ hở khoảng 1/4 vòng tròn (vẽ 3/4 vòng) bằng nét liền mảnh", "Vẽ kín cả vòng tròn bằng nét liền đậm", "Vẽ bằng nét gạch chấm đậm", "Không được vẽ đường chân ren"],
          ans: 0,
          exp: "Quy ước vẽ ren hiển thị đường chân ren hở 1/4 vòng bằng nét liền mảnh để người thợ phân biệt rõ đỉnh ren và chân ren."
        },
        {
          q: "Kí hiệu ren 'M12 x 1.25 LH' cho biết thông tin gì về chi tiết ren?",
          options: ["Ren hệ mét, đường kính danh nghĩa 12 mm, bước ren 1,25 mm và xoắn trái", "Ren hình thang, dài 12 mét", "Ren hệ Anh, bước ren 12 mm", "Ren xoắn phải thông thường"],
          ans: 0,
          exp: "M là ren hệ mét, 12 là đường kính d = 12mm, 1.25 là bước ren P = 1.25mm, LH (Left Hand) là ren xoắn ngược chiều kim đồng hồ."
        }
      ]
    },
    {
      id: "bai-14",
      number: "Bài 14",
      title: "Bản vẽ cơ khí",
      badge: "Bản vẽ chi tiết & Bản vẽ lắp",
      icon: "fa-solid fa-wrench",
      overview: "Cấu trúc, nội dung và phương pháp đọc, lập Bản vẽ chi tiết (hình biểu diễn, kích thước, yêu cầu kĩ thuật Ra/Rz, dung sai) và Bản vẽ lắp (bảng kê chi tiết, trình tự tháo lắp).",
      sections: [
        {
          title: "1. Bản vẽ chi tiết (Detail Drawing)",
          content: `
            <div class="space-y-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                Bản vẽ chi tiết là tài liệu kĩ thuật thể hiện riêng biệt một chi tiết máy, gồm 4 nội dung:
                <ul class="list-disc list-inside mt-1.5 space-y-1 text-slate-600 dark:text-slate-300">
                  <li><strong>Hình biểu diễn:</strong> Các hình chiếu vuông góc, hình cắt, mặt cắt thể hiện trọn vẹn hình dáng bên trong và ngoài.</li>
                  <li><strong>Kích thước:</strong> Ghi đầy đủ kích thước các phần tử để gia công chế tạo và kiểm tra.</li>
                  <li><strong>Yêu cầu kĩ thuật:</strong> Ghi chỉ dẫn về độ nhám bề mặt (<em>Ra</em> hoặc <em>Rz</em>, trị số càng nhỏ bề mặt càng nhẵn bóng); dung sai kích thước gia công cho phép; nhiệt luyện, xử lí bề mặt (mạ crôm, sơn phủ).</li>
                  <li><strong>Khung tên:</strong> Tên chi tiết, vật liệu (thép C45, gang xám HT150), tỉ lệ, người vẽ, cơ sở chế tạo.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          title: "2. Bản vẽ lắp (Assembly Drawing)",
          content: `
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs">
              Bản vẽ lắp thể hiện hình dáng và vị trí tương quan ăn khớp giữa các chi tiết trong một cụm máy hoặc sản phẩm hoàn chỉnh:
              <ul class="list-disc list-inside mt-1.5 space-y-1 text-slate-600 dark:text-slate-300">
                <li>Gồm: Hình biểu diễn tổng thể cụm, kích thước chung (dài × rộng × cao), kích thước lắp ghép, <strong>Bảng kê chi tiết</strong> (số thứ tự, tên chi tiết, số lượng, vật liệu) và Khung tên.</li>
                <li>Đọc bản vẽ lắp để hiểu rõ nguyên lí hoạt động cơ học, công dụng của cụm và xác định đúng trình tự tháo dỡ, lắp ráp các chi tiết.</li>
              </ul>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Thành phần nào sau đây có mặt trên Bản vẽ lắp nhưng KHÔNG có trên Bản vẽ chi tiết đơn lẻ?",
          options: ["Bảng kê danh mục các chi tiết (số thứ tự, tên chi tiết, số lượng, vật liệu)", "Khung tên bản vẽ", "Hình biểu diễn hình chiếu", "Kích thước của vật thể"],
          ans: 0,
          exp: "Bảng kê chi tiết là đặc thù của bản vẽ lắp nhằm thống kê toàn bộ các linh kiện phụ tùng cấu thành nên cụm máy."
        },
        {
          q: "Kí hiệu độ nhám bề mặt Ra trên bản vẽ chi tiết cơ khí có ý nghĩa gì?",
          options: ["Sai lệch độ nhấp nhô bề mặt trung bình số học, giá trị Ra càng nhỏ thì bề mặt càng nhẵn bóng", "Độ cứng kim loại", "Khối lượng của chi tiết", "Nhiệt độ nóng chảy của kim loại"],
          ans: 0,
          exp: "Ra (Roughness Average) đo độ mấp mô tế vi của bề mặt kim loại sau gia công, giá trị càng nhỏ chi tiết càng bóng mịn."
        }
      ]
    },
    {
      id: "bai-15",
      number: "Bài 15",
      title: "Bản vẽ xây dựng",
      badge: "Mặt bằng, Mặt đứng & Mặt cắt",
      icon: "fa-solid fa-trowel-bricks",
      overview: "Tìm hiểu cấu trúc hồ sơ bản vẽ kiến trúc ngôi nhà: Mặt bằng các tầng (bản vẽ quan trọng nhất), Mặt đứng bên ngoài, Mặt cắt thẳng đứng và hệ thống kí hiệu quy ước kiến trúc.",
      sections: [
        {
          title: "1. Ba bản vẽ kiến trúc cốt lõi của ngôi nhà",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Mặt bằng (Floor plan):</strong>
                Hình cắt bằng tưởng tượng tạo bởi mặt phẳng nằm ngang cắt qua ngôi nhà (thường ở độ cao <strong>khoảng 1,5 m ngang cửa sổ</strong>). Thể hiện vị trí tường, cột, vách ngăn, cửa đi, cửa sổ, cầu thang và cách bố trí công năng các phòng, bàn ghế, thiết bị vệ sinh. <em>Đây là bản vẽ quan trọng nhất</em>.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Mặt đứng (Elevation):</strong>
                Hình chiếu vuông góc thể hiện vẻ đẹp hình khối kiến trúc bên ngoài của ngôi nhà (cửa đi, ban công, mái ngói, màu sơn trang trí mặt tiền).
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Mặt cắt (Building section):</strong>
                Hình cắt tạo bởi mặt phẳng thẳng đứng cắt dọc hoặc ngang qua nhà; thể hiện kết cấu sàn, trần, dầm, mái, móng và cao độ chiều cao các tầng, chiều cao cửa sổ.
              </div>
            </div>
          `
        },
        {
          title: "2. Kí hiệu quy ước kiến trúc và Trình tự đọc bản vẽ nhà",
          content: `
            <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
              <div>- Dùng kí hiệu quy ước thống nhất cho cửa đi đơn, cửa đi hai cánh, cửa sổ lùa, cầu thang bộ lên tầng, bồn cầu, chậu rửa.</div>
              <div>- <strong>Trình tự đọc chuẩn:</strong> Xem <em>Mặt đứng</em> để hình dung kiến trúc tổng thể bên ngoài → Đọc <em>Mặt bằng từng tầng</em> để hiểu cách phân chia diện tích, vị trí cửa đi lại → Đọc <em>Mặt cắt</em> để xác định chiều cao thông thủy các phòng và kết cấu dầm sàn móng.</div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Trong hồ sơ bản vẽ thiết kế ngôi nhà, bản vẽ nào đóng vai trò quan trọng nhất thể hiện công năng và cách bố trí phòng ốc?",
          options: ["Bản vẽ Mặt bằng ngôi nhà", "Bản vẽ Mặt đứng mặt tiền", "Bản vẽ phối cảnh mái ngói", "Bản vẽ chi tiết hàng rào"],
          ans: 0,
          exp: "Bản vẽ mặt bằng là hình cắt ngang qua các phòng, quyết định toàn bộ diện tích sử dụng, hướng giao thông và sắp đặt đồ đạc."
        },
        {
          q: "Bản vẽ Mặt cắt của ngôi nhà cho người thợ xây biết được thông tin kỹ thuật quan trọng nào?",
          options: ["Chiều cao các tầng, độ dày sàn bê tông, cấu tạo vì kèo mái và chiều sâu móng", "Màu sắc lớp sơn tường ngoài", "Tên chủ sở hữu ngôi nhà", "Giá tiền của từng viên gạch"],
          ans: 0,
          exp: "Mặt cắt đứng thể hiện kích thước theo phương thẳng đứng: cốt cao độ sàn, chiều cao cửa, độ dốc mái và kết cấu dầm móng."
        }
      ]
    },
    {
      id: "bai-16",
      number: "Bài 16",
      title: "Vẽ kĩ thuật với sự trợ giúp của máy tính",
      badge: "Phần mềm CAD",
      icon: "fa-solid fa-laptop-code",
      overview: "Ứng dụng hệ thống CAD (Computer-Aided Design) trong thiết kế kĩ thuật hiện đại: giao diện làm việc, nhóm lệnh vẽ 2D cơ bản, lệnh hiệu chỉnh và các chế độ hỗ trợ chính xác.",
      sections: [
        {
          title: "1. Khái niệm và Lợi ích của CAD",
          content: `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              <strong>CAD (Computer-Aided Design)</strong> là quá trình thiết kế, lập bản vẽ với sự trợ giúp đắc lực của phần mềm máy tính (AutoCAD, SolidWorks, Inventor):
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Ưu điểm vượt trội so với vẽ tay:</strong>
                - Độ chính xác tuyệt đối đến nhiều chữ số thập phân.<br>
                - Tốc độ vẽ nhanh, dễ dàng sao chép, chỉnh sửa không để lại vết tẩy xóa.<br>
                - Quản lí bản vẽ theo các <strong>Lớp (Layers)</strong> riêng biệt (lớp nét thấy, nét khuất, nét tâm, kích thước).<br>
                - Lưu trữ dữ liệu số gọn nhẹ, dễ dàng truyền qua mạng và liên kết trực tiếp với máy gia công CNC.
              </div>
              <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <strong class="text-blue-600 block mb-1">Giao diện cơ bản phần mềm CAD:</strong>
                - <em>Vùng đồ họa:</em> Không gian vô tận để vẽ hình.<br>
                - <em>Dòng lệnh (Command Line):</em> Nhập tên lệnh và thông số tọa độ.<br>
                - <em>Thanh công cụ Ribbon:</em> Chứa các biểu tượng lệnh vẽ và chỉnh sửa.<br>
                - <em>Thanh trạng thái:</em> Bật tắt chế độ bắt điểm, lưới tọa độ.
              </div>
            </div>
          `
        },
        {
          title: "2. Các nhóm lệnh 2D cơ bản trong AutoCAD",
          content: `
            <div class="space-y-2 text-xs">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600">Nhóm lệnh vẽ hình cơ bản (Draw):</strong>
                <code>LINE</code> (vẽ đoạn thẳng), <code>CIRCLE</code> (vẽ đường tròn), <code>ARC</code> (vẽ cung tròn), <code>RECTANGLE</code> (vẽ hình chữ nhật), <code>POLYGON</code> (vẽ đa giác đều).
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600">Nhóm lệnh hiệu chỉnh (Modify):</strong>
                <code>TRIM</code> (cắt xén nét thừa), <code>FILLET</code> (bo tròn góc), <code>CHAMFER</code> (vát phẳng góc), <code>OFFSET</code> (tạo đối tượng song song/đồng tâm), <code>COPY</code> (sao chép), <code>MOVE</code> (di chuyển), <code>MIRROR</code> (lấy đối xứng).
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700">
                <strong class="text-indigo-600">Chế độ trợ giúp thông minh:</strong>
                - <strong>OSNAP (Object Snap - F3):</strong> Bắt điểm chính xác (đầu mút Endpoint, trung điểm Midpoint, tâm đường tròn Center, giao điểm Intersection).<br>
                - <strong>ORTHO (F8):</strong> Khóa con trỏ chỉ di chuyển theo phương thẳng đứng hoặc nằm ngang vuông góc.
              </div>
            </div>
          `
        }
      ],
      quiz: [
        {
          q: "Trong phần mềm AutoCAD, lệnh nào sau đây được dùng để cắt xén bỏ các đoạn thừa của đối tượng giao nhau?",
          options: ["Lệnh TRIM", "Lệnh COPY", "Lệnh LINE", "Lệnh CIRCLE"],
          ans: 0,
          exp: "Lệnh TRIM (cắt xén) cho phép cắt bỏ nhanh phần đường thẳng thừa nhô ra ngoài điểm giao nhau."
        },
        {
          q: "Chức năng bắt điểm tự động Object Snap (OSNAP - phím F3) trong phần mềm CAD có tác dụng gì?",
          options: ["Tự động bắt dính chính xác vào các điểm đặc biệt như đầu mút, trung điểm hoặc tâm đường tròn", "Tự động tắt máy tính", "Tự động tô màu cho hình vẽ", "Tự động phóng to màn hình"],
          ans: 0,
          exp: "OSNAP giúp kĩ sư bắt điểm hình học chính xác 100% bằng chuột mà không cần căn chỉnh mắt thường."
        }
      ]
    }
  ]
};

module.exports = { chapter2 };
