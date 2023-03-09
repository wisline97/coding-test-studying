function solution(numbers) {
    var answer = 0;
    var numToWord = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    
    for(i=0; i<numToWord.length; i++){
        numbers = numbers.split(numToWord[i]).join(i);
    }
    
    answer = numbers/1;
    return answer;
}