function solution(numbers) {
    var max = -10000*10000;
    for(i=0; i<numbers.length; i++){
        for(y=0; y<numbers.length; y++){
              if(i!=y){
                  if(max < numbers[i]*numbers[y]){
                      max = numbers[i]*numbers[y];
                  };
              };
        };    
    };
    return max;
}