// scratch/lichsu10_data_p2.js
// Lịch Sử 10 - Bộ Kết nối tri thức với cuộc sống (Chủ đề 5 - 7: Bài 8 - Bài 13 + Bảng hệ thống mốc & Kĩ năng lịch sử)

const fs = require('fs');
const path = require('path');
const { topics, lessonsP1 } = require('./lichsu10_data_p1.js');

const lessonsP2 = {
  8: {
    num: 8,
    topic: 5,
    title: "Hành trình phát triển và thành tựu của văn minh Đông Nam Á thời cổ – trung đại",
    subtitle: "Ba giai đoạn phát triển, sự giao thoa bản địa với văn minh Ấn Độ – Trung Hoa và các thành tựu rực rỡ",
    openingQuestion: "Nằm ở vị trí 'ngã tư đường' hàng hải giữa Ấn Độ Dương và Thái Bình Dương, cư dân Đông Nam Á đã tiếp thu có chọn lọc văn minh Ấn Độ, Trung Hoa để sáng tạo nên bản sắc riêng như thế nào?",
    diagramCaption: "Sơ đồ 3 giai đoạn phát triển văn minh Đông Nam Á và Mũi tên giao lưu – tiếp biến văn hoá Ấn Độ / Trung Hoa / Phương Tây trên nền tảng bản địa",
    concepts: [
      {
        term: "Vị trí địa – lịch sử của Đông Nam Á",
        definition: "Bao gồm hệ thống bán đảo (Đông Nam Á lục địa) và quần đảo (Đông Nam Á hải đảo) nằm giữa Ấn Độ Dương và Thái Bình Dương, đóng vai trò là <strong>'ngã tư đường' giao thương hàng hải và giao lưu văn minh</strong> giữa Ấn Độ, Trung Hoa và thế giới."
      },
      {
        term: "Cơ tầng văn hoá bản địa & Tiếp biến văn hoá",
        definition: "Trước khi tiếp xúc với văn minh Ấn Độ và Trung Hoa, cư dân Đông Nam Á đã xây dựng được một <strong>nền tảng văn hoá nông nghiệp lúa nước bản địa vững chắc</strong> (đúc đồng Đông Sơn, tín ngưỡng sùng bái tự nhiên/thờ cúng tổ tiên, nhà sàn...). Nhờ đó, Đông Nam Á tiếp thu văn minh ngoại lai một cách hoà bình, chọn lọc ('hoà nhập mà không hoà tan')."
      }
    ],
    sections: [
      {
        heading: "1. Ba giai đoạn phát triển của văn minh Đông Nam Á thời cổ – trung đại",
        items: [
          "<strong>Giai đoạn 1 – Từ thế kỉ VII TCN đến đầu Công nguyên (Hình thành các quốc gia đầu tiên):</strong> Sự phát triển của kĩ thuật luyện đồng và sắt cùng nông nghiệp lúa nước thúc đẩy sự ra đời của các nhà nước sơ khai đầu tiên như <strong>Văn Lang – Âu Lạc, Phù Nam</strong> (Việt Nam), các quốc gia cổ ở hạ lưu sông Chao Phraya... Nền tảng văn minh bản địa thể hiện rõ nét, đồng thời bắt đầu giao lưu với Ấn Độ và Trung Hoa.",
          "<strong>Giai đoạn 2 – Từ thế kỉ VII đến cuối thế kỉ XV (Thời kì phát triển thịnh đạt):</strong> Hàng loạt quốc gia phong kiến hùng mạnh hình thành và bước vào thời kì hoàng kim như <strong>Đại Việt, Chăm-pa, Ăng-co (Campuchia), Pa-gan (Myanmar), Xu-khô-thay và A-út-thay-a (Thái Lan), Lan Xang (Lào), Sri Vi-giay-a và Ma-gia-pa-hít (Indonesia)</strong>. Kinh tế nông nghiệp và thương mại biển phồn thịnh; thành tựu văn minh phát triển rực rỡ trên cơ sở tiếp biến tinh hoa Ấn Độ và Trung Hoa.",
          "<strong>Giai đoạn 3 – Từ thế kỉ XVI đến cuối thế kỉ XIX (Thời kì suy yếu và biến chuyển):</strong> Các vương triều phong kiến bước vào khủng hoảng, suy yếu; chủ nghĩa tư bản phương Tây đẩy mạnh xâm nhập (thương mại, truyền giáo Công giáo) rồi tiến hành xâm lược thuộc địa. Văn minh Đông Nam Á tiếp xúc với văn minh phương Tây (chữ La-tinh, kĩ thuật, kiến trúc đô thị) nhưng vẫn duy trì mạch nguồn truyền thống."
        ]
      },
      {
        heading: "2. Thành tựu về Tín ngưỡng và Tôn giáo",
        items: [
          "<strong>Tín ngưỡng bản địa lâu đời:</strong> Gồm 3 nhóm chính: (1) <em>Tín ngưỡng sùng bái tự nhiên</em> (thờ thần Mặt Trời, thần Sông, thần Núi, thần Lúa gắn với cư dân nông nghiệp); (2) <em>Tín ngưỡng phồn thực</em> (cầu mong mùa màng và con người sinh sôi nảy nở); (3) <em>Tín ngưỡng thờ cúng tổ tiên và người có công với cộng đồng</em>.",
          "<strong>Sự du nhập và lan toả của các tôn giáo lớn:</strong><br>• <em>Phật giáo và Hin-đu giáo (Ấn Độ giáo):</em> Du nhập sớm từ Ấn Độ qua con đường buôn bán và truyền giáo hoà bình từ những thế kỉ đầu Công nguyên.<br>• <em>Hồi giáo:</em> Truyền vào qua thương nhân Ả Rập và Ấn Độ từ khoảng thế kỉ XIII, trở thành quốc giáo ở nhiều vương quốc hải đảo (Malaysia, Indonesia, Brunei).<br>• <em>Công giáo:</em> Truyền vào Philippines từ đầu thế kỉ XVI rồi lan sang Việt Nam và các nước khác.<br>• <strong>Đặc điểm nổi bật:</strong> Các tôn giáo ngoại lai hoà quyện dung hợp với tín ngưỡng bản địa, tạo nên diện mạo tôn giáo đa dạng, khoan dung."
        ]
      },
      {
        heading: "3. Thành tựu về Chữ viết và Văn học",
        items: [
          "<strong>Chữ viết:</strong> Ban đầu tiếp nhận <strong>chữ Phạn (Sanskrit), chữ Pali</strong> của Ấn Độ và <strong>chữ Hán</strong> của Trung Hoa; sau đó các dân tộc Đông Nam Á đã <strong>sáng tạo ra hệ thống chữ viết riêng</strong> để ghi âm tiếng mẹ đẻ: <em>chữ Chăm cổ, chữ Khmer cổ, chữ Mã Lai cổ, chữ Miến cổ, chữ Thái cổ và chữ Nôm của người Việt</em>. Từ thế kỉ XVII, chữ Quốc ngữ (theo mẫu tự La-tinh) xuất hiện.",
          "<strong>Văn học dân gian & Văn học viết:</strong> Kho tàng văn học dân gian đồ sộ (thần thoại, truyền thuyết, cổ tích, sử thi, ca dao). Văn học viết phát triển cả bằng chữ vay mượn và chữ dân tộc với những kiệt tác như: <strong>Truyện Kiều</strong> (Nguyễn Du – Việt Nam), sử thi <strong>Riêm-kê</strong> (Campuchia) và <strong>Ra-ma-kiên</strong> (Thái Lan – phóng tác sáng tạo từ sử thi <em>Ramayana</em> của Ấn Độ)."
        ]
      },
      {
        heading: "4. Thành tựu về Kiến trúc và Điêu khắc",
        items: [
          "<strong>Kiến trúc tôn giáo kì vĩ:</strong> Chịu ảnh hưởng kiến trúc Hin-đu giáo và Phật giáo nhưng mang đậm bản sắc từng dân tộc:<br>• <strong>Bô-rô-bu-đua (Borobudur – Indonesia):</strong> Quần thể bảo tháp Phật giáo lớn nhất thế giới.<br>• <strong>Quần thể Ăng-co Vát và Ăng-co Thom (Angkor Wat, Angkor Thom – Campuchia):</strong> Kiệt tác kiến trúc đá Hin-đu giáo và Phật giáo.<br>• <strong>Tháp Thạt Luổng (Lào), Chùa Vàng Shwedagon / Па-gan (Myanmar), Chùa Phật Ngọc (Thái Lan), Khu đền tháp Mỹ Sơn và Hoàng thành Thăng Long (Việt Nam)</strong>.",
          "<strong>Nghệ thuật Điêu khắc:</strong> Nghệ thuật đúc đồng bản địa đỉnh cao với <strong>trống đồng và thạp đồng Đông Sơn</strong>; điêu khắc tượng Phật, tượng thần Hin-đu (Brahma, Vishnu, Shiva) và hệ thống phù điêu vũ nữ Apsara trên đá/gạch vô cùng sống động."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Phân tích sự tiếp biến sáng tạo văn minh Ấn Độ tại Đông Nam Á",
      cases: [
        {
          name: "Từ sử thi Ramayana (Ấn Độ) đến Riêm-kê (Campuchia) và Ra-ma-kiên (Thái Lan)",
          detail: "Cư dân Đông Nam Á không sao chép nguyên xi sử thi Ấn Độ mà cải biên cốt truyện, lồng ghép phong tục, địa danh, đạo lí Phật giáo và tâm hồn dân tộc mình vào tác phẩm, đồng thời chuyển thể thành nghệ thuật múa mặt nạ cung đình và rối bóng."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Liên hệ Cộng đồng ASEAN hiện nay:</strong> Sự tương đồng về cơ tầng văn hoá lúa nước và lịch sử giao lưu văn minh lâu đời chính là nền tảng văn hoá vững chắc gắn kết 10 quốc gia thành viên ASEAN trong khẩu hiệu <em>'Một tầm nhìn, một bản sắc, một cộng đồng'</em>."
    ]
  },

  9: {
    num: 9,
    topic: 6,
    title: "Một số nền văn minh cổ trên đất nước Việt Nam",
    subtitle: "Ba cội nguồn văn minh cổ trên lãnh thổ Việt Nam: Văn Lang – Âu Lạc, Chăm-pa và Phù Nam",
    openingQuestion: "Ba nền văn minh cổ Văn Lang – Âu Lạc (miền Bắc), Chăm-pa (miền Trung) và Phù Nam (miền Nam) đã hình thành trên những điều kiện tự nhiên nào và đóng góp những gì vào cội nguồn văn minh Việt Nam?",
    diagramCaption: "Sơ đồ đối sánh 3 nền văn minh cổ trên đất nước Việt Nam: Văn Lang – Âu Lạc (Lưu vực sông Hồng/Đông Sơn), Chăm-pa (Duyên hải miền Trung/Sa Huỳnh) và Phù Nam (Đồng bằng sông Cửu Long/Óc Eo)",
    concepts: [
      {
        term: "Văn minh Văn Lang – Âu Lạc (Văn minh sông Hồng / Văn minh Việt cổ)",
        definition: "Nền văn minh đầu tiên của người Việt cổ hình thành từ đầu thiên niên kỉ I TCN đến đầu Công nguyên tại khu vực Bắc Bộ và Bắc Trung Bộ (lưu vực sông Hồng, sông Mã, sông Cả), dựa trên đỉnh cao của <strong>văn hoá Đông Sơn</strong> và nền nông nghiệp lúa nước."
      },
      {
        term: "Văn minh Chăm-pa (Duyên hải miền Trung)",
        definition: "Hình thành từ thế kỉ II đến thế kỉ XV (và kéo dài đến thế kỉ XVII–XIX) trên vùng duyên hải miền Trung và một phần Tây Nguyên, trên cơ sở <strong>văn hoá đồng sắt Sa Huỳnh</strong> kết hợp giao lưu sâu sắc với văn minh Ấn Độ và thương mại biển."
      },
      {
        term: "Văn minh Phù Nam (Vùng Nam Bộ)",
        definition: "Hình thành từ khoảng thế kỉ I đến thế kỉ VII tại lưu vực hạ lưu sông Mê Công (đồng bằng sông Cửu Long), gắn liền với <strong>văn hoá Óc Eo</strong> và hệ thống đô thị – cảng thị thương mại quốc tế sầm uất."
      }
    ],
    sections: [
      {
        heading: "1. Văn minh Văn Lang – Âu Lạc (Thế kỉ VII TCN – đầu Công nguyên)",
        items: [
          "<strong>Cơ sở hình thành:</strong> Lưu vực các con sông lớn (sông Hồng, sông Thái Bình, sông Mã, sông Cả) có đất phù sa màu mỡ, khí hậu nhiệt đới ẩm gió mùa thuận lợi cho <strong>trồng lúa nước</strong>. Nhu cầu liên kết đắp đê trị thuỷ, làm thuỷ lợi và chống ngoại xâm đã thúc đẩy các công xã nông thôn (Kẻ, Chạ, Làng) tập hợp lại, hình thành <strong>nhà nước Văn Lang (các Vua Hùng, kinh đô Phong Châu)</strong> và nối tiếp là <strong>nhà nước Âu Lạc (An Dương Vương, kinh đô Cổ Loa)</strong>.",
          "<strong>Tổ chức xã hội & Nhà nước:</strong> Bộ máy nhà nước sơ khai nhưng đã có tính hệ thống: đứng đầu là Vua (Hùng Vương / An Dương Vương), giúp việc có Lạc hầu, Lạc tướng; cả nước chia làm các bộ do Lạc tướng cai quản, dưới bộ là các công xã nông thôn (chiềng, chạ) do Bồ chính đứng đầu. Xã hội gồm 3 tầng lớp: quý tộc, dân tự do (nông dân công xã, thợ thủ công) và nô tì.",
          "<strong>Kinh tế & Kĩ thuật luyện kim Đông Sơn:</strong> Trồng lúa nước dùng lưỡi cày đồng và sức kéo trâu bò là chủ đạo, kết hợp chăn nuôi, đánh cá và các nghề thủ công (gốm, dệt, mộc). Đỉnh cao rực rỡ nhất là <strong>kĩ thuật đúc đồng Đông Sơn</strong> với <strong>Trống đồng Đông Sơn (Ngọc Lũ, Hoàng Hạ, Cổ Loa), thạp đồng, rìu đồng, lẫy nỏ và hàng vạn mũi tên đồng Cổ Loa</strong>, cùng bước đầu rèn sắt.",
          "<strong>Đời sống vật chất & tinh thần:</strong> Ăn cơm tẻ, cơm nếp, rau cá; ở nhà sàn tránh thú dữ và ẩm thấp; đi lại chủ yếu bằng thuyền bè; tục ăn trầu, nhuộm răng, xăm mình, làm bánh chưng – bánh giầy. Tín ngưỡng thờ thần Mặt Trời, thần Sông, thần Núi, tín ngưỡng phồn thực và thờ cúng tổ tiên, anh hùng."
        ]
      },
      {
        heading: "2. Văn minh Chăm-pa (Thế kỉ II – thế kỉ XV/XVII)",
        items: [
          "<strong>Cơ sở hình thành & Tổ chức nhà nước:</strong> Phát triển từ nền <strong>văn hoá Sa Huỳnh</strong> (Quảng Trị đến Nam Trung Bộ). Năm <strong>192</strong>, nhân dân Tượng Lâm dưới sự lãnh đạo của <strong>Khu Liên</strong> nổi dậy lật đổ ách đô hộ nhà Hán, lập ra nước <strong>Lâm Ấp</strong> (sau đổi tên là <strong>Chăm-pa</strong>, kinh đô Sin-ha-pu-ra tại Trà Kiệu, Quảng Nam). Đứng đầu nhà nước là Vua theo mô hình quân chủ chuyên chế (đồng nhất vua với thần), dưới có Tể tướng và các đại thần văn – võ; cả nước chia thành các châu – huyện – làng.",
          "<strong>Hoạt động kinh tế:</strong> Kết hợp canh tác lúa nước ở các đồng bằng nhỏ hẹp ven biển (dùng xe guồng nước), khai thác lâm thổ sản (trầm hương, ngà voi, sừng tê) với nghề gốm, dệt, đóng thuyền và đặc biệt mạnh về <strong>thương mại hàng hải quốc tế</strong>.",
          "<strong>Đời sống tinh thần, Chữ viết & Kiến trúc – Điêu khắc:</strong><br>• <em>Tín ngưỡng & Tôn giáo:</em> Từ tín ngưỡng vạn vật hữu linh, thờ mẫu và sinh thực khí (Linga – Yoni), cư dân Chăm tiếp nhận mạnh mẽ <strong>Hin-đu giáo (thờ thần Shiva) và Phật giáo</strong> (từng là trung tâm Phật giáo lớn ở Đồng Dương), về sau một bộ phận theo Hồi giáo.<br>• <em>Chữ viết:</em> Trên cơ sở chữ Phạn (Sanskrit) của Ấn Độ, sáng tạo ra <strong>chữ Chăm cổ</strong> từ thế kỉ IV (bia Võ Cạnh, bia Đông Yên Châu – chữ viết cổ nhất Đông Nam Á).<br>• <em>Kiến trúc & Điêu khắc:</em> Kĩ thuật xây dựng <strong>đền tháp bằng gạch nung không thấy mạch vữa</strong> kết hợp phù điêu đá sa thạch đạt đỉnh cao nghệ thuật tại <strong>Thánh địa Mỹ Sơn (Di sản văn hoá thế giới), Phật viện Đồng Dương, Tháp Bà Pô Na-ga (Nha Trang)</strong>; cùng lễ hội Ka-tê và âm nhạc, vũ điệu Chăm độc đáo."
        ]
      },
      {
        heading: "3. Văn minh Phù Nam (Thế kỉ I – thế kỉ VII)",
        items: [
          "<strong>Cơ sở hình thành & Nhà nước:</strong> Ra đời trên nền tảng <strong>văn hoá tiền Óc Eo và văn hoá Óc Eo</strong> tại vùng đồng bằng sông Cửu Long màu mỡ, hệ thống kênh rạch chằng chịt và nằm ngay trên trục đường biển từ Ấn Độ Dương sang Thái Bình Dương. Từ thế kỉ I, các tiểu quốc liên kết thành vương quốc <strong>Phù Nam</strong>; đến thế kỉ III – V, Phù Nam phát triển thành một đế chế hàng hải hùng mạnh ở Đông Nam Á.",
          "<strong>Kinh tế nông – thương nghiệp cảng thị:</strong> Trồng lúa nước, chăn nuôi, đánh bắt thuỷ sản kết hợp nghề thủ công (chế tác vàng bạc, đá quý, thuỷ tinh, gốm, đóng thuyền). Đặc biệt, <strong>cảng thị Óc Eo (An Giang)</strong> là thương cảng quốc tế sầm uất, nơi khảo cổ học tìm thấy đồng tiền vàng La Mã, gương đồng thời Hán và trang sức Ấn Độ, Ba Tư.",
          "<strong>Đời sống vật chất & tinh thần:</strong> Cư dân ở nhà sàn trên mặt nước/kênh rạch, đi lại bằng ghe thuyền. Tiếp nhận sớm <strong>Phật giáo và Hin-đu giáo</strong> từ Ấn Độ; sáng tạo nghệ thuật điêu khắc tượng Phật bằng gỗ và tượng thần Vishnu, Surya bằng đá mang phong cách Óc Eo đặc sắc."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Khai thác hiện vật khảo cổ của 3 nền văn minh cổ Việt Nam",
      cases: [
        {
          name: "Trống đồng Ngọc Lũ (Văn Lang – Âu Lạc) • Tháp Mỹ Sơn (Chăm-pa) • Hiện vật cảng thị Óc Eo (Phù Nam)",
          detail: "Ba biểu tượng khảo cổ đại diện cho 3 sắc thái văn minh trên dải đất Việt Nam: Văn minh nông nghiệp lúa nước và luyện đồng sông Hồng (Văn Lang – Âu Lạc); Văn minh đền tháp và thương mại biển miền Trung (Chăm-pa); Văn minh kênh rạch và cảng thị quốc tế Nam Bộ (Phù Nam). Cả ba đã hợp lưu tạo nên sự thống nhất trong đa dạng của văn minh Việt Nam."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Ý nghĩa lịch sử:</strong> Khẳng định trước khi bước vào kỉ nguyên độc lập Đại Việt, trên toàn bộ lãnh thổ Việt Nam (Bắc – Trung – Nam) đã tồn tại những nền văn minh bản địa phát triển rực rỡ, có nhà nước, chữ viết, kĩ thuật và bản sắc riêng."
    ]
  },

  10: {
    num: 10,
    topic: 6,
    title: "Văn minh Đại Việt",
    subtitle: "Khái niệm, tiến trình phát triển từ thế kỉ X đến trước năm 1858 và những thành tựu rực rỡ trên mọi lĩnh vực",
    openingQuestion: "Văn minh Đại Việt được hình thành trên những cội nguồn nào và đã đạt được những thành tựu tiêu biểu gì về chính trị, luật pháp, kinh tế, tư tưởng – giáo dục, chữ viết – văn học, khoa học và nghệ thuật?",
    diagramCaption: "Sơ đồ Tiến trình phát triển Văn minh Đại Việt qua các triều đại (Ngô – Đinh – Tiền Lê – Lý – Trần – Hồ – Lê sơ – Mạc – Lê Trung hưng – Tây Sơn – Nguyễn) & 6 trụ cột thành tựu",
    concepts: [
      {
        term: "Khái niệm Văn minh Đại Việt",
        definition: "Nền văn minh rực rỡ của dân tộc Việt Nam hình thành và phát triển trong kỉ nguyên quốc gia phong kiến độc lập, tự chủ kéo dài gần một thiên niên kỉ (từ <strong>thế kỉ X đến giữa thế kỉ XIX – trước năm 1858</strong>), gắn với quốc hiệu <strong>Đại Việt</strong> (từ thời Lý Thánh Tông năm 1054)."
      },
      {
        term: "Cơ sở hình thành Văn minh Đại Việt",
        definition: "1. Kế thừa trực tiếp nền văn minh <strong>Văn Lang – Âu Lạc</strong> và truyền thống đấu tranh bất khuất giữ gìn bản sắc Việt suốt hơn 1000 năm Bắc thuộc.<br>2. Nền tảng <strong>độc lập, tự chủ quốc gia</strong> được củng cố qua các cuộc kháng chiến chống ngoại xâm thắng lợi và sự phát triển của kinh tế nông nghiệp lúa nước, thủ công nghiệp, thương nghiệp.<br>3. Tiếp thu có chọn lọc các thành tựu văn minh bên ngoài (Trung Hoa, Ấn Độ, Chăm-pa và sau đó là phương Tây) để <strong>dân tộc hoá</strong> làm giàu bản sắc Đại Việt."
      }
    ],
    sections: [
      {
        heading: "1. Tiến trình phát triển của Văn minh Đại Việt qua các thời kì",
        items: [
          "<strong>Thế kỉ X (Thời Ngô – Đinh – Tiền Lê):</strong> Bước đầu xác lập và củng cố nền độc lập tự chủ quốc gia, định đô ở Cổ Loa rồi Hoa Lư.",
          "<strong>Thế kỉ XI – XV (Thời Lý – Trần – Hồ):</strong> Định đô tại Thăng Long (1010); văn minh Đại Việt phát triển toàn diện và mang đậm tinh thần <em>tam giáo đồng nguyên</em> (Phật – Nho – Đạo, trong đó Phật giáo rất thịnh đạt).",
          "<strong>Thế kỉ XV – đầu thế kỉ XVI (Thời Lê sơ, từ 1428):</strong> Nhà nước quân chủ chuyên chế trung ương tập quyền đạt tới đỉnh cao (nhất là dưới triều Lê Thánh Tông); Nho giáo chiếm địa vị độc tôn; giáo dục khoa cử và luật pháp phát triển cực thịnh.",
          "<strong>Thế kỉ XVI – XVIII (Thời Mạc – Lê Trung hưng – Tây Sơn):</strong> Kinh tế hàng hoá, đô thị (Kẻ Chợ, Phố Hiến, Hội An, Thanh Hà) và giao thương quốc tế khởi sắc; văn hoá dân gian, chữ Nôm phát triển mạnh và bắt đầu tiếp xúc với văn minh phương Tây (Công giáo, chữ Quốc ngữ). Phong trào Tây Sơn xoá bỏ chia cắt Đàng Trong – Đàng Ngoài, bảo vệ độc lập dân tộc.",
          "<strong>Nửa đầu thế kỉ XIX (Thời Nguyễn đến trước 1858):</strong> Nhà Nguyễn thống nhất lãnh thổ từ ải Nam Quan đến mũi Cà Mau, thực hiện cải cách hành chính (Minh Mạng) và tổng kết nhiều công trình sử học, địa lí, kiến trúc cung đình Huế đồ sộ."
        ]
      },
      {
        heading: "2. Thành tựu về Chính trị và Luật pháp",
        items: [
          "<strong>Thiết chế chính trị & Cải cách hành chính:</strong> Hoàn thiện bộ máy nhà nước quân chủ trung ương tập quyền từ thời Lý – Trần và đạt đỉnh cao thời Lê sơ, Nguyễn. Ba cuộc cải cách lớn tiêu biểu: cải cách của <strong>Hồ Quý Ly</strong> (cuối TK XIV – đầu TK XV), cải cách của <strong>Lê Thánh Tông</strong> (nửa sau TK XV – chia cả nước thành 13 đạo thừa tuyên, lập Lục bộ, Lục tự, Lục khoa) và cải cách của <strong>Minh Mạng</strong> (nửa đầu TK XIX – chia 30 tỉnh và 1 phủ Thừa Thiên).",
          "<strong>Hệ thống pháp luật thành văn tiến bộ:</strong><br>• Thời Lý ban hành bộ <strong>Hình thư (1042)</strong> – bộ luật thành văn đầu tiên của nước ta.<br>• Thời Trần có bộ <strong>Hình luật</strong>.<br>• Thời Lê sơ ban hành bộ <strong>Quốc triều hình luật (Luật Hồng Đức)</strong> gồm <strong>722 điều</strong> – bộ luật hoàn chỉnh và tiến bộ nhất thời phong kiến, bảo vệ chủ quyền quốc gia, khuyến khích sản xuất và có những điều khoản nhân đạo bảo vệ quyền lợi phụ nữ.<br>• Thời Nguyễn ban hành bộ <strong>Hoàng Việt luật lệ (Luật Gia Long)</strong>."
        ]
      },
      {
        heading: "3. Thành tựu về Kinh tế (Nông nghiệp – Thủ công nghiệp – Thương nghiệp)",
        items: [
          "<strong>Nông nghiệp lúa nước:</strong> Là ngành kinh tế nền tảng với chính sách 'trọng nông', lễ Tịch điền, đặt chức Hà đê sứ, Khuyến nông sứ, đắp đê Quai Vạc (đê Cơ Xá), khai hoang lập đồn điền và du nhập nhiều giống cây trồng mới.",
          "<strong>Thủ công nghiệp:</strong><br>• <em>Thủ công nghiệp nhân dân:</em> Các làng nghề truyền thống nổi tiếng như gốm Bát Tràng, Chu Đậu, dệt La Khê, đúc đồng Ngũ Xã, kim hoàn Định Công, tranh Đông Hồ...<br>• <em>Thủ công nghiệp nhà nước (Cục Bách tác):</em> Chuyên đúc tiền kim loại, chế tạo vũ khí (súng thần cơ, tàu chiến cổ lâu) và đồ ngự dụng cung đình.",
          "<strong>Nội thương & Ngoại thương:</strong> Nhà nước đúc tiền đồng riêng từ thời Đinh (<em>Thái bình hưng bảo</em>) và tiền giấy thời Hồ (<em>Thông bảo hội sao</em>). Mạng lưới chợ làng, chợ huyện và các đô thị thương cảng sầm uất: <strong>Thăng Long – Kẻ Chợ (36 phố phường), Phố Hiến (Hưng Yên), Thanh Hà (Huế), Hội An (Quảng Nam), Gia Định</strong>."
        ]
      },
      {
        heading: "4. Thành tựu về Tư tưởng, Tôn giáo và Giáo dục – Khoa cử",
        items: [
          "<strong>Tư tưởng yêu nước, nhân nghĩa, lấy dân làm gốc:</strong> Là sợi chỉ đỏ xuyên suốt lịch sử Đại Việt (Trần Quốc Tuấn với kế sách <em>'khoan thư sức dân để làm kế sâu rễ bền gốc'</em>; Nguyễn Trãi với tư tưởng <em>'việc nhân nghĩa cốt ở yên dân'</em>).",
          "<strong>Tín ngưỡng & Tôn giáo:</strong> Tín ngưỡng thờ cúng tổ tiên, thờ Hùng Vương, thờ Thành hoàng làng, thờ Mẫu (Tam phủ, Tứ phủ). Phật giáo hưng thịnh thời Lý – Trần (Thiền phái Trúc Lâm Yên Tử do Trần Nhân Tông sáng lập); Nho giáo độc tôn thời Lê sơ và Nguyễn; Đạo giáo hoà nhập dân gian; <strong>Công giáo</strong> du nhập từ năm <strong>1533</strong>.",
          "<strong>Giáo dục & Khoa cử Nho học:</strong> Năm <strong>1070</strong> nhà Lý dựng <strong>Văn Miếu</strong>; năm <strong>1075</strong> mở khoa thi Nho học đầu tiên; năm <strong>1076</strong> lập <strong>Quốc Tử Giám</strong> – trường đại học đầu tiên của quốc gia. Thời Lê sơ (từ năm 1442/1484) định lệ 3 năm mở một khoa thi Hội và <strong>dựng Bia Tiến sĩ tại Văn Miếu – Quốc Tử Giám</strong> để tôn vinh hiền tài."
        ]
      },
      {
        heading: "5. Thành tựu về Chữ viết, Văn học, Khoa học – Kĩ thuật và Nghệ thuật",
        items: [
          "<strong>Chữ viết & Văn học:</strong> Trên cơ sở chữ Hán, người Việt sáng tạo ra <strong>chữ Nôm</strong> (phát triển mạnh từ thế kỉ XIII); từ thế kỉ XVII, các giáo sĩ phương Tây cùng người Việt sáng tạo <strong>chữ Quốc ngữ</strong> theo chữ cái La-tinh. Văn học chữ Hán và chữ Nôm kết tinh ở <em>Nam quốc sơn hà, Hịch tướng sĩ, Bình Ngô đại cáo, Quốc âm thi tập</em> (Nguyễn Trãi), <em>Truyện Kiều</em> (Nguyễn Du), thơ Hồ Xuân Hương, Bà Huyện Thanh Quan...",
          "<strong>Khoa học (Sử học, Địa lí, Toán học, Y học, Quân sự):</strong><br>• <em>Sử học:</em> <strong>Đại Việt sử ký</strong> (Lê Văn Hưu, 1272), <strong>Đại Việt sử ký toàn thư</strong> (Ngô Sĩ Liên và các sử thần nhà Lê), <em>Lịch triều hiến chương loại chí</em> (Phan Huy Chú), <em>Khâm định Việt sử thông giám cương mục</em>.<br>• <em>Địa lí & Bản đồ:</em> <strong>Dư địa chí</strong> (Nguyễn Trãi), <em>Hồng Đức bản đồ</em>, <em>Gia Định thành thông chí</em> (Trịnh Hoài Đức), <em>Đại Nam nhất thống chí</em>, <em>Đại Nam nhất thống toàn đồ</em>.<br>• <em>Toán học:</em> <strong>Đại thành toán pháp</strong> (Lương Thế Vinh), <strong>Lập thành toán pháp</strong> (Vũ Hữu).<br>• <em>Y dược học:</em> Tuệ Tĩnh (<em>Nam dược thần hiệu</em>), Hải Thượng Lãn Ông Lê Hữu Trác (<em>Hải Thượng y tông tâm lĩnh</em>).<br>• <em>Quân sự & Kĩ thuật:</em> <strong>Binh thư yếu lược, Vạn Kiếp tông bí truyền thư</strong> (Trần Quốc Tuấn), <strong>Hổ trướng khu cơ</strong> (Đào Duy Từ); Hồ Nguyên Trừng chế tạo súng thần cơ và thuyền chiến cổ lâu; xây dựng Thành nhà Hồ bằng đá khối.",
          "<strong>Kiến trúc, Điêu khắc & Nghệ thuật biểu diễn:</strong> Hoàng thành Thăng Long, Thành nhà Hồ, Kinh thành và lăng tẩm Huế; chùa Một Cột, tháp Báo Thiên, chùa Phật Tích, chùa Tây Phương, đình làng Bảng/Đình Tây Đằng; đúc Cửu đỉnh (Huế). Nghệ thuật biểu diễn có Chèo, Tuồng, Múa rối nước, Ca trù, Hát văn và <strong>Nhã nhạc cung đình Huế</strong>."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Khai thác Di sản Tư liệu & Vật thể của Văn minh Đại Việt",
      cases: [
        {
          name: "82 Bia Tiến sĩ Văn Miếu – Quốc Tử Giám & Hoàng thành Thăng Long",
          detail: "Hệ thống 82 bia Tiến sĩ tại Văn Miếu – Quốc Tử Giám (Di sản tư liệu thế giới) cùng khu di tích trung tâm Hoàng thành Thăng Long là minh chứng vật chất liên tục suốt gần một thiên niên kỉ về truyền thống hiếu học, trọng dụng nhân tài và năng lực quản trị quốc gia của văn minh Đại Việt."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Ý nghĩa lịch sử:</strong> Văn minh Đại Việt khẳng định sức sống mãnh liệt, bản lĩnh độc lập tự cường và trí tuệ sáng tạo phi thường của dân tộc Việt Nam, tạo dựng nền tảng vững chắc để dân tộc vượt qua mọi thử thách ngoại xâm và hội nhập quốc tế hôm nay."
    ]
  },

  11: {
    num: 11,
    topic: 7,
    title: "Các dân tộc trên đất nước Việt Nam",
    subtitle: "Thành phần dân số, sự phân bố cư trú và phân loại 54 dân tộc Việt Nam theo 5 ngữ hệ, 8 nhóm ngôn ngữ",
    openingQuestion: "Cộng đồng 54 dân tộc anh em trên đất nước Việt Nam có đặc điểm phân bố như thế nào và được phân loại thành những ngữ hệ, nhóm ngôn ngữ nào?",
    diagramCaption: "Sơ đồ phân loại 54 dân tộc Việt Nam theo 5 Ngữ hệ và 8 Nhóm ngôn ngữ & Đặc điểm cư trú đan xen trên lãnh thổ",
    concepts: [
      {
        term: "Dân tộc đa số và Dân tộc thiểu số tại Việt Nam",
        definition: "Việt Nam là quốc gia thống nhất gồm <strong>54 dân tộc</strong> cùng sinh sống:<br>• <strong>Dân tộc đa số:</strong> Dân tộc có số dân chiếm trên 50% tổng dân số cả nước – là dân tộc <strong>Kinh (Việt)</strong> (chiếm khoảng 85,3% dân số).<br>• <strong>Dân tộc thiểu số:</strong> Gồm <strong>53 dân tộc còn lại</strong> có số dân ít hơn dân tộc đa số (từ những dân tộc trên 1 triệu người như Tày, Thái, Mường, Mông, Khmer, Nùng đến những dân tộc dưới 1.000 người như Ơ Đu, Brâu, Rơ Măm, Pu Péo, Si La)."
      },
      {
        term: "Ngữ hệ (Họ ngôn ngữ) & Nhóm ngôn ngữ",
        definition: "<strong>Ngữ hệ</strong> là một tập hợp các ngôn ngữ có cùng nguồn gốc lịch sử cổ xưa và có những nét tương đồng về cấu trúc ngữ pháp, hệ thống từ vựng cơ bản và ngữ âm/thanh điệu. Mỗi ngữ hệ lại được chia thành các <strong>nhóm ngôn ngữ</strong>. 54 dân tộc Việt Nam thuộc <strong>5 ngữ hệ và 8 nhóm ngôn ngữ</strong>."
      }
    ],
    sections: [
      {
        heading: "1. Đặc điểm thành phần dân số và địa bàn phân bố cư trú",
        items: [
          "<strong>Sự chênh lệch về quy mô dân số giữa các dân tộc:</strong> Bên cạnh dân tộc Kinh chiếm trên 85% dân số, 53 dân tộc thiểu số chiếm khoảng 14,7% dân số với quy mô rất khác nhau.",
          "<strong>Phân bố rộng khắp và cư trú đan xen ('xen canh, xen cư'):</strong><br>• Người Kinh tập trung chủ yếu ở vùng đồng bằng, châu thổ các sông lớn, duyên hải và các đô thị.<br>• Các dân tộc thiểu số phân bố chủ yếu ở vùng <strong>trung du, miền núi Bắc Bộ, dải Trường Sơn – Tây Nguyên</strong> (các vị trí chiến lược về kinh tế, sinh thái và quốc phòng – an ninh biên giới), ngoài ra người Chăm, Khmer, Hoa sinh sống nhiều ở đồng bằng duyên hải Nam Trung Bộ và Nam Bộ.<br>• <em>Xu hướng hiện nay:</em> Không có lãnh thổ tộc người biệt lập; các dân tộc cư trú đan xen, hoà hợp trên khắp các tỉnh, thành phố."
        ]
      },
      {
        heading: "2. Phân loại 54 dân tộc Việt Nam theo 5 Ngữ hệ và 8 Nhóm ngôn ngữ",
        items: [
          "<strong>1. Ngữ hệ Nam Á (Austroasiatic) – Gồm 2 nhóm ngôn ngữ:</strong><br>• <em>Nhóm Việt – Mường (4 dân tộc):</em> Kinh (Việt), Mường, Thổ, Chứt.<br>• <em>Nhóm Môn – Khmer (21 dân tộc):</em> Khơ Mú, Xinh Mun, Mảng, Kháng, Ơ Đu, Bru – Vân Kiều, Tà Ôi, Cơ Tu, Gié – Triêng, Co, Xơ Đăng, Ba Na, Mnông, Cơ Ho, Mạ, Xtiêng, Chơ Ro, Khmer, Brâu, Rơ Măm, Hrê.",
          "<strong>2. Ngữ hệ Thái – Ka-đai (Tai – Kadai) – Gồm 2 nhóm ngôn ngữ:</strong><br>• <em>Nhóm Tày – Thái (8 dân tộc):</em> Tày, Thái, Nùng, Giáy, Lào, Lự, Sán Chay, Bố Y.<br>• <em>Nhóm Ka-đai (4 dân tộc):</em> La Chí, La Ha, Cơ Lao, Pu Péo.",
          "<strong>3. Ngữ hệ Mông – Dao (Hmong – Mien) – Gồm 1 nhóm ngôn ngữ:</strong><br>• <em>Nhóm Mông – Dao (3 dân tộc):</em> Mông (H'Mông), Dao, Pà Thẻn.",
          "<strong>4. Ngữ hệ Nam Đảo (Austronesian) – Gồm 1 nhóm ngôn ngữ:</strong><br>• <em>Nhóm Ma-lay-ô – Pô-li-nê-di (5 dân tộc):</em> Chăm, Gia Rai, Ê Đê, Chu Ru, Raglai.",
          "<strong>5. Ngữ hệ Hán – Tạng (Sino – Tibetan) – Gồm 2 nhóm ngôn ngữ:</strong><br>• <em>Nhóm Hán (3 dân tộc):</em> Hoa, Sán Dìu, Ngái.<br>• <em>Nhóm Tạng – Miến (6 dân tộc):</em> Hà Nhì, Phù Lá, La Hủ, Lô Lô, Cống, Si La."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Lưu ý khoa học khi đọc Bảng phân loại Ngữ hệ",
      cases: [
        {
          name: "Quan hệ ngôn ngữ học ≠ Đồng nhất hoàn toàn về phong tục văn hoá",
          detail: "Sơ đồ phân loại theo ngữ hệ phản ánh nguồn gốc lịch sử của ngôn ngữ; không được máy móc cho rằng hai dân tộc cùng một nhóm ngôn ngữ thì có phong tục, tập quán và bản sắc văn hoá giống hệt nhau. Việc tôn trọng sự đa dạng tiếng nói, chữ viết của mỗi dân tộc là cơ sở của quyền bình đẳng dân tộc."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Ý nghĩa thực tiễn:</strong> Hiểu rõ bức tranh 54 dân tộc thuộc 5 ngữ hệ giúp chúng ta trân trọng sự đa dạng văn hoá – ngôn ngữ độc đáo của đại gia đình các dân tộc Việt Nam và có ý thức bảo tồn tiếng nói, chữ viết của các dân tộc thiểu số."
    ]
  },

  12: {
    num: 12,
    topic: 7,
    title: "Khái quát về đời sống vật chất và tinh thần của cộng đồng các dân tộc Việt Nam",
    subtitle: "Sự phong phú, đa dạng và giao thoa trong hoạt động kinh tế, ăn – mặc – ở – đi lại, tín ngưỡng, phong tục và lễ hội",
    openingQuestion: "Điều kiện tự nhiên và lịch sử cư trú đã tạo nên những nét đặc sắc gì trong đời sống vật chất (sản xuất, ăn, mặc, ở, đi lại) và đời sống tinh thần (tín ngưỡng, phong tục, lễ hội) của cộng đồng các dân tộc Việt Nam?",
    diagramCaption: "Sơ đồ tổng quan Đời sống vật chất (Nông nghiệp – Thủ công – Thương nghiệp – Ăn, Mặc, Ở, Đi lại) & Đời sống tinh thần (Tín ngưỡng – Phong tục – Lễ hội) của 54 dân tộc",
    concepts: [
      {
        term: "Tính thống nhất trong đa dạng của văn hoá các dân tộc Việt Nam",
        definition: "Mỗi dân tộc trên đất nước Việt Nam đều sáng tạo nên những sắc thái văn hoá vật chất và tinh thần riêng biệt thích ứng với môi trường tự nhiên (đồng bằng, trung du, núi cao, cao nguyên, ven biển), đồng thời có sự <strong>giao lưu, tiếp biến và chia sẻ những giá trị chung của cộng đồng quốc gia dân tộc</strong>."
      }
    ],
    sections: [
      {
        heading: "1. Đời sống vật chất của cộng đồng các dân tộc Việt Nam",
        items: [
          "<strong>Hoạt động sản xuất nông nghiệp:</strong><br>• <em>Người Kinh:</em> Canh tác lúa nước thâm canh ở đồng bằng châu thổ gắn với hệ thống đê điều, thuỷ lợi, kết hợp trồng cây ăn quả, hoa màu, chăn nuôi gia súc gia cầm và đánh bắt, nuôi trồng thuỷ hải sản trên sông biển.<br>• <em>Các dân tộc thiểu số:</em> Đa dạng hoá theo độ cao địa hình: làm <strong>lúa nước ở thung lũng lòng chảo</strong> (Tày, Thái, Mường) với hệ thống cọn nước/mương phai; tạo tác <strong>ruộng bậc thang kì vĩ trên sườn núi cao</strong> (Mông, Dao, Hà Nhì, La Chí ở Hoàng Su Phì, Mù Cang Chải, Sa Pa); canh tác nương rẫy, trồng cây công nghiệp, dược liệu, chăn nuôi đại gia súc và khai thác lâm sản.",
          "<strong>Thủ công nghiệp & Thương nghiệp truyền thống:</strong><br>• <em>Thủ công nghiệp:</em> Người Kinh nổi tiếng với nghề gốm, dệt lụa, đúc đồng, chạm khắc gỗ/đá, sơn mài, khảm trai. Các dân tộc thiểu số phát triển rực rỡ nghề <strong>dệt thổ cẩm</strong> (với hoa văn hình học, chim muông tinh xảo từ sợi bông, sợi lanh, nhuộm chàm), đan lát mây tre, rèn nông cụ (người Mông), làm gốm bầu Trúc (người Chăm), chạm bạc (người Dao, Mông).<br>• <em>Thương nghiệp:</em> Ở đồng bằng có mạng lưới chợ làng, chợ phố, bến sông; ở miền núi có <strong>chợ phiên vùng cao</strong> – nơi không chỉ trao đổi nông thổ sản mà còn là không gian giao lưu tình cảm, văn hoá cộng đồng.",
          "<strong>Văn hoá Ăn – Mặc – Ở – Đi lại:</strong><br>• <em>Ăn uống:</em> Cơ cấu bữa ăn truyền thống của người Kinh là <strong>Cơm – Rau – Cá (thủy sản)</strong> cùng nghệ thuật chế biến nước chấm và món lên men. Các dân tộc thiểu số có ẩm thực đặc sắc từ lúa nếp (cơm lam, xôi ngũ sắc), ngô (mèn mén), thắng cố, cá nướng, rượu cần.<br>• <em>Trang phục:</em> Người Kinh truyền thống có áo tứ thân, áo bà ba, áo dài; các dân tộc thiểu số có trang phục thổ cẩm đa sắc màu hoặc nhuộm chàm đi kèm trang sức bạc biểu thị bản sắc tộc người.<br>• <em>Nhà ở:</em> Người Kinh chủ yếu ở <strong>nhà trệt</strong> (3 gian 2 chái hoặc 5 gian bằng gạch/gỗ/ngói); đa số các dân tộc thiểu số ở <strong>nhà sàn</strong> (bằng gỗ, tre nứa; tiêu biểu có nhà Rông, nhà Dài ở Tây Nguyên), một số dân tộc vùng biên giới núi cao ở <strong>nhà trình tường bằng đất</strong> (Hà Nhì, Mông, Lô Lô).<br>• <em>Đi lại:</em> Thuyền, ghe ở vùng sông nước đồng bằng; ngựa thồ, gùi trên lưng ở vùng núi cao; xe trâu/xe bò và voi ở Tây Nguyên."
        ]
      },
      {
        heading: "2. Đời sống tinh thần của cộng đồng các dân tộc Việt Nam",
        items: [
          "<strong>Tín ngưỡng và Tôn giáo:</strong><br>• Người Kinh duy trì bền vững tục <strong>thờ cúng tổ tiên, thờ Quốc tổ Hùng Vương, thờ Thành hoàng làng, thờ Mẫu</strong> và các anh hùng dân tộc.<br>• Các dân tộc thiểu số lưu giữ tín ngưỡng <strong>vạn vật hữu linh (thờ thần Rừng, thần Nước, thần Đá, thần Lúa), đa thần giáo và tín ngưỡng tô-tem</strong>.<br>• Các tôn giáo lớn (Phật giáo, Công giáo, Tin Lành, Hồi giáo, Bà La Môn/Bà-ni của người Chăm, Phật giáo Nam tông của người Khmer) cùng tồn tại hoà hợp.",
          "<strong>Phong tục, tập quán:</strong> Gắn với 3 chu kì lớn: (1) <em>Chu kì vòng đời người</em> (lễ đầy tháng, lễ trưởng thành/cấp sắc của người Dao, cưới hỏi, mừng thọ, tang ma); (2) <em>Chu kì canh tác nông nghiệp</em> (lễ tịch điền, lễ xuống đồng, lễ cầu mưa, lễ mừng cơm mới); (3) <em>Chu kì thời gian năm mới</em> (Tết Nguyên đán, Tết Chôl Chnăm Thmây của người Khmer, Tết Ka-tê của người Chăm).",
          "<strong>Lễ hội và Văn nghệ dân gian:</strong> Lễ hội Lồng tồng (Tày, Nùng), lễ hội Gầu Tào (Mông), lễ hội Đua voi, Cồng chiêng (Tây Nguyên), lễ hội Đua ghe Ngo (Khmer), lễ hội Đền Hùng, hội Gióng... Kho tàng sử thi (<em>Đăm Săn, Đẻ đất đẻ nước</em>), dân ca (Quan họ, Xoan, Ví Giặm, khắp Thái, lượn Tày, hát Then) và nhạc cụ dân tộc (đàn bầu, đàn tính, khèn Mông, cồng chiêng, đàn T'rưng)."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Nguyên tắc tiếp cận văn hoá các dân tộc Việt Nam",
      cases: [
        {
          name: "Tránh khuôn mẫu hoá và định kiến văn hoá",
          detail: "Mỗi tập quán (như ở nhà sàn, nhà trình tường, trang phục thổ cẩm hay lễ hội nông nghiệp) đều là kết quả thích ứng thông minh của cư dân với môi trường sinh thái và lịch sử. Trong bối cảnh đô thị hoá hiện nay, đời sống của mọi dân tộc đều đang biến đổi nhanh chóng, vì vậy không nên dùng cái nhìn định kiến hay áp đặt khuôn mẫu cứng nhắc cho bất kì cộng đồng nào."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Phát triển du lịch cộng đồng (Homestay / Eco-cultural Tourism):</strong> Việc bảo tồn kiến trúc nhà sàn, nhà trình tường, nghề dệt thổ cẩm, ẩm thực và lễ hội truyền thống đang giúp nhiều bản làng dân tộc thiểu số phát triển du lịch bền vững, nâng cao thu nhập ngay trên quê hương mình."
    ]
  },

  13: {
    num: 13,
    topic: 7,
    title: "Khối đại đoàn kết dân tộc trong lịch sử Việt Nam",
    subtitle: "Quá trình hình thành, vai trò quyết định của khối đại đoàn kết và chính sách dân tộc của Đảng – Nhà nước hiện nay",
    openingQuestion: "Khối đại đoàn kết giữa các dân tộc trên đất nước Việt Nam được hình thành từ những nhân tố lịch sử nào và giữ vai trò gì trong sự nghiệp dựng nước, giữ nước xưa và nay?",
    diagramCaption: "Sơ đồ Quá trình hình thành – Vai trò lịch sử của Khối đại đoàn kết dân tộc & 4 trụ cột Chính sách dân tộc của Đảng và Nhà nước Việt Nam hiện nay",
    concepts: [
      {
        term: "Khối đại đoàn kết dân tộc Việt Nam",
        definition: "Sự gắn kết bền chặt, đồng tâm hiệp lực giữa 54 dân tộc anh em cùng sinh sống trên lãnh thổ Việt Nam, được hun đúc qua hàng nghìn năm cùng lao động cải tạo tự nhiên, giao lưu kinh tế – văn hoá và sát cánh bên nhau chống giặc ngoại xâm bảo vệ Tổ quốc."
      },
      {
        term: "Nguyên tắc cốt lõi trong Chính sách dân tộc hiện nay",
        definition: "Đảng và Nhà nước Việt Nam thực hiện nhất quán nguyên tắc Hiến định: <strong>“Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển”</strong>; nghiêm cấm mọi hành vi kì thị, chia rẽ dân tộc."
      }
    ],
    sections: [
      {
        heading: "1. Quá trình hình thành và phát triển khối đại đoàn kết dân tộc trong lịch sử",
        items: [
          "<strong>Cội nguồn hình thành:</strong> Xuất phát từ yêu cầu khách quan của việc liên kết trị thuỷ, làm thuỷ lợi phục vụ nông nghiệp, trao đổi hàng hoá giữa miền xuôi với miền ngược và đặc biệt là yêu cầu sống còn phải <strong>hợp sức chống lại các thế lực ngoại xâm lớn mạnh hơn gấp nhiều lần</strong>.",
          "<strong>Thời kì Bắc thuộc và феодал độc lập:</strong><br>• Ngay từ cuộc khởi nghĩa <strong>Hai Bà Trưng (năm 40)</strong>, sử cũ ghi nhận nhân dân và các thủ lĩnh người Man, người Lý khắp 65 thành ở Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố đều nhất tề hưởng ứng.<br>• Các triều đại Đinh, Tiền Lê, Lý, Trần, Lê sơ thực hiện chính sách <strong>'nhu viễn' (mềm dẻo với miền xa)</strong>: gả công chúa cho các tù trưởng miền núi, phong chức tước cho thủ lĩnh dân tộc thiểu số cùng trấn giữ biên cương, đồng thời kiên quyết dẹp các thế lực cát cứ để bảo vệ sự thống nhất quốc gia.<br>• Trong kháng chiến chống Tống (1075–1077 có sự đóng góp to lớn của Tông Đản, Thân Cảnh Phúc cùng đồng bào Tày, Nùng), ba lần kháng chiến chống Mông – Nguyên (1258, 1285, 1287–1288), khởi nghĩa Lam Sơn (1418–1427 có căn cứ địa tại miền núi Thanh Hoá, hào trưởng Xa Khả Tham...) và phong trào Tây Sơn đều ngời sáng sức mạnh đoàn kết miền xuôi – miền ngược.",
          "<strong>Từ khi Đảng Cộng sản Việt Nam ra đời (1930) đến nay:</strong> Khối đại đoàn kết toàn dân tộc được nâng lên tầm cao mới trong các hình thức Mặt trận Dân tộc Thống nhất (Hội Phản đế đồng minh, Mặt trận Việt Minh, Mặt trận Liên Việt, Mặt trận Tổ quốc Việt Nam), tạo nên thắng lợi của Cách mạng tháng Tám 1945, kháng chiến chống Pháp (chiến khu Việt Bắc, chiến thắng Điện Biên Phủ 1954), kháng chiến chống Mỹ (đường Trường Sơn, Tây Nguyên) và công cuộc Đổi mới."
        ]
      },
      {
        heading: "2. Vai trò và tầm quan trọng của khối đại đoàn kết dân tộc",
        items: [
          "<strong>Trong lịch sử dựng nước và giữ nước:</strong> Là nhân tố quyết định hàng đầu tạo nên sức mạnh tổng hợp để chiến thắng mọi kẻ thù xâm lược, bảo vệ vững chắc độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ quốc gia.",
          "<strong>Trong sự nghiệp xây dựng và bảo vệ Tổ quốc hiện nay:</strong> Là nền tảng cho sự ổn định chính trị – xã hội; là động lực phát triển kinh tế – văn hoá bền vững, giúp đất nước vượt qua thiên tai, dịch bệnh và giữ vững thế trận quốc phòng toàn dân, an ninh nhân dân nơi biên giới, hải đảo."
        ]
      },
      {
        heading: "3. Chính sách dân tộc của Đảng và Nhà nước Việt Nam hiện nay (4 lĩnh vực toàn diện)",
        items: [
          "<strong>Về Kinh tế:</strong> Triển khai các Chương trình mục tiêu quốc gia phát triển kinh tế – xã hội vùng đồng bào dân tộc thiểu số và miền núi; đầu tư hạ tầng giao thông, điện, nước, chuyển đổi cơ cấu cây trồng vật nuôi, phát huy tiềm năng địa phương nhằm <strong>rút ngắn khoảng cách phát triển giữa miền núi và miền xuôi</strong>.",
          "<strong>Về Văn hoá:</strong> Bảo tồn và phát huy bản sắc văn hoá tốt đẹp, tiếng nói, chữ viết, lễ hội và di sản của 54 dân tộc anh em trong nền văn hoá Việt Nam thống nhất trong đa dạng.",
          "<strong>Về Xã hội (Giáo dục, Y tế, An sinh):</strong> Phát triển hệ thống trường phổ thông dân tộc nội trú/bán trú, cử tuyển, đào tạo cán bộ người dân tộc thiểu số; mở rộng mạng lưới y tế cơ sở, xoá đói giảm nghèo bền vững và nâng cao chất lượng sống.",
          "<strong>Về Quốc phòng – An ninh:</strong> Củng cố thế trận lòng dân tại các địa bàn chiến lược vùng cao, biên giới; xây dựng đường biên giới hoà bình, hữu nghị, hợp tác và kiên quyết đấu tranh làm thất bại mọi âm mưu lợi dụng vấn đề dân tộc, tôn giáo để chia rẽ khối đại đoàn kết."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Tư tưởng Hồ Chí Minh về Đại đoàn kết các dân tộc Việt Nam",
      cases: [
        {
          name: "Thư gửi Đại hội các dân tộc thiểu số miền Nam tại Pleiku (19/4/1946)",
          detail: "Chủ tịch Hồ Chí Minh khẳng định: <em>“Đồng bào Kinh hay Thổ, Mường hay Mán, Gia Rai hay Ê Đê, Xê Đăng hay Ba Na và các dân tộc thiểu số khác, đều là con cháu Việt Nam, đều là anh em ruột thịt... Sông có thể cạn, núi có thể mòn, song lòng đoàn kết của chúng ta không bao giờ giảm bớt”</em>."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Trách nhiệm của học sinh:</strong> Tôn trọng sự bình đẳng và bản sắc văn hoá của mọi dân tộc; kiên quyết phản đối các hành vi kì thị vùng miền/tộc người và tích cực tham gia các hoạt động tình nguyện vì cộng đồng vùng sâu, vùng xa."
    ]
  }
};

// BẢNG HỆ THỐNG MỐC VÀ Ý CHÍNH TOÀN MÔN LỊCH SỬ 10
const timelineTable = [
  {
    milestone: "Đầu thiên niên kỉ I TCN – đầu Công nguyên",
    lessonRef: "Bài 8, Bài 9",
    event: "Hình thành và phát triển nền văn minh Văn Lang – Âu Lạc (văn minh sông Hồng / văn hoá Đông Sơn) ở Bắc Bộ và Bắc Trung Bộ; đồng thời xuất hiện những nhà nước sơ khai đầu tiên ở Đông Nam Á."
  },
  {
    milestone: "Năm 776 TCN",
    lessonRef: "Bài 5",
    event: "Đại hội thể thao Olympic cổ đại đầu tiên được tổ chức tại Ô-lim-pi-a (Hy Lạp), định kì 4 năm một lần, biểu trưng cho tinh thần hoà bình và vẻ đẹp con người."
  },
  {
    milestone: "Thế kỉ I – thế kỉ VII",
    lessonRef: "Bài 9",
    event: "Hình thành và phát triển vương quốc Phù Nam gắn với nền văn hoá Óc Eo và cảng thị thương mại quốc tế ở vùng Nam Bộ."
  },
  {
    milestone: "Năm 192",
    lessonRef: "Bài 9",
    event: "Nhân dân Tượng Lâm dưới sự lãnh đạo của Khu Liên nổi dậy giành độc lập, lập ra nước Lâm Ấp (về sau phát triển thành vương quốc Chăm-pa ở duyên hải miền Trung)."
  },
  {
    milestone: "Thế kỉ VII – cuối thế kỉ XV",
    lessonRef: "Bài 8",
    event: "Thời kì phát triển rực rỡ, thịnh đạt của các quốc gia phong kiến và văn minh Đông Nam Á (Đại Việt, Ăng-co, Pa-gan, Sri Vi-giay-a, Ma-gia-pa-hít...)."
  },
  {
    milestone: "Năm 1070 / 1075 / 1076",
    lessonRef: "Bài 10",
    event: "Nhà Lý xây dựng Văn Miếu (1070), mở khoa thi Nho học đầu tiên (1075) và thành lập Quốc Tử Giám (1076) – mở đầu nền giáo dục đại học và khoa cử Đại Việt."
  },
  {
    milestone: "Năm 1258, 1285, 1287–1288",
    lessonRef: "Bài 10, Bài 13",
    event: "Ba lần kháng chiến chống quân xâm lược Mông – Nguyên thắng lợi vẻ vang dưới vương triều Trần nhờ sức mạnh đại đoàn kết toàn dân ('Vua tôi đồng tâm, anh em hoà mục, cả nước góp sức')."
  },
  {
    milestone: "Năm 1418 – 1427 & Năm 1428",
    lessonRef: "Bài 10, Bài 13",
    event: "Khởi nghĩa Lam Sơn chống quân Minh toàn thắng (1418–1427); Lê Lợi lên ngôi lập ra triều Lê sơ (1428), mở ra giai đoạn phát triển cực thịnh của văn minh Đại Việt."
  },
  {
    milestone: "Năm 1521 & Năm 1533",
    lessonRef: "Bài 1, Bài 8, Bài 10",
    event: "Trận Mác-tan tại Philippines giữa La-pu-la-pu và đoàn thám hiểm Ma-gien-lăng (1521); giáo sĩ phương Tây bắt đầu truyền Công giáo vào vùng ven biển Nam Định nước ta theo sử cũ (1533)."
  },
  {
    milestone: "Nửa sau thế kỉ XVIII – giữa thế kỉ XIX",
    lessonRef: "Bài 6",
    event: "Cách mạng công nghiệp lần thứ nhất khởi đầu ở Anh (máy kéo sợi Jenny 1764, máy hơi nước James Watt 1784, máy dệt 1785, tàu thuỷ 1807, đầu máy xe lửa 1804/1814)."
  },
  {
    milestone: "Nửa sau thế kỉ XIX – năm 1914",
    lessonRef: "Bài 6",
    event: "Cách mạng công nghiệp lần thứ hai gắn với lò luyện thép Bessemer (1856), điện thoại Bell (1876), đèn điện Edison (1879), ô tô Karl Benz (1886), vô tuyến điện Marconi (1897) và máy bay anh em nhà Wright (1903)."
  },
  {
    milestone: "Năm 1930",
    lessonRef: "Bài 13",
    event: "Đảng Cộng sản Việt Nam thành lập, củng cố và phát huy khối đại đoàn kết toàn dân tộc trong Mặt trận Dân tộc Thống nhất giành độc lập và thống nhất Tổ quốc."
  },
  {
    milestone: "Năm 1946, 1957, 1969, 1990 & 2017",
    lessonRef: "Bài 7",
    event: "Các cột mốc Cách mạng công nghiệp lần thứ ba và thứ tư: Máy tính ENIAC (1946), vệ tinh Sputnik 1 (1957), con người lên Mặt Trăng (1969), World Wide Web (1990) và Robot AI Sophia được cấp quyền công dân (2017)."
  }
];

// KĨ NĂNG LỊCH SỬ DÙNG TRONG TOÀN SÁCH & BẢNG 5 NGỮ HỆ
const historicalSkills = {
  coreSkills: [
    {
      num: 1,
      title: "Xác định câu hỏi nghiên cứu lịch sử (5W1H)",
      desc: "Trước mỗi bài học hoặc tư liệu, luôn xác định rõ: Sự kiện/quá trình lịch sử nào (What)? Diễn ra ở đâu (Where)? Vào thời gian nào (When)? Gắn với chủ thể/nhân vật nào (Who)? Nguyên nhân và diễn biến ra sao (Why & How)?"
    },
    {
      num: 2,
      title: "Kĩ năng đọc và phê phán nguồn sử liệu",
      desc: "Kiểm tra ai là tác giả của sử liệu, tạo ra vào thời điểm nào, nhằm mục đích gì, thuộc loại hình tư liệu nào (hiện vật, chữ viết, truyền khẩu, hình ảnh); chỉ ra thông tin trực tiếp từ nguồn và những điều không thể suy đoán vượt quá nguồn."
    },
    {
      num: 3,
      title: "Đối chiếu đa nguồn & Phân biệt Sự kiện – Diễn giải",
      desc: "So sánh nhiều nguồn sử liệu khác nhau về cùng một sự kiện để kiểm chứng độ tin cậy; phân biệt rạch ròi giữa hiện thực lịch sử khách quan với cách tưởng niệm, kể lại hoặc quan điểm đánh giá của người viết."
    },
    {
      num: 4,
      title: "Tư duy trục Thời gian (Lịch đại) & Không gian (Đồng đại)",
      desc: "Sắp xếp các sự kiện theo trục niên biểu trước – sau và giải thích chuỗi logic chặt chẽ: Nguyên nhân → Diễn biến chính → Kết quả → Ý nghĩa/Tác động trước mắt và lâu dài."
    },
    {
      num: 5,
      title: "Kĩ năng khai thác Lược đồ và Hình ảnh hiện vật",
      desc: "Khi quan sát lược đồ/hình ảnh: đọc kĩ tên hình, bảng chú giải kí hiệu, mốc thời gian, địa danh để dùng hình ảnh làm bằng chứng lịch sử trực tiếp chứ không chỉ xem như hình minh hoạ trang trí."
    },
    {
      num: 6,
      title: "Phương pháp phân tích một nền Văn minh",
      desc: "Không học vẹt danh sách công trình rời rạc; luôn nối kết theo trục: Điều kiện tự nhiên/xã hội → Thành tựu (Chữ viết, Tư tưởng/Tôn giáo, Khoa học/Kĩ thuật, Kiến trúc/Nghệ thuật) → Đáp ứng nhu cầu thực tiễn gì → Giá trị và ảnh hưởng."
    }
  ],
  languageFamiliesTable: [
    {
      family: "1. Ngữ hệ Nam Á",
      group: "Nhóm Việt – Mường (4 dân tộc)",
      examples: "Kinh (Việt), Mường, Thổ, Chứt"
    },
    {
      family: "1. Ngữ hệ Nam Á",
      group: "Nhóm Môn – Khmer (21 dân tộc)",
      examples: "Khmer, Ba Na, Xơ Đăng, Cơ Ho, Hrê, Mnông, Cơ Tu, Bru – Vân Kiều, Tà Ôi, Gié – Triêng, Khơ Mú, Xtiêng, Mạ, Co, Chơ Ro, Xinh Mun, Kháng, Mảng, Ơ Đu, Brâu, Rơ Măm"
    },
    {
      family: "2. Ngữ hệ Thái – Ka-đai",
      group: "Nhóm Tày – Thái (8 dân tộc)",
      examples: "Tày, Thái, Nùng, Sán Chay, Giáy, Lào, Lự, Bố Y"
    },
    {
      family: "2. Ngữ hệ Thái – Ka-đai",
      group: "Nhóm Ka-đai (4 dân tộc)",
      examples: "La Chí, La Ha, Cơ Lao, Pu Péo"
    },
    {
      family: "3. Ngữ hệ Mông – Dao",
      group: "Nhóm Mông – Dao (3 dân tộc)",
      examples: "Mông (H'Mông), Dao, Pà Thẻn"
    },
    {
      family: "4. Ngữ hệ Nam Đảo",
      group: "Nhóm Ma-lay-ô – Pô-li-nê-di (5 dân tộc)",
      examples: "Gia Rai, Ê Đê, Chăm, Raglai, Chu Ru"
    },
    {
      family: "5. Ngữ hệ Hán – Tạng",
      group: "Nhóm Hán (3 dân tộc)",
      examples: "Hoa, Sán Dìu, Ngái"
    },
    {
      family: "5. Ngữ hệ Hán – Tạng",
      group: "Nhóm Tạng – Miến (6 dân tộc)",
      examples: "Hà Nhì, Phù Lá, La Hủ, Lô Lô, Cống, Si La"
    }
  ]
};

const allLessons = { ...lessonsP1, ...lessonsP2 };

const fullData = {
  topics,
  lessons: allLessons,
  timelineTable,
  historicalSkills
};

const outPath = path.join(__dirname, 'lichsu10_data.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(fullData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/lichsu10_data.js! Total lessons:', Object.keys(allLessons).length);
