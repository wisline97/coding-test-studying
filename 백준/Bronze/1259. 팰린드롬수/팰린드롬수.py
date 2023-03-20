while True:
    word = input()
    if word == "0":
        break
    else:
        length = len(word)
        left = 0
        right = length - 1
        check = True

        for i in range(length // 2):
            if word[left] != word[right]:
                check = False
            left += 1
            right -= 1

        if check:
            print("yes")
        else:
            print("no")