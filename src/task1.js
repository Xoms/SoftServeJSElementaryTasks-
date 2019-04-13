(function () {
//Переменные
window.Task1 = {};
var length; 
var width; 
var	symb;
var resField = document.getElementById("resTask1");	

Task1.parseData = function () {
	length = document.getElementById("task1Length").value; 
	width = document.getElementById("task1Width").value; 
	symb = document.getElementById("task1Symbol").value;
}
//Сопссно расчет строки в виде шахмат
Task1.generateChessStr = function () {

    var str = "";
    var i = 0;

    Task1.parseData();

    if (!Task1.validateParams()) {
    	showErrMsg();
    	return;
    }

    while (i < length) {
    	if (i%2 !== 0){ 
     	   str +="  ";
    	}        // 2 пробела в начало нечетных строк
    	for (var j = 0; j < width; j++){
     	   str += symb + "  ";	// разделительный символ + 2 пробела	 	
    	}
    	str += "\n"; // перевод строки в конце заданной ширины
    	i++;
	}
	
	showResult(str);
}

//Проверки
Task1.validateParams = function () {		
	return !( isNaN(length) || isNaN(width) ||
		!Number.isInteger(+length) || !Number.isInteger(+width) || 
		length <= 0 || width <= 0 ||
		symb.length != 1);
}


//Вывод сообщений
function showErrMsg() {
	resField.innerHTML = `Длина/ширина - целое положительное число. 
		Cимвол - не пустой и всего 1!`;
	resField.style.color = "red";
}

function showResult(result) {
	resField.innerHTML = "<pre>" + result + "</pre>";
	resField.style.color = "green";
}

Object.freeze(Task1);

})();