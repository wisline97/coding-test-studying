function solution(n) {
    var answer = [];
    var y= 0
    for(i=1; i<=n; i++){
        if(n%i == 0){
            answer[y] = i;
            y+=1
        }
    }
    return answer;
}