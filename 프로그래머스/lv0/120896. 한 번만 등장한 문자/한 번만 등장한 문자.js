function solution(s) {
    var answer = '';
    var sArr = [];
    for(let i=0; i<s.length; i++){
        var overLapcheck = false;
        for(let y=0; y<sArr.length; y++){
            if(s[i] == sArr[y]){
                overLapcheck = true;
            }
        };
        if(overLapcheck == false){
            sArr.push(s[i]);
        };
    }
    sArr.sort();
    for(let i=0; i<sArr.length; i++){
        var count = 0;
        for(let y=0; y<s.length; y++){
            if(sArr[i] == s[y]){
                count += 1;
            }    
        }
        if(count < 2){
            answer += sArr[i];
        }
    }
    return answer;
}