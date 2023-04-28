n = int(input())
star = 1
check = False
for i in range(n*2 - 1):
    blank = n-star
    for b in range(blank):
        print(" ",end="")
    for s in range(star):
        print("*",end="")
    
    if star == n:
        check = True
    
    if not check:
        star += 1
    elif check:
        star -= 1
    
    print()