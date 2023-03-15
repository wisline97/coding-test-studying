h, m = input().split()
h = int(h)
m = int(m)

if m >= 45:
    m -= 45
else:
    h -= 1
    m -= 45
    m += 60

if h < 0:
    h += 24

print(h, m)