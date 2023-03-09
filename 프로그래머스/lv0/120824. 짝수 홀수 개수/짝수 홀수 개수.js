function solution(num_list) {
    var odd = 0; 
    var even = 0;
    for(i=0; i<num_list.length; i++){
        if(num_list[i]%2 == 0){
            even = even + 1;
        } else{
            odd = odd + 1;
        }
    }
    
    var answer = [even, odd];
    return answer;
}