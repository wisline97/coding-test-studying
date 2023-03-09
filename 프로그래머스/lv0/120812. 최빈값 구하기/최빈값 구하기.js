function solution(array) {
    var answer = 0;
    //배열 내 숫자 중 최대값 구하기
    function maxNum(array){
        var max = 0;
        for(i=0; i<array.length; i++){
            if(max<array[i]){
                max = array[i];
            };
        };
        return max;
    };
    //1을 더하는 이유는 0도 포함시키기 위함.
    var max = maxNum(array)+1;
    var count = [];
    //우선 count 배열 안에 0을 채워서 기본 세팅
    for(i=0; i<max; i++){
        count[i] = 0;
    };
    //array함수를 돌면서 array[i] 숫자가 존재하는 만큼 count배열에 해당 숫자가 존재하는 자리에 1을 더함
    for(i=0; i<array.length; i++){
        count[array[i]] += 1
    };
    
    //빈도수가 가장 높은 숫자 위치 찾기
    // 1. 우선 최빈값을 찾음
    var maxCount = 0;
    for(i=0; i<count.length; i++){
        if(count[i] > maxCount){
            maxCount = count[i];
        };
    };
    
    // 2. 그 최빈값의 위치를 찾음
    var maxIndex = 0;
    for(i=0; i<count.length; i++){
        if(count[i] == maxCount){
            maxIndex = i;
        };
    };   
    
    //최대 빈도수값이 중복되는지 체크하는 함수
    function doubleCheck(count){
        //최대 빈도수 값 찾기
        var max1 = 0;
        for(i=0; i<count.length; i++){
            if(count[i] > max1){
                max1 = count[i];
            };    
        };
        var check = false;
        var cnt = 0;
        for(i=0; i<count.length; i++){
            if(count[i] == max1){
                cnt += 1;
            };
        };
        if(cnt>=2){
            check = true;
        }else{
            check = false;
        };
        return check;
    };
    var check = doubleCheck(count)
    if(check){
        answer = -1;
    }else if(array.length == 1){
        answer = array[0];
    }else{
        answer = maxIndex;
    };
    return answer;
}