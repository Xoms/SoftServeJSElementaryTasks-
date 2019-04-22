//Счастливые билетики
Task5 = (function () {  

let Task5 = {};

let resField = document.getElementById("resTask5");



Task5.getParams = function (){
    let context = {};
    context.min = document.getElementById("minTicketNumber").value;
    context.max = document.getElementById("maxTicketNumber").value;
    
    return context;
}

Task5.validateParams = function (context){
    
    if (isNaN(+context.min) || isNaN(+context.max)) { 
        context.errState = 1; //не цифры
    } else if (context.min < 0 || context.max < 0) { 
        context.errState = 2; // <0
    } else if (context.min.length !== 6 && context.max.length !== 6 ) {
        context.errState = 3; // не 6 цифр
    } else if (+context.min == +context.max) {
        context.errState = 4; // min == max фигня
    } else { 
        context.errState = 0; 
    } // ok

}

Task5.showErrMsg = function(errState){
    resField.style.color = "red";    
    switch (errState){
        case 1 : 
            resField.innerHTML = "Диапазоны должны состоять из целого числа";
            break;
        case 2 : 
            resField.innerHTML = "Диапазоны должны быть не меньше 0 ";
            break;
        case 3 : 
            resField.innerHTML = "Должно быть не больше 6 цифр";
            break;
        case 4 : 
            resField.innerHTML = "Min не должен быть == Max";        
    }

}

Task5.generateTicketNumbers = function(min, max) { 
    var ticketNumbers = [];
    if (min > max) { 
        var tmp = min;
        min = max;
        max = min;
    }   
    for (var i = min; i <= max; i++){
        var ticketNumber = "" + i;
        while (ticketNumber.length < 6) {             
            ticketNumber = "0" + ticketNumber;

        } // Добавим 0 если мало цифр
        ticketNumbers.push(ticketNumber);
    }    
    return ticketNumbers;
}

function countSimpleMethod(ticketsArr) {
    var cnt = 0;       
    var leftPartSum = 0;
    var rightPartSum = 0;      

    for (i = 0; i < ticketsArr.length; i++){
        

        leftPartSum = +(ticketsArr[i].charAt(0)) + 
                      +(ticketsArr[i].charAt(1)) +
                      +(ticketsArr[i].charAt(2));

        rightPartSum = +(ticketsArr[i].charAt(3)) + 
                       +(ticketsArr[i].charAt(4)) +
                       +(ticketsArr[i].charAt(5)); 

        //console.log ("leftPartSum = " + leftPartSum);
        //console.log ("rightPartSum = " + rightPartSum);       

        if (leftPartSum == rightPartSum) {
            cnt++;
        }
    }
    return cnt;
}

function countComplexMethod(ticketsArr) {
    var cnt = 0;
    var ticketNumber;    
    var evenSum = 0;
    var oddSum = 0;            
    
    for (i = 0; i < ticketsArr.length; i++){
        ticketNumber = ticketsArr[i];
        oddSum = 0;
        evenSum = 0;
        for (var j = 0; j < 6; j++) {
            if (+ticketsArr[i].charAt(j) %2) {
                oddSum += +ticketsArr[i].charAt(j);
            } else {
                evenSum += +ticketsArr[i].charAt(j);
            }
        }
        if (oddSum == evenSum) {
            cnt++;        
        }
    }

    return cnt;
}

Task5.compareMethods = function (context){
    context.simpleResult =  countSimpleMethod(context.ticketsArr);
    context.complexResult = countComplexMethod(context.ticketsArr);
     
    if (context.simpleResult - context.complexResult > 0) {
        context.resultId = 1;
    } else if (context.simpleResult - context.complexResult < 0) {
        context.resultId = 2; 
    } else { 
        context.resultId = 0;
    }    
}

Task5.showResult = function(context) {
    resField.innerHTML = "Простой метод: " + context.simpleResult + "<br>" +
                         "Сложный метод: " + context.complexResult + "<br>";
    switch (context.resultId) {

        case 1: 
            resField.innerHTML += "Простым методом выбрано больше билетов";
            break;
        case 2:
            resField.innerHTML += "Сложным методом выбрано больше билетов";
            break;
        case 0:
            resField += "Кол-во билетов одинаково";
            break;

    }
}
return Task5;
})();