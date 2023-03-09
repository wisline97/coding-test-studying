function solution(d, budget) {
    var answer = 0;
    var temp = [];
    var max_length = 0;

    d.sort((a, b) => a - b);

    if(d.length == 1 && d[0] < budget){
        max_length = 1;
    }else{
        for(var idxOfd1 = 0; idxOfd1<d.length; idxOfd1++){
            var unit = [];
            var total = 0;
            
            if(d[idxOfd1] <= budget){
                unit.push(d[idxOfd1]);
            }
            
            total += d[idxOfd1];
            
            for(var idxOfd2 = 0; idxOfd2<d.length; idxOfd2++){
                if(idxOfd1 != idxOfd2){
                    if(total + d[idxOfd2] <= budget){
                        unit.push(d[idxOfd2]);
                        total += d[idxOfd2]
                    }
                }
            }
            temp.push(unit);
        };
        for(var idxOftemp=0; idxOftemp<temp.length; idxOftemp++){
            if(temp[idxOftemp].length > max_length){
                max_length = temp[idxOftemp].length;
            }
        };
    };

    return max_length;
}