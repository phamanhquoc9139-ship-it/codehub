// Script to generate 14 pure responsive SVG vector diagrams for Tiếng Trung Quốc 10
const fs = require('fs');
const path = require('path');

const diagrams = {
  1: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <!-- Central Concept -->
  <g filter="url(#shadow)">
    <rect x="290" y="30" width="220" height="60" rx="16" fill="url(#g1)"/>
    <text x="400" y="65" font-family="'Noto Serif SC', serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">快乐的假期</text>
    <text x="400" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Kì nghỉ vui vẻ • Du lịch biển</text>
  </g>

  <!-- Connection Lines -->
  <path d="M 330 90 L 150 140" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,4"/>
  <path d="M 400 90 L 400 140" stroke="#fbbf24" stroke-width="2.5"/>
  <path d="M 470 90 L 650 140" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>

  <!-- Card 1: Hoạt động & Cảnh quan -->
  <g filter="url(#shadow)">
    <rect x="50" y="140" width="200" height="110" rx="14" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="150" y="168" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#f43f5e" text-anchor="middle">海边度假 • 景象</text>
    <text x="150" y="192" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0" text-anchor="middle">沙滩 (shātān) Bãi cát</text>
    <text x="150" y="212" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0" text-anchor="middle">日出 (rìchū) Bình minh</text>
    <text x="150" y="232" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#94a3b8" text-anchor="middle">向东看 (Xiàng dōng kàn)</text>
  </g>

  <!-- Card 2: Cấu trúc cốt lõi -->
  <g filter="url(#shadow)">
    <rect x="300" y="140" width="200" height="110" rx="14" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="400" y="168" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle">核心句型 • Ngữ pháp</text>
    <text x="400" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#fef08a" text-anchor="middle">不但……还……</text>
    <text x="400" y="215" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Không những... mà còn...</text>
    <text x="400" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">不但新鲜，还特别便宜</text>
  </g>

  <!-- Card 3: Ẩm thực & Cảm xúc -->
  <g filter="url(#shadow)">
    <rect x="550" y="140" width="200" height="110" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="650" y="168" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">海鲜美食 • 感受</text>
    <text x="650" y="192" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0" text-anchor="middle">海鲜 (hǎixiān) Hải sản</text>
    <text x="650" y="212" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0" text-anchor="middle">渔民市场 (Shìchǎng)</text>
    <text x="650" y="232" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#34d399" text-anchor="middle">特别喜欢 • 星星</text>
  </g>
</svg>`,

  2: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <!-- Central Header -->
  <rect x="290" y="25" width="220" height="60" rx="16" fill="url(#g2)"/>
  <text x="400" y="60" font-family="'Noto Serif SC', serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">劳逸结合</text>
  <text x="400" y="77" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Cân bằng Học tập & Nghỉ ngơi</text>

  <!-- Left Side: 劳 (Lao động / Học tập) -->
  <rect x="50" y="120" width="210" height="135" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="90" cy="145" r="14" fill="#3b82f6"/>
  <text x="90" y="150" font-family="'Noto Serif SC', serif" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">劳</text>
  <text x="145" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#60a5fa">Học tập & Ôn thi</text>
  <text x="70" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 考试 (kǎoshì) Kì thi</text>
  <text x="70" y="205" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 复习 (fùxí) Ôn tập</text>
  <text x="70" y="230" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 为了提高水平 (Wèile)</text>

  <!-- Middle Bridge: Bổ ngữ khả năng -->
  <rect x="295" y="120" width="210" height="135" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="400" y="150" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#f59e0b" text-anchor="middle">可能补语 • Khả năng</text>
  <rect x="315" y="165" width="170" height="35" rx="8" fill="#334155"/>
  <text x="400" y="187" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">看得懂 / 看不懂</text>
  <text x="400" y="222" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1" text-anchor="middle">抢得到票 / 抢不到票</text>
  <text x="400" y="242" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">V + 得 / 不 + Kết quả</text>

  <!-- Right Side: 逸 (Nghỉ ngơi / Giải trí) -->
  <rect x="540" y="120" width="210" height="135" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <circle cx="580" cy="145" r="14" fill="#10b981"/>
  <text x="580" y="150" font-family="'Noto Serif SC', serif" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">逸</text>
  <text x="635" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#34d399">Giải trí & Thư giãn</text>
  <text x="560" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 娱乐 (yúlè) Giải trí</text>
  <text x="560" y="205" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 演唱会 (yǎnchànghuì)</text>
  <text x="560" y="230" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 常常交流 (Chángcháng)</text>
</svg>`,

  3: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>

  <!-- Top Title -->
  <rect x="290" y="20" width="220" height="55" rx="16" fill="url(#g3)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">代沟 • 沟通桥梁</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Khoảng cách thế hệ & Kết nối</text>

  <!-- Left: 父母 (Phụ huynh) -->
  <rect x="50" y="105" width="200" height="150" rx="16" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="150" y="135" font-family="'Noto Serif SC', serif" font-size="16" font-weight="900" fill="#c084fc" text-anchor="middle">父母 (Fùmǔ)</text>
  <text x="70" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 传统想法 (Quan điểm)</text>
  <text x="70" y="190" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 关爱与担忧 (Lo lắng)</text>
  <text x="70" y="215" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 经验主义 (Kinh nghiệm)</text>
  <text x="70" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#a855f7">拿……来说 (Ná... lái shuō)</text>

  <!-- Center: Chiếc cầu 沟通 (Giao tiếp) -->
  <rect x="285" y="105" width="230" height="150" rx="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="135" font-family="'Noto Serif SC', serif" font-size="16" font-weight="900" fill="#fbbf24" text-anchor="middle">沟通与理解 (Cầu nối)</text>
  <rect x="305" y="150" width="190" height="30" rx="8" fill="#334155"/>
  <text x="400" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#fef08a" text-anchor="middle">刚才 (Gāngcái) Vừa nãy</text>
  <rect x="305" y="188" width="190" height="30" rx="8" fill="#334155"/>
  <text x="400" y="208" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#67e8f9" text-anchor="middle">只好 (Zhǐhǎo) Đành phải</text>
  <text x="400" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#34d399" text-anchor="middle">更加亲近 (Gèngjiā qīnjìn)</text>

  <!-- Right: 孩子 (Con cái) -->
  <rect x="550" y="105" width="200" height="150" rx="16" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
  <text x="650" y="135" font-family="'Noto Serif SC', serif" font-size="16" font-weight="900" fill="#f472b6" text-anchor="middle">年轻人 (Niánqīngrén)</text>
  <text x="570" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 自主选择 (Tự chủ)</text>
  <text x="570" y="190" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 科技与潮流 (Xu hướng)</text>
  <text x="570" y="215" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">• 渴望被理解 (Cần thấu hiểu)</text>
  <text x="570" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#f43f5e">文化驿站: 孝道 (Hiếu)</text>
</svg>`,

  "r1": `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  <!-- Top Banner -->
  <rect x="250" y="20" width="300" height="55" rx="16" fill="url(#g1)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#fff" text-anchor="middle">复习一 • 我们的生活</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fff" opacity="0.9" text-anchor="middle">Tổng kết Chủ điểm 1 • 3 Bài học</text>
  
  <!-- 3 Summary Columns -->
  <rect x="40" y="100" width="220" height="155" rx="14" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="150" y="125" font-family="'Noto Serif SC', serif" font-size="13" font-weight="700" fill="#f43f5e" text-anchor="middle">第1课: 快乐的假期</text>
  <text x="55" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 度假, 沙滩, 日出, 海鲜</text>
  <text x="55" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fef08a">• 不但……还……</text>
  <text x="55" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 向 + Hướng + Động từ</text>
  <text x="55" y="227" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 特别 + Tính từ / Tâm lí</text>

  <rect x="290" y="100" width="220" height="155" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="400" y="125" font-family="'Noto Serif SC', serif" font-size="13" font-weight="700" fill="#60a5fa" text-anchor="middle">第2课: 劳逸结合</text>
  <text x="305" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 考试, 复习, 交流, 提高</text>
  <text x="305" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#34d399">• V + 得 / 不 + Bổ ngữ kết quả</text>
  <text x="305" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 不过 (Tuy nhiên / Nhưng)</text>
  <text x="305" y="227" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 为了 + Mục đích</text>

  <rect x="540" y="100" width="220" height="155" rx="14" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="650" y="125" font-family="'Noto Serif SC', serif" font-size="13" font-weight="700" fill="#f472b6" text-anchor="middle">第3课: 代沟</text>
  <text x="555" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 父母, 想法, 沟通, 理解</text>
  <text x="555" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 刚才 (Vừa nãy - quá khứ)</text>
  <text x="555" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 拿……来说 (Lấy ví dụ)</text>
  <text x="555" y="227" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#f43f5e">• 只好 (Đành phải) & 更/更加</text>
</svg>`,

  4: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="280" y="20" width="240" height="55" rx="16" fill="url(#g4)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle">智商与情商 • IQ & EQ</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Trí tuệ & Trí tuệ cảm xúc</text>

  <!-- Left: 智商 (IQ) -->
  <rect x="50" y="100" width="200" height="155" rx="16" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
  <text x="150" y="130" font-family="'Noto Serif SC', serif" font-size="15" font-weight="900" fill="#38bdf8" text-anchor="middle">智商 (IQ)</text>
  <text x="70" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 逻辑思维 (Tư duy logic)</text>
  <text x="70" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 学习知识 (Tiếp thu)</text>
  <text x="70" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 分析能力 (Phân tích)</text>
  <text x="70" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#0284c7">解决得了 (Bổ ngữ khả năng)</text>

  <!-- Center: Ngữ pháp cốt lõi -->
  <rect x="290" y="100" width="220" height="155" rx="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#fbbf24" text-anchor="middle">核心语法 • Điểm ngữ pháp</text>
  <rect x="310" y="145" width="180" height="30" rx="8" fill="#334155"/>
  <text x="400" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#fef08a" text-anchor="middle">对……有好处 (Đối với...)</text>
  <rect x="310" y="182" width="180" height="30" rx="8" fill="#334155"/>
  <text x="400" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#67e8f9" text-anchor="middle">原来 (Hóa ra / Vốn dĩ)</text>
  <text x="400" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#34d399" text-anchor="middle">文化: 能者为师 (Thành ngữ)</text>

  <!-- Right: 情商 (EQ) -->
  <rect x="550" y="100" width="200" height="155" rx="16" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
  <text x="650" y="130" font-family="'Noto Serif SC', serif" font-size="15" font-weight="900" fill="#818cf8" text-anchor="middle">情商 (EQ)</text>
  <text x="570" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 情绪管理 (Quản lí cảm xúc)</text>
  <text x="570" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 积极心态 (Thái độ tích cực)</text>
  <text x="570" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 人际沟通 (Giao tiếp tốt)</text>
  <text x="570" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#a5b4fc">处理事情 (Xử lí thỏa đáng)</text>
</svg>`,

  5: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="270" y="20" width="260" height="55" rx="16" fill="url(#g5)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle">我学习，我快乐</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Tôi học tập, tôi vui • Học tập tích cực</text>

  <!-- Left: Hoạt động học tập phong phú -->
  <rect x="50" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#059669" stroke-width="2"/>
  <text x="155" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#34d399" text-anchor="middle">丰富多彩的活动</text>
  <text x="65" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 课外活动 (Ngoại khóa)</text>
  <text x="65" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 学术讲座 (Tọa đàm)</text>
  <text x="65" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 积极参加 (Tham gia)</text>
  <text x="65" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#a7f3d0">更加自信 (Thêm tự tin)</text>

  <!-- Center: Phân biệt 以为 vs 认为 -->
  <rect x="295" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#fbbf24" text-anchor="middle">以为 vs. 认为</text>
  <rect x="310" y="145" width="180" height="40" rx="8" fill="#334155"/>
  <text x="400" y="163" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#f87171" text-anchor="middle">以为 (Yǐwéi): Tưởng rằng</text>
  <text x="400" y="178" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#94a3b8" text-anchor="middle">(Thực tế sai lệch/ngược lại)</text>
  <rect x="310" y="192" width="180" height="40" rx="8" fill="#334155"/>
  <text x="400" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">认为 (Rènwéi): Cho rằng</text>
  <text x="400" y="225" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#94a3b8" text-anchor="middle">(Quan điểm khách quan/chắc chắn)</text>

  <!-- Right: Mẫu câu mở rộng -->
  <rect x="540" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
  <text x="645" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#60a5fa" text-anchor="middle">表达观点与时间</text>
  <text x="555" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 在……看来 (Theo quan điểm)</text>
  <text x="555" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 马上 (Ngay lập tức)</text>
  <text x="555" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 以前 vs. 后来 (Thời gian)</text>
  <text x="555" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#93c5fd">文化: 学而时习之 (Khổng Tử)</text>
</svg>`,

  "r2": `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  <rect x="250" y="20" width="300" height="55" rx="16" fill="url(#g4)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#fff" text-anchor="middle">复习二 • 我们的社会</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fff" opacity="0.9" text-anchor="middle">Tổng kết Chủ điểm 2 • Trí tuệ, Cảm xúc & Học tập</text>
  
  <rect x="60" y="100" width="320" height="155" rx="14" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="220" y="128" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">第4课: 智商与情商</text>
  <text x="80" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 智商, 情商, 情绪, 处理, 积极, 观点</text>
  <text x="80" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#fef08a">• 对 + Đối tượng + V/Adj (đối với...)</text>
  <text x="80" y="212" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 原来 (Hóa ra là... / Kế hoạch ban đầu)</text>
  <text x="80" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 解决得了 / 解决不了 (Bổ ngữ khả năng)</text>

  <rect x="420" y="100" width="320" height="155" rx="14" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="580" y="128" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#818cf8" text-anchor="middle">第5课: 我学习，我快乐</text>
  <text x="440" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 学习, 课外活动, 讲座, 参加, 自信</text>
  <text x="440" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#34d399">• 在……看来 (Theo cách nhìn của...)</text>
  <text x="440" y="212" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 马上 + V (Ngay lập tức)</text>
  <text x="440" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#f87171">• 以为 (Tưởng sai) vs. 认为 (Cho rằng)</text>
</svg>`,

  6: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="250" y="20" width="300" height="55" rx="16" fill="url(#g6)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">让环保成为一种习惯</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Bảo vệ môi trường thành thói quen</text>

  <!-- 4 Phân loại rác -->
  <g transform="translate(60, 95)">
    <!-- Thùng xanh tái chế -->
    <rect x="0" y="0" width="150" height="155" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
    <text x="75" y="28" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#60a5fa" text-anchor="middle">可回收物</text>
    <text x="75" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#93c5fd" text-anchor="middle">Rác tái chế</text>
    <text x="15" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 塑料瓶 (Chai nhựa)</text>
    <text x="15" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 废纸张 (Giấy vụn)</text>
    <text x="15" y="130" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 易拉罐 (Lon nhôm)</text>
  </g>

  <g transform="translate(235, 95)">
    <!-- Thùng xanh lá hữu cơ -->
    <rect x="0" y="0" width="150" height="155" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="75" y="28" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">厨余垃圾</text>
    <text x="75" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#6ee7b7" text-anchor="middle">Rác nhà bếp</text>
    <text x="15" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 剩饭菜 (Thức ăn thừa)</text>
    <text x="15" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 果皮 (Vỏ trái cây)</text>
    <text x="15" y="130" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 菜叶 (Rau củ hỏng)</text>
  </g>

  <g transform="translate(410, 95)">
    <!-- Thùng đỏ nguy hại -->
    <rect x="0" y="0" width="150" height="155" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="75" y="28" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#f87171" text-anchor="middle">有害垃圾</text>
    <text x="75" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#fca5a5" text-anchor="middle">Rác nguy hại</text>
    <text x="15" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 废电池 (Pin cũ)</text>
    <text x="15" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 过期药品 (Thuốc hết hạn)</text>
    <text x="15" y="130" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">• 荧光灯管 (Bóng đèn)</text>
  </g>

  <g transform="translate(585, 95)">
    <!-- Ngữ pháp 让 & 得 -->
    <rect x="0" y="0" width="155" height="155" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
    <text x="77" y="28" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#f59e0b" text-anchor="middle">核心语法</text>
    <text x="15" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#fef08a">• 让 (Ràng): Khiến cho</text>
    <text x="15" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#cbd5e1">让环保成为习惯</text>
    <text x="15" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#38bdf8">• 得 (děi): Phải/Cần</text>
    <text x="15" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#cbd5e1">我们得节约每一滴水</text>
    <text x="15" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#34d399">• 对……来说</text>
  </g>
</svg>`,

  7: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891b2"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="230" y="20" width="340" height="55" rx="16" fill="url(#g7)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">信息污染与社会环境保护</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Ô nhiễm thông tin & Bảo vệ môi trường mạng</text>

  <!-- Left: Hiện tượng ô nhiễm mạng -->
  <rect x="50" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
  <text x="155" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#f87171" text-anchor="middle">网络信息污染</text>
  <text x="65" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 虚假谣言 (Tin đồn giả)</text>
  <text x="65" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 网络暴力 (Bạo lực mạng)</text>
  <text x="65" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 垃圾信息 (Tin rác lừa đảo)</text>
  <text x="65" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fca5a5">不信谣，不传谣</text>

  <!-- Center: Quy trình xác minh -->
  <rect x="295" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="400" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#38bdf8" text-anchor="middle">核实流程 • Xác minh</text>
  <rect x="310" y="145" width="180" height="26" rx="6" fill="#334155"/>
  <text x="400" y="162" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#cbd5e1" text-anchor="middle">1. 查看来源 (Kiểm tra nguồn)</text>
  <rect x="310" y="177" width="180" height="26" rx="6" fill="#334155"/>
  <text x="400" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#cbd5e1" text-anchor="middle">2. 对比事实 (Đối chiếu sự thật)</text>
  <rect x="310" y="209" width="180" height="26" rx="6" fill="#334155"/>
  <text x="400" y="226" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#34d399" text-anchor="middle">3. 官方权威发布 (Kênh chính thức)</text>

  <!-- Right: Ngữ pháp 由 & 比较 & 每 -->
  <rect x="540" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="645" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#fbbf24" text-anchor="middle">语法要点</text>
  <text x="555" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 由 + Người + V (Do ai làm)</text>
  <text x="555" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 比较 + Adj (Khá, tương đối)</text>
  <text x="555" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 每个公民 (Mỗi công dân)</text>
  <text x="555" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fef08a">文化: 谣言止于智者</text>
</svg>`,

  8: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#84cc16"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="280" y="20" width="240" height="55" rx="16" fill="url(#g8)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle">绿色食品 • 溯源安全</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Thực phẩm xanh • An toàn dinh dưỡng</text>

  <!-- 3 Cấp tiêu chuẩn thực phẩm -->
  <rect x="50" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#16a34a" stroke-width="2"/>
  <text x="155" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#4ade80" text-anchor="middle">三大认证标准</text>
  <text x="65" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 无公害农产品 (Không độc hại)</text>
  <text x="65" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 绿色食品 (Thực phẩm xanh)</text>
  <text x="65" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 有机食品 (Thực phẩm hữu cơ)</text>
  <text x="65" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#86efac">安全 • 优质 • 营养</text>

  <!-- Center: Nông trại xanh -->
  <rect x="295" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#a3e635" stroke-width="2"/>
  <text x="400" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#a3e635" text-anchor="middle">生态种植环境</text>
  <text x="315" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 水源无污染 (Nước sạch)</text>
  <text x="315" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 土壤严格检测 (Đất kiểm định)</text>
  <text x="315" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 禁用化学农药 (Không thuốc trừ sâu)</text>
  <text x="315" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#bef264">新鲜采摘直达餐桌</text>

  <!-- Right: Ngữ pháp 究竟 & 趟 & 为 -->
  <rect x="540" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="645" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#fbbf24" text-anchor="middle">核心语法</text>
  <text x="555" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 究竟 + Câu hỏi (Rốt cuộc)</text>
  <text x="555" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 去了一趟 (Đi một chuyến)</text>
  <text x="555" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 为大家提供 (Phục vụ cho ai)</text>
  <text x="555" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fef08a">文化: 民以食为天</text>
</svg>`,

  "r3": `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  <rect x="250" y="20" width="300" height="55" rx="16" fill="url(#g6)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#fff" text-anchor="middle">复习三 • 我们的环境</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fff" opacity="0.9" text-anchor="middle">Tổng kết Chủ điểm 3 • Môi trường tự nhiên & Mạng xã hội</text>
  
  <rect x="40" y="100" width="220" height="155" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="150" y="125" font-family="'Noto Serif SC', serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">第6课: 让环保成习惯</text>
  <text x="55" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 环保, 垃圾分类, 节约</text>
  <text x="55" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fef08a">• 让 + Tân ngữ + V/Adj</text>
  <text x="55" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#38bdf8">• 得 (děi) + V (Cần phải)</text>
  <text x="55" y="227" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 对……来说 (Xét đối với)</text>

  <rect x="290" y="100" width="220" height="155" rx="14" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="400" y="125" font-family="'Noto Serif SC', serif" font-size="13" font-weight="700" fill="#22d3ee" text-anchor="middle">第7课: 社会环境</text>
  <text x="305" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 信息污染, 网络, 事实</text>
  <text x="305" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#34d399">• 由 + Chủ thể + V (Do ai làm)</text>
  <text x="305" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 比较 + Tính từ (Khá/Tương đối)</text>
  <text x="305" y="227" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 每 + Lượng từ + Đều……</text>

  <rect x="540" y="100" width="220" height="155" rx="14" fill="#1e293b" stroke="#84cc16" stroke-width="1.5"/>
  <text x="650" y="125" font-family="'Noto Serif SC', serif" font-size="13" font-weight="700" fill="#a3e635" text-anchor="middle">第8课: 绿色食品</text>
  <text x="555" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• 绿色食品, 新鲜, 质量</text>
  <text x="555" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fef08a">• 究竟 + Câu hỏi (Rốt cuộc)</text>
  <text x="555" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#cbd5e1">• Số từ + 趟 (Lượt chuyến đi)</text>
  <text x="555" y="227" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#38bdf8">• 为 + Đối tượng + V (Cho ai)</text>
</svg>`,

  9: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9333ea"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="280" y="20" width="240" height="55" rx="16" fill="url(#g9)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle">未来城市 • 智慧出行</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Thành phố tương lai • Giao thông thông minh</text>

  <!-- Left: Đô thị số AI -->
  <rect x="50" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#9333ea" stroke-width="2"/>
  <text x="155" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#c084fc" text-anchor="middle">智能立体交通</text>
  <text x="65" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 地铁网络 (Mạng lưới tàu điện)</text>
  <text x="65" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 无人驾驶 (Xe tự hành AI)</text>
  <text x="65" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 公共交通优先 (Ưu tiên xe buýt)</text>
  <text x="65" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e9d5ff">方便、高效、环保</text>

  <!-- Center: Từ li hợp 离合词 -->
  <rect x="295" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="400" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#f59e0b" text-anchor="middle">语法: 离合词 (Từ li hợp)</text>
  <rect x="310" y="145" width="180" height="30" rx="8" fill="#334155"/>
  <text x="400" y="165" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">见面 -> 见了两次面</text>
  <rect x="310" y="182" width="180" height="30" rx="8" fill="#334155"/>
  <text x="400" y="202" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">散步 -> 散了一会儿步</text>
  <text x="400" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#cbd5e1" text-anchor="middle">Quy tắc: Chèn trợ từ vào giữa</text>

  <!-- Right: 经常 vs 往往 -->
  <rect x="540" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
  <text x="645" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#22d3ee" text-anchor="middle">经常 vs. 往往</text>
  <text x="555" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#67e8f9">• 经常 (Jīngcháng)</text>
  <text x="555" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#cbd5e1">Tần suất lặp lại đơn thuần</text>
  <text x="555" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#fef08a">• 往往 (Wǎngwǎng)</text>
  <text x="555" y="219" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#cbd5e1">Quy luật có xu hướng trong điều kiện</text>
  <text x="555" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#93c5fd">越来越便利 (Ngày càng...)</text>
</svg>`,

  10: `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  
  <rect x="280" y="20" width="240" height="55" rx="16" fill="url(#g10)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle">健康与寿命 • 养生之道</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#ffffff" opacity="0.9" text-anchor="middle">Sức khỏe & Tuổi thọ • Bí quyết trường sinh</text>

  <!-- Left: Tam giác lối sống -->
  <rect x="50" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
  <text x="155" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#f472b6" text-anchor="middle">长寿三大要素</text>
  <text x="65" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 充足睡眠 (Ngủ đủ giấc)</text>
  <text x="65" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 规律运动 (Tập thể dục)</text>
  <text x="65" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 良好心态 (Tâm thái an yên)</text>
  <text x="65" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fbcfe8">保持愉快心情</text>

  <!-- Center: Quy tắc đọc số 万 & 亿 -->
  <rect x="295" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#fbbf24" text-anchor="middle">大数读法 • Nhóm 4 số</text>
  <rect x="310" y="145" width="180" height="30" rx="8" fill="#334155"/>
  <text x="400" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#fef08a" text-anchor="middle">万 (Wàn) = 10,000</text>
  <rect x="310" y="182" width="180" height="30" rx="8" fill="#334155"/>
  <text x="400" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#67e8f9" text-anchor="middle">亿 (Yì) = 100,000,000</text>
  <text x="400" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#34d399" text-anchor="middle">14 亿 = 1.4 tỉ dân</text>

  <!-- Right: 一会儿 & 一共 -->
  <rect x="540" y="100" width="210" height="155" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="645" y="130" font-family="'Noto Serif SC', serif" font-size="14" font-weight="900" fill="#f59e0b" text-anchor="middle">时间与总数</text>
  <text x="555" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 一会儿 (Một lát, một chốc)</text>
  <text x="555" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 一共 (Tổng cộng tất cả)</text>
  <text x="555" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#e2e8f0">• 应该 / 最好 (Lời khuyên)</text>
  <text x="555" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fde68a">文化: 太极拳与八段锦</text>
</svg>`,

  "r4": `<svg viewBox="0 0 800 280" class="w-full h-auto max-w-3xl select-none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="280" rx="20" fill="#0f172a"/>
  <rect x="250" y="20" width="300" height="55" rx="16" fill="url(#g10)"/>
  <text x="400" y="52" font-family="'Noto Serif SC', serif" font-size="19" font-weight="900" fill="#fff" text-anchor="middle">复习四 • 我们的未来</text>
  <text x="400" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#fff" opacity="0.9" text-anchor="middle">Tổng kết Chủ điểm 4 & Toàn sách Tiếng Trung 10</text>
  
  <rect x="60" y="100" width="320" height="155" rx="14" fill="#1e293b" stroke="#9333ea" stroke-width="1.5"/>
  <text x="220" y="128" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#c084fc" text-anchor="middle">第9课: 未来城市</text>
  <text x="80" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 未来, 城市, 智能, 交通, 地铁, 方便</text>
  <text x="80" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#fef08a">• 离合词: 见了一面 / 睡了个好觉</text>
  <text x="80" y="212" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 经常 (Tần suất đơn thuần)</text>
  <text x="80" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 往往 (Quy luật xu hướng có điều kiện)</text>

  <rect x="420" y="100" width="320" height="155" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="580" y="128" font-family="'Noto Serif SC', serif" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle">第10课: 健康与寿命</text>
  <text x="440" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 健康, 寿命, 运动, 睡眠, 保持</text>
  <text x="440" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#34d399">• 一会儿 (Khoảng thời gian ngắn: một lát)</text>
  <text x="440" y="212" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#cbd5e1">• 亿 (100.000.000) & 万 (10.000)</text>
  <text x="440" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#38bdf8">• 一共 (Tổng cộng: 一共多少钱)</text>
</svg>`
};

const outputPath = path.join(__dirname, 'tiengtrung10_diagrams.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(diagrams, null, 2) + ';', 'utf8');
console.log('Successfully generated all 14 SVG diagrams in tiengtrung10_diagrams.js!');
