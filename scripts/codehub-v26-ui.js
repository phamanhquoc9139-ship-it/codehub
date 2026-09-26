(function(){
  const $=id=>document.getElementById(id);
  function ensure(){
    if(!document.getElementById('chToastWrap')){
      const w=document.createElement('div');w.id='chToastWrap';w.className='ch-toast-wrap';document.body.appendChild(w);
    }
    if(!document.getElementById('chLoading')){
      const o=document.createElement('div');o.id='chLoading';o.className='ch-loading';o.innerHTML='<div class="ch-loading-card"><div class="ch-spin"></div><span id="chLoadingText">Đang xử lý...</span></div>';document.body.appendChild(o);
    }
  }
  function toast(message,type='info',title){ensure();const box=document.createElement('div');box.className='ch-toast '+(type==='success'?'ok':type==='error'?'bad':type==='warning'?'warn':'');const icon=type==='success'?'✅':type==='error'?'⛔':type==='warning'?'⚠️':'ℹ️';box.innerHTML=`<div>${icon}</div><div><b>${title|| (type==='success'?'Thành công':type==='error'?'Có lỗi':type==='warning'?'Lưu ý':'Thông báo')}</b><small></small></div><button aria-label="Đóng">×</button>`;box.querySelector('small').textContent=message;box.querySelector('button').onclick=()=>box.remove();$('chToastWrap').appendChild(box);setTimeout(()=>box.remove(),4500)}
  function loading(on,text='Đang xử lý...'){ensure();$('chLoadingText').textContent=text;$('chLoading').classList.toggle('on',!!on)}
  function forbidden(reason='Bạn không có quyền truy cập nội dung này.'){location.href='403.html?reason='+encodeURIComponent(reason)}
  async function logout(){try{if(window.supabaseClient)await window.supabaseClient.auth.signOut()}finally{location.href='login.html'}}
  function mountHeader({title='CodeHub',role='',active='',breadcrumbs=[]}={}){
    const bar=document.createElement('div');bar.className='ch-topbar';bar.innerHTML=`<div class="ch-topbar-inner"><a class="ch-brand" href="index.html"><span class="ch-brand-mark">&lt;/&gt;</span><span>CodeHub</span></a><div class="ch-nav"><a href="teacher.html">Dashboard</a><a href="courses.html" ${active==='courses'?'class="primary"':''}>Khóa học</a><a href="quizzes.html" ${active==='quizzes'?'class="primary"':''}>Quiz</a><a href="ai-quiz-generator.html" ${active==='ai'?'class="primary"':''}>AI Quiz</a><span id="chRoleBadge" class="ch-role-badge">${role||'Đang xác định quyền...'}</span><button id="chLogout">Đăng xuất</button></div></div>`;document.body.insertBefore(bar,document.body.firstChild);bar.querySelector('#chLogout').onclick=logout;
    if(breadcrumbs.length){const c=document.createElement('div');c.className='ch-crumbs';c.innerHTML=breadcrumbs.map((x,i)=>x.href?`<a href="${x.href}">${x.label}</a>`:`<strong>${x.label}</strong>`).join('<span>›</span>');bar.insertAdjacentElement('afterend',c)}
  }
  function setRole(role){const b=$('chRoleBadge');if(!b)return;const r=String(role||'').toLowerCase();b.textContent=r==='admin'?'Quản trị viên':r==='teacher'?'Giáo viên':r||'Người dùng';b.classList.toggle('admin',r==='admin')}
  window.CodeHubUI={toast,loading,forbidden,logout,mountHeader,setRole};
  document.addEventListener('DOMContentLoaded',ensure);
})();
