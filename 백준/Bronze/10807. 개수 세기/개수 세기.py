import sys

number = int(sys.stdin.readline())
arr = list(map(int,sys.stdin.readline().split()))

v = int(sys.stdin.readline())

print(arr.count(v))