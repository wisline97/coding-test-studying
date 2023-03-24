arr = []
arr_length = []

for i in range(5):
    arr.append(list(input()))

for i in range(len(arr)):
    arr_length.append(len(arr[i]))

max_length = max(arr_length)

for x in range(max_length):
    for y in range(len(arr)):
        if len(arr[y])-1 < x:
            pass
        else:
            print(arr[y][x],end="")