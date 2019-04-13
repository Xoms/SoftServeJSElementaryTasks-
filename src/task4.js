(function () {
//ПАЛИНДРОМ

window.Task4 = {};
Task4.run = function (){

var substr;
var inpStr = "1221";
var cnt = 0;
var result = "Найденные палиндромы: ";

var startPos = 0;
var endPos = inpStr.length - 1;
while (endPos >= 1) {
    startPos = 0;
    for (i = 0; i < endPos - 1; i++ ){
        if (endPos = inpStr.length -1) {
            substr = inpStr.slice (startPos);    
        } else {
            substr = inpStr.slice (startPos, endPos + 1);
        } 
        startPos++;
        for ( j = 0; j <= substr.length / 2 + 1; j++) {
            if (!(substr.charAt(j) == substr.charAt(substr.length - j - 1))) {
                break; 
            }
            cnt++;
            result += substr + " "; 
        }
    }
    endPos--;
}


console.log (result + "Всего: " + cnt);
}
})();