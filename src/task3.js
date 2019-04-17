(function () {

window.Task3 = {};

var triangles = [];
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

Task3.pushTriangle = function(triangle) {
//Получает треугольник и добавляет его в текущий массив
//triangle уже валидный   
    triangles.push (triangle);    
}



//==================================== Проверки ===============================

Task3.validateParams = function (triangle) {    
    //Для всех полей сразу  

    //NaN
    if (isNaN(triangle.a) || isNaN(triangle.b) || isNaN(triangle.c)) {
        errState = 1;

    // <0
    } else if (triangle.a <= 0 || triangle.b <= 0 || triangle.c <= 0) {
        errState = 2; 

    //Не треугольник    
    } else if ( (triangle.a + triangle.b) <= triangle.c || 
            (triangle.b + triangle.c) <= triangle.a || 
            (triangle.a + triangle.c) <= triangle.b ) {    
        errState = 4;

    //Символов в вершинах >3 или не большие латинские
    // Или одинаковые
    } else if (triangle.vertices.length !== 3 || 
               triangle.vertices.search(/[A-Z]{3}/) == -1 ||
               triangle.vertices[0] == triangle.vertices[1] ||
               triangle.vertices[0] == triangle.vertices[2] ||
               triangle.vertices[1] == triangle.vertices[2])
               { 
        errState = 5;

    //Ошибок ввода нет    
    } else { errState = 0; }
    
    //Существует треугольник с задаными вершинами
    for (var i = 0; i < triangles.length; i++){
        if (triangle.vertices == triangles[i].vertices) {
            errState = 6;        
        }        
    }
    return errState; 
    /*Значения errState:
    1 - не число; (используется в других Task*)
    2 - < 0; (используется в других Task*)
    3 - не целое (используется в других Task*)
        в данном задании не применяется
    4 - такого треугольника не существует(Task3)                     
    5 - не 3 символа в названии вершин(Task3)
    6 - Треугольник с такими вершинами есть (Task3)
    7 - Массив пустой (будет ТОЛЬКО при нажатии кнопки "Сортировать"(runTask3))
    0 - ok; 
    Другие цифры считаются ошибкой (для тестов)*/
}






//=========== Вывод сообщений ===============

Task3.showCurrentArray = function() {
    // Выводит массив в див результата (массив из замыкания)
    resField.style.color = "green";
    resField.innerHTML = "Текущий массив: ";

    for (var i = 0; i < triangles.length; i++){
        resField.innerHTML += "{ " + triangles[i].vertices + 
            ", " + triangles[i].a + 
            ", " + triangles[i].b + 
            ", " + triangles[i].c + " }" + "<br>";
    }
}


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
            " и РАЗНЫХ латинских символов!";
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



//=================================== Расчеты =================================

Task3.generateResult = function (){
    //triangles  - массив треугольников
    //функция "знает" о нём из замыкания
    var halfP; //полупериметр

    //Получим площадь треугольников
    for (var i = 0; i < triangles.length; i++){       
        halfP = (triangles[i].a + triangles[i].b + triangles[i].c)/2; 
        //console.log (halfP);
        //По формуле Герона
        triangles[i].s = Math.sqrt(halfP * (halfP - triangles[i].a) *
            (halfP - triangles[i].b) * (halfP - triangles[i].c));
        //и добавим к объекту с каждым треугольником
        console.log (triangles[i].s);
    }   

    //Функция сортировки
    function triangleCompare (tr1, tr2) { 
        //tr == arr[i].tr 
        //tr.s == площадь текущего треугольника
        return tr1.s - tr2.s; 
    }
    console.log (triangles.sort(triangleCompare));
    return triangles.sort(triangleCompare); 
}

})();