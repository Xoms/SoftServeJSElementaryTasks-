(function () {

window.Task3 = {};
var arrOfTriangles = []; 
var curTriangle = {}; 
var resField = document.getElementById("resTask3"); 

Task1.getParams = function () {
    length = document.getElementById("task1Length").value; 
    width = document.getElementById("task1Width").value; 
    symb = document.getElementById("task1Symbol").value;
}
//Сопссно расчет строки в виде шахмат
Task1.calculateChessStr = function () {
    var str = "";
    var i = 0;
    
    while (i < length) {
        if (i%2 !== 0){ 
           str +="  ";
        }        // 2 пробела в начало нечетных строк
        for (let j = 0; j < (length); j++){
           str += symb + "  ";  // разделительный символ + 2 пробела        
        }
        str += "\n"; // перевод строки в конце заданной длины
        ++i;
    }
    console.log(str);
    return str; 
}

//Проверки
Task1.validateParams = function () {    
    Task1.getParams()
    if (isNaN(length) || isNaN(width) ||
        !Number.isInteger(+length) || !Number.isInteger(+width) || 
        length <= 0 || width <=0 ||
        symb == "" || symb.length > 1){
          
        return false;
    }
    
    return true;
}


//Вывод сообщений
Task1.showErrMsg = function () {
    resField.innerHTML = "Длина/ширина - целое положительное число, Символ - не пустой и всего 1!";
    resField.style.color = "red";
}
Task1.showResult = function (result) {
    resField.innerHTML = "<pre>" + result + "</pre>";
    resField.style.color = "green";
}

})();