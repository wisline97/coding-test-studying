import sys
arr1 = []
arr2 = []
answer = []
y,x = map(int,input().split())

for round_of in range(y*2):
    unit = list(map(int,sys.stdin.readline().split()))
    if round_of < y:
      arr1.append(unit)
    else:
      arr2.append(unit)

for y_idx in range(y):
  for x_idx in range(x):
     print(arr1[y_idx][x_idx] + arr2[y_idx][x_idx], end=" ")
  print()