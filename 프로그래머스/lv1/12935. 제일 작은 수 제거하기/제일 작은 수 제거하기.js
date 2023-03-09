function solution(arr) {
    var answer = []
    var answerIdx = 0
    if(arr.length-1 == 0){
    answer[arr.length-1] = -1;   
    } else{
        var max = 0
        for(i=0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i]
            }
        }
        var min = max
        for(i=0; i<arr.length; i++){
            if(arr[i]<min){
                min = arr[i]
            }
        }
        for(i=0; i<arr.length; i++){
            if(arr[i]!=min){
                answer[answerIdx] = arr[i]
                answerIdx += 1
            }
        }
    }
    
    return answer;
}