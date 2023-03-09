function solution(my_string, n) {
    var answer = '';
    for(i=0; i<my_string.length; i++){
        for(j=0; j<n; j++){
            answer += my_string[i]
        }
    }
    return answer;
}