function solution(s) {
var answer = 0;
const regExp = /[a-zA-Z]/g;
var check = true;
for (var i = 0; i < s.length; i++) {
  if (regExp.test(s[i])) {
    check = false;
  }
}

if ((check == false)) {
  answer = false;
} else if (s.length == 4 || s.length == 6) {
  answer = true;
} else {
  answer = false;
}
    return answer;
}