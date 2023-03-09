function solution(a, b) {
    var answer = 0;
    if(a>b){
        var max = a
        var min = b
    } else{
        var max = b
        var min = a
    }
    for(i=min; i<=max; i++){
        answer += i
    }
    return answer;
}