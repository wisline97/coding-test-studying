change = int(input())
count = 0

while True:
    if change%5 == 0:
        count += change//5
        break
    else:
        change -= 2
        count += 1

    if change < 0:
        break

if change < 0:
    print(-1)
else:
    print(count)