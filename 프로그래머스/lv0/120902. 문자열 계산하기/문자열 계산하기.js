function solution(my_string) {
    var plusOrNot = [];
    var num = [];
    my_string = my_string.split(" ");
    
    for(let i = 0; i<my_string.length; i++){
        if(i%2 == 1){
            plusOrNot.push(my_string[i]);
        } else{
            num.push(my_string[i]/1);
        }
    }
    
    console.log(num)
    console.log(plusOrNot)
    
    var answer = num[0];
    for(let i=0; i<plusOrNot.length; i++){
        if(plusOrNot[i] == "+"){
            answer += num[i+1]
        } else{
            answer -= num[i+1]
        }
    }
    
    return answer;
}