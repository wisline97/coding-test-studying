function solution(num, total) {
    var middle_num = total/num;
    var min = Math.ceil(middle_num - (num/2));
    var answer = Array.from({length:num}, (v,i) => i + min);
    
    return answer;
}