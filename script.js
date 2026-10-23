(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const O=ORCAWEB,esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.documentElement.classList.add('js');
/* dados centralizados */
const wa=`https://wa.me/${O.whatsapp}?text=${encodeURIComponent(O.mensagem)}`;
$$('[data-wa]').forEach(a=>a.href=wa);
$$('[data-mail]').forEach(a=>a.href='mailto:'+O.email);
$$('[data-tel]').forEach(a=>a.href='tel:+'+O.whatsapp);
$$('[data-f]').forEach(n=>n.textContent=O[n.dataset.f]);
$('#yr').textContent=new Date().getFullYear();
/* render */
$('#sv').innerHTML=SERVICOS.map((s,i)=>`<article class="card rv" style="--d:${i*.06}s"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${s[3]}"/></svg><h3>${s[0]}</h3><p>${s[1]}</p><p class="b">${s[2]}</p><a class="more" data-wa href="${wa}" target="_blank" rel="noopener">Falar sobre isso →</a></article>`).join('');
$('#df').innerHTML=DIFERENCIAIS.map((d,i)=>`<article class="card rv" style="--d:${i*.06}s"><h3>${d[0]}</h3><p>${d[1]}</p></article>`).join('');
$('#tc').innerHTML=TECH.map((t,i)=>`<div class="rv" style="--d:${i*.05}s"><b>${t[0]}</b><span>${t[1]}</span></div>`).join('');
$('#pg').innerHTML=PROJETOS.map((p,i)=>{const img=p.imagem?`<picture>${p.imagemMobile?`<source media="(max-width:600px)" srcset="${esc(p.imagemMobile)}">`:''}<img src="${esc(p.imagem)}" alt="Captura do projeto ${esc(p.nome)}" loading="lazy" decoding="async"></picture>`:`<small>Imagem do projeto</small>`;
 return `<article class="pj rv" style="--d:${(i%2)*.1}s"><div class="fr">${img}</div><div class="tx"><em>${esc(p.categoria)}</em><h3>${esc(p.nome)}</h3><p>${esc(p.descricao)}</p><div class="acts">${p.url?`<a href="${esc(p.url)}" target="_blank" rel="noopener">Ver projeto →</a>`:''}<a data-wa href="${wa}" target="_blank" rel="noopener">Quero um projeto assim →</a></div></div></article>`}).join('');
$('#fq').innerHTML=FAQ.map((f,i)=>`<div class="fi rv"><h3><button aria-expanded="false" aria-controls="fa${i}" id="fb${i}">${f[0]}<i></i></button></h3><div class="fa" id="fa${i}" role="region" aria-labelledby="fb${i}"><div><p>${f[1]}</p></div></div></div>`).join('');
$('#fq').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const it=b.closest('.fi'),o=!it.classList.contains('o');$$('.fi.o').forEach(x=>{x.classList.remove('o');$('button',x).setAttribute('aria-expanded','false')});if(o){it.classList.add('o');b.setAttribute('aria-expanded','true')}});
/* menu mobile */
const mo=v=>{const on=v===undefined?!document.body.classList.contains('mo'):v;document.body.classList.toggle('mo',on);$('#bg').setAttribute('aria-expanded',on);$('#bg').setAttribute('aria-label',on?'Fechar menu':'Abrir menu');document.body.style.overflow=on?'hidden':''};
$('#bg').onclick=()=>mo();$$('.mm a').forEach(a=>a.onclick=()=>mo(false));addEventListener('keydown',e=>e.key==='Escape'&&mo(false));
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});$$('.rv').forEach(e=>io.observe(e));
const sio=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('on',e.isIntersecting||e.boundingClientRect.top<0)),{rootMargin:'0px 0px -35% 0px'});$$('.st').forEach(s=>sio.observe(s));
/* scroll */
const nav=$('#nav'),tl=$('#tl');let tk=0;
const onS=()=>{tk=0;nav.classList.toggle('s',scrollY>30);const r=tl.getBoundingClientRect();tl.style.setProperty('--p',Math.max(0,Math.min(1,(innerHeight*.65-r.top)/r.height)))};
addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(onS)},{passive:true});addEventListener('resize',onS);onS();
/* desktop: botões magnéticos + brilho do hero seguindo o mouse */
if(FINE&&!RM){
 $$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
 const h=$('#inicio');addEventListener('pointermove',e=>{if(scrollY>innerHeight)return;h.style.setProperty('--gx',(e.clientX/innerWidth*40+50)+'%');h.style.setProperty('--gy',(e.clientY/innerHeight*30+20)+'%')},{passive:true});
}
})();
