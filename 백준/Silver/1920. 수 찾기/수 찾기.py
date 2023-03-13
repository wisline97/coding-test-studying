n = int(input())
n_arr = input().split()
m = int(input())
m_arr = input().split()

set1 = set(n_arr)
set2 = set(m_arr)

set3 = set1.intersection(set2)

for i in range(m):
    if m_arr[i] in set3:
        print(1)
    else:
        print(0)