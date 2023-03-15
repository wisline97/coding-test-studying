import sys

n,m = map(int,sys.stdin.readline().split())

arr = [0 for i in range(n)]

for i in range(m):
    i,j,k = map(int,sys.stdin.readline().split())
    i -= 1
    j -= 1
    for x in range(i,j+1):
        arr[x] = k

for i in range(len(arr)):
    print(arr[i], end=" ")