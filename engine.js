/* Kiln Balance: original deterministic puzzle rules. */
(function(root) {
'use strict';
const levels = [
 {name:'First firing',start:2,max:9,tiles:[3,-2,4,-1],targets:[[5,5],[3,3],[7,7],[6,6]]},
 {name:'Cooling window',start:4,max:10,tiles:[-2,3,4,-3,2],targets:[[6,8],[3,6],[6,9],[3,6],[8,8]]},
 {name:'Fine glaze',start:3,max:12,tiles:[-3,4,-2,3,-4,5],targets:[[5,8],[3,6],[6,10],[4,7],[7,11],[6,6]]}
];
function initial(level){return {level,used:[],heat:levels[level].start,status:'playing',message:'Choose a tile for stage 1.'};}
function play(state,index){
 const l=levels[state.level];
 if(state.status!=='playing'||!Number.isInteger(index)||index<0||index>=l.tiles.length||state.used.includes(index))return state;
 const heat=state.heat+l.tiles[index],used=state.used.concat(index),target=l.targets[used.length-1];
 let status='playing',message='Target met. Choose the next tile.';
 if(heat<0||heat>l.max){status='lost';message='Outside the safe heat range. Undo and try another tile.';}
 else if((heat<target[0]||heat>target[1])){status='lost';message='Stage target missed. Undo and try another tile.';}
 else if(used.length===l.tiles.length){status='won';message='Firing complete. Every stage matched!';}
 return {level:state.level,heat,used,status,message};
}
const api={levels,initial,play};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Kiln=api;
})(typeof globalThis!=='undefined'?globalThis:this);
