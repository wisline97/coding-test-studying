function solution(my_string) {
    var answer = 0;
    var temp = my_string.split(/[a-zA-Z]/)
    
    for(var idx = 0; idx<temp.length; idx++){
        if(temp[idx].length > 0){
            answer += temp[idx]/1
        };
    };
    
    return answer;
}