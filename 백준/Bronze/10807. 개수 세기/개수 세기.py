import sys

number = int(sys.stdin.readline())
arr = list(map(int,sys.stdin.readline().split()))

v = int(sys.stdin.readline())
count = 0

for i in range(number):
    if arr[i] == v:
        count += 1
print(count)