num1 = int(input())
num2 = input()

num1 = int(num1)

for i in reversed(range(3)):
    mult = int(num2[i])
    print(num1*mult)

num2 = int(num2)
print(num1*num2)