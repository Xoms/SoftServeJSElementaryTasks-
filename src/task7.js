let Task7 = ( function (){

let Task7 = {};
const inputField = document.querySelectorAll(".dataInput");
const resField = document.getElementById("resTask7");
let context = {};


Task7.getParams = function (){
    let context = {};
    context.len = inputField[6].querySelectorAll("input")[0].value; 
    context.from = inputField[6].querySelectorAll("input")[1].value;
    context.to = inputField[6].querySelectorAll("input")[2].value;
    return context;
}

Task7.validateParams = function (context){
    for(let name in context) {
        if (context[name] < 0 ) {
            errState = 1;
        } else if ( isNaN(+context[name])) {
            errState = 2;
        } 
    } 
    if (!Number.isInteger(+context.len)) {
        errState = 3;
    } else {
        errState = 0;
    }
    return errState;
}

Task7.showErrMsg = function(errState) {
    resField.style.color = "red";

    switch (errState) {
        case 1: 
            resField.innerHTML ="Поля должны быть > 0";
            break;
        case 2: 
            resField.innerHTML ="Поля должны быть числами";
            break;
        case 3:
            resField.innerHTML ="Поле 'Длина' должно быть целым числом";
    }
}
Task7.showResult = function (context) {
    resField.style.color = "green";
    resField.innerHTML = "arrByLength: " + context.arrByLength + "<br>";
    resField.innerHTML += "arrInRange: " + context.arrInRange;
}




// var context = {len: 4,
//            from: 10,
//            to: 1000};

function fibByLen (context){
    context.arrByLength = [1,1];
    var prev = 1;
    var cur = 1;
    var nxtStr = "";         
    var nxt = cur + prev;

    while (true){
        nxtStr="" + nxt;

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
    
 
Task7.run = function (context){
  fibByLen(context);
  console.log(context.len);
  console.log(context.arrByLength);

  fibInRange(context);
  console.log(context.from + " " + context.to);
  console.log(context.arrInRange);
  return context;
} 

return Task7;
})();