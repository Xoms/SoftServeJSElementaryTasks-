
// Переменные - в main.js
//Сопссно расчет строки в виде шахмат
function calculateChessStr (length, width, symb) {
    var str = '';
    var i = 0;
    console.log (length, width, symb);
    if (!(validateParamsT1())){
        showErrMsgT1();
        return;
    }

    while (i < length) {
    	if (i%2 !== 0){ 
     	   str +='  ';
    	}        // 2 пробела в начало нечетных строк
    	for (let j = 0; j < (length); j++){
     	   str += symb + '  ';	// разделительный символ + 2 пробела	 	
    	}
    	str += '\n'; // перевод строки в конце заданной длины
    	++i;
	}

	resTask1.innerHTML = '<pre>' + str + '</pre>'; 
	// <pre> для вывода с учотом перевода строк	
}

//Проверки
function validateParamsT1() {
	var task1Length = 
		parseInt(document.getElementById('task1Length').innerHTML);
	/*var validateTask1Length = document.getElementById('validateTask1Length');*/
	console.log (task1Length);
	if (isNaN(task1Length) || 
		(task1Length ^ 0) !== task1Length ||  //проверка на целое c помощью XOR
		task1Length <= 0){
		  /* validateTask1Length.innerHTML = 'Введите целое положительное число';
		   validateTask1Length.style.color = 'red'*/
		return false;
	}
	/*validateTask1Length.innerHTML = 'ok';
	validateTask1Length.style.color = 'green';*/
	return true;
}

function validateTask1Width() {
	return true;
}

function validateTask1Symbol() {
	return true;
}

//Вывод сообщений
function showErrMsgT1() {
	resTask1.innerHTML = "Параметры заданы неверно!";

}