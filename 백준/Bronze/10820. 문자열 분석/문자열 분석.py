alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
alphabet2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ["0","1","2","3","4","5","6","7","8","9"]

while True:
    try:
        arr1 = [0] * len(alphabet1)
        arr2 = [0] * len(alphabet2)
        arr3 = [0] * len(numbers)
        count = 0
        word = input()

        for i in range(len(alphabet1)):
            if alphabet1[i] in word:
                arr1[i] += word.count(alphabet1[i])
            if alphabet2[i] in word:
                arr2[i] += word.count(alphabet2[i])
        count = word.count(" ")
        for i in range(len(numbers)):
            if numbers[i] in word:
                arr3[i] += word.count(numbers[i])
        print(sum(arr1),sum(arr2),sum(arr3),count)
    except:
        break
