function solution(n) {
    var trinary = n.toString(3)
    var reverse_trinary = trinary.split("").reverse().join("")
    var answer = parseInt(reverse_trinary,3);
    return answer;
}