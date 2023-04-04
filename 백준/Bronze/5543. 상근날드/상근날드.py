min_num = 2000
burger_arr = [int(input()) for i in range(3)]
drink_arr = [int(input()) for i in range(2)]

answer = (min(burger_arr) + min(drink_arr)) - 50

print(answer)