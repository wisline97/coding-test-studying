buns, patty = map(int,input().split())
count = 0

able = buns//2
if patty >= able:
    count = able
    print(count)
else:
    count = patty
    print(count)