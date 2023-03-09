function solution(numbers) {
    var answer = 0;
    var check = false
    for(i=0; i<10; i++){
        for(j=0; j<numbers.length; j++){
            if(numbers[j] != i){
                check = true
            } else {
                check = false
                break
            }
        }
        if(check){
            answer += i
        }
    }
    return answer;
}