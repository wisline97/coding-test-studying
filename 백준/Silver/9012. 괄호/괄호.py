num = int(input())

def checker(str):
    check = False
    open_count = str.count("(")
    close_count = str.count(")")
    copy = list(str)

    if open_count != close_count:
        check = False
    else:
        for idx in range(len(copy)):
            if copy[idx] == "(":
                for idx2 in range(idx+1, len(copy)):
                    if copy[idx2] == ")":
                        copy[idx] = 0
                        copy[idx2] = 0
                        break
        VPS_count = copy.count(0) / 2
        if open_count == VPS_count:
            check = True
    return check

for get_str in range(num):
    str = input()
    check = checker(str)

    if check:
        print("YES")
    else:
        print("NO")