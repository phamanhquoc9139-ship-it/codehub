const fs = require('fs');

function fixTheme(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. In <head>, make sure tailwind.config is placed BEFORE cdn.tailwindcss.com OR tailwind script has the proper config
  // In Tailwind CDN docs: 
  // "Include tailwind.config object before or after the script tag, or add custom style rules"
  
  // 2. Add bulletproof CSS fallback to <style>
  const stylePatch = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: #334155; }

    /* Bulletproof Dark/Light Mode Fallbacks */
    html.dark {
      color-scheme: dark;
    }
    html.dark body {
      background-color: #0b0f19 !important;
      color: #f1f5f9 !important;
    }
    html.dark .dark\\:bg-gray-850,
    html.dark .bg-gray-850,
    html.dark .lesson-section,
    html.dark .nav-lesson-container {
      background-color: #151b28 !important;
      border-color: #1e293b !important;
    }
    html.dark .bg-white:not(.keep-white) {
      background-color: #151b28 !important;
      border-color: #1e293b !important;
      color: #f1f5f9;
    }
    html.dark .bg-slate-50 {
      background-color: rgba(30, 41, 59, 0.7) !important;
      border-color: #334155 !important;
    }
    html.dark .bg-gray-50:not(svg) {
      background-color: #1e293b !important;
      border-color: #334155 !important;
    }
    html.dark .text-gray-900 {
      color: #f8fafc !important;
    }
    html.dark .text-gray-800 {
      color: #f1f5f9 !important;
    }
    html.dark .text-gray-700 {
      color: #cbd5e1 !important;
    }
    html.dark .text-gray-600 {
      color: #94a3b8 !important;
    }
    
    /* Light Mode Clean Contrasts */
    html:not(.dark) body {
      background-color: #f8fafc !important;
      color: #0f172a !important;
    }
    html:not(.dark) .lesson-section {
      background-color: #ffffff !important;
      border-color: #e2e8f0 !important;
      color: #0f172a !important;
    }
    html:not(.dark) .lesson-section h3,
    html:not(.dark) .lesson-section h4,
    html:not(.dark) .lesson-section h5 {
      color: #0f172a !important;
    }
  </style>`;

  // Replace existing <style>...</style>
  content = content.replace(/<style>[\s\S]*?<\/style>/i, stylePatch.trim());

  // 3. Ensure theme toggle icon and script work seamlessly
  const newToggleFn = `function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    }
    function updateThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.toggle('hidden', !isDark));
      document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.toggle('hidden', isDark));
    }
    document.addEventListener('DOMContentLoaded', updateThemeIcons);`;

  content = content.replace(/function toggleDarkMode\(\)[\s\S]*?function setChapterFilter/i, newToggleFn + '\n\n    // Filter by Chapter\n    function setChapterFilter');

  // Update theme toggle button in header to use explicit icon classes
  content = content.replace(
    /<button onclick="toggleDarkMode\(\)" class="w-9 h-9[^"]*" title="Chuyển chế độ sáng\/tối">[\s\S]*?<\/button>/i,
    `<button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition cursor-pointer" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon theme-icon-moon text-sm"></i>
          <i class="fa-solid fa-sun theme-icon-sun text-sm text-amber-400 hidden"></i>
        </button>`
  );

  // Replace dark:bg-gray-850 with standard dark:bg-gray-900 in HTML classes as well
  content = content.replace(/dark:bg-gray-850/g, 'dark:bg-gray-900');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated:', filePath);
}

fixTheme('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html');
fixTheme('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_7.html');
