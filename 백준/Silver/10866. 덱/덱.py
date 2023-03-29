import sys
from collections import deque
num = int(input())
answer = deque([])

for i in range(num):
    order = list(sys.stdin.readline().split())
    cmd = order[0]
    if len(order) > 1:
        num = int(order[1])

    if cmd == "push_front":
        answer.appendleft(num)
    elif cmd == "push_back":
        answer.append(num)
    elif cmd == "pop_front":
        if len(answer) != 0:
            print(answer.popleft())
        else:
            print(-1)
    elif cmd == "pop_back":
        if len(answer) != 0:
            print(answer.pop())
        else:
            print(-1)
    elif cmd == "size":
        print(len(answer))
    elif cmd == "empty":
        if len(answer) == 0:
            print(1)
        else:
            print(0)
    elif cmd == "front":
        if len(answer) != 0:
            print(answer[0])
        else:
            print(-1)
    elif cmd == "back":
        if len(answer) != 0:
            print(answer[len(answer)-1])
        else:
            print(-1)