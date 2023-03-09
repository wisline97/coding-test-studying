function solution(hp) {
    var answer = 0;
    var max = 5
    var mid = 3
    var min = 1
    
    while(hp>0){
        if(hp - max>=0){
        hp -= max
        answer += 1   
        } else{
            break
        }       
    }
    
    while(hp>0){
        if(hp - mid>=0){
            hp -= mid
            answer += 1   
        } else{
            break
        }       
    }
    
    while(hp>0){
        if(hp - min>=0){
            hp -= min
            answer += 1   
        } else{
            break
        }       
    }

    return answer;
}