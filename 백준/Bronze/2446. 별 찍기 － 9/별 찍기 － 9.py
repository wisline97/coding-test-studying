n = int(input())
star = n*2 - 1
blank = 0
check = False

for i in range(n*2 - 1):
    for b in range(blank):
        print(" ",end="")
    for s in range(star):
        print("*",end="")
    if star == 1:
        check = True
    if not check:
        star -= 2
        blank += 1
    if check:
        star += 2
        blank -= 1
    print()
