'use strict';
const $=id=>document.getElementById(id);
let state=Kiln.initial(0),history=[];
Kiln.levels.forEach((l,i)=>{const o=document.createElement('option');o.value=i;o.textContent=l.name;$('level').append(o);});
function reset(i){state=Kiln.initial(i);history=[];render();}
function render(){
 const l=Kiln.levels[state.level];$('level').value=state.level;$('plan').textContent=l.name;$('heat').textContent=state.heat;$('limit').textContent=' / limit '+l.max;
 $('stages').replaceChildren();l.targets.forEach((t,i)=>{const el=document.createElement('span');el.className='stage'+(i<state.used.length&&!(state.status==='lost'&&i===state.used.length-1)?' done':'')+(i===state.used.length?' current':'');el.textContent=(i+1)+': '+(t[0]===t[1]?t[0]:t[0]+'–'+t[1]);if(i===state.used.length)el.setAttribute('aria-current','step');$('stages').append(el);});
 $('tiles').replaceChildren();l.tiles.forEach((t,i)=>{const b=document.createElement('button');b.textContent=(t>0?'+':'')+t;b.setAttribute('aria-label','Tile '+(i+1)+': '+b.textContent+' heat');b.disabled=state.used.includes(i)||state.status!=='playing';b.onclick=()=>{history.push(state);state=Kiln.play(state,i);render();};$('tiles').append(b);});
 $('status').textContent=state.message;$('undo').disabled=history.length===0;$('next').disabled=state.status!=='won'||state.level===Kiln.levels.length-1;
}
$('undo').onclick=()=>{if(history.length)state=history.pop();render();};$('reset').onclick=()=>reset(state.level);$('next').onclick=()=>{if(state.status==='won'&&state.level<Kiln.levels.length-1)reset(state.level+1);};$('level').onchange=()=>reset(Number($('level').value));render();
