function solution(balls, share) {
    function factorial(num) {
          if (num < 0) return -1;
          else if (num == 0) return 1;
          else {
            return (num * factorial(num - 1));
          };
    };
    
    var n = factorial(balls);
    var m = factorial(share);
    var b = factorial(balls-share);
    var answer = n/(b*m);
    return Math.round(answer);    
};