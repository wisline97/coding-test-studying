num1,num2 = map(int,input().split())
max = 0

for i in range(1,num1+1):
  if num1%i == 0 and num2%i == 0:
    if i > max:
      max = i

print(max)

answer = max * num1//max * num2//max

print(answer)