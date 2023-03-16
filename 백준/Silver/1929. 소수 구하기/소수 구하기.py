import math

min,max = map(int,input().split())
m = int(math.sqrt(max))

max += 1

sieve = [False]*max

for i in range(2, max):
    sieve[i] = True

for i in range(2,m+1):
    if sieve[i] == True:
        for j in range(i+i,max,i):
            sieve[j] = False

for i in range(min,len(sieve)):
    if sieve[i] == True:
        print(i)