function solution(array) {
    var answer = array.sort(function(a, b)  {
        return a - b;
    });
    
    return answer[Math.floor(array.length/2)];
}