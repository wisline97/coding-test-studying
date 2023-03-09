word = input().upper()
word_len = len(word)
alphabet = ["A","B","D","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
alphabet_len = len(alphabet)
alphabet.sort()
cnt_arr = [0 for i in range(alphabet_len)]
cnt_len = len(cnt_arr)
# word 알파벳 수 세기
for i in range(word_len):
    for y in range(alphabet_len):
        if word[i] == alphabet[y]:
            cnt_arr[y] += 1

# Count max값 찾기
max = 0
max_idx = 0
count = 0
for i in range(cnt_len):
    if cnt_arr[i] > max:
        max = cnt_arr[i]
        max_idx = i

# max값이 중복되는지 체크
for i in range(cnt_len):
    if cnt_arr[i] == max:
        count += 1

if count == 1:
    answer = alphabet[max_idx]
else:
    answer = "?"

print(answer)