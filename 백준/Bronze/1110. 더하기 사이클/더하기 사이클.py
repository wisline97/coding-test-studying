n = input()
orign_num = n
count = 0

if len(n) == 1:
    n = "0" + n
    orign_num = n

while True:
    count += 1
    n_sum = str(sum(list(map(int,n))))
    if len(n_sum) == 1:
        n_sum = "0" + n_sum
    new_n = n[1] + n_sum[1]
    n = new_n
    if orign_num == new_n:
        break

print(count)