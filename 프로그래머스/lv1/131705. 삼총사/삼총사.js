function solution(number) {
    var answer = 0;
    number.sort((a, b) => a - b)
    var count = 0;
    
    for(var _1st_idx = 0; _1st_idx<number.length; _1st_idx++){
        for(var _2st_idx = _1st_idx+1; _2st_idx<number.length; _2st_idx++){
            
            for(var _3st_idx = _2st_idx+1; _3st_idx<number.length; _3st_idx++){
                if(number[_1st_idx] + number[_2st_idx] + number[_3st_idx] == 0){
                    count += 1
                };
            };
            
        };   
    };
    
    return count;
}