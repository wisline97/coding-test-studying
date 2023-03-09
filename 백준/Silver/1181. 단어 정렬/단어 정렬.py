word_cnt = int(input())
word_arr = []

for i in range(word_cnt):
    word = input()
    if word not in word_arr:
        word_arr.append(word)

word_arr.sort()

sort_word = []

for i in word_arr:
    sort_word.append([len(i),i])

sort_word.sort()

for i in range(len(word_arr)):
    print(sort_word[i][1])