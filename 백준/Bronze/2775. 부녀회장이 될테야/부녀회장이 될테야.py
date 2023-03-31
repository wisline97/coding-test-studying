num = int(input())

for i in range(num):
    floor = int(input())
    unit = int(input())
    floor_arr = [x for x in range(1,unit+1)]

    for y in range(floor):
        for x in range(1,unit):
            floor_arr[x] += floor_arr[x-1]
    print(floor_arr[unit-1])