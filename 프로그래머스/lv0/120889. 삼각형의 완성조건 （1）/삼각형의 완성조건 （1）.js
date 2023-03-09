function solution(sides) {
    var max = 0;
    var total = 0;
    var answer = 0;
    var check = false;
    var temp = 999999
    
    //sides의 원소가 모두 같은지 판별
    for(i = 0; i < sides.length; i++){
        if(sides[i] == temp){
            check = true
        } else{
            check = false
        }
        temp = sides[i]
    }
    
    //만약 check가 참이라면 정삼각형을 만들 수 있으므로 항상 1을 반환
    if (check == false) {
        for (i = 0; i < sides.length; i++) {
            if (sides[i] > max) {
                max = sides[i];
            }
        }
        for (i = 0; i < sides.length; i++) {
                total += sides[i];
        }
        total = total - max
        answer = max < total ? 1 : 2; 
    } else {
        answer = 1;
    }
    return answer
}