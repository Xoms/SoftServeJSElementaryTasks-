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
var tmpArr = []; // Временный массив треугольников для Task3

function getCurrentTriangle (){    
    //Получаем исходные данные
    var triangle = Task3.getParams(); 
    Task3.context.triangle = triangle;

    //Генерим код ошибки (если нет - 0)
    errState = Task3.validateParams(Task3.context);

    if (!errState) { //Ошибки нет
        
        console.log (Task3.context.triangle);
        tmpArr = Task3.context.triangles;  

        console.log(tmpArr);

        tmpArr = Task3.pushTriangle(tmpArr, triangle);
        Task3.context.triangles = tmpArr;
        //console.log (tmpArr);
        


        console.log (Task3.context.triangles + ' ' + triangle);

        Task3.showCurrentArray(Task3.context.triangles); // Текущий массив               
    } else {
        Task3.showErrMsg(errState);
    }     
}

function runTask3() {
    var result = Task3.generateResult(Task3.context.triangles);
    console.log (result.length);

    if (result.length > 0) {
        Task3.showResult(result);
    } else {
        Task3.showErrMsg(7);
    } //7 - не было введено ни одного треугольника

}

//********************Task4 ***************
function runTask4() {
    Task4.run();
}
//********************Task5 ***************
function runTask5() {
    var context = {}; /*Объект состояния вычислений
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
    Task6.run();
}

//********************Task7 ***************
function runTask7() {
    Task7.run();
}

