import sys

def get_avg(temp_arr,score_arr):
    avg = sum(score_arr) // temp_arr[0]
    return avg

num = int(input())

for i in range(num):
  temp_arr = list(map(int,sys.stdin.readline().split()))
  std = temp_arr[0]
  score_arr = temp_arr[1:]
  avg = get_avg(temp_arr,score_arr)

  over_avg = 0

  for y in range(len(score_arr)):
    if score_arr[y] > avg:
        over_avg += 1

  answer = (over_avg/std)*100
  print("{:.3f}".format(answer)+"%")