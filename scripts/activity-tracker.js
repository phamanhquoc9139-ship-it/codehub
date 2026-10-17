/* CodeHub activity tracker: only authenticated users; no IP/device fingerprinting */
(()=>{
 const wait=async()=>{for(let i=0;i<35&&!window.supabaseClient;i++)await new Promise(r=>setTimeout(r,150));return window.supabaseClient};
 let user=null,client=null;
 const titleFor=(a)=>a.closest('article')?.querySelector('h1,h2,h3')?.textContent?.trim()||a.textContent.trim().replace(/\s+/g,' ').slice(0,150);
 async function log(event,subject='',lesson='',path=location.pathname){if(!client||!user)return;try{await client.from('activity_logs').insert({user_id:user.id,event_type:event,subject:subject.slice(0,160),lesson:lesson.slice(0,180),page_path:path.slice(0,500)})}catch(e){console.warn('Activity log:',e)}}
 document.addEventListener('DOMContentLoaded',async()=>{
  client=await wait();if(!client)return;
  const result=await client.auth.getUser();user=result.data?.user;if(!user)return;
  const isCourse=/\/courses\/|\/tinhoc_10\.html$/.test(location.pathname);
  const courseName=document.querySelector('h1')?.textContent?.trim().replace(/\s+/g,' ').slice(0,160)||document.title;
  await log(isCourse?'subject_view':'page_view',isCourse?courseName:'');
  document.addEventListener('click',e=>{
   const a=e.target.closest('a[href]');if(!a)return;
   const url=new URL(a.href,location.href);
   if(url.origin!==location.origin)return;
   if(url.hash&&/^#bai-\d+$/.test(url.hash)&&isCourse){log('lesson_view',courseName,titleFor(a),location.pathname+url.hash);return}
   if(/\/courses\/.*\.html$|\/tinhoc_10\.html$/.test(url.pathname)){
    const name=a.closest('.course-card')?.querySelector('h3')?.textContent?.trim()||a.textContent.trim()||url.pathname.split('/').pop();
    log('subject_click',name,'',url.pathname);
   }
  },true);
  if(isCourse&&/^#bai-\d+$/.test(location.hash))log('lesson_view',courseName,location.hash,location.pathname+location.hash);
 });
 window.CodeHubLogAI=async function(subject,count,status){await log('ai_quiz',String(subject||''),JSON.stringify({count:Number(count)||0,status:String(status||'unknown')}))};
})();
