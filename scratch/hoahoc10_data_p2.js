// scratch/hoahoc10_data_p2.js
// Hóa Học 10 – Bộ Kết nối tri thức với cuộc sống (Chương 4 – 7: Bài 15 – Bài 23 + Bảng công thức & An toàn)

const fs = require('fs');
const path = require('path');
const { chapters, lessonsP1 } = require('./hoahoc10_data_p1.js');

const lessonsP2 = {
  15: {
    num: 15,
    chapter: 4,
    title: "Phản ứng oxi hóa – khử",
    pages: "tr. 70–77",
    isReview: false,
    subtitle: "4 quy tắc xác định số oxi hóa, chất khử, chất oxi hóa, quá trình oxi hóa, quá trình khử, 4 bước cân bằng theo phương pháp thăng bằng electron và ý nghĩa thực tiễn",
    diagramCaption: "Sơ đồ cơ chế nhường – nhận electron, Quy tắc xác định số oxi hóa và 4 bước cân bằng phương trình bằng phương pháp thăng bằng electron",
    keyFormulas: [
      "<strong>Quy tắc nhớ nhanh:</strong> <strong>“Khử cho – O nhận”</strong> (Chất khử nhường electron → số oxi hóa tăng, bị oxi hóa; Chất oxi hóa nhận electron → số oxi hóa giảm, bị khử)",
      "<strong>4 Quy tắc số oxi hóa:</strong> (1) Đơn chất = <strong>0</strong>  •  (2) Trong hợp chất thường: <strong>H = +1, O = −2, Kim loại IA = +1, IIA = +2, Al = +3, F = −1</strong>  •  (3) Tổng số oxi hóa trong phân tử = <strong>0</strong>  •  (4) Tổng số oxi hóa trong ion = <strong>Điện tích của ion</strong>",
      "Nguyên tắc thăng bằng electron: <strong>Σ n<sub>electron chất khử nhường</sub> = Σ n<sub>electron chất oxi hóa nhận</sub></strong>"
    ],
    sections: [
      {
        heading: "1. Số oxi hóa và 4 Quy tắc xác định số oxi hóa",
        items: [
          "<strong>Khái niệm Số oxi hóa:</strong> Là điện tích quy ước của nguyên tử nguyên tố trong phân tử khi giả định rằng các electron liên kết đều chuyển hoàn toàn về nguyên tử có độ âm điện lớn hơn. Cách viết: đặt dấu điện tích (+ hoặc −) trước, chữ số Ả Rập sau ở phía trên kí hiệu nguyên tố (ví dụ: +1, −2, +4, 0).",
          "<strong>4 Quy tắc xác định số oxi hóa:</strong><br>1. <strong>Quy tắc 1 (Đơn chất):</strong> Số oxi hóa của nguyên tử trong mọi đơn chất luôn bằng <strong>0</strong> (ví dụ: Cu, Fe, O<sub>2</sub>, Cl<sub>2</sub>, O<sub>3</sub> đều có số oxi hóa bằng 0).<br>2. <strong>Quy tắc 2 (Hợp chất thông thường):</strong> Số oxi hóa của <strong>H bằng +1</strong> (trừ hydride kim loại như NaH là −1); của <strong>O bằng −2</strong> (trừ OF<sub>2</sub> là +2, peroxide như H<sub>2</sub>O<sub>2</sub>, Na<sub>2</sub>O<sub>2</sub> là −1); kim loại kiềm (nhóm IA) luôn là <strong>+1</strong>; kiềm thổ (nhóm IIA) luôn là <strong>+2</strong>; <strong>Al luôn là +3</strong>; <strong>F luôn là −1</strong> trong mọi hợp chất.<br>3. <strong>Quy tắc 3 (Phân tử trung hòa):</strong> Trong một phân tử, tổng số oxi hóa của các nguyên tử nhân với số nguyên tử từng nguyên tố luôn bằng <strong>0</strong>.<br>4. <strong>Quy tắc 4 (Ion đơn và đa nguyên tử):</strong> Trong ion đơn nguyên tử, số oxi hóa bằng điện tích của ion đó. Trong ion đa nguyên tử, tổng số oxi hóa của các nguyên tử bằng chính điện tích của ion.",
          "<strong>Ví dụ vận dụng:</strong><br>• Tìm số oxi hóa của C trong <strong>CaCO<sub>3</sub></strong>: (+2) + x + 3·(−2) = 0 ⇒ <strong>x = +4</strong>.<br>• Tìm số oxi hóa của Mn trong ion <strong>MnO<sub>4</sub><sup>−</sup></strong>: x + 4·(−2) = −1 ⇒ <strong>x = +7</strong>.<br>• Tìm số oxi hóa của N trong ion <strong>NH<sub>4</sub><sup>+</sup></strong>: x + 4·(+1) = +1 ⇒ <strong>x = −3</strong>."
        ]
      },
      {
        heading: "2. Chất khử, Chất oxi hóa, Quá trình oxi hóa, Quá trình khử",
        items: [
          "<strong>Phản ứng oxi hóa – khử:</strong> Là phản ứng hóa học trong đó có sự <strong>chuyển dịch electron giữa các chất phản ứng</strong>, hay phản ứng có sự <strong>thay đổi số oxi hóa của ít nhất một nguyên tố</strong>."
        ],
        table: {
          headers: ["Khái niệm", "Định nghĩa theo Electron", "Dấu hiệu theo Số oxi hóa", "Ví dụ trong phản ứng: Fe₂O₃ + 3CO → 2Fe + 3CO₂"],
          rows: [
            ["Chất khử (Chất bị oxi hóa)", "Là chất nhường electron", "Chứa nguyên tố có số oxi hóa tăng sau phản ứng", "CO là chất khử (C tăng từ +2 trong CO lên +4 trong CO₂)"],
            ["Chất oxi hóa (Chất bị khử)", "Là chất nhận electron", "Chứa nguyên tố có số oxi hóa giảm sau phản ứng", "Fe₂O₃ là chất oxi hóa (Fe giảm từ +3 xuống 0)"],
            ["Quá trình oxi hóa (Sự oxi hóa)", "Là quá trình chất khử nhường electron", "Số oxi hóa tăng lên", "C⁺² → C⁺⁴ + 2e (Quá trình oxi hóa)"],
            ["Quá trình khử (Sự khử)", "Là quá trình chất oxi hóa nhận electron", "Số oxi hóa giảm xuống", "2Fe⁺³ + 6e → 2Fe⁰ (Quá trình khử)"]
          ]
        }
      },
      {
        heading: "3. Lập phương trình hóa học của phản ứng oxi hóa – khử (Phương pháp thăng bằng electron)",
        items: [
          "<strong>Nguyên tắc:</strong> Tổng số electron do chất khử nhường phải bằng tổng số electron mà chất oxi hóa nhận.",
          "<strong>4 Bước cân bằng chuẩn SGK (Minh họa qua phản ứng đốt cháy NH<sub>3</sub> có xúc tác Pt: NH<sub>3</sub> + O<sub>2</sub> → NO + H<sub>2</sub>O):</strong><br>• <strong>Bước 1:</strong> Xác định số oxi hóa của các nguyên tố có sự thay đổi số oxi hóa:<br>  N trong NH<sub>3</sub> là <strong>−3</strong> tăng lên <strong>+2</strong> trong NO (NH<sub>3</sub> là chất khử); O trong O<sub>2</sub> là <strong>0</strong> giảm xuống <strong>−2</strong> trong NO và H<sub>2</sub>O (O<sub>2</sub> là chất oxi hóa).<br>• <strong>Bước 2:</strong> Viết các quá trình oxi hóa và quá trình khử:<br>  Quá trình oxi hóa: <strong>N<sup>−3</sup> → N<sup>+2</sup> + 5e</strong><br>  Quá trình khử: <strong>O<sub>2</sub><sup>0</sup> + 4e → 2O<sup>−2</sup></strong><br>• <strong>Bước 3:</strong> Tìm hệ số thích hợp (nhân chéo rút gọn) sao cho tổng e nhường = tổng e nhận: Nhân quá trình oxi hóa với <strong>4</strong> và nhân quá trình khử với <strong>5</strong> (4 × 5e = 5 × 4e = 20e).<br>• <strong>Bước 4:</strong> Đặt hệ số của chất oxi hóa và chất khử vào sơ đồ phản ứng, sau đó cân bằng các nguyên tố còn lại (H, O) theo thứ tự: Kim loại → Gốc acid/Phi kim → H → Kiểm tra O:<br>  <strong>4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O</strong>."
        ]
      },
      {
        heading: "4. Ý nghĩa của phản ứng oxi hóa – khử trong thực tiễn",
        items: [
          "<strong>Các quá trình có lợi gắn với năng lượng & đời sống:</strong> Sự cháy của nhiên liệu (xăng, dầu, khí gas, than đá) trong động cơ đốt trong và nhà máy nhiệt điện; quá trình quang hợp ở cây xanh và hô hấp tế bào trong cơ thể sống; hoạt động của pin điện hóa và ắc quy.",
          "<strong>Các quá trình sản xuất công nghiệp & nông nghiệp:</strong> Luyện gang thép (khử quặng sắt oxide bằng CO), luyện nhôm (điện phân Al<sub>2</sub>O<sub>3</sub> nóng chảy), sản xuất sulfuric acid (H<sub>2</sub>SO<sub>4</sub>), nitric acid (HNO<sub>3</sub>), phân đạm, thuốc bảo vệ thực vật.",
          "<strong>Các quá trình có hại cần phòng chống:</strong> Sự ăn mòn kim loại (han gỉ tàu biển, cầu cống, máy móc bằng gang thép trong không khí ẩm), sự ôi thiu thực phẩm và các vụ cháy nổ mất kiểm soát."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Thí nghiệm thực hành: Đinh sắt (Fe) tác dụng với dung dịch CuSO4 và dung dịch H2SO4 loãng",
      detail: "• <strong>Thí nghiệm 1 (Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu↓):</strong> Ngâm đinh sắt đã đánh sạch gỉ vào dung dịch CuSO<sub>4</sub> màu xanh lam. Sau vài phút, có lớp kim loại đồng màu đỏ gạch bám ngoài đinh sắt, màu xanh của dung dịch nhạt dần (Fe nhường 2e là chất khử, Cu<sup>2+</sup> nhận 2e là chất oxi hóa).<br>• <strong>Thí nghiệm 2 (Fe + H<sub>2</sub>SO<sub>4</sub> loãng → FeSO<sub>4</sub> + H<sub>2</sub>↑):</strong> Sủi bọt khí không màu H<sub>2</sub>, đinh sắt tan dần tạo dung dịch màu lục nhạt.<br>⚠️ <strong>An toàn:</strong> Đeo kính bảo hộ, dùng kẹp gỗ khi thao tác với ống nghiệm chứa acid H<sub>2</sub>SO<sub>4</sub>, thu gom dung dịch muối đồng sau thí nghiệm đúng nơi quy định."
    },
    examplesAndMistakes: [
      "<strong>Lưu ý khi cân bằng phương trình có môi trường acid (như Cu + HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + NO + H<sub>2</sub>O):</strong> Nguyên tố N vừa đóng vai trò chất oxi hóa (tạo sản phẩm khử NO) vừa đóng vai trò môi trường (tạo muối NO<sub>3</sub><sup>−</sup>). Vì vậy, sau khi đặt hệ số cho Cu và NO, ta cộng tổng số nguyên tử N ở vế phải để đặt hệ số cho HNO<sub>3</sub> ở vế trái: <strong>3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O</strong>."
    ]
  },

  16: {
    num: 16,
    chapter: 4,
    title: "Ôn tập chương 4: Phản ứng oxi hóa – khử",
    pages: "tr. 78–79",
    isReview: true,
    subtitle: "Hệ thống hóa cách xác định nhanh phản ứng oxi hóa – khử, phản ứng tự oxi hóa – khử và phương pháp Bảo toàn electron giải nhanh bài toán kim loại – acid",
    diagramCaption: "Sơ đồ tổng kết Chương 4: Phân loại phản ứng theo sự thay đổi số oxi hóa & Phương pháp giải toán bằng Định luật Bảo toàn Electron",
    keyFormulas: [
      "<strong>Định luật Bảo toàn Electron (Giải nhanh bài toán hóa học):</strong> Trong một phản ứng hoặc một chuỗi phản ứng oxi hóa – khử:<br><strong>Σ n<sub>e nhường</sub> = Σ n<sub>e nhận</sub></strong>",
      "Với kim loại M (hóa trị n) tác dụng với HCl / H<sub>2</sub>SO<sub>4</sub> loãng giải phóng H<sub>2</sub>: <strong>n · n<sub>M</sub> = 2 · n<sub>H2</sub></strong>",
      "Với kim loại M tác dụng với HNO<sub>3</sub> / H<sub>2</sub>SO<sub>4</sub> đặc: <strong>n · n<sub>M</sub> = 1·n<sub>NO2</sub> + 3·n<sub>NO</sub> + 8·n<sub>N2O</sub> + 10·n<sub>N2</sub> + 8·n<sub>NH4NO3</sub></strong> (hoặc <strong>2·n<sub>SO2</sub> + 6·n<sub>S</sub> + 8·n<sub>H2S</sub></strong>)"
    ],
    sections: [
      {
        heading: "1. Dấu hiệu nhận biết nhanh một phản ứng có phải là Phản ứng oxi hóa – khử hay không",
        items: [
          "<strong>Mọi phản ứng có mặt ĐƠN CHẤT</strong> (ở chất tham gia hoặc sản phẩm) <strong>LUÔN LUÔN là phản ứng oxi hóa – khử</strong> (vì đơn chất có số oxi hóa bằng 0, khi vào hợp chất hoặc từ hợp chất tạo ra đơn chất chắc chắn phải thay đổi số oxi hóa). Ví dụ: phản ứng thế, phản ứng đốt cháy, phản ứng điều chế kim loại/khí.",
          "<strong>Mọi phản ứng trao đổi trong dung dịch</strong> (như trung hòa acid – base: HCl + NaOH → NaCl + H<sub>2</sub>O; phản ứng tạo kết tủa: AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub>; CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub>↑ + H<sub>2</sub>O) <strong>KHÔNG BAO GIỜ là phản ứng oxi hóa – khử</strong>.",
          "<strong>Phản ứng tự oxi hóa – khử (Dị phân):</strong> Một nguyên tố trong cùng một chất vừa tăng vừa giảm số oxi hóa. Ví dụ: <strong>Cl<sub>2</sub> + 2NaOH → NaCl + NaClO + H<sub>2</sub>O</strong> (Cl<sub>2</sub> vừa là chất oxi hóa giảm từ 0 xuống −1, vừa là chất khử tăng từ 0 lên +1)."
        ]
      },
      {
        heading: "2. Các bài tập cân bằng và tính toán trọng tâm Chương 4",
        items: [
          "<strong>Bài toán 1 – Tỉ lệ số phân tử đóng vai trò chất oxi hóa / chất tạo môi trường:</strong><br>• Ví dụ: Trong phương trình <strong>Fe + 4HNO<sub>3</sub> (loãng) → Fe(NO<sub>3</sub>)<sub>3</sub> + NO↑ + 2H<sub>2</sub>O</strong>: trong 4 phân tử HNO<sub>3</sub> tham gia phản ứng, chỉ có <strong>1 phân tử HNO<sub>3</sub> bị khử tạo NO (đóng vai trò chất oxi hóa)</strong> và <strong>3 phân tử HNO<sub>3</sub> tạo muối Fe(NO<sub>3</sub>)<sub>3</sub> (đóng vai trò môi trường acid)</strong>.",
          "<strong>Bài toán 2 – Áp dụng Bảo toàn electron tính thể tích khí hoặc khối lượng kim loại:</strong> Không cần viết và cân bằng từng phương trình dài, chỉ cần liệt kê đầu – cuối của nguyên tố nhường electron và nguyên tố nhận electron."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Mẹo kiểm tra nhanh kết quả sau khi cân bằng phương trình Oxi hóa – Khử",
      detail: "Sau khi điền đầy đủ hệ số vào phương trình, chỉ cần <strong>đếm tổng số nguyên tử Oxygen (O) ở hai vế</strong>. Nếu số nguyên tử O ở vế trái bằng đúng số nguyên tử O ở vế phải thì phương trình đã được cân bằng chính xác 100%!"
    },
    examplesAndMistakes: [
      "<strong>Ví dụ giải nhanh bằng Bảo toàn electron:</strong> Hòa tan hoàn toàn 5,6 g Fe (0,1 mol) và 6,4 g Cu (0,1 mol) trong dung dịch HNO<sub>3</sub> loãng dư, thu được V lít khí NO duy nhất (ở đkc: 25°C, 1 bar).<br><em>Giải:</em> Quá trình nhường e: Fe → Fe<sup>+3</sup> + 3e (0,3 mol e); Cu → Cu<sup>+2</sup> + 2e (0,2 mol e) ⇒ Tổng n<sub>e nhường</sub> = 0,5 mol. Quá trình nhận e: N<sup>+5</sup> + 3e → N<sup>+2</sup> (NO) ⇒ 3·n<sub>NO</sub> = 0,5 ⇒ n<sub>NO</sub> = 1/6 mol ⇒ V = (1/6) × 24,79 ≈ <strong>4,13 L</strong>."
    ]
  },

  17: {
    num: 17,
    chapter: 5,
    title: "Biến thiên enthalpy trong các phản ứng hóa học",
    pages: "tr. 80–88",
    isReview: false,
    subtitle: "Phản ứng tỏa nhiệt – thu nhiệt, điều kiện chuẩn (1 bar, 1 mol/L, 298 K), phương trình nhiệt hóa học, nhiệt tạo thành chuẩn ΔfH°298, định luật Hess và tính ΔrH°298 theo năng lượng liên kết Eb",
    diagramCaption: "Giản đồ năng lượng của Phản ứng tỏa nhiệt (ΔrH°298 < 0) vs Phản ứng thu nhiệt (ΔrH°298 > 0) và Sơ đồ Nhiệt lượng kế thực nghiệm",
    keyFormulas: [
      "Quy ước dấu của Biến thiên Enthalpy: <strong>Δ<sub>r</sub>H°<sub>298</sub> < 0 → Phản ứng TỎA NHIỆT</strong> (hệ giải phóng nhiệt, môi trường nóng lên)  |  <strong>Δ<sub>r</sub>H°<sub>298</sub> > 0 → Phản ứng THU NHIỆT</strong> (hệ hấp thụ nhiệt, môi trường lạnh đi)",
      "Nhiệt tạo thành chuẩn của mọi <strong>ĐƠN CHẤT ở dạng bền vững nhất luôn bằng 0</strong>: <strong>Δ<sub>f</sub>H°<sub>298</sub>(đơn chất bền) = 0 kJ/mol</strong>",
      "Công thức 1 – Tính theo Nhiệt tạo thành chuẩn (Lấy <strong>Sản phẩm trừ Chất đầu</strong>):<br><strong>Δ<sub>r</sub>H°<sub>298</sub> = Σ ν<sub>sp</sub> · Δ<sub>f</sub>H°<sub>298</sub>(sản phẩm) − Σ ν<sub>cđ</sub> · Δ<sub>f</sub>H°<sub>298</sub>(chất đầu)</strong>",
      "Công thức 2 – Tính theo Năng lượng liên kết E<sub>b</sub> (Áp dụng cho <strong>các chất đều ở thể khí</strong>, lấy <strong>Chất đầu trừ Sản phẩm</strong>):<br><strong>Δ<sub>r</sub>H°<sub>298</sub> = Σ E<sub>b</sub>(chất đầu) − Σ E<sub>b</sub>(sản phẩm)</strong>"
    ],
    sections: [
      {
        heading: "1. Phản ứng tỏa nhiệt, Phản ứng thu nhiệt và Điều kiện chuẩn",
        items: [
          "<strong>Phản ứng tỏa nhiệt (Exothermic reaction):</strong> Là phản ứng hóa học <strong>giải phóng năng lượng dưới dạng nhiệt</strong> ra môi trường xung quanh (làm nhiệt độ của hệ và môi trường xung quanh tăng lên). <em>Ví dụ:</em> Phản ứng đốt cháy nhiên liệu (than, cồn, khí gas), phản ứng tôi vôi sống (CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub>), phản ứng trung hòa acid – base (HCl + NaOH), phản ứng oxi hóa glucose trong cơ thể.",
          "<strong>Phản ứng thu nhiệt (Endothermic reaction):</strong> Là phản ứng hóa học <strong>hấp thụ năng lượng dưới dạng nhiệt</strong> từ môi trường xung quanh (làm nhiệt độ môi trường giảm đi hoặc cần đun nóng liên tục để phản ứng diễn ra). <em>Ví dụ:</em> Phản ứng nung vôi (CaCO<sub>3</sub> → CaO + CO<sub>2</sub>), nhiệt phân KMnO<sub>4</sub> hoặc KClO<sub>3</sub>, hòa tan viên C sủi (NaHCO<sub>3</sub> + citric acid) hoặc hòa tan NH<sub>4</sub>NO<sub>3</sub> vào nước làm cốc nước mát lạnh.",
          "<strong>Biến thiên enthalpy của phản ứng (Δ<sub>r</sub>H, nhiệt phản ứng):</strong> Là lượng nhiệt tỏa ra hay thu vào của một phản ứng hóa học ở áp suất không đổi (đơn vị thường dùng: <strong>kJ</strong> hoặc <strong>kcal</strong>).",
          "<strong>Điều kiện chuẩn trong Nhiệt hóa học (kí hiệu Δ<sub>r</sub>H°<sub>298</sub>):</strong> Áp suất <strong>1 bar</strong> (đối với chất khí), nồng độ <strong>1 mol/L</strong> (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là <strong>25°C (tức 298 K)</strong>.",
          "<strong>Phương trình nhiệt hóa học:</strong> Là phương trình phản ứng hóa học có ghi kèm <strong>trạng thái tập hợp của các chất</strong> — rắn <strong>(s)</strong>, lỏng <strong>(l)</strong>, khí <strong>(g)</strong>, dung dịch nước <strong>(aq)</strong> — và giá trị <strong>Δ<sub>r</sub>H°<sub>298</sub></strong> tương ứng với đúng hệ số tỉ lượng trong phương trình."
        ],
        table: {
          headers: ["Tiêu chí", "Phản ứng Tỏa nhiệt", "Phản ứng Thu nhiệt"],
          rows: [
            ["Dấu của ΔrH°298", "ΔrH°298 < 0 (mang dấu âm)", "ΔrH°298 > 0 (mang dấu dương)"],
            ["So sánh Enthalpy chất đầu & sản phẩm", "ΣH(chất đầu) > ΣH(sản phẩm)", "ΣH(chất đầu) < ΣH(sản phẩm)"],
            ["Sự thay đổi nhiệt độ môi trường", "Giải phóng nhiệt → môi trường nóng lên", "Hấp thụ nhiệt → môi trường lạnh đi"],
            ["Điều kiện duy trì phản ứng", "Thường tự tiếp diễn sau khi khơi mào", "Thường phải cung cấp nhiệt liên tục trong suốt phản ứng"],
            ["Ví dụ phương trình nhiệt hóa học", "2H₂(g) + O₂(g) → 2H₂O(l)   ΔrH°298 = −571,6 kJ", "CaCO₃(s) → CaO(s) + CO₂(g)   ΔrH°298 = +178,2 kJ"]
          ]
        }
      },
      {
        heading: "2. Enthalpy tạo thành chuẩn (Nhiệt tạo thành chuẩn ΔfH°298) & Định luật Hess",
        items: [
          "<strong>Nhiệt tạo thành chuẩn (Δ<sub>f</sub>H°<sub>298</sub>, f viết tắt của formation):</strong> Là biến thiên enthalpy của phản ứng tạo thành <strong>1 mol chất đó từ các đơn chất ở dạng bền vững nhất</strong> tại điều kiện chuẩn (25°C, 1 bar). Đơn vị: <strong>kJ/mol</strong>.<br>• <em>Lưu ý quan trọng:</em> Nhiệt tạo thành chuẩn của các đơn chất ở dạng bền nhất (như O<sub>2</sub>(g), H<sub>2</sub>(g), N<sub>2</sub>(g), Cl<sub>2</sub>(g), Br<sub>2</sub>(l), I<sub>2</sub>(s), C<sub>graphite</sub>(s), Fe(s), Na(s)...) đều bằng <strong>0 kJ/mol</strong>.",
          "<strong>Công thức tính Δ<sub>r</sub>H°<sub>298</sub> từ nhiệt tạo thành chuẩn (Sản phẩm trừ Chất đầu):</strong><br><strong>Δ<sub>r</sub>H°<sub>298</sub> = Σ ν<sub>sp</sub> · Δ<sub>f</sub>H°<sub>298</sub>(sản phẩm) − Σ ν<sub>cđ</sub> · Δ<sub>f</sub>H°<sub>298</sub>(chất đầu)</strong> (nhớ nhân với hệ số cân bằng ν của từng chất).",
          "<strong>Định luật Hess và quy tắc biến đổi phương trình nhiệt hóa học:</strong> Biến thiên enthalpy của một phản ứng chỉ phụ thuộc vào trạng thái đầu và trạng thái cuối, không phụ thuộc vào các giai đoạn trung gian:<br>• Khi <strong>đảo ngược chiều</strong> một phương trình nhiệt hóa học thì <strong>Δ<sub>r</sub>H đổi dấu</strong> (từ âm sang dương và ngược lại).<br>• Khi <strong>nhân hệ số</strong> của toàn bộ phương trình với số k thì giá trị <strong>Δ<sub>r</sub>H cũng phải nhân với k</strong>.<br>• Nếu một phản ứng là tổng của nhiều phản ứng nối tiếp thì <strong>Δ<sub>r</sub>H = Δ<sub>r</sub>H<sub>1</sub> + Δ<sub>r</sub>H<sub>2</sub> + ...</strong>"
        ]
      },
      {
        heading: "3. Tính biến thiên Enthalpy của phản ứng theo Năng lượng liên kết (Eb)",
        items: [
          "Đối với phản ứng mà <strong>tất cả các chất tham gia và sản phẩm đều ở thể khí (g)</strong>, quá trình phản ứng gồm 2 giai đoạn: (1) Phá vỡ các liên kết trong chất đầu (cần cung cấp năng lượng: +ΣE<sub>b</sub>(chất đầu)) và (2) Hình thành các liên kết mới trong sản phẩm (giải phóng năng lượng: −ΣE<sub>b</sub>(sản phẩm)).",
          "<strong>Công thức tính theo Năng lượng liên kết E<sub>b</sub> (Chất đầu trừ Sản phẩm):</strong><br><strong>Δ<sub>r</sub>H°<sub>298</sub> = Σ E<sub>b</sub>(chất đầu) − Σ E<sub>b</sub>(sản phẩm)</strong>.",
          "<em>Mẹo tránh nhầm công thức:</em> Tính theo <strong>Δ<sub>f</sub>H° (Nhiệt tạo thành)</strong> thì lấy <strong>Sau trừ Trước (SP − CĐ)</strong>; còn tính theo <strong>E<sub>b</sub> (Năng lượng liên kết)</strong> thì lấy <strong>Trước trừ Sau (CĐ − SP)</strong>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Thí nghiệm theo dõi sự thay đổi nhiệt độ phản ứng Trung hòa & An toàn khi Tôi vôi",
      detail: "• <strong>Thí nghiệm trung hòa HCl và NaOH trong nhiệt lượng kế:</strong> Cho 50 mL dung dịch HCl 0,5 M vào cốc cách nhiệt, đo nhiệt độ ban đầu t<sub>1</sub>. Thêm nhanh 50 mL dung dịch NaOH 0,5 M (cùng nhiệt độ t<sub>1</sub>), khuấy nhẹ và đọc nhiệt độ cao nhất t<sub>2</sub>. Kết quả: t<sub>2</sub> > t<sub>1</sub> → Phản ứng trung hòa là <strong>phản ứng tỏa nhiệt (Δ<sub>r</sub>H°<sub>298</sub> = −57,3 kJ/mol)</strong>.<br>⚠️ <strong>An toàn thực tế:</strong> Phản ứng tôi vôi (CaO + H<sub>2</sub>O) tỏa nhiệt cực mạnh có thể làm nước sôi bắn vôi nóng gây bỏng nặng. Tuyệt đối không đứng sát hố tôi vôi, không đổ nước ồ ạt tùy tiện và luôn trang bị đồ bảo hộ."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ tính theo Năng lượng liên kết E<sub>b</sub>:</strong> Cho phản ứng: CH<sub>4</sub>(g) + Cl<sub>2</sub>(g) → CH<sub>3</sub>Cl(g) + HCl(g). Biết E<sub>b</sub>(C–H) = 414 kJ/mol; E<sub>b</sub>(Cl–Cl) = 243 kJ/mol; E<sub>b</sub>(C–Cl) = 339 kJ/mol; E<sub>b</sub>(H–Cl) = 431 kJ/mol.<br><em>Giải:</em> CH<sub>4</sub> có 4 liên kết C–H; CH<sub>3</sub>Cl có 3 liên kết C–H và 1 liên kết C–Cl.<br>Δ<sub>r</sub>H°<sub>298</sub> = [4·E<sub>b</sub>(C–H) + E<sub>b</sub>(Cl–Cl)] − [3·E<sub>b</sub>(C–H) + E<sub>b</sub>(C–Cl) + E<sub>b</sub>(H–Cl)] = (4×414 + 243) − (3×414 + 339 + 431) = 1899 − 2012 = <strong>−113 kJ</strong> (Phản ứng tỏa nhiệt)."
    ]
  },

  18: {
    num: 18,
    chapter: 5,
    title: "Ôn tập chương 5: Năng lượng hóa học",
    pages: "tr. 89–90",
    isReview: true,
    subtitle: "So sánh hai công thức tính ΔrH°298, cách so sánh độ bền nhiệt của hai chất, quy đổi lượng nhiệt theo số mol thực tế và bài toán hiệu suất nhiệt",
    diagramCaption: "Sơ đồ tổng kết Chương 5: Hai con đường tính ΔrH°298 (Theo Nhiệt tạo thành ΔfH°298 vs Theo Năng lượng liên kết Eb) & Chu trình Hess",
    keyFormulas: [
      "Lượng nhiệt tỏa ra / thu vào khi phản ứng <strong>n mol</strong> chất X (có hệ số cân bằng là a trong phương trình):<br><strong>Q = (n<sub>X</sub> / a) · |Δ<sub>r</sub>H°<sub>298</sub>|</strong>",
      "Giữa hai phản ứng tỏa nhiệt: Phản ứng nào có giá trị <strong>Δ<sub>r</sub>H°<sub>298</sub> âm hơn (tức trị tuyệt đối |Δ<sub>r</sub>H°<sub>298</sub>| lớn hơn)</strong> thì tỏa ra nhiều nhiệt hơn và xảy ra thuận lợi hơn."
    ],
    sections: [
      {
        heading: "1. Bảng đối chiếu hai công thức tính Biến thiên Enthalpy chuẩn ΔrH°298",
        items: [
          "Việc nắm vững sự khác biệt giữa hai công thức tính Δ<sub>r</sub>H°<sub>298</sub> giúp học sinh không bao giờ bị ngược dấu khi làm bài tập trắc nghiệm và tự luận."
        ],
        table: {
          headers: ["Tiêu chí đối chiếu", "Tính theo Nhiệt tạo thành chuẩn (ΔfH°298)", "Tính theo Năng lượng liên kết (Eb)"],
          rows: [
            ["Biểu thức công thức", "ΔrH°298 = Σ ΔfH°298(Sản phẩm) − Σ ΔfH°298(Chất đầu)", "ΔrH°298 = Σ Eb(Chất đầu) − Σ Eb(Sản phẩm)"],
            ["Quy tắc nhớ nhanh", "Lấy SAU trừ TRƯỚC (Sản phẩm − Chất đầu)", "Lấy TRƯỚC trừ SAU (Chất đầu − Sản phẩm)"],
            ["Phạm vi áp dụng", "Áp dụng cho mọi trạng thái tập hợp (rắn, lỏng, khí, dung dịch)", "Chỉ áp dụng chính xác khi TẤT CẢ các chất đều ở thể KHÍ (g)"],
            ["Lưu ý đối với Đơn chất", "Đơn chất bền nhất có ΔfH°298 = 0 kJ/mol", "Đơn chất khí (H₂, O₂, N₂, Cl₂) CÓ năng lượng liên kết Eb ≠ 0!"],
            ["Lưu ý khi đếm hệ số", "Nhân hệ số cân bằng ν của từng phân tử", "Phải viết công thức cấu tạo để đếm số liên kết trong 1 phân tử rồi nhân hệ số ν"]
          ]
        }
      },
      {
        heading: "2. Các dạng bài toán thực tế về nhiệt lượng đốt cháy nhiên liệu (Gas, Than, Xăng)",
        items: [
          "<strong>Dạng bài đốt cháy khí gas (hỗn hợp Propane C<sub>3</sub>H<sub>8</sub> và Butane C<sub>4</sub>H<sub>10</sub>):</strong><br>• Bước 1: Tính số mol C<sub>3</sub>H<sub>8</sub> và C<sub>4</sub>H<sub>10</sub> có trong bình gas (ví dụ bình gas 12 kg theo tỉ lệ khối lượng 30:70 hoặc 40:60).<br>• Bước 2: Nhân số mol từng chất với lượng nhiệt tỏa ra khi đốt cháy 1 mol chất đó (|Δ<sub>r</sub>H°<sub>298</sub>|) để tìm tổng nhiệt lượng lý thuyết Q<sub>lt</sub>.<br>• Bước 3: Nếu hiệu suất hấp thụ nhiệt là H%, thì nhiệt lượng có ích thực tế thu được là <strong>Q<sub>ích</sub> = Q<sub>lt</sub> × (H / 100)</strong>. Từ đó tính được số ngày sử dụng bình gas hoặc thể tích nước đun sôi được."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Lưu ý cực kỳ quan trọng về trạng thái của chất trong Phương trình Nhiệt hóa học",
      detail: "Cùng một phản ứng nhưng nếu <strong>trạng thái của chất khác nhau thì giá trị Δ<sub>r</sub>H°<sub>298</sub> sẽ khác nhau</strong>. Ví dụ: tạo thành 1 mol nước lỏng H<sub>2</sub>O(l) tỏa ra 285,8 kJ (Δ<sub>f</sub>H°<sub>298</sub> = −285,8 kJ/mol), trong khi tạo thành 1 mol hơi nước H<sub>2</sub>O(g) chỉ tỏa ra 241,8 kJ (Δ<sub>f</sub>H°<sub>298</sub> = −241,8 kJ/mol) vì quá trình hóa hơi nước lỏng thu mất 44,0 kJ/mol."
    },
    examplesAndMistakes: [
      "<strong>Lỗi sai phổ biến nhất:</strong> Khi tính Δ<sub>r</sub>H°<sub>298</sub> theo năng lượng liên kết E<sub>b</sub>, học sinh quen tay cho E<sub>b</sub> của đơn chất O<sub>2</sub>, Cl<sub>2</sub>, N<sub>2</sub> bằng 0 giống như Δ<sub>f</sub>H°<sub>298</sub> — hãy nhớ rằng phá vỡ liên kết O=O (498 kJ/mol) hay N≡N (945 kJ/mol) tốn rất nhiều năng lượng!"
    ]
  },

  19: {
    num: 19,
    chapter: 6,
    title: "Tốc độ phản ứng hóa học",
    pages: "tr. 91–100",
    isReview: false,
    subtitle: "Khái niệm tốc độ phản ứng, tốc độ trung bình, định luật tác dụng khối lượng (Guldberg – Waage), hệ số nhiệt độ Van't Hoff và 5 yếu tố ảnh hưởng (Nồng độ, Áp suất, Nhiệt độ, Diện tích bề mặt, Chất xúc tác)",
    diagramCaption: "Đồ thị biến thiên nồng độ Chất đầu – Sản phẩm theo thời gian, Giản đồ năng lượng hoạt hóa khi có Xúc tác và 5 yếu tố ảnh hưởng đến tốc độ phản ứng",
    keyFormulas: [
      "<strong>Tốc độ trung bình</strong> của phản ứng tổng quát <strong>aA + bB → cC + dD</strong>:<br><strong>v<sub>tb</sub> = −(1/a)·(ΔC<sub>A</sub>/Δt) = −(1/b)·(ΔC<sub>B</sub>/Δt) = +(1/c)·(ΔC<sub>C</sub>/Δt) = +(1/d)·(ΔC<sub>D</sub>/Δt)</strong>  (với ΔC = C<sub>2</sub> − C<sub>1</sub>)",
      "<strong>Định luật tác dụng khối lượng</strong> (cho phản ứng đơn giản aA + bB → sản phẩm): <strong>v = k · C<sub>A</sub><sup>a</sup> · C<sub>B</sub><sup>b</sup></strong>  (k là hằng số tốc độ, chỉ phụ thuộc vào bản chất chất phản ứng và nhiệt độ)",
      "<strong>Công thức hệ số nhiệt độ Van't Hoff (γ):</strong> <strong>v<sub>2</sub> / v<sub>1</sub> = γ<sup>(T2 − T1)/10</sup></strong>  (Khi tăng thêm 10°C thì tốc độ phản ứng tăng từ γ = 2 đến 4 lần; tốc độ tăng k lần thì thời gian phản ứng giảm k lần: <strong>t<sub>2</sub> = t<sub>1</sub> / k</strong>)"
    ],
    sections: [
      {
        heading: "1. Khái niệm Tốc độ phản ứng và Tốc độ trung bình của phản ứng",
        items: [
          "<strong>Khái niệm:</strong> <strong>Tốc độ phản ứng hóa học</strong> là đại lượng đặc trưng cho sự biến thiên nồng độ của một trong các chất phản ứng hoặc sản phẩm phản ứng trong một đơn vị thời gian (kí hiệu là <strong>v</strong>, đơn vị thường dùng: <strong>mol/(L·s)</strong> hoặc <strong>M/s, M/phút</strong>).",
          "<strong>Phản ứng nhanh và phản ứng chậm trong thực tế:</strong> Phản ứng nổ thuốc súng, đốt khí gas, kết tủa AgCl xảy ra tức thời (rất nhanh); phản ứng lên men rượu, gỉ sắt xảy ra chậm (vài ngày đến vài tháng); quá trình hình thành than đá, dầu mỏ xảy ra cực chậm (hàng triệu năm).",
          "<strong>Công thức tính tốc độ trung bình (v<sub>tb</sub>):</strong> Cho phản ứng <strong>aA + bB → cC + dD</strong>:<br>• Theo chất đầu A (nồng độ giảm theo thời gian nên C<sub>2</sub> < C<sub>1</sub>, phải đặt dấu trừ phía trước để v<sub>tb</sub> > 0): <strong>v<sub>tb</sub> = −(1/a) · (C<sub>2</sub> − C<sub>1</sub>) / (t<sub>2</sub> − t<sub>1</sub>)</strong>.<br>• Theo sản phẩm C (nồng độ tăng theo thời gian nên C<sub>2</sub> > C<sub>1</sub>): <strong>v<sub>tb</sub> = +(1/c) · (C<sub>2</sub> − C<sub>1</sub>) / (t<sub>2</sub> − t<sub>1</sub>)</strong>."
        ]
      },
      {
        heading: "2. Định luật tác dụng khối lượng (Phương trình tốc độ phản ứng)",
        items: [
          "Đối với các <strong>phản ứng đơn giản</strong> (diễn ra qua một giai đoạn duy nhất): ở nhiệt độ không đổi, tốc độ tức thời của phản ứng tỉ lệ thuận với tích số nồng độ các chất tham gia phản ứng với số mũ thích hợp bằng hệ số tỉ lượng trong phương trình: <strong>v = k · C<sub>A</sub><sup>a</sup> · C<sub>B</sub><sup>b</sup></strong>.",
          "<strong>Lưu ý quan trọng:</strong><br>• <strong>Hằng số tốc độ phản ứng (k):</strong> Bằng tốc độ phản ứng khi nồng độ của tất cả các chất phản ứng đều bằng 1 mol/L (C<sub>A</sub> = C<sub>B</sub> = 1 M). Giá trị k <strong>chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ</strong>, hoàn toàn không phụ thuộc vào nồng độ chất phản ứng.<br>• Trong biểu thức định luật tác dụng khối lượng, <strong>KHÔNG đưa nồng độ của chất rắn (s)</strong> vào phương trình tốc độ (vì nồng độ chất rắn nguyên chất được coi là hằng số). Ví dụ với phản ứng <strong>C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)</strong> thì <strong>v = k · C<sub>O2</sub></strong>."
        ]
      },
      {
        heading: "3. Năm yếu tố ảnh hưởng đến Tốc độ phản ứng & Các thí nghiệm chứng minh",
        items: [
          "Mọi yếu tố làm tăng <strong>tần số va chạm có hiệu quả</strong> giữa các hạt chất phản ứng hoặc làm giảm <strong>năng lượng hoạt hóa (E<sub>a</sub>)</strong> của phản ứng đều làm tăng tốc độ phản ứng."
        ],
        table: {
          headers: ["Yếu tố ảnh hưởng", "Tác động khi tăng yếu tố", "Giải thích theo thuyết va chạm", "Thí nghiệm chứng minh chuẩn SGK"],
          rows: [
            ["1. Nồng độ (C)", "Tăng nồng độ chất phản ứng → tốc độ phản ứng tăng", "Mật độ hạt trong 1 đơn vị thể tích tăng → số va chạm hiệu quả tăng", "Na₂S₂O₃ + H₂SO₄ → Na₂SO₄ + S↓ (vàng đục) + SO₂↑ + H₂O: nồng độ Na₂S₂O₃ cao hơn làm dấu X dưới đáy cốc bị che khuất nhanh hơn"],
            ["2. Áp suất (P, chỉ với chất khí)", "Tăng áp suất chất khí (nén thể tích) → tốc độ phản ứng tăng", "Nén khí làm nồng độ mol của chất khí tăng lên tương ứng", "Tổng hợp NH₃ hay đốt cháy nhiên liệu trong xi-lanh động cơ ở áp suất cao"],
            ["3. Nhiệt độ (T)", "Tăng nhiệt độ → tốc độ tăng mạnh (quy tắc Van't Hoff: tăng 10°C tăng 2–4 lần)", "Các hạt chuyển động nhanh hơn và tỷ lệ hạt có đủ năng lượng hoạt hóa tăng vọt", "Mg tác dụng với nước có phenolphthalein: ống đun nóng sủi bọt khí và hóa hồng nhanh hơn hẳn ống nước lạnh"],
            ["4. Diện tích bề mặt tiếp xúc (chất rắn)", "Nghiền/đập nhỏ chất rắn (tăng diện tích bề mặt) → tốc độ tăng", "Tăng số lượng phân tử chất lỏng/khí tiếp xúc trực tiếp với bề mặt chất rắn", "Cùng khối lượng CaCO₃ tác dụng HCl: bình chứa CaCO₃ đập nhỏ thoát khí CO₂ nhanh hơn bình chứa CaCO₃ viên lớn"],
            ["5. Chất xúc tác", "Thêm chất xúc tác thích hợp → tốc độ tăng rất nhiều lần", "Tạo ra hướng phản ứng mới có năng lượng hoạt hóa (Ea) thấp hơn; sau phản ứng chất xúc tác giữ nguyên khối lượng và bản chất hóa học", "Phân hủy H₂O₂: ống nghiệm rắc thêm bột MnO₂ thoát khí O₂ sủi bọt mãnh liệt (làm bùng cháy tàn đóm đỏ)"]
          ]
        }
      },
      {
        heading: "4. Ứng dụng kiểm soát tốc độ phản ứng trong đời sống và sản xuất",
        items: [
          "<strong>Các biện pháp làm TĂNG tốc độ phản ứng:</strong> Đập nhỏ than đá, tạo các lỗ tổ ong trên viên than để tăng diện tích tiếp xúc với oxygen; dùng nồi áp suất hầm thức ăn (tăng áp suất → nước sôi ở ~120°C → thức ăn chín nhanh); dùng men (enzyme sinh học) để muối dưa cà, ủ rượu, làm sữa chua; dùng đèn xì oxygen – acetylene (tăng nồng độ O<sub>2</sub> nguyên chất thay vì không khí chỉ có 21% O<sub>2</sub>) để hàn cắt kim loại.",
          "<strong>Các biện pháp làm GIẢM tốc độ phản ứng:</strong> Bảo quản thực phẩm trong tủ lạnh/tủ đông (hạ nhiệt độ làm chậm phản ứng oxi hóa và phân hủy của vi khuẩn); hút chân không hoặc bơm khí N<sub>2</sub> vào gói thực phẩm (giảm nồng độ O<sub>2</sub>); sơn phủ hoặc mạ kim loại để làm chậm quá trình ăn mòn gỉ sắt; dùng chất ức chế."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "An toàn thực hành bắt buộc khi làm thí nghiệm Tốc độ phản ứng",
      detail: "⚠️ <strong>Cảnh báo khí SO<sub>2</sub> trong thí nghiệm Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub>:</strong> Phản ứng sinh ra khí sulfur dioxide (SO<sub>2</sub>) có mùi hắc, độc với đường hô hấp và gây ho. Phải thực hiện với lượng hóa chất nhỏ tại nơi thông thoáng hoặc trong tủ hút, <strong>tuyệt đối không cúi sát mặt ngửi trực tiếp miệng cốc</strong>; ngay khi dấu X biến mất phải đổ hỗn hợp vào bình thu hồi chứa dung dịch kiềm (NaOH / nước vôi) để trung hòa SO<sub>2</sub>."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ vận dụng Hệ số nhiệt độ Van't Hoff:</strong> Một phản ứng có hệ số nhiệt độ γ = 3. Khi tăng nhiệt độ từ 20°C lên 50°C thì tốc độ phản ứng tăng bao nhiêu lần?<br><em>Giải:</em> Khoảng tăng nhiệt độ ΔT = 50 − 20 = 30°C. Ta có: v<sub>50</sub> / v<sub>20</sub> = γ<sup>30/10</sup> = 3<sup>3</sup> = <strong>27 lần</strong> (tốc độ phản ứng tăng 27 lần, tức thời gian thực hiện phản ứng giảm đi 27 lần)."
    ]
  },

  20: {
    num: 20,
    chapter: 6,
    title: "Ôn tập chương 6: Tốc độ phản ứng hóa học",
    pages: "tr. 101–102",
    isReview: true,
    subtitle: "Hệ thống hóa 3 công thức tính toán Chương 6 (Tốc độ trung bình, Định luật tác dụng khối lượng, Hệ số nhiệt độ Van't Hoff) và kỹ năng giải thích thực tiễn",
    diagramCaption: "Sơ đồ tổng kết Chương 6: Mối liên hệ giữa hệ số tỉ lượng – tốc độ biến thiên từng chất & Giải bài toán nén thể tích bình phản ứng khí",
    keyFormulas: [
      "Mối quan hệ giữa tốc độ trung bình của phản ứng (v<sub>tb</sub>) và tốc độ biến thiên nồng độ của riêng chất A (v<sub>A</sub> = |ΔC<sub>A</sub>|/Δt):<br><strong>v<sub>tb</sub> = v<sub>A</sub> / a = v<sub>B</sub> / b = v<sub>C</sub> / c = v<sub>D</sub> / d</strong>",
      "Khi giảm thể tích bình chứa hỗn hợp khí đi <strong>n lần</strong> (tức tăng áp suất chung lên n lần) ở nhiệt độ không đổi → nồng độ mol của <strong>mọi chất khí trong bình đều tăng lên n lần</strong>."
    ],
    sections: [
      {
        heading: "1. Ba dạng bài tập tính toán trọng tâm trong Chương 6",
        items: [
          "<strong>Dạng 1 – Tính tốc độ trung bình từ bảng số liệu nồng độ theo thời gian:</strong><br>• Chú ý chia cho hệ số cân bằng của chất đang xét trong phương trình hóa học.<br>• Nếu đề bài cho số mol và thể tích bình V (L), phải đổi ra nồng độ mol <strong>C = n / V (mol/L)</strong> trước khi tính ΔC.",
          "<strong>Dạng 2 – Bài toán thay đổi nồng độ hoặc thay đổi áp suất (thể tích bình) theo Định luật tác dụng khối lượng:</strong><br>• Ví dụ với phản ứng đơn giản <strong>2NO(g) + O<sub>2</sub>(g) → 2NO<sub>2</sub>(g)</strong> có biểu thức tốc độ <strong>v = k · C<sub>NO</sub><sup>2</sup> · C<sub>O2</sub></strong>:<br>  + Nếu giữ nguyên C<sub>O2</sub> và tăng C<sub>NO</sub> lên 3 lần → v' = k · (3C<sub>NO</sub>)<sup>2</sup> · C<sub>O2</sub> = <strong>9v</strong> (tốc độ tăng 9 lần).<br>  + Nếu nén bình để áp suất chung tăng lên 3 lần (thể tích giảm 3 lần) → cả C<sub>NO</sub> và C<sub>O2</sub> đều tăng 3 lần → v' = k · (3C<sub>NO</sub>)<sup>2</sup> · (3C<sub>O2</sub>) = 3<sup>2</sup> × 3 · v = <strong>27v</strong> (tốc độ tăng 27 lần).",
          "<strong>Dạng 3 – Bài toán kết hợp hệ số nhiệt độ Van't Hoff (γ) với thời gian phản ứng:</strong><br>• Nhớ rằng thời gian hoàn thành phản ứng <strong>tỉ lệ nghịch</strong> với tốc độ phản ứng: <strong>t<sub>1</sub> / t<sub>2</sub> = v<sub>2</sub> / v<sub>1</sub> = γ<sup>(T2 − T1)/10</sup></strong>."
        ]
      },
      {
        heading: "2. Tổng hợp các câu hỏi giải thích hiện tượng thực tế thường gặp",
        items: [
          "<strong>Vì sao trẻ nhỏ ăn cháo/thức ăn xay nhuyễn dễ tiêu hóa hơn?</strong> Do tăng diện tích bề mặt tiếp xúc của thức ăn với các enzyme tiêu hóa trong dạ dày và ruột non → tốc độ phản ứng thủy phân thức ăn tăng nhanh.",
          "<strong>Vì sao khi nhóm bếp than người ta phải quạt gió hoặc chẻ nhỏ củi mồi?</strong> Quạt gió làm tăng nồng độ oxygen (O<sub>2</sub>) tiếp xúc với than; chẻ nhỏ củi làm tăng diện tích bề mặt tiếp xúc của chất rắn.",
          "<strong>Chất xúc tác có làm thay đổi biến thiên enthalpy Δ<sub>r</sub>H của phản ứng không?</strong> <strong>KHÔNG!</strong> Chất xúc tác chỉ làm giảm năng lượng hoạt hóa (E<sub>a</sub>) để phản ứng đi theo con đường dễ dàng hơn, còn trạng thái đầu và trạng thái cuối không đổi nên Δ<sub>r</sub>H hoàn toàn giữ nguyên."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Kỹ năng đọc Đồ thị Thể tích khí thoát ra theo Thời gian (Thí nghiệm CaCO3 + HCl hoặc phân hủy H2O2)",
      detail: "• Trên đồ thị V<sub>khí</sub> theo thời gian t: <strong>đường cong nào dốc hơn ở giai đoạn đầu</strong> tương ứng với phản ứng có <strong>tốc độ lớn hơn</strong> (nhiệt độ cao hơn, có xúc tác, nồng độ acid lớn hơn hoặc đá vôi đập nhỏ hơn).<br>• Khi phản ứng kết thúc, nếu hai thí nghiệm dùng cùng lượng chất phản ứng giới hạn thì hai đường cong sẽ <strong>tiệm cận cùng một giá trị thể tích khí tối đa V<sub>max</sub> nằm ngang</strong>."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ mẫu:</strong> Ở 20°C, một phản ứng kết thúc sau 36 phút. Hỏi ở 40°C phản ứng đó kết thúc sau bao nhiêu phút, biết hệ số nhiệt độ Van't Hoff γ = 3?<br><em>Giải:</em> v<sub>40</sub> / v<sub>20</sub> = 3<sup>(40−20)/10</sup> = 3<sup>2</sup> = 9 lần ⇒ Thời gian phản ứng giảm 9 lần: t<sub>40</sub> = 36 / 9 = <strong>4 phút</strong>."
    ]
  },

  21: {
    num: 21,
    chapter: 7,
    title: "Nhóm halogen",
    pages: "tr. 103–111",
    isReview: false,
    subtitle: "Vị trí nhóm VIIA (ns²np⁵), xu hướng biến đổi trạng thái – màu sắc – nhiệt độ sôi từ F2 đến I2, tính oxi hóa mạnh giảm dần (F2 > Cl2 > Br2 > I2), điều chế chlorine và nước Javel",
    diagramCaption: "Bảng biến đổi Trạng thái – Màu sắc – Tính oxi hóa của các đơn chất Halogen (F2, Cl2, Br2, I2) và Sơ đồ bình điện phân dung dịch NaCl có màng ngăn",
    keyFormulas: [
      "Cấu hình electron lớp ngoài cùng của nguyên tử nhóm Halogen (VIIA): <strong>ns<sup>2</sup>np<sup>5</sup></strong> (có 7e ngoài cùng, ở trạng thái cơ bản có 1e độc thân; dễ nhận 1e tạo X<sup>−</sup>)",
      "Chiều giảm dần tính oxi hóa của đơn chất Halogen: <strong>F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub></strong>",
      "Điện phân dung dịch NaCl bão hòa có màng ngăn: <strong>2NaCl + 2H<sub>2</sub>O → (đpdd, có màng ngăn) 2NaOH + H<sub>2</sub>↑ + Cl<sub>2</sub>↑</strong>",
      "Điều chế nước Javel (ở nhiệt độ thường): <strong>Cl<sub>2</sub> + 2NaOH → NaCl + NaClO + H<sub>2</sub>O</strong>"
    ],
    sections: [
      {
        heading: "1. Vị trí, Cấu tạo nguyên tử và Trạng thái tự nhiên của các nguyên tố Halogen",
        items: [
          "<strong>Các nguyên tố nhóm Halogen (Nhóm VIIA):</strong> Gồm <strong>Fluorine (F, Z=9), Chlorine (Cl, Z=17), Bromine (Br, Z=35), Iodine (I, Z=53)</strong>, Astatine (At, Z=85) và Tennessine (Ts, Z=117 – nguyên tố phóng xạ nhân tạo).",
          "<strong>Cấu tạo nguyên tử và phân tử:</strong><br>• Nguyên tử halogen đều có <strong>7 electron lớp ngoài cùng (ns<sup>2</sup>np<sup>5</sup>)</strong>, chỉ thiếu 1 electron để đạt octet nên có xu hướng đặc trưng là <strong>nhận thêm 1 electron (X + 1e → X<sup>−</sup>)</strong> hoặc góp chung 1 electron tạo đơn chất hai nguyên tử <strong>X<sub>2</sub> (X–X)</strong>.<br>• <em>Số oxi hóa trong hợp chất:</em> Fluorine (F) có độ âm điện lớn nhất (3,98) và không có phân lớp d nên trong mọi hợp chất <strong>F chỉ có một số oxi hóa duy nhất là −1</strong>. Các nguyên tố Cl, Br, I ngoài số oxi hóa <strong>−1</strong> còn có các số oxi hóa dương <strong>+1, +3, +5, +7</strong> khi liên kết với nguyên tố có độ âm điện lớn hơn (như O, F).",
          "<strong>Trạng thái tự nhiên:</strong> Do hoạt động hóa học mạnh nên trong tự nhiên các halogen <strong>chỉ tồn tại ở dạng hợp chất</strong> (chủ yếu là muối halide: NaCl trong nước biển và mỏ muối; CaF<sub>2</sub> trong quặng fluorite; NaBr, NaI trong nước biển và rong biển; HCl trong dịch vị dạ dày người)."
        ],
        table: {
          headers: ["Đơn chất", "Trạng thái (ở 20°C)", "Màu sắc đặc trưng", "Nhiệt độ nóng chảy / sôi", "Phản ứng với H₂ (H₂ + X₂ → 2HX)"],
          rows: [
            ["Fluorine (F₂)", "Chất khí", "Màu lục nhạt (rất độc)", "t°nc = −220°C; t°s = −188°C", "Nổ mạnh ngay trong bóng tối và ở nhiệt độ rất thấp (−252°C)"],
            ["Chlorine (Cl₂)", "Chất khí", "Màu vàng lục, mùi xốc, độc", "t°nc = −101°C; t°s = −34,1°C", "Nổ mạnh khi có ánh sáng chiếu vào hoặc đun nóng (as / t°)"],
            ["Bromine (Br₂)", "Chất lỏng (dễ bay hơi)", "Màu nâu đỏ (gây bỏng sâu)", "t°nc = −7,3°C; t°s = +58,8°C", "Phản ứng khi đun nóng ở nhiệt độ cao (200–400°C, không gây nổ)"],
            ["Iodine (I₂)", "Chất rắn (dễ thăng hoa)", "Tinh thể màu đen tím (hơi màu tím)", "t°nc = +113,6°C; t°s = +184,4°C", "Chỉ phản ứng ở nhiệt độ cao (350–500°C, xúc tác Pt), thuận nghịch: H₂ + I₂ ⇌ 2HI"]
          ]
        }
      },
      {
        heading: "2. Xu hướng biến đổi Tính chất vật lí của đơn chất Halogen (Từ F2 đến I2)",
        items: [
          "Đi từ <strong>F<sub>2</sub> → Cl<sub>2</sub> → Br<sub>2</sub> → I<sub>2</sub></strong>:<br>• <strong>Trạng thái tập hợp:</strong> Chuyển từ <strong>khí</strong> (F<sub>2</sub>, Cl<sub>2</sub>) sang <strong>lỏng</strong> (Br<sub>2</sub>) rồi sang <strong>rắn</strong> (I<sub>2</sub>).<br>• <strong>Màu sắc:</strong> <strong>Đậm dần</strong> (từ lục nhạt → vàng lục → nâu đỏ → đen tím).<br>• <strong>Nhiệt độ nóng chảy và nhiệt độ sôi:</strong> <strong>Tăng dần</strong>. <em>Giải thích:</em> Phân tử X<sub>2</sub> không phân cực; đi từ F<sub>2</sub> đến I<sub>2</sub>, khối lượng phân tử và kích thước phân tử (số electron) tăng lên làm <strong>tương tác van der Waals giữa các phân tử mạnh dần</strong>.<br>• <strong>Hiện tượng thăng hoa của Iodine (I<sub>2</sub>):</strong> Khi đun nóng ở áp suất thường, tinh thể I<sub>2</sub> rắn chuyển trực tiếp thành hơi màu tím mà không qua trạng thái lỏng; khi gặp lạnh hơi tím ngưng tụ lại thành tinh thể rắn (ứng dụng để tinh chế iodine)."
        ]
      },
      {
        heading: "3. Tính chất hóa học đặc trưng: Tính oxi hóa mạnh và giảm dần từ F2 đến I2",
        items: [
          "<strong>1. Tác dụng với kim loại (Oxi hóa hầu hết kim loại lên số oxi hóa cao):</strong><br>• F<sub>2</sub> oxi hóa được tất cả kim loại (kể cả Au, Pt).<br>• Cl<sub>2</sub> oxi hóa hầu hết kim loại (trừ Au, Pt) khi đun nóng, đưa sắt lên <strong>sắt(III)</strong>: <strong>2Na + Cl<sub>2</sub> → (t°) 2NaCl</strong>; <strong>2Fe + 3Cl<sub>2</sub> → (t°) 2FeCl<sub>3</sub></strong>; <strong>Cu + Cl<sub>2</sub> → (t°) CuCl<sub>2</sub></strong>.",
          "<strong>2. Tác dụng với Hydrogen (H<sub>2</sub> + X<sub>2</sub> → 2HX):</strong> Khả năng phản ứng giảm rõ rệt từ F<sub>2</sub> đến I<sub>2</sub> (xem bảng trên), chứng minh <strong>tính oxi hóa giảm dần: F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub></strong>.",
          "<strong>3. Tác dụng với Nước (H<sub>2</sub>O):</strong><br>• F<sub>2</sub> phản ứng mãnh liệt làm bốc cháy hơi nước giải phóng O<sub>2</sub>: <strong>2F<sub>2</sub> + 2H<sub>2</sub>O → 4HF + O<sub>2</sub>↑</strong> (vì vậy F<sub>2</sub> KHÔNG đẩy được Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub> ra khỏi dung dịch muối!).<br>• Cl<sub>2</sub> (và Br<sub>2</sub>) tác dụng thuận nghịch một phần với nước (phản ứng tự oxi hóa – khử): <strong>Cl<sub>2</sub> + H<sub>2</sub>O ⇌ HCl + HClO</strong> (hypochlorous acid). <strong>HClO</strong> có tính oxi hóa rất mạnh nên nước chlorine có tính <strong>tẩy màu và sát trùng, diệt khuẩn</strong>.",
          "<strong>4. Tác dụng với dung dịch Kiềm (NaOH, KOH):</strong><br>• Với dung dịch NaOH loãng ở nhiệt độ thường tạo <strong>Nước Javel</strong> (hỗn hợp NaCl, NaClO và NaOH dư dùng tẩy trắng vải sợi, khử trùng): <strong>Cl<sub>2</sub> + 2NaOH → NaCl + NaClO + H<sub>2</sub>O</strong>.<br>• Với dung dịch KOH đặc ở nhiệt độ cao (100°C) tạo potassium chlorate (KClO<sub>3</sub> – nguyên liệu làm thuốc nổ, diêm): <strong>3Cl<sub>2</sub> + 6KOH → (100°C) 5KCl + KClO<sub>3</sub> + 3H<sub>2</sub>O</strong>.",
          "<strong>5. Tác dụng với dung dịch muối Halide (Từ Cl<sub>2</sub> trở đi, halogen mạnh đẩy halogen yếu):</strong><br>• <strong>Cl<sub>2</sub> + 2NaBr → 2NaCl + Br<sub>2</sub></strong>  và  <strong>Cl<sub>2</sub> + 2NaI → 2NaCl + I<sub>2</sub></strong>.<br>• <strong>Br<sub>2</sub> + 2NaI → 2NaBr + I<sub>2</sub></strong>."
        ]
      },
      {
        heading: "4. Điều chế và Ứng dụng của Chlorine",
        items: [
          "<strong>Trong phòng thí nghiệm:</strong> Cho dung dịch <strong>HCl đặc</strong> tác dụng với các chất oxi hóa mạnh như <strong>MnO<sub>2</sub> (đun nóng)</strong> hoặc <strong>KMnO<sub>4</sub></strong>:<br>• <strong>MnO<sub>2</sub> + 4HCl (đặc) → (t°) MnCl<sub>2</sub> + Cl<sub>2</sub>↑ + 2H<sub>2</sub>O</strong><br>• <strong>2KMnO<sub>4</sub> + 16HCl (đặc) → 2KCl + 2MnCl<sub>2</sub> + 5Cl<sub>2</sub>↑ + 8H<sub>2</sub>O</strong>.",
          "<strong>Trong công nghiệp:</strong> Điện phân dung dịch NaCl bão hòa trong bình điện phân <strong>có màng ngăn xốp</strong> giữa hai điện cực:<br>• <strong>2NaCl + 2H<sub>2</sub>O → (đpdd, có màng ngăn) 2NaOH + H<sub>2</sub>↑ (ở cathode −) + Cl<sub>2</sub>↑ (ở anode +)</strong>.<br>• <em>Nếu không có màng ngăn:</em> Khí Cl<sub>2</sub> thoát ra ở anode sẽ tác dụng ngay với dung dịch NaOH tạo ra ở cathode để thành <strong>nước Javel</strong>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Quy trình thu khí Chlorine chuẩn trong phòng thí nghiệm & Cảnh báo an toàn Nước Javel",
      detail: "• <strong>Hệ thống điều chế và làm sạch khí Cl<sub>2</sub> trong PTN:</strong> Khí Cl<sub>2</sub> thoát ra từ bình phản ứng (MnO<sub>2</sub> + HCl đặc) thường lẫn tạp chất khí HCl và hơi nước. Để thu Cl<sub>2</sub> tinh khiết và khô, dẫn hỗn hợp khí lần lượt qua: <strong>Bình 1 đựng dung dịch NaCl bão hòa</strong> (để giữ lại khí HCl) → <strong>Bình 2 đựng H<sub>2</sub>SO<sub>4</sub> đặc</strong> (để hút ẩm làm khô) → Bình thu khí đặt đứng (do Cl<sub>2</sub> nặng hơn không khí: M=71 > 29), miệng bình đậy bông tẩm dung dịch <strong>NaOH</strong> để hấp thụ khí Cl<sub>2</sub> thừa.<br>⚠️ <strong>An toàn tuyệt đối trong gia đình:</strong> <strong>KHÔNG BAO GIỜ trộn lẫn Nước Javel (chứa NaClO) với các dung dịch tẩy rửa bồn cầu có tính acid (chứa HCl)</strong> vì sẽ xảy ra phản ứng: <strong>NaClO + 2HCl → NaCl + Cl<sub>2</sub>↑ + H<sub>2</sub>O</strong> giải phóng khí Cl<sub>2</sub> cực độc trong phòng kín!"
    },
    examplesAndMistakes: [
      "<strong>Lỗi sai kinh điển cần tránh:</strong> Viết phương trình F<sub>2</sub> + 2NaCl (dd) → 2NaF + Cl<sub>2</sub>↑ là <strong>SAI</strong>, vì khi sục F<sub>2</sub> vào dung dịch muối thì F<sub>2</sub> phản ứng ngay lập tức với nước (2F<sub>2</sub> + 2H<sub>2</sub>O → 4HF + O<sub>2</sub>↑) chứ không đẩy Cl<sub>2</sub> ra khỏi muối."
    ]
  },

  22: {
    num: 22,
    chapter: 7,
    title: "Hydrogen halide. Muối halide",
    pages: "tr. 112–116",
    isReview: false,
    subtitle: "Giải thích nhiệt độ sôi cao bất thường của HF, quy luật tăng dần tính acid (HF < HCl < HBr < HI), tính ăn mòn thủy tinh của HF, tính khử của ion X⁻ (F⁻ < Cl⁻ < Br⁻ < I⁻) và nhận biết bằng AgNO3",
    diagramCaption: "Đồ thị Nhiệt độ sôi của dãy HX (HF cao bất thường do liên kết Hydrogen) và Bảng màu kết tủa nhận biết ion Halide (X⁻) bằng dung dịch AgNO3",
    keyFormulas: [
      "<strong>Thứ tự Nhiệt độ sôi của các Hydrogen halide:</strong> <strong>HCl (−85°C) < HBr (−67°C) < HI (−35°C) < HF (+19,5°C)</strong> (HF cao nhất do tạo liên kết hydrogen bền vững: ···H–F···H–F···)",
      "<strong>Thứ tự Độ mạnh tính Acid trong dung dịch nước:</strong> <strong>HF (acid yếu) < HCl (mạnh) < HBr (rất mạnh) < HI (mạnh nhất)</strong> (do độ dài liên kết H–X tăng, năng lượng liên kết giảm nên càng dễ phân li ra H<sup>+</sup>)",
      "<strong>Thứ tự Tính khử của các ion Halide:</strong> <strong>F<sup>−</sup> (không có tính khử) < Cl<sup>−</sup> < Br<sup>−</sup> < I<sup>−</sup> (tính khử mạnh nhất)</strong>",
      "Phản ứng đặc trưng ăn mòn thủy tinh của HF: <strong>SiO<sub>2</sub> + 4HF → SiF<sub>4</sub>↑ + 2H<sub>2</sub>O</strong>"
    ],
    sections: [
      {
        heading: "1. Hydrogen halide (HX) và Hydrohalic acid: Cấu tạo, Nhiệt độ sôi & Tính Acid",
        items: [
          "<strong>Cấu tạo phân tử HX:</strong> Gồm 1 liên kết cộng hóa trị phân cực H<sup>δ+</sup>–X<sup>δ−</sup>. Đi từ HF đến HI: bán kính nguyên tử X tăng lên → <strong>độ dài liên kết H–X tăng dần, năng lượng liên kết E<sub>b</sub>(H–X) giảm dần</strong> (HF: 565 kJ/mol > HCl: 431 > HBr: 364 > HI: 297 kJ/mol) → độ bền nhiệt của phân tử HX giảm dần từ HF đến HI.",
          "<strong>Quy luật Nhiệt độ sôi (Có điểm bất thường ở HF):</strong><br>• Từ HCl (−85,1°C) → HBr (−66,7°C) → HI (−35,4°C): nhiệt độ sôi <strong>tăng dần</strong> do phân tử khối tăng làm tương tác van der Waals tăng.<br>• Riêng <strong>HF có nhiệt độ sôi cao bất thường (+19,5°C)</strong>, cao hơn cả HI vì nguyên tử F có độ âm điện rất lớn, bán kính nhỏ nên giữa các phân tử HF tạo được <strong>liên kết hydrogen liên phân tử (···H–F···H–F···)</strong> rất bền.",
          "<strong>Quy luật Tính Acid của dung dịch Hydrohalic acid (HX(aq)):</strong> Khi tan trong nước, các khí HX tạo thành dung dịch acid tương ứng. Đi từ <strong>HF → HCl → HBr → HI, tính acid tăng dần</strong>:<br>• <strong>Hydrofluoric acid (HF):</strong> Là một <strong>acid yếu</strong> (do liên kết H–F quá bền và có liên kết hydrogen giữ H<sup>+</sup>), nhưng có tính chất đặc biệt là <strong>ăn mòn thủy tinh (SiO<sub>2</sub>)</strong>: <strong>SiO<sub>2</sub> + 4HF → SiF<sub>4</sub>↑ + 2H<sub>2</sub>O</strong> (ứng dụng khắc chữ/hoa văn lên thủy tinh; phải đựng dung dịch HF trong bình nhựa chất dẻo chứ không đựng trong lọ thủy tinh).<br>• <strong>HCl, HBr, HI:</strong> Đều là các <strong>acid mạnh</strong>, mang đầy đủ tính chất hóa học của một acid mạnh: làm quỳ tím hóa đỏ; tác dụng với kim loại đứng trước H trong dãy hoạt động (Zn, Fe, Mg, Al — lưu ý Fe tạo muối <strong>Fe(II)</strong>: Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>↑, còn Cu, Ag không phản ứng với HCl loãng); tác dụng với basic oxide (MgO, CuO, Fe<sub>2</sub>O<sub>3</sub>), base (NaOH, Cu(OH)<sub>2</sub>) và muối (CaCO<sub>3</sub>, NaHCO<sub>3</sub>)."
        ]
      },
      {
        heading: "2. Muối Halide: Tính tan và Phương pháp nhận biết ion Halide (X⁻) bằng dung dịch AgNO3",
        items: [
          "<strong>Tính tan của muối Halide:</strong> Hầu hết các muối halide đều dễ tan trong nước, ngoại trừ một số muối không tan (<strong>AgCl, AgBr, AgI</strong>) hoặc ít tan (<strong>PbCl<sub>2</sub>, PbBr<sub>2</sub></strong>). Lưu ý: <strong>AgF là muối TAN tốt trong nước!</strong>",
          "<strong>Thuốc thử nhận biết ion Halide (F<sup>−</sup>, Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>):</strong> Dùng dung dịch <strong>Silver nitrate (AgNO<sub>3</sub>)</strong> để quan sát màu sắc kết tủa đặc trưng."
        ],
        table: {
          headers: ["Ion Halide (Muối NaX)", "Hiện tượng khi nhỏ dung dịch AgNO₃", "Phương trình hóa học / Phương trình ion rút gọn"],
          rows: [
            ["Fluoride (F⁻, ví dụ NaF)", "KHÔNG có hiện tượng kết tủa (vì AgF tan trong nước)", "Không tạo kết tủa"],
            ["Chloride (Cl⁻, ví dụ NaCl, HCl)", "Xuất hiện kết tủa màu TRẮNG của AgCl", "NaCl + AgNO₃ → AgCl↓ (trắng) + NaNO₃   (Ag⁺ + Cl⁻ → AgCl↓)"],
            ["Bromide (Br⁻, ví dụ NaBr, HBr)", "Xuất hiện kết tủa màu VÀNG NHẠT (màu kem) của AgBr", "NaBr + AgNO₃ → AgBr↓ (vàng nhạt) + NaNO₃   (Ag⁺ + Br⁻ → AgBr↓)"],
            ["Iodide (I⁻, ví dụ NaI, KI)", "Xuất hiện kết tủa màu VÀNG ĐẬM của AgI", "NaI + AgNO₃ → AgI↓ (vàng đậm) + NaNO₃   (Ag⁺ + I⁻ → AgI↓)"]
          ]
        }
      },
      {
        heading: "3. Tính khử của các ion Halide: F⁻ < Cl⁻ < Br⁻ < I⁻ (Phản ứng với H2SO4 đặc)",
        items: [
          "Trong ion X<sup>−</sup>, nguyên tố halogen có số oxi hóa thấp nhất là <strong>−1</strong> nên chỉ có thể thể hiện <strong>tính khử</strong> (nhường electron tăng số oxi hóa). Khi đi từ F<sup>−</sup> đến I<sup>−</sup>, bán kính ion tăng lên làm khả năng nhường electron dễ dàng hơn → <strong>tính khử tăng dần: F<sup>−</sup> < Cl<sup>−</sup> < Br<sup>−</sup> < I<sup>−</sup></strong>.",
          "<strong>Chứng minh qua phản ứng của muối NaX rắn (hoặc dung dịch đặc) với dung dịch H<sub>2</sub>SO<sub>4</sub> đặc nóng (S<sup>+6</sup>):</strong><br>1. <strong>Với F<sup>−</sup> và Cl<sup>−</sup> (Không khử được H<sub>2</sub>SO<sub>4</sub> đặc):</strong> Chỉ xảy ra phản ứng trao đổi tạo khí HF hoặc HCl bay ra (phương pháp sunfat điều chế HCl trong PTN):<br>  <strong>NaCl (rắn) + H<sub>2</sub>SO<sub>4</sub> (đặc) → (< 250°C) NaHSO<sub>4</sub> + HCl↑</strong>.<br>2. <strong>Với Br<sup>−</sup> (Tính khử khá mạnh):</strong> Khử S<sup>+6</sup> trong H<sub>2</sub>SO<sub>4</sub> đặc xuống <strong>S<sup>+4</sup> (khí SO<sub>2</sub> mùi hắc)</strong> đồng thời tạo hơi Br<sub>2</sub> màu nâu đỏ:<br>  <strong>2NaBr + 3H<sub>2</sub>SO<sub>4</sub> (đặc) → 2NaHSO<sub>4</sub> + Br<sub>2</sub> + SO<sub>2</sub>↑ + 2H<sub>2</sub>O</strong>.<br>3. <strong>Với I<sup>−</sup> (Tính khử rất mạnh):</strong> Khử sâu S<sup>+6</sup> trong H<sub>2</sub>SO<sub>4</sub> đặc xuống tận <strong>S<sup>−2</sup> (khí H<sub>2</sub>S mùi trứng thối)</strong> (hoặc S kết tủa vàng) và giải phóng I<sub>2</sub> đen tím:<br>  <strong>8NaI + 9H<sub>2</sub>SO<sub>4</sub> (đặc) → 8NaHSO<sub>4</sub> + 4I<sub>2</sub> + H<sub>2</sub>S↑ + 4H<sub>2</sub>O</strong>."
        ]
      },
      {
        heading: "4. Ứng dụng của Muối ăn (NaCl), nước muối sinh lí 0,9% và Muối Iod",
        items: [
          "<strong>Vai trò của Sodium chloride (NaCl):</strong> Cung cấp ion Na<sup>+</sup> và Cl<sup>−</sup> duy trì cân bằng điện giải, áp suất thẩm thấu và truyền dẫn xung thần kinh trong cơ thể; làm gia vị và bảo quản thực phẩm; nguyên liệu sản xuất Cl<sub>2</sub>, NaOH, nước Javel, soda (Na<sub>2</sub>CO<sub>3</sub>).",
          "<strong>Nước muối sinh lí (Dung dịch NaCl 0,9%):</strong> Chứa <strong>0,9 g NaCl tinh khiết trong 100 mL dung dịch</strong> (tức <strong>9,0 g NaCl trong 1 L dung dịch</strong>), có áp suất thẩm thấu tương đương dịch cơ thể người.",
          "<strong>Muối Iod (Phòng bệnh bướu cổ và thiểu năng trí tuệ):</strong> Là muối ăn NaCl được trộn thêm một lượng nhỏ hợp chất chứa iodine là <strong>KI hoặc KIO<sub>3</sub></strong> (chứ không trộn đơn chất I<sub>2</sub> vì I<sub>2</sub> độc và dễ thăng hoa)."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Giải thích vì sao KHÔNG dùng phương pháp Sunfat (NaX + H2SO4 đặc) để điều chế HBr và HI",
      detail: "Khi cho NaCl rắn tác dụng với H<sub>2</sub>SO<sub>4</sub> đặc nóng thì thu được khí HCl tinh khiết vì Cl<sup>−</sup> có tính khử yếu, không bị H<sub>2</sub>SO<sub>4</sub> đặc oxi hóa. Ngược lại, nếu cho NaBr hoặc NaI tác dụng với H<sub>2</sub>SO<sub>4</sub> đặc thì HBr và HI sinh ra có tính khử mạnh sẽ lập tức bị H<sub>2</sub>SO<sub>4</sub> đặc oxi hóa thành <strong>Br<sub>2</sub> (lẫn SO<sub>2</sub>)</strong> và <strong>I<sub>2</sub> (lẫn H<sub>2</sub>S)</strong>. Để điều chế HBr, HI tinh khiết người ta dùng H<sub>3</sub>PO<sub>4</sub> đặc hoặc thủy phân PBr<sub>3</sub>, PI<sub>3</sub>.<br>⚠️ <strong>An toàn:</strong> Dung dịch HF gây bỏng sâu và hủy hoại xương; khí SO<sub>2</sub> và H<sub>2</sub>S rất độc — mọi thí nghiệm chỉ được thực hiện theo quy chuẩn phòng thí nghiệm chuyên dụng."
    },
    examplesAndMistakes: [
      "<strong>Bài toán pha chế nước muối sinh lí 0,9%:</strong> Để pha chế 500 mL dung dịch nước muối sinh lí 0,9% (khối lượng riêng D ≈ 1,0 g/mL), khối lượng NaCl tinh khiết cần cân là: m<sub>NaCl</sub> = 500 × (0,9 / 100) = <strong>4,5 gam</strong>."
    ]
  },

  23: {
    num: 23,
    chapter: 7,
    title: "Ôn tập chương 7: Nguyên tố nhóm halogen",
    pages: "tr. 117–118",
    isReview: true,
    subtitle: "Bảng tổng kết so sánh toàn diện Đơn chất X2 – Hợp chất HX – Muối Halide, sơ đồ chuỗi phản ứng Chương 7 và phương pháp giải toán kết tủa AgX",
    diagramCaption: "Sơ đồ tổng kết Chương 7: Chuỗi chuyển hóa Halogen (MnO2 → Cl2 → HCl → NaCl → Cl2 → Nước Javel / KClO3) và Quy luật biến đổi toàn nhóm VIIA",
    keyFormulas: [
      "Chiều biến đổi <strong>Đơn chất X<sub>2</sub> (F<sub>2</sub> → Cl<sub>2</sub> → Br<sub>2</sub> → I<sub>2</sub>)</strong>: Nhiệt độ sôi <strong>tăng</strong> • Màu sắc <strong>đậm dần</strong> • Tính oxi hóa <strong>giảm dần</strong>",
      "Chiều biến đổi <strong>Hợp chất HX (HF → HCl → HBr → HI)</strong>: Độ dài liên kết <strong>tăng</strong> • Độ bền nhiệt <strong>giảm</strong> • Tính acid <strong>tăng dần</strong> • Tính khử <strong>tăng dần</strong> • Nhiệt độ sôi: <strong>HCl < HBr < HI < HF</strong>",
      "Bảo toàn nguyên tố Halogen khi cho dung dịch AgNO<sub>3</sub> dư vào hỗn hợp muối NaCl, NaBr, NaI: <strong>n<sub>AgCl</sub> = n<sub>Cl⁻</sub>; n<sub>AgBr</sub> = n<sub>Br⁻</sub>; n<sub>AgI</sub> = n<sub>I⁻</sub></strong> (riêng NaF không tạo kết tủa!)"
    ],
    sections: [
      {
        heading: "1. Bảng đối chiếu tổng hợp toàn bộ kiến thức Chương 7 (Nhóm Halogen)",
        items: [
          "Nắm vững sự đối lập chiều biến đổi giữa <strong>Tính oxi hóa của đơn chất X<sub>2</sub> (giảm dần từ F<sub>2</sub> đến I<sub>2</sub>)</strong> với <strong>Tính acid và Tính khử của HX / X<sup>−</sup> (tăng dần từ HF đến HI)</strong> là chìa khóa giải quyết mọi câu hỏi lý thuyết Chương 7."
        ],
        table: {
          headers: ["Tiêu chí tổng hợp", "Fluorine (F)", "Chlorine (Cl)", "Bromine (Br)", "Iodine (I)"],
          rows: [
            ["Cấu hình e ngoài cùng & Số oxi hóa", "2s²2p⁵ (chỉ có −1 trong hợp chất)", "3s²3p⁵ (−1, +1, +3, +5, +7)", "4s²4p⁵ (−1, +1, +3, +5, +7)", "5s²5p⁵ (−1, +1, +3, +5, +7)"],
            ["Đơn chất X₂ (Trạng thái, màu)", "Khí màu lục nhạt", "Khí màu vàng lục", "Lỏng màu nâu đỏ", "Rắn màu đen tím (thăng hoa)"],
            ["Tính oxi hóa của X₂", "Mạnh nhất (phản ứng nổ với H₂O)", "Rất mạnh (tạo nước Javel, FeCl₃)", "Mạnh (đẩy được I₂ khỏi NaI)", "Yếu nhất trong 4 halogen"],
            ["Dung dịch Acid HX(aq)", "HF: Acid yếu, ăn mòn thủy tinh SiO₂", "HCl: Acid mạnh", "HBr: Acid rất mạnh", "HI: Acid mạnh nhất trong dãy"],
            ["Tác dụng của NaX với H₂SO₄ đặc", "Tạo khí HF (phản ứng trao đổi)", "Tạo khí HCl (phản ứng trao đổi)", "Tạo Br₂ + khí SO₂↑ (oxi hóa – khử)", "Tạo I₂ + khí H₂S↑ (oxi hóa – khử)"],
            ["Nhận biết X⁻ bằng dd AgNO₃", "Không hiện tượng (AgF tan)", "Kết tủa AgCl màu TRẮNG", "Kết tủa AgBr màu VÀNG NHẠT", "Kết tủa AgI màu VÀNG ĐẬM"]
          ]
        }
      },
      {
        heading: "2. Các dạng bài tập tính toán trọng tâm Chương 7",
        items: [
          "<strong>Dạng 1 – Bài toán cho dung dịch AgNO<sub>3</sub> dư vào hỗn hợp 2 muối NaX và NaY thuộc 2 chu kì liên tiếp:</strong><br>• <em>Trường hợp 1 (Cả 2 muối đều tạo kết tủa: Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>):</em> Tính phân tử khối trung bình của muối hoặc của kết tủa AgX̄ (M<sub>AgX̄</sub> = 108 + M<sub>X̄</sub>) để tìm hai nguyên tố kế tiếp.<br>• <em>Trường hợp 2 (Chỉ có 1 muối tạo kết tủa):</em> Hai nguyên tố kế tiếp bắt buộc phải là <strong>Fluorine (F, vì AgF tan) và Chlorine (Cl, tạo kết tủa AgCl trắng)</strong>!",
          "<strong>Dạng 2 – Bài toán Kim loại / Hỗn hợp Oxide kim loại tác dụng với dung dịch HCl:</strong><br>• Khi cho hỗn hợp oxide kim loại (MgO, Al<sub>2</sub>O<sub>3</sub>, Fe<sub>2</sub>O<sub>3</sub>, CuO) tác dụng vừa đủ với dung dịch HCl tạo muối chloride và H<sub>2</sub>O: nhìn vào bản chất <strong>O<sup>2−</sup> (trong oxide) + 2H<sup>+</sup> (trong HCl) → H<sub>2</sub>O</strong>, ta luôn có công thức giải nhanh: <strong>n<sub>HCl</sub> = 2·n<sub>H2O</sub> = 2·n<sub>O(trong oxide)</sub></strong> và bảo toàn khối lượng: <strong>m<sub>muối chloride</sub> = m<sub>oxide</sub> + 27,5 · n<sub>HCl</sub></strong>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Mẹo phân biệt nhanh các lọ mất nhãn chứa dung dịch Halide và Acid",
      detail: "Chỉ dùng <strong>1 thuốc thử duy nhất là dung dịch AgNO<sub>3</sub></strong> có thể phân biệt đồng thời 4 dung dịch: <strong>NaF</strong> (không kết tủa), <strong>NaCl</strong> (kết tủa trắng AgCl), <strong>NaBr</strong> (kết tủa vàng nhạt AgBr), <strong>NaI</strong> (kết tủa vàng đậm AgI)."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ mẫu:</strong> Cho 31,84 g hỗn hợp NaX và NaY (X, Y là hai halogen ở hai chu kì liên tiếp) vào dung dịch AgNO<sub>3</sub> dư, thu được 57,34 g kết tủa. Tìm công thức của hai muối.<br><em>Giải (TH cả 2 tạo kết tủa):</em> Cứ 1 mol NaX̄ (M = 23 + X̄) tạo ra 1 mol AgX̄ (M = 108 + X̄), khối lượng tăng thêm Δm = 108 − 23 = 85 g/mol ⇒ n<sub>hh muối</sub> = (57,34 − 31,84) / 85 = 25,5 / 85 = 0,3 mol ⇒ M<sub>NaX̄</sub> = 31,84 / 0,3 = 106,13 g/mol ⇒ X̄ = 83,13. Vì 80 (Br) < 83,13 < 127 (I) nên hai muối là <strong>NaBr và NaI</strong>."
    ]
  }
};

// BẢNG CÔNG THỨC VÀ QUY TẮC TRA NHANH TOÀN MÔN HÓA HỌC 10
const quickFormulaTable = [
  {
    topic: "1. Số khối & Hạt cơ bản trong nguyên tử",
    formula: "<strong>A = Z + N</strong>  •  Nguyên tử trung hòa: <strong>p = e = Z</strong>  •  Tổng hạt: <strong>S = 2Z + N</strong>",
    lessonRef: "Bài 1, Bài 2"
  },
  {
    topic: "2. Nguyên tử khối trung bình của các đồng vị",
    formula: "<strong>Ā = (A<sub>1</sub>·a<sub>1</sub> + A<sub>2</sub>·a<sub>2</sub> + ... + A<sub>n</sub>·a<sub>n</sub>) / 100</strong>   (với Σa<sub>i</sub> = 100%)",
    lessonRef: "Bài 2, Bài 4"
  },
  {
    topic: "3. Số Orbital (AO) & Sức chứa electron lớp thứ n",
    formula: "Số AO trong lớp thứ n: <strong>n<sup>2</sup></strong>  •  Số electron tối đa trong lớp thứ n: <strong>2n<sup>2</sup></strong>",
    lessonRef: "Bài 3"
  },
  {
    topic: "4. Sức chứa electron của các phân lớp",
    formula: "<strong>s: 1 AO / tối đa 2e (s<sup>2</sup>)  •  p: 3 AO / 6e (p<sup>6</sup>)  •  d: 5 AO / 10e (d<sup>10</sup>)  •  f: 7 AO / 14e (f<sup>14</sup>)</strong>",
    lessonRef: "Bài 3"
  },
  {
    topic: "5. Liên hệ Vị trí bảng tuần hoàn & Cấu tạo nguyên tử",
    formula: "<strong>STT Ô = Z  •  STT Chu kì = Số lớp e  •  STT Nhóm A = Số e lớp ngoài cùng</strong>",
    lessonRef: "Bài 5, Bài 8"
  },
  {
    topic: "6. Hóa trị cao nhất với O & Hợp chất khí với H",
    formula: "Nhóm nA (IV → VII): Oxide cao nhất <strong>R<sub>2</sub>O<sub>n</sub></strong>  •  Hợp chất khí với H: <strong>RH<sub>8−n</sub></strong>",
    lessonRef: "Bài 7, Bài 9"
  },
  {
    topic: "7. Hiệu độ âm điện (Δχ) và Loại liên kết (quy ước)",
    formula: "<strong>0 ≤ Δχ < 0,4</strong>: CHT không cực  •  <strong>0,4 ≤ Δχ < 1,7</strong>: CHT phân cực  •  <strong>Δχ ≥ 1,7</strong>: Liên kết ion",
    lessonRef: "Bài 12, Bài 14"
  },
  {
    topic: "8. Quy tắc Số oxi hóa & Thăng bằng electron",
    formula: "Đơn chất = 0; Tổng phân tử = 0; Tổng ion = điện tích ion  •  <strong>Σ n<sub>e khử nhường</sub> = Σ n<sub>e oxi hóa nhận</sub></strong>",
    lessonRef: "Bài 15, Bài 16"
  },
  {
    topic: "9. Biến thiên Enthalpy chuẩn theo Nhiệt tạo thành",
    formula: "<strong>Δ<sub>r</sub>H°<sub>298</sub> = Σ ν<sub>sp</sub>·Δ<sub>f</sub>H°<sub>298</sub>(sản phẩm) − Σ ν<sub>cđ</sub>·Δ<sub>f</sub>H°<sub>298</sub>(chất đầu)</strong>",
    lessonRef: "Bài 17, Bài 18"
  },
  {
    topic: "10. Biến thiên Enthalpy chuẩn theo Năng lượng liên kết",
    formula: "<strong>Δ<sub>r</sub>H°<sub>298</sub> = Σ E<sub>b</sub>(chất đầu) − Σ E<sub>b</sub>(sản phẩm)</strong>  (Áp dụng cho các chất ở thể khí)",
    lessonRef: "Bài 17, Bài 18"
  },
  {
    topic: "11. Quy ước dấu của Biến thiên Enthalpy ΔrH°298",
    formula: "<strong>Δ<sub>r</sub>H°<sub>298</sub> < 0</strong>: Phản ứng tỏa nhiệt  •  <strong>Δ<sub>r</sub>H°<sub>298</sub> > 0</strong>: Phản ứng thu nhiệt",
    lessonRef: "Bài 17"
  },
  {
    topic: "12. Tốc độ trung bình & Hệ số nhiệt độ Van't Hoff",
    formula: "<strong>v<sub>tb</sub> = −(1/a)(ΔC<sub>A</sub>/Δt) = +(1/c)(ΔC<sub>C</sub>/Δt)</strong>  •  <strong>v<sub>2</sub> / v<sub>1</sub> = γ<sup>(T2 − T1)/10</sup></strong>",
    lessonRef: "Bài 19, Bài 20"
  },
  {
    topic: "13. Quy luật Tính oxi hóa đơn chất Halogen",
    formula: "Tính oxi hóa giảm dần: <strong>F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub></strong>",
    lessonRef: "Bài 21, Bài 23"
  },
  {
    topic: "14. Quy luật Tính acid HX & Tính khử ion Halide",
    formula: "Tính acid: <strong>HF < HCl < HBr < HI</strong>  •  Tính khử ion: <strong>F<sup>−</sup> < Cl<sup>−</sup> < Br<sup>−</sup> < I<sup>−</sup></strong>",
    lessonRef: "Bài 22, Bài 23"
  }
];

// GHI CHÚ AN TOÀN THỰC HÀNH HÓA HỌC 10 TOÀN SÁCH
const safetyGuidelines = [
  {
    num: 1,
    title: "Nguyên tắc chung trong Phòng thực hành Hóa học",
    desc: "Luôn đọc kỹ nhãn hóa chất trước khi dùng; mặc áo blouse, đeo kính bảo hộ và găng tay phù hợp; tuyệt đối không nếm, không ngửi trực tiếp miệng lọ hay dùng miệng hút hóa chất bằng pipet; làm đúng liều lượng giáo viên hướng dẫn."
  },
  {
    num: 2,
    title: "An toàn với Kim loại kiềm (Sodium – Na, Potassium – K)",
    desc: "Kim loại kiềm phản ứng mãnh liệt với nước tỏa nhiệt lớn và dễ gây nổ bắn kiềm nóng. Chỉ dùng mẫu cực nhỏ (cỡ hạt tấm) đã thấm khô dầu hỏa bằng giấy lọc, dùng kẹp sắt gắp, không bao giờ cầm tay trần."
  },
  {
    num: 3,
    title: "An toàn với Khí độc (Cl2, Br2, SO2, H2S)",
    desc: "Chlorine, hơi bromine, khí SO₂ (từ thí nghiệm Na₂S₂O₃ + H₂SO₄ hoặc NaBr + H₂SO₄ đặc) và H₂S đều gây tổn thương đường hô hấp. Phải thực hiện trong tủ hút hoặc nơi thông thoáng, có bông tẩm dung dịch NaOH thu hồi khí thừa."
  },
  {
    num: 4,
    title: "An toàn với Acid ăn mòn (H2SO4 đặc, HCl đặc, HF) & Nước Javel",
    desc: "HF ăn mòn thủy tinh và gây bỏng sâu cực kỳ nguy hiểm; H₂SO₄ đặc gây bỏng nặng (khi pha loãng phải rót từ từ acid vào nước, không làm ngược lại). Tuyệt đối không trộn lẫn nước Javel với dung dịch tẩy rửa có acid vì sẽ sinh khí Cl₂ độc."
  },
  {
    num: 5,
    title: "An toàn với Phản ứng tỏa nhiệt mạnh (Tôi vôi, Đốt cháy, Đèn cồn)",
    desc: "Phản ứng tôi vôi sống (CaO + H₂O) tỏa nhiệt rất mạnh có thể làm sôi bắn vôi. Khi dùng đèn cồn đun nóng ống nghiệm phải hướng miệng ống nghiệm về phía không có người và đậy nắp đèn cồn để tắt lửa (không thổi bằng miệng)."
  },
  {
    num: 6,
    title: "An toàn Y tế đối với Dung dịch NaCl 0,9%",
    desc: "Dung dịch NaCl 0,9% dùng tiêm truyền tĩnh mạch bắt buộc phải được pha chế trong điều kiện vô trùng tuyệt đối tại cơ sở dược phẩm và sử dụng theo chỉ định y tế; học sinh không tự pha nước muối ở nhà để tiêm hay nhỏ mắt."
  }
];

const allLessons = { ...lessonsP1, ...lessonsP2 };

const fullData = {
  chapters,
  lessons: allLessons,
  quickFormulaTable,
  safetyGuidelines
};

const outPath = path.join(__dirname, 'hoahoc10_data.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(fullData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/hoahoc10_data.js! Total lessons:', Object.keys(allLessons).length);
