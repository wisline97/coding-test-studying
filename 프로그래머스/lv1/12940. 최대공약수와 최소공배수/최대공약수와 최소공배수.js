function solution(n, m) {
    var answer = [];
    if(n>m){
        var min = m
        var max = n
    } else{
        var min = n
        var max = m
    }
    //최대공약수
    for(i=min; i>=0; i--){
        if(min%i == 0 && max%i == 0){
            answer[0] = i
            break
        }
    }
    //최소공배수
    for(i=1; true; i++){
        if(i%n == 0 && i%m == 0){
            answer[1] = i
            break
        }
    }
    return answer;
}