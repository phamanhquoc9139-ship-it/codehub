const fs = require('fs');
const path = require('path');

const diali10Data = {
    grade: 10,
    title: "Địa Lí Lớp 10",
    subtitle: "Trọn bộ 11 chương, 36 bài học chi tiết theo chương trình GDPT 2018 (Kết nối tri thức). Khám phá Bản đồ, Thạch quyển, Khí quyển, Thủy quyển, Sinh quyển, Địa lí dân cư và Cơ cấu các ngành kinh tế toàn cầu.",
    gradientFrom: "from-emerald-700",
    gradientTo: "to-amber-700",
    primaryColor: "#059669", // emerald-600
    badgeText: "CHƯƠNG TRÌNH GDPT 2018 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG",
    chapters: [
        {
            id: "chuong-1",
            title: "Chương 1: Sử dụng bản đồ",
            icon: "fa-map-location-dot",
            color: "emerald",
            lessons: [
                {
                    name: "Bài 1: Môn Địa lí với định hướng nghề nghiệp",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">1. Đặc điểm & Vai trò của môn Địa lí</h4>
                            <p class="text-xs mb-2">Địa lí là môn khoa học tích hợp giữa khoa học tự nhiên và khoa học xã hội, nghiên cứu không gian địa lí, các thành phần tự nhiên, kinh tế, xã hội và mối quan hệ tương tác giữa con người với môi trường sống.</p>
                            <p class="text-xs">Giúp hình thành thế giới quan khoa học, tư duy không gian, khả năng thích ứng với biến đổi khí hậu và ý thức bảo vệ tài nguyên quốc gia.</p>
                        </div>
                        <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800 text-xs">
                            <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-1">2. Định hướng nghề nghiệp:</h4>
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Địa lí tự nhiên & Môi trường:</strong> Khí tượng thủy văn, địa chất khoáng sản, hải dương học, trắc địa bản đồ, quản lý tài nguyên và môi trường, dự báo thiên tai.</li>
                                <li><strong>Địa lí kinh tế - xã hội:</strong> Quy hoạch đô thị và nông thôn, phân tích kinh tế vùng, du lịch, logistics, ngoại giao và hợp tác quốc tế.</li>
                                <li><strong>Công nghệ địa lí:</strong> Chuyên viên hệ thống thông tin địa lí (GIS), viễn thám vệ tinh (Remote Sensing), định vị toàn cầu (GPS).</li>
                            </ul>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 2: Phương pháp biểu hiện các đối tượng địa lí trên bản đồ",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">Các phương pháp bản đồ thông dụng</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <p class="font-bold text-teal-900 dark:text-teal-300 mb-1">1. Phương pháp kí hiệu:</p>
                                    <p class="mb-1">Biểu hiện các đối tượng phân bố theo điểm cụ thể (mỏ khoáng sản, sân bay, hải cảng, nhà máy điện). Kí hiệu gồm: hình học, chữ, tượng hình. Kích thước kí hiệu thể hiện quy mô.</p>
                                    <p class="font-bold text-teal-900 dark:text-teal-300 mb-1 mt-2">2. Phương pháp đường chuyển động:</p>
                                    <p>Thể hiện hướng di chuyển, khối lượng và tốc độ của đối tượng (hướng gió, dòng biển, luồng di dân, tuyến vận tải hàng hoá).</p>
                                </div>
                                <div>
                                    <p class="font-bold text-teal-900 dark:text-teal-300 mb-1">3. Phương pháp chấm điểm:</p>
                                    <p class="mb-1">Biểu hiện các đối tượng phân bố phân tán bằng các điểm chấm có giá trị định lượng xác định (sự phân bố dân cư, chăn nuôi gia súc).</p>
                                    <p class="font-bold text-teal-900 dark:text-teal-300 mb-1 mt-2">4. Phương pháp bản đồ - biểu đồ & vùng phân bố:</p>
                                    <p>Đặt các biểu đồ (cột, tròn) vào phạm vi lãnh thổ hành chính để thể hiện cơ cấu, sản lượng nông/công nghiệp; dùng màu hoặc hoa văn khoanh vùng phân bố cây trồng, dân tộc.</p>
                                </div>
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 3: Sử dụng bản đồ, GPS và bản đồ số trong đời sống",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                                <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">1. Sử dụng bản đồ hiệu quả</h4>
                                <ul class="list-disc list-inside text-xs space-y-1 ml-2">
                                    <li>Đọc tên bản đồ để xác định nội dung và lãnh thổ biểu hiện.</li>
                                    <li>Xem tỉ lệ bản đồ để tính khoảng cách thực tế giữa các điểm.</li>
                                    <li>Tra cứu bảng chú giải để giải mã các kí hiệu, màu sắc, đường nét.</li>
                                    <li>Xác định phương hướng dựa trên hệ thống kinh vĩ tuyến hoặc mũi tên chỉ hướng Bắc.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">2. Ứng dụng GPS & Bản đồ số</h4>
                                <p class="text-xs mb-1"><strong>Hệ thống định vị toàn cầu (GPS):</strong> Xác định chính xác toạ độ (kinh độ, vĩ độ, độ cao) của bất kì vật thể nào trên Trái Đất nhờ mạng lưới vệ tinh nhân tạo.</p>
                                <p class="text-xs"><strong>Bản đồ số (Google Maps, Apple Maps):</strong> Dẫn đường, tìm kiếm lộ trình giao thông tối ưu, hỗ trợ cứu hộ cứu nạn, quản lý giao hàng thông minh và quy hoạch hạ tầng số.</p>
                            </div>
                        </div>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-2",
            title: "Chương 2: Trái Đất",
            icon: "fa-earth-asia",
            color: "teal",
            lessons: [
                {
                    name: "Bài 4: Sự hình thành Trái Đất, vỏ Trái Đất và vật liệu cấu tạo",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                                <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">1. Nguồn gốc & Cấu trúc Trái Đất</h4>
                                <p class="text-xs mb-1">Trái Đất hình thành cách đây khoảng 4,6 tỉ năm từ đám mây bụi và khí tinh vân quay quanh Mặt Trời nguyên thuỷ.</p>
                                <p class="text-xs">Cấu trúc từ ngoài vào trong: <strong>Vỏ Trái Đất</strong> (dày 5-70 km) &rarr; <strong>Manti</strong> (chiếm 80% thể tích, có quyển asthenosphere quánh dẻo) &rarr; <strong>Nhân Trái Đất</strong> (nhân ngoài lỏng, nhân trong rắn, chủ yếu là Fe và Ni).</p>
                            </div>
                            <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                                <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">2. Vật liệu cấu tạo vỏ Trái Đất</h4>
                                <p class="text-xs mb-2">Gồm khoáng vật và 3 nhóm đá chính:</p>
                                <ul class="list-disc list-inside text-xs space-y-1 ml-2">
                                    <li><strong>Đá magma:</strong> Do khối magma nóng chảy nguội đi đông cứng lại (đá granite kết tinh sâu, đá basalt phun trào mặt đất).</li>
                                    <li><strong>Đá trầm tích:</strong> Do tích tụ và nén chặt xác sinh vật hoặc mảnh vụn phong hoá (đá vôi, sa thạch, sét).</li>
                                    <li><strong>Đá biến chất:</strong> Biến đổi từ đá có sẵn dưới tác động của nhiệt độ và áp suất cực cao (đá hoa biến chất từ đá vôi, đá phiến).</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 5: Hệ quả địa lí các chuyển động của Trái Đất",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
                            <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">1. Chuyển động tự quay quanh trục</h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                                <div>
                                    <strong>Hiện tượng ngày đêm luân phiên:</strong> Do Trái Đất hình cầu tự quay quanh trục từ Tây sang Đông trong 24 giờ.
                                </div>
                                <div>
                                    <strong>Giờ trên Trái Đất:</strong> Trái Đất chia thành 24 múi giờ. Giờ múi số 0 (kinh tuyến gốc qua đài thiên văn Greenwich). Việt Nam thuộc múi giờ số 7. Kinh tuyến 180° là đường đổi ngày quốc tế.
                                </div>
                                <div>
                                    <strong>Lực Coriolis:</strong> Làm lệch hướng chuyển động của vật thể: Lệch sang bên phải ở Bán cầu Bắc, lệch sang bên trái ở Bán cầu Nam (ảnh hưởng hướng gió, dòng biển).
                                </div>
                            </div>
                        </div>
                        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                            <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">2. Chuyển động quanh Mặt Trời (Quỹ đạo Elip)</h4>
                            <ul class="list-disc list-inside text-xs space-y-1 ml-2">
                                <li><strong>Hiện tượng bốn mùa:</strong> Trục Trái Đất nghiêng 66°33' với mặt phẳng quỹ đạo và không đổi phương khi chuyển động. Khi bán cầu nào ngả về phía Mặt Trời thì nhận được nhiều ánh sáng và nhiệt &rarr; Mùa nóng (hạ); ngược lại là mùa lạnh (đông). Hai bán cầu có mùa trái ngược nhau.</li>
                                <li><strong>Ngày đêm dài ngắn theo mùa và theo vĩ độ:</strong> Càng xa xích đạo về phía cực chênh lệch ngày đêm càng rõ rệt; từ vòng cực (66°33') đến cực có hiện tượng ngày hoặc đêm kéo dài 24 giờ đến 6 tháng. Ở xích đạo ngày luôn dài bằng đêm (12 giờ).</li>
                            </ul>
                        </div>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-3",
            title: "Chương 3: Thạch quyển",
            icon: "fa-volcano",
            color: "amber",
            lessons: [
                {
                    name: "Bài 6: Thạch quyển và thuyết kiến tạo mảng",
                    content: `
                    <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">Thuyết Kiến tạo mảng (Plate Tectonics)</h4>
                        <p class="text-xs mb-2"><strong>Thạch quyển (Lithosphere):</strong> Gồm vỏ Trái Đất và phần trên cùng của lớp manti (dày khoảng 100 km), trạng thái vật chất cứng.</p>
                        <p class="text-xs mb-2">Thạch quyển bị chia cắt thành 7 mảng kiến tạo lớn (Âu - Á, Thái Bình Dương, Bắc Mỹ, Nam Mỹ, Phi, Ấn Độ - Australia, Nam Cực) và nhiều mảng nhỏ nổi trên quyển asthenosphere quánh dẻo.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-amber-200 dark:border-amber-700">
                                <strong>Ranh giới xô húc (tiếp xúc hội tụ):</strong> Hai mảng đâm vào nhau làm uốn nếp tạo núi cao đồ sộ (dãy Himalaya hình thành do mảng Ấn Độ xô vào mảng Âu - Á), hoặc mảng đại dương chìm xuống dưới mảng lục địa tạo rãnh đại dương sâu và cung đảo lửa.
                            </div>
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-amber-200 dark:border-amber-700">
                                <strong>Ranh giới tách dãn (tiếp xúc phân kì):</strong> Hai mảng trôi dạt ra xa nhau, magma trào lên tạo thành các sống núi ngầm giữa đại dương (sống núi ngầm Đại Tây Dương) và đáy biển mới mở rộng.
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 7: Nội lực và ngoại lực tác động đến địa hình",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
                                <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2">1. Tác động của Nội lực</h4>
                                <p class="text-xs mb-1">Nguồn năng lượng: Sinh ra từ trong lòng Trái Đất (phân rã phóng xạ, phản ứng hoá học, ma sát trọng lực).</p>
                                <p class="text-xs mb-1">Tác động: Vận động nâng lên hạ xuống; Uốn nếp tạo núi uốn nếp; Đứt gãy tạo thung lũng tách giãn, địa luỹ, địa hào; Núi lửa và động đất.</p>
                                <p class="text-xs font-semibold">Xu hướng chung: Làm bề mặt Trái Đất gồ ghề hơn.</p>
                            </div>
                            <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                                <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">2. Tác động của Ngoại lực</h4>
                                <p class="text-xs mb-1">Nguồn năng lượng: Bức xạ năng lượng Mặt Trời, gió, mưa, nước chảy, sinh vật.</p>
                                <ul class="list-disc list-inside text-xs space-y-1 ml-2">
                                    <li><strong>Phong hóa:</strong> Lí học (vỡ vụn cơ học), Hoá học (hoà tan nước tạo hang động Karst đá vôi), Sinh học (rễ cây, vi khuẩn).</li>
                                    <li><strong>Bóc mòn, Vận chuyển & Bồi tụ:</strong> Nước chảy bào mòn khe rãnh &rarr; bồi tụ tạo đồng bằng châu thổ phì nhiêu.</li>
                                </ul>
                                <p class="text-xs font-semibold mt-1">Xu hướng chung: San bằng các chỗ gồ ghề.</p>
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 8: Thực hành: Sự phân bố vành đai động đất, núi lửa",
                    content: `
                    <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">Phân bố các vành đai địa chấn thế giới</h4>
                        <ul class="list-disc list-inside text-xs space-y-2 ml-2">
                            <li><strong>Vành đai lửa Thái Bình Dương:</strong> Vành đai động đất và núi lửa lớn nhất hành tinh, bao quanh lòng chảo Thái Bình Dương dài hơn 40.000 km, chiếm hơn 75% núi lửa đang hoạt động trên Trái Đất và 90% các trận động đất lớn (Nhật Bản, Indonesia, Philippines, Chile).</li>
                            <li><strong>Vành đai Địa Trung Hải:</strong> Kéo dài từ Nam Âu, Bắc Phi qua Tây Á đến Đông Nam Á (nơi mảng Phi, mảng Ấn Độ xô húc với mảng Âu - Á).</li>
                            <li><strong>Mối liên hệ:</strong> Các vành đai động đất và núi lửa trùng khít với các ranh giới tiếp xúc của các mảng kiến tạo thạch quyển.</li>
                        </ul>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-4",
            title: "Chương 4: Khí quyển",
            icon: "fa-cloud-sun-rain",
            color: "sky",
            lessons: [
                {
                    name: "Bài 9: Khí quyển và các yếu tố khí hậu",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                            <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">1. Cấu trúc tầng khí quyển</h4>
                            <p class="text-xs mb-2">Gồm 5 tầng: <strong>Tầng đối lưu</strong> (dày 8-16 km, chứa 80% khối lượng không khí, nơi diễn ra mọi hiện tượng thời tiết mưa, mây, bão) &rarr; <strong>Tầng bình lưu</strong> (chứa tầng ozone hấp thụ tia UV) &rarr; Tầng giữa &rarr; Tầng nhiệt &rarr; Tầng khuếch tán ngoài cùng.</p>
                        </div>
                        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 text-xs">
                            <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">2. Sự phân bố nhiệt độ không khí trên Trái Đất:</h4>
                            <ul class="list-disc list-inside space-y-1.5 ml-2">
                                <li><strong>Theo vĩ độ:</strong> Nhiệt độ giảm dần từ xích đạo về hai cực do góc chiếu của tia sáng mặt trời giảm dần. Biên độ nhiệt năm tăng dần từ xích đạo về cực.</li>
                                <li><strong>Theo lục địa và đại dương:</strong> Do nhiệt dung của đất nhỏ hơn nước nên lục địa nóng nhanh nguội nhanh; đại dương điều hòa nhiệt độ mát mẻ vào mùa hạ, ấm áp vào mùa đông.</li>
                                <li><strong>Theo địa hình:</strong> Càng lên cao nhiệt độ càng giảm (cứ lên cao 100 m nhiệt độ giảm trung bình 0,6°C trong tầng đối lưu). Sườn đón nắng ấm hơn sườn khuất nắng.</li>
                            </ul>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 10: Khí áp và gió",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800">
                            <h4 class="font-bold text-cyan-700 dark:text-cyan-400 mb-2">1. Các đai khí áp trên Trái Đất</h4>
                            <p class="text-xs mb-2">Phân bố xen kẽ đối xứng qua xích đạo: Đai áp thấp Xích đạo &rarr; 2 Đai áp cao cận nhiệt đới (vĩ độ 30°) &rarr; 2 Đai áp thấp ôn đới (vĩ độ 60°) &rarr; 2 Đai áp cao Cực. Không khí luôn chuyển động từ nơi áp cao về nơi áp thấp sinh ra gió.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <h5 class="font-bold text-indigo-700 dark:text-indigo-400 mb-1">Các hoàn lưu gió chính:</h5>
                                <ul class="list-disc list-inside space-y-1 ml-1">
                                    <li><strong>Gió Mậu dịch (Tín phong):</strong> Thổi từ áp cao cận nhiệt về áp thấp xích đạo, khô ráo, thổi đều quanh năm.</li>
                                    <li><strong>Gió Tây ôn đới:</strong> Thổi từ cận nhiệt về ôn đới, mang nhiều hơi ẩm từ biển vào đất liền gây mưa.</li>
                                    <li><strong>Gió mùa:</strong> Thổi theo mùa (gió mùa mùa đông khô lạnh và gió mùa mùa hạ nóng ẩm ở Đông Nam Á, Nam Á).</li>
                                </ul>
                            </div>
                            <div class="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                                <h5 class="font-bold text-teal-700 dark:text-teal-400 mb-1">Gió địa phương:</h5>
                                <ul class="list-disc list-inside space-y-1 ml-1">
                                    <li><strong>Gió đất - gió biển:</strong> Ban ngày gió từ biển thổi vào đất liền mát mẻ; ban đêm gió từ đất liền thổi ra biển.</li>
                                    <li><strong>Gió Fơn (Foehn):</strong> Gió vượt qua sườn núi cao bị trút hết mưa ở sườn đón gió; khi sang sườn khuất gió không khí bị nén đoạn nhiệt trở nên cực kì khô và nóng (Gió Lào ở Bắc Trung Bộ Việt Nam).</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 11: Mưa và các nhân tố ảnh hưởng",
                    content: `
                    <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">Các nhân tố chi phối lượng mưa toàn cầu</h4>
                        <ul class="list-disc list-inside text-xs space-y-1.5 ml-2">
                            <li><strong>Khí áp:</strong> Vùng áp thấp hút không khí ẩm bốc lên ngưng tụ gây mưa nhiều (vùng xích đạo mưa nhiều nhất); vùng áp cao không khí nén xuống khô ráo mưa ít hoặc không mưa (vùng chí tuyến hình thành sa mạc Sahara, Ả Rập).</li>
                            <li><strong>Frông (Front) & Dải hội tụ nhiệt đới:</strong> Miền tiếp xúc giữa 2 khối khí có tính chất khác biệt luôn có nhiễu động không khí gây mưa lớn kéo dài.</li>
                            <li><strong>Gió:</strong> Gió từ biển vào mang mưa lớn; gió từ lục địa thổi ra khô ráo.</li>
                            <li><strong>Dòng biển:</strong> Nơi có dòng biển nóng chảy qua có mưa nhiều; nơi có dòng biển lạnh nước khó bốc hơi nên ven bờ rất khô cằn (sa mạc Atacama, Namib).</li>
                            <li><strong>Địa hình:</strong> Cùng một dãy núi, sườn đón gió mưa nhiều, sườn khuất gió mưa ít.</li>
                        </ul>
                    </div>`
                },
                {
                    name: "Bài 12: Thực hành: Đọc bản đồ khí hậu và biểu đồ nhiệt ẩm",
                    content: `
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Kỹ năng phân tích khí hậu thực tế</h4>
                        <ul class="list-disc list-inside text-xs space-y-2 ml-2">
                            <li><strong>Đọc bản đồ các đới khí hậu:</strong> Nhận biết 7 đới khí hậu chính trên Trái Đất (Xích đạo, Cận xích đạo, Nhiệt đới, Cận nhiệt đới, Ôn đới, Cận cực, Cực) phân bố đối xứng qua xích đạo.</li>
                            <li><strong>Phân tích biểu đồ nhiệt độ - lượng mưa (Climograph):</strong>
                                <br>- Đường biểu diễn nhiệt độ: Tháng có nhiệt độ cao nhất, thấp nhất, tính biên độ nhiệt năm.
                                <br>- Cột biểu diễn lượng mưa: Tổng lượng mưa cả năm, các tháng mùa mưa và các tháng mùa khô.
                            </li>
                            <li><strong>Xác định kiểu khí hậu:</strong> Ví dụ: Hà Nội có nhiệt độ trung bình năm > 23°C, mưa nhiều vào mùa hạ (tháng 5-10) &rarr; Khí hậu nhiệt đới gió mùa có mùa đông lạnh.</li>
                        </ul>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-5",
            title: "Chương 5: Thủy quyển",
            icon: "fa-water",
            color: "blue",
            lessons: [
                {
                    name: "Bài 13: Thủy quyển và nước trên lục địa",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">1. Vòng tuần hoàn của nước</h4>
                            <p class="text-xs mb-1">Nước bao phủ 71% bề mặt Trái Đất, trong đó 97% là nước mặn ở đại dương, chỉ 3% là nước ngọt (chủ yếu đóng băng ở 2 cực).</p>
                            <p class="text-xs">Vòng tuần hoàn lớn: Nước bốc hơi từ đại dương &rarr; gió đưa mây vào đất liền &rarr; mưa tuyết rơi xuống lục địa &rarr; ngấm thành nước ngầm và chảy theo sông ngòi đổ trở lại đại dương.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="p-3 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                                <h5 class="font-bold text-sky-700 dark:text-sky-400 mb-1">2. Sông & Chế độ nước sông:</h5>
                                <p class="mb-1">Lưu vực sông, lưu lượng nước, thuỷ chế (mùa lũ và mùa cạn).</p>
                                <p>Nhân tố ảnh hưởng: Chế độ mưa (chính), băng tuyết tan ở thượng nguồn, địa hình (độ dốc), hồ đầm điều tiết và thảm thực vật che phủ (rừng giữ nước, chống lũ quét).</p>
                            </div>
                            <div class="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                                <h5 class="font-bold text-teal-700 dark:text-teal-400 mb-1">3. Hồ và Nước ngầm:</h5>
                                <p class="mb-1">Hồ tự nhiên (hồ móng ngựa do sông đổi dòng, hồ miệng núi lửa ngưng hoạt động như Biển Hồ Pleiku) và hồ nhân tạo thủy điện (Hòa Bình, Trị An).</p>
                                <p>Nước ngầm là nguồn cung cấp nước ngọt sinh hoạt quan trọng, cần chống ô nhiễm và sụt lún do khai thác quá mức.</p>
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 14: Nước biển và đại dương",
                    content: `
                    <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-cyan-700 dark:text-cyan-400 mb-2">Tính chất hoá lí & 3 hình thức vận động của nước biển</h4>
                        <ul class="list-disc list-inside text-xs space-y-1.5 ml-2">
                            <li><strong>Độ muối trung bình:</strong> 35‰ (biển Hồng Hải độ muối cao 41‰ do bốc hơi mạnh; biển Ban-tích chỉ 10-15‰ do nhiều sông đổ vào).</li>
                            <li><strong>Sóng biển:</strong> Dao động tại chỗ của các phân tử nước chủ yếu do tác dụng của <strong>gió</strong>. Sóng thần (Tsunami) hình thành do động đất ngầm hoặc núi lửa phun dưới đáy biển.</li>
                            <li><strong>Thủy triều:</strong> Dao động nước biển dâng lên hạ xuống theo chu kì do <strong>lực hút của Mặt Trăng và Mặt Trời</strong>. Triều cường khi Mặt Trăng, Mặt Trời và Trái Đất thẳng hàng (ngày mồng 1 và ngày rằm âm lịch); Triều kém khi vuông góc.</li>
                            <li><strong>Dòng biển (Hải lưu):</strong> Dòng chảy khổng lồ như những con sông ngầm giữa biển. Dòng biển nóng (chảy từ xích đạo lên cực: Gulf Stream, Curoshio) và dòng biển lạnh (chảy từ cực về xích đạo: Oya-shio, Peru, California).</li>
                        </ul>
                    </div>`
                },
                {
                    name: "Bài 15: Thực hành: Vẽ biểu đồ và nhận xét lưu lượng nước sông",
                    content: `
                    <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">Kỹ năng phân tích lưu lượng nước sông</h4>
                        <ul class="list-disc list-inside text-xs space-y-1.5 ml-2">
                            <li><strong>Vẽ biểu đồ cột:</strong> Thể hiện lưu lượng nước sông (m³/s) theo 12 tháng trong năm.</li>
                            <li><strong>Tính toán số liệu:</strong> Tính lưu lượng nước trung bình năm, xác định tháng đỉnh lũ và tháng cạn kiệt nhất.</li>
                            <li><strong>Nhận xét thuỷ chế:</strong> So sánh thời gian mùa lũ của sông Hồng (mùa lũ từ tháng 6 đến tháng 10 trùng mùa mưa gió mùa Tây Nam) và sông Mê Kông, sông Đà Nẵng (sông miền Trung lũ muộn vào tháng 9-12 do mưa bão bão tụ dải ven biển).</li>
                        </ul>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-6",
            title: "Chương 6: Thổ nhưỡng quyển và Sinh quyển",
            icon: "fa-seedling",
            color: "green",
            lessons: [
                {
                    name: "Bài 16: Sinh quyển",
                    content: `
                    <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-green-700 dark:text-green-400 mb-2">Khái niệm & Các nhân tố ảnh hưởng đến phân bố sinh vật</h4>
                        <p class="text-xs mb-2"><strong>Sinh quyển (Biosphere):</strong> Toàn bộ lớp vỏ Trái Đất có sự sống tồn tại, giới hạn từ tầng đối lưu (nơi có mây chim bay) đến đáy sâu các rãnh đại dương và lớp vỏ phong hoá của thạch quyển.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <ul class="list-disc list-inside space-y-1 ml-1">
                                <li><strong>Khí hậu (nhân tố quyết định):</strong> Nhiệt độ và độ ẩm quyết định sự phong phú của sinh vật (rừng mưa nhiệt đới đa dạng nhất).</li>
                                <li><strong>Đất:</strong> Độ phì, tính chất cơ giới ảnh hưởng đến loại thực vật sinh trưởng.</li>
                            </ul>
                            <ul class="list-disc list-inside space-y-1 ml-1">
                                <li><strong>Địa hình:</strong> Vành đai thực vật thay đổi theo độ cao (tương tự như đi từ xích đạo về cực).</li>
                                <li><strong>Con người:</strong> Có thể mở rộng hoặc thu hẹp vùng phân bố của loài qua bảo tồn hoặc phá huỷ sinh cảnh.</li>
                            </ul>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 17: Đất (Thổ nhưỡng quyển)",
                    content: `
                    <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">6 nhân tố hình thành đất (Soil Formation)</h4>
                        <ol class="list-decimal list-inside text-xs space-y-1.5 ml-2">
                            <li><strong>Đá mẹ:</strong> Cung cấp chất vô cơ, quyết định thành phần khoáng vật và tính chất cơ giới của đất.</li>
                            <li><strong>Khí hậu:</strong> Nhiệt độ và độ ẩm thúc đẩy quá trình phong hoá hoá học và phân giải mùn.</li>
                            <li><strong>Sinh vật:</strong> Đóng vai trò chủ đạo cung cấp chất hữu cơ, rễ cây phá huỷ đá, vi sinh vật tạo mùn độ phì.</li>
                            <li><strong>Địa hình:</strong> Độ dốc ảnh hưởng đến sự xói mòn và độ dày tầng đất (vùng dốc tầng mỏng, thung lũng tầng dày).</li>
                            <li><strong>Thời gian (tuổi của đất):</strong> Thời gian từ khi đá mẹ bắt đầu phong hoá hình thành nên các tầng đất hoàn chỉnh.</li>
                            <li><strong>Con người:</strong> Có thể làm tăng độ phì (bón phân hữu cơ, cày ải) hoặc làm thoái hoá bạc màu đất do xói mòn, lạm dụng hoá chất.</li>
                        </ol>
                    </div>`
                },
                {
                    name: "Bài 18: Thực hành: Sự phân bố thảm thực vật và các nhóm đất",
                    content: `
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Quy luật phân bố thực vật và thổ nhưỡng</h4>
                        <ul class="list-disc list-inside text-xs space-y-2 ml-2">
                            <li><strong>Từ xích đạo về cực:</strong> Rừng mưa nhiệt đới (đất feralit đỏ vàng) &rarr; Savan đồng cỏ cây bụi (đất đỏ nâu) &rarr; Thảo nguyên ôn đới (đất đen thảo nguyên màu mỡ) &rarr; Rừng lá kim Taiga (đất podzol chua) &rarr; Đài nguyên Tundra rêu và địa y (đất đài nguyên băng giá).</li>
                            <li><strong>Theo độ cao:</strong> Ở sườn nam dãy Alps hoặc Himalaya, chân núi là rừng lá rộng &rarr; lên cao là rừng hỗn hợp &rarr; rừng lá kim &rarr; đồng cỏ an-pin &rarr; băng tuyết vĩnh cửu.</li>
                        </ul>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-7",
            title: "Chương 7: Vỏ địa lí và các quy luật của vỏ địa lí",
            icon: "fa-globe",
            color: "indigo",
            lessons: [
                {
                    name: "Bài 19: Quy luật địa đới và quy luật phi địa đới",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">1. Quy luật thống nhất và hoàn chỉnh của vỏ địa lí</h4>
                            <p class="text-xs mb-1">Vỏ địa lí dày khoảng 30-35 km bao gồm thạch quyển, khí quyển, thủy quyển, thổ nhưỡng quyển và sinh quyển thâm nhập tương tác lẫn nhau.</p>
                            <p class="text-xs"><strong>Quy luật:</strong> Mọi thành phần tự nhiên đều có quan hệ hữu cơ chặt chẽ. Nếu một thành phần thay đổi sẽ kéo theo sự thay đổi của các thành phần còn lại và toàn bộ cảnh quan (VD: rừng đầu nguồn bị chặt phá &rarr; nước ngầm tụt, đất bị xói mòn trơ sỏi đá &rarr; lũ lụt hạn hán gia tăng &rarr; khí hậu biến đổi).</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                                <h5 class="font-bold text-purple-700 dark:text-purple-400 mb-1">2. Quy luật địa đới:</h5>
                                <p class="mb-1">Là sự thay đổi có quy luật của các thành phần và cảnh quan địa lí theo vĩ độ (từ xích đạo về cực).</p>
                                <p>Nguyên nhân: Do dạng hình cầu của Trái Đất và bức xạ Mặt Trời giảm dần từ vĩ độ thấp lên cao.</p>
                            </div>
                            <div class="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                                <h5 class="font-bold text-teal-700 dark:text-teal-400 mb-1">3. Quy luật phi địa đới:</h5>
                                <p class="mb-1">Là sự phân bố không phụ thuộc vào bức xạ mặt trời mà do năng lượng bên trong lòng Trái Đất tạo ra lục địa, đại dương và độ cao địa hình.</p>
                                <p>Biểu hiện: <strong>Quy luật đai cao</strong> (thay đổi theo độ cao núi) và <strong>Quy luật địa phương</strong> (thay đổi theo khoảng cách xa gần biển).</p>
                            </div>
                        </div>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-8",
            title: "Chương 8: Địa lí dân cư",
            icon: "fa-people-group",
            color: "rose",
            lessons: [
                {
                    name: "Bài 20: Dân số và sự gia tăng dân số",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
                            <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2">1. Quy mô dân số & Gia tăng dân số</h4>
                            <p class="text-xs mb-1">Dân số thế giới đã vượt mốc 8 tỉ người (năm 2022). <strong>Gia tăng dân số thực tế</strong> bằng tổng của <em>Gia tăng tự nhiên</em> (Tỉ suất sinh thô - Tỉ suất tử thô) và <em>Gia tăng cơ học</em> (Xuất cư - Nhập cư).</p>
                            <p class="text-xs">Các nước phát triển có tỉ suất sinh thấp, già hoá dân số; các nước đang phát triển (châu Phi) tỉ lệ gia tăng tự nhiên còn cao gây áp lực việc làm, y tế và giáo dục.</p>
                        </div>
                        <div class="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-800 text-xs">
                            <h4 class="font-bold text-pink-700 dark:text-pink-400 mb-2">2. Cơ cấu dân số:</h4>
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Cơ cấu sinh học:</strong> Cơ cấu theo giới tính (tỉ số giới tính nam/nữ) và cơ cấu theo tuổi (dưới tuổi lao động 0-14, trong tuổi lao động 15-64, và trên tuổi lao động 65+).</li>
                                <li><strong>Cơ cấu xã hội:</strong> Cơ cấu lao động theo ngành kinh tế (khu vực I: Nông-lâm-ngư; khu vực II: Công nghiệp-xây dựng; khu vực III: Dịch vụ) và cơ cấu theo trình độ học vấn.</li>
                            </ul>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 21: Phân bố dân cư và đô thị hóa",
                    content: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-2">1. Phân bố dân cư</h4>
                            <p class="text-xs mb-1">Mật độ dân số = Số dân / Diện tích (người/km²). Dân cư phân bố không đều: Tập trung đông đúc ở đồng bằng châu thổ, ven biển, đô thị lớn (Nam Á, Đông Á); thưa thớt ở vùng núi cao, sa mạc, vùng cực băng giá.</p>
                            <p class="text-xs">Nhân tố ảnh hưởng: Điều kiện tự nhiên (địa hình, nguồn nước, khí hậu) và nhân tố kinh tế - xã hội (trình độ phát triển sản xuất, lịch sử khai thác lãnh thổ).</p>
                        </div>
                        <div class="p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800">
                            <h4 class="font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-2">2. Đô thị hóa (Urbanization)</h4>
                            <p class="text-xs mb-1">Là quá trình kinh tế - xã hội biểu hiện ở sự tăng nhanh số lượng và quy mô các điểm dân cư đô thị, tập trung dân cư vào các thành phố lớn và phổ biến lối sống thành thị.</p>
                            <p class="text-xs">Đô thị hoá tự phát ở các nước đang phát triển gây quá tải hạ tầng giao thông, thiếu nhà ở, ô nhiễm môi trường và thất nghiệp.</p>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 22: Thực hành: Vẽ và phân tích tháp dân số",
                    content: `
                    <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2">Nhận dạng 3 kiểu tháp dân số</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-rose-200 dark:border-rose-700">
                                <strong>Tháp mở rộng (Mô hình trẻ):</strong> Đáy tháp rất rộng, thu hẹp nhanh về đỉnh. Tỉ suất sinh cao, tuổi thọ trung bình thấp (các nước kém phát triển).
                            </div>
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-rose-200 dark:border-rose-700">
                                <strong>Tháp ổn định:</strong> Đáy tháp hẹp hơn, phần thân nở rộng, đỉnh tháp tương đối nhọn. Tỉ suất sinh và tử đều thấp (các nước đang phát triển ổn định).
                            </div>
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-rose-200 dark:border-rose-700">
                                <strong>Tháp thu hẹp (Mô hình già):</strong> Đáy tháp hẹp, phần thân và đỉnh nở to. Tỉ lệ người già 65+ cao, nguy cơ thiếu hụt lao động tương lai (Nhật Bản, Đức).
                            </div>
                        </div>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-9",
            title: "Chương 9: Các nguồn lực và cơ cấu kinh tế",
            icon: "fa-chart-pie",
            color: "orange",
            lessons: [
                {
                    name: "Bài 23: Nguồn lực phát triển kinh tế",
                    content: `
                    <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">Phân loại các nguồn lực</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-orange-200 dark:border-orange-700">
                                <strong>1. Vị trí địa lí:</strong> Tự nhiên, kinh tế, chính trị giao thông. Tạo điều kiện thuận lợi hoặc gây trở ngại cho việc giao lưu kinh tế quốc tế.
                            </div>
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-orange-200 dark:border-orange-700">
                                <strong>2. Nguồn lực tự nhiên:</strong> Đất đai, khí hậu, nước, khoáng sản, sinh vật. Là tiền đề vật chất cơ bản cho sự phát triển sản xuất.
                            </div>
                            <div class="bg-white dark:bg-gray-800 p-2.5 rounded border border-orange-200 dark:border-orange-700">
                                <strong>3. Nguồn lực kinh tế - xã hội:</strong> Dân cư, nguồn lao động, vốn đầu tư, khoa học công nghệ, thị trường và chính sách phát triển (đóng vai trò quyết định).
                            </div>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 24: Cơ cấu kinh tế & Các tiêu chí đánh giá",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
                                <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">1. Cơ cấu kinh tế</h4>
                                <ul class="list-disc list-inside text-xs space-y-1 ml-2">
                                    <li><strong>Cơ cấu theo ngành:</strong> Nông - lâm - thuỷ sản (KV I), Công nghiệp - xây dựng (KV II), Dịch vụ (KV III). Xu hướng chung: Giảm tỉ trọng KV I, tăng tỉ trọng KV II và III.</li>
                                    <li><strong>Cơ cấu theo thành phần:</strong> Kinh tế Nhà nước, Kinh tế ngoài Nhà nước, Kinh tế có vốn đầu tư nước ngoài (FDI).</li>
                                    <li><strong>Cơ cấu theo lãnh thổ:</strong> Vùng kinh tế, khu kinh tế trọng điểm.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800 text-xs">
                                <h4 class="font-bold text-yellow-700 dark:text-yellow-400 mb-2">2. Các chỉ số đo lường kinh tế:</h4>
                                <p class="mb-1"><strong>GDP (Tổng sản phẩm quốc nội):</strong> Tổng giá trị sản phẩm và dịch vụ cuối cùng tạo ra trong phạm vi lãnh thổ một quốc gia trong 1 năm.</p>
                                <p class="mb-1"><strong>GNI (Tổng thu nhập quốc gia):</strong> Tổng thu nhập do công dân một nước tạo ra (ở trong và ngoài nước) trong 1 năm.</p>
                                <p><strong>GDP/GNI bình quân đầu người:</strong> Thước đo mức sống và mức độ phát triển kinh tế bình quân của người dân.</p>
                            </div>
                        </div>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-10",
            title: "Chương 10: Địa lí các ngành kinh tế",
            icon: "fa-industry",
            color: "teal",
            lessons: [
                {
                    name: "Bài 25 & 26: Địa lí nông, lâm, thủy sản và Tổ chức lãnh thổ nông nghiệp",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">1. Đặc điểm ngành nông nghiệp</h4>
                            <p class="text-xs mb-1">Đất trồng là tư liệu sản xuất chủ yếu và không thể thay thế; đối tượng sản xuất là sinh vật sống (cây trồng, vật nuôi); sản xuất mang tính mùa vụ và phụ thuộc chặt chẽ vào tự nhiên.</p>
                            <p class="text-xs">Xu hướng hiện đại: Ứng dụng nông nghiệp hữu cơ, nông nghiệp công nghệ cao, tự động hoá nhà kính thuỷ canh.</p>
                        </div>
                        <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800 text-xs">
                            <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-1">2. Các hình thức tổ chức lãnh thổ nông nghiệp:</h4>
                            <p>Trang trại &rarr; Vùng nông nghiệp chuyên môn hoá &rarr; Thể tổng hợp nông nghiệp nhằm khai thác tối đa lợi thế so sánh sinh thái của từng vùng lãnh thổ.</p>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 27: Thực hành: Vẽ biểu đồ nông, lâm, thủy sản",
                    content: `
                    <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800 text-sm text-gray-700 dark:text-gray-300 text-xs">
                        <h4 class="font-bold text-green-700 dark:text-green-400 mb-2">Thực hành vẽ biểu đồ cột chồng / đường:</h4>
                        <p class="mb-1">Xử lý số liệu: Chuyển đổi số liệu thô thành cơ cấu tỉ lệ phần trăm ($100\\%$).</p>
                        <p>Nhận xét sự dịch chuyển tỉ trọng giữa trồng trọt, chăn nuôi và nuôi trồng thủy sản qua các giai đoạn.</p>
                    </div>`
                },
                {
                    name: "Bài 28, 29, 30 & 31: Địa lí ngành công nghiệp và Năng lượng tái tạo",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800 text-xs">
                                <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">1. Cơ cấu ngành công nghiệp</h4>
                                <ul class="list-disc list-inside space-y-1 ml-1">
                                    <li><strong>Khai thác:</strong> Khai thác than, dầu khí, quặng kim loại.</li>
                                    <li><strong>Chế biến, chế tạo:</strong> Luyện kim, cơ khí điện tử, hoá chất, dệt may, thực phẩm.</li>
                                    <li><strong>Sản xuất điện:</strong> Nhiệt điện, thủy điện, điện hạt nhân.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800 text-xs">
                                <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">2. Hình thức tổ chức lãnh thổ</h4>
                                <ul class="list-disc list-inside space-y-1 ml-1">
                                    <li><strong>Điểm công nghiệp:</strong> Đồng nhất với 1 điểm dân cư, 1 vài xí nghiệp.</li>
                                    <li><strong>Khu công nghiệp (KCN):</strong> Có ranh giới rõ ràng, hạ tầng hoàn chỉnh, ưu đãi đầu tư.</li>
                                    <li><strong>Trung tâm công nghiệp:</strong> Gắn liền với các đô thị vừa và lớn (Hà Nội, TP.HCM).</li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800 text-xs">
                            <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-1">3. Chuyển dịch năng lượng tái tạo:</h4>
                            <p>Hạn chế nhiệt điện than phát thải $CO_2$; đẩy mạnh đầu tư điện mặt trời, điện gió ngoài khơi, năng lượng sóng biển và hydro xanh nhằm ứng phó biến đổi khí hậu.</p>
                        </div>
                    </div>`
                },
                {
                    name: "Bài 32, 33, 34 & 35: Địa lí ngành dịch vụ, Giao thông, Thương mại và Du lịch",
                    content: `
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                                <h5 class="font-bold text-purple-700 dark:text-purple-400 mb-1">Ngành Giao thông vận tải</h5>
                                <p>Đường ô tô (cơ động cao), Đường sắt (khối lượng lớn, cự li dài), Đường thuỷ (vận tải quốc tế giá rẻ), Đường hàng không (tốc độ cao nhất) và Đường ống (vận chuyển dầu mỏ, khí đốt).</p>
                            </div>
                            <div class="p-3 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800">
                                <h5 class="font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-1">Bưu chính & Viễn thông</h5>
                                <p>Internet tốc độ cao, mạng 5G/6G, điện toán đám mây thúc đẩy thương mại điện tử, số hoá nền kinh tế và làm việc từ xa trên phạm vi toàn cầu.</p>
                            </div>
                            <div class="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                                <h5 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Thương mại & Du lịch</h5>
                                <p>Nội thương và Ngoại thương (cán cân xuất nhập khẩu). Ngành du lịch là "ngành công nghiệp không khói", khai thác tài nguyên du lịch tự nhiên và nhân văn mang lại doanh thu ngoại tệ lớn.</p>
                            </div>
                        </div>
                    </div>`
                }
            ]
        },
        {
            id: "chuong-11",
            title: "Chương 11: Phát triển bền vững và tăng trưởng xanh",
            icon: "fa-leaf",
            color: "emerald",
            lessons: [
                {
                    name: "Bài 36: Phát triển bền vững và tăng trưởng xanh",
                    content: `
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800 text-sm text-gray-700 dark:text-gray-300">
                        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Mục tiêu phát triển thế kỉ 21</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="bg-white dark:bg-gray-800 p-3 rounded border border-emerald-200 dark:border-emerald-700">
                                <h5 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">1. Phát triển bền vững (Sustainable Development)</h5>
                                <p class="mb-1">Là sự phát triển đáp ứng các nhu cầu của hiện tại mà <strong>không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai</strong>.</p>
                                <p>Dựa trên sự kết hợp hài hoà 3 trụ cột: Tăng trưởng kinh tế bền vững, Tiến bộ công bằng xã hội và Bảo vệ tài nguyên môi trường sinh thái.</p>
                            </div>
                            <div class="bg-white dark:bg-gray-800 p-3 rounded border border-emerald-200 dark:border-emerald-700">
                                <h5 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">2. Tăng trưởng xanh (Green Growth)</h5>
                                <p class="mb-1">Mô hình phát triển kinh tế thúc đẩy tăng trưởng và phát triển kinh tế đồng thời bảo tồn tài nguyên thiên nhiên, giảm thiểu phát thải khí nhà kính và suy thoái môi trường.</p>
                                <p>Biện pháp: Kinh tế tuần hoàn (tái chế 100%), năng lượng sạch, tiêu dùng thông minh và lối sống xanh thân thiện với thiên nhiên.</p>
                            </div>
                        </div>
                    </div>`
                }
            ]
        }
    ]
};

function renderDiaLi10Page(data) {
    let sidebarHtml = '';
    let contentHtml = '';

    data.chapters.forEach((chap, cIdx) => {
        const isFirst = cIdx === 0;
        const activeClass = isFirst
            ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 font-medium'
            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800';

        sidebarHtml += `            <div class="sidebar-item">
                <a href="#${chap.id}" class="block px-3 py-2 text-sm rounded-lg transition-colors ${activeClass}">${chap.title}</a>
                <ul class="pl-4 mt-1 space-y-1.5 border-l-2 border-gray-100 dark:border-gray-700 ml-4">
`;
        chap.lessons.forEach(lesson => {
            sidebarHtml += `                    <li><a href="#${chap.id}" class="block text-[13px] text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">${lesson.name}</a></li>\n`;
        });
        sidebarHtml += `                </ul>
            </div>\n`;

        contentHtml += `        <!-- ${chap.title} -->
        <section id="${chap.id}" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-${chap.color || 'emerald'}-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid ${chap.icon || 'fa-globe'} text-${chap.color || 'emerald'}-600"></i> ${chap.title}
                </h2>
            </div>
`;
        chap.lessons.forEach(lesson => {
            const badgeColor = chap.color || 'emerald';
            const match = lesson.name.match(/^(Bài [0-9]+(?:\s*-\s*[0-9]+)?):\s*(.+)$/);
            let badgeHtml = '';
            let titleText = lesson.name;
            if (match) {
                badgeHtml = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-${badgeColor}-100 text-${badgeColor}-700 dark:bg-${badgeColor}-900/50 dark:text-${badgeColor}-300">${match[1]}</span>`;
                titleText = match[2];
            }

            contentHtml += `            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        ${badgeHtml}
                        <span>${titleText}</span>
                    </h3>
                    ${lesson.content}
                </div>
            </div>\n`;
        });
        contentHtml += `        </section>\n`;
    });

    const linksHtml = data.chapters.map((chap, idx) => {
        const isLast = idx === data.chapters.length - 1;
        const btnClass = isLast
            ? 'px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 border border-orange-400 transition-all font-medium text-sm flex items-center gap-2 shadow-sm text-white'
            : 'px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium text-sm flex items-center gap-2 text-white';

        let shortTitle = chap.title.split(': ')[1] || chap.title;
        if (shortTitle.length > 20) shortTitle = shortTitle.substring(0, 20) + '...';

        return `          <a href="#${chap.id}" class="${btnClass}">
            <i class="fa-solid ${chap.icon || 'fa-globe'} text-white/80"></i> Chương ${idx + 1}: ${shortTitle}
          </a>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title} | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '${data.primaryColor}',
            secondary: '#ecfdf5',
            dark: '#0f172a',
            'dark-surface': '#1e293b'
          }
        }
      }
    }
  </script>
  <style>
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .smooth-scroll { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-dark dark:text-gray-100 transition-colors duration-200 smooth-scroll">
  
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="../index.html" class="flex items-center gap-2">
            <i class="fa-solid fa-code text-emerald-600 text-2xl"></i>
            <span class="font-bold text-xl tracking-tight">CodeHub</span>
          </a>
          <div class="hidden md:flex ml-10 space-x-8">
            <a href="../index.html" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">Trang chủ</a>
            <div class="relative group">
              <button class="text-emerald-600 dark:text-emerald-400 px-3 py-2 text-sm font-medium flex items-center gap-1">
                Khóa học <i class="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-surface ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-1">
                  <a href="diali_10.html" class="block px-4 py-2 text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30">Địa lí 10</a>
                  <a href="sinhhoc_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Sinh học 10</a>
                  <a href="hoahoc_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Hóa học 10</a>
                  <a href="toan_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Toán 10</a>
                </div>
              </div>
            </div>
            <a href="../quizzes.html" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">Luyện tập</a>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button id="themeToggle" class="p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
            <i class="fa-solid fa-moon text-lg dark:hidden"></i>
            <i class="fa-solid fa-sun text-lg hidden dark:block"></i>
          </button>
          <a href="../login.html" class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Đăng nhập</a>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-gradient-to-r ${data.gradientFrom} ${data.gradientTo} text-white py-20 shadow-inner text-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30 text-white">
        <i class="fa-solid fa-earth-americas"></i> ${data.badgeText}
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md text-white">${data.title}</h1>
      <p class="text-lg text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
        ${data.subtitle}
      </p>
      <div class="flex flex-wrap justify-center gap-3">
${linksHtml}
      </div>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <aside class="lg:w-1/4">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 pb-2 border-b dark:border-gray-700">Mục lục khóa học</h3>
          <nav class="space-y-4">
${sidebarHtml}
          </nav>
        </div>
      </aside>
      <main class="lg:w-3/4 space-y-12">
${contentHtml}
      </main>
    </div>
  </div>

  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2026 CodeHub. Tích hợp chương trình Địa lí 10 (KNTT - GDPT 2018).
    </div>
  </footer>

  <script>
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    const sections = document.querySelectorAll('section[id]');
    const sidebarItems = document.querySelectorAll('.sidebar-item > a');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      sidebarItems.forEach(link => {
        link.classList.remove('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        link.classList.add('text-gray-700', 'dark:text-gray-300');
        if (link.getAttribute('href') === "#" + current) {
          link.classList.remove('text-gray-700', 'dark:text-gray-300');
          link.classList.add('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        }
      });
    });
  </script>
</body>
</html>`;
}

const html = renderDiaLi10Page(diali10Data);
fs.writeFileSync(path.join(__dirname, 'courses', 'diali_10.html'), html, 'utf8');

// Also update index.html
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const diaLiCard = `
                    <!-- Course Card: Địa lí 10 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-amber-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-amber-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-earth-americas"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Địa Lí 10</h3>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500 dark:text-gray-300">
                                    GDPT 2018: Bản đồ, Thạch quyển, Khí quyển, Thủy quyển, Sinh quyển, Dân cư & Các ngành kinh tế.
                                </p>
                            </div>
                            <div class="mt-4">
                                <a href="courses/diali_10.html" class="text-amber-600 hover:text-amber-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

if (!indexContent.includes('<!-- Course Card: Địa lí 10 -->')) {
    indexContent = indexContent.replace('<!-- Course Card 8 (Piano) -->', diaLiCard + '\n                    <!-- Course Card 8 (Piano) -->');
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('Added Địa lí 10 card to index.html');
}

console.log('Successfully generated diali_10.html full KNTT!');
