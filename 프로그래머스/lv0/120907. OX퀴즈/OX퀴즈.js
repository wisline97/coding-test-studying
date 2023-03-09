function solution(quiz) {
    var answer = [];
    var arrQuiz = [];
    for(var turns=0; turns < quiz.length; turns++){
        var unit = quiz[turns].split(" ");
        arrQuiz.push(unit)
    }

    for(var turns=0; turns < arrQuiz.length; turns++){
        arrQuiz[turns][0] = arrQuiz[turns][0]/1;
        arrQuiz[turns][2] = arrQuiz[turns][2]/1;
        arrQuiz[turns][4] = arrQuiz[turns][4]/1;
        var realAnswer = 0;
        
        if(arrQuiz[turns][1] == "-"){
            realAnswer = arrQuiz[turns][0] - arrQuiz[turns][2];
        } else{
            realAnswer = arrQuiz[turns][0] + arrQuiz[turns][2];
        }
        
        if(arrQuiz[turns][4] == realAnswer){
            answer.push("O")
        } else{
            answer.push("X")
        }
    }
    
    console.log(arrQuiz)
    return answer;
}