function solution(my_string) {
    var answer = "";
    var my_stringArr = my_string.split("");
    var str = ["a","e","i","o","u"]
    var check = false
    console.log(my_stringArr)
    for(i=0; i<my_stringArr.length; i++){
        for(j=0; j<str.length; j++){
            if(my_stringArr[i] == str[j]){
                console.log(my_stringArr[i],str[j])
                check = true
                break
            } else{
                check = false
            }
        }
        if(check == false){
            answer += my_stringArr[i]
        }
    }
    console.log(answer)
    return answer;
}