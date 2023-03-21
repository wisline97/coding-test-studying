import sys

n, m = map(int,input().split())

arr = [i+1 for i in range(n)]

for turns in range(m):
    left, right, mid = map(int,sys.stdin.readline().split())
    left -= 1
    right -= 1
    mid -= 1
    temp = []

    for x in range(mid, right+1):
        temp.append(arr[x])

    for y in range(left,mid):
        temp.append(arr[y])

    temp_idx = 0

    for idx in range(left, right+1):
        arr[idx] = temp[temp_idx]
        temp_idx += 1

for idx in range(len(arr)):
    print(arr[idx], end=" ")