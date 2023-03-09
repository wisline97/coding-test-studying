arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
location = [ -1 for i in range(len(arr))]

word = input()

for idx in range(len(word)):
    for idx2 in range(len(arr)):
        if word[idx] == arr[idx2]:
            location[idx2] = idx
            arr[idx2] = ""

for i in range(len(location)):
    print(location[i], end=" ")