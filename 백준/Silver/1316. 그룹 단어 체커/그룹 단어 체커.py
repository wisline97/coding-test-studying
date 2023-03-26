num = int(input())
answer = 0

for round_of in range(num):
  word = input()
  alphabet = list(set(word))

  location_of_alphabet = []

  # alphabet의 각 위치를 location_of_alphabet 배열에 담습니다.
  for this in range(len(alphabet)):
    location = []
    for idx in range(len(word)):
      if alphabet[this] == word[idx]:
        location.append(idx)
    location_of_alphabet.append(location)

  group_word_checker = []

  for y_idx in range(len(location_of_alphabet)):
    length = len(location_of_alphabet[y_idx])
    check = True
    # 만약 알파벳의 위치를 담은 각 배열의 길이가 1이라면 그 알파벳은 한 번만 쓰인 것이므로 answer배열에 True를 담습니다.
    if length == 1:
      group_word_checker.append(check)
    # 위 조건에 부합하지 않는다면 그 배열의 각 원소들을 순회하며 그룹단어 조건에 부합하는지 체크합니다.
    else:
      for x_idx in range(length-1):
        if location_of_alphabet[y_idx][x_idx+1] - location_of_alphabet[y_idx][x_idx] != 1:
          check = False
          break
      group_word_checker.append(check) 

  # group_word_checker 배열에 False가 포함되어 있지 않다면 해당 단어는 그룹단어입니다.
  if False not in group_word_checker:
    answer += 1

print(answer)
