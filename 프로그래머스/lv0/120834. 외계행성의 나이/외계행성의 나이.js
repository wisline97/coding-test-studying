function solution(age) {
    var answer = '';
    var alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    var strAge = age + "";
    for(i=0; i<strAge.length; i++){
        answer += alphabet[strAge[i]/1];
    }
    return answer;
}