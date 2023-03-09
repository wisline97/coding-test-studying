function solution(my_string) {
    var answer = [];
    var answerIdx = 0
    for(i=0; i<my_string.length; i++){
        if(my_string.charCodeAt(i) >= 48 && my_string.charCodeAt(i)<58){
            answer[answerIdx] = my_string[i]/1;
            answerIdx += 1
        };
    };

    answer.sort(function(a,b){
        return a-b;
    })
    
    return answer;
}