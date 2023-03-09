function solution(array) {
    var answer = 0;
    for(i=0; i<array.length; i++){
        array[i] = array[i]+"";
        for(y=0; y<array[i].length; y++){
            if(array[i].charCodeAt(y) == 55){
                answer+=1
            }
        }
    }
    return answer;
}