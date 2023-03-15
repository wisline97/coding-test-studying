import sys
import math

n,m = map(int,sys.stdin.readline().split())

arr = [i+1 for i in range(n)]

for i in range(m):
    i,j = map(int,sys.stdin.readline().split())
    idx = i-1
    for x in range(math.ceil((j-i)/2)):
        temp = arr[idx]
        arr[idx] = arr[(j-1)-x]
        arr[(j-1)-x] = temp
        idx += 1

for i in range(len(arr)):
    print(arr[i], end=" ")