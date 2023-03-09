function solution(n) {
    var answer = 0;
    var i = 1
    while(true){
        if(i*i == n){
            var x = i+1
            answer = x*x
            break
        } else{
            i+=1
        }
        if(i == n){
            answer = -1
            break
        }
    }
    return answer;
}