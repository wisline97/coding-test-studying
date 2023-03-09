cnt = 10
arr = []
for i in range(cnt):
    unit = int(input())
    element = unit%42
    if element not in arr:
        arr.append(element)

print(len(arr))