import sys
n = int(input())

def gcd(a,b):
    if a > b:
        max = a
        min = b
    else:
        max = b
        min = a

    while True:
        n = max % min
        if n == 0:
            gcd = min
            break
        max = min
        min = n
    return gcd


for i in range(n):
    a,b = map(int,sys.stdin.readline().split())
    print(gcd(a,b))