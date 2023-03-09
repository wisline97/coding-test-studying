function solution(my_str, n) {
    var answer = [];
    var strLength = my_str.length;
    var turns = Math.ceil(strLength/n);
    var my_strIdx = 0;
    
    
    for(i=0; i<turns; i++){
        var temp = ""
        for(y=0; y<n; y++){
            temp += my_str[my_strIdx];
            my_strIdx += 1;
            if(my_strIdx == strLength){
                break
            }
        }
        answer.push(temp)
    }
    
    return answer;
}