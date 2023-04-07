x = list(map(int,input()))
count = 0

while True:
    if len(x) == 1:
        answer = x[0]
        break
    count += 1
    answer = sum(x)
    if answer < 10:
        break
    else:
        x = list(map(int,str(answer)))        

print(count)
if answer % 3 == 0:
    print("YES")
else:
    print("NO")