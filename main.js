function runTask1(){

    var length = parseInt(document.getElementById("task1Length").value); 
    var	width = parseInt(document.getElementById("task1Width").value); 
    var	symb = document.getElementById("task1Symbol").value;
    var resTask1 = document.getElementById("resTask1");	

    calculateChessStr(length,width,symb);
}

function runTask2() {        
    if (!Task2.validateParams()) {
        console.log("----")
        Task2.showErrMsg();
        return;
    }   
    
    Task2.showResult(Task2.calcEnvelopeEntries());
}

