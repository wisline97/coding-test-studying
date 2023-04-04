import sys
n = int(input())
num = [0 for i in range(10001)]

for i in range(n):
    nums = int(sys.stdin.readline())
    num[nums] += 1

for i in range(10001):
    if num[i] != 0:
        for x in range(num[i]):
            print(i)