(function () {
//ПАЛИНДРОМ

window.Task4 = {};
Task4.run = function (){


/*var inpStr = "1221";

var tmpLen;
var leftSubstr; // ---->
var rightSubstr; // <----
// Переменные для перебора с центра и для сдвигов
var leftShift = 1;
var rightShift = 1;
var center;
var startPos;
var endPos;

function reverseString(str) {
    return str.split("").reverse().join("");
}
/*1) Проверить на палиндром целяком
    if (inpStr == reverseString(inpStr)) {
        cnt ++;
        result += inpStr + ", ";
    }
 */
// 2) Проверяю пары
/*for (var i = 0; i < inpStr.length - 2; i++) {
    if ( inpStr.charAt(i) != 0 && inpStr.charAt(i) == inpStr.charAt(i+1)) {
        cnt++;
        result += inpStr.charAt(i) + inpStr.charAt(i+1) + ", "; 
    }
}*/

//3) Танцы с бубном от центра 

/*function findAtCurentCenter (center){
    var startPos = center - 1;
    var endPos = center + 2;  //т.к. slice будет до, но не включая 2-го аргумента

    while (true) { 
                      
        if (startPos < 0) { startPos = 0; }
        if (endPos > inpStr.length - 1) { endPos = inpStr.length -1; }        
        // Получим субстроку
        if (endPos!== inpStr.length - 1) {
            leftSubstr = inpStr.slice(startPos,endPos);
        } else {
            leftSubstr = inpStr.slice(startPos);
        }
        // Прочитаем её задом
        rightSubstr = reverseString(leftSubstr);
        if (leftSubstr == rightSubstr) {
            cnt++;
            result += leftSubstr + ", ";
        }

        if (startPos == 0 && endPos > inpStr.length - 1) {
            break;
        }

        startPos--;
        endPos++;
    }
}

center = Math.ceil(inpStr.length / 2); // округлю в большую сторону
findAtCurentCenter(center);

while (center){ 
    --center; //центр влево
    findAtCurentCenter(center);
}
center = Math.ceil(inpStr.length / 2);
while (center <= inpStr.length -1) {
    ++center; //центр вправо
    findAtCurentCenter(center);
} */
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
}

console.log (result + "Всего: " + cnt);
}
})();