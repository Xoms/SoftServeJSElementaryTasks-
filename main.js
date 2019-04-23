
//********************Task1 ***************
function runTask1(){ 
    //params is array[length, width, symb]
    let result;
    let params = Task1.getParams();
    console.log (params);    

    let errState = Task1.validateParams(...params);
    if (errState) {
        Task1.showErrMsg(errState);            
    } else {
        result = Task1.generateChessStr(...params);
        Task1.showResult(result);
    }
}

//********************Task2 ***************
function runTask2() {            
    let result;
    let params = Task2.getParams();
    console.log (params);
    if (!Task2.validateParams(...params)){
        Task2.showErrMsg ();
    } else {   
        result = Task2.calcEnvelopeEntries(...params);
        Task2.showResult(result);
    }
    return;
}

//********************Task3 ***************
//Add current triangle to array of triangles
function getCurrentTriangle (){    
    //Getting input params    
    //triangles - array inside closure Task3

    let triangle = Task3.getParams(); 
   console.log(triangle);

    //Generate error code (no errors - 0)
    let errState = Task3.validateParams(triangle);

    if (!errState) { //if no errors(!0 == true)
        //current triangle
        console.log (triangle);

        //add triangle to current array of triangles
        Task3.pushTriangle(triangle);       

        Task3.showCurrentArray(); //array of triangles from closure             
    } else {
        Task3.showErrMsg(errState);
    }     
}

//Sort array of triangles and show result
function runTask3() {
    //result - sorted array of triangles
    //Task3.generateResult() - calculates S of triangles and makes sort
    let result = Task3.generateResult();
    //console.log ("Result length: " + result.length);
    
    Task3.showResult(result);
}

//********************Task4 ***************
function runTask4() {
    let errState;
    let params = Task4.getParams();
    let result;
    //let resField = document.getElementById("resTask4").innerHTML = "";

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
    let errState;
    console.log (context.min + ' ' + context.max)
    errState = Task5.validateParams(context);    

    if (errState) {
        Task5.showErrMsg(errState);
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

