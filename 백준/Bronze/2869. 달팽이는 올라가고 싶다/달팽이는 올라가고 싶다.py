a,b,v = map(int,input().split())

k = (v-b)/(a-b)

if k == int(k):
    answer = int(k)
else:
    answer = int(k)+1
    
print(answer)