function solution(n, numlist) {
    var answer = [];
    var y = 0
    
    for(i=0; i<numlist.length; i++){
        if(numlist[i]%n == 0){
        answer[y] = numlist[i]
        y+=1
    }
    }
    return answer;
}
