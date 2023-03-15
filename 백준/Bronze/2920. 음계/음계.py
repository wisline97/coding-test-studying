import sys

ascending_arr = [1,2,3,4,5,6,7,8]
descending_arr = [8,7,6,5,4,3,2,1]

arr = list(map(int,sys.stdin.readline().split()))

if ascending_arr == arr:
    print("ascending")
elif descending_arr == arr:
    print("descending")
else:
    print("mixed")