const $=s=>document.querySelector(s);let cur='home',hist=[];
function go(id,b){if(!b&&id!==cur)hist.push(cur);cur=id;document.querySelectorAll('section').forEach(e=>e.classList.toggle('on',e.id===id));document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.s===id));scrollTo(0,0);{const vd=$('#vid');if(vd)vd.pause();const a=$('#au');a.pause();$('#vin').classList.remove('spin');$('#hint').textContent='Press the record for your song'}if(id==='memories'){bp=0;bookUpd()}if(id==='message'){$('#env').style.display='';$('#letter').hidden=true}}

let bp=0;function bookPages(){return [...document.querySelectorAll('#book .pg')].reverse()}
function bookUpd(){const p=bookPages();p.forEach((e,i)=>{e.classList.toggle('fl2',i<bp);e.style.zIndex=i<bp?i:100-i});const n=p.length;$('#cnt').textContent=bp===0?'Cover':(bp===n-1?'The End':bp+' / '+(n-2))}
function turn(d){event&&event.stopPropagation&&event.stopPropagation();const n=bookPages().length;if(d>0&&bp===n-1)bp=0;else bp=Math.max(0,Math.min(n-1,bp+d));bookUpd();if(d>0&&bp>0)pop(6,['\u{1F499}'])}
function goBack(){go(hist.pop()||'home',true)}
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>go(a.dataset.s));
function openEnv(){$('#env').style.display='none';$('#letter').hidden=false;pop(16,['\u{1F499}','\u{1F338}'])}
function pop(n,set){for(let i=0;i<n;i++){const p=document.createElement('span');p.className='p';p.textContent=set[i%set.length];p.style.left='50%';p.style.top='50%';const a=Math.random()*6.28,d=150+Math.random()*350;p.style.setProperty('--x',Math.cos(a)*d+'px');p.style.setProperty('--y',Math.sin(a)*d+'px');p.style.setProperty('--r',Math.random()*720+'deg');document.body.appendChild(p);setTimeout(()=>p.remove(),2300)}}
let done=false;function boom(){if(done)return;done=true;pop(60,['\u{1F338}','\u{1F337}','\u{1F33C}','\u{1F490}','\u{1F33A}','\u{1F499}']);const i=$('#intro');i.style.opacity=0;setTimeout(()=>i.remove(),1000)}
setTimeout(boom,6000);
function song(){const a=$('#au'),v=$('#vin');if(a.paused){a.play().catch(()=>{});v.classList.add('spin');$('#hint').textContent='Playing... tap again to pause';pop(12,['\u{1F499}','\u{1F3B5}'])}else{a.pause();v.classList.remove('spin');$('#hint').textContent='Press the record for your song'}}
