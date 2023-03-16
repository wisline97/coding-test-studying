import sys

n = int(input())
arr = []

for i in range(n):
    cmd = sys.stdin.readline().split()
    order = cmd[0]
    last_idx = len(arr) - 1
    if order == "push":
        cmd[1] = int(cmd[1])
        arr.append(cmd[1])
    elif order == "pop":
        if len(arr) < 1:
            print(-1)
        else:
            print(arr[last_idx])
            del(arr[last_idx])
    elif order == "size":
        print(len(arr))
    elif order == "empty":
        if len(arr) < 1:
            print(1)
        else:
            print(0)
    elif order == "top":
        if len(arr) < 1:
            print(-1)
        else:
            print(arr[last_idx])