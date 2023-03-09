function solution(n) {
    //answer == y
    var answer = 1;
    var i = 1;
    while(i*answer <= n){
        i = i*answer;
        console.log(i, answer)
        answer += 1;
    }
    return answer-1;
}