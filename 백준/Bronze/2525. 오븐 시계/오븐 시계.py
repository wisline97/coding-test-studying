a, b= input().split()
c = int(input())
a = int(a)
b = int(b)

if b+c < 60:
    b = b+c
else:
    a = a + ((b+c) // 60)
    b = (b+c) % 60

if a >= 24:
    a -= 24

print(a, b)