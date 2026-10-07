const $=(s,r=document)=>r.querySelector(s),D=SITE;
const href=u=>u.startsWith("[ADD")?"#":u;
const tags=a=>a.map(t=>`<span class="tag">${t}</span>`).join("");
document.title=`${D.name} | Mechatronics & Robotics Portfolio`;
$("#hero").innerHTML=`<div class="wrap"><div><span class="label mono">// hello, I'm</span><h1>${D.name}</h1><p class="sub mono">${D.title}</p><p class="tl">${D.tagline}</p>
<div class="btns"><a class="btn p" href="#projects">View Projects</a><a class="btn" href="${href(D.links.resume)}">Download Resume</a><a class="btn" href="${href(D.links.linkedin)}">LinkedIn</a></div></div>
<div class="photo" role="img" aria-label="Profile photo placeholder">[ADD: profile photo<br>assets/me.jpg]</div></div>
<div class="flight" aria-hidden="true"><svg width="100%" height="90" preserveAspectRatio="none"><path d="M0 70 H200 L230 40 H520 L550 70 H900 L930 30 H2400"/></svg>
<svg class="plane" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg></div>`;
$("#about").innerHTML=`<div class="wrap about"><span class="label mono">about</span><h2>Engineer. Builder. Communicator.</h2>${D.about.map(p=>`<p>${p}</p>`).join("")}<div class="facts">${D.facts.map(f=>`<div><span class="mono">${f[0]}</span>${f[1]}</div>`).join("")}</div></div>`;
$("#projects").innerHTML=`<div class="wrap"><span class="label mono">projects</span><h2>Things I've built</h2><div class="grid">${D.projects.map((p,i)=>`<div class="card rv"><div class="ph">${p.img}</div><h3>${p.title}</h3><p>${p.desc}</p>${tags(p.tags)}<p class="mono" style="color:var(--mut)">Role: ${p.role}</p><button data-i="${i}">Details</button></div>`).join("")}</div></div>`;
$("#experience").innerHTML=`<div class="wrap"><span class="label mono">experience</span><h2>Where I contribute</h2><div class="tl-v">${D.experience.map(e=>`<article class="rv"><h3>${e.role}</h3><p>${e.org}</p><p class="mono">${e.when}</p>${tags(e.tools)}</article>`).join("")}</div></div>`;
$("#skills").innerHTML=`<div class="wrap"><span class="label mono">skills</span><h2>Toolkit</h2><div class="skills">${Object.entries(D.skills).map(([k,v])=>`<div class="rv"><h3>${k}</h3>${tags(v)}</div>`).join("")}</div>
<h3 style="margin:36px 0 14px">Certifications</h3><div class="grid">${D.certs.map(c=>`<div class="card"><h3>${c.name}</h3><p class="mono">${c.by} · ${c.when}</p><a href="${href(c.link)}">${c.link}</a></div>`).join("")}</div></div>`;
$("#goals").innerHTML=`<div class="wrap"><span class="label mono">flight path</span><h2>Goals & vision</h2><div class="path">${D.goals.map(g=>`<div class="card rv"><span class="mono" style="color:var(--cy)">${g.year}</span><h3>${g.term}</h3><ul>${g.items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`).join("")}</div></div>`;
$("#aviation").innerHTML=`<div class="wrap"><span class="label mono">aviation corner</span><h2>Why aviation</h2><p style="max-width:62ch">${D.aviation}</p></div>`;
$("#contact").innerHTML=`<div class="wrap"><span class="label mono">contact</span><h2>Let's build something</h2><form id="f"><input name="n" placeholder="Your name" aria-label="Your name" required><input name="e" type="email" placeholder="Your email" aria-label="Your email" required><textarea name="m" rows="4" placeholder="Message" aria-label="Message" required></textarea><button class="btn p" type="submit">Send message</button></form>
<p class="mono">Mumbai, India · <a href="${href(D.links.linkedin)}">LinkedIn</a> · <a href="${href(D.links.github)}">GitHub</a></p></div>`;
$("#f").onsubmit=e=>{e.preventDefault();const f=e.target;location.href=`mailto:${D.email}?subject=${encodeURIComponent("Portfolio message from "+f.n.value)}&body=${encodeURIComponent(f.m.value+"\n\n"+f.e.value)}`};
const dlg=$("#dlg");
document.addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(!b)return;const p=D.projects[b.dataset.i];
$("#dlgbody").innerHTML=`<h3>${p.title}</h3><p>${p.desc}</p>${tags(p.tags)}<p><b>Role:</b> ${p.role}</p><p><b>Outcome:</b> ${p.outcome}</p><p>${p.more}</p>`;dlg.showModal()});
$("#close").onclick=()=>dlg.close();
const root=document.documentElement,sv=localStorage.getItem("theme");if(sv)root.dataset.theme=sv;
$("#theme").onclick=()=>{const t=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=t;localStorage.setItem("theme",t)};
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&(x.target.classList.add("in"),io.unobserve(x.target))),{threshold:.1});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
