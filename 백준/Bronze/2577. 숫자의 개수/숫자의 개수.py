a = int(input())
b = int(input())
c = int(input())

num = a*b*c

str = [int(nums) for nums in str(num)]
arr = [0 for i in range(10)]

for numbers in str:
    arr[numbers] += 1

for idx in range(len(arr)):
    print(arr[idx])