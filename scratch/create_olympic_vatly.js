const fs = require('fs');

const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\olympic_vatly_thpt.html';

function createQuiz(id, question, options, correctIdx, explanation) {
  const letters = ['A', 'B', 'C', 'D'];
  const buttons = options.map((opt, idx) => {
    const isCorrect = idx === correctIdx;
    const cleanExp = explanation.replace(/'/g, "\\'");
    return `<button onclick="checkQuiz('${id}', ${idx}, ${isCorrect}, '${cleanExp}')" class="quiz-btn-${id} text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-sky-950/30 transition">${letters[idx]}. ${opt}</button>`;
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

// 10 Elite Olympic Physics Topics
const topics = [
  {
    id: 'bai1',
    num: '01',
    sub: 'Cơ Học Giải Tích • Lagrange, Hamilton & Định Lý Noether',
    title: 'Cơ Học Lagrange, Hamilton, Nguyên Lý Tác Dụng Tối Thiểu & Định Lý Noether',
    intro: 'Trong các kỳ thi Olympic Vật Lý Quốc Tế (IPhO / APhO / WoPhO), việc giải quyết bài toán cơ học phức tạp đòi hỏi các công cụ giải tích mạnh mẽ thay thế định luật Newton: nguyên lý tác dụng tối thiểu Hamilton $\\delta S = 0$, tọa độ suy rộng Lagrange và định lý Noether về mối liên hệ giữa tính đối xứng và các định luật bảo toàn.',
    b1Title: 'Hàm Lagrange & Phương Trình Euler-Lagrange',
    b1Content: `• Tác dụng Hamilton: $S = \\int_{t_1}^{t_2} L(q_i, \\dot{q}_i, t) dt$. Nguyên lý biến phân $\\delta S = 0$ dẫn đến hệ phương trình Euler-Lagrange:<br>$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right) - \\frac{\\partial L}{\\partial q_i} = 0\\quad (i = 1, ..., n)$$<br>• Với $L = T - V$. Tọa độ suy rộng $q_i$ loại bỏ hoàn toàn các phản lực liên kết lý tưởng, giúp giải quyết nhanh chóng các cơ cấu liên kết phức tạp.`,
    b2Title: 'Hàm Hamilton & Định Lý Đối Xứng Noether',
    b2Content: `• Xung lượng suy rộng: $p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$. Hàm Hamilton: $H(q_i, p_i, t) = \\sum p_i \\dot{q}_i - L$.<br>• Phương trình chính tắc Hamilton: $\\dot{q}_i = \\frac{\\partial H}{\\partial p_i},\\quad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$.<br>• <strong>Định lý Noether:</strong> Mỗi đối xứng liên tục của tác dụng tương ứng với một định luật bảo toàn:<br>1. Tính đồng nhất thời gian $\\to$ Bảo toàn năng lượng.<br>2. Tính đồng nhất không gian $\\to$ Bảo toàn động lượng.<br>3. Tính đẳng hướng không gian $\\to$ Bảo toàn mômen động lượng.`,
    quizzes: [
      {
        q: '1. Một chất điểm khối lượng $m$ chuyển động trong mặt phẳng dưới tác dụng của thế năng xuyên tâm $V(r)$. Tọa độ cực $(r, \\theta)$ có tọa độ nào là biến số xiclic (Cyclic coordinate)?',
        opts: ['$\\theta$ là biến số xiclic và mômen động lượng $p_\\theta = m r^2 \\dot{\\theta}$ bảo toàn', '$r$ là biến số xiclic và động lượng xuyên tâm $p_r$ bảo toàn', 'Cả $r$ và $\\theta$ đều là biến số xiclic', 'Không có biến số xiclic nào'],
        ans: 0,
        exp: 'Chính xác! L = (1/2)m (\\dot{r}^2 + r^2 \\dot{\\theta}^2) - V(r). Ta thấy hàm L không phụ thuộc tường minh vào theta (dL/d\\theta = 0) => theta là tọa độ xiclic => xung lượng liên hợp p_\\theta = dL/d\\dot{\\theta} = m r^2 \\dot{\\theta} bảo toàn.'
      },
      {
        q: '2. Theo định lý Noether, định luật bảo toàn mômen động lượng của một hệ kín là hệ quả trực tiếp từ tính chất đối xứng nào của không-thời gian?',
        opts: ['Tính đẳng hướng của không gian', 'Tính đồng nhất của thời gian', 'Tính đồng nhất của không gian', 'Tính bất biến Lorentz'],
        ans: 0,
        exp: 'Chính xác! Định lý Emmy Noether: Tính đẳng hướng không gian (bất biến qua phép quay hệ quy chiếu) tương ứng với định luật bảo toàn mômen động lượng.'
      },
      {
        q: '3. Cho hàm Lagrange của dao động điều hòa $L = \\frac{1}{2} m \\dot{x}^2 - \\frac{1}{2} k x^2$. Hàm Hamilton $H(x, p)$ tương ứng của hệ là:',
        opts: ['$H = \\frac{p^2}{2m} + \\frac{1}{2} k x^2$', '$H = \\frac{p^2}{2m} - \\frac{1}{2} k x^2$', '$H = \\frac{p^2}{m} + k x^2$', '$H = \\frac{p^2}{4m} + \\frac{1}{2} k x^2$'],
        ans: 0,
        exp: 'Chính xác! p = dL/d\\dot{x} = m\\dot{x} => \\dot{x} = p/m. H = p \\dot{x} - L = p^2/m - (p^2/(2m) - 1/2 k x^2) = p^2/(2m) + 1/2 k x^2.'
      },
      {
        q: '4. Dấu ngoặc Poisson $[F, H]$ giữa một đại lượng vật lý $F(q, p, t)$ và hàm Hamilton $H$ quyết định tốc độ biến thiên theo thời gian của $F$ theo hệ thức:',
        opts: ['$\\frac{dF}{dt} = [F, H] + \\frac{\\partial F}{\\partial t}$', '$\\frac{dF}{dt} = [H, F]$', '$\\frac{dF}{dt} = [F, H] - \\frac{\\partial F}{\\partial t}$', '$\\frac{dF}{dt} = \\frac{\\partial F}{\\partial t}$'],
        ans: 0,
        exp: 'Chính xác! Trong cơ học Hamilton: dF/dt = [F, H] + dF/dt (với [F, H] là Poisson bracket).'
      }
    ]
  },
  {
    id: 'bai2',
    num: '02',
    sub: 'Cơ Học Vật Rắn Nâng Cao • Ten-xơ Quán Tính & Dzhanibekov',
    title: 'Ten-xơ Quán Tính, Phương Trình Euler & Hiện Tượng Đảo Trục Dzhanibekov',
    intro: 'Vật rắn trong không gian 3 chiều có phân bố khối lượng mô tả bởi ten-xơ quán tính bậc hai đối xứng. Khảo sát phương trình động lực học Euler giải thích chuyển động đảo trục Poinsot, tính bền vững của các trục quay và hiệu ứng bất đối xứng Dzhanibekov (Định lý vợt tennis).',
    b1Title: 'Ten-xơ Quán Tính & Các Trục Quán Tính Chính',
    b1Content: `• Ten-xơ quán tính là ma trận đối xứng $3 \\times 3$:<br>$$\\mathbf{I} = \\begin{pmatrix} I_{xx} & -I_{xy} & -I_{xz} \\\\ -I_{yx} & I_{yy} & -I_{yz} \\\\ -I_{zx} & -I_{zy} & I_{zz} \\end{pmatrix}$$<br>• Trong đó $I_{xx} = \\int (y^2 + z^2) dm$ và mômen ly tâm $I_{xy} = \\int xy dm$. Luôn tồn tại một hệ trục tọa độ chính quán tính mà tại đó ten-xơ quán tính có dạng chéo: $\\mathbf{I} = \\text{diag}(I_1, I_2, I_3)$.`,
    b2Title: 'Phương Trình Euler & Định Lý Vợt Tennis (Hiệu Ứng Dzhanibekov)',
    b2Content: `• Trong hệ quy chiếu gắn chặt với vật rắn dọc theo các trục quán tính chính:<br>$$I_1 \\dot{\\omega}_1 + (I_3 - I_2) \\omega_2 \\omega_3 = M_1$$<br>$$I_2 \\dot{\\omega}_2 + (I_1 - I_3) \\omega_3 \\omega_1 = M_2$$<br>$$I_3 \\dot{\\omega}_3 + (I_2 - I_1) \\omega_1 \\omega_2 = M_3$$<br>• <strong>Tính bền vững trục quay ($I_1 < I_2 < I_3$):</strong> Quay quanh trục quán tính lớn nhất ($I_3$) và nhỏ nhất ($I_1$) là cân bằng bền. Quay quanh trục trung gian ($I_2$) là không bền: bất kỳ nhiễu loạn nhỏ nào cũng dẫn đến sự đảo trục tuần hoàn $180^\\circ$ (Hiệu ứng phi hành gia Dzhanibekov).`,
    quizzes: [
      {
        q: '1. Cho một vật rắn có ba mômen quán tính chính $I_1 < I_2 < I_3$. Theo định lý trục trung gian (Định lý vợt tennis), chuyển động quay tự do của vật quanh trục nào là không bền?',
        opts: ['Trục quán tính trung gian $I_2$', 'Trục quán tính lớn nhất $I_3$', 'Trục quán tính nhỏ nhất $I_1$', 'Cả ba trục đều bền'],
        ans: 0,
        exp: 'Chính xác! Khảo sát phương trình Euler quanh trục 2 với nhiễu loạn omega_1, omega_3: đạo hàm bậc hai cho d^2(omega_1)/dt^2 = +C * omega_1 (với C > 0 do (I_3 - I_2)(I_2 - I_1) > 0), dẫn đến nghiệm tăng theo hàm mũ (mất ổn định).'
      },
      {
        q: '2. Mômen động lượng $\\vec{L}$ và vận tốc góc $\\vec{\\omega}$ của vật rắn tự do liên hệ với nhau qua ten-xơ quán tính $\\mathbf{I}$ bởi biểu thức:',
        opts: ['$\\vec{L} = \\mathbf{I} \\cdot \\vec{\\omega}$ (nhìn chung $\\vec{L}$ không cùng phương với $\\vec{\\omega}$)', '$\\vec{L} = I \\vec{\\omega}$ luôn cùng phương', '$\\vec{L} = \\mathbf{I} \\times \\vec{\\omega}$', '$\\vec{L} = \\frac{1}{2} \\mathbf{I} \\vec{\\omega}^2$'],
        ans: 0,
        exp: 'Chính xác! L_i = sum_j I_ij omega_j. Vì I là ma trận ten-xơ nên véctơ L nói chung không cùng phương với véctơ omega trừ khi omega hướng dọc theo một trong các trục quán tính chính.'
      },
      {
        q: '3. Đối với vật rắn quay tự do không chịu mômen ngoại lực ($\\vec{M} = 0$), hai đại lượng nào sau đây luôn được bảo toàn tuyệt đối:',
        opts: ['Mômen động lượng $\\vec{L}$ và Động năng quay $T_{rot}$', 'Vận tốc góc $\\vec{\\omega}$ và Động năng quay', 'Gia tốc góc $\\vec{\\beta}$ và Mômen động lượng', 'Chỉ có động lượng bảo toàn'],
        ans: 0,
        exp: 'Chính xác! Khi M = 0: dL/dt = 0 => L bảo toàn; d(T_rot)/dt = M . omega = 0 => T_rot = 1/2 (omega . L) bảo toàn.'
      },
      {
        q: '4. Mômen ly tâm $I_{xy} = \\int xy dm$ của một bản phẳng đồng chất hình chữ nhật kích thước $a \\times b$ đối với hệ trục tọa độ dọc theo hai cạnh xuất phát từ một đỉnh là:',
        opts: ['$I_{xy} = \\frac{1}{4} m a b$', '$I_{xy} = 0$', '$I_{xy} = \\frac{1}{12} m a b$', '$I_{xy} = \\frac{1}{3} m a b$'],
        ans: 0,
        exp: 'Chính xác! I_xy = sigma int_0^a x dx int_0^b y dy = (m / ab) * (a^2/2) * (b^2/2) = (1/4) m a b.'
      }
    ]
  },
  {
    id: 'bai3',
    num: '03',
    sub: 'Thủy Khí Động Lực Học Phi Tuyến • Helmholtz & Navier-Stokes',
    title: 'Định Lý Bảo Toàn Xoáy Helmholtz, Phương Trình Navier-Stokes & Sóng Soliton',
    intro: 'Vượt qua gần đúng chất lưu lý tưởng, lý thuyết Olympic Quốc tế khảo sát chất lưu nhớt thực qua phương trình Navier-Stokes, sự bảo toàn hoàn lưu xoáy Kelvin-Helmholtz, số vô đinh Reynolds $Re$ dự báo dòng chảy rối và sóng đơn độc phi tuyến KdV Soliton.',
    b1Title: 'Phương Trình Navier-Stokes & Số Reynolds',
    b1Content: `• Phương trình Navier-Stokes cho chất lưu không chịu nén có độ nhớt động lực $\\eta$:<br>$$\\rho \\left(\\frac{\\partial \\vec{v}}{\\partial t} + (\\vec{v} \\cdot \\nabla)\\vec{v}\\right) = -\\nabla p + \\eta \\nabla^2 \\vec{v} + \\rho \\vec{g}$$<br>• <strong>Số Reynolds ($Re$):</strong> $Re = \\frac{\\rho v L}{\\eta}$.<br>- Khi $Re \\ll 1$: Lực nhớt thống trị (Dòng chảy Stokes quanh vi khuẩn, hạt keo).<br>- Khi $Re \\gg 1$: Lực quán tính thống trị; khi vượt ngưỡng $Re_c$ dòng chảy chuyển sang trạng thái cuộn xoáy hỗn loạn (Turbulence).`,
    b2Title: 'Định Lý Hoàn Lưu Kelvin & Sóng Đơn Độc Soliton',
    b2Content: `• <strong>Định lý hoàn lưu Kelvin:</strong> Trong chất lưu lý tưởng đồng chất chịu lực thế, hoàn lưu vận tốc $\\Gamma = \\oint_C \\vec{v} \\cdot d\\vec{r}$ dọc theo một đường cong vật chất kín luôn bảo toàn theo thời gian.<br>• <strong>Sóng Soliton Korteweg-de Vries (KdV):</strong> Nghiệm dạng xung đơn độc $u(x,t) = \\frac{c}{2} \\text{sech}^2\\left(\\frac{\\sqrt{c}}{2}(x - ct)\\right)$ giữ nguyên hình dạng khi truyền đi xa nhờ sự cân bằng chính xác giữa hiệu ứng phi tuyến làm dốc sóng và hiệu ứng tán sắc làm bẹt sóng.`,
    quizzes: [
      {
        q: '1. Lực cản nhớt Stokes tác dụng lên một quả cầu nhỏ bán kính $R$ chuyển động với tốc độ thấp $v$ trong chất lưu có độ nhớt $\\eta$ (khi $Re \\ll 1$) có độ lớn là:',
        opts: ['$F_c = 6\\pi \\eta R v$', '$F_c = 4\\pi \\eta R v$', '$F_c = \\frac{1}{2} \\pi R^2 \\rho v^2$', '$F_c = 6\\pi \\eta R^2 v$'],
        ans: 0,
        exp: 'Chính xác! Công thức Stokes cho dòng chảy nhớt tầng quanh quả cầu: F_c = 6 pi eta R v.'
      },
      {
        q: '2. Ý nghĩa vật lý cốt lõi của số Reynolds $Re$ trong cơ học chất lưu là:',
        opts: ['Tỉ số giữa lực quán tính và lực nhớt trong dòng chảy', 'Tỉ số giữa áp suất tĩnh và áp suất động', 'Tỉ số giữa vận tốc dòng chảy và vận tốc âm thanh', 'Tỉ số giữa lực hấp dẫn và lực ma sát'],
        ans: 0,
        exp: 'Chính xác! Re = (rho v^2 / L) / (eta v / L^2) = (Lực quán tính) / (Lực ma sát nhớt).'
      },
      {
        q: '3. Điều kiện cần để một sóng đơn độc (Soliton) lan truyền trong môi trường phi tuyến mà không bị thay đổi hình dạng là gì?',
        opts: ['Sự triệt tiêu cân bằng giữa hiệu ứng phi tuyến và hiệu ứng tán sắc', 'Môi trường hoàn toàn không có tán sắc', 'Biên độ sóng phải tiến tới vô cùng nhỏ', 'Vận tốc truyền sóng phải bằng 0'],
        ans: 0,
        exp: 'Chính xác! Soliton hình thành do sự cân bằng giữa tính phi tuyến (làm hẹp và tăng độ dốc của xung) và tính tán sắc (làm giãn rộng xung sóng).'
      },
      {
        q: '4. Theo định lý Kelvin về hoàn lưu vận tốc, trong chất lưu lý tưởng không nhớt, đường dòng xoáy (Vortex line) có tính chất:',
        opts: ['Dính chặt và trôi theo các phần tử chất lưu', 'Luôn triệt tiêu tại mọi điểm', 'Biến mất sau thời gian một chu kỳ', 'Luôn vuông góc với mặt đẳng áp'],
        ans: 0,
        exp: 'Chính xác! Định lý Helmholtz/Kelvin: Các đường xoáy được chất lưu "mang theo", không tự sinh ra và không tự mất đi trong lòng chất lưu lý tưởng.'
      }
    ]
  },
  {
    id: 'bai4',
    num: '04',
    sub: 'Nhiệt Thống Kê • Bose-Einstein, Fermi-Dirac & Thăng Trầm',
    title: 'Nhiệt Động Lực Học Thống Kê, Phân Bố Lượng Tử & Lý Thuyết Thăng Trầm',
    intro: 'Chuyên đề Thống kê IPhO/APhO khảo sát không gian pha vi mô, entropy Boltzmann $S = k_B \\ln \\Omega$, phân bố cổ điển Maxwell-Boltzmann so với hai phân bố lượng tử Bose-Einstein (hạt spin nguyên) và Fermi-Dirac (hạt fermion spin bán nguyên), hiện tượng ngưng tụ BEC và dao động nhiệt Johnson-Nyquist.',
    b1Title: 'Entropy Boltzmann & Hàm Phân Bố Chính Tắc Gibbs',
    b1Content: `• Định nghĩa thống kê của Entropy: $S = k_B \\ln \\Omega$ (với $\\Omega$ là số vi trạng thái).<br>• Xác suất tìm thấy hệ ở trạng thái có năng lượng $E_i$ tại nhiệt độ $T$:<br>$$P_i = \\frac{e^{-E_i / k_B T}}{Z},\\quad Z = \\sum_i e^{-E_i / k_B T}\\quad (\\text{Hàm tổng trạng thái})$$<br>• Năng lượng tự do Helmholtz: $F = -k_B T \\ln Z$. Áp suất: $p = -\\left(\\frac{\\partial F}{\\partial V}\\right)_T$.`,
    b2Title: 'Phân Bố Bose-Einstein & Fermi-Dirac',
    b2Content: `• Số hạt trung bình trên một mức năng lượng $\\varepsilon$ có thế hóa học $\\mu$:<br>$$\\bar{n}(\\varepsilon) = \\frac{1}{e^{(\\varepsilon - \\mu)/k_B T} \\pm 1}$$<br>- Dấu trừ ($-1$): <strong>Phân bố Bose-Einstein</strong> (Photon, Phonon, Boson; $\\mu \\le 0$). Tại $T < T_{BEC}$, xảy ra ngưng tụ Bose-Einstein vào trạng thái cơ bản $\\varepsilon = 0$.<br>- Dấu cộng ($+1$): <strong>Phân bố Fermi-Dirac</strong> (Electron, Proton; thỏa nguyên lý Pauli). Khi $T \\to 0$, các mức bị lấp đầy tới năng lượng Fermi $E_F$.`,
    quizzes: [
      {
        q: '1. Ở nhiệt độ không độ tuyệt đối ($T = 0\\text{ K}$), khí electron tự do trong kim loại (hạt Fermion) có năng lượng trung bình của một electron liên hệ với năng lượng Fermi $E_F$ theo hệ thức:',
        opts: ['$\\bar{\\varepsilon} = \\frac{3}{5} E_F$', '$\\bar{\\varepsilon} = \\frac{1}{2} E_F$', '$\\bar{\\varepsilon} = E_F$', '$\\bar{\\varepsilon} = 0$'],
        ans: 0,
        exp: 'Chính xác! Tích phân mật độ trạng thái g(E) ~ sqrt(E): <E> = int_0^EF E * sqrt(E) dE / int_0^EF sqrt(E) dE = (2/5 E_F^(5/2)) / (2/3 E_F^(3/2)) = 3/5 E_F.'
      },
      {
        q: '2. Năng lượng trung bình của một dao động tử điều hòa lượng tử có tần số $\\nu$ ở nhiệt độ $T$ theo công thức Planck là:',
        opts: ['$\\bar{E} = \\frac{h\\nu}{e^{h\\nu / k_B T} - 1} + \\frac{1}{2} h\\nu$', '$\\bar{E} = k_B T$', '$\\bar{E} = \\frac{h\\nu}{e^{h\\nu / k_B T} + 1}$', '$\\bar{E} = h\\nu$'],
        ans: 0,
        exp: 'Chính xác! E_n = (n + 1/2) h nu. Tính theo phân bố thống kê: <E> = h nu / (e^(h nu / k_B T) - 1) + 1/2 h nu (với 1/2 h nu là năng lượng điểm không Zero-point energy).'
      },
      {
        q: '3. Định lý phân bố đều năng lượng theo bậc tự do của cổ điển khẳng định mỗi bậc tự do nhiệt đóng góp vào năng lượng nội năng trung bình một lượng bằng:',
        opts: ['$\\frac{1}{2} k_B T$', '$k_B T$', '$\\frac{3}{2} k_B T$', '$2 k_B T$'],
        ans: 0,
        exp: 'Chính xác! Mỗi số hạng bậc hai trong biểu thức năng lượng đóng góp trung bình 1/2 k_B T vào nội năng.'
      },
      {
        q: '4. Điện áp thăng trầm nhiệt hiệu dụng (Nhiễu nhiệt Johnson-Nyquist) xuất hiện giữa hai đầu một điện trở $R$ ở dải tần $\\Delta f$ tại nhiệt độ $T$ là:',
        opts: ['$V_{rms} = \\sqrt{4 k_B T R \\Delta f}$', '$V_{rms} = \\sqrt{k_B T R \\Delta f}$', '$V_{rms} = 2 k_B T R \\Delta f$', '$V_{rms} = \\sqrt{\\frac{k_B T \\Delta f}{R}}$'],
        ans: 0,
        exp: 'Chính xác! Công thức Nyquist cho điện áp nhiễu nhiệt: V_rms^2 = 4 k_B T R Delta f.'
      }
    ]
  },
  {
    id: 'bai5',
    num: '05',
    sub: 'Điện Động Lực Học • Thế Trễ Liénard-Wiechert & Bức Xạ Hãm',
    title: 'Điện Động Lực Học Cổ Điển, Thế Trễ Liénard-Wiechert & Bức Xạ Larmor',
    intro: 'Chuyên đề IPhO khảo sát bức xạ điện từ sinh ra khi hạt mang điện chuyển động có gia tốc, sử dụng thế điện từ trễ Liénard-Wiechert, công thức công suất phát xạ Larmor cổ điển và tương đối tính, cùng hiệu ứng bức xạ hãm Bremsstrahlung.',
    b1Title: 'Thế Trễ & Bức Xạ Của Điện Tích Có Gia Tốc',
    b1Content: `• Vì thông tin điện từ lan truyền với tốc độ ánh sáng $c$, thế vô hướng và thế véctơ tại thời điểm $t$ phụ thuộc vào vị trí và vận tốc của điện tích tại thời điểm trễ $t_r = t - \\frac{r(t_r)}{c}$.<br>• <strong>Thế Liénard-Wiechert:</strong><br>$$\\Phi(\\vec{r}, t) = \\frac{1}{4\\pi\\varepsilon_0} \\left[ \\frac{q}{r - \\frac{\\vec{r} \\cdot \\vec{v}}{c}} \\right]_{t_r},\\quad \\vec{A}(\\vec{r}, t) = \\frac{\\vec{v}(t_r)}{c^2} \\Phi(\\vec{r}, t)$$`,
    b2Title: 'Công Thức Công Suất Bức Xạ Larmor',
    b2Content: `• Một hạt mang điện tích $q$ chuyển động phi tương đối tính ($v \\ll c$) với gia tốc $\\vec{a}$ sẽ phát xạ sóng điện từ với công suất toàn phần:<br>$$P = \\frac{q^2 a^2}{6\\pi \\varepsilon_0 c^3}$$<br>• <strong>Bức xạ hãm (Bremsstrahlung):</strong> Khi electron bắn vào bia kim loại nặng bị hãm đột ngột bởi điện trường hạt nhân ($a$ rất lớn), nó phát ra bức xạ hãm với phổ liên tục có bước sóng ngắn nhất $\\lambda_{\\min} = \\frac{hc}{e U}$.`,
    quizzes: [
      {
        q: '1. Theo công thức Larmor, công suất bức xạ điện từ $P$ của một hạt mang điện tích $q$ chuyển động với gia tốc $a$ ($v \\ll c$) tỉ lệ thuận với:',
        opts: ['$a^2$', '$a$', '$a^3$', '$a^4$'],
        ans: 0,
        exp: 'Chính xác! Công thức Larmor: P = q^2 a^2 / (6 pi eps_0 c^3) tỉ lệ thuận với bình phương gia tốc a^2.'
      },
      {
        q: '2. Một electron chuyển động tròn đều với tốc độ không đổi $v$ bán kính $R$. Công suất bức xạ điện từ của electron tỉ lệ với tốc độ $v$ theo lũy thừa:',
        opts: ['$v^4$', '$v^2$', '$v^3$', '$v$'],
        ans: 0,
        exp: 'Chính xác! Gia tốc hướng tâm a = v^2 / R => a^2 = v^4 / R^2. Do đó công suất P ~ a^2 ~ v^4.'
      },
      {
        q: '3. Hiệu điện thế gia tốc đặt vào ống tia X là $U = 50\\text{ kV}$. Bước sóng ngắn nhất $\\lambda_{\\min}$ của bức xạ hãm phát ra là:',
        opts: ['$\\lambda_{\\min} \\approx 0{,}0248\\text{ nm}$', '$\\lambda_{\\min} \\approx 0{,}248\\text{ nm}$', '$\\lambda_{\\min} \\approx 0{,}0025\\text{ nm}$', '$\\lambda_{\\min} \\approx 1{,}24\\text{ nm}$'],
        ans: 0,
        exp: 'Chính xác! lambda_min = hc / (e U) = 1.24 * 10^-6 V.m / (50 * 10^3 V) = 0.0248 * 10^-9 m = 0.0248 nm.'
      },
      {
        q: '4. Giản đồ hướng bức xạ điện từ của một lưỡng cực điện dao động điều hòa có cường độ bức xạ cực đại theo phương:',
        opts: ['Vuông góc với trục dao động của lưỡng cực ($\\theta = 90^\\circ$)', 'Dọc theo trục dao động của lưỡng cực ($\\theta = 0^\\circ$)', 'Nghiêng góc $45^\\circ$ so với trục dao động', 'Đẳng hướng về mọi phía như nhau'],
        ans: 0,
        exp: 'Chính xác! Cường độ bức xạ tỉ lệ với sin^2 theta, đạt cực đại tại theta = 90 độ (mặt phẳng xích đạo vuông góc trục lưỡng cực) và triệt tiêu dọc theo trục lưỡng cực.'
      }
    ]
  },
  {
    id: 'bai6',
    num: '06',
    sub: 'Vật Lý Plasma & Từ Thủy Động • Bán Kính Debye & Sóng Alfvén',
    title: 'Vật Lý Plasma, Bán Kính Debye, Sóng Từ Thủy Động Alfvén & Bẫy Gương',
    intro: 'Plasma - trạng thái thứ tư của vật chất bao gồm các hạt ion và electron tự do. Chuyên đề Olympic khảo sát hiện tượng che chắn Debye, dao động plasma tần số Langmuir $\\omega_p$, sóng từ thủy động lực học Alfvén trong từ trường và bẫy từ giam giữ hạt tích điện.',
    b1Title: 'Bán Kính Che Chắn Debye & Tần Số Plasma',
    b1Content: `• <strong>Bán kính Debye (Debye length):</strong> Khoảng cách mà điện trường của một điện tích lạ bị che chắn bởi đám mây plasma xung quanh:<br>$$\\lambda_D = \\sqrt{\\frac{\\varepsilon_0 k_B T_e}{n_e e^2}}$$<br>• <strong>Tần số dao động Plasma (Langmuir frequency):</strong> Tần số dao động tự nhiên của đám mây electron quanh các ion đứng yên:<br>$$\\omega_p = \\sqrt{\\frac{n_e e^2}{\\varepsilon_0 m_e}}$$`,
    b2Title: 'Sóng Từ Thủy Động Alfvén & Bẫy Gương Từ',
    b2Content: `• <strong>Sóng Alfvén:</strong> Sóng truyền trong chất lưu dẫn điện có từ trường $\\vec{B}_0$ với vận tốc:<br>$$v_A = \\frac{B_0}{\\sqrt{\\mu_0 \\rho}}$$<br>• <strong>Bẫy từ gương (Magnetic Mirror):</strong> Do bất biến đoạn nhiệt của mômen từ $\\mu = \\frac{\\frac{1}{2} m v_\\perp^2}{B} = \\text{const}$, khi hạt chuyển động vào vùng từ trường mạnh hơn ($B$ tăng), vận tốc vuông góc $v_\\perp$ tăng lên trong khi động năng bảo toàn, dẫn đến vận tốc dọc $v_\\parallel$ giảm về 0 và bị phản xạ quay lại.`,
    quizzes: [
      {
        q: '1. Sóng điện từ có tần số $\\omega$ chiếu vào một đám mây plasma có tần số plasma $\\omega_p$. Sóng có thể truyền sâu vào bên trong plasma khi và chỉ khi:',
        opts: ['$\\omega > \\omega_p$', '$\\omega < \\omega_p$', '$\\omega = \\omega_p$', 'Sóng luôn bị phản xạ hoàn toàn với mọi tần số'],
        ans: 0,
        exp: 'Chính xác! Hệ số điện môi của plasma eps(omega) = 1 - omega_p^2 / omega^2. Khi omega > omega_p thì eps > 0, sóng truyền được; khi omega < omega_p thì eps < 0, sóng bị suy giảm hàm mũ (phản xạ toàn phần, giải thích sự phản xạ sóng vô tuyến ngắn trên tầng điện khí quyển).'
      },
      {
        q: '2. Vận tốc truyền sóng từ thủy động lực học Alfvén $v_A$ trong plasma có mật độ khối $\\rho$ đặt trong từ trường đều $B_0$ là:',
        opts: ['$v_A = \\frac{B_0}{\\sqrt{\\mu_0 \\rho}}$', '$v_A = \\frac{B_0}{\\mu_0 \\rho}$', '$v_A = \\sqrt{\\frac{\\mu_0 B_0^2}{\\rho}}$', '$v_A = \\frac{B_0^2}{2\\mu_0 \\rho}$'],
        ans: 0,
        exp: 'Chính xác! Vận tốc sóng Alfvén được xác định bởi v_A = B_0 / sqrt(mu_0 rho).'
      },
      {
        q: '3. Đại lượng nào sau đây là bất biến đoạn nhiệt (Adiabatic invariant) của một hạt mang điện chuyển động trong từ trường biến đổi chậm theo không gian:',
        opts: ['Mômen từ $\\mu = \\frac{m v_\\perp^2}{2B}$', 'Động lượng dọc $p_\\parallel$', 'Vận tốc tiếp tuyến $v_\\perp$', 'Bán kính Larmor $r_L$'],
        ans: 0,
        exp: 'Chính xác! Trong từ trường biến thiên chậm, mômen từ quỹ đạo mu = (1/2 m v_perp^2) / B là đại lượng bất biến đoạn nhiệt thứ nhất.'
      },
      {
        q: '4. Bán kính che chắn Debye $\\lambda_D$ của plasma tăng lên khi:',
        opts: ['Nhiệt độ electron $T_e$ tăng và mật độ hạt $n_e$ giảm', 'Nhiệt độ $T_e$ giảm và mật độ $n_e$ tăng', 'Cả $T_e$ và $n_e$ cùng tăng', 'Không phụ thuộc vào nhiệt độ'],
        ans: 0,
        exp: 'Chính xác! lambda_D = sqrt(eps_0 k_B T_e / (n_e e^2)). lambda_D tỉ lệ thuận với sqrt(T_e) và tỉ lệ nghịch với sqrt(n_e).'
      }
    ]
  },
  {
    id: 'bai7',
    num: '07',
    sub: 'Quang Học Phi Tuyến • Hiệu Ứng Kerr & Phát Sóng Hài',
    title: 'Quang Học Phi Tuyến, Phát Sóng Hài Bậc Hai (SHG) & Hiệu Ứng Kerr',
    intro: 'Dưới cường độ laser cực mạnh, độ phân cực của môi trường không còn tuyến tính với điện trường: $\\vec{P} = \\varepsilon_0 (\\chi^{(1)} \\vec{E} + \\chi^{(2)} \\vec{E}^2 + \\chi^{(3)} \\vec{E}^3)$. Chuyên đề khảo sát sự phát sóng hài bậc hai (SHG) nhân đôi tần số, hiệu ứng tự hội tụ Kerr và tán xạ Raman.',
    b1Title: 'Phát Sóng Hài Bậc Hai (Second Harmonic Generation - SHG)',
    b1Content: `• Phân cực phi tuyến bậc hai: $P^{(2)} = \\varepsilon_0 \\chi^{(2)} E_0^2 \\cos^2(\\omega t) = \\frac{1}{2} \\varepsilon_0 \\chi^{(2)} E_0^2 (1 + \\cos 2\\omega t)$.<br>• Xuất hiện thành phần dao động với tần số gấp đôi $2\\omega$ (bước sóng giảm một nửa $\\lambda/2$), biến đổi ánh sáng laser hồng ngoại ($1064\\text{ nm}$) thành ánh sáng xanh lục ($532\\text{ nm}$).<br>• Điều kiện đồng bộ pha (Phase matching): $\\Delta k = k_{2\\omega} - 2k_\\omega = 0 \\iff n(2\\omega) = n(\\omega)$, đạt được nhờ kỹ thuật lưỡng chiết trong tinh thể KDP hoặc BBO.`,
    b2Title: 'Hiệu Ứng Quang Học Kerr & Tự Hội Tụ Chùm Laser',
    b2Content: `• Trong môi trường có tính đối xứng tâm (chất lỏng, thủy tinh), $\\chi^{(2)} = 0$, hiệu ứng phi tuyến bậc ba $\\chi^{(3)}$ thống trị.<br>• Chiết suất phụ thuộc cường độ ánh sáng $I$: $n(I) = n_0 + n_2 I$ (Hiệu ứng quang Kerr).<br>• <strong>Hiện tượng tự hội tụ (Self-focusing):</strong> Chùm laser Gaussian có cường độ ở tâm lớn hơn ở mép, tạo ra một "thấu kính hội tụ" bằng chính môi trường, làm chùm tia tự thu hẹp lại khi công suất laser vượt quá công suất tới hạn $P_{cr} = \\frac{\\alpha \\lambda^2}{n_0 n_2}$.`,
    quizzes: [
      {
        q: '1. Để một tinh thể có thể xảy ra hiệu ứng phát sóng hài bậc hai (SHG, $\\chi^{(2)} \\ne 0$), cấu trúc mạng tinh thể của vật liệu bắt buộc phải thỏa mãn điều kiện đối xứng nào?',
        opts: ['Không có tâm đối xứng đảo (Non-centrosymmetric)', 'Có tâm đối xứng hoàn hảo', 'Phải là chất vô định hình', 'Phải có tính dẫn điện kim loại'],
        ans: 0,
        exp: 'Chính xác! Trong môi trường có tâm đối xứng đảo, khi đổi E thành -E thì P phải đổi thành -P, dẫn đến chi^(2) = 0. Do đó chỉ những tinh thể bất đối xứng tâm mới có chi^(2) khác 0.'
      },
      {
        q: '2. Chiếu chùm laser Nd:YAG bước sóng $\\lambda = 1064\\text{ nm}$ qua một tinh thể phi tuyến KDP thỏa mãn điều kiện phối hợp pha. Bước sóng của chùm ánh sáng phát ra là:',
        opts: ['$532\\text{ nm}$ (Ánh sáng xanh lục)', '$2128\\text{ nm}$ (Hồng ngoại xa)', '$355\\text{ nm}$ (Tử ngoại)', '$632{,}8\\text{ nm}$ (Đỏ)'],
        ans: 0,
        exp: 'Chính xác! Hiệu ứng SHG nhân đôi tần số f\' = 2f => lambda\' = lambda / 2 = 1064 / 2 = 532 nm.'
      },
      {
        q: '3. Khi một chùm laser cường độ rất mạnh truyền qua môi trường có hệ số phi tuyến Kerr $n_2 > 0$, hiện tượng gì sẽ xảy ra nếu công suất laser vượt công suất tới hạn $P_{cr}$?',
        opts: ['Hiện tượng tự hội tụ (Self-focusing)', 'Hiện tượng phân kỳ mạnh chùm tia', 'Chùm tia bị dập tắt hoàn toàn', 'Tần số chùm tia giảm về 0'],
        ans: 0,
        exp: 'Chính xác! Với n_2 > 0, tâm chùm sáng có chiết suất cao hơn mép, đóng vai trò như một thấu kính hội tụ lồi, dẫn đến hiện tượng tự hội tụ chùm tia.'
      },
      {
        q: '4. Tán xạ Raman khác tán xạ Rayleigh ở đặc điểm cốt lõi nào?',
        opts: ['Tán xạ Raman là tán xạ không đàn hồi, có sự thay đổi tần số photon (vạch Stokes và Anti-Stokes)', 'Tán xạ Raman luôn có bước sóng không đổi', 'Tán xạ Raman chỉ xảy ra với electron tự do', 'Tán xạ Raman có cường độ mạnh hơn tán xạ Rayleigh 1 triệu lần'],
        ans: 0,
        exp: 'Chính xác! Tán xạ Rayleigh là tán xạ đàn hồi (tần số không đổi), trong khi tán xạ Raman là tán xạ không đàn hồi do photon trao đổi năng lượng với dao động phân tử.'
      }
    ]
  },
  {
    id: 'bai8',
    num: '08',
    sub: 'Quang Sóng Nâng Cao • Fabry-Pérot & Tinh Thể Lưỡng Chiết',
    title: 'Giao Thoa Kế Fabry-Pérot, Tinh Thể Quang Học & Hiệu Ứng Điện-Quang',
    intro: 'Chuyên đề quang học tinh thể IPhO bao gồm lý thuyết giao thoa nhiều sóng trong hốc cộng hưởng Fabry-Pérot, mặt sóng quang học trong môi trường dị hướng một trục và hai trục, hiện tượng lưỡng chiết tia thường ($o$) và tia dị thường ($e$), và điều chế pha Pockels.',
    b1Title: 'Hốc Cộng Hưởng Fabry-Pérot & Độ Sắc Nét Finesse',
    b1Content: `• Gồm hai gương phẳng phản xạ cao đặt song song cách nhau khoảng $d$. Hệ số truyền qua theo công thức Airy:<br>$$T(\\delta) = \\frac{1}{1 + F \\sin^2(\\delta / 2)},\\quad F = \\frac{4R}{(1 - R)^2}$$<br>• <strong>Độ sắc nét (Finesse $\\mathcal{F}$):</strong> $\\mathcal{F} = \\frac{\\pi \\sqrt{R}}{1 - R}$. Khi độ phản xạ $R \\to 1$, các đỉnh truyền qua trở nên vô cùng nhọn, tạo ra bộ lọc quang phổ có độ phân giải siêu cao.`,
    b2Title: 'Lưỡng Chiết Trong Tinh Thể Dị Hướng & Hiệu Ứng Pockels',
    b2Content: `• Trong tinh thể đơn trục (như thạch anh, canxit), tia sáng tới bị tách thành hai tia phân cực vuông góc nhau:<br>1. <strong>Tia thường (o - Ordinary):</strong> Tuân theo định luật khúc xạ Snell với chiết suất không đổi $n_o$.<br>2. <strong>Tia dị thường (e - Extraordinary):</strong> Chiết suất $n_e(\\theta)$ phụ thuộc vào góc nghiêng đối với quang trục.<br>• <strong>Hiệu ứng điện-quang Pockels:</strong> Đặt điện trường ngoài $E$ làm thay đổi chiết suất tỉ lệ bậc nhất với điện trường $\\Delta n \\sim r E$, dùng để chế tạo cổng đóng mở quang học tốc độ nano giây.`,
    quizzes: [
      {
        q: '1. Một hốc cộng hưởng Fabry-Pérot có hệ số phản xạ của mỗi gương là $R = 0{,}95$. Độ sắc nét Finesse $\\mathcal{F}$ của giao thoa kế là:',
        opts: ['$\\mathcal{F} \\approx 61{,}2$', '$\\mathcal{F} \\approx 10{,}5$', '$\\mathcal{F} \\approx 19{,}0$', '$\\mathcal{F} \\approx 100$'],
        ans: 0,
        exp: 'Chính xác! Finesse = pi * sqrt(R) / (1 - R) = pi * sqrt(0.95) / (1 - 0.95) = 3.1416 * 0.9747 / 0.05 approx 61.24.'
      },
      {
        q: '2. Tinh thể canxit ($CaCO_3$) là tinh thể quang học đơn trục âm ($n_e < n_o$). Khi tia sáng truyền vuông góc với quang trục, tia nào truyền đi nhanh hơn?',
        opts: ['Tia dị thường ($e$) truyền nhanh hơn vì $v_e = c/n_e > v_o = c/n_o$', 'Tia thường ($o$) truyền nhanh hơn', 'Hai tia truyền cùng vận tốc', 'Cả hai tia đều bị dừng lại'],
        ans: 0,
        exp: 'Chính xác! Vì n_e < n_o, vận tốc pha của tia e là v_e = c/n_e lớn hơn vận tốc của tia o là v_o = c/n_o.'
      },
      {
        q: '3. Bản một phần tư bước sóng (Quarter-wave plate) làm từ vật liệu lưỡng chiết có bề dày $d$ thỏa mãn hiệu quang trình giữa tia $e$ và tia $o$ bằng:',
        opts: ['$(n_e - n_o) d = (k + 1/4) \\lambda$', '$(n_e - n_o) d = (k + 1/2) \\lambda$', '$(n_e - n_o) d = k \\lambda$', '$(n_e - n_o) d = 2k \\lambda$'],
        ans: 0,
        exp: 'Chính xác! Bản 1/4 bước sóng tạo độ lệch pha pi/2, tương ứng hiệu quang trình bằng (k + 1/4) lambda, dùng để biến đổi ánh sáng phân cực thẳng thành phân cực tròn.'
      },
      {
        q: '4. Hiệu ứng điện-quang Pockels khác hiệu ứng Kerr ở điểm nào?',
        opts: ['Độ biến thiên chiết suất tỉ lệ bậc nhất với điện trường ($\\Delta n \\sim E$), chỉ xảy ra trong môi trường không có tâm đối xứng', 'Hiệu ứng Pockels tỉ lệ với $E^2$', 'Hiệu ứng Pockels chỉ xảy ra trong chất lỏng', 'Hiệu ứng Pockels không làm thay đổi phân cực'],
        ans: 0,
        exp: 'Chính xác! Hiệu ứng Pockels là hiệu ứng tuyến tính Delta n ~ E (chỉ có trong tinh thể phi đối xứng tâm), trong khi hiệu ứng Kerr là bậc hai Delta n ~ E^2 (xảy ra trong mọi môi trường).'
      }
    ]
  },
  {
    id: 'bai9',
    num: '09',
    sub: 'Thuyết Tương Đối Minkowski • Ten-xơ Faraday & Tứ Véctơ',
    title: 'Hình Học Thời Không Minkowski, Tứ Véctơ & Dạng Hiệp Biến Của Điện Từ',
    intro: 'Olympic Vật Lý Quốc tế khai thác không-thời gian 4 chiều phẳng Minkowski với mêtric $\\eta_{\\mu\\nu} = \\text{diag}(1, -1, -1, -1)$, tứ véctơ tọa độ, tứ véctơ xung lượng, và biểu diễn hiệp biến của điện từ trường thông qua Ten-xơ Faraday $F^{\\mu\\nu}$.',
    b1Title: 'Hình Học Minkowski & Tứ Véctơ Động Lực',
    b1Content: `• Khoảng thời không bất biến: $ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2 = \\eta_{\\mu\\nu} dx^\\mu dx^\\nu$.<br>• Tứ vận tốc: $U^\\mu = \\frac{dx^\\mu}{d\\tau} = \\gamma (c, \\vec{v})$. Tứ vận tốc luôn có độ dài chuẩn hóa: $U_\\mu U^\\mu = c^2$.<br>• <strong>Tứ xung lượng:</strong> $P^\\mu = m_0 U^\\mu = (E/c, \\vec{p})$. Tích vô hướng bảo toàn: $P_\\mu P^\\mu = \\frac{E^2}{c^2} - p^2 = m_0^2 c^2$, dẫn trực tiếp đến hệ thức $E^2 = p^2 c^2 + m_0^2 c^4$.`,
    b2Title: 'Ten-xơ Điện Từ Trường Faraday & Biến Đổi Điện Từ',
    b2Content: `• Điện trường và từ trường hợp nhất thành ten-xơ phản đối xứng cấp hai $F^{\\mu\\nu}$:<br>$$F^{\\mu\\nu} = \\begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\\\ E_x/c & 0 & -B_z & B_y \\\\ E_y/c & B_z & 0 & -B_x \\\\ E_z/c & -B_y & B_x & 0 \\end{pmatrix}$$<br>• <strong>Bất biến tương đối tính của trường điện từ:</strong> Hai đại lượng vô hướng bất biến qua mọi phép biến đổi Lorentz:<br>$$I_1 = \\vec{E}^2 - c^2 \\vec{B}^2 = \\text{const},\\quad I_2 = \\vec{E} \\cdot \\vec{B} = \\text{const}$$`,
    quizzes: [
      {
        q: '1. Trong một hệ quy chiếu quán tính $K$, điện trường và từ trường vuông góc với nhau ($\\vec{E} \\cdot \\vec{B} = 0$) và $E > c B$. Khẳng định nào sau đây là đúng?',
        opts: ['Tồn tại một hệ quy chiếu quán tính $K\'$ mà tại đó chỉ có điện trường ($\\vec{B}\' = 0$)', 'Tồn tại hệ quy chiếu mà tại đó chỉ có từ trường ($\\vec{E}\' = 0$)', 'Không thể triệt tiêu được điện trường hay từ trường trong bất kỳ hệ nào', 'Cả điện trường và từ trường cùng triệt tiêu'],
        ans: 0,
        exp: 'Chính xác! Do I_1 = E^2 - c^2 B^2 > 0 và I_2 = E . B = 0, luôn tìm được một hệ quy chiếu K\' chuyển động với vận tốc v = c^2 (B/E) dọc theo E x B sao cho B\' = 0 (trường thuần điện).'
      },
      {
        q: '2. Tứ xung lượng của một photon có tần số $\\nu$ truyền theo phương trục $x$ trong chân không là:',
        opts: ['$P^\\mu = \\left(\\frac{h\\nu}{c}, \\frac{h\\nu}{c}, 0, 0\\right)$', '$P^\\mu = (h\\nu, h\\nu, 0, 0)$', '$P^\\mu = (h\\nu, 0, 0, 0)$', '$P^\\mu = (m_0 c, 0, 0, 0)$'],
        ans: 0,
        exp: 'Chính xác! Photon có E = h nu, p_x = h nu / c, m_0 = 0 => P^mu = (E/c, p_x, p_y, p_z) = (h nu / c, h nu / c, 0, 0).'
      },
      {
        q: '3. Độ dài chuẩn hóa của tứ vận tốc $U^\\mu U_\\mu$ đối với mọi hạt có khối lượng nghỉ $m_0 > 0$ trong không gian Minkowski luôn bằng:',
        opts: ['$c^2$', '$0$', '$-c^2$', '$1$'],
        ans: 0,
        exp: 'Chính xác! U^mu = gamma (c, v) => U^mu U_mu = gamma^2 (c^2 - v^2) = [1 / (1 - v^2/c^2)] * c^2 (1 - v^2/c^2) = c^2.'
      },
      {
        q: '4. Dạng phương trình Maxwell hiệp biến trong không thời gian 4 chiều với mật độ tứ dòng $J^\\mu = (c\\rho, \\vec{j})$ là:',
        opts: ['$\\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu$', '$\\partial_\\mu F^{\\mu\\nu} = 0$', '$F^{\\mu\\nu} = \\partial^\\mu A^\\nu$', '$\\partial^2 A^\\mu = 0$'],
        ans: 0,
        exp: 'Chính xác! Hệ phương trình Maxwell không thuần nhất biểu diễn dạng 4 chiều cực kỳ cô đọng: d_mu F^(mu nu) = mu_0 J^nu.'
      }
    ]
  },
  {
    id: 'bai10',
    num: '10',
    sub: 'Cơ Học Lượng Tử • Hiệu Ứng Xuyên Ngầm & Hạt Nhân Gamow',
    title: 'Phương Trình Schrödinger, Hiệu Ứng Xuyên Ngầm Tunneling & Phân Rã Alpha',
    intro: 'Vật lý lượng tử Olympic phân tích phương trình sóng Schrödinger dừng, hạt trong giếng thế thế hữu hạn, hiệu ứng xuyên ngầm lượng tử (Quantum tunneling) qua hàng rào thế năng giải thích hiện tượng phân rã hạt nhân alpha theo mô hình Gamow và kính hiển vi STM.',
    b1Title: 'Phương Trình Schrödinger Độc Lập Thời Gian',
    b1Content: `• Phương trình vi phân mô tả trạng thái dừng của vi hạt khối lượng $m$ trong trường thế $V(x)$:<br>$$-\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi(x)}{dx^2} + V(x)\\psi(x) = E\\psi(x)$$<br>• Ý nghĩa hàm sóng: Mật độ xác suất tìm thấy hạt tại $x$ là $P(x) = |\\psi(x)|^2$. Điều kiện biên: $\\psi(x)$ và đạo hàm $\\psi'(x)$ phải liên tục và chuẩn hóa được $\\int_{-\\infty}^{+\\infty} |\\psi|^2 dx = 1$.`,
    b2Title: 'Hiệu Ứng Xuyên Ngầm Lượng Tử & Phân Rã Alpha Gamow',
    b2Content: `• <strong>Xuyên hầm lượng tử (Quantum Tunneling):</strong> Khi vi hạt có năng lượng $E$ gặp hàng rào thế cao $V_0 > E$ và bề rộng $a$, trong cơ học cổ điển hạt bị bật lại 100%. Trong cơ học lượng tử, hàm sóng xâm nhập vào hàng rào dưới dạng suy giảm hàm mũ $\\psi(x) \\sim e^{-\\kappa x}$ với $\\kappa = \\sqrt{\\frac{2m(V_0 - E)}{\\hbar^2}}$, dẫn đến xác suất truyền qua khác không:<br>$$T \\approx e^{-2\\kappa a}$$<br>• <strong>Lý thuyết phân rã Alpha của George Gamow:</strong> Hạt alpha bị giam giữ bởi hố thế hạt nhân sâu nhưng có xác suất xuyên hầm qua rào cản Coulomb, giải thích chính xác định luật Geiger-Nuttall về chu kỳ bán rã biến thiên hàng tỷ lần khi năng lượng hạt alpha chỉ thay đổi một lượng nhỏ.`,
    quizzes: [
      {
        q: '1. Năng lượng của hạt có khối lượng $m$ bị nhốt trong giếng thế một chiều vô hạn sâu bề rộng $L$ ($0 \\le x \\le L$) nhận các giá trị gián đoạn là:',
        opts: ['$E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2m L^2} = \\frac{n^2 h^2}{8m L^2}\\quad (n = 1, 2, 3, ...)$', '$E_n = \\frac{n h^2}{8m L^2}$', '$E_n = \\left(n + \\frac{1}{2}\\right) \\hbar \\omega$', '$E_n = \\frac{n^2 \\hbar^2}{m L^2}$'],
        ans: 0,
        exp: 'Chính xác! Điều kiện sóng dừng psi(0) = psi(L) = 0 => k = n pi / L => E_n = hbar^2 k^2 / (2m) = n^2 pi^2 hbar^2 / (2m L^2) = n^2 h^2 / (8m L^2).'
      },
      {
        q: '2. Khi bề rộng $a$ của hàng rào thế tăng gấp đôi trong khi độ cao hàng rào $V_0 > E$ không đổi, hệ số truyền qua xuyên hầm lượng tử $T$ sẽ:',
        opts: ['Giảm theo hàm mũ bình phương ($T\' \\approx T^2$)', 'Giảm đi 2 lần', 'Không đổi', 'Giảm đi 4 lần'],
        ans: 0,
        exp: 'Chính xác! Vì T approx exp(-2 kappa a), khi a tăng gấp đôi thành 2a thì T\' approx exp(-4 kappa a) = [exp(-2 kappa a)]^2 = T^2 (giảm cực kỳ nhanh theo hàm mũ).'
      },
      {
        q: '3. Nguyên lý bất định Heisenberg đối với tọa độ $x$ và động lượng $p_x$ khẳng định:',
        opts: ['$\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}$', '$\\Delta x \\cdot \\Delta p_x = 0$', '$\\Delta x \\cdot \\Delta p_x \\ge hbar$', '$\\Delta x \\cdot \\Delta p_x \\le \\frac{\\hbar}{2}$'],
        ans: 0,
        exp: 'Chính xác! Hệ thức bất định chuẩn tắc Heisenberg: Delta x * Delta p_x >= hbar / 2.'
      },
      {
        q: '4. Theo lý thuyết Gamow về phân rã alpha, hạt alpha thoát ra khỏi hạt nhân mẹ nhờ cơ chế nào?',
        opts: ['Hiệu ứng xuyên ngầm lượng tử qua rào cản Coulomb', 'Được kích thích bởi nhiệt độ cao', 'Va chạm đàn hồi với neutron', 'Phản xạ toàn phần trong lòng hạt nhân'],
        ans: 0,
        exp: 'Chính xác! George Gamow (1928) giải thích phân rã alpha thành công bằng cách áp dụng phương trình Schrödinger cho hạt alpha xuyên hầm lượng tử qua rào thế năng Coulomb.'
      }
    ]
  }
];

// 10 Elite Olympic Mock Exam Questions
const examQuestions = [
  {
    id: 'eq1',
    num: 1,
    topic: 'Cơ Học Giải Tích Lagrange',
    q: 'Một con lắc gồm một hạt khối lượng $m$ gắn ở đầu thanh nhẹ chiều dài $l$. Điểm treo của con lắc chuyển động ngang không ma sát với quy luật $x_0(t) = A \\cos(\\omega t)$. Phương trình vi phân dao động nhỏ ($\\theta \\ll 1$) của con lắc là:',
    options: [
      '$\\ddot{\\theta} + \\frac{g}{l} \\theta = \\frac{A \\omega^2}{l} \\cos(\\omega t)$',
      '$\\ddot{\\theta} + \\frac{g}{l} \\theta = 0$',
      '$\\ddot{\\theta} + \\frac{g}{l} \\theta = -\\frac{A \\omega^2}{l} \\sin(\\omega t)$',
      '$\\ddot{\\theta} + \\left(\\frac{g}{l} - \\frac{A \\omega^2}{l}\\right) \\theta = 0$'
    ],
    ans: 'A',
    sol: 'Tọa độ hạt: x = x_0 + l sin theta, y = -l cos theta. Động năng T = 1/2 m (\\dot{x}^2 + \\dot{y}^2), thế năng V = -mgl cos theta. Thiết lập hàm Lagrange L = T - V và áp dụng phương trình Euler-Lagrange với góc theta nhỏ sin theta approx theta, cos theta approx 1, ta thu được: d^2(theta)/dt^2 + (g/l) theta = (A omega^2 / l) cos(omega t).'
  },
  {
    id: 'eq2',
    num: 2,
    topic: 'Cơ Học Vật Rắn',
    q: 'Một đĩa tròn mỏng đồng chất bán kính $R$, khối lượng $m$ đang lăn không trượt trên mặt phẳng ngang với tốc độ góc tự quay $\\omega_s$ lớn. Đĩa bị nghiêng một góc nhỏ $\\alpha$ so với phương thẳng đứng. Tốc độ góc tiến động $\\Omega_p$ của mặt phẳng đĩa trên đường tròn là:',
    options: [
      '$\\Omega_p = \\frac{2g}{R \\omega_s}$',
      '$\\Omega_p = \\frac{g}{R \\omega_s}$',
      '$\\Omega_p = \\frac{4g}{R \\omega_s}$',
      '$\\Omega_p = \\frac{g}{2R \\omega_s}$'
    ],
    ans: 'A',
    sol: 'Mômen quán tính đĩa đối với trục riêng I_s = (1/2)m R^2. Mômen trọng lực gây ra xu hướng làm đổ đĩa: M = m g R sin alpha approx m g R alpha. Mômen động lượng L_s = I_s omega_s = 1/2 m R^2 omega_s. Tốc độ tiến động Omega_p sin alpha = M / L_s => Omega_p alpha = m g R alpha / (1/2 m R^2 omega_s) => Omega_p = 2g / (R omega_s).'
  },
  {
    id: 'eq3',
    num: 3,
    topic: 'Cơ Học Chất Lưu',
    q: 'Hai hạt bong bóng khí hình cầu bán kính $R_1$ và $R_2$ trong nước nằm cách nhau khoảng cách $d \\gg R_1, R_2$. Dưới tác dụng của trường sóng siêu âm, hai bong bóng cùng co bóp điều hòa đồng pha. Lực tương tác trung bình giữa hai bong bóng (Lực Bjerknes) là:',
    options: [
      'Lực hút tỉ lệ nghịch với bình phương khoảng cách ($F \\sim -1/d^2$)',
      'Lực đẩy tỉ lệ nghịch với bình phương khoảng cách ($F \\sim +1/d^2$)',
      'Lực hút tỉ lệ nghịch với khoảng cách ($F \\sim -1/d$)',
      'Bằng 0 do đối xứng cầu'
    ],
    ans: 'A',
    sol: 'Theo lý thuyết lực Bjerknes trong âm học chất lưu: hai bóng khí dao động thể tích đồng pha trong trường áp suất âm sẽ hút nhau với lực tỉ lệ nghịch với d^2 (tương tự lực hấp dẫn); nếu dao động ngược pha thì đẩy nhau.'
  },
  {
    id: 'eq4',
    num: 4,
    topic: 'Nhiệt Động Lực Học Thống Kê',
    q: 'Nhiệt độ chuyển pha ngưng tụ Bose-Einstein $T_c$ của chất khí Boson lý tưởng có khối lượng hạt $m$ và mật độ số hạt $n$ tỉ lệ thuận với:',
    options: [
      '$\\frac{n^{2/3}}{m}$',
      '$\\frac{n^{1/3}}{m}$',
      '$\\frac{n}{m^2}$',
      '$\\frac{n^2}{m}$'
    ],
    ans: 'A',
    sol: 'Điều kiện ngưng tụ BEC xảy ra khi bước sóng nhiệt De Broglie lambda_dB = h / sqrt(2 pi m k_B T) xấp xỉ khoảng cách trung bình giữa các hạt n^(-1/3): n lambda_dB^3 = zeta(3/2) approx 2.612 => T_c = (h^2 / 2 pi m k_B) * (n / 2.612)^(2/3) ~ n^(2/3) / m.'
  },
  {
    id: 'eq5',
    num: 5,
    topic: 'Điện Động Lực Học Bức Xạ',
    q: 'Một hạt mang điện tích $q$ thực hiện dao động điều hòa dọc theo trục $x$ với quy luật $x(t) = x_0 \\cos(\\omega t)$. Năng lượng trung bình mà hạt phát xạ sóng điện từ vào không gian trong một chu kỳ là:',
    options: [
      '$\\Delta E = \\frac{\\pi q^2 x_0^2 \\omega^3}{6 \\varepsilon_0 c^3}$',
      '$\\Delta E = \\frac{q^2 x_0^2 \\omega^4}{6 \\varepsilon_0 c^3}$',
      '$\\Delta E = \\frac{\\pi q^2 x_0^2 \\omega^2}{3 \\varepsilon_0 c^3}$',
      '$\\Delta E = \\frac{q^2 x_0^2 \\omega^3}{12 \\varepsilon_0 c^3}$'
    ],
    ans: 'A',
    sol: 'Gia tốc a(t) = -x_0 omega^2 cos(omega t). Trung bình bình phương gia tốc <a^2> = 1/2 x_0^2 omega^4. Công suất bức xạ trung bình <P> = q^2 <a^2> / (6 pi eps_0 c^3) = q^2 x_0^2 omega^4 / (12 pi eps_0 c^3). Năng lượng phát xạ trong 1 chu kỳ T = 2 pi / omega: Delta E = <P> * T = [q^2 x_0^2 omega^4 / (12 pi eps_0 c^3)] * (2 pi / omega) = pi q^2 x_0^2 omega^3 / (6 eps_0 c^3).'
  },
  {
    id: 'eq6',
    num: 6,
    topic: 'Vật Lý Plasma',
    q: 'Mật độ electron tự do trong tầng điện khí quyển Trái Đất là $n_e = 10^{12}\\text{ m}^{-3}$. Tần số tới hạn $f_p$ (tần số plasma) mà dưới tần số này sóng vô tuyến bị phản xạ hoàn toàn trở lại mặt đất là:',
    options: [
      '$f_p \\approx 9\\text{ MHz}$',
      '$f_p \\approx 90\\text{ MHz}$',
      '$f_p \\approx 0{,}9\\text{ MHz}$',
      '$f_p \\approx 900\\text{ kHz}$'
    ],
    ans: 'A',
    sol: 'Tần số góc plasma omega_p = sqrt(n_e e^2 / (eps_0 m_e)). Tần số dao động f_p = omega_p / (2 pi) approx 8.98 * sqrt(n_e) Hz. Với n_e = 10^12 m^-3: f_p = 8.98 * sqrt(10^12) = 8.98 * 10^6 Hz approx 9.0 MHz.'
  },
  {
    id: 'eq7',
    num: 7,
    topic: 'Quang Học Phi Tuyến',
    q: 'Hai chùm sóng ánh sáng cùng tần số $\\omega$ phân cực thẳng cùng phương truyền vào môi trường phi tuyến có hệ số Kerr $n_2$. Sự tương tác giữa hai chùm tia tạo ra một cách tử chiết suất động học trong môi trường, hiện tượng này là cơ sở của kỹ thuật:',
    options: [
      'Giao thoa bốn sóng (Four-Wave Mixing) & Gương liên hợp pha (Phase Conjugate Mirror)',
      'Tán xạ đàn hồi Thomson',
      'Hiệu ứng quang điện ngoài',
      'Phát xạ kích thích laser He-Ne'
    ],
    ans: 'A',
    sol: 'Hiện tượng hai chùm sáng giao thoa làm biến điệu chiết suất môi trường theo hiệu ứng Kerr tạo ra cách tử không gian, làm tán xạ các chùm sáng khác, là cơ sở của kỹ thuật trộn bốn sóng (Four-Wave Mixing) và tạo gương liên hợp pha quang học.'
  },
  {
    id: 'eq8',
    num: 8,
    topic: 'Quang Học Lưỡng Chiết',
    q: 'Ánh sáng tự nhiên chiếu vuông góc vào mặt một bản thạch anh đơn trục cắt song song với quang trục có bề dày $d = 0{,}05\\text{ mm}$. Chiết suất tia thường $n_o = 1{,}544$ và tia dị thường $n_e = 1{,}553$ đối với bước sóng $\\lambda = 600\\text{ nm}$. Hiệu quang trình $\\Delta L$ giữa hai tia khi ló ra khỏi bản là:',
    options: [
      '$\\Delta L = 450\\text{ nm} = 0{,}75 \\lambda$',
      '$\\Delta L = 600\\text{ nm} = 1{,}0 \\lambda$',
      '$\\Delta L = 300\\text{ nm} = 0{,}5 \\lambda$',
      '$\\Delta L = 150\\text{ nm} = 0{,}25 \\lambda$'
    ],
    ans: 'A',
    sol: 'Hiệu quang trình Delta L = |n_e - n_o| * d = (1.553 - 1.544) * 0.05 * 10^-3 m = 0.009 * 5 * 10^-5 m = 4.5 * 10^-7 m = 450 nm. So với bước sóng: Delta L / lambda = 450 / 600 = 0.75 lambda.'
  },
  {
    id: 'eq9',
    num: 9,
    topic: 'Thuyết Tương Đối Hẹp',
    q: 'Một hạt pion trung hòa $\\pi^0$ có khối lượng nghỉ $m_\\pi = 135\\text{ MeV/}c^2$ đang bay với tốc độ $v = 0{,}8c$ thì phân rã thành hai photon $\\gamma_1$ và $\\gamma_2$ bay cùng phương và ngược phương chuyển động của pion. Năng lượng của photon bay về phía trước $\\gamma_1$ là:',
    options: [
      '$E_1 = 202{,}5\\text{ MeV}$',
      '$E_1 = 135\\text{ MeV}$',
      '$E_1 = 67{,}5\\text{ MeV}$',
      '$E_1 = 270\\text{ MeV}$'
    ],
    ans: 'A',
    sol: 'Thừa số Lorentz gamma = 1 / sqrt(1 - 0.8^2) = 5/3. Năng lượng toàn phần của pion E = gamma m_pi c^2 = (5/3) * 135 = 225 MeV. Động lượng pion p = gamma m v = (5/3) * 135 * 0.8 = 180 MeV/c. Bảo toàn năng lượng và xung lượng: E_1 + E_2 = 225 MeV và p_1 - p_2 = (E_1 - E_2)/c = 180 MeV/c => E_1 - E_2 = 180 MeV. Cộng hai phương trình: 2E_1 = 405 => E_1 = 202.5 MeV.'
  },
  {
    id: 'eq10',
    num: 10,
    topic: 'Cơ Học Lượng Tử Schrödinger',
    q: 'Một vi hạt khối lượng $m$ chuyển động trong giếng thế điều hòa $V(x) = \\frac{1}{2} m \\omega^2 x^2$. Năng lượng của trạng thái kích thích thứ nhất ($n = 1$) là:',
    options: [
      '$E_1 = \\frac{3}{2} \\hbar \\omega$',
      '$E_1 = \\frac{1}{2} \\hbar \\omega$',
      '$E_1 = \\hbar \\omega$',
      '$E_1 = 2 \\hbar \\omega$'
    ],
    ans: 'A',
    sol: 'Mức năng lượng của dao động tử điều hòa lượng tử: E_n = (n + 1/2) hbar omega với n = 0, 1, 2, ... Trạng thái cơ bản n = 0 có E_0 = 1/2 hbar omega. Trạng thái kích thích thứ nhất n = 1 có E_1 = (1 + 1/2) hbar omega = 3/2 hbar omega.'
  }
];

// Generate Articles HTML
const articlesHtml = topics.map(t => {
  const quizzesHtml = t.quizzes.map((q, idx) => createQuiz(`${t.id}_q${idx + 1}`, q.q, q.opts, q.ans, q.exp)).join('\n');
  return `
      <!-- Bài ${t.num}: ${t.title} -->
      <article id="${t.id}" class="bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-extrabold text-sm border border-sky-200 dark:border-sky-800">
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
        <div class="p-5 rounded-2xl bg-sky-50/50 dark:bg-dark-card/50 border border-sky-100 dark:border-sky-950/40 space-y-3">
          <h3 class="text-base font-bold text-sky-950 dark:text-sky-300 flex items-center gap-2">
            <i class="fa-solid fa-atom text-sky-600"></i> ${t.b1Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b1Content}
          </div>
        </div>

        <!-- Section 2 -->
        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-dark-card/50 border border-indigo-100 dark:border-indigo-950/40 space-y-3">
          <h3 class="text-base font-bold text-indigo-950 dark:text-indigo-300 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-indigo-600"></i> ${t.b2Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b2Content}
          </div>
        </div>

        <!-- Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-sky-600"></i> Bài Tập Củng Cố &amp; Khảo Sát Nhanh (4 câu)
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
              <label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-700/80 hover:bg-sky-50 dark:hover:bg-sky-950/30 cursor-pointer transition">
                <input type="radio" name="${eq.id}" value="${letters[idx]}" class="mt-1 text-sky-600 focus:ring-sky-500">
                <span class="text-xs sm:text-sm text-gray-800 dark:text-gray-200"><strong class="text-sky-600 dark:text-sky-400 mr-1">${letters[idx]}.</strong> ${opt}</span>
              </label>`).join('\n');

  return `
            <!-- Câu ${eq.num} -->
            <div class="exam-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-black">
                  CÂU ${eq.num}
                </span>
                <span class="text-xs font-semibold text-gray-400 dark:text-gray-500">${eq.topic}</span>
              </div>
              <p class="font-bold text-gray-900 dark:text-white text-sm sm:base leading-relaxed">${eq.q}</p>
              <div class="grid grid-cols-1 gap-2.5 pt-1">
                ${optsHtml}
              </div>
            </div>`;
}).join('\n');

// Generate Solutions Review HTML
const solutionsReviewHtml = examQuestions.map(eq => `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 space-y-2 text-xs sm:text-sm">
              <div class="flex items-center justify-between font-bold">
                <span class="text-sky-600 dark:text-sky-400">Câu ${eq.num}: ${eq.topic}</span>
                <span class="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 text-xs">Đáp án đúng: ${eq.ans}</span>
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed font-mono text-xs bg-white dark:bg-dark-card p-3 rounded-lg border border-gray-100 dark:border-gray-700">${eq.sol}</p>
            </div>`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Luyện Thi Olympic Vật Lý Cấp 3 (THPT &amp; Chuyên Quốc Tế IPhO) | CodeHub</title>
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
              bg: '#080E1A',
              surface: '#0F172A',
              card: '#1E293B'
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
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #0284c7; border-radius: 4px; }
    .olyphy-gradient {
      background: linear-gradient(135deg, #032030 0%, #020617 45%, #1e1b4b 100%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Header / Navigation -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-lg hover:opacity-90">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="hidden sm:inline">CodeHub</span>
        </a>
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div class="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs sm:text-sm font-semibold">
          <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
            <i class="fa-solid fa-medal"></i> Olympic Vật Lý THPT
          </span>
          <a href="hsg_vatly_thpt.html" class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-atom"></i> HSG Vật Lý
          </a>
          <a href="olympic_toan_thpt.html" class="px-2.5 py-1 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-infinity"></i> Olympic Toán
          </a>
          <a href="olympic_hoa_thpt.html" class="px-2.5 py-1 rounded-lg text-teal-600 dark:text-teal-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-flask"></i> Olympic Hóa
          </a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Phòng Thi Thử Olympic IPhO</span>
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
  <section class="olyphy-gradient text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/40 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold tracking-wide">
          <i class="fa-solid fa-trophy text-amber-400"></i> Huấn Luyện Đội Tuyển Olympic Quốc Tế (IPhO • APhO • EuPhO)
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Luyện Thi Olympic <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-amber-300">Vật Lý Cấp 3 (THPT &amp; Chuyên)</span>
        </h1>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed">
          Giáo trình học thuật đỉnh cao chuẩn Olympic Quốc Tế: Cơ học giải tích Lagrange &amp; Hamilton, Định lý Noether, Ten-xơ quán tính &amp; Hiệu ứng Dzhanibekov, Chất lưu Navier-Stokes &amp; KdV Soliton, Thống kê Bose-Einstein &amp; Fermi-Dirac, Thế trễ Liénard-Wiechert &amp; Bức xạ Larmor, Dao động Plasma &amp; Sóng Alfvén, Quang học phi tuyến Kerr &amp; SHG, Giao thoa kế Fabry-Pérot, Tứ véctơ Minkowski và Xuyên ngầm lượng tử Gamow.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-book-bookmark text-sky-400"></i> 10 Chuyên đề IPhO / APhO</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-sky-400"></i> 40 Bài tập trắc nghiệm có lời giải</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-trophy text-amber-400"></i> Đề thi thử Olympic 60:00</span>
        </div>
      </div>

      <!-- Quick Learning Card -->
      <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 w-full md:w-80 shrink-0 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-sky-200">Tiến Độ Ôn Tập</span>
          <span id="quiz-completed-count" class="text-lg font-black text-sky-300">0 / 40</span>
        </div>
        <div class="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
          <div id="progress-bar" class="bg-gradient-to-r from-sky-400 to-amber-400 h-full w-0 transition-all duration-300"></div>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed">
          Giải các câu hỏi trắc nghiệm dưới mỗi chuyên đề để làm chủ tư duy giải tích toán lý và phản xạ Olympic Quốc tế.
        </p>
        <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-amber-400 hover:from-sky-500 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-play text-slate-950"></i> Thi Thử Đề IPhO (60:00)
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
      <div class="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold">
        <i class="fa-solid fa-medal"></i>
        <span>Mục Lục Olympic Vật Lý</span>
      </div>
      <button onclick="toggleDrawer(false)" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="overflow-y-auto p-4 space-y-1 text-sm flex-1 sidebar-scroll">
      ${topics.map(t => `<a href="#${t.id}" onclick="toggleDrawer(false)" class="block px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 text-gray-700 dark:text-gray-300 hover:text-sky-600 font-medium transition">Bài ${parseInt(t.num)}: ${t.sub}</a>`).join('\n      ')}
    </div>
  </div>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Desktop Sticky Sidebar -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        <div class="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700/60 font-bold text-sm text-sky-600 dark:text-sky-400">
            <i class="fa-solid fa-compass"></i>
            <span>Mục Lục 10 Chuyên Đề</span>
          </div>
          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
            ${topics.map(t => `<a href="#${t.id}" class="nav-link block px-2.5 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-sky-600 dark:hover:text-sky-400 transition font-medium">${parseInt(t.num)}. ${t.sub}</a>`).join('\n            ')}
          </nav>
        </div>

        <!-- Sidebar Mock Exam Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-950 text-white border border-sky-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
            <i class="fa-solid fa-trophy"></i> Phòng Thi Thử Trực Tuyến
          </div>
          <p class="text-xs text-sky-100 leading-relaxed">
            Đề thi thử Olympic Vật Lý Quốc Tế 10 câu tinh hoa chuẩn IPhO &amp; APhO, có đồng hồ 60 phút và xếp hạng Huy Chương Vàng/Bạc/Đồng.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-slate-950 hover:bg-sky-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-sky-600"></i> Bắt đầu thi thử (60:00)
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-12">
      ${articlesHtml}

      <!-- Course Summary Banner -->
      <section class="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-950 text-white rounded-3xl p-8 border border-sky-500/30 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
            <i class="fa-solid fa-crown text-amber-400"></i> Đỉnh Cao Olympic Vật Lý Quốc Tế
          </div>
          <h2 class="text-2xl sm:text-3xl font-black">Chinh Phục Đấu Trường Olympic Quốc Tế (IPhO &amp; APhO)</h2>
          <p class="text-sm text-sky-100 leading-relaxed">
            Bạn đã được trang bị hệ thống lý thuyết và phương pháp tiếp cận vật lý hiện đại tầm vóc quốc tế: từ nguyên lý biến phân Hamilton, ten-xơ quán tính Poinsot, phương trình Navier-Stokes, thống kê Bose-Einstein, thế trễ Liénard-Wiechert đến cơ học lượng tử Schrödinger. Hãy thử sức ngay với đề thi 60 phút để khẳng định bản lĩnh Olympic!
          </p>
          <div class="pt-2">
            <button onclick="openCourseQuizModal()" class="py-3 px-6 rounded-xl bg-gradient-to-r from-sky-400 to-amber-400 hover:from-sky-500 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl transition flex items-center gap-2">
              <i class="fa-solid fa-stopwatch text-slate-950"></i> Bắt Đầu Làm Đề Thi Thử Olympic (60 Phút)
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
        Khóa Học Luyện Thi Olympic Vật Lý Cấp 3 (THPT &amp; Chuyên) • CodeHub Learning Platform
      </p>
      <p>
        Biên soạn theo chương trình Đội tuyển Olympic Vật Lý Quốc tế (IPhO), Châu Á (APhO), Châu Âu (EuPhO) &amp; Chuẩn kiến thức chuyên Lý toàn quốc.
      </p>
    </div>
  </footer>

  <!-- Modal Thi Thử Olympic IPhO Trực Tuyến -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <div class="bg-white dark:bg-dark-surface w-full max-w-4xl rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-slate-950 via-indigo-950 to-sky-950 text-white flex items-center justify-between border-b border-sky-800/50 shrink-0">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-sky-500/20 rounded-xl border border-sky-400/30 text-sky-300">
            <i class="fa-solid fa-trophy text-xl text-amber-400"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Phòng Thi Thử Trực Tuyến • Olympic Vật Lý Quốc Tế</h3>
            <p class="text-xs text-sky-200">10 Bài Toán Chọn Lọc Tinh Hoa • Chuẩn Đề IPhO &amp; APhO</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <!-- Countdown Timer Display -->
          <div class="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-sky-400/30">
            <i class="fa-solid fa-stopwatch text-sky-400 animate-pulse"></i>
            <span id="examTimer" class="font-mono font-black text-sm sm:text-base text-sky-300 tracking-wider">60:00</span>
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
              <button type="submit" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-black shadow-lg transition flex items-center justify-center gap-2">
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
            <button type="button" onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải Chi Tiết Từng Câu
            </button>
            <button type="button" onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Thi lại
            </button>
          </div>
        </div>

        <!-- Solutions Review Container -->
        <div id="examSolutionsReview" class="hidden pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="font-black text-sm text-sky-600 dark:text-sky-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Phân Tích &amp; Lời Giải Chi Tiết Bộ Đề IPhO:
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
    const STORAGE_KEY = 'olympic_vatly_thpt_solved_quizzes';
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
        btn.classList.remove('bg-sky-100', 'border-sky-500', 'bg-rose-100', 'border-rose-500');
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
      if (confirm('Bạn có chắc muốn làm lại toàn bộ đề thi thử Olympic Vật Lý từ đầu?')) {
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
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! HUY CHƯƠNG VÀNG OLYMPIC VẬT LÝ QUỐC TẾ (IPhO GOLD MEDAL)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trí tuệ vật lý đẳng cấp thế giới! Bạn đã giải chính xác trọn vẹn cả 10 câu hỏi chuẩn Olympic Quốc tế từ Cơ học Lagrange điểm treo chuyển động, Con quay tiến động góc nghiêng, Lực Bjerknes âm học chất lưu, Nhiệt độ ngưng tụ BEC, Bức xạ Larmor điều hòa, Tần số plasma khí quyển, Trộn bốn sóng Kerr, Bản thạch anh lưỡng chiết, Phân rã Pion tương đối tính đến Mức năng lượng dao động tử Schrödinger!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-sky-50 dark:bg-sky-950/40 border-sky-500/50 text-sky-950 dark:text-sky-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-sky-600 text-2xl"></i> Chúc Mừng! HUY CHƯƠNG BẠC OLYMPIC VẬT LÝ (IPhO SILVER MEDAL)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-sky-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Tư duy toán lý Olympic vô cùng sắc sảo và xuất sắc! Đạt mức Huy chương Bạc IPhO là thành tích đỉnh cao. Hãy xem lại lời giải chi tiết bên dưới để hoàn thiện nốt các bài toán hóc búa còn lại!';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500/50 text-indigo-950 dark:text-indigo-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-indigo-600 text-2xl"></i> HUY CHƯƠNG ĐỒNG OLYMPIC VẬT LÝ (IPhO BRONZE MEDAL)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-indigo-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kết quả rất ấn tượng trước một đề thi chuẩn IPhO/APhO. Hãy bấm nút "Xem Lời Giải Chi Tiết Từng Câu" để nắm vững thêm các bổ đề và công thức giải tích nâng cao!';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-amber-500 text-2xl"></i> BẰNG KHEN OLYMPIC (HONORABLE MENTION) / Cần Rèn Luyện Thêm!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Đề thi Olympic Quốc tế có độ phân loại rất cao. Hãy xem kỹ từng bước phân tích và biến đổi toán lý trong phần Lời Giải Chi Tiết!';
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
console.log('Successfully created courses/olympic_vatly_thpt.html!');
