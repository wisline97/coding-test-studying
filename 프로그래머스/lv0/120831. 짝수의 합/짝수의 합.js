function solution(n) {
    var answer = 0;
    var arr = [];
    for(i=0; i<=n; i++){
      if(i % 2 == 0){
      arr.push(i);
      }
    }
    for(a = 0; a<arr.length; a++){
    answer += arr[a];
    }
    return answer;
}