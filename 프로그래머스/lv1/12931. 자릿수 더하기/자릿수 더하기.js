function solution(n)
{
    var answer = 0;
    while(true){
        var n1 = n%10
        answer += n1 
        n = parseInt(n/10)
        if(n == 0){
            break
        }
    }
    return answer;
}