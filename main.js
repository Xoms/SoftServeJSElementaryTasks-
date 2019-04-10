function runTask1(){  
    if (!Task1.validateParams()) {
        Task1.showErrMsg();
        return;
    }   
    Task1.showResult(Task1.calculateChessStr());
}

function runTask2() {        
    if (!Task2.validateParams()) {
        Task2.showErrMsg();
        return;
    }   
    
    Task2.showResult(Task2.calcEnvelopeEntries());
}

