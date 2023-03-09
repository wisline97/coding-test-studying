function solution(arr){
    var answer = [];
    var temp = 999
    
for (i = 0; i < arr.length; i++) {
  if (arr[i] != temp) {
    answer.push(arr[i])
  }
  temp = arr[i];
}
    
    return answer
}