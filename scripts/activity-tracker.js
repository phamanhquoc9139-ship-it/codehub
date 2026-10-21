/* CodeHub Daily Activity V3.4 — session-aware, no IP/fingerprint/guest identifier. */
(()=>{
'use strict';
if(window.__codehubDailyTrackerV34)return;
window.__codehubDailyTrackerV34=true;
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const trim=(s,n=160)=>String(s??'').trim().replace(/\s+/g,' ').slice(0,n);
let client=null, logged=false, pending=false, lastIdentity=null;
const path=location.pathname;
const isCourse=/\/courses\/[^/]+\.html$|\/tinhoc_10\.html$/i.test(path)||document.querySelector('meta[name="codehub-activity-kind"]')?.content==='subject';
const subject=trim(document.querySelector('meta[name="codehub-activity-name"]')?.content||document.querySelector('h1')?.textContent||document.title);
async function write(user){
 const table=user?'activity_logs':'guest_activity_logs';
 const row=user?{user_id:user.id,event_type:isCourse?'subject_view':'page_view',subject:isCourse?subject:'',lesson:'',page_path:trim(path,500)}:{event_type:isCourse?'subject_view':'page_view',subject:isCourse?subject:'',page_path:trim(path,500)};
 try{const {error}=await client.from(table).insert(row);if(error)console.warn('[CodeHub tracker V3.4]',table,error.message);else logged=true;}catch(e){console.warn('[CodeHub tracker V3.4]',e)}
}
async function record(user){
 if(logged||pending||!client)return;
 const identity=user?.id||'guest';
 if(lastIdentity===identity)return;
 pending=true;lastIdentity=identity;
 try{await write(user)}finally{pending=false}
}
async function start(){
 for(let i=0;i<80&&!window.supabaseClient;i++)await sleep(100);
 client=window.supabaseClient;
 if(!client?.auth){console.warn('[CodeHub tracker V3.4] Supabase chưa sẵn sàng');return}
 // Register before reading session so SIGNED_IN during initialization is not missed.
 const {data:listener}=client.auth.onAuthStateChange((event,session)=>{
   if(event==='SIGNED_IN'||event==='INITIAL_SESSION'){
     // Do not await Supabase calls directly inside auth callback (can deadlock).
     if(session?.user)queueMicrotask(()=>record(session.user));
   }
 });
 try{
   const {data,error}=await client.auth.getSession();
   if(error)throw error;
   if(data?.session?.user){await record(data.session.user);return}
   // Confirm a genuine signed-out state before writing a guest event.
   const {data:check,error:checkError}=await client.auth.getUser();
   if(checkError && !/auth session missing/i.test(checkError.message||'')){
     console.warn('[CodeHub tracker V3.4] Không xác định được phiên:',checkError.message);
     return; // Never turn an auth/network error into a guest event.
   }
   if(check?.user){await record(check.user);return}
   await record(null);
 }catch(e){console.warn('[CodeHub tracker V3.4] Lỗi xác thực; không ghi Khách:',e)}
 window.addEventListener('pagehide',()=>listener?.subscription?.unsubscribe(),{once:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
