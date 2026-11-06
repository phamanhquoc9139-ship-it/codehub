// chebienthucpham9_terms.js - Thuật ngữ và Quy tắc vàng Chế biến thực phẩm 9

const chebienTerms = [
  {
    term: "Protein chuẩn (Complete / Reference Protein)",
    badge: "Dinh dưỡng học",
    icon: "fa-egg",
    color: "amber",
    desc: "Protein có thành phần và tỉ lệ các amino acid thiết yếu cân đối, phù hợp nhất với nhu cầu sinh tổng hợp của cơ thể người. Protein trong trứng và sữa được xem là protein chuẩn mẫu."
  },
  {
    term: "Amino acid thiết yếu (Essential Amino Acids)",
    badge: "Dinh dưỡng sinh học",
    icon: "fa-dna",
    color: "rose",
    desc: "Các amino acid mà cơ thể người không thể tự tổng hợp được hoặc tổng hợp không đủ, bắt buộc phải lấy từ thức ăn hằng ngày (có 9 amino acid thiết yếu đối với người trưởng thành)."
  },
  {
    term: "Năng lượng chuyển hoá (Metabolizable Energy)",
    badge: "Sinh học năng lượng",
    icon: "fa-fire",
    color: "orange",
    desc: "1 g Protein cung cấp khoảng 4 kcal; 1 g Carbohydrate cung cấp khoảng 4 kcal; 1 g Lipid cung cấp đậm đặc tới 9 kcal. Đây là 3 nhóm chất sinh năng lượng chính duy trì sự sống."
  },
  {
    term: "Thanh trùng & Tiệt trùng (Pasteurization & Sterilization)",
    badge: "Bảo quản thực phẩm",
    icon: "fa-temperature-high",
    color: "red",
    desc: "Thanh trùng là gia nhiệt dưới 100 °C trong thời gian đủ lâu để diệt mầm bệnh mà giữ vị tươi. Tiệt trùng là đun ở 100–130 °C áp suất cao trong thời gian ngắn để tiêu diệt toàn bộ vi sinh vật và bào tử."
  },
  {
    term: "Lên men Lactic (Lactic Acid Fermentation)",
    badge: "Chế biến không nhiệt",
    icon: "fa-jar",
    color: "emerald",
    desc: "Quá trình vi khuẩn lactic chuyển hoá đường trong rau củ thành acid lactic trong môi trường yếm khí nhẹ, tạo vị chua dịu đặc trưng và ức chế các vi khuẩn gây thối rữa (muối dưa cải, muối cà)."
  },
  {
    term: "Nhiệt độ tâm thực phẩm an toàn (Safe Core Temperature)",
    badge: "An toàn vệ sinh",
    icon: "fa-temperature-arrow-up",
    color: "blue",
    desc: "Khi nấu chín thức ăn, nhiệt độ tại tâm (phần trong cùng dày nhất) của thực phẩm phải đạt tối thiểu 70 °C để đảm bảo tiêu diệt hoàn toàn các loại vi khuẩn và kí sinh trùng gây ngộ độc."
  },
  {
    term: "Vùng nguy hiểm nhiệt độ (Temperature Danger Zone)",
    badge: "An toàn thực phẩm",
    icon: "fa-triangle-exclamation",
    color: "amber",
    desc: "Khoảng nhiệt độ từ 10 °C đến 60 °C là vùng vi khuẩn phát triển và nhân đôi nhanh nhất. Thức ăn chín cần giữ nóng trên 60 °C hoặc làm lạnh dưới 10 °C, không để ở nhiệt độ phòng quá 2 giờ."
  },
  {
    term: "Nhiễm khuẩn chéo (Cross-contamination)",
    badge: "An toàn nhà bếp",
    icon: "fa-arrows-split-up-and-left",
    color: "purple",
    desc: "Sự lây truyền vi sinh vật gây hại từ thực phẩm sống (thịt, cá sống) sang thực phẩm chín hoặc thức ăn ăn liền thông qua dao, thớt, tay người chế biến hoặc bề mặt bếp chưa được khử trùng."
  },
  {
    term: "Tam giác hoạt động nhà bếp (Kitchen Work Triangle)",
    badge: "Tổ chức không gian bếp",
    icon: "fa-kitchen-set",
    color: "teal",
    desc: "Nguyên tắc bố trí 3 khu vực trọng tâm: Tủ lạnh (lưu trữ) — Chậu rửa (sơ chế) — Bếp nấu (chế biến) thành hình tam giác thuận tiện, tạo luồng di chuyển một chiều, giảm va chạm và ngăn ngừa ô nhiễm."
  },
  {
    term: "Độc tố tự nhiên trong thực phẩm (Natural Toxins)",
    badge: "Độc chất học thực phẩm",
    icon: "fa-skull-crossbones",
    color: "stone",
    desc: "Các chất độc có sẵn trong một số sinh vật tự nhiên như Tetrodotoxin ở cá nóc, Solanine ở mầm và vỏ xanh khoai tây, độc tố nấm tán trắng... Đòi hỏi người chế biến phải nhận diện và loại bỏ triệt để."
  },
  {
    term: "Dinh dưỡng viên (Dietitian / Nutritionist)",
    badge: "Nghề nghiệp liên quan",
    icon: "fa-user-doctor",
    color: "cyan",
    desc: "Chuyên gia đánh giá tình trạng dinh dưỡng, xây dựng thực đơn khoa học, tư vấn chế độ ăn uống lành mạnh và giám sát an toàn vệ sinh thực phẩm tại bệnh viện, trường học, viện dinh dưỡng."
  },
  {
    term: "Kĩ sư Công nghệ thực phẩm (Food Technologist)",
    badge: "Nghề nghiệp liên quan",
    icon: "fa-flask-vial",
    color: "indigo",
    desc: "Kĩ sư nghiên cứu, phát triển công thức chế biến mới, vận hành dây chuyền sản xuất công nghiệp, kiểm soát chất lượng (QA/QC), kéo dài hạn sử dụng và đảm bảo tiêu chuẩn an toàn thực phẩm."
  }
];

module.exports = chebienTerms;
