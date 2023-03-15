import sys

arr = [1,1,2,2,2,8]
mine = list(map(int,sys.stdin.readline().split()))
answer = [0,0,0,0,0,0]

for i in range(len(mine)):
    if mine[i] > arr[i]:
        answer[i] = -(mine[i] - arr[i])
    if mine[i] < arr[i]:
        if mine[i] < 0:
            answer[i] = abs(mine[i]+arr[i])
        else:
            answer[i] = arr[i] - mine[i]

for i in range(6):
    print(answer[i], end=" ")