cnt = int(input())
arr = input().split(" ")

for i in range(cnt):
    arr[i] = int(arr[i])

print(min(arr),max(arr))