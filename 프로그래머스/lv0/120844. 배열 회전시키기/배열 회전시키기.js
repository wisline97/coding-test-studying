function solution(numbers, direction) {
    var answer = [];
    for(i=0; i<numbers.length; i++){
        answer[i] = numbers[i]
    }
    if(direction == "right"){
        var temp = 0;
        var end = numbers.length - 1;
        for (i = end; i > 0; i--) {
                temp = answer[i-1];
                answer[i-1] = answer[i];
                answer[i] = temp;
        }
    } else{
        var temp = 0;
        for (i = 0; i < answer.length - 1; i++) {
            temp = answer[i + 1]
            answer[i + 1] = answer[i]
            answer[i] = temp
        }
        
    }
    return answer;
}