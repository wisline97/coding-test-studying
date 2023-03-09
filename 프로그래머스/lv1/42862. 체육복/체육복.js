function solution(n, lost, reserve) {
    var answer = 0;
    var stdArr = [];
    //학생들의 체육복 소유 현황 체크
    for(i=0; i<n; i++){
        stdArr[i] = 1;
    };
    console.log(stdArr);
    for(i=0; i<lost.length; i++){
        stdArr[lost[i]-1] -= 1;
    }
    for(i=0; i<reserve.length; i++){
        stdArr[reserve[i]-1] += 1;
    };
    console.log(stdArr);

    //체육복 빌려주는 반복문
    for(i=0; i<stdArr.length; i++){
        if(stdArr[i] == 2 && stdArr[i+1] == 0){
            stdArr[i] -= 1
            stdArr[i+1] += 1
        } else if(stdArr[i] == 0 && stdArr[i+1] == 2){
            stdArr[i] += 1
            stdArr[i+1] -= 1
        }
    };
    console.log(stdArr);


    //정답 추출하는 반복문
    for(i=0; i<stdArr.length; i++){
        if(stdArr[i] > 0){
            answer += 1
        }
    }
    console.log("정답은",answer);
    return answer;
}