import math

# 과목 수
n = int(input())

# 점수 목록과 최고 점수
score = list(map(int, input().split()))
max_score = max(score)

# 조작한 점수 리스트
new_score = []
for i in range(n):
    new_score.append(round((score[i]/max_score) * 100, 2))


#평균 구하기
avg = sum(new_score)/n

print(avg)