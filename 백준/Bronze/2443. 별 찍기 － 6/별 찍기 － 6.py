n = int(input())
star = (n*2) - 1
for i in reversed(range(1,n+1)):
    blank = n-i
    for y in range(blank):
        print(" ", end="")
    for s in range(star):
        print("*",end="")
    star -= 2
    print()