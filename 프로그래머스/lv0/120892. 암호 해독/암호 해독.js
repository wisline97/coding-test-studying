function solution(cipher, code) {
    var answer = '';
    var count = 0
    for(i=0; i<cipher.length; i++){
        if(count != code-1){
            count += 1
        } else if(count == code-1){
            answer += cipher[i]
            count = 0
        }
    }
    return answer;
}