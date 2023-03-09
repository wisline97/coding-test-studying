function solution(n, k) {
    var lamb = 12000;
    var drink = 2000;
    if(n % 10 == 0){
        k = k - (n/10)
    } else{
        k = k - parseInt(n/10)
    }
    var answer = (lamb * n) + (drink * k);
    return answer;
}