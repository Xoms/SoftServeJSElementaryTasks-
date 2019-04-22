var errState; // переменная для состояния ошибки


//********************Task1 ***************
function runTask1(){  
    Task1.parseData();    
    Task1.generateChessStr();
}

//********************Task2 ***************
function runTask2() {        
    Task2.parseData();    
    Task2.calcEnvelopeEntries();
}

//********************Task3 ***************
/*Тут мы видим ТОЛЬКО результат срабатывания кнопок (тоесть):
    - Проверки происходят не динамически (это плохо);
    - Нажатия на кнопки при не корректных данных доступны (хз, +\-);
    - Проверка на корректность проходит ПО ВСЕМ полям сразу (это плохо);
    - Проверка генерит пояснение о ошибке ввода (это +);
*/



function getCurrentTriangle (){    
    //Получаем исходные данные
    
    //triangles - массив внутри замыкания Task3

    let triangle = Task3.getParams(); 
   

    //Генерим код ошибки ввода (если нет - 0)
    let errState = Task3.validateParams(triangle);

    if (!errState) { //Если ошибки ввода нет (!0 == true)
        //текущий треугольник
        console.log (triangle);

        //к текущему массиву (в замыкании Task3) добавим элемент
        Task3.pushTriangle(triangle);       

        Task3.showCurrentArray(); // Текущий массив (из замыкания Task3)             
    } else {
        Task3.showErrMsg(errState);
    }     
}

function runTask3() {
    //result - отсортированный массив треугольников
    //Task3.generateResult() - выполняет вычисление площади и сортировку по ней
    var result = Task3.generateResult();
    console.log ("Result length: " + result.length);

    if (result.length > 0) {
        Task3.showResult(result);
    } else {
        Task3.showErrMsg(7);
    } //7 - не было введено ни одного треугольника

}

//********************Task4 ***************
function runTask4() {
    let errState;
    let params = Task4.getParams();
    let result;
    let resField = document.getElementById("resTask4").innerHTML = "";

    console.log (params);
    errState = Task4.validateParams(params);
    if (errState) {
        Task4.showErrMsg(errState);
    } else {
        result = Task4.run(params);
        Task4.showResult(result);
    }
}
//********************Task5 ***************
function runTask5() {
    let context = {}; /*Объект состояния вычислений
                        хранит исходные данные, коды ошибок,
                        результаты вычислений */
   
    context = Task5.getParams();
    console.log (context.min + ' ' + context.max)
    Task5.validateParams(context);    

    if (context.errState) {
        Task5.showErrMsg(context.errState);
    } else {
        context.ticketsArr = Task5.generateTicketNumbers(context.min, context.max);
        Task5.compareMethods(context);
        Task5.showResult(context);
    }

}
//********************Task6 ***************

function runTask6() {
    let context = {};
    let errState;
    let result;
    
    context = Task6.getParams();
    errState = Task6.validateParams(context);
    if (errState) {
        Task6.showErrMsg(errState);
    } else {
       result = Task6.run(context); 
       Task6.showResult(result);
    }
}

//********************Task7 ***************
function runTask7() {
    let context = {};
    let errState;
    let result;
    
    context = Task7.getParams();
    errState = Task7.validateParams(context);
    if (errState) {
        Task7.showErrMsg(errState);
    } else {
       result = Task7.run(context); 
       Task7.showResult(result);
    }
}

