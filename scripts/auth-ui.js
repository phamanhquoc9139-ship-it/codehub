document.addEventListener('DOMContentLoaded', async () => {
  const client = window.supabaseClient;
  const area = document.getElementById('auth-area');
  if (!client || !area) return;

  const escapeHTML = (value = '') => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  function showLoginButton() {
    area.innerHTML = `<a href="login.html" class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out">Đăng Nhập</a>`;
  }

  async function showUser(user) {
    const { data: profile, error } = await client
      .from('profiles')
      .select('full_name, student_code, class_name, role')
      .eq('id', user.id)
      .maybeSingle();

    if (error) console.warn('Không đọc được hồ sơ:', error.message);

    const name = profile?.full_name || user.user_metadata?.full_name || user.email || 'Tài khoản';
    const sub = profile?.role === 'teacher' ? 'Giáo viên' : (profile?.class_name || 'Học sinh');

    area.innerHTML = `
      <div class="relative" id="codehub-user-menu">
        <button id="codehub-user-button" type="button"
          class="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">👤</span>
          <span class="hidden sm:flex flex-col items-start leading-tight">
            <span class="max-w-40 truncate">${escapeHTML(name)}</span>
            <span class="text-xs font-normal text-blue-100">${escapeHTML(sub)}</span>
          </span>
          <span aria-hidden="true">▾</span>
        </button>
        <div id="codehub-user-dropdown"
          class="hidden absolute right-0 mt-2 w-52 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl overflow-hidden z-[100]">
          <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <div class="font-semibold text-gray-900 dark:text-white truncate">${escapeHTML(name)}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400 truncate">${escapeHTML(user.email || '')}</div>
          </div>
          <button id="codehub-logout" type="button"
            class="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Đăng xuất</button>
        </div>
      </div>`;

    const button = document.getElementById('codehub-user-button');
    const dropdown = document.getElementById('codehub-user-dropdown');
    button?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown?.classList.toggle('hidden');
    });
    document.addEventListener('click', () => dropdown?.classList.add('hidden'), { once: true });
    document.getElementById('codehub-logout')?.addEventListener('click', async () => {
      const { error: signOutError } = await client.auth.signOut();
      if (signOutError) return alert('Không thể đăng xuất: ' + signOutError.message);
      window.location.href = 'index.html';
    });
  }

  const { data: { session } } = await client.auth.getSession();
  if (session?.user) await showUser(session.user); else showLoginButton();

  client.auth.onAuthStateChange((_event, session) => {
    setTimeout(() => session?.user ? showUser(session.user) : showLoginButton(), 0);
  });
});
