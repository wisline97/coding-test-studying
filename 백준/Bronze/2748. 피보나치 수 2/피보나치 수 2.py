num = int(input())
total = [0,1]
for i in range(2,num+1):
    total.append(total[i-1] + total[i-2])
print(total[-1])