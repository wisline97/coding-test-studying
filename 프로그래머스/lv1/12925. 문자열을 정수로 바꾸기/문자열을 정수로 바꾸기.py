def solution(s):
    answer = 1
    check = False
    arr = [i for i in s]

    if arr[0] == "-":
        del(arr[0])
        check = True

    answer = "".join(arr)
    answer = int(answer)
    if check:
        answer *= -1

    return answer
