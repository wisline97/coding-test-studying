function solution(my_string) {
    var answer = 0;
    var strToNum = my_string.split("")
    for(i=0; i<strToNum.length; i++){
        strToNum[i] = Number(strToNum[i])
        if(isNaN(strToNum[i]) == false){
            answer += strToNum[i] 
        }
    }
    return answer;
}