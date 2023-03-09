function solution(n) {
    var answer = [];
    var divisor = [];
    for(let i=1; i<=n; i++){
        if(n%i == 0){
            divisor.push(i);
        }
    }
    
    
    for(let i=0; i<divisor.length; i++){
        var cnt = 0;
        for(let x = 1; x<=divisor[i]; x++){
            if(divisor[i] % x == 0){
                cnt += 1;
            }
        }
        if(cnt == 2){
            answer.push(divisor[i]);
        }
    };
    return answer;
}