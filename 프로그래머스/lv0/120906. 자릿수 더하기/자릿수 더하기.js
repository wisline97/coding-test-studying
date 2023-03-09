function solution(n) {
    var answer = 0;
    var numToStr = String(n);
    var numToArr = numToStr.split("");
    var strToNum = [];
    
    for (i = 0; i < numToArr.length; i++) {
        strToNum.push(parseInt(numToArr[i]));
    }

    for (a = 0; a < strToNum.length; a++) {
        answer = answer + strToNum[a];
        }
    
    return answer;
}