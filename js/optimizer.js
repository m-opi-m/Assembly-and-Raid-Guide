/* Min-sulfur explosive mix per target (unbounded covering knapsack, exact DP).
   Damage/health are scaled by the smallest power of ten that makes every value an exact integer (<=1e6),
   then divided by their gcd, so the DP is exact (result.exact=true). If the data cannot be represented
   within the size cap, damage is floored to 1/1000 (never optimistic) and result.exact=false.
   Only explosives present in target.d are candidates (unsupported = unavailable). Non-craftable (x.free) are excluded.
   Results are re-verified in float before being returned. */
(function(root){
var MAXH=4e6,EPS=1e-7;
function gcd(a,b){while(b){var t=a%b;a=b;b=t}return a}
function cands(t,X,allow){var a=[];X.forEach(function(x){var d=t.d[x.k];if(d>0&&isFinite(d)&&!x.free&&!(allow&&allow[x.k]===false))a.push({x:x,d:d})});return a}
function integral(v,S){var y=v*S;return Math.abs(y-Math.round(y))<=EPS*Math.max(1,Math.abs(y))*1e-2+1e-9}
function plan(t,C){/* choose scale S and integer units */
for(var p=0,S=1;p<=6;p++,S*=10){var ok=integral(t.h,S);for(var i=0;ok&&i<C.length;i++)ok=integral(C[i].d,S);
 if(!ok)continue;var H=Math.round(t.h*S),g=0;C.forEach(function(c){c.u=Math.round(c.d*S);g=gcd(g,c.u)});
 if(H<=0||C.some(function(c){return c.u<1}))continue;g=gcd(g,0)||1;
 if(Math.ceil(H/g)<=MAXH){C.forEach(function(c){c.u=c.u/g});return{H:Math.ceil(H/g),exact:true,S:S/g}}}
/* fallback: conservative floor to 1/1000; candidates that round to 0 are dropped */
var S2=1000,keep=C.filter(function(c){c.u=Math.floor(c.d*S2+1e-6);return c.u>=1});C.length=0;keep.forEach(function(c){C.push(c)});
return{H:Math.ceil(t.h*S2-1e-6),exact:false,S:S2}}
function o(k,n){var r={};r[k]=n;return r}
function single(t,X,allow){var best=null;cands(t,X,allow).forEach(function(c){var n=Math.ceil(t.h/c.d-1e-9),s=n*c.x.s;if(!best||s<best.sulfur)best={counts:o(c.x.k,n),sulfur:s}});return best}
function solve(t,X,allow){var C=cands(t,X,allow);if(!C.length)return null;
var P=plan(t,C);if(!C.length)return null;var H=P.H;
if(H<=0)return{counts:{},sulfur:0,damage:0,overkill:-t.h,exact:P.exact};
var dp=new Float64Array(H+1),cn=new Int32Array(H+1),ch=new Uint8Array(H+1);
for(var j=1;j<=H;j++){var bc=Infinity,bn=0,bi=0;
for(var i=0;i<C.length;i++){var p=j-C[i].u;if(p<0)p=0;var c=dp[p]+C[i].x.s,n=cn[p]+1;if(c<bc-1e-9||(Math.abs(c-bc)<=1e-9&&n<bn)){bc=c;bn=n;bi=i}}
dp[j]=bc;cn[j]=bn;ch[j]=bi}
var counts={},j2=H,dmg=0,sul=0;
while(j2>0){var it=C[ch[j2]];counts[it.x.k]=(counts[it.x.k]||0)+1;dmg+=it.d;sul+=it.x.s;j2=Math.max(0,j2-it.u)}
if(dmg<t.h-1e-9)throw new Error("optimizer produced insufficient damage");
return{counts:counts,sulfur:sul,damage:dmg,overkill:dmg-t.h,exact:P.exact}}
function totals(counts,X,q){var s=0,g=0,e=0;X.forEach(function(x){var n=(counts[x.k]||0)*q;s+=n*x.s;g+=n*x.g;e+=n*x.xe});return{sulfur:s,gunpowder:g,explosives:e}}
var api={solve:solve,single:single,totals:totals};
if(typeof module!=="undefined")module.exports=api;else root.Optimizer=api})(this);
