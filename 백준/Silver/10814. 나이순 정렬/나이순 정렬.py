import sys

n = int(input())

user = []
age = []
answer = []

for _ in range(n):
    data = list(sys.stdin.readline().split())
    data[0] = int(data[0])
    if data[0] not in age:
        age.append(data[0])
    data.append(_+1)
    user.append(data)

age.sort()

for age_idx in range(len(age)):
    for y in range(n):
        if user[y][0] == age[age_idx]:
            answer.append(user[y])

for _ in range(n):
    print(answer[_][0], answer[_][1])
