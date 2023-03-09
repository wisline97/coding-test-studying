list = []
for i in range(9):
    score = int(input())
    list.append(score)
max_score = max(list)
max_idx = list.index(max_score)

print(max_score)
print(max_idx+1)