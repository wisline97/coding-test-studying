import sys
number = int(sys.stdin.readline())

for i in range(number):
    a,b = map(int,sys.stdin.readline().split())
    print("Case #{}: {} + {} = {}".format(i+1, a,b,a+b))