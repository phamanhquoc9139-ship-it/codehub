// Lessons 7 to 18: Topic 4 (HTML5 & CSS3 Web Development)
module.exports = [
  // ================= BÀI 7 =================
  {
    num: 7,
    topicNum: 4,
    title: "Bài 7: Giới thiệu về HTML và cấu trúc trang web",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Nắm vững khái niệm ngôn ngữ đánh dấu siêu văn bản HTML5; Hiểu cấu trúc cây phân cấp DOM của một tài liệu HTML chuẩn; Phân biệt thẻ mở, nội dung, thẻ đóng và các thẻ tự đóng (void tags); Hiểu khái niệm thuộc tính (attributes).",
    intro: "Mọi trang web hiện đại từ Google, Facebook đến các trang tin tức đều được xây dựng trên bộ khung xương vững chắc là ngôn ngữ HTML. Vậy một trang web chuẩn bắt đầu từ đâu?",
    sections: [
      {
        title: "1. Ngôn ngữ đánh dấu siêu văn bản HTML5",
        content: `
          <p class="mb-3">
            <strong>HTML (HyperText Markup Language):</strong> Là ngôn ngữ đánh dấu tiêu chuẩn được sử dụng để tạo và cấu trúc các thành phần trên trang web (văn bản, hình ảnh, liên kết, bảng, biểu mẫu). HTML không phải là ngôn ngữ lập trình vì không chứa các cấu trúc điều khiển logic (rẽ nhánh, lặp).
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <h5 class="font-bold text-amber-800 dark:text-amber-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-code"></i> Cú pháp phần tử HTML (Element)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                &lt;tên_thẻ thuộc_tính="giá_trị"&gt; Nội dung hiển thị &lt;/tên_thẻ&gt;
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Gồm thẻ mở, nội dung và thẻ đóng có dấu gạch chéo <code>/</code>.
              </p>
            </div>
            <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
              <h5 class="font-bold text-orange-800 dark:text-orange-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-cube"></i> Thẻ đơn tự đóng (Void Elements)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Là các thẻ không chứa nội dung văn bản bên trong và không cần thẻ đóng: <code>&lt;br&gt;</code> (ngắt dòng), <code>&lt;hr&gt;</code> (đường kẻ ngang), <code>&lt;img&gt;</code> (chèn ảnh), <code>&lt;input&gt;</code> (ô nhập liệu), <code>&lt;meta&gt;</code>.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Cấu trúc cây phân cấp của một tệp HTML chuẩn",
        content: `
          <p class="mb-2">Mọi trang web hợp lệ theo chuẩn HTML5 đều tuân thủ cấu trúc tối thiểu sau:</p>
          <div class="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
            <span class="text-gray-500">&lt;!DOCTYPE html&gt;</span> <span class="text-gray-400">&lt;!-- Khai báo phiên bản HTML5 --&gt;</span><br>
            <span class="text-blue-400">&lt;html</span> <span class="text-amber-400">lang</span>=<span class="text-emerald-400">"vi"</span><span class="text-blue-400">&gt;</span> <span class="text-gray-400">&lt;!-- Thẻ gốc bao bọc toàn bộ trang web --&gt;</span><br>
            &nbsp;&nbsp;<span class="text-blue-400">&lt;head&gt;</span> <span class="text-gray-400">&lt;!-- Phần đầu: chứa siêu dữ liệu, không hiển thị trực tiếp --&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;meta</span> <span class="text-amber-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span> <span class="text-gray-400">&lt;!-- Bảng mã tiếng Việt --&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;meta</span> <span class="text-amber-400">name</span>=<span class="text-emerald-400">"viewport"</span> <span class="text-amber-400">content</span>=<span class="text-emerald-400">"width=device-width, initial-scale=1.0"</span><span class="text-blue-400">&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;title&gt;</span>Tiêu đề hiển thị trên thanh tab trình duyệt<span class="text-blue-400">&lt;/title&gt;</span><br>
            &nbsp;&nbsp;<span class="text-blue-400">&lt;/head&gt;</span><br>
            &nbsp;&nbsp;<span class="text-blue-400">&lt;body&gt;</span> <span class="text-gray-400">&lt;!-- Phần thân: chứa toàn bộ nội dung người dùng nhìn thấy --&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;h1&gt;</span>Xin chào thế giới Web!<span class="text-blue-400">&lt;/h1&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;p&gt;</span>Đây là trang web đầu tiên của em.<span class="text-blue-400">&lt;/p&gt;</span><br>
            &nbsp;&nbsp;<span class="text-blue-400">&lt;/body&gt;</span><br>
            <span class="text-blue-400">&lt;/html&gt;</span>
          </div>
        `
      }
    ],
    practice: [
      "Khởi động trình soạn thảo văn bản (Notepad hoặc VS Code), nhập đúng cấu trúc HTML5 cơ bản và lưu tệp với tên `index.html`.",
      "Nhấp đúp vào tệp `index.html` để mở bằng trình duyệt (Chrome/Edge) và quan sát tiêu đề tab cũng như nội dung trang web.",
      "Thực hiện xem mã nguồn trang web (nhấn phím tắt Ctrl + U trên trình duyệt) của một trang tin tức bất kỳ để tìm hiểu cấu trúc thẻ."
    ],
    summary: "HTML5 là ngôn ngữ đánh dấu siêu văn bản định hình cấu trúc trang web. Tài liệu chuẩn gồm <!DOCTYPE html>, thẻ gốc <html>, phần <head> chứa siêu dữ liệu và tiêu đề trang, phần <body> chứa toàn bộ nội dung văn bản, hình ảnh hiển thị trên trình duyệt.",
    quizzes: [
      {
        q: "Thẻ nào trong tài liệu HTML chứa toàn bộ các nội dung văn bản, hình ảnh, liên kết mà người dùng nhìn thấy trên màn hình trình duyệt?",
        options: ["<code>&lt;head&gt;</code>", "<code>&lt;body&gt;</code>", "<code>&lt;title&gt;</code>", "<code>&lt;meta&gt;</code>"],
        correctIndex: 1,
        explain: "Thẻ <code>&lt;body&gt;</code> là phần thân chứa tất cả nội dung trực quan hiển thị cho người dùng."
      },
      {
        q: "Thẻ HTML nào sau đây là thẻ đơn tự đóng (Void Element), không có thẻ đóng tương ứng?",
        options: ["<code>&lt;p&gt;</code>", "<code>&lt;h1&gt;</code>", "<code>&lt;br&gt;</code>", "<code>&lt;div&gt;</code>"],
        correctIndex: 2,
        explain: "Thẻ <code>&lt;br&gt;</code> dùng để ngắt dòng văn bản là thẻ rỗng (void element) không có nội dung con và không cần thẻ đóng."
      },
      {
        q: "Thẻ <code>&lt;title&gt;</code> nằm trong phần nào của tài liệu HTML?",
        options: ["Trong phần <code>&lt;body&gt;</code>", "Trong phần <code>&lt;head&gt;</code>", "Nằm ngoài thẻ <code>&lt;html&gt;</code>", "Nằm ở cuối chân trang"],
        correctIndex: 1,
        explain: "Thẻ <code>&lt;title&gt;</code> quy định tiêu đề trang web trên thanh tiêu đề của trình duyệt và bắt buộc phải nằm trong cặp thẻ <code>&lt;head&gt;</code>."
      },
      {
        q: "Dòng khai báo <code>&lt;!DOCTYPE html&gt;</code> ở đầu tệp tin HTML có ý nghĩa gì?",
        options: ["Là thẻ tạo tiêu đề lớn nhất", "Thông báo cho trình duyệt biết tài liệu được viết theo chuẩn phiên bản HTML5", "Liên kết với tệp CSS bên ngoài", "Tạo mật khẩu cho trang web"],
        correctIndex: 1,
        explain: "<code>&lt;!DOCTYPE html&gt;</code> là chỉ thị khai báo kiểu tài liệu giúp trình duyệt web hiển thị trang theo đúng chuẩn HTML5 hiện đại."
      }
    ]
  },

  // ================= BÀI 8 =================
  {
    num: 8,
    topicNum: 4,
    title: "Bài 8: Định dạng văn bản và tiêu đề trong HTML",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Sử dụng thành thạo các thẻ tiêu đề từ `<h1>` đến `<h6>`; Định dạng đoạn văn `<p>`, ngắt dòng `<br>`, đường kẻ `<hr>`; Sử dụng các thẻ định dạng ký tự: `<strong>`, `<em>`, `<mark>`, `<sup>`, `<sub>` chuẩn ngữ nghĩa.",
    intro: "Một bài báo điện tử hay một bài viết blog cần có tiêu đề chính, các đề mục con và những từ khóa quan trọng được làm nổi bật. HTML cung cấp những thẻ nào để thực hiện việc này?",
    sections: [
      {
        title: "1. Các cấp độ tiêu đề (Headings) và Đoạn văn (Paragraphs)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm uppercase mb-1.5">
                Các thẻ tiêu đề từ &lt;h1&gt; đến &lt;h6&gt;
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">
                Thể hiện mức độ quan trọng giảm dần theo cấp bậc cấu trúc tài liệu:
              </p>
              <ul class="text-xs font-mono space-y-1 text-gray-700 dark:text-gray-300">
                <li><code>&lt;h1&gt;</code>: Tiêu đề lớn nhất (chỉ nên có 1 thẻ duy nhất trên 1 trang web cho chuẩn SEO).</li>
                <li><code>&lt;h2&gt;</code>: Tiêu đề mục chính của bài viết.</li>
                <li><code>&lt;h3&gt;</code> đến <code>&lt;h6&gt;</code>: Các tiểu mục nhỏ hơn.</li>
              </ul>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1.5">
                Đoạn văn &lt;p&gt;, Ngắt dòng &lt;br&gt;, Kẻ ngang &lt;hr&gt;
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1.5">
                <li><code>&lt;p&gt;...&lt;/p&gt;</code>: Định nghĩa một đoạn văn bản (trình duyệt tự động chèn khoảng cách trống trên và dưới đoạn).</li>
                <li><code>&lt;br&gt;</code>: Xuống dòng ngay lập tức mà không tạo đoạn mới.</li>
                <li><code>&lt;hr&gt;</code>: Tạo một đường kẻ ngang phân tách các phần nội dung khác nhau.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Các thẻ định dạng ký tự ngữ nghĩa (Inline Formatting)",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Thẻ HTML</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Hiển thị trực quan</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Ý nghĩa ngữ nghĩa</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr>
                  <td class="p-2 font-mono"><code>&lt;strong&gt;</code></td>
                  <td class="p-2"><strong>Chữ in đậm quan trọng</strong></td>
                  <td class="p-2">Nhấn mạnh nội dung có tầm quan trọng cao (tốt cho SEO và trợ năng).</td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>&lt;em&gt;</code></td>
                  <td class="p-2"><em>Chữ in nghiêng nhấn giọng</em></td>
                  <td class="p-2">Nhấn mạnh ngữ điệu hoặc thuật ngữ chuyên ngành.</td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>&lt;mark&gt;</code></td>
                  <td class="p-2"><mark class="bg-amber-200 px-1 rounded">Chữ được tô vàng</mark></td>
                  <td class="p-2">Đánh dấu văn bản được tìm kiếm hoặc chú ý đặc biệt.</td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>&lt;sup&gt;</code></td>
                  <td class="p-2">a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></td>
                  <td class="p-2">Chỉ số trên (dùng cho lũy thừa, số mũ toán học).</td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>&lt;sub&gt;</code></td>
                  <td class="p-2">H<sub>2</sub>O, CO<sub>2</sub></td>
                  <td class="p-2">Chỉ số dưới (dùng cho công thức hóa học).</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Soạn thảo một trang HTML ngắn giới thiệu bản thân với tiêu đề `<h1>`, các đề mục `<h2>`, các đoạn văn `<p>`.",
      "Sử dụng thẻ `<strong>` để làm nổi bật sở thích và thẻ `<em>` cho câu danh ngôn yêu thích của em.",
      "Viết công thức định lý Pythagoras (a² + b² = c²) và phương trình hóa học tạo thành nước (2H₂ + O₂ → 2H₂O) bằng các thẻ `<sup>` và `<sub>`."
    ],
    summary: "HTML cung cấp 6 cấp độ tiêu đề <h1> đến <h6> thể hiện thứ bậc tài liệu. Thẻ <p> dùng cho đoạn văn, <br> ngắt dòng, <hr> kẻ ngang. Các thẻ định dạng ngữ nghĩa <strong>, <em>, <mark>, <sup>, <sub> giúp văn bản rõ ràng và tối ưu công cụ tìm kiếm.",
    quizzes: [
      {
        q: "Thẻ tiêu đề nào có kích thước chữ lớn nhất và thể hiện mức độ quan trọng cao nhất trong văn bản HTML?",
        options: ["<code>&lt;h6&gt;</code>", "<code>&lt;h3&gt;</code>", "<code>&lt;h1&gt;</code>", "<code>&lt;title&gt;</code>"],
        correctIndex: 2,
        explain: "<code>&lt;h1&gt;</code> là thẻ tiêu đề cấp 1 lớn nhất, đại diện cho chủ đề chính bao quát của toàn bộ trang web."
      },
      {
        q: "Để viết công thức hóa học nước H₂O với số 2 nhỏ nằm ở phía dưới, ta sử dụng cặp thẻ nào?",
        options: ["<code>H&lt;sup&gt;2&lt;/sup&gt;O</code>", "<code>H&lt;sub&gt;2&lt;/sub&gt;O</code>", "<code>H&lt;small&gt;2&lt;/small&gt;O</code>", "<code>H&lt;down&gt;2&lt;/down&gt;O</code>"],
        correctIndex: 1,
        explain: "Thẻ <code>&lt;sub&gt;</code> (subscript) hiển thị ký tự dưới dạng chỉ số dưới, phù hợp cho công thức hóa học."
      },
      {
        q: "Thẻ nào được khuyến nghị sử dụng để in đậm văn bản nhằm nhấn mạnh tầm quan trọng về mặt ngữ nghĩa (semantic)?",
        options: ["<code>&lt;b&gt;</code>", "<code>&lt;strong&gt;</code>", "<code>&lt;bold&gt;</code>", "<code>&lt;black&gt;</code>"],
        correctIndex: 1,
        explain: "HTML5 khuyến nghị dùng <code>&lt;strong&gt;</code> thay vì <code>&lt;b&gt;</code> vì <code>&lt;strong&gt;</code> mang ý nghĩa ngữ nghĩa giúp máy tìm kiếm hiểu đây là từ khóa quan trọng."
      },
      {
        q: "Thẻ <code>&lt;hr&gt;</code> trong HTML tạo ra hiệu ứng gì trên trang web?",
        options: ["Chèn một bức ảnh hoa văn", "Ngắt xuống dòng mới nhưng không có đường kẻ", "Tạo một đường kẻ ngang phân tách các khối nội dung", "Làm chữ đổi màu đỏ"],
        correctIndex: 2,
        explain: "Thẻ <code>&lt;hr&gt;</code> (horizontal rule) tạo một đường phân cách kẻ ngang chạy dài qua bề rộng trang."
      }
    ]
  },

  // ================= BÀI 9 =================
  {
    num: 9,
    topicNum: 4,
    title: "Bài 9: Tạo danh sách và bảng trong HTML",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Tạo thành thạo danh sách có thứ tự `<ol>` và không có thứ tự `<ul>`; Xây dựng bảng dữ liệu hoàn chỉnh với `<table>`, `<tr>`, `<th>`, `<td>`; Áp dụng thuộc tính gộp ô `colspan` (gộp cột) và `rowspan` (gộp hàng).",
    intro: "Để hiển thị thời khóa biểu của lớp hay bảng giá dịch vụ một cách gọn gàng, khoa học, chúng ta cần tổ chức dữ liệu thành dạng danh sách và bảng biểu như thế nào?",
    sections: [
      {
        title: "1. Danh sách có thứ tự (Ordered) và không thứ tự (Unordered)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-list-ol"></i> Danh sách có thứ tự &lt;ol&gt;
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">
                Các mục được đánh số 1, 2, 3 hoặc chữ cái A, B, C; mỗi mục con dùng thẻ <code>&lt;li&gt;</code>:
              </p>
              <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
                &lt;ol type="1"&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Bước 1: Bật máy tính&lt;/li&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Bước 2: Mở trình duyệt&lt;/li&gt;<br>
                &lt;/ol&gt;
              </div>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-list-ul"></i> Danh sách không thứ tự &lt;ul&gt;
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">
                Các mục được hiển thị bằng dấu chấm tròn (bullet point); thường dùng làm thanh menu:
              </p>
              <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
                &lt;ul&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Trang chủ&lt;/li&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Khóa học&lt;/li&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Liên hệ&lt;/li&gt;<br>
                &lt;/ul&gt;
              </div>
            </div>
          </div>
        `
      },
      {
        title: "2. Cấu trúc bảng dữ liệu (HTML Table)",
        content: `
          <p class="mb-2">Bảng trong HTML được tạo bằng thẻ <code>&lt;table&gt;</code> với các thẻ thành phần:</p>
          <ul class="list-disc pl-5 text-xs text-gray-600 dark:text-gray-300 space-y-1 mb-3">
            <li><code>&lt;tr&gt;</code> (table row): Định nghĩa một hàng trong bảng.</li>
            <li><code>&lt;th&gt;</code> (table header): Ô tiêu đề của cột/hàng (chữ tự động in đậm và căn giữa).</li>
            <li><code>&lt;td&gt;</code> (table data): Ô chứa dữ liệu thông thường.</li>
            <li>Thuộc tính <code>colspan="N"</code>: Gộp N cột liền kề thành 1 ô.</li>
            <li>Thuộc tính <code>rowspan="N"</code>: Gộp N hàng dọc liền kề thành 1 ô.</li>
          </ul>
          <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
            &lt;table border="1"&gt;<br>
            &nbsp;&nbsp;&lt;tr&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;STT&lt;/th&gt;&lt;th&gt;Môn học&lt;/th&gt;&lt;th&gt;Số tiết&lt;/th&gt;<br>
            &nbsp;&nbsp;&lt;/tr&gt;<br>
            &nbsp;&nbsp;&lt;tr&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;Tin học 12&lt;/td&gt;&lt;td&gt;70&lt;/td&gt;<br>
            &nbsp;&nbsp;&lt;/tr&gt;<br>
            &lt;/table&gt;
          </div>
        `
      }
    ],
    practice: [
      "Tạo một danh sách có thứ tự `<ol>` liệt kê 5 bước lập kế hoạch học tập môn Tin học 12.",
      "Tạo bảng thời khóa biểu tuần học gồm 6 cột (Thứ 2 đến Thứ 7) và 5 hàng tiết học có tiêu đề `<th>` rõ ràng.",
      "Thực hành sử dụng thuộc tính `colspan=\"2\"` để gộp 2 ô 'Tiết chào cờ' vào sáng Thứ Hai."
    ],
    summary: "Thẻ <ol> tạo danh sách đánh số có thứ tự, thẻ <ul> tạo danh sách chấm tròn không thứ tự; mỗi mục con nằm trong <li>. Bảng được tạo bởi <table>, hàng <tr>, ô tiêu đề <th> và ô dữ liệu <td>. Gộp cột dùng colspan, gộp hàng dùng rowspan.",
    quizzes: [
      {
        q: "Thẻ nào sau đây được dùng để khai báo một mục con (List Item) nằm bên trong danh sách <code>&lt;ol&gt;</code> hoặc <code>&lt;ul&gt;</code>?",
        options: ["<code>&lt;item&gt;</code>", "<code>&lt;li&gt;</code>", "<code>&lt;di&gt;</code>", "<code>&lt;list&gt;</code>"],
        correctIndex: 1,
        explain: "Thẻ <code>&lt;li&gt;</code> (List Item) được sử dụng để đại diện cho từng phần tử con trong cả danh sách <code>&lt;ol&gt;</code> và <code>&lt;ul&gt;</code>."
      },
      {
        q: "Trong cấu trúc bảng HTML, thẻ nào định nghĩa một ô tiêu đề cột với đặc điểm chữ tự động in đậm và căn giữa?",
        options: ["<code>&lt;td&gt;</code>", "<code>&lt;tr&gt;</code>", "<code>&lt;th&gt;</code>", "<code>&lt;head&gt;</code>"],
        correctIndex: 2,
        explain: "<code>&lt;th&gt;</code> (Table Header) dùng cho các ô tiêu đề, trình duyệt mặc định in đậm và căn giữa nội dung."
      },
      {
        q: "Để gộp 3 cột nằm ngang liền kề nhau thành một ô duy nhất trong bảng, ta dùng thuộc tính nào?",
        options: ["<code>rowspan=\"3\"</code>", "<code>colspan=\"3\"</code>", "<code>span=\"3\"</code>", "<code>merge=\"3\"</code>"],
        correctIndex: 1,
        explain: "<code>colspan</code> (column span) mở rộng ô trên chiều ngang qua nhiều cột; <code>rowspan</code> mở rộng theo chiều dọc qua nhiều hàng."
      },
      {
        q: "Để danh sách có thứ tự <code>&lt;ol&gt;</code> bắt đầu đánh số bằng chữ cái La Mã hoa (I, II, III...), ta sử dụng thuộc tính nào?",
        options: ["<code>type=\"A\"</code>", "<code>type=\"I\"</code>", "<code>type=\"1\"</code>", "<code>type=\"roman\"</code>"],
        correctIndex: 1,
        explain: "Cú pháp <code>&lt;ol type=\"I\"&gt;</code> sẽ đánh số các mục con bằng chữ số La Mã in hoa (I, II, III, IV...)."
      }
    ]
  },

  // ================= BÀI 10 =================
  {
    num: 10,
    topicNum: 4,
    title: "Bài 10: Tạo liên kết siêu văn bản trong HTML",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Sử dụng thành thạo thẻ siêu liên kết `<a>` với thuộc tính bắt buộc `href`; Phân biệt liên kết tuyệt đối (URL đầy đủ) và liên kết tương đối nội bộ; Sử dụng thuộc tính `target=\"_blank\"`; Tạo liên kết neo nội bộ (Bookmark Anchor) nhảy đến thẻ có `id` tương ứng.",
    intro: "Điểm kỳ diệu biến mạng lưới các tệp tin riêng lẻ thành mạng toàn cầu Internet chính là 'Siêu liên kết' (Hyperlink). Thẻ nào trong HTML giữ vai trò kết nối thế giới?",
    sections: [
      {
        title: "1. Thẻ siêu liên kết &lt;a&gt; và các loại liên kết",
        content: `
          <p class="mb-3">
            Thẻ <code>&lt;a&gt;</code> (Anchor) biến văn bản hoặc hình ảnh thành điểm nhấp chuột dẫn tới trang web khác, tệp tin hoặc vị trí khác trong cùng trang web. Thuộc tính quan trọng nhất là <strong>href</strong> (hypertext reference):
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                Liên kết tuyệt đối (Absolute URL)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-1.5 leading-relaxed">
                Chỉ định địa chỉ web đầy đủ bao gồm giao thức (http:// hoặc https://):
              </p>
              <code class="text-xs font-mono text-blue-800 dark:text-blue-300 block bg-white dark:bg-gray-800 p-2 rounded">
                &lt;a href="https://moet.gov.vn" target="_blank"&gt;Bộ GD&amp;ĐT&lt;/a&gt;
              </code>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1">
                Liên kết tương đối (Relative URL)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-1.5 leading-relaxed">
                Dẫn tới tệp HTML khác trong cùng cấu trúc thư mục của website:
              </p>
              <code class="text-xs font-mono text-indigo-800 dark:text-indigo-300 block bg-white dark:bg-gray-800 p-2 rounded">
                &lt;a href="about.html"&gt;Giới thiệu&lt;/a&gt;<br>
                &lt;a href="courses/grade_12.html"&gt;Lớp 12&lt;/a&gt;
              </code>
            </div>
          </div>
        `
      },
      {
        title: "2. Thuộc tính target và Liên kết neo nội bộ (Bookmark Anchor)",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300">
              <strong>Thuộc tính target="_blank":</strong> Mở trang web đích trên một thẻ tab trình duyệt mới, giúp người dùng không bị rời khỏi trang web hiện tại.
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm mb-1">
                <i class="fa-solid fa-bookmark"></i> Liên kết neo nhảy tới phần tử trong trang (Bookmark)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">
                Dùng dấu thăng <code>#</code> kết hợp với định danh <code>id</code> của phần tử đích:
              </p>
              <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
                &lt;!-- Nút bấm nhảy nhanh --&gt;<br>
                &lt;a href="#bai-10"&gt;Xem chi tiết Bài 10&lt;/a&gt;<br><br>
                &lt;!-- Phần tử đích đến --&gt;<br>
                &lt;article id="bai-10"&gt;...&lt;/article&gt;
              </div>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Tạo một trang web có danh sách menu liên kết tới 3 trang web hữu ích: Google, Wikipedia tiếng Việt và Cổng thông tin Bộ GD&ĐT với `target=\"_blank\"`.",
      "Tạo nút 'Về đầu trang' ở cuối trang web bằng cách gán `href=\"#top\"` và đặt `id=\"top\"` ở thẻ `<body>`.",
      "Tạo liên kết gửi thư điện tử bằng cú pháp `href=\"mailto:hotro@codehub.edu.vn\"` và kiểm tra hoạt động khi nhấp chuột."
    ],
    summary: "Thẻ <a> dùng tạo siêu liên kết với thuộc tính bắt buộc href. Phân biệt liên kết tuyệt đối (đầy đủ domain https://) và tương đối. Dùng target=\"_blank\" để mở trang trong tab mới. Dùng dấu #id để tạo liên kết neo nhảy nhanh trong cùng trang web.",
    quizzes: [
      {
        q: "Thuộc tính bắt buộc nào của thẻ <code>&lt;a&gt;</code> dùng để chỉ định địa chỉ trang web đích hoặc tệp tin cần liên kết tới?",
        options: ["<code>src</code>", "<code>href</code>", "<code>link</code>", "<code>url</code>"],
        correctIndex: 1,
        explain: "Thuộc tính <code>href</code> (Hypertext Reference) xác định điểm đến của siêu liên kết khi người dùng nhấp chuột."
      },
      {
        q: "Để khi người dùng nhấp vào liên kết, trang web đích được mở tự động trên một thẻ (tab) mới của trình duyệt, ta dùng giá trị thuộc tính nào?",
        options: ["<code>target=\"_self\"</code>", "<code>target=\"_blank\"</code>", "<code>target=\"_newtab\"</code>", "<code>target=\"_parent\"</code>"],
        correctIndex: 1,
        explain: "<code>target=\"_blank\"</code> thông báo cho trình duyệt mở tài liệu được liên kết trong một tab hoặc cửa sổ mới."
      },
      {
        q: "Để tạo một liên kết neo nhảy ngay đến phần tử có định danh <code>id=\"chude-4\"</code> nằm trong cùng trang web, giá trị của thuộc tính <code>href</code> là gì?",
        options: ["<code>href=\"chude-4\"</code>", "<code>href=\"#chude-4\"</code>", "<code>href=\".chude-4\"</code>", "<code>href=\"@chude-4\"</code>"],
        correctIndex: 1,
        explain: "Trong HTML, dấu thăng <code>#</code> đứng trước tên ID để biểu diễn liên kết neo nội bộ (Bookmark anchor) trong cùng trang web."
      },
      {
        q: "Đoạn mã nào sau đây tạo ra liên kết mở trình quản lý email để gửi thư trực tiếp cho địa chỉ contact@example.com?",
        options: ["<code>&lt;a href=\"email:contact@example.com\"&gt;</code>", "<code>&lt;a href=\"mailto:contact@example.com\"&gt;</code>", "<code>&lt;a href=\"send:contact@example.com\"&gt;</code>", "<code>&lt;a href=\"mail:contact@example.com\"&gt;</code>"],
        correctIndex: 1,
        explain: "Giao thức <code>mailto:</code> kích hoạt ứng dụng email mặc định trên thiết bị của người dùng với địa chỉ nhận được điền sẵn."
      }
    ]
  },

  // ================= BÀI 11 =================
  {
    num: 11,
    topicNum: 4,
    title: "Bài 11: Chèn hình ảnh và đa phương tiện vào trang web",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Sử dụng thành thạo thẻ đơn `<img>` với thuộc tính `src`, `alt`, `width`; Chèn âm thanh chuẩn HTML5 với thẻ `<audio controls>`; Chèn video với `<video controls>`; Nhúng bản đồ và video YouTube an toàn qua thẻ khung nội tuyến `<iframe>`.",
    intro: "Một trang web sinh động không thể chỉ có chữ văn bản khô khan. Làm thế nào để chèn hình ảnh minh họa chất lượng cao, bài hát MP3, video bài giảng MP4 hay nhúng bản đồ trường học?",
    sections: [
      {
        title: "1. Chèn hình ảnh với thẻ đơn &lt;img&gt;",
        content: `
          <p class="mb-2">Thẻ <code>&lt;img&gt;</code> là thẻ đơn tự đóng không có nội dung văn bản bên trong, có các thuộc tính then chốt:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm mb-1">
                Các thuộc tính cốt lõi của thẻ &lt;img&gt;
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>src (source):</strong> Đường dẫn tới tệp ảnh (ảnh nội bộ <code>images/logo.png</code> hoặc URL mạng).</li>
                <li><strong>alt (alternative text):</strong> Đoạn văn bản mô tả thay thế khi ảnh bị lỗi tải, đặc biệt quan trọng cho công cụ tìm kiếm SEO và máy đọc màn hình người khiếm thị.</li>
                <li><strong>width / height:</strong> Chiều rộng và chiều cao (tính bằng pixel px hoặc phần trăm %).</li>
              </ul>
            </div>
            <div class="p-3.5 bg-gray-900 text-gray-100 rounded-xl font-mono text-xs flex flex-col justify-center">
              <span class="text-gray-400">&lt;!-- Cú pháp chuẩn chèn ảnh: --&gt;</span><br>
              <span class="text-blue-400">&lt;img</span> <br>
              &nbsp;&nbsp;<span class="text-amber-400">src</span>=<span class="text-emerald-400">"images/thap-rua.jpg"</span><br>
              &nbsp;&nbsp;<span class="text-amber-400">alt</span>=<span class="text-emerald-400">"Hình ảnh Tháp Rùa Hồ Gươm Hà Nội"</span><br>
              &nbsp;&nbsp;<span class="text-amber-400">width</span>=<span class="text-emerald-400">"600"</span><span class="text-blue-400">&gt;</span>
            </div>
          </div>
        `
      },
      {
        title: "2. Chèn Âm thanh (&lt;audio&gt;) và Video (&lt;video&gt;) chuẩn HTML5",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                Thẻ âm thanh &lt;audio controls&gt;
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">
                Thuộc tính <code>controls</code> bắt buộc để hiển thị thanh phát, dừng, thanh âm lượng:
              </p>
              <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
                &lt;audio controls&gt;<br>
                &nbsp;&nbsp;&lt;source src="audio/baihat.mp3" type="audio/mpeg"&gt;<br>
                &nbsp;&nbsp;Trình duyệt không hỗ trợ audio.<br>
                &lt;/audio&gt;
              </div>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1">
                Thẻ video &lt;video controls&gt;
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">
                Hỗ trợ định dạng MP4, WebM; có thể thêm <code>poster="thumbnail.jpg"</code>:
              </p>
              <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
                &lt;video width="480" controls&gt;<br>
                &nbsp;&nbsp;&lt;source src="video/intro.mp4" type="video/mp4"&gt;<br>
                &nbsp;&nbsp;Trình duyệt không hỗ trợ video.<br>
                &lt;/video&gt;
              </div>
            </div>
          </div>
        `
      },
      {
        title: "3. Nhúng khung nội tuyến với thẻ &lt;iframe&gt;",
        content: `
          <p class="mb-2">Thẻ <code>&lt;iframe&gt;</code> (Inline Frame) cho phép nhúng một trang web khác hoặc dịch vụ bên ngoài vào trang của mình:</p>
          <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
            <span class="text-gray-400">&lt;!-- Nhúng video từ YouTube: --&gt;</span><br>
            &lt;iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
          </div>
        `
      }
    ],
    practice: [
      "Tải một hình ảnh phong cảnh về máy, đặt trong thư mục `images/` và chèn vào trang HTML có đầy đủ thuộc tính `src`, `alt`, `width`.",
      "Tải tệp âm thanh MP3 ngắn và chèn vào trang web bằng thẻ `<audio controls>`.",
      "Lên Google Maps, tìm kiếm vị trí trường học của em, chọn chức năng Chia sẻ &rarr; Nhúng bản đồ và sao chép mã `<iframe>` dán vào trang web."
    ],
    summary: "Thẻ <img> chèn hình ảnh với src (đường dẫn) và alt (mô tả thay thế bắt buộc). Thẻ <audio controls> và <video controls> hỗ trợ phát đa phương tiện trực tiếp trên trình duyệt mà không cần plugin bên ngoài. Thẻ <iframe> dùng để nhúng video YouTube hoặc bản đồ Google Maps.",
    quizzes: [
      {
        q: "Thuộc tính nào của thẻ <code>&lt;img&gt;</code> bắt buộc phải có để cung cấp văn bản mô tả thay thế khi ảnh bị lỗi mạng hoặc cho người dùng khiếm thị?",
        options: ["<code>title</code>", "<code>alt</code>", "<code>desc</code>", "<code>caption</code>"],
        correctIndex: 1,
        explain: "Thuộc tính <code>alt</code> (Alternative text) mô tả nội dung bức ảnh, bắt buộc theo tiêu chuẩn trợ năng W3C và SEO web."
      },
      {
        q: "Nếu không có thuộc tính nào sau đây trong thẻ <code>&lt;audio&gt;</code> hoặc <code>&lt;video&gt;</code>, người dùng sẽ không nhìn thấy các nút Play, Pause hay thanh trượt âm lượng?",
        options: ["<code>autoplay</code>", "<code>controls</code>", "<code>loop</code>", "<code>muted</code>"],
        correctIndex: 1,
        explain: "Thuộc tính <code>controls</code> ra lệnh cho trình duyệt hiển thị giao diện điều khiển đa phương tiện (phát, dừng, âm lượng)."
      },
      {
        q: "Thẻ HTML nào được sử dụng để nhúng một cửa sổ chứa video YouTube hoặc bản đồ Google Maps tương tác vào trang web của bạn?",
        options: ["<code>&lt;embed&gt;</code>", "<code>&lt;iframe&gt;</code>", "<code>&lt;object&gt;</code>", "<code>&lt;frame&gt;</code>"],
        correctIndex: 1,
        explain: "<code>&lt;iframe&gt;</code> (Inline Frame) nhúng các trang hoặc dịch vụ bên ngoài trực tiếp vào trang web hiện tại."
      },
      {
        q: "Định dạng tệp video nào được hầu hết các trình duyệt hiện đại (Chrome, Edge, Safari, Firefox) hỗ trợ tốt nhất trên nền web?",
        options: ["AVI", "MP4 (chuẩn H.264/AAC)", "FLV", "WMV"],
        correctIndex: 1,
        explain: "Định dạng MP4 với codec video H.264 và âm thanh AAC là chuẩn nén video tương thích cao nhất trên toàn bộ trình duyệt web hiện nay."
      }
    ]
  },

  // ================= BÀI 12 =================
  {
    num: 12,
    topicNum: 4,
    title: "Bài 12: Biểu mẫu (Form) trong HTML",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Xây dựng biểu mẫu thu thập dữ liệu bằng thẻ `<form>`; Nắm vững các loại ô nhập liệu `<input>` thông dụng (text, password, email, radio, checkbox, submit); Sử dụng thẻ `<textarea>`, `<select>` và thẻ nhãn `<label>`.",
    intro: "Làm thế nào để các trang thương mại điện tử thu thập thông tin đặt hàng, đăng ký tài khoản hay nhận form khảo sát từ hàng triệu người dùng trực tuyến?",
    sections: [
      {
        title: "1. Thẻ &lt;form&gt; và các thuộc tính điều khiển",
        content: `
          <p class="mb-3">
            Thẻ <code>&lt;form&gt;</code> tạo vùng chứa các phần tử điều khiển giao diện giúp người dùng nhập và gửi dữ liệu về máy chủ (Server).
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm mb-1">Thuộc tính action</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Chỉ định địa chỉ URL của trang xử lý dữ liệu ở máy chủ khi người dùng nhấn nút Gửi (Submit). Ví dụ: <code>action="xuly_dangky.php"</code>.
              </p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1">Thuộc tính method (GET vs POST)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                - <strong>GET:</strong> Dữ liệu gửi gắn kèm trên thanh địa chỉ URL (thích hợp cho form tìm kiếm, không bảo mật).<br>
                - <strong>POST:</strong> Dữ liệu gửi ẩn trong phần thân HTTP body (bảo mật, bắt buộc cho mật khẩu, form thanh toán).
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Các thành phần nhập liệu cốt lõi trong biểu mẫu",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm mb-1.5">
                Các kiểu của thẻ đơn &lt;input&gt;
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
                <div><code>type="text"</code>: Nhập văn bản một dòng ngắn.</div>
                <div><code>type="password"</code>: Nhập mật khẩu (ký tự bị ẩn thành dấu chấm).</div>
                <div><code>type="email"</code>: Nhập email (tự động kiểm tra cú pháp có @).</div>
                <div><code>type="number"</code>: Nhập số (có nút tăng giảm).</div>
                <div><code>type="radio"</code>: Chọn 1 trong nhiều phương án (cùng name).</div>
                <div><code>type="checkbox"</code>: Chọn nhiều phương án cùng lúc.</div>
                <div><code>type="submit"</code>: Nút gửi toàn bộ dữ liệu form đi.</div>
                <div><code>type="reset"</code>: Nút xóa trắng làm lại form.</div>
              </div>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300 space-y-1.5">
              <div><code>&lt;textarea rows="4" cols="50"&gt;</code>: Ô nhập văn bản nhiều dòng (dùng cho lời nhắn, nhận xét, ý kiến).</div>
              <div><code>&lt;select&gt; &lt;option&gt;...&lt;/option&gt; &lt;/select&gt;</code>: Hộp danh sách thả xuống chọn tỉnh thành, quốc gia.</div>
              <div><code>&lt;label for="id_input"&gt;</code>: Nhãn văn bản liên kết với ô nhập liệu, bấm vào chữ sẽ tự động kích hoạt con trỏ vào ô nhập.</div>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Xây dựng form đăng ký tài khoản thành viên mới gồm: Họ tên, Email, Mật khẩu, Giới tính (radio), Sở thích (checkbox).",
      "Thêm hộp danh sách `<select>` để người dùng chọn Khóa học quan tâm và `<textarea>` để nhập ghi chú.",
      "Gán thẻ `<label for=\"...\">` cho tất cả các ô nhập liệu và kiểm tra tính năng nhấp chuột vào nhãn chữ."
    ],
    summary: "Thẻ <form action=\"...\" method=\"POST\"> tạo biểu mẫu thu thập dữ liệu. Thẻ <input> cung cấp nhiều kiểu nhập liệu (text, password, email, radio, checkbox, submit). Thẻ <textarea> nhập nhiều dòng, <select> tạo danh sách chọn thả xuống, <label> tăng tính tiện dụng.",
    quizzes: [
      {
        q: "Phương thức truyền dữ liệu nào trong form HTML gửi dữ liệu ngầm trong phần thân HTTP Request, đảm bảo an toàn cho thông tin nhạy cảm như mật khẩu?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctIndex: 1,
        explain: "Phương thức POST gửi dữ liệu ẩn trong HTTP request body, không hiển thị trên URL của trình duyệt như GET."
      },
      {
        q: "Để các nút chọn tròn Radio Button hoạt động đúng (chỉ cho phép người dùng chọn duy nhất 1 trong các phương án), các thẻ đó phải có chung thuộc tính nào?",
        options: ["Chung thuộc tính <code>id</code>", "Chung thuộc tính <code>name</code>", "Chung thuộc tính <code>value</code>", "Chung thuộc tính <code>class</code>"],
        correctIndex: 1,
        explain: "Các nút radio có cùng thuộc tính <code>name</code> sẽ được gom vào cùng một nhóm, đảm bảo chỉ 1 phương án được chọn."
      },
      {
        q: "Thẻ nào được sử dụng để tạo một ô nhập văn bản rộng nhiều dòng (thường dùng để viết nhận xét, phản hồi hoặc địa chỉ chi tiết)?",
        options: ["<code>&lt;input type=\"multiline\"&gt;</code>", "<code>&lt;textarea&gt;</code>", "<code>&lt;textbox&gt;</code>", "<code>&lt;text&gt;</code>"],
        correctIndex: 1,
        explain: "<code>&lt;textarea&gt;</code> tạo vùng nhập văn bản lớn nhiều dòng, có thể chỉnh kích thước bằng <code>rows</code> và <code>cols</code>."
      },
      {
        q: "Thuộc tính nào của thẻ <code>&lt;input&gt;</code> quy định dòng chữ mờ gợi ý xuất hiện trong ô nhập liệu và biến mất khi người dùng bắt đầu gõ chữ?",
        options: ["<code>value</code>", "<code>placeholder</code>", "<code>hint</code>", "<code>text</code>"],
        correctIndex: 1,
        explain: "<code>placeholder</code> hiển thị văn bản gợi ý mờ bên trong ô nhập liệu (ví dụ: 'Nhập địa chỉ email của bạn...')."
      }
    ]
  },

  // ================= BÀI 13 =================
  {
    num: 13,
    topicNum: 4,
    title: "Bài 13: Giới thiệu về CSS và các cách nhúng CSS",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Hiểu được vai trò của CSS trong việc định dạng giao diện website; Nắm vững cú pháp quy tắc CSS (Selector, Property, Value); Phân biệt 3 cách nhúng CSS (Inline, Internal, External); Hiểu cơ chế xếp chồng và độ ưu tiên (Cascade & Specificity).",
    intro: "Nếu HTML là bộ khung xương của một ngôi nhà, thì CSS chính là lớp sơn tường, gạch ốp, cửa sổ và đồ trang trí nội thất biến ngôi nhà thành một kiệt tác thẩm mỹ. CSS vận hành như thế nào?",
    sections: [
      {
        title: "1. Khái niệm và Cú pháp quy tắc CSS",
        content: `
          <p class="mb-3">
            <strong>CSS (Cascading Style Sheets):</strong> Là ngôn ngữ định kiểu theo tầng được sử dụng để mô tả cách các phần tử HTML sẽ hiển thị trên màn hình (màu sắc, phông chữ, khoảng cách, kích thước và bố cục).
          </p>
          <div class="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs my-3">
            <span class="text-blue-400">h1</span> <span class="text-gray-300">{</span> <span class="text-gray-500">/* h1 là Bộ chọn (Selector) */</span><br>
            &nbsp;&nbsp;<span class="text-amber-400">color</span>: <span class="text-emerald-400">#2563eb</span>; <span class="text-gray-500">/* Thuộc tính: Giá trị */</span><br>
            &nbsp;&nbsp;<span class="text-amber-400">font-size</span>: <span class="text-emerald-400">28px</span>;<br>
            &nbsp;&nbsp;<span class="text-amber-400">text-align</span>: <span class="text-emerald-400">center</span>;<br>
            <span class="text-gray-300">}</span>
          </div>
        `
      },
      {
        title: "2. Ba phương pháp nhúng CSS vào trang web",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-rose-600 dark:text-rose-400 text-xs sm:text-sm mb-1">1. Inline CSS (Nội dòng)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">Viết trực tiếp vào thuộc tính <code>style</code> của từng thẻ:</p>
              <code class="text-[11px] font-mono block bg-gray-900 text-gray-100 p-1.5 rounded">&lt;h1 style="color: red;"&gt;</code>
              <p class="text-[10px] text-gray-500 mt-1">Ưu tiên cao nhất nhưng khó quản lý, không nên lạm dụng.</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-amber-600 dark:text-amber-400 text-xs sm:text-sm mb-1">2. Internal CSS (Nội bộ)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">Viết trong cặp thẻ <code>&lt;style&gt;</code> đặt tại phần <code>&lt;head&gt;</code>:</p>
              <code class="text-[11px] font-mono block bg-gray-900 text-gray-100 p-1.5 rounded">&lt;style&gt; p { color: blue; } &lt;/style&gt;</code>
              <p class="text-[10px] text-gray-500 mt-1">Định dạng cho duy nhất 1 trang HTML hiện tại.</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-1">3. External CSS (Ngoại tuyến)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">Viết trong tệp riêng <code>style.css</code> và liên kết qua:</p>
              <code class="text-[11px] font-mono block bg-gray-900 text-gray-100 p-1.5 rounded">&lt;link rel="stylesheet" href="style.css"&gt;</code>
              <p class="text-[10px] text-emerald-600 font-bold mt-1">Cách tối ưu nhất, tái sử dụng cho hàng trăm trang.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Tạo tệp `style.css` riêng và định dạng màu chữ xanh dương cho `<h1>`, căn giữa cho toàn bộ trang web.",
      "Liên kết tệp `style.css` vào tệp `index.html` bằng thẻ `<link rel=\"stylesheet\" href=\"style.css\">` trong phần `<head>`.",
      "Thực hiện thử nghiệm độ ưu tiên: Đặt màu đỏ bằng Inline CSS cho một thẻ `<p>` và màu xanh bằng External CSS, quan sát màu sắc thực tế hiển thị trên trình duyệt."
    ],
    summary: "CSS dùng định kiểu giao diện web. Cú pháp gồm Selector { property: value; }. Có 3 cách nhúng: Inline (trong thuộc tính style), Internal (trong thẻ <style>), External (trong tệp .css riêng liên kết qua thẻ <link>). External CSS là phương pháp chuẩn và chuyên nghiệp nhất.",
    quizzes: [
      {
        q: "Phương pháp nào sau đây là cách tốt nhất, chuyên nghiệp nhất để nhúng CSS cho các dự án website có nhiều trang?",
        options: ["Inline CSS", "Internal CSS", "External CSS (Tệp .css riêng)", "Viết trực tiếp vào thẻ <body>"],
        correctIndex: 2,
        explain: "External CSS tách biệt hoàn toàn giữa cấu trúc nội dung (HTML) và giao diện hiển thị (CSS), cho phép tái sử dụng kiểu dáng cho toàn bộ website."
      },
      {
        q: "Thẻ HTML nào được đặt trong phần <code>&lt;head&gt;</code> để liên kết tài liệu HTML với tệp định dạng External CSS bên ngoài?",
        options: ["<code>&lt;script&gt;</code>", "<code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code>", "<code>&lt;css&gt;</code>", "<code>&lt;style src=\"style.css\"&gt;</code>"],
        correctIndex: 1,
        explain: "Cú pháp chuẩn để liên kết tệp CSS là thẻ <code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code> đặt trong phần <code>&lt;head&gt;</code>."
      },
      {
        q: "Trong cú pháp quy tắc CSS <code>p { color: red; }</code>, phần tử <code>p</code> được gọi là gì?",
        options: ["Giá trị (Value)", "Thuộc tính (Property)", "Bộ chọn (Selector)", "Hàm (Function)"],
        correctIndex: 2,
        explain: "<code>p</code> là Bộ chọn (Selector), chỉ định phần tử HTML nào sẽ chịu tác động của quy tắc định dạng bên trong dấu ngoặc nhọn."
      },
      {
        q: "Nếu một phần tử vừa được định dạng màu xanh bằng External CSS, vừa có thuộc tính <code>style=\"color: red;\"</code> (Inline CSS), màu nào sẽ được ưu tiên hiển thị?",
        options: ["Màu xanh của External CSS", "Màu đỏ của Inline CSS", "Trình duyệt báo lỗi", "Màu đen mặc định"],
        correctIndex: 1,
        explain: "Theo độ ưu tiên của cơ chế Cascade, Inline CSS có độ ưu tiên (specificity) cao hơn External CSS và Internal CSS."
      }
    ]
  },

  // ================= BÀI 14 =================
  {
    num: 14,
    topicNum: 4,
    title: "Bài 14: Định dạng văn bản và màu sắc với CSS",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Sử dụng thành thạo các thuộc tính màu sắc (`color`, `background-color`) theo các hệ màu HEX, RGB, RGBA; Thiết lập phông chữ (`font-family`, `font-size`, `font-weight`); Căn chỉnh văn bản (`text-align`, `line-height`, `text-decoration`).",
    intro: "Màu sắc tạo nên cảm xúc, phông chữ tạo nên cá tính thương hiệu. Làm sao để chọn một bộ màu hiện đại và phông chữ tiếng Việt sắc nét cho trang web?",
    sections: [
      {
        title: "1. Các hệ màu trong CSS (Colors)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm mb-1">Các cách biểu diễn màu sắc</h5>
              <div><strong>1. Tên màu tiếng Anh:</strong> <code>red</code>, <code>blue</code>, <code>white</code>, <code>transparent</code>.</div>
              <div><strong>2. Mã màu thập lục phân (HEX):</strong> Dấu <code>#</code> theo sau 6 ký tự hex (RGB). Ví dụ: <code>#2563eb</code> (xanh dương), <code>#ffffff</code> (trắng), <code>#000000</code> (đen).</div>
              <div><strong>3. Hệ màu RGB:</strong> <code>rgb(đỏ, lục, lam)</code> giá trị từ 0 đến 255. Ví dụ: <code>rgb(37, 99, 235)</code>.</div>
              <div><strong>4. Hệ màu RGBA:</strong> Bổ sung thêm kênh Alpha (độ trong suốt từ 0.0 đến 1.0). Ví dụ: <code>rgba(0, 0, 0, 0.5)</code> tạo màu đen mờ 50%.</div>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1">Thuộc tính màu văn bản và nền</h5>
              <div><code>color: #1e293b;</code> &rarr; Đổi màu chữ của văn bản.</div>
              <div><code>background-color: #f8fafc;</code> &rarr; Đổi màu nền của khối phần tử.</div>
            </div>
          </div>
        `
      },
      {
        title: "2. Thuộc tính Typography định dạng phông chữ và căn lề",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Thuộc tính CSS</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Ý nghĩa & Giá trị thông dụng</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Ví dụ minh họa</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr>
                  <td class="p-2 font-mono"><code>font-family</code></td>
                  <td class="p-2">Họ phông chữ (kèm danh sách phông dự phòng Fallback fonts)</td>
                  <td class="p-2 font-mono"><code>font-family: 'Inter', Arial, sans-serif;</code></td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>font-size</code></td>
                  <td class="p-2">Kích thước chữ (px, rem, em)</td>
                  <td class="p-2 font-mono"><code>font-size: 16px; font-size: 1.25rem;</code></td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>font-weight</code></td>
                  <td class="p-2">Độ đậm của chữ (normal, bold, 100 đến 900)</td>
                  <td class="p-2 font-mono"><code>font-weight: 700; (tương đương bold)</code></td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>text-align</code></td>
                  <td class="p-2">Căn chỉnh lề văn bản (left, right, center, justify)</td>
                  <td class="p-2 font-mono"><code>text-align: center;</code> (căn giữa)</td>
                </tr>
                <tr>
                  <td class="p-2 font-mono"><code>line-height</code></td>
                  <td class="p-2">Chiều cao dòng, khoảng cách giữa các dòng văn bản</td>
                  <td class="p-2 font-mono"><code>line-height: 1.6;</code> (giúp đọc văn bản thoáng mắt)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Thiết lập phông chữ `Arial, Helvetica, sans-serif` cho toàn bộ thẻ `<body>` trong tệp `style.css`.",
      "Định dạng màu chữ xanh navy `#1e3a8a` và căn giữa `text-align: center` cho thẻ `<h1>`.",
      "Định dạng đoạn văn bản `<p>` với kích thước `16px`, màu xám đậm `#374151` và khoảng cách dòng `line-height: 1.6`."
    ],
    summary: "CSS hỗ trợ màu sắc qua tên, mã HEX (#RRGGBB), RGB và RGBA (có độ trong suốt). Định dạng phông chữ qua font-family, font-size, font-weight; căn chỉnh lề văn bản qua text-align và line-height.",
    quizzes: [
      {
        q: "Thuộc tính CSS nào được dùng để thay đổi màu sắc của chữ (văn bản)?",
        options: ["<code>text-color</code>", "<code>color</code>", "<code>font-color</code>", "<code>background-color</code>"],
        correctIndex: 1,
        explain: "Thuộc tính <code>color</code> dùng để đổi màu chữ; <code>background-color</code> dùng để đổi màu nền."
      },
      {
        q: "Trong hệ màu RGBA <code>rgba(255, 0, 0, 0.5)</code>, tham số cuối cùng <code>0.5</code> thể hiện điều gì?",
        options: ["Độ sáng", "Độ trong suốt (Alpha) 50%", "Độ bão hòa màu", "Kích thước phông chữ"],
        correctIndex: 1,
        explain: "Chữ 'A' trong RGBA là kênh Alpha quy định độ trong suốt từ 0 (hoàn toàn vô hình) đến 1 (đặc hoàn toàn)."
      },
      {
        q: "Thuộc tính CSS nào dùng để tăng khoảng cách giữa các dòng văn bản trong một đoạn văn giúp người đọc dễ nhìn hơn?",
        options: ["<code>letter-spacing</code>", "<code>word-spacing</code>", "<code>line-height</code>", "<code>font-space</code>"],
        correctIndex: 2,
        explain: "<code>line-height</code> kiểm soát khoảng cách chiều cao của từng dòng văn bản (chiều cao dòng)."
      },
      {
        q: "Để căn giữa một tiêu đề <code>&lt;h2&gt;</code> theo chiều ngang của trang web, ta sử dụng quy tắc nào?",
        options: ["<code>align: center;</code>", "<code>text-align: center;</code>", "<code>font-align: center;</code>", "<code>margin: center;</code>"],
        correctIndex: 1,
        explain: "<code>text-align: center;</code> căn giữa nội dung văn bản và phần tử inline bên trong khối chứa."
      }
    ]
  },

  // ================= BÀI 15 =================
  {
    num: 15,
    topicNum: 4,
    title: "Bài 15: Mô hình hộp (CSS Box Model)",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Làm chủ 4 thành phần của mô hình hộp CSS (Content, Padding, Border, Margin); Hiểu cách tính tổng chiều rộng/cao thực tế của phần tử; Sử dụng thuộc tính giải cứu hiện đại `box-sizing: border-box`.",
    intro: "Tại sao khi đặt width: 300px cho một cái hộp, sau khi thêm viền và đệm, cái hộp lại bị phình to thành 350px làm vỡ cả giao diện trang web? Mô hình hộp CSS sẽ giải mã bí mật này.",
    sections: [
      {
        title: "1. Bốn thành phần cấu thành mô hình hộp CSS",
        content: `
          <p class="mb-3">Trong CSS, mọi phần tử HTML đều được trình duyệt coi như một chiếc hộp hình chữ nhật gồm 4 lớp bao bọc nhau từ trong ra ngoài:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <span class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase block mb-1">1. Content (Nội dung)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Nơi chứa văn bản, hình ảnh thực tế của phần tử. Điều chỉnh bằng <code>width</code> và <code>height</code>.</p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <span class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase block mb-1">2. Padding (Khoảng đệm)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Khoảng cách từ nội dung đến đường viền Border. Tạo độ thoáng bên trong hộp.</p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <span class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm uppercase block mb-1">3. Border (Đường viền)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Đường viền bao bọc bên ngoài Padding. Cú pháp: <code>border: 1px solid #ccc;</code>.</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <span class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase block mb-1">4. Margin (Khoảng lề)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Khoảng trống ngoài cùng ngăn cách giữa phần tử này với các phần tử khác xung quanh.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Thuộc tính chuẩn hóa box-sizing: border-box",
        content: `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm">
              Sự khác biệt giữa content-box (mặc định) và border-box:
            </h5>
            <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li><strong>content-box:</strong> Tổng chiều rộng = <code>width</code> + <code>padding</code> + <code>border</code> (hộp bị phình to khi thêm padding).</li>
              <li><strong>border-box:</strong> Tổng chiều rộng luôn bằng đúng giá trị <code>width</code> đã đặt (Padding và Border được tính gọn vào bên trong).</li>
            </ul>
            <div class="bg-gray-900 text-gray-100 p-2.5 rounded font-mono text-xs">
              <span class="text-gray-400">/* Quy tắc vàng của lập trình viên web hiện đại: */</span><br>
              * { box-sizing: border-box; }
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Tạo một thẻ `<div>` có `width: 300px`, `background-color: lightblue`, thêm `padding: 20px` và `border: 5px solid blue`.",
      "Dùng công cụ Inspect (F12) của trình duyệt để kiểm tra sơ đồ Box Model trực quan và xem kích thước thực tế của thẻ `<div>`.",
      "Thêm quy tắc `box-sizing: border-box;` và quan sát kích thước thẻ trở về đúng chuẩn 300px."
    ],
    summary: "Mọi phần tử HTML đều tuân theo CSS Box Model gồm 4 thành phần từ trong ra ngoài: Content (nội dung), Padding (đệm), Border (viền), Margin (lề). Luôn đặt box-sizing: border-box để việc tính toán kích thước giao diện chuẩn xác và không bị vỡ bố cục.",
    quizzes: [
      {
        q: "Thành phần nào trong mô hình hộp CSS là khoảng cách đệm nằm giữa nội dung (Content) và đường viền (Border)?",
        options: ["Margin", "Padding", "Outline", "Space"],
        correctIndex: 1,
        explain: "Padding là khoảng không gian đệm bên trong hộp, nằm giữa vùng nội dung thực tế và đường viền bao quanh."
      },
      {
        q: "Thành phần nào là khoảng lề nằm bên ngoài đường viền Border, dùng để tạo khoảng cách giữa hộp này với các hộp lân cận?",
        options: ["Padding", "Margin", "Content", "Border-radius"],
        correctIndex: 1,
        explain: "Margin là khoảng lề bên ngoài, tạo khoảng trống ngăn cách các phần tử lân cận trên trang web."
      },
      {
        q: "Thuộc tính CSS nào giúp cố định kích thước phần tử (chiều rộng bao gồm cả Padding và Border), tránh hiện tượng hộp bị phình to khi thêm đệm?",
        options: ["<code>box-sizing: border-box;</code>", "<code>box-sizing: content-box;</code>", "<code>display: inline-block;</code>", "<code>overflow: hidden;</code>"],
        correctIndex: 0,
        explain: "<code>box-sizing: border-box;</code> tính toán cả padding và border vào trong kích thước <code>width</code> và <code>height</code> được gán."
      },
      {
        q: "Nếu một phần tử có <code>width: 200px</code>, <code>padding: 20px</code> (hai bên là 40px), <code>border: 5px</code> (hai bên là 10px) và dùng <code>box-sizing: content-box</code> mặc định, tổng chiều rộng thực tế của phần tử là bao nhiêu?",
        options: ["200px", "225px", "250px", "240px"],
        correctIndex: 2,
        explain: "Theo content-box: Tổng rộng = 200 (width) + 20*2 (padding trái/phải) + 5*2 (border trái/phải) = 250px."
      }
    ]
  },

  // ================= BÀI 16 =================
  {
    num: 16,
    topicNum: 4,
    title: "Bài 16: Định dạng bảng và biểu mẫu với CSS",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Áp dụng thuộc tính `border-collapse: collapse` để làm mịn đường viền bảng; Tạo hiệu ứng màu nền xen kẽ (Zebra stripes) và hiệu ứng hover; Định dạng các ô nhập liệu Form hiện đại (`border-radius`, `focus`).",
    intro: "Bảng dữ liệu và Form HTML mặc định của trình duyệt trông rất thô sơ và cổ điển. Bằng vài dòng CSS, chúng ta có thể biến chúng thành giao diện bảng biểu và biểu mẫu đăng nhập lung linh như thế nào?",
    sections: [
      {
        title: "1. Tùy biến bảng dữ liệu hiện đại với CSS",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm mb-1">Các thuộc tính định dạng Table</h5>
              <div><code>border-collapse: collapse;</code> &rarr; Gộp các đường viền đôi bị hở thành một đường viền đơn thanh lịch.</div>
              <div><code>th, td { padding: 12px; }</code> &rarr; Tạo khoảng cách rộng rãi cho các ô dữ liệu.</div>
              <div><code>tr:nth-child(even)</code> &rarr; Tạo màu nền xen kẽ (Zebra stripes) giúp dễ đọc bảng dài.</div>
              <div><code>tr:hover { background-color: #f1f5f9; }</code> &rarr; Làm nổi bật hàng khi di chuột qua.</div>
            </div>
            <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
              table {<br>
              &nbsp;&nbsp;width: 100%;<br>
              &nbsp;&nbsp;border-collapse: collapse;<br>
              }<br>
              th {<br>
              &nbsp;&nbsp;background-color: #2563eb;<br>
              &nbsp;&nbsp;color: white;<br>
              &nbsp;&nbsp;padding: 10px;<br>
              }
            </div>
          </div>
        `
      },
      {
        title: "2. Định dạng biểu mẫu (Form) chuyên nghiệp",
        content: `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm">
              Định dạng ô nhập liệu và nút bấm đẹp mắt:
            </h5>
            <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li>Bo tròn góc mềm mại: <code>border-radius: 8px;</code></li>
              <li>Hiệu ứng khi người dùng nhấp chuột vào ô nhập (Focus state):
                <code class="block font-mono bg-gray-900 text-gray-100 p-2 rounded mt-1">
                  input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 5px rgba(37,99,235,0.5); }
                </code>
              </li>
              <li>Nút gửi Submit có hiệu ứng chuyển màu và đổi con trỏ chuột <code>cursor: pointer</code>.</li>
            </ul>
          </div>
        `
      }
    ],
    practice: [
      "Áp dụng `border-collapse: collapse;` và gán màu nền xen kẽ `tr:nth-child(even)` cho bảng thời khóa biểu đã tạo ở Bài 9.",
      "Thiết kế một form đăng nhập gồm 2 ô nhập (Email, Mật khẩu) với đường viền bo tròn `border-radius: 8px` và hiệu ứng `input:focus` đổi viền xanh.",
      "Thêm nút bấm 'Đăng nhập ngay' với màu nền gradient và hiệu ứng di chuột `button:hover` đổi màu nhẹ."
    ],
    summary: "Dùng border-collapse: collapse để gộp viền bảng thành đường nét thanh mảnh. Sử dụng :nth-child(even) tô màu xen kẽ và :hover làm nổi bật hàng. Định dạng Form với padding, border-radius và trạng thái :focus đem lại trải nghiệm mượt mà cho người dùng.",
    quizzes: [
      {
        q: "Thuộc tính CSS nào giúp loại bỏ khoảng cách thừa giữa các đường viền ô trong bảng, gộp chúng lại thành đường viền đơn gọn gàng?",
        options: ["<code>border-spacing: 0;</code>", "<code>border-collapse: collapse;</code>", "<code>table-layout: fixed;</code>", "<code>border-style: solid;</code>"],
        correctIndex: 1,
        explain: "<code>border-collapse: collapse;</code> là thuộc tính tiêu chuẩn gộp các đường viền riêng lẻ của các ô trong bảng thành một đường duy nhất."
      },
      {
        q: "Bộ chọn giả (pseudo-class) nào trong CSS được dùng để áp dụng màu nền xen kẽ cho các hàng chẵn trong bảng dữ liệu?",
        options: ["<code>tr:odd</code>", "<code>tr:nth-child(even)</code>", "<code>tr:alternate</code>", "<code>tr:zebra</code>"],
        correctIndex: 1,
        explain: "<code>tr:nth-child(even)</code> chọn tất cả các phần tử con ở vị trí chẵn (2, 4, 6...), rất tiện để tạo kiểu Zebra striping."
      },
      {
        q: "Trạng thái giả lập nào được kích hoạt khi người dùng nhấp chuột hoặc bấm phím Tab đưa con trỏ vào bên trong một ô nhập <code>&lt;input&gt;</code>?",
        options: ["<code>:hover</code>", "<code>:active</code>", "<code>:focus</code>", "<code>:visited</code>"],
        correctIndex: 2,
        explain: "<code>:focus</code> đại diện cho trạng thái phần tử đang nhận sự chú ý tương tác từ bàn phím hoặc con trỏ chuột."
      },
      {
        q: "Để đổi con trỏ chuột thành hình 'bàn tay chỉ ngón' khi người dùng rê chuột qua nút bấm trong form, ta sử dụng thuộc tính nào?",
        options: ["<code>cursor: pointer;</code>", "<code>pointer: hand;</code>", "<code>mouse: click;</code>", "<code>hover: pointer;</code>"],
        correctIndex: 0,
        explain: "<code>cursor: pointer;</code> biến con trỏ chuột thành biểu tượng bàn tay, báo hiệu đây là thành phần có thể bấm được."
      }
    ]
  },

  // ================= BÀI 17 =================
  {
    num: 17,
    topicNum: 4,
    title: "Bài 17: Định vị phần tử trong CSS (Positioning)",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Hiểu và phân biệt được 5 giá trị của thuộc tính `position`: `static`, `relative`, `absolute`, `fixed`, `sticky`; Sử dụng các thuộc tính tọa độ `top`, `bottom`, `left`, `right`; Quản lý thứ tự lớp hiển thị đè nhau với `z-index`.",
    intro: "Làm thế nào để thanh menu luôn dính chặt ở mép trên màn hình khi cuộn trang, hoặc một nút 'Chat hỗ trợ' luôn ghim cố định ở góc dưới cùng bên phải màn hình?",
    sections: [
      {
        title: "1. Năm giá trị của thuộc tính position",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-xs sm:text-sm text-gray-900 dark:text-white">1. position: static (Mặc định)</strong>
              <p class="text-xs text-gray-600 dark:text-gray-300">Phần tử hiển thị theo luồng bình thường của trang. Các thuộc tính top, right, bottom, left và z-index không có tác dụng.</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-xs sm:text-sm text-blue-600 dark:text-blue-400">2. position: relative (Tương đối)</strong>
              <p class="text-xs text-gray-600 dark:text-gray-300">Dịch chuyển phần tử so với vị trí ban đầu của chính nó bằng top/bottom/left/right. Vị trí ban đầu của nó vẫn được giữ chỗ trống trên trang.</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">3. position: absolute (Tuyệt đối)</strong>
              <p class="text-xs text-gray-600 dark:text-gray-300">Bị rút khỏi luồng bình thường, định vị chính xác theo phần tử cha gần nhất có <code>position: relative</code> (hoặc thẻ body nếu không có cha nào).</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-xs sm:text-sm text-purple-600 dark:text-purple-400">4. position: fixed (Cố định trên màn hình)</strong>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cố định so với khung nhìn trình duyệt (Viewport), không bị dịch chuyển khi người dùng cuộn trang. Tiêu biểu: Nút Chat Zalo/Messenger ở góc dưới màn hình.</p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-xs sm:text-sm text-amber-600 dark:text-amber-400">5. position: sticky (Dính khi cuộn)</strong>
              <p class="text-xs text-gray-600 dark:text-gray-300">Hoạt động như static khi chưa cuộn tới, nhưng sẽ dính chặt ở mép trên màn hình khi người dùng cuộn vượt qua vị trí quy định (như thanh Navigation header).</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Thứ tự lớp hiển thị chồng đè (z-index)",
        content: `
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 space-y-1">
            <strong>Thuộc tính z-index:</strong> Xác định thứ tự hiển thị của các phần tử đè lên nhau theo trục Z (chiều sâu).<br>
            - Phần tử có giá trị <code>z-index</code> lớn hơn sẽ nổi lên trên phần tử có giá trị nhỏ hơn.<br>
            - <em>Lưu ý:</em> <code>z-index</code> chỉ có tác dụng trên các phần tử có <code>position</code> khác <code>static</code>.
          </div>
        `
      }
    ],
    practice: [
      "Tạo một thanh menu header với `position: sticky; top: 0; z-index: 100;` để khi cuộn bài viết dài, menu vẫn bám dính ở đầu trang.",
      "Tạo một nút 'Hotline / Zalo' cố định ở góc dưới bên phải màn hình bằng `position: fixed; bottom: 20px; right: 20px;`.",
      "Thực hành cặp đôi kinh điển: Phần tử cha có `position: relative`, phần tử con là nhãn 'MỚI' (badge) đặt ở góc trên với `position: absolute; top: -5px; right: -5px;`."
    ],
    summary: "position kiểm soát vị trí phần tử: static (mặc định), relative (dời so với chính nó), absolute (định vị theo cha relative), fixed (cố định trên màn hình khi cuộn), sticky (dính khi cuộn tới). z-index điều khiển lớp hiển thị đè nhau theo chiều sâu.",
    quizzes: [
      {
        q: "Giá trị nào của thuộc tính <code>position</code> làm cho phần tử luôn đứng yên ở một tọa độ cố định trên màn hình trình duyệt ngay cả khi người dùng cuộn trang lên xuống?",
        options: ["<code>static</code>", "<code>relative</code>", "<code>fixed</code>", "<code>sticky</code>"],
        correctIndex: 2,
        explain: "<code>position: fixed</code> định vị phần tử cố định so với cửa sổ trình duyệt (viewport), không bị cuộn theo nội dung trang."
      },
      {
        q: "Để một phần tử con có <code>position: absolute</code> định vị chính xác theo khung của phần tử cha, phần tử cha bắt buộc phải có thuộc tính gì?",
        options: ["<code>position: static</code>", "<code>position: relative</code> (hoặc một position khác static)", "<code>display: none</code>", "<code>float: left</code>"],
        correctIndex: 1,
        explain: "Phần tử absolute sẽ tìm phần tử tổ tiên gần nhất có <code>position</code> khác <code>static</code> (thông dụng nhất là <code>relative</code>) để làm gốc tọa độ."
      },
      {
        q: "Thuộc tính nào điều khiển thứ tự xếp chồng theo chiều sâu (phần tử nào nổi lên trên, phần tử nào chìm xuống dưới) giữa các phần tử?",
        options: ["<code>depth</code>", "<code>layer</code>", "<code>z-index</code>", "<code>level</code>"],
        correctIndex: 2,
        explain: "<code>z-index</code> điều khiển thứ tự lớp theo trục Z vuông góc với màn hình, giá trị số nguyên càng lớn thì nổi lên trên càng cao."
      },
      {
        q: "Thanh điều hướng Navigation của website hoạt động bình thường, nhưng khi cuộn trang tới vị trí của nó thì tự động 'dính' vào mép trên màn hình nhờ giá trị position nào?",
        options: ["<code>position: fixed</code>", "<code>position: sticky</code>", "<code>position: absolute</code>", "<code>position: static</code>"],
        correctIndex: 1,
        explain: "<code>position: sticky</code> kết hợp giữa relative và fixed: giữ vị trí theo luồng tài liệu cho đến khi gặp ngưỡng tọa độ chỉ định (như <code>top: 0</code>) thì dính lại."
      }
    ]
  },

  // ================= BÀI 18 =================
  {
    num: 18,
    topicNum: 4,
    title: "Bài 18: Bố cục trang web với các thẻ ngữ nghĩa HTML5",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Hiểu được tầm quan trọng của các thẻ ngữ nghĩa (Semantic Tags) trong HTML5 so với các thẻ `<div>` vô nghĩa; Nắm vững vị trí và vai trò của: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` trong việc dàn trang hiện đại.",
    intro: "Trước HTML5, các nhà phát triển web phải tạo hàng chục thẻ <div id='header'>, <div id='nav'>, <div id='footer'>. Tại sao HTML5 lại ra đời các thẻ ngữ nghĩa chuyên biệt và chúng giúp ích gì cho SEO?",
    sections: [
      {
        title: "1. Tại sao cần sử dụng thẻ ngữ nghĩa Semantic HTML5?",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-triangle-exclamation"></i> Thời kỳ cũ: Lạm dụng thẻ &lt;div&gt;
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Trang web bị bao bọc bởi hàng trăm thẻ <code>&lt;div&gt;</code> lồng nhau không mang ý nghĩa về mặt nội dung, khiến các công cụ tìm kiếm (Google) và bộ đọc màn hình cho người khiếm thị rất khó xác định đâu là nội dung quan trọng nhất.
              </p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check"></i> Thời kỳ mới: Semantic Tags chuẩn HTML5
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Mỗi thẻ có tên gọi phản ánh chính xác mục đích nội dung mà nó chứa đựng. Giúp mã nguồn sạch sẽ, dễ bảo trì, tăng điểm tối ưu hóa công cụ tìm kiếm (SEO) và hỗ trợ khả năng tiếp cận tiếp thị số toàn cầu.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Cấu trúc bố cục chuẩn của một trang web HTML5",
        content: `
          <div class="space-y-2 my-3">
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-blue-600 font-mono w-24 shrink-0">&lt;header&gt;</span>
              <span>Khu vực đầu trang: Chứa logo thương hiệu, tiêu đề chính của website hoặc phần giới thiệu.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-cyan-600 font-mono w-24 shrink-0">&lt;nav&gt;</span>
              <span>Khu vực điều hướng: Chứa thanh thực đơn (Navigation Bar) với các liên kết chính của website.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-emerald-600 font-mono w-24 shrink-0">&lt;main&gt;</span>
              <span>Nội dung chính: Chứa phần nội dung độc nhất, cốt lõi của trang web (mỗi trang chỉ có duy nhất 1 thẻ main).</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-indigo-600 font-mono w-24 shrink-0">&lt;section&gt;</span>
              <span>Nhóm chuyên mục: Chia nội dung bài viết thành các phân đoạn theo từng chủ đề hoặc đề mục lớn.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-amber-600 font-mono w-24 shrink-0">&lt;article&gt;</span>
              <span>Bài viết độc lập: Chứa nội dung hoàn chỉnh có thể phân phối hoặc tái xuất bản riêng (bài báo, bình luận).</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-purple-600 font-mono w-24 shrink-0">&lt;aside&gt;</span>
              <span>Nội dung phụ / Cột bên: Chứa thanh Sidebar, bài viết liên quan, quảng cáo hoặc tiểu sử tác giả.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="font-bold text-rose-600 font-mono w-24 shrink-0">&lt;footer&gt;</span>
              <span>Chân trang: Chứa thông tin bản quyền Copyright, liên kết chính sách bảo mật, mạng xã hội và liên hệ.</span>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Vẽ sơ đồ khung layout trang báo điện tử trên giấy gồm: Header, Nav, Main (Article, Section), Aside và Footer.",
      "Hiện thực hóa sơ đồ trên bằng mã nguồn HTML5 sử dụng đúng các thẻ ngữ nghĩa chuẩn.",
      "Áp dụng CSS màu nền và khoảng đệm Padding để làm nổi bật các khu vực trên trang web."
    ],
    summary: "Thẻ ngữ nghĩa Semantic HTML5 (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) giúp cấu trúc trang web rõ ràng, chuẩn hóa, hỗ trợ tối ưu SEO cho công cụ tìm kiếm và nâng cao khả năng tiếp cận người dùng khuyết tật.",
    quizzes: [
      {
        q: "Thẻ ngữ nghĩa HTML5 nào đại diện cho phần nội dung chính, cốt lõi và độc nhất của một trang web (mỗi trang HTML chỉ nên chứa duy nhất 1 thẻ này)?",
        options: ["<code>&lt;header&gt;</code>", "<code>&lt;section&gt;</code>", "<code>&lt;main&gt;</code>", "<code>&lt;body&gt;</code>"],
        correctIndex: 2,
        explain: "Thẻ <code>&lt;main&gt;</code> bao bọc phần nội dung trung tâm của trang web và không được trùng lặp ở các trang khác trong cùng website."
      },
      {
        q: "Thẻ HTML5 nào được sử dụng chuyên biệt để chứa thanh thực đơn điều hướng (Menu navigation) của website?",
        options: ["<code>&lt;menu&gt;</code>", "<code>&lt;nav&gt;</code>", "<code>&lt;header&gt;</code>", "<code>&lt;navigate&gt;</code>"],
        correctIndex: 1,
        explain: "<code>&lt;nav&gt;</code> (Navigation) chỉ định khu vực chứa các liên kết điều hướng quan trọng của trang web."
      },
      {
        q: "Khu vực chứa thanh bên lề (Sidebar), danh sách bài viết liên quan hoặc quảng cáo nên được bao bọc trong thẻ ngữ nghĩa nào?",
        options: ["<code>&lt;aside&gt;</code>", "<code>&lt;sidebar&gt;</code>", "<code>&lt;section&gt;</code>", "<code>&lt;div&gt;</code>"],
        correctIndex: 0,
        explain: "<code>&lt;aside&gt;</code> dành cho các nội dung phụ, có liên quan gián tiếp đến nội dung chính xung quanh (như thanh bên sidebar)."
      },
      {
        q: "Lợi ích quan trọng nhất của việc sử dụng các thẻ ngữ nghĩa HTML5 thay vì lạm dụng toàn bộ bằng thẻ <code>&lt;div&gt;</code> là gì?",
        options: ["Làm cho trang web tải nhanh gấp 100 lần", "Tăng khả năng tối ưu hóa công cụ tìm kiếm (SEO) và hỗ trợ công nghệ đọc màn hình cho người khiếm thị", "Không bao giờ bị nhiễm mã độc", "Trang web tự động có màu sắc đẹp"],
        correctIndex: 1,
        explain: "Thẻ ngữ nghĩa giúp robot tìm kiếm của Google hiểu rõ cấu trúc bài viết và giúp thiết bị trợ năng đọc văn bản chính xác cho người khiếm thị."
      }
    ]
  }
];
