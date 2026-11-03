'use strict';
const assert=require('node:assert/strict'),K=require('./engine');
let paths=[];
for(let level=0;level<K.levels.length;level++){
 const l=K.levels[level];let solutions=[];
 // Independent arithmetic oracle enumerates permutations without calling play.
 function enumerate(seq,left,heat){if(!left.length){solutions.push(seq);return;}for(const i of left){const n=heat+l.tiles[i];if(n>=0&&n<=l.max&&n>=l.targets[seq.length][0]&&n<=l.targets[seq.length][1])enumerate(seq.concat(i),left.filter(x=>x!==i),n);}}
 enumerate([],l.tiles.map((_,i)=>i),l.start);assert(solutions.length>0);let s=K.initial(level);
 for(const i of solutions[0]){const before=JSON.stringify(s);const n=K.play(s,i);assert.equal(JSON.stringify(s),before);s=n;assert.strictEqual(K.play(s,i),s);}assert.equal(s.status,'won');assert.strictEqual(K.play(s,0),s);paths.push({level,solutions:solutions.length,path:solutions[0]});
 assert.strictEqual(K.play(K.initial(level),-1).status,'playing');const bad=l.tiles.findIndex(t=>l.start+t<l.targets[0][0]||l.start+t>l.targets[0][1]);assert(bad>=0);assert.equal(K.play(K.initial(level),bad).status,'lost');
}
console.log(JSON.stringify({result:'PASS',independent_solution_paths:paths,checks:'solvability, all authored win paths, immutable history, tile reuse, terminal state, invalid index, wrong target'},null,2));

assert.equal(K.play({level:0,heat:9,used:[],status:'playing'},0).status,'lost');
assert.equal(K.play({level:0,heat:0,used:[],status:'playing'},1).status,'lost');
