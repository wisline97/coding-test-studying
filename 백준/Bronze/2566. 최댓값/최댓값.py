import sys
arr = []
location_max = [0,0]
max_num = 0 
for round_of in range(9):
    unit = list(map(int,sys.stdin.readline().split()))
    arr.append(unit)
    if max(unit) >= max_num:
      max_num = max(unit)
      location_max[0] = round_of + 1
      location_max[1] = unit.index(max_num) + 1

print(max_num)
print(location_max[0],location_max[1])