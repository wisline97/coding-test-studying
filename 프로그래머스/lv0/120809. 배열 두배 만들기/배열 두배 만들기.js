function solution(numbers) {
    var arr = numbers;
    var answer = [];
    for (i = 0; i < arr.length; i++) {
        var num = arr[i] * 2;
        answer.push(num);
}
    return answer;
}