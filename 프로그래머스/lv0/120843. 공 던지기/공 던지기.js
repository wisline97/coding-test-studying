function solution(numbers, k) {
    var answer = 0;
    var current = 0;
    var newArr = [];
    var max = numbers.length - 1
    for(i=0; i<k; i++){
        if(i == 0){
            newArr[i] = numbers[current];
        }else{
            if(numbers.length % 2 == 0){
                if(current + 2 <= max){
                    current += 2;
                    newArr[i] = numbers[current];
                } else{
                    current = 0;
                    newArr[i] = numbers[current];
                }
            } else{
                if(current+2 > max){
                    if(current+1 == max){
                        current = 0;
                        newArr[i] = numbers[current];
                    }else{
                        current = max - (max-1);
                        newArr[i] = numbers[current];
                    }
                }else{
                    current += 2;
                    newArr[i] = numbers[current];
                }
            }
        }  
    }
    answer = newArr[k-1]
    return answer;
}