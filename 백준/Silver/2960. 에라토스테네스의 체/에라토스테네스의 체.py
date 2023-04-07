n, k = map(int, input().split())
arr = [i for i in range(2,n+1)]
count = 0
for_del = 0
trigger = False
for num in range(len(arr)):
    if arr[num] != False:
        for i in range(arr[num],n+1,arr[num]):
            if i in arr:
                idx = arr.index(i)
                for_del = arr[idx]
                arr[idx] = False
                count += 1
    
            if count == k:
                trigger = True
                print(for_del)
                break
    if trigger:
        break