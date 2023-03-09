function solution(s, n) {
    var answer = "";
    
    for(var idxOfs = 0; idxOfs<s.length; idxOfs++){
        
        var asciiNum = s[idxOfs].charCodeAt();
        
        if(asciiNum == 32){
            answer += " "
            continue
        } else {
            if((asciiNum < 97 && asciiNum+n > 90) || asciiNum+n > 122){
                asciiNum -= 26;
            }
            asciiNum += n
            answer += String.fromCodePoint(asciiNum)
        }
    }
    return answer;
}
