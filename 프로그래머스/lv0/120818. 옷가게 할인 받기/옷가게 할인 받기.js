function solution(price) {
    var answer = 0;
    if (price / 100000 < 1) {
    answer = price;
} else if (price / 100000 >= 1 && price / 100000 < 3) {
  answer = price - price * 0.05;
} else if (price / 100000 >= 3 && price / 100000 < 5) {
  answer = price - price * 0.1;
} else if (price / 100000 >= 5) {
  answer = price - price * 0.2;
}
    
    return Math.floor(answer);
}