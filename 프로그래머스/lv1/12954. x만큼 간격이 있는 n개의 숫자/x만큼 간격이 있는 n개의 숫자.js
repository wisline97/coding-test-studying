function solution(x, n) {
    var answer = [];
    var add = x
    for(i=0; i<n; i++){
        answer[i] = add
        add += x
    }
    return answer;
}