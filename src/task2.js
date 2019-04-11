(function () {  
/*Таким образом это самописный модуль, без подключения сторонних библиотек
  для избежания коллизий имен

  Использование: 
  Task2.parseData  Получение исходных данных - открыто снаружи, т.к. потом
                хочу использовать отслеживание инпутов onchange и пригодиццо )

  Task2.validateParams Проверка исходных данных - открыто снаружи, по той же 
                        причине
  
  showErrMsg - сообщение о неверных исходных данных

  showResult(result) - вывод результата

  Task2.calcEnvelopeEntries - соппсно вычисления
  */


//********Переменные**********
window.Task2 = {}; //Объект для методов выполнения задания
var envelope1 = {}; //Первый конверт
var envelope2 = {}; // Второй конверт
var res; // Результат (принимает значения 0, 1, 2)
var resField = document.getElementById("resTask2"); //Поле вывода результатов
                                                    //или ошибок 

//Получение исходных данных
Task2.parseData = function () {    
    envelope1.ab = document.getElementById("envelope1_ab").value;
    envelope1.cd = document.getElementById("envelope1_cd").value;
    envelope2.ab = document.getElementById("envelope2_ab").value;
    envelope2.cd = document.getElementById("envelope2_cd").value;   
}

//Проверка введенных даных
Task2.validateParams = function () {    
    
    if (envelope1.ab <= 0 || isNaN(envelope1.ab) || 
        envelope1.cd <= 0 || isNaN(envelope1.cd) ||
        envelope2.ab <= 0 || isNaN(envelope2.ab) ||
        envelope2.cd <= 0 || isNaN(envelope2.cd)) { 

        return false;
    }
    
    return true; 
}

//Сообщение об ошибке ввода параметров
showErrMsg = function () {    
    resField.innerHTML = "Стороны конвертов должны быть числом > 0!";
    resField.style.color = "red";
}

//Вывод результатов
//result - будет результатом выполнения Task2.calcEnvelopeEntries
showResult = function (result) {
    resField.style.color = "green";
    if (result) {
        resField.innerHTML = "Конверт №" + result + " вмещается в другой";
        return;
    } 

    resField.innerHTML = "Ни оди из конвертов не вмещается в другой";
}

//Проверка на влезание конвертов друг вдруга (сопссно вычисления)
Task2.calcEnvelopeEntries = function () { 
    Task2.parseData();
    if (!Task2.validateParams()) {
        showErrMsg();
        return;
    }     //+ для того чтоб не сравнивались как строки (по другому - Number())
    if ((+envelope1.ab > +envelope2.ab && +envelope1.cd > +envelope2.cd) || 
        (+envelope1.cd > +envelope2.ab && +envelope1.ab > +envelope2.cd)) {
        res = 2; //Вмещается 2-й 
    } else if ((+envelope2.ab > +envelope1.ab && +envelope2.cd > +envelope1.cd) 
        || (+envelope2.cd > +envelope1.ab && +envelope2.ab > +envelope1.cd)) {
        res = 1; //Вмещается 1-й
    } else res = 0; //Не вмещаются
    showResult(res);
}

//Запрет на изменение свойств и методов Task2 чтоб никто не менял снаружи
Object.freeze(Task2);

})();