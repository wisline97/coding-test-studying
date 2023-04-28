a, b = map(int,input().split())

if a > b:
    max = a
    min = b
else:
    max = b
    min = a

while True:
    n = max%min
    if n == 0:
        gcd = min
        break
    max = min
    min = n

print("1"*gcd)