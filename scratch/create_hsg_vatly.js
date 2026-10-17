const fs = require('fs');

const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\hsg_vatly_thpt.html';

function createQuiz(id, question, options, correctIdx, explanation) {
  const letters = ['A', 'B', 'C', 'D'];
  const buttons = options.map((opt, idx) => {
    const isCorrect = idx === correctIdx;
    const cleanExp = explanation.replace(/'/g, "\\'");
    return `<button onclick="checkQuiz('${id}', ${idx}, ${isCorrect}, '${cleanExp}')" class="quiz-btn-${id} text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition">${letters[idx]}. ${opt}</button>`;
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

// 10 Topics for HSG Vật Lý THPT
const topics = [
  {
    id: 'bai1',
    num: '01',
    sub: 'Cơ Học Vật Rắn • Hệ Quy Chiếu Phi Quán Tính',
    title: 'Động Lực Học Vật Rắn, Lực Quán Tính Coriolis & Con Quay Hồi Chuyển',
    intro: 'Trong kỳ thi chọn HSG Quốc Gia (VPhO), phần Cơ học đòi hỏi khảo sát chuyển động trong hệ quy chiếu phi quán tính với lực quán tính quán tính ly tâm, lực Coriolis, áp dụng định lý Steiner tính mômen quán tính, định luật bảo toàn mômen động lượng và hiệu ứng tiến động của con quay hồi chuyển.',
    b1Title: 'Lực Quán Tính Trong Hệ Quy Chiếu Quay & Lực Coriolis',
    b1Content: `• Trong hệ quy chiếu quay với vận tốc góc $\\vec{\\omega}$, phương trình định luật II Newton mở rộng:<br>$$m\\vec{a}_r = \\vec{F} + \\vec{F}_{qt\\,lt} + \\vec{F}_{Cor}$$<br>• Lực quán tính ly tâm: $\\vec{F}_{qt\\,lt} = m \\omega^2 \\vec{r}_{\\perp}$.<br>• <strong>Lực Coriolis:</strong> $\\vec{F}_{Cor} = 2m (\\vec{v}_r \\times \\vec{\\omega})$. Lực này luôn vuông góc với vận tốc tương đối $\\vec{v}_r$, làm lệch quỹ đạo chuyển động (giải thích hiện tượng mòn bờ phải dòng sông ở Bắc bán cầu).`,
    b2Title: 'Động Lực Học Vật Rắn & Hiệu Ứng Con Quay Hồi Chuyển',
    b2Content: `• Định lý Huygens-Steiner: $I = I_{cm} + md^2$.<br>• Phương trình cơ bản: $\\vec{M} = \\frac{d\\vec{L}}{dt} = I\\vec{\\beta}$ (đối với trục quay cố định).<br>• <strong>Tiến động con quay (Gyroscopic Precession):</strong> Khi vật rắn tự quay với mômen động lượng lớn $\\vec{L}_s = I_s \\vec{\\omega}_s$, chịu tác dụng của mômen trọng lực $\\vec{M}_{\\perp}$, trục con quay sẽ quay tiến động quanh trục thẳng đứng với vận tốc góc $\\Omega_p = \\frac{M}{I_s \\omega_s}$.`,
    quizzes: [
      {
        q: '1. Một hòn sỏi rơi tự do không vận tốc đầu từ độ cao $h$ tại một điểm có vĩ độ địa lý $\\lambda$ ở Bắc Bán Cầu. Do lực Coriolis, hòn sỏi sẽ bị lệch theo hướng nào?',
        opts: ['Lệch về phía Đông', 'Lệch về phía Tây', 'Lệch về phía Nam', 'Lệch về phía Bắc'],
        ans: 0,
        exp: 'Chính xác! Ta có F_Cor = 2m(v_r x omega). Khi vật rơi thẳng đứng xuống dưới (v_r hướng vào tâm Trái Đất) và omega hướng từ Nam lên Bắc theo trục tự quay, tích véctơ v_r x omega chỉ về hướng Đông.'
      },
      {
        q: '2. Cho một đĩa tròn đồng chất bán kính $R$, khối lượng $m$. Mômen quán tính của đĩa đối với trục quay vuông góc với mặt phẳng đĩa và tiếp xúc với mép đĩa là:',
        opts: ['$\\frac{3}{2} m R^2$', '$\\frac{1}{2} m R^2$', '$m R^2$', '$\\frac{5}{4} m R^2$'],
        ans: 0,
        exp: 'Chính xác! Theo định lý Steiner: I = I_cm + m d^2 = (1/2)m R^2 + m R^2 = (3/2)m R^2.'
      },
      {
        q: '3. Một bánh đà hình trụ đặc có khối lượng $M$, bán kính $R$ đang quay tròn với tốc độ góc $\\omega$. Động năng quay của bánh đà là:',
        opts: ['$\\frac{1}{4} M R^2 \\omega^2$', '$\\frac{1}{2} M R^2 \\omega^2$', '$M R^2 \\omega^2$', '$\\frac{1}{3} M R^2 \\omega^2$'],
        ans: 0,
        exp: 'Chính xác! W_d = (1/2) I omega^2 = (1/2) * (1/2 M R^2) * omega^2 = (1/4) M R^2 omega^2.'
      },
      {
        q: '4. Tốc độ tiến động góc $\\Omega_p$ của một con quay đối xứng có mômen quán tính $I_s$, quay quanh trục riêng với tốc độ góc lớn $\\omega_s$, chịu mômen lực $M$ vuông góc với trục là:',
        opts: ['$\\Omega_p = \\frac{M}{I_s \\omega_s}$', '$\\Omega_p = \\frac{I_s \\omega_s}{M}$', '$\\Omega_p = \\frac{M \\omega_s}{I_s}$', '$\\Omega_p = \\sqrt{\\frac{M}{I_s}}$'],
        ans: 0,
        exp: 'Chính xác! Phương trình tiến động: dL = M dt => L_s d(theta) = M dt => Omega_p = d(theta)/dt = M / (I_s omega_s).'
      }
    ]
  },
  {
    id: 'bai2',
    num: '02',
    sub: 'Dao Động Cơ Học • Hệ Tự Do Nhiều Bậc',
    title: 'Dao Động Nhỏ Quanh Vị Trí Cân Bằng, Dao Động Liên Kết & Tần Số Riêng',
    intro: 'Chuyên đề dao động VPhO tập trung giải quyết các bài toán dao động của hệ nhiều vật liên kết, dao động phi tuyến khai triển Taylor, ma trận độ cứng và khối lượng tìm mode dao động, cộng hưởng tham số và phương pháp năng lượng Lagrange.',
    b1Title: 'Phương Trình Lagrange Loại II & Dao Động Nhỏ',
    b1Content: `• Hàm Lagrange: $L = T - V$ (với $T$ là động năng, $V$ là thế năng).<br>• Phương trình Lagrange: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right) - \\frac{\\partial L}{\\partial q_i} = 0$.<br>• Khai triển thế năng quanh vị trí cân bằng bền $q_0 = 0$: $V(q) \\approx \\frac{1}{2} V''(0) q^2$. Động năng: $T \\approx \\frac{1}{2} M \\dot{q}^2$. Từ đó tần số dao động nhỏ: $\\omega = \\sqrt{\\frac{V''(0)}{M}}$.`,
    b2Title: 'Hệ Dao Động Liên Kết & Tần Số Riêng (Normal Modes)',
    b2Content: `• Hệ hai con lắc liên kết bởi lò xo có hai mode dao động riêng:<br>1. <strong>Mode đồng pha:</strong> Lò xo liên kết không biến dạng, tần số $\\omega_1 = \\sqrt{g/l}$.<br>2. <strong>Mode ngược pha:</strong> Lò xo biến dạng cực đại, tần số $\\omega_2 = \\sqrt{g/l + 2k/m}$.<br>• Hiện tượng phách dao động (Beats): Năng lượng trao đổi tuần hoàn giữa hai con lắc với tần số phách $\\Omega = |\\omega_1 - \\omega_2|/2$.`,
    quizzes: [
      {
        q: '1. Một chất điểm khối lượng $m$ chuyển động trong trường thế một chiều $V(x) = V_0 \\left(\\frac{a^2}{x^2} - \\frac{2a}{x}\\right)$ với $V_0, a > 0$. Vị trí cân bằng bền $x_0$ và tần số góc $\\omega$ của dao động nhỏ là:',
        opts: ['$x_0 = a,\\quad \\omega = \\sqrt{\\frac{2V_0}{m a^2}}$', '$x_0 = 2a,\\quad \\omega = \\sqrt{\\frac{V_0}{m a^2}}$', '$x_0 = a,\\quad \\omega = \\sqrt{\\frac{V_0}{m a^2}}$', '$x_0 = a/2,\\quad \\omega = 2\\sqrt{\\frac{V_0}{m a^2}}$'],
        ans: 0,
        exp: 'Chính xác! V\'(x) = V_0[-2a^2/x^3 + 2a/x^2] = 0 <=> x = a. V\'\'(a) = V_0[6a^2/a^4 - 4a/a^3] = 2V_0/a^2 > 0 => omega = sqrt(V\'\'(a)/m) = sqrt(2V_0 / (m a^2)).'
      },
      {
        q: '2. Cho hai con lắc đơn giống hệt nhau chiều dài $l$, khối lượng $m$, nối với nhau bằng một lò xo nhẹ độ cứng $k$. Khi hệ dao động ngược pha, tần số góc của dao động là:',
        opts: ['$\\omega = \\sqrt{\\frac{g}{l} + \\frac{2k}{m}}$', '$\\omega = \\sqrt{\\frac{g}{l} + \\frac{k}{m}}$', '$\\omega = \\sqrt{\\frac{g}{l}}$', '$\\omega = \\sqrt{\\frac{g}{l} + \\frac{4k}{m}}$'],
        ans: 0,
        exp: 'Chính xác! Khi ngược pha: x_1 = -x_2 => lò xo dãn 2x_1 => lực phục hồi tác dụng lên m_1 là -(mg/l)x_1 - 2kx_1 => omega = sqrt(g/l + 2k/m).'
      },
      {
        q: '3. Phương trình vi phân dao động tắt dần có dạng $\\ddot{x} + 2\\beta \\dot{x} + \\omega_0^2 x = 0$. Điều kiện để hệ xảy ra hiện tượng tắt dần dao động tuần hoàn (dưới tới hạn) là:',
        opts: ['$\\beta < \\omega_0$', '$\\beta = \\omega_0$', '$\\beta > \\omega_0$', '$\\beta = 0$'],
        ans: 0,
        exp: 'Chính xác! Khi beta < omega_0, phương trình đặc trưng có nghiệm phức, hệ dao động tắt dần tuần hoàn với tần số omega = sqrt(omega_0^2 - beta^2).'
      },
      {
        q: '4. Giảm lượng logarit (Logarithmic decrement) $\\delta$ trong dao động tắt dần được định nghĩa theo tỉ số hai biên độ liên tiếp $A(t)$ và $A(t+T)$ là:',
        opts: ['$\\delta = \\ln\\left(\\frac{A(t)}{A(t+T)}\\right) = \\beta T$', '$\\delta = \\frac{A(t)}{A(t+T)}$', '$\\delta = \\ln(A(t) \\cdot A(t+T))$', '$\\delta = 2\\beta T$'],
        ans: 0,
        exp: 'Chính xác! A(t) = A_0 e^(-beta t) => A(t)/A(t+T) = e^(beta T) => delta = ln[A(t)/A(t+T)] = beta T.'
      }
    ]
  },
  {
    id: 'bai3',
    num: '03',
    sub: 'Cơ Học Chất Lưu • Sóng Cơ Học Nâng Cao',
    title: 'Thủy Khí Động Lực Học Bernoulli, Lực Nhớt Poiseuille & Sóng Âm',
    intro: 'Khảo sát dòng chảy của chất lưu lý tưởng qua phương trình Bernoulli, áp suất tĩnh, động và toàn phần; dòng chảy nhớt Poiseuille qua ống mao dẫn, lực cản Stokes và lý thuyết sóng dừng trên dây không đồng tính, hiệu ứng Doppler tổng quát.',
    b1Title: 'Định Luật Bernoulli & Dòng Chất Lưu Nhớt',
    b1Content: `• <strong>Định luật Bernoulli:</strong> $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{const}$. Ứng dụng đo lưu lượng bằng ống Pitot, ống Venturi và lực nâng cánh máy bay.<br>• <strong>Định luật Poiseuille (chất lưu nhớt):</strong> Lưu lượng thể tích $Q$ của chất lưu chảy tầng qua ống tròn bán kính $R$, chiều dài $L$ dưới độ chênh lệch áp suất $\\Delta p$:<br>$$Q = \\frac{\\pi R^4 \\Delta p}{8 \\eta L}$$`,
    b2Title: 'Hiệu Ứng Doppler & Sóng Âm Trong Môi Trường Chuyển Động',
    b2Content: `• Tần số máy thu nhận được khi cả nguồn âm ($S$) và máy thu ($M$) cùng chuyển động trong môi trường đứng yên:<br>$$f_M = f_S \\cdot \\frac{v_{âm} \\pm v_M}{v_{âm} \\mp v_S}$$<br>• Sóng xung kích (Shock wave) & góc nón Mach: $\\sin \\theta = \\frac{v_{âm}}{v_{vật}} = \\frac{1}{M}$ khi nguồn âm chuyển động siêu thanh.`,
    quizzes: [
      {
        q: '1. Một ống mao dẫn bán kính giảm đi một nửa ($R\' = R/2$) trong khi chiều dài và độ chênh áp kế không đổi. Theo định luật Poiseuille, lưu lượng thể tích $Q$ chất lưu chảy qua ống sẽ:',
        opts: ['Giảm 16 lần', 'Giảm 8 lần', 'Giảm 4 lần', 'Giảm 2 lần'],
        ans: 0,
        exp: 'Chính xác! Lưu lượng Q tỉ lệ thuận với R^4. Khi R giảm 2 lần thì Q giảm 2^4 = 16 lần.'
      },
      {
        q: '2. Máy bay phản lực bay ngang với tốc độ gấp đôi tốc độ âm thanh trong không khí (Số Mach $M = 2$). Góc mở nửa đỉnh $\\theta$ của nón sóng xung kích Mach là:',
        opts: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        ans: 0,
        exp: 'Chính xác! sin theta = 1/M = 1/2 => theta = 30 độ.'
      },
      {
        q: '3. Nước chảy ổn định qua một ống nằm ngang có tiết diện hẹp dần từ $S_1 = 10\\text{ cm}^2$ đến $S_2 = 5\\text{ cm}^2$. Vận tốc tại vị trí $S_1$ là $2\\text{ m/s}$. Chênh lệch áp suất $\\Delta p = p_1 - p_2$ giữa hai điểm (lấy $\\rho = 1000\\text{ kg/m}^3$) là:',
        opts: ['$6000\\text{ Pa}$', '$4000\\text{ Pa}$', '$2000\\text{ Pa}$', '$8000\\text{ Pa}$'],
        ans: 0,
        exp: 'Chính xác! v_2 = v_1 * (S_1/S_2) = 2 * 2 = 4 m/s. Delta p = 1/2 rho (v_2^2 - v_1^2) = 1/2 * 1000 * (16 - 4) = 6000 Pa.'
      },
      {
        q: '4. Vận tốc truyền sóng ngang trên một sợi dây căng có lực căng $T$ và mật độ khối lượng dài $\\mu$ là:',
        opts: ['$v = \\sqrt{\\frac{T}{\\mu}}$', '$v = \\sqrt{\\frac{\\mu}{T}}$', '$v = \\frac{T}{\\mu}$', '$v = \\sqrt{T \\mu}$'],
        ans: 0,
        exp: 'Chính xác! Vận tốc sóng truyền trên dây là v = sqrt(T / mu).'
      }
    ]
  },
  {
    id: 'bai4',
    num: '04',
    sub: 'Nhiệt Động Lực Học • Khí Thực & Quá Trình Đa Biến',
    title: 'Nguyên Lý Nhiệt Động Học, Khí Thực Van der Waals & Quá Trình Đa Biến',
    intro: 'VPhO khai thác sâu chu trình nhiệt đa biến $pV^n = \\text{const}$, nhiệt dung $C_n$, hiệu suất chu trình Carnot, Stirling; phương trình trạng thái khí thực Van der Waals, nội năng khí thực và hiệu ứng Joule-Thomson dãn nở khí.',
    b1Title: 'Quá Trình Đa Biến & Nhiệt Dung Khí Lý Tưởng',
    b1Content: `• Phương trình quá trình đa biến: $p V^n = \\text{const}$.<br>• Nhiệt dung mol của khí lý tưởng trong quá trình đa biến chỉ số $n$:<br>$$C_n = C_V + \\frac{R}{1 - n} = \\frac{R}{\\gamma - 1} - \\frac{R}{n - 1} = C_V \\frac{n - \\gamma}{n - 1}$$<br>• Nhận xét: Khi $1 < n < \\gamma$, nhiệt dung $C_n < 0$ (khí nhận nhiệt lượng nhưng nhiệt độ lại giảm do sinh công dãn nở quá lớn).`,
    b2Title: 'Khí Thực Van der Waals & Hiệu Ứng Joule-Thomson',
    b2Content: `• Phương trình Van der Waals cho 1 mol khí:<br>$$\\left(p + \\frac{a}{V_m^2}\\right)(V_m - b) = R T$$<br>• Trong đó $a$ tính đến lực hút giữa các phân tử, $b$ là thể tích riêng của các phân tử.<br>• <strong>Nội năng khí thực:</strong> $U(T, V_m) = C_V T - \\frac{a}{V_m}$. Khi khí thực dãn nở tự do đoạn nhiệt vào chân không, nội năng bảo toàn nên khí sẽ bị lạnh đi do thế năng tương tác phân tử tăng.`,
    quizzes: [
      {
        q: '1. Một mol khí lý tưởng lưỡng nguyên tử ($\\gamma = 1{,}4$, $C_V = 2{,}5R$) thực hiện quá trình đa biến $p V^2 = \\text{const}$ ($n = 2$). Nhiệt dung mol của chất khí trong quá trình này là:',
        opts: ['$1{,}5 R$', '$2{,}5 R$', '$-1{,}5 R$', '$3{,}5 R$'],
        ans: 0,
        exp: 'Chính xác! C_n = C_V + R/(1 - n) = 2.5R + R/(1 - 2) = 2.5R - R = 1.5R.'
      },
      {
        q: '2. Cho 1 mol khí thực Van der Waals dãn nở đoạn nhiệt tự do vào chân không từ thể tích $V_1$ đến $V_2$ ($V_2 > V_1$). Độ biến thiên nhiệt độ $\\Delta T = T_2 - T_1$ của khí là:',
        opts: ['$\\Delta T = -\\frac{a}{C_V}\\left(\\frac{1}{V_1} - \\frac{1}{V_2}\\right) < 0$', '$\\Delta T = \\frac{a}{C_V}\\left(\\frac{1}{V_1} - \\frac{1}{V_2}\\right) > 0$', '$\\Delta T = 0$', '$\\Delta T = -\\frac{b}{C_V}(V_2 - V_1)$'],
        ans: 0,
        exp: 'Chính xác! Dãn nở tự do đoạn nhiệt: Q = 0, A = 0 => Delta U = 0 => C_V Delta T - a(1/V_2 - 1/V_1) = 0 => Delta T = -(a/C_V)(1/V_1 - 1/V_2) < 0 (khí lạnh đi).'
      },
      {
        q: '3. Hiệu suất của một động cơ nhiệt hoạt động theo chu trình Carnot thuận nghịch giữa hai nguồn nhiệt $T_1 = 600\\text{ K}$ và $T_2 = 300\\text{ K}$ là:',
        opts: ['$50\\%$', '$60\\%$', '$40\\%$', '$75\\%$'],
        ans: 0,
        exp: 'Chính xác! eta = 1 - T_2/T_1 = 1 - 300/600 = 0.5 = 50%.'
      },
      {
        q: '4. Nhiệt độ tới hạn $T_c$ của chất khí Van der Waals được tính theo các hằng số $a, b, R$ bởi biểu thức:',
        opts: ['$T_c = \\frac{8a}{27 R b}$', '$T_c = \\frac{a}{27 b^2}$', '$T_c = \\frac{27a}{8 R b}$', '$T_c = \\frac{a}{R b}$'],
        ans: 0,
        exp: 'Chính xác! Tại điểm uốn tới hạn: dp/dV = 0 và d^2p/dV^2 = 0 giải ra V_c = 3b, p_c = a/(27b^2), T_c = 8a / (27 R b).'
      }
    ]
  },
  {
    id: 'bai5',
    num: '05',
    sub: 'Điện Từ Học • Điện Trường Tĩnh & Phương Pháp Ảnh Điện',
    title: 'Điện Trường Tĩnh, Điện Môi, Định Lý Gauss & Phương Pháp Ảnh Điện',
    intro: 'Các bài toán điện trường tĩnh trong đề VPhO thường khảo sát hệ điện tích đặt gần vật dẫn phẳng hoặc mặt cầu nối đất bằng phương pháp điện tích ảnh (Method of Images), tính toán năng lượng tĩnh điện và mật độ lực kéo bề mặt điện trường.',
    b1Title: 'Định Lý Gauss & Năng Lượng Điện Trường',
    b1Content: `• Định lý Ostrogradsky - Gauss: $\\oint_S \\vec{E} \\cdot d\\vec{S} = \\frac{q_{trong}}{\\varepsilon_0}$.<br>• Mật độ khối năng lượng điện trường: $w_e = \\frac{1}{2} \\varepsilon_0 \\varepsilon E^2$.<br>• <strong>Áp suất tĩnh điện (lực tác dụng lên bề mặt vật dẫn mang điện):</strong> $p_e = \\frac{\\sigma^2}{2\\varepsilon_0} = \\frac{1}{2} \\varepsilon_0 E_{bề\\,mặt}^2$. Áp suất này luôn hướng ra ngoài bề mặt vật dẫn.`,
    b2Title: 'Phương Pháp Ảnh Điện (Method of Image Charges)',
    b2Content: `• <strong>Điện tích $q$ cách mặt phẳng dẫn vô hạn nối đất khoảng $d$:</strong> Hệ tương đương với $q$ và một điện tích ảnh $q\' = -q$ đặt đối xứng qua mặt phẳng tại khoảng cách $-d$. Lực hút tĩnh điện: $F = \\frac{q^2}{4\\pi \\varepsilon_0 (2d)^2}$.<br>• <strong>Điện tích $q$ cách tâm mặt cầu dẫn bán kính $R$ nối đất khoảng $d > R$:</strong> Điện tích ảnh là $q\' = -q\\frac{R}{d}$ đặt cách tâm một khoảng $d\' = \\frac{R^2}{d}$.`,
    quizzes: [
      {
        q: '1. Một điện tích điểm $q$ đặt cách mặt phẳng kim loại dẫn điện vô hạn nối đất một khoảng $d$. Lực tương tác giữa điện tích điểm và mặt phẳng kim loại là:',
        opts: ['Lực hút với độ lớn $F = \\frac{q^2}{16\\pi \\varepsilon_0 d^2}$', 'Lực đẩy với độ lớn $F = \\frac{q^2}{16\\pi \\varepsilon_0 d^2}$', 'Lực hút với độ lớn $F = \\frac{q^2}{4\\pi \\varepsilon_0 d^2}$', '$F = 0$ do mặt phẳng nối đất'],
        ans: 0,
        exp: 'Chính xác! Theo phương pháp ảnh điện, điện tích ảnh q\' = -q đặt đối xứng cách q khoảng cách 2d. Lực hút là F = q^2 / [4 pi eps_0 (2d)^2] = q^2 / [16 pi eps_0 d^2].'
      },
      {
        q: '2. Một quả cầu kim loại bán kính $R$ tích điện $Q$. Lực đẩy tĩnh điện tác dụng lên một nửa quả cầu có độ lớn là:',
        opts: ['$F = \\frac{Q^2}{32\\pi \\varepsilon_0 R^2}$', '$F = \\frac{Q^2}{16\\pi \\varepsilon_0 R^2}$', '$F = \\frac{Q^2}{8\\pi \\varepsilon_0 R^2}$', '$F = \\frac{Q^2}{64\\pi \\varepsilon_0 R^2}$'],
        ans: 0,
        exp: 'Chính xác! Áp suất tĩnh điện p = sigma^2 / (2 eps_0). Chiếu lên trục đối xứng: F = p * (pi R^2) = [Q^2 / (32 pi^2 R^4 eps_0)] * pi R^2 = Q^2 / (32 pi eps_0 R^2).'
      },
      {
        q: '3. Năng lượng điện trường tổng cộng chứa trong không gian xung quanh một quả cầu dẫn cô lập bán kính $R$ mang điện tích $Q$ đặt trong chân không là:',
        opts: ['$W = \\frac{Q^2}{8\\pi \\varepsilon_0 R}$', '$W = \\frac{Q^2}{4\\pi \\varepsilon_0 R}$', '$W = \\frac{Q^2}{2\\pi \\varepsilon_0 R}$', '$W = \\frac{Q^2}{16\\pi \\varepsilon_0 R}$'],
        ans: 0,
        exp: 'Chính xác! W = (1/2) Q^2 / C = (1/2) Q^2 / (4 pi eps_0 R) = Q^2 / (8 pi eps_0 R).'
      },
      {
        q: '4. Một tụ điện phẳng chứa hai lớp điện môi có hằng số điện môi $\\varepsilon_1, \\varepsilon_2$ và chiều dày tương ứng $d_1, d_2$. Điện dung tương đương của tụ ghép nối tiếp là:',
        opts: ['$C = \\frac{\\varepsilon_0 S}{\\frac{d_1}{\\varepsilon_1} + \\frac{d_2}{\\varepsilon_2}}$', '$C = \\frac{\\varepsilon_0 S (\\varepsilon_1 + \\varepsilon_2)}{d_1 + d_2}$', '$C = \\frac{\\varepsilon_0 S}{\\varepsilon_1 d_1 + \\varepsilon_2 d_2}$', '$C = \\frac{\\varepsilon_0 \\varepsilon_1 \\varepsilon_2 S}{d_1 d_2}$'],
        ans: 0,
        exp: 'Chính xác! 1/C = 1/C_1 + 1/C_2 = d_1/(eps_0 eps_1 S) + d_2/(eps_0 eps_2 S) => C = eps_0 S / (d_1/eps_1 + d_2/eps_2).'
      }
    ]
  },
  {
    id: 'bai6',
    num: '06',
    sub: 'Điện Từ Học • Từ Trường & Cảm Ứng Faraday',
    title: 'Từ Trường Dừng, Định Luật Biot-Savart, Định Lý Ampère & Cảm Ứng Điện Từ',
    intro: 'Chuyên đề từ trường VPhO bao gồm định luật Biot-Savart-Laplace, định lý lưu số từ trường Ampère, cảm ứng điện từ Faraday trong thanh dẫn chuyển động và từ trường biến thiên, hiện tượng hỗ cảm, dòng Foucault và động cơ từ trường.',
    b1Title: 'Định Luật Biot-Savart & Định Lý Lưu Số Ampère',
    b1Content: `• Định luật Biot-Savart-Laplace: $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\vec{r})}{r^3}$. Từ trường tại tâm vòng tròn dây dẫn bán kính $R$: $B = \\frac{\\mu_0 I}{2R}$.<br>• Định lý lưu số Ampère: $\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{xuyên\\,qua}$. Ứng dụng tính từ trường của ống dây solenoid, ống xuyến toroid và cáp đồng trục.`,
    b2Title: 'Cảm Ứng Điện Từ Faraday & Suất Điện Động Cảm Ứng',
    b2Content: `• Định luật cảm ứng Faraday: $\\mathcal{E}_{cư} = -\\frac{d\\Phi}{dt}$.<br>• Suất điện động do chuyển động của đoạn dây dài $l$ trong từ trường $\\vec{B}$: $\\mathcal{E} = \\int (\\vec{v} \\times \\vec{B}) \\cdot d\\vec{l}$.<br>• <strong>Hiện tượng hãm điện từ:</strong> Thanh kim loại trượt không ma sát trên hai thanh ray nằm ngang trong từ trường vuông góc sẽ chuyển động chậm dần đều theo hàm mũ do lực từ Lorentz cản trở: $v(t) = v_0 e^{-t/\\tau}$ với $\\tau = \\frac{m R}{B^2 l^2}$.`,
    quizzes: [
      {
        q: '1. Một thanh kim loại khối lượng $m$, chiều dài $l$, điện trở $R$ trượt trên hai ray kim loại không ma sát trong từ trường đều $\\vec{B}$ vuông góc với mặt phẳng ray. Vận tốc đầu là $v_0$. Quãng đường tối đa thanh đi được trước khi dừng lại là:',
        opts: ['$s = \\frac{m R v_0}{B^2 l^2}$', '$s = \\frac{m v_0^2}{2 B l}$', '$s = \\frac{2 m R v_0}{B^2 l^2}$', '$s = \\frac{m R v_0}{2 B^2 l^2}$'],
        ans: 0,
        exp: 'Chính xác! Lực hãm từ F = B^2 l^2 v / R. Ta có m dv/dt = -B^2 l^2 v / R => m dv = -(B^2 l^2 / R) dx. Tích phân từ v_0 đến 0: m v_0 = (B^2 l^2 / R) s => s = m R v_0 / (B^2 l^2).'
      },
      {
        q: '2. Từ trường tại tâm một cuộn dây dẹt hình tròn gồm $N$ vòng, bán kính $R$, mang dòng điện $I$ là:',
        opts: ['$B = \\frac{\\mu_0 N I}{2R}$', '$B = \\frac{\\mu_0 N I}{R}$', '$B = \\frac{\\mu_0 N I}{4\\pi R}$', '$B = \\frac{\\mu_0 I}{2\\pi R}$'],
        ans: 0,
        exp: 'Chính xác! Mỗi vòng dây tạo ra từ trường tại tâm là mu_0 I / (2R). Với N vòng: B = mu_0 N I / (2R).'
      },
      {
        q: '3. Năng lượng từ trường chứa bên trong một ống dây hình trụ dài chiều dài $l$, tiết diện $S$, gồm $N$ vòng dây mang dòng điện $I$ là:',
        opts: ['$W_m = \\frac{1}{2} \\frac{\\mu_0 N^2 S}{l} I^2$', '$W_m = \\frac{\\mu_0 N^2 S}{l} I^2$', '$W_m = \\frac{1}{2} \\mu_0 N S I^2$', '$W_m = \\frac{1}{2} \\frac{\\mu_0 N S}{l^2} I^2$'],
        ans: 0,
        exp: 'Chính xác! Độ tự cảm L = mu_0 N^2 S / l. Năng lượng từ trường W_m = (1/2) L I^2 = (1/2) (mu_0 N^2 S / l) I^2.'
      },
      {
        q: '4. Chiều của dòng điện cảm ứng trong một mạch kín được xác định bởi định luật Lenz nhằm mục đích:',
        opts: ['Chống lại nguyên nhân sinh ra nó (sự biến thiên của từ thông)', 'Tăng cường sự biến thiên của từ thông', 'Luôn cùng chiều với kim đồng hồ', 'Triệt tiêu hoàn toàn từ trường ngoài'],
        ans: 0,
        exp: 'Chính xác! Định luật Lenz khẳng định từ trường của dòng điện cảm ứng luôn có xu hướng chống lại sự biến thiên của từ thông sinh ra nó.'
      }
    ]
  },
  {
    id: 'bai7',
    num: '07',
    sub: 'Dao Động & Sóng Điện Từ • Mạch RLC Nâng Cao',
    title: 'Mạch Dao Động RLC, Phương Trình Maxwell & Bức Xạ Sóng Điện Từ',
    intro: 'VPhO nâng cao khai thác mạch RLC có nguồn biến thiên, hiện tượng quá độ (Transient phenomena), cộng hưởng công suất, hệ phương trình vi phân và tích phân Maxwell, véctơ Poynting và bức xạ sóng điện từ của lưỡng cực dao động.',
    b1Title: 'Hiện Tượng Quá Độ Trong Mạch RLC & Hệ Số Phẩm Chất Q',
    b1Content: `• Phương trình vi phân mạch dao động RLC nối tiếp: $L \\frac{d^2 q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C} q = 0$.<br>• Tần số dao động tắt dần: $\\omega = \\sqrt{\\omega_0^2 - \\beta^2}$ với $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ và hệ số suy giảm $\\beta = \\frac{R}{2L}$.<br>• <strong>Hệ số phẩm chất (Quality Factor):</strong> $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{\\omega_0}{2\\beta}$. Đại lượng này thể hiện khả năng lưu trữ năng lượng so với năng lượng tiêu tán trên điện trở trong một chu kỳ.`,
    b2Title: 'Hệ Phương Trình Maxwell & Véctơ Poynting',
    b2Content: `• Dòng điện dịch của Maxwell: $I_{dịch} = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ lấp đầy khoảng trống điện trường biến thiên giữa hai bản tụ.<br>• <strong>Véctơ Poynting:</strong> $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$. Hướng của $\\vec{S}$ chỉ phương truyền năng lượng sóng điện từ, độ lớn của $\\vec{S}$ bằng mật độ dòng năng lượng truyền qua một đơn vị diện tích trong một đơn vị thời gian ($W/m^2$).`,
    quizzes: [
      {
        q: '1. Một mạch dao động RLC có $R = 10\\ \\Omega$, $L = 0{,}1\\text{ H}$, $C = 10\\ \\mu\\text{F}$. Hệ số phẩm chất $Q$ của mạch dao động là:',
        opts: ['$Q = 10$', '$Q = 100$', '$Q = 1$', '$Q = 20$'],
        ans: 0,
        exp: 'Chính xác! Q = (1/R) * sqrt(L/C) = (1/10) * sqrt(0.1 / 10^-5) = (1/10) * sqrt(10000) = 100 / 10 = 10.'
      },
      {
        q: '2. Khi tụ điện phẳng đang được nạp điện với dòng điện $I$, giữa hai bản tụ xuất hiện một dòng điện dịch có độ lớn bằng:',
        opts: ['Đúng bằng dòng điện dẫn $I$', 'Bằng 0 vì không có hạt mang điện chạy qua', 'Lớn hơn dòng điện dẫn $I$', 'Nhỏ hơn dòng điện dẫn $I$'],
        ans: 0,
        exp: 'Chính xác! Theo định luật Maxwell-Ampère, dòng điện dịch giữa hai bản tụ I_d = eps_0 d(Phi_E)/dt đúng bằng dòng điện dẫn I nạp vào tụ, đảm bảo tính liên tục của mạch điện.'
      },
      {
        q: '3. Độ lớn trung bình của véctơ Poynting trong sóng điện từ phẳng điều hòa truyền trong chân không liên hệ với biên độ điện trường $E_0$ theo công thức:',
        opts: ['$\\langle S \\rangle = \\frac{1}{2} c \\varepsilon_0 E_0^2$', '$\\langle S \\rangle = c \\varepsilon_0 E_0^2$', '$\\langle S \\rangle = \\frac{1}{2 \\mu_0} E_0^2$', '$\\langle S \\rangle = \\frac{1}{4} c \\varepsilon_0 E_0^2$'],
        ans: 0,
        exp: 'Chính xác! <S> = 1/(2 mu_0) * E_0 B_0 = 1/(2 mu_0 c) * E_0^2 = 1/2 c eps_0 E_0^2.'
      },
      {
        q: '4. Áp suất bức xạ $P_{bx}$ của chùm sóng điện từ có cường độ $I$ đập vuông góc vào một bề mặt phản xạ lý tưởng là:',
        opts: ['$P_{bx} = \\frac{2I}{c}$', '$P_{bx} = \\frac{I}{c}$', '$P_{bx} = \\frac{I}{2c}$', '$P_{bx} = \\frac{4I}{c}$'],
        ans: 0,
        exp: 'Chính xác! Đối với bề mặt phản xạ hoàn toàn, độ biến thiên xung lượng gấp đôi: Delta p = 2 E / c => P_bx = 2I / c.'
      }
    ]
  },
  {
    id: 'bai8',
    num: '08',
    sub: 'Quang Hình Học • Nguyên Lý Fermat & Ma Trận Tia',
    title: 'Quang Hình Học Nâng Cao, Nguyên Lý Fermat & Phương Pháp Ma Trận Tia ABCD',
    intro: 'Quang hình học trong VPhO vượt khỏi mức độ tính tiêu cự thông thường để giải quyết môi trường chiết suất biến đổi $n(r)$ qua phương trình vi phân quỹ đạo tia sáng từ nguyên lý thời gian cực trị Fermat, và hệ quang học phức tạp qua ma trận chuyển tiếp tia ABCD.',
    b1Title: 'Nguyên Lý Fermat & Quỹ Đạo Tia Sáng Trong Môi Trường Không Đồng Tính',
    b1Content: `• <strong>Nguyên lý Fermat:</strong> Tia sáng truyền giữa hai điểm theo quỹ đạo mà quang trình $L = \\int n(s) ds$ đạt giá trị dừng (cực trị thời gian).<br>• Phương trình quỹ đạo tia sáng trong môi trường có chiết suất $n(y)$ biến đổi theo phương thẳng đứng:<br>$$n(y) \\cos \\theta(y) = \\text{const}$$<br>• Giải thích hiện tượng ảo ảnh quang học (Fata Morgana) trên sa mạc hoặc mặt đường nhựa vào trưa hè nắng nóng.`,
    b2Title: 'Phương Pháp Ma Trận Truyền Tia (ABCD Matrix Optics)',
    b2Content: `• Biểu diễn tia sáng bởi véctơ trạng thái $\\begin{pmatrix} y \\\\ \\theta \\end{pmatrix}$ gồm độ cao $y$ và góc lệch $\\theta$.<br>• <strong>Ma trận khoảng truyền tự do $d$:</strong> $M_d = \\begin{pmatrix} 1 & d \\\\ 0 & 1 \\end{pmatrix}$.<br>• <strong>Ma trận thấu kính mỏng tiêu cự $f$:</strong> $M_f = \\begin{pmatrix} 1 & 0 \\\\ -1/f & 1 \\end{pmatrix}$.<br>• Ma trận của toàn hệ quang học là tích các ma trận thành phần theo thứ tự ngược lại: $M = M_k ... M_2 M_1$.`,
    quizzes: [
      {
        q: '1. Trong môi trường chiết suất biến đổi theo độ cao $y$ theo hàm $n(y) = n_0 \\sqrt{1 + \\alpha y}$. Một tia sáng xuất phát từ gốc tọa độ với góc nghiêng $\\theta_0$ so với phương ngang. Quỹ đạo tia sáng là đường:',
        opts: ['Parabol', 'Đường hyperbol', 'Đường elip', 'Đường thẳng'],
        ans: 0,
        exp: 'Chính xác! n(y) cos theta = n_0 cos theta_0 => 1 + tan^2 theta = n^2(y) / (n_0^2 cos^2 theta_0). Do tan theta = dy/dx, ta có phương trình vi phân (dy/dx)^2 = [1 + alpha y]/cos^2 theta_0 - 1 = tan^2 theta_0 + alpha y / cos^2 theta_0, giải ra y là hàm bậc hai theo x (Parabol).'
      },
      {
        q: '2. Cho hệ gồm một thấu kính hội tụ tiêu cự $f_1$ và thấu kính phân kỳ tiêu cự $-f_2$ ghép sát đồng trục. Tiêu cự tương đương của hệ là:',
        opts: ['$f = \\frac{f_1 f_2}{f_2 - f_1}$', '$f = f_1 - f_2$', '$f = \\frac{f_1 f_2}{f_1 + f_2}$', '$f = \\frac{f_1 + f_2}{f_1 f_2}$'],
        ans: 0,
        exp: 'Chính xác! 1/f = 1/f_1 + 1/(-f_2) = (f_2 - f_1) / (f_1 f_2) => f = f_1 f_2 / (f_2 - f_1).'
      },
      {
        q: '3. Định thức (Determinant) của ma trận truyền tia ABCD trong bất kỳ hệ quang học đồng trục nào đặt trong cùng một môi trường luôn bằng:',
        opts: ['$\\det(M) = A D - B C = 1$', '$\\det(M) = 0$', '$\\det(M) = -1$', '$\\det(M) = f$'],
        ans: 0,
        exp: 'Chính xác! Do tính chất bảo toàn diện tích trong không gian pha tia sáng (Định lý Liouville), det(M) = AD - BC = n_1/n_2 = 1 khi môi trường đầu và cuối giống nhau.'
      },
      {
        q: '4. Góc lệch cực tiểu $D_{\\min}$ của tia sáng đơn sắc khi qua một lăng kính có góc chiết quang $A$ và chiết suất $n$ thỏa mãn hệ thức:',
        opts: ['$\\sin\\left(\\frac{D_{\\min} + A}{2}\\right) = n \\sin\\left(\\frac{A}{2}\\right)$', '$\\sin(D_{\\min} + A) = n \\sin A$', '$D_{\\min} = (n - 1) A$', '$\\cos\\left(\\frac{D_{\\min} + A}{2}\\right) = n \\cos\\left(\\frac{A}{2}\\right)$'],
        ans: 0,
        exp: 'Chính xác! Khi xảy ra góc lệch cực tiểu, tia sáng đi đối xứng qua lăng kính: i_1 = i_2 = (D_min + A)/2 và r_1 = r_2 = A/2 => sin[(D_min+A)/2] = n sin(A/2).'
      }
    ]
  },
  {
    id: 'bai9',
    num: '09',
    sub: 'Quang Sóng • Giao Thoa, Nhiễu Xạ & Phân Cực',
    title: 'Giao Thoa Bản Mỏng, Nhiễu Xạ Fraunhofer & Phân Cực Ánh Sáng',
    intro: 'Lý thuyết quang sóng VPhO bao gồm giao thoa ánh sáng nêm không khí và vân tròn Newton, độ dịch pha khi phản xạ trên môi trường chiết quang hơn, nhiễu xạ khe hẹp Fraunhofer, cách tử nhiễu xạ và định luật Brewster về ánh sáng phân cực toàn phần.',
    b1Title: 'Giao Thoa Vân Tròn Newton & Nêm Không Khí',
    b1Content: `• Khi ánh sáng phản xạ trên bề mặt môi trường chiết quang hơn ($n_2 > n_1$), pha của sóng bị nhảy đột ngột $\\pi$ (tương đương quang trình tăng thêm $\\lambda/2$).<br>• <strong>Bán kính vân tối Newton thứ $k$ (giao thoa phản xạ):</strong> $r_k = \\sqrt{k R \\lambda}$ (với $R$ là bán kính cong của thấu kính lồi đặt trên bản thủy tinh phẳng). Tâm hệ vân phản xạ luôn là một điểm tối.`,
    b2Title: 'Nhiễu Xạ Fraunhofer & Định Luật Phân Cực Malus, Brewster',
    b2Content: `• <strong>Nhiễu xạ qua một khe hẹp bề rộng $b$:</strong> Điều kiện cực tiểu nhiễu xạ: $b \\sin \\theta = m \\lambda$ ($m = \\pm 1, \\pm 2, ...$).<br>• <strong>Định luật Brewster:</strong> Khi góc tới $i_B$ thỏa mãn $\\tan i_B = n$, tia phản xạ phân cực thẳng hoàn toàn và vuông góc với tia khúc xạ ($i_B + r = 90^\\circ$).<br>• <strong>Định luật Malus:</strong> Cường độ ánh sáng sau khi qua kính phân tích: $I = I_0 \\cos^2 \\alpha$.`,
    quizzes: [
      {
        q: '1. Trong thí nghiệm vân tròn Newton tạo bởi thấu kính lồi phẳng bán kính $R = 5\\text{ m}$ và ánh sáng bước sóng $\\lambda = 500\\text{ nm}$. Bán kính của vân tối thứ 4 ($k = 4$) là:',
        opts: ['$r_4 = 3{,}16\\text{ mm}$', '$r_4 = 1{,}58\\text{ mm}$', '$r_4 = 6{,}32\\text{ mm}$', '$r_4 = 4{,}00\\text{ mm}$'],
        ans: 0,
        exp: 'Chính xác! r_k = sqrt(k R lambda) = sqrt(4 * 5 * 500 * 10^-9) = sqrt(10^-5) = 3.16 * 10^-3 m = 3.16 mm.'
      },
      {
        q: '2. Chiếu chùm ánh sáng tự nhiên từ không khí vào khối thủy tinh có chiết suất $n = \\sqrt{3} \\approx 1{,}732$. Góc tới Brewster $i_B$ để tia phản xạ phân cực phẳng hoàn toàn là:',
        opts: ['$60^\\circ$', '$30^\\circ$', '$45^\\circ$', '$53^\\circ$'],
        ans: 0,
        exp: 'Chính xác! tan(i_B) = n = sqrt(3) => i_B = 60 độ.'
      },
      {
        q: '3. Cường độ sáng của chùm sáng phân cực qua bản phân tích giảm đi một nửa so với chùm ban đầu. Góc $\\alpha$ hợp bởi trục quang của hai bản kính là:',
        opts: ['$45^\\circ$', '$30^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        ans: 0,
        exp: 'Chính xác! Theo định luật Malus: I = I_0 cos^2 alpha = I_0 / 2 => cos alpha = 1/sqrt(2) => alpha = 45 độ.'
      },
      {
        q: '4. Chiếu ánh sáng đơn sắc bước sóng $\\lambda$ qua một cách tử nhiễu xạ có chu kỳ $d$. Bậc quang phổ cực đại lớn nhất $m_{\\max}$ có thể quan sát được là:',
        opts: ['$m_{\\max} = \\lfloor d / \\lambda \\rfloor$', '$m_{\\max} = \\lfloor 2d / \\lambda \\rfloor$', '$m_{\\max} = \\lfloor \\lambda / d \\rfloor$', '$m_{\\max} = \\infty$'],
        ans: 0,
        exp: 'Chính xác! d sin theta = m lambda. Vì |sin theta| <= 1 nên |m| <= d / lambda => m_max = floor(d / lambda).'
      }
    ]
  },
  {
    id: 'bai10',
    num: '10',
    sub: 'Vật Lý Hiện Đại • Tương Đối Hẹp & Lượng Tử',
    title: 'Thuyết Tương Đối Hẹp Einstein, Hiệu Ứng Compton & Mẫu Nguyên Tử Bohr',
    intro: 'Vật lý hiện đại trong đề thi Quốc Gia bao gồm các hệ quả động học và động lực học tương đối tính của Einstein (co độ dài, giãn thời gian, xung lượng $p = \\gamma m v$, $E^2 = p^2 c^2 + m_0^2 c^4$), tán xạ photon Compton và các mức năng lượng quang phổ.',
    b1Title: 'Động Học & Động Lực Học Tương Đối Tính Einstein',
    b1Content: `• Thừa số Lorentz: $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$.<br>• Thời gian giãn: $\\Delta t = \\gamma \\Delta t_0$. Co ngắn chiều dài: $L = L_0 / \\gamma$.<br>• <strong>Hệ thức năng lượng toàn phần và xung lượng:</strong><br>$$E = \\gamma m_0 c^2 = K + m_0 c^2,\\quad E^2 = p^2 c^2 + m_0^2 c^4$$<br>• Động lượng của hạt tương đối tính: $p = \\gamma m_0 v$.`,
    b2Title: 'Hiệu Ứng Tán Xạ Compton & Lưỡng Tính Sóng - Hạt',
    b2Content: `• Tán xạ Compton giữa photon bước sóng $\\lambda$ và electron đứng yên tự do:<br>$$\\Delta \\lambda = \\lambda\' - \\lambda = \\lambda_C (1 - \\cos \\theta)$$<br>• Với $\\lambda_C = \\frac{h}{m_e c} \\approx 2{,}426 \\times 10^{-12}\\text{ m}$ là bước sóng Compton của electron.<br>• Giả thuyết De Broglie: Hạt chuyển động với động lượng $p$ có tính chất sóng với bước sóng $\\lambda = \\frac{h}{p}$.`,
    quizzes: [
      {
        q: '1. Một hạt có khối lượng nghỉ $m_0$ chuyển động với tốc độ $v = 0{,}8c$. Động năng $K$ của hạt bằng bao nhiêu lần năng lượng nghỉ $E_0 = m_0 c^2$?',
        opts: ['$K = \\frac{2}{3} E_0 \\approx 0{,}67 E_0$', '$K = 0{,}8 E_0$', '$K = 1{,}67 E_0$', '$K = 0{,}32 E_0$'],
        ans: 0,
        exp: 'Chính xác! gamma = 1 / sqrt(1 - 0.8^2) = 1 / 0.6 = 5/3. Động năng K = (gamma - 1) m_0 c^2 = (5/3 - 1) E_0 = (2/3) E_0.'
      },
      {
        q: '2. Trong tán xạ Compton, bước sóng của photon bị tán xạ ngược trở lại (góc tán xạ $\\theta = 180^\\circ$) tăng thêm một lượng bằng:',
        opts: ['$\\Delta \\lambda = 2 \\lambda_C$', '$\\Delta \\lambda = \\lambda_C$', '$\\Delta \\lambda = 0$', '$\\Delta \\lambda = \\frac{1}{2} \\lambda_C$'],
        ans: 0,
        exp: 'Chính xác! Delta lambda = lambda_C (1 - cos 180 độ) = lambda_C [1 - (-1)] = 2 lambda_C.'
      },
      {
        q: '3. Bước sóng De Broglie của một electron được tăng tốc từ trạng thái nghỉ qua hiệu điện thế $U$ (phi tương đối tính) tỉ lệ với:',
        opts: ['$\\frac{1}{\\sqrt{U}}$', '$\\sqrt{U}$', '$\\frac{1}{U}$', '$U^2$'],
        ans: 0,
        exp: 'Chính xác! Động năng p^2/(2m) = e U => p = sqrt(2 m e U). Bước sóng De Broglie lambda = h/p = h / sqrt(2 m e U) tỉ lệ nghịch với căn bậc hai của U.'
      },
      {
        q: '4. Theo mẫu nguyên tử Bohr, bán kính quỹ đạo dừng của electron trong nguyên tử Hydro tỉ lệ thuận với:',
        opts: ['$n^2$', '$n$', '$\\frac{1}{n}$', '$\\frac{1}{n^2}$'],
        ans: 0,
        exp: 'Chính xác! Bán kính quỹ đạo dừng r_n = n^2 * r_0 với r_0 = 0.53 Angstrom là bán kính Bohr.'
      }
    ]
  }
];

// 10 National HSG Mock Exam Questions
const examQuestions = [
  {
    id: 'eq1',
    num: 1,
    topic: 'Cơ Học Vật Rắn',
    q: 'Một quả cầu đặc đồng chất khối lượng $m$, bán kính $R$ lăn không trượt từ trạng thái nghỉ xuống dốc nghiêng góc $\\alpha$ so với mặt ngang. Gia tốc $a$ của khối tâm quả cầu là:',
    options: [
      '$a = \\frac{5}{7} g \\sin \\alpha$',
      '$a = \\frac{1}{2} g \\sin \\alpha$',
      '$a = \\frac{2}{3} g \\sin \\alpha$',
      '$a = g \\sin \\alpha$'
    ],
    ans: 'A',
    sol: 'Mômen quán tính quả cầu đặc I = (2/5)m R^2. Phương trình Newton: m g sin alpha - F_ms = m a. Phương trình quay: F_ms * R = I * beta = (2/5)m R^2 * (a/R) => F_ms = (2/5)m a. Thay vào phương trình lực: m g sin alpha = m a + 2/5 m a = 7/5 m a => a = (5/7) g sin alpha.'
  },
  {
    id: 'eq2',
    num: 2,
    topic: 'Dao Động Cơ Học',
    q: 'Một con lắc vật lý gồm một thanh mảnh đồng chất chiều dài $L$ có thể quay không ma sát quanh trục nằm ngang đi qua một đầu thanh. Chu kỳ dao động nhỏ của con lắc là:',
    options: [
      '$T = 2\\pi \\sqrt{\\frac{2L}{3g}}$',
      '$T = 2\\pi \\sqrt{\\frac{L}{g}}$',
      '$T = 2\\pi \\sqrt{\\frac{L}{2g}}$',
      '$T = 2\\pi \\sqrt{\\frac{3L}{2g}}$'
    ],
    ans: 'A',
    sol: 'Mômen quán tính quanh đầu thanh: I = (1/3) m L^2. Khoảng cách từ trục quay đến khối tâm là d = L/2. Tần số góc dao động nhỏ omega = sqrt(m g d / I) = sqrt(m g (L/2) / (1/3 m L^2)) = sqrt(3g / 2L) => Chu kỳ T = 2 pi sqrt(2L / 3g).'
  },
  {
    id: 'eq3',
    num: 3,
    topic: 'Cơ Học Chất Lưu',
    q: 'Một bình kín chứa nước, phía trên là không khí có áp suất phụ thêm $p_0$. Ở đáy bình có một lỗ rò nhỏ ở độ sâu $h$ so với mặt thoáng nước. Bỏ qua độ nhớt, vận tốc $v$ của tia nước phun ra từ lỗ rò là:',
    options: [
      '$v = \\sqrt{2gh + \\frac{2p_0}{\\rho}}$',
      '$v = \\sqrt{2gh}$',
      '$v = \\sqrt{gh + \\frac{p_0}{\\rho}}$',
      '$v = \\sqrt{2gh + \\frac{p_0}{2\\rho}}$'
    ],
    ans: 'A',
    sol: 'Áp dụng định lý Bernoulli giữa mặt thoáng và lỗ rò: (p_atm + p_0) + rho g h + 0 = p_atm + 1/2 rho v^2 => 1/2 rho v^2 = rho g h + p_0 => v = sqrt(2gh + 2p_0 / rho).'
  },
  {
    id: 'eq4',
    num: 4,
    topic: 'Nhiệt Động Lực Học',
    q: 'Một mol khí lý tưởng đơn nguyên tử dãn nở theo quy luật $T = \\alpha V^2$ (với $\\alpha > 0$ là hằng số). Công $A$ mà khối khí thực hiện khi thể tích tăng từ $V_1$ đến $V_2 = 2V_1$ là:',
    options: [
      '$A = \\frac{3}{2} R \\alpha V_1^2$',
      '$A = 3 R \\alpha V_1^2$',
      '$A = R \\alpha V_1^2$',
      '$A = \\frac{1}{2} R \\alpha V_1^2$'
    ],
    ans: 'A',
    sol: 'Phương trình trạng thái: p V = R T = R alpha V^2 => p = R alpha V. Công A = int_V1^V2 p dV = R alpha int_V1^(2V1) V dV = R alpha * [V^2/2] từ V_1 đến 2V_1 = R alpha * (4V_1^2 - V_1^2)/2 = 3/2 R alpha V_1^2.'
  },
  {
    id: 'eq5',
    num: 5,
    topic: 'Điện Trường Tĩnh',
    q: 'Một khối cầu điện môi bán kính $R$ có mật độ điện tích khối phụ thuộc khoảng cách $r$ tới tâm theo quy luật $\\rho(r) = \\rho_0 \\left(1 - \\frac{r}{R}\\right)$ với $r \\le R$. Cường độ điện trường $E(r)$ đạt giá trị lớn nhất tại vị trí cách tâm:',
    options: [
      '$r = \\frac{2}{3} R$',
      '$r = \\frac{1}{2} R$',
      '$r = R$',
      '$r = \\frac{3}{4} R$'
    ],
    ans: 'A',
    sol: 'Theo định lý Gauss: 4 pi r^2 E(r) = q(r)/eps_0 => E(r) = q(r) / (4 pi eps_0 r^2). Lấy đạo hàm dE/dr = 0 tương đương với d/dr [q(r)/r^2] = 0 <=> (dq/dr)*r^2 - 2r q(r) = 0. Vì dq/dr = 4 pi r^2 rho(r), ta có 4 pi r^4 rho_0(1 - r/R) = 2r * 4 pi rho_0 [r^3/3 - r^4/(4R)] => r^2(1 - r/R) = 2(r^2/3 - r^3/4R) => 1 - r/R = 2/3 - r/(2R) => r/(2R) = 1/3 => r = 2/3 R.'
  },
  {
    id: 'eq6',
    num: 6,
    topic: 'Từ Trường & Cảm Ứng',
    q: 'Một đĩa kim loại đồng chất bán kính $R$ quay đều quanh trục đối xứng của nó với vận tốc góc $\\omega$ trong từ trường đều $\\vec{B}$ song song với trục quay. Hiệu điện thế cảm ứng $\\Delta V$ giữa tâm và mép đĩa là:',
    options: [
      '$\\Delta V = \\frac{1}{2} B \\omega R^2$',
      '$\\Delta V = B \\omega R^2$',
      '$\\Delta V = \\frac{1}{4} B \\omega R^2$',
      '$\\Delta V = 2 B \\omega R^2$'
    ],
    ans: 'A',
    sol: 'Tại khoảng cách r tới tâm, vận tốc tiếp tuyến v = omega * r. Lực Lorentz tác dụng lên electron f = e v B = e B omega r. Cường độ điện trường cảm ứng E = f/e = B omega r. Hiệu điện thế giữa tâm và mép đĩa: Delta V = int_0^R E dr = int_0^R B omega r dr = 1/2 B omega R^2.'
  },
  {
    id: 'eq7',
    num: 7,
    topic: 'Mạch Dao Động RLC',
    q: 'Một mạch dao động gồm cuộn cảm thuần $L$ và hai tụ điện giống nhau $C_1 = C_2 = C$ mắc song song đang dao động tự do với cường độ dòng điện cực đại $I_0$. Vào thời điểm dòng điện triệt tiêu ($i = 0$), người ta ngắt nhanh tụ $C_2$ ra khỏi mạch. Cường độ dòng điện cực đại trong mạch sau đó là:',
    options: [
      '$I\'_0 = \\frac{I_0}{\\sqrt{2}}$',
      '$I\'_0 = I_0$',
      '$I\'_0 = \\frac{I_0}{2}$',
      '$I\'_0 = I_0 \\sqrt{2}$'
    ],
    ans: 'A',
    sol: 'Khi i = 0, toàn bộ năng lượng tích tụ dưới dạng điện trường: W = 1/2 (2C) U_0^2 = 1/2 L I_0^2 => U_0^2 = L I_0^2 / (2C). Khi ngắt C_2, tụ C_2 mang theo một nửa năng lượng W/2. Năng lượng còn lại trong mạch: W\' = 1/2 C U_0^2 = 1/2 L (I\'_0)^2 => (I\'_0)^2 = C U_0^2 / L = C [L I_0^2 / (2C)] / L = I_0^2 / 2 => I\'_0 = I_0 / sqrt(2).'
  },
  {
    id: 'eq8',
    num: 8,
    topic: 'Quang Hình Học',
    q: 'Một sợi cáp quang hình trụ có lõi chiết suất $n_1 = 1{,}50$ và lớp vỏ bọc chiết suất $n_2 = 1{,}40$. Để tia sáng chiếu từ không khí vào tâm đáy sợi cáp được truyền toàn phần trong lõi, góc tới cực đại $\\theta_{\\max}$ của tia sáng với trục sợi quang là:',
    options: [
      '$\\theta_{\\max} = \\arcsin(\\sqrt{n_1^2 - n_2^2}) \\approx 32{,}6^\\circ$',
      '$\\theta_{\\max} = \\arcsin(n_1/n_2) \\approx 68{,}9^\\circ$',
      '$\\theta_{\\max} = \\arccos(n_2/n_1) \\approx 21{,}0^\\circ$',
      '$\\theta_{\\max} = 45^\\circ$'
    ],
    ans: 'A',
    sol: 'Điều kiện phản xạ toàn phần tại mặt tiếp xúc lõi - vỏ: sin(i) >= n_2/n_1. Góc khúc xạ tại mặt đầu: r = 90 - i => cos(r) = sin(i) >= n_2/n_1. Khúc xạ không khí: sin theta = n_1 sin r = n_1 sqrt(1 - cos^2 r) <= n_1 sqrt(1 - n_2^2/n_1^2) = sqrt(n_1^2 - n_2^2). Khẩu độ số NA = sqrt(1.5^2 - 1.4^2) = sqrt(2.25 - 1.96) = sqrt(0.29) approx 0.5385 => theta_max = arcsin(0.5385) approx 32.6 độ.'
  },
  {
    id: 'eq9',
    num: 9,
    topic: 'Quang Sóng',
    q: 'Trong thí nghiệm giao thoa Young với ánh sáng trắng bước sóng từ $0{,}38\\ \\mu\\text{m}$ đến $0{,}76\\ \\mu\\text{m}$. Tại điểm $M$ trên màn cách vân trung tâm một đoạn $x$ chỉ có đúng 2 bức xạ cho vân sáng, trong đó một bức xạ có bước sóng $\\lambda_1 = 0{,}60\\ \\mu\\text{m}$. Bước sóng của bức xạ còn lại là:',
    options: [
      '$\\lambda_2 = 0{,}45\\ \\mu\\text{m}$',
      '$\\lambda_2 = 0{,}40\\ \\mu\\text{m}$',
      '$\\lambda_2 = 0{,}50\\ \\mu\\text{m}$',
      '$\\lambda_2 = 0{,}55\\ \\mu\\text{m}$'
    ],
    ans: 'A',
    sol: 'Vị trí vân sáng: x = k_1 lambda_1 = k_2 lambda_2. Với k_1 = 3 => x = 3 * 0.60 = 1.80 micromet. Kiểm tra các bậc: k = 2 => lambda = 1.80 / 2 = 0.90 (loại); k = 3 => lambda = 0.60 (nhận); k = 4 => lambda = 1.80 / 4 = 0.45 micromet (nằm trong vùng 0.38 - 0.76); k = 5 => lambda = 1.80 / 5 = 0.36 (loại). Đúng 2 bức xạ, bức xạ còn lại là lambda_2 = 0.45 micromet.'
  },
  {
    id: 'eq10',
    num: 10,
    topic: 'Vật Lý Lượng Tử & Tương Đối',
    q: 'Một electron chuyển động tương đối tính có động năng bằng hai lần năng lượng nghỉ của nó ($K = 2 m_0 c^2$). Xung lượng $p$ của electron là:',
    options: [
      '$p = 2\\sqrt{2} m_0 c$',
      '$p = 2 m_0 c$',
      '$p = 3 m_0 c$',
      '$p = \\sqrt{3} m_0 c$'
    ],
    ans: 'A',
    sol: 'Năng lượng toàn phần: E = K + m_0 c^2 = 2 m_0 c^2 + m_0 c^2 = 3 m_0 c^2. Hệ thức tương đối tính: E^2 = p^2 c^2 + m_0^2 c^4 => (3 m_0 c^2)^2 = p^2 c^2 + m_0^2 c^4 => 9 m_0^2 c^4 = p^2 c^2 + m_0^2 c^4 => p^2 c^2 = 8 m_0^2 c^4 => p = sqrt(8) m_0 c = 2 sqrt(2) m_0 c.'
  }
];

// Generate Articles HTML
const articlesHtml = topics.map(t => {
  const quizzesHtml = t.quizzes.map((q, idx) => createQuiz(`${t.id}_q${idx + 1}`, q.q, q.opts, q.ans, q.exp)).join('\n');
  return `
      <!-- Bài ${t.num}: ${t.title} -->
      <article id="${t.id}" class="bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 font-extrabold text-sm border border-cyan-200 dark:border-cyan-800">
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
        <div class="p-5 rounded-2xl bg-cyan-50/50 dark:bg-dark-card/50 border border-cyan-100 dark:border-cyan-950/40 space-y-3">
          <h3 class="text-base font-bold text-cyan-950 dark:text-cyan-300 flex items-center gap-2">
            <i class="fa-solid fa-atom text-cyan-600"></i> ${t.b1Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b1Content}
          </div>
        </div>

        <!-- Section 2 -->
        <div class="p-5 rounded-2xl bg-blue-50/50 dark:bg-dark-card/50 border border-blue-100 dark:border-blue-950/40 space-y-3">
          <h3 class="text-base font-bold text-blue-950 dark:text-blue-300 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-blue-600"></i> ${t.b2Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b2Content}
          </div>
        </div>

        <!-- Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-cyan-600"></i> Bài Tập Củng Cố &amp; Khảo Sát Nhanh (4 câu)
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
              <label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-700/80 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 cursor-pointer transition">
                <input type="radio" name="${eq.id}" value="${letters[idx]}" class="mt-1 text-cyan-600 focus:ring-cyan-500">
                <span class="text-xs sm:text-sm text-gray-800 dark:text-gray-200"><strong class="text-cyan-600 dark:text-cyan-400 mr-1">${letters[idx]}.</strong> ${opt}</span>
              </label>`).join('\n');

  return `
            <!-- Câu ${eq.num} -->
            <div class="exam-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 text-xs font-black">
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
                <span class="text-cyan-600 dark:text-cyan-400">Câu ${eq.num}: ${eq.topic}</span>
                <span class="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-xs">Đáp án đúng: ${eq.ans}</span>
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed font-mono text-xs bg-white dark:bg-dark-card p-3 rounded-lg border border-gray-100 dark:border-gray-700">${eq.sol}</p>
            </div>`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ôn Luyện Thi Học Sinh Giỏi Vật Lý Cấp 3 (THPT &amp; Chuyên Quốc Gia) | CodeHub</title>
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
              bg: '#0B1120',
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
  
  <!-- KaTeX -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    .math-font { font-family: 'KaTeX_Math', 'Times New Roman', serif; }
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 4px; }
    .hsgphy-gradient {
      background: linear-gradient(135deg, #083344 0%, #030712 50%, #0f172a 100%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Header / Navigation -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-lg hover:opacity-90">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="hidden sm:inline">CodeHub</span>
        </a>
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div class="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs sm:text-sm font-semibold">
          <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
            <i class="fa-solid fa-atom"></i> HSG Vật Lý THPT
          </span>
          <a href="hsg_toan_thpt.html" class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-infinity"></i> HSG Toán
          </a>
          <a href="hsg_hoa_thpt.html" class="px-2.5 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-flask"></i> HSG Hóa
          </a>
          <a href="hsg_tin_thpt.html" class="px-2.5 py-1 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-code"></i> HSG Tin
          </a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Phòng Thi Thử VPhO</span>
          <span class="sm:hidden">Thi Thử</span>
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
  <section class="hsgphy-gradient text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-900/40 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-semibold tracking-wide">
          <i class="fa-solid fa-medal text-cyan-400"></i> Bồi Dưỡng Đội Tuyển Học Sinh Giỏi Quốc Gia (VPhO &amp; Chuyên)
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Luyện Thi Học Sinh Giỏi <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">Vật Lý Cấp 3 (THPT)</span>
        </h1>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed">
          Giáo trình chuyên sâu dành cho học sinh đội tuyển HSG Quốc gia &amp; THPT Chuyên: Động lực học vật rắn, Lực quán tính Coriolis, Dao động nhiều bậc tự do, Cơ học chất lưu Bernoulli &amp; Poiseuille, Khí thực Van der Waals, Phương pháp ảnh điện, Cảm ứng Faraday &amp; Véctơ Poynting, Ma trận truyền tia ABCD, Vân tròn Newton và Thuyết tương đối hẹp Einstein.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-book-bookmark text-cyan-400"></i> 10 Chuyên đề VPhO chuẩn</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-cyan-400"></i> 40 Bài tập trắc nghiệm có lời giải</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-trophy text-amber-400"></i> Đề thi thử Quốc gia 60:00</span>
        </div>
      </div>

      <!-- Quick Learning Card -->
      <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 w-full md:w-80 shrink-0 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-200">Tiến Độ Ôn Tập</span>
          <span id="quiz-completed-count" class="text-lg font-black text-cyan-300">0 / 40</span>
        </div>
        <div class="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
          <div id="progress-bar" class="bg-gradient-to-r from-cyan-400 to-blue-400 h-full w-0 transition-all duration-300"></div>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed">
          Hoàn thành các câu hỏi trắc nghiệm dưới mỗi chuyên đề để nâng cao kiến thức và tích lũy phản xạ giải bài tập VPhO.
        </p>
        <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-play text-slate-950"></i> Thi Thử Đề VPhO (60:00)
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
      <div class="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold">
        <i class="fa-solid fa-atom"></i>
        <span>Mục Lục HSG Vật Lý</span>
      </div>
      <button onclick="toggleDrawer(false)" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="overflow-y-auto p-4 space-y-1 text-sm flex-1 sidebar-scroll">
      ${topics.map(t => `<a href="#${t.id}" onclick="toggleDrawer(false)" class="block px-3 py-2 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 text-gray-700 dark:text-gray-300 hover:text-cyan-600 font-medium transition">Bài ${parseInt(t.num)}: ${t.sub}</a>`).join('\n      ')}
    </div>
  </div>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Desktop Sticky Sidebar -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        <div class="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700/60 font-bold text-sm text-cyan-600 dark:text-cyan-400">
            <i class="fa-solid fa-compass"></i>
            <span>Mục Lục 10 Chuyên Đề</span>
          </div>
          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
            ${topics.map(t => `<a href="#${t.id}" class="nav-link block px-2.5 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium">${parseInt(t.num)}. ${t.sub}</a>`).join('\n            ')}
          </nav>
        </div>

        <!-- Sidebar Mock Exam Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white border border-cyan-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
            <i class="fa-solid fa-trophy"></i> Phòng Thi Thử VPhO
          </div>
          <p class="text-xs text-cyan-100 leading-relaxed">
            Đề thi thử chọn HSG Quốc Gia 10 câu tinh hoa chuẩn VPhO, có đồng hồ 60 phút và xếp giải Nhất/Nhì/Ba/Khuyến Khích.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-cyan-950 hover:bg-cyan-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-cyan-600"></i> Bắt đầu thi thử (60:00)
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-12">
      ${articlesHtml}

      <!-- Course Summary Banner -->
      <section class="bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30">
            <i class="fa-solid fa-trophy text-amber-400"></i> Đội Tuyển HSG Quốc Gia VPhO
          </div>
          <h2 class="text-2xl sm:text-3xl font-black">Sẵn Sàng Chinh Phục Kỳ Thi Chọn HSG Quốc Gia?</h2>
          <p class="text-sm text-cyan-100 leading-relaxed">
            Hệ thống 10 chuyên đề cốt lõi đã trang bị cho bạn đầy đủ nền tảng toán - lý cao cấp: từ tích phân giải tích, phương trình vi phân dao động, trường điện từ Maxwell đến cơ học tương đối tính. Hãy tham gia ngay phòng thi thử trực tuyến để kiểm tra phản xạ và bản lĩnh thi đấu.
          </p>
          <div class="pt-2">
            <button onclick="openCourseQuizModal()" class="py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl transition flex items-center gap-2">
              <i class="fa-solid fa-stopwatch text-slate-950"></i> Bắt Đầu Làm Đề Thi Thử Quốc Gia (60 Phút)
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
        Khóa Học Ôn Luyện Thi Học Sinh Giỏi Vật Lý Cấp 3 (THPT &amp; Chuyên) • CodeHub Learning Platform
      </p>
      <p>
        Biên soạn theo chương trình Đội tuyển Học sinh giỏi Quốc gia (VPhO), Vòng tuyển chọn APhO/IPhO &amp; Chuẩn kiến thức chuyên Lý toàn quốc.
      </p>
    </div>
  </footer>

  <!-- Modal Thi Thử VPhO Trực Tuyến -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <div class="bg-white dark:bg-dark-surface w-full max-w-4xl rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white flex items-center justify-between border-b border-cyan-800/50 shrink-0">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-cyan-500/20 rounded-xl border border-cyan-400/30 text-cyan-300">
            <i class="fa-solid fa-atom text-xl"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Phòng Thi Thử Trực Tuyến • HSG Vật Lý Quốc Gia</h3>
            <p class="text-xs text-cyan-200">10 Câu Hỏi Chọn Lọc Tinh Hoa • Chuẩn Đề VPhO</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <!-- Countdown Timer Display -->
          <div class="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-cyan-400/30">
            <i class="fa-solid fa-stopwatch text-cyan-400 animate-pulse"></i>
            <span id="examTimer" class="font-mono font-black text-sm sm:text-base text-cyan-300 tracking-wider">60:00</span>
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
              <button type="submit" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs font-black shadow-lg transition flex items-center justify-center gap-2">
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
            <button type="button" onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải Chi Tiết Từng Câu
            </button>
            <button type="button" onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Thi lại
            </button>
          </div>
        </div>

        <!-- Solutions Review Container -->
        <div id="examSolutionsReview" class="hidden pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="font-black text-sm text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Phân Tích &amp; Lời Giải Chi Tiết Bộ Đề VPhO:
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
    const STORAGE_KEY = 'hsg_vatly_thpt_solved_quizzes';
    const TOTAL_QUIZZES = 40;

    function renderAllMath(target) {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(target || document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
          throwOnError: false
        });
      }
    }

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
        btn.classList.remove('bg-cyan-100', 'border-cyan-500', 'bg-rose-100', 'border-rose-500');
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
        renderAllMath(feedbackEl);
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
          alert('Hết giờ làm bài thi thử! Hệ thống sẽ tự động chấm điểm bài nộp của bạn.');
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
        renderAllMath(modal);
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
      if (confirm('Bạn có chắc muốn làm lại toàn bộ đề thi thử Vật Lý từ đầu?')) {
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
        if (!reviewBox.classList.contains('hidden')) renderAllMath(reviewBox);
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
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! ĐẠT GIẢI NHẤT HỌC SINH GIỎI QUỐC GIA (VPhO FIRST PRIZE)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trí tuệ vật lý xuất chúng! Bạn đã giải chính xác trọn vẹn cả 10 câu hỏi hóc búa từ Cơ học vật rắn lăn dốc, Con lắc vật lý, Áp suất Bernoulli khí nén, Công quá trình đa biến, Cực trị điện trường Gauss, Suất điện động đĩa Faraday, Dao động RLC ngắt tụ, Cáp quang NA đến Hệ thức tương đối tính Einstein!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500/50 text-cyan-950 dark:text-cyan-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-cyan-600 text-2xl"></i> Chúc Mừng! ĐẠT GIẢI NHÌ HỌC SINH GIỎI QUỐC GIA (VPhO SECOND PRIZE)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-cyan-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Năng lực tư duy vật lý và kỹ năng giải tích toán lý rất vững vàng! Đạt Giải Nhì VPhO là kết quả rất đáng khen ngợi. Hãy xem lại lời giải chi tiết bên dưới để đạt điểm 10 tuyệt đối!';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-blue-50 dark:bg-blue-950/40 border-blue-500/50 text-blue-950 dark:text-blue-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-blue-600 text-2xl"></i> ĐẠT GIẢI BA HỌC SINH GIỎI QUỐC GIA (VPhO THIRD PRIZE)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-blue-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kết quả rất tích cực trước đề thi HSG Quốc Gia có độ khó cao. Hãy bấm nút "Xem Lời Giải Chi Tiết Từng Câu" để hoàn thiện các bổ đề điện từ và nhiệt động học.';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-amber-500 text-2xl"></i> GIẢI KHUYẾN KHÍCH / Cần Rèn Luyện Thêm Kỹ Năng Giải Tích!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Đề thi HSG Quốc gia yêu cầu sự kết hợp sâu giữa định luật vật lý và công cụ giải tích vi tích phân. Hãy xem kỹ từng bước phân tích trong phần Lời Giải Chi Tiết!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      renderAllMath(resultBox);
    }

    document.addEventListener('DOMContentLoaded', () => {
      renderAllMath();
      setTimeout(renderAllMath, 200);
      setTimeout(renderAllMath, 800);
      updateProgressDisplay();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath, fullHtml, 'utf8');
console.log('Successfully created courses/hsg_vatly_thpt.html!');
