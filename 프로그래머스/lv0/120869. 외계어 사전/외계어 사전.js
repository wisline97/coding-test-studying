function solution(spell, dic) {
    var answer = 2;
    for(let dic_idx=0; dic_idx<dic.length; dic_idx++){
        var check = true;
        for(let spell_idx=0; spell_idx<spell.length; spell_idx++){
            if(dic[dic_idx].includes(spell[spell_idx]) == false){
                check = false;
            }
        }
        if(check){
            answer = 1
            break
        }
    }
    return answer;
}