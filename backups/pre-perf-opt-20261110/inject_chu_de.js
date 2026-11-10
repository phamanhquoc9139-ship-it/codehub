const fs = require('fs');
const path = 'courses/hoahoc_10.html';
let content = fs.readFileSync(path, 'utf8');

const remainingContent = `
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
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Bài 7-10</span>
                        <span>Quy tắc Octet & Các loại liên kết</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-2">1. Quy tắc Octet (Bát tử)</h4>
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li>Trong các phản ứng hóa học, nguyên tử có xu hướng nhường, nhận hoặc dùng chung electron để đạt được cấu hình electron bền vững của khí hiếm gần nhất (thường là 8e lớp ngoài cùng).</li>
                            </ul>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">2. Liên kết ion</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu.</li>
                                    <li>Thường xảy ra giữa kim loại điển hình và phi kim điển hình.</li>
                                    <li>Hiệu độ âm điện: ∆χ ≥ 1.7</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800">
                                <h4 class="font-bold text-cyan-700 dark:text-cyan-400 mb-2">3. Liên kết cộng hóa trị</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Hình thành bởi một hay nhiều cặp electron dùng chung giữa 2 nguyên tử.</li>
                                    <li>Liên kết CHT không phân cực (0 ≤ ∆χ < 0.4) và phân cực (0.4 ≤ ∆χ < 1.7).</li>
                                </ul>
                            </div>
                        </div>
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
                        <span>Khái niệm và cân bằng phản ứng</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2">1. Khái niệm cốt lõi</h4>
                            <ul class="list-disc list-inside space-y-2 ml-2">
                                <li><strong>Chất khử (chất bị oxi hóa):</strong> Chất nhường electron (số oxi hóa tăng). <em>"Khử cho, O nhận"</em>.</li>
                                <li><strong>Chất oxi hóa (chất bị khử):</strong> Chất nhận electron (số oxi hóa giảm).</li>
                                <li><strong>Phản ứng oxi hóa - khử:</strong> Là phản ứng hóa học trong đó có sự chuyển dịch electron giữa các chất phản ứng (có sự thay đổi số oxi hóa).</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-800">
                            <h4 class="font-bold text-pink-700 dark:text-pink-400 mb-2">2. Các bước lập phương trình phản ứng (Thăng bằng electron)</h4>
                            <ol class="list-decimal list-inside space-y-1 ml-2">
                                <li>Xác định số oxi hóa của các nguyên tố có sự thay đổi.</li>
                                <li>Viết quá trình oxi hóa, quá trình khử.</li>
                                <li>Tìm hệ số thích hợp sao cho: Tổng số electron nhường = Tổng số electron nhận.</li>
                                <li>Đặt hệ số vào phương trình và kiểm tra lại (theo thứ tự: Kim loại &rarr; Phi kim &rarr; H &rarr; O).</li>
                            </ol>
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
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">Bài 12-13</span>
                        <span>Enthalpy và biến thiên Enthalpy</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                                <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">1. Phản ứng tỏa nhiệt (Exothermic)</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Là phản ứng giải phóng nhiệt lượng ra môi trường.</li>
                                    <li>Biến thiên enthalpy chuẩn: <strong>∆rHo298 < 0</strong>.</li>
                                    <li>Ví dụ: Đốt cháy than, phản ứng trung hòa axit-bazơ.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800">
                                <h4 class="font-bold text-yellow-700 dark:text-yellow-400 mb-2">2. Phản ứng thu nhiệt (Endothermic)</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Là phản ứng hấp thụ nhiệt lượng từ môi trường.</li>
                                    <li>Biến thiên enthalpy chuẩn: <strong>∆rHo298 > 0</strong>.</li>
                                    <li>Ví dụ: Nung đá vôi (CaCO3), hòa tan NH4NO3 vào nước.</li>
                                </ul>
                            </div>
                        </div>
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
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300">Bài 14-15</span>
                        <span>Các yếu tố ảnh hưởng đến tốc độ phản ứng</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">5 Yếu tố chính</h4>
                            <ul class="list-disc list-inside space-y-2 ml-2">
                                <li><strong>Nồng độ:</strong> Nồng độ chất phản ứng tăng &rarr; Tốc độ tăng (do số va chạm hiệu dụng tăng).</li>
                                <li><strong>Nhiệt độ:</strong> Nhiệt độ tăng &rarr; Tốc độ tăng mạnh. (Quy tắc Van't Hoff: T tăng 10 độ, tốc độ tăng 2-4 lần).</li>
                                <li><strong>Áp suất:</strong> (Chỉ áp dụng với chất khí). Áp suất tăng &rarr; Tốc độ tăng.</li>
                                <li><strong>Diện tích bề mặt tiếp xúc:</strong> Diện tích bề mặt tăng (ví dụ nghiền nhỏ chất rắn) &rarr; Tốc độ tăng.</li>
                                <li><strong>Chất xúc tác (Catalyst):</strong> Làm giảm năng lượng hoạt hóa, giúp phản ứng diễn ra nhanh hơn mà không bị tiêu hao sau phản ứng.</li>
                            </ul>
                        </div>
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
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Bài 16-17</span>
                        <span>Đặc điểm tính chất của Halogen</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                                <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">1. Vị trí & Cấu hình electron</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Gồm: Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I).</li>
                                    <li>Nằm ở nhóm VIIA. Lớp ngoài cùng có 7 electron (ns2 np5).</li>
                                    <li>Dễ nhận thêm 1e để đạt cấu hình bền khí hiếm &rarr; Tính oxi hóa mạnh.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                                <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">2. Tính chất hóa học cơ bản</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Tính oxi hóa giảm dần từ F2 đến I2.</li>
                                    <li>F2 chỉ có tính oxi hóa, không có số oxi hóa dương.</li>
                                    <li>Phản ứng với kim loại &rarr; Muối Halide.</li>
                                    <li>Phản ứng với Hydrogen &rarr; Khí Hydrogen Halide (HX). Tính axit của dung dịch HX tăng dần: HF < HCl < HBr < HI.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

if (content.includes('<!-- Chu de 3 -->')) {
    console.log('Already added');
} else {
    content = content.replace('      </main>', remainingContent + '\n      </main>');
    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully injected sections 3-7');
}
