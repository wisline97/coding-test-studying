import sys

num1, num2 = sys.stdin.readline().split()
num1 = ''.join(reversed(num1))
num2 = ''.join(reversed(num2))

if int(num1) > int(num2):
    print(int(num1))
else :
    print(int(num2))