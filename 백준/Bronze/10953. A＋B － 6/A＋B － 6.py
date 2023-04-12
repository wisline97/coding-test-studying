import sys
n = int(input())

for i in range(n):
    arr = list(map(int,sys.stdin.readline().split(",")))
    print(sum(arr))