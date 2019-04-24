let Task7 = ( function (){

let Task7 = {};
const resField = document.querySelectorAll(".resField")[6];
const inpField = document.querySelectorAll(".dataInput")[6];



Task7.getParams = function (){
    let context = {};
    context.len = +inpField.querySelectorAll("input")[0].value; 
    context.from = +inpField.querySelectorAll("input")[1].value;
    context.to = +inpField.querySelectorAll("input")[2].value;
    return context;
}

Task7.validateParams = function (context){
    if (isNaNArgs(context.len, context.from, context.to)) {
            errState = 1;
    } else if ( !isPositive(context.len, context.from, context.to)) {
            errState = 2;    
    } else if (!isInteger(context.len)) {
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
    let prev = 1;
    let cur = 1;
    let nxtStr = "";         
    let nxt = cur + prev;

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
    let from = context.from;
    let to = context.to;    
    let cur = 1;
    let prev = 1;
    let nxt = cur + prev;

    
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