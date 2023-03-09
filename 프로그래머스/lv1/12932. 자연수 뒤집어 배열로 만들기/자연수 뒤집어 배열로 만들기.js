function solution(n) {
    var answer = [];
    var str = String(n)
    var arr = str.split("")
    answer = arr.reverse()
    for(i=0; i<arr.length; i++){
        answer[i] = Number(answer[i])
    }
    return answer;
}