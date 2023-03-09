function solution(sides) {
    var answer = [];
    var min = sides[0] > sides[1] ? sides[1] : sides[0]
    var max = sides[0] < sides[1] ? sides[1] : sides[0]
    
//  max가 가장 긴 변일 때
    for(i=1; i<=max; i++){
        if(i+min > max){
            console.log(i)
            answer.push(i)
        }
    }
    
//  나머지 한 변이 가장 긴 변일 때
    var total = min+max;
    for(i=max+1; i<=total; i++){
      if(i<total){
          answer.push(i)
      }  
    }
    return answer.length;
}