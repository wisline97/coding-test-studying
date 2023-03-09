function solution(n) {
    var str = String(n)
    var arr = str.split("")
    for (i = 0; i < arr.length; i++) {
        for (y = 0; y < arr.length; y++) {
            if (i != y) {
                if (arr[i] > arr[y]) {
                    temp = arr[i]
                    arr[i] = arr[y]
                    arr[y] = temp
                }
            }
        }
    }
    var answer = arr.join("")
    answer = Number(answer)
    return answer
}
