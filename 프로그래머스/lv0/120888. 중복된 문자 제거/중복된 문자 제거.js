function solution(my_string) {
    var strToArr = [];
    for(i=0; i<my_string.length; i++){
        var check = true;
        for(y=0; y<strToArr.length; y++){
            if(my_string[i] == strToArr[y]){
                check = false;
            }
        }
        if(check){
            strToArr.push(my_string[i]);
        }
    }
    var answer = strToArr.join("");
    return answer;
}