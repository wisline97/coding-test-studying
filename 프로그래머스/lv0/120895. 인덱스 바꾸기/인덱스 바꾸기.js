function solution(my_string, num1, num2) {
    var temp = my_string[num1];
    var answer = [];
    
    for(i=0; i<my_string.length; i++){
        answer[i] = my_string[i];
    }
    
    answer[num1] = answer[num2];
    answer[num2] = temp;
    
    answer = answer.join("");
    
    return answer;
}