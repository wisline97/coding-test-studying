ph_num1 = input()
ph_num2 = input()

arr = []

for i in range(len(ph_num1)):
    arr.append(int(ph_num1[i]))
    arr.append(int(ph_num2[i]))

test = 0

while len(arr) > 2:
    length = len(arr)

    if length < 3:
        break

    unit1 = []
    unit2 = []
    temp_arr = []

    idx = 0

    while idx+1 < length:
        temp = str(arr[idx] + arr[idx+1])
        temp = temp[len(temp)-1]
        unit1.append(int(temp))
        idx += 2

    idx = 1

    while idx+1 < length:
        temp = str(arr[idx] + arr[idx+1])
        temp = temp[len(temp)-1]
        unit2.append(int(temp))
        idx += 2

    if len(unit1) == len(unit2):
        for i in range(len(unit2)):
            temp_arr.append(unit1[i])
            temp_arr.append(unit2[i])
    else:
        for i in range(len(unit2)):
            temp_arr.append(unit1[i])
            temp_arr.append(unit2[i])

        if length%2 == 0:
            temp_arr.append(unit1[-1])
        else:
            temp_arr.append(unit2[-1])

    arr = temp_arr
    test += 1
    

for i in range(len(arr)):
    print(arr[i],end="")