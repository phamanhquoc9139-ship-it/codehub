import os
import re

file_data = {
    '10': [
        {'id': 'chuong-1', 'title': 'Cấu tạo nguyên tử', 'icon': 'fa-atom'},
        {'id': 'chuong-2', 'title': 'Bảng tuần hoàn', 'icon': 'fa-table-cells'},
        {'id': 'chuong-3', 'title': 'Liên kết hoá học', 'icon': 'fa-link'},
        {'id': 'chuong-4', 'title': 'Phản ứng oxi hoá - khử', 'icon': 'fa-fire'},
        {'id': 'chuong-5', 'title': 'Năng lượng hoá học', 'icon': 'fa-bolt'},
        {'id': 'chuong-6', 'title': 'Tốc độ phản ứng', 'icon': 'fa-stopwatch'},
        {'id': 'chuong-7', 'title': 'Nhóm halogen', 'icon': 'fa-vial-virus'}
    ],
    '11': [
        {'id': 'chuong-1', 'title': 'Cân bằng hoá học', 'icon': 'fa-scale-balanced'},
        {'id': 'chuong-2', 'title': 'Nitrogen - Sulfur', 'icon': 'fa-cloud'},
        {'id': 'chuong-3', 'title': 'Đại cương hoá hữu cơ', 'icon': 'fa-flask-vial'},
        {'id': 'chuong-4', 'title': 'Hydrocarbon', 'icon': 'fa-fire'},
        {'id': 'chuong-5', 'title': 'Alcohol - Phenol', 'icon': 'fa-vial'},
        {'id': 'chuong-6', 'title': 'Carbonyl - Carboxylic', 'icon': 'fa-droplet'}
    ],
    '12': [
        {'id': 'chu-de-1', 'title': 'Ester - Lipid', 'icon': 'fa-bottle-droplet'},
        {'id': 'chu-de-2', 'title: 'Carbohydrate', 'icon': 'fa-cubes'},
        {'id': 'chu-de-3', 'title': 'Hợp chất chứa Nitrogen', 'icon': 'fa-dna'},
        {'id': 'chu-de-4', 'title': 'Polymer', 'icon': 'fa-recycle'},
        {'id': 'chu-de-5', 'title': 'Pin điện và Điện phân', 'icon': 'fa-battery-full'},
        {'id': 'chu-de-6', 'title': 'Đại cương kim loại', 'icon': 'fa-gem'},
        {'id': 'chu-de-7', 'title': 'Các nhóm kim loại', 'icon': 'fa-shield-halved'}
    ]
}

for grade, chapters in file_data.items():
    filepath = f"courses/hoahoc_{grade}.html"
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    header_start = content.find('<header')
    header_end = content.find('</header>') + 9
    
    if header_start == -1 or header_end < 9:
        continue
        
    old_header = content[header_start:header_end]
    
    bg_match = re.search(r'class="(bg-gradient-to-r[^"]+)"', old_header)
    bg_classes = bg_match.group(1) if bg_match else "bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 shadow-inner"
    bg_classes = bg_classes.replace('py-16', 'py-20')
    if 'text-center' not in bg_classes:
        bg_classes += ' text-center'
        
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', old_header, re.DOTALL)
    title = h1_match.group(1).strip() if h1_match else f"Hóa Học Lớp {grade}"
    
    p_match = re.search(r'<p[^>]*>(.*?)</p>', old_header, re.DOTALL)
    desc = p_match.group(1).strip() if p_match else ""
    
    links_html = []
    for idx, chap in enumerate(chapters):
        is_last = (idx == len(chapters) - 1)
        btn_class = "px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 border border-orange-400 transition-all font-medium text-sm flex items-center gap-2 shadow-sm text-white" if is_last else "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium text-sm flex items-center gap-2 text-white"
        
        prefix = "Chủ đề" if grade == '12' else "Chương"
        links_html.append(f"""          <a href="#{chap['id']}" class="{btn_class}">
            <i class="fa-solid {chap['icon']} text-white/80"></i> {prefix} {idx + 1}: {chap['title']}
          </a>""")
          
    links_str = "\n".join(links_html)
    
    new_header = f"""<header class="{bg_classes}">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30 text-white">
        <i class="fa-solid fa-book-open"></i> CHƯƠNG TRÌNH GDPT 2018 - KẾT NỐI TRI THỨC & PHÁT TRIỂN NĂNG LỰC
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md text-white">{title}</h1>
      <p class="text-lg text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
        {desc}
      </p>
      <div class="flex flex-wrap justify-center gap-3">
{links_str}
      </div>
    </div>
  </header>"""

    content = content.replace(old_header, new_header)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated header for hoahoc_{grade}.html")
