function runTask1(){  
    if (!Task1.validateParams()) {
        Task1.showErrMsg();
        return;
    }   
    Task1.showResult(Task1.calculateChessStr());
}

function runTask2() {        
    Task2.parseData();    
    Task2.calcEnvelopeEntries();
}

