import sys
from collections import deque
num = int(input())
answer = deque([])

for i in range(num):
    cmd = int(sys.stdin.readline().rstrip())

    if cmd == 0:
        answer.pop()
    else:
        answer.append(cmd)

print(sum(answer))