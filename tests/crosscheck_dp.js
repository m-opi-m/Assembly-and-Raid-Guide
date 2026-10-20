/* Helper for tests/optimizer_crosscheck.py: reads cases (JSON on stdin), runs js/optimizer.js, prints results (JSON). */
const O=require('../js/optimizer.js');
const cases=JSON.parse(require('fs').readFileSync(0,'utf8'));
const out=cases.map(c=>{
  const X=c.X.map(x=>Object.assign({xe:0,g:0},x));
  try{const m=O.solve({h:c.h,d:c.d},X,c.allow);
    return m?{sulfur:m.sulfur,counts:m.counts,items:Object.values(m.counts).reduce((a,b)=>a+b,0)}:null}
  catch(e){return{error:String(e)}}
});
process.stdout.write(JSON.stringify(out));
