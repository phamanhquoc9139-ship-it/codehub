// CodeHub V3.5 notification center widget
(async()=>{
  try{
    const s=window.supabaseClient;if(!s)return;
    const u=(await s.auth.getUser()).data.user;if(!u)return;
    const p=await s.from("profiles").select("role").eq("id",u.id).single();
    if(p.data?.role!=="student")return;

    const [ar,qr]=await Promise.all([
      s.rpc("codehub_v35_my_announcements"),
      s.rpc("codehub_v342_quiz_deadline_alerts",{p_hours:48})
    ]);
    if(ar.error||qr.error)return;

    const anns=ar.data||[],alerts=qr.data||[];
    const unreadA=anns.filter(x=>!x.is_read).length,unreadQ=alerts.filter(x=>!x.is_read).length;
    const unread=unreadA+unreadQ,nearest=alerts[0],pinned=anns.filter(x=>x.is_pinned).length;

    const box=document.createElement("section");
    box.style.cssText="margin:18px auto;max-width:1600px;padding:0 18px";
    box.innerHTML=`<div style="background:#fff;border-radius:22px;padding:18px;box-shadow:0 8px 28px rgba(15,23,42,.06)">
      <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap">
        <div>
          <div style="font-size:22px;font-weight:900">🔔 Thông báo ${unread?`<span style="color:#dc2626">(${unread} mới)</span>`:""}</div>
          <div style="color:#64748b;margin-top:4px">${alerts.length?`${alerts.length} Quiz sắp hết hạn • `:""}${pinned?`${pinned} thông báo ghim • `:""}${unreadA?`${unreadA} thông báo chưa đọc`:"Không có thông báo mới."}</div>
          ${nearest?`<div style="margin-top:8px;color:#b45309;font-weight:700">⏰ ${nearest.quiz_title}: còn khoảng ${nearest.hours_left} giờ • ${nearest.remaining_attempts} lượt còn lại</div>`:""}
        </div>
        <a href="student-notifications.html" style="background:#2563eb;color:white;text-decoration:none;padding:11px 16px;border-radius:12px;font-weight:800">Xem thông báo</a>
      </div>
    </div>`;
    (document.querySelector("main")||document.body).prepend(box);
  }catch(e){console.warn("CodeHub V3.5 widget:",e)}
})();
