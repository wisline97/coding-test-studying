function solution(s){
    var answer = false;
    var pCount = 0
    var yCount = 0
    for(i=0; i<s.length; i++){
        if(s[i] == "p" || s[i] == "P"){
            pCount += 1
            console.log(s[i])
        } else if(s[i] == "y" || s[i] == "Y"){
            yCount += 1
            console.log(s[i])
        }
    }

    if(pCount == yCount){
        answer = true
    } else if(pCount == 0 && yCount ==0) {
        answer = true
    } else{
        answer = false
    } 
    return answer;
}