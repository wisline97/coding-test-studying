function solution(my_string) {
    var strArr = my_string.split("")
    var answer = '';
    for(i=0; i<my_string.length; i++){
        if(my_string.charCodeAt(i) <= 90){
            answer += strArr[i].toLowerCase()
        } else{
            answer += strArr[i].toUpperCase()
        }
    }
    return answer;
}