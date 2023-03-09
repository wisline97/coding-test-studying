function solution(order) {
    var answer = 0;
    var orderStr = order + ""
    for(i=0; i<orderStr.length; i++){
        var strToNum = orderStr[i]/1
        if(strToNum % 3 == 0 && strToNum != 0){
            answer += 1
        }
    }
    return answer;
}