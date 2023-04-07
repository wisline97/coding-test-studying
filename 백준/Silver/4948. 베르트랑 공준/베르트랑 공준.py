import math

while True:
    minimum = int(input())
    if minimum == 0:
        break
    maximum = 2 * minimum
    arr = [True] * (maximum+1)
    arr[0] = False
    arr[1] = False
    arr2 = []
    sqrt_num = int(math.sqrt(maximum))

    for _ in range(2,sqrt_num+1):
        if arr[_]:
            for i in range(_,maximum+1,_):
                if i!=_:
                    arr[i] = False

    for _ in range(len(arr)):
        if arr[_]:
            arr2.append(_)

    for i in range(len(arr2)):
        if arr2[i] > minimum:
            break

    idx = i

    print(len(arr2[i:]))