function solution(n) {
    var answer = '';
    var str = []
    for(i=0; i<n; i++){
        if(i%2==0){
            str[i] = "수"
        } else{
            str[i] = "박"
        }
    }
    answer = str.join("")
    return answer;
}