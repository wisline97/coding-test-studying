function solution(n) {
    var check = false;
    for(i=1; i<=n; i++){
        if(i*i == n){
            check = true;
            break;
        }
    }
    var answer = check ? 1 : 2;
    return answer;
}