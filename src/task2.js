(function () {  
/*Таким образом это самописный модуль, без подключения сторонних библиотек
  для ограничения области видимости*/


//********Переменные**********
window.Task2 = {}; //Объект для методов выполнения задания
var envelope1 = {}; //Первый конверт
var envelope2 = {}; // Второй конверт
var res; //Рзультат сравнения конвертов (возможные значения: 2, 1, 0)
var resField = document.getElementById('resTask2'); //Поле вывода результатов
                                                    //или ошибок 

//Получение исходных данных
Task2.parseData = function () {    
    envelope1.ab = document.getElementById("envelope1_ab").value;
    envelope1.cd = document.getElementById("envelope1_cd").value;
    envelope2.ab = document.getElementById("envelope2_ab").value;
    envelope2.cd = document.getElementById("envelope2_cd").value;   
}

//Проверка на влезание конвертов друг вдруга
Task2.calcEnvelopeEntries = function () {    
    if ((+envelope1.ab > +envelope2.ab && +envelope1.cd > +envelope2.cd) || 
        (+envelope1.cd > +envelope2.ab && +envelope1.ab > +envelope2.cd)) {
        return 2; //Вмещается 2-й 
    } else if ((+envelope2.ab > +envelope1.ab && +envelope2.cd > +envelope1.cd) 
        || (+envelope2.cd > +envelope1.ab && +envelope2.ab > +envelope1.cd)) {
        return 1; //Вмещается 1-й
    } else return 0; //Не вмещаются
}

//Проверка введенных даных
Task2.validateParams = function () {
    Task2.parseData();
    
    if (envelope1.ab <= 0 || isNaN(envelope1.ab) || 
        envelope1.cd <= 0 || isNaN(envelope1.cd) ||
        envelope2.ab <= 0 || isNaN(envelope2.ab) ||
        envelope2.cd <= 0 || isNaN(envelope2.cd)) { 
               
        return false;
    }
    
    return true; 
}

//Сообщение об ошибке ввода параметров
Task2.showErrMsg = function () {    
    resField.innerHTML = "Стороны конвертов должны быть числом > 0!";
    resField.style.color = "red";
}

//Вывод результатов
Task2.showResult = function (result) {
    resField.style.color = "green";
    if (result) {
        resField.innerHTML = "Конверт №" + result + " вмещается в другой";
        return;
    } 

    resField.innerHTML = "Ни оди из конвертов не вмещается в другой";
}

})();