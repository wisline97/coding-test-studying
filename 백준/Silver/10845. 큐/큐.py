import sys
num = int(input())
arr = []
for i in range(num):
    cmd = sys.stdin.readline().split()
    length = len(arr)
    if cmd[0] == "push":
        arr.append(int(cmd[1]))
    elif cmd[0] == "pop":
        if length < 1:
            print(-1)
        else:
            print(arr[0])
            del(arr[0])
    elif cmd[0] == "size":
        print(length)
    elif cmd[0] == "empty":
        if length < 1:
            print(1)
        else:
            print(0)
    elif cmd[0] == "front":
        if length < 1:
            print(-1)
        else:
            print(arr[0]) 
    elif cmd[0] == "back":
        if length < 1:
            print(-1)
        else:
            print(arr[length-1])