const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add gray 750, 850, 950 to tailwind.config
  const oldTw = `extend: {
          colors: {
            dark: {`;
  
  const newTw = `extend: {
          colors: {
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0b0f19'
            },
            dark: {`;

  if (content.includes(oldTw)) {
    content = content.replace(oldTw, newTw);
  } else {
    console.log('oldTw not matched in', filePath);
  }

  // 2. Add immediate initTheme in head if not present
  const headInit = `  <!-- Theme Init immediately to prevent flash -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>`;

  if (!content.includes('<!-- Theme Init immediately')) {
    content = content.replace('</head>', headInit);
  }

  // 3. Update body to dark:bg-gray-950
  content = content.replace(
    'class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors"',
    'class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen transition-colors"'
  );

  // 4. Update toggleDarkMode function at bottom
  const oldToggle = `    // Theme toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }`;

  const newToggle = `    // Theme toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }`;

  if (content.includes(oldToggle)) {
    content = content.replace(oldToggle, newToggle);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', filePath);
}

fixFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html');
fixFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_7.html');
