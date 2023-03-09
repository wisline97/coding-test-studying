function solution(array) {
    var max = 0
    var maxNum = 0
    for(i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i]
            maxNum = i
        }
    }
    var answer = [max, maxNum]
    return answer;
}