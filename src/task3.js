(function () {

window.Task3 = {};

 

var resField = document.getElementById("resTask3"); 
var arrOfTriangles = [];

Task3.getParams = function () {
    var triangle = {}; //current triangle

    triangle.vertices = document.getElementById("vertices").value; 
    triangle.a = +document.getElementById("side_a").value; 
    triangle.b = +document.getElementById("side_b").value;
    triangle.c = +document.getElementById("side_c").value;
    return triangle;    
}

//Проверки
Task3.validateParams = function (triangle) {    
    //Task3.getParams();
    
    if (isNaN(triangle.a) || isNaN(triangle.b) || isNaN(triangle.c)) {
        errState = 1;
    } else if (+triangle.a + +triangle.b < +triangle.c || //Не треугольник
        +triangle.b + +triangle.c < +triangle.a || 
        +triangle.a + +triangle.c < +triangle.b ) {
        errState = 2;
    } else if (triangle.a <= 0 || triangle.b <= 0 || triangle.c <= 0) {
        errState = 3;
    } else if (triangle.vertices.length !== 3 ) {
        errState = 4
    } else { errState = 0; }
    
    return errState; //1 - Стороны не число; 
                     //2 - такого треугольника не существует;
                     //3 - Стороны < 0; 
                     //4 - Название не 3 символа;

                     //0 - ok;
}

Task3.pushTriangle = function(triangle) {    
    arrOfTriangles.push(triangle);        
}

Task3.showCurrentArray = function() {
        resField.style.color = "green";
        resField.innerHTML = "Текущий массив: "

        for (var i = 0; i < arrOfTriangles.length; i++){
            resField.innerHTML += "{ " + arrOfTriangles[i].vertices + 
                ", " + arrOfTriangles[i].a + 
                ", " + arrOfTriangles[i].b + 
                ", " + arrOfTriangles[i].c + " }" + "<br>";
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
            resField.innerHTML = "Треугольник не существует";
            break;
        case 3 : 
            resField.innerHTML = "Cтороны не положительное число!";
            break;
        case 4 : 
            resField.innerHTML = "Название должно стостоять из 3-х символов!";
            break;
        case 5 :
            resField.innerHTML = "Сначала задайте треугольники";
    }   
}

Task3.showResult = function () {
    resField.style.color = "green";
    
    for (var i = 0; i < Task3.result.length; i++){
        resField.innerHTML += Task3.result[i].vertices + ", s =" +
            Task3.result[i].s + "<br>";
    }
    
}


Task3.generateSortedArr = function (arr){
    var halfP;

    //получение площади для каждого треугольника

    for (var i = 0; i < arrOfTriangles.length; i++){
       
        halfP = (arrOfTriangles[i].a + arrOfTriangles[i].b + 
            arrOfTriangles[i].c)/2; //Полупериметр
         console.log (halfP);
        arrOfTriangles[i].s = Math.sqrt(halfP * (halfP - arrOfTriangles[i].a) *
            (halfP - arrOfTriangles[i].b) * (halfP - arrOfTriangles[i].c));
        console.log (arrOfTriangles[i].s);
    }   //формула Герона

    function triangleCompare (tr1, tr2) { //функция для сортировки
        return tr1.s - tr2.s;
    }

    Task3.result = arrOfTriangles.sort(triangleCompare); 
}

})();