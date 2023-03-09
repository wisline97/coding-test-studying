function solution(absolutes, signs) {
    var answer = 0;
    for(i=0; i<signs.length; i++){
        if(signs[i] == true){
            absolutes[i] = absolutes[i]*1 
        } else {
            absolutes[i] = absolutes[i]*-1
        }
    }
    
    for(i=0; i<absolutes.length; i++){
        answer += absolutes[i]
    }
    return answer;
}