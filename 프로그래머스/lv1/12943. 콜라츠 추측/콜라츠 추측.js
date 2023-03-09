function solution(num) {
    var answer = 0;
    var count = 0
    while(num >= 1){
        if(num == 1){
            answer = 0
            break
        } else {
        if(num%2==0){
            num = num/2
            count += 1
            continue
        } else{
            num = (num*3)+1
            count += 1
            continue
        }
        }

    }
    if(count > 500){
        answer = -1
        } else{
            answer = count
        }
    return answer;
}