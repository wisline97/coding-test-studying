function solution(denum1, num1, denum2, num2) {
    var denum3 = (denum1*num2)+(denum2*num1);
    var num3 = num1*num2;
    var answer =0;
    var max = denum3 > num3 ? denum3 : num3;
    var maxDiff = 0;

    //최대공약수 구하기
    for(i=1; i<=max; i++){
        if(denum3%i== 0 && num3%i == 0){
            if(maxDiff < i){
                maxDiff = i;
            }
        }
    }
    answer = [denum3/maxDiff, num3/maxDiff]
    return answer;
}