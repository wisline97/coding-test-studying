function solution(bin1, bin2) {
    var originNum1 = parseInt(bin1,2)
    var originNum2 = parseInt(bin2,2)
    var answer = (originNum1 + originNum2).toString(2);
    return answer;
}