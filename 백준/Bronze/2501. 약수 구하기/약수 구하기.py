n, k = map(int, input().split())

arr = []
count = 0
for i in range(1,n+1):
    if count == k:
        break
    if n%i == 0:
        arr.append(i)
        count += 1
        
if len(arr) < k:
    print(0)
else:
    print(arr[k-1])
    
        
