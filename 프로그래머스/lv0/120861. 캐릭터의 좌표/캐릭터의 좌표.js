function solution(keyinput, board) {
    var answer = [];
    
    var x_max = [(board[0] - 1)/2, -(board[0] - 1)/2];
    var y_max = [(board[1] - 1)/2, -(board[1] - 1)/2];
    
    var x_idx = 0;
    var y_idx = 0;
    
    for(var turns = 0; turns<keyinput.length; turns++){
        if(keyinput[turns] == "left"){
            if(x_idx - 1 >= x_max[1]){
                x_idx -= 1;
            }
        } else if(keyinput[turns] == "right"){
            if(x_idx + 1 <= x_max[0]){
                x_idx += 1;
            }
        } else if(keyinput[turns] == "up"){
            if(y_idx + 1 <= y_max[0]){
                y_idx += 1;
            }
        } else if(keyinput[turns] == "down"){
            if(y_idx - 1 >= y_max[1]){
                y_idx -= 1;
            }
        }
    };
    
    answer.push(x_idx);
    answer.push(y_idx);
    
    return answer;
}