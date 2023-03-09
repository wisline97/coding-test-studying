function solution(numbers) {
    numbers.sort(function(a,b){return a - b;});
    var max1 = numbers[numbers.length-1];
    var max2 = numbers[numbers.length-2];
    var answer = max1*max2;
    return answer;
}