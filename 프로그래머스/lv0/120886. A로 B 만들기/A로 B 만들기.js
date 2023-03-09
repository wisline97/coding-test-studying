function solution(before, after) {
    var answer = 0;
    var afterCopy = []
    
    for(var idx = 0; idx < after.length; idx++){
        afterCopy.push(after[idx]);
    }
    
    for(var idx = 0; idx < before.length; idx++){
        for(var idx2 = 0; idx2 < afterCopy.length; idx2++){
            if(before[idx] == afterCopy[idx2]){
                afterCopy[idx2] = 0;
                break
            };
        };
    };
    
    var check = false
    
    for(var idx = 0; idx < afterCopy.length; idx++){
        if(afterCopy[idx] != 0){
            check = true;
            break
        };
    };
    
    if(check){
        answer = 0;
    } else{
        answer = 1;
    }
    
    return answer;
}