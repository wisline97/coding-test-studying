function solution(emergency) {
    var answer = [];
    var arrCopy = emergency.slice();
    var arrSort = arrCopy.sort(function(a,b){return b - a});
    
    for(i=0; i<emergency.length; i++){
        for(y=0; y<arrSort.length; y++){
            // [3, 76, 24]  	[ 76, 24, 3 ]
            if(emergency[i] == arrSort[y]){
                answer.push(y+1);
            }
        }
    }
    return answer;
}