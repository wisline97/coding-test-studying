n = int(input())
draw = 1

for i in range(1,n+1):
  for x in range(n-i):
    print(" ",end="")
  for y in range(draw):
    print("*",end="")
  draw += 2
  print()

draw -= 4
jump = 1

for i in range(1,n+1):
  for x in range(jump):
    print(" ",end="")
  for y in range(draw):
    print("*",end="")
  jump += 1
  draw -= 2
  print()