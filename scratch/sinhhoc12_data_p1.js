// scratch/sinhhoc12_data_p1.js
// Dữ liệu Sinh học 12 - Bộ Kết nối tri thức: Chương 1 đến Chương 3 (Bài 1 -> 17)

const lessonsP1 = {
  // ===================== CHƯƠNG 1. DI TRUYỀN PHÂN TỬ =====================
  1: {
    num: 1,
    chapter: 1,
    isPractical: false,
    title: "DNA và cơ chế tái bản DNA",
    subtitle: "Cấu trúc xoắn kép, mã hóa di truyền và cơ chế tự nhân đôi bán bảo toàn",
    objectives: "Nắm vững cấu tạo hóa học và cấu trúc xoắn kép của phân tử DNA; giải thích được cơ chế tái bản DNA theo nguyên tắc bán bảo toàn và nguyên tắc bổ sung; phân biệt tái bản ở sinh vật nhân sơ và nhân thực.",
    sections: [
      {
        title: "1. Cấu trúc và chức năng của DNA",
        badge: "Đại phân tử & Mã di truyền",
        points: [
          "**Đại phân tử đa phân:** DNA (deoxyribonucleic acid) là đại phân tử sinh học cấu tạo theo nguyên tắc đa phân, đơn phân là bốn loại nucleotide: **A (adenine), T (thymine), G (guanine), C (cytosine)**.",
          "**Cấu trúc một nucleotide:** Mỗi nucleotide gồm 3 thành phần liên kết chặt chẽ: đường pentose (**deoxyribose** $C_5H_{10}O_4$), nhóm **phosphate** ($H_3PO_4$) và một **base nitơ** (A, T, G hoặc C).",
          "**Cấu trúc xoắn kép hai mạch:** Phân tử DNA gồm hai chuỗi polynucleotide xoắn kép đều đặn quanh một trục theo chiều từ trái sang phải. Hai mạch chạy **song song ngược chiều nhau** (mạch 5′→3′ đối diện với mạch 3′→5′).",
          "**Khung và liên kết:** Khung đường–phosphate nằm ở phía ngoài tạo bộ khung nâng đỡ; các base nitơ quay vào trong và liên kết bổ sung với nhau bằng liên kết hydrogen: **A liên kết với T bằng 2 liên kết H**, **G liên kết với C bằng 3 liên kết H**.",
          "**Tính bền vững và linh hoạt:** Hàng triệu liên kết hydrogen tạo nên cấu trúc không gian vô cùng bền vững để bảo quản thông tin, nhưng là liên kết yếu nên dễ dàng tách rời dưới tác dụng của enzyme khi tế bào cần sao chép hoặc phiên mã.",
          "**Chức năng lưu giữ và truyền đạt:** Trình tự sắp xếp các nucleotide chính là nơi lưu giữ thông tin di truyền; nguyên tắc bổ sung đảm bảo thông tin được sao chép và truyền đạt chính xác qua các thế hệ tế bào và cơ thể. DNA mang thông tin tổng hợp RNA, từ đó quy định protein và biểu hiện thành tính trạng."
        ]
      },
      {
        title: "2. Tái bản DNA (Cơ chế tự sao chép)",
        badge: "Enzyme & Nguyên tắc bán bảo toàn",
        points: [
          "**Bước 1 - Khởi đầu và tháo xoắn:** Tại điểm khởi đầu sao chép (Ori), các protein nhận biết và enzyme helicase làm tháo xoắn, cắt đứt các liên kết hydrogen, tách hai mạch đơn DNA tạo thành chạc chữ Y (chạc sao chép).",
          "**Bước 2 - Tổng hợp đoạn mồi:** Enzyme **RNA primase** tổng hợp đoạn mồi RNA ngắn có đầu 3′-OH tự do để cung cấp điểm xuất phát cho DNA polymerase.",
          "**Bước 3 - Kéo dài mạch mới:** **DNA polymerase** chỉ có khả năng kéo dài mạch mới bằng cách gắn nucleotide tự do vào đầu 3′-OH của đoạn mồi, do đó mạch mới luôn được tổng hợp theo chiều **5′→3′**, bắt cặp bổ sung với mạch khuôn (A–T, G–C).",
          "**Bước 4 - Mạch liên tục và gián đoạn:** Do hai mạch khuôn ngược chiều nhau: trên mạch khuôn 3′→5′, mạch mới được tổng hợp liên tục hướng vào chạc sao chép; trên mạch khuôn 5′→3′, mạch mới được tổng hợp gián đoạn thành từng đoạn ngắn gọi là **đoạn Okazaki** theo hướng ra xa chạc sao chép.",
          "**Bước 5 - Thay mồi và nối đoạn:** Mồi RNA được loại bỏ và thay thế bằng các nucleotide DNA tương ứng; enzyme **DNA ligase** xúc tác hình thành liên kết phosphodiester nối các đoạn Okazaki lại thành mạch hoàn chỉnh.",
          "**Kết quả và nguyên tắc:** Tạo ra 2 phân tử DNA con giống hệt nhau và giống DNA mẹ nếu không có đột biến. Mỗi DNA con chứa một mạch cũ của mẹ và một mạch mới tổng hợp (**nguyên tắc bán bảo toàn**). Sinh vật nhân sơ có một điểm Ori trên phân tử DNA vòng; sinh vật nhân thực có nhiều điểm Ori đồng thời để rút ngắn thời gian sao chép."
        ]
      }
    ],
    summaryDiagram: "DNA mẹ → Tháo xoắn, tách mạch tại Ori → Primase tạo mồi RNA → DNA polymerase tổng hợp mạch mới (5′→3′) → Thay mồi & Ligase nối Okazaki → Hai DNA con bán bảo toàn.",
    quizzes: [
      {
        q: "Trong quá trình tái bản DNA, enzyme DNA polymerase di chuyển trên mạch khuôn và tổng hợp mạch mới theo các chiều nào?",
        options: [
          "A. Trượt trên mạch khuôn theo chiều 3′→5′ và tổng hợp mạch mới theo chiều 5′→3′",
          "B. Trượt trên mạch khuôn theo chiều 5′→3′ và tổng hợp mạch mới theo chiều 3′→5′",
          "C. Trượt trên mạch khuôn theo chiều 3′→5′ và tổng hợp mạch mới theo chiều 3′→5′",
          "D. Trượt trên mạch khuôn theo cả hai chiều tùy từng loại tế bào"
        ],
        answer: 0,
        explain: "DNA polymerase chỉ có thể gắn nucleotide mới vào đầu 3′-OH tự do của mạch đang kéo dài, do đó mạch mới luôn được tổng hợp theo chiều 5′→3′, tương ứng nó phải đọc trượt trên mạch khuôn theo chiều ngược lại là 3′→5′."
      },
      {
        q: "Nguyên tắc bán bảo toàn (bán giữ lại) trong tái bản DNA có nghĩa là gì?",
        options: [
          "A. Một phân tử DNA con chứa 2 mạch mới hoàn toàn, một phân tử con giữ nguyên 2 mạch cũ",
          "B. Mỗi phân tử DNA con đều chứa một mạch cũ từ DNA mẹ và một mạch mới được tổng hợp",
          "C. Chỉ có một nửa số phân tử DNA trong nhân tế bào được phép tham gia nhân đôi",
          "D. Quá trình nhân đôi chỉ diễn ra trên một nửa chiều dài của phân tử DNA"
        ],
        answer: 1,
        explain: "Bán bảo toàn (semi-conservative) nghĩa là giữ lại một nửa: trong mỗi phân tử DNA con tạo thành sau sao chép luôn có một mạch đơn từ DNA mẹ ban đầu và một mạch đơn mới được tổng hợp từ môi trường."
      },
      {
        q: "Vì sao trên một mạch khuôn của chạc sao chép chữ Y, DNA lại được tổng hợp gián đoạn thành các đoạn Okazaki?",
        options: [
          "A. Vì enzyme ligase chỉ hoạt động ngắt quãng theo từng chu kỳ nhiệt",
          "B. Vì nồng độ nucleotide tự do trong nhân tế bào bị thiếu hụt theo chu kỳ",
          "C. Vì hai mạch khuôn có chiều ngược nhau, trong khi DNA polymerase chỉ tổng hợp mạch mới theo chiều 5′→3′",
          "D. Vì đoạn mồi RNA không đủ độ dài để liên kết liên tục"
        ],
        answer: 2,
        explain: "Hai mạch của DNA chạy song song ngược chiều. Tại chạc chữ Y mở ra, một mạch khuôn có hướng 5′→3′ nên mạch mới phải tổng hợp ngược hướng mở của chạc sao chép và bắt buộc phải tổng hợp gián đoạn từng đoạn Okazaki theo chiều 5′→3′."
      }
    ]
  },

  2: {
    num: 2,
    chapter: 1,
    isPractical: false,
    title: "Gene, hệ gene và quá trình truyền đạt thông tin di truyền",
    subtitle: "Cấu trúc gene, xử lý RNA, mã di truyền, phiên mã và dịch mã protein",
    objectives: "Hiểu rõ khái niệm gene và hệ gene; mô tả chi tiết cơ chế phiên mã và xử lí RNA ở sinh vật nhân thực; nắm vững đặc điểm của mã di truyền và quá trình dịch mã tại ribosome; giải thích dòng thông tin di truyền trung tâm.",
    sections: [
      {
        title: "1. Gene và hệ gene (Genome)",
        badge: "Cấu trúc & Phân loại gene",
        points: [
          "**Khái niệm gene:** Gene là một đoạn phân tử DNA mang thông tin mã hóa một sản phẩm xác định, sản phẩm đó có thể là một chuỗi polypeptide hoặc một phân tử RNA chức năng (tRNA, rRNA, snRNA...).",
          "**Cấu trúc vùng chức năng của gene:** Gene cấu trúc mã hóa protein gồm 3 vùng kế tiếp nhau: **Vùng điều hòa** (nằm ở đầu 3′ mạch mã khuôn, chứa trình tự khởi động Promoter giúp RNA polymerase nhận biết và bám vào để khởi động phiên mã); **Vùng mã hóa** (mang thông tin quy định trình tự amino acid); **Vùng kết thúc** (nằm ở đầu 5′ mạch khuôn, mang tín hiệu dừng phiên mã).",
          "**Gene không phân mảnh và phân mảnh:** Ở sinh vật nhân sơ, vùng mã hóa liên tục (**gene không phân mảnh**). Ở sinh vật nhân thực, phần lớn các gene có vùng mã hóa gián đoạn (**gene phân mảnh**), gồm các đoạn mã hóa amino acid (**exon**) xen kẽ với các đoạn không mã hóa (**intron**).",
          "**Hệ gene (Genome):** Hệ gene là toàn bộ vật chất di truyền chứa trong tế bào của một sinh vật (gồm DNA trong nhân và DNA ngoài nhân). Giải trình tự hệ gene giúp nhận diện gene, nghiên cứu tiến hóa loài, chẩn đoán bệnh di truyền và phát triển y học cá thể hóa."
        ]
      },
      {
        title: "2. Phiên mã và xử lí RNA",
        badge: "Tổng hợp mRNA, tRNA, rRNA",
        points: [
          "**Cơ chế phiên mã:** RNA polymerase nhận biết và bám vào promoter, tháo xoắn DNA và dùng mạch khuôn (mạch có chiều **3′→5′**) để tổng hợp phân tử RNA theo chiều **5′→3′** theo nguyên tắc bổ sung: A trên DNA bắt cặp với **U** trên RNA, T bắt cặp với **A**, G bắt cặp với **C**, C bắt cặp với **G**.",
          "**Xử lí RNA ở sinh vật nhân thực:** Ở tế bào nhân thực, phiên mã tạo ra tiền mRNA (pre-mRNA). Phân tử này được xử lí: gắn mũ 7-methylguanosine ở đầu 5′, gắn đuôi poly-A ở đầu 3′ và thực hiện quá trình **cắt bỏ intron, nối các exon** (splicing) để tạo ra mRNA trưởng thành đi ra tế bào chất tham gia dịch mã.",
          "**Các loại RNA chức năng:** mRNA (RNA thông tin mang mã di truyền), tRNA (RNA vận chuyển amino acid, có bộ ba đối mã anticodon), rRNA (RNA ribosome cấu tạo nên bào quan ribosome)."
        ]
      },
      {
        title: "3. Mã di truyền và dịch mã (Tổng hợp protein)",
        badge: "Codon, Anticodon & Polypeptide",
        points: [
          "**Mã di truyền là mã bộ ba:** Mỗi bộ ba nucleotide trên mRNA được gọi là một **codon**, quy định một amino acid (có $4^3 = 64$ codon). Trong đó có **AUG** là codon mở đầu (mã hóa methionine ở nhân thực, formylmethionine ở nhân sơ) và 3 codon kết thúc không mã hóa amino acid: **UAA, UAG, UGA**.",
          "**Đặc điểm mã di truyền:** **Tính đặc hiệu** (mỗi codon chỉ mã hóa 1 loại amino acid); **Tính thoái hóa / dư thừa** (nhiều codon khác nhau cùng mã hóa 1 loại amino acid, trừ AUG và UGG); **Tính phổ biến** (gần như toàn bộ sinh giới dùng chung một bảng mã di truyền, chứng minh nguồn gốc chung).",
          "**Giai đoạn dịch mã:** Diễn ra tại ribosome ở tế bào chất gồm 2 giai đoạn: Hoạt hóa amino acid (gắn amino acid vào tRNA tạo phức hệ aa-tRNA) và Tổng hợp chuỗi polypeptide (Mở đầu → Kéo dài chuỗi peptide → Kết thúc khi gặp codon kết thúc).",
          "**Dòng thông tin di truyền trung tâm:** Dòng thông tin chủ yếu chạy theo một chiều: **DNA —(phiên mã)→ RNA —(dịch mã)→ Protein → Tính trạng**. Một số virus chứa enzyme phiên mã ngược (reverse transcriptase) có thể tổng hợp DNA từ khuôn RNA."
        ]
      }
    ],
    summaryDiagram: "DNA (mạch khuôn 3′→5′) —(Phiên mã)—> pre-mRNA —(Cắt intron, nối exon)—> mRNA trưởng thành —(Dịch mã tại Ribosome)—> Chuỗi Polypeptide —(Cuộn xoắn)—> Protein chức năng.",
    quizzes: [
      {
        q: "Một phân tử mRNA trưởng thành có codon kết thúc là UAA. Bộ ba đối mã (anticodon) tương ứng trên tRNA nhận biết codon này là gì?",
        options: [
          "A. AUU",
          "B. UUA",
          "C. Không có tRNA nào mang anticodon tương ứng với codon kết thúc",
          "D. AUG"
        ],
        answer: 2,
        explain: "Ba codon kết thúc UAA, UAG, UGA là tín hiệu dừng dịch mã, không mã hóa amino acid nào và không có tRNA nào mang bộ ba đối mã tương ứng gắn vào."
      },
      {
        q: "Đặc điểm thoái hóa của mã di truyền có ý nghĩa sinh học quan trọng nào sau đây?",
        options: [
          "A. Giúp tổng hợp đồng thời nhiều loại protein khác nhau từ cùng một phân tử mRNA",
          "B. Giúp sinh vật thích ứng nhanh khi chuyển đổi môi trường sống",
          "C. Làm giảm thiểu tác hại của đột biến thay thế nucleotide ở vị trí thứ ba trong codon",
          "D. Đảm bảo cho quá trình dịch mã luôn diễn ra theo đúng chiều 5′→3′"
        ],
        answer: 2,
        explain: "Tính thoái hóa (nhiều codon cùng mã hóa một amino acid) giúp nhiều đột biến thay thế nucleotide (đặc biệt ở base thứ ba của codon) trở thành đột biến đồng nghĩa (silent mutation), không làm thay đổi cấu trúc chuỗi polypeptide."
      },
      {
        q: "Sự kiện nào sau đây KHÔNG xảy ra trong quá trình hoàn thiện pre-mRNA ở tế bào nhân thực?",
        options: [
          "A. Gắn mũ 7-methylguanosine ở đầu 5′ của phân tử RNA",
          "B. Loại bỏ các đoạn intron không mã hóa và nối các đoạn exon",
          "C. Thêm đuôi poly-A gồm hàng trăm adenine vào đầu 3′",
          "D. Cắt bỏ các nucleotide uracil và thay thế bằng thymine"
        ],
        answer: 3,
        explain: "Phân tử RNA cấu tạo từ nucleotide loại U thay vì T, không có quá trình thay U bằng T trong xử lý RNA."
      }
    ]
  },

  3: {
    num: 3,
    chapter: 1,
    isPractical: false,
    title: "Điều hòa biểu hiện gene",
    subtitle: "Mô hình Operon Lac ở vi khuẩn và cơ chế điều hòa biểu hiện ở sinh vật nhân thực",
    objectives: "Giải thích được cơ chế điều hòa biểu hiện gene; mô tả chi tiết cấu trúc và cơ chế hoạt động của Operon Lac ở E. coli khi có và không có lactose; hiểu được tính phức tạp của điều hòa ở sinh vật nhân thực.",
    sections: [
      {
        title: "1. Khái niệm và ý nghĩa của điều hòa biểu hiện gene",
        badge: "Đáp ứng môi trường & Biệt hóa tế bào",
        points: [
          "**Khái niệm:** Biểu hiện gene là quá trình thông tin mã hóa trong gene được chuyển thành sản phẩm có chức năng (RNA hoặc protein). Điều hòa biểu hiện gene là việc tế bào kiểm soát lượng sản phẩm của gene được tạo ra, ở thời điểm nào và trong loại tế bào nào.",
          "**Ý nghĩa sống còn:** Giúp tế bào tiết kiệm năng lượng và nguyên liệu bằng cách chỉ tổng hợp sản phẩm khi cơ thể thực sự có nhu cầu; giúp sinh vật đáp ứng linh hoạt với thay đổi của môi trường ngoài.",
          "**Ở sinh vật đa bào:** Mọi tế bào sinh dưỡng đều mang cùng một hệ gene, nhưng nhờ điều hòa biểu hiện gene mà các tế bào có thể chuyên hóa (biệt hóa) thành các mô, cơ quan với cấu trúc và chức năng đặc thù."
        ]
      },
      {
        title: "2. Cấu trúc và hoạt động của Operon Lac ở vi khuẩn E. coli",
        badge: "Operon vi khuẩn (Jacob & Monod)",
        points: [
          "**Cấu trúc một Operon:** Operon là một cụm gồm các gene cấu trúc có liên quan về chức năng, nằm kề nhau trên DNA và chịu sự kiểm soát chung bởi một promoter và một operator. Cấu trúc Operon Lac gồm: **P (Promoter - vùng khởi động)** nơi RNA polymerase bám vào; **O (Operator - vùng vận hành)** nơi protein ức chế bám; **Cụm gene cấu trúc Z, Y, A** mã hóa các enzyme phân giải đường lactose.",
          "**Gene điều hòa (lacI):** Nằm trước operon, không thuộc thành phần của operon nhưng liên tục phiên mã tạo ra **protein ức chế** (repressor).",
          "**Khi môi trường KHÔNG có lactose:** Protein ức chế ở dạng hoạt động liên kết chặt vào vùng vận hành (O), ngăn cản RNA polymerase trượt qua để phiên mã → Các gene cấu trúc Z, Y, A **không được phiên mã**.",
          "**Khi môi trường CÓ lactose (chất cảm ứng):** Phân tử lactose (hoặc allolactose) liên kết với protein ức chế làm biến đổi cấu hình không gian của protein này, khiến nó không thể bám vào vùng vận hành (O). RNA polymerase tự do di chuyển phiên mã cụm gene Z, Y, A tạo ra mRNA để dịch mã ra các enzyme phân giải lactose.",
          "**Khi lactose bị phân giải hết:** Protein ức chế khôi phục cấu hình ban đầu, lại bám vào operator và chấm dứt phiên mã operon."
        ]
      },
      {
        title: "3. Điều hòa biểu hiện gene ở sinh vật nhân thực",
        badge: "Đa tầng & Phức tạp",
        points: [
          "**Tính chất nhiều tầng bậc:** Điều hòa ở sinh vật nhân thực phức tạp hơn rất nhiều so với nhân sơ, diễn ra ở nhiều mức độ: **Trước phiên mã** (đóng/mở chất nhiễm sắc qua acetyl hóa histone, methyl hóa DNA); **Mức phiên mã** (tương tác giữa yếu tố phiên mã với trình tự enhancer/silencer); **Sau phiên mã** (cắt nối exon lựa chọn tạo ra nhiều loại protein khác nhau từ 1 gene, độ bền của mRNA); **Mức dịch mã** và **Sau dịch mã** (biến đổi hóa học, gấp cuộn hoặc phân giải protein).",
          "**Phát triển cá thể:** Mỗi loại tế bào trong cơ thể bật hoặc tắt những bộ gene chuyên biệt trong từng giai đoạn phát triển phôi và trưởng thành."
        ]
      }
    ],
    summaryDiagram: "Operon Lac = [ P — O — Gene Z — Gene Y — Gene A ]. Không có lactose: Protein ức chế bám O → Khóa phiên mã. Có lactose: Lactose gắn protein ức chế → Mở khóa O → RNA polymerase phiên mã Z, Y, A.",
    quizzes: [
      {
        q: "Trong mô hình cấu trúc của Operon Lac ở vi khuẩn E. coli, vùng vận hành (operator) là nơi nào?",
        options: [
          "A. Nơi RNA polymerase bám vào để khởi đầu phiên mã",
          "B. Nơi protein ức chế có thể liên kết để ngăn cản sự phiên mã của các gene cấu trúc",
          "C. Nơi mang thông tin mã hóa enzyme phân giải đường lactose",
          "D. Nơi tổng hợp ra phân tử đường allolactose"
        ],
        answer: 1,
        explain: "Vùng vận hành (operator) là trình tự nucleotide đặc thù nằm giữa promoter và các gene cấu trúc, là vị trí tiếp nhận liên kết đặc hiệu của protein ức chế để đóng/mở operon."
      },
      {
        q: "Khi môi trường có lactose, tại sao các gene cấu trúc Z, Y, A của Operon Lac lại được phiên mã?",
        options: [
          "A. Vì lactose phân giải hoàn toàn gene điều hòa lacI",
          "B. Vì lactose gắn vào RNA polymerase làm tăng hoạt tính xúc tác của nó gấp 10 lần",
          "C. Vì lactose liên kết với protein ức chế làm nó biến đổi cấu hình và không bám được vào operator",
          "D. Vì lactose trực tiếp biến đổi vùng vận hành O thành vùng khởi động P"
        ],
        answer: 2,
        explain: "Lactose đóng vai trò là chất cảm ứng (inducer), liên kết dị lập thể với protein ức chế làm thay đổi cấu hình không gian của protein này, khiến nó mất khả năng gắn vào operator, giải phóng đường trượt cho RNA polymerase."
      },
      {
        q: "Nếu vùng khởi động (P) của Operon Lac bị đột biến mất chức năng thì hậu quả trực tiếp sẽ là gì?",
        options: [
          "A. Các gene cấu trúc Z, Y, A sẽ phiên mã liên tục cả khi có và không có lactose",
          "B. Protein ức chế sẽ không được tổng hợp",
          "C. RNA polymerase không thể bám vào để khởi động phiên mã nên các gene Z, Y, A không được phiên mã",
          "D. Tế bào E. coli sẽ chết ngay lập tức do thiếu đường glucose"
        ],
        answer: 2,
        explain: "Promoter (P) là điểm nhận biết và bám vào của enzyme RNA polymerase. Nếu P hỏng hoặc mất chức năng, RNA polymerase không bám vào được thì operon không thể tiến hành phiên mã dù môi trường có hay không có lactose."
      }
    ]
  },

  4: {
    num: 4,
    chapter: 1,
    isPractical: false,
    title: "Đột biến gene",
    subtitle: "Khái niệm, các dạng đột biến điểm, nguyên nhân phát sinh và ý nghĩa sinh học",
    objectives: "Nêu được khái niệm và các dạng đột biến gene; phân tích hậu quả của đột biến thay thế, thêm và mất nucleotide; giải thích nguyên nhân và cơ chế phát sinh; đánh giá vai trò của đột biến gene trong tiến hóa và chọn giống.",
    sections: [
      {
        title: "1. Khái niệm và các dạng đột biến gene",
        badge: "Đột biến điểm & Dịch khung",
        points: [
          "**Khái niệm đột biến gene:** Đột biến gene là những biến đổi trong cấu trúc của gene, liên quan đến một hoặc một số cặp nucleotide. Những cá thể mang đột biến đã biểu hiện ra kiểu hình được gọi là **thể đột biến**.",
          "**Đột biến điểm:** Là dạng đột biến gene chỉ liên quan tới **một cặp nucleotide duy nhất**. Gồm 3 dạng cơ bản:",
          "• **Thay thế một cặp nucleotide:** Một cặp nucleotide này được thay bằng một cặp nucleotide khác. Có thể tạo ra: **đột biến đồng nghĩa** (không đổi amino acid do tính thoái hóa); **đột biến sai nghĩa** (thay đổi một amino acid tương ứng, có thể làm đổi hoạt tính protein như bệnh hồng cầu hình liềm); **đột biến vô nghĩa** (biến codon mã hóa thành codon kết thúc sớm làm chuỗi polypeptide ngắn lại).",
          "• **Thêm một cặp nucleotide:** Làm xê dịch khung đọc mã di truyền từ vị trí đột biến về phía sau (**đột biến dịch khung**), làm thay đổi toàn bộ trình tự amino acid phía sau và thường tạo ra protein mất chức năng hoàn toàn.",
          "• **Mất một cặp nucleotide:** Cũng gây hiện tượng dịch khung đọc mã di truyền tương tự như thêm cặp nucleotide, hậu quả thường rất nặng nề đối với sản phẩm của gene."
        ]
      },
      {
        title: "2. Nguyên nhân và cơ chế phát sinh đột biến",
        badge: "Tác nhân vật lí, hóa học & Sinh học",
        points: [
          "**Nguyên nhân bên trong:** Rối loạn sinh lí, hóa sinh nội bào; sai sót ngẫu nhiên của enzyme DNA polymerase trong quá trình sao chép DNA (tần số tự nhiên khoảng $10^{-6}$ đến $10^{-4}$ trên mỗi gene mỗi thế hệ). Sự kết cặp không hợp đôi do các base dạng hiếm (tautomer, ví dụ $A^*$ bắt cặp với C, $G^*$ bắt cặp với T) qua 2 lần nhân đôi làm phát sinh đột biến thay thế.",
          "**Nguyên nhân bên ngoài:** Tác nhân **vật lí** (tia phóng xạ, tia tử ngoại UV làm hai base thymine trên cùng một mạch liên kết với nhau tạo dimer thymine); tác nhân **hóa học** (chất 5-BU gây thay thế A–T thành G–C; EMS, dioxin...); tác nhân **sinh học** (một số virus như HPV, viêm gan B chèn DNA vào hệ gene vật chủ).",
          "**Đột biến theo dòng tế bào:** Đột biến ở tế bào sinh dục (giao tử) có thể truyền lại cho đời con; đột biến ở tế bào xôma (sinh dưỡng) chỉ biểu hiện ở một phần mô của cơ thể (thể khảm) và không truyền qua sinh sản hữu tính."
        ]
      },
      {
        title: "3. Ý nghĩa và vai trò của đột biến gene",
        badge: "Nguyên liệu tiến hóa & Chọn giống",
        points: [
          "**Tính chất biểu hiện:** Mức độ có hại, có lợi hay trung tính của đột biến gene phụ thuộc vào **tổ hợp gene** và **điều kiện môi trường** sống. Một đột biến có hại trong môi trường này có thể trở nên có lợi khi điều kiện sống thay đổi.",
          "**Nguyên liệu tiến hóa:** Đột biến gene tạo ra các allele mới, làm phong phú vốn gene của quần thể, là nguồn **nguyên liệu sơ cấp** chủ yếu cho quá trình tiến hóa của sinh giới.",
          "**Ứng dụng thực tiễn:** Trong chọn giống, con người chủ động xử lí tác nhân gây đột biến nhân tạo để tạo ra các giống vi sinh vật và cây trồng có năng suất cao, phẩm chất tốt (như chủng nấm mốc đột biến tăng sản lượng penicillin, giống lúa chịu mặn, đậu tương kháng sâu)."
        ]
      }
    ],
    summaryDiagram: "Đột biến điểm: Thay thế 1 cặp (đồng nghĩa / sai nghĩa / vô nghĩa) | Thêm 1 cặp (dịch khung) | Mất 1 cặp (dịch khung) → Tạo allele mới, làm giàu vốn gene.",
    quizzes: [
      {
        q: "Dạng đột biến điểm nào sau đây thường làm thay đổi nhiều amino acid nhất trong chuỗi polypeptide do gene quy định?",
        options: [
          "A. Đột biến thay thế một cặp nucleotide ở giữa vùng mã hóa",
          "B. Đột biến thêm một cặp nucleotide ở ngay sau bộ ba mở đầu",
          "C. Đột biến thay thế một cặp nucleotide ở bộ ba thứ hai kể từ đầu 3′ mạch khuôn",
          "D. Đột biến mất 3 cặp nucleotide trong cùng một codon"
        ],
        answer: 1,
        explain: "Đột biến thêm một cặp nucleotide ngay sau bộ ba mở đầu sẽ gây dịch khung đọc mã di truyền trên toàn bộ chiều dài còn lại của vùng mã hóa, làm biến đổi toàn bộ các amino acid từ vị trí đột biến cho tới cuối chuỗi."
      },
      {
        q: "Chất 5-bromouracil (5-BU) là chất đồng đẳng của thymine, khi ngấm vào tế bào sẽ gây ra dạng đột biến điểm nào?",
        options: [
          "A. Mất một cặp G–C",
          "B. Thêm một cặp A–T",
          "C. Thay thế cặp A–T bằng cặp G–C",
          "D. Thay thế cặp G–C bằng cặp A–T"
        ],
        answer: 2,
        explain: "5-BU ở dạng thường bắt cặp với A; qua lần nhân đôi tiếp theo nó chuyển sang dạng hiếm và bắt cặp với G; lần nhân đôi thứ ba G bắt cặp với C. Kết quả sau 3 lần nhân đôi làm thay thế cặp A–T thành cặp G–C."
      },
      {
        q: "Phát biểu nào sau đây là ĐÚNG khi nói về giá trị thích nghi của đột biến gene?",
        options: [
          "A. Mọi đột biến gene đều có hại cho sinh vật vì phá vỡ sự cân bằng vốn có",
          "B. Giá trị thích nghi của đột biến gene phụ thuộc vào tổ hợp gene và điều kiện môi trường sống",
          "C. Đột biến gene luôn có lợi cho sinh vật trong điều kiện môi trường nhân tạo",
          "D. Đột biến đồng nghĩa luôn làm giảm khả năng sinh sản của cá thể mang đột biến"
        ],
        answer: 1,
        explain: "Giá trị thích nghi của đột biến không cố định mà phụ thuộc chặt chẽ vào tổ hợp gene tương tác cùng nó và điều kiện ngoại cảnh cụ thể."
      }
    ]
  },

  5: {
    num: 5,
    chapter: 1,
    isPractical: false,
    title: "Công nghệ gene",
    subtitle: "Kĩ thuật DNA tái tổ hợp, phản ứng PCR, điện di gel và sinh vật biến đổi gene (GMO)",
    objectives: "Trình bày được quy trình tạo phân tử DNA tái tổ hợp; nguyên lí phản ứng chuỗi polymerase (PCR) và điện di gel; nêu các thành tựu của sinh vật biến đổi gene trong y học, nông nghiệp và thảo luận về an toàn sinh học.",
    sections: [
      {
        title: "1. Kĩ thuật DNA tái tổ hợp",
        badge: "Enzyme cắt mở & Nối vector",
        points: [
          "**Khái niệm:** DNA tái tổ hợp là phân tử DNA nhân tạo được tạo ra bằng cách ghép nối đoạn DNA mang gene mong muốn (gene cần chuyển) với một phân tử DNA mang truyền (**vector chuyển gene**, thường là plasmid vi khuẩn hoặc DNA thực khuẩn thể virus).",
          "**Quy trình 3 bước cốt lõi:**",
          "• **Bước 1 - Phân lập và cắt mở:** Tách chiết DNA chứa gene cần chuyển và vector plasmid. Sử dụng cùng một loại **enzyme cắt giới hạn (restriction enzyme - ví dụ EcoRI)** để cắt cả hai phân tử, tạo ra các đầu so le bổ sung (**đầu dính**).",
          "• **Bước 2 - Nối tạo DNA tái tổ hợp:** Dùng enzyme **DNA ligase** để tạo liên kết phosphodiester giữa các đầu dính, liên kết gene cần chuyển vào plasmid tạo thành DNA tái tổ hợp.",
          "• **Bước 3 - Chuyển vào tế bào nhận và nhân dòng:** Đưa DNA tái tổ hợp vào tế bào nhận (thường dùng $CaCl_2$ hoặc xung điện làm giãn màng tế bào E. coli). Sau đó nuôi cấy tế bào nhận trong môi trường chọn lọc (chứa kháng sinh) để thu nhận các dòng tế bào mang gene tái tổ hợp và kích thích chúng biểu hiện tạo sản phẩm protein mong muốn."
        ]
      },
      {
        title: "2. Kĩ thuật PCR và Điện di gel DNA",
        badge: "Khuếch đại & Phân tích kích thước",
        points: [
          "**Kĩ thuật PCR (Polymerase Chain Reaction):** Là phương pháp khuếch đại (nhân bản) hàng triệu bản sao của một đoạn DNA mục tiêu trong ống nghiệm chỉ sau vài giờ.",
          "• **Thành phần phản ứng PCR:** DNA khuôn, cặp mồi (primer) chuyên biệt, 4 loại dNTP (dATP, dTTP, dGTP, dCTP), đệm và enzyme **Taq polymerase** (DNA polymerase chịu nhiệt chiết xuất từ vi khuẩn suối nước nóng *Thermus aquaticus*).",
          "• **Chu trình 3 bước lặp lại 30–35 chu kì:** **Biến tính** ($94–95^\circ\text{C}$ tách hai mạch DNA) → **Gắn mồi** ($50–65^\circ\text{C}$ mồi bắt cặp bổ sung vào hai đầu đoạn đích) → **Kéo dài** ($72^\circ\text{C}$ Taq polymerase tổng hợp mạch mới).",
          "**Điện di gel agarose:** Dùng để phân tách các đoạn phân tử DNA theo kích thước dựa vào điện trường. Do mang nhóm phosphate tích điện âm, các đoạn DNA sẽ di chuyển từ cực âm sang cực dương trong bản gel; đoạn DNA có kích thước càng ngắn sẽ di chuyển càng nhanh và xa hơn đoạn dài."
        ]
      },
      {
        title: "3. Ứng dụng và An toàn sinh học của GMO",
        badge: "Thành tựu & Đạo đức sinh học",
        points: [
          "**Sinh vật biến đổi gene (GMO):** Là sinh vật có hệ gene đã được con người làm biến đổi bằng kĩ thuật chuyển gene, làm bất hoạt gene hoặc chỉnh sửa gene.",
          "**Thành tựu nổi bật:** Sản xuất thuốc y sinh (chuyển gene mã hóa insulin người, hormone sinh trưởng hGH vào E. coli); Nông nghiệp (cây trồng kháng sâu bệnh như ngô Bt mang gene độc tố từ *Bacillus thuringiensis*, lúa Vàng 'Golden Rice' tổng hợp $\beta$-carotene chống mù lòa, đậu tương kháng thuốc diệt cỏ glyphosate); Động vật chuyển gene cho sữa chứa protein trị liệu.",
          "**An toàn sinh học và pháp lí:** Cần đánh giá kĩ lưỡng nguy cơ gây dị ứng ở người, nguy cơ phát tán gene kháng thuốc trừ sâu sang cỏ dại tự nhiên, ảnh hưởng tới đa dạng sinh thái; thực hiện dán nhãn thực phẩm biến đổi gene minh bạch theo quy định pháp luật."
        ]
      }
    ],
    summaryDiagram: "Tách gene & Plasmid → Cắt bằng Restriction enzyme → Nối bằng Ligase → Chuyển vào E. coli → Nuôi cấy chọn lọc thu protein (Insulin, hGH...).",
    quizzes: [
      {
        q: "Trong kĩ thuật tạo DNA tái tổ hợp, người ta phải dùng cùng một loại enzyme cắt giới hạn (restriction enzyme) cho cả DNA chứa gene đích và vector plasmid nhằm mục đích gì?",
        options: [
          "A. Để đảm bảo enzyme ligase nhận biết được cả hai phân tử",
          "B. Để tạo ra các đầu so le bổ sung (đầu dính) khớp với nhau giữa hai phân tử",
          "C. Để kích thích vi khuẩn nhận DNA tái tổ hợp dễ dàng hơn",
          "D. Để loại bỏ hoàn toàn các đoạn intron của tế bào nhân thực"
        ],
        answer: 1,
        explain: "Cắt bằng cùng một enzyme giới hạn sẽ tạo ra các đầu dính mang trình tự nucleotide bổ sung cho nhau, nhờ đó các bazơ nitơ ở đầu dính có thể bắt cặp hydro với nhau trước khi ligase nối liền khung đường–phosphate."
      },
      {
        q: "Vì sao trong phản ứng khuếch đại gene PCR, người ta bắt buộc phải sử dụng enzyme Taq polymerase mà không dùng DNA polymerase thông thường của người?",
        options: [
          "A. Vì Taq polymerase có tốc độ sao chép nhanh gấp 100 lần",
          "B. Vì Taq polymerase không cần đoạn mồi RNA",
          "C. Vì Taq polymerase chịu được nhiệt độ cao ($95^\circ\text{C}$) ở bước biến tính mà không bị biến tính mất hoạt tính",
          "D. Vì Taq polymerase có thể tổng hợp mạch mới theo cả hai chiều 5′→3′ và 3′→5′"
        ],
        answer: 2,
        explain: "Chu kì PCR trải qua bước biến tính ở $94–95^\circ\text{C}$ để tách hai mạch DNA. DNA polymerase thông thường của người sẽ bị biến tính và bất hoạt ngay lập tức ở nhiệt độ này, trong khi Taq polymerase bền nhiệt vẫn hoạt động tốt."
      },
      {
        q: "Khi điện di gel agarose, phân tử DNA di chuyển về phía cực nào và yếu tố nào quyết định tốc độ di chuyển?",
        options: [
          "A. Di chuyển về cực âm; đoạn càng dài di chuyển càng nhanh",
          "B. Di chuyển về cực dương; đoạn càng ngắn di chuyển càng nhanh",
          "C. Di chuyển về cực dương; đoạn mang nhiều nucleotide loại A di chuyển nhanh hơn",
          "D. Di chuyển ngẫu nhiên phụ thuộc vào nồng độ ion muối trong dung dịch"
        ],
        answer: 1,
        explain: "Khung đường–phosphate tích điện âm khiến toàn bộ phân tử DNA mang điện âm nên bị hút về cực dương (+). Ma trận gel agarose như một chiếc lưới lọc, cản trở các đoạn cồng kềnh dài nên đoạn DNA càng ngắn sẽ lọt qua dễ hơn và di chuyển nhanh hơn."
      }
    ]
  },

  6: {
    num: 6,
    chapter: 1,
    isPractical: true,
    title: "Thực hành: Tách chiết DNA",
    subtitle: "Quy trình phân lập và kết tủa DNA từ mô thực vật quen thuộc (chuối/dâu tây/hành tây)",
    objectives: "Tự tay thực hiện được các bước tách chiết DNA từ tế bào mô thực vật; giải thích được vai trò của từng loại hóa chất (nước rửa chén, muối NaCl, cồn lạnh); quan sát và nhận biết phân tử DNA kết tủa dạng sợi trắng.",
    sections: [
      {
        title: "1. Nguyên lí hóa sinh của thí nghiệm",
        badge: "Phá màng & Kết tủa cồn",
        points: [
          "**Nghiền mô thực vật:** Tác động cơ học nhằm phá vỡ thành tế bào cellulose cứng bên ngoài.",
          "**Dung dịch tẩy rửa (xà phòng/nước rửa chén):** Hòa tan và phá vỡ lớp màng sinh chất và màng nhân có bản chất là phospholipid kép, giải phóng toàn bộ dịch nhân và DNA ra ngoài dung dịch.",
          "**Muối ăn (NaCl):** Cung cấp các ion dương $Na^+$ trung hòa điện tích âm của các nhóm phosphate trên khung DNA, giúp các phân tử DNA dễ dàng kết tụ lại với nhau thành bó sợi và hỗ trợ loại bỏ bớt protein liên kết.",
          "**Cồn ethanol (hoặc isopropanol) lạnh $90–96^\circ$:** Phân tử DNA phân cực tan tốt trong nước nhưng hoàn toàn không tan trong cồn lạnh. Khi rót cồn lạnh vào lớp trên, DNA sẽ lập tức bị tủa ra tạo thành khối sợi trắng đục lơ lửng ở ranh giới giữa hai lớp chất lỏng."
        ]
      },
      {
        title: "2. Quy trình thao tác 4 bước chuẩn phòng thí nghiệm",
        badge: "Thao tác từng bước",
        points: [
          "**Bước 1 - Chuẩn bị dịch chiết:** Cân khoảng 50g chuối chín hoặc dâu tây, nghiền nhuyễn trong cối sứ cùng với 5ml dung dịch tách chiết (gồm nước lọc pha 10% nước rửa chén và 1 thìa muối $NaCl$).",
          "**Bước 2 - Lọc loại bỏ bã tế bào:** Đổ hỗn hợp dịch nghiền qua phễu có lót giấy lọc hoặc màng vải gạc mịn vào ống đong, thu lấy phần dịch lọc trong suốt chứa DNA hòa tan, loại bỏ bã xác tế bào không tan.",
          "**Bước 3 - Kết tủa DNA bằng cồn lạnh:** Nghiêng nhẹ ống nghiệm một góc $45^\circ$, dùng ống nhỏ giọt nhẹ nhàng rót cồn ethanol $96^\circ$ (đã để ngăn đá tủ lạnh ít nhất 2 giờ) chảy chậm dọc theo thành ống nghiệm. Thể tích cồn gấp khoảng 2 lần thể tích dịch lọc.",
          "**Bước 4 - Thu nhận và quan sát sợi DNA:** Để yên ống nghiệm thẳng đứng trong 3–5 phút. Quan sát lớp ranh giới giữa dịch lọc và cồn: xuất hiện các sợi bông trắng đục nổi dần lên lớp cồn. Dùng que thủy tinh sạch hoặc que tre khuấy nhẹ theo một chiều để cuộn lấy khối sợi DNA quấn quanh que."
        ]
      },
      {
        title: "3. Nhận định kết quả & Lưu ý an toàn",
        badge: "Giải thích & An toàn lab",
        points: [
          "**Bản chất khối tủa:** Sợi trắng đục quan sát được là tập hợp hàng triệu phân tử DNA liên kết lại, có thể lẫn một lượng nhỏ protein và RNA chưa phân giải hết chứ không phải một phân tử DNA đơn lẻ.",
          "**Quy tắc an toàn:** Tuyệt đối không để cồn ethanol gần ngọn lửa đèn cồn vì cồn cực kì dễ bắt lửa gây hỏa hoạn; mang găng tay và kính bảo hộ; không được nếm mẫu vật hay hóa chất trong phòng thí nghiệm; rửa sạch dụng cụ sau khi hoàn tất."
        ]
      }
    ],
    summaryDiagram: "Nghiền mẫu mô → Pha nước rửa chén (phá màng) + Muối (trung hòa điện tích) → Lọc dịch trong → Rót cồn $96^\circ$ lạnh dọc thành ống → Thu sợi DNA tủa trắng đục.",
    quizzes: [
      {
        q: "Trong thí nghiệm tách chiết DNA từ tế bào thực vật, nước rửa chén (chất tẩy rửa) có vai trò chính là gì?",
        options: [
          "A. Kết tủa phân tử DNA thành dạng sợi nhìn thấy được",
          "B. Phá hủy thành tế bào cellulose cứng của thực vật",
          "C. Hòa tan lớp kép phospholipid của màng tế bào và màng nhân để giải phóng DNA",
          "D. Trung hòa điện tích âm của các nhóm phosphate trên phân tử DNA"
        ],
        answer: 2,
        explain: "Nước rửa chén chứa các chất hoạt động bề mặt có khả năng hòa tan lớp lipid kép của màng sinh chất và màng nhân, làm vỡ màng tế bào để giải phóng nhân và dịch chứa DNA ra ngoài."
      },
      {
        q: "Vì sao phải sử dụng cồn ethanol ở nhiệt độ thật lạnh (để trong ngăn đá) khi rót vào dịch lọc chứa DNA?",
        options: [
          "A. Vì cồn lạnh làm đông cứng các enzyme DNA polymerase",
          "B. Vì DNA hoàn toàn không tan trong cồn lạnh nên kết tủa nhanh và không bị biến tính",
          "C. Vì cồn nóng sẽ làm bốc hơi toàn bộ phân tử DNA",
          "D. Vì cồn lạnh sẽ tiêu diệt vi khuẩn bám trên thành ống nghiệm"
        ],
        answer: 1,
        explain: "Độ tan của DNA trong cồn giảm rất mạnh khi nhiệt độ hạ thấp. Cồn ethanol thật lạnh làm giảm hằng số điện môi của môi trường và kích thích các phân tử DNA nhanh chóng ngưng kết tủa thành búi sợi nhìn thấy được bằng mắt thường."
      },
      {
        q: "Hiện tượng nào sau đây chứng tỏ quá trình tách chiết DNA đã thành công?",
        options: [
          "A. Dung dịch đổi từ màu vàng nhạt sang màu xanh lam đậm",
          "B. Xuất hiện các bọt khí $CO_2$ sủi mạnh dưới đáy ống nghiệm",
          "C. Xuất hiện khối sợi màng trắng đục lơ lửng nổi lên ở lớp cồn phía trên",
          "D. Dung dịch chia thành 3 lớp chất lỏng hoàn toàn trong suốt không màu"
        ],
        answer: 2,
        explain: "Sự xuất hiện của các sợi bông nhầy màu trắng đục (kết tủa DNA) nổi lên ở ranh giới giữa lớp cồn và dịch chiết là dấu hiệu đặc trưng khẳng định DNA đã được kết tủa thành công."
      }
    ]
  },

  // ===================== CHƯƠNG 2. DI TRUYỀN NHIỄM SẮC THỂ =====================
  7: {
    num: 7,
    chapter: 2,
    isPractical: false,
    title: "Cấu trúc và chức năng của nhiễm sắc thể",
    subtitle: "Cấu trúc siêu hiển vi nucleosome, chromatid, tâm động và vai trò bảo tồn vật chất di truyền",
    objectives: "Mô tả cấu trúc hiển vi và siêu hiển vi của nhiễm sắc thể (NST) ở sinh vật nhân thực; nêu các thành phần cơ bản của NST kép; giải thích chức năng của NST trong bảo quản, truyền đạt thông tin di truyền.",
    sections: [
      {
        title: "1. Cấu trúc siêu hiển vi của nhiễm sắc thể",
        badge: "Nucleosome & Các mức xoắn",
        points: [
          "**Thành phần hóa học:** Ở sinh vật nhân thực, nhiễm sắc thể (NST) nằm trong nhân tế bào, được cấu tạo từ 2 thành phần chính: **phân tử DNA mạch kép** và các khối protein kiềm tính loại **histone** (H1, H2A, H2B, H3, H4).",
          "**Đơn vị cấu trúc cơ bản - Nucleosome:** Gồm một lõi gồm **8 phân tử protein histone** (bát tử histone) được quấn quanh bởi **$1\frac{3}{4}$ vòng xoắn DNA** (khoảng **146 cặp nucleotide**). Các nucleosome nối tiếp nhau bằng một đoạn DNA liên kết và một phân tử histone H1.",
          "**Các mức độ cuộn xoắn đóng gói:** Chuỗi nucleosome tạo thành **sợi cơ bản** (đường kính $10–11\text{ nm}$) → cuộn xoắn thành **sợi nhiễm sắc** (đường kính $30\text{ nm}$) → cuộn gập thành **sợi siêu xoắn / vùng xếp cuộn** (đường kính $300\text{ nm}$) → đóng xoắn cực đại thành **chromatid** (đường kính $700\text{ nm}$) ở kì giữa phân bào.",
          "**Ý nghĩa việc đóng gói:** Giúp nén ngắn chiều dài phân tử DNA hàng chục nghìn lần để xếp gọn trong nhân tế bào có kích thước hiển vi; đồng thời bảo vệ DNA không bị đứt gãy trong quá trình di chuyển phân chia ở phân bào."
        ]
      },
      {
        title: "2. Hình thái và các bộ phận chức năng của NST",
        badge: "Tâm động, Đầu mút & Vị trí gene",
        points: [
          "**Hình thái rõ nhất ở kì giữa:** Ở kì giữa của quá trình nguyên phân, NST đóng xoắn cực đại và có hình dạng đặc trưng (hình que, hình hạt, hình chữ V...). Tại thời điểm này, mỗi NST là một **NST kép** gồm **2 nhiễm sắc tử chị em (sister chromatids)** dính nhau tại tâm động.",
          "**Ba bộ phận chức năng thiết yếu:**",
          "• **Tâm động (Centromere):** Vị trí thắt eo trên NST, nơi đính của thoi phân bào giúp NST di chuyển về hai cực tế bào trong phân bào.",
          "• **Đầu mút (Telomere):** Nằm ở hai đầu của mỗi NST, mang trình tự lặp lại đặc thù giúp bảo vệ NST không bị dính vào nhau và bảo vệ các đầu tận cùng của phân tử DNA không bị thoái hóa rút ngắn qua các lần nhân đôi.",
          "• **Các trình tự khởi đầu nhân đôi DNA (Ori):** Điểm xuất phát cho quá trình sao chép DNA dọc theo chiều dài NST.",
          "**Tính đặc trưng của bộ NST:** Mỗi loài sinh vật có một bộ NST đặc trưng về số lượng ($2n$), hình dạng và cấu trúc. Số lượng NST không phản ánh mức độ tiến hóa của loài (ví dụ: người $2n=46$, ruồi giấm $2n=8$, gà $2n=78$)."
        ]
      }
    ],
    summaryDiagram: "DNA + Protein histone → Nucleosome ($11\text{ nm}$) → Sợi nhiễm sắc ($30\text{ nm}$) → Vùng xếp cuộn ($300\text{ nm}$) → Chromatid ($700\text{ nm}$) tại kì giữa phân bào.",
    quizzes: [
      {
        q: "Một nucleosome trong cấu trúc siêu hiển vi của nhiễm sắc thể nhân thực có cấu tạo gồm những thành phần nào?",
        options: [
          "A. 8 phân tử histone được quấn quanh bởi $1\frac{3}{4}$ vòng xoắn DNA (khoảng 146 cặp nucleotide)",
          "B. 4 phân tử histone được quấn quanh bởi 2 vòng xoắn DNA (khoảng 200 cặp nucleotide)",
          "C. Một chuỗi polypeptide liên kết với 1 phân tử RNA và 2 phân tử histone H1",
          "D. Một phân tử DNA mạch đơn quấn quanh một phân tử histone trung tâm"
        ],
        answer: 0,
        explain: "Cấu trúc hạt nucleosome chuẩn gồm một lõi 8 phân tử protein histone (2 phân tử mỗi loại H2A, H2B, H3, H4) được một đoạn DNA dài khoảng 146 cặp base quấn quanh $1\frac{3}{4}$ vòng."
      },
      {
        q: "Thành phần nào trên nhiễm sắc thể đóng vai trò là vị trí liên kết với thoi phân bào để kéo các chromatid phân li về hai cực tế bào?",
        options: [
          "A. Vùng đầu mút (telomere)",
          "B. Điểm khởi đầu tái bản (Ori)",
          "C. Thể tâm động (centromere)",
          "D. Vùng chất dị nhiễm sắc"
        ],
        answer: 2,
        explain: "Tâm động (centromere) chứa phức hệ protein kinetochore là vị trí đính của vi ống thoi phân bào, giúp định hướng và vận chuyển NST di chuyển trong nguyên phân và giảm phân."
      },
      {
        q: "Ý nghĩa sinh học quan trọng nhất của việc phân tử DNA đóng xoắn ở nhiều cấp độ cấu trúc để tạo thành nhiễm sắc thể là gì?",
        options: [
          "A. Giúp tăng tốc độ phiên mã của các gene lên nhiều lần",
          "B. Giúp nén chiều dài phân tử DNA để xếp gọn trong nhân và thuận lợi cho việc phân li đồng đều trong phân bào",
          "C. Giúp biến đổi các đoạn intron thành exon",
          "D. Ngăn cản hoàn toàn sự phát sinh đột biến gene"
        ],
        answer: 1,
        explain: "DNA tế bào người nếu trải dài ra có tổng chiều dài tới gần 2 mét. Nhờ các mức xoắn cuộn siêu hiển vi, DNA được thu ngắn hàng vạn lần để vừa vặn trong nhân tế bào chỉ vài micromet và dễ dàng phân li mà không bị rối hay đứt gãy."
      }
    ]
  },

  8: {
    num: 8,
    chapter: 2,
    isPractical: false,
    title: "Học thuyết di truyền Mendel",
    subtitle: "Quy luật phân li và Quy luật phân li độc lập của Gregor Mendel trên đậu Hà Lan",
    objectives: "Hiểu phương pháp nghiên cứu di truyền độc đáo của Mendel; phát biểu nội dung và cơ sở tế bào học của quy luật phân li và phân li độc lập; viết sơ đồ lai và giải các bài toán lai một và hai cặp tính trạng.",
    sections: [
      {
        title: "1. Phương pháp nghiên cứu và Quy luật phân li",
        badge: "Lai một cặp tính trạng (3:1)",
        points: [
          "**Phương pháp phân tích cơ thể lai:** Tạo dòng thuần chủng về các tính trạng nghiên cứu → Lai các cặp bố mẹ thuần chủng tương phản → Theo dõi sự di truyền riêng rẽ của từng cặp tính trạng qua thế hệ $F_1, F_2, F_3$ → Dùng toán xác suất thống kê để xử lí số liệu thu được.",
          "**Thí nghiệm lai một tính trạng:** Lai hoa đỏ thuần chủng với hoa trắng thuần chủng thu được $F_1$ 100% hoa đỏ. Cho $F_1$ tự thụ phấn, đời $F_2$ phân li theo tỉ lệ **3 hoa đỏ : 1 hoa trắng** (tương ứng tỉ lệ kiểu gene 1 AA : 2 Aa : 1 aa).",
          "**Nội dung Quy luật phân li:** Mỗi tính trạng do một cặp allele quy định. Trong quá trình phát sinh giao tử, hai allele trong cặp **phân li đồng đều** về các giao tử, nên mỗi giao tử chỉ chứa một allele của cặp. Sự kết hợp ngẫu nhiên của các giao tử trong thụ tinh khôi phục lại cặp allele ở đời con.",
          "**Phép lai phân tích:** Lai giữa cá thể mang tính trạng trội chưa biết kiểu gene với cá thể mang kiểu hình lặn (đồng hợp lặn aa). Nếu đời con đồng tính 100% trội → cá thể đem lai là đồng hợp tử (AA); nếu đời con phân tính 1 trội : 1 lặn → cá thể đem lai là dị hợp tử (Aa)."
        ]
      },
      {
        title: "2. Quy luật phân li độc lập",
        badge: "Lai hai cặp tính trạng (9:3:3:1)",
        points: [
          "**Thí nghiệm lai hai cặp tính trạng:** P thuần chủng: Hạt vàng, trơn × Hạt xanh, nhăn → $F_1$: 100% Hạt vàng, trơn (AaBb). Cho $F_1$ tự thụ phấn, $F_2$ xuất hiện 4 loại kiểu hình theo tỉ lệ: **9 Vàng, trơn : 3 Vàng, nhăn : 3 Xanh, trơn : 1 Xanh, nhăn** ($9:3:3:1 = (3:1)(3:1)$).",
          "**Nội dung Quy luật:** Các cặp allele quy định các cặp tính trạng khác nhau nằm trên **các cặp nhiễm sắc thể tương đồng khác nhau** thì phân li độc lập và tổ hợp tự do trong quá trình hình thành giao tử.",
          "**Cơ sở tế bào học:** Sự phân li độc lập và tổ hợp ngẫu nhiên của các cặp NST tương đồng trong giảm phân I dẫn đến sự phân li độc lập của các allele nằm trên chúng, tạo ra nhiều loại giao tử với tỉ lệ ngang nhau ($1/4 AB : 1/4 Ab : 1/4 aB : 1/4 ab$).",
          "**Ý nghĩa:** Làm xuất hiện vô số các **biến dị tổ hợp** ở đời con, tạo sự đa dạng di truyền phong phú cho sinh vật."
        ]
      }
    ],
    summaryDiagram: "P: AA × aa → $F_1$: 100% Aa (Trội) → $F_2$: 1 AA : 2 Aa : 1 aa (3 Trội : 1 Lặn). Lai 2 cặp độc lập: AaBb × AaBb → $F_2$: 9 A-B- : 3 A-bb : 3 aaB- : 1 aabb.",
    quizzes: [
      {
        q: "Theo quy luật phân li của Mendel, tỉ lệ phân li kiểu gene ở thế hệ $F_2$ trong phép lai một cặp tính trạng trội lặn hoàn toàn là gì?",
        options: [
          "A. 3 trội : 1 lặn",
          "B. 1 đồng hợp trội : 2 dị hợp : 1 đồng hợp lặn (1 AA : 2 Aa : 1 aa)",
          "C. 100% đồng hợp tử",
          "D. 9 : 3 : 3 : 1"
        ],
        answer: 1,
        explain: "Ở $F_2$, tỉ lệ kiểu hình là 3 trội : 1 lặn, nhưng tỉ lệ kiểu gene tương ứng là 1 AA (trội thuần chủng) : 2 Aa (dị hợp) : 1 aa (lặn thuần chủng)."
      },
      {
        q: "Điều kiện cơ bản nhất để hai cặp gene phân li độc lập với nhau là gì?",
        options: [
          "A. Số lượng cá thể ở đời con lai phải rất ít",
          "B. Các gene phải có hiện tượng tương tác bổ sung",
          "C. Hai cặp gene phải nằm trên hai cặp nhiễm sắc thể tương đồng khác nhau",
          "D. Quá trình giảm phân phải xảy ra hiện tượng hoán vị gene với tần số 50%"
        ],
        answer: 2,
        explain: "Quy luật phân li độc lập dựa trên cơ sở các cặp gene nằm trên các cặp NST tương đồng riêng rẽ, khi giảm phân các cặp NST phân li độc lập về các cực tế bào."
      },
      {
        q: "Cho cây có kiểu gene AaBb tự thụ phấn. Biết các gene phân li độc lập và trội lặn hoàn toàn. Tỉ lệ kiểu hình mang ít nhất một tính trạng trội ở đời con là bao nhiêu?",
        options: [
          "A. 1/16",
          "B. 9/16",
          "C. 15/16",
          "D. 3/16"
        ],
        answer: 2,
        explain: "Tỉ lệ kiểu hình ở đời con là 9 A-B- : 3 A-bb : 3 aaB- : 1 aabb. Kiểu hình lặn cả hai tính trạng (aabb) chiếm 1/16. Vậy tỉ lệ mang ít nhất một tính trạng trội là $1 - 1/16 = 15/16$."
      }
    ]
  },

  9: {
    num: 9,
    chapter: 2,
    isPractical: false,
    title: "Mở rộng học thuyết Mendel",
    subtitle: "Trội không hoàn toàn, đồng trội, đa allele, gene đa hiệu và tương tác gene",
    objectives: "Nêu được các hiện tượng di truyền mở rộng quy luật Mendel; phân tích hiện tượng trội không hoàn toàn, đồng trội (nhóm máu ABO), đa allele, tính trạng đa gene và tương tác bổ sung / át chế.",
    sections: [
      {
        title: "1. Trội không hoàn toàn và Đồng trội",
        badge: "Biểu hiện trung gian & Đồng biểu hiện",
        points: [
          "**Trội không hoàn toàn:** Allele trội không át chế hoàn toàn allele lặn, cá thể dị hợp tử biểu hiện kiểu hình trung gian giữa bố và mẹ. Ví dụ: ở hoa mõm chó, P: Đỏ ($C^R C^R$) × Trắng ($C^W C^W$) → $F_1$: 100% Hoa hồng ($C^R C^W$) → $F_2$: 1 Đỏ : 2 Hồng : 1 Trắng (tỉ lệ kiểu hình trùng với tỉ lệ kiểu gene 1:2:1).",
          "**Đồng trội:** Cả hai allele khác nhau đều cùng biểu hiện đầy đủ ra kiểu hình ở trạng thái dị hợp mà không hòa lẫn vào nhau. Ví dụ: Hệ nhóm máu ABO ở người do 3 allele $I^A, I^B, i$ quy định: người có kiểu gene $I^A I^B$ mang cả kháng nguyên A và B trên màng hồng cầu (nhóm máu AB)."
        ]
      },
      {
        title: "2. Đa allele và Gene đa hiệu",
        badge: "Nhiều allele & Một gene nhiều tính trạng",
        points: [
          "**Đa allele (Multiple alleles):** Trong quần thể, một locus gene có thể tồn tại nhiều hơn hai allele khác nhau do quá trình đột biến. Tuy nhiên, trong mỗi tế bào sinh dưỡng của cá thể lưỡng bội ($2n$) bình thường chỉ chứa tối đa 2 allele của locus đó. Ví dụ: Hệ nhóm máu ABO gồm 3 allele với tương quan trội lặn: $I^A = I^B > i$.",
          "**Gene đa hiệu (Pleiotropy):** Hiện tượng một gene tác động đến sự biểu hiện của nhiều tính trạng khác nhau. Ví dụ: Đột biến gene mã hóa chuỗi $\beta$-hemoglobin gây bệnh hồng cầu hình liềm vừa làm hồng cầu biến dạng dễ vỡ (thiếu máu), vừa gây tắc mạch máu, suy tim, tổn thương lách và viêm khớp."
        ]
      },
      {
        title: "3. Tương tác gene và Tính trạng đa gene",
        badge: "Tương tác phi allele & Di truyền số lượng",
        points: [
          "**Tương tác gene không allele:** Hai hay nhiều cặp gene không allele cùng tác động qua lại để cùng quy định một tính trạng chung:",
          "• **Tương tác bổ sung:** Hai gene trội không allele cùng có mặt thì tạo ra kiểu hình mới (cho các biến dạng tỉ lệ $F_2$ như 9:7, 9:6:1, 9:3:3:1).",
          "• **Tương tác át chế:** Một gene này kìm hãm sự biểu hiện của một gene khác không allele (cho tỉ lệ 12:3:1, 13:3, 15:1).",
          "• **Tác động cộng gộp (Tính trạng đa gene):** Mỗi allele trội đều đóng góp một phần như nhau vào sự phát triển của tính trạng. Thường quy định các tính trạng số lượng (chiều cao, sản lượng sữa, màu da, cân nặng), tạo ra biến dị liên tục và chịu ảnh hưởng mạnh của môi trường."
        ]
      }
    ],
    summaryDiagram: "Trội không hoàn toàn: 1:2:1 | Đồng trội: $I^A I^B$ nhóm AB | Gene đa hiệu: 1 gene → nhiều tính trạng | Tương tác bổ sung: 9:7 hoặc 9:6:1 | Tác động cộng gộp: tính trạng số lượng.",
    quizzes: [
      {
        q: "Ở người, một cặp vợ chồng có nhóm máu A dị hợp ($I^A i$) và nhóm máu B dị hợp ($I^B i$). Xác suất họ sinh con có nhóm máu O là bao nhiêu?",
        options: [
          "A. 100%",
          "B. 50%",
          "C. 25%",
          "D. 75%"
        ],
        answer: 2,
        explain: "Phép lai: $I^A i \times I^B i \to 1/4 I^A I^B \text{ (máu AB)} : 1/4 I^A i \text{ (máu A)} : 1/4 I^B i \text{ (máu B)} : 1/4 ii \text{ (máu O)}$. Do đó xác suất sinh con nhóm máu O là $1/4 = 25\%$."
      },
      {
        q: "Hiện tượng một gene có thể tác động, chi phối đến sự biểu hiện của nhiều tính trạng khác nhau trên cơ thể được gọi là gì?",
        options: [
          "A. Tác động cộng gộp",
          "B. Tác động đa hiệu của gene (Gene đa hiệu)",
          "C. Tương tác bổ sung giữa các gene",
          "D. Đột biến dịch khung"
        ],
        answer: 1,
        explain: "Định nghĩa gene đa hiệu: một gene ảnh hưởng hoặc chi phối sự biểu hiện của nhiều tính trạng khác nhau trên cơ thể sinh vật."
      },
      {
        q: "Ở một loài thực vật, lai hai dòng thuần chủng hoa trắng với nhau thu được $F_1$ toàn hoa đỏ. Cho $F_1$ tự thụ phấn, đời $F_2$ thu được tỉ lệ 9 cây hoa đỏ : 7 cây hoa trắng. Tính trạng màu hoa di truyền theo quy luật nào?",
        options: [
          "A. Phân li độc lập của 1 cặp gene",
          "B. Tương tác bổ sung giữa 2 cặp gene không allele",
          "C. Trội không hoàn toàn",
          "D. Di truyền liên kết giới tính"
        ],
        answer: 1,
        explain: "Tỉ lệ 9 hoa đỏ : 7 hoa trắng ở $F_2$ có tổng tỉ lệ là $9+7=16$ tổ hợp, chứng tỏ do 2 cặp gene không allele tương tác bổ sung: kiểu gene có cả 2 allele trội (A-B-) biểu hiện hoa đỏ; các kiểu gene còn lại (A-bb, aaB-, aabb) biểu hiện hoa trắng."
      }
    ]
  },

  10: {
    num: 10,
    chapter: 2,
    isPractical: false,
    title: "Di truyền giới tính và di truyền liên kết với giới tính",
    subtitle: "Cơ chế xác định giới tính, đặc điểm di truyền gene trên NST X và Y, phân tích phả hệ",
    objectives: "Nêu các cơ chế xác định giới tính; giải thích đặc điểm di truyền của gene nằm trên vùng không tương đồng của NST X (di truyền chéo) và NST Y (di truyền thẳng); ứng dụng phân tích phả hệ trong tư vấn di truyền.",
    sections: [
      {
        title: "1. Nhiễm sắc thể giới tính và cơ chế xác định giới tính",
        badge: "Hệ XX/XY, XX/XO & ZW/ZZ",
        points: [
          "**Nhiễm sắc thể giới tính:** Là cặp NST có chứa các gene quy định giới tính và các gene quy định tính trạng thường liên kết với giới tính. Gồm 2 loại chính là NST X và NST Y.",
          "**Vùng tương đồng và không tương đồng:** NST X và Y có một đoạn mang các locus gene giống nhau gọi là **vùng tương đồng** (có thể tiếp hợp trao đổi chéo); ngoài ra mỗi NST đều có **vùng không tương đồng** đặc thù chỉ có ở riêng X hoặc riêng Y.",
          "**Các kiểu xác định giới tính:**",
          "• **Kiểu XX - XY:** Con cái XX, con đực XY (người, động vật có vú, ruồi giấm, một số cây đơn tính). Ở người, tỉ lệ nam:nữ xấp xỉ 1:1 do tinh trùng mang X và Y có số lượng tương đương.",
          "• **Kiểu ZW - ZZ:** Con cái ZW, con đực ZZ (chim, bò sát, một số loài bướm, cá).",
          "• **Kiểu XX - XO:** Con cái XX, con đực XO chỉ có 1 NST X (châu chấu, rệp).",
          "• **Ảnh hưởng môi trường:** Ở một số loài rùa và cá sấu, giới tính cá thể con chịu ảnh hưởng trực tiếp bởi nhiệt độ ấp trứng."
        ]
      },
      {
        title: "2. Di truyền liên kết với giới tính",
        badge: "Di truyền chéo (X) & Di truyền thẳng (Y)",
        points: [
          "**Gene trên vùng không tương đồng của NST X:**",
          "• **Quy luật di truyền chéo:** Ông ngoại truyền gene lặn cho con gái mang gene, con gái truyền gene đó biểu hiện ra ở cháu trai ($P: \text{Ông ngoại bệnh} \to F_1: \text{Mẹ dị hợp} \to F_2: \text{Cháu trai bệnh}$).",
          "• **Tỉ lệ biểu hiện không đồng đều ở 2 giới:** Tính trạng lặn trên X biểu hiện ở giới dị giao tử XY với tần số cao hơn nhiều so với giới đồng giao tử XX (vì con đực XY chỉ cần 1 allele lặn $X^aY$ đã biểu hiện kiểu hình, trong khi con cái XX cần tới 2 allele lặn $X^aX^a$).",
          "• **Bệnh di truyền ở người:** Bệnh máu khó đông (hemophilia), bệnh mù màu đỏ - xanh lục.",
          "**Gene trên vùng không tương đồng của NST Y:**",
          "• **Quy luật di truyền thẳng:** Gene chỉ nằm trên Y truyền trực tiếp $100\%$ từ bố cho con trai, con gái không bao giờ nhận được gene này. Ví dụ: Tật dính ngón tay 2 và 3, túm lông ở vành tai ở người."
        ]
      },
      {
        title: "3. Phân tích phả hệ và tư vấn di truyền",
        badge: "Cây gia đình & Đạo đức y sinh",
        points: [
          "**Phương pháp phả hệ:** Theo dõi sự xuất hiện của một tính trạng hoặc bệnh qua nhiều thế hệ của một gia đình để xác định tính trạng đó là trội hay lặn, do gene trên NST thường hay NST giới tính quy định.",
          "**Dấu hiệu nhận biết:** Bệnh lặn trên NST thường xuất hiện cách thế hệ, bố mẹ bình thường có thể sinh con bệnh; Bệnh lặn trên X xuất hiện chủ yếu ở nam giới; Bệnh do gene trên Y chỉ xuất hiện ở nam.",
          "**Tư vấn di truyền:** Cung cấp thông tin khoa học về nguy cơ sinh con mắc dị tật cho các cặp vợ chồng có nguy cơ cao, đảm bảo tính bảo mật và sự đồng thuận tự nguyện của người bệnh."
        ]
      }
    ],
    summaryDiagram: "Gene trên X (không tương đồng): Di truyền chéo (Bố truyền con gái, mẹ truyền con trai), nam hay bị hơn. Gene trên Y: Di truyền thẳng $100\%$ bố cho con trai.",
    quizzes: [
      {
        q: "Bệnh mù màu đỏ - lục ở người do một allele lặn nằm trên vùng không tương đồng của NST giới tính X quy định ($X^m$), allele trội tương ứng ($X^M$) quy định nhìn màu bình thường. Một người phụ nữ bình thường có bố bị mù màu kết hôn với một người đàn ông bình thường. Xác suất đứa con trai đầu lòng của họ bị mù màu là bao nhiêu?",
        options: [
          "A. 100%",
          "B. 50%",
          "C. 25%",
          "D. 0%"
        ],
        answer: 1,
        explain: "Người phụ nữ bình thường có bố bị mù màu ($X^m Y$) nên chắc chắn nhận $X^m$ từ bố, có kiểu gene dị hợp $X^M X^m$. Chồng bình thường có kiểu gene $X^M Y$. Khi sinh con trai (nhận Y từ bố), xác suất nhận $X^m$ từ mẹ là 50% ($1/2 X^m Y$ bị bệnh : $1/2 X^M Y$ bình thường). Do đó xác suất con trai bị bệnh là 50%."
      },
      {
        q: "Đặc điểm di truyền nào sau đây là đặc trưng của gene nằm trên vùng không tương đồng của nhiễm sắc thể giới tính Y?",
        options: [
          "A. Di truyền chéo từ mẹ sang con trai",
          "B. Luôn biểu hiện ở cả hai giới với tần số ngang nhau",
          "C. Di truyền thẳng 100% từ người bố cho tất cả các con trai",
          "D. Chỉ biểu hiện ra kiểu hình khi ở trạng thái đồng hợp tử lặn"
        ],
        answer: 2,
        explain: "Vì con gái không nhận NST Y từ bố, chỉ có con trai nhận NST Y nên gene trên vùng không tương đồng của Y sẽ di truyền thẳng 100% từ bố cho mọi người con trai."
      },
      {
        q: "Ở loài nào sau đây giới tính đực mang cặp nhiễm sắc thể giới tính ZW và giới tính cái mang cặp nhiễm sắc thể giới tính ZZ?",
        options: [
          "A. Không có loài nào, vì con cái luôn là ZW và con đực là ZZ",
          "B. Động vật có vú và người",
          "C. Ruồi giấm và châu chấu",
          "D. Bò sát và chim (con cái ZW, con đực ZZ)"
        ],
        answer: 0,
        explain: "Trong hệ xác định giới tính ZW/ZZ (như ở chim, bò sát, một số loài bướm), con cái luôn là giới dị giao tử ZW và con đực là giới đồng giao tử ZZ."
      }
    ]
  },

  11: {
    num: 11,
    chapter: 2,
    isPractical: false,
    title: "Liên kết gene và hoán vị gene",
    subtitle: "Thí nghiệm của Morgan trên ruồi giấm, hiện tượng trao đổi chéo và xây dựng bản đồ di truyền",
    objectives: "Nêu được khái niệm liên kết gene hoàn toàn và hoán vị gene; giải thích cơ sở tế bào học của trao đổi chéo giữa các chromatid không chị em; tính tần số hoán vị gene ($f$) và hiểu nguyên lí lập bản đồ gene.",
    sections: [
      {
        title: "1. Liên kết gene hoàn toàn",
        badge: "Thí nghiệm Morgan & Nhóm gene liên kết",
        points: [
          "**Thí nghiệm của Morgan trên ruồi giấm:** Lai ruồi giấm thân xám, cánh dài thuần chủng với thân đen, cánh cụt thuần chủng thu được $F_1$ 100% thân xám, cánh dài. Cho ruồi **đực $F_1$ lai phân tích** với ruồi cái thân đen, cánh cụt thu được đời con phân li tỉ lệ: **1 Thân xám, cánh dài : 1 Thân đen, cánh cụt** ($1:1$, không phải 1:1:1:1 như phân li độc lập).",
          "**Kết luận:** Gene quy định màu thân và gene quy định độ dài cánh nằm cùng trên **một cặp nhiễm sắc thể tương đồng** và di truyền liên kết chặt chẽ với nhau (kiểu gene $\frac{BV}{bv}$).",
          "**Nhóm gene liên kết:** Toàn bộ các gene nằm trên cùng một phân tử DNA của một NST tạo thành một nhóm gene liên kết. Số nhóm gene liên kết của một loài thường bằng số NST trong bộ đơn bội ($n$) của loài đó (ruồi giấm $2n=8 \to n=4$ nhóm liên kết).",
          "**Ý nghĩa:** Liên kết gene hạn chế sự xuất hiện của biến dị tổ hợp, giúp duy trì ổn định các nhóm tính trạng tốt luôn đi cùng nhau qua các thế hệ."
        ]
      },
      {
        title: "2. Hoán vị gene (Liên kết không hoàn toàn)",
        badge: "Trao đổi chéo & Tần số hoán vị (f)",
        points: [
          "**Thí nghiệm phát hiện hoán vị:** Morgan cho **ruồi cái $F_1$ thân xám, cánh dài** lai phân tích với ruồi đực thân đen, cánh cụt thu được đời con: **41,5% Xám, dài : 41,5% Đen, cụt : 8,5% Xám, cụt : 8,5% Đen, dài**.",
          "**Cơ sở tế bào học:** Ở kì đầu của giảm phân I, trong quá trình tiếp hợp giữa hai chromatid khác nguồn (không chị em) của cặp NST tương đồng đã xảy ra hiện tượng **trao đổi chéo** các đoạn tương ứng, dẫn đến sự hoán đổi vị trí của các allele giữa 2 NST.",
          "**Tần số hoán vị gene ($f$):** Được tính bằng tỉ lệ phần trăm số cá thể có kiểu hình tái tổ hợp trên tổng số cá thể sinh ra ở đời con:",
          "$$f = \frac{\text{Số cá thể tái tổ hợp}}{\text{Tổng số cá thể}} \times 100\%$$",
          "**Tính chất của $f$:** Tần số hoán vị gene dao động từ $0\%$ đến tối đa là **$50\%$**. Khoảng cách giữa 2 gene trên NST càng xa nhau thì lực liên kết càng yếu, khả năng trao đổi chéo càng dễ xảy ra nên $f$ càng lớn.",
          "**Lưu ý đặc biệt ở ruồi giấm:** Ở ruồi giấm (*Drosophila melanogaster*), hiện tượng hoán vị gene **chỉ xảy ra ở giới cái**, ruồi giấm đực liên kết gene hoàn toàn."
        ]
      },
      {
        title: "3. Bản đồ di truyền (Bản đồ gene)",
        badge: "Khoảng cách tương đối (cM)",
        points: [
          "**Nguyên lí:** Bản đồ di truyền là sơ đồ sắp xếp vị trí tương đối của các gene trên một nhiễm sắc thể. Người ta quy ước khoảng cách giữa 2 gene tương ứng với **1% tần số hoán vị gene là 1 centiMorgan (cM)**.",
          "**Ý nghĩa:** Giúp dự đoán trước tần số xuất hiện các tổ hợp tính trạng mới trong các phép lai, hỗ trợ đắc lực cho công tác chọn tạo giống và nghiên cứu hệ gene."
        ]
      }
    ],
    summaryDiagram: "Liên kết hoàn toàn: Các gene trên cùng NST di truyền cùng nhau ($1:1$). Hoán vị gene: Trao đổi chéo ở kì đầu giảm phân I, $f \le 50\%$, 1% hoán vị = 1 cM.",
    quizzes: [
      {
        q: "Trong phép lai phân tích ruồi giấm cái dị hợp 2 cặp gene ($\frac{BV}{bv}$) thu được 4 loại kiểu hình với tỉ lệ: 41,5% xám, dài : 41,5% đen, cụt : 8,5% xám, cụt : 8,5% đen, dài. Tần số hoán vị gene giữa hai locus này là bao nhiêu?",
        options: [
          "A. 41,5%",
          "B. 8,5%",
          "C. 17%",
          "D. 50%"
        ],
        answer: 2,
        explain: "Hai nhóm kiểu hình tái tổ hợp (xám, cụt và đen, dài) có tỉ lệ là $8,5\% + 8,5\% = 17\%$. Vậy tần số hoán vị gene là $f = 17\%$."
      },
      {
        q: "Hiện tượng trao đổi chéo dẫn đến hoán vị gene diễn ra ở thời điểm nào trong chu kì tế bào?",
        options: [
          "A. Kì sau của nguyên phân",
          "B. Kì đầu của giảm phân I khi các NST tương đồng tiếp hợp",
          "C. Kì giữa của giảm phân II",
          "D. Kì cuối của giảm phân I"
        ],
        answer: 1,
        explain: "Hoán vị gene xảy ra do sự trao đổi đoạn giữa 2 chromatid không chị em trong quá trình tiếp hợp của cặp NST tương đồng ở kì đầu của giảm phân I."
      },
      {
        q: "Tại sao tần số hoán vị gene ($f$) giữa hai locus gene trên một nhiễm sắc thể không bao giờ vượt quá 50%?",
        options: [
          "A. Vì thoi phân bào ngăn cản sự trao đổi của quá nhiều đoạn chromatid",
          "B. Vì hiện tượng trao đổi chéo chỉ xảy ra giữa 2 trong 4 chromatid của cặp tương đồng",
          "C. Vì enzyme ligase chỉ nối được tối đa một nửa số đoạn đứt gãy",
          "D. Vì các gene luôn có xu hướng liên kết hoàn toàn"
        ],
        answer: 1,
        explain: "Mỗi sự kiện trao đổi chéo đơn chỉ xảy ra giữa 2 chromatid không chị em trong một thể 4 chromatid, để lại 2 chromatid không trao đổi chéo (mang gene liên kết). Ngay cả khi 100% tế bào đều xảy ra trao đổi chéo thì số giao tử hoán vị tạo ra cũng chỉ chiếm tối đa 50%."
      }
    ]
  },

  12: {
    num: 12,
    chapter: 2,
    isPractical: false,
    title: "Đột biến nhiễm sắc thể",
    subtitle: "Đột biến cấu trúc (mất, lặp, đảo, chuyển đoạn) và Đột biến số lượng (lệch bội, đa bội)",
    objectives: "Phân biệt các dạng đột biến cấu trúc NST và nêu hậu quả; hiểu cơ chế và phân loại đột biến số lượng NST (lệch bội, tự đa bội, dị đa bội); nhận diện hội chứng đột biến NST ở người và ứng dụng.",
    sections: [
      {
        title: "1. Đột biến cấu trúc nhiễm sắc thể",
        badge: "Mất, Lặp, Đảo & Chuyển đoạn",
        points: [
          "**Khái niệm:** Là những biến đổi trong cấu trúc của nhiễm sắc thể, làm sắp xếp lại trật tự hoặc thay đổi số lượng các gene trên NST. Gồm 4 dạng cơ bản:",
          "• **Mất đoạn:** Một đoạn NST bị đứt và tiêu biến làm mất các gene trên đó. Thường làm giảm sức sống hoặc gây chết (Ví dụ: mất đoạn cánh ngắn NST số 5 ở người gây hội chứng tiếng mèo kêu 'Cri-du-chat', mất đoạn nhỏ NST 22 gây ung thư máu ác tính). Dùng để xác định vị trí gene trên NST.",
          "• **Lặp đoạn:** Một đoạn của NST được lặp lại một hoặc nhiều lần, làm gia tăng liều lượng gene. Làm tăng cường hoặc giảm bớt mức biểu hiện của tính trạng (Ví dụ: lặp đoạn trên NST X ở ruồi giấm làm mắt lồi thành mắt dẹt; ở đại mạch lặp đoạn làm tăng hoạt tính enzyme amylase thủy phân tinh bột). Tạo nguyên liệu mới cho tiến hóa.",
          "• **Đảo đoạn:** Một đoạn NST bị đứt ra, quay ngược $180^\circ$ rồi gắn lại vào vị trí cũ. Làm thay đổi trật tự sắp xếp gene, có thể làm giảm khả năng sinh sản do rối loạn tiếp hợp giảm phân, góp phần tạo loài mới.",
          "• **Chuyển đoạn:** Sự trao đổi đoạn NST diễn ra trong một NST hoặc giữa các NST không tương đồng. Gồm: chuyển đoạn tương hỗ (hai NST cùng trao đổi đoạn cho nhau) và chuyển đoạn không tương hỗ. (Ví dụ: chuyển đoạn giữa NST 9 và 22 tạo NST Philadelphia gây bệnh ung thư bạch cầu mạn tính)."
        ]
      },
      {
        title: "2. Đột biến số lượng nhiễm sắc thể",
        badge: "Lệch bội & Đa bội",
        points: [
          "**Đột biến lệch bội (Dị bội):** Là biến đổi số lượng NST chỉ xảy ra ở một hoặc một số cặp NST tương đồng:",
          "• Thể một ($2n-1$): Thiếu 1 chiếc ở một cặp (Ví dụ: Hội chứng Turner ở nữ chỉ có 1 NST X: XO).",
          "• Thể ba ($2n+1$): Thừa 1 chiếc ở một cặp (Ví dụ: Hội chứng Down thừa 1 NST số 21 có 47 chiếc; Hội chứng Klinefelter ở nam thừa 1 NST X: XXY; Hội chứng Siêu nữ: XXX).",
          "• Cơ chế: Do một cặp NST không phân li trong quá trình giảm phân I hoặc giảm phân II, tạo giao tử mang $(n+1)$ và giao tử mang $(n-1)$. Khi thụ tinh với giao tử bình thường $(n)$ sẽ tạo thể ba $(2n+1)$ và thể một $(2n-1)$.",
          "**Đột biến đa bội:** Là biến đổi làm tăng toàn bộ số lượng NST của tế bào thành bội số nguyên của bộ đơn bội ($>2n$):",
          "• **Tự đa bội:** Tăng nguyên bộ NST của cùng một loài (Tam bội $3n$, Tứ bội $4n$...). Cơ quan sinh dưỡng to, sinh trưởng mạnh, chống chịu tốt. Thể đa bội lẻ ($3n, 5n$) bất thụ, không hạt (dưa hấu không hạt, chuối nhà $3n$).",
          "• **Dị đa bội (Thể song nhị bội):** Chứa bộ NST của hai loài khác nhau ($2n_A + 2n_B$), hình thành qua lai xa kèm đa bội hóa (Ví dụ: Cỏ lúa mì hiện đại, thí nghiệm củ cải bắp của Kapetchenko)."
        ]
      }
    ],
    summaryDiagram: "Đột biến cấu trúc: Mất đoạn | Lặp đoạn | Đảo đoạn | Chuyển đoạn. Đột biến số lượng: Lệch bội ($2n\pm 1, 2n\pm 2$) | Tự đa bội ($3n, 4n$) | Dị đa bội ($2n_A + 2n_B$).",
    quizzes: [
      {
        q: "Ở người, hội chứng Down là do dạng đột biến số lượng nhiễm sắc thể nào sau đây gây ra?",
        options: [
          "A. Thể một ở cặp NST giới tính (XO)",
          "B. Thể ba ở cặp NST số 21 (có 3 NST 21)",
          "C. Mất đoạn cánh ngắn NST số 5",
          "D. Thể ba ở cặp NST giới tính (XXY)"
        ],
        answer: 1,
        explain: "Hội chứng Down là dạng lệch bội thể ba ($2n+1$) ở cặp NST thường số 21 (tế bào có 47 NST, trong đó cặp 21 có 3 chiếc)."
      },
      {
        q: "Dạng đột biến cấu trúc nhiễm sắc thể nào sau đây có thể làm tăng cường hoặc giảm bớt mức độ biểu hiện của một tính trạng và đóng vai trò quan trọng trong việc tạo ra các gene mới trong tiến hóa?",
        options: [
          "A. Mất đoạn",
          "B. Lặp đoạn",
          "C. Đảo đoạn ngoài tâm động",
          "D. Đột biến lệch bội"
        ],
        answer: 1,
        explain: "Lặp đoạn làm tăng số lượng bản sao của gene (tăng liều gene), giúp tăng cường hoặc giảm bớt biểu hiện tính trạng, đồng thời các bản sao dư thừa có thể tự do đột biến để hình thành nên các gene mới với chức năng mới trong tiến hóa."
      },
      {
        q: "Đặc điểm nào sau đây KHÔNG đúng đối với các thể tự đa bội lẻ (như tam bội $3n$)?",
        options: [
          "A. Tế bào và cơ quan sinh dưỡng thường có kích thước lớn hơn thể lưỡng bội",
          "B. Có khả năng sinh sản hữu tính bình thường và tạo ra nhiều hạt",
          "C. Quá trình giảm phân bị rối loạn do các NST không bắt cặp tương đồng đều đặn",
          "D. Thường được ứng dụng để tạo giống cây ăn quả không hạt (như dưa hấu, chuối)"
        ],
        answer: 1,
        explain: "Thể đa bội lẻ ($3n$) có bộ NST không phân li đồng đều trong giảm phân nên không tạo được giao tử bình thường, dẫn tới bất thụ và không thể sinh hạt qua sinh sản hữu tính (tạo quả không hạt)."
      }
    ]
  },

  13: {
    num: 13,
    chapter: 2,
    isPractical: false,
    title: "Di truyền học người và di truyền y học",
    subtitle: "Phương pháp nghiên cứu, bệnh di truyền phân tử, bệnh NST, liệu pháp gene và sàng lọc trước sinh",
    objectives: "Nêu các phương pháp đặc thù nghiên cứu di truyền người; phân biệt bệnh do đột biến gene và bệnh do đột biến NST; hiểu nguyên lí sàng lọc trước sinh, tư vấn di truyền và liệu pháp gene trị liệu.",
    sections: [
      {
        title: "1. Phương pháp nghiên cứu di truyền người",
        badge: "Đặc thù người & Kĩ thuật hiện đại",
        points: [
          "**Khó khăn nghiên cứu di truyền người:** Người sinh sản muộn, số lượng con ít, không thể áp dụng các phương pháp lai hoặc gây đột biến nhân tạo vì lí do đạo đức sinh học.",
          "**Các phương pháp nghiên cứu chuyên biệt:**",
          "• **Phương pháp nghiên cứu phả hệ:** Theo dõi sự di truyền của tính trạng qua nhiều thế hệ gia đình để xác định quy luật di truyền.",
          "• **Phương pháp nghiên cứu trẻ đồng sinh:** So sánh trẻ đồng sinh cùng trứng (cùng kiểu gene $100\%$) với trẻ đồng sinh khác trứng để đánh giá vai trò của kiểu gene và môi trường đối với tính trạng/bệnh tật.",
          "• **Nghiên cứu tế bào học và làm tiêu bản NST (Karyotype):** Quan sát hình thái, số lượng bộ NST để phát hiện các đột biến lệch bội (Down, Turner, Klinefelter) và đột biến cấu trúc.",
          "• **Giải trình tự DNA và xét nghiệm sinh hóa:** Xác định chính xác các biến thể nucleotide gây bệnh phân tử (tan máu bẩm sinh Thalassemia, phenylketonuria - PKU)."
        ]
      },
      {
        title: "2. Một số bệnh và tật di truyền ở người",
        badge: "Bệnh phân tử & Hội chứng NST",
        points: [
          "**Bệnh do đột biến gene (Bệnh di truyền phân tử):**",
          "• **Bệnh Phenylketonuria (PKU):** Đột biến gene lặn trên NST thường làm mất enzyme chuyển hóa phenylalanine thành tyrosine, dẫn tới tích tụ phenylalanine đầu độc tế bào não gây thiểu năng trí tuệ. Phát hiện sớm bằng sàng lọc sơ sinh và cho ăn kiêng giảm phenylalanine sẽ phát triển bình thường.",
          "• **Bệnh tan máu bẩm sinh (Thalassemia):** Đột biến gene tổng hợp chuỗi globin gây thiếu máu mạn tính nguy hiểm.",
          "• **Bệnh ung thư:** Đột biến xảy ra ở các gene kiểm soát chu kì tế bào, gồm: đột biến làm hoạt hóa quá mức **gene tiền ung thư** (oncogene) và đột biến làm mất chức năng của **gene ức chế khối u** (như gene p53).",
          "**Bệnh do đột biến nhiễm sắc thể:** Hội chứng Down ($2n+1=47$, thừa NST 21); Hội chứng Turner ($2n-1=45$, XO ở nữ: lùn, cổ ngắn, dạ con hẹp, vô sinh); Hội chứng Klinefelter ($2n+1=47$, XXY ở nam: vô sinh, mù chữ số, tinh hoàn teo)."
        ]
      },
      {
        title: "3. Y học di truyền dự phòng và Liệu pháp gene",
        badge: "Sàng lọc trước sinh & Chữa bệnh bằng gene",
        points: [
          "**Sàng lọc trước sinh:** Thực hiện siêu âm, xét nghiệm sinh hóa máu mẹ (Double test, Triple test) và đặc biệt là xét nghiệm sàng lọc không xâm lấn **NIPT** (phân tích DNA tự do của thai nhi lưu hành trong máu mẹ) để phát hiện sớm dị tật ngay từ tuần thai thứ 9–10.",
          "**Liệu pháp gene (Gene therapy):** Kĩ thuật can thiệp nhằm chữa trị các bệnh di truyền bằng cách thay thế gene đột biến bị hỏng bằng gene lành, hoặc đưa gene bổ sung vào tế bào đích để phục hồi chức năng protein bình thường.",
          "**Bảo vệ vốn gene nhân loại:** Hạn chế tối đa tiếp xúc với chất độc hóa học (dioxin, thuốc trừ sâu), tia bức xạ; tăng cường tư vấn di truyền trước hôn nhân, tránh hôn nhân cận huyết."
        ]
      }
    ],
    summaryDiagram: "Nghiên cứu người: Phả hệ, Trẻ đồng sinh, Karyotype, DNA. Bệnh: PKU, Thalassemia, Ung thư, Down ($2n+1$), Turner (XO). Ứng dụng: Sàng lọc NIPT, Liệu pháp gene.",
    quizzes: [
      {
        q: "Trẻ đồng sinh cùng trứng (sinh đôi cùng trứng) được hình thành từ cơ chế nào sau đây?",
        options: [
          "A. Hai tinh trùng khác nhau thụ tinh với hai trứng khác nhau cùng rụng một thời điểm",
          "B. Một trứng thụ tinh với một tinh trùng tạo một hợp tử, sau đó trong lần phân bào đầu tiên phôi tách thành 2 phôi độc lập",
          "C. Hai tinh trùng cùng chui vào thụ tinh với một trứng",
          "D. Một tinh trùng thụ tinh với thể cực của tế bào trứng"
        ],
        answer: 1,
        explain: "Đồng sinh cùng trứng bắt nguồn từ một hợp tử duy nhất (1 tinh trùng thụ tinh với 1 trứng). Trong các lần nguyên phân đầu tiên của phôi, các phôi bào vô tình tách rời nhau ra và phát triển thành 2 cá thể riêng biệt có cùng kiểu gene 100% và luôn cùng giới tính."
      },
      {
        q: "Bệnh Phenylketonuria (PKU) ở người là ví dụ kinh điển chứng minh cho điều gì?",
        options: [
          "A. Đột biến NST luôn gây chết ở giai đoạn phôi",
          "B. Biểu hiện của kiểu hình là kết quả của sự tương tác chặt chẽ giữa kiểu gene và môi trường (chế độ dinh dưỡng)",
          "C. Mọi bệnh di truyền đều do gene trên NST giới tính X quy định",
          "D. Bệnh di truyền không bao giờ phát hiện được bằng xét nghiệm máu"
        ],
        answer: 1,
        explain: "Bệnh PKU do đột biến gene lặn gây tích tụ phenylalanine gây hại não. Nhưng nếu phát hiện sớm ngay sau sinh và can thiệp môi trường bằng chế độ ăn giảm bớt phenylalanine thì đứa trẻ sẽ phát triển trí tuệ hoàn toàn bình thường."
      },
      {
        q: "Cơ chế phân tử gây ra bệnh ung thư ở người thường liên quan trực tiếp đến hai nhóm gene kiểm soát chu kì tế bào nào?",
        options: [
          "A. Gene tổng hợp hemoglobin và gene tổng hợp kháng thể",
          "B. Gene tiền ung thư (bị hoạt hóa thành oncogene) và gene ức chế khối u (bị bất hoạt)",
          "C. Gene cấu trúc Z và gene vận hành O của operon",
          "D. Gene điều hòa lacI và gene mã hóa enzyme RNA polymerase"
        ],
        answer: 1,
        explain: "Ung thư là bệnh do đột biến làm tế bào phân chia mất kiểm soát. Cơ chế gồm: đột biến trội làm gene tiền ung thư chuyển thành gene sinh ung thư (oncogene) thúc đẩy phân bào quá mức; và đột biến lặn làm bất hoạt các gene ức chế khối u (như p53, Rb) khiến tế bào không còn khả năng tự sửa sai hay tự chết theo chương trình."
      }
    ]
  },

  14: {
    num: 14,
    chapter: 2,
    isPractical: true,
    title: "Thực hành: Quan sát một số dạng đột biến nhiễm sắc thể",
    subtitle: "Kĩ năng quan sát tiêu bản hiển vi, nhận diện đột biến cấu trúc và đột biến lệch bội NST",
    objectives: "Sử dụng thành thạo kính hiển vi quang học ở vật kính $10\times, 40\times$; quan sát và nhận biết được tiêu bản bộ NST bình thường và đột biến (Down, Turner, Klinefelter, mất đoạn); vẽ và phân tích hình thái.",
    sections: [
      {
        title: "1. Chuẩn bị và Nguyên tắc soi tiêu bản hiển vi",
        badge: "Kĩ năng dùng kính hiển vi",
        points: [
          "**Dụng cụ và mẫu vật:** Kính hiển vi quang học có nguồn sáng; tiêu bản hiển vi cố định tế bào tủy xương chuột hoặc tế bào người (Karyotype) bình thường và đột biến; dầu soi kính (nếu dùng vật kính $100\times$).",
          "**Nguyên tắc lấy nét:** Đặt tiêu bản lên bàn kính, kẹp giữ chắc chắn → Chỉnh vùng mẫu vào tâm sáng → Bật vật kính $10\times$, dùng ốc vĩ cấp nâng bàn kính lên gần sát để tìm vùng tế bào đang phân chia kì giữa → Chuyển sang vật kính $40\times$, dùng ốc vi cấp tinh chỉnh độ nét để quan sát rõ từng chiếc NST."
        ]
      },
      {
        title: "2. Quy trình nhận diện và phân tích tiêu bản Karyotype",
        badge: "Đếm số lượng & Xếp cặp",
        points: [
          "**Bước 1 - Đếm tổng số lượng NST:** Đếm chính xác số lượng NST có trong cụm phân bào để xác định có lệch bội số lượng hay không ($2n=46$ là bình thường; $47$ chiếc là thể ba; $45$ chiếc là thể một).",
          "**Bước 2 - Phân tích cặp NST giới tính:** Nhận diện cặp số 23: Hai chiếc X lớn hình chữ V là nữ (XX); Một chiếc X lớn và một chiếc Y rất nhỏ là nam (XY); Chỉ có một chiếc X đơn độc là hội chứng Turner (XO); Có hai chiếc X và một chiếc Y là hội chứng Klinefelter (XXY).",
          "**Bước 3 - Soi kĩ các cặp NST thường:** Kiểm tra cặp số 21 xem có 3 chiếc hay không (Hội chứng Down); Kiểm tra kích thước hai chiếc trong cùng một cặp xem có chiếc nào bị ngắn bất thường hay không (đột biến mất đoạn)."
        ]
      },
      {
        title: "3. Báo cáo kết quả và Quy tắc an toàn",
        badge: "Vẽ hình & Bảo quản",
        points: [
          "**Báo cáo thực hành:** Vẽ lại sơ đồ hình thái bộ NST quan sát được; ghi chú tên hội chứng đột biến, số lượng NST và kiểu gene dự đoán.",
          "**Bảo quản tiêu bản:** Tiêu bản hiển vi rất mỏng và giòn, thao tác nhẹ nhàng tránh làm nứt vỡ lam kính; lau sạch dầu soi trên thấu kính bằng giấy lau quang học chuyên dụng sau khi kết thúc buổi thực hành."
        ]
      }
    ],
    summaryDiagram: "Đặt tiêu bản → Chỉnh sáng vật kính $10\times$ tìm cụm kì giữa → Sang vật kính $40\times$ lấy nét vi cấp → Đếm số lượng NST & Phân tích cặp 21, 23 → Kết luận hội chứng.",
    quizzes: [
      {
        q: "Khi quan sát tiêu bản bộ nhiễm sắc thể của một người dưới kính hiển vi, đếm được tổng cộng 47 NST, trong đó cặp NST số 21 có 3 chiếc, các cặp khác đều bình thường. Người này mắc hội chứng gì?",
        options: [
          "A. Hội chứng Turner",
          "B. Hội chứng Down",
          "C. Hội chứng Klinefelter",
          "D. Hội chứng Siêu nữ"
        ],
        answer: 1,
        explain: "Bộ NST có 47 chiếc với 3 chiếc ở cặp số 21 là biểu hiện tế bào học đặc trưng của hội chứng Down ($2n+1=47$)."
      },
      {
        q: "Thao tác kĩ thuật nào sau đây là ĐÚNG khi sử dụng kính hiển vi quang học để quan sát tiêu bản NST?",
        options: [
          "A. Luôn hạ bàn kính từ từ bằng ốc vi cấp khi đang dùng vật kính $40\times$ để tìm vi trường",
          "B. Tìm mẫu vật và lấy nét ở vật kính có độ phóng đại nhỏ ($10\times$) trước, sau đó mới chuyển sang vật kính lớn ($40\times$)",
          "C. Dùng cồn $90^\circ$ cọ xát mạnh lên mặt thấu kính quang học để khử trùng",
          "D. Đóng chặt hoàn toàn chắn sáng tụ quang để tăng độ nét của NST"
        ],
        answer: 1,
        explain: "Quy tắc dùng kính hiển vi là luôn quan sát từ vật kính có độ phóng đại thấp ($10\times$) để định vị vùng tế bào kì giữa, lấy nét sơ bộ rồi mới xoay sang vật kính lớn ($40\times$) và chỉ dùng ốc vi cấp để tinh chỉnh độ nét."
      },
      {
        q: "Dưới kính hiển vi, tiêu bản tế bào người có 45 NST với duy nhất một chiếc NST X (không có chiếc X thứ hai và không có Y) thuộc về bệnh nhân mắc hội chứng nào?",
        options: [
          "A. Hội chứng Klinefelter",
          "B. Hội chứng Turner",
          "C. Hội chứng Down",
          "D. Người nam bình thường"
        ],
        answer: 1,
        explain: "Hội chứng Turner là thể một ở cặp NST giới tính, có công thức NST là $44A + XO$ (tổng số 45 chiếc), biểu hiện ở nữ giới với các dị tật phát triển và vô sinh."
      }
    ]
  },

  // ===================== CHƯƠNG 3. MỞ RỘNG HỌC THUYẾT DI TRUYỀN NST =====================
  15: {
    num: 15,
    chapter: 3,
    isPractical: false,
    title: "Di truyền gene ngoài nhân",
    subtitle: "Di truyền tế bào chất, hệ gene ti thể và lục lạp, quy luật di truyền theo dòng mẹ",
    objectives: "Nêu được đặc điểm của hệ gene ti thể và lục lạp; giải thích cơ chế di truyền tế bào chất (di truyền theo dòng mẹ); phân biệt di truyền ngoài nhân với di truyền liên kết giới tính.",
    sections: [
      {
        title: "1. Khái niệm và đặc điểm hệ gene ngoài nhân",
        badge: "DNA ti thể & Lục lạp",
        points: [
          "**Khái niệm gene ngoài nhân:** Bên cạnh phần lớn DNA nằm trong nhân tế bào, các bào quan ti thể và lục lạp trong tế bào chất cũng chứa các phân tử DNA riêng, mang các gene được gọi là **gene ngoài nhân (gene tế bào chất)**.",
          "**Đặc điểm DNA ti thể (mtDNA) và lục lạp (cpDNA):** Là phân tử DNA mạch kép dạng vòng, trần (không liên kết với protein histone), tương tự như DNA của vi khuẩn. Điều này củng cố thuyết nội cộng sinh về nguồn gốc của ti thể và lục lạp.",
          "**Khả năng tự nhân đôi và phiên mã:** Ti thể và lục lạp có hệ thống enzyme tái bản, phiên mã và các ribosome riêng để tự tổng hợp một số protein tham gia chuỗi hô hấp tế bào và quang hợp."
        ]
      },
      {
        title: "2. Quy luật di truyền theo dòng mẹ",
        badge: "Thí nghiệm lai thuận nghịch Correns",
        points: [
          "**Thí nghiệm của Correns trên cây hoa phấn (*Mirabilis jalapa*):**",
          "• Lai thuận: Cây mẹ lá đốm $\times$ Cây bố lá xanh $\to F_1$: **100% Cây lá đốm**.",
          "• Lai nghịch: Cây mẹ lá xanh $\times$ Cây bố lá đốm $\to F_1$: **100% Cây lá xanh**.",
          "**Quy luật di truyền:** Trong mọi phép lai, kiểu hình của đời con luôn giống hoàn toàn kiểu hình của **cơ thể mẹ** (**di truyền theo dòng mẹ**).",
          "**Cơ chế tế bào học:** Khi thụ tinh, giao tử cái (trứng) có kích thước rất lớn chứa toàn bộ tế bào chất và các bào quan; trong khi giao tử đực (tinh trùng/hạt phấn) có kích thước rất nhỏ, chỉ truyền nhân vào trứng mà hầu như không đóng góp tế bào chất. Do đó, các gene trong bào quan của hợp tử hoàn toàn có nguồn gốc từ mẹ.",
          "**Đặc điểm nhận diện:** Kết quả lai thuận và lai nghịch khác nhau, đời con đồng loạt biểu hiện kiểu hình của mẹ; tính trạng không tuân theo các tỉ lệ phân li của Mendel."
        ]
      },
      {
        title: "3. Ý nghĩa và ứng dụng",
        badge: "Bệnh ti thể & Nguồn gốc tiến hóa",
        points: [
          "**Bệnh do đột biến gene ti thể ở người:** Gây các bệnh suy giảm năng lượng tế bào do ảnh hưởng chuỗi chuyền electron hô hấp (bệnh động kinh giật cơ MERRF, bệnh teo thần kinh thị giác Leber LHON). Mẹ mắc bệnh sẽ truyền bệnh cho toàn bộ con trai và con gái.",
          "**Nghiên cứu nhân chủng học:** Trình tự phân tử mtDNA chỉ truyền theo dòng mẹ và không xảy ra hoán vị gene nên được dùng làm chiếc 'đồng hồ phân tử' để truy tìm phả hệ nguồn gốc dòng mẹ của loài người qua hàng vạn năm."
        ]
      }
    ],
    summaryDiagram: "Trứng (Nhân + Tế bào chất chứa ti thể/lục lạp) + Tinh trùng (Chỉ truyền nhân) $\to$ Hợp tử nhận tế bào chất từ mẹ $\to$ Con luôn mang tính trạng của mẹ.",
    quizzes: [
      {
        q: "Đặc điểm nào sau đây là dấu hiệu đặc trưng nhất để nhận biết một tính trạng do gene nằm trong tế bào chất (gene ngoài nhân) quy định?",
        options: [
          "A. Kết quả của phép lai thuận và lai nghịch hoàn toàn giống nhau",
          "B. Tỉ lệ phân li kiểu hình ở đời con luôn tuân theo đúng tỉ lệ 3 trội : 1 lặn",
          "C. Kết quả lai thuận nghịch khác nhau và đời con luôn có kiểu hình giống cơ thể mẹ",
          "D. Tính trạng chỉ biểu hiện ở các cá thể mang giới tính đực"
        ],
        answer: 2,
        explain: "Di truyền tế bào chất có đặc trưng cốt lõi là di truyền theo dòng mẹ: hợp tử nhận tế bào chất chủ yếu từ trứng của mẹ, nên trong phép lai thuận nghịch đời con luôn có kiểu hình giống hệt cơ thể mẹ."
      },
      {
        q: "Tại sao trong thụ tinh ở phần lớn các loài sinh vật hữu tính, hợp tử lại nhận hầu hết các bào quan ti thể và lục lạp từ cơ thể mẹ?",
        options: [
          "A. Vì tinh trùng chủ động tiêu hủy ti thể của chính nó trước khi thụ tinh",
          "B. Vì tế bào trứng có kích thước lớn chứa nhiều tế bào chất, còn tinh trùng chỉ truyền nhân mà hầu như không đóng góp tế bào chất",
          "C. Vì gene của bố bị các enzyme trong nhân tế bào trứng phân giải",
          "D. Vì ti thể của bố không thể tự sao chép trong môi trường tế bào trứng"
        ],
        answer: 1,
        explain: "Trứng là tế bào khổng lồ chứa toàn bộ lượng chất dinh dưỡng và bào quan cho phôi phát triển, còn tinh trùng chỉ là gói chuyên chở nhân vật chất di truyền, phần đuôi chứa ti thể bị đứt rụng lại ngoài màng trứng khi thụ tinh."
      },
      {
        q: "Ở người, bệnh teo thị thần kinh Leber (LHON) do đột biến gene nằm trong ti thể quy định. Một người phụ nữ mắc bệnh này kết hôn với một người đàn ông bình thường thì tỉ lệ con của họ mắc bệnh là bao nhiêu?",
        options: [
          "A. 100% số con (cả trai và gái) đều mắc bệnh",
          "B. 50% con trai mắc bệnh, 50% con gái bình thường",
          "C. 100% con gái mắc bệnh, con trai hoàn toàn bình thường",
          "D. 0% vì bệnh do gene lặn bị gene của bố lấn át"
        ],
        answer: 0,
        explain: "Vì bệnh ti thể di truyền theo dòng mẹ, người mẹ mắc bệnh sẽ truyền các ti thể đột biến cho toàn bộ trứng của mình, do đó 100% số con sinh ra (cả con trai và con gái) đều nhận gene bệnh từ mẹ."
      }
    ]
  },

  16: {
    num: 16,
    chapter: 3,
    isPractical: false,
    title: "Tương tác giữa kiểu gene với môi trường và thành tựu chọn giống",
    subtitle: "Mối quan hệ Kiểu gene + Môi trường → Kiểu hình, thường biến, mức phản ứng và ứng dụng chọn giống",
    objectives: "Phân tích mối quan hệ giữa kiểu gene, môi trường và kiểu hình; hiểu khái niệm mức phản ứng và thường biến; phân biệt thường biến với đột biến; nêu các thành tựu chọn giống cây trồng, vật nuôi tại Việt Nam.",
    sections: [
      {
        title: "1. Mối quan hệ giữa kiểu gene, môi trường và kiểu hình",
        badge: "Công thức cốt lõi",
        points: [
          "**Công thức cốt lõi:** **Kiểu gene + Môi trường $\to$ Kiểu hình**. Kiểu hình của cơ thể sinh vật không do kiểu gene quy định một cách cứng nhắc, mà là kết quả của sự tương tác phức tạp giữa kiểu gene với các yếu tố môi trường xung quanh.",
          "**Bản chất:** Kiểu gene quy định **khả năng phản ứng** của cơ thể trước các tác nhân môi trường khác nhau; còn môi trường quyết định **mức độ biểu hiện cụ thể** của kiểu hình trong giới hạn đó.",
          "**Ví dụ thực tế:** Thỏ Himalaya mang kiểu gene quy định màu lông trắng, nhưng nếu cạo một mảng lông ở lưng và buộc đá lạnh vào thì lông mọc lại có màu đen (do nhiệt độ thấp kích hoạt enzyme tổng hợp sắc tố melanin hoạt động)."
        ]
      },
      {
        title: "2. Mức phản ứng và Thường biến (Mềm dẻo kiểu hình)",
        badge: "Giới hạn phản ứng & Thường biến",
        points: [
          "**Mức phản ứng:** Tập hợp các kiểu hình khác nhau của cùng một kiểu gene tương ứng với các điều kiện môi trường khác nhau được gọi là **mức phản ứng của kiểu gene**. Mức phản ứng do kiểu gene quy định nên di truyền được.",
          "• **Tính trạng chất lượng** (như màu hoa, hình dạng hạt, nhóm máu): thường có mức phản ứng hẹp, ít phụ thuộc môi trường.",
          "• **Tính trạng số lượng** (như năng suất lúa, sản lượng trứng, thể trọng gia súc): thường có mức phản ứng rộng, chịu ảnh hưởng rất mạnh của chế độ dinh dưỡng, chăm sóc, khí hậu.",
          "**Thường biến (Mềm dẻo kiểu hình - Phenotypic plasticity):** Là những biến đổi ở kiểu hình của cùng một cơ thể sinh vật phát sinh dưới ảnh hưởng trực tiếp của môi trường, **không làm thay đổi kiểu gene nên không di truyền được cho đời sau**.",
          "• Đặc điểm: Xuất hiện đồng loạt theo một hướng xác định tương ứng với điều kiện môi trường; có tính thích nghi giúp sinh vật tồn tại (ví dụ: lá cây rau mác trên cạn hình mũi mác, dưới nước hình dải dài mềm)."
        ]
      },
      {
        title: "3. Thành tựu chọn giống cây trồng và vật nuôi",
        badge: "Năng suất & Phẩm chất giống",
        points: [
          "**Nguyên lí sản xuất nông nghiệp:** **Giống tốt (kiểu gene) + Kĩ thuật canh tác chuẩn (môi trường) $\to$ Năng suất tối đa (kiểu hình)**. Giống quyết định giới hạn năng suất tối đa, còn kĩ thuật chăm sóc quyết định mức độ đạt được năng suất trong giới hạn đó.",
          "**Thành tựu chọn giống ở Việt Nam:**",
          "• **Cây trồng:** Tạo các giống lúa thuần và lúa lai chất lượng cao, năng suất vượt trội (ST24, ST25 đạt giải gạo ngon nhất thế giới; các giống lúa chịu mặn, chịu ngập phèn cho vùng Đồng bằng sông Cửu Long); các giống ngô lai kháng sâu, đậu tương biến đổi gene.",
          "• **Vật nuôi:** Lai tạo các giống lợn siêu nạc (lai giữa lợn Ỉ, lợn Móng Cái bản địa với lợn ngoại Yorkshire, Landrace); giống bò sữa lai cho sản lượng sữa cao thích nghi khí hậu nhiệt đới."
        ]
      }
    ],
    summaryDiagram: "Kiểu gene quy định mức phản ứng. Môi trường kích hoạt kiểu hình cụ thể. Thường biến: Biến đổi kiểu hình, KHÔNG đổi gene, KHÔNG di truyền, có tính thích nghi.",
    quizzes: [
      {
        q: "Hiện tượng thường biến (mềm dẻo kiểu hình) có đặc điểm nào sau đây?",
        options: [
          "A. Làm biến đổi trình tự nucleotide trong gene và di truyền được cho đời sau",
          "B. Biến đổi kiểu hình không do biến đổi kiểu gene, không di truyền và định hướng thích nghi với môi trường",
          "C. Luôn gây hại cho sức sống và khả năng sinh sản của sinh vật",
          "D. Xuất hiện riêng lẻ, cá biệt và vô hướng"
        ],
        answer: 1,
        explain: "Thường biến là sự biến đổi kiểu hình để thích nghi trước môi trường mà không làm thay đổi vật chất di truyền (kiểu gene), do đó không di truyền được."
      },
      {
        q: "Tập hợp các kiểu hình khác nhau của cùng một kiểu gene tương ứng với các điều kiện môi trường sống khác nhau được gọi là gì?",
        options: [
          "A. Đột biến soma",
          "B. Đa hình di truyền",
          "C. Mức phản ứng của kiểu gene",
          "D. Tương tác bổ sung"
        ],
        answer: 2,
        explain: "Khái niệm mức phản ứng: là tập hợp toàn bộ các kiểu hình mà một kiểu gene có thể tạo ra khi sống trong các môi trường khác nhau."
      },
      {
        q: "Trong sản xuất nông nghiệp, nhóm tính trạng nào sau đây thường có mức phản ứng rộng và chịu ảnh hưởng rất lớn của kĩ thuật chăm sóc, chế độ bón phân, tưới nước?",
        options: [
          "A. Tính trạng số lượng (năng suất hạt, sản lượng sữa, khối lượng thịt)",
          "B. Tính trạng chất lượng (hình dạng quả tròn hay dài, màu sắc cánh hoa)",
          "C. Nhóm máu hệ ABO ở vật nuôi",
          "D. Tỉ lệ giới tính đực cái khi sinh"
        ],
        answer: 0,
        explain: "Các tính trạng số lượng (đo đếm được như cân nặng, năng suất, lượng sữa) do nhiều gene cùng chi phối nên có mức phản ứng rất rộng, dao động mạnh tùy thuộc vào mức độ chăm sóc và thức ăn."
      }
    ]
  },

  17: {
    num: 17,
    chapter: 3,
    isPractical: true,
    title: "Thực hành: Thí nghiệm về thường biến ở cây trồng",
    subtitle: "Thiết kế thí nghiệm kiểm chứng ảnh hưởng của ánh sáng, nước, phân bón lên kiểu hình cây trồng",
    objectives: "Thiết kế và bố trí được thí nghiệm đối chứng kiểm tra thường biến trên các cành giâm/cây con cùng giống; thu thập số liệu chiều cao, màu sắc lá; phân biệt rõ thường biến với biến dị di truyền.",
    sections: [
      {
        title: "1. Nguyên lí thí nghiệm và Thiết kế đối chứng",
        badge: "Đồng nhất kiểu gene & Biến số",
        points: [
          "**Nguyên tắc đồng nhất kiểu gene:** Để chứng minh biến đổi kiểu hình là do môi trường (thường biến) chứ không phải do gene, bắt buộc phải dùng các cá thể có **cùng một kiểu gene** (nhân giống vô tính từ một cây mẹ duy nhất: giâm cành rau muống, củ khoai tây cắt thành các mảnh mang mắt mầm, hoặc cành sắn).",
          "**Bố trí biến số môi trường:**",
          "• **Lô đối chứng:** Cung cấp đầy đủ ánh sáng mặt trời tự nhiên, tưới đủ nước và bón phân cân đối.",
          "• **Lô thí nghiệm 1 (Thiếu ánh sáng):** Đặt trong bóng tối hoặc che phủ bạt kín.",
          "• **Lô thí nghiệm 2 (Dưới nước ngập):** Trồng cành trong chậu ngập nước hoàn toàn."
        ]
      },
      {
        title: "2. Tiến hành thí nghiệm và Ghi chép dữ liệu",
        badge: "Đo đạc & Thu thập chỉ số",
        points: [
          "**Bước 1 - Chuẩn bị vật liệu:** Chọn 20 cành rau muống bánh tẻ đều nhau từ một luống rau mẹ, cắt chiều dài bằng nhau ($15\text{ cm}$), ngắt bớt lá già dưới gốc.",
          "**Bước 2 - Trồng theo các lô:** Trồng 10 cành vào chậu đất ngoài trời đủ nắng (Lô đối chứng) và 10 cành vào chậu đất để trong phòng tối (Lô thí nghiệm).",
          "**Bước 3 - Theo dõi và đo đạc sau 7–10 ngày:** Đo chiều cao thân, độ dài lóng thân, đếm số lá non mới mọc, quan sát màu sắc của phiến lá và độ dày của cuống lá.",
          "**Kết quả điển hình:** Cây ngoài sáng thân mập, lóng ngắn, lá màu xanh lục thẫm, rễ phát triển; cây trong tối thân dài vống lên, lóng dài, lá màu vàng nhợt nhạt do không tổng hợp được diệp lục."
        ]
      },
      {
        title: "3. Kết luận khoa học và Kiểm chứng tính di truyền",
        badge: "Kiểm tra thế hệ sau",
        points: [
          "**Bản chất:** Sự khác biệt về màu sắc và chiều cao giữa hai lô là thường biến thích nghi tạm thời do môi trường kích hoạt.",
          "**Kiểm chứng không di truyền:** Khi đưa cây ở trong tối ra ngoài ánh sáng mặt trời, sau vài ngày lá chuyển sang màu xanh lục bình thường; các hạt phấn hoặc cành giâm lấy từ cây này trồng lại ở môi trường bình thường đều cho ra cây bình thường, chứng minh kiểu gene không hề bị biến đổi."
        ]
      }
    ],
    summaryDiagram: "Cùng 1 kiểu gene (giâm cành) $\to$ Trồng 2 môi trường (Sáng vs Tối) $\to$ Kiểu hình khác biệt (Lá xanh mập vs Vàng vống) $\to$ Đưa ra sáng hồi phục $\to$ Chứng minh Thường biến.",
    quizzes: [
      {
        q: "Trong thí nghiệm kiểm chứng hiện tượng thường biến ở cây trồng, tại sao người ta bắt buộc phải sử dụng các cành giâm hoặc chồi chiết từ cùng một cây mẹ ban đầu?",
        options: [
          "A. Để giảm bớt chi phí mua hạt giống",
          "B. Để đảm bảo tất cả các cây thí nghiệm có kiểu gene hoàn toàn giống nhau, loại trừ yếu tố biến dị di truyền",
          "C. Để cây sinh trưởng nhanh hơn so với gieo từ hạt",
          "D. Để ngăn cản quá trình quang hợp của cây con"
        ],
        answer: 1,
        explain: "Yêu cầu tiên quyết của thí nghiệm chứng minh thường biến là kiểu gene phải đồng nhất 100% (nhân giống sinh dưỡng từ 1 cây mẹ). Khi đó, mọi sai khác về kiểu hình quan sát được giữa các lô hoàn toàn do môi trường gây ra."
      },
      {
        q: "Cây rau mác mọc trên cạn có phiến lá hình mũi mác, nhưng khi ngập hoàn toàn trong nước thì các lá ngập nước lại có phiến lá hình dải dài mềm. Khi đưa cây này trồng trở lại lên cạn thì lá mới mọc sẽ có hình gì?",
        options: [
          "A. Vẫn giữ nguyên hình dải dài mềm vì kiểu gene đã bị biến đổi vĩnh viễn",
          "B. Mọc lá hình mũi mác bình thường vì đây chỉ là thường biến không làm thay đổi kiểu gene",
          "C. Cây sẽ chết ngay lập tức do không quen môi trường cạn",
          "D. Cây sẽ tạo ra cả hai loại lá trên cùng một cành"
        ],
        answer: 1,
        explain: "Hiện tượng thay đổi hình dạng lá rau mác là thường biến thích nghi (mềm dẻo kiểu hình). Khi đưa trở lại cạn, kiểu gene ban đầu kích hoạt biểu hiện lá hình mũi mác giúp chịu gió và giảm thoát hơi nước."
      },
      {
        q: "Để phân biệt một biến đổi kiểu hình là thường biến hay đột biến gene, phương pháp thực nghiệm nào sau đây là chuẩn xác nhất?",
        options: [
          "A. Cắt bỏ toàn bộ lá của cây và quan sát tốc độ mọc chồi mới",
          "B. Đem cá thể đó trở lại môi trường chuẩn ban đầu hoặc theo dõi kiểu hình ở các thế hệ sinh sản tiếp theo",
          "C. Tăng lượng phân bón hóa học lên gấp đôi",
          "D. Đo hàm lượng nước trong mô tế bào"
        ],
        answer: 1,
        explain: "Nếu là thường biến thì khi đưa về môi trường chuẩn cây sẽ hồi phục kiểu hình bình thường và không di truyền đời sau. Nếu là đột biến gene thì kiểu hình biến đổi sẽ tồn tại bền vững và di truyền được cho thế hệ sau qua sinh sản."
      }
    ]
  }
};

module.exports = lessonsP1;
