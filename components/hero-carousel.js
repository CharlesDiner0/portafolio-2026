/* V6 / portada rotativa. Sin bibliotecas externas; compatible con archivos locales y GitHub Pages. */
(()=>{
 const root=document.querySelector('.hero-carousel');
 if(!root)return;
 const slides=[...root.querySelectorAll('[data-hero-slide]')];
 const projects=[
  {title:'DOS REALIDADES',category:'VISIÓN COMPUTACIONAL',href:'proyectos/dos-realidades.html'},
  {title:'PULSO 90',category:'IMAGEN Y SONIDO',href:'proyectos/pulso-90.html'},
  {title:'A 12 PASOS DE LA GLORIA',category:'INTERACCIÓN TÁCTIL',href:'proyectos/12-pasos.html'},
  {title:'SHIGOTO',category:'INDUMENTARIA / 2025',href:'proyectos/shigoto.html'},
  {title:'001',category:'INDUMENTARIA / 2024',href:'proyectos/001.html'}
 ];
 const link=root.querySelector('#hero-project-link');
 const index=root.querySelector('#hero-index');
 const category=root.querySelector('#hero-project-category');
 const count=root.querySelector('#hero-count');
 const toggle=root.querySelector('#hero-toggle');
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,timer=null,paused=reduce.matches;
 const pad=n=>String(n).padStart(2,'0');
 function show(next){
  current=(next+slides.length)%slides.length;
  slides.forEach((s,i)=>{s.classList.toggle('is-active',i===current);s.setAttribute('aria-hidden',String(i!==current));});
  const p=projects[current];link.textContent=p.title+' ↗';link.href=p.href;
  index.textContent='ARCHIVO / '+pad(current+1)+'—'+pad(slides.length);
  category.textContent=p.category;count.textContent=pad(current+1)+' / '+pad(slides.length);
 }
 function stop(){if(timer!==null){clearInterval(timer);timer=null;}}
 function start(){stop();if(!paused&&!document.hidden)timer=setInterval(()=>show(current+1),6500);}
 function reflect(){toggle.textContent=paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',paused?'Reanudar cambio automático':'Pausar cambio automático');toggle.setAttribute('aria-pressed',String(paused));}
 function manual(delta){show(current+delta);start();}
 root.querySelector('#hero-prev').addEventListener('click',()=>manual(-1));
 root.querySelector('#hero-next').addEventListener('click',()=>manual(1));
 toggle.addEventListener('click',()=>{paused=!paused;reflect();start();});
 root.addEventListener('mouseenter',stop);
 root.addEventListener('mouseleave',start);
 root.addEventListener('focusin',stop);
 root.addEventListener('focusout',event=>{if(!root.contains(event.relatedTarget))start();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start();});
 reduce.addEventListener?.('change',event=>{if(event.matches){paused=true;reflect();stop();}});
 show(0);reflect();start();
})();
