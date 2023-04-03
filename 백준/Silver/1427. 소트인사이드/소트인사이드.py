str = input()
arr = [int(i) for i in str]
arr.sort(reverse=True)

for i in arr:
    print(i, end="")