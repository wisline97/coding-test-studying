function solution(s) {
    var answer = '';
    if(s.length % 2 ==0){
        var idx = s.length/2
        answer = s[idx-1] + s[idx]  
    } else{
        var idx = parseInt(s.length/2)
        answer = s[idx]
    }
    return answer;
}