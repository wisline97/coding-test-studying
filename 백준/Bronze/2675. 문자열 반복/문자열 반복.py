cnt = int(input())

for i in range(cnt):
    turns, str = input().split()
    turns = int(turns)
    answer = ""
    for idx in range(len(str)):
        for turn in range(turns):
            answer += str[idx]

    print(answer) 