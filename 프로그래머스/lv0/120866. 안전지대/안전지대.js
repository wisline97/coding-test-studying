function solution(board) {
    var rows_max = board.length - 1;
    var cols_max = board[0].length - 1;

    var dangerous_place = 0;
    var every_place = (rows_max+1) * (cols_max+1);
    
    var bomb_location = [];
    
    for(var rows=0; rows<rows_max+1; rows++){
        for(var cols=0; cols<cols_max+1; cols++){
            if(board[rows][cols] == 1){
                bomb_location.push([cols,rows]);
            };
        };
    };

    //폭탄범위 반경 1로 칠하기
    if(bomb_location.length == every_place){
        var safety_place = 0;
    } else{
        for(var bomb=0; bomb<bomb_location.length; bomb++){
            var bomb_x = bomb_location[bomb][0];
            var bomb_y = bomb_location[bomb][1];

            // x축 칠하기
            if(bomb_x == 0){
                board[bomb_y][bomb_x+1] = 1;
            } else if(bomb_x == cols_max){
                board[bomb_y][bomb_x-1] = 1;
            } else{
                board[bomb_y][bomb_x+1] = 1;
                board[bomb_y][bomb_x-1] = 1;
            }

            // y축 칠하기
            if(bomb_y == 0){
                board[bomb_y+1][bomb_x] = 1;
            } else if(bomb_y == rows_max){
                board[bomb_y-1][bomb_x] = 1;
            } else{
                board[bomb_y+1][bomb_x] = 1;
                board[bomb_y-1][bomb_x] = 1;
            }

            // 대각선 칠하기
            if((bomb_x != 0 && bomb_x != cols_max) && bomb_y == 0){
                board[bomb_y+1][bomb_x-1] = 1;
                board[bomb_y+1][bomb_x+1] = 1;
            } else if((bomb_x != 0 && bomb_x != cols_max) && bomb_y == rows_max){
                board[bomb_y-1][bomb_x-1] = 1;
                board[bomb_y-1][bomb_x+1] = 1;
            } else if((bomb_y != 0 && bomb_y != rows_max) && bomb_x == 0){
                board[bomb_y+1][bomb_x+1] = 1;
                board[bomb_y-1][bomb_x+1] = 1;
            } else if((bomb_y != 0 && bomb_y != rows_max) && bomb_x == cols_max){
                board[bomb_y+1][bomb_x-1] = 1;
                board[bomb_y-1][bomb_x-1] = 1;
            } else if(bomb_y == 0 && bomb_x == 0){
                board[bomb_y+1][bomb_x+1] = 1;
            } else if(bomb_y == 0 && bomb_x == cols_max){
                board[bomb_y+1][bomb_x-1] = 1;
            } else if(bomb_x == cols_max && bomb_y == rows_max){
                board[bomb_y-1][bomb_x-1] = 1;
            } else if(bomb_x == 0 && bomb_y == rows_max){
                board[bomb_y-1][bomb_x+1] = 1;
            } else{
                board[bomb_y-1][bomb_x-1] = 1;
                board[bomb_y-1][bomb_x+1] = 1;
                board[bomb_y+1][bomb_x-1] = 1;
                board[bomb_y+1][bomb_x+1] = 1;
            };
        };
        
        for(var rows=0; rows<rows_max+1; rows++){
            for(var cols=0; cols<cols_max+1; cols++){
                if(board[rows][cols] == 1){
                    dangerous_place += 1;
                };
            };
        };
        var safety_place = every_place - dangerous_place;
    };
    return safety_place
}