alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
arr = [0]*len(alphabet)

word = input()
for i in range(len(alphabet)):
    count = word.count(alphabet[i])
    print(count, end=" ")
    arr[i] = count