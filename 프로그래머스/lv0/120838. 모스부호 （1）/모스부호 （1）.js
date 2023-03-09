function solution(letter) {
    var morse = { 
        '.-':'a',
        '-...':'b',
        '-.-.':'c',
        '-..':'d',
        '.':'e',
        '..-.':'f',
        '--.':'g',
        '....':'h',
        '..':'i',
        '.---':'j',
        '-.-':'k',
        '.-..':'l',
        '--':'m',
        '-.':'n',
        '---':'o',
        '.--.':'p',
        '--.-':'q',
        '.-.':'r',
        '...':'s',
        '-':'t',
        '..-':'u',
        '...-':'v',
        '.--':'w',
        '-..-':'x',
        '-.--':'y',
        '--..':'z'
    };
    var answer = '';
    var letterArr = letter.split(" ");
    // letterArr = 	[ '....', '.', '.-..', '.-..', '---' ]
    // ".... . .-.. .-.. ---"
    for(y=0; y<letterArr.length; y++){
        for(i in morse){
            if(letterArr[y] === i){
                answer += morse[i];
            };
        };
    };

    
    
    return answer;
}