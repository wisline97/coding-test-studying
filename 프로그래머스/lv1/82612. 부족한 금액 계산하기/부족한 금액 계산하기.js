function solution(price, money, count) {
    var total = 0
    var answer = 0
    for(i=1; i<=count; i++){
        total += i*price
    }
    if(total>money){
    answer = total - money;
 } else{
     answer = 0
 }
    return answer;
}