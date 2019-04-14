var errState;

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
function getCurrentTriangle (){    
    var triangle = Task3.getParams();
    errState = Task3.validateParams(triangle);

    if (!errState) {
        Task3.pushTriangle(triangle); 
        Task3.showCurrentArray();       
    } else {
        Task3.showErrMsg(errState);
    }     
}

function runTask3() {
    Task3.generateSortedArr();
    console.log (Task3.result.length);

    if (Task3.result.length > 0) {
        Task3.showResult();
    } else {
        Task3.showErrMsg(5);
    } //5 - не было введено ни одного треугольника

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

