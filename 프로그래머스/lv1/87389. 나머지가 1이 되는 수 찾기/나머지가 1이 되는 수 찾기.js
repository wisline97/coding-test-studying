function solution(n) {
    var answer = 0;
    var x = 0
    for(i=0; i<n; i++){
        if(i != n-1 && n%i == 1){
            x = i
            break
        } else if(i == n-1){
            x = i
        }
    }
    answer = x
    return answer;
}