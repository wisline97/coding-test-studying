function solution(num_list, n) {
    var answer = [];
    var answerLen = num_list.length / n;
    var num_list_idx = 0
    for(i=0; i<answerLen; i++){
        answer[i]=[];
        for(y=0; y<n; y++){
            answer[i][y]=y;
        }
    };
    
    for(i=0; i<answerLen; i++){
        for(y=0; y<n; y++){
            answer[i][y] = num_list[num_list_idx]
            num_list_idx += 1;
        }
    };
    
    return answer;
}