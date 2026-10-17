const fs = require('fs');

const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\antigravity.html';

function createQuiz(id, question, options, correctIdx, explanation) {
  const letters = ['A', 'B', 'C', 'D'];
  const buttons = options.map((opt, idx) => {
    const isCorrect = idx === correctIdx;
    const cleanExp = explanation.replace(/'/g, "\\'");
    return `<button onclick="checkQuiz('${id}', ${idx}, ${isCorrect}, '${cleanExp}')" class="quiz-btn-${id} text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition">${letters[idx]}. ${opt}</button>`;
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

// 10 Comprehensive Antigravity Topics
const topics = [
  {
    id: 'bai1',
    num: '01',
    sub: 'Kiến Trúc Tổng Quan • Kỷ Nguyên AI-First',
    title: 'Tổng Quan Google Antigravity (AGY) & Kiến Trúc Nền Tảng AI-First',
    intro: 'Google Antigravity là nền tảng phát triển phần mềm thế hệ mới (AI-first Software Development Platform) do Google DeepMind nghiên cứu và chế tạo. Khác với các công cụ hỗ trợ code truyền thống chỉ đơn thuần gợi ý văn bản, Antigravity là một hệ sinh thái đại lý tự trị (Autonomous Agentic System) có khả năng đọc hiểu cấu trúc dự án, điều phối công cụ dòng lệnh, tương tác trình duyệt và phối hợp đa tác nhân thông minh.',
    b1Title: 'Bốn Bề Mặt Tương Tác Cốt Lõi Của Antigravity',
    b1Content: `• <strong>Antigravity IDE:</strong> Môi trường phát triển tích hợp hoàn chỉnh (dựa trên nền tảng VS Code) tối ưu hóa trải nghiệm cặp đôi lập trình (Pair programming) với AI qua 3 phương thức: Tab, Inline và Sidebar Agent.<br>• <strong>Antigravity 2.0 (Desktop Orchestrator):</strong> Ứng dụng độc lập nền tảng Electron giúp quản lý các phiên làm việc, giám sát tác vụ nền, lập lịch cron và quản lý kho lưu trữ mà không cần mở trình soạn thảo.<br>• <strong>Antigravity CLI (\`agy\`):</strong> Giao diện dòng lệnh nhẹ, siêu tốc độ trên Terminal dành cho DevOps, script tự động hóa và lập trình viên ưa thích terminal.<br>• <strong>Antigravity Python SDK:</strong> Thư viện mã nguồn mở cho phép lập trình viên tích hợp đại lý Antigravity vào các pipeline CI/CD, hệ thống tự động hóa đám mây và mở rộng công cụ riêng.`,
    b2Title: 'Mô Hình Trí Tuệ Gemini Tối Tân & Phân Tầng Năng Lực',
    b2Content: `• <strong>Gemini Next / Pro:</strong> Khối óc tư duy cấp cao, đảm nhiệm các bài toán kiến trúc phức tạp, tái cấu trúc mã nguồn quy mô lớn, suy luận đa bước và lập kế hoạch chiến lược.<br>• <strong>Gemini Flash:</strong> Tối ưu cho tốc độ phản hồi cực nhanh, thực hiện các thao tác tra cứu tài liệu, phân tích mã nguồn định tuyến và hoàn thành mã tức thời.<br>• <strong>Gemini Flash Lite:</strong> Siêu nhẹ, tiết kiệm tài nguyên cho các tác vụ phụ trợ, lọc tín hiệu và giám sát liveness heartbeat.`,
    quizzes: [
      {
        q: '1. Đơn vị nào thuộc Google đã chủ trì nghiên cứu và phát triển nền tảng Google Antigravity?',
        opts: ['Google DeepMind (Advanced Agentic Coding Team)', 'Google Android Open Source Project', 'Google Chrome Extensions Team', 'Google Ads Core Architecture'],
        ans: 0,
        exp: 'Chính xác! Google Antigravity là sản phẩm đột phá của đội ngũ Advanced Agentic Coding thuộc Google DeepMind nhằm tái định nghĩa kỷ nguyên phát triển phần mềm AI-first.'
      },
      {
        q: '2. Bốn bề mặt tương tác chính cấu thành nên hệ sinh thái Google Antigravity bao gồm:',
        opts: ['Antigravity IDE, Antigravity 2.0 Desktop, Antigravity CLI (agy) và Python SDK', 'Chỉ có tiện ích mở rộng VS Code và web chatbot', 'Chỉ có thư viện Python và Docker Container', 'Chỉ có trình soạn thảo viết mã online'],
        ans: 0,
        exp: 'Chính xác! Antigravity cung cấp trải nghiệm đa bề mặt đồng bộ: Antigravity IDE, Antigravity 2.0, CLI agy và Python SDK.'
      },
      {
        q: '3. Điểm khác biệt cơ bản nhất giữa Antigravity và các công cụ AI Autocomplete truyền thống là gì?',
        opts: ['Antigravity là một cặp lập trình viên tự trị (Agentic Pair Programmer) có khả năng đọc/ghi tệp, chạy terminal và dùng công cụ', 'Antigravity chỉ có khả năng hoàn thiện nốt câu văn', 'Antigravity không thể chạy được các lệnh terminal', 'Antigravity không hiểu được toàn bộ dự án'],
        ans: 0,
        exp: 'Chính xác! Antigravity là một agentic pair programmer thực thụ: có quyền đọc/ghi codebase, thực thi build/test trên terminal, duyệt web, kích hoạt MCP tools và lập kế hoạch hành động đa bước.'
      },
      {
        q: '4. Khi thực hiện các tác vụ nghiên cứu nhanh, đọc tệp tra cứu thông tin mà không cần suy luận phức tạp, cấp mô hình nào phù hợp nhất để tối ưu tốc độ?',
        opts: ['Gemini Flash', 'Gemini Pro', 'Gemini Next', 'Gemini Ultra Heavy'],
        ans: 0,
        exp: 'Chính xác! Gemini Flash được tối ưu hóa cho tốc độ phản hồi nhanh, cực kỳ lý tưởng cho các tác vụ tra cứu, đọc tệp và hỗ trợ nghiên cứu nhanh.'
      }
    ]
  },
  {
    id: 'bai2',
    num: '02',
    sub: 'Antigravity IDE • 3 Phương Thức Tương Tác',
    title: 'Antigravity IDE: Ba Phương Thức Tương Tác (Tab, Inline & Agent Mode)',
    intro: 'Antigravity IDE được xây dựng trên nền tảng VS Code nhưng tái cấu trúc hoàn toàn lớp tương tác AI. Thay vì chỉ có một khung chat thụ động, IDE cung cấp 3 phương thức tương tác song song: Bị động (Passive Tab), Chỉ đạo tại chỗ (Instructive Inline) và Cộng tác đại lý tự trị (Collaborative Agent).',
    b1Title: 'Passive & Instructive Modalities: Tab & Inline Command',
    b1Content: `• <strong>Antigravity Tab (Autocomplete & Supercomplete):</strong> Dự đoán ý định tiếp theo chỉ với một phím Tab. Không chỉ gợi ý từng dòng, Tab còn tự động thêm các thư viện import cần thiết (Tab to Import) và dự đoán điểm nhảy con trỏ tiếp theo (Tab to Jump). Chấp nhận từng từ bằng <code>Ctrl + Mũi tên phải</code>.<br>• <strong>Inline Command (\`Ctrl + I\` / \`Cmd + I\`):</strong> Chọn một đoạn mã và nhấn phím tắt để tinh chỉnh trực tiếp tại chỗ (refactor, viết docstring, sửa lỗi logic) hoặc tạo mã mới tại vị trí con trỏ mà không làm xáo trộn ngữ cảnh chung.`,
    b2Title: 'Collaborative Modality: Sidebar Chat, Agent Mode & Planning Mode',
    b2Content: `• <strong>Sidebar Agent:</strong> Chế độ hợp tác cao nhất. Agent có thể phân tích nhiều tệp, lập kế hoạch từng bước, tự thực thi lệnh build/test và tự động sửa lỗi (Diagnostic Auto-Fix) khi gặp lỗi biên dịch.<br>• <strong>Planning Mode:</strong> Người dùng kiểm tra và phê duyệt bản kế hoạch trước khi Agent bắt đầu sửa đổi mã nguồn.<br>• <strong>Inline Code Lenses & Diff Overlays:</strong> Các nút hành động hiển thị trực tiếp phía trên các hàm/lớp (như "Refactor", "Write Tests", "Explain Code") kèm giao diện so sánh trực quan xanh/đỏ (diff viewer) ngay trên khung soạn thảo.`,
    quizzes: [
      {
        q: '1. Phím tắt chuẩn để kích hoạt chế độ chỉnh sửa mã tại chỗ (Inline Command) trong Antigravity IDE là gì?',
        opts: ['Ctrl + I (trên Windows/Linux) hoặc Cmd + I (trên macOS)', 'Ctrl + P', 'Alt + F4', 'Ctrl + Shift + B'],
        ans: 0,
        exp: 'Chính xác! Ctrl+I (Windows/Linux) hoặc Cmd+I (macOS) mở ngay thanh điều khiển Inline Command để chỉnh sửa hoặc tạo mã trực tiếp.'
      },
      {
        q: '2. Tính năng "Tab to Jump" trong Antigravity Tab có cơ chế hoạt động như thế nào?',
        opts: ['Dự đoán điểm điều hướng tiếp theo của lập trình viên và cho phép nhảy con trỏ tới đó chỉ bằng phím Tab', 'Mở một tab trình duyệt mới', 'Chuyển đổi giữa các cửa sổ ứng dụng', 'Xóa toàn bộ dòng hiện tại'],
        ans: 0,
        exp: 'Chính xác! Tab to Jump phán đoán logic viết mã và vị trí cần chỉnh sửa tiếp theo (như nhảy ra ngoài dấu ngoặc hoặc đến vị trí truyền đối số) chỉ với một lần nhấn Tab.'
      },
      {
        q: '3. Khi trình biên dịch hoặc linter báo lỗi trong Problems pane, Antigravity IDE hỗ trợ tính năng gì để xử lý nhanh?',
        opts: ['Diagnostic Auto-Fix: Kích hoạt Agent tự động phân tích ngữ cảnh lỗi và đề xuất bản vá chuẩn xác', 'Tự động xóa đoạn mã bị lỗi', 'Tắt hoàn toàn cảnh báo linter', 'Khởi động lại toàn bộ máy tính'],
        ans: 0,
        exp: 'Chính xác! Diagnostic Auto-Fix cho phép Agent đọc thông điệp lỗi biên dịch và trực tiếp tạo bản vá lỗiContiguous.'
      },
      {
        q: '4. Thư mục cấu hình cục bộ nào trong dự án được Antigravity IDE tự động nhận diện để tải các quy tắc (rules), kỹ năng (skills) và tùy biến?',
        opts: ['<project-root>/.agents/', '<project-root>/.git/', '<project-root>/node_modules/', '<project-root>/dist/'],
        ans: 0,
        exp: 'Chính xác! Thư mục .agents/ ở thư mục gốc của dự án chứa các cấu hình workspace-scoped customizations.'
      }
    ]
  },
  {
    id: 'bai3',
    num: '03',
    sub: 'Antigravity 2.0 Desktop • Chat Canvas & Panes',
    title: 'Antigravity 2.0: Chat Canvas, Slash Commands & Bảng Điều Khiển Tác Vụ',
    intro: 'Antigravity 2.0 là ứng dụng máy bàn độc lập mang lại không gian điều phối đại lý chuyên nghiệp: khung Chat Canvas rộng lớn, hệ thống lệnh tắt Slash Commands phong phú, menu trích dẫn ngữ cảnh @ Mentions và khung phụ trợ Auxiliary Pane theo dõi tệp thay đổi và tiến trình nền.',
    b1Title: 'Chat Canvas, Slash Commands & @ Mentions',
    b1Content: `• <strong>Slash Commands (\`/\`):</strong> Gõ phím \`/\` để kích hoạt các quy trình tự động hóa chuyên biệt:<br>- <code>/goal</code>: Chạy tác vụ dài hơi (qua đêm), agent kiên trì tự hoàn thành mục tiêu không dừng lại.<br>- <code>/plan</code> & <code>/grill-me</code>: Lập kế hoạch đa bước và phỏng vấn người dùng để làm rõ yêu cầu thiết kế.<br>- <code>/boost</code>: Kích hoạt tư duy chiều sâu đa góc độ và xác minh nghiêm ngặt.<br>- <code>/schedule</code>: Lập lịch tác vụ nền định kỳ hoặc hẹn giờ một lần.<br>• <strong>@ Mentions (\`@\`):</strong> Đính kèm tệp, thư mục, phiên terminal, quy tắc dự án hoặc công cụ MCP trực tiếp vào ngữ cảnh lời nhắc.`,
    b2Title: 'Bảng Điều Khiển Phụ Trợ (Auxiliary Pane) & Artifacts',
    b2Content: `• <strong>Auxiliary Pane:</strong> Bảng điều khiển đa năng hiển thị tiến trình của Subagents, Background Tasks, danh sách Files Changed và các cửa sổ Terminal nền.<br>• <strong>Hệ thống Artifacts:</strong> Tài liệu Markdown có cấu trúc lưu tại <code>brain/&lt;conversation-id&gt;</code> dùng để trình bày báo cáo kỹ thuật, sơ đồ tư duy Mermaid, bảng phân tích và bản kế hoạch có thể tương tác (Interactive Plan with Proceed button).<br>• <strong>Reactive Wakeup:</strong> Hệ thống tự động đánh thức Agent khi tác vụ nền hoàn thành hoặc tin nhắn subagent gửi về, loại bỏ hoàn toàn việc lập trình viên phải chờ đợi hoặc polling thủ công.`,
    quizzes: [
      {
        q: '1. Lệnh tắt slash command nào được khuyến nghị khi lập trình viên muốn giao một bài toán lớn, phức tạp cho Agent chạy qua đêm cho tới khi hoàn thành mục tiêu?',
        opts: ['/goal', '/compact', '/browser', '/schedule'],
        ans: 0,
        exp: 'Chính xác! Lệnh /goal được thiết kế cho các tác vụ dài hạn, Agent sẽ liên tục tư duy, thực thi, kiểm tra và không dừng lại cho đến khi mục tiêu đã được thỏa mãn trọn vẹn.'
      },
      {
        q: '2. Ký tự nào được sử dụng trong Chat Canvas để mở menu đính kèm nhanh tệp, thư mục, phiên terminal hoặc quy tắc dự án?',
        opts: ['@ (At symbol)', '# (Hash)', '$ (Dollar)', '% (Percent)'],
        ans: 0,
        exp: 'Chính xác! Gõ @ sẽ mở menu Mention thông minh để đính kèm ngữ cảnh chính xác vào lời nhắc.'
      },
      {
        q: '3. Cơ chế "Reactive Wakeup" trong Antigravity giải quyết vấn đề gì?',
        opts: ['Hệ thống tự động đánh thức Agent khi tác vụ nền xong hoặc subagent phản hồi, không cần vòng lặp thăm dò (polling)', 'Báo thức người dùng dậy vào buổi sáng', 'Tự động mở máy tính khi có điện', 'Bật màn hình khi có chuyển động chuột'],
        ans: 0,
        exp: 'Chính xác! Reactive Wakeup đảm bảo Agent không tốn tài nguyên chạy vòng lặp kiểm tra trạng thái; hệ thống sẽ kích hoạt Agent ngay khi có sự kiện mới.'
      },
      {
        q: '4. Các tài liệu Artifacts tương tác được Agent tạo ra được lưu trữ trong thư mục nào?',
        opts: ['<appDataDir>/brain/<conversation-id>/', '<appDataDir>/tmp/trash/', '<project-root>/.git/', 'C:/Windows/System32/'],
        ans: 0,
        exp: 'Chính xác! Artifacts được lưu trữ riêng biệt theo phiên hội thoại tại <appDataDir>/brain/<conversation-id>/ để tiện tra cứu và hiển thị trực quan.'
      }
    ]
  },
  {
    id: 'bai4',
    num: '04',
    sub: 'Multi-Agent Swarm • Điều Phối Đa Tác Nhân',
    title: 'Hệ Thống Subagent & Cơ Chế Đa Tác Nhân (Multi-Agent Swarm Orchestration)',
    intro: 'Để giải quyết các dự án quy mô doanh nghiệp, Antigravity sử dụng kiến trúc phân quyền đa tác nhân. Agent cha (Parent Agent) có thể linh hoạt định nghĩa và khởi tạo đồng thời hàng loạt Agent con (Subagents) với không gian làm việc độc lập hoặc chia sẻ.',
    b1Title: 'Vòng Đời & Công Cụ Quản Lý Subagents',
    b1Content: `• <strong>invoke_subagent:</strong> Khởi chạy một hoặc nhiều subagent chạy nền đồng thời với vai trò, mô hình và lời nhắc riêng biệt.<br>• <strong>define_subagent:</strong> Định nghĩa một kiểu subagent chuyên biệt mới theo thời gian thực (hệ thống lời nhắc riêng, cấp quyền công cụ MCP hoặc công cụ ghi mã).<br>• <strong>send_message:</strong> Kênh liên lạc bất đồng bộ giữa Agent cha và các subagent qua <code>conversationID</code>.<br>• <strong>manage_subagents:</strong> Liệt kê trạng thái trực tiếp (\`running\`, \`idle\`, \`waiting\`, \`errored\`) hoặc tiêu diệt các subagent khi hoàn thành.`,
    b2Title: 'Các Chế Độ Không Gian Làm Việc (Workspace Modes)',
    b2Content: `• <strong>inherit (Mặc định):</strong> Subagent kế thừa và làm việc trực tiếp trên cùng không gian thư mục với Agent cha.<br>• <strong>branch:</strong> Tạo ra một nhánh workspace độc lập được clone riêng biệt, ngăn ngừa việc ghi đè mã nguồn đang phát triển khi thử nghiệm các tính năng lớn.<br>• <strong>share:</strong> Chia sẻ kho lưu trữ bên dưới (tương tự <code>git worktree</code>), cho phép phân nhánh độc lập mà không tốn dung lượng ổ đĩa.<br>• <strong>Các subagent có sẵn:</strong> \`self\` (kế thừa đầy đủ quyền), \`research\` (chỉ đọc, chuyên khảo sát codebase và tìm kiếm tài liệu), \`image-generator\` (tạo và chỉnh sửa hình ảnh).`,
    quizzes: [
      {
        q: '1. Chế độ Workspace nào cho phép Subagent thử nghiệm các thay đổi mã nguồn lớn trong một thư mục bản sao tách biệt hoàn toàn với dự án chính?',
        opts: ['branch', 'inherit', 'share', 'inline'],
        ans: 0,
        exp: 'Chính xác! Chế độ branch tạo ra không gian cô lập nhánh tách biệt, đảm bảo các thử nghiệm refactor không ảnh hưởng trực tiếp đến workspace chính.'
      },
      {
        q: '2. Subagent tích hợp sẵn mang tên "research" có đặc tính quyền hạn quan trọng nào?',
        opts: ['Là subagent chỉ đọc (read-only), chuyên khảo sát codebase, đọc tài liệu và tra cứu web', 'Có toàn quyền xóa tệp trong máy tính', 'Chỉ có thể tạo hình ảnh 3D', 'Không có quyền truy cập vào bất kỳ tệp nào'],
        ans: 0,
        exp: 'Chính xác! Research subagent sở hữu các công cụ đọc chuyên dụng để tìm kiếm và nghiên cứu mà không làm thay đổi tệp tin hay làm rối ngữ cảnh agent cha.'
      },
      {
        q: '3. Công cụ nào cho phép Agent cha gửi chỉ đạo bổ sung tới một subagent đang chạy thông qua conversationID?',
        opts: ['send_message', 'ask_question', 'write_to_file', 'manage_task'],
        ans: 0,
        exp: 'Chính xác! send_message là giao thức gửi thông điệp trực tiếp giữa các tác nhân thông minh qua conversationID.'
      },
      {
        q: '4. Khi một subagent ở chế độ "branch" bị hủy bỏ (kill), điều gì sẽ xảy ra với dữ liệu của nó?',
        opts: ['Thư mục workspace phân nhánh bị xóa nhưng nhật ký (logs) và artifacts vẫn được bảo lưu an toàn', 'Toàn bộ máy tính bị khởi động lại', 'Mọi tệp của dự án chính bị xóa sạch', 'Dữ liệu bị gửi công khai lên mạng'],
        ans: 0,
        exp: 'Chính xác! Hệ thống tự động dọn dẹp thư mục tạm thời của workspace nhánh nhưng giữ lại toàn bộ nhật ký và sản phẩm artifact.'
      }
    ]
  },
  {
    id: 'bai5',
    num: '05',
    sub: 'Customizations • Skills, Rules & Hooks',
    title: 'Hệ Thống Tùy Biến: Custom Skills, Rules & Hooks Trong Antigravity',
    intro: 'Khả năng mở rộng không giới hạn của Antigravity đến từ hệ thống Tùy Biến (Customizations) với 3 cấp độ: Skills (Gói kỹ năng hướng dẫn và kịch bản thực thi), Rules (Quy tắc hành vi bất di bất dịch) và Hooks (Điểm chặn can thiệp vòng đời tác vụ).',
    b1Title: 'Custom Skills: Cấu Trúc & Độ Ưu Tiên Nạp',
    b1Content: `• Mỗi kỹ năng là một thư mục chứa tệp bắt buộc <code>SKILL.md</code> với tiêu đề YAML (name, description) cùng tài liệu hướng dẫn và các thư mục mở rộng <code>scripts/</code>, <code>resources/</code>, <code>references/</code>.<br>• <strong>Thứ tự ưu tiên nạp (Loading Priority):</strong><br>1. <strong>Enterprise:</strong> Quy định tập trung toàn doanh nghiệp (Chính sách cao nhất).<br>2. <strong>Workspace:</strong> Nằm tại <code>.agents/skills/</code> trong thư mục dự án hiện tại.<br>3. <strong>User / Global:</strong> Nằm tại <code>~/.gemini/antigravity/skills/</code> của người dùng.<br>4. <strong>Builtin:</strong> Kỹ năng mặc định tích hợp sẵn của hệ thống.`,
    b2Title: 'Rules & Lifecycle Hooks',
    b2Content: `• <strong>Rules (\`rules.yaml\`):</strong> Định nghĩa các tiêu chuẩn lập trình, phong cách mã nguồn, quy ước kiểm thử và quy chuẩn an toàn. Có thể gán kích hoạt tự động theo mẫu đường dẫn tệp (Path Glob patterns) hoặc điều kiện ngữ cảnh.<br>• <strong>Lifecycle Hooks:</strong> Cho phép lập trình viên chạy mã can thiệp vào các thời điểm then chốt của Agent:<br>- \`before_tool_call\`: Thẩm tra hoặc sửa đổi tham số lệnh trước khi thực thi.<br>- \`after_tool_call\`: Phân tích kết quả trả về của công cụ.<br>- \`on_error\`: Tự động bắt lỗi ngoại lệ và kích hoạt kịch bản khắc phục.`,
    quizzes: [
      {
        q: '1. Tệp bắt buộc phải có trong mỗi thư mục kỹ năng (Skill) của Antigravity là gì?',
        opts: ['SKILL.md (với tiêu đề YAML metadata)', 'index.js', 'Dockerfile', 'package.json'],
        ans: 0,
        exp: 'Chính xác! Mỗi kỹ năng bắt buộc phải có tệp SKILL.md chứa frontmatter YAML mô tả name, description và hướng dẫn sử dụng chi tiết.'
      },
      {
        q: '2. Khi một kỹ năng ở cấp Workspace có cùng tên với kỹ năng ở cấp User Global, hệ thống sẽ ưu tiên nạp kỹ năng nào?',
        opts: ['Ưu tiên kỹ năng cấp Workspace', 'Ưu tiên kỹ năng cấp User Global', 'Báo lỗi và dừng hoạt động', 'Ngẫu nhiên chọn một trong hai'],
        ans: 0,
        exp: 'Chính xác! Thứ tự ưu tiên nạp là Enterprise > Workspace > User/Global > Builtin. Kỹ năng của Workspace sẽ ghi đè cấp User/Global.'
      },
      {
        q: '3. Để áp dụng một quy tắc kiểm tra định dạng code (linter rule) chỉ cho các tệp TypeScript trong thư mục \`src/\`, ta sử dụng cơ chế nào trong Rules?',
        opts: ['Kích hoạt theo Path Glob pattern (vd: src/**/*.ts)', 'Ghi chú văn bản thông thường ở đầu tệp README', 'Đổi đuôi tệp thành .txt', 'Tạo một máy ảo riêng'],
        ans: 0,
        exp: 'Chính xác! Rules cho phép định cấu hình Path Glob matching để chỉ áp dụng quy tắc khi Agent thao tác trên các tệp phù hợp.'
      },
      {
        q: '4. Điểm chặn vòng đời (Lifecycle Hook) nào cho phép kiểm tra tính an toàn của một câu lệnh terminal trước khi Agent thực thi nó?',
        opts: ['before_tool_call', 'after_tool_call', 'on_finish', 'on_conversation_start'],
        ans: 0,
        exp: 'Chính xác! Hook before_tool_call can thiệp ngay trước khi công cụ được kích hoạt, cho phép chặn hoặc xác thực tham số an toàn.'
      }
    ]
  },
  {
    id: 'bai6',
    num: '06',
    sub: 'Giao Thức MCP • Tích Hợp Công Cụ Ngoài',
    title: 'Model Context Protocol (MCP): Mở Rộng Công Cụ & Tích Hợp Hệ Thống',
    intro: 'Model Context Protocol (MCP) là giao thức mở chuẩn hóa do Anthropic đề xuất và Google Antigravity áp dụng toàn diện. MCP cho phép Agent kết nối an toàn với cơ sở dữ liệu (PostgreSQL, SQLite), dịch vụ bên thứ ba (GitHub, Jira, Slack) và các công cụ nội bộ thông qua mô hình Client-Server tiêu chuẩn.',
    b1Title: 'Kiến Trúc & Phương Thức Hoạt Động Của MCP',
    b1Content: `• <strong>MCP Client (Antigravity):</strong> Phát hiện các máy chủ MCP đã cấu hình, truy vấn danh sách công cụ (Tools), tài nguyên (Resources) và lời nhắc mẫu (Prompts).<br>• <strong>MCP Server:</strong> Tiến trình chạy nền cung cấp các chức năng cụ thể qua giao thức JSON-RPC chuẩn (qua kênh Stdio hoặc Server-Sent Events SSE).<br>• <strong>Cấu hình MCP:</strong> Được khai báo trong tệp <code>settings.json</code> với định dạng mcpServers: lệnh thực thi, biến môi trường và quyền hạn.`,
    b2Title: 'Các Use-Cases Thực Tiễn & Bảo Mật MCP',
    b2Content: `• <strong>Truy vấn cơ sở dữ liệu:</strong> Agent có thể trực tiếp kết nối cơ sở dữ liệu PostgreSQL/MySQL để đọc lược đồ (schema), tối ưu hóa câu lệnh SQL và kiểm tra dữ liệu mẫu trong quá trình lập trình backend.<br>• <strong>Tự động hóa Git & Issue Tracking:</strong> Tự động tạo Pull Request, cập nhật trạng thái issue trên Jira hoặc gửi cảnh báo triển khai lên kênh Slack nội bộ.<br>• <strong>Nguyên tắc an toàn:</strong> Mọi cuộc gọi MCP sửa đổi dữ liệu (write/delete) đều tuân thủ chính sách phê duyệt nghiêm ngặt của Antigravity.`,
    quizzes: [
      {
        q: '1. Giao thức truyền thông chuẩn hóa được Model Context Protocol (MCP) sử dụng giữa Client và Server là gì?',
        opts: ['JSON-RPC (qua Stdio hoặc Server-Sent Events SSE)', 'SOAP XML qua FTP', 'Telnet không mã hóa', 'WebRTC âm thanh'],
        ans: 0,
        exp: 'Chính xác! MCP sử dụng định dạng JSON-RPC chuẩn hóa truyền qua Stdio hoặc SSE để giao tiếp giữa Agent và máy chủ công cụ.'
      },
      {
        q: '2. Ba khả năng cốt lõi (Primacy Capabilities) mà một máy chủ MCP Server có thể cung cấp cho Antigravity gồm:',
        opts: ['Tools (Công cụ), Resources (Tài nguyên) và Prompts (Lời nhắc mẫu)', 'CPU, GPU và RAM', 'Audio, Video và Subtitle', 'HTML, CSS và JavaScript'],
        ans: 0,
        exp: 'Chính xác! Ba trụ cột chính của thông số kỹ thuật MCP là Tools, Resources và Prompts.'
      },
      {
        q: '3. Khi cấu hình một máy chủ MCP Server cho toàn bộ dự án, cấu hình thường được đặt trong tệp nào?',
        opts: ['settings.json (mục mcpServers)', 'index.html', 'package.lock', '.env.example'],
        ans: 0,
        exp: 'Chính xác! Khối cấu hình mcpServers trong settings.json khai báo danh sách máy chủ, lệnh khởi động và tham số môi trường.'
      },
      {
        q: '4. Lợi ích lớn nhất khi sử dụng MCP so với việc viết script công cụ đóng cứng (hardcoded) là gì?',
        opts: ['Chuẩn hóa giao diện kết nối, khả năng tái sử dụng độc lập ngôn ngữ và bảo mật kiểm soát quyền gọi', 'Làm máy tính chạy nhanh gấp 10 lần', 'Không cần kết nối internet', 'Tự động tạo ra mã nguồn không có lỗi'],
        ans: 0,
        exp: 'Chính xác! MCP mang lại sự phân tách module rõ ràng: máy chủ viết bằng bất kỳ ngôn ngữ nào (Python, TypeScript) đều dùng chung được cho mọi Agent tương thích MCP.'
      }
    ]
  },
  {
    id: 'bai7',
    num: '07',
    sub: 'Bảo Mật & Phân Quyền • Terminal Sandbox',
    title: 'Quản Lý Quyền Hạn, Bảo Mật Terminal Sandbox & An Toàn Thực Thi Mã',
    intro: 'Là một hệ thống đại lý có khả năng chạy lệnh hệ điều hành và sửa đổi tệp, Antigravity đặt tính an toàn và bảo mật dữ liệu lên hàng đầu với hệ thống phân quyền đa lớp (Multi-layer Permission Grants), bộ lọc lệnh cho phép/chặn (Allowlist/Denylist) và môi trường hộp cát cách ly (Terminal Sandbox).',
    b1Title: 'Bốn Cấp Độ Chính Sách Thực Thi Công Cụ (Tool Execution Policy)',
    b1Content: `• <strong>always-proceed:</strong> Tự động thực thi mọi thao tác công cụ mà không cần hỏi lại người dùng (chỉ nên dùng cho môi trường thử nghiệm an toàn).<br>• <strong>request-review:</strong> Agent sẽ xin phép người dùng trước mỗi thao tác có rủi ro (ghi đè tệp ngoài workspace, chạy lệnh hệ thống nhạy cảm).<br>• <strong>strict:</strong> Yêu cầu phê duyệt thủ công cho từng câu lệnh và thao tác ghi tệp.<br>• <strong>proceed-in-sandbox:</strong> Tự động thực thi các câu lệnh nhưng giam giữ hoàn toàn trong môi trường hộp cát (Sandbox), ngăn ngừa việc sửa đổi tệp hệ thống thực.`,
    b2Title: 'Terminal Sandbox & Kiểm Soát Truy Cập Tệp',
    b2Content: `• <strong>Terminal Sandbox:</strong> Ứng dụng công nghệ container hóa/ảo hóa nhẹ cách ly tiến trình chạy lệnh, ngăn chặn mã độc can thiệp vào tài nguyên máy chủ.<br>• <strong>Non-Workspace File Access:</strong> Thiết lập chính sách bảo vệ tệp ngoài không gian làm việc (\`allow\`, \`ask\`, \`deny\`) để bảo vệ dữ liệu cá nhân của lập trình viên.<br>• <strong>Internet Access Policy:</strong> Giới hạn danh sách tên miền được phép truy cập (Browser Allowlist), ngăn chặn việc rò rỉ dữ liệu qua các API không xác thực.`,
    quizzes: [
      {
        q: '1. Chính sách Tool Execution Policy nào cho phép Agent thực thi lệnh tự động nhưng bị cô lập an toàn trong môi trường ảo hóa cách ly?',
        opts: ['proceed-in-sandbox', 'always-proceed', 'strict', 'deny-all'],
        ans: 0,
        exp: 'Chính xác! proceed-in-sandbox giúp cân bằng giữa tính tự động hóa cao và sự an toàn tuyệt đối cho hệ thống máy chủ.'
      },
      {
        q: '2. Khi muốn ngăn chặn tuyệt đối Agent truy cập và đọc các tệp tin bên ngoài thư mục dự án (như thư mục C:/Users/ hay ~/.ssh/), ta cần cấu hình mục nào?',
        opts: ['Non-Workspace File Access đặt thành "deny"', 'Theme chuyển thành Dark mode', 'Tắt kết nối internet', 'Đổi tên thư mục gốc'],
        ans: 0,
        exp: 'Chính xác! Non-Workspace File Access = "deny" sẽ khóa chặt phạm vi hoạt động của Agent bên trong ranh giới thư mục workspace hiện tại.'
      },
      {
        q: '3. Cơ chế Command Denylist trong Antigravity được sử dụng nhằm mục đích gì?',
        opts: ['Liệt kê danh sách các câu lệnh nguy hiểm bị cấm tuyệt đối (vd: rm -rf /, format, drop database)', 'Tăng tốc độ tải trang web', 'Đổi màu chữ trên terminal', 'Tự động sửa lỗi chính tả lệnh'],
        ans: 0,
        exp: 'Chính xác! Command Denylist là lá chắn chặn đứng các câu lệnh hủy hoại dữ liệu hoặc can thiệp trái phép vào hệ điều hành.'
      },
      {
        q: '4. Khi có xung đột cấu hình giữa Global Settings và Project-Level Settings, hệ thống xử lý như thế nào?',
        opts: ['Project-Level Settings được ưu tiên áp dụng cao hơn Global Settings cho dự án đó', 'Global Settings luôn luôn ghi đè Project Settings', 'Hệ thống tự động xóa cả hai', 'Hệ thống dừng hoạt động'],
        ans: 0,
        exp: 'Chính xác! Project-Level Settings có tính đặc thù cao hơn nên luôn ghi đè các thiết lập toàn cục khi dự án đó đang hoạt động.'
      }
    ]
  },
  {
    id: 'bai8',
    num: '08',
    sub: 'Antigravity CLI • Dòng Lệnh Siêu Tốc `agy`',
    title: 'Antigravity CLI (\`agy\`): Giao Diện Dòng Lệnh Nhanh & Tự Động Hóa Script',
    intro: 'Antigravity CLI (lệnh \`agy\`) là bề mặt giao tiếp dòng lệnh thuần túy cực kỳ mạnh mẽ, khởi động tức thì trên Terminal, hỗ trợ TUI trực quan, tích hợp đầy đủ hệ thống Slash Commands và cho phép nhúng vào các kịch bản Bash / PowerShell tự động hóa.',
    b1Title: 'Lệnh Khởi Động & Phím Tắt Điều Khiển `agy`',
    b1Content: `• <strong>Khởi động nhanh:</strong> Gõ <code>agy</code> tại bất kỳ thư mục nào để mở phiên làm việc tức thì.<br>• <strong>Xác thực tài khoản:</strong> Ở lần đầu tiên chạy, làm theo hướng dẫn xác thực trình duyệt hoặc cấu hình API Key.<br>• <strong>Thoát an toàn:</strong> Nhấn <code>Ctrl + D</code> hai lần liên tiếp hoặc gõ <code>/exit</code> / <code>/quit</code>.<br>• <strong>Tệp cấu hình CLI:</strong> Lưu trữ tại <code>~/.gemini/antigravity-cli/settings.json</code>.`,
    b2Title: 'CLI Flags & Tự Động Hóa Không Đầu (Headless Mode)',
    b2Content: `• <strong>Tham số thông dụng:</strong><br>- <code>agy --help</code>: Hiển thị toàn bộ cờ lệnh và tài liệu trợ giúp.<br>- <code>agy -p "lời nhắc"</code>: Chạy tác vụ một lần (one-shot prompt) và tự động thoát sau khi in kết quả.<br>- <code>agy --model gemini-pro</code>: Chỉ định phiên bản mô hình xử lý.<br>• <strong>Tích hợp CI/CD Pipeline:</strong> Sử dụng CLI trong các GitHub Actions hoặc GitLab CI để tự động review code, sinh test cases và tạo báo cáo tóm tắt thay đổi khi có Pull Request mới.`,
    quizzes: [
      {
        q: '1. Để khởi động Antigravity CLI trên terminal, lập trình viên sử dụng câu lệnh nào?',
        opts: ['agy', 'antigravity start', 'gemini-cli run', 'agent-open'],
        ans: 0,
        exp: 'Chính xác! Lệnh agy là shortcut tiêu chuẩn siêu ngắn gọn để khởi động Antigravity CLI.'
      },
      {
        q: '2. Tổ hợp phím tắt nhanh nào trên terminal để thoát khỏi phiên làm việc của \`agy\`?',
        opts: ['Ctrl + D hai lần (hoặc /exit)', 'Ctrl + C một lần', 'Alt + Tab', 'Shift + Enter'],
        ans: 0,
        exp: 'Chính xác! Nhấn Ctrl+D hai lần hoặc gõ /exit để thoát khỏi TUI của agy một cách sạch sẽ.'
      },
      {
        q: '3. Tệp cấu hình các thông số, phím tắt và khóa cài đặt của Antigravity CLI nằm ở đường dẫn nào?',
        opts: ['~/.gemini/antigravity-cli/settings.json', '/etc/antigravity.conf', 'C:/agy.ini', '~/.bash_history'],
        ans: 0,
        exp: 'Chính xác! Cấu hình CLI được lưu tại ~/.gemini/antigravity-cli/settings.json.'
      },
      {
        q: '4. Muốn chạy một câu lệnh truy vấn một lần (one-shot) và tự thoát mà không cần vào giao diện tương tác, ta dùng cờ nào?',
        opts: ['agy -p "lời nhắc"', 'agy --fullscreen', 'agy --gui', 'agy --interactive'],
        ans: 0,
        exp: 'Chính xác! Cờ -p (hoặc --prompt) thực hiện lời nhắc dạng non-interactive, cực kỳ phù hợp cho các script shell và CI/CD.'
      }
    ]
  },
  {
    id: 'bai9',
    num: '09',
    sub: 'Antigravity Python SDK • Lập Trình Orchestration API',
    title: 'Antigravity Python SDK: Lập Trình Agent & Điều Phối Đám Mây Tự Động',
    intro: 'Thư viện mã nguồn mở \`antigravity-sdk-python\` cung cấp giao diện lập trình cấp cao giúp các nhà phát triển điều phối Agent bằng mã Python: thuê phiên Agent động (Agent Leasing), đăng ký công cụ tùy chỉnh (Custom Tools Injection) và bắt sự kiện phản hồi dạng Streaming.',
    b1Title: 'Cài Đặt & Khởi Tạo Phiên Agent (Agent Session)',
    b1Content: `• <strong>Cài đặt:</strong> <code>pip install antigravity-sdk</code>.<br>• <strong>Khởi tạo Client & Phiên làm việc:</strong><br><pre class="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto"><code>from antigravity import AntigravityClient

client = AntigravityClient()
session = client.create_session(
    workspace_path="/path/to/project",
    model="gemini-pro"
)</code></pre><br>• <strong>Gửi thông điệp & Streaming:</strong> Phương thức <code>session.send_message_stream(prompt)</code> trả về luồng sự kiện phân tích, công cụ thực thi và khối mã thời gian thực.`,
    b2Title: 'Đăng Ký Custom Tool Bằng Python Decorator',
    b2Content: `• Lập trình viên có thể mở rộng khả năng của Agent bằng các hàm Python tự định nghĩa:<br><pre class="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto"><code>@session.tool
def deploy_to_staging(cluster_id: str, version: str) -> str:
    """Triển khai phiên bản ứng dụng lên cụm máy chủ Staging."""
    # Logic kết nối Kubernetes / Cloud API
    return f"Đã deploy thành công version {version} lên {cluster_id}"</code></pre><br>• Agent sẽ tự động đọc docstring và kiểu dữ liệu (Type Hints) để quyết định thời điểm và tham số gọi hàm chính xác.`,
    quizzes: [
      {
        q: '1. Thư viện Python chính thức được cung cấp bởi Antigravity để điều phối Agent bằng code là gì?',
        opts: ['antigravity-sdk (trên PyPI)', 'google-ai-code-old', 'deepmind-robotics', 'tensorflow-agent-v1'],
        ans: 0,
        exp: 'Chính xác! Thư viện antigravity-sdk-python cung cấp toàn bộ API điều phối, quản lý phiên và inject công cụ.'
      },
      {
        q: '2. Để định nghĩa một hàm Python thành công cụ mà Agent có thể tự động hiểu và kích hoạt, lập trình viên sử dụng decorator nào?',
        opts: ['@session.tool (hoặc @client.tool)', '@app.route', '@staticmethod', '@dataclass'],
        ans: 0,
        exp: 'Chính xác! Decorator @session.tool đăng ký hàm với Agent và tự động trích xuất schema từ docstring cùng Type Hints.'
      },
      {
        q: '3. Cơ chế Streaming trong SDK mang lại lợi ích gì cho giao diện người dùng?',
        opts: ['Hiển thị từng đoạn suy nghĩ, văn bản và công cụ được gọi ngay khi Agent vừa tạo ra, không cần đợi toàn bộ câu trả lời', 'Tự động phát video trực tiếp', 'Tải toàn bộ dữ liệu về một lần', 'Giảm dung lượng ổ cứng'],
        ans: 0,
        exp: 'Chính xác! Streaming cung cấp phản hồi thời gian thực tức thì, mang lại trải nghiệm mượt mà không độ trễ.'
      },
      {
        q: '4. Khi cần giải phóng tài nguyên phiên Agent sau khi kịch bản kết thúc, phương thức nào nên được gọi?',
        opts: ['session.close() hoặc dùng context manager "with client.create_session(...) as session:"', 'os.system("shutdown")', 'del client', 'Tắt nguồn máy chủ'],
        ans: 0,
        exp: 'Chính xác! Gọi session.close() hoặc dùng context manager with giúp dọn dẹp các tiến trình nền và giải phóng token.'
      }
    ]
  },
  {
    id: 'bai10',
    num: '10',
    sub: 'Chiến Lược Tinh Hoa • Context Engineering & Best Practices',
    title: 'Chiến Lược Lập Trình Đỉnh Cao: Context Engineering & Best Practices Với Antigravity',
    intro: 'Để khai thác tối đa 100% sức mạnh của Antigravity, lập trình viên cần nắm vững nghệ thuật Context Engineering (Kỹ thuật quản trị ngữ cảnh), quy trình Test-Driven Pair Programming, tối ưu hóa cửa sổ ngữ cảnh qua lệnh \`/compact\` và phối hợp nhịp nhàng giữa các Slash Commands chuyên biệt.',
    b1Title: 'Context Engineering: Kỹ Thuật Đưa Ngữ Cảnh Tinh Gọn',
    b1Content: `• <strong>Nguyên tắc Trọng tâm (Focus):</strong> Tránh đưa toàn bộ dự án vào ngữ cảnh; chỉ đính kèm các tệp liên quan trực tiếp thông qua <code>@file</code> hoặc <code>@folder</code>.<br>• <strong>Quản lý Context Window:</strong> Khi cuộc hội thoại trở nên quá dài và chậm, sử dụng ngay lệnh <code>/compact</code> để Agent tóm tắt cô đọng lịch sử, giải phóng bộ nhớ ngữ cảnh mà không làm mất các quyết định kỹ thuật then chốt.<br>• <strong>Quy trình TDD (Test-Driven Development):</strong> Yêu cầu Agent viết kiểm thử đơn vị (Unit Tests) trước, chạy kiểm thử xác nhận thất bại (Red), sau đó viết mã nguồn đáp ứng kiểm thử (Green) và tái cấu trúc (Refactor).`,
    b2Title: 'Hệ Sinh Thái Slash Commands Nâng Cao',
    b2Content: `• <strong>/learn:</strong> Khắc sâu các điều chỉnh hoặc giải pháp sửa lỗi vừa thực hiện vào bộ nhớ dài hạn của dự án.<br>• <strong>/browser:</strong> Kích hoạt trình duyệt không đầu (Headless Browser) để test giao diện web, chụp ảnh màn hình và kiểm tra trải nghiệm người dùng.<br>• <strong>/teamwork-preview:</strong> Mô phỏng một nhóm nhiều Agent phối hợp phân vai (Product Manager, Senior Coder, QA Engineer) giải quyết dự án toàn diện.<br>• <strong>Documentation Integrity:</strong> Tuyệt đối duy trì tính toàn vẹn của chú thích, tài liệu và docstrings hiện có khi yêu cầu Agent chỉnh sửa mã nguồn.`,
    quizzes: [
      {
        q: '1. Khi phiên trò chuyện với Agent trở nên quá dài và cửa sổ ngữ cảnh bị đầy, lệnh tắt nào giúp tóm tắt cô đọng thông tin để giải phóng bộ nhớ?',
        opts: ['/compact', '/exit', '/clear-hard-disk', '/reload-window'],
        ans: 0,
        exp: 'Chính xác! /compact tóm tắt toàn bộ tiến trình và quyết định quan trọng thành một bản tóm tắt ngắn, làm sạch context window.'
      },
      {
        q: '2. Lệnh tắt nào được sử dụng khi bạn đã hướng dẫn Agent một cách giải quyết mới và muốn Agent ghi nhớ vĩnh viễn thói quen này cho các lần sau?',
        opts: ['/learn', '/remember-all', '/save-session', '/history'],
        ans: 0,
        exp: 'Chính xác! Lệnh /learn lưu lại bài học kinh nghiệm và quy tắc xử lý vào hệ thống bộ nhớ dài hạn của dự án.'
      },
      {
        q: '3. Phương pháp lập trình nào được khuyến nghị hàng đầu khi làm việc với Antigravity để đảm bảo mã sinh ra không có lỗi tiềm ẩn?',
        opts: ['Test-Driven Development (TDD): Viết Unit Tests trước, sau đó yêu cầu Agent viết mã vượt qua bài test', 'Chạy mã trực tiếp trên Production mà không cần test', 'Viết mã liên tục không kiểm tra lỗi', 'Chỉ nhìn code bằng mắt'],
        ans: 0,
        exp: 'Chính xác! TDD kết hợp với Agent giúp tự động hóa chu trình xác minh: Agent chạy test, phát hiện lỗi và tự sửa đến khi test pass 100%.'
      },
      {
        q: '4. Lệnh tắt /browser mang lại khả năng đặc biệt nào cho Agent?',
        opts: ['Mở trình duyệt thực tế để tương tác, test giao diện người dùng, chụp ảnh màn hình và tra cứu web trực tiếp', 'Mở ứng dụng mạng xã hội', 'Tải video YouTube về máy', 'Chơi game trực tuyến'],
        ans: 0,
        exp: 'Chính xác! /browser trang bị khả năng duyệt web tự động hóa (Puppeteer/Playwright engine) để Agent kiểm thử UI và tương tác với các ứng dụng web.'
      }
    ]
  }
];

// 10 Certification Exam Questions
const examQuestions = [
  {
    id: 'eq1',
    num: 1,
    topic: 'Kiến Trúc & Bề Mặt',
    q: 'Một kỹ sư DevOps muốn viết một GitHub Action script chạy trên runner Ubuntu để tự động kiểm tra bảo mật và tối ưu hóa Dockerfile mà không cần mở bất kỳ giao diện đồ họa nào. Bề mặt tương tác nào của Antigravity là lựa chọn tối ưu nhất?',
    options: [
      'Antigravity CLI (\`agy\`) với cờ lệnh non-interactive prompt (\`-p\`)',
      'Antigravity IDE giao diện đồ họa',
      'Antigravity 2.0 Desktop Electron App',
      'Mở giao diện Chat Canvas thủ công'
    ],
    ans: 'A',
    sol: 'Antigravity CLI (agy) là công cụ dòng lệnh nhẹ, khởi động cực nhanh và hỗ trợ cờ -p (hoặc --prompt) chuyên dụng cho các pipeline CI/CD và script shell không đầu (headless).'
  },
  {
    id: 'eq2',
    num: 2,
    topic: 'Phương Thức Tương Tác IDE',
    q: 'Bạn đang đọc một hàm phức tạp gồm 80 dòng mã trong Antigravity IDE và muốn tái cấu trúc (refactor) đoạn mã này sang async/await mà không muốn Agent chỉnh sửa các hàm khác trong tệp. Phương thức tương tác nào mang lại độ chính xác cao nhất?',
    options: [
      'Bôi đen đoạn mã cần sửa và nhấn phím tắt Inline Command (\`Ctrl + I\` / \`Cmd + I\`)',
      'Dùng phím Tab gợi ý ngẫu nhiên',
      'Đóng IDE và viết lại bằng tay',
      'Xóa toàn bộ tệp rồi yêu cầu Agent viết lại'
    ],
    ans: 'A',
    sol: 'Inline Command (Ctrl+I / Cmd+I) là phương thức chỉ đạo tại chỗ (instructive localized modality), chỉ tác động và sửa đổi đúng khối mã được bôi đen, bảo vệ tuyệt đối phần còn lại của tệp.'
  },
  {
    id: 'eq3',
    num: 3,
    topic: 'Quản Lý Quy Trình Dài Hạn',
    q: 'Đội ngũ của bạn muốn bàn giao cho Antigravity nhiệm vụ di chuyển toàn bộ cơ sở dữ liệu và viết lại 50 API endpoints kèm bài kiểm tra đơn vị, dự kiến mất 6 tiếng thực hiện qua đêm. Bạn nên sử dụng Slash Command nào?',
    options: [
      '/goal',
      '/compact',
      '/schedule',
      '/browser'
    ],
    ans: 'A',
    sol: '/goal là lệnh tối ưu cho các tác vụ dài hạn (long-running autonomous goal). Agent sẽ kiên trì lặp lại các vòng lặp kiểm tra, tự sửa lỗi và không dừng lại cho đến khi toàn bộ mục tiêu đề ra được hoàn thành trọn vẹn.'
  },
  {
    id: 'eq4',
    num: 4,
    topic: 'Cơ Chế Phân Nhánh Workspace',
    q: 'Khi Agent cha cần kích hoạt 3 subagent chạy song song để thử nghiệm 3 giải pháp kiến trúc microservices khác nhau mà không muốn các subagent làm xung đột tệp tin mã nguồn với nhau, chế độ Workspace nào bắt buộc phải thiết lập cho các subagent?',
    options: [
      'Workspace: "branch"',
      'Workspace: "inherit"',
      'Workspace: "shared-drive"',
      'Workspace: "readonly"'
    ],
    ans: 'A',
    sol: 'Chế độ workspace: "branch" tạo ra một bản sao không gian làm việc độc lập hoàn toàn cho subagent, cho phép chỉnh sửa tệp tự do mà không gây xung đột với workspace gốc của Agent cha.'
  },
  {
    id: 'eq5',
    num: 5,
    topic: 'Hệ Thống Custom Skills',
    q: 'Một doanh nghiệp muốn bắt buộc tất cả các lập trình viên khi sử dụng Antigravity phải tuân thủ hướng dẫn kiểm tra bảo mật chuẩn OWASP và không cho phép bất kỳ dự án con nào ghi đè. Kỹ năng này cần được cài đặt ở cấp độ nào trong Loading Priority?',
    options: [
      'Cấp Enterprise (Doanh nghiệp)',
      'Cấp Workspace (.agents/skills/)',
      'Cấp User Global (~/.gemini/antigravity/skills/)',
      'Cấp Builtin (Mặc định)'
    ],
    ans: 'A',
    sol: 'Thứ tự ưu tiên nạp trong hệ thống tùy biến của Antigravity là: Enterprise > Workspace > User/Global > Builtin. Cấp Enterprise là cấp cao nhất, đảm bảo tính tuân thủ trên toàn doanh nghiệp.'
  },
  {
    id: 'eq6',
    num: 6,
    topic: 'Model Context Protocol (MCP)',
    q: 'Trong giao thức Model Context Protocol (MCP), khi một máy chủ MCP Server muốn cho phép Agent truy cập vào các tệp dữ liệu nhật ký hệ thống chỉ đọc (read-only system logs), máy chủ đó nên khai báo chức năng dưới dạng thành phần nào?',
    options: [
      'Resources (Tài nguyên dữ liệu)',
      'Tools (Công cụ hành động)',
      'Prompts (Mẫu hướng dẫn)',
      'Subagents (Đại lý con)'
    ],
    ans: 'A',
    sol: 'Trong đặc tả kỹ thuật MCP, Resources đại diện cho dữ liệu nhị phân hoặc văn bản có thể đọc được (như log files, database tables), trong khi Tools dành cho các hành động thực thi có thể thay đổi trạng thái.'
  },
  {
    id: 'eq7',
    num: 7,
    topic: 'An Toàn & Bảo Mật Sandbox',
    q: 'Khi làm việc với các kho lưu trữ mã nguồn mở không rõ nguồn gốc từ trên mạng, chính sách thực thi công cụ (Tool Execution Policy) nào được khuyến nghị kích hoạt để đảm bảo an toàn tuyệt đối cho máy trạm?',
    options: [
      'proceed-in-sandbox (hoặc strict)',
      'always-proceed không cảnh báo',
      'Tắt chế độ kiểm duyệt quyền',
      'Chạy với quyền Administrator gốc'
    ],
    ans: 'A',
    sol: 'proceed-in-sandbox giam giữ các lệnh thực thi trong môi trường ảo hóa cách ly (Sandbox), ngăn ngừa mã độc tác động tới hệ điều hành máy thật. Chính sách strict cũng đảm bảo mọi lệnh đều phải qua mắt lập trình viên phê duyệt.'
  },
  {
    id: 'eq8',
    num: 8,
    topic: 'Tối Ưu Ngữ Cảnh Context Engineering',
    q: 'Trong quá trình đàm thoại lâu dài, Agent bắt đầu phản hồi chậm hơn và có hiện tượng bỏ quên các ràng buộc kỹ thuật đã thảo luận ở phần đầu. Hành động kỹ thuật chính xác nhất lúc này là gì?',
    options: [
      'Sử dụng lệnh \`/compact\` để tóm tắt cô đọng lịch sử và giải phóng context window',
      'Mở lại máy tính',
      'Gõ lại toàn bộ mã nguồn vào khung chat',
      'Tắt kết nối mạng rồi bật lại'
    ],
    ans: 'A',
    sol: 'Lệnh /compact được sinh ra để nén ngữ cảnh: Agent sẽ chắt lọc toàn bộ kiến thức, quyết định kiến trúc cốt lõi vào một bản tóm tắt tinh gọn, giải phóng hàng chục nghìn token bị chiếm giữ trong context window.'
  },
  {
    id: 'eq9',
    num: 9,
    topic: 'Antigravity Python SDK',
    q: 'Khi phát triển một công cụ nội bộ bằng Python SDK cho Antigravity, điều gì giúp Agent tự động nhận biết kiểu tham số đầu vào và mục đích sử dụng của hàm?',
    options: [
      'Docstring mô tả chi tiết của hàm và Type Hints (chú thích kiểu dữ liệu)',
      'Tên file Python phải bắt đầu bằng chữ "tool"',
      'Hàm phải được đặt trong thư mục gốc',
      'Phải viết hoa toàn bộ tên hàm'
    ],
    ans: 'A',
    sol: 'Antigravity Python SDK tự động phân tích cú pháp (inspect) docstring của hàm và Type Hints (ví dụ: cluster_id: str, count: int) để tạo ra schema JSON-RPC chuẩn cho Agent hiểu mà không cần cấu hình thủ công.'
  },
  {
    id: 'eq10',
    num: 10,
    topic: 'Khắc Sâu Bài Học & Học Máy Ngữ Cảnh',
    q: 'Bạn vừa hướng dẫn Agent sửa xong một lỗi cấu hình Docker rất phức tạp mà các dự án khác trong công ty cũng thường gặp phải. Lệnh nào giúp Agent ghi nhớ vĩnh viễn bài học này vào bộ nhớ của workspace?',
    options: [
      '/learn',
      '/boost',
      '/grill-me',
      '/teamwork-preview'
    ],
    ans: 'A',
    sol: 'Slash command /learn kích hoạt quy trình trích xuất kinh nghiệm và lưu trữ vào bộ nhớ quy tắc dài hạn của dự án, giúp Agent áp dụng tự động cho các bài toán tương tự về sau.'
  }
];

// Generate Articles HTML
const articlesHtml = topics.map(t => {
  const quizzesHtml = t.quizzes.map((q, idx) => createQuiz(`${t.id}_q${idx + 1}`, q.q, q.opts, q.ans, q.exp)).join('\n');
  return `
      <!-- Bài ${t.num}: ${t.title} -->
      <article id="${t.id}" class="bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-extrabold text-sm border border-purple-200 dark:border-purple-800">
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
        <div class="p-5 rounded-2xl bg-purple-50/50 dark:bg-dark-card/50 border border-purple-100 dark:border-purple-950/40 space-y-3">
          <h3 class="text-base font-bold text-purple-950 dark:text-purple-300 flex items-center gap-2">
            <i class="fa-solid fa-microchip text-purple-600"></i> ${t.b1Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b1Content}
          </div>
        </div>

        <!-- Section 2 -->
        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-dark-card/50 border border-indigo-100 dark:border-indigo-950/40 space-y-3">
          <h3 class="text-base font-bold text-indigo-950 dark:text-indigo-300 flex items-center gap-2">
            <i class="fa-solid fa-code-branch text-indigo-600"></i> ${t.b2Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b2Content}
          </div>
        </div>

        <!-- Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-purple-600"></i> Câu Hỏi Trắc Nghiệm Củng Cố (4 câu)
            </h4>
            <span class="text-xs text-gray-500 dark:text-gray-400">Tự động chấm điểm &amp; lưu tiến độ</span>
          </div>
          <div class="space-y-4">
            ${quizzesHtml}
          </div>
        </div>
      </article>`;
}).join('\n\n');

// Generate Mock Exam Questions HTML
const examCardsHtml = examQuestions.map(eq => {
  const letters = ['A', 'B', 'C', 'D'];
  const optsHtml = eq.options.map((opt, idx) => `
              <label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-700/80 hover:bg-purple-50 dark:hover:bg-purple-950/30 cursor-pointer transition">
                <input type="radio" name="${eq.id}" value="${letters[idx]}" class="mt-1 text-purple-600 focus:ring-purple-500">
                <span class="text-xs sm:text-sm text-gray-800 dark:text-gray-200"><strong class="text-purple-600 dark:text-purple-400 mr-1">${letters[idx]}.</strong> ${opt}</span>
              </label>`).join('\n');

  return `
            <!-- Câu ${eq.num} -->
            <div class="exam-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-xs font-black">
                  CÂU ${eq.num}
                </span>
                <span class="text-xs font-semibold text-gray-400 dark:text-gray-500">${eq.topic}</span>
              </div>
              <p class="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-relaxed">${eq.q}</p>
              <div class="grid grid-cols-1 gap-2.5 pt-1">
                ${optsHtml}
              </div>
            </div>`;
}).join('\n');

// Generate Solutions Review HTML
const solutionsReviewHtml = examQuestions.map(eq => `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 space-y-2 text-xs sm:text-sm">
              <div class="flex items-center justify-between font-bold">
                <span class="text-purple-600 dark:text-purple-400">Câu ${eq.num}: ${eq.topic}</span>
                <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-xs">Đáp án đúng: ${eq.ans}</span>
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-xs bg-white dark:bg-dark-card p-3 rounded-lg border border-gray-100 dark:border-gray-700">${eq.sol}</p>
            </div>`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toàn Diện Về Google Antigravity (AGY) &amp; Lập Trình AI-First | CodeHub</title>
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
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
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
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #8b5cf6; border-radius: 4px; }
    .antigravity-hero-bg {
      background: radial-gradient(circle at 20% 30%, #3b0764 0%, #030712 60%, #082f49 100%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Header / Navigation -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-lg hover:opacity-90">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="hidden sm:inline">CodeHub</span>
        </a>
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div class="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs sm:text-sm font-semibold">
          <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
            <i class="fa-solid fa-robot"></i> Google Antigravity
          </span>
          <a href="hsg_tin_thpt.html" class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-code"></i> HSG Tin
          </a>
          <a href="olympic_tin_thpt.html" class="px-2.5 py-1 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-trophy"></i> Olympic Tin
          </a>
          <a href="ai_agent.html" class="px-2.5 py-1 rounded-lg text-cyan-600 dark:text-cyan-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-brain"></i> AI Agents
          </a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-award"></i>
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
  <section class="antigravity-hero-bg text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-purple-900/40 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-semibold tracking-wide">
          <i class="fa-brands fa-google text-blue-400"></i> Google DeepMind • Advanced Agentic Coding
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Lập Trình Toàn Diện Với <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-cyan-300">Google Antigravity (AGY)</span>
        </h1>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed">
          Khóa học chuẩn hóa toàn diện từ cơ bản đến nâng cao về hệ sinh thái phát triển phần mềm AI-first của Google DeepMind: Làm chủ Antigravity IDE với 3 phương thức tương tác (Tab, Inline \`Ctrl+I\`, Agent Mode), Antigravity 2.0 Desktop Orchestrator, CLI siêu tốc \`agy\`, điều phối Swarm Subagents, tùy biến Custom Skills &amp; Rules, tích hợp Model Context Protocol (MCP) và tự động hóa với Python SDK.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-book-bookmark text-purple-400"></i> 10 Chuyên đề chuẩn hóa</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-purple-400"></i> 40 Bài tập thực hành có đáp án</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-award text-amber-400"></i> Bài thi đánh giá năng lực 60:00</span>
        </div>
      </div>

      <!-- Quick Learning Card -->
      <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 w-full md:w-80 shrink-0 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-purple-200">Tiến Độ Khóa Học</span>
          <span id="quiz-completed-count" class="text-lg font-black text-purple-300">0 / 40</span>
        </div>
        <div class="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
          <div id="progress-bar" class="bg-gradient-to-r from-purple-400 to-cyan-400 h-full w-0 transition-all duration-300"></div>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed">
          Trả lời các câu hỏi tình huống thực tế dưới mỗi chuyên đề để tích lũy kỹ năng và tự động lưu tiến độ vào tài khoản của bạn.
        </p>
        <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-500 hover:to-cyan-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-play text-slate-950"></i> Thi Đánh Giá Năng Lực (60:00)
          </button>
          <button onclick="resetAllQuizzes()" class="w-full py-2 px-3 text-xs text-center rounded-xl bg-white/15 hover:bg-white/25 transition text-white font-medium border border-white/20 flex items-center justify-center gap-2">
            <i class="fa-solid fa-rotate-right"></i> Làm lại từ đầu
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile Drawer Backdrop -->
  <div id="drawer-backdrop" class="fixed inset-0 bg-black/60 z-50 hidden transition-opacity lg:hidden" onclick="toggleDrawer(false)"></div>

  <!-- Mobile Drawer Content -->
  <div id="mobile-drawer" class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col">
    <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
      <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold">
        <i class="fa-solid fa-robot"></i>
        <span>Mục Lục Antigravity</span>
      </div>
      <button onclick="toggleDrawer(false)" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="overflow-y-auto p-4 space-y-1 text-sm flex-1 sidebar-scroll">
      ${topics.map(t => `<a href="#${t.id}" onclick="toggleDrawer(false)" class="block px-3 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium transition">Bài ${parseInt(t.num)}: ${t.sub}</a>`).join('\n      ')}
    </div>
  </div>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Desktop Sticky Sidebar -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        <div class="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700/60 font-bold text-sm text-purple-600 dark:text-purple-400">
            <i class="fa-solid fa-compass"></i>
            <span>Mục Lục 10 Chuyên Đề</span>
          </div>
          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
            ${topics.map(t => `<a href="#${t.id}" class="nav-link block px-2.5 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">${parseInt(t.num)}. ${t.sub}</a>`).join('\n            ')}
          </nav>
        </div>

        <!-- Sidebar Certification Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white border border-purple-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
            <i class="fa-solid fa-award"></i> Chứng Nhận Năng Lực
          </div>
          <p class="text-xs text-purple-100 leading-relaxed">
            Kiểm tra hiểu biết toàn diện về Antigravity 2.0, IDE, Subagents, MCP &amp; CLI qua bài thi 10 tình huống thực tế.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-purple-950 hover:bg-purple-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-purple-600"></i> Bắt đầu làm bài thi (60:00)
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-12">
      ${articlesHtml}

      <!-- Course Summary Banner -->
      <section class="bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-300 text-xs font-semibold border border-purple-400/30">
            <i class="fa-solid fa-star text-amber-400"></i> Antigravity Certified Professional
          </div>
          <h2 class="text-2xl sm:text-3xl font-black">Sẵn Sàng Làm Chủ Kỷ Nguyên AI-First Lập Trình?</h2>
          <p class="text-sm text-purple-100 leading-relaxed">
            Bạn đã nắm vững toàn bộ kiến trúc và kỹ năng từ cơ bản đến nâng cao của Google Antigravity: điều phối subagents, kết nối MCP server, tùy biến kịch bản skills/hooks và quản lý ngữ cảnh context engineering. Hãy thử sức ngay với bài thi đánh giá 60 phút để nhận chứng chỉ năng lực Antigravity Architect!
          </p>
          <div class="pt-2">
            <button onclick="openCourseQuizModal()" class="py-3 px-6 rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:opacity-90 text-slate-950 font-black text-sm shadow-xl transition flex items-center gap-2">
              <i class="fa-solid fa-stopwatch text-slate-950"></i> Bắt Đầu Bài Thi Đánh Giá Năng Lực (60 Phút)
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-medium text-gray-700 dark:text-gray-300">
        Khóa Học Toàn Diện Về Google Antigravity (AGY) &amp; Lập Trình AI-First • CodeHub Learning Platform
      </p>
      <p>
        Biên soạn theo tài liệu kỹ thuật chính thức của Google DeepMind, Antigravity 2.0 Architecture &amp; Thông số kỹ thuật Model Context Protocol (MCP).
      </p>
    </div>
  </footer>

  <!-- Modal Thi Đánh Giá Năng Lực Trực Tuyến -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <div class="bg-white dark:bg-dark-surface w-full max-w-4xl rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-purple-800/50 shrink-0">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-purple-500/20 rounded-xl border border-purple-400/30 text-purple-300">
            <i class="fa-solid fa-award text-xl text-amber-400"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Phòng Đánh Giá Năng Lực Chuyên Nghiệp • Antigravity Architect</h3>
            <p class="text-xs text-purple-200">10 Tình Huống Kỹ Thuật Thực Tế • Chuẩn Google DeepMind</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <!-- Countdown Timer Display -->
          <div class="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-purple-400/30">
            <i class="fa-solid fa-stopwatch text-purple-400 animate-pulse"></i>
            <span id="examTimer" class="font-mono font-black text-sm sm:text-base text-purple-300 tracking-wider">60:00</span>
          </div>
          <button onclick="closeCourseQuizModal()" class="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Questions Form) -->
      <div class="p-6 overflow-y-auto flex-1 space-y-6">
        <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6">
          ${examCardsHtml}

          <!-- Submit Buttons -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700">
            <button type="button" onclick="restartExam()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-rotate-left"></i> Làm lại từ đầu
            </button>
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button type="button" onclick="closeCourseQuizModal()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold transition">
                Đóng
              </button>
              <button type="submit" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-black shadow-lg transition flex items-center justify-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> Nộp Bài &amp; Xem Kết Quả
              </button>
            </div>
          </div>
        </form>

        <!-- Exam Result Box -->
        <div id="examResultBox" class="hidden p-5 rounded-2xl border transition-all duration-300 space-y-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div id="examResultTitle" class="font-black text-lg sm:text-xl flex items-center gap-2"></div>
            <div id="examScoreBadge" class="text-xs font-black px-3 py-1 rounded-full shrink-0"></div>
          </div>
          <p id="examFeedbackText" class="text-xs sm:text-sm leading-relaxed"></p>
          <div class="pt-2 flex items-center gap-3">
            <button type="button" onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải &amp; Phân Tích Kỹ Thuật
            </button>
            <button type="button" onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Thi lại
            </button>
          </div>
        </div>

        <!-- Solutions Review Container -->
        <div id="examSolutionsReview" class="hidden pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="font-black text-sm text-purple-600 dark:text-purple-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Phân Tích &amp; Giải Pháp Cho 10 Tình Huống Kỹ Thuật:
          </h4>
          <div class="space-y-3">
            ${solutionsReviewHtml}
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script>
    const STORAGE_KEY = 'antigravity_course_solved_quizzes';
    const TOTAL_QUIZZES = 40;

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-gray-600';
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        applyTheme(!isDark);
      });
    }

    // Drawer Navigation
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    function toggleDrawer(open) {
      if (!mobileDrawer) return;
      if (open) {
        mobileDrawer.classList.remove('translate-x-full');
        if (drawerBackdrop) drawerBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.add('translate-x-full');
        if (drawerBackdrop) drawerBackdrop.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => toggleDrawer(true));
    }

    // Quiz Storage & Progress
    function getSolvedQuizzes() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      } catch (e) {
        return {};
      }
    }

    function saveSolvedQuiz(quizId, optionIndex, isCorrect) {
      const solved = getSolvedQuizzes();
      solved[quizId] = { optionIndex, isCorrect };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(solved)); } catch (e) {}
      updateProgressDisplay();
    }

    function checkQuiz(quizId, optionIndex, isCorrect, explanation) {
      const buttons = document.querySelectorAll('.quiz-btn-' + quizId);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('bg-purple-100', 'border-purple-500', 'bg-rose-100', 'border-rose-500');
        if (idx === optionIndex) {
          if (isCorrect) {
            btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
          } else {
            btn.classList.add('bg-rose-100', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
          }
        }
      });

      const feedbackEl = document.getElementById('feedback-' + quizId);
      if (feedbackEl) {
        feedbackEl.classList.remove('hidden');
        feedbackEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium border leading-relaxed ' +
          (isCorrect ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/30' : 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 border-rose-500/30');
        feedbackEl.innerHTML = (isCorrect ? '<i class="fa-solid fa-circle-check mr-1.5 text-emerald-600"></i>' : '<i class="fa-solid fa-circle-xmark mr-1.5 text-rose-600"></i>') + explanation;
      }

      saveSolvedQuiz(quizId, optionIndex, isCorrect);
    }

    function updateProgressDisplay() {
      const solved = getSolvedQuizzes();
      const count = Object.keys(solved).length;
      const pct = Math.round((count / TOTAL_QUIZZES) * 100);
      const countEl = document.getElementById('quiz-completed-count');
      const progressBarEl = document.getElementById('progress-bar');
      if (countEl) countEl.innerText = count + ' / ' + TOTAL_QUIZZES;
      if (progressBarEl) progressBarEl.style.width = pct + '%';
    }

    function resetAllQuizzes() {
      if (confirm('Bạn có chắc muốn đặt lại toàn bộ kết quả bài tập để làm lại từ đầu?')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    }

    // Live Countdown Timer & Exam Handling
    let examTimerInterval = null;
    let examSecondsLeft = 60 * 60;

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
          alert('Hết giờ làm bài thi đánh giá! Hệ thống sẽ tự động chấm điểm bài nộp của bạn.');
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
      if (confirm('Bạn có chắc muốn làm lại bài thi đánh giá năng lực từ đầu?')) {
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
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! ANTIGRAVITY MASTER ARCHITECT (ĐẠT ĐIỂM TUYỆT ĐỐI)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trí tuệ kiến trúc sư AI xuất sắc! Bạn đã nắm vững toàn diện cả 10 khía cạnh tinh hoa của Google Antigravity: từ CLI CI/CD, Inline Command Ctrl+I, /goal qua đêm, Workspace Branching, Phân cấp kỹ năng Enterprise, Giao thức MCP, Bảo mật Sandbox, Nén ngữ cảnh /compact đến Tự động hóa với Python SDK và /learn memory!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-purple-50 dark:bg-purple-950/40 border-purple-500/50 text-purple-950 dark:text-purple-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-purple-600 text-2xl"></i> Chúc Mừng! ANTIGRAVITY SENIOR PRACTITIONER (HẠNG GIỎI)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-purple-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kiến thức thực hành lập trình Agent của bạn rất vững chắc và chuyên sâu. Đạt mức Senior Practitioner khẳng định bạn có thể dẫn dắt các dự án AI-first quy mô lớn trong doanh nghiệp!';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-blue-50 dark:bg-blue-950/40 border-blue-500/50 text-blue-950 dark:text-blue-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-blue-600 text-2xl"></i> ĐẠT CHỨNG CHỈ ANTIGRAVITY ASSOCIATE DEVELOPER!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-blue-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Bạn đã nắm được các nguyên lý cốt lõi. Hãy bấm "Xem Lời Giải & Phân Tích Kỹ Thuật" bên dưới để hoàn thiện nốt các phần nâng cao về MCP và Context Engineering!';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-compass text-amber-500 text-2xl"></i> ANTIGRAVITY EXPLORER / Cần Ôn Tập Lại Các Chuyên Đề!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Các tình huống kỹ thuật trong bài thi đòi hỏi sự hiểu biết sâu sắc về cơ chế vận hành của Agent. Hãy đọc lại bài học và xem phân tích lời giải chi tiết bên dưới nhé!';
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
console.log('Successfully created courses/antigravity.html!');
