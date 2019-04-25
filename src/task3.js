let Task3 = (function () {
//Will return an object Task3

let Task3 = {}; //object with methods for this task
let triangles = []; //array of objects of triangles
const resField = document.querySelectorAll(".resField")[2];
const inpField = document.querySelectorAll(".dataInput")[2]; 


Task3.getParams = function () {
    let triangle = {}; //current triangle
    let inputs = inpField.querySelectorAll("input");

    triangle.vertices = inputs[0].value; 
    triangle.a = +inputs[1].value; 
    triangle.b = +inputs[2].value;
    triangle.c = +inputs[3].value; 
    console.log (triangles);   
    return triangle;   

}

//================================== Validation ===============================

Task3.validateParams = function (triangle) {
    //NaN
    if (isNaNArgs(triangle.a, triangle.b, triangle.c)) {
        errState = 1;

    // <0
    } else if (!isPositive(triangle.a, triangle.b, triangle.c)) {
        errState = 2;

    //Not a triangle    
    } else if (!isTriangle(triangle.a, triangle.b, triangle.c)) {    
        errState = 4;

    //Symbols in vertices not 3 || not [A-Z] 
    // or there are equal symbols
    } else if (triangle.vertices.length !== 3 || 
               triangle.vertices.search(/[A-Z]{3}/) === -1 ||
               triangle.vertices[0] === triangle.vertices[1] ||
               triangle.vertices[0] === triangle.vertices[2] ||
               triangle.vertices[1] === triangle.vertices[2])
               { 
        errState = 5;

    //No errors    
    } else { errState = 0; }

    //Triangle with this vertices aready exists
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
    0 - ok; */    
}

//============================ Messages =======================================

Task3.showCurrentArray = function() {
    // triangles - current array from closure
    resField.style.color = "green";
    resField.innerHTML = "Текущий массив: ";

    for (var i = 0; i < triangles.length; i++){
        resField.innerHTML += `{ ${triangles[i].vertices} 
            , ${triangles[i].a}  
            , ${triangles[i].b}  
            , ${triangles[i].c} } <br>`;
    }
}


Task3.showErrMsg = function (errState) {
    resField.style.color = "red";
    
    switch (errState){
        case 1 : 
            resField.innerHTML = `Стороны должны быть числом`;
            break;
        case 2 : 
            resField.innerHTML = `Cтороны не положительное число!`;
            break;
        case 4 : 
            resField.innerHTML = `Треугольник не существует`;
            break;
        case 5 : 
            resField.innerHTML = `Название должно стостоять из 3-х БОЛЬШИХ
             и РАЗНЫХ латинских символов!`;
            break;
        case 6 : 
            resField.innerHTML = `Такой есть!`;
            break;                    
    }   
}

Task3.showResult = function (result) {
    //result  - sorted array of triangles (Task3.context.result)
    console.log(result);
    resField.style.color = "green";
    resField.innerHTML = "";
    if (result.length === 0) {
        resField.innerHTML = `Сначала задайте треугольники`;
    } else {
        for (var i = 0; i < result.length; i++){
            resField.innerHTML += `${result[i].vertices}, s = 
                ${result[i].s} <br>`;
        }
    }    
}

//=============================== Calculations ================================
Task3.pushTriangle = function(triangle) {
//adds current triangle to array of triangles
//triangle passed validation   
    triangles.push (triangle);    
}

//half of perimeter
Task3.getHalfP = function(a, b, c){           
    return (a + b + c)/2;
}
//Square for triangles
Task3.getSquare = function (a, b, c, halfP) {
    return Math.sqrt(halfP * (halfP - a) *
            (halfP - b) * (halfP - c));
}

Task3.generateResult = function (){
    //triangles  - array of triangle objects
    //function "knows" about it from closure
    let halfP; 

    //get S for all triangles
    for (var i = 0; i < triangles.length; i++){       
        halfP = Task3.getHalfP(triangles[i].a, triangles[i].b, 
            triangles[i].c); 
        //console.log (halfP);
        
        triangles[i].s = Task3.getSquare(triangles[i].a, triangles[i].b, 
            triangles[i].c, halfP);
        //and add it for every triangle object as property .s
        //console.log (triangles[i].s);
    }   

    //function for sort
    function triangleCompare (tr1, tr2) {         
        return tr1.s - tr2.s; 
    }
    //console.log (triangles.sort(triangleCompare));

    return triangles.sort(triangleCompare); 
}
return Task3;
})();