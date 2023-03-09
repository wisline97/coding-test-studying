function solution(i, j, k) {
    var answer = 0;

    for(var nums = i; nums <= j; nums++){
        nums += ""
        for(var idx = 0; idx < nums.length; idx++){
            if(nums[idx]/1 == k){
                answer += 1
            }
        }
    }
    
    return answer;
}