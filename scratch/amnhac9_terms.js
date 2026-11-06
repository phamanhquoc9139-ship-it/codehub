const amnhac9Terms = [
  {
    term: "Cao độ (Pitch)",
    badge: "Lí thuyết & Kí hiệu",
    icon: "fa-music",
    color: "emerald",
    desc: "Độ cao thấp của âm thanh, được biểu diễn bằng 7 tên nốt chính (Đô, Rê, Mi, Pha, Son, La, Si) hoặc các kí hiệu chữ cái tương ứng (C, D, E, F, G, A, B) và vị trí trên khuông nhạc."
  },
  {
    term: "Trường độ (Duration)",
    badge: "Lí thuyết & Nhịp điệu",
    icon: "fa-clock",
    color: "blue",
    desc: "Độ dài ngắn ngân vang của âm thanh, được ghi nhận bằng các hình nốt: nốt tròn, nốt trắng, nốt đen, nốt móc đơn, nốt móc kép cùng các dấu lặng tương ứng."
  },
  {
    term: "Sắc thái (Dynamics / Expression)",
    badge: "Biểu cảm âm nhạc",
    icon: "fa-wave-square",
    color: "amber",
    desc: "Cường độ và tính chất cảm xúc khi trình diễn: p (nhẹ - piano), mp (vừa nhẹ), f (mạnh - forte), mf (vừa mạnh), crescendo (to dần), decrescendo (nhỏ dần), legato (liền giọng), staccato (ngắt tiếng)."
  },
  {
    term: "Phách & Âm hình tiết tấu (Beat & Rhythm pattern)",
    badge: "Tiết tấu",
    icon: "fa-drum",
    color: "indigo",
    desc: "Phách là đơn vị thời gian chia đều nhịp. Âm hình tiết tấu là sự sắp xếp phối hợp các trường độ nốt nhạc lặp lại đặc trưng, tạo nên bước đi và sức sống cho từng điệu nhạc dân ca hay hiện đại."
  },
  {
    term: "Hoà giọng, Hát bè & Lĩnh xướng",
    badge: "Kĩ năng Hát",
    icon: "fa-users",
    color: "purple",
    desc: "Hoà giọng là sự đồng điệu về âm lượng, âm sắc và cao độ giữa các thành viên. Hát bè là nhiều bè hát với cao độ khác nhau cùng lúc tạo nên không gian hoà âm đầy đặn (bè 1, bè 2, đuổi bè). Lĩnh xướng là một người hát mở đầu hoặc dẫn dắt trước khi cả tập thể hoà giọng."
  },
  {
    term: "Gam & Trục gam (Scale & Scale Axis)",
    badge: "Lí thuyết",
    icon: "fa-layer-group",
    color: "teal",
    desc: "Gam là hệ thống gồm 7 bậc âm sắp xếp theo thứ tự cao độ từ thấp đến cao hoặc ngược lại (SGK ôn gam Đô trưởng và La thứ tự nhiên/hoà âm). Trục gam là tập hợp các âm nền cơ bản (bậc I - III - V) dùng để luyện định hướng cao độ vững chắc trước khi đọc bài nhạc."
  },
  {
    term: "Quãng (Interval)",
    badge: "Lí thuyết cốt lõi",
    icon: "fa-ruler-horizontal",
    color: "rose",
    desc: "Khoảng cách về độ cao giữa hai âm thanh. Tên quãng xác định bởi số bậc âm (quãng 1, 2, 3, 4, 5, 6, 7, 8). Tính chất của quãng (trưởng, thứ, đúng, tăng, giảm) được xác định chính xác bằng số cung và nửa cung giữa hai âm."
  },
  {
    term: "Dịch giọng (Transposition)",
    badge: "Lí thuyết nâng cao",
    icon: "fa-arrows-split-up-and-left",
    color: "sky",
    desc: "Nâng cao hoặc hạ thấp độ cao của toàn bộ bản nhạc theo cùng một quãng xác định, trong khi vẫn giữ nguyên mối quan hệ giai điệu, bước nhảy quãng và trường độ giữa tất cả các nốt nhằm phù hợp với âm vực người hát hoặc nhạc cụ."
  },
  {
    term: "Hợp âm ba (Triad Chord)",
    badge: "Lí thuyết hoà âm",
    icon: "fa-bars-staggered",
    color: "emerald",
    desc: "Gồm ba âm xếp chồng lên nhau theo các quãng 3 liên tiếp: âm 1 (âm gốc), âm 3 và âm 5. Hợp âm ba trưởng cấu tạo từ Quãng 3 Trưởng + Quãng 3 Thứ (ví dụ C: Đô - Mi - Sol). Hợp âm ba thứ cấu tạo từ Quãng 3 Thứ + Quãng 3 Trưởng (ví dụ Am: La - Đô - Mi)."
  },
  {
    term: "Hệ thống kí hiệu Hợp âm chính SGK 9",
    badge: "Hoà âm ghi-nhớ",
    icon: "fa-guitar",
    color: "cyan",
    desc: "Hợp âm trưởng: C (Đô trưởng), F (Fa trưởng), G (Son trưởng). Hợp âm thứ: Am (La thứ), Dm (Rê thứ), Em (Mi thứ). Đây là các hợp âm nền tảng trong gam Đô trưởng và La thứ."
  },
  {
    term: "Recorder (Sáo dọc)",
    badge: "Nhạc cụ hơi",
    icon: "fa-wand-magic-sparkles",
    color: "green",
    desc: "Nhạc cụ hơi bằng nhựa hoặc gỗ có lỗ bấm và khối chặn thổi ở đầu. Phát âm dựa trên luồng hơi thổi qua lỗ thổi. Lớp 9 hoàn thiện kĩ thuật bịt kín lỗ bấm, thế bấm nốt Si giáng (Bb) và Pha thăng (F#), điều tiết cột hơi êm dịu."
  },
  {
    term: "Kèn phím (Melodica)",
    badge: "Nhạc cụ phím hơi",
    icon: "fa-keyboard",
    color: "blue",
    desc: "Nhạc cụ kết hợp bàn phím piano thu nhỏ với ống thổi hơi. Khi ấn phím đồng thời thổi hơi, van khí mở làm rung lưỡi gà tạo ra âm thanh chuẩn xác. Yêu cầu phối hợp nhịp nhàng giữa tay bấm phím và luồng hơi."
  },
  {
    term: "Serenade (Khúc nhạc chiều)",
    badge: "Thể loại nhạc cổ điển",
    icon: "fa-moon",
    color: "violet",
    desc: "Thể loại nhạc đàn hoặc ca khúc trữ tình quy mô vừa và nhỏ, giai điệu du dương, êm dịu, nhẹ nhàng, lãng mạn, theo truyền thống ban đầu thường được biểu diễn ngoài trời vào lúc hoàng hôn hoặc đêm trăng dưới cửa sổ người thương."
  },
  {
    term: "Tứ tấu & Ngũ tấu (Quartet & Quintet)",
    badge: "Hình thức hoà tấu",
    icon: "fa-users-line",
    color: "amber",
    desc: "Các hình thức hoà tấu nhạc thính phòng phương Tây: Tứ tấu dây (2 violon, 1 viola, 1 cello); Ngũ tấu kèn hoặc ngũ tấu đàn dây kết hợp thêm piano/kèn oboe/cor mang lại màu sắc âm thanh hòa quyện phong phú."
  },
  {
    term: "Âm vực (Vocal / Instrument Range)",
    badge: "Thanh nhạc & Khí nhạc",
    icon: "fa-arrows-up-down",
    color: "pink",
    desc: "Toàn bộ khoảng cách từ nốt thấp nhất đến nốt cao nhất mà một giọng hát của con người hoặc một loại nhạc cụ cụ thể có thể phát ra âm thanh rõ ràng, tự nhiên và vang đẹp."
  }
];

module.exports = amnhac9Terms;
