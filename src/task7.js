( function (){
window.Task7 = {};

/* По козырной формуле Бине
function fibRange( from, to) {
  if( isNaN(from) || isNaN(to) || from < 2 || from > to) {
    throw "Bad argument(s)";
  }
  
  var root5 = Math.sqrt(5), phi = (1 + root5)/2, logPhi = Math.log(phi);
  var nFrom = Math.ceil( Math.log((from - 0.5) * root5) / logPhi);
  var nTo = Math.floor( Math.log((to+0.5) * root5) / logPhi);

  function nthFib(n) {
    return Math.round( (Math.pow(phi, n) - Math.pow( -phi, -n)) / (2 * phi - 1));
  }
  
  var prev = nthFib(nFrom);
  var result = [prev];
  if( nFrom === nTo) return result;
  var cur = nFrom + 1;
  var nxt = nthFib(cur);
  while( cur <= nTo) {
    result.push(nxt);
    nxt = cur + nxt;
    cur = nxt - cur;
    i++;
  }
  
  return result;
} */
Task7.run = function (){

var context = {len: 4,
           from: 10,
           to: 1000};

function fibByLen (context){
    context.arrByLength = [1,1];
    var prev = 1;
    var cur = 1;
    var nxtStr = "";         
    var nxt = cur + prev;

    while (true){
        nxtStr=String(nxt);

        if (nxtStr.length <= context.len){
            context.arrByLength.push(nxt);
            prev = cur;
            cur = nxt;            
            nxt = cur + prev;
        } else { 
            break;
        }
    }
}


function fibInRange (context) {
    context.arrInRange=[];
    var from = context.from;
    var to = context.to;    
    var cur = 1;
    var prev = 1;
    var nxt = cur + prev;

    
    while (to >= nxt) {        
        if (nxt >= from) {
            context.arrInRange.push(nxt);
        }  
        prev = cur;
        cur = nxt;         
        nxt = cur + prev;
    }    
}
    
 

fibByLen(context);
console.log(context.len);
console.log(context.arrByLength);

fibInRange(context);
console.log(context.from + " " + context.to);
console.log(context.arrInRange);



} // task7.run();

})();