dice1, dice2, dice3 = input().split()
dice1 = int(dice1)
dice2 = int(dice2)
dice3 = int(dice3)

prize = 0

if dice1 == dice2 == dice3:
    prize += 10000
    prize += dice1*1000

elif dice1 == dice2 or dice2 == dice3 or dice1 == dice3:
    prize += 1000
    if dice1 == dice2:
        prize += dice1*100
    elif dice1 == dice3:
        prize += dice1*100
    elif dice2 == dice3:
        prize += dice3*100

else:
    max = max(dice1,dice2,dice3)
    prize = max*100

print(prize)