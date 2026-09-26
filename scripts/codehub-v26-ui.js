(function(){
  const $=id=>document.getElementById(id);
  const CACHE_KEY='codehub_identity_v261';

  function ensure(){
    if(!document.getElementById('chToastWrap')){
      const w=document.createElement('div');w.id='chToastWrap';w.className='ch-toast-wrap';document.body.appendChild(w);
    }
    if(!document.getElementById('chLoading')){
      const o=document.createElement('div');o.id='chLoading';o.className='ch-loading';o.innerHTML='<div class="ch-loading-card"><div class="ch-spin"></div><span id="chLoadingText">Đang xử lý...</span></div>';document.body.appendChild(o);
    }
  }
  function toast(message,type='info',title){
    ensure();const box=document.createElement('div');box.className='ch-toast '+(type==='success'?'ok':type==='error'?'bad':type==='warning'?'warn':'');
    const icon=type==='success'?'✅':type==='error'?'⛔':type==='warning'?'⚠️':'ℹ️';
    box.innerHTML=`<div>${icon}</div><div><b>${title||(type==='success'?'Thành công':type==='error'?'Có lỗi':type==='warning'?'Lưu ý':'Thông báo')}</b><small></small></div><button aria-label="Đóng">×</button>`;
    box.querySelector('small').textContent=message;box.querySelector('button').onclick=()=>box.remove();$('chToastWrap').appendChild(box);setTimeout(()=>box.remove(),4500)
  }
  function loading(on,text='Đang xử lý...'){ensure();$('chLoadingText').textContent=text;$('chLoading').classList.toggle('on',!!on)}
  function forbidden(reason='Bạn không có quyền truy cập nội dung này.'){location.href='403.html?reason='+encodeURIComponent(reason)}
  async function logout(){try{localStorage.removeItem(CACHE_KEY);if(window.supabaseClient)await window.supabaseClient.auth.signOut()}finally{location.href='login.html'}}
  function initials(name=''){
    const p=String(name||'').trim().split(/\s+/).filter(Boolean);if(!p.length)return 'U';
    return (p.length===1?p[0][0]:(p[0][0]+p[p.length-1][0])).toUpperCase();
  }
  function roleLabel(role){const r=String(role||'').toLowerCase();return r==='admin'?'Quản trị viên':r==='teacher'?'Giáo viên':r==='student'?'Học sinh':'Tài khoản'}
  function readCache(){try{return JSON.parse(localStorage.getItem(CACHE_KEY)||'null')}catch{return null}}
  function writeCache(v){try{localStorage.setItem(CACHE_KEY,JSON.stringify(v))}catch{}}
  function paintIdentity(identity={}){
    const role=String(identity.role||'').toLowerCase(),name=String(identity.full_name||identity.name||'').trim();
    const badge=$('chRoleBadge'),nm=$('chUserName'),av=$('chAvatar');
    if(badge){badge.textContent=roleLabel(role);badge.classList.toggle('admin',role==='admin')}
    if(nm)nm.textContent=name||roleLabel(role);
    if(av)av.textContent=initials(name||roleLabel(role));
  }
  function setIdentity(full_name,role,email=''){
    const identity={full_name:String(full_name||'').trim(),role:String(role||'').trim().toLowerCase(),email:String(email||'')};
    writeCache(identity);paintIdentity(identity);return identity;
  }
  function setRole(role){const c=readCache()||{};setIdentity(c.full_name||'',role,c.email||'')}
  async function hydrateIdentity(){
    const cached=readCache();if(cached)paintIdentity(cached);
    try{
      const s=window.supabaseClient;if(!s)return;
      const {data:{user}}=await s.auth.getUser();if(!user)return;
      const {data:p}=await s.from('profiles').select('full_name,role').eq('id',user.id).maybeSingle();
      if(p)setIdentity(p.full_name,p.role,user.email||'');
    }catch(e){/* Header identity is best-effort; page RLS remains authoritative. */}
  }
  function mountHeader({title='CodeHub',role='',active='',breadcrumbs=[]}={}){
    const cached=readCache()||{};const initialRole=role||cached.role||'';const initialName=cached.full_name||'';
    const bar=document.createElement('div');bar.className='ch-topbar';
    bar.innerHTML=`<div class="ch-topbar-inner"><a class="ch-brand" href="index.html"><span class="ch-brand-mark">&lt;/&gt;</span><span>CodeHub</span><small class="ch-mini-version">2.6.1</small></a><div class="ch-nav"><a href="teacher.html" ${active==='dashboard'?'class="primary"':''}>Dashboard</a><a href="courses.html" ${active==='courses'?'class="primary"':''}>Khóa học</a><a href="quizzes.html" ${active==='quizzes'?'class="primary"':''}>Quiz</a><a href="ai-quiz-generator.html" ${active==='ai'?'class="primary"':''}>AI Quiz</a><div class="ch-userbox" title="Tài khoản đang đăng nhập"><span id="chAvatar" class="ch-avatar">${initials(initialName||roleLabel(initialRole))}</span><span class="ch-usertext"><b id="chUserName">${initialName||roleLabel(initialRole)}</b><small id="chRoleBadge" class="ch-role-badge ${initialRole==='admin'?'admin':''}">${roleLabel(initialRole)}</small></span></div><button id="chLogout">Đăng xuất</button></div></div>`;
    document.body.insertBefore(bar,document.body.firstChild);bar.querySelector('#chLogout').onclick=logout;
    if(breadcrumbs.length){const c=document.createElement('div');c.className='ch-crumbs';c.innerHTML=breadcrumbs.map(x=>x.href?`<a href="${x.href}">${x.label}</a>`:`<strong>${x.label}</strong>`).join('<span>›</span>');bar.insertAdjacentElement('afterend',c)}
    if(cached)paintIdentity(cached);hydrateIdentity();
  }
  function smartBack(fallback='teacher.html'){
    try{if(document.referrer&&new URL(document.referrer).origin===location.origin){history.back();return}}catch{}
    location.href=fallback;
  }
  window.CodeHubUI={toast,loading,forbidden,logout,mountHeader,setRole,setIdentity,hydrateIdentity,smartBack};
  document.addEventListener('DOMContentLoaded',ensure);
})();
