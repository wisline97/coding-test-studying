num = int(input())

for i in range(num):
    word = input()
    last = len(word) - 1
    if len(word) < 2:
        print(word[0]+word[0])
    else:
        print(word[0]+word[last])