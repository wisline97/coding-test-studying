arr = [31,28,31,30,31,30,31,31,30,31,30,31]
요일 = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
mon, day = map(int,input().split())
total_day = 0

if mon > 1:
    for add in range(mon-1):
        total_day += arr[add]
    total_day += day
    answer = 요일[total_day%7]
else:
    total_day += day
    answer = 요일[total_day%7]

print(answer)