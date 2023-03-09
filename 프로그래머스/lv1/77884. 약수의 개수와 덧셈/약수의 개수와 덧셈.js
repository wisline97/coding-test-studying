function solution(left, right) {
    var answer = 0;
    for(left; left<=right; left++){
        var count = 0
        for(j=1; j <= left; j++){
            if(left%j == 0){
                count += 1
            }
        }
        if(count % 2 ==0){
            answer += left
        } else{
            answer -= left
        }
    }
    return answer;
}