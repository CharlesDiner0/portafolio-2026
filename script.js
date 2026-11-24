const grid=document.querySelector('.project-grid');
const filters=[...document.querySelectorAll('.filter')];
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
  document.querySelectorAll('.project-card').forEach(c=>{c.hidden=btn.dataset.filter!=='all' && btn.dataset.filter!==c.dataset.type;});
  if(grid)grid.dataset.view=btn.dataset.filter;
}));
const modal=document.querySelector('.modal');let previousFocus=null;
function closeModal(){if(!modal)return;modal.setAttribute('aria-hidden','true');document.body.style.overflow='';previousFocus?.focus();}
document.querySelectorAll('[data-preview]').forEach(b=>b.addEventListener('click',()=>{
  const card=b.closest('.project-card');if(!card||!modal)return;previousFocus=b;
  document.getElementById('modal-title').textContent=card.dataset.title;
  document.getElementById('modal-description').textContent=card.dataset.desc;
  document.getElementById('modal-image').innerHTML=card.querySelector('.project-image').innerHTML;
  document.getElementById('modal-page').href=card.dataset.page;
  modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  document.getElementById('modal-close').focus();
}));
document.getElementById('modal-close')?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if(e.key==='Tab'&&modal?.getAttribute('aria-hidden')==='false'){
  const focus=[...modal.querySelectorAll('a,button')];if(!focus.length)return;
  if(e.shiftKey&&document.activeElement===focus[0]){e.preventDefault();focus.at(-1).focus();}
  else if(!e.shiftKey&&document.activeElement===focus.at(-1)){e.preventDefault();focus[0].focus();}
}});
