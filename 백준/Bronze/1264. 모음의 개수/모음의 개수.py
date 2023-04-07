import sys
while True:
    total = 0 
    word = sys.stdin.readline().rstrip()
    if word == "#":
        break
    else:
        total += word.count("a")
        total += word.count("A")
        total += word.count("e")
        total += word.count("E")
        total += word.count("i")
        total += word.count("I")
        total += word.count("o")
        total += word.count("O")
        total += word.count("u")
        total += word.count("U")
    print(total)