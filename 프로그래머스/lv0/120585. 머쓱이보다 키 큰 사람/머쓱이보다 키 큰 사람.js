function solution(array, height) {
    var answer = 0;
    for(i=0; i<array.length; i++){
        if(height < array[i]){
            answer = answer + 1 
        }
        
        
    }
    return answer;
}