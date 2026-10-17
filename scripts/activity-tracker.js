/* CodeHub Daily Activity V3: no IP, no fingerprint, no persistent guest identifier. */
(()=>{
'use strict';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const trim=(s,n=160)=>String(s||'').trim().replace(/\s+/g,' ').slice(0,n);
let client=null, user=null;
async function send(event,subject='',path=location.pathname){
 if(!client)return;
 const isUser=!!user;
 const table=isUser?'activity_logs':'guest_activity_logs';
 const row=isUser?{user_id:user.id,event_type:event,subject:trim(subject),lesson:'',page_path:trim(path,500)}:{event_type:event,subject:trim(subject),page_path:trim(path,500)};
 try{const {error}=await client.from(table).insert(row);if(error)console.warn('[CodeHub tracker]',table,error.message)}catch(e){console.warn('[CodeHub tracker]',e)}
}
function subjectOf(a){return trim(a.closest('#courses-grid > div,.course-card,article')?.querySelector('h3,h2')?.textContent||a.textContent||new URL(a.href).pathname.split('/').pop())}
async function start(){
 for(let i=0;i<50&&!window.supabaseClient;i++)await sleep(100);
 client=window.supabaseClient;if(!client)return;
 try{const {data}=await client.auth.getUser();user=data?.user||null}catch(e){console.warn('[CodeHub tracker auth]',e)}
 const isCourse=/\/courses\/[^/]+\.html$|\/tinhoc_10\.html$/i.test(location.pathname)||document.querySelector('meta[name="codehub-activity-kind"]')?.content==='subject';
 const course=trim(document.querySelector('meta[name="codehub-activity-name"]')?.content||document.querySelector('h1')?.textContent||document.title);
 await send(isCourse?'subject_view':'page_view',isCourse?course:'');
 document.addEventListener('click',e=>{
  const a=e.target.closest?.('a[href]');if(!a)return;
  let url;try{url=new URL(a.href,location.href)}catch{return}
  if(url.origin!==location.origin)return;
  if(/\/courses\/[^/]+\.html$|\/tinhoc_10\.html$/i.test(url.pathname)){
    // On navigation, the destination page records subject_view; no duplicate click insert.
    // This also works for guests once tracker is installed on course pages.
  }
 },true);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
