(function () {
//ПАЛИНДРОМ

window.Task4 = {};
var params = document.getElementsByClassName('dataInput');
Task4.run = function (){

Task4.getParams = function (){

}


var substr;
var inpStr = "11";
var cnt = 0;
var result = "Найденные палиндромы: ";
var startPos = 0;
var endPos = inpStr.length - 1;

while (endPos >= 1) {
    startPos = 0;
    console.log ("endPos = " + endPos);
    for (i = 0; i < endPos; i++ ){
        if (endPos == inpStr.length -1) {
            substr = inpStr.slice (startPos);    
        } else {
            substr = inpStr.slice (startPos, endPos + 1);
        } 
        console.log ("startPos = " + startPos);
        console.log("substr = " + substr);
        startPos++;

        for ( j = 0; j <= substr.length / 2 + 1; j++) {
            if (!(substr.charAt(j) == substr.charAt(substr.length - j - 1))) {
                isPolindrome = false;
                break; //т.к. если хоть один разный дальше нет смысла
            } 
            var isPolindrome = true;          
        }
        if (isPolindrome) {
            cnt++;
            result += substr + " "; 
            console.log ("writing to result " + result + cnt);
        }
    }
    endPos--;
    if (cnt == 0){
        result = 0;
    }
}

console.log (result + "Всего: " + cnt);
}
})();