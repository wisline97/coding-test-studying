function solution(s) {
    var answer = '';
    var strToArr = s.split("")
    strToArr.sort(function(a,b){
        if (a > b) return -1;
        else if (b > a) return 1;
        else return 0;
        })
    answer = strToArr.join("")
    return answer;
}