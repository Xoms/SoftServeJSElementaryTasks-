let Task1 = (function() {
//Переменные
    let Task1 = {};
    
    const resField = document.querySelectorAll(".resField")[0];
    const inpField = document.querySelectorAll(".dataInput")[0]; 

    Task1.getParams = function() {
    	let length = +inpField.querySelectorAll("input")[0].value; 
    	let width = +inpField.querySelectorAll("input")[1].value; 
    	let symb = inpField.querySelectorAll("input")[2].value;
        return [length, width, symb];
    }
    //Сопссно расчет строки в виде шахмат
    Task1.generateChessStr = function(length, width, symb) {
        let str = ""; 
        let i = 0;               

        while (i < length) {
        	if (i%2 !== 0){
            // 2 пробела в начало нечетных строк 
         	   str +="  ";
        	}        
        	for (var j = 0; j < width; j++){
         	    if (j == width - 1) {
                    //если конец текущей строки, пробелы не добавляем
                    str += symb; 
                } else {
                    str += symb + "  ";
               	// разделительный символ + 2 пробела
               }
        	}
        	str += "\n"; // перевод строки в конце заданной ширины
        	i++;
    	}   	
    	return str;
    }

    //Проверки
    Task1.validateParams = function(length, width, symb) {
        let errState;

        if (isNaNArgs(length, width)) {
            errState = 1;
        } else if (!isPositive(length, width)) {
            errState = 2;
        } else if (!isInteger(length, width)){
            errState = 3;
        } else if (symb.length !== 1 || symb === " "){
            errState = 4;
        } else {
            errState = 0;
        }
    	return errState;
    }


    //Вывод сообщений
    Task1.showErrMsg = function(errState) {
        resField.style.color = "red";
        switch (errState) {
            case 1 : 
                resField.innerHTML = `Длина/ширина не число`;
                break; 
            case 2 :
                resField.innerHTML = `Длина/ширина не положительное число`;
                break;
            case 3 :
                resField.innerHTML = `Длина/ширина не целое число`;
                break;
            case 4 :
                resField.innerHTML = `Cимвол - пробел или не 1!`;               
        }   	
    	
    }

    Task1.showResult = function(result) {
        resField.style.color = "green";
    	resField.innerHTML = "<pre>" + result + "</pre>";    	
    }

    Object.freeze(Task1);
    return Task1;
})();
