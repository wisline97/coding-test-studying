dial = [i for i in range(12)]
str = ["","","","ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ"]

time = 0

word = input()
for i in range(len(word)):
    for x in range(len(str)):
        if word[i] in str[x]:
            time += dial[x]

print(time)