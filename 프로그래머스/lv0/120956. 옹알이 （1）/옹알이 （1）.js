function solution(babbling) {
    var answer = 0;
    var temp = ["aya","ye","woo","ma"]
    var example = []
    
    for(x=0; x<temp.length; x++){
        example.push(temp[x])
        for(y=0; y<temp.length; y++){
            if(x!=y){
                example.push(temp[x]+temp[y])
            }
            for(i=0; i<temp.length; i++){
                if(i!=x && i!=y && x!=y){
                    example.push(temp[x]+temp[y]+temp[i])
                }
                for(z=0; z<temp.length; z++){
                    if(i!=x && i!=y && x!=y && z!=i && z!=x && z!=y){
                        example.push(temp[x]+temp[y]+temp[i]+temp[z])
                    }
                }
            }
        }
    };
    
    for(babblingIdx = 0; babblingIdx<babbling.length; babblingIdx++){
        for(exampleIdx=0; exampleIdx<example.length; exampleIdx++){
            if(babbling[babblingIdx] == example[exampleIdx]){
                answer+=1
            }
        }
    };
    
    return answer;
}