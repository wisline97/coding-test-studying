function solution(my_string, letter) {
  var regexAll = new RegExp(letter, "g");
  var answer = my_string.replace(regexAll, "");
  return answer;
}