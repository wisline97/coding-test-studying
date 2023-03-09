function solution(my_string) {
    my_string = my_string.toLowerCase();
    my_string = my_string.split("");
    my_string.sort();
    
    var answer = my_string.join("");
    return answer;
}