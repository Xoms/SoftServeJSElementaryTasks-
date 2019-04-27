let Task6 = (function () {
//Числовая последовательность

let Task6 = {};
const resField = document.querySelectorAll(".resField")[5];
const inpField = document.querySelectorAll(".dataInput")[5];



Task6.getParams = function (){ 
    //len - max lenght of result (x*x)
    //num - max result of (x*x)  
    let context = {};
    context.len = +inpField.querySelectorAll("input")[0].value; 
    context.num = +inpField.querySelectorAll("input")[1].value;    
    return context;
}

Task6.validateParams = function (context){
    if (isNaNArgs(context.len, context.num)) {
        errState = 1;
    } else if (!isPositive(context.len, context.num)) {
        errState = 2;
    } else if (!isInteger(context.len)){
        errState = 3;
    } else if (context.len > 6){
        errState = 12;
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
            break;
        case 12: 
            resField.innerHTML ="Поле 'Длина' должно быть <=6";            
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
        current=num*num;
        
        if (current.toString().length <= context.len){
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

Task6.getResults = function (context){
    //Executes calculations of each method and returns result;
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