n = int(input())

arr = [0 for i in range(n)]
arr[0] = 1
arr[1] = 1

def fibonacci(n):
    cnt = 0
    for i in range(2,n):
        cnt += 1
        arr[i] = arr[i-1] + arr[i-2]
    arr.append(cnt)
    return arr

arr = fibonacci(n)
print(arr[n-1],arr[n])