const fs = require('fs');

const chemData = {
    '10': [
        {'id': 'chu-de-1', 'title': 'Chủ đề 1: Cấu tạo nguyên tử', 'lessons': [
            'Bài 1: Thành phần của nguyên tử',
            'Bài 2: Nguyên tố hóa học',
            'Bài 3: Cấu trúc lớp vỏ electron nguyên tử'
        ]},
        {'id': 'chu-de-2', 'title': 'Chủ đề 2: Bảng tuần hoàn', 'lessons': [
            'Bài 4: Cấu tạo bảng tuần hoàn các nguyên tố hóa học',
            'Bài 5: Xu hướng biến đổi một số tính chất',
            'Bài 6: Định luật tuần hoàn, ý nghĩa của bảng tuần hoàn'
        ]},
        {'id': 'chu-de-3', 'title': 'Chủ đề 3: Liên kết hóa học', 'lessons': [
            'Bài 7: Quy tắc octet',
            'Bài 8: Liên kết ion',
            'Bài 9: Liên kết cộng hóa trị',
            'Bài 10: Liên kết hydrogen và tương tác van der Waals'
        ]},
        {'id': 'chu-de-4', 'title': 'Chủ đề 4: Phản ứng oxi hóa - khử', 'lessons': [
            'Bài 11: Phản ứng oxi hóa - khử',
            'Bài tập chủ đề 4'
        ]},
        {'id': 'chu-de-5', 'title': 'Chủ đề 5: Năng lượng hóa học', 'lessons': [
            'Bài 12: Enthalpy tạo thành và biến thiên enthalpy',
            'Bài 13: Tính biến thiên enthalpy của phản ứng'
        ]},
        {'id': 'chu-de-6', 'title': 'Chủ đề 6: Tốc độ phản ứng hóa học', 'lessons': [
            'Bài 14: Khái niệm tốc độ phản ứng hóa học',
            'Bài 15: Các yếu tố ảnh hưởng đến tốc độ phản ứng'
        ]},
        {'id': 'chu-de-7', 'title': 'Chủ đề 7: Nguyên tố nhóm VIIA', 'lessons': [
            'Bài 16: Đặc điểm và tính chất của các halogen',
            'Bài 17: Hydrogen halide và một số phản ứng'
        ]}
    ],
    '11': [
        {'id': 'chu-de-1', 'title': 'Chủ đề 1: Cân bằng hóa học', 'lessons': [
            'Bài 1: Khái niệm về cân bằng hóa học',
            'Bài 2: Cân bằng trong dung dịch nước'
        ]},
        {'id': 'chu-de-2', 'title': 'Chủ đề 2: Nitrogen và Sulfur', 'lessons': [
            'Bài 3: Đơn chất nitrogen',
            'Bài 4: Ammonia và một số hợp chất ammonium',
            'Bài 5: Một số hợp chất với oxygen của nitrogen',
            'Bài 6: Sulfur và sulfur dioxide',
            'Bài 7: Sulfuric acid và muối sulfate'
        ]},
        {'id': 'chu-de-3', 'title': 'Chủ đề 3: Đại cương hóa học hữu cơ', 'lessons': [
            'Bài 8: Hợp chất hữu cơ và hóa học hữu cơ',
            'Bài 9: Phương pháp tách biệt và tinh chế',
            'Bài 10: Công thức phân tử hợp chất hữu cơ',
            'Bài 11: Cấu tạo hóa học hợp chất hữu cơ'
        ]},
        {'id': 'chu-de-4', 'title': 'Chủ đề 4: Hydrocarbon', 'lessons': [
            'Bài 12: Alkane',
            'Bài 13: Hydrocarbon không no',
            'Bài 14: Arene (Hydrocarbon thơm)'
        ]},
        {'id': 'chu-de-5', 'title': 'Chủ đề 5: Dẫn xuất Halogen - Alcohol', 'lessons': [
            'Bài 15: Dẫn xuất halogen',
            'Bài 16: Alcohol',
            'Bài 17: Phenol'
        ]},
        {'id': 'chu-de-6', 'title': 'Chủ đề 6: Hợp chất Carbonyl', 'lessons': [
            'Bài 18: Hợp chất carbonyl (Aldehyde - Ketone)',
            'Bài 19: Carboxylic acid'
        ]}
    ],
    '12': [
        {'id': 'chu-de-1', 'title': 'Chủ đề 1: Ester - Lipid', 'lessons': [
            'Bài 1: Ester - Lipid',
            'Bài 2: Xà phòng và chất giặt rửa'
        ]},
        {'id': 'chu-de-2', 'title': 'Chủ đề 2: Carbohydrate', 'lessons': [
            'Bài 3: Glucose và Fructose',
            'Bài 4: Saccharose',
            'Bài 5: Tinh bột và Cellulose'
        ]},
        {'id': 'chu-de-3', 'title': 'Chủ đề 3: Hợp chất chứa Nitrogen', 'lessons': [
            'Bài 6: Amine',
            'Bài 7: Amino acid và Peptide',
            'Bài 8: Protein và Enzyme'
        ]},
        {'id': 'chu-de-4', 'title': 'Chủ đề 4: Polymer', 'lessons': [
            'Bài 9: Đại cương về polymer',
            'Bài 10: Vật liệu polymer'
        ]},
        {'id': 'chu-de-5', 'title': 'Chủ đề 5: Pin điện và Điện phân', 'lessons': [
            'Bài 11: Pin điện hóa',
            'Bài 12: Điện phân'
        ]},
        {'id': 'chu-de-6', 'title': 'Chủ đề 6: Đại cương kim loại', 'lessons': [
            'Bài 13: Cấu tạo và tính chất vật lí',
            'Bài 14: Tính chất hóa học của kim loại',
            'Bài 15: Dãy điện hóa của kim loại',
            'Bài 16: Sự ăn mòn kim loại'
        ]},
        {'id': 'chu-de-7', 'title': 'Chủ đề 7: Các nhóm kim loại', 'lessons': [
            'Bài 17: Kim loại kiềm và kiềm thổ',
            'Bài 18: Nhôm (Aluminum)',
            'Bài 19: Sắt (Iron) và hợp chất',
            'Bài 20: Đồng (Copper) và hợp chất'
        ]}
    ]
};

for (const grade in chemData) {
    let fileStr = fs.readFileSync('courses/hoahoc_' + grade + '.html', 'utf8');
    
    // add toggle function if not exists
    if (!fileStr.includes('toggleLesson')) {
        fileStr = fileStr.replace('</script>', `
    function toggleLesson(id) {
        const content = document.getElementById('content-' + id);
        const icon = document.getElementById('icon-' + id);
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            content.classList.add('hidden');
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    }
  </script>`);
    }

    let lessonCounter = 0;
    chemData[grade].forEach(topic => {
        topic.lessons.forEach(lesson => {
            lessonCounter++;
            const lessonId = 'lesson-' + grade + '-' + lessonCounter;
            
            const oldString = '<h5 class="font-semibold text-gray-900 dark:text-white mb-1">' + lesson + '</h5>';
            const buttonOld = '<button class="text-primary hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium">Học ngay <i class="fa-solid fa-angle-right ml-1"></i></button>';
            const buttonNew = '<button class="text-primary hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium">Chi tiết <i id="icon-' + lessonId + '" class="fa-solid fa-angle-down ml-1"></i></button>';
            
            const cardInnerOld = '<div class="flex justify-between items-start">';
            const cardInnerNew = '<div class="flex justify-between items-start cursor-pointer" onclick="toggleLesson(\'' + lessonId + '\')">';

            // Find the index of oldString
            let cardIdx = fileStr.indexOf(oldString);
            if(cardIdx !== -1) {
                // Find start of card
                let startOfCard = fileStr.lastIndexOf('<div class="flex justify-between items-start">', cardIdx);
                
                if (startOfCard !== -1) {
                    fileStr = fileStr.substring(0, startOfCard) + cardInnerNew + fileStr.substring(startOfCard + cardInnerOld.length);
                }
                
                // Replace the button for this specific card - tricky to do globally, need to replace near cardIdx
                let buttonIdx = fileStr.indexOf(buttonOld, cardIdx);
                if (buttonIdx !== -1) {
                    fileStr = fileStr.substring(0, buttonIdx) + buttonNew + fileStr.substring(buttonIdx + buttonOld.length);
                }
                
                const mockContent = `\n<div id="content-${lessonId}" class="hidden transition-all duration-300 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">\n<h6 class="font-bold text-blue-600 dark:text-blue-400 mb-2">I. Mục tiêu bài học</h6><ul class="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mb-4"><li>Nắm vững kiến thức trọng tâm của ${lesson}</li><li>Vận dụng vào giải các bài tập thực tiễn.</li><li>Thực hành thí nghiệm (nếu có) để quan sát hiện tượng.</li></ul><h6 class="font-bold text-blue-600 dark:text-blue-400 mb-2">II. Nội dung trọng tâm</h6><div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 mb-4 border border-blue-100 dark:border-blue-800"><p>Nội dung chi tiết cho bài giảng đang được giáo viên cập nhật. Bạn có thể tham khảo video bài giảng hoặc làm bài tập trắc nghiệm.</p></div><div class="flex gap-3 mt-4"><button class="px-3 py-1.5 bg-primary text-white rounded text-sm hover:bg-blue-600 transition-colors"><i class="fa-solid fa-play mr-1"></i> Video Bài giảng</button><a href="../quizzes.html" class="px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><i class="fa-solid fa-list-check mr-1"></i> Làm bài tập</a></div></div>\n`;
                
                // Add the content inside the parent div
                // Look for the closing </div> of the flex container after buttonIdx
                let closeDivIdx = fileStr.indexOf('</div>', buttonIdx);
                if (closeDivIdx !== -1) {
                    fileStr = fileStr.substring(0, closeDivIdx + 6) + mockContent + fileStr.substring(closeDivIdx + 6);
                }
            }
        });
    });
    
    fs.writeFileSync('courses/hoahoc_' + grade + '.html', fileStr, 'utf8');
}
console.log('Done!');
