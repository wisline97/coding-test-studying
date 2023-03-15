import sys

num = list(map(int,sys.stdin.readline().split()))
total = 0
for i in range(5):
    total += num[i] * num[i]

print(total%10)