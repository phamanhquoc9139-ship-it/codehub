const fs = require('fs');

const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\codex.html';

function createQuiz(id, question, options, correctIdx, explanation) {
  const letters = ['A', 'B', 'C', 'D'];
  const buttons = options.map((opt, idx) => {
    const isCorrect = idx === correctIdx;
    const cleanExp = explanation.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return `<button onclick="checkQuiz('${id}', ${idx}, ${isCorrect}, '${cleanExp}')" class="quiz-btn-${id} text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition">${letters[idx]}. ${opt}</button>`;
  }).join('\n                ');

  return `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">${question}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                ${buttons}
              </div>
              <div id="feedback-${id}" class="hidden mt-3 p-3 rounded-lg text-xs font-medium"></div>
            </div>`;
}

// 10 Comprehensive OpenAI Codex Topics
const topics = [
  {
    id: 'bai1',
    num: '01',
    sub: 'Lịch Sử & Kiến Trúc • Cuộc Cách Mạng Sinh Mã',
    title: 'Tổng Quan OpenAI Codex & Kiến Trúc Mô Hình Sinh Mã Nguồn Đột Phá',
    intro: 'OpenAI Codex là bước nhảy vọt lịch sử của trí tuệ nhân tạo trong lĩnh vực kỹ nghệ phần mềm. Được phát triển từ nền tảng GPT-3 và công bố trong bài báo nghiên cứu khoa học kinh điển "Evaluating Large Language Models Trained on Code" (Chen et al., OpenAI 2021), Codex là mô hình LLM đầu tiên chứng minh khả năng chuyển đổi ngôn ngữ tự nhiên thành mã nguồn khả thi ở quy mô công nghiệp, trở thành trái tim vận hành ban đầu của GitHub Copilot.',
    b1Title: 'Từ GPT-3 Đến Codex: Dữ Liệu Huấn Luyện & Tokenizer Tối Ưu Cho Code',
    b1Content: `• <strong>Nguồn dữ liệu huấn luyện khổng lồ:</strong> Codex được tiền huấn luyện (pre-trained) trên hơn 179 Gigabytes dữ liệu mã nguồn mở thu thập từ hơn 54 triệu kho mã công khai trên GitHub, bao gồm hàng chục ngôn ngữ lập trình chủ đạo như Python, JavaScript, TypeScript, C++, C#, Java, Go, Ruby, PHP, Shell, SQL.<br>
• <strong>Bộ tách từ (Tokenizer) tối ưu hóa cho mã nguồn:</strong> Khác với văn bản thông thường, mã nguồn có cấu trúc thụt đầu dòng (indentation) cực kỳ nghiêm ngặt và chứa nhiều chuỗi ký tự đặc biệt. OpenAI đã tinh chỉnh thuật toán Byte-Pair Encoding (BPE) để bảo tồn các chuỗi khoảng trắng liên tiếp (ví dụ 4 dấu cách hoặc 8 dấu cách thành 1 token duy nhất), giảm đáng kể số lượng token tiêu thụ và giúp mô hình hiểu sâu sắc cấu trúc khối lệnh của Python.<br>
• <strong>Khả năng hiểu đa ngữ cảnh (Contextual Understanding):</strong> Codex không chỉ học cú pháp mà còn hiểu sâu sắc mối liên kết ngữ nghĩa giữa tên hàm, tham số, chú thích (docstrings) và thuật toán cài đặt.`,
    b2Title: 'Các Biến Thể Của Dòng Mô Hình Codex & Sự Kế Thừa Hiện Đại',
    b2Content: `• <strong>code-davinci-002:</strong> Mô hình Codex mạnh mẽ nhất với 12 tỷ tham số (12B), có khả năng giải quyết các thuật toán phức tạp, suy luận logic lập trình và sinh mã nhiều bước.<br>
• <strong>code-cushman-001:</strong> Phiên bản tinh gọn, tối ưu hóa tốc độ suy luận (low-latency inference), được tối ưu đặc biệt để tích hợp vào các IDE thời gian thực nhằm cung cấp gợi ý tự động hoàn thành (ghost text completion) với độ trễ dưới 300ms.<br>
• <strong>Sự kế thừa vào GPT-4, GPT-4o & OpenAI Canvas:</strong> Sau những đột phá ban đầu của Codex, OpenAI đã tích hợp các tri thức sinh mã này vào các mô hình đa phương thức thế hệ mới (GPT-4o, OpenAI Advanced Data Analysis / Code Interpreter) và giao diện lập trình trực quan tương tác hai chiều OpenAI Canvas, cùng các mô hình lý luận sâu như OpenAI o1/o3.`,
    quizzes: [
      {
        q: '1. Bài báo khoa học mang tính bước ngoặt giới thiệu OpenAI Codex vào năm 2021 có tiêu đề là gì?',
        opts: [
          'Evaluating Large Language Models Trained on Code (Chen et al.)',
          'Attention Is All You Need (Vaswani et al.)',
          'Deep Residual Learning for Image Recognition',
          'Mastering the Game of Go without Human Knowledge'
        ],
        ans: 0,
        exp: 'Chính xác! Bài báo "Evaluating Large Language Models Trained on Code" do nhóm tác giả Mark Chen và các nhà nghiên cứu OpenAI công bố tháng 7/2021 đã chính thức khai sinh dòng mô hình Codex.'
      },
      {
        q: '2. OpenAI Codex được tiền huấn luyện trên tập dữ liệu mã nguồn quy mô như thế nào từ GitHub?',
        opts: [
          'Hơn 179 GB mã nguồn thu thập từ hơn 54 triệu public repositories',
          'Chỉ 500 bài tập lập trình cơ bản của sinh viên',
          'Chỉ 10 trang tài liệu hướng dẫn sử dụng Python',
          'Dữ liệu ảnh chụp màn hình máy tính cá nhân'
        ],
        ans: 0,
        exp: 'Chính xác! Tập dữ liệu đồ sộ 179 GB từ hơn 54 triệu kho mã nguồn mở GitHub là nguồn tri thức nền tảng giúp Codex nắm vững hàng triệu thư viện và cú pháp lập trình.'
      },
      {
        q: '3. Điểm cải tiến quan trọng trong bộ tách từ (Tokenizer BPE) của Codex so với GPT-3 gốc là gì?',
        opts: [
          'Tối ưu hóa mã hóa các chuỗi khoảng trắng liên tiếp để bảo tồn thụt dòng (indentation)',
          'Xóa bỏ toàn bộ dấu cách và dấu xuống dòng trong mã nguồn',
          'Chỉ nhận diện chữ cái in hoa tiếng Anh',
          'Chuyển toàn bộ code thành số La Mã cổ đại'
        ],
        ans: 0,
        exp: 'Chính xác! Việc mã hóa nhiều khoảng trắng liên tiếp thành một token đơn lẻ giúp tiết kiệm dung lượng context window và giữ vững cấu trúc cú pháp thụt lề chuẩn xác của các ngôn ngữ như Python.'
      },
      {
        q: '4. Sản phẩm thương mại nào của Microsoft/GitHub là ứng dụng thực tế đầu tiên và nổi tiếng nhất sử dụng OpenAI Codex làm động cơ sinh mã cốt lõi?',
        opts: [
          'GitHub Copilot',
          'Microsoft Paint',
          'Windows Media Player',
          'Internet Explorer 6'
        ],
        ans: 0,
        exp: 'Chính xác! GitHub Copilot ra mắt thử nghiệm năm 2021 chính là sản phẩm hợp tác chiến lược giữa OpenAI và GitHub/Microsoft được vận hành bởi OpenAI Codex.'
      }
    ]
  },
  {
    id: 'bai2',
    num: '02',
    sub: 'Đánh Giá & Benchmark • Chuẩn Mực Khoa Học',
    title: 'HumanEval Benchmark & Thước Đo Toán Học Pass@k Trong Đánh Giá Sinh Mã',
    intro: 'Trong xử lý ngôn ngữ tự nhiên truyền thống, các thước đo như BLEU hay ROUGE chỉ so sánh sự trùng lặp ký tự giữa câu sinh ra và câu mẫu. Tuy nhiên, trong lập trình, hai đoạn code có cú pháp hoàn toàn khác nhau vẫn có thể cho ra kết quả tương đương, và chỉ cần sai một dấu chấm phẩy cũng khiến chương trình sụp đổ. Để đánh giá tính đúng đắn về mặt ngữ nghĩa và chức năng, nhóm nghiên cứu Codex đã tạo ra bộ kiểm chuẩn HumanEval cùng thước đo toán học Pass@k.',
    b1Title: 'Bộ Tiêu Chuẩn HumanEval & Giới Hạn Của Thước Đo Văn Bản Truyền Thống',
    b1Content: `• <strong>164 Bài toán lập trình độc lập (Handcrafted Problems):</strong> Bộ HumanEval bao gồm 164 bài toán lập trình bằng Python do chính các kỹ sư thiết kế thủ công để tránh việc mô hình học vẹt (data contamination) từ internet. Mỗi bài toán đều có phần mô tả yêu cầu trong docstring, chữ ký hàm (function signature) và trung bình 7.7 unit tests kiểm tra nghiêm ngặt.<br>
• <strong>Đánh giá dựa trên thực thi thực tế (Execution-based Evaluation):</strong> Khác với BLEU chấm điểm từ vựng, HumanEval chạy trực tiếp đoạn code sinh ra trong môi trường sandbox để kiểm tra xem nó có vượt qua 100% các bài unit test ẩn hay không.<br>
• <strong>Các benchmark kế thừa:</strong> Về sau cộng đồng mở rộng thêm MBPP (Mostly Basic Python Problems), APPS, CodeXGLUE và SWE-bench (sửa lỗi issue GitHub thực tế).`,
    b2Title: 'Công Thức Toán Học Pass@k Không Chệch (Unbiased Pass@k Estimator)',
    b2Content: `• <strong>Vấn đề của cách đo ngây thơ:</strong> Nếu ta sinh k mẫu thử và kiểm tra xem có ít nhất một mẫu đúng hay không, phương sai kết quả sẽ rất lớn và đòi hỏi chi phí tính toán cao nếu k lớn.<br>
• <strong>Công thức ước lượng không chệch:</strong> Tác giả Chen et al. đề xuất sinh ra n mẫu (với n ≥ k, thường n = 100 và k ∈ {1, 10, 100}), đếm số lượng mẫu đúng là c, sau đó tính xác suất theo tổ hợp:<br>
<code class="block bg-slate-900 text-emerald-300 p-3 rounded-lg my-2 font-mono text-xs sm:text-sm">Pass@k = 1 - [ C(n - c, k) / C(n, k) ]</code><br>
Trong đó <code>C(A, B)</code> là tổ hợp chập B của A. Công thức này giúp tính toán chính xác kỳ vọng xác suất một lời giải đúng khi người dùng sinh k gợi ý mà không bị chệch thống kê.<br>
• <strong>Bước nhảy vọt lịch sử:</strong> Mô hình GPT-3 175B gốc đạt Pass@1 gần như 0%. Codex (12B) đạt Pass@1 là 28.8% và Pass@100 đạt tới 77.5%. Các mô hình hiện đại ngày nay đã đẩy con số này lên hơn 90%+ trên HumanEval.`,
    quizzes: [
      {
        q: '1. Bộ kiểm chuẩn HumanEval do OpenAI công bố gồm bao nhiêu bài toán lập trình được thiết kế thủ công kèm unit tests?',
        opts: [
          '164 bài toán',
          '10 bài toán',
          '5.000 bài toán',
          '1 triệu bài toán'
        ],
        ans: 0,
        exp: 'Chính xác! HumanEval chứa đúng 164 bài toán lập trình Python chất lượng cao kèm docstrings và unit tests nghiêm ngặt.'
      },
      {
        q: '2. Tại sao các thước đo đối sánh văn bản như BLEU hay ROUGE không thể dùng để đánh giá chất lượng sinh mã nguồn của LLM?',
        opts: [
          'Vì code có thể khác biệt từ vựng nhưng đúng ngữ nghĩa chức năng, và ngược lại chỉ sai một ký tự nhỏ cũng gây Crash',
          'Vì BLEU chỉ dùng cho môn tiếng Pháp',
          'Vì các file code không chứa chữ cái tiếng Anh',
          'Vì các mô hình AI không thể đọc được file mã nguồn'
        ],
        ans: 0,
        exp: 'Chính xác! Lập trình đòi hỏi tính đúng đắn chức năng (functional correctness) tuyệt đối qua việc chạy unit test chứ không thể dựa vào tỷ lệ trùng từ bề mặt.'
      },
      {
        q: '3. Ý nghĩa của chỉ số Pass@1 trong đánh giá mô hình sinh mã là gì?',
        opts: [
          'Xác suất đoạn mã đầu tiên mô hình sinh ra vượt qua toàn bộ unit test thành công',
          'Số lần người dùng phải bấm nút Restart máy tính',
          'Thời gian tính bằng giây để mô hình sinh ra 1 ký tự',
          'Tỷ lệ phần trăm code được viết bằng ngôn ngữ Pascal'
        ],
        ans: 0,
        exp: 'Chính xác! Pass@1 đo lường độ chính xác ngay ở lần thử đầu tiên, phản ánh trực tiếp trải nghiệm mượt mà của lập trình viên khi gõ code.'
      },
      {
        q: '4. Khi ước lượng Pass@k không chệch, nếu ta sinh n = 100 mẫu thử và có c mẫu vượt qua unit tests, điều kiện bắt buộc đối với n và k là gì?',
        opts: [
          'n phải lớn hơn hoặc bằng k (n ≥ k)',
          'n phải nhỏ hơn k (n < k)',
          'n luôn luôn phải bằng 0',
          'k phải là số âm'
        ],
        ans: 0,
        exp: 'Chính xác! Để tính toán tổ hợp chọn k phần tử từ tập mẫu n, điều kiện tiên quyết là số mẫu sinh ra n phải lớn hơn hoặc bằng k.'
      }
    ]
  },
  {
    id: 'bai3',
    num: '03',
    sub: 'Prompt Engineering • Nghệ Thuật Ra Lệnh Cho Code',
    title: 'Kỹ Thuật Prompt Engineering Chuyên Sâu Cho Lập Trình Viên Với Codex',
    intro: 'Muốn khai thác tối đa sức mạnh của OpenAI Codex, kỹ sư phần mềm phải hiểu cách cấu trúc một "Coding Prompt" chuẩn mực. Codex không chỉ phản hồi một câu hỏi, mà nó hoạt động theo cơ chế tiếp nối văn bản (text continuation). Việc cung cấp chữ ký hàm rõ ràng, chú thích định hướng và các ví dụ kiểm thử sẽ định hình chính xác thuật toán được sinh ra.',
    b1Title: 'Giải Phẫu Cấu Trúc Prompt Chuẩn Mực Cho Hàm & Thuật Toán',
    b1Content: `• <strong>Công thức 5 thành phần hoàn hảo:</strong><br>
1. <strong>Imports & Thư viện:</strong> Khai báo rõ ràng các module cần sử dụng (ví dụ <code>from typing import List, Dict, Optional</code>).<br>
2. <strong>Function Signature:</strong> Đặt tên hàm tường minh, sử dụng Type Hints đầy đủ cho cả tham số đầu vào và kiểu trả về.<br>
3. <strong>Docstring mô tả mục tiêu:</strong> Giải thích ngắn gọn bài toán cần giải quyết bằng ngôn ngữ rõ ràng.<br>
4. <strong>Doctest / Ví dụ I/O:</strong> Đưa ra ít nhất 2 đến 3 cặp giá trị mẫu <code>&gt;&gt;&gt; my_func([1, 2, 3]) -> 6</code>.<br>
5. <strong>Ràng buộc thời gian & không gian (Constraints):</strong> Nêu rõ độ phức tạp kỳ vọng như <code># Time Complexity: O(n log n), Space: O(1)</code>.`,
    b2Title: 'Kỹ Thuật Few-Shot Coding & Chain-of-Thought (CoT) Bằng Comment',
    b2Content: `• <strong>Few-Shot Prompting cho Code:</strong> Khi bạn muốn Codex tuân thủ đúng coding convention của công ty hoặc sử dụng framework tùy biến, hãy cung cấp 1-2 ví dụ hoàn chỉnh về cách viết hàm trước khi đặt đề bài mới.<br>
• <strong>Chain-of-Thought (Suy luận từng bước bằng mã giả):</strong> Hướng dẫn Codex suy nghĩ trước khi gõ code bằng cách yêu cầu viết comment kế hoạch:<br>
<pre class="bg-slate-900 text-emerald-300 p-3 rounded-lg font-mono text-xs my-2"># Step 1: Validate input parameters and handle empty edge cases
# Step 2: Use two-pointer technique starting from left and right
# Step 3: Iterate and update maximum trapped water volume
# Step 4: Return calculated result</pre>
Kỹ thuật này giúp mô hình phân bổ sự chú ý (attention) vào từng bước logic nhỏ, giảm thiểu sai sót thuật toán tới hơn 40%.`,
    quizzes: [
      {
        q: '1. Yếu tố nào trong một Coding Prompt giúp Codex hiểu rõ nhất kiểu dữ liệu của tham số và giá trị trả về?',
        opts: [
          'Type Hints (ví dụ: def solve(arr: List[int]) -> int:)',
          'Màu sắc của màn hình máy tính',
          'Viết tất cả tên biến bằng tiếng Tây Ban Nha',
          'Để trống hoàn toàn phần khai báo tham số'
        ],
        ans: 0,
        exp: 'Chính xác! Sử dụng Type Hints rõ ràng cung cấp cho mô hình ràng buộc kiểu dữ liệu tĩnh chặt chẽ, giúp loại bỏ các lỗi sai kiểu (type mismatch).'
      },
      {
        q: '2. Kỹ thuật "Doctest" trong Docstring mang lại lợi ích to lớn gì cho Codex?',
        opts: [
          'Cung cấp các cặp ví dụ mẫu Input/Output cụ thể để mô hình neo logic giải thuật chính xác',
          'Làm cho file code dài hơn để tăng dung lượng lưu trữ',
          'Tự động xóa mã nguồn cũ trên ổ cứng',
          'Vô hiệu hóa trình biên dịch của ngôn ngữ'
        ],
        ans: 0,
        exp: 'Chính xác! Các ví dụ I/O cụ thể là dữ liệu quy chiếu rõ ràng nhất giúp LLM đối chiếu và sinh ra logic thuật toán chuẩn xác theo từng trường hợp.'
      },
      {
        q: '3. Khi muốn Codex giải quyết một bài toán thuật toán hóc búa, kỹ thuật nào mang lại độ chính xác cao nhất?',
        opts: [
          'Chain-of-Thought: Yêu cầu mô hình viết comment giải thích từng bước giải thuật trước khi viết code',
          'Bảo mô hình đoán mò thật nhanh trong 1 giây',
          'Không viết bất kỳ gợi ý nào',
          'Chỉ gửi một từ "code"'
        ],
        ans: 0,
        exp: 'Chính xác! Chain-of-Thought buộc mô hình sinh ra chuỗi suy luận từng bước (scratchpad reasoning), giúp tổ chức cấu trúc thuật toán trước khi sinh cú pháp.'
      },
      {
        q: '4. Để tránh việc Codex tự ý "bịa đặt" (hallucinate) các hàm hoặc thư viện không có thật, lập trình viên nên làm gì?',
        opts: [
          'Chỉ định rõ ràng phiên bản thư viện và danh sách các module có sẵn trong prompt',
          'Tắt kết nối internet của máy tính',
          'Không bao giờ viết docstring',
          'Viết prompt bằng mã nhị phân 0 và 1'
        ],
        ans: 0,
        exp: 'Chính xác! Thiết lập ràng buộc rõ ràng về các dependency cho phép giúp Codex chỉ sử dụng các hàm có thật trong phiên bản thư viện hiện hành.'
      }
    ]
  },
  {
    id: 'bai4',
    num: '04',
    sub: 'Đa Ngôn Ngữ • Semantic Translation',
    title: 'Chuyển Đổi Mã Nguồn Đa Ngôn Ngữ (Code Translation & Transpilation)',
    intro: 'Trong lịch sử kỹ nghệ phần mềm, việc chuyển đổi một dự án từ ngôn ngữ này sang ngôn ngữ khác (ví dụ từ Python sang C++ để tăng tốc, hoặc từ JavaScript cũ sang TypeScript hiện đại) thường tiêu tốn hàng tháng trời của các kỹ sư. Codex mở ra kỷ nguyên Semantic Code Translation – dịch mã dựa trên sự thấu hiểu sâu sắc ngữ nghĩa và triết lý ngôn ngữ thay vì chỉ thay thế cú pháp đơn thuần.',
    b1Title: 'Semantic Translation So Với Trình Biên Dịch Cú Pháp (AST Transpiler)',
    b1Content: `• <strong>Giới hạn của Transpiler truyền thống (như Babel hay c2rust):</strong> Dựa trên cây cú pháp trừu tượng (AST) với các quy tắc ánh xạ cứng nhắc. Khi gặp những khái niệm không tương thích (như Garbage Collection trong Python vs Quyền sở hữu bộ nhớ Ownership trong Rust), các transpiler thường thất bại hoặc tạo ra mã nguồn cực kỳ lộn xộn, khó bảo trì.<br>
• <strong>Sức mạnh của Codex Semantic Translation:</strong> Codex phân tích ý đồ thuật toán của hàm nguồn, sau đó tái thiết kế toàn bộ thuật toán đó bằng ngôn ngữ đích với phong cách chuẩn tự nhiên (Idiomatic Code) của ngôn ngữ mới.<br>
• <strong>Ví dụ:</strong> Chuyển cấu trúc <code>dict</code> trong Python thành <code>std::unordered_map</code> trong C++ hoặc <code>HashMap</code> trong Rust với việc quản lý bộ nhớ an toàn tuyệt đối.`,
    b2Title: 'Ứng Dụng Chuyển Đổi Thực Tế: Từ Legacy Đến High-Performance',
    b2Content: `• <strong>1. Tăng tốc hiệu năng (Python sang C++/Rust):</strong> Giữ nguyên logic tính toán khoa học nhưng thay thế bằng mã C++ đa luồng (OpenMP, SIMD) cho tốc độ thực thi nhanh hơn gấp 20 đến 50 lần.<br>
• <strong>2. Hiện đại hóa mã nguồn Legacy (Modernization):</strong> Chuyển đổi mã nguồn COBOL hoặc Fortran trong các hệ thống ngân hàng sang Java Spring Boot / Python FastAPI; chuyển đổi JavaScript ES5 dùng Callback Hell sang ES6+ Async/Await.<br>
• <strong>3. Chuyển đổi kiểm thử:</strong> Tự động dịch bộ kiểm thử từ <code>unittest</code> (Python) sang <code>Jest</code> (TypeScript) với cú pháp <code>expect().toBe()</code> mượt mà.`,
    quizzes: [
      {
        q: '1. Điểm vượt trội của việc dịch mã bằng LLM Codex so với các công cụ Transpiler dựa trên quy tắc AST truyền thống là gì?',
        opts: [
          'Codex hiểu ngữ nghĩa thuật toán và viết lại mã theo phong cách chuẩn mực tự nhiên (idiomatic) của ngôn ngữ đích',
          'Codex chỉ dịch được các file nhỏ dưới 3 dòng',
          'Codex tự động xóa toàn bộ ghi chú của lập trình viên',
          'Codex chuyển toàn bộ mã thành file ảnh JPEG'
        ],
        ans: 0,
        exp: 'Chính xác! Semantic translation của Codex giúp tái tạo mã nguồn theo đúng triết lý thiết kế và quy ước chuẩn mực (idiomatic idioms) của ngôn ngữ mới.'
      },
      {
        q: '2. Khi chuyển đổi mã từ Python sang Rust, thử thách lớn nhất mà Codex xử lý xuất sắc thay cho lập trình viên là gì?',
        opts: [
          'Hệ thống quản lý bộ nhớ: Quyền sở hữu (Ownership), Mượn (Borrowing) và Thời gian sống (Lifetimes)',
          'Đổi tên file từ đuôi .py sang .rs',
          'Đếm số lượng chữ cái trong file',
          'Bật đèn nền bàn phím cơ'
        ],
        ans: 0,
        exp: 'Chính xác! Rust có hệ thống Ownership và Borrow Checker khắt khe; Codex có khả năng gán kiểu dữ liệu và tổ chức vòng đời biến chuẩn xác để vượt qua trình biên dịch của Rust.'
      },
      {
        q: '3. Khi hiện đại hóa các đoạn mã JavaScript cổ điển (ES5) bị "Callback Hell", Codex sẽ ưu tiên chuyển đổi thành mô hình nào?',
        opts: [
          'Cú pháp Async / Await kết hợp Promises hiện đại',
          'Vòng lặp vô tận while(true)',
          'Hàm đệ quy không có điểm dừng',
          'Viết toàn bộ logic lên một dòng duy nhất'
        ],
        ans: 0,
        exp: 'Chính xác! Cú pháp Async/Await giúp mã nguồn bất đồng bộ trở nên tuyến tính, dễ đọc, dễ gỡ lỗi và chuẩn hóa theo chuẩn ECMAScript hiện đại.'
      },
      {
        q: '4. Khi dịch cấu trúc dữ liệu Dictionary trong Python sang C++, Codex thường ánh xạ tương ứng sang cấu trúc dữ liệu chuẩn nào trong thư viện STL?',
        opts: [
          'std::unordered_map hoặc std::map',
          'std::vector<int>',
          'char[] mảng ký tự tĩnh',
          'FILE* con trỏ tệp tin'
        ],
        ans: 0,
        exp: 'Chính xác! Bảng băm dictionary trong Python có cấu trúc tương đương với std::unordered_map (bảng băm O(1)) hoặc std::map (cây đỏ-đen O(log n)) trong C++.'
      }
    ]
  },
  {
    id: 'bai5',
    num: '05',
    sub: 'Kiểm Thử Tự Động • Test-Driven Development',
    title: 'Tự Động Hóa Unit Test & Áp Dụng Test-Driven Development (TDD) Với Codex',
    intro: 'Viết unit test là nhiệm vụ vô cùng quan trọng để đảm bảo chất lượng phần mềm nhưng thường tốn nhiều thời gian và dễ bị bỏ qua. OpenAI Codex là một "chuyên gia" viết kiểm thử tự động xuất sắc, có khả năng phân tích logic hàm để sinh ra toàn bộ các ca kiểm thử từ đường chạy cơ bản (happy path), giá trị biên (boundary values) đến các kịch bản ngoại lệ bất thường.',
    b1Title: 'Chiến Lược Sinh Bộ Kiểm Thử Đa Tầng Cho Hệ Thống',
    b1Content: `• <strong>1. Kiểm thử đường cơ sở (Happy Path):</strong> Kiểm tra các trường hợp đầu vào thông thường xem kết quả trả về có chính xác như đặc tả hay không.<br>
• <strong>2. Phân tích giá trị biên (Boundary & Edge Cases):</strong> Kiểm tra các giá trị nhạy cảm dễ gây sụp đổ hệ thống như danh sách rỗng <code>[]</code>, số 0, số âm, số nguyên cực lớn gây tràn bộ nhớ, chuỗi ký tự đặc biệt, định dạng ngày tháng sai lệch, giá trị <code>None/null</code>.<br>
• <strong>3. Kiểm thử ngoại lệ (Exception Testing):</strong> Xác minh rằng hàm ném ra đúng loại ngoại lệ (ví dụ: <code>pytest.raises(ValueError)</code>) khi nhận dữ liệu đầu vào không hợp lệ.<br>
• <strong>4. Tương thích framework chuẩn:</strong> Codex thành thạo toàn bộ các bộ thư viện kiểm thử phổ biến: <code>pytest</code>, <code>unittest</code> (Python), <code>Jest</code>, <code>Vitest</code>, <code>Mocha</code> (Node.js/React), <code>JUnit 5</code> (Java), <code>GoogleTest</code> (C++).`,
    b2Title: 'Kỹ Thuật Mocking Dữ Liệu & Nâng Cao Code Coverage',
    b2Content: `• <strong>Tự động Mocking các phụ thuộc bên ngoài:</strong> Hướng dẫn Codex sử dụng <code>unittest.mock</code> hoặc <code>jest.mock</code> để cô lập hàm cần test khỏi database thực tế hoặc các lời gọi HTTP API bên ngoài. Mô hình tự động tạo ra các fixture dữ liệu mẫu (fake data) vô cùng sống động.<br>
• <strong>Mô hình TDD (Test-Driven Development) đảo ngược:</strong> Bạn có thể yêu cầu Codex viết bộ Unit Test trước dựa trên yêu cầu nghiệp vụ, sau đó dùng chính bộ test này làm tiêu chuẩn để yêu cầu Codex sinh mã nguồn cài đặt cho đến khi vượt qua 100% tests.<br>
• <strong>Nâng độ phủ mã (Code Coverage):</strong> Đạt mức bao phủ trên 90% dòng mã và kiểm tra độ nhạy của bộ test bằng Mutation Testing.`,
    quizzes: [
      {
        q: '1. Khi yêu cầu Codex viết Unit Test cho một hàm xử lý danh sách, nhóm trường hợp nào quan trọng nhất cần kiểm thử để phát hiện bug?',
        opts: [
          'Edge Cases & Boundary Values (Danh sách rỗng, danh sách 1 phần tử, giá trị trùng lặp, phần tử null)',
          'Chỉ kiểm tra một danh sách có 3 số nguyên dương',
          'Không cần kiểm tra gì vì hàm chạy không báo lỗi cú pháp',
          'Kiểm tra kích thước màn hình của lập trình viên'
        ],
        ans: 0,
        exp: 'Chính xác! Hầu hết lỗi nghiêm trọng trong phần mềm thực tế đều bắt nguồn từ các trường hợp biên (edge cases) như rỗng, null hoặc giá trị ngoại lai.'
      },
      {
        q: '2. Trong framework pytest của Python, cú pháp chuẩn nào được Codex sử dụng để kiểm tra một hàm có ném ra đúng ngoại lệ ValueError hay không?',
        opts: [
          'with pytest.raises(ValueError): my_function(invalid_arg)',
          'try: my_function() except: pass',
          'assert ValueError == True',
          'pytest.ignore_error(ValueError)'
        ],
        ans: 0,
        exp: 'Chính xác! Context manager `with pytest.raises(ExpectedException):` là chuẩn mực vàng trong pytest để kiểm thử các luồng ngoại lệ.'
      },
      {
        q: '3. Kỹ thuật "Mocking" trong Unit Test được áp dụng để giải quyết vấn đề gì?',
        opts: [
          'Giả lập các thành phần phụ thuộc bên ngoài (như database, mạng internet, API bên thứ ba) để kiểm thử độc lập',
          'Biến đổi mã nguồn thành phim hoạt hình',
          'Tăng tốc độ quạt tản nhiệt của máy chủ',
          'Bỏ qua toàn bộ các lỗi logic của chương trình'
        ],
        ans: 0,
        exp: 'Chính xác! Mocking cho phép cô lập logic của unit cần kiểm thử, tránh phụ thuộc vào hạ tầng mạng hay dữ liệu biến đổi từ bên ngoài.'
      },
      {
        q: '4. Quy trình Test-Driven Development (TDD) kinh điển diễn ra theo chu trình 3 bước nào?',
        opts: [
          'Red (Viết test thất bại) -> Green (Viết code tối thiểu để pass test) -> Refactor (Tối ưu hóa mã nguồn)',
          'Viết code -> Đẩy lên production -> Chờ người dùng báo lỗi',
          'Xóa toàn bộ mã nguồn -> Viết lại từ đầu -> Tắt máy',
          'Chạy test -> Thấy lỗi thì xóa bỏ bài test đó đi'
        ],
        ans: 0,
        exp: 'Chính xác! Chu trình Red-Green-Refactor là cốt lõi của TDD, đảm bảo mỗi dòng mã viết ra đều có bài kiểm thử chứng minh tính đúng đắn.'
      }
    ]
  },
  {
    id: 'bai6',
    num: '06',
    sub: 'Tối Ưu & Refactoring • Clean Code',
    title: 'Tái Cấu Trúc (Refactoring), Tối Ưu Hiệu Năng & Tự Động Hóa Tài Liệu',
    intro: 'Viết mã chạy được mới chỉ là bước khởi đầu; viết mã chạy nhanh, tiêu tốn ít bộ nhớ, dễ đọc và dễ mở rộng mới là dấu ấn của một kỹ sư phần mềm cao cấp. Codex là một trợ lý đắc lực trong việc "ngửi mùi code xấu" (Code Smells), đề xuất các mẫu thiết kế (Design Patterns), giảm độ phức tạp tính toán và tạo tài liệu kỹ thuật chuẩn mực.',
    b1Title: 'Tối Ưu Độ Phức Tạp Thuật Toán (Time & Space Complexity)',
    b1Content: `• <strong>Nhận diện thuật toán kém hiệu quả:</strong> Codex dễ dàng phát hiện các vòng lặp lồng nhau có độ phức tạp thời gian O(n²) khi tìm kiếm phần tử và đề xuất thay thế bằng Bảng băm (Hash Table) hoặc Con trỏ kép (Two Pointers) để giảm về O(n) hoặc O(n log n).<br>
• <strong>Tối ưu hóa quản lý bộ nhớ:</strong> Chuyển đổi các danh sách lớn chiếm nhiều dung lượng RAM thành các hàm sinh (Generators với <code>yield</code>) hoặc Stream Processing, chỉ nạp dữ liệu vào bộ nhớ khi cần thiết.<br>
• <strong>Xử lý I/O bất đồng bộ:</strong> Tái cấu trúc các đoạn code xử lý mạng hoặc đọc file đồng bộ (gây block luồng chính) sang kiến trúc Non-blocking Event Loop với <code>asyncio</code> trong Python hoặc Promise trong JavaScript.`,
    b2Title: 'Clean Code, Áp Dụng Design Patterns & Tự Động Viết Tài Liệu',
    b2Content: `• <strong>Áp dụng nguyên lý SOLID:</strong> Chia nhỏ các hàm "quái vật" dài hàng trăm dòng vi phạm Single Responsibility Principle thành các hàm module nhỏ gọn, có mục đích duy nhất.<br>
• <strong>Cài đặt mẫu thiết kế chuẩn mực:</strong> Tự động cấu trúc lại hệ thống bằng các Design Pattern kinh điển như Factory Pattern, Strategy Pattern, Observer Pattern hoặc Dependency Injection.<br>
• <strong>Sinh tài liệu kỹ thuật tự động:</strong> Phân tích các khối mã phức tạp và tự động tạo docstrings theo chuẩn Google Style, Sphinx hoặc JSDoc, kèm biểu đồ giải thích luồng xử lý dữ liệu.`,
    quizzes: [
      {
        q: '1. Khi phát hiện một đoạn mã kiểm tra hai phần tử trùng nhau bằng hai vòng lặp for lồng nhau tốn độ phức tạp thời gian O(n²), Codex sẽ đề xuất cấu trúc dữ liệu nào để giảm độ phức tạp về O(n)?',
        opts: [
          'Hash Set hoặc Hash Table',
          'Mảng tĩnh cố định',
          'Ngăn xếp Stack đơn giản',
          'Hàng đợi Queue'
        ],
        ans: 0,
        exp: 'Chính xác! Bảng băm (Hash Set) cho phép tra cứu phần tử với thời gian trung bình O(1), giúp thuật toán tổng giảm từ O(n²) xuống O(n).'
      },
      {
        q: '2. Trong Python, để đọc và xử lý một tệp tin dữ liệu khổng lồ dung lượng 50GB trên một máy tính chỉ có 8GB RAM mà không bị tràn bộ nhớ (Out-Of-Memory), kỹ thuật nào được Codex ưu tiên sử dụng?',
        opts: [
          'Sử dụng Generator với từ khóa yield để xử lý từng dòng dữ liệu theo luồng (streaming)',
          'Đọc toàn bộ file vào một mảng List bằng file.readlines()',
          'Tải thêm RAM từ internet',
          'Đổi đuôi file sang .zip'
        ],
        ans: 0,
        exp: 'Chính xác! Generator trong Python chỉ nạp từng phần tử vào bộ nhớ tại thời điểm cần duyệt, tiêu thụ lượng RAM cố định O(1).'
      },
      {
        q: '3. Nguyên lý đầu tiên "S" trong bộ nguyên lý thiết kế Clean Code nổi tiếng SOLID viết tắt của từ gì?',
        opts: [
          'Single Responsibility Principle (Nguyên lý đơn nhiệm)',
          'Super Speed Principle',
          'Simple Syntax Principle',
          'Safe Software Principle'
        ],
        ans: 0,
        exp: 'Chính xác! Single Responsibility Principle khẳng định mỗi lớp hoặc hàm chỉ nên có một lý do duy nhất để thay đổi và đảm nhiệm một nhiệm vụ cụ thể.'
      },
      {
        q: '4. Chuẩn định dạng Docstring nào dưới đây phổ biến nhất trong hệ sinh thái Python được Codex hỗ trợ sinh tự động rất chính xác?',
        opts: [
          'Google Python Style Docstrings (Args, Returns, Raises)',
          'Chữ tượng hình Ai Cập cổ đại',
          'Đoạn chat biểu cảm emoji không có chữ',
          'Thơ Haiku Nhật Bản'
        ],
        ans: 0,
        exp: 'Chính xác! Google Style Docstring là quy chuẩn tài liệu kỹ thuật rõ ràng, chi tiết và được sử dụng rộng rãi hàng đầu trong ngành công nghiệp phần mềm.'
      }
    ]
  },
  {
    id: 'bai7',
    num: '07',
    sub: 'Sản Phẩm Thực Chiến • GitHub Copilot',
    title: 'Kiến Trúc GitHub Copilot: Đưa Sức Mạnh Codex Vào Môi Trường Sản Xuất',
    intro: 'Từ một mô hình nghiên cứu trong phòng thí nghiệm của OpenAI, làm thế nào để Codex biến thành một trợ lý ảo phục vụ hàng triệu lập trình viên toàn cầu mỗi giây với độ trễ tính bằng mili-giây? Bài học này bóc tách kiến trúc kỹ thuật nội bộ của GitHub Copilot: từ cơ chế thu thập ngữ cảnh thông minh, suy luận thời gian thực đến hệ sinh thái Copilot Chat và Copilot Workspace.',
    b1Title: 'Hệ Thống Thu Thập Ngữ Cảnh (Context Gathering Engine)',
    b1Content: `• <strong>Thách thức giới hạn Context Window:</strong> Một dự án phần mềm có hàng nghìn files với hàng triệu dòng code, nhưng mô hình chỉ có thể nhận vài nghìn tokens tại mỗi thời điểm. Copilot Extension trong IDE (VS Code, JetBrains, Neovim) đóng vai trò như một hệ thống trích xuất thông tin thông minh.<br>
• <strong>Chiến lược "Neighboring Tabs":</strong> Copilot phân tích các file mã nguồn đang mở ở các tab lân cận gần đây của lập trình viên, trích xuất các định nghĩa hàm, cấu trúc dữ liệu và interface có liên quan mật thiết đến file hiện tại.<br>
• <strong>Phân tích vị trí con trỏ (Cursor Position):</strong> Trích xuất tiền ngữ cảnh (mã phía trên con trỏ) và hậu ngữ cảnh (mã phía dưới con trỏ) để thực hiện kỹ thuật "Fill-In-The-Middle" (FIM), đảm bảo đoạn mã sinh ra khớp hoàn hảo vào giữa hai khối lệnh có sẵn.`,
    b2Title: 'Cơ Chế Gợi Ý Thời Gian Thực (Ghost Text) & Độ Trễ Siêu Thấp',
    b2Content: `• <strong>Debounce & Cắt tỉa yêu cầu:</strong> Khi người dùng gõ phím liên tục, plugin không gửi request cho từng ký tự mà áp dụng kỹ thuật debounce (chờ 50-150ms sau khi ngừng gõ).<br>
• <strong>Streaming & Speculative Decoding:</strong> Máy chủ Copilot stream từng token về IDE ngay khi vừa giải mã xong, hiển thị dưới dạng chữ mờ (Ghost Text). Lập trình viên chỉ cần bấm phím <code>Tab</code> để chấp nhận toàn bộ hoặc <code>Ctrl + Right Arrow</code> để nhận từng từ.<br>
• <strong>Tiến hóa sang Copilot Chat & Workspace:</strong> Chuyển từ gợi ý cục bộ sang đàm thoại toàn dự án (Project-wide semantic search với embeddings) và tự động hóa giải quyết Issue/Pull Request.`,
    quizzes: [
      {
        q: '1. Kỹ thuật "Neighboring Tabs" trong GitHub Copilot giải quyết bài toán cốt lõi nào?',
        opts: [
          'Trích xuất định nghĩa kiểu dữ liệu và hàm từ các tệp tin lân cận đang mở để mở rộng ngữ cảnh cho mô hình',
          'Đóng tất cả các tab trình duyệt web của người dùng để tiết kiệm RAM',
          'Tự động sao chép mã nguồn của người khác về máy tính',
          'Tự động gửi email cho quản lý dự án mỗi khi mở tab mới'
        ],
        ans: 0,
        exp: 'Chính xác! Neighboring Tabs giúp Copilot nắm bắt được các cấu trúc dữ liệu, interface và hàm tiện ích ở các file liên quan mà lập trình viên vừa tham chiếu.'
      },
      {
        q: '2. Kỹ thuật "Fill-In-The-Middle" (FIM) trong các mô hình sinh mã như Codex cho phép điều gì?',
        opts: [
          'Sinh ra đoạn mã mới khớp chính xác vào giữa tiền tố (prefix) và hậu tố (suffix) đã có sẵn',
          'Chỉ sinh mã vào cuối cùng của tệp tin',
          'Xóa sạch toàn bộ mã nguồn cũ ở giữa file',
          'Chỉ chèn thêm các dòng trống vào giữa mã'
        ],
        ans: 0,
        exp: 'Chính xác! FIM huấn luyện mô hình dựa trên cả phần mã phía trên và phía dưới con trỏ, đảm bảo đoạn mã được chèn vào ăn khớp tự nhiên với ngữ cảnh xung quanh.'
      },
      {
        q: '3. Phím tắt kinh điển trên bàn phím được lập trình viên sử dụng để chấp nhận gợi ý mã mờ (Ghost Text) của GitHub Copilot là gì?',
        opts: [
          'Phím Tab',
          'Phím Delete',
          'Phím Backspace',
          'Phím Escape'
        ],
        ans: 0,
        exp: 'Chính xác! Phím Tab là tiêu chuẩn phổ quát trong các IDE để chấp nhận ngay lập tức đoạn mã do AI đề xuất.'
      },
      {
        q: '4. Mục tiêu thời gian phản hồi (latency) lý tưởng để hiển thị gợi ý mã mờ trong IDE mà không làm gián đoạn dòng suy nghĩ của lập trình viên là:',
        opts: [
          'Dưới 300 - 500 mili-giây (ms)',
          'Khoảng 10 đến 15 phút',
          'Nửa ngày làm việc',
          '1 tuần sau khi gõ phím'
        ],
        ans: 0,
        exp: 'Chính xác! Độ trễ dưới 300-500ms là yếu tố quyết định để tạo cảm giác tự nhiên như đang gõ code thông thường trong luồng tư duy (flow state).'
      }
    ]
  },
  {
    id: 'bai8',
    num: '08',
    sub: 'Lập Trình API • Sandbox Thực Thi An Toàn',
    title: 'Lập Trình Tích Hợp OpenAI Codex API & Xây Dựng Sandbox Thực Thi An Toàn',
    intro: 'Để phát triển các công cụ tự động hóa nội bộ, nền tảng chấm bài trực tuyến hoặc ứng dụng phân tích mã nguồn cho doanh nghiệp, kỹ sư cần làm chủ việc gọi API của OpenAI và thiết kế một môi trường thực thi mã (Execution Sandbox) an toàn, ngăn chặn mã độc phá hoại hạ tầng.',
    b1Title: 'Làm Chủ Các Tham Số Cấu Hình OpenAI Code Completion API',
    b1Content: `• <strong>temperature (Nhiệt độ):</strong><br>
- <code>0.0</code> (Deterministic): Lựa chọn token có xác suất cao nhất tại mỗi bước. Bắt buộc dùng khi cần viết thuật toán chính xác, sửa lỗi cú pháp hoặc sinh mã có tính đúng đắn duy nhất.<br>
- <code>0.2 - 0.5</code>: Tạo ra sự đa dạng nhẹ khi bạn muốn sinh nhiều phương án triển khai khác nhau hoặc gợi ý giải pháp sáng tạo.<br>
• <strong>top_p (Nucleus Sampling):</strong> Thường đặt <code>1.0</code> hoặc kết hợp cùng temperature để giới hạn tập hợp token ứng viên.<br>
• <strong>stop sequences (Chuỗi dừng):</strong> Rất quan trọng để ngăn mô hình sinh thừa thãi. Ví dụ: đặt <code>stop=["\n\n", "def "]</code> để mô hình dừng lại ngay khi kết thúc hàm hiện tại, không tự ý viết thêm các hàm mới không liên quan.<br>
• <strong>max_tokens:</strong> Giới hạn số token tối đa để kiểm soát chi phí điện toán.`,
    b2Title: 'Thiết Kế Môi Trường Sandbox Cách Ly Tuyệt Đối (Code Execution Engine)',
    b2Content: `• <strong>Mối nguy hiểm của việc thực thi code tự động:</strong> Mô hình AI có thể vô tình hoặc cố ý sinh ra các đoạn mã nguy hiểm như <code>os.system("rm -rf /")</code>, quét cổng mạng nội bộ hoặc đào tiền ảo.<br>
• <strong>Kiến trúc Sandbox đa tầng:</strong><br>
1. <strong>Container cách ly (Docker / gVisor / Firecracker microVM):</strong> Khởi tạo container dùng một lần (ephemeral) cho mỗi lần chạy code, hủy bỏ ngay sau khi hoàn thành.<br>
2. <strong>Giới hạn tài nguyên hệ thống (cgroups):</strong> Giới hạn nghiêm ngặt CPU (ví dụ tối đa 1 core), RAM (tối đa 512MB), bộ nhớ đĩa (tối đa 50MB).<br>
3. <strong>Timeout ngắt tự động:</strong> Thiết lập ngắt sau 3 - 5 giây để ngăn chặn các vòng lặp vô tận (infinite loops).<br>
4. <strong>Network Isolation:</strong> Tắt hoàn toàn kết nối mạng ra internet (<code>--network none</code>) để chống rò rỉ dữ liệu hoặc tấn công mạng.`,
    quizzes: [
      {
        q: '1. Khi gọi API của OpenAI để sinh mã thuật toán yêu cầu tính chính xác cao và kết quả nhất quán lặp lại được, tham số temperature nên được thiết lập bằng bao nhiêu?',
        opts: [
          '0.0',
          '1.8',
          '100.0',
          '-1.0'
        ],
        ans: 0,
        exp: 'Chính xác! Temperature = 0.0 thực hiện giải mã tham lam (greedy decoding), luôn chọn phương án có xác suất thống kê cao nhất và hoàn toàn xác định (deterministic).'
      },
      {
        q: '2. Mục đích chính của việc thiết lập tham số "stop" sequences trong request gửi tới Codex API là gì?',
        opts: [
          'Chỉ định các chuỗi ký tự mà khi gặp mô hình sẽ lập tức dừng sinh token tiếp theo (tránh sinh lan man sang hàm khác)',
          'Tạm dừng server của OpenAI trong 1 tiếng',
          'Khóa tài khoản của người dùng',
          'Xóa toàn bộ cơ sở dữ liệu của dự án'
        ],
        ans: 0,
        exp: 'Chính xác! Chuỗi dừng (stop sequence) giúp kiểm soát chính xác phạm vi sinh mã, ví dụ dừng ngay khi gặp hai dấu xuống dòng hoặc từ khóa hàm tiếp theo.'
      },
      {
        q: '3. Khi xây dựng hệ thống tự động chạy các đoạn mã do AI sinh ra, biện pháp bảo mật nào là TỐI QUAN TRỌNG?',
        opts: [
          'Chạy trong môi trường Sandbox cách ly (Docker/MicroVM) bị cô lập mạng và giới hạn tài nguyên CPU/RAM/thời gian',
          'Chạy trực tiếp dưới quyền quản trị viên tối cao root trên máy chủ sản xuất chính',
          'Không cần bảo mật vì AI luôn luôn viết code an toàn 100%',
          'Lưu mã nguồn vào file Word'
        ],
        ans: 0,
        exp: 'Chính xác! Môi trường Sandbox cách ly hoàn toàn là nguyên tắc an ninh bắt buộc để ngăn chặn mã độc hại hoặc vòng lặp vô tận gây sập hệ thống.'
      },
      {
        q: '4. Cờ lệnh (flag) nào trong Docker được sử dụng để ngắt hoàn toàn kết nối mạng của container đang chạy code kiểm thử?',
        opts: [
          '--network none',
          '--network full-speed',
          '--allow-all-connections',
          '--wifi on'
        ],
        ans: 0,
        exp: 'Chính xác! Cờ `--network none` vô hiệu hóa toàn bộ card mạng của container, ngăn chặn tuyệt đối các hành vi gửi dữ liệu ra bên ngoài.'
      }
    ]
  },
  {
    id: 'bai9',
    num: '09',
    sub: 'Bảo Mật & Bản Quyền • Quản Trị Rủi Ro',
    title: 'An Toàn Mã Nguồn, Bản Quyền Sở Hữu Trí Tuệ & Phòng Chống Lỗ Hổng',
    intro: 'Việc tích hợp trí tuệ nhân tạo vào quy trình phát triển phần mềm mang lại năng suất khổng lồ nhưng cũng tiềm ẩn nhiều rủi ro pháp lý và an ninh nghiêm trọng. Một kỹ sư chuyên nghiệp cần nắm vững các nguy cơ về lỗ hổng bảo mật trong mã AI, cơ chế lọc bản quyền mã nguồn mở và chính sách bảo mật dữ liệu doanh nghiệp.',
    b1Title: 'Lỗ Hổng Bảo Mật Trong Mã Do AI Sinh Ra & Tích Hợp SAST',
    b1Content: `• <strong>Các lỗ hổng thường gặp trong mã AI:</strong> Do được huấn luyện trên mã nguồn công khai (vốn chứa nhiều mã cũ từ các diễn đàn), Codex có thể vô tình sinh ra các lỗ hổng kinh điển theo danh mục OWASP Top 10:<br>
- <em>SQL Injection:</em> Nối chuỗi câu lệnh SQL trực tiếp thay vì sử dụng Parameterized Queries.<br>
- <em>Cross-Site Scripting (XSS):</em> Hiển thị trực tiếp dữ liệu người dùng lên giao diện web mà không lọc mã độc (Sanitization).<br>
- <em>Hardcoded Secrets:</em> Tự ý chèn các chuỗi giả lập API Key hoặc Token vào code.<br>
• <strong>Giải pháp kiểm toán tĩnh (SAST Integration):</strong> Tích hợp các công cụ quét mã tự động như SonarQube, Snyk, Semgrep hoặc CodeQL vào pipeline CI/CD để tự động phát hiện và chặn đứng các đoạn mã không đạt chuẩn an ninh trước khi merge.`,
    b2Title: 'Vấn Đề Bản Quyền Sở Hữu Trí Tuệ & Public Code Matching Filter',
    b2Content: `• <strong>Rủi ro về giấy phép nguồn mở (GPL / Copyleft):</strong> Nếu mã do AI sinh ra trùng khớp nguyên văn với một dự án mang giấy phép GPL, dự án phần mềm thương mại của công ty có nguy cơ bị khiếu nại pháp lý hoặc bắt buộc phải mở mã nguồn.<br>
• <strong>Bộ lọc đối sánh mã công khai (Public Code Matching Filter):</strong> GitHub Copilot và các nền tảng thương mại trang bị bộ lọc theo thời gian thực. Nếu đoạn mã sinh ra trùng khớp trên 150 ký tự với bất kỳ kho mã công khai nào trên GitHub, hệ thống sẽ chặn hiển thị hoặc kèm theo cảnh báo rõ ràng về giấy phép bản quyền của tác giả gốc.<br>
• <strong>Cam kết dữ liệu doanh nghiệp (Zero Data Retention):</strong> Các gói Copilot Enterprise và OpenAI API cam kết không bao giờ sử dụng dữ liệu mã nguồn độc quyền của khách hàng để huấn luyện lại mô hình công cộng.`,
    quizzes: [
      {
        q: '1. Một trong những lỗ hổng bảo mật phổ biến nhất mà mô hình sinh mã có thể mắc phải khi viết câu lệnh truy vấn cơ sở dữ liệu là gì?',
        opts: [
          'SQL Injection do ghép chuỗi thủ công thay vì dùng Parameterized Queries (Prepared Statements)',
          'Tốc độ mạng internet quá nhanh',
          'Màn hình hiển thị quá sáng',
          'Chuột máy tính hết pin'
        ],
        ans: 0,
        exp: 'Chính xác! SQL Injection là hiểm họa hàng đầu; lập trình viên cần luôn kiểm tra để đảm bảo mã AI sinh ra sử dụng Prepared Statements an toàn.'
      },
      {
        q: '2. Tính năng "Public Code Matching Filter" trong GitHub Copilot được xây dựng nhằm mục đích chính gì?',
        opts: [
          'Phát hiện và cảnh báo hoặc chặn các đoạn mã sinh ra bị trùng khớp nguyên văn với mã nguồn công khai trên GitHub để tránh vi phạm bản quyền',
          'Tìm kiếm bạn bè mới trên mạng xã hội',
          'Tự động tăng giá gói cước hàng tháng',
          'Đổi màu nền của file code'
        ],
        ans: 0,
        exp: 'Chính xác! Bộ lọc đối sánh mã công khai giúp bảo vệ các tổ chức khỏi các tranh chấp pháp lý liên quan đến giấy phép bản quyền phần mềm nguồn mở (như GPL).'
      },
      {
        q: '3. Công cụ kiểm thử an ninh ứng dụng tĩnh (SAST) nào dưới đây thường được tích hợp vào quy trình CI/CD để tự động quét lỗ hổng mã nguồn do AI viết?',
        opts: [
          'SonarQube / Snyk / Semgrep / CodeQL',
          'Adobe Photoshop',
          'Microsoft Excel',
          'VLC Media Player'
        ],
        ans: 0,
        exp: 'Chính xác! Các công cụ SAST như SonarQube, Snyk, Semgrep là chốt chặn tiêu chuẩn tự động kiểm tra chất lượng và an ninh mã trước khi đưa vào sản xuất.'
      },
      {
        q: '4. Chính sách bảo mật "No Training on Customer Data" của các nhà cung cấp AI cấp doanh nghiệp đảm bảo điều gì?',
        opts: [
          'Mã nguồn bí mật kinh doanh của công ty bạn sẽ không bao giờ bị sử dụng để huấn luyện mô hình chung',
          'Công ty bạn không được phép lập trình nữa',
          'Tất cả nhân viên phải xóa tài khoản máy tính',
          'Mã nguồn phải được công khai lên báo chí'
        ],
        ans: 0,
        exp: 'Chính xác! Cam kết không huấn luyện trên dữ liệu khách hàng là điều kiện tiên quyết để các tập đoàn công nghệ lớn tin dùng các công cụ hỗ trợ lập trình AI.'
      }
    ]
  },
  {
    id: 'bai10',
    num: '10',
    sub: 'Tương Lai Của AI Coding • Autonomous SWE Agents',
    title: 'Tương Lai Của AI Coding: Từ Gợi Ý Mã Nguồn Đến Tác Tử Tự Hành (Autonomous SWE Agents)',
    intro: 'Ngành công nghệ phần mềm đang chứng kiến một cuộc chuyển dịch mang tính thế hệ: từ các mô hình hỗ trợ gõ code từng dòng (Tab completion) sang các tác tử kỹ sư phần mềm tự hành (Autonomous Software Engineering Agents). Thay vì chỉ thụ động chờ lệnh, AI agent thế hệ mới có thể tự đọc issue trên GitHub, phân tích toàn bộ cấu trúc dự án, tự viết code sửa lỗi, chạy test và tạo Pull Request độc lập.',
    b1Title: 'Kiến Trúc Tác Tử Lập Trình (Agentic Coding Architectures)',
    b1Content: `• <strong>Vòng lặp ReAct (Reasoning + Acting):</strong> Tác tử hoạt động theo chu trình liên tục: Suy luận bối cảnh -> Chọn công cụ phù hợp -> Thực thi hành động -> Quan sát phản hồi môi trường -> Tự điều chỉnh sai sót.<br>
• <strong>Bộ công cụ của một SWE Agent (Tool Use):</strong> Khác với mô hình sinh text thông thường, tác tử lập trình được trang bị quyền truy cập:<br>
- <em>Terminal / Shell:</em> Chạy lệnh bash, cài đặt thư viện, build dự án.<br>
- <em>File System Tools:</em> Đọc nội dung file, tìm kiếm theo regex, chỉnh sửa file chính xác theo dòng.<br>
- <em>Git Tools:</em> Kiểm tra git diff, checkout nhánh mới, tạo commit và mở pull request.<br>
- <em>Linter & Test Runners:</em> Tự động chạy pytest để kiểm tra mã vừa sửa có vượt qua bài test hay không.`,
    b2Title: 'SWE-bench & Vai Trò Mới Của Lập Trình Viên Trong Kỷ Nguyên AI-First',
    b2Content: `• <strong>Bộ kiểm chuẩn SWE-bench:</strong> Đo lường khả năng giải quyết các vấn đề GitHub thực tế (Real-world GitHub Issues) trích xuất từ 12 kho mã nguồn mở nổi tiếng bằng Python (như Django, SymPy, scikit-learn). Tỷ lệ giải quyết thành công của các Agent đã tăng vọt từ vài phần trăm lên mức hơn 40% - 60% chỉ trong thời gian ngắn.<br>
• <strong>Sự thay đổi căn bản trong vai trò của kỹ sư phần mềm:</strong> Kỹ sư không còn là "thợ gõ phím" (syntax typist) mà trở thành <em>System Architect</em> (Kiến trúc sư hệ thống), <em>Product Designer</em> (Người thiết kế nghiệp vụ) và <em>Code Reviewer</em> (Người thẩm định chất lượng tối cao). Khả năng tư duy logic, hiểu biết sâu về hệ thống phân tán và kỹ năng thẩm định bảo mật trở thành lợi thế cạnh tranh cốt lõi.`,
    quizzes: [
      {
        q: '1. Khác biệt cốt lõi giữa một "AI Pair Programmer" (như Copilot đời đầu) và một "Autonomous SWE Agent" là gì?',
        opts: [
          'SWE Agent có khả năng chủ động lập kế hoạch, tự dùng công cụ (terminal, file, git), tự chạy test và sửa lỗi cho đến khi hoàn thành nhiệm vụ',
          'SWE Agent chỉ biết gõ lại các chữ cái',
          'SWE Agent không thể kết nối máy tính',
          'SWE Agent chỉ là một trò chơi điện tử'
        ],
        ans: 0,
        exp: 'Chính xác! Autonomous SWE Agent sở hữu tính chủ động (agency) cao, có thể tự lặp qua quy trình: viết code -> chạy test -> sửa lỗi -> hoàn tất issue.'
      },
      {
        q: '2. Bộ kiểm chuẩn hàng đầu hiện nay được dùng để đánh giá năng lực giải quyết các Issue thực tế trên GitHub của các Agent lập trình là gì?',
        opts: [
          'SWE-bench (Software Engineering Benchmark)',
          'SpeedTest đo tốc độ mạng',
          '3DMark chấm điểm card đồ họa',
          'Trắc nghiệm tính cách MBTI'
        ],
        ans: 0,
        exp: 'Chính xác! SWE-bench do Đại học Princeton phát triển là tiêu chuẩn vàng đo lường khả năng sửa lỗi GitHub thực tế của các tác tử AI.'
      },
      {
        q: '3. Trong vòng lặp hoạt động ReAct của một tác tử lập trình, hai yếu tố cốt lõi đan xen nhau là gì?',
        opts: [
          'Reasoning (Suy luận, lập kế hoạch) và Acting (Hành động, thực thi công cụ)',
          'Reading (Đọc sách) và Sleeping (Đi ngủ)',
          'Running (Chạy bộ) và Eating (Ăn uống)',
          'Rebooting (Khởi động lại) và Crashing (Lỗi máy)'
        ],
        ans: 0,
        exp: 'Chính xác! ReAct (Reasoning + Acting) kết hợp khả năng suy nghĩ logic nội tâm với việc gọi công cụ ngoại vi để giải quyết bài toán phức tạp.'
      },
      {
        q: '4. Trong kỷ nguyên phát triển phần mềm lấy AI làm trọng tâm (AI-First Software Engineering), năng lực nào của kỹ sư trở nên quan trọng nhất?',
        opts: [
          'Thiết kế kiến trúc hệ thống, phân tích bài toán nghiệp vụ, kiểm soát an ninh và đánh giá (review) chất lượng mã nguồn',
          'Gõ bàn phím thật nhanh 150 từ một phút',
          'Ghi nhớ thuộc lòng toàn bộ cú pháp của 50 ngôn ngữ',
          'Không cần học bất kỳ kiến thức máy tính nào'
        ],
        ans: 0,
        exp: 'Chính xác! Khi việc viết cú pháp mã nguồn được tự động hóa, giá trị cao nhất của con người nằm ở tư duy kiến trúc, kiểm soát rủi ro và xác thực logic nghiệp vụ.'
      }
    ]
  }
];

// 10 Comprehensive Final Certification Exam Questions (60-minute duration)
const examQuestions = [
  {
    id: 'eq1',
    num: 1,
    topic: 'Kiến Trúc & Tokenizer',
    q: 'OpenAI Codex đạt được bước tiến lớn trong việc sinh mã nguồn chuẩn xác cho Python chủ yếu nhờ vào cải tiến nào trong thuật toán Tokenizer?',
    options: [
      'Tối ưu hóa BPE để mã hóa các chuỗi khoảng trắng liên tiếp (như 4 khoảng trắng) thành một token duy nhất, bảo toàn tính thụt lề (indentation)',
      'Xóa bỏ toàn bộ các dấu cách và dấu tab trong mã nguồn huấn luyện',
      'Chuyển đổi toàn bộ mã nguồn sang hệ nhị phân 8-bit',
      'Chỉ lưu trữ các ký tự nguyên âm trong từ điển'
    ],
    ans: 'A',
    sol: 'Trong Python, khoảng trắng thụt lề xác định phạm vi khối lệnh. Việc gom các chuỗi khoảng trắng thành token riêng biệt giúp mô hình giữ vững cấu trúc cú pháp và tiết kiệm dung lượng context window.'
  },
  {
    id: 'eq2',
    num: 2,
    topic: 'HumanEval & Pass@k',
    q: 'Một nhóm nghiên cứu huấn luyện mô hình sinh mã mới. Khi sinh n = 100 lời giải độc lập cho một bài toán HumanEval, có c = 40 lời giải vượt qua toàn bộ unit tests. Xác suất Pass@1 của bài toán này theo ước lượng không chệch là bao nhiêu?',
    options: [
      '0.40 (tương đương 40%)',
      '0.01 (tương đương 1%)',
      '0.85 (tương đương 85%)',
      '1.00 (tương đương 100%)'
    ],
    ans: 'A',
    sol: 'Khi k = 1, công thức Pass@1 rút gọn chính xác thành c / n = 40 / 100 = 0.40 (40%), đại diện cho xác suất một mẫu ngẫu nhiên sinh ra chạy đúng test.'
  },
  {
    id: 'eq3',
    num: 3,
    topic: 'Prompting & CoT',
    q: 'Để yêu cầu mô hình AI sinh mã giải quyết bài toán tìm kiếm đường đi ngắn nhất trong đồ thị (Dijkstra) mà không bị rơi vào lỗi logic vòng lặp vô hạn, cấu trúc Prompt nào sau đây là TỐI ƯU NHẤT?',
    options: [
      'Prompt cung cấp chữ ký hàm có Type Hints, docstring rõ ràng, yêu cầu mô hình suy luận từng bước (CoT) bằng comment thuật toán và kèm doctests kiểm tra đồ thị rỗng/chu trình âm',
      'Prompt chỉ ghi một dòng duy nhất: "viet thuat toan dijkstra cho toi"',
      'Gửi một bức ảnh chụp cuốn sách giải thuật và không ghi chú thích',
      'Yêu cầu mô hình viết code bằng ngôn ngữ máy thuần nhị phân'
    ],
    ans: 'A',
    sol: 'Prompt kỹ thuật cao kết hợp Type Hints, Docstring chi tiết, Chain-of-Thought từng bước và các ca kiểm thử biên (edge cases) là chuẩn mực vàng để loại bỏ lỗi logic.'
  },
  {
    id: 'eq4',
    num: 4,
    topic: 'Chuyển Đổi Đa Ngôn Ngữ',
    q: 'Một dự án microservice cần chuyển đổi một thuật toán phân tích dữ liệu lớn từ Python sang C++ để triển khai trên hệ thống nhúng với yêu cầu thời gian thực. Thách thức kỹ thuật lớn nhất mà kỹ sư cần rà soát trong mã C++ do AI sinh ra là gì?',
    options: [
      'Quản lý vòng đời bộ nhớ thủ công (tránh Memory Leaks), sử dụng đúng con trỏ thông minh (std::unique_ptr/shared_ptr) và giới hạn tràn số nguyên',
      'Xem mã C++ có đổi màu chữ trên màn hình hay không',
      'Kiểm tra xem file C++ có nhẹ hơn 1 kilobyte hay không',
      'Đếm xem có đúng 10 dấu chấm phẩy hay không'
    ],
    ans: 'A',
    sol: 'Python tự động thu gom rác (Garbage Collection) trong khi C++ đòi hỏi quản lý bộ nhớ chặt chẽ. Kỹ sư phải thẩm định các cơ chế giải phóng tài nguyên và con trỏ thông minh để tránh rò rỉ bộ nhớ.'
  },
  {
    id: 'eq5',
    num: 5,
    topic: 'Tự Động Hóa Unit Test',
    q: 'Khi xây dựng bộ Unit Test tự động cho hàm xử lý giao dịch thanh toán trực tuyến qua thẻ tín dụng, kỹ thuật nào sau đây là BẮT BUỘC để đảm bảo bài kiểm tra chạy an toàn và độc lập?',
    options: [
      'Sử dụng Mocking để giả lập cổng thanh toán của ngân hàng (Stripe/PayPal), kiểm thử cả trường hợp thành công và các mã lỗi từ chối giao dịch',
      'Dùng thẻ tín dụng thật của cá nhân để trừ tiền thật mỗi lần chạy kiểm thử',
      'Bỏ qua bài kiểm tra vì hệ thống thanh toán không bao giờ có lỗi',
      'Chỉ kiểm tra khi trời nắng'
    ],
    ans: 'A',
    sol: 'Mocking các API bên ngoài như ngân hàng là nguyên tắc bất di bất dịch trong kiểm thử phần mềm, cho phép mô phỏng mọi tình huống mạng lỗi, hết tiền hoặc mã độc mà không phát sinh chi phí thật.'
  },
  {
    id: 'eq6',
    num: 6,
    topic: 'Refactoring & Clean Code',
    q: 'Một đoạn mã cũ chứa 8 khối lệnh if-else lồng nhau phức tạp để tính giá tiền khuyến mãi cho 8 loại khách hàng khác nhau. Mẫu thiết kế (Design Pattern) nào là phù hợp nhất để tái cấu trúc khối mã này theo nguyên lý Open/Closed Principle?',
    options: [
      'Strategy Pattern kết hợp Factory Pattern',
      'Singleton Pattern với biến toàn cục',
      'Vòng lặp vô tận while-true',
      'Xóa toàn bộ các mức khuyến mãi'
    ],
    ans: 'A',
    sol: 'Strategy Pattern cho phép đóng gói từng thuật toán tính giá khuyến mãi vào các class riêng biệt, giúp dễ dàng thêm loại khuyến mãi mới mà không cần sửa đổi mã nguồn gốc.'
  },
  {
    id: 'eq7',
    num: 7,
    topic: 'Kiến Trúc GitHub Copilot',
    q: 'Trong kiến trúc của GitHub Copilot, tại sao cơ chế Fill-In-The-Middle (FIM) lại vượt trội hơn hẳn so với cơ chế Next-Token Prediction truyền thống khi hoạt động trong IDE?',
    options: [
      'Vì FIM tiếp nhận cả ngữ cảnh mã phía trên và phía dưới con trỏ, đảm bảo đoạn mã mới được sinh ra hoàn toàn ăn khớp với các hàm đã viết sẵn bên dưới',
      'Vì FIM chỉ đọc được một ký tự duy nhất',
      'Vì FIM tự động tắt máy tính khi lập trình viên mệt',
      'Vì FIM không sử dụng mạng internet'
    ],
    ans: 'A',
    sol: 'Khi chỉnh sửa mã, lập trình viên thường chèn code vào giữa một tệp tin đã có sẵn. FIM đảm bảo mã sinh ra tôn trọng các biến và hàm gọi ở phần suffix bên dưới.'
  },
  {
    id: 'eq8',
    num: 8,
    topic: 'Codex API & Sandbox',
    q: 'Để thiết lập một môi trường Sandbox trên máy chủ Linux cho phép chạy thử nghiệm hàng nghìn đoạn mã Python không đáng tin cậy do người dùng hoặc AI gửi lên, cấu hình nào sau đây đảm bảo an toàn cao nhất?',
    options: [
      'Chạy trong Docker container không cấp quyền root (--user nobody), tắt toàn bộ kết nối mạng (--network none), giới hạn RAM và đặt timeout 3 giây',
      'Chạy trực tiếp bằng lệnh sudo python trên máy chủ cơ sở dữ liệu chính',
      'Mở toàn bộ cổng mạng và tắt tường lửa để tăng tốc độ tải file',
      'Cấp quyền truy cập toàn bộ thư mục /root cho đoạn mã'
    ],
    ans: 'A',
    sol: 'Cách ly mạng, hạ quyền user không phải root, giới hạn RAM/CPU và timeout nghiêm ngặt là các chốt chặn phòng thủ chiều sâu (defense-in-depth) ngăn chặn mọi mã độc thoát khỏi sandbox.'
  },
  {
    id: 'eq9',
    num: 9,
    topic: 'An Toàn & Bản Quyền',
    q: 'Một lập trình viên sử dụng AI để sinh mã cho một sản phẩm phần mềm thương mại độc quyền (proprietary software). Bộ lọc phát hiện đoạn mã sinh ra trùng khớp 100% với một thư viện có giấy phép GPL v3.0. Hành động đúng đắn và an toàn nhất là gì?',
    options: [
      'Không sử dụng đoạn mã trùng lặp đó; yêu cầu AI viết lại theo logic mới hoặc tự tay thiết kế thuật toán khác để tránh nguy cơ vi phạm điều khoản Copyleft của GPL v3',
      'Cứ giữ nguyên đoạn mã và giấu kín không cho ai biết',
      'Đổi tên các biến rồi khẳng định là do mình tự nghĩ ra',
      'Xóa toàn bộ dự án công ty đi'
    ],
    ans: 'A',
    sol: 'Giấy phép GPL v3 có tính chất copyleft mạnh mẽ, có thể buộc toàn bộ phần mềm sử dụng nó phải công khai mã nguồn mở. Việc thay thế bằng lời giải độc lập là cách xử lý pháp lý an toàn tuyệt đối.'
  },
  {
    id: 'eq10',
    num: 10,
    topic: 'Autonomous SWE Agents',
    q: 'Khi một Autonomous Software Engineering Agent (như trong tiêu chuẩn SWE-bench) nhận nhiệm vụ sửa lỗi một Issue trên GitHub, quy trình chuẩn mực và tự chủ mà Agent cần thực hiện là gì?',
    options: [
      'Đọc mô tả issue -> Tìm kiếm các file liên quan -> Tái hiện bug bằng một Unit Test mới (thất bại) -> Sửa mã nguồn -> Chạy lại test đến khi vượt qua -> Tạo Git Commit và Pull Request',
      'Tự động đóng issue lại và ghi "Đã sửa xong" mà không cần kiểm tra',
      'Gửi tin nhắn hỏi người dùng cách giải quyết bài toán',
      'Xóa toàn bộ kho mã nguồn GitHub đi để tạo lại từ đầu'
    ],
    ans: 'A',
    sol: 'Quy trình khép kín: Tái hiện lỗi qua test thất bại (Red) -> Sửa mã -> Kiểm tra test thành công (Green) -> Mở Pull Request là chuẩn mực hoạt động của các kỹ sư phần mềm chuyên nghiệp lẫn các tác tử AI tự hành.'
  }
];

// Generate Articles HTML
const articlesHtml = topics.map(t => {
  const quizzesHtml = t.quizzes.map((q, idx) => createQuiz(`${t.id}_q${idx + 1}`, q.q, q.opts, q.ans, q.exp)).join('\n');
  return `
      <!-- Bài ${t.num}: ${t.title} -->
      <article id="${t.id}" class="bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold text-sm border border-emerald-200 dark:border-emerald-800">
            CHUYÊN ĐỀ ${t.num}
          </span>
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">${t.sub}</span>
        </div>

        <div>
          <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
            ${t.title}
          </h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            ${t.intro}
          </p>
        </div>

        <!-- Section 1 -->
        <div class="p-5 rounded-2xl bg-emerald-50/50 dark:bg-dark-card/50 border border-emerald-100 dark:border-emerald-950/40 space-y-3">
          <h3 class="text-base font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-code text-emerald-600"></i> ${t.b1Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b1Content}
          </div>
        </div>

        <!-- Section 2 -->
        <div class="p-5 rounded-2xl bg-cyan-50/50 dark:bg-dark-card/50 border border-cyan-100 dark:border-cyan-950/40 space-y-3">
          <h3 class="text-base font-bold text-cyan-950 dark:text-cyan-300 flex items-center gap-2">
            <i class="fa-solid fa-microchip text-cyan-600"></i> ${t.b2Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b2Content}
          </div>
        </div>

        <!-- Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-emerald-600"></i> Câu Hỏi Trắc Nghiệm Thực Hành (4 câu)
            </h4>
            <span class="text-xs text-gray-500 dark:text-gray-400">Tự động chấm điểm &amp; lưu tiến độ</span>
          </div>

          <div class="space-y-4">
            ${quizzesHtml}
          </div>
        </div>
      </article>`;
}).join('\n\n');

// Generate Exam Questions HTML
const examQuestionsHtml = examQuestions.map(q => {
  const letters = ['A', 'B', 'C', 'D'];
  const optsHtml = q.options.map((opt, idx) => `
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 cursor-pointer transition">
                <input type="radio" name="${q.id}" value="${letters[idx]}" class="mt-1 text-emerald-600 focus:ring-emerald-500">
                <span class="text-xs sm:text-sm text-gray-700 dark:text-gray-300"><strong>${letters[idx]}.</strong> ${opt}</span>
              </label>`).join('\n');

  return `
            <div class="p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-800">
                  Câu ${q.num} / 10 • ${q.topic}
                </span>
                <span class="text-[11px] text-gray-500 dark:text-gray-400">1.0 Điểm</span>
              </div>
              <p class="font-bold text-sm sm:text-base text-gray-900 dark:text-white">${q.q}</p>
              <div class="grid grid-cols-1 gap-2 pt-1">
                ${optsHtml}
              </div>
            </div>`;
}).join('\n');

// Generate Exam Solutions Review HTML
const examSolutionsHtml = examQuestions.map(q => `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-emerald-600 dark:text-emerald-400">Câu ${q.num}: ${q.topic}</span>
                <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">Đáp án đúng: ${q.ans}</span>
              </div>
              <p class="text-xs text-gray-700 dark:text-gray-300 font-medium">${q.q}</p>
              <div class="text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-surface p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                <strong class="text-emerald-600 dark:text-emerald-400">Phân tích kỹ thuật:</strong> ${q.sol}
              </div>
            </div>`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toàn Diện Về OpenAI Codex &amp; Kỷ Nguyên Lập Trình AI | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0F1D',
              surface: '#111827',
              card: '#1F2937'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #10b981; border-radius: 4px; }
    .codex-hero-bg {
      background: radial-gradient(circle at 20% 30%, #064e3b 0%, #022c22 45%, #082f49 100%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Header / Navigation -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg hover:opacity-90">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="hidden sm:inline">CodeHub</span>
        </a>
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div class="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs sm:text-sm font-semibold">
          <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <i class="fa-solid fa-code"></i> OpenAI Codex
          </span>
          <a href="chatgpt.html" class="px-2.5 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-robot"></i> ChatGPT
          </a>
          <a href="antigravity.html" class="px-2.5 py-1 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-bolt"></i> Antigravity
          </a>
          <a href="veo3.html" class="px-2.5 py-1 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-film"></i> Veo 3
          </a>
          <a href="gemini_google.html" class="px-2.5 py-1 rounded-lg text-cyan-600 dark:text-cyan-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Gemini AI
          </a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-laptop-code"></i>
          <span class="hidden sm:inline">Thi Đánh Giá Năng Lực (60:00)</span>
          <span class="sm:hidden">Thi Đánh Giá</span>
        </button>
        <button id="theme-toggle" class="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" aria-label="Đổi giao diện">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" aria-label="Menu bài học">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="codex-hero-bg text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold tracking-wide">
          <i class="fa-solid fa-brain text-emerald-400"></i> OpenAI • AI Code Generation &amp; GitHub Copilot Engine
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Lập Trình Toàn Diện Với <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">OpenAI Codex</span>
        </h1>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed">
          Khóa học chuẩn hóa chuyên sâu từ nền tảng đến kiến trúc cấp cao: Khám phá mô hình sinh mã nguồn đột phá của OpenAI, kiến trúc Transformer Decoder &amp; Tokenizer BPE tối ưu cho code, thước đo toán học HumanEval Benchmark &amp; Pass@k, kỹ thuật Prompt Engineering cho lập trình viên, dịch chuyển mã nguồn đa ngôn ngữ, tự động hóa Unit Test (TDD), tối ưu hiệu năng &amp; Refactoring, tích hợp GitHub Copilot, lập trình với OpenAI Codex API, đảm bảo an toàn bảo mật bản quyền và xu hướng Autonomous SWE Agents.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-book-bookmark text-emerald-400"></i> 10 Chuyên đề chuẩn hóa</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-400"></i> 40 Bài tập thực hành có đáp án</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-emerald-400"></i> Bài thi đánh giá năng lực 60 phút</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-certificate text-emerald-400"></i> Chứng chỉ Kỹ sư AI Coding</span>
        </div>
      </div>

      <!-- Quick Action Card -->
      <div class="w-full md:w-80 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center space-y-4 shadow-xl">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-2xl shadow-lg">
          <i class="fa-solid fa-terminal"></i>
        </div>
        <div>
          <h3 class="font-extrabold text-white text-base">Đánh Giá Năng Lực AI Coding</h3>
          <p class="text-xs text-gray-300 mt-1">Bài thi chuẩn hóa 10 câu hỏi tổng hợp bao quát toàn bộ kiến thức Codex, HumanEval, Copilot &amp; SWE Agents.</p>
        </div>
        <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-md transition transform active:scale-95">
          <i class="fa-solid fa-play mr-1.5"></i> Bắt Đầu Làm Bài Thi (60p)
        </button>
      </div>
    </div>
  </section>

  <!-- Progress Bar (Sticky below header) -->
  <div class="sticky top-16 z-40 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800 px-4 py-2">
    <div class="max-w-7xl mx-auto flex items-center justify-between text-xs">
      <span class="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
        <i class="fa-solid fa-chart-line text-emerald-600"></i> Tiến độ hoàn thành các bài trắc nghiệm:
      </span>
      <span id="quiz-progress-text" class="font-extrabold text-emerald-600 dark:text-emerald-400">0 / 40 câu (0%)</span>
    </div>
    <div class="max-w-7xl mx-auto mt-1.5 bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
      <div id="quiz-progress-bar" class="bg-gradient-to-r from-emerald-500 to-teal-500 h-full w-0 transition-all duration-300"></div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
      
      <!-- Left Sidebar Navigation -->
      <aside id="sidebar-nav" class="hidden lg:block lg:col-span-1 sticky top-32 bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm max-h-[calc(100vh-10rem)] overflow-y-auto sidebar-scroll">
        <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
          <h3 class="font-black text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Mục Lục 10 Chuyên Đề
          </h3>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">Codex</span>
        </div>
        <nav class="mt-3 space-y-1 text-xs">
          <a href="#bai1" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">01</span>
            <span class="truncate">Tổng Quan &amp; Kiến Trúc Codex</span>
          </a>
          <a href="#bai2" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">02</span>
            <span class="truncate">HumanEval &amp; Thước Đo Pass@k</span>
          </a>
          <a href="#bai3" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">03</span>
            <span class="truncate">Prompt Engineering Cho Code</span>
          </a>
          <a href="#bai4" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">04</span>
            <span class="truncate">Chuyển Đổi Mã Đa Ngôn Ngữ</span>
          </a>
          <a href="#bai5" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">05</span>
            <span class="truncate">Tự Động Hóa Unit Test &amp; TDD</span>
          </a>
          <a href="#bai6" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">06</span>
            <span class="truncate">Refactoring, Tối Ưu &amp; Clean Code</span>
          </a>
          <a href="#bai7" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">07</span>
            <span class="truncate">Kiến Trúc GitHub Copilot</span>
          </a>
          <a href="#bai8" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">08</span>
            <span class="truncate">Lập Trình API &amp; Sandbox An Toàn</span>
          </a>
          <a href="#bai9" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">09</span>
            <span class="truncate">Bảo Mật &amp; Bản Quyền Sở Hữu</span>
          </a>
          <a href="#bai10" class="flex items-center gap-2.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 font-medium transition">
            <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">10</span>
            <span class="truncate">Tương Lai Autonomous SWE Agents</span>
          </a>
        </nav>
      </aside>

      <!-- Main Lesson Articles -->
      <main class="lg:col-span-3 space-y-8">
        ${articlesHtml}
      </main>

    </div>
  </div>

  <!-- Certification Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
    <div class="bg-white dark:bg-dark-surface w-full max-w-4xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden my-auto max-h-[92vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            <i class="fa-solid fa-laptop-code"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base sm:text-lg leading-tight">Bài Thi Đánh Giá Năng Lực Kỹ Sư AI Coding</h3>
            <p class="text-xs text-emerald-100">10 Câu hỏi tình huống tổng hợp • Thời gian: 60:00</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/30 border border-white/20 font-mono font-bold text-sm">
            <i class="fa-regular fa-clock text-emerald-300"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeCourseQuizModal()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition" aria-label="Đóng">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body Form -->
      <div class="p-6 overflow-y-auto space-y-6 flex-1">
        <form id="courseExamForm" onsubmit="submitCourseExam(event)">
          <div class="space-y-6">
            ${examQuestionsHtml}
          </div>

          <!-- Submit Buttons -->
          <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-xs text-gray-500 dark:text-gray-400">Kiểm tra kỹ các phương án trước khi bấm nộp bài.</p>
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button type="button" onclick="restartExam()" class="px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Làm Lại Từ Đầu
              </button>
              <button type="submit" class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition transform active:scale-95">
                Nộp Bài Thi &amp; Xem Điểm
              </button>
            </div>
          </div>
        </form>

        <!-- Exam Result Display -->
        <div id="examResultBox" class="hidden mt-6 p-6 rounded-2xl border space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h4 id="examResultTitle" class="font-extrabold text-lg flex items-center gap-2"></h4>
            <span id="examScoreBadge" class="px-3 py-1 rounded-xl text-sm font-black shadow"></span>
          </div>
          <p id="examFeedbackText" class="text-sm leading-relaxed"></p>
          <div class="pt-3 border-t border-gray-200/50 dark:border-gray-700/50 flex flex-wrap gap-3">
            <button onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition">
              <i class="fa-solid fa-list-check mr-1.5"></i> Xem Lời Giải &amp; Phân Tích Kỹ Thuật
            </button>
            <button onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition">
              <i class="fa-solid fa-rotate-left mr-1.5"></i> Thi Lại Lần Nữa
            </button>
          </div>
        </div>

        <!-- Solutions Review Box -->
        <div id="examSolutionsReview" class="hidden mt-6 space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6">
          <h4 class="font-black text-base text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-emerald-600"></i> Phân Tích Lời Giải Chi Tiết Cho 10 Câu Hỏi Đánh Giá
          </h4>
          <div class="space-y-4">
            ${examSolutionsHtml}
          </div>
        </div>

      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto space-y-2">
      <p class="font-medium">Nền tảng Học Tập Lập Trình &amp; Trí Tuệ Nhân Tạo Cao Cấp CodeHub</p>
      <p>Nội dung khóa học OpenAI Codex, HumanEval &amp; AI Code Generation được biên soạn theo chuẩn nghiên cứu khoa học và kỹ nghệ phần mềm chuyên nghiệp.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }

    const savedTheme = localStorage.getItem('codex_theme');
    if (savedTheme) {
      applyTheme(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark);
    }

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(!isDark);
      localStorage.setItem('codex_theme', !isDark ? 'dark' : 'light');
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebarNav = document.getElementById('sidebar-nav');
    if (mobileMenuBtn && sidebarNav) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebarNav.classList.toggle('hidden');
        sidebarNav.classList.toggle('block');
      });
    }

    // 40 Quizzes Management
    const quizStateKey = 'codex_quizzes_state';
    let answeredQuizzes = {};

    try {
      const stored = localStorage.getItem(quizStateKey);
      if (stored) answeredQuizzes = JSON.parse(stored);
    } catch (e) {
      answeredQuizzes = {};
    }

    function checkQuiz(quizId, optionIdx, isCorrect, explanation) {
      const feedbackEl = document.getElementById('feedback-' + quizId);
      const buttons = document.querySelectorAll('.quiz-btn-' + quizId);

      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-emerald-50', 'dark:hover:bg-emerald-950/30');
        if (idx === optionIdx) {
          if (isCorrect) {
            btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/70', 'border-emerald-500', 'text-emerald-950', 'dark:text-emerald-200', 'font-bold');
          } else {
            btn.classList.add('bg-red-100', 'dark:bg-red-950/70', 'border-red-500', 'text-red-950', 'dark:text-red-200', 'font-bold');
          }
        }
      });

      if (feedbackEl) {
        feedbackEl.classList.remove('hidden');
        if (isCorrect) {
          feedbackEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          feedbackEl.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i> <strong>Chính xác!</strong> ' + explanation;
        } else {
          feedbackEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-900 dark:text-red-200';
          feedbackEl.innerHTML = '<i class="fa-solid fa-circle-xmark text-red-600 mr-1.5"></i> <strong>Chưa chính xác!</strong> ' + explanation;
        }
      }

      answeredQuizzes[quizId] = isCorrect;
      try {
        localStorage.setItem(quizStateKey, JSON.stringify(answeredQuizzes));
      } catch (e) {}
      updateProgressDisplay();
    }

    function updateProgressDisplay() {
      const total = 40;
      const count = Object.keys(answeredQuizzes).length;
      const pct = Math.round((count / total) * 100);

      const textEl = document.getElementById('quiz-progress-text');
      const barEl = document.getElementById('quiz-progress-bar');
      if (textEl) textEl.innerText = count + ' / ' + total + ' câu (' + pct + '%)';
      if (barEl) barEl.style.width = pct + '%';
    }

    // Exam Modal & 60-Minute Countdown Timer
    let examSecondsLeft = 60 * 60;
    let examTimerInterval = null;

    function updateExamTimerDisplay() {
      const timerEl = document.getElementById('examTimer');
      if (!timerEl) return;
      const m = Math.floor(examSecondsLeft / 60);
      const s = examSecondsLeft % 60;
      timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function startExamTimer() {
      stopExamTimer();
      updateExamTimerDisplay();
      examTimerInterval = setInterval(() => {
        if (examSecondsLeft > 0) {
          examSecondsLeft--;
          updateExamTimerDisplay();
        } else {
          stopExamTimer();
          alert('Hết giờ làm bài thi đánh giá năng lực! Hệ thống sẽ tự động chấm điểm bài nộp của bạn.');
          submitCourseExam();
        }
      }, 1000);
    }

    function stopExamTimer() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }
    }

    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (!examTimerInterval && examSecondsLeft === 60 * 60) {
          startExamTimer();
        }
      }
    }

    function closeCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    function restartExam() {
      if (confirm('Bạn có chắc muốn làm lại bài thi đánh giá năng lực AI Coding từ đầu?')) {
        const form = document.getElementById('courseExamForm');
        if (form) form.reset();
        const resultBox = document.getElementById('examResultBox');
        if (resultBox) resultBox.classList.add('hidden');
        const reviewBox = document.getElementById('examSolutionsReview');
        if (reviewBox) reviewBox.classList.add('hidden');
        examSecondsLeft = 60 * 60;
        startExamTimer();
      }
    }

    function toggleSolutionsReview() {
      const reviewBox = document.getElementById('examSolutionsReview');
      if (reviewBox) {
        reviewBox.classList.toggle('hidden');
      }
    }

    const examAnswers = {
      eq1: 'A', eq2: 'A', eq3: 'A', eq4: 'A', eq5: 'A',
      eq6: 'A', eq7: 'A', eq8: 'A', eq9: 'A', eq10: 'A'
    };

    function submitCourseExam(event) {
      if (event && event.preventDefault) event.preventDefault();
      stopExamTimer();

      const form = document.getElementById('courseExamForm');
      if (!form) return;

      const formData = new FormData(form);
      let score = 0;
      for (let i = 1; i <= 10; i++) {
        if (formData.get('eq' + i) === examAnswers['eq' + i]) score++;
      }

      const resultBox = document.getElementById('examResultBox');
      const titleEl = document.getElementById('examResultTitle');
      const badgeEl = document.getElementById('examScoreBadge');
      const feedbackEl = document.getElementById('examFeedbackText');

      if (!resultBox || !titleEl || !badgeEl || !feedbackEl) return;
      resultBox.classList.remove('hidden');

      if (score === 10) {
        resultBox.className = 'p-5 rounded-2xl border bg-yellow-50 dark:bg-yellow-950/40 border-yellow-500/50 text-yellow-950 dark:text-yellow-200';
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! AI CODING ARCHITECT (ĐẠT ĐIỂM TUYỆT ĐỐI)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trí tuệ kỹ nghệ AI xuất sắc! Bạn đã làm chủ hoàn hảo cả 10 kỹ năng cốt lõi của OpenAI Codex: từ kiến trúc BPE Tokenizer, HumanEval Pass@k, Prompting chuyên sâu, dịch mã đa ngôn ngữ, tự động hóa Unit Test TDD, Refactoring Clean Code, cơ chế GitHub Copilot FIM, Sandbox bảo mật API đến Autonomous SWE Agents!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/50 text-emerald-950 dark:text-emerald-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-emerald-600 text-2xl"></i> Chúc Mừng! SENIOR AI SOFTWARE ENGINEER (HẠNG GIỎI)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kiến thức về AI Code Generation của bạn rất vững vàng và chuyên sâu. Đạt mức Senior AI Engineer chứng minh bạn có thể dẫn dắt các dự án kỹ nghệ phần mềm ứng dụng AI hiện đại!';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-teal-50 dark:bg-teal-950/40 border-teal-500/50 text-teal-950 dark:text-teal-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-teal-600 text-2xl"></i> ĐẠT CHỨNG CHỈ ASSOCIATE AI DEVELOPER!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-teal-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Bạn đã nắm vững các nguyên lý căn bản của OpenAI Codex. Hãy bấm "Xem Lời Giải & Phân Tích Kỹ Thuật" bên dưới để hoàn thiện nốt các kỹ năng về Sandbox bảo mật và kiến trúc Agent nhé!';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-terminal text-amber-500 text-2xl"></i> CODEX CODE EXPLORER / Cần Rèn Luyện Thêm!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Lập trình cùng AI đòi hỏi sự hiểu biết sâu sắc về cả cú pháp, thuật toán lẫn phương pháp bảo mật. Hãy xem kỹ từng bước phân tích và lời giải chi tiết bên dưới nhé!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.addEventListener('DOMContentLoaded', () => {
      updateProgressDisplay();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath, fullHtml, 'utf8');
console.log('Successfully created courses/codex.html!');
