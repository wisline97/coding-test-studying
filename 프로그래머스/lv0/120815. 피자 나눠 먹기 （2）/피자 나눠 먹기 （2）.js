function solution(n) {
    var answer = 0;
    var standard = 6
    
    while(true){
        answer += 1
        if((answer*standard)%n == 0){
            break
        }
    }
    return answer;
}