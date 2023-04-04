num = int(input())

for _ in reversed(range(1,num+1)):
    for i in range(_):
        print("*",end="")
    print()