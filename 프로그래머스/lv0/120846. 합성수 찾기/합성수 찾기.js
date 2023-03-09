function solution(n) {
    var numArr = [];
    var answer = [];
    var answerIdx = 0;
    for(i=0; i<n; i++){
        numArr[i] = i+1;
    };
    for(y=0; y<numArr.length; y++){
        var count = 0;
        for(z=0; z<numArr[y]+1; z++){
            if(numArr[y] % z == 0){
                count+=1;
            }
        };
        if(count >= 3){
            answer[answerIdx] = numArr[y];
            answerIdx += 1
        };
    }
    console.log(answer)
    return answer.length;
}