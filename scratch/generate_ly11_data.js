const fs = require('fs');

const lessonsData = [
  // BÀI 1
  {
    id: 'bai-1',
    num: 1,
    chuyende: 'Chuyên đề 1: Trường hấp dẫn',
    chuyendeId: 'cd-1',
    title: 'Bài 1. Trường hấp dẫn',
    subtitle: 'Tương tác vạn vật hấp dẫn, trọng lực, trọng lượng, chuyển động quỹ đạo và vệ tinh nhân tạo',
    desc: 'Tìm hiểu bản chất trường hấp dẫn của vật thể có khối lượng, định luật vạn vật hấp dẫn Newton, gia tốc trọng trường g, vận tốc vũ trụ cấp 1 và quỹ đạo vệ tinh LEO/GEO.',
    tag: 'Chuyên đề 1 • Bài 1',
    badgeColor: 'sky',
    sections: [
      {
        heading: '1. Tương tác hấp dẫn & Định luật vạn vật hấp dẫn',
        summary: 'Mọi vật có khối lượng trong vũ trụ đều hút nhau bằng một lực gọi là lực hấp dẫn. Lực này có phương nằm trên đường thẳng nối tâm hai vật.',
        details: [
          '**Định luật Newton:** Lực hấp dẫn giữa hai chất điểm (hoặc hai vật đồng tính hình cầu cách xa nhau) tỉ lệ thuận với tích khối lượng và tỉ lệ nghịch với bình phương khoảng cách giữa tâm của chúng: $$F = G \\frac{m_1 m_2}{r^2}$$',
          '**Các đại lượng:** $m_1, m_2$ là khối lượng hai vật (kg), $r$ là khoảng cách giữa hai tâm (m), $G \\approx 6{,}67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ là hằng số hấp dẫn.',
          '**Đặc tính lực tương tác:** Hai vật tác dụng lên nhau hai lực trực đối: cùng phương, ngược chiều, cùng độ lớn (theo Định luật III Newton: $\\vec{F}_{12} = -\\vec{F}_{21}$).',
          '**Quy luật bình phương khoảng cách:** Khi khoảng cách $r$ tăng lên $k$ lần thì lực hấp dẫn giảm đi $k^2$ lần (ví dụ: cách xa gấp đôi thì lực hút giảm 4 lần).',
          '**Thí nghiệm cân xoắn Cavendish (1798):** Đo lực hút cực nhỏ giữa hai cặp quả cầu chì bằng sự xoắn của dây kim loại mảnh và tia sáng phản xạ qua gương, từ đó xác định chính xác hằng số hấp dẫn $G$ và tính được khối lượng của Trái Đất.'
        ]
      },
      {
        heading: '2. Trọng lực, trọng lượng và gia tốc trọng trường g',
        summary: 'Trọng lực là lực hấp dẫn của Trái Đất tác dụng lên vật. Trọng lượng là độ lớn của trọng lực tác dụng lên vật khi đứng yên.',
        details: [
          '**Trọng lực gần mặt đất:** $P = mg$ (với $P$ tính bằng N, $m$ tính bằng kg, $g \\approx 9{,}8 \\text{ m/s}^2$ hoặc lấy tròn $10 \\text{ m/s}^2$).',
          '**Bản chất của g:** Gia tốc trọng trường tại độ cao $h$ so với mặt đất: $$g = \\frac{GM}{(R + h)^2} = g_0 \\frac{R^2}{(R + h)^2}$$ trong đó $M$ là khối lượng Trái Đất, $R \\approx 6371 \\text{ km}$ là bán kính Trái Đất, $g_0 = \\frac{GM}{R^2} \\approx 9{,}81 \\text{ m/s}^2$ tại mặt biển.',
          '**Sự thay đổi của g:** Càng lên cao ($h$ tăng), $g$ càng giảm. Tại vĩ độ khác nhau, do Trái Đất hơi dẹt ở hai cực và do chuyển động tự quay, $g$ ở địa cực lớn hơn ($g \\approx 9{,}83 \\text{ m/s}^2$) so với ở xích đạo ($g \\approx 9{,}78 \\text{ m/s}^2$).',
          '**Trọng lượng biểu kiến và hiện tượng không trọng lượng:** Trọng lượng biểu kiến là lực nén lên sàn hoặc lực căng tác dụng lên dây treo ($N$ hoặc $T$). Khi vật rơi tự do hoặc bay trong tàu vũ trụ đang quay quanh Trái Đất, gia tốc của vật bằng gia tốc trọng trường ($a = g$), dẫn đến $N = 0$ (trạng thái mất trọng lượng biểu kiến).'
        ]
      },
      {
        heading: '3. Quỹ đạo và vệ tinh nhân tạo',
        summary: 'Chuyển động của vệ tinh quanh Trái Đất được duy trì bởi chính lực hấp dẫn đóng vai trò là lực hướng tâm.',
        details: [
          '**Điều kiện chuyển động tròn đều:** Lực hấp dẫn giữ vệ tinh trên quỹ đạo tròn: $$F_{hd} = F_{ht} \\iff G \\frac{M m}{r^2} = m \\frac{v^2}{r} \\implies v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{GM}{R + h}}$$ với $r = R + h$ là bán kính quỹ đạo.',
          '**Vận tốc vũ trụ cấp 1 ($v_1$):** Vận tốc tối thiểu phóng vật thể từ sát mặt đất ($h \\approx 0$) để nó chuyển động tròn quanh Trái Đất mà không rơi: $$v_1 = \\sqrt{\\frac{GM}{R}} = \\sqrt{g_0 R} \\approx \\sqrt{9{,}8 \\times 6{,}371 \\times 10^6} \\approx 7{,}9 \\text{ km/s}$$ (khoảng $28.440 \\text{ km/h}$).',
          '**Chu kì quay:** $$T = \\frac{2\\pi r}{v} = 2\\pi \\sqrt{\\frac{r^3}{GM}}$$ Bán kính quỹ đạo càng lớn thì vận tốc dài càng nhỏ và chu kì quay càng dài (phù hợp định luật 3 Kepler $T^2 \\propto r^3$).',
          '**Các quỹ đạo chính:**',
          '- **Quỹ đạo tầm thấp (LEO - Low Earth Orbit):** Độ cao khoảng $200 - 2000 \\text{ km}$, chu kì khoảng $90 - 120 \\text{ phút}$. Ứng dụng: trạm không gian ISS, vệ tinh quan sát Trái Đất, chùm vệ tinh internet tầm thấp.',
          '- **Quỹ đạo địa tĩnh (GEO - Geostationary Orbit):** Nằm trong mặt phẳng xích đạo, độ cao xấp xỉ $35.786 \\text{ km}$ ($r \\approx 42.164 \\text{ km}$), chu kì đúng bằng chu kì tự quay của Trái Đất ($T \\approx 24 \\text{ giờ}$). Vệ tinh GEO đứng yên so với mặt đất bên dưới, cực kì thuận lợi cho viễn thông, truyền hình vệ tinh và khí tượng.'
        ]
      },
      {
        heading: '4. Thí nghiệm tư duy “Đại bác của Newton”',
        summary: 'Newton đề xuất tưởng tượng đặt một khẩu đại bác trên đỉnh núi rất cao vượt khỏi bầu khí quyển và bắn theo phương ngang.',
        details: [
          '**Tốc độ thấp ($v < v_1$):** Vật rơi theo đường parabol cong chạm mặt đất tại vị trí càng xa khi tốc độ ban đầu càng lớn.',
          '**Tốc độ đúng bằng $v_1$ ($v = 7{,}9 \\text{ km/s}$):** Độ cong của quỹ đạo rơi trùng đúng với độ cong của bề mặt Trái Đất. Vật "rơi mãi mà không chạm đất", chuyển động theo quỹ đạo tròn khép kín thành vệ tinh nhân tạo.',
          '**Tốc độ lớn hơn $v_1$ nhưng nhỏ hơn $v_2$ ($v_1 < v < v_2 \\approx 11{,}2 \\text{ km/s}$):** Quỹ đạo trở thành hình elip nhận tâm Trái Đất làm một tiêu điểm.',
          '**Tốc độ vũ trụ cấp 2 ($v \\ge v_2 = \\sqrt{2} v_1 \\approx 11{,}2 \\text{ km/s}$):** Vật thoát khỏi trường hấp dẫn của Trái Đất theo quỹ đạo parabol hoặc hyperbol để du hành vào không gian liên hành tinh.'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Nếu khoảng cách giữa tâm hai quả cầu đồng chất tăng lên gấp 3 lần thì lực hấp dẫn giữa chúng thay đổi như thế nào?',
        options: [
          'Tăng lên 3 lần',
          'Giảm đi 3 lần',
          'Giảm đi 9 lần',
          'Không đổi vì khối lượng giữ nguyên'
        ],
        answer: 2,
        explanation: 'Theo Định luật vạn vật hấp dẫn, $F = G \\frac{m_1 m_2}{r^2}$. Lực hấp dẫn tỉ lệ nghịch với bình phương khoảng cách $r$. Khi $r\' = 3r$ thì $F\' = F / 3^2 = F / 9$, tức là giảm đi 9 lần.'
      },
      {
        q: 'Vận tốc vũ trụ cấp 1 ($v_1 \\approx 7{,}9\\text{ km/s}$) biểu thị điều gì đối với một vật thể phóng từ Trái Đất?',
        options: [
          'Vận tốc để vật thoát hoàn toàn khỏi trường hấp dẫn Trái Đất',
          'Vận tốc tối thiểu để vật chuyển động theo quỹ đạo tròn quanh Trái Đất sát mặt đất',
          'Vận tốc để vật bay thẳng lên độ cao địa tĩnh rồi dừng lại',
          'Vận tốc để vật rơi tự do thẳng đứng nhanh nhất'
        ],
        answer: 1,
        explanation: 'Vận tốc vũ trụ cấp 1 ($v_1 = \\sqrt{gR} \\approx 7{,}9 \\text{ km/s}$) là tốc độ ban đầu tối thiểu theo phương ngang cần truyền cho vật thể gần mặt đất để nó bay quanh Trái Đất theo quỹ đạo tròn.'
      },
      {
        q: 'Một vệ tinh địa tĩnh (GEO) có đặc điểm nổi bật nào sau đây?',
        options: [
          'Chu kì quay 90 phút và bay qua hai địa cực',
          'Độ cao chỉ khoảng 300 km và thay đổi vị trí liên tục so với mặt đất',
          'Nằm trên mặt phẳng xích đạo, độ cao ~35.786 km và chu kì quay xấp xỉ 24 giờ',
          'Không chịu tác dụng của lực hấp dẫn Trái Đất'
        ],
        answer: 2,
        explanation: 'Vệ tinh địa tĩnh nằm trên mặt phẳng xích đạo ở độ cao khoảng 35.786 km, có chu kì quay đúng bằng chu kì tự quay của Trái Đất (~24h) và cùng chiều tự quay, do đó nó đứng yên tương đối so với một điểm trên mặt đất.'
      }
    ]
  },

  // BÀI 2
  {
    id: 'bai-2',
    num: 2,
    chuyende: 'Chuyên đề 1: Trường hấp dẫn',
    chuyendeId: 'cd-1',
    title: 'Bài 2. Cường độ trường hấp dẫn',
    subtitle: 'Khái niệm trường hấp dẫn, vector cường độ trường g, đường sức và nguyên lí chồng chất trường',
    desc: 'Định nghĩa vector cường độ trường hấp dẫn g = F/m, công thức g = GM/r² cho vật đối xứng cầu, quy tắc tổng hợp vector trường hấp dẫn và mô hình trực quan hóa bằng đường sức.',
    tag: 'Chuyên đề 1 • Bài 2',
    badgeColor: 'sky',
    sections: [
      {
        heading: '1. Khái niệm Trường hấp dẫn & Vector cường độ trường',
        summary: 'Trường hấp dẫn là một dạng vật chất tồn tại xung quanh vật thể có khối lượng, truyền tương tác hấp dẫn giữa các vật mang khối lượng trong không gian.',
        details: [
          '**Định nghĩa Cường độ trường hấp dẫn:** Đại lượng đặc trưng cho trường hấp dẫn về mặt tác dụng lực tại một điểm, đo bằng tỉ số giữa lực hấp dẫn $\\vec{F}$ tác dụng lên một vật thử khối lượng $m$ đặt tại điểm đó và khối lượng $m$: $$\\vec{g} = \\frac{\\vec{F}}{m}$$',
          '**Đơn vị:** Trong hệ SI, cường độ trường hấp dẫn có đơn vị là $\\text{N/kg}$ (hoặc tương đương $\\text{m/s}^2$).',
          '**Ý nghĩa:** Tại mọi điểm trong trường hấp dẫn, một vật có khối lượng $m$ đều thu được cùng một gia tốc rơi tự do $\\vec{g} = \\vec{F}/m$, không phụ thuộc vào khối lượng của bản thân vật thử.'
        ]
      },
      {
        heading: '2. Cường độ trường hấp dẫn do vật hình cầu tạo ra',
        summary: 'Trường hấp dẫn bên ngoài một khối cầu đồng chất có dạng xuyên tâm hướng vào tâm cầu, tương đương như khi toàn bộ khối lượng tập trung tại tâm.',
        details: [
          '**Công thức độ lớn:** Tại điểm cách tâm khối cầu khối lượng $M$ một khoảng $r \\ge R$: $$g = \\frac{GM}{r^2} = \\frac{GM}{(R + h)^2}$$',
          '**Phương và chiều:** Vector $\\vec{g}$ luôn nằm trên đường thẳng nối điểm đang xét với tâm khối cầu, hướng về tâm khối cầu (lực hút).',
          '**Tại mặt cầu ($h = 0$):** $g_0 = \\frac{GM}{R^2}$.',
          '**Tại độ cao $h$:** Tỉ số giữa $g$ và $g_0$ tuân theo: $$\\frac{g}{g_0} = \\left(\\frac{R}{R + h}\\right)^2$$ Khi độ cao $h \\ll R$ (ví dụ vài km trên bề mặt Trái Đất), ta có thể xấp xỉ $g \\approx g_0 \\left(1 - \\frac{2h}{R}\\right)$, cứ lên cao 1 km thì $g$ giảm khoảng $0{,}03\\%$.'
        ]
      },
      {
        heading: '3. Nguyên lí chồng chất trường hấp dẫn',
        summary: 'Khi có nhiều vật thể tạo ra trường hấp dẫn, cường độ trường hấp dẫn tổng hợp tại một điểm bằng tổng vector các cường độ trường thành phần.',
        details: [
          '**Công thức vector:** $$\\vec{g} = \\vec{g}_1 + \\vec{g}_2 + \\dots + \\vec{g}_n$$',
          '**Các trường hợp đặc biệt của 2 nguồn:**',
          '- Cùng phương, cùng chiều: $g = g_1 + g_2$.',
          '- Cùng phương, ngược chiều: $g = |g_1 - g_2|$.',
          '- Vuông góc: $g = \\sqrt{g_1^2 + g_2^2}$.',
          '- Góc bất kì $\\alpha$: $g = \\sqrt{g_1^2 + g_2^2 + 2 g_1 g_2 \\cos\\alpha}$.',
          '**Điểm có trường triệt tiêu ($g = 0$):** Nằm giữa hai thiên thể nơi $\\vec{g}_1 = -\\vec{g}_2 \\implies \\frac{GM_1}{r_1^2} = \\frac{GM_2}{r_2^2} \\implies \\frac{r_1}{r_2} = \\sqrt{\\frac{M_1}{M_2}}$. Ví dụ: điểm cân bằng hấp dẫn giữa Trái Đất và Mặt Trăng.'
        ]
      },
      {
        heading: '4. Đường sức trường hấp dẫn',
        summary: 'Đường sức là các đường cong vẽ trong không gian sao cho tiếp tuyến tại mỗi điểm trùng với phương của vector cường độ trường hấp dẫn tại điểm đó.',
        details: [
          '**Hình dạng đường sức của một khối cầu cô lập:** Là các tia thẳng hướng xuyên tâm tụ về tâm khối cầu.',
          '**Quy ước mật độ đường sức:** Nơi nào trường hấp dẫn mạnh thì đường sức dày (dày đặc gần bề mặt Trái Đất), nơi nào trường yếu thì đường sức thưa (xa dần trong không gian).',
          '**Trường đều:** Trong một phạm vi không gian hẹp gần mặt đất (như trong một căn phòng, một sân vận động), các đường sức gần như song song và cách đều nhau, vector $\\vec{g}$ coi như không đổi về cả độ lớn và hướng.'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Đơn vị chuẩn của cường độ trường hấp dẫn trong hệ SI là gì?',
        options: [
          'J hoặc N·m',
          'N/kg hoặc m/s²',
          'kg/m² hoặc W',
          'N·s/kg'
        ],
        answer: 1,
        explanation: 'Cường độ trường hấp dẫn $g = F/m$ có đơn vị là N/kg, tương đương với m/s² (gia tốc trọng trường).'
      },
      {
        q: 'Tại điểm $M$ cách tâm Trái Đất một khoảng bằng $2R$ (tức ở độ cao $h = R$), gia tốc trọng trường $g$ so với tại mặt đất $g_0$ là:',
        options: [
          'g = g₀ / 2',
          'g = g₀ / 4',
          'g = 2g₀',
          'g = 4g₀'
        ],
        answer: 1,
        explanation: 'Do $g = GM/r^2$, khi $r = 2R$ thì $g = GM/(2R)^2 = g_0 / 4$.'
      },
      {
        q: 'Điểm nằm giữa Trái Đất và Mặt Trăng có cường độ trường hấp dẫn tổng hợp bằng không nằm gần thiên thể nào hơn?',
        options: [
          'Nằm chính giữa khoảng cách hai tâm',
          'Nằm gần Trái Đất hơn vì Trái Đất có khối lượng lớn hơn',
          'Nằm gần Mặt Trăng hơn vì Mặt Trăng có khối lượng nhỏ hơn',
          'Không tồn tại điểm có cường độ trường triệt tiêu'
        ],
        answer: 2,
        explanation: 'Vì $\\frac{r_1}{r_2} = \\sqrt{\\frac{M_{TD}}{M_{MT}}}$ và $M_{TD} \\approx 81 M_{MT}$, nên $r_1 \\approx 9 r_2$. Điểm cân bằng phải ở gần Mặt Trăng hơn rất nhiều để bù đắp cho khối lượng nhỏ của nó.'
      }
    ]
  },

  // BÀI 3
  {
    id: 'bai-3',
    num: 3,
    chuyende: 'Chuyên đề 1: Trường hấp dẫn',
    chuyendeId: 'cd-1',
    title: 'Bài 3. Thế hấp dẫn và thế năng hấp dẫn',
    subtitle: 'Khái niệm thế hấp dẫn, thế năng hấp dẫn, công của lực hấp dẫn và định luật bảo toàn cơ năng trong trường hấp dẫn',
    desc: 'Định nghĩa thế hấp dẫn φ = -GM/r (mốc ở vô cực), thế năng hấp dẫn W = -GMm/r, tính công lực hấp dẫn theo hiệu thế năng và áp dụng định luật bảo toàn cơ năng cho thiên thể, tàu vũ trụ.',
    tag: 'Chuyên đề 1 • Bài 3',
    badgeColor: 'sky',
    sections: [
      {
        heading: '1. Thế hấp dẫn (Gravitational Potential)',
        summary: 'Thế hấp dẫn là đại lượng đặc trưng cho trường hấp dẫn về mặt năng lượng tại một điểm trong không gian.',
        details: [
          '**Định nghĩa:** Thế hấp dẫn $\\varphi$ tại điểm $M$ bằng công dịch chuyển một đơn vị khối lượng từ vô cực ($r \\to \\infty$) về điểm $M$: $$\\varphi = \\frac{W_t}{m}$$',
          '**Công thức cho vật đối xứng cầu (mốc thế năng ở vô cực $\\varphi_\\infty = 0$):** $$\\varphi = -\\frac{GM}{r} = -\\frac{GM}{R + h}$$',
          '**Đơn vị:** $\\text{J/kg}$ (Joule trên kilogram) hoặc $\\text{m}^2/\\text{s}^2$.',
          '**Dấu âm của thế hấp dẫn:** Lực hấp dẫn là lực hút. Để đưa vật từ vô cực về gần vật nguồn, lực hấp dẫn sinh công dương, nên công của ngoại lực âm. Khi chọn mốc ở vô cực bằng 0 thì tại mọi khoảng cách hữu hạn $r$, thế hấp dẫn luôn có giá trị âm. Càng lại gần vật nguồn ($r$ giảm), $\\varphi$ càng âm sâu (giếng thế hấp dẫn).'
        ]
      },
      {
        heading: '2. Thế năng hấp dẫn & Công của lực hấp dẫn',
        summary: 'Thế năng hấp dẫn là năng lượng tương tác giữa các vật có khối lượng trong trường hấp dẫn.',
        details: [
          '**Công thức thế năng:** $W_t = m \\varphi = -\\frac{GMm}{r}$ (chọn mốc thế năng ở vô cực).',
          '**So sánh với công thức lớp 10 ($W_t = mgh$):** Khi xét vật ở gần mặt đất trong phạm vi hẹp ($h \\ll R$), chọn mốc thế năng tại mặt đất ($r = R$), ta có: $W_t(R+h) - W_t(R) = -\\frac{GMm}{R+h} - \\left(-\\frac{GMm}{R}\\right) = GMm \\frac{h}{R(R+h)} \\approx \\frac{GM}{R^2} m h = mgh_0$. Như vậy $mgh$ là trường hợp riêng xấp xỉ gần mặt đất.',
          '**Công của lực hấp dẫn:** Lực hấp dẫn là lực thế, công dịch chuyển vật từ vị trí 1 đến vị trí 2 không phụ thuộc hình dạng đường đi, chỉ phụ thuộc vị trí đầu và cuối: $$A_{12} = W_{t1} - W_{t2} = GMm \\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right)$$',
          '- Khi vật rơi về phía Trái Đất ($r_1 > r_2$): $A > 0$ (lực hút sinh công phát động, thế năng giảm, động năng tăng).',
          '- Khi vật bay ra xa Trái Đất ($r_1 < r_2$): $A < 0$ (lực hút cản trở, thế năng tăng).'
        ]
      },
      {
        heading: '3. Bảo toàn cơ năng trong trường hấp dẫn',
        summary: 'Khi một vật chỉ chịu tác dụng của lực hấp dẫn trong chân không, cơ năng toàn phần của vật được bảo toàn.',
        details: [
          '**Phương trình cơ năng:** $$W = W_d + W_t = \\frac{1}{2} m v^2 - \\frac{GMm}{r} = \\text{hằng số}$$',
          '**Ý nghĩa dấu của cơ năng $W$:**',
          '- **$W < 0$ (Hệ liên kết):** Động năng không đủ lớn để thắng lực hút, vật chuyển động theo quỹ đạo tròn hoặc elip khép kín quanh thiên thể.',
          '- **$W = 0$ (Trạng thái tới hạn):** Tàu vũ trụ vừa đủ vận tốc để lên tới vô cực thì dừng lại ($v_\\infty = 0$). Vận tốc ban đầu này chính là Vận tốc vũ trụ cấp 2: $$\\frac{1}{2} m v_2^2 - \\frac{GMm}{R} = 0 \\implies v_2 = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_1 \\approx 11{,}2 \\text{ km/s}$$',
          '- **$W > 0$ (Quỹ đạo hyperbol):** Vật thoát khỏi trường hấp dẫn và vẫn còn vận tốc dư ở vô cực: $v_\\infty = \\sqrt{v_0^2 - v_2^2} > 0$.'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Khi chọn mốc thế năng hấp dẫn ở vô cực, giá trị thế năng hấp dẫn của một vệ tinh quay quanh Trái Đất luôn:',
        options: [
          'Dương',
          'Bằng 0',
          'Âm',
          'Có thể âm hoặc dương tùy khối lượng vệ tinh'
        ],
        answer: 2,
        explanation: 'Với mốc thế năng ở vô cực ($W_t = 0$), vì lực hấp dẫn là lực hút nên công đưa vật từ vô cực về điểm $r$ là công phát động, thế năng tại mọi khoảng cách hữu hạn luôn có giá trị âm: $W_t = -GMm/r < 0$.'
      },
      {
        q: 'Công của lực hấp dẫn khi dịch chuyển một vật khối lượng m từ điểm cách tâm Trái Đất r₁ đến điểm r₂ có đặc điểm gì?',
        options: [
          'Phụ thuộc vào chiều dài quãng đường đi zic-zắc',
          'Chỉ phụ thuộc vị trí r₁ và r₂, bằng W_t(r₁) - W_t(r₂)',
          'Luôn luôn bằng 0',
          'Tỉ lệ thuận với bình phương thời gian chuyển động'
        ],
        answer: 1,
        explanation: 'Lực hấp dẫn là lực thế, do đó công của nó không phụ thuộc vào hình dạng quỹ đạo mà chỉ phụ thuộc vào tọa độ vị trí đầu và vị trí cuối: $A = W_{t1} - W_{t2}$.'
      },
      {
        q: 'Vận tốc vũ trụ cấp 2 ($v_2 \\approx 11{,}2\\text{ km/s}$) liên hệ với vận tốc vũ trụ cấp 1 ($v_1 \\approx 7{,}9\\text{ km/s}$) theo biểu thức nào?',
        options: [
          'v₂ = 2 v₁',
          'v₂ = v₁ / √2',
          'v₂ = √2 · v₁',
          'v₂ = v₁²'
        ],
        answer: 2,
        explanation: 'Ta có $v_1 = \\sqrt{GM/R}$ và $v_2 = \\sqrt{2GM/R}$, suy ra $v_2 = \\sqrt{2} v_1 \\approx 1{,}414 \\times 7{,}9 \\approx 11{,}2\\text{ km/s}$.'
      }
    ]
  },

  // BÀI 4
  {
    id: 'bai-4',
    num: 4,
    chuyende: 'Chuyên đề 2: Truyền thông tin bằng sóng vô tuyến',
    chuyendeId: 'cd-2',
    title: 'Bài 4. Biến điệu',
    subtitle: 'Nguyên lí điều chế sóng mang, biến điệu biên độ (AM), biến điệu tần số (FM), dải tần và hệ thống thu phát',
    desc: 'Giải thích lý do cần biến điệu (kích thước anten, suy hao dải thấp, tránh chồng lấn phổ), phân tích chi tiết AM và FM, sơ đồ khối máy phát và máy thu thanh vô tuyến.',
    tag: 'Chuyên đề 2 • Bài 4',
    badgeColor: 'emerald',
    sections: [
      {
        heading: '1. Vì sao cần biến điệu sóng mang?',
        summary: 'Tín hiệu âm thanh hoặc dữ liệu (tín hiệu âm tần) có tần số thấp ($20 \\text{ Hz} - 20 \\text{ kHz}$), không thể truyền trực tiếp vào không gian thành sóng vô tuyến được vì các nguyên nhân vật lí cốt lõi.',
        details: [
          '**Kích thước anten:** Để bức xạ sóng điện từ hiệu quả, kích thước anten phải cỡ một phần tư bước sóng: $L \\approx \\lambda/4 = c / (4f)$. Với sóng âm tần $f = 1 \\text{ kHz}$, bước sóng $\\lambda = 300 \\text{ km} \\implies$ anten phải dài tới $75 \\text{ km}$ (bất khả thi trong thực tế).',
          '**Năng lượng và suy hao:** Sóng có tần số thấp mang năng lượng bé, nhanh chóng bị tiêu hao và hấp thụ trong môi trường khí quyển.',
          '**Giao thoa chồng lấn kênh:** Nếu tất cả các đài phát đều phát trực tiếp tín hiệu âm tần vào không gian trong dải $20 \\text{ Hz} - 20 \\text{ kHz}$, toàn bộ tín hiệu sẽ chồng chéo lẫn lộn và không máy thu nào có thể lọc riêng từng đài.',
          '**Giải pháp:** Dùng một sóng điện từ cao tần gọi là **sóng mang** (Carrier wave) để "chở" tín hiệu thông tin đi xa. Quá trình trộn tín hiệu thông tin vào sóng mang gọi là **Biến điệu (Modulation)**.'
        ]
      },
      {
        heading: '2. Biến điệu biên độ (AM - Amplitude Modulation)',
        summary: 'Làm cho biên độ của sóng mang cao tần biến đổi theo quy luật của tín hiệu thông tin, trong khi tần số sóng mang được giữ nguyên.',
        details: [
          '**Biểu thức sóng AM:** Giả sử sóng mang $u_c(t) = U_c \\cos(2\\pi f_c t)$ và tín hiệu âm tần $u_m(t) = U_m \\cos(2\\pi f_m t)$. Khi biến điệu AM, biên độ tức thời của sóng mang trở thành $U(t) = U_c + u_m(t) = U_c [1 + m \\cos(2\\pi f_m t)]$, với hệ số điều chế $m = U_m / U_c \\le 1$.',
          '**Phổ tần số và Băng thông AM:** Sóng AM gồm 3 thành phần tần số: tần số sóng mang $f_c$, dải biên trên $f_c + f_m$, và dải biên dưới $f_c - f_m$. Băng thông yêu cầu là: $$B_{AM} = 2 f_{m,\\max}$$',
          '**Ưu điểm:** Mạch phát và máy thu đơn giản, chi phí rẻ, vùng phủ sóng rộng (sóng trung/sóng dài phản xạ tốt qua tầng điện li).',
          '**Nhược điểm:** Rất dễ bị nhiễu biên độ bởi sét, động cơ điện, tia lửa điện; chất lượng âm thanh trung bình.'
        ]
      },
      {
        heading: '3. Biến điệu tần số (FM - Frequency Modulation)',
        summary: 'Làm cho tần số của sóng mang biến thiên theo quy luật của tín hiệu thông tin, trong khi biên độ sóng mang được giữ không đổi.',
        details: [
          '**Nguyên lí:** Khi tín hiệu thông tin có điện áp cực đại, tần số sóng mang lệch lớn nhất về phía cao ($f_{\\max} = f_c + \\Delta f$). Khi tín hiệu thông tin có điện áp cực tiểu, tần số sóng mang lệch về phía thấp ($f_{\\min} = f_c - \\Delta f$). Độ lệch tần số cực đại gọi là $\\Delta f$ (Frequency Deviation).',
          '**Băng thông FM (Quy tắc Carson):** $$B_{FM} \\approx 2(\\Delta f + f_{m,\\max})$$ Băng thông của đài phát thanh thương mại FM thường chiếm khoảng $150 - 200 \\text{ kHz}$ (lớn hơn nhiều so với AM chỉ cần $\\approx 10 - 20 \\text{ kHz}$).',
          '**Ưu điểm:** Khả năng chống nhiễu tuyệt vời (vì hầu hết nhiễu khí quyển là nhiễu biên độ, có thể dùng mạch hạn chế biên độ để cắt bỏ), chất lượng âm thanh trung thực cao (Hi-Fi, Stereo).',
          '**Nhược điểm:** Chiếm băng thông lớn, truyền thẳng ở dải VHF nên cự li phủ sóng giới hạn trong tầm nhìn thẳng (line-of-sight, khoảng vài chục đến 100 km).'
        ]
      },
      {
        heading: '4. Sơ đồ khối hệ thống thu phát sóng vô tuyến',
        summary: 'Các khối chức năng cơ bản của máy phát và máy thu thanh vô tuyến.',
        details: [
          '**Sơ đồ khối Máy phát thanh:** Micro (chuyển âm thanh thành dao động điện âm tần) $\\to$ Mạch khuếch đại âm tần $\\to$ Máy phát sóng cao tần (tạo sóng mang) $\\to$ Mạch biến điệu (trộn âm tần vào sóng mang) $\\to$ Mạch khuếch đại cao tần $\\to$ Anten phát.',
          '**Sơ đồ khối Máy thu thanh:** Anten thu (thu tất cả các sóng điện từ đến nó) $\\to$ Mạch chọn sóng (khung dao động LC cộng hưởng để chọn đúng tần số đài cần nghe) $\\to$ Mạch khuếch đại cao tần $\\to$ Mạch tách sóng (Demodulator: lọc bỏ sóng mang cao tần, lấy lại tín hiệu âm tần) $\\to$ Mạch khuếch đại âm tần $\\to$ Loa (biến dao động điện âm tần thành sóng âm).'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Mục đích chính của việc biến điệu (modulation) trong truyền thông tin vô tuyến là gì?',
        options: [
          'Tăng âm lượng của bài hát lên gấp nhiều lần',
          'Trộn tín hiệu âm tần mang thông tin vào sóng mang cao tần để truyền đi xa với anten nhỏ gọn',
          'Chuyển đổi tín hiệu vô tuyến thành dòng điện xoay chiều 220V',
          'Ngăn không cho người khác nghe trộm thông tin'
        ],
        answer: 1,
        explanation: 'Tín hiệu âm tần có tần số nhỏ, bước sóng lớn, không thể truyền xa và đòi hỏi anten khổng lồ. Biến điệu giúp gắn thông tin vào sóng mang cao tần để bức xạ hiệu quả với kích thước anten hợp lí.'
      },
      {
        q: 'Điểm khác biệt căn bản giữa biến điệu AM và FM là:',
        options: [
          'AM làm biến đổi biên độ sóng mang, FM làm biến đổi tần số sóng mang',
          'AM chỉ truyền được hình ảnh, FM chỉ truyền được chữ viết',
          'AM giữ nguyên biên độ, FM thay đổi biên độ',
          'AM dùng tần số cao hơn FM gấp 1000 lần'
        ],
        answer: 0,
        explanation: 'Trong AM (Amplitude Modulation), biên độ sóng mang biến đổi theo tín hiệu thông tin. Trong FM (Frequency Modulation), tần số sóng mang biến đổi theo tín hiệu thông tin trong khi biên độ giữ không đổi.'
      },
      {
        q: 'Bộ phận nào trong máy thu thanh có nhiệm vụ tách lấy tín hiệu âm tần ra khỏi sóng mang cao tần?',
        options: [
          'Anten thu',
          'Mạch chọn sóng',
          'Mạch tách sóng (Demodulator)',
          'Loa điện động'
        ],
        answer: 2,
        explanation: 'Mạch tách sóng (Demodulator) có nhiệm vụ loại bỏ thành phần sóng mang cao tần và giữ lại dao động âm tần gốc trước khi đưa qua mạch khuếch đại để ra loa.'
      }
    ]
  },

  // BÀI 5
  {
    id: 'bai-5',
    num: 5,
    chuyende: 'Chuyên đề 2: Truyền thông tin bằng sóng vô tuyến',
    chuyendeId: 'cd-2',
    title: 'Bài 5. Tín hiệu tương tự và tín hiệu số',
    subtitle: 'Bản chất tín hiệu Analog và Digital, quá trình biến đổi ADC/DAC và điều chế mã xung (PCM)',
    desc: 'So sánh tín hiệu liên tục (Analog) và tín hiệu xung rời rạc (Digital), các ưu nhược điểm cốt lõi, quy trình biến đổi ADC qua 3 bước: Lấy mẫu (Sampling), Lượng tử hóa (Quantization) và Mã hóa (Encoding).',
    tag: 'Chuyên đề 2 • Bài 5',
    badgeColor: 'emerald',
    sections: [
      {
        heading: '1. Bản chất Tín hiệu tương tự (Analog) & Tín hiệu số (Digital)',
        summary: 'Tín hiệu là đại lượng vật lí (thường là điện áp hoặc dòng điện) biến đổi theo thời gian để mang và biểu diễn thông tin.',
        details: [
          '**Tín hiệu tương tự (Analog Signal):** Là tín hiệu liên tục theo cả thời gian và biên độ. Điện áp $u(t)$ có thể nhận bất kì giá trị thực nào trong một dải liên tục. Ví dụ: tín hiệu điện áp từ micro màng rung, nhiệt độ môi trường, áp suất âm thanh.',
          '**Tín hiệu số (Digital Signal):** Là tín hiệu rời rạc theo thời gian và chỉ nhận một số hữu hạn các mức giá trị (thường là hai mức logic: mức cao tương ứng bit 1 và mức thấp tương ứng bit 0). Ví dụ: dãy bit dữ liệu trong máy tính, file âm thanh MP3, tín hiệu mạng quang.'
        ]
      },
      {
        heading: '2. So sánh ưu và nhược điểm của Tín hiệu số so với Tương tự',
        summary: 'Công nghệ thông tin hiện đại chuyển đổi hoàn toàn sang kĩ thuật số nhờ những ưu thế vượt trội.',
        details: [
          '**Khả năng chống nhiễu vượt trội:** Nhiễu đường truyền làm méo dạng tín hiệu analog vĩnh viễn không thể khôi phục hoàn hảo. Trong tín hiệu số, chỉ cần phân biệt được mức 0 và mức 1 tại các ngưỡng, mạch phục hồi (Regenerator) có thể tái tạo lại xung vuông sạch hoàn hảo không bị tích tụ nhiễu sau nhiều trạm lặp.',
          '**Bảo mật và mã hóa:** Tín hiệu số có thể dễ dàng mã hóa bằng các thuật toán mật mã tinh vi (AES, RSA) để chống nghe lén.',
          '**Nén dữ liệu và lưu trữ dung lượng lớn:** Tín hiệu số dễ dàng nén (nén có tổn hao như MP3, JPEG hoặc nén không tổn hao như ZIP, FLAC), lưu trữ trên ổ cứng SSD, thẻ nhớ không bị suy hao theo thời gian.',
          '**Truyền đa dịch vụ:** Âm thanh, hình ảnh, văn bản, dữ liệu điều khiển đều quy về các dòng bit 0 và 1, cùng truyền trên một kênh truyền thông nhất.',
          '**Nhược điểm:** Cần mạch chuyển đổi phức tạp (ADC, DAC), đòi hỏi băng thông truyền dẫn cao hơn nếu không nén.'
        ]
      },
      {
        heading: '3. Quá trình biến đổi Analog sang Digital (ADC) qua điều chế mã xung (PCM)',
        summary: 'Để đưa tín hiệu tương tự vào hệ thống số, bộ biến đổi ADC (Analog-to-Digital Converter) thực hiện qua 3 công đoạn chuẩn hóa.',
        details: [
          '**Bước 1 - Lấy mẫu (Sampling):** Đo biên độ tín hiệu tương tự tại các thời điểm rời rạc cách đều nhau một chu kì lấy mẫu $T_s$.',
          '- *Định lí lấy mẫu Nyquist-Shannon:* Để có thể khôi phục lại hoàn toàn tín hiệu tương tự ban đầu mà không bị chồng phổ (aliasing), tần số lấy mẫu $f_s = 1/T_s$ tối thiểu phải gấp đôi tần số cao nhất có trong phổ tín hiệu: $$f_s \\ge 2 f_{\\max}$$ Ví dụ: Âm thanh con người nghe tối đa $20 \\text{ kHz} \\implies$ đĩa CD chọn tần số lấy mẫu chuẩn là $f_s = 44{,}1 \\text{ kHz} > 2 \\times 20 \\text{ kHz}$.',
          '**Bước 2 - Lượng tử hóa (Quantization):** Làm tròn giá trị biên độ mẫu đo được về mức lượng tử rời rạc gần nhất. Nếu sử dụng $n$ bit để mã hóa một mẫu thì có $2^n$ mức lượng tử. Quá trình làm tròn này gây ra một sai số nhỏ gọi là *nhiễu lượng tử hóa (Quantization Noise)*. Tăng số bit $n$ sẽ giảm nhiễu lượng tử.',
          '**Bước 3 - Mã hóa (Encoding):** Chuyển đổi chỉ số của mức lượng tử thành một từ nhị phân gồm $n$ bit (các số 0 và 1).',
          '**Tốc độ bit (Bitrate):** Tốc độ truyền dòng bit số được tính bằng: $$R = f_s \\times n \\times c$$ (với $c$ là số kênh, ví dụ âm thanh stereo $c = 2$). Đĩa CD: $44.100 \\times 16 \\times 2 = 1.411.200 \\text{ bps} \\approx 1{,}411 \\text{ Mbps}$.'
        ]
      },
      {
        heading: '4. Biến đổi Digital sang Analog (DAC) để phát lại',
        summary: 'Bộ DAC (Digital-to-Analog Converter) nhận chuỗi bit nhị phân, giải mã thành các mức điện áp bậc thang và cho đi qua bộ lọc thông thấp (Low-pass Filter) làm mượt đường cong để tái tạo lại âm thanh mượt mà đưa ra loa.'
      }
    ],
    quizzes: [
      {
        q: 'Theo định lí lấy mẫu Nyquist-Shannon, để khôi phục chính xác tín hiệu tương tự có tần số cực đại 15 kHz, tần số lấy mẫu tối thiểu phải là:',
        options: [
          '15 kHz',
          '30 kHz',
          '7,5 kHz',
          '60 kHz'
        ],
        answer: 1,
        explanation: 'Định lí Nyquist yêu cầu tần số lấy mẫu $f_s \\ge 2 f_{\\max}$. Với $f_{\\max} = 15 \\text{ kHz}$ thì $f_s \\ge 2 \\times 15 = 30 \\text{ kHz}$.'
      },
      {
        q: 'Nếu một bộ chuyển đổi ADC sử dụng 8 bit để lượng tử hóa biên độ tín hiệu, số mức lượng tử có thể biểu diễn là:',
        options: [
          '8 mức',
          '64 mức',
          '128 mức',
          '256 mức'
        ],
        answer: 3,
        explanation: 'Số mức lượng tử với $n$ bit mã hóa là $2^n$. Với $n = 8$, số mức là $2^8 = 256$ mức.'
      },
      {
        q: 'Tại sao tín hiệu số có khả năng chống nhiễu vượt trội hơn hẳn so với tín hiệu tương tự trên đường truyền dài?',
        options: [
          'Vì tín hiệu số truyền trong dây dẫn không bao giờ bị suy hao năng lượng',
          'Vì các trạm lặp có thể tái tạo lại xung vuông chuẩn (mức 0 và 1) mà không truyền tiếp nhiễu méo dạng',
          'Vì tín hiệu số có tần số bằng không nên không bị ảnh hưởng bởi điện trường',
          'Vì tín hiệu số luôn truyền bằng sóng ánh sáng'
        ],
        answer: 1,
        explanation: 'Tại các trạm lặp (regenerator), tín hiệu số chỉ cần được so sánh với ngưỡng để tái tạo lại xung vuông chuẩn 0/1 ban đầu, loại bỏ hoàn toàn các biến dạng biên độ do nhiễu gây ra trên đường truyền.'
      }
    ]
  },

  // BÀI 6
  {
    id: 'bai-6',
    num: 6,
    chuyende: 'Chuyên đề 2: Truyền thông tin bằng sóng vô tuyến',
    chuyendeId: 'cd-2',
    title: 'Bài 6. Suy giảm tín hiệu',
    subtitle: 'Môi trường truyền dẫn, nguyên nhân suy giảm năng lượng, đơn vị dB, dB/km, dBm và giải pháp nâng cao chất lượng',
    desc: 'Phân tích suy giảm tín hiệu trong môi trường có dây (cáp xoắn, cáp đồng trục, sợi quang) và không dây, công thức tính độ suy giảm theo Decibel (dB, dBm), hệ số suy giảm α (dB/km).',
    tag: 'Chuyên đề 2 • Bài 6',
    badgeColor: 'emerald',
    sections: [
      {
        heading: '1. Các môi trường truyền dẫn cơ bản',
        summary: 'Thông tin được truyền qua hai nhóm môi trường chính: truyền dẫn hữu tuyến (có dây) và truyền dẫn vô tuyến (không dây).',
        details: [
          '**Cáp xoắn đôi (Twisted Pair):** Gồm các cặp dây đồng bọc cách điện xoắn chặt với nhau nhằm giảm nhiễu điện từ chéo (crosstalk). Dùng phổ biến trong mạng LAN Ethernet (cáp UTP/STP Cat5e/Cat6), cự li ngắn (< 100 m).',
          '**Cáp đồng trục (Coaxial Cable):** Gồm lõi đồng trung tâm, lớp điện môi cách điện, lớp lưới kim loại bọc ngoài chống nhiễu và vỏ bảo vệ. Dùng trong truyền hình cáp, đường nối anten với máy phát/máy thu.',
          '**Cáp sợi quang (Optical Fiber):** Truyền tín hiệu bằng các xung ánh sáng dựa trên hiện tượng **phản xạ toàn phần** bên trong lõi thủy tinh (core) có chiết suất lớn hơn lớp vỏ bọc (cladding). Ưu điểm: Băng thông khổng lồ, suy hao cực thấp, hoàn toàn miễn nhiễm với nhiễu điện từ trường.',
          '**Truyền dẫn vô tuyến (Không dây):** Sử dụng sóng điện từ lan truyền trong khí quyển hoặc chân không (sóng mặt, sóng tầng đối lưu, sóng phản xạ tầng điện li, sóng vệ tinh tầm nhìn thẳng).'
        ]
      },
      {
        heading: '2. Bản chất hiện tượng suy giảm và nguyên nhân',
        summary: 'Suy giảm tín hiệu (Attenuation) là sự giảm công suất của tín hiệu khi truyền đi dọc theo môi trường truyền dẫn.',
        details: [
          '**Trong môi trường có dây:**',
          '- Điện trở thuần của ruột dẫn dây đồng tỏa nhiệt Joule ($I^2 R$).',
          '- Rò rỉ điện môi qua lớp cách điện.',
          '- Tán xạ ánh sáng (Rayleigh scattering) do bất đồng nhất mật độ thủy tinh và hấp thụ quang học của các ion tạp chất trong sợi quang.',
          '**Trong môi trường vô tuyến:**',
          '- Suy hao trong không gian tự do (Free-space path loss): Năng lượng sóng điện từ phân bố trên diện tích mặt cầu ngày càng lớn tỉ lệ với $r^2$.',
          '- Hấp thụ và tán xạ bởi các phân tử khí quyển, hơi nước, mưa, mây, sương mù.',
          '- Khúc xạ, phản xạ, nhiễu xạ khi gặp địa hình núi non, nhà cao tầng trong đô thị.'
        ]
      },
      {
        heading: '3. Đơn vị Decibel (dB), dB/km và dBm',
        summary: 'Decibel là đơn vị tỉ số logarit được dùng rộng rãi trong kĩ thuật viễn thông để biểu diễn sự suy giảm hoặc khuếch đại công suất.',
        details: [
          '**Độ suy giảm công suất tính bằng dB:** $$A_{\\text{dB}} = 10 \\log_{10} \\left(\\frac{P_{\\text{vào}}}{P_{\\text{ra}}}\\right)$$',
          '- Nếu $P_{\\text{ra}} = P_{\\text{vào}} / 2$ thì $A = 10 \\log_{10}(2) \\approx 3 \\text{ dB}$ (công suất giảm 1 nửa tương ứng suy giảm $3 \\text{ dB}$).',
          '- Nếu $P_{\\text{ra}} = P_{\\text{vào}} / 10$ thì $A = 10 \\log_{10}(10) = 10 \\text{ dB}$ (công suất giảm 10 lần).',
          '- Nếu $P_{\\text{ra}} = P_{\\text{vào}} / 100$ thì $A = 10 \\log_{10}(100) = 20 \\text{ dB}$ (công suất giảm 100 lần).',
          '**Công suất đầu ra tính ngược lại:** $$P_{\\text{ra}} = P_{\\text{vào}} \\times 10^{-A_{\\text{dB}}/10}$$',
          '**Hệ số suy giảm theo chiều dài $\\alpha$ (dB/km):** $$\\alpha = \\frac{A_{\\text{dB}}}{L} \\implies A_{\\text{dB}} = \\alpha \\times L$$ (với $L$ là chiều dài tuyến truyền dẫn tính bằng km). Sợi quang chuẩn viễn thông ở bước sóng $1550 \\text{ nm}$ có $\\alpha$ cực thấp, chỉ khoảng $0{,}2 \\text{ dB/km}$.',
          '**Mức công suất tuyệt đối theo dBm:** Đo công suất so với mốc chuẩn $1 \\text{ mW}$ ($10^{-3} \\text{ W}$): $$P_{\\text{dBm}} = 10 \\log_{10} \\left(\\frac{P}{1 \\text{ mW}}\\right)$$ Ví dụ: $1 \\text{ mW} = 0 \\text{ dBm}$; $10 \\text{ mW} = 10 \\text{ dBm}$; $1 \\text{ W} = 1000 \\text{ mW} = 30 \\text{ dBm}$.'
        ]
      },
      {
        heading: '4. Biện pháp hạn chế suy giảm & Nâng cao chất lượng truyền',
        summary: 'Các kĩ thuật thực tế bảo toàn mức công suất và tỉ số tín hiệu trên tạp âm (SNR).',
        details: [
          '**Bộ khuếch đại (Amplifier) & Trạm lặp (Repeater):** Đặt xen kẽ trên các cung truyền dẫn dài để nâng công suất tín hiệu trước khi nó chìm dưới ngưỡng nhạy của máy thu.',
          '**Chọn bước sóng truyền tối ưu:** Trong cáp quang, chọn các "cửa sổ quang học" có độ hấp thụ tối thiểu (như dải bước sóng $1310 \\text{ nm}$ và $1550 \\text{ nm}$).',
          '**Che chắn chống nhiễu (Shielding):** Dùng lớp bọc kim loại bện, dùng dây xoắn đôi để triệt tiêu can nhiễu điện từ bên ngoài.',
          '**Anten có độ định hướng cao:** Sử dụng chảo parabol hội tụ năng lượng sóng theo một búp sóng hẹp hướng thẳng về trạm thu đối diện.'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Công suất tín hiệu tại đầu vào đường dây là 100 mW, tại đầu ra còn lại 1 mW. Độ suy giảm của đường dây tính theo đơn vị dB là:',
        options: [
          '10 dB',
          '20 dB',
          '50 dB',
          '100 dB'
        ],
        answer: 1,
        explanation: 'Ta có $A = 10 \\log_{10}(P_{\\text{vào}} / P_{\\text{ra}}) = 10 \\log_{10}(100 / 1) = 10 \\times 2 = 20 \\text{ dB}$.'
      },
      {
        q: 'Một tuyến cáp sợi quang dài 40 km có hệ số suy giảm α = 0,2 dB/km. Tổng độ suy giảm trên toàn bộ tuyến cáp là:',
        options: [
          '8 dB',
          '0,2 dB',
          '20 dB',
          '80 dB'
        ],
        answer: 0,
        explanation: 'Tổng suy giảm $A = \\alpha \\times L = 0{,}2 \\text{ dB/km} \\times 40 \\text{ km} = 8 \\text{ dB}$.'
      },
      {
        q: 'Mức công suất P = 1 W tương ứng với bao nhiêu dBm?',
        options: [
          '0 dBm',
          '10 dBm',
          '20 dBm',
          '30 dBm'
        ],
        answer: 3,
        explanation: 'Đổi $1 \\text{ W} = 1000 \\text{ mW}$. Do đó $P_{\\text{dBm}} = 10 \\log_{10}(1000 / 1) = 10 \\times 3 = 30 \\text{ dBm}$.'
      }
    ]
  },

  // BÀI 7
  {
    id: 'bai-7',
    num: 7,
    chuyende: 'Chuyên đề 3: Mở đầu điện tử học',
    chuyendeId: 'cd-3',
    title: 'Bài 7. Cảm biến',
    subtitle: 'Khái niệm cảm biến, điện trở quang LDR, nhiệt điện trở NTC/PTC, mạch cầu phân áp và mạch cầu Wheatstone',
    desc: 'Phân loại cảm biến, khảo sát đặc tuyến biến thiên điện trở theo cường độ sáng (LDR) và theo nhiệt độ (NTC/PTC), thiết kế mạch cầu phân áp tạo tín hiệu điện áp đưa vào mạch điều khiển.',
    tag: 'Chuyên đề 3 • Bài 7',
    badgeColor: 'violet',
    sections: [
      {
        heading: '1. Khái niệm & Phân loại cảm biến (Sensors)',
        summary: 'Cảm biến là thiết bị nhận biết và biến đổi một đại lượng vật lí hoặc hóa học của môi trường thành tín hiệu điện (thường là sự biến đổi điện trở, điện áp hoặc dòng điện) để mạch xử lí có thể đo lường và điều khiển.',
        details: [
          '**Phân loại theo đại lượng đo:** Cảm biến ánh sáng (LDR, photodiode), cảm biến nhiệt độ (thermistor, thermocouple), cảm biến áp suất, cảm biến khí gas (MQ-2), cảm biến khoảng cách hồng ngoại/siêu âm.',
          '**Phân loại theo năng lượng:** Cảm biến thụ động (cần cấp nguồn điện để tạo tín hiệu như biến trở, LDR, thermistor) và cảm biến chủ động (tự phát sinh điện áp như pin mặt trời, cảm biến áp điện piezo).'
        ]
      },
      {
        heading: '2. Điện trở quang (LDR - Light Dependent Resistor)',
        summary: 'LDR là một linh kiện quang bán dẫn có điện trở thay đổi mạnh theo cường độ ánh sáng chiếu vào bề mặt.',
        details: [
          '**Bản chất vật lí:** Được làm từ vật liệu bán dẫn (như Cadmium Sulfide - CdS). Trong bóng tối, các electron tự do rất ít, điện trở rất cao ($R_{\\text{tối}} \\approx 100 \\text{ k}\\Omega - 10 \\text{ M}\\Omega$). Khi được chiếu sáng, các photon ánh sáng giải phóng các cặp electron - lỗ trống, làm mật độ hạt tải điện tăng vọt, điện trở giảm mạnh ($R_{\\text{sáng}} \\approx 100 \\,\\Omega - vài \\text{ k}\\Omega$).',
          '**Quy luật cốt lõi:** **Ánh sáng càng mạnh $\\implies$ Điện trở LDR càng giảm** (và ngược lại: trời càng tối $\\implies R_{LDR}$ càng lớn).'
        ]
      },
      {
        heading: '3. Điện trở nhiệt (Thermistor)',
        summary: 'Là linh kiện bán dẫn có điện trở biến thiên nhạy cảm theo nhiệt độ môi trường.',
        details: [
          '**Nhiệt điện trở có hệ số nhiệt điện trở âm (NTC - Negative Temperature Coefficient):** Phổ biến nhất. Khi nhiệt độ tăng, các electron liên kết bứt ra thành electron tự do nhiều hơn $\\implies$ **Nhiệt độ tăng $\\implies$ Điện trở NTC giảm**.',
          '**Nhiệt điện trở có hệ số nhiệt điện trở dương (PTC - Positive Temperature Coefficient):** Thường dùng làm cầu chì tự phục hồi hoặc cảm biến quá nhiệt. **Nhiệt độ tăng $\\implies$ Điện trở PTC tăng** mạnh khi vượt qua một nhiệt độ ngưỡng.',
          'So với nhiệt kế kim loại (như dây bạch kim Pt100), thermistor có độ nhạy rất cao trong dải nhiệt độ hẹp (từ $-50^\\circ\\text{C}$ đến $150^\\circ\\text{C}$), kích thước nhỏ gọn và phản hồi nhanh.'
        ]
      },
      {
        heading: '4. Biến đổi thay đổi điện trở thành tín hiệu điện áp (Mạch phân áp)',
        summary: 'Bộ vi xử lí hoặc bộ khuếch đại thuật toán không đo trực tiếp điện trở mà đọc tín hiệu điện áp. Mạch phân áp (cầu chia áp) là giải pháp tiêu chuẩn.',
        details: [
          '**Mạch phân áp cơ bản:** Mắc nối tiếp một điện trở chuẩn $R_1$ và một cảm biến biến đổi điện trở $R_2$ dưới điện áp nguồn cấp $V_s$. Điện áp đầu ra lấy trên $R_2$ được tính bằng: $$U_{\\text{ra}} = V_s \\frac{R_2}{R_1 + R_2}$$',
          '**Phân tích mạch cảm biến ánh sáng:**',
          '- *TH1: LDR ở vị trí $R_2$ (dưới đất):* Khi trời sáng $\\implies R_2$ giảm $\\implies U_{\\text{ra}}$ giảm. Khi trời tối $\\implies R_2$ tăng $\\implies U_{\\text{ra}}$ tăng (rất thích hợp kích hoạt đèn ngủ, đèn đường bật sáng khi trời tối).',
          '- *TH2: LDR ở vị trí $R_1$ (phía nguồn):* Khi trời sáng $\\implies R_1$ giảm $\\implies U_{\\text{ra}}$ tăng (thích hợp điều khiển rèm cửa tự động mở khi trời sáng).',
          '**Mạch cầu Wheatstone:** Dùng khi cần đo biến thiên điện trở cực nhỏ (như cảm biến biến dạng strain gauge). Cầu gồm 4 điện trở tạo thành 2 nhánh phân áp; cầu cân bằng khi $R_1 / R_2 = R_3 / R_4$, khi đó điện áp chênh lệch giữa hai nhánh bằng 0.'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Khi cường độ ánh sáng chiếu vào bề mặt điện trở quang (LDR) tăng lên thì điện trở của LDR sẽ:',
        options: [
          'Tăng lên tương ứng',
          'Giảm đi rõ rệt',
          'Giữ nguyên không đổi',
          'Ban đầu giảm sau đó tăng vọt'
        ],
        answer: 1,
        explanation: 'Khi chiếu sáng, các photon cung cấp năng lượng giải phóng hạt dẫn điện trong bán dẫn làm tăng độ dẫn điện, do đó điện trở của LDR giảm mạnh khi trời sáng.'
      },
      {
        q: 'Một nhiệt điện trở NTC có đặc điểm nhiệt điện trở như thế nào?',
        options: [
          'Nhiệt độ càng tăng thì điện trở càng tăng',
          'Nhiệt độ càng tăng thì điện trở càng giảm',
          'Điện trở hoàn toàn không phụ thuộc nhiệt độ',
          'Điện trở giảm về 0 ở nhiệt độ sôi của nước'
        ],
        answer: 1,
        explanation: 'NTC viết tắt của Negative Temperature Coefficient (hệ số nhiệt điện trở âm), nghĩa là khi nhiệt độ tăng thì điện trở của linh kiện giảm.'
      },
      {
        q: 'Trong mạch phân áp gồm R₁ = 10 kΩ mắc nối tiếp với R₂ = 10 kΩ dưới nguồn Vs = 12 V. Điện áp đầu ra U_ra lấy trên R₂ bằng:',
        options: [
          '12 V',
          '6 V',
          '0 V',
          '24 V'
        ],
        answer: 1,
        explanation: 'Áp dụng công thức phân áp: $U_{\\text{ra}} = V_s \\frac{R_2}{R_1 + R_2} = 12 \\times \\frac{10}{10 + 10} = 6 \\text{ V}$.'
      }
    ]
  },

  // BÀI 8
  {
    id: 'bai-8',
    num: 8,
    chuyende: 'Chuyên đề 3: Mở đầu điện tử học',
    chuyendeId: 'cd-3',
    title: 'Bài 8. Bộ khuếch đại thuật toán và thiết bị đầu ra',
    subtitle: 'Khuếch đại thuật toán (Op-Amp), chế độ so sánh (Comparator), Relay điện từ, Diode dập xung và mạch điều khiển LED',
    desc: 'Cấu tạo và đặc tính Op-Amp lí tưởng, nguyên lí làm việc ở chế độ so sánh điện áp, nguyên lí hoạt động của relay và tính điện trở hạn dòng bảo vệ LED.',
    tag: 'Chuyên đề 3 • Bài 8',
    badgeColor: 'violet',
    sections: [
      {
        heading: '1. Bộ khuếch đại thuật toán (Op-Amp - Operational Amplifier)',
        summary: 'Op-Amp là một vi mạch tích hợp khuếch đại dòng một chiều có độ lợi điện áp cực cao, gồm hai đầu vào và một đầu ra.',
        details: [
          '**Kí hiệu và chân tín hiệu:**',
          '- Đầu vào không đảo ($V_+$ hoặc Non-inverting input).',
          '- Đầu vào đảo ($V_-$ hoặc Inverting input).',
          '- Đầu ra ($V_{\\text{out}}$).',
          '- Hai chân cấp nguồn: nguồn dương $+V_{CC}$ và nguồn âm $-V_{EE}$ (hoặc mass GND trong nguồn đơn).',
          '**Đặc tính của Op-Amp lí tưởng:** Hệ số khuếch đại vòng hở vô cùng lớn ($A_v \\to \\infty$), trở kháng đầu vào vô cùng lớn ($R_{\\text{in}} \\to \\infty \\implies I_+ = I_- = 0$, không hút dòng từ cảm biến), trở kháng đầu ra bằng 0 ($R_{\\text{out}} = 0$).',
          '**Chế độ so sánh điện áp (Comparator Mode):** Không dùng mạch hồi tiếp âm.',
          '- Nếu $V_+ > V_-$: Đầu ra bão hòa ở mức điện áp cao xấp xỉ nguồn dương ($V_{\\text{out}} \\approx +V_{CC}$).',
          '- Nếu $V_+ < V_-$: Đầu ra bão hòa ở mức điện áp thấp xấp xỉ nguồn âm hoặc đất ($V_{\\text{out}} \\approx -V_{EE}$ hoặc $0 \\text{ V}$).',
          'Ứng dụng: So sánh điện áp cảm biến với một điện áp chuẩn $V_{\\text{ref}}$ (tạo bởi biến trở) để đưa ra quyết định bật/tắt.'
        ]
      },
      {
        heading: '2. Rơ-le điện từ (Relay) và Diode bảo vệ (Flyback Diode)',
        summary: 'Relay là công tắc đóng cắt mạch điện vận hành bằng cuộn hút điện từ, cho phép tín hiệu điện áp/dòng điện nhỏ từ vi mạch điều khiển mạch công suất lớn.',
        details: [
          '**Cấu tạo:** Cuộn dây điện từ, lõi sắt non, tiếp điểm chuyển mạch gồm tiếp điểm thường mở (NO - Normally Open) và thường đóng (NC - Normally Closed). Khi có dòng điện chạy qua cuộn dây, từ trường hút lưỡi tiếp điểm đóng NO nối tải lớn (như máy bơm nước 220V, còi hú cảnh báo, bóng đèn sợi đốt công suất lớn).',
          '**Tại sao bắt buộc phải có Diode mắc song song ngược chiều với cuộn hút relay?** Cuộn dây relay là một linh kiện có độ tự cảm $L$. Khi ngắt dòng điện đột ngột ($di/dt \\to -\\infty$), cuộn cảm sinh ra một suất điện động tự cảm ngược cực kì lớn ($e_{tc} = -L di/dt$) lên đến hàng trăm vôn. Xung điện áp cao này sẽ đánh thủng và phá hủy lập tức bóng bán dẫn hoặc Op-Amp điều khiển. **Diode dập xung (Flyback diode)** được mắc song song ngược với cuộn dây sẽ dẫn dòng ngắn mạch cho suất điện động này tiêu tán an toàn qua nội trở cuộn dây.'
        ]
      },
      {
        heading: '3. Đi-ốt phát quang (LED) & Điện trở hạn dòng',
        summary: 'LED là linh kiện bán dẫn phát ra ánh sáng khi có dòng điện thuận chạy qua, cần có điện trở nối tiếp để bảo vệ không bị cháy.',
        details: [
          '**Đặc điểm LED:** Có điện áp rơi thuận đặc trưng $U_{LED}$ (khoảng $1{,}8 - 2{,}2 \\text{ V}$ cho LED đỏ/vàng; $3{,}0 - 3{,}3 \\text{ V}$ cho LED xanh lam/trắng) và dòng định mức an toàn $I_{LED}$ (thường từ $10 \\text{ mA}$ đến $20 \\text{ mA} = 0{,}01 - 0{,}02 \\text{ A}$).',
          '**Công thức tính điện trở hạn dòng nối tiếp $R$:** Khi cấp điện áp $U_{\\text{ra}}$ cho LED: $$R = \\frac{U_{\\text{ra}} - U_{LED}}{I_{LED}}$$ Ví dụ: Với nguồn $U_{\\text{ra}} = 5 \\text{ V}$, dùng LED đỏ ($U_{LED} = 2 \\text{ V}$), chọn dòng $I_{LED} = 15 \\text{ mA} = 0{,}015 \\text{ A}$: $$R = \\frac{5 - 2}{0{,}015} = 200 \\,\\Omega$$ (trong thực tế chọn điện trở thương mại $220 \\,\\Omega$). Nếu không có điện trở $R$, dòng điện tăng vọt sẽ làm nổ hoặc cháy hỏng lớp tiếp giáp p-n của LED.'
        ]
      },
      {
        heading: '4. Bộ hiển thị và phương pháp hiệu chuẩn',
        summary: 'Đo điện áp đầu ra bằng vôn kế số hoặc màn hình số và điều chỉnh điểm đặt.',
        details: [
          '**Hiệu chuẩn (Calibration):** Dùng một biến trở (potentiometer) để tinh chỉnh điện áp chuẩn $V_{\\text{ref}}$ nối vào chân $V_-$ của Op-Amp. Đặt cảm biến vào điều kiện môi trường kích hoạt mong muốn (ví dụ: cường độ sáng khi hoàng hôn buông xuống, hoặc nhiệt độ $40^\\circ\\text{C}$ khi có dấu hiệu cháy), sau đó xoay nhẹ biến trở cho đến khi đầu ra Op-Amp vừa chuyển trạng thái (LED bật sáng hoặc relay đóng tạch).'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Trong chế độ so sánh điện áp của Op-Amp (cấp nguồn đơn 0 - 9V), nếu điện áp chân không đảo V₊ = 4,5V lớn hơn điện áp chân đảo V₋ = 3,0V thì điện áp đầu ra V_out xấp xỉ bằng:',
        options: [
          '0 V',
          '1,5 V',
          '9 V',
          '7,5 V'
        ],
        answer: 2,
        explanation: 'Khi hoạt động ở chế độ so sánh không hồi tiếp, nếu $V_+ > V_-$ thì đầu ra bão hòa dương, xấp xỉ điện áp nguồn cấp dương ($+V_{CC} = 9 \\text{ V}$).'
      },
      {
        q: 'Tại sao cần mắc một diode song song ngược cực với cuộn hút của rơ-le điện từ?',
        options: [
          'Để làm cho rơ-le hút nhanh hơn gấp đôi',
          'Để dập xung điện áp tự cảm cao sinh ra khi ngắt dòng, bảo vệ linh kiện bán dẫn',
          'Để biến đổi dòng xoay chiều thành dòng một chiều',
          'Để làm đèn báo tín hiệu nguồn'
        ],
        answer: 1,
        explanation: 'Khi ngắt điện, cuộn cảm relay sinh ra suất điện động tự cảm rất lớn ($e_{tc} = -L \\frac{di}{dt}$) có thể làm hỏng transistor/Op-Amp điều khiển. Diode dập xung mắc ngược sẽ khép kín dòng điện này để tiêu tán an toàn.'
      },
      {
        q: 'Cần nối một LED xanh lá (U_LED = 2,2 V, dòng I_LED = 20 mA) vào nguồn điện áp ra 6,2 V. Điện trở hạn dòng R cần chọn là:',
        options: [
          '100 Ω',
          '200 Ω',
          '310 Ω',
          '420 Ω'
        ],
        answer: 1,
        explanation: 'Áp dụng công thức $R = \\frac{U_{\\text{ra}} - U_{LED}}{I_{LED}} = \\frac{6{,}2 - 2{,}2}{0{,}02} = \\frac{4}{0{,}02} = 200 \\,\\Omega$.'
      }
    ]
  },

  // BÀI 9
  {
    id: 'bai-9',
    num: 9,
    chuyende: 'Chuyên đề 3: Mở đầu điện tử học',
    chuyendeId: 'cd-3',
    title: 'Bài 9. Mạch điện đơn giản có sử dụng thiết bị đầu ra',
    subtitle: 'Thiết kế các mạch điều khiển tự động: Đèn bật khi trời tối, cảnh báo cháy nổ khí gas, vòi nước cảm ứng hồng ngoại',
    desc: 'Tích hợp toàn diện cảm biến, mạch phân áp, Op-Amp so sánh, thiết bị đầu ra (relay, còi buzzer, LED) vào 3 dự án thực tế; quy trình thiết kế, thi công mạch và quy tắc an toàn điện tử.',
    tag: 'Chuyên đề 3 • Bài 9',
    badgeColor: 'violet',
    sections: [
      {
        heading: '1. Cấu trúc tổng quát của Mạch điều khiển tự động dùng cảm biến',
        summary: 'Mọi hệ thống điều khiển tự động cơ bản đều tuân theo chu trình 3 tầng: Thu nhận tín hiệu $\\to$ Xử lí và so sánh $\\to$ Cơ cấu chấp hành đầu ra.',
        details: [
          '**Khối 1 - Cảm biến & Cầu phân áp:** Chuyển đổi đại lượng vật lí cần giám sát (ánh sáng, nhiệt độ, nồng độ khí gas, tia hồng ngoại) thành tín hiệu điện áp biến thiên $V_{\\text{cb}}$.',
          '**Khối 2 - Xử lí & So sánh (Op-Amp):** So sánh $V_{\\text{cb}}$ với ngưỡng điện áp đặt trước $V_{\\text{ref}}$ (chỉnh được bằng biến trở). Khi vượt ngưỡng, Op-Amp đổi trạng thái đầu ra từ mức thấp sang mức cao.',
          '**Khối 3 - Thiết bị đầu ra (Actuators):** Khối điều khiển đóng cắt (transistor/relay) kích hoạt tải tiêu thụ thực tế như bóng đèn chiếu sáng, còi báo động buzzer, van điện từ từ nước.'
        ]
      },
      {
        heading: '2. Dự án 1: Mạch đèn tự động bật khi trời tối (Đèn đường/Đèn sân vườn)',
        summary: 'Tự động bật sáng đèn khi ánh sáng xung quanh giảm dưới ngưỡng hoàng hôn và tự tắt khi trời rạng sáng.',
        details: [
          '**Sơ đồ nguyên lí:** LDR mắc ở nhánh dưới ($R_2$) của cầu phân áp với điện trở $R_1 = 10 \\text{ k}\\Omega$ lên nguồn dương $+9 \\text{ V}$. Điện áp giữa $R_1$ và LDR nối vào chân $V_+$ của Op-Amp. Biến trở tinh chỉnh $V_{\\text{ref}}$ nối vào chân $V_-$.',
          '**Nguyên lí hoạt động:**',
          '- Ban ngày (trời sáng): $R_{LDR}$ nhỏ ($< 1 \\text{ k}\\Omega$) $\\implies V_+ = 9 \\times \\frac{R_{LDR}}{R_1 + R_{LDR}} \\approx 0{,}8 \\text{ V} < V_- (\\approx 4{,}5 \\text{ V}) \\implies V_{\\text{out}} \\approx 0 \\text{ V} \\implies$ Relay ngắt, đèn tắt.',
          '- Ban đêm (trời tối): $R_{LDR}$ tăng vọt lên hàng trăm $\\text{k}\\Omega \\implies V_+$ tăng vượt $V_- \\implies V_{\\text{out}} \\approx 9 \\text{ V} \\implies$ Kích hoạt transistor dẫn dòng qua cuộn hút relay $\\implies$ Tiếp điểm relay đóng, cấp điện cho bóng đèn bật sáng.'
        ]
      },
      {
        heading: '3. Dự án 2: Mạch cảnh báo rò rỉ khí gas / Cháy nổ khí flammable',
        summary: 'Cảnh báo âm thanh còi hú và đèn chớp khi phát hiện nồng độ khí gas vượt ngưỡng an toàn.',
        details: [
          '**Linh kiện sử dụng:** Cảm biến khí gas MQ-2 (hoặc nhiệt điện trở NTC phát hiện nhiệt độ cao bất thường), Op-Amp so sánh, transistor đệm dòng, còi báo động Buzzer 5V/9V, đèn LED đỏ cảnh báo.',
          '**Cơ chế hoạt động:** Khi nồng độ khí gas tăng, bề mặt thiếc oxide ($SnO_2$) của MQ-2 hấp phụ khí dễ cháy làm giảm điện trở cảm biến $\\implies$ điện áp tín hiệu $V_{\\text{cb}}$ tăng vọt. Khi $V_{\\text{cb}} > V_{\\text{ref}}$, đầu ra Op-Amp nhảy lên mức cao $\\implies$ kích hoạt transistor dẫn bão hòa $\\implies$ còi Buzzer phát tiếng hú chói tai và LED đỏ nhấp nháy báo động cho người dùng.'
        ]
      },
      {
        heading: '4. Dự án 3: Mạch vòi nước tự động / Cảm ứng tiệm cận hồng ngoại (IR)',
        summary: 'Mở van nước khi có bàn tay đưa vào và tự động ngắt van khi rút tay ra, đảm bảo vệ sinh công cộng và tiết kiệm nước.',
        details: [
          '**Nguyên lí quang điện hồng ngoại:** Gồm một LED phát hồng ngoại (IR Transmitter) phát chùm tia hồng ngoại không nhìn thấy và một quang transistor hoặc photodiode thu hồng ngoại (IR Receiver).',
          '- Khi không có tay: Tia hồng ngoại phát thẳng vào không gian, đầu thu không nhận được tín hiệu phản xạ $\\implies$ điện áp thu được ở mức thấp $\\implies$ van nước đóng.',
          '- Khi có tay đưa lại gần vòi nước (khoảng cách $5 - 15 \\text{ cm}$): Bàn tay phản xạ chùm tia hồng ngoại ngược trở lại vào photodiode thu $\\implies$ photodiode dẫn dòng $\\implies$ điện áp vào Op-Amp tăng cao hơn ngưỡng $\\implies$ Op-Amp kích relay mở van điện từ (Solenoid Valve) xả nước.'
        ]
      },
      {
        heading: '5. Quy trình thiết kế mạch ứng dụng & Lưu ý an toàn',
        summary: 'Quy trình kĩ thuật chuẩn từ ý tưởng đến sản phẩm hoàn thiện và các biện pháp bảo hộ an toàn.',
        details: [
          '**5 bước thiết kế kĩ thuật:** (1) Xác định mục tiêu và thông số kĩ thuật cần đạt $\\to$ (2) Lựa chọn linh kiện và vẽ sơ đồ nguyên lí $\\to$ (3) Lắp ráp thử nghiệm trên bo mạch cắm (Breadboard) $\\to$ (4) Hiệu chuẩn biến trở ngưỡng và đo kiểm điện áp $\\to$ (5) Hàn hoàn thiện trên mạch in (PCB) và đóng hộp bảo vệ.',
          '**Quy tắc an toàn sống còn:**',
          '- Khi thử nghiệm với học sinh, **chỉ sử dụng nguồn điện một chiều hạ áp an toàn (DC 5V - 12V)** từ pin, ắc quy hoặc adapter cách ly chống giật.',
          '- Tuyệt đối **không nối trực tiếp nguồn điện lưới 220V AC** vào breadboard. Việc đóng cắt điện lưới 220V chỉ được thực hiện thông qua module relay đã được bọc kín vỏ cách điện tiêu chuẩn và phải có sự giám sát của giáo viên hướng dẫn.',
          '- Luôn kiểm tra đúng cực tính linh kiện bán dẫn (LED, Diode dập xung, Tụ hóa, IC Op-Amp) trước khi bật công tắc nguồn để tránh ngắn mạch hoặc cháy nổ linh kiện.'
        ]
      }
    ],
    quizzes: [
      {
        q: 'Trong mạch đèn tự bật khi trời tối dùng LDR và Op-Amp, nếu muốn đèn bật sớm hơn khi trời mới chập choạng tối (chưa tối hẳn), ta cần điều chỉnh biến trở như thế nào?',
        options: [
          'Tăng điện áp chuẩn V_ref ở chân đảo',
          'Giảm điện áp chuẩn V_ref ở chân đảo xuống mức thấp hơn một chút',
          'Ngắt bỏ nguồn cấp cho Op-Amp',
          'Đảo ngược hai chân cấp nguồn của Op-Amp'
        ],
        answer: 1,
        explanation: 'Khi trời mới chập choạng tối, điện trở LDR chưa tăng tối đa nên điện áp $V_+$ chưa cao lắm. Muốn mạch kích hoạt sớm hơn, ta cần vặn biến trở để hạ ngưỡng $V_-$ xuống thấp hơn, giúp $V_+$ sớm vượt qua $V_-$.'
      },
      {
        q: 'Trong mạch vòi nước rửa tay tự động cảm ứng hồng ngoại, hiện tượng phản xạ nào được sử dụng để phát hiện bàn tay?',
        options: [
          'Phản xạ sóng siêu âm từ loa gốm',
          'Phản xạ chùm tia hồng ngoại từ LED phát vào photodiode thu khi có bàn tay chắn',
          'Phản xạ từ trường biến thiên của Trái Đất',
          'Hiện tượng quang điện ngoài kim loại'
        ],
        answer: 1,
        explanation: 'LED hồng ngoại phát chùm tia về phía trước. Khi đưa tay vào vùng cảm biến, bề mặt da tay phản xạ tia hồng ngoại vào cảm biến thu (photodiode), sinh tín hiệu điều khiển van nước mở.'
      },
      {
        q: 'Khi thực hành lắp ráp mạch điện tử ứng dụng trong phòng thí nghiệm trường phổ thông, nguyên tắc an toàn nào sau đây là quan trọng nhất?',
        options: [
          'Cắm trực tiếp điện lưới xoay chiều 220V vào bo mạch thử nghiệm cắm dây breadboard',
          'Chỉ sử dụng nguồn DC hạ áp an toàn (5V - 12V), kiểm tra đúng cực tính trước khi cấp điện',
          'Không cần dùng diode dập xung cho relay vì nguồn nhỏ',
          'Để dây dẫn trần tiếp xúc trực tiếp với mặt bàn ẩm ướt'
        ],
        answer: 1,
        explanation: 'An toàn phòng thí nghiệm quy định chỉ dùng nguồn hạ áp an toàn (5V - 12V), kiểm tra kĩ cực tính linh kiện trước khi bật nguồn; tuyệt đối không đưa điện xoay chiều 220V trực tiếp lên breadboard.'
      }
    ]
  }
];

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/ly11_data.js', 'module.exports = ' + JSON.stringify(lessonsData, null, 2) + ';', 'utf8');
console.log('Successfully generated scratch/ly11_data.js with 9 lessons and 27 inline quizzes.');
