let Task2 = (function () {  
/*Таким образом это самописный модуль, без подключения сторонних библиотек
  для избежания коллизий имен

  Использование: 
  Task2.parseData  Получение исходных данных - открыто снаружи, т.к. потом
                хочу использовать отслеживание инпутов onchange и пригодиццо )

  Task2.validateParams Проверка исходных данных - открыто снаружи, по той же 
                        причине
  
  showErrMsg() - сообщение о неверных исходных данных

  showResult(result) - вывод результата

  Task2.calcEnvelopeEntries - соппсно вычисления
  */


//********Переменные**********
let Task2 = {};

const inputField = document.querySelectorAll(".dataInput")[1];
const resField = document.querySelectorAll(".resField")[1]; //Поле вывода результатов
                                                    //или ошибок 

//Получение исходных данных
Task2.getParams = function () {
    let inputs = inputField.querySelectorAll("input");
    let envelope1 = {};
    let envelope2 = {};
       
    envelope1.ab = +(inputs[0].value);
    envelope1.cd = +(inputs[1].value);
    envelope2.ab = +(inputs[2].value);
    envelope2.cd = +(inputs[3].value);
    //console.log (envelope1.ab);

    return [envelope1, envelope2];
}

//Проверка введенных даных
Task2.validateParams = function (envelope1, envelope2) {

    return !(isPositive(envelope1.ab, envelope1.cd, 
        envelope2.ab, envelope2.cd) || 
        !(isNaNArgs(envelope1.ab, envelope1.cd, 
        envelope2.ab, envelope2.cd)) );       
}

//Сообщение об ошибке ввода параметров
Task2.showErrMsg = function () {    
    resField.innerHTML = "Стороны конвертов должны быть числом > 0!";
    resField.style.color = "red";
}

//Вывод результатов
//result - будет результатом выполнения Task2.calcEnvelopeEntries
Task2.showResult = function (result) {
    resField.style.color = "green";    
    if (result) {
        resField.innerHTML = "Конверт №" + result + " вмещается в другой";
        
    } else {
        resField.innerHTML = "Ни оди из конвертов не вмещается в другой";
    }
}

//для проверки влезания по диагонали
function isDiagEntry (a,b,c,d) {
    return ( (a*b>2*c*d) && 
        ((c*c+d*d-b*b)*(c*c+d*d-a*a)<=a*a*b*b-4*a*b*c*d+4*c*c*d*d));
}; 

//Проверка на влезание конвертов друг вдруга (сопссно вычисления)
Task2.calcEnvelopeEntries = function (env1, env2) { 
    let res;
    if ( isDiagEntry(env1.ab, env1.cd, env2.ab, env2.cd) 
        || (env1.ab > env2.ab && env1.cd > env2.cd) 
        || (env1.cd > env2.ab && env1.ab > env2.cd) ) {
            res = 2; //Вмещается 2-й  
            
    } else if ( isDiagEntry(env2.ab, env2.cd, env1.ab, env1.cd) 
        || (env2.ab > env1.ab && env2.cd > env1.cd) 
        || (env2.cd > env1.ab && env2.ab > env1.cd) ) {
            res = 1; //Вмещается 1-й
    } else { res = 0;} //Не вмещаются
    
    return res;
}
return Task2;
})();