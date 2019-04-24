let Task4 = (function () {
//ПАЛИНДРОМ

let Task4 = {};
const resField = document.querySelectorAll(".resField")[3];
const inpField = document.querySelectorAll(".dataInput")[3];


Task4.getParams = function () {
    let params = +inpField.querySelector(input);    
    return params;
}

Task4.validateParams = function (params) {
    let errState;
    if (isNaN(params) || params < 10 || !isInteger(params)) {
        errState = 1;
    } else {
        errState = 0;
    }
    return errState;
}

Task4.run = function (inpStr){
let substr;
let result = {};
    result.palindromes = "Palindromes ";
    result.cnt = 0;
let startPos = 0;
let endPos = inpStr.length - 1;
let isPolindrome;

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
                isPalindrome = false;
                break; //т.к. если хоть один разный дальше нет смысла
            } 
            isPalindrome = true;          
        }
        if (isPalindrome) {
            //Палиндром найден, добавим к результату
            result.cnt++;
            result.palindromes += substr + " ";           
        }
    }
    console.log (result.palindromes + "All: " + result.cnt);
    endPos--;    
}
if (result.cnt == 0){
    result.palindromes = 0;
}
console.log (result.palindromes + "All: " + result.cnt);
return result;
}

Task4.showErrMsg = function (errState) {
    resField.innerHTML = "введенный палиндром не целое число > 10";
    resField.style.color = "red";
}
Task4.showResult = function (result) {
    resField.style.color = "green";
    resField.innerHTML = result.palindromes + " All: " + result.cnt;
}

return Task4;
})();