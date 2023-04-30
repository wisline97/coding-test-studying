import math

while True:
  n = int(input())

  if n != -1:
    n의제곱근 = int(math.sqrt(n))

    arr = []

    for i in range(1,n의제곱근+1):
        if n%i == 0:
            arr.append(i)

    answer = [i for i in arr]

    for i in arr:
        answer.append(int(n/i))

    answer = sorted(answer)

    del(answer[len(answer)-1])

    if sum(answer) == n:
        print(n,"=", " + ".join(map(str,answer)))
    else:
        print(n , "is NOT perfect.")
  else:
     break