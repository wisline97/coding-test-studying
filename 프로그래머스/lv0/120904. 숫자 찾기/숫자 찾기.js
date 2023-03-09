function solution(num, k) {
    var answer = 0;
    var numToStr = num + ""
    var idx = 0
    var check = false
    for(i=0; i<numToStr.length; i++){
        if(numToStr[i] == k){
            idx = i
            check = true
            break
        }
    }
    
    if (check){
        answer = idx+1    
    } else{
        answer = -1
    }
    return answer;
}