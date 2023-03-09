function solution(x) {
    var answer = false;
    var total = 0
    var num = x
    while(true){
        total += num%10
        num = parseInt(num/10)
        if(num == 0){
            break
        }
    }
    if(x%total == 0){
        answer = true
    }
    return answer;
}