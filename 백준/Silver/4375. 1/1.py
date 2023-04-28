import sys

while True:
    try:
        origin_n = int(sys.stdin.readline())
    except:
        break
    one_num = 0
    while True:
        one_num = one_num*10 + 1
        if one_num % origin_n == 0:
            break
    answer = len(str(one_num))
    print(answer)