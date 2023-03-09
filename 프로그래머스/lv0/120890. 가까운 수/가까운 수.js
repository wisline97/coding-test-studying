function solution(array, n) {
    array.sort(function(a,b){return a-b});
    var diff = [];

    for(let i=0; i<array.length; i++){
        if(array[i] > n){
            diff.push(array[i] - n);
        } else if(n >= array[i]){
            diff.push(n-array[i]);
        }
    }

    var min = Math.min(...diff);
    var minIdx = diff.indexOf(min)

    var answer = array[minIdx];    

    return answer;
}