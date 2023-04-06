import math
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
nums = [0 for i in range(52)]

word = input()
total = 0

for _ in word:
    idx = alphabet.index(_)
    nums[idx] += 1
    total += (idx + 1)

sqrt_num = int(math.sqrt(total))
arr = []

for i in range(1,sqrt_num+1):
    if total%i == 0:
        arr.append(i)

for i in range(len(arr)):
    arr.append(total//arr[i])

arr = list(set(arr))

if len(arr) < 3:
    print("It is a prime word.")
else:
    print("It is not a prime word.")