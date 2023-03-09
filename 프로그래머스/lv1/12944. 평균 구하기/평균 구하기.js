function solution(arr) {
    var answer = 0;
    var total = 0
    for(i=0; i<arr.length; i++){
        total += arr[i]
    }
    answer = total / arr.length
    return answer;
}