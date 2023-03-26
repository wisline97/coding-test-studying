num = int(input())
count = 0

for i in range(num):
  word = input()
  alphabet = []
  for y in word:
    if y not in alphabet:
      alphabet.append(y)

  arr = []

  for y in range(len(alphabet)):
    unit = []
    for x in range(len(word)):
      if alphabet[y] == word[x]:
        unit.append(x)
    arr.append(unit)

  answer = []

  for y in range(len(arr)):
    if len(arr[y]) == 1:
      answer.append(True)
    else:
      check = True
      for i in range(len(arr[y])-1):
        if arr[y][i+1] - arr[y][i] != 1:
          check = False
          break
      answer.append(check) 

  if False not in answer:
    count += 1

print(count)