import sys
n = int(input())

def gcd(a,b):
    if a > b:
        max = a
        min = b
    else:
        max = b
        min = a
    mult = 1
    temp = max
    while True:
        if temp % max == 0 and temp % min == 0:
            gcd = temp
            break
        else:
            temp = max * mult
            mult += 1
    return gcd


for i in range(n):
    a,b = map(int,sys.stdin.readline().split())
    print(gcd(a,b))