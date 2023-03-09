function solution(arr, divisor) {
    var answer = [];
    var tempIdx = 0
    var check = false
    for(i=0; i<arr.length; i++){
        if(arr[i]%divisor == 0){
            answer[tempIdx] = arr[i]
            tempIdx += 1
            check = true
        }
    }
    if(check){
    for(i=0; i<arr.length; i++){
        for(j=0; j<answer.length; j++){
            if(i<j && answer[i] > answer[j]){
                var temp = answer[i]
                answer[i] = answer[j]
                answer[j] = temp
            }
        }
    }
    }
    else{
        answer = [-1]
    }
    console.log(answer)
    return answer;
}