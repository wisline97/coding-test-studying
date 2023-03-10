function solution(M, N) {
    var min = M > N ? N : M;
    var max = M > N ? M : N;
    var answer = (min-1)+((max-1)*min);
    return answer;
}