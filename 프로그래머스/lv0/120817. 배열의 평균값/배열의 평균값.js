function solution(numbers) {
    var n = numbers.length;
    var add = 0;
    for(i=0; i<numbers.length; i++){
        add = add + numbers[i];
    }
    
    var answer = add/n;
    
    return answer;
}