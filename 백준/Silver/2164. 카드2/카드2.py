from collections import deque

num = int(input())
card = [i+1 for i in range(num)]
card = deque(card)

while len(card) > 1:
    card.popleft()
    card.append(card.popleft())

print(card[0])