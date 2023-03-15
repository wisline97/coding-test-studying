arr = [0 for i in range(30)]

for i in range(28):
    num = int(input())
    arr[num-1] = 1

for i in range(len(arr)):
    if arr[i] != 1:
        print(i+1)