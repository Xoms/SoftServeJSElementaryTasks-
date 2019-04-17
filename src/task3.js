(function () {

window.Task3 = {};
Task3.context = {triangles: [],
                 triangle: {}};

 

var resField = document.getElementById("resTask3"); 


Task3.getParams = function () {
    var triangle = {}; //текущий треугольник
    //Number - получаем только число, если это возможно

    triangle.vertices = document.getElementById("vertices").value; 
    triangle.a = Number(document.getElementById("side_a").value); 
    triangle.b = Number(document.getElementById("side_b").value);
    triangle.c = Number(document.getElementById("side_c").value);    
    return triangle;   
}

//Проверки
Task3.validateParams = function (context) {    
    //Для всех полей
    var triangle = context.triangle//Task3.context.triangle;
    var arr = context.triangles//Task3.context.triangles;

    
    if (isNaN(triangle.a) || isNaN(triangle.b) || isNaN(triangle.c)) {
        errState = 1; //NaN

    // <0
    } else if (triangle.a <= 0 || triangle.b <= 0 || triangle.c <= 0) {
        errState = 2; 

    //Не треугольник
    } else if (triangle.a + triangle.b < triangle.c || 
            triangle.b + triangle.c < triangle.a || 
            triangle.a + triangle.c < triangle.b ) {    
        errState = 4;

    //Символов >3 или не большие латинские
    } else if (triangle.vertices.length !== 3 || 
               triangle.vertices.search(/[A-Z]{3}/) == -1) { 
        errState = 5;

    //Ошибок ввода нет    
    } else { errState = 0; }
    
    //Существует треугольник с задаными вершинами
    for (var i = 0; i < arr.length; i++){
        if (triangle.vertices == context.triangles[i].vertices) {
            errState = 6;        
        }        
    }
    return errState; 
    /*Значения errState:
    1 - не число; (используеццо в других Task*)
    2 - < 0; (используеццо в других Task*)
    3 - не целое (используеццо в других Task*)
    4 - такого треугольника не существует;(Task3)                     
    5 - не 3 символа Task3;
    6 - Треугольник с такими вершинами есть (Task3)
    7 - Массив пустой (только при нажатии кнопки выполнения Task3)
    0 - ok; 
    Другие цифры считаються ошибкой*/
}

Task3.pushTriangle = function(arr, triangle) {
//Получает массив и добавляет в него текущий треугольник
    console.log (triangle + ' ' + arr);    
    return arr.push(triangle);        
}

Task3.showCurrentArray = function(arr) {
    // Получает массив и выводит
    resField.style.color = "green";
    resField.innerHTML = "Текущий массив: ";

    for (var i = 0; i < arr; i++){
        resField.innerHTML += "{ " + arr[i].vertices + 
            ", " + arr[i].a + 
            ", " + arr[i].b + 
            ", " + arr[i].c + " }" + "<br>";
    }
}
//Вывод сообщений
Task3.showErrMsg = function (errState) {
    resField.style.color = "red";
    
    switch (errState){
        case 1 : 
            resField.innerHTML = "Стороны должны быть числом";
            break;
        case 2 : 
            resField.innerHTML = "Cтороны не положительное число!";
            break;
        case 4 : 
            resField.innerHTML = "Треугольник не существует";
            break;
        case 5 : 
            resField.innerHTML = "Название должно стостоять из 3-х БОЛЬШИХ" +
            " латинских символов!";
            break;
        case 6 : 
            resField.innerHTML = "Такой есть!";
            break;
        case 7 :
            resField.innerHTML = "Сначала задайте треугольники";
    }   
}

Task3.showResult = function (result) {
    //result  - sorted array of triangles (Task3.context.result)
    console.log(result);
    resField.style.color = "green";
    resField.innerHTML = "";
    for (var i = 0; i < result.length; i++){
        resField.innerHTML += result[i].vertices + ", s = " +
            result[i].s + "<br>";
    }
    
}


Task3.generateResult = function (arr){
    //arr - массив треугольников
    var halfP; //полупериметр

    //Получим площадь треугольников
    for (var i = 0; i < arr.length; i++){       
        halfP = (arr[i].a + arr[i].b + arr[i].c)/2; 
        //console.log (halfP);
        //По формуле Герона
        arr[i].s = Math.sqrt(halfP * (halfP - arr[i].a) *
            (halfP - arr[i].b) * (halfP - arr[i].c));
        //и добавим к объекту с каждым треугольником
        console.log (arr[i].s);
    }   

    function triangleCompare (tr1, tr2) { //Функция сортировки
        //tr == arr[i].tr 
        //tr.s == площадь текущего треугольника
        return tr1.s - tr2.s; 
    }
    console.log (arr.sort(triangleCompare));
    return arr.sort(triangleCompare); 
}

})();