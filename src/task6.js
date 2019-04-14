(function () {

window.Task6 = {};

Task6.run = function (){
var context = {len : 4, //кол-во знаков
               num : 2048 // число 
               };

function makeArrByLength (context){
    //1) len
    context.arrByLength = [];
    var num = 0;
    var current = ""; 


    while (true) {
        current=String(num*num);
        
        if (current.length <= context.len){
            context.arrByLength.push(num);
            num++;
        } else { 
            break;
        }
    }
};

function makeArrByNumber (context){
    var num = 0;
    context.arrByNum = [];
    
    while (num*num <= context.num) {
        context.arrByNum.push(num);
        num++;
    }
};

makeArrByLength(context);
makeArrByNumber (context);

console.log (context.num);
console.log ("arrByNum: " + context.arrByNum);
console.log (context.len);
console.log ("arrByLength: " + context.arrByLength);

}

})();