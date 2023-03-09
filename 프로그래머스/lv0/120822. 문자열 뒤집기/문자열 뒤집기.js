function solution(my_string) {
    var strSplit = my_string.split("");
    var strReverse = strSplit.reverse();
    var answer = strReverse.join("");
    
    return answer;
}