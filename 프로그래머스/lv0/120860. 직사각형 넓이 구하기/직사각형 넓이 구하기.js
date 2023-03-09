function get_x_length(dots){
    for(var idx = 0; idx<dots.length-1; idx++){
        if(dots[idx][0] == dots[idx+1][0]){
            continue
        } else{
            var x_length = dots[idx][0] - dots[idx+1][0]
        }
    }
    return Math.abs(x_length)
}

function get_y_length(dots){
    for(var idx = 0; idx<dots.length-1; idx++){
        if(dots[idx][1] == dots[idx+1][1]){
            continue
        } else{
            var y_length = dots[idx][1] - dots[idx+1][1]
        }
    }
    return Math.abs(y_length)
}


function solution(dots) {
    var answer = 0;
    var x_length = get_x_length(dots);
    var y_length = get_y_length(dots);
    
    answer = x_length * y_length;
    
    return answer;
}