const fs = require('fs');
const path = 'courses/hoahoc_10.html';
let content = fs.readFileSync(path, 'utf8');

const newSections = `
        <!-- Chu de 2 -->
        <section id="chu-de-2" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-emerald-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-table-cells text-emerald-600"></i> Chủ đề 2: Bảng tuần hoàn các nguyên tố
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">Bài 4</span>
                        <span>Cấu tạo Bảng tuần hoàn</span>
                    </h3>
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Ô nguyên tố:</strong> Số thứ tự ô = Số hiệu nguyên tử Z.</li>
                                <li><strong>Chu kì:</strong> Hàng ngang. Số thứ tự chu kì = số lớp electron. Có 7 chu kì.</li>
                                <li><strong>Nhóm:</strong> Cột dọc. Số thứ tự nhóm A = số electron hóa trị.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">Bài 5</span>
                        <span>Xu hướng biến đổi tính chất</span>
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                            <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">Trong một chu kì</h4>
                            <p>Đi từ trái sang phải: Bán kính giảm, Độ âm điện tăng, Tính phi kim tăng.</p>
                        </div>
                        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-2">Trong một nhóm A</h4>
                            <p>Đi từ trên xuống dưới: Bán kính tăng, Độ âm điện giảm, Tính kim loại tăng.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">Bài 6</span>
                        <span>Định luật tuần hoàn</span>
                    </h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                        <p>Tính chất của các nguyên tố và đơn chất cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chu de 3 -->
        <section id="chu-de-3" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-blue-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-link text-blue-600"></i> Chủ đề 3: Liên kết hóa học
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Bài 7</span>
                        <span>Quy tắc Octet</span>
                    </h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                        <p>Nguyên tử có xu hướng nhường, nhận hoặc dùng chung electron để đạt được cấu hình bền vững của khí hiếm (thường là 8e lớp ngoài cùng, riêng He có 2e).</p>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Bài 8</span>
                        <span>Liên kết Ion</span>
                    </h3>
                    <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800 text-sm text-gray-700 dark:text-gray-300">
                        <p>Hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu. Xảy ra giữa Kim loại điển hình và Phi kim điển hình (∆χ ≥ 1.7).</p>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Bài 9-10</span>
                        <span>Liên kết Cộng hóa trị & Hydrogen</span>
                    </h3>
                    <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800 text-sm text-gray-700 dark:text-gray-300">
                        <p>Hình thành bởi một hay nhiều cặp electron dùng chung. Gồm phân cực và không phân cực. Tương tác yếu (Hydrogen, Van der Waals) giải thích nhiệt độ sôi của nước.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chu de 4 -->
        <section id="chu-de-4" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-rose-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-fire text-rose-600"></i> Chủ đề 4: Phản ứng oxi hóa - khử
                </h2>
            </div>
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">Bài 11</span>
                        <span>Phản ứng oxi hóa - khử</span>
                    </h3>
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <p><strong>Chất khử:</strong> Nhường electron (Số oxh tăng). <strong>Chất oxi hóa:</strong> Nhận electron (Số oxh giảm). <em>"Khử cho, O nhận"</em>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chu de 5 -->
        <section id="chu-de-5" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-amber-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-bolt text-amber-600"></i> Chủ đề 5: Năng lượng hóa học
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">Bài 12</span>
                        <span>Enthalpy tạo thành</span>
                    </h3>
                    <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800 text-sm text-gray-700 dark:text-gray-300">
                        <p>Nhiệt tạo thành chuẩn (∆fHo298) là lượng nhiệt kèm theo phản ứng tạo ra 1 mol chất từ các đơn chất bền vững nhất ở điều kiện chuẩn.</p>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">Bài 13</span>
                        <span>Biến thiên Enthalpy</span>
                    </h3>
                    <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800 text-sm text-gray-700 dark:text-gray-300">
                        <p><strong>Tỏa nhiệt (Exothermic):</strong> ∆rHo298 < 0. Giải phóng nhiệt ra môi trường. (VD: Đốt cháy).</p>
                        <p><strong>Thu nhiệt (Endothermic):</strong> ∆rHo298 > 0. Hấp thụ nhiệt từ môi trường. (VD: Nung đá vôi).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chu de 6 -->
        <section id="chu-de-6" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-fuchsia-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-stopwatch text-fuchsia-600"></i> Chủ đề 6: Tốc độ phản ứng hóa học
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300">Bài 14</span>
                        <span>Khái niệm tốc độ phản ứng</span>
                    </h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                        <p>Đại lượng đặc trưng cho sự thay đổi nồng độ của chất phản ứng hoặc sản phẩm trong một đơn vị thời gian.</p>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300">Bài 15</span>
                        <span>Các yếu tố ảnh hưởng</span>
                    </h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                        <p>5 yếu tố: Nồng độ, Nhiệt độ (tăng T &rarr; tăng tốc độ), Áp suất (với chất khí), Diện tích bề mặt, và Chất xúc tác (làm giảm năng lượng hoạt hóa).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chu de 7 -->
        <section id="chu-de-7" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-emerald-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-vial-virus text-emerald-600"></i> Chủ đề 7: Nhóm Halogen
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Bài 16</span>
                        <span>Đặc điểm & Tính chất của Halogen</span>
                    </h3>
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800 text-sm text-gray-700 dark:text-gray-300">
                        <p>Gồm F, Cl, Br, I. Cấu hình lớp ngoài: ns2 np5. Tính oxi hóa mạnh, giảm dần từ F2 đến I2.</p>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Bài 17</span>
                        <span>Hydrogen Halide</span>
                    </h3>
                    <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800 text-sm text-gray-700 dark:text-gray-300">
                        <p>Tính axit của các dung dịch HX tăng dần: HF < HCl < HBr < HI. HF là axit yếu, có khả năng ăn mòn thủy tinh.</p>
                    </div>
                </div>
            </div>
        </section>
`;

const startIndex = content.indexOf('<!-- Chu de 2 -->');
const endIndex = content.indexOf('</main>');

if (startIndex !== -1 && endIndex !== -1) {
    const preContent = content.substring(0, startIndex);
    const postContent = content.substring(endIndex);
    fs.writeFileSync(path, preContent + newSections + '\n      ' + postContent, 'utf8');
    console.log('Successfully separated lessons');
} else {
    console.log('Failed to find tags');
}
