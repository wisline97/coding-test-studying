import sys

n = int(input())
arr = []
answer = 1

for i in range(n):
    arr.append(int(sys.stdin.readline()))

max = arr[-1]

for i in reversed(range(n)):
    if arr[i] > max:
        answer += 1
        max = arr[i]

print(answer)