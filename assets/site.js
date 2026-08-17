
const bar=document.querySelector('.progress span');
const links=[...document.querySelectorAll('.guide a[href^="#"]')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
function tick(){
 const h=document.documentElement.scrollHeight-innerHeight;
 if(bar) bar.style.width=(h>0?Math.min(100,scrollY/h*100):0)+'%';
 let current=sections[0];
 sections.forEach(s=>{if(s.getBoundingClientRect().top<150) current=s});
 links.forEach(a=>a.classList.toggle('active',current&&a.getAttribute('href')==='#'+current.id));
}
addEventListener('scroll',tick,{passive:true});tick();
