num = int(input())

for i in range(num):
    password = input()
    length = len(password)
    if length >= 6 and length <= 9:
        print("yes")
    else:
        print("no")