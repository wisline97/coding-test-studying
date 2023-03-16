import sys

num = int(input())
arr = list(map(int,sys.stdin.readline().split()))

answer = 0

for x in range(num):
    count = 0
    for y in range(1,arr[x]+1):
        if arr[x]%y == 0:
            count += 1
    if count == 2:
        answer+=1

print(answer)