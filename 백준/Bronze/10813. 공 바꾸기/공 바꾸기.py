import sys

n,m = map(int,sys.stdin.readline().split())

arr = [i+1 for i in range(n)]

for i in range(m):
    i,j = map(int,sys.stdin.readline().split())
    i -= 1
    j -= 1
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

for i in range(len(arr)):
    print(arr[i], end=" ")