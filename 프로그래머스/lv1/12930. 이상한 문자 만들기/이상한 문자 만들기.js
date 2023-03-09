function solution(s) {
    var answer = s.split(" ");
    var test = []
    for(i=0; i<answer.length; i++){
        test[i] = Array.from(answer[i])
        for(j=0; j<test[i].length; j++){
            if(j%2==0){
                test[i][j] = test[i][j].toUpperCase()
            } else{
                test[i][j] = test[i][j].toLowerCase()
            }
        }
    }
        for(i=0; i<answer.length; i++){
            for(j=0; j<answer[i].length; j++){
                answer[i] = test[i].join("")
            }
    }
    return answer.join(" ");
}