n = int(input())
for i in range(n):
    for s in range(i):
        print(" ",end="")
    for y in range(n-i):
        print("*",end="")
    print()