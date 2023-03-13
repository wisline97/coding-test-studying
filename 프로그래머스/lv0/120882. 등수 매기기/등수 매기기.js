function solution(score) {
    var answer = [];
    var avg = [];
    
    for(var score_idx = 0; score_idx<score.length; score_idx++){
        var total = 0;
        total = score[score_idx][0] + score[score_idx][1];
        var unit = total/2;
        avg.push(unit);
    }
    
    console.log(avg)
    
    for(var avg_idx = 0; avg_idx<avg.length; avg_idx++){
        var cnt = 1;
        for(var avg_idx2=0; avg_idx2<avg.length; avg_idx2++){
            if(avg[avg_idx] <= avg[avg_idx2]){
                cnt += 1;
            }
            if(avg[avg_idx] == avg[avg_idx2]){
                cnt -= 1;
            }
        }
        answer.push(cnt)
    }
    
    return answer;
}