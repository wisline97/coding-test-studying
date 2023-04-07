minimum = int(input())
maximum = int(input())
arr = []
for _ in range(minimum, maximum+1):
    count = 0
    for i in range(1, _+1):
        if _ % i == 0:
            count += 1
    if count == 2:
        arr.append(_)

if len(arr) >= 1:
    print(sum(arr))
    print(min(arr))
else:
    print(-1)