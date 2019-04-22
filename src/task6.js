let Task6 = (function () {

let Task6 = {};
const inputField = document.querySelectorAll(".dataInput");
const resField = document.getElementById("resTask6");
let context = {};


Task6.getParams = function (){
    let context = {};
    context.len = inputField[5].querySelectorAll("input")[0].value; 
    context.num = inputField[5].querySelectorAll("input")[1].value;
    console.log (context.len);
    return context;
}

Task6.validateParams = function (context){
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

Task6.showErrMsg = function(errState) {
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

Task6.showResult = function (context) {
    resField.style.color = "green";
    resField.innerHTML = "arrByNum: " + context.arrByNum + "<br>";
    resField.innerHTML += "arrByLength: " + context.arrByLength;
}

function makeArrByLength (context){
    //1) len
    context.arrByLength = [];
    var num = 0;
    var current = ""; 


    while (true) {
        current=String(num*num);
        
        if (current.length <= context.len){
            context.arrByLength.push(num);
            num++;
        } else { 
            break;
        }
    }
};

function makeArrByNumber (context){
    var num = 0;
    context.arrByNum = [];
    
    while (num*num <= context.num) {
        context.arrByNum.push(num);
        num++;
    }
};

Task6.run = function (context){
    makeArrByLength(context);
    makeArrByNumber (context);
    

    console.log (context.num);
    console.log ("arrByNum: " + context.arrByNum);
    console.log (context.len);
    console.log ("arrByLength: " + context.arrByLength);
    return context;
}
return Task6;
})();