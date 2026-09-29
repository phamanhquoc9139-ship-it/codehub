const fs = require('fs');

const quizzesFile = 'scripts/quizzes.js';
let content = fs.readFileSync(quizzesFile, 'utf8');

const chemQuizzes = `
    // -----------------------------------------
    // HÓA HỌC (GDPT 2018)
    // -----------------------------------------
    "hoahoc_10": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Hóa Học 10",
        questions: [
            {
                id: 1,
                question: "Hạt nhân nguyên tử được cấu tạo bởi các hạt nào?",
                options: ["Proton và Electron", "Proton và Neutron", "Neutron và Electron", "Proton, Neutron và Electron"],
                correctAnswer: 1,
                explanation: "Hạt nhân nguyên tử chứa hạt proton (mang điện dương) và hạt neutron (không mang điện)."
            },
            {
                id: 2,
                question: "Liên kết ion là liên kết được hình thành bởi:",
                options: ["Lực hút tĩnh điện giữa các ion mang điện tích trái dấu", "Sự dùng chung các electron", "Sự cho nhận electron", "Tương tác van der Waals"],
                correctAnswer: 0,
                explanation: "Liên kết ion là liên kết hóa học được hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu."
            }
        ]
    },
    "hoahoc_11": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Hóa Học 11",
        questions: [
            {
                id: 1,
                question: "Cân bằng hóa học là trạng thái của phản ứng thuận nghịch khi:",
                options: ["Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch", "Phản ứng dừng lại", "Nồng độ các chất tham gia bằng nồng độ các chất sản phẩm", "Tốc độ phản ứng thuận lớn hơn tốc độ phản ứng nghịch"],
                correctAnswer: 0,
                explanation: "Cân bằng hóa học là trạng thái mà tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (v_thuận = v_nghịch)."
            },
            {
                id: 2,
                question: "Đặc điểm chung của các hợp chất hữu cơ là:",
                options: ["Thường khó bay hơi, bền với nhiệt", "Liên kết chủ yếu là liên kết ion", "Thành phần nhất thiết phải có nguyên tố carbon", "Dễ tan trong nước"],
                correctAnswer: 2,
                explanation: "Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO2, muối carbonate, cyanide, carbide...)."
            }
        ]
    },
    "hoahoc_12": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Hóa Học 12",
        questions: [
            {
                id: 1,
                question: "Chất nào sau đây thuộc loại ester?",
                options: ["CH3COOH", "CH3CHO", "CH3COOC2H5", "C2H5OH"],
                correctAnswer: 2,
                explanation: "CH3COOC2H5 là este etyl axetat. Cấu trúc chung của ester là RCOOR'."
            },
            {
                id: 2,
                question: "Kim loại nào sau đây có tính dẻo nhất?",
                options: ["Cu", "Al", "Au", "Ag"],
                correctAnswer: 2,
                explanation: "Vàng (Au) là kim loại có tính dẻo nhất."
            }
        ]
    },
`;

content = content.replace('const quizzesData = {', 'const quizzesData = {\n' + chemQuizzes);
fs.writeFileSync(quizzesFile, content, 'utf8');
console.log('Successfully added chemistry quizzes');
