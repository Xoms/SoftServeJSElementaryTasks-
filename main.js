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
    Task3.getParams();
    errState = Task3.validateParams();

    if (!errState) {
        Task3.pushTriangle (); 
        Task3.showCurrentArray ();       
    } else {
        Task3.showErrMsg(errState);
    }     
}

function runTask3() {
    Task3.generateSortedArr();

    if (Task3.result.lenght > 0) {
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

//********************Task6 ***************

//********************Task7 ***************

