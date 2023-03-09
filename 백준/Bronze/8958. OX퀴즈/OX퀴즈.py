""" a = int(input())
b = int(input())
c = int(input())

num = a*b*c

str = [int(nums) for nums in str(num)]
arr = [0 for i in range(10)]

for numbers in str:
    arr[numbers] += 1

print(str)
print(arr)

print()

for idx in range(len(arr)):
    print(arr[idx]) """

""" cnt = int(input())

for i in range(cnt):
    turns, str = input().split()
    turns = int(turns)
    answer = ""
    for idx in range(len(str)):
        for turn in range(turns):
            answer += str[idx]

    print(answer)  """

""" cnt = 10
arr = []
for i in range(cnt):
    unit = int(input())
    element = unit%42
    if element not in arr:
        arr.append(element)

print(len(arr)) """

""" cnt = int(input())

for i in range(cnt):
    print(i+1) """


""" cnt = int(input())
arr = input(int()).split(" ")

for i in range(cnt):
    arr[i] = int(arr[i])

print(min(arr),max(arr)) """

cnt = int(input())

for i in range(cnt):
    answer = input()
    str_arr = [ 0 for y in answer]

    for x in range(len(str_arr)):
        str_arr[x] = answer[x]

    temp = ""
    total = 0
    score = 0
    
    for x in range(len(str_arr)):
        if str_arr[x] == "O" and temp != "X":
            score += 1
        elif str_arr[x] == "O" and temp == "X":
            score = 1

        if str_arr[x] == "X":
            score = 0

        total += score
        temp = str_arr[x]

    print(total)