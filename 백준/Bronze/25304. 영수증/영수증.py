total = int(input())
count = int(input())

check = 0
for i in range(count):
    price, number = input().split()
    price = int(price)
    number = int(number)
    check += price*number

if total == check:
    print("Yes")
else:
    print("No")