function solution(money) {
    var americano = 5500
    var arr0 = parseInt(money/americano)
    var answer = [];
    
    answer = [arr0, money-(americano*arr0)]
    
    return answer;
}