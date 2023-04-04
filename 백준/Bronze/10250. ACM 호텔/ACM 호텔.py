import sys
test_case = int(input())

for _ in range(test_case):
    order = list(map(int,sys.stdin.readline().split()))
    y = order[0]
    x = order[1]
    max_guest = order[2]

    total_room = [[0 for i in range(x)] for i in range(y)]

    y_idx = y-1
    floor = 1
    x_idx = 0

    for fill_room in range(max_guest):
        if y_idx == -1:
            y_idx = y-1
            floor = 1
            x_idx += 1
        if x_idx+1 < 10:
            room_num = str(floor) + "0" + str(x_idx+1)
        else:
            room_num = str(floor) + str(x_idx+1)
        total_room[y_idx][x_idx] = room_num
        floor += 1
        y_idx -= 1

    print(room_num)