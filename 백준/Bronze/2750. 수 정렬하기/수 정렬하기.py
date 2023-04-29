import sys

n = int(input())
arr = []
for i in range(n):
    num = int(sys.stdin.readline())
    arr.append(num)

answer = sorted(arr)

for i in answer:
    print(i)