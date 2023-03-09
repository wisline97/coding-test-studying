function solution(s) {
    var sToArr = s.split(" ");
    var answer = 0;

    for(i=0; i<sToArr.length; i++){
        if(sToArr[i] != "Z" && sToArr[i+1] != "Z"){
            console.log(sToArr[i])
            answer += sToArr[i]/1
        }
    }

    return answer;
}